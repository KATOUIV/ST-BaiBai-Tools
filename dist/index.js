const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["vue.runtime.esm-bundler.GI5_MaGP.chunk.js","runtime-core.esm-bundler.DIxo5j2D.chunk.js","vue-draggable-next.esm-bundler.DMkWxeed.chunk.js","index.C_abXisK.chunk.js","index.B5fiB6ig.chunk.js","index.DR6-X5CW.chunk.js","index.BDKGZZC0.chunk.js","index.CZC4xwU-.chunk.js","index.Cdu3_o3o.chunk.js","index.BZrLMojD.chunk.js"])))=>i.map(i=>d[i]);
import*as Q from"../../../../../script.js";import{messageFormatting as ov,eventSource as M,event_types as w,saveSettingsDebounced as Yt,getRequestHeaders as me,characters as Xt,this_chid as $e,setActiveCharacter as zp,openCharacterChat as ml,selectCharacterById as av,getCurrentChatId as We,saveSettings as fr,chat_metadata as iv,reloadCurrentChat as Do}from"../../../../../script.js";import{AutoComplete as xn}from"../../../../../scripts/autocomplete/AutoComplete.js";import{extension_settings as j,renderExtensionTemplateAsync as da,writeExtensionField as sv,extensionTypes as Vp}from"../../../../../scripts/extensions.js";import*as lv from"../../../../../scripts/group-chats.js";import{selected_group as St}from"../../../../../scripts/group-chats.js";import{t as d}from"../../../../../scripts/i18n.js";import{callGenericPopup as fe,POPUP_TYPE as ge,POPUP_RESULT as Kn}from"../../../../../scripts/popup.js";import{isMobile as de,favsToHotswap as cv}from"../../../../../scripts/RossAscends-mods.js";import{getPresetManager as gr}from"../../../../../scripts/preset-manager.js";import{power_user as Y,applyPowerUserSettings as uv}from"../../../../../scripts/power-user.js";import{sendMessageAs as dv}from"../../../../../scripts/slash-commands.js";import{isAdmin as pv}from"../../../../../scripts/user.js";import{timestampToMoment as Eg,getStringHash as qr,uuidv4 as lt,escapeHtml as Lr,resetScrollHeight as bi,getCharaFilename as mv,download as su,setInfoBlock as fl,regexFromString as fv,debounce as gl,cancelDebounce as gv,getFileText as bv}from"../../../../../scripts/utils.js";import{SCRIPT_TYPES as H,getScriptsByType as he,getCurrentPresetAPI as io,getCurrentPresetName as so,substitute_find_regex as Sg,runRegexScript as hv}from"../../../../../scripts/extensions/regex/engine.js";import{promptManager as m,oai_settings as z,settingsToUpdate as _v,openai_setting_names as Ja,openai_settings as Co}from"../../../../../scripts/openai.js";import{getTokenizerModel as lo}from"../../../../../scripts/tokenizers.js";import{INJECTION_POSITION as De}from"../../../../../scripts/PromptManager.js";import{renderTemplateAsync as yv}from"../../../../../scripts/templates.js";import{world_names as Ir,METADATA_KEY as Ev,world_info as Sv,selected_world_info as vg,loadWorldInfo as Tg,setWIOriginalDataValue as Up,saveWorldInfo as vv}from"../../../../../scripts/world-info.js";const Tv="modulepreload",xv=function(e){return"/"+e},Wp={},ht=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=i?.nonce||i?.getAttribute("nonce");o=l(n.map(c=>{if(c=xv(c),c in Wp)return;Wp[c]=!0;const u=c.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const b=document.createElement("link");if(b.rel=u?"stylesheet":Tv,u||(b.as="script"),b.crossOrigin="",b.href=c,s&&b.setAttribute("nonce",s),document.head.appendChild(b),u)return new Promise((v,y)=>{b.addEventListener("load",v),b.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return o.then(i=>{for(const s of i||[])s.status==="rejected"&&a(s.reason);return t().catch(a)})},Kp=`<div class="bai_bai_toolkit_settings">\r
    <div class="inline-drawer">\r
        <div class="inline-drawer-toggle inline-drawer-header">\r
            <b>柏宝箱<small class="bai_bai_toolkit_update_badge"\r
                    style="display: none; color: var(--SmartThemeBodyColor); background: var(--SmartThemeQuoteColor); border-radius: 4px; padding: 2px 4px; margin-left: 4px; font-size: 0.8em;">new</small></b>\r
            <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>\r
        </div>\r
        <div class="inline-drawer-content" style="padding-top: 5px;">\r
            <div class="flex-container flexFlowColumn" style="gap: 5px;">\r
                <div class="bai_bai_toolkit_version_info flex-container justifySpaceBetween alignItemCenter"\r
                    style="margin-bottom: 5px; padding: 0 5px;">\r
                    <div class="flex-container alignItemCenter flexGap5" style="opacity: 0.8; font-size: 0.9em;">\r
                        <span>v<span class="bai_bai_toolkit_current_version"></span></span>\r
                        <span style="opacity: 0.5;">|</span>\r
                        <span>by 柏柏</span>\r
                    </div>\r
                    <div class="bai_bai_toolkit_update_container flex-container alignItemCenter">\r
                        <span class="bai_bai_toolkit_update_status" style="margin-right: 10px; opacity: 0.7;"></span>\r
                        <div class="menu_button menu_button_icon bai_bai_toolkit_update_button" style="display: none;"\r
                            title="更新扩展">\r
                            <i class="fa-solid fa-download"></i>\r
                            <span>更新</span>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <!-- 导航栏 -->\r
                <div class="bai_bai_toolkit_tabs flex-container"\r
                    style="border-bottom: 1px solid var(--SmartThemeBorderColor); gap: 4px; margin-bottom: 10px; margin-top: 5px;">\r
                    <div class="bai_bai_toolkit_tab active" data-target="bai_bai_toolkit_tab_optimizations"\r
                        style="flex: 1; text-align: center; color: var(--SmartThemeQuoteColor); border-bottom: 2px solid var(--SmartThemeQuoteColor); padding: 8px 12px; cursor: pointer; opacity: 1; transition: all 0.2s ease;">\r
                        <i class="fa-solid fa-rocket"></i> 优化\r
                    </div>\r
                    <div class="bai_bai_toolkit_tab" data-target="bai_bai_toolkit_tab_features"\r
                        style="flex: 1; text-align: center; border-bottom: 2px solid transparent; padding: 8px 12px; cursor: pointer; opacity: 0.6; transition: all 0.2s ease;">\r
                        <i class="fa-solid fa-wand-magic-sparkles"></i> 功能\r
                    </div>\r
                    <div class="bai_bai_toolkit_tab" data-target="bai_bai_toolkit_tab_baibaoku"\r
                        style="flex: 1; text-align: center; border-bottom: 2px solid transparent; padding: 8px 12px; cursor: pointer; opacity: 0.6; transition: all 0.2s ease;">\r
                        <i class="fa-solid fa-box-archive"></i> 柏宝库\r
                    </div>\r
                </div>\r
\r
                <!-- 性能优化 (Optimizations) - 默认显示 -->\r
                <div id="bai_bai_toolkit_tab_optimizations" class="bai_bai_toolkit_tab_content">\r
                    <!-- 1. 聊天优化 -->\r
                    <fieldset\r
                        style="border: 1px solid var(--SmartThemeBorderColor); border-radius: 5px; padding: 8px; margin-bottom: 10px;">\r
                        <legend style="font-size: 0.9em; font-weight: bold; opacity: 0.8;"><i\r
                                class="fa-solid fa-comments"></i> 聊天优化</legend>\r
                        <div class="flex-container flexFlowColumn" style="gap: 5px;">\r
                            <label class="checkbox_label" for="bai_bai_toolkit_welcome_recent_chat_direct_open_enabled"\r
                                title="从欢迎页最近聊天进入普通角色聊天时，直接打开目标聊天文件，避免先渲染角色上一次聊天。">\r
                                <input id="bai_bai_toolkit_welcome_recent_chat_direct_open_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>主页进入聊天优化</span>\r
                            </label>\r
                            <label class="checkbox_label"
                                for="bai_bai_toolkit_long_chat_dom_render_optimization_enabled"
                                title="长聊天进入后自动滚到底部，并在当前聊天 DOM 文本量较大时为楼层启用 content-visibility 和缓存占位高度，减少屏幕外楼层重排绘制。">
                                <input id="bai_bai_toolkit_long_chat_dom_render_optimization_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>长聊天渲染优化</span>
                            </label>
                            <label class="checkbox_label"
                                for="bai_bai_toolkit_reduce_loaded_floors_enabled"
                                title="将酒馆“加载消息数量”限制为最多 10 层。原值为 0（加载全部）或大于 10 时改为 10；1 到 10 保持不变。">
                                <input id="bai_bai_toolkit_reduce_loaded_floors_enabled" type="checkbox"
                                    class="checkbox">
                                <span>减少加载楼层数</span>
                            </label>
                            <label class="checkbox_label"
                                for="bai_bai_toolkit_message_completion_scroll_to_middle_enabled"
                                title="生成开始时如果聊天停在底部，生成结束后将最新消息定位到聊天区域中部附近；如果生成期间手动滚动查看其它位置，则不会自动滚动。">\r
                                <input id="bai_bai_toolkit_message_completion_scroll_to_middle_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>生成完成后定位新消息</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_fast_chat_list_enabled"\r
                                title="普通角色空搜索时，先显示轻量聊天文件列表，再补齐详细信息。">\r
                                <input id="bai_bai_toolkit_fast_chat_list_enabled" type="checkbox" class="checkbox">\r
                                <span>管理聊天文件请求加速</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_chat_list_scroll_optimization_enabled"\r
                                title="减少管理聊天文件列表屏幕外条目的布局和绘制，缓解大量聊天文件时的滚动卡顿。">\r
                                <input id="bai_bai_toolkit_chat_list_scroll_optimization_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>管理聊天文件滚动优化</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_chat_list_auto_clear_enabled"\r
                                title="管理聊天文件窗口关闭后，清空已生成的聊天文件列表元素，减少关闭后的 DOM 占用。">\r
                                <input id="bai_bai_toolkit_chat_list_auto_clear_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>管理聊天文件关闭清理</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_chat_loss_mitigation_enabled"\r
                                title="切换正则等触发聊天重载时，若酒馆从磁盘重读聊天失败，会用问候语覆盖并导致整段聊天记录丢失。开启后会在重载前备份内存中的聊天，检测到记录被覆盖时自动恢复并重新写盘。建议保持开启。">\r
                                <input id="bai_bai_toolkit_chat_loss_mitigation_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>缓解酒馆丢失聊天问题</span>\r
                            </label>\r
                            <label class="checkbox_label"\r
                                for="bai_bai_toolkit_chat_delete_edit_flow_optimization_enabled"\r
                                title="用删除消息模式删楼后，允许上一层编辑区立即打开；发送、继续、冒充或重新生成前会先提交当前消息编辑。">\r
                                <input id="bai_bai_toolkit_chat_delete_edit_flow_optimization_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>删楼后快速编辑</span>\r
                            </label>\r
                            <label class="checkbox_label"\r
                                for="bai_bai_toolkit_translate_message_updated_optimization_enabled"\r
                                title="自动翻译关闭且消息没有翻译缓存时，跳过翻译扩展在消息更新事件里的无效处理，避免长聊天反复全量保存。">\r
                                <input id="bai_bai_toolkit_translate_message_updated_optimization_enabled"\r
                                    type="checkbox" class="checkbox">\r
                                <span>翻译更新事件保存优化</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_resize_guard_enabled"\r
                                title="减少输入框和自动补全在窗口尺寸变化时的重复布局计算。">\r
                                <input id="bai_bai_toolkit_resize_guard_enabled" type="checkbox" class="checkbox">\r
                                <span>输入框响应优化</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_mobile_auto_keyboard_suppression_enabled"\r
                                title="手机端打开楼层编辑框、管理聊天文件窗口或进入角色聊天时，拦截程序自动聚焦，避免输入法自动弹出；手动点击输入框仍可输入。">\r
                                <input id="bai_bai_toolkit_mobile_auto_keyboard_suppression_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>禁止输入法自动弹出</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_mobile_message_edit_scroll_guard_enabled"\r
                                title="手机端编辑楼层时，抑制键盘挤压布局触发的聊天区自动滚动补偿，避免编辑楼层被顶走。">\r
                                <input id="bai_bai_toolkit_mobile_message_edit_scroll_guard_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>编辑楼层时禁用自动滚动</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_message_edit_bottom_actions_enabled"\r
                                title="编辑酒馆原生楼层时，在编辑区下方额外显示确认和取消按钮，作用与顶部原生按钮一致。">\r
                                <input id="bai_bai_toolkit_message_edit_bottom_actions_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>编辑楼层下方增加按钮</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_save_request_gzip_enabled"\r
                                title="仅对公网访问的聊天保存接口请求体启用 Gzip 压缩；本地和局域网 IP 会自动跳过。">\r
                                <input id="bai_bai_toolkit_save_request_gzip_enabled" type="checkbox" class="checkbox">\r
                                <span>聊天保存请求 Gzip 压缩</span>\r
                            </label>\r
                        </div>\r
                    </fieldset>\r
\r
                    <!-- 2. 预设优化 -->\r
                    <fieldset\r
                        style="border: 1px solid var(--SmartThemeBorderColor); border-radius: 5px; padding: 8px; margin-bottom: 10px;">\r
                        <legend style="font-size: 0.9em; font-weight: bold; opacity: 0.8;"><i\r
                                class="fa-solid fa-sliders"></i> 预设优化</legend>\r
                        <div class="flex-container flexFlowColumn" style="gap: 5px;">\r
                            <label class="checkbox_label" for="bai_bai_toolkit_preset_prompt_codemirror_editor_enabled"\r
                                title="使用 CodeMirror 替代预设条目 prompt 原生 textarea，并在保存前同步回 SillyTavern 原表单。">\r
                                <input id="bai_bai_toolkit_preset_prompt_codemirror_editor_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>预设内容 CodeMirror 编辑器</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_preset_scroll_optimization_enabled"
                                title="对预设界面列表条目启用安全的绘制隔离，减少部分重绘开销。">
                                <input id="bai_bai_toolkit_preset_scroll_optimization_enabled" type="checkbox"
                                    class="checkbox">
                                <span>预设界面滚动优化</span>
                            </label>
                            <label class="checkbox_label" for="bai_bai_toolkit_preset_interface_collapse_enabled"
                                title="默认开启。把 OpenAI 预设界面中较少使用的设置块收进一个可展开的折叠区；若 SillyTavern-Layout 的同名折叠已启用，则自动让位避免重复折叠。">
                                <input id="bai_bai_toolkit_preset_interface_collapse_enabled" type="checkbox"
                                    class="checkbox">
                                <span>预设界面折叠</span>
                            </label>
                            <label class="checkbox_label" for="bai_bai_toolkit_preset_drag_optimization_enabled"
                                title="拖拽预设条目时不实时挤开周围条目，只显示插入线，松手后才重排并保存。手机端使用长按拖拽，滑动会取消拖拽以避免误触。">
                                <input id="bai_bai_toolkit_preset_drag_optimization_enabled" type="checkbox"
                                    class="checkbox">\r
                                <span>预设条目拖拽优化</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_preset_mobile_whole_row_drag_enabled"\r
                                title="开启后，手机端可长按预设条目任意非按钮区域拖拽；关闭后，手机端只能长按左侧拖拽手柄。">\r
                                <input id="bai_bai_toolkit_preset_mobile_whole_row_drag_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>手机预设条目整条拖拽</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_preset_switch_optimization_enabled"\r
                                title="切换 OpenAI 预设后立即刷新预设条目列表，并在列表显示后再异步刷新 Token 统计。手机端会先收起预设下拉框，再继续执行切换逻辑。删除当前预设后会优先选中下一项。">\r
                                <input id="bai_bai_toolkit_preset_switch_optimization_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>切换预设快速刷新</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_preset_toggle_optimization_enabled"\r
                                title="切换或保存已有预设条目时只更新当前条目，并延迟刷新 Token 统计，避免整份预设列表立即重建。">\r
                                <input id="bai_bai_toolkit_preset_toggle_optimization_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>预设快速操作</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_preset_grouping_enabled"\r
                                title="使用 Vue 列表接管预设条目列表，支持预设分组、分组拖拽和分组内条目管理。">\r
                                <input id="bai_bai_toolkit_preset_grouping_enabled" type="checkbox" class="checkbox">\r
                                <span>预设分组</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_preset_grouping_edit_button_in_menu_enabled"\r
                                title="开启后，预设分组的条目编辑按钮会收进展开菜单里（需点两次才能编辑）；关闭（默认）则让编辑按钮平铺在条目操作菜单右侧，点一次即可编辑。">\r
                                <input id="bai_bai_toolkit_preset_grouping_edit_button_in_menu_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>分组后把编辑按钮收进菜单</span>\r
                            </label>\r
                        </div>\r
                    </fieldset>\r
\r
                    <!-- 3. 其他优化 -->\r
                    <fieldset\r
                        style="border: 1px solid var(--SmartThemeBorderColor); border-radius: 5px; padding: 8px; margin-bottom: 10px;">\r
                        <legend style="font-size: 0.9em; font-weight: bold; opacity: 0.8;"><i\r
                                class="fa-solid fa-desktop"></i> 其他优化</legend>\r
                        <div class="flex-container flexFlowColumn" style="gap: 5px;">\r
                            <label class="checkbox_label" for="bai_bai_toolkit_regex_quick_operation_enabled"\r
                                title="启用后，正则条目的单条启用/禁用、编辑保存、删除和拖拽排序只更新对应 DOM，不立即重建整份正则列表。">\r
                                <input id="bai_bai_toolkit_regex_quick_operation_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>正则快速操作</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_description_codemirror_editor_enabled"\r
                                title="使用 CodeMirror 6 替代原生 textarea 编辑角色描述；加载失败时直接恢复 ST 原版输入框。">\r
                                <input id="bai_bai_toolkit_description_codemirror_editor_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>角色描述 CodeMirror 编辑器</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_custom_css_input_optimization_enabled"\r
                                title="编辑用户设置里的自定义 CSS 时，使用 CodeMirror 接管可见编辑器，并在离开编辑框后再应用整段样式。">\r
                                <input id="bai_bai_toolkit_custom_css_input_optimization_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>自定义CSS CodeMirror 编辑器</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_custom_css_shadow_property_enabled"\r
                                title="拦截原生自定义CSS的写入操作并将其移入JS内存，从物理层面消除原生输入框被写入长文本时引发的浏览器排版与绘制卡顿，完美解决切换主题或同步主题时的严重卡顿。开启此项会自动开启自定义CSS的 CodeMirror 编辑器。">\r
                                <input id="bai_bai_toolkit_custom_css_shadow_property_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>切换美化优化</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_world_info_drawer_optimization_enabled"\r
                                title="优化原版世界书交互：条目快速展开、延迟初始化较重的下拉控件和角色过滤选项，并减少宏补全与浮层定位带来的额外开销。">\r
                                <input id="bai_bai_toolkit_world_info_drawer_optimization_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>原版世界书优化</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_world_info_list_optimization_enabled"
                                title="使用 Vue 接管世界书条目列表，并启用移动端新布局与展开动画。">
                                <input id="bai_bai_toolkit_world_info_list_optimization_enabled" type="checkbox"
                                    class="checkbox">
                                <span>世界书新布局</span>
                            </label>
                            <label class="checkbox_label" for="bai_bai_toolkit_world_info_search_replace_enabled"
                                title="在世界书新布局的条目列表上方添加折叠式查找替换工具，可批量替换当前世界书所有条目的正文内容，并可选包含条目名称。">
                                <input id="bai_bai_toolkit_world_info_search_replace_enabled" type="checkbox"
                                    class="checkbox">
                                <span>世界书查找替换</span>
                            </label>
                            <label class="checkbox_label"
                                for="bai_bai_toolkit_character_search_input_optimization_enabled"
                                title="拦截并防抖角色搜索输入框，解决拼音输入卡顿问题，并且大幅减少 DOM 重绘开销。">\r
                                <input id="bai_bai_toolkit_character_search_input_optimization_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>角色搜索输入框优化</span>\r
                            </label>\r
\r
                            <label class="checkbox_label" for="bai_bai_toolkit_character_list_avatar_lazy_load_enabled"\r
                                title="进入角色列表、Persona 列表和欢迎页时先用占位图渲染离屏头像，滚动或展开到附近后再加载真实 /thumbnail 缩略图，并启用 content-visibility。">\r
                                <input id="bai_bai_toolkit_character_list_avatar_lazy_load_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>头像缩略图懒加载</span>\r
                            </label>\r
\r
                            <div class="bai_bai_toolkit_perf_trace flex-container flexFlowColumn"\r
                                style="display: none !important;" aria-hidden="true"\r
                                style="gap: 6px; padding: 6px 5px;">\r
                                <div class="flex-container alignItemCenter flexGap5">\r
                                    <span style="opacity: 0.8;">Performance trace</span>\r
                                    <div id="bai_bai_toolkit_perf_trace_start" class="menu_button menu_button_icon"\r
                                        title="Start recording filtered performance diagnostics.">\r
                                        <i class="fa-solid fa-circle-play"></i>\r
                                        <span>Start</span>\r
                                    </div>\r
                                    <div id="bai_bai_toolkit_perf_trace_stop"\r
                                        class="menu_button menu_button_icon disabled"\r
                                        title="Stop recording and export a txt diagnostics file.">\r
                                        <i class="fa-solid fa-file-export"></i>\r
                                        <span>Stop &amp; Export TXT</span>\r
                                    </div>\r
                                </div>\r
                                <small id="bai_bai_toolkit_perf_trace_status" style="opacity: 0.7;">idle</small>\r
                            </div>\r
                        </div>\r
                    </fieldset>\r
                </div>\r
\r
                <!-- 柏宝库 (BaiBaoKu) - 默认隐藏 -->\r
                <div id="bai_bai_toolkit_tab_baibaoku" class="bai_bai_toolkit_tab_content"\r
                    style="display: none; padding-top: 5px;">\r
                    <fieldset\r
                        style="border: 1px solid var(--SmartThemeBorderColor); border-radius: 5px; padding: 8px; margin-bottom: 10px;">\r
                        <legend style="font-size: 0.9em; font-weight: bold; opacity: 0.8;"><i\r
                                class="fa-solid fa-box-archive"></i> 柏宝库</legend>\r
                        <div class="flex-container flexFlowColumn" style="gap: 5px;">\r
                            <div\r
                                style="border: 1px solid var(--SmartThemeBorderColor); border-radius: 5px; padding: 6px 8px; margin-bottom: 4px;">\r
                                <div\r
                                    style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 5em); gap: 8px; align-items: start;">\r
                                    <div class="flex-container flexFlowColumn" style="gap: 4px; min-width: 0;">\r
                                        <span style="font-weight: bold; opacity: 0.85;">连接状态</span>\r
                                        <div class="flex-container flexFlowColumn"\r
                                            style="gap: 2px; font-size: 0.9em; opacity: 0.9;">\r
                                            <div>服务：<span id="bai_bai_toolkit_baibaoku_server_status">检测中</span></div>\r
                                            <div>数据库：<span id="bai_bai_toolkit_baibaoku_driver_status">检测中</span></div>\r
                                            <div>Early Bridge：<span\r
                                                    id="bai_bai_toolkit_baibaoku_bridge_status">检测中</span></div>\r
                                        </div>\r
                                    </div>\r
                                    <div class="flex-container flexFlowColumn alignItemCenter"\r
                                        style="gap: 5px; justify-self: end;">\r
                                        <div id="bai_bai_toolkit_baibaoku_refresh_status"\r
                                            class="menu_button menu_button_icon" title="重新检测柏宝库连接状态">\r
                                            <i class="fa-solid fa-rotate"></i>\r
                                            <span>刷新</span>\r
                                        </div>\r
                                        <div id="bai_bai_toolkit_baibaoku_install_help"\r
                                            class="menu_button menu_button_icon" title="说明">\r
                                            <i class="fa-solid fa-circle-question"></i>\r
                                            <span>说明</span>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_baibaoku_settings_acceleration_enabled"\r
                                title="通过柏宝库 Early Bridge 接管 /api/settings/get 和 /api/settings/save；关闭后完全走 SillyTavern 原生接口。">\r
                                <input id="bai_bai_toolkit_baibaoku_settings_acceleration_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>Settings get/save 加速</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_baibaoku_lazy_theme_loading_enabled"\r
                                title="&#x5F00;&#x542F;&#x540E;&#xFF0C;Settings get &#x8FD4;&#x56DE;&#x8F7B;&#x91CF;&#x7F8E;&#x5316;&#x5217;&#x8868;&#xFF0C;&#x5207;&#x6362;&#x7F8E;&#x5316;&#x65F6;&#x518D;&#x6309;&#x9700;&#x8BFB;&#x53D6;&#x5B8C;&#x6574;&#x7F8E;&#x5316;&#xFF1B;&#x5F00;&#x542F;&#x6B64;&#x9879;&#x4F1A;&#x540C;&#x6B65;&#x5F00;&#x542F; Settings get/save &#x52A0;&#x901F;&#x3002;">\r
                                <input id="bai_bai_toolkit_baibaoku_lazy_theme_loading_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>&#x7F8E;&#x5316;&#x61D2;&#x52A0;&#x8F7D;</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_extension_manifest_bundle_enabled"\r
                                title="加载扩展时，通过柏宝库一次性获取扩展清单和 manifest 缓存，减少大量 /scripts/extensions/.../manifest.json 请求；关闭后完全走 SillyTavern 原生请求。">\r
                                <input id="bai_bai_toolkit_extension_manifest_bundle_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>扩展 Manifest 合并请求</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_fast_character_list_enabled"\r
                                title="加载角色列表时，将 SillyTavern 原本的 /api/characters/all 空请求替换为柏宝库的快速角色列表接口；接口不可用时自动退回原请求。">\r
                                <input id="bai_bai_toolkit_fast_character_list_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>角色列表请求加速</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_recent_chat_list_acceleration_enabled"\r
                                title="加载主页最近聊天时，将 /api/chats/recent 替换为柏宝库的快速最近聊天接口；接口不可用时自动退回原请求。">\r
                                <input id="bai_bai_toolkit_recent_chat_list_acceleration_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>最近聊天请求加速</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_progressive_chat_loading_enabled"\r
                                title="进入大聊天时，先通过柏宝库返回尾部楼层并锁定发送/编辑/保存，后台补全完整聊天后再解锁；接口不可用时自动退回原生加载。">\r
                                <input id="bai_bai_toolkit_progressive_chat_loading_enabled" type="checkbox"\r
                                    class="checkbox" disabled>\r
                                <span>长聊天分批加载</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_save_generate_enabled"\r
                                title="普通单角色 Chat Completion 回复改用柏宝库 save-generate，后端生成完成后自动写入聊天文件；保存失败时保留 SillyTavern 原生保存兜底。">\r
                                <input id="bai_bai_toolkit_save_generate_enabled" type="checkbox" class="checkbox">\r
                                <span>消息后台生成</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_preset_auto_backup_enabled"\r
                                title="&#x76D1;&#x542C;&#x9884;&#x8BBE;&#x4FDD;&#x5B58;&#x8BF7;&#x6C42;&#xFF0C;&#x5E76;&#x5C06;&#x540C;&#x4E00;&#x4EFD;&#x9884;&#x8BBE;&#x6570;&#x636E;&#x53D1;&#x9001;&#x5230;&#x67CF;&#x5B9D;&#x5E93;&#x540E;&#x7AEF;&#x5907;&#x4EFD;&#x63A5;&#x53E3;&#xFF1B;&#x4E0D;&#x4F1A;&#x62E6;&#x622A;&#x6216;&#x7B49;&#x5F85;&#x539F;&#x59CB;&#x4FDD;&#x5B58;&#x8BF7;&#x6C42;&#x3002;">\r
                                <input id="bai_bai_toolkit_preset_auto_backup_enabled" type="checkbox" class="checkbox">\r
                                <span>&#x9884;&#x8BBE;&#x81EA;&#x52A8;&#x5907;&#x4EFD;</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_tokenizer_bulk_count_enabled"\r
                                title="刷新 Prompt Manager token 统计时使用 BaiBaoKu 批量计数接口，减少切换模型时的 token 计算请求。">\r
                                <input id="bai_bai_toolkit_tokenizer_bulk_count_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>Tokenizer 计数请求批量加速</span>\r
                            </label>\r
                            <label class="checkbox_label" for="bai_bai_toolkit_chat_keyboard_scan_reduction_enabled"\r
                                title="进入角色卡时，聊天楼层的样式变化会让 ST 反复重新扫描键盘可点元素，造成卡顿。开启后会减少这类重复扫描，明显加快进卡速度。代价：聊天楼层内的按钮无法再用键盘 Tab 键切换聚焦（鼠标点击、手机触摸完全不受影响）。绝大多数用户用不到 Tab 切换，建议保持开启。">\r
                                <input id="bai_bai_toolkit_chat_keyboard_scan_reduction_enabled" type="checkbox"\r
                                    class="checkbox">\r
                                <span>减少酒馆键盘扫描</span>\r
                            </label>\r
                        </div>\r
                    </fieldset>\r
                </div>\r
\r
                <!-- 附加功能 (Features) - 默认隐藏 -->\r
                <div id="bai_bai_toolkit_tab_features" class="bai_bai_toolkit_tab_content"\r
                    style="display: none; padding-top: 5px;">\r
                    <div class="flex-container flexFlowColumn" style="gap: 5px;">\r
                        <fieldset\r
                            style="border: 1px solid var(--SmartThemeBorderColor); border-radius: 5px; padding: 8px; margin-bottom: 10px;">\r
                            <legend style="font-size: 0.9em; font-weight: bold; opacity: 0.8;"><i\r
                                    class="fa-solid fa-volume-high"></i> 消息完成提示音</legend>\r
                            <div class="flex-container flexFlowColumn" style="gap: 8px;">\r
                                <div class="flex-container justifySpaceBetween alignItemCenter"\r
                                    style="gap: 8px; align-items: center;">\r
                                    <label class="checkbox_label" for="bai_bai_toolkit_message_completion_sound_enabled"\r
                                        style="align-items: center;" title="生成完成后播放提示音；手动停止生成时不会播放。">\r
                                        <input id="bai_bai_toolkit_message_completion_sound_enabled" type="checkbox"\r
                                            class="checkbox">\r
                                        <span>生成完成后播放提示音</span>\r
                                    </label>\r
                                    <div id="bai_bai_toolkit_message_completion_sound_preview"\r
                                        class="menu_button menu_button_icon" style="align-items: center;"\r
                                        title="试听当前提示音">\r
                                        <i class="fa-solid fa-play"></i>\r
                                        <span>试听</span>\r
                                    </div>\r
                                </div>\r
\r
                                <label class="checkbox_label"\r
                                    for="bai_bai_toolkit_message_completion_sound_keep_alive_enabled"\r
                                    style="align-items: center;" title="移动端生成中循环播放静音音频，尽量降低切后台冻结导致提示音无法播放的概率；可能增加少量耗电。">\r
                                    <input id="bai_bai_toolkit_message_completion_sound_keep_alive_enabled"\r
                                        type="checkbox" class="checkbox">\r
                                    <span>生成中静音保活</span>\r
                                </label>\r
\r
                                <label class="flex-container alignItemCenter flexGap5"\r
                                    for="bai_bai_toolkit_message_completion_sound_source" style="align-items: center;">\r
                                    <span style="min-width: 72px;">音频来源</span>\r
                                    <select id="bai_bai_toolkit_message_completion_sound_source" class="text_pole"\r
                                        style="flex: 1;">\r
                                        <option value="builtin">内置音频</option>\r
                                        <option value="url">音频 URL</option>\r
                                        <option value="local">本地文件</option>\r
                                    </select>\r
                                </label>\r
\r
                                <div id="bai_bai_toolkit_message_completion_sound_builtin_row"\r
                                    class="flex-container alignItemCenter flexGap5" style="align-items: center;">\r
                                    <label for="bai_bai_toolkit_message_completion_sound_builtin_id"\r
                                        style="min-width: 72px; align-items: center;">内置音频</label>\r
                                    <select id="bai_bai_toolkit_message_completion_sound_builtin_id" class="text_pole"\r
                                        style="flex: 1;"></select>\r
                                </div>\r
\r
                                <div id="bai_bai_toolkit_message_completion_sound_url_row"\r
                                    class="flex-container alignItemCenter flexGap5"\r
                                    style="display: none; align-items: center;">\r
                                    <label for="bai_bai_toolkit_message_completion_sound_url"\r
                                        style="min-width: 72px; align-items: center;">音频 URL</label>\r
                                    <input id="bai_bai_toolkit_message_completion_sound_url" class="text_pole"\r
                                        type="url" placeholder="https://example.com/sound.mp3" style="flex: 1;">\r
                                </div>\r
\r
                                <div id="bai_bai_toolkit_message_completion_sound_local_row"\r
                                    class="flex-container flexFlowColumn" style="display: none; gap: 5px;">\r
                                    <div class="flex-container alignItemCenter flexGap5" style="align-items: center;">\r
                                        <label for="bai_bai_toolkit_message_completion_sound_local_file"\r
                                            style="min-width: 72px; align-items: center;">本地文件</label>\r
                                        <input id="bai_bai_toolkit_message_completion_sound_local_file" type="file"\r
                                            accept="audio/*" style="flex: 1;">\r
                                    </div>\r
                                    <div class="flex-container alignItemCenter flexGap5"\r
                                        style="font-size: 0.9em; opacity: 0.85; align-items: center;">\r
                                        <span style="min-width: 72px;">当前文件</span>\r
                                        <span id="bai_bai_toolkit_message_completion_sound_local_name"\r
                                            style="flex: 1;">未上传</span>\r
                                        <div id="bai_bai_toolkit_message_completion_sound_local_clear"\r
                                            class="menu_button menu_button_icon" style="align-items: center;"\r
                                            title="清除当前本地提示音">\r
                                            <i class="fa-solid fa-trash"></i>\r
                                            <span>清除</span>\r
                                        </div>\r
                                    </div>\r
                                </div>\r
\r
                                <label class="flex-container alignItemCenter flexGap5"\r
                                    for="bai_bai_toolkit_message_completion_sound_volume" style="align-items: center;">\r
                                    <span style="min-width: 72px;">音量</span>\r
                                    <input id="bai_bai_toolkit_message_completion_sound_volume" type="range" min="0"\r
                                        max="1" step="0.05" style="flex: 1;">\r
                                    <span id="bai_bai_toolkit_message_completion_sound_volume_value"\r
                                        style="width: 42px; text-align: right;"></span>\r
                                </label>\r
\r
                                <small id="bai_bai_toolkit_message_completion_sound_status"\r
                                    style="opacity: 0.7;"></small>\r
                            </div>\r
                        </fieldset>\r
                        <label class="checkbox_label" for="bai_bai_toolkit_update_prompt_on_available_enabled"\r
                            title="检测到插件有可用更新时自动弹出更新确认提示；关闭后仍会显示 new 标记和更新按钮。">\r
                            <input id="bai_bai_toolkit_update_prompt_on_available_enabled" type="checkbox"\r
                                class="checkbox">\r
                            <span>检测到更新弹窗提示</span>\r
                        </label>\r
                        <label class="checkbox_label" for="bai_bai_toolkit_message_double_click_edit_enabled"\r
                            title="双击消息气泡快速进入编辑模式；开启后会自动关闭三击编辑楼层。">\r
                            <input id="bai_bai_toolkit_message_double_click_edit_enabled" type="checkbox"\r
                                class="checkbox">\r
                            <span>双击编辑楼层</span>\r
                        </label>\r
                        <label class="checkbox_label" for="bai_bai_toolkit_message_triple_click_edit_enabled"\r
                            title="三击消息气泡快速进入编辑模式；开启后会自动关闭双击编辑楼层。">\r
                            <input id="bai_bai_toolkit_message_triple_click_edit_enabled" type="checkbox"\r
                                class="checkbox">\r
                            <span>三击编辑楼层</span>\r
                        </label>\r
                        <label class="checkbox_label" for="bai_bai_toolkit_preset_auto_save_after_prompt_edit_enabled"\r
                            title="保存 OpenAI 预设条目编辑后，自动点击当前预设的保存按钮。默认关闭。">\r
                            <input id="bai_bai_toolkit_preset_auto_save_after_prompt_edit_enabled" type="checkbox"\r
                                class="checkbox">\r
                            <span>保存条目后自动保存预设</span>\r
                        </label>\r
                    </div>\r
                </div>\r
\r
            </div>\r
        </div>\r
    </div>\r
</div>
`,wv="bai-bai-save-generate-display",jp="bai-bai-save-generate-display-visible",Cv="bai-bai-save-generate-display-complete",kv="bai-bai-save-generate-display-stopped",Av="bai-bai-save-generate-display-minimized",Pv="bai-bai-save-generate-display-label",Lv="bai-bai-save-generate-display-label-text",Iv="bai-bai-save-generate-display-led",Rv="bai-bai-save-generate-display-controls",Mv="bai-bai-save-generate-display-btn",Ov="bai-bai-save-generate-display-content",Bv="bai-bai-save-generate-display-reasoning",Dv="bai-bai-save-generate-display-reasoning-label",$v="bai-bai-save-generate-display-reasoning-content",Nv="bai-bai-save-generate-display-text",Hv="bai-bai-save-generate-display-text-content",Gv=220;class Fv{constructor(){this.element=null,this.labelText=null,this.reasoningSection=null,this.reasoningContent=null,this.textSection=null,this.textContent=null,this.stopButton=null,this.minimizeButton=null,this.closeButton=null,this.onStop=null,this.hideTimeoutId=null,this.hasContent=!1,this.isMinimized=!1,this.isComplete=!1,this.isStopped=!1}show({label:t="",onStop:n=null}={}){this.element&&this.hide({instant:!0}),this.isMinimized=!1,this.isComplete=!1,this.isStopped=!1,this.hasContent=!1,this.onStop=n,this.clearHideTimeout(),this.element=document.createElement("div"),this.element.classList.add(wv);const r=document.createElement("div");r.classList.add(Pv);const o=document.createElement("span");o.classList.add(Iv),r.appendChild(o),this.labelText=document.createElement("span"),this.labelText.classList.add(Lv),this.labelText.textContent=t,r.appendChild(this.labelText);const a=document.createElement("div");a.classList.add(Rv),typeof n=="function"&&(this.stopButton=this.createButton("Stop generation","&#9632;"),this.stopButton.addEventListener("click",async()=>{this.stopButton&&(this.stopButton.disabled=!0);try{await this.onStop?.()}catch(c){console.error("[SaveGenerateDisplay] stop handler failed",c)}}),a.appendChild(this.stopButton)),this.minimizeButton=this.createButton("Minimize","&#8211;"),this.minimizeButton.addEventListener("click",()=>this.toggleMinimize()),a.appendChild(this.minimizeButton),this.closeButton=this.createButton("Close","&#215;"),this.closeButton.addEventListener("click",()=>this.hide()),a.appendChild(this.closeButton),r.appendChild(a),this.element.appendChild(r);const i=document.createElement("div");i.classList.add(Ov),this.reasoningSection=document.createElement("div"),this.reasoningSection.classList.add(Bv),this.reasoningSection.style.display="none";const s=document.createElement("div");return s.classList.add(Dv),s.textContent="Thinking...",this.reasoningSection.appendChild(s),this.reasoningContent=document.createElement("div"),this.reasoningContent.classList.add($v),this.reasoningSection.appendChild(this.reasoningContent),i.appendChild(this.reasoningSection),this.textSection=document.createElement("div"),this.textSection.classList.add(Nv),this.textSection.style.display="none",this.textContent=document.createElement("div"),this.textContent.classList.add(Hv,"mes_text"),this.textSection.appendChild(this.textContent),i.appendChild(this.textSection),this.element.appendChild(i),(Array.from(document.querySelectorAll("dialog[open]:not([closing])")).pop()??document.body).appendChild(this.element),requestAnimationFrame(()=>{this.element?.classList.add(jp)}),this}createButton(t,n){const r=document.createElement("button");return r.type="button",r.classList.add(Mv),r.setAttribute("aria-label",t),r.setAttribute("title",t),r.innerHTML=n,r}toggleMinimize(){return this.element?(this.isMinimized=!this.isMinimized,this.element.classList.toggle(Av,this.isMinimized),this.minimizeButton&&(this.minimizeButton.innerHTML=this.isMinimized?"&#9633;":"&#8211;",this.minimizeButton.setAttribute("title",this.isMinimized?"Restore":"Minimize"),this.minimizeButton.setAttribute("aria-label",this.isMinimized?"Restore":"Minimize")),this):this}setLabel(t){return this.labelText&&(this.labelText.textContent=t),this}updateReasoning(t){return!this.reasoningSection||!this.reasoningContent||!t?this:(this.reasoningSection.style.display="",this.reasoningContent.innerHTML=this.formatText(t,!0),this.reasoningContent.scrollTop=this.reasoningContent.scrollHeight,this)}updateContent(t){return!this.textSection||!this.textContent||!t?this:(this.hasContent=!0,this.textSection.style.display="",this.textContent.innerHTML=this.formatText(t,!1),this.textContent.scrollTop=this.textContent.scrollHeight,this)}markStopped({label:t=null}={}){return!this.element||this.isStopped||this.isComplete?this:(this.isStopped=!0,this.clearHideTimeout(),this.element.classList.add(kv),this.removeStopButton(),t!==null&&this.setLabel(t),this)}complete({label:t=null,delay:n=3e3}={}){return!this.element||this.isComplete?this:(this.isComplete=!0,this.clearHideTimeout(),this.element.classList.add(Cv),this.removeStopButton(),t!==null&&this.setLabel(t),typeof n=="number"&&n>=0&&(this.hideTimeoutId=setTimeout(()=>this.performHide(),n)),this)}hide({instant:t=!1}={}){return this.clearHideTimeout(),this.performHide({instant:t}),this}removeStopButton(){this.stopButton&&(this.stopButton.remove(),this.stopButton=null)}clearHideTimeout(){this.hideTimeoutId!==null&&(clearTimeout(this.hideTimeoutId),this.hideTimeoutId=null)}performHide({instant:t=!1}={}){const n=this.element;if(!n)return;const r=()=>{this.element===n&&(n.remove(),this.element=null,this.labelText=null,this.reasoningSection=null,this.reasoningContent=null,this.textSection=null,this.textContent=null,this.stopButton=null,this.minimizeButton=null,this.closeButton=null)};if(n.classList.remove(jp),t){r();return}setTimeout(r,Gv)}formatText(t,n){try{return ov(String(t),"",!1,!1,-1,{},n)}catch{return this.escapeHtml(t).replace(/\r?\n/g,"<br>")}}escapeHtml(t){return String(t??"").replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n])}}const bl="__baiBaiToolkitReduceLoadedFloorsFetchPatched",Mo=10,xg=new Set(["chat_truncation","chat_truncation_counter"]),zv=new Set(["/api/chats/get","/api/chats/group/get"]),qp="__baiBaiToolkitFastChatSearchFetchPatched",Vv="/api/plugins/baibaoku/v1/chats/fast-search",Yp="__baiBaiToolkitFastChatBackupsFetchPatched",Uv="/api/backups/chat/get",Wv="/api/plugins/baibaoku/v1/chat-backups/fast-list",Qp="bai_bai_toolkit_fast_chat_list_scroll_style",lu=".chatBackupsList",wg=".chatBackupsListItem",Cg="--bai-bai-toolkit-chat-backup-item-height",Kv=64,Yl="bai_bai_toolkit_long_chat_dom_render_style",hi="bai_bai_toolkit_message_edit_bottom_actions_style",Xp="__baiBaiToolkitChatDeleteEditHandler",jv="__baiBaiToolkitChatDeleteMessageDeletedHandler",qv="__baiBaiToolkitChatDeleteGenerationActionHandler",Ra="__baiBaiToolkitMessageEditBottomActions",Jp="__baiBaiToolkitWelcomeRecentChatDirectOpenHandler",Zp="__baiBaiToolkitWelcomeRecentChatDirectOpenCurrentHandler",Ma="__baiBaiToolkitMessageCompletionScrollHandler",em="__baiBaiToolkitMobileAutoKeyboardHandler",tm="__baiBaiToolkitMobileAutoKeyboardFocusPatched",nm="__baiBaiToolkitMobileAutoKeyboardJQueryFocusPatched",rm="__baiBaiToolkitMobileAutoKeyboardJQueryTriggerPatched",om="__baiBaiToolkitMessageEditScrollTopPatched",Yv=6e4,Qv=12e3,Xv=24e3,Jv=20,kg=900,Ag=6,$o=8,Pg=4,Zv=.18,eT=24,tT=160,Lg=80,nT=500,rT=16,oT=1.25,aT=80,iT=8e4,sT=.35,lT=4,_i=!1,yi="bai-bai-toolkit-long-chat-bottom-anchor",Ei="bai-bai-toolkit-long-chat-bottom-anchored",rr="--bai-bai-toolkit-long-chat-mes-height",Ig=5e3,cT=1500,cu=2,uT=[0,50,160],dT=[0,50,160,360,800],Rg=24,Mg=2,pT=1200,mT="#send_but, #option_regenerate, #option_continue, #option_impersonate, #mes_continue, #mes_impersonate",Og="#chat .mes_edit",fT="#chat .welcomePanel",gT="#chat .welcomePanel .recentChat",bT=".renameChat, .deleteChat, .pinChat, button, a, input, select, textarea",cn="bai-bai-toolkit-message-edit-bottom-actions",Si=`#curEditTextarea, .mes_edit_buttons, .mes_edit_done, .mes_edit_cancel, .${cn}`,hT=`.mes_edit_buttons, .mes_edit_done, .mes_edit_cancel, .${cn}`,Bt="#curEditTextarea, .reasoning_edit_textarea",Bg="#curEditTextarea, #select_chat_search",uu="#send_textarea",Dg=`${Bg}, ${uu}`,Za="#shadow_select_chat_popup",$g="#select_chat_div",du=new Set(["builtin","url","local"]),_T="baiBaiToolkit",yT=1,wn="messageCompletionSounds",pu="local",ET=5*1024*1024,ST=1e3,vT="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQQAAAAAAA==",vi=[{id:"guoke-bell",label:"果壳铃",file:"果壳铃.mp3"},{id:"stardew-fish",label:"星露谷 - 钓鱼上钩",file:"星露谷-钓鱼上钩.mp3"},{id:"stardew-achievement",label:"星露谷 - 成就",file:"星露谷-成就.mp3"},{id:"pokemon-heal",label:"宝可梦 - 治疗",file:"宝可梦-治疗.mp3"},{id:"pokemon-berry",label:"宝可梦 - 摘果子",file:"宝可梦-摘果子.mp3"},{id:"zelda-get",label:"塞尔达 - 获取",file:"塞尔达-获取.mp3"},{id:"zelda-complete",label:"塞尔达 - 完成",file:"塞尔达-完成.mp3"},{id:"bubble",label:"Q弹气泡",file:"Q弹气泡.mp3"},{id:"line-yangqin",label:"LINE - 扬琴",file:"LINE-扬琴.mp3"}];let C={},_={},Ee="[柏宝箱]",mu=0,Ti=null;const Ql=Q.createOrEditCharacter,Ng=Q.messageEdit,am=Q.unshallowCharacter;function TT(e={}){C=e.settings??C,_=e.extensionState??_,Ee=e.logPrefix??Ee,Ti=e.recordLongDomRefresh??Ti}function xT({saveSettings:e}={}){const t=()=>{typeof e=="function"&&e()};$("#bai_bai_toolkit_fast_chat_list_enabled").prop("checked",C.fastChatListEnabled).on("input",function(){C.fastChatListEnabled=!!$(this).prop("checked"),t()}),$("#bai_bai_toolkit_welcome_recent_chat_direct_open_enabled").prop("checked",C.welcomeRecentChatDirectOpenEnabled).on("input",function(){C.welcomeRecentChatDirectOpenEnabled=!!$(this).prop("checked"),t(),Eb()}),$("#bai_bai_toolkit_long_chat_dom_render_optimization_enabled").prop("checked",C.longChatDomRenderOptimizationEnabled&&!_i).prop("disabled",_i).on("input",function(){C.longChatDomRenderOptimizationEnabled=!!$(this).prop("checked"),t(),Vg()}),$("#bai_bai_toolkit_reduce_loaded_floors_enabled").prop("checked",C.reduceLoadedFloorsEnabled===!0).on("input",function(){C.reduceLoadedFloorsEnabled=!!$(this).prop("checked"),t(),Hg()}),$("#bai_bai_toolkit_message_completion_scroll_to_middle_enabled").prop("checked",C.messageCompletionScrollToMiddleEnabled!==!1).on("input",function(){C.messageCompletionScrollToMiddleEnabled=!!$(this).prop("checked"),t(),Gg()}),$("#bai_bai_toolkit_chat_list_scroll_optimization_enabled").prop("checked",C.chatListScrollOptimizationEnabled).on("input",function(){C.chatListScrollOptimizationEnabled=!!$(this).prop("checked"),t(),wb()}),$("#bai_bai_toolkit_chat_list_auto_clear_enabled").prop("checked",C.chatListAutoClearEnabled).on("input",function(){C.chatListAutoClearEnabled=!!$(this).prop("checked"),t()}),$("#bai_bai_toolkit_mobile_auto_keyboard_suppression_enabled").prop("checked",C.mobileAutoKeyboardSuppressionEnabled).on("input",function(){C.mobileAutoKeyboardSuppressionEnabled=!!$(this).prop("checked"),t(),_b()}),$("#bai_bai_toolkit_mobile_message_edit_scroll_guard_enabled").prop("checked",C.mobileMessageEditScrollGuardEnabled).on("input",function(){C.mobileMessageEditScrollGuardEnabled=!!$(this).prop("checked"),t(),yb()}),$("#bai_bai_toolkit_chat_delete_edit_flow_optimization_enabled").prop("checked",C.chatDeleteEditFlowOptimizationEnabled).on("input",function(){C.chatDeleteEditFlowOptimizationEnabled=!!$(this).prop("checked"),t(),gb()}),$("#bai_bai_toolkit_message_edit_bottom_actions_enabled").prop("checked",C.messageEditBottomActionsEnabled!==!1).on("input",function(){C.messageEditBottomActionsEnabled=!!$(this).prop("checked"),t(),Eu()}),Kw(t),$("#bai_bai_toolkit_message_double_click_edit_enabled").prop("checked",C.messageDoubleClickEditEnabled).on("input",function(){C.messageDoubleClickEditEnabled=!!$(this).prop("checked"),C.messageDoubleClickEditEnabled&&(C.messageTripleClickEditEnabled=!1,$("#bai_bai_toolkit_message_triple_click_edit_enabled").prop("checked",!1)),t(),rc()}),$("#bai_bai_toolkit_message_triple_click_edit_enabled").prop("checked",C.messageTripleClickEditEnabled).on("input",function(){C.messageTripleClickEditEnabled=!!$(this).prop("checked"),C.messageTripleClickEditEnabled&&(C.messageDoubleClickEditEnabled=!1,$("#bai_bai_toolkit_message_double_click_edit_enabled").prop("checked",!1)),t(),rc()})}function wT(e){fx()&&im(e,"#bai_bai_toolkit_welcome_recent_chat_direct_open_enabled","（兼容模式）",!1,"当前酒馆版本未导出 createOrEditCharacter，已使用兼容模式。"),pa()||im(e,"#bai_bai_toolkit_chat_delete_edit_flow_optimization_enabled","（当前酒馆版本过低，请更新）",!0,"当前酒馆版本未导出 messageEdit，请更新酒馆后使用。")}function Hg(){const e=CT();e&&(e.isEnabled=()=>C.reduceLoadedFloorsEnabled===!0,e.enforce=Xl),C.reduceLoadedFloorsEnabled===!0&&Xl({persist:!0})}function CT(){const e=globalThis[bl];if(e?.wrappedFetch)return e;const t=globalThis.fetch;if(typeof t!="function")return null;const n={originalFetch:t.bind(globalThis),wrappedFetch:null,inputHandler:null,isEnabled:()=>C.reduceLoadedFloorsEnabled===!0,enforce:Xl};return n.inputHandler=r=>{const o=r.target;!(o instanceof HTMLInputElement)||!xg.has(o.id)||!n.isEnabled()||o.value.trim()===""||n.enforce({candidateValue:o.value,persist:!0})},document.addEventListener("input",n.inputHandler),n.wrappedFetch=async function(o,a){return n.isEnabled()&&AT(o,a)&&n.enforce({persist:!0}),n.originalFetch(o,a)},n.wrappedFetch[bl]=!0,n.wrappedFetch.__baiBaiToolkitOriginalFetch=t,globalThis[bl]=n,globalThis.fetch=n.wrappedFetch,n}function Xl({candidateValue:e=Y.chat_truncation,persist:t=!1}={}){if(C.reduceLoadedFloorsEnabled!==!0)return!1;const n=String(e??"").trim();if(!n)return!1;const r=Number(n);if(!Number.isFinite(r)||r!==0&&r<=Mo)return!1;const o=Number(Y.chat_truncation)!==Mo||r!==Mo;return Y.chat_truncation=Mo,kT(),o&&t&&Yt(),o}function kT(){for(const e of xg){const t=document.getElementById(e);t instanceof HTMLInputElement&&(t.value=String(Mo))}}function AT(e,t){try{const n=typeof Request<"u"&&e instanceof Request,r=n?e.url:String(e),o=new URL(r,location.origin);return String(t?.method||(n?e.method:"GET")).toUpperCase()==="POST"&&o.origin===location.origin&&zv.has(o.pathname)}catch{return!1}}function im(e,t,n,r,o){const a=e.find(t),i=a.closest("label"),s=i.find("span").first();if(!a.length||!i.length||!s.length)return;const l=`${a.attr("id")}_compat_badge`;let c=s.find(`.${l}`);if(c.length||(c=$(`<small class="${l} bai_bai_toolkit_compat_badge"></small>`),s.append(" ",c)),c.text(n).css({opacity:.75,"font-size":"0.9em","white-space":"nowrap"}),o){const u=String(i.attr("title")||"");u.includes(o)||i.attr("title",u?`${u} ${o}`:o)}r&&(a.prop("checked",!1).prop("disabled",!0),i.css("opacity",.65))}function PT(){return new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,clearTimeout(r),e())},r=setTimeout(n,80);if(typeof requestAnimationFrame!="function"){n();return}requestAnimationFrame(()=>setTimeout(n,0))})}function LT(e,t=[...document.querySelectorAll("#chat .mes")]){let n=0,r=0,o="none";for(const a of t){const i=a.getAttribute("mesid")??"",s=Number(i),l=Number.isInteger(s)?e[s]:null,c=fb(l);n+=c,c>r&&(r=c,o=i||"none")}return{visibleTextChars:n,maxVisibleChars:r,maxVisibleMesId:o}}function IT(){if(!C.longChatDomRenderOptimizationEnabled)return"longDom=off";const e=document.querySelector("#chat");if(!(e instanceof HTMLElement))return"longDom=pending";const t=e.classList.contains("bai-bai-toolkit-long-chat-render-optimized"),n=e.querySelectorAll(".mes.bai-bai-toolkit-long-chat-contained").length;return`longDom=${t?"on":"idle"}:${n}`}function Gg(){if(C.messageCompletionScrollToMiddleEnabled===!1){MT();return}RT()}function Xe(){(!_[Ma]||typeof _[Ma]!="object")&&(_[Ma]={});const e=_[Ma];return Array.isArray(e.eventHandlers)||(e.eventHandlers=[]),Array.isArray(e.timers)||(e.timers=[]),e}function RT(){const e=Xe();if(e.installed||typeof M?.on!="function"){Jl(e);return}Ug();const t=()=>{OT(e)},n=(o="generation-ended")=>{BT(e,o)},r=()=>{fu(e,"message-rendered")};ko(w.GENERATION_STARTED,t),ko(w.USER_MESSAGE_RENDERED,r),ko(w.CHARACTER_MESSAGE_RENDERED,r),ko(w.GENERATION_STOPPED,()=>n("generation-stopped")),ko(w.GENERATION_ENDED,()=>n("generation-ended")),e.installed=!0,Jl(e)}function ko(e,t){if(!e||typeof t!="function"||typeof M?.on!="function")return;const n=Xe();M.on(e,t),n.eventHandlers.push({event:e,handler:t})}function MT(){const e=Xe();for(const t of e.eventHandlers||[])M.removeListener?.(t.event,t.handler);e.eventHandlers=[],e.installed=!1,e.generationActive=!1,e.shouldScroll=!1,e.userInteracted=!1,clearTimeout(e.anchorTimer),e.anchorTimer=null,Fg(e),ec(e),Cn(e),Zl(e)}function OT(e=Xe()){if(C.messageCompletionScrollToMiddleEnabled===!1)return;Jl(e);const t=document.querySelector("#chat");e.generationToken=Number(e.generationToken||0)+1,e.scrolledToken=0,e.generationActive=!0,e.userInteracted=!1,e.shouldScroll=t instanceof HTMLElement&&!Bn(t)&&yu(t),e.shouldScroll&&fu(e,"generation-started")}function BT(e=Xe(),t="generation-ended"){if(C.messageCompletionScrollToMiddleEnabled===!1||e.scrolledToken===e.generationToken){e.generationActive=!1;return}const n=document.querySelector("#chat"),r=!e.userInteracted&&n instanceof HTMLElement&&!Bn(n);e.generationActive=!1,e.shouldScroll=!1,e.scrolledToken=e.generationToken,clearTimeout(e.anchorTimer),e.anchorTimer=null,r?DT(e,t):Cn(e)}function fu(e=Xe(),t=""){if(!e.generationActive||!e.shouldScroll||e.userInteracted||C.messageCompletionScrollToMiddleEnabled===!1){Cn(e);return}const n=document.querySelector("#chat");!(n instanceof HTMLElement)||Bn(n)||(_u(n,e),clearTimeout(e.anchorTimer),e.anchorTimer=setTimeout(()=>{e.anchorTimer=null,fu(e,t)},120))}function Jl(e=Xe()){const t=document.querySelector("#chat");if(!(t instanceof HTMLElement)){Zl(e);return}e.chatElement===t&&e.userInteractionHandler||(Zl(e),e.chatElement=t,e.userInteractionHandler=()=>{!e.generationActive&&!e.scrollSettling||(e.userInteracted=!0)},t.addEventListener("wheel",e.userInteractionHandler,{passive:!0}),t.addEventListener("touchstart",e.userInteractionHandler,{passive:!0}),t.addEventListener("pointerdown",e.userInteractionHandler,{passive:!0}))}function Zl(e=Xe()){e.chatElement instanceof HTMLElement&&e.userInteractionHandler&&(e.chatElement.removeEventListener("wheel",e.userInteractionHandler),e.chatElement.removeEventListener("touchstart",e.userInteractionHandler),e.chatElement.removeEventListener("pointerdown",e.userInteractionHandler)),e.chatElement=null,e.userInteractionHandler=null}function DT(e=Xe(),t=""){Fg(e);const n=Number(e.generationToken||0);e.scrollStartedAt=performance.now(),e.lastScrollHeight=0,e.lastTargetTop=null,e.stableFrames=0,e.scrollSettling=!0,$T(e),zg(e,n,t)}function ec(e=Xe()){e.scrollSettling=!1,NT(e)}function $T(e=Xe()){const t=e.chatElement instanceof HTMLElement?e.chatElement:document.querySelector("#chat");!(t instanceof HTMLElement)||e.overscrollGuardElement===t||(e.overscrollGuardElement=t,e.overscrollGuardPrevious=t.style.overscrollBehavior||"",t.style.overscrollBehavior="contain")}function NT(e=Xe()){const t=e.overscrollGuardElement;t instanceof HTMLElement&&(t.style.overscrollBehavior=e.overscrollGuardPrevious||""),e.overscrollGuardElement=null,e.overscrollGuardPrevious=""}function Fg(e=Xe()){clearTimeout(e.anchorTimer),e.anchorTimer=null;for(const t of e.timers||[])clearTimeout(t);e.timers=[],e.frame&&(cancelAnimationFrame(e.frame),e.frame=0)}function zg(e=Xe(),t,n=""){if(t!==Number(e.generationToken||0)||C.messageCompletionScrollToMiddleEnabled===!1||e.userInteracted){ec(e);return}if(HT(e,n)){ec(e);return}e.frame=requestAnimationFrame(()=>{e.frame=0,zg(e,t,n)})}function HT(e=Xe(),t=""){const n=document.querySelector("#chat");if(!(n instanceof HTMLElement)||Bn(n)||e.userInteracted)return!0;const r=mb(n);if(!(r instanceof HTMLElement))return!1;Cn(e);const o=performance.now(),a=mx(n,r),i=Math.abs(n.scrollTop-a),s=Math.abs(Number(e.lastScrollHeight||0)-n.scrollHeight),l=Number.isFinite(e.lastTargetTop)?Math.abs(Number(e.lastTargetTop)-a):0;return i>$o?(n.scrollTop=a,e.stableFrames=0):s>$o||l>$o?e.stableFrames=0:e.stableFrames=Number(e.stableFrames||0)+1,e.lastScrollHeight=n.scrollHeight,e.lastTargetTop=a,e.lastScrollReason=t,o-Number(e.scrollStartedAt||o)>=kg||Number(e.stableFrames||0)>=Ag}function Vg(){if(!C.longChatDomRenderOptimizationEnabled){FT();return}GT(),jn({autoScroll:!0,reason:"apply"})}function pe(){(!_.longChatDomRenderOptimization||typeof _.longChatDomRenderOptimization!="object")&&(_.longChatDomRenderOptimization={});const e=_.longChatDomRenderOptimization;return e.heightCache instanceof Map||(e.heightCache=new Map),e.messageRecords instanceof Map||(e.messageRecords=new Map),e.pendingMessageIds instanceof Set||(e.pendingMessageIds=new Set),e.tailMessageIds instanceof Set||(e.tailMessageIds=new Set),e.roleHeightEstimators instanceof Map||(e.roleHeightEstimators=new Map),Array.isArray(e.eventHandlers)||(e.eventHandlers=[]),e}function GT(){const e=pe();if(Ug(),Wg(),!e.installed){const t=()=>{e.userScrolledAway=!1,jn({autoScroll:!0,reason:"chat-load",mode:"full"})},n=(l="chat-update")=>{jn({autoScroll:!1,reason:l,mode:"full"})},r=l=>{jn({autoScroll:!1,reason:"message-rendered",mode:"incremental",messageIds:[l]})},o=l=>{jn({autoScroll:!1,reason:"message-updated",mode:"incremental",messageIds:[l]})},a=()=>{ix(),n("message-deleted")},i=()=>{e.generationActive=!0,e.generationAnchorEnabled=!1,jn({autoScroll:!1,reason:"generation-started",mode:"incremental",messageIds:[px()]})},s=()=>{e.generationActive=!1,e.generationAnchorEnabled=!1,Jo(e)};Ut(w.CHAT_CHANGED,t),Ut(w.CHAT_LOADED,t),Ut(w.MORE_MESSAGES_LOADED,()=>n("more-messages-loaded")),Ut(w.USER_MESSAGE_RENDERED,r),Ut(w.CHARACTER_MESSAGE_RENDERED,r),Ut(w.MESSAGE_UPDATED,o),Ut(w.MESSAGE_DELETED,a),Ut(w.GENERATION_STARTED,i),Ut(w.GENERATION_STOPPED,s),Ut(w.GENERATION_ENDED,s),e.installed=!0}}function Ut(e,t){if(!e||typeof M?.on!="function")return;const n=pe();M.on(e,t),n.eventHandlers.push({event:e,handler:t})}function FT(){const e=pe();clearTimeout(e.refreshTimer),e.refreshTimer=null,db();for(const t of e.eventHandlers||[])M.removeListener?.(t.event,t.handler);e.eventHandlers=[],e.installed=!1,e.userScrolledAway=!1,e.generationActive=!1,e.generationAnchorEnabled=!1,Jg(e),clearTimeout(e.generationAnchorTimer),clearTimeout(e.generationAnchorReleaseTimer),e.generationAnchorTimer=null,e.generationAnchorReleaseTimer=null,Kg(),e.resizeObserver?.disconnect(),e.resizeObserver=null,e.mutationObserver?.disconnect(),e.mutationObserver=null,C.messageCompletionScrollToMiddleEnabled===!1&&document.getElementById(Yl)?.remove(),lb()}function Ug(){let e=document.getElementById(Yl);e||(e=document.createElement("style"),e.id=Yl,document.head.append(e)),e.textContent=`
#chat.bai-bai-toolkit-long-chat-render-optimized > .mes.bai-bai-toolkit-long-chat-contained {
    content-visibility: auto;
    contain: layout paint style;
    contain-intrinsic-size: auto var(${rr}, 640px);
    contain-intrinsic-block-size: auto var(${rr}, 640px);
}

#chat.${Ei} > :not(.${yi}) {
    overflow-anchor: none;
}

#chat > .${yi} {
    display: block;
    width: 1px;
    height: 1px;
    flex: 0 0 auto;
    overflow-anchor: auto;
    pointer-events: none;
}
`}function Wg(){const e=pe(),t=document.querySelector("#chat");t instanceof HTMLElement&&(e.chatElement!==t&&(Kg(),e.mutationObserver?.disconnect(),e.mutationObserver=null,e.chatElement=t,e.scrollHandler=()=>{dx(t)},t.addEventListener("scroll",e.scrollHandler,{passive:!0})),!e.resizeObserver&&typeof ResizeObserver=="function"&&(e.resizeObserver=new ResizeObserver(n=>{for(const r of n)rx(r.target,r.contentRect?.height)})),!e.mutationObserver&&typeof MutationObserver=="function"&&(e.mutationObserver=new MutationObserver(n=>{if(n.some(zT)){if(!t.classList.contains("bai-bai-toolkit-long-chat-render-optimized"))return;jn({autoScroll:!1,reason:"mutation"})}}),e.mutationObserver.observe(t,{childList:!0})))}function zT(e){return[...e.addedNodes,...e.removedNodes].some(n=>!(n instanceof HTMLElement&&n.classList.contains(yi)))}function Kg(){const e=pe();e.chatElement&&e.scrollHandler&&e.chatElement.removeEventListener("scroll",e.scrollHandler),e.chatElement=null,e.scrollHandler=null}function jn({autoScroll:e=!1,reason:t="",mode:n="full",messageIds:r=[]}={}){if(!C.longChatDomRenderOptimizationEnabled)return;const o=pe();o.pendingAutoScroll=!!(o.pendingAutoScroll||e),o.pendingReason=t||o.pendingReason||"",o.pendingRefreshMode=o.pendingRefreshMode==="full"||n!=="incremental"?"full":"incremental";for(const a of Zg(r))o.pendingMessageIds.add(a);o.pendingRefreshMode==="incremental"&&o.pendingMessageIds.size===0&&(o.pendingRefreshMode="full"),clearTimeout(o.refreshTimer),o.refreshTimer=setTimeout(()=>{o.refreshTimer=null;const a=o.pendingReason||"refresh",i=o.pendingRefreshMode||"full",s=[...o.pendingMessageIds];o.pendingRefreshMode="",o.pendingMessageIds.clear(),VT({reason:a,mode:i,messageIds:s}),o.pendingAutoScroll&&(o.pendingAutoScroll=!1,cx(a)),o.pendingReason=""},40)}function VT({reason:e="",mode:t="full",messageIds:n=[]}={}){if(!C.longChatDomRenderOptimizationEnabled)return;const r=document.querySelector("#chat");if(!(r instanceof HTMLElement))return;if(Bn(r)){lb();return}Wg();const o=pe(),a=Array.isArray(Q.chat)?Q.chat:[];if(t==="incremental"&&UT({state:o,chatElement:r,chat:a,reason:e,messageIds:n}))return;const i=performance.now(),s={reason:e,duration:0,messages:0,optimized:!1,contained:0,editing:0,tail:0,cached:0,estimated:0,measured:0,skipped:0},l=[...r.querySelectorAll(".mes")].filter(k=>k instanceof HTMLElement);jT(o,r,l,a);const c=Xg(o),u=tb(c,l.length);s.messages=l.length,s.optimized=u,r.classList.toggle("bai-bai-toolkit-long-chat-render-optimized",u);const p=rb(r),b=ex(l,a.length);o.tailMessageIds=JT(b),o.optimized=u;const v=r.clientWidth||window.innerWidth,y=u?ab(l,p):new Map;for(const k of l){const P=k.getAttribute("mesid")||"",E=o.messageRecords.get(P)||null;u&&!b.has(k)?(nb(k,a,s,{editingMessages:p,chatWidth:v,record:E,measuredHeights:y}),cb(k,E,o)):(u&&b.has(k)&&(s.tail+=1),vs(k,E),Yr(k,E,o))}qg(o,b,a,v,y),!u&&o.generationAnchorEnabled&&(o.generationAnchorEnabled=!1,Jo(o)),s.duration=performance.now()-i,Ti?.(s),jg(s,"full")}function UT({state:e,chatElement:t,chat:n,reason:r="",messageIds:o=[]}={}){const a=Zg(o);if(!a.length||!QT(e,t))return!1;const i=performance.now(),s={reason:r,duration:0,messages:Number(e.messageCount||0),optimized:!!e.optimized,contained:0,editing:0,tail:0,cached:0,estimated:0,measured:0,skipped:0},l=new Set([...a,...e.tailMessageIds instanceof Set?e.tailMessageIds:[]]);for(const P of a){const E=eb(t,P);if(!(E instanceof HTMLElement)||!qT(e,E,n))return!1}const c=XT(n.length);for(const P of c)l.add(P);const u=Xg(e),p=tb(u,Number(e.messageCount||0));if(p!==!!e.optimized)return!1;s.messages=Number(e.messageCount||0),s.optimized=p,t.classList.toggle("bai-bai-toolkit-long-chat-render-optimized",p);const b=rb(t),v=t.clientWidth||window.innerWidth,y=[];for(const P of l){const E=e.messageRecords.get(P)?.element;E instanceof HTMLElement&&y.push(E)}const k=p?ab(y,b):new Map;for(const P of l){const E=e.messageRecords.get(P);E?.element?.isConnected&&(p&&!c.has(P)?(nb(E.element,n,s,{editingMessages:b,chatWidth:v,record:E,measuredHeights:k}),cb(E.element,E,e)):(p&&c.has(P)&&(s.tail+=1),vs(E.element,E),Yr(E.element,E,e)))}return WT(e,t,c,n,v,k),e.tailMessageIds=c,!p&&e.generationAnchorEnabled&&(e.generationAnchorEnabled=!1,Jo(e)),s.duration=performance.now()-i,Ti?.(s),jg(s,"incremental"),!0}function jg(e,t="full"){const n=pe(),r=performance.now(),o=Number(e?.duration||0),a=Number(n.lastLongDomDebugLogAt||0);o<rT&&r-a<nT||(n.lastLongDomDebugLogAt=r,console.info(`${Ee} longdom mode=${t} reason=${e?.reason||"refresh"} duration=${o.toFixed(1)}ms messages=${e?.messages||0} optimized=${e?.optimized?"yes":"no"} contained=${e?.contained||0} tail=${e?.tail||0} cached=${e?.cached||0} estimated=${e?.estimated||0} measured=${e?.measured||0} skipped=${e?.skipped||0}`))}function WT(e,t,n,r,o,a=null){if(co())return;const i=[];for(const s of n||[]){const l=e.messageRecords?.get?.(String(s)),c=l?.element instanceof HTMLElement?l.element:eb(t,s);c instanceof HTMLElement&&i.push(c)}qg(e,i,r,o,a)}function qg(e,t,n,r=window.innerWidth,o=null){if(co()||!e||!Array.isArray(n))return;const a=o instanceof Map;for(const i of t||[]){if(!(i instanceof HTMLElement)||!i.isConnected||i.classList.contains("bai-bai-toolkit-long-chat-contained"))continue;const s=i.getAttribute("mesid")||"",l=Number(s);if(!s||!Number.isInteger(l))continue;const c=n[l]||null,u=a?Number(o.get(i)||0):bu(i);if(u<24)continue;const p=Ts(c),b=xs(c),v=ob(p.chars,r,b);if(!Number.isFinite(v)||v<=0)continue;const y=u/v,k=Math.max(1,Math.min(lT,y)),P=Yg(b,r),E=e.roleHeightEstimators.get(P),K=Number(E?.scale||1),X=E?K+Math.max(0,k-K)*sT:k;e.roleHeightEstimators.set(P,{role:b,widthBucket:Qg(r),scale:X,samples:Math.min(1e3,Number(E?.samples||0)+1),updatedAt:Date.now()});const B=e.messageRecords?.get?.(s);B&&(B.role=b,B.textChars=p.chars,B.messageSignature=p.signature,B.sampleHeight=u),hu(s,u)}}function Yg(e,t=window.innerWidth){return`${gu(e)}:${Qg(t)}`}function KT(e,t=window.innerWidth){return pe().roleHeightEstimators?.get?.(Yg(e,t))||null}function Qg(e=window.innerWidth){return Math.max(0,Math.round(Number(e||0)/Lg))}function gu(e){return e==="user"?"user":"assistant"}function jT(e,t,n,r){const o=e.messageRecords instanceof Map?e.messageRecords:new Map,a=new Map;let i=0,s=0,l="none";e.indexChatId=String(We?.()??""),e.indexChatElement=t;for(const c of n){const u=c.getAttribute("mesid")||"";if(!u)continue;const p=Number(u),b=Number.isInteger(p)?r[p]:null,v=Ts(b),y=xs(b),k=o.get(u),P=k||{mesId:u};k?.element instanceof HTMLElement&&k.element!==c&&Yr(k.element,k,e),P.mesId=u,P.element=c,P.textChars=v.chars,P.messageSignature=v.signature,P.role=y,a.set(u,P),i+=v.chars,v.chars>s&&(s=v.chars,l=u||"none")}for(const[c,u]of o.entries())!a.has(c)&&u?.element instanceof HTMLElement&&Yr(u.element,u,e);e.messageRecords=a,e.messageCount=a.size,e.totalTextChars=i,e.maxVisibleChars=s,e.maxVisibleMesId=l,e.indexReady=!0}function qT(e,t,n){if(!(t instanceof HTMLElement))return null;const r=t.getAttribute("mesid")||"",o=Number(r);if(!r||!Number.isInteger(o))return null;const a=n[o]||null,i=Ts(a),s=xs(a),l=e.messageRecords instanceof Map?e.messageRecords:new Map,c=l.get(r),u=c||{mesId:r};if(c?.element instanceof HTMLElement&&c.element!==t&&(Yr(c.element,c,e),u.appliedSignature=""),!c)e.totalTextChars=Number(e.totalTextChars||0)+i.chars,sm(e,r,0,i.chars);else if(Number(c.textChars||0)!==i.chars){const p=Number(c.textChars||0);e.totalTextChars=Math.max(0,Number(e.totalTextChars||0)-p+i.chars),sm(e,r,p,i.chars)}return u.mesId=r,u.element=t,u.textChars=i.chars,u.messageSignature=i.signature,u.role=s,l.set(r,u),e.messageRecords=l,e.messageCount=l.size,u}function sm(e,t,n,r){if(String(e.maxVisibleMesId||"")===String(t)){if(r>=n){e.maxVisibleChars=r;return}YT(e);return}r>Number(e.maxVisibleChars||0)&&(e.maxVisibleChars=r,e.maxVisibleMesId=t)}function YT(e){let t=0,n="none";for(const r of e.messageRecords?.values?.()||[]){const o=Number(r?.textChars||0);o>t&&(t=o,n=r.mesId||"none")}e.maxVisibleChars=t,e.maxVisibleMesId=n}function Xg(e){return{visibleTextChars:Number(e.totalTextChars||0),maxVisibleChars:Number(e.maxVisibleChars||0),maxVisibleMesId:e.maxVisibleMesId||"none"}}function QT(e,t){return!!(e?.indexReady&&e.indexChatElement===t&&String(e.indexChatId||"")===String(We?.()??""))}function Jg(e=pe()){for(const t of e.messageRecords?.values?.()||[])t?.element instanceof HTMLElement&&Yr(t.element,t,e);e.messageRecords=new Map,e.pendingMessageIds=new Set,e.tailMessageIds=new Set,e.pendingRefreshMode="",e.messageCount=0,e.totalTextChars=0,e.maxVisibleChars=0,e.maxVisibleMesId="none",e.indexChatId="",e.indexChatElement=null,e.indexReady=!1,e.optimized=!1}function Zg(e=[]){const t=Array.isArray(e)?e:[e],n=[],r=new Set;for(const o of t){const a=o&&typeof o=="object"?o.messageId??o.mesId??o.id:o,i=Number(a),s=Number.isInteger(i)&&i>=0?String(i):String(a??"").trim();!s||r.has(s)||(r.add(s),n.push(s))}return n}function eb(e,t){if(!(e instanceof HTMLElement))return null;const n=String(t).replace(/\\/g,"\\\\").replace(/"/g,'\\"');return e.querySelector(`.mes[mesid="${n}"]`)}function XT(e=0){const t=new Set,n=Number(e||0),r=Math.max(0,n-Pg);for(let o=r;o<n;o+=1)t.add(String(o));return t}function JT(e){const t=new Set;for(const n of e||[]){const r=n instanceof HTMLElement?n.getAttribute("mesid"):"";r&&t.add(String(r))}return t}function tb(e,t){return e.visibleTextChars>=Yv||e.maxVisibleChars>=Qv||t>=Jv&&e.visibleTextChars>=Xv}function nb(e,t,n=null,r={}){if(!(e instanceof HTMLElement))return;const o=r.record||null;if(r.editingMessages?.has(e)){vs(e,o),n&&(n.editing+=1);return}const a=e.getAttribute("mesid")||"",i=Number(a),s=Number.isInteger(i)?t[i]:null,l=o?.role||xs(s),c=Number(o?.textChars??fb(s)),u=ZT(o,c,r.chatWidth,l),p=e.style.getPropertyValue(rr);if(e.classList.contains("bai-bai-toolkit-long-chat-contained")&&p){o&&(o.appliedSignature=u,o.contained=!0,o.role=l),n&&(n.skipped+=1);return}if(o&&o.appliedSignature===u&&o.contained===!0&&e.classList.contains("bai-bai-toolkit-long-chat-contained")&&p){n&&(n.skipped+=1);return}const b=r.measuredHeights instanceof Map,v=e.classList.contains("bai-bai-toolkit-long-chat-contained")||co()?0:b?Number(r.measuredHeights.get(e)||0):bu(e),y=ox(a),k=tx(c,r.chatWidth,l),P=v||y||k;n&&(v?n.measured+=1:y?n.cached+=1:n.estimated+=1),P>0&&(hu(a,P),e.style.setProperty(rr,`${Math.round(P)}px`)),e.classList.add("bai-bai-toolkit-long-chat-contained"),o&&(o.appliedSignature=u,o.contained=!0,o.role=l),n&&(n.contained+=1)}function ZT(e,t,n=window.innerWidth,r="assistant"){const o=Math.max(0,Math.round(Number(n||0)/Lg));return[gu(r||e?.role),e?.messageSignature||`chars:${Number(t||0)}`,`width:${o}`].join("|")}function ex(e,t=0){const n=new Set,r=Pg,o=Number(t||0),a=Math.max(0,o-r);for(const i of e){const s=i.getAttribute("mesid"),l=Number(s);s&&Number.isInteger(l)&&l>=a&&n.add(i)}for(const i of e.slice(-r))n.add(i);return n}function rb(e){const t=new Set;if(!(e instanceof HTMLElement))return t;for(const n of e.querySelectorAll(Bt)){const r=n.closest(".mes");r instanceof HTMLElement&&t.add(r)}return t}function tx(e,t=window.innerWidth,n="assistant"){const r=ob(e,t,n),o=KT(n,t),a=Math.max(1,Number(o?.scale||1)),i=r*a*oT+aT;return Math.max(120,Math.min(iT,Math.ceil(i)))}function ob(e,t=window.innerWidth,n="assistant"){const r=gu(n),o=nx(t),a=Math.max(1,Math.ceil(Number(e||0)/o)),i=r==="user"?180:260,s=r==="user"?30:32,l=r==="user"?140:190,c=i+a*s;return Math.max(l,c)}function nx(e=window.innerWidth){return Math.max(22,Math.min(80,Math.floor((e||720)/16)))}function bu(e){if(!(e instanceof HTMLElement))return 0;const t=Number(e.getBoundingClientRect?.().height||0),n=Math.max(t,Number(e.offsetHeight||0));return n>=24?Math.round(n):0}function ab(e,t){const n=new Map;if(co())return n;for(const r of e||[]){if(!(r instanceof HTMLElement)||t?.has?.(r)||r.classList.contains("bai-bai-toolkit-long-chat-contained")||!ib(r))continue;const o=bu(r);o>=24&&n.set(r,o)}return n}function rx(e,t){if(!(e instanceof HTMLElement)||!e.classList.contains("mes")||e.style.getPropertyValue(rr))return;const n=e.getAttribute("mesid")||"",r=Number(t||0);!n||r<24||!ib(e)||(hu(n,r),e.style.setProperty(rr,`${Math.round(r)}px`))}function ib(e){const t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight||800;return t.bottom>=-n&&t.top<=n*2}function ox(e){const t=sb(e);if(!t)return 0;const n=pe();return Number(n.heightCache.get(t)||0)}function hu(e,t){const n=sb(e);if(!n||!Number.isFinite(t)||t<=0)return;const r=pe();for(r.heightCache.set(n,Math.round(t));r.heightCache.size>1e3;){const o=r.heightCache.keys().next().value;r.heightCache.delete(o)}}function sb(e){if(e==null||String(e)==="")return"";const t=We?.();return t==null||String(t)===""?"":`${String(t)}::${String(e)}`}function ax(){const e=We?.();return e==null||String(e)===""?"":`${String(e)}::`}function ix(){const e=pe(),t=ax(),n=Array.isArray(Q.chat)?Q.chat.length:0;if(!(!t||!Number.isFinite(n)))for(const r of e.heightCache.keys()){if(!String(r).startsWith(t))continue;const o=Number(String(r).slice(t.length));(!Number.isInteger(o)||o>=n)&&e.heightCache.delete(r)}}function lb(){Cn(),document.querySelector("#chat")?.classList.remove("bai-bai-toolkit-long-chat-render-optimized");for(const e of document.querySelectorAll("#chat .mes.bai-bai-toolkit-long-chat-contained"))vs(e);Jg()}function vs(e,t=null){e instanceof HTMLElement&&(e.classList.remove("bai-bai-toolkit-long-chat-contained"),e.style.removeProperty(rr),t&&(t.appliedSignature="",t.contained=!1))}function cb(e,t,n=pe()){!(e instanceof HTMLElement)||!n.resizeObserver||t?.observedElement===e&&t?.resizeObserver===n.resizeObserver||(n.resizeObserver.observe(e),t&&(t.observedElement=e,t.resizeObserver=n.resizeObserver))}function Yr(e,t=null,n=pe()){const r=t?.observedElement instanceof HTMLElement?t.observedElement:e,o=t?.resizeObserver||n.resizeObserver;r instanceof HTMLElement&&o&&o.unobserve(r),t&&(t.observedElement=null,t.resizeObserver=null)}function co(){if(pe().generationActive)return!0;if(typeof Q.isGenerating=="function")try{return!!Q.isGenerating()}catch{return!1}return!1}function sx(e){return e instanceof HTMLElement&&(e.classList.contains("bai-bai-toolkit-long-chat-render-optimized")||!!e.querySelector(".mes.bai-bai-toolkit-long-chat-contained"))}function ub(){if(!C.longChatDomRenderOptimizationEnabled)return;const e=pe();!e.generationAnchorEnabled&&!co()||(clearTimeout(e.generationAnchorReleaseTimer),e.generationAnchorReleaseTimer=null,clearTimeout(e.generationAnchorTimer),e.generationAnchorTimer=setTimeout(()=>{e.generationAnchorTimer=null,lx()},40))}function lx(){const e=pe(),t=document.querySelector("#chat");if(!(t instanceof HTMLElement)||_i||!C.longChatDomRenderOptimizationEnabled||Bn(t)||!co()||!sx(t)){e.generationAnchorEnabled=!1,Jo(e);return}const n=yu(t);if(!(!e.generationAnchorEnabled&&!n)){if(!n){e.generationAnchorAwayStartedAt||(e.generationAnchorAwayStartedAt=performance.now()),performance.now()-Number(e.generationAnchorAwayStartedAt||0)>250?(e.generationAnchorEnabled=!1,Jo(e)):ub();return}e.generationAnchorAwayStartedAt=0,e.generationAnchorEnabled=!0,_u(t,e)}}function Jo(e=pe()){e.autoScrollChatElement instanceof HTMLElement||Cn(e)}function cx(e=""){const t=pe();db(),t.autoScrollToken=Number(t.autoScrollToken||0)+1;const n=t.autoScrollToken;t.autoScrollStartedAt=performance.now(),t.autoScrollLastHeight=0,t.autoScrollStableFrames=0,t.autoScrollLogged=!1,pb(n,e)}function db(){const e=pe();for(const t of e.autoScrollTimers||[])clearTimeout(t);e.autoScrollTimers=[],e.autoScrollFrame&&(cancelAnimationFrame(e.autoScrollFrame),e.autoScrollFrame=0),xi(e)}function pb(e,t=""){const n=pe(),r=document.querySelector("#chat");if(!(r instanceof HTMLElement)||e!==n.autoScrollToken||_i||!C.longChatDomRenderOptimizationEnabled||Bn(r)||n.userScrolledAway){xi(n);return}ux(r,n),_u(r,n);const o=performance.now();n.programmaticScrollUntil=o+250;const a=Math.max(0,r.scrollHeight-r.clientHeight),i=Math.abs(r.scrollTop-a),s=Math.abs(Number(n.autoScrollLastHeight||0)-r.scrollHeight);if(i>$o?(r.scrollTop=a,n.autoScrollStableFrames=0):s>$o?n.autoScrollStableFrames=0:n.autoScrollStableFrames=Number(n.autoScrollStableFrames||0)+1,n.autoScrollLastHeight=r.scrollHeight,o-Number(n.autoScrollStartedAt||o)<kg&&Number(n.autoScrollStableFrames||0)<Ag){n.autoScrollFrame=requestAnimationFrame(()=>{n.autoScrollFrame=0,pb(e,t)});return}xi(n,{finalScrollToBottom:!0}),n.autoScrollLogged||(n.autoScrollLogged=!0,console.debug(`${Ee} Long chat DOM render optimization scrolled to bottom (${t})`))}function ux(e,t){!(e instanceof HTMLElement)||t.autoScrollChatElement===e||(xi(t),t.autoScrollChatElement=e,t.autoScrollPreviousScrollBehavior=e.style.scrollBehavior||"",e.style.scrollBehavior="auto")}function _u(e,t){if(!(e instanceof HTMLElement))return;let n=t.bottomAnchorElement;n instanceof HTMLElement||(n=document.createElement("div"),n.className=yi,n.setAttribute("aria-hidden","true"),t.bottomAnchorElement=n),(n.parentElement!==e||e.lastElementChild!==n)&&e.append(n),e.classList.add(Ei)}function Cn(e=pe()){const t=e.bottomAnchorElement;t instanceof HTMLElement&&(t.parentElement?.classList.remove(Ei),t.remove()),document.querySelector("#chat")?.classList.remove(Ei),e.bottomAnchorElement=null}function xi(e=pe(),{finalScrollToBottom:t=!1}={}){const n=e.autoScrollChatElement;n instanceof HTMLElement?(t&&(n.scrollTop=Math.max(0,n.scrollHeight-n.clientHeight)),Cn(e),t&&(n.scrollTop=Math.max(0,n.scrollHeight-n.clientHeight)),n.style.scrollBehavior=e.autoScrollPreviousScrollBehavior||""):Cn(e),e.autoScrollChatElement=null,e.autoScrollPreviousScrollBehavior=""}function dx(e){const t=pe();if(performance.now()<Number(t.programmaticScrollUntil||0))return;const n=yu(e);t.userScrolledAway=!n,t.generationAnchorEnabled&&(n?t.generationAnchorAwayStartedAt=0:(t.generationAnchorAwayStartedAt||(t.generationAnchorAwayStartedAt=performance.now()),ub()))}function yu(e){return e instanceof HTMLElement?e.scrollHeight-e.scrollTop-e.clientHeight<=48:!0}function mb(e){if(!(e instanceof HTMLElement))return null;const t=[...e.querySelectorAll(".mes[mesid]")].filter(n=>n instanceof HTMLElement);return t[t.length-1]??null}function px(){const e=document.querySelector("#chat"),t=mb(e);return t instanceof HTMLElement?t.getAttribute("mesid"):""}function mx(e,t){const n=e.scrollTop,r=e.getBoundingClientRect(),o=t.getBoundingClientRect(),a=Math.max(eT,Math.min(Math.round(e.clientHeight*Zv),tT)),i=n+o.top-r.top-a,s=Math.max(0,e.scrollHeight-e.clientHeight);return Math.max(0,Math.min(Math.round(i),s))}function Ts(e){if(!e||typeof e!="object")return{chars:0,signature:"empty"};let t="",n="none";typeof e.extra?.display_text=="string"&&e.extra.display_text.trim().length>0?(t=e.extra.display_text,n="display"):typeof e.mes=="string"&&(t=e.mes,n="mes");let r=0,o="";t&&(o=t.replace(/<think[ing]*>[\s\S]*?<\/think[ing]*>/gi,"").replace(/<details[\s\S]*?>[\s\S]*?<\/details>/gi,""),r+=o.length);const a=typeof e.extra?.reasoning_display_text=="string"?e.extra.reasoning_display_text:typeof e.extra?.reasoning=="string"?e.extra.reasoning:"";return a&&(r+=50),{chars:r,signature:[n,o.length,lm(o),a.length,lm(a)].join(":")}}function fb(e){return Ts(e).chars}function lm(e){const t=String(e||"");if(!t)return"0";const n=t.length<=1024?t:`${t.slice(0,512)}
${t.slice(-512)}`;let r=2166136261;for(let o=0;o<n.length;o+=1)r^=n.charCodeAt(o),r=Math.imul(r,16777619);return(r>>>0).toString(36)}function xs(e){return e?.is_user===!0?"user":"assistant"}function fx(){return typeof Ql!="function"}function pa(){return typeof Ng=="function"}function gb(){if(!pa()){Cs();return}if(_[Xp])return;const e=r=>{cw(r)},t=r=>{gw(r)},n=()=>{pw(1500)};_[Xp]=e,_[qv]=t,_[jv]=n,document.addEventListener("click",e,!0),document.addEventListener("click",t,!0),M.on(w.MESSAGE_DELETED,n)}function Eu(){if(C.messageEditBottomActionsEnabled===!1){bb();return}tc(),hb()}function ws(){return(!_[Ra]||typeof _[Ra]!="object")&&(_[Ra]={}),_[Ra]}function tc(){wx();const e=ws(),t=document.querySelector("#chat");if(!(t instanceof HTMLElement)||typeof MutationObserver!="function"){clearTimeout(e.retryTimer),e.retryTimer=setTimeout(()=>{e.retryTimer=null,Eu()},1e3);return}e.observer&&e.chatElement===t||(e.observer?.disconnect(),e.chatElement=t,e.observer=new MutationObserver(n=>{gx(n)&&hb()}),e.observer.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style","class"]}))}function gx(e){for(const t of e){if(bx(t))return!0;for(const n of t.addedNodes)if(cm(n))return!0;for(const n of t.removedNodes)if(cm(n))return!0}return!1}function bx(e){const t=e.target;if(!(t instanceof Element))return!1;if(t.matches(Si)||t.closest(hT))return!0;const n=t.closest(".mes");return n instanceof HTMLElement&&!!n.querySelector("#curEditTextarea")}function cm(e){return e instanceof Element?e.matches(Si)||!!e.querySelector(Si):!1}function bb(){const e=ws();e.observer?.disconnect(),e.observer=null,e.chatElement=null,clearTimeout(e.retryTimer),e.retryTimer=null,e.updateFrame&&(cancelAnimationFrame(e.updateFrame),e.updateFrame=0),document.getElementById(hi)?.remove(),document.querySelectorAll(`#chat .${cn}`).forEach(t=>t.remove())}function hb(){const e=ws();e.updateFrame||(e.updateFrame=requestAnimationFrame(()=>{e.updateFrame=0,hx()}))}function hx(){if(C.messageEditBottomActionsEnabled===!1){bb();return}const e=document.querySelector("#chat");if(!(e instanceof HTMLElement)){tc();return}const t=ws();(!t.observer||t.chatElement!==e||!document.getElementById(hi))&&tc();const n=e.querySelector("#curEditTextarea");_x(n),n instanceof HTMLElement&&yx(n)}function _x(e){const t=e instanceof HTMLElement?e.closest(".mes"):null;document.querySelectorAll(`#chat .${cn}`).forEach(n=>{n.closest(".mes")!==t&&n.remove()})}function yx(e){const t=e.closest(".mes"),n=e.parentElement;if(!(t instanceof HTMLElement)||!(n instanceof HTMLElement))return;const r=t.querySelector(".mes_edit_buttons .mes_edit_done"),o=t.querySelector(".mes_edit_buttons .mes_edit_cancel");if(!(r instanceof HTMLElement)||!(o instanceof HTMLElement))return;const a=Array.from(t.querySelectorAll(`.${cn}`));let i=a.find(c=>c.parentElement===n);for(const c of a)c!==i&&c.remove();if(i instanceof HTMLElement||(i=document.createElement("div"),i.className=cn,i.dataset.baiBaiToolkit="message-edit-bottom-actions"),(i.parentElement!==n||i.previousElementSibling!==e)&&e.insertAdjacentElement("afterend",i),i.dataset.ready==="true")return;const s=um(r,"bottom-confirm"),l=um(o,"bottom-cancel");i.replaceChildren(l,s),i.dataset.ready="true"}function um(e,t){const n=e.cloneNode(!1);return n.dataset.baiBaiToolkitBottomAction=t,n.removeAttribute("id"),n.addEventListener("click",()=>{Ex(n)},!0),n}function Ex(e){const t=Sx(e);if(!t)return;const n=()=>{Tx(t)};requestAnimationFrame(()=>{n(),requestAnimationFrame(n)});for(const r of dT)setTimeout(n,r);vx(t,n)}function Sx(e){const t=document.querySelector("#chat"),n=e instanceof HTMLElement?e.closest(".mes[mesid]"):null;if(!(t instanceof HTMLElement)||!(n instanceof HTMLElement))return null;const r=t.getBoundingClientRect(),o=n.getBoundingClientRect();return{messageId:n.getAttribute("mesid"),bottomInChat:o.bottom-r.top}}function vx(e,t){if(typeof M?.on!="function"||!w.MESSAGE_UPDATED)return;let n=null;const r=()=>{clearTimeout(n),M.removeListener?.(w.MESSAGE_UPDATED,o)},o=a=>{String(a)===String(e.messageId)&&(r(),t(),setTimeout(t,0),setTimeout(t,50),setTimeout(t,160))};M.on(w.MESSAGE_UPDATED,o),n=setTimeout(r,5e3)}function Tx(e){const t=document.querySelector("#chat");if(!(t instanceof HTMLElement)||e?.messageId==null)return;const n=xx(String(e.messageId)),r=document.querySelector(`#chat .mes[mesid="${n}"]`);if(!(r instanceof HTMLElement))return;const o=t.getBoundingClientRect(),s=r.getBoundingClientRect().bottom-o.top-Number(e.bottomInChat);Math.abs(s)>1&&(t.scrollTop+=s)}function xx(e){return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):e.replace(/["\\]/g,"\\$&")}function wx(){let e=document.getElementById(hi);e||(e=document.createElement("style"),e.id=hi,document.head.append(e));const t=`
#chat .${cn} {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 6px;
    width: 100%;
    margin-top: 8px;
}

#chat .${cn} .menu_button {
    flex: 0 0 auto;
    opacity: 0.5;
    padding: 0;
    font-size: 1rem;
    height: 2rem;
    margin-top: 0;
    margin-bottom: 0;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

#chat .${cn} .menu_button:hover {
    opacity: 1;
}
`;e.textContent!==t&&(e.textContent=t)}function _b(){if(Yx(),Qx(),_[em])return;const e=o=>{Xx(o)},t=o=>{Jx(o)},n=o=>{ew(o)},r=o=>{iw(o)};_[em]={directFocusIntentHandler:e,pointerUpHandler:t,focusInHandler:n,pageLifecycleHandler:r},document.addEventListener("pointerdown",e,!0),document.addEventListener("mousedown",e,!0),document.addEventListener("touchstart",e,!0),document.addEventListener("pointerup",t,!0),document.addEventListener("touchend",t,!0),document.addEventListener("mouseup",t,!0),document.addEventListener("focusin",n,!0),document.addEventListener("visibilitychange",r,!0),window.addEventListener("pagehide",r,!0),window.addEventListener("pageshow",r,!0),window.addEventListener("focus",r,!0)}function yb(){if(!Zt()){or({removeEntryObservers:!0});return}Lx(),Mx(),mn("apply")}function Eb(){const e=_[Jp];if(e?.[Zp])return;typeof e=="function"&&document.removeEventListener("click",e,!0);const t=n=>{Cx(n)};t[Zp]=!0,_[Jp]=t,document.addEventListener("click",t,!0)}function Cx(e){if(!C.welcomeRecentChatDirectOpenEnabled)return;const t=e.target instanceof Element?e.target:null;if(!t||t.closest(bT))return;const n=t.closest(gT);if(!(n instanceof HTMLElement))return;const r=n.getAttribute("data-avatar"),o=n.getAttribute("data-group"),a=n.getAttribute("data-file");if(!r||!a||o)return;const i=Xt.findIndex(s=>s?.avatar===r);i!==-1&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),!_.welcomeRecentChatDirectOpenPromise&&(_.welcomeRecentChatDirectOpenPromise=kx(i,r,a).finally(()=>{_.welcomeRecentChatDirectOpenPromise=null})))}async function kx(e,t,n){try{await Ax(e);const r=Xt[e];if(!r){console.error(`${Ee} Character not found for avatar ID: ${t}`);return}if(String($e)===String(e)){if(zp(t),Yt(),Px(n)){console.debug(`${Ee} Chat ${n} is already open.`);return}await ml(n);return}const o=r.chat;if(r.chat=n,await av(e),String($e)!==String(e)){r.chat===n&&o!==n&&(r.chat=o);return}if(zp(t),Yt(),We()!==n){await ml(n);return}o!==n&&(typeof Ql=="function"?await Ql(new CustomEvent("newChat")):await ml(n))}catch(r){console.error(`${Ee} Error opening recent chat`,r),toastr.error(d`Failed to open recent chat. See console for details.`)}}async function Ax(e){typeof am!="function"||!Xt[e]?.shallow||await am(e)}function Px(e){return We()===e&&!Bn()}function Bn(e=document){return e instanceof Document||e instanceof Element?!!e.querySelector(fT):!1}function Lx(){const e=Ix();if(!e?.descriptor?.get||!e.descriptor?.set||e.descriptor.set[om])return;const{prototype:t,descriptor:n}=e;function r(o){if(!Rx(this,o))return n.set.call(this,o)}r[om]=!0,r.__baiBaiToolkitOriginalScrollTopSetter=n.set,Object.defineProperty(t,"scrollTop",{...n,set:r})}function Ix(){const e=[globalThis.Element?.prototype,globalThis.HTMLElement?.prototype].filter(Boolean);for(const t of e){const n=Object.getOwnPropertyDescriptor(t,"scrollTop");if(n?.get&&n?.set)return{prototype:t,descriptor:n}}return null}function Rx(e,t){if(_.mobileMessageEditScrollRestoreActive||!(e instanceof HTMLElement)||e.id!=="chat")return!1;const n=Jt();if(!n||n.chat!==e||Date.now()<Number(n.userScrollIntentUntil||0))return!1;const r=Number(t);return Number.isFinite(r)?Math.abs(r-Number(n.scrollTop||0))>cu:!1}function Mx(){if(_.mobileMessageEditScrollGuardObserversInstalled){if(_.mobileMessageEditScrollGuardEntryHandler)return;or({removeEntryObservers:!0})}const e=r=>{Bx(r)},t=r=>{Dx(r)},n=()=>{mn("focusout",0),mn("focusout settle",80)};document.addEventListener("pointerdown",e,!0),document.addEventListener("mousedown",e,!0),document.addEventListener("touchstart",e,{capture:!0,passive:!0}),document.addEventListener("click",e,!0),document.addEventListener("focusin",t,!0),document.addEventListener("focusout",n,!0),_.mobileMessageEditScrollGuardEntryHandler=e,_.mobileMessageEditScrollGuardFocusInHandler=t,_.mobileMessageEditScrollGuardFocusOutHandler=n,_.mobileMessageEditScrollGuardObserversInstalled=!0}function Ox(){if(!_.mobileMessageEditScrollGuardObserversInstalled)return;const e=_.mobileMessageEditScrollGuardEntryHandler,t=_.mobileMessageEditScrollGuardFocusInHandler,n=_.mobileMessageEditScrollGuardFocusOutHandler,r=_.mobileMessageEditScrollGuardUpdateHandler,o=_.mobileMessageEditScrollGuardResizeHandler,a=_.mobileMessageEditScrollGuardUserScrollIntentHandler;e&&(document.removeEventListener("pointerdown",e,!0),document.removeEventListener("mousedown",e,!0),document.removeEventListener("touchstart",e,!0),document.removeEventListener("click",e,!0)),t&&document.removeEventListener("focusin",t,!0),n&&document.removeEventListener("focusout",n,!0),r&&(document.removeEventListener("focusin",r,!0),document.removeEventListener("focusout",r,!0)),a&&(document.removeEventListener("touchmove",a,!0),document.removeEventListener("wheel",a,!0)),o&&(window.removeEventListener("resize",o,!0),window.visualViewport?.removeEventListener("resize",o,!0)),_.mobileMessageEditScrollGuardMutationObserver?.disconnect(),_.mobileMessageEditScrollGuardMutationObserver=null,_.mobileMessageEditScrollGuardMutationElement=null,_.mobileMessageEditScrollGuardResizeObserver?.disconnect(),_.mobileMessageEditScrollGuardResizeObserver=null,_.mobileMessageEditScrollGuardResizeElement=null,_.mobileMessageEditScrollGuardUpdateFrame&&(cancelAnimationFrame(_.mobileMessageEditScrollGuardUpdateFrame),_.mobileMessageEditScrollGuardUpdateFrame=0),clearTimeout(_.mobileMessageEditScrollGuardUpdateTimer),_.mobileMessageEditScrollGuardUpdateTimer=null,delete _.mobileMessageEditScrollGuardEntryHandler,delete _.mobileMessageEditScrollGuardFocusInHandler,delete _.mobileMessageEditScrollGuardFocusOutHandler,delete _.mobileMessageEditScrollGuardUpdateHandler,_.mobileMessageEditScrollGuardResizeHandler=null,_.mobileMessageEditScrollGuardUserScrollIntentHandler=null,_.mobileMessageEditScrollGuardActiveListenersInstalled=!1,_.mobileMessageEditScrollGuardObserversInstalled=!1}function Bx(e){if(!Zt())return;const t=e.target instanceof Element?e.target:null;if(!t)return;const n=t.closest(Bt);if(n instanceof HTMLElement){ma("edit interaction",n,{force:e.type!=="click"||!Su(n)}),vu(n);return}t.closest(Og)&&(mn("edit button"),mn("edit button settle",80))}function Dx(e){const t=e.target;if(Zt()&&t instanceof HTMLElement&&t.matches(Bt)){ma("edit focusin",t,{force:!Su(t)});return}mn("focusin")}function dm(e=Jt()){const t=e?.chat;if(!(t instanceof HTMLElement)||($x(t),Nx(),typeof ResizeObserver!="function")||_.mobileMessageEditScrollGuardResizeElement===t)return;_.mobileMessageEditScrollGuardResizeObserver?.disconnect();const n=new ResizeObserver(r=>{const o=r.find(a=>a.target===t)||r[0];Fx(o?.contentRect?.height)});n.observe(t),_.mobileMessageEditScrollGuardResizeObserver=n,_.mobileMessageEditScrollGuardResizeElement=t}function $x(e){if(!(e instanceof HTMLElement)||typeof MutationObserver!="function"||_.mobileMessageEditScrollGuardMutationElement===e)return;_.mobileMessageEditScrollGuardMutationObserver?.disconnect();const t=new MutationObserver(()=>{mn("chat mutation")});t.observe(e,{childList:!0,subtree:!0}),_.mobileMessageEditScrollGuardMutationObserver=t,_.mobileMessageEditScrollGuardMutationElement=e}function Nx(){if(_.mobileMessageEditScrollGuardActiveListenersInstalled)return;const e=()=>{zx()},t=()=>{Vx()},n=r=>{Ux(r)};document.addEventListener("touchmove",t,{capture:!0,passive:!0}),document.addEventListener("touchmove",n,{capture:!0,passive:!0}),document.addEventListener("wheel",t,{capture:!0,passive:!0}),document.addEventListener("wheel",n,{capture:!0,passive:!0}),document.addEventListener("scroll",n,!0),window.addEventListener("resize",e,!0),window.visualViewport?.addEventListener("resize",e,!0),_.mobileMessageEditScrollGuardResizeHandler=e,_.mobileMessageEditScrollGuardUserScrollIntentHandler=t,_.mobileMessageEditScrollGuardEditorScrollIntentHandler=n,_.mobileMessageEditScrollGuardActiveListenersInstalled=!0}function Hx(){_.mobileMessageEditScrollGuardMutationObserver?.disconnect(),_.mobileMessageEditScrollGuardMutationObserver=null,_.mobileMessageEditScrollGuardMutationElement=null,_.mobileMessageEditScrollGuardResizeObserver?.disconnect(),_.mobileMessageEditScrollGuardResizeObserver=null,_.mobileMessageEditScrollGuardResizeElement=null;const e=_.mobileMessageEditScrollGuardResizeHandler,t=_.mobileMessageEditScrollGuardUserScrollIntentHandler,n=_.mobileMessageEditScrollGuardEditorScrollIntentHandler;t&&(document.removeEventListener("touchmove",t,!0),document.removeEventListener("wheel",t,!0)),n&&(document.removeEventListener("touchmove",n,!0),document.removeEventListener("wheel",n,!0),document.removeEventListener("scroll",n,!0)),e&&(window.removeEventListener("resize",e,!0),window.visualViewport?.removeEventListener("resize",e,!0)),_.mobileMessageEditScrollGuardResizeHandler=null,_.mobileMessageEditScrollGuardUserScrollIntentHandler=null,_.mobileMessageEditScrollGuardEditorScrollIntentHandler=null,_.mobileMessageEditScrollGuardActiveListenersInstalled=!1}function mn(e="",t=0){if(!Zt()){or();return}if(t>0){clearTimeout(_.mobileMessageEditScrollGuardUpdateTimer),_.mobileMessageEditScrollGuardUpdateTimer=setTimeout(()=>{_.mobileMessageEditScrollGuardUpdateTimer=null,mn(e)},t);return}_.mobileMessageEditScrollGuardUpdateFrame||(_.mobileMessageEditScrollGuardUpdateFrame=requestAnimationFrame(()=>{_.mobileMessageEditScrollGuardUpdateFrame=0,Gx(e||"scheduled update")}))}function Gx(e=""){const t=document.querySelector(Bt);if(t instanceof HTMLElement){ma(e||"refresh",t);return}or()}function ma(e,t=null,{force:n=!1}={}){if(!Zt()){or();return}const r=t instanceof HTMLElement&&t.matches(Bt)?t:document.querySelector(Bt),o=document.querySelector("#chat");if(!(r instanceof HTMLElement)||!(o instanceof HTMLElement)){or();return}const a=_.mobileMessageEditScrollGuard;if(!n&&a?.editor===r&&a?.chat===o){dm(a);return}Sb(a),_.mobileMessageEditScrollGuard={editor:r,chat:o,scrollTop:o.scrollTop,chatHeight:o.offsetHeight,capturedAt:Date.now(),reason:e,restoreTimers:[],restoreScheduled:!1,restoreReason:"",caretVisibleTimers:[],caretVisibleCheckScheduled:!1,userScrollIntentUntil:0,editorScrollIntentUntil:0},dm(_.mobileMessageEditScrollGuard)}function or({removeEntryObservers:e=!1}={}){const t=_.mobileMessageEditScrollGuard;Sb(t),Hx(),_.mobileMessageEditScrollGuard=null,e&&Ox()}function Sb(e=_.mobileMessageEditScrollGuard){e?.restoreTimers?.length&&(e.restoreTimers.forEach(t=>clearTimeout(t)),e.restoreTimers=[]),vb(e),e&&(e.restoreScheduled=!1,e.restoreReason="")}function vb(e=_.mobileMessageEditScrollGuard){e?.caretVisibleTimers?.length&&(e.caretVisibleTimers.forEach(t=>clearTimeout(t)),e.caretVisibleTimers=[]),e&&(e.caretVisibleCheckScheduled=!1)}function Fx(e=null){const t=Jt();if(!t){mn("chat resize without guard");return}const n=Number(e),r=Number.isFinite(n)?n:t.chat.offsetHeight,o=r-Number(t.chatHeight||0);t.chatHeight=r,!(Math.abs(o)<=cu)&&Tb(`chat resize ${o}`)}function zx(){Jt()&&Tb("viewport resize")}function Vx(){const e=Jt();e&&(e.userScrollIntentUntil=Date.now()+700)}function Su(e){const t=Jt();return!!(t&&t.editor===e)}function Ux(e){const n=(e?.target instanceof Element?e.target:null)?.closest?.(Bt);n instanceof HTMLElement&&vu(n)}function vu(e){const t=Jt();!t||t.editor!==e||(t.editorScrollIntentUntil=Date.now()+pT,vb(t))}function Tb(e){const t=Jt();if(t&&(t.restoreReason=e||t.restoreReason||"restore",!t.restoreScheduled)){t.restoreScheduled=!0,queueMicrotask(()=>hl(t.restoreReason)),requestAnimationFrame(()=>hl(t.restoreReason));for(const n of uT){const r=setTimeout(()=>{t.restoreTimers=t.restoreTimers.filter(o=>o!==r),hl(t.restoreReason),t.restoreTimers.length===0&&(t.restoreScheduled=!1,t.restoreReason="")},n);t.restoreTimers.push(r)}}}function hl(e){const t=Jt();if(!t||Date.now()<Number(t.userScrollIntentUntil||0))return;const n=Number(t.scrollTop||0);if(!(Math.abs(t.chat.scrollTop-n)<=cu))try{_.mobileMessageEditScrollRestoreActive=!0,t.chat.scrollTop=n,console.debug(`${Ee} Restored message edit chat scroll after ${e}: ${n}`)}finally{_.mobileMessageEditScrollRestoreActive=!1}}function Wx(e){if(!(e instanceof HTMLTextAreaElement)||!e.isConnected||e.scrollHeight<=e.clientHeight||typeof e.selectionStart!="number"||Kx(e))return;const t=Math.max(0,Math.min(e.selectionStart,e.value.length)),n=jx(e,t);if(!Number.isFinite(n)){qx(e,t);return}const r=getComputedStyle(e),o=xb(r),a=Rg,i=a+o*Mg,s=e.scrollTop+a,l=e.scrollTop+e.clientHeight-i,c=n+o;n<s?e.scrollTop=Math.max(0,n-a):c>l&&(e.scrollTop=Math.min(e.scrollHeight-e.clientHeight,c-e.clientHeight+i))}function Kx(e){const t=Jt();return!!(t&&t.editor===e&&Date.now()<Number(t.editorScrollIntentUntil||0))}function jx(e,t){const n=document.createElement("span");n.textContent="​";const r=document.createElement("div"),o=getComputedStyle(e),a=["boxSizing","width","fontFamily","fontSize","fontWeight","fontStyle","fontVariant","fontStretch","lineHeight","letterSpacing","textTransform","textIndent","textAlign","textRendering","textSizeAdjust","tabSize","paddingTop","paddingRight","paddingBottom","paddingLeft","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"];for(const s of a)r.style[s]=o[s];r.style.position="absolute",r.style.visibility="hidden",r.style.pointerEvents="none",r.style.whiteSpace="pre-wrap",r.style.overflowWrap="break-word",r.style.wordWrap="break-word",r.style.overflow="hidden",r.style.top="0",r.style.left="-9999px",r.style.height="auto",r.style.minHeight="0",r.style.maxHeight="none",r.style.width=`${e.offsetWidth}px`;const i=e.value.slice(0,t);r.append(document.createTextNode(i.length>0?i:"​"),n),document.body.append(r);try{const s=n.offsetTop,l=parseFloat(o.borderTopWidth)||0;return s-l}finally{r.remove()}}function xb(e){const t=parseFloat(e.lineHeight);if(Number.isFinite(t))return t;const n=parseFloat(e.fontSize);return Number.isFinite(n)?n*1.2:20}function qx(e,t){if(e.scrollHeight<=e.clientHeight||e.value.length===0)return;const n=getComputedStyle(e),r=xb(n),o=Rg+r*Mg,a=Math.round((e.scrollHeight-e.clientHeight)*t/e.value.length)-o;e.scrollTop=Math.max(0,Math.min(a,e.scrollHeight-e.clientHeight))}function Jt(){const e=_.mobileMessageEditScrollGuard;return e?!Zt()||!(e.editor instanceof HTMLElement)||!(e.chat instanceof HTMLElement)||!e.editor.isConnected||!e.chat.isConnected||!e.editor.matches(Bt)?(or(),null):e:null}function Zt(){return!!C.mobileMessageEditScrollGuardEnabled}function Yx(){const e=HTMLElement.prototype.focus;if(typeof e!="function"||e[tm])return;function t(...n){if(!fa(this))return e.apply(this,n)}t[tm]=!0,t.__baiBaiToolkitOriginalFocus=e,HTMLElement.prototype.focus=t}function Qx(){const e=globalThis.jQuery?.fn||globalThis.$?.fn;if(!e)return;const t=e.focus;if(typeof t=="function"&&!t[nm]){let r=function(...o){return o.length===0&&pm(this)?this:(this.length>0&&this[0].id==="curEditTextarea"&&Zt()&&(o=[{preventScroll:!0}]),t.apply(this,o))};r[nm]=!0,r.__baiBaiToolkitOriginalFocus=t,e.focus=r}const n=e.trigger;if(typeof n=="function"&&!n[rm]){let r=function(...o){return aw(o[0])&&pm(this)?this:n.apply(this,o)};r[rm]=!0,r.__baiBaiToolkitOriginalTrigger=n,e.trigger=r}}function Xx(e){const t=e.target instanceof Element?e.target.closest(Dg):null,n=e.target instanceof Element?e.target.closest(Bt):null;if(Zt()&&n instanceof HTMLElement){ma("direct edit focus intent",n,{force:!0}),vu(n);const r=e.touches?.[0]||e;_.mobileAutoKeyboardTouchStartX=r.clientX,_.mobileAutoKeyboardTouchStartY=r.clientY}de()&&t instanceof HTMLElement&&nw(t)&&(_.mobileAutoKeyboardDirectFocusTarget=t,_.mobileAutoKeyboardDirectFocusAt=Date.now())}function Jx(e){if(!Zt())return;const t=e.target instanceof Element?e.target.closest(Bt):null;if(t instanceof HTMLElement){let n=!1;if(e.type==="touchend"&&typeof _.mobileAutoKeyboardTouchStartX=="number"){const r=e.changedTouches?.[0]||e,o=Math.abs(r.clientX-_.mobileAutoKeyboardTouchStartX),a=Math.abs(r.clientY-_.mobileAutoKeyboardTouchStartY);(o>10||a>10)&&(n=!0)}_.mobileAutoKeyboardTouchStartX=null,_.mobileAutoKeyboardTouchStartY=null,n||Zx(e,t)}}function Zx(e,t){if(!(document.activeElement===t||Date.now()-Number(_.mobileMessageEditPreventScrollFocusAt||0)<=300)){_.mobileMessageEditPreventScrollFocusAt=Date.now();try{t.focus({preventScroll:!0})}catch{t.focus()}}}function ew(e){const t=e.target;t instanceof HTMLElement&&(Zt()&&t.matches(Bt)&&ma("edit focusin",t,{force:!Su(t)}),fa(t)&&tw(t))}function tw(e){document.activeElement===e&&e.blur();const t=()=>{document.activeElement===e&&fa(e)&&e.blur()};typeof requestAnimationFrame=="function"?requestAnimationFrame(t):setTimeout(t,0)}function fa(e){return!!(de()&&e instanceof HTMLElement&&rw(e)&&!ow(e))}function nw(e){return!!(C.mobileAutoKeyboardSuppressionEnabled&&e.matches(Dg))}function rw(e){return!!(C.mobileAutoKeyboardSuppressionEnabled&&(e.matches(Bg)||e.matches(uu)))}function ow(e){return _.mobileAutoKeyboardDirectFocusTarget===e&&Date.now()-Number(_.mobileAutoKeyboardDirectFocusAt||0)<=cT}function pm(e){const t=e?.[0];return t instanceof HTMLElement&&fa(t)}function aw(e){const n=(typeof e=="string"?e:typeof e?.type=="string"?e.type:"").split(".")[0];return n==="focus"||n==="focusin"}function iw(e){!C.mobileAutoKeyboardSuppressionEnabled||!de()||((e?.type==="pagehide"||document.visibilityState==="hidden")&&lw(),sw())}function sw(){mm();const e=()=>{mm()};typeof requestAnimationFrame=="function"?requestAnimationFrame(e):setTimeout(e,0),setTimeout(e,100)}function mm(){const e=document.activeElement;e instanceof HTMLElement&&e.matches(uu)&&fa(e)&&e.blur()}function lw(){_.mobileAutoKeyboardDirectFocusTarget=null,_.mobileAutoKeyboardDirectFocusAt=0}function cw(e){if(!C.chatDeleteEditFlowOptimizationEnabled||!pa()){Cs();return}const t=e.target instanceof Element?e.target:null;if(!t)return;if(t.closest("#dialogue_del_mes_ok")){uw()&&dw();return}const n=t.closest(Og);if(!n||!mw()||bw())return;const r=n.closest(".mes[mesid]"),o=Number(r?.getAttribute("mesid"));!Number.isInteger(o)||o<0||(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),fw(o))}function uw(){return!!document.querySelector("#chat .mes.selected, #chat .del_checkbox:checked")}function dw(){clearTimeout(_.chatDeleteEditWindowTimer),_.chatDeleteEditWindowActive=!0,_.chatDeleteEditWindowStartedAt=Date.now(),_.chatDeleteEditWindowTimer=setTimeout(Cs,Ig)}function pw(e){_.chatDeleteEditWindowActive&&(clearTimeout(_.chatDeleteEditWindowTimer),_.chatDeleteEditWindowTimer=setTimeout(Cs,e))}function Cs(){clearTimeout(_.chatDeleteEditWindowTimer),_.chatDeleteEditWindowActive=!1,_.chatDeleteEditWindowStartedAt=0}function mw(){return!!(_.chatDeleteEditWindowActive&&Date.now()-Number(_.chatDeleteEditWindowStartedAt||0)<=Ig)}async function fw(e){if(pa())try{await Ng(e);const n=document.querySelector("#curEditTextarea")?.closest(".mes[mesid]"),r=Number(n?.getAttribute("mesid"));Number.isInteger(r)&&(_.chatDeleteFastEditorMesId=r)}catch(t){console.debug(`${Ee} Failed to open message editor after message deletion`,t)}}function gw(e){if(!C.chatDeleteEditFlowOptimizationEnabled||!pa()||_.chatDeleteEditReplayingAction||!hw())return;const n=(e.target instanceof Element?e.target:null)?.closest(mT);n&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),_w(n))}function bw(){return!!(document.querySelector("#curEditTextarea")||document.querySelector(".reasoning_edit_textarea"))}function hw(){const e=document.querySelector("#curEditTextarea"),t=e?.closest(".mes[mesid]"),n=Number(t?.getAttribute("mesid"));return!!(e&&Number.isInteger(n)&&Number(_.chatDeleteFastEditorMesId)===n)}async function _w(e){if(e instanceof HTMLElement)try{await yw(),await PT(),Sw(e)}catch(t){console.debug(`${Ee} Failed to commit message edit before generation action`,t)}}async function yw(){if(_.chatDeleteEditCommitPromise)return _.chatDeleteEditCommitPromise;const e=$("#chat .mes_edit_done:visible").last();if(!e.length){_.chatDeleteFastEditorMesId=null;return}const t=Number(e.closest(".mes[mesid]").attr("mesid")),n=Ew(t,3e3);_.chatDeleteEditCommitPromise=n.finally(()=>{_.chatDeleteEditCommitPromise=null,_.chatDeleteFastEditorMesId=null}),e.trigger("click"),await _.chatDeleteEditCommitPromise}function Ew(e,t){return new Promise(n=>{let r=!1;const o=()=>{r||(r=!0,clearTimeout(i),M.removeListener?.(w.MESSAGE_UPDATED,a),n())},a=s=>{(!Number.isInteger(e)||Number(s)===e)&&o()},i=setTimeout(o,t);M.on(w.MESSAGE_UPDATED,a)})}function Sw(e){if(e.isConnected){_.chatDeleteEditReplayingAction=!0;try{e.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}finally{setTimeout(()=>{_.chatDeleteEditReplayingAction=!1},0)}}}function wb(){const e=document.getElementById(Qp);if(!C.chatListScrollOptimizationEnabled){e?.remove(),Tw();return}if(!e){const n=document.createElement("style");n.id=Qp,n.textContent=`
${Za} ${$g} > .select_chat_block_wrapper {
    content-visibility: auto;
    contain: layout paint style;
    contain-intrinsic-size: 72px;
}

${Za} ${lu} > ${wg} {
    content-visibility: auto;
    contain: layout paint style;
    contain-intrinsic-size: auto var(${Cg}, ${Kv}px);
}
`,document.head.append(n)}const t=document.querySelector(Za);t&&Tu(t)}function Tu(e){if(!(e instanceof Element))return!1;const t=e.querySelector(lu);if(t instanceof HTMLElement)return _.chatBackupListAttachObserver?.disconnect(),_.chatBackupListAttachObserver=null,_.chatBackupListObserverTarget!==t&&(_.chatBackupListMutationObserver?.disconnect(),_.chatBackupListResizeObserver?.disconnect(),_.chatBackupListObserverTarget=t,_.chatBackupListMutationObserver=new MutationObserver(()=>{ei(e)}),_.chatBackupListMutationObserver.observe(t,{childList:!0}),_.chatBackupListResizeObserver=typeof ResizeObserver=="function"?new ResizeObserver(()=>{ei(e)}):null,_.chatBackupListResizeObserver?.observe(t)),ei(e),!0;if(_.chatBackupListAttachObserver)return!1;const n=new MutationObserver(()=>{Tu(e)&&(n.disconnect(),_.chatBackupListAttachObserver===n&&(_.chatBackupListAttachObserver=null))});return n.observe(e,{childList:!0,subtree:!0}),_.chatBackupListAttachObserver=n,!1}function ei(e){!C.chatListScrollOptimizationEnabled||!(e instanceof Element)||_.chatBackupItemMeasureFrame!==void 0&&_.chatBackupItemMeasureFrame!==null||(_.chatBackupItemMeasureFrame=requestAnimationFrame(()=>{_.chatBackupItemMeasureFrame=null,vw(e)}))}function vw(e){const t=e.querySelector(lu);if(!(t instanceof HTMLElement)||!t.classList.contains("open"))return;const n=t.getBoundingClientRect(),r=t.firstElementChild;if(!(r instanceof HTMLElement)||!r.matches(wg))return;const o=r.getBoundingClientRect();if(o.height<=0||o.bottom<=n.top||o.top>=n.bottom)return;const a=Math.ceil(o.height);!Number.isFinite(a)||a<=0||Number(t.dataset.baiBaiToolkitBackupItemHeight||0)===a||(t.dataset.baiBaiToolkitBackupItemHeight=String(a),t.style.setProperty(Cg,`${a}px`))}function Tw(){_.chatBackupItemMeasureFrame!==void 0&&_.chatBackupItemMeasureFrame!==null&&cancelAnimationFrame(_.chatBackupItemMeasureFrame),_.chatBackupItemMeasureFrame=null,_.chatBackupListAttachObserver?.disconnect(),_.chatBackupListAttachObserver=null,_.chatBackupListMutationObserver?.disconnect(),_.chatBackupListMutationObserver=null,_.chatBackupListResizeObserver?.disconnect(),_.chatBackupListResizeObserver=null,_.chatBackupListObserverTarget=null}function Cb(){if(_.chatManagementPopupObserver)return!0;const e=document.querySelector(Za);if(!e)return!1;let t=fm(e);const n=new MutationObserver(()=>{const r=fm(e);t&&!r&&xw(e),!t&&r&&ei(e),t=r});return n.observe(e,{attributes:!0,attributeFilter:["style","class"]}),Tu(e),_.chatManagementPopupObserver=n,!0}function fm(e){return getComputedStyle(e).display!=="none"}function xw(e){if(!C.chatListAutoClearEnabled)return;mu+=1;const t=e.querySelector($g);!t||!t.children.length||t.replaceChildren()}function ww(){const e=globalThis.fetch;if(typeof e!="function"||e[qp])return;async function t(n,r){const o=await Pw(n,r);if(o)try{return await Rw(e,o)}catch(a){if(console.debug(`${Ee} Backend fast-search path failed; trying legacy fast path`,a),o.avatarUrl)try{return await Mw(e,{avatarUrl:o.avatarUrl})}catch(i){console.debug(`${Ee} Legacy fast chat list path failed; falling back to /api/chats/search`,i)}}return e.apply(this,arguments)}t[qp]=!0,t.__baiBaiToolkitOriginalFetch=e,globalThis.fetch=t}function Cw(){const e=globalThis.fetch;if(typeof e!="function"||e[Yp])return;async function t(n,r){if(kw(n,r)){Cb();try{return await Aw(e,n,r)}catch(o){if(o?.name==="AbortError")throw o;console.debug(`${Ee} Fast chat backup list failed; falling back to native endpoint`,o)}}return e.apply(this,arguments)}t[Yp]=!0,t.__baiBaiToolkitOriginalFetch=e,globalThis.fetch=t}function kw(e,t){try{const n=e instanceof Request?e.url:String(e),r=new URL(n,location.origin);return String(t?.method||(e instanceof Request?e.method:"GET")).toUpperCase()==="POST"&&r.origin===location.origin&&r.pathname===Uv}catch{return!1}}async function Aw(e,t,n){const r=n?.signal??(t instanceof Request?t.signal:void 0),o=await e(Wv,{method:"POST",headers:me(),body:JSON.stringify({}),signal:r});if(!o.ok)throw new Error(`Unexpected status ${o.status}`);return o}async function Pw(e,t){if(!C.fastChatListEnabled||!Lw(e)||String(t?.method||(e instanceof Request?e.method:"GET")).toUpperCase()!=="POST")return null;const r=await Iw(e,t);if(!r||typeof r!="object")return null;const o=String(r.query??""),a=r.avatar_url,i=r.group_id;if(o.trim().length!==0)return null;const s=typeof a=="string"&&a.length>0,l=typeof i=="string"&&i.length>0;return!s&&!l?null:{avatarUrl:s?a:void 0,groupId:l?i:void 0}}function Lw(e){try{const t=e instanceof Request?e.url:String(e),n=new URL(t,location.origin);return n.origin===location.origin&&n.pathname==="/api/chats/search"}catch{return!1}}async function Iw(e,t){const n=t?.body;if(typeof n=="string")return Ww(n);if(e instanceof Request)try{return await e.clone().json().catch(()=>null)}catch{return null}return null}async function Rw(e,{avatarUrl:t,groupId:n}){const r={query:""};n?r.group_id=n:r.avatar_url=t;const o=await e(Vv,{method:"POST",headers:me(),body:JSON.stringify(r)});if(!o.ok)throw new Error(`Unexpected status ${o.status}`);const a=await o.json();if(!Array.isArray(a))throw new Error("fast-search returned a non-array payload");return new Response(JSON.stringify(a),{status:200,headers:{"Content-Type":"application/json"}})}async function Mw(e,{avatarUrl:t}){const n=await e("/api/characters/chats",{method:"POST",headers:me(),body:JSON.stringify({avatar_url:t,simple:!0})});if(!n.ok)throw new Error(`Unexpected status ${n.status}`);const r=await n.json(),o=Array.isArray(r)?r.map(Gw).filter(Boolean):[];o.sort((i,s)=>nc(s.last_mes)-nc(i.last_mes));const a=++mu;return setTimeout(()=>{Dw(o,a),Ow(e,t,a)},0),new Response(JSON.stringify(o),{status:200,headers:{"Content-Type":"application/json"}})}async function Ow(e,t,n){if(ks(n))try{const r=await Bw(e,t);Nw(r,n)}catch(r){console.debug(`${Ee} Failed to hydrate full chat list metadata`,r)}}async function Bw(e,t){const n=await e("/api/characters/chats",{method:"POST",headers:me(),body:JSON.stringify({avatar_url:t})});if(!n.ok)throw new Error(`Unexpected status ${n.status}`);const r=await n.json();return Array.isArray(r)?r.map(Fw).filter(Boolean):[]}function Dw(e,t){if(ks(t))for(const n of e){const r=kb(n.file_name);r.length&&(r.find(".chat_file_size").text("(...,"),r.find(".chat_messages_num").text("... 💬)"))}}function $w(e,t){if(!ks(t))return;const n=kb(e.file_name);n.length&&(n.find(".chat_file_size").text(`(${e.file_size},`),n.find(".chat_messages_num").text(`${e.message_count} 💬)`),n.find(".select_chat_block_mes").text(e.preview_message),n.find(".chat_messages_date").text(Eg(e.last_mes).format("lll")))}function Nw(e,t){if(!ks(t))return;const n=new Map;e.forEach((r,o)=>{$w(r,t),n.set(r.file_name,{index:o,time:nc(r.last_mes)})}),Hw(n)}function Hw(e){const t=$("#select_chat_div"),n=t.children(".select_chat_block_wrapper").get();n.sort((r,o)=>{const a=$(r).find(".select_chat_block").attr("file_name"),i=$(o).find(".select_chat_block").attr("file_name"),s=e.get(a)??{time:0,index:Number.MAX_SAFE_INTEGER},l=e.get(i)??{time:0,index:Number.MAX_SAFE_INTEGER};return l.time-s.time||s.index-l.index}),t.append(n)}function kb(e){return $("#select_chat_div .select_chat_block").filter((t,n)=>$(n).attr("file_name")===e).closest(".select_chat_block_wrapper")}function ks(e){return e===mu&&String($("#select_chat_search").val()??"").trim().length===0}function Gw(e){if(!e||typeof e!="object")return null;const t=Ab(e);return t?{file_name:t,file_size:"...",message_count:"...",last_mes:zw(t),preview_message:""}:null}function Fw(e){if(!e||typeof e!="object")return null;const t=Ab(e);if(!t)return null;const n=Number(e.chat_items);return{file_name:t,file_size:e.file_size??"",message_count:Number.isFinite(n)?n:0,last_mes:Vw(e.last_mes),preview_message:Uw(e.mes)}}function Ab(e){const t=typeof e.file_id=="string"&&e.file_id?e.file_id:e.file_name;return typeof t!="string"?"":t.replace(/\.jsonl$/i,"")}function zw(e){const n=String(e).replace(/\.jsonl$/i,"").match(/(\d{4})-(\d{1,2})-(\d{1,2})(?:\s*@|@|\s+)?(\d{1,2})h\s*(\d{1,2})m(?:\s*(\d{1,2})s)?(?:\s*(\d{1,3})ms)?/i);if(n){const[,r,o,a,i,s,l="0",c="0"]=n,u=new Date(Number(r),Number(o)-1,Number(a),Number(i),Number(s),Number(l),Number(c));if(!Number.isNaN(u.getTime()))return u.toISOString()}return new Date().toISOString()}function Vw(e){return typeof e=="number"&&Number.isFinite(e)?new Date(e).toISOString():e}function nc(e){const t=Eg(e).valueOf();return Number.isFinite(t)?t:0}function Uw(e){return typeof e!="string"||e==="[The chat is empty]"||e==="[The message is empty]"?"":e.length>400?"..."+e.substring(e.length-400):e}function Ww(e){try{return JSON.parse(e)}catch{return null}}function Kw(e){qw(),jw(),_l(),Oa(),$("#bai_bai_toolkit_message_completion_sound_enabled").prop("checked",C.messageCompletionSoundEnabled).off("input.baiBaiToolkitMessageSound").on("input.baiBaiToolkitMessageSound",function(){C.messageCompletionSoundEnabled=!!$(this).prop("checked"),e?.(),Lb()}),$("#bai_bai_toolkit_message_completion_sound_keep_alive_enabled").prop("checked",C.messageCompletionSoundKeepAliveEnabled!==!1).off("input.baiBaiToolkitMessageSound").on("input.baiBaiToolkitMessageSound",function(){C.messageCompletionSoundKeepAliveEnabled=!!$(this).prop("checked"),e?.(),wu(),Ps()||$r()}),$("#bai_bai_toolkit_message_completion_sound_source").val(xu()).off("change.baiBaiToolkitMessageSound").on("change.baiBaiToolkitMessageSound",function(){const t=String($(this).val()||"builtin");C.messageCompletionSoundSource=du.has(t)?t:"builtin",Pr(),e?.(),bt(""),_l(),Oa()}),$("#bai_bai_toolkit_message_completion_sound_builtin_id").val(As().id).off("change.baiBaiToolkitMessageSound").on("change.baiBaiToolkitMessageSound",function(){C.messageCompletionSoundBuiltinId=String($(this).val()||vi[0].id),Pr(),e?.(),bt("")}),$("#bai_bai_toolkit_message_completion_sound_url").val(C.messageCompletionSoundUrl||"").off("input.baiBaiToolkitMessageSound").on("input.baiBaiToolkitMessageSound",function(){C.messageCompletionSoundUrl=String($(this).val()||"").trim(),Pr(),e?.(),bt("")}),$("#bai_bai_toolkit_message_completion_sound_volume").val(String(Qr(C.messageCompletionSoundVolume))).off("input.baiBaiToolkitMessageSound").on("input.baiBaiToolkitMessageSound",function(){C.messageCompletionSoundVolume=Qr($(this).val()),Pb();const t=Ne().audio;t instanceof HTMLAudioElement&&(t.volume=C.messageCompletionSoundVolume),e?.()}),$("#bai_bai_toolkit_message_completion_sound_preview").off("click.baiBaiToolkitMessageSound").on("click.baiBaiToolkitMessageSound",async function(){const t=$(this);if(!t.hasClass("disabled")){t.addClass("disabled"),bt("正在试听...");try{await Ob({preview:!0}),bt("已播放当前提示音。")}catch(n){console.debug(`${Ee} Failed to preview message completion sound`,n),bt(n?.message||"提示音播放失败。",!0)}finally{t.removeClass("disabled")}}}),$("#bai_bai_toolkit_message_completion_sound_local_file").off("change.baiBaiToolkitMessageSound").on("change.baiBaiToolkitMessageSound",async function(){const t=$(this),n=this.files?.[0];if(t.val(""),!!n)try{bt("正在保存到本机...");const r=await tC(n);C.messageCompletionSoundSource="local",C.messageCompletionSoundLocalFileName=r.name,Pr(),e?.(),_l(),await Oa(),bt("已保存到本机。")}catch(r){console.debug(`${Ee} Failed to save local message completion sound`,r),bt(r?.message||"本地音频保存失败。",!0)}}),$("#bai_bai_toolkit_message_completion_sound_local_clear").off("click.baiBaiToolkitMessageSound").on("click.baiBaiToolkitMessageSound",async function(){const t=$(this);if(!t.hasClass("disabled")){t.addClass("disabled");try{await nC(),C.messageCompletionSoundLocalFileName="",Pr(),e?.(),await Oa(),bt("已清除本机提示音。")}catch(n){console.debug(`${Ee} Failed to delete local message completion sound`,n),bt(n?.message||"本地音频清除失败。",!0)}finally{t.removeClass("disabled")}}})}function jw(){du.has(C.messageCompletionSoundSource)||(C.messageCompletionSoundSource="builtin"),C.messageCompletionSoundBuiltinId=As().id,C.messageCompletionSoundVolume=Qr(C.messageCompletionSoundVolume),C.messageCompletionSoundUrl=typeof C.messageCompletionSoundUrl=="string"?C.messageCompletionSoundUrl.trim():"",C.messageCompletionSoundLocalFileName=typeof C.messageCompletionSoundLocalFileName=="string"?C.messageCompletionSoundLocalFileName:"",C.messageCompletionSoundKeepAliveEnabled=C.messageCompletionSoundKeepAliveEnabled!==!1}function qw(){const e=$("#bai_bai_toolkit_message_completion_sound_builtin_id");if(!(!e.length||e.children().length))for(const t of vi)e.append($("<option></option>").val(t.id).text(t.label))}function _l(){const e=xu();$("#bai_bai_toolkit_message_completion_sound_enabled").prop("checked",!!C.messageCompletionSoundEnabled),$("#bai_bai_toolkit_message_completion_sound_keep_alive_enabled").prop("checked",C.messageCompletionSoundKeepAliveEnabled!==!1),$("#bai_bai_toolkit_message_completion_sound_source").val(e),$("#bai_bai_toolkit_message_completion_sound_builtin_id").val(As().id),$("#bai_bai_toolkit_message_completion_sound_url").val(C.messageCompletionSoundUrl||""),$("#bai_bai_toolkit_message_completion_sound_builtin_row").toggle(e==="builtin"),$("#bai_bai_toolkit_message_completion_sound_url_row").toggle(e==="url"),$("#bai_bai_toolkit_message_completion_sound_local_row").toggle(e==="local"),$("#bai_bai_toolkit_message_completion_sound_volume").val(String(Qr(C.messageCompletionSoundVolume))),Pb()}function Pb(){const e=Qr(C.messageCompletionSoundVolume);$("#bai_bai_toolkit_message_completion_sound_volume_value").text(`${Math.round(e*100)}%`)}function bt(e,t=!1){const n=$("#bai_bai_toolkit_message_completion_sound_status");n.length&&n.text(e||"").css("color",t?"var(--SmartThemeQuoteColor)":"")}function xu(){const e=String(C.messageCompletionSoundSource||"builtin");return du.has(e)?e:"builtin"}function As(){return vi.find(e=>e.id===C.messageCompletionSoundBuiltinId)||vi[0]}function Qr(e){const t=Number(e);return Number.isFinite(t)?Math.max(0,Math.min(1,t)):.8}function Ne(){(!_.messageCompletionSound||typeof _.messageCompletionSound!="object")&&(_.messageCompletionSound={});const e=_.messageCompletionSound;return Array.isArray(e.eventHandlers)||(e.eventHandlers=[]),e}function Lb(){C.messageCompletionSoundEnabled?(Yw(),wu()):Qw()}function Yw(){const e=Ne();if(e.installed||typeof M?.on!="function")return;const t=()=>{e.generationActive=!0,e.generationStopped=!1,Rb().catch(o=>{console.debug(`${Ee} Failed to start message completion sound keep-alive`,o)})},n=()=>{e.generationActive&&(e.generationStopped=!0),$r()},r=()=>{const o=e.generationActive&&!e.generationStopped;if(e.generationActive=!1,e.generationStopped=!1,!o){$r();return}Ob().catch(a=>{console.debug(`${Ee} Failed to play message completion sound`,a)}).finally(()=>{$r()})};yl(w.GENERATION_STARTED,t),yl(w.GENERATION_STOPPED,n),yl(w.GENERATION_ENDED,r),e.installed=!0,wu()}function yl(e,t){if(!e||typeof M?.on!="function")return;const n=Ne();M.on(e,t),n.eventHandlers.push({event:e,handler:t})}function Qw(){const e=Ne();for(const t of e.eventHandlers||[])M.removeListener?.(t.event,t.handler);e.eventHandlers=[],e.installed=!1,e.generationActive=!1,e.generationStopped=!1,Ib(),$r(),Pr()}function Ps(){return!!(C.messageCompletionSoundEnabled&&C.messageCompletionSoundKeepAliveEnabled!==!1&&de())}function wu(){if(Ps()){Xw();const e=Ne();e.generationActive&&!e.generationStopped&&Rb().catch(t=>{console.debug(`${Ee} Failed to start message completion sound keep-alive`,t)})}else Ib(),$r()}function Xw(){const e=Ne();if(e.keepAliveInteractionHandlersInstalled)return;const t=()=>{Jw().catch(o=>{console.debug(`${Ee} Failed to unlock message completion sound keep-alive`,o)})},n={capture:!0,passive:!0},r={capture:!0};e.keepAliveInteractionHandlers=[{target:document,event:"pointerdown",handler:t,options:n},{target:document,event:"touchstart",handler:t,options:n},{target:document,event:"click",handler:t,options:n},{target:document,event:"keydown",handler:t,options:r}];for(const o of e.keepAliveInteractionHandlers)o.target.addEventListener(o.event,o.handler,o.options);e.keepAliveInteractionHandlersInstalled=!0}function Ib(){const e=Ne();for(const t of e.keepAliveInteractionHandlers||[])t.target.removeEventListener(t.event,t.handler,t.options);e.keepAliveInteractionHandlers=[],e.keepAliveInteractionHandlersInstalled=!1,e.keepAliveUnlocking=!1}async function Jw(){const e=Ne();if(!Ps()||e.keepAliveUnlocked||e.keepAliveUnlocking||e.keepAlivePlaying)return!1;e.keepAliveUnlocking=!0;try{const t=Mb();return wi(t),await t.play(),t.pause(),wi(t),e.keepAliveUnlocked=!0,!0}finally{e.keepAliveUnlocking=!1}}async function Rb(){const e=Ne();if(!Ps())return!1;const t=Mb();if(e.keepAlivePlaying&&!t.paused)return!0;e.keepAliveRequested=!0;try{return wi(t),await t.play(),e.keepAlivePlaying=!0,e.keepAliveUnlocked=!0,!0}catch(n){throw e.keepAlivePlaying=!1,e.keepAliveLastErrorAt=Date.now(),bt("静音保活启动失败，浏览器可能限制了自动播放。",!0),n}}function $r(){const e=Ne(),t=e.keepAliveAudio;t instanceof HTMLAudioElement&&(t.pause(),wi(t)),e.keepAliveRequested=!1,e.keepAlivePlaying=!1}function wi(e){try{e.currentTime=0}catch{}}function Mb(){const e=Ne();if(!(e.keepAliveAudio instanceof HTMLAudioElement)){const t=new Audio(vT);t.loop=!0,t.muted=!1,t.volume=1,t.preload="auto",t.setAttribute("playsinline",""),e.keepAliveAudio=t}return e.keepAliveAudio}async function Ob({preview:e=!1}={}){if(!e&&!C.messageCompletionSoundEnabled)return!1;const t=Ne(),n=Date.now();if(!e&&n-Number(t.lastPlayedAt||0)<ST)return!1;const r=Zw(),o=await eC();return r.volume=Qr(C.messageCompletionSoundVolume),r.src!==o?(r.pause(),r.src=o,r.load()):r.pause(),r.currentTime=0,await r.play(),t.lastPlayedAt=n,!0}function Zw(){const e=Ne();return e.audio instanceof HTMLAudioElement||(e.audio=new Audio,e.audio.preload="none"),e.audio}async function eC(){const e=xu();if(Bb(),e==="builtin"){const r=As(),o="../video/";return new URL(o+r.file,import.meta.url).href}if(e==="url"){const r=String(C.messageCompletionSoundUrl||"").trim();if(!r)throw new Error("请先填写音频 URL。");return r}const t=await Db();if(!t?.blob)throw new Error("本机还没有上传提示音文件。");const n=Ne();return n.objectUrl=URL.createObjectURL(t.blob),n.objectUrl}function Pr(){const e=Ne();e.audio instanceof HTMLAudioElement&&(e.audio.pause(),e.audio.removeAttribute("src"),e.audio.load()),Bb()}function Bb(){const e=Ne();e.objectUrl&&(URL.revokeObjectURL(e.objectUrl),e.objectUrl=null)}async function Oa(){const e=$("#bai_bai_toolkit_message_completion_sound_local_name");if(e.length)try{const t=await Db();t?.name?e.text(t.name):C.messageCompletionSoundLocalFileName?e.text(`${C.messageCompletionSoundLocalFileName}（本机未上传）`):e.text("未上传")}catch{e.text("本机存储不可用")}}async function tC(e){if(!(e instanceof File))throw new Error("请选择一个音频文件。");if(!e.type.startsWith("audio/")&&!rC(e.name))throw new Error("请选择浏览器可播放的音频文件。");if(e.size>ET)throw new Error("本地提示音不能超过 5MB。");const t={key:pu,name:e.name,type:e.type||"audio/mpeg",size:e.size,updatedAt:Date.now(),blob:e},r=(await Cu()).transaction(wn,"readwrite"),o=$b(r),a=r.objectStore(wn);return await Promise.all([ku(a.put(t)),o]),t}async function Db(){const n=(await Cu()).transaction(wn,"readonly").objectStore(wn);return await ku(n.get(pu))}async function nC(){const t=(await Cu()).transaction(wn,"readwrite"),n=$b(t),r=t.objectStore(wn);await Promise.all([ku(r.delete(pu)),n])}function Cu(){const e=Ne();return e.dbPromise||(e.dbPromise=oC()),e.dbPromise}function rC(e){return/\.(mp3|wav|ogg|m4a|aac|flac|webm)$/i.test(String(e||""))}function oC(){return new Promise((e,t)=>{if(typeof indexedDB>"u"){t(new Error("当前浏览器不支持 IndexedDB。"));return}const n=indexedDB.open(_T,yT);n.onupgradeneeded=()=>{const r=n.result;r.objectStoreNames.contains(wn)||r.createObjectStore(wn,{keyPath:"key"})},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error||new Error("IndexedDB 打开失败。")),n.onblocked=()=>t(new Error("IndexedDB 正被其他页面占用。"))})}function ku(e){return new Promise((t,n)=>{e.onsuccess=()=>t(e.result),e.onerror=()=>n(e.error||new Error("IndexedDB 请求失败。"))})}function $b(e){return new Promise((t,n)=>{e.oncomplete=()=>t(),e.onerror=()=>n(e.error||new Error("IndexedDB 事务失败。")),e.onabort=()=>n(e.error||new Error("IndexedDB 事务已取消。"))})}function rc(){const e=document.getElementById("chat");e&&(e.removeEventListener("click",gm),(C.messageDoubleClickEditEnabled||C.messageTripleClickEditEnabled)&&e.addEventListener("click",gm))}function gm(e){if(!aC(e)||!(e.target instanceof Element)||e.target.closest(Si)||document.querySelector("#chat #curEditTextarea"))return;const t=e.target.closest(".mes_text");if(!(t instanceof HTMLElement))return;const n=t.closest(".mes[mesid]");if(!(n instanceof HTMLElement))return;const r=n.querySelector(".mes_button.mes_edit");if(!(r instanceof HTMLElement))return;const o=iC(e,n,t);r.click(),Number.isInteger(o)&&CC(n,o);const a=window.getSelection();a&&a.removeAllRanges()}function aC(e){return!!(C.messageDoubleClickEditEnabled&&e.detail===2||C.messageTripleClickEditEnabled&&e.detail===3)}function iC(e,t,n){const r=Number(t.getAttribute("mesid")),o=Number.isInteger(r)&&r>=0?Q.chat?.[r]?.mes:null;if(typeof o!="string"||o.length===0)return null;const a=sC(e);if(!a)return null;const i=lC(a.clientX,a.clientY);if(!i||!cC(i,n))return null;const s=n.textContent||"";if(!s)return null;const l=uC(n,i);if(!Number.isInteger(l))return null;const c=dC(i);return pC(o,s,l,c)??mC(o,s,l)}function sC(e){const t=e.changedTouches?.[0]||e.touches?.[0];return t&&Number.isFinite(t.clientX)&&Number.isFinite(t.clientY)?t:Number.isFinite(e.clientX)&&Number.isFinite(e.clientY)?e:null}function lC(e,t){if(typeof document.caretRangeFromPoint=="function")return document.caretRangeFromPoint(e,t);if(typeof document.caretPositionFromPoint=="function"){const n=document.caretPositionFromPoint(e,t);if(n){const r=document.createRange();return r.setStart(n.offsetNode,n.offset),r.setEnd(n.offsetNode,n.offset),r}}return null}function cC(e,t){const n=e.startContainer;return n===t||t.contains(n)}function uC(e,t){try{const n=document.createRange();return n.selectNodeContents(e),n.setEnd(t.startContainer,t.startOffset),n.toString().length}catch{return null}}function dC(e){return e.startContainer?.nodeType!==Node.TEXT_NODE?null:{text:e.startContainer.textContent||"",offset:Math.max(0,Math.min(e.startOffset,(e.startContainer.textContent||"").length))}}function pC(e,t,n,r=null){const o=fC(e),a=oc(o.text,o.offsets),i=oc(t),s=Gb(i,n);if(!a.text||!i.text)return null;if(a.text===i.text)return Au(a,e,s);const l=xC(a,e,i,s);if(Number.isInteger(l))return l;const c=wC(a,e,r,i,s);return Number.isInteger(c)?c:null}function mC(e,t,n){return t.length?Math.max(0,Math.min(e.length,Math.round(e.length*n/t.length))):null}function fC(e){const t=[],n=[];let r=0,o=!0;for(;r<e.length;){if(o){const l=bC(e,r);if(Number.isInteger(l)){r=l,o=!0;continue}const c=hC(e,r);if(c>r){r=c,o=!1;continue}}const a=e[r],i=e[r+1];if(a===`
`){Oo(t,n,a,r),r+=1,o=!0;continue}if(e.startsWith("<!--",r)){const l=e.indexOf("-->",r+4);r=l===-1?e.length:l+3,o=!1;continue}if(a==="<"){const l=e.indexOf(">",r+1),c=l!==-1?e.slice(r,l+1):"";if(l!==-1&&yC(c)){/^<\s*br\b/i.test(c)&&Oo(t,n,`
`,r),r=l+1,o=!1;continue}}const s=_C(e,r);if(s){Oo(t,n,s.text,r),r+=s.length,o=!1;continue}if(a==="!"&&i==="["){const l=EC(e,r+1);if(Number.isInteger(l)){r=l,o=!1;continue}}if(a==="["){const l=Hb(e,r);if(l){gC(t,n,e,l.textStart,l.textEnd),r=l.end,o=!1;continue}}Oo(t,n,a,r),r+=1,o=!1}return{text:t.join(""),offsets:n}}function gC(e,t,n,r,o){for(let a=r;a<o;a++)Oo(e,t,n[a],a)}function Oo(e,t,n,r){e.push(n),t.push(r)}function bC(e,t){const n=Nb(e,t),r=e.slice(t,n);return/^[ \t]{0,3}(```+|~~~+)/.test(r)?n<e.length?n+1:n:null}function hC(e,t){const n=Nb(e,t),r=e.slice(t,n);let o=0;const a=r.match(/^(?:[ \t]{0,3}>\s*)+/);a&&(o+=a[0].length);const i=r.slice(o),s=i.match(/^[ \t]{0,3}#{1,6}[ \t]+/);if(s)return t+o+s[0].length;const l=i.match(/^[ \t]{0,3}(?:[-+*]|\d{1,9}[.)])[ \t]+(?:\[[ xX]\][ \t]+)?/);return l?t+o+l[0].length:t+o}function Nb(e,t){const n=e.indexOf(`
`,t);return n===-1?e.length:n}function _C(e,t){const n={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:'"'},r=e.slice(t,t+16).match(/^&(#x[\da-f]+|#\d+|[a-z]+);/i);if(!r)return null;const o=r[1];let a=n[o.toLowerCase()];if(!a&&o[0]==="#"){const i=o[1]?.toLowerCase()==="x"?Number.parseInt(o.slice(2),16):Number.parseInt(o.slice(1),10);if(Number.isFinite(i))try{a=String.fromCodePoint(i)}catch{a=null}}return a?{text:a,length:r[0].length}:null}function yC(e){return/^<\/?[a-z][\w:-]*(?:\s[^>]*)?\/?>$/i.test(e)}function Hb(e,t){const n=vC(e,"]",t+1);if(n===-1||e[n+1]!=="(")return null;const r=SC(e,n+2);return r===-1?null:{textStart:t+1,textEnd:n,end:r+1}}function EC(e,t){const n=Hb(e,t);return n?n.end:null}function SC(e,t){let n=0;for(let r=t;r<e.length;r++){if(e[r]==="\\"){r+=1;continue}if(e[r]==="("){n+=1;continue}if(e[r]===")"){if(n===0)return r;n-=1}}return-1}function vC(e,t,n){for(let r=n;r<e.length;r++){if(e[r]==="\\"){r+=1;continue}if(e[r]===t)return r}return-1}function oc(e,t=null){const n=[],r=[],o=new Array(e.length+1);for(let a=0;a<e.length;a++)o[a]=n.length,TC(e[a])&&(n.push(e[a]),r.push(t?.[a]??a));return o[e.length]=n.length,{text:n.join(""),comparableToRaw:r,sourceToComparable:o}}function TC(e){return!/[\s`*_~]/.test(e)}function Gb(e,t){const n=Math.max(0,Math.min(t,e.sourceToComparable.length-1));return e.sourceToComparable[n]??0}function Au(e,t,n){return n<=0?0:n>=e.comparableToRaw.length?t.length:e.comparableToRaw[n]}function xC(e,t,n,r){for(const o of[80,48,28,16,10]){const a=Math.max(0,r-o),i=Math.min(n.text.length,r+o),s=n.text.slice(a,i);if(s.length<6)continue;const l=zb(e.text,s,Fb(e,n,r));if(l!==-1)return Au(e,t,l+(r-a))}return null}function wC(e,t,n,r,o){if(!n?.text)return null;const a=oc(n.text);if(a.text.length<3)return null;const i=Gb(a,n.offset),s=zb(e.text,a.text,Fb(e,r,o));return s===-1?null:Au(e,t,s+i)}function Fb(e,t,n){return t.text.length===0?0:Math.round(n/t.text.length*e.text.length)}function zb(e,t,n){let r=-1,o=Number.POSITIVE_INFINITY,a=e.indexOf(t);for(;a!==-1;){const i=Math.abs(a-n);i<o&&(r=a,o=i),a=e.indexOf(t,a+1)}return r}function CC(e,t){const n=Number(e.getAttribute("mesid"));let r=0;const o=()=>{r+=1;const a=document.querySelector("#curEditTextarea"),i=a?.closest?.(".mes[mesid]"),s=Number(i?.getAttribute("mesid"));if(a instanceof HTMLTextAreaElement&&Number.isInteger(s)&&s===n){const l=a.value;Ba(a,t,l),requestAnimationFrame(()=>Ba(a,t,l)),setTimeout(()=>Ba(a,t,l),60),setTimeout(()=>Ba(a,t,l),180);return}r<20&&setTimeout(o,25)};o()}function Ba(e,t,n){if(!e.isConnected||e.value!==n)return;const r=Math.max(0,Math.min(t,e.value.length));try{e.focus({preventScroll:!0})}catch{e.focus()}e.setSelectionRange(r,r),kC(e,r)}function kC(e,t){if(e instanceof HTMLTextAreaElement){Wx(e);return}if(e.scrollHeight<=e.clientHeight||e.value.length===0)return;const n=Math.round((e.scrollHeight-e.clientHeight)*t/e.value.length);e.scrollTop=Math.max(0,Math.min(n,e.scrollHeight-e.clientHeight))}const Xn="__baiBaiToolkitPresetPromptCodeMirrorEditor",ac="bai_bai_toolkit_preset_prompt_codemirror_editor_style",bm="bai_bai_toolkit_preset_backup_preview_ui_style",ic="bai_bai_toolkit_preset_interface_collapse_style",hm="bai_bai_toolkit_preset_scroll_style",sc="bai_bai_toolkit_preset_drag_style",Pu=[{key:"presetScrollOptimizationEnabled",selector:"#bai_bai_toolkit_preset_scroll_optimization_enabled"},{key:"presetDragOptimizationEnabled",selector:"#bai_bai_toolkit_preset_drag_optimization_enabled"},{key:"presetMobileWholeRowDragEnabled",selector:"#bai_bai_toolkit_preset_mobile_whole_row_drag_enabled"},{key:"presetToggleOptimizationEnabled",selector:"#bai_bai_toolkit_preset_toggle_optimization_enabled"}],El="__baiBaiToolkitPresetBackupPreviewApp",_m="__baiBaiToolkitPresetBackupPreviewUi",ar="__baiBaiToolkitPresetInterfaceCollapseObserver",Ci="__baiBaiToolkitPresetInterfaceCollapseExternalToggleHandler",ki="__baiBaiToolkitPresetDragHandler",Sl="__baiBaiToolkitPresetDragPatch",Nr="__baiBaiToolkitPresetAutoBackupFetch",ym="__baiBaiToolkitPresetSwitchBeforeHandler",Em="__baiBaiToolkitPresetSwitchHandler",Sm="__baiBaiToolkitPresetModelChangeHandler",vm="__baiBaiToolkitPresetChatLoadedHandler",Da="__baiBaiToolkitPresetContextTokenRefresh",Tm="__baiBaiToolkitPresetGroupPresetDeletedHandler",xm="__baiBaiToolkitPresetGroupPresetImportHandler",wm="__baiBaiToolkitPresetGroupPresetRenamedHandler",Cm="__baiBaiToolkitPresetAutoBackupRenameHandler",km="__baiBaiToolkitPresetSelectChangeHandler",Am="__baiBaiToolkitPresetDeleteHandler",Pm="__baiBaiToolkitPresetListActionHandler",Lm="__baiBaiToolkitPresetToggleHandler",Im="__baiBaiToolkitPresetSaveHandler",Rm="__baiBaiToolkitPresetUpdatePendingChangesHandler",Mm="__baiBaiToolkitPresetExportPendingChangesHandler",$a="__baiBaiToolkitPresetVueListManager",No="__baiBaiToolkitPresetVueListRenderPatch",Ot="__baiBaiToolkitPresetGroupGenerationGatePatch",vl="__baiBaiToolkitPresetVueTouchScrollGuard",lc="__baiBaiToolkitPresetVueDragPlacementListener",cc="__baiBaiToolkitPresetVueGroupHeaderCustomDragListener",Ai="__baiBaiToolkitPresetVueDynamicDragDelayHandler",Om="__baiBaiToolkitPresetPendingChangesLifecycleHandler",Ls="bai-bai-preset-vue-list-host",Rt="bai-bai-preset-vue-dragging",Rr="bai-bai-preset-vue-drag-ready-feedback",Ho="bai-bai-preset-drop-target",ga="bai-bai-preset-top-level-draggable",AC="bai-bai-preset-group-child-draggable",PC=`>li:is(.${ga},.completion_prompt_manager_prompt_draggable)`,Kt="--bai-bai-preset-list-gap",LC="__bai_bai_preset_header",IC="__bai_bai_preset_separator",Is="__bai_bai_preset_global_library",Rs="__bai_bai_preset_favorites",Xr="baibaiToolkit.presetPromptGroups",uc="baibaiToolkit.presetPromptFavorites",RC="bai-bai-toolkit",Vb="preset-global-prompts",Ub="library",Wb=2,MC="bai-bai-global-library",OC="entryGrouping",Tl=180,Bo=180,xl=180,wl="cubic-bezier(0.2, 0, 0, 1)",ba=40,BC=44,DC=120,$C=1e3,NC=60,HC=3e4,Bm=1001,dc=4,Lu=320,Pi=10,GC=6,pc=350,FC=300,Kb=2201,jb=2202;function Iu(){if(typeof Q.isGenerating=="function")try{return!!Q.isGenerating()}catch{return!1}return!!(Q.is_send_press||lv.is_group_generating)}const zC=12,VC=500,yt="bai_bai_toolkit_preset_interface_collapse_wrapper",Zo="bai-bai-preset-interface-collapse-content",qb="bai_bai_toolkit_preset_interface_collapse_placeholder",Li="data-bai-bai-preset-interface-collapse-block",UC=250,mc=20,WC="SillyTavern-Layout",Ms="te-preset-wrapper",Ii=[`#${yt}`,`#${Ms}`,"#range_block_openai","#openai_settings","#te_collapse_preset","#te-placeholder-preset-1","#te-placeholder-preset-2","#te-placeholder-preset-3",`[${Li}]`,`[id^="${qb}_"]`].join(", "),Yb="#settings_preset_openai",KC="#delete_oai_preset",jC="#update_oai_preset",qC="#export_oai_preset",ha="#openai_settings",Ru="#left-nav-panel",L="bai_bai_toolkit_preset_backup_preview",Qb="bai-bai-preset-backup-closing",S="#completion_prompt_manager_list",Xb="#completion_prompt_manager_popup_entry_form_save",YC="#completion_prompt_manager_popup_entry_form_reset",QC="#completion_prompt_manager_popup_entry_form_close, #completion_prompt_manager_popup_close_button",Jb="completion_prompt_manager_popup_entry_form_prompt",XC="#completion_prompt_manager_popup_entry_form_prompt",Zb='textarea.maximized_textarea[data-for="completion_prompt_manager_popup_entry_form_prompt"]',Lt="bai_bai_preset_prompt_codemirror_editor",JC="bai-bai-toolkit-preset-prompt-codemirror-editor",Mu="bai-bai-toolkit-preset-prompt-source-hidden",eh="bai-bai-toolkit-preset-prompt-readonly",ti="bai-bai-toolkit-preset-prompt-maximized",Os='.prompt_manager_prompt_controls, .bai-bai-preset-prompt-actions-hint, .bai-bai-preset-prompt-actions, .bai-bai-preset-prompt-action-button, [data-preset-prompt-action], .prompt-manager-detach-action, .prompt-manager-inspect-action, .prompt-manager-edit-action, .prompt-manager-toggle-action, .bai-bai-preset-group-actions, .bai-bai-preset-group-toggle, a, button, input, select, textarea, [contenteditable="true"]',ZC="/api/plugins/baibaoku/v1/tokenizers/bulk-count",Na="__baibaokuTokenizerBulkBridge",ek=5e3,tk=8,th=80,Go=800,nk=3,rk=45e3,Ha="__baiBaiToolkitPromptManagerTokenRefreshQueue",Ou=1e3,Bs=250,ln=1500,Dm="/api/presets/save",ok="/api/plugins/baibaoku/v1/preset-backups/save",ak="/api/plugins/baibaoku/v1/preset-backups/save/list",ik="/api/plugins/baibaoku/v1/preset-backups/save/rename",sk="/api/plugins/baibaoku/v1/preset-backups/save/note",lk="/api/plugins/baibaoku/v1/preset-backups/save/delete",ck="/api/plugins/baibaoku/v1/preset-backups/download",Pt=2e3,fc=80,uk=250,dk=8,nh=750,jt="bai-bai-toolkit-preset-drag-ready",ir="bai-bai-toolkit-preset-drag-active",Ds="bai-bai-toolkit-preset-drag-source",Re="bai-bai-toolkit-preset-drag-clone",Bu="bai-bai-toolkit-preset-drag-indicator",rh=new Set(["charDescription","charPersonality","scenario","personaDescription","worldInfoBefore","worldInfoAfter"]),oh=new Set(["charDescription","charPersonality","scenario","personaDescription","worldInfoBefore","worldInfoAfter","main","chatHistory","dialogueExamples"]),ah=new Set(["chatHistory","worldInfoBefore","worldInfoAfter","charDescription","charPersonality","scenario","personaDescription","dialogueExamples"]),ih="bai-bai-preset-effective-token-header",pk="预设总Token: 计算中",gc="已启用预设条目 Token 总数（不含聊天记录、世界书、角色信息等上下文注入）",Ao=5,bc=500,mk=6,fk=180;let hc=!0,N={},f={},D="[BaiBaiToolkit]",Ri=null,_c=12e3,kn=null;function gk(e={}){N=e.settings??N,delete N.presetPromptGroups,f=e.extensionState??f,D=e.logPrefix??D,Ri=e.loadCodeMirrorModules??Ri,_c=e.codeMirrorHistoryMaxLength??_c,kn=e.saveSettings??kn}function bk(){const e=at(),t=globalThis[Na]&&typeof globalThis[Na]=="object"?globalThis[Na]:{};t.installed=!0,t.version="0.1",t.prepareOpenAIMessages=FR,t.prepareWorldInfoBudgetCounts=zR,t.clear=()=>e.cache.clear(),t.getStats=()=>({...e.stats,cacheSize:e.cache.size}),t.isEnabled=wa,globalThis[Na]=t,OR()}function hk({saveSettings:e}={}){kn=e??kn;const t=()=>{typeof e=="function"&&e()},n=({key:r,selector:o})=>{$(o).prop("checked",N[r]===!0).on("input",function(){const a=!!$(this).prop("checked"),i=_k(a);yk(a),i&&(t(),Ek())})};Pu.forEach(n),$("#bai_bai_toolkit_preset_interface_collapse_enabled").prop("checked",N.presetInterfaceCollapseEnabled===!0).on("input",function(){N.presetInterfaceCollapseEnabled=!!$(this).prop("checked"),t(),ph()}),$("#bai_bai_toolkit_preset_switch_optimization_enabled").prop("checked",N.presetSwitchOptimizationEnabled===!0).on("input",function(){N.presetSwitchOptimizationEnabled=!!$(this).prop("checked"),t(),Cd()}),$("#bai_bai_toolkit_preset_grouping_enabled").prop("checked",N.presetGroupingEnabled!==!1).on("input",function(){N.presetGroupingEnabled=!!$(this).prop("checked"),t(),mh()}),$("#bai_bai_toolkit_preset_grouping_edit_button_in_menu_enabled").prop("checked",N.presetGroupingEditButtonInMenuEnabled===!0).on("input",function(){N.presetGroupingEditButtonInMenuEnabled=!!$(this).prop("checked"),t(),jA()}),$("#bai_bai_toolkit_preset_prompt_codemirror_editor_enabled").prop("checked",N.presetPromptCodeMirrorEditorEnabled).on("input",function(){N.presetPromptCodeMirrorEditorEnabled=!!$(this).prop("checked"),t(),sy()}),$("#bai_bai_toolkit_preset_auto_save_after_prompt_edit_enabled").prop("checked",N.presetAutoSaveAfterPromptEditEnabled).on("input",function(){N.presetAutoSaveAfterPromptEditEnabled=!!$(this).prop("checked"),t()})}function _k(e){let t=!1;for(const{key:n}of Pu)N[n]!==e&&(N[n]=e,t=!0);return t}function yk(e){for(const{selector:t}of Pu)$(t).prop("checked",e)}function Ek(){Ln(),Qt({cancelled:!0}),Ah(),dh(),Hu(),Cd(),ey(),ty()}function Sk(){return typeof Ri!="function"?Promise.reject(new Error("CodeMirror module loader is not configured")):Ri()}function vk(){return Number(_c)||12e3}function sh(e){let t=null;try{t=typeof InputEvent=="function"?new InputEvent("input",{bubbles:!0,inputType:"insertReplacementText",data:""}):null}catch{t=null}t||=new Event("input",{bubbles:!0}),e.dispatchEvent(t)}function lh(){_a(),Tk()}function Tk(){if(f[Cm]||!w.PRESET_RENAMED_BEFORE)return;const e=t=>{t?.apiId!=="openai"||!t.oldName||!t.newName||Ak()};f[Cm]=e,M.on(w.PRESET_RENAMED_BEFORE,e)}function xk(e){hc=e!==!1,_a()}function _a(){const e=globalThis[Nr];if(e?.wrappedFetch)return e.isEnabled=()=>N.presetAutoBackupEnabled!==!1&&hc,e.skipCount=Number(e.skipCount)||0,e;const t=globalThis.fetch;if(typeof t!="function")return null;const n={originalFetch:t.bind(globalThis),wrappedFetch:null,skipCount:0,isEnabled:()=>N.presetAutoBackupEnabled!==!1&&hc};return n.wrappedFetch=function(o,a){const i=Ck(o,a),s=i?Lk(a):null;n.isEnabled()&&i&&(n.renameSuppress?Pk(n,s):n.skipCount>0?n.skipCount-=1:kk(n,o,a,s));const l=n.originalFetch(o,a);return Ik(s)&&Rk(n,s,l),l},n.wrappedFetch[Nr]=!0,globalThis[Nr]=n,globalThis.fetch=n.wrappedFetch,n}function wk(){const e=_a();return e&&(e.skipCount+=1),e}function Ck(e,t){if(zk(e,t)!=="POST")return!1;const n=Fk(e);if(!n||!n.includes(Dm))return!1;try{return new URL(n,location.href).pathname===Dm}catch{return!1}}async function kk(e,t,n,r=null){const o=r??await Hk(t,n);$s(o)&&await ch(e,o)}async function ch(e,t){try{await e.originalFetch(ok,{method:"POST",headers:me(),body:JSON.stringify(t)})}catch(n){console.debug(`${D} Failed to create preset auto backup`,n)}}function Ak(){const e=_a();e&&(e.renameSuppress={lastBody:null})}function Pk(e,t){e.renameSuppress&&$s(t)&&(e.renameSuppress.lastBody=t)}function Lk(e){try{const t=e&&typeof e.body=="string"?e.body:null;return t?JSON.parse(t):null}catch{return null}}function Ik(e){return!!($s(e)&&e.apiId==="openai")}function Rk(e,t,n){e.activeOpenAiPresetSaveRequests instanceof Map||(e.activeOpenAiPresetSaveRequests=new Map);const r=t.name,o=e.activeOpenAiPresetSaveRequests.get(r)??new Set,a=Promise.resolve(n).then(l=>new Promise(c=>setTimeout(c,0,l)),l=>new Promise((c,u)=>setTimeout(u,0,l)));o.add(a),e.activeOpenAiPresetSaveRequests.set(r,o);const i=fn();i&&(r===i.oldName||r===i.newName)&&(i.latestSaveRequest={presetName:r,revision:Ta(r),promise:a});const s=()=>{o.delete(a),o.size||e.activeOpenAiPresetSaveRequests.delete(r)};a.then(s,s)}function $m(e){const n=globalThis[Nr]?.activeOpenAiPresetSaveRequests?.get(e);return n instanceof Set?Array.from(n):[]}function Mk(){const e=globalThis[Nr];if(!e?.renameSuppress)return;const t=e.renameSuppress.lastBody;e.renameSuppress=null,e.isEnabled()&&$s(t)&&ch(e,t)}function Ok(){return!!globalThis[Nr]?.renameSuppress}function fn(){const e=f.openAiPresetRenameSaveGate;return e&&typeof e=="object"?e:null}function Nm(){return!!fn()}function Bk(e,t){const n=fn();n&&yc(n,Hm(n)),_a();let r;const o={oldName:e,newName:t,renamed:!1,latestSaveRequest:null,finalSavedRevision:null,deferredSaveTail:Promise.resolve(),completionPromise:new Promise(i=>{r=i}),resolveCompletion:null,timeout:0};o.resolveCompletion=r,o.timeout=setTimeout(()=>{fn()===o&&(console.debug(`${D} Preset rename save gate timed out`,{oldName:o.oldName,newName:o.newName,renamed:o.renamed}),yc(o,Hm(o)))},HC),f.openAiPresetRenameSaveGate=o;const a=[...$m(e),...$m(t)];return Promise.allSettled(Array.from(new Set(a)))}function Dk(e,t){const n=fn();return!n||n.oldName!==e||n.newName!==t?!1:(n.renamed=!0,!0)}function Hm(e){return e?.renamed||z?.preset_settings_openai===e?.newName?e?.newName:e?.oldName}function yc(e,t){return!e||fn()!==e?!1:(clearTimeout(e.timeout),delete f.openAiPresetRenameSaveGate,e.resolveCompletion(t),!0)}async function $k(){const e=fn();if(!e||!e.renamed)return;const t=e.latestSaveRequest;let n=!1;if(t?.promise)try{n=(await t.promise)?.ok!==!1}catch(r){console.debug(`${D} Failed to finish the final renamed preset save`,r)}n&&Number.isFinite(t.revision)&&(e.finalSavedRevision=t.revision,f_(t.presetName,t.revision)),yc(e,e.newName)}function Nk(e){const t=fn();return!t||e!==t.oldName&&e!==t.newName?e:t.renamed?t.newName:t.oldName}function $s(e){return!!(e&&typeof e=="object"&&!Array.isArray(e)&&typeof e.name=="string"&&e.name.trim()&&e.preset&&typeof e.preset=="object")}async function Hk(e,t){if(Object.prototype.hasOwnProperty.call(t||{},"body"))return Gk(t.body);if(!Du(e)||e.bodyUsed||!e.body)return null;try{return await e.clone().json().catch(()=>null)}catch{return null}}async function Gk(e){return typeof e=="string"?Gm(e):typeof Blob=="function"&&e instanceof Blob?Gm(await e.text()):null}function Gm(e){try{return JSON.parse(e)}catch{return null}}function Fk(e){return typeof e=="string"?e:e instanceof URL?e.href:Du(e)?e.url:""}function zk(e,t){return String(t?.method||(Du(e)?e.method:"")||"GET").toUpperCase()}function Du(e){return typeof Request=="function"&&e instanceof Request}function Vk(){cA(),uh(),Uk()}function uh(){const e=document.querySelector(ha);if(!(e instanceof HTMLElement)||!e.parentElement)return!1;let t=document.getElementById(L);return t instanceof HTMLElement||(t=document.createElement("div"),t.id=L,t.className="bai-bai-preset-backup-preview"),Wk(t),(t.nextElementSibling!==e||t.parentElement!==e.parentElement)&&e.parentElement.insertBefore(t,e),!0}function Uk(){if(f[_m]||typeof MutationObserver!="function"||!document.body)return;const e={observer:null,pending:!1},t=()=>{e.pending=!1,uh()},n=()=>{e.pending||(e.pending=!0,typeof requestAnimationFrame=="function"?requestAnimationFrame(t):setTimeout(t,0))},r=new MutationObserver(n);e.observer=r,r.observe(document.body,{childList:!0,subtree:!0}),f[_m]=e}async function Wk(e){if(!(e instanceof HTMLElement)||f[El]?.host===e)return;const t=f[El];if(t?.app)try{t.app.unmount()}catch(n){console.debug(`${D} Failed to unmount preset backup preview app`,n)}try{const n=await Sh();if(!document.documentElement.contains(e))return;const r=Kk(),o=n.createApp(jk(n,r));o.mount(e),f[El]={host:e,app:o,state:r}}catch(n){console.debug(`${D} Failed to mount preset backup preview Vue app`,n)}}function Kk(){return{items:[],query:"",page:1,hasLoaded:!1,loading:!1,status:"",composing:!1,renameDialogOpen:!1,renameTarget:null,renameValue:"",renameComposing:!1,renaming:!1,noteDialogOpen:!1,noteTarget:null,noteValue:"",noteComposing:!1,savingNote:!1,deleteDialogOpen:!1,deleteTarget:null,deleting:!1,selectionMode:!1,selectedFileNames:[],batchDeleting:!1,importingFileName:"",closing:!1,animating:!1}}function jk(e,t){const n=e.h;return{name:"PresetBackupPreview",data(){return t},computed:{normalizedQuery(){return this.query.trim().toLowerCase()},filteredItems(){return this.normalizedQuery?this.items.filter(r=>r.searchText.includes(this.normalizedQuery)):this.items},pageCount(){return Math.max(1,Math.ceil(this.filteredItems.length/Ao))},safePage(){return Math.min(Math.max(1,this.page),this.pageCount)},pagedItems(){const o=(this.safePage-1)*Ao;return this.filteredItems.slice(o,o+Ao)},selectedCount(){return this.selectedFileNames.length},pageAllSelected(){const r=this.pagedItems;return r.length>0&&r.every(o=>this.selectedFileNames.includes(o.fileName))},displayStatus(){if(this.status)return this.status;const r=this.items.length,o=this.filteredItems.length;if(r<=0)return"";const a=o>0?(this.safePage-1)*Ao+1:0,i=o>0?Math.min(this.safePage*Ao,o):0;return this.normalizedQuery?`显示 ${a}-${i} / ${o} 个匹配备份，共 ${r} 个备份`:`显示 ${a}-${i} / ${r} 个备份`}},watch:{page(){this.clampPage()},filteredItems(){this.clampPage()}},methods:{clampPage(){const r=Math.min(Math.max(1,this.page),this.pageCount);r!==this.page&&(this.page=r)},setQuery(r){this.query=String(r??""),this.page=1},onSearchInput(r){r?.isComposing||this.composing||this.setQuery(r?.target?.value??"")},onSearchCompositionStart(){this.composing=!0},onSearchCompositionEnd(r){this.composing=!1,this.setQuery(r?.target?.value??"")},async refresh(){if(!this.loading){this.loading=!0,this.status="正在刷新备份列表...";try{this.items=await eA(),this.page=1,this.hasLoaded=!0,this.status=""}catch(r){console.warn(`${D} Failed to refresh preset backups`,r),this.status=`刷新失败：${r?.message||"未知错误"}`,this.hasLoaded=!0}finally{this.loading=!1}}},prevPage(){this.page=Math.max(1,this.safePage-1)},nextPage(){this.page=Math.min(this.pageCount,this.safePage+1)},openRenameDialog(r){!r||this.renaming||this.deleting||this.importingFileName||(this.deleteDialogOpen=!1,this.deleteTarget=null,this.renameTarget=r,this.renameValue=r.name||"",this.renameComposing=!1,this.renameDialogOpen=!0,this.status="",e.nextTick(()=>{const o=this.$refs.renameInput;o instanceof HTMLInputElement&&(o.focus(),o.select())}))},closeRenameDialog(r=!1){this.renaming&&!r||(this.renameDialogOpen=!1,this.renameTarget=null,this.renameValue="",this.renameComposing=!1)},openDeleteDialog(r){!r||this.deleting||this.renaming||this.importingFileName||(this.renameDialogOpen=!1,this.renameTarget=null,this.deleteTarget=r,this.deleteDialogOpen=!0,this.status="")},closeDeleteDialog(r=!1){(this.deleting||this.batchDeleting)&&!r||(this.deleteDialogOpen=!1,this.deleteTarget=null)},openNoteDialog(r){!r||this.savingNote||this.renaming||this.deleting||this.batchDeleting||this.importingFileName||(this.renameDialogOpen=!1,this.renameTarget=null,this.deleteDialogOpen=!1,this.deleteTarget=null,this.noteTarget=r,this.noteValue=r.note||"",this.noteComposing=!1,this.noteDialogOpen=!0,this.status="",e.nextTick(()=>{const o=this.$refs.noteInput;if(o instanceof HTMLTextAreaElement){o.focus();const a=o.value.length;o.setSelectionRange(a,a)}}))},closeNoteDialog(r=!1){this.savingNote&&!r||(this.noteDialogOpen=!1,this.noteTarget=null,this.noteValue="",this.noteComposing=!1)},onNoteInput(r){this.noteValue=String(r?.target?.value??"").slice(0,bc)},onNoteCompositionStart(){this.noteComposing=!0},onNoteCompositionEnd(r){this.noteComposing=!1,this.onNoteInput(r)},async confirmNote(){const r=this.noteTarget;if(!r||this.savingNote)return;const o=this.noteValue.trim();this.savingNote=!0,this.status=o?"正在保存备注...":"正在清除备注...";try{const a=Ec(await nA(r.fileName,o));this.items=this.items.map(i=>i.fileName===r.fileName?a||{...i,note:o,searchText:`${i.name} ${o} ${i.createdAt}`.toLowerCase()}:i),this.status=o?"已保存备注":"已清除备注",this.closeNoteDialog(!0)}catch(a){console.warn(`${D} Failed to update preset backup note`,a),this.status=`备注保存失败：${a?.message||"未知错误"}`}finally{this.savingNote=!1}},onRenameInput(r){this.renameValue=String(r?.target?.value??"")},onRenameCompositionStart(){this.renameComposing=!0},onRenameCompositionEnd(r){this.renameComposing=!1,this.onRenameInput(r)},onRenameKeydown(r){r?.key!=="Enter"||r.isComposing||this.renameComposing||(r.preventDefault(),this.confirmRename())},async confirmRename(){const r=this.renameTarget,o=this.renameValue.trim();if(!(!r||this.renaming)){if(!o){this.status="备份名称不能为空";return}this.renaming=!0,this.status="正在重命名备份...";try{const a=Ec(await tA(r.fileName,o));this.items=this.items.map(i=>i.fileName===r.fileName?a||{...i,name:Fo(o),searchText:`${Fo(o)} ${i.note||""} ${i.createdAt}`.toLowerCase()}:i),this.status=`已重命名：${Fo(o)}`,this.closeRenameDialog(!0)}catch(a){console.warn(`${D} Failed to rename preset backup`,a),this.status=`重命名失败：${a?.message||"未知错误"}`}finally{this.renaming=!1}}},async confirmDelete(){const r=this.deleteTarget;if(!(!r||this.deleting)){this.deleting=!0,this.status="正在删除备份...";try{await Fm(r.fileName),this.items=this.items.filter(o=>o.fileName!==r.fileName),this.status=`已删除：${r.name||r.fileName}`,this.closeDeleteDialog(!0)}catch(o){console.warn(`${D} Failed to delete preset backup`,o),this.status=`删除失败：${o?.message||"未知错误"}`}finally{this.deleting=!1}}},toggleSelectionMode(){this.deleting||this.batchDeleting||this.renaming||this.savingNote||this.importingFileName||(this.selectionMode=!this.selectionMode,this.selectedFileNames=[],this.status="",this.selectionMode&&(this.renameDialogOpen=!1,this.noteDialogOpen=!1,this.deleteDialogOpen=!1))},exitSelectionMode(){this.batchDeleting||(this.selectionMode=!1,this.selectedFileNames=[])},toggleSelect(r){!r||this.batchDeleting||(this.selectedFileNames=this.selectedFileNames.includes(r.fileName)?this.selectedFileNames.filter(o=>o!==r.fileName):[...this.selectedFileNames,r.fileName])},toggleSelectPage(){if(this.batchDeleting)return;const r=this.pagedItems.map(o=>o.fileName);if(this.pageAllSelected)this.selectedFileNames=this.selectedFileNames.filter(o=>!r.includes(o));else{const o=new Set(this.selectedFileNames);r.forEach(a=>o.add(a)),this.selectedFileNames=Array.from(o)}},openBatchDeleteDialog(){this.batchDeleting||this.selectedFileNames.length<=0||(this.deleteTarget=null,this.deleteDialogOpen=!0,this.status="")},async confirmBatchDelete(){if(this.batchDeleting||this.selectedFileNames.length<=0)return;const r=this.items.filter(p=>this.selectedFileNames.includes(p.fileName)),o=r.length;this.batchDeleting=!0,this.status=`正在删除：0 / ${o}`;let a=0,i=0;const s=[],l=r.slice(),c=async()=>{for(;l.length>0;){const p=l.shift();if(p){try{await Fm(p.fileName),this.items=this.items.filter(b=>b.fileName!==p.fileName),this.selectedFileNames=this.selectedFileNames.filter(b=>b!==p.fileName),a+=1}catch(b){console.warn(`${D} Failed to delete preset backup in batch`,b),i+=1,s.push(p.fileName)}this.status=`正在删除：${a+i} / ${o}`}}},u=Math.min(mk,o);await Promise.all(Array.from({length:u},()=>c())),this.batchDeleting=!1,this.deleteDialogOpen=!1,this.deleteTarget=null,this.selectedFileNames=s,this.status=i>0?`已删除 ${a} 个，${i} 个失败`:`已删除 ${a} 个备份`,this.selectedFileNames.length<=0&&(this.selectionMode=!1)},async importBackup(r){if(!(!r||this.importingFileName)){this.importingFileName=r.fileName,this.status=`正在导入：${r.name||r.fileName}`;try{const o=await rA(r.fileName),{apiId:a,name:i,preset:s}=oA(o,r),l=gr(a);if(!l||typeof l.savePreset!="function")throw new Error(`Preset manager not found: ${a}`);const c=iA(l,i),u=wk(),p=u?.skipCount??0;try{await l.savePreset(c,s)}finally{u&&u.skipCount>=p&&(u.skipCount=Math.max(0,p-1))}this.status=`已导入并切换：${c}`}catch(o){console.warn(`${D} Failed to import preset backup`,o),this.status=`导入失败：${o?.message||"未知错误"}`}finally{this.importingFileName=""}}},setActionStatus(r,o){const a=o?.name||"这个备份",i={delete:"删除接口待接入：",download:"下载接口待接入："};this.status=`${i[r]||""}${a}`},toggleDetails(r){r?.preventDefault(),lA(this.$refs.details,this)}},render(){return n("details",{ref:"details",class:{"bai-bai-preset-backup-details":!0,[Qb]:this.closing}},[n("summary",{class:"bai-bai-preset-backup-summary",onClick:this.toggleDetails},[n("span",{class:"bai-bai-preset-backup-title"},[n("i",{class:"fa-solid fa-clock-rotate-left"}),n("span","自动备份预设")]),n("span",{class:"bai-bai-preset-backup-summary-meta"},[n("small","备份列表"),n("i",{class:"fa-solid fa-chevron-right bai-bai-preset-backup-chevron"})])]),n("div",{class:"bai-bai-preset-backup-body"},[n("div",{class:"bai-bai-preset-backup-toolbar"},[n("label",{class:"bai-bai-preset-backup-search"},[n("i",{class:"fa-solid fa-magnifying-glass"}),n("input",{class:"text_pole",type:"search",autocomplete:"off",style:"padding-left: 36px !important; background: transparent !important;",placeholder:"搜索备份预设",value:this.query,onInput:this.onSearchInput,onCompositionstart:this.onSearchCompositionStart,onCompositionend:this.onSearchCompositionEnd})]),n("button",{class:{menu_button:!0,menu_button_icon:!0,"bai-bai-preset-backup-batch-toggle":!0,"bai-bai-preset-backup-batch-active":this.selectionMode},type:"button",title:this.selectionMode?"退出批量管理":"批量管理",disabled:this.loading||this.batchDeleting,onClick:this.toggleSelectionMode},[n("i",{class:"fa-solid fa-list-check"})]),n("button",{class:{menu_button:!0,menu_button_icon:!0,"bai-bai-preset-backup-refresh":!0,"bai-bai-preset-backup-refreshing":this.loading},type:"button",title:"刷新备份列表",disabled:this.loading,onClick:this.refresh},[n("i",{class:"fa-solid fa-rotate-right"})])]),this.selectionMode?Yk(n,this):null,n("div",{class:"bai-bai-preset-backup-list",role:"list"},this.pagedItems.length?this.pagedItems.map(r=>qk(n,this,r)):[n("div",{class:"bai-bai-preset-backup-empty"},this.hasLoaded?"暂无备份数据":[n("span","刷新获取备份数据"),n("span","保存预设时自动创建备份")])]),n("div",{class:"bai-bai-preset-backup-footer"},[n("div",{class:"bai-bai-preset-backup-status"},this.displayStatus),n("div",{class:"bai-bai-preset-backup-pagination","aria-label":"备份分页"},[n("button",{class:"menu_button menu_button_icon",type:"button",title:"上一页",disabled:this.safePage<=1||this.filteredItems.length<=0,onClick:this.prevPage},[n("i",{class:"fa-solid fa-chevron-left"})]),n("span",{class:"bai-bai-preset-backup-page-label"},`${this.safePage} / ${this.pageCount}`),n("button",{class:"menu_button menu_button_icon",type:"button",title:"下一页",disabled:this.safePage>=this.pageCount||this.filteredItems.length<=0,onClick:this.nextPage},[n("i",{class:"fa-solid fa-chevron-right"})])])]),this.renameDialogOpen?Zk(n,this):null,this.noteDialogOpen?Xk(n,this):null,this.deleteDialogOpen?Jk(n,this):null])])}}}function qk(e,t,n){const r=t.selectionMode,o=r&&t.selectedFileNames.includes(n.fileName);return e("div",{key:n.id,class:{"bai-bai-preset-backup-item":!0,"bai-bai-preset-backup-item-selectable":r,"bai-bai-preset-backup-item-selected":o},role:"listitem",onClick:r?()=>t.toggleSelect(n):void 0},[r?e("span",{class:{"bai-bai-preset-backup-item-check":!0,"bai-bai-preset-backup-item-check-on":o}},[e("i",{class:o?"fa-solid fa-square-check":"fa-regular fa-square"})]):null,e("div",{class:"bai-bai-preset-backup-item-main"},[e("div",{class:"bai-bai-preset-backup-item-row bai-bai-preset-backup-item-row-top"},[e("strong",{class:"bai-bai-preset-backup-item-name",title:n.name},n.name),r?null:e("div",{class:"bai-bai-preset-backup-item-actions"},[Cl(e,{className:"bai-bai-preset-backup-delete",icon:"fa-solid fa-trash",title:"删除备份",onClick:()=>t.openDeleteDialog(n)}),Cl(e,{icon:"fa-solid fa-pen-to-square",title:"重命名备份",onClick:()=>t.openRenameDialog(n)}),Cl(e,{className:t.importingFileName===n.fileName?"bai-bai-preset-backup-importing":"",icon:t.importingFileName===n.fileName?"fa-solid fa-spinner":"fa-solid fa-download",title:"导入备份并切换",disabled:!!t.importingFileName,onClick:()=>t.importBackup(n)})])]),e("div",{class:"bai-bai-preset-backup-item-row bai-bai-preset-backup-item-meta"},[e("small",{class:"bai-bai-preset-backup-item-time"},[e("i",{class:"fa-regular fa-clock"}),e("span",n.createdAt)]),Qk(e,t,n)])])])}function Yk(e,t){return e("div",{class:"bai-bai-preset-backup-selection-bar"},[e("button",{class:"bai-bai-preset-backup-select-all",type:"button",disabled:t.batchDeleting||t.pagedItems.length<=0,onClick:()=>t.toggleSelectPage()},[e("i",{class:t.pageAllSelected?"fa-solid fa-square-check":"fa-regular fa-square"}),e("span",t.pageAllSelected?"取消本页":"全选本页")]),e("span",{class:"bai-bai-preset-backup-selection-count"},`已选 ${t.selectedCount} 项`),e("div",{class:"bai-bai-preset-backup-selection-actions"},[e("button",{class:"menu_button bai-bai-preset-backup-dialog-button",type:"button",disabled:t.batchDeleting,onClick:()=>t.exitSelectionMode()},"退出"),e("button",{class:"menu_button bai-bai-preset-backup-dialog-button bai-bai-preset-backup-dialog-danger",type:"button",disabled:t.batchDeleting||t.selectedCount<=0,onClick:()=>t.openBatchDeleteDialog()},[e("i",{class:"fa-solid fa-trash"}),e("span",t.batchDeleting?"删除中...":`删除所选 (${t.selectedCount})`)])])])}function Qk(e,t,n){const r=!!n.note,o=a=>{t.selectionMode||(a.preventDefault(),a.stopPropagation(),t.openNoteDialog(n))};return r?e("button",{type:"button",class:"bai-bai-preset-backup-item-note",title:`${n.note}
（点击编辑备注）`,onClick:o},[e("i",{class:"fa-regular fa-pen-to-square"}),e("span",{class:"bai-bai-preset-backup-item-note-text"},n.note)]):e("button",{type:"button",class:"bai-bai-preset-backup-item-note bai-bai-preset-backup-item-note-empty",title:"添加备注",onClick:o},[e("i",{class:"fa-solid fa-plus"}),e("span","备注")])}function Xk(e,t){const n=t.noteTarget?.name||"这个备份",r=t.noteValue.length;return e("div",{class:"bai-bai-preset-backup-dialog-layer",onClick:o=>{o.target===o.currentTarget&&t.closeNoteDialog()}},[e("div",{class:"bai-bai-preset-backup-dialog",role:"dialog","aria-modal":"true","aria-label":"编辑备注",onClick:o=>o.stopPropagation()},[e("div",{class:"bai-bai-preset-backup-dialog-head"},[e("strong","编辑备注"),e("button",{class:"menu_button menu_button_icon",type:"button",title:"关闭",disabled:t.savingNote,onClick:()=>t.closeNoteDialog()},[e("i",{class:"fa-solid fa-xmark"})])]),e("div",{class:"bai-bai-preset-backup-dialog-message"},[e("span","为"),e("strong",{title:n},n),e("span","记录这次改动")]),e("textarea",{ref:"noteInput",class:"text_pole bai-bai-preset-backup-dialog-input bai-bai-preset-backup-note-textarea",rows:4,maxlength:bc,placeholder:"例如：改了正则和开场白，删了两条无用条目…",autocomplete:"off",value:t.noteValue,disabled:t.savingNote,onInput:t.onNoteInput,onCompositionstart:t.onNoteCompositionStart,onCompositionend:t.onNoteCompositionEnd}),e("div",{class:"bai-bai-preset-backup-note-counter"},`${r} / ${bc}`),e("div",{class:"bai-bai-preset-backup-dialog-actions"},[e("button",{class:"menu_button bai-bai-preset-backup-dialog-button",type:"button",disabled:t.savingNote,onClick:()=>t.closeNoteDialog()},"取消"),e("button",{class:"menu_button bai-bai-preset-backup-dialog-button",type:"button",disabled:t.savingNote,onClick:()=>t.confirmNote()},t.savingNote?"保存中...":"保存")])])])}function Jk(e,t){const n=!t.deleteTarget&&t.selectionMode,r=t.deleteTarget?.name||"这个备份",o=n?t.batchDeleting:t.deleting;return e("div",{class:"bai-bai-preset-backup-dialog-layer",onClick:a=>{a.target===a.currentTarget&&t.closeDeleteDialog()}},[e("div",{class:"bai-bai-preset-backup-dialog",role:"dialog","aria-modal":"true","aria-label":"删除备份",onClick:a=>a.stopPropagation()},[e("div",{class:"bai-bai-preset-backup-dialog-head"},[e("strong",n?"批量删除备份":"删除备份"),e("button",{class:"menu_button menu_button_icon",type:"button",title:"关闭",disabled:o,onClick:()=>t.closeDeleteDialog()},[e("i",{class:"fa-solid fa-xmark"})])]),n?e("div",{class:"bai-bai-preset-backup-dialog-message"},[e("span",`确定要删除选中的 ${t.selectedCount} 个备份吗？此操作不可恢复。`)]):e("div",{class:"bai-bai-preset-backup-dialog-message"},[e("span","确定要删除这个备份吗？"),e("strong",{title:r},r)]),e("div",{class:"bai-bai-preset-backup-dialog-actions"},[e("button",{class:"menu_button bai-bai-preset-backup-dialog-button",type:"button",disabled:o,onClick:()=>t.closeDeleteDialog()},"取消"),e("button",{class:"menu_button bai-bai-preset-backup-dialog-button bai-bai-preset-backup-dialog-danger",type:"button",disabled:o,onClick:()=>n?t.confirmBatchDelete():t.confirmDelete()},o?"删除中...":"删除")])])])}function Zk(e,t){return e("div",{class:"bai-bai-preset-backup-dialog-layer",onClick:n=>{n.target===n.currentTarget&&t.closeRenameDialog()}},[e("div",{class:"bai-bai-preset-backup-dialog",role:"dialog","aria-modal":"true","aria-label":"重命名备份",onClick:n=>n.stopPropagation()},[e("div",{class:"bai-bai-preset-backup-dialog-head"},[e("strong","重命名备份"),e("button",{class:"menu_button menu_button_icon",type:"button",title:"关闭",disabled:t.renaming,onClick:()=>t.closeRenameDialog()},[e("i",{class:"fa-solid fa-xmark"})])]),e("input",{ref:"renameInput",class:"text_pole bai-bai-preset-backup-dialog-input",type:"text",autocomplete:"off",value:t.renameValue,disabled:t.renaming,onInput:t.onRenameInput,onCompositionstart:t.onRenameCompositionStart,onCompositionend:t.onRenameCompositionEnd,onKeydown:t.onRenameKeydown}),e("div",{class:"bai-bai-preset-backup-dialog-actions"},[e("button",{class:"menu_button bai-bai-preset-backup-dialog-button",type:"button",disabled:t.renaming,onClick:()=>t.closeRenameDialog()},"取消"),e("button",{class:"menu_button bai-bai-preset-backup-dialog-button",type:"button",disabled:t.renaming||!t.renameValue.trim(),onClick:()=>t.confirmRename()},t.renaming?"保存中...":"保存")])])])}function Cl(e,{className:t="",icon:n,title:r,disabled:o=!1,onClick:a}){return e("button",{class:["menu_button","menu_button_icon",t],type:"button",title:r,disabled:o,onClick:a},[e("i",{class:n})])}async function eA(){const e=await fetch(ak,{method:"POST",headers:me(),body:JSON.stringify({})});if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=await e.json();return(Array.isArray(t?.data?.items)?t.data.items:Array.isArray(t?.items)?t.items:[]).map(Ec).filter(Boolean)}async function tA(e,t){const n=await fetch(ik,{method:"POST",headers:me(),body:JSON.stringify({fileName:e,showName:t})});if(!n.ok)throw new Error(`HTTP ${n.status}`);const r=await n.json();return r?.data??r}async function nA(e,t){const n=await fetch(sk,{method:"POST",headers:me(),body:JSON.stringify({fileName:e,note:t})});if(!n.ok)throw new Error(`HTTP ${n.status}`);const r=await n.json();return r?.data??r}async function Fm(e){const t=await fetch(lk,{method:"POST",headers:me(),body:JSON.stringify({fileName:e})});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json().catch(()=>({}))}async function rA(e){const t=await fetch(ck,{method:"POST",headers:me(),body:JSON.stringify({fileName:e})});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json();return n?.data??n}function oA(e,t){const n=e?.body&&typeof e.body=="object"?e.body:e,r=typeof n?.apiId=="string"&&n.apiId.trim()?n.apiId.trim():"openai",o=n?.preset&&typeof n.preset=="object"?n.preset:n,a=typeof e?.showName=="string"&&e.showName!==e?.fileName?e.showName:"",i=String(a||n?.name||t?.name||Fo(t?.fileName||"")).trim();if(!o||typeof o!="object"||Array.isArray(o))throw new Error("Invalid preset backup data");return{apiId:r,name:i||"备份预设",preset:aA(o)}}function aA(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function iA(e,t){const n=String(t).trim()||"备份预设",r=typeof e.getAllPresets=="function"?e.getAllPresets().map(a=>String(a)):[],o=new Set(r);if(!o.has(n))return n;for(let a=1;a<=999;a+=1){const i=`${n} ${a}`;if(!o.has(i))return i}return`${n} ${Date.now()}`}function Ec(e){if(!e||typeof e!="object")return null;const t=String(e.fileName||e.name||"").trim();if(!t)return null;const n=String(e.showName||e.displayName||e.presetName||"").trim(),r=n&&n!==t?n:Fo(t),o=sA(e.createdAt??e.createdAtMs),a=typeof e.note=="string"?e.note.trim():"";return{id:t,name:r,fileName:t,note:a,createdAt:o,searchText:`${r} ${a} ${o}`.toLowerCase()}}function Fo(e){const t=String(e||"").replace(/\.json$/i,""),n=/^\d{8}_\d{6}__(.+)$/.exec(t);return n?.[1]?n[1]:t||String(e||"")}function sA(e){if(typeof e=="number"&&Number.isFinite(e))return new Date(e).toLocaleString();if(typeof e=="string"&&e.trim()){const t=new Date(e);return Number.isFinite(t.getTime())?t.toLocaleString():e.trim()}return"时间未知"}function lA(e,t=null){const n=e?.querySelector?.(".bai-bai-preset-backup-summary");if(!(e instanceof HTMLDetailsElement)||!(n instanceof HTMLElement)){e instanceof HTMLDetailsElement&&(e.open=!e.open);return}if(typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches||typeof e.animate!="function"){e.open=!e.open;return}if(t?.animating)return;const o=e.open;t&&(t.animating=!0,t.closing=o),e.style.overflow="hidden";const a=e.offsetHeight,i=o?n.offsetHeight:(e.style.height=`${a}px`,e.open=!0,e.scrollHeight);e.style.height=`${a}px`;const s=e.animate({height:[`${a}px`,`${i}px`]},{duration:fk,easing:"ease"}),l=()=>{e.style.height="",e.style.overflow="",t&&(t.animating=!1,t.closing=!1)};s.onfinish=()=>{a>i&&(e.open=!1),l()},s.oncancel=l}function cA(){let e=document.getElementById(bm);e||(e=document.createElement("style"),e.id=bm,document.head.append(e)),e.textContent=`
#${L} {
    box-sizing: border-box;
    margin: 0 0 8px;
}

#${L} *,
#${L} *::before,
#${L} *::after {
    box-sizing: border-box;
}

#${L} .bai-bai-preset-backup-details {
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 8px;
    background: color-mix(in srgb, var(--SmartThemeBlurTintColor) 40%, transparent);
    overflow: hidden;
}

#${L} .bai-bai-preset-backup-summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    min-height: 38px;
    padding: 8px 10px;
    cursor: pointer;
    list-style: none;
    user-select: none;
}

#${L} .bai-bai-preset-backup-summary::-webkit-details-marker {
    display: none;
}

#${L} .bai-bai-preset-backup-title,
#${L} .bai-bai-preset-backup-summary-meta {
    display: inline-flex;
    align-items: center;
    min-width: 0;
    gap: 6px;
}

#${L} .bai-bai-preset-backup-title {
    font-weight: 700;
}

#${L} .bai-bai-preset-backup-title i {
    color: var(--SmartThemeQuoteColor);
}

#${L} .bai-bai-preset-backup-summary-meta {
    flex: 0 0 auto;
    opacity: 0.72;
}

#${L} .bai-bai-preset-backup-chevron {
    transition: transform 0.16s ease;
}

#${L} details[open]:not(.${Qb}) .bai-bai-preset-backup-chevron {
    transform: rotate(90deg);
}

#${L} .bai-bai-preset-backup-body {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 10px 10px;
}

#${L} .bai-bai-preset-backup-toolbar {
    display: flex;
    align-items: center;
    gap: 6px;
}

#${L} .bai-bai-preset-backup-search {
    position: relative;
    display: flex;
    align-items: center;
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
}

#${L} .bai-bai-preset-backup-search i {
    position: absolute;
    left: 12px;
    z-index: 1;
    opacity: 0.62;
    pointer-events: none;
}

#${L} .bai-bai-preset-backup-search input.text_pole[type="search"] {
    width: 100%;
    min-width: 0;
    padding-left: 36px !important;
    background: transparent !important;
}

#${L} .bai-bai-preset-backup-refresh {
    flex: 0 0 auto;
}

#${L} .bai-bai-preset-backup-refreshing i {
    animation: bai-bai-preset-backup-spin 0.45s linear infinite;
}

#${L} .bai-bai-preset-backup-importing i {
    animation: bai-bai-preset-backup-spin 0.55s linear infinite;
}

#${L} .bai-bai-preset-backup-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-right: 2px;
}

#${L} .bai-bai-preset-backup-item {
    display: flex;
    align-items: center;
    gap: 8px;
    min-height: 46px;
    padding: 7px 8px;
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 6px;
}

#${L} .bai-bai-preset-backup-item[hidden],
#${L} .bai-bai-preset-backup-empty[hidden] {
    display: none !important;
}

#${L} .bai-bai-preset-backup-item-main {
    display: flex;
    flex-direction: column;
    gap: 3px;
    flex: 1 1 auto;
    min-width: 0;
}

#${L} .bai-bai-preset-backup-item-row {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
}

#${L} .bai-bai-preset-backup-item-row-top {
    justify-content: space-between;
}

#${L} .bai-bai-preset-backup-item-name {
    display: block;
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.25;
}

#${L} .bai-bai-preset-backup-item-meta {
    gap: 8px;
}

#${L} .bai-bai-preset-backup-item-time {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    flex: 0 0 auto;
    opacity: 0.72;
    line-height: 1.2;
}

#${L} .bai-bai-preset-backup-item-note {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    min-width: 0;
    flex: 1 1 auto;
    margin: 0;
    padding: 1px 6px;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 5px;
    color: inherit;
    font-size: 0.86em;
    line-height: 1.2;
    cursor: pointer;
    transition: background 0.12s ease, border-color 0.12s ease, opacity 0.12s ease;
}

#${L} .bai-bai-preset-backup-item-note:hover {
    background: var(--white20a, rgba(255, 255, 255, 0.08));
    border-color: var(--SmartThemeBorderColor);
}

#${L} .bai-bai-preset-backup-item-note i {
    flex: 0 0 auto;
    opacity: 0.75;
}

#${L} .bai-bai-preset-backup-item-note-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

#${L} .bai-bai-preset-backup-item-note-empty {
    opacity: 0.5;
}

#${L} .bai-bai-preset-backup-item-note-empty:hover {
    opacity: 0.85;
}

#${L} .bai-bai-preset-backup-note-textarea {
    width: 100%;
    resize: vertical;
    min-height: calc(var(--mainFontSize) * 4.5);
    line-height: 1.4;
}

#${L} .bai-bai-preset-backup-note-counter {
    margin-top: -2px;
    font-size: 0.8em;
    text-align: right;
    opacity: 0.6;
}

#${L} .bai-bai-preset-backup-batch-active {
    color: var(--SmartThemeQuoteColor, #6c9eff);
}

#${L} .bai-bai-preset-backup-selection-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    padding: 6px 8px;
    margin-bottom: 2px;
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 6px;
    background: var(--black30a, rgba(0, 0, 0, 0.12));
}

#${L} .bai-bai-preset-backup-select-all {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 2px 8px;
    margin: 0;
    background: transparent;
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 5px;
    color: inherit;
    cursor: pointer;
}

#${L} .bai-bai-preset-backup-select-all:disabled {
    opacity: 0.5;
    cursor: default;
}

#${L} .bai-bai-preset-backup-selection-count {
    flex: 1 1 auto;
    min-width: 0;
    font-size: 0.86em;
    opacity: 0.8;
}

#${L} .bai-bai-preset-backup-selection-actions {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    flex: 0 0 auto;
}

#${L} .bai-bai-preset-backup-selection-actions .menu_button {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    margin: 0;
}

#${L} .bai-bai-preset-backup-item-selectable {
    cursor: pointer;
}

#${L} .bai-bai-preset-backup-item-selected {
    border-color: var(--SmartThemeQuoteColor, #6c9eff);
    background: var(--white20a, rgba(255, 255, 255, 0.06));
}

#${L} .bai-bai-preset-backup-item-check {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    font-size: 1.1em;
    opacity: 0.7;
}

#${L} .bai-bai-preset-backup-item-check-on {
    color: var(--SmartThemeQuoteColor, #6c9eff);
    opacity: 1;
}

#${L} .bai-bai-preset-backup-item-actions {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
    gap: 4px;
}

#${L} .bai-bai-preset-backup-item-actions .menu_button,
#${L} .bai-bai-preset-backup-refresh,
#${L} .bai-bai-preset-backup-batch-toggle,
#${L} .bai-bai-preset-backup-pagination .menu_button,
#${L} .bai-bai-preset-backup-dialog-head .menu_button {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    inline-size: calc(var(--mainFontSize) * 1.8) !important;
    block-size: calc(var(--mainFontSize) * 1.8) !important;
    min-inline-size: calc(var(--mainFontSize) * 1.8) !important;
    min-block-size: calc(var(--mainFontSize) * 1.8) !important;
    margin: 0 !important;
    padding: 0 !important;
    line-height: 1 !important;
}

#${L} .bai-bai-preset-backup-delete {
    color: #d86666;
}

#${L} .bai-bai-preset-backup-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-height: 64px;
    padding: 10px;
    border: 1px dashed var(--SmartThemeBorderColor);
    border-radius: 6px;
    text-align: center;
    opacity: 0.72;
}

#${L} .bai-bai-preset-backup-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    min-height: calc(var(--mainFontSize) * 1.8);
}

#${L} .bai-bai-preset-backup-status {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.86em;
    opacity: 0.72;
}

#${L} .bai-bai-preset-backup-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    gap: 8px;
}

#${L} .bai-bai-preset-backup-page-label {
    min-width: 4.6em;
    text-align: center;
    font-size: 0.9em;
    opacity: 0.78;
}

#${L} .bai-bai-preset-backup-dialog-layer {
    position: absolute;
    inset: 0;
    z-index: 12;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    padding: 10px;
    background: color-mix(in srgb, var(--SmartThemeBlurTintColor) 46%, transparent);
    backdrop-filter: blur(2px);
    animation: bai-bai-preset-backup-layer-in 0.14s ease both;
}

#${L} .bai-bai-preset-backup-dialog {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(100%, 360px);
    padding: 12px;
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 8px;
    background: var(--SmartThemeBlurTintColor);
    box-shadow: 0 12px 32px color-mix(in srgb, #000 28%, transparent);
    animation: bai-bai-preset-backup-dialog-in 0.18s ease both;
}

#${L} .bai-bai-preset-backup-dialog-head,
#${L} .bai-bai-preset-backup-dialog-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
}

#${L} .bai-bai-preset-backup-dialog-input {
    width: 100%;
    min-width: 0;
}

#${L} .bai-bai-preset-backup-dialog-message {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
    line-height: 1.35;
}

#${L} .bai-bai-preset-backup-dialog-message strong {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

#${L} .bai-bai-preset-backup-dialog-actions {
    justify-content: flex-end;
}

#${L} .bai-bai-preset-backup-dialog-button {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex: 0 0 auto !important;
    min-width: 4.8em !important;
    width: auto !important;
    max-width: none !important;
    min-height: calc(var(--mainFontSize) * 2) !important;
    padding: 0 12px !important;
    line-height: 1.2 !important;
    white-space: nowrap !important;
    writing-mode: horizontal-tb !important;
}

#${L} .bai-bai-preset-backup-dialog-danger {
    color: #d86666 !important;
}

@keyframes bai-bai-preset-backup-spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes bai-bai-preset-backup-layer-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes bai-bai-preset-backup-dialog-in {
    from {
        opacity: 0;
        transform: translateY(8px) scale(0.97);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@media (max-width: 600px) {
    #${L} .bai-bai-preset-backup-dialog-layer {
        position: fixed;
        inset: 0;
        min-height: 100dvh;
        padding: 18px;
        background: color-mix(in srgb, var(--SmartThemeBlurTintColor) 60%, transparent);
    }

    #${L} .bai-bai-preset-backup-dialog {
        width: min(100%, 420px);
    }

    #${L} .bai-bai-preset-backup-footer {
        gap: 6px;
    }
}
`}function dh(){const e=document.getElementById(hm);if(!N.presetScrollOptimizationEnabled){e?.remove();return}if(e){e.textContent=zm();return}const t=document.createElement("style");t.id=hm,t.textContent=zm(),document.head.append(t)}function zm(){return`
${S} > li.completion_prompt_manager_prompt {
    contain: paint style;
}
`}function ph(){if(!N.presetInterfaceCollapseEnabled){EA(),bA(),Nu(),CA();return}wA(),yA(),ea({resetRetries:!0})}function ea({resetRetries:e=!1}={}){if(!N.presetInterfaceCollapseEnabled)return!1;e&&Um({clearLayoutRuntimeAbsent:!0});const t=SA();if(t.active)return Nu(),ta(),t.confirmed||Sc(),!0;const n=vA();return uA(),n&&Um(),!n&&!document.getElementById(yt)&&Sc(),n}function $u(){let e=f[ar];return e||(e={observer:null,target:null,observers:[],targets:[],timer:null,retryTimer:null,retryCount:0},f[ar]=e),e}function uA(){if(typeof MutationObserver!="function")return;const e=fA(),t=$u();if(!e.length){ta(t),Sc();return}dA(t,e)||(ta(t),t.targets=e,t.observers=e.map(({element:n,subtree:r})=>{const o=new MutationObserver(a=>{pA(a)&&hA()});return o.observe(n,{childList:!0,subtree:r}),o}))}function dA(e,t){return Array.isArray(e.targets)&&Array.isArray(e.observers)&&e.observers.length>0&&e.targets.length===t.length&&e.targets.every((n,r)=>n.element===t[r].element&&n.subtree===t[r].subtree)}function ta(e=f[ar]){if(e){if(e.timer&&(clearTimeout(e.timer),e.timer=null),e.observer?.disconnect?.(),e.observer=null,e.target=null,Array.isArray(e.observers))for(const t of e.observers)t?.disconnect?.();e.observers=[],e.targets=[]}}function pA(e){for(const t of e){if(mA(t.target))return!0;for(const n of t.addedNodes)if(Vm(n))return!0;for(const n of t.removedNodes)if(Vm(n))return!0}return!1}function mA(e){return e instanceof Element?e.matches(Ii)||!!e.closest(Ii):!1}function Vm(e){return e instanceof Element?e.matches(Ii)||!!e.querySelector(Ii):!1}function fA(){const e=document.getElementById(yt),t=document.getElementById(Ms),n=document.querySelector("#range_block_openai"),r=document.querySelector(ha),o=document.querySelector("#te_collapse_preset"),a=document.querySelector(Ru),i=[n,r,e,t,o].filter(s=>s instanceof HTMLElement&&s.isConnected);return i.length?gA(i):a instanceof HTMLElement?[{element:a,subtree:!0}]:[]}function gA(e){const t=[],n=(r,o=!1)=>{if(!(r instanceof HTMLElement)||!r.isConnected||r===document.body||r===document.documentElement)return;const a=t.find(i=>i.element===r);if(a){a.subtree=a.subtree||o;return}t.push({element:r,subtree:o})};for(const r of e)n(r),n(r.parentElement),r.id===yt&&n(r.querySelector(`.${Zo}`));return t}function bA(){const e=f[ar];e&&(e.timer&&clearTimeout(e.timer),e.retryTimer&&clearTimeout(e.retryTimer),ta(e),delete f[ar])}function hA(){if(!N.presetInterfaceCollapseEnabled)return;const e=$u();e.timer&&clearTimeout(e.timer),e.timer=setTimeout(()=>{e.timer=null,ea()},80)}function Sc(){if(!N.presetInterfaceCollapseEnabled)return;const e=$u();if(e.retryTimer||e.retryCount>=mc){e.retryCount>=mc&&(e.layoutRuntimeAbsent=!0,_A(e)&&ta(e));return}e.retryCount+=1,e.retryTimer=setTimeout(()=>{e.retryTimer=null,ea()},UC)}function _A(e){return Array.isArray(e?.targets)&&e.targets.some(t=>t?.subtree===!0&&t.element?.matches?.(Ru)===!0)}function Um({clearLayoutRuntimeAbsent:e=!1}={}){const t=f[ar];t&&(t.retryTimer&&(clearTimeout(t.retryTimer),t.retryTimer=null),t.retryCount=0,e&&(t.layoutRuntimeAbsent=!1))}function yA(){if(f[Ci])return;const e=t=>{const n=t.target instanceof Element?t.target.closest("#te_collapse_preset"):null;n instanceof HTMLInputElement&&(n.checked&&Nu(),setTimeout(()=>ea({resetRetries:!0}),0),setTimeout(()=>ea(),120))};document.addEventListener("input",e,!0),document.addEventListener("change",e,!0),f[Ci]=e}function EA(){const e=f[Ci];e&&(document.removeEventListener("input",e,!0),document.removeEventListener("change",e,!0),delete f[Ci])}function SA(){if(document.getElementById(Ms))return{active:!0,confirmed:!0};const e=document.querySelector("#te_collapse_preset");if(e instanceof HTMLInputElement)return{active:e.checked,confirmed:!0};if(j?.[WC]?.collapsePreset===!0){const t=f[ar];if(t?.layoutRuntimeAbsent)return{active:!1,confirmed:!1};const n=!t||t.retryCount<mc;return!n&&t&&(t.layoutRuntimeAbsent=!0),{active:n,confirmed:!1}}return{active:!1,confirmed:!1}}function vA(){if(document.getElementById(yt))return!0;if(document.getElementById(Ms))return!1;const e=TA();if(!e.length)return!1;Oi();const t=document.createElement("div");t.id=yt,t.className="inline-drawer wide100p flexFlowColumn",t.innerHTML=`
        <div class="inline-drawer-toggle inline-drawer-header userSettingsInnerExpandable">
            <b><span>预设设置</span></b>
            <div class="fa-solid fa-circle-chevron-down inline-drawer-icon down"></div>
        </div>
        <div class="inline-drawer-content ${Zo}" style="display:none;"></div>
    `;const n=e[0]?.element;if(!(n instanceof HTMLElement)||!n.parentElement)return!1;const r=new Set;for(const i of e){if(!r.has(i.key)){const s=document.createElement("div");s.id=Mi(i.key),s.hidden=!0,s.dataset.baiBaiPresetInterfaceCollapsePlaceholder="true",i.element.before(s),r.add(i.key)}i.element.setAttribute(Li,i.key)}const o=document.getElementById(Mi(e[0].key)),a=t.querySelector(`.${Zo}`);if(!(o instanceof HTMLElement)||!(a instanceof HTMLElement))return Oi(),!1;o.before(t);for(const i of e)a.append(i.element);return!0}function Nu(){const e=document.getElementById(yt);if(!(e instanceof HTMLElement)){Oi();return}const t=e.querySelector(`.${Zo}`);for(const n of["1","2","3"]){const r=document.getElementById(Mi(n)),o=t instanceof HTMLElement?Array.from(t.children).filter(a=>a.getAttribute?.(Li)===n):[];for(const a of o)a.removeAttribute(Li);r instanceof HTMLElement?r.replaceWith(...o):o.length&&e.before(...o)}e.remove(),Oi()}function TA(){const e=document.querySelector(ha);if(!(e instanceof HTMLElement))return[];const t=[],n=document.querySelector("#range_block_openai");n instanceof HTMLElement&&!n.closest(`#${yt}`)&&t.push({key:"1",element:n});const r=e.querySelector(":scope > div");r instanceof HTMLElement&&!r.closest(`#${yt}`)&&t.push({key:"2",element:r});for(const o of e.querySelectorAll(":scope > div.range-block.m-t-1"))o instanceof HTMLElement&&!o.closest(`#${yt}`)&&t.push({key:"3",element:o});return xA(t)}function xA(e){const t=[];for(const n of e){const r=n.element;if(!(!(r instanceof HTMLElement)||!r.isConnected)&&!t.some(o=>o.element===r)&&!t.some(o=>o.element.contains(r))){for(let o=t.length-1;o>=0;o-=1)r.contains(t[o].element)&&t.splice(o,1);t.push(n)}}return t}function Mi(e){return`${qb}_${e}`}function Oi(){for(const e of["1","2","3"])document.getElementById(Mi(e))?.remove()}function wA(){let e=document.getElementById(ic);e||(e=document.createElement("style"),e.id=ic,document.head.append(e)),e.textContent=`
#${yt} {
    margin-bottom: 8px;
}

#${yt} > .${Zo} {
    padding-top: 6px;
}
`}function CA(){document.getElementById(ic)?.remove()}function Hu(){if(!N.presetDragOptimizationEnabled){Ln(),Qt({cancelled:!0}),Bi(),se()?Hr():(_h(),Hr(),Gu());return}if(Ln(),Qt({cancelled:!0}),ya(),Hr(),se()){Bi();return}bh(),tt()}function mh(){if(kA(),AA(),F_(),!se()){h_(),FA(),yh(),Hr(),N.presetDragOptimizationEnabled?Hu():Gu();return}Bi(),wh(),ya(),Hr(),Gs()}function kA(){if(f[Mm])return;const e=t=>{const n=t.target instanceof Element?t.target.closest(qC):null;if(n instanceof HTMLElement){if(f.presetExportPendingChangesBypass){f.presetExportPendingChangesBypass=!1;return}d_()&&(t.preventDefault(),t.stopImmediatePropagation(),MA(n))}};f[Mm]=e,document.addEventListener("click",e,!0)}function AA(){if(f[Rm])return;const e=t=>{if((t.target instanceof Element?t.target.closest(jC):null)instanceof HTMLElement){if(Nm()||Ok()){t.preventDefault(),t.stopImmediatePropagation(),Mk(),Nm()?$k():m_(z?.preset_settings_openai);return}if(!d_()){IA(z?.preset_settings_openai);return}t.preventDefault(),t.stopImmediatePropagation(),PA()}};f[Rm]=e,document.addEventListener("click",e,!0)}async function PA(){const e=z?.preset_settings_openai;if(!e)return;const t=FL(e),n=Ta(e);if(Ns(),t.requestedRevision=Math.max(t.requestedRevision??-1,n),t.requestedSnapshot=Hs(z),t.promise&&(await t.promise.catch(()=>{}),t.promise||t.requestedRevision===null))return;const r=LA(t);t.promise=r;try{await r}catch(o){qt()&&yr(),console.debug(`${D} Failed to save pending preset prompt changes`,o),toastr.error(d`Failed to save preset prompt changes. See console for details.`)}finally{if(t.promise===r&&(t.promise=null),!t.promise&&t.requestedRevision===null&&t.requestedSnapshot===null){const o=hd();for(const[a,i]of o.entries())i===t&&o.delete(a)}}}async function LA(e){let t=!1;for(;e.requestedRevision!==null;){const n=e.requestedRevision,r=e.requestedSnapshot;e.requestedRevision=null,e.requestedSnapshot=null;let o=e.presetName;await UL(o),o=e.presetName;let a=n,i=r;if(z?.preset_settings_openai===o&&(Ns(),a=Ta(o),i=Hs(z)),!i)throw new Error(`Unable to capture OpenAI preset snapshot for ${o}`);await fh(o,i,{revision:a}),f_(e.presetName,a),e.requestedRevision!==null&&e.requestedRevision<=a&&(e.requestedRevision=null,e.requestedSnapshot=null),await fr(),t=!0}t&&toastr.success(d`Preset updated`)}async function IA(e=z?.preset_settings_openai,t=yR(e)){try{await t,RA(e),await fr()}catch(n){console.debug(`${D} Failed to save settings after preset save`,n)}}function Ns(){const e=m?.serviceSettings;if(!e||e===z)return!1;let t=!1;return Array.isArray(e.prompts)&&(z.prompts=e.prompts,t=!0),Array.isArray(e.prompt_order)&&(z.prompt_order=e.prompt_order,t=!0),e.extensions&&typeof e.extensions=="object"&&(z.extensions=e.extensions,t=!0),t}function Hs(e=z){const t={};for(const[n,[,r]]of Object.entries(_v??{}))t[n]=e?.[r];return structuredClone(t)}function fh(e,t,{revision:n=null}={}){const r=fn();if(r&&(e===r.oldName||e===r.newName)){const o=r.deferredSaveTail.catch(()=>{}).then(async()=>{const a=await r.completionPromise;Number.isFinite(n)&&Number.isFinite(r.finalSavedRevision)&&n<=r.finalSavedRevision||await Wm(a,t)});return r.deferredSaveTail=o,o}return Wm(e,t)}async function Wm(e,t){const n=gr("openai");if(n&&typeof n.savePreset=="function")await n.savePreset(e,t,{skipUpdate:!0});else if(!(await fetch("/api/presets/save",{method:"POST",headers:me(),body:JSON.stringify({apiId:"openai",name:e,preset:t})})).ok)throw new Error("OpenAI preset update request failed");gh(e,t)}function gh(e,t){if(!e||!t||!Array.isArray(Co))return!1;const n=Ja?.[e];return n==null?!1:(Co[n]&&typeof Co[n]=="object"?Object.assign(Co[n],t):Co[n]=t,!0)}function RA(e=z?.preset_settings_openai){Ns();const t=Hs(z);return gh(e,t)}async function MA(e){if(!f.presetExportPendingChangesPromptOpen){f.presetExportPendingChangesPromptOpen=!0;try{if(!await fe(d`当前预设有未保存的更改。要先保存后再导出吗？`,ge.CONFIRM))return;await Tn({includeOpenAiPresetSaves:!0}),f.presetExportPendingChangesBypass=!0,e.click()}catch(t){console.debug(`${D} Failed to save pending preset changes before export`,t),toastr.error(d`Failed to save preset changes before export. See console for details.`)}finally{f.presetExportPendingChangesPromptOpen=!1}}}function se(){return N.presetGroupingEnabled!==!1}function bh(){if(f[ki])return;const e={pointerdown:tI,mousedown:nI,touchstart:rI,click:oI};document.addEventListener("pointerdown",e.pointerdown,!0),document.addEventListener("mousedown",e.mousedown,!0),document.addEventListener("touchstart",e.touchstart,{capture:!0,passive:!1}),document.addEventListener("click",e.click,!0),f[ki]=e}function Bi(){const e=f[ki];e&&(document.removeEventListener("pointerdown",e.pointerdown,!0),document.removeEventListener("mousedown",e.mousedown,!0),document.removeEventListener("touchstart",e.touchstart,!0),document.removeEventListener("click",e.click,!0),delete f[ki])}function Hr(){const e=document.getElementById(sc);if(!N.presetDragOptimizationEnabled&&!se()){e?.remove();return}const t=`
${S}.${jt} li.completion_prompt_manager_prompt {
    user-select: none;
}

#completion_prompt_manager ${S}.${jt} li.completion_prompt_manager_prompt .drag-handle {
    display: flex !important;
    touch-action: none !important;
    cursor: grab !important;
}

${S}.${ir} li.completion_prompt_manager_prompt span span span,
.${Rt} #completion_prompt_manager ${S} li.completion_prompt_manager_prompt span span span {
    transition: none;
    filter: none;
}

.${Ls} {
    display: contents;
}

#completion_prompt_manager ${S} .bai-bai-preset-list-head-actions,
#completion_prompt_manager ${S} .bai-bai-preset-group-actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 4px;
}

#completion_prompt_manager ${S} .bai-bai-preset-list-head-actions .menu_button {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex: 0 0 calc(var(--mainFontSize) * 1.65) !important;
    inline-size: calc(var(--mainFontSize) * 1.65) !important;
    block-size: calc(var(--mainFontSize) * 1.65) !important;
    min-inline-size: calc(var(--mainFontSize) * 1.65) !important;
    min-block-size: calc(var(--mainFontSize) * 1.65) !important;
    margin: 0 !important;
    padding: 0 !important;
    line-height: 1 !important;
}

#completion_prompt_manager ${S}.bai-bai-preset-drag-locked li.completion_prompt_manager_prompt .drag-handle,
#completion_prompt_manager ${S}.bai-bai-preset-drag-locked .bai-bai-preset-group-header {
    cursor: default !important;
}

#completion_prompt_manager ${S} .bai-bai-preset-favorites {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 0;
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 8px;
    background: color-mix(in srgb, var(--SmartThemeBlurTintColor) 45%, transparent);
    overflow: hidden;
}

#completion_prompt_manager ${S} .bai-bai-preset-favorites-collapsed {
    gap: 0;
}

#completion_prompt_manager ${S} .bai-bai-preset-favorites-header {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-items: center;
    padding: 10px 7px;
    border-bottom: 1px solid color-mix(in srgb, var(--SmartThemeBorderColor) 70%, transparent);
    background: color-mix(in srgb, var(--SmartThemeBlurTintColor) 75%, transparent);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
}

#completion_prompt_manager ${S} .bai-bai-preset-favorites-collapsed .bai-bai-preset-favorites-header {
    border-bottom-color: transparent;
}

#completion_prompt_manager ${S} .bai-bai-preset-favorites-title {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    min-width: 0;
    overflow: hidden;
    white-space: normal;
}

#completion_prompt_manager ${S} .bai-bai-preset-favorites-title strong {
    overflow-wrap: anywhere;
}

#completion_prompt_manager ${S} .bai-bai-preset-favorites-count {
    opacity: 0.65;
    white-space: nowrap;
}

#completion_prompt_manager ${S} .bai-bai-preset-favorites-toggle {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex: 0 0 calc(var(--mainFontSize) * 1.65) !important;
    inline-size: calc(var(--mainFontSize) * 1.65) !important;
    block-size: calc(var(--mainFontSize) * 1.65) !important;
    min-inline-size: calc(var(--mainFontSize) * 1.65) !important;
    min-block-size: calc(var(--mainFontSize) * 1.65) !important;
    box-sizing: border-box !important;
    border: 0 !important;
    box-shadow: none !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    font-size: calc(var(--mainFontSize) * 0.9) !important;
    line-height: 1 !important;
    transform: rotate(0deg);
    transform-origin: center;
    transition: transform ${Tl}ms ease;
}

#completion_prompt_manager ${S} .bai-bai-preset-favorites-collapsed .bai-bai-preset-favorites-toggle {
    transform: rotate(-90deg);
    transition-duration: ${Bo}ms;
}

#completion_prompt_manager ${S} .bai-bai-preset-favorites-body {
    display: grid;
    grid-template-rows: 1fr;
    min-height: 0;
    overflow: hidden;
    transition: grid-template-rows ${xl}ms ${wl};
}

#completion_prompt_manager ${S} .bai-bai-preset-favorites-collapsed .bai-bai-preset-favorites-body {
    grid-template-rows: 0fr;
    pointer-events: none;
}

#completion_prompt_manager ${S} .bai-bai-preset-favorites-body-inner {
    min-height: 0;
    overflow: hidden;
}

#completion_prompt_manager ${S} .bai-bai-preset-favorites-list {
    display: flex;
    flex-direction: column;
    gap: var(${Kt}, 6px);
    margin: 0;
    padding: var(${Kt}, 6px);
    list-style: none;
    min-height: 0;
    overflow: hidden;
}

#completion_prompt_manager ${S} .bai-bai-preset-favorite-prompt .bai-bai-preset-favorite-row-marker {
    cursor: default !important;
}

#completion_prompt_manager ${S}.${jt} .bai-bai-preset-favorite-prompt .bai-bai-preset-favorite-row-marker {
    cursor: default !important;
}

#completion_prompt_manager ${S} .bai-bai-preset-global-library-prompt .bai-bai-preset-global-library-row-marker {
    cursor: default !important;
}

#completion_prompt_manager ${S}.${jt} .bai-bai-preset-global-library-prompt .bai-bai-preset-global-library-row-marker {
    cursor: default !important;
}

#completion_prompt_manager ${S} .bai-bai-preset-prompt-favorite-toggle-active {
    color: #f5c542 !important;
    opacity: 1 !important;
}

#completion_prompt_manager ${S} .bai-bai-preset-prompt-favorite-toggle:not(.bai-bai-preset-prompt-favorite-toggle-active) {
    opacity: 0.48;
}

#completion_prompt_manager ${S} .bai-bai-preset-global-library,
#completion_prompt_manager ${S} .bai-bai-preset-group {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 0;
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 8px;
    background: color-mix(in srgb, var(--SmartThemeBlurTintColor) 45%, transparent);
    overflow: hidden;
}

#completion_prompt_manager ${S} .bai-bai-preset-global-library-collapsed,
#completion_prompt_manager ${S} .bai-bai-preset-group-collapsed {
    gap: 0;
}

#completion_prompt_manager ${S} .bai-bai-preset-group-powered-off {
    opacity: 0.72;
}

#completion_prompt_manager ${S} .bai-bai-preset-group-powered-off .bai-bai-preset-group-header {
    background: color-mix(in srgb, var(--SmartThemeBlurTintColor) 52%, transparent);
}

#completion_prompt_manager ${S} .bai-bai-preset-group-header {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    padding: 10px 7px;
    border: 0;
    border-bottom: 1px solid color-mix(in srgb, var(--SmartThemeBorderColor) 70%, transparent);
    background: color-mix(in srgb, var(--SmartThemeBlurTintColor) 75%, transparent);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

#completion_prompt_manager ${S} .bai-bai-preset-global-library-collapsed .bai-bai-preset-group-header,
#completion_prompt_manager ${S} .bai-bai-preset-group-collapsed .bai-bai-preset-group-header {
    border-bottom-color: transparent;
}

@media (pointer: coarse) {
    #completion_prompt_manager ${S} .bai-bai-preset-group-drag-surface {
        touch-action: pan-y !important;
    }
}

#completion_prompt_manager ${S} .bai-bai-preset-group-title {
    display: flex;
    align-items: center;
    gap: 4px;
    min-width: 0;
    overflow: hidden;
    white-space: normal;
    font-size: calc(var(--mainFontSize) * 1);
}

#completion_prompt_manager ${S} .bai-bai-preset-group-title-content {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 6px;
    min-width: 0;
    overflow: hidden;
    white-space: normal;
}

#completion_prompt_manager ${S} .bai-bai-preset-group-actions {
    gap: 3px;
}

#completion_prompt_manager ${S} .bai-bai-preset-group-toggle,
#completion_prompt_manager ${S} .bai-bai-preset-group-action-button {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex: 0 0 calc(var(--mainFontSize) * 1.65) !important;
    inline-size: calc(var(--mainFontSize) * 1.65) !important;
    block-size: calc(var(--mainFontSize) * 1.65) !important;
    min-inline-size: calc(var(--mainFontSize) * 1.65) !important;
    min-block-size: calc(var(--mainFontSize) * 1.65) !important;
    box-sizing: border-box !important;
    border: 0 !important;
    box-shadow: none !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    font-size: calc(var(--mainFontSize) * 0.9) !important;
    line-height: 1 !important;
}

#completion_prompt_manager ${S} .bai-bai-preset-group-toggle {
    transform: rotate(0deg);
    transform-origin: center;
    transition: transform ${Tl}ms ease;
}

#completion_prompt_manager ${S} .bai-bai-preset-global-library-collapsed .bai-bai-preset-group-toggle,
#completion_prompt_manager ${S} .bai-bai-preset-group-collapsed .bai-bai-preset-group-toggle {
    transform: rotate(-90deg);
    transition-duration: ${Bo}ms;
}

#completion_prompt_manager ${S} .bai-bai-preset-group-enable-toggle {
    font-size: calc(var(--mainFontSize) * 1.05) !important;
}

#completion_prompt_manager ${S} .bai-bai-preset-group-title-content strong {
    flex: 0 1 auto;
    min-width: 0;
    overflow: visible;
    overflow-wrap: anywhere;
    white-space: normal;
}

#completion_prompt_manager ${S} .bai-bai-preset-group-count {
    flex: 0 0 auto;
    opacity: 0.65;
    font-size: calc(var(--mainFontSize) * 0.82);
    white-space: nowrap;
}

#completion_prompt_manager ${S} li.completion_prompt_manager_list_head,
#completion_prompt_manager ${S} li.completion_prompt_manager_prompt {
    grid-template-columns: minmax(0, 1fr) max-content max-content !important;
    column-gap: 6px !important;
}

#completion_prompt_manager ${S} li.completion_prompt_manager_prompt .completion_prompt_manager_prompt_name {
    min-width: 0 !important;
    white-space: normal !important;
    overflow: visible !important;
    overflow-wrap: anywhere !important;
    word-break: break-word !important;
}

#completion_prompt_manager ${S} li.completion_prompt_manager_prompt.bai-bai-preset-prompt-actions-open .completion_prompt_manager_prompt_name {
    visibility: hidden !important;
    pointer-events: none !important;
}

#completion_prompt_manager ${S} li.completion_prompt_manager_prompt .prompt-manager-inspect-action {
    display: inline;
    min-width: 0;
    max-width: 100%;
    white-space: normal !important;
    overflow-wrap: anywhere !important;
    word-break: break-word !important;
}

#completion_prompt_manager ${S} .bai-bai-preset-prompt-name-visual-only {
    pointer-events: none !important;
    cursor: inherit !important;
}

#completion_prompt_manager ${S} li.completion_prompt_manager_list_head {
    grid-template-columns: minmax(0, 1fr) max-content !important;
    align-items: center !important;
}

#completion_prompt_manager ${S} li.completion_prompt_manager_list_head .bai-bai-preset-list-head-actions {
    justify-self: end !important;
    align-self: center !important;
}

#completion_prompt_manager ${S} li.completion_prompt_manager_list_head .prompt_manager_prompt_tokens,
#completion_prompt_manager ${S} li.completion_prompt_manager_prompt .prompt_manager_prompt_tokens {
    inline-size: max-content !important;
    min-inline-size: 2.2em !important;
    width: auto !important;
    justify-self: end !important;
}

#completion_prompt_manager ${S} li.completion_prompt_manager_prompt .prompt_manager_prompt_controls {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: flex-end !important;
    flex-direction: row !important;
    gap: 4px !important;
    position: relative;
    flex-wrap: nowrap !important;
    white-space: nowrap !important;
    min-inline-size: max-content !important;
    filter: none !important;
}

#completion_prompt_manager ${S} .bai-bai-preset-prompt-icon-button,
#completion_prompt_manager ${S} .bai-bai-preset-prompt-action-button {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex: 0 0 calc(var(--mainFontSize) * 1.65) !important;
    inline-size: calc(var(--mainFontSize) * 1.65) !important;
    block-size: calc(var(--mainFontSize) * 1.65) !important;
    min-inline-size: calc(var(--mainFontSize) * 1.65) !important;
    min-block-size: calc(var(--mainFontSize) * 1.65) !important;
    box-sizing: border-box !important;
    border: 0 !important;
    box-shadow: none !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    font-size: calc(var(--mainFontSize) * 1) !important;
    line-height: 1 !important;
    cursor: pointer !important;
    white-space: nowrap !important;
    filter: none !important;
}

#completion_prompt_manager ${S} .bai-bai-preset-prompt-actions-hint-hidden {
    display: none !important;
}

#completion_prompt_manager ${S} .bai-bai-preset-prompt-actions {
    display: none !important;
    position: absolute !important;
    inset-inline-end: calc(100% + 4px) !important;
    inset-block-start: 50% !important;
    transform: translateY(-50%) !important;
    z-index: 8 !important;
    align-items: center !important;
    justify-content: flex-end !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    gap: 4px !important;
    flex: 0 0 auto !important;
    inline-size: max-content !important;
    min-inline-size: 0 !important;
    max-inline-size: calc(100vw - 48px) !important;
    box-sizing: border-box !important;
    padding: 0 !important;
    border: 0 !important;
    border-radius: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
    white-space: nowrap !important;
    opacity: 0;
    transition: opacity var(--animation-duration-2x, 160ms) ease-in-out;
    filter: none !important;
}

#completion_prompt_manager ${S} .bai-bai-preset-prompt-actions-visible {
    display: inline-flex !important;
    opacity: 1 !important;
}

#completion_prompt_manager ${S} .bai-bai-preset-prompt-action-button.caution {
    color: var(--SmartThemeEmColor) !important;
}

#completion_prompt_manager ${S} .bai-bai-preset-prompt-action-button[data-preset-prompt-action="delete"] {
    color: #ff4d4f !important;
}

#completion_prompt_manager ${S} .prompt-manager-remove-action,
#completion_prompt_manager ${S} .prompt-manager-copy-action {
    display: none !important;
}

#completion_prompt_manager ${S} .bai-bai-preset-group-body {
    display: grid;
    grid-template-rows: 1fr;
    min-height: 0;
    overflow: hidden;
    transition: grid-template-rows ${xl}ms ${wl};
}

#completion_prompt_manager ${S} .bai-bai-preset-global-library-collapsed .bai-bai-preset-group-body,
#completion_prompt_manager ${S} .bai-bai-preset-group-collapsed .bai-bai-preset-group-body {
    grid-template-rows: 0fr;
    pointer-events: none;
}

#completion_prompt_manager ${S} .bai-bai-preset-group-body-inner {
    min-height: 0;
    overflow: hidden;
}

#completion_prompt_manager ${S} .bai-bai-preset-group-list {
    display: flex;
    flex-direction: column;
    gap: var(${Kt}, 6px);
    margin: 0;
    padding: var(${Kt}, 6px);
    list-style: none;
    min-height: 0;
    overflow: hidden;
}

#completion_prompt_manager ${S} .bai-bai-preset-group-list-empty {
    min-height: 12px;
    border: 1px dashed color-mix(in srgb, var(--SmartThemeBorderColor) 70%, transparent);
}

#completion_prompt_manager ${S} .bai-bai-preset-global-library-empty {
    padding: 8px 10px;
    color: var(--SmartThemeBodyColor);
    opacity: 0.65;
    font-size: calc(var(--mainFontSize) * 0.92);
    overflow-wrap: anywhere;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside {
    display: flex;
    flex-direction: column;
    gap: 0;
    width: 100%;
    inline-size: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: var(${Kt}, 6px) 0 var(${Kt}, 6px);
    padding: 0;
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 8px;
    background: color-mix(in srgb, var(--SmartThemeBlurTintColor) 45%, transparent);
    overflow: hidden;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside.bai-bai-preset-global-library-collapsed {
    gap: 0;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-group-header {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    padding: 10px 7px;
    border: 0;
    border-bottom: 1px solid color-mix(in srgb, var(--SmartThemeBorderColor) 70%, transparent);
    background: color-mix(in srgb, var(--SmartThemeBlurTintColor) 75%, transparent);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside.bai-bai-preset-global-library-collapsed .bai-bai-preset-group-header {
    border-bottom-color: transparent;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-group-title,
#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-group-title-content {
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
    overflow: hidden;
    white-space: normal;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-group-title-content {
    flex-wrap: wrap;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-group-toggle,
#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-prompt-action-button {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex: 0 0 calc(var(--mainFontSize) * 1.65) !important;
    inline-size: calc(var(--mainFontSize) * 1.65) !important;
    block-size: calc(var(--mainFontSize) * 1.65) !important;
    min-inline-size: calc(var(--mainFontSize) * 1.65) !important;
    min-block-size: calc(var(--mainFontSize) * 1.65) !important;
    box-sizing: border-box !important;
    border: 0 !important;
    box-shadow: none !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    line-height: 1 !important;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-group-toggle {
    transform: rotate(0deg);
    transform-origin: center;
    transition: transform ${Tl}ms ease;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside.bai-bai-preset-global-library-collapsed .bai-bai-preset-group-toggle {
    transform: rotate(-90deg);
    transition-duration: ${Bo}ms;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-group-body {
    display: grid;
    grid-template-rows: 1fr;
    min-height: 0;
    overflow: hidden;
    transition: grid-template-rows ${xl}ms ${wl};
}

#completion_prompt_manager .bai-bai-preset-global-library-outside.bai-bai-preset-global-library-collapsed .bai-bai-preset-group-body {
    grid-template-rows: 0fr;
    pointer-events: none;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-group-body-inner {
    min-height: 0;
    overflow: hidden;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-global-library-list {
    display: flex;
    flex-direction: column;
    gap: var(${Kt}, 6px);
    margin: 0;
    padding: var(${Kt}, 6px);
    list-style: none;
    min-height: 0;
    overflow: hidden;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside li.completion_prompt_manager_prompt {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) max-content max-content !important;
    align-items: center !important;
    column-gap: 6px !important;
    width: 100%;
    box-sizing: border-box;
    padding: 0.5em 0.5em 0.5em 20px;
    border: 1px solid var(--SmartThemeBorderColor);
    position: relative;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside li.completion_prompt_manager_prompt .completion_prompt_manager_prompt_name {
    min-width: 0 !important;
    white-space: normal !important;
    overflow: visible !important;
    overflow-wrap: anywhere !important;
    word-break: break-word !important;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside li.completion_prompt_manager_prompt .prompt_manager_prompt_controls {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: flex-end !important;
    gap: 4px !important;
    min-inline-size: max-content !important;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside li.completion_prompt_manager_prompt .prompt_manager_prompt_tokens {
    inline-size: max-content !important;
    min-inline-size: 2.2em !important;
    width: auto !important;
    justify-self: end !important;
    text-align: right;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-global-library-row-marker {
    position: absolute;
    height: 100%;
    top: 0;
    padding: 0 5px;
    display: flex !important;
    align-items: center;
    cursor: default !important;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-global-library-empty {
    padding: 8px 10px;
    color: var(--SmartThemeBodyColor);
    opacity: 0.65;
    font-size: calc(var(--mainFontSize) * 0.92);
    overflow-wrap: anywhere;
}

/* 空分组作为拖放目标需要一点高度 */
#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-global-library-list.bai-bai-preset-group-list-empty {
    min-height: 24px;
    border: 1px dashed color-mix(in srgb, var(--SmartThemeBorderColor) 70%, transparent);
    border-radius: 4px;
}

/* 库内分组文件夹 */
#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-global-library-group {
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 6px;
    overflow: hidden;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-global-library-group-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    padding: 6px 8px;
    cursor: pointer;
    background: color-mix(in srgb, var(--SmartThemeBodyColor) 6%, transparent);
}

#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-global-library-group-header .bai-bai-preset-group-title {
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-global-library-group-header .bai-bai-preset-group-title-content {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
    overflow: hidden;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-global-library-group-header strong {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-global-library-group-icon {
    opacity: 0.75;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-global-library-group-header .bai-bai-preset-group-actions {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    flex: none;
}

/* 分组折叠(纯 CSS,复用外层库的 grid-template-rows 动画约束) */
#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-global-library-group.bai-bai-preset-group-collapsed .bai-bai-preset-group-body {
    grid-template-rows: 0fr;
    pointer-events: none;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-global-library-group.bai-bai-preset-group-collapsed .bai-bai-preset-group-toggle {
    transform: rotate(-90deg);
    transition-duration: ${Bo}ms;
}

/* 顶部库 header 的按钮区 */
#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-global-library-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-global-library-header .bai-bai-preset-group-actions {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    flex: none;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-global-library-select-active {
    background: color-mix(in srgb, var(--SmartThemeQuoteColor) 30%, transparent);
}

/* 多选操作条 */
#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-global-library-selection-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    flex-wrap: wrap;
    padding: 6px 8px;
    margin-bottom: 6px;
    border: 1px dashed var(--SmartThemeBorderColor);
    border-radius: 6px;
    background: color-mix(in srgb, var(--SmartThemeQuoteColor) 14%, transparent);
}

#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-global-library-selection-count {
    font-size: calc(var(--mainFontSize) * 0.92);
    opacity: 0.85;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-global-library-selection-actions {
    display: inline-flex;
    align-items: center;
    gap: 6px;
}

/* 行内复选框 */
#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-global-library-select-box {
    cursor: pointer !important;
    opacity: 0.8;
}

#completion_prompt_manager .bai-bai-preset-global-library-outside .bai-bai-preset-global-library-select-box-checked {
    opacity: 1;
    color: var(--SmartThemeQuoteColor);
}

#completion_prompt_manager .bai-bai-preset-global-library-outside li.bai-bai-preset-global-library-prompt-selected {
    background: color-mix(in srgb, var(--SmartThemeQuoteColor) 16%, transparent);
    border-color: var(--SmartThemeQuoteColor);
}

#completion_prompt_manager.bai-bai-preset-global-library-dialog-host {
    position: relative;
}

#completion_prompt_manager .bai-bai-preset-global-library-dialog-layer {
    position: fixed;
    inset: auto;
    top: var(--bai-bai-preset-global-library-dialog-top, 0);
    left: var(--bai-bai-preset-global-library-dialog-left, 0);
    z-index: 40;
    display: flex;
    align-items: center;
    justify-content: center;
    inline-size: var(--bai-bai-preset-global-library-dialog-width, 100vw);
    block-size: var(--bai-bai-preset-global-library-dialog-height, 100dvh);
    min-height: 0;
    padding: 10px;
    background: color-mix(in srgb, var(--SmartThemeBlurTintColor) 46%, transparent);
    backdrop-filter: blur(2px);
    animation: bai-bai-preset-global-library-layer-in 0.14s ease both;
}

#completion_prompt_manager .bai-bai-preset-global-library-dialog {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(100%, 420px);
    max-height: min(78vh, 560px);
    padding: 12px;
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 8px;
    background: var(--SmartThemeBlurTintColor);
    box-shadow: 0 12px 32px color-mix(in srgb, #000 28%, transparent);
    animation: bai-bai-preset-global-library-dialog-in 0.18s ease both;
}

#completion_prompt_manager .bai-bai-preset-global-library-dialog-head,
#completion_prompt_manager .bai-bai-preset-global-library-dialog-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
}

#completion_prompt_manager .bai-bai-preset-global-library-dialog-head strong {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

#completion_prompt_manager .bai-bai-preset-global-library-dialog-body {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
    overflow: auto;
}

#completion_prompt_manager .bai-bai-preset-global-library-dialog-message {
    line-height: 1.35;
    overflow-wrap: anywhere;
}

#completion_prompt_manager .bai-bai-preset-global-library-dialog-field {
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 0;
}

#completion_prompt_manager .bai-bai-preset-global-library-dialog-field label {
    opacity: 0.78;
    font-size: calc(var(--mainFontSize) * 0.9);
}

#completion_prompt_manager .bai-bai-preset-global-library-dialog-field .text_pole,
#completion_prompt_manager .bai-bai-preset-global-library-dialog-field select {
    width: 100% !important;
    min-width: 0 !important;
}

#completion_prompt_manager .bai-bai-preset-global-library-dialog-field textarea {
    width: 100% !important;
    min-width: 0 !important;
    min-height: 260px;
    resize: vertical;
}

#completion_prompt_manager .bai-bai-preset-global-library-dialog-actions {
    justify-content: flex-end;
}

#completion_prompt_manager .bai-bai-preset-global-library-dialog-button {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex: 0 0 auto !important;
    min-width: 4.8em !important;
    width: auto !important;
    min-height: calc(var(--mainFontSize) * 2) !important;
    padding: 0 12px !important;
    line-height: 1.2 !important;
    white-space: nowrap !important;
    max-width: none !important;
    writing-mode: horizontal-tb !important;
}

#completion_prompt_manager .bai-bai-preset-global-library-dialog-danger {
    color: #d86666 !important;
}

@keyframes bai-bai-preset-global-library-layer-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes bai-bai-preset-global-library-dialog-in {
    from {
        opacity: 0;
        transform: translateY(8px) scale(0.97);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@media (max-width: 600px) {
    #completion_prompt_manager .bai-bai-preset-global-library-dialog-layer {
        position: fixed;
        inset: 0;
        z-index: 50000;
        inline-size: auto;
        block-size: auto;
        min-height: 100dvh;
        padding: 18px;
        background: color-mix(in srgb, var(--SmartThemeBlurTintColor) 60%, transparent);
    }

    #completion_prompt_manager .bai-bai-preset-global-library-dialog {
        width: min(100%, 420px);
        max-height: calc(100dvh - 36px);
    }
}

body.${Rt} #completion_prompt_manager ${S} .bai-bai-preset-group-list-empty {
    min-height: ${BC}px;
}

#completion_prompt_manager ${S} .bai-bai-preset-group.${Ho} {
    border-color: var(--SmartThemeQuoteColor);
    box-shadow: 0 0 0 1px color-mix(in srgb, var(--SmartThemeQuoteColor) 65%, transparent);
}

#completion_prompt_manager ${S} .bai-bai-preset-group.${Ho} .bai-bai-preset-group-header,
#completion_prompt_manager ${S} .bai-bai-preset-group.${Ho} .bai-bai-preset-group-list {
    background-color: color-mix(in srgb, var(--SmartThemeQuoteColor) 12%, transparent);
}

#completion_prompt_manager ${S} .bai-bai-preset-range-selectable {
    cursor: crosshair !important;
}

#completion_prompt_manager ${S} .bai-bai-preset-range-selectable * {
    cursor: crosshair !important;
}

#completion_prompt_manager ${S} .bai-bai-preset-range-selectable .prompt_manager_prompt_controls {
    pointer-events: none;
    opacity: 0.45;
}

#completion_prompt_manager ${S} .bai-bai-preset-range-start,
#completion_prompt_manager ${S} .bai-bai-preset-range-end,
#completion_prompt_manager ${S} .bai-bai-preset-range-inside {
    outline: 2px solid var(--SmartThemeQuoteColor);
    outline-offset: -2px;
}

.${Ds} {
    visibility: hidden !important;
}

.${Re} {
    position: fixed !important;
    box-sizing: border-box !important;
    margin: 0 !important;
    pointer-events: none !important;
    z-index: 50000 !important;
    cursor: grabbing !important;
    opacity: 0.96;
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.35);
    will-change: transform;
}

.${Re} .drag-handle {
    cursor: grabbing !important;
}

.${Re}.completion_prompt_manager_prompt,
.bai-bai-preset-vue-sortable-ghost.completion_prompt_manager_prompt,
.bai-bai-preset-vue-sortable-fallback.completion_prompt_manager_prompt,
.bai-bai-preset-vue-sortable-drag.completion_prompt_manager_prompt {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) max-content max-content !important;
    column-gap: 6px !important;
    align-items: center !important;
    padding-left: 20px !important;
    list-style: none !important;
    list-style-type: none !important;
}

.${Re}.completion_prompt_manager_prompt::marker,
.bai-bai-preset-vue-sortable-ghost.completion_prompt_manager_prompt::marker,
.bai-bai-preset-vue-sortable-fallback.completion_prompt_manager_prompt::marker,
.bai-bai-preset-vue-sortable-drag.completion_prompt_manager_prompt::marker {
    content: "" !important;
    font-size: 0 !important;
}

.${Re} .prompt_manager_prompt_controls,
.bai-bai-preset-vue-sortable-ghost .prompt_manager_prompt_controls,
.bai-bai-preset-vue-sortable-fallback .prompt_manager_prompt_controls,
.bai-bai-preset-vue-sortable-drag .prompt_manager_prompt_controls {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: flex-end !important;
    flex-direction: row !important;
    gap: 4px !important;
    flex-wrap: nowrap !important;
    white-space: nowrap !important;
    min-inline-size: max-content !important;
}

.${Re} .drag-handle,
.bai-bai-preset-vue-sortable-ghost .drag-handle,
.bai-bai-preset-vue-sortable-fallback .drag-handle,
.bai-bai-preset-vue-sortable-drag .drag-handle {
    position: absolute !important;
    left: 0 !important;
    top: 0 !important;
    height: 100% !important;
    padding: 0 5px !important;
    display: flex !important;
    align-items: center !important;
}

.${Re} .completion_prompt_manager_prompt_name,
.bai-bai-preset-vue-sortable-ghost .completion_prompt_manager_prompt_name,
.bai-bai-preset-vue-sortable-fallback .completion_prompt_manager_prompt_name,
.bai-bai-preset-vue-sortable-drag .completion_prompt_manager_prompt_name {
    min-width: 0 !important;
    white-space: nowrap !important;
    overflow: hidden !important;
}

.${Re} .bai-bai-preset-prompt-icon-button,
.${Re} .bai-bai-preset-prompt-action-button,
.bai-bai-preset-vue-sortable-ghost .bai-bai-preset-prompt-icon-button,
.bai-bai-preset-vue-sortable-ghost .bai-bai-preset-prompt-action-button,
.bai-bai-preset-vue-sortable-fallback .bai-bai-preset-prompt-icon-button,
.bai-bai-preset-vue-sortable-fallback .bai-bai-preset-prompt-action-button,
.bai-bai-preset-vue-sortable-drag .bai-bai-preset-prompt-icon-button,
.bai-bai-preset-vue-sortable-drag .bai-bai-preset-prompt-action-button {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex: 0 0 calc(var(--mainFontSize) * 1.65) !important;
    inline-size: calc(var(--mainFontSize) * 1.65) !important;
    block-size: calc(var(--mainFontSize) * 1.65) !important;
    min-inline-size: calc(var(--mainFontSize) * 1.65) !important;
    min-block-size: calc(var(--mainFontSize) * 1.65) !important;
    box-sizing: border-box !important;
    border: 0 !important;
    box-shadow: none !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    font-size: calc(var(--mainFontSize) * 1) !important;
    line-height: 1 !important;
    white-space: nowrap !important;
}

.${Re}.completion_prompt_manager_prompt:not(.completion_prompt_manager_prompt_disabled) .prompt-manager-toggle-action,
.bai-bai-preset-vue-sortable-ghost.completion_prompt_manager_prompt:not(.completion_prompt_manager_prompt_disabled) .prompt-manager-toggle-action,
.bai-bai-preset-vue-sortable-fallback.completion_prompt_manager_prompt:not(.completion_prompt_manager_prompt_disabled) .prompt-manager-toggle-action,
.bai-bai-preset-vue-sortable-drag.completion_prompt_manager_prompt:not(.completion_prompt_manager_prompt_disabled) .prompt-manager-toggle-action {
    color: var(--SmartThemeQuoteColor) !important;
}

.${Re} .prompt_manager_prompt_tokens,
.bai-bai-preset-vue-sortable-ghost .prompt_manager_prompt_tokens,
.bai-bai-preset-vue-sortable-fallback .prompt_manager_prompt_tokens,
.bai-bai-preset-vue-sortable-drag .prompt_manager_prompt_tokens {
    inline-size: max-content !important;
    min-inline-size: 2.2em !important;
    width: auto !important;
    justify-self: end !important;
    text-align: right !important;
    font-size: calc(var(--mainFontSize) * 0.9) !important;
}

.${Re} .bai-bai-preset-prompt-actions,
.bai-bai-preset-vue-sortable-ghost .bai-bai-preset-prompt-actions,
.bai-bai-preset-vue-sortable-fallback .bai-bai-preset-prompt-actions,
.bai-bai-preset-vue-sortable-drag .bai-bai-preset-prompt-actions {
    display: none !important;
    opacity: 0 !important;
}

.${Re} .prompt-manager-remove-action,
.${Re} .prompt-manager-copy-action,
.bai-bai-preset-vue-sortable-ghost .prompt-manager-remove-action,
.bai-bai-preset-vue-sortable-ghost .prompt-manager-copy-action,
.bai-bai-preset-vue-sortable-fallback .prompt-manager-remove-action,
.bai-bai-preset-vue-sortable-fallback .prompt-manager-copy-action,
.bai-bai-preset-vue-sortable-drag .prompt-manager-remove-action,
.bai-bai-preset-vue-sortable-drag .prompt-manager-copy-action {
    display: none !important;
}

.${Re} .bai-bai-preset-prompt-actions-hint,
.${Re} .bai-bai-preset-prompt-actions-hint-hidden,
.bai-bai-preset-vue-sortable-ghost .bai-bai-preset-prompt-actions-hint,
.bai-bai-preset-vue-sortable-ghost .bai-bai-preset-prompt-actions-hint-hidden,
.bai-bai-preset-vue-sortable-fallback .bai-bai-preset-prompt-actions-hint,
.bai-bai-preset-vue-sortable-fallback .bai-bai-preset-prompt-actions-hint-hidden,
.bai-bai-preset-vue-sortable-drag .bai-bai-preset-prompt-actions-hint,
.bai-bai-preset-vue-sortable-drag .bai-bai-preset-prompt-actions-hint-hidden {
    display: inline-flex !important;
}

.${Bu} {
    position: fixed;
    height: 2px;
    border-radius: 999px;
    pointer-events: none;
    z-index: 50001;
    background: var(--SmartThemeQuoteColor);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25), 0 0 10px var(--SmartThemeQuoteColor);
}

.bai-bai-preset-vue-sortable-ghost {
    opacity: 0.35;
}

body.${Rt} #completion_prompt_manager ${S} .bai-bai-preset-vue-sortable-ghost,
body.${Rt} #completion_prompt_manager ${S} .bai-bai-preset-vue-sortable-chosen {
    visibility: hidden !important;
}

.bai-bai-preset-vue-sortable-ghost.bai-bai-preset-group .bai-bai-preset-group-body {
    visibility: hidden !important;
}

.bai-bai-preset-vue-sortable-fallback.bai-bai-preset-group {
    display: flex !important;
    flex-direction: column !important;
    gap: 0 !important;
    box-sizing: border-box !important;
    padding: 0 !important;
    border: 1px solid var(--SmartThemeBorderColor) !important;
    border-radius: 8px !important;
    background: color-mix(in srgb, var(--SmartThemeBlurTintColor) 45%, transparent) !important;
    overflow: hidden !important;
    height: auto !important;
    min-height: 0 !important;
}

.bai-bai-preset-vue-sortable-fallback .bai-bai-preset-group-header {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) auto !important;
    align-items: center !important;
    box-sizing: border-box !important;
    padding: 10px 7px !important;
    border: 0 !important;
    background: color-mix(in srgb, var(--SmartThemeBlurTintColor) 75%, transparent) !important;
    cursor: grabbing !important;
    user-select: none !important;
    -webkit-user-select: none !important;
}

.bai-bai-preset-vue-sortable-fallback .bai-bai-preset-group-title {
    display: flex !important;
    align-items: center !important;
    gap: 4px !important;
    min-width: 0 !important;
    overflow: hidden !important;
    white-space: normal !important;
    font-size: calc(var(--mainFontSize) * 1) !important;
}

.bai-bai-preset-vue-sortable-fallback .bai-bai-preset-group-title-content {
    display: flex !important;
    align-items: flex-end !important;
    flex-wrap: wrap !important;
    gap: 6px !important;
    min-width: 0 !important;
    overflow: hidden !important;
    white-space: normal !important;
}

.bai-bai-preset-vue-sortable-fallback .bai-bai-preset-group-title-content strong {
    flex: 0 1 auto !important;
    min-width: 0 !important;
    overflow: visible !important;
    overflow-wrap: anywhere !important;
    white-space: normal !important;
}

.bai-bai-preset-vue-sortable-fallback .bai-bai-preset-group-actions {
    display: flex !important;
    justify-content: flex-end !important;
    align-items: center !important;
    gap: 3px !important;
}

.bai-bai-preset-vue-sortable-fallback .bai-bai-preset-group-toggle,
.bai-bai-preset-vue-sortable-fallback .bai-bai-preset-group-action-button {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex: 0 0 calc(var(--mainFontSize) * 1.65) !important;
    inline-size: calc(var(--mainFontSize) * 1.65) !important;
    block-size: calc(var(--mainFontSize) * 1.65) !important;
    min-inline-size: calc(var(--mainFontSize) * 1.65) !important;
    min-block-size: calc(var(--mainFontSize) * 1.65) !important;
    box-sizing: border-box !important;
    border: 0 !important;
    box-shadow: none !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    font-size: calc(var(--mainFontSize) * 0.9) !important;
    line-height: 1 !important;
}

.bai-bai-preset-vue-sortable-fallback .bai-bai-preset-group-enable-toggle {
    font-size: calc(var(--mainFontSize) * 1.05) !important;
}

.bai-bai-preset-vue-sortable-fallback .bai-bai-preset-group-count {
    flex: 0 0 auto !important;
    opacity: 0.65 !important;
    font-size: calc(var(--mainFontSize) * 0.82) !important;
    white-space: nowrap !important;
}

.bai-bai-preset-vue-sortable-fallback.bai-bai-preset-group .bai-bai-preset-group-body {
    display: none !important;
}

.bai-bai-preset-vue-sortable-chosen,
.bai-bai-preset-vue-sortable-drag {
    cursor: grabbing !important;
}

body.${Rt} #completion_prompt_manager ${S} .bai-bai-preset-vue-sortable-chosen,
#completion_prompt_manager ${S} .${Rr} {
    outline: 2px solid color-mix(in srgb, var(--SmartThemeQuoteColor) 75%, transparent) !important;
    outline-offset: -2px !important;
    box-shadow: 0 0 0 1px color-mix(in srgb, var(--SmartThemeQuoteColor) 35%, transparent) !important;
}

body.${Rt} #completion_prompt_manager ${S} .bai-bai-preset-vue-sortable-chosen.bai-bai-preset-group .bai-bai-preset-group-header,
body.${Rt} #completion_prompt_manager ${S} li.completion_prompt_manager_prompt.bai-bai-preset-vue-sortable-chosen,
#completion_prompt_manager ${S} .${Rr}.bai-bai-preset-group .bai-bai-preset-group-header,
#completion_prompt_manager ${S} li.completion_prompt_manager_prompt.${Rr} {
    background: color-mix(in srgb, var(--SmartThemeQuoteColor) 18%, transparent) !important;
}

@media (pointer: coarse) {
    body.${Rt} #completion_prompt_manager ${S} .bai-bai-preset-vue-sortable-chosen,
    #completion_prompt_manager ${S} .${Rr} {
        transform: scale(0.995);
        transition: transform 120ms ease, outline-color 120ms ease, box-shadow 120ms ease;
    }
}
`;if(e){e.textContent=t;return}const n=document.createElement("style");n.id=sc,n.textContent=t,document.head.append(n)}function ya(){const e=m;if(!e||typeof e.makeDraggable!="function")return!1;const t=f[Sl];if(t?.manager===e&&e.makeDraggable===t.patched)return!0;if(e.makeDraggable.__baiBaiToolkitPresetDragPatched)return f[Sl]={manager:e,original:e.makeDraggable.__baiBaiToolkitOriginalMakeDraggable,patched:e.makeDraggable},!0;const n=e.makeDraggable,r=function(...o){if(br()){const i=this?.listElement instanceof HTMLElement?this.listElement:document.querySelector(S);Fu(i),tt(i);return}if(!N.presetDragOptimizationEnabled)return n.apply(this,o);const a=this?.listElement instanceof HTMLElement?this.listElement:document.querySelector(S);tt(a)};return r.__baiBaiToolkitPresetDragPatched=!0,r.__baiBaiToolkitOriginalMakeDraggable=n,e.makeDraggable=r,f[Sl]={manager:e,original:n,patched:r},!0}function Gu(){if(!(!m||typeof m.makeDraggable!="function"))try{m.makeDraggable()}catch(e){console.debug(`${D} Failed to restore prompt manager sorting`,e)}}function tt(e=document.querySelector(S),{signature:t=""}={}){if(!(e instanceof HTMLElement))return!1;if(!N.presetDragOptimizationEnabled&&!se())return e.classList.remove(jt,ir),!1;const n=x(),r=t||"";return r&&n.dragPreparedList===e&&n.dragPreparedSignature===r&&e.classList.contains(jt)||(Fu(e),e.classList.add(jt),OA(e),e.querySelectorAll("li.completion_prompt_manager_prompt .drag-handle").forEach(o=>o.classList.add("ui-sortable-handle")),n.dragPreparedList=e,n.dragPreparedSignature=r),!0}function Km(e){const t=getComputedStyle(e),n=t.rowGap&&t.rowGap!=="normal"?t.rowGap:t.gap;return n&&n!=="normal"?n:""}function kl(e,t){e instanceof HTMLElement&&(t?e.style.setProperty(Kt,t):e.style.removeProperty(Kt))}function OA(e){if(!(e instanceof HTMLElement))return;const t=x();if(t.cachedListGapList===e&&t.cachedListGap!==null){kl(e,t.cachedListGap);return}if(t.listGapReadFrame!==null||typeof requestAnimationFrame!="function"){if(typeof requestAnimationFrame!="function"){const n=Km(e);t.cachedListGap=n,t.cachedListGapList=e,kl(e,n)}return}t.listGapReadFrame=requestAnimationFrame(()=>{if(t.listGapReadFrame=null,!(e instanceof HTMLElement)||!e.isConnected)return;const n=Km(e);t.cachedListGap=n,t.cachedListGapList=e,kl(e,n)})}function hh(){const e=x();e.cachedListGap=null,e.cachedListGapList=null,e.listGapReadFrame!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e.listGapReadFrame),e.listGapReadFrame=null}function _h(){const e=document.querySelector(S);e instanceof HTMLElement&&(e.classList.remove(jt,ir),hh())}function Fu(e){if(!(!(e instanceof HTMLElement)||typeof globalThis.jQuery?.fn?.sortable!="function"))try{const t=$(e);t.sortable("instance")!==void 0&&t.sortable("destroy")}catch(t){console.debug(`${D} Failed to disable stock prompt manager sorting`,t)}}async function Gs(){if(!se())return;const e=x();if(e.enabled=!0,wh(),Vu(),ya(),Hr(),JP(),e.installing)return e.installing;e.installing=(async()=>{if(!BA()){vc(250);return}if(e.app&&e.host?.isConnected&&e.root?.isConnected){Ie(),tt(e.root,{signature:e.lastStructureSignature});return}e.app&&Eh(e);const t=Ye()??Th();if(!(t instanceof HTMLElement)){vc(250);return}const{host:n,listClassName:r}=$A(t),o=await Sh(),a=await DA();e.vue=o,e.vueDraggableNext=a,e.host=n,e.state=o.reactive(KA()),e.state.listClassName=r,e.app=o.createApp(aP(o,a,e.state)),e.app.mount(n),e.root=n.querySelector(S),e.root instanceof HTMLElement&&m&&(m.listElement=e.root),Ie(),tt(e.root,{signature:e.lastStructureSignature}),Dn().catch(i=>{console.debug(`${D} Failed to load preset global prompt library`,i)})})();try{await e.installing}catch(t){console.debug(`${D} Failed to install preset Vue prompt list manager`,t),toastr.error(d`Failed to install preset prompt list manager. See console for details.`),yh()}finally{e.installing=null}}function yh({skipRestore:e=!1}={}){const t=x(),n=!e&&!!(t.app||t.host?.isConnected||document.querySelector(`.${Ls}`));t.enabled=!1,clearTimeout(t.syncTimer),t.syncTimer=null,mo(t),$i(!1),document.body?.classList.remove(Rt),N.presetSwitchOptimizationEnabled||xh(),ZP(),Eh(t),t.installing=null,document.getElementById(sc)?.remove(),n&&HA()}function Eh(e=x()){if(mo(e),$i(!1),JA(e),e.app)try{e.app.unmount()}catch(t){console.debug(`${D} Failed to unmount preset Vue prompt list manager`,t)}e.app=null,e.state=null,e.root=null,e.dragSnapshot=null,Di(e),e.currentTopLevelDropIndex=null,e.currentDropTargetGroupId=null,e.draggedPromptId=null,lr(e,{suppress:!1}),An(e),e.groupHeaderGesture=null,e.groupHeaderCustomDrag=null,e.lastGroupHeaderToggleAt=0,e.lastGroupHeaderGestureCanceledAt=0,e.lastDragStartedAt=0,e.lastDragEndedAt=0,e.lastSyncSignature="",e.lastStructureSignature="",e.lastRenderPatchSyncCycle=0,e.dragPreparedList=null,e.dragPreparedSignature="",hh()}function x(){return(!f[$a]||typeof f[$a]!="object")&&(f[$a]={app:null,host:null,root:null,state:null,vue:null,vueDraggableNext:null,modulePromise:null,draggableModulePromise:null,installing:null,syncTimer:null,saveTimer:null,saveFrame:null,pendingOrderSave:!1,dragSnapshot:null,pendingServiceSettingsSave:!1,pendingGroupSettingsSave:!1,pendingChangesSavePromise:null,pendingChangesSaveInFlight:!1,pendingPresetPromptServiceSaves:null,pendingPresetPromptGroupSaves:null,pendingOpenAiPresetSaves:null,presetPromptSaveRevisions:null,nextPresetPromptSaveRevision:0,openAiPresetSaveRequestStates:null,pendingVisibilityTimer:null,pendingVisibilityObserver:null,groupBodyUnmountTimers:null,globalLibraryCollapsed:!0,globalLibraryItems:[],globalLibraryGroups:[],globalLibrarySelecting:!1,globalLibrarySelectedIds:null,globalLibraryLoaded:!1,globalLibraryLoading:!1,globalLibraryError:null,globalLibraryLoadPromise:null,globalLibrarySavePromise:null,globalLibraryBridgePromise:null,dragReadyFeedbackTimer:null,dragReadyFeedbackElement:null,dragReadyFeedbackNotified:!1,currentDropTargetGroupId:null,currentDropTargetElement:null,currentTopLevelDropIndex:null,draggedPromptId:null,draggedItem:null,dragPlacement:null,dragIndicatorElement:null,dragIndicatorRectKey:null,dragPlacementFrame:null,dragLayoutCache:null,dragScrollContainer:null,dragAutoScrollFrame:null,lastDragPoint:null,groupHeaderGesture:null,groupHeaderCustomDrag:null,lastGroupHeaderToggleAt:0,lastGroupHeaderGestureCanceledAt:0,lastDragStartedAt:0,lastDragEndedAt:0,enabled:!1,lastSyncSignature:"",lastStructureSignature:"",lastRenderPatchSyncCycle:0,dragPreparedList:null,dragPreparedSignature:"",cachedListGap:null,cachedListGapList:null,listGapReadFrame:null,bodyHeightAnimations:[],bodyHeightTransitionCycle:0}),f[$a]}function br(){const e=x();return!!(e.app&&e.state)}function zu(){return!!x().state?.dragging}function BA(){return!!(m&&m.serviceSettings&&typeof m.getPromptOrderForCharacter=="function"&&typeof m.removePromptOrderForCharacter=="function"&&typeof m.addPromptOrderForCharacter=="function"&&typeof m.saveServiceSettings=="function"&&(Ye()instanceof HTMLElement||vh()instanceof HTMLElement))}function vc(e=80){if(!se())return;const t=x();clearTimeout(t.syncTimer),t.syncTimer=setTimeout(()=>{t.syncTimer=null,Gs()},e)}async function Sh(){const e=x();return e.modulePromise||(e.modulePromise=ht(()=>import("./vue.runtime.esm-bundler.GI5_MaGP.chunk.js"),__vite__mapDeps([0,1]))),e.modulePromise}async function DA(){const e=x();return e.draggableModulePromise||(e.draggableModulePromise=ht(()=>import("./vue-draggable-next.esm-bundler.DMkWxeed.chunk.js"),__vite__mapDeps([2,1]))),e.draggableModulePromise}function Ye(){const e=x();if(e.root instanceof HTMLElement&&e.root.isConnected)return e.root;if(m?.listElement instanceof HTMLElement&&m.listElement.isConnected)return m.listElement;const t=document.querySelector(S);return t instanceof HTMLElement&&m&&(m.listElement=t),t}function vh(){const e=x();if(e.host instanceof HTMLElement&&e.host.isConnected)return e.host;const t=document.querySelector(`.${Ls}`);return t instanceof HTMLElement?t:null}function $A(e){const t=document.createElement("div");return t.className=Ls,e.replaceWith(t),{host:t,listClassName:NA(e)}}function NA(e){const t=new Set(String(e?.className||"text_pole").split(/\s+/).filter(Boolean));return t.add("text_pole"),t.add(jt),Array.from(t).join(" ")}function Th(){const e=x();if(e.root instanceof HTMLElement&&e.root.isConnected)return e.root;const t=vh();if(t instanceof HTMLElement){const n=t.querySelector(S);if(n instanceof HTMLElement)return e.host=t,e.root=n,m&&(m.listElement=n),n;const r=document.createElement("ul");return r.id=S.slice(1),r.className="text_pole",t.replaceWith(r),e.host=null,e.root=r,m&&(m.listElement=r),r}return Ye()}async function HA(){const e=Th();if(!(!(e instanceof HTMLElement)||!m||typeof m.renderPromptManagerListItems!="function")){e.replaceChildren();try{await m.renderPromptManagerListItems(),GA()}catch(t){console.debug(`${D} Failed to restore prompt manager list after Vue remove`,t)}}}function GA(){if(se())return;const e=Ye();if(N.presetDragOptimizationEnabled){ya(),bh(),tt(e);return}Bi(),_h(),Gu()}function Vu(){if(!m||typeof m.renderPromptManagerListItems!="function")return!1;const e=f[No];if(e?.manager===m&&m.renderPromptManagerListItems===e.patched)return!0;if(m.renderPromptManagerListItems.__baiBaiToolkitPresetVueListPatched)return f[No]={manager:m,original:m.renderPromptManagerListItems.__baiBaiToolkitOriginalRenderPromptManagerListItems,patched:m.renderPromptManagerListItems},!0;const t=m.renderPromptManagerListItems,n=async function(...r){if(!se()){if(N.presetSwitchOptimizationEnabled&&Gn()){await Y_(),Z_();return}return t.apply(this,r)}await Gs(),Ie();const o=x();o.lastRenderPatchSyncCycle=f.presetPromptManagerFastRenderCycle||0,tt(Ye(),{signature:o.lastStructureSignature})};return n.__baiBaiToolkitPresetVueListPatched=!0,n.__baiBaiToolkitOriginalRenderPromptManagerListItems=t,m.renderPromptManagerListItems=n,f[No]={manager:m,original:t,patched:n},!0}function xh(){const e=f[No];e&&(e.manager?.renderPromptManagerListItems===e.patched&&(e.manager.renderPromptManagerListItems=e.original),delete f[No])}function wh(){if(!m||typeof m.getPromptCollection!="function"||typeof m.isPromptDisabledForActiveCharacter!="function")return!1;const e=f[Ot];if(e?.manager===m&&m.getPromptCollection===e.patchedGetPromptCollection&&m.isPromptDisabledForActiveCharacter===e.patchedIsPromptDisabledForActiveCharacter)return!0;if(m.getPromptCollection[Ot]&&m.isPromptDisabledForActiveCharacter[Ot])return f[Ot]={manager:m,originalGetPromptCollection:m.getPromptCollection.__baiBaiToolkitOriginalGetPromptCollection,patchedGetPromptCollection:m.getPromptCollection,originalIsPromptDisabledForActiveCharacter:m.isPromptDisabledForActiveCharacter.__baiBaiToolkitOriginalIsPromptDisabledForActiveCharacter,patchedIsPromptDisabledForActiveCharacter:m.isPromptDisabledForActiveCharacter},!0;const t=m.getPromptCollection,n=m.isPromptDisabledForActiveCharacter,r=function(...a){if(!se())return t.apply(this,a);const i=Ch();if(!i.size)return t.apply(this,a);const s=VA(this,i);try{const l=t.apply(this,a);return WA(l,i),l}finally{UA(s)}},o=function(...a){const i=n.apply(this,a);return i||!se()?i:zA(a[0])};return r[Ot]=!0,r.__baiBaiToolkitOriginalGetPromptCollection=t,o[Ot]=!0,o.__baiBaiToolkitOriginalIsPromptDisabledForActiveCharacter=n,m.getPromptCollection=r,m.isPromptDisabledForActiveCharacter=o,f[Ot]={manager:m,originalGetPromptCollection:t,patchedGetPromptCollection:r,originalIsPromptDisabledForActiveCharacter:n,patchedIsPromptDisabledForActiveCharacter:o},!0}function FA(){const e=f[Ot];e&&(e.manager?.getPromptCollection===e.patchedGetPromptCollection&&(e.manager.getPromptCollection=e.originalGetPromptCollection),e.manager?.isPromptDisabledForActiveCharacter===e.patchedIsPromptDisabledForActiveCharacter&&(e.manager.isPromptDisabledForActiveCharacter=e.originalIsPromptDisabledForActiveCharacter),delete f[Ot])}function Ch(e=Ge()){if(!se()||!e.length)return new Set;const t=new Set(e),n=He();nt(n,t);const r=new Set(n.groups.filter(a=>a?.enabled===!1).map(a=>a.id));if(!r.size)return new Set;const o=new Set;for(const[a,i]of Object.entries(n.prompts??{}))t.size&&!t.has(a)||r.has(i?.groupId)&&o.add(a);return o}function zA(e){return e?Ch().has(String(e)):!1}function VA(e,t){const n=typeof e?.getPromptOrderForCharacter=="function"?e.getPromptOrderForCharacter(e.activeCharacter):[],r=[];for(const o of n??[])!o?.identifier||!t.has(o.identifier)||o.enabled===!1||(r.push({entry:o,enabled:o.enabled}),o.enabled=!1);return r}function UA(e){for(const t of e??[])t?.entry&&(t.entry.enabled=t.enabled)}function WA(e,t){if(!e||typeof e.add!="function"||e.add[Ot])return e;const n=e.add,r=function(...o){const a=o.filter(i=>!i?.identifier||!t.has(i.identifier));if(a.length)return n.apply(this,a)};return r[Ot]=!0,r.__baiBaiToolkitOriginalPromptCollectionAdd=n,e.add=r,e}function KA(){return{globalLibrary:null,items:[],listClassName:`text_pole ${jt}`,renderKey:0,reclaimKey:0,mountedGroupBodies:{},dragging:!1,rangeSelection:{active:!1,name:"",startId:null,endId:null,hoverId:null}}}function Ie(){const e=x();if(!e.state)return!1;ZA(),eP(),ld({persist:!1});const{renderSignature:t,structureSignature:n}=kh(e);return t&&e.lastSyncSignature===t?(Yu(e.state),e.lastStructureSignature=n,!0):(nP(e.state),e.state.items=oP(),YA(e.state),e.lastSyncSignature=t,e.lastStructureSignature=n,!0)}function Uu(){const e=x();if(!e.state)return!1;const{renderSignature:t,structureSignature:n}=kh(e);return e.lastSyncSignature=t,e.lastStructureSignature=n,!0}function jA(){const e=x();e.state&&(e.lastSyncSignature="",Ie())}function kh(e=x()){const t=m?.getPromptOrderForCharacter?.(m.activeCharacter)??[],n=Array.isArray(m?.serviceSettings?.prompts)?m.serviceSettings.prompts.filter(Boolean):[],r=new Map(n.map(y=>[y.identifier,y])),o=He(),a=va(t.map(y=>y?.identifier).filter(Boolean)),i=m?.configuration?.toggleDisabled??[],s=Array.isArray(m?.overriddenPrompts)?m.overriddenPrompts:[],l=t.map((y,k)=>{const P=r.get(y?.identifier);return[k,y?.identifier||"",y?.enabled===!1?0:1,P?.name||"",P?.role||"",P?.marker?1:0,P?.system_prompt?1:0,P?.forbid_overrides?1:0,P?.injection_position??"",P?.injection_depth??""].join(":")}),c=JSON.stringify({groups:o.groups??[],prompts:o.prompts??{}}),u=JSON.stringify(a),p=JSON.stringify({collapsed:!!e.globalLibraryCollapsed,loading:!!e.globalLibraryLoading,loaded:!!e.globalLibraryLoaded,error:e.globalLibraryError?String(e.globalLibraryError):"",groups:Vs(e.globalLibraryGroups).map(y=>[y.id||"",y.name||"",y.collapsed?1:0]),items:Sa(e.globalLibraryItems).map(y=>[y.id||"",y.name||"",y.groupId||"",qr(String(y.content??""))])}),b=qr([l.join("|"),c,u,p,Array.from(i).join("|"),s.join("|")].join("||"));return{renderSignature:b,structureSignature:b}}function Ah(){const e=x();return e.state?(e.state.renderKey+=1,!0):!1}function vt(){return N.presetVueDragLocked===!0}function qA(){const e=!vt();N.presetVueDragLocked=e,e&&(Ln(),Qt({cancelled:!0}),lr(x()),po(x().state,!1),x().dragSnapshot=null),Ah(),typeof kn=="function"&&kn()}function YA(e){if(!e||!Array.isArray(e.items))return;(!e.mountedGroupBodies||typeof e.mountedGroupBodies!="object")&&(e.mountedGroupBodies={});const t=x(),n=new Set,r=[e.globalLibrary,...e.items].filter(Boolean);for(const o of r){const a=Wu(o);if(a){if(n.add(a),!o.collapsed){sr(t,a),e.mountedGroupBodies[a]=!0;continue}XA(t,a)||delete e.mountedGroupBodies[a]}}for(const o of Object.keys(e.mountedGroupBodies))n.has(o)||(delete e.mountedGroupBodies[o],sr(t,o))}function Wu(e){return e?.type==="group"&&e.groupId?e.groupId:e?.type==="favorites"?Rs:e?.type==="global-library"?Is:null}function QA(e=x()){return e.groupBodyUnmountTimers instanceof Map||(e.groupBodyUnmountTimers=new Map),e.groupBodyUnmountTimers}function XA(e,t){return e.groupBodyUnmountTimers instanceof Map&&e.groupBodyUnmountTimers.has(t)}function sr(e,t){if(!(e.groupBodyUnmountTimers instanceof Map))return;const n=e.groupBodyUnmountTimers.get(t);n&&clearTimeout(n),e.groupBodyUnmountTimers.delete(t)}function JA(e=x()){if(e.groupBodyUnmountTimers instanceof Map){for(const t of e.groupBodyUnmountTimers.values())clearTimeout(t);e.groupBodyUnmountTimers.clear()}}function Fs(e,t,n){if(!(!e||!t)){if((!e.mountedGroupBodies||typeof e.mountedGroupBodies!="object")&&(e.mountedGroupBodies={}),n){e.mountedGroupBodies[t]=!0;return}delete e.mountedGroupBodies[t]}}function Ku(e,t,n){if(typeof n=="function")return n()}function ju(e,t){const n=Wu(t);return n?t.collapsed?!!e?.mountedGroupBodies?.[n]:!0:!1}function qu(e){const t=x(),n=t.state;if(!n||!e)return;sr(t,e);const r=setTimeout(()=>{sr(t,e);const o=[n.globalLibrary,...n.items??[]].find(a=>Wu(a)===e);(!o||o.collapsed)&&Fs(n,e,!1)},Bo);QA(t).set(e,r)}function ZA(){if(!xa())return!1;const e=m.getPromptOrderForCharacter(m.activeCharacter)??[],t=new Set,n=[];let r=!1;for(const o of e){const a=o?.identifier;if(!a){r=!0;continue}if(t.has(a)){r=!0;continue}t.add(a),n.push(o)}return r?(m.removePromptOrderForCharacter(m.activeCharacter),m.addPromptOrderForCharacter(m.activeCharacter,n),Hn(),!0):!1}function eP(){if(!xa())return!1;const e=He(),t=new Set((m.getPromptOrderForCharacter(m.activeCharacter)??[]).map(o=>o?.identifier).filter(Boolean)),n=JSON.stringify({groups:e.groups,prompts:e.prompts});nt(e,t);const r=JSON.stringify({groups:e.groups,prompts:e.prompts});return n===r?!1:(mt(),!0)}function uo(e=x()){return e.globalLibrarySelectedIds instanceof Set||(e.globalLibrarySelectedIds=new Set),e.globalLibrarySelectedIds}function tP(){const e=x(),t=Sa(e.globalLibraryItems),n=Vs(e.globalLibraryGroups),r=new Set(n.map(u=>u.id)),o=uo(e),a=!!e.globalLibrarySelecting,i=[],s=new Map(n.map(u=>[u.id,[]]));let l=0;for(const u of t){const p=u.groupId&&r.has(u.groupId)?u.groupId:null,b=o.has(u.id),v={id:u.id,name:u.name,content:u.content,groupId:p,type:"global-library-prompt",selecting:a,selected:b};b&&(l+=1),p?s.get(p)?.push(v):i.push(v)}const c=n.map(u=>{const p=s.get(u.id)??[];return{id:`global-library-group:${u.id}`,type:"global-library-group",groupId:u.id,name:u.name,collapsed:!!u.collapsed,count:p.length,children:p}});return{id:Is,type:"global-library",count:t.length,selecting:a,selectedCount:l,collapsed:!!e.globalLibraryCollapsed,loading:!!e.globalLibraryLoading,error:e.globalLibraryError?String(e.globalLibraryError):"",hasGroups:c.length>0,ungrouped:i,groups:c}}function nP(e){if(!e)return;const t=tP();if(!e.globalLibrary){e.globalLibrary=t;return}const n=e.globalLibrary;n.id=t.id,n.type=t.type,n.count=t.count,n.selecting=t.selecting,n.selectedCount=t.selectedCount,n.collapsed=t.collapsed,n.loading=t.loading,n.error=t.error,n.hasGroups=t.hasGroups,n.ungrouped=Ph(n.ungrouped,t.ungrouped),n.groups=rP(n.groups,t.groups)}function Ph(e,t){const n=new Map((Array.isArray(e)?e:[]).filter(o=>o?.id).map(o=>[o.id,o])),r=t.map(o=>{const a=n.get(o.id);return a?(a.name=o.name,a.content=o.content,a.groupId=o.groupId,a.type=o.type,a.selecting=o.selecting,a.selected=o.selected,a):o});return Array.isArray(e)?(e.splice(0,e.length,...r),e):r}function rP(e,t){const n=new Map((Array.isArray(e)?e:[]).filter(o=>o?.groupId).map(o=>[o.groupId,o])),r=t.map(o=>{const a=n.get(o.groupId);return a?(a.id=o.id,a.type=o.type,a.groupId=o.groupId,a.name=o.name,a.collapsed=o.collapsed,a.count=o.count,a.children=Ph(a.children,o.children),a):o});return Array.isArray(e)?(e.splice(0,e.length,...r),e):r}function Yu(e=x().state){const t=e?.globalLibrary;if(!t)return!1;const n=x(),r=uo(n),o=!!n.globalLibrarySelecting;let a=0;const i=s=>{if(!s?.id)return;const l=r.has(s.id);s.selecting=o,s.selected=l,l&&(a+=1)};for(const s of t.ungrouped??[])i(s);for(const s of t.groups??[])for(const l of s.children??[])i(l);return t.selecting=o,t.selectedCount=a,!0}function oP(){const e=m.getPromptOrderForCharacter?.(m.activeCharacter)??[],t=e.map(k=>k?.identifier).filter(Boolean),n=Array.isArray(m.serviceSettings?.prompts)?m.serviceSettings.prompts.filter(Boolean):[],r=new Map(n.map(k=>[k.identifier,k])),o=He();nt(o,new Set(t));const a=new Map(o.groups.map(k=>[k.id,k])),i=va(t),s=new Set(i.promptIds),l=m.tokenHandler?.getCounts?.()??{},c=m.serviceSettings.openai_max_context-m.serviceSettings.openai_max_tokens,u=m.tokenUsage>c*.8,p=e.map((k,P)=>{const E=r.get(k?.identifier);if(!E?.identifier)return null;const K=m.getPromptOrderEntry?.(m.activeCharacter,E.identifier)??k,X=o.prompts?.[E.identifier]?.groupId,B=a.get(X)??null,V=l[E.identifier]??0,{warningClass:ee,warningTitle:I}=Ad({prompt:E,tokens:V,isTokenUsageWarning:u});return{id:E.identifier,type:"prompt",groupId:B?.id??null,prompt:E,orderEntry:K,enabled:K?.enabled!==!1,favorite:s.has(E.identifier),tokens:V,calculatedTokens:V?String(V):"-",warningClass:ee,warningTitle:I,index:P}}).filter(Boolean),b=p.filter(k=>k.favorite).map(k=>({...k,favoriteMirror:!0})),v=[{id:LC,type:"header"},{id:IC,type:"separator"}];b.length>0&&v.push({id:Rs,type:"favorites",count:b.length,collapsed:!!i.collapsed,children:b});const y=new Map;for(const k of p){if(k.groupId){const P=a.get(k.groupId);let E=y.get(k.groupId);E||(E={id:`group:${k.groupId}`,type:"group",groupId:k.groupId,group:P,name:P?.name??d`未命名分组`,collapsed:!!P?.collapsed,enabled:P?.enabled!==!1,count:0,children:[]},y.set(k.groupId,E),v.push(E)),E.children.push(k),E.count=E.children.length;continue}v.push(k)}return v}function aP(e,t,n){const{h:r}=e;return{name:"BaiBaiPresetPromptListRoot",render(){return[Kh(r,t,n.globalLibrary,{outsideList:!0}),lP(r,t,n)]}}}function iP(e,t){const n=m?.configuration?.prefix??"",r=!!t?.rangeSelection?.active,o=vt();return e("li",{class:`${n}prompt_manager_list_head`,key:"header"},[e("span",{class:ih,title:gc},J_(Pd())),e("span",{class:"bai-bai-preset-list-head-actions"},[r?e("span",{class:"menu_button fa-solid fa-xmark",title:d`取消分组选择`,onClick:a=>{a.preventDefault(),a.stopPropagation(),wc(t)}}):e("span",{class:"menu_button fa-solid fa-folder-plus",title:d`创建预设分组`,onClick:a=>{a.preventDefault(),a.stopPropagation(),s_(t)}}),e("span",{class:["menu_button","fa-solid",o?"fa-lock":"fa-lock-open","bai-bai-preset-drag-lock-toggle",o?"bai-bai-preset-drag-lock-toggle-active":""],title:o?d`解锁预设拖拽`:d`锁定预设拖拽`,"aria-pressed":o?"true":"false",onClick:a=>{a.preventDefault(),a.stopPropagation(),qA()}})])])}function sP(e){const t=m?.configuration?.prefix??"";return e("li",{class:`${t}prompt_manager_list_separator`,key:"separator"},[e("hr")])}function lP(e,t,n){const r=rd(),o=vt(),a=!!n?.rangeSelection?.active,i=o||a,s={tag:"ul",id:S.slice(1),class:[n.listClassName,o?"bai-bai-preset-drag-locked":""],list:n.items,group:{name:"bai-bai-preset-prompts",pull:!i,put:i?!1:pP},draggable:PC,filter:Os,preventOnFilter:!1,sort:!1,disabled:i,animation:0,emptyInsertThreshold:ba,dragoverBubble:!1,bubbleScroll:!1,forceFallback:!0,fallbackOnBody:!0,fallbackClass:"bai-bai-preset-vue-sortable-fallback",ghostClass:"bai-bai-preset-vue-sortable-ghost",chosenClass:"bai-bai-preset-vue-sortable-chosen",dragClass:"bai-bai-preset-vue-sortable-drag",move:cP,onChoose:()=>{be()},key:`draggable-${n.renderKey}`,onStart:l=>Lh(n,l),onEnd:l=>{const c=x();c.lastDragEndedAt=Date.now();const u=Qu(n,l);po(n,!1),c.draggedPromptId=null,c.draggedItem=null,c.currentDropTargetGroupId=null,c.currentTopLevelDropIndex=null;const p=Xu(n);(u||p)&&md()}};return nd(s),r&&(s.handle=r),e(t.VueDraggableNext,s,{default:()=>n.items.map(l=>RP(e,t,l))})}function cP(e,t){const n=x();if(vt()||n.state?.rangeSelection?.active)return un(n),!1;const r=n.draggedItem??e?.draggedContext?.element;return r?.type!=="prompt"&&r?.type!=="group"?(un(n),!1):(Jn(t??e?.originalEvent??e),!1)}function uP(e,t){const n=x();return vt()||n.state?.rangeSelection?.active||(n.draggedItem??e?.draggedContext?.element)?.type!=="prompt"?(un(n),!1):(Jn(t??e?.originalEvent??e),!1)}function dP(e,t,n){return vt()?!1:n instanceof HTMLElement&&n.matches("li.completion_prompt_manager_prompt_draggable")}function pP(e,t,n){return vt()||!(e instanceof HTMLElement)||e.id!==S.slice(1)||!(n instanceof HTMLElement)?!1:n.matches("li.completion_prompt_manager_prompt_draggable")||n.matches(`li.${ga}`)}function mP(e){const t=x();if((t.currentDropTargetElement instanceof HTMLElement?t.currentDropTargetElement:null)===e){t.currentDropTargetGroupId=e instanceof HTMLElement&&e.dataset.presetGroupId||null;return}na(),e instanceof HTMLElement&&(e.classList.add(Ho),t.currentDropTargetElement=e,t.currentDropTargetGroupId=e.dataset.presetGroupId||null)}function na(){const e=x();e.currentDropTargetGroupId=null,e.currentDropTargetElement instanceof HTMLElement&&(e.currentDropTargetElement.classList.remove(Ho),e.currentDropTargetElement=null)}function Lh(e,t){return Ih(e,fP(t),t?.originalEvent??t)}function Ih(e,t,n){const r=x(),o=Ye();return vt()||!e||!t?!1:(r.groupHeaderGesture=null,r.currentTopLevelDropIndex=null,r.currentDropTargetGroupId=null,r.currentDropTargetElement=null,r.draggedItem=t,r.draggedPromptId=r.draggedItem?.type==="prompt"?r.draggedItem.id:null,r.dragLayoutCache=Bh(e,r.draggedItem),r.dragScrollContainer=o instanceof HTMLElement?G_(o):document.scrollingElement,r.lastDragStartedAt=Date.now(),QP(r,{notify:!1}),po(e,!0),Yh(),IP(e),gP(r),Jn(n),!0)}function Qu(e,t=null){const n=x(),r=In(t?.originalEvent??t);r&&(n.lastDragPoint=r,Oh(e,r));const o=n.dragPlacement,a=CP(e,o);return Di(n),a}function fP(e){const t=e?.item,n=e?.draggedContext?.element;if(t instanceof HTMLElement){if(t.classList.contains("bai-bai-preset-group")&&t.dataset.presetGroupId)return{type:"group",id:t.dataset.presetGroupId};if(t.dataset.pmIdentifier)return{type:"prompt",id:t.dataset.pmIdentifier}}return n?.type==="group"&&n.groupId?{type:"group",id:n.groupId}:n?.type==="prompt"&&n.id?{type:"prompt",id:n.id}:null}function gP(e=x()){Rh();const t=o=>Jn(o),n=o=>{e.draggedItem&&Jn(o)},r=o=>Jn(o);document.addEventListener("pointermove",t,!0),document.addEventListener("mousemove",n,!0),document.addEventListener("touchmove",r,{capture:!0,passive:!0}),f[lc]={pointermove:t,mousemove:n,touchmove:r}}function Rh(){const e=f[lc];e&&(document.removeEventListener("pointermove",e.pointermove,!0),document.removeEventListener("mousemove",e.mousemove,!0),document.removeEventListener("touchmove",e.touchmove,!0),delete f[lc])}function Jn(e){const t=In(e),n=x();return t?(n.lastDragPoint=t,Mh(n),!0):!1}function Mh(e=x()){e.dragPlacementFrame||(e.dragPlacementFrame=requestAnimationFrame(()=>{e.dragPlacementFrame=null,Oh(e.state,e.lastDragPoint),Hh(e)}))}function Oh(e,t){const n=x(),r=n.draggedItem;if(!e||!t||!r)return un(n),!1;const o=bP(e,r,t);return o?(n.dragPlacement=o,n.currentTopLevelDropIndex=o.targetType==="top-level"?o.index:null,o.targetType==="group"?mP(o.groupElement):na(),TP(n,o),!0):(un(n),!1)}function bP(e,t,n){const r=yP(e,t);if(!r)return null;if(t.type==="prompt"){const o=hP(e,t,n,r);if(o)return o}return _P(e,t,n,r)}function hP(e,t,n,r){const o=EP(r,n),a=o?.groupElement,i=o?.groupId??null;if(!i||!(a instanceof HTMLElement)||!Fh(e,i))return null;const l=$h(o,n);return{targetType:"group",groupId:i,groupElement:a,containerElement:o.containerElement,containerRect:o.containerRect,children:o.children,index:l,indicatorRect:Nh(o,l),draggedItem:t}}function _P(e,t,n,r){const o=r?.topLevel;if(!o)return null;const a=o.containerRect,i=ba;if(n.clientX<a.left-i||n.clientX>a.right+i||n.clientY<a.top-i||n.clientY>a.bottom+i)return null;const s=$h(o,n,{minIndex:Uh(e)});return{targetType:"top-level",containerElement:o.containerElement,containerRect:o.containerRect,children:o.children,index:s,indicatorRect:Nh(o,s),draggedItem:t}}function yP(e,t){const n=x(),r=n.dragLayoutCache;return r&&r.draggedItem?.type===t?.type&&r.draggedItem?.id===t?.id&&Dh(r)===r.scrollSignature?r:(n.dragLayoutCache=Bh(e,t),n.dragLayoutCache)}function Bh(e,t){if(!e||!t)return null;const n=Ye();if(!(n instanceof HTMLElement))return null;const r=[];for(const a of n.querySelectorAll(".bai-bai-preset-group:not(.bai-bai-preset-group-collapsed)")){if(!(a instanceof HTMLElement))continue;const i=a.dataset.presetGroupId,s=a.querySelector(".bai-bai-preset-group-list"),l=a.querySelector(".bai-bai-preset-group-body, .bai-bai-preset-group-list");!i||!(s instanceof HTMLElement)||!(l instanceof HTMLElement)||r.push({groupId:i,groupElement:a,hitRect:Tc(l),...jm(s,t)})}const o={draggedItem:{...t},topLevel:jm(n,t),groups:r,scrollSignature:""};return o.scrollSignature=Dh(o),o}function jm(e,t){return{containerElement:e,containerRect:Tc(e),children:Gh(e,t).map(n=>({element:n,rect:Tc(n)}))}}function Tc(e){const t=e.getBoundingClientRect();return{left:t.left,right:t.right,top:t.top,bottom:t.bottom,width:t.width,height:t.height}}function Dh(e){const t=[window.scrollX||0,window.scrollY||0],n=new Set,r=o=>{!(o instanceof HTMLElement)||n.has(o)||(n.add(o),t.push(o.scrollLeft||0,o.scrollTop||0))};r(e?.topLevel?.containerElement);for(const o of e?.groups??[])r(o.containerElement);return t.join(":")}function EP(e,t){if(!e||!t)return null;const n=ba;let r=null,o=1/0;for(const a of e.groups??[]){const i=a.hitRect;if(t.clientX<i.left-n||t.clientX>i.right+n||t.clientY<i.top-n/2||t.clientY>i.bottom+n)continue;const s=t.clientY<i.top?i.top-t.clientY:t.clientY>i.bottom?t.clientY-i.bottom:0;s<o&&(o=s,r=a)}return r}function $h(e,t,{minIndex:n=0}={}){const r=e?.children??[];let o=0;for(const a of r){const i=a.rect;if(t.clientY<i.top+i.height/2)return Math.max(n,Math.min(o,r.length));o+=1}return Math.max(n,r.length)}function Nh(e,t){const n=e?.containerRect;if(!n)return null;const r=e.children??[],o=r[t];let a=n.top;return o?a=o.rect.top:r.length&&(a=r[r.length-1].rect.bottom),{left:n.left,top:a,width:n.width}}function Hh(e=x()){e.dragAutoScrollFrame||!e.draggedItem||!e.lastDragPoint||(e.dragAutoScrollFrame=requestAnimationFrame(()=>{e.dragAutoScrollFrame=null,!(!e.draggedItem||!e.lastDragPoint||!SP(e))&&(e.dragLayoutCache=null,Mh(e),Hh(e))}))}function SP(e=x()){const t=e.dragScrollContainer,n=e.lastDragPoint;return!t||!n?!1:H_({scrollContainer:t,clientY:n.clientY})}function Gh(e,t){return Array.from(e?.children??[]).filter(n=>n instanceof HTMLElement&&!LP(n)&&!vP(n,t))}function vP(e,t){return!(e instanceof HTMLElement)||!t?!1:t.type==="group"?e.classList.contains("bai-bai-preset-group")&&e.dataset.presetGroupId===t.id:t.type==="prompt"&&e.dataset.pmIdentifier===t.id}function Fh(e,t){return(e?.items??[]).find(n=>n?.type==="group"&&n.groupId===t)??null}function TP(e,t){const n=xP(e),r=t?.indicatorRect??wP(t);if(!n||!r){zh(e);return}const o=`${Math.round(r.left)}:${Math.round(r.top)}:${Math.round(r.width)}`;e.dragIndicatorRectKey!==o&&(e.dragIndicatorRectKey=o,n.style.left=`${r.left}px`,n.style.top=`${Math.round(r.top-1)}px`,n.style.width=`${r.width}px`)}function xP(e=x()){if(e.dragIndicatorElement instanceof HTMLElement&&e.dragIndicatorElement.isConnected)return e.dragIndicatorElement;const t=document.createElement("div");return t.className=Bu,document.body.append(t),e.dragIndicatorElement=t,t}function wP(e){const t=e?.containerElement;if(!(t instanceof HTMLElement))return null;const n=t.getBoundingClientRect(),r=Gh(t,e.draggedItem),o=r[e.index];let a=n.top;return o instanceof HTMLElement?a=o.getBoundingClientRect().top:r.length&&(a=r[r.length-1].getBoundingClientRect().bottom),{left:n.left,top:a,width:n.width}}function zh(e=x()){e.dragIndicatorElement?.remove?.(),e.dragIndicatorElement=null,e.dragIndicatorRectKey=null}function un(e=x()){e.dragPlacement=null,e.currentTopLevelDropIndex=null,na(),zh(e)}function Di(e=x()){Rh(),e.dragPlacementFrame&&(cancelAnimationFrame(e.dragPlacementFrame),e.dragPlacementFrame=null),e.dragAutoScrollFrame&&(cancelAnimationFrame(e.dragAutoScrollFrame),e.dragAutoScrollFrame=null),un(e),e.draggedItem=null,e.dragLayoutCache=null,e.dragScrollContainer=null,e.lastDragPoint=null}function CP(e,t){const n=t?.draggedItem;return!e||!n?!1:n.type==="group"?kP(e,n.id,t.index):n.type!=="prompt"?!1:t.targetType==="group"?AP(e,n.id,t.groupId,t.index):PP(e,n.id,t.index)}function kP(e,t,n){if(!Array.isArray(e?.items)||!t)return!1;const r=qm(e),o=e.items.findIndex(i=>i?.type==="group"&&i.groupId===t);if(o<0)return!1;const[a]=e.items.splice(o,1);return e.items.splice(Vh(e,n),0,a),!Er(r,qm(e))}function AP(e,t,n,r){if(!Array.isArray(e?.items)||!t||!n)return!1;const o=Fh(e,n);if(!o)return!1;const a=Jr(e),i=Wh(e,t);if(!i)return!1;i.groupId=n,o.children=Array.isArray(o.children)?o.children:[],o.children.splice(Math.max(0,Math.min(Number(r)||0,o.children.length)),0,i),o.count=o.children.length;const s=Jr(e);return!Er(a.order,s.order)||!Ju(a.assignments,s.assignments)}function PP(e,t,n){if(!Array.isArray(e?.items)||!t)return!1;const r=Jr(e),o=Wh(e,t);if(!o)return!1;o.groupId=null,e.items.splice(Vh(e,n),0,o);const a=Jr(e);return!Er(r.order,a.order)||!Ju(r.assignments,a.assignments)}function qm(e){return(e?.items??[]).map(t=>t?.type==="group"?`group:${t.groupId}`:t?.type==="prompt"?`prompt:${t.id}`:`static:${t?.type??""}`)}function LP(e){return e.classList.contains("bai-bai-preset-vue-sortable-fallback")||e.classList.contains("bai-bai-preset-vue-sortable-ghost")||e.classList.contains("bai-bai-preset-vue-sortable-chosen")||e.classList.contains("bai-bai-preset-vue-sortable-drag")}function Vh(e,t){const n=Uh(e),r=Array.isArray(e?.items)?e.items.length:n;return Math.max(n,Math.min(Number(t)||n,r))}function Uh(e){if(!Array.isArray(e?.items))return 2;let t=0;for(;t<e.items.length;){const n=e.items[t]?.type;if(n!=="header"&&n!=="global-library"&&n!=="favorites"&&n!=="separator")break;t+=1}return t}function Wh(e,t){if(!Array.isArray(e?.items)||!t)return null;for(const o of e.items){if(o?.type!=="group"||!Array.isArray(o.children))continue;const a=o.children.findIndex(i=>i?.type==="prompt"&&i.id===t);if(a>=0){const[i]=o.children.splice(a,1);return o.count=o.children.length,i}}const n=e.items.findIndex(o=>o?.type==="prompt"&&o.id===t);if(n<0)return null;const[r]=e.items.splice(n,1);return r}function IP(e){x().dragSnapshot=Jr(e)}function Xu(e){const t=x(),n=t.dragSnapshot;if(t.dragSnapshot=null,!n)return!1;const r=l_(e),o=Jr(e);return r||!Er(n.order,o.order)||!Ju(n.assignments,o.assignments)}function Jr(e){return{order:_r(e),assignments:y_(e)}}function Ju(e={},t={}){const n=new Set([...Object.keys(e),...Object.keys(t)]);for(const r of n)if((e[r]??null)!==(t[r]??null))return!1;return!0}function RP(e,t,n){return n?.type==="header"?iP(e,x().state):n?.type==="separator"?sP(e):n?.type==="global-library"?Kh(e,t,n):n?.type==="favorites"?$P(e,n):n?.type==="group"?NP(e,t,n):od(e,n,{topLevel:!0})}function Kh(e,t,n,{outsideList:r=!1}={}){if(!n)return null;const o=x().state,a=ju(o,n),i=!!n.selecting,s=r?"div":"li",l=(()=>{if(!a)return[];if(n.loading)return[e("div",{class:"bai-bai-preset-global-library-empty"},d`全局库加载中...`)];if(n.error)return[e("div",{class:"bai-bai-preset-global-library-empty"},d`全局库加载失败`)];if(n.count===0&&!n.hasGroups)return[e("div",{class:"bai-bai-preset-global-library-empty"},d`暂无全局条目`)];const c=[];i&&c.push(MP(e,n)),c.push(jh(e,t,n.ungrouped,{groupId:null}));for(const u of n.groups)c.push(DP(e,t,u));return c})();return e(s,{class:["bai-bai-preset-global-library",r?"bai-bai-preset-global-library-outside":"",n.collapsed?"bai-bai-preset-global-library-collapsed":"",i?"bai-bai-preset-global-library-selecting":""],key:Is},[e("div",{class:"bai-bai-preset-group-header bai-bai-preset-global-library-header",onClick:c=>{c.preventDefault(),c.stopPropagation(),IL()}},[e("span",{class:"bai-bai-preset-group-title",title:d`全局库`},[e("span",{class:["menu_button","bai-bai-preset-group-toggle","fa-solid","fa-chevron-down"],title:n.collapsed?d`展开全局库`:d`收起全局库`}),e("span",{class:"bai-bai-preset-group-title-content"},[e("strong",null,d`全局库`),e("small",{class:"bai-bai-preset-group-count"},`(${n.count})`)])]),e("span",{class:"bai-bai-preset-group-actions"},[Be(e,{action:"global-library-new-group",icon:"fa-folder-plus",text:d`新建分组`,onClick:c=>{c.stopPropagation(),Pe(c)}}),Be(e,{action:"global-library-toggle-select",icon:i?"fa-square-check":"fa-list-check",text:i?d`退出多选`:d`多选`,extraClasses:i?["bai-bai-preset-global-library-select-active"]:[],onClick:c=>{c.stopPropagation(),Pe(c)}})])]),e("div",{class:"bai-bai-preset-group-body","aria-hidden":n.collapsed?"true":"false"},[e("div",{class:"bai-bai-preset-group-body-inner"},l)])])}function MP(e,t){const n=t.selectedCount??0;return e("div",{class:"bai-bai-preset-global-library-selection-bar",key:"global-library-selection-bar"},[e("span",{class:"bai-bai-preset-global-library-selection-count"},`${d`已选`} ${n}`),e("span",{class:"bai-bai-preset-global-library-selection-actions"},[Be(e,{action:"global-library-insert-selected",icon:"fa-plus",text:d`添加选中到当前预设`,onClick:r=>Pe(r)}),Be(e,{action:"global-library-move-selected",icon:"fa-folder-tree",text:d`移动选中到分组`,onClick:r=>Pe(r)}),Be(e,{action:"global-library-delete-selected",icon:"fa-trash",text:d`删除选中`,caution:!0,onClick:r=>Pe(r)})])])}function OP(e,{groupId:t}){const n=rd(),o=!!x().state?.globalLibrary?.selecting,a={tag:"ul",class:["bai-bai-preset-group-list","bai-bai-preset-global-library-list",e.length?"":"bai-bai-preset-group-list-empty"],list:e,group:{name:MC,pull:!o,put:o?!1:BP},draggable:"li.completion_prompt_manager_prompt_draggable",filter:Os,preventOnFilter:!1,sort:!0,disabled:o,animation:0,emptyInsertThreshold:ba,forceFallback:!0,fallbackOnBody:!0,fallbackClass:"bai-bai-preset-vue-sortable-fallback",ghostClass:"bai-bai-preset-vue-sortable-ghost",chosenClass:"bai-bai-preset-vue-sortable-chosen",dragClass:"bai-bai-preset-vue-sortable-drag","data-global-library-group-id":t||"",onChoose:()=>{be()},onStart:()=>Yh(),onEnd:()=>{ZI()}};return nd(a),n&&(a.handle=n),a}function jh(e,t,n,{groupId:r}){const o=Array.isArray(n)?n:[];if(!!x().state?.globalLibrary?.selecting||!t?.VueDraggableNext)return e("ul",{class:["bai-bai-preset-group-list","bai-bai-preset-global-library-list",o.length?"":"bai-bai-preset-group-list-empty"],"data-global-library-group-id":r||""},o.map(s=>Ym(e,s)));const i=OP(o,{groupId:r});return e(t.VueDraggableNext,i,{default:()=>o.map(s=>Ym(e,s))})}function BP(e,t,n){return n instanceof HTMLElement&&n.matches("li.completion_prompt_manager_prompt_draggable")}function DP(e,t,n){return e("div",{class:["bai-bai-preset-group","bai-bai-preset-global-library-group",n.collapsed?"bai-bai-preset-group-collapsed":""],"data-preset-global-library-group-id":n.groupId,key:n.id},[e("div",{class:"bai-bai-preset-group-header bai-bai-preset-global-library-group-header",onClick:r=>{r.preventDefault(),r.stopPropagation(),rR(n.groupId)}},[e("span",{class:"bai-bai-preset-group-title",title:n.name},[e("span",{class:["menu_button","bai-bai-preset-group-toggle","fa-solid","fa-chevron-down"],title:n.collapsed?d`展开分组`:d`收起分组`}),e("span",{class:"bai-bai-preset-group-title-content"},[e("span",{class:"fa-solid fa-folder bai-bai-preset-global-library-group-icon"}),e("strong",null,n.name),e("small",{class:"bai-bai-preset-group-count"},`(${n.count})`)])]),e("span",{class:"bai-bai-preset-group-actions"},[Be(e,{action:"global-library-group-rename",icon:"fa-pencil",text:d`重命名分组`,onClick:r=>{r.stopPropagation(),Pe(r)}}),Be(e,{action:"global-library-group-delete",icon:"fa-trash",text:d`删除分组`,caution:!0,onClick:r=>{r.stopPropagation(),Pe(r)}})])]),e("div",{class:"bai-bai-preset-group-body","aria-hidden":n.collapsed?"true":"false"},[e("div",{class:"bai-bai-preset-group-body-inner"},n.collapsed?[]:[jh(e,t,n.children,{groupId:n.groupId})])])])}function Ym(e,t){const n=m?.configuration?.prefix??"",r=t.name||d`未命名条目`,o=!!t.selecting,a=!!t.selected,i=o?e("span",{class:["bai-bai-preset-global-library-row-marker","bai-bai-preset-global-library-select-box",a?"bai-bai-preset-global-library-select-box-checked":"","fa-solid",a?"fa-square-check":"fa-square"],"data-preset-prompt-action":"global-library-select-item",title:a?d`取消选择`:d`选择`,onClick:s=>Pe(s)}):e("span",{class:"drag-handle ui-sortable-handle bai-bai-preset-global-library-row-marker",title:d`拖动以移动到分组`},"☰");return e("li",{class:[`${n}prompt_manager_prompt`,"completion_prompt_manager_prompt_draggable","bai-bai-preset-global-library-prompt",a?"bai-bai-preset-global-library-prompt-selected":""],"data-preset-global-library-id":t.id,key:`global-library:${t.id}`},[i,e("span",{class:`${n}prompt_manager_prompt_name`,title:r,"data-pm-name":r},[e("span",null,r)]),e("span",null,[e("span",{class:"prompt_manager_prompt_controls"},[Be(e,{action:"global-library-delete",icon:"fa-trash",text:d`删除全局库条目`,caution:!0,onClick:s=>Pe(s)}),Be(e,{action:"global-library-edit",icon:"fa-pencil",text:d`编辑全局库条目`,onClick:s=>Pe(s)}),Be(e,{action:"global-library-insert",icon:"fa-plus",text:d`添加到当前预设`,onClick:s=>Pe(s)})])]),e("span",{class:"prompt_manager_prompt_tokens"},"-")])}function $P(e,t){const n=Array.isArray(t?.children)?t.children:[],r=x().state,o=ju(r,t);return n.length?e("li",{class:["bai-bai-preset-favorites",t.collapsed?"bai-bai-preset-favorites-collapsed":""],key:Rs},[e("div",{class:"bai-bai-preset-favorites-header",onClick:a=>{a.preventDefault(),a.stopPropagation(),LL()}},[e("span",{class:"bai-bai-preset-favorites-title"},[e("span",{class:["menu_button","bai-bai-preset-favorites-toggle","fa-solid","fa-chevron-down"],title:t.collapsed?d`展开收藏`:d`收起收藏`}),e("span",{class:"fa-solid fa-star bai-bai-preset-favorites-icon",title:d`收藏`}),e("strong",null,d`收藏`),e("small",{class:"bai-bai-preset-favorites-count"},`(${n.length})`)])]),e("div",{class:"bai-bai-preset-favorites-body","aria-hidden":t.collapsed?"true":"false"},[e("div",{class:"bai-bai-preset-favorites-body-inner"},o?[e("ul",{class:"bai-bai-preset-favorites-list"},n.map(a=>od(e,a,{favoriteMirror:!0})))]:[])])]):null}function NP(e,t,n){const r=rd(),o=HP(n),a=vt(),i=!!x().state?.rangeSelection?.active,s=a||i,l={tag:"ul",class:["bai-bai-preset-group-list",n.children?.length?"":"bai-bai-preset-group-list-empty"],list:n.children,group:{name:"bai-bai-preset-prompts",pull:!s,put:s?!1:dP},draggable:"li.completion_prompt_manager_prompt_draggable",filter:Os,preventOnFilter:!1,sort:!1,disabled:s,animation:0,emptyInsertThreshold:ba,dragoverBubble:!0,bubbleScroll:!1,forceFallback:!0,fallbackOnBody:!0,fallbackClass:"bai-bai-preset-vue-sortable-fallback",ghostClass:"bai-bai-preset-vue-sortable-ghost",chosenClass:"bai-bai-preset-vue-sortable-chosen",dragClass:"bai-bai-preset-vue-sortable-drag",move:uP,onChoose:()=>{be()},onStart:c=>Lh(x().state,c),onEnd:c=>{const u=x(),p=u.state;u.lastDragEndedAt=Date.now();const b=Qu(p,c);po(p,!1),u.draggedPromptId=null,u.draggedItem=null,u.currentDropTargetGroupId=null,u.currentTopLevelDropIndex=null;const v=Xu(p);(b||v)&&md()}};return nd(l),r&&(l.handle=r),e("li",{class:[ga,"bai-bai-preset-group",n.collapsed?"bai-bai-preset-group-collapsed":"",o?"":"bai-bai-preset-group-powered-off"],"data-preset-group-id":n.groupId,key:n.id},[e("div",{class:"bai-bai-preset-group-header bai-bai-preset-group-drag-surface",onPointerdown:c=>FP(c,n.groupId),onPointermoveCapture:c=>zP(c,n.groupId),onPointerup:c=>VP(c,n.groupId),onPointercancel:()=>UP(n.groupId),onClick:c=>WP(c,n.groupId)},[e("span",{class:"bai-bai-preset-group-title",title:n.name},[e("span",{class:["menu_button","bai-bai-preset-group-toggle","fa-solid","fa-chevron-down"],title:n.collapsed?d`展开分组`:d`收起分组`,onClick:c=>{c.preventDefault(),c.stopPropagation(),dd(n.groupId)}}),e("span",{class:"bai-bai-preset-group-title-content"},[e("strong",null,n.name),e("small",{class:"bai-bai-preset-group-count"},GP(n))])]),e("span",{class:"bai-bai-preset-group-actions"},[e("span",{class:["menu_button","fa-solid","bai-bai-preset-group-action-button","bai-bai-preset-group-enable-toggle",o?"fa-toggle-on":"fa-toggle-off"],title:o?d`关闭分组供电`:d`开启分组供电`,onClick:c=>{c.preventDefault(),c.stopPropagation(),DL(n.groupId)}}),e("span",{class:"menu_button fa-solid fa-pencil bai-bai-preset-group-action-button",title:d`重命名分组`,onClick:c=>{c.preventDefault(),c.stopPropagation(),$L(n.groupId)}}),e("span",{class:"menu_button fa-solid fa-trash bai-bai-preset-group-action-button",title:d`删除分组`,onClick:c=>{c.preventDefault(),c.stopPropagation(),NL(n.groupId)}})])]),XP(e,t,n,l)])}function HP(e){return e?.enabled!==!1&&e?.group?.enabled!==!1}function GP(e){const t=Array.isArray(e?.children)?e.children:[],n=t.length||Number(e?.count)||0;return`(${t.filter(o=>o?.enabled!==!1&&o?.orderEntry?.enabled!==!1).length}/${n})`}function FP(e,t){if(vt()||Zu(e)||e.pointerType==="mouse"&&e.button!==0||e.isPrimary===!1)return;const n=ed(e);if(!n)return;const r=x(),o=jP(e.currentTarget),a=Date.now();lr(r,{suppress:!1}),An(r),r.groupHeaderGesture={groupId:t,pointerId:e.pointerId,startedAt:a,x:n.clientX,y:n.clientY,lastX:n.clientX,lastY:n.clientY,scrolling:!1,dragging:!1,feedbackElement:o,readyTimer:null},de()&&o instanceof HTMLElement&&(r.dragReadyFeedbackElement=o,r.dragReadyFeedbackNotified=!1,r.groupHeaderGesture.readyTimer=window.setTimeout(()=>{qP(r,r.groupHeaderGesture)},Lu))}function zP(e,t){const n=x(),r=n.groupHeaderGesture;if(!r||r.groupId!==t||r.pointerId!==e.pointerId||n.state?.dragging)return;const o=ed(e);if(!o)return;r.lastX=o.clientX,r.lastY=o.clientY;const a=o.clientX-r.x,i=o.clientY-r.y,s=Math.abs(a),l=Math.abs(i);if(r.dragging){Jn(e),e.cancelable&&e.preventDefault(),e.stopPropagation();return}de()&&(Math.max(s,l)<=Pi||(r.scrolling=!0,n.lastGroupHeaderGestureCanceledAt=Date.now(),Ea(r),An(n)))}function VP(e,t){const n=x(),r=n.groupHeaderGesture;if(n.groupHeaderCustomDrag?.pointerId===e.pointerId){xc(e);return}if(!r||r.groupId!==t||r.pointerId!==e.pointerId||(n.groupHeaderGesture=null,Ea(r),An(n),Zu(e)||qh(n)))return;const o=ed(e);if(!o||r.scrolling||KP(r,o)>GC){n.lastGroupHeaderGestureCanceledAt=Date.now();return}e.cancelable&&e.preventDefault(),e.stopPropagation(),n.lastGroupHeaderToggleAt=Date.now(),dd(t)}function UP(e){const t=x();t.groupHeaderCustomDrag?.groupId===e&&lr(t),t.groupHeaderGesture?.groupId===e&&(Ea(t.groupHeaderGesture),t.groupHeaderGesture=null,t.lastGroupHeaderGestureCanceledAt=Date.now(),An(t))}function WP(e,t){const n=x();if(Zu(e))return;const r=Date.now();if(r-(n.lastGroupHeaderToggleAt||0)<pc||r-(n.lastGroupHeaderGestureCanceledAt||0)<pc||qh(n)){e.cancelable&&e.preventDefault(),e.stopPropagation();return}n.lastGroupHeaderToggleAt=r,dd(t)}function qh(e){return!!(e.state?.dragging||Date.now()-(e.lastDragEndedAt||0)<pc)}function Zu(e){return!!(e.target instanceof Element?e.target:null)?.closest(".bai-bai-preset-group-actions, .bai-bai-preset-group-toggle")}function ed(e){return typeof e?.clientX!="number"||typeof e?.clientY!="number"?null:{clientX:e.clientX,clientY:e.clientY}}function KP(e,t){return Math.hypot(t.clientX-e.x,t.clientY-e.y)}function jP(e){return e instanceof Element?e.closest(`li.${ga}`):null}function Ea(e){e?.readyTimer&&(clearTimeout(e.readyTimer),e.readyTimer=null)}function qP(e,t){if(!de()||!e||e.groupHeaderGesture!==t||!t||t.scrolling||t.dragging)return!1;const n=e.state,r={clientX:t.lastX??t.x,clientY:t.lastY??t.y};return Ea(t),t.dragging=!0,e.groupHeaderCustomDrag={groupId:t.groupId,pointerId:t.pointerId},Ih(n,{type:"group",id:t.groupId},r)?(YP(e),!0):(lr(e),!1)}function YP(e=x()){td();const t=a=>{const i=e.groupHeaderCustomDrag;!i||i.pointerId!==a.pointerId||xc(a)},n=a=>{const i=e.groupHeaderCustomDrag;!i||i.pointerId!==a.pointerId||lr(e)},r=a=>{e.groupHeaderCustomDrag&&xc(a)},o=()=>{e.groupHeaderCustomDrag&&lr(e)};document.addEventListener("pointerup",t,!0),document.addEventListener("pointercancel",n,!0),document.addEventListener("touchend",r,!0),document.addEventListener("touchcancel",o,!0),f[cc]={pointerup:t,pointercancel:n,touchend:r,touchcancel:o}}function td(){const e=f[cc];e&&(document.removeEventListener("pointerup",e.pointerup,!0),document.removeEventListener("pointercancel",e.pointercancel,!0),document.removeEventListener("touchend",e.touchend,!0),document.removeEventListener("touchcancel",e.touchcancel,!0),delete f[cc])}function xc(e=null){const t=x(),n=t.state;if(!t.groupHeaderCustomDrag)return;td(),e?.cancelable&&e.preventDefault(),e?.stopPropagation?.(),t.lastDragEndedAt=Date.now();const r=Qu(n,e);po(n,!1),t.draggedPromptId=null,t.draggedItem=null,t.currentDropTargetGroupId=null,t.currentTopLevelDropIndex=null,t.groupHeaderCustomDrag=null,t.groupHeaderGesture=null,t.lastGroupHeaderGestureCanceledAt=Date.now();const o=Xu(n);(r||o)&&md()}function lr(e=x(),{suppress:t=!0}={}){td(),e.groupHeaderGesture&&Ea(e.groupHeaderGesture),e.groupHeaderCustomDrag&&(e.dragSnapshot=null,po(e.state,!1)),An(e),e.groupHeaderCustomDrag=null,e.groupHeaderGesture=null,t&&(e.lastGroupHeaderGestureCanceledAt=Date.now())}function QP(e,{notify:t=!0}={}){e.dragReadyFeedbackTimer&&(clearTimeout(e.dragReadyFeedbackTimer),e.dragReadyFeedbackTimer=null),e.dragReadyFeedbackElement instanceof HTMLElement&&e.dragReadyFeedbackElement.classList.add(Rr),t&&!e.dragReadyFeedbackNotified&&(e.dragReadyFeedbackNotified=!0,Qh())}function An(e=x()){e.dragReadyFeedbackTimer&&(clearTimeout(e.dragReadyFeedbackTimer),e.dragReadyFeedbackTimer=null),e.dragReadyFeedbackElement instanceof HTMLElement&&e.dragReadyFeedbackElement.classList.remove(Rr),e.dragReadyFeedbackElement=null,e.dragReadyFeedbackNotified=!1}function XP(e,t,n,r){const o=x().state,a=ju(o,n);return e("div",{class:"bai-bai-preset-group-body","aria-hidden":n.collapsed?"true":"false"},[e("div",{class:"bai-bai-preset-group-body-inner"},a?[e(t.VueDraggableNext,r,{default:()=>(n.children??[]).map(i=>od(e,i,{groupChild:!0}))})]:[])])}function JP(){if(f[Ai])return;const e=t=>eL(t);document.addEventListener("pointerdown",e,!0),document.addEventListener("touchstart",e,!0),f[Ai]={handler:e}}function ZP(){const e=f[Ai];e?.handler&&(document.removeEventListener("pointerdown",e.handler,!0),document.removeEventListener("touchstart",e.handler,!0),delete f[Ai])}function eL(e){if(!de()||vt()||x().state?.rangeSelection?.active)return;const t=e.target instanceof Element?e.target:null;if(!t)return;const n=t.closest(`${S}, .bai-bai-preset-group-list`);if(!(n instanceof HTMLElement))return;const r=tL(n);if(!r||typeof r.option!="function")return;const o=!!t.closest(".drag-handle"),a=o?dc:Pi;r.option("delay",o?0:Lu),r.option("touchStartThreshold",a),r.option("fallbackTolerance",a)}function tL(e){for(const t of Object.keys(e)){const n=e[t];if(t.startsWith("Sortable")&&n&&typeof n.option=="function")return n}return null}function nd(e){if(de()){Object.assign(e,{delay:Lu,delayOnTouchOnly:!0,touchStartThreshold:Pi,fallbackTolerance:Pi});return}Object.assign(e,{touchStartThreshold:dc,fallbackTolerance:dc})}function Yh(){x().dragReadyFeedbackNotified||Qh()}function Qh(){if(!(!de()||typeof navigator>"u"||typeof navigator.vibrate!="function"))try{navigator.vibrate(12)}catch{}}function rd(){return vt()?"__bai_bai_preset_drag_locked__":de()?N.presetMobileWholeRowDragEnabled?"li.completion_prompt_manager_prompt_draggable":".drag-handle":""}function po(e,t){if(!e){t||(An(),Di(),na(),$i(!1),document.body?.classList.remove(Rt),Ye()?.classList.remove(ir));return}t&&(be(),Sd(),Fu(Ye())),e.dragging=!!t,document.body?.classList.toggle(Rt,e.dragging),Ye()?.classList.toggle(ir,e.dragging),$i(e.dragging),e.dragging||(An(),Di(),na()),!e.dragging&&f.promptManagerTokenRefreshPendingAfterDrag&&(f.promptManagerTokenRefreshPendingAfterDrag=!1,Fn())}function $i(e){if(!de())return;const t=f[vl];if(e){if(t?.touchmove)return;const n=r=>{zu()&&r.cancelable&&r.preventDefault()};document.addEventListener("touchmove",n,{capture:!0,passive:!1}),f[vl]={touchmove:n};return}t?.touchmove&&(document.removeEventListener("touchmove",t.touchmove,!0),delete f[vl])}function od(e,t,{topLevel:n=!1,groupChild:r=!1,favoriteMirror:o=!1}={}){const a=m?.configuration?.prefix??"",i=t.prompt,s=t.enabled!==!1&&t.orderEntry?.enabled!==!1,l=i.marker?`${a}prompt_manager_marker`:"",c=Q_(i,a),u=x(),p=o?[]:PL(u.state,t);return e("li",{class:[`${a}prompt_manager_prompt`,o?"bai-bai-preset-favorite-prompt":`${a}prompt_manager_prompt_draggable`,n?ga:"",r?AC:"",s?"":`${a}prompt_manager_prompt_disabled`,l,c,...p],"data-pm-identifier":i.identifier,"data-preset-group-id":t.groupId||"","data-preset-favorite-mirror":o?"true":void 0,key:o?`favorite:${i.identifier}`:i.identifier,onClickCapture:o?void 0:b=>Cc(u.state,t,b),onClick:o?void 0:b=>Cc(u.state,t,b),onMouseenter:o?void 0:()=>kL(u.state,t)},[o?e("span",{class:"drag-handle ui-sortable-handle bai-bai-preset-favorite-row-marker",title:d`收藏快捷项不可拖拽`},"☰"):e("span",{class:"drag-handle ui-sortable-handle"},"☰"),nL(e,i,a,{allowInspect:!o}),e("span",null,[e("span",{class:"prompt_manager_prompt_controls"},HL(e,i,t,{favoriteMirror:o}))]),e("span",{class:"prompt_manager_prompt_tokens","data-pm-tokens":t.calculatedTokens},[e("span",{class:t.warningClass,title:t.warningTitle}," "),t.calculatedTokens])])}function nL(e,t,n,{allowInspect:r=!0}={}){const o=t.name??"",a=t.marker&&t.injection_position!==De.ABSOLUTE,i=!t.marker&&t.system_prompt&&t.injection_position!==De.ABSOLUTE&&!t.forbid_overrides,s=!t.marker&&t.system_prompt&&t.injection_position!==De.ABSOLUTE&&t.forbid_overrides,l=!t.marker&&!t.system_prompt&&t.injection_position!==De.ABSOLUTE,c=t.injection_position===De.ABSOLUTE,u=Array.isArray(m.overriddenPrompts)&&m.overriddenPrompts.includes(t.identifier),p=t.role==="system"&&(t.marker||t.system_prompt)?"":t.role,v={assistant:{roleIcon:"fa-robot",roleTitle:"Prompt will be sent as Assistant"},user:{roleIcon:"fa-user",roleTitle:"Prompt will be sent as User"}}[p],y=[];a&&y.push(Po(e,"fa-fw fa-solid fa-thumb-tack","Marker")," "),i&&y.push(Po(e,"fa-fw fa-solid fa-square-poll-horizontal","Global Prompt")," "),s&&y.push(Po(e,"fa-fw fa-solid fa-star","Important Prompt")," "),l&&y.push(Po(e,"fa-fw fa-solid fa-asterisk","Preset Prompt")," "),c&&y.push(Po(e,"fa-fw fa-solid fa-syringe","In-Chat Injection")," ");const k=m.isPromptInspectionAllowed?.(t);return y.push(r&&k?e("a",{title:o,class:"prompt-manager-inspect-action"},o):e("span",{title:o,class:k?"prompt-manager-inspect-action bai-bai-preset-prompt-name-visual-only":""},o)),v&&y.push(" ",e("span",{"data-role":t.role,class:`fa-xs fa-solid ${v.roleIcon}`,title:v.roleTitle})),c&&y.push(" ",e("small",{class:"prompt-manager-injection-depth"},`@ ${t.injection_depth?.toString?.()??""}`)),u&&y.push(" ",e("small",{class:"fa-solid fa-address-card prompt-manager-overridden",title:"Pulled from a character card"})),e("span",{class:`${n}prompt_manager_prompt_name`,"data-pm-name":o},y)}function Po(e,t,n){return e("span",{class:t,title:n})}function He(){const e=zs();if(f.presetPromptGroupRuntimePresetName!==e||!f.presetPromptGroupRuntimeState||typeof f.presetPromptGroupRuntimeState!="object"){const t=rL();f.presetPromptGroupRuntimePresetName=e,f.presetPromptGroupRuntimeState=t.state,t.shouldPersist&&mt({})}return f.presetPromptGroupRuntimeState}function zs(){return z?.preset_settings_openai||"current"}function Qm(){return{groups:[],prompts:{}}}function rL(){const e=Ge(),t=oL(e);if(t)return{state:t,shouldPersist:!1};const n=aL(e);if(n.length>1)return lL(n,e),{state:Qm(),shouldPersist:!1};const r=n[0];return r?{state:r.state,shouldPersist:!0}:{state:Qm(),shouldPersist:!1}}function Pn(e){return!!(Array.isArray(e?.groups)&&e.groups.length>0&&e?.prompts&&typeof e.prompts=="object"&&Object.keys(e.prompts).length>0)}function nt(e,t=null){const n=new Set;e.groups=e.groups.filter(a=>a&&typeof a=="object"&&a.id).map((a,i)=>({id:String(a.id),name:String(a.name||d`未命名分组`),order:Number.isFinite(Number(a.order))?Number(a.order):i,collapsed:!!a.collapsed,enabled:a.enabled!==!1})).sort((a,i)=>a.order-i.order).filter(a=>n.has(a.id)?!1:(n.add(a.id),!0)).map((a,i)=>({...a,order:i}));const r=new Set(e.groups.map(a=>a.id)),o={};for(const[a,i]of Object.entries(e.prompts??{})){const s=i?.groupId;!s||!r.has(s)||t instanceof Set&&!t.has(a)||(o[a]={groupId:s})}e.prompts=o}function oL(e=Ge()){const t=Us(Xr);if(!t||typeof t!="object")return null;const n={groups:Array.isArray(t.groups)?structuredClone(t.groups):[],prompts:t.prompts&&typeof t.prompts=="object"?structuredClone(t.prompts):{}};return nt(n,new Set(e)),Pn(n)?n:null}function aL(e=Ge()){const t=Us(OC);return!t||!e.length?[]:[{formatName:d`起止范围格式`,state:iL(t,e)},{formatName:d`成员列表格式`,state:sL(t,e)}].filter(n=>Pn(n.state))}function Xh(e){if(Array.isArray(e))return e;if(!e||typeof e!="object")return[];for(const t of["groups","entries","entryGroups","items"])if(Array.isArray(e[t]))return e[t];return[]}function iL(e,t=Ge()){const n=Xh(e);if(!n.length||!t.length)return null;const r=new Set(t),o={groups:[],prompts:{}},a=new Set;for(const[i,s]of n.entries()){if(!s||typeof s!="object")continue;const l=t.indexOf(s.startIdentifier),c=t.indexOf(s.endIdentifier);if(l<0||c<0)continue;const u=String(s.mode||"inclusive").toLowerCase()==="exclusive",p=Math.min(l,c)+(u?1:0),b=Math.max(l,c)-(u?1:0);if(p>b)continue;const v=String(s.id||lt());o.groups.push({id:v,name:String(s.name||d`未命名分组`),order:i,collapsed:!0,enabled:!0});for(const y of t.slice(p,b+1))!r.has(y)||a.has(y)||(a.add(y),o.prompts[y]={groupId:v})}return nt(o,r),Pn(o)?o:null}function sL(e,t=Ge()){const n=Xh(e);if(!n.length||!t.length)return null;const r=new Set(t),o={groups:[],prompts:{}},a=new Set;for(const[i,s]of n.entries()){if(!s||typeof s!="object"||!Array.isArray(s.memberIdentifiers))continue;const l=s.memberIdentifiers.map(p=>String(p||"")).filter(p=>r.has(p)&&!a.has(p));if(!l.length)continue;const c=new Set(l),u=String(s.id||lt());o.groups.push({id:u,name:String(s.name||d`未命名分组`),order:i,collapsed:!0,enabled:!0});for(const p of t)c.has(p)&&(a.add(p),o.prompts[p]={groupId:u})}return nt(o,r),Pn(o)?o:null}function lL(e,t=Ge()){const n=zs(),r=cL(n,e,t);return f.presetPromptGroupCompatChoicePendingKey===r||f.presetPromptGroupCompatChoiceDismissedKey===r?!1:(f.presetPromptGroupCompatChoicePendingKey=r,uL(e,t,n,r),!0)}function cL(e,t,n){const r=t.map(o=>{const a=o.state.groups.map(i=>i.name).join(",");return`${o.formatName}:${o.state.groups.length}:${Object.keys(o.state.prompts).length}:${a}`}).join("|");return`${e}:${n.length}:${r}`}async function uL(e,t,n,r){try{const o=await fe(dL(e),ge.TEXT,"",{okButton:!1,cancelButton:d`取消`,allowVerticalScrolling:!0,wider:!0,customButtons:e.map((s,l)=>({text:d`使用分组${Jh(l)}`,result:Bm+l,tooltip:s.formatName}))}),a=Number(o)-Bm,i=e[a];if(!i){f.presetPromptGroupCompatChoiceDismissedKey=r;return}if(zs()!==n)return;f.presetPromptGroupRuntimePresetName=n,f.presetPromptGroupRuntimeState=i.state,nt(f.presetPromptGroupRuntimeState,new Set(t)),mt({immediate:!0}),Ie()}finally{f.presetPromptGroupCompatChoicePendingKey===r&&delete f.presetPromptGroupCompatChoicePendingKey}}function dL(e){const t=e.map((n,r)=>{const o=Jh(r),a=n.state.groups??[],i=a.map(u=>u.name).filter(Boolean),s=i.slice(0,6).map(u=>Lr(u)),l=i.length>s.length?"...":"",c=[...s,l].filter(Boolean).join("、")||d`无`;return`<p><strong>${d`分组`}${o}</strong>${d`有${a.length}个分组`}：${c}</p>`}).join("");return`
        <div class="bai-bai-preset-group-import-choice">
            <p>${d`检测到当前预设同时包含两种可兼容的分组格式，请选择要导入的分组。`}</p>
            ${t}
        </div>
    `}function Jh(e){return String.fromCharCode(65+e)}function Ge(){return(m?.getPromptOrderForCharacter?.(m.activeCharacter)??[]).map(e=>e?.identifier).filter(Boolean)}function pL(){return{version:Wb,items:[],groups:[]}}function ra(e){const t=Array.isArray(e)?e:Array.isArray(e?.items)?e.items:[],n=Array.isArray(e?.groups)?e.groups:[],r=Vs(n),o=new Set(r.map(a=>a.id));return{version:Wb,items:Sa(t,o),groups:r}}function Vs(e){if(!Array.isArray(e))return[];const t=new Set,n=[];for(const r of e){if(!r||typeof r!="object")continue;let o=String(r.id||"").trim();(!o||t.has(o))&&(o=lt()),t.add(o),n.push({id:o,name:hr(r.name),collapsed:!!r.collapsed})}return n}function Sa(e,t=null){if(!Array.isArray(e))return[];const n=new Set,r=[];for(const o of e){if(!o||typeof o!="object")continue;let a=String(o.id||"").trim();(!a||n.has(a))&&(a=lt()),n.add(a);const i=String(o.groupId||"").trim(),s=i&&(!t||t.has(i))?i:null;r.push({id:a,name:hr(o.name),content:typeof o.content=="string"?o.content:String(o.content??""),groupId:s})}return r}function hr(e){return String(e||"").trim()||d`未命名条目`}async function mL(){const e=globalThis.BaiBaoKu;if(e&&typeof e.database=="function")return e;if(typeof document>"u")throw new Error("BaiBaoKu frontend bridge is not available.");const t=x();return t.globalLibraryBridgePromise||(t.globalLibraryBridgePromise=new Promise((n,r)=>{let o=!1,a=null;const i=(c,u)=>{o||(o=!0,window.removeEventListener("baibaoku:ready",s),a&&clearTimeout(a),c(u))},s=c=>{const u=c?.detail||globalThis.BaiBaoKu;u&&typeof u.database=="function"&&i(n,u)},l=document.createElement("script");l.src="/api/plugins/baibaoku/v1/client.js",l.async=!0,l.dataset.baiBaiToolkitBaibaokuClient="true",l.addEventListener("load",()=>{const c=globalThis.BaiBaoKu;c&&typeof c.database=="function"&&i(n,c)},{once:!0}),l.addEventListener("error",()=>{i(r,new Error("Failed to load BaiBaoKu frontend bridge."))},{once:!0}),window.addEventListener("baibaoku:ready",s),a=setTimeout(()=>{const c=globalThis.BaiBaoKu;if(c&&typeof c.database=="function"){i(n,c);return}i(r,new Error("BaiBaoKu frontend bridge timed out."))},5e3),document.head.appendChild(l)}).finally(()=>{t.globalLibraryBridgePromise=null})),t.globalLibraryBridgePromise}async function Zh(){const e=await mL();if(typeof e.isAvailable=="function"&&!await e.isAvailable())throw new Error("BaiBaoKu backend is not available.");const t=e.database(RC);if(!t||typeof t.get!="function"||typeof t.set!="function")throw new Error("BaiBaoKu database API is not available.");return t}function e_(e,{loaded:t=!0,loading:n=!1,error:r=null}={}){const o=x(),a=ra(e);return o.globalLibraryItems=a.items,o.globalLibraryGroups=a.groups,o.globalLibraryLoaded=t,o.globalLibraryLoading=n,o.globalLibraryError=r,fL(o),Ie(),a}function fL(e=x()){const t=uo(e);if(t.size===0)return;const n=new Set(Sa(e.globalLibraryItems).map(r=>r.id));for(const r of Array.from(t))n.has(r)||t.delete(r)}async function Dn({force:e=!1,showLoading:t=!0}={}){const n=x();return!e&&n.globalLibraryLoaded?ra({items:n.globalLibraryItems,groups:n.globalLibraryGroups}):(!e&&n.globalLibraryLoadPromise||(n.globalLibraryError=null,t&&(n.globalLibraryLoading=!0,Ie()),n.globalLibraryLoadPromise=(async()=>{try{const o=await(await Zh()).get(Vb,Ub),a=ra(o?.exists?o.value:pL());return e_(a,{loaded:!0,loading:!1,error:null}),a}catch(r){throw n.globalLibraryLoading=!1,n.globalLibraryLoaded=!1,n.globalLibraryError=r?.message||String(r),Ie(),r}finally{n.globalLibraryLoadPromise=null}})()),n.globalLibraryLoadPromise)}async function En(e){const t=x(),n=t.globalLibrarySavePromise||Promise.resolve(),r=async()=>{const i=await Dn({force:!0,showLoading:!1}),s=ra(i),l=ra(await e(s)||s);return await(await Zh()).set(Vb,Ub,l),e_(l,{loaded:!0,loading:!1,error:null}),l},a=n.then(r,r).finally(()=>{t.globalLibrarySavePromise===a&&(t.globalLibrarySavePromise=null)});return t.globalLibrarySavePromise=a,t.globalLibrarySavePromise}async function t_(e){return e?(await Dn()).items.find(n=>n.id===e)??null:null}function gL(){return document.querySelector("#completion_prompt_manager")||document.querySelector(ha)||document.body}function bL(){return(f.presetGlobalLibraryDialogOpenCount??0)>0}function hL(){f.presetGlobalLibraryDialogOpenCount=(f.presetGlobalLibraryDialogOpenCount??0)+1}function _L(){const e=(f.presetGlobalLibraryDialogOpenCount??0)-1;f.presetGlobalLibraryDialogOpenCount=Math.max(0,e),!(f.presetGlobalLibraryDialogOpenCount>0)&&f.presetPromptListRebuildDeferredByDialog&&(f.presetPromptListRebuildDeferredByDialog=!1,N.presetSwitchOptimizationEnabled&&Gn()&&Sr())}function yL(){return typeof window>"u"||typeof window.matchMedia!="function"?!0:!window.matchMedia("(pointer: coarse)").matches}function EL(){return!!(typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(max-width: 600px)").matches)}function SL(e){e instanceof HTMLElement&&(e.style.removeProperty("--bai-bai-preset-global-library-dialog-top"),e.style.removeProperty("--bai-bai-preset-global-library-dialog-left"),e.style.removeProperty("--bai-bai-preset-global-library-dialog-width"),e.style.removeProperty("--bai-bai-preset-global-library-dialog-height"))}function vL(e,t){if(!(e instanceof HTMLElement)||!(t instanceof HTMLElement))return;if(EL()){SL(t);return}const n=window.innerWidth||document.documentElement?.clientWidth||0,r=window.innerHeight||document.documentElement?.clientHeight||0;if(!n||!r)return;const o=e.getBoundingClientRect(),a=o.bottom>0&&o.top<r,i=a?Math.max(0,o.top):0,s=a?Math.min(r,o.bottom):r,l=Math.max(280,Math.min(o.width||420,n)),c=Math.min(Math.max(0,o.left),Math.max(0,n-l)),u=Math.max(240,r-i),p=Math.min(u,Math.max(320,s-i)),b=Math.min(i,Math.max(0,r-p));t.style.setProperty("--bai-bai-preset-global-library-dialog-top",`${b}px`),t.style.setProperty("--bai-bai-preset-global-library-dialog-left",`${c}px`),t.style.setProperty("--bai-bai-preset-global-library-dialog-width",`${l}px`),t.style.setProperty("--bai-bai-preset-global-library-dialog-height",`${p}px`)}function $n({title:e,message:t="",fields:n=[],confirmText:r=d`确定`,cancelText:o=d`取消`,danger:a=!1}={}){const i=gL();return i instanceof HTMLElement?(hL(),new Promise(s=>{const l={},c=i.style.position,u=i.classList.contains("bai-bai-preset-global-library-dialog-host"),p=document.createElement("div"),b=document.createElement("div"),v=document.createElement("div"),y=document.createElement("strong"),k=document.createElement("span"),P=document.createElement("div"),E=document.createElement("div"),K=document.createElement("span"),X=document.createElement("span");let B=null,V=!1;const ee=O=>{V||(V=!0,_L(),document.removeEventListener("keydown",te,!0),B&&(window.removeEventListener("resize",B),document.removeEventListener("scroll",B,!0)),p.remove(),!u&&!i.querySelector(".bai-bai-preset-global-library-dialog-layer")&&(i.classList.remove("bai-bai-preset-global-library-dialog-host"),i.style.position=c),s(O))},I=()=>ee({...l}),Z=()=>ee(null),te=O=>{if(O.key==="Escape"){O.preventDefault(),O.stopPropagation(),Z();return}(O.ctrlKey||O.metaKey)&&O.key==="Enter"&&(O.preventDefault(),O.stopPropagation(),I())},ve=O=>O.stopPropagation();if(i.classList.add("bai-bai-preset-global-library-dialog-host"),p.className="bai-bai-preset-global-library-dialog-layer",b.className="bai-bai-preset-global-library-dialog",b.tabIndex=-1,v.className="bai-bai-preset-global-library-dialog-head",P.className="bai-bai-preset-global-library-dialog-body",E.className="bai-bai-preset-global-library-dialog-actions",y.textContent=e||"",k.className="menu_button fa-solid fa-xmark bai-bai-preset-global-library-dialog-button",k.title=d`取消`,K.className="menu_button bai-bai-preset-global-library-dialog-button",K.textContent=o,X.className=["menu_button","bai-bai-preset-global-library-dialog-button",a?"bai-bai-preset-global-library-dialog-danger":""].filter(Boolean).join(" "),X.textContent=r,t){const O=document.createElement("div");O.className="bai-bai-preset-global-library-dialog-message",O.textContent=t,P.appendChild(O)}for(const O of n){if(!O?.id)continue;const le=document.createElement("div"),Je=document.createElement("label");let ie=null;if(le.className="bai-bai-preset-global-library-dialog-field",Je.textContent=O.label||O.id,Je.setAttribute("for",`bai_bai_preset_global_library_${O.id}`),le.appendChild(Je),O.type==="textarea")ie=document.createElement("textarea"),ie.rows=Number(O.rows)||8;else if(O.type==="select"){ie=document.createElement("select");for(const Ze of O.options??[]){const Fe=document.createElement("option");Fe.value=String(Ze.value??""),Fe.textContent=String(Ze.label??Ze.value??""),ie.appendChild(Fe)}}else ie=document.createElement("input"),ie.type="text";ie.id=`bai_bai_preset_global_library_${O.id}`,ie.classList.add("text_pole"),ie.value=String(O.value??""),l[O.id]=ie.value,ie.addEventListener("input",()=>{l[O.id]=ie.value}),ie.addEventListener("change",()=>{l[O.id]=ie.value}),le.appendChild(ie),P.appendChild(le)}k.addEventListener("click",Z),K.addEventListener("click",Z),X.addEventListener("click",I),p.addEventListener("click",O=>{O.target===p&&Z()}),b.addEventListener("mousedown",ve),b.addEventListener("pointerdown",ve),b.addEventListener("click",ve),document.addEventListener("keydown",te,!0),v.append(y,k),E.append(K,X),b.append(v,P,E),p.appendChild(b),i.appendChild(p),B=()=>vL(i,p),B(),window.addEventListener("resize",B),document.addEventListener("scroll",B,!0),yL()&&b.focus({preventScroll:!0})})):Promise.resolve(null)}function ad(e=Ge()){return va(e).promptIds}function va(e=Ge()){return n_(Us(uc),e)}function n_(e,t=Ge()){return{version:1,promptIds:r_(e,t),collapsed:!!(e&&typeof e=="object"&&!Array.isArray(e)&&e.collapsed)}}function r_(e,t=Ge()){const n=Array.isArray(e)?e:Array.isArray(e?.promptIds)?e.promptIds:[],r=t instanceof Set?t:new Set((t??[]).filter(Boolean)),o=r.size>0,a=new Set,i=[];for(const s of n){const l=String(s||"");!l||a.has(l)||o&&!r.has(l)||(a.add(l),i.push(l))}return i}function TL(e){return!!(e&&ad().includes(e))}function xL(e){if(!e)return!1;const t=ad(),n=t.includes(e)?t.filter(r=>r!==e):[...t,e];return a_(n)?(Ie(),tt(Ye(),{signature:x().lastStructureSignature}),n.includes(e)):t.includes(e)}function o_(e){if(!e)return!1;const t=ad();return t.includes(e)?a_(t.filter(n=>n!==e)):!1}function a_(e,{persist:t=!0}={}){return i_({promptIds:e},{persist:t})}function i_(e,{persist:t=!0}={}){const n=z?.preset_settings_openai;if(!n)return!1;const r=Ge(),o=va(r),a={version:1,promptIds:r_(e?.promptIds,r),collapsed:e?.collapsed===void 0?o.collapsed:!!e.collapsed};return o.collapsed===a.collapsed&&Er(o.promptIds,a.promptIds)?!1:(wL(n,a),t&&(Nn(n),fr().catch(i=>{console.debug(`${D} Failed to save preset prompt favorites`,i)})),!0)}function wL(e,t){const n=n_(t,Ge());z?.preset_settings_openai===e&&(z.extensions=z.extensions&&typeof z.extensions=="object"?z.extensions:{},Hi(z.extensions,uc,n),m?.serviceSettings&&typeof m.serviceSettings=="object"&&(m.serviceSettings.extensions=m.serviceSettings.extensions&&typeof m.serviceSettings.extensions=="object"?m.serviceSettings.extensions:{},Hi(m.serviceSettings.extensions,uc,n)))}function Us(e){const t=Ni(z?.extensions,e);if(t!=null)return t;const n=z?.preset_settings_openai,r=gr("openai");if(r&&n){const o=r.getCompletionPresetByName?.(n),a=Ni(o?.extensions,e);if(a!=null)return a}return null}function Ni(e,t){return!e||typeof e!="object"?null:String(t||"").split(".").filter(Boolean).reduce((n,r)=>n&&typeof n=="object"?n[r]:void 0,e)??null}function Hi(e,t,n){if(!e||typeof e!="object")return;const r=String(t||"").split(".").filter(Boolean);let o=e;for(let a=0;a<r.length-1;a++){const i=r[a];(!o[i]||typeof o[i]!="object")&&(o[i]={}),o=o[i]}o[r[r.length-1]]=n}function mt({force:e=!1}={}){const t=id(),n=ld({force:e,persist:!1,payload:t});return n&&VL(t),n}function id(){const e=z?.preset_settings_openai;if(!e)return null;const t=Ge();if(!t.length)return null;const n=CL(t),r=Us(Xr);if(!Pn(n)&&!r)return null;const o=JSON.stringify(n);return{presetName:e,groupState:n,syncKey:`${e}:${o}`}}function sd(e){e&&z?.preset_settings_openai===e.presetName&&(z.extensions=z.extensions&&typeof z.extensions=="object"?z.extensions:{},Hi(z.extensions,Xr,e.groupState),m?.serviceSettings&&typeof m.serviceSettings=="object"&&(m.serviceSettings.extensions=m.serviceSettings.extensions&&typeof m.serviceSettings.extensions=="object"?m.serviceSettings.extensions:{},Hi(m.serviceSettings.extensions,Xr,e.groupState)))}function ld({force:e=!1,persist:t=!0,payload:n=null}={}){return n||=id(),!n||!e&&t&&f.presetPromptGroupExtensionSyncKey===n.syncKey?!1:(sd(n),t&&(f.presetPromptGroupExtensionSyncKey=n.syncKey),!0)}function CL(e=Ge()){const t=He(),n={version:1,groups:structuredClone(t.groups??[]),prompts:structuredClone(t.prompts??{})};return nt(n,new Set(e)),n}async function s_(e,{startId:t=null}={}){const n=_r(e);if(n.length===0){toastr.warning(d`没有可用于分组的预设条目。`);return}if(t&&!n.includes(t)){toastr.warning(d`不能将这个预设条目作为分组起点。`);return}e.rangeSelection={active:!0,name:"",startId:t,endId:null,hoverId:t},x().dragSnapshot=null,toastr.info(t?d`请选择分组的结束条目。`:d`请选择分组的起始条目。`)}function wc(e){e&&(e.rangeSelection={active:!1,name:"",startId:null,endId:null,hoverId:null})}function Cc(e,t,n){if(!(!e?.rangeSelection?.active||t?.type!=="prompt")&&(n.preventDefault?.(),n.stopPropagation?.(),n.stopImmediatePropagation?.(),!e.rangeSelection.endId)){if(!e.rangeSelection.startId){e.rangeSelection.startId=t.id,e.rangeSelection.hoverId=t.id,toastr.info(d`请选择分组的结束条目。`);return}if(e.rangeSelection.startId===t.id&&!e.rangeSelection.endId){e.rangeSelection.startId=null,e.rangeSelection.hoverId=null,toastr.info(d`已取消起点选择，请重新选择分组的起始条目。`);return}e.rangeSelection.endId=t.id,AL(e)}}function kL(e,t){!e?.rangeSelection?.active||!e.rangeSelection.startId||e.rangeSelection.endId||t?.type!=="prompt"||(e.rangeSelection.hoverId=t.id)}async function AL(e){const t=c_(e);if(t.length===0){toastr.warning(d`没有选中可分组的预设条目。`),wc(e);return}const n=await fe(d`预设分组名称`,ge.INPUT,e.rangeSelection?.name||"",{okButton:d`创建分组`,cancelButton:d`取消`});if(!e?.rangeSelection?.active)return;if(typeof n!="string"){e.rangeSelection.endId=null;return}const r=n.trim();if(!r){toastr.warning(d`分组名称不能为空。`),e.rangeSelection.endId=null;return}const o=He();nt(o,new Set(_r(e)));const a=lt();e.rangeSelection.name=r,o.groups.push({id:a,name:r,order:o.groups.length,collapsed:!0,enabled:!0});for(const i of t)o.prompts[i]={groupId:a};E_(o),x().dragSnapshot=null,wc(e),mt(),Ie()}function _r(e=x().state){const t=new Set,n=[];for(const r of cd(e))!r?.id||t.has(r.id)||(t.add(r.id),n.push(r.id));return n}function cd(e=x().state,{includeFavoriteMirrors:t=!1}={}){const n=[];for(const r of e?.items??[]){if(r?.type==="prompt"){n.push(r);continue}if(r?.type==="favorites"){t&&n.push(...(r.children??[]).filter(o=>o?.type==="prompt"));continue}r?.type!=="global-library"&&r?.type==="group"&&n.push(...(r.children??[]).filter(o=>o?.type==="prompt"))}return n}function l_(e){if(!Array.isArray(e?.items))return!1;const t=[],n=new Set,r=new Set,o=new Map;let a=!1;const i=(s,l,c=null)=>{if(!s?.id||s.type!=="prompt"){a=!0;return}if(n.has(s.id)){a=!0;return}n.add(s.id),(s.groupId??null)!==(c??null)&&(s.groupId=c??null,a=!0),l.push(s)};for(const s of e.items){if(s?.type==="header"||s?.type==="separator"||s?.type==="global-library"||s?.type==="favorites"){if(r.has(s.type)){a=!0;continue}r.add(s.type),t.push(s);continue}if(s?.type==="prompt"){i(s,t,null);continue}if(s?.type==="group"){const l=Array.isArray(s.children)?[...s.children]:[];if(!s.groupId){a=!0;continue}let c=o.get(s.groupId);c?a=!0:(c=s,c.children=[],o.set(s.groupId,c),t.push(c));for(const u of l)i(u,c.children,s.groupId);c.count=c.children.length;continue}a=!0}return!a&&t.length===e.items.length?!1:(e.items=t,!0)}function c_(e,{includeHover:t=!1}={}){const n=e?.rangeSelection,r=n?.endId||(t?n?.hoverId:null);if(!n?.startId||!r)return[];const o=_r(e),a=o.indexOf(n.startId),i=o.indexOf(r);if(a<0||i<0)return[];const s=Math.min(a,i),l=Math.max(a,i);return o.slice(s,l+1)}function PL(e,t){const n=e?.rangeSelection;if(!n?.active||t?.type!=="prompt")return[];const r=["bai-bai-preset-range-selectable"];return n.startId===t.id&&r.push("bai-bai-preset-range-start"),(n.endId||n.hoverId)===t.id&&n.startId&&r.push("bai-bai-preset-range-end"),c_(e,{includeHover:!0}).includes(t.id)&&r.push("bai-bai-preset-range-inside"),r}function LL(){const e=x(),t=e.state,n=va(),r=!n.collapsed,o=Rs;Ku(o,!r,()=>{r||(sr(e,o),Fs(t,o,!0));const a=t?.items?.find(i=>i?.type==="favorites");a&&(a.collapsed=r),r&&qu(o),i_({promptIds:n.promptIds,collapsed:r})})}function IL(){const e=x(),t=e.state,n=!e.globalLibraryCollapsed,r=Is;Ku(r,!n,()=>{e.globalLibraryCollapsed=n,n||(sr(e,r),Fs(t,r,!0));const o=t?.globalLibrary;o&&(o.collapsed=n),n&&qu(r),Uu()})}function Ws(){const e=x();e.globalLibrarySelecting=!e.globalLibrarySelecting,e.globalLibrarySelecting||uo(e).clear(),Yu(e.state)}function RL(e){if(!e)return;const t=x(),n=uo(t);n.has(e)?n.delete(e):n.add(e),Yu(t.state)}function ud(){const e=x(),t=uo(e);return Sa(e.globalLibraryItems).map(n=>n.id).filter(n=>t.has(n))}async function ML(){const e=ud();if(e.length===0){toastr.warning(d`请先选择要添加的条目。`);return}await U_(e)&&Ws()}async function OL(){const e=ud();if(e.length===0){toastr.warning(d`请先选择要移动的条目。`);return}const t=await Dn(),n=await $n({title:d`移动选中到分组`,fields:[{id:"target",type:"select",label:d`目标分组`,value:"",options:[{value:"",label:d`未分组`},...t.groups.map(a=>({value:a.id,label:a.name}))]}],confirmText:d`移动`,cancelText:d`取消`});if(!n)return;const r=String(n.target||"").trim()||null,o=new Set(e);try{await En(a=>{const i=new Set(a.groups.map(l=>l.id)),s=r&&i.has(r)?r:null;return a.items=a.items.map(l=>o.has(l.id)?{...l,groupId:s}:l),a}),toastr.success(d`已移动 ${e.length} 条。`),Ws()}catch(a){console.debug(`${D} Failed to move selected global library items`,a),toastr.error(d`移动条目失败。`)}}async function BL(){const e=ud();if(e.length===0){toastr.warning(d`请先选择要删除的条目。`);return}if(!await $n({title:d`删除选中`,message:d`要删除选中的 ${e.length} 条全局库条目吗？`,confirmText:d`删除`,cancelText:d`取消`,danger:!0}))return;const n=new Set(e);try{await En(r=>(r.items=r.items.filter(o=>!n.has(o.id)),r)),toastr.success(d`已删除 ${e.length} 条。`),Ws()}catch(r){console.debug(`${D} Failed to delete selected global library items`,r),toastr.error(d`删除条目失败。`)}}function dd(e){const n=He().groups.find(i=>i.id===e);if(!n)return;const r=x(),o=r.state,a=!n.collapsed;Ku(e,!a,()=>{a||(sr(r,e),Fs(o,e,!0)),n.collapsed=a;const i=o?.items?.find(s=>s?.type==="group"&&s.groupId===e);i&&(i.collapsed=n.collapsed,i.group&&(i.group.collapsed=n.collapsed)),a&&qu(e),mt()})}function DL(e){const t=x(),r=He().groups.find(a=>a.id===e);if(!r)return;r.enabled=r.enabled===!1;const o=t.state?.items?.find(a=>a?.type==="group"&&a.groupId===e);o&&(o.enabled=r.enabled,o.group&&(o.group.enabled=r.enabled)),Rn(),mt(),Fn()}async function $L(e){const n=He().groups.find(a=>a.id===e);if(!n)return;const r=await fe(d`预设分组名称`,ge.INPUT,n.name||"",{okButton:d`保存`,cancelButton:d`取消`});if(typeof r!="string")return;const o=r.trim();if(!o){toastr.warning(d`分组名称不能为空。`);return}n.name=o,mt(),Ie()}async function NL(e){const t=He();if(!(!t.groups.find(o=>o.id===e)||!await fe(d`要删除这个预设分组吗？预设条目会保留在原位置。`,ge.CONFIRM))){t.groups=t.groups.filter(o=>o.id!==e);for(const[o,a]of Object.entries(t.prompts??{}))a?.groupId===e&&delete t.prompts[o];nt(t,new Set(_r())),mt(),Ie()}}function HL(e,t,n,{favoriteMirror:r=!1}={}){const o=m.isPromptEditAllowed?.(t)??(rh.has(t.identifier)||!t.marker),a=m.isPromptToggleAllowed?.(t)??(t.marker&&!oh.has(t.identifier)?!1:!(m.configuration.toggleDisabled??[]).includes(t.identifier)),i=n.enabled!==!1&&n.orderEntry?.enabled!==!1,s=n.favorite!==!1&&(n.favorite||TL(t.identifier)),l=Be(e,{action:"favorite",icon:"fa-star",text:s?d`取消收藏`:d`收藏`,extraClasses:["bai-bai-preset-prompt-favorite-toggle",s?"bai-bai-preset-prompt-favorite-toggle-active":""],onClick:y=>Pe(y)}),c=s?Be(e,{action:"favorite",icon:"fa-star",text:d`取消收藏`,extraClasses:["bai-bai-preset-prompt-favorite-toggle","bai-bai-preset-prompt-favorite-toggle-active","bai-bai-preset-prompt-favorite-toggle-persistent"],onClick:y=>Pe(y)}):null,u=o?Be(e,{action:"edit",icon:"fa-pencil",text:d`编辑`,onClick:y=>Pe(y)}):null,p=N.presetGroupingEditButtonInMenuEnabled===!0,b=Be(e,{action:"global-library",icon:"fa-database",text:d`添加到全局库`,onClick:y=>Pe(y)}),v=se()&&!n.groupId?Be(e,{action:"group-range",icon:"fa-folder-plus",text:d`以此条目创建分组`,onClick:y=>Pe(y)}):null;return r?[c,u,a?e("span",{title:i?d`关闭条目`:d`开启条目`,class:["menu_button","bai-bai-preset-prompt-icon-button","prompt-manager-toggle-action",i?"fa-solid fa-toggle-on":"fa-solid fa-toggle-off"]}):null].filter(Boolean):[c,e("span",{title:d`更多操作`,class:"menu_button bai-bai-preset-prompt-icon-button bai-bai-preset-prompt-actions-hint fa-solid fa-ellipsis",onClick:y=>{y.preventDefault(),y.stopPropagation(),y.stopImmediatePropagation?.(),W_(y.currentTarget)}}),e("span",{class:"bai-bai-preset-prompt-actions"},[l,v,b,Be(e,{action:"delete",icon:"fa-trash",text:d`删除或移除`,caution:!0,onClick:y=>Pe(y)}),Be(e,{action:"copy",icon:"fa-copy",text:d`复制`,onClick:y=>Pe(y)}),p?u:null].filter(Boolean)),p?null:u,a?e("span",{title:i?d`关闭条目`:d`开启条目`,class:["menu_button","bai-bai-preset-prompt-icon-button","prompt-manager-toggle-action",i?"fa-solid fa-toggle-on":"fa-solid fa-toggle-off"]}):null]}function pd(e){return!!(e&&(m?.isPromptDeletionAllowed?.(e)??e.system_prompt===!1))}function Be(e,{action:t,icon:n,text:r,caution:o=!1,extraClasses:a=[],onClick:i=null}){return e("span",{class:["menu_button","bai-bai-preset-prompt-action-button","fa-solid",n,o?"caution":"",...a],title:r,"data-preset-prompt-action":t,onClick:i})}function GL({canDelete:e,canEdit:t,canToggle:n,isEnabled:r}){return`
        ${e?'<span title="Remove" class="prompt-manager-detach-action caution fa-solid fa-chain-broken fa-xs"></span>':'<span class="fa-solid"></span>'}
        ${t?'<span title="edit" class="prompt-manager-edit-action fa-solid fa-pencil fa-xs"></span>':'<span class="fa-solid"></span>'}
        ${n?`<span class="prompt-manager-toggle-action ${r?"fa-solid fa-toggle-on":"fa-solid fa-toggle-off"}"></span>`:'<span class="fa-solid"></span>'}
    `}function md(){const e=x();mo(e),Promise.resolve(__()).catch(t=>{e.pendingOrderSave=!0,_d(),console.debug(`${D} Failed to sync preset prompt order after drop`,t)})}function mo(e=x()){e.saveFrame!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e.saveFrame),e.saveTimer!==null&&clearTimeout(e.saveTimer),e.saveFrame=null,e.saveTimer=null,e.pendingOrderSave=!1}async function fd(){const e=x();if(!u_(e))return!1;mo(e);try{return await __(),!0}catch(t){throw e.pendingOrderSave=!0,t}}function u_(e=x()){return!!(e.pendingOrderSave||e.saveFrame!==null||e.saveTimer!==null)}function gn(e=x()){return e.pendingPresetPromptServiceSaves instanceof Map||(e.pendingPresetPromptServiceSaves=new Map),e.pendingPresetPromptServiceSaves}function bn(e=x()){return e.pendingPresetPromptGroupSaves instanceof Map||(e.pendingPresetPromptGroupSaves=new Map),e.pendingPresetPromptGroupSaves}function dn(e=x()){return e.pendingOpenAiPresetSaves instanceof Set||(e.pendingOpenAiPresetSaves=new Set),e.pendingOpenAiPresetSaves}function gd(e=x()){return e.presetPromptSaveRevisions instanceof Map||(e.presetPromptSaveRevisions=new Map),e.presetPromptSaveRevisions}function Ta(e,t=x()){return e?gd(t).get(e)??0:0}function bd(e,t=x()){return e?(t.nextPresetPromptSaveRevision=Number(t.nextPresetPromptSaveRevision)||0,t.nextPresetPromptSaveRevision+=1,gd(t).set(e,t.nextPresetPromptSaveRevision),t.nextPresetPromptSaveRevision):0}function hd(e=x()){return e.openAiPresetSaveRequestStates instanceof Map||(e.openAiPresetSaveRequestStates=new Map),e.openAiPresetSaveRequestStates}function FL(e,t=x()){const n=hd(t);e=Nk(e),n.has(e)||n.set(e,{presetName:e,requestedRevision:null,requestedSnapshot:null,promise:null});const r=n.get(e);return r.presetName=e,r}function Nn(e=z?.preset_settings_openai){e&&(bd(e),dn().add(e))}function Hn(){const e=x(),t=zL();t&&(bd(t.presetName,e),gn(e).set(t.presetName,t),e.pendingServiceSettingsSave=!0,_d())}function zL(){const e=zs(),t=m?.serviceSettings?.prompt_order??z?.prompt_order;return t?{presetName:e,promptOrder:structuredClone(t)}:null}function VL(e=null){const t=x();e||=id(),e&&(bd(e.presetName,t),bn(t).set(e.presetName,{presetName:e.presetName,groupState:structuredClone(e.groupState),syncKey:e.syncKey}),t.pendingGroupSettingsSave=!0,_d())}function _d(){WL(),yr(0)}function d_(){const e=x();return!!(qt(e)||dn(e).size>0)}function qt(e=x()){return!!(u_(e)||e.pendingServiceSettingsSave||e.pendingGroupSettingsSave||gn(e).size>0||bn(e).size>0)}function p_(){const e=x();mo(e),e.pendingServiceSettingsSave=!1,e.pendingGroupSettingsSave=!1,gn(e).clear(),bn(e).clear(),dn(e).clear(),Zr()}function m_(e){if(!e){p_();return}const t=x();mo(t);const n=gn(t),r=bn(t),o=dn(t),a=r.get(e);n.delete(e),r.delete(e),o.delete(e),a?.syncKey&&z?.preset_settings_openai===e&&(f.presetPromptGroupExtensionSyncKey=a.syncKey),t.pendingServiceSettingsSave=n.size>0,t.pendingGroupSettingsSave=r.size>0,qt()?yr():Zr()}function f_(e,t){if(!e||Ta(e)!==t)return!1;const n=x(),r=gn(n),o=bn(n),a=dn(n),i=o.get(e);return r.delete(e),o.delete(e),a.delete(e),i?.syncKey&&z?.preset_settings_openai===e&&(f.presetPromptGroupExtensionSyncKey=i.syncKey),n.pendingServiceSettingsSave=r.size>0,n.pendingGroupSettingsSave=o.size>0,qt()?yr():Zr(),!0}async function UL(e=z?.preset_settings_openai){const t=x();t.pendingChangesSavePromise&&await t.pendingChangesSavePromise,await fd(),e&&(g_(gn(t).get(e)),b_(bn(t).get(e)))}function g_(e){if(!e?.presetName||!e.promptOrder)return!1;const t=structuredClone(e.promptOrder);return z?.preset_settings_openai===e.presetName&&(z.prompt_order=t,m&&(m.serviceSettings=z)),!0}function b_(e){return!e?.presetName||!e.groupState?!1:(sd({presetName:e.presetName,groupState:structuredClone(e.groupState),syncKey:e.syncKey||`${e.presetName}:${JSON.stringify(e.groupState)}`}),!0)}function WL(){if(f[Om])return;const e=a=>{const i=x();if(!(!qt(i)&&!i.pendingChangesSaveInFlight&&!i.pendingChangesSavePromise))return Tn({includeOpenAiPresetSaves:!1}).catch(s=>{console.debug(`${D} Failed to flush preset prompt changes before unload`,s)}),a.preventDefault(),a.returnValue="",""},t=a=>{a?.type==="visibilitychange"&&document.visibilityState!=="hidden"||qt()&&Tn({includeOpenAiPresetSaves:!1}).catch(i=>{console.debug(`${D} Failed to flush preset prompt changes during page lifecycle event`,i)})};let n=0;const r=a=>{ni(a.target)?n=Date.now():n=0},o=a=>{!qt()||!ni(a.target)||ni(a.relatedTarget)||setTimeout(()=>{qt()&&(JL()||n&&Date.now()-n<300||Tn({includeOpenAiPresetSaves:!1}).catch(i=>{console.debug(`${D} Failed to flush preset prompt changes after left panel focusout`,i)}))},NC)};f[Om]={beforeUnloadHandler:e,pageLifecycleHandler:t,leftNavPointerDownHandler:r,leftNavFocusOutHandler:o},window.addEventListener("beforeunload",e),window.addEventListener("pagehide",t),document.addEventListener("visibilitychange",t),document.addEventListener("pointerdown",r,!0),document.addEventListener("focusout",o,!0)}function yr(e=DC){const t=x();KL(),clearTimeout(t.pendingVisibilityTimer),t.pendingVisibilityTimer=setTimeout(()=>{t.pendingVisibilityTimer=null,qL()},e)}function KL(){const e=x();if(e.pendingVisibilityObserver||typeof MutationObserver!="function")return;const t=new MutationObserver(()=>{yr()});e.pendingVisibilityObserver=t;for(const n of jL())t.observe(n,{attributes:!0,attributeFilter:["class","style","hidden","aria-hidden"]})}function Zr(){const e=x();clearTimeout(e.pendingVisibilityTimer),e.pendingVisibilityTimer=null,e.pendingVisibilityObserver&&(e.pendingVisibilityObserver.disconnect(),e.pendingVisibilityObserver=null)}function jL(){const e=[],t=new Set,n=o=>{o instanceof HTMLElement&&!t.has(o)&&(t.add(o),e.push(o))},r=m?.containerElement instanceof HTMLElement?m.containerElement:document.querySelector("#completion_prompt_manager");if(n(r),r instanceof HTMLElement)for(let o=r.parentElement;o&&o!==document.body;o=o.parentElement)n(o);return e}function qL(){if(!qt()){Zr();return}if(!YL()){h_();return}yr($C)}function YL(){const e=m?.containerElement instanceof HTMLElement?m.containerElement:document.querySelector("#completion_prompt_manager");return QL(e)}function QL(e){if(!(e instanceof HTMLElement)||!e.isConnected||e.getClientRects().length===0)return!1;const t=getComputedStyle(e);return t.display!=="none"&&t.visibility!=="hidden"}function XL(){return document.querySelector(Ru)}function ni(e){const t=XL();return!!(t instanceof HTMLElement&&e instanceof Node&&t.contains(e))}function JL(){return ni(document.activeElement)}function h_(){Tn({includeOpenAiPresetSaves:!1}).catch(e=>{console.debug(`${D} Failed to flush preset prompt changes`,e),toastr.error(d`Failed to save preset prompt changes. See console for details.`)})}async function Tn({includeOpenAiPresetSaves:e=!1}={}){const t=x();if(t.pendingChangesSavePromise)return t.pendingChangesSavePromise;await fd();const n=Array.from(gn(t).values()),r=Array.from(bn(t).values()),o=e?Array.from(dn(t).values()):[],a=n.length>0||!!t.pendingServiceSettingsSave,i=r.length>0||!!t.pendingGroupSettingsSave,s=o.length>0;if(!a&&!i&&!s){Zr();return}t.pendingChangesSaveInFlight=!0;const l=(async()=>{try{t.pendingServiceSettingsSave=!1,t.pendingGroupSettingsSave=!1,t.pendingPresetPromptServiceSaves=new Map,t.pendingPresetPromptGroupSaves=new Map,e&&(t.pendingOpenAiPresetSaves=new Set);const c=new Set(o);let u=!1;for(const p of n)g_(p)&&(c.add(p.presetName),u=!0);for(const p of r)b_(p)&&(c.add(p.presetName),u=!0);if((a||i)&&!c.size&&(c.add(z?.preset_settings_openai),u=!0),e)for(const p of c)await ZL(p);else if(u){for(const p of c)p&&dn(t).add(p);await fr()}}catch(c){t.pendingServiceSettingsSave=t.pendingServiceSettingsSave||a,t.pendingGroupSettingsSave=t.pendingGroupSettingsSave||i;for(const u of n)gn(t).set(u.presetName,u);for(const u of r)bn(t).set(u.presetName,u);if(e)for(const u of o)dn(t).add(u);throw c}finally{t.pendingChangesSaveInFlight=!1}})();t.pendingChangesSavePromise=l;try{await l}finally{t.pendingChangesSavePromise===l&&(t.pendingChangesSavePromise=null),qt()?yr():Zr()}}async function ZL(e){!e||z?.preset_settings_openai!==e||(await _R(e),await fr())}async function __(){if(!xa())return;const e=x();if(!e.state)return;l_(e.state);const t=m.getPromptOrderForCharacter(m.activeCharacter)??[],n=t.map(s=>s?.identifier).filter(Boolean),r=y_(e.state),o=_r(e.state);if(Er(n,o)){Xm(r);return}const a=new Map(t.filter(Boolean).map(s=>[s.identifier,s])),i=o.map(s=>a.get(s)).filter(Boolean);m.removePromptOrderForCharacter(m.activeCharacter),m.addPromptOrderForCharacter(m.activeCharacter,i),m.log?.(`Prompt order updated for ${m.activeCharacter?.name??"OpenAI preset"}.`),Xm(r,{persist:!1}),Hn(),mt()}function y_(e){const t={};for(const n of e?.items??[]){if(n?.type==="group"){for(const r of n.children??[])r?.type==="prompt"&&!Object.prototype.hasOwnProperty.call(t,r.id)&&(t[r.id]=n.groupId);continue}n?.type==="prompt"&&!Object.prototype.hasOwnProperty.call(t,n.id)&&(t[n.id]=null)}return t}function Xm(e,{persist:t=!0}={}){const n=He(),r=new Set(_r());nt(n,r);const o=new Set(n.groups.map(s=>s.id)),a={},i=new Set;for(const s of r){const l=e?.[s];!l||!o.has(l)||(a[s]={groupId:l},i.add(l))}n.prompts=a,n.groups=n.groups.filter(s=>i.has(s.id)),nt(n,r),t&&mt()}function E_(e){const t=new Set(Object.values(e.prompts??{}).map(n=>n?.groupId).filter(Boolean));e.groups=e.groups.filter(n=>t.has(n.id))}function eI(e,t){const n=x(),r=cd(n.state,{includeFavoriteMirrors:!0}).filter(o=>o?.id===e);if(!r.length)return!1;for(const o of r)o.enabled=!!t,o.orderEntry&&(o.orderEntry.enabled=!!t);return!0}function tI(e){if(!N.presetDragOptimizationEnabled||!A_(e)||de())return;const t=vd(e.target);t&&Ks(e,t,In(e))&&(f.promptManagerCustomDragSuppressCompatUntil=Date.now()+300,ct(e))}function nI(e){if(!N.presetDragOptimizationEnabled||!A_(e)||de())return;const t=vd(e.target);if(t){if(f.promptManagerCustomDragState||S_()){ct(e);return}typeof PointerEvent!="function"&&Ks(e,t,In(e))&&ct(e)}}function rI(e){if(!N.presetDragOptimizationEnabled)return;const t=vd(e.target);if(t){if(de()){aI(e,t,In(e));return}if(f.promptManagerCustomDragState||S_()){ct(e);return}Ks(e,t,In(e))&&ct(e)}}function S_(){return Date.now()<(f.promptManagerCustomDragSuppressCompatUntil??0)}function oI(e){Date.now()>=(f.promptManagerCustomDragSuppressClickUntil??0)||!(e.target instanceof Element?e.target:null)?.closest(S)||ct(e)}function aI(e,t,n){if(!n||f.promptManagerCustomDragState||f.promptManagerCustomDragPendingState)return!1;const r={dragTarget:t,sourceEvent:e,pointerId:typeof e.pointerId=="number"?e.pointerId:null,startX:n.clientX,startY:n.clientY,timer:0};return r.timer=setTimeout(()=>{iI()},FC),f.promptManagerCustomDragPendingState=r,document.addEventListener("pointermove",v_,!0),document.addEventListener("pointerup",yd,!0),document.addEventListener("pointercancel",w_,!0),document.addEventListener("touchmove",T_,{capture:!0,passive:!0}),document.addEventListener("touchend",Ed,!0),document.addEventListener("touchcancel",C_,!0),document.addEventListener("keydown",k_,!0),!0}function iI(){const e=f.promptManagerCustomDragPendingState;if(!e)return;Sd(),Ks(e.sourceEvent,e.dragTarget,{clientX:e.startX,clientY:e.startY},{suppressNextClick:!0})&&(f.promptManagerCustomDragSuppressCompatUntil=Date.now()+300)}function v_(e){const t=f.promptManagerCustomDragPendingState;!t||t.pointerId===null||e.pointerId!==t.pointerId||x_(e)}function T_(e){f.promptManagerCustomDragPendingState?.pointerId===null&&x_(e)}function x_(e){const t=f.promptManagerCustomDragPendingState,n=In(e);if(!t||!n)return;Math.hypot(n.clientX-t.startX,n.clientY-t.startY)>zC&&Ln()}function yd(e){const t=f.promptManagerCustomDragPendingState;!t||t.pointerId===null||e.pointerId!==t.pointerId||Ln()}function w_(e){yd(e)}function Ed(){f.promptManagerCustomDragPendingState?.pointerId===null&&Ln()}function C_(){Ed()}function k_(e){e.key==="Escape"&&Ln()}function Ln(){Sd()}function Sd(){const e=f.promptManagerCustomDragPendingState;e&&(clearTimeout(e.timer),delete f.promptManagerCustomDragPendingState,document.removeEventListener("pointermove",v_,!0),document.removeEventListener("pointerup",yd,!0),document.removeEventListener("pointercancel",w_,!0),document.removeEventListener("touchmove",T_,!0),document.removeEventListener("touchend",Ed,!0),document.removeEventListener("touchcancel",C_,!0),document.removeEventListener("keydown",k_,!0))}function vd(e){if(!(e instanceof Element))return null;const t=e.closest(`${S} li.completion_prompt_manager_prompt[data-pm-identifier]`),n=t?.closest(S),r=t?.querySelector(".drag-handle")??t,o=e.closest(`${S} li.completion_prompt_manager_prompt .drag-handle`);return!(r instanceof HTMLElement)||!(t instanceof HTMLElement)||!(n instanceof HTMLElement)||de()&&!N.presetMobileWholeRowDragEnabled&&!(o instanceof HTMLElement)||e.closest(Os)||!t.classList.contains("completion_prompt_manager_prompt_draggable")?null:{handle:r,row:t,list:n}}function A_(e){return typeof e.button!="number"||e.button===0}function In(e){const t=e?.touches?.[0]??e?.changedTouches?.[0];return t?{clientX:t.clientX,clientY:t.clientY}:typeof e?.clientX=="number"&&typeof e?.clientY=="number"?{clientX:e.clientX,clientY:e.clientY}:null}function sI(e,t,n){lI(e,t),t.classList.remove(Ds),t.classList.add(Re),t.style.setProperty("position","fixed","important"),t.style.setProperty("box-sizing","border-box","important"),t.style.setProperty("left",`${n.left}px`,"important"),t.style.setProperty("top",`${n.top}px`,"important"),t.style.setProperty("width",`${n.width}px`,"important"),t.style.setProperty("height",`${n.height}px`,"important"),t.style.setProperty("margin","0","important"),t.style.setProperty("pointer-events","none","important"),t.style.setProperty("z-index","50000","important"),t.style.setProperty("cursor","grabbing","important"),t.style.setProperty("transform","translate3d(0, 0, 0)","important"),t.querySelectorAll(".drag-handle").forEach(r=>{r instanceof HTMLElement&&r.style.setProperty("cursor","grabbing","important")})}function lI(e,t){const n=[e,...e.querySelectorAll("*")],r=[t,...t.querySelectorAll("*")];for(let o=0;o<n.length;o++){const a=n[o],i=r[o];if(!(a instanceof Element)||!(i instanceof HTMLElement))continue;const s=getComputedStyle(a);for(let l=0;l<s.length;l++){const c=s[l];i.style.setProperty(c,s.getPropertyValue(c),s.getPropertyPriority(c))}}}function Ks(e,{handle:t,row:n,list:r},o,{suppressNextClick:a=!1}={}){if(!o||f.promptManagerCustomDragState||!xa()||!tt(r))return!1;const i=Td(r),s=i.indexOf(n);if(s<0||i.length<2)return!1;const l=n.getBoundingClientRect(),c=n.cloneNode(!0),u=document.createElement("div"),p=G_(r);sI(n,c,l),u.className=Bu,document.body.append(c,u),n.classList.add(Ds),r.classList.add(ir);const b={list:r,row:n,rows:i,clone:c,indicator:u,handle:t,pointerId:typeof e.pointerId=="number"?e.pointerId:null,sourceIndex:s,dropIndex:s,startLeft:l.left,startTop:l.top,offsetX:o.clientX-l.left,offsetY:o.clientY-l.top,clientX:o.clientX,clientY:o.clientY,scrollContainer:p,frame:0,autoScrollFrame:0,moved:!1,suppressNextClick:a,originalBodyCursor:document.body.style.cursor};if(f.promptManagerCustomDragState=b,document.body.style.cursor="grabbing",typeof t.setPointerCapture=="function"&&b.pointerId!==null)try{t.setPointerCapture(b.pointerId)}catch{}return document.addEventListener("pointermove",P_,!0),document.addEventListener("pointerup",R_,!0),document.addEventListener("pointercancel",B_,!0),document.addEventListener("mousemove",L_,!0),document.addEventListener("mouseup",M_,!0),document.addEventListener("touchmove",I_,{capture:!0,passive:!1}),document.addEventListener("touchend",O_,!0),document.addEventListener("touchcancel",D_,!0),document.addEventListener("keydown",$_,!0),wd(b),!0}function xa(){return!!(m&&typeof m.getPromptOrderForCharacter=="function"&&typeof m.removePromptOrderForCharacter=="function"&&typeof m.addPromptOrderForCharacter=="function"&&typeof m.saveServiceSettings=="function"&&m.activeCharacter)}function Td(e){return Array.from(e.querySelectorAll("li.completion_prompt_manager_prompt[data-pm-identifier].completion_prompt_manager_prompt_draggable")).filter(t=>!t.classList.contains(Re))}function P_(e){const t=f.promptManagerCustomDragState;!t||t.pointerId===null||e.pointerId!==t.pointerId||xd(e)}function L_(e){f.promptManagerCustomDragState?.pointerId===null&&xd(e)}function I_(e){f.promptManagerCustomDragState?.pointerId===null&&xd(e)}function xd(e){const t=f.promptManagerCustomDragState,n=In(e);!t||!n||(ct(e),t.clientX=n.clientX,t.clientY=n.clientY,t.moved=!0,wd(t))}function R_(e){const t=f.promptManagerCustomDragState;!t||t.pointerId===null||e.pointerId!==t.pointerId||(ct(e),Qt())}function M_(e){const t=f.promptManagerCustomDragState;!t||t.pointerId!==null||(ct(e),Qt())}function O_(e){const t=f.promptManagerCustomDragState;!t||t.pointerId!==null||(ct(e),Qt())}function B_(e){const t=f.promptManagerCustomDragState;!t||t.pointerId===null||e.pointerId!==t.pointerId||(ct(e),Qt({cancelled:!0}))}function D_(e){f.promptManagerCustomDragState&&(ct(e),Qt({cancelled:!0}))}function $_(e){e.key!=="Escape"||!f.promptManagerCustomDragState||(ct(e),Qt({cancelled:!0}))}function wd(e){e.frame||(e.frame=requestAnimationFrame(()=>{e.frame=0,cI(e)}))}function cI(e){if(f.promptManagerCustomDragState!==e)return;const t=e.clientX-e.offsetX,n=e.clientY-e.offsetY,r=t-e.startLeft,o=n-e.startTop;e.clone.style.setProperty("transform",`translate3d(${r}px, ${o}px, 0)`,"important"),e.dropIndex=uI(e,e.clientY),dI(e),N_(e)}function uI(e,t){const n=e.rows.filter(r=>r!==e.row);for(let r=0;r<n.length;r++){const o=n[r].getBoundingClientRect();if(t<o.top+o.height/2)return r}return n.length}function dI(e){const t=e.rows.filter(a=>a!==e.row),n=e.list.getBoundingClientRect(),r=t[e.dropIndex];let o=n.top;r instanceof HTMLElement?o=r.getBoundingClientRect().top:t.length&&(o=t[t.length-1].getBoundingClientRect().bottom),e.indicator.style.left=`${n.left}px`,e.indicator.style.top=`${Math.round(o-1)}px`,e.indicator.style.width=`${n.width}px`}function N_(e){e.autoScrollFrame||(e.autoScrollFrame=requestAnimationFrame(()=>{if(e.autoScrollFrame=0,f.promptManagerCustomDragState!==e)return;H_(e)&&(wd(e),N_(e))}))}function H_(e){const t=e.scrollContainer;if(!t)return!1;const n=56,r=18,o=t===document.scrollingElement?{top:0,bottom:window.innerHeight}:t.getBoundingClientRect();let a=0;if(e.clientY<o.top+n?a=-Math.ceil((1-(e.clientY-o.top)/n)*r):e.clientY>o.bottom-n&&(a=Math.ceil((1-(o.bottom-e.clientY)/n)*r)),!a)return!1;if(t===document.scrollingElement){const s=window.scrollY;return window.scrollBy(0,a),window.scrollY!==s}const i=t.scrollTop;return t.scrollTop+=a,t.scrollTop!==i}function G_(e){return[m?.containerElement?.closest?.(".scrollableInner"),e.closest(".scrollableInner"),e.closest(".drawer-content"),document.scrollingElement].find(n=>n instanceof HTMLElement)??document.scrollingElement}function Qt({cancelled:e=!1}={}){const t=f.promptManagerCustomDragState;if(t){if(delete f.promptManagerCustomDragState,document.removeEventListener("pointermove",P_,!0),document.removeEventListener("pointerup",R_,!0),document.removeEventListener("pointercancel",B_,!0),document.removeEventListener("mousemove",L_,!0),document.removeEventListener("mouseup",M_,!0),document.removeEventListener("touchmove",I_,!0),document.removeEventListener("touchend",O_,!0),document.removeEventListener("touchcancel",D_,!0),document.removeEventListener("keydown",$_,!0),t.frame&&cancelAnimationFrame(t.frame),t.autoScrollFrame&&cancelAnimationFrame(t.autoScrollFrame),typeof t.handle.releasePointerCapture=="function"&&t.pointerId!==null)try{t.handle.releasePointerCapture(t.pointerId)}catch{}t.clone.remove(),t.indicator.remove(),t.row.classList.remove(Ds),t.list.classList.remove(ir),document.body.style.cursor=t.originalBodyCursor,t.suppressNextClick&&(f.promptManagerCustomDragSuppressClickUntil=Date.now()+VC),!e&&t.moved&&pI(t),f.promptManagerTokenRefreshPendingAfterDrag&&(f.promptManagerTokenRefreshPendingAfterDrag=!1,Fn())}}function pI(e){const n=e.rows.filter(a=>a!==e.row)[e.dropIndex]??null;if(n===e.row)return;const r=e.rows.map(a=>a.dataset.pmIdentifier).filter(Boolean);n?e.list.insertBefore(e.row,n):e.list.append(e.row);const o=Td(e.list).map(a=>a.dataset.pmIdentifier).filter(Boolean);Er(r,o)||mI(e.list)}function mI(e){if(!xa())return;const t=m.getPromptOrderForCharacter(m.activeCharacter)??[],n=new Map(t.filter(Boolean).map(o=>[o.identifier,o])),r=Td(e).map(o=>n.get(o.dataset.pmIdentifier)).filter(Boolean);m.removePromptOrderForCharacter(m.activeCharacter),m.addPromptOrderForCharacter(m.activeCharacter,r),m.log?.(`Prompt order updated for ${m.activeCharacter?.name??"OpenAI preset"}.`),Hn()}function Er(e,t){return e.length===t.length&&e.every((n,r)=>n===t[r])}function ct(e){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.()}function Cd(){if(!N.presetSwitchOptimizationEnabled){fI();return}if(DI(),MI(),OI(),Vu(),gI(),bI(),F_(),BI(),CI(),kI(),f[Em])return;const e=async()=>{await dR()};f[Em]=e,typeof M.makeFirst=="function"?M.makeFirst(w.OAI_PRESET_CHANGED_AFTER,e):M.on(w.OAI_PRESET_CHANGED_AFTER,e)}function fI(){se()||(xh(),!(!m||typeof m.renderPromptManagerListItems!="function")&&Promise.resolve(m.renderPromptManagerListItems()).catch(e=>{console.debug(`${D} Failed to re-render prompt manager after disabling preset switch optimization`,e)}))}function gI(){if(f[Tm])return;const e=t=>{t?.apiId!=="openai"||!t?.name||js(t.name)};f[Tm]=e,M.on(w.PRESET_DELETED,e)}function bI(){if(f[xm])return;const e=t=>{const n=t?.presetName;n&&(wI(t?.data),js(n))};f[xm]=e,M.on(w.OAI_PRESET_IMPORT_READY,e)}function F_(){if(f[wm]||!w.PRESET_RENAMED_BEFORE||!w.PRESET_RENAMED)return;const e=n=>hI(n),t=n=>{EI(n)};f[wm]={beforeHandler:e,renamedHandler:t},M.on(w.PRESET_RENAMED_BEFORE,e),M.on(w.PRESET_RENAMED,t)}async function hI(e){if(e?.apiId!=="openai"||!e.oldName||!e.newName)return;const t=Bk(e.oldName,e.newName);try{if(await t,!se())return;await fd(),f.presetPromptGroupRuntimePresetName===e.oldName&&ld({force:!0,persist:!1}),f.renamedPresetGroupStash=_I(e.oldName,e.newName)}catch(n){console.debug(`${D} Failed to prepare preset prompt groups before preset rename`,n)}}function _I(e,t){const n=Ni(z?.extensions,Xr),r=Pn(n)?n:f.presetPromptGroupRuntimePresetName===e?f.presetPromptGroupRuntimeState:null;return Pn(r)?{newName:t,groupState:structuredClone(r)}:null}function yI(e){const t=f.renamedPresetGroupStash;if(delete f.renamedPresetGroupStash,!t||t.newName!==e||!Pn(t.groupState))return!1;const n=structuredClone(t.groupState),r={presetName:e,groupState:n,syncKey:`${e}:${JSON.stringify(n)}`};return sd(r),f.presetPromptGroupExtensionSyncKey=r.syncKey,f.presetPromptGroupRuntimePresetName=e,f.presetPromptGroupRuntimeState=structuredClone(n),Nn(e),!0}function EI(e){e?.apiId!=="openai"||!e.oldName||!e.newName||(SI(e.oldName,e.newName),Dk(e.oldName,e.newName),se()&&(f.presetPromptGroupRuntimePresetName===e.oldName?f.presetPromptGroupRuntimePresetName=e.newName:f.presetPromptGroupRuntimePresetName===e.newName&&js(e.newName),delete f.presetPromptGroupExtensionSyncKey,yI(e.newName),br()?(Ie(),tt(Ye(),{signature:x().lastStructureSignature})):vc(0)))}function SI(e,t){const n=x();Jm(gn(n),e,t),Jm(bn(n),e,t),vI(dn(n),e,t),TI(gd(n),e,t),xI(hd(n),e,t)}function Jm(e,t,n){if(!(e instanceof Map)||!e.has(t))return!1;const r=e.get(t);if(e.delete(t),!r||typeof r!="object")return!1;const o={...r,presetName:n};return o.groupState&&(o.syncKey=`${n}:${JSON.stringify(o.groupState)}`),e.set(n,o),!0}function vI(e,t,n){return!(e instanceof Set)||!e.has(t)?!1:(e.delete(t),e.add(n),!0)}function TI(e,t,n){if(!(e instanceof Map)||!e.has(t))return!1;const r=e.get(t);return e.delete(t),e.set(n,Math.max(Number(e.get(n))||0,Number(r)||0)),!0}function xI(e,t,n){if(!(e instanceof Map)||!e.has(t))return!1;const r=e.get(t),o=e.get(n);if(e.delete(t),!r||typeof r!="object")return!1;if(r.presetName=n,!o||o===r)return e.set(n,r),!0;const a=Number(r.requestedRevision),i=Number(o.requestedRevision);return r.requestedRevision!==null&&(o.requestedRevision===null||a>=i)&&(o.requestedRevision=r.requestedRevision,o.requestedSnapshot=r.requestedSnapshot),o.presetName=n,!o.promise&&r.promise?e.set(n,r):e.set(n,o),!0}function wI(e){const t=Ni(e?.extensions,Xr)?.groups;if(!Array.isArray(t))return!1;for(const n of t)n&&typeof n=="object"&&(n.collapsed=!0);return!0}function js(e=null){e&&f.presetPromptGroupRuntimePresetName!==e||(delete f.presetPromptGroupRuntimePresetName,delete f.presetPromptGroupRuntimeState)}function CI(){if(f[Sm])return;const e=()=>{AI()};f[Sm]=e,typeof M.makeFirst=="function"?M.makeFirst(w.CHATCOMPLETION_MODEL_CHANGED,e):M.on(w.CHATCOMPLETION_MODEL_CHANGED,e)}function kI(){if(f[vm])return;const e=[],t=(r,o,{suppressMs:a=0,delayMs:i=fc,allowNoContext:s=!1,requireVisible:l=!0}={})=>{if(!r||typeof M?.on!="function")return;const c=()=>{Al(o,{suppressMs:a,delayMs:i,allowNoContext:s,requireVisible:l})};e.push({eventType:r,handler:c}),typeof M.makeFirst=="function"?M.makeFirst(r,c):M.on(r,c)};t(w.CHAT_LOADED,"chat load",{suppressMs:Pt,delayMs:0}),t(w.CHAT_CHANGED,"chat changed",{suppressMs:Pt,allowNoContext:!0}),t("groupSelected","group selected",{suppressMs:Pt,allowNoContext:!0}),t(w.CHARACTER_EDITED,"character edited",{suppressMs:Pt}),t(w.CHARACTER_DELETED,"character deleted",{suppressMs:Pt}),t(w.MESSAGE_SENT,"message sent",{delayMs:ln}),t(w.MESSAGE_RECEIVED,"message received",{suppressMs:Pt,delayMs:ln}),t(w.MESSAGE_EDITED,"message edited",{suppressMs:Pt,delayMs:ln}),t(w.MESSAGE_UPDATED,"message updated",{delayMs:ln}),t(w.MESSAGE_DELETED,"message deleted",{suppressMs:Pt,delayMs:ln}),t(w.MESSAGE_SWIPED,"message swiped",{delayMs:ln}),t(w.MESSAGE_SWIPE_DELETED,"message swipe deleted",{delayMs:ln}),t(w.GENERATION_ENDED,"generation ended",{delayMs:Bs}),t(w.WORLDINFO_SETTINGS_UPDATED,"world info settings updated",{suppressMs:Pt}),t(w.WORLDINFO_UPDATED,"world info updated"),t(w.WORLDINFO_FORCE_ACTIVATE,"world info force activate"),t(w.WORLDINFO_SCAN_DONE,"world info scan done"),t(w.PERSONA_CHANGED,"persona changed"),t(w.PERSONA_CREATED,"persona created"),t(w.PERSONA_UPDATED,"persona updated"),t(w.PERSONA_RENAMED,"persona renamed"),t(w.PERSONA_DELETED,"persona deleted"),t(w.CHATCOMPLETION_SOURCE_CHANGED,"chat completion source changed",{suppressMs:Pt}),t(w.SETTINGS_UPDATED,"settings updated",{delayMs:250});const n=r=>{(r.target instanceof Element?r.target:null)?.matches?.("#openai_max_context, #openai_max_tokens")&&Al("token budget changed",{suppressMs:Pt,delayMs:fc,requireVisible:!0})};document.addEventListener("change",n,!0),f[vm]={registrations:e,tokenSettingsHandler:n},Al("initial prompt manager token refresh",{delayMs:250,allowNoContext:!0})}function Al(e,{suppressMs:t=0,delayMs:n=fc,allowNoContext:r=!1,requireVisible:o=!0}={}){if(!N.presetSwitchOptimizationEnabled||o&&!go())return;const a=oa(),i=Date.now();a.inFlight||i<Number(a.suppressUntil||0)||!kd()&&!r||(t>0&&Id(t),a.reason=e||"context change",a.attempt=0,a.allowNoContext=!!r,a.requireVisible=!!o,clearTimeout(a.timer),a.timer=setTimeout(()=>{a.timer=null,z_(a.reason,a.attempt,a.allowNoContext,a.requireVisible)},Math.max(0,Number(n)||0)))}function kd(){return!!We?.()}function oa(){return(!f[Da]||typeof f[Da]!="object")&&(f[Da]={timer:null,reason:"",attempt:0,allowNoContext:!1,requireVisible:!0,inFlight:!1,suppressUntil:0}),f[Da]}async function AI(){if(!(!N.presetSwitchOptimizationEnabled||!Gn()))try{Id(),await Sr(),ry()}catch(e){console.debug(`${D} Failed to fast-refresh prompt manager after model change`,e)}}async function z_(e,t=0,n=!1,r=!0){if(N.presetSwitchOptimizationEnabled)try{if(r&&!go()||Iu())return;if(!Gn()){if(t>=dk)return;const o=oa();o.reason=e||o.reason||"context change",o.attempt=t+1,o.allowNoContext=!!n,o.requireVisible=!!r,clearTimeout(o.timer),o.timer=setTimeout(()=>{o.timer=null,z_(o.reason,o.attempt,o.allowNoContext,o.requireVisible)},uk);return}if(!kd()){n&&await V_();return}await RI(e||"context change",{markPending:!1,forceVisible:!r})}catch(o){console.debug(`${D} Failed to fast-refresh prompt manager after ${e}`,o)}}async function V_(){const e=oa(),t=hn();e.inFlight=!0;const n=Gi(),r=Gr(),o=qs();t.lastSignature="",o||(t.lastEffectiveTokenCountSignature="",Rn(null));try{if(await PI()){const i=Gi(),s=Gr();n&&i===n?t.lastSignature=n:(t.lastSignature="",t.pendingAfterFlight=!0),r&&s===r?t.lastEffectiveTokenCountSignature=r:r&&(t.lastEffectiveTokenCountSignature="",Rn(null),t.pendingAfterFlight=!0)}br()?Ie():await Sr(),kc()}catch(a){console.debug(`${D} Failed to refresh prompt manager after leaving chat`,a)}finally{e.inFlight=!1,e.suppressUntil=Date.now()+nh}}async function PI(){if(!m?.tokenHandler||typeof m.getPromptCollection!="function")return!1;const e=m.tokenHandler;if(typeof e.resetCounts!="function"||typeof e.getCounts!="function")return!1;e.resetCounts();const t=e.getCounts();for(const a of m.serviceSettings?.prompts||[])a?.identifier&&(t[a.identifier]=0);const n=m.getPromptCollection("normal"),o=(Array.isArray(n?.collection)?n.collection:[]).filter(a=>a?.identifier&&typeof a.content=="string"&&a.content.length>0).map(a=>({identifier:a.identifier,message:{role:a.role||"system",content:a.content}}));if(o.length>0){if(!wa())return!1;const a=lo();(await LI(a,o)).forEach((s,l)=>{t[o[l].identifier]=II(s,a)})}return m.tokenUsage=typeof e.getTotal=="function"?e.getTotal():0,!0}async function LI(e,t){const n=new Array(t.length),r=[];for(let o=0;o<t.length;o+=1){const a=t[o],i=Xs(e,a.message),s=at().cache.get(i);if(typeof s=="number"){n[o]=s;continue}r.push({index:o,key:i,message:a.message})}return r.length>0&&(await Ys(e,r)).forEach((a,i)=>{const s=r[i];Qs(s.key,a),n[s.index]=a}),n.map(o=>Number(o)||0)}function II(e,t){const n=Number(e);return Number.isFinite(n)?Math.max(0,n-(t==="claude"?1:3)):0}async function RI(e,{markPending:t=!0,forceVisible:n=!1}={}){try{if(!Gn()||!n&&!go())return;await Sr(),t&&Bd(),fo(e||"context change token refresh",{delayMs:Bs,forceVisible:n})}catch(r){console.debug(`${D} Failed to fast-refresh prompt manager after ${e}`,r)}}function MI(){if(f[Am])return;const e=t=>{NI(t)};f[Am]=e,document.addEventListener("click",e,!0)}function OI(){if(f[Pm])return;const e=t=>{FI(t)};f[Pm]=e,document.addEventListener("click",e,!0)}function BI(){if(f[ym])return;const e=async t=>{await uR(t)};f[ym]=e,typeof M.makeLast=="function"?M.makeLast(w.OAI_PRESET_CHANGED_BEFORE,e):M.on(w.OAI_PRESET_CHANGED_BEFORE,e)}function DI(){if(f[km])return;const e=t=>{$I(t)};f[km]=e,document.addEventListener("change",e,!0)}function $I(e){if(!N.presetSwitchOptimizationEnabled||!de())return;const t=e.target instanceof HTMLSelectElement?e.target:null;!t?.matches(Yb)||f.allowOpenAiPresetSelectChange||(e.stopPropagation(),e.stopImmediatePropagation(),t.blur(),setTimeout(()=>{f.allowOpenAiPresetSelectChange=!0;try{$(t).trigger("change")}finally{f.allowOpenAiPresetSelectChange=!1}},0))}function NI(e){!N.presetSwitchOptimizationEnabled||!(e.target instanceof Element?e.target:null)?.closest(KC)||(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),HI())}async function HI(){if(!await fe(d`Delete the preset? This action is irreversible and your current settings will be overwritten.`,ge.CONFIRM))return;const t=document.querySelector(Yb),n=z.preset_settings_openai;if(!(t instanceof HTMLSelectElement)||!n)return;p_();const r=Math.max(0,t.selectedIndex),o=Ja?.[n];if(o!==void 0?t.querySelector(`option[value="${GI(o)}"]`)?.remove():t.selectedIndex>=0&&t.options[t.selectedIndex]?.remove(),delete Ja[n],z.preset_settings_openai=null,Object.keys(Ja).length&&t.options.length){const i=r<t.options.length?r:0;t.selectedIndex=i,z.preset_settings_openai=t.options[i]?.text??null,$(t).trigger("change")}(await fetch("/api/presets/delete",{method:"POST",headers:me(),body:JSON.stringify({apiId:"openai",name:n})})).ok?(toastr.success(d`Preset deleted`),await M.emit(w.PRESET_DELETED,{apiId:"openai",name:n})):toastr.warning(d`Preset was not deleted from server`),await fr()}function GI(e){const t=String(e);return typeof globalThis.CSS?.escape=="function"?globalThis.CSS.escape(t):t.replace(/["\\]/g,"\\$&")}function FI(e){if(!N.presetSwitchOptimizationEnabled&&!se())return;const t=e.target instanceof Element?e.target:null;if(!t){be();return}const n=t.closest(`${S} .bai-bai-preset-prompt-actions-hint`);if(n instanceof HTMLElement){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),W_(n);return}if(t.closest(`${S} .bai-bai-preset-prompt-actions, ${S} .bai-bai-preset-prompt-actions-hint`)||be(),!t.closest(S)||IR(e,t))return;const r=t.closest("[data-preset-prompt-action], .prompt-manager-detach-action, .prompt-manager-inspect-action, .prompt-manager-edit-action");r&&Pe(e,r)}async function Pe(e,t=null){if(t||=e?.currentTarget instanceof Element?e.currentTarget:null,!(t instanceof Element))return;const n=t.getAttribute("data-preset-prompt-action"),r=oR(t);if(n==="favorite"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),xL(r);return}if(n==="global-library"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),KI(r);return}if(n==="group-range"){if(e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),!se()){toastr.warning(d`请先开启预设分组。`);return}if(!r){toastr.warning(d`没有找到要作为起点的预设条目。`);return}if(aR(r)){toastr.warning(d`分组内条目暂不支持再次创建分组。`);return}s_(x().state,{startId:r});return}if(n==="global-library-new-group"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),eR();return}if(n==="global-library-toggle-select"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),Ws();return}if(n==="global-library-select-item"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),RL(Ga(t));return}if(n==="global-library-insert-selected"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),ML();return}if(n==="global-library-move-selected"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),OL();return}if(n==="global-library-delete-selected"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),BL();return}if(n==="global-library-group-rename"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),tR(ef(t));return}if(n==="global-library-group-delete"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),nR(ef(t));return}if(n==="global-library-insert"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),jI(Ga(t));return}if(n==="global-library-edit"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),XI(Ga(t));return}if(n==="global-library-delete"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),JI(Ga(t));return}if(n==="copy"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),iR(t);return}if(n==="delete"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be();const s=await zI(r);if(s===jb){await VI(r);return}if(s!==Kb)return;o_(r)}const o=n==="delete"||t.classList.contains("prompt-manager-detach-action"),a=o?m?.handleDetach:n==="inspect"||t.classList.contains("prompt-manager-inspect-action")?m?.handleInspect:m?.handleEdit;if(typeof a!="function")return;e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be();const i=m.saveServiceSettings;try{o&&typeof i=="function"&&(m.saveServiceSettings=()=>Promise.resolve()),a.call(m,e),o&&(Hn(),Nn()),Zn(void 0,{forceFromSource:!0})}catch(s){console.debug(`${D} Failed to handle prompt manager list action`,s)}finally{o&&typeof i=="function"&&(m.saveServiceSettings=i)}}async function zI(e){const t=m?.getPromptById?.(e),n=Lr(String(t?.name||e||d`这个条目`)),r=pd(t),o=[{text:d`仅移除`,icon:"fa-chain-broken",result:Kb}];return r&&o.push({text:d`彻底删除`,icon:"fa-trash",result:jb,classes:["caution"]}),fe(`<div class="bai-bai-preset-prompt-delete-choice">
            <p>${d`要如何处理这个预设条目？`}</p>
            <p><strong>${n}</strong></p>
            <p>${d`仅移除会保留条目本体，以后仍可重新添加；彻底删除会从当前预设中删除这个条目定义。`}</p>
        </div>`,ge.TEXT,"",{okButton:!1,cancelButton:d`取消`,customButtons:o})}async function VI(e){if(!e||!m||!Array.isArray(m.serviceSettings?.prompts))return toastr.warning(d`没有找到要删除的预设条目。`),!1;const t=m.getPromptById?.(e);if(!t)return toastr.warning(d`没有找到要删除的预设条目。`),!1;if(!pd(t))return toastr.warning(d`这个预设条目不能被彻底删除。`),!1;const n=m.serviceSettings.prompts.findIndex(o=>o?.identifier===e);if(n<0)return toastr.warning(d`没有找到要删除的预设条目。`),!1;o_(e),m.serviceSettings.prompts.splice(n,1),UI(e),WI(e);const r=m.tokenHandler?.getCounts?.();return r&&typeof r=="object"&&delete r[e],m.hidePopup?.(),m.clearEditForm?.(),m.clearInspectForm?.(),m.log?.(`Deleted prompt: ${t.identifier}`),Hn(),Nn(),q_(),Zn(void 0,{forceFromSource:!0}),Fn(),Tn({includeOpenAiPresetSaves:!1}).catch(o=>{console.debug(`${D} Failed to save deleted preset prompt changes`,o),toastr.error(d`删除预设条目后保存失败。`)}),toastr.success(d`已彻底删除预设条目。`),!0}function UI(e){let t=!1;const n=m?.serviceSettings?.prompt_order;if(Array.isArray(n))for(const o of n)t=Zm(o?.order,e)||t;const r=m?.getPromptOrderForCharacter?.(m.activeCharacter);return t=Zm(r,e)||t,t}function Zm(e,t){if(!Array.isArray(e))return!1;let n=!1;for(let r=e.length-1;r>=0;r--)e[r]?.identifier===t&&(e.splice(r,1),n=!0);return n}function WI(e){const t=He();return!t?.prompts||!Object.prototype.hasOwnProperty.call(t.prompts,e)?!1:(delete t.prompts[e],E_(t),nt(t,new Set(Ge())),mt())}async function KI(e){if(!e)return toastr.warning(d`没有找到要添加到全局库的条目。`),!1;const t=m?.getPromptById?.(e);if(!t)return toastr.warning(d`没有找到要添加到全局库的条目。`),!1;const n={id:lt(),name:hr(t.name),content:typeof t.content=="string"?t.content:String(t.content??"")};try{return await En(r=>(r.items.push(n),r)),toastr.success(d`已添加到全局库。`),!0}catch(r){return console.debug(`${D} Failed to add preset prompt to global library`,r),toastr.error(d`添加到全局库失败。`),!1}}async function jI(e){return U_(e?[e]:[])}async function U_(e){const t=Array.isArray(e)?e.filter(Boolean):[];if(t.length===0)return toastr.warning(d`没有要添加的全局库条目。`),!1;if(!m?.activeCharacter||!Array.isArray(m.serviceSettings?.prompts)||typeof m.addPrompt!="function")return toastr.warning(d`当前无法添加全局库条目。`),!1;const n=m.getPromptOrderForCharacter?.(m.activeCharacter);if(!Array.isArray(n))return toastr.warning(d`当前预设列表不可用。`),!1;const r=await Dn(),o=new Map(r.items.map(c=>[c.id,c])),a=t.map(c=>o.get(c)).filter(Boolean);if(a.length===0)return toastr.warning(d`没有找到要添加的全局库条目。`),!1;const i=await qI();if(!i)return!1;const s=m.tokenHandler?.getCounts?.(),l=i?.type==="group"?a:a.slice().reverse();for(const c of l){const u=K_(),p=QI(c.name);m.addPrompt({name:p,role:"system",content:c.content},u),YI(n,{identifier:u,enabled:!0},i),s&&(s[u]=null),m.log?.(`Added global library prompt: ${c.id} -> ${u}.`)}j_();try{return Hn(),await Tn({includeOpenAiPresetSaves:!1}),toastr.success(a.length>1?d`已添加 ${a.length} 条到当前预设。`:d`已添加到当前预设。`),Fn(),!0}catch(c){return console.debug(`${D} Failed to save global library prompt insert`,c),toastr.error(d`添加到当前预设后保存失败。`),!1}}async function qI(){const e=He(),t=Array.isArray(e?.groups)?e.groups.filter(r=>r?.id&&String(r.name||"").trim()):[];if(!t.length)return{type:"top"};const n=await $n({title:d`添加到当前预设`,fields:[{id:"target",type:"select",label:d`添加位置`,value:"top",options:[{value:"top",label:d`独立在预设最上方`},...t.map(r=>({value:r.id,label:r.name}))]}],confirmText:d`添加`,cancelText:d`取消`});return n?n.target==="top"?{type:"top"}:{type:"group",groupId:n.target}:null}function YI(e,t,n){if(!Array.isArray(e)||!t?.identifier)return;if(n?.type!=="group"||!n.groupId){e.unshift(t);return}const r=He();if(!(Array.isArray(r.groups)&&r.groups.some(s=>s?.id===n.groupId))){e.unshift(t);return}(!r.prompts||typeof r.prompts!="object")&&(r.prompts={});const a=new Set(Object.entries(r.prompts??{}).filter(([,s])=>s?.groupId===n.groupId).map(([s])=>s));let i=0;for(let s=0;s<e.length;s+=1)a.has(e[s]?.identifier)&&(i=s+1);e.splice(i,0,t),r.prompts[t.identifier]={groupId:n.groupId},mt({force:!0})}function QI(e){const t=hr(e),n=new Set((m?.serviceSettings?.prompts??[]).map(r=>r?.name).filter(r=>typeof r=="string"));if(!n.has(t))return t;for(let r=2;r<1e3;r++){const o=`${t} ${r}`;if(!n.has(o))return o}return`${t} ${Date.now()}`}async function XI(e){const t=await t_(e);if(!t)return toastr.warning(d`没有找到这个全局库条目。`),!1;const n=await $n({title:d`编辑全局库条目`,fields:[{id:"name",type:"text",label:d`名称`,value:t.name},{id:"content",type:"textarea",label:d`内容`,value:t.content,rows:16}],confirmText:d`保存`,cancelText:d`取消`});if(!n)return!1;const r=hr(n.name),o=typeof n.content=="string"?n.content:String(n.content??"");try{return await En(a=>(a.items=a.items.map(i=>i.id===e?{id:i.id,name:r,content:o}:i),a)),toastr.success(d`已更新全局库条目。`),!0}catch(a){return console.debug(`${D} Failed to edit preset global library item`,a),toastr.error(d`更新全局库条目失败。`),!1}}async function JI(e){if(!await t_(e))return toastr.warning(d`没有找到这个全局库条目。`),!1;if(!await $n({title:d`删除全局库条目`,message:d`要删除这个全局库条目吗？`,confirmText:d`删除`,cancelText:d`取消`,danger:!0}))return!1;try{return await En(r=>(r.items=r.items.filter(o=>o.id!==e),r)),toastr.success(d`已删除全局库条目。`),!0}catch(r){return console.debug(`${D} Failed to delete preset global library item`,r),toastr.error(d`删除全局库条目失败。`),!1}}async function ZI(){const t=x().state?.globalLibrary;if(!t)return;const n=[],r=new Set,o=(i,s)=>{!i?.id||r.has(i.id)||(r.add(i.id),n.push({id:i.id,groupId:s||null}))};for(const i of Array.isArray(t.ungrouped)?t.ungrouped:[])o(i,null);for(const i of Array.isArray(t.groups)?t.groups:[])for(const s of Array.isArray(i.children)?i.children:[])o(s,i.groupId);const a=new Map(n.map(i=>[i.id,i.groupId]));try{await En(i=>{const s=new Set(i.groups.map(u=>u.id)),l=i.items.slice(),c=[];for(const u of n){const p=l.findIndex(v=>v.id===u.id);if(p===-1)continue;const[b]=l.splice(p,1);b.groupId=u.groupId&&s.has(u.groupId)?u.groupId:null,c.push(b)}for(const u of l){if(a.has(u.id)){const p=a.get(u.id);u.groupId=p&&s.has(p)?p:null}c.push(u)}return i.items=c,i})}catch(i){console.debug(`${D} Failed to persist global library drag`,i),toastr.error(d`移动全局库条目失败。`),Dn({force:!0,showLoading:!1})}}async function eR(){const e=await $n({title:d`新建分组`,fields:[{id:"name",type:"text",label:d`分组名称`,value:""}],confirmText:d`创建`,cancelText:d`取消`});if(!e)return!1;const t=hr(e.name);try{return await En(n=>(n.groups.push({id:lt(),name:t,collapsed:!1}),n)),toastr.success(d`已新建分组。`),!0}catch(n){return console.debug(`${D} Failed to create global library group`,n),toastr.error(d`新建分组失败。`),!1}}async function tR(e){if(!e)return!1;const n=(await Dn()).groups.find(a=>a.id===e);if(!n)return toastr.warning(d`没有找到这个分组。`),!1;const r=await $n({title:d`重命名分组`,fields:[{id:"name",type:"text",label:d`分组名称`,value:n.name}],confirmText:d`保存`,cancelText:d`取消`});if(!r)return!1;const o=hr(r.name);try{return await En(a=>(a.groups=a.groups.map(i=>i.id===e?{...i,name:o}:i),a)),toastr.success(d`已重命名分组。`),!0}catch(a){return console.debug(`${D} Failed to rename global library group`,a),toastr.error(d`重命名分组失败。`),!1}}async function nR(e){if(!e)return!1;if(!(await Dn()).groups.find(o=>o.id===e))return toastr.warning(d`没有找到这个分组。`),!1;if(!await $n({title:d`删除分组`,message:d`删除分组后,组内条目会移到未分组,条目本身不会被删除。确定删除吗？`,confirmText:d`删除`,cancelText:d`取消`,danger:!0}))return!1;try{return await En(o=>(o.groups=o.groups.filter(a=>a.id!==e),o.items=o.items.map(a=>a.groupId===e?{...a,groupId:null}:a),o)),toastr.success(d`已删除分组。`),!0}catch(o){return console.debug(`${D} Failed to delete global library group`,o),toastr.error(d`删除分组失败。`),!1}}function rR(e){if(!e)return;const n=x().state?.globalLibrary?.groups?.find(a=>a.groupId===e),r=n?!n.collapsed:!0;n&&(n.collapsed=r);const o=x();o.globalLibraryGroups=Vs(o.globalLibraryGroups).map(a=>a.id===e?{...a,collapsed:r}:a),Uu()}function Ga(e){return(e instanceof Element?e.closest(".bai-bai-preset-global-library-prompt[data-preset-global-library-id]"):null)?.dataset?.presetGlobalLibraryId||null}function ef(e){return(e instanceof Element?e.closest("[data-preset-global-library-group-id]"):null)?.dataset?.presetGlobalLibraryGroupId||null}function oR(e){return(e instanceof Element?e.closest(`${S} li.completion_prompt_manager_prompt[data-pm-identifier]`):null)?.dataset?.pmIdentifier||null}function aR(e){if(!e)return!1;const t=He(),n=t.prompts?.[e]?.groupId;return!!(n&&t.groups?.some(r=>r?.id===n))}function W_(e){const t=e.closest(".prompt_manager_prompt_controls");if(!(t instanceof HTMLElement))return;const n=t.querySelector(".bai-bai-preset-prompt-actions");if(!(n instanceof HTMLElement))return;const r=n.classList.contains("bai-bai-preset-prompt-actions-visible");be({except:t}),n.classList.toggle("bai-bai-preset-prompt-actions-visible",!r),t.querySelector(".bai-bai-preset-prompt-actions-hint")?.classList.toggle("bai-bai-preset-prompt-actions-hint-hidden",!r),t.closest("li.completion_prompt_manager_prompt")?.classList.toggle("bai-bai-preset-prompt-actions-open",!r)}function be({except:e=null}={}){document.querySelectorAll(`${S} .bai-bai-preset-prompt-actions-visible`).forEach(t=>{const n=t.closest(".prompt_manager_prompt_controls");n!==e&&(t.classList.remove("bai-bai-preset-prompt-actions-visible"),n?.querySelector(".bai-bai-preset-prompt-actions-hint")?.classList.remove("bai-bai-preset-prompt-actions-hint-hidden"),n?.closest("li.completion_prompt_manager_prompt")?.classList.remove("bai-bai-preset-prompt-actions-open"))})}async function iR(e){const n=e.closest(`${S} li.completion_prompt_manager_prompt[data-pm-identifier]`)?.dataset?.pmIdentifier;n&&await sR(n)}async function sR(e){if(!m?.activeCharacter||!Array.isArray(m.serviceSettings?.prompts))return toastr.warning(d`当前无法复制这个预设条目。`),!1;const t=m.getPromptById?.(e),n=m.getPromptOrderForCharacter?.(m.activeCharacter);if(!t||!Array.isArray(n))return toastr.warning(d`没有找到要复制的预设条目。`),!1;const r=n.findIndex(u=>u?.identifier===e);if(r<0)return toastr.warning(d`这个预设条目不在当前列表中。`),!1;const o=K_(),a=m.serviceSettings.prompts.findIndex(u=>u?.identifier===e),i=structuredClone(t),s=n[r]??{},l={...structuredClone(s),identifier:o,enabled:s.enabled!==!1};i.identifier=o,i.name=lR(t.name),a>=0?m.serviceSettings.prompts.splice(a+1,0,i):m.serviceSettings.prompts.push(i),n.splice(r+1,0,l),cR(e,o);const c=m.tokenHandler?.getCounts?.();c&&(c[o]=null),m.log?.(`Copied prompt: ${e} -> ${o}.`),j_(),Nn();try{return await Rd(),toastr.success(d`已复制预设条目。`),Fn(),!0}catch(u){return console.debug(`${D} Failed to save copied preset prompt`,u),toastr.error(d`复制预设条目后保存失败。`),!1}}function K_(){let e=lt();for(;m?.getPromptById?.(e);)e=lt();return e}function lR(e){const n=`${String(e||d`未命名条目`)} 副本`,r=new Set((m?.serviceSettings?.prompts??[]).map(o=>o?.name).filter(o=>typeof o=="string"));if(!r.has(n))return n;for(let o=2;o<1e3;o++){const a=`${n} ${o}`;if(!r.has(a))return a}return`${n} ${Date.now()}`}function cR(e,t){if(!se())return!1;const n=He(),r=n.prompts?.[e]?.groupId;return r?(n.prompts[t]={groupId:r},nt(n,new Set(Ge())),mt(),!0):!1}function j_(){q_()}function q_(){if(br()){Ie(),tt(Ye(),{signature:x().lastStructureSignature});return}if(N.presetSwitchOptimizationEnabled&&Gn()){Sr();return}m?.render?.()}async function uR(e){if(f.openAiPresetSwitchEarlyRendered=!1,m_(e?.presetNameBefore),js(),!N.presetSwitchOptimizationEnabled||!Gn())return;const t=e?.preset;if(!(!t||typeof t!="object"||!Array.isArray(t.prompts)&&!Array.isArray(t.prompt_order)))try{pR(t),await Sr(),Bd(),f.openAiPresetSwitchEarlyRendered=!0,await Ld()}catch(n){f.openAiPresetSwitchEarlyRendered=!1,console.debug(`${D} Failed to early-render prompt manager after preset switch`,n)}}async function dR(){if(!N.presetSwitchOptimizationEnabled||!Gn()){se()&&Ie();return}try{f.openAiPresetSwitchEarlyRendered||(await Sr(),Bd()),Id(),se()&&Ie(),ry()}catch(e){console.debug(`${D} Failed to fast-render prompt manager after preset switch`,e)}finally{f.openAiPresetSwitchEarlyRendered=!1}}function Gn(){return!!(m&&typeof m.renderDebounced=="function"&&typeof m.renderPromptManager=="function"&&typeof m.renderPromptManagerListItems=="function"&&m.containerElement&&m.serviceSettings)}function pR(e){Array.isArray(e.prompts)&&(z.prompts=structuredClone(e.prompts)),Array.isArray(e.prompt_order)&&(z.prompt_order=structuredClone(e.prompt_order)),z.extensions=e.extensions&&typeof e.extensions=="object"?structuredClone(e.extensions):{},m.serviceSettings=z,m.sanitizeServiceSettings?.()}async function Sr(){if(bL()){f.presetPromptListRebuildDeferredByDialog=!0;return}Vu();const e=m.containerElement.closest(".scrollableInner"),t=e?.scrollTop,n=(f.presetPromptManagerFastRenderCycle??0)+1;f.presetPromptManagerFastRenderCycle=n;try{m.error=null,await m.renderPromptManager(),await Y_({skipVueSyncIfCurrentCycle:!0}),Z_(),typeof t=="number"&&e?.scrollTo(0,t),CR("prompt manager rendered")}finally{f.presetPromptManagerFastRenderCycle===n&&(f.presetPromptManagerFastRenderCycle=0)}}async function Y_({skipVueSyncIfCurrentCycle:e=!1}={}){if(se()){const v=x();if(e&&v.lastRenderPatchSyncCycle&&v.lastRenderPatchSyncCycle===f.presetPromptManagerFastRenderCycle&&br()){tt(Ye(),{signature:v.lastStructureSignature});return}if(await Gs(),Ie()){tt(Ye(),{signature:v.lastStructureSignature});return}}const t=m.listElement;if(!m.serviceSettings?.prompts||!t)return;const{prefix:n}=m.configuration,r=m.getPromptOrderForCharacter?.(m.activeCharacter)??[],o=m.serviceSettings.prompts.filter(Boolean),a=new Map(o.map(v=>[v.identifier,v])),i=new Map(r.filter(Boolean).map(v=>[v.identifier,v])),s=m.tokenHandler?.getCounts?.()??{},l=new Set(m.configuration.toggleDisabled??[]),c=new Set(Array.isArray(m.overriddenPrompts)?m.overriddenPrompts:[]),u=m.serviceSettings.openai_max_context-m.serviceSettings.openai_max_tokens,p=m.tokenUsage>u*.8;let b=await yv("promptManagerListHeader",{prefix:n});for(const v of r){const y=a.get(v?.identifier);if(!y)continue;const k=i.get(y.identifier)??v,P=k?.enabled?"":`${n}prompt_manager_prompt_disabled`,E=`${n}prompt_manager_prompt_draggable`,K=y.marker?`${n}prompt_manager_marker`:"",X=s[y.identifier]??0,{warningClass:B,warningTitle:V}=Ad({prompt:y,tokens:X,isTokenUsageWarning:p}),ee=X||"-",I=pd(y),Z=rh.has(y.identifier)||!y.marker,te=y.marker&&!oh.has(y.identifier)?!1:!l.has(y.identifier),ve=GL({canDelete:I,canEdit:Z,canToggle:te,isEnabled:k?.enabled!==!1});b+=mR({prefix:n,prompt:y,enabledClass:P,draggableClass:E,markerClass:K,importantClass:Q_(y,n),controlsHtml:ve,warningClass:B,warningTitle:V,calculatedTokens:ee,isOverriddenPrompt:c.has(y.identifier)})}t.innerHTML=b}function mR({prefix:e,prompt:t,enabledClass:n,draggableClass:r,markerClass:o,importantClass:a,controlsHtml:i,warningClass:s,warningTitle:l,calculatedTokens:c,isOverriddenPrompt:u}){const p=Lr(t.identifier),b=Lr(t.name??""),v=t.marker&&t.injection_position!==De.ABSOLUTE,y=!t.marker&&t.system_prompt&&t.injection_position!==De.ABSOLUTE&&!t.forbid_overrides,k=!t.marker&&t.system_prompt&&t.injection_position!==De.ABSOLUTE&&t.forbid_overrides,P=!t.marker&&!t.system_prompt&&t.injection_position!==De.ABSOLUTE,E=t.injection_position===De.ABSOLUTE,K=t.role==="system"&&(t.marker||t.system_prompt)?"":t.role,X={assistant:{roleIcon:"fa-robot",roleTitle:"Prompt will be sent as Assistant"},user:{roleIcon:"fa-user",roleTitle:"Prompt will be sent as User"}},B=X[K]?.roleIcon||"",V=X[K]?.roleTitle||"";return`
        <li class="${e}prompt_manager_prompt ${r} ${n} ${o} ${a}" data-pm-identifier="${p}">
            <span class="drag-handle">☰</span>
            <span class="${e}prompt_manager_prompt_name" data-pm-name="${b}">
                ${v?'<span class="fa-fw fa-solid fa-thumb-tack" title="Marker"></span>':""}
                ${y?'<span class="fa-fw fa-solid fa-square-poll-horizontal" title="Global Prompt"></span>':""}
                ${k?'<span class="fa-fw fa-solid fa-star" title="Important Prompt"></span>':""}
                ${P?'<span class="fa-fw fa-solid fa-asterisk" title="Preset Prompt"></span>':""}
                ${E?'<span class="fa-fw fa-solid fa-syringe" title="In-Chat Injection"></span>':""}
                ${m.isPromptInspectionAllowed?.(t)?`<a title="${b}" class="prompt-manager-inspect-action">${b}</a>`:`<span title="${b}">${b}</span>`}
                ${B?`<span data-role="${Lr(t.role)}" class="fa-xs fa-solid ${B}" title="${V}"></span>`:""}
                ${E?`<small class="prompt-manager-injection-depth">@ ${Lr(t.injection_depth?.toString?.()??"")}</small>`:""}
                ${u?'<small class="fa-solid fa-address-card prompt-manager-overridden" title="Pulled from a character card"></small>':""}
            </span>
            <span>
                <span class="prompt_manager_prompt_controls">
                    ${i}
                </span>
            </span>
            <span class="prompt_manager_prompt_tokens" data-pm-tokens="${c}"><span class="${s}" title="${l}"> </span>${c}</span>
        </li>
    `}function Q_(e,t){return!e.marker&&e.system_prompt&&e.injection_position!==De.ABSOLUTE&&e.forbid_overrides?`${t}prompt_manager_important`:""}function Ad({prompt:e,tokens:t,isTokenUsageWarning:n}){const r={warningClass:"",warningTitle:""};return!n||e.identifier!=="chatHistory"||(t<=m.configuration.dangerTokenThreshold?(r.warningClass="fa-solid tooltip fa-triangle-exclamation text_danger",r.warningTitle="Very little of your chat history is being sent, consider deactivating some other prompts."):t<=m.configuration.warningTokenThreshold&&(r.warningClass="fa-solid tooltip fa-triangle-exclamation text_warning",r.warningTitle="Only a few messages worth chat history is being sent.")),r}function X_(){if(!se())return null;const e=He(),t=Array.isArray(e?.groups)?e.groups:[];return{promptGroups:e?.prompts??{},groupsById:new Map(t.map(n=>[String(n?.id??""),n]))}}function fR(e,t,n=null){const r=e?.identifier;if(!r||t?.enabled===!1||ah.has(r))return!1;if(!se())return!0;const o=n??X_(),a=o?.promptGroups?.[r]?.groupId;return a?o?.groupsById?.get(String(a))?.enabled!==!1:!0}function gR(e){if(e===null)return null;if(e===void 0)return 0;const t=Number(e);return Number.isFinite(t)&&t>=0?Math.round(t):0}function Gr(){try{const e=m?.serviceSettings??z,t=Array.isArray(e?.prompts)?e.prompts.filter(Boolean):[],n=m?.getPromptOrderForCharacter?.(m.activeCharacter)??[],r=new Map(t.map(a=>[a.identifier,a])),o=[];for(const a of n){const i=a?.identifier||"";if(!i||ah.has(i))continue;const s=r.get(i);o.push([i,s?.role||"",s?.marker?1:0,qr(String(s?.content??""))].join(":"))}return[lo(),o.join("|")].join("||")}catch(e){return console.debug(`${D} Failed to build preset effective token count signature`,e),""}}function qs(){const e=Gr(),t=hn();return!!(e&&t.lastEffectiveTokenCountSignature&&e===t.lastEffectiveTokenCountSignature)}function Pd(){const e=m?.tokenHandler?.getCounts?.(),t=m?.getPromptOrderForCharacter?.(m.activeCharacter)??[],n=Array.isArray(m?.serviceSettings?.prompts)?m.serviceSettings.prompts.filter(Boolean):[];if(!e||!t.length||!n.length)return null;const r=new Map(n.map(l=>[l.identifier,l]));if(!qs())return null;const a=X_();let i=0,s=0;for(const l of t){const c=r.get(l?.identifier);if(!fR(c,l,a))continue;s+=1;const u=gR(e[c.identifier]);if(u===null)return null;i+=u}return s>0?Math.round(i):0}function J_(e){if(e==null)return pk;const t=Number(e);return`预设总Token: ${Number.isFinite(t)?Math.max(0,Math.round(t)):0}`}function Rn(e=void 0){if(!se())return!1;const n=document.querySelector(S)?.querySelector(`li.completion_prompt_manager_list_head span.${ih}`);if(!n)return!1;const r=J_(e===void 0?Pd():e);return n.textContent!==r&&(n.textContent=r),n.title!==gc&&(n.title=gc),!0}function Z_(){const e=(f.promptManagerDraggableInitId??0)+1;f.promptManagerDraggableInitId=e,setTimeout(()=>{if(f.promptManagerDraggableInitId===e)try{ya(),m.makeDraggable?.(),tt()}catch(t){console.debug(`${D} Failed to initialize prompt manager sorting`,t)}},0)}function Ld(){return new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,clearTimeout(r),e())},r=setTimeout(n,80);if(typeof requestAnimationFrame!="function"){n();return}requestAnimationFrame(()=>setTimeout(n,0))})}function Id(e=0){const t=m.renderDebounced;if(typeof t!="function"||t.__baiBaiToolkitPresetSwitchSuppressed)return;const n=()=>{};n.__baiBaiToolkitPresetSwitchSuppressed=!0,n.__baiBaiToolkitOriginalRenderDebounced=t,m.renderDebounced=n,setTimeout(()=>{m?.renderDebounced===n&&(m.renderDebounced=t)},Math.max(0,Number(e)||0))}function ey(){if(!f[Lm]){const e=t=>{bR(t)};f[Lm]=e,document.addEventListener("click",e,!0)}}function ty(){if(f[Im])return;const e=t=>{hR(t)};f[Im]=e,document.addEventListener("click",e,!0)}function bR(e){if(!N.presetToggleOptimizationEnabled&&!se())return;const n=(e.target instanceof Element?e.target:null)?.closest(`${S} .prompt-manager-toggle-action`);if(!n)return;const r=n.closest("li.completion_prompt_manager_prompt"),o=r?.dataset?.pmIdentifier;if(!r||!o||!m?.activeCharacter||typeof m.getPromptOrderEntry!="function")return;const a=m.getPromptOrderEntry(m.activeCharacter,o);if(!a)return;e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),a.enabled=!a.enabled;for(const s of ny(o))vR(s,s.querySelector(".prompt-manager-toggle-action"),a.enabled);eI(o,a.enabled)&&br()&&Uu(),Rn(),Hn(),Nn(),Fn()}function hR(e){const n=(e.target instanceof Element?e.target:null)?.closest(Xb);if(!n)return;if(Fr("optimized save click"),!N.presetToggleOptimizationEnabled||!m||typeof m.getPromptById!="function"){tf();return}const r=n.dataset.pmPrompt,o=r?m.getPromptById(r):null;if(!o||typeof m.updatePromptWithPromptEditForm!="function"){tf();return}e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),m.updatePromptWithPromptEditForm(o),Nn(),TR(r,o),xR(o),m.hidePopup?.(),m.clearEditForm?.(),Rd({allowPresetAutoSave:!0}).catch(a=>{console.debug(`${D} Failed to save prompt edits`,a)}),Fn()}function tf(){setTimeout(()=>{Rd({allowPresetAutoSave:!0}).catch(e=>{console.debug(`${D} Failed to prepare prompt edit preset save`,e)})},0)}async function Rd({allowPresetAutoSave:e=!1}={}){return Hn(),Nn(),!e||!N.presetAutoSaveAfterPromptEditEnabled?!1:(await Tn({includeOpenAiPresetSaves:!0}),!0)}async function _R(e=z?.preset_settings_openai){Ns();const t=Ta(e),n=Hs(z);await fh(e,n,{revision:t})}function yR(e){if(typeof globalThis.fetch!="function")return SR();const t=globalThis.fetch;let n=!1,r=!1,o=0;return new Promise((a,i)=>{const s=()=>{globalThis.fetch===c&&(globalThis.fetch=t),o&&(clearTimeout(o),o=0)},l=(u,p)=>{r||(r=!0,s(),u(p))},c=function(...u){const p=t.apply(this,u);return!n&&ER(u[0],u[1],e)&&(n=!0,Promise.resolve(p).then(b=>{if(b?.ok){l(a,!0);return}l(i,new Error("OpenAI preset update request failed"))}).catch(b=>l(i,b))),p};globalThis.fetch=c,o=setTimeout(()=>l(a,!1),1200)})}function ER(e,t,n){if(!(typeof e=="string"?e:typeof e?.url=="string"?e.url:"").includes("/api/presets/save")||String(t?.method||e?.method||"GET").toUpperCase()!=="POST")return!1;if(typeof t?.body!="string")return!0;try{const a=JSON.parse(t.body);if(a?.apiId&&a.apiId!=="openai"||n&&a?.name&&a.name!==n)return!1}catch{return!0}return!0}function SR(){return new Promise(e=>setTimeout(e,1200))}function vR(e,t,n){e.classList.toggle("completion_prompt_manager_prompt_disabled",!n),t&&(t.classList.toggle("fa-toggle-on",n),t.classList.toggle("fa-toggle-off",!n))}function Md(e,t,n=null){const r=e.querySelector(".prompt_manager_prompt_tokens");if(!r)return;const o=n?.warningClass??"",a=n?.warningTitle??"",i=t?String(t):"-",s=r.querySelector("span");if(r.dataset.pmTokens===i&&r.textContent?.trim()===i&&(s?.className??"")===o&&(s?.title??"")===a)return;const l=s??document.createElement("span");l.className=o,l.title=a,l.textContent=" ",r.dataset.pmTokens=i,r.replaceChildren(l,document.createTextNode(i))}function TR(e,t){["main","nsfw","jailbreak"].includes(e)&&m.updateQuickEdit?.(e,t)}function xR(e){const t=ny(e.identifier);if(!t.length)return;const r=m.getPromptOrderEntry?.(m.activeCharacter,e.identifier)?.enabled??!0,o=!e.marker&&e.system_prompt&&e.injection_position!==De.ABSOLUTE&&e.forbid_overrides;for(const a of t){a.classList.toggle("completion_prompt_manager_prompt_disabled",!r),a.classList.toggle("completion_prompt_manager_marker",!!e.marker),a.classList.toggle("completion_prompt_manager_important",!!o);const i=a.querySelector(".completion_prompt_manager_prompt_name");i&&wR(i,e,{allowInspect:a.dataset.presetFavoriteMirror!=="true"}),Md(a,null)}}function ny(e){const t=document.querySelector(S);return t?Array.from(t.querySelectorAll("li.completion_prompt_manager_prompt[data-pm-identifier]")).filter(n=>n.dataset.pmIdentifier===e):[]}function wR(e,t,{allowInspect:n=!0}={}){const r=t.name??"",o=t.marker&&t.injection_position!==De.ABSOLUTE,a=!t.marker&&t.system_prompt&&t.injection_position!==De.ABSOLUTE&&!t.forbid_overrides,i=!t.marker&&t.system_prompt&&t.injection_position!==De.ABSOLUTE&&t.forbid_overrides,s=!t.marker&&!t.system_prompt&&t.injection_position!==De.ABSOLUTE,l=t.injection_position===De.ABSOLUTE,c=Array.isArray(m.overriddenPrompts)&&m.overriddenPrompts.includes(t.identifier),u=t.role==="system"&&(t.marker||t.system_prompt)?"":t.role,b={assistant:{roleIcon:"fa-robot",roleTitle:"Prompt will be sent as Assistant"},user:{roleIcon:"fa-user",roleTitle:"Prompt will be sent as User"}}[u];e.dataset.pmName=r,e.replaceChildren(),o&&Lo(e,"fa-fw fa-solid fa-thumb-tack","Marker"),a&&Lo(e,"fa-fw fa-solid fa-square-poll-horizontal","Global Prompt"),i&&Lo(e,"fa-fw fa-solid fa-star","Important Prompt"),s&&Lo(e,"fa-fw fa-solid fa-asterisk","Preset Prompt"),l&&Lo(e,"fa-fw fa-solid fa-syringe","In-Chat Injection");const v=m.isPromptInspectionAllowed?.(t),y=document.createElement(n&&v?"a":"span");if(y.title=r,y.textContent=r,y instanceof HTMLAnchorElement?(y.className="prompt-manager-inspect-action",y.addEventListener("click",m.handleInspect)):v&&(y.className="prompt-manager-inspect-action bai-bai-preset-prompt-name-visual-only"),e.append(y),b){const k=document.createElement("span");k.dataset.role=t.role,k.className=`fa-xs fa-solid ${b.roleIcon}`,k.title=b.roleTitle,e.append(document.createTextNode(" "),k)}if(l){const k=document.createElement("small");k.className="prompt-manager-injection-depth",k.textContent=`@ ${t.injection_depth}`,e.append(document.createTextNode(" "),k)}if(c){const k=document.createElement("small");k.className="fa-solid fa-address-card prompt-manager-overridden",k.title="Pulled from a character card",e.append(document.createTextNode(" "),k)}}function Lo(e,t,n){const r=document.createElement("span");r.className=t,r.title=n,e.append(r,document.createTextNode(" "))}const Fn=(e="prompt manager token refresh")=>{fo(e,{delayMs:Ou})},ry=(e="prompt manager token refresh after preset switch")=>{fo(e,{delayMs:Bs,forceVisible:!0})};function hn(){(!f[Ha]||typeof f[Ha]!="object")&&(f[Ha]={timer:null,reason:"",inFlight:!1,pendingAfterFlight:!1,pendingWhileHidden:!1,lastSignature:"",lastEffectiveTokenCountSignature:"",force:!1,forceVisible:!1,displayFrame:0,pendingFrame:0});const e=f[Ha];return typeof e.lastEffectiveTokenCountSignature!="string"&&(e.lastEffectiveTokenCountSignature=typeof e.lastEffectiveTokenSignature=="string"?e.lastEffectiveTokenSignature:""),Object.prototype.hasOwnProperty.call(e,"lastEffectiveTokenSignature")&&delete e.lastEffectiveTokenSignature,e}function fo(e="prompt manager token refresh",{delayMs:t=Ou,force:n=!1,forceVisible:r=!1}={}){const o=hn();if(o.reason=e||o.reason||"prompt manager token refresh",o.force=!!(o.force||n),o.forceVisible=!!(o.forceVisible||r),!iy()){clearTimeout(o.timer),o.timer=null;return}if(f.promptManagerCustomDragState||zu()){f.promptManagerTokenRefreshPendingAfterDrag=!0;return}if(Iu()){clearTimeout(o.timer),o.timer=setTimeout(()=>{o.timer=null,fo(o.reason||e,{delayMs:ln,force:o.force,forceVisible:o.forceVisible})},ln);return}if(o.inFlight){o.pendingAfterFlight=!0;return}if(!o.forceVisible&&!go()){o.pendingWhileHidden=!0;return}clearTimeout(o.timer),o.timer=setTimeout(()=>{o.timer=null,kR()},Math.max(0,Number(t)||0))}function CR(e="prompt manager visible"){const t=hn();!t.pendingWhileHidden||!go()||(t.pendingWhileHidden=!1,fo(e,{delayMs:Bs,force:!0,forceVisible:!0}))}async function kR(){const e=hn();if(e.inFlight){e.pendingAfterFlight=!0;return}e.inFlight=!0,e.pendingAfterFlight=!1;try{await AR({reason:e.reason,force:e.force,forceVisible:e.forceVisible})}finally{e.inFlight=!1,e.force=!1,e.forceVisible=!1,e.pendingAfterFlight&&(e.pendingAfterFlight=!1,fo(e.reason||"pending prompt manager token refresh",{delayMs:Ou,force:!0,forceVisible:!0}))}}async function AR({reason:e="prompt manager token refresh",force:t=!1,forceVisible:n=!1}={}){if(iy()){if(f.promptManagerCustomDragState||zu()){f.promptManagerTokenRefreshPendingAfterDrag=!0;return}if(!Iu()){if(!n&&!go()){hn().pendingWhileHidden=!0;return}if(!kd()){await V_();return}try{const r=oa(),o=hn(),a=Gi();if(!t&&a&&a===o.lastSignature&&PR()){o.lastEffectiveTokenCountSignature=Gr(),kc();return}r.inFlight=!0;const i=performance.now?.()??Date.now(),s=a,l=Gr(),c=qs();o.lastSignature="",c||(o.lastEffectiveTokenCountSignature="",Rn(null)),await m.tryGenerate();const u=Gi(),p=Gr();s&&u===s?o.lastSignature=s:(o.lastSignature="",o.pendingAfterFlight=!0),l&&p===l?o.lastEffectiveTokenCountSignature=l:l&&(o.lastEffectiveTokenCountSignature="",Rn(null),o.pendingAfterFlight=!0),br()&&Ie(),kc(),console.debug(`${D} Prompt manager token refresh completed after ${e}: ${Math.round((performance.now?.()??Date.now())-i)}ms`)}catch(r){console.debug(`${D} Failed to refresh prompt manager token counts`,r)}finally{const r=oa();r.inFlight=!1,r.suppressUntil=Date.now()+nh}}}}function go(){if(document.visibilityState==="hidden")return!1;const e=document.querySelector(S),t=m?.containerElement;if(!(e instanceof HTMLElement)||!(t instanceof HTMLElement)||!e.isConnected||!t.isConnected)return!1;const n=t.getBoundingClientRect();return n.width>0&&n.height>0&&getComputedStyle(t).display!=="none"}function Gi(){try{const e=m?.serviceSettings??z,t=Array.isArray(e?.prompts)?e.prompts:[],n=Array.isArray(e?.prompt_order)?e.prompt_order:m?.getPromptOrderForCharacter?.(m?.activeCharacter)??[],r=t.map(l=>[l?.identifier||"",l?.role||"",l?.enabled===!1?0:1,l?.marker?1:0,qr(String(l?.content??""))].join(":")),o=n.map(l=>[l?.identifier||"",l?.enabled===!1?0:1].join(":")),a=Array.isArray(Q.chat)?Q.chat:[],i=a[a.length-1],s=i?[a.length,i.send_date||"",qr(String(i.mes??i.content??"").slice(-512))].join(":"):`${a.length}:`;return[lo(),We?.()||"",e?.preset_settings_openai||z?.preset_settings_openai||"",e?.openai_max_context??"",e?.openai_max_tokens??"",r.join("|"),o.join("|"),s].join("||")}catch(e){return console.debug(`${D} Failed to build prompt manager token refresh signature`,e),""}}function PR(){const e=m?.tokenHandler?.getCounts?.(),t=document.querySelector(S);if(!e||!t)return!1;const n=Array.from(t.querySelectorAll("li.completion_prompt_manager_prompt[data-pm-identifier]"));return n.length===0?!1:n.every(r=>{const o=r.dataset.pmIdentifier;return o&&Number.isFinite(Number(e[o]))})}function kc(){const e=hn();e.displayFrame||(e.displayFrame=requestAnimationFrame(()=>{e.displayFrame=0,QR()}))}function LR(){const e=hn();e.pendingFrame||(e.pendingFrame=requestAnimationFrame(()=>{e.pendingFrame=0,YR()}))}function IR(e,t){const r=x().state;if(!r?.rangeSelection?.active)return!1;const o=t.closest(`${S} li.completion_prompt_manager_prompt[data-pm-identifier]`);if(!(o instanceof HTMLElement))return!1;const a=cd(r).find(i=>i?.id===o.dataset.pmIdentifier);return a?(Cc(r,a,e),!0):!1}function at(){(!f.openAITokenizerBulkBridge||typeof f.openAITokenizerBulkBridge!="object")&&(f.openAITokenizerBulkBridge={});const e=f.openAITokenizerBulkBridge;e.cache instanceof Map||(e.cache=new Map),(!e.stats||typeof e.stats!="object")&&(e.stats={prepareCalls:0,prepareMessages:0,prepareEmpty:0,prepareErrors:0,ajaxBatches:0,ajaxBatchMessages:0,ajaxHits:0,ajaxMisses:0,ajaxFallbacks:0,ajaxErrors:0,worldInfoPrepareCalls:0,worldInfoPrepareMessages:0,worldInfoPrepareEmpty:0,worldInfoPrepareErrors:0});for(const t of["prepareCalls","prepareMessages","prepareEmpty","prepareErrors","ajaxBatches","ajaxBatchMessages","ajaxHits","ajaxMisses","ajaxFallbacks","ajaxErrors","worldInfoPrepareCalls","worldInfoPrepareMessages","worldInfoPrepareEmpty","worldInfoPrepareErrors"])typeof e.stats[t]!="number"&&(e.stats[t]=0);return typeof e.failureCount!="number"&&(e.failureCount=0),typeof e.disabledUntil!="number"&&(e.disabledUntil=0),e}function oy(e=at()){return Date.now()<Number(e.disabledUntil||0)}function RR(e=at()){e.failureCount=0,e.disabledUntil=0}function MR(e=at(),t=null){e.failureCount=Number(e.failureCount||0)+1,e.failureCount>=nk&&(e.disabledUntil=Date.now()+rk,console.debug(`${D} OpenAI tokenizer bulk disabled temporarily after repeated failures`,t))}function OR(){const e=at();if(e.ajaxPatched)return;const t=globalThis.jQuery;if(!t||typeof t.ajax!="function"){console.debug(`${D} jQuery.ajax unavailable; OpenAI tokenizer bulk bridge was not installed`);return}const n=t.ajax;e.originalAjax=n,t.ajax=function(...o){const a=BR(o);return!a||!DR(a.options)?n.apply(this,o):$R(this,o,a.options)||n.apply(this,o)},e.ajaxPatched=!0}function BR(e){const t=e[0];return typeof t=="string"?{options:{...e[1]&&typeof e[1]=="object"?e[1]:{},url:t}}:t&&typeof t=="object"?{options:t}:null}function DR(e){if(!wa()||e?.async===!1||String(e?.method||e?.type||"GET").toUpperCase()!=="POST")return!1;const n=ay(e?.url);return!!(n&&n.origin===location.origin&&n.pathname==="/api/tokenizers/openai/count")}function $R(e,t,n){const r=NR(n);if(!r)return null;const o=at();return r.then(a=>{if(!a)return o.stats.ajaxFallbacks+=1,o.originalAjax.apply(e,t);o.stats.ajaxHits+=1;const i={token_count:a.count};return rf(n.success,i,"success",null),rf(n.complete,null,"success"),i}).catch(a=>(o.stats.ajaxErrors+=1,console.debug(`${D} OpenAI tokenizer bulk ajax fallback`,a),o.originalAjax.apply(e,t)))}function NR(e){const t=at(),n=ay(e?.url),r=GR(e),o=n?.searchParams?.get("model")||lo();if(!r||!o)return t.stats.ajaxMisses+=1,null;const a=Xs(o,r),i=t.cache.get(a);return typeof i=="number"?Promise.resolve({count:i}):t.pending?Promise.resolve(t.pending).then(()=>{const s=t.cache.get(a);return typeof s=="number"?{count:s}:nf(o,r,a)}):nf(o,r,a)}function nf(e,t,n){const r=at();(!r.ajaxBatch||typeof r.ajaxBatch!="object")&&(r.ajaxBatch={entries:[],byKey:new Map,timer:null}),r.ajaxBatch.byKey instanceof Map||(r.ajaxBatch.byKey=new Map),Array.isArray(r.ajaxBatch.entries)||(r.ajaxBatch.entries=[]);const o=r.ajaxBatch.byKey.get(n);if(o?.promise)return o.promise;let a,i;const s=new Promise((c,u)=>{a=c,i=u}),l={model:e,message:t,key:n,promise:s,resolve:a,reject:i};return r.ajaxBatch.entries.push(l),r.ajaxBatch.byKey.set(n,l),r.ajaxBatch.timer||(r.ajaxBatch.timer=setTimeout(HR,tk)),s}function HR(){const e=at(),t=e.ajaxBatch;if(!t||!Array.isArray(t.entries)||t.entries.length===0){t&&(t.timer=null);return}const n=t.entries.splice(0,t.entries.length);t.byKey?.clear?.(),t.timer=null;const r=new Map;for(const o of n){const a=r.get(o.model)??[];a.push(o),r.set(o.model,a)}for(const[o,a]of r.entries())e.stats.ajaxBatches+=1,e.stats.ajaxBatchMessages+=a.length,Ys(o,a).then(i=>{i.forEach((s,l)=>{const c=a[l];Qs(c.key,s),c.resolve({count:s})})}).catch(i=>{e.stats.ajaxMisses+=a.length;for(const s of a)s.reject(i)})}function GR(e){try{const t=typeof e?.data=="string"?JSON.parse(e.data):e?.data;return!Array.isArray(t)||t.length!==1?null:Od(t[0],{allowEmptyContent:!0})}catch{return null}}async function FR(e={}){const t=at();if(t.stats.prepareCalls+=1,!wa())return!1;const n=lo(),r=await UR(e),o=[],a=new Set,i=new Map;for(let l=0;l<r.length;l+=1){l>0&&l%th===0&&await Ld();const c=r[l],u=Xs(n,c,i);a.has(u)||t.cache.has(u)||(a.add(u),o.push({key:u,message:c}))}if(o.length===0)return t.stats.prepareEmpty+=1,!0;const s=Ys(n,o).then(l=>(l.forEach((c,u)=>{Qs(o[u].key,c)}),t.stats.prepareMessages+=o.length,!0)).catch(l=>{throw t.stats.prepareErrors+=1,l}).finally(()=>{t.pending===s&&(t.pending=null)});return t.pending=s,s}async function zR(e={}){const t=at();if(t.stats.worldInfoPrepareCalls+=1,!wa())return!1;const n=lo(),r=VR(e),o=[],a=new Set,i=new Map;for(const l of r){const c=Xs(n,l,i);a.has(c)||t.cache.has(c)||(a.add(c),o.push({key:c,message:l}))}if(o.length===0)return t.stats.worldInfoPrepareEmpty+=1,!0;const s=Ys(n,o).then(l=>(l.forEach((c,u)=>{Qs(o[u].key,c)}),t.stats.worldInfoPrepareMessages+=o.length,!0)).catch(l=>{throw t.stats.worldInfoPrepareErrors+=1,l}).finally(()=>{t.pending===s&&(t.pending=null)});return t.pending=s,s}function VR(e={}){const t=[],n=new Set,r=i=>t.length>=Go?!1:(typeof i!="string"||i.length===0||n.has(i)||(n.add(i),t.push(i)),!0);r(e.textToScan);let o=[""];const a=Array.isArray(e.entries)?e.entries:[];for(const i of a){if(t.length>=Go)break;const s=typeof i?.content=="string"?i.content:"",l=[],c=new Set,u=p=>{c.has(p)||(c.add(p),l.push(p))};if(i?.maySkip)for(const p of o)u(p);for(const p of o)u(`${p}${s}
`);if(o=l.slice(0,Go),!i?.ignoreBudget){for(const p of o)if(!r(p))break}}return t.map(i=>Od({role:"system",content:i},{allowEmptyContent:!0})).filter(Boolean)}async function UR(e){const t=[];let n=0;const r=async(o,a={})=>{if(t.length>=Go)return!1;const i=Od(o,a);return i&&t.push(i),n+=1,n%th===0&&await Ld(),t.length<Go};return await r({role:"system",content:e.newChatContent}),await r({role:"user",content:e.sendIfEmpty}),await r({role:"system",content:e.newExampleChatContent}),await WR(e.prompts,r),await KR(e,r),await jR(e.messageExamples,r),t}async function WR(e,t){const n=Array.isArray(e?.collection)?e.collection:[];for(const r of n)if(!await t({role:r?.role||"system",content:r?.content}))return}async function KR(e,t){const n=Array.isArray(e.messages)?e.messages:[],r=Number(e.oaiSettings?.names_behavior)===1,o=e.promptManager||m;for(let a=0;a<n.length;a++){const i=n[a];if(!i||typeof i!="object")continue;const s={...i,identifier:`chatHistory-${n.length-a}`},l=qR(s,o),c={role:l?.role||i.role||"system",content:l?.content??i.content};if(!await t(c))return;if(r&&i.name){const u=typeof o?.isValidName=="function"&&o.isValidName(i.name)?i.name:typeof o?.sanitizeName=="function"?o.sanitizeName(i.name):i.name;if(!await t({...c,name:u}))return}if(Array.isArray(i.invocations)){for(const u of i.invocations)if(!await t({role:"tool",content:u?.result||"[No content]"}))return}}}async function jR(e,t){if(Array.isArray(e)){for(const n of e)if(Array.isArray(n))for(const r of n){const o={role:"system",content:r?.content||""};if(!await t(o)||r?.name&&!await t({...o,name:r.name}))return}}}function qR(e,t){try{if(typeof t?.preparePrompt=="function")return t.preparePrompt(e)}catch(n){console.debug(`${D} Failed to prepare OpenAI tokenizer bulk prompt`,n)}return e}function Od(e,{allowEmptyContent:t=!1}={}){if(!e||typeof e!="object")return null;const n={};n.role=e.role||"system",Object.prototype.hasOwnProperty.call(e,"content")&&e.content!==void 0&&(n.content=e.content),e.name!==void 0&&e.name!==null&&e.name!==""&&(n.name=e.name),e.tool_calls!==void 0&&(n.tool_calls=e.tool_calls),e.reasoning!==void 0&&e.reasoning!==null&&e.reasoning!==""&&(n.reasoning=e.reasoning);const r=Object.prototype.hasOwnProperty.call(n,"content"),o=Object.prototype.hasOwnProperty.call(n,"tool_calls");return!r&&!o||!t&&typeof n.content=="string"&&n.content.length===0&&!o&&!n.name?null:n}async function Ys(e,t){const n=at();if(oy(n))throw new Error("BaiBaoKu bulk count is temporarily disabled after repeated failures");const r=new Headers(me());r.set("content-type","application/json");try{const o=await fetch(ZC,{method:"POST",headers:r,cache:"no-store",body:JSON.stringify({model:e,messages:t.map(s=>s.message)})}),a=await o.json().catch(()=>null),i=a?.data?.counts;if(!o.ok||a?.ok!==!0||!Array.isArray(i)||i.length!==t.length)throw new Error(a?.error?.message||`BaiBaoKu bulk count failed: HTTP ${o.status}`);return RR(n),i.map(s=>Number(s))}catch(o){throw MR(n,o),o}}function Qs(e,t){const n=Number(t);if(!e||!Number.isFinite(n))return;const r=at();for(r.cache.set(e,n);r.cache.size>ek;){const o=r.cache.keys().next().value;r.cache.delete(o)}}function Xs(e,t,n=null){const r=JSON.stringify(t),o=`${e}:${r}`;if(n instanceof Map&&n.has(o))return n.get(o);const a=`${e}-${qr(r)}`;return n?.set?.(o,a),a}function wa(){if(N.tokenizerBulkCountEnabled===!1||oy())return!1;const e=globalThis.__baibaokuEarlyBridge;return typeof e?.isTokenizerBulkCountEnabled=="function"?e.isTokenizerBulkCountEnabled()!==!1:e?.tokenizerBulkCountEnabled!==!1}function ay(e){try{if(typeof e=="string")return new URL(e,location.href);if(e instanceof URL)return new URL(e.href,location.href);if(e&&typeof e.url=="string")return new URL(e.url,location.href)}catch{return null}return null}function rf(e,...t){if(typeof e=="function")try{e(...t)}catch(n){console.debug(`${D} OpenAI tokenizer bulk ajax callback failed`,n)}}function iy(){return!!(m?.tryGenerate&&(N.presetToggleOptimizationEnabled||N.presetSwitchOptimizationEnabled))}function Bd(){LR()}function YR(){const e=document.querySelector(S);if(!e)return;for(const o of e.querySelectorAll("li.completion_prompt_manager_prompt[data-pm-identifier]"))Md(o,null);const n=document.querySelector(".completion_prompt_manager_header")?.querySelector(":scope > div:last-child"),r=n?.querySelector("span");n&&r&&n.textContent?.replace(r.textContent||"","")!==" - "&&n.replaceChildren(r,document.createTextNode(" - ")),Rn(qs()?void 0:null)}function QR(){const e=m?.tokenHandler?.getCounts?.(),t=document.querySelector(S);if(!e||!t)return;const n=Array.isArray(m?.serviceSettings?.prompts)?m.serviceSettings.prompts.filter(Boolean):[],r=new Map(n.map(c=>[c.identifier,c])),o=(m?.serviceSettings?.openai_max_context??0)-(m?.serviceSettings?.openai_max_tokens??0),a=(m?.tokenUsage??0)>o*.8;for(const c of t.querySelectorAll("li.completion_prompt_manager_prompt[data-pm-identifier]")){const u=c.dataset.pmIdentifier,p=e[u]??0,b=r.get(u),v=b?Ad({prompt:b,tokens:p,isTokenUsageWarning:a}):null;Md(c,p,v)}const s=document.querySelector(".completion_prompt_manager_header")?.querySelector(":scope > div:last-child"),l=s?.querySelector("span");if(s&&l){const c=` ${m.tokenUsage??0} `;s.textContent?.replace(l.textContent||"","")!==c&&s.replaceChildren(l,document.createTextNode(c))}Rn(Pd())}function sy(){N.presetPromptCodeMirrorEditorEnabled?XR():ly()}function XR(){const e=JR();e.enabled=!0,sM(),ZR(e),cy(e),eM(e)}function ly(){const e=f[Xn];if(e){Fr("disable"),e.enabled=!1,e.refreshFrame&&(cancelAnimationFrame(e.refreshFrame),e.refreshFrame=0),e.mutationObserver?.disconnect(),e.mutationObserver=null,oi(e);for(const t of e.globalListeners||[])t.target.removeEventListener(t.type,t.handler,t.options);e.globalListeners=[],lM(),delete f[Xn]}}function JR(){return f[Xn]||(f[Xn]={enabled:!1,source:null,wrapper:null,view:null,listeners:[],globalListeners:[],mutationObserver:null,mutationObserverTargets:[],refreshFrame:0,dirty:!1,flushing:!1,syncingFromSource:!1,loadingToken:null,sourceValue:"",disabled:!1,forceSyncFromSource:!1}),f[Xn]}function ZR(e){if(e.globalListeners.length>0)return;const t=a=>{const i=a.target instanceof Element?a.target:null;i&&(i.closest(Xb)&&Fr("save click"),i.closest(`.editor_maximize[data-for="${Jb}"]`)&&(Fr("maximize click"),Zn(e,{forceFromSource:!0})),(i.closest(YC)||i.closest(QC)||i.closest(`${S} [data-preset-prompt-action], ${S} .prompt-manager-edit-action, ${S} .prompt-manager-inspect-action, ${S} .prompt-manager-detach-action`)||i.closest("#completion_prompt_manager .completion_prompt_manager_footer .menu_button"))&&Zn(e,{forceFromSource:!0}))},n=a=>{(a.target instanceof HTMLTextAreaElement?a.target:null)?.id?.endsWith("_prompt_quick_edit_textarea")&&Zn(e,{forceFromSource:!0})},r=()=>{Fr("page lifecycle")},o=(a,i,s,l)=>{!(a instanceof EventTarget)||a===document||(a.addEventListener(i,s,l),e.globalListeners.push({target:a,type:i,handler:s,options:l}))};for(const a of tM())o(a,"click",t,!0),o(a,"blur",n,!0);o(window,"pagehide",r)}function eM(e){typeof MutationObserver=="function"&&(e.mutationObserver||(e.mutationObserver=new MutationObserver(t=>{rM(e,t)||oM(e,t)||Zn(e)})),ri(e))}function tM(){const e=new Set,t=r=>{r instanceof HTMLElement&&r.isConnected&&e.add(r)},n=Dd();return t(document.querySelector("#completion_prompt_manager")),t(document.querySelector(ha)),t(n?.closest("form")),t(n?.closest("dialog.popup, .popup, #completion_prompt_manager")),t(n?.parentElement),[...e]}function ri(e){if(!e?.mutationObserver)return;const t=nM(e),n=e.mutationObserverTargets||[];if(!(n.length===t.length&&n.every((o,a)=>o.target===t[a].target&&o.optionsKey===t[a].optionsKey))){e.mutationObserver.disconnect();for(const{target:o,options:a}of t)e.mutationObserver.observe(o,a);e.mutationObserverTargets=t}}function nM(e){const t=new Map,n={attributes:!0,attributeFilter:["class","style","hidden","data-for","disabled"],childList:!0,subtree:!0},r={childList:!0,subtree:!1},o=(l,c,u)=>{if(!(l instanceof Node)||!l.isConnected||l===document)return;const p=t.get(l);(!p||p.optionsKey==="parent")&&t.set(l,{target:l,optionsKey:c,options:u})},a=l=>{l instanceof HTMLElement&&(o(l.parentElement,"host",n),o(l.parentElement?.parentElement,"parent",r),o(l.closest("form"),"host",n),o(l.closest("dialog.popup, .popup"),"host",n))},i=Dd(),s=document.querySelector("#completion_prompt_manager");return a(i),a(e.source),a(e.wrapper),s instanceof HTMLElement&&o(s,"host",n),[...t.values()]}function rM(e,t){const n=e.wrapper;return n instanceof HTMLElement?t.every(r=>{if(r.target instanceof Node&&n.contains(r.target))return!0;for(const o of r.addedNodes)if(!(o instanceof Node)||!n.contains(o))return!1;for(const o of r.removedNodes)if(!(o instanceof Node)||!n.contains(o))return!1;return r.addedNodes.length>0||r.removedNodes.length>0}):!1}function oM(e,t){if(!t?.length)return!1;const n=o=>{if(!(o instanceof Node))return!1;const a=e.source,i=e.wrapper;return a instanceof Node&&(o===a||o.contains?.(a)||a.contains?.(o))||i instanceof Node&&(o===i||o.contains?.(i)||i.contains?.(o))},r=o=>o instanceof Node?!!(o instanceof Element?o:o.parentElement)?.closest?.(`${S}, .bai-bai-preset-global-library`):!1;return Array.from(t).every(o=>{const a=[o.target,...Array.from(o.addedNodes??[]),...Array.from(o.removedNodes??[])].filter(i=>i instanceof Node);return a.length>0&&a.every(i=>!n(i)&&r(i))})}function Zn(e=f[Xn],{forceFromSource:t=!1}={}){e?.enabled&&(t&&(e.forceSyncFromSource=!0),!e.refreshFrame&&(e.refreshFrame=requestAnimationFrame(()=>{e.refreshFrame=0,cy(e)})))}function cy(e){if(!e?.enabled)return;const t=Dd();if(!(t instanceof HTMLTextAreaElement)||!t.isConnected){oi(e),ri(e);return}if(e.source===t&&e.wrapper?.isConnected){const n=Js(t);if(e.disabled!==n){oi(e),of(e,t);return}if(uy(e,t,e.wrapper),ri(e),e.forceSyncFromSource){e.forceSyncFromSource=!1,my(e,{force:!0});return}iM(e);return}oi(e),of(e,t),ri(e)}function Dd(){const e=document.querySelector(Zb);return e instanceof HTMLTextAreaElement&&e.isConnected?e:document.querySelector(XC)}function of(e,t){const n=document.createElement("div");n.id=Lt,n.className=JC,n.textContent="Loading CodeMirror...",uy(e,t,n),t.classList.add(Mu),t.insertAdjacentElement("afterend",n),e.source=t,e.wrapper=n,e.dirty=!1,e.sourceValue=t.value||"",e.disabled=Js(t),e.forceSyncFromSource=!1;const r=()=>{setTimeout(()=>{e.dirty&&e.wrapper&&!e.wrapper.contains(document.activeElement)&&Fr("blur")},0)},o=()=>{Zn(e,{forceFromSource:!0})};n.addEventListener("focusout",r),t.addEventListener("input",o,!0),e.listeners.push({target:n,type:"focusout",handler:r,options:void 0},{target:t,type:"input",handler:o,options:!0});const a={};e.loadingToken=a,Sk().then(i=>{!e.enabled||e.source!==t||e.wrapper!==n||e.loadingToken!==a||!n.isConnected||aM(e,t,n,i)}).catch(i=>{console.warn(`${D} CodeMirror preset prompt editor failed; falling back to stock textarea.`,i),e.enabled&&e.source===t&&e.wrapper===n&&e.loadingToken===a&&(N.presetPromptCodeMirrorEditorEnabled=!1,typeof kn=="function"&&kn(),$("#bai_bai_toolkit_preset_prompt_codemirror_editor_enabled").prop("checked",!1),ly())})}function uy(e,t,n){const r=Js(t),o=$d(t);e.disabled=r,n.classList.toggle(eh,r),n.classList.toggle(ti,o),n.setAttribute("aria-disabled",String(r))}function Js(e){return e instanceof HTMLTextAreaElement?e.disabled?!0:$d(e)?document.getElementById(Jb)?.disabled===!0:!1:!1}function $d(e){return e instanceof HTMLTextAreaElement&&e.matches(Zb)}function aM(e,t,n,r){const{EditorState:o,EditorView:a,keymap:i,defaultKeymap:s=[],history:l,historyKeymap:c=[]}=r,u=t.value.length<=vk(),p=Js(t),b=[a.lineWrapping,a.updateListener.of(v=>{!v.docChanged||e.syncingFromSource||(e.dirty=!0,py(e)&&$d(e.source)&&sh(e.source))}),a.theme({"&":{backgroundColor:"var(--SmartThemeBlurTintColor)",border:"1px solid var(--SmartThemeBorderColor)",borderRadius:"4px",boxSizing:"border-box",color:"var(--SmartThemeBodyColor)",font:"inherit",maxWidth:"100%",minHeight:"min(34vh, 360px)",minWidth:"0",overflow:"hidden",textShadow:"none",textAlign:"left",width:"100%"},"&.cm-focused":{outline:"none"},".cm-scroller":{fontFamily:"inherit",lineHeight:"1.35",maxHeight:"min(44vh, 440px)",minHeight:"min(34vh, 360px)",minWidth:"0",overflow:"auto",overflowAnchor:"none",overscrollBehavior:"auto",touchAction:"pan-y",WebkitOverflowScrolling:"touch"},".cm-content":{caretColor:"var(--SmartThemeBodyColor)",minWidth:"0",padding:"8px",textShadow:"none",textAlign:"left",minHeight:"min(34vh, 360px)"},".cm-line":{padding:"0",textAlign:"left"}})];p&&o.readOnly?.of&&b.push(o.readOnly.of(!0)),a.editable?.of&&b.push(a.editable.of(!p)),u&&typeof l=="function"&&b.push(l()),typeof i?.of=="function"&&b.push(i.of(u?[...s,...c]:s)),a.contentAttributes?.of&&b.push(a.contentAttributes.of({autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false","aria-label":t.getAttribute("aria-label")||"Preset prompt","aria-readonly":String(p)})),n.textContent="",e.view=new a({state:o.create({doc:t.value||"",extensions:b}),parent:n})}function oi(e){if(!(!e.source&&!e.wrapper&&!e.view)){for(const t of e.listeners||[])t.target.removeEventListener(t.type,t.handler,t.options);e.listeners=[],e.view?.destroy?.(),e.source?.classList.remove(Mu),e.wrapper?.remove(),e.source=null,e.wrapper=null,e.view=null,e.dirty=!1,e.syncingFromSource=!1,e.loadingToken=null,e.sourceValue="",e.disabled=!1,e.forceSyncFromSource=!1}}function dy(e){return e.view?.state?.doc?.toString?.()??""}function py(e){if(!(e.source instanceof HTMLTextAreaElement)||!e.view)return!1;const t=dy(e),n=e.source.value!==t;return n&&(e.source.value=t),e.sourceValue=t,n}function iM(e){return my(e,{force:!1})}function my(e,{force:t=!1}={}){if(!t&&e.dirty||!(e.source instanceof HTMLTextAreaElement)||!e.view)return!1;const n=e.source.value||"";if(dy(e)!==n){e.syncingFromSource=!0;try{e.view.dispatch({changes:{from:0,to:e.view.state.doc.length,insert:n}}),e.dirty=!1,e.sourceValue=n}finally{e.syncingFromSource=!1}return!0}return e.dirty=!1,e.sourceValue=n,!1}function Fr(e,{dispatchInput:t=!1}={}){const n=f[Xn];if(!n?.enabled||n.flushing||!(n.source instanceof HTMLTextAreaElement)||!n.view)return!1;n.flushing=!0;try{const r=py(n)||n.dirty;return n.dirty=!1,r&&t&&sh(n.source),r&&console.debug(`${D} CodeMirror preset prompt editor flushed after ${e}`),r}finally{n.flushing=!1}}function sM(){let e=document.getElementById(ac);e||(e=document.createElement("style"),e.id=ac,document.head.append(e)),e.textContent=`
#${Lt} {
    box-sizing: border-box;
    display: block;
    width: 100%;
}

#${Lt}.${eh} {
    opacity: 0.72;
}

#${Lt}.${ti} {
    flex: 1 1 auto;
    height: 100%;
    min-height: 0;
}

#${Lt}.${ti} .cm-editor,
#${Lt}.${ti} .cm-scroller {
    height: 100%;
    max-height: none !important;
    min-height: 0 !important;
}

#${Lt},
#${Lt} .cm-editor,
#${Lt} .cm-scroller,
#${Lt} .cm-content,
#${Lt} .cm-line {
    text-align: left !important;
}

.${Mu} {
    display: none !important;
}
`}function lM(){document.getElementById(ac)?.remove()}let _e={},ce={},ut="[BaiBaiToolkit]",Fi=null;const cM="__baiBaiToolkitWorldInfoPageAppendPatched",ai="__baiBaiToolkitWorldInfoFloatingAutocompletePatched",eo="baiBaiToolkitWorldInfoDeferredMacros",Ac="baiBaiToolkitWorldInfoDeferredMacrosValue",uM='.world_entry_edit textarea[name="content"][data-macros]';function dM(e={}){_e=e.settings??_e,ce=e.extensionState??ce,ut=e.logPrefix??ut,Fi=e.saveSettings??Fi}function pM({saveSettings:e}={}){Fi=e??Fi}function fy(){const e=Uy();if(e.enabled=!!_e.worldInfoPageOptimizationEnabled,!e.enabled){mM(e);return}fM(e),gy(e),bM(e),_M(e),console.debug(`${ut} World info page optimization enabled`)}function mM(e=Uy()){vM(),yM(e),hM(e),gy(e),gM(e)}function fM(e){if(e[ai])return;const t=xn?.prototype?.updateFloatingPosition;if(typeof t!="function"){console.warn(`${ut} AutoComplete floating positioning is unavailable; World Info autocomplete optimization was not installed`);return}if(t.__baiBaiToolkitWorldInfoFloatingAutocompletePatched){e[ai]=!0;return}function n(...r){if(this.isActive)return t.apply(this,r)}n.__baiBaiToolkitWorldInfoFloatingAutocompletePatched=!0,n.__baiBaiToolkitWorldInfoFloatingAutocompleteOriginal=t,xn.prototype.updateFloatingPosition=n,e[ai]=!0}function gM(e){const t=xn?.prototype?.updateFloatingPosition;t?.__baiBaiToolkitWorldInfoFloatingAutocompletePatched&&(xn.prototype.updateFloatingPosition=t.__baiBaiToolkitWorldInfoFloatingAutocompleteOriginal),e[ai]=!1}function gy(e){const t=globalThis.jQuery?.fn?.append;t?.__baiBaiToolkitWorldInfoPageAppendPatched&&(globalThis.jQuery.fn.append=t.__baiBaiToolkitWorldInfoPageAppendOriginal),e[cM]=!1}function bM(e){if(e.deferredMacroMutationObserver)return;const t=document.getElementById("world_popup_entries_list");if(!(t instanceof HTMLElement)||(af(t),typeof MutationObserver!="function"))return;const n=new MutationObserver(r=>{if(_e.worldInfoPageOptimizationEnabled)for(const o of r)for(const a of o.addedNodes)af(a)});n.observe(t,{childList:!0,subtree:!0}),e.deferredMacroMutationObserver=n}function hM(e){e.deferredMacroMutationObserver?.disconnect(),e.deferredMacroMutationObserver=null}function af(e){if(!(e instanceof Element))return;(e.matches("#world_popup_entries_list .inline-drawer-outlet")?[e]:Array.from(e.querySelectorAll?.("#world_popup_entries_list .inline-drawer-outlet")??[])).forEach(n=>{n.querySelectorAll(uM).forEach(r=>{!(r instanceof HTMLTextAreaElement)||r.dataset[eo]==="true"||(r.dataset[eo]="true",r.dataset[Ac]=r.getAttribute("data-macros")??"",r.removeAttribute("data-macros"))})})}function _M(e){if(e.deferredMacroActivationHandler)return;const t=n=>{EM(n)};document.addEventListener("focusin",t,!0),document.addEventListener("pointerdown",t,!0),document.addEventListener("click",t,!0),e.deferredMacroActivationHandler=t}function yM(e){const t=e.deferredMacroActivationHandler;t&&(document.removeEventListener("focusin",t,!0),document.removeEventListener("pointerdown",t,!0),document.removeEventListener("click",t,!0),e.deferredMacroActivationHandler=null)}function EM(e){const t=e.target instanceof Element?e.target:null;if(!t)return;const n=SM(t);n&&by(n)}function SM(e){const t=e.closest?.(`textarea[data-${Nd(eo)}="true"]`);if(t instanceof HTMLTextAreaElement)return t;const r=e.closest?.(".editor_maximize[data-for]")?.getAttribute("data-for"),o=r?document.getElementById(r):null;return o instanceof HTMLTextAreaElement&&o.dataset[eo]==="true"?o:null}function vM(){document.querySelectorAll(`textarea[data-${Nd(eo)}="true"]`).forEach(e=>{e instanceof HTMLTextAreaElement&&by(e)})}function by(e){const t=e.dataset[Ac]??"";e.setAttribute("data-macros",t),delete e.dataset[eo],delete e.dataset[Ac]}function Nd(e){return String(e).replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const sf="__baiBaiToolkitWorldInfoDrawerHandler",lf="bai_bai_toolkit_world_info_drawer_animation_style",cf="__baiBaiToolkitWorldInfoLazySelect2Patched",TM="__baiBaiToolkitWorldInfoCharacterFilterAppendPatched",Io="__baiBaiToolkitWorldInfoVueListOptimization",Pc="bai_bai_toolkit_world_info_mobile_header_layout_style",zi="baiBaiToolkitWorldInfoEditorSelectGrouped",Lc="baiBaiToolkitWorldInfoEditorSelectSearch",Vi="baiBaiToolkitWorldInfoEditorSelectSearchMobileSuppressed",hy=450,to="__baiBaiToolkitWorldInfoEditorSelectStyle",Mt="bai-bai-wi-editor-select-dropdown",Dt="__baiBaiToolkitWorldInfoGlobalSelectorState",_y="baiBaiToolkitWorldInfoGlobalSelector",zo="baiBaiToolkitWorldInfoGlobalSelectorOrder",Wt="bai-bai-wi-global-selector-dropdown",yy="bai-bai-wi-global-selector",Ui="baiBaiToolkitWorldInfoGlobalSelectorSearchMobileSuppressed",xM=16,we="bai-bai-wi-search-replace-panel",wM="#world_popup_entries_list > .world_entry > .world_entry_form > .inline-drawer > .inline-drawer-header .inline-drawer-toggle",CM="#world_popup_entries_list > .world_entry > .world_entry_form > .inline-drawer",kM='#world_popup_entries_list .world_entry_edit select[name="characterFilter"], #world_popup_entries_list .world_entry_edit select[name="triggers"]',aa="baiBaiToolkitLazySelect2",Ey="baiBaiToolkitDeferredOptions";function Sy(){if(nO(),ce[sf])return;const e=t=>{rO(t)};ce[sf]=e,document.addEventListener("click",e,!0)}function vy(){if(ce[cf])return;const e=globalThis.jQuery?.fn?.select2;if(typeof e!="function"){console.warn(`${ut} Select2 is unavailable; World Info lazy select2 optimization was not installed`);return}function t(...n){if(!eO(n))return e.apply(this,n);const r=this.toArray();return r.some(o=>gf(o))?(r.forEach(o=>{const a=$(o);gf(o)?tO(o,n,e):e.apply(a,n)}),this):e.apply(this,n)}t.__baiBaiToolkitWorldInfoLazySelect2Patched=!0,t.__baiBaiToolkitOriginalSelect2=e,Object.assign(t,e),globalThis.jQuery.fn.select2=t,ce[cf]=!0}function Ty(){Y0()}function Ic(){const e=J();e.enabled=!!_e.worldInfoListOptimizationEnabled,e.enabled?(AM(e),HM(e),FM(e),VM(e),W0(),_e.worldInfoSearchReplaceEnabled!==!1?xy(e):ia(e),P0(e),L0(e)):(Wd(e),PM(e),GM(e),zM(e),UM(e),ia(e),I0(e),R0(e),Zs(),el(),tl(),K0())}function J(){(!ce[Io]||typeof ce[Io]!="object")&&(ce[Io]={enabled:!1,app:null,root:null,modulePromise:null,renderToken:0,activeAppendCapture:null,originalAppend:null,patchedAppend:null,originalPagination:null,patchedPagination:null,renderQueue:null,mobileHeaderLayoutHandler:null,mobileHeaderLayoutMediaQuery:null,mobileLayoutMutationObserver:null,worldInfoEditorSelectOpenHandler:null,worldInfoEditorSelectKeyHandler:null,worldInfoEditorSelectSelect2Handler:null,worldInfoEditorSelectSearchOpeningHandler:null,worldInfoEditorSelectSearchOpenHandler:null,worldInfoEditorSelectSearchInteractionGuard:null,worldInfoEditorSelectGroupingApplying:!1,worldInfoGlobalSelectorDropdown:null,worldInfoGlobalSelectorSyncHandler:null,worldInfoGlobalSelectorTriggerHandler:null,worldInfoGlobalSelectorTriggerEvents:null,worldInfoGlobalSelectorSelects:new Set,worldInfoSearchReplacePanel:null,worldInfoSearchReplaceHandlers:[],worldInfoSearchReplaceStats:null});const e=ce[Io];return e.worldInfoGlobalSelectorDropdown??=null,e.worldInfoGlobalSelectorSyncHandler??=null,e.worldInfoGlobalSelectorTriggerHandler??=null,e.worldInfoGlobalSelectorTriggerEvents??=null,e.worldInfoSearchReplacePanel??=null,e.worldInfoSearchReplaceHandlers??=[],e.worldInfoSearchReplaceStats??=null,e.worldInfoGlobalSelectorSelects instanceof Set||(e.worldInfoGlobalSelectorSelects=new Set),ce[Io]}function AM(e=J()){if(e.patchedPagination&&globalThis.jQuery?.fn?.pagination===e.patchedPagination)return;const t=globalThis.jQuery?.fn?.pagination;if(typeof t!="function"){console.warn(`${ut} jQuery.pagination is unavailable; World Info list optimization was not installed`);return}function n(...r){if(_e.worldInfoListOptimizationEnabled&&S0(this,r)){const o={...r[0]},a=o.callback;a?.__baiBaiToolkitWorldInfoVueListWrapped||(o.callback=function(s,...l){return _e.worldInfoListOptimizationEnabled?T0(a,this,s,l):a.call(this,s,...l)},o.callback.__baiBaiToolkitWorldInfoVueListWrapped=!0,o.callback.__baiBaiToolkitWorldInfoVueListOriginal=a),r[0]=o}return t.apply(this,r)}n.__baiBaiToolkitWorldInfoVueListPatched=!0,n.__baiBaiToolkitOriginalPagination=t,Object.assign(n,t),e.originalPagination=t,e.patchedPagination=n,globalThis.jQuery.fn.pagination=n}function PM(e=J()){!e.patchedPagination||!globalThis.jQuery?.fn||(globalThis.jQuery.fn.pagination===e.patchedPagination&&typeof e.originalPagination=="function"&&(globalThis.jQuery.fn.pagination=e.originalPagination),e.originalPagination=null,e.patchedPagination=null)}function xy(e=J()){if(!_e.worldInfoListOptimizationEnabled||_e.worldInfoSearchReplaceEnabled===!1){ia(e);return}const t=document.getElementById("world_popup_entries_list");if(!(t instanceof HTMLElement)||e.worldInfoSearchReplacePanel instanceof HTMLElement&&e.worldInfoSearchReplacePanel.isConnected&&e.worldInfoSearchReplacePanel.nextElementSibling===t)return;ia(e);const n=document.createElement("div");n.className=`${we} inline-drawer`,n.dataset.collapsed="true";const r=document.createElement("div");r.className="inline-drawer-toggle inline-drawer-header standoutHeader bai-bai-wi-search-replace-header",r.tabIndex=0,r.role="button",r.setAttribute("aria-expanded","false");const o=document.createElement("span");o.className="bai-bai-wi-search-replace-title",o.textContent="查找替换";const a=document.createElement("span");a.className="bai-bai-wi-search-replace-summary",a.textContent="";const i=document.createElement("div");i.className="inline-drawer-icon fa-solid fa-circle-chevron-down down",i.setAttribute("aria-hidden","true"),r.append(o,a,i);const s=document.createElement("div");s.className="inline-drawer-content bai-bai-wi-search-replace-body",s.style.display="none";const l=document.createElement("div");l.className="bai-bai-wi-search-replace-form";const c=document.createElement("input");c.type="text",c.className="text_pole bai-bai-wi-search-replace-find",c.placeholder="查找正文内容",c.autocomplete="off";const u=document.createElement("input");u.type="text",u.className="text_pole bai-bai-wi-search-replace-replace",u.placeholder="替换为",u.autocomplete="off";const p=document.createElement("label");p.className="checkbox_label bai-bai-wi-search-replace-case";const b=document.createElement("input");b.type="checkbox";const v=document.createElement("span");v.textContent="区分大小写",p.append(b,v);const y=document.createElement("label");y.className="checkbox_label bai-bai-wi-search-replace-comment";const k=document.createElement("input");k.type="checkbox";const P=document.createElement("span");P.textContent="包含条目名称",y.append(k,P);const E=document.createElement("button");E.type="button",E.className="menu_button bai-bai-wi-search-replace-count",E.textContent="统计命中";const K=document.createElement("button");K.type="button",K.className="menu_button danger_button bai-bai-wi-search-replace-apply",K.textContent="全部替换",l.append(c,u,p,y,E,K),s.append(l),n.append(r,s),t.before(n);const X={panel:n,header:r,summary:a,toggleIcon:i,findInput:c,replaceInput:u,caseInput:b,commentInput:k,countButton:E,replaceButton:K},B=[],V=(I,Z,te)=>{I.addEventListener(Z,te),B.push({target:I,eventName:Z,handler:te})},ee=()=>zr(e,X);V(n,"inline-drawer-toggle",()=>{const I=i.classList.contains("down");n.dataset.collapsed=I?"true":"false",r.setAttribute("aria-expanded",I?"false":"true")}),V(c,"input",()=>{e.worldInfoSearchReplaceStats=null,ee()}),V(u,"input",()=>{e.worldInfoSearchReplaceStats=null,ee()}),V(b,"change",()=>{e.worldInfoSearchReplaceStats=null,ee()}),V(k,"change",()=>{e.worldInfoSearchReplaceStats=null,ee()}),V(E,"click",()=>LM(e,X)),V(K,"click",()=>IM(e,X)),e.worldInfoSearchReplacePanel=n,e.worldInfoSearchReplaceHandlers=B,ee()}function ia(e=J()){for(const t of e.worldInfoSearchReplaceHandlers||[])t.target?.removeEventListener?.(t.eventName,t.handler);e.worldInfoSearchReplaceHandlers=[],e.worldInfoSearchReplacePanel?.remove?.(),e.worldInfoSearchReplacePanel=null,e.worldInfoSearchReplaceStats=null}function zr(e,t){const n=t.findInput.value,r=n.length>0,o=ky();t.countButton.disabled=!r,t.replaceButton.disabled=!r;const a=e.worldInfoSearchReplaceStats;if(r&&o&&a&&a.worldName===o&&a.findValue===n&&a.caseSensitive===t.caseInput.checked&&a.includeComment===t.commentInput.checked){t.summary.textContent=`命中 ${a.matchedEntries} 条 / ${a.replacementCount} 处`;return}t.summary.textContent=""}async function LM(e,t){const n=wy(t);if(!n){zr(e,t),Yn("warning","请先选择世界书。");return}Wi(t,!0);try{const r=await Rc(n);e.worldInfoSearchReplaceStats=r,zr(e,t),r.replacementCount===0&&Yn("warning","没有找到匹配的正文内容。")}catch(r){console.error(`${ut} Failed to count World Info search matches`,r),Yn("error",`统计失败：${r?.message||String(r)}`)}finally{Wi(t,!1)}}async function IM(e,t){const n=wy(t);if(!n){zr(e,t),Yn("warning","请先选择世界书。");return}Wi(t,!0);try{const r=await Rc(n);if(e.worldInfoSearchReplaceStats=r,zr(e,t),r.replacementCount===0){Yn("warning","没有找到匹配的正文内容。");return}if(!await $M(r))return;const a=await RM(n);e.worldInfoSearchReplaceStats=await Rc(n),zr(e,t),MM(a.updatedEntries),Yn("success",`已替换 ${a.matchedEntries} 条 / ${a.replacementCount} 处。`)}catch(r){console.error(`${ut} Failed to replace World Info content`,r),Yn("error",`替换失败：${r?.message||String(r)}`)}finally{Wi(t,!1)}}function wy(e){const t=ky(),n=e.findInput.value;return!t||n.length===0?null:{worldName:t,findValue:n,replaceValue:e.replaceInput.value,caseSensitive:e.caseInput.checked,includeComment:e.commentInput.checked}}async function Rc(e){const t=await Tg(e.worldName);if(!t?.entries||typeof t.entries!="object")throw new Error("无法读取当前世界书数据");return BM(t,e)}async function RM(e){const t=await Tg(e.worldName);if(!t?.entries||typeof t.entries!="object")throw new Error("无法读取当前世界书数据");const n=Cy(e.findValue,e.caseSensitive);let r=0,o=0;const a=[];for(const i of Object.values(t.entries)){if(!i)continue;let s=0;const l={uid:i.uid};if(typeof i.content=="string"){const{value:c,count:u}=uf(i.content,n,e.replaceValue);u>0&&(s+=u,i.content=c,Up(t,i.uid,"content",c),l.content=c)}if(e.includeComment&&typeof i.comment=="string"){const{value:c,count:u}=uf(i.comment,n,e.replaceValue);u>0&&(s+=u,i.comment=c,Up(t,i.uid,"comment",c),l.comment=c)}s>0&&(r+=1,o+=s,a.push(l))}return o>0&&await vv(e.worldName,t,!0),{matchedEntries:r,replacementCount:o,updatedEntries:a}}function uf(e,t,n){let r=0;return t.lastIndex=0,{value:e.replace(t,()=>(r+=1,n)),count:r}}function MM(e){if(!(!Array.isArray(e)||e.length===0))for(const{uid:t,content:n,comment:r}of e){const o=document.querySelector(`#world_popup_entries_list .world_entry[uid="${OM(t)}"]`),a=o?.querySelector?.('textarea[name="content"]'),i=o?.querySelector?.('textarea[name="comment"]');typeof n=="string"&&a instanceof HTMLTextAreaElement&&(a.value=n,globalThis.CSS?.supports?.("field-sizing","content")||bi(a)),typeof r=="string"&&i instanceof HTMLTextAreaElement&&(i.value=r,globalThis.CSS?.supports?.("field-sizing","content")||bi(i))}}function OM(e){return globalThis.CSS?.escape?globalThis.CSS.escape(String(e)):String(e).replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function BM(e,t){const n=Cy(t.findValue,t.caseSensitive);let r=0,o=0;for(const a of Object.values(e.entries)){if(!a)continue;const i=typeof a.content=="string"?df(a.content,n):0,s=t.includeComment&&typeof a.comment=="string"?df(a.comment,n):0,l=i+s;l!==0&&(r+=1,o+=l)}return{worldName:t.worldName,findValue:t.findValue,caseSensitive:t.caseSensitive,includeComment:t.includeComment,matchedEntries:r,replacementCount:o}}function df(e,t){return t.lastIndex=0,e.match(t)?.length??0}function Cy(e,t){return new RegExp(DM(e),t?"g":"gi")}function DM(e){return String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}async function $M(e){const t=e.includeComment?"正文内容和条目名称":"正文内容",n=await fe(`
        <div class="bai-bai-wi-search-replace-confirm">
            <p>即将替换当前世界书 <strong>${NM(e.worldName)}</strong> 的${t}。</p>
            <p>命中条目：<strong>${e.matchedEntries}</strong> 条<br>替换次数：<strong>${e.replacementCount}</strong> 处</p>
            <p>此操作会立即保存，请确认后继续。</p>
        </div>
    `,ge.CONFIRM,"",{okButton:"全部替换",cancelButton:"取消"});return n===Kn.AFFIRMATIVE||n===!0}function NM(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ky(){const e=document.getElementById("world_editor_select");if(!(e instanceof HTMLSelectElement)||e.value==="")return null;const t=e.value.trim(),n=Number.parseInt(t,10);if(/^\d+$/.test(t)&&Number.isInteger(n)&&Ir?.[n])return Ir[n];if(Ir?.includes?.(t))return t;const r=e.selectedOptions?.[0]?.textContent?.trim();return r&&Ir?.includes?.(r)?r:null}function Wi(e,t){e.countButton.disabled=t||e.findInput.value.length===0,e.replaceButton.disabled=e.countButton.disabled,e.findInput.disabled=t,e.replaceInput.disabled=t,e.caseInput.disabled=t,e.countButton.classList.toggle("disabled",t),e.replaceButton.classList.toggle("disabled",t)}function Yn(e,t){const n=globalThis.toastr,r="世界书查找替换";if(typeof n?.[e]=="function"){n[e](t,r);return}console[e==="error"?"error":"info"](`${r}: ${t}`)}function HM(e=J()){if(e.worldInfoEditorSelectOpenHandler||!document?.body)return;const t=o=>{const a=g0(o.target);a&&Pl(e,a)},n=o=>{if(![" ","Enter","ArrowDown"].includes(o.key))return;const a=o.target instanceof HTMLSelectElement&&o.target.id==="world_editor_select"?o.target:null;a&&Pl(e,a)},r=o=>{const a=o.target instanceof HTMLSelectElement&&o.target.id==="world_editor_select"?o.target:null;a&&Pl(e,a)};document.addEventListener("pointerdown",t,!0),document.addEventListener("keydown",n,!0),globalThis.jQuery?.(document).on("select2:opening.baiBaiToolkitWorldInfoEditorSelectGrouping","#world_editor_select",r),e.worldInfoEditorSelectOpenHandler=t,e.worldInfoEditorSelectKeyHandler=n,e.worldInfoEditorSelectSelect2Handler=r}function GM(e=J()){e.worldInfoEditorSelectOpenHandler&&(document.removeEventListener("pointerdown",e.worldInfoEditorSelectOpenHandler,!0),e.worldInfoEditorSelectOpenHandler=null),e.worldInfoEditorSelectKeyHandler&&(document.removeEventListener("keydown",e.worldInfoEditorSelectKeyHandler,!0),e.worldInfoEditorSelectKeyHandler=null),e.worldInfoEditorSelectSelect2Handler&&(globalThis.jQuery?.(document).off("select2:opening.baiBaiToolkitWorldInfoEditorSelectGrouping","#world_editor_select",e.worldInfoEditorSelectSelect2Handler),e.worldInfoEditorSelectSelect2Handler=null),b0(e)}function FM(e=J()){if(c0(),e.worldInfoEditorSelectSearchOpenHandler||!globalThis.jQuery)return;const t=r=>{const o=r.target instanceof HTMLSelectElement&&r.target.id==="world_editor_select"?r.target:null;if(!o||!de())return;const a=m0(o);a&&Ny(a)},n=r=>{const o=r.target instanceof HTMLSelectElement&&r.target.id==="world_editor_select"?r.target:null;o&&requestAnimationFrame(()=>u0(o))};globalThis.jQuery(document).on("select2:opening.baiBaiToolkitWorldInfoEditorSelectSearch","#world_editor_select",t),globalThis.jQuery(document).on("select2:open.baiBaiToolkitWorldInfoEditorSelectSearch","#world_editor_select",n),s0(e),e.worldInfoEditorSelectSearchOpeningHandler=t,e.worldInfoEditorSelectSearchOpenHandler=n}function zM(e=J()){l0(e),e.worldInfoEditorSelectSearchOpeningHandler&&(globalThis.jQuery?.(document).off("select2:opening.baiBaiToolkitWorldInfoEditorSelectSearch","#world_editor_select",e.worldInfoEditorSelectSearchOpeningHandler),e.worldInfoEditorSelectSearchOpeningHandler=null),e.worldInfoEditorSelectSearchOpenHandler&&(globalThis.jQuery?.(document).off("select2:open.baiBaiToolkitWorldInfoEditorSelectSearch","#world_editor_select",e.worldInfoEditorSelectSearchOpenHandler),e.worldInfoEditorSelectSearchOpenHandler=null);const t=document.getElementById("world_editor_select");if(!(t instanceof HTMLSelectElement)||t.dataset[Lc]!=="true")return;const n=globalThis.jQuery?.(t);n?.data?.("select2")&&n.select2("destroy"),delete t.dataset[Lc]}function VM(e=J()){YM(e),WM(e),qM(e)}function UM(e=J()){KM(e),Ay(e);for(const t of Array.from(e.worldInfoGlobalSelectorSelects??[]))Hd(t,e);e.worldInfoGlobalSelectorSelects?.clear?.()}function WM(e=J()){if(e.worldInfoGlobalSelectorSyncHandler)return;const t=n=>{if(!(n?.target instanceof Element&&!n.target.closest("#WIMultiSelector")&&n.target.id!=="world_editor_select")){if(n?.target instanceof HTMLSelectElement&&n.target[Dt]?.suppressDropdownRefresh){cr(n.target),Gd(n.target);return}jM(e)}};M?.on?.(w.WORLDINFO_SETTINGS_UPDATED,t),document.addEventListener("change",t,!0),e.worldInfoGlobalSelectorSyncHandler=t}function KM(e=J()){const t=e.worldInfoGlobalSelectorSyncHandler;t&&(M?.removeListener?.(w.WORLDINFO_SETTINGS_UPDATED,t),document.removeEventListener("change",t,!0),e.worldInfoGlobalSelectorSyncHandler=null)}function jM(e=J()){for(const t of Array.from(e.worldInfoGlobalSelectorSelects??[])){if(!t.isConnected){Hd(t,e);continue}Ki(t),cr(t),Iy(t,e)}}function qM(e=J()){if(Ay(e),!document?.body)return;const t=r=>{const o=r.target instanceof Element?r.target.closest(`.${yy}.bai-bai-wi-global-selector-display`):null;if(!(o instanceof HTMLElement)||r.target instanceof Element&&r.target.closest(".bai-bai-wi-global-selector-chip-remove"))return;const a=XM(o,e);a instanceof HTMLSelectElement&&(r.preventDefault(),r.stopPropagation(),Py(a,e))},n=typeof PointerEvent=="function"?["pointerdown"]:["mousedown","touchend"];n.forEach(r=>document.addEventListener(r,t,!0)),e.worldInfoGlobalSelectorTriggerHandler=t,e.worldInfoGlobalSelectorTriggerEvents=n}function Ay(e=J()){const t=e.worldInfoGlobalSelectorTriggerHandler;t&&((e.worldInfoGlobalSelectorTriggerEvents??["pointerdown","mousedown","touchend"]).forEach(n=>document.removeEventListener(n,t,!0)),e.worldInfoGlobalSelectorTriggerHandler=null,e.worldInfoGlobalSelectorTriggerEvents=null)}function YM(e=J()){if(_e.worldInfoListOptimizationEnabled){QM().forEach(t=>{JM(t,e)});for(const t of Array.from(e.worldInfoGlobalSelectorSelects??[]))t.isConnected||Hd(t,e)}}function QM(e=document){return Array.from(e.querySelectorAll?.(["#WIMultiSelector select[multiple]","select#WIMultiSelector[multiple]"].join(","))??[]).filter(t=>t instanceof HTMLSelectElement)}function XM(e,t=J()){if(!(e instanceof HTMLElement))return null;for(const n of Array.from(t.worldInfoGlobalSelectorSelects??[]))if(n?.[Dt]?.displayEl===e)return n;return null}function JM(e,t=J()){if(!(e instanceof HTMLSelectElement)||!e.multiple)return;Ki(e),ZM(e);let n=e[Dt];n||(n={displayEl:null,originalSelectDisplay:e.style.display,originalSelect2Display:null,changeHandler:null,triggerHandler:null},e[Dt]=n,t.worldInfoGlobalSelectorSelects.add(e),n.changeHandler=()=>{if(Ki(e),cr(e),Gd(e),n.suppressDropdownRefresh){n.suppressDropdownRefresh=!1;return}Iy(e)},e.addEventListener("change",n.changeHandler)),e0(e),cr(e),e.dataset[_y]="true"}function Hd(e,t=J()){const n=e?.[Dt];if(!(e instanceof HTMLSelectElement)||!n)return;e.removeEventListener("change",n.changeHandler),Mr(t),o0(e);const r=ji(e);r instanceof HTMLElement&&(r.style.display=n.originalSelect2Display??""),e.style.display=n.originalSelectDisplay??"",n.displayEl?.remove(),delete e.dataset[_y],delete e[Dt],t.worldInfoGlobalSelectorSelects?.delete?.(e)}function ZM(e){if(!(e instanceof HTMLSelectElement)||e[to])return;const t=ji(e)?.querySelector?.(".select2-selection--multiple, .select2-selection");if(t instanceof HTMLElement){$y(e,t);return}Dy(e)}function e0(e){const t=e?.[Dt];if(!(e instanceof HTMLSelectElement)||!t)return;if(t.displayEl?.isConnected){const o=ji(e);o instanceof HTMLElement&&(t.originalSelect2Display??=o.style.display,o.style.display="none"),pf(e,t.displayEl);return}const n=document.createElement("div");n.className=`${yy} bai-bai-wi-global-selector-display`,n.tabIndex=0,n.role="button",n.setAttribute("aria-haspopup","listbox"),t.displayEl=n,pf(e,n);const r=ji(e);r instanceof HTMLElement?(t.originalSelect2Display??=r.style.display,r.style.display="none",r.before(n)):(e.style.display="none",e.after(n))}function pf(e,t){const n=e?.[Dt];if(!(e instanceof HTMLSelectElement)||!(t instanceof HTMLElement)||!n)return;n.triggerHandler&&(t.removeEventListener("click",n.triggerHandler),t.removeEventListener("keydown",n.triggerHandler));const r=o=>{if(o.target instanceof Element&&o.target.closest(".bai-bai-wi-global-selector-chip-remove")||o.type==="keydown"&&![" ","Enter","ArrowDown"].includes(o.key))return;o.preventDefault(),o.stopPropagation();const a=J();if(!(o.type==="click"&&a.worldInfoGlobalSelectorDropdown?.select===e)){if(o.type==="click"){Ly(e,a);return}Py(e,a)}};t.addEventListener("click",r),t.addEventListener("keydown",r),n.triggerHandler=r}function cr(e){const t=e?.[Dt],n=t?.displayEl;if(!(e instanceof HTMLSelectElement)||!(n instanceof HTMLElement))return;n.textContent="";const r=r0(e);if(r.length===0){const o=document.createElement("span");o.className="bai-bai-wi-global-selector-placeholder",o.textContent=a0(e),n.append(o);return}r.forEach(o=>{const a=document.createElement("span");a.className="bai-bai-wi-global-selector-chip",a.dataset.value=o.value;const i=document.createElement("span");i.className="bai-bai-wi-global-selector-chip-label",i.textContent=o.textContent?.trim()||o.value;const s=document.createElement("button");s.className="bai-bai-wi-global-selector-chip-remove",s.type="button",s.textContent="×",s.title="移除",s.setAttribute("aria-label",`移除 ${i.textContent}`),s.addEventListener("pointerdown",l=>{l.preventDefault(),l.stopPropagation(),o.selected=!1,t.suppressDropdownRefresh=!0,Oy(e),cr(e),Gd(e)}),a.append(i,s),n.append(a)})}function Ki(e){const t=Array.from(e.options),n=t.map(o=>Number.parseInt(o.dataset[zo]??"",10)).filter(Number.isFinite);let r=n.length>0?Math.max(...n)+1:0;t.forEach(o=>{o.dataset[zo]||(o.dataset[zo]=String(r),r+=1)})}function Py(e,t=J()){if(t.worldInfoGlobalSelectorDropdown?.select===e){Mr(t);return}Ly(e,t)}function Ly(e,t=J()){const r=e?.[Dt]?.displayEl;if(!(e instanceof HTMLSelectElement)||!(r instanceof HTMLElement))return;Ki(e),cr(e),Mr(t),t0(e);const o=document.createElement("div");o.className=Wt,o.dataset.baiBaiWorldInfoGlobalSelectorDropdown="true";const a=document.createElement("div");a.className="bai-bai-wi-global-selector-search-box";const i=document.createElement("input");i.className="bai-bai-wi-global-selector-search",i.type="search",i.placeholder="搜索世界书...";const s=document.createElement("button");s.className="bai-bai-wi-global-selector-search-clear",s.type="button",s.textContent="×",s.title="清空搜索",s.setAttribute("aria-label","清空搜索"),a.append(i,s),de()&&i0(i);const l=document.createElement("div");l.className="bai-bai-wi-global-selector-options",o.append(a,l);const c=My(e),u=B=>B.stopPropagation();["pointerdown","mousedown","click","touchstart","touchend"].forEach(B=>{o.addEventListener(B,u)});const p=()=>Ry(e,l,i.value,c);i.addEventListener("input",p);const b=B=>{B.preventDefault(),B.stopPropagation();const V=i.value!==""||document.activeElement===i;i.value="",p(),V&&Fd(i,B)};s.addEventListener("pointerdown",b),s.addEventListener("click",b),p();const v=r.getBoundingClientRect(),y=r.closest("dialog"),k=y instanceof HTMLElement?y:document.body,P=Math.max(160,Math.min(360,window.innerHeight-v.bottom-10));if(y instanceof HTMLElement){const B=y.querySelector(".popup-body")||y,V=y.getBoundingClientRect();Object.assign(o.style,{left:`${v.left-V.left+B.scrollLeft}px`,maxHeight:`${P}px`,top:`${v.bottom-V.top+B.scrollTop+2}px`,width:`${v.width}px`})}else Object.assign(o.style,{left:`${v.left+window.scrollX}px`,maxHeight:`${P}px`,top:`${v.bottom+window.scrollY+2}px`,width:`${v.width}px`});k.append(o),r.classList.add("bai-bai-wi-global-selector-open");const E=B=>{const V=B.target instanceof Node?B.target:null;V&&(o.contains(V)||r.contains(V))||Mr(t)},K=B=>{B.key==="Escape"&&Mr(t)},X=B=>{B.target instanceof Node&&o.contains(B.target)||document.activeElement instanceof Node&&o.contains(document.activeElement)||Mr(t)};document.addEventListener("pointerdown",E,!0),document.addEventListener("keydown",K,!0),window.addEventListener("scroll",X,!0),t.worldInfoGlobalSelectorDropdown={select:e,displayEl:r,dropdown:o,optionsContainer:l,orderedOptions:c,searchInput:i,closeHandler:E,keyHandler:K,scrollHandler:X},de()||requestAnimationFrame(()=>i.focus({preventScroll:!0}))}function t0(e){const t=globalThis.jQuery?.(e);if(!(!t?.data?.("select2")||typeof t.select2!="function"))try{t.select2("close")}catch(n){console.debug(`${ut} Failed to close native global world info select2`,n)}}function Mr(e=J()){const t=e.worldInfoGlobalSelectorDropdown;t&&(document.removeEventListener("pointerdown",t.closeHandler,!0),document.removeEventListener("keydown",t.keyHandler,!0),window.removeEventListener("scroll",t.scrollHandler,!0),t.displayEl?.classList?.remove?.("bai-bai-wi-global-selector-open"),t.dropdown?.remove?.(),e.worldInfoGlobalSelectorDropdown=null)}function Iy(e,t=J()){const n=t.worldInfoGlobalSelectorDropdown;!n||n.select!==e||Ry(e,n.optionsContainer,n.searchInput?.value??"",n.orderedOptions)}function Ry(e,t,n="",r=null){if(!(e instanceof HTMLSelectElement)||!(t instanceof HTMLElement))return;t.textContent="";const o=String(n).trim().toLowerCase(),i=(Array.isArray(r)?r:My(e)).filter(s=>{const l=s.textContent?.trim()||s.value;return!o||l.toLowerCase().includes(o)});if(i.length===0){const s=document.createElement("div");s.className="bai-bai-wi-global-selector-empty",s.textContent="没有找到匹配的世界书",t.append(s);return}i.forEach(s=>{const l=By(s);t.append(n0(e,s,l))})}function n0(e,t,n){const r=document.createElement("div");r.className="bai-bai-wi-global-selector-option",r.dataset.value=t.value,r.role="option",r.tabIndex=0,r.setAttribute("aria-selected",n?"true":"false"),r.classList.toggle("selected",n),r.textContent=t.textContent?.trim()||t.value;let o=null;const a=i=>{i.preventDefault(),i.stopPropagation();const s=e?.[Dt];s&&(s.suppressDropdownRefresh=!0),t.selected=!t.selected;const l=By(t);r.classList.toggle("selected",l),r.setAttribute("aria-selected",l?"true":"false"),Oy(e),cr(e)};return r.addEventListener("pointerdown",i=>{o={pointerId:i.pointerId,pointerType:i.pointerType,x:i.clientX,y:i.clientY,moved:!1}}),r.addEventListener("pointermove",i=>{if(!o||o.pointerId!==i.pointerId)return;Math.hypot(i.clientX-o.x,i.clientY-o.y)>xM&&(o.moved=!0)}),r.addEventListener("pointerup",i=>{if(!o||o.pointerId!==i.pointerId)return;const s=o.moved&&o.pointerType!=="mouse";o=null,!s&&a(i)}),r.addEventListener("pointercancel",()=>{o=null}),r.addEventListener("keydown",i=>{[" ","Enter"].includes(i.key)&&a(i)}),r}function My(e){return Array.from(e.options).filter(t=>t.value!==""&&t.style.display!=="none").sort((t,n)=>no(t)-no(n))}function Gd(e,t=J()){const n=t.worldInfoGlobalSelectorDropdown;if(!(e instanceof HTMLSelectElement)||!n||n.select!==e||!(n.optionsContainer instanceof HTMLElement))return;const r=new Set(Array.from(e.selectedOptions).map(o=>o.value));n.optionsContainer.querySelectorAll(".bai-bai-wi-global-selector-option").forEach(o=>{const a=r.has(o.dataset.value??"");o.classList.toggle("selected",a),o.setAttribute("aria-selected",a?"true":"false")})}function r0(e){return Array.from(e.selectedOptions).sort((t,n)=>no(t)-no(n))}function Oy(e){e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0}));const t=globalThis.jQuery?.(e);t?.data?.("select2")&&t.trigger("change.select2")}function o0(e){if(!(e instanceof HTMLSelectElement))return;const t=Array.from(e.children);if(!t.every(o=>o instanceof HTMLOptionElement))return;const n=new Set(Array.from(e.selectedOptions).map(o=>o.value)),r=document.createDocumentFragment();t.slice().sort((o,a)=>no(o)-no(a)).forEach(o=>{delete o.dataset[zo],r.append(o)}),e.append(r),Array.from(e.options).forEach(o=>{o.selected=n.has(o.value)})}function By(e){if(e.selected)return!0;const t=new Set(Vo(vg)),n=Hy(e);return n?t.has(n):!1}function a0(e){const t=e.getAttribute("data-placeholder")||e.getAttribute("placeholder")||e.querySelector('option[value=""]')?.textContent||"搜索/选择全局世界书...";return String(t).trim()||"搜索/选择全局世界书..."}function ji(e){const t=globalThis.jQuery?.(e).data?.("select2")?.$container?.[0]??e.nextElementSibling;return t instanceof HTMLElement&&t.classList.contains("select2-container")?t:null}function no(e){const t=Number.parseInt(e?.dataset?.[zo]??"",10);return Number.isFinite(t)?t:Number.MAX_SAFE_INTEGER}function i0(e){e.dataset[Ui]="true",e.setAttribute("readonly","readonly"),e.setAttribute("inputmode","none"),qi(e);const t=n=>{mf(e),Fd(e,n),n.stopPropagation()};e.addEventListener("pointerdown",t,{capture:!0,once:!0}),e.addEventListener("touchstart",t,{capture:!0,once:!0}),e.addEventListener("mousedown",t,{capture:!0,once:!0}),setTimeout(()=>{e.dataset[Ui]==="true"&&(qi(e),mf(e))},hy)}function mf(e){!(e instanceof HTMLInputElement)||e.dataset[Ui]!=="true"||(e.removeAttribute("readonly"),e.getAttribute("inputmode")==="none"&&e.removeAttribute("inputmode"),delete e.dataset[Ui])}function s0(e=J()){if(e.worldInfoEditorSelectSearchInteractionGuard)return;const t=n=>{const r=n.target instanceof Element?n.target.closest(".select2-container--open .select2-search__field"):null;!(r instanceof HTMLInputElement)||!de()||!f0()||(Oc(r),Fd(r,n),n.stopPropagation())};for(const n of["pointerdown","mousedown","touchstart","click"])window.addEventListener(n,t,!0);e.worldInfoEditorSelectSearchInteractionGuard=t}function l0(e=J()){const t=e.worldInfoEditorSelectSearchInteractionGuard;if(t){for(const n of["pointerdown","mousedown","touchstart","click"])window.removeEventListener(n,t,!0);e.worldInfoEditorSelectSearchInteractionGuard=null}}function c0(e=document.getElementById("world_editor_select")){if(!(e instanceof HTMLSelectElement)||typeof globalThis.jQuery?.fn?.select2!="function")return;const t=globalThis.jQuery(e),n=t.data("select2");if(n){n.options?.set?.("allowClear",!1),n.options?.set?.("dropdownCssClass",Mt),n.options?.set?.("minimumResultsForSearch",0),n.options?.set?.("searchInputPlaceholder","Search..."),Mc(e);return}const r=e.querySelector('option[value=""]')?.textContent?.trim()||"--- Pick to Edit ---";Dy(e),t.select2({width:"100%",placeholder:r,searchInputPlaceholder:"Search...",allowClear:!1,closeOnSelect:!0,dropdownCssClass:Mt,multiple:!1,minimumResultsForSearch:0}),e.dataset[Lc]="true",Mc(e)}function u0(e=document.getElementById("world_editor_select")){if(!(e instanceof HTMLSelectElement)||!globalThis.jQuery?.(e).data?.("select2"))return;const t=document.querySelector(".select2-container--open .select2-search__field");if(Mc(e),d0(e,t),t instanceof HTMLInputElement){if(t.closest(".select2-search")?.classList.remove("select2-search--hide"),t.placeholder=t.placeholder||"Search...",t.removeAttribute("readonly"),de()){Ny(t);return}t.focus({preventScroll:!0})}}function d0(e,t=document.querySelector(".select2-container--open .select2-search__field")){if(!(e instanceof HTMLSelectElement))return;const r=globalThis.jQuery?.(e).data?.("select2")?.dropdown?.$dropdown?.[0];if(r instanceof HTMLElement&&r.classList.add(Mt),!(t instanceof HTMLInputElement))return;const o=p0(),a=o instanceof HTMLElement?getComputedStyle(o):e[to];a&&Object.assign(t.style,{backgroundColor:a.backgroundColor,borderBottomColor:a.borderBottomColor,borderBottomLeftRadius:a.borderBottomLeftRadius,borderBottomRightRadius:a.borderBottomRightRadius,borderBottomStyle:a.borderBottomStyle,borderBottomWidth:a.borderBottomWidth,borderLeftColor:a.borderLeftColor,borderLeftStyle:a.borderLeftStyle,borderLeftWidth:a.borderLeftWidth,borderRightColor:a.borderRightColor,borderRightStyle:a.borderRightStyle,borderRightWidth:a.borderRightWidth,borderTopColor:a.borderTopColor,borderTopLeftRadius:a.borderTopLeftRadius,borderTopRightRadius:a.borderTopRightRadius,borderTopStyle:a.borderTopStyle,borderTopWidth:a.borderTopWidth,boxShadow:a.boxShadow,color:a.color,fontFamily:a.fontFamily,fontSize:a.fontSize,fontWeight:a.fontWeight,height:a.height,lineHeight:a.lineHeight,opacity:"1",paddingBottom:a.paddingBottom,paddingLeft:a.paddingLeft,paddingRight:a.paddingRight,paddingTop:a.paddingTop})}function p0(){const e=document.getElementById("world_info_search");return e instanceof HTMLInputElement?e:document.querySelector('#world_popup input[type="search"], #world_popup input[type="text"], #world_popup input:not([type])')}function Dy(e){!(e instanceof HTMLSelectElement)||e[to]||$y(e,e)}function $y(e,t){if(!(e instanceof HTMLElement)||!(t instanceof HTMLElement)||e[to])return;const n=getComputedStyle(t);e[to]={backgroundColor:n.backgroundColor,borderBottomColor:n.borderBottomColor,borderBottomLeftRadius:n.borderBottomLeftRadius,borderBottomRightRadius:n.borderBottomRightRadius,borderBottomStyle:n.borderBottomStyle,borderBottomWidth:n.borderBottomWidth,borderLeftColor:n.borderLeftColor,borderLeftStyle:n.borderLeftStyle,borderLeftWidth:n.borderLeftWidth,borderRightColor:n.borderRightColor,borderRightStyle:n.borderRightStyle,borderRightWidth:n.borderRightWidth,borderTopColor:n.borderTopColor,borderTopLeftRadius:n.borderTopLeftRadius,borderTopRightRadius:n.borderTopRightRadius,borderTopStyle:n.borderTopStyle,borderTopWidth:n.borderTopWidth,boxShadow:n.boxShadow,color:n.color,fontFamily:n.fontFamily,fontSize:n.fontSize,fontWeight:n.fontWeight,height:n.height,lineHeight:n.lineHeight,minHeight:n.minHeight,paddingBottom:n.paddingBottom,paddingLeft:n.paddingLeft,paddingRight:n.paddingRight,paddingTop:n.paddingTop}}function Mc(e){if(!(e instanceof HTMLSelectElement))return;const n=globalThis.jQuery?.(e).data?.("select2")?.$container?.[0],r=n?.querySelector?.(".select2-selection--single"),o=n?.querySelector?.(".select2-selection__rendered"),a=n?.querySelector?.(".select2-selection__arrow"),i=a?.querySelector?.("b"),s=e[to];!(r instanceof HTMLElement)||!s||(Object.assign(r.style,{backgroundColor:s.backgroundColor,borderBottomColor:s.borderBottomColor,borderBottomLeftRadius:s.borderBottomLeftRadius,borderBottomRightRadius:s.borderBottomRightRadius,borderBottomStyle:s.borderBottomStyle,borderBottomWidth:s.borderBottomWidth,borderLeftColor:s.borderLeftColor,borderLeftStyle:s.borderLeftStyle,borderLeftWidth:s.borderLeftWidth,borderRightColor:s.borderRightColor,borderRightStyle:s.borderRightStyle,borderRightWidth:s.borderRightWidth,borderTopColor:s.borderTopColor,borderTopLeftRadius:s.borderTopLeftRadius,borderTopRightRadius:s.borderTopRightRadius,borderTopStyle:s.borderTopStyle,borderTopWidth:s.borderTopWidth,boxShadow:s.boxShadow,color:s.color,alignItems:"center",display:"flex",fontFamily:s.fontFamily,fontSize:s.fontSize,fontWeight:s.fontWeight,minHeight:s.minHeight}),ff(s.height)&&(r.style.height=s.height),o instanceof HTMLElement&&Object.assign(o.style,{alignItems:"center",color:s.color,display:"flex",flex:"1 1 auto",fontFamily:s.fontFamily,fontSize:s.fontSize,fontWeight:s.fontWeight,lineHeight:"normal",minWidth:"0",overflow:"hidden",paddingBottom:"2px",paddingLeft:s.paddingLeft,paddingRight:"28px",paddingTop:"2px",textOverflow:"ellipsis",whiteSpace:"nowrap"}),a instanceof HTMLElement&&(Object.assign(a.style,{alignItems:"center",color:s.color,display:"flex",justifyContent:"center",opacity:"0.62",right:"8px",top:"0",width:"18px"}),ff(s.height)&&(a.style.height=s.height)),i instanceof HTMLElement&&Object.assign(i.style,{borderColor:"currentColor transparent transparent transparent",borderStyle:"solid",borderWidth:"6px 5px 0 5px",height:"0",left:"auto",margin:"0",position:"static",top:"auto",width:"0"}))}function ff(e){return typeof e=="string"&&e!==""&&e!=="auto"&&e!=="0px"&&e!=="1px"}function m0(e){const t=globalThis.jQuery?.(e).data?.("select2"),n=t?.dropdown?.$search?.[0]??t?.selection?.$search?.[0]??null;return n instanceof HTMLInputElement?n:null}function f0(){const e=document.getElementById("world_editor_select");return!!(e instanceof HTMLSelectElement?globalThis.jQuery?.(e).data?.("select2"):null)?.isOpen?.()}function Ny(e){e.dataset[Vi]="true",e.setAttribute("readonly","readonly"),e.setAttribute("inputmode","none"),qi(e);const t=()=>Oc(e);e.addEventListener("pointerdown",t,{capture:!0,once:!0}),e.addEventListener("touchstart",t,{capture:!0,once:!0}),e.addEventListener("mousedown",t,{capture:!0,once:!0}),setTimeout(()=>{e.dataset[Vi]==="true"&&(qi(e),Oc(e))},hy)}function Oc(e){!(e instanceof HTMLInputElement)||e.dataset[Vi]!=="true"||(e.removeAttribute("readonly"),e.getAttribute("inputmode")==="none"&&e.removeAttribute("inputmode"),delete e.dataset[Vi])}function qi(e){document.activeElement===e&&e.blur(),requestAnimationFrame(()=>{document.activeElement===e&&e.blur()})}function Fd(e,t){if(!(t?.type==="click"||document.activeElement===e))try{e.focus({preventScroll:!0})}catch{e.focus()}}function g0(e){if(!(e instanceof Element))return null;if(e instanceof HTMLSelectElement&&e.id==="world_editor_select")return e;const n=e.closest?.(".select2-container")?.previousElementSibling;return n instanceof HTMLSelectElement&&n.id==="world_editor_select"?n:null}function Pl(e=J(),t=document.getElementById("world_editor_select")){if(!(t instanceof HTMLSelectElement)||e.worldInfoEditorSelectGroupingApplying)return;const n=Array.from(t.options).filter(l=>l.value!=="");if(n.length===0)return;const r=t.value,o=h0(n),a=_0(o);if(t.dataset[zi]==="true"&&t.dataset.baiBaiToolkitWorldInfoEditorSelectGroupingSignature===a)return;const i=document.createDocumentFragment(),s=Array.from(t.options).filter(l=>l.value==="");e.worldInfoEditorSelectGroupingApplying=!0;try{s.forEach(l=>i.append(l)),o.forEach(({label:l,options:c})=>{if(c.length===0)return;const u=document.createElement("optgroup");u.label=l,c.forEach(p=>u.append(p)),i.append(u)}),t.replaceChildren(i),t.value=r,t.dataset[zi]="true",t.dataset.baiBaiToolkitWorldInfoEditorSelectGroupingSignature=a,Gy(t)}finally{e.worldInfoEditorSelectGroupingApplying=!1}}function b0(e=J()){const t=document.getElementById("world_editor_select");if(!(t instanceof HTMLSelectElement)||t.dataset[zi]!=="true")return;const n=t.value,r=Array.from(t.options).filter(i=>i.value===""),o=Array.from(t.options).filter(i=>i.value!=="").sort((i,s)=>Yi(i)-Yi(s)),a=document.createDocumentFragment();e.worldInfoEditorSelectGroupingApplying=!0;try{r.forEach(i=>a.append(i)),o.forEach(i=>a.append(i)),t.replaceChildren(a),t.value=n,delete t.dataset[zi],delete t.dataset.baiBaiToolkitWorldInfoEditorSelectGroupingSignature,Gy(t)}finally{e.worldInfoEditorSelectGroupingApplying=!1}}function h0(e){const t=new Map,n=[];e.slice().sort((a,i)=>Yi(a)-Yi(i)).forEach(a=>{const i=Hy(a);!i||t.has(i)||(t.set(i,a),n.push(i))});const r=new Set;return y0(n).map(a=>{const i=[];return a.names.forEach(s=>{if(r.has(s))return;const l=t.get(s);l&&(r.add(s),i.push(l))}),{label:a.label,options:i}})}function _0(e){return e.map(t=>`${t.label}:${t.options.map(n=>n.value).join(",")}`).join("|")}function y0(e){const t=new Set(e),n=Vo(vg).filter(l=>t.has(l)),r=Vo(Xt?.[$e]?.data?.extensions?.world).filter(l=>t.has(l)),o=E0().filter(l=>t.has(l)),a=Vo(iv?.[Ev]).filter(l=>t.has(l)),i=new Set([...n,...r,...o,...a]),s=e.filter(l=>!i.has(l));return[{label:"当前开启的全局世界书",names:Fa(n,e)},{label:"角色卡世界书",names:Fa(r,e)},{label:"附加角色世界书",names:Fa(o,e)},{label:"聊天世界书",names:Fa(a,e)},{label:"其他世界书",names:s}]}function E0(){if($e===void 0||$e===null)return[];let e="";try{e=mv($e)}catch(n){console.debug(`${ut} Failed to resolve current character lorebook file name`,n)}if(!e)return[];const t=Sv?.charLore?.find(n=>n?.name===e);return Vo(t?.extraBooks)}function Vo(e){const t=Array.isArray(e)?e:[e],n=new Set(Array.isArray(Ir)?Ir:[]),r=new Set;return t.map(o=>String(o??"").trim()).filter(o=>!o||r.has(o)||n.size>0&&!n.has(o)?!1:(r.add(o),!0))}function Fa(e,t){const n=new Map(t.map((r,o)=>[r,o]));return e.filter((r,o,a)=>a.indexOf(r)===o).sort((r,o)=>(n.get(r)??Number.MAX_SAFE_INTEGER)-(n.get(o)??Number.MAX_SAFE_INTEGER))}function Hy(e){return String(e?.textContent??"").trim()}function Yi(e){const t=Number.parseInt(e?.value??"",10);return Number.isFinite(t)?t:Number.MAX_SAFE_INTEGER}function Gy(e){const t=globalThis.jQuery?.(e);t?.data?.("select2")&&t.trigger("change.select2")}function S0(e,t){const n=t[0];return n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.callback=="function"&&e?.length===1&&e[0]instanceof Element&&e[0].id==="world_info_pagination"}function v0(e=J()){if(e.patchedAppend&&globalThis.jQuery?.fn?.append===e.patchedAppend)return;const t=globalThis.jQuery?.fn?.append;if(typeof t!="function"){console.warn(`${ut} jQuery.append is unavailable; World Info list optimization was not installed`);return}function n(...r){const o=e.activeAppendCapture;return _e.worldInfoListOptimizationEnabled&&o?.list&&this?.length===1&&this[0]===o.list?(o.appendCalls.push(r),this):t.apply(this,r)}n.__baiBaiToolkitWorldInfoVueListAppendPatched=!0,n.__baiBaiToolkitOriginalAppend=t,Object.assign(n,t),e.originalAppend=t,e.patchedAppend=n,globalThis.jQuery.fn.append=n}function Ro(e=J()){!e.patchedAppend||!globalThis.jQuery?.fn||(globalThis.jQuery.fn.append===e.patchedAppend&&typeof e.originalAppend=="function"&&(globalThis.jQuery.fn.append=e.originalAppend),e.activeAppendCapture=null,e.originalAppend=null,e.patchedAppend=null)}async function T0(e,t,n,r){const o=J(),i=(o.renderQueue||Promise.resolve()).catch(()=>{}).then(()=>x0(o,e,t,n,r)),s=i.finally(()=>{o.renderQueue===s&&(o.renderQueue=null)});return o.renderQueue=s,i}async function x0(e,t,n,r,o){const a=document.getElementById("world_popup_entries_list");if(!_e.worldInfoListOptimizationEnabled||!(a instanceof HTMLElement)||typeof t!="function")return t.call(n,r,...o);Wd(e);const i={list:a,appendCalls:[]};e.activeAppendCapture=i,v0(e);const s=e.originalAppend;try{const l=await t.call(n,r,...o);return _e.worldInfoListOptimizationEnabled?e.activeAppendCapture!==i?(Ro(e),l):(e.activeAppendCapture=null,Ro(e),i.appendCalls.length===0||await w0(e,a,i.appendCalls,s),l):(Ro(e),Bc(e,a,i.appendCalls,s),l)}catch(l){throw console.debug(`${ut} Failed to render World Info Vue list`,l),e.activeAppendCapture=null,Ro(e),Bc(e,a,i.appendCalls,s),l}finally{e.activeAppendCapture===i&&(e.activeAppendCapture=null),Ro(e)}}async function w0(e,t,n,r){const o=await j0(e),a=++e.renderToken;Wd(e),e.root=t,e.app=o.createApp(C0(o,{state:e,list:t,appendCalls:n,append:r,renderToken:a})),e.app.mount(t)}function C0(e,t){return{name:"BaiBaiWorldInfoVueList",setup(){return e.onMounted(()=>{t.state.renderToken!==t.renderToken||!_e.worldInfoListOptimizationEnabled||(Bc(t.state,t.list,t.appendCalls,t.append),A0(t.list))}),()=>null}}}function Bc(e,t,n,r=null){if(!(t instanceof HTMLElement)||!Array.isArray(n)||n.length===0)return;const o=r||e.originalAppend;if(typeof o!="function"){for(const i of n)t.append(...k0(i));return}const a=globalThis.jQuery?.(t);if(a)for(const i of n)o.apply(a,i)}function k0(e){const t=[];for(const n of e)if(n instanceof Node)t.push(n);else if(n?.jquery&&typeof n.toArray=="function")t.push(...n.toArray());else if(Array.isArray(n))for(const r of n)r instanceof Node?t.push(r):r?.jquery&&typeof r.toArray=="function"&&t.push(...r.toArray());else if(typeof n=="string"){const r=document.createElement("template");r.innerHTML=n,t.push(...r.content.childNodes)}return t}function A0(e){_e.worldInfoSearchReplaceEnabled!==!1?xy():ia(),Ud(),zd(e),Vd(e),e.querySelectorAll('textarea[name="comment"]').forEach(t=>{t instanceof HTMLTextAreaElement&&!globalThis.CSS?.supports?.("field-sizing","content")&&bi(t)})}function P0(e=J()){if(e.mobileHeaderLayoutHandler)return;const t=globalThis.matchMedia?.("(max-width: 600px)"),n=()=>{const r=document.getElementById("world_popup_entries_list");r instanceof HTMLElement&&(Ca()?(Ud(),zd(r),Vd(r)):(Zs(),el(r),tl(r)))};e.mobileHeaderLayoutHandler=n,e.mobileHeaderLayoutMediaQuery=t||null,t?.addEventListener?t.addEventListener("change",n):t?.addListener?t.addListener(n):globalThis.addEventListener?.("resize",n),n()}function L0(e=J()){if(e.mobileLayoutMutationObserver)return;const t=document.getElementById("world_popup_entries_list");if(!(t instanceof HTMLElement)||typeof MutationObserver!="function")return;const n=new MutationObserver(r=>{if(!_e.worldInfoListOptimizationEnabled)return;let o=!1;for(const a of r){for(const i of a.addedNodes)if(i instanceof Element&&(i.matches(".world_entry_edit")||i.querySelector?.(".world_entry_edit"))){o=!0;break}if(o)break}o&&(Ca()?(Ud(),zd(t),Vd(t)):(Zs(),el(t),tl(t)))});n.observe(t,{childList:!0,subtree:!0}),e.mobileLayoutMutationObserver=n}function I0(e=J()){e.mobileLayoutMutationObserver?.disconnect(),e.mobileLayoutMutationObserver=null}function R0(e=J()){const t=e.mobileHeaderLayoutHandler,n=e.mobileHeaderLayoutMediaQuery;t&&(n?.removeEventListener?n.removeEventListener("change",t):n?.removeListener?n.removeListener(t):globalThis.removeEventListener?.("resize",t),e.mobileHeaderLayoutHandler=null,e.mobileHeaderLayoutMediaQuery=null)}function Ca(){return _e.worldInfoListOptimizationEnabled&&!!globalThis.matchMedia?.("(max-width: 600px)").matches}function zd(e=document){if(!Ca()){tl(e);return}nl(e).forEach(t=>{V0(t)})}function Vd(e=document){if(!Ca()){el(e);return}nl(e).forEach(t=>{t.querySelectorAll(":scope .world_entry_edit").forEach(n=>{N0(n)})})}function Ud(){if(!Ca()){Zs();return}const e=document.getElementById("world_popup"),t=document.getElementById("world_popup_entries_list");if(!(e instanceof HTMLElement)||!(t instanceof HTMLElement)||t.parentElement!==e||e.dataset.baiBaiWorldInfoPopupLayout==="true")return;const n=[];for(let s=e.firstChild;s&&s!==t;s=s.nextSibling)s instanceof HTMLElement&&s.classList.contains(we)||n.push(s);if(!n.some(s=>s instanceof HTMLElement))return;const r=document.createComment("bai-bai-world-info-popup-layout-placeholder"),o=document.createElement("div");o.className="bai-bai-wi-popup-header";const a=document.createElement("div");a.className="bai-bai-wi-popup-source-stash",a.hidden=!0;const i=[];n[0].before(r),r.after(o),o.append(a),a.append(...n),M0(o,a,i),e.dataset.baiBaiWorldInfoPopupLayout="true",e.__baiBaiWorldInfoPopupLayout={header:o,marker:r,nodesBeforeList:n,movedNodes:i}}function Zs(){const e=document.getElementById("world_popup"),t=e?.__baiBaiWorldInfoPopupLayout;if(!(!(e instanceof HTMLElement)||!t?.header)){for(const n of t.movedNodes||[])n?.node instanceof Node&&n.placeholder instanceof Comment&&n.placeholder.parentNode&&n.placeholder.replaceWith(n.node);t.marker instanceof Comment&&t.marker.parentNode?t.marker.replaceWith(...t.nodesBeforeList||Array.from(t.header.childNodes)):t.header.parentNode&&t.header.before(...t.nodesBeforeList||Array.from(t.header.childNodes)),t.header.remove(),delete e.__baiBaiWorldInfoPopupLayout,delete e.dataset.baiBaiWorldInfoPopupLayout}}function M0(e,t,n){const r=t.querySelector("#world_editor_select"),o=t.querySelector("#world_create_button"),a=$0(t,o),i=D0(r),s=new Set(i),l=new Set,c=O0(t);for(const u of i)c.includes(u)&&(za(u,e,n),l.add(u));a instanceof Node&&(za(a,e,n),l.add(a)),o instanceof Node&&(za(o,e,n),l.add(o));for(const u of c)l.has(u)||s.has(u)||(za(u,e,n),l.add(u))}function O0(e){const t=[];return Fy(e,t),t}function Fy(e,t){for(const n of Array.from(e.childNodes)){if(n.nodeType===Node.TEXT_NODE){n.nodeValue?.trim()&&t.push(n);continue}if(n instanceof HTMLElement){if(B0(n)){t.push(n);continue}Fy(n,t)}}}function B0(e){return e instanceof HTMLElement?e.id==="world_info_pagination"||e.matches(["#world_editor_select","#world_create_button",".select2-container",".menu_button","button","input","select","textarea","a[href]"].join(","))?!0:e.childElementCount===0&&!!e.textContent?.trim():!1}function D0(e){if(!(e instanceof HTMLElement))return[];const t=[e],n=e.nextElementSibling;return n instanceof HTMLElement&&n.classList.contains("select2-container")&&t.push(n),t}function za(e,t,n){if(!(e instanceof Node)||!(t instanceof HTMLElement))return;const r=document.createComment("bai-bai-world-info-popup-inner-placeholder");e.before(r),n.push({node:e,placeholder:r}),t.append(e)}function $0(e,t){return e instanceof HTMLElement?document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode(r){if(r===t||t?.contains?.(r))return NodeFilter.FILTER_REJECT;const o=r.textContent?.trim();return/^(\u6216|or)$/i.test(o||"")?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}}).nextNode():null}function N0(e){if(!(e instanceof HTMLElement)||e.dataset.baiBaiWorldInfoMobileExpandedLayout==="true")return;const t=e.querySelector(":scope > .flex-container.wide100p.alignitemscenter"),n=t?.querySelector(':scope > [name="keywordsAndLogicBlock"]'),r=t?.querySelector(':scope > [name="perEntryOverridesBlock"]'),o=t?.querySelector(':scope > [name="contentAndCharFilterBlock"]'),a=t?.querySelector(":scope > .commentContainer"),i=n?.querySelector(":scope > .keyprimary"),s=n?.querySelector(":scope > .world_entry_form_control:not(.keyprimary):not(.keysecondary)"),l=n?.querySelector(":scope > .keysecondary"),c=o?.querySelector('textarea[name="content"]'),p=c?.closest(".world_entry_form_control")?.querySelector('label[for="content "] small > span.alignitemscenter'),b=p?.querySelector(":scope > .alignitemscenter.flex-container"),v=Array.from(p?.children??[]).find(O=>O instanceof HTMLElement&&O!==b&&O.querySelector(".world_entry_form_token_counter")),y=b?.querySelector(".editor_maximize"),k=Array.from(p?.children??[]).find(O=>O instanceof HTMLElement&&O.querySelector('input[name="excludeRecursion"]'));if(!(t instanceof HTMLElement)||!(n instanceof HTMLElement)||!(i instanceof HTMLElement)||!(o instanceof HTMLElement))return;const P=document.createElement("div");P.className="bai-bai-wi-mobile-expanded-advanced flex-container flexFlowColumn flexGap10",p instanceof HTMLElement&&p.classList.add("bai-bai-wi-mobile-content-header"),b instanceof HTMLElement&&b.classList.add("bai-bai-wi-mobile-content-title-group"),v instanceof HTMLElement&&v.classList.add("bai-bai-wi-mobile-content-meta");const E=H0(v),K=G0(c,14);y instanceof HTMLElement&&(y.classList.add("bai-bai-wi-mobile-content-maximize"),p?.append(y)),[s,l,k].forEach(O=>{O instanceof HTMLElement&&P.append(O)});const X=[P.childElementCount>0?P:null,r,a,...Array.from(e.children).filter(O=>O!==t)].filter(O=>O instanceof HTMLElement),B=new Map;for(const O of X){const le=document.createComment("bai-bai-world-info-mobile-expanded-placeholder");O.before(le),B.set(O,le)}t.classList.add("bai-bai-wi-mobile-expanded-main");const V=document.createElement("div");V.className="bai-bai-wi-mobile-expanded-extra inline-drawer wide100p flexFlowColumn";const ee=document.createElement("div");ee.className="bai-bai-wi-mobile-expanded-extra-toggle inline-drawer-header inline-drawer-header-pointer";const I=document.createElement("strong");I.textContent="更多设置";const Z=document.createElement("div");Z.className="fa-solid fa-circle-chevron-down inline-drawer-icon down",ee.append(I,Z);const te=document.createElement("div");te.className="bai-bai-wi-mobile-expanded-extra-content inline-drawer-content flex-container flexFlowColumn flexGap10 paddingBottom5px",te.style.display="none",te.append(...X);const ve=O=>{O.preventDefault(),O.stopPropagation();const le=getComputedStyle(te).display==="none";te.style.display=le?"flex":"none",Z.classList.toggle("down",!le),Z.classList.toggle("up",le),Z.classList.toggle("fa-circle-chevron-down",!le),Z.classList.toggle("fa-circle-chevron-up",le)};ee.addEventListener("click",ve),V.append(ee,te),e.append(V),e.dataset.baiBaiWorldInfoMobileExpandedLayout="true",e.__baiBaiWorldInfoMobileExpandedLayout={mainRow:t,keywordsBlock:n,primaryKeyBlock:i,mobileAdvancedBlock:P,logicBlock:s,secondaryKeyBlock:l,contentHeader:p,contentTitleGroup:b,contentMeta:v,contentMaximize:y,tokenGapTextNode:E,contentTextareaRowsState:K,recursionOptions:k,contentBlock:o,extraDrawer:V,extraHeader:ee,toggleHandler:ve,placeholders:B,extraNodes:X}}function el(e=document){nl(e).forEach(t=>{t.querySelectorAll(':scope .world_entry_edit[data-bai-bai-world-info-mobile-expanded-layout="true"]').forEach(n=>{z0(n)})})}function H0(e){if(!(e instanceof HTMLElement))return null;const n=e.querySelector(".world_entry_form_token_counter")?.previousSibling;if(n?.nodeType!==Node.TEXT_NODE||!/[\s\u00a0]+/.test(n.nodeValue||""))return null;const r={node:n,value:n.nodeValue};return n.nodeValue="",r}function G0(e,t){if(!(e instanceof HTMLTextAreaElement))return null;const n={textarea:e,rowsAttribute:e.getAttribute("rows")};return e.rows=t,n}function F0(e){e?.textarea instanceof HTMLTextAreaElement&&(e.rowsAttribute===null?e.textarea.removeAttribute("rows"):e.textarea.setAttribute("rows",e.rowsAttribute))}function z0(e){const t=e?.__baiBaiWorldInfoMobileExpandedLayout;if(!(e instanceof HTMLElement)||!t?.extraDrawer)return;t.keywordsBlock instanceof HTMLElement&&[t.primaryKeyBlock,t.logicBlock,t.secondaryKeyBlock].forEach(r=>{r instanceof Node&&t.keywordsBlock.append(r)});const n=t.contentBlock instanceof HTMLElement?t.contentBlock.querySelector('label[for="content "] small > span.alignitemscenter'):null;n instanceof HTMLElement&&t.recursionOptions instanceof HTMLElement&&n.append(t.recursionOptions),t.contentTitleGroup instanceof HTMLElement&&t.contentMaximize instanceof HTMLElement&&t.contentTitleGroup.append(t.contentMaximize),t.tokenGapTextNode?.node?.nodeType===Node.TEXT_NODE&&(t.tokenGapTextNode.node.nodeValue=t.tokenGapTextNode.value),F0(t.contentTextareaRowsState),[t.contentHeader,t.contentTitleGroup,t.contentMeta,t.contentMaximize].forEach(r=>{r instanceof HTMLElement&&r.classList.remove("bai-bai-wi-mobile-content-header","bai-bai-wi-mobile-content-title-group","bai-bai-wi-mobile-content-meta","bai-bai-wi-mobile-content-maximize")}),t.mainRow?.classList?.remove("bai-bai-wi-mobile-expanded-main");for(const r of t.extraNodes||[]){const o=t.placeholders?.get(r);r instanceof Node&&o instanceof Comment&&o.parentNode&&o.replaceWith(r)}t.extraHeader?.removeEventListener?.("click",t.toggleHandler),t.extraDrawer.remove(),delete e.__baiBaiWorldInfoMobileExpandedLayout,delete e.dataset.baiBaiWorldInfoMobileExpandedLayout}function V0(e){if(!(e instanceof HTMLElement)||e.dataset.baiBaiWorldInfoMobileHeaderLayout==="true")return;const t=e.querySelector(":scope > .world_entry_form > .inline-drawer > .inline-drawer-header"),n=t?.querySelector(":scope > .world_entry_thin_controls"),r=n?.querySelector(":scope > .flex-container.alignitemscenter.wide100p"),o=r?.querySelector(":scope > .WIEntryTitleAndStatus"),a=r?.querySelector(":scope > .WIEnteryHeaderControls"),i=t?.querySelector(":scope > .drag-handle"),s=n?.querySelector(":scope > .inline-drawer-toggle"),l=n?.querySelector(":scope > .killSwitch"),c=t?.querySelector(":scope > .move_entry_button"),u=t?.querySelector(":scope > .duplicate_entry_button"),p=t?.querySelector(":scope > .delete_entry_button"),b=a?.querySelector(':scope > [name="PositionBlock"]'),v=a?.querySelector('input[name="depth"]')?.closest(".world_entry_form_control"),y=a?.querySelector('input[name="order"]')?.closest(".world_entry_form_control"),k=a?.querySelector(":scope > .probabilityContainer"),P=o?.querySelector('select[name="entryStateSelector"]'),E=b?.querySelector(":scope > label"),K=v?.querySelector(":scope > label");if(!(t instanceof HTMLElement)||!(n instanceof HTMLElement)||!(o instanceof HTMLElement)||!(a instanceof HTMLElement)||!(s instanceof HTMLElement)||!(l instanceof HTMLElement)||!(b instanceof HTMLElement)||!(v instanceof HTMLElement)||!(y instanceof HTMLElement)||!(k instanceof HTMLElement)||!(E instanceof HTMLElement)||!(K instanceof HTMLElement))return;const X=[i,n,c,u,p].filter(Ct=>Ct instanceof Node),B=new Map;for(const Ct of X){const La=document.createComment("bai-bai-world-info-mobile-header-placeholder");Ct.before(La),B.set(Ct,La)}const V=document.createElement("div");V.className="bai-bai-wi-mobile-header";const ee=document.createElement("div");ee.className="bai-bai-wi-mobile-hidden-stash",ee.hidden=!0,ee.append(n);const I=document.createElement("div");I.className="bai-bai-wi-mobile-header-grid";const Z=document.createElement("div");Z.className="bai-bai-wi-mobile-title-cell",Z.append(o);const te=document.createElement("div");te.className="bai-bai-wi-mobile-state-cell",P instanceof HTMLElement&&te.append(P);const ve=document.createElement("div");ve.className="bai-bai-wi-mobile-menu-cell",i instanceof HTMLElement&&ve.append(i);const O=document.createElement("div");O.className="bai-bai-wi-mobile-position-label-cell",O.append(E);const le=document.createElement("div");le.className="bai-bai-wi-mobile-depth-label-cell",le.append(K);const Je=document.createElement("div");Je.className="bai-bai-wi-mobile-label-spacer-cell";const ie=document.createElement("div");ie.className="bai-bai-wi-mobile-position-cell",ie.append(b);const Ze=document.createElement("div");Ze.className="bai-bai-wi-mobile-depth-cell",Ze.append(v);const Fe=document.createElement("div");Fe.className="bai-bai-wi-mobile-enabled-cell",Fe.append(l),I.append(Z,te,ve,O,le,Je,ie,Ze,Fe);const tn=document.createElement("div");tn.className="bai-bai-wi-mobile-footer";const Gt=document.createElement("div");Gt.className="bai-bai-wi-mobile-number-group",Gt.append(y,k);const xt=document.createElement("div");xt.className="bai-bai-wi-mobile-action-group",[c,u,p].forEach(Ct=>{Ct instanceof HTMLElement&&xt.append(Ct)});const wt=document.createElement("div");wt.className="bai-bai-wi-mobile-expand-slot",wt.append(s),tn.append(Gt,xt,wt),V.append(ee,I,tn),t.append(V),e.dataset.baiBaiWorldInfoMobileHeaderLayout="true",e.__baiBaiWorldInfoMobileHeaderLayout={placeholders:B,layout:V,hiddenStash:ee,nodes:X,thinControls:n,body:r,titleStatus:o,entryStateSelector:P,positionLabel:E,depthLabel:K,controls:a,toggle:s,killSwitch:l,positionBlock:b,depthBlock:v,orderBlock:y,probabilityBlock:k}}function tl(e=document){nl(e).filter(t=>t.dataset.baiBaiWorldInfoMobileHeaderLayout==="true").forEach(t=>{U0(t)})}function nl(e=document){return e instanceof HTMLElement&&e.matches("#world_popup_entries_list > .world_entry")?[e]:e instanceof HTMLElement&&e.id==="world_popup_entries_list"?Array.from(e.querySelectorAll(":scope > .world_entry")):Array.from(e.querySelectorAll?.("#world_popup_entries_list > .world_entry")??[])}function U0(e){const t=e?.__baiBaiWorldInfoMobileHeaderLayout;if(!(!(e instanceof HTMLElement)||!t?.layout)){t.titleStatus instanceof HTMLElement&&t.entryStateSelector instanceof HTMLElement&&t.titleStatus.append(t.entryStateSelector),t.positionBlock instanceof HTMLElement&&t.positionLabel instanceof HTMLElement&&t.positionBlock.prepend(t.positionLabel),t.depthBlock instanceof HTMLElement&&t.depthLabel instanceof HTMLElement&&t.depthBlock.prepend(t.depthLabel),t.body instanceof HTMLElement&&t.titleStatus instanceof HTMLElement&&t.controls instanceof HTMLElement&&t.body.append(t.titleStatus,t.controls),t.controls instanceof HTMLElement&&[t.positionBlock,t.depthBlock,t.orderBlock,t.probabilityBlock].forEach(n=>{n instanceof Node&&t.controls.append(n)}),t.thinControls instanceof HTMLElement&&[t.toggle,t.killSwitch,t.body].forEach(n=>{n instanceof Node&&t.thinControls.append(n)});for(const n of t.nodes||[]){const r=t.placeholders?.get(n);n instanceof Node&&r instanceof Comment&&r.parentNode&&r.replaceWith(n)}t.layout.remove(),delete e.__baiBaiWorldInfoMobileHeaderLayout,delete e.dataset.baiBaiWorldInfoMobileHeaderLayout}}function W0(){if(document.getElementById(Pc))return;const e=document.createElement("style");e.id=Pc,e.textContent=`
#world_popup {
    overflow-x: hidden;
}

#WIMultiSelector .bai-bai-wi-global-selector-display {
    align-items: center;
    background-color: var(--SmartThemeBlurTintColor);
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 5px;
    box-sizing: border-box;
    color: var(--SmartThemeBodyColor);
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    min-height: 2.35em;
    max-height: 7.6em;
    min-width: 0;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 4px 6px;
    width: 100%;
}

#WIMultiSelector .bai-bai-wi-global-selector-display.bai-bai-wi-global-selector-open,
#WIMultiSelector .bai-bai-wi-global-selector-display:focus-visible {
    outline: 1px solid color-mix(in srgb, var(--SmartThemeBodyColor) 45%, transparent);
    outline-offset: 1px;
}

#WIMultiSelector .bai-bai-wi-global-selector-placeholder {
    color: var(--SmartThemeBodyColor);
    opacity: 0.62;
    padding: 2px 0;
}

#WIMultiSelector .bai-bai-wi-global-selector-chip {
    align-items: center;
    background-color: color-mix(in srgb, var(--SmartThemeBodyColor) 13%, transparent);
    border: 1px solid color-mix(in srgb, var(--SmartThemeBodyColor) 18%, transparent);
    border-radius: 6px;
    box-sizing: border-box;
    color: var(--SmartThemeBodyColor);
    display: inline-flex;
    gap: 4px;
    line-height: 1.25;
    max-width: 100%;
    min-height: 24px;
    overflow: hidden;
    padding: 3px 5px 3px 8px;
}

#WIMultiSelector .bai-bai-wi-global-selector-chip-label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

#WIMultiSelector .bai-bai-wi-global-selector-chip-remove {
    align-items: center;
    background: transparent;
    border: 0;
    border-radius: 50%;
    color: inherit;
    cursor: pointer;
    display: inline-flex;
    flex: 0 0 auto;
    font-size: 16px;
    height: 20px;
    justify-content: center;
    line-height: 1;
    margin: 0;
    opacity: 0.72;
    padding: 0;
    width: 20px;
}

#WIMultiSelector .bai-bai-wi-global-selector-chip-remove:hover {
    background-color: color-mix(in srgb, var(--SmartThemeBodyColor) 12%, transparent);
    opacity: 1;
}

.${Wt} {
    background-color: var(--SmartThemeBlurTintColor);
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 5px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.26);
    box-sizing: border-box;
    color: var(--SmartThemeBodyColor);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: absolute;
    z-index: 30000;
}

.${Wt} .bai-bai-wi-global-selector-search-box {
    border-bottom: 1px solid color-mix(in srgb, var(--SmartThemeBorderColor) 75%, transparent);
    box-sizing: border-box;
    flex: 0 0 auto;
    padding: 6px 8px;
    position: relative;
}

.${Wt} .bai-bai-wi-global-selector-search {
    background-color: var(--SmartThemeBlurTintColor) !important;
    border: 1px solid var(--SmartThemeBorderColor) !important;
    border-radius: 4px !important;
    box-sizing: border-box !important;
    color: var(--SmartThemeBodyColor) !important;
    display: block !important;
    font: inherit !important;
    margin: 0 !important;
    min-height: 2.3em !important;
    padding: 4px 34px 4px 8px !important;
    width: 100% !important;
}

.${Wt} .bai-bai-wi-global-selector-search::-webkit-search-cancel-button {
    display: none !important;
}

.${Wt} .bai-bai-wi-global-selector-search-clear {
    align-items: center !important;
    background: transparent !important;
    border: 0 !important;
    border-radius: 50% !important;
    box-shadow: none !important;
    box-sizing: border-box !important;
    color: var(--SmartThemeBodyColor) !important;
    cursor: pointer !important;
    display: flex !important;
    flex: 0 0 auto !important;
    font-size: 18px !important;
    height: 28px !important;
    justify-content: center !important;
    line-height: 1 !important;
    margin: 0 !important;
    max-width: none !important;
    min-width: 0 !important;
    opacity: 0.7 !important;
    padding: 0 !important;
    position: absolute !important;
    right: 11px !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    width: 28px !important;
}

.${Wt} .bai-bai-wi-global-selector-search-clear:focus,
.${Wt} .bai-bai-wi-global-selector-search-clear:focus-visible,
.${Wt} .bai-bai-wi-global-selector-search-clear:active {
    background-color: transparent !important;
    box-shadow: none !important;
    outline: none !important;
}

@media (hover: hover) {
    .${Wt} .bai-bai-wi-global-selector-search-clear:hover {
        background-color: color-mix(in srgb, var(--SmartThemeBodyColor) 12%, transparent) !important;
        opacity: 1 !important;
    }
}

.bai-bai-wi-global-selector-options {
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    padding: 4px 0;
    touch-action: pan-y;
}

.bai-bai-wi-global-selector-option {
    color: var(--SmartThemeBodyColor);
    cursor: pointer;
    line-height: 1.25;
    min-height: 34px;
    padding: 8px 10px;
    touch-action: pan-y;
    user-select: none;
}

.bai-bai-wi-global-selector-option.selected {
    background-color: color-mix(in srgb, var(--SmartThemeBodyColor) 14%, transparent);
    font-weight: 600;
}

.bai-bai-wi-global-selector-option:hover {
    background-color: color-mix(in srgb, var(--SmartThemeBodyColor) 18%, transparent);
}

.bai-bai-wi-global-selector-empty {
    color: var(--SmartThemeBodyColor);
    opacity: 0.62;
    padding: 24px 12px;
    text-align: center;
}

.${we} {
    box-sizing: border-box;
    width: 100%;
}

.${we} .bai-bai-wi-search-replace-header {
    align-items: center;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: 8px;
    margin-top: 15px !important;
}

.${we} .bai-bai-wi-search-replace-title {
    font-weight: 700;
    white-space: nowrap;
}

.${we} .bai-bai-wi-search-replace-summary {
    min-width: 0;
    opacity: 0.72;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.${we} .bai-bai-wi-search-replace-body {
    box-sizing: border-box;
    padding: 8px;
}

.${we} .bai-bai-wi-search-replace-form {
    align-items: center;
    display: grid;
    grid-template-columns: minmax(120px, 1fr) minmax(120px, 1fr) auto auto auto auto;
    gap: 8px;
    min-width: 0;
    width: 100%;
}

.${we} .bai-bai-wi-search-replace-find,
.${we} .bai-bai-wi-search-replace-replace {
    box-sizing: border-box;
    margin: 0 !important;
    min-width: 0;
    width: 100%;
}

.${we} .bai-bai-wi-search-replace-case,
.${we} .bai-bai-wi-search-replace-comment {
    align-items: center;
    display: inline-flex;
    gap: 4px;
    margin: 0 !important;
    min-width: max-content;
    white-space: nowrap;
}

.${we} .bai-bai-wi-search-replace-count,
.${we} .bai-bai-wi-search-replace-apply {
    box-sizing: border-box;
    margin: 0 !important;
    min-height: 30px;
    white-space: nowrap;
}

@media (max-width: 600px) {
    .${we} {
        margin: 0;
    }

    .${we} .bai-bai-wi-search-replace-form {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    }

    .${we} .bai-bai-wi-search-replace-case,
    .${we} .bai-bai-wi-search-replace-comment {
        min-height: 28px;
    }

    .${we} .bai-bai-wi-search-replace-count,
    .${we} .bai-bai-wi-search-replace-apply {
        min-width: 0;
        width: 100%;
    }

    #WIMultiSelector .bai-bai-wi-global-selector-display {
        max-height: 6.8em;
        min-height: 2.5em;
    }

    #WIMultiSelector .bai-bai-wi-global-selector-chip {
        min-height: 28px;
        padding: 4px 5px 4px 8px;
    }

    .bai-bai-wi-global-selector-option {
        min-height: 40px;
        padding: 10px 12px;
    }

    #world_popup[data-bai-bai-world-info-popup-layout="true"] > .bai-bai-wi-popup-header {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        column-gap: 8px;
        justify-content: space-between;
        row-gap: 7px;
        margin-top: 20px;
        overflow: hidden;
        width: 100%;
        min-width: 0;
    }

    #world_popup[data-bai-bai-world-info-popup-layout="true"] > .bai-bai-wi-popup-header > * {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }

    #world_popup[data-bai-bai-world-info-popup-layout="true"] > .bai-bai-wi-popup-header > .bai-bai-wi-popup-source-stash {
        display: none !important;
    }

    #world_popup[data-bai-bai-world-info-popup-layout="true"] > .bai-bai-wi-popup-header > #world_editor_select,
    #world_popup[data-bai-bai-world-info-popup-layout="true"] > .bai-bai-wi-popup-header > .select2-container {
        flex: 0 0 100%;
        width: 100% !important;
        min-width: 0;
    }

    #world_popup[data-bai-bai-world-info-popup-layout="true"] > .bai-bai-wi-popup-header > .select2-container .select2-selection--single {
        align-items: center !important;
        background-color: var(--SmartThemeBlurTintColor);
        border-color: var(--SmartThemeBorderColor);
        color: var(--SmartThemeBodyColor);
        display: flex !important;
        min-height: 2.25em;
    }

    #world_popup[data-bai-bai-world-info-popup-layout="true"] > .bai-bai-wi-popup-header > .select2-container .select2-selection__rendered {
        align-items: center;
        color: var(--SmartThemeBodyColor);
        display: flex !important;
        flex: 1 1 auto;
        line-height: normal !important;
        min-width: 0;
        overflow: hidden;
        padding-bottom: 2px !important;
        padding-right: 28px !important;
        padding-top: 2px !important;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    #world_popup[data-bai-bai-world-info-popup-layout="true"] > .bai-bai-wi-popup-header > .select2-container .select2-selection__placeholder {
        color: var(--SmartThemeBodyColor);
        opacity: 0.65;
    }

    #world_popup[data-bai-bai-world-info-popup-layout="true"] > .bai-bai-wi-popup-header > .select2-container .select2-selection__clear {
        display: none !important;
    }

    #world_popup[data-bai-bai-world-info-popup-layout="true"] > .bai-bai-wi-popup-header > .select2-container .select2-selection__arrow {
        align-items: center !important;
        color: var(--SmartThemeBodyColor);
        display: flex !important;
        height: 100% !important;
        justify-content: center !important;
        opacity: 0.62;
        right: 8px !important;
        top: 0 !important;
        width: 18px !important;
    }

    #world_popup[data-bai-bai-world-info-popup-layout="true"] > .bai-bai-wi-popup-header > .select2-container .select2-selection__arrow b {
        border-color: currentColor transparent transparent transparent !important;
        border-style: solid !important;
        border-width: 6px 5px 0 5px !important;
        height: 0 !important;
        left: auto !important;
        margin: 0 !important;
        position: static !important;
        top: auto !important;
        width: 0 !important;
    }

    .${Mt} .select2-search--dropdown {
        padding: 6px 8px;
    }

    .${Mt} .select2-search--dropdown .select2-search__field {
        background-color: var(--SmartThemeBlurTintColor);
        border-color: var(--SmartThemeBorderColor);
        color: var(--SmartThemeBodyColor);
        min-height: 2.25em;
        opacity: 1 !important;
        width: 100%;
    }

    .${Mt} .select2-results__group {
        color: var(--SmartThemeBodyColor);
        font-weight: 700;
        padding: 10px 6px 6px;
    }

    .${Mt} .select2-results__option {
        padding-left: 6px !important;
    }

    .${Mt} .select2-results__option::before,
    .${Mt} .select2-results__option::after {
        content: none !important;
        display: none !important;
    }

    .${Mt} .select2-results__option input[type="checkbox"],
    .${Mt} .select2-results__option .checkbox {
        display: none !important;
    }

    #world_popup[data-bai-bai-world-info-popup-layout="true"] > .bai-bai-wi-popup-header > #world_info_pagination {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        line-height: 1;
    }

    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] > .world_entry_form > .inline-drawer > .inline-drawer-header {
        display: block;
        padding: 0;
    }

    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] {
        margin-top: 15px;
    }

    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] > .world_entry_form.wi-card-entry {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-header {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-header-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 46px 20px;
        grid-template-rows: auto auto auto;
        column-gap: 8px;
        row-gap: 0;
        align-items: center;
        width: 100%;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-header textarea,
    #world_popup_entries_list .bai-bai-wi-mobile-header select,
    #world_popup_entries_list .bai-bai-wi-mobile-header input,
    #world_popup_entries_list .bai-bai-wi-mobile-header .menu_button,
    #world_popup_entries_list .bai-bai-wi-mobile-header .inline-drawer-toggle {
        margin: 0 !important;
        box-sizing: border-box;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-title-cell,
    #world_popup_entries_list .bai-bai-wi-mobile-position-cell {
        min-width: 0;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-title-cell .WIEntryTitleAndStatus,
    #world_popup_entries_list .bai-bai-wi-mobile-title-cell .WIEntryTitleAndStatus > .flex-container,
    #world_popup_entries_list .bai-bai-wi-mobile-position-cell [name="PositionBlock"] {
        width: 100%;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-title-cell textarea[name="comment"],
    #world_popup_entries_list .bai-bai-wi-mobile-state-cell select[name="entryStateSelector"] {
        height: 34px !important;
        min-height: 34px !important;
        box-sizing: border-box;
        padding: 3px 6px !important;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-title-cell textarea[name="comment"] {
        font-size: 14px;
        line-height: 20px !important;
        margin: 0 !important;
        padding-top: 6px !important;
        padding-bottom: 6px !important;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-state-cell select[name="entryStateSelector"] {
        font-size: 0.88em;
        margin: 0 !important;
        padding: 0 !important;
        text-align: left;
        text-align-last: left;
        text-indent: 7px;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-position-cell select[name="position"],
    #world_popup_entries_list .bai-bai-wi-mobile-depth-cell input[name="depth"] {
        height: 28px !important;
        min-height: 28px !important;
        box-sizing: border-box;
        padding: 2px 6px !important;
        font-size: 12px !important;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-title-cell textarea[name="comment"],
    #world_popup_entries_list .bai-bai-wi-mobile-position-cell select[name="position"] {
        width: 100%;
        min-width: 0;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-state-cell select[name="entryStateSelector"],
    #world_popup_entries_list .bai-bai-wi-mobile-depth-cell input[name="depth"] {
        width: 46px !important;
        min-width: 46px !important;
        max-width: 46px !important;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-position-label-cell,
    #world_popup_entries_list .bai-bai-wi-mobile-depth-label-cell {
        font-size: 11px;
        line-height: 11px;
        opacity: 0.72;
        margin: 10px 0 3px 0;
        min-height: 11px;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-position-label-cell label,
    #world_popup_entries_list .bai-bai-wi-mobile-depth-label-cell label {
        display: block;
        margin: 0;
        padding: 0;
        line-height: 11px;
        pointer-events: none;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-position-cell,
    #world_popup_entries_list .bai-bai-wi-mobile-depth-cell {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 0;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-menu-cell,
    #world_popup_entries_list .bai-bai-wi-mobile-enabled-cell {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-enabled-cell {
        align-self: center;
        min-height: 28px;
        padding-bottom: 0;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-menu-cell .drag-handle {
        min-width: 20px;
        text-align: center;
        cursor: grab;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-footer {
        display: flex;
        align-items: end;
        gap: 8px;
        width: 100%;
        margin-top: 10px;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-number-group,
    #world_popup_entries_list .bai-bai-wi-mobile-action-group {
        display: flex;
        align-items: end;
        gap: 6px;
        min-width: 0;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-action-group {
        padding-top: 14px;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-number-group input[name="order"],
    #world_popup_entries_list .bai-bai-wi-mobile-number-group input[name="probability"] {
        height: 28px !important;
        min-height: 28px !important;
        box-sizing: border-box;
        padding: 2px 6px !important;
        font-size: 12px !important;
        width: 66px !important;
        max-width: 66px !important;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-number-group label {
        font-size: 11px;
        line-height: 11px;
        opacity: 0.72;
        display: block;
        margin: 0 0 3px 0;
        padding: 0;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-action-group .menu_button {
        width: 28px !important;
        min-width: 28px !important;
        max-width: 28px !important;
        height: 28px !important;
        min-height: 28px !important;
        max-height: 28px !important;
        aspect-ratio: 1 / 1;
        box-sizing: border-box;
        flex: 0 0 28px;
        flex-shrink: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0 !important;
        margin: 0 !important;
        line-height: 1 !important;
        overflow: hidden;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-expand-slot {
        margin-left: auto;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        align-self: flex-end;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-expand-slot .inline-drawer-toggle {
        width: 28px !important;
        min-width: 28px !important;
        max-width: 28px !important;
        height: 28px !important;
        min-height: 28px !important;
        max-height: 28px !important;
        aspect-ratio: 1 / 1;
        box-sizing: border-box;
        flex: 0 0 28px;
        flex-shrink: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0 !important;
        margin: 0 !important;
        font-size: 21px;
        line-height: 1 !important;
        overflow: hidden;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-expand-slot .inline-drawer-toggle::before {
        position: static !important;
        inset: auto !important;
        display: block !important;
        width: auto !important;
        height: auto !important;
        margin: 0 !important;
        line-height: 1 !important;
        transform: none !important;
        text-align: center !important;
    }

    #world_popup_entries_list .world_entry_edit[data-bai-bai-world-info-mobile-expanded-layout="true"] {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-expanded-main {
        width: 100%;
        display: flex !important;
        flex-direction: column !important;
        align-items: stretch !important;
        gap: 8px;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-expanded-main [name="keywordsAndLogicBlock"] {
        width: 100%;
        display: block;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-expanded-main [name="keywordsAndLogicBlock"] .keyprimary {
        min-width: 0;
        width: 100%;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-expanded-main [name="keywordsAndLogicBlock"] .keyprimary > small {
        text-align: left !important;
        align-self: flex-start;
        margin: 15px 0 2px 2px;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-expanded-main .switch_input_type_icon {
        display: none !important;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-expanded-advanced {
        width: 100%;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-expanded-advanced .keysecondary,
    #world_popup_entries_list .bai-bai-wi-mobile-expanded-advanced .world_entry_form_control {
        width: 100%;
        min-width: 0;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-expanded-advanced select[name="entryLogicType"] {
        width: 100%;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-expanded-main [name="contentAndCharFilterBlock"] {
        width: 100%;
        display: flex;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-content-header {
        display: flex !important;
        align-items: center;
        gap: 6px;
        width: 100%;
        margin-top: 6px;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-content-title-group {
        justify-content: flex-start;
        min-width: 0;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-content-meta {
        text-align: left;
        opacity: 0.85;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-content-maximize {
        margin-left: auto;
        flex: 0 0 auto;
        margin-top: 0;
        margin-right: 0;
        margin-bottom: 0;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-expanded-main textarea[name="content"] {
        width: 100%;
        min-height: 292px;
        min-height: calc(14lh + 12px);
    }

    #world_popup_entries_list .bai-bai-wi-mobile-expanded-extra {
        width: 100%;
        border-top: 1px solid var(--SmartThemeBorderColor);
        padding-top: 4px;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-expanded-extra-toggle {
        min-height: 30px;
        padding: 4px 0;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-expanded-extra-content {
        width: 100%;
        gap: 8px;
    }

    #world_popup_entries_list .bai-bai-wi-mobile-expanded-extra-content > .flex-container,
    #world_popup_entries_list .bai-bai-wi-mobile-expanded-extra-content [name="perEntryOverridesBlock"] {
        width: 100%;
        flex-flow: column;
        align-items: stretch;
        gap: 6px;
    }

    #world_popup[data-bai-bai-world-info-popup-layout="true"] {
        display: block !important;
        flex-direction: initial !important;
        flex-wrap: initial !important;
        align-items: initial !important;
        justify-content: initial !important;
        gap: initial !important;
        row-gap: initial !important;
    }

    #world_popup[data-bai-bai-world-info-popup-layout="true"] > .bai-bai-wi-popup-header {
        display: flex !important;
        order: initial !important;
    }

    #world_popup[data-bai-bai-world-info-popup-layout="true"] > .bai-bai-wi-popup-header > * {
        order: initial !important;
    }

    #world_popup[data-bai-bai-world-info-popup-layout="true"] > .bai-bai-wi-popup-header > .bai-bai-wi-popup-source-stash {
        display: none !important;
    }

    #world_popup[data-bai-bai-world-info-popup-layout="true"] > #world_popup_entries_list {
        display: block !important;
        order: initial !important;
        width: 100% !important;
    }

    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] {
        min-height: 0 !important;
    }

    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] > .world_entry_form.wi-card-entry {
        position: relative !important;
        padding-top: 10px !important;
        padding-bottom: 10px !important;
    }

    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-hidden-stash {
        display: none !important;
    }

    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-header,
    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-header-grid,
    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-footer,
    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-title-cell,
    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-state-cell,
    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-menu-cell,
    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-position-cell,
    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-depth-cell,
    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-enabled-cell,
    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-number-group,
    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-action-group,
    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-expand-slot {
        position: static !important;
        inset: auto !important;
        top: auto !important;
        right: auto !important;
        bottom: auto !important;
        left: auto !important;
        z-index: auto !important;
    }

    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-header .drag-handle,
    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-header .killSwitch,
    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-header .move_entry_button,
    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-header .duplicate_entry_button,
    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-header .delete_entry_button,
    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-header .inline-drawer-toggle {
        position: static !important;
        inset: auto !important;
        top: auto !important;
        right: auto !important;
        bottom: auto !important;
        left: auto !important;
        z-index: auto !important;
    }

    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-expand-slot .inline-drawer-toggle::before {
        position: static !important;
        inset: auto !important;
        display: block !important;
        width: auto !important;
        height: auto !important;
        margin: 0 !important;
        line-height: 1 !important;
        transform: none !important;
        text-align: center !important;
    }

    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-title-cell .WIEntryTitleAndStatus.flex-container.flex1.alignitemscenter,
    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-title-cell .WIEntryTitleAndStatus > .flex-container,
    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-position-cell [name="PositionBlock"],
    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-depth-cell .world_entry_form_control,
    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-number-group .world_entry_form_control,
    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-number-group .probabilityContainer {
        min-height: 0 !important;
        margin-right: 0 !important;
    }

    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-position-cell .world_entry_form_control[name="PositionBlock"] {
        width: 100% !important;
        min-width: 0 !important;
        max-width: none !important;
    }

    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .world_entry_edit[data-bai-bai-world-info-mobile-expanded-layout="true"] {
        display: flex !important;
        flex-direction: column !important;
        gap: 8px !important;
    }

    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .world_entry_edit[data-bai-bai-world-info-mobile-expanded-layout="true"] > .bai-bai-wi-mobile-expanded-main {
        display: flex !important;
    }

    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .world_entry_edit[data-bai-bai-world-info-mobile-expanded-layout="true"] > .bai-bai-wi-mobile-expanded-extra {
        display: flex !important;
    }

    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-expanded-main [name="keywordsAndLogicBlock"] {
        display: block !important;
    }

    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-expanded-main [name="contentAndCharFilterBlock"],
    #world_popup_entries_list > .world_entry[data-bai-bai-world-info-mobile-header-layout="true"] .bai-bai-wi-mobile-expanded-main [name="contentAndCharFilterBlock"] .world_entry_form_control {
        display: flex !important;
        flex-direction: column !important;
        align-items: stretch !important;
    }
}
`,document.head.append(e)}function K0(){document.getElementById(Pc)?.remove()}function Wd(e=J()){if(e.app){try{e.app.unmount()}catch(t){console.debug(`${ut} Failed to unmount World Info Vue list`,t)}e.app=null,e.root=null}}async function j0(e=J()){return e.modulePromise||(e.modulePromise=ht(()=>import("./vue.runtime.esm-bundler.GI5_MaGP.chunk.js"),__vite__mapDeps([0,1]))),e.modulePromise}function q0(){const e=document.getElementById("world_refresh"),t=document.getElementById("WorldInfo");!e||!t||getComputedStyle(t).display==="none"||setTimeout(()=>e.click(),0)}function Y0(){const e=globalThis.jQuery?.fn?.append;e?.__baiBaiToolkitWorldInfoCharacterFilterAppendPatched&&(globalThis.jQuery.fn.append=e.__baiBaiToolkitOriginalAppend),ce[TM]=!1}function Q0(e,t){ce.worldInfoDeferredCharacterFilterOptions??=new WeakMap;const n=ce.worldInfoDeferredCharacterFilterOptions.get(e)??[];n.push(t),ce.worldInfoDeferredCharacterFilterOptions.set(e,n),e.dataset[Ey]="true"}function X0(e,t){if(!(e instanceof HTMLSelectElement)||e.name!=="characterFilter"||typeof MutationObserver!="function"||t.characterFilterOptionObserver)return;const n=new MutationObserver(r=>{if(!_e.worldInfoDrawerOptimizationEnabled||e.dataset[aa]!=="true")return;const o=[];for(const a of r)for(const i of a.addedNodes)J0(i,o);o.forEach(a=>{e.contains(a)&&a.remove(),Q0(e,a)})});n.observe(e,{childList:!0,subtree:!0}),t.characterFilterOptionObserver=n}function J0(e,t){if(e instanceof HTMLOptionElement){t.push(e);return}e instanceof HTMLOptGroupElement&&e.querySelectorAll("option").forEach(n=>{n instanceof HTMLOptionElement&&t.push(n)})}function Z0(e){const t=ce.worldInfoDeferredCharacterFilterOptions?.get(e);if(!t?.length)return;const n=document.createDocumentFragment();for(const r of t)n.append(r);ce.worldInfoDeferredCharacterFilterOptions.delete(e),delete e.dataset[Ey],e.append(n)}function eO(e){if(!_e.worldInfoDrawerOptimizationEnabled)return!1;const t=e[0];return typeof t=="object"&&t!==null&&!Array.isArray(t)}function gf(e){return!(e instanceof HTMLSelectElement)||!e.matches(kM)||$(e).data("select2")?!1:e.dataset[aa]!=="true"}function tO(e,t,n){e.dataset[aa]="true",e.classList.add("bai-bai-toolkit-lazy-select2");const r={args:[...t],originalSelect2:n},o=a=>{zy(e,{open:a?.type==="pointerdown"||a?.type==="mousedown"})};r.activate=o,X0(e,r),ce.worldInfoLazySelect2State??=new WeakMap,ce.worldInfoLazySelect2State.set(e,r),e.addEventListener("pointerdown",o,{capture:!0}),e.addEventListener("mousedown",o,{capture:!0}),e.addEventListener("focus",o,{capture:!0})}function zy(e,{open:t=!1}={}){const n=e instanceof Element?[e]:Array.from(e.querySelectorAll?.(`select[data-${Nd(aa)}="true"]`)??[]);for(const r of n){const o=ce.worldInfoLazySelect2State?.get(r);o&&(r.removeEventListener("pointerdown",o.activate,!0),r.removeEventListener("mousedown",o.activate,!0),r.removeEventListener("focus",o.activate,!0),o.characterFilterOptionObserver?.disconnect(),o.characterFilterOptionObserver=null,delete r.dataset[aa],r.classList.remove("bai-bai-toolkit-lazy-select2"),ce.worldInfoLazySelect2State.delete(r),Z0(r),o.originalSelect2.apply($(r),o.args),t&&$(r).data("select2")&&setTimeout(()=>{try{$(r).select2("open")}catch{}},0))}}function nO(){if(document.getElementById(lf))return;const e=document.createElement("style");e.id=lf,e.textContent=`
#world_popup_entries_list > .world_entry > .world_entry_form > .inline-drawer > .inline-drawer-content.bai-bai-wi-drawer-motion > .world_entry_edit {
    transform-origin: top center;
    transition: opacity 140ms ease, transform 140ms ease;
    will-change: opacity, transform;
}

#world_popup_entries_list > .world_entry > .world_entry_form > .inline-drawer > .inline-drawer-content.bai-bai-wi-drawer-enter > .world_entry_edit,
#world_popup_entries_list > .world_entry > .world_entry_form > .inline-drawer > .inline-drawer-content.bai-bai-wi-drawer-leave > .world_entry_edit {
    opacity: 0;
    transform: translateY(-8px) scaleY(0.985);
}

#world_popup_entries_list > .world_entry > .world_entry_form > .inline-drawer > .inline-drawer-content.bai-bai-wi-drawer-open > .world_entry_edit {
    opacity: 1;
    transform: translateY(0) scaleY(1);
}

#world_popup_entries_list > .world_entry > .world_entry_form > .inline-drawer > .inline-drawer-content.bai-bai-wi-drawer-leave {
    pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
    #world_popup_entries_list > .world_entry > .world_entry_form > .inline-drawer > .inline-drawer-content.bai-bai-wi-drawer-motion > .world_entry_edit {
        transition-duration: 1ms;
    }
}
`,document.head.append(e)}function rO(e){if(!(_e.worldInfoDrawerOptimizationEnabled||_e.worldInfoListOptimizationEnabled))return;const n=e.target instanceof Element?e.target:null,r=n?.closest(wM);if(!n||!r||!r.contains(n)||n.classList.contains("text_pole"))return;const o=r.closest(CM),a=o?.querySelector(":scope > .inline-drawer-header .inline-drawer-icon"),i=o?.querySelector(":scope > .inline-drawer-content");if(!o||!a||!i)return;e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation();const s=!aO(i);oO(a,s),_e.worldInfoListOptimizationEnabled?iO(o,i,s):sO(o,i,s)}function oO(e,t){e.classList.toggle("down",!t),e.classList.toggle("up",t),e.classList.toggle("fa-circle-chevron-down",!t),e.classList.toggle("fa-circle-chevron-up",t)}function aO(e){const t=e?.__baiBaiWorldInfoDrawerAnimation;return t?.phase==="opening"||t?.phase==="expanded"?!0:t?.phase==="closing"||t?.phase==="collapsed"?!1:e instanceof HTMLElement&&getComputedStyle(e).display!=="none"}function iO(e,t,n){if(!(e instanceof HTMLElement)||!(t instanceof HTMLElement))return;const r=lO(t);Kd(r),n&&!t.querySelector(":scope > .world_entry_edit")&&$(e).trigger("inline-drawer-toggle"),t.style.height="",t.style.display="block",t.classList.add("bai-bai-wi-drawer-motion"),r.phase=n?"opening":"closing",n?(t.classList.remove("bai-bai-wi-drawer-open","bai-bai-wi-drawer-leave"),t.classList.add("bai-bai-wi-drawer-enter")):(t.classList.remove("bai-bai-wi-drawer-enter"),t.classList.add("bai-bai-wi-drawer-open")),r.frameId=requestAnimationFrame(()=>{r.frameId=null,r.phase===(n?"opening":"closing")&&(n?(t.classList.remove("bai-bai-wi-drawer-enter"),t.classList.add("bai-bai-wi-drawer-open")):(t.classList.remove("bai-bai-wi-drawer-open"),t.classList.add("bai-bai-wi-drawer-leave")),cO(t,r,n))})}function sO(e,t,n){if(!(e instanceof HTMLElement)||!(t instanceof HTMLElement))return;const r=t.__baiBaiWorldInfoDrawerAnimation;Kd(r),n&&!t.querySelector(":scope > .world_entry_edit")&&$(e).trigger("inline-drawer-toggle"),t.classList.remove("bai-bai-wi-drawer-motion","bai-bai-wi-drawer-enter","bai-bai-wi-drawer-open","bai-bai-wi-drawer-leave"),t.style.display=n?"block":"none",t.style.height="",r&&(r.phase=n?"expanded":"collapsed"),Vy(t)}function lO(e){return e.__baiBaiWorldInfoDrawerAnimation||(e.__baiBaiWorldInfoDrawerAnimation={phase:getComputedStyle(e).display==="none"?"collapsed":"expanded",frameId:null,fallbackTimer:null,transitionHandler:null,content:null}),e.__baiBaiWorldInfoDrawerAnimation}function Kd(e){e&&(e.frameId!==null&&(cancelAnimationFrame(e.frameId),e.frameId=null),e.fallbackTimer!==null&&(clearTimeout(e.fallbackTimer),e.fallbackTimer=null),e.transitionHandler&&e.content instanceof HTMLElement&&e.content.removeEventListener("transitionend",e.transitionHandler),e.transitionHandler=null,e.content=null)}function cO(e,t,n){const r=n?"opening":"closing",o=()=>{t.phase===r&&(Kd(t),uO(e,t,n))},a=i=>{!(i.target instanceof HTMLElement)||!i.target.matches(".world_entry_edit")||!["opacity","transform"].includes(i.propertyName)||o()};t.content=e,t.transitionHandler=a,t.fallbackTimer=setTimeout(o,220),e.addEventListener("transitionend",a)}function uO(e,t,n){n?(t.phase="expanded",e.style.display="block",e.classList.remove("bai-bai-wi-drawer-motion","bai-bai-wi-drawer-enter","bai-bai-wi-drawer-open","bai-bai-wi-drawer-leave")):(t.phase="collapsed",e.style.display="none",e.classList.remove("bai-bai-wi-drawer-motion","bai-bai-wi-drawer-enter","bai-bai-wi-drawer-open","bai-bai-wi-drawer-leave")),e.style.height="",Vy(e)}function Vy(e){CSS.supports("field-sizing","content")||e.querySelectorAll("textarea.autoSetHeight").forEach(t=>{bi(t)})}function Uy(){return(!ce.worldInfoPageOptimization||typeof ce.worldInfoPageOptimization!="object")&&(ce.worldInfoPageOptimization={}),ce.worldInfoPageOptimization}let bf={},hf={},Et="[FloorDirectory]";const _f="bai_bai_toolkit_floor_directory_button",dO="bai_bai_toolkit_floor_directory_wand_container",yf="bai_bai_toolkit_floor_directory_style",A="bai-bai-floor-overlay",Ll="__baiBaiToolkitFloorDirectoryInstalled",Ef=48,Va=140,Ua=30;function pO(e={}){bf=e.settings??bf,hf=e.extensionState??hf,Et=e.logPrefix??Et}function Dc(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function mO(e){return String(e??"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function fO(e){return String(e??"").replace(/<think[ing]*>[\s\S]*?<\/think[ing]*>/gmi,"").trim()}function Sf(e){return fO(typeof e?.mes=="string"?e.mes:"")}function gO(e){return Dc(e).replace(/\n/g,"<br>")}function Il(e,t){const n=Dc(e);if(!t)return n;const r=Dc(t),o=new RegExp(mO(r),"gi");return n.replace(o,a=>`<mark class="bai-bai-floor-hit">${a}</mark>`)}function Rl(e){globalThis.toastr?.success?globalThis.toastr.success(e):console.info(`${Et} ${e}`)}function Ar(e){globalThis.toastr?.error?globalThis.toastr.error(e):console.error(`${Et} ${e}`)}function bO(e,t){let n=null;return function(...o){n&&clearTimeout(n),n=setTimeout(()=>{n=null,e.apply(this,o)},t)}}function Ml(e,t){if(!e)return"";if(!t)return e.length>Va?`${e.slice(0,Va)}…`:e;const r=e.toLowerCase().indexOf(t.toLowerCase());if(r<0)return e.length>Va?`${e.slice(0,Va)}…`:e;const o=Math.max(0,r-Ef),a=Math.min(e.length,r+t.length+Ef),i=o>0?"…":"",s=a<e.length?"…":"";return`${i}${e.slice(o,a)}${s}`}function vf(){return!!window.matchMedia?.("(max-width: 600px)")?.matches}function Wa(){try{return globalThis.SillyTavern?.getContext?.()??null}catch(e){return console.debug(`${Et} getContext failed`,e),null}}function Qn(e){return Array.isArray(e?.chat)?e.chat:[]}function hO(e,t){return t?.name?String(t.name):t?.is_user?String(e?.name1??"我"):String(e?.name2??"角色")}async function _O(e,t,n){const o=Qn(e)[t];if(!o)throw new Error("楼层不存在");const a=String(n??"");o.mes=a,o.swipe_id!==void 0&&Array.isArray(o.swipes)&&o.swipes[o.swipe_id]!==void 0&&(o.swipes[o.swipe_id]=a),e?.chatMetadata&&typeof e.chatMetadata=="object"&&(e.chatMetadata.tainted=!0);const i=e?.eventTypes??e?.event_types,s=e?.eventSource?.emit;if(typeof s=="function"&&i)try{i.MESSAGE_EDITED&&await s.call(e.eventSource,i.MESSAGE_EDITED,t)}catch(c){console.debug(`${Et} MESSAGE_EDITED emit failed`,c)}if(typeof e?.updateMessageBlock=="function"&&document.querySelector(`#chat .mes[mesid="${t}"]`))try{e.updateMessageBlock(t,o)}catch(c){console.debug(`${Et} updateMessageBlock failed`,c)}if(typeof s=="function"&&i)try{i.MESSAGE_UPDATED&&await s.call(e.eventSource,i.MESSAGE_UPDATED,t)}catch(c){console.debug(`${Et} MESSAGE_UPDATED emit failed`,c)}const l=e?.saveChat;if(typeof l!="function")throw new Error("无法保存：当前酒馆版本未暴露保存接口");await l()}async function yO(e,t,n){const r=`将删除第 ${t} 层及之后的楼层，删除后无法撤销。确定继续吗？`;return typeof e?.callGenericPopup=="function"&&e?.POPUP_TYPE&&"CONFIRM"in e.POPUP_TYPE?!!await e.callGenericPopup(r,e.POPUP_TYPE.CONFIRM):!!globalThis.confirm?.(r)}async function EO(e,t,n={}){const r=Qn(e);if(!r[t])throw new Error("楼层不存在");const o=r.length-t;if(o<1)return 0;const a=e?.executeSlashCommandsWithOptions;if(typeof a!="function")throw new Error("无法删除：当前酒馆版本未暴露斜杠命令执行接口");if(!await yO(e,t))return 0;typeof n.onConfirmed=="function"&&n.onConfirmed(o);const s=await a(`/del ${o}`,{handleExecutionErrors:!0,source:"floor-directory"});if(s?.isError)throw new Error(s.errorMessage||"斜杠删除命令执行失败");return o}async function SO(e,t){const r=Qn(e)[t];if(!r)throw new Error("楼层不存在");const o=e?.executeSlashCommandsWithOptions;if(typeof o!="function")throw new Error("当前酒馆版本未暴露斜杠命令执行接口");const a=!r.is_system,i=a?`/hide ${t}`:`/unhide ${t}`,s=await o(i,{handleExecutionErrors:!0,source:"floor-directory"});if(s?.isError)throw new Error(s.errorMessage||"斜杠命令执行失败");return a}function vO(){if(window[Ll])return;xO();let e=0;const t=()=>{const n=document.getElementById("extensionsMenu");if(!n){e+=1,e<=40&&setTimeout(t,500);return}if(document.getElementById(_f)){window[Ll]=!0;return}const r=document.createElement("div");r.id=dO,r.className="extension_container";const o=document.createElement("div");o.id=_f,o.className="list-group-item flex-container flexGap5",o.tabIndex=0,o.setAttribute("role","button");const a=document.createElement("div");a.className="fa-solid fa-building extensionsMenuExtensionButton";const i=document.createElement("span");i.textContent="楼层管理器",o.append(a,i),r.appendChild(o),n.appendChild(r);const s=()=>TO();o.addEventListener("click",s),o.addEventListener("keydown",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),s())}),window[Ll]=!0,console.debug(`${Et} Floor directory button installed`)};t()}function TO(){document.querySelector(`.${A}`)?.remove();const e=Wa();let t=Qn(e);const n=document.createElement("div");n.className=A;const r=document.createElement("div");r.className="bai-bai-floor-dialog",r.tabIndex=-1;const o=document.createElement("div");o.className="bai-bai-floor-head";const a=document.createElement("div");a.className="bai-bai-floor-title",a.textContent="楼层管理器";const i=document.createElement("div");i.className="bai-bai-floor-count",i.textContent=t.length?`共 ${t.length} 层`:"暂无楼层";const s=document.createElement("button");s.type="button",s.className="bai-bai-floor-close",s.setAttribute("aria-label","关闭"),s.innerHTML='<i class="fa-solid fa-xmark"></i>',o.append(a,i,s);const l=document.createElement("div");l.className="bai-bai-floor-bar";const c=document.createElement("i");c.className="fa-solid fa-magnifying-glass bai-bai-floor-bar-icon";const u=document.createElement("input");u.type="text",u.className="bai-bai-floor-input",u.placeholder="输入楼层号 / 关键词…",u.setAttribute("aria-label","输入楼层号或关键词");const p=document.createElement("button");p.type="button",p.className="bai-bai-floor-clear",p.setAttribute("aria-label","清空"),p.innerHTML='<i class="fa-solid fa-xmark"></i>',p.disabled=!0;const b=document.createElement("div");b.className="bai-bai-floor-controls";const v=document.createElement("div");v.className="bai-bai-floor-filter",v.setAttribute("role","group"),v.setAttribute("aria-label","按发言者筛选");const y=[{key:"all",label:"All"},{key:"bot",label:"Char"},{key:"user",label:"User"},{key:"hidden",label:"Hide"}],k=new Map;for(const G of y){const F=document.createElement("button");F.type="button",F.className="bai-bai-floor-filter-btn",F.textContent=G.label,G.key==="all"&&F.classList.add("bai-bai-floor-filter-active"),F.addEventListener("click",()=>{if(I.filter!==G.key){I.filter=G.key;for(const[W,q]of k)q.classList.toggle("bai-bai-floor-filter-active",W===G.key);wt(u.value)}}),k.set(G.key,F),v.appendChild(F)}const P=document.createElement("button");P.type="button",P.className="bai-bai-floor-close bai-bai-floor-mobile-only",P.setAttribute("aria-label","关闭"),P.innerHTML='<i class="fa-solid fa-xmark"></i>',l.append(c,u,p),b.append(v);const E=document.createElement("div");E.className="bai-bai-floor-list";const K=document.createElement("div");K.className="bai-bai-floor-pager";const X=document.createElement("div");X.className="bai-bai-floor-mobile-top-row",X.append(b,K);const B=document.createElement("div");B.className="bai-bai-floor-mobile-bottom-row",B.append(l,P),r.append(o,B,X,E),n.appendChild(r),document.body.appendChild(n);const V=()=>{document.removeEventListener("keydown",ee,!0),n.remove()},ee=G=>{G.key==="Escape"&&(G.preventDefault(),G.stopPropagation(),V())};s.addEventListener("click",V),P.addEventListener("click",V),n.addEventListener("mousedown",G=>{G.target===n&&V()}),document.addEventListener("keydown",ee,!0);const I={expanded:new Set,entries:[],totalItems:0,loadPageEntries:null,keyword:"",page:1,filter:"all",reversePageOrder:!1},Z=G=>{E.innerHTML="",K.innerHTML="";const F=document.createElement("div");F.className="bai-bai-floor-empty",F.textContent=G,E.appendChild(F)},te=()=>{const{keyword:G,totalItems:F}=I;if(!F){const et=I.filter==="user"?"User ":I.filter==="bot"?"Char ":I.filter==="hidden"?"隐藏":"",Te=G?`没有${et}楼层匹配「${G}」`:et?`当前没有${et}楼层`:"当前没有可显示的楼层";Z(Te);return}const W=Math.max(1,Math.ceil(F/Ua));I.page=Math.min(Math.max(1,I.page),W);const Ae=((I.reversePageOrder?W-I.page+1:I.page)-1)*Ua,Ft=typeof I.loadPageEntries=="function"?I.loadPageEntries(Ae,Ua):I.entries.slice(Ae,Ae+Ua);E.innerHTML="",E.scrollTop=0;const Ke=document.createDocumentFragment();for(const et of Ft)Ke.appendChild(et?.type==="header"?ie(et):Ze(et,G));E.appendChild(Ke),O(W)},ve=G=>{G!==I.page&&(I.page=G,te())},O=G=>{if(K.innerHTML="",G<=1)return;const F=document.createElement("button");F.type="button",F.className="bai-bai-floor-page-btn",F.innerHTML='<i class="fa-solid fa-chevron-left"></i>',F.setAttribute("aria-label","上一页"),F.disabled=I.page<=1,F.addEventListener("click",()=>ve(I.page-1));const W=document.createElement("span");W.className="bai-bai-floor-page-info",W.textContent=`${I.page} / ${G}`;const q=document.createElement("button");q.type="button",q.className="bai-bai-floor-page-btn",q.innerHTML='<i class="fa-solid fa-chevron-right"></i>',q.setAttribute("aria-label","下一页"),q.disabled=I.page>=G,q.addEventListener("click",()=>ve(I.page+1)),K.append(F,W,q)},le=(G,F,W=1,q={})=>{I.entries=G,I.totalItems=G.length,I.loadPageEntries=(Ae,Ft)=>G.slice(Ae,Ae+Ft),I.keyword=F,I.page=W,I.reversePageOrder=!!q.reversePageOrder,te()},Je=(G,F,W,q=1,Ae={})=>{I.entries=[],I.totalItems=Math.max(0,Number(G)||0),I.loadPageEntries=F,I.keyword=W,I.page=q,I.reversePageOrder=!!Ae.reversePageOrder,te()},ie=G=>{const F=document.createElement("div");return F.className="bai-bai-floor-section",F.textContent=G.label,F},Ze=(G,F)=>{const{index:W}=G;let q=t[W]??G.message,Ae=Sf(q);const Ft=!!q?.is_user,Ke=document.createElement("div");Ke.className="bai-bai-floor-row",Ke.classList.add(Ft?"bai-bai-floor-row-user":"bai-bai-floor-row-bot"),I.expanded.has(W)&&Ke.classList.add("bai-bai-floor-row-open");const et=document.createElement("div");et.className="bai-bai-floor-rail";const Te=document.createElement("div");Te.className="bai-bai-floor-num",Te.textContent=String(W),et.appendChild(Te);const kt=document.createElement("div");kt.className="bai-bai-floor-main";const nn=document.createElement("div");nn.className="bai-bai-floor-meta";const ft=document.createElement("span");ft.className="bai-bai-floor-speaker",ft.textContent=hO(e,q);const vn=document.createElement("span");vn.className="bai-bai-floor-tag",vn.textContent=Ft?"User":"Char";const ze=document.createElement("span");ze.className="bai-bai-floor-ghost",ze.title="已隐藏楼层（不参与上下文）",ze.setAttribute("aria-label","已隐藏楼层"),ze.innerHTML='<i class="fa-solid fa-ghost"></i>',nn.append(ft,vn,ze);const je=document.createElement("div");je.className="bai-bai-floor-snippet",je.innerHTML=Il(Ml(Ae,F),F);const rn=xe=>{q=xe??q,Ae=Sf(q),je.innerHTML=Il(Ml(Ae,F),F)},Cr=document.createElement("div");Cr.className="bai-bai-floor-body";const Me=document.createElement("div");Me.className="bai-bai-floor-detail mes_text";const on=document.createElement("div");on.className="bai-bai-floor-actions";const an=document.createElement("button");an.type="button",an.className="bai-bai-floor-action",an.innerHTML='<i class="fa-solid fa-pen-to-square"></i><span>编辑</span>';const zt=document.createElement("button");zt.type="button",zt.className="bai-bai-floor-action";const Vt=document.createElement("button");Vt.type="button",Vt.className="bai-bai-floor-action bai-bai-floor-action-danger",Vt.innerHTML='<i class="fa-solid fa-trash-can"></i><span>删除</span>',Cr.append(Me,on);const Gp=()=>{const xe=!!q?.is_system;Ke.classList.toggle("bai-bai-floor-row-hidden",xe),ze.style.display=xe?"":"none",zt.innerHTML=xe?'<i class="fa-solid fa-eye"></i><span>显示</span>':'<i class="fa-solid fa-eye-slash"></i><span>隐藏</span>'};Gp();const Ia=()=>{Me.classList.remove("bai-bai-floor-detail-editing"),Me.style.height="",Me.innerHTML=gO(Ae),on.innerHTML="",on.append(zt,Vt,an)},ZS=()=>{const xe=Me.getBoundingClientRect(),wo=getComputedStyle(Me),sn=["paddingTop","paddingBottom","borderTopWidth","borderBottomWidth"].reduce((At,pl)=>At+(parseFloat(wo[pl])||0),0),Un=Math.max(0,Math.floor(xe.height-sn));Me.classList.add("bai-bai-floor-detail-editing"),Me.style.height=`${Math.ceil(xe.height)}px`;const qe=document.createElement("textarea");qe.className="bai-bai-floor-editor",qe.value=typeof q?.mes=="string"?q.mes:"",qe.spellcheck=!1,qe.style.minHeight="0",qe.style.height=`${Un}px`,qe.style.maxHeight=`${Un}px`;const Oe=document.createElement("button");Oe.type="button",Oe.className="bai-bai-floor-action bai-bai-floor-action-primary",Oe.innerHTML='<i class="fa-solid fa-check"></i><span>保存</span>';const gt=document.createElement("button");gt.type="button",gt.className="bai-bai-floor-action",gt.innerHTML='<i class="fa-solid fa-xmark"></i><span>取消</span>',Me.innerHTML="",Me.appendChild(qe),on.innerHTML="",on.append(gt,Oe),requestAnimationFrame(()=>{window.matchMedia?.("(pointer: coarse)")?.matches||qe.focus({preventScroll:!0})}),gt.addEventListener("click",Ia);const Fp=async()=>{const At=Wa();if(!At){Ar("无法读取聊天上下文，保存失败");return}Oe.disabled=!0,gt.disabled=!0;const pl=Oe.innerHTML;Oe.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i><span>保存中</span>';const tv=q,nv=Ae,rv={...q??{},mes:qe.value};rn(rv);try{await _O(At,W,qe.value);const kr=Qn(At);kr.length&&(t=kr),t[W]?rn(t[W]):(q={...q??{},mes:qe.value},rn(q)),Rl(`已保存第 ${W} 层`),Ia()}catch(kr){q=tv,Ae=nv,je.innerHTML=Il(Ml(Ae,F),F),console.error(`${Et} save floor edit failed`,kr),Oe.disabled=!1,gt.disabled=!1,Oe.innerHTML=pl,Ar(`保存失败：${kr?.message??kr}`)}};Oe.addEventListener("click",Fp),qe.addEventListener("keydown",At=>{(At.ctrlKey||At.metaKey)&&At.key==="Enter"&&(At.preventDefault(),Fp())})};an.addEventListener("click",ZS),zt.addEventListener("click",async()=>{const xe=Wa();if(!xe){Ar("无法读取聊天上下文，操作失败");return}zt.disabled=!0;const wo=zt.innerHTML;zt.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i><span>处理中</span>';try{const sn=await SO(xe,W),Un=Qn(xe);Un.length&&(t=Un),t[W]&&rn(t[W]),Gp(),Rl(sn?`已隐藏第 ${W} 层`:`已显示第 ${W} 层`)}catch(sn){console.error(`${Et} toggle floor hidden failed`,sn),zt.innerHTML=wo,Ar(`操作失败：${sn?.message??sn}`)}finally{zt.disabled=!1}}),Vt.addEventListener("click",async()=>{const xe=Wa();if(!xe){Ar("无法读取聊天上下文，删除失败");return}an.disabled=!0,Vt.disabled=!0;const wo=Vt.innerHTML;Vt.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i><span>删除中</span>';const sn=t,Un=new Set(I.expanded);let qe=!1;try{const Oe=await EO(xe,W,{onConfirmed:()=>{qe=!0,t=t.slice(0,W),I.expanded=new Set([...I.expanded].filter(gt=>gt<W)),wt(u.value)}});if(Oe>0){const gt=Qn(xe);gt.length<=W&&(t=gt),Rl(`已删除第 ${W} 层及之后 ${Oe} 层`)}}catch(Oe){qe&&(t=sn,I.expanded=Un,wt(u.value)),console.error(`${Et} delete floor range failed`,Oe),Ar(`删除失败：${Oe?.message??Oe}`)}finally{an.disabled=!1,Vt.disabled=!1,Vt.innerHTML=wo}}),I.expanded.has(W)&&(Ke.classList.add("bai-bai-floor-row-open"),Ia()),kt.append(nn,je,Cr),Ke.append(et,kt);const ev=()=>{!I.expanded.has(W)?(I.expanded.add(W),Ke.classList.add("bai-bai-floor-row-open"),Ia()):(I.expanded.delete(W),Me.innerHTML="",on.innerHTML="",Ke.classList.remove("bai-bai-floor-row-open"))};return Ke.addEventListener("click",xe=>{xe.target instanceof Element&&xe.target.closest(".bai-bai-floor-detail, .bai-bai-floor-action, .bai-bai-floor-action *")||ev()}),Ke},Fe=G=>I.filter==="user"?!!G?.is_user:I.filter==="bot"?!G?.is_user:I.filter==="hidden"?!!G?.is_system:!0,tn=(G,F)=>{const W=G[F];return{index:F,message:W}},Gt=G=>{const F=[];for(let W=0;W<G.length;W+=1){const q=G[W];Fe(q)&&F.push(W)}return F},xt=(G,F)=>(typeof G?.mes=="string"?G.mes:"").toLowerCase().includes(F),wt=G=>{const F=String(G??"").trim(),W=e,q=t;if(!W||!q.length){i.textContent="暂无楼层",Z("当前没有打开的聊天");return}i.textContent=`共 ${q.length} 层`;const Ae=(Te,kt)=>{const nn=vf(),ft=Te.length;Je(ft,(ze,je)=>{const rn=Math.min(ft,ze+je),Cr=[];for(let Me=ze;Me<rn;Me+=1){const on=nn?Me:ft-1-Me,an=Te[on];Cr.push(tn(q,an))}return Cr},kt,1,{reversePageOrder:nn}),nn&&ft&&requestAnimationFrame(()=>{E.scrollTop=E.scrollHeight})};if(/^\d+$/.test(F)){const Te=Number(F),kt=Te>=0&&Te<q.length,nn=F.toLowerCase(),ft=[];for(let je=0;je<q.length;je+=1){if(kt&&je===Te)continue;const rn=q[je];Fe(rn)&&xt(rn,nn)&&ft.push(je)}const vn=vf()?ft:ft.slice().reverse(),ze=[];if(kt?(I.expanded=new Set([Te]),ze.push({type:"header",label:`定位 · 楼层 #${Te}`}),ze.push(tn(q,Te))):I.expanded=new Set,vn.length){ze.push({type:"header",label:`文本包含「${F}」的楼层（${vn.length}）`});for(const je of vn)ze.push(tn(q,je))}if(!ze.length){Z(`楼层号 ${F} 超出范围（共 ${q.length} 层，0 ~ ${q.length-1}），且没有楼层文本包含「${F}」`);return}le(ze,F,1),requestAnimationFrame(()=>{E.querySelector(".bai-bai-floor-row-open")?.scrollIntoView({block:"nearest"})});return}const Ft=F;if(!Ft){Ae(Gt(q),"");return}const Ke=Ft.toLowerCase(),et=[];for(let Te=0;Te<q.length;Te+=1){const kt=q[Te];Fe(kt)&&xt(kt,Ke)&&et.push(Te)}Ae(et,Ft)},Ct=()=>{p.disabled=u.value.length===0},La=bO(wt,180);u.addEventListener("input",()=>{Ct(),La(u.value)}),u.addEventListener("keydown",G=>{G.key==="Enter"&&(G.preventDefault(),wt(u.value))}),p.addEventListener("click",()=>{u.value="",Ct(),wt(""),window.matchMedia?.("(pointer: coarse)")?.matches||u.focus({preventScroll:!0})}),wt(""),Ct(),requestAnimationFrame(()=>{const G=window.matchMedia?.("(pointer: coarse)")?.matches,F=window.matchMedia?.("(max-width: 600px)")?.matches;if(G||F)return;const W=r.getBoundingClientRect().height;W>0&&(r.style.minHeight=`${Math.ceil(W)}px`)}),requestAnimationFrame(()=>{r.focus({preventScroll:!0}),window.matchMedia?.("(pointer: coarse)")?.matches||u.focus({preventScroll:!0})})}function xO(){let e=document.getElementById(yf);e||(e=document.createElement("style"),e.id=yf,document.head.appendChild(e)),e.textContent=wO()}function wO(){return`
.${A} {
    position: fixed;
    inset: 0;
    /* 显式视口尺寸兜底：若某祖先建立了包含块（transform/filter/contain 等），
       inset:0 会相对该块解析而可能塌成 0；用 vw/vh 强制占满视口。 */
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    z-index: 10010;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: rgba(0, 0, 0, 0.45);
    animation: baiBaiFloorFade 0.16s ease;
}

.${A} .bai-bai-floor-dialog {
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

.${A} .bai-bai-floor-head {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--SmartThemeBorderColor);
}

.${A} .bai-bai-floor-title {
    font-size: 1.05rem;
    font-weight: 600;
    letter-spacing: 0.02em;
}

.${A} .bai-bai-floor-count {
    margin-left: auto;
    font-size: 0.8rem;
    font-variant-numeric: tabular-nums;
    color: var(--SmartThemeEmColor);
}

.${A} .bai-bai-floor-close {
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

.${A} .bai-bai-floor-close:hover {
    opacity: 1;
    background: rgba(127, 127, 127, 0.12);
}

/* 仅移动端可见的元素（如底部操作行里的关闭键），桌面端隐藏。 */
.${A} .bai-bai-floor-mobile-only {
    display: none;
}

.${A} .bai-bai-floor-mobile-top-row,
.${A} .bai-bai-floor-mobile-bottom-row {
    display: contents;
}

.${A} .bai-bai-floor-head { order: 0; }
.${A} .bai-bai-floor-bar { order: 1; }
.${A} .bai-bai-floor-controls { order: 2; }
.${A} .bai-bai-floor-list { order: 3; }
.${A} .bai-bai-floor-pager { order: 4; }
.${A} .bai-bai-floor-mobile-bottom-row > .bai-bai-floor-mobile-only { order: 5; }

.${A} .bai-bai-floor-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 14px 16px 0;
    padding: 0 12px;
    /* 固定高度，子元素（含继承主题样式的按钮）不得撑高命令栏。
       命令栏处在列向 flex 容器里，必须 flex:0 0 auto 锁死：否则默认
       flex-shrink:1 会在空间紧张时把它压扁（高度过低），而清空按钮出现后
       其内容最小高度又顶回 42px（被“拉高”）——两个现象同源。 */
    flex: 0 0 auto;
    height: 42px;
    box-sizing: border-box;
    overflow: hidden;
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 10px;
    background: var(--SmartThemeChatTintColor);
}

.${A} .bai-bai-floor-bar:focus-within {
    border-color: var(--SmartThemeQuoteColor);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--SmartThemeQuoteColor) 35%, transparent);
}

.${A} .bai-bai-floor-bar-icon {
    flex: 0 0 auto;
    color: var(--SmartThemeQuoteColor);
    opacity: 0.85;
}

.${A} .bai-bai-floor-input {
    flex: 1 1 auto;
    min-width: 0;
    /* 不再用 height:100%，避免被子元素的撑高反向带高；按内容单行居中即可 */
    height: auto;
    margin: 0;
    padding: 0;
    color: var(--SmartThemeBodyColor);
    /* 强制透明 + !important：部分主题给所有 input/text_pole 加了带 !important
       的底色，会在命令栏里显出一块异色矩形，必须用 !important 才能压过。
       透明后始终透出命令栏的背景，二者同色。 */
    background: transparent none !important;
    border: none !important;
    box-shadow: none !important;
    outline: none;
    font-size: 0.95rem;
    font-family: inherit;
    line-height: normal;
}

.${A} .bai-bai-floor-input::placeholder {
    color: var(--SmartThemeEmColor);
}

.${A} .bai-bai-floor-clear {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    /* 锁死尺寸并清掉主题给 button 的 min-height/line-height，否则会撑高命令栏 */
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    min-width: 0;
    min-height: 0;
    margin: 0;
    padding: 0;
    line-height: 1;
    color: var(--SmartThemeEmColor);
    background: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.75;
    transition: opacity 0.12s ease, background 0.12s ease;
}

.${A} .bai-bai-floor-clear:hover {
    opacity: 1;
    background: rgba(127, 127, 127, 0.18);
}

.${A} .bai-bai-floor-clear:disabled,
.${A} .bai-bai-floor-clear:disabled:hover {
    opacity: 0.35;
    cursor: default;
    background: transparent;
}

.${A} .bai-bai-floor-controls {
    display: flex;
    /* 显式锁定方向：部分主题会在通用选择器上设 direction:rtl 或
       flex-direction:row-reverse，导致筛选跑到左边。这里强制 LTR + 正向。 */
    direction: ltr;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    margin: 8px 16px 10px;
}

/* 分段控件：一条浅色轨道，内嵌可滑动的圆角分段，激活段浮起为强调色胶囊 */
.${A} .bai-bai-floor-filter {
    flex: 0 0 auto;
    /* 桌面端把筛选钉在最右侧；移动端会在媒体查询里改成左对齐。 */
    margin-left: auto;
    display: inline-flex;
    gap: 2px;
    padding: 3px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--SmartThemeBorderColor) 22%, transparent);
}

.${A} .bai-bai-floor-filter-btn {
    padding: 4px 14px;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    font-family: inherit;
    color: var(--SmartThemeEmColor);
    background: transparent;
    border: none;
    border-radius: 999px;
    cursor: pointer;
    transition: color 0.14s ease, background 0.14s ease, box-shadow 0.14s ease;
}

.${A} .bai-bai-floor-filter-btn:hover {
    color: var(--SmartThemeBodyColor);
}

.${A} .bai-bai-floor-filter-active,
.${A} .bai-bai-floor-filter-active:hover {
    color: var(--SmartThemeBlurTintColor);
    background: var(--SmartThemeQuoteColor);
    box-shadow: 0 1px 3px var(--SmartThemeShadowColor, rgba(0, 0, 0, 0.25));
}

.${A} .bai-bai-floor-list {
    flex: 1 1 auto;
    overflow-y: auto;
    padding: 4px 12px 14px;
    -webkit-overflow-scrolling: touch;
}

.${A} .bai-bai-floor-empty {
    padding: 36px 16px;
    text-align: center;
    color: var(--SmartThemeEmColor);
    font-size: 0.88rem;
    line-height: 1.6;
}

/* 分节标题行：数字模式下分隔「定位楼层」与「文本命中」两段结果。 */
.${A} .bai-bai-floor-section {
    padding: 10px 6px 4px;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--SmartThemeQuoteColor);
}
.${A} .bai-bai-floor-section + .bai-bai-floor-row {
    border-top: none;
}

.${A} .bai-bai-floor-row {
    display: flex;
    gap: 12px;
    padding: 10px 6px;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.12s ease;
}

.${A} .bai-bai-floor-row + .bai-bai-floor-row {
    border-top: 1px solid color-mix(in srgb, var(--SmartThemeBorderColor) 60%, transparent);
}

.${A} .bai-bai-floor-row:hover {
    background: rgba(127, 127, 127, 0.08);
}

.${A} .bai-bai-floor-row-open {
    background: color-mix(in srgb, var(--SmartThemeQuoteColor) 10%, transparent);
}

/* 楼层轨：竖直强调条 + 表格数字（电梯楼层指示器）。
   Char / User 仅用消息的 tint 色给竖线着色，不再填充浅色背景块。 */
.${A} .bai-bai-floor-rail {
    position: relative;
    flex: 0 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    min-width: 46px;
    padding: 4px 6px 4px 10px;
}

/* 竖线用伪元素画：细一点（2px）并留出上下内缩，是一根直的小竖条。 */
.${A} .bai-bai-floor-rail::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 4px;
    bottom: 4px;
    width: 2px;
    background: var(--SmartThemeBotMesBlurTintColor);
}

.${A} .bai-bai-floor-row-user .bai-bai-floor-rail::before {
    background: var(--SmartThemeUserMesBlurTintColor);
}

.${A} .bai-bai-floor-num {
    font-family: "SF Mono", "Roboto Mono", "DejaVu Sans Mono", Consolas, ui-monospace, monospace;
    font-variant-numeric: tabular-nums;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.25;
    color: var(--SmartThemeBodyColor);
}

.${A} .bai-bai-floor-main {
    flex: 1 1 auto;
    min-width: 0;
}

.${A} .bai-bai-floor-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 3px;
}

.${A} .bai-bai-floor-speaker {
    font-size: 0.82rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.${A} .bai-bai-floor-tag {
    flex: 0 0 auto;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: capitalize;
    padding: 1px 8px;
    border-radius: 999px;
    color: var(--SmartThemeBodyColor);
    background: color-mix(in srgb, var(--SmartThemeBotMesBlurTintColor) 50%, transparent);
}

.${A} .bai-bai-floor-row-user .bai-bai-floor-tag {
    background: color-mix(in srgb, var(--SmartThemeUserMesBlurTintColor) 50%, transparent);
}

/* 隐藏楼层标识：身份标签右边的小幽灵。 */
.${A} .bai-bai-floor-ghost {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    font-size: 0.8rem;
    line-height: 1;
    color: var(--SmartThemeEmColor);
    opacity: 0.75;
}

/* 隐藏楼层整行淡化，扫一眼即可区分。 */
.${A} .bai-bai-floor-row-hidden .bai-bai-floor-num,
.${A} .bai-bai-floor-row-hidden .bai-bai-floor-speaker,
.${A} .bai-bai-floor-row-hidden .bai-bai-floor-snippet {
    opacity: 0.55;
}

.${A} .bai-bai-floor-row-hidden .bai-bai-floor-rail::before {
    background: var(--SmartThemeEmColor);
    opacity: 0.5;
}

.${A} .bai-bai-floor-snippet {
    font-size: 0.85rem;
    line-height: 1.45;
    color: var(--SmartThemeEmColor);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.${A} .bai-bai-floor-row-open .bai-bai-floor-snippet {
    display: none;
}

.${A} .bai-bai-floor-hit {
    background: color-mix(in srgb, var(--SmartThemeQuoteColor) 32%, transparent);
    color: var(--SmartThemeBodyColor);
    border-radius: 3px;
    padding: 0 1px;
}

.${A} .bai-bai-floor-body {
    display: none;
    cursor: auto;
}

.${A} .bai-bai-floor-row-open .bai-bai-floor-body {
    display: block;
}

.${A} .bai-bai-floor-detail {
    box-sizing: border-box;
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

.${A} .bai-bai-floor-detail-editing {
    max-height: none;
    overflow: hidden;
}

.${A} .bai-bai-floor-detail img {
    max-width: 100%;
    height: auto;
}

.${A} .bai-bai-floor-editor {
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
    overflow-y: auto;
}

.${A} .bai-bai-floor-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 8px;
}

.${A} .bai-bai-floor-action {
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

.${A} .bai-bai-floor-action:hover {
    background: rgba(127, 127, 127, 0.12);
}

.${A} .bai-bai-floor-action:disabled {
    opacity: 0.6;
    cursor: default;
}

.${A} .bai-bai-floor-action-primary {
    color: var(--SmartThemeQuoteColor);
    border-color: var(--SmartThemeQuoteColor);
}

.${A} .bai-bai-floor-action-primary:hover {
    background: color-mix(in srgb, var(--SmartThemeQuoteColor) 14%, transparent);
}

.${A} .bai-bai-floor-action-danger {
    color: #d85c5c;
    border-color: #d85c5c;
}

.${A} .bai-bai-floor-action-danger:hover {
    background: rgba(216, 92, 92, 0.14);
}

.${A} .bai-bai-floor-pager {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 0 16px;
}

.${A} .bai-bai-floor-pager:not(:empty) {
    padding: 10px 16px 14px;
    border-top: 1px solid var(--SmartThemeBorderColor);
}

.${A} .bai-bai-floor-page-btn {
    width: 34px;
    height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--SmartThemeBodyColor);
    background: transparent;
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.12s ease, opacity 0.12s ease;
}

.${A} .bai-bai-floor-page-btn:hover:not(:disabled) {
    background: rgba(127, 127, 127, 0.12);
}

.${A} .bai-bai-floor-page-btn:disabled {
    opacity: 0.4;
    cursor: default;
}

.${A} .bai-bai-floor-page-info {
    font-size: 0.85rem;
    font-variant-numeric: tabular-nums;
    color: var(--SmartThemeEmColor);
    min-width: 56px;
    text-align: center;
}

.${A} .bai-bai-floor-close:focus-visible,
.${A} .bai-bai-floor-clear:focus-visible,
.${A} .bai-bai-floor-action:focus-visible,
.${A} .bai-bai-floor-page-btn:focus-visible,
.${A} .bai-bai-floor-filter-btn:focus-visible,
.${A} .bai-bai-floor-row:focus-visible {
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
    .${A} {
        padding: 0;
        align-items: flex-end;
    }
    .${A} .bai-bai-floor-dialog {
        width: 100%;
        /* 移动端占满视口高度。用视口单位而非 height:100%，后者依赖祖先链有确定高度，
           在部分移动布局下会塌成 0（表现为窗口看不见）。 */
        height: 100vh;
        height: 100dvh;
        max-height: 100vh;
        max-height: 100dvh;
        border-radius: 0;
        border: none;
    }

    /* 移动端贴底显示，操作区下移到底部更易单手触达：
       标题 → 列表 → 搜索/关闭 → 筛选/分页。 */
    .${A} .bai-bai-floor-head {
        order: 0;
    }
    .${A} .bai-bai-floor-list {
        order: 1;
        min-height: 0;
    }
    .${A} .bai-bai-floor-mobile-top-row {
        order: 3;
        flex: 0 0 auto;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
    }
    .${A} .bai-bai-floor-mobile-bottom-row {
        order: 2;
        flex: 0 0 auto;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 16px 0;
        border-top: 1px solid var(--SmartThemeBorderColor);
    }

    /* 顶部关闭键移动端隐藏，由底部操作行的关闭键代替。 */
    .${A} .bai-bai-floor-head .bai-bai-floor-close {
        display: none;
    }
    .${A} .bai-bai-floor-mobile-only {
        display: inline-flex;
    }

    /* 底部最后一行：左侧身份筛选，右侧分页。 */
    .${A} .bai-bai-floor-controls {
        margin: 0;
        padding: 10px 0 10px 16px;
        flex-wrap: nowrap;
        justify-content: flex-start;
        min-width: 0;
    }
    .${A} .bai-bai-floor-filter {
        margin-left: 0;
    }

    .${A} .bai-bai-floor-pager {
        flex: 0 0 auto;
        justify-content: flex-end;
        gap: 8px;
        padding: 0;
    }
    .${A} .bai-bai-floor-pager:not(:empty) {
        padding: 8px 16px 8px 0;
        border-top: none;
    }

    /* 底部上一行：搜索框占满剩余宽度，关闭按钮固定在右侧。 */
    .${A} .bai-bai-floor-bar {
        flex: 1 1 auto;
        min-width: 0;
        height: 36px;
        margin: 0;
        padding: 0 10px;
        border-radius: 8px;
    }
    .${A} .bai-bai-floor-input {
        font-size: 0.9rem;
    }
    .${A} .bai-bai-floor-mobile-bottom-row > .bai-bai-floor-mobile-only {
        flex: 0 0 auto;
        width: 36px;
        height: 36px;
        margin: 0;
    }
}

@media (prefers-reduced-motion: reduce) {
    .${A},
    .${A} .bai-bai-floor-dialog {
        animation: none;
    }
}
`}const Wy="0.30.0",T="[柏宝箱]",$c=IB(),Ky=RB(),re="baiBaiToolkit",Ka="__baiBaiToolkitExtensionInstalled",CO="__baiBaiToolkitFastSettingsBootstrapFetchPatched",kO="__baiBaiToolkitFastCharacterListFetchPatched",AO="__baibaokuEarlyBridge",ja="__baiBaiToolkitLazyThemeChangeGuard",Tf="__baiBaiToolkitReloadGuard",jy="/api/plugins/baibaoku/v1/status",qy="/api/plugins/baibaoku/v1/fast-config",PO="/api/plugins/baibaoku/v1/chats/fast-get",LO="/api/plugins/baibaoku/v1/themes/get",xf="0.4.3",wf="0.4.4",Cf="bai_bai_toolkit_theme_loading_style",jd="bai-bai-toolkit-theme-loading-host",Nc="bai-bai-toolkit-theme-loading-overlay",Yy="bai-bai-toolkit-theme-loading-overlay-fixed",Hc="bai-bai-toolkit-theme-loading-spinner",Vr=new Map,qd="#theme-manager-panel",IO="themeManager_backgroundBindings",RO=`${qd} .theme-item[data-value]`,MO="#bg_menu_content .bg_example, #bg_custom_content .bg_example",ur="/api/plugins/baibaoku/v1/chats/save-generate",OO=`${ur}/discard`,BO=3e3,DO=5*6e4,Uo="__baiBaiToolkitSaveGenerateFetchPatched",$O="/api/backends/chat-completions/generate",NO="/api/chats/save",HO="x-baibaoku-save-generate-status",GO="x-baibaoku-save-generate-job-id",FO=1e3,ka=30*6e4,zO=250,VO=1500,Qy=12e4,kf=8,UO="bai_bai_toolkit_save_generate_seen",Af="bai_bai_toolkit_save_generate_display_style",ae="bai-bai-save-generate-display",Xy="#send_but, #option_regenerate",WO=1500,KO=3e3,jO=100,Ol="saveGenerateDefaultEnabledMigrated",qO=6e4,YO=1e4,QO=1500,Jy=1e3,Bl="__baiBaiToolkitSaveRequestGzipFetchPatched",Dl="__baiBaiToolkitFastChatGetFetchPatched",Pf="__baiBaiToolkitFastChatGetJQueryTriggerGuardPatched",$l="__baiBaiToolkitPerformanceTraceFetchPatched",ii="__baiBaiToolkitTranslateMessageUpdatedOptimized",Qi="__baiBaiToolkitCustomCssInputOptimized",Qe="__baiBaiToolkitCustomCssCodeMirrorEditor",Lf="__baiBaiToolkitPageRestoreSelectionGuard",Gc="bai_bai_toolkit_description_codemirror_editor_style",Fc="bai_bai_toolkit_custom_css_codemirror_editor_style",er="__baiBaiToolkitDescriptionCodeMirrorEditor",Nl="__baiBaiToolkitDescriptionCodeMirrorModules",Zy=["main_text_color","italics_text_color","underline_text_color","quote_text_color","blur_tint_color","chat_tint_color","user_mes_blur_tint_color","bot_mes_blur_tint_color","shadow_color","border_color","blur_strength","custom_css","shadow_width","font_scale","fast_ui_mode","waifuMode","chat_display","toastr_position","avatar_style","noShadows","chat_width","timer_enabled","timestamps_enabled","timestamp_model_icon","message_token_count_enabled","mesIDDisplay_enabled","hideChatAvatars_enabled","expand_message_actions","enableZenSliders","enableLabMode","hotswap_enabled","bogus_folders","zoomed_avatar_magnification","reduced_motion","compact_input_area","show_swipe_num_all_messages","click_to_edit","media_display"],XO=[{key:"main_text_color",selector:"#main-text-color-picker",variable:"--SmartThemeBodyColor"},{key:"italics_text_color",selector:"#italics-color-picker",variable:"--SmartThemeEmColor"},{key:"underline_text_color",selector:"#underline-color-picker",variable:"--SmartThemeUnderlineColor"},{key:"quote_text_color",selector:"#quote-color-picker",variable:"--SmartThemeQuoteColor"},{key:"blur_tint_color",selector:"#blur-tint-color-picker",variable:"--SmartThemeBlurTintColor",metaTheme:!0},{key:"chat_tint_color",selector:"#chat-tint-color-picker",variable:"--SmartThemeChatTintColor"},{key:"user_mes_blur_tint_color",selector:"#user-mes-blur-tint-color-picker",variable:"--SmartThemeUserMesBlurTintColor"},{key:"bot_mes_blur_tint_color",selector:"#bot-mes-blur-tint-color-picker",variable:"--SmartThemeBotMesBlurTintColor"},{key:"shadow_color",selector:"#shadow-color-picker",variable:"--SmartThemeShadowColor"},{key:"border_color",selector:"#border-color-picker",variable:"--SmartThemeBorderColor"}],Xi="__baiBaiToolkitRegexQuickOperationHandler",Ji="__baiBaiToolkitRegexQuickOperationObserver",Zi="__baiBaiToolkitRegexQuickOperationImportHandler",es="__baiBaiToolkitRegexPendingChangesLifecycleHandler",ts="__baiBaiToolkitRegexVueManagerClickHandler",ns="__baiBaiToolkitRegexVueScopedContextHandler",rs="__baiBaiToolkitRegexVuePresetRenameHandler",os="__baiBaiToolkitRegexPresetGroupPortabilityHandler",Or="__baiBaiToolkitRegexVueNativeRenderGuard",If="bai_bai_toolkit_regex_vue_manager_root",zc="bai_bai_toolkit_regex_vue_manager_style",qa="__baiBaiToolkitCharacterListAvatarLazyLoad",Vc="bai_bai_toolkit_character_list_avatar_lazy_load_style",Ce="__ungrouped",$t="__pending_assignment",eE="baibaiToolkit.regexGroups",as=1,is="bai-bai-regex-drop-target",tE="bai-bai-regex-drag-indicator",si="bai-bai-regex-vue-dragging",Rf=180,JO=260,Mf=4,Of=10,nE=40,rE=6,Uc=350,Yd="#description_textarea",Qd="bai-bai-toolkit-description-source-hidden",oE="bai_bai_description_codemirror_editor",ZO="bai-bai-toolkit-description-codemirror-editor",eB=250,Xd=12e3,Nt="customCSS",ss='textarea.maximized_textarea[data-for="customCSS"]',ls="custom-style",cs="#CustomCSS-textAreaBlock",Jd="#UI-Customization",R="bai_bai_custom_css_codemirror_editor",tB="bai-bai-toolkit-custom-css-codemirror-editor",Zd="bai-bai-toolkit-custom-css-source-hidden",us="bai-bai-toolkit-custom-css-host",ep="bai-bai-toolkit-custom-css-layout",oe="bai-bai-toolkit-custom-css-theme-light",ne="bai-bai-toolkit-custom-css-theme-dark",li="bai-bai-toolkit-custom-css-maximized",nB=["#vce-btn-refresh-new","#vce-btn-save-new","#native-btn-save-new","#native-btn-scroll-new","#native-css-search-new","#native-search-dropdown-new .vce-search-item-new"].join(", "),rB=.45,oB=[80,320,1e3],aB=1500,ds="__baiBaiToolkitThemeApplyReflowGuardPatched",aE=["scrollHeight","clientHeight"],iB=[0,80,200,500],Bf="baiBaiToolkitCharacterSearchOptimization",bo="#regex_container",Wc="#rm_extensions_block",sB=".regex-script-label",lB="#saved_regex_scripts, #saved_scoped_scripts, #saved_preset_scripts",cB=120,uB=1e3,qn="#rm_print_characters_block",dB=`${qn} .character_select .avatar img`,Br="#user_avatar_block",pB=`${Br} .avatar-container .avatar img`,Dr=".welcomePanel .recentChat",mB=`${Dr} .avatar img`,fB=`${qn}, ${Br}`,gB="#chat",rl=[dB,pB,mB].join(", "),iE=[".character_select .avatar img",".avatar-container .avatar img",`${Dr} .avatar img`].join(", "),Ur="baiBaiToolkitLazyAvatarSrc",sE="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",tr="bai-bai-toolkit-lazy-avatar-pending",Wo="bai-bai-toolkit-lazy-avatar-loaded",nr="bai-bai-toolkit-lazy-avatar-shell",bB="800px 0px 1200px 0px",hB=new Set(["/api/chats/save","/api/chats/group/save"]),_B=new Set(["/api/chats/get","/api/chats/group/get"]),yB=new Set(["/api/chats/save","/api/chats/group/save"]),EB=2*1024*1024,SB=5,lE=["#send_but","#option_regenerate","#option_continue","#option_impersonate","#option_delete_mes","#mes_continue","#mes_impersonate","#dialogue_del_mes_ok","#chat .mes_edit","#chat .mes_edit_done","#chat .mes_delete","#chat .del_mes","#chat .swipe_left","#chat .swipe_right","#show_more_messages"].join(", "),vB=new Set(["/api/chats/get","/api/chats/group/get","/api/chats/save","/api/chats/group/save","/api/chats/search","/api/characters/chats"]),TB=2e3,Df=700,tp=16,cE=8,uE=250,xB=new Set([w.CHAT_LOADED,w.CHAT_CHANGED,w.MORE_MESSAGES_LOADED,w.MESSAGE_SENT,w.USER_MESSAGE_RENDERED,w.MESSAGE_RECEIVED,w.CHARACTER_MESSAGE_RENDERED,w.MESSAGE_EDITED,w.MESSAGE_UPDATED,w.MESSAGE_DELETED,w.MESSAGE_SWIPED,w.MESSAGE_SWIPE_DELETED,w.MESSAGE_FILE_EMBEDDED,w.MESSAGE_REASONING_EDITED,w.MESSAGE_REASONING_DELETED,w.GENERATION_STARTED,w.GENERATION_AFTER_COMMANDS,w.GENERATE_BEFORE_COMBINE_PROMPTS,w.GENERATE_AFTER_COMBINE_PROMPTS,w.GENERATE_AFTER_DATA,w.CHAT_COMPLETION_PROMPT_READY,w.GENERATION_STOPPED,w.GENERATION_ENDED,w.IMPERSONATE_READY].filter(Boolean)),wB=["#send_but","#option_regenerate","#option_continue","#option_impersonate","#mes_continue","#mes_impersonate","#chat .mes_edit","#chat .mes_edit_done","#chat .mes_edit_cancel","#chat .swipe_left","#chat .swipe_right","#chat .mes_translate","#show_more_messages"].join(", "),Kc={updatePromptOnAvailableEnabled:!0,resizeGuardEnabled:!0,descriptionCodeMirrorEditorEnabled:!1,customCssInputOptimizationEnabled:!0,customCssShadowPropertyEnabled:!0,worldInfoDrawerOptimizationEnabled:!0,worldInfoPageOptimizationEnabled:!0,worldInfoListOptimizationEnabled:!0,worldInfoSearchReplaceEnabled:!0,characterSearchInputOptimizationEnabled:!0,baibaokuSettingsAccelerationEnabled:!0,baibaokuLazyThemeLoadingEnabled:!0,fastCharacterListEnabled:!0,recentChatListAccelerationEnabled:!0,progressiveChatLoadingEnabled:!1,saveGenerateEnabled:!0,tokenizerBulkCountEnabled:!0,chatKeyboardScanReductionEnabled:!0,extensionManifestBundleEnabled:!0,presetAutoBackupEnabled:!0,characterListAvatarLazyLoadEnabled:!0,fastChatListEnabled:!0,welcomeRecentChatDirectOpenEnabled:!0,saveRequestGzipEnabled:!0,translateMessageUpdatedOptimizationEnabled:!0,longChatDomRenderOptimizationEnabled:!0,reduceLoadedFloorsEnabled:!0,messageCompletionScrollToMiddleEnabled:!0,chatListScrollOptimizationEnabled:!0,chatListAutoClearEnabled:!0,chatLossMitigationEnabled:!0,mobileAutoKeyboardSuppressionEnabled:!0,mobileMessageEditScrollGuardEnabled:!0,presetScrollOptimizationEnabled:!0,presetDragOptimizationEnabled:!0,presetVueDragLocked:!1,presetMobileWholeRowDragEnabled:!0,presetSwitchOptimizationEnabled:!0,presetToggleOptimizationEnabled:!0,presetGroupingEnabled:!0,presetGroupingEditButtonInMenuEnabled:!1,presetInterfaceCollapseEnabled:!0,presetPromptCodeMirrorEditorEnabled:!1,presetAutoSaveAfterPromptEditEnabled:!1,regexQuickOperationOptimizationEnabled:!0,regexListGroups:{},chatDeleteEditFlowOptimizationEnabled:!0,messageEditBottomActionsEnabled:!0,messageDoubleClickEditEnabled:!1,messageTripleClickEditEnabled:!0,messageCompletionSoundEnabled:!1,messageCompletionSoundSource:"builtin",messageCompletionSoundBuiltinId:"guoke-bell",messageCompletionSoundUrl:"",messageCompletionSoundVolume:.8,messageCompletionSoundLocalFileName:"",messageCompletionSoundKeepAliveEnabled:!0},$f=["presetScrollOptimizationEnabled","presetDragOptimizationEnabled","presetMobileWholeRowDragEnabled","presetToggleOptimizationEnabled"],CB=["textareaScrollOptimizationEnabled","descriptionShadowEditorEnabled","descriptionInputBubbleOptimizationEnabled","descriptionInputIdleSaveEnabled","imeCommitOptimizationEnabled","mobileChatEntryKeyboardSuppressionEnabled","fastSettingsBootstrapEnabled","fastCharacterListEnabled"],g={...Kc},h=kB();TT({settings:g,extensionState:h,logPrefix:T,recordLongDomRefresh:PD});gk({settings:g,extensionState:h,logPrefix:T,loadCodeMirrorModules:Pp,codeMirrorHistoryMaxLength:Xd,saveSettings:ye});dM({settings:g,extensionState:h,logPrefix:T,saveSettings:ye});bk();pO({settings:g,extensionState:h,logPrefix:T});MB();YD();h.installed||(h.installed=!0,ww(),Cw(),console.debug(`${T} Installed`));lF();cF();d1();TD();uF();QH();AB();Cb();TE();jQuery(i$);jQuery(()=>vO());function kB(){return(!globalThis[Ka]||typeof globalThis[Ka]!="object")&&(globalThis[Ka]={}),globalThis[Ka]}function AB(){if(h[Lf])return;const e=t=>{t?.type==="visibilitychange"&&document.visibilityState!=="hidden"||PB()};document.addEventListener("visibilitychange",e,!0),window.addEventListener("pagehide",e,!0),h[Lf]={handler:e}}function PB(){const e=typeof document.getSelection=="function"?document.getSelection():null;if(!e||e.rangeCount===0)return;const t=Nf(e.anchorNode),n=Nf(e.focusNode);if(!(Hf(t)||Hf(n)))try{e.removeAllRanges()}catch{}}function Nf(e){return e instanceof Element?e:e?.parentElement instanceof Element?e.parentElement:null}function Hf(e){return e instanceof HTMLElement?!!(e.isContentEditable||e.closest('input, textarea, select, [contenteditable=""], [contenteditable="true"]')):!1}async function LB(){return Kp.length>0?Kp:(console.debug(`${T} Bundled settings template unavailable; falling back to SillyTavern template loader.`),da($c,"settings"))}function IB(){const e="/scripts/extensions/",t=new URL(import.meta.url),n=decodeURIComponent(t.pathname.replace(/\\/g,"/")),r=n.indexOf(e);return r===-1?"third-party/SillyTavern-Mobile-Resize-Guard":n.slice(r+e.length).replace(/\/(?:dist\/)?index\.js$/i,"")}function RB(){return $c.split("/").pop()||$c}function MB(){(!j[re]||typeof j[re]!="object")&&(j[re]={});let e=!1,t=!1;typeof j[re].baibaokuSettingsAccelerationEnabled!="boolean"&&typeof j[re].fastSettingsBootstrapEnabled=="boolean"&&(j[re].baibaokuSettingsAccelerationEnabled=j[re].fastSettingsBootstrapEnabled),j[re].progressiveChatLoadingEnabled===!0&&(j[re].progressiveChatLoadingEnabled=!1,e=!0);for(const o of CB)Object.prototype.hasOwnProperty.call(j[re],o)&&(delete j[re][o],e=!0);j[re][Ol]!==!0&&(j[re].saveGenerateEnabled===!1&&(j[re].saveGenerateEnabled=!0),j[re][Ol]=!0,t=!0);for(const[o,a]of Object.entries(Kc))typeof j[re][o]!=typeof a&&(j[re][o]=a);Object.assign(g,Kc,j[re]),delete g[Ol];const n=uD(),r=cD();(e||t||n||r)&&Yt()}function en(){const e=globalThis[AO];return e&&typeof e=="object"?e:null}function OB(){return(!globalThis[ja]||typeof globalThis[ja]!="object")&&(globalThis[ja]={installed:!1,handler:null,pending:null,replaying:!1,currentThemeName:"",loadingToken:null,loadingHost:null,loadingOverlay:null}),globalThis[ja]}async function BB(e){const t=await fetch(LO,{method:"POST",cache:"no-store",headers:me(),body:JSON.stringify({name:e})}),n=await t.json().catch(()=>null);if(!t.ok){const o=new Error(n?.message||`Theme request failed: ${t.status}`);throw o.status=t.status,o.payload=n,o}const r=n?.data;if(!r||typeof r!="object"||Array.isArray(r))throw new Error("Theme response payload is invalid");return r}async function DB(e){const t=String(e||"").trim();if(t&&Vr.has(t))return Vr.get(t);const n=await BB(e);return t&&Vr.set(t,n),n}function $B(e){const t=String(e||"").trim();if(!t||Vr.has(t))return!1;const n={name:t};for(const r of Zy)Y[r]!==void 0&&(n[r]=Y[r]);return Vr.set(t,n),!0}function Gf(){for(const{key:e,selector:t,variable:n,metaTheme:r}of XO){const o=Y[e];if(o!==void 0){if(t&&$(t).attr("color",o),n&&document.documentElement.style.setProperty(n,String(o)),e==="main_text_color"){const a=String(o).match(/\(([^)]+)\)/),i=a?a[1].split(",").map(s=>s.trim()):[];i.length>=4&&(document.documentElement.style.setProperty("--SmartThemeCheckboxBgColorR",i[0]),document.documentElement.style.setProperty("--SmartThemeCheckboxBgColorG",i[1]),document.documentElement.style.setProperty("--SmartThemeCheckboxBgColorB",i[2]),document.documentElement.style.setProperty("--SmartThemeCheckboxBgColorA",i[3]))}r&&document.querySelector("meta[name=theme-color]")?.setAttribute("content",String(o))}}}function Ff(){$("#chat_display").val(Y.chat_display),$(`#chat_display option[value=${Y.chat_display}]`).prop("selected",!0),$("#toastr_position").val(Y.toastr_position),$(`#toastr_position option[value="${Y.toastr_position}"]`).prop("selected",!0),$("#media_display").val(Y.media_display)}function NB(e,t,n=t){const r=document.getElementById(e);if(!(r instanceof HTMLSelectElement)||!t)return null;const o=Array.from(r.options).find(i=>i.value===t);if(o)return o;const a=document.createElement("option");return a.value=t,a.textContent=n,r.append(a),a}function HB(e){const t=document.getElementById(e);if(!(t instanceof HTMLSelectElement))return;const r=(t.options[t.selectedIndex]||null)?.textContent||t.value,o=$(`#${e}`);if(typeof o.select2=="function"&&(o.data("select2")||o.hasClass("select2-hidden-accessible"))){o.trigger("change.select2");const a=o.data("select2")?.$container?.find?.(".select2-selection__rendered");a?.length&&r&&a.text(r).attr("title",r)}}function ci(e,t,n=t){const r=document.getElementById(e),o=NB(e,t,n);!(r instanceof HTMLSelectElement)||!o||(o.selected=!0,r.value=t,$(`#${e}`).val(t),HB(e))}function GB(){let e=document.getElementById(Cf);e||(e=document.createElement("style"),e.id=Cf,document.head.append(e)),e.textContent=`
.${jd} {
    position: relative;
}

.${Nc} {
    align-items: center;
    background: rgba(20, 22, 26, 0.62);
    border-radius: 6px;
    box-sizing: border-box;
    color: #ffffff;
    display: flex;
    font-size: 13px;
    font-weight: 600;
    gap: 8px;
    inset: 0;
    justify-content: center;
    line-height: 1.4;
    min-height: 42px;
    padding: 10px 12px;
    pointer-events: auto;
    position: absolute;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.45);
    z-index: 30;
}

.${Yy} {
    border-radius: 0;
    min-height: 0;
    position: fixed;
    z-index: 10000;
}

.${Hc} {
    animation: bai-bai-toolkit-theme-loading-spin 0.75s linear infinite;
    border: 2px solid rgba(255, 255, 255, 0.42);
    border-radius: 50%;
    border-top-color: #ffffff;
    flex: 0 0 auto;
    height: 16px;
    width: 16px;
}

@keyframes bai-bai-toolkit-theme-loading-spin {
    to {
        transform: rotate(360deg);
    }
}

@media (prefers-reduced-motion: reduce) {
    .${Hc} {
        animation: none;
    }
}
`}function FB(e){if(e instanceof Element){const t=e.closest("#UI-presets-block, #UI-Theme-Block");if(t instanceof HTMLElement)return t}return document.body}function zB(e,t){const n={},r=FB(t);if(!(r instanceof HTMLElement))return e.loadingToken=n,n;GB(),dE(e);const o=r===document.body,a=document.createElement("div");return a.className=o?`${Nc} ${Yy}`:Nc,a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),a.innerHTML=`<span class="${Hc}" aria-hidden="true"></span><span>正在加载美化主题...</span>`,o||r.classList.add(jd),r.append(a),e.loadingToken=n,e.loadingHost=r,e.loadingOverlay=a,n}function dE(e,t=null){t&&e.loadingToken!==t||(e.loadingOverlay?.remove(),e.loadingHost instanceof HTMLElement&&e.loadingHost!==document.body&&e.loadingHost.classList.remove(jd),e.loadingToken=null,e.loadingHost=null,e.loadingOverlay=null)}function zf(e,t){e instanceof HTMLSelectElement&&(e.disabled=t);const n=$("#themes");n.prop("disabled",t),typeof n.select2=="function"&&(n.data("select2")||n.hasClass("select2-hidden-accessible"))&&n.trigger("change.select2")}function VB(){return ro("theme change",{forceEditor:!0,refreshTarget:!0,clearThemePending:!0})}function pE(){np();const e=h[Qe];if(!e?.enabled){ro("theme change without CodeMirror",{forceEditor:!1,refreshTarget:!1,clearThemePending:!1});return}const t=(e?.themeSyncToken??0)+1;e.themeSyncPending=!0,e.themeSyncToken=t,e.themeSyncTimers||=[],e.themeSyncFrames||=[],jc(e);const n=(r="settle")=>{if(!(e?.enabled&&e.themeSyncToken!==t))try{VB()&&jc(e)}catch{}};if(typeof requestAnimationFrame=="function"){const r=requestAnimationFrame(()=>n("animation frame"));e.themeSyncFrames.push(r)}else UB(e,t,()=>n("microtask"));for(const r of oB){const o=setTimeout(()=>n(`timeout ${r}ms`),r);e.themeSyncTimers.push(o)}}function UB(e,t,n){const r=()=>{e?.enabled&&e.themeSyncToken!==t||n()};if(typeof queueMicrotask=="function")queueMicrotask(r);else{const o=setTimeout(r,0);e?.enabled&&(e.themeSyncTimers||=[],e.themeSyncTimers.push(o))}}function mE(){return g.customCssShadowPropertyEnabled?{bogusFolders:Y.bogus_folders,zoomedAvatarMagnification:Y.zoomed_avatar_magnification}:null}function fE(e){if(!e||Y.bogus_folders!==e.bogusFolders||Y.zoomed_avatar_magnification!==e.zoomedAvatarMagnification)return;const t=Q.printCharactersDebounced;typeof t=="function"&&gv(t)}function WB(){return h.themeApplyReflowGuard||(h.themeApplyReflowGuard={installed:!1,windowUntil:0,cache:null,originalGetters:null,originalScrollTopSetter:null,pendingScrollTop:null,scrollTopFlushFrame:0,endTimer:null}),h.themeApplyReflowGuard}function np(){if(!g.customCssShadowPropertyEnabled)return;const e=WB(),t=Date.now()<e.windowUntil&&e.cache;e.windowUntil=Date.now()+aB,!t&&(e.cache=new Map,jB(e),KB(e))}function KB(e){const t=document.getElementById("chat");if(!(!(t instanceof HTMLElement)||!e.cache))for(const n of aE){const r=e.originalGetters?.[n];typeof r=="function"&&e.cache.set(n,{value:r.call(t),at:Date.now()})}}function jB(e){if(e.installed)return;const t=globalThis.Element?.prototype;if(t){for(const n of aE){let r=function(){if(this instanceof HTMLElement&&this.id==="chat"&&Date.now()<e.windowUntil&&e.cache){const i=e.cache.get(n);if(i)return i.value;const s=a.call(this);return e.cache.set(n,{value:s,at:Date.now()}),s}return a.call(this)};const o=Object.getOwnPropertyDescriptor(t,n);if(!o?.get||o.get[ds])continue;const a=o.get;e.originalGetters||={},e.originalGetters[n]=a,r[ds]=!0,r.__baiBaiToolkitOriginalMetricGetter=a,Object.defineProperty(t,n,{...o,get:r})}qB(e,t),e.installed=!0}}function qB(e,t){const n=Object.getOwnPropertyDescriptor(t,"scrollTop");if(!n?.set||n.set[ds])return;const r=n.set;function o(a){if(this instanceof HTMLElement&&this.id==="chat"&&Date.now()<e.windowUntil){e.pendingScrollTop={element:this,value:a},!e.scrollTopFlushFrame&&typeof requestAnimationFrame=="function"&&(e.scrollTopFlushFrame=requestAnimationFrame(()=>{e.scrollTopFlushFrame=0;const i=e.pendingScrollTop;e.pendingScrollTop=null,i?.element?.isConnected&&r.call(i.element,i.value)}));return}return r.call(this,a)}o[ds]=!0,o.__baiBaiToolkitOriginalScrollTopSetter=r,Object.defineProperty(t,"scrollTop",{...n,set:o})}function jc(e=h[Qe]){if(e){for(const t of e.themeSyncTimers||[])clearTimeout(t);if(typeof cancelAnimationFrame=="function")for(const t of e.themeSyncFrames||[])cancelAnimationFrame(t);e.themeSyncTimers=[],e.themeSyncFrames=[]}}function YB(){try{const e=localStorage.getItem(IO);if(!e)return null;const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)?t:null}catch(e){return console.debug(`${T} Failed to read Theme Manager background bindings`,e),null}}function QB(e){return!e||!document.querySelector(qd)?!1:(document.querySelectorAll(RO).forEach(t=>{t instanceof HTMLElement&&t.classList.toggle("active",t.dataset.value===e)}),!0)}function XB(e){const t=YB(),n=typeof t?.[e]=="string"?t[e]:"";if(!n)return!1;const r=Array.from(document.querySelectorAll(MO)).find(o=>o instanceof HTMLElement&&o.getAttribute("bgfile")===n);return r instanceof HTMLElement?(r.click(),!0):(console.debug(`${T} Theme Manager bound background was not found: ${n}`),!1)}function JB(e){!e||!document.querySelector(qd)||(QB(e),XB(e))}function ZB(e,t){const n=typeof e?.name=="string"&&e.name?e.name:t;if(!n)throw new Error("Theme name is missing");np();const r=mE();Vr.set(n,{...e,name:n});const o=globalThis.baibaokuApplyNativeTheme,a=globalThis.baibaokuHydrateTheme;let i="unknown";h.customCssThemeApplyDepth=(h.customCssThemeApplyDepth||0)+1;try{if(typeof o=="function"&&typeof a=="function")i="native bridge",a({...e,name:n}),Y.theme=n,ci("themes",n),o(n),Yt();else{i="fallback";const s=Y.chat_display,l=Y.toastr_position;Y.theme=n;for(const c of Zy)e[c]!==void 0&&(Y[c]=e[c]);ci("themes",n),Gf(),Ff(),uv(),ci("themes",n),Gf(),Ff(),s!==Y.chat_display&&$("#chat_display").trigger("change"),l!==Y.toastr_position&&$("#toastr_position").trigger("change"),Yt()}}catch(s){throw s}finally{h.customCssThemeApplyDepth=Math.max(0,(h.customCssThemeApplyDepth||1)-1)}fE(r),pE(),JB(n)}function eD(){const e=OB();e.installed||typeof document>"u"||(e.handler=function(n){const r=n?.target;if(!(r instanceof HTMLSelectElement)||r.id!=="themes"||e.replaying)return;const o=String(r.value||"");if(!o)return;if(g.baibaokuSettingsAccelerationEnabled===!1||g.baibaokuLazyThemeLoadingEnabled===!1){e.currentThemeName=o;return}const a=en();if(!a?.installed){e.currentThemeName=o;return}n.preventDefault(),n.stopImmediatePropagation();const i=e.currentThemeName||String(Y?.theme||"");i&&i!==o&&$B(i);const s=zB(e,r);zf(r,!0),e.pending=DB(o).then(l=>{ZB(l,o),e.currentThemeName=o}).catch(l=>{l?.status===404&&typeof a.clearSettingsGetCache=="function"&&a.clearSettingsGetCache("theme-not-found"),i&&ci("themes",i),globalThis.toastr?.error&&globalThis.toastr.error(`美化主题加载失败：${l?.message||String(l)}`,"柏宝库")}).finally(()=>{e.loadingToken===s&&(zf(r,!1),e.pending=null),dE(e,s)})},document.addEventListener("change",e.handler,!0),e.installed=!0)}async function tD(e){const t=!!e,n=g.baibaokuSettingsAccelerationEnabled!==!1,r=g.baibaokuLazyThemeLoadingEnabled!==!1;g.baibaokuSettingsAccelerationEnabled=t,t||(g.baibaokuLazyThemeLoadingEnabled=!1);const o=en();typeof o?.setSettingsAccelerationEnabled=="function"?o.setSettingsAccelerationEnabled(t):o&&(o.settingsAccelerationEnabled=t),t||(typeof o?.setLazyThemeLoadingEnabled=="function"?o.setLazyThemeLoadingEnabled(!1):o&&(o.lazyThemeLoadingEnabled=!1,typeof o.clearSettingsGetCache=="function"&&o.clearSettingsGetCache("settings-acceleration-disabled")));try{const a=await zn({settingsAccelerationEnabled:t,...t?{}:{lazyThemeLoadingEnabled:!1}}),i=a.settingsAccelerationEnabled!==!1,s=i&&a.lazyThemeLoadingEnabled!==!1;return g.baibaokuSettingsAccelerationEnabled=i,g.baibaokuLazyThemeLoadingEnabled=s,typeof o?.setSettingsAccelerationEnabled=="function"?o.setSettingsAccelerationEnabled(i):o&&(o.settingsAccelerationEnabled=i),typeof o?.setLazyThemeLoadingEnabled=="function"?o.setLazyThemeLoadingEnabled(s):o&&(o.lazyThemeLoadingEnabled=s,!s&&typeof o.clearSettingsGetCache=="function"&&o.clearSettingsGetCache("lazy-theme-loading-disabled")),a}catch(a){throw g.baibaokuSettingsAccelerationEnabled=n,g.baibaokuLazyThemeLoadingEnabled=r,typeof o?.setSettingsAccelerationEnabled=="function"?o.setSettingsAccelerationEnabled(n):o&&(o.settingsAccelerationEnabled=n),typeof o?.setLazyThemeLoadingEnabled=="function"?o.setLazyThemeLoadingEnabled(r):o&&(o.lazyThemeLoadingEnabled=r),a}}async function nD(e){const t=!!e,n=g.baibaokuLazyThemeLoadingEnabled!==!1,r=g.baibaokuSettingsAccelerationEnabled!==!1;g.baibaokuLazyThemeLoadingEnabled=t,t&&(g.baibaokuSettingsAccelerationEnabled=!0);const o=en();typeof o?.setLazyThemeLoadingEnabled=="function"?o.setLazyThemeLoadingEnabled(t):o&&(o.lazyThemeLoadingEnabled=t,!t&&typeof o.clearSettingsGetCache=="function"&&o.clearSettingsGetCache("lazy-theme-loading-disabled")),t&&(typeof o?.setSettingsAccelerationEnabled=="function"?o.setSettingsAccelerationEnabled(!0):o&&(o.settingsAccelerationEnabled=!0));try{const a=await zn({lazyThemeLoadingEnabled:t,...t?{settingsAccelerationEnabled:!0}:{}}),i=a.settingsAccelerationEnabled!==!1,s=i&&a.lazyThemeLoadingEnabled!==!1;return g.baibaokuLazyThemeLoadingEnabled=s,g.baibaokuSettingsAccelerationEnabled=i,typeof o?.setLazyThemeLoadingEnabled=="function"?o.setLazyThemeLoadingEnabled(s):o&&(o.lazyThemeLoadingEnabled=s,!s&&typeof o.clearSettingsGetCache=="function"&&o.clearSettingsGetCache("lazy-theme-loading-disabled")),typeof o?.setSettingsAccelerationEnabled=="function"?o.setSettingsAccelerationEnabled(i):o&&(o.settingsAccelerationEnabled=i),a}catch(a){throw g.baibaokuLazyThemeLoadingEnabled=n,g.baibaokuSettingsAccelerationEnabled=r,typeof o?.setLazyThemeLoadingEnabled=="function"?o.setLazyThemeLoadingEnabled(n):o&&(o.lazyThemeLoadingEnabled=n),typeof o?.setSettingsAccelerationEnabled=="function"?o.setSettingsAccelerationEnabled(r):o&&(o.settingsAccelerationEnabled=r),a}}async function rD(e){const t=!!e,n=g.fastCharacterListEnabled!==!1;g.fastCharacterListEnabled=t;const r=en();typeof r?.setCharacterListAccelerationEnabled=="function"?r.setCharacterListAccelerationEnabled(t):r&&(r.characterListAccelerationEnabled=t);try{const o=await zn({characterListAccelerationEnabled:t}),a=o.characterListAccelerationEnabled!==!1;return g.fastCharacterListEnabled=a,typeof r?.setCharacterListAccelerationEnabled=="function"?r.setCharacterListAccelerationEnabled(a):r&&(r.characterListAccelerationEnabled=a),o}catch(o){throw g.fastCharacterListEnabled=n,typeof r?.setCharacterListAccelerationEnabled=="function"?r.setCharacterListAccelerationEnabled(n):r&&(r.characterListAccelerationEnabled=n),o}}async function oD(e){const t=!!e,n=g.recentChatListAccelerationEnabled!==!1;g.recentChatListAccelerationEnabled=t;const r=en();typeof r?.setRecentChatListAccelerationEnabled=="function"?r.setRecentChatListAccelerationEnabled(t):r&&(r.recentChatListAccelerationEnabled=t);try{const o=await zn({recentChatListAccelerationEnabled:t}),a=o.recentChatListAccelerationEnabled!==!1;return g.recentChatListAccelerationEnabled=a,typeof r?.setRecentChatListAccelerationEnabled=="function"?r.setRecentChatListAccelerationEnabled(a):r&&(r.recentChatListAccelerationEnabled=a),o}catch(o){throw g.recentChatListAccelerationEnabled=n,typeof r?.setRecentChatListAccelerationEnabled=="function"?r.setRecentChatListAccelerationEnabled(n):r&&(r.recentChatListAccelerationEnabled=n),o}}async function aD(e){g.progressiveChatLoadingEnabled,g.progressiveChatLoadingEnabled=!1,Xo();try{const t=await zn({progressiveChatLoadingEnabled:!1});return g.progressiveChatLoadingEnabled=!1,Xo(),t}catch(t){throw g.progressiveChatLoadingEnabled=!1,Xo(),t}}async function iD(e){const t=!!e,n=g.tokenizerBulkCountEnabled!==!1;g.tokenizerBulkCountEnabled=t;const r=en();typeof r?.setTokenizerBulkCountEnabled=="function"?r.setTokenizerBulkCountEnabled(t):r&&(r.tokenizerBulkCountEnabled=t);try{const o=await zn({tokenizerBulkCountEnabled:t}),a=o.tokenizerBulkCountEnabled!==!1;return g.tokenizerBulkCountEnabled=a,typeof r?.setTokenizerBulkCountEnabled=="function"?r.setTokenizerBulkCountEnabled(a):r&&(r.tokenizerBulkCountEnabled=a),o}catch(o){throw g.tokenizerBulkCountEnabled=n,typeof r?.setTokenizerBulkCountEnabled=="function"?r.setTokenizerBulkCountEnabled(n):r&&(r.tokenizerBulkCountEnabled=n),o}}async function sD(e){const t=!!e,n=g.chatKeyboardScanReductionEnabled!==!1;g.chatKeyboardScanReductionEnabled=t;const r=en();typeof r?.setChatKeyboardScanReductionEnabled=="function"?r.setChatKeyboardScanReductionEnabled(t):r&&(r.chatKeyboardScanReductionEnabled=t);try{const o=await zn({chatKeyboardScanReductionEnabled:t}),a=o.chatKeyboardScanReductionEnabled!==!1;return g.chatKeyboardScanReductionEnabled=a,typeof r?.setChatKeyboardScanReductionEnabled=="function"?r.setChatKeyboardScanReductionEnabled(a):r&&(r.chatKeyboardScanReductionEnabled=a),o}catch(o){throw g.chatKeyboardScanReductionEnabled=n,typeof r?.setChatKeyboardScanReductionEnabled=="function"?r.setChatKeyboardScanReductionEnabled(n):r&&(r.chatKeyboardScanReductionEnabled=n),o}}async function lD(e){const t=!!e,n=g.extensionManifestBundleEnabled!==!1;g.extensionManifestBundleEnabled=t;const r=en();typeof r?.setExtensionManifestBundleEnabled=="function"?r.setExtensionManifestBundleEnabled(t):r&&(r.extensionManifestBundleEnabled=t);try{const o=await zn({extensionManifestBundleEnabled:t}),a=o.extensionManifestBundleEnabled!==!1;return g.extensionManifestBundleEnabled=a,typeof r?.setExtensionManifestBundleEnabled=="function"?r.setExtensionManifestBundleEnabled(a):r&&(r.extensionManifestBundleEnabled=a),o}catch(o){throw g.extensionManifestBundleEnabled=n,typeof r?.setExtensionManifestBundleEnabled=="function"?r.setExtensionManifestBundleEnabled(n):r&&(r.extensionManifestBundleEnabled=n),o}}function cD(){return g.messageDoubleClickEditEnabled&&g.messageTripleClickEditEnabled?(g.messageDoubleClickEditEnabled=!1,j[re].messageDoubleClickEditEnabled=!1,!0):!1}function uD(){const e=$f.some(n=>g[n]===!0);let t=!1;for(const n of $f)g[n]!==e&&(g[n]=e,j[re][n]=e,t=!0);return t}function ye(){const e={...g};delete e.baibaokuSettingsAccelerationEnabled,delete e.baibaokuLazyThemeLoadingEnabled,delete e.fastCharacterListEnabled,delete e.recentChatListAccelerationEnabled,delete e.progressiveChatLoadingEnabled,delete e.extensionManifestBundleEnabled,Object.assign(j[re],e),delete j[re].baibaokuSettingsAccelerationEnabled,delete j[re].baibaokuLazyThemeLoadingEnabled,delete j[re].fastCharacterListEnabled,delete j[re].recentChatListAccelerationEnabled,delete j[re].progressiveChatLoadingEnabled,delete j[re].extensionManifestBundleEnabled,Yt()}function gE(){g.translateMessageUpdatedOptimizationEnabled?bE():dD()}function rp(){return(!h.translateMessageUpdatedOptimization||typeof h.translateMessageUpdatedOptimization!="object")&&(h.translateMessageUpdatedOptimization={}),h.translateMessageUpdatedOptimization}function bE(){const e=M?.events?.[w.MESSAGE_UPDATED],t=rp();if(!Array.isArray(e)){Vf();return}let n=0;for(let r=0;r<e.length;r++){const o=e[r];if(o?.[ii]||!pD(o))continue;const a=async function(s,...l){if(mD(s)){console.debug(`${T} Skipped translate MESSAGE_UPDATED listener for message ${s}`);return}return o.apply(this,[s,...l])};a[ii]=!0,a.__baiBaiToolkitOriginalTranslateMessageUpdatedListener=o,e[r]=a,n+=1}t.installed=e.some(r=>r?.[ii]),!t.installed&&!t.retryTimer&&Vf(),n>0&&(t.retryCount=0,console.debug(`${T} Translate MESSAGE_UPDATED optimization installed (${n})`))}function dD(){const e=M?.events?.[w.MESSAGE_UPDATED],t=rp();if(t.retryTimer&&(clearTimeout(t.retryTimer),t.retryTimer=null),!Array.isArray(e)){t.installed=!1;return}let n=0;for(let r=0;r<e.length;r++){const o=e[r];if(!o?.[ii])continue;const a=o.__baiBaiToolkitOriginalTranslateMessageUpdatedListener;typeof a=="function"&&(e[r]=a,n+=1)}t.installed=!1,t.retryCount=0,n>0&&console.debug(`${T} Translate MESSAGE_UPDATED optimization restored (${n})`)}function Vf(){const e=rp();if(!(e.retryTimer||!g.translateMessageUpdatedOptimizationEnabled)){if(e.retryCount=Number(e.retryCount||0)+1,e.retryCount>30){console.debug(`${T} Translate MESSAGE_UPDATED optimization listener was not found after retries`);return}e.retryTimer=setTimeout(()=>{e.retryTimer=null,g.translateMessageUpdatedOptimizationEnabled&&bE()},1e3)}}function pD(e){if(typeof e!="function")return!1;const t=hE(e);return t.includes("translateFunction")&&t.includes("shouldTranslateFunction")&&t.includes("await translateFunction")}function mD(e){if(String(j?.translate?.auto_mode??"").toLowerCase()!=="none")return!1;const n=Number(e);if(!Number.isInteger(n)||n<0)return!1;const r=Array.isArray(Q.chat)?Q.chat[n]:null;return r?!r.extra?.display_text:!1}function Se(){return(!h.performanceTrace||typeof h.performanceTrace!="object")&&(h.performanceTrace={}),h.performanceTrace}function fD(){const e=Se();e.active||(Object.assign(e,{active:!0,startedAt:performance.now(),startedAtIso:new Date().toISOString(),endedAtIso:"",lines:[],lastKeys:new Map,responseInfo:new WeakMap,counters:{dropped:0,suppressed:0,events:0,fetches:0,gzipCompression:0,jsonStringify:0,responseJson:0,longTasks:0,longDomRefreshes:0,interactions:0,listeners:0},activities:[],eventStats:new Map,listenerStats:new Map,fetchStats:new Map,gzipStats:new Map,jsonStats:new Map,responseJsonStats:new Map,longDomRefreshStats:new Map}),bD(e),it("trace",`start ${ol({includeTextStats:!0})}`),e.uiTimer=setInterval(ps,1e3),ps(),_E("Performance trace started."))}function gD(){const e=Se();if(!e.active)return;it("trace",`stop ${ol({includeTextStats:!0})}`),e.active=!1,e.endedAtIso=new Date().toISOString(),hD(e),clearInterval(e.uiTimer),e.uiTimer=null;const t=WD(e),n=`st-performance-trace-${new Date().toISOString().replace(/[:.]/g,"-")}.txt`;KD(n,t),ps(),_E("Performance trace exported.")}function bD(e){_D(e),yD(e),ED(e),SD(e),vD(e)}function hD(e){e.originalEventEmit&&(M.emit=e.originalEventEmit,e.originalEventEmit=null),e.originalJsonStringify&&(JSON.stringify=e.originalJsonStringify,e.originalJsonStringify=null),e.originalResponseJson&&typeof Response<"u"&&(Response.prototype.json=e.originalResponseJson,e.originalResponseJson=null),e.longTaskObserver&&(e.longTaskObserver.disconnect(),e.longTaskObserver=null),e.interactionClickHandler&&(document.removeEventListener("click",e.interactionClickHandler,!0),e.interactionClickHandler=null),e.interactionKeydownHandler&&(document.removeEventListener("keydown",e.interactionKeydownHandler,!0),e.interactionKeydownHandler=null)}function _D(e){e.originalEventEmit||typeof M?.emit!="function"||(e.originalEventEmit=M.emit,M.emit=async function(n,...r){const o=Se();if(!o.active||!xB.has(n))return o.originalEventEmit.apply(this,[n,...r]);const a=performance.now(),i=Array.isArray(this.events?.[n])?this.events[n].slice():[];localStorage.getItem("eventTracing")==="true"?console.trace("Event emitted: "+n,r):console.debug("Event emitted: "+n);for(let l=0;l<i.length;l++){const c=i[l],u=performance.now();let p=null;try{await c.apply(this,r)}catch(b){p=b,console.error(b),console.trace("Error in event listener")}finally{const b=performance.now()-u;wD(n,c,l,b,p)}}this.autoFireAfterEmit?.has(n)&&this.autoFireLastArgs?.set(n,r);const s=performance.now()-a;xD(n,r,s,i.length)})}function yD(e){e.originalJsonStringify||typeof JSON.stringify!="function"||(e.originalJsonStringify=JSON.stringify,JSON.stringify=function(n,r,o){const a=Se(),i=a.active?$D(n):null,s=a.active?performance.now():0,l=a.originalJsonStringify.apply(this,[n,r,o]);if(a.active){const c=performance.now()-s;(i||c>=tp)&&CD(i||{name:"slow-json",count:0},c,l)}return l})}function ED(e){e.originalResponseJson||typeof Response>"u"||typeof Response.prototype?.json!="function"||(e.originalResponseJson=Response.prototype.json,Response.prototype.json=async function(...n){const r=Se(),o=r.active?r.responseInfo?.get(this):null,a=r.active?performance.now():0,i=await r.originalResponseJson.apply(this,n);if(r.active){const s=performance.now()-a;(o||s>=tp)&&kD(o,i,s)}return i})}function SD(e){if(e.longTaskObserver||typeof PerformanceObserver!="function")return;const t=PerformanceObserver.supportedEntryTypes||[];if(!(t.length&&!t.includes("longtask")))try{e.longTaskObserver=new PerformanceObserver(n=>{for(const r of n.getEntries())AD(r)}),e.longTaskObserver.observe({entryTypes:["longtask"]})}catch(n){it("trace",`longtask observer unavailable error=${dt(n?.message||n)}`)}}function vD(e){e.interactionClickHandler||e.interactionKeydownHandler||(e.interactionClickHandler=t=>{const n=t.target instanceof Element?t.target.closest(wB):null;n&&Uf("click",jD(n))},e.interactionKeydownHandler=t=>{const n=t.target;!(n instanceof Element)||n.id!=="send_textarea"||t.key==="Enter"&&(t.ctrlKey||t.metaKey||!t.shiftKey)&&Uf("keydown",`#send_textarea key=${t.key} ctrl=${t.ctrlKey} meta=${t.metaKey} shift=${t.shiftKey}`)},document.addEventListener("click",e.interactionClickHandler,!0),document.addEventListener("keydown",e.interactionKeydownHandler,!0))}function TD(){const e=globalThis[$l];if(e?.wrappedFetch)return e;const t=globalThis.fetch;if(typeof t!="function")return null;const n={originalFetch:t.bind(globalThis),wrappedFetch:null};return n.wrappedFetch=async function(o,a){const i=Se(),s=i.active?BD(o,a):null;if(!s)return n.originalFetch(o,a);const l=performance.now();LD(s);try{const c=await n.originalFetch(o,a),u=performance.now()-l;return i.responseInfo?.set(c,{...s,status:c?.status}),ID(s,u,c?.status),c}catch(c){const u=performance.now()-l;throw RD(s,u,c),c}},n.wrappedFetch[$l]=!0,globalThis[$l]=n,globalThis.fetch=n.wrappedFetch,n}function xD(e,t,n,r=0){const o=Se();o.counters.events+=1,Tr(o.eventStats,e,n),vr("event",e,performance.now()-n);const a=n>=tp,i=`event:${e}:${Kf(t,1)}`,s=Kf(t);it("event",`${e} duration=${rt(n)} listeners=${r} args=${s}`,{key:i,dedupeMs:a?0:uE})}function wD(e,t,n,r,o=null){const a=Se(),i=VD(e,t,n),s=`${e} ${i}`,l=r>=cE||o;a.counters.listeners+=1,Tr(a.listenerStats,s,r),l&&it("listener",`${e} #${n+1}/${zD(e)} ${i} duration=${rt(r)}${o?` error=${dt(o?.message||o)}`:""}`,{key:`listener:${e}:${n}:${i}:${Math.round(r/10)}`,dedupeMs:100})}function CD(e,t,n){const r=Se();r.counters.jsonStringify+=1,Tr(r.jsonStats,e.name,t),vr("json",e.name,performance.now()-t);const o=typeof n=="string"?n.length:0;it("json",`JSON.stringify kind=${e.name} items=${e.count||0} chars=${o} duration=${rt(t)}`,{key:`json:${e.name}:${e.count}:${o}`,dedupeMs:500})}function kD(e,t,n){const r=Se(),o=e?.path||"unknown";r.counters.responseJson+=1,Tr(r.responseJsonStats,o,n),it("response-json",`path=${o} result=${jf(t)} duration=${rt(n)}`,{key:`response-json:${o}:${jf(t)}`,dedupeMs:500})}function AD(e){const t=Se();if(!t.active)return;t.counters.longTasks+=1;const n=Math.max(0,e.startTime-t.startedAt),r=MD(e.startTime),o=OD(e);it("longtask",`duration=${rt(e.duration)} taskStart=+${rt(n)}${r?` near=${r}`:""}${o?` attr=${o}`:""}`,{key:`longtask:${Math.round(e.startTime)}`,dedupeMs:0})}function PD(e){const t=Se();if(!t.active||!e)return;t.counters.longDomRefreshes=Number(t.counters.longDomRefreshes||0)+1,t.longDomRefreshStats instanceof Map||(t.longDomRefreshStats=new Map);const n=dt(e.reason||"unknown");Tr(t.longDomRefreshStats,n,e.duration),!(e.duration<cE)&&it("longdom",[`refresh reason=${n}`,`duration=${rt(e.duration)}`,`messages=${e.messages||0}`,`optimized=${e.optimized?"yes":"no"}`,`contained=${e.contained||0}`,`editing=${e.editing||0}`,`tail=${e.tail||0}`,`cached=${e.cached||0}`,`estimated=${e.estimated||0}`,`skipped=${e.skipped||0}`].join(" "),{key:`longdom:${n}`,dedupeMs:80})}function Uf(e,t){const n=Se();n.active&&(n.counters.interactions+=1,vr("interaction",`${e}:${t}`),it("interaction",`${e} ${dt(t)}`,{key:`interaction:${e}:${t}`,dedupeMs:500}))}function LD(e){const t=Se();t.counters.fetches+=1,vr("fetch-start",`${e.method} ${e.path}`),it("fetch-start",`${e.method} ${e.path} body=${e.bodySize} encoding=${e.encoding||"none"}`,{key:`fetch-start:${e.method}:${e.path}:${e.bodySize}`,dedupeMs:250})}function ID(e,t,n){const r=Se();Tr(r.fetchStats,`${e.method} ${e.path}`,t),vr("fetch-end",`${e.method} ${e.path}`,performance.now()-t),it("fetch-end",`${e.method} ${e.path} status=${n||"unknown"} duration=${rt(t)} body=${e.bodySize}`,{key:`fetch-end:${e.method}:${e.path}:${n}:${e.bodySize}`,dedupeMs:250})}function RD(e,t,n){vr("fetch-error",`${e.method} ${e.path}`,performance.now()-t),it("fetch-error",`${e.method} ${e.path} duration=${rt(t)} error=${dt(n?.message||n)}`,{key:`fetch-error:${e.method}:${e.path}`,dedupeMs:250})}function Wf(e){const t=Se();if(!t.active)return;const n=Number(e?.duration||0),r=`${e?.method||"POST"} ${e?.path||"/api/chats/save"}`,o=Number(e?.originalBytes||0),a=Number(e?.compressedBytes||0),i=o>0&&a>0?`${Math.round(a/o*100)}%`:"n/a";t.counters.gzipCompression+=1,Tr(t.gzipStats,r,n),vr("gzip",r,e?.startedAt||performance.now()-n),it("gzip",`${r} original=${ms(o)} compressed=${ms(a)} ratio=${i} duration=${rt(n)}${e?.caller?` caller=${dt(e.caller)}`:""}`,{key:`gzip:${r}:${o}:${a}:${Math.round(n/10)}`,dedupeMs:0})}function vr(e,t,n=performance.now()){const r=Se();if(!(!r.active||!Array.isArray(r.activities)))for(r.activities.push({at:n,type:dt(e),label:dt(t)});r.activities.length>80;)r.activities.shift()}function MD(e){const t=Se(),n=Array.isArray(t.activities)?t.activities:[];let r=null,o=1/0;for(const s of n){const l=Math.abs(e-s.at);l<o&&(r=s,o=l)}if(!r||o>1200)return"";const a=e-r.at,i=a>=0?"+":"-";return`${r.type}:${r.label}${i}${rt(Math.abs(a))}`}function OD(e){const t=Array.isArray(e?.attribution)?e.attribution[0]:null;return t?[t.name,t.containerType,t.containerName,t.containerSrc].filter(Boolean).map(dt).join("/"):""}function it(e,t,{key:n="",dedupeMs:r=uE}={}){const o=Se();if(!o.active||!Array.isArray(o.lines))return;const a=performance.now(),i=a-o.startedAt;if(n&&r>0){const c=o.lastKeys.get(n)||0;if(a-c<r){o.counters.suppressed+=1;return}o.lastKeys.set(n,a)}const s=ol();let l=`+${rt(i)} ${e} ${t} | ${s}`;for(l.length>Df&&(l=`${l.slice(0,Df-15)}...<truncated>`),o.lines.push(l);o.lines.length>TB;)o.lines.shift(),o.counters.dropped+=1}function BD(e,t){const n=To(e);if(!n)return null;try{const r=new URL(n,location.href);if(!vB.has(r.pathname))return null;const o=dl(e,t);return{path:r.pathname,method:xo(e,t),bodySize:DD(t?.body),encoding:o.get("Content-Encoding")||""}}catch{return null}}function DD(e){return e==null?"none":typeof e=="string"?`${e.length}ch`:e instanceof Blob?`${e.size}B`:e instanceof URLSearchParams?`${String(e).length}ch`:e instanceof ArrayBuffer?`${e.byteLength}B`:ArrayBuffer.isView(e)?`${e.byteLength}B`:e instanceof FormData?"form-data":typeof e}function $D(e){return!e||typeof e!="object"?null:Array.isArray(e.chat)?{name:e.id?"group-chat-save-body":"chat-save-body",count:e.chat.length}:Array.isArray(e)&&e[0]?.chat_metadata?{name:"chat-array",count:e.length}:null}function ol({includeTextStats:e=!1}={}){const t=Array.isArray(Q.chat)?Q.chat:[],n=document.querySelectorAll("#chat .mes").length,r=document.querySelector("#chat .mes")?.getAttribute("mesid")??"none",o=[...document.querySelectorAll("#chat .mes")].at(-1)?.getAttribute("mesid")??"none",a=GD(),i=[`chat=${t.length}`,`visible=${n}`,`range=${r}-${o}`,`trunc=${Y?.chat_truncation??"unknown"}`,`chatId=${dt(We()||"none")}`,a,IT()].filter(Boolean);return e&&i.push(ND(t)),i.push(HD(t)),i.join(" ")}function ND(e){let t=0,n=0;for(const r of e)t+=typeof r?.mes=="string"?r.mes.length:0,n+=Array.isArray(r?.extra?.media)?r.extra.media.length:0,n+=Array.isArray(r?.extra?.files)?r.extra.files.length:0;return`textChars=${t} mediaItems=${n}`}function HD(e){const t=LT(e);return`visibleTextChars=${t.visibleTextChars} maxVisibleMes=${t.maxVisibleMesId}:${t.maxVisibleChars}`}function GD(){const e=performance.memory;return e?`heap=${ms(e.usedJSHeapSize)}/${ms(e.jsHeapSizeLimit)}`:""}function Kf(e,t=3){return e.slice(0,t).map(n=>FD(n)).join(",")}function FD(e){return e==null?String(e):["string","number","boolean"].includes(typeof e)?dt(e):Array.isArray(e)?`Array(${e.length})`:typeof e=="object"?"messageId"in e||"mesId"in e||"newSwipeId"in e?`{messageId=${e.messageId??e.mesId??"n/a"},newSwipeId=${e.newSwipeId??"n/a"}}`:e.detail?.id!==void 0?`{detail.id=${dt(e.detail.id)}}`:`{keys=${Object.keys(e).slice(0,5).join(",")}}`:typeof e}function zD(e){return Array.isArray(M?.events?.[e])?M.events[e].length:0}function VD(e,t,n){const r=t?.name||"anonymous",o=hE(t);return`${UD(e,t,o)||"unknown"}:${r}#${n+1}`}function hE(e){try{return Function.prototype.toString.call(e).slice(0,1600)}catch{return""}}function UD(e,t,n){const r=t?.name||"";return n.includes("translateFunction")||n.includes("translateIncomingMessage")||n.includes("translateMessageEdit")?"translate":n.includes("extension_settings.memory")||n.includes("getLatestMemoryFromChat")||n.includes("setMemoryContext")?"memory":n.includes("PromptReasoning")||n.includes("updateReasoningUI")||n.includes("eventHandler(event, idx)")?"reasoning":n.includes("renderDebounced")||n.includes("PromptManager")?"prompt-manager":n.includes("moduleWorker.update")||n.includes("vectors")||r.includes("vectors")?"vectors":n.includes("debouncedRender")||n.includes("logprobs")?"logprobs":n.includes("getContext().saveChat")||n.includes("saveChatConditional")?"save-chat":n.includes("baiBaiToolkit")||n.includes("MobileMessageEdit")||n.includes("mobileMessageEdit")?"this-plugin":r&&r!=="anonymous"?"named":""}function jf(e){if(Array.isArray(e)){const t=e[0]?.chat_metadata?"chat-header":typeof e[0];return`Array(${e.length},first=${t})`}return e&&typeof e=="object"?`{keys=${Object.keys(e).slice(0,5).join(",")}}`:dt(typeof e)}function Tr(e,t,n){const r=e.get(t)||{count:0,total:0,max:0};r.count+=1,r.total+=n,r.max=Math.max(r.max,n),e.set(t,r)}function WD(e){const t=e.endedAtIso?new Date(e.endedAtIso).getTime()-new Date(e.startedAtIso).getTime():0;return["SillyTavern performance trace",`started=${e.startedAtIso||""}`,`ended=${e.endedAtIso||""}`,`duration=${t}ms`,`finalSnapshot=${ol({includeTextStats:!0})}`,"","Counters",`events=${e.counters?.events||0}`,`fetches=${e.counters?.fetches||0}`,`gzipCompression=${e.counters?.gzipCompression||0}`,`jsonStringify=${e.counters?.jsonStringify||0}`,`responseJson=${e.counters?.responseJson||0}`,`longTasks=${e.counters?.longTasks||0}`,`longDomRefreshes=${e.counters?.longDomRefreshes||0}`,`interactions=${e.counters?.interactions||0}`,`listeners=${e.counters?.listeners||0}`,`suppressedDuplicates=${e.counters?.suppressed||0}`,`droppedOldLines=${e.counters?.dropped||0}`,"","Top Events",...Wn(e.eventStats),"","Top Listeners",...Wn(e.listenerStats),"","Top Fetches",...Wn(e.fetchStats),"","Top Gzip compression",...Wn(e.gzipStats),"","Top JSON.stringify",...Wn(e.jsonStats),"","Top Response.json",...Wn(e.responseJsonStats),"","Top Long DOM Refresh",...Wn(e.longDomRefreshStats),"","Log",...e.lines||[]].join(`
`)}function Wn(e){return!e||!e.size?["none"]:[...e.entries()].sort((t,n)=>n[1].total-t[1].total).slice(0,12).map(([t,n])=>`${t} count=${n.count} total=${rt(n.total)} max=${rt(n.max)}`)}function ps(){const e=Se(),t=!!e.active,n=Array.isArray(e.lines)?e.lines.length:0,r=e.counters?.dropped||0,o=e.counters?.suppressed||0;$("#bai_bai_toolkit_perf_trace_start").toggleClass("disabled",t),$("#bai_bai_toolkit_perf_trace_stop").toggleClass("disabled",!t),$("#bai_bai_toolkit_perf_trace_status").text(t?`recording, lines=${n}, suppressed=${o}, dropped=${r}`:`idle, last lines=${n}, suppressed=${o}, dropped=${r}`)}function KD(e,t){const n=new Blob([t],{type:"text/plain;charset=utf-8"}),r=URL.createObjectURL(n),o=document.createElement("a");o.href=r,o.download=e,document.body.appendChild(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}function _E(e){globalThis.toastr?.info&&globalThis.toastr.info(e,"Performance trace")}function jD(e){if(e.id)return`#${e.id}`;const t=[...e.classList].slice(0,4).join(".");return`${e.tagName.toLowerCase()}${t?`.${t}`:""}`}function qD(){if(!Se().active)return"";try{const t=new Error().stack;return t?t.split(`
`).map(n=>n.trim().replace(/^at\s+/,"")).filter(n=>n&&!n.includes("getPerformanceTraceStackSummary")&&!n.includes("baiBaiToolkitSaveRequestGzipFetch")&&!n.includes("baiBaiToolkitPerformanceTraceFetch")&&!n.includes("gzipFetchBody")&&!n.includes("recordPerformanceTrace")).slice(0,4).map(n=>n.replace(location.origin,"")).join(" <- "):""}catch{return""}}function dt(e){return String(e).replace(/\s+/g," ").slice(0,120)}function rt(e){return`${Number(e||0).toFixed(1)}ms`}function ms(e){const t=Number(e||0);return t>=1024*1024?`${(t/1024/1024).toFixed(1)}MB`:t>=1024?`${(t/1024).toFixed(1)}KB`:`${t}B`}function YD(){yE().catch(e=>console.debug(`${T} Silent update failed`,e))}async function yE(){return h.silentUpdateResult?h.silentUpdateResult:(h.silentUpdatePromise||(h.silentUpdatePromise=QD().then(e=>(h.silentUpdateResult=e,e)).catch(e=>{throw h.silentUpdateResult={error:e},e}).finally(()=>{h.silentUpdatePromise=null})),h.silentUpdatePromise)}async function QD(){try{const e=Wy,t=`https://raw.githubusercontent.com/baibai-git/SillyTavern-Mobile-Resize-Guard/main/manifest.json?t=${Date.now()}`,n=await fetch(t,{cache:"no-store"});if(!n.ok)throw new Error(`Failed to fetch remote manifest: ${n.statusText}`);const o=(await n.json()).version,a=op(o,e);return EE(a),a&&vE(),{isUpToDate:!a}}catch(e){throw console.error(`${T} Update check failed:`,e),e}}function op(e,t){if(!e||!t)return!1;const n=e.split(".").map(Number),r=t.split(".").map(Number);for(let o=0;o<Math.max(n.length,r.length);o++){const a=n[o]||0,i=r[o]||0;if(a>i)return!0;if(a<i)return!1}return!1}async function XD(){return JD("/api/extensions/update")}async function JD(e){const t=o$();return!t||t==="system"?new Response("Extension is not installed as an updateable third-party extension.",{status:404}):t==="global"&&!pv()?new Response("Forbidden: No permission to update global extensions.",{status:403}):fetch(e,{method:"POST",headers:me(),body:JSON.stringify({extensionName:Ky,global:t==="global"})})}function EE(e){const t=!!e;$(".bai_bai_toolkit_update_badge").toggle(t),$(".bai_bai_toolkit_update_button").toggle(t)}async function SE(e=null){return h.updatePromptPromise||(h.updatePromptPromise=ZD(e).finally(()=>{h.updatePromptPromise=null})),h.updatePromptPromise}function vE(){g.updatePromptOnAvailableEnabled&&jQuery(()=>{g.updatePromptOnAvailableEnabled&&SE().catch(e=>console.debug(`${T} Update prompt failed`,e))})}async function ZD(e){const t=e?.length?e:null;let n=!!t;t&&t.addClass("disabled");try{return await e$()?(n$(t),await t$(),n=!1,!0):!1}catch(r){return console.error(`${T} Update failed:`,r),toastr.error(`更新失败: ${r.message}`),!1}finally{n&&r$(t)}}async function e$(){return await fe(`
        <div class="bai_bai_toolkit_update_prompt">
            <h3>柏宝箱发现新版本</h3>
            <p>检测到插件有可用更新。要现在更新吗？</p>
            <p>更新完成后，SillyTavern 会自动刷新页面。</p>
        </div>
    `,ge.CONFIRM,"",{okButton:"更新",cancelButton:"取消"})===Kn.AFFIRMATIVE}async function t$(){const e=await XD();if(!e.ok)throw new Error(await a$(e));EE(!1),toastr.success(d`Extension updated successfully. Reloading...`),setTimeout(()=>location.reload(),1e3)}function n$(e){e?.length&&(e.addClass("disabled"),e.find("span").text("更新中..."),e.find("i").removeClass("fa-download").addClass("fa-spinner fa-spin"))}function r$(e){e?.length&&(e.removeClass("disabled"),e.find("span").text("更新"),e.find("i").removeClass("fa-spinner fa-spin").addClass("fa-download"))}function o$(e=Ky){const t=Object.keys(Vp).find(n=>n===e||n.startsWith("third-party")&&n.endsWith(e));return t?Vp[t]:null}async function a$(e){return await e.text()||e.statusText||`HTTP ${e.status}`}async function i$(){const e=$("#extensions_settings2");if(!e.length)return;let t=$("#bai_bai_toolkit_container");t.length||(t=$('<div id="bai_bai_toolkit_container" class="extension_container"></div>'),e.append(t));const n=await LB();t.empty().append(n);const r=t.find(".bai_bai_toolkit_tab"),o=t.find(".bai_bai_toolkit_tab_content");r.on("click",function(){const s=$(this),l=s.data("target");r.removeClass("active").css({color:"","border-bottom":"2px solid transparent",opacity:"0.6"}),s.addClass("active").css({color:"var(--SmartThemeQuoteColor)","border-bottom":"2px solid var(--SmartThemeQuoteColor)",opacity:"1"}),o.hide(),t.find(`#${l}`).show()}),m$(t),s$(t),$("#bai_bai_toolkit_update_prompt_on_available_enabled").prop("checked",g.updatePromptOnAvailableEnabled).on("input",function(){g.updatePromptOnAvailableEnabled=!!$(this).prop("checked"),ye(),g.updatePromptOnAvailableEnabled&&h.silentUpdateResult?.isUpToDate===!1&&vE()}),$("#bai_bai_toolkit_resize_guard_enabled").prop("checked",g.resizeGuardEnabled).on("input",function(){g.resizeGuardEnabled=!!$(this).prop("checked"),ye(),TE()});const a=tu(),i=$("#bai_bai_toolkit_chat_loss_mitigation_enabled");i.prop("checked",a&&g.chatLossMitigationEnabled).prop("disabled",!a).on("input",function(){tu()&&(g.chatLossMitigationEnabled=!!$(this).prop("checked"),ye())}),i.closest("label").toggleClass("disabled",!a).css("opacity",a?"":"0.55").find("span").text(a?"缓解酒馆丢失聊天问题":"缓解酒馆丢失聊天问题（1.16 及以上版本可用）"),$("#bai_bai_toolkit_description_codemirror_editor_enabled").prop("checked",g.descriptionCodeMirrorEditorEnabled).on("input",function(){g.descriptionCodeMirrorEditorEnabled=!!$(this).prop("checked"),ye(),IS()}),$("#bai_bai_toolkit_custom_css_input_optimization_enabled").prop("checked",g.customCssInputOptimizationEnabled).on("input",function(){g.customCssInputOptimizationEnabled=!!$(this).prop("checked"),!g.customCssInputOptimizationEnabled&&g.customCssShadowPropertyEnabled&&(g.customCssShadowPropertyEnabled=!1,$("#bai_bai_toolkit_custom_css_shadow_property_enabled").prop("checked",!1)),ye(),Xc()}),$("#bai_bai_toolkit_custom_css_shadow_property_enabled").prop("checked",g.customCssShadowPropertyEnabled).on("input",function(){g.customCssShadowPropertyEnabled=!!$(this).prop("checked"),g.customCssShadowPropertyEnabled&&!g.customCssInputOptimizationEnabled&&(g.customCssInputOptimizationEnabled=!0,$("#bai_bai_toolkit_custom_css_input_optimization_enabled").prop("checked",!0)),ye(),Xc()}),$("#bai_bai_toolkit_world_info_drawer_optimization_enabled").prop("checked",g.worldInfoDrawerOptimizationEnabled||g.worldInfoPageOptimizationEnabled).on("input",function(){const s=!!$(this).prop("checked");g.worldInfoDrawerOptimizationEnabled=s,g.worldInfoPageOptimizationEnabled=s,s||zy(document),ye(),Sy(),vy(),Ty(),fy()}),pM({saveSettings:ye}),$("#bai_bai_toolkit_world_info_list_optimization_enabled").prop("checked",g.worldInfoListOptimizationEnabled).on("input",function(){g.worldInfoListOptimizationEnabled=!!$(this).prop("checked"),ye(),Ic(),q0()}),$("#bai_bai_toolkit_world_info_search_replace_enabled").prop("checked",g.worldInfoSearchReplaceEnabled!==!1).on("input",function(){g.worldInfoSearchReplaceEnabled=!!$(this).prop("checked"),ye(),Ic()}),$("#bai_bai_toolkit_character_search_input_optimization_enabled").prop("checked",g.characterSearchInputOptimizationEnabled).on("input",function(){g.characterSearchInputOptimizationEnabled=!!$(this).prop("checked"),ye(),kp()}),$("#bai_bai_toolkit_baibaoku_settings_acceleration_enabled").prop("checked",g.baibaokuSettingsAccelerationEnabled).on("input",async function(){const s=$(this);s.prop("disabled",!0);try{await tD(!!s.prop("checked"))}catch(l){console.debug(`${T} Failed to save BaiBaoKu settings acceleration config`,l),s.prop("checked",g.baibaokuSettingsAccelerationEnabled!==!1)}finally{s.prop("disabled",!1),It(t)}}),$("#bai_bai_toolkit_baibaoku_lazy_theme_loading_enabled").prop("checked",g.baibaokuSettingsAccelerationEnabled!==!1&&g.baibaokuLazyThemeLoadingEnabled!==!1).on("input",async function(){const s=$(this);s.prop("disabled",!0);try{await nD(!!s.prop("checked"))}catch(l){console.debug(`${T} Failed to save BaiBaoKu lazy theme loading config`,l),s.prop("checked",g.baibaokuSettingsAccelerationEnabled!==!1&&g.baibaokuLazyThemeLoadingEnabled!==!1)}finally{s.prop("disabled",!1),It(t)}}),$("#bai_bai_toolkit_extension_manifest_bundle_enabled").prop("checked",g.extensionManifestBundleEnabled).on("input",async function(){const s=$(this);s.prop("disabled",!0);try{await lD(!!s.prop("checked"))}catch(l){console.debug(`${T} Failed to save BaiBaoKu extension manifest bundle config`,l),s.prop("checked",g.extensionManifestBundleEnabled!==!1)}finally{s.prop("disabled",!1),It(t)}}),$("#bai_bai_toolkit_fast_character_list_enabled").prop("checked",g.fastCharacterListEnabled).on("input",async function(){const s=$(this);s.prop("disabled",!0);try{await rD(!!s.prop("checked"))}catch(l){console.debug(`${T} Failed to save BaiBaoKu character list acceleration config`,l),s.prop("checked",g.fastCharacterListEnabled!==!1)}finally{s.prop("disabled",!1),It(t)}}),$("#bai_bai_toolkit_recent_chat_list_acceleration_enabled").prop("checked",g.recentChatListAccelerationEnabled).on("input",async function(){const s=$(this);s.prop("disabled",!0);try{await oD(!!s.prop("checked"))}catch(l){console.debug(`${T} Failed to save BaiBaoKu recent chat list acceleration config`,l),s.prop("checked",g.recentChatListAccelerationEnabled!==!1)}finally{s.prop("disabled",!1),It(t)}}),$("#bai_bai_toolkit_progressive_chat_loading_enabled").prop("checked",!1).prop("disabled",!0).on("input",async function(){const s=$(this);s.prop("disabled",!0);try{await aD(!1)}catch(l){console.debug(`${T} Failed to save BaiBaoKu progressive chat loading config`,l)}finally{s.prop("checked",!1),s.prop("disabled",!0),It(t)}}),$("#bai_bai_toolkit_save_generate_enabled").prop("checked",g.saveGenerateEnabled).on("input",function(){g.saveGenerateEnabled=!!$(this).prop("checked"),ye(),It(t)}),$("#bai_bai_toolkit_preset_auto_backup_enabled").prop("checked",g.presetAutoBackupEnabled!==!1).on("input",function(){g.presetAutoBackupEnabled=!!$(this).prop("checked"),ye(),lh(),It(t)}),$("#bai_bai_toolkit_tokenizer_bulk_count_enabled").prop("checked",g.tokenizerBulkCountEnabled).on("input",async function(){const s=$(this);s.prop("disabled",!0);try{await iD(!!s.prop("checked"))}catch(l){console.debug(`${T} Failed to save BaiBaoKu tokenizer bulk count config`,l),s.prop("checked",g.tokenizerBulkCountEnabled!==!1)}finally{s.prop("disabled",!1),It(t)}}),$("#bai_bai_toolkit_chat_keyboard_scan_reduction_enabled").prop("checked",g.chatKeyboardScanReductionEnabled!==!1).on("input",async function(){const s=$(this);s.prop("disabled",!0);try{await sD(!!s.prop("checked"))}catch(l){console.debug(`${T} Failed to save BaiBaoKu chat keyboard scan reduction config`,l),s.prop("checked",g.chatKeyboardScanReductionEnabled!==!1)}finally{s.prop("disabled",!1),It(t)}}),$("#bai_bai_toolkit_character_list_avatar_lazy_load_enabled").prop("checked",g.characterListAvatarLazyLoadEnabled).on("input",function(){g.characterListAvatarLazyLoadEnabled=!!$(this).prop("checked"),ye(),wS()}),xT({saveSettings:ye}),$("#bai_bai_toolkit_save_request_gzip_enabled").prop("checked",g.saveRequestGzipEnabled).on("input",function(){g.saveRequestGzipEnabled=!!$(this).prop("checked"),ye()}),$("#bai_bai_toolkit_translate_message_updated_optimization_enabled").prop("checked",g.translateMessageUpdatedOptimizationEnabled).on("input",function(){g.translateMessageUpdatedOptimizationEnabled=!!$(this).prop("checked"),ye(),gE()}),$("#bai_bai_toolkit_perf_trace_start").on("click",function(){$(this).hasClass("disabled")||fD()}),$("#bai_bai_toolkit_perf_trace_stop").on("click",function(){$(this).hasClass("disabled")||gD()}),ps(),hk({saveSettings:ye}),$("#bai_bai_toolkit_regex_quick_operation_enabled").prop("checked",g.regexQuickOperationOptimizationEnabled).on("input",function(){g.regexQuickOperationOptimizationEnabled=!!$(this).prop("checked"),ye(),DE()}),wT(t)}function s$(e){e.find("#bai_bai_toolkit_baibaoku_install_help").off("click.baiBaiToolkitBaibaokuInstallHelp").on("click.baiBaiToolkitBaibaokuInstallHelp",()=>{d$()}),e.find("#bai_bai_toolkit_baibaoku_refresh_status").off("click.baiBaiToolkitBaibaokuStatus").on("click.baiBaiToolkitBaibaokuStatus",()=>{qf(e,{force:!0})}),qf(e)}function qc(){return(!h.baibaokuPanel||typeof h.baibaokuPanel!="object")&&(h.baibaokuPanel={cache:null,pending:null}),h.baibaokuPanel}function It(e){const t=en(),n=e.find("#bai_bai_toolkit_baibaoku_bridge_status"),r=e.find("#bai_bai_toolkit_preset_auto_backup_enabled"),o=t?.installed?`已注入${t.version?` v${t.version}`:""}`:"未注入";_t(n,o,!!t?.installed),e.find("#bai_bai_toolkit_baibaoku_settings_acceleration_enabled").prop("checked",g.baibaokuSettingsAccelerationEnabled!==!1),e.find("#bai_bai_toolkit_baibaoku_lazy_theme_loading_enabled").prop("checked",g.baibaokuSettingsAccelerationEnabled!==!1&&g.baibaokuLazyThemeLoadingEnabled!==!1),e.find("#bai_bai_toolkit_extension_manifest_bundle_enabled").prop("checked",g.extensionManifestBundleEnabled!==!1),e.find("#bai_bai_toolkit_fast_character_list_enabled").prop("checked",g.fastCharacterListEnabled!==!1),e.find("#bai_bai_toolkit_recent_chat_list_acceleration_enabled").prop("checked",g.recentChatListAccelerationEnabled!==!1),e.find("#bai_bai_toolkit_progressive_chat_loading_enabled").prop("checked",!1).prop("disabled",!0),e.find("#bai_bai_toolkit_save_generate_enabled").prop("checked",g.saveGenerateEnabled===!0),r.prop("checked",g.presetAutoBackupEnabled!==!1),e.find("#bai_bai_toolkit_tokenizer_bulk_count_enabled").prop("checked",g.tokenizerBulkCountEnabled!==!1),e.find("#bai_bai_toolkit_chat_keyboard_scan_reduction_enabled").prop("checked",g.chatKeyboardScanReductionEnabled!==!1),Yc(e,qc().cache),Qc(e,qc().cache?.status)}function Yc(e,t){if(!t)return!1;const n=e.find("#bai_bai_toolkit_baibaoku_server_status"),r=e.find("#bai_bai_toolkit_baibaoku_driver_status"),o=t.status,a=o?.driver;return o?(_t(n,`已连接${o?.version?` v${o.version}`:""}`,!0),_t(r,a?.available?`可用${a.package?` (${a.package})`:""}`:"不可用",!!a?.available),!0):t.offline?(_t(n,"未安装",!1),_t(r,"未知",!1),!0):!1}function Qc(e,t){const n=e.find("#bai_bai_toolkit_preset_auto_backup_enabled"),r=n.closest("label"),o=l$(t?.version,wf);xk(o),r.data("presetAutoBackupDefaultTitle")||r.data("presetAutoBackupDefaultTitle",r.attr("title")||""),n.prop("disabled",!o),r.toggleClass("disabled",!o).css("opacity",o?"":"0.55").attr("title",o?r.data("presetAutoBackupDefaultTitle"):`预设自动备份需要柏宝库 v${wf} 或更高版本`)}function l$(e,t){return e=String(e||"").trim(),t=String(t||"").trim(),!e||!t?!1:!op(t,e)}async function qf(e,{force:t=!1}={}){const n=qc(),r=n.cache,o=r&&Date.now()-Number(r.updatedAt||0)<DO;let a=!1;if(It(e),!t&&o&&Yc(e,r))return;if(!t&&n.pending){await n.pending.catch(()=>null),Yc(e,n.cache);return}const i=e.find("#bai_bai_toolkit_baibaoku_server_status"),s=e.find("#bai_bai_toolkit_baibaoku_driver_status"),l=e.find("#bai_bai_toolkit_baibaoku_bridge_status"),c=e.find("#bai_bai_toolkit_baibaoku_settings_acceleration_enabled"),u=e.find("#bai_bai_toolkit_baibaoku_lazy_theme_loading_enabled"),p=e.find("#bai_bai_toolkit_extension_manifest_bundle_enabled"),b=e.find("#bai_bai_toolkit_fast_character_list_enabled"),v=e.find("#bai_bai_toolkit_recent_chat_list_acceleration_enabled"),y=e.find("#bai_bai_toolkit_progressive_chat_loading_enabled"),k=e.find("#bai_bai_toolkit_tokenizer_bulk_count_enabled"),P=e.find("#bai_bai_toolkit_chat_keyboard_scan_reduction_enabled"),E=en();_t(l,E?.installed?`已注入${E.version?` v${E.version}`:""}`:"未注入",!!E?.installed);const K=typeof E?.isSettingsAccelerationEnabled=="function"?E.isSettingsAccelerationEnabled():null;typeof K=="boolean"&&(g.baibaokuSettingsAccelerationEnabled=K,c.prop("checked",K));const X=typeof E?.isLazyThemeLoadingEnabled=="function"?E.isLazyThemeLoadingEnabled():null;if(typeof X=="boolean"){const te=g.baibaokuSettingsAccelerationEnabled!==!1&&X;g.baibaokuLazyThemeLoadingEnabled=te,u.prop("checked",te)}const B=typeof E?.isExtensionManifestBundleEnabled=="function"?E.isExtensionManifestBundleEnabled():null;typeof B=="boolean"&&(g.extensionManifestBundleEnabled=B,p.prop("checked",B));const V=typeof E?.isCharacterListAccelerationEnabled=="function"?E.isCharacterListAccelerationEnabled():null;typeof V=="boolean"&&(g.fastCharacterListEnabled=V,b.prop("checked",V));const ee=typeof E?.isRecentChatListAccelerationEnabled=="function"?E.isRecentChatListAccelerationEnabled():null;typeof ee=="boolean"&&(g.recentChatListAccelerationEnabled=ee,v.prop("checked",ee));const I=typeof E?.isTokenizerBulkCountEnabled=="function"?E.isTokenizerBulkCountEnabled():null;typeof I=="boolean"&&(g.tokenizerBulkCountEnabled=I,k.prop("checked",I));const Z=typeof E?.isChatKeyboardScanReductionEnabled=="function"?E.isChatKeyboardScanReductionEnabled():null;typeof Z=="boolean"&&(g.chatKeyboardScanReductionEnabled=Z,P.prop("checked",Z)),_t(i,"检测中",null),_t(s,"检测中",null);try{const te=await c$();_s(globalThis[Uo],!0);const ve=te?.driver;n.cache={...n.cache||{},status:te,offline:!1,updatedAt:Date.now()},a=!0,_t(i,`已连接${te?.version?` v${te.version}`:""}`,!0),_t(s,ve?.available?`可用${ve.package?` (${ve.package})`:""}`:"不可用",!!ve?.available),Qc(e,te),u$(te);try{const O=await p$(),le=O.settingsAccelerationEnabled!==!1,Je=le&&O.lazyThemeLoadingEnabled!==!1,ie=O.extensionManifestBundleEnabled!==!1,Ze=O.characterListAccelerationEnabled!==!1,Fe=O.recentChatListAccelerationEnabled!==!1,tn=!1,Gt=O.tokenizerBulkCountEnabled!==!1,xt=O.chatKeyboardScanReductionEnabled!==!1;n.cache={...n.cache||{},config:O,offline:!1,updatedAt:Date.now()},g.baibaokuSettingsAccelerationEnabled=le,g.baibaokuLazyThemeLoadingEnabled=Je,g.extensionManifestBundleEnabled=ie,g.fastCharacterListEnabled=Ze,g.recentChatListAccelerationEnabled=Fe,g.progressiveChatLoadingEnabled=tn,g.tokenizerBulkCountEnabled=Gt,g.chatKeyboardScanReductionEnabled=xt,c.prop("checked",le),u.prop("checked",Je),p.prop("checked",ie),b.prop("checked",Ze),v.prop("checked",Fe),y.prop("checked",!1).prop("disabled",!0),k.prop("checked",Gt),P.prop("checked",xt),Xo(),typeof E?.setSettingsAccelerationEnabled=="function"?E.setSettingsAccelerationEnabled(le):E&&(E.settingsAccelerationEnabled=le),typeof E?.setLazyThemeLoadingEnabled=="function"?E.setLazyThemeLoadingEnabled(Je):E&&(E.lazyThemeLoadingEnabled=Je,!Je&&typeof E.clearSettingsGetCache=="function"&&E.clearSettingsGetCache("lazy-theme-loading-disabled")),typeof E?.setCharacterListAccelerationEnabled=="function"?E.setCharacterListAccelerationEnabled(Ze):E&&(E.characterListAccelerationEnabled=Ze),typeof E?.setExtensionManifestBundleEnabled=="function"?E.setExtensionManifestBundleEnabled(ie):E&&(E.extensionManifestBundleEnabled=ie),typeof E?.setRecentChatListAccelerationEnabled=="function"?E.setRecentChatListAccelerationEnabled(Fe):E&&(E.recentChatListAccelerationEnabled=Fe),typeof E?.setTokenizerBulkCountEnabled=="function"?E.setTokenizerBulkCountEnabled(Gt):E&&(E.tokenizerBulkCountEnabled=Gt),typeof E?.setChatKeyboardScanReductionEnabled=="function"?E.setChatKeyboardScanReductionEnabled(xt):E&&(E.chatKeyboardScanReductionEnabled=xt)}catch(O){console.debug(`${T} Failed to read BaiBaoKu fast config`,O)}}catch{_s(globalThis[Uo],!1),_t(i,"未安装",!1),_t(s,"未知",!1),Qc(e,null)}a||(n.cache={...n.cache||{},status:null,offline:!0,updatedAt:Date.now()})}async function c$(){const e=new AbortController,t=setTimeout(()=>e.abort(),BO);try{const n=await fetch(jy,{method:"GET",cache:"no-store",signal:e.signal}),r=await n.json().catch(()=>null);if(!n.ok||r?.ok!==!0)throw new Error(r?.error?.message||`HTTP ${n.status}`);return r.data}finally{clearTimeout(t)}}async function u$(e){const t=String(e?.version||"").trim();if(!t||!op(xf,t))return;const n=`${t}->${xf}`;h.baibaokuBackendUpdatePromptShown===n||h.baibaokuBackendUpdatePromptPromise||(h.baibaokuBackendUpdatePromptShown=n,h.baibaokuBackendUpdatePromptPromise=fe(`
        <div class="bai_bai_toolkit_baibaoku_update_prompt">
            <h3>柏宝库需要更新！</h3>
            <p>当前版本存在部分BUG，请重启酒馆让柏宝库自动更新到最新版本，注意不是刷新网页，是重启酒馆后台</p>
        </div>
    `,ge.TEXT,"",{okButton:"知道了"}).catch(r=>{console.debug(`${T} Failed to show BaiBaoKu backend update prompt`,r)}).finally(()=>{h.baibaokuBackendUpdatePromptPromise=null}),await h.baibaokuBackendUpdatePromptPromise)}function d$(){fe("请看帖子标注内容",ge.TEXT,"",{okButton:"知道了"}).catch(e=>{console.debug(`${T} Failed to show BaiBaoKu install help prompt`,e)})}async function p$(){const e=await fetch(qy,{method:"GET",cache:"no-store"}),t=await e.json().catch(()=>null);if(!e.ok||t?.ok!==!0)throw new Error(t?.message||t?.error?.message||`HTTP ${e.status}`);return t.data||{}}async function zn(e){const t=new Headers(me());t.has("content-type")||t.set("content-type","application/json");const n=await fetch(qy,{method:"POST",headers:t,cache:"no-store",body:JSON.stringify(e||{})}),r=await n.json().catch(()=>null);if(!n.ok||r?.ok!==!0)throw new Error(r?.message||r?.error?.message||`HTTP ${n.status}`);return r.data||{}}function _t(e,t,n){e.text(t);const r=n===null?"":n?"var(--SmartThemeQuoteColor)":"#ff4d4f";e.each((o,a)=>{a?.style&&(r?a.style.setProperty("color",r,"important"):a.style.removeProperty("color"))})}async function m$(e){const t=e.find(".bai_bai_toolkit_current_version"),n=e.find(".bai_bai_toolkit_update_button"),r=e.find(".bai_bai_toolkit_update_status"),o=e.find(".bai_bai_toolkit_update_badge");t.text(Wy),r.text("检查更新中..."),h.silentUpdateResult?i(h.silentUpdateResult):a();async function a(){try{i(await yE())}catch{r.text("检查更新出错")}}function i(u){if(u?.error){s();return}u?.isUpToDate===!1?l():c()}function s(){n.hide(),o.hide(),r.text("检查更新出错")}function l(){r.text(""),n.show(),o.show()}function c(){n.hide(),o.hide(),r.text("已是最新版本"),setTimeout(()=>r.text(""),3e3)}n.on("click",async function(){$(this).hasClass("disabled")||await SE($(this))})}function TE(){g.resizeGuardEnabled?(OG(),DG()):(BG(),$G()),wb(),Sy(),vy(),Ty(),fy(),Ic(),kp(),wS(),Xo(),IS(),Xc(),dh(),ph(),Hu(),mh(),Vk(),lh(),Cd(),ey(),sy(),ty(),DE(),Eb(),gb(),gE(),Hg(),Vg(),Gg(),_b(),yb(),Eu(),rc(),Lb(),eD()}function Xc(){g.customCssShadowPropertyEnabled?f$():g$(),g.customCssInputOptimizationEnabled?(b$(),_$()):(y$(),h$())}function f$(){const e=document.getElementById(Nt);e instanceof HTMLTextAreaElement&&xE(e,String(Y.custom_css??e.value??""))}function xE(e,t=""){if(!(e instanceof HTMLTextAreaElement))return!1;const n=Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value");if(!n||typeof n.get!="function"||typeof n.set!="function")return!1;if(h.customCssShadowPropertyInstalled&&h.customCssShadowPropertyInput===e)return e.value=t,!0;h.customCssShadowPropertyInstalled&&CE(h.customCssShadowPropertyInput);let r=String(t??"");return h.customCssOriginalValueDescriptor=n,h.customCssShadowVirtualValue=r,Object.defineProperty(e,"value",{get:function(){return r},set:function(o){r=String(o),h.customCssShadowVirtualValue=r},configurable:!0,enumerable:!0}),h.customCssShadowPropertyInstalled=!0,h.customCssShadowPropertyInput=e,!0}function wE(e=String(Y.custom_css??"")){if(!g.customCssShadowPropertyEnabled)return!1;const t=cp();return t instanceof HTMLTextAreaElement?xE(t,e):!1}function g$(){h.customCssShadowPropertyInstalled&&(CE(h.customCssShadowPropertyInput||document.getElementById(Nt)),h.customCssOriginalValueDescriptor=null,h.customCssShadowPropertyInstalled=!1,h.customCssShadowPropertyInput=null,h.customCssShadowVirtualValue="")}function CE(e){const t=h.customCssOriginalValueDescriptor;if(!(e instanceof HTMLTextAreaElement)||!t)return!1;const n=String(e.value??"");return Object.defineProperty(e,"value",t),e.value=n,!0}function b$(){if(h[Qi])return;const e=document.getElementById(Nt);if(!(e instanceof HTMLTextAreaElement))return;const t=i=>{const s=Ya(i);if(!s||(i.stopImmediatePropagation(),i.isComposing||h.customCssInputComposing||h.customCssInputCompositionCommitPending))return;const l=Yf(s);ui(s,"input event"),(l||!i.isTrusted)&&sa("input event")},n=i=>{Ya(i)&&(Ko(),h.customCssInputComposing=!0,h.customCssInputCompositionCommitPending=!1)},r=i=>{const s=Ya(i);s&&(Ko(),h.customCssInputCompositionCommitPending=!0,h.customCssCompositionEndTimer=setTimeout(()=>{h.customCssCompositionEndTimer=null,h.customCssInputComposing=!1,h.customCssInputCompositionCommitPending=!1,Yf(s),ui(s,"composition end")},0))},o=i=>{const s=Ya(i);s&&(h.customCssInputComposing=!1,h.customCssInputCompositionCommitPending=!1,Ko(),ui(s,`${i?.type||"flush"} event`),sa(`${i?.type||"flush"} event`))},a=i=>{if(LE(i)){AE(`input optimization ${i?.type||"restore"}`);return}kE(`input optimization ${i?.type||"page lifecycle"}`)};e.addEventListener("input",t,!0),e.addEventListener("compositionstart",n,!0),e.addEventListener("compositionend",r,!0),e.addEventListener("change",o,!0),e.addEventListener("blur",o,!0),window.addEventListener("pagehide",a),window.addEventListener("pageshow",a),window.addEventListener("focus",a),h[Qi]={input:e,inputHandler:t,compositionStartHandler:n,compositionEndHandler:r,flushHandler:o,pageLifecycleHandler:a}}function h$(){const e=h[Qi];e&&(kE("remove input optimization"),Ko(),h.customCssInputComposing=!1,h.customCssInputCompositionCommitPending=!1,e.input?.removeEventListener("input",e.inputHandler,!0),e.input?.removeEventListener("compositionstart",e.compositionStartHandler,!0),e.input?.removeEventListener("compositionend",e.compositionEndHandler,!0),e.input?.removeEventListener("change",e.flushHandler,!0),e.input?.removeEventListener("blur",e.flushHandler,!0),window.removeEventListener("pagehide",e.pageLifecycleHandler),window.removeEventListener("pageshow",e.pageLifecycleHandler),window.removeEventListener("focus",e.pageLifecycleHandler),PE(),delete h[Qi])}function Ya(e){const t=e.target;return!(t instanceof HTMLTextAreaElement)||t.id!==Nt?null:t}function ui(e,t="input commit"){!(e instanceof HTMLTextAreaElement)||e.id!==Nt||(Y.custom_css=String(e.value),Yt())}function Ko(){h.customCssCompositionEndTimer&&(clearTimeout(h.customCssCompositionEndTimer),h.customCssCompositionEndTimer=null)}function sa(e="flush custom css apply"){IE(e)}function kE(e="current input flush"){if(h[Qe]?.themeSyncPending){ro(`${e} while theme sync is pending`,{forceEditor:!0,refreshTarget:!0,clearThemePending:!1});return}if(dr(e,{apply:!0,save:!0}))return;const n=document.getElementById(Nt);n instanceof HTMLTextAreaElement&&(h.customCssInputComposing=!1,h.customCssInputCompositionCommitPending=!1,Ko(),ui(n,e)),sa(e)}function ro(e="custom css settings sync",{forceEditor:t=!1,refreshTarget:n=!1,clearThemePending:r=!1}={}){const o=String(Y.custom_css??"");wE(o);const a=cp();let i=!0;a instanceof HTMLTextAreaElement&&(a.value!==o&&(a.value=o),i=a.value===o);let s=h[Qe];n&&s?.enabled&&(ap(s),s=h[Qe]);let l=!0,c=!0;s?.enabled&&(s.source instanceof HTMLTextAreaElement&&(s.source.value!==o&&(s.source.value=o),l=s.source.value===o),s.view&&(t||s.themeSyncPending||!s.dirty?s.wrapper instanceof HTMLElement&&s.wrapper.isConnected&&s.wrapper.offsetParent===null&&Wr(s)!==o?(s.dirty=!1,s.editorThemeSyncDeferred=!0,c=!0):(s.dirty=!1,al(s,{force:!0}),s.editorThemeSyncDeferred=!1,c=Wr(s)===o):c=Wr(s)===o)),IE(e);const p=document.getElementById(ls)?.textContent===o,b=i&&l&&c&&p;return b&&r&&s&&!s.editorThemeSyncDeferred&&(s.themeSyncPending=!1),b}function AE(e="page restore"){PE();const t=(h.customCssRestoreSyncToken??0)+1;h.customCssRestoreSyncToken=t,h.customCssRestoreSyncTimers=[];const n=r=>{if(h.customCssRestoreSyncToken!==t)return;const o=h[Qe];ro(`${e} (${r})`,{forceEditor:!!o?.themeSyncPending,refreshTarget:!0,clearThemePending:!0})};n("immediate");for(const r of iB){const o=setTimeout(()=>n(`timeout ${r}ms`),r);h.customCssRestoreSyncTimers.push(o)}}function PE(){for(const e of h.customCssRestoreSyncTimers||[])clearTimeout(e);h.customCssRestoreSyncTimers=[]}function LE(e){return e?.type==="pageshow"||e?.type==="focus"?!0:e?.type==="visibilitychange"&&document.visibilityState!=="hidden"}function IE(e="apply custom css style text"){let t=document.getElementById(ls);const n=String(Y.custom_css??"");return t||(t=document.createElement("style"),t.type="text/css",t.id=ls,document.head.append(t)),t.textContent!==n?(t.textContent=n,!0):!1}function _$(){const e=E$();e.enabled=!0,F$(),S$(e),ap(e),T$(e)}function y$(){const e=h[Qe];if(e){dr("disable",{apply:!0,save:!0}),e.enabled=!1,e.refreshFrame&&(cancelAnimationFrame(e.refreshFrame),e.refreshFrame=0),e.mutationObserver?.disconnect(),e.mutationObserver=null,jc(e),fs(e);for(const t of e.globalListeners||[])t.target.removeEventListener(t.type,t.handler,t.options);e.globalListeners=[],BE(),delete h[Qe]}}function E$(){return h[Qe]||(h[Qe]={enabled:!1,source:null,wrapper:null,view:null,listeners:[],globalListeners:[],mutationObserver:null,mutationObserverTargets:[],refreshFrame:0,dirty:!1,flushing:!1,syncingFromSource:!1,loadingToken:null,colorScheme:"light",colorSchemeDirty:!0,themeSyncPending:!1,editorThemeSyncDeferred:!1,themeSyncToken:0,themeSyncTimers:[],themeSyncFrames:[]}),h[Qe]}function S$(e){if(e.globalListeners.length>0)return;const t=i=>{const s=i.target;if(!(s instanceof Element))return;s.closest(nB)&&B$(e);const l=s.closest("#native-btn-scroll-new");l instanceof HTMLElement&&D$(e,l);const c=s.closest("#native-search-dropdown-new .vce-search-item-new");c instanceof HTMLElement&&$$(e,c),s.closest("#vce-css-inject-toggle")&&setTimeout(()=>{up(e)},0),s.closest(`.editor_maximize[data-for="${Nt}"]`)&&(dr("maximize click",{apply:!0,save:!0}),RE(e,{colorSchemeDirty:!0}))},n=i=>{if(LE(i)){AE(`CodeMirror ${i?.type||"restore"}`);return}dr("page lifecycle",{apply:!0,save:!0})},r=i=>{const s=i.target;s instanceof HTMLSelectElement&&s.id==="themes"&&(fE(e.themePrintCharactersSnapshot),e.themePrintCharactersSnapshot=null,pE())},o=i=>{const s=i.target;s instanceof HTMLSelectElement&&s.id==="themes"&&(np(),e.themePrintCharactersSnapshot=mE())},a=(i,s,l,c)=>{!(i instanceof EventTarget)||i===document||(i.addEventListener(s,l,c),e.globalListeners.push({target:i,type:s,handler:l,options:c}))};for(const i of v$())a(i,"click",t,!0);a(document.querySelector("#themes"),"change",o,!0),a(document.querySelector("#themes"),"change",r,!1),a(window,"pagehide",n),a(window,"pageshow",n),a(window,"focus",n)}function v$(){const e=new Set,t=r=>{r instanceof HTMLElement&&r.isConnected&&e.add(r)},n=ip();return t(document.querySelector(cs)),t(document.querySelector(Jd)),t(document.querySelector("#native-search-dropdown-new")),t(n?.closest("dialog.popup, .popup")),t(n?.parentElement),[...e]}function T$(e){typeof MutationObserver=="function"&&(e.mutationObserver||(e.mutationObserver=new MutationObserver(t=>{C$(e,t)||!w$(e,t)||RE(e,{colorSchemeDirty:!0})})),di(e))}function di(e){if(!e?.mutationObserver)return;const t=x$(e),n=e.mutationObserverTargets||[];if(!(n.length===t.length&&n.every((o,a)=>o.target===t[a].target&&o.optionsKey===t[a].optionsKey))){e.mutationObserver.disconnect();for(const{target:o,options:a}of t)e.mutationObserver.observe(o,a);e.mutationObserverTargets=t}}function x$(e){const t=new Map,n={attributes:!0,attributeFilter:["class","style","hidden","data-for"],childList:!0,subtree:!0},r={childList:!0,subtree:!1},o=(c,u,p)=>{if(!(c instanceof Node)||!c.isConnected)return;const b=t.get(c);(!b||b.optionsKey==="parent")&&t.set(c,{target:c,optionsKey:u,options:p})},a=c=>{if(!(c instanceof HTMLElement))return;o(c.parentElement,"host",n),o(c.parentElement?.parentElement,"parent",r);const u=c.closest("dialog.popup");o(u,"host",n),o(u?.parentElement,"parent",r)},i=ip(),s=document.querySelector(cs),l=document.querySelector(Jd);return a(i),a(e.source),a(e.wrapper),s instanceof HTMLElement?(o(s,"host",n),o(s.parentElement,"parent",r)):l instanceof HTMLElement&&(o(l,"host",n),o(l.parentElement,"parent",r)),[...t.values()]}function w$(e,t){return t.some(n=>{if(Hl(e,n.target))return!0;for(const r of n.addedNodes)if(Hl(e,r))return!0;for(const r of n.removedNodes)if(Hl(e,r))return!0;return!1})}function Hl(e,t){return t instanceof Element?t.id===Nt||t.id===R||t.matches(cs)||t.matches(Jd)||t.matches(ss)||e.source instanceof HTMLElement&&(t===e.source||t.contains(e.source)||e.source.contains(t))||e.wrapper instanceof HTMLElement&&(t===e.wrapper||t.contains(e.wrapper)||e.wrapper.contains(t))?!0:!!t.querySelector?.([`#${Nt}`,`#${R}`,cs,ss].join(", ")):!1}function C$(e,t){const n=e.wrapper;return n instanceof HTMLElement?t.every(r=>{if(r.target instanceof Node&&n.contains(r.target))return!0;for(const o of r.addedNodes)if(!(o instanceof Node)||!n.contains(o))return!1;for(const o of r.removedNodes)if(!(o instanceof Node)||!n.contains(o))return!1;return r.addedNodes.length>0||r.removedNodes.length>0}):!1}function RE(e=h[Qe],{colorSchemeDirty:t=!1}={}){e?.enabled&&(t&&(e.colorSchemeDirty=!0),!e.refreshFrame&&(e.refreshFrame=requestAnimationFrame(()=>{e.refreshFrame=0,ap(e)})))}function ap(e){if(!e?.enabled)return;wE(String(Y.custom_css??""));const t=ip();if(!(t instanceof HTMLTextAreaElement)||!t.isConnected){dr("target removed",{apply:!0,save:!0}),fs(e),di(e);return}if(e.source===t&&e.wrapper?.isConnected){ME(e,t,e.wrapper),e.colorSchemeDirty&&sp(e,t,e.wrapper),e.editorThemeSyncDeferred?(al(e,{force:!0}),e.editorThemeSyncDeferred=!1,e.themeSyncPending=!1):H$(e),di(e);return}dr("target switch",{apply:!0,save:!0}),fs(e),k$(e,t),di(e)}function ip(){const e=document.querySelector(ss);return e instanceof HTMLTextAreaElement&&e.isConnected?e:document.getElementById(Nt)}function k$(e,t){const n=document.createElement("div");n.id=R,n.className=tB,n.textContent="Loading CodeMirror...",ME(e,t,n),sp(e,t,n),t.classList.add(Zd),t.parentElement?.classList.add(us),lp(t)||t.closest("#UI-Customization")?.classList.add(ep),t.insertAdjacentElement("afterend",n),e.source=t,e.wrapper=n,e.dirty=!1,up(e);const r=()=>{setTimeout(()=>{e.dirty&&e.wrapper&&!e.wrapper.contains(document.activeElement)&&dr("blur",{apply:!0,save:!0})},0)};n.addEventListener("focusout",r),e.listeners.push({target:n,type:"focusout",handler:r,options:void 0});const o={};e.loadingToken=o,Pp().then(a=>{!e.enabled||e.source!==t||e.wrapper!==n||e.loadingToken!==o||!n.isConnected||M$(e,t,n,a)}).catch(a=>{e.enabled&&e.source===t&&e.wrapper===n&&e.loadingToken===o&&(e.enabled=!1,fs(e),BE())})}function sp(e,t,n){const r=A$(t);return e.colorScheme=r,e.colorSchemeDirty=!1,n.classList.toggle(ne,r==="dark"),n.classList.toggle(oe,r!=="dark"),n.dataset.colorScheme=r,r}function ME(e,t,n){n.classList.toggle(li,lp(t))}function lp(e){return e instanceof HTMLTextAreaElement&&e.matches(ss)}function cp(){const e=document.getElementById(Nt);return e instanceof HTMLTextAreaElement?e:null}function A$(e){const t=P$(e);return R$(t)<rB?"dark":"light"}function P$(e){const t=[];for(let r=e;r instanceof Element;r=r.parentElement)t.push(r);let n={r:255,g:255,b:255,a:1};for(const r of t.reverse()){const o=L$(getComputedStyle(r).backgroundColor);o?.a>0&&(n=I$(o,n))}return n}function L$(e){if(!e||e==="transparent")return null;const t=e.match(/^rgba?\((.+)\)$/i);if(!t)return null;const n=t[1].split(",").map(a=>a.trim()).filter(Boolean);if(n.length<3)return null;const r=a=>a.endsWith("%")?Math.max(0,Math.min(255,Number.parseFloat(a)/100*255)):Math.max(0,Math.min(255,Number.parseFloat(a))),o=n.length>=4?Number.parseFloat(n[3]):1;return{r:r(n[0]),g:r(n[1]),b:r(n[2]),a:Number.isFinite(o)?Math.max(0,Math.min(1,o)):1}}function I$(e,t){const n=e.a+t.a*(1-e.a);return n<=0?{r:255,g:255,b:255,a:1}:{r:(e.r*e.a+t.r*t.a*(1-e.a))/n,g:(e.g*e.a+t.g*t.a*(1-e.a))/n,b:(e.b*e.a+t.b*t.a*(1-e.a))/n,a:n}}function R$(e){const t=n=>{const r=n/255;return r<=.03928?r/12.92:((r+.055)/1.055)**2.4};return .2126*t(e.r)+.7152*t(e.g)+.0722*t(e.b)}function M$(e,t,n,r){const{EditorState:o,EditorView:a,keymap:i,defaultKeymap:s=[],history:l,historyKeymap:c=[],css:u,defaultHighlightStyle:p,HighlightStyle:b,syntaxHighlighting:v,classHighlighter:y,tags:k,oneDarkHighlightStyle:P}=r,E=t.value.length<=Xd,K=sp(e,t,n),X=O$({colorScheme:K,defaultHighlightStyle:p,HighlightStyle:b,syntaxHighlighting:v,classHighlighter:y,tags:k,oneDarkHighlightStyle:P}),B=[a.lineWrapping,...typeof u=="function"?[u()]:[],...X?[X]:[],a.updateListener.of(V=>{if(V.docChanged){if(e.syncingFromSource)return;e.dirty=!0,dp(e,"editor doc change")}}),a.theme({"&":{backgroundColor:"var(--SmartThemeBlurTintColor)",border:"1px solid var(--SmartThemeBorderColor)",borderRadius:"4px",boxSizing:"border-box",color:"var(--SmartThemeBodyColor)",font:"inherit",maxWidth:"100%",minHeight:"180px",minWidth:"0",overflow:"hidden",textShadow:"none",textAlign:"left",width:"100%"},"&.cm-focused":{outline:"none"},".cm-scroller":{fontFamily:"var(--monoFontFamily, monospace)",fontSize:"0.95em",lineHeight:"1.35",maxWidth:"100%",maxHeight:"55vh",minHeight:"180px",minWidth:"0",overflow:"auto",overflowAnchor:"none",overscrollBehavior:"auto",touchAction:"pan-y",WebkitOverflowScrolling:"touch"},".cm-content":{caretColor:"var(--SmartThemeBodyColor)",minWidth:"0",padding:"8px",textShadow:"none",textAlign:"left",minHeight:"180px"},".cm-line":{padding:"0",textAlign:"left"}},{dark:K==="dark"})];E&&typeof l=="function"&&B.push(l()),typeof i?.of=="function"&&B.push(i.of(E?[...s,...c]:s)),a.contentAttributes?.of&&B.push(a.contentAttributes.of({autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false","aria-label":"自定义 CSS"})),n.textContent="",e.view=new a({state:o.create({doc:t.value||"",extensions:B}),parent:n}),up(e)}function O$({colorScheme:e,defaultHighlightStyle:t,HighlightStyle:n,syntaxHighlighting:r,classHighlighter:o,tags:a,oneDarkHighlightStyle:i}){if(typeof r!="function")return null;if(o)return r(o,{fallback:!0});if(e==="dark"&&i)return r(i,{fallback:!0});if(t)return r(t,{fallback:!0});if(typeof n!="function"||!a)return null;const s=[],l=(u,p)=>{if(Array.isArray(u)){const b=u.filter(Boolean);b.length&&s.push({tag:b,...p})}else u&&s.push({tag:u,...p})},c=(u,p)=>typeof u=="function"&&p?u(p):null;return l(a.meta,{color:"#404740"}),l(a.link,{textDecoration:"underline"}),l(a.heading,{textDecoration:"underline",fontWeight:"bold"}),l(a.emphasis,{fontStyle:"italic"}),l(a.strong,{fontWeight:"bold"}),l(a.strikethrough,{textDecoration:"line-through"}),l(a.keyword,{color:"#708"}),l([a.atom,a.bool,a.url,a.contentSeparator,a.labelName],{color:"#219"}),l([a.literal,a.inserted],{color:"#164"}),l([a.string,a.deleted],{color:"#a11"}),l([a.regexp,a.escape,c(a.special,a.string)],{color:"#e40"}),l(c(a.definition,a.variableName),{color:"#00f"}),l(c(a.local,a.variableName),{color:"#30a"}),l([a.typeName,a.namespace],{color:"#085"}),l(a.className,{color:"#167"}),l([c(a.special,a.variableName),a.macroName],{color:"#256"}),l(c(a.definition,a.propertyName),{color:"#00c"}),l(a.comment,{color:"#940"}),l(a.invalid,{color:"#f00"}),r(n.define(s),{fallback:!0})}function fs(e){if(!(!e.source&&!e.wrapper&&!e.view)){for(const t of e.listeners||[])t.target.removeEventListener(t.type,t.handler,t.options);e.listeners=[],e.view?.destroy?.(),e.source?.classList.remove(Zd),e.source?.parentElement?.classList.remove(us),e.source?.closest("#UI-Customization")?.classList.remove(ep),e.wrapper?.remove(),e.source=null,e.wrapper=null,e.view=null,e.dirty=!1,e.syncingFromSource=!1,e.loadingToken=null,e.themeSyncPending=!1,e.editorThemeSyncDeferred=!1,e.themeSyncTimers=[],e.themeSyncFrames=[]}}function Wr(e){return e.view?.state?.doc?.toString?.()??""}function OE(e){return e.view?.scrollDOM||e.wrapper?.querySelector?.(".cm-scroller")||null}function B$(e=h[Qe]){return!e?.enabled||!(e.source instanceof HTMLTextAreaElement)||!e.view?!1:dp(e,"external read")}function D$(e,t){if(!e?.enabled||!e.view)return;const n=OE(e);if(!(n instanceof HTMLElement))return;const o=t.querySelector("i")?.classList.contains("fa-arrow-up")?0:n.scrollHeight,a=o-n.scrollTop;Math.abs(a)>400&&(n.scrollTop=a>0?o-400:o+400),n.scrollTo({top:o,behavior:"smooth"})}function $$(e,t){if(!e?.enabled||!e.view)return;const n=Number.parseInt(t.dataset.line||"",10);if(!Number.isFinite(n)||n<0)return;const r=String(document.getElementById("native-css-search-new")?.value||"");setTimeout(()=>{N$(e,n,r)},0)}function N$(e,t,n){if(!e?.enabled||!e.view)return!1;const r=e.view.state.doc,o=Math.min(Math.max(t+1,1),r.lines),a=r.line(o),i=n?a.text.toLowerCase().indexOf(n.toLowerCase()):-1,s=a.from+Math.max(i,0),l=i>=0?Math.min(s+n.length,a.to):s;return e.view.focus(),e.view.dispatch({selection:{anchor:s,head:l},scrollIntoView:!0}),!0}function up(e){if(!(e?.wrapper instanceof HTMLElement))return;const t=document.getElementById("vce-custom-css-height-inject")?"60dvh":"",n=e.wrapper.querySelector(".cm-editor"),r=OE(e);for(const o of[e.wrapper,n,r])o instanceof HTMLElement&&(o.style.minHeight=t);r instanceof HTMLElement&&(r.style.maxHeight=t)}function dp(e,t="CodeMirror sync to source"){if(!(e.source instanceof HTMLTextAreaElement)||!e.view)return!1;const n=Wr(e),r=e.source.value!==n;let o=!1;const a=Y.custom_css!==n;if(r&&(e.source.value=n),lp(e.source)){const i=cp();o=!!(i&&i.value!==n),o&&(i.value=n)}return a&&(Y.custom_css=n),r||o||a}function Yf(e){const t=h[Qe];return!t?.enabled||t.source!==e||!t.view?!1:al(t,{force:!0})}function H$(e){return al(e,{force:!1})}function al(e,{force:t=!1}={}){if(!t&&e.dirty||!(e.source instanceof HTMLTextAreaElement)||!e.view)return;const n=e.source.value||"";if(Wr(e)!==n){e.syncingFromSource=!0;try{e.view.dispatch({changes:{from:0,to:e.view.state.doc.length,insert:n}}),e.dirty=!1}finally{e.syncingFromSource=!1}return!0}return e.dirty=!1,!1}function dr(e,{apply:t=!1,save:n=!0}={}){const r=h[Qe];if(!r?.enabled||r.flushing||!(r.source instanceof HTMLTextAreaElement)||!r.view)return!1;r.flushing=!0;try{if(r.themeSyncPending)return ro(`${e} while theme sync is pending`,{forceEditor:!0,refreshTarget:!1,clearThemePending:!1}),!1;if(G$(r))return ro(`${e} clean external state before flush`,{forceEditor:!0,refreshTarget:!1,clearThemePending:!1}),t&&sa(e),!1;const a=dp(r,e)||r.dirty;return r.dirty=!1,a&&n&&Yt(),t&&sa(e),a}finally{r.flushing=!1}}function G$(e){if(e?.dirty||!(e?.source instanceof HTMLTextAreaElement)||!e.view)return null;const t=Wr(e),n=String(e.source.value??""),r=String(Y.custom_css??""),o=String(document.getElementById(ls)?.textContent??""),a=n===r,i=o===r,s=t===n,l=t===r;return s&&l?null:!l&&(a||i)?{doc:t,source:n,powerUser:r,style:o,sourceMatchesPowerUser:a,styleMatchesPowerUser:i}:null}function F$(){let e=document.getElementById(Fc);e||(e=document.createElement("style"),e.id=Fc,document.head.append(e)),e.textContent=`
#${R} {
    box-sizing: border-box;
    display: block;
    flex: 1 1 auto;
    max-width: 100%;
    min-width: 0;
    overflow: hidden;
    width: 100%;
}

#${R}.${li} {
    height: 100%;
    min-height: 0;
}

#${R}.${li} .cm-editor,
#${R}.${li} .cm-scroller {
    height: 100%;
    max-height: none !important;
    min-height: 0 !important;
}

#${R},
#${R} .cm-editor,
#${R} .cm-scroller,
#${R} .cm-content,
#${R} .cm-line {
    text-align: left !important;
}

#CustomCSS-textAreaBlock.${us},
#UI-Customization.${ep} {
    min-width: 0;
}

#CustomCSS-textAreaBlock.${us} {
    align-items: stretch;
}

#${R} .cm-content span {
    color: inherit !important;
    font-family: inherit !important;
    font-size: inherit !important;
    font-style: normal !important;
    font-weight: inherit !important;
    text-decoration: none !important;
    text-shadow: none !important;
}

#${R}.${oe} .cm-content .tok-meta {
    color: #404740 !important;
}

#${R}.${oe} .cm-content .tok-link,
#${R}.${ne} .cm-content .tok-link {
    text-decoration: underline !important;
}

#${R}.${oe} .cm-content .tok-heading {
    font-weight: bold !important;
    text-decoration: underline !important;
}

#${R}.${oe} .cm-content .tok-emphasis,
#${R}.${ne} .cm-content .tok-emphasis {
    font-style: italic !important;
}

#${R}.${oe} .cm-content .tok-strong,
#${R}.${ne} .cm-content .tok-strong {
    font-weight: bold !important;
}

#${R}.${oe} .cm-content .tok-strikethrough,
#${R}.${ne} .cm-content .tok-strikethrough {
    text-decoration: line-through !important;
}

#${R}.${oe} .cm-content .tok-keyword {
    color: #708 !important;
}

#${R}.${oe} .cm-content .tok-atom,
#${R}.${oe} .cm-content .tok-bool,
#${R}.${oe} .cm-content .tok-url,
#${R}.${oe} .cm-content .tok-labelName {
    color: #219 !important;
}

#${R}.${oe} .cm-content .tok-literal,
#${R}.${oe} .cm-content .tok-number,
#${R}.${oe} .cm-content .tok-inserted {
    color: #164 !important;
}

#${R}.${oe} .cm-content .tok-string,
#${R}.${oe} .cm-content .tok-deleted {
    color: #a11 !important;
}

#${R}.${oe} .cm-content .tok-string2 {
    color: #e40 !important;
}

#${R}.${oe} .cm-content .tok-variableName.tok-definition {
    color: #00f !important;
}

#${R}.${oe} .cm-content .tok-variableName.tok-local {
    color: #30a !important;
}

#${R}.${oe} .cm-content .tok-className {
    color: #167 !important;
}

#${R}.${oe} .cm-content .tok-typeName,
#${R}.${oe} .cm-content .tok-namespace {
    color: #085 !important;
}

#${R}.${oe} .cm-content .tok-variableName2,
#${R}.${oe} .cm-content .tok-macroName {
    color: #256 !important;
}

#${R}.${oe} .cm-content .tok-propertyName.tok-definition {
    color: #00c !important;
}

#${R}.${oe} .cm-content .tok-comment {
    color: #940 !important;
}

#${R}.${oe} .cm-content .tok-propertyName {
    color: inherit !important;
}

#${R}.${oe} .cm-content .tok-punctuation {
    color: #708 !important;
    font-weight: 600 !important;
}

#${R}.${oe} .cm-content .tok-invalid {
    color: #f00 !important;
}

#${R}.${ne} .cm-content .tok-keyword {
    color: #c678dd !important;
}

#${R}.${ne} .cm-content .tok-variableName,
#${R}.${ne} .cm-content .tok-propertyName,
#${R}.${ne} .cm-content .tok-macroName,
#${R}.${ne} .cm-content .tok-deleted {
    color: #e06c75 !important;
}

#${R}.${ne} .cm-content .tok-labelName {
    color: #61afef !important;
}

#${R}.${ne} .cm-content .tok-literal {
    color: #d19a66 !important;
}

#${R}.${ne} .cm-content .tok-variableName.tok-definition,
#${R}.${ne} .cm-content .tok-propertyName.tok-definition {
    color: #abb2bf !important;
}

#${R}.${ne} .cm-content .tok-typeName,
#${R}.${ne} .cm-content .tok-className,
#${R}.${ne} .cm-content .tok-number,
#${R}.${ne} .cm-content .tok-namespace {
    color: #e5c07b !important;
}

#${R}.${ne} .cm-content .tok-operator,
#${R}.${ne} .cm-content .tok-url,
#${R}.${ne} .cm-content .tok-string2 {
    color: #56b6c2 !important;
}

#${R}.${ne} .cm-content .tok-meta,
#${R}.${ne} .cm-content .tok-comment {
    color: #7d8799 !important;
}

#${R}.${ne} .cm-content .tok-atom,
#${R}.${ne} .cm-content .tok-bool,
#${R}.${ne} .cm-content .tok-variableName2 {
    color: #d19a66 !important;
}

#${R}.${ne} .cm-content .tok-string,
#${R}.${ne} .cm-content .tok-inserted {
    color: #98c379 !important;
}

#${R}.${ne} .cm-content .tok-link {
    color: #7d8799 !important;
}

#${R}.${ne} .cm-content .tok-heading {
    color: #e06c75 !important;
    font-weight: bold !important;
}

#${R}.${ne} .cm-content .tok-punctuation {
    color: #c678dd !important;
    font-weight: 600 !important;
}

#${R}.${ne} .cm-content .tok-invalid {
    color: #ffffff !important;
}

.${Zd} {
    display: none !important;
}
`}function BE(){document.getElementById(Fc)?.remove()}function DE(){g.regexQuickOperationOptimizationEnabled?z$():V$()}function z$(){if(!h[Xi]){const e=t=>{$H(t)};h[Xi]=e,document.addEventListener("click",e,!0)}aN(),K$(),kH(),U$(),j$(),Y$(),X$(),rN(),jr(),$E()}function V$(){const e=h[Xi];e&&(document.removeEventListener("click",e,!0),delete h[Xi]);const t=h[Ji];t&&(t.disconnect(),delete h[Ji]);const n=ke();clearTimeout(n.nativeSortableGuardTimer),n.nativeSortableGuardTimer=null,n.nativeSortableGuardRetries=0,n.scriptTemplate=null,xS(),Cp(),W$(),iN(),Q$(),J$(),oN(),AH(),q$(),cN()}function ke(){(!h.regexQuickOperationOptimization||typeof h.regexQuickOperationOptimization!="object")&&(h.regexQuickOperationOptimization={});const e=h.regexQuickOperationOptimization;return e.scriptTemplate instanceof DocumentFragment||(e.scriptTemplate=null),e}function U$(){if(h[es])return;const e=n=>{const r=ke();if(!(!mr()&&!r.regexChangesSaveInFlight&&!r.regexChangesSavePromise))return la().catch(o=>{console.debug(`${T} Failed to flush regex changes before unload`,o)}),n.preventDefault(),n.returnValue="",""},t=n=>{n?.type==="visibilitychange"&&document.visibilityState!=="hidden"||mr()&&la().catch(r=>{console.debug(`${T} Failed to flush regex changes during page lifecycle event`,r)})};h[es]={beforeUnloadHandler:e,pageLifecycleHandler:t},window.addEventListener("beforeunload",e),window.addEventListener("pagehide",t),document.addEventListener("visibilitychange",t)}function W$(){const e=h[es];e&&(window.removeEventListener("beforeunload",e.beforeUnloadHandler),window.removeEventListener("pagehide",e.pageLifecycleHandler),document.removeEventListener("visibilitychange",e.pageLifecycleHandler),delete h[es])}function K$(){if(h[Ji]||!document.body)return;const e=document.querySelector(bo)??document.body,t=new MutationObserver(()=>{jr(),mp()});t.observe(e,{childList:!0,subtree:!0}),h[Ji]=t}function j$(){if(h[ts])return;const e=t=>{lN(t)};h[ts]=e,document.addEventListener("click",e,!0)}function q$(){const e=h[ts];e&&(document.removeEventListener("click",e,!0),delete h[ts])}function Y$(){if(h[ns])return;const e=()=>{gN()},t=()=>{HE({forcePortableHydration:!0})};h[ns]={handler:e,presetHandler:t},M.on(w.CHAT_CHANGED,e),M.on(w.CHARACTER_PAGE_LOADED,e),M.on(w.PRESET_CHANGED,t),M.on(w.OAI_PRESET_CHANGED_AFTER,t)}function Q$(){const e=h[ns];if(!e)return;const{handler:t,presetHandler:n}=e;M.removeListener(w.CHAT_CHANGED,t),M.removeListener(w.CHARACTER_PAGE_LOADED,t),M.removeListener(w.PRESET_CHANGED,n),M.removeListener(w.OAI_PRESET_CHANGED_AFTER,n),delete h[ns]}function X$(){if(h[rs]||!w.PRESET_RENAMED)return;const e=t=>{Z$(t)};h[rs]=e,M.on(w.PRESET_RENAMED,e)}function J$(){const e=h[rs];e&&(M.removeListener(w.PRESET_RENAMED,e),delete h[rs])}function Z$(e){const t=e?.apiId,n=e?.oldName,r=e?.newName;if(!t||!n||!r||n===r)return;const o=eN(t,n,r),a=tN(t,n,r),i=nN(t,n,r);(o||a)&&pr(),i&&wp(),HE()}function eN(e,t,n){const r=ho(),o=_n(e,t),a=_n(e,n);return o===a||!r.scopes[o]||typeof r.scopes[o]!="object"?!1:(r.scopes[a]=r.scopes[o],delete r.scopes[o],j[re].regexListGroups=g.regexListGroups,!0)}function tN(e,t,n){const r=j.preset_allowed_regex;if(!r||typeof r!="object"||!Array.isArray(r[e])||!r[e].includes(t))return!1;const o=r[e].join("\0"),a=r[e].filter(i=>i!==t&&i!==n);return a.push(n),r[e]=a,o!==r[e].join("\0")}function nN(e,t,n){const r=ke(),o=_n(e,t),a=_n(e,n);let i=!1;if(r.pendingRegexScriptSaves instanceof Map){for(const[s,l]of Array.from(r.pendingRegexScriptSaves.entries()))l?.scriptType!==H.PRESET||l.apiId!==e||l.presetName!==t||(r.pendingRegexScriptSaves.delete(s),r.pendingRegexScriptSaves.set(a,{...l,presetName:n,scopeKey:a}),i=!0);if(!i&&r.pendingRegexScriptSaves.has(o)){const s=r.pendingRegexScriptSaves.get(o);r.pendingRegexScriptSaves.delete(o),r.pendingRegexScriptSaves.set(a,{...s,apiId:e,presetName:n,scopeKey:a}),i=!0}}if(r.pendingRegexPresetGroupSaves instanceof Map&&r.pendingRegexPresetGroupSaves.has(o)){const s=r.pendingRegexPresetGroupSaves.get(o);r.pendingRegexPresetGroupSaves.delete(o),r.pendingRegexPresetGroupSaves.set(a,{...s,apiId:e,presetName:n,scopeKey:a}),i=!0}return r.regexPresetGroupHydratedScopeKey===o&&(r.regexPresetGroupHydratedScopeKey=a),i}function rN(){if(h[os])return;const e=async r=>{try{await la()}catch(o){console.debug(`${T} Failed to flush regex groups before preset export`,o)}tH(r,"openai")},t=r=>{nH(r?.data,"openai",r?.presetName)},n=r=>{const o=r.target instanceof Element?r.target.closest("[data-preset-manager-export]"):null;if(!(o instanceof HTMLElement))return;const a=ke();if(a.regexPresetExportBypassButton===o){a.regexPresetExportBypassButton=null;return}!mr()&&!a.regexChangesSavePromise||(r.preventDefault(),r.stopImmediatePropagation(),(async()=>{try{await la(),a.regexPresetExportBypassButton=o,o.click()}catch(i){console.debug(`${T} Failed to save regex groups before preset export`,i),toastr.error(d`Failed to save regex groups before exporting the preset.`)}})())};h[os]={exportHandler:e,importHandler:t,genericExportClickHandler:n},M.on(w.OAI_PRESET_EXPORT_READY,e),M.on(w.OAI_PRESET_IMPORT_READY,t),document.addEventListener("click",n,!0)}function oN(){const e=h[os];e&&(M.removeListener(w.OAI_PRESET_EXPORT_READY,e.exportHandler),M.removeListener(w.OAI_PRESET_IMPORT_READY,e.importHandler),document.removeEventListener("click",e.genericExportClickHandler,!0),delete h[os])}function aN(){const e=globalThis.jQuery;if(h[Or]||typeof e?.fn!="object"){h[Or]&&(h[Or].enabled=!0);return}const t=e.fn.empty,n=e.fn.append;if(typeof t!="function"||typeof n!="function"){console.warn(`${T} jQuery empty/append is unavailable; regex Vue native render guard was not installed`);return}const r={enabled:!0,originalEmpty:t,originalAppend:n,patchedEmpty:null,patchedAppend:null};function o(...i){return r.enabled&&Qf(this)?this:t.apply(this,i)}function a(...i){return r.enabled&&Qf(this)?this:n.apply(this,i)}r.patchedEmpty=o,r.patchedAppend=a,o.__baiBaiToolkitRegexVueNativeRenderGuard=!0,a.__baiBaiToolkitRegexVueNativeRenderGuard=!0,o.__baiBaiToolkitOriginalEmpty=t,a.__baiBaiToolkitOriginalAppend=n,Object.assign(o,t),Object.assign(a,n),e.fn.empty=o,e.fn.append=a,h[Or]=r}function iN(){const e=h[Or];e&&(e.enabled=!1,globalThis.jQuery?.fn?.empty===e.patchedEmpty&&(globalThis.jQuery.fn.empty=e.originalEmpty),globalThis.jQuery?.fn?.append===e.patchedAppend&&(globalThis.jQuery.fn.append=e.originalAppend),globalThis.jQuery?.fn?.empty!==e.patchedEmpty&&globalThis.jQuery?.fn?.append!==e.patchedAppend&&delete h[Or])}function Qf(e){return!g.regexQuickOperationOptimizationEnabled||!Vn()?!1:Array.from(e??[]).some(t=>sN(t))}function sN(e){return e instanceof HTMLElement&&["saved_regex_scripts","saved_scoped_scripts","saved_preset_scripts"].includes(e.id)&&e.querySelector(":scope > .bai-bai-regex-vue-list")}function lN(e){if(!g.regexQuickOperationOptimizationEnabled||!Vn())return;const t=e.target instanceof Element?e.target:null;if(!t?.closest(bo))return;const n=t.closest(["#open_regex_editor","#open_scoped_editor","#open_preset_editor","#bulk_select_all_toggle","#bulk_enable_regex","#bulk_disable_regex","#bulk_regex_move_to_global","#bulk_regex_move_to_scoped","#bulk_regex_move_to_preset","#bulk_delete_regex","#bulk_export_regex"].join(", "));if(n instanceof HTMLElement)switch(Yo(e),n.id){case"open_regex_editor":Kl(H.GLOBAL);break;case"open_scoped_editor":Kl(H.SCOPED);break;case"open_preset_editor":Kl(H.PRESET);break;case"bulk_select_all_toggle":dH();break;case"bulk_enable_regex":Zf(!0);break;case"bulk_disable_regex":Zf(!1);break;case"bulk_regex_move_to_global":Wl(H.GLOBAL);break;case"bulk_regex_move_to_scoped":Wl(H.SCOPED);break;case"bulk_regex_move_to_preset":Wl(H.PRESET);break;case"bulk_delete_regex":SH();break;case"bulk_export_regex":TH();break}}async function $E(){if(!g.regexQuickOperationOptimizationEnabled)return;const e=U();if(e.installing)return e.installing;e.installing=(async()=>{if(!pp()){mp(250);return}if(XN(),dS(),e.app){if(!fp()){mN(),jr(250);return}ue(),jr(250);return}const t=await uN(),n=await dN();e.vue=t,e.vueDraggableNext=n,e.root=pN(),e.state=t.reactive(fN()),e.app=t.createApp(bN(t,n,e.state)),NE(),e.app.mount(e.root),ue(),jr(250),Tt()})();try{await e.installing}catch(t){console.debug(`${T} Failed to install regex Vue manager`,t),toastr.error(d`Failed to install regex list manager. See console for details.`),e.app||pS()}finally{e.installing=null}}function cN(){const e=U();if(clearTimeout(e.syncTimer),e.syncTimer=null,hp(e),e.groupHeaderGesture=null,Kr(!1),e.app)try{e.app.unmount()}catch(t){console.debug(`${T} Failed to unmount regex Vue manager`,t)}e.app=null,e.state=null,e.root?.remove(),e.root=null,e.installing=null,document.getElementById(zc)?.remove(),CH().finally(()=>{pS()})}function U(){const e=ke();return(!e.vueManager||typeof e.vueManager!="object")&&(e.vueManager={app:null,root:null,state:null,vue:null,modulePromise:null,installing:null,syncTimer:null,suppressObserver:!1,dragging:!1,draggedScript:null,dragPlacement:null,dragLayoutCache:null,dragPlacementFrame:null,dragAutoScrollFrame:null,dragIndicatorElement:null,dragIndicatorRectKey:null,dragScrollContainer:null,lastDragPoint:null,lastDragEndedAt:0,groupHeaderGesture:null,lastGroupHeaderToggleAt:0,lastGroupHeaderGestureCanceledAt:0}),e.vueManager}function Vn(){return!!(U().app&&U().state)}function pp(){return pt().every(({selector:e})=>document.querySelector(e)instanceof HTMLElement)}function mp(e=80){if(!g.regexQuickOperationOptimizationEnabled)return;const t=U();t.suppressObserver||(clearTimeout(t.syncTimer),t.syncTimer=setTimeout(()=>{if(t.syncTimer=null,!pp()){mp(250);return}Vn()&&fp()||$E()},e))}async function uN(){const e=U();return e.modulePromise||(e.modulePromise=ht(()=>import("./vue.runtime.esm-bundler.GI5_MaGP.chunk.js"),__vite__mapDeps([0,1]))),e.modulePromise}async function dN(){const e=U();return e.draggableModulePromise||(e.draggableModulePromise=ht(()=>import("./vue-draggable-next.esm-bundler.DMkWxeed.chunk.js"),__vite__mapDeps([2,1]))),e.draggableModulePromise}function pN(){let e=document.getElementById(If);return e||(e=document.createElement("div"),e.id=If,e.className="displayNone",document.querySelector(bo)?.append(e)),e}function NE(){const e=U();e.suppressObserver=!0;try{for(const{selector:t}of pt()){const n=document.querySelector(t);n instanceof HTMLElement&&n.replaceChildren()}}finally{setTimeout(()=>{e.suppressObserver=!1},0)}}function fp(){return pt().every(({selector:e})=>{const t=document.querySelector(e);return t instanceof HTMLElement&&t.querySelector(":scope > .bai-bai-regex-vue-list")})}function mN(){const e=U();e.state&&(NE(),e.state.reclaimKey+=1,Tt())}function fN(){return{renderKey:0,reclaimKey:0,lists:{global:Gl("global"),preset:Gl("preset"),scoped:Gl("scoped")},selectedIds:{}}}function Gl(e){return{typeKey:e,scriptType:Ep(e),groups:[]}}function ue(){const e=U();e.state&&(e.state.lists.global=jo(H.GLOBAL),e.state.lists.preset=jo(H.PRESET),e.state.lists.scoped=jo(H.SCOPED),vp(),e.state.renderKey+=1,Tt())}function gN(){const e=U();e.state&&(e.state.lists.scoped=jo(H.SCOPED),vp(),Tt())}function HE({forcePortableHydration:e=!1}={}){const t=U();t.state&&(ZE({force:e}),t.state.lists.preset=jo(H.PRESET),vp(),Tt())}async function GE(){Vn()&&ue()}function jo(e){const t=xr(e),n=he(e);e===H.PRESET&&ZE();const r=Ue(e);Aa(r),oH(r,n)&&ot();const o=new Map,a=r.groups.slice().sort((c,u)=>Number(c.order??0)-Number(u.order??0)).map(c=>({id:c.id,name:c.name||d`Unnamed group`,collapsed:!!c.collapsed,isUngrouped:!1,scripts:[]}));for(const c of a)o.set(c.id,c);const i={id:$t,name:"",collapsed:!1,isUngrouped:!1,isPendingAssignment:!0,scripts:[]},s={id:Ce,name:il(r.ungrouped?.name),collapsed:!!r.ungrouped?.collapsed,isUngrouped:!0,isPendingAssignment:!1,scripts:[]};for(let c=0;c<n.length;c++){const u=n[c],p=r.scripts?.[u?.id]??{};(p.groupId===$t?i:o.get(p.groupId)??s).scripts.push({script:u,order:Number.isFinite(Number(p.order))?Number(p.order):c})}const l=[i,...a,s].map(c=>({...c,scripts:c.scripts.sort((u,p)=>u.order-p.order).map(u=>u.script)})).filter(c=>!c.isPendingAssignment||c.scripts.length>0).filter(c=>!c.isUngrouped||c.scripts.length>0||a.length===0);return{typeKey:t,scriptType:e,groups:l}}function bN(e,t,n){const{h:r,Teleport:o,Fragment:a}=e;return{name:"BaiBaiRegexManagerRoot",render(){return r(a,null,[Fl(r,t,o,n,"global","#saved_regex_scripts"),Fl(r,t,o,n,"preset","#saved_preset_scripts"),Fl(r,t,o,n,"scoped","#saved_scoped_scripts")])}}}function Fl(e,t,n,r,o,a){return e(n,{to:a},[hN(e,t,r,o)])}function hN(e,t,n,r){const o=n.lists[r],a=o.groups.reduce((l,c)=>l+c.scripts.length,0),i=[yN(e,n,o)];a===0&&i.push(e("div",{class:"bai-bai-regex-empty-list",key:"empty"},d`No scripts found`));const s=o.groups.map(l=>{const c=!l.isPendingAssignment,u=[];return c&&u.push(EN(e,o,l)),u.push(_N(e,t,n,o,l)),e("div",{class:["bai-bai-regex-group",c?"bai-bai-regex-group-framed":"",l.collapsed?"bai-bai-regex-group-collapsed":"",l.isUngrouped?"bai-bai-regex-group-ungrouped":"",l.isPendingAssignment?"bai-bai-regex-group-pending-assignment":""],"data-regex-group-id":l.id,key:l.id},u)});return i.push(e("div",{class:"bai-bai-regex-groups flex-container flexFlowColumn",key:"groups"},s)),e("div",{class:"bai-bai-regex-vue-list flex-container flexFlowColumn","data-regex-type":r,key:`${r}-reclaim-${n.reclaimKey}`},i)}function _N(e,t,n,r,o){const a=()=>o.scripts.map(s=>CN(e,n,r,s)),i={class:["bai-bai-regex-group-list flex-container flexFlowColumn",o.scripts.length===0?"bai-bai-regex-group-list-empty":""],"data-regex-type":r.typeKey,"data-regex-group-id":o.id,list:o.scripts,group:{name:`bai-bai-regex-scripts-${r.typeKey}`,pull:!0,put:!0},draggable:".regex-script-label",handle:".bai-bai-regex-script-drag-handle",itemKey:"id",sort:!1,animation:0,emptyInsertThreshold:nE,forceFallback:!0,fallbackOnBody:!0,fallbackClass:"bai-bai-regex-sortable-fallback",ghostClass:"bai-bai-regex-sortable-ghost",chosenClass:"bai-bai-regex-sortable-chosen",dragClass:"bai-bai-regex-sortable-drag",move:s=>AN(s,r.typeKey),key:`list-${o.id}`,onChoose:()=>Kr(!0),onStart:s=>LN(n,s,r.typeKey),onUnchoose:()=>{U().dragging||Kr(!1)},onEnd:s=>{const l=IN(n,s,r.typeKey);Kr(!1),l&&GH(r.typeKey)}};return PN(i),e("div",{class:["bai-bai-regex-group-body flex-container flexFlowColumn",o.scripts.length===0?"bai-bai-regex-group-body-empty":""],"data-regex-type":r.typeKey,"data-regex-group-id":o.id,key:`body-${o.id}`,"aria-hidden":o.collapsed?"true":"false"},[e("div",{class:"bai-bai-regex-group-body-inner"},[e(t.VueDraggableNext,i,{default:a})])])}function yN(e,t,n){const o=uH(t,n)>0;return e("div",{class:"bai-bai-regex-list-toolbar flex-container",key:"toolbar"},[e("div",{class:"bai-bai-regex-list-toolbar-btn bai-bai-regex-create-group-btn",title:d`Create regex group`,onClick:()=>{aH(n.scriptType)}},[e("i",{class:"fa-solid fa-folder-plus margin-r5"}),e("span",null,d`Create Group`)]),e("div",{class:["bai-bai-regex-list-toolbar-btn","bai-bai-regex-bulk-move-group-btn",o?"":"disabled"],title:o?d`将已选正则移动到分组`:d`先选择要移动的正则`,onClick:()=>{if(!o){toastr.warning(d`No regex scripts selected for moving.`);return}mH(n.scriptType)}},[e("i",{class:"fa-solid fa-folder-tree margin-r5"}),e("span",null,d`移动到分组...`)])])}function EN(e,t,n){const r=n.scripts.length,o=n.scripts.filter(u=>!(u?.disabled??!1)).length,a=r>0&&o===0,i=t.groups.filter(u=>!u.isUngrouped&&!u.isPendingAssignment).map(u=>u.id),s=i.indexOf(n.id),l=s>0,c=s>=0&&s<i.length-1;return e("div",{class:["bai-bai-regex-group-header","flex-container","flexnowrap",n.collapsed?"collapsed":""],key:`header-${n.id}`,onPointerdown:u=>SN(u,t.scriptType,n.id),onPointermoveCapture:u=>vN(u,t.scriptType,n.id),onPointerup:u=>TN(u,t.scriptType,n.id),onPointercancel:()=>xN(t.scriptType,n.id),onClick:u=>wN(u,t.scriptType,n.id)},[e("span",{class:["bai-bai-regex-group-toggle fa-solid fa-chevron-down"],title:n.collapsed?d`Expand`:d`Collapse`,onClick:u=>{u.preventDefault(),u.stopPropagation(),Sp(t.scriptType,n.id)}}),e("div",{class:"bai-bai-regex-group-title flex-container flex1 overflow-hidden"},[e("strong",{class:"bai-bai-regex-group-name overflow-hidden",title:n.name},n.name),e("small",{class:"bai-bai-regex-group-count"},String(n.scripts.length))]),e("label",{class:"checkbox flex-container margin-r5",title:a?d`Enable all scripts in group`:d`Disable all scripts in group`,onClick:u=>u.stopPropagation()},[e("input",{type:"checkbox",class:"disable_regex",checked:a,disabled:r===0,onChange:u=>{Vl(t.scriptType,n.id,!!u.target?.checked)}}),e("span",{class:"regex-toggle-on fa-solid fa-toggle-on",title:d`Disable all scripts in group`,onClick:u=>{u.preventDefault(),u.stopPropagation(),Vl(t.scriptType,n.id,!0)}}),e("span",{class:"regex-toggle-off fa-solid fa-toggle-off",title:d`Enable all scripts in group`,onClick:u=>{u.preventDefault(),u.stopPropagation(),Vl(t.scriptType,n.id,!1)}})]),!n.isUngrouped&&e("div",{class:["menu_button","bai-bai-regex-group-move-btn","fa-solid","fa-arrow-up",l?"":"disabled"],title:l?d`Move group up`:d`Already first group`,onClick:u=>{u.preventDefault(),u.stopPropagation(),Jf(t.scriptType,n.id,-1)}}),!n.isUngrouped&&e("div",{class:["menu_button","bai-bai-regex-group-move-btn","fa-solid","fa-arrow-down",c?"":"disabled"],title:c?d`Move group down`:d`Already last group`,onClick:u=>{u.preventDefault(),u.stopPropagation(),Jf(t.scriptType,n.id,1)}}),e("div",{class:"menu_button fa-solid fa-pencil",title:d`Rename group`,onClick:()=>{iH(t.scriptType,n.id)}}),!n.isUngrouped&&e("div",{class:"menu_button fa-solid fa-trash",title:d`Delete group`,onClick:()=>{sH(t.scriptType,n.id)}})].filter(Boolean))}function SN(e,t,n){if(gp(e)||e.pointerType==="mouse"&&e.button!==0||e.isPrimary===!1)return;const r=bp(e);if(!r)return;const o=U();o.groupHeaderGesture={scriptType:t,groupId:n,pointerId:e.pointerId,x:r.clientX,y:r.clientY,canceled:!1}}function vN(e,t,n){const r=U(),o=r.groupHeaderGesture;if(!o||o.scriptType!==t||o.groupId!==n||o.pointerId!==e.pointerId)return;const a=bp(e);a&&zE(o,a)>rE&&(o.canceled=!0,r.lastGroupHeaderGestureCanceledAt=Date.now())}function TN(e,t,n){const r=U(),o=r.groupHeaderGesture;if(!o||o.scriptType!==t||o.groupId!==n||o.pointerId!==e.pointerId||(r.groupHeaderGesture=null,gp(e)||FE(r)))return;const a=bp(e);if(!a||o.canceled||zE(o,a)>rE){r.lastGroupHeaderGestureCanceledAt=Date.now();return}e.cancelable&&e.preventDefault(),e.stopPropagation(),r.lastGroupHeaderToggleAt=Date.now(),Sp(t,n)}function xN(e,t){const n=U();n.groupHeaderGesture?.scriptType===e&&n.groupHeaderGesture?.groupId===t&&(n.groupHeaderGesture=null,n.lastGroupHeaderGestureCanceledAt=Date.now())}function wN(e,t,n){const r=U();if(gp(e))return;const o=Date.now();if(o-(r.lastGroupHeaderToggleAt||0)<Uc||o-(r.lastGroupHeaderGestureCanceledAt||0)<Uc||FE(r)){e.cancelable&&e.preventDefault(),e.stopPropagation();return}r.lastGroupHeaderToggleAt=o,Sp(t,n)}function FE(e=U()){return!!(e.dragging||Date.now()-(e.lastDragEndedAt||0)<Uc)}function gp(e){return!!(e.target instanceof Element?e.target:null)?.closest('.bai-bai-regex-group-toggle, .menu_button, .checkbox, input, label, button, select, textarea, a, [contenteditable="true"]')}function bp(e){return typeof e?.clientX!="number"||typeof e?.clientY!="number"?null:{clientX:e.clientX,clientY:e.clientY}}function zE(e,t){return Math.hypot(t.clientX-e.x,t.clientY-e.y)}function CN(e,t,n,r){const o=!!t.selectedIds[r.id];return e("div",{id:r.id,key:r.id,class:"regex-script-label flex-container flexnowrap","data-regex-script-id":r.id,"data-regex-type":n.typeKey},[e("input",{type:"checkbox",class:"regex_bulk_checkbox",checked:o,onChange:a=>cH(r.id,!!a.target?.checked)}),e("span",{class:"menu-handle bai-bai-regex-script-drag-handle"},"☰"),e("div",{class:"regex_script_name flex1 overflow-hidden",title:r.scriptName||""},r.scriptName||""),e("div",{class:"flex-container flexnowrap"},[e("label",{class:"checkbox flex-container margin-r5",for:"regex_disable"},[e("input",{type:"checkbox",name:"regex_disable",class:"disable_regex",checked:!!(r.disabled??!1),onChange:a=>{zl(n.scriptType,r.id,!!a.target?.checked)}}),e("span",{class:"regex-toggle-on fa-solid fa-toggle-on",title:d`Disable script`,onClick:a=>{a.preventDefault(),a.stopPropagation(),zl(n.scriptType,r.id,!0)}}),e("span",{class:"regex-toggle-off fa-solid fa-toggle-off",title:d`Enable script`,onClick:a=>{a.preventDefault(),a.stopPropagation(),zl(n.scriptType,r.id,!1)}})]),e("label",{class:"menu_button regex_script_expand",title:d`Show more options`},[e("input",{type:"checkbox",name:"regex_expand"}),e("span",{class:"fa-solid fa-ellipsis"})]),e("div",{class:"flex-container regex_script_buttons"},[e("div",{class:"move_to_global menu_button",title:d`Move to global scripts`,onClick:()=>{Ul(n.scriptType,r.id,H.GLOBAL)}},[e("i",{class:"fa-solid fa-globe"})]),e("div",{class:"move_to_preset menu_button",title:d`Move to preset scripts`,onClick:()=>{Ul(n.scriptType,r.id,H.PRESET)}},[e("i",{class:"fa-solid fa-sliders"})]),e("div",{class:"move_to_scoped menu_button",title:d`Move to scoped scripts`,onClick:()=>{Ul(n.scriptType,r.id,H.SCOPED)}},[e("i",{class:"fa-solid fa-address-card"})]),e("div",{class:"export_regex menu_button",title:d`Export script`,onClick:()=>vH(n.scriptType,r.id)},[e("i",{class:"fa-solid fa-file-export"})])]),e("div",{class:"edit_existing_regex menu_button",title:d`Edit script`,onClick:()=>{aS(n.scriptType,r.id)}},[e("i",{class:"fa-solid fa-pencil"})]),e("div",{class:"delete_regex menu_button",title:d`Delete script`,onClick:()=>{yH(n.scriptType,r.id)}},[e("i",{class:"fa-solid fa-trash"})])])])}function kN(e,t){const n=Ep(t),r=e?.draggedContext?.element,o=e?.to,a=e?.from;return n===null||!r?.id||!(o instanceof HTMLElement)||!(a instanceof HTMLElement)||!o.matches(".bai-bai-regex-group-list")||!a.matches(".bai-bai-regex-group-list")||o.dataset.regexType!==t||a.dataset.regexType!==t?!1:he(n).some(i=>i?.id===r.id)}function AN(e,t){return kN(e,t)&&qo(e?.originalEvent??e),!1}function PN(e){Object.assign(e,{touchStartThreshold:de()?Of:Mf,fallbackTolerance:de()?Of:Mf})}function LN(e,t,n){const r=U(),o=e?.lists?.[n],a=RN(t,n);if(r.groupHeaderGesture=null,hp(r),!o||!a){Kr(!0);return}_p(!0,r),r.draggedScript=a,r.dragLayoutCache=KE(o,a),r.dragScrollContainer=YN(QE(n)),r.lastDragStartedAt=Date.now(),Kr(!0),MN(r),qo(t?.originalEvent??t)}function IN(e,t=null,n=null){const r=U(),o=n||r.draggedScript?.typeKey,a=o?e?.lists?.[o]:null,i=XE(t?.originalEvent??t);i&&(r.lastDragPoint=i,WE(a,i));const s=WN(a,r.dragPlacement);return _p(!1,r),r.lastDragEndedAt=Date.now(),hp(r),s}function RN(e,t){const n=e?.item,r=e?.draggedContext?.element,o=e?.from,a=n instanceof HTMLElement?n.dataset.regexScriptId:r?.id,i=o instanceof HTMLElement?o.dataset.regexGroupId:n instanceof HTMLElement?n.closest(".bai-bai-regex-group-list")?.dataset.regexGroupId:null;return!a||!i?null:{typeKey:t,scriptId:a,sourceGroupId:i}}function MN(e=U()){VE(e);const t=o=>qo(o),n=o=>{e.draggedScript&&qo(o)},r=o=>qo(o);document.addEventListener("pointermove",t,!0),document.addEventListener("mousemove",n,!0),document.addEventListener("touchmove",r,{capture:!0,passive:!0}),e.dragPlacementListeners={pointermove:t,mousemove:n,touchmove:r}}function VE(e=U()){const t=e.dragPlacementListeners;t&&(document.removeEventListener("pointermove",t.pointermove,!0),document.removeEventListener("mousemove",t.mousemove,!0),document.removeEventListener("touchmove",t.touchmove,!0),e.dragPlacementListeners=null)}function qo(e){const t=XE(e),n=U();return t?(n.lastDragPoint=t,UE(n),!0):!1}function UE(e=U()){e.dragPlacementFrame||(e.dragPlacementFrame=requestAnimationFrame(()=>{e.dragPlacementFrame=null;const t=e.draggedScript?.typeKey,n=t?e.state?.lists?.[t]:null;WE(n,e.lastDragPoint),YE(e)}))}function WE(e,t){const n=U(),r=n.draggedScript;if(!e||!t||!r)return Zc(n),!1;const o=ON(e,r,t);return o?(n.dragPlacement=o,QN(o.groupElement),VN(n,o),!0):(Zc(n),!1)}function ON(e,t,n){const r=BN(e,t),o=$N(r,n);if(!o)return null;const a=NN(o,n);return{targetType:"group",typeKey:e.typeKey,groupId:o.groupId,groupElement:o.groupElement,containerElement:o.containerElement,containerRect:o.containerRect,children:o.children,index:a,indicatorRect:HN(o,a),draggedScript:t}}function BN(e,t){const n=U(),r=n.dragLayoutCache;return r&&r.draggedScript?.typeKey===t?.typeKey&&r.draggedScript?.scriptId===t?.scriptId&&jE(r)===r.scrollSignature?r:(n.dragLayoutCache=KE(e,t),n.dragLayoutCache)}function KE(e,t){const n=QE(e?.typeKey);if(!e||!t||!(n instanceof HTMLElement))return null;const r=[];for(const a of n.querySelectorAll(".bai-bai-regex-group:not(.bai-bai-regex-group-collapsed)")){if(!(a instanceof HTMLElement))continue;const i=a.dataset.regexGroupId,s=a.querySelector(".bai-bai-regex-group-list");!i||!(s instanceof HTMLElement)||r.push({groupId:i,groupElement:a,hitRect:Jc(a),...DN(s,t)})}const o={draggedScript:{...t},groups:r,scrollSignature:""};return o.scrollSignature=jE(o),o}function DN(e,t){return{containerElement:e,containerRect:Jc(e),children:GN(e,t).map(n=>({element:n,rect:Jc(n)}))}}function Jc(e){const t=e.getBoundingClientRect();return{left:t.left,right:t.right,top:t.top,bottom:t.bottom,width:t.width,height:t.height}}function jE(e){const t=[window.scrollX||0,window.scrollY||0],n=new Set;for(const r of e?.groups??[]){const o=r.containerElement;!(o instanceof HTMLElement)||n.has(o)||(n.add(o),t.push(o.scrollLeft||0,o.scrollTop||0))}return t.join(":")}function $N(e,t){if(!e||!t)return null;const n=nE;let r=null,o=1/0;for(const a of e.groups??[]){const i=a.hitRect;if(t.clientX<i.left-n||t.clientX>i.right+n||t.clientY<i.top-n/2||t.clientY>i.bottom+n)continue;const s=t.clientY<i.top?i.top-t.clientY:t.clientY>i.bottom?t.clientY-i.bottom:0;s<o&&(o=s,r=a)}return r}function NN(e,t){const n=e?.children??[];let r=0;for(const o of n){const a=o.rect;if(t.clientY<a.top+a.height/2)return Math.max(0,Math.min(r,n.length));r+=1}return n.length}function HN(e,t){const n=e?.containerRect;if(!n)return null;const r=e.children??[],o=r[t];let a=n.top;return o?a=o.rect.top:r.length&&(a=r[r.length-1].rect.bottom),{left:n.left,top:a,width:n.width}}function GN(e,t){return Array.from(e?.children??[]).filter(n=>n instanceof HTMLElement&&!FN(n)&&!zN(n,t))}function FN(e){return e.classList.contains("bai-bai-regex-sortable-fallback")||e.classList.contains("bai-bai-regex-sortable-ghost")||e.classList.contains("bai-bai-regex-sortable-chosen")||e.classList.contains("bai-bai-regex-sortable-drag")}function zN(e,t){return!!(e instanceof HTMLElement&&t?.scriptId&&e.dataset.regexScriptId===t.scriptId)}function VN(e,t){const n=UN(e),r=t?.indicatorRect;if(!n||!r){qE(e);return}const o=`${Math.round(r.left)}:${Math.round(r.top)}:${Math.round(r.width)}`;e.dragIndicatorRectKey!==o&&(e.dragIndicatorRectKey=o,n.style.left=`${r.left}px`,n.style.top=`${Math.round(r.top-1)}px`,n.style.width=`${r.width}px`)}function UN(e=U()){if(e.dragIndicatorElement instanceof HTMLElement&&e.dragIndicatorElement.isConnected)return e.dragIndicatorElement;const t=document.createElement("div");return t.className=tE,document.body.append(t),e.dragIndicatorElement=t,t}function qE(e=U()){e.dragIndicatorElement?.remove?.(),e.dragIndicatorElement=null,e.dragIndicatorRectKey=null}function Zc(e=U()){e.dragPlacement=null,yp(),qE(e)}function hp(e=U()){VE(e),e.dragPlacementFrame&&(cancelAnimationFrame(e.dragPlacementFrame),e.dragPlacementFrame=null),e.dragAutoScrollFrame&&(cancelAnimationFrame(e.dragAutoScrollFrame),e.dragAutoScrollFrame=null),Zc(e),_p(!1,e),e.draggedScript=null,e.dragLayoutCache=null,e.dragScrollContainer=null,e.lastDragPoint=null}function WN(e,t){const n=t?.draggedScript,r=t?.groupId;if(!e||!n?.scriptId||!r)return!1;const o=e.groups.find(s=>s.id===r);if(!o)return!1;const a=Xf(e),i=KN(e,n.scriptId);return i?(o.scripts=Array.isArray(o.scripts)?o.scripts:[],o.scripts.splice(Math.max(0,Math.min(Number(t.index)||0,o.scripts.length)),0,i),!jN(a,Xf(e))):!1}function KN(e,t){for(const n of e?.groups??[]){const r=Array.isArray(n.scripts)?n.scripts:[],o=r.findIndex(a=>a?.id===t);if(o>=0)return r.splice(o,1)[0]}return null}function Xf(e){return(e?.groups??[]).flatMap(t=>(t.scripts??[]).map(n=>`${t.id}:${n?.id??""}`))}function jN(e,t){return!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((n,r)=>n===t[r])}function YE(e=U()){e.dragAutoScrollFrame||!e.draggedScript||!e.lastDragPoint||(e.dragAutoScrollFrame=requestAnimationFrame(()=>{e.dragAutoScrollFrame=null,!(!e.draggedScript||!e.lastDragPoint||!qN(e))&&(e.dragLayoutCache=null,UE(e),YE(e))}))}function qN(e=U()){const t=e.dragScrollContainer,n=e.lastDragPoint;if(!t||!n)return!1;const r=t===document.scrollingElement||t===document.documentElement||t===document.body?{top:0,bottom:window.innerHeight||document.documentElement.clientHeight||0}:t.getBoundingClientRect(),o=56,a=18;let i=0;if(n.clientY<r.top+o?i=-Math.ceil(a*(1-Math.max(0,n.clientY-r.top)/o)):n.clientY>r.bottom-o&&(i=Math.ceil(a*(1-Math.max(0,r.bottom-n.clientY)/o))),!i)return!1;const s=t.scrollTop;return t.scrollTop+=i,t.scrollTop!==s}function YN(e){let t=e instanceof Element?e.parentElement:null;for(;t&&t!==document.body&&t!==document.documentElement;){const n=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n.overflowY)&&t.scrollHeight>t.clientHeight)return t;t=t.parentElement}return document.scrollingElement||document.documentElement}function QE(e){return e?document.querySelector(`.bai-bai-regex-vue-list[data-regex-type="${e}"]`):null}function XE(e){if(!e)return null;if(typeof e.clientX=="number"&&typeof e.clientY=="number")return{clientX:e.clientX,clientY:e.clientY};const t=e.touches?.[0]??e.changedTouches?.[0];return t&&typeof t.clientX=="number"&&typeof t.clientY=="number"?{clientX:t.clientX,clientY:t.clientY}:null}function _p(e,t=U()){t.dragging=!!e,document.body?.classList.toggle(si,!!e)}function Kr(e){document.body?.classList.toggle("bai-bai-regex-drag-cursor-active",!!e),e||yp()}function QN(e){const t=e instanceof HTMLElement?e.closest(".bai-bai-regex-group"):null;document.querySelector(`.${is}`)!==t&&(yp(),t instanceof HTMLElement&&t.classList.add(is))}function yp(){document.querySelectorAll(`.${is}`).forEach(e=>{e.classList.remove(is)})}function XN(){if(document.getElementById(zc))return;const e=document.createElement("style");e.id=zc,e.textContent=`
.bai-bai-regex-vue-list {
    gap: 2px;
}

.bai-bai-regex-groups {
    gap: 2px;
}

.bai-bai-regex-list-toolbar {
    justify-content: stretch;
    margin-bottom: 4px;
    gap: 4px;
}

.bai-bai-regex-list-toolbar-btn {
    cursor: pointer;
    text-align: center;
    padding: 6px;
    border: 1px dashed var(--SmartThemeBorderColor);
    border-radius: 10px;
    opacity: 0.7;
    transition: opacity 0.2s, background-color 0.2s;
    flex: 1;
}

.bai-bai-regex-list-toolbar-btn:not(.disabled):hover {
    opacity: 1;
    background-color: var(--SmartThemeBlurTintColor);
}

.bai-bai-regex-list-toolbar-btn.disabled {
    cursor: default;
    opacity: 0.35;
}

.bai-bai-regex-move-group-popup {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.bai-bai-regex-move-group-label {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.bai-bai-regex-move-group-select {
    width: 100%;
}

.bai-bai-regex-empty-list {
    font-size: 0.95em;
    opacity: 0.7;
    text-align: center;
}

#regex_container #saved_regex_scripts,
#regex_container #saved_scoped_scripts,
#regex_container #saved_preset_scripts,
.bai-bai-regex-vue-list,
.bai-bai-regex-vue-list *,
.bai-bai-regex-sortable-ghost,
.bai-bai-regex-sortable-chosen,
.bai-bai-regex-sortable-drag,
.bai-bai-regex-sortable-fallback {
    cursor: default !important;
}

.bai-bai-regex-vue-list .regex-script-label,
.bai-bai-regex-vue-list .regex_script_name {
    cursor: default !important;
}

.bai-bai-regex-vue-list .bai-bai-regex-script-drag-handle {
    cursor: grab !important;
    touch-action: none;
    user-select: none;
}

.bai-bai-regex-vue-list .bai-bai-regex-script-drag-handle:active {
    cursor: grabbing !important;
}

.bai-bai-regex-vue-list .menu_button,
.bai-bai-regex-vue-list .regex-toggle-on,
.bai-bai-regex-vue-list .regex-toggle-off,
.bai-bai-regex-vue-list .regex_bulk_checkbox,
.bai-bai-regex-vue-list .regex_script_expand {
    cursor: pointer !important;
}

.bai-bai-regex-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.bai-bai-regex-group-framed {
    border: 1px solid var(--SmartThemeBorderColor);
    border-radius: 10px;
    gap: 0;
    margin-top: 6px;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.bai-bai-regex-group-framed .bai-bai-regex-group-body {
    display: grid !important;
    grid-template-rows: 1fr;
    overflow: hidden;
    opacity: 1;
    padding: 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: grid-template-rows ${Rf}ms ease, opacity ${Rf}ms ease, background-color 0.15s ease;
}

.bai-bai-regex-group-collapsed .bai-bai-regex-group-body {
    grid-template-rows: 0fr;
    opacity: 0;
    pointer-events: none;
    transition-duration: ${JO}ms;
}

.bai-bai-regex-group-body-inner {
    min-height: 0;
    overflow: hidden;
}

.bai-bai-regex-group-list {
    gap: 0;
    min-height: 8px;
    transition: min-height 0.15s ease, background-color 0.15s ease;
}

body.${si} .bai-bai-regex-group-framed:not(.bai-bai-regex-group-collapsed) .bai-bai-regex-group-list-empty {
    min-height: 44px;
}

.bai-bai-regex-group.bai-bai-regex-drop-target {
    outline: 2px solid var(--SmartThemeQuoteColor);
    outline-offset: 1px;
}

.bai-bai-regex-group.bai-bai-regex-drop-target.bai-bai-regex-group-framed {
    border-color: var(--SmartThemeQuoteColor);
    box-shadow: 0 0 0 1px var(--SmartThemeQuoteColor);
}

.bai-bai-regex-group.bai-bai-regex-drop-target .bai-bai-regex-group-header,
.bai-bai-regex-group.bai-bai-regex-drop-target .bai-bai-regex-group-body {
    background-color: var(--SmartThemeChatTintColor);
}

.bai-bai-regex-group-framed .regex-script-label {
    border: none !important;
    border-radius: 0 !important;
    border-top: 1px solid var(--SmartThemeBorderColor) !important;
    margin: 0 !important;
    box-shadow: none !important;
    padding-left: 10px;
    padding-right: 10px;
}

.bai-bai-regex-group-framed .regex-script-label:first-child {
    border-top: none !important;
}

.bai-bai-regex-group-framed .regex-script-label:last-child {
    margin-bottom: 2px !important;
}

.bai-bai-regex-group-header {
    align-items: center;
    padding: 6px 10px;
    opacity: 0.95;
    background-color: var(--SmartThemeBlurTintColor);
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    border-bottom: 1px solid var(--SmartThemeBorderColor);
    cursor: pointer;
    user-select: none;
    touch-action: manipulation;
}

.bai-bai-regex-group-header:hover {
    background-color: var(--SmartThemeChatTintColor);
}

.bai-bai-regex-group-toggle {
    width: 18px;
    text-align: center;
    transition: transform 0.2s ease;
    display: inline-block;
}

.bai-bai-regex-group-title {
    align-items: end;
    gap: 4px;
    min-width: 0;
}

.bai-bai-regex-group-name {
    min-width: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.bai-bai-regex-group-count {
    flex: 0 0 auto;
    opacity: 0.75;
}

.bai-bai-regex-group-move-btn {
    flex: 0 0 auto;
}

.bai-bai-regex-vue-list .bai-bai-regex-group-move-btn.disabled {
    cursor: default !important;
    opacity: 0.35;
}

.bai-bai-regex-group-header.collapsed .bai-bai-regex-group-toggle {
    transform: rotate(-90deg);
}

.bai-bai-regex-group-header.collapsed {
    border-bottom: none;
    border-bottom-left-radius: 9px;
    border-bottom-right-radius: 9px;
    transition: border-radius 0.2s;
}

.bai-bai-regex-sortable-ghost {
    opacity: 0.35;
}

body.${si} #regex_container .bai-bai-regex-sortable-ghost,
body.${si} #regex_container .bai-bai-regex-sortable-chosen {
    visibility: hidden !important;
}

.bai-bai-regex-sortable-chosen {
    cursor: grabbing !important;
}

.bai-bai-regex-sortable-drag {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
    cursor: grabbing !important;
    opacity: 0.95;
}

.bai-bai-regex-sortable-fallback {
    cursor: grabbing !important;
}

.${tE} {
    position: fixed;
    height: 2px;
    border-radius: 999px;
    pointer-events: none;
    z-index: 50001;
    background: var(--SmartThemeQuoteColor);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25), 0 0 10px var(--SmartThemeQuoteColor);
}

body.bai-bai-regex-drag-cursor-active #regex_container,
body.bai-bai-regex-drag-cursor-active #regex_container *,
body.bai-bai-regex-drag-cursor-active .bai-bai-regex-sortable-ghost,
body.bai-bai-regex-drag-cursor-active .bai-bai-regex-sortable-chosen,
body.bai-bai-regex-drag-cursor-active .bai-bai-regex-sortable-drag,
body.bai-bai-regex-drag-cursor-active .bai-bai-regex-sortable-fallback {
    cursor: grabbing !important;
}

@media (prefers-reduced-motion: reduce) {
    .bai-bai-regex-group-framed,
    .bai-bai-regex-group-framed .bai-bai-regex-group-body,
    .bai-bai-regex-group-list,
    .bai-bai-regex-group-toggle {
        transition: none !important;
    }
}
`,document.head.append(e)}function xr(e){switch(e){case H.GLOBAL:return"global";case H.PRESET:return"preset";case H.SCOPED:return"scoped";default:return"unknown"}}function Ep(e){switch(e){case"global":return H.GLOBAL;case"preset":return H.PRESET;case"scoped":return H.SCOPED;default:return null}}function ho(){return(!g.regexListGroups||typeof g.regexListGroups!="object")&&(g.regexListGroups={}),(!g.regexListGroups.scopes||typeof g.regexListGroups.scopes!="object")&&(g.regexListGroups.scopes={}),j[re].regexListGroups=g.regexListGroups,g.regexListGroups}function pi(e){switch(e){case H.GLOBAL:return"global";case H.SCOPED:return`scoped:${Xt?.[$e]?.avatar||"none"}`;case H.PRESET:return _n(io(),so());default:return`unknown:${e}`}}function _n(e,t){return`preset:${e||"unknown"}:${t||"unknown"}`}function JN(){return d`默认分组`}function il(e){const t=typeof e=="string"?e.trim():"";return!t||t==="Ungrouped"?JN():t}function Ue(e){const t=ho(),n=pi(e);(!t.scopes[n]||typeof t.scopes[n]!="object")&&(t.scopes[n]={});const r=t.scopes[n];return Array.isArray(r.groups)||(r.groups=[]),(!r.scripts||typeof r.scripts!="object")&&(r.scripts={}),(!r.ungrouped||typeof r.ungrouped!="object")&&(r.ungrouped={}),r}function Aa(e){e.groups=e.groups.filter(t=>t&&typeof t=="object"&&t.id&&t.id!==Ce&&t.id!==$t).map((t,n)=>({id:String(t.id),name:String(t.name||d`Unnamed group`),order:Number.isFinite(Number(t.order))?Number(t.order):n,collapsed:!!t.collapsed})).sort((t,n)=>t.order-n.order).map((t,n)=>({...t,order:n})),(!e.ungrouped||typeof e.ungrouped!="object")&&(e.ungrouped={}),e.ungrouped={name:il(e.ungrouped.name),collapsed:!!e.ungrouped.collapsed}}function gs(e,t){if(!e||typeof e!="object"||Array.isArray(e)||Number(e.version)!==as)return null;const n=new Set,r=(Array.isArray(e.groups)?e.groups:[]).filter(l=>l&&typeof l=="object"&&l.id).map((l,c)=>({id:String(l.id),name:String(l.name||d`Unnamed group`),order:Number.isFinite(Number(l.order))?Number(l.order):c,collapsed:!!l.collapsed})).filter(l=>l.id===Ce||l.id===$t||n.has(l.id)?!1:(n.add(l.id),!0)).sort((l,c)=>l.order-c.order).map((l,c)=>({...l,order:c})),o=new Set(r.map(l=>l.id)),a=e.scripts&&typeof e.scripts=="object"&&!Array.isArray(e.scripts)?e.scripts:{},i=new Map([...r.map(l=>[l.id,[]]),[Ce,[]]]);for(let l=0;l<(Array.isArray(t)?t.length:0);l++){const c=t[l]?.id;if(!c)continue;const u=a[c],p=o.has(u?.groupId)?u.groupId:Ce,b=Number.isFinite(Number(u?.order))?Number(u.order):l;i.get(p).push({scriptId:c,order:b,index:l})}const s={};for(const[l,c]of i)c.sort((u,p)=>u.order-p.order||u.index-p.index).forEach((u,p)=>{s[u.scriptId]={groupId:l,order:p}});return{groups:r,scripts:s,ungrouped:{name:il(e.ungrouped?.name),collapsed:!!e.ungrouped?.collapsed}}}function JE(e,t){const n=gs({version:as,groups:Array.isArray(e?.groups)?structuredClone(e.groups):[],scripts:e?.scripts&&typeof e.scripts=="object"?structuredClone(e.scripts):{},ungrouped:e?.ungrouped&&typeof e.ungrouped=="object"?structuredClone(e.ungrouped):{}},t);return n?{version:as,...n}:null}function ZN(e){return e?.extensions?.baibaiToolkit?.regexGroups}function eH(e,t){return!e||typeof e!="object"||!t?!1:(e.extensions=e.extensions&&typeof e.extensions=="object"?e.extensions:{},e.extensions.baibaiToolkit=e.extensions.baibaiToolkit&&typeof e.extensions.baibaiToolkit=="object"?e.extensions.baibaiToolkit:{},e.extensions.baibaiToolkit.regexGroups=t,!0)}function ZE({force:e=!1}={}){const t=io(),n=so();if(!t||!n)return!1;const r=ke(),o=_n(t,n);if(!e&&r.regexPresetGroupHydratedScopeKey===o)return!1;r.regexPresetGroupHydratedScopeKey=o;const a=gr(t),i=he(H.PRESET),s=a?.readPresetExtensionField({name:n,path:eE}),l=ho(),c=l.scopes[o];if(s!=null){const p=gs(s,i);if(!p)return console.warn(`${T} Ignored invalid portable regex group data for preset "${n}"`),!1;const b=JSON.stringify(c??null)!==JSON.stringify(p);return l.scopes[o]=p,b&&pr({captureCurrentPreset:!1}),b}if(!c||typeof c!="object")return!1;const u=gs({version:as,...c},i);return u?(l.scopes[o]=u,pr(),!0):!1}function tH(e,t){const r=gr(t)?.getSelectedPresetName();if(!r||!e||typeof e!="object")return!1;const o=_n(t,r),a=ho().scopes[o];if(!a||typeof a!="object")return!1;const i=Array.isArray(e.extensions?.regex_scripts)?e.extensions.regex_scripts:[],s=JE(a,i);return eH(e,s)}function nH(e,t,n){if(!n||!e||typeof e!="object")return!1;const r=ZN(e);if(r===void 0)return!1;const o=Array.isArray(e.extensions?.regex_scripts)?e.extensions.regex_scripts:[],a=gs(r,o);if(!a)return console.warn(`${T} Ignored invalid imported regex group data for preset "${n}"`),!1;const i=_n(t,n),s=ho();s.scopes[i]=a;const l=ke();return io()===t&&so()===n&&(l.regexPresetGroupHydratedScopeKey=i),pr({captureCurrentPreset:!1}),!0}function rH(){const e=io(),t=so();if(!e||!t)return null;const n=_n(e,t),r=ho().scopes[n];if(!r||typeof r!="object")return null;const o=JE(r,he(H.PRESET));return o?{apiId:e,presetName:t,scopeKey:n,value:o}:null}function eS(e,t){return e===$t?$t:e===Ce||!t.has(e)?Ce:e}function oH(e,t){if(!e?.scripts||typeof e.scripts!="object"||!Array.isArray(t))return!1;const n=new Set((e.groups??[]).map(a=>a.id)),r=new Map;let o=!1;for(const a of t){const i=a?.id;if(!i)continue;const s=e.scripts[i],l=eS(s?.groupId,n),c=r.get(l)??0;r.set(l,c+1),!(!s||typeof s!="object")&&(s.groupId!==l||Number(s.order)!==c)&&(s.groupId=l,s.order=c,o=!0)}return o}function ot(){j[re].regexListGroups=g.regexListGroups,pr()}async function aH(e){const t=await fe(d`Regex group name`,ge.INPUT,"",{okButton:d`Save`,cancelButton:d`Cancel`});if(typeof t!="string")return;const n=t.trim();if(!n){toastr.warning(d`Group name cannot be empty.`);return}const r=Ue(e);r.groups.push({id:lt(),name:n,order:r.groups.length,collapsed:!1}),ot(),ue()}async function iH(e,t){const n=Ue(e),r=t===Ce?n.ungrouped:n.groups.find(i=>i.id===t);if(!r)return;const o=await fe(d`Regex group name`,ge.INPUT,r.name||"",{okButton:d`Save`,cancelButton:d`Cancel`});if(typeof o!="string")return;const a=o.trim();if(!a){toastr.warning(d`Group name cannot be empty.`);return}r.name=a,ot(),ue()}function Jf(e,t,n){if(t===Ce||t===$t)return;const r=Math.sign(Number(n));if(r===0)return;const o=Ue(e);Aa(o);const a=o.groups.findIndex(l=>l.id===t),i=a+r;if(a<0||i<0||i>=o.groups.length)return;const[s]=o.groups.splice(a,1);o.groups.splice(i,0,s),o.groups=o.groups.map((l,c)=>({...l,order:c})),ot(),ue()}async function sH(e,t){if(t===Ce)return;const n=await fe(`要删除这个正则分组吗？

选择“否”会把组内正则移动到默认组。
选择“是”会连同组内正则一起删除。`,ge.CONFIRM,"",{okButton:"是",cancelButton:"取消",defaultResult:Kn.NEGATIVE,customButtons:[{text:"否",result:Kn.CUSTOM1}]});if(n!==Kn.AFFIRMATIVE&&n!==Kn.CUSTOM1)return;const r=Ue(e),o=n===Kn.AFFIRMATIVE;if(r.groups=r.groups.filter(a=>a.id!==t),o){const a=he(e),i=new Set;for(let s=a.length-1;s>=0;s--){const l=a[s]?.id;r.scripts?.[l]?.groupId===t&&(i.add(l),a.splice(s,1))}for(const s of i)delete r.scripts[s],delete U().state?.selectedIds?.[s];i.size>0&&(await Le(e,a),st())}else for(const a of Object.values(r.scripts))a?.groupId===t&&(a.groupId=Ce);ot(),ue()}function Sp(e,t){const n=Ue(e),r=t===Ce?n.ungrouped:n.groups.find(o=>o.id===t);r&&(r.collapsed=!r.collapsed,ot(),lH(e,t,r.collapsed)||ue())}function lH(e,t,n){const r=U(),o=xr(e),a=r.state?.lists?.[o]?.groups?.find(i=>i.id===t);return a?(a.collapsed=!!n,!0):!1}function cH(e,t){const n=U();!n.state||!e||(t?n.state.selectedIds[e]=!0:delete n.state.selectedIds[e],Tt())}function vp(){const e=U();if(!e.state)return;const t=new Set;for(const{scriptType:n}of pt())for(const r of he(n))r?.id&&t.add(r.id);for(const n of Object.keys(e.state.selectedIds))t.has(n)||delete e.state.selectedIds[n]}function _o(){const t=U().state?.selectedIds??{},n=[];for(const{scriptType:r}of pt()){const o=he(r);for(let a=0;a<o.length;a++){const i=o[a];i?.id&&t[i.id]&&n.push({scriptType:r,scripts:o,index:a,script:i})}}return n}function uH(e,t){const n=e?.selectedIds??{};return(t?.groups??[]).reduce((r,o)=>r+(o?.scripts??[]).filter(a=>a?.id&&n[a.id]).length,0)}function tS(e){const t=U(),n=xr(e),r=t.state?.lists?.[n],o=t.state?.selectedIds??{};if(!r)return _o().filter(i=>i.scriptType===e).map(i=>i.script);const a=[];for(const i of r.groups??[])for(const s of i.scripts??[])s?.id&&o[s.id]&&a.push(s);return a}function nS(){return pt().flatMap(({scriptType:e})=>he(e)).map(e=>e?.id).filter(Boolean)}function dH(){const e=U();if(!e.state)return;const t=nS(),n=t.length>0&&t.every(r=>e.state.selectedIds[r]);for(const r of Object.keys(e.state.selectedIds))delete e.state.selectedIds[r];if(!n)for(const r of t)e.state.selectedIds[r]=!0;Tt()}async function zl(e,t,n){const r=yo(e,t);if(!r)return;const o=rS(e,t),a=!!(r.script.disabled??!1),i=o?!!(o.disabled??!1):a;if(i!==n){o?o.disabled=n:r.script.disabled=n;try{await Le(e,r.scripts),Sn(e),st()}catch(s){o?o.disabled=i:r.script.disabled=a,console.debug(`${T} Failed to save regex script toggle`,s),toastr.error(d`Failed to save regex script state. See console for details.`)}}}async function Vl(e,t,n){const r=U(),o=xr(e),a=r.state?.lists?.[o]?.groups?.find(c=>c.id===t);if(!a||a.scripts.length===0)return;const i=he(e),s=a.scripts.filter(c=>c?.id&&!!(c.disabled??!1)!==n);if(s.length===0)return;const l=new Map(s.map(c=>[c.id,!!(c.disabled??!1)]));for(const c of s)c.disabled=n;try{await Le(e,i),Sn(e),st()}catch(c){for(const u of s)u.disabled=l.get(u.id)??!!(u.disabled??!1);console.debug(`${T} Failed to save regex group script state`,c),toastr.error(d`Failed to save regex script state. See console for details.`)}}function rS(e,t){const n=U(),r=xr(e),o=n.state?.lists?.[r];if(!o||!t)return null;for(const a of o.groups??[]){const i=a.scripts?.find(s=>s?.id===t);if(i)return i}return null}async function Zf(e){const t=_o().filter(r=>!!(r.script.disabled??!1)===e);if(t.length===0){toastr.warning(e?d`No regex scripts selected for enabling.`:d`No regex scripts selected for disabling.`);return}const n=new Set;for(const r of t)r.script.disabled=!e,n.add(r.scriptType);try{for(const r of n)await Le(r,he(r)),Sn(r);ue(),st()}catch(r){console.debug(`${T} Failed to bulk toggle regex scripts`,r),toastr.error(d`Failed to save regex script state. See console for details.`),ue()}}async function Ul(e,t,n){e===n||!Tp(n)||!await fe(cS(n),ge.CONFIRM)||await pH(e,t,n)}async function pH(e,t,n){const r=yo(e,t);if(!r||e===n)return;const o=he(n),[a]=r.scripts.splice(r.index,1);if(a){o.push(a),oS(e,n,a.id);try{await Le(e,r.scripts),await Le(n,o),Sn(n),delete U().state?.selectedIds?.[a.id],ue(),st()}catch(i){const s=o.indexOf(a);s!==-1&&o.splice(s,1),r.scripts.splice(r.index,0,a),console.debug(`${T} Failed to move regex script`,i),toastr.error(d`Failed to move regex script. See console for details.`),ue()}}}async function Wl(e){const t=_o();if(t.length===0){toastr.warning(d`No regex scripts selected for moving.`);return}if(!Tp(e)||!await fe(_H(e),ge.CONFIRM))return;const r=new Set(t.map(i=>i.script.id)),o=[];for(const{scriptType:i}of pt()){if(i===e)continue;const s=he(i);for(let l=s.length-1;l>=0;l--){const c=s[l];c?.id&&r.has(c.id)&&(s.splice(l,1),o.unshift({fromType:i,script:c}))}}if(o.length===0)return;const a=he(e);for(const i of o)a.push(i.script),oS(i.fromType,e,i.script.id);try{for(const{scriptType:i}of pt())await Le(i,he(i));for(const i of r)delete U().state?.selectedIds?.[i];Sn(e),ue(),st()}catch(i){console.debug(`${T} Failed to bulk move regex scripts`,i),toastr.error(d`Failed to move regex script. See console for details.`),ue()}}async function mH(e){const t=tS(e).filter(s=>s?.id);if(t.length===0){toastr.warning(d`No regex scripts selected for moving.`);return}const n=fH(e);if(n.length===0){toastr.warning(d`No regex groups available.`);return}const r=$('<div class="bai-bai-regex-move-group-popup"></div>'),o=$('<label class="bai-bai-regex-move-group-label"></label>').text(d`目标分组`),a=$('<select class="text_pole bai-bai-regex-move-group-select"></select>');for(const s of n)$("<option></option>").val(s.id).text(s.name).appendTo(a);r.append($('<div class="bai-bai-regex-move-group-count"></div>').text(d`已选正则：${t.length}`),o.append(a)),await fe(r,ge.CONFIRM,"",{okButton:d`移动`,cancelButton:d`取消`})&&await bH(e,String(a.val()||""))}function fH(e){const t=Ue(e);return Aa(t),[...t.groups.map(n=>({id:n.id,name:n.name||d`Unnamed group`})),{id:Ce,name:il(t.ungrouped?.name)}]}function gH(e,t){if(t===Ce)return!0;const n=Ue(e);return Aa(n),n.groups.some(r=>r.id===t)}async function bH(e,t){const n=tS(e).filter(p=>p?.id);if(n.length===0){toastr.warning(d`No regex scripts selected for moving.`);return}if(!gH(e,t)){toastr.error(d`Target regex group was not found.`);return}const r=he(e),o=xr(e),a=Ue(e),i=r.slice(),s=xp(a.scripts),l=new Set(n.map(p=>p.id)),c=Object.entries(a.scripts??{}).filter(([p,b])=>!l.has(p)&&b?.groupId===t).map(([,p])=>Number(p.order)).filter(p=>Number.isFinite(p));let u=c.length>0?Math.max(...c)+1:0;for(const p of n)a.scripts[p.id]={groupId:t,order:u},u+=1;hH(r,a);try{ot(),ue(),await vS(o);for(const p of l)delete U().state?.selectedIds?.[p];ue()}catch(p){r.splice(0,r.length,...i),mi(a,s),ot(),console.debug(`${T} Failed to bulk move regex scripts to group`,p),toastr.error(d`Failed to move regex script. See console for details.`),ue()}}function hH(e,t){if(!Array.isArray(e)||!t)return!1;Aa(t);const n=new Set((t.groups??[]).map(i=>i.id)),r=[$t,...(t.groups??[]).map(i=>i.id),Ce],o=new Map(r.map(i=>[i,[]]));for(let i=0;i<e.length;i++){const s=e[i],l=s?.id?t.scripts?.[s.id]:null,c=eS(l?.groupId,n),u=Number.isFinite(Number(l?.order))?Number(l.order):i;o.has(c)||o.set(c,[]),o.get(c).push({script:s,order:u,index:i})}const a=[];for(const i of r)(o.get(i)??[]).sort((l,c)=>l.order-c.order||l.index-c.index).forEach(l=>a.push(l.script));return a.length!==e.length?!1:(e.splice(0,e.length,...a),!0)}function Tp(e){return e!==H.SCOPED?!0:$e===void 0?(toastr.error(d`No character selected.`),!1):St?(toastr.error(d`Cannot edit scoped scripts in group chats.`),!1):!0}function _H(e){switch(e){case H.GLOBAL:return d`Are you sure you want to move the selected regex scripts to global?`;case H.SCOPED:return d`Are you sure you want to move the selected regex scripts to scoped?`;case H.PRESET:return d`Are you sure you want to move the selected regex scripts to preset?`;default:return d`Are you sure you want to move the selected regex scripts?`}}function oS(e,t,n){const r=Ue(e),o=Ue(t);delete r.scripts[n],o.scripts[n]={groupId:Ce,order:Object.keys(o.scripts).length},ot()}async function yH(e,t){await fe(d`Are you sure you want to delete this regex script?`,ge.CONFIRM)&&await EH(e,t)}async function EH(e,t){const n=yo(e,t);if(!n)return;const[r]=n.scripts.splice(n.index,1);try{await Le(e,n.scripts),delete Ue(e).scripts[t],delete U().state?.selectedIds?.[t],ot(),ue(),st()}catch(o){r&&n.scripts.splice(n.index,0,r),console.debug(`${T} Failed to delete regex script`,o),toastr.error(d`Failed to delete regex script. See console for details.`),ue()}}async function SH(){const e=_o();if(e.length===0){toastr.warning(d`No regex scripts selected for deletion.`);return}if(!await fe(d`Are you sure you want to delete the selected regex scripts?`,ge.CONFIRM))return;const n=new Set(e.map(r=>r.script.id));try{for(const{scriptType:r}of pt()){const o=he(r);for(let i=o.length-1;i>=0;i--)n.has(o[i]?.id)&&o.splice(i,1);const a=Ue(r);for(const i of n)delete a.scripts[i];await Le(r,o)}for(const r of n)delete U().state?.selectedIds?.[r];ot(),ue(),st()}catch(r){console.debug(`${T} Failed to bulk delete regex scripts`,r),toastr.error(d`Failed to delete regex script. See console for details.`),ue()}}function vH(e,t){const n=yo(e,t);if(!n)return;const r=`regex-${uS(n.script.scriptName||"script")}.json`;su(JSON.stringify(n.script,null,4),r,"application/json")}function TH(){const e=_o().map(n=>n.script);if(e.length===0){toastr.warning(d`No regex scripts selected for export.`);return}const t=`regex-${new Date().toISOString()}.json`;su(JSON.stringify(e,null,4),t,"application/json")}function yo(e,t){const n=he(e),r=n.findIndex(o=>o?.id===t);return r===-1?null:{scriptType:e,scripts:n,index:r,script:n[r]}}async function Kl(e){e===H.SCOPED&&!Tp(e)||await iS(e,xH())}async function aS(e,t){const n=yo(e,t);n&&await iS(e,n.script)}function xH(){return{id:lt(),scriptName:"",findRegex:"",replaceString:"",trimStrings:[],placement:[1],disabled:!1,markdownOnly:!0,promptOnly:!1,runOnEdit:!0,substituteRegex:Sg.NONE,minDepth:null,maxDepth:null}}async function iS(e,t){if(!!yo(e,t.id)&&!t.scriptName){toastr.error("This script doesn't have a name! Please delete it.");return}const r=$(await da("regex","editor"));if(_S(r,t),yS(r),!await fe(r,ge.CONFIRM,"",{okButton:d`Save`,cancelButton:d`Cancel`,allowVerticalScrolling:!0}))return;const a=ES(r,t);if(!a.scriptName){toastr.error(d`Could not save regex script: The script name was undefined or empty!`);return}a.findRegex.length===0&&toastr.warning(d`This regex script will not work, but was saved anyway: A find regex isn't present.`),a.placement.length===0&&toastr.warning(d`This regex script will not work, but was saved anyway: One "Affects" checkbox must be selected!`);const i=he(e),s=i.findIndex(c=>c?.id===a.id),l=s===-1?null:{...i[s]};s===-1?i.push(a):Object.assign(i[s],a);try{await Le(e,i),Sn(e);const c=sS(e,a.id,{pendingAssignment:s===-1}),u=wH(e);(c||u)&&ot(),s===-1?await GE():eg(e,a.id,i[s]),st()}catch(c){if(s===-1){const u=i.findIndex(p=>p?.id===a.id);u!==-1&&i.splice(u,1)}else Object.assign(i[s],l),eg(e,a.id,i[s]);console.debug(`${T} Failed to save regex script`,c),toastr.error(d`Failed to save regex script. See console for details.`),s===-1&&ue()}}function eg(e,t,n){const r=rS(e,t);return!r||!n?!1:(r!==n&&Object.assign(r,n),!0)}function wH(e){const t=U(),n=xr(e),r=t.state?.lists?.[n];if(!r)return!1;const o=Ue(e);let a=!1;for(const i of r.groups??[]){const s=i.isPendingAssignment?$t:i.isUngrouped?Ce:i.id;let l=0;for(const c of i.scripts??[]){if(!c?.id)continue;const u=o.scripts[c.id],p={groupId:s,order:l};(u?.groupId!==p.groupId||Number(u?.order)!==p.order)&&(o.scripts[c.id]=p,a=!0),l+=1}}return a}function sS(e,t,{pendingAssignment:n=!1}={}){if(!t)return!1;const r=Ue(e),o=r.scripts[t];if(!o||typeof o!="object")return r.scripts[t]={groupId:n?$t:Ce,order:Object.keys(r.scripts).length},!0;let a=!1;return o.groupId||(o.groupId=Ce,a=!0),Number.isFinite(Number(o.order))||(o.order=Object.keys(r.scripts).length,a=!0),a}async function CH(){if(pp()){for(const{selector:e,scriptType:t}of pt()){const n=document.querySelector(e);if(n instanceof HTMLElement){n.replaceChildren();for(const r of he(t))await lS(r,t)}}Tt()}}function kH(){if(h[Zi])return;const e=t=>{if(!g.regexQuickOperationOptimizationEnabled)return;const n=t.target instanceof HTMLInputElement?t.target:null;!n||n.id!=="import_regex_file"||(Yo(t),PH(n))};h[Zi]=e,document.addEventListener("change",e,!0)}function AH(){const e=h[Zi];e&&(document.removeEventListener("change",e,!0),delete h[Zi])}async function PH(e){const t=Array.from(e.files??[]);if(t.length===0){e.value="";return}let n=H.GLOBAL;try{const r=$(await da("regex","importTarget"));r.find("#regex_import_target_global").on("input",()=>n=H.GLOBAL),r.find("#regex_import_target_scoped").on("input",()=>n=H.SCOPED),r.find("#regex_import_target_preset").on("input",()=>n=H.PRESET),await fe(r,ge.TEXT);const o=[];for(const s of t)o.push(...await LH(s));if(o.length===0)return;const a=he(n),i=[];for(const s of o){const l=IH(s);l&&(a.push(l),i.push(l))}if(i.length===0)return;try{await Le(n,a)}catch(s){for(const l of i){const c=a.indexOf(l);c!==-1&&a.splice(c,1)}throw s}if(Vn()){for(const s of i)sS(n,s.id),toastr.success(d`Regex script "${s.scriptName}" imported.`);ot(),await GE()}else for(const s of i)await lS(s,n),toastr.success(d`Regex script "${s.scriptName}" imported.`);Tt(),console.debug(`${T} Imported ${i.length} regex scripts without list rebuild`)}catch(r){console.debug(`${T} Failed to import regex scripts`,r),toastr.error(d`Failed to import regex scripts. See console for details.`)}finally{e.value=""}}async function LH(e){if(!e)return toastr.error("No file provided."),[];try{const t=JSON.parse(await bv(e));return Array.isArray(t)?t:[t]}catch(t){return console.log(t),toastr.error("Invalid JSON file."),[]}}function IH(e){try{if(!e||typeof e!="object"||Array.isArray(e))throw new Error("Invalid regex object.");if(!e.scriptName)throw new Error("No script name provided.");return{...e,id:lt()}}catch(t){return console.log(t),toastr.error(d`Invalid regex object.`),null}}async function lS(e,t){const n=fS(t),r=n?document.querySelector(n):null;if(!(r instanceof HTMLElement))return;const a=(await RH()).clone();MH(a,e),$(r).append(a)}async function RH(){const e=ke();return e.scriptTemplate||(e.scriptTemplate=$(await da("regex","scriptTemplate"))),e.scriptTemplate}function MH(e,t){t.id||(t.id=lt()),e.attr("id",t.id),TS(e.get(0),t),e.find(".disable_regex").on("input",async function(){const n=e.get(0);n instanceof HTMLElement&&await gS(n,!!$(this).prop("checked"))}),e.find(".regex-toggle-on").on("click",function(){e.find(".disable_regex").prop("checked",!0).trigger("input")}),e.find(".regex-toggle-off").on("click",function(){e.find(".disable_regex").prop("checked",!1).trigger("input")}),e.find(".edit_existing_regex").on("click",async function(){const n=e.get(0);n instanceof HTMLElement&&await hS(n)}),e.find(".move_to_global").on("click",async function(){await jl(e.get(0),H.GLOBAL)}),e.find(".move_to_scoped").on("click",async function(){await jl(e.get(0),H.SCOPED)}),e.find(".move_to_preset").on("click",async function(){await jl(e.get(0),H.PRESET)}),e.find(".export_regex").on("click",function(){BH(e.get(0))}),e.find(".delete_regex").on("click",async function(){const n=e.get(0);n instanceof HTMLElement&&await bS(n)}),e.find(".regex_bulk_checkbox").on("change",function(){Tt()}),e.find('input[name="regex_expand"]').on("change",function(){if(!(this instanceof HTMLInputElement)||!this.checked)return;const n=r=>{r.target instanceof HTMLElement&&r.target.closest(".regex-script-label")||(this.checked=!1,document.removeEventListener("click",n))};setTimeout(()=>{document.addEventListener("click",n,{passive:!0,once:!1})},0)})}async function jl(e,t){if(!(e instanceof HTMLElement))return;const n=Eo(e);if(!n||n.scriptType===t)return;if(t===H.SCOPED){if($e===void 0){toastr.error(d`No character selected.`);return}if(St){toastr.error(d`Cannot edit scoped scripts in group chats.`);return}}await fe(cS(t),ge.CONFIRM)&&await OH(e,t)}function cS(e){switch(e){case H.GLOBAL:return d`Are you sure you want to move this regex script to global?`;case H.SCOPED:return d`Are you sure you want to move this regex script to scoped?`;case H.PRESET:return d`Are you sure you want to move this regex script to preset?`;default:return d`Are you sure you want to move this regex script?`}}async function OH(e,t){const n=Eo(e),r=fS(t),o=r?document.querySelector(r):null;if(!n||!(o instanceof HTMLElement))return;const a=he(t),[i]=n.scripts.splice(n.index,1);if(i){a.push(i);try{await Le(t,a),await Le(n.scriptType,n.scripts),Sn(t);const s=e.querySelector(".regex_bulk_checkbox");s instanceof HTMLInputElement&&(s.checked=!1),o.append(e),Tt(),st()}catch(s){const l=a.indexOf(i);l!==-1&&a.splice(l,1),n.scripts.includes(i)||n.scripts.splice(n.index,0,i);try{await Le(n.scriptType,n.scripts),await Le(t,a)}catch(c){console.debug(`${T} Failed to roll back regex script move`,c)}console.debug(`${T} Failed to move regex script`,s),toastr.error(d`Failed to move regex script. See console for details.`)}}}function BH(e){if(!(e instanceof HTMLElement))return;const t=Eo(e);if(!t)return;const n=`regex-${uS(t.script.scriptName||"script")}.json`,r=JSON.stringify(t.script,null,4);su(r,n,"application/json")}function uS(e){return String(e).replace(/[\s.<>:"/\\|?*\x00-\x1F\x7F]/g,"_").toLowerCase()}function jr(e=80){if(!g.regexQuickOperationOptimizationEnabled)return;const t=ke();clearTimeout(t.nativeSortableGuardTimer),t.nativeSortableGuardTimer=setTimeout(()=>{t.nativeSortableGuardTimer=null,DH()},e)}function DH(){if(!g.regexQuickOperationOptimizationEnabled)return;const e=U();if(!!!(e.installing||e.app||fp()))return;const n=dS(),r=ke();n&&(r.nativeSortableGuardRetries??0)<40?(r.nativeSortableGuardRetries=(r.nativeSortableGuardRetries??0)+1,jr(250)):r.nativeSortableGuardRetries=0}function dS(){if(typeof $!="function"||typeof $.fn?.sortable!="function")return!0;let e=!1;for(const{selector:t}of pt()){const n=document.querySelector(t);if(!(n instanceof HTMLElement)){e=!0;continue}try{if(!mS(n)){e=!0;continue}$(n).sortable("option","disabled")!==!0&&$(n).sortable("disable")}catch(r){console.debug(`${T} Failed to disable native regex sortable`,r)}}return e}function pS(){if(!(typeof $!="function"||typeof $.fn?.sortable!="function"))for(const{selector:e}of pt()){const t=document.querySelector(e);try{t instanceof HTMLElement&&mS(t)&&$(t).sortable("enable")}catch(n){console.debug(`${T} Failed to enable native regex sortable`,n)}}}function mS(e){return typeof $!="function"?!1:!!($(e).data("ui-sortable")||$(e).data("sortable"))}function pt(){return[{selector:"#saved_regex_scripts",scriptType:H.GLOBAL},{selector:"#saved_scoped_scripts",scriptType:H.SCOPED},{selector:"#saved_preset_scripts",scriptType:H.PRESET}]}function fS(e){return pt().find(t=>t.scriptType===e)?.selector??null}function $H(e){if(!g.regexQuickOperationOptimizationEnabled||Vn())return;const t=e.target instanceof Element?e.target:null,n=t?.closest(`${bo} ${sB}`);if(!(n instanceof HTMLElement))return;const r=t.closest(".edit_existing_regex");if(r&&n.contains(r)){Yo(e),hS(n);return}const o=t.closest(".regex-toggle-on, .regex-toggle-off");if(o&&n.contains(o)){Yo(e),NH(n,o);return}const a=t.closest(".delete_regex");a&&n.contains(a)&&(Yo(e),bS(n))}function Yo(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()}async function NH(e,t){const n=t.classList.contains("regex-toggle-on");await gS(e,n)}async function gS(e,t){const n=Eo(e);if(!n)return;const r=!!(n.script.disabled??!1);n.script.disabled=t,eu(e,t);try{await Le(n.scriptType,n.scripts),Sn(n.scriptType),st()}catch(o){n.script.disabled=r,eu(e,r),console.debug(`${T} Failed to save regex script toggle`,o),toastr.error(d`Failed to save regex script state. See console for details.`)}}async function bS(e){if(!await fe(d`Are you sure you want to delete this regex script?`,ge.CONFIRM))return;const n=Eo(e);if(!n)return;const[r]=n.scripts.splice(n.index,1);try{await Le(n.scriptType,n.scripts),e.remove(),Tt(),st()}catch(o){r&&n.scripts.splice(n.index,0,r),console.debug(`${T} Failed to delete regex script`,o),toastr.error(d`Failed to delete regex script. See console for details.`)}}async function hS(e){const t=Eo(e);if(!t)return;if(Vn()){await aS(t.scriptType,t.scriptId);return}if(!t.script.scriptName){toastr.error("This script doesn't have a name! Please delete it.");return}const n=$(await da("regex","editor"));if(_S(n,t.script),yS(n),!await fe(n,ge.CONFIRM,"",{okButton:d`Save`,cancelButton:d`Cancel`,allowVerticalScrolling:!0}))return;const o=ES(n,t.script);if(!o.scriptName){toastr.error(d`Could not save regex script: The script name was undefined or empty!`);return}o.findRegex.length===0&&toastr.warning(d`This regex script will not work, but was saved anyway: A find regex isn't present.`),o.placement.length===0&&toastr.warning(d`This regex script will not work, but was saved anyway: One "Affects" checkbox must be selected!`);const a=t.scripts[t.index];t.scripts[t.index]=o;try{await Le(t.scriptType,t.scripts),Sn(t.scriptType),TS(e,o),st()}catch(i){t.scripts[t.index]=a,console.debug(`${T} Failed to save regex script edit`,i),toastr.error(d`Failed to save regex script. See console for details.`)}}function _S(e,t){e.find(".regex_script_name").val(t.scriptName||""),e.find(".find_regex").val(t.findRegex||""),e.find(".regex_replace_string").val(t.replaceString||""),e.find(".regex_trim_strings").val(Array.isArray(t.trimStrings)?t.trimStrings.join(`
`):""),e.find('input[name="disabled"]').prop("checked",!!(t.disabled??!1)),e.find('input[name="only_format_display"]').prop("checked",!!(t.markdownOnly??!1)),e.find('input[name="only_format_prompt"]').prop("checked",!!(t.promptOnly??!1)),e.find('input[name="run_on_edit"]').prop("checked",!!(t.runOnEdit??!1)),e.find('select[name="substitute_regex"]').val(t.substituteRegex??Sg.NONE),e.find('input[name="min_depth"]').val(Number.isNaN(t.minDepth)?"":t.minDepth??""),e.find('input[name="max_depth"]').val(Number.isNaN(t.maxDepth)?"":t.maxDepth??"");for(const n of Array.isArray(t.placement)?t.placement:[])e.find(`input[name="replace_position"][value="${n}"]`).prop("checked",!0)}function yS(e){const t=()=>{if(tg(e),!e.find("#regex_test_mode").is(":visible"))return;const n={id:"bai-bai-toolkit-regex-test",scriptName:String(e.find(".regex_script_name").val()),findRegex:String(e.find(".find_regex").val()),replaceString:String(e.find(".regex_replace_string").val()),trimStrings:SS(e.find(".regex_trim_strings").val()),substituteRegex:Number(e.find('select[name="substitute_regex"]').val()),disabled:!1,promptOnly:!1,markdownOnly:!1,runOnEdit:!1,minDepth:null,maxDepth:null,placement:null},r=String(e.find("#regex_test_input").val()),o=hv(n,r);e.find("#regex_test_output").text(o)};e.find("#regex_test_mode_toggle").on("click",function(){e.find("#regex_test_mode").toggleClass("displayNone"),t()}),e.find("input, textarea, select").on("input",t),tg(e)}function tg(e){const t=e.find(".info-block").get(0),n=e.find("#regex_info_block_flags_hint"),r=String(e.find(".find_regex").val());if(n.hide(),!r){fl(t,d`Find Regex is empty`,"info");return}try{const o=fv(r);if(!o)throw new Error(d`Invalid Find Regex`);const a=[];a.push(o.flags.includes("g")?d`Applies to all matches`:d`Applies to the first match`),a.push(o.flags.includes("i")?d`Case insensitive`:d`Case sensitive`),fl(t,a.join(". "),"hint"),n.show()}catch(o){fl(t,o.message,"error")}}function ES(e,t){return{...t,id:String(t.id),scriptName:String(e.find(".regex_script_name").val()),findRegex:String(e.find(".find_regex").val()),replaceString:String(e.find(".regex_replace_string").val()),trimStrings:SS(e.find(".regex_trim_strings").val()),placement:e.find('input[name="replace_position"]').filter(":checked").map(function(){return parseInt($(this).val().toString())}).get().filter(n=>!isNaN(n))||[],disabled:!!e.find('input[name="disabled"]').prop("checked"),markdownOnly:!!e.find('input[name="only_format_display"]').prop("checked"),promptOnly:!!e.find('input[name="only_format_prompt"]').prop("checked"),runOnEdit:!!e.find('input[name="run_on_edit"]').prop("checked"),substituteRegex:Number(e.find('select[name="substitute_regex"]').val()),minDepth:parseInt(String(e.find('input[name="min_depth"]').val())),maxDepth:parseInt(String(e.find('input[name="max_depth"]').val()))}}function SS(e){return String(e).split(`
`).filter(t=>t.length!==0)||[]}function Eo(e){const t=e.id,n=e.closest(lB),r=HH(n);if(!t||r===null)return null;const o=he(r),a=o.findIndex(i=>i?.id===t);return a===-1?null:{row:e,list:n,scriptId:t,scriptType:r,scripts:o,index:a,script:o[a]}}function HH(e){if(!(e instanceof HTMLElement))return null;switch(e.id){case"saved_regex_scripts":return H.GLOBAL;case"saved_scoped_scripts":return H.SCOPED;case"saved_preset_scripts":return H.PRESET;default:return null}}async function vS(e){const t=Ep(e);if(t===null)return;const n=U();if(!n.state)return;const r=n.state.lists[e];if(!r)return;const o=he(t),a=new Set(o.map(v=>v?.id).filter(Boolean)),i=new Map(o.filter(v=>v?.id).map(v=>[v.id,v])),s=new Set,l=[],c=Ue(t),u=o.slice(),p=xp(c.scripts);let b=0;for(const v of r.groups){let y=0;const k=v.isPendingAssignment?$t:v.isUngrouped?Ce:v.id;for(const P of v.scripts){if(!P?.id||!a.has(P.id)||s.has(P.id))continue;const E=i.get(P.id);E&&(s.add(P.id),l.push(E),c.scripts[P.id]={groupId:k,order:y},y+=1,b+=1)}}if(o.length>0&&b===0){console.debug(`${T} Regex Vue order save skipped because the drag model contains no known scripts`),toastr.error(d`Regex order was not saved because the drag result was invalid.`),mi(c,p),ue();return}for(const v of o)v?.id&&!s.has(v.id)&&l.push(v);if(l.length!==o.length){console.debug(`${T} Regex Vue order save skipped because model and data lengths differ`),mi(c,p),ue();return}o.splice(0,o.length,...l);try{await Le(t,o),ot(),st()}catch(v){throw o.splice(0,o.length,...u),mi(c,p),v}}function xp(e){const t={};for(const[n,r]of Object.entries(e??{}))t[n]=r&&typeof r=="object"?{...r}:r;return t}function mi(e,t){e.scripts=xp(t)}function GH(e){vS(e).catch(t=>{console.debug(`${T} Failed to save regex script order`,t),toastr.error(d`Failed to save regex script order. See console for details.`),ue()})}function eu(e,t){const n=e.querySelector(".disable_regex");n instanceof HTMLInputElement&&(n.checked=t)}function TS(e,t){e.id=t.id;const n=t.scriptName||"",r=e.querySelector(".regex_script_name");r instanceof HTMLElement&&(r.textContent=n,r.title=n),eu(e,!!(t.disabled??!1))}async function Le(e,t){FH(e,t)}function FH(e,t){const n=ke();(!n.pendingRegexScriptSaves||!(n.pendingRegexScriptSaves instanceof Map))&&(n.pendingRegexScriptSaves=new Map);const r=zH(e,t);r&&(n.pendingRegexScriptSaves.set(r.scopeKey,r),wp())}function zH(e,t){const n=Array.isArray(t)?t:[];switch(e){case H.GLOBAL:return{scriptType:e,scopeKey:pi(e),scripts:n};case H.SCOPED:return $e===void 0||!Xt?.[$e]?null:{scriptType:e,scopeKey:pi(e),scripts:n,characterId:$e};case H.PRESET:{const r=io(),o=so();return!r||!o?null:{scriptType:e,scopeKey:pi(e),scripts:n,apiId:r,presetName:o}}default:return null}}function pr({captureCurrentPreset:e=!0}={}){const t=ke();if(j[re].regexListGroups=g.regexListGroups,t.pendingRegexGroupSettingsSave=!0,e){const n=rH();n&&(t.pendingRegexPresetGroupSaves instanceof Map||(t.pendingRegexPresetGroupSaves=new Map),t.pendingRegexPresetGroupSaves.set(n.scopeKey,n))}wp()}function wp(){sl(),So(0)}function Sn(e){if(e===H.SCOPED){const t=Xt?.[$e]?.avatar;if(!t)return;Array.isArray(j.character_allowed_regex)||(j.character_allowed_regex=[]),j.character_allowed_regex.includes(t)||(j.character_allowed_regex.push(t),pr());return}if(e===H.PRESET){const t=io(),n=so();if(!t||!n)return;(!j.preset_allowed_regex||typeof j.preset_allowed_regex!="object")&&(j.preset_allowed_regex={}),Array.isArray(j.preset_allowed_regex[t])||(j.preset_allowed_regex[t]=[]),j.preset_allowed_regex[t].includes(n)||(j.preset_allowed_regex[t].push(n),pr())}}function st(){if(!We())return;const e=ke();e.pendingChatReload=!0,sl(),So(0)}function sl(){const e=ke();if(e.chatReloadVisibilityObserver||typeof MutationObserver!="function")return;const t=new MutationObserver(()=>{So()});e.chatReloadVisibilityObserver=t;for(const n of VH())t.observe(n,{attributes:!0,attributeFilter:["class","style","hidden","aria-hidden"]})}function VH(){const e=[],t=new Set,n=a=>{a instanceof HTMLElement&&!t.has(a)&&(t.add(a),e.push(a))},r=document.querySelector(bo),o=document.querySelector(Wc);if(n(r),n(o),r instanceof HTMLElement)for(let a=r.parentElement;a&&a!==document.body&&(n(a),!a.matches(Wc));a=a.parentElement);return e}function So(e=cB){const t=ke();clearTimeout(t.chatReloadVisibilityTimer),t.chatReloadVisibilityTimer=setTimeout(()=>{t.chatReloadVisibilityTimer=null,UH()},e)}function UH(){if(!ke().pendingChatReload&&!mr()){Cp();return}if(!jH()){xS();return}So(uB)}async function xS(){const e=ke();if(!e.pendingChatReload&&!mr()||e.chatReloadInFlight)return;const t=!!e.pendingChatReload;e.pendingChatReload=!1,e.chatReloadInFlight=!0,Cp();try{await la(),t&&await YH()}catch(n){t&&(e.pendingChatReload=!0),console.debug(`${T} Failed to flush regex changes`,n),toastr.error(d`Failed to save regex changes. See console for details.`)}finally{e.chatReloadInFlight=!1,(e.pendingChatReload||mr())&&(sl(),So())}}function mr(){const e=ke();return!!(e.pendingRegexGroupSettingsSave||e.pendingRegexScriptSaves?.size>0||e.pendingRegexPresetGroupSaves?.size>0)}async function la(){const e=ke();if(e.regexChangesSavePromise)return e.regexChangesSavePromise;const t=e.pendingRegexScriptSaves instanceof Map?Array.from(e.pendingRegexScriptSaves.values()):[],n=e.pendingRegexPresetGroupSaves instanceof Map?Array.from(e.pendingRegexPresetGroupSaves.values()):[],r=!!e.pendingRegexGroupSettingsSave;if(t.length===0&&n.length===0&&!r)return;e.regexChangesSaveInFlight=!0;const o=r||t.some(i=>i.scriptType===H.GLOBAL),a=(async()=>{try{e.pendingRegexScriptSaves=new Map,e.pendingRegexPresetGroupSaves=new Map,e.pendingRegexGroupSettingsSave=!1;for(const i of t)await WH(i);for(const i of n)await KH(i);o&&(j[re].regexListGroups=g.regexListGroups,await fr())}catch(i){(!e.pendingRegexScriptSaves||!(e.pendingRegexScriptSaves instanceof Map))&&(e.pendingRegexScriptSaves=new Map);for(const s of t)e.pendingRegexScriptSaves.set(s.scopeKey,s);e.pendingRegexPresetGroupSaves instanceof Map||(e.pendingRegexPresetGroupSaves=new Map);for(const s of n)e.pendingRegexPresetGroupSaves.set(s.scopeKey,s);throw e.pendingRegexGroupSettingsSave=e.pendingRegexGroupSettingsSave||r,i}finally{e.regexChangesSaveInFlight=!1}})();e.regexChangesSavePromise=a;try{await a}finally{e.regexChangesSavePromise===a&&(e.regexChangesSavePromise=null),mr()&&(sl(),So())}}async function WH(e){switch(e.scriptType){case H.GLOBAL:j.regex=e.scripts;break;case H.SCOPED:await sv(e.characterId,"regex_scripts",e.scripts);break;case H.PRESET:{const t=gr(e.apiId);if(!t)throw new Error(`Preset manager not found for API: ${e.apiId}`);await t.writePresetExtensionField({name:e.presetName,path:"regex_scripts",value:e.scripts});break}}}async function KH(e){const t=gr(e.apiId);if(!t)throw new Error(`Preset manager not found for API: ${e.apiId}`);await t.writePresetExtensionField({name:e.presetName,path:eE,value:e.value})}function Cp(){const e=ke();clearTimeout(e.chatReloadVisibilityTimer),e.chatReloadVisibilityTimer=null,e.chatReloadVisibilityObserver&&(e.chatReloadVisibilityObserver.disconnect(),e.chatReloadVisibilityObserver=null)}function jH(){const e=document.querySelector(Wc);return!!qH(e)}function qH(e){if(!(e instanceof HTMLElement)||!e.isConnected||e.getClientRects().length===0)return!1;const t=getComputedStyle(e);return t.display!=="none"&&t.visibility!=="hidden"}async function YH(){We()&&await Do()}function tu(){const e=Q.reloadChatMutex;return!!e&&typeof e.callback=="function"}function QH(){try{if(!tu()){console.debug(`${T} 当前 ST 版本低于 1.16.0,聊天丢失缓解不可用,已跳过`);return}const e=Q.reloadChatMutex;if(e.callback[Tf])return;const t=e.callback;async function n(...r){const o=XH();try{return await t.apply(e,r)}finally{try{await ZH(o)}catch(a){console.error(`${T} 聊天丢失缓解执行失败:`,a)}}}n[Tf]=!0,n.__baiBaiToolkitOriginal=t,e.callback=n,console.debug(`${T} 已启用缓解酒馆丢失聊天问题`)}catch(e){console.error(`${T} 启用缓解酒馆丢失聊天问题失败:`,e)}}function XH(){try{if(g.chatLossMitigationEnabled===!1)return null;const e=!!St,t=Q.this_chid!==void 0;if(!e&&!t)return null;const n=Q.chat;return{valid:!0,inGroup:e,chatId:We(),length:Array.isArray(n)?n.length:0,integrity:Q.chat_metadata?.integrity,messages:Array.isArray(n)?n.slice():[],metadata:Q.chat_metadata}}catch(e){return console.error(`${T} 聊天快照失败:`,e),null}}function JH(e){if(!e||!e.valid||e.inGroup!==!!St||We()!==e.chatId||!e.inGroup&&Q.this_chid===void 0||e.length<=1)return!1;const t=Q.chat;return Array.isArray(t)?t.length<e.length:!1}async function ZH(e){if(!JH(e))return;console.warn(`${T} 检测到切换正则触发酒馆 BUG 导致聊天被覆盖(原 ${e.length} 条),正在自动恢复…`);const t=Q.chat;t.splice(0,t.length,...e.messages);const n=Q.chat_metadata;if(n&&e.metadata)for(const o of Object.keys(e.metadata))n[o]=e.metadata[o];n&&e.integrity&&(n.integrity=e.integrity),await Q.printMessages();let r=!1;try{Q.cancelDebouncedChatSave(),e.inGroup?await Q.saveChatConditional():await Q.saveChat({force:!0}),r=!0}catch(o){console.error(`${T} 聊天记录已在内存恢复,但重新写盘失败:`,o)}try{r?toastr.success(`柏宝箱已拦截一次酒馆 BUG 导致的聊天记录丢失,已自动恢复 ${t.length} 条消息`):toastr.warning("柏宝箱已在界面恢复聊天记录,但写盘失败,请检查后端连接后手动保存一次")}catch{}console.warn(`${T} 聊天记录已恢复(${t.length} 条),写盘${r?"成功":"失败"}`)}function Tt(){if(Vn()){eG();return}const e=$(`${bo} .regex_bulk_checkbox`),t=e.length>0&&e.length===e.filter(":checked").length,n=$("#bulk_select_all_toggle").find("i");n.toggleClass("fa-check-double",!t),n.toggleClass("fa-minus",t);const r=$("#saved_regex_scripts .regex-script-label:has(.regex_bulk_checkbox:checked)").length>0,o=$("#saved_scoped_scripts .regex-script-label:has(.regex_bulk_checkbox:checked)").length>0,a=$("#saved_preset_scripts .regex-script-label:has(.regex_bulk_checkbox:checked)").length>0;$("#bulk_regex_move_to_global").toggle(o||a),$("#bulk_regex_move_to_scoped").toggle(r||a),$("#bulk_regex_move_to_preset").toggle(r||o)}function eG(){const e=U(),t=_o(),n=nS(),r=e.state?.selectedIds??{},o=n.length>0&&n.every(c=>r[c]),a=$("#bulk_select_all_toggle").find("i");a.toggleClass("fa-check-double",!o),a.toggleClass("fa-minus",o);const i=t.some(c=>c.scriptType===H.GLOBAL),s=t.some(c=>c.scriptType===H.SCOPED),l=t.some(c=>c.scriptType===H.PRESET);$("#bulk_regex_move_to_global").toggle(s||l),$("#bulk_regex_move_to_scoped").toggle(i||l),$("#bulk_regex_move_to_preset").toggle(i||s)}function kp(){const e=h[Bf]||{installed:!1,isComposing:!1,debounceTimer:null};h[Bf]=e;const t=document.getElementById("character_search_bar");if(!t){e.retryTimer||(e.retryTimer=setTimeout(()=>{e.retryTimer=null,kp()},1e3));return}g.characterSearchInputOptimizationEnabled?e.installed||tG(e,t):e.installed&&nG(e,t)}function tG(e,t){e.installed||(e.installed=!0,e.isComposing=!1,e.isBypassingSync=!1,e.compositionStartHandler=n=>{n.target===t&&(e.isComposing=!0)},e.compositionEndHandler=n=>{n.target===t&&(e.isComposing=!1,ng(e,t))},e.inputCaptureHandler=n=>{n.target===t&&(e.isBypassingSync||n.isTrusted&&(n.stopImmediatePropagation(),n.stopPropagation(),e.isComposing||ng(e,t)))},t.addEventListener("compositionstart",e.compositionStartHandler,!0),t.addEventListener("compositionend",e.compositionEndHandler,!0),t.addEventListener("input",e.inputCaptureHandler,!0))}function ng(e,t,n=300){clearTimeout(e.debounceTimer),e.debounceTimer=setTimeout(()=>{e.installed&&(e.isBypassingSync=!0,window.jQuery?window.jQuery(t).trigger("input"):t.dispatchEvent(new Event("input",{bubbles:!0})),e.isBypassingSync=!1)},n)}function nG(e,t){e.retryTimer&&(clearTimeout(e.retryTimer),e.retryTimer=null),e.installed&&(t.removeEventListener("compositionstart",e.compositionStartHandler,!0),t.removeEventListener("compositionend",e.compositionEndHandler,!0),t.removeEventListener("input",e.inputCaptureHandler,!0),clearTimeout(e.debounceTimer),e.installed=!1)}function Ap(){return(!h[qa]||typeof h[qa]!="object")&&(h[qa]={}),h[qa]}function wS(){g.characterListAvatarLazyLoadEnabled?rG():oG()}function rG(){const e=Ap();if(e.enabled=!0,fG(),typeof IntersectionObserver!="function"){LS(),console.warn(`${T} IntersectionObserver is unavailable; character list avatar lazy loading fell back to native image hints`);return}AS(e),aG(e),sG(e),cG(e),uG(e),ll(e)}function oG(){const e=Ap();e.enabled=!1,e.processTimer&&(clearTimeout(e.processTimer),e.processTimer=null),e.mutationObserver?.disconnect(),e.mutationObserver=null,e.intersectionObserver?.disconnect(),e.intersectionObserver=null,e.characterPageLoadedHandler&&(M.removeListener?.(w.CHARACTER_PAGE_LOADED,e.characterPageLoadedHandler),e.characterPageLoadedHandler=null),iG(e),lG(e),pG(),gG()}function aG(e){const t=globalThis.jQuery?.fn?.append;if(typeof t!="function"||e.patchedAppend===t||e.patchedAppend&&globalThis.jQuery.fn.append===e.patchedAppend)return;function n(...r){g.characterListAvatarLazyLoadEnabled&&rg(this)&&CS(r,e);const o=t.apply(this,r);return g.characterListAvatarLazyLoadEnabled&&rg(this)&&ll(e),o}n.__baiBaiToolkitCharacterListAvatarLazyLoadPatched=!0,n.__baiBaiToolkitOriginalAppend=t,Object.assign(n,t),e.originalAppend=t,e.patchedAppend=n,globalThis.jQuery.fn.append=n}function iG(e){!e.patchedAppend||!globalThis.jQuery?.fn||(globalThis.jQuery.fn.append===e.patchedAppend&&typeof e.originalAppend=="function"&&(globalThis.jQuery.fn.append=e.originalAppend),e.originalAppend=null,e.patchedAppend=null)}function sG(e){const t=typeof Element<"u"?Element.prototype.append:null;if(typeof t!="function"||e.patchedNativeAppend===t||e.patchedNativeAppend&&Element.prototype.append===e.patchedNativeAppend)return;function n(...r){g.characterListAvatarLazyLoadEnabled&&og(this)&&CS(r,e);const o=t.apply(this,r);return g.characterListAvatarLazyLoadEnabled&&og(this)&&ll(e),o}n.__baiBaiToolkitCharacterListAvatarLazyLoadPatched=!0,n.__baiBaiToolkitOriginalAppend=t,e.originalNativeAppend=t,e.patchedNativeAppend=n,Element.prototype.append=n}function lG(e){!e.patchedNativeAppend||typeof Element>"u"||(Element.prototype.append===e.patchedNativeAppend&&typeof e.originalNativeAppend=="function"&&(Element.prototype.append=e.originalNativeAppend),e.originalNativeAppend=null,e.patchedNativeAppend=null)}function rg(e){if(!e||typeof e.length!="number")return!1;for(const t of e)if(t instanceof Element&&t.matches(fB))return!0;return!1}function og(e){return e instanceof Element&&e.matches(gB)}function CS(e,t){for(const n of e)kS(n,t)}function kS(e,t){if(e){if(e instanceof Node){nu(e,t,{requireListContainer:!1,observe:!1});return}if(e.jquery&&typeof e.each=="function"){e.each((n,r)=>{r instanceof Node&&nu(r,t,{requireListContainer:!1,observe:!1})});return}if(Array.isArray(e))for(const n of e)kS(n,t)}}function cG(e){if(e.mutationObserver)return;const t=document.body||document.documentElement;t&&(e.mutationObserver=new MutationObserver(n=>{if(!(!g.characterListAvatarLazyLoadEnabled||!e.enabled))for(const r of n)for(const o of r.addedNodes)nu(o,e)}),e.mutationObserver.observe(t,{childList:!0,subtree:!0}))}function uG(e){e.characterPageLoadedHandler||(e.characterPageLoadedHandler=()=>ll(e),M.on(w.CHARACTER_PAGE_LOADED,e.characterPageLoadedHandler))}function AS(e){e.intersectionObserver||(e.intersectionObserver=new IntersectionObserver(t=>{for(const n of t)(n.isIntersecting||n.intersectionRatio>0)&&PS(n.target,e)},{root:null,rootMargin:bB,threshold:0}))}function ll(e){if(e.processTimer)return;const t=h.themeApplyReflowGuard,n=t?t.windowUntil-Date.now():0,r=n>0?n:0;e.processTimer=setTimeout(()=>{e.processTimer=null,dG(e)},r)}function dG(e){if(!(!g.characterListAvatarLazyLoadEnabled||!e.enabled)){if(typeof IntersectionObserver!="function"){LS();return}e.intersectionObserver||AS(e),document.querySelectorAll(rl).forEach(t=>{ru(t,e,{requireListContainer:!0,observe:!0})})}}function nu(e,t,{requireListContainer:n=!0,observe:r=!0}={}){if(!(e instanceof Element))return;e instanceof HTMLImageElement&&ru(e,t,{requireListContainer:n,observe:r});const o=n?rl:iE;e.querySelectorAll?.(o).forEach(a=>{ru(a,t,{requireListContainer:n,observe:r})})}function ru(e,t,{requireListContainer:n=!0,observe:r=!0}={}){if(!(e instanceof HTMLImageElement)||n&&!e.matches(rl)||!n&&!e.matches(iE))return;if(e.dataset[Ur]){ag(e,t,r);return}const a=e.getAttribute("src")||"";if(!mG(a)){bs(e);return}e.dataset[Ur]=a,e.setAttribute("src",sE),e.classList.add(tr),e.classList.remove(Wo),e.closest(".avatar")?.classList.add(nr),bs(e),ag(e,t,r)}function ag(e,t,n){!n||!t?.intersectionObserver||!document.documentElement.contains(e)||t.intersectionObserver.observe(e)}function PS(e,t=Ap()){if(!(e instanceof HTMLImageElement))return;const n=e.dataset[Ur];if(!n){t?.intersectionObserver?.unobserve(e);return}t?.intersectionObserver?.unobserve(e),e.dataset[Ur]="",delete e.dataset[Ur],e.classList.remove(tr),e.classList.add(Wo),e.closest(".avatar")?.classList.remove(nr),e.setAttribute("src",n),bs(e)}function pG(){const e=`img[data-${bG(Ur)}]`;document.querySelectorAll(e).forEach(t=>PS(t)),document.querySelectorAll(`.${tr}`).forEach(t=>{t.classList.remove(tr)}),document.querySelectorAll(`.${nr}`).forEach(t=>{t.classList.remove(nr)})}function LS(){document.querySelectorAll(rl).forEach(e=>{e instanceof HTMLImageElement&&bs(e)})}function bs(e){e.loading="lazy",e.decoding="async",e.setAttribute("fetchpriority","low")}function mG(e){if(!e||e===sE)return!1;try{const t=new URL(e,location.origin),n=t.searchParams.get("type");return t.origin===location.origin&&t.pathname==="/thumbnail"&&(n==="avatar"||n==="persona")&&t.searchParams.has("file")}catch{return!1}}function fG(){let e=document.getElementById(Vc);e||(e=document.createElement("style"),e.id=Vc,document.head.append(e)),e.textContent=`
${qn} .character_select {
    content-visibility: auto;
    contain-intrinsic-size: 72px;
}

${Br} .avatar-container,
${Dr} {
    content-visibility: auto;
    contain-intrinsic-size: 72px;
}

body.charListGrid ${qn} .character_select {
    contain-intrinsic-size: 160px 120px;
}

${qn} .${nr},
${Br} .${nr},
${Dr} .${nr} {
    background: var(--SmartThemeBlurTintColor);
}

${qn} img.${tr},
${Br} img.${tr},
${Dr} img.${tr} {
    opacity: 0.01;
}

${qn} img.${Wo},
${Br} img.${Wo},
${Dr} img.${Wo} {
    opacity: 1;
    transition: opacity 120ms ease;
}
`}function gG(){document.getElementById(Vc)?.remove()}function bG(e){return String(e).replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}function hG(e){let t=null;try{t=typeof InputEvent=="function"?new InputEvent("input",{bubbles:!0,inputType:"insertReplacementText",data:""}):null}catch{t=null}t||=new Event("input",{bubbles:!0}),e.dispatchEvent(t)}function IS(){g.descriptionCodeMirrorEditorEnabled?_G():RS()}function _G(){const e=yG();e.enabled=!0,IG(),EG(e),MS(e),SG(e)}function RS(){const e=h[er];if(e){Qo("disable",{dispatchInput:!1,save:!1}),e.enabled=!1,cl(e),e.refreshFrame&&(cancelAnimationFrame(e.refreshFrame),e.refreshFrame=0),e.mutationObserver?.disconnect(),e.mutationObserver=null,ou(e);for(const t of e.globalListeners||[])t.target.removeEventListener(t.type,t.handler,t.options);e.globalListeners=[],RG(),delete h[er]}}function yG(){return h[er]||(h[er]={enabled:!1,source:null,wrapper:null,view:null,listeners:[],globalListeners:[],mutationObserver:null,mutationObserverTargets:[],refreshFrame:0,timer:0,dirty:!1,flushing:!1,loadingToken:null}),h[er]}function EG(e){if(e.globalListeners.length>0)return;const t=a=>{a.target instanceof Element&&a.target.closest("#create_button")&&Qo("manual save click",{dispatchInput:!1,save:!1})},n=a=>{a.target instanceof HTMLFormElement&&a.target.matches("#form_create")&&Qo("form submit",{dispatchInput:!1,save:!1})},r=()=>{Qo("page lifecycle",{dispatchInput:!1,save:!1})},o=(a,i,s,l)=>{!(a instanceof EventTarget)||a===document||(a.addEventListener(i,s,l),e.globalListeners.push({target:a,type:i,handler:s,options:l}))};for(const a of vG())o(a,"click",t,!0),o(a,"submit",n,!0);o(window,"pagehide",r)}function SG(e){typeof MutationObserver=="function"&&(e.mutationObserver||(e.mutationObserver=new MutationObserver(t=>{xG(e,t)||wG(e)})),fi(e))}function vG(){const e=new Set,t=r=>{r instanceof HTMLElement&&r.isConnected&&e.add(r)},n=document.querySelector(Yd);return t(document.querySelector("#form_create")),t(n?.closest("form")),t(n?.parentElement),[...e]}function fi(e){if(!e?.mutationObserver)return;const t=TG(e),n=e.mutationObserverTargets||[];if(!(n.length===t.length&&n.every((o,a)=>o.target===t[a].target&&o.optionsKey===t[a].optionsKey))){e.mutationObserver.disconnect();for(const{target:o,options:a}of t)e.mutationObserver.observe(o,a);e.mutationObserverTargets=t}}function TG(e){const t=new Map,n={attributes:!0,attributeFilter:["class","style","hidden","disabled"],childList:!0,subtree:!0},r={childList:!0,subtree:!1},o=(s,l,c)=>{if(!(s instanceof Node)||!s.isConnected||s===document)return;const u=t.get(s);(!u||u.optionsKey==="parent")&&t.set(s,{target:s,optionsKey:l,options:c})},a=s=>{s instanceof HTMLElement&&(o(s.parentElement,"host",n),o(s.parentElement?.parentElement,"parent",r),o(s.closest("form"),"host",n))},i=document.querySelector(Yd);return a(i),a(e.source),a(e.wrapper),o(document.querySelector("#form_create"),"host",n),[...t.values()]}function xG(e,t){const n=e.wrapper;return n instanceof HTMLElement?t.every(r=>{if(r.target instanceof Node&&n.contains(r.target))return!0;for(const o of r.addedNodes)if(!(o instanceof Node)||!n.contains(o))return!1;for(const o of r.removedNodes)if(!(o instanceof Node)||!n.contains(o))return!1;return r.addedNodes.length>0||r.removedNodes.length>0}):!1}function wG(e=h[er]){!e?.enabled||e.refreshFrame||(e.refreshFrame=requestAnimationFrame(()=>{e.refreshFrame=0,MS(e)}))}function MS(e){if(!e?.enabled)return;const t=document.querySelector(Yd);if(!(t instanceof HTMLTextAreaElement)||!t.isConnected){ou(e),fi(e);return}if(e.source===t&&e.wrapper?.isConnected){fi(e),PG(e);return}ou(e),CG(e,t),fi(e)}function CG(e,t){const n=document.createElement("div");n.id=oE,n.className=ZO,n.textContent="Loading CodeMirror...",t.classList.add(Qd),t.insertAdjacentElement("afterend",n),e.source=t,e.wrapper=n,e.dirty=!1;const r=()=>{setTimeout(()=>{e.dirty&&e.wrapper&&!e.wrapper.contains(document.activeElement)&&LG(e,"blur",eB)},0)};n.addEventListener("focusout",r),e.listeners.push({target:n,type:"focusout",handler:r,options:void 0});const o={};e.loadingToken=o,Pp().then(a=>{!e.enabled||e.source!==t||e.wrapper!==n||e.loadingToken!==o||!n.isConnected||kG(e,t,n,a)}).catch(a=>{console.warn(`${T} CodeMirror description editor failed; falling back to stock textarea.`,a),e.enabled&&e.source===t&&e.wrapper===n&&e.loadingToken===o&&(g.descriptionCodeMirrorEditorEnabled=!1,ye(),$("#bai_bai_toolkit_description_codemirror_editor_enabled").prop("checked",!1),RS())})}async function Pp(){if(h[Nl])return h[Nl];const[e,t,n,r,o,a,i]=await Promise.all([ht(()=>import("./index.B5fiB6ig.chunk.js"),[]),ht(()=>import("./index.C_abXisK.chunk.js").then(l=>l.i),__vite__mapDeps([3,4])),ht(()=>import("./index.DR6-X5CW.chunk.js"),__vite__mapDeps([5,4,3,6,7])),ht(()=>import("./index.Cdu3_o3o.chunk.js"),__vite__mapDeps([8,7,6,4,3])).catch(()=>({})),ht(()=>import("./index.BDKGZZC0.chunk.js"),__vite__mapDeps([6,7,4,3])).catch(()=>({})),ht(()=>import("./index.CZC4xwU-.chunk.js").then(l=>l.i),[]).catch(()=>({})),ht(()=>import("./index.BZrLMojD.chunk.js"),__vite__mapDeps([9,3,4,6,7])).catch(()=>({}))]),s={EditorState:e.EditorState,EditorView:t.EditorView,keymap:t.keymap,defaultKeymap:n.defaultKeymap,history:n.history,historyKeymap:n.historyKeymap,css:r.css,defaultHighlightStyle:o.defaultHighlightStyle,HighlightStyle:o.HighlightStyle,syntaxHighlighting:o.syntaxHighlighting,classHighlighter:a.classHighlighter,tags:a.tags,oneDarkHighlightStyle:i.oneDarkHighlightStyle,oneDarkTheme:i.oneDarkTheme,oneDarkColor:i.color};if(!s.EditorState||!s.EditorView)throw new Error("CodeMirror modules did not expose EditorState/EditorView");return h[Nl]=s,s}function kG(e,t,n,r){const{EditorState:o,EditorView:a,keymap:i,defaultKeymap:s=[],history:l,historyKeymap:c=[]}=r,u=t.value.length<=Xd,p=[a.lineWrapping,a.updateListener.of(b=>{b.docChanged&&(e.dirty=!0)}),a.theme({"&":{backgroundColor:"var(--SmartThemeBlurTintColor)",border:"1px solid var(--SmartThemeBorderColor)",borderRadius:"4px",contain:"layout paint style",color:"var(--SmartThemeBodyColor)",font:"inherit",minHeight:"min(42vh, 420px)",textShadow:"none"},"&.cm-focused":{outline:"none"},".cm-scroller":{fontFamily:"inherit",lineHeight:"1.35",maxHeight:"55vh",minHeight:"min(42vh, 420px)",overflow:"auto",overflowAnchor:"none",overscrollBehavior:"auto",touchAction:"pan-y",WebkitOverflowScrolling:"touch"},".cm-content":{caretColor:"var(--SmartThemeBodyColor)",contain:"layout paint style",padding:"8px",textShadow:"none",minHeight:"min(42vh, 420px)"},".cm-line":{padding:"0"}})];u&&typeof l=="function"&&p.push(l()),typeof i?.of=="function"&&p.push(i.of(u?[...s,...c]:s)),a.contentAttributes?.of&&p.push(a.contentAttributes.of({autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false","aria-label":t.getAttribute("aria-label")||"角色描述"})),n.textContent="",e.view=new a({state:o.create({doc:t.value||"",extensions:p}),parent:n})}function ou(e){if(!(!e.source&&!e.wrapper&&!e.view)){cl(e);for(const t of e.listeners||[])t.target.removeEventListener(t.type,t.handler,t.options);e.listeners=[],e.view?.destroy?.(),e.source?.classList.remove(Qd),e.wrapper?.remove(),e.source=null,e.wrapper=null,e.view=null,e.dirty=!1,e.loadingToken=null}}function OS(e){return e.view?.state?.doc?.toString?.()??""}function AG(e){if(!(e.source instanceof HTMLTextAreaElement)||!e.view)return!1;const t=OS(e),n=e.source.value!==t;return n&&(e.source.value=t),n}function PG(e){if(e.dirty||!(e.source instanceof HTMLTextAreaElement)||!e.view)return;const t=e.source.value||"";OS(e)!==t&&(e.view.dispatch({changes:{from:0,to:e.view.state.doc.length,insert:t}}),e.dirty=!1)}function LG(e,t,n){!e?.enabled||e.flushing||(cl(e),e.timer=setTimeout(()=>{e.timer=0,Qo(`deferred ${t}`,{dispatchInput:!0,save:!0})},n))}function cl(e){e?.timer&&(clearTimeout(e.timer),e.timer=0)}function Qo(e,{dispatchInput:t=!0,save:n=!0}={}){const r=h[er];if(!r?.enabled||r.flushing||!(r.source instanceof HTMLTextAreaElement)||!r.view)return!1;cl(r),r.flushing=!0;try{const o=AG(r)||r.dirty;return r.dirty=!1,o&&t&&hG(r.source),o&&n&&MG()&&(document.querySelector("#create_button")?.click(),console.debug(`${T} CodeMirror description editor flushed after ${e}`)),o}finally{r.flushing=!1}}function IG(){let e=document.getElementById(Gc);e||(e=document.createElement("style"),e.id=Gc,document.head.append(e)),e.textContent=`
#${oE} {
    box-sizing: border-box;
    display: block;
    width: 100%;
}

.${Qd} {
    display: none !important;
}
`}function RG(){document.getElementById(Gc)?.remove()}function MG(){return document.querySelector("#form_create")?.getAttribute("actiontype")==="editcharacter"}function OG(){const e=xn.prototype.updatePosition;if(typeof e!="function"||e.__mobileResizeGuardPatched)return;function t(...n){if(this.isActive)return e.apply(this,n)}t.__mobileResizeGuardPatched=!0,t.__mobileResizeGuardOriginal=e,h.originalAutoCompleteUpdatePosition=e,xn.prototype.updatePosition=t}function BG(){const e=xn.prototype.updatePosition;e?.__mobileResizeGuardPatched&&(xn.prototype.updatePosition=e.__mobileResizeGuardOriginal)}function DG(){if(h.powerUserResizeReplacement)return;const e=$._data(window,"events")?.resize;if(!Array.isArray(e)){console.warn(`${T} Window resize handlers are unavailable`);return}const t=e.find(({handler:l})=>NG(l));if(!t){console.warn(`${T} Could not locate the stock power-user resize handler`);return}$(window).off("resize",t.handler),h.originalPowerUserResizeHandler=t.handler;const n=gl(()=>{$(".ui-autocomplete-input").each(function(){try{$(this).autocomplete("widget")?.[0]?.style.display!=="none"&&$(this).autocomplete("search")}catch{}})}),r=gl(cv),o=gl(()=>{const l=parseFloat(Number(window.devicePixelRatio).toFixed(2))||1,c=window.innerWidth,u=window.innerHeight,p=c*l,b=u*l;return console.debug(`${T} Window resize: ${a}x${i} -> ${window.innerWidth}x${window.innerHeight}`),console.debug(`${T} Zoom: ${l}, X:${c}, Y:${u}, original: ${p}x${b}`),l});let a=window.innerWidth,i=window.innerHeight;const s=async()=>{if(de())return;n(),r(),o();const l=parseFloat(Number(window.innerHeight/i).toFixed(4)),c=parseFloat(Number(window.innerWidth/a).toFixed(4));if(Object.keys(Y.movingUIState).length>0)for(const u of Object.keys(Y.movingUIState)){const p=Y.movingUIState[u],b=p.height,v=p.width,y=p.left,k=p.top,P=p.bottom,E=p.right,K=Number(b*l).toFixed(0),X=Number(v*c).toFixed(0),B=Number(y*c).toFixed(0),V=Number(k*l).toFixed(0),ee=Number(P*l).toFixed(0),I=Number(E*c).toFixed(0);try{const Z=$("#"+$.escapeSelector(u));Z.length&&(Z.css("height",K),Z.css("width",X),Z.css("inset",`${V}px ${I}px ${ee}px ${B}px`),Y.movingUIState[u].height=K,Y.movingUIState[u].width=X,Y.movingUIState[u].top=V,Y.movingUIState[u].bottom=ee,Y.movingUIState[u].left=B,Y.movingUIState[u].right=I)}catch(Z){console.debug(`${T} Failed to rescale moving UI element`,u,Z)}}Yt(),a=window.innerWidth,i=window.innerHeight};s.__mobileResizeGuardReplacement=!0,h.powerUserResizeReplacement=s,$(window).on("resize",s)}function $G(){const e=h.powerUserResizeReplacement,t=h.originalPowerUserResizeHandler;if(e&&($(window).off("resize",e),h.powerUserResizeReplacement=null),typeof t!="function")return;const n=$._data(window,"events")?.resize;Array.isArray(n)&&n.some(({handler:o})=>o===t)||$(window).on("resize",t)}function NG(e){if(typeof e!="function"||e.__mobileResizeGuardReplacement)return!1;const t=String(e);return t.includes("adjustAutocompleteDebounced")&&t.includes("setHotswapsDebounced")&&t.includes("power_user.movingUIState")}function Xo(){const e=WG();e&&(e.isEnabled=()=>g.progressiveChatLoadingEnabled===!0),HG()}function Mn(){return(!h.fastChatGet||typeof h.fastChatGet!="object")&&(h.fastChatGet={requestId:0,current:null,lastNoticeAt:0}),h.fastChatGet}function HG(){const e=Mn();if(GG(),!e.pointerInteractionGuardInstalled){e.pointerInteractionGuardInstalled=!0;const t=n=>{hs()&&zG(n)&&(n.preventDefault(),n.stopImmediatePropagation(),ca())};for(const n of["pointerdown","pointerup","mousedown","mouseup","touchstart","touchend","click"])document.addEventListener(n,t,{capture:!0})}e.keydownInteractionGuardInstalled||(e.keydownInteractionGuardInstalled=!0,document.addEventListener("keydown",t=>{hs()&&VG(t)&&(t.preventDefault(),t.stopImmediatePropagation(),ca())},!0)),e.interactionGuardInstalled=!0}function GG(){const e=globalThis[Pf];if(e?.installed)return e;const t=globalThis.jQuery?.fn||globalThis.$?.fn;if(!t)return null;const n={installed:!0,originalTrigger:t.trigger,originalTriggerHandler:t.triggerHandler};return typeof n.originalTrigger=="function"&&(t.trigger=function(o,...a){return ig(this,o)?(ca(),this):n.originalTrigger.call(this,o,...a)}),typeof n.originalTriggerHandler=="function"&&(t.triggerHandler=function(o,...a){if(ig(this,o)){ca();return}return n.originalTriggerHandler.call(this,o,...a)}),globalThis[Pf]=n,n}function ig(e,t){if(!hs()||FG(t)!=="click")return!1;const n=Number(e?.length||0);for(let r=0;r<n;r++){const o=e[r];if(o instanceof Element&&o.closest(lE))return!0}return!1}function FG(e){return(typeof e=="string"?e:typeof e?.type=="string"?e.type:"").split(".")[0]}function zG(e){const t=BS(e);if(!t)return null;const n=t.closest(lE);return n||(Number(e?.detail||0)>=2?t.closest("#chat .mes[mesid]"):null)}function VG(e){const t=BS(e),n=String(e?.key||"");if(n==="Enter"){const r=t instanceof HTMLElement&&t.id==="send_textarea"&&(e.ctrlKey||e.metaKey||!e.shiftKey),o=!!(e.ctrlKey||e.metaKey||e.altKey);return r||o}return n==="ArrowLeft"||n==="ArrowRight"?!UG(t):!1}function UG(e){if(!(e instanceof HTMLElement))return!1;const t=e.tagName?.toUpperCase?.()||"";return e.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(t)}function BS(e){const t=e?.target;return t instanceof Element?t:typeof Node<"u"&&t instanceof Node&&t.parentElement?t.parentElement:null}function hs(){const e=Mn().current;return g.progressiveChatLoadingEnabled===!0&&!!e?.loadingFull}function ca(){const e=Mn(),t=Date.now();t-Number(e.lastNoticeAt||0)<1500||(e.lastNoticeAt=t,globalThis.toastr?.info&&globalThis.toastr.info("剩余批次还未加载完成，先不要进行操作","长聊天分批加载:"))}function WG(){const e=globalThis[Dl];if(e?.wrappedFetch)return e;const t=globalThis.fetch;if(typeof t!="function")return null;const n={originalFetch:t.bind(globalThis),wrappedFetch:null,isEnabled:()=>g.progressiveChatLoadingEnabled===!0};return n.wrappedFetch=async function(o,a){try{if(KG(o,a)&&hs())return ca(),aF();if(!n.isEnabled())return n.originalFetch(o,a);const i=await jG(o,a);return i?await qG(n.originalFetch,i,o,a):n.originalFetch(o,a)}catch(i){return console.debug(`${T} Fast chat get path failed; falling back to native chat get`,i),n.originalFetch(o,a)}},n.wrappedFetch[Dl]=!0,globalThis[Dl]=n,globalThis.fetch=n.wrappedFetch,n}function KG(e,t){const n=To(e);if(!n||xo(e,t)!=="POST")return!1;try{const r=new URL(n,location.href);return r.origin===location.origin&&yB.has(r.pathname)}catch{return!1}}async function jG(e,t){const n=To(e);if(!n||xo(e,t)!=="POST")return null;let r;try{r=new URL(n,location.href)}catch{return null}if(r.origin!==location.origin||!_B.has(r.pathname))return null;const o=await $p(e,t);return!o||typeof o!="object"||Array.isArray(o)?null:{path:r.pathname,body:o}}async function qG(e,t,n,r){const o=await DS(e,n,r,{source:t.path,mode:"initial",originalRequest:t.body,thresholdBytes:EB,initialMessages:rF()}),a=$S(o);if(!Array.isArray(a.chat))throw new Error("BaiBaoKu fast chat get returned a non-array chat payload");return a.kind==="partial"||a.meta?.partial===!0?YG(e,t,n,r,a):Lp(),oF(a.chat)}async function DS(e,t,n,r){const o=dl(t,n),a=me();for(const[u,p]of Object.entries(a||{}))o.has(u)||o.set(u,p);o.set("Content-Type","application/json");const i={...Np(t,n),method:"POST",headers:o,cache:"no-store",body:JSON.stringify(r)},s=await e(PO,i),l=await s.clone().json().catch(()=>null);if(!s?.ok||!l)throw new Error(`Unexpected status ${s?.status||"unknown"}`);const c=l?.data&&typeof l.data=="object"?l.data:l;if(l?.ok===!1||c?.ok===!1)throw new Error(l?.message||l?.error?.message||c?.message||c?.error?.message||"BaiBaoKu fast chat get failed");return c}function $S(e){if(!e||typeof e!="object")throw new Error("BaiBaoKu fast chat get returned an invalid payload");return{kind:String(e.kind||(e.meta?.partial?"partial":"complete")),chat:e.chat,meta:e.meta&&typeof e.meta=="object"?e.meta:{}}}function YG(e,t,n,r,o){const a=Mn(),i=o.meta||{},s={requestId:Number(a.requestId||0)+1,loadingFull:!0,source:t.path,originalRequest:t.body,chatKey:String(i.chatKey||""),version:String(i.version||""),messageStartIndex:Math.max(0,Number(i.messageStartIndex||0)),returnedMessages:Math.max(0,Number(i.returnedMessages||NS(o.chat).length||0)),currentChatId:We?.()??"",startedAt:Date.now()};a.requestId=s.requestId,a.current=s,document.body?.classList.add("bai-bai-toolkit-fast-chat-hydrating"),QG(e,n,r,s).catch(l=>{console.warn(`${T} Fast chat hydration failed`,l),Mn().current?.requestId===s.requestId&&globalThis.toastr?.error&&globalThis.toastr.error("聊天记录补全失败，请重新进入当前聊天。","柏宝库")})}async function QG(e,t,n,r){const o={source:r.source,mode:"full",originalRequest:r.originalRequest,chatKey:r.chatKey,version:r.version};let a;try{a=$S(await DS(e,t,n,o))}catch(i){console.debug(`${T} BaiBaoKu full chat get failed; trying native chat get`,i),a={kind:"full",chat:await XG(e,r),meta:{chatKey:r.chatKey,version:r.version}}}if(!JG(r,a.meta)){Mn().current?.requestId===r.requestId&&(Lp(r.requestId),globalThis.toastr?.warning&&globalThis.toastr.warning("聊天记录补全状态已过期，请重新进入当前聊天。","柏宝库"));return}ZG(r,a)}async function XG(e,t){const n=new Headers(me());n.has("Content-Type")||n.set("Content-Type","application/json");const r=await e(t.source,{method:"POST",headers:n,cache:"no-store",body:JSON.stringify(t.originalRequest||{})}),o=await r.clone().json().catch(()=>null);if(!r?.ok||!Array.isArray(o))throw new Error(`Native chat get returned ${r?.status||"invalid data"}`);return o}function JG(e,t={}){const n=Mn().current;if(!n||n.requestId!==e.requestId||!n.loadingFull||e.chatKey&&t?.chatKey&&String(t.chatKey)!==e.chatKey||e.version&&t?.version&&String(t.version)!==e.version)return!1;const r=We?.()??"";return String(r)===String(e.currentChatId)}function ZG(e,t){const n=NS(t.chat);if(!n.length&&Array.isArray(t.chat)&&t.chat.length>0)throw new Error("Full chat payload did not contain messages");const r=Array.isArray(Q.chat)?Q.chat:null;if(!r)throw new Error("SillyTavern chat array is unavailable");const o=document.querySelector("#chat"),a=iF(o);r.splice(0,r.length,...n),eF(e),tF(n.length),nF(),sF(o,a),Lp(e.requestId),console.debug(`${T} Fast chat hydration completed`,{messages:n.length,start:e.messageStartIndex,returned:e.returnedMessages})}function NS(e){return Array.isArray(e)?e[0]?.chat_metadata?e.slice(1):e:[]}function Qa(e){[...document.querySelectorAll("#chat .mes[mesid]")].filter(n=>n instanceof HTMLElement).forEach((n,r)=>{const o=e.messageStartIndex+r;n.setAttribute("mesid",String(o)),n.dataset.mesid=String(o),n.dataset.messageId=String(o);const a=n.querySelector(".mesIDDisplay");a instanceof HTMLElement&&(a.textContent=`#${o}`)})}function eF(e){Qa(e),requestAnimationFrame(()=>Qa(e)),setTimeout(()=>Qa(e),100),setTimeout(()=>Qa(e),500)}function tF(e){const t=document.querySelector("#show_more_messages");if(!(t instanceof HTMLElement))return;const n=document.querySelectorAll("#chat .mes[mesid]").length;n<=0||n>=e||(t.classList.remove("disabled","displayNone","hidden"),t.removeAttribute("disabled"),t.removeAttribute("aria-disabled"),t.style.display="")}function nF(){try{w.MORE_MESSAGES_LOADED&&M.emit(w.MORE_MESSAGES_LOADED),w.CHAT_LOADED&&M.emit(w.CHAT_LOADED)}catch(e){console.debug(`${T} Failed to emit fast chat hydration events`,e)}}function Lp(e=null){const t=Mn();e!==null&&t.current?.requestId!==e||(t.current=null,document.body?.classList.remove("bai-bai-toolkit-fast-chat-hydrating"))}function rF(){const e=Number(Y?.chat_truncation);return Number.isInteger(e)&&e>0?e:SB}function oF(e){return new Response(JSON.stringify(e),{status:200,statusText:"OK",headers:{"Content-Type":"application/json"}})}function aF(){return new Response(JSON.stringify({ok:!0,skipped:!0,reason:"hydrating",message:"Chat is still hydrating. Please wait for the full chat to load."}),{status:200,statusText:"OK",headers:{"Content-Type":"application/json"}})}function iF(e){return e instanceof HTMLElement?{top:e.scrollTop,height:e.scrollHeight}:null}function sF(e,t){if(!(e instanceof HTMLElement)||!t)return;const n=()=>{const r=e.scrollHeight-t.height;e.scrollTop=Math.max(0,t.top+r)};n(),requestAnimationFrame(n)}function lF(){const e=globalThis[CO];e?.wrappedFetch&&(e.isEnabled=()=>!1,e.cachedBootstrapTextPromise=null,e.cachedBootstrapTextExpiresAt=0,globalThis.fetch===e.wrappedFetch&&typeof e.originalFetch=="function"&&(globalThis.fetch=e.originalFetch))}function cF(){const e=globalThis[kO];e?.wrappedFetch&&(e.isEnabled=()=>!1,globalThis.fetch===e.wrappedFetch&&typeof e.originalFetch=="function"&&(globalThis.fetch=e.originalFetch))}function uF(){e1();const e=globalThis[Uo];if(e?.wrappedFetch)return e.isEnabled=()=>g.saveGenerateEnabled===!0,e.monitoredJobIds instanceof Set||(e.monitoredJobIds=new Set),e.resumeDisplays instanceof Map||(e.resumeDisplays=new Map),e.activeGenerateChatIds instanceof Set||(e.activeGenerateChatIds=new Set),e.resumeCheckPromises instanceof Map||(e.resumeCheckPromises=new Map),e.recoveryLocks instanceof Map||(e.recoveryLocks=new Map),e.localTerminalWatchJobIds instanceof Set||(e.localTerminalWatchJobIds=new Set),e.localRequestGuards instanceof Map||(e.localRequestGuards=new Map),e.localRequestGuardSerial=Number(e.localRequestGuardSerial||0),Array.isArray(e.saveGenerateIntents)||(e.saveGenerateIntents=[]),e.saveGenerateIntentSerial=Number(e.saveGenerateIntentSerial||0),e.backendAvailable=e.backendAvailable===!0?!0:e.backendAvailable===!1?!1:null,e.backendCheckedAt=Number(e.backendCheckedAt||0),e.backendCheckPromise=null,e.activeSaveGenerateCancelTarget&&typeof e.activeSaveGenerateCancelTarget!="object"&&(e.activeSaveGenerateCancelTarget=null),e.resumeCheckScheduledChatId=String(e.resumeCheckScheduledChatId||""),e.resumeCheckScheduledLastMessageHash=String(e.resumeCheckScheduledLastMessageHash||""),e.resumeCheckInFlightChatId=String(e.resumeCheckInFlightChatId||""),e.lastResumeCheckChatId=String(e.lastResumeCheckChatId||""),e.lastResumeCheckAt=Number(e.lastResumeCheckAt||0),e.lastRecoveryBlockToastAt=Number(e.lastRecoveryBlockToastAt||0),sg(e),cg(e),fg(e),pg(e),mg(e),yn(e),iu(e,"existing-hook",500),e;const t=globalThis.fetch;if(typeof t!="function")return null;const n={originalFetch:t.bind(globalThis),wrappedFetch:null,pendingJobs:[],monitoredJobIds:new Set,resumeDisplays:new Map,activeGenerateChatIds:new Set,activeSaveGenerateCancelTarget:null,resumeCheckPromises:new Map,recoveryLocks:new Map,localTerminalWatchJobIds:new Set,localRequestGuards:new Map,localRequestGuardSerial:0,saveGenerateIntents:[],saveGenerateIntentSerial:0,backendAvailable:null,backendCheckedAt:0,backendCheckPromise:null,resumeCheckTimer:null,resumeCheckScheduledChatId:"",resumeCheckScheduledLastMessageHash:"",resumeCheckInFlightChatId:"",lastResumeCheckChatId:"",lastResumeCheckAt:0,lastRecoveryBlockToastAt:0,nativeStopHandlerInstalled:!1,recoveryInputBlockerInstalled:!1,resumeHandlersInstalled:!1,messageDeleteHandlerInstalled:!1,isEnabled:()=>g.saveGenerateEnabled===!0};return n.wrappedFetch=async function(o,a){let i=null;try{const s=await RF(n,o,a);if(s)return s;if(!n.isEnabled())return n.originalFetch(o,a);const l=await pF(n,o,a);if(!l)return n.originalFetch(o,a);if(i=zS(n,l.save?.chatId),!await HS(n)){console.debug(`${T} save-generate skipped: BaiBaoKu backend is unavailable`);const p=await n.originalFetch(o,a);return Xa(n,i,p)}const c=await KF(n,l);if(c)return Xa(n,i,c);const u=await SF(n,l,o,a);return Xa(n,i,u)}catch(s){console.debug(`${T} save-generate path failed; falling back to native fetch`,s);try{const l=await n.originalFetch(o,a);return Xa(n,i,l)}catch(l){throw Es(n,i),l}}},n.wrappedFetch[Uo]=!0,globalThis[Uo]=n,globalThis.fetch=n.wrappedFetch,sg(n),cg(n),fg(n),pg(n),mg(n),iu(n,"install",500),console.debug(`${T} save-generate fetch hook installed`),n}async function HS(e){if(!e?.originalFetch)return!1;const t=Date.now(),n=Number(e.backendCheckedAt||0),r=e.backendAvailable===!1?YO:qO;return typeof e.backendAvailable=="boolean"&&t-n<r?e.backendAvailable:(e.backendCheckPromise||(e.backendCheckPromise=dF(e.originalFetch).then(o=>(e.backendAvailable=o,e.backendCheckedAt=Date.now(),o)).catch(o=>(console.debug(`${T} save-generate backend check failed`,o),e.backendAvailable=!1,e.backendCheckedAt=Date.now(),!1)).finally(()=>{e.backendCheckPromise=null})),e.backendCheckPromise)}async function dF(e){const t=new AbortController,n=setTimeout(()=>t.abort(),QO);try{const r=await e(jy,{method:"GET",cache:"no-store",signal:t.signal}),o=await r.json().catch(()=>null);return!!(r.ok&&o?.ok===!0&&o?.data?.installed===!0)}finally{clearTimeout(n)}}function _s(e,t){e&&(e.backendAvailable=!!t,e.backendCheckedAt=Date.now())}async function pF(e,t,n){const r=To(t);if(!r||xo(t,n)!=="POST")return null;let o;try{o=new URL(r,location.href)}catch{return null}if(o.origin!==location.origin||o.pathname!==$O)return null;const a=(c,u="")=>(console.debug(`${T} save-generate skipped: ${c}${u?` (${u})`:""}`),null);if(St)return a("group chat is not supported");if(Q.main_api!=="openai")return a("main_api is not chat-completions",String(Q.main_api||"unknown"));if(g.saveGenerateEnabled!==!0)return a("setting disabled");const i=await $p(t,n);if(!GS(i))return a("request body is not eligible",mF(i));const s=FS(i);if(!s)return a("current chat identity is unavailable");const l=hF(e,s,i);return l?{body:i,save:s,intent:l}:a("no matching main chat generation intent")}function mF(e){return!e||typeof e!="object"||Array.isArray(e)?typeof e:[`type=${String(e.type||"normal")}`,`n=${String(e.n||1)}`,`source=${String(e.chat_completion_source||"")}`,`tools=${Array.isArray(e.tools)?e.tools.length:0}`].join(" ")}function GS(e){return!e||typeof e!="object"||Array.isArray(e)||!["normal","regenerate"].includes(String(e.type||"normal"))||Number(e.n||1)>1||Array.isArray(e.tools)&&e.tools.length>0?!1:!!e.chat_completion_source}function sg(e){!e||e.saveGenerateIntentHandlersInstalled||typeof M?.on!="function"||(e.saveGenerateIntentHandlersInstalled=!0,w.GENERATION_AFTER_COMMANDS&&M.on(w.GENERATION_AFTER_COMMANDS,(t,n,r)=>{fF(e,t,n,r)}),w.CHAT_COMPLETION_SETTINGS_READY&&M.on(w.CHAT_COMPLETION_SETTINGS_READY,t=>{bF(e,t)}))}function fF(e,t,n={},r=!1){if(ys(e),g.saveGenerateEnabled!==!0||St||r)return;const o=String(t||"normal");if(!["normal","regenerate"].includes(o)||!gF(n))return;const a=FS({type:o});a&&(e.saveGenerateIntentSerial=Number(e.saveGenerateIntentSerial||0)+1,e.saveGenerateIntents.push({id:e.saveGenerateIntentSerial,type:o,chatId:a.chatId,createdAt:Date.now(),preparedAt:0,expectedBody:null,expectedBodyHash:"",lastMessageHashAtStart:Mp()}),ys(e))}function gF(e){return!e||typeof e!="object"?!0:e.force_chid!==void 0&&e.force_chid!==null&&e.force_chid!==""||Number(e.depth||0)>0?!1:!e.quiet_prompt&&!e.quietToLoud&&!e.quietImage&&!e.quietName}function bF(e,t){if(ys(e),g.saveGenerateEnabled!==!0||St||!GS(t))return;const n=String(t.type||"normal"),r=Ht();if(!r)return;const a=[...Array.isArray(e?.saveGenerateIntents)?e.saveGenerateIntents:[]].reverse().find(i=>i&&!i.expectedBody&&i.type===n&&i.chatId===r);a&&(a.expectedBody=t,a.preparedAt=Date.now())}function hF(e,t,n){ys(e);const r=String(t?.chatId||"").trim(),o=String(t?.type||n?.type||"normal");if(!r||!_F())return null;const a=lg(n),i=Date.now(),l=(Array.isArray(e?.saveGenerateIntents)?e.saveGenerateIntents:[]).find(c=>{if(!c||c.chatId!==r||c.type!==o||!c.expectedBody||i-Number(c.preparedAt||c.createdAt||0)>Qy)return!1;const u=c.expectedBodyHash||lg(c.expectedBody);return c.expectedBodyHash=u,u===a});return l||null}function ys(e){if(!e)return;if(!Array.isArray(e.saveGenerateIntents)){e.saveGenerateIntents=[];return}const t=Date.now();e.saveGenerateIntents=e.saveGenerateIntents.filter(n=>n&&t-Number(n.createdAt||0)<=Qy),e.saveGenerateIntents.length>kf&&(e.saveGenerateIntents=e.saveGenerateIntents.slice(-kf))}function _F(){const e=vo();return!!(e?.message&&e.message.is_user===!0)}function vo(){const e=Q.chat;if(!Array.isArray(e)||e.length===0)return null;let t=null,n=-1,r=-1;for(const o of e)!o||o.chat_metadata||(r+=1,t=o,n=r);return t?{message:t,floor:n}:null}function lg(e){const t=yF(e);let n=2166136261;for(let r=0;r<t.length;r+=1)n^=t.charCodeAt(r),n=Math.imul(n,16777619);return`r${t.length.toString(36)}:${(n>>>0).toString(16).padStart(8,"0")}`}function yF(e){return JSON.stringify(au(e))}function au(e){if(!e||typeof e!="object")return e;if(Array.isArray(e))return e.map(n=>au(n));const t={};for(const n of Object.keys(e).sort()){const r=au(e[n]);r!==void 0&&(t[n]=r)}return t}function FS(e=null){if($e===void 0||St)return null;const t=Xt?.[$e];if(!t?.avatar||!t?.chat)return null;const n=Ht();if(!n)return null;const r=String(e?.type||"normal");return{kind:"character",type:r,chatId:n,avatar_url:t.avatar,file_name:t.chat,ch_name:t.name||"",expectedFloor:EF(r)}}function EF(e){const t=vo(),n=t&&Number.isInteger(t.floor)?t.floor:-1,r=!!(t?.message&&t.message.is_user!==!0);return String(e||"normal")==="regenerate"&&r?n:n+1}function Ht(){return St?"":String(We?.()||Xt?.[$e]?.chat||"").trim()}async function SF(e,t,n,r){const o=dl(n,r),a=me();for(const[p,b]of Object.entries(a||{}))o.has(p)||o.set(p,b);o.set("Content-Type","application/json");const i={...Np(n,r),...r||{},method:"POST",headers:o,cache:"no-store",body:JSON.stringify({save:t.save,generate:t.body})},s=String(t.save?.chatId||"").trim(),l=t.body?.stream===!0,c=vo();console.log(`${T} [楼层日志] 发送生成请求 type=${t.save?.type} chatId=${s} 当前末尾楼层=${c?.floor??-1} 期望楼层=${t.save?.expectedFloor}`);const u=TF(e,{chatId:s});PF(e,s);try{const p=await e.originalFetch(ur,i);if(p?.status===404)return _s(e,!1),oo(e,u),console.debug(`${T} save-generate endpoint unavailable; falling back to native generate`),e.originalFetch(n,r);_s(e,p?.ok||p?.status!==404);const b=p?.headers?.get(GO)||"";return u&&(u.jobId=b),b&&p.ok?(console.debug(`${T} save-generate intercepted ${t.save.file_name}; job=${b}`),AF(e,{id:b,save:t.save,status:p.headers.get(HO)||"",createdAt:Date.now(),consumed:!1}),HF(e,b)):b&&!p.ok&&Ve({id:b}),p}finally{LF(e,s),(!l||!u?.jobId)&&oo(e,u)}}function cg(e){if(!e||e.nativeStopHandlerInstalled)return;e.nativeStopHandlerInstalled=!0;const t=n=>{vF(n)&&wF(e)};document.addEventListener("pointerdown",t,!0),document.addEventListener("click",t,!0)}function vF(e){const t=e?.target;return!!(t instanceof Element?t:t?.parentElement)?.closest?.("#mes_stop")}function TF(e,t){if(!e||!t?.chatId)return null;const n={jobId:"",chatId:String(t.chatId||""),startedAt:Date.now(),cancelRequested:!1};return e.activeSaveGenerateCancelTarget=n,n}function xF(e){const t=e?.activeSaveGenerateCancelTarget;return!t?.chatId&&!t?.jobId?null:Date.now()-Number(t.startedAt||0)>ka*2?(e.activeSaveGenerateCancelTarget=null,null):t}function oo(e,t=null){const n=e?.activeSaveGenerateCancelTarget;if(!e||!n)return;if(!t||t===n){e.activeSaveGenerateCancelTarget=null;return}const r=String(n.jobId||""),o=String(t.jobId||t.id||""),a=String(n.chatId||""),i=String(t.chatId||t.save?.chatId||"");o&&r&&o!==r||i&&a&&i!==a||!o&&!i||(e.activeSaveGenerateCancelTarget=null)}async function wF(e){if(!e?.originalFetch)return;const t=xF(e);if(!(!t||t.cancelRequested)){t.cancelRequested=!0;try{const n=await CF(e.originalFetch,t),r={id:t.jobId||n?.id||"",...n||{},status:n?.status||"canceled",chatId:t.chatId};oo(e,r),r.id?Op(e,r):Bp("柏宝库后台生成已停止")}catch(n){t.cancelRequested=!1,console.debug(`${T} save-generate native stop cancel failed`,n)}}}async function CF(e,t){const n=String(t?.chatId||"").trim(),r=t?.jobId||!n?1:6;for(let o=0;o<r;o+=1){const a=String(t?.jobId||"").trim();try{return await VS(e,a,{chatId:n})}catch(i){if(a||o>=r-1||!kF(i))throw i;await Rp(250)}}return null}function kF(e){return Number(e?.status||0)===404||/not found|HTTP 404|cancelable save-generate job was not found/i.test(String(e?.message||""))}function AF(e,t){On(e),e.pendingJobs.push(t)}function PF(e,t){!e||!t||(e.activeGenerateChatIds instanceof Set||(e.activeGenerateChatIds=new Set),e.activeGenerateChatIds.add(t))}function LF(e,t){!e||!t||!(e.activeGenerateChatIds instanceof Set)||e.activeGenerateChatIds.delete(t)}function zS(e,t){const n=String(t||"").trim();if(!e||!n)return null;e.localRequestGuards instanceof Map||(e.localRequestGuards=new Map),e.localRequestGuardSerial=Number(e.localRequestGuardSerial||0)+1;const r={id:e.localRequestGuardSerial,chatId:n,createdAt:Date.now()};return e.localRequestGuards.set(n,r),r}function Es(e,t){if(!e||!t?.chatId||!(e.localRequestGuards instanceof Map))return;const n=e.localRequestGuards.get(t.chatId);!n||n.id!==t.id||e.localRequestGuards.delete(t.chatId)}function IF(e,t){const n=String(t||"").trim();if(!n||!(e?.localRequestGuards instanceof Map))return!1;const r=e.localRequestGuards.get(n);return r?Date.now()-Number(r.createdAt||0)>ka?(e.localRequestGuards.delete(n),!1):!0:!1}function Xa(e,t,n){if(!t)return n;if(!(n instanceof Response)||!n.ok||!n.body||typeof ReadableStream>"u")return Es(e,t),n;const r=n.body.getReader();let o=!1;const a=(s=0)=>{o||(o=!0,setTimeout(()=>Es(e,t),Math.max(0,Number(s||0))))},i=new ReadableStream({async pull(s){try{const{done:l,value:c}=await r.read();if(l){s.close(),a(Jy);return}s.enqueue(c)}catch(l){a(),s.error(l)}},async cancel(s){a();try{await r.cancel(s)}catch{}}});return new Response(i,{status:n.status,statusText:n.statusText,headers:n.headers})}function On(e){const t=Date.now();e.pendingJobs=e.pendingJobs.filter(n=>n&&!n.consumed&&t-Number(n.createdAt||0)<ka*2)}async function RF(e,t,n){const r=To(t);if(!r||xo(t,n)!=="POST")return null;let o;try{o=new URL(r,location.href)}catch{return null}if(o.origin!==location.origin||o.pathname!==NO)return null;const a=await $p(t,n);if(!a||typeof a!="object"||Array.isArray(a))return null;On(e);const i=BF(e,a);if(!i)return null;const s=await Ip(e,i);return s?.status&&(i.status=s.status),oo(e,{id:i.id,chatId:i.save?.chatId}),s&&u1(s)?(console.debug(`${T} save-generate saved ${i.save.file_name}; skipping native /api/chats/save`),i.consumed=!0,Ve(s),On(e),FF(s)):(console.debug(`${T} save-generate did not save ${i.save.file_name}; native /api/chats/save will run`,s),MF(e,t,n,i,s))}async function MF(e,t,n,r,o=null){const a=zS(e,r?.save?.chatId);try{const i=await e.originalFetch(t,n);return i?.ok?OF(e,r,o):ug(e,r),dg(e,a,Jy),i}catch(i){throw ug(e,r),dg(e,a),i}}function OF(e,t,n=null){!e||!t||(t.consumed=!0,Ve(n?.id?n:{id:t.id}),On(e))}function ug(e,t){!e||!t||(t.consumed=!0,On(e))}function dg(e,t,n=0){t&&setTimeout(()=>Es(e,t),Math.max(0,Number(n||0)))}function BF(e,t){const n=String(t.avatar_url||""),r=String(t.file_name||""),o=String(t.ch_name||"");for(let a=e.pendingJobs.length-1;a>=0;a-=1){const i=e.pendingJobs[a];if(!i||i.consumed)continue;const s=i.save||{};if(String(s.avatar_url||"")===n&&String(s.file_name||"")===r&&!(s.ch_name&&o&&String(s.ch_name)!==o))return i}return null}async function Ip(e,t,{onUpdate:n=null}={}){if(pn(t.status))return n?.({id:t.id,status:t.status}),{id:t.id,status:t.status};const r=await $F(e,t,{onUpdate:n}).catch(o=>(console.debug(`${T} save-generate event stream failed; falling back to polling`,o),null));return r&&pn(r.status)?r:DF(e,t,{onUpdate:n})}async function DF(e,t,{onUpdate:n=null}={}){const r=Date.now()+ka;for(;Date.now()<r;){const o=await GF(e.originalFetch,t.id).catch(a=>(console.debug(`${T} save-generate status polling failed`,a),null));if(o?.status&&(t.status=o.status,n?.(o)),o&&pn(o.status))return o;await Rp(FO)}return{id:t.id,status:"timeout"}}async function $F(e,t,{onUpdate:n=null}={}){if(!e?.originalFetch||!t?.id||typeof TextDecoder>"u")return null;const r=new Headers(me()),o=await e.originalFetch(`${ur}/${encodeURIComponent(t.id)}/events`,{method:"GET",headers:r,cache:"no-store"});if(o.status===404||o.status===405||o.status===501)return null;if(!o.ok||!o.body||typeof o.body.getReader!="function")throw new Error(`HTTP ${o.status}`);const a=o.body.getReader(),i=new TextDecoder;let s="",l=null;const c=u=>{const p=NF(u);if(!p.data)return null;let b=null;try{b=JSON.parse(p.data)}catch{return null}return b?.status?(l=b,t.status=b.status,n?.(b),b):null};try{for(;;){const{done:u,value:p}=await a.read();if(u)break;s+=i.decode(p,{stream:!0}),s=s.replace(/\r\n/g,`
`);let b=s.indexOf(`

`);for(;b>=0;){const v=s.slice(0,b);s=s.slice(b+2);const y=c(v);if(y&&pn(y.status))return y;b=s.indexOf(`

`)}}if(s+=i.decode(),s.trim()){const u=c(s);if(u&&pn(u.status))return u}}finally{a.releaseLock?.()}return l&&pn(l.status)?l:null}function NF(e){const t={type:"message",data:""},n=[];for(const r of String(e||"").split(`
`)){const o=r.replace(/\r$/,"");if(!o||o.startsWith(":"))continue;const a=o.indexOf(":"),i=a>=0?o.slice(0,a):o,s=a>=0?o.slice(a+1).replace(/^ /,""):"";i==="event"?t.type=s||"message":i==="data"&&n.push(s)}return t.data=n.join(`
`),t}function HF(e,t){!e?.originalFetch||!t||(e.localTerminalWatchJobIds instanceof Set||(e.localTerminalWatchJobIds=new Set),!e.localTerminalWatchJobIds.has(t)&&(e.localTerminalWatchJobIds.add(t),Ip(e,{id:t,status:""}).then(n=>{const r=String(n?.status||"");if(r==="failed"||r==="canceled"){Ve(n);return}ul(r)&&n?.id&&Dp({id:n.id,...n})&&(ua(e,n.id),Ve(n))}).catch(n=>{console.debug(`${T} save-generate local terminal watch failed`,n)}).finally(()=>{e.localTerminalWatchJobIds?.delete(t)})))}async function GF(e,t){const n=new Headers(me()),r=await e(`${ur}/${encodeURIComponent(t)}`,{method:"GET",headers:n,cache:"no-store"}),o=await r.json().catch(()=>null);if(!r.ok||o?.ok!==!0)throw new Error(o?.message||o?.error?.message||`HTTP ${r.status}`);return o.data||null}async function VS(e,t,{chatId:n=""}={}){const r=String(t||"").trim(),o=String(n||"").trim();if(!r&&!o)throw new Error("save-generate cancel requires jobId or chatId");const a=new Headers(me());a.set("Content-Type","application/json");const i=r?`${ur}/${encodeURIComponent(r)}/cancel`:`${ur}/cancel`,s={};r&&(s.jobId=r),o&&(s.chatId=o);const l=await e(i,{method:"POST",headers:a,cache:"no-store",body:JSON.stringify(s)}),c=await l.json().catch(()=>null);if(!l.ok||c?.ok!==!0){const u=new Error(c?.message||c?.error?.message||`HTTP ${l.status}`);throw u.status=l.status,u}return c.data||{id:r,status:"canceled"}}function FF(e){return new Response(JSON.stringify({ok:!0,skipped:!0,baibaokuSaveGenerate:!0,jobId:e.id,status:e.status}),{status:200,statusText:"OK",headers:{"Content-Type":"application/json; charset=utf-8","X-Baibaoku-Save-Generate-Skipped":"true"}})}function Rp(e){return new Promise(t=>setTimeout(t,e))}function pg(e){if(!e||e.resumeHandlersInstalled)return;e.resumeHandlersInstalled=!0;const t=n=>iu(e,n);w.CHAT_LOADED&&M.on(w.CHAT_LOADED,()=>t("chat-loaded")),w.CHAT_CHANGED&&M.on(w.CHAT_CHANGED,()=>t("chat-changed")),document.addEventListener("visibilitychange",()=>{document.visibilityState!=="hidden"&&t("visibility")}),window.addEventListener("focus",()=>t("focus")),window.addEventListener("pageshow",()=>t("pageshow"))}function mg(e){!e||e.messageDeleteHandlerInstalled||typeof M?.on!="function"||(e.messageDeleteHandlerInstalled=!0,M.on(w.MESSAGE_DELETED,()=>{zF(e)}))}async function zF(e){if(!e?.originalFetch||St)return;const t=Ht();if(t)try{const n=await VF(e.originalFetch,t);XF(e,t),oo(e,{chatId:t}),ao(e,t),e.lastResumeCheckChatId=t,e.lastResumeCheckAt=Date.now(),console.debug(`${T} save-generate discarded jobs after message delete`,n)}catch(n){console.debug(`${T} save-generate discard after message delete failed`,n)}}async function VF(e,t){const n=String(t||"").trim();if(!n)return null;const r=new Headers(me());r.set("Content-Type","application/json");const o=await e(OO,{method:"POST",headers:r,cache:"no-store",body:JSON.stringify({chatId:n})}),a=await o.json().catch(()=>null);if(!o.ok||a?.ok!==!0){const i=new Error(a?.message||a?.error?.message||`HTTP ${o.status}`);throw i.status=o.status,i}return a.data||null}function iu(e,t="unknown",n=zO){e&&(e.resumeCheckTimer&&clearTimeout(e.resumeCheckTimer),e.resumeCheckScheduledChatId=Ht(),e.resumeCheckScheduledLastMessageHash=Mp(),yn(e),e.resumeCheckTimer=setTimeout(()=>{e.resumeCheckTimer=null,e.resumeCheckScheduledChatId="",e.resumeCheckScheduledLastMessageHash="",yn(e),US(e,t)},n))}async function US(e,t="unknown",{force:n=!1,lastMessageHash:r=null}={}){if(!e?.isEnabled?.()||St)return null;const o=Ht();if(!o)return null;e.resumeCheckPromises instanceof Map||(e.resumeCheckPromises=new Map);const a=e.resumeCheckPromises.get(o);if(a)return a;const i=UF(e,o,t,{force:n,lastMessageHash:r});e.resumeCheckPromises.set(o,i),yn(e);try{return await i}finally{e.resumeCheckPromises?.get(o)===i&&e.resumeCheckPromises.delete(o),e.resumeCheckInFlightChatId===o&&(e.resumeCheckInFlightChatId=""),yn(e)}}async function UF(e,t,n="unknown",{force:r=!1,lastMessageHash:o=null}={}){if(!e?.isEnabled?.()||St||!t)return null;if(WF(e,t))return console.debug(`${T} save-generate resume check skipped: current page is generating this chat (${n})`),null;if(Q.is_send_press)return console.debug(`${T} save-generate resume check skipped: SillyTavern generation is still active (${n})`),null;if(n!=="generate-fetch"&&IF(e,t))return console.debug(`${T} save-generate resume check skipped: local generate request is pending (${n})`),null;const a=Date.now();if(!r&&e.lastResumeCheckChatId===t&&a-Number(e.lastResumeCheckAt||0)<VO)return console.debug(`${T} save-generate resume check skipped: same chat cooldown (${n})`),null;e.resumeCheckInFlightChatId=t;try{if(!await HS(e))return console.debug(`${T} save-generate resume check skipped: BaiBaoKu backend is unavailable (${n})`),null;const i=typeof o=="string"?o:Mp(),s=qS(),l=await JF(e.originalFetch,t,{lastMessageHash:i,lastMessageInfo:s}).catch(c=>(console.debug(`${T} save-generate resume check failed`,c),null));if(console.log(`${T} [楼层日志] resume检查(${n}) 上报末尾楼层=${s.floor} role=${s.role} → 后端${l?.id?`返回job=${l.id} status=${l.status} 期望楼层=${l.save?.expectedFloor}`:"未返回job(已被后端拦截或无job)"}`),e.lastResumeCheckChatId=t,e.lastResumeCheckAt=Date.now(),!l?.id)return null;if(Pa(l))return ua(e,l.id),l;if(QF(e,l.id)){const c=String(l.status||"");return pn(c)&&c!=="completed"?(ua(e,l.id),Ve(l),console.debug(`${T} save-generate resume check skipped: job is owned by current page job=${l.id} (${n})`),l):(console.debug(`${T} save-generate resume check skipped: job is owned by current page job=${l.id} status=${c} (${n})`),l)}return console.debug(`${T} save-generate resume check found job=${l.id} status=${l.status} reason=${n}`),YS(e,l,t,n),l}finally{e.resumeCheckInFlightChatId===t&&(e.resumeCheckInFlightChatId="")}}function WF(e,t){return!!(t&&e?.activeGenerateChatIds instanceof Set&&e.activeGenerateChatIds.has(t))}function fg(e){if(!e||e.recoveryInputBlockerInstalled)return;e.recoveryInputBlockerInstalled=!0;const t=n=>{if(!e?.isEnabled?.())return;const r=n?.target;if(!(r instanceof Element?r:r?.parentElement)?.closest?.(Xy))return;const a=Ht();!a||!WS(e,a)||(n.preventDefault(),n.stopImmediatePropagation(),jS(e),KS(e,a,"blocked-input"))};document.addEventListener("pointerdown",t,!0),document.addEventListener("click",t,!0)}function WS(e,t){return!!gi(e,t)}async function KF(e,t){const n=String(t?.save?.chatId||"").trim();if(!n)return null;const r=await KS(e,n,"generate-fetch");return r?(console.debug(`${T} save-generate blocked native generate while recovering job=${r.jobId||""}`),jS(e),YF(r)):null}async function KS(e,t,n="unknown"){const r=String(t||"").trim();if(!e||!r)return null;const o=gi(e,r);if(o)return o;const a=jF(e,r);if(a)return await a.catch(i=>{console.debug(`${T} save-generate pending resume check failed`,i)}),gi(e,r);if(e.resumeCheckTimer&&e.resumeCheckScheduledChatId===r){const i=String(e.resumeCheckScheduledLastMessageHash||"");clearTimeout(e.resumeCheckTimer),e.resumeCheckTimer=null,e.resumeCheckScheduledChatId="",e.resumeCheckScheduledLastMessageHash="",yn(e),await US(e,n,{force:!0,lastMessageHash:i}).catch(s=>{console.debug(`${T} save-generate forced resume check failed`,s)})}return gi(e,r)}function jF(e,t){return!t||!(e?.resumeCheckPromises instanceof Map)?null:e.resumeCheckPromises.get(t)||null}function qF(e,t,n){const r=String(n||t?.chatId||t?.save?.chatId||"").trim(),o=String(t?.id||"").trim();if(!e||!r||!o)return null;e.recoveryLocks instanceof Map||(e.recoveryLocks=new Map);const a={chatId:r,jobId:o,status:String(t?.status||""),createdAt:Date.now()};return e.recoveryLocks.set(r,a),yn(e),a}function gi(e,t){const n=String(t||"").trim();if(!n||!(e?.recoveryLocks instanceof Map))return null;const r=e.recoveryLocks.get(n)||null;return r?Date.now()-Number(r.createdAt||0)>ka*2?(e.recoveryLocks.delete(n),yn(e),null):r:null}function ao(e,t){if(!e||!(e.recoveryLocks instanceof Map))return;const n=typeof t=="string"?t:String(t?.chatId||t?.save?.chatId||"").trim(),r=typeof t=="string"?"":String(t?.jobId||t?.id||"").trim();if(!(!n&&!r)){for(const[o,a]of e.recoveryLocks.entries())n&&o!==n||r&&a.jobId&&a.jobId!==r||e.recoveryLocks.delete(o);yn(e)}}function yn(e){const t=Ht(),n=!!(t&&WS(e,t)),r=document.querySelectorAll(Xy);for(const o of r)if(o instanceof HTMLElement){if(n){o.dataset.baibaokuSaveGenerateRecoveryTitle||(o.dataset.baibaokuSaveGenerateRecoveryTitle=o.getAttribute("title")||""),o.setAttribute("title","柏宝库后台生成恢复中，请稍后再发送"),o.setAttribute("aria-disabled","true"),o.classList.add("bai-bai-save-generate-recovery-disabled");continue}if(o.classList.contains("bai-bai-save-generate-recovery-disabled")){const a=o.dataset.baibaokuSaveGenerateRecoveryTitle||"";a?o.setAttribute("title",a):o.removeAttribute("title"),delete o.dataset.baibaokuSaveGenerateRecoveryTitle,o.removeAttribute("aria-disabled"),o.classList.remove("bai-bai-save-generate-recovery-disabled")}}}function YF(e){return new Response(JSON.stringify({error:{message:"柏宝库后台生成恢复中，请稍后再发送。"},baibaokuSaveGenerateRecoveryBlocked:!0,jobId:e?.jobId||""}),{status:409,statusText:"Conflict",headers:{"Content-Type":"application/json; charset=utf-8","X-Baibaoku-Save-Generate-Recovery-Blocked":"true"}})}function jS(e){const t=Date.now();t-Number(e?.lastRecoveryBlockToastAt||0)<WO||(e&&(e.lastRecoveryBlockToastAt=t),Bp("柏宝库后台生成恢复中，请稍后再发送"))}function QF(e,t){return!t||!Array.isArray(e?.pendingJobs)?!1:(On(e),e.pendingJobs.some(n=>String(n?.id||"")===String(t)))}function ua(e,t){if(!(!t||!Array.isArray(e?.pendingJobs))){for(const n of e.pendingJobs)String(n?.id||"")===String(t)&&(n.consumed=!0);On(e)}}function XF(e,t){const n=String(t||"").trim();if(!(!n||!Array.isArray(e?.pendingJobs))){for(const r of e.pendingJobs)String(r?.save?.chatId||r?.chatId||"").trim()===n&&(r.consumed=!0,r.id&&Ve(r));On(e)}}async function JF(e,t,{lastMessageHash:n="",lastMessageInfo:r=null}={}){const o=new Headers(me()),a=new URLSearchParams({chatId:t});n&&a.set("lastMessageHash",n),r&&Number.isInteger(r.floor)&&r.floor>=0&&(a.set("lastMessageFloor",String(r.floor)),a.set("lastMessageRole",r.role||""));const i=await e(`${ur}/pending?${a.toString()}`,{method:"GET",headers:o,cache:"no-store"}),s=await i.json().catch(()=>null);if(!i.ok||s?.ok!==!0)throw new Error(s?.message||s?.error?.message||`HTTP ${i.status}`);return s.data||null}function Mp(){return qS().hash}function qS(){const e=vo();return e?.message?{hash:ZF(e.message.mes??"",e.floor),floor:e.floor,role:e.message.is_user===!0?"user":"assistant"}:{hash:"",floor:-1,role:""}}function ZF(e,t){const n=String(e??""),r=t==null?-1:Number(t),o=Number.isInteger(r)&&r>=0?r:-1,a=`${o}
${n}`;let i=2166136261;for(let s=0;s<a.length;s+=1)i^=a.charCodeAt(s),i=Math.imul(i,16777619);return`m${o}:${n.length.toString(36)}:${(i>>>0).toString(16).padStart(8,"0")}`}function e1(){if(document.getElementById(Af))return;const e=document.createElement("style");e.id=Af,e.textContent=`
.${ae} {
    position: fixed !important;
    top: auto !important;
    right: 18px !important;
    bottom: 18px !important;
    left: auto !important;
    display: flex !important;
    flex-direction: column !important;
    gap: 8px !important;
    width: min(520px, calc(100vw - 36px)) !important;
    max-height: min(70vh, 620px) !important;
    box-sizing: border-box !important;
    overflow: hidden !important;
    padding: 10px 12px !important;
    border: 1px solid var(--SmartThemeBorderColor, rgba(255, 255, 255, 0.18)) !important;
    border-radius: 8px !important;
    background: var(--SmartThemeBlurTintColor, rgba(32, 32, 32, 0.96)) !important;
    color: var(--SmartThemeBodyColor, #f1f1f1) !important;
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.28) !important;
    opacity: 0 !important;
    transform: translateY(8px) !important;
    transition: opacity 220ms ease, transform 220ms ease !important;
    z-index: 50000 !important;
}

.${ae}.bai-bai-save-generate-display-visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

.${ae}.bai-bai-save-generate-display-minimized .bai-bai-save-generate-display-content {
    display: none !important;
}

.${ae} .bai-bai-save-generate-display-label {
    display: flex !important;
    align-items: center !important;
    gap: 8px !important;
    min-height: 28px !important;
}

.${ae} .bai-bai-save-generate-display-led {
    flex: 0 0 auto !important;
    width: 9px !important;
    height: 9px !important;
    border-radius: 50% !important;
    background: #ffb020 !important;
    box-shadow: 0 0 0 0 rgba(255, 176, 32, 0.7) !important;
    animation: bai-bai-save-generate-pulse 1.4s infinite !important;
}

.${ae}.bai-bai-save-generate-display-complete .bai-bai-save-generate-display-led {
    background: #35c759 !important;
    box-shadow: 0 0 8px rgba(53, 199, 89, 0.8) !important;
    animation: none !important;
}

.${ae}.bai-bai-save-generate-display-stopped .bai-bai-save-generate-display-led {
    background: #ff453a !important;
    box-shadow: 0 0 8px rgba(255, 69, 58, 0.75) !important;
    animation: none !important;
}

.${ae} .bai-bai-save-generate-display-label-text {
    flex: 1 1 auto !important;
    min-width: 0 !important;
    overflow-wrap: anywhere !important;
    font-weight: 600 !important;
    line-height: 1.35 !important;
}

.${ae} .bai-bai-save-generate-display-controls {
    display: flex !important;
    flex: 0 0 auto !important;
    align-items: center !important;
    gap: 4px !important;
    margin-left: auto !important;
}

.${ae} .bai-bai-save-generate-display-btn {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 26px !important;
    height: 26px !important;
    min-width: 26px !important;
    min-height: 26px !important;
    padding: 0 !important;
    border: 1px solid var(--SmartThemeBorderColor, rgba(255, 255, 255, 0.18)) !important;
    border-radius: 6px !important;
    background: rgba(255, 255, 255, 0.08) !important;
    color: inherit !important;
    line-height: 1 !important;
    cursor: pointer !important;
}

.${ae} .bai-bai-save-generate-display-btn:hover {
    background: rgba(255, 255, 255, 0.14) !important;
}

.${ae} .bai-bai-save-generate-display-btn:disabled {
    cursor: default !important;
    opacity: 0.55 !important;
}

.${ae} .bai-bai-save-generate-display-content {
    display: flex !important;
    flex-direction: column !important;
    gap: 8px !important;
    min-height: 0 !important;
}

.${ae} .bai-bai-save-generate-display-reasoning,
.${ae} .bai-bai-save-generate-display-text {
    min-height: 0 !important;
}

.${ae} .bai-bai-save-generate-display-reasoning-label {
    margin-bottom: 4px !important;
    opacity: 0.75 !important;
    font-size: 0.9em !important;
}

.${ae} .bai-bai-save-generate-display-reasoning-content,
.${ae} .bai-bai-save-generate-display-text-content {
    max-height: 42vh !important;
    overflow: auto !important;
    overflow-wrap: anywhere !important;
    line-height: 1.45 !important;
}

.${ae} .bai-bai-save-generate-display-reasoning-content {
    max-height: 22vh !important;
    opacity: 0.88 !important;
}

@keyframes bai-bai-save-generate-pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(255, 176, 32, 0.7);
    }
    70% {
        box-shadow: 0 0 0 8px rgba(255, 176, 32, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(255, 176, 32, 0);
    }
}

@media (max-width: 768px), (pointer: coarse) {
    .${ae} {
        top: clamp(max(16px, env(safe-area-inset-top)), 24dvh, 180px) !important;
        right: auto !important;
        bottom: auto !important;
        left: 50% !important;
        width: calc(100dvw - 16px) !important;
        max-width: 560px !important;
        max-height: min(58dvh, 420px) !important;
        box-sizing: border-box !important;
        overflow: hidden !important;
        padding: 10px 12px !important;
        border-radius: 8px !important;
        transform: translate(-50%, -12px) !important;
    }

    .${ae}.bai-bai-save-generate-display-visible {
        transform: translate(-50%, 0) !important;
    }

    .${ae} .bai-bai-save-generate-display-label {
        min-height: 28px !important;
    }

    .${ae} .bai-bai-save-generate-display-label-text {
        white-space: normal !important;
        line-height: 1.35 !important;
    }

    .${ae} .bai-bai-save-generate-display-text-content {
        max-height: 42dvh !important;
    }

    .${ae} .bai-bai-save-generate-display-reasoning-content {
        max-height: 22dvh !important;
    }
}
`,document.head.appendChild(e)}function t1(e){const t=Array.from(document.querySelectorAll(`.${ae}`)),n=t.find(r=>r instanceof HTMLElement&&r.dataset.baibaokuSaveGenerateJobId===String(e||""))||t[t.length-1];n instanceof HTMLElement&&(n.classList.add(ae),n.dataset.baibaokuSaveGenerateJobId=String(e||""))}function YS(e,t,n,r="unknown"){if(qF(e,t,n),ul(t.status)){Ss(e,t),o1(t,n,r).catch(o=>{console.debug(`${T} save-generate recovery failed`,o)}).finally(()=>ao(e,t));return}if(pn(t.status)){Ss(e,t),Ve(t),ao(e,t);return}r1(e,t,n,r)}function Ss(e,t){if(!e||!t?.id||Pa(t))return;e.resumeDisplays instanceof Map||(e.resumeDisplays=new Map);let n=e.resumeDisplays.get(t.id);if(n?n.setLabel(ql(t)):(n=new Fv,n.show({label:ql(t),onStop:()=>n1(e,t.id)}),e.resumeDisplays.set(t.id,n)),t1(t.id),t.reasoning&&n.updateReasoning(t.reasoning),t.resultText&&n.updateContent(t.resultText),ul(t.status)){n.complete({label:"柏宝库生成已保存，正在恢复消息...",delay:1500}),gg(e,t.id);return}if(String(t.status||"")==="canceled"){Op(e,t);return}pn(t.status)&&(n.markStopped({label:ql(t)}),gg(e,t.id))}async function n1(e,t){const n=e?.resumeDisplays?.get(t);if(!e?.originalFetch||!t){n?.setLabel("柏宝库无法停止后台生成");return}try{n?.setLabel("柏宝库正在停止后台生成...");const r=await VS(e.originalFetch,t),o={id:t,...r||{},status:r?.status||"canceled"};Op(e,o)}catch(r){console.debug(`${T} save-generate cancel failed`,r),n?.setLabel("柏宝库停止失败，后台生成仍在继续...")}}function Op(e,t){if(!t?.id)return;if(oo(e,t),ao(e,t),Pa(t)){ua(e,t.id),e?.resumeDisplays?.get(t.id)?.hide(),e?.resumeDisplays?.delete(t.id);return}Ve(t),ua(e,t.id),e?.resumeDisplays?.get(t.id)?.hide(),e?.resumeDisplays?.delete(t.id),Bp("柏宝库后台生成已停止")}function Bp(e){typeof globalThis.toastr?.info=="function"&&globalThis.toastr.info(e,"柏宝库")}function gg(e,t){setTimeout(()=>{const n=e?.resumeDisplays?.get(t);(!n||n.isComplete||n.isStopped)&&e?.resumeDisplays?.delete(t)},5e3)}function ql(e){const t=String(e?.status||"");return ul(t)?"柏宝库生成已保存，正在恢复消息...":t==="failed"?"柏宝库后台生成失败":t==="canceled"?"柏宝库后台生成已停止":t==="conflict"?"柏宝库已生成内容，但未能自动保存":t==="saving"?"柏宝库正在保存生成内容...":"柏宝库后台生成中..."}function r1(e,t,n,r="unknown"){if(!t?.id||e.monitoredJobIds?.has(t.id))return;e.monitoredJobIds instanceof Set||(e.monitoredJobIds=new Set),e.monitoredJobIds.add(t.id);const o={id:t.id,save:t.save||{},status:t.status||""};Ss(e,t),Ip(e,o,{onUpdate:a=>Ss(e,a)}).then(a=>{if(String(a?.status||"")==="timeout"){console.debug(`${T} save-generate monitor timed out job=${t.id} reason=${r}`),ao(e,t);return}YS(e,a,n,`monitor:${r}`)}).catch(a=>{console.debug(`${T} save-generate monitor failed`,a),ao(e,t)}).finally(()=>{e.monitoredJobIds.delete(t.id)})}async function o1(e,t,n="unknown"){if(!(!e?.id||Pa(e))&&Ht()===String(t||"")&&(await a1(t),Ht()===String(t||""))){if(Dp(e)){Ve(e);return}if(c1(e.save?.type)){await i1(e,t,n);return}Ve(e),console.debug(`${T} save-generate saved non-normal job while page was away; reloading chat job=${e.id} reason=${n}`),await Do().catch(r=>{console.debug(`${T} save-generate chat reload failed`,r)})}}async function a1(e){const t=String(e||""),n=Date.now()+KO;for(;Date.now()<n;){if(Ht()!==t)return!1;if(bg())return!0;await Rp(jO)}return Ht()===t&&bg()}function bg(){const e=Q.chat;return Array.isArray(e)&&e.some(t=>t&&!t.chat_metadata)}async function i1(e,t,n="unknown"){if(!e?.id||Pa(e))return;const r=String(e.savedMessage?.mes??e.resultText??"");if(!r){Ve(e),console.debug(`${T} save-generate saved empty job; reloading chat job=${e.id} reason=${n}`),await Do().catch(a=>{console.debug(`${T} save-generate chat reload failed`,a)});return}if(Dp(e)){Ve(e);return}const o=String(e.savedMessage?.name||Xt?.[$e]?.name||e.save?.ch_name||Q.name2||"").trim();if(!o){Ve(e),console.debug(`${T} save-generate could not resolve character name; reloading chat job=${e.id} reason=${n}`),await Do().catch(a=>{console.debug(`${T} save-generate chat reload failed`,a)});return}try{console.debug(`${T} save-generate saved while page was away; inserting with sendas job=${e.id} reason=${n}`),await dv({name:o,return:"none"},r),Ve(e)}catch(a){console.debug(`${T} save-generate sendas recovery failed; reloading chat job=${e.id}`,a),Ve(e),await Do().catch(i=>{console.debug(`${T} save-generate chat reload failed`,i)})}}function s1(e){const t=Number.isInteger(e?.save?.expectedFloor)?e.save.expectedFloor:-1;if(t<0)return console.log(`${T} [楼层日志] 恢复判定 job=${e?.id} 期望楼层=缺失(旧job) → 回退旧逻辑`),null;const n=vo(),r=n&&Number.isInteger(n.floor)?n.floor:-1,o=r+1===t;return console.log(`${T} [楼层日志] 恢复判定 job=${e?.id} 当前末尾楼层=${r} 期望楼层=${t} 末尾+1=${r+1} → ${o?"一致,允许插入(恢复)":"不一致,不插入(挡重复)"}`),o}function Dp(e){const t=s1(e);if(t!==null)return!t;const n=Q.chat;if(!Array.isArray(n)||n.length===0)return!1;const r=String(e.savedMessage?.mes??e.resultText??"");if(!r)return!1;const o=Number.isInteger(e.savedMessageFloor)?e.savedMessageFloor:-1,a=vo();if(a?.message&&a.message.is_user!==!0&&Number.isInteger(o)&&o>=0&&a.floor>=o)return!0;for(let i=n.length-1;i>=0;i-=1){const s=n[i];if(!(!s||s.chat_metadata))return s.is_user!==!0&&l1(s.mes,r)}return!1}function hg(e){return String(e??"").replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).replace(/\n?data:\s*\[DONE\]\s*$/i,"").trim()}function l1(e,t){const n=hg(e),r=hg(t);return!!(r&&n.includes(r))}function c1(e){return["normal","regenerate"].includes(String(e||"normal"))}function pn(e){return["completed","saved","already_saved","conflict","failed","canceled"].includes(String(e||""))}function ul(e){return["completed","saved","already_saved"].includes(String(e||""))}function u1(e){const t=String(e?.status||"");return["saved","already_saved"].includes(t)?e.chatSaved===!0||e.chatSaved===void 0:!1}function QS(e){return`${UO}:${e?.id||""}`}function Pa(e){if(!e?.id)return!0;try{return localStorage.getItem(QS(e))==="1"}catch{return!1}}function Ve(e){if(e?.id)try{localStorage.setItem(QS(e),"1")}catch{}}async function $p(e,t){if(Object.prototype.hasOwnProperty.call(t||{},"body")){const n=t.body;if(typeof n=="string")return _g(n);if(Hp(n))return _g(await n.text())}if(!wr(e)||e.bodyUsed||!e.body)return null;try{return await e.clone().json().catch(()=>null)}catch{return null}}function _g(e){try{return JSON.parse(e)}catch{return null}}function d1(){const e=globalThis[Bl];if(e?.wrappedFetch)return e.isEnabled=()=>g.saveRequestGzipEnabled!==!1,e;const t=globalThis.fetch;if(typeof t!="function")return null;const n={originalFetch:t.bind(globalThis),wrappedFetch:null,isEnabled:()=>g.saveRequestGzipEnabled!==!1};return n.wrappedFetch=async function(o,a){try{if(!n.isEnabled())return n.originalFetch(o,a);const i=p1(o);if(!i)return n.originalFetch(o,a);const s=xo(o,a);if(!["POST","PUT","PATCH"].includes(s))return n.originalFetch(o,a);const l=dl(o,a);if(l.has("Content-Encoding"))return n.originalFetch(o,a);const c=await f1(o,a);if(!c)return n.originalFetch(o,a);const u=await g1(c.body,{method:s,path:i.pathname,caller:qD()});if(!u)return n.originalFetch(o,a);const p=new Headers(l);c.contentType&&!p.has("Content-Type")&&p.set("Content-Type",c.contentType),p.set("Content-Encoding","gzip"),p.delete("Content-Length");const b={...a||{},method:s,headers:p,body:u};try{const v=await n.originalFetch(o,b);if(!v?.ok){console.warn(`${T} Gzip save request returned ${v?.status||"non-OK"}, retrying uncompressed.`);const y=yg(o,a,s,l,c);return n.originalFetch(y.input,y.init)}return v}catch(v){console.warn(`${T} Gzip save request failed, retrying uncompressed:`,v);const y=yg(o,a,s,l,c);return n.originalFetch(y.input,y.init)}}catch(i){return console.warn(`${T} Gzip save request skipped:`,i),n.originalFetch(o,a)}},n.wrappedFetch[Bl]=!0,globalThis[Bl]=n,globalThis.fetch=n.wrappedFetch,n}function p1(e){const t=To(e);if(!t)return null;try{const n=new URL(t,location.href);return![...hB].some(o=>n.pathname===o||n.pathname.endsWith(o))||y1(n.hostname)?null:n}catch{return null}}function To(e){return typeof e=="string"?e:typeof URL<"u"&&e instanceof URL?e.href:wr(e)?e.url:""}function xo(e,t){return String(t?.method||(wr(e)?e.method:"")||"GET").toUpperCase()}function dl(e,t){return t?.headers?new Headers(t.headers):wr(e)?new Headers(e.headers):new Headers}function Np(e,t){const n={};if(!wr(e))return n;const r=["cache","credentials","integrity","keepalive","mode","redirect","referrer","referrerPolicy","signal"];for(const o of r){if(t&&Object.prototype.hasOwnProperty.call(t,o))continue;const a=e[o];a!==void 0&&(n[o]=a)}return n}function m1(e){if(e==null)return null;if(typeof e=="string")return e.length>0?{body:e,contentType:"text/plain;charset=UTF-8"}:null;if(Hp(e))return e.size>0?{body:e,contentType:e.type||""}:null;if(typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer)return e.byteLength>0?{body:e,contentType:""}:null;if(typeof ArrayBuffer<"u"&&ArrayBuffer.isView(e))return e.byteLength>0?{body:e,contentType:""}:null;if(b1(e)){const t=e.toString();return t.length>0?{body:t,contentType:"application/x-www-form-urlencoded;charset=UTF-8"}:null}return h1(e)||_1(e),null}async function f1(e,t){if(Object.prototype.hasOwnProperty.call(t||{},"body"))return m1(t.body);if(!wr(e)||e.bodyUsed||!e.body)return null;const n=await e.clone().blob();return n.size>0?{body:n,contentType:n.type||""}:null}async function g1(e,t={}){if(typeof CompressionStream!="function")return null;const n=Hp(e)?e:new Blob([e]),r=performance.now();try{const o=n.stream().pipeThrough(new CompressionStream("gzip")),a=await new Response(o).blob();return Wf({...t,startedAt:r,duration:performance.now()-r,originalBytes:n.size,compressedBytes:a.size}),a.size>0?a:null}catch(o){throw Wf({...t,startedAt:r,duration:performance.now()-r,originalBytes:n.size,compressedBytes:0,caller:`${t?.caller||""} error=${o?.message||o}`}),o}}function yg(e,t,n,r,o){const a=new Headers(r);return a.delete("Content-Encoding"),a.delete("Content-Length"),o.contentType&&!a.has("Content-Type")&&a.set("Content-Type",o.contentType),{input:wr(e)?e.url:e,init:{...Np(e,t),...t||{},method:n,headers:a,body:o.body}}}function wr(e){return typeof Request<"u"&&e instanceof Request}function Hp(e){return typeof Blob<"u"&&e instanceof Blob}function b1(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}function h1(e){return typeof FormData<"u"&&e instanceof FormData}function _1(e){return typeof ReadableStream<"u"&&e instanceof ReadableStream}function y1(e){const t=E1(e);if(!t)return!1;if(t==="localhost"||t.endsWith(".localhost"))return!0;const n=XS(t);return n?JS(n):S1(t)}function E1(e){return String(e||"").trim().toLowerCase().replace(/^\[|\]$/g,"").replace(/\.+$/g,"")}function XS(e){const t=e.split(".");if(t.length!==4)return null;const n=[];for(const r of t){if(!/^\d{1,3}$/.test(r))return null;const o=Number(r);if(!Number.isInteger(o)||o<0||o>255)return null;n.push(o)}return n}function JS([e,t]){return e===0||e===10||e===127||e===169&&t===254||e===172&&t>=16&&t<=31||e===192&&t===168}function S1(e){if(!e.includes(":"))return!1;if(e==="::1"||e==="0:0:0:0:0:0:0:1")return!0;if(e.startsWith("::ffff:")){const r=XS(e.slice(7));return r?JS(r):!1}const t=e.split(":")[0];if(!/^[0-9a-f]{1,4}$/.test(t))return!1;const n=parseInt(t,16);return(n&65024)===64512||(n&65472)===65152}
//# sourceMappingURL=index.js.map
