// 楼层查找 (Floor Directory)
// 在酒馆 #extensionsMenu 注入一个按钮，点开后弹出"楼栋目录"窗口：
//   - 命令栏输入纯数字 → 定位到该楼层
//   - 输入其它文字 → 关键词搜索楼层
//   - 点击结果行 → 就地展开该楼完整格式化内容（仅窗口内查看，不跳转真实聊天）
//
// 本模块刻意不静态 import 任何酒馆模块，所有数据/函数都在运行时从
// globalThis.SillyTavern.getContext() 取，以规避版本兼容问题。

let settings = {};
let extensionState = {};
let LOG_PREFIX = '[FloorDirectory]';

const MENU_BUTTON_ID = 'bai_bai_toolkit_floor_directory_button';
const MENU_CONTAINER_ID = 'bai_bai_toolkit_floor_directory_wand_container';
const STYLE_ID = 'bai_bai_toolkit_floor_directory_style';
const OVERLAY_CLASS = 'bai-bai-floor-overlay';
const INSTALL_GUARD_KEY = '__baiBaiToolkitFloorDirectoryInstalled';

const SNIPPET_RADIUS = 48; // 关键词命中处前后保留的字符数
const MAX_PREVIEW_LENGTH = 140; // 行内片段预览最大长度

export function configureFloorDirectory(context = {}) {
    settings = context.settings ?? settings;
    extensionState = context.extensionState ?? extensionState;
    LOG_PREFIX = context.logPrefix ?? LOG_PREFIX;
}

// ---------------------------------------------------------------------------
// 自写小工具（不从 utils.js 引入）
// ---------------------------------------------------------------------------

function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeRegExp(value) {
    return String(value ?? '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 去掉 HTML 标签并把空白折叠成单空格，用于搜索匹配与片段预览。
function stripTags(value) {
    const text = String(value ?? '')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<[^>]*>/g, ' ');
    const temp = document.createElement('textarea');
    temp.innerHTML = text;
    return temp.value.replace(/\s+/g, ' ').trim();
}

// 在转义后的纯文本上高亮命中词。先把 keyword 同样转义，确保与转义文本匹配。
function highlightHtml(plainText, keyword) {
    const safeText = escapeHtml(plainText);
    if (!keyword) {
        return safeText;
    }
    const safeKeyword = escapeHtml(keyword);
    const pattern = new RegExp(escapeRegExp(safeKeyword), 'gi');
    return safeText.replace(pattern, match => `<mark class="bai-bai-floor-hit">${match}</mark>`);
}

function toastSuccess(message) {
    if (globalThis.toastr?.success) {
        globalThis.toastr.success(message);
    } else {
        console.info(`${LOG_PREFIX} ${message}`);
    }
}

function toastError(message) {
    if (globalThis.toastr?.error) {
        globalThis.toastr.error(message);
    } else {
        console.error(`${LOG_PREFIX} ${message}`);
    }
}

function debounce(fn, delayMs) {
    let timer = null;
    return function debounced(...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, args);
        }, delayMs);
    };
}

// 截取以关键词为中心的片段，便于在窄行里看到命中上下文。
function buildSnippet(plainText, keyword) {
    if (!plainText) {
        return '';
    }
    if (!keyword) {
        return plainText.length > MAX_PREVIEW_LENGTH
            ? `${plainText.slice(0, MAX_PREVIEW_LENGTH)}…`
            : plainText;
    }
    const lower = plainText.toLowerCase();
    const index = lower.indexOf(keyword.toLowerCase());
    if (index < 0) {
        return plainText.length > MAX_PREVIEW_LENGTH
            ? `${plainText.slice(0, MAX_PREVIEW_LENGTH)}…`
            : plainText;
    }
    const start = Math.max(0, index - SNIPPET_RADIUS);
    const end = Math.min(plainText.length, index + keyword.length + SNIPPET_RADIUS);
    const prefix = start > 0 ? '…' : '';
    const suffix = end < plainText.length ? '…' : '';
    return `${prefix}${plainText.slice(start, end)}${suffix}`;
}

// ---------------------------------------------------------------------------
// 运行时取酒馆上下文
// ---------------------------------------------------------------------------

function getStContext() {
    try {
        return globalThis.SillyTavern?.getContext?.() ?? null;
    } catch (error) {
        console.debug(`${LOG_PREFIX} getContext failed`, error);
        return null;
    }
}

function getChatArray(ctx) {
    return Array.isArray(ctx?.chat) ? ctx.chat : [];
}

function getSpeakerName(ctx, message) {
    if (message?.name) {
        return String(message.name);
    }
    if (message?.is_user) {
        return String(ctx?.name1 ?? '我');
    }
    return String(ctx?.name2 ?? '角色');
}

// 把一条消息渲染成展示用 HTML；messageFormatting 缺失时回退为转义纯文本。
function renderMessageHtml(ctx, message, messageId) {
    const raw = typeof message?.mes === 'string' ? message.mes : '';
    const fn = ctx?.messageFormatting;
    if (typeof fn === 'function') {
        try {
            const name = getSpeakerName(ctx, message);
            const html = fn(raw, name, Boolean(message?.is_system), Boolean(message?.is_user), messageId);
            if (typeof html === 'string' && html.trim()) {
                return html;
            }
        } catch (error) {
            console.debug(`${LOG_PREFIX} messageFormatting failed`, error);
        }
    }
    return escapeHtml(raw).replace(/\n/g, '<br>');
}

// 把编辑后的文本写回指定楼层并持久化。
// 复刻酒馆 messageEditDone 的关键步骤：写 mes + 同步当前 swipe → 标记 tainted →
// 触发 MESSAGE_EDITED/MESSAGE_UPDATED → 刷新在屏 DOM → saveChat。
// 刻意按"所见即所存"保存原始文本，不跑酒馆内联编辑器的正则/宏/bias 后处理
// （那条管线无法经 getContext() 干净复用，且会让用户的宏被意外展开）。
async function saveFloorEdit(ctx, index, newText) {
    const chat = getChatArray(ctx);
    const message = chat[index];
    if (!message) {
        throw new Error('楼层不存在');
    }

    const text = String(newText ?? '');
    message.mes = text;
    // 与当前 swipe 同步，否则切换 swipe 会覆盖刚保存的内容。
    if (message.swipe_id !== undefined && Array.isArray(message.swipes) && message.swipes[message.swipe_id] !== undefined) {
        message.swipes[message.swipe_id] = text;
    }

    if (ctx?.chatMetadata && typeof ctx.chatMetadata === 'object') {
        ctx.chatMetadata.tainted = true;
    }

    const eventTypes = ctx?.eventTypes ?? ctx?.event_types;
    const emit = ctx?.eventSource?.emit;
    if (typeof emit === 'function' && eventTypes) {
        try {
            if (eventTypes.MESSAGE_EDITED) {
                await emit.call(ctx.eventSource, eventTypes.MESSAGE_EDITED, index);
            }
        } catch (error) {
            console.debug(`${LOG_PREFIX} MESSAGE_EDITED emit failed`, error);
        }
    }

    // 若该楼层正显示在聊天里，刷新它的 DOM。
    if (typeof ctx?.updateMessageBlock === 'function'
        && document.querySelector(`#chat .mes[mesid="${index}"]`)) {
        try {
            ctx.updateMessageBlock(index, message);
        } catch (error) {
            console.debug(`${LOG_PREFIX} updateMessageBlock failed`, error);
        }
    }

    if (typeof emit === 'function' && eventTypes) {
        try {
            if (eventTypes.MESSAGE_UPDATED) {
                await emit.call(ctx.eventSource, eventTypes.MESSAGE_UPDATED, index);
            }
        } catch (error) {
            console.debug(`${LOG_PREFIX} MESSAGE_UPDATED emit failed`, error);
        }
    }

    const saveChat = ctx?.saveChat;
    if (typeof saveChat !== 'function') {
        throw new Error('无法保存：当前酒馆版本未暴露保存接口');
    }
    await saveChat();
}

// ---------------------------------------------------------------------------
// 菜单按钮注入
// ---------------------------------------------------------------------------

export function installFloorDirectory() {
    if (window[INSTALL_GUARD_KEY]) {
        return;
    }

    ensureStyle();

    let attempts = 0;
    const tryInject = () => {
        const menu = document.getElementById('extensionsMenu');
        if (!menu) {
            attempts += 1;
            if (attempts <= 40) {
                setTimeout(tryInject, 500);
            }
            return;
        }

        if (document.getElementById(MENU_BUTTON_ID)) {
            window[INSTALL_GUARD_KEY] = true;
            return;
        }

        const container = document.createElement('div');
        container.id = MENU_CONTAINER_ID;
        container.className = 'extension_container';

        const button = document.createElement('div');
        button.id = MENU_BUTTON_ID;
        button.className = 'list-group-item flex-container flexGap5';
        button.tabIndex = 0;
        button.setAttribute('role', 'button');

        const icon = document.createElement('div');
        icon.className = 'fa-solid fa-building extensionsMenuExtensionButton';

        const label = document.createElement('span');
        label.textContent = '楼层查找';

        button.append(icon, label);
        container.appendChild(button);
        menu.appendChild(container);

        // 点击会冒泡到酒馆绑定在 html 上的处理器，魔棒菜单会自动收起，无需手动隐藏。
        const open = () => openFloorDirectoryDialog();
        button.addEventListener('click', open);
        button.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                open();
            }
        });

        window[INSTALL_GUARD_KEY] = true;
        console.debug(`${LOG_PREFIX} Floor directory button installed`);
    };

    tryInject();
}

// ---------------------------------------------------------------------------
// 弹窗
// ---------------------------------------------------------------------------

function openFloorDirectoryDialog() {
    // 同一时刻只允许一个弹窗。
    document.querySelector(`.${OVERLAY_CLASS}`)?.remove();

    const ctx = getStContext();
    const chat = getChatArray(ctx);

    const overlay = document.createElement('div');
    overlay.className = OVERLAY_CLASS;

    const dialog = document.createElement('div');
    dialog.className = 'bai-bai-floor-dialog';
    dialog.tabIndex = -1;

    // ---- 头部 ----
    const head = document.createElement('div');
    head.className = 'bai-bai-floor-head';

    const title = document.createElement('div');
    title.className = 'bai-bai-floor-title';
    title.textContent = '楼层查找';

    const count = document.createElement('div');
    count.className = 'bai-bai-floor-count';
    count.textContent = chat.length ? `共 ${chat.length} 层` : '暂无楼层';

    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'bai-bai-floor-close';
    closeButton.setAttribute('aria-label', '关闭');
    closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    head.append(title, count, closeButton);

    // ---- 命令栏 ----
    const bar = document.createElement('div');
    bar.className = 'bai-bai-floor-bar';

    const barIcon = document.createElement('i');
    barIcon.className = 'fa-solid fa-magnifying-glass bai-bai-floor-bar-icon';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'bai-bai-floor-input';
    input.placeholder = '输入楼层号 / 关键词…';
    input.setAttribute('aria-label', '输入楼层号或关键词');

    const hint = document.createElement('div');
    hint.className = 'bai-bai-floor-hint';
    hint.textContent = '数字 = 定位楼层 · 文字 = 关键词搜索';

    bar.append(barIcon, input);

    // ---- 列表 ----
    const list = document.createElement('div');
    list.className = 'bai-bai-floor-list';

    dialog.append(head, bar, hint, list);
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);

    // ---- 关闭逻辑 ----
    const close = () => {
        document.removeEventListener('keydown', handleKeydown, true);
        overlay.remove();
    };
    const handleKeydown = event => {
        if (event.key === 'Escape') {
            event.preventDefault();
            event.stopPropagation();
            close();
        }
    };
    closeButton.addEventListener('click', close);
    overlay.addEventListener('mousedown', event => {
        if (event.target === overlay) {
            close();
        }
    });
    document.addEventListener('keydown', handleKeydown, true);

    // ---- 渲染逻辑 ----
    const renderState = { expanded: new Set() };

    const renderEmpty = message => {
        list.innerHTML = '';
        const empty = document.createElement('div');
        empty.className = 'bai-bai-floor-empty';
        empty.textContent = message;
        list.appendChild(empty);
    };

    const renderRows = (entries, keyword) => {
        list.innerHTML = '';

        if (!entries.length) {
            const message = keyword
                ? `没有楼层匹配「${keyword}」`
                : '当前没有可显示的楼层';
            renderEmpty(message);
            return;
        }

        const fragment = document.createDocumentFragment();
        for (const entry of entries) {
            fragment.appendChild(buildRow(entry, keyword));
        }
        list.appendChild(fragment);
    };

    const buildRow = (entry, keyword) => {
        const { index, message, plainText } = entry;
        const isUser = Boolean(message?.is_user);

        const row = document.createElement('div');
        row.className = 'bai-bai-floor-row';
        row.classList.add(isUser ? 'bai-bai-floor-row-user' : 'bai-bai-floor-row-bot');
        if (renderState.expanded.has(index)) {
            row.classList.add('bai-bai-floor-row-open');
        }

        // 楼层轨：竖直强调条 + 表格数字
        const rail = document.createElement('div');
        rail.className = 'bai-bai-floor-rail';
        const num = document.createElement('div');
        num.className = 'bai-bai-floor-num';
        num.textContent = String(index);
        rail.appendChild(num);

        const main = document.createElement('div');
        main.className = 'bai-bai-floor-main';

        const meta = document.createElement('div');
        meta.className = 'bai-bai-floor-meta';
        const speaker = document.createElement('span');
        speaker.className = 'bai-bai-floor-speaker';
        speaker.textContent = getSpeakerName(ctx, message);
        const tag = document.createElement('span');
        tag.className = 'bai-bai-floor-tag';
        tag.textContent = isUser ? '我' : '角色';
        meta.append(speaker, tag);

        const snippet = document.createElement('div');
        snippet.className = 'bai-bai-floor-snippet';
        snippet.innerHTML = highlightHtml(buildSnippet(plainText, keyword), keyword);

        // 展开区：正文预览(.bai-bai-floor-detail) + 操作栏(.bai-bai-floor-actions)，
        // 进入编辑后正文换成 textarea + 保存/取消。
        const body = document.createElement('div');
        body.className = 'bai-bai-floor-body';

        const detail = document.createElement('div');
        detail.className = 'bai-bai-floor-detail mes_text';

        const actions = document.createElement('div');
        actions.className = 'bai-bai-floor-actions';
        const editButton = document.createElement('button');
        editButton.type = 'button';
        editButton.className = 'bai-bai-floor-action';
        editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i><span>编辑</span>';

        body.append(detail, actions);

        const renderView = () => {
            detail.innerHTML = renderMessageHtml(ctx, message, index);
            actions.innerHTML = '';
            actions.appendChild(editButton);
        };

        const enterEdit = () => {
            const textarea = document.createElement('textarea');
            textarea.className = 'bai-bai-floor-editor';
            textarea.value = typeof message?.mes === 'string' ? message.mes : '';
            textarea.spellcheck = false;

            const save = document.createElement('button');
            save.type = 'button';
            save.className = 'bai-bai-floor-action bai-bai-floor-action-primary';
            save.innerHTML = '<i class="fa-solid fa-check"></i><span>保存</span>';

            const cancel = document.createElement('button');
            cancel.type = 'button';
            cancel.className = 'bai-bai-floor-action';
            cancel.innerHTML = '<i class="fa-solid fa-xmark"></i><span>取消</span>';

            detail.innerHTML = '';
            detail.appendChild(textarea);
            actions.innerHTML = '';
            actions.append(cancel, save);

            const autosize = () => {
                textarea.style.height = 'auto';
                textarea.style.height = `${Math.min(textarea.scrollHeight, Math.round(window.innerHeight * 0.5))}px`;
            };
            textarea.addEventListener('input', autosize);
            requestAnimationFrame(() => {
                autosize();
                textarea.focus();
            });

            cancel.addEventListener('click', renderView);

            const doSave = async () => {
                const freshCtx = getStContext();
                if (!freshCtx) {
                    toastError('无法读取聊天上下文，保存失败');
                    return;
                }
                save.disabled = true;
                cancel.disabled = true;
                const previousHtml = save.innerHTML;
                save.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i><span>保存中</span>';
                try {
                    await saveFloorEdit(freshCtx, index, textarea.value);
                    entry.plainText = stripTags(textarea.value);
                    toastSuccess(`已保存第 ${index} 层`);
                    renderView();
                } catch (error) {
                    console.error(`${LOG_PREFIX} save floor edit failed`, error);
                    save.disabled = false;
                    cancel.disabled = false;
                    save.innerHTML = previousHtml;
                    toastError(`保存失败：${error?.message ?? error}`);
                }
            };
            save.addEventListener('click', doSave);
            // Ctrl/Cmd+Enter 保存。
            textarea.addEventListener('keydown', event => {
                if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
                    event.preventDefault();
                    void doSave();
                }
            });
        };

        editButton.addEventListener('click', enterEdit);

        if (renderState.expanded.has(index)) {
            row.classList.add('bai-bai-floor-row-open');
            renderView();
        }

        // 展开区内的点击不冒泡到行（按钮在切换编辑态时会被重建/移除，
        // 用 closest 在事件冒泡时已无法定位，故直接在容器上拦截）。
        body.addEventListener('click', event => event.stopPropagation());

        main.append(meta, snippet, body);
        row.append(rail, main);

        const toggle = () => {
            const opening = !renderState.expanded.has(index);
            if (opening) {
                renderState.expanded.add(index);
                row.classList.add('bai-bai-floor-row-open');
                renderView();
            } else {
                renderState.expanded.delete(index);
                detail.innerHTML = '';
                actions.innerHTML = '';
                row.classList.remove('bai-bai-floor-row-open');
            }
        };

        row.addEventListener('click', event => {
            // 展开后的正文/操作区可能含可交互元素，点这些区域不收起。
            if (event.target instanceof Element && event.target.closest('.bai-bai-floor-body')) {
                return;
            }
            toggle();
        });

        return row;
    };

    const apply = rawValue => {
        const value = String(rawValue ?? '').trim();
        const freshCtx = getStContext();
        const freshChat = getChatArray(freshCtx);

        if (!freshCtx || !freshChat.length) {
            count.textContent = '暂无楼层';
            renderEmpty('当前没有打开的聊天');
            return;
        }
        count.textContent = `共 ${freshChat.length} 层`;

        // 定位模式：纯数字
        if (/^\d+$/.test(value)) {
            const target = Number(value);
            if (target < 0 || target >= freshChat.length) {
                renderEmpty(`楼层号超出范围，本聊天共 ${freshChat.length} 层（0 ~ ${freshChat.length - 1}）`);
                return;
            }
            renderState.expanded = new Set([target]);
            const message = freshChat[target];
            renderRows([{
                index: target,
                message,
                plainText: stripTags(message?.mes ?? ''),
            }], '');
            return;
        }

        const keyword = value;

        // 默认（空输入）：展示全部楼层，最新在上。
        if (!keyword) {
            const entries = freshChat.map((message, index) => ({
                index,
                message,
                plainText: stripTags(message?.mes ?? ''),
            })).reverse();
            renderRows(entries, '');
            return;
        }

        // 关键词搜索模式
        const lowerKeyword = keyword.toLowerCase();
        const entries = [];
        for (let index = 0; index < freshChat.length; index += 1) {
            const message = freshChat[index];
            const plainText = stripTags(message?.mes ?? '');
            if (plainText.toLowerCase().includes(lowerKeyword)) {
                entries.push({ index, message, plainText });
            }
        }
        entries.reverse();
        renderRows(entries, keyword);
    };

    const debouncedApply = debounce(apply, 180);
    input.addEventListener('input', () => debouncedApply(input.value));
    input.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            apply(input.value);
        }
    });

    // 初始：展示全部楼层
    apply('');

    requestAnimationFrame(() => {
        dialog.focus({ preventScroll: true });
        input.focus({ preventScroll: true });
    });
}

// ---------------------------------------------------------------------------
// 样式（全部继承 --SmartTheme* 主题变量）
// ---------------------------------------------------------------------------

function ensureStyle() {
    let style = document.getElementById(STYLE_ID);
    if (!style) {
        style = document.createElement('style');
        style.id = STYLE_ID;
        document.head.appendChild(style);
    }
    style.textContent = getStyleCss();
}

function getStyleCss() {
    return `
.${OVERLAY_CLASS} {
    position: fixed;
    inset: 0;
    z-index: 10010;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: rgba(0, 0, 0, 0.45);
    animation: baiBaiFloorFade 0.16s ease;
}

.${OVERLAY_CLASS} .bai-bai-floor-dialog {
    display: flex;
    flex-direction: column;
    width: min(560px, 100%);
    max-height: min(82vh, 760px);
    overflow: hidden;
    color: var(--SmartThemeBodyColor);
    background: var(--SmartThemeBlurTintColor);
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 12px;
    box-shadow: 0 18px 50px var(--SmartThemeShadowColor, rgba(0, 0, 0, 0.4));
    backdrop-filter: blur(calc(var(--SmartThemeBlurStrength, 10px)));
    -webkit-backdrop-filter: blur(calc(var(--SmartThemeBlurStrength, 10px)));
    outline: none;
    animation: baiBaiFloorRise 0.18s ease;
}

.${OVERLAY_CLASS} .bai-bai-floor-head {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--SmartThemeBorderColor);
}

.${OVERLAY_CLASS} .bai-bai-floor-title {
    font-size: 1.05rem;
    font-weight: 600;
    letter-spacing: 0.02em;
}

.${OVERLAY_CLASS} .bai-bai-floor-count {
    margin-left: auto;
    font-size: 0.8rem;
    font-variant-numeric: tabular-nums;
    color: var(--SmartThemeEmColor);
}

.${OVERLAY_CLASS} .bai-bai-floor-close {
    flex: 0 0 auto;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--SmartThemeBodyColor);
    background: transparent;
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 8px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.12s ease, background 0.12s ease;
}

.${OVERLAY_CLASS} .bai-bai-floor-close:hover {
    opacity: 1;
    background: rgba(127, 127, 127, 0.12);
}

.${OVERLAY_CLASS} .bai-bai-floor-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 14px 16px 0;
    padding: 0 12px;
    height: 42px;
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 10px;
    background: var(--SmartThemeChatTintColor);
}

.${OVERLAY_CLASS} .bai-bai-floor-bar:focus-within {
    border-color: var(--SmartThemeQuoteColor);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--SmartThemeQuoteColor) 35%, transparent);
}

.${OVERLAY_CLASS} .bai-bai-floor-bar-icon {
    flex: 0 0 auto;
    color: var(--SmartThemeQuoteColor);
    opacity: 0.85;
}

.${OVERLAY_CLASS} .bai-bai-floor-input {
    flex: 1 1 auto;
    min-width: 0;
    height: 100%;
    color: var(--SmartThemeBodyColor);
    background: transparent;
    border: none;
    outline: none;
    font-size: 0.95rem;
    font-family: inherit;
}

.${OVERLAY_CLASS} .bai-bai-floor-input::placeholder {
    color: var(--SmartThemeEmColor);
}

.${OVERLAY_CLASS} .bai-bai-floor-hint {
    margin: 6px 16px 10px;
    font-size: 0.72rem;
    color: var(--SmartThemeEmColor);
    letter-spacing: 0.02em;
}

.${OVERLAY_CLASS} .bai-bai-floor-list {
    flex: 1 1 auto;
    overflow-y: auto;
    padding: 4px 12px 14px;
    -webkit-overflow-scrolling: touch;
}

.${OVERLAY_CLASS} .bai-bai-floor-empty {
    padding: 36px 16px;
    text-align: center;
    color: var(--SmartThemeEmColor);
    font-size: 0.88rem;
    line-height: 1.6;
}

.${OVERLAY_CLASS} .bai-bai-floor-row {
    display: flex;
    gap: 12px;
    padding: 10px 6px;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.12s ease;
}

.${OVERLAY_CLASS} .bai-bai-floor-row + .bai-bai-floor-row {
    border-top: 1px solid color-mix(in srgb, var(--SmartThemeBorderColor) 60%, transparent);
}

.${OVERLAY_CLASS} .bai-bai-floor-row:hover {
    background: rgba(127, 127, 127, 0.08);
}

.${OVERLAY_CLASS} .bai-bai-floor-row-open {
    background: color-mix(in srgb, var(--SmartThemeQuoteColor) 10%, transparent);
}

/* 楼层轨：竖直强调条 + 表格数字（电梯楼层指示器） */
.${OVERLAY_CLASS} .bai-bai-floor-rail {
    flex: 0 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    min-width: 46px;
    padding-left: 8px;
    border-left: 3px solid var(--SmartThemeBotMesBlurTintColor);
}

.${OVERLAY_CLASS} .bai-bai-floor-row-user .bai-bai-floor-rail {
    border-left-color: var(--SmartThemeUserMesBlurTintColor);
}

.${OVERLAY_CLASS} .bai-bai-floor-num {
    font-family: "SF Mono", "Roboto Mono", "DejaVu Sans Mono", Consolas, ui-monospace, monospace;
    font-variant-numeric: tabular-nums;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.25;
    color: var(--SmartThemeQuoteColor);
}

.${OVERLAY_CLASS} .bai-bai-floor-main {
    flex: 1 1 auto;
    min-width: 0;
}

.${OVERLAY_CLASS} .bai-bai-floor-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 3px;
}

.${OVERLAY_CLASS} .bai-bai-floor-speaker {
    font-size: 0.82rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.${OVERLAY_CLASS} .bai-bai-floor-tag {
    flex: 0 0 auto;
    font-size: 0.66rem;
    padding: 1px 7px;
    border-radius: 999px;
    color: var(--SmartThemeEmColor);
    border: 1px solid color-mix(in srgb, var(--SmartThemeBorderColor) 70%, transparent);
}

.${OVERLAY_CLASS} .bai-bai-floor-snippet {
    font-size: 0.85rem;
    line-height: 1.45;
    color: var(--SmartThemeEmColor);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.${OVERLAY_CLASS} .bai-bai-floor-row-open .bai-bai-floor-snippet {
    display: none;
}

.${OVERLAY_CLASS} .bai-bai-floor-hit {
    background: color-mix(in srgb, var(--SmartThemeQuoteColor) 32%, transparent);
    color: var(--SmartThemeBodyColor);
    border-radius: 3px;
    padding: 0 1px;
}

.${OVERLAY_CLASS} .bai-bai-floor-body {
    display: none;
    cursor: auto;
}

.${OVERLAY_CLASS} .bai-bai-floor-row-open .bai-bai-floor-body {
    display: block;
}

.${OVERLAY_CLASS} .bai-bai-floor-detail {
    margin-top: 8px;
    padding: 10px 12px;
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--SmartThemeBodyColor);
    background: var(--SmartThemeChatTintColor);
    border: 1px solid color-mix(in srgb, var(--SmartThemeBorderColor) 70%, transparent);
    border-radius: 8px;
    max-height: 46vh;
    overflow-y: auto;
    overflow-wrap: anywhere;
}

.${OVERLAY_CLASS} .bai-bai-floor-detail img {
    max-width: 100%;
    height: auto;
}

.${OVERLAY_CLASS} .bai-bai-floor-editor {
    width: 100%;
    min-height: 96px;
    box-sizing: border-box;
    padding: 4px 2px;
    color: var(--SmartThemeBodyColor);
    background: transparent;
    border: none;
    outline: none;
    resize: none;
    font-family: inherit;
    font-size: 0.9rem;
    line-height: 1.6;
}

.${OVERLAY_CLASS} .bai-bai-floor-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 8px;
}

.${OVERLAY_CLASS} .bai-bai-floor-action {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 12px;
    font-size: 0.8rem;
    font-family: inherit;
    color: var(--SmartThemeBodyColor);
    background: transparent;
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.12s ease, opacity 0.12s ease;
}

.${OVERLAY_CLASS} .bai-bai-floor-action:hover {
    background: rgba(127, 127, 127, 0.12);
}

.${OVERLAY_CLASS} .bai-bai-floor-action:disabled {
    opacity: 0.6;
    cursor: default;
}

.${OVERLAY_CLASS} .bai-bai-floor-action-primary {
    color: var(--SmartThemeQuoteColor);
    border-color: var(--SmartThemeQuoteColor);
}

.${OVERLAY_CLASS} .bai-bai-floor-action-primary:hover {
    background: color-mix(in srgb, var(--SmartThemeQuoteColor) 14%, transparent);
}

.${OVERLAY_CLASS} .bai-bai-floor-close:focus-visible,
.${OVERLAY_CLASS} .bai-bai-floor-action:focus-visible,
.${OVERLAY_CLASS} .bai-bai-floor-row:focus-visible {
    outline: 2px solid var(--SmartThemeQuoteColor);
    outline-offset: 2px;
}

@keyframes baiBaiFloorFade {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes baiBaiFloorRise {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 600px) {
    .${OVERLAY_CLASS} {
        padding: 0;
        align-items: stretch;
        justify-content: stretch;
    }
    .${OVERLAY_CLASS} .bai-bai-floor-dialog {
        width: 100%;
        max-height: 100%;
        height: 100%;
        border-radius: 0;
        border: none;
    }
}

@media (prefers-reduced-motion: reduce) {
    .${OVERLAY_CLASS},
    .${OVERLAY_CLASS} .bai-bai-floor-dialog {
        animation: none;
    }
}
`;
}
