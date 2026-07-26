const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["vue.runtime.esm-bundler.GI5_MaGP.chunk.js","runtime-core.esm-bundler.DIxo5j2D.chunk.js","vue-draggable-next.esm-bundler.DMkWxeed.chunk.js","index.C_abXisK.chunk.js","index.B5fiB6ig.chunk.js","index.DR6-X5CW.chunk.js","index.BDKGZZC0.chunk.js","index.CZC4xwU-.chunk.js","index.Cdu3_o3o.chunk.js","index.BZrLMojD.chunk.js"])))=>i.map(i=>d[i]);
import*as Q from"../../../../../script.js";import{getRequestHeaders as me,characters as Xt,this_chid as $e,setActiveCharacter as zp,saveSettingsDebounced as Yt,openCharacterChat as fl,selectCharacterById as av,getCurrentChatId as We,eventSource as M,event_types as w,saveSettings as fr,chat_metadata as iv,messageFormatting as sv,reloadCurrentChat as Do}from"../../../../../script.js";import{timestampToMoment as Sg,escapeHtml as Lr,getStringHash as qr,uuidv4 as ct,resetScrollHeight as bi,getCharaFilename as lv,debounce as gl,cancelDebounce as cv,getFileText as uv,download as lu,setInfoBlock as bl,regexFromString as dv}from"../../../../../scripts/utils.js";import{t as d}from"../../../../../scripts/i18n.js";import{isMobile as de,favsToHotswap as pv}from"../../../../../scripts/RossAscends-mods.js";import{power_user as Y,applyPowerUserSettings as mv}from"../../../../../scripts/power-user.js";import{oai_settings as z,promptManager as m,openai_setting_names as Ja,settingsToUpdate as fv,openai_settings as Co}from"../../../../../scripts/openai.js";import{getTokenizerModel as io}from"../../../../../scripts/tokenizers.js";import{INJECTION_POSITION as De}from"../../../../../scripts/PromptManager.js";import{callGenericPopup as fe,POPUP_TYPE as ge,POPUP_RESULT as Kn}from"../../../../../scripts/popup.js";import{getPresetManager as gr}from"../../../../../scripts/preset-manager.js";import*as gv from"../../../../../scripts/group-chats.js";import{selected_group as St}from"../../../../../scripts/group-chats.js";import{renderTemplateAsync as bv}from"../../../../../scripts/templates.js";import{extension_settings as j,extensionTypes as Vp,writeExtensionField as hv,renderExtensionTemplateAsync as da}from"../../../../../scripts/extensions.js";import{AutoComplete as xn}from"../../../../../scripts/autocomplete/AutoComplete.js";import{METADATA_KEY as _v,world_names as Ir,world_info as yv,selected_world_info as vg,loadWorldInfo as Tg,setWIOriginalDataValue as Up,saveWorldInfo as Ev}from"../../../../../scripts/world-info.js";import{sendMessageAs as Sv}from"../../../../../scripts/slash-commands.js";import{isAdmin as vv}from"../../../../../scripts/user.js";import{SCRIPT_TYPES as H,getCurrentPresetAPI as so,getCurrentPresetName as lo,getScriptsByType as he,substitute_find_regex as xg,runRegexScript as Tv}from"../../../../../scripts/extensions/regex/engine.js";const xv="modulepreload",wv=function(e){return"/"+e},Wp={},tt=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=i?.nonce||i?.getAttribute("nonce");o=l(n.map(c=>{if(c=wv(c),c in Wp)return;Wp[c]=!0;const u=c.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const b=document.createElement("link");if(b.rel=u?"stylesheet":xv,u||(b.as="script"),b.crossOrigin="",b.href=c,s&&b.setAttribute("nonce",s),document.head.appendChild(b),u)return new Promise((v,y)=>{b.addEventListener("load",v),b.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return o.then(i=>{for(const s of i||[])s.status==="rejected"&&a(s.reason);return t().catch(a)})},hl="__baiBaiToolkitReduceLoadedFloorsFetchPatched",Mo=10,wg=new Set(["chat_truncation","chat_truncation_counter"]),Cv=new Set(["/api/chats/get","/api/chats/group/get"]),Kp="__baiBaiToolkitFastChatSearchFetchPatched",kv="/api/plugins/baibaoku/v1/chats/fast-search",jp="__baiBaiToolkitFastChatBackupsFetchPatched",Av="/api/backups/chat/get",Pv="/api/plugins/baibaoku/v1/chat-backups/fast-list",qp="bai_bai_toolkit_fast_chat_list_scroll_style",cu=".chatBackupsList",Cg=".chatBackupsListItem",kg="--bai-bai-toolkit-chat-backup-item-height",Lv=64,Ql="bai_bai_toolkit_long_chat_dom_render_style",hi="bai_bai_toolkit_message_edit_bottom_actions_style",Yp="__baiBaiToolkitChatDeleteEditHandler",Iv="__baiBaiToolkitChatDeleteMessageDeletedHandler",Rv="__baiBaiToolkitChatDeleteGenerationActionHandler",Ra="__baiBaiToolkitMessageEditBottomActions",Qp="__baiBaiToolkitWelcomeRecentChatDirectOpenHandler",Xp="__baiBaiToolkitWelcomeRecentChatDirectOpenCurrentHandler",Ma="__baiBaiToolkitMessageCompletionScrollHandler",Jp="__baiBaiToolkitMobileAutoKeyboardHandler",Zp="__baiBaiToolkitMobileAutoKeyboardFocusPatched",em="__baiBaiToolkitMobileAutoKeyboardJQueryFocusPatched",tm="__baiBaiToolkitMobileAutoKeyboardJQueryTriggerPatched",nm="__baiBaiToolkitMessageEditScrollTopPatched",Mv=6e4,Ov=12e3,Bv=24e3,Dv=20,Ag=900,Pg=6,$o=8,Lg=4,$v=.18,Nv=24,Hv=160,Ig=80,Gv=500,Fv=16,zv=1.25,Vv=80,Uv=8e4,Wv=.35,Kv=4,_i=!1,yi="bai-bai-toolkit-long-chat-bottom-anchor",Ei="bai-bai-toolkit-long-chat-bottom-anchored",rr="--bai-bai-toolkit-long-chat-mes-height",Rg=5e3,jv=1500,uu=2,qv=[0,50,160],Yv=[0,50,160,360,800],Mg=24,Og=2,Qv=1200,Xv="#send_but, #option_regenerate, #option_continue, #option_impersonate, #mes_continue, #mes_impersonate",Bg="#chat .mes_edit",Jv="#chat .welcomePanel",Zv="#chat .welcomePanel .recentChat",eT=".renameChat, .deleteChat, .pinChat, button, a, input, select, textarea",cn="bai-bai-toolkit-message-edit-bottom-actions",Si=`#curEditTextarea, .mes_edit_buttons, .mes_edit_done, .mes_edit_cancel, .${cn}`,tT=`.mes_edit_buttons, .mes_edit_done, .mes_edit_cancel, .${cn}`,Bt="#curEditTextarea, .reasoning_edit_textarea",Dg="#curEditTextarea, #select_chat_search",du="#send_textarea",$g=`${Dg}, ${du}`,Za="#shadow_select_chat_popup",Ng="#select_chat_div",pu=new Set(["builtin","url","local"]),nT="baiBaiToolkit",rT=1,wn="messageCompletionSounds",mu="local",oT=5*1024*1024,aT=1e3,iT="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQQAAAAAAA==",vi=[{id:"guoke-bell",label:"果壳铃",file:"果壳铃.mp3"},{id:"stardew-fish",label:"星露谷 - 钓鱼上钩",file:"星露谷-钓鱼上钩.mp3"},{id:"stardew-achievement",label:"星露谷 - 成就",file:"星露谷-成就.mp3"},{id:"pokemon-heal",label:"宝可梦 - 治疗",file:"宝可梦-治疗.mp3"},{id:"pokemon-berry",label:"宝可梦 - 摘果子",file:"宝可梦-摘果子.mp3"},{id:"zelda-get",label:"塞尔达 - 获取",file:"塞尔达-获取.mp3"},{id:"zelda-complete",label:"塞尔达 - 完成",file:"塞尔达-完成.mp3"},{id:"bubble",label:"Q弹气泡",file:"Q弹气泡.mp3"},{id:"line-yangqin",label:"LINE - 扬琴",file:"LINE-扬琴.mp3"}];let C={},_={},Ee="[柏宝箱]",Ti=null;function sT(e={}){C=e.settings??C,_=e.extensionState??_,Ee=e.logPrefix??Ee,Ti=e.recordLongDomRefresh??Ti}let fu=0;function Hg(){const e=document.getElementById(qp);if(!C.chatListScrollOptimizationEnabled){e?.remove(),cT();return}if(!e){const n=document.createElement("style");n.id=qp,n.textContent=`
${Za} ${Ng} > .select_chat_block_wrapper {
    content-visibility: auto;
    contain: layout paint style;
    contain-intrinsic-size: 72px;
}

${Za} ${cu} > ${Cg} {
    content-visibility: auto;
    contain: layout paint style;
    contain-intrinsic-size: auto var(${kg}, ${Lv}px);
}
`,document.head.append(n)}const t=document.querySelector(Za);t&&gu(t)}function gu(e){if(!(e instanceof Element))return!1;const t=e.querySelector(cu);if(t instanceof HTMLElement)return _.chatBackupListAttachObserver?.disconnect(),_.chatBackupListAttachObserver=null,_.chatBackupListObserverTarget!==t&&(_.chatBackupListMutationObserver?.disconnect(),_.chatBackupListResizeObserver?.disconnect(),_.chatBackupListObserverTarget=t,_.chatBackupListMutationObserver=new MutationObserver(()=>{ei(e)}),_.chatBackupListMutationObserver.observe(t,{childList:!0}),_.chatBackupListResizeObserver=typeof ResizeObserver=="function"?new ResizeObserver(()=>{ei(e)}):null,_.chatBackupListResizeObserver?.observe(t)),ei(e),!0;if(_.chatBackupListAttachObserver)return!1;const n=new MutationObserver(()=>{gu(e)&&(n.disconnect(),_.chatBackupListAttachObserver===n&&(_.chatBackupListAttachObserver=null))});return n.observe(e,{childList:!0,subtree:!0}),_.chatBackupListAttachObserver=n,!1}function ei(e){!C.chatListScrollOptimizationEnabled||!(e instanceof Element)||_.chatBackupItemMeasureFrame!==void 0&&_.chatBackupItemMeasureFrame!==null||(_.chatBackupItemMeasureFrame=requestAnimationFrame(()=>{_.chatBackupItemMeasureFrame=null,lT(e)}))}function lT(e){const t=e.querySelector(cu);if(!(t instanceof HTMLElement)||!t.classList.contains("open"))return;const n=t.getBoundingClientRect(),r=t.firstElementChild;if(!(r instanceof HTMLElement)||!r.matches(Cg))return;const o=r.getBoundingClientRect();if(o.height<=0||o.bottom<=n.top||o.top>=n.bottom)return;const a=Math.ceil(o.height);!Number.isFinite(a)||a<=0||Number(t.dataset.baiBaiToolkitBackupItemHeight||0)===a||(t.dataset.baiBaiToolkitBackupItemHeight=String(a),t.style.setProperty(kg,`${a}px`))}function cT(){_.chatBackupItemMeasureFrame!==void 0&&_.chatBackupItemMeasureFrame!==null&&cancelAnimationFrame(_.chatBackupItemMeasureFrame),_.chatBackupItemMeasureFrame=null,_.chatBackupListAttachObserver?.disconnect(),_.chatBackupListAttachObserver=null,_.chatBackupListMutationObserver?.disconnect(),_.chatBackupListMutationObserver=null,_.chatBackupListResizeObserver?.disconnect(),_.chatBackupListResizeObserver=null,_.chatBackupListObserverTarget=null}function Gg(){if(_.chatManagementPopupObserver)return!0;const e=document.querySelector(Za);if(!e)return!1;let t=rm(e);const n=new MutationObserver(()=>{const r=rm(e);t&&!r&&uT(e),!t&&r&&ei(e),t=r});return n.observe(e,{attributes:!0,attributeFilter:["style","class"]}),gu(e),_.chatManagementPopupObserver=n,!0}function rm(e){return getComputedStyle(e).display!=="none"}function uT(e){if(!C.chatListAutoClearEnabled)return;fu+=1;const t=e.querySelector(Ng);!t||!t.children.length||t.replaceChildren()}function dT(){const e=globalThis.fetch;if(typeof e!="function"||e[Kp])return;async function t(n,r){const o=await gT(n,r);if(o)try{return await _T(e,o)}catch(a){if(console.debug(`${Ee} Backend fast-search path failed; trying legacy fast path`,a),o.avatarUrl)try{return await yT(e,{avatarUrl:o.avatarUrl})}catch(i){console.debug(`${Ee} Legacy fast chat list path failed; falling back to /api/chats/search`,i)}}return e.apply(this,arguments)}t[Kp]=!0,t.__baiBaiToolkitOriginalFetch=e,globalThis.fetch=t}function pT(){const e=globalThis.fetch;if(typeof e!="function"||e[jp])return;async function t(n,r){if(mT(n,r)){Gg();try{return await fT(e,n,r)}catch(o){if(o?.name==="AbortError")throw o;console.debug(`${Ee} Fast chat backup list failed; falling back to native endpoint`,o)}}return e.apply(this,arguments)}t[jp]=!0,t.__baiBaiToolkitOriginalFetch=e,globalThis.fetch=t}function mT(e,t){try{const n=e instanceof Request?e.url:String(e),r=new URL(n,location.origin);return String(t?.method||(e instanceof Request?e.method:"GET")).toUpperCase()==="POST"&&r.origin===location.origin&&r.pathname===Av}catch{return!1}}async function fT(e,t,n){const r=n?.signal??(t instanceof Request?t.signal:void 0),o=await e(Pv,{method:"POST",headers:me(),body:JSON.stringify({}),signal:r});if(!o.ok)throw new Error(`Unexpected status ${o.status}`);return o}async function gT(e,t){if(!C.fastChatListEnabled||!bT(e)||String(t?.method||(e instanceof Request?e.method:"GET")).toUpperCase()!=="POST")return null;const r=await hT(e,t);if(!r||typeof r!="object")return null;const o=String(r.query??""),a=r.avatar_url,i=r.group_id;if(o.trim().length!==0)return null;const s=typeof a=="string"&&a.length>0,l=typeof i=="string"&&i.length>0;return!s&&!l?null:{avatarUrl:s?a:void 0,groupId:l?i:void 0}}function bT(e){try{const t=e instanceof Request?e.url:String(e),n=new URL(t,location.origin);return n.origin===location.origin&&n.pathname==="/api/chats/search"}catch{return!1}}async function hT(e,t){const n=t?.body;if(typeof n=="string")return IT(n);if(e instanceof Request)try{return await e.clone().json().catch(()=>null)}catch{return null}return null}async function _T(e,{avatarUrl:t,groupId:n}){const r={query:""};n?r.group_id=n:r.avatar_url=t;const o=await e(kv,{method:"POST",headers:me(),body:JSON.stringify(r)});if(!o.ok)throw new Error(`Unexpected status ${o.status}`);const a=await o.json();if(!Array.isArray(a))throw new Error("fast-search returned a non-array payload");return new Response(JSON.stringify(a),{status:200,headers:{"Content-Type":"application/json"}})}async function yT(e,{avatarUrl:t}){const n=await e("/api/characters/chats",{method:"POST",headers:me(),body:JSON.stringify({avatar_url:t,simple:!0})});if(!n.ok)throw new Error(`Unexpected status ${n.status}`);const r=await n.json(),o=Array.isArray(r)?r.map(CT).filter(Boolean):[];o.sort((i,s)=>Xl(s.last_mes)-Xl(i.last_mes));const a=++fu;return setTimeout(()=>{vT(o,a),ET(e,t,a)},0),new Response(JSON.stringify(o),{status:200,headers:{"Content-Type":"application/json"}})}async function ET(e,t,n){if(vs(n))try{const r=await ST(e,t);xT(r,n)}catch(r){console.debug(`${Ee} Failed to hydrate full chat list metadata`,r)}}async function ST(e,t){const n=await e("/api/characters/chats",{method:"POST",headers:me(),body:JSON.stringify({avatar_url:t})});if(!n.ok)throw new Error(`Unexpected status ${n.status}`);const r=await n.json();return Array.isArray(r)?r.map(kT).filter(Boolean):[]}function vT(e,t){if(vs(t))for(const n of e){const r=Fg(n.file_name);r.length&&(r.find(".chat_file_size").text("(...,"),r.find(".chat_messages_num").text("... 💬)"))}}function TT(e,t){if(!vs(t))return;const n=Fg(e.file_name);n.length&&(n.find(".chat_file_size").text(`(${e.file_size},`),n.find(".chat_messages_num").text(`${e.message_count} 💬)`),n.find(".select_chat_block_mes").text(e.preview_message),n.find(".chat_messages_date").text(Sg(e.last_mes).format("lll")))}function xT(e,t){if(!vs(t))return;const n=new Map;e.forEach((r,o)=>{TT(r,t),n.set(r.file_name,{index:o,time:Xl(r.last_mes)})}),wT(n)}function wT(e){const t=$("#select_chat_div"),n=t.children(".select_chat_block_wrapper").get();n.sort((r,o)=>{const a=$(r).find(".select_chat_block").attr("file_name"),i=$(o).find(".select_chat_block").attr("file_name"),s=e.get(a)??{time:0,index:Number.MAX_SAFE_INTEGER},l=e.get(i)??{time:0,index:Number.MAX_SAFE_INTEGER};return l.time-s.time||s.index-l.index}),t.append(n)}function Fg(e){return $("#select_chat_div .select_chat_block").filter((t,n)=>$(n).attr("file_name")===e).closest(".select_chat_block_wrapper")}function vs(e){return e===fu&&String($("#select_chat_search").val()??"").trim().length===0}function CT(e){if(!e||typeof e!="object")return null;const t=zg(e);return t?{file_name:t,file_size:"...",message_count:"...",last_mes:AT(t),preview_message:""}:null}function kT(e){if(!e||typeof e!="object")return null;const t=zg(e);if(!t)return null;const n=Number(e.chat_items);return{file_name:t,file_size:e.file_size??"",message_count:Number.isFinite(n)?n:0,last_mes:PT(e.last_mes),preview_message:LT(e.mes)}}function zg(e){const t=typeof e.file_id=="string"&&e.file_id?e.file_id:e.file_name;return typeof t!="string"?"":t.replace(/\.jsonl$/i,"")}function AT(e){const n=String(e).replace(/\.jsonl$/i,"").match(/(\d{4})-(\d{1,2})-(\d{1,2})(?:\s*@|@|\s+)?(\d{1,2})h\s*(\d{1,2})m(?:\s*(\d{1,2})s)?(?:\s*(\d{1,3})ms)?/i);if(n){const[,r,o,a,i,s,l="0",c="0"]=n,u=new Date(Number(r),Number(o)-1,Number(a),Number(i),Number(s),Number(l),Number(c));if(!Number.isNaN(u.getTime()))return u.toISOString()}return new Date().toISOString()}function PT(e){return typeof e=="number"&&Number.isFinite(e)?new Date(e).toISOString():e}function Xl(e){const t=Sg(e).valueOf();return Number.isFinite(t)?t:0}function LT(e){return typeof e!="string"||e==="[The chat is empty]"||e==="[The message is empty]"?"":e.length>400?"..."+e.substring(e.length-400):e}function IT(e){try{return JSON.parse(e)}catch{return null}}const Jl=Q.createOrEditCharacter,Vg=Q.messageEdit,om=Q.unshallowCharacter;function Ug(){const e=_[Qp];if(e?.[Xp])return;typeof e=="function"&&document.removeEventListener("click",e,!0);const t=n=>{RT(n)};t[Xp]=!0,_[Qp]=t,document.addEventListener("click",t,!0)}function RT(e){if(!C.welcomeRecentChatDirectOpenEnabled)return;const t=e.target instanceof Element?e.target:null;if(!t||t.closest(eT))return;const n=t.closest(Zv);if(!(n instanceof HTMLElement))return;const r=n.getAttribute("data-avatar"),o=n.getAttribute("data-group"),a=n.getAttribute("data-file");if(!r||!a||o)return;const i=Xt.findIndex(s=>s?.avatar===r);i!==-1&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),!_.welcomeRecentChatDirectOpenPromise&&(_.welcomeRecentChatDirectOpenPromise=MT(i,r,a).finally(()=>{_.welcomeRecentChatDirectOpenPromise=null})))}async function MT(e,t,n){try{await OT(e);const r=Xt[e];if(!r){console.error(`${Ee} Character not found for avatar ID: ${t}`);return}if(String($e)===String(e)){if(zp(t),Yt(),BT(n)){console.debug(`${Ee} Chat ${n} is already open.`);return}await fl(n);return}const o=r.chat;if(r.chat=n,await av(e),String($e)!==String(e)){r.chat===n&&o!==n&&(r.chat=o);return}if(zp(t),Yt(),We()!==n){await fl(n);return}o!==n&&(typeof Jl=="function"?await Jl(new CustomEvent("newChat")):await fl(n))}catch(r){console.error(`${Ee} Error opening recent chat`,r),toastr.error(d`Failed to open recent chat. See console for details.`)}}async function OT(e){typeof om!="function"||!Xt[e]?.shallow||await om(e)}function BT(e){return We()===e&&!Bn()}function Bn(e=document){return e instanceof Document||e instanceof Element?!!e.querySelector(Jv):!1}function Wg(){if(!C.longChatDomRenderOptimizationEnabled){$T();return}DT(),jn({autoScroll:!0,reason:"apply"})}function pe(){(!_.longChatDomRenderOptimization||typeof _.longChatDomRenderOptimization!="object")&&(_.longChatDomRenderOptimization={});const e=_.longChatDomRenderOptimization;return e.heightCache instanceof Map||(e.heightCache=new Map),e.messageRecords instanceof Map||(e.messageRecords=new Map),e.pendingMessageIds instanceof Set||(e.pendingMessageIds=new Set),e.tailMessageIds instanceof Set||(e.tailMessageIds=new Set),e.roleHeightEstimators instanceof Map||(e.roleHeightEstimators=new Map),Array.isArray(e.eventHandlers)||(e.eventHandlers=[]),e}function DT(){const e=pe();if(Kg(),jg(),!e.installed){const t=()=>{e.userScrolledAway=!1,jn({autoScroll:!0,reason:"chat-load",mode:"full"})},n=(l="chat-update")=>{jn({autoScroll:!1,reason:l,mode:"full"})},r=l=>{jn({autoScroll:!1,reason:"message-rendered",mode:"incremental",messageIds:[l]})},o=l=>{jn({autoScroll:!1,reason:"message-updated",mode:"incremental",messageIds:[l]})},a=()=>{nx(),n("message-deleted")},i=()=>{e.generationActive=!0,e.generationAnchorEnabled=!1,jn({autoScroll:!1,reason:"generation-started",mode:"incremental",messageIds:[lx()]})},s=()=>{e.generationActive=!1,e.generationAnchorEnabled=!1,Jo(e)};Ut(w.CHAT_CHANGED,t),Ut(w.CHAT_LOADED,t),Ut(w.MORE_MESSAGES_LOADED,()=>n("more-messages-loaded")),Ut(w.USER_MESSAGE_RENDERED,r),Ut(w.CHARACTER_MESSAGE_RENDERED,r),Ut(w.MESSAGE_UPDATED,o),Ut(w.MESSAGE_DELETED,a),Ut(w.GENERATION_STARTED,i),Ut(w.GENERATION_STOPPED,s),Ut(w.GENERATION_ENDED,s),e.installed=!0}}function Ut(e,t){if(!e||typeof M?.on!="function")return;const n=pe();M.on(e,t),n.eventHandlers.push({event:e,handler:t})}function $T(){const e=pe();clearTimeout(e.refreshTimer),e.refreshTimer=null,mb();for(const t of e.eventHandlers||[])M.removeListener?.(t.event,t.handler);e.eventHandlers=[],e.installed=!1,e.userScrolledAway=!1,e.generationActive=!1,e.generationAnchorEnabled=!1,eb(e),clearTimeout(e.generationAnchorTimer),clearTimeout(e.generationAnchorReleaseTimer),e.generationAnchorTimer=null,e.generationAnchorReleaseTimer=null,qg(),e.resizeObserver?.disconnect(),e.resizeObserver=null,e.mutationObserver?.disconnect(),e.mutationObserver=null,C.messageCompletionScrollToMiddleEnabled===!1&&document.getElementById(Ql)?.remove(),ub()}function Kg(){let e=document.getElementById(Ql);e||(e=document.createElement("style"),e.id=Ql,document.head.append(e)),e.textContent=`
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
`}function jg(){const e=pe(),t=document.querySelector("#chat");t instanceof HTMLElement&&(e.chatElement!==t&&(qg(),e.mutationObserver?.disconnect(),e.mutationObserver=null,e.chatElement=t,e.scrollHandler=()=>{sx(t)},t.addEventListener("scroll",e.scrollHandler,{passive:!0})),!e.resizeObserver&&typeof ResizeObserver=="function"&&(e.resizeObserver=new ResizeObserver(n=>{for(const r of n)ZT(r.target,r.contentRect?.height)})),!e.mutationObserver&&typeof MutationObserver=="function"&&(e.mutationObserver=new MutationObserver(n=>{if(n.some(NT)){if(!t.classList.contains("bai-bai-toolkit-long-chat-render-optimized"))return;jn({autoScroll:!1,reason:"mutation"})}}),e.mutationObserver.observe(t,{childList:!0})))}function NT(e){return[...e.addedNodes,...e.removedNodes].some(n=>!(n instanceof HTMLElement&&n.classList.contains(yi)))}function qg(){const e=pe();e.chatElement&&e.scrollHandler&&e.chatElement.removeEventListener("scroll",e.scrollHandler),e.chatElement=null,e.scrollHandler=null}function jn({autoScroll:e=!1,reason:t="",mode:n="full",messageIds:r=[]}={}){if(!C.longChatDomRenderOptimizationEnabled)return;const o=pe();o.pendingAutoScroll=!!(o.pendingAutoScroll||e),o.pendingReason=t||o.pendingReason||"",o.pendingRefreshMode=o.pendingRefreshMode==="full"||n!=="incremental"?"full":"incremental";for(const a of tb(r))o.pendingMessageIds.add(a);o.pendingRefreshMode==="incremental"&&o.pendingMessageIds.size===0&&(o.pendingRefreshMode="full"),clearTimeout(o.refreshTimer),o.refreshTimer=setTimeout(()=>{o.refreshTimer=null;const a=o.pendingReason||"refresh",i=o.pendingRefreshMode||"full",s=[...o.pendingMessageIds];o.pendingRefreshMode="",o.pendingMessageIds.clear(),HT({reason:a,mode:i,messageIds:s}),o.pendingAutoScroll&&(o.pendingAutoScroll=!1,ax(a)),o.pendingReason=""},40)}function HT({reason:e="",mode:t="full",messageIds:n=[]}={}){if(!C.longChatDomRenderOptimizationEnabled)return;const r=document.querySelector("#chat");if(!(r instanceof HTMLElement))return;if(Bn(r)){ub();return}jg();const o=pe(),a=Array.isArray(Q.chat)?Q.chat:[];if(t==="incremental"&&GT({state:o,chatElement:r,chat:a,reason:e,messageIds:n}))return;const i=performance.now(),s={reason:e,duration:0,messages:0,optimized:!1,contained:0,editing:0,tail:0,cached:0,estimated:0,measured:0,skipped:0},l=[...r.querySelectorAll(".mes")].filter(k=>k instanceof HTMLElement);VT(o,r,l,a);const c=Zg(o),u=rb(c,l.length);s.messages=l.length,s.optimized=u,r.classList.toggle("bai-bai-toolkit-long-chat-render-optimized",u);const p=ab(r),b=QT(l,a.length);o.tailMessageIds=qT(b),o.optimized=u;const v=r.clientWidth||window.innerWidth,y=u?sb(l,p):new Map;for(const k of l){const P=k.getAttribute("mesid")||"",E=o.messageRecords.get(P)||null;u&&!b.has(k)?(ob(k,a,s,{editingMessages:p,chatWidth:v,record:E,measuredHeights:y}),db(k,E,o)):(u&&b.has(k)&&(s.tail+=1),Ts(k,E),Yr(k,E,o))}Qg(o,b,a,v,y),!u&&o.generationAnchorEnabled&&(o.generationAnchorEnabled=!1,Jo(o)),s.duration=performance.now()-i,Ti?.(s),Yg(s,"full")}function GT({state:e,chatElement:t,chat:n,reason:r="",messageIds:o=[]}={}){const a=tb(o);if(!a.length||!KT(e,t))return!1;const i=performance.now(),s={reason:r,duration:0,messages:Number(e.messageCount||0),optimized:!!e.optimized,contained:0,editing:0,tail:0,cached:0,estimated:0,measured:0,skipped:0},l=new Set([...a,...e.tailMessageIds instanceof Set?e.tailMessageIds:[]]);for(const P of a){const E=nb(t,P);if(!(E instanceof HTMLElement)||!UT(e,E,n))return!1}const c=jT(n.length);for(const P of c)l.add(P);const u=Zg(e),p=rb(u,Number(e.messageCount||0));if(p!==!!e.optimized)return!1;s.messages=Number(e.messageCount||0),s.optimized=p,t.classList.toggle("bai-bai-toolkit-long-chat-render-optimized",p);const b=ab(t),v=t.clientWidth||window.innerWidth,y=[];for(const P of l){const E=e.messageRecords.get(P)?.element;E instanceof HTMLElement&&y.push(E)}const k=p?sb(y,b):new Map;for(const P of l){const E=e.messageRecords.get(P);E?.element?.isConnected&&(p&&!c.has(P)?(ob(E.element,n,s,{editingMessages:b,chatWidth:v,record:E,measuredHeights:k}),db(E.element,E,e)):(p&&c.has(P)&&(s.tail+=1),Ts(E.element,E),Yr(E.element,E,e)))}return FT(e,t,c,n,v,k),e.tailMessageIds=c,!p&&e.generationAnchorEnabled&&(e.generationAnchorEnabled=!1,Jo(e)),s.duration=performance.now()-i,Ti?.(s),Yg(s,"incremental"),!0}function Yg(e,t="full"){const n=pe(),r=performance.now(),o=Number(e?.duration||0),a=Number(n.lastLongDomDebugLogAt||0);o<Fv&&r-a<Gv||(n.lastLongDomDebugLogAt=r,console.info(`${Ee} longdom mode=${t} reason=${e?.reason||"refresh"} duration=${o.toFixed(1)}ms messages=${e?.messages||0} optimized=${e?.optimized?"yes":"no"} contained=${e?.contained||0} tail=${e?.tail||0} cached=${e?.cached||0} estimated=${e?.estimated||0} measured=${e?.measured||0} skipped=${e?.skipped||0}`))}function FT(e,t,n,r,o,a=null){if(co())return;const i=[];for(const s of n||[]){const l=e.messageRecords?.get?.(String(s)),c=l?.element instanceof HTMLElement?l.element:nb(t,s);c instanceof HTMLElement&&i.push(c)}Qg(e,i,r,o,a)}function Qg(e,t,n,r=window.innerWidth,o=null){if(co()||!e||!Array.isArray(n))return;const a=o instanceof Map;for(const i of t||[]){if(!(i instanceof HTMLElement)||!i.isConnected||i.classList.contains("bai-bai-toolkit-long-chat-contained"))continue;const s=i.getAttribute("mesid")||"",l=Number(s);if(!s||!Number.isInteger(l))continue;const c=n[l]||null,u=a?Number(o.get(i)||0):hu(i);if(u<24)continue;const p=xs(c),b=ws(c),v=ib(p.chars,r,b);if(!Number.isFinite(v)||v<=0)continue;const y=u/v,k=Math.max(1,Math.min(Kv,y)),P=Xg(b,r),E=e.roleHeightEstimators.get(P),K=Number(E?.scale||1),X=E?K+Math.max(0,k-K)*Wv:k;e.roleHeightEstimators.set(P,{role:b,widthBucket:Jg(r),scale:X,samples:Math.min(1e3,Number(E?.samples||0)+1),updatedAt:Date.now()});const B=e.messageRecords?.get?.(s);B&&(B.role=b,B.textChars=p.chars,B.messageSignature=p.signature,B.sampleHeight=u),_u(s,u)}}function Xg(e,t=window.innerWidth){return`${bu(e)}:${Jg(t)}`}function zT(e,t=window.innerWidth){return pe().roleHeightEstimators?.get?.(Xg(e,t))||null}function Jg(e=window.innerWidth){return Math.max(0,Math.round(Number(e||0)/Ig))}function bu(e){return e==="user"?"user":"assistant"}function VT(e,t,n,r){const o=e.messageRecords instanceof Map?e.messageRecords:new Map,a=new Map;let i=0,s=0,l="none";e.indexChatId=String(We?.()??""),e.indexChatElement=t;for(const c of n){const u=c.getAttribute("mesid")||"";if(!u)continue;const p=Number(u),b=Number.isInteger(p)?r[p]:null,v=xs(b),y=ws(b),k=o.get(u),P=k||{mesId:u};k?.element instanceof HTMLElement&&k.element!==c&&Yr(k.element,k,e),P.mesId=u,P.element=c,P.textChars=v.chars,P.messageSignature=v.signature,P.role=y,a.set(u,P),i+=v.chars,v.chars>s&&(s=v.chars,l=u||"none")}for(const[c,u]of o.entries())!a.has(c)&&u?.element instanceof HTMLElement&&Yr(u.element,u,e);e.messageRecords=a,e.messageCount=a.size,e.totalTextChars=i,e.maxVisibleChars=s,e.maxVisibleMesId=l,e.indexReady=!0}function UT(e,t,n){if(!(t instanceof HTMLElement))return null;const r=t.getAttribute("mesid")||"",o=Number(r);if(!r||!Number.isInteger(o))return null;const a=n[o]||null,i=xs(a),s=ws(a),l=e.messageRecords instanceof Map?e.messageRecords:new Map,c=l.get(r),u=c||{mesId:r};if(c?.element instanceof HTMLElement&&c.element!==t&&(Yr(c.element,c,e),u.appliedSignature=""),!c)e.totalTextChars=Number(e.totalTextChars||0)+i.chars,am(e,r,0,i.chars);else if(Number(c.textChars||0)!==i.chars){const p=Number(c.textChars||0);e.totalTextChars=Math.max(0,Number(e.totalTextChars||0)-p+i.chars),am(e,r,p,i.chars)}return u.mesId=r,u.element=t,u.textChars=i.chars,u.messageSignature=i.signature,u.role=s,l.set(r,u),e.messageRecords=l,e.messageCount=l.size,u}function am(e,t,n,r){if(String(e.maxVisibleMesId||"")===String(t)){if(r>=n){e.maxVisibleChars=r;return}WT(e);return}r>Number(e.maxVisibleChars||0)&&(e.maxVisibleChars=r,e.maxVisibleMesId=t)}function WT(e){let t=0,n="none";for(const r of e.messageRecords?.values?.()||[]){const o=Number(r?.textChars||0);o>t&&(t=o,n=r.mesId||"none")}e.maxVisibleChars=t,e.maxVisibleMesId=n}function Zg(e){return{visibleTextChars:Number(e.totalTextChars||0),maxVisibleChars:Number(e.maxVisibleChars||0),maxVisibleMesId:e.maxVisibleMesId||"none"}}function KT(e,t){return!!(e?.indexReady&&e.indexChatElement===t&&String(e.indexChatId||"")===String(We?.()??""))}function eb(e=pe()){for(const t of e.messageRecords?.values?.()||[])t?.element instanceof HTMLElement&&Yr(t.element,t,e);e.messageRecords=new Map,e.pendingMessageIds=new Set,e.tailMessageIds=new Set,e.pendingRefreshMode="",e.messageCount=0,e.totalTextChars=0,e.maxVisibleChars=0,e.maxVisibleMesId="none",e.indexChatId="",e.indexChatElement=null,e.indexReady=!1,e.optimized=!1}function tb(e=[]){const t=Array.isArray(e)?e:[e],n=[],r=new Set;for(const o of t){const a=o&&typeof o=="object"?o.messageId??o.mesId??o.id:o,i=Number(a),s=Number.isInteger(i)&&i>=0?String(i):String(a??"").trim();!s||r.has(s)||(r.add(s),n.push(s))}return n}function nb(e,t){if(!(e instanceof HTMLElement))return null;const n=String(t).replace(/\\/g,"\\\\").replace(/"/g,'\\"');return e.querySelector(`.mes[mesid="${n}"]`)}function jT(e=0){const t=new Set,n=Number(e||0),r=Math.max(0,n-Lg);for(let o=r;o<n;o+=1)t.add(String(o));return t}function qT(e){const t=new Set;for(const n of e||[]){const r=n instanceof HTMLElement?n.getAttribute("mesid"):"";r&&t.add(String(r))}return t}function rb(e,t){return e.visibleTextChars>=Mv||e.maxVisibleChars>=Ov||t>=Dv&&e.visibleTextChars>=Bv}function ob(e,t,n=null,r={}){if(!(e instanceof HTMLElement))return;const o=r.record||null;if(r.editingMessages?.has(e)){Ts(e,o),n&&(n.editing+=1);return}const a=e.getAttribute("mesid")||"",i=Number(a),s=Number.isInteger(i)?t[i]:null,l=o?.role||ws(s),c=Number(o?.textChars??bb(s)),u=YT(o,c,r.chatWidth,l),p=e.style.getPropertyValue(rr);if(e.classList.contains("bai-bai-toolkit-long-chat-contained")&&p){o&&(o.appliedSignature=u,o.contained=!0,o.role=l),n&&(n.skipped+=1);return}if(o&&o.appliedSignature===u&&o.contained===!0&&e.classList.contains("bai-bai-toolkit-long-chat-contained")&&p){n&&(n.skipped+=1);return}const b=r.measuredHeights instanceof Map,v=e.classList.contains("bai-bai-toolkit-long-chat-contained")||co()?0:b?Number(r.measuredHeights.get(e)||0):hu(e),y=ex(a),k=XT(c,r.chatWidth,l),P=v||y||k;n&&(v?n.measured+=1:y?n.cached+=1:n.estimated+=1),P>0&&(_u(a,P),e.style.setProperty(rr,`${Math.round(P)}px`)),e.classList.add("bai-bai-toolkit-long-chat-contained"),o&&(o.appliedSignature=u,o.contained=!0,o.role=l),n&&(n.contained+=1)}function YT(e,t,n=window.innerWidth,r="assistant"){const o=Math.max(0,Math.round(Number(n||0)/Ig));return[bu(r||e?.role),e?.messageSignature||`chars:${Number(t||0)}`,`width:${o}`].join("|")}function QT(e,t=0){const n=new Set,r=Lg,o=Number(t||0),a=Math.max(0,o-r);for(const i of e){const s=i.getAttribute("mesid"),l=Number(s);s&&Number.isInteger(l)&&l>=a&&n.add(i)}for(const i of e.slice(-r))n.add(i);return n}function ab(e){const t=new Set;if(!(e instanceof HTMLElement))return t;for(const n of e.querySelectorAll(Bt)){const r=n.closest(".mes");r instanceof HTMLElement&&t.add(r)}return t}function XT(e,t=window.innerWidth,n="assistant"){const r=ib(e,t,n),o=zT(n,t),a=Math.max(1,Number(o?.scale||1)),i=r*a*zv+Vv;return Math.max(120,Math.min(Uv,Math.ceil(i)))}function ib(e,t=window.innerWidth,n="assistant"){const r=bu(n),o=JT(t),a=Math.max(1,Math.ceil(Number(e||0)/o)),i=r==="user"?180:260,s=r==="user"?30:32,l=r==="user"?140:190,c=i+a*s;return Math.max(l,c)}function JT(e=window.innerWidth){return Math.max(22,Math.min(80,Math.floor((e||720)/16)))}function hu(e){if(!(e instanceof HTMLElement))return 0;const t=Number(e.getBoundingClientRect?.().height||0),n=Math.max(t,Number(e.offsetHeight||0));return n>=24?Math.round(n):0}function sb(e,t){const n=new Map;if(co())return n;for(const r of e||[]){if(!(r instanceof HTMLElement)||t?.has?.(r)||r.classList.contains("bai-bai-toolkit-long-chat-contained")||!lb(r))continue;const o=hu(r);o>=24&&n.set(r,o)}return n}function ZT(e,t){if(!(e instanceof HTMLElement)||!e.classList.contains("mes")||e.style.getPropertyValue(rr))return;const n=e.getAttribute("mesid")||"",r=Number(t||0);!n||r<24||!lb(e)||(_u(n,r),e.style.setProperty(rr,`${Math.round(r)}px`))}function lb(e){const t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight||800;return t.bottom>=-n&&t.top<=n*2}function ex(e){const t=cb(e);if(!t)return 0;const n=pe();return Number(n.heightCache.get(t)||0)}function _u(e,t){const n=cb(e);if(!n||!Number.isFinite(t)||t<=0)return;const r=pe();for(r.heightCache.set(n,Math.round(t));r.heightCache.size>1e3;){const o=r.heightCache.keys().next().value;r.heightCache.delete(o)}}function cb(e){if(e==null||String(e)==="")return"";const t=We?.();return t==null||String(t)===""?"":`${String(t)}::${String(e)}`}function tx(){const e=We?.();return e==null||String(e)===""?"":`${String(e)}::`}function nx(){const e=pe(),t=tx(),n=Array.isArray(Q.chat)?Q.chat.length:0;if(!(!t||!Number.isFinite(n)))for(const r of e.heightCache.keys()){if(!String(r).startsWith(t))continue;const o=Number(String(r).slice(t.length));(!Number.isInteger(o)||o>=n)&&e.heightCache.delete(r)}}function ub(){Cn(),document.querySelector("#chat")?.classList.remove("bai-bai-toolkit-long-chat-render-optimized");for(const e of document.querySelectorAll("#chat .mes.bai-bai-toolkit-long-chat-contained"))Ts(e);eb()}function Ts(e,t=null){e instanceof HTMLElement&&(e.classList.remove("bai-bai-toolkit-long-chat-contained"),e.style.removeProperty(rr),t&&(t.appliedSignature="",t.contained=!1))}function db(e,t,n=pe()){!(e instanceof HTMLElement)||!n.resizeObserver||t?.observedElement===e&&t?.resizeObserver===n.resizeObserver||(n.resizeObserver.observe(e),t&&(t.observedElement=e,t.resizeObserver=n.resizeObserver))}function Yr(e,t=null,n=pe()){const r=t?.observedElement instanceof HTMLElement?t.observedElement:e,o=t?.resizeObserver||n.resizeObserver;r instanceof HTMLElement&&o&&o.unobserve(r),t&&(t.observedElement=null,t.resizeObserver=null)}function co(){if(pe().generationActive)return!0;if(typeof Q.isGenerating=="function")try{return!!Q.isGenerating()}catch{return!1}return!1}function rx(e){return e instanceof HTMLElement&&(e.classList.contains("bai-bai-toolkit-long-chat-render-optimized")||!!e.querySelector(".mes.bai-bai-toolkit-long-chat-contained"))}function pb(){if(!C.longChatDomRenderOptimizationEnabled)return;const e=pe();!e.generationAnchorEnabled&&!co()||(clearTimeout(e.generationAnchorReleaseTimer),e.generationAnchorReleaseTimer=null,clearTimeout(e.generationAnchorTimer),e.generationAnchorTimer=setTimeout(()=>{e.generationAnchorTimer=null,ox()},40))}function ox(){const e=pe(),t=document.querySelector("#chat");if(!(t instanceof HTMLElement)||_i||!C.longChatDomRenderOptimizationEnabled||Bn(t)||!co()||!rx(t)){e.generationAnchorEnabled=!1,Jo(e);return}const n=Eu(t);if(!(!e.generationAnchorEnabled&&!n)){if(!n){e.generationAnchorAwayStartedAt||(e.generationAnchorAwayStartedAt=performance.now()),performance.now()-Number(e.generationAnchorAwayStartedAt||0)>250?(e.generationAnchorEnabled=!1,Jo(e)):pb();return}e.generationAnchorAwayStartedAt=0,e.generationAnchorEnabled=!0,yu(t,e)}}function Jo(e=pe()){e.autoScrollChatElement instanceof HTMLElement||Cn(e)}function ax(e=""){const t=pe();mb(),t.autoScrollToken=Number(t.autoScrollToken||0)+1;const n=t.autoScrollToken;t.autoScrollStartedAt=performance.now(),t.autoScrollLastHeight=0,t.autoScrollStableFrames=0,t.autoScrollLogged=!1,fb(n,e)}function mb(){const e=pe();for(const t of e.autoScrollTimers||[])clearTimeout(t);e.autoScrollTimers=[],e.autoScrollFrame&&(cancelAnimationFrame(e.autoScrollFrame),e.autoScrollFrame=0),xi(e)}function fb(e,t=""){const n=pe(),r=document.querySelector("#chat");if(!(r instanceof HTMLElement)||e!==n.autoScrollToken||_i||!C.longChatDomRenderOptimizationEnabled||Bn(r)||n.userScrolledAway){xi(n);return}ix(r,n),yu(r,n);const o=performance.now();n.programmaticScrollUntil=o+250;const a=Math.max(0,r.scrollHeight-r.clientHeight),i=Math.abs(r.scrollTop-a),s=Math.abs(Number(n.autoScrollLastHeight||0)-r.scrollHeight);if(i>$o?(r.scrollTop=a,n.autoScrollStableFrames=0):s>$o?n.autoScrollStableFrames=0:n.autoScrollStableFrames=Number(n.autoScrollStableFrames||0)+1,n.autoScrollLastHeight=r.scrollHeight,o-Number(n.autoScrollStartedAt||o)<Ag&&Number(n.autoScrollStableFrames||0)<Pg){n.autoScrollFrame=requestAnimationFrame(()=>{n.autoScrollFrame=0,fb(e,t)});return}xi(n,{finalScrollToBottom:!0}),n.autoScrollLogged||(n.autoScrollLogged=!0,console.debug(`${Ee} Long chat DOM render optimization scrolled to bottom (${t})`))}function ix(e,t){!(e instanceof HTMLElement)||t.autoScrollChatElement===e||(xi(t),t.autoScrollChatElement=e,t.autoScrollPreviousScrollBehavior=e.style.scrollBehavior||"",e.style.scrollBehavior="auto")}function yu(e,t){if(!(e instanceof HTMLElement))return;let n=t.bottomAnchorElement;n instanceof HTMLElement||(n=document.createElement("div"),n.className=yi,n.setAttribute("aria-hidden","true"),t.bottomAnchorElement=n),(n.parentElement!==e||e.lastElementChild!==n)&&e.append(n),e.classList.add(Ei)}function Cn(e=pe()){const t=e.bottomAnchorElement;t instanceof HTMLElement&&(t.parentElement?.classList.remove(Ei),t.remove()),document.querySelector("#chat")?.classList.remove(Ei),e.bottomAnchorElement=null}function xi(e=pe(),{finalScrollToBottom:t=!1}={}){const n=e.autoScrollChatElement;n instanceof HTMLElement?(t&&(n.scrollTop=Math.max(0,n.scrollHeight-n.clientHeight)),Cn(e),t&&(n.scrollTop=Math.max(0,n.scrollHeight-n.clientHeight)),n.style.scrollBehavior=e.autoScrollPreviousScrollBehavior||""):Cn(e),e.autoScrollChatElement=null,e.autoScrollPreviousScrollBehavior=""}function sx(e){const t=pe();if(performance.now()<Number(t.programmaticScrollUntil||0))return;const n=Eu(e);t.userScrolledAway=!n,t.generationAnchorEnabled&&(n?t.generationAnchorAwayStartedAt=0:(t.generationAnchorAwayStartedAt||(t.generationAnchorAwayStartedAt=performance.now()),pb()))}function Eu(e){return e instanceof HTMLElement?e.scrollHeight-e.scrollTop-e.clientHeight<=48:!0}function gb(e){if(!(e instanceof HTMLElement))return null;const t=[...e.querySelectorAll(".mes[mesid]")].filter(n=>n instanceof HTMLElement);return t[t.length-1]??null}function lx(){const e=document.querySelector("#chat"),t=gb(e);return t instanceof HTMLElement?t.getAttribute("mesid"):""}function cx(e,t){const n=e.scrollTop,r=e.getBoundingClientRect(),o=t.getBoundingClientRect(),a=Math.max(Nv,Math.min(Math.round(e.clientHeight*$v),Hv)),i=n+o.top-r.top-a,s=Math.max(0,e.scrollHeight-e.clientHeight);return Math.max(0,Math.min(Math.round(i),s))}function xs(e){if(!e||typeof e!="object")return{chars:0,signature:"empty"};let t="",n="none";typeof e.extra?.display_text=="string"&&e.extra.display_text.trim().length>0?(t=e.extra.display_text,n="display"):typeof e.mes=="string"&&(t=e.mes,n="mes");let r=0,o="";t&&(o=t.replace(/<think[ing]*>[\s\S]*?<\/think[ing]*>/gi,"").replace(/<details[\s\S]*?>[\s\S]*?<\/details>/gi,""),r+=o.length);const a=typeof e.extra?.reasoning_display_text=="string"?e.extra.reasoning_display_text:typeof e.extra?.reasoning=="string"?e.extra.reasoning:"";return a&&(r+=50),{chars:r,signature:[n,o.length,im(o),a.length,im(a)].join(":")}}function bb(e){return xs(e).chars}function im(e){const t=String(e||"");if(!t)return"0";const n=t.length<=1024?t:`${t.slice(0,512)}
${t.slice(-512)}`;let r=2166136261;for(let o=0;o<n.length;o+=1)r^=n.charCodeAt(o),r=Math.imul(r,16777619);return(r>>>0).toString(36)}function ws(e){return e?.is_user===!0?"user":"assistant"}function hb(){if(C.messageCompletionScrollToMiddleEnabled===!1){dx();return}ux()}function Xe(){(!_[Ma]||typeof _[Ma]!="object")&&(_[Ma]={});const e=_[Ma];return Array.isArray(e.eventHandlers)||(e.eventHandlers=[]),Array.isArray(e.timers)||(e.timers=[]),e}function ux(){const e=Xe();if(e.installed||typeof M?.on!="function"){Zl(e);return}Kg();const t=()=>{px(e)},n=(o="generation-ended")=>{mx(e,o)},r=()=>{Su(e,"message-rendered")};ko(w.GENERATION_STARTED,t),ko(w.USER_MESSAGE_RENDERED,r),ko(w.CHARACTER_MESSAGE_RENDERED,r),ko(w.GENERATION_STOPPED,()=>n("generation-stopped")),ko(w.GENERATION_ENDED,()=>n("generation-ended")),e.installed=!0,Zl(e)}function ko(e,t){if(!e||typeof t!="function"||typeof M?.on!="function")return;const n=Xe();M.on(e,t),n.eventHandlers.push({event:e,handler:t})}function dx(){const e=Xe();for(const t of e.eventHandlers||[])M.removeListener?.(t.event,t.handler);e.eventHandlers=[],e.installed=!1,e.generationActive=!1,e.shouldScroll=!1,e.userInteracted=!1,clearTimeout(e.anchorTimer),e.anchorTimer=null,_b(e),tc(e),Cn(e),ec(e)}function px(e=Xe()){if(C.messageCompletionScrollToMiddleEnabled===!1)return;Zl(e);const t=document.querySelector("#chat");e.generationToken=Number(e.generationToken||0)+1,e.scrolledToken=0,e.generationActive=!0,e.userInteracted=!1,e.shouldScroll=t instanceof HTMLElement&&!Bn(t)&&Eu(t),e.shouldScroll&&Su(e,"generation-started")}function mx(e=Xe(),t="generation-ended"){if(C.messageCompletionScrollToMiddleEnabled===!1||e.scrolledToken===e.generationToken){e.generationActive=!1;return}const n=document.querySelector("#chat"),r=!e.userInteracted&&n instanceof HTMLElement&&!Bn(n);e.generationActive=!1,e.shouldScroll=!1,e.scrolledToken=e.generationToken,clearTimeout(e.anchorTimer),e.anchorTimer=null,r?fx(e,t):Cn(e)}function Su(e=Xe(),t=""){if(!e.generationActive||!e.shouldScroll||e.userInteracted||C.messageCompletionScrollToMiddleEnabled===!1){Cn(e);return}const n=document.querySelector("#chat");!(n instanceof HTMLElement)||Bn(n)||(yu(n,e),clearTimeout(e.anchorTimer),e.anchorTimer=setTimeout(()=>{e.anchorTimer=null,Su(e,t)},120))}function Zl(e=Xe()){const t=document.querySelector("#chat");if(!(t instanceof HTMLElement)){ec(e);return}e.chatElement===t&&e.userInteractionHandler||(ec(e),e.chatElement=t,e.userInteractionHandler=()=>{!e.generationActive&&!e.scrollSettling||(e.userInteracted=!0)},t.addEventListener("wheel",e.userInteractionHandler,{passive:!0}),t.addEventListener("touchstart",e.userInteractionHandler,{passive:!0}),t.addEventListener("pointerdown",e.userInteractionHandler,{passive:!0}))}function ec(e=Xe()){e.chatElement instanceof HTMLElement&&e.userInteractionHandler&&(e.chatElement.removeEventListener("wheel",e.userInteractionHandler),e.chatElement.removeEventListener("touchstart",e.userInteractionHandler),e.chatElement.removeEventListener("pointerdown",e.userInteractionHandler)),e.chatElement=null,e.userInteractionHandler=null}function fx(e=Xe(),t=""){_b(e);const n=Number(e.generationToken||0);e.scrollStartedAt=performance.now(),e.lastScrollHeight=0,e.lastTargetTop=null,e.stableFrames=0,e.scrollSettling=!0,gx(e),yb(e,n,t)}function tc(e=Xe()){e.scrollSettling=!1,bx(e)}function gx(e=Xe()){const t=e.chatElement instanceof HTMLElement?e.chatElement:document.querySelector("#chat");!(t instanceof HTMLElement)||e.overscrollGuardElement===t||(e.overscrollGuardElement=t,e.overscrollGuardPrevious=t.style.overscrollBehavior||"",t.style.overscrollBehavior="contain")}function bx(e=Xe()){const t=e.overscrollGuardElement;t instanceof HTMLElement&&(t.style.overscrollBehavior=e.overscrollGuardPrevious||""),e.overscrollGuardElement=null,e.overscrollGuardPrevious=""}function _b(e=Xe()){clearTimeout(e.anchorTimer),e.anchorTimer=null;for(const t of e.timers||[])clearTimeout(t);e.timers=[],e.frame&&(cancelAnimationFrame(e.frame),e.frame=0)}function yb(e=Xe(),t,n=""){if(t!==Number(e.generationToken||0)||C.messageCompletionScrollToMiddleEnabled===!1||e.userInteracted){tc(e);return}if(hx(e,n)){tc(e);return}e.frame=requestAnimationFrame(()=>{e.frame=0,yb(e,t,n)})}function hx(e=Xe(),t=""){const n=document.querySelector("#chat");if(!(n instanceof HTMLElement)||Bn(n)||e.userInteracted)return!0;const r=gb(n);if(!(r instanceof HTMLElement))return!1;Cn(e);const o=performance.now(),a=cx(n,r),i=Math.abs(n.scrollTop-a),s=Math.abs(Number(e.lastScrollHeight||0)-n.scrollHeight),l=Number.isFinite(e.lastTargetTop)?Math.abs(Number(e.lastTargetTop)-a):0;return i>$o?(n.scrollTop=a,e.stableFrames=0):s>$o||l>$o?e.stableFrames=0:e.stableFrames=Number(e.stableFrames||0)+1,e.lastScrollHeight=n.scrollHeight,e.lastTargetTop=a,e.lastScrollReason=t,o-Number(e.scrollStartedAt||o)>=Ag||Number(e.stableFrames||0)>=Pg}function _x(e){Ex(),yx(),_l(),Oa(),$("#bai_bai_toolkit_message_completion_sound_enabled").prop("checked",C.messageCompletionSoundEnabled).off("input.baiBaiToolkitMessageSound").on("input.baiBaiToolkitMessageSound",function(){C.messageCompletionSoundEnabled=!!$(this).prop("checked"),e?.(),Sb()}),$("#bai_bai_toolkit_message_completion_sound_keep_alive_enabled").prop("checked",C.messageCompletionSoundKeepAliveEnabled!==!1).off("input.baiBaiToolkitMessageSound").on("input.baiBaiToolkitMessageSound",function(){C.messageCompletionSoundKeepAliveEnabled=!!$(this).prop("checked"),e?.(),Tu(),ks()||$r()}),$("#bai_bai_toolkit_message_completion_sound_source").val(vu()).off("change.baiBaiToolkitMessageSound").on("change.baiBaiToolkitMessageSound",function(){const t=String($(this).val()||"builtin");C.messageCompletionSoundSource=pu.has(t)?t:"builtin",Pr(),e?.(),ht(""),_l(),Oa()}),$("#bai_bai_toolkit_message_completion_sound_builtin_id").val(Cs().id).off("change.baiBaiToolkitMessageSound").on("change.baiBaiToolkitMessageSound",function(){C.messageCompletionSoundBuiltinId=String($(this).val()||vi[0].id),Pr(),e?.(),ht("")}),$("#bai_bai_toolkit_message_completion_sound_url").val(C.messageCompletionSoundUrl||"").off("input.baiBaiToolkitMessageSound").on("input.baiBaiToolkitMessageSound",function(){C.messageCompletionSoundUrl=String($(this).val()||"").trim(),Pr(),e?.(),ht("")}),$("#bai_bai_toolkit_message_completion_sound_volume").val(String(Qr(C.messageCompletionSoundVolume))).off("input.baiBaiToolkitMessageSound").on("input.baiBaiToolkitMessageSound",function(){C.messageCompletionSoundVolume=Qr($(this).val()),Eb();const t=Ne().audio;t instanceof HTMLAudioElement&&(t.volume=C.messageCompletionSoundVolume),e?.()}),$("#bai_bai_toolkit_message_completion_sound_preview").off("click.baiBaiToolkitMessageSound").on("click.baiBaiToolkitMessageSound",async function(){const t=$(this);if(!t.hasClass("disabled")){t.addClass("disabled"),ht("正在试听...");try{await wb({preview:!0}),ht("已播放当前提示音。")}catch(n){console.debug(`${Ee} Failed to preview message completion sound`,n),ht(n?.message||"提示音播放失败。",!0)}finally{t.removeClass("disabled")}}}),$("#bai_bai_toolkit_message_completion_sound_local_file").off("change.baiBaiToolkitMessageSound").on("change.baiBaiToolkitMessageSound",async function(){const t=$(this),n=this.files?.[0];if(t.val(""),!!n)try{ht("正在保存到本机...");const r=await kx(n);C.messageCompletionSoundSource="local",C.messageCompletionSoundLocalFileName=r.name,Pr(),e?.(),_l(),await Oa(),ht("已保存到本机。")}catch(r){console.debug(`${Ee} Failed to save local message completion sound`,r),ht(r?.message||"本地音频保存失败。",!0)}}),$("#bai_bai_toolkit_message_completion_sound_local_clear").off("click.baiBaiToolkitMessageSound").on("click.baiBaiToolkitMessageSound",async function(){const t=$(this);if(!t.hasClass("disabled")){t.addClass("disabled");try{await Ax(),C.messageCompletionSoundLocalFileName="",Pr(),e?.(),await Oa(),ht("已清除本机提示音。")}catch(n){console.debug(`${Ee} Failed to delete local message completion sound`,n),ht(n?.message||"本地音频清除失败。",!0)}finally{t.removeClass("disabled")}}})}function yx(){pu.has(C.messageCompletionSoundSource)||(C.messageCompletionSoundSource="builtin"),C.messageCompletionSoundBuiltinId=Cs().id,C.messageCompletionSoundVolume=Qr(C.messageCompletionSoundVolume),C.messageCompletionSoundUrl=typeof C.messageCompletionSoundUrl=="string"?C.messageCompletionSoundUrl.trim():"",C.messageCompletionSoundLocalFileName=typeof C.messageCompletionSoundLocalFileName=="string"?C.messageCompletionSoundLocalFileName:"",C.messageCompletionSoundKeepAliveEnabled=C.messageCompletionSoundKeepAliveEnabled!==!1}function Ex(){const e=$("#bai_bai_toolkit_message_completion_sound_builtin_id");if(!(!e.length||e.children().length))for(const t of vi)e.append($("<option></option>").val(t.id).text(t.label))}function _l(){const e=vu();$("#bai_bai_toolkit_message_completion_sound_enabled").prop("checked",!!C.messageCompletionSoundEnabled),$("#bai_bai_toolkit_message_completion_sound_keep_alive_enabled").prop("checked",C.messageCompletionSoundKeepAliveEnabled!==!1),$("#bai_bai_toolkit_message_completion_sound_source").val(e),$("#bai_bai_toolkit_message_completion_sound_builtin_id").val(Cs().id),$("#bai_bai_toolkit_message_completion_sound_url").val(C.messageCompletionSoundUrl||""),$("#bai_bai_toolkit_message_completion_sound_builtin_row").toggle(e==="builtin"),$("#bai_bai_toolkit_message_completion_sound_url_row").toggle(e==="url"),$("#bai_bai_toolkit_message_completion_sound_local_row").toggle(e==="local"),$("#bai_bai_toolkit_message_completion_sound_volume").val(String(Qr(C.messageCompletionSoundVolume))),Eb()}function Eb(){const e=Qr(C.messageCompletionSoundVolume);$("#bai_bai_toolkit_message_completion_sound_volume_value").text(`${Math.round(e*100)}%`)}function ht(e,t=!1){const n=$("#bai_bai_toolkit_message_completion_sound_status");n.length&&n.text(e||"").css("color",t?"var(--SmartThemeQuoteColor)":"")}function vu(){const e=String(C.messageCompletionSoundSource||"builtin");return pu.has(e)?e:"builtin"}function Cs(){return vi.find(e=>e.id===C.messageCompletionSoundBuiltinId)||vi[0]}function Qr(e){const t=Number(e);return Number.isFinite(t)?Math.max(0,Math.min(1,t)):.8}function Ne(){(!_.messageCompletionSound||typeof _.messageCompletionSound!="object")&&(_.messageCompletionSound={});const e=_.messageCompletionSound;return Array.isArray(e.eventHandlers)||(e.eventHandlers=[]),e}function Sb(){C.messageCompletionSoundEnabled?(Sx(),Tu()):vx()}function Sx(){const e=Ne();if(e.installed||typeof M?.on!="function")return;const t=()=>{e.generationActive=!0,e.generationStopped=!1,Tb().catch(o=>{console.debug(`${Ee} Failed to start message completion sound keep-alive`,o)})},n=()=>{e.generationActive&&(e.generationStopped=!0),$r()},r=()=>{const o=e.generationActive&&!e.generationStopped;if(e.generationActive=!1,e.generationStopped=!1,!o){$r();return}wb().catch(a=>{console.debug(`${Ee} Failed to play message completion sound`,a)}).finally(()=>{$r()})};yl(w.GENERATION_STARTED,t),yl(w.GENERATION_STOPPED,n),yl(w.GENERATION_ENDED,r),e.installed=!0,Tu()}function yl(e,t){if(!e||typeof M?.on!="function")return;const n=Ne();M.on(e,t),n.eventHandlers.push({event:e,handler:t})}function vx(){const e=Ne();for(const t of e.eventHandlers||[])M.removeListener?.(t.event,t.handler);e.eventHandlers=[],e.installed=!1,e.generationActive=!1,e.generationStopped=!1,vb(),$r(),Pr()}function ks(){return!!(C.messageCompletionSoundEnabled&&C.messageCompletionSoundKeepAliveEnabled!==!1&&de())}function Tu(){if(ks()){Tx();const e=Ne();e.generationActive&&!e.generationStopped&&Tb().catch(t=>{console.debug(`${Ee} Failed to start message completion sound keep-alive`,t)})}else vb(),$r()}function Tx(){const e=Ne();if(e.keepAliveInteractionHandlersInstalled)return;const t=()=>{xx().catch(o=>{console.debug(`${Ee} Failed to unlock message completion sound keep-alive`,o)})},n={capture:!0,passive:!0},r={capture:!0};e.keepAliveInteractionHandlers=[{target:document,event:"pointerdown",handler:t,options:n},{target:document,event:"touchstart",handler:t,options:n},{target:document,event:"click",handler:t,options:n},{target:document,event:"keydown",handler:t,options:r}];for(const o of e.keepAliveInteractionHandlers)o.target.addEventListener(o.event,o.handler,o.options);e.keepAliveInteractionHandlersInstalled=!0}function vb(){const e=Ne();for(const t of e.keepAliveInteractionHandlers||[])t.target.removeEventListener(t.event,t.handler,t.options);e.keepAliveInteractionHandlers=[],e.keepAliveInteractionHandlersInstalled=!1,e.keepAliveUnlocking=!1}async function xx(){const e=Ne();if(!ks()||e.keepAliveUnlocked||e.keepAliveUnlocking||e.keepAlivePlaying)return!1;e.keepAliveUnlocking=!0;try{const t=xb();return wi(t),await t.play(),t.pause(),wi(t),e.keepAliveUnlocked=!0,!0}finally{e.keepAliveUnlocking=!1}}async function Tb(){const e=Ne();if(!ks())return!1;const t=xb();if(e.keepAlivePlaying&&!t.paused)return!0;e.keepAliveRequested=!0;try{return wi(t),await t.play(),e.keepAlivePlaying=!0,e.keepAliveUnlocked=!0,!0}catch(n){throw e.keepAlivePlaying=!1,e.keepAliveLastErrorAt=Date.now(),ht("静音保活启动失败，浏览器可能限制了自动播放。",!0),n}}function $r(){const e=Ne(),t=e.keepAliveAudio;t instanceof HTMLAudioElement&&(t.pause(),wi(t)),e.keepAliveRequested=!1,e.keepAlivePlaying=!1}function wi(e){try{e.currentTime=0}catch{}}function xb(){const e=Ne();if(!(e.keepAliveAudio instanceof HTMLAudioElement)){const t=new Audio(iT);t.loop=!0,t.muted=!1,t.volume=1,t.preload="auto",t.setAttribute("playsinline",""),e.keepAliveAudio=t}return e.keepAliveAudio}async function wb({preview:e=!1}={}){if(!e&&!C.messageCompletionSoundEnabled)return!1;const t=Ne(),n=Date.now();if(!e&&n-Number(t.lastPlayedAt||0)<aT)return!1;const r=wx(),o=await Cx();return r.volume=Qr(C.messageCompletionSoundVolume),r.src!==o?(r.pause(),r.src=o,r.load()):r.pause(),r.currentTime=0,await r.play(),t.lastPlayedAt=n,!0}function wx(){const e=Ne();return e.audio instanceof HTMLAudioElement||(e.audio=new Audio,e.audio.preload="none"),e.audio}async function Cx(){const e=vu();if(Cb(),e==="builtin"){const r=Cs(),o="../video/";return new URL(o+r.file,import.meta.url).href}if(e==="url"){const r=String(C.messageCompletionSoundUrl||"").trim();if(!r)throw new Error("请先填写音频 URL。");return r}const t=await kb();if(!t?.blob)throw new Error("本机还没有上传提示音文件。");const n=Ne();return n.objectUrl=URL.createObjectURL(t.blob),n.objectUrl}function Pr(){const e=Ne();e.audio instanceof HTMLAudioElement&&(e.audio.pause(),e.audio.removeAttribute("src"),e.audio.load()),Cb()}function Cb(){const e=Ne();e.objectUrl&&(URL.revokeObjectURL(e.objectUrl),e.objectUrl=null)}async function Oa(){const e=$("#bai_bai_toolkit_message_completion_sound_local_name");if(e.length)try{const t=await kb();t?.name?e.text(t.name):C.messageCompletionSoundLocalFileName?e.text(`${C.messageCompletionSoundLocalFileName}（本机未上传）`):e.text("未上传")}catch{e.text("本机存储不可用")}}async function kx(e){if(!(e instanceof File))throw new Error("请选择一个音频文件。");if(!e.type.startsWith("audio/")&&!Px(e.name))throw new Error("请选择浏览器可播放的音频文件。");if(e.size>oT)throw new Error("本地提示音不能超过 5MB。");const t={key:mu,name:e.name,type:e.type||"audio/mpeg",size:e.size,updatedAt:Date.now(),blob:e},r=(await xu()).transaction(wn,"readwrite"),o=Ab(r),a=r.objectStore(wn);return await Promise.all([wu(a.put(t)),o]),t}async function kb(){const n=(await xu()).transaction(wn,"readonly").objectStore(wn);return await wu(n.get(mu))}async function Ax(){const t=(await xu()).transaction(wn,"readwrite"),n=Ab(t),r=t.objectStore(wn);await Promise.all([wu(r.delete(mu)),n])}function xu(){const e=Ne();return e.dbPromise||(e.dbPromise=Lx()),e.dbPromise}function Px(e){return/\.(mp3|wav|ogg|m4a|aac|flac|webm)$/i.test(String(e||""))}function Lx(){return new Promise((e,t)=>{if(typeof indexedDB>"u"){t(new Error("当前浏览器不支持 IndexedDB。"));return}const n=indexedDB.open(nT,rT);n.onupgradeneeded=()=>{const r=n.result;r.objectStoreNames.contains(wn)||r.createObjectStore(wn,{keyPath:"key"})},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error||new Error("IndexedDB 打开失败。")),n.onblocked=()=>t(new Error("IndexedDB 正被其他页面占用。"))})}function wu(e){return new Promise((t,n)=>{e.onsuccess=()=>t(e.result),e.onerror=()=>n(e.error||new Error("IndexedDB 请求失败。"))})}function Ab(e){return new Promise((t,n)=>{e.oncomplete=()=>t(),e.onerror=()=>n(e.error||new Error("IndexedDB 事务失败。")),e.onabort=()=>n(e.error||new Error("IndexedDB 事务已取消。"))})}function Ix(){return new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,clearTimeout(r),e())},r=setTimeout(n,80);if(typeof requestAnimationFrame!="function"){n();return}requestAnimationFrame(()=>setTimeout(n,0))})}function Rx(e,t=[...document.querySelectorAll("#chat .mes")]){let n=0,r=0,o="none";for(const a of t){const i=a.getAttribute("mesid")??"",s=Number(i),l=Number.isInteger(s)?e[s]:null,c=bb(l);n+=c,c>r&&(r=c,o=i||"none")}return{visibleTextChars:n,maxVisibleChars:r,maxVisibleMesId:o}}function Mx(){if(!C.longChatDomRenderOptimizationEnabled)return"longDom=off";const e=document.querySelector("#chat");if(!(e instanceof HTMLElement))return"longDom=pending";const t=e.classList.contains("bai-bai-toolkit-long-chat-render-optimized"),n=e.querySelectorAll(".mes.bai-bai-toolkit-long-chat-contained").length;return`longDom=${t?"on":"idle"}:${n}`}function Ox(){return typeof Jl!="function"}function pa(){return typeof Vg=="function"}function Pb(){if(!pa()){As();return}if(_[Yp])return;const e=r=>{Bx(r)},t=r=>{Fx(r)},n=()=>{Nx(1500)};_[Yp]=e,_[Rv]=t,_[Iv]=n,document.addEventListener("click",e,!0),document.addEventListener("click",t,!0),M.on(w.MESSAGE_DELETED,n)}function Bx(e){if(!C.chatDeleteEditFlowOptimizationEnabled||!pa()){As();return}const t=e.target instanceof Element?e.target:null;if(!t)return;if(t.closest("#dialogue_del_mes_ok")){Dx()&&$x();return}const n=t.closest(Bg);if(!n||!Hx()||zx())return;const r=n.closest(".mes[mesid]"),o=Number(r?.getAttribute("mesid"));!Number.isInteger(o)||o<0||(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),Gx(o))}function Dx(){return!!document.querySelector("#chat .mes.selected, #chat .del_checkbox:checked")}function $x(){clearTimeout(_.chatDeleteEditWindowTimer),_.chatDeleteEditWindowActive=!0,_.chatDeleteEditWindowStartedAt=Date.now(),_.chatDeleteEditWindowTimer=setTimeout(As,Rg)}function Nx(e){_.chatDeleteEditWindowActive&&(clearTimeout(_.chatDeleteEditWindowTimer),_.chatDeleteEditWindowTimer=setTimeout(As,e))}function As(){clearTimeout(_.chatDeleteEditWindowTimer),_.chatDeleteEditWindowActive=!1,_.chatDeleteEditWindowStartedAt=0}function Hx(){return!!(_.chatDeleteEditWindowActive&&Date.now()-Number(_.chatDeleteEditWindowStartedAt||0)<=Rg)}async function Gx(e){if(pa())try{await Vg(e);const n=document.querySelector("#curEditTextarea")?.closest(".mes[mesid]"),r=Number(n?.getAttribute("mesid"));Number.isInteger(r)&&(_.chatDeleteFastEditorMesId=r)}catch(t){console.debug(`${Ee} Failed to open message editor after message deletion`,t)}}function Fx(e){if(!C.chatDeleteEditFlowOptimizationEnabled||!pa()||_.chatDeleteEditReplayingAction||!Vx())return;const n=(e.target instanceof Element?e.target:null)?.closest(Xv);n&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),Ux(n))}function zx(){return!!(document.querySelector("#curEditTextarea")||document.querySelector(".reasoning_edit_textarea"))}function Vx(){const e=document.querySelector("#curEditTextarea"),t=e?.closest(".mes[mesid]"),n=Number(t?.getAttribute("mesid"));return!!(e&&Number.isInteger(n)&&Number(_.chatDeleteFastEditorMesId)===n)}async function Ux(e){if(e instanceof HTMLElement)try{await Wx(),await Ix(),jx(e)}catch(t){console.debug(`${Ee} Failed to commit message edit before generation action`,t)}}async function Wx(){if(_.chatDeleteEditCommitPromise)return _.chatDeleteEditCommitPromise;const e=$("#chat .mes_edit_done:visible").last();if(!e.length){_.chatDeleteFastEditorMesId=null;return}const t=Number(e.closest(".mes[mesid]").attr("mesid")),n=Kx(t,3e3);_.chatDeleteEditCommitPromise=n.finally(()=>{_.chatDeleteEditCommitPromise=null,_.chatDeleteFastEditorMesId=null}),e.trigger("click"),await _.chatDeleteEditCommitPromise}function Kx(e,t){return new Promise(n=>{let r=!1;const o=()=>{r||(r=!0,clearTimeout(i),M.removeListener?.(w.MESSAGE_UPDATED,a),n())},a=s=>{(!Number.isInteger(e)||Number(s)===e)&&o()},i=setTimeout(o,t);M.on(w.MESSAGE_UPDATED,a)})}function jx(e){if(e.isConnected){_.chatDeleteEditReplayingAction=!0;try{e.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}finally{setTimeout(()=>{_.chatDeleteEditReplayingAction=!1},0)}}}function Cu(){if(C.messageEditBottomActionsEnabled===!1){Lb();return}nc(),Ib()}function Ps(){return(!_[Ra]||typeof _[Ra]!="object")&&(_[Ra]={}),_[Ra]}function nc(){ow();const e=Ps(),t=document.querySelector("#chat");if(!(t instanceof HTMLElement)||typeof MutationObserver!="function"){clearTimeout(e.retryTimer),e.retryTimer=setTimeout(()=>{e.retryTimer=null,Cu()},1e3);return}e.observer&&e.chatElement===t||(e.observer?.disconnect(),e.chatElement=t,e.observer=new MutationObserver(n=>{qx(n)&&Ib()}),e.observer.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style","class"]}))}function qx(e){for(const t of e){if(Yx(t))return!0;for(const n of t.addedNodes)if(sm(n))return!0;for(const n of t.removedNodes)if(sm(n))return!0}return!1}function Yx(e){const t=e.target;if(!(t instanceof Element))return!1;if(t.matches(Si)||t.closest(tT))return!0;const n=t.closest(".mes");return n instanceof HTMLElement&&!!n.querySelector("#curEditTextarea")}function sm(e){return e instanceof Element?e.matches(Si)||!!e.querySelector(Si):!1}function Lb(){const e=Ps();e.observer?.disconnect(),e.observer=null,e.chatElement=null,clearTimeout(e.retryTimer),e.retryTimer=null,e.updateFrame&&(cancelAnimationFrame(e.updateFrame),e.updateFrame=0),document.getElementById(hi)?.remove(),document.querySelectorAll(`#chat .${cn}`).forEach(t=>t.remove())}function Ib(){const e=Ps();e.updateFrame||(e.updateFrame=requestAnimationFrame(()=>{e.updateFrame=0,Qx()}))}function Qx(){if(C.messageEditBottomActionsEnabled===!1){Lb();return}const e=document.querySelector("#chat");if(!(e instanceof HTMLElement)){nc();return}const t=Ps();(!t.observer||t.chatElement!==e||!document.getElementById(hi))&&nc();const n=e.querySelector("#curEditTextarea");Xx(n),n instanceof HTMLElement&&Jx(n)}function Xx(e){const t=e instanceof HTMLElement?e.closest(".mes"):null;document.querySelectorAll(`#chat .${cn}`).forEach(n=>{n.closest(".mes")!==t&&n.remove()})}function Jx(e){const t=e.closest(".mes"),n=e.parentElement;if(!(t instanceof HTMLElement)||!(n instanceof HTMLElement))return;const r=t.querySelector(".mes_edit_buttons .mes_edit_done"),o=t.querySelector(".mes_edit_buttons .mes_edit_cancel");if(!(r instanceof HTMLElement)||!(o instanceof HTMLElement))return;const a=Array.from(t.querySelectorAll(`.${cn}`));let i=a.find(c=>c.parentElement===n);for(const c of a)c!==i&&c.remove();if(i instanceof HTMLElement||(i=document.createElement("div"),i.className=cn,i.dataset.baiBaiToolkit="message-edit-bottom-actions"),(i.parentElement!==n||i.previousElementSibling!==e)&&e.insertAdjacentElement("afterend",i),i.dataset.ready==="true")return;const s=lm(r,"bottom-confirm"),l=lm(o,"bottom-cancel");i.replaceChildren(l,s),i.dataset.ready="true"}function lm(e,t){const n=e.cloneNode(!1);return n.dataset.baiBaiToolkitBottomAction=t,n.removeAttribute("id"),n.addEventListener("click",()=>{Zx(n)},!0),n}function Zx(e){const t=ew(e);if(!t)return;const n=()=>{nw(t)};requestAnimationFrame(()=>{n(),requestAnimationFrame(n)});for(const r of Yv)setTimeout(n,r);tw(t,n)}function ew(e){const t=document.querySelector("#chat"),n=e instanceof HTMLElement?e.closest(".mes[mesid]"):null;if(!(t instanceof HTMLElement)||!(n instanceof HTMLElement))return null;const r=t.getBoundingClientRect(),o=n.getBoundingClientRect();return{messageId:n.getAttribute("mesid"),bottomInChat:o.bottom-r.top}}function tw(e,t){if(typeof M?.on!="function"||!w.MESSAGE_UPDATED)return;let n=null;const r=()=>{clearTimeout(n),M.removeListener?.(w.MESSAGE_UPDATED,o)},o=a=>{String(a)===String(e.messageId)&&(r(),t(),setTimeout(t,0),setTimeout(t,50),setTimeout(t,160))};M.on(w.MESSAGE_UPDATED,o),n=setTimeout(r,5e3)}function nw(e){const t=document.querySelector("#chat");if(!(t instanceof HTMLElement)||e?.messageId==null)return;const n=rw(String(e.messageId)),r=document.querySelector(`#chat .mes[mesid="${n}"]`);if(!(r instanceof HTMLElement))return;const o=t.getBoundingClientRect(),s=r.getBoundingClientRect().bottom-o.top-Number(e.bottomInChat);Math.abs(s)>1&&(t.scrollTop+=s)}function rw(e){return typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):e.replace(/["\\]/g,"\\$&")}function ow(){let e=document.getElementById(hi);e||(e=document.createElement("style"),e.id=hi,document.head.append(e));const t=`
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
`;e.textContent!==t&&(e.textContent=t)}function Rb(){if(xw(),ww(),_[Jp])return;const e=o=>{Cw(o)},t=o=>{kw(o)},n=o=>{Pw(o)},r=o=>{Bw(o)};_[Jp]={directFocusIntentHandler:e,pointerUpHandler:t,focusInHandler:n,pageLifecycleHandler:r},document.addEventListener("pointerdown",e,!0),document.addEventListener("mousedown",e,!0),document.addEventListener("touchstart",e,!0),document.addEventListener("pointerup",t,!0),document.addEventListener("touchend",t,!0),document.addEventListener("mouseup",t,!0),document.addEventListener("focusin",n,!0),document.addEventListener("visibilitychange",r,!0),window.addEventListener("pagehide",r,!0),window.addEventListener("pageshow",r,!0),window.addEventListener("focus",r,!0)}function Mb(){if(!Zt()){or({removeEntryObservers:!0});return}aw(),lw(),mn("apply")}function aw(){const e=iw();if(!e?.descriptor?.get||!e.descriptor?.set||e.descriptor.set[nm])return;const{prototype:t,descriptor:n}=e;function r(o){if(!sw(this,o))return n.set.call(this,o)}r[nm]=!0,r.__baiBaiToolkitOriginalScrollTopSetter=n.set,Object.defineProperty(t,"scrollTop",{...n,set:r})}function iw(){const e=[globalThis.Element?.prototype,globalThis.HTMLElement?.prototype].filter(Boolean);for(const t of e){const n=Object.getOwnPropertyDescriptor(t,"scrollTop");if(n?.get&&n?.set)return{prototype:t,descriptor:n}}return null}function sw(e,t){if(_.mobileMessageEditScrollRestoreActive||!(e instanceof HTMLElement)||e.id!=="chat")return!1;const n=Jt();if(!n||n.chat!==e||Date.now()<Number(n.userScrollIntentUntil||0))return!1;const r=Number(t);return Number.isFinite(r)?Math.abs(r-Number(n.scrollTop||0))>uu:!1}function lw(){if(_.mobileMessageEditScrollGuardObserversInstalled){if(_.mobileMessageEditScrollGuardEntryHandler)return;or({removeEntryObservers:!0})}const e=r=>{uw(r)},t=r=>{dw(r)},n=()=>{mn("focusout",0),mn("focusout settle",80)};document.addEventListener("pointerdown",e,!0),document.addEventListener("mousedown",e,!0),document.addEventListener("touchstart",e,{capture:!0,passive:!0}),document.addEventListener("click",e,!0),document.addEventListener("focusin",t,!0),document.addEventListener("focusout",n,!0),_.mobileMessageEditScrollGuardEntryHandler=e,_.mobileMessageEditScrollGuardFocusInHandler=t,_.mobileMessageEditScrollGuardFocusOutHandler=n,_.mobileMessageEditScrollGuardObserversInstalled=!0}function cw(){if(!_.mobileMessageEditScrollGuardObserversInstalled)return;const e=_.mobileMessageEditScrollGuardEntryHandler,t=_.mobileMessageEditScrollGuardFocusInHandler,n=_.mobileMessageEditScrollGuardFocusOutHandler,r=_.mobileMessageEditScrollGuardUpdateHandler,o=_.mobileMessageEditScrollGuardResizeHandler,a=_.mobileMessageEditScrollGuardUserScrollIntentHandler;e&&(document.removeEventListener("pointerdown",e,!0),document.removeEventListener("mousedown",e,!0),document.removeEventListener("touchstart",e,!0),document.removeEventListener("click",e,!0)),t&&document.removeEventListener("focusin",t,!0),n&&document.removeEventListener("focusout",n,!0),r&&(document.removeEventListener("focusin",r,!0),document.removeEventListener("focusout",r,!0)),a&&(document.removeEventListener("touchmove",a,!0),document.removeEventListener("wheel",a,!0)),o&&(window.removeEventListener("resize",o,!0),window.visualViewport?.removeEventListener("resize",o,!0)),_.mobileMessageEditScrollGuardMutationObserver?.disconnect(),_.mobileMessageEditScrollGuardMutationObserver=null,_.mobileMessageEditScrollGuardMutationElement=null,_.mobileMessageEditScrollGuardResizeObserver?.disconnect(),_.mobileMessageEditScrollGuardResizeObserver=null,_.mobileMessageEditScrollGuardResizeElement=null,_.mobileMessageEditScrollGuardUpdateFrame&&(cancelAnimationFrame(_.mobileMessageEditScrollGuardUpdateFrame),_.mobileMessageEditScrollGuardUpdateFrame=0),clearTimeout(_.mobileMessageEditScrollGuardUpdateTimer),_.mobileMessageEditScrollGuardUpdateTimer=null,delete _.mobileMessageEditScrollGuardEntryHandler,delete _.mobileMessageEditScrollGuardFocusInHandler,delete _.mobileMessageEditScrollGuardFocusOutHandler,delete _.mobileMessageEditScrollGuardUpdateHandler,_.mobileMessageEditScrollGuardResizeHandler=null,_.mobileMessageEditScrollGuardUserScrollIntentHandler=null,_.mobileMessageEditScrollGuardActiveListenersInstalled=!1,_.mobileMessageEditScrollGuardObserversInstalled=!1}function uw(e){if(!Zt())return;const t=e.target instanceof Element?e.target:null;if(!t)return;const n=t.closest(Bt);if(n instanceof HTMLElement){ma("edit interaction",n,{force:e.type!=="click"||!ku(n)}),Au(n);return}t.closest(Bg)&&(mn("edit button"),mn("edit button settle",80))}function dw(e){const t=e.target;if(Zt()&&t instanceof HTMLElement&&t.matches(Bt)){ma("edit focusin",t,{force:!ku(t)});return}mn("focusin")}function cm(e=Jt()){const t=e?.chat;if(!(t instanceof HTMLElement)||(pw(t),mw(),typeof ResizeObserver!="function")||_.mobileMessageEditScrollGuardResizeElement===t)return;_.mobileMessageEditScrollGuardResizeObserver?.disconnect();const n=new ResizeObserver(r=>{const o=r.find(a=>a.target===t)||r[0];bw(o?.contentRect?.height)});n.observe(t),_.mobileMessageEditScrollGuardResizeObserver=n,_.mobileMessageEditScrollGuardResizeElement=t}function pw(e){if(!(e instanceof HTMLElement)||typeof MutationObserver!="function"||_.mobileMessageEditScrollGuardMutationElement===e)return;_.mobileMessageEditScrollGuardMutationObserver?.disconnect();const t=new MutationObserver(()=>{mn("chat mutation")});t.observe(e,{childList:!0,subtree:!0}),_.mobileMessageEditScrollGuardMutationObserver=t,_.mobileMessageEditScrollGuardMutationElement=e}function mw(){if(_.mobileMessageEditScrollGuardActiveListenersInstalled)return;const e=()=>{hw()},t=()=>{_w()},n=r=>{yw(r)};document.addEventListener("touchmove",t,{capture:!0,passive:!0}),document.addEventListener("touchmove",n,{capture:!0,passive:!0}),document.addEventListener("wheel",t,{capture:!0,passive:!0}),document.addEventListener("wheel",n,{capture:!0,passive:!0}),document.addEventListener("scroll",n,!0),window.addEventListener("resize",e,!0),window.visualViewport?.addEventListener("resize",e,!0),_.mobileMessageEditScrollGuardResizeHandler=e,_.mobileMessageEditScrollGuardUserScrollIntentHandler=t,_.mobileMessageEditScrollGuardEditorScrollIntentHandler=n,_.mobileMessageEditScrollGuardActiveListenersInstalled=!0}function fw(){_.mobileMessageEditScrollGuardMutationObserver?.disconnect(),_.mobileMessageEditScrollGuardMutationObserver=null,_.mobileMessageEditScrollGuardMutationElement=null,_.mobileMessageEditScrollGuardResizeObserver?.disconnect(),_.mobileMessageEditScrollGuardResizeObserver=null,_.mobileMessageEditScrollGuardResizeElement=null;const e=_.mobileMessageEditScrollGuardResizeHandler,t=_.mobileMessageEditScrollGuardUserScrollIntentHandler,n=_.mobileMessageEditScrollGuardEditorScrollIntentHandler;t&&(document.removeEventListener("touchmove",t,!0),document.removeEventListener("wheel",t,!0)),n&&(document.removeEventListener("touchmove",n,!0),document.removeEventListener("wheel",n,!0),document.removeEventListener("scroll",n,!0)),e&&(window.removeEventListener("resize",e,!0),window.visualViewport?.removeEventListener("resize",e,!0)),_.mobileMessageEditScrollGuardResizeHandler=null,_.mobileMessageEditScrollGuardUserScrollIntentHandler=null,_.mobileMessageEditScrollGuardEditorScrollIntentHandler=null,_.mobileMessageEditScrollGuardActiveListenersInstalled=!1}function mn(e="",t=0){if(!Zt()){or();return}if(t>0){clearTimeout(_.mobileMessageEditScrollGuardUpdateTimer),_.mobileMessageEditScrollGuardUpdateTimer=setTimeout(()=>{_.mobileMessageEditScrollGuardUpdateTimer=null,mn(e)},t);return}_.mobileMessageEditScrollGuardUpdateFrame||(_.mobileMessageEditScrollGuardUpdateFrame=requestAnimationFrame(()=>{_.mobileMessageEditScrollGuardUpdateFrame=0,gw(e||"scheduled update")}))}function gw(e=""){const t=document.querySelector(Bt);if(t instanceof HTMLElement){ma(e||"refresh",t);return}or()}function ma(e,t=null,{force:n=!1}={}){if(!Zt()){or();return}const r=t instanceof HTMLElement&&t.matches(Bt)?t:document.querySelector(Bt),o=document.querySelector("#chat");if(!(r instanceof HTMLElement)||!(o instanceof HTMLElement)){or();return}const a=_.mobileMessageEditScrollGuard;if(!n&&a?.editor===r&&a?.chat===o){cm(a);return}Ob(a),_.mobileMessageEditScrollGuard={editor:r,chat:o,scrollTop:o.scrollTop,chatHeight:o.offsetHeight,capturedAt:Date.now(),reason:e,restoreTimers:[],restoreScheduled:!1,restoreReason:"",caretVisibleTimers:[],caretVisibleCheckScheduled:!1,userScrollIntentUntil:0,editorScrollIntentUntil:0},cm(_.mobileMessageEditScrollGuard)}function or({removeEntryObservers:e=!1}={}){const t=_.mobileMessageEditScrollGuard;Ob(t),fw(),_.mobileMessageEditScrollGuard=null,e&&cw()}function Ob(e=_.mobileMessageEditScrollGuard){e?.restoreTimers?.length&&(e.restoreTimers.forEach(t=>clearTimeout(t)),e.restoreTimers=[]),Bb(e),e&&(e.restoreScheduled=!1,e.restoreReason="")}function Bb(e=_.mobileMessageEditScrollGuard){e?.caretVisibleTimers?.length&&(e.caretVisibleTimers.forEach(t=>clearTimeout(t)),e.caretVisibleTimers=[]),e&&(e.caretVisibleCheckScheduled=!1)}function bw(e=null){const t=Jt();if(!t){mn("chat resize without guard");return}const n=Number(e),r=Number.isFinite(n)?n:t.chat.offsetHeight,o=r-Number(t.chatHeight||0);t.chatHeight=r,!(Math.abs(o)<=uu)&&Db(`chat resize ${o}`)}function hw(){Jt()&&Db("viewport resize")}function _w(){const e=Jt();e&&(e.userScrollIntentUntil=Date.now()+700)}function ku(e){const t=Jt();return!!(t&&t.editor===e)}function yw(e){const n=(e?.target instanceof Element?e.target:null)?.closest?.(Bt);n instanceof HTMLElement&&Au(n)}function Au(e){const t=Jt();!t||t.editor!==e||(t.editorScrollIntentUntil=Date.now()+Qv,Bb(t))}function Db(e){const t=Jt();if(t&&(t.restoreReason=e||t.restoreReason||"restore",!t.restoreScheduled)){t.restoreScheduled=!0,queueMicrotask(()=>El(t.restoreReason)),requestAnimationFrame(()=>El(t.restoreReason));for(const n of qv){const r=setTimeout(()=>{t.restoreTimers=t.restoreTimers.filter(o=>o!==r),El(t.restoreReason),t.restoreTimers.length===0&&(t.restoreScheduled=!1,t.restoreReason="")},n);t.restoreTimers.push(r)}}}function El(e){const t=Jt();if(!t||Date.now()<Number(t.userScrollIntentUntil||0))return;const n=Number(t.scrollTop||0);if(!(Math.abs(t.chat.scrollTop-n)<=uu))try{_.mobileMessageEditScrollRestoreActive=!0,t.chat.scrollTop=n,console.debug(`${Ee} Restored message edit chat scroll after ${e}: ${n}`)}finally{_.mobileMessageEditScrollRestoreActive=!1}}function Ew(e){if(!(e instanceof HTMLTextAreaElement)||!e.isConnected||e.scrollHeight<=e.clientHeight||typeof e.selectionStart!="number"||Sw(e))return;const t=Math.max(0,Math.min(e.selectionStart,e.value.length)),n=vw(e,t);if(!Number.isFinite(n)){Tw(e,t);return}const r=getComputedStyle(e),o=$b(r),a=Mg,i=a+o*Og,s=e.scrollTop+a,l=e.scrollTop+e.clientHeight-i,c=n+o;n<s?e.scrollTop=Math.max(0,n-a):c>l&&(e.scrollTop=Math.min(e.scrollHeight-e.clientHeight,c-e.clientHeight+i))}function Sw(e){const t=Jt();return!!(t&&t.editor===e&&Date.now()<Number(t.editorScrollIntentUntil||0))}function vw(e,t){const n=document.createElement("span");n.textContent="​";const r=document.createElement("div"),o=getComputedStyle(e),a=["boxSizing","width","fontFamily","fontSize","fontWeight","fontStyle","fontVariant","fontStretch","lineHeight","letterSpacing","textTransform","textIndent","textAlign","textRendering","textSizeAdjust","tabSize","paddingTop","paddingRight","paddingBottom","paddingLeft","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"];for(const s of a)r.style[s]=o[s];r.style.position="absolute",r.style.visibility="hidden",r.style.pointerEvents="none",r.style.whiteSpace="pre-wrap",r.style.overflowWrap="break-word",r.style.wordWrap="break-word",r.style.overflow="hidden",r.style.top="0",r.style.left="-9999px",r.style.height="auto",r.style.minHeight="0",r.style.maxHeight="none",r.style.width=`${e.offsetWidth}px`;const i=e.value.slice(0,t);r.append(document.createTextNode(i.length>0?i:"​"),n),document.body.append(r);try{const s=n.offsetTop,l=parseFloat(o.borderTopWidth)||0;return s-l}finally{r.remove()}}function $b(e){const t=parseFloat(e.lineHeight);if(Number.isFinite(t))return t;const n=parseFloat(e.fontSize);return Number.isFinite(n)?n*1.2:20}function Tw(e,t){if(e.scrollHeight<=e.clientHeight||e.value.length===0)return;const n=getComputedStyle(e),r=$b(n),o=Mg+r*Og,a=Math.round((e.scrollHeight-e.clientHeight)*t/e.value.length)-o;e.scrollTop=Math.max(0,Math.min(a,e.scrollHeight-e.clientHeight))}function Jt(){const e=_.mobileMessageEditScrollGuard;return e?!Zt()||!(e.editor instanceof HTMLElement)||!(e.chat instanceof HTMLElement)||!e.editor.isConnected||!e.chat.isConnected||!e.editor.matches(Bt)?(or(),null):e:null}function Zt(){return!!C.mobileMessageEditScrollGuardEnabled}function xw(){const e=HTMLElement.prototype.focus;if(typeof e!="function"||e[Zp])return;function t(...n){if(!fa(this))return e.apply(this,n)}t[Zp]=!0,t.__baiBaiToolkitOriginalFocus=e,HTMLElement.prototype.focus=t}function ww(){const e=globalThis.jQuery?.fn||globalThis.$?.fn;if(!e)return;const t=e.focus;if(typeof t=="function"&&!t[em]){let r=function(...o){return o.length===0&&um(this)?this:(this.length>0&&this[0].id==="curEditTextarea"&&Zt()&&(o=[{preventScroll:!0}]),t.apply(this,o))};r[em]=!0,r.__baiBaiToolkitOriginalFocus=t,e.focus=r}const n=e.trigger;if(typeof n=="function"&&!n[tm]){let r=function(...o){return Ow(o[0])&&um(this)?this:n.apply(this,o)};r[tm]=!0,r.__baiBaiToolkitOriginalTrigger=n,e.trigger=r}}function Cw(e){const t=e.target instanceof Element?e.target.closest($g):null,n=e.target instanceof Element?e.target.closest(Bt):null;if(Zt()&&n instanceof HTMLElement){ma("direct edit focus intent",n,{force:!0}),Au(n);const r=e.touches?.[0]||e;_.mobileAutoKeyboardTouchStartX=r.clientX,_.mobileAutoKeyboardTouchStartY=r.clientY}de()&&t instanceof HTMLElement&&Iw(t)&&(_.mobileAutoKeyboardDirectFocusTarget=t,_.mobileAutoKeyboardDirectFocusAt=Date.now())}function kw(e){if(!Zt())return;const t=e.target instanceof Element?e.target.closest(Bt):null;if(t instanceof HTMLElement){let n=!1;if(e.type==="touchend"&&typeof _.mobileAutoKeyboardTouchStartX=="number"){const r=e.changedTouches?.[0]||e,o=Math.abs(r.clientX-_.mobileAutoKeyboardTouchStartX),a=Math.abs(r.clientY-_.mobileAutoKeyboardTouchStartY);(o>10||a>10)&&(n=!0)}_.mobileAutoKeyboardTouchStartX=null,_.mobileAutoKeyboardTouchStartY=null,n||Aw(e,t)}}function Aw(e,t){if(!(document.activeElement===t||Date.now()-Number(_.mobileMessageEditPreventScrollFocusAt||0)<=300)){_.mobileMessageEditPreventScrollFocusAt=Date.now();try{t.focus({preventScroll:!0})}catch{t.focus()}}}function Pw(e){const t=e.target;t instanceof HTMLElement&&(Zt()&&t.matches(Bt)&&ma("edit focusin",t,{force:!ku(t)}),fa(t)&&Lw(t))}function Lw(e){document.activeElement===e&&e.blur();const t=()=>{document.activeElement===e&&fa(e)&&e.blur()};typeof requestAnimationFrame=="function"?requestAnimationFrame(t):setTimeout(t,0)}function fa(e){return!!(de()&&e instanceof HTMLElement&&Rw(e)&&!Mw(e))}function Iw(e){return!!(C.mobileAutoKeyboardSuppressionEnabled&&e.matches($g))}function Rw(e){return!!(C.mobileAutoKeyboardSuppressionEnabled&&(e.matches(Dg)||e.matches(du)))}function Mw(e){return _.mobileAutoKeyboardDirectFocusTarget===e&&Date.now()-Number(_.mobileAutoKeyboardDirectFocusAt||0)<=jv}function um(e){const t=e?.[0];return t instanceof HTMLElement&&fa(t)}function Ow(e){const n=(typeof e=="string"?e:typeof e?.type=="string"?e.type:"").split(".")[0];return n==="focus"||n==="focusin"}function Bw(e){!C.mobileAutoKeyboardSuppressionEnabled||!de()||((e?.type==="pagehide"||document.visibilityState==="hidden")&&$w(),Dw())}function Dw(){dm();const e=()=>{dm()};typeof requestAnimationFrame=="function"?requestAnimationFrame(e):setTimeout(e,0),setTimeout(e,100)}function dm(){const e=document.activeElement;e instanceof HTMLElement&&e.matches(du)&&fa(e)&&e.blur()}function $w(){_.mobileAutoKeyboardDirectFocusTarget=null,_.mobileAutoKeyboardDirectFocusAt=0}function rc(){const e=document.getElementById("chat");e&&(e.removeEventListener("click",pm),(C.messageDoubleClickEditEnabled||C.messageTripleClickEditEnabled)&&e.addEventListener("click",pm))}function pm(e){if(!Nw(e)||!(e.target instanceof Element)||e.target.closest(Si)||document.querySelector("#chat #curEditTextarea"))return;const t=e.target.closest(".mes_text");if(!(t instanceof HTMLElement))return;const n=t.closest(".mes[mesid]");if(!(n instanceof HTMLElement))return;const r=n.querySelector(".mes_button.mes_edit");if(!(r instanceof HTMLElement))return;const o=Hw(e,n,t);r.click(),Number.isInteger(o)&&aC(n,o);const a=window.getSelection();a&&a.removeAllRanges()}function Nw(e){return!!(C.messageDoubleClickEditEnabled&&e.detail===2||C.messageTripleClickEditEnabled&&e.detail===3)}function Hw(e,t,n){const r=Number(t.getAttribute("mesid")),o=Number.isInteger(r)&&r>=0?Q.chat?.[r]?.mes:null;if(typeof o!="string"||o.length===0)return null;const a=Gw(e);if(!a)return null;const i=Fw(a.clientX,a.clientY);if(!i||!zw(i,n))return null;const s=n.textContent||"";if(!s)return null;const l=Vw(n,i);if(!Number.isInteger(l))return null;const c=Uw(i);return Ww(o,s,l,c)??Kw(o,s,l)}function Gw(e){const t=e.changedTouches?.[0]||e.touches?.[0];return t&&Number.isFinite(t.clientX)&&Number.isFinite(t.clientY)?t:Number.isFinite(e.clientX)&&Number.isFinite(e.clientY)?e:null}function Fw(e,t){if(typeof document.caretRangeFromPoint=="function")return document.caretRangeFromPoint(e,t);if(typeof document.caretPositionFromPoint=="function"){const n=document.caretPositionFromPoint(e,t);if(n){const r=document.createRange();return r.setStart(n.offsetNode,n.offset),r.setEnd(n.offsetNode,n.offset),r}}return null}function zw(e,t){const n=e.startContainer;return n===t||t.contains(n)}function Vw(e,t){try{const n=document.createRange();return n.selectNodeContents(e),n.setEnd(t.startContainer,t.startOffset),n.toString().length}catch{return null}}function Uw(e){return e.startContainer?.nodeType!==Node.TEXT_NODE?null:{text:e.startContainer.textContent||"",offset:Math.max(0,Math.min(e.startOffset,(e.startContainer.textContent||"").length))}}function Ww(e,t,n,r=null){const o=jw(e),a=oc(o.text,o.offsets),i=oc(t),s=Gb(i,n);if(!a.text||!i.text)return null;if(a.text===i.text)return Pu(a,e,s);const l=rC(a,e,i,s);if(Number.isInteger(l))return l;const c=oC(a,e,r,i,s);return Number.isInteger(c)?c:null}function Kw(e,t,n){return t.length?Math.max(0,Math.min(e.length,Math.round(e.length*n/t.length))):null}function jw(e){const t=[],n=[];let r=0,o=!0;for(;r<e.length;){if(o){const l=Yw(e,r);if(Number.isInteger(l)){r=l,o=!0;continue}const c=Qw(e,r);if(c>r){r=c,o=!1;continue}}const a=e[r],i=e[r+1];if(a===`
`){Oo(t,n,a,r),r+=1,o=!0;continue}if(e.startsWith("<!--",r)){const l=e.indexOf("-->",r+4);r=l===-1?e.length:l+3,o=!1;continue}if(a==="<"){const l=e.indexOf(">",r+1),c=l!==-1?e.slice(r,l+1):"";if(l!==-1&&Jw(c)){/^<\s*br\b/i.test(c)&&Oo(t,n,`
`,r),r=l+1,o=!1;continue}}const s=Xw(e,r);if(s){Oo(t,n,s.text,r),r+=s.length,o=!1;continue}if(a==="!"&&i==="["){const l=Zw(e,r+1);if(Number.isInteger(l)){r=l,o=!1;continue}}if(a==="["){const l=Hb(e,r);if(l){qw(t,n,e,l.textStart,l.textEnd),r=l.end,o=!1;continue}}Oo(t,n,a,r),r+=1,o=!1}return{text:t.join(""),offsets:n}}function qw(e,t,n,r,o){for(let a=r;a<o;a++)Oo(e,t,n[a],a)}function Oo(e,t,n,r){e.push(n),t.push(r)}function Yw(e,t){const n=Nb(e,t),r=e.slice(t,n);return/^[ \t]{0,3}(```+|~~~+)/.test(r)?n<e.length?n+1:n:null}function Qw(e,t){const n=Nb(e,t),r=e.slice(t,n);let o=0;const a=r.match(/^(?:[ \t]{0,3}>\s*)+/);a&&(o+=a[0].length);const i=r.slice(o),s=i.match(/^[ \t]{0,3}#{1,6}[ \t]+/);if(s)return t+o+s[0].length;const l=i.match(/^[ \t]{0,3}(?:[-+*]|\d{1,9}[.)])[ \t]+(?:\[[ xX]\][ \t]+)?/);return l?t+o+l[0].length:t+o}function Nb(e,t){const n=e.indexOf(`
`,t);return n===-1?e.length:n}function Xw(e,t){const n={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:'"'},r=e.slice(t,t+16).match(/^&(#x[\da-f]+|#\d+|[a-z]+);/i);if(!r)return null;const o=r[1];let a=n[o.toLowerCase()];if(!a&&o[0]==="#"){const i=o[1]?.toLowerCase()==="x"?Number.parseInt(o.slice(2),16):Number.parseInt(o.slice(1),10);if(Number.isFinite(i))try{a=String.fromCodePoint(i)}catch{a=null}}return a?{text:a,length:r[0].length}:null}function Jw(e){return/^<\/?[a-z][\w:-]*(?:\s[^>]*)?\/?>$/i.test(e)}function Hb(e,t){const n=tC(e,"]",t+1);if(n===-1||e[n+1]!=="(")return null;const r=eC(e,n+2);return r===-1?null:{textStart:t+1,textEnd:n,end:r+1}}function Zw(e,t){const n=Hb(e,t);return n?n.end:null}function eC(e,t){let n=0;for(let r=t;r<e.length;r++){if(e[r]==="\\"){r+=1;continue}if(e[r]==="("){n+=1;continue}if(e[r]===")"){if(n===0)return r;n-=1}}return-1}function tC(e,t,n){for(let r=n;r<e.length;r++){if(e[r]==="\\"){r+=1;continue}if(e[r]===t)return r}return-1}function oc(e,t=null){const n=[],r=[],o=new Array(e.length+1);for(let a=0;a<e.length;a++)o[a]=n.length,nC(e[a])&&(n.push(e[a]),r.push(t?.[a]??a));return o[e.length]=n.length,{text:n.join(""),comparableToRaw:r,sourceToComparable:o}}function nC(e){return!/[\s`*_~]/.test(e)}function Gb(e,t){const n=Math.max(0,Math.min(t,e.sourceToComparable.length-1));return e.sourceToComparable[n]??0}function Pu(e,t,n){return n<=0?0:n>=e.comparableToRaw.length?t.length:e.comparableToRaw[n]}function rC(e,t,n,r){for(const o of[80,48,28,16,10]){const a=Math.max(0,r-o),i=Math.min(n.text.length,r+o),s=n.text.slice(a,i);if(s.length<6)continue;const l=zb(e.text,s,Fb(e,n,r));if(l!==-1)return Pu(e,t,l+(r-a))}return null}function oC(e,t,n,r,o){if(!n?.text)return null;const a=oc(n.text);if(a.text.length<3)return null;const i=Gb(a,n.offset),s=zb(e.text,a.text,Fb(e,r,o));return s===-1?null:Pu(e,t,s+i)}function Fb(e,t,n){return t.text.length===0?0:Math.round(n/t.text.length*e.text.length)}function zb(e,t,n){let r=-1,o=Number.POSITIVE_INFINITY,a=e.indexOf(t);for(;a!==-1;){const i=Math.abs(a-n);i<o&&(r=a,o=i),a=e.indexOf(t,a+1)}return r}function aC(e,t){const n=Number(e.getAttribute("mesid"));let r=0;const o=()=>{r+=1;const a=document.querySelector("#curEditTextarea"),i=a?.closest?.(".mes[mesid]"),s=Number(i?.getAttribute("mesid"));if(a instanceof HTMLTextAreaElement&&Number.isInteger(s)&&s===n){const l=a.value;Ba(a,t,l),requestAnimationFrame(()=>Ba(a,t,l)),setTimeout(()=>Ba(a,t,l),60),setTimeout(()=>Ba(a,t,l),180);return}r<20&&setTimeout(o,25)};o()}function Ba(e,t,n){if(!e.isConnected||e.value!==n)return;const r=Math.max(0,Math.min(t,e.value.length));try{e.focus({preventScroll:!0})}catch{e.focus()}e.setSelectionRange(r,r),iC(e,r)}function iC(e,t){if(e instanceof HTMLTextAreaElement){Ew(e);return}if(e.scrollHeight<=e.clientHeight||e.value.length===0)return;const n=Math.round((e.scrollHeight-e.clientHeight)*t/e.value.length);e.scrollTop=Math.max(0,Math.min(n,e.scrollHeight-e.clientHeight))}function sC({saveSettings:e}={}){const t=()=>{typeof e=="function"&&e()};$("#bai_bai_toolkit_fast_chat_list_enabled").prop("checked",C.fastChatListEnabled).on("input",function(){C.fastChatListEnabled=!!$(this).prop("checked"),t()}),$("#bai_bai_toolkit_welcome_recent_chat_direct_open_enabled").prop("checked",C.welcomeRecentChatDirectOpenEnabled).on("input",function(){C.welcomeRecentChatDirectOpenEnabled=!!$(this).prop("checked"),t(),Ug()}),$("#bai_bai_toolkit_long_chat_dom_render_optimization_enabled").prop("checked",C.longChatDomRenderOptimizationEnabled&&!_i).prop("disabled",_i).on("input",function(){C.longChatDomRenderOptimizationEnabled=!!$(this).prop("checked"),t(),Wg()}),$("#bai_bai_toolkit_reduce_loaded_floors_enabled").prop("checked",C.reduceLoadedFloorsEnabled===!0).on("input",function(){C.reduceLoadedFloorsEnabled=!!$(this).prop("checked"),t(),Vb()}),$("#bai_bai_toolkit_message_completion_scroll_to_middle_enabled").prop("checked",C.messageCompletionScrollToMiddleEnabled!==!1).on("input",function(){C.messageCompletionScrollToMiddleEnabled=!!$(this).prop("checked"),t(),hb()}),$("#bai_bai_toolkit_chat_list_scroll_optimization_enabled").prop("checked",C.chatListScrollOptimizationEnabled).on("input",function(){C.chatListScrollOptimizationEnabled=!!$(this).prop("checked"),t(),Hg()}),$("#bai_bai_toolkit_chat_list_auto_clear_enabled").prop("checked",C.chatListAutoClearEnabled).on("input",function(){C.chatListAutoClearEnabled=!!$(this).prop("checked"),t()}),$("#bai_bai_toolkit_mobile_auto_keyboard_suppression_enabled").prop("checked",C.mobileAutoKeyboardSuppressionEnabled).on("input",function(){C.mobileAutoKeyboardSuppressionEnabled=!!$(this).prop("checked"),t(),Rb()}),$("#bai_bai_toolkit_mobile_message_edit_scroll_guard_enabled").prop("checked",C.mobileMessageEditScrollGuardEnabled).on("input",function(){C.mobileMessageEditScrollGuardEnabled=!!$(this).prop("checked"),t(),Mb()}),$("#bai_bai_toolkit_chat_delete_edit_flow_optimization_enabled").prop("checked",C.chatDeleteEditFlowOptimizationEnabled).on("input",function(){C.chatDeleteEditFlowOptimizationEnabled=!!$(this).prop("checked"),t(),Pb()}),$("#bai_bai_toolkit_message_edit_bottom_actions_enabled").prop("checked",C.messageEditBottomActionsEnabled!==!1).on("input",function(){C.messageEditBottomActionsEnabled=!!$(this).prop("checked"),t(),Cu()}),_x(t),$("#bai_bai_toolkit_message_double_click_edit_enabled").prop("checked",C.messageDoubleClickEditEnabled).on("input",function(){C.messageDoubleClickEditEnabled=!!$(this).prop("checked"),C.messageDoubleClickEditEnabled&&(C.messageTripleClickEditEnabled=!1,$("#bai_bai_toolkit_message_triple_click_edit_enabled").prop("checked",!1)),t(),rc()}),$("#bai_bai_toolkit_message_triple_click_edit_enabled").prop("checked",C.messageTripleClickEditEnabled).on("input",function(){C.messageTripleClickEditEnabled=!!$(this).prop("checked"),C.messageTripleClickEditEnabled&&(C.messageDoubleClickEditEnabled=!1,$("#bai_bai_toolkit_message_double_click_edit_enabled").prop("checked",!1)),t(),rc()})}function lC(e){Ox()&&mm(e,"#bai_bai_toolkit_welcome_recent_chat_direct_open_enabled","（兼容模式）",!1,"当前酒馆版本未导出 createOrEditCharacter，已使用兼容模式。"),pa()||mm(e,"#bai_bai_toolkit_chat_delete_edit_flow_optimization_enabled","（当前酒馆版本过低，请更新）",!0,"当前酒馆版本未导出 messageEdit，请更新酒馆后使用。")}function Vb(){const e=cC();e&&(e.isEnabled=()=>C.reduceLoadedFloorsEnabled===!0,e.enforce=ac),C.reduceLoadedFloorsEnabled===!0&&ac({persist:!0})}function cC(){const e=globalThis[hl];if(e?.wrappedFetch)return e;const t=globalThis.fetch;if(typeof t!="function")return null;const n={originalFetch:t.bind(globalThis),wrappedFetch:null,inputHandler:null,isEnabled:()=>C.reduceLoadedFloorsEnabled===!0,enforce:ac};return n.inputHandler=r=>{const o=r.target;!(o instanceof HTMLInputElement)||!wg.has(o.id)||!n.isEnabled()||o.value.trim()===""||n.enforce({candidateValue:o.value,persist:!0})},document.addEventListener("input",n.inputHandler),n.wrappedFetch=async function(o,a){return n.isEnabled()&&dC(o,a)&&n.enforce({persist:!0}),n.originalFetch(o,a)},n.wrappedFetch[hl]=!0,n.wrappedFetch.__baiBaiToolkitOriginalFetch=t,globalThis[hl]=n,globalThis.fetch=n.wrappedFetch,n}function ac({candidateValue:e=Y.chat_truncation,persist:t=!1}={}){if(C.reduceLoadedFloorsEnabled!==!0)return!1;const n=String(e??"").trim();if(!n)return!1;const r=Number(n);if(!Number.isFinite(r)||r!==0&&r<=Mo)return!1;const o=Number(Y.chat_truncation)!==Mo||r!==Mo;return Y.chat_truncation=Mo,uC(),o&&t&&Yt(),o}function uC(){for(const e of wg){const t=document.getElementById(e);t instanceof HTMLInputElement&&(t.value=String(Mo))}}function dC(e,t){try{const n=typeof Request<"u"&&e instanceof Request,r=n?e.url:String(e),o=new URL(r,location.origin);return String(t?.method||(n?e.method:"GET")).toUpperCase()==="POST"&&o.origin===location.origin&&Cv.has(o.pathname)}catch{return!1}}function mm(e,t,n,r,o){const a=e.find(t),i=a.closest("label"),s=i.find("span").first();if(!a.length||!i.length||!s.length)return;const l=`${a.attr("id")}_compat_badge`;let c=s.find(`.${l}`);if(c.length||(c=$(`<small class="${l} bai_bai_toolkit_compat_badge"></small>`),s.append(" ",c)),c.text(n).css({opacity:.75,"font-size":"0.9em","white-space":"nowrap"}),o){const u=String(i.attr("title")||"");u.includes(o)||i.attr("title",u?`${u} ${o}`:o)}r&&(a.prop("checked",!1).prop("disabled",!0),i.css("opacity",.65))}let fm={},gm={},yt="[FloorDirectory]";const bm="bai_bai_toolkit_floor_directory_button",pC="bai_bai_toolkit_floor_directory_wand_container",hm="bai_bai_toolkit_floor_directory_style",A="bai-bai-floor-overlay",Sl="__baiBaiToolkitFloorDirectoryInstalled",_m=48,Da=140,$a=30;function mC(e={}){fm=e.settings??fm,gm=e.extensionState??gm,yt=e.logPrefix??yt}function ic(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function fC(e){return String(e??"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function gC(e){return String(e??"").replace(/<think[ing]*>[\s\S]*?<\/think[ing]*>/gmi,"").trim()}function ym(e){return gC(typeof e?.mes=="string"?e.mes:"")}function bC(e){return ic(e).replace(/\n/g,"<br>")}function vl(e,t){const n=ic(e);if(!t)return n;const r=ic(t),o=new RegExp(fC(r),"gi");return n.replace(o,a=>`<mark class="bai-bai-floor-hit">${a}</mark>`)}function Tl(e){globalThis.toastr?.success?globalThis.toastr.success(e):console.info(`${yt} ${e}`)}function Ar(e){globalThis.toastr?.error?globalThis.toastr.error(e):console.error(`${yt} ${e}`)}function hC(e,t){let n=null;return function(...o){n&&clearTimeout(n),n=setTimeout(()=>{n=null,e.apply(this,o)},t)}}function xl(e,t){if(!e)return"";if(!t)return e.length>Da?`${e.slice(0,Da)}…`:e;const r=e.toLowerCase().indexOf(t.toLowerCase());if(r<0)return e.length>Da?`${e.slice(0,Da)}…`:e;const o=Math.max(0,r-_m),a=Math.min(e.length,r+t.length+_m),i=o>0?"…":"",s=a<e.length?"…":"";return`${i}${e.slice(o,a)}${s}`}function Em(){return!!window.matchMedia?.("(max-width: 600px)")?.matches}function Na(){try{return globalThis.SillyTavern?.getContext?.()??null}catch(e){return console.debug(`${yt} getContext failed`,e),null}}function Yn(e){return Array.isArray(e?.chat)?e.chat:[]}function _C(e,t){return t?.name?String(t.name):t?.is_user?String(e?.name1??"我"):String(e?.name2??"角色")}async function yC(e,t,n){const o=Yn(e)[t];if(!o)throw new Error("楼层不存在");const a=String(n??"");o.mes=a,o.swipe_id!==void 0&&Array.isArray(o.swipes)&&o.swipes[o.swipe_id]!==void 0&&(o.swipes[o.swipe_id]=a),e?.chatMetadata&&typeof e.chatMetadata=="object"&&(e.chatMetadata.tainted=!0);const i=e?.eventTypes??e?.event_types,s=e?.eventSource?.emit;if(typeof s=="function"&&i)try{i.MESSAGE_EDITED&&await s.call(e.eventSource,i.MESSAGE_EDITED,t)}catch(c){console.debug(`${yt} MESSAGE_EDITED emit failed`,c)}if(typeof e?.updateMessageBlock=="function"&&document.querySelector(`#chat .mes[mesid="${t}"]`))try{e.updateMessageBlock(t,o)}catch(c){console.debug(`${yt} updateMessageBlock failed`,c)}if(typeof s=="function"&&i)try{i.MESSAGE_UPDATED&&await s.call(e.eventSource,i.MESSAGE_UPDATED,t)}catch(c){console.debug(`${yt} MESSAGE_UPDATED emit failed`,c)}const l=e?.saveChat;if(typeof l!="function")throw new Error("无法保存：当前酒馆版本未暴露保存接口");await l()}async function EC(e,t,n){const r=`将删除第 ${t} 层及之后的楼层，删除后无法撤销。确定继续吗？`;return typeof e?.callGenericPopup=="function"&&e?.POPUP_TYPE&&"CONFIRM"in e.POPUP_TYPE?!!await e.callGenericPopup(r,e.POPUP_TYPE.CONFIRM):!!globalThis.confirm?.(r)}async function SC(e,t,n={}){const r=Yn(e);if(!r[t])throw new Error("楼层不存在");const o=r.length-t;if(o<1)return 0;const a=e?.executeSlashCommandsWithOptions;if(typeof a!="function")throw new Error("无法删除：当前酒馆版本未暴露斜杠命令执行接口");if(!await EC(e,t))return 0;typeof n.onConfirmed=="function"&&n.onConfirmed(o);const s=await a(`/del ${o}`,{handleExecutionErrors:!0,source:"floor-directory"});if(s?.isError)throw new Error(s.errorMessage||"斜杠删除命令执行失败");return o}async function vC(e,t){const r=Yn(e)[t];if(!r)throw new Error("楼层不存在");const o=e?.executeSlashCommandsWithOptions;if(typeof o!="function")throw new Error("当前酒馆版本未暴露斜杠命令执行接口");const a=!r.is_system,i=a?`/hide ${t}`:`/unhide ${t}`,s=await o(i,{handleExecutionErrors:!0,source:"floor-directory"});if(s?.isError)throw new Error(s.errorMessage||"斜杠命令执行失败");return a}function TC(){if(window[Sl])return;wC();let e=0;const t=()=>{const n=document.getElementById("extensionsMenu");if(!n){e+=1,e<=40&&setTimeout(t,500);return}if(document.getElementById(bm)){window[Sl]=!0;return}const r=document.createElement("div");r.id=pC,r.className="extension_container";const o=document.createElement("div");o.id=bm,o.className="list-group-item flex-container flexGap5",o.tabIndex=0,o.setAttribute("role","button");const a=document.createElement("div");a.className="fa-solid fa-building extensionsMenuExtensionButton";const i=document.createElement("span");i.textContent="楼层管理器",o.append(a,i),r.appendChild(o),n.appendChild(r);const s=()=>xC();o.addEventListener("click",s),o.addEventListener("keydown",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),s())}),window[Sl]=!0,console.debug(`${yt} Floor directory button installed`)};t()}function xC(){document.querySelector(`.${A}`)?.remove();const e=Na();let t=Yn(e);const n=document.createElement("div");n.className=A;const r=document.createElement("div");r.className="bai-bai-floor-dialog",r.tabIndex=-1;const o=document.createElement("div");o.className="bai-bai-floor-head";const a=document.createElement("div");a.className="bai-bai-floor-title",a.textContent="楼层管理器";const i=document.createElement("div");i.className="bai-bai-floor-count",i.textContent=t.length?`共 ${t.length} 层`:"暂无楼层";const s=document.createElement("button");s.type="button",s.className="bai-bai-floor-close",s.setAttribute("aria-label","关闭"),s.innerHTML='<i class="fa-solid fa-xmark"></i>',o.append(a,i,s);const l=document.createElement("div");l.className="bai-bai-floor-bar";const c=document.createElement("i");c.className="fa-solid fa-magnifying-glass bai-bai-floor-bar-icon";const u=document.createElement("input");u.type="text",u.className="bai-bai-floor-input",u.placeholder="输入楼层号 / 关键词…",u.setAttribute("aria-label","输入楼层号或关键词");const p=document.createElement("button");p.type="button",p.className="bai-bai-floor-clear",p.setAttribute("aria-label","清空"),p.innerHTML='<i class="fa-solid fa-xmark"></i>',p.disabled=!0;const b=document.createElement("div");b.className="bai-bai-floor-controls";const v=document.createElement("div");v.className="bai-bai-floor-filter",v.setAttribute("role","group"),v.setAttribute("aria-label","按发言者筛选");const y=[{key:"all",label:"All"},{key:"bot",label:"Char"},{key:"user",label:"User"},{key:"hidden",label:"Hide"}],k=new Map;for(const G of y){const F=document.createElement("button");F.type="button",F.className="bai-bai-floor-filter-btn",F.textContent=G.label,G.key==="all"&&F.classList.add("bai-bai-floor-filter-active"),F.addEventListener("click",()=>{if(I.filter!==G.key){I.filter=G.key;for(const[W,q]of k)q.classList.toggle("bai-bai-floor-filter-active",W===G.key);wt(u.value)}}),k.set(G.key,F),v.appendChild(F)}const P=document.createElement("button");P.type="button",P.className="bai-bai-floor-close bai-bai-floor-mobile-only",P.setAttribute("aria-label","关闭"),P.innerHTML='<i class="fa-solid fa-xmark"></i>',l.append(c,u,p),b.append(v);const E=document.createElement("div");E.className="bai-bai-floor-list";const K=document.createElement("div");K.className="bai-bai-floor-pager";const X=document.createElement("div");X.className="bai-bai-floor-mobile-top-row",X.append(b,K);const B=document.createElement("div");B.className="bai-bai-floor-mobile-bottom-row",B.append(l,P),r.append(o,B,X,E),n.appendChild(r),document.body.appendChild(n);const V=()=>{document.removeEventListener("keydown",ee,!0),n.remove()},ee=G=>{G.key==="Escape"&&(G.preventDefault(),G.stopPropagation(),V())};s.addEventListener("click",V),P.addEventListener("click",V),n.addEventListener("mousedown",G=>{G.target===n&&V()}),document.addEventListener("keydown",ee,!0);const I={expanded:new Set,entries:[],totalItems:0,loadPageEntries:null,keyword:"",page:1,filter:"all",reversePageOrder:!1},Z=G=>{E.innerHTML="",K.innerHTML="";const F=document.createElement("div");F.className="bai-bai-floor-empty",F.textContent=G,E.appendChild(F)},te=()=>{const{keyword:G,totalItems:F}=I;if(!F){const et=I.filter==="user"?"User ":I.filter==="bot"?"Char ":I.filter==="hidden"?"隐藏":"",Te=G?`没有${et}楼层匹配「${G}」`:et?`当前没有${et}楼层`:"当前没有可显示的楼层";Z(Te);return}const W=Math.max(1,Math.ceil(F/$a));I.page=Math.min(Math.max(1,I.page),W);const Ae=((I.reversePageOrder?W-I.page+1:I.page)-1)*$a,Ft=typeof I.loadPageEntries=="function"?I.loadPageEntries(Ae,$a):I.entries.slice(Ae,Ae+$a);E.innerHTML="",E.scrollTop=0;const Ke=document.createDocumentFragment();for(const et of Ft)Ke.appendChild(et?.type==="header"?ie(et):Ze(et,G));E.appendChild(Ke),O(W)},ve=G=>{G!==I.page&&(I.page=G,te())},O=G=>{if(K.innerHTML="",G<=1)return;const F=document.createElement("button");F.type="button",F.className="bai-bai-floor-page-btn",F.innerHTML='<i class="fa-solid fa-chevron-left"></i>',F.setAttribute("aria-label","上一页"),F.disabled=I.page<=1,F.addEventListener("click",()=>ve(I.page-1));const W=document.createElement("span");W.className="bai-bai-floor-page-info",W.textContent=`${I.page} / ${G}`;const q=document.createElement("button");q.type="button",q.className="bai-bai-floor-page-btn",q.innerHTML='<i class="fa-solid fa-chevron-right"></i>',q.setAttribute("aria-label","下一页"),q.disabled=I.page>=G,q.addEventListener("click",()=>ve(I.page+1)),K.append(F,W,q)},le=(G,F,W=1,q={})=>{I.entries=G,I.totalItems=G.length,I.loadPageEntries=(Ae,Ft)=>G.slice(Ae,Ae+Ft),I.keyword=F,I.page=W,I.reversePageOrder=!!q.reversePageOrder,te()},Je=(G,F,W,q=1,Ae={})=>{I.entries=[],I.totalItems=Math.max(0,Number(G)||0),I.loadPageEntries=F,I.keyword=W,I.page=q,I.reversePageOrder=!!Ae.reversePageOrder,te()},ie=G=>{const F=document.createElement("div");return F.className="bai-bai-floor-section",F.textContent=G.label,F},Ze=(G,F)=>{const{index:W}=G;let q=t[W]??G.message,Ae=ym(q);const Ft=!!q?.is_user,Ke=document.createElement("div");Ke.className="bai-bai-floor-row",Ke.classList.add(Ft?"bai-bai-floor-row-user":"bai-bai-floor-row-bot"),I.expanded.has(W)&&Ke.classList.add("bai-bai-floor-row-open");const et=document.createElement("div");et.className="bai-bai-floor-rail";const Te=document.createElement("div");Te.className="bai-bai-floor-num",Te.textContent=String(W),et.appendChild(Te);const kt=document.createElement("div");kt.className="bai-bai-floor-main";const nn=document.createElement("div");nn.className="bai-bai-floor-meta";const gt=document.createElement("span");gt.className="bai-bai-floor-speaker",gt.textContent=_C(e,q);const vn=document.createElement("span");vn.className="bai-bai-floor-tag",vn.textContent=Ft?"User":"Char";const ze=document.createElement("span");ze.className="bai-bai-floor-ghost",ze.title="已隐藏楼层（不参与上下文）",ze.setAttribute("aria-label","已隐藏楼层"),ze.innerHTML='<i class="fa-solid fa-ghost"></i>',nn.append(gt,vn,ze);const je=document.createElement("div");je.className="bai-bai-floor-snippet",je.innerHTML=vl(xl(Ae,F),F);const rn=xe=>{q=xe??q,Ae=ym(q),je.innerHTML=vl(xl(Ae,F),F)},Cr=document.createElement("div");Cr.className="bai-bai-floor-body";const Me=document.createElement("div");Me.className="bai-bai-floor-detail mes_text";const on=document.createElement("div");on.className="bai-bai-floor-actions";const an=document.createElement("button");an.type="button",an.className="bai-bai-floor-action",an.innerHTML='<i class="fa-solid fa-pen-to-square"></i><span>编辑</span>';const zt=document.createElement("button");zt.type="button",zt.className="bai-bai-floor-action";const Vt=document.createElement("button");Vt.type="button",Vt.className="bai-bai-floor-action bai-bai-floor-action-danger",Vt.innerHTML='<i class="fa-solid fa-trash-can"></i><span>删除</span>',Cr.append(Me,on);const Gp=()=>{const xe=!!q?.is_system;Ke.classList.toggle("bai-bai-floor-row-hidden",xe),ze.style.display=xe?"":"none",zt.innerHTML=xe?'<i class="fa-solid fa-eye"></i><span>显示</span>':'<i class="fa-solid fa-eye-slash"></i><span>隐藏</span>'};Gp();const Ia=()=>{Me.classList.remove("bai-bai-floor-detail-editing"),Me.style.height="",Me.innerHTML=bC(Ae),on.innerHTML="",on.append(zt,Vt,an)},ev=()=>{const xe=Me.getBoundingClientRect(),wo=getComputedStyle(Me),sn=["paddingTop","paddingBottom","borderTopWidth","borderBottomWidth"].reduce((At,ml)=>At+(parseFloat(wo[ml])||0),0),Un=Math.max(0,Math.floor(xe.height-sn));Me.classList.add("bai-bai-floor-detail-editing"),Me.style.height=`${Math.ceil(xe.height)}px`;const qe=document.createElement("textarea");qe.className="bai-bai-floor-editor",qe.value=typeof q?.mes=="string"?q.mes:"",qe.spellcheck=!1,qe.style.minHeight="0",qe.style.height=`${Un}px`,qe.style.maxHeight=`${Un}px`;const Oe=document.createElement("button");Oe.type="button",Oe.className="bai-bai-floor-action bai-bai-floor-action-primary",Oe.innerHTML='<i class="fa-solid fa-check"></i><span>保存</span>';const bt=document.createElement("button");bt.type="button",bt.className="bai-bai-floor-action",bt.innerHTML='<i class="fa-solid fa-xmark"></i><span>取消</span>',Me.innerHTML="",Me.appendChild(qe),on.innerHTML="",on.append(bt,Oe),requestAnimationFrame(()=>{window.matchMedia?.("(pointer: coarse)")?.matches||qe.focus({preventScroll:!0})}),bt.addEventListener("click",Ia);const Fp=async()=>{const At=Na();if(!At){Ar("无法读取聊天上下文，保存失败");return}Oe.disabled=!0,bt.disabled=!0;const ml=Oe.innerHTML;Oe.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i><span>保存中</span>';const nv=q,rv=Ae,ov={...q??{},mes:qe.value};rn(ov);try{await yC(At,W,qe.value);const kr=Yn(At);kr.length&&(t=kr),t[W]?rn(t[W]):(q={...q??{},mes:qe.value},rn(q)),Tl(`已保存第 ${W} 层`),Ia()}catch(kr){q=nv,Ae=rv,je.innerHTML=vl(xl(Ae,F),F),console.error(`${yt} save floor edit failed`,kr),Oe.disabled=!1,bt.disabled=!1,Oe.innerHTML=ml,Ar(`保存失败：${kr?.message??kr}`)}};Oe.addEventListener("click",Fp),qe.addEventListener("keydown",At=>{(At.ctrlKey||At.metaKey)&&At.key==="Enter"&&(At.preventDefault(),Fp())})};an.addEventListener("click",ev),zt.addEventListener("click",async()=>{const xe=Na();if(!xe){Ar("无法读取聊天上下文，操作失败");return}zt.disabled=!0;const wo=zt.innerHTML;zt.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i><span>处理中</span>';try{const sn=await vC(xe,W),Un=Yn(xe);Un.length&&(t=Un),t[W]&&rn(t[W]),Gp(),Tl(sn?`已隐藏第 ${W} 层`:`已显示第 ${W} 层`)}catch(sn){console.error(`${yt} toggle floor hidden failed`,sn),zt.innerHTML=wo,Ar(`操作失败：${sn?.message??sn}`)}finally{zt.disabled=!1}}),Vt.addEventListener("click",async()=>{const xe=Na();if(!xe){Ar("无法读取聊天上下文，删除失败");return}an.disabled=!0,Vt.disabled=!0;const wo=Vt.innerHTML;Vt.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i><span>删除中</span>';const sn=t,Un=new Set(I.expanded);let qe=!1;try{const Oe=await SC(xe,W,{onConfirmed:()=>{qe=!0,t=t.slice(0,W),I.expanded=new Set([...I.expanded].filter(bt=>bt<W)),wt(u.value)}});if(Oe>0){const bt=Yn(xe);bt.length<=W&&(t=bt),Tl(`已删除第 ${W} 层及之后 ${Oe} 层`)}}catch(Oe){qe&&(t=sn,I.expanded=Un,wt(u.value)),console.error(`${yt} delete floor range failed`,Oe),Ar(`删除失败：${Oe?.message??Oe}`)}finally{an.disabled=!1,Vt.disabled=!1,Vt.innerHTML=wo}}),I.expanded.has(W)&&(Ke.classList.add("bai-bai-floor-row-open"),Ia()),kt.append(nn,je,Cr),Ke.append(et,kt);const tv=()=>{!I.expanded.has(W)?(I.expanded.add(W),Ke.classList.add("bai-bai-floor-row-open"),Ia()):(I.expanded.delete(W),Me.innerHTML="",on.innerHTML="",Ke.classList.remove("bai-bai-floor-row-open"))};return Ke.addEventListener("click",xe=>{xe.target instanceof Element&&xe.target.closest(".bai-bai-floor-detail, .bai-bai-floor-action, .bai-bai-floor-action *")||tv()}),Ke},Fe=G=>I.filter==="user"?!!G?.is_user:I.filter==="bot"?!G?.is_user:I.filter==="hidden"?!!G?.is_system:!0,tn=(G,F)=>{const W=G[F];return{index:F,message:W}},Gt=G=>{const F=[];for(let W=0;W<G.length;W+=1){const q=G[W];Fe(q)&&F.push(W)}return F},xt=(G,F)=>(typeof G?.mes=="string"?G.mes:"").toLowerCase().includes(F),wt=G=>{const F=String(G??"").trim(),W=e,q=t;if(!W||!q.length){i.textContent="暂无楼层",Z("当前没有打开的聊天");return}i.textContent=`共 ${q.length} 层`;const Ae=(Te,kt)=>{const nn=Em(),gt=Te.length;Je(gt,(ze,je)=>{const rn=Math.min(gt,ze+je),Cr=[];for(let Me=ze;Me<rn;Me+=1){const on=nn?Me:gt-1-Me,an=Te[on];Cr.push(tn(q,an))}return Cr},kt,1,{reversePageOrder:nn}),nn&&gt&&requestAnimationFrame(()=>{E.scrollTop=E.scrollHeight})};if(/^\d+$/.test(F)){const Te=Number(F),kt=Te>=0&&Te<q.length,nn=F.toLowerCase(),gt=[];for(let je=0;je<q.length;je+=1){if(kt&&je===Te)continue;const rn=q[je];Fe(rn)&&xt(rn,nn)&&gt.push(je)}const vn=Em()?gt:gt.slice().reverse(),ze=[];if(kt?(I.expanded=new Set([Te]),ze.push({type:"header",label:`定位 · 楼层 #${Te}`}),ze.push(tn(q,Te))):I.expanded=new Set,vn.length){ze.push({type:"header",label:`文本包含「${F}」的楼层（${vn.length}）`});for(const je of vn)ze.push(tn(q,je))}if(!ze.length){Z(`楼层号 ${F} 超出范围（共 ${q.length} 层，0 ~ ${q.length-1}），且没有楼层文本包含「${F}」`);return}le(ze,F,1),requestAnimationFrame(()=>{E.querySelector(".bai-bai-floor-row-open")?.scrollIntoView({block:"nearest"})});return}const Ft=F;if(!Ft){Ae(Gt(q),"");return}const Ke=Ft.toLowerCase(),et=[];for(let Te=0;Te<q.length;Te+=1){const kt=q[Te];Fe(kt)&&xt(kt,Ke)&&et.push(Te)}Ae(et,Ft)},Ct=()=>{p.disabled=u.value.length===0},La=hC(wt,180);u.addEventListener("input",()=>{Ct(),La(u.value)}),u.addEventListener("keydown",G=>{G.key==="Enter"&&(G.preventDefault(),wt(u.value))}),p.addEventListener("click",()=>{u.value="",Ct(),wt(""),window.matchMedia?.("(pointer: coarse)")?.matches||u.focus({preventScroll:!0})}),wt(""),Ct(),requestAnimationFrame(()=>{const G=window.matchMedia?.("(pointer: coarse)")?.matches,F=window.matchMedia?.("(max-width: 600px)")?.matches;if(G||F)return;const W=r.getBoundingClientRect().height;W>0&&(r.style.minHeight=`${Math.ceil(W)}px`)}),requestAnimationFrame(()=>{r.focus({preventScroll:!0}),window.matchMedia?.("(pointer: coarse)")?.matches||u.focus({preventScroll:!0})})}function wC(){let e=document.getElementById(hm);e||(e=document.createElement("style"),e.id=hm,document.head.appendChild(e)),e.textContent=CC()}function CC(){return`
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
`}function Lu(){if(typeof Q.isGenerating=="function")try{return!!Q.isGenerating()}catch{return!1}return!!(Q.is_send_press||gv.is_group_generating)}function se(){return N.presetGroupingEnabled!==!1}function Ls(e){const t=Ci(z?.extensions,e);if(t!=null)return t;const n=z?.preset_settings_openai,r=gr("openai");if(r&&n){const o=r.getCompletionPresetByName?.(n),a=Ci(o?.extensions,e);if(a!=null)return a}return null}function Ci(e,t){return!e||typeof e!="object"?null:String(t||"").split(".").filter(Boolean).reduce((n,r)=>n&&typeof n=="object"?n[r]:void 0,e)??null}function ki(e,t,n){if(!e||typeof e!="object")return;const r=String(t||"").split(".").filter(Boolean);let o=e;for(let a=0;a<r.length-1;a++){const i=r[a];(!o[i]||typeof o[i]!="object")&&(o[i]={}),o=o[i]}o[r[r.length-1]]=n}function br(e,t){return e.length===t.length&&e.every((n,r)=>n===t[r])}function kC(e){const t=String(e);return typeof globalThis.CSS?.escape=="function"?globalThis.CSS.escape(t):t.replace(/["\\]/g,"\\$&")}function Iu(){if(!N.presetSwitchOptimizationEnabled){AC();return}if(DC(),MC(),OC(),Zu(),vP(),TP(),Yh(),BC(),PC(),LC(),f[zm])return;const e=async()=>{await zC()};f[zm]=e,typeof M.makeFirst=="function"?M.makeFirst(w.OAI_PRESET_CHANGED_AFTER,e):M.on(w.OAI_PRESET_CHANGED_AFTER,e)}function AC(){se()||(zh(),!(!m||typeof m.renderPromptManagerListItems!="function")&&Promise.resolve(m.renderPromptManagerListItems()).catch(e=>{console.debug(`${D} Failed to re-render prompt manager after disabling preset switch optimization`,e)}))}function PC(){if(f[Vm])return;const e=()=>{IC()};f[Vm]=e,typeof M.makeFirst=="function"?M.makeFirst(w.CHATCOMPLETION_MODEL_CHANGED,e):M.on(w.CHATCOMPLETION_MODEL_CHANGED,e)}function LC(){if(f[Um])return;const e=[],t=(r,o,{suppressMs:a=0,delayMs:i=xc,allowNoContext:s=!1,requireVisible:l=!0}={})=>{if(!r||typeof M?.on!="function")return;const c=()=>{wl(o,{suppressMs:a,delayMs:i,allowNoContext:s,requireVisible:l})};e.push({eventType:r,handler:c}),typeof M.makeFirst=="function"?M.makeFirst(r,c):M.on(r,c)};t(w.CHAT_LOADED,"chat load",{suppressMs:Pt,delayMs:0}),t(w.CHAT_CHANGED,"chat changed",{suppressMs:Pt,allowNoContext:!0}),t("groupSelected","group selected",{suppressMs:Pt,allowNoContext:!0}),t(w.CHARACTER_EDITED,"character edited",{suppressMs:Pt}),t(w.CHARACTER_DELETED,"character deleted",{suppressMs:Pt}),t(w.MESSAGE_SENT,"message sent",{delayMs:ln}),t(w.MESSAGE_RECEIVED,"message received",{suppressMs:Pt,delayMs:ln}),t(w.MESSAGE_EDITED,"message edited",{suppressMs:Pt,delayMs:ln}),t(w.MESSAGE_UPDATED,"message updated",{delayMs:ln}),t(w.MESSAGE_DELETED,"message deleted",{suppressMs:Pt,delayMs:ln}),t(w.MESSAGE_SWIPED,"message swiped",{delayMs:ln}),t(w.MESSAGE_SWIPE_DELETED,"message swipe deleted",{delayMs:ln}),t(w.GENERATION_ENDED,"generation ended",{delayMs:Qs}),t(w.WORLDINFO_SETTINGS_UPDATED,"world info settings updated",{suppressMs:Pt}),t(w.WORLDINFO_UPDATED,"world info updated"),t(w.WORLDINFO_FORCE_ACTIVATE,"world info force activate"),t(w.WORLDINFO_SCAN_DONE,"world info scan done"),t(w.PERSONA_CHANGED,"persona changed"),t(w.PERSONA_CREATED,"persona created"),t(w.PERSONA_UPDATED,"persona updated"),t(w.PERSONA_RENAMED,"persona renamed"),t(w.PERSONA_DELETED,"persona deleted"),t(w.CHATCOMPLETION_SOURCE_CHANGED,"chat completion source changed",{suppressMs:Pt}),t(w.SETTINGS_UPDATED,"settings updated",{delayMs:250});const n=r=>{(r.target instanceof Element?r.target:null)?.matches?.("#openai_max_context, #openai_max_tokens")&&wl("token budget changed",{suppressMs:Pt,delayMs:xc,requireVisible:!0})};document.addEventListener("change",n,!0),f[Um]={registrations:e,tokenSettingsHandler:n},wl("initial prompt manager token refresh",{delayMs:250,allowNoContext:!0})}function wl(e,{suppressMs:t=0,delayMs:n=xc,allowNoContext:r=!1,requireVisible:o=!0}={}){if(!N.presetSwitchOptimizationEnabled||o&&!go())return;const a=Zo(),i=Date.now();a.inFlight||i<Number(a.suppressUntil||0)||!Ru()&&!r||(t>0&&Du(t),a.reason=e||"context change",a.attempt=0,a.allowNoContext=!!r,a.requireVisible=!!o,clearTimeout(a.timer),a.timer=setTimeout(()=>{a.timer=null,Ub(a.reason,a.attempt,a.allowNoContext,a.requireVisible)},Math.max(0,Number(n)||0)))}function Ru(){return!!We?.()}function Zo(){return(!f[Ga]||typeof f[Ga]!="object")&&(f[Ga]={timer:null,reason:"",attempt:0,allowNoContext:!1,requireVisible:!0,inFlight:!1,suppressUntil:0}),f[Ga]}async function IC(){if(!(!N.presetSwitchOptimizationEnabled||!Dn()))try{Du(),await hr(),dy()}catch(e){console.debug(`${D} Failed to fast-refresh prompt manager after model change`,e)}}async function Ub(e,t=0,n=!1,r=!0){if(N.presetSwitchOptimizationEnabled)try{if(r&&!go()||Lu())return;if(!Dn()){if(t>=hR)return;const o=Zo();o.reason=e||o.reason||"context change",o.attempt=t+1,o.allowNoContext=!!n,o.requireVisible=!!r,clearTimeout(o.timer),o.timer=setTimeout(()=>{o.timer=null,Ub(o.reason,o.attempt,o.allowNoContext,o.requireVisible)},bR);return}if(!Ru()){n&&await Wb();return}await lI(e||"context change",{markPending:!1,forceVisible:!r})}catch(o){console.debug(`${D} Failed to fast-refresh prompt manager after ${e}`,o)}}async function Wb(){const e=Zo(),t=bn();e.inFlight=!0;const n=Oi(),r=Nr(),o=Is();t.lastSignature="",o||(t.lastEffectiveTokenCountSignature="",kn(null));try{if(await RC()){const i=Oi(),s=Nr();n&&i===n?t.lastSignature=n:(t.lastSignature="",t.pendingAfterFlight=!0),r&&s===r?t.lastEffectiveTokenCountSignature=r:r&&(t.lastEffectiveTokenCountSignature="",kn(null),t.pendingAfterFlight=!0)}Er()?Ie():await hr(),fc()}catch(a){console.debug(`${D} Failed to refresh prompt manager after leaving chat`,a)}finally{e.inFlight=!1,e.suppressUntil=Date.now()+iy}}async function RC(){if(!m?.tokenHandler||typeof m.getPromptCollection!="function")return!1;const e=m.tokenHandler;if(typeof e.resetCounts!="function"||typeof e.getCounts!="function")return!1;e.resetCounts();const t=e.getCounts();for(const a of m.serviceSettings?.prompts||[])a?.identifier&&(t[a.identifier]=0);const n=m.getPromptCollection("normal"),o=(Array.isArray(n?.collection)?n.collection:[]).filter(a=>a?.identifier&&typeof a.content=="string"&&a.content.length>0).map(a=>({identifier:a.identifier,message:{role:a.role||"system",content:a.content}}));if(o.length>0){if(!Sa())return!1;const a=io();(await iI(a,o)).forEach((s,l)=>{t[o[l].identifier]=sI(s,a)})}return m.tokenUsage=typeof e.getTotal=="function"?e.getTotal():0,!0}function MC(){if(f[Qm])return;const e=t=>{NC(t)};f[Qm]=e,document.addEventListener("click",e,!0)}function OC(){if(f[Xm])return;const e=t=>{GC(t)};f[Xm]=e,document.addEventListener("click",e,!0)}function BC(){if(f[Fm])return;const e=async t=>{await FC(t)};f[Fm]=e,typeof M.makeLast=="function"?M.makeLast(w.OAI_PRESET_CHANGED_BEFORE,e):M.on(w.OAI_PRESET_CHANGED_BEFORE,e)}function DC(){if(f[Ym])return;const e=t=>{$C(t)};f[Ym]=e,document.addEventListener("change",e,!0)}function $C(e){if(!N.presetSwitchOptimizationEnabled||!de())return;const t=e.target instanceof HTMLSelectElement?e.target:null;!t?.matches(Z_)||f.allowOpenAiPresetSelectChange||(e.stopPropagation(),e.stopImmediatePropagation(),t.blur(),setTimeout(()=>{f.allowOpenAiPresetSelectChange=!0;try{$(t).trigger("change")}finally{f.allowOpenAiPresetSelectChange=!1}},0))}function NC(e){!N.presetSwitchOptimizationEnabled||!(e.target instanceof Element?e.target:null)?.closest(JI)||(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),HC())}async function HC(){if(!await fe(d`Delete the preset? This action is irreversible and your current settings will be overwritten.`,ge.CONFIRM))return;const t=document.querySelector(Z_),n=z.preset_settings_openai;if(!(t instanceof HTMLSelectElement)||!n)return;e_();const r=Math.max(0,t.selectedIndex),o=Ja?.[n];if(o!==void 0?t.querySelector(`option[value="${kC(o)}"]`)?.remove():t.selectedIndex>=0&&t.options[t.selectedIndex]?.remove(),delete Ja[n],z.preset_settings_openai=null,Object.keys(Ja).length&&t.options.length){const i=r<t.options.length?r:0;t.selectedIndex=i,z.preset_settings_openai=t.options[i]?.text??null,$(t).trigger("change")}(await fetch("/api/presets/delete",{method:"POST",headers:me(),body:JSON.stringify({apiId:"openai",name:n})})).ok?(toastr.success(d`Preset deleted`),await M.emit(w.PRESET_DELETED,{apiId:"openai",name:n})):toastr.warning(d`Preset was not deleted from server`),await fr()}function GC(e){if(!N.presetSwitchOptimizationEnabled&&!se())return;const t=e.target instanceof Element?e.target:null;if(!t){be();return}const n=t.closest(`${S} .bai-bai-preset-prompt-actions-hint`);if(n instanceof HTMLElement){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),eh(n);return}if(t.closest(`${S} .bai-bai-preset-prompt-actions, ${S} .bai-bai-preset-prompt-actions-hint`)||be(),!t.closest(S)||fI(e,t))return;const r=t.closest("[data-preset-prompt-action], .prompt-manager-detach-action, .prompt-manager-inspect-action, .prompt-manager-edit-action");r&&Pe(e,r)}async function FC(e){if(f.openAiPresetSwitchEarlyRendered=!1,t_(e?.presetNameBefore),$s(),!N.presetSwitchOptimizationEnabled||!Dn())return;const t=e?.preset;if(!(!t||typeof t!="object"||!Array.isArray(t.prompts)&&!Array.isArray(t.prompt_order)))try{VC(t),await hr(),Id(),f.openAiPresetSwitchEarlyRendered=!0,await Bu()}catch(n){f.openAiPresetSwitchEarlyRendered=!1,console.debug(`${D} Failed to early-render prompt manager after preset switch`,n)}}async function zC(){if(!N.presetSwitchOptimizationEnabled||!Dn()){se()&&Ie();return}try{f.openAiPresetSwitchEarlyRendered||(await hr(),Id()),Du(),se()&&Ie(),dy()}catch(e){console.debug(`${D} Failed to fast-render prompt manager after preset switch`,e)}finally{f.openAiPresetSwitchEarlyRendered=!1}}function Dn(){return!!(m&&typeof m.renderDebounced=="function"&&typeof m.renderPromptManager=="function"&&typeof m.renderPromptManagerListItems=="function"&&m.containerElement&&m.serviceSettings)}function VC(e){Array.isArray(e.prompts)&&(z.prompts=structuredClone(e.prompts)),Array.isArray(e.prompt_order)&&(z.prompt_order=structuredClone(e.prompt_order)),z.extensions=e.extensions&&typeof e.extensions=="object"?structuredClone(e.extensions):{},m.serviceSettings=z,m.sanitizeServiceSettings?.()}async function hr(){if(nA()){f.presetPromptListRebuildDeferredByDialog=!0;return}Zu();const e=m.containerElement.closest(".scrollableInner"),t=e?.scrollTop,n=(f.presetPromptManagerFastRenderCycle??0)+1;f.presetPromptManagerFastRenderCycle=n;try{m.error=null,await m.renderPromptManager(),await Kb({skipVueSyncIfCurrentCycle:!0}),Qb(),typeof t=="number"&&e?.scrollTo(0,t),cI("prompt manager rendered")}finally{f.presetPromptManagerFastRenderCycle===n&&(f.presetPromptManagerFastRenderCycle=0)}}async function Kb({skipVueSyncIfCurrentCycle:e=!1}={}){if(se()){const v=x();if(e&&v.lastRenderPatchSyncCycle&&v.lastRenderPatchSyncCycle===f.presetPromptManagerFastRenderCycle&&Er()){rt(Ye(),{signature:v.lastStructureSignature});return}if(await Os(),Ie()){rt(Ye(),{signature:v.lastStructureSignature});return}}const t=m.listElement;if(!m.serviceSettings?.prompts||!t)return;const{prefix:n}=m.configuration,r=m.getPromptOrderForCharacter?.(m.activeCharacter)??[],o=m.serviceSettings.prompts.filter(Boolean),a=new Map(o.map(v=>[v.identifier,v])),i=new Map(r.filter(Boolean).map(v=>[v.identifier,v])),s=m.tokenHandler?.getCounts?.()??{},l=new Set(m.configuration.toggleDisabled??[]),c=new Set(Array.isArray(m.overriddenPrompts)?m.overriddenPrompts:[]),u=m.serviceSettings.openai_max_context-m.serviceSettings.openai_max_tokens,p=m.tokenUsage>u*.8;let b=await bv("promptManagerListHeader",{prefix:n});for(const v of r){const y=a.get(v?.identifier);if(!y)continue;const k=i.get(y.identifier)??v,P=k?.enabled?"":`${n}prompt_manager_prompt_disabled`,E=`${n}prompt_manager_prompt_draggable`,K=y.marker?`${n}prompt_manager_marker`:"",X=s[y.identifier]??0,{warningClass:B,warningTitle:V}=Mu({prompt:y,tokens:X,isTokenUsageWarning:p}),ee=X||"-",I=Qu(y),Z=sy.has(y.identifier)||!y.marker,te=y.marker&&!ly.has(y.identifier)?!1:!l.has(y.identifier),ve=HA({canDelete:I,canEdit:Z,canToggle:te,isEnabled:k?.enabled!==!1});b+=UC({prefix:n,prompt:y,enabledClass:P,draggableClass:E,markerClass:K,importantClass:jb(y,n),controlsHtml:ve,warningClass:B,warningTitle:V,calculatedTokens:ee,isOverriddenPrompt:c.has(y.identifier)})}t.innerHTML=b}function UC({prefix:e,prompt:t,enabledClass:n,draggableClass:r,markerClass:o,importantClass:a,controlsHtml:i,warningClass:s,warningTitle:l,calculatedTokens:c,isOverriddenPrompt:u}){const p=Lr(t.identifier),b=Lr(t.name??""),v=t.marker&&t.injection_position!==De.ABSOLUTE,y=!t.marker&&t.system_prompt&&t.injection_position!==De.ABSOLUTE&&!t.forbid_overrides,k=!t.marker&&t.system_prompt&&t.injection_position!==De.ABSOLUTE&&t.forbid_overrides,P=!t.marker&&!t.system_prompt&&t.injection_position!==De.ABSOLUTE,E=t.injection_position===De.ABSOLUTE,K=t.role==="system"&&(t.marker||t.system_prompt)?"":t.role,X={assistant:{roleIcon:"fa-robot",roleTitle:"Prompt will be sent as Assistant"},user:{roleIcon:"fa-user",roleTitle:"Prompt will be sent as User"}},B=X[K]?.roleIcon||"",V=X[K]?.roleTitle||"";return`
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
    `}function jb(e,t){return!e.marker&&e.system_prompt&&e.injection_position!==De.ABSOLUTE&&e.forbid_overrides?`${t}prompt_manager_important`:""}function Mu({prompt:e,tokens:t,isTokenUsageWarning:n}){const r={warningClass:"",warningTitle:""};return!n||e.identifier!=="chatHistory"||(t<=m.configuration.dangerTokenThreshold?(r.warningClass="fa-solid tooltip fa-triangle-exclamation text_danger",r.warningTitle="Very little of your chat history is being sent, consider deactivating some other prompts."):t<=m.configuration.warningTokenThreshold&&(r.warningClass="fa-solid tooltip fa-triangle-exclamation text_warning",r.warningTitle="Only a few messages worth chat history is being sent.")),r}function qb(){if(!se())return null;const e=He(),t=Array.isArray(e?.groups)?e.groups:[];return{promptGroups:e?.prompts??{},groupsById:new Map(t.map(n=>[String(n?.id??""),n]))}}function WC(e,t,n=null){const r=e?.identifier;if(!r||t?.enabled===!1||cy.has(r))return!1;if(!se())return!0;const o=n??qb(),a=o?.promptGroups?.[r]?.groupId;return a?o?.groupsById?.get(String(a))?.enabled!==!1:!0}function KC(e){if(e===null)return null;if(e===void 0)return 0;const t=Number(e);return Number.isFinite(t)&&t>=0?Math.round(t):0}function Nr(){try{const e=m?.serviceSettings??z,t=Array.isArray(e?.prompts)?e.prompts.filter(Boolean):[],n=m?.getPromptOrderForCharacter?.(m.activeCharacter)??[],r=new Map(t.map(a=>[a.identifier,a])),o=[];for(const a of n){const i=a?.identifier||"";if(!i||cy.has(i))continue;const s=r.get(i);o.push([i,s?.role||"",s?.marker?1:0,qr(String(s?.content??""))].join(":"))}return[io(),o.join("|")].join("||")}catch(e){return console.debug(`${D} Failed to build preset effective token count signature`,e),""}}function Is(){const e=Nr(),t=bn();return!!(e&&t.lastEffectiveTokenCountSignature&&e===t.lastEffectiveTokenCountSignature)}function Ou(){const e=m?.tokenHandler?.getCounts?.(),t=m?.getPromptOrderForCharacter?.(m.activeCharacter)??[],n=Array.isArray(m?.serviceSettings?.prompts)?m.serviceSettings.prompts.filter(Boolean):[];if(!e||!t.length||!n.length)return null;const r=new Map(n.map(l=>[l.identifier,l]));if(!Is())return null;const a=qb();let i=0,s=0;for(const l of t){const c=r.get(l?.identifier);if(!WC(c,l,a))continue;s+=1;const u=KC(e[c.identifier]);if(u===null)return null;i+=u}return s>0?Math.round(i):0}function Yb(e){if(e==null)return _R;const t=Number(e);return`预设总Token: ${Number.isFinite(t)?Math.max(0,Math.round(t)):0}`}function kn(e=void 0){if(!se())return!1;const n=document.querySelector(S)?.querySelector(`li.completion_prompt_manager_list_head span.${uy}`);if(!n)return!1;const r=Yb(e===void 0?Ou():e);return n.textContent!==r&&(n.textContent=r),n.title!==wc&&(n.title=wc),!0}function Qb(){const e=(f.promptManagerDraggableInitId??0)+1;f.promptManagerDraggableInitId=e,setTimeout(()=>{if(f.promptManagerDraggableInitId===e)try{ya(),m.makeDraggable?.(),rt()}catch(t){console.debug(`${D} Failed to initialize prompt manager sorting`,t)}},0)}function Bu(){return new Promise(e=>{let t=!1;const n=()=>{t||(t=!0,clearTimeout(r),e())},r=setTimeout(n,80);if(typeof requestAnimationFrame!="function"){n();return}requestAnimationFrame(()=>setTimeout(n,0))})}function Du(e=0){const t=m.renderDebounced;if(typeof t!="function"||t.__baiBaiToolkitPresetSwitchSuppressed)return;const n=()=>{};n.__baiBaiToolkitPresetSwitchSuppressed=!0,n.__baiBaiToolkitOriginalRenderDebounced=t,m.renderDebounced=n,setTimeout(()=>{m?.renderDebounced===n&&(m.renderDebounced=t)},Math.max(0,Number(e)||0))}async function Xb(e,{startId:t=null}={}){const n=_r(e);if(n.length===0){toastr.warning(d`没有可用于分组的预设条目。`);return}if(t&&!n.includes(t)){toastr.warning(d`不能将这个预设条目作为分组起点。`);return}e.rangeSelection={active:!0,name:"",startId:t,endId:null,hoverId:t},x().dragSnapshot=null,toastr.info(t?d`请选择分组的结束条目。`:d`请选择分组的起始条目。`)}function sc(e){e&&(e.rangeSelection={active:!1,name:"",startId:null,endId:null,hoverId:null})}function lc(e,t,n){if(!(!e?.rangeSelection?.active||t?.type!=="prompt")&&(n.preventDefault?.(),n.stopPropagation?.(),n.stopImmediatePropagation?.(),!e.rangeSelection.endId)){if(!e.rangeSelection.startId){e.rangeSelection.startId=t.id,e.rangeSelection.hoverId=t.id,toastr.info(d`请选择分组的结束条目。`);return}if(e.rangeSelection.startId===t.id&&!e.rangeSelection.endId){e.rangeSelection.startId=null,e.rangeSelection.hoverId=null,toastr.info(d`已取消起点选择，请重新选择分组的起始条目。`);return}e.rangeSelection.endId=t.id,qC(e)}}function jC(e,t){!e?.rangeSelection?.active||!e.rangeSelection.startId||e.rangeSelection.endId||t?.type!=="prompt"||(e.rangeSelection.hoverId=t.id)}async function qC(e){const t=Zb(e);if(t.length===0){toastr.warning(d`没有选中可分组的预设条目。`),sc(e);return}const n=await fe(d`预设分组名称`,ge.INPUT,e.rangeSelection?.name||"",{okButton:d`创建分组`,cancelButton:d`取消`});if(!e?.rangeSelection?.active)return;if(typeof n!="string"){e.rangeSelection.endId=null;return}const r=n.trim();if(!r){toastr.warning(d`分组名称不能为空。`),e.rangeSelection.endId=null;return}const o=He();nt(o,new Set(_r(e)));const a=ct();e.rangeSelection.name=r,o.groups.push({id:a,name:r,order:o.groups.length,collapsed:!0,enabled:!0});for(const i of t)o.prompts[i]={groupId:a};l_(o),x().dragSnapshot=null,sc(e),ft(),Ie()}function _r(e=x().state){const t=new Set,n=[];for(const r of $u(e))!r?.id||t.has(r.id)||(t.add(r.id),n.push(r.id));return n}function $u(e=x().state,{includeFavoriteMirrors:t=!1}={}){const n=[];for(const r of e?.items??[]){if(r?.type==="prompt"){n.push(r);continue}if(r?.type==="favorites"){t&&n.push(...(r.children??[]).filter(o=>o?.type==="prompt"));continue}r?.type!=="global-library"&&r?.type==="group"&&n.push(...(r.children??[]).filter(o=>o?.type==="prompt"))}return n}function Jb(e){if(!Array.isArray(e?.items))return!1;const t=[],n=new Set,r=new Set,o=new Map;let a=!1;const i=(s,l,c=null)=>{if(!s?.id||s.type!=="prompt"){a=!0;return}if(n.has(s.id)){a=!0;return}n.add(s.id),(s.groupId??null)!==(c??null)&&(s.groupId=c??null,a=!0),l.push(s)};for(const s of e.items){if(s?.type==="header"||s?.type==="separator"||s?.type==="global-library"||s?.type==="favorites"){if(r.has(s.type)){a=!0;continue}r.add(s.type),t.push(s);continue}if(s?.type==="prompt"){i(s,t,null);continue}if(s?.type==="group"){const l=Array.isArray(s.children)?[...s.children]:[];if(!s.groupId){a=!0;continue}let c=o.get(s.groupId);c?a=!0:(c=s,c.children=[],o.set(s.groupId,c),t.push(c));for(const u of l)i(u,c.children,s.groupId);c.count=c.children.length;continue}a=!0}return!a&&t.length===e.items.length?!1:(e.items=t,!0)}function Zb(e,{includeHover:t=!1}={}){const n=e?.rangeSelection,r=n?.endId||(t?n?.hoverId:null);if(!n?.startId||!r)return[];const o=_r(e),a=o.indexOf(n.startId),i=o.indexOf(r);if(a<0||i<0)return[];const s=Math.min(a,i),l=Math.max(a,i);return o.slice(s,l+1)}function YC(e,t){const n=e?.rangeSelection;if(!n?.active||t?.type!=="prompt")return[];const r=["bai-bai-preset-range-selectable"];return n.startId===t.id&&r.push("bai-bai-preset-range-start"),(n.endId||n.hoverId)===t.id&&n.startId&&r.push("bai-bai-preset-range-end"),Zb(e,{includeHover:!0}).includes(t.id)&&r.push("bai-bai-preset-range-inside"),r}function Nu(e){const n=He().groups.find(i=>i.id===e);if(!n)return;const r=x(),o=r.state,a=!n.collapsed;nd(e,!a,()=>{a||(ir(r,e),Bs(o,e,!0)),n.collapsed=a;const i=o?.items?.find(s=>s?.type==="group"&&s.groupId===e);i&&(i.collapsed=n.collapsed,i.group&&(i.group.collapsed=n.collapsed)),a&&od(e),ft()})}function QC(e){const t=x(),r=He().groups.find(a=>a.id===e);if(!r)return;r.enabled=r.enabled===!1;const o=t.state?.items?.find(a=>a?.type==="group"&&a.groupId===e);o&&(o.enabled=r.enabled,o.group&&(o.group.enabled=r.enabled)),kn(),ft(),Fn()}async function XC(e){const n=He().groups.find(a=>a.id===e);if(!n)return;const r=await fe(d`预设分组名称`,ge.INPUT,n.name||"",{okButton:d`保存`,cancelButton:d`取消`});if(typeof r!="string")return;const o=r.trim();if(!o){toastr.warning(d`分组名称不能为空。`);return}n.name=o,ft(),Ie()}async function JC(e){const t=He();if(!(!t.groups.find(o=>o.id===e)||!await fe(d`要删除这个预设分组吗？预设条目会保留在原位置。`,ge.CONFIRM))){t.groups=t.groups.filter(o=>o.id!==e);for(const[o,a]of Object.entries(t.prompts??{}))a?.groupId===e&&delete t.prompts[o];nt(t,new Set(_r())),ft(),Ie()}}async function Pe(e,t=null){if(t||=e?.currentTarget instanceof Element?e.currentTarget:null,!(t instanceof Element))return;const n=t.getAttribute("data-preset-prompt-action"),r=CA(t);if(n==="favorite"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),zA(r);return}if(n==="global-library"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),fA(r);return}if(n==="group-range"){if(e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),!se()){toastr.warning(d`请先开启预设分组。`);return}if(!r){toastr.warning(d`没有找到要作为起点的预设条目。`);return}if(kA(r)){toastr.warning(d`分组内条目暂不支持再次创建分组。`);return}Xb(x().state,{startId:r});return}if(n==="global-library-new-group"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),vA();return}if(n==="global-library-toggle-select"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),Ms();return}if(n==="global-library-select-item"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),uA(Ha(t));return}if(n==="global-library-insert-selected"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),dA();return}if(n==="global-library-move-selected"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),pA();return}if(n==="global-library-delete-selected"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),mA();return}if(n==="global-library-group-rename"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),TA(wm(t));return}if(n==="global-library-group-delete"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),xA(wm(t));return}if(n==="global-library-insert"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),gA(Ha(t));return}if(n==="global-library-edit"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),yA(Ha(t));return}if(n==="global-library-delete"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),EA(Ha(t));return}if(n==="copy"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be(),rk(t);return}if(n==="delete"){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be();const s=await ZC(r);if(s===X_){await ek(r);return}if(s!==Q_)return;Rh(r)}const o=n==="delete"||t.classList.contains("prompt-manager-detach-action"),a=o?m?.handleDetach:n==="inspect"||t.classList.contains("prompt-manager-inspect-action")?m?.handleInspect:m?.handleEdit;if(typeof a!="function")return;e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.(),be();const i=m.saveServiceSettings;try{o&&typeof i=="function"&&(m.saveServiceSettings=()=>Promise.resolve()),a.call(m,e),o&&(Gn(),Hn()),Jn(void 0,{forceFromSource:!0})}catch(s){console.debug(`${D} Failed to handle prompt manager list action`,s)}finally{o&&typeof i=="function"&&(m.saveServiceSettings=i)}}async function ZC(e){const t=m?.getPromptById?.(e),n=Lr(String(t?.name||e||d`这个条目`)),r=Qu(t),o=[{text:d`仅移除`,icon:"fa-chain-broken",result:Q_}];return r&&o.push({text:d`彻底删除`,icon:"fa-trash",result:X_,classes:["caution"]}),fe(`<div class="bai-bai-preset-prompt-delete-choice">
            <p>${d`要如何处理这个预设条目？`}</p>
            <p><strong>${n}</strong></p>
            <p>${d`仅移除会保留条目本体，以后仍可重新添加；彻底删除会从当前预设中删除这个条目定义。`}</p>
        </div>`,ge.TEXT,"",{okButton:!1,cancelButton:d`取消`,customButtons:o})}async function ek(e){if(!e||!m||!Array.isArray(m.serviceSettings?.prompts))return toastr.warning(d`没有找到要删除的预设条目。`),!1;const t=m.getPromptById?.(e);if(!t)return toastr.warning(d`没有找到要删除的预设条目。`),!1;if(!Qu(t))return toastr.warning(d`这个预设条目不能被彻底删除。`),!1;const n=m.serviceSettings.prompts.findIndex(o=>o?.identifier===e);if(n<0)return toastr.warning(d`没有找到要删除的预设条目。`),!1;Rh(e),m.serviceSettings.prompts.splice(n,1),tk(e),nk(e);const r=m.tokenHandler?.getCounts?.();return r&&typeof r=="object"&&delete r[e],m.hidePopup?.(),m.clearEditForm?.(),m.clearInspectForm?.(),m.log?.(`Deleted prompt: ${t.identifier}`),Gn(),Hn(),rh(),Jn(void 0,{forceFromSource:!0}),Fn(),Tn({includeOpenAiPresetSaves:!1}).catch(o=>{console.debug(`${D} Failed to save deleted preset prompt changes`,o),toastr.error(d`删除预设条目后保存失败。`)}),toastr.success(d`已彻底删除预设条目。`),!0}function tk(e){let t=!1;const n=m?.serviceSettings?.prompt_order;if(Array.isArray(n))for(const o of n)t=Sm(o?.order,e)||t;const r=m?.getPromptOrderForCharacter?.(m.activeCharacter);return t=Sm(r,e)||t,t}function Sm(e,t){if(!Array.isArray(e))return!1;let n=!1;for(let r=e.length-1;r>=0;r--)e[r]?.identifier===t&&(e.splice(r,1),n=!0);return n}function nk(e){const t=He();return!t?.prompts||!Object.prototype.hasOwnProperty.call(t.prompts,e)?!1:(delete t.prompts[e],l_(t),nt(t,new Set(Ge())),ft())}function eh(e){const t=e.closest(".prompt_manager_prompt_controls");if(!(t instanceof HTMLElement))return;const n=t.querySelector(".bai-bai-preset-prompt-actions");if(!(n instanceof HTMLElement))return;const r=n.classList.contains("bai-bai-preset-prompt-actions-visible");be({except:t}),n.classList.toggle("bai-bai-preset-prompt-actions-visible",!r),t.querySelector(".bai-bai-preset-prompt-actions-hint")?.classList.toggle("bai-bai-preset-prompt-actions-hint-hidden",!r),t.closest("li.completion_prompt_manager_prompt")?.classList.toggle("bai-bai-preset-prompt-actions-open",!r)}function be({except:e=null}={}){document.querySelectorAll(`${S} .bai-bai-preset-prompt-actions-visible`).forEach(t=>{const n=t.closest(".prompt_manager_prompt_controls");n!==e&&(t.classList.remove("bai-bai-preset-prompt-actions-visible"),n?.querySelector(".bai-bai-preset-prompt-actions-hint")?.classList.remove("bai-bai-preset-prompt-actions-hint-hidden"),n?.closest("li.completion_prompt_manager_prompt")?.classList.remove("bai-bai-preset-prompt-actions-open"))})}async function rk(e){const n=e.closest(`${S} li.completion_prompt_manager_prompt[data-pm-identifier]`)?.dataset?.pmIdentifier;n&&await ok(n)}async function ok(e){if(!m?.activeCharacter||!Array.isArray(m.serviceSettings?.prompts))return toastr.warning(d`当前无法复制这个预设条目。`),!1;const t=m.getPromptById?.(e),n=m.getPromptOrderForCharacter?.(m.activeCharacter);if(!t||!Array.isArray(n))return toastr.warning(d`没有找到要复制的预设条目。`),!1;const r=n.findIndex(u=>u?.identifier===e);if(r<0)return toastr.warning(d`这个预设条目不在当前列表中。`),!1;const o=th(),a=m.serviceSettings.prompts.findIndex(u=>u?.identifier===e),i=structuredClone(t),s=n[r]??{},l={...structuredClone(s),identifier:o,enabled:s.enabled!==!1};i.identifier=o,i.name=ak(t.name),a>=0?m.serviceSettings.prompts.splice(a+1,0,i):m.serviceSettings.prompts.push(i),n.splice(r+1,0,l),ik(e,o);const c=m.tokenHandler?.getCounts?.();c&&(c[o]=null),m.log?.(`Copied prompt: ${e} -> ${o}.`),nh(),Hn();try{return await Ad(),toastr.success(d`已复制预设条目。`),Fn(),!0}catch(u){return console.debug(`${D} Failed to save copied preset prompt`,u),toastr.error(d`复制预设条目后保存失败。`),!1}}function th(){let e=ct();for(;m?.getPromptById?.(e);)e=ct();return e}function ak(e){const n=`${String(e||d`未命名条目`)} 副本`,r=new Set((m?.serviceSettings?.prompts??[]).map(o=>o?.name).filter(o=>typeof o=="string"));if(!r.has(n))return n;for(let o=2;o<1e3;o++){const a=`${n} ${o}`;if(!r.has(a))return a}return`${n} ${Date.now()}`}function ik(e,t){if(!se())return!1;const n=He(),r=n.prompts?.[e]?.groupId;return r?(n.prompts[t]={groupId:r},nt(n,new Set(Ge())),ft(),!0):!1}function nh(){rh()}function rh(){if(Er()){Ie(),rt(Ye(),{signature:x().lastStructureSignature});return}if(N.presetSwitchOptimizationEnabled&&Dn()){hr();return}m?.render?.()}function sk(e,t){const n=x();if(vt()||n.state?.rangeSelection?.active)return un(n),!1;const r=n.draggedItem??e?.draggedContext?.element;return r?.type!=="prompt"&&r?.type!=="group"?(un(n),!1):(Xn(t??e?.originalEvent??e),!1)}function lk(e,t){const n=x();return vt()||n.state?.rangeSelection?.active||(n.draggedItem??e?.draggedContext?.element)?.type!=="prompt"?(un(n),!1):(Xn(t??e?.originalEvent??e),!1)}function ck(e,t,n){return vt()?!1:n instanceof HTMLElement&&n.matches("li.completion_prompt_manager_prompt_draggable")}function uk(e,t,n){return vt()||!(e instanceof HTMLElement)||e.id!==S.slice(1)||!(n instanceof HTMLElement)?!1:n.matches("li.completion_prompt_manager_prompt_draggable")||n.matches(`li.${va}`)}function dk(e){const t=x();if((t.currentDropTargetElement instanceof HTMLElement?t.currentDropTargetElement:null)===e){t.currentDropTargetGroupId=e instanceof HTMLElement&&e.dataset.presetGroupId||null;return}ea(),e instanceof HTMLElement&&(e.classList.add(Ho),t.currentDropTargetElement=e,t.currentDropTargetGroupId=e.dataset.presetGroupId||null)}function ea(){const e=x();e.currentDropTargetGroupId=null,e.currentDropTargetElement instanceof HTMLElement&&(e.currentDropTargetElement.classList.remove(Ho),e.currentDropTargetElement=null)}function oh(e,t){return ah(e,pk(t),t?.originalEvent??t)}function ah(e,t,n){const r=x(),o=Ye();return vt()||!e||!t?!1:(r.groupHeaderGesture=null,r.currentTopLevelDropIndex=null,r.currentDropTargetGroupId=null,r.currentDropTargetElement=null,r.draggedItem=t,r.draggedPromptId=r.draggedItem?.type==="prompt"?r.draggedItem.id:null,r.dragLayoutCache=ch(e,r.draggedItem),r.dragScrollContainer=o instanceof HTMLElement?L_(o):document.scrollingElement,r.lastDragStartedAt=Date.now(),Hk(r,{notify:!1}),uo(e,!0),Sh(),Pk(e),mk(r),Xn(n),!0)}function Hu(e,t=null){const n=x(),r=In(t?.originalEvent??t);r&&(n.lastDragPoint=r,lh(e,r));const o=n.dragPlacement,a=xk(e,o);return Ai(n),a}function pk(e){const t=e?.item,n=e?.draggedContext?.element;if(t instanceof HTMLElement){if(t.classList.contains("bai-bai-preset-group")&&t.dataset.presetGroupId)return{type:"group",id:t.dataset.presetGroupId};if(t.dataset.pmIdentifier)return{type:"prompt",id:t.dataset.pmIdentifier}}return n?.type==="group"&&n.groupId?{type:"group",id:n.groupId}:n?.type==="prompt"&&n.id?{type:"prompt",id:n.id}:null}function mk(e=x()){ih();const t=o=>Xn(o),n=o=>{e.draggedItem&&Xn(o)},r=o=>Xn(o);document.addEventListener("pointermove",t,!0),document.addEventListener("mousemove",n,!0),document.addEventListener("touchmove",r,{capture:!0,passive:!0}),f[_c]={pointermove:t,mousemove:n,touchmove:r}}function ih(){const e=f[_c];e&&(document.removeEventListener("pointermove",e.pointermove,!0),document.removeEventListener("mousemove",e.mousemove,!0),document.removeEventListener("touchmove",e.touchmove,!0),delete f[_c])}function Xn(e){const t=In(e),n=x();return t?(n.lastDragPoint=t,sh(n),!0):!1}function sh(e=x()){e.dragPlacementFrame||(e.dragPlacementFrame=requestAnimationFrame(()=>{e.dragPlacementFrame=null,lh(e.state,e.lastDragPoint),mh(e)}))}function lh(e,t){const n=x(),r=n.draggedItem;if(!e||!t||!r)return un(n),!1;const o=fk(e,r,t);return o?(n.dragPlacement=o,n.currentTopLevelDropIndex=o.targetType==="top-level"?o.index:null,o.targetType==="group"?dk(o.groupElement):ea(),Sk(n,o),!0):(un(n),!1)}function fk(e,t,n){const r=hk(e,t);if(!r)return null;if(t.type==="prompt"){const o=gk(e,t,n,r);if(o)return o}return bk(e,t,n,r)}function gk(e,t,n,r){const o=_k(r,n),a=o?.groupElement,i=o?.groupId??null;if(!i||!(a instanceof HTMLElement)||!gh(e,i))return null;const l=dh(o,n);return{targetType:"group",groupId:i,groupElement:a,containerElement:o.containerElement,containerRect:o.containerRect,children:o.children,index:l,indicatorRect:ph(o,l),draggedItem:t}}function bk(e,t,n,r){const o=r?.topLevel;if(!o)return null;const a=o.containerRect,i=Ta;if(n.clientX<a.left-i||n.clientX>a.right+i||n.clientY<a.top-i||n.clientY>a.bottom+i)return null;const s=dh(o,n,{minIndex:_h(e)});return{targetType:"top-level",containerElement:o.containerElement,containerRect:o.containerRect,children:o.children,index:s,indicatorRect:ph(o,s),draggedItem:t}}function hk(e,t){const n=x(),r=n.dragLayoutCache;return r&&r.draggedItem?.type===t?.type&&r.draggedItem?.id===t?.id&&uh(r)===r.scrollSignature?r:(n.dragLayoutCache=ch(e,t),n.dragLayoutCache)}function ch(e,t){if(!e||!t)return null;const n=Ye();if(!(n instanceof HTMLElement))return null;const r=[];for(const a of n.querySelectorAll(".bai-bai-preset-group:not(.bai-bai-preset-group-collapsed)")){if(!(a instanceof HTMLElement))continue;const i=a.dataset.presetGroupId,s=a.querySelector(".bai-bai-preset-group-list"),l=a.querySelector(".bai-bai-preset-group-body, .bai-bai-preset-group-list");!i||!(s instanceof HTMLElement)||!(l instanceof HTMLElement)||r.push({groupId:i,groupElement:a,hitRect:cc(l),...vm(s,t)})}const o={draggedItem:{...t},topLevel:vm(n,t),groups:r,scrollSignature:""};return o.scrollSignature=uh(o),o}function vm(e,t){return{containerElement:e,containerRect:cc(e),children:fh(e,t).map(n=>({element:n,rect:cc(n)}))}}function cc(e){const t=e.getBoundingClientRect();return{left:t.left,right:t.right,top:t.top,bottom:t.bottom,width:t.width,height:t.height}}function uh(e){const t=[window.scrollX||0,window.scrollY||0],n=new Set,r=o=>{!(o instanceof HTMLElement)||n.has(o)||(n.add(o),t.push(o.scrollLeft||0,o.scrollTop||0))};r(e?.topLevel?.containerElement);for(const o of e?.groups??[])r(o.containerElement);return t.join(":")}function _k(e,t){if(!e||!t)return null;const n=Ta;let r=null,o=1/0;for(const a of e.groups??[]){const i=a.hitRect;if(t.clientX<i.left-n||t.clientX>i.right+n||t.clientY<i.top-n/2||t.clientY>i.bottom+n)continue;const s=t.clientY<i.top?i.top-t.clientY:t.clientY>i.bottom?t.clientY-i.bottom:0;s<o&&(o=s,r=a)}return r}function dh(e,t,{minIndex:n=0}={}){const r=e?.children??[];let o=0;for(const a of r){const i=a.rect;if(t.clientY<i.top+i.height/2)return Math.max(n,Math.min(o,r.length));o+=1}return Math.max(n,r.length)}function ph(e,t){const n=e?.containerRect;if(!n)return null;const r=e.children??[],o=r[t];let a=n.top;return o?a=o.rect.top:r.length&&(a=r[r.length-1].rect.bottom),{left:n.left,top:a,width:n.width}}function mh(e=x()){e.dragAutoScrollFrame||!e.draggedItem||!e.lastDragPoint||(e.dragAutoScrollFrame=requestAnimationFrame(()=>{e.dragAutoScrollFrame=null,!(!e.draggedItem||!e.lastDragPoint||!yk(e))&&(e.dragLayoutCache=null,sh(e),mh(e))}))}function yk(e=x()){const t=e.dragScrollContainer,n=e.lastDragPoint;return!t||!n?!1:P_({scrollContainer:t,clientY:n.clientY})}function fh(e,t){return Array.from(e?.children??[]).filter(n=>n instanceof HTMLElement&&!Ak(n)&&!Ek(n,t))}function Ek(e,t){return!(e instanceof HTMLElement)||!t?!1:t.type==="group"?e.classList.contains("bai-bai-preset-group")&&e.dataset.presetGroupId===t.id:t.type==="prompt"&&e.dataset.pmIdentifier===t.id}function gh(e,t){return(e?.items??[]).find(n=>n?.type==="group"&&n.groupId===t)??null}function Sk(e,t){const n=vk(e),r=t?.indicatorRect??Tk(t);if(!n||!r){bh(e);return}const o=`${Math.round(r.left)}:${Math.round(r.top)}:${Math.round(r.width)}`;e.dragIndicatorRectKey!==o&&(e.dragIndicatorRectKey=o,n.style.left=`${r.left}px`,n.style.top=`${Math.round(r.top-1)}px`,n.style.width=`${r.width}px`)}function vk(e=x()){if(e.dragIndicatorElement instanceof HTMLElement&&e.dragIndicatorElement.isConnected)return e.dragIndicatorElement;const t=document.createElement("div");return t.className=$d,document.body.append(t),e.dragIndicatorElement=t,t}function Tk(e){const t=e?.containerElement;if(!(t instanceof HTMLElement))return null;const n=t.getBoundingClientRect(),r=fh(t,e.draggedItem),o=r[e.index];let a=n.top;return o instanceof HTMLElement?a=o.getBoundingClientRect().top:r.length&&(a=r[r.length-1].getBoundingClientRect().bottom),{left:n.left,top:a,width:n.width}}function bh(e=x()){e.dragIndicatorElement?.remove?.(),e.dragIndicatorElement=null,e.dragIndicatorRectKey=null}function un(e=x()){e.dragPlacement=null,e.currentTopLevelDropIndex=null,ea(),bh(e)}function Ai(e=x()){ih(),e.dragPlacementFrame&&(cancelAnimationFrame(e.dragPlacementFrame),e.dragPlacementFrame=null),e.dragAutoScrollFrame&&(cancelAnimationFrame(e.dragAutoScrollFrame),e.dragAutoScrollFrame=null),un(e),e.draggedItem=null,e.dragLayoutCache=null,e.dragScrollContainer=null,e.lastDragPoint=null}function xk(e,t){const n=t?.draggedItem;return!e||!n?!1:n.type==="group"?wk(e,n.id,t.index):n.type!=="prompt"?!1:t.targetType==="group"?Ck(e,n.id,t.groupId,t.index):kk(e,n.id,t.index)}function wk(e,t,n){if(!Array.isArray(e?.items)||!t)return!1;const r=Tm(e),o=e.items.findIndex(i=>i?.type==="group"&&i.groupId===t);if(o<0)return!1;const[a]=e.items.splice(o,1);return e.items.splice(hh(e,n),0,a),!br(r,Tm(e))}function Ck(e,t,n,r){if(!Array.isArray(e?.items)||!t||!n)return!1;const o=gh(e,n);if(!o)return!1;const a=Xr(e),i=yh(e,t);if(!i)return!1;i.groupId=n,o.children=Array.isArray(o.children)?o.children:[],o.children.splice(Math.max(0,Math.min(Number(r)||0,o.children.length)),0,i),o.count=o.children.length;const s=Xr(e);return!br(a.order,s.order)||!Fu(a.assignments,s.assignments)}function kk(e,t,n){if(!Array.isArray(e?.items)||!t)return!1;const r=Xr(e),o=yh(e,t);if(!o)return!1;o.groupId=null,e.items.splice(hh(e,n),0,o);const a=Xr(e);return!br(r.order,a.order)||!Fu(r.assignments,a.assignments)}function Tm(e){return(e?.items??[]).map(t=>t?.type==="group"?`group:${t.groupId}`:t?.type==="prompt"?`prompt:${t.id}`:`static:${t?.type??""}`)}function Ak(e){return e.classList.contains("bai-bai-preset-vue-sortable-fallback")||e.classList.contains("bai-bai-preset-vue-sortable-ghost")||e.classList.contains("bai-bai-preset-vue-sortable-chosen")||e.classList.contains("bai-bai-preset-vue-sortable-drag")}function hh(e,t){const n=_h(e),r=Array.isArray(e?.items)?e.items.length:n;return Math.max(n,Math.min(Number(t)||n,r))}function _h(e){if(!Array.isArray(e?.items))return 2;let t=0;for(;t<e.items.length;){const n=e.items[t]?.type;if(n!=="header"&&n!=="global-library"&&n!=="favorites"&&n!=="separator")break;t+=1}return t}function yh(e,t){if(!Array.isArray(e?.items)||!t)return null;for(const o of e.items){if(o?.type!=="group"||!Array.isArray(o.children))continue;const a=o.children.findIndex(i=>i?.type==="prompt"&&i.id===t);if(a>=0){const[i]=o.children.splice(a,1);return o.count=o.children.length,i}}const n=e.items.findIndex(o=>o?.type==="prompt"&&o.id===t);if(n<0)return null;const[r]=e.items.splice(n,1);return r}function Pk(e){x().dragSnapshot=Xr(e)}function Gu(e){const t=x(),n=t.dragSnapshot;if(t.dragSnapshot=null,!n)return!1;const r=Jb(e),o=Xr(e);return r||!br(n.order,o.order)||!Fu(n.assignments,o.assignments)}function Xr(e){return{order:_r(e),assignments:s_(e)}}function Fu(e={},t={}){const n=new Set([...Object.keys(e),...Object.keys(t)]);for(const r of n)if((e[r]??null)!==(t[r]??null))return!1;return!0}function Lk(e,t){if(vt()||zu(e)||e.pointerType==="mouse"&&e.button!==0||e.isPrimary===!1)return;const n=Vu(e);if(!n)return;const r=x(),o=Dk(e.currentTarget),a=Date.now();ar(r,{suppress:!1}),An(r),r.groupHeaderGesture={groupId:t,pointerId:e.pointerId,startedAt:a,x:n.clientX,y:n.clientY,lastX:n.clientX,lastY:n.clientY,scrolling:!1,dragging:!1,feedbackElement:o,readyTimer:null},de()&&o instanceof HTMLElement&&(r.dragReadyFeedbackElement=o,r.dragReadyFeedbackNotified=!1,r.groupHeaderGesture.readyTimer=window.setTimeout(()=>{$k(r,r.groupHeaderGesture)},Md))}function Ik(e,t){const n=x(),r=n.groupHeaderGesture;if(!r||r.groupId!==t||r.pointerId!==e.pointerId||n.state?.dragging)return;const o=Vu(e);if(!o)return;r.lastX=o.clientX,r.lastY=o.clientY;const a=o.clientX-r.x,i=o.clientY-r.y,s=Math.abs(a),l=Math.abs(i);if(r.dragging){Xn(e),e.cancelable&&e.preventDefault(),e.stopPropagation();return}de()&&(Math.max(s,l)<=Ni||(r.scrolling=!0,n.lastGroupHeaderGestureCanceledAt=Date.now(),ga(r),An(n)))}function Rk(e,t){const n=x(),r=n.groupHeaderGesture;if(n.groupHeaderCustomDrag?.pointerId===e.pointerId){uc(e);return}if(!r||r.groupId!==t||r.pointerId!==e.pointerId||(n.groupHeaderGesture=null,ga(r),An(n),zu(e)||Eh(n)))return;const o=Vu(e);if(!o||r.scrolling||Bk(r,o)>KI){n.lastGroupHeaderGestureCanceledAt=Date.now();return}e.cancelable&&e.preventDefault(),e.stopPropagation(),n.lastGroupHeaderToggleAt=Date.now(),Nu(t)}function Mk(e){const t=x();t.groupHeaderCustomDrag?.groupId===e&&ar(t),t.groupHeaderGesture?.groupId===e&&(ga(t.groupHeaderGesture),t.groupHeaderGesture=null,t.lastGroupHeaderGestureCanceledAt=Date.now(),An(t))}function Ok(e,t){const n=x();if(zu(e))return;const r=Date.now();if(r-(n.lastGroupHeaderToggleAt||0)<vc||r-(n.lastGroupHeaderGestureCanceledAt||0)<vc||Eh(n)){e.cancelable&&e.preventDefault(),e.stopPropagation();return}n.lastGroupHeaderToggleAt=r,Nu(t)}function Eh(e){return!!(e.state?.dragging||Date.now()-(e.lastDragEndedAt||0)<vc)}function zu(e){return!!(e.target instanceof Element?e.target:null)?.closest(".bai-bai-preset-group-actions, .bai-bai-preset-group-toggle")}function Vu(e){return typeof e?.clientX!="number"||typeof e?.clientY!="number"?null:{clientX:e.clientX,clientY:e.clientY}}function Bk(e,t){return Math.hypot(t.clientX-e.x,t.clientY-e.y)}function Dk(e){return e instanceof Element?e.closest(`li.${va}`):null}function ga(e){e?.readyTimer&&(clearTimeout(e.readyTimer),e.readyTimer=null)}function $k(e,t){if(!de()||!e||e.groupHeaderGesture!==t||!t||t.scrolling||t.dragging)return!1;const n=e.state,r={clientX:t.lastX??t.x,clientY:t.lastY??t.y};return ga(t),t.dragging=!0,e.groupHeaderCustomDrag={groupId:t.groupId,pointerId:t.pointerId},ah(n,{type:"group",id:t.groupId},r)?(Nk(e),!0):(ar(e),!1)}function Nk(e=x()){Uu();const t=a=>{const i=e.groupHeaderCustomDrag;!i||i.pointerId!==a.pointerId||uc(a)},n=a=>{const i=e.groupHeaderCustomDrag;!i||i.pointerId!==a.pointerId||ar(e)},r=a=>{e.groupHeaderCustomDrag&&uc(a)},o=()=>{e.groupHeaderCustomDrag&&ar(e)};document.addEventListener("pointerup",t,!0),document.addEventListener("pointercancel",n,!0),document.addEventListener("touchend",r,!0),document.addEventListener("touchcancel",o,!0),f[yc]={pointerup:t,pointercancel:n,touchend:r,touchcancel:o}}function Uu(){const e=f[yc];e&&(document.removeEventListener("pointerup",e.pointerup,!0),document.removeEventListener("pointercancel",e.pointercancel,!0),document.removeEventListener("touchend",e.touchend,!0),document.removeEventListener("touchcancel",e.touchcancel,!0),delete f[yc])}function uc(e=null){const t=x(),n=t.state;if(!t.groupHeaderCustomDrag)return;Uu(),e?.cancelable&&e.preventDefault(),e?.stopPropagation?.(),t.lastDragEndedAt=Date.now();const r=Hu(n,e);uo(n,!1),t.draggedPromptId=null,t.draggedItem=null,t.currentDropTargetGroupId=null,t.currentTopLevelDropIndex=null,t.groupHeaderCustomDrag=null,t.groupHeaderGesture=null,t.lastGroupHeaderGestureCanceledAt=Date.now();const o=Gu(n);(r||o)&&ld()}function ar(e=x(),{suppress:t=!0}={}){Uu(),e.groupHeaderGesture&&ga(e.groupHeaderGesture),e.groupHeaderCustomDrag&&(e.dragSnapshot=null,uo(e.state,!1)),An(e),e.groupHeaderCustomDrag=null,e.groupHeaderGesture=null,t&&(e.lastGroupHeaderGestureCanceledAt=Date.now())}function Hk(e,{notify:t=!0}={}){e.dragReadyFeedbackTimer&&(clearTimeout(e.dragReadyFeedbackTimer),e.dragReadyFeedbackTimer=null),e.dragReadyFeedbackElement instanceof HTMLElement&&e.dragReadyFeedbackElement.classList.add(Rr),t&&!e.dragReadyFeedbackNotified&&(e.dragReadyFeedbackNotified=!0,vh())}function An(e=x()){e.dragReadyFeedbackTimer&&(clearTimeout(e.dragReadyFeedbackTimer),e.dragReadyFeedbackTimer=null),e.dragReadyFeedbackElement instanceof HTMLElement&&e.dragReadyFeedbackElement.classList.remove(Rr),e.dragReadyFeedbackElement=null,e.dragReadyFeedbackNotified=!1}function Gk(e,t,n,r){const o=x().state,a=rd(o,n);return e("div",{class:"bai-bai-preset-group-body","aria-hidden":n.collapsed?"true":"false"},[e("div",{class:"bai-bai-preset-group-body-inner"},a?[e(t.VueDraggableNext,r,{default:()=>(n.children??[]).map(i=>Yu(e,i,{groupChild:!0}))})]:[])])}function Fk(){if(f[$i])return;const e=t=>Vk(t);document.addEventListener("pointerdown",e,!0),document.addEventListener("touchstart",e,!0),f[$i]={handler:e}}function zk(){const e=f[$i];e?.handler&&(document.removeEventListener("pointerdown",e.handler,!0),document.removeEventListener("touchstart",e.handler,!0),delete f[$i])}function Vk(e){if(!de()||vt()||x().state?.rangeSelection?.active)return;const t=e.target instanceof Element?e.target:null;if(!t)return;const n=t.closest(`${S}, .bai-bai-preset-group-list`);if(!(n instanceof HTMLElement))return;const r=Uk(n);if(!r||typeof r.option!="function")return;const o=!!t.closest(".drag-handle"),a=o?Sc:Ni;r.option("delay",o?0:Md),r.option("touchStartThreshold",a),r.option("fallbackTolerance",a)}function Uk(e){for(const t of Object.keys(e)){const n=e[t];if(t.startsWith("Sortable")&&n&&typeof n.option=="function")return n}return null}function Wu(e){if(de()){Object.assign(e,{delay:Md,delayOnTouchOnly:!0,touchStartThreshold:Ni,fallbackTolerance:Ni});return}Object.assign(e,{touchStartThreshold:Sc,fallbackTolerance:Sc})}function Sh(){x().dragReadyFeedbackNotified||vh()}function vh(){if(!(!de()||typeof navigator>"u"||typeof navigator.vibrate!="function"))try{navigator.vibrate(12)}catch{}}function Ku(){return vt()?"__bai_bai_preset_drag_locked__":de()?N.presetMobileWholeRowDragEnabled?"li.completion_prompt_manager_prompt_draggable":".drag-handle":""}function uo(e,t){if(!e){t||(An(),Ai(),ea(),Pi(!1),document.body?.classList.remove(Rt),Ye()?.classList.remove(lr));return}t&&(be(),yd(),bd(Ye())),e.dragging=!!t,document.body?.classList.toggle(Rt,e.dragging),Ye()?.classList.toggle(lr,e.dragging),Pi(e.dragging),e.dragging||(An(),Ai(),ea()),!e.dragging&&f.promptManagerTokenRefreshPendingAfterDrag&&(f.promptManagerTokenRefreshPendingAfterDrag=!1,Fn())}function Pi(e){if(!de())return;const t=f[Pl];if(e){if(t?.touchmove)return;const n=r=>{Ju()&&r.cancelable&&r.preventDefault()};document.addEventListener("touchmove",n,{capture:!0,passive:!1}),f[Pl]={touchmove:n};return}t?.touchmove&&(document.removeEventListener("touchmove",t.touchmove,!0),delete f[Pl])}function po(e=x()){return e.globalLibrarySelectedIds instanceof Set||(e.globalLibrarySelectedIds=new Set),e.globalLibrarySelectedIds}function Wk(){const e=x(),t=ba(e.globalLibraryItems),n=Rs(e.globalLibraryGroups),r=new Set(n.map(u=>u.id)),o=po(e),a=!!e.globalLibrarySelecting,i=[],s=new Map(n.map(u=>[u.id,[]]));let l=0;for(const u of t){const p=u.groupId&&r.has(u.groupId)?u.groupId:null,b=o.has(u.id),v={id:u.id,name:u.name,content:u.content,groupId:p,type:"global-library-prompt",selecting:a,selected:b};b&&(l+=1),p?s.get(p)?.push(v):i.push(v)}const c=n.map(u=>{const p=s.get(u.id)??[];return{id:`global-library-group:${u.id}`,type:"global-library-group",groupId:u.id,name:u.name,collapsed:!!u.collapsed,count:p.length,children:p}});return{id:Ks,type:"global-library",count:t.length,selecting:a,selectedCount:l,collapsed:!!e.globalLibraryCollapsed,loading:!!e.globalLibraryLoading,error:e.globalLibraryError?String(e.globalLibraryError):"",hasGroups:c.length>0,ungrouped:i,groups:c}}function Kk(e){if(!e)return;const t=Wk();if(!e.globalLibrary){e.globalLibrary=t;return}const n=e.globalLibrary;n.id=t.id,n.type=t.type,n.count=t.count,n.selecting=t.selecting,n.selectedCount=t.selectedCount,n.collapsed=t.collapsed,n.loading=t.loading,n.error=t.error,n.hasGroups=t.hasGroups,n.ungrouped=Th(n.ungrouped,t.ungrouped),n.groups=jk(n.groups,t.groups)}function Th(e,t){const n=new Map((Array.isArray(e)?e:[]).filter(o=>o?.id).map(o=>[o.id,o])),r=t.map(o=>{const a=n.get(o.id);return a?(a.name=o.name,a.content=o.content,a.groupId=o.groupId,a.type=o.type,a.selecting=o.selecting,a.selected=o.selected,a):o});return Array.isArray(e)?(e.splice(0,e.length,...r),e):r}function jk(e,t){const n=new Map((Array.isArray(e)?e:[]).filter(o=>o?.groupId).map(o=>[o.groupId,o])),r=t.map(o=>{const a=n.get(o.groupId);return a?(a.id=o.id,a.type=o.type,a.groupId=o.groupId,a.name=o.name,a.collapsed=o.collapsed,a.count=o.count,a.children=Th(a.children,o.children),a):o});return Array.isArray(e)?(e.splice(0,e.length,...r),e):r}function ju(e=x().state){const t=e?.globalLibrary;if(!t)return!1;const n=x(),r=po(n),o=!!n.globalLibrarySelecting;let a=0;const i=s=>{if(!s?.id)return;const l=r.has(s.id);s.selecting=o,s.selected=l,l&&(a+=1)};for(const s of t.ungrouped??[])i(s);for(const s of t.groups??[])for(const l of s.children??[])i(l);return t.selecting=o,t.selectedCount=a,!0}function xh(e,t,n,{outsideList:r=!1}={}){if(!n)return null;const o=x().state,a=rd(o,n),i=!!n.selecting,s=r?"div":"li",l=(()=>{if(!a)return[];if(n.loading)return[e("div",{class:"bai-bai-preset-global-library-empty"},d`全局库加载中...`)];if(n.error)return[e("div",{class:"bai-bai-preset-global-library-empty"},d`全局库加载失败`)];if(n.count===0&&!n.hasGroups)return[e("div",{class:"bai-bai-preset-global-library-empty"},d`暂无全局条目`)];const c=[];i&&c.push(qk(e,n)),c.push(wh(e,t,n.ungrouped,{groupId:null}));for(const u of n.groups)c.push(Xk(e,t,u));return c})();return e(s,{class:["bai-bai-preset-global-library",r?"bai-bai-preset-global-library-outside":"",n.collapsed?"bai-bai-preset-global-library-collapsed":"",i?"bai-bai-preset-global-library-selecting":""],key:Ks},[e("div",{class:"bai-bai-preset-group-header bai-bai-preset-global-library-header",onClick:c=>{c.preventDefault(),c.stopPropagation(),cA()}},[e("span",{class:"bai-bai-preset-group-title",title:d`全局库`},[e("span",{class:["menu_button","bai-bai-preset-group-toggle","fa-solid","fa-chevron-down"],title:n.collapsed?d`展开全局库`:d`收起全局库`}),e("span",{class:"bai-bai-preset-group-title-content"},[e("strong",null,d`全局库`),e("small",{class:"bai-bai-preset-group-count"},`(${n.count})`)])]),e("span",{class:"bai-bai-preset-group-actions"},[Be(e,{action:"global-library-new-group",icon:"fa-folder-plus",text:d`新建分组`,onClick:c=>{c.stopPropagation(),Pe(c)}}),Be(e,{action:"global-library-toggle-select",icon:i?"fa-square-check":"fa-list-check",text:i?d`退出多选`:d`多选`,extraClasses:i?["bai-bai-preset-global-library-select-active"]:[],onClick:c=>{c.stopPropagation(),Pe(c)}})])]),e("div",{class:"bai-bai-preset-group-body","aria-hidden":n.collapsed?"true":"false"},[e("div",{class:"bai-bai-preset-group-body-inner"},l)])])}function qk(e,t){const n=t.selectedCount??0;return e("div",{class:"bai-bai-preset-global-library-selection-bar",key:"global-library-selection-bar"},[e("span",{class:"bai-bai-preset-global-library-selection-count"},`${d`已选`} ${n}`),e("span",{class:"bai-bai-preset-global-library-selection-actions"},[Be(e,{action:"global-library-insert-selected",icon:"fa-plus",text:d`添加选中到当前预设`,onClick:r=>Pe(r)}),Be(e,{action:"global-library-move-selected",icon:"fa-folder-tree",text:d`移动选中到分组`,onClick:r=>Pe(r)}),Be(e,{action:"global-library-delete-selected",icon:"fa-trash",text:d`删除选中`,caution:!0,onClick:r=>Pe(r)})])])}function Yk(e,{groupId:t}){const n=Ku(),o=!!x().state?.globalLibrary?.selecting,a={tag:"ul",class:["bai-bai-preset-group-list","bai-bai-preset-global-library-list",e.length?"":"bai-bai-preset-group-list-empty"],list:e,group:{name:HI,pull:!o,put:o?!1:Qk},draggable:"li.completion_prompt_manager_prompt_draggable",filter:Ys,preventOnFilter:!1,sort:!0,disabled:o,animation:0,emptyInsertThreshold:Ta,forceFallback:!0,fallbackOnBody:!0,fallbackClass:"bai-bai-preset-vue-sortable-fallback",ghostClass:"bai-bai-preset-vue-sortable-ghost",chosenClass:"bai-bai-preset-vue-sortable-chosen",dragClass:"bai-bai-preset-vue-sortable-drag","data-global-library-group-id":t||"",onChoose:()=>{be()},onStart:()=>Sh(),onEnd:()=>{SA()}};return Wu(a),n&&(a.handle=n),a}function wh(e,t,n,{groupId:r}){const o=Array.isArray(n)?n:[];if(!!x().state?.globalLibrary?.selecting||!t?.VueDraggableNext)return e("ul",{class:["bai-bai-preset-group-list","bai-bai-preset-global-library-list",o.length?"":"bai-bai-preset-group-list-empty"],"data-global-library-group-id":r||""},o.map(s=>xm(e,s)));const i=Yk(o,{groupId:r});return e(t.VueDraggableNext,i,{default:()=>o.map(s=>xm(e,s))})}function Qk(e,t,n){return n instanceof HTMLElement&&n.matches("li.completion_prompt_manager_prompt_draggable")}function Xk(e,t,n){return e("div",{class:["bai-bai-preset-group","bai-bai-preset-global-library-group",n.collapsed?"bai-bai-preset-group-collapsed":""],"data-preset-global-library-group-id":n.groupId,key:n.id},[e("div",{class:"bai-bai-preset-group-header bai-bai-preset-global-library-group-header",onClick:r=>{r.preventDefault(),r.stopPropagation(),wA(n.groupId)}},[e("span",{class:"bai-bai-preset-group-title",title:n.name},[e("span",{class:["menu_button","bai-bai-preset-group-toggle","fa-solid","fa-chevron-down"],title:n.collapsed?d`展开分组`:d`收起分组`}),e("span",{class:"bai-bai-preset-group-title-content"},[e("span",{class:"fa-solid fa-folder bai-bai-preset-global-library-group-icon"}),e("strong",null,n.name),e("small",{class:"bai-bai-preset-group-count"},`(${n.count})`)])]),e("span",{class:"bai-bai-preset-group-actions"},[Be(e,{action:"global-library-group-rename",icon:"fa-pencil",text:d`重命名分组`,onClick:r=>{r.stopPropagation(),Pe(r)}}),Be(e,{action:"global-library-group-delete",icon:"fa-trash",text:d`删除分组`,caution:!0,onClick:r=>{r.stopPropagation(),Pe(r)}})])]),e("div",{class:"bai-bai-preset-group-body","aria-hidden":n.collapsed?"true":"false"},[e("div",{class:"bai-bai-preset-group-body-inner"},n.collapsed?[]:[wh(e,t,n.children,{groupId:n.groupId})])])])}function xm(e,t){const n=m?.configuration?.prefix??"",r=t.name||d`未命名条目`,o=!!t.selecting,a=!!t.selected,i=o?e("span",{class:["bai-bai-preset-global-library-row-marker","bai-bai-preset-global-library-select-box",a?"bai-bai-preset-global-library-select-box-checked":"","fa-solid",a?"fa-square-check":"fa-square"],"data-preset-prompt-action":"global-library-select-item",title:a?d`取消选择`:d`选择`,onClick:s=>Pe(s)}):e("span",{class:"drag-handle ui-sortable-handle bai-bai-preset-global-library-row-marker",title:d`拖动以移动到分组`},"☰");return e("li",{class:[`${n}prompt_manager_prompt`,"completion_prompt_manager_prompt_draggable","bai-bai-preset-global-library-prompt",a?"bai-bai-preset-global-library-prompt-selected":""],"data-preset-global-library-id":t.id,key:`global-library:${t.id}`},[i,e("span",{class:`${n}prompt_manager_prompt_name`,title:r,"data-pm-name":r},[e("span",null,r)]),e("span",null,[e("span",{class:"prompt_manager_prompt_controls"},[Be(e,{action:"global-library-delete",icon:"fa-trash",text:d`删除全局库条目`,caution:!0,onClick:s=>Pe(s)}),Be(e,{action:"global-library-edit",icon:"fa-pencil",text:d`编辑全局库条目`,onClick:s=>Pe(s)}),Be(e,{action:"global-library-insert",icon:"fa-plus",text:d`添加到当前预设`,onClick:s=>Pe(s)})])]),e("span",{class:"prompt_manager_prompt_tokens"},"-")])}function Jk(){return{version:Y_,items:[],groups:[]}}function ta(e){const t=Array.isArray(e)?e:Array.isArray(e?.items)?e.items:[],n=Array.isArray(e?.groups)?e.groups:[],r=Rs(n),o=new Set(r.map(a=>a.id));return{version:Y_,items:ba(t,o),groups:r}}function Rs(e){if(!Array.isArray(e))return[];const t=new Set,n=[];for(const r of e){if(!r||typeof r!="object")continue;let o=String(r.id||"").trim();(!o||t.has(o))&&(o=ct()),t.add(o),n.push({id:o,name:yr(r.name),collapsed:!!r.collapsed})}return n}function ba(e,t=null){if(!Array.isArray(e))return[];const n=new Set,r=[];for(const o of e){if(!o||typeof o!="object")continue;let a=String(o.id||"").trim();(!a||n.has(a))&&(a=ct()),n.add(a);const i=String(o.groupId||"").trim(),s=i&&(!t||t.has(i))?i:null;r.push({id:a,name:yr(o.name),content:typeof o.content=="string"?o.content:String(o.content??""),groupId:s})}return r}function yr(e){return String(e||"").trim()||d`未命名条目`}async function Zk(){const e=globalThis.BaiBaoKu;if(e&&typeof e.database=="function")return e;if(typeof document>"u")throw new Error("BaiBaoKu frontend bridge is not available.");const t=x();return t.globalLibraryBridgePromise||(t.globalLibraryBridgePromise=new Promise((n,r)=>{let o=!1,a=null;const i=(c,u)=>{o||(o=!0,window.removeEventListener("baibaoku:ready",s),a&&clearTimeout(a),c(u))},s=c=>{const u=c?.detail||globalThis.BaiBaoKu;u&&typeof u.database=="function"&&i(n,u)},l=document.createElement("script");l.src="/api/plugins/baibaoku/v1/client.js",l.async=!0,l.dataset.baiBaiToolkitBaibaokuClient="true",l.addEventListener("load",()=>{const c=globalThis.BaiBaoKu;c&&typeof c.database=="function"&&i(n,c)},{once:!0}),l.addEventListener("error",()=>{i(r,new Error("Failed to load BaiBaoKu frontend bridge."))},{once:!0}),window.addEventListener("baibaoku:ready",s),a=setTimeout(()=>{const c=globalThis.BaiBaoKu;if(c&&typeof c.database=="function"){i(n,c);return}i(r,new Error("BaiBaoKu frontend bridge timed out."))},5e3),document.head.appendChild(l)}).finally(()=>{t.globalLibraryBridgePromise=null})),t.globalLibraryBridgePromise}async function Ch(){const e=await Zk();if(typeof e.isAvailable=="function"&&!await e.isAvailable())throw new Error("BaiBaoKu backend is not available.");const t=e.database(NI);if(!t||typeof t.get!="function"||typeof t.set!="function")throw new Error("BaiBaoKu database API is not available.");return t}function kh(e,{loaded:t=!0,loading:n=!1,error:r=null}={}){const o=x(),a=ta(e);return o.globalLibraryItems=a.items,o.globalLibraryGroups=a.groups,o.globalLibraryLoaded=t,o.globalLibraryLoading=n,o.globalLibraryError=r,eA(o),Ie(),a}function eA(e=x()){const t=po(e);if(t.size===0)return;const n=new Set(ba(e.globalLibraryItems).map(r=>r.id));for(const r of Array.from(t))n.has(r)||t.delete(r)}async function $n({force:e=!1,showLoading:t=!0}={}){const n=x();return!e&&n.globalLibraryLoaded?ta({items:n.globalLibraryItems,groups:n.globalLibraryGroups}):(!e&&n.globalLibraryLoadPromise||(n.globalLibraryError=null,t&&(n.globalLibraryLoading=!0,Ie()),n.globalLibraryLoadPromise=(async()=>{try{const o=await(await Ch()).get(j_,q_),a=ta(o?.exists?o.value:Jk());return kh(a,{loaded:!0,loading:!1,error:null}),a}catch(r){throw n.globalLibraryLoading=!1,n.globalLibraryLoaded=!1,n.globalLibraryError=r?.message||String(r),Ie(),r}finally{n.globalLibraryLoadPromise=null}})()),n.globalLibraryLoadPromise)}async function En(e){const t=x(),n=t.globalLibrarySavePromise||Promise.resolve(),r=async()=>{const i=await $n({force:!0,showLoading:!1}),s=ta(i),l=ta(await e(s)||s);return await(await Ch()).set(j_,q_,l),kh(l,{loaded:!0,loading:!1,error:null}),l},a=n.then(r,r).finally(()=>{t.globalLibrarySavePromise===a&&(t.globalLibrarySavePromise=null)});return t.globalLibrarySavePromise=a,t.globalLibrarySavePromise}async function Ah(e){return e?(await $n()).items.find(n=>n.id===e)??null:null}function tA(){return document.querySelector("#completion_prompt_manager")||document.querySelector(xa)||document.body}function nA(){return(f.presetGlobalLibraryDialogOpenCount??0)>0}function rA(){f.presetGlobalLibraryDialogOpenCount=(f.presetGlobalLibraryDialogOpenCount??0)+1}function oA(){const e=(f.presetGlobalLibraryDialogOpenCount??0)-1;f.presetGlobalLibraryDialogOpenCount=Math.max(0,e),!(f.presetGlobalLibraryDialogOpenCount>0)&&f.presetPromptListRebuildDeferredByDialog&&(f.presetPromptListRebuildDeferredByDialog=!1,N.presetSwitchOptimizationEnabled&&Dn()&&hr())}function aA(){return typeof window>"u"||typeof window.matchMedia!="function"?!0:!window.matchMedia("(pointer: coarse)").matches}function iA(){return!!(typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(max-width: 600px)").matches)}function sA(e){e instanceof HTMLElement&&(e.style.removeProperty("--bai-bai-preset-global-library-dialog-top"),e.style.removeProperty("--bai-bai-preset-global-library-dialog-left"),e.style.removeProperty("--bai-bai-preset-global-library-dialog-width"),e.style.removeProperty("--bai-bai-preset-global-library-dialog-height"))}function lA(e,t){if(!(e instanceof HTMLElement)||!(t instanceof HTMLElement))return;if(iA()){sA(t);return}const n=window.innerWidth||document.documentElement?.clientWidth||0,r=window.innerHeight||document.documentElement?.clientHeight||0;if(!n||!r)return;const o=e.getBoundingClientRect(),a=o.bottom>0&&o.top<r,i=a?Math.max(0,o.top):0,s=a?Math.min(r,o.bottom):r,l=Math.max(280,Math.min(o.width||420,n)),c=Math.min(Math.max(0,o.left),Math.max(0,n-l)),u=Math.max(240,r-i),p=Math.min(u,Math.max(320,s-i)),b=Math.min(i,Math.max(0,r-p));t.style.setProperty("--bai-bai-preset-global-library-dialog-top",`${b}px`),t.style.setProperty("--bai-bai-preset-global-library-dialog-left",`${c}px`),t.style.setProperty("--bai-bai-preset-global-library-dialog-width",`${l}px`),t.style.setProperty("--bai-bai-preset-global-library-dialog-height",`${p}px`)}function Nn({title:e,message:t="",fields:n=[],confirmText:r=d`确定`,cancelText:o=d`取消`,danger:a=!1}={}){const i=tA();return i instanceof HTMLElement?(rA(),new Promise(s=>{const l={},c=i.style.position,u=i.classList.contains("bai-bai-preset-global-library-dialog-host"),p=document.createElement("div"),b=document.createElement("div"),v=document.createElement("div"),y=document.createElement("strong"),k=document.createElement("span"),P=document.createElement("div"),E=document.createElement("div"),K=document.createElement("span"),X=document.createElement("span");let B=null,V=!1;const ee=O=>{V||(V=!0,oA(),document.removeEventListener("keydown",te,!0),B&&(window.removeEventListener("resize",B),document.removeEventListener("scroll",B,!0)),p.remove(),!u&&!i.querySelector(".bai-bai-preset-global-library-dialog-layer")&&(i.classList.remove("bai-bai-preset-global-library-dialog-host"),i.style.position=c),s(O))},I=()=>ee({...l}),Z=()=>ee(null),te=O=>{if(O.key==="Escape"){O.preventDefault(),O.stopPropagation(),Z();return}(O.ctrlKey||O.metaKey)&&O.key==="Enter"&&(O.preventDefault(),O.stopPropagation(),I())},ve=O=>O.stopPropagation();if(i.classList.add("bai-bai-preset-global-library-dialog-host"),p.className="bai-bai-preset-global-library-dialog-layer",b.className="bai-bai-preset-global-library-dialog",b.tabIndex=-1,v.className="bai-bai-preset-global-library-dialog-head",P.className="bai-bai-preset-global-library-dialog-body",E.className="bai-bai-preset-global-library-dialog-actions",y.textContent=e||"",k.className="menu_button fa-solid fa-xmark bai-bai-preset-global-library-dialog-button",k.title=d`取消`,K.className="menu_button bai-bai-preset-global-library-dialog-button",K.textContent=o,X.className=["menu_button","bai-bai-preset-global-library-dialog-button",a?"bai-bai-preset-global-library-dialog-danger":""].filter(Boolean).join(" "),X.textContent=r,t){const O=document.createElement("div");O.className="bai-bai-preset-global-library-dialog-message",O.textContent=t,P.appendChild(O)}for(const O of n){if(!O?.id)continue;const le=document.createElement("div"),Je=document.createElement("label");let ie=null;if(le.className="bai-bai-preset-global-library-dialog-field",Je.textContent=O.label||O.id,Je.setAttribute("for",`bai_bai_preset_global_library_${O.id}`),le.appendChild(Je),O.type==="textarea")ie=document.createElement("textarea"),ie.rows=Number(O.rows)||8;else if(O.type==="select"){ie=document.createElement("select");for(const Ze of O.options??[]){const Fe=document.createElement("option");Fe.value=String(Ze.value??""),Fe.textContent=String(Ze.label??Ze.value??""),ie.appendChild(Fe)}}else ie=document.createElement("input"),ie.type="text";ie.id=`bai_bai_preset_global_library_${O.id}`,ie.classList.add("text_pole"),ie.value=String(O.value??""),l[O.id]=ie.value,ie.addEventListener("input",()=>{l[O.id]=ie.value}),ie.addEventListener("change",()=>{l[O.id]=ie.value}),le.appendChild(ie),P.appendChild(le)}k.addEventListener("click",Z),K.addEventListener("click",Z),X.addEventListener("click",I),p.addEventListener("click",O=>{O.target===p&&Z()}),b.addEventListener("mousedown",ve),b.addEventListener("pointerdown",ve),b.addEventListener("click",ve),document.addEventListener("keydown",te,!0),v.append(y,k),E.append(K,X),b.append(v,P,E),p.appendChild(b),i.appendChild(p),B=()=>lA(i,p),B(),window.addEventListener("resize",B),document.addEventListener("scroll",B,!0),aA()&&b.focus({preventScroll:!0})})):Promise.resolve(null)}function cA(){const e=x(),t=e.state,n=!e.globalLibraryCollapsed,r=Ks;nd(r,!n,()=>{e.globalLibraryCollapsed=n,n||(ir(e,r),Bs(t,r,!0));const o=t?.globalLibrary;o&&(o.collapsed=n),n&&od(r),ed()})}function Ms(){const e=x();e.globalLibrarySelecting=!e.globalLibrarySelecting,e.globalLibrarySelecting||po(e).clear(),ju(e.state)}function uA(e){if(!e)return;const t=x(),n=po(t);n.has(e)?n.delete(e):n.add(e),ju(t.state)}function qu(){const e=x(),t=po(e);return ba(e.globalLibraryItems).map(n=>n.id).filter(n=>t.has(n))}async function dA(){const e=qu();if(e.length===0){toastr.warning(d`请先选择要添加的条目。`);return}await Ph(e)&&Ms()}async function pA(){const e=qu();if(e.length===0){toastr.warning(d`请先选择要移动的条目。`);return}const t=await $n(),n=await Nn({title:d`移动选中到分组`,fields:[{id:"target",type:"select",label:d`目标分组`,value:"",options:[{value:"",label:d`未分组`},...t.groups.map(a=>({value:a.id,label:a.name}))]}],confirmText:d`移动`,cancelText:d`取消`});if(!n)return;const r=String(n.target||"").trim()||null,o=new Set(e);try{await En(a=>{const i=new Set(a.groups.map(l=>l.id)),s=r&&i.has(r)?r:null;return a.items=a.items.map(l=>o.has(l.id)?{...l,groupId:s}:l),a}),toastr.success(d`已移动 ${e.length} 条。`),Ms()}catch(a){console.debug(`${D} Failed to move selected global library items`,a),toastr.error(d`移动条目失败。`)}}async function mA(){const e=qu();if(e.length===0){toastr.warning(d`请先选择要删除的条目。`);return}if(!await Nn({title:d`删除选中`,message:d`要删除选中的 ${e.length} 条全局库条目吗？`,confirmText:d`删除`,cancelText:d`取消`,danger:!0}))return;const n=new Set(e);try{await En(r=>(r.items=r.items.filter(o=>!n.has(o.id)),r)),toastr.success(d`已删除 ${e.length} 条。`),Ms()}catch(r){console.debug(`${D} Failed to delete selected global library items`,r),toastr.error(d`删除条目失败。`)}}async function fA(e){if(!e)return toastr.warning(d`没有找到要添加到全局库的条目。`),!1;const t=m?.getPromptById?.(e);if(!t)return toastr.warning(d`没有找到要添加到全局库的条目。`),!1;const n={id:ct(),name:yr(t.name),content:typeof t.content=="string"?t.content:String(t.content??"")};try{return await En(r=>(r.items.push(n),r)),toastr.success(d`已添加到全局库。`),!0}catch(r){return console.debug(`${D} Failed to add preset prompt to global library`,r),toastr.error(d`添加到全局库失败。`),!1}}async function gA(e){return Ph(e?[e]:[])}async function Ph(e){const t=Array.isArray(e)?e.filter(Boolean):[];if(t.length===0)return toastr.warning(d`没有要添加的全局库条目。`),!1;if(!m?.activeCharacter||!Array.isArray(m.serviceSettings?.prompts)||typeof m.addPrompt!="function")return toastr.warning(d`当前无法添加全局库条目。`),!1;const n=m.getPromptOrderForCharacter?.(m.activeCharacter);if(!Array.isArray(n))return toastr.warning(d`当前预设列表不可用。`),!1;const r=await $n(),o=new Map(r.items.map(c=>[c.id,c])),a=t.map(c=>o.get(c)).filter(Boolean);if(a.length===0)return toastr.warning(d`没有找到要添加的全局库条目。`),!1;const i=await bA();if(!i)return!1;const s=m.tokenHandler?.getCounts?.(),l=i?.type==="group"?a:a.slice().reverse();for(const c of l){const u=th(),p=_A(c.name);m.addPrompt({name:p,role:"system",content:c.content},u),hA(n,{identifier:u,enabled:!0},i),s&&(s[u]=null),m.log?.(`Added global library prompt: ${c.id} -> ${u}.`)}nh();try{return Gn(),await Tn({includeOpenAiPresetSaves:!1}),toastr.success(a.length>1?d`已添加 ${a.length} 条到当前预设。`:d`已添加到当前预设。`),Fn(),!0}catch(c){return console.debug(`${D} Failed to save global library prompt insert`,c),toastr.error(d`添加到当前预设后保存失败。`),!1}}async function bA(){const e=He(),t=Array.isArray(e?.groups)?e.groups.filter(r=>r?.id&&String(r.name||"").trim()):[];if(!t.length)return{type:"top"};const n=await Nn({title:d`添加到当前预设`,fields:[{id:"target",type:"select",label:d`添加位置`,value:"top",options:[{value:"top",label:d`独立在预设最上方`},...t.map(r=>({value:r.id,label:r.name}))]}],confirmText:d`添加`,cancelText:d`取消`});return n?n.target==="top"?{type:"top"}:{type:"group",groupId:n.target}:null}function hA(e,t,n){if(!Array.isArray(e)||!t?.identifier)return;if(n?.type!=="group"||!n.groupId){e.unshift(t);return}const r=He();if(!(Array.isArray(r.groups)&&r.groups.some(s=>s?.id===n.groupId))){e.unshift(t);return}(!r.prompts||typeof r.prompts!="object")&&(r.prompts={});const a=new Set(Object.entries(r.prompts??{}).filter(([,s])=>s?.groupId===n.groupId).map(([s])=>s));let i=0;for(let s=0;s<e.length;s+=1)a.has(e[s]?.identifier)&&(i=s+1);e.splice(i,0,t),r.prompts[t.identifier]={groupId:n.groupId},ft({force:!0})}function _A(e){const t=yr(e),n=new Set((m?.serviceSettings?.prompts??[]).map(r=>r?.name).filter(r=>typeof r=="string"));if(!n.has(t))return t;for(let r=2;r<1e3;r++){const o=`${t} ${r}`;if(!n.has(o))return o}return`${t} ${Date.now()}`}async function yA(e){const t=await Ah(e);if(!t)return toastr.warning(d`没有找到这个全局库条目。`),!1;const n=await Nn({title:d`编辑全局库条目`,fields:[{id:"name",type:"text",label:d`名称`,value:t.name},{id:"content",type:"textarea",label:d`内容`,value:t.content,rows:16}],confirmText:d`保存`,cancelText:d`取消`});if(!n)return!1;const r=yr(n.name),o=typeof n.content=="string"?n.content:String(n.content??"");try{return await En(a=>(a.items=a.items.map(i=>i.id===e?{id:i.id,name:r,content:o}:i),a)),toastr.success(d`已更新全局库条目。`),!0}catch(a){return console.debug(`${D} Failed to edit preset global library item`,a),toastr.error(d`更新全局库条目失败。`),!1}}async function EA(e){if(!await Ah(e))return toastr.warning(d`没有找到这个全局库条目。`),!1;if(!await Nn({title:d`删除全局库条目`,message:d`要删除这个全局库条目吗？`,confirmText:d`删除`,cancelText:d`取消`,danger:!0}))return!1;try{return await En(r=>(r.items=r.items.filter(o=>o.id!==e),r)),toastr.success(d`已删除全局库条目。`),!0}catch(r){return console.debug(`${D} Failed to delete preset global library item`,r),toastr.error(d`删除全局库条目失败。`),!1}}async function SA(){const t=x().state?.globalLibrary;if(!t)return;const n=[],r=new Set,o=(i,s)=>{!i?.id||r.has(i.id)||(r.add(i.id),n.push({id:i.id,groupId:s||null}))};for(const i of Array.isArray(t.ungrouped)?t.ungrouped:[])o(i,null);for(const i of Array.isArray(t.groups)?t.groups:[])for(const s of Array.isArray(i.children)?i.children:[])o(s,i.groupId);const a=new Map(n.map(i=>[i.id,i.groupId]));try{await En(i=>{const s=new Set(i.groups.map(u=>u.id)),l=i.items.slice(),c=[];for(const u of n){const p=l.findIndex(v=>v.id===u.id);if(p===-1)continue;const[b]=l.splice(p,1);b.groupId=u.groupId&&s.has(u.groupId)?u.groupId:null,c.push(b)}for(const u of l){if(a.has(u.id)){const p=a.get(u.id);u.groupId=p&&s.has(p)?p:null}c.push(u)}return i.items=c,i})}catch(i){console.debug(`${D} Failed to persist global library drag`,i),toastr.error(d`移动全局库条目失败。`),$n({force:!0,showLoading:!1})}}async function vA(){const e=await Nn({title:d`新建分组`,fields:[{id:"name",type:"text",label:d`分组名称`,value:""}],confirmText:d`创建`,cancelText:d`取消`});if(!e)return!1;const t=yr(e.name);try{return await En(n=>(n.groups.push({id:ct(),name:t,collapsed:!1}),n)),toastr.success(d`已新建分组。`),!0}catch(n){return console.debug(`${D} Failed to create global library group`,n),toastr.error(d`新建分组失败。`),!1}}async function TA(e){if(!e)return!1;const n=(await $n()).groups.find(a=>a.id===e);if(!n)return toastr.warning(d`没有找到这个分组。`),!1;const r=await Nn({title:d`重命名分组`,fields:[{id:"name",type:"text",label:d`分组名称`,value:n.name}],confirmText:d`保存`,cancelText:d`取消`});if(!r)return!1;const o=yr(r.name);try{return await En(a=>(a.groups=a.groups.map(i=>i.id===e?{...i,name:o}:i),a)),toastr.success(d`已重命名分组。`),!0}catch(a){return console.debug(`${D} Failed to rename global library group`,a),toastr.error(d`重命名分组失败。`),!1}}async function xA(e){if(!e)return!1;if(!(await $n()).groups.find(o=>o.id===e))return toastr.warning(d`没有找到这个分组。`),!1;if(!await Nn({title:d`删除分组`,message:d`删除分组后,组内条目会移到未分组,条目本身不会被删除。确定删除吗？`,confirmText:d`删除`,cancelText:d`取消`,danger:!0}))return!1;try{return await En(o=>(o.groups=o.groups.filter(a=>a.id!==e),o.items=o.items.map(a=>a.groupId===e?{...a,groupId:null}:a),o)),toastr.success(d`已删除分组。`),!0}catch(o){return console.debug(`${D} Failed to delete global library group`,o),toastr.error(d`删除分组失败。`),!1}}function wA(e){if(!e)return;const n=x().state?.globalLibrary?.groups?.find(a=>a.groupId===e),r=n?!n.collapsed:!0;n&&(n.collapsed=r);const o=x();o.globalLibraryGroups=Rs(o.globalLibraryGroups).map(a=>a.id===e?{...a,collapsed:r}:a),ed()}function Ha(e){return(e instanceof Element?e.closest(".bai-bai-preset-global-library-prompt[data-preset-global-library-id]"):null)?.dataset?.presetGlobalLibraryId||null}function wm(e){return(e instanceof Element?e.closest("[data-preset-global-library-group-id]"):null)?.dataset?.presetGlobalLibraryGroupId||null}function CA(e){return(e instanceof Element?e.closest(`${S} li.completion_prompt_manager_prompt[data-pm-identifier]`):null)?.dataset?.pmIdentifier||null}function kA(e){if(!e)return!1;const t=He(),n=t.prompts?.[e]?.groupId;return!!(n&&t.groups?.some(r=>r?.id===n))}function AA(){const e=m.getPromptOrderForCharacter?.(m.activeCharacter)??[],t=e.map(k=>k?.identifier).filter(Boolean),n=Array.isArray(m.serviceSettings?.prompts)?m.serviceSettings.prompts.filter(Boolean):[],r=new Map(n.map(k=>[k.identifier,k])),o=He();nt(o,new Set(t));const a=new Map(o.groups.map(k=>[k.id,k])),i=ha(t),s=new Set(i.promptIds),l=m.tokenHandler?.getCounts?.()??{},c=m.serviceSettings.openai_max_context-m.serviceSettings.openai_max_tokens,u=m.tokenUsage>c*.8,p=e.map((k,P)=>{const E=r.get(k?.identifier);if(!E?.identifier)return null;const K=m.getPromptOrderEntry?.(m.activeCharacter,E.identifier)??k,X=o.prompts?.[E.identifier]?.groupId,B=a.get(X)??null,V=l[E.identifier]??0,{warningClass:ee,warningTitle:I}=Mu({prompt:E,tokens:V,isTokenUsageWarning:u});return{id:E.identifier,type:"prompt",groupId:B?.id??null,prompt:E,orderEntry:K,enabled:K?.enabled!==!1,favorite:s.has(E.identifier),tokens:V,calculatedTokens:V?String(V):"-",warningClass:ee,warningTitle:I,index:P}}).filter(Boolean),b=p.filter(k=>k.favorite).map(k=>({...k,favoriteMirror:!0})),v=[{id:DI,type:"header"},{id:$I,type:"separator"}];b.length>0&&v.push({id:js,type:"favorites",count:b.length,collapsed:!!i.collapsed,children:b});const y=new Map;for(const k of p){if(k.groupId){const P=a.get(k.groupId);let E=y.get(k.groupId);E||(E={id:`group:${k.groupId}`,type:"group",groupId:k.groupId,group:P,name:P?.name??d`未命名分组`,collapsed:!!P?.collapsed,enabled:P?.enabled!==!1,count:0,children:[]},y.set(k.groupId,E),v.push(E)),E.children.push(k),E.count=E.children.length;continue}v.push(k)}return v}function PA(e,t,n){const{h:r}=e;return{name:"BaiBaiPresetPromptListRoot",render(){return[xh(r,t,n.globalLibrary,{outsideList:!0}),RA(r,t,n)]}}}function LA(e,t){const n=m?.configuration?.prefix??"",r=!!t?.rangeSelection?.active,o=vt();return e("li",{class:`${n}prompt_manager_list_head`,key:"header"},[e("span",{class:uy,title:wc},Yb(Ou())),e("span",{class:"bai-bai-preset-list-head-actions"},[r?e("span",{class:"menu_button fa-solid fa-xmark",title:d`取消分组选择`,onClick:a=>{a.preventDefault(),a.stopPropagation(),sc(t)}}):e("span",{class:"menu_button fa-solid fa-folder-plus",title:d`创建预设分组`,onClick:a=>{a.preventDefault(),a.stopPropagation(),Xb(t)}}),e("span",{class:["menu_button","fa-solid",o?"fa-lock":"fa-lock-open","bai-bai-preset-drag-lock-toggle",o?"bai-bai-preset-drag-lock-toggle-active":""],title:o?d`解锁预设拖拽`:d`锁定预设拖拽`,"aria-pressed":o?"true":"false",onClick:a=>{a.preventDefault(),a.stopPropagation(),aP()}})])])}function IA(e){const t=m?.configuration?.prefix??"";return e("li",{class:`${t}prompt_manager_list_separator`,key:"separator"},[e("hr")])}function RA(e,t,n){const r=Ku(),o=vt(),a=!!n?.rangeSelection?.active,i=o||a,s={tag:"ul",id:S.slice(1),class:[n.listClassName,o?"bai-bai-preset-drag-locked":""],list:n.items,group:{name:"bai-bai-preset-prompts",pull:!i,put:i?!1:uk},draggable:BI,filter:Ys,preventOnFilter:!1,sort:!1,disabled:i,animation:0,emptyInsertThreshold:Ta,dragoverBubble:!1,bubbleScroll:!1,forceFallback:!0,fallbackOnBody:!0,fallbackClass:"bai-bai-preset-vue-sortable-fallback",ghostClass:"bai-bai-preset-vue-sortable-ghost",chosenClass:"bai-bai-preset-vue-sortable-chosen",dragClass:"bai-bai-preset-vue-sortable-drag",move:sk,onChoose:()=>{be()},key:`draggable-${n.renderKey}`,onStart:l=>oh(n,l),onEnd:l=>{const c=x();c.lastDragEndedAt=Date.now();const u=Hu(n,l);uo(n,!1),c.draggedPromptId=null,c.draggedItem=null,c.currentDropTargetGroupId=null,c.currentTopLevelDropIndex=null;const p=Gu(n);(u||p)&&ld()}};return Wu(s),r&&(s.handle=r),e(t.VueDraggableNext,s,{default:()=>n.items.map(l=>MA(e,t,l))})}function MA(e,t,n){return n?.type==="header"?LA(e,x().state):n?.type==="separator"?IA(e):n?.type==="global-library"?xh(e,t,n):n?.type==="favorites"?GA(e,n):n?.type==="group"?OA(e,t,n):Yu(e,n,{topLevel:!0})}function OA(e,t,n){const r=Ku(),o=BA(n),a=vt(),i=!!x().state?.rangeSelection?.active,s=a||i,l={tag:"ul",class:["bai-bai-preset-group-list",n.children?.length?"":"bai-bai-preset-group-list-empty"],list:n.children,group:{name:"bai-bai-preset-prompts",pull:!s,put:s?!1:ck},draggable:"li.completion_prompt_manager_prompt_draggable",filter:Ys,preventOnFilter:!1,sort:!1,disabled:s,animation:0,emptyInsertThreshold:Ta,dragoverBubble:!0,bubbleScroll:!1,forceFallback:!0,fallbackOnBody:!0,fallbackClass:"bai-bai-preset-vue-sortable-fallback",ghostClass:"bai-bai-preset-vue-sortable-ghost",chosenClass:"bai-bai-preset-vue-sortable-chosen",dragClass:"bai-bai-preset-vue-sortable-drag",move:lk,onChoose:()=>{be()},onStart:c=>oh(x().state,c),onEnd:c=>{const u=x(),p=u.state;u.lastDragEndedAt=Date.now();const b=Hu(p,c);uo(p,!1),u.draggedPromptId=null,u.draggedItem=null,u.currentDropTargetGroupId=null,u.currentTopLevelDropIndex=null;const v=Gu(p);(b||v)&&ld()}};return Wu(l),r&&(l.handle=r),e("li",{class:[va,"bai-bai-preset-group",n.collapsed?"bai-bai-preset-group-collapsed":"",o?"":"bai-bai-preset-group-powered-off"],"data-preset-group-id":n.groupId,key:n.id},[e("div",{class:"bai-bai-preset-group-header bai-bai-preset-group-drag-surface",onPointerdown:c=>Lk(c,n.groupId),onPointermoveCapture:c=>Ik(c,n.groupId),onPointerup:c=>Rk(c,n.groupId),onPointercancel:()=>Mk(n.groupId),onClick:c=>Ok(c,n.groupId)},[e("span",{class:"bai-bai-preset-group-title",title:n.name},[e("span",{class:["menu_button","bai-bai-preset-group-toggle","fa-solid","fa-chevron-down"],title:n.collapsed?d`展开分组`:d`收起分组`,onClick:c=>{c.preventDefault(),c.stopPropagation(),Nu(n.groupId)}}),e("span",{class:"bai-bai-preset-group-title-content"},[e("strong",null,n.name),e("small",{class:"bai-bai-preset-group-count"},DA(n))])]),e("span",{class:"bai-bai-preset-group-actions"},[e("span",{class:["menu_button","fa-solid","bai-bai-preset-group-action-button","bai-bai-preset-group-enable-toggle",o?"fa-toggle-on":"fa-toggle-off"],title:o?d`关闭分组供电`:d`开启分组供电`,onClick:c=>{c.preventDefault(),c.stopPropagation(),QC(n.groupId)}}),e("span",{class:"menu_button fa-solid fa-pencil bai-bai-preset-group-action-button",title:d`重命名分组`,onClick:c=>{c.preventDefault(),c.stopPropagation(),XC(n.groupId)}}),e("span",{class:"menu_button fa-solid fa-trash bai-bai-preset-group-action-button",title:d`删除分组`,onClick:c=>{c.preventDefault(),c.stopPropagation(),JC(n.groupId)}})])]),Gk(e,t,n,l)])}function BA(e){return e?.enabled!==!1&&e?.group?.enabled!==!1}function DA(e){const t=Array.isArray(e?.children)?e.children:[],n=t.length||Number(e?.count)||0;return`(${t.filter(o=>o?.enabled!==!1&&o?.orderEntry?.enabled!==!1).length}/${n})`}function Yu(e,t,{topLevel:n=!1,groupChild:r=!1,favoriteMirror:o=!1}={}){const a=m?.configuration?.prefix??"",i=t.prompt,s=t.enabled!==!1&&t.orderEntry?.enabled!==!1,l=i.marker?`${a}prompt_manager_marker`:"",c=jb(i,a),u=x(),p=o?[]:YC(u.state,t);return e("li",{class:[`${a}prompt_manager_prompt`,o?"bai-bai-preset-favorite-prompt":`${a}prompt_manager_prompt_draggable`,n?va:"",r?OI:"",s?"":`${a}prompt_manager_prompt_disabled`,l,c,...p],"data-pm-identifier":i.identifier,"data-preset-group-id":t.groupId||"","data-preset-favorite-mirror":o?"true":void 0,key:o?`favorite:${i.identifier}`:i.identifier,onClickCapture:o?void 0:b=>lc(u.state,t,b),onClick:o?void 0:b=>lc(u.state,t,b),onMouseenter:o?void 0:()=>jC(u.state,t)},[o?e("span",{class:"drag-handle ui-sortable-handle bai-bai-preset-favorite-row-marker",title:d`收藏快捷项不可拖拽`},"☰"):e("span",{class:"drag-handle ui-sortable-handle"},"☰"),$A(e,i,a,{allowInspect:!o}),e("span",null,[e("span",{class:"prompt_manager_prompt_controls"},NA(e,i,t,{favoriteMirror:o}))]),e("span",{class:"prompt_manager_prompt_tokens","data-pm-tokens":t.calculatedTokens},[e("span",{class:t.warningClass,title:t.warningTitle}," "),t.calculatedTokens])])}function $A(e,t,n,{allowInspect:r=!0}={}){const o=t.name??"",a=t.marker&&t.injection_position!==De.ABSOLUTE,i=!t.marker&&t.system_prompt&&t.injection_position!==De.ABSOLUTE&&!t.forbid_overrides,s=!t.marker&&t.system_prompt&&t.injection_position!==De.ABSOLUTE&&t.forbid_overrides,l=!t.marker&&!t.system_prompt&&t.injection_position!==De.ABSOLUTE,c=t.injection_position===De.ABSOLUTE,u=Array.isArray(m.overriddenPrompts)&&m.overriddenPrompts.includes(t.identifier),p=t.role==="system"&&(t.marker||t.system_prompt)?"":t.role,v={assistant:{roleIcon:"fa-robot",roleTitle:"Prompt will be sent as Assistant"},user:{roleIcon:"fa-user",roleTitle:"Prompt will be sent as User"}}[p],y=[];a&&y.push(Ao(e,"fa-fw fa-solid fa-thumb-tack","Marker")," "),i&&y.push(Ao(e,"fa-fw fa-solid fa-square-poll-horizontal","Global Prompt")," "),s&&y.push(Ao(e,"fa-fw fa-solid fa-star","Important Prompt")," "),l&&y.push(Ao(e,"fa-fw fa-solid fa-asterisk","Preset Prompt")," "),c&&y.push(Ao(e,"fa-fw fa-solid fa-syringe","In-Chat Injection")," ");const k=m.isPromptInspectionAllowed?.(t);return y.push(r&&k?e("a",{title:o,class:"prompt-manager-inspect-action"},o):e("span",{title:o,class:k?"prompt-manager-inspect-action bai-bai-preset-prompt-name-visual-only":""},o)),v&&y.push(" ",e("span",{"data-role":t.role,class:`fa-xs fa-solid ${v.roleIcon}`,title:v.roleTitle})),c&&y.push(" ",e("small",{class:"prompt-manager-injection-depth"},`@ ${t.injection_depth?.toString?.()??""}`)),u&&y.push(" ",e("small",{class:"fa-solid fa-address-card prompt-manager-overridden",title:"Pulled from a character card"})),e("span",{class:`${n}prompt_manager_prompt_name`,"data-pm-name":o},y)}function Ao(e,t,n){return e("span",{class:t,title:n})}function NA(e,t,n,{favoriteMirror:r=!1}={}){const o=m.isPromptEditAllowed?.(t)??(sy.has(t.identifier)||!t.marker),a=m.isPromptToggleAllowed?.(t)??(t.marker&&!ly.has(t.identifier)?!1:!(m.configuration.toggleDisabled??[]).includes(t.identifier)),i=n.enabled!==!1&&n.orderEntry?.enabled!==!1,s=n.favorite!==!1&&(n.favorite||FA(t.identifier)),l=Be(e,{action:"favorite",icon:"fa-star",text:s?d`取消收藏`:d`收藏`,extraClasses:["bai-bai-preset-prompt-favorite-toggle",s?"bai-bai-preset-prompt-favorite-toggle-active":""],onClick:y=>Pe(y)}),c=s?Be(e,{action:"favorite",icon:"fa-star",text:d`取消收藏`,extraClasses:["bai-bai-preset-prompt-favorite-toggle","bai-bai-preset-prompt-favorite-toggle-active","bai-bai-preset-prompt-favorite-toggle-persistent"],onClick:y=>Pe(y)}):null,u=o?Be(e,{action:"edit",icon:"fa-pencil",text:d`编辑`,onClick:y=>Pe(y)}):null,p=N.presetGroupingEditButtonInMenuEnabled===!0,b=Be(e,{action:"global-library",icon:"fa-database",text:d`添加到全局库`,onClick:y=>Pe(y)}),v=se()&&!n.groupId?Be(e,{action:"group-range",icon:"fa-folder-plus",text:d`以此条目创建分组`,onClick:y=>Pe(y)}):null;return r?[c,u,a?e("span",{title:i?d`关闭条目`:d`开启条目`,class:["menu_button","bai-bai-preset-prompt-icon-button","prompt-manager-toggle-action",i?"fa-solid fa-toggle-on":"fa-solid fa-toggle-off"]}):null].filter(Boolean):[c,e("span",{title:d`更多操作`,class:"menu_button bai-bai-preset-prompt-icon-button bai-bai-preset-prompt-actions-hint fa-solid fa-ellipsis",onClick:y=>{y.preventDefault(),y.stopPropagation(),y.stopImmediatePropagation?.(),eh(y.currentTarget)}}),e("span",{class:"bai-bai-preset-prompt-actions"},[l,v,b,Be(e,{action:"delete",icon:"fa-trash",text:d`删除或移除`,caution:!0,onClick:y=>Pe(y)}),Be(e,{action:"copy",icon:"fa-copy",text:d`复制`,onClick:y=>Pe(y)}),p?u:null].filter(Boolean)),p?null:u,a?e("span",{title:i?d`关闭条目`:d`开启条目`,class:["menu_button","bai-bai-preset-prompt-icon-button","prompt-manager-toggle-action",i?"fa-solid fa-toggle-on":"fa-solid fa-toggle-off"]}):null]}function Qu(e){return!!(e&&(m?.isPromptDeletionAllowed?.(e)??e.system_prompt===!1))}function Be(e,{action:t,icon:n,text:r,caution:o=!1,extraClasses:a=[],onClick:i=null}){return e("span",{class:["menu_button","bai-bai-preset-prompt-action-button","fa-solid",n,o?"caution":"",...a],title:r,"data-preset-prompt-action":t,onClick:i})}function HA({canDelete:e,canEdit:t,canToggle:n,isEnabled:r}){return`
        ${e?'<span title="Remove" class="prompt-manager-detach-action caution fa-solid fa-chain-broken fa-xs"></span>':'<span class="fa-solid"></span>'}
        ${t?'<span title="edit" class="prompt-manager-edit-action fa-solid fa-pencil fa-xs"></span>':'<span class="fa-solid"></span>'}
        ${n?`<span class="prompt-manager-toggle-action ${r?"fa-solid fa-toggle-on":"fa-solid fa-toggle-off"}"></span>`:'<span class="fa-solid"></span>'}
    `}function GA(e,t){const n=Array.isArray(t?.children)?t.children:[],r=x().state,o=rd(r,t);return n.length?e("li",{class:["bai-bai-preset-favorites",t.collapsed?"bai-bai-preset-favorites-collapsed":""],key:js},[e("div",{class:"bai-bai-preset-favorites-header",onClick:a=>{a.preventDefault(),a.stopPropagation(),UA()}},[e("span",{class:"bai-bai-preset-favorites-title"},[e("span",{class:["menu_button","bai-bai-preset-favorites-toggle","fa-solid","fa-chevron-down"],title:t.collapsed?d`展开收藏`:d`收起收藏`}),e("span",{class:"fa-solid fa-star bai-bai-preset-favorites-icon",title:d`收藏`}),e("strong",null,d`收藏`),e("small",{class:"bai-bai-preset-favorites-count"},`(${n.length})`)])]),e("div",{class:"bai-bai-preset-favorites-body","aria-hidden":t.collapsed?"true":"false"},[e("div",{class:"bai-bai-preset-favorites-body-inner"},o?[e("ul",{class:"bai-bai-preset-favorites-list"},n.map(a=>Yu(e,a,{favoriteMirror:!0})))]:[])])]):null}function Xu(e=Ge()){return ha(e).promptIds}function ha(e=Ge()){return Lh(Ls(Ec),e)}function Lh(e,t=Ge()){return{version:1,promptIds:Ih(e,t),collapsed:!!(e&&typeof e=="object"&&!Array.isArray(e)&&e.collapsed)}}function Ih(e,t=Ge()){const n=Array.isArray(e)?e:Array.isArray(e?.promptIds)?e.promptIds:[],r=t instanceof Set?t:new Set((t??[]).filter(Boolean)),o=r.size>0,a=new Set,i=[];for(const s of n){const l=String(s||"");!l||a.has(l)||o&&!r.has(l)||(a.add(l),i.push(l))}return i}function FA(e){return!!(e&&Xu().includes(e))}function zA(e){if(!e)return!1;const t=Xu(),n=t.includes(e)?t.filter(r=>r!==e):[...t,e];return Mh(n)?(Ie(),rt(Ye(),{signature:x().lastStructureSignature}),n.includes(e)):t.includes(e)}function Rh(e){if(!e)return!1;const t=Xu();return t.includes(e)?Mh(t.filter(n=>n!==e)):!1}function Mh(e,{persist:t=!0}={}){return Oh({promptIds:e},{persist:t})}function Oh(e,{persist:t=!0}={}){const n=z?.preset_settings_openai;if(!n)return!1;const r=Ge(),o=ha(r),a={version:1,promptIds:Ih(e?.promptIds,r),collapsed:e?.collapsed===void 0?o.collapsed:!!e.collapsed};return o.collapsed===a.collapsed&&br(o.promptIds,a.promptIds)?!1:(VA(n,a),t&&(Hn(n),fr().catch(i=>{console.debug(`${D} Failed to save preset prompt favorites`,i)})),!0)}function VA(e,t){const n=Lh(t,Ge());z?.preset_settings_openai===e&&(z.extensions=z.extensions&&typeof z.extensions=="object"?z.extensions:{},ki(z.extensions,Ec,n),m?.serviceSettings&&typeof m.serviceSettings=="object"&&(m.serviceSettings.extensions=m.serviceSettings.extensions&&typeof m.serviceSettings.extensions=="object"?m.serviceSettings.extensions:{},ki(m.serviceSettings.extensions,Ec,n)))}function UA(){const e=x(),t=e.state,n=ha(),r=!n.collapsed,o=js;nd(o,!r,()=>{r||(ir(e,o),Bs(t,o,!0));const a=t?.items?.find(i=>i?.type==="favorites");a&&(a.collapsed=r),r&&od(o),Oh({promptIds:n.promptIds,collapsed:r})})}function Bh(){if(MP(),OP(),Yh(),!se()){a_(),JA(),$h(),Hr(),N.presetDragOptimizationEnabled?fd():gd();return}Li(),Vh(),ya(),Hr(),Os()}function Cm(e){const t=getComputedStyle(e),n=t.rowGap&&t.rowGap!=="normal"?t.rowGap:t.gap;return n&&n!=="normal"?n:""}function Cl(e,t){e instanceof HTMLElement&&(t?e.style.setProperty(Kt,t):e.style.removeProperty(Kt))}function WA(e){if(!(e instanceof HTMLElement))return;const t=x();if(t.cachedListGapList===e&&t.cachedListGap!==null){Cl(e,t.cachedListGap);return}if(t.listGapReadFrame!==null||typeof requestAnimationFrame!="function"){if(typeof requestAnimationFrame!="function"){const n=Cm(e);t.cachedListGap=n,t.cachedListGapList=e,Cl(e,n)}return}t.listGapReadFrame=requestAnimationFrame(()=>{if(t.listGapReadFrame=null,!(e instanceof HTMLElement)||!e.isConnected)return;const n=Cm(e);t.cachedListGap=n,t.cachedListGapList=e,Cl(e,n)})}function Dh(){const e=x();e.cachedListGap=null,e.cachedListGapList=null,e.listGapReadFrame!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e.listGapReadFrame),e.listGapReadFrame=null}async function Os(){if(!se())return;const e=x();if(e.enabled=!0,Vh(),Zu(),ya(),Hr(),Fk(),e.installing)return e.installing;e.installing=(async()=>{if(!KA()){dc(250);return}if(e.app&&e.host?.isConnected&&e.root?.isConnected){Ie(),rt(e.root,{signature:e.lastStructureSignature});return}e.app&&Nh(e);const t=Ye()??Fh();if(!(t instanceof HTMLElement)){dc(250);return}const{host:n,listClassName:r}=qA(t),o=await Hh(),a=await jA();e.vue=o,e.vueDraggableNext=a,e.host=n,e.state=o.reactive(rP()),e.state.listClassName=r,e.app=o.createApp(PA(o,a,e.state)),e.app.mount(n),e.root=n.querySelector(S),e.root instanceof HTMLElement&&m&&(m.listElement=e.root),Ie(),rt(e.root,{signature:e.lastStructureSignature}),$n().catch(i=>{console.debug(`${D} Failed to load preset global prompt library`,i)})})();try{await e.installing}catch(t){console.debug(`${D} Failed to install preset Vue prompt list manager`,t),toastr.error(d`Failed to install preset prompt list manager. See console for details.`),$h()}finally{e.installing=null}}function $h({skipRestore:e=!1}={}){const t=x(),n=!e&&!!(t.app||t.host?.isConnected||document.querySelector(`.${Ws}`));t.enabled=!1,clearTimeout(t.syncTimer),t.syncTimer=null,mo(t),Pi(!1),document.body?.classList.remove(Rt),N.presetSwitchOptimizationEnabled||zh(),zk(),Nh(t),t.installing=null,document.getElementById(hc)?.remove(),n&&QA()}function Nh(e=x()){if(mo(e),Pi(!1),cP(e),e.app)try{e.app.unmount()}catch(t){console.debug(`${D} Failed to unmount preset Vue prompt list manager`,t)}e.app=null,e.state=null,e.root=null,e.dragSnapshot=null,Ai(e),e.currentTopLevelDropIndex=null,e.currentDropTargetGroupId=null,e.draggedPromptId=null,ar(e,{suppress:!1}),An(e),e.groupHeaderGesture=null,e.groupHeaderCustomDrag=null,e.lastGroupHeaderToggleAt=0,e.lastGroupHeaderGestureCanceledAt=0,e.lastDragStartedAt=0,e.lastDragEndedAt=0,e.lastSyncSignature="",e.lastStructureSignature="",e.lastRenderPatchSyncCycle=0,e.dragPreparedList=null,e.dragPreparedSignature="",Dh()}function x(){return(!f[Fa]||typeof f[Fa]!="object")&&(f[Fa]={app:null,host:null,root:null,state:null,vue:null,vueDraggableNext:null,modulePromise:null,draggableModulePromise:null,installing:null,syncTimer:null,saveTimer:null,saveFrame:null,pendingOrderSave:!1,dragSnapshot:null,pendingServiceSettingsSave:!1,pendingGroupSettingsSave:!1,pendingChangesSavePromise:null,pendingChangesSaveInFlight:!1,pendingPresetPromptServiceSaves:null,pendingPresetPromptGroupSaves:null,pendingOpenAiPresetSaves:null,presetPromptSaveRevisions:null,nextPresetPromptSaveRevision:0,openAiPresetSaveRequestStates:null,pendingVisibilityTimer:null,pendingVisibilityObserver:null,groupBodyUnmountTimers:null,globalLibraryCollapsed:!0,globalLibraryItems:[],globalLibraryGroups:[],globalLibrarySelecting:!1,globalLibrarySelectedIds:null,globalLibraryLoaded:!1,globalLibraryLoading:!1,globalLibraryError:null,globalLibraryLoadPromise:null,globalLibrarySavePromise:null,globalLibraryBridgePromise:null,dragReadyFeedbackTimer:null,dragReadyFeedbackElement:null,dragReadyFeedbackNotified:!1,currentDropTargetGroupId:null,currentDropTargetElement:null,currentTopLevelDropIndex:null,draggedPromptId:null,draggedItem:null,dragPlacement:null,dragIndicatorElement:null,dragIndicatorRectKey:null,dragPlacementFrame:null,dragLayoutCache:null,dragScrollContainer:null,dragAutoScrollFrame:null,lastDragPoint:null,groupHeaderGesture:null,groupHeaderCustomDrag:null,lastGroupHeaderToggleAt:0,lastGroupHeaderGestureCanceledAt:0,lastDragStartedAt:0,lastDragEndedAt:0,enabled:!1,lastSyncSignature:"",lastStructureSignature:"",lastRenderPatchSyncCycle:0,dragPreparedList:null,dragPreparedSignature:"",cachedListGap:null,cachedListGapList:null,listGapReadFrame:null,bodyHeightAnimations:[],bodyHeightTransitionCycle:0}),f[Fa]}function Er(){const e=x();return!!(e.app&&e.state)}function Ju(){return!!x().state?.dragging}function KA(){return!!(m&&m.serviceSettings&&typeof m.getPromptOrderForCharacter=="function"&&typeof m.removePromptOrderForCharacter=="function"&&typeof m.addPromptOrderForCharacter=="function"&&typeof m.saveServiceSettings=="function"&&(Ye()instanceof HTMLElement||Gh()instanceof HTMLElement))}function dc(e=80){if(!se())return;const t=x();clearTimeout(t.syncTimer),t.syncTimer=setTimeout(()=>{t.syncTimer=null,Os()},e)}async function Hh(){const e=x();return e.modulePromise||(e.modulePromise=tt(()=>import("./vue.runtime.esm-bundler.GI5_MaGP.chunk.js"),__vite__mapDeps([0,1]))),e.modulePromise}async function jA(){const e=x();return e.draggableModulePromise||(e.draggableModulePromise=tt(()=>import("./vue-draggable-next.esm-bundler.DMkWxeed.chunk.js"),__vite__mapDeps([2,1]))),e.draggableModulePromise}function Ye(){const e=x();if(e.root instanceof HTMLElement&&e.root.isConnected)return e.root;if(m?.listElement instanceof HTMLElement&&m.listElement.isConnected)return m.listElement;const t=document.querySelector(S);return t instanceof HTMLElement&&m&&(m.listElement=t),t}function Gh(){const e=x();if(e.host instanceof HTMLElement&&e.host.isConnected)return e.host;const t=document.querySelector(`.${Ws}`);return t instanceof HTMLElement?t:null}function qA(e){const t=document.createElement("div");return t.className=Ws,e.replaceWith(t),{host:t,listClassName:YA(e)}}function YA(e){const t=new Set(String(e?.className||"text_pole").split(/\s+/).filter(Boolean));return t.add("text_pole"),t.add(qt),Array.from(t).join(" ")}function Fh(){const e=x();if(e.root instanceof HTMLElement&&e.root.isConnected)return e.root;const t=Gh();if(t instanceof HTMLElement){const n=t.querySelector(S);if(n instanceof HTMLElement)return e.host=t,e.root=n,m&&(m.listElement=n),n;const r=document.createElement("ul");return r.id=S.slice(1),r.className="text_pole",t.replaceWith(r),e.host=null,e.root=r,m&&(m.listElement=r),r}return Ye()}async function QA(){const e=Fh();if(!(!(e instanceof HTMLElement)||!m||typeof m.renderPromptManagerListItems!="function")){e.replaceChildren();try{await m.renderPromptManagerListItems(),XA()}catch(t){console.debug(`${D} Failed to restore prompt manager list after Vue remove`,t)}}}function XA(){if(se())return;const e=Ye();if(N.presetDragOptimizationEnabled){ya(),c_(),rt(e);return}Li(),u_(),gd()}function Zu(){if(!m||typeof m.renderPromptManagerListItems!="function")return!1;const e=f[No];if(e?.manager===m&&m.renderPromptManagerListItems===e.patched)return!0;if(m.renderPromptManagerListItems.__baiBaiToolkitPresetVueListPatched)return f[No]={manager:m,original:m.renderPromptManagerListItems.__baiBaiToolkitOriginalRenderPromptManagerListItems,patched:m.renderPromptManagerListItems},!0;const t=m.renderPromptManagerListItems,n=async function(...r){if(!se()){if(N.presetSwitchOptimizationEnabled&&Dn()){await Kb(),Qb();return}return t.apply(this,r)}await Os(),Ie();const o=x();o.lastRenderPatchSyncCycle=f.presetPromptManagerFastRenderCycle||0,rt(Ye(),{signature:o.lastStructureSignature})};return n.__baiBaiToolkitPresetVueListPatched=!0,n.__baiBaiToolkitOriginalRenderPromptManagerListItems=t,m.renderPromptManagerListItems=n,f[No]={manager:m,original:t,patched:n},!0}function zh(){const e=f[No];e&&(e.manager?.renderPromptManagerListItems===e.patched&&(e.manager.renderPromptManagerListItems=e.original),delete f[No])}function Vh(){if(!m||typeof m.getPromptCollection!="function"||typeof m.isPromptDisabledForActiveCharacter!="function")return!1;const e=f[Ot];if(e?.manager===m&&m.getPromptCollection===e.patchedGetPromptCollection&&m.isPromptDisabledForActiveCharacter===e.patchedIsPromptDisabledForActiveCharacter)return!0;if(m.getPromptCollection[Ot]&&m.isPromptDisabledForActiveCharacter[Ot])return f[Ot]={manager:m,originalGetPromptCollection:m.getPromptCollection.__baiBaiToolkitOriginalGetPromptCollection,patchedGetPromptCollection:m.getPromptCollection,originalIsPromptDisabledForActiveCharacter:m.isPromptDisabledForActiveCharacter.__baiBaiToolkitOriginalIsPromptDisabledForActiveCharacter,patchedIsPromptDisabledForActiveCharacter:m.isPromptDisabledForActiveCharacter},!0;const t=m.getPromptCollection,n=m.isPromptDisabledForActiveCharacter,r=function(...a){if(!se())return t.apply(this,a);const i=Uh();if(!i.size)return t.apply(this,a);const s=eP(this,i);try{const l=t.apply(this,a);return nP(l,i),l}finally{tP(s)}},o=function(...a){const i=n.apply(this,a);return i||!se()?i:ZA(a[0])};return r[Ot]=!0,r.__baiBaiToolkitOriginalGetPromptCollection=t,o[Ot]=!0,o.__baiBaiToolkitOriginalIsPromptDisabledForActiveCharacter=n,m.getPromptCollection=r,m.isPromptDisabledForActiveCharacter=o,f[Ot]={manager:m,originalGetPromptCollection:t,patchedGetPromptCollection:r,originalIsPromptDisabledForActiveCharacter:n,patchedIsPromptDisabledForActiveCharacter:o},!0}function JA(){const e=f[Ot];e&&(e.manager?.getPromptCollection===e.patchedGetPromptCollection&&(e.manager.getPromptCollection=e.originalGetPromptCollection),e.manager?.isPromptDisabledForActiveCharacter===e.patchedIsPromptDisabledForActiveCharacter&&(e.manager.isPromptDisabledForActiveCharacter=e.originalIsPromptDisabledForActiveCharacter),delete f[Ot])}function Uh(e=Ge()){if(!se()||!e.length)return new Set;const t=new Set(e),n=He();nt(n,t);const r=new Set(n.groups.filter(a=>a?.enabled===!1).map(a=>a.id));if(!r.size)return new Set;const o=new Set;for(const[a,i]of Object.entries(n.prompts??{}))t.size&&!t.has(a)||r.has(i?.groupId)&&o.add(a);return o}function ZA(e){return e?Uh().has(String(e)):!1}function eP(e,t){const n=typeof e?.getPromptOrderForCharacter=="function"?e.getPromptOrderForCharacter(e.activeCharacter):[],r=[];for(const o of n??[])!o?.identifier||!t.has(o.identifier)||o.enabled===!1||(r.push({entry:o,enabled:o.enabled}),o.enabled=!1);return r}function tP(e){for(const t of e??[])t?.entry&&(t.entry.enabled=t.enabled)}function nP(e,t){if(!e||typeof e.add!="function"||e.add[Ot])return e;const n=e.add,r=function(...o){const a=o.filter(i=>!i?.identifier||!t.has(i.identifier));if(a.length)return n.apply(this,a)};return r[Ot]=!0,r.__baiBaiToolkitOriginalPromptCollectionAdd=n,e.add=r,e}function rP(){return{globalLibrary:null,items:[],listClassName:`text_pole ${qt}`,renderKey:0,reclaimKey:0,mountedGroupBodies:{},dragging:!1,rangeSelection:{active:!1,name:"",startId:null,endId:null,hoverId:null}}}function Ie(){const e=x();if(!e.state)return!1;uP(),dP(),sd({persist:!1});const{renderSignature:t,structureSignature:n}=Wh(e);return t&&e.lastSyncSignature===t?(ju(e.state),e.lastStructureSignature=n,!0):(Kk(e.state),e.state.items=AA(),iP(e.state),e.lastSyncSignature=t,e.lastStructureSignature=n,!0)}function ed(){const e=x();if(!e.state)return!1;const{renderSignature:t,structureSignature:n}=Wh(e);return e.lastSyncSignature=t,e.lastStructureSignature=n,!0}function oP(){const e=x();e.state&&(e.lastSyncSignature="",Ie())}function Wh(e=x()){const t=m?.getPromptOrderForCharacter?.(m.activeCharacter)??[],n=Array.isArray(m?.serviceSettings?.prompts)?m.serviceSettings.prompts.filter(Boolean):[],r=new Map(n.map(y=>[y.identifier,y])),o=He(),a=ha(t.map(y=>y?.identifier).filter(Boolean)),i=m?.configuration?.toggleDisabled??[],s=Array.isArray(m?.overriddenPrompts)?m.overriddenPrompts:[],l=t.map((y,k)=>{const P=r.get(y?.identifier);return[k,y?.identifier||"",y?.enabled===!1?0:1,P?.name||"",P?.role||"",P?.marker?1:0,P?.system_prompt?1:0,P?.forbid_overrides?1:0,P?.injection_position??"",P?.injection_depth??""].join(":")}),c=JSON.stringify({groups:o.groups??[],prompts:o.prompts??{}}),u=JSON.stringify(a),p=JSON.stringify({collapsed:!!e.globalLibraryCollapsed,loading:!!e.globalLibraryLoading,loaded:!!e.globalLibraryLoaded,error:e.globalLibraryError?String(e.globalLibraryError):"",groups:Rs(e.globalLibraryGroups).map(y=>[y.id||"",y.name||"",y.collapsed?1:0]),items:ba(e.globalLibraryItems).map(y=>[y.id||"",y.name||"",y.groupId||"",qr(String(y.content??""))])}),b=qr([l.join("|"),c,u,p,Array.from(i).join("|"),s.join("|")].join("||"));return{renderSignature:b,structureSignature:b}}function Kh(){const e=x();return e.state?(e.state.renderKey+=1,!0):!1}function vt(){return N.presetVueDragLocked===!0}function aP(){const e=!vt();N.presetVueDragLocked=e,e&&(Ln(),Qt({cancelled:!0}),ar(x()),uo(x().state,!1),x().dragSnapshot=null),Kh(),typeof Rn=="function"&&Rn()}function iP(e){if(!e||!Array.isArray(e.items))return;(!e.mountedGroupBodies||typeof e.mountedGroupBodies!="object")&&(e.mountedGroupBodies={});const t=x(),n=new Set,r=[e.globalLibrary,...e.items].filter(Boolean);for(const o of r){const a=td(o);if(a){if(n.add(a),!o.collapsed){ir(t,a),e.mountedGroupBodies[a]=!0;continue}lP(t,a)||delete e.mountedGroupBodies[a]}}for(const o of Object.keys(e.mountedGroupBodies))n.has(o)||(delete e.mountedGroupBodies[o],ir(t,o))}function td(e){return e?.type==="group"&&e.groupId?e.groupId:e?.type==="favorites"?js:e?.type==="global-library"?Ks:null}function sP(e=x()){return e.groupBodyUnmountTimers instanceof Map||(e.groupBodyUnmountTimers=new Map),e.groupBodyUnmountTimers}function lP(e,t){return e.groupBodyUnmountTimers instanceof Map&&e.groupBodyUnmountTimers.has(t)}function ir(e,t){if(!(e.groupBodyUnmountTimers instanceof Map))return;const n=e.groupBodyUnmountTimers.get(t);n&&clearTimeout(n),e.groupBodyUnmountTimers.delete(t)}function cP(e=x()){if(e.groupBodyUnmountTimers instanceof Map){for(const t of e.groupBodyUnmountTimers.values())clearTimeout(t);e.groupBodyUnmountTimers.clear()}}function Bs(e,t,n){if(!(!e||!t)){if((!e.mountedGroupBodies||typeof e.mountedGroupBodies!="object")&&(e.mountedGroupBodies={}),n){e.mountedGroupBodies[t]=!0;return}delete e.mountedGroupBodies[t]}}function nd(e,t,n){if(typeof n=="function")return n()}function rd(e,t){const n=td(t);return n?t.collapsed?!!e?.mountedGroupBodies?.[n]:!0:!1}function od(e){const t=x(),n=t.state;if(!n||!e)return;ir(t,e);const r=setTimeout(()=>{ir(t,e);const o=[n.globalLibrary,...n.items??[]].find(a=>td(a)===e);(!o||o.collapsed)&&Bs(n,e,!1)},Bo);sP(t).set(e,r)}function uP(){if(!Ea())return!1;const e=m.getPromptOrderForCharacter(m.activeCharacter)??[],t=new Set,n=[];let r=!1;for(const o of e){const a=o?.identifier;if(!a){r=!0;continue}if(t.has(a)){r=!0;continue}t.add(a),n.push(o)}return r?(m.removePromptOrderForCharacter(m.activeCharacter),m.addPromptOrderForCharacter(m.activeCharacter,n),Gn(),!0):!1}function dP(){if(!Ea())return!1;const e=He(),t=new Set((m.getPromptOrderForCharacter(m.activeCharacter)??[]).map(o=>o?.identifier).filter(Boolean)),n=JSON.stringify({groups:e.groups,prompts:e.prompts});nt(e,t);const r=JSON.stringify({groups:e.groups,prompts:e.prompts});return n===r?!1:(ft(),!0)}function He(){const e=Ds();if(f.presetPromptGroupRuntimePresetName!==e||!f.presetPromptGroupRuntimeState||typeof f.presetPromptGroupRuntimeState!="object"){const t=pP();f.presetPromptGroupRuntimePresetName=e,f.presetPromptGroupRuntimeState=t.state,t.shouldPersist&&ft({})}return f.presetPromptGroupRuntimeState}function Ds(){return z?.preset_settings_openai||"current"}function km(){return{groups:[],prompts:{}}}function pP(){const e=Ge(),t=mP(e);if(t)return{state:t,shouldPersist:!1};const n=fP(e);if(n.length>1)return hP(n,e),{state:km(),shouldPersist:!1};const r=n[0];return r?{state:r.state,shouldPersist:!0}:{state:km(),shouldPersist:!1}}function Pn(e){return!!(Array.isArray(e?.groups)&&e.groups.length>0&&e?.prompts&&typeof e.prompts=="object"&&Object.keys(e.prompts).length>0)}function nt(e,t=null){const n=new Set;e.groups=e.groups.filter(a=>a&&typeof a=="object"&&a.id).map((a,i)=>({id:String(a.id),name:String(a.name||d`未命名分组`),order:Number.isFinite(Number(a.order))?Number(a.order):i,collapsed:!!a.collapsed,enabled:a.enabled!==!1})).sort((a,i)=>a.order-i.order).filter(a=>n.has(a.id)?!1:(n.add(a.id),!0)).map((a,i)=>({...a,order:i}));const r=new Set(e.groups.map(a=>a.id)),o={};for(const[a,i]of Object.entries(e.prompts??{})){const s=i?.groupId;!s||!r.has(s)||t instanceof Set&&!t.has(a)||(o[a]={groupId:s})}e.prompts=o}function mP(e=Ge()){const t=Ls(Zr);if(!t||typeof t!="object")return null;const n={groups:Array.isArray(t.groups)?structuredClone(t.groups):[],prompts:t.prompts&&typeof t.prompts=="object"?structuredClone(t.prompts):{}};return nt(n,new Set(e)),Pn(n)?n:null}function fP(e=Ge()){const t=Ls(GI);return!t||!e.length?[]:[{formatName:d`起止范围格式`,state:gP(t,e)},{formatName:d`成员列表格式`,state:bP(t,e)}].filter(n=>Pn(n.state))}function jh(e){if(Array.isArray(e))return e;if(!e||typeof e!="object")return[];for(const t of["groups","entries","entryGroups","items"])if(Array.isArray(e[t]))return e[t];return[]}function gP(e,t=Ge()){const n=jh(e);if(!n.length||!t.length)return null;const r=new Set(t),o={groups:[],prompts:{}},a=new Set;for(const[i,s]of n.entries()){if(!s||typeof s!="object")continue;const l=t.indexOf(s.startIdentifier),c=t.indexOf(s.endIdentifier);if(l<0||c<0)continue;const u=String(s.mode||"inclusive").toLowerCase()==="exclusive",p=Math.min(l,c)+(u?1:0),b=Math.max(l,c)-(u?1:0);if(p>b)continue;const v=String(s.id||ct());o.groups.push({id:v,name:String(s.name||d`未命名分组`),order:i,collapsed:!0,enabled:!0});for(const y of t.slice(p,b+1))!r.has(y)||a.has(y)||(a.add(y),o.prompts[y]={groupId:v})}return nt(o,r),Pn(o)?o:null}function bP(e,t=Ge()){const n=jh(e);if(!n.length||!t.length)return null;const r=new Set(t),o={groups:[],prompts:{}},a=new Set;for(const[i,s]of n.entries()){if(!s||typeof s!="object"||!Array.isArray(s.memberIdentifiers))continue;const l=s.memberIdentifiers.map(p=>String(p||"")).filter(p=>r.has(p)&&!a.has(p));if(!l.length)continue;const c=new Set(l),u=String(s.id||ct());o.groups.push({id:u,name:String(s.name||d`未命名分组`),order:i,collapsed:!0,enabled:!0});for(const p of t)c.has(p)&&(a.add(p),o.prompts[p]={groupId:u})}return nt(o,r),Pn(o)?o:null}function hP(e,t=Ge()){const n=Ds(),r=_P(n,e,t);return f.presetPromptGroupCompatChoicePendingKey===r||f.presetPromptGroupCompatChoiceDismissedKey===r?!1:(f.presetPromptGroupCompatChoicePendingKey=r,yP(e,t,n,r),!0)}function _P(e,t,n){const r=t.map(o=>{const a=o.state.groups.map(i=>i.name).join(",");return`${o.formatName}:${o.state.groups.length}:${Object.keys(o.state.prompts).length}:${a}`}).join("|");return`${e}:${n.length}:${r}`}async function yP(e,t,n,r){try{const o=await fe(EP(e),ge.TEXT,"",{okButton:!1,cancelButton:d`取消`,allowVerticalScrolling:!0,wider:!0,customButtons:e.map((s,l)=>({text:d`使用分组${qh(l)}`,result:rf+l,tooltip:s.formatName}))}),a=Number(o)-rf,i=e[a];if(!i){f.presetPromptGroupCompatChoiceDismissedKey=r;return}if(Ds()!==n)return;f.presetPromptGroupRuntimePresetName=n,f.presetPromptGroupRuntimeState=i.state,nt(f.presetPromptGroupRuntimeState,new Set(t)),ft({immediate:!0}),Ie()}finally{f.presetPromptGroupCompatChoicePendingKey===r&&delete f.presetPromptGroupCompatChoicePendingKey}}function EP(e){const t=e.map((n,r)=>{const o=qh(r),a=n.state.groups??[],i=a.map(u=>u.name).filter(Boolean),s=i.slice(0,6).map(u=>Lr(u)),l=i.length>s.length?"...":"",c=[...s,l].filter(Boolean).join("、")||d`无`;return`<p><strong>${d`分组`}${o}</strong>${d`有${a.length}个分组`}：${c}</p>`}).join("");return`
        <div class="bai-bai-preset-group-import-choice">
            <p>${d`检测到当前预设同时包含两种可兼容的分组格式，请选择要导入的分组。`}</p>
            ${t}
        </div>
    `}function qh(e){return String.fromCharCode(65+e)}function Ge(){return(m?.getPromptOrderForCharacter?.(m.activeCharacter)??[]).map(e=>e?.identifier).filter(Boolean)}function ft({force:e=!1}={}){const t=ad(),n=sd({force:e,persist:!1,payload:t});return n&&zP(t),n}function ad(){const e=z?.preset_settings_openai;if(!e)return null;const t=Ge();if(!t.length)return null;const n=SP(t),r=Ls(Zr);if(!Pn(n)&&!r)return null;const o=JSON.stringify(n);return{presetName:e,groupState:n,syncKey:`${e}:${o}`}}function id(e){e&&z?.preset_settings_openai===e.presetName&&(z.extensions=z.extensions&&typeof z.extensions=="object"?z.extensions:{},ki(z.extensions,Zr,e.groupState),m?.serviceSettings&&typeof m.serviceSettings=="object"&&(m.serviceSettings.extensions=m.serviceSettings.extensions&&typeof m.serviceSettings.extensions=="object"?m.serviceSettings.extensions:{},ki(m.serviceSettings.extensions,Zr,e.groupState)))}function sd({force:e=!1,persist:t=!0,payload:n=null}={}){return n||=ad(),!n||!e&&t&&f.presetPromptGroupExtensionSyncKey===n.syncKey?!1:(id(n),t&&(f.presetPromptGroupExtensionSyncKey=n.syncKey),!0)}function SP(e=Ge()){const t=He(),n={version:1,groups:structuredClone(t.groups??[]),prompts:structuredClone(t.prompts??{})};return nt(n,new Set(e)),n}function vP(){if(f[Wm])return;const e=t=>{t?.apiId!=="openai"||!t?.name||$s(t.name)};f[Wm]=e,M.on(w.PRESET_DELETED,e)}function TP(){if(f[Km])return;const e=t=>{const n=t?.presetName;n&&(RP(t?.data),$s(n))};f[Km]=e,M.on(w.OAI_PRESET_IMPORT_READY,e)}function Yh(){if(f[jm]||!w.PRESET_RENAMED_BEFORE||!w.PRESET_RENAMED)return;const e=n=>xP(n),t=n=>{kP(n)};f[jm]={beforeHandler:e,renamedHandler:t},M.on(w.PRESET_RENAMED_BEFORE,e),M.on(w.PRESET_RENAMED,t)}async function xP(e){if(e?.apiId!=="openai"||!e.oldName||!e.newName)return;const t=MR(e.oldName,e.newName);try{if(await t,!se())return;await cd(),f.presetPromptGroupRuntimePresetName===e.oldName&&sd({force:!0,persist:!1}),f.renamedPresetGroupStash=wP(e.oldName,e.newName)}catch(n){console.debug(`${D} Failed to prepare preset prompt groups before preset rename`,n)}}function wP(e,t){const n=Ci(z?.extensions,Zr),r=Pn(n)?n:f.presetPromptGroupRuntimePresetName===e?f.presetPromptGroupRuntimeState:null;return Pn(r)?{newName:t,groupState:structuredClone(r)}:null}function CP(e){const t=f.renamedPresetGroupStash;if(delete f.renamedPresetGroupStash,!t||t.newName!==e||!Pn(t.groupState))return!1;const n=structuredClone(t.groupState),r={presetName:e,groupState:n,syncKey:`${e}:${JSON.stringify(n)}`};return id(r),f.presetPromptGroupExtensionSyncKey=r.syncKey,f.presetPromptGroupRuntimePresetName=e,f.presetPromptGroupRuntimeState=structuredClone(n),Hn(e),!0}function kP(e){e?.apiId!=="openai"||!e.oldName||!e.newName||(AP(e.oldName,e.newName),OR(e.oldName,e.newName),se()&&(f.presetPromptGroupRuntimePresetName===e.oldName?f.presetPromptGroupRuntimePresetName=e.newName:f.presetPromptGroupRuntimePresetName===e.newName&&$s(e.newName),delete f.presetPromptGroupExtensionSyncKey,CP(e.newName),Er()?(Ie(),rt(Ye(),{signature:x().lastStructureSignature})):dc(0)))}function AP(e,t){const n=x();Am(fn(n),e,t),Am(gn(n),e,t),PP(dn(n),e,t),LP(ud(n),e,t),IP(pd(n),e,t)}function Am(e,t,n){if(!(e instanceof Map)||!e.has(t))return!1;const r=e.get(t);if(e.delete(t),!r||typeof r!="object")return!1;const o={...r,presetName:n};return o.groupState&&(o.syncKey=`${n}:${JSON.stringify(o.groupState)}`),e.set(n,o),!0}function PP(e,t,n){return!(e instanceof Set)||!e.has(t)?!1:(e.delete(t),e.add(n),!0)}function LP(e,t,n){if(!(e instanceof Map)||!e.has(t))return!1;const r=e.get(t);return e.delete(t),e.set(n,Math.max(Number(e.get(n))||0,Number(r)||0)),!0}function IP(e,t,n){if(!(e instanceof Map)||!e.has(t))return!1;const r=e.get(t),o=e.get(n);if(e.delete(t),!r||typeof r!="object")return!1;if(r.presetName=n,!o||o===r)return e.set(n,r),!0;const a=Number(r.requestedRevision),i=Number(o.requestedRevision);return r.requestedRevision!==null&&(o.requestedRevision===null||a>=i)&&(o.requestedRevision=r.requestedRevision,o.requestedSnapshot=r.requestedSnapshot),o.presetName=n,!o.promise&&r.promise?e.set(n,r):e.set(n,o),!0}function RP(e){const t=Ci(e?.extensions,Zr)?.groups;if(!Array.isArray(t))return!1;for(const n of t)n&&typeof n=="object"&&(n.collapsed=!0);return!0}function $s(e=null){e&&f.presetPromptGroupRuntimePresetName!==e||(delete f.presetPromptGroupRuntimePresetName,delete f.presetPromptGroupRuntimeState)}function MP(){if(f[tf])return;const e=t=>{const n=t.target instanceof Element?t.target.closest(eR):null;if(n instanceof HTMLElement){if(f.presetExportPendingChangesBypass){f.presetExportPendingChangesBypass=!1;return}Zh()&&(t.preventDefault(),t.stopImmediatePropagation(),HP(n))}};f[tf]=e,document.addEventListener("click",e,!0)}function OP(){if(f[ef])return;const e=t=>{if((t.target instanceof Element?t.target.closest(ZI):null)instanceof HTMLElement){if(sf()||RR()){t.preventDefault(),t.stopImmediatePropagation(),IR(),sf()?BR():t_(z?.preset_settings_openai);return}if(!Zh()){$P(z?.preset_settings_openai);return}t.preventDefault(),t.stopImmediatePropagation(),BP()}};f[ef]=e,document.addEventListener("click",e,!0)}async function BP(){const e=z?.preset_settings_openai;if(!e)return;const t=GP(e),n=_a(e);if(Ns(),t.requestedRevision=Math.max(t.requestedRevision??-1,n),t.requestedSnapshot=Hs(z),t.promise&&(await t.promise.catch(()=>{}),t.promise||t.requestedRevision===null))return;const r=DP(t);t.promise=r;try{await r}catch(o){jt()&&Sr(),console.debug(`${D} Failed to save pending preset prompt changes`,o),toastr.error(d`Failed to save preset prompt changes. See console for details.`)}finally{if(t.promise===r&&(t.promise=null),!t.promise&&t.requestedRevision===null&&t.requestedSnapshot===null){const o=pd();for(const[a,i]of o.entries())i===t&&o.delete(a)}}}async function DP(e){let t=!1;for(;e.requestedRevision!==null;){const n=e.requestedRevision,r=e.requestedSnapshot;e.requestedRevision=null,e.requestedSnapshot=null;let o=e.presetName;await VP(o),o=e.presetName;let a=n,i=r;if(z?.preset_settings_openai===o&&(Ns(),a=_a(o),i=Hs(z)),!i)throw new Error(`Unable to capture OpenAI preset snapshot for ${o}`);await Qh(o,i,{revision:a}),n_(e.presetName,a),e.requestedRevision!==null&&e.requestedRevision<=a&&(e.requestedRevision=null,e.requestedSnapshot=null),await fr(),t=!0}t&&toastr.success(d`Preset updated`)}async function $P(e=z?.preset_settings_openai,t=JL(e)){try{await t,NP(e),await fr()}catch(n){console.debug(`${D} Failed to save settings after preset save`,n)}}function Ns(){const e=m?.serviceSettings;if(!e||e===z)return!1;let t=!1;return Array.isArray(e.prompts)&&(z.prompts=e.prompts,t=!0),Array.isArray(e.prompt_order)&&(z.prompt_order=e.prompt_order,t=!0),e.extensions&&typeof e.extensions=="object"&&(z.extensions=e.extensions,t=!0),t}function Hs(e=z){const t={};for(const[n,[,r]]of Object.entries(fv??{}))t[n]=e?.[r];return structuredClone(t)}function Qh(e,t,{revision:n=null}={}){const r=hn();if(r&&(e===r.oldName||e===r.newName)){const o=r.deferredSaveTail.catch(()=>{}).then(async()=>{const a=await r.completionPromise;Number.isFinite(n)&&Number.isFinite(r.finalSavedRevision)&&n<=r.finalSavedRevision||await Pm(a,t)});return r.deferredSaveTail=o,o}return Pm(e,t)}async function Pm(e,t){const n=gr("openai");if(n&&typeof n.savePreset=="function")await n.savePreset(e,t,{skipUpdate:!0});else if(!(await fetch("/api/presets/save",{method:"POST",headers:me(),body:JSON.stringify({apiId:"openai",name:e,preset:t})})).ok)throw new Error("OpenAI preset update request failed");Xh(e,t)}function Xh(e,t){if(!e||!t||!Array.isArray(Co))return!1;const n=Ja?.[e];return n==null?!1:(Co[n]&&typeof Co[n]=="object"?Object.assign(Co[n],t):Co[n]=t,!0)}function NP(e=z?.preset_settings_openai){Ns();const t=Hs(z);return Xh(e,t)}async function HP(e){if(!f.presetExportPendingChangesPromptOpen){f.presetExportPendingChangesPromptOpen=!0;try{if(!await fe(d`当前预设有未保存的更改。要先保存后再导出吗？`,ge.CONFIRM))return;await Tn({includeOpenAiPresetSaves:!0}),f.presetExportPendingChangesBypass=!0,e.click()}catch(t){console.debug(`${D} Failed to save pending preset changes before export`,t),toastr.error(d`Failed to save preset changes before export. See console for details.`)}finally{f.presetExportPendingChangesPromptOpen=!1}}}function ld(){const e=x();mo(e),Promise.resolve(i_()).catch(t=>{e.pendingOrderSave=!0,md(),console.debug(`${D} Failed to sync preset prompt order after drop`,t)})}function mo(e=x()){e.saveFrame!==null&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e.saveFrame),e.saveTimer!==null&&clearTimeout(e.saveTimer),e.saveFrame=null,e.saveTimer=null,e.pendingOrderSave=!1}async function cd(){const e=x();if(!Jh(e))return!1;mo(e);try{return await i_(),!0}catch(t){throw e.pendingOrderSave=!0,t}}function Jh(e=x()){return!!(e.pendingOrderSave||e.saveFrame!==null||e.saveTimer!==null)}function fn(e=x()){return e.pendingPresetPromptServiceSaves instanceof Map||(e.pendingPresetPromptServiceSaves=new Map),e.pendingPresetPromptServiceSaves}function gn(e=x()){return e.pendingPresetPromptGroupSaves instanceof Map||(e.pendingPresetPromptGroupSaves=new Map),e.pendingPresetPromptGroupSaves}function dn(e=x()){return e.pendingOpenAiPresetSaves instanceof Set||(e.pendingOpenAiPresetSaves=new Set),e.pendingOpenAiPresetSaves}function ud(e=x()){return e.presetPromptSaveRevisions instanceof Map||(e.presetPromptSaveRevisions=new Map),e.presetPromptSaveRevisions}function _a(e,t=x()){return e?ud(t).get(e)??0:0}function dd(e,t=x()){return e?(t.nextPresetPromptSaveRevision=Number(t.nextPresetPromptSaveRevision)||0,t.nextPresetPromptSaveRevision+=1,ud(t).set(e,t.nextPresetPromptSaveRevision),t.nextPresetPromptSaveRevision):0}function pd(e=x()){return e.openAiPresetSaveRequestStates instanceof Map||(e.openAiPresetSaveRequestStates=new Map),e.openAiPresetSaveRequestStates}function GP(e,t=x()){const n=pd(t);e=DR(e),n.has(e)||n.set(e,{presetName:e,requestedRevision:null,requestedSnapshot:null,promise:null});const r=n.get(e);return r.presetName=e,r}function Hn(e=z?.preset_settings_openai){e&&(dd(e),dn().add(e))}function Gn(){const e=x(),t=FP();t&&(dd(t.presetName,e),fn(e).set(t.presetName,t),e.pendingServiceSettingsSave=!0,md())}function FP(){const e=Ds(),t=m?.serviceSettings?.prompt_order??z?.prompt_order;return t?{presetName:e,promptOrder:structuredClone(t)}:null}function zP(e=null){const t=x();e||=ad(),e&&(dd(e.presetName,t),gn(t).set(e.presetName,{presetName:e.presetName,groupState:structuredClone(e.groupState),syncKey:e.syncKey}),t.pendingGroupSettingsSave=!0,md())}function md(){UP(),Sr(0)}function Zh(){const e=x();return!!(jt(e)||dn(e).size>0)}function jt(e=x()){return!!(Jh(e)||e.pendingServiceSettingsSave||e.pendingGroupSettingsSave||fn(e).size>0||gn(e).size>0)}function e_(){const e=x();mo(e),e.pendingServiceSettingsSave=!1,e.pendingGroupSettingsSave=!1,fn(e).clear(),gn(e).clear(),dn(e).clear(),Jr()}function t_(e){if(!e){e_();return}const t=x();mo(t);const n=fn(t),r=gn(t),o=dn(t),a=r.get(e);n.delete(e),r.delete(e),o.delete(e),a?.syncKey&&z?.preset_settings_openai===e&&(f.presetPromptGroupExtensionSyncKey=a.syncKey),t.pendingServiceSettingsSave=n.size>0,t.pendingGroupSettingsSave=r.size>0,jt()?Sr():Jr()}function n_(e,t){if(!e||_a(e)!==t)return!1;const n=x(),r=fn(n),o=gn(n),a=dn(n),i=o.get(e);return r.delete(e),o.delete(e),a.delete(e),i?.syncKey&&z?.preset_settings_openai===e&&(f.presetPromptGroupExtensionSyncKey=i.syncKey),n.pendingServiceSettingsSave=r.size>0,n.pendingGroupSettingsSave=o.size>0,jt()?Sr():Jr(),!0}async function VP(e=z?.preset_settings_openai){const t=x();t.pendingChangesSavePromise&&await t.pendingChangesSavePromise,await cd(),e&&(r_(fn(t).get(e)),o_(gn(t).get(e)))}function r_(e){if(!e?.presetName||!e.promptOrder)return!1;const t=structuredClone(e.promptOrder);return z?.preset_settings_openai===e.presetName&&(z.prompt_order=t,m&&(m.serviceSettings=z)),!0}function o_(e){return!e?.presetName||!e.groupState?!1:(id({presetName:e.presetName,groupState:structuredClone(e.groupState),syncKey:e.syncKey||`${e.presetName}:${JSON.stringify(e.groupState)}`}),!0)}function UP(){if(f[nf])return;const e=a=>{const i=x();if(!(!jt(i)&&!i.pendingChangesSaveInFlight&&!i.pendingChangesSavePromise))return Tn({includeOpenAiPresetSaves:!1}).catch(s=>{console.debug(`${D} Failed to flush preset prompt changes before unload`,s)}),a.preventDefault(),a.returnValue="",""},t=a=>{a?.type==="visibilitychange"&&document.visibilityState!=="hidden"||jt()&&Tn({includeOpenAiPresetSaves:!1}).catch(i=>{console.debug(`${D} Failed to flush preset prompt changes during page lifecycle event`,i)})};let n=0;const r=a=>{ti(a.target)?n=Date.now():n=0},o=a=>{!jt()||!ti(a.target)||ti(a.relatedTarget)||setTimeout(()=>{jt()&&(XP()||n&&Date.now()-n<300||Tn({includeOpenAiPresetSaves:!1}).catch(i=>{console.debug(`${D} Failed to flush preset prompt changes after left panel focusout`,i)}))},UI)};f[nf]={beforeUnloadHandler:e,pageLifecycleHandler:t,leftNavPointerDownHandler:r,leftNavFocusOutHandler:o},window.addEventListener("beforeunload",e),window.addEventListener("pagehide",t),document.addEventListener("visibilitychange",t),document.addEventListener("pointerdown",r,!0),document.addEventListener("focusout",o,!0)}function Sr(e=zI){const t=x();WP(),clearTimeout(t.pendingVisibilityTimer),t.pendingVisibilityTimer=setTimeout(()=>{t.pendingVisibilityTimer=null,jP()},e)}function WP(){const e=x();if(e.pendingVisibilityObserver||typeof MutationObserver!="function")return;const t=new MutationObserver(()=>{Sr()});e.pendingVisibilityObserver=t;for(const n of KP())t.observe(n,{attributes:!0,attributeFilter:["class","style","hidden","aria-hidden"]})}function Jr(){const e=x();clearTimeout(e.pendingVisibilityTimer),e.pendingVisibilityTimer=null,e.pendingVisibilityObserver&&(e.pendingVisibilityObserver.disconnect(),e.pendingVisibilityObserver=null)}function KP(){const e=[],t=new Set,n=o=>{o instanceof HTMLElement&&!t.has(o)&&(t.add(o),e.push(o))},r=m?.containerElement instanceof HTMLElement?m.containerElement:document.querySelector("#completion_prompt_manager");if(n(r),r instanceof HTMLElement)for(let o=r.parentElement;o&&o!==document.body;o=o.parentElement)n(o);return e}function jP(){if(!jt()){Jr();return}if(!qP()){a_();return}Sr(VI)}function qP(){const e=m?.containerElement instanceof HTMLElement?m.containerElement:document.querySelector("#completion_prompt_manager");return YP(e)}function YP(e){if(!(e instanceof HTMLElement)||!e.isConnected||e.getClientRects().length===0)return!1;const t=getComputedStyle(e);return t.display!=="none"&&t.visibility!=="hidden"}function QP(){return document.querySelector(Od)}function ti(e){const t=QP();return!!(t instanceof HTMLElement&&e instanceof Node&&t.contains(e))}function XP(){return ti(document.activeElement)}function a_(){Tn({includeOpenAiPresetSaves:!1}).catch(e=>{console.debug(`${D} Failed to flush preset prompt changes`,e),toastr.error(d`Failed to save preset prompt changes. See console for details.`)})}async function Tn({includeOpenAiPresetSaves:e=!1}={}){const t=x();if(t.pendingChangesSavePromise)return t.pendingChangesSavePromise;await cd();const n=Array.from(fn(t).values()),r=Array.from(gn(t).values()),o=e?Array.from(dn(t).values()):[],a=n.length>0||!!t.pendingServiceSettingsSave,i=r.length>0||!!t.pendingGroupSettingsSave,s=o.length>0;if(!a&&!i&&!s){Jr();return}t.pendingChangesSaveInFlight=!0;const l=(async()=>{try{t.pendingServiceSettingsSave=!1,t.pendingGroupSettingsSave=!1,t.pendingPresetPromptServiceSaves=new Map,t.pendingPresetPromptGroupSaves=new Map,e&&(t.pendingOpenAiPresetSaves=new Set);const c=new Set(o);let u=!1;for(const p of n)r_(p)&&(c.add(p.presetName),u=!0);for(const p of r)o_(p)&&(c.add(p.presetName),u=!0);if((a||i)&&!c.size&&(c.add(z?.preset_settings_openai),u=!0),e)for(const p of c)await JP(p);else if(u){for(const p of c)p&&dn(t).add(p);await fr()}}catch(c){t.pendingServiceSettingsSave=t.pendingServiceSettingsSave||a,t.pendingGroupSettingsSave=t.pendingGroupSettingsSave||i;for(const u of n)fn(t).set(u.presetName,u);for(const u of r)gn(t).set(u.presetName,u);if(e)for(const u of o)dn(t).add(u);throw c}finally{t.pendingChangesSaveInFlight=!1}})();t.pendingChangesSavePromise=l;try{await l}finally{t.pendingChangesSavePromise===l&&(t.pendingChangesSavePromise=null),jt()?Sr():Jr()}}async function JP(e){!e||z?.preset_settings_openai!==e||(await XL(e),await fr())}async function i_(){if(!Ea())return;const e=x();if(!e.state)return;Jb(e.state);const t=m.getPromptOrderForCharacter(m.activeCharacter)??[],n=t.map(s=>s?.identifier).filter(Boolean),r=s_(e.state),o=_r(e.state);if(br(n,o)){Lm(r);return}const a=new Map(t.filter(Boolean).map(s=>[s.identifier,s])),i=o.map(s=>a.get(s)).filter(Boolean);m.removePromptOrderForCharacter(m.activeCharacter),m.addPromptOrderForCharacter(m.activeCharacter,i),m.log?.(`Prompt order updated for ${m.activeCharacter?.name??"OpenAI preset"}.`),Lm(r,{persist:!1}),Gn(),ft()}function s_(e){const t={};for(const n of e?.items??[]){if(n?.type==="group"){for(const r of n.children??[])r?.type==="prompt"&&!Object.prototype.hasOwnProperty.call(t,r.id)&&(t[r.id]=n.groupId);continue}n?.type==="prompt"&&!Object.prototype.hasOwnProperty.call(t,n.id)&&(t[n.id]=null)}return t}function Lm(e,{persist:t=!0}={}){const n=He(),r=new Set(_r());nt(n,r);const o=new Set(n.groups.map(s=>s.id)),a={},i=new Set;for(const s of r){const l=e?.[s];!l||!o.has(l)||(a[s]={groupId:l},i.add(l))}n.prompts=a,n.groups=n.groups.filter(s=>i.has(s.id)),nt(n,r),t&&ft()}function l_(e){const t=new Set(Object.values(e.prompts??{}).map(n=>n?.groupId).filter(Boolean));e.groups=e.groups.filter(n=>t.has(n.id))}function ZP(e,t){const n=x(),r=$u(n.state,{includeFavoriteMirrors:!0}).filter(o=>o?.id===e);if(!r.length)return!1;for(const o of r)o.enabled=!!t,o.orderEntry&&(o.orderEntry.enabled=!!t);return!0}function fd(){if(!N.presetDragOptimizationEnabled){Ln(),Qt({cancelled:!0}),Li(),se()?Hr():(u_(),Hr(),gd());return}if(Ln(),Qt({cancelled:!0}),ya(),Hr(),se()){Li();return}c_(),rt()}function c_(){if(f[Di])return;const e={pointerdown:eL,mousedown:tL,touchstart:nL,click:rL};document.addEventListener("pointerdown",e.pointerdown,!0),document.addEventListener("mousedown",e.mousedown,!0),document.addEventListener("touchstart",e.touchstart,{capture:!0,passive:!1}),document.addEventListener("click",e.click,!0),f[Di]=e}function Li(){const e=f[Di];e&&(document.removeEventListener("pointerdown",e.pointerdown,!0),document.removeEventListener("mousedown",e.mousedown,!0),document.removeEventListener("touchstart",e.touchstart,!0),document.removeEventListener("click",e.click,!0),delete f[Di])}function Hr(){const e=document.getElementById(hc);if(!N.presetDragOptimizationEnabled&&!se()){e?.remove();return}const t=`
${S}.${qt} li.completion_prompt_manager_prompt {
    user-select: none;
}

#completion_prompt_manager ${S}.${qt} li.completion_prompt_manager_prompt .drag-handle {
    display: flex !important;
    touch-action: none !important;
    cursor: grab !important;
}

${S}.${lr} li.completion_prompt_manager_prompt span span span,
.${Rt} #completion_prompt_manager ${S} li.completion_prompt_manager_prompt span span span {
    transition: none;
    filter: none;
}

.${Ws} {
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
    transition: transform ${Ll}ms ease;
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
    transition: grid-template-rows ${Il}ms ${Rl};
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

#completion_prompt_manager ${S}.${qt} .bai-bai-preset-favorite-prompt .bai-bai-preset-favorite-row-marker {
    cursor: default !important;
}

#completion_prompt_manager ${S} .bai-bai-preset-global-library-prompt .bai-bai-preset-global-library-row-marker {
    cursor: default !important;
}

#completion_prompt_manager ${S}.${qt} .bai-bai-preset-global-library-prompt .bai-bai-preset-global-library-row-marker {
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
    transition: transform ${Ll}ms ease;
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
    transition: grid-template-rows ${Il}ms ${Rl};
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
    transition: transform ${Ll}ms ease;
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
    transition: grid-template-rows ${Il}ms ${Rl};
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
    min-height: ${FI}px;
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

.${Xs} {
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

.${$d} {
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
`;if(e){e.textContent=t;return}const n=document.createElement("style");n.id=hc,n.textContent=t,document.head.append(n)}function ya(){const e=m;if(!e||typeof e.makeDraggable!="function")return!1;const t=f[Al];if(t?.manager===e&&e.makeDraggable===t.patched)return!0;if(e.makeDraggable.__baiBaiToolkitPresetDragPatched)return f[Al]={manager:e,original:e.makeDraggable.__baiBaiToolkitOriginalMakeDraggable,patched:e.makeDraggable},!0;const n=e.makeDraggable,r=function(...o){if(Er()){const i=this?.listElement instanceof HTMLElement?this.listElement:document.querySelector(S);bd(i),rt(i);return}if(!N.presetDragOptimizationEnabled)return n.apply(this,o);const a=this?.listElement instanceof HTMLElement?this.listElement:document.querySelector(S);rt(a)};return r.__baiBaiToolkitPresetDragPatched=!0,r.__baiBaiToolkitOriginalMakeDraggable=n,e.makeDraggable=r,f[Al]={manager:e,original:n,patched:r},!0}function gd(){if(!(!m||typeof m.makeDraggable!="function"))try{m.makeDraggable()}catch(e){console.debug(`${D} Failed to restore prompt manager sorting`,e)}}function rt(e=document.querySelector(S),{signature:t=""}={}){if(!(e instanceof HTMLElement))return!1;if(!N.presetDragOptimizationEnabled&&!se())return e.classList.remove(qt,lr),!1;const n=x(),r=t||"";return r&&n.dragPreparedList===e&&n.dragPreparedSignature===r&&e.classList.contains(qt)||(bd(e),e.classList.add(qt),WA(e),e.querySelectorAll("li.completion_prompt_manager_prompt .drag-handle").forEach(o=>o.classList.add("ui-sortable-handle")),n.dragPreparedList=e,n.dragPreparedSignature=r),!0}function u_(){const e=document.querySelector(S);e instanceof HTMLElement&&(e.classList.remove(qt,lr),Dh())}function bd(e){if(!(!(e instanceof HTMLElement)||typeof globalThis.jQuery?.fn?.sortable!="function"))try{const t=$(e);t.sortable("instance")!==void 0&&t.sortable("destroy")}catch(t){console.debug(`${D} Failed to disable stock prompt manager sorting`,t)}}function eL(e){if(!N.presetDragOptimizationEnabled||!__(e)||de())return;const t=Ed(e.target);t&&Gs(e,t,In(e))&&(f.promptManagerCustomDragSuppressCompatUntil=Date.now()+300,ut(e))}function tL(e){if(!N.presetDragOptimizationEnabled||!__(e)||de())return;const t=Ed(e.target);if(t){if(f.promptManagerCustomDragState||d_()){ut(e);return}typeof PointerEvent!="function"&&Gs(e,t,In(e))&&ut(e)}}function nL(e){if(!N.presetDragOptimizationEnabled)return;const t=Ed(e.target);if(t){if(de()){oL(e,t,In(e));return}if(f.promptManagerCustomDragState||d_()){ut(e);return}Gs(e,t,In(e))&&ut(e)}}function d_(){return Date.now()<(f.promptManagerCustomDragSuppressCompatUntil??0)}function rL(e){Date.now()>=(f.promptManagerCustomDragSuppressClickUntil??0)||!(e.target instanceof Element?e.target:null)?.closest(S)||ut(e)}function oL(e,t,n){if(!n||f.promptManagerCustomDragState||f.promptManagerCustomDragPendingState)return!1;const r={dragTarget:t,sourceEvent:e,pointerId:typeof e.pointerId=="number"?e.pointerId:null,startX:n.clientX,startY:n.clientY,timer:0};return r.timer=setTimeout(()=>{aL()},jI),f.promptManagerCustomDragPendingState=r,document.addEventListener("pointermove",p_,!0),document.addEventListener("pointerup",hd,!0),document.addEventListener("pointercancel",g_,!0),document.addEventListener("touchmove",m_,{capture:!0,passive:!0}),document.addEventListener("touchend",_d,!0),document.addEventListener("touchcancel",b_,!0),document.addEventListener("keydown",h_,!0),!0}function aL(){const e=f.promptManagerCustomDragPendingState;if(!e)return;yd(),Gs(e.sourceEvent,e.dragTarget,{clientX:e.startX,clientY:e.startY},{suppressNextClick:!0})&&(f.promptManagerCustomDragSuppressCompatUntil=Date.now()+300)}function p_(e){const t=f.promptManagerCustomDragPendingState;!t||t.pointerId===null||e.pointerId!==t.pointerId||f_(e)}function m_(e){f.promptManagerCustomDragPendingState?.pointerId===null&&f_(e)}function f_(e){const t=f.promptManagerCustomDragPendingState,n=In(e);if(!t||!n)return;Math.hypot(n.clientX-t.startX,n.clientY-t.startY)>qI&&Ln()}function hd(e){const t=f.promptManagerCustomDragPendingState;!t||t.pointerId===null||e.pointerId!==t.pointerId||Ln()}function g_(e){hd(e)}function _d(){f.promptManagerCustomDragPendingState?.pointerId===null&&Ln()}function b_(){_d()}function h_(e){e.key==="Escape"&&Ln()}function Ln(){yd()}function yd(){const e=f.promptManagerCustomDragPendingState;e&&(clearTimeout(e.timer),delete f.promptManagerCustomDragPendingState,document.removeEventListener("pointermove",p_,!0),document.removeEventListener("pointerup",hd,!0),document.removeEventListener("pointercancel",g_,!0),document.removeEventListener("touchmove",m_,!0),document.removeEventListener("touchend",_d,!0),document.removeEventListener("touchcancel",b_,!0),document.removeEventListener("keydown",h_,!0))}function Ed(e){if(!(e instanceof Element))return null;const t=e.closest(`${S} li.completion_prompt_manager_prompt[data-pm-identifier]`),n=t?.closest(S),r=t?.querySelector(".drag-handle")??t,o=e.closest(`${S} li.completion_prompt_manager_prompt .drag-handle`);return!(r instanceof HTMLElement)||!(t instanceof HTMLElement)||!(n instanceof HTMLElement)||de()&&!N.presetMobileWholeRowDragEnabled&&!(o instanceof HTMLElement)||e.closest(Ys)||!t.classList.contains("completion_prompt_manager_prompt_draggable")?null:{handle:r,row:t,list:n}}function __(e){return typeof e.button!="number"||e.button===0}function In(e){const t=e?.touches?.[0]??e?.changedTouches?.[0];return t?{clientX:t.clientX,clientY:t.clientY}:typeof e?.clientX=="number"&&typeof e?.clientY=="number"?{clientX:e.clientX,clientY:e.clientY}:null}function iL(e,t,n){sL(e,t),t.classList.remove(Xs),t.classList.add(Re),t.style.setProperty("position","fixed","important"),t.style.setProperty("box-sizing","border-box","important"),t.style.setProperty("left",`${n.left}px`,"important"),t.style.setProperty("top",`${n.top}px`,"important"),t.style.setProperty("width",`${n.width}px`,"important"),t.style.setProperty("height",`${n.height}px`,"important"),t.style.setProperty("margin","0","important"),t.style.setProperty("pointer-events","none","important"),t.style.setProperty("z-index","50000","important"),t.style.setProperty("cursor","grabbing","important"),t.style.setProperty("transform","translate3d(0, 0, 0)","important"),t.querySelectorAll(".drag-handle").forEach(r=>{r instanceof HTMLElement&&r.style.setProperty("cursor","grabbing","important")})}function sL(e,t){const n=[e,...e.querySelectorAll("*")],r=[t,...t.querySelectorAll("*")];for(let o=0;o<n.length;o++){const a=n[o],i=r[o];if(!(a instanceof Element)||!(i instanceof HTMLElement))continue;const s=getComputedStyle(a);for(let l=0;l<s.length;l++){const c=s[l];i.style.setProperty(c,s.getPropertyValue(c),s.getPropertyPriority(c))}}}function Gs(e,{handle:t,row:n,list:r},o,{suppressNextClick:a=!1}={}){if(!o||f.promptManagerCustomDragState||!Ea()||!rt(r))return!1;const i=Sd(r),s=i.indexOf(n);if(s<0||i.length<2)return!1;const l=n.getBoundingClientRect(),c=n.cloneNode(!0),u=document.createElement("div"),p=L_(r);iL(n,c,l),u.className=$d,document.body.append(c,u),n.classList.add(Xs),r.classList.add(lr);const b={list:r,row:n,rows:i,clone:c,indicator:u,handle:t,pointerId:typeof e.pointerId=="number"?e.pointerId:null,sourceIndex:s,dropIndex:s,startLeft:l.left,startTop:l.top,offsetX:o.clientX-l.left,offsetY:o.clientY-l.top,clientX:o.clientX,clientY:o.clientY,scrollContainer:p,frame:0,autoScrollFrame:0,moved:!1,suppressNextClick:a,originalBodyCursor:document.body.style.cursor};if(f.promptManagerCustomDragState=b,document.body.style.cursor="grabbing",typeof t.setPointerCapture=="function"&&b.pointerId!==null)try{t.setPointerCapture(b.pointerId)}catch{}return document.addEventListener("pointermove",y_,!0),document.addEventListener("pointerup",v_,!0),document.addEventListener("pointercancel",w_,!0),document.addEventListener("mousemove",E_,!0),document.addEventListener("mouseup",T_,!0),document.addEventListener("touchmove",S_,{capture:!0,passive:!1}),document.addEventListener("touchend",x_,!0),document.addEventListener("touchcancel",C_,!0),document.addEventListener("keydown",k_,!0),Td(b),!0}function Ea(){return!!(m&&typeof m.getPromptOrderForCharacter=="function"&&typeof m.removePromptOrderForCharacter=="function"&&typeof m.addPromptOrderForCharacter=="function"&&typeof m.saveServiceSettings=="function"&&m.activeCharacter)}function Sd(e){return Array.from(e.querySelectorAll("li.completion_prompt_manager_prompt[data-pm-identifier].completion_prompt_manager_prompt_draggable")).filter(t=>!t.classList.contains(Re))}function y_(e){const t=f.promptManagerCustomDragState;!t||t.pointerId===null||e.pointerId!==t.pointerId||vd(e)}function E_(e){f.promptManagerCustomDragState?.pointerId===null&&vd(e)}function S_(e){f.promptManagerCustomDragState?.pointerId===null&&vd(e)}function vd(e){const t=f.promptManagerCustomDragState,n=In(e);!t||!n||(ut(e),t.clientX=n.clientX,t.clientY=n.clientY,t.moved=!0,Td(t))}function v_(e){const t=f.promptManagerCustomDragState;!t||t.pointerId===null||e.pointerId!==t.pointerId||(ut(e),Qt())}function T_(e){const t=f.promptManagerCustomDragState;!t||t.pointerId!==null||(ut(e),Qt())}function x_(e){const t=f.promptManagerCustomDragState;!t||t.pointerId!==null||(ut(e),Qt())}function w_(e){const t=f.promptManagerCustomDragState;!t||t.pointerId===null||e.pointerId!==t.pointerId||(ut(e),Qt({cancelled:!0}))}function C_(e){f.promptManagerCustomDragState&&(ut(e),Qt({cancelled:!0}))}function k_(e){e.key!=="Escape"||!f.promptManagerCustomDragState||(ut(e),Qt({cancelled:!0}))}function Td(e){e.frame||(e.frame=requestAnimationFrame(()=>{e.frame=0,lL(e)}))}function lL(e){if(f.promptManagerCustomDragState!==e)return;const t=e.clientX-e.offsetX,n=e.clientY-e.offsetY,r=t-e.startLeft,o=n-e.startTop;e.clone.style.setProperty("transform",`translate3d(${r}px, ${o}px, 0)`,"important"),e.dropIndex=cL(e,e.clientY),uL(e),A_(e)}function cL(e,t){const n=e.rows.filter(r=>r!==e.row);for(let r=0;r<n.length;r++){const o=n[r].getBoundingClientRect();if(t<o.top+o.height/2)return r}return n.length}function uL(e){const t=e.rows.filter(a=>a!==e.row),n=e.list.getBoundingClientRect(),r=t[e.dropIndex];let o=n.top;r instanceof HTMLElement?o=r.getBoundingClientRect().top:t.length&&(o=t[t.length-1].getBoundingClientRect().bottom),e.indicator.style.left=`${n.left}px`,e.indicator.style.top=`${Math.round(o-1)}px`,e.indicator.style.width=`${n.width}px`}function A_(e){e.autoScrollFrame||(e.autoScrollFrame=requestAnimationFrame(()=>{if(e.autoScrollFrame=0,f.promptManagerCustomDragState!==e)return;P_(e)&&(Td(e),A_(e))}))}function P_(e){const t=e.scrollContainer;if(!t)return!1;const n=56,r=18,o=t===document.scrollingElement?{top:0,bottom:window.innerHeight}:t.getBoundingClientRect();let a=0;if(e.clientY<o.top+n?a=-Math.ceil((1-(e.clientY-o.top)/n)*r):e.clientY>o.bottom-n&&(a=Math.ceil((1-(o.bottom-e.clientY)/n)*r)),!a)return!1;if(t===document.scrollingElement){const s=window.scrollY;return window.scrollBy(0,a),window.scrollY!==s}const i=t.scrollTop;return t.scrollTop+=a,t.scrollTop!==i}function L_(e){return[m?.containerElement?.closest?.(".scrollableInner"),e.closest(".scrollableInner"),e.closest(".drawer-content"),document.scrollingElement].find(n=>n instanceof HTMLElement)??document.scrollingElement}function Qt({cancelled:e=!1}={}){const t=f.promptManagerCustomDragState;if(t){if(delete f.promptManagerCustomDragState,document.removeEventListener("pointermove",y_,!0),document.removeEventListener("pointerup",v_,!0),document.removeEventListener("pointercancel",w_,!0),document.removeEventListener("mousemove",E_,!0),document.removeEventListener("mouseup",T_,!0),document.removeEventListener("touchmove",S_,!0),document.removeEventListener("touchend",x_,!0),document.removeEventListener("touchcancel",C_,!0),document.removeEventListener("keydown",k_,!0),t.frame&&cancelAnimationFrame(t.frame),t.autoScrollFrame&&cancelAnimationFrame(t.autoScrollFrame),typeof t.handle.releasePointerCapture=="function"&&t.pointerId!==null)try{t.handle.releasePointerCapture(t.pointerId)}catch{}t.clone.remove(),t.indicator.remove(),t.row.classList.remove(Xs),t.list.classList.remove(lr),document.body.style.cursor=t.originalBodyCursor,t.suppressNextClick&&(f.promptManagerCustomDragSuppressClickUntil=Date.now()+YI),!e&&t.moved&&dL(t),f.promptManagerTokenRefreshPendingAfterDrag&&(f.promptManagerTokenRefreshPendingAfterDrag=!1,Fn())}}function dL(e){const n=e.rows.filter(a=>a!==e.row)[e.dropIndex]??null;if(n===e.row)return;const r=e.rows.map(a=>a.dataset.pmIdentifier).filter(Boolean);n?e.list.insertBefore(e.row,n):e.list.append(e.row);const o=Sd(e.list).map(a=>a.dataset.pmIdentifier).filter(Boolean);br(r,o)||pL(e.list)}function pL(e){if(!Ea())return;const t=m.getPromptOrderForCharacter(m.activeCharacter)??[],n=new Map(t.filter(Boolean).map(o=>[o.identifier,o])),r=Sd(e).map(o=>n.get(o.dataset.pmIdentifier)).filter(Boolean);m.removePromptOrderForCharacter(m.activeCharacter),m.addPromptOrderForCharacter(m.activeCharacter,r),m.log?.(`Prompt order updated for ${m.activeCharacter?.name??"OpenAI preset"}.`),Gn()}function ut(e){e.preventDefault?.(),e.stopPropagation?.(),e.stopImmediatePropagation?.()}function I_(){if(!N.presetInterfaceCollapseEnabled){TL(),yL(),wd(),PL();return}AL(),vL(),na({resetRetries:!0})}function na({resetRetries:e=!1}={}){if(!N.presetInterfaceCollapseEnabled)return!1;e&&Rm({clearLayoutRuntimeAbsent:!0});const t=xL();if(t.active)return wd(),ra(),t.confirmed||pc(),!0;const n=wL();return mL(),n&&Rm(),!n&&!document.getElementById(Et)&&pc(),n}function xd(){let e=f[sr];return e||(e={observer:null,target:null,observers:[],targets:[],timer:null,retryTimer:null,retryCount:0},f[sr]=e),e}function mL(){if(typeof MutationObserver!="function")return;const e=hL(),t=xd();if(!e.length){ra(t),pc();return}fL(t,e)||(ra(t),t.targets=e,t.observers=e.map(({element:n,subtree:r})=>{const o=new MutationObserver(a=>{gL(a)&&EL()});return o.observe(n,{childList:!0,subtree:r}),o}))}function fL(e,t){return Array.isArray(e.targets)&&Array.isArray(e.observers)&&e.observers.length>0&&e.targets.length===t.length&&e.targets.every((n,r)=>n.element===t[r].element&&n.subtree===t[r].subtree)}function ra(e=f[sr]){if(e){if(e.timer&&(clearTimeout(e.timer),e.timer=null),e.observer?.disconnect?.(),e.observer=null,e.target=null,Array.isArray(e.observers))for(const t of e.observers)t?.disconnect?.();e.observers=[],e.targets=[]}}function gL(e){for(const t of e){if(bL(t.target))return!0;for(const n of t.addedNodes)if(Im(n))return!0;for(const n of t.removedNodes)if(Im(n))return!0}return!1}function bL(e){return e instanceof Element?e.matches(Gi)||!!e.closest(Gi):!1}function Im(e){return e instanceof Element?e.matches(Gi)||!!e.querySelector(Gi):!1}function hL(){const e=document.getElementById(Et),t=document.getElementById(qs),n=document.querySelector("#range_block_openai"),r=document.querySelector(xa),o=document.querySelector("#te_collapse_preset"),a=document.querySelector(Od),i=[n,r,e,t,o].filter(s=>s instanceof HTMLElement&&s.isConnected);return i.length?_L(i):a instanceof HTMLElement?[{element:a,subtree:!0}]:[]}function _L(e){const t=[],n=(r,o=!1)=>{if(!(r instanceof HTMLElement)||!r.isConnected||r===document.body||r===document.documentElement)return;const a=t.find(i=>i.element===r);if(a){a.subtree=a.subtree||o;return}t.push({element:r,subtree:o})};for(const r of e)n(r),n(r.parentElement),r.id===Et&&n(r.querySelector(`.${oa}`));return t}function yL(){const e=f[sr];e&&(e.timer&&clearTimeout(e.timer),e.retryTimer&&clearTimeout(e.retryTimer),ra(e),delete f[sr])}function EL(){if(!N.presetInterfaceCollapseEnabled)return;const e=xd();e.timer&&clearTimeout(e.timer),e.timer=setTimeout(()=>{e.timer=null,na()},80)}function pc(){if(!N.presetInterfaceCollapseEnabled)return;const e=xd();if(e.retryTimer||e.retryCount>=Tc){e.retryCount>=Tc&&(e.layoutRuntimeAbsent=!0,SL(e)&&ra(e));return}e.retryCount+=1,e.retryTimer=setTimeout(()=>{e.retryTimer=null,na()},QI)}function SL(e){return Array.isArray(e?.targets)&&e.targets.some(t=>t?.subtree===!0&&t.element?.matches?.(Od)===!0)}function Rm({clearLayoutRuntimeAbsent:e=!1}={}){const t=f[sr];t&&(t.retryTimer&&(clearTimeout(t.retryTimer),t.retryTimer=null),t.retryCount=0,e&&(t.layoutRuntimeAbsent=!1))}function vL(){if(f[Bi])return;const e=t=>{const n=t.target instanceof Element?t.target.closest("#te_collapse_preset"):null;n instanceof HTMLInputElement&&(n.checked&&wd(),setTimeout(()=>na({resetRetries:!0}),0),setTimeout(()=>na(),120))};document.addEventListener("input",e,!0),document.addEventListener("change",e,!0),f[Bi]=e}function TL(){const e=f[Bi];e&&(document.removeEventListener("input",e,!0),document.removeEventListener("change",e,!0),delete f[Bi])}function xL(){if(document.getElementById(qs))return{active:!0,confirmed:!0};const e=document.querySelector("#te_collapse_preset");if(e instanceof HTMLInputElement)return{active:e.checked,confirmed:!0};if(j?.[XI]?.collapsePreset===!0){const t=f[sr];if(t?.layoutRuntimeAbsent)return{active:!1,confirmed:!1};const n=!t||t.retryCount<Tc;return!n&&t&&(t.layoutRuntimeAbsent=!0),{active:n,confirmed:!1}}return{active:!1,confirmed:!1}}function wL(){if(document.getElementById(Et))return!0;if(document.getElementById(qs))return!1;const e=CL();if(!e.length)return!1;Ri();const t=document.createElement("div");t.id=Et,t.className="inline-drawer wide100p flexFlowColumn",t.innerHTML=`
        <div class="inline-drawer-toggle inline-drawer-header userSettingsInnerExpandable">
            <b><span>预设设置</span></b>
            <div class="fa-solid fa-circle-chevron-down inline-drawer-icon down"></div>
        </div>
        <div class="inline-drawer-content ${oa}" style="display:none;"></div>
    `;const n=e[0]?.element;if(!(n instanceof HTMLElement)||!n.parentElement)return!1;const r=new Set;for(const i of e){if(!r.has(i.key)){const s=document.createElement("div");s.id=Ii(i.key),s.hidden=!0,s.dataset.baiBaiPresetInterfaceCollapsePlaceholder="true",i.element.before(s),r.add(i.key)}i.element.setAttribute(Hi,i.key)}const o=document.getElementById(Ii(e[0].key)),a=t.querySelector(`.${oa}`);if(!(o instanceof HTMLElement)||!(a instanceof HTMLElement))return Ri(),!1;o.before(t);for(const i of e)a.append(i.element);return!0}function wd(){const e=document.getElementById(Et);if(!(e instanceof HTMLElement)){Ri();return}const t=e.querySelector(`.${oa}`);for(const n of["1","2","3"]){const r=document.getElementById(Ii(n)),o=t instanceof HTMLElement?Array.from(t.children).filter(a=>a.getAttribute?.(Hi)===n):[];for(const a of o)a.removeAttribute(Hi);r instanceof HTMLElement?r.replaceWith(...o):o.length&&e.before(...o)}e.remove(),Ri()}function CL(){const e=document.querySelector(xa);if(!(e instanceof HTMLElement))return[];const t=[],n=document.querySelector("#range_block_openai");n instanceof HTMLElement&&!n.closest(`#${Et}`)&&t.push({key:"1",element:n});const r=e.querySelector(":scope > div");r instanceof HTMLElement&&!r.closest(`#${Et}`)&&t.push({key:"2",element:r});for(const o of e.querySelectorAll(":scope > div.range-block.m-t-1"))o instanceof HTMLElement&&!o.closest(`#${Et}`)&&t.push({key:"3",element:o});return kL(t)}function kL(e){const t=[];for(const n of e){const r=n.element;if(!(!(r instanceof HTMLElement)||!r.isConnected)&&!t.some(o=>o.element===r)&&!t.some(o=>o.element.contains(r))){for(let o=t.length-1;o>=0;o-=1)r.contains(t[o].element)&&t.splice(o,1);t.push(n)}}return t}function Ii(e){return`${J_}_${e}`}function Ri(){for(const e of["1","2","3"])document.getElementById(Ii(e))?.remove()}function AL(){let e=document.getElementById(bc);e||(e=document.createElement("style"),e.id=bc,document.head.append(e)),e.textContent=`
#${Et} {
    margin-bottom: 8px;
}

#${Et} > .${oa} {
    padding-top: 6px;
}
`}function PL(){document.getElementById(bc)?.remove()}function R_(){const e=document.getElementById(Hm);if(!N.presetScrollOptimizationEnabled){e?.remove();return}if(e){e.textContent=Mm();return}const t=document.createElement("style");t.id=Hm,t.textContent=Mm(),document.head.append(t)}function Mm(){return`
${S} > li.completion_prompt_manager_prompt {
    contain: paint style;
}
`}let N={},f={},D="[BaiBaiToolkit]",Mi=null,mc=12e3,Rn=null;function LL(e={}){N=e.settings??N,delete N.presetPromptGroups,f=e.extensionState??f,D=e.logPrefix??D,Mi=e.loadCodeMirrorModules??Mi,mc=e.codeMirrorHistoryMaxLength??mc,Rn=e.saveSettings??Rn}function IL({saveSettings:e}={}){Rn=e??Rn;const t=()=>{typeof e=="function"&&e()},n=({key:r,selector:o})=>{$(o).prop("checked",N[r]===!0).on("input",function(){const a=!!$(this).prop("checked"),i=RL(a);ML(a),i&&(t(),OL())})};Rd.forEach(n),$("#bai_bai_toolkit_preset_interface_collapse_enabled").prop("checked",N.presetInterfaceCollapseEnabled===!0).on("input",function(){N.presetInterfaceCollapseEnabled=!!$(this).prop("checked"),t(),I_()}),$("#bai_bai_toolkit_preset_switch_optimization_enabled").prop("checked",N.presetSwitchOptimizationEnabled===!0).on("input",function(){N.presetSwitchOptimizationEnabled=!!$(this).prop("checked"),t(),Iu()}),$("#bai_bai_toolkit_preset_grouping_enabled").prop("checked",N.presetGroupingEnabled!==!1).on("input",function(){N.presetGroupingEnabled=!!$(this).prop("checked"),t(),Bh()}),$("#bai_bai_toolkit_preset_grouping_edit_button_in_menu_enabled").prop("checked",N.presetGroupingEditButtonInMenuEnabled===!0).on("input",function(){N.presetGroupingEditButtonInMenuEnabled=!!$(this).prop("checked"),t(),oP()}),$("#bai_bai_toolkit_preset_prompt_codemirror_editor_enabled").prop("checked",N.presetPromptCodeMirrorEditorEnabled).on("input",function(){N.presetPromptCodeMirrorEditorEnabled=!!$(this).prop("checked"),t(),O_()}),$("#bai_bai_toolkit_preset_auto_save_after_prompt_edit_enabled").prop("checked",N.presetAutoSaveAfterPromptEditEnabled).on("input",function(){N.presetAutoSaveAfterPromptEditEnabled=!!$(this).prop("checked"),t()})}function RL(e){let t=!1;for(const{key:n}of Rd)N[n]!==e&&(N[n]=e,t=!0);return t}function ML(e){for(const{selector:t}of Rd)$(t).prop("checked",e)}function OL(){Ln(),Qt({cancelled:!0}),Kh(),R_(),fd(),Iu(),F_(),z_()}function BL(){return typeof Mi!="function"?Promise.reject(new Error("CodeMirror module loader is not configured")):Mi()}function DL(){return Number(mc)||12e3}function M_(e){let t=null;try{t=typeof InputEvent=="function"?new InputEvent("input",{bubbles:!0,inputType:"insertReplacementText",data:""}):null}catch{t=null}t||=new Event("input",{bubbles:!0}),e.dispatchEvent(t)}function O_(){N.presetPromptCodeMirrorEditorEnabled?$L():B_()}function $L(){const e=NL();e.enabled=!0,jL(),HL(e),D_(e),GL(e)}function B_(){const e=f[Zn];if(e){Gr("disable"),e.enabled=!1,e.refreshFrame&&(cancelAnimationFrame(e.refreshFrame),e.refreshFrame=0),e.mutationObserver?.disconnect(),e.mutationObserver=null,ri(e);for(const t of e.globalListeners||[])t.target.removeEventListener(t.type,t.handler,t.options);e.globalListeners=[],qL(),delete f[Zn]}}function NL(){return f[Zn]||(f[Zn]={enabled:!1,source:null,wrapper:null,view:null,listeners:[],globalListeners:[],mutationObserver:null,mutationObserverTargets:[],refreshFrame:0,dirty:!1,flushing:!1,syncingFromSource:!1,loadingToken:null,sourceValue:"",disabled:!1,forceSyncFromSource:!1}),f[Zn]}function HL(e){if(e.globalListeners.length>0)return;const t=a=>{const i=a.target instanceof Element?a.target:null;i&&(i.closest(ty)&&Gr("save click"),i.closest(`.editor_maximize[data-for="${ny}"]`)&&(Gr("maximize click"),Jn(e,{forceFromSource:!0})),(i.closest(tR)||i.closest(nR)||i.closest(`${S} [data-preset-prompt-action], ${S} .prompt-manager-edit-action, ${S} .prompt-manager-inspect-action, ${S} .prompt-manager-detach-action`)||i.closest("#completion_prompt_manager .completion_prompt_manager_footer .menu_button"))&&Jn(e,{forceFromSource:!0}))},n=a=>{(a.target instanceof HTMLTextAreaElement?a.target:null)?.id?.endsWith("_prompt_quick_edit_textarea")&&Jn(e,{forceFromSource:!0})},r=()=>{Gr("page lifecycle")},o=(a,i,s,l)=>{!(a instanceof EventTarget)||a===document||(a.addEventListener(i,s,l),e.globalListeners.push({target:a,type:i,handler:s,options:l}))};for(const a of FL())o(a,"click",t,!0),o(a,"blur",n,!0);o(window,"pagehide",r)}function GL(e){typeof MutationObserver=="function"&&(e.mutationObserver||(e.mutationObserver=new MutationObserver(t=>{VL(e,t)||UL(e,t)||Jn(e)})),ni(e))}function FL(){const e=new Set,t=r=>{r instanceof HTMLElement&&r.isConnected&&e.add(r)},n=Cd();return t(document.querySelector("#completion_prompt_manager")),t(document.querySelector(xa)),t(n?.closest("form")),t(n?.closest("dialog.popup, .popup, #completion_prompt_manager")),t(n?.parentElement),[...e]}function ni(e){if(!e?.mutationObserver)return;const t=zL(e),n=e.mutationObserverTargets||[];if(!(n.length===t.length&&n.every((o,a)=>o.target===t[a].target&&o.optionsKey===t[a].optionsKey))){e.mutationObserver.disconnect();for(const{target:o,options:a}of t)e.mutationObserver.observe(o,a);e.mutationObserverTargets=t}}function zL(e){const t=new Map,n={attributes:!0,attributeFilter:["class","style","hidden","data-for","disabled"],childList:!0,subtree:!0},r={childList:!0,subtree:!1},o=(l,c,u)=>{if(!(l instanceof Node)||!l.isConnected||l===document)return;const p=t.get(l);(!p||p.optionsKey==="parent")&&t.set(l,{target:l,optionsKey:c,options:u})},a=l=>{l instanceof HTMLElement&&(o(l.parentElement,"host",n),o(l.parentElement?.parentElement,"parent",r),o(l.closest("form"),"host",n),o(l.closest("dialog.popup, .popup"),"host",n))},i=Cd(),s=document.querySelector("#completion_prompt_manager");return a(i),a(e.source),a(e.wrapper),s instanceof HTMLElement&&o(s,"host",n),[...t.values()]}function VL(e,t){const n=e.wrapper;return n instanceof HTMLElement?t.every(r=>{if(r.target instanceof Node&&n.contains(r.target))return!0;for(const o of r.addedNodes)if(!(o instanceof Node)||!n.contains(o))return!1;for(const o of r.removedNodes)if(!(o instanceof Node)||!n.contains(o))return!1;return r.addedNodes.length>0||r.removedNodes.length>0}):!1}function UL(e,t){if(!t?.length)return!1;const n=o=>{if(!(o instanceof Node))return!1;const a=e.source,i=e.wrapper;return a instanceof Node&&(o===a||o.contains?.(a)||a.contains?.(o))||i instanceof Node&&(o===i||o.contains?.(i)||i.contains?.(o))},r=o=>o instanceof Node?!!(o instanceof Element?o:o.parentElement)?.closest?.(`${S}, .bai-bai-preset-global-library`):!1;return Array.from(t).every(o=>{const a=[o.target,...Array.from(o.addedNodes??[]),...Array.from(o.removedNodes??[])].filter(i=>i instanceof Node);return a.length>0&&a.every(i=>!n(i)&&r(i))})}function Jn(e=f[Zn],{forceFromSource:t=!1}={}){e?.enabled&&(t&&(e.forceSyncFromSource=!0),!e.refreshFrame&&(e.refreshFrame=requestAnimationFrame(()=>{e.refreshFrame=0,D_(e)})))}function D_(e){if(!e?.enabled)return;const t=Cd();if(!(t instanceof HTMLTextAreaElement)||!t.isConnected){ri(e),ni(e);return}if(e.source===t&&e.wrapper?.isConnected){const n=Fs(t);if(e.disabled!==n){ri(e),Om(e,t);return}if($_(e,t,e.wrapper),ni(e),e.forceSyncFromSource){e.forceSyncFromSource=!1,G_(e,{force:!0});return}KL(e);return}ri(e),Om(e,t),ni(e)}function Cd(){const e=document.querySelector(ry);return e instanceof HTMLTextAreaElement&&e.isConnected?e:document.querySelector(rR)}function Om(e,t){const n=document.createElement("div");n.id=Lt,n.className=oR,n.textContent="Loading CodeMirror...",$_(e,t,n),t.classList.add(Bd),t.insertAdjacentElement("afterend",n),e.source=t,e.wrapper=n,e.dirty=!1,e.sourceValue=t.value||"",e.disabled=Fs(t),e.forceSyncFromSource=!1;const r=()=>{setTimeout(()=>{e.dirty&&e.wrapper&&!e.wrapper.contains(document.activeElement)&&Gr("blur")},0)},o=()=>{Jn(e,{forceFromSource:!0})};n.addEventListener("focusout",r),t.addEventListener("input",o,!0),e.listeners.push({target:n,type:"focusout",handler:r,options:void 0},{target:t,type:"input",handler:o,options:!0});const a={};e.loadingToken=a,BL().then(i=>{!e.enabled||e.source!==t||e.wrapper!==n||e.loadingToken!==a||!n.isConnected||WL(e,t,n,i)}).catch(i=>{console.warn(`${D} CodeMirror preset prompt editor failed; falling back to stock textarea.`,i),e.enabled&&e.source===t&&e.wrapper===n&&e.loadingToken===a&&(N.presetPromptCodeMirrorEditorEnabled=!1,typeof Rn=="function"&&Rn(),$("#bai_bai_toolkit_preset_prompt_codemirror_editor_enabled").prop("checked",!1),B_())})}function $_(e,t,n){const r=Fs(t),o=kd(t);e.disabled=r,n.classList.toggle(oy,r),n.classList.toggle(oi,o),n.setAttribute("aria-disabled",String(r))}function Fs(e){return e instanceof HTMLTextAreaElement?e.disabled?!0:kd(e)?document.getElementById(ny)?.disabled===!0:!1:!1}function kd(e){return e instanceof HTMLTextAreaElement&&e.matches(ry)}function WL(e,t,n,r){const{EditorState:o,EditorView:a,keymap:i,defaultKeymap:s=[],history:l,historyKeymap:c=[]}=r,u=t.value.length<=DL(),p=Fs(t),b=[a.lineWrapping,a.updateListener.of(v=>{!v.docChanged||e.syncingFromSource||(e.dirty=!0,H_(e)&&kd(e.source)&&M_(e.source))}),a.theme({"&":{backgroundColor:"var(--SmartThemeBlurTintColor)",border:"1px solid var(--SmartThemeBorderColor)",borderRadius:"4px",boxSizing:"border-box",color:"var(--SmartThemeBodyColor)",font:"inherit",maxWidth:"100%",minHeight:"min(34vh, 360px)",minWidth:"0",overflow:"hidden",textShadow:"none",textAlign:"left",width:"100%"},"&.cm-focused":{outline:"none"},".cm-scroller":{fontFamily:"inherit",lineHeight:"1.35",maxHeight:"min(44vh, 440px)",minHeight:"min(34vh, 360px)",minWidth:"0",overflow:"auto",overflowAnchor:"none",overscrollBehavior:"auto",touchAction:"pan-y",WebkitOverflowScrolling:"touch"},".cm-content":{caretColor:"var(--SmartThemeBodyColor)",minWidth:"0",padding:"8px",textShadow:"none",textAlign:"left",minHeight:"min(34vh, 360px)"},".cm-line":{padding:"0",textAlign:"left"}})];p&&o.readOnly?.of&&b.push(o.readOnly.of(!0)),a.editable?.of&&b.push(a.editable.of(!p)),u&&typeof l=="function"&&b.push(l()),typeof i?.of=="function"&&b.push(i.of(u?[...s,...c]:s)),a.contentAttributes?.of&&b.push(a.contentAttributes.of({autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false","aria-label":t.getAttribute("aria-label")||"Preset prompt","aria-readonly":String(p)})),n.textContent="",e.view=new a({state:o.create({doc:t.value||"",extensions:b}),parent:n})}function ri(e){if(!(!e.source&&!e.wrapper&&!e.view)){for(const t of e.listeners||[])t.target.removeEventListener(t.type,t.handler,t.options);e.listeners=[],e.view?.destroy?.(),e.source?.classList.remove(Bd),e.wrapper?.remove(),e.source=null,e.wrapper=null,e.view=null,e.dirty=!1,e.syncingFromSource=!1,e.loadingToken=null,e.sourceValue="",e.disabled=!1,e.forceSyncFromSource=!1}}function N_(e){return e.view?.state?.doc?.toString?.()??""}function H_(e){if(!(e.source instanceof HTMLTextAreaElement)||!e.view)return!1;const t=N_(e),n=e.source.value!==t;return n&&(e.source.value=t),e.sourceValue=t,n}function KL(e){return G_(e,{force:!1})}function G_(e,{force:t=!1}={}){if(!t&&e.dirty||!(e.source instanceof HTMLTextAreaElement)||!e.view)return!1;const n=e.source.value||"";if(N_(e)!==n){e.syncingFromSource=!0;try{e.view.dispatch({changes:{from:0,to:e.view.state.doc.length,insert:n}}),e.dirty=!1,e.sourceValue=n}finally{e.syncingFromSource=!1}return!0}return e.dirty=!1,e.sourceValue=n,!1}function Gr(e,{dispatchInput:t=!1}={}){const n=f[Zn];if(!n?.enabled||n.flushing||!(n.source instanceof HTMLTextAreaElement)||!n.view)return!1;n.flushing=!0;try{const r=H_(n)||n.dirty;return n.dirty=!1,r&&t&&M_(n.source),r&&console.debug(`${D} CodeMirror preset prompt editor flushed after ${e}`),r}finally{n.flushing=!1}}function jL(){let e=document.getElementById(gc);e||(e=document.createElement("style"),e.id=gc,document.head.append(e)),e.textContent=`
#${Lt} {
    box-sizing: border-box;
    display: block;
    width: 100%;
}

#${Lt}.${oy} {
    opacity: 0.72;
}

#${Lt}.${oi} {
    flex: 1 1 auto;
    height: 100%;
    min-height: 0;
}

#${Lt}.${oi} .cm-editor,
#${Lt}.${oi} .cm-scroller {
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

.${Bd} {
    display: none !important;
}
`}function qL(){document.getElementById(gc)?.remove()}function F_(){if(!f[Jm]){const e=t=>{YL(t)};f[Jm]=e,document.addEventListener("click",e,!0)}}function z_(){if(f[Zm])return;const e=t=>{QL(t)};f[Zm]=e,document.addEventListener("click",e,!0)}function YL(e){if(!N.presetToggleOptimizationEnabled&&!se())return;const n=(e.target instanceof Element?e.target:null)?.closest(`${S} .prompt-manager-toggle-action`);if(!n)return;const r=n.closest("li.completion_prompt_manager_prompt"),o=r?.dataset?.pmIdentifier;if(!r||!o||!m?.activeCharacter||typeof m.getPromptOrderEntry!="function")return;const a=m.getPromptOrderEntry(m.activeCharacter,o);if(!a)return;e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),a.enabled=!a.enabled;for(const s of V_(o))tI(s,s.querySelector(".prompt-manager-toggle-action"),a.enabled);ZP(o,a.enabled)&&Er()&&ed(),kn(),Gn(),Hn(),Fn()}function QL(e){const n=(e.target instanceof Element?e.target:null)?.closest(ty);if(!n)return;if(Gr("optimized save click"),!N.presetToggleOptimizationEnabled||!m||typeof m.getPromptById!="function"){Bm();return}const r=n.dataset.pmPrompt,o=r?m.getPromptById(r):null;if(!o||typeof m.updatePromptWithPromptEditForm!="function"){Bm();return}e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),m.updatePromptWithPromptEditForm(o),Hn(),nI(r,o),rI(o),m.hidePopup?.(),m.clearEditForm?.(),Ad({allowPresetAutoSave:!0}).catch(a=>{console.debug(`${D} Failed to save prompt edits`,a)}),Fn()}function Bm(){setTimeout(()=>{Ad({allowPresetAutoSave:!0}).catch(e=>{console.debug(`${D} Failed to prepare prompt edit preset save`,e)})},0)}async function Ad({allowPresetAutoSave:e=!1}={}){return Gn(),Hn(),!e||!N.presetAutoSaveAfterPromptEditEnabled?!1:(await Tn({includeOpenAiPresetSaves:!0}),!0)}async function XL(e=z?.preset_settings_openai){Ns();const t=_a(e),n=Hs(z);await Qh(e,n,{revision:t})}function JL(e){if(typeof globalThis.fetch!="function")return eI();const t=globalThis.fetch;let n=!1,r=!1,o=0;return new Promise((a,i)=>{const s=()=>{globalThis.fetch===c&&(globalThis.fetch=t),o&&(clearTimeout(o),o=0)},l=(u,p)=>{r||(r=!0,s(),u(p))},c=function(...u){const p=t.apply(this,u);return!n&&ZL(u[0],u[1],e)&&(n=!0,Promise.resolve(p).then(b=>{if(b?.ok){l(a,!0);return}l(i,new Error("OpenAI preset update request failed"))}).catch(b=>l(i,b))),p};globalThis.fetch=c,o=setTimeout(()=>l(a,!1),1200)})}function ZL(e,t,n){if(!(typeof e=="string"?e:typeof e?.url=="string"?e.url:"").includes("/api/presets/save")||String(t?.method||e?.method||"GET").toUpperCase()!=="POST")return!1;if(typeof t?.body!="string")return!0;try{const a=JSON.parse(t.body);if(a?.apiId&&a.apiId!=="openai"||n&&a?.name&&a.name!==n)return!1}catch{return!0}return!0}function eI(){return new Promise(e=>setTimeout(e,1200))}function tI(e,t,n){e.classList.toggle("completion_prompt_manager_prompt_disabled",!n),t&&(t.classList.toggle("fa-toggle-on",n),t.classList.toggle("fa-toggle-off",!n))}function Pd(e,t,n=null){const r=e.querySelector(".prompt_manager_prompt_tokens");if(!r)return;const o=n?.warningClass??"",a=n?.warningTitle??"",i=t?String(t):"-",s=r.querySelector("span");if(r.dataset.pmTokens===i&&r.textContent?.trim()===i&&(s?.className??"")===o&&(s?.title??"")===a)return;const l=s??document.createElement("span");l.className=o,l.title=a,l.textContent=" ",r.dataset.pmTokens=i,r.replaceChildren(l,document.createTextNode(i))}function nI(e,t){["main","nsfw","jailbreak"].includes(e)&&m.updateQuickEdit?.(e,t)}function rI(e){const t=V_(e.identifier);if(!t.length)return;const r=m.getPromptOrderEntry?.(m.activeCharacter,e.identifier)?.enabled??!0,o=!e.marker&&e.system_prompt&&e.injection_position!==De.ABSOLUTE&&e.forbid_overrides;for(const a of t){a.classList.toggle("completion_prompt_manager_prompt_disabled",!r),a.classList.toggle("completion_prompt_manager_marker",!!e.marker),a.classList.toggle("completion_prompt_manager_important",!!o);const i=a.querySelector(".completion_prompt_manager_prompt_name");i&&oI(i,e,{allowInspect:a.dataset.presetFavoriteMirror!=="true"}),Pd(a,null)}}function V_(e){const t=document.querySelector(S);return t?Array.from(t.querySelectorAll("li.completion_prompt_manager_prompt[data-pm-identifier]")).filter(n=>n.dataset.pmIdentifier===e):[]}function oI(e,t,{allowInspect:n=!0}={}){const r=t.name??"",o=t.marker&&t.injection_position!==De.ABSOLUTE,a=!t.marker&&t.system_prompt&&t.injection_position!==De.ABSOLUTE&&!t.forbid_overrides,i=!t.marker&&t.system_prompt&&t.injection_position!==De.ABSOLUTE&&t.forbid_overrides,s=!t.marker&&!t.system_prompt&&t.injection_position!==De.ABSOLUTE,l=t.injection_position===De.ABSOLUTE,c=Array.isArray(m.overriddenPrompts)&&m.overriddenPrompts.includes(t.identifier),u=t.role==="system"&&(t.marker||t.system_prompt)?"":t.role,b={assistant:{roleIcon:"fa-robot",roleTitle:"Prompt will be sent as Assistant"},user:{roleIcon:"fa-user",roleTitle:"Prompt will be sent as User"}}[u];e.dataset.pmName=r,e.replaceChildren(),o&&Po(e,"fa-fw fa-solid fa-thumb-tack","Marker"),a&&Po(e,"fa-fw fa-solid fa-square-poll-horizontal","Global Prompt"),i&&Po(e,"fa-fw fa-solid fa-star","Important Prompt"),s&&Po(e,"fa-fw fa-solid fa-asterisk","Preset Prompt"),l&&Po(e,"fa-fw fa-solid fa-syringe","In-Chat Injection");const v=m.isPromptInspectionAllowed?.(t),y=document.createElement(n&&v?"a":"span");if(y.title=r,y.textContent=r,y instanceof HTMLAnchorElement?(y.className="prompt-manager-inspect-action",y.addEventListener("click",m.handleInspect)):v&&(y.className="prompt-manager-inspect-action bai-bai-preset-prompt-name-visual-only"),e.append(y),b){const k=document.createElement("span");k.dataset.role=t.role,k.className=`fa-xs fa-solid ${b.roleIcon}`,k.title=b.roleTitle,e.append(document.createTextNode(" "),k)}if(l){const k=document.createElement("small");k.className="prompt-manager-injection-depth",k.textContent=`@ ${t.injection_depth}`,e.append(document.createTextNode(" "),k)}if(c){const k=document.createElement("small");k.className="fa-solid fa-address-card prompt-manager-overridden",k.title="Pulled from a character card",e.append(document.createTextNode(" "),k)}}function Po(e,t,n){const r=document.createElement("span");r.className=t,r.title=n,e.append(r,document.createTextNode(" "))}function aI(){const e=it(),t=globalThis[za]&&typeof globalThis[za]=="object"?globalThis[za]:{};t.installed=!0,t.version="0.1",t.prepareOpenAIMessages=xI,t.prepareWorldInfoBudgetCounts=wI,t.clear=()=>e.cache.clear(),t.getStats=()=>({...e.stats,cacheSize:e.cache.size}),t.isEnabled=Sa,globalThis[za]=t,hI()}async function iI(e,t){const n=new Array(t.length),r=[];for(let o=0;o<t.length;o+=1){const a=t[o],i=Us(e,a.message),s=it().cache.get(i);if(typeof s=="number"){n[o]=s;continue}r.push({index:o,key:i,message:a.message})}return r.length>0&&(await zs(e,r)).forEach((a,i)=>{const s=r[i];Vs(s.key,a),n[s.index]=a}),n.map(o=>Number(o)||0)}function sI(e,t){const n=Number(e);return Number.isFinite(n)?Math.max(0,n-(t==="claude"?1:3)):0}async function lI(e,{markPending:t=!0,forceVisible:n=!1}={}){try{if(!Dn()||!n&&!go())return;await hr(),t&&Id(),fo(e||"context change token refresh",{delayMs:Qs,forceVisible:n})}catch(r){console.debug(`${D} Failed to fast-refresh prompt manager after ${e}`,r)}}function bn(){(!f[Va]||typeof f[Va]!="object")&&(f[Va]={timer:null,reason:"",inFlight:!1,pendingAfterFlight:!1,pendingWhileHidden:!1,lastSignature:"",lastEffectiveTokenCountSignature:"",force:!1,forceVisible:!1,displayFrame:0,pendingFrame:0});const e=f[Va];return typeof e.lastEffectiveTokenCountSignature!="string"&&(e.lastEffectiveTokenCountSignature=typeof e.lastEffectiveTokenSignature=="string"?e.lastEffectiveTokenSignature:""),Object.prototype.hasOwnProperty.call(e,"lastEffectiveTokenSignature")&&delete e.lastEffectiveTokenSignature,e}function fo(e="prompt manager token refresh",{delayMs:t=Dd,force:n=!1,forceVisible:r=!1}={}){const o=bn();if(o.reason=e||o.reason||"prompt manager token refresh",o.force=!!(o.force||n),o.forceVisible=!!(o.forceVisible||r),!K_()){clearTimeout(o.timer),o.timer=null;return}if(f.promptManagerCustomDragState||Ju()){f.promptManagerTokenRefreshPendingAfterDrag=!0;return}if(Lu()){clearTimeout(o.timer),o.timer=setTimeout(()=>{o.timer=null,fo(o.reason||e,{delayMs:ln,force:o.force,forceVisible:o.forceVisible})},ln);return}if(o.inFlight){o.pendingAfterFlight=!0;return}if(!o.forceVisible&&!go()){o.pendingWhileHidden=!0;return}clearTimeout(o.timer),o.timer=setTimeout(()=>{o.timer=null,uI()},Math.max(0,Number(t)||0))}function cI(e="prompt manager visible"){const t=bn();!t.pendingWhileHidden||!go()||(t.pendingWhileHidden=!1,fo(e,{delayMs:Qs,force:!0,forceVisible:!0}))}async function uI(){const e=bn();if(e.inFlight){e.pendingAfterFlight=!0;return}e.inFlight=!0,e.pendingAfterFlight=!1;try{await dI({reason:e.reason,force:e.force,forceVisible:e.forceVisible})}finally{e.inFlight=!1,e.force=!1,e.forceVisible=!1,e.pendingAfterFlight&&(e.pendingAfterFlight=!1,fo(e.reason||"pending prompt manager token refresh",{delayMs:Dd,force:!0,forceVisible:!0}))}}async function dI({reason:e="prompt manager token refresh",force:t=!1,forceVisible:n=!1}={}){if(K_()){if(f.promptManagerCustomDragState||Ju()){f.promptManagerTokenRefreshPendingAfterDrag=!0;return}if(!Lu()){if(!n&&!go()){bn().pendingWhileHidden=!0;return}if(!Ru()){await Wb();return}try{const r=Zo(),o=bn(),a=Oi();if(!t&&a&&a===o.lastSignature&&pI()){o.lastEffectiveTokenCountSignature=Nr(),fc();return}r.inFlight=!0;const i=performance.now?.()??Date.now(),s=a,l=Nr(),c=Is();o.lastSignature="",c||(o.lastEffectiveTokenCountSignature="",kn(null)),await m.tryGenerate();const u=Oi(),p=Nr();s&&u===s?o.lastSignature=s:(o.lastSignature="",o.pendingAfterFlight=!0),l&&p===l?o.lastEffectiveTokenCountSignature=l:l&&(o.lastEffectiveTokenCountSignature="",kn(null),o.pendingAfterFlight=!0),Er()&&Ie(),fc(),console.debug(`${D} Prompt manager token refresh completed after ${e}: ${Math.round((performance.now?.()??Date.now())-i)}ms`)}catch(r){console.debug(`${D} Failed to refresh prompt manager token counts`,r)}finally{const r=Zo();r.inFlight=!1,r.suppressUntil=Date.now()+iy}}}}function go(){if(document.visibilityState==="hidden")return!1;const e=document.querySelector(S),t=m?.containerElement;if(!(e instanceof HTMLElement)||!(t instanceof HTMLElement)||!e.isConnected||!t.isConnected)return!1;const n=t.getBoundingClientRect();return n.width>0&&n.height>0&&getComputedStyle(t).display!=="none"}function Oi(){try{const e=m?.serviceSettings??z,t=Array.isArray(e?.prompts)?e.prompts:[],n=Array.isArray(e?.prompt_order)?e.prompt_order:m?.getPromptOrderForCharacter?.(m?.activeCharacter)??[],r=t.map(l=>[l?.identifier||"",l?.role||"",l?.enabled===!1?0:1,l?.marker?1:0,qr(String(l?.content??""))].join(":")),o=n.map(l=>[l?.identifier||"",l?.enabled===!1?0:1].join(":")),a=Array.isArray(Q.chat)?Q.chat:[],i=a[a.length-1],s=i?[a.length,i.send_date||"",qr(String(i.mes??i.content??"").slice(-512))].join(":"):`${a.length}:`;return[io(),We?.()||"",e?.preset_settings_openai||z?.preset_settings_openai||"",e?.openai_max_context??"",e?.openai_max_tokens??"",r.join("|"),o.join("|"),s].join("||")}catch(e){return console.debug(`${D} Failed to build prompt manager token refresh signature`,e),""}}function pI(){const e=m?.tokenHandler?.getCounts?.(),t=document.querySelector(S);if(!e||!t)return!1;const n=Array.from(t.querySelectorAll("li.completion_prompt_manager_prompt[data-pm-identifier]"));return n.length===0?!1:n.every(r=>{const o=r.dataset.pmIdentifier;return o&&Number.isFinite(Number(e[o]))})}function fc(){const e=bn();e.displayFrame||(e.displayFrame=requestAnimationFrame(()=>{e.displayFrame=0,MI()}))}function mI(){const e=bn();e.pendingFrame||(e.pendingFrame=requestAnimationFrame(()=>{e.pendingFrame=0,RI()}))}function fI(e,t){const r=x().state;if(!r?.rangeSelection?.active)return!1;const o=t.closest(`${S} li.completion_prompt_manager_prompt[data-pm-identifier]`);if(!(o instanceof HTMLElement))return!1;const a=$u(r).find(i=>i?.id===o.dataset.pmIdentifier);return a?(lc(r,a,e),!0):!1}function it(){(!f.openAITokenizerBulkBridge||typeof f.openAITokenizerBulkBridge!="object")&&(f.openAITokenizerBulkBridge={});const e=f.openAITokenizerBulkBridge;e.cache instanceof Map||(e.cache=new Map),(!e.stats||typeof e.stats!="object")&&(e.stats={prepareCalls:0,prepareMessages:0,prepareEmpty:0,prepareErrors:0,ajaxBatches:0,ajaxBatchMessages:0,ajaxHits:0,ajaxMisses:0,ajaxFallbacks:0,ajaxErrors:0,worldInfoPrepareCalls:0,worldInfoPrepareMessages:0,worldInfoPrepareEmpty:0,worldInfoPrepareErrors:0});for(const t of["prepareCalls","prepareMessages","prepareEmpty","prepareErrors","ajaxBatches","ajaxBatchMessages","ajaxHits","ajaxMisses","ajaxFallbacks","ajaxErrors","worldInfoPrepareCalls","worldInfoPrepareMessages","worldInfoPrepareEmpty","worldInfoPrepareErrors"])typeof e.stats[t]!="number"&&(e.stats[t]=0);return typeof e.failureCount!="number"&&(e.failureCount=0),typeof e.disabledUntil!="number"&&(e.disabledUntil=0),e}function U_(e=it()){return Date.now()<Number(e.disabledUntil||0)}function gI(e=it()){e.failureCount=0,e.disabledUntil=0}function bI(e=it(),t=null){e.failureCount=Number(e.failureCount||0)+1,e.failureCount>=lR&&(e.disabledUntil=Date.now()+cR,console.debug(`${D} OpenAI tokenizer bulk disabled temporarily after repeated failures`,t))}function hI(){const e=it();if(e.ajaxPatched)return;const t=globalThis.jQuery;if(!t||typeof t.ajax!="function"){console.debug(`${D} jQuery.ajax unavailable; OpenAI tokenizer bulk bridge was not installed`);return}const n=t.ajax;e.originalAjax=n,t.ajax=function(...o){const a=_I(o);return!a||!yI(a.options)?n.apply(this,o):EI(this,o,a.options)||n.apply(this,o)},e.ajaxPatched=!0}function _I(e){const t=e[0];return typeof t=="string"?{options:{...e[1]&&typeof e[1]=="object"?e[1]:{},url:t}}:t&&typeof t=="object"?{options:t}:null}function yI(e){if(!Sa()||e?.async===!1||String(e?.method||e?.type||"GET").toUpperCase()!=="POST")return!1;const n=W_(e?.url);return!!(n&&n.origin===location.origin&&n.pathname==="/api/tokenizers/openai/count")}function EI(e,t,n){const r=SI(n);if(!r)return null;const o=it();return r.then(a=>{if(!a)return o.stats.ajaxFallbacks+=1,o.originalAjax.apply(e,t);o.stats.ajaxHits+=1;const i={token_count:a.count};return $m(n.success,i,"success",null),$m(n.complete,null,"success"),i}).catch(a=>(o.stats.ajaxErrors+=1,console.debug(`${D} OpenAI tokenizer bulk ajax fallback`,a),o.originalAjax.apply(e,t)))}function SI(e){const t=it(),n=W_(e?.url),r=TI(e),o=n?.searchParams?.get("model")||io();if(!r||!o)return t.stats.ajaxMisses+=1,null;const a=Us(o,r),i=t.cache.get(a);return typeof i=="number"?Promise.resolve({count:i}):t.pending?Promise.resolve(t.pending).then(()=>{const s=t.cache.get(a);return typeof s=="number"?{count:s}:Dm(o,r,a)}):Dm(o,r,a)}function Dm(e,t,n){const r=it();(!r.ajaxBatch||typeof r.ajaxBatch!="object")&&(r.ajaxBatch={entries:[],byKey:new Map,timer:null}),r.ajaxBatch.byKey instanceof Map||(r.ajaxBatch.byKey=new Map),Array.isArray(r.ajaxBatch.entries)||(r.ajaxBatch.entries=[]);const o=r.ajaxBatch.byKey.get(n);if(o?.promise)return o.promise;let a,i;const s=new Promise((c,u)=>{a=c,i=u}),l={model:e,message:t,key:n,promise:s,resolve:a,reject:i};return r.ajaxBatch.entries.push(l),r.ajaxBatch.byKey.set(n,l),r.ajaxBatch.timer||(r.ajaxBatch.timer=setTimeout(vI,sR)),s}function vI(){const e=it(),t=e.ajaxBatch;if(!t||!Array.isArray(t.entries)||t.entries.length===0){t&&(t.timer=null);return}const n=t.entries.splice(0,t.entries.length);t.byKey?.clear?.(),t.timer=null;const r=new Map;for(const o of n){const a=r.get(o.model)??[];a.push(o),r.set(o.model,a)}for(const[o,a]of r.entries())e.stats.ajaxBatches+=1,e.stats.ajaxBatchMessages+=a.length,zs(o,a).then(i=>{i.forEach((s,l)=>{const c=a[l];Vs(c.key,s),c.resolve({count:s})})}).catch(i=>{e.stats.ajaxMisses+=a.length;for(const s of a)s.reject(i)})}function TI(e){try{const t=typeof e?.data=="string"?JSON.parse(e.data):e?.data;return!Array.isArray(t)||t.length!==1?null:Ld(t[0],{allowEmptyContent:!0})}catch{return null}}async function xI(e={}){const t=it();if(t.stats.prepareCalls+=1,!Sa())return!1;const n=io(),r=await kI(e),o=[],a=new Set,i=new Map;for(let l=0;l<r.length;l+=1){l>0&&l%ay===0&&await Bu();const c=r[l],u=Us(n,c,i);a.has(u)||t.cache.has(u)||(a.add(u),o.push({key:u,message:c}))}if(o.length===0)return t.stats.prepareEmpty+=1,!0;const s=zs(n,o).then(l=>(l.forEach((c,u)=>{Vs(o[u].key,c)}),t.stats.prepareMessages+=o.length,!0)).catch(l=>{throw t.stats.prepareErrors+=1,l}).finally(()=>{t.pending===s&&(t.pending=null)});return t.pending=s,s}async function wI(e={}){const t=it();if(t.stats.worldInfoPrepareCalls+=1,!Sa())return!1;const n=io(),r=CI(e),o=[],a=new Set,i=new Map;for(const l of r){const c=Us(n,l,i);a.has(c)||t.cache.has(c)||(a.add(c),o.push({key:c,message:l}))}if(o.length===0)return t.stats.worldInfoPrepareEmpty+=1,!0;const s=zs(n,o).then(l=>(l.forEach((c,u)=>{Vs(o[u].key,c)}),t.stats.worldInfoPrepareMessages+=o.length,!0)).catch(l=>{throw t.stats.worldInfoPrepareErrors+=1,l}).finally(()=>{t.pending===s&&(t.pending=null)});return t.pending=s,s}function CI(e={}){const t=[],n=new Set,r=i=>t.length>=Go?!1:(typeof i!="string"||i.length===0||n.has(i)||(n.add(i),t.push(i)),!0);r(e.textToScan);let o=[""];const a=Array.isArray(e.entries)?e.entries:[];for(const i of a){if(t.length>=Go)break;const s=typeof i?.content=="string"?i.content:"",l=[],c=new Set,u=p=>{c.has(p)||(c.add(p),l.push(p))};if(i?.maySkip)for(const p of o)u(p);for(const p of o)u(`${p}${s}
`);if(o=l.slice(0,Go),!i?.ignoreBudget){for(const p of o)if(!r(p))break}}return t.map(i=>Ld({role:"system",content:i},{allowEmptyContent:!0})).filter(Boolean)}async function kI(e){const t=[];let n=0;const r=async(o,a={})=>{if(t.length>=Go)return!1;const i=Ld(o,a);return i&&t.push(i),n+=1,n%ay===0&&await Bu(),t.length<Go};return await r({role:"system",content:e.newChatContent}),await r({role:"user",content:e.sendIfEmpty}),await r({role:"system",content:e.newExampleChatContent}),await AI(e.prompts,r),await PI(e,r),await LI(e.messageExamples,r),t}async function AI(e,t){const n=Array.isArray(e?.collection)?e.collection:[];for(const r of n)if(!await t({role:r?.role||"system",content:r?.content}))return}async function PI(e,t){const n=Array.isArray(e.messages)?e.messages:[],r=Number(e.oaiSettings?.names_behavior)===1,o=e.promptManager||m;for(let a=0;a<n.length;a++){const i=n[a];if(!i||typeof i!="object")continue;const s={...i,identifier:`chatHistory-${n.length-a}`},l=II(s,o),c={role:l?.role||i.role||"system",content:l?.content??i.content};if(!await t(c))return;if(r&&i.name){const u=typeof o?.isValidName=="function"&&o.isValidName(i.name)?i.name:typeof o?.sanitizeName=="function"?o.sanitizeName(i.name):i.name;if(!await t({...c,name:u}))return}if(Array.isArray(i.invocations)){for(const u of i.invocations)if(!await t({role:"tool",content:u?.result||"[No content]"}))return}}}async function LI(e,t){if(Array.isArray(e)){for(const n of e)if(Array.isArray(n))for(const r of n){const o={role:"system",content:r?.content||""};if(!await t(o)||r?.name&&!await t({...o,name:r.name}))return}}}function II(e,t){try{if(typeof t?.preparePrompt=="function")return t.preparePrompt(e)}catch(n){console.debug(`${D} Failed to prepare OpenAI tokenizer bulk prompt`,n)}return e}function Ld(e,{allowEmptyContent:t=!1}={}){if(!e||typeof e!="object")return null;const n={};n.role=e.role||"system",Object.prototype.hasOwnProperty.call(e,"content")&&e.content!==void 0&&(n.content=e.content),e.name!==void 0&&e.name!==null&&e.name!==""&&(n.name=e.name),e.tool_calls!==void 0&&(n.tool_calls=e.tool_calls),e.reasoning!==void 0&&e.reasoning!==null&&e.reasoning!==""&&(n.reasoning=e.reasoning);const r=Object.prototype.hasOwnProperty.call(n,"content"),o=Object.prototype.hasOwnProperty.call(n,"tool_calls");return!r&&!o||!t&&typeof n.content=="string"&&n.content.length===0&&!o&&!n.name?null:n}async function zs(e,t){const n=it();if(U_(n))throw new Error("BaiBaoKu bulk count is temporarily disabled after repeated failures");const r=new Headers(me());r.set("content-type","application/json");try{const o=await fetch(aR,{method:"POST",headers:r,cache:"no-store",body:JSON.stringify({model:e,messages:t.map(s=>s.message)})}),a=await o.json().catch(()=>null),i=a?.data?.counts;if(!o.ok||a?.ok!==!0||!Array.isArray(i)||i.length!==t.length)throw new Error(a?.error?.message||`BaiBaoKu bulk count failed: HTTP ${o.status}`);return gI(n),i.map(s=>Number(s))}catch(o){throw bI(n,o),o}}function Vs(e,t){const n=Number(t);if(!e||!Number.isFinite(n))return;const r=it();for(r.cache.set(e,n);r.cache.size>iR;){const o=r.cache.keys().next().value;r.cache.delete(o)}}function Us(e,t,n=null){const r=JSON.stringify(t),o=`${e}:${r}`;if(n instanceof Map&&n.has(o))return n.get(o);const a=`${e}-${qr(r)}`;return n?.set?.(o,a),a}function Sa(){if(N.tokenizerBulkCountEnabled===!1||U_())return!1;const e=globalThis.__baibaokuEarlyBridge;return typeof e?.isTokenizerBulkCountEnabled=="function"?e.isTokenizerBulkCountEnabled()!==!1:e?.tokenizerBulkCountEnabled!==!1}function W_(e){try{if(typeof e=="string")return new URL(e,location.href);if(e instanceof URL)return new URL(e.href,location.href);if(e&&typeof e.url=="string")return new URL(e.url,location.href)}catch{return null}return null}function $m(e,...t){if(typeof e=="function")try{e(...t)}catch(n){console.debug(`${D} OpenAI tokenizer bulk ajax callback failed`,n)}}function K_(){return!!(m?.tryGenerate&&(N.presetToggleOptimizationEnabled||N.presetSwitchOptimizationEnabled))}function Id(){mI()}function RI(){const e=document.querySelector(S);if(!e)return;for(const o of e.querySelectorAll("li.completion_prompt_manager_prompt[data-pm-identifier]"))Pd(o,null);const n=document.querySelector(".completion_prompt_manager_header")?.querySelector(":scope > div:last-child"),r=n?.querySelector("span");n&&r&&n.textContent?.replace(r.textContent||"","")!==" - "&&n.replaceChildren(r,document.createTextNode(" - ")),kn(Is()?void 0:null)}function MI(){const e=m?.tokenHandler?.getCounts?.(),t=document.querySelector(S);if(!e||!t)return;const n=Array.isArray(m?.serviceSettings?.prompts)?m.serviceSettings.prompts.filter(Boolean):[],r=new Map(n.map(c=>[c.identifier,c])),o=(m?.serviceSettings?.openai_max_context??0)-(m?.serviceSettings?.openai_max_tokens??0),a=(m?.tokenUsage??0)>o*.8;for(const c of t.querySelectorAll("li.completion_prompt_manager_prompt[data-pm-identifier]")){const u=c.dataset.pmIdentifier,p=e[u]??0,b=r.get(u),v=b?Mu({prompt:b,tokens:p,isTokenUsageWarning:a}):null;Pd(c,p,v)}const s=document.querySelector(".completion_prompt_manager_header")?.querySelector(":scope > div:last-child"),l=s?.querySelector("span");if(s&&l){const c=` ${m.tokenUsage??0} `;s.textContent?.replace(l.textContent||"","")!==c&&s.replaceChildren(l,document.createTextNode(c))}kn(Ou())}const Zn="__baiBaiToolkitPresetPromptCodeMirrorEditor",gc="bai_bai_toolkit_preset_prompt_codemirror_editor_style",Nm="bai_bai_toolkit_preset_backup_preview_ui_style",bc="bai_bai_toolkit_preset_interface_collapse_style",Hm="bai_bai_toolkit_preset_scroll_style",hc="bai_bai_toolkit_preset_drag_style",Rd=[{key:"presetScrollOptimizationEnabled",selector:"#bai_bai_toolkit_preset_scroll_optimization_enabled"},{key:"presetDragOptimizationEnabled",selector:"#bai_bai_toolkit_preset_drag_optimization_enabled"},{key:"presetMobileWholeRowDragEnabled",selector:"#bai_bai_toolkit_preset_mobile_whole_row_drag_enabled"},{key:"presetToggleOptimizationEnabled",selector:"#bai_bai_toolkit_preset_toggle_optimization_enabled"}],kl="__baiBaiToolkitPresetBackupPreviewApp",Gm="__baiBaiToolkitPresetBackupPreviewUi",sr="__baiBaiToolkitPresetInterfaceCollapseObserver",Bi="__baiBaiToolkitPresetInterfaceCollapseExternalToggleHandler",Di="__baiBaiToolkitPresetDragHandler",Al="__baiBaiToolkitPresetDragPatch",Fr="__baiBaiToolkitPresetAutoBackupFetch",Fm="__baiBaiToolkitPresetSwitchBeforeHandler",zm="__baiBaiToolkitPresetSwitchHandler",Vm="__baiBaiToolkitPresetModelChangeHandler",Um="__baiBaiToolkitPresetChatLoadedHandler",Ga="__baiBaiToolkitPresetContextTokenRefresh",Wm="__baiBaiToolkitPresetGroupPresetDeletedHandler",Km="__baiBaiToolkitPresetGroupPresetImportHandler",jm="__baiBaiToolkitPresetGroupPresetRenamedHandler",qm="__baiBaiToolkitPresetAutoBackupRenameHandler",Ym="__baiBaiToolkitPresetSelectChangeHandler",Qm="__baiBaiToolkitPresetDeleteHandler",Xm="__baiBaiToolkitPresetListActionHandler",Jm="__baiBaiToolkitPresetToggleHandler",Zm="__baiBaiToolkitPresetSaveHandler",ef="__baiBaiToolkitPresetUpdatePendingChangesHandler",tf="__baiBaiToolkitPresetExportPendingChangesHandler",Fa="__baiBaiToolkitPresetVueListManager",No="__baiBaiToolkitPresetVueListRenderPatch",Ot="__baiBaiToolkitPresetGroupGenerationGatePatch",Pl="__baiBaiToolkitPresetVueTouchScrollGuard",_c="__baiBaiToolkitPresetVueDragPlacementListener",yc="__baiBaiToolkitPresetVueGroupHeaderCustomDragListener",$i="__baiBaiToolkitPresetVueDynamicDragDelayHandler",nf="__baiBaiToolkitPresetPendingChangesLifecycleHandler",Ws="bai-bai-preset-vue-list-host",Rt="bai-bai-preset-vue-dragging",Rr="bai-bai-preset-vue-drag-ready-feedback",Ho="bai-bai-preset-drop-target",va="bai-bai-preset-top-level-draggable",OI="bai-bai-preset-group-child-draggable",BI=`>li:is(.${va},.completion_prompt_manager_prompt_draggable)`,Kt="--bai-bai-preset-list-gap",DI="__bai_bai_preset_header",$I="__bai_bai_preset_separator",Ks="__bai_bai_preset_global_library",js="__bai_bai_preset_favorites",Zr="baibaiToolkit.presetPromptGroups",Ec="baibaiToolkit.presetPromptFavorites",NI="bai-bai-toolkit",j_="preset-global-prompts",q_="library",Y_=2,HI="bai-bai-global-library",GI="entryGrouping",Ll=180,Bo=180,Il=180,Rl="cubic-bezier(0.2, 0, 0, 1)",Ta=40,FI=44,zI=120,VI=1e3,UI=60,WI=3e4,rf=1001,Sc=4,Md=320,Ni=10,KI=6,vc=350,jI=300,Q_=2201,X_=2202,qI=12,YI=500,Et="bai_bai_toolkit_preset_interface_collapse_wrapper",oa="bai-bai-preset-interface-collapse-content",J_="bai_bai_toolkit_preset_interface_collapse_placeholder",Hi="data-bai-bai-preset-interface-collapse-block",QI=250,Tc=20,XI="SillyTavern-Layout",qs="te-preset-wrapper",Gi=[`#${Et}`,`#${qs}`,"#range_block_openai","#openai_settings","#te_collapse_preset","#te-placeholder-preset-1","#te-placeholder-preset-2","#te-placeholder-preset-3",`[${Hi}]`,`[id^="${J_}_"]`].join(", "),Z_="#settings_preset_openai",JI="#delete_oai_preset",ZI="#update_oai_preset",eR="#export_oai_preset",xa="#openai_settings",Od="#left-nav-panel",L="bai_bai_toolkit_preset_backup_preview",ey="bai-bai-preset-backup-closing",S="#completion_prompt_manager_list",ty="#completion_prompt_manager_popup_entry_form_save",tR="#completion_prompt_manager_popup_entry_form_reset",nR="#completion_prompt_manager_popup_entry_form_close, #completion_prompt_manager_popup_close_button",ny="completion_prompt_manager_popup_entry_form_prompt",rR="#completion_prompt_manager_popup_entry_form_prompt",ry='textarea.maximized_textarea[data-for="completion_prompt_manager_popup_entry_form_prompt"]',Lt="bai_bai_preset_prompt_codemirror_editor",oR="bai-bai-toolkit-preset-prompt-codemirror-editor",Bd="bai-bai-toolkit-preset-prompt-source-hidden",oy="bai-bai-toolkit-preset-prompt-readonly",oi="bai-bai-toolkit-preset-prompt-maximized",Ys='.prompt_manager_prompt_controls, .bai-bai-preset-prompt-actions-hint, .bai-bai-preset-prompt-actions, .bai-bai-preset-prompt-action-button, [data-preset-prompt-action], .prompt-manager-detach-action, .prompt-manager-inspect-action, .prompt-manager-edit-action, .prompt-manager-toggle-action, .bai-bai-preset-group-actions, .bai-bai-preset-group-toggle, a, button, input, select, textarea, [contenteditable="true"]',aR="/api/plugins/baibaoku/v1/tokenizers/bulk-count",za="__baibaokuTokenizerBulkBridge",iR=5e3,sR=8,ay=80,Go=800,lR=3,cR=45e3,Va="__baiBaiToolkitPromptManagerTokenRefreshQueue",Dd=1e3,Qs=250,ln=1500,of="/api/presets/save",uR="/api/plugins/baibaoku/v1/preset-backups/save",dR="/api/plugins/baibaoku/v1/preset-backups/save/list",pR="/api/plugins/baibaoku/v1/preset-backups/save/rename",mR="/api/plugins/baibaoku/v1/preset-backups/save/note",fR="/api/plugins/baibaoku/v1/preset-backups/save/delete",gR="/api/plugins/baibaoku/v1/preset-backups/download",Pt=2e3,xc=80,bR=250,hR=8,iy=750,qt="bai-bai-toolkit-preset-drag-ready",lr="bai-bai-toolkit-preset-drag-active",Xs="bai-bai-toolkit-preset-drag-source",Re="bai-bai-toolkit-preset-drag-clone",$d="bai-bai-toolkit-preset-drag-indicator",sy=new Set(["charDescription","charPersonality","scenario","personaDescription","worldInfoBefore","worldInfoAfter"]),ly=new Set(["charDescription","charPersonality","scenario","personaDescription","worldInfoBefore","worldInfoAfter","main","chatHistory","dialogueExamples"]),cy=new Set(["chatHistory","worldInfoBefore","worldInfoAfter","charDescription","charPersonality","scenario","personaDescription","dialogueExamples"]),uy="bai-bai-preset-effective-token-header",_R="预设总Token: 计算中",wc="已启用预设条目 Token 总数（不含聊天记录、世界书、角色信息等上下文注入）",Lo=5,Cc=500,yR=6,ER=180,Fn=(e="prompt manager token refresh")=>{fo(e,{delayMs:Dd})},dy=(e="prompt manager token refresh after preset switch")=>{fo(e,{delayMs:Qs,forceVisible:!0})};let kc=!0;function py(){wa(),SR()}function SR(){if(f[qm]||!w.PRESET_RENAMED_BEFORE)return;const e=t=>{t?.apiId!=="openai"||!t.oldName||!t.newName||CR()};f[qm]=e,M.on(w.PRESET_RENAMED_BEFORE,e)}function vR(e){kc=e!==!1,wa()}function wa(){const e=globalThis[Fr];if(e?.wrappedFetch)return e.isEnabled=()=>N.presetAutoBackupEnabled!==!1&&kc,e.skipCount=Number(e.skipCount)||0,e;const t=globalThis.fetch;if(typeof t!="function")return null;const n={originalFetch:t.bind(globalThis),wrappedFetch:null,skipCount:0,isEnabled:()=>N.presetAutoBackupEnabled!==!1&&kc};return n.wrappedFetch=function(o,a){const i=xR(o,a),s=i?AR(a):null;n.isEnabled()&&i&&(n.renameSuppress?kR(n,s):n.skipCount>0?n.skipCount-=1:wR(n,o,a,s));const l=n.originalFetch(o,a);return PR(s)&&LR(n,s,l),l},n.wrappedFetch[Fr]=!0,globalThis[Fr]=n,globalThis.fetch=n.wrappedFetch,n}function TR(){const e=wa();return e&&(e.skipCount+=1),e}function xR(e,t){if(GR(e,t)!=="POST")return!1;const n=HR(e);if(!n||!n.includes(of))return!1;try{return new URL(n,location.href).pathname===of}catch{return!1}}async function wR(e,t,n,r=null){const o=r??await $R(t,n);Js(o)&&await my(e,o)}async function my(e,t){try{await e.originalFetch(uR,{method:"POST",headers:me(),body:JSON.stringify(t)})}catch(n){console.debug(`${D} Failed to create preset auto backup`,n)}}function CR(){const e=wa();e&&(e.renameSuppress={lastBody:null})}function kR(e,t){e.renameSuppress&&Js(t)&&(e.renameSuppress.lastBody=t)}function AR(e){try{const t=e&&typeof e.body=="string"?e.body:null;return t?JSON.parse(t):null}catch{return null}}function PR(e){return!!(Js(e)&&e.apiId==="openai")}function LR(e,t,n){e.activeOpenAiPresetSaveRequests instanceof Map||(e.activeOpenAiPresetSaveRequests=new Map);const r=t.name,o=e.activeOpenAiPresetSaveRequests.get(r)??new Set,a=Promise.resolve(n).then(l=>new Promise(c=>setTimeout(c,0,l)),l=>new Promise((c,u)=>setTimeout(u,0,l)));o.add(a),e.activeOpenAiPresetSaveRequests.set(r,o);const i=hn();i&&(r===i.oldName||r===i.newName)&&(i.latestSaveRequest={presetName:r,revision:_a(r),promise:a});const s=()=>{o.delete(a),o.size||e.activeOpenAiPresetSaveRequests.delete(r)};a.then(s,s)}function af(e){const n=globalThis[Fr]?.activeOpenAiPresetSaveRequests?.get(e);return n instanceof Set?Array.from(n):[]}function IR(){const e=globalThis[Fr];if(!e?.renameSuppress)return;const t=e.renameSuppress.lastBody;e.renameSuppress=null,e.isEnabled()&&Js(t)&&my(e,t)}function RR(){return!!globalThis[Fr]?.renameSuppress}function hn(){const e=f.openAiPresetRenameSaveGate;return e&&typeof e=="object"?e:null}function sf(){return!!hn()}function MR(e,t){const n=hn();n&&Ac(n,lf(n)),wa();let r;const o={oldName:e,newName:t,renamed:!1,latestSaveRequest:null,finalSavedRevision:null,deferredSaveTail:Promise.resolve(),completionPromise:new Promise(i=>{r=i}),resolveCompletion:null,timeout:0};o.resolveCompletion=r,o.timeout=setTimeout(()=>{hn()===o&&(console.debug(`${D} Preset rename save gate timed out`,{oldName:o.oldName,newName:o.newName,renamed:o.renamed}),Ac(o,lf(o)))},WI),f.openAiPresetRenameSaveGate=o;const a=[...af(e),...af(t)];return Promise.allSettled(Array.from(new Set(a)))}function OR(e,t){const n=hn();return!n||n.oldName!==e||n.newName!==t?!1:(n.renamed=!0,!0)}function lf(e){return e?.renamed||z?.preset_settings_openai===e?.newName?e?.newName:e?.oldName}function Ac(e,t){return!e||hn()!==e?!1:(clearTimeout(e.timeout),delete f.openAiPresetRenameSaveGate,e.resolveCompletion(t),!0)}async function BR(){const e=hn();if(!e||!e.renamed)return;const t=e.latestSaveRequest;let n=!1;if(t?.promise)try{n=(await t.promise)?.ok!==!1}catch(r){console.debug(`${D} Failed to finish the final renamed preset save`,r)}n&&Number.isFinite(t.revision)&&(e.finalSavedRevision=t.revision,n_(t.presetName,t.revision)),Ac(e,e.newName)}function DR(e){const t=hn();return!t||e!==t.oldName&&e!==t.newName?e:t.renamed?t.newName:t.oldName}function Js(e){return!!(e&&typeof e=="object"&&!Array.isArray(e)&&typeof e.name=="string"&&e.name.trim()&&e.preset&&typeof e.preset=="object")}async function $R(e,t){if(Object.prototype.hasOwnProperty.call(t||{},"body"))return NR(t.body);if(!Nd(e)||e.bodyUsed||!e.body)return null;try{return await e.clone().json().catch(()=>null)}catch{return null}}async function NR(e){return typeof e=="string"?cf(e):typeof Blob=="function"&&e instanceof Blob?cf(await e.text()):null}function cf(e){try{return JSON.parse(e)}catch{return null}}function HR(e){return typeof e=="string"?e:e instanceof URL?e.href:Nd(e)?e.url:""}function GR(e,t){return String(t?.method||(Nd(e)?e.method:"")||"GET").toUpperCase()}function Nd(e){return typeof Request=="function"&&e instanceof Request}function FR(){sM(),fy(),zR()}function fy(){const e=document.querySelector(xa);if(!(e instanceof HTMLElement)||!e.parentElement)return!1;let t=document.getElementById(L);return t instanceof HTMLElement||(t=document.createElement("div"),t.id=L,t.className="bai-bai-preset-backup-preview"),VR(t),(t.nextElementSibling!==e||t.parentElement!==e.parentElement)&&e.parentElement.insertBefore(t,e),!0}function zR(){if(f[Gm]||typeof MutationObserver!="function"||!document.body)return;const e={observer:null,pending:!1},t=()=>{e.pending=!1,fy()},n=()=>{e.pending||(e.pending=!0,typeof requestAnimationFrame=="function"?requestAnimationFrame(t):setTimeout(t,0))},r=new MutationObserver(n);e.observer=r,r.observe(document.body,{childList:!0,subtree:!0}),f[Gm]=e}async function VR(e){if(!(e instanceof HTMLElement)||f[kl]?.host===e)return;const t=f[kl];if(t?.app)try{t.app.unmount()}catch(n){console.debug(`${D} Failed to unmount preset backup preview app`,n)}try{const n=await Hh();if(!document.documentElement.contains(e))return;const r=UR(),o=n.createApp(WR(n,r));o.mount(e),f[kl]={host:e,app:o,state:r}}catch(n){console.debug(`${D} Failed to mount preset backup preview Vue app`,n)}}function UR(){return{items:[],query:"",page:1,hasLoaded:!1,loading:!1,status:"",composing:!1,renameDialogOpen:!1,renameTarget:null,renameValue:"",renameComposing:!1,renaming:!1,noteDialogOpen:!1,noteTarget:null,noteValue:"",noteComposing:!1,savingNote:!1,deleteDialogOpen:!1,deleteTarget:null,deleting:!1,selectionMode:!1,selectedFileNames:[],batchDeleting:!1,importingFileName:"",closing:!1,animating:!1}}function WR(e,t){const n=e.h;return{name:"PresetBackupPreview",data(){return t},computed:{normalizedQuery(){return this.query.trim().toLowerCase()},filteredItems(){return this.normalizedQuery?this.items.filter(r=>r.searchText.includes(this.normalizedQuery)):this.items},pageCount(){return Math.max(1,Math.ceil(this.filteredItems.length/Lo))},safePage(){return Math.min(Math.max(1,this.page),this.pageCount)},pagedItems(){const o=(this.safePage-1)*Lo;return this.filteredItems.slice(o,o+Lo)},selectedCount(){return this.selectedFileNames.length},pageAllSelected(){const r=this.pagedItems;return r.length>0&&r.every(o=>this.selectedFileNames.includes(o.fileName))},displayStatus(){if(this.status)return this.status;const r=this.items.length,o=this.filteredItems.length;if(r<=0)return"";const a=o>0?(this.safePage-1)*Lo+1:0,i=o>0?Math.min(this.safePage*Lo,o):0;return this.normalizedQuery?`显示 ${a}-${i} / ${o} 个匹配备份，共 ${r} 个备份`:`显示 ${a}-${i} / ${r} 个备份`}},watch:{page(){this.clampPage()},filteredItems(){this.clampPage()}},methods:{clampPage(){const r=Math.min(Math.max(1,this.page),this.pageCount);r!==this.page&&(this.page=r)},setQuery(r){this.query=String(r??""),this.page=1},onSearchInput(r){r?.isComposing||this.composing||this.setQuery(r?.target?.value??"")},onSearchCompositionStart(){this.composing=!0},onSearchCompositionEnd(r){this.composing=!1,this.setQuery(r?.target?.value??"")},async refresh(){if(!this.loading){this.loading=!0,this.status="正在刷新备份列表...";try{this.items=await JR(),this.page=1,this.hasLoaded=!0,this.status=""}catch(r){console.warn(`${D} Failed to refresh preset backups`,r),this.status=`刷新失败：${r?.message||"未知错误"}`,this.hasLoaded=!0}finally{this.loading=!1}}},prevPage(){this.page=Math.max(1,this.safePage-1)},nextPage(){this.page=Math.min(this.pageCount,this.safePage+1)},openRenameDialog(r){!r||this.renaming||this.deleting||this.importingFileName||(this.deleteDialogOpen=!1,this.deleteTarget=null,this.renameTarget=r,this.renameValue=r.name||"",this.renameComposing=!1,this.renameDialogOpen=!0,this.status="",e.nextTick(()=>{const o=this.$refs.renameInput;o instanceof HTMLInputElement&&(o.focus(),o.select())}))},closeRenameDialog(r=!1){this.renaming&&!r||(this.renameDialogOpen=!1,this.renameTarget=null,this.renameValue="",this.renameComposing=!1)},openDeleteDialog(r){!r||this.deleting||this.renaming||this.importingFileName||(this.renameDialogOpen=!1,this.renameTarget=null,this.deleteTarget=r,this.deleteDialogOpen=!0,this.status="")},closeDeleteDialog(r=!1){(this.deleting||this.batchDeleting)&&!r||(this.deleteDialogOpen=!1,this.deleteTarget=null)},openNoteDialog(r){!r||this.savingNote||this.renaming||this.deleting||this.batchDeleting||this.importingFileName||(this.renameDialogOpen=!1,this.renameTarget=null,this.deleteDialogOpen=!1,this.deleteTarget=null,this.noteTarget=r,this.noteValue=r.note||"",this.noteComposing=!1,this.noteDialogOpen=!0,this.status="",e.nextTick(()=>{const o=this.$refs.noteInput;if(o instanceof HTMLTextAreaElement){o.focus();const a=o.value.length;o.setSelectionRange(a,a)}}))},closeNoteDialog(r=!1){this.savingNote&&!r||(this.noteDialogOpen=!1,this.noteTarget=null,this.noteValue="",this.noteComposing=!1)},onNoteInput(r){this.noteValue=String(r?.target?.value??"").slice(0,Cc)},onNoteCompositionStart(){this.noteComposing=!0},onNoteCompositionEnd(r){this.noteComposing=!1,this.onNoteInput(r)},async confirmNote(){const r=this.noteTarget;if(!r||this.savingNote)return;const o=this.noteValue.trim();this.savingNote=!0,this.status=o?"正在保存备注...":"正在清除备注...";try{const a=Pc(await eM(r.fileName,o));this.items=this.items.map(i=>i.fileName===r.fileName?a||{...i,note:o,searchText:`${i.name} ${o} ${i.createdAt}`.toLowerCase()}:i),this.status=o?"已保存备注":"已清除备注",this.closeNoteDialog(!0)}catch(a){console.warn(`${D} Failed to update preset backup note`,a),this.status=`备注保存失败：${a?.message||"未知错误"}`}finally{this.savingNote=!1}},onRenameInput(r){this.renameValue=String(r?.target?.value??"")},onRenameCompositionStart(){this.renameComposing=!0},onRenameCompositionEnd(r){this.renameComposing=!1,this.onRenameInput(r)},onRenameKeydown(r){r?.key!=="Enter"||r.isComposing||this.renameComposing||(r.preventDefault(),this.confirmRename())},async confirmRename(){const r=this.renameTarget,o=this.renameValue.trim();if(!(!r||this.renaming)){if(!o){this.status="备份名称不能为空";return}this.renaming=!0,this.status="正在重命名备份...";try{const a=Pc(await ZR(r.fileName,o));this.items=this.items.map(i=>i.fileName===r.fileName?a||{...i,name:Fo(o),searchText:`${Fo(o)} ${i.note||""} ${i.createdAt}`.toLowerCase()}:i),this.status=`已重命名：${Fo(o)}`,this.closeRenameDialog(!0)}catch(a){console.warn(`${D} Failed to rename preset backup`,a),this.status=`重命名失败：${a?.message||"未知错误"}`}finally{this.renaming=!1}}},async confirmDelete(){const r=this.deleteTarget;if(!(!r||this.deleting)){this.deleting=!0,this.status="正在删除备份...";try{await uf(r.fileName),this.items=this.items.filter(o=>o.fileName!==r.fileName),this.status=`已删除：${r.name||r.fileName}`,this.closeDeleteDialog(!0)}catch(o){console.warn(`${D} Failed to delete preset backup`,o),this.status=`删除失败：${o?.message||"未知错误"}`}finally{this.deleting=!1}}},toggleSelectionMode(){this.deleting||this.batchDeleting||this.renaming||this.savingNote||this.importingFileName||(this.selectionMode=!this.selectionMode,this.selectedFileNames=[],this.status="",this.selectionMode&&(this.renameDialogOpen=!1,this.noteDialogOpen=!1,this.deleteDialogOpen=!1))},exitSelectionMode(){this.batchDeleting||(this.selectionMode=!1,this.selectedFileNames=[])},toggleSelect(r){!r||this.batchDeleting||(this.selectedFileNames=this.selectedFileNames.includes(r.fileName)?this.selectedFileNames.filter(o=>o!==r.fileName):[...this.selectedFileNames,r.fileName])},toggleSelectPage(){if(this.batchDeleting)return;const r=this.pagedItems.map(o=>o.fileName);if(this.pageAllSelected)this.selectedFileNames=this.selectedFileNames.filter(o=>!r.includes(o));else{const o=new Set(this.selectedFileNames);r.forEach(a=>o.add(a)),this.selectedFileNames=Array.from(o)}},openBatchDeleteDialog(){this.batchDeleting||this.selectedFileNames.length<=0||(this.deleteTarget=null,this.deleteDialogOpen=!0,this.status="")},async confirmBatchDelete(){if(this.batchDeleting||this.selectedFileNames.length<=0)return;const r=this.items.filter(p=>this.selectedFileNames.includes(p.fileName)),o=r.length;this.batchDeleting=!0,this.status=`正在删除：0 / ${o}`;let a=0,i=0;const s=[],l=r.slice(),c=async()=>{for(;l.length>0;){const p=l.shift();if(p){try{await uf(p.fileName),this.items=this.items.filter(b=>b.fileName!==p.fileName),this.selectedFileNames=this.selectedFileNames.filter(b=>b!==p.fileName),a+=1}catch(b){console.warn(`${D} Failed to delete preset backup in batch`,b),i+=1,s.push(p.fileName)}this.status=`正在删除：${a+i} / ${o}`}}},u=Math.min(yR,o);await Promise.all(Array.from({length:u},()=>c())),this.batchDeleting=!1,this.deleteDialogOpen=!1,this.deleteTarget=null,this.selectedFileNames=s,this.status=i>0?`已删除 ${a} 个，${i} 个失败`:`已删除 ${a} 个备份`,this.selectedFileNames.length<=0&&(this.selectionMode=!1)},async importBackup(r){if(!(!r||this.importingFileName)){this.importingFileName=r.fileName,this.status=`正在导入：${r.name||r.fileName}`;try{const o=await tM(r.fileName),{apiId:a,name:i,preset:s}=nM(o,r),l=gr(a);if(!l||typeof l.savePreset!="function")throw new Error(`Preset manager not found: ${a}`);const c=oM(l,i),u=TR(),p=u?.skipCount??0;try{await l.savePreset(c,s)}finally{u&&u.skipCount>=p&&(u.skipCount=Math.max(0,p-1))}this.status=`已导入并切换：${c}`}catch(o){console.warn(`${D} Failed to import preset backup`,o),this.status=`导入失败：${o?.message||"未知错误"}`}finally{this.importingFileName=""}}},setActionStatus(r,o){const a=o?.name||"这个备份",i={delete:"删除接口待接入：",download:"下载接口待接入："};this.status=`${i[r]||""}${a}`},toggleDetails(r){r?.preventDefault(),iM(this.$refs.details,this)}},render(){return n("details",{ref:"details",class:{"bai-bai-preset-backup-details":!0,[ey]:this.closing}},[n("summary",{class:"bai-bai-preset-backup-summary",onClick:this.toggleDetails},[n("span",{class:"bai-bai-preset-backup-title"},[n("i",{class:"fa-solid fa-clock-rotate-left"}),n("span","自动备份预设")]),n("span",{class:"bai-bai-preset-backup-summary-meta"},[n("small","备份列表"),n("i",{class:"fa-solid fa-chevron-right bai-bai-preset-backup-chevron"})])]),n("div",{class:"bai-bai-preset-backup-body"},[n("div",{class:"bai-bai-preset-backup-toolbar"},[n("label",{class:"bai-bai-preset-backup-search"},[n("i",{class:"fa-solid fa-magnifying-glass"}),n("input",{class:"text_pole",type:"search",autocomplete:"off",style:"padding-left: 36px !important; background: transparent !important;",placeholder:"搜索备份预设",value:this.query,onInput:this.onSearchInput,onCompositionstart:this.onSearchCompositionStart,onCompositionend:this.onSearchCompositionEnd})]),n("button",{class:{menu_button:!0,menu_button_icon:!0,"bai-bai-preset-backup-batch-toggle":!0,"bai-bai-preset-backup-batch-active":this.selectionMode},type:"button",title:this.selectionMode?"退出批量管理":"批量管理",disabled:this.loading||this.batchDeleting,onClick:this.toggleSelectionMode},[n("i",{class:"fa-solid fa-list-check"})]),n("button",{class:{menu_button:!0,menu_button_icon:!0,"bai-bai-preset-backup-refresh":!0,"bai-bai-preset-backup-refreshing":this.loading},type:"button",title:"刷新备份列表",disabled:this.loading,onClick:this.refresh},[n("i",{class:"fa-solid fa-rotate-right"})])]),this.selectionMode?jR(n,this):null,n("div",{class:"bai-bai-preset-backup-list",role:"list"},this.pagedItems.length?this.pagedItems.map(r=>KR(n,this,r)):[n("div",{class:"bai-bai-preset-backup-empty"},this.hasLoaded?"暂无备份数据":[n("span","刷新获取备份数据"),n("span","保存预设时自动创建备份")])]),n("div",{class:"bai-bai-preset-backup-footer"},[n("div",{class:"bai-bai-preset-backup-status"},this.displayStatus),n("div",{class:"bai-bai-preset-backup-pagination","aria-label":"备份分页"},[n("button",{class:"menu_button menu_button_icon",type:"button",title:"上一页",disabled:this.safePage<=1||this.filteredItems.length<=0,onClick:this.prevPage},[n("i",{class:"fa-solid fa-chevron-left"})]),n("span",{class:"bai-bai-preset-backup-page-label"},`${this.safePage} / ${this.pageCount}`),n("button",{class:"menu_button menu_button_icon",type:"button",title:"下一页",disabled:this.safePage>=this.pageCount||this.filteredItems.length<=0,onClick:this.nextPage},[n("i",{class:"fa-solid fa-chevron-right"})])])]),this.renameDialogOpen?XR(n,this):null,this.noteDialogOpen?YR(n,this):null,this.deleteDialogOpen?QR(n,this):null])])}}}function KR(e,t,n){const r=t.selectionMode,o=r&&t.selectedFileNames.includes(n.fileName);return e("div",{key:n.id,class:{"bai-bai-preset-backup-item":!0,"bai-bai-preset-backup-item-selectable":r,"bai-bai-preset-backup-item-selected":o},role:"listitem",onClick:r?()=>t.toggleSelect(n):void 0},[r?e("span",{class:{"bai-bai-preset-backup-item-check":!0,"bai-bai-preset-backup-item-check-on":o}},[e("i",{class:o?"fa-solid fa-square-check":"fa-regular fa-square"})]):null,e("div",{class:"bai-bai-preset-backup-item-main"},[e("div",{class:"bai-bai-preset-backup-item-row bai-bai-preset-backup-item-row-top"},[e("strong",{class:"bai-bai-preset-backup-item-name",title:n.name},n.name),r?null:e("div",{class:"bai-bai-preset-backup-item-actions"},[Ml(e,{className:"bai-bai-preset-backup-delete",icon:"fa-solid fa-trash",title:"删除备份",onClick:()=>t.openDeleteDialog(n)}),Ml(e,{icon:"fa-solid fa-pen-to-square",title:"重命名备份",onClick:()=>t.openRenameDialog(n)}),Ml(e,{className:t.importingFileName===n.fileName?"bai-bai-preset-backup-importing":"",icon:t.importingFileName===n.fileName?"fa-solid fa-spinner":"fa-solid fa-download",title:"导入备份并切换",disabled:!!t.importingFileName,onClick:()=>t.importBackup(n)})])]),e("div",{class:"bai-bai-preset-backup-item-row bai-bai-preset-backup-item-meta"},[e("small",{class:"bai-bai-preset-backup-item-time"},[e("i",{class:"fa-regular fa-clock"}),e("span",n.createdAt)]),qR(e,t,n)])])])}function jR(e,t){return e("div",{class:"bai-bai-preset-backup-selection-bar"},[e("button",{class:"bai-bai-preset-backup-select-all",type:"button",disabled:t.batchDeleting||t.pagedItems.length<=0,onClick:()=>t.toggleSelectPage()},[e("i",{class:t.pageAllSelected?"fa-solid fa-square-check":"fa-regular fa-square"}),e("span",t.pageAllSelected?"取消本页":"全选本页")]),e("span",{class:"bai-bai-preset-backup-selection-count"},`已选 ${t.selectedCount} 项`),e("div",{class:"bai-bai-preset-backup-selection-actions"},[e("button",{class:"menu_button bai-bai-preset-backup-dialog-button",type:"button",disabled:t.batchDeleting,onClick:()=>t.exitSelectionMode()},"退出"),e("button",{class:"menu_button bai-bai-preset-backup-dialog-button bai-bai-preset-backup-dialog-danger",type:"button",disabled:t.batchDeleting||t.selectedCount<=0,onClick:()=>t.openBatchDeleteDialog()},[e("i",{class:"fa-solid fa-trash"}),e("span",t.batchDeleting?"删除中...":`删除所选 (${t.selectedCount})`)])])])}function qR(e,t,n){const r=!!n.note,o=a=>{t.selectionMode||(a.preventDefault(),a.stopPropagation(),t.openNoteDialog(n))};return r?e("button",{type:"button",class:"bai-bai-preset-backup-item-note",title:`${n.note}
（点击编辑备注）`,onClick:o},[e("i",{class:"fa-regular fa-pen-to-square"}),e("span",{class:"bai-bai-preset-backup-item-note-text"},n.note)]):e("button",{type:"button",class:"bai-bai-preset-backup-item-note bai-bai-preset-backup-item-note-empty",title:"添加备注",onClick:o},[e("i",{class:"fa-solid fa-plus"}),e("span","备注")])}function YR(e,t){const n=t.noteTarget?.name||"这个备份",r=t.noteValue.length;return e("div",{class:"bai-bai-preset-backup-dialog-layer",onClick:o=>{o.target===o.currentTarget&&t.closeNoteDialog()}},[e("div",{class:"bai-bai-preset-backup-dialog",role:"dialog","aria-modal":"true","aria-label":"编辑备注",onClick:o=>o.stopPropagation()},[e("div",{class:"bai-bai-preset-backup-dialog-head"},[e("strong","编辑备注"),e("button",{class:"menu_button menu_button_icon",type:"button",title:"关闭",disabled:t.savingNote,onClick:()=>t.closeNoteDialog()},[e("i",{class:"fa-solid fa-xmark"})])]),e("div",{class:"bai-bai-preset-backup-dialog-message"},[e("span","为"),e("strong",{title:n},n),e("span","记录这次改动")]),e("textarea",{ref:"noteInput",class:"text_pole bai-bai-preset-backup-dialog-input bai-bai-preset-backup-note-textarea",rows:4,maxlength:Cc,placeholder:"例如：改了正则和开场白，删了两条无用条目…",autocomplete:"off",value:t.noteValue,disabled:t.savingNote,onInput:t.onNoteInput,onCompositionstart:t.onNoteCompositionStart,onCompositionend:t.onNoteCompositionEnd}),e("div",{class:"bai-bai-preset-backup-note-counter"},`${r} / ${Cc}`),e("div",{class:"bai-bai-preset-backup-dialog-actions"},[e("button",{class:"menu_button bai-bai-preset-backup-dialog-button",type:"button",disabled:t.savingNote,onClick:()=>t.closeNoteDialog()},"取消"),e("button",{class:"menu_button bai-bai-preset-backup-dialog-button",type:"button",disabled:t.savingNote,onClick:()=>t.confirmNote()},t.savingNote?"保存中...":"保存")])])])}function QR(e,t){const n=!t.deleteTarget&&t.selectionMode,r=t.deleteTarget?.name||"这个备份",o=n?t.batchDeleting:t.deleting;return e("div",{class:"bai-bai-preset-backup-dialog-layer",onClick:a=>{a.target===a.currentTarget&&t.closeDeleteDialog()}},[e("div",{class:"bai-bai-preset-backup-dialog",role:"dialog","aria-modal":"true","aria-label":"删除备份",onClick:a=>a.stopPropagation()},[e("div",{class:"bai-bai-preset-backup-dialog-head"},[e("strong",n?"批量删除备份":"删除备份"),e("button",{class:"menu_button menu_button_icon",type:"button",title:"关闭",disabled:o,onClick:()=>t.closeDeleteDialog()},[e("i",{class:"fa-solid fa-xmark"})])]),n?e("div",{class:"bai-bai-preset-backup-dialog-message"},[e("span",`确定要删除选中的 ${t.selectedCount} 个备份吗？此操作不可恢复。`)]):e("div",{class:"bai-bai-preset-backup-dialog-message"},[e("span","确定要删除这个备份吗？"),e("strong",{title:r},r)]),e("div",{class:"bai-bai-preset-backup-dialog-actions"},[e("button",{class:"menu_button bai-bai-preset-backup-dialog-button",type:"button",disabled:o,onClick:()=>t.closeDeleteDialog()},"取消"),e("button",{class:"menu_button bai-bai-preset-backup-dialog-button bai-bai-preset-backup-dialog-danger",type:"button",disabled:o,onClick:()=>n?t.confirmBatchDelete():t.confirmDelete()},o?"删除中...":"删除")])])])}function XR(e,t){return e("div",{class:"bai-bai-preset-backup-dialog-layer",onClick:n=>{n.target===n.currentTarget&&t.closeRenameDialog()}},[e("div",{class:"bai-bai-preset-backup-dialog",role:"dialog","aria-modal":"true","aria-label":"重命名备份",onClick:n=>n.stopPropagation()},[e("div",{class:"bai-bai-preset-backup-dialog-head"},[e("strong","重命名备份"),e("button",{class:"menu_button menu_button_icon",type:"button",title:"关闭",disabled:t.renaming,onClick:()=>t.closeRenameDialog()},[e("i",{class:"fa-solid fa-xmark"})])]),e("input",{ref:"renameInput",class:"text_pole bai-bai-preset-backup-dialog-input",type:"text",autocomplete:"off",value:t.renameValue,disabled:t.renaming,onInput:t.onRenameInput,onCompositionstart:t.onRenameCompositionStart,onCompositionend:t.onRenameCompositionEnd,onKeydown:t.onRenameKeydown}),e("div",{class:"bai-bai-preset-backup-dialog-actions"},[e("button",{class:"menu_button bai-bai-preset-backup-dialog-button",type:"button",disabled:t.renaming,onClick:()=>t.closeRenameDialog()},"取消"),e("button",{class:"menu_button bai-bai-preset-backup-dialog-button",type:"button",disabled:t.renaming||!t.renameValue.trim(),onClick:()=>t.confirmRename()},t.renaming?"保存中...":"保存")])])])}function Ml(e,{className:t="",icon:n,title:r,disabled:o=!1,onClick:a}){return e("button",{class:["menu_button","menu_button_icon",t],type:"button",title:r,disabled:o,onClick:a},[e("i",{class:n})])}async function JR(){const e=await fetch(dR,{method:"POST",headers:me(),body:JSON.stringify({})});if(!e.ok)throw new Error(`HTTP ${e.status}`);const t=await e.json();return(Array.isArray(t?.data?.items)?t.data.items:Array.isArray(t?.items)?t.items:[]).map(Pc).filter(Boolean)}async function ZR(e,t){const n=await fetch(pR,{method:"POST",headers:me(),body:JSON.stringify({fileName:e,showName:t})});if(!n.ok)throw new Error(`HTTP ${n.status}`);const r=await n.json();return r?.data??r}async function eM(e,t){const n=await fetch(mR,{method:"POST",headers:me(),body:JSON.stringify({fileName:e,note:t})});if(!n.ok)throw new Error(`HTTP ${n.status}`);const r=await n.json();return r?.data??r}async function uf(e){const t=await fetch(fR,{method:"POST",headers:me(),body:JSON.stringify({fileName:e})});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json().catch(()=>({}))}async function tM(e){const t=await fetch(gR,{method:"POST",headers:me(),body:JSON.stringify({fileName:e})});if(!t.ok)throw new Error(`HTTP ${t.status}`);const n=await t.json();return n?.data??n}function nM(e,t){const n=e?.body&&typeof e.body=="object"?e.body:e,r=typeof n?.apiId=="string"&&n.apiId.trim()?n.apiId.trim():"openai",o=n?.preset&&typeof n.preset=="object"?n.preset:n,a=typeof e?.showName=="string"&&e.showName!==e?.fileName?e.showName:"",i=String(a||n?.name||t?.name||Fo(t?.fileName||"")).trim();if(!o||typeof o!="object"||Array.isArray(o))throw new Error("Invalid preset backup data");return{apiId:r,name:i||"备份预设",preset:rM(o)}}function rM(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function oM(e,t){const n=String(t).trim()||"备份预设",r=typeof e.getAllPresets=="function"?e.getAllPresets().map(a=>String(a)):[],o=new Set(r);if(!o.has(n))return n;for(let a=1;a<=999;a+=1){const i=`${n} ${a}`;if(!o.has(i))return i}return`${n} ${Date.now()}`}function Pc(e){if(!e||typeof e!="object")return null;const t=String(e.fileName||e.name||"").trim();if(!t)return null;const n=String(e.showName||e.displayName||e.presetName||"").trim(),r=n&&n!==t?n:Fo(t),o=aM(e.createdAt??e.createdAtMs),a=typeof e.note=="string"?e.note.trim():"";return{id:t,name:r,fileName:t,note:a,createdAt:o,searchText:`${r} ${a} ${o}`.toLowerCase()}}function Fo(e){const t=String(e||"").replace(/\.json$/i,""),n=/^\d{8}_\d{6}__(.+)$/.exec(t);return n?.[1]?n[1]:t||String(e||"")}function aM(e){if(typeof e=="number"&&Number.isFinite(e))return new Date(e).toLocaleString();if(typeof e=="string"&&e.trim()){const t=new Date(e);return Number.isFinite(t.getTime())?t.toLocaleString():e.trim()}return"时间未知"}function iM(e,t=null){const n=e?.querySelector?.(".bai-bai-preset-backup-summary");if(!(e instanceof HTMLDetailsElement)||!(n instanceof HTMLElement)){e instanceof HTMLDetailsElement&&(e.open=!e.open);return}if(typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches||typeof e.animate!="function"){e.open=!e.open;return}if(t?.animating)return;const o=e.open;t&&(t.animating=!0,t.closing=o),e.style.overflow="hidden";const a=e.offsetHeight,i=o?n.offsetHeight:(e.style.height=`${a}px`,e.open=!0,e.scrollHeight);e.style.height=`${a}px`;const s=e.animate({height:[`${a}px`,`${i}px`]},{duration:ER,easing:"ease"}),l=()=>{e.style.height="",e.style.overflow="",t&&(t.animating=!1,t.closing=!1)};s.onfinish=()=>{a>i&&(e.open=!1),l()},s.oncancel=l}function sM(){let e=document.getElementById(Nm);e||(e=document.createElement("style"),e.id=Nm,document.head.append(e)),e.textContent=`
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

#${L} details[open]:not(.${ey}) .bai-bai-preset-backup-chevron {
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
`}const lM="__baiBaiToolkitWorldInfoPageAppendPatched",ai="__baiBaiToolkitWorldInfoFloatingAutocompletePatched",eo="baiBaiToolkitWorldInfoDeferredMacros",Lc="baiBaiToolkitWorldInfoDeferredMacrosValue",cM='.world_entry_edit textarea[name="content"][data-macros]',df="__baiBaiToolkitWorldInfoDrawerHandler",pf="bai_bai_toolkit_world_info_drawer_animation_style",mf="__baiBaiToolkitWorldInfoLazySelect2Patched",uM="__baiBaiToolkitWorldInfoCharacterFilterAppendPatched",Io="__baiBaiToolkitWorldInfoVueListOptimization",Ic="bai_bai_toolkit_world_info_mobile_header_layout_style",Fi="baiBaiToolkitWorldInfoEditorSelectGrouped",Rc="baiBaiToolkitWorldInfoEditorSelectSearch",zi="baiBaiToolkitWorldInfoEditorSelectSearchMobileSuppressed",gy=450,to="__baiBaiToolkitWorldInfoEditorSelectStyle",Mt="bai-bai-wi-editor-select-dropdown",Dt="__baiBaiToolkitWorldInfoGlobalSelectorState",by="baiBaiToolkitWorldInfoGlobalSelector",zo="baiBaiToolkitWorldInfoGlobalSelectorOrder",Wt="bai-bai-wi-global-selector-dropdown",hy="bai-bai-wi-global-selector",Vi="baiBaiToolkitWorldInfoGlobalSelectorSearchMobileSuppressed",dM=16,we="bai-bai-wi-search-replace-panel",pM="#world_popup_entries_list > .world_entry > .world_entry_form > .inline-drawer > .inline-drawer-header .inline-drawer-toggle",mM="#world_popup_entries_list > .world_entry > .world_entry_form > .inline-drawer",fM='#world_popup_entries_list .world_entry_edit select[name="characterFilter"], #world_popup_entries_list .world_entry_edit select[name="triggers"]',aa="baiBaiToolkitLazySelect2",_y="baiBaiToolkitDeferredOptions";let _e={},ce={},dt="[BaiBaiToolkit]",Ui=null;function gM(e={}){_e=e.settings??_e,ce=e.extensionState??ce,dt=e.logPrefix??dt,Ui=e.saveSettings??Ui}function bM({saveSettings:e}={}){Ui=e??Ui}function Hd(e){return String(e).replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}function yy(){return(!ce.worldInfoPageOptimization||typeof ce.worldInfoPageOptimization!="object")&&(ce.worldInfoPageOptimization={}),ce.worldInfoPageOptimization}function Ey(){if(hM(),ce[df])return;const e=t=>{_M(t)};ce[df]=e,document.addEventListener("click",e,!0)}function hM(){if(document.getElementById(pf))return;const e=document.createElement("style");e.id=pf,e.textContent=`
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
`,document.head.append(e)}function _M(e){if(!(_e.worldInfoDrawerOptimizationEnabled||_e.worldInfoListOptimizationEnabled))return;const n=e.target instanceof Element?e.target:null,r=n?.closest(pM);if(!n||!r||!r.contains(n)||n.classList.contains("text_pole"))return;const o=r.closest(mM),a=o?.querySelector(":scope > .inline-drawer-header .inline-drawer-icon"),i=o?.querySelector(":scope > .inline-drawer-content");if(!o||!a||!i)return;e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation();const s=!EM(i);yM(a,s),_e.worldInfoListOptimizationEnabled?SM(o,i,s):vM(o,i,s)}function yM(e,t){e.classList.toggle("down",!t),e.classList.toggle("up",t),e.classList.toggle("fa-circle-chevron-down",!t),e.classList.toggle("fa-circle-chevron-up",t)}function EM(e){const t=e?.__baiBaiWorldInfoDrawerAnimation;return t?.phase==="opening"||t?.phase==="expanded"?!0:t?.phase==="closing"||t?.phase==="collapsed"?!1:e instanceof HTMLElement&&getComputedStyle(e).display!=="none"}function SM(e,t,n){if(!(e instanceof HTMLElement)||!(t instanceof HTMLElement))return;const r=TM(t);Gd(r),n&&!t.querySelector(":scope > .world_entry_edit")&&$(e).trigger("inline-drawer-toggle"),t.style.height="",t.style.display="block",t.classList.add("bai-bai-wi-drawer-motion"),r.phase=n?"opening":"closing",n?(t.classList.remove("bai-bai-wi-drawer-open","bai-bai-wi-drawer-leave"),t.classList.add("bai-bai-wi-drawer-enter")):(t.classList.remove("bai-bai-wi-drawer-enter"),t.classList.add("bai-bai-wi-drawer-open")),r.frameId=requestAnimationFrame(()=>{r.frameId=null,r.phase===(n?"opening":"closing")&&(n?(t.classList.remove("bai-bai-wi-drawer-enter"),t.classList.add("bai-bai-wi-drawer-open")):(t.classList.remove("bai-bai-wi-drawer-open"),t.classList.add("bai-bai-wi-drawer-leave")),xM(t,r,n))})}function vM(e,t,n){if(!(e instanceof HTMLElement)||!(t instanceof HTMLElement))return;const r=t.__baiBaiWorldInfoDrawerAnimation;Gd(r),n&&!t.querySelector(":scope > .world_entry_edit")&&$(e).trigger("inline-drawer-toggle"),t.classList.remove("bai-bai-wi-drawer-motion","bai-bai-wi-drawer-enter","bai-bai-wi-drawer-open","bai-bai-wi-drawer-leave"),t.style.display=n?"block":"none",t.style.height="",r&&(r.phase=n?"expanded":"collapsed"),Sy(t)}function TM(e){return e.__baiBaiWorldInfoDrawerAnimation||(e.__baiBaiWorldInfoDrawerAnimation={phase:getComputedStyle(e).display==="none"?"collapsed":"expanded",frameId:null,fallbackTimer:null,transitionHandler:null,content:null}),e.__baiBaiWorldInfoDrawerAnimation}function Gd(e){e&&(e.frameId!==null&&(cancelAnimationFrame(e.frameId),e.frameId=null),e.fallbackTimer!==null&&(clearTimeout(e.fallbackTimer),e.fallbackTimer=null),e.transitionHandler&&e.content instanceof HTMLElement&&e.content.removeEventListener("transitionend",e.transitionHandler),e.transitionHandler=null,e.content=null)}function xM(e,t,n){const r=n?"opening":"closing",o=()=>{t.phase===r&&(Gd(t),wM(e,t,n))},a=i=>{!(i.target instanceof HTMLElement)||!i.target.matches(".world_entry_edit")||!["opacity","transform"].includes(i.propertyName)||o()};t.content=e,t.transitionHandler=a,t.fallbackTimer=setTimeout(o,220),e.addEventListener("transitionend",a)}function wM(e,t,n){n?(t.phase="expanded",e.style.display="block",e.classList.remove("bai-bai-wi-drawer-motion","bai-bai-wi-drawer-enter","bai-bai-wi-drawer-open","bai-bai-wi-drawer-leave")):(t.phase="collapsed",e.style.display="none",e.classList.remove("bai-bai-wi-drawer-motion","bai-bai-wi-drawer-enter","bai-bai-wi-drawer-open","bai-bai-wi-drawer-leave")),e.style.height="",Sy(e)}function Sy(e){CSS.supports("field-sizing","content")||e.querySelectorAll("textarea.autoSetHeight").forEach(t=>{bi(t)})}function CM(){const e=globalThis.jQuery?.fn?.append;e?.__baiBaiToolkitWorldInfoCharacterFilterAppendPatched&&(globalThis.jQuery.fn.append=e.__baiBaiToolkitOriginalAppend),ce[uM]=!1}function kM(e,t){ce.worldInfoDeferredCharacterFilterOptions??=new WeakMap;const n=ce.worldInfoDeferredCharacterFilterOptions.get(e)??[];n.push(t),ce.worldInfoDeferredCharacterFilterOptions.set(e,n),e.dataset[_y]="true"}function AM(e,t){if(!(e instanceof HTMLSelectElement)||e.name!=="characterFilter"||typeof MutationObserver!="function"||t.characterFilterOptionObserver)return;const n=new MutationObserver(r=>{if(!_e.worldInfoDrawerOptimizationEnabled||e.dataset[aa]!=="true")return;const o=[];for(const a of r)for(const i of a.addedNodes)PM(i,o);o.forEach(a=>{e.contains(a)&&a.remove(),kM(e,a)})});n.observe(e,{childList:!0,subtree:!0}),t.characterFilterOptionObserver=n}function PM(e,t){if(e instanceof HTMLOptionElement){t.push(e);return}e instanceof HTMLOptGroupElement&&e.querySelectorAll("option").forEach(n=>{n instanceof HTMLOptionElement&&t.push(n)})}function LM(e){const t=ce.worldInfoDeferredCharacterFilterOptions?.get(e);if(!t?.length)return;const n=document.createDocumentFragment();for(const r of t)n.append(r);ce.worldInfoDeferredCharacterFilterOptions.delete(e),delete e.dataset[_y],e.append(n)}function vy(){if(ce[mf])return;const e=globalThis.jQuery?.fn?.select2;if(typeof e!="function"){console.warn(`${dt} Select2 is unavailable; World Info lazy select2 optimization was not installed`);return}function t(...n){if(!IM(n))return e.apply(this,n);const r=this.toArray();return r.some(o=>ff(o))?(r.forEach(o=>{const a=$(o);ff(o)?RM(o,n,e):e.apply(a,n)}),this):e.apply(this,n)}t.__baiBaiToolkitWorldInfoLazySelect2Patched=!0,t.__baiBaiToolkitOriginalSelect2=e,Object.assign(t,e),globalThis.jQuery.fn.select2=t,ce[mf]=!0}function Ty(){CM()}function IM(e){if(!_e.worldInfoDrawerOptimizationEnabled)return!1;const t=e[0];return typeof t=="object"&&t!==null&&!Array.isArray(t)}function ff(e){return!(e instanceof HTMLSelectElement)||!e.matches(fM)||$(e).data("select2")?!1:e.dataset[aa]!=="true"}function RM(e,t,n){e.dataset[aa]="true",e.classList.add("bai-bai-toolkit-lazy-select2");const r={args:[...t],originalSelect2:n},o=a=>{xy(e,{open:a?.type==="pointerdown"||a?.type==="mousedown"})};r.activate=o,AM(e,r),ce.worldInfoLazySelect2State??=new WeakMap,ce.worldInfoLazySelect2State.set(e,r),e.addEventListener("pointerdown",o,{capture:!0}),e.addEventListener("mousedown",o,{capture:!0}),e.addEventListener("focus",o,{capture:!0})}function xy(e,{open:t=!1}={}){const n=e instanceof Element?[e]:Array.from(e.querySelectorAll?.(`select[data-${Hd(aa)}="true"]`)??[]);for(const r of n){const o=ce.worldInfoLazySelect2State?.get(r);o&&(r.removeEventListener("pointerdown",o.activate,!0),r.removeEventListener("mousedown",o.activate,!0),r.removeEventListener("focus",o.activate,!0),o.characterFilterOptionObserver?.disconnect(),o.characterFilterOptionObserver=null,delete r.dataset[aa],r.classList.remove("bai-bai-toolkit-lazy-select2"),ce.worldInfoLazySelect2State.delete(r),LM(r),o.originalSelect2.apply($(r),o.args),t&&$(r).data("select2")&&setTimeout(()=>{try{$(r).select2("open")}catch{}},0))}}function wy(){const e=yy();if(e.enabled=!!_e.worldInfoPageOptimizationEnabled,!e.enabled){MM(e);return}OM(e),Cy(e),DM(e),NM(e),console.debug(`${dt} World info page optimization enabled`)}function MM(e=yy()){zM(),HM(e),$M(e),Cy(e),BM(e)}function OM(e){if(e[ai])return;const t=xn?.prototype?.updateFloatingPosition;if(typeof t!="function"){console.warn(`${dt} AutoComplete floating positioning is unavailable; World Info autocomplete optimization was not installed`);return}if(t.__baiBaiToolkitWorldInfoFloatingAutocompletePatched){e[ai]=!0;return}function n(...r){if(this.isActive)return t.apply(this,r)}n.__baiBaiToolkitWorldInfoFloatingAutocompletePatched=!0,n.__baiBaiToolkitWorldInfoFloatingAutocompleteOriginal=t,xn.prototype.updateFloatingPosition=n,e[ai]=!0}function BM(e){const t=xn?.prototype?.updateFloatingPosition;t?.__baiBaiToolkitWorldInfoFloatingAutocompletePatched&&(xn.prototype.updateFloatingPosition=t.__baiBaiToolkitWorldInfoFloatingAutocompleteOriginal),e[ai]=!1}function Cy(e){const t=globalThis.jQuery?.fn?.append;t?.__baiBaiToolkitWorldInfoPageAppendPatched&&(globalThis.jQuery.fn.append=t.__baiBaiToolkitWorldInfoPageAppendOriginal),e[lM]=!1}function DM(e){if(e.deferredMacroMutationObserver)return;const t=document.getElementById("world_popup_entries_list");if(!(t instanceof HTMLElement)||(gf(t),typeof MutationObserver!="function"))return;const n=new MutationObserver(r=>{if(_e.worldInfoPageOptimizationEnabled)for(const o of r)for(const a of o.addedNodes)gf(a)});n.observe(t,{childList:!0,subtree:!0}),e.deferredMacroMutationObserver=n}function $M(e){e.deferredMacroMutationObserver?.disconnect(),e.deferredMacroMutationObserver=null}function gf(e){if(!(e instanceof Element))return;(e.matches("#world_popup_entries_list .inline-drawer-outlet")?[e]:Array.from(e.querySelectorAll?.("#world_popup_entries_list .inline-drawer-outlet")??[])).forEach(n=>{n.querySelectorAll(cM).forEach(r=>{!(r instanceof HTMLTextAreaElement)||r.dataset[eo]==="true"||(r.dataset[eo]="true",r.dataset[Lc]=r.getAttribute("data-macros")??"",r.removeAttribute("data-macros"))})})}function NM(e){if(e.deferredMacroActivationHandler)return;const t=n=>{GM(n)};document.addEventListener("focusin",t,!0),document.addEventListener("pointerdown",t,!0),document.addEventListener("click",t,!0),e.deferredMacroActivationHandler=t}function HM(e){const t=e.deferredMacroActivationHandler;t&&(document.removeEventListener("focusin",t,!0),document.removeEventListener("pointerdown",t,!0),document.removeEventListener("click",t,!0),e.deferredMacroActivationHandler=null)}function GM(e){const t=e.target instanceof Element?e.target:null;if(!t)return;const n=FM(t);n&&ky(n)}function FM(e){const t=e.closest?.(`textarea[data-${Hd(eo)}="true"]`);if(t instanceof HTMLTextAreaElement)return t;const r=e.closest?.(".editor_maximize[data-for]")?.getAttribute("data-for"),o=r?document.getElementById(r):null;return o instanceof HTMLTextAreaElement&&o.dataset[eo]==="true"?o:null}function zM(){document.querySelectorAll(`textarea[data-${Hd(eo)}="true"]`).forEach(e=>{e instanceof HTMLTextAreaElement&&ky(e)})}function ky(e){const t=e.dataset[Lc]??"";e.setAttribute("data-macros",t),delete e.dataset[eo],delete e.dataset[Lc]}function VM(){const e=document.getElementById("world_refresh"),t=document.getElementById("WorldInfo");!e||!t||getComputedStyle(t).display==="none"||setTimeout(()=>e.click(),0)}function UM(e=J()){if(e.worldInfoEditorSelectOpenHandler||!document?.body)return;const t=o=>{const a=n0(o.target);a&&Ol(e,a)},n=o=>{if(![" ","Enter","ArrowDown"].includes(o.key))return;const a=o.target instanceof HTMLSelectElement&&o.target.id==="world_editor_select"?o.target:null;a&&Ol(e,a)},r=o=>{const a=o.target instanceof HTMLSelectElement&&o.target.id==="world_editor_select"?o.target:null;a&&Ol(e,a)};document.addEventListener("pointerdown",t,!0),document.addEventListener("keydown",n,!0),globalThis.jQuery?.(document).on("select2:opening.baiBaiToolkitWorldInfoEditorSelectGrouping","#world_editor_select",r),e.worldInfoEditorSelectOpenHandler=t,e.worldInfoEditorSelectKeyHandler=n,e.worldInfoEditorSelectSelect2Handler=r}function WM(e=J()){e.worldInfoEditorSelectOpenHandler&&(document.removeEventListener("pointerdown",e.worldInfoEditorSelectOpenHandler,!0),e.worldInfoEditorSelectOpenHandler=null),e.worldInfoEditorSelectKeyHandler&&(document.removeEventListener("keydown",e.worldInfoEditorSelectKeyHandler,!0),e.worldInfoEditorSelectKeyHandler=null),e.worldInfoEditorSelectSelect2Handler&&(globalThis.jQuery?.(document).off("select2:opening.baiBaiToolkitWorldInfoEditorSelectGrouping","#world_editor_select",e.worldInfoEditorSelectSelect2Handler),e.worldInfoEditorSelectSelect2Handler=null),r0(e)}function KM(e=J()){if(QM(),e.worldInfoEditorSelectSearchOpenHandler||!globalThis.jQuery)return;const t=r=>{const o=r.target instanceof HTMLSelectElement&&r.target.id==="world_editor_select"?r.target:null;if(!o||!de())return;const a=e0(o);a&&Ly(a)},n=r=>{const o=r.target instanceof HTMLSelectElement&&r.target.id==="world_editor_select"?r.target:null;o&&requestAnimationFrame(()=>XM(o))};globalThis.jQuery(document).on("select2:opening.baiBaiToolkitWorldInfoEditorSelectSearch","#world_editor_select",t),globalThis.jQuery(document).on("select2:open.baiBaiToolkitWorldInfoEditorSelectSearch","#world_editor_select",n),qM(e),e.worldInfoEditorSelectSearchOpeningHandler=t,e.worldInfoEditorSelectSearchOpenHandler=n}function jM(e=J()){YM(e),e.worldInfoEditorSelectSearchOpeningHandler&&(globalThis.jQuery?.(document).off("select2:opening.baiBaiToolkitWorldInfoEditorSelectSearch","#world_editor_select",e.worldInfoEditorSelectSearchOpeningHandler),e.worldInfoEditorSelectSearchOpeningHandler=null),e.worldInfoEditorSelectSearchOpenHandler&&(globalThis.jQuery?.(document).off("select2:open.baiBaiToolkitWorldInfoEditorSelectSearch","#world_editor_select",e.worldInfoEditorSelectSearchOpenHandler),e.worldInfoEditorSelectSearchOpenHandler=null);const t=document.getElementById("world_editor_select");if(!(t instanceof HTMLSelectElement)||t.dataset[Rc]!=="true")return;const n=globalThis.jQuery?.(t);n?.data?.("select2")&&n.select2("destroy"),delete t.dataset[Rc]}function qM(e=J()){if(e.worldInfoEditorSelectSearchInteractionGuard)return;const t=n=>{const r=n.target instanceof Element?n.target.closest(".select2-container--open .select2-search__field"):null;!(r instanceof HTMLInputElement)||!de()||!t0()||(Oc(r),Fd(r,n),n.stopPropagation())};for(const n of["pointerdown","mousedown","touchstart","click"])window.addEventListener(n,t,!0);e.worldInfoEditorSelectSearchInteractionGuard=t}function YM(e=J()){const t=e.worldInfoEditorSelectSearchInteractionGuard;if(t){for(const n of["pointerdown","mousedown","touchstart","click"])window.removeEventListener(n,t,!0);e.worldInfoEditorSelectSearchInteractionGuard=null}}function QM(e=document.getElementById("world_editor_select")){if(!(e instanceof HTMLSelectElement)||typeof globalThis.jQuery?.fn?.select2!="function")return;const t=globalThis.jQuery(e),n=t.data("select2");if(n){n.options?.set?.("allowClear",!1),n.options?.set?.("dropdownCssClass",Mt),n.options?.set?.("minimumResultsForSearch",0),n.options?.set?.("searchInputPlaceholder","Search..."),Mc(e);return}const r=e.querySelector('option[value=""]')?.textContent?.trim()||"--- Pick to Edit ---";Ay(e),t.select2({width:"100%",placeholder:r,searchInputPlaceholder:"Search...",allowClear:!1,closeOnSelect:!0,dropdownCssClass:Mt,multiple:!1,minimumResultsForSearch:0}),e.dataset[Rc]="true",Mc(e)}function XM(e=document.getElementById("world_editor_select")){if(!(e instanceof HTMLSelectElement)||!globalThis.jQuery?.(e).data?.("select2"))return;const t=document.querySelector(".select2-container--open .select2-search__field");if(Mc(e),JM(e,t),t instanceof HTMLInputElement){if(t.closest(".select2-search")?.classList.remove("select2-search--hide"),t.placeholder=t.placeholder||"Search...",t.removeAttribute("readonly"),de()){Ly(t);return}t.focus({preventScroll:!0})}}function JM(e,t=document.querySelector(".select2-container--open .select2-search__field")){if(!(e instanceof HTMLSelectElement))return;const r=globalThis.jQuery?.(e).data?.("select2")?.dropdown?.$dropdown?.[0];if(r instanceof HTMLElement&&r.classList.add(Mt),!(t instanceof HTMLInputElement))return;const o=ZM(),a=o instanceof HTMLElement?getComputedStyle(o):e[to];a&&Object.assign(t.style,{backgroundColor:a.backgroundColor,borderBottomColor:a.borderBottomColor,borderBottomLeftRadius:a.borderBottomLeftRadius,borderBottomRightRadius:a.borderBottomRightRadius,borderBottomStyle:a.borderBottomStyle,borderBottomWidth:a.borderBottomWidth,borderLeftColor:a.borderLeftColor,borderLeftStyle:a.borderLeftStyle,borderLeftWidth:a.borderLeftWidth,borderRightColor:a.borderRightColor,borderRightStyle:a.borderRightStyle,borderRightWidth:a.borderRightWidth,borderTopColor:a.borderTopColor,borderTopLeftRadius:a.borderTopLeftRadius,borderTopRightRadius:a.borderTopRightRadius,borderTopStyle:a.borderTopStyle,borderTopWidth:a.borderTopWidth,boxShadow:a.boxShadow,color:a.color,fontFamily:a.fontFamily,fontSize:a.fontSize,fontWeight:a.fontWeight,height:a.height,lineHeight:a.lineHeight,opacity:"1",paddingBottom:a.paddingBottom,paddingLeft:a.paddingLeft,paddingRight:a.paddingRight,paddingTop:a.paddingTop})}function ZM(){const e=document.getElementById("world_info_search");return e instanceof HTMLInputElement?e:document.querySelector('#world_popup input[type="search"], #world_popup input[type="text"], #world_popup input:not([type])')}function Ay(e){!(e instanceof HTMLSelectElement)||e[to]||Py(e,e)}function Py(e,t){if(!(e instanceof HTMLElement)||!(t instanceof HTMLElement)||e[to])return;const n=getComputedStyle(t);e[to]={backgroundColor:n.backgroundColor,borderBottomColor:n.borderBottomColor,borderBottomLeftRadius:n.borderBottomLeftRadius,borderBottomRightRadius:n.borderBottomRightRadius,borderBottomStyle:n.borderBottomStyle,borderBottomWidth:n.borderBottomWidth,borderLeftColor:n.borderLeftColor,borderLeftStyle:n.borderLeftStyle,borderLeftWidth:n.borderLeftWidth,borderRightColor:n.borderRightColor,borderRightStyle:n.borderRightStyle,borderRightWidth:n.borderRightWidth,borderTopColor:n.borderTopColor,borderTopLeftRadius:n.borderTopLeftRadius,borderTopRightRadius:n.borderTopRightRadius,borderTopStyle:n.borderTopStyle,borderTopWidth:n.borderTopWidth,boxShadow:n.boxShadow,color:n.color,fontFamily:n.fontFamily,fontSize:n.fontSize,fontWeight:n.fontWeight,height:n.height,lineHeight:n.lineHeight,minHeight:n.minHeight,paddingBottom:n.paddingBottom,paddingLeft:n.paddingLeft,paddingRight:n.paddingRight,paddingTop:n.paddingTop}}function Mc(e){if(!(e instanceof HTMLSelectElement))return;const n=globalThis.jQuery?.(e).data?.("select2")?.$container?.[0],r=n?.querySelector?.(".select2-selection--single"),o=n?.querySelector?.(".select2-selection__rendered"),a=n?.querySelector?.(".select2-selection__arrow"),i=a?.querySelector?.("b"),s=e[to];!(r instanceof HTMLElement)||!s||(Object.assign(r.style,{backgroundColor:s.backgroundColor,borderBottomColor:s.borderBottomColor,borderBottomLeftRadius:s.borderBottomLeftRadius,borderBottomRightRadius:s.borderBottomRightRadius,borderBottomStyle:s.borderBottomStyle,borderBottomWidth:s.borderBottomWidth,borderLeftColor:s.borderLeftColor,borderLeftStyle:s.borderLeftStyle,borderLeftWidth:s.borderLeftWidth,borderRightColor:s.borderRightColor,borderRightStyle:s.borderRightStyle,borderRightWidth:s.borderRightWidth,borderTopColor:s.borderTopColor,borderTopLeftRadius:s.borderTopLeftRadius,borderTopRightRadius:s.borderTopRightRadius,borderTopStyle:s.borderTopStyle,borderTopWidth:s.borderTopWidth,boxShadow:s.boxShadow,color:s.color,alignItems:"center",display:"flex",fontFamily:s.fontFamily,fontSize:s.fontSize,fontWeight:s.fontWeight,minHeight:s.minHeight}),bf(s.height)&&(r.style.height=s.height),o instanceof HTMLElement&&Object.assign(o.style,{alignItems:"center",color:s.color,display:"flex",flex:"1 1 auto",fontFamily:s.fontFamily,fontSize:s.fontSize,fontWeight:s.fontWeight,lineHeight:"normal",minWidth:"0",overflow:"hidden",paddingBottom:"2px",paddingLeft:s.paddingLeft,paddingRight:"28px",paddingTop:"2px",textOverflow:"ellipsis",whiteSpace:"nowrap"}),a instanceof HTMLElement&&(Object.assign(a.style,{alignItems:"center",color:s.color,display:"flex",justifyContent:"center",opacity:"0.62",right:"8px",top:"0",width:"18px"}),bf(s.height)&&(a.style.height=s.height)),i instanceof HTMLElement&&Object.assign(i.style,{borderColor:"currentColor transparent transparent transparent",borderStyle:"solid",borderWidth:"6px 5px 0 5px",height:"0",left:"auto",margin:"0",position:"static",top:"auto",width:"0"}))}function bf(e){return typeof e=="string"&&e!==""&&e!=="auto"&&e!=="0px"&&e!=="1px"}function e0(e){const t=globalThis.jQuery?.(e).data?.("select2"),n=t?.dropdown?.$search?.[0]??t?.selection?.$search?.[0]??null;return n instanceof HTMLInputElement?n:null}function t0(){const e=document.getElementById("world_editor_select");return!!(e instanceof HTMLSelectElement?globalThis.jQuery?.(e).data?.("select2"):null)?.isOpen?.()}function Ly(e){e.dataset[zi]="true",e.setAttribute("readonly","readonly"),e.setAttribute("inputmode","none"),Wi(e);const t=()=>Oc(e);e.addEventListener("pointerdown",t,{capture:!0,once:!0}),e.addEventListener("touchstart",t,{capture:!0,once:!0}),e.addEventListener("mousedown",t,{capture:!0,once:!0}),setTimeout(()=>{e.dataset[zi]==="true"&&(Wi(e),Oc(e))},gy)}function Oc(e){!(e instanceof HTMLInputElement)||e.dataset[zi]!=="true"||(e.removeAttribute("readonly"),e.getAttribute("inputmode")==="none"&&e.removeAttribute("inputmode"),delete e.dataset[zi])}function Wi(e){document.activeElement===e&&e.blur(),requestAnimationFrame(()=>{document.activeElement===e&&e.blur()})}function Fd(e,t){if(!(t?.type==="click"||document.activeElement===e))try{e.focus({preventScroll:!0})}catch{e.focus()}}function n0(e){if(!(e instanceof Element))return null;if(e instanceof HTMLSelectElement&&e.id==="world_editor_select")return e;const n=e.closest?.(".select2-container")?.previousElementSibling;return n instanceof HTMLSelectElement&&n.id==="world_editor_select"?n:null}function Ol(e=J(),t=document.getElementById("world_editor_select")){if(!(t instanceof HTMLSelectElement)||e.worldInfoEditorSelectGroupingApplying)return;const n=Array.from(t.options).filter(l=>l.value!=="");if(n.length===0)return;const r=t.value,o=o0(n),a=a0(o);if(t.dataset[Fi]==="true"&&t.dataset.baiBaiToolkitWorldInfoEditorSelectGroupingSignature===a)return;const i=document.createDocumentFragment(),s=Array.from(t.options).filter(l=>l.value==="");e.worldInfoEditorSelectGroupingApplying=!0;try{s.forEach(l=>i.append(l)),o.forEach(({label:l,options:c})=>{if(c.length===0)return;const u=document.createElement("optgroup");u.label=l,c.forEach(p=>u.append(p)),i.append(u)}),t.replaceChildren(i),t.value=r,t.dataset[Fi]="true",t.dataset.baiBaiToolkitWorldInfoEditorSelectGroupingSignature=a,Ry(t)}finally{e.worldInfoEditorSelectGroupingApplying=!1}}function r0(e=J()){const t=document.getElementById("world_editor_select");if(!(t instanceof HTMLSelectElement)||t.dataset[Fi]!=="true")return;const n=t.value,r=Array.from(t.options).filter(i=>i.value===""),o=Array.from(t.options).filter(i=>i.value!=="").sort((i,s)=>Ki(i)-Ki(s)),a=document.createDocumentFragment();e.worldInfoEditorSelectGroupingApplying=!0;try{r.forEach(i=>a.append(i)),o.forEach(i=>a.append(i)),t.replaceChildren(a),t.value=n,delete t.dataset[Fi],delete t.dataset.baiBaiToolkitWorldInfoEditorSelectGroupingSignature,Ry(t)}finally{e.worldInfoEditorSelectGroupingApplying=!1}}function o0(e){const t=new Map,n=[];e.slice().sort((a,i)=>Ki(a)-Ki(i)).forEach(a=>{const i=Iy(a);!i||t.has(i)||(t.set(i,a),n.push(i))});const r=new Set;return i0(n).map(a=>{const i=[];return a.names.forEach(s=>{if(r.has(s))return;const l=t.get(s);l&&(r.add(s),i.push(l))}),{label:a.label,options:i}})}function a0(e){return e.map(t=>`${t.label}:${t.options.map(n=>n.value).join(",")}`).join("|")}function i0(e){const t=new Set(e),n=Vo(vg).filter(l=>t.has(l)),r=Vo(Xt?.[$e]?.data?.extensions?.world).filter(l=>t.has(l)),o=s0().filter(l=>t.has(l)),a=Vo(iv?.[_v]).filter(l=>t.has(l)),i=new Set([...n,...r,...o,...a]),s=e.filter(l=>!i.has(l));return[{label:"当前开启的全局世界书",names:Ua(n,e)},{label:"角色卡世界书",names:Ua(r,e)},{label:"附加角色世界书",names:Ua(o,e)},{label:"聊天世界书",names:Ua(a,e)},{label:"其他世界书",names:s}]}function s0(){if($e===void 0||$e===null)return[];let e="";try{e=lv($e)}catch(n){console.debug(`${dt} Failed to resolve current character lorebook file name`,n)}if(!e)return[];const t=yv?.charLore?.find(n=>n?.name===e);return Vo(t?.extraBooks)}function Vo(e){const t=Array.isArray(e)?e:[e],n=new Set(Array.isArray(Ir)?Ir:[]),r=new Set;return t.map(o=>String(o??"").trim()).filter(o=>!o||r.has(o)||n.size>0&&!n.has(o)?!1:(r.add(o),!0))}function Ua(e,t){const n=new Map(t.map((r,o)=>[r,o]));return e.filter((r,o,a)=>a.indexOf(r)===o).sort((r,o)=>(n.get(r)??Number.MAX_SAFE_INTEGER)-(n.get(o)??Number.MAX_SAFE_INTEGER))}function Iy(e){return String(e?.textContent??"").trim()}function Ki(e){const t=Number.parseInt(e?.value??"",10);return Number.isFinite(t)?t:Number.MAX_SAFE_INTEGER}function Ry(e){const t=globalThis.jQuery?.(e);t?.data?.("select2")&&t.trigger("change.select2")}function l0(e=J()){f0(e),u0(e),m0(e)}function c0(e=J()){d0(e),My(e);for(const t of Array.from(e.worldInfoGlobalSelectorSelects??[]))zd(t,e);e.worldInfoGlobalSelectorSelects?.clear?.()}function u0(e=J()){if(e.worldInfoGlobalSelectorSyncHandler)return;const t=n=>{if(!(n?.target instanceof Element&&!n.target.closest("#WIMultiSelector")&&n.target.id!=="world_editor_select")){if(n?.target instanceof HTMLSelectElement&&n.target[Dt]?.suppressDropdownRefresh){cr(n.target),Vd(n.target);return}p0(e)}};M?.on?.(w.WORLDINFO_SETTINGS_UPDATED,t),document.addEventListener("change",t,!0),e.worldInfoGlobalSelectorSyncHandler=t}function d0(e=J()){const t=e.worldInfoGlobalSelectorSyncHandler;t&&(M?.removeListener?.(w.WORLDINFO_SETTINGS_UPDATED,t),document.removeEventListener("change",t,!0),e.worldInfoGlobalSelectorSyncHandler=null)}function p0(e=J()){for(const t of Array.from(e.worldInfoGlobalSelectorSelects??[])){if(!t.isConnected){zd(t,e);continue}ji(t),cr(t),Dy(t,e)}}function m0(e=J()){if(My(e),!document?.body)return;const t=r=>{const o=r.target instanceof Element?r.target.closest(`.${hy}.bai-bai-wi-global-selector-display`):null;if(!(o instanceof HTMLElement)||r.target instanceof Element&&r.target.closest(".bai-bai-wi-global-selector-chip-remove"))return;const a=b0(o,e);a instanceof HTMLSelectElement&&(r.preventDefault(),r.stopPropagation(),Oy(a,e))},n=typeof PointerEvent=="function"?["pointerdown"]:["mousedown","touchend"];n.forEach(r=>document.addEventListener(r,t,!0)),e.worldInfoGlobalSelectorTriggerHandler=t,e.worldInfoGlobalSelectorTriggerEvents=n}function My(e=J()){const t=e.worldInfoGlobalSelectorTriggerHandler;t&&((e.worldInfoGlobalSelectorTriggerEvents??["pointerdown","mousedown","touchend"]).forEach(n=>document.removeEventListener(n,t,!0)),e.worldInfoGlobalSelectorTriggerHandler=null,e.worldInfoGlobalSelectorTriggerEvents=null)}function f0(e=J()){if(_e.worldInfoListOptimizationEnabled){g0().forEach(t=>{h0(t,e)});for(const t of Array.from(e.worldInfoGlobalSelectorSelects??[]))t.isConnected||zd(t,e)}}function g0(e=document){return Array.from(e.querySelectorAll?.(["#WIMultiSelector select[multiple]","select#WIMultiSelector[multiple]"].join(","))??[]).filter(t=>t instanceof HTMLSelectElement)}function b0(e,t=J()){if(!(e instanceof HTMLElement))return null;for(const n of Array.from(t.worldInfoGlobalSelectorSelects??[]))if(n?.[Dt]?.displayEl===e)return n;return null}function h0(e,t=J()){if(!(e instanceof HTMLSelectElement)||!e.multiple)return;ji(e),_0(e);let n=e[Dt];n||(n={displayEl:null,originalSelectDisplay:e.style.display,originalSelect2Display:null,changeHandler:null,triggerHandler:null},e[Dt]=n,t.worldInfoGlobalSelectorSelects.add(e),n.changeHandler=()=>{if(ji(e),cr(e),Vd(e),n.suppressDropdownRefresh){n.suppressDropdownRefresh=!1;return}Dy(e)},e.addEventListener("change",n.changeHandler)),y0(e),cr(e),e.dataset[by]="true"}function zd(e,t=J()){const n=e?.[Dt];if(!(e instanceof HTMLSelectElement)||!n)return;e.removeEventListener("change",n.changeHandler),Mr(t),T0(e);const r=qi(e);r instanceof HTMLElement&&(r.style.display=n.originalSelect2Display??""),e.style.display=n.originalSelectDisplay??"",n.displayEl?.remove(),delete e.dataset[by],delete e[Dt],t.worldInfoGlobalSelectorSelects?.delete?.(e)}function _0(e){if(!(e instanceof HTMLSelectElement)||e[to])return;const t=qi(e)?.querySelector?.(".select2-selection--multiple, .select2-selection");if(t instanceof HTMLElement){Py(e,t);return}Ay(e)}function y0(e){const t=e?.[Dt];if(!(e instanceof HTMLSelectElement)||!t)return;if(t.displayEl?.isConnected){const o=qi(e);o instanceof HTMLElement&&(t.originalSelect2Display??=o.style.display,o.style.display="none"),hf(e,t.displayEl);return}const n=document.createElement("div");n.className=`${hy} bai-bai-wi-global-selector-display`,n.tabIndex=0,n.role="button",n.setAttribute("aria-haspopup","listbox"),t.displayEl=n,hf(e,n);const r=qi(e);r instanceof HTMLElement?(t.originalSelect2Display??=r.style.display,r.style.display="none",r.before(n)):(e.style.display="none",e.after(n))}function hf(e,t){const n=e?.[Dt];if(!(e instanceof HTMLSelectElement)||!(t instanceof HTMLElement)||!n)return;n.triggerHandler&&(t.removeEventListener("click",n.triggerHandler),t.removeEventListener("keydown",n.triggerHandler));const r=o=>{if(o.target instanceof Element&&o.target.closest(".bai-bai-wi-global-selector-chip-remove")||o.type==="keydown"&&![" ","Enter","ArrowDown"].includes(o.key))return;o.preventDefault(),o.stopPropagation();const a=J();if(!(o.type==="click"&&a.worldInfoGlobalSelectorDropdown?.select===e)){if(o.type==="click"){By(e,a);return}Oy(e,a)}};t.addEventListener("click",r),t.addEventListener("keydown",r),n.triggerHandler=r}function cr(e){const t=e?.[Dt],n=t?.displayEl;if(!(e instanceof HTMLSelectElement)||!(n instanceof HTMLElement))return;n.textContent="";const r=v0(e);if(r.length===0){const o=document.createElement("span");o.className="bai-bai-wi-global-selector-placeholder",o.textContent=x0(e),n.append(o);return}r.forEach(o=>{const a=document.createElement("span");a.className="bai-bai-wi-global-selector-chip",a.dataset.value=o.value;const i=document.createElement("span");i.className="bai-bai-wi-global-selector-chip-label",i.textContent=o.textContent?.trim()||o.value;const s=document.createElement("button");s.className="bai-bai-wi-global-selector-chip-remove",s.type="button",s.textContent="×",s.title="移除",s.setAttribute("aria-label",`移除 ${i.textContent}`),s.addEventListener("pointerdown",l=>{l.preventDefault(),l.stopPropagation(),o.selected=!1,t.suppressDropdownRefresh=!0,Hy(e),cr(e),Vd(e)}),a.append(i,s),n.append(a)})}function ji(e){const t=Array.from(e.options),n=t.map(o=>Number.parseInt(o.dataset[zo]??"",10)).filter(Number.isFinite);let r=n.length>0?Math.max(...n)+1:0;t.forEach(o=>{o.dataset[zo]||(o.dataset[zo]=String(r),r+=1)})}function Oy(e,t=J()){if(t.worldInfoGlobalSelectorDropdown?.select===e){Mr(t);return}By(e,t)}function By(e,t=J()){const r=e?.[Dt]?.displayEl;if(!(e instanceof HTMLSelectElement)||!(r instanceof HTMLElement))return;ji(e),cr(e),Mr(t),E0(e);const o=document.createElement("div");o.className=Wt,o.dataset.baiBaiWorldInfoGlobalSelectorDropdown="true";const a=document.createElement("div");a.className="bai-bai-wi-global-selector-search-box";const i=document.createElement("input");i.className="bai-bai-wi-global-selector-search",i.type="search",i.placeholder="搜索世界书...";const s=document.createElement("button");s.className="bai-bai-wi-global-selector-search-clear",s.type="button",s.textContent="×",s.title="清空搜索",s.setAttribute("aria-label","清空搜索"),a.append(i,s),de()&&w0(i);const l=document.createElement("div");l.className="bai-bai-wi-global-selector-options",o.append(a,l);const c=Ny(e),u=B=>B.stopPropagation();["pointerdown","mousedown","click","touchstart","touchend"].forEach(B=>{o.addEventListener(B,u)});const p=()=>$y(e,l,i.value,c);i.addEventListener("input",p);const b=B=>{B.preventDefault(),B.stopPropagation();const V=i.value!==""||document.activeElement===i;i.value="",p(),V&&Fd(i,B)};s.addEventListener("pointerdown",b),s.addEventListener("click",b),p();const v=r.getBoundingClientRect(),y=r.closest("dialog"),k=y instanceof HTMLElement?y:document.body,P=Math.max(160,Math.min(360,window.innerHeight-v.bottom-10));if(y instanceof HTMLElement){const B=y.querySelector(".popup-body")||y,V=y.getBoundingClientRect();Object.assign(o.style,{left:`${v.left-V.left+B.scrollLeft}px`,maxHeight:`${P}px`,top:`${v.bottom-V.top+B.scrollTop+2}px`,width:`${v.width}px`})}else Object.assign(o.style,{left:`${v.left+window.scrollX}px`,maxHeight:`${P}px`,top:`${v.bottom+window.scrollY+2}px`,width:`${v.width}px`});k.append(o),r.classList.add("bai-bai-wi-global-selector-open");const E=B=>{const V=B.target instanceof Node?B.target:null;V&&(o.contains(V)||r.contains(V))||Mr(t)},K=B=>{B.key==="Escape"&&Mr(t)},X=B=>{B.target instanceof Node&&o.contains(B.target)||document.activeElement instanceof Node&&o.contains(document.activeElement)||Mr(t)};document.addEventListener("pointerdown",E,!0),document.addEventListener("keydown",K,!0),window.addEventListener("scroll",X,!0),t.worldInfoGlobalSelectorDropdown={select:e,displayEl:r,dropdown:o,optionsContainer:l,orderedOptions:c,searchInput:i,closeHandler:E,keyHandler:K,scrollHandler:X},de()||requestAnimationFrame(()=>i.focus({preventScroll:!0}))}function E0(e){const t=globalThis.jQuery?.(e);if(!(!t?.data?.("select2")||typeof t.select2!="function"))try{t.select2("close")}catch(n){console.debug(`${dt} Failed to close native global world info select2`,n)}}function Mr(e=J()){const t=e.worldInfoGlobalSelectorDropdown;t&&(document.removeEventListener("pointerdown",t.closeHandler,!0),document.removeEventListener("keydown",t.keyHandler,!0),window.removeEventListener("scroll",t.scrollHandler,!0),t.displayEl?.classList?.remove?.("bai-bai-wi-global-selector-open"),t.dropdown?.remove?.(),e.worldInfoGlobalSelectorDropdown=null)}function Dy(e,t=J()){const n=t.worldInfoGlobalSelectorDropdown;!n||n.select!==e||$y(e,n.optionsContainer,n.searchInput?.value??"",n.orderedOptions)}function $y(e,t,n="",r=null){if(!(e instanceof HTMLSelectElement)||!(t instanceof HTMLElement))return;t.textContent="";const o=String(n).trim().toLowerCase(),i=(Array.isArray(r)?r:Ny(e)).filter(s=>{const l=s.textContent?.trim()||s.value;return!o||l.toLowerCase().includes(o)});if(i.length===0){const s=document.createElement("div");s.className="bai-bai-wi-global-selector-empty",s.textContent="没有找到匹配的世界书",t.append(s);return}i.forEach(s=>{const l=Gy(s);t.append(S0(e,s,l))})}function S0(e,t,n){const r=document.createElement("div");r.className="bai-bai-wi-global-selector-option",r.dataset.value=t.value,r.role="option",r.tabIndex=0,r.setAttribute("aria-selected",n?"true":"false"),r.classList.toggle("selected",n),r.textContent=t.textContent?.trim()||t.value;let o=null;const a=i=>{i.preventDefault(),i.stopPropagation();const s=e?.[Dt];s&&(s.suppressDropdownRefresh=!0),t.selected=!t.selected;const l=Gy(t);r.classList.toggle("selected",l),r.setAttribute("aria-selected",l?"true":"false"),Hy(e),cr(e)};return r.addEventListener("pointerdown",i=>{o={pointerId:i.pointerId,pointerType:i.pointerType,x:i.clientX,y:i.clientY,moved:!1}}),r.addEventListener("pointermove",i=>{if(!o||o.pointerId!==i.pointerId)return;Math.hypot(i.clientX-o.x,i.clientY-o.y)>dM&&(o.moved=!0)}),r.addEventListener("pointerup",i=>{if(!o||o.pointerId!==i.pointerId)return;const s=o.moved&&o.pointerType!=="mouse";o=null,!s&&a(i)}),r.addEventListener("pointercancel",()=>{o=null}),r.addEventListener("keydown",i=>{[" ","Enter"].includes(i.key)&&a(i)}),r}function Ny(e){return Array.from(e.options).filter(t=>t.value!==""&&t.style.display!=="none").sort((t,n)=>no(t)-no(n))}function Vd(e,t=J()){const n=t.worldInfoGlobalSelectorDropdown;if(!(e instanceof HTMLSelectElement)||!n||n.select!==e||!(n.optionsContainer instanceof HTMLElement))return;const r=new Set(Array.from(e.selectedOptions).map(o=>o.value));n.optionsContainer.querySelectorAll(".bai-bai-wi-global-selector-option").forEach(o=>{const a=r.has(o.dataset.value??"");o.classList.toggle("selected",a),o.setAttribute("aria-selected",a?"true":"false")})}function v0(e){return Array.from(e.selectedOptions).sort((t,n)=>no(t)-no(n))}function Hy(e){e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0}));const t=globalThis.jQuery?.(e);t?.data?.("select2")&&t.trigger("change.select2")}function T0(e){if(!(e instanceof HTMLSelectElement))return;const t=Array.from(e.children);if(!t.every(o=>o instanceof HTMLOptionElement))return;const n=new Set(Array.from(e.selectedOptions).map(o=>o.value)),r=document.createDocumentFragment();t.slice().sort((o,a)=>no(o)-no(a)).forEach(o=>{delete o.dataset[zo],r.append(o)}),e.append(r),Array.from(e.options).forEach(o=>{o.selected=n.has(o.value)})}function Gy(e){if(e.selected)return!0;const t=new Set(Vo(vg)),n=Iy(e);return n?t.has(n):!1}function x0(e){const t=e.getAttribute("data-placeholder")||e.getAttribute("placeholder")||e.querySelector('option[value=""]')?.textContent||"搜索/选择全局世界书...";return String(t).trim()||"搜索/选择全局世界书..."}function qi(e){const t=globalThis.jQuery?.(e).data?.("select2")?.$container?.[0]??e.nextElementSibling;return t instanceof HTMLElement&&t.classList.contains("select2-container")?t:null}function no(e){const t=Number.parseInt(e?.dataset?.[zo]??"",10);return Number.isFinite(t)?t:Number.MAX_SAFE_INTEGER}function w0(e){e.dataset[Vi]="true",e.setAttribute("readonly","readonly"),e.setAttribute("inputmode","none"),Wi(e);const t=n=>{_f(e),Fd(e,n),n.stopPropagation()};e.addEventListener("pointerdown",t,{capture:!0,once:!0}),e.addEventListener("touchstart",t,{capture:!0,once:!0}),e.addEventListener("mousedown",t,{capture:!0,once:!0}),setTimeout(()=>{e.dataset[Vi]==="true"&&(Wi(e),_f(e))},gy)}function _f(e){!(e instanceof HTMLInputElement)||e.dataset[Vi]!=="true"||(e.removeAttribute("readonly"),e.getAttribute("inputmode")==="none"&&e.removeAttribute("inputmode"),delete e.dataset[Vi])}function C0(e=J()){if(e.mobileHeaderLayoutHandler)return;const t=globalThis.matchMedia?.("(max-width: 600px)"),n=()=>{const r=document.getElementById("world_popup_entries_list");r instanceof HTMLElement&&(Ca()?(Kd(),Ud(r),Wd(r)):(Zs(),el(r),tl(r)))};e.mobileHeaderLayoutHandler=n,e.mobileHeaderLayoutMediaQuery=t||null,t?.addEventListener?t.addEventListener("change",n):t?.addListener?t.addListener(n):globalThis.addEventListener?.("resize",n),n()}function k0(e=J()){if(e.mobileLayoutMutationObserver)return;const t=document.getElementById("world_popup_entries_list");if(!(t instanceof HTMLElement)||typeof MutationObserver!="function")return;const n=new MutationObserver(r=>{if(!_e.worldInfoListOptimizationEnabled)return;let o=!1;for(const a of r){for(const i of a.addedNodes)if(i instanceof Element&&(i.matches(".world_entry_edit")||i.querySelector?.(".world_entry_edit"))){o=!0;break}if(o)break}o&&(Ca()?(Kd(),Ud(t),Wd(t)):(Zs(),el(t),tl(t)))});n.observe(t,{childList:!0,subtree:!0}),e.mobileLayoutMutationObserver=n}function A0(e=J()){e.mobileLayoutMutationObserver?.disconnect(),e.mobileLayoutMutationObserver=null}function P0(e=J()){const t=e.mobileHeaderLayoutHandler,n=e.mobileHeaderLayoutMediaQuery;t&&(n?.removeEventListener?n.removeEventListener("change",t):n?.removeListener?n.removeListener(t):globalThis.removeEventListener?.("resize",t),e.mobileHeaderLayoutHandler=null,e.mobileHeaderLayoutMediaQuery=null)}function Ca(){return _e.worldInfoListOptimizationEnabled&&!!globalThis.matchMedia?.("(max-width: 600px)").matches}function Ud(e=document){if(!Ca()){tl(e);return}nl(e).forEach(t=>{G0(t)})}function Wd(e=document){if(!Ca()){el(e);return}nl(e).forEach(t=>{t.querySelectorAll(":scope .world_entry_edit").forEach(n=>{B0(n)})})}function Kd(){if(!Ca()){Zs();return}const e=document.getElementById("world_popup"),t=document.getElementById("world_popup_entries_list");if(!(e instanceof HTMLElement)||!(t instanceof HTMLElement)||t.parentElement!==e||e.dataset.baiBaiWorldInfoPopupLayout==="true")return;const n=[];for(let s=e.firstChild;s&&s!==t;s=s.nextSibling)s instanceof HTMLElement&&s.classList.contains(we)||n.push(s);if(!n.some(s=>s instanceof HTMLElement))return;const r=document.createComment("bai-bai-world-info-popup-layout-placeholder"),o=document.createElement("div");o.className="bai-bai-wi-popup-header";const a=document.createElement("div");a.className="bai-bai-wi-popup-source-stash",a.hidden=!0;const i=[];n[0].before(r),r.after(o),o.append(a),a.append(...n),L0(o,a,i),e.dataset.baiBaiWorldInfoPopupLayout="true",e.__baiBaiWorldInfoPopupLayout={header:o,marker:r,nodesBeforeList:n,movedNodes:i}}function Zs(){const e=document.getElementById("world_popup"),t=e?.__baiBaiWorldInfoPopupLayout;if(!(!(e instanceof HTMLElement)||!t?.header)){for(const n of t.movedNodes||[])n?.node instanceof Node&&n.placeholder instanceof Comment&&n.placeholder.parentNode&&n.placeholder.replaceWith(n.node);t.marker instanceof Comment&&t.marker.parentNode?t.marker.replaceWith(...t.nodesBeforeList||Array.from(t.header.childNodes)):t.header.parentNode&&t.header.before(...t.nodesBeforeList||Array.from(t.header.childNodes)),t.header.remove(),delete e.__baiBaiWorldInfoPopupLayout,delete e.dataset.baiBaiWorldInfoPopupLayout}}function L0(e,t,n){const r=t.querySelector("#world_editor_select"),o=t.querySelector("#world_create_button"),a=O0(t,o),i=M0(r),s=new Set(i),l=new Set,c=I0(t);for(const u of i)c.includes(u)&&(Wa(u,e,n),l.add(u));a instanceof Node&&(Wa(a,e,n),l.add(a)),o instanceof Node&&(Wa(o,e,n),l.add(o));for(const u of c)l.has(u)||s.has(u)||(Wa(u,e,n),l.add(u))}function I0(e){const t=[];return Fy(e,t),t}function Fy(e,t){for(const n of Array.from(e.childNodes)){if(n.nodeType===Node.TEXT_NODE){n.nodeValue?.trim()&&t.push(n);continue}if(n instanceof HTMLElement){if(R0(n)){t.push(n);continue}Fy(n,t)}}}function R0(e){return e instanceof HTMLElement?e.id==="world_info_pagination"||e.matches(["#world_editor_select","#world_create_button",".select2-container",".menu_button","button","input","select","textarea","a[href]"].join(","))?!0:e.childElementCount===0&&!!e.textContent?.trim():!1}function M0(e){if(!(e instanceof HTMLElement))return[];const t=[e],n=e.nextElementSibling;return n instanceof HTMLElement&&n.classList.contains("select2-container")&&t.push(n),t}function Wa(e,t,n){if(!(e instanceof Node)||!(t instanceof HTMLElement))return;const r=document.createComment("bai-bai-world-info-popup-inner-placeholder");e.before(r),n.push({node:e,placeholder:r}),t.append(e)}function O0(e,t){return e instanceof HTMLElement?document.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode(r){if(r===t||t?.contains?.(r))return NodeFilter.FILTER_REJECT;const o=r.textContent?.trim();return/^(\u6216|or)$/i.test(o||"")?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}}).nextNode():null}function B0(e){if(!(e instanceof HTMLElement)||e.dataset.baiBaiWorldInfoMobileExpandedLayout==="true")return;const t=e.querySelector(":scope > .flex-container.wide100p.alignitemscenter"),n=t?.querySelector(':scope > [name="keywordsAndLogicBlock"]'),r=t?.querySelector(':scope > [name="perEntryOverridesBlock"]'),o=t?.querySelector(':scope > [name="contentAndCharFilterBlock"]'),a=t?.querySelector(":scope > .commentContainer"),i=n?.querySelector(":scope > .keyprimary"),s=n?.querySelector(":scope > .world_entry_form_control:not(.keyprimary):not(.keysecondary)"),l=n?.querySelector(":scope > .keysecondary"),c=o?.querySelector('textarea[name="content"]'),p=c?.closest(".world_entry_form_control")?.querySelector('label[for="content "] small > span.alignitemscenter'),b=p?.querySelector(":scope > .alignitemscenter.flex-container"),v=Array.from(p?.children??[]).find(O=>O instanceof HTMLElement&&O!==b&&O.querySelector(".world_entry_form_token_counter")),y=b?.querySelector(".editor_maximize"),k=Array.from(p?.children??[]).find(O=>O instanceof HTMLElement&&O.querySelector('input[name="excludeRecursion"]'));if(!(t instanceof HTMLElement)||!(n instanceof HTMLElement)||!(i instanceof HTMLElement)||!(o instanceof HTMLElement))return;const P=document.createElement("div");P.className="bai-bai-wi-mobile-expanded-advanced flex-container flexFlowColumn flexGap10",p instanceof HTMLElement&&p.classList.add("bai-bai-wi-mobile-content-header"),b instanceof HTMLElement&&b.classList.add("bai-bai-wi-mobile-content-title-group"),v instanceof HTMLElement&&v.classList.add("bai-bai-wi-mobile-content-meta");const E=D0(v),K=$0(c,14);y instanceof HTMLElement&&(y.classList.add("bai-bai-wi-mobile-content-maximize"),p?.append(y)),[s,l,k].forEach(O=>{O instanceof HTMLElement&&P.append(O)});const X=[P.childElementCount>0?P:null,r,a,...Array.from(e.children).filter(O=>O!==t)].filter(O=>O instanceof HTMLElement),B=new Map;for(const O of X){const le=document.createComment("bai-bai-world-info-mobile-expanded-placeholder");O.before(le),B.set(O,le)}t.classList.add("bai-bai-wi-mobile-expanded-main");const V=document.createElement("div");V.className="bai-bai-wi-mobile-expanded-extra inline-drawer wide100p flexFlowColumn";const ee=document.createElement("div");ee.className="bai-bai-wi-mobile-expanded-extra-toggle inline-drawer-header inline-drawer-header-pointer";const I=document.createElement("strong");I.textContent="更多设置";const Z=document.createElement("div");Z.className="fa-solid fa-circle-chevron-down inline-drawer-icon down",ee.append(I,Z);const te=document.createElement("div");te.className="bai-bai-wi-mobile-expanded-extra-content inline-drawer-content flex-container flexFlowColumn flexGap10 paddingBottom5px",te.style.display="none",te.append(...X);const ve=O=>{O.preventDefault(),O.stopPropagation();const le=getComputedStyle(te).display==="none";te.style.display=le?"flex":"none",Z.classList.toggle("down",!le),Z.classList.toggle("up",le),Z.classList.toggle("fa-circle-chevron-down",!le),Z.classList.toggle("fa-circle-chevron-up",le)};ee.addEventListener("click",ve),V.append(ee,te),e.append(V),e.dataset.baiBaiWorldInfoMobileExpandedLayout="true",e.__baiBaiWorldInfoMobileExpandedLayout={mainRow:t,keywordsBlock:n,primaryKeyBlock:i,mobileAdvancedBlock:P,logicBlock:s,secondaryKeyBlock:l,contentHeader:p,contentTitleGroup:b,contentMeta:v,contentMaximize:y,tokenGapTextNode:E,contentTextareaRowsState:K,recursionOptions:k,contentBlock:o,extraDrawer:V,extraHeader:ee,toggleHandler:ve,placeholders:B,extraNodes:X}}function el(e=document){nl(e).forEach(t=>{t.querySelectorAll(':scope .world_entry_edit[data-bai-bai-world-info-mobile-expanded-layout="true"]').forEach(n=>{H0(n)})})}function D0(e){if(!(e instanceof HTMLElement))return null;const n=e.querySelector(".world_entry_form_token_counter")?.previousSibling;if(n?.nodeType!==Node.TEXT_NODE||!/[\s\u00a0]+/.test(n.nodeValue||""))return null;const r={node:n,value:n.nodeValue};return n.nodeValue="",r}function $0(e,t){if(!(e instanceof HTMLTextAreaElement))return null;const n={textarea:e,rowsAttribute:e.getAttribute("rows")};return e.rows=t,n}function N0(e){e?.textarea instanceof HTMLTextAreaElement&&(e.rowsAttribute===null?e.textarea.removeAttribute("rows"):e.textarea.setAttribute("rows",e.rowsAttribute))}function H0(e){const t=e?.__baiBaiWorldInfoMobileExpandedLayout;if(!(e instanceof HTMLElement)||!t?.extraDrawer)return;t.keywordsBlock instanceof HTMLElement&&[t.primaryKeyBlock,t.logicBlock,t.secondaryKeyBlock].forEach(r=>{r instanceof Node&&t.keywordsBlock.append(r)});const n=t.contentBlock instanceof HTMLElement?t.contentBlock.querySelector('label[for="content "] small > span.alignitemscenter'):null;n instanceof HTMLElement&&t.recursionOptions instanceof HTMLElement&&n.append(t.recursionOptions),t.contentTitleGroup instanceof HTMLElement&&t.contentMaximize instanceof HTMLElement&&t.contentTitleGroup.append(t.contentMaximize),t.tokenGapTextNode?.node?.nodeType===Node.TEXT_NODE&&(t.tokenGapTextNode.node.nodeValue=t.tokenGapTextNode.value),N0(t.contentTextareaRowsState),[t.contentHeader,t.contentTitleGroup,t.contentMeta,t.contentMaximize].forEach(r=>{r instanceof HTMLElement&&r.classList.remove("bai-bai-wi-mobile-content-header","bai-bai-wi-mobile-content-title-group","bai-bai-wi-mobile-content-meta","bai-bai-wi-mobile-content-maximize")}),t.mainRow?.classList?.remove("bai-bai-wi-mobile-expanded-main");for(const r of t.extraNodes||[]){const o=t.placeholders?.get(r);r instanceof Node&&o instanceof Comment&&o.parentNode&&o.replaceWith(r)}t.extraHeader?.removeEventListener?.("click",t.toggleHandler),t.extraDrawer.remove(),delete e.__baiBaiWorldInfoMobileExpandedLayout,delete e.dataset.baiBaiWorldInfoMobileExpandedLayout}function G0(e){if(!(e instanceof HTMLElement)||e.dataset.baiBaiWorldInfoMobileHeaderLayout==="true")return;const t=e.querySelector(":scope > .world_entry_form > .inline-drawer > .inline-drawer-header"),n=t?.querySelector(":scope > .world_entry_thin_controls"),r=n?.querySelector(":scope > .flex-container.alignitemscenter.wide100p"),o=r?.querySelector(":scope > .WIEntryTitleAndStatus"),a=r?.querySelector(":scope > .WIEnteryHeaderControls"),i=t?.querySelector(":scope > .drag-handle"),s=n?.querySelector(":scope > .inline-drawer-toggle"),l=n?.querySelector(":scope > .killSwitch"),c=t?.querySelector(":scope > .move_entry_button"),u=t?.querySelector(":scope > .duplicate_entry_button"),p=t?.querySelector(":scope > .delete_entry_button"),b=a?.querySelector(':scope > [name="PositionBlock"]'),v=a?.querySelector('input[name="depth"]')?.closest(".world_entry_form_control"),y=a?.querySelector('input[name="order"]')?.closest(".world_entry_form_control"),k=a?.querySelector(":scope > .probabilityContainer"),P=o?.querySelector('select[name="entryStateSelector"]'),E=b?.querySelector(":scope > label"),K=v?.querySelector(":scope > label");if(!(t instanceof HTMLElement)||!(n instanceof HTMLElement)||!(o instanceof HTMLElement)||!(a instanceof HTMLElement)||!(s instanceof HTMLElement)||!(l instanceof HTMLElement)||!(b instanceof HTMLElement)||!(v instanceof HTMLElement)||!(y instanceof HTMLElement)||!(k instanceof HTMLElement)||!(E instanceof HTMLElement)||!(K instanceof HTMLElement))return;const X=[i,n,c,u,p].filter(Ct=>Ct instanceof Node),B=new Map;for(const Ct of X){const La=document.createComment("bai-bai-world-info-mobile-header-placeholder");Ct.before(La),B.set(Ct,La)}const V=document.createElement("div");V.className="bai-bai-wi-mobile-header";const ee=document.createElement("div");ee.className="bai-bai-wi-mobile-hidden-stash",ee.hidden=!0,ee.append(n);const I=document.createElement("div");I.className="bai-bai-wi-mobile-header-grid";const Z=document.createElement("div");Z.className="bai-bai-wi-mobile-title-cell",Z.append(o);const te=document.createElement("div");te.className="bai-bai-wi-mobile-state-cell",P instanceof HTMLElement&&te.append(P);const ve=document.createElement("div");ve.className="bai-bai-wi-mobile-menu-cell",i instanceof HTMLElement&&ve.append(i);const O=document.createElement("div");O.className="bai-bai-wi-mobile-position-label-cell",O.append(E);const le=document.createElement("div");le.className="bai-bai-wi-mobile-depth-label-cell",le.append(K);const Je=document.createElement("div");Je.className="bai-bai-wi-mobile-label-spacer-cell";const ie=document.createElement("div");ie.className="bai-bai-wi-mobile-position-cell",ie.append(b);const Ze=document.createElement("div");Ze.className="bai-bai-wi-mobile-depth-cell",Ze.append(v);const Fe=document.createElement("div");Fe.className="bai-bai-wi-mobile-enabled-cell",Fe.append(l),I.append(Z,te,ve,O,le,Je,ie,Ze,Fe);const tn=document.createElement("div");tn.className="bai-bai-wi-mobile-footer";const Gt=document.createElement("div");Gt.className="bai-bai-wi-mobile-number-group",Gt.append(y,k);const xt=document.createElement("div");xt.className="bai-bai-wi-mobile-action-group",[c,u,p].forEach(Ct=>{Ct instanceof HTMLElement&&xt.append(Ct)});const wt=document.createElement("div");wt.className="bai-bai-wi-mobile-expand-slot",wt.append(s),tn.append(Gt,xt,wt),V.append(ee,I,tn),t.append(V),e.dataset.baiBaiWorldInfoMobileHeaderLayout="true",e.__baiBaiWorldInfoMobileHeaderLayout={placeholders:B,layout:V,hiddenStash:ee,nodes:X,thinControls:n,body:r,titleStatus:o,entryStateSelector:P,positionLabel:E,depthLabel:K,controls:a,toggle:s,killSwitch:l,positionBlock:b,depthBlock:v,orderBlock:y,probabilityBlock:k}}function tl(e=document){nl(e).filter(t=>t.dataset.baiBaiWorldInfoMobileHeaderLayout==="true").forEach(t=>{F0(t)})}function nl(e=document){return e instanceof HTMLElement&&e.matches("#world_popup_entries_list > .world_entry")?[e]:e instanceof HTMLElement&&e.id==="world_popup_entries_list"?Array.from(e.querySelectorAll(":scope > .world_entry")):Array.from(e.querySelectorAll?.("#world_popup_entries_list > .world_entry")??[])}function F0(e){const t=e?.__baiBaiWorldInfoMobileHeaderLayout;if(!(!(e instanceof HTMLElement)||!t?.layout)){t.titleStatus instanceof HTMLElement&&t.entryStateSelector instanceof HTMLElement&&t.titleStatus.append(t.entryStateSelector),t.positionBlock instanceof HTMLElement&&t.positionLabel instanceof HTMLElement&&t.positionBlock.prepend(t.positionLabel),t.depthBlock instanceof HTMLElement&&t.depthLabel instanceof HTMLElement&&t.depthBlock.prepend(t.depthLabel),t.body instanceof HTMLElement&&t.titleStatus instanceof HTMLElement&&t.controls instanceof HTMLElement&&t.body.append(t.titleStatus,t.controls),t.controls instanceof HTMLElement&&[t.positionBlock,t.depthBlock,t.orderBlock,t.probabilityBlock].forEach(n=>{n instanceof Node&&t.controls.append(n)}),t.thinControls instanceof HTMLElement&&[t.toggle,t.killSwitch,t.body].forEach(n=>{n instanceof Node&&t.thinControls.append(n)});for(const n of t.nodes||[]){const r=t.placeholders?.get(n);n instanceof Node&&r instanceof Comment&&r.parentNode&&r.replaceWith(n)}t.layout.remove(),delete e.__baiBaiWorldInfoMobileHeaderLayout,delete e.dataset.baiBaiWorldInfoMobileHeaderLayout}}function z0(){if(document.getElementById(Ic))return;const e=document.createElement("style");e.id=Ic,e.textContent=`
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
`,document.head.append(e)}function V0(){document.getElementById(Ic)?.remove()}function zy(e=J()){if(!_e.worldInfoListOptimizationEnabled||_e.worldInfoSearchReplaceEnabled===!1){ia(e);return}const t=document.getElementById("world_popup_entries_list");if(!(t instanceof HTMLElement)||e.worldInfoSearchReplacePanel instanceof HTMLElement&&e.worldInfoSearchReplacePanel.isConnected&&e.worldInfoSearchReplacePanel.nextElementSibling===t)return;ia(e);const n=document.createElement("div");n.className=`${we} inline-drawer`,n.dataset.collapsed="true";const r=document.createElement("div");r.className="inline-drawer-toggle inline-drawer-header standoutHeader bai-bai-wi-search-replace-header",r.tabIndex=0,r.role="button",r.setAttribute("aria-expanded","false");const o=document.createElement("span");o.className="bai-bai-wi-search-replace-title",o.textContent="查找替换";const a=document.createElement("span");a.className="bai-bai-wi-search-replace-summary",a.textContent="";const i=document.createElement("div");i.className="inline-drawer-icon fa-solid fa-circle-chevron-down down",i.setAttribute("aria-hidden","true"),r.append(o,a,i);const s=document.createElement("div");s.className="inline-drawer-content bai-bai-wi-search-replace-body",s.style.display="none";const l=document.createElement("div");l.className="bai-bai-wi-search-replace-form";const c=document.createElement("input");c.type="text",c.className="text_pole bai-bai-wi-search-replace-find",c.placeholder="查找正文内容",c.autocomplete="off";const u=document.createElement("input");u.type="text",u.className="text_pole bai-bai-wi-search-replace-replace",u.placeholder="替换为",u.autocomplete="off";const p=document.createElement("label");p.className="checkbox_label bai-bai-wi-search-replace-case";const b=document.createElement("input");b.type="checkbox";const v=document.createElement("span");v.textContent="区分大小写",p.append(b,v);const y=document.createElement("label");y.className="checkbox_label bai-bai-wi-search-replace-comment";const k=document.createElement("input");k.type="checkbox";const P=document.createElement("span");P.textContent="包含条目名称",y.append(k,P);const E=document.createElement("button");E.type="button",E.className="menu_button bai-bai-wi-search-replace-count",E.textContent="统计命中";const K=document.createElement("button");K.type="button",K.className="menu_button danger_button bai-bai-wi-search-replace-apply",K.textContent="全部替换",l.append(c,u,p,y,E,K),s.append(l),n.append(r,s),t.before(n);const X={panel:n,header:r,summary:a,toggleIcon:i,findInput:c,replaceInput:u,caseInput:b,commentInput:k,countButton:E,replaceButton:K},B=[],V=(I,Z,te)=>{I.addEventListener(Z,te),B.push({target:I,eventName:Z,handler:te})},ee=()=>zr(e,X);V(n,"inline-drawer-toggle",()=>{const I=i.classList.contains("down");n.dataset.collapsed=I?"true":"false",r.setAttribute("aria-expanded",I?"false":"true")}),V(c,"input",()=>{e.worldInfoSearchReplaceStats=null,ee()}),V(u,"input",()=>{e.worldInfoSearchReplaceStats=null,ee()}),V(b,"change",()=>{e.worldInfoSearchReplaceStats=null,ee()}),V(k,"change",()=>{e.worldInfoSearchReplaceStats=null,ee()}),V(E,"click",()=>U0(e,X)),V(K,"click",()=>W0(e,X)),e.worldInfoSearchReplacePanel=n,e.worldInfoSearchReplaceHandlers=B,ee()}function ia(e=J()){for(const t of e.worldInfoSearchReplaceHandlers||[])t.target?.removeEventListener?.(t.eventName,t.handler);e.worldInfoSearchReplaceHandlers=[],e.worldInfoSearchReplacePanel?.remove?.(),e.worldInfoSearchReplacePanel=null,e.worldInfoSearchReplaceStats=null}function zr(e,t){const n=t.findInput.value,r=n.length>0,o=Wy();t.countButton.disabled=!r,t.replaceButton.disabled=!r;const a=e.worldInfoSearchReplaceStats;if(r&&o&&a&&a.worldName===o&&a.findValue===n&&a.caseSensitive===t.caseInput.checked&&a.includeComment===t.commentInput.checked){t.summary.textContent=`命中 ${a.matchedEntries} 条 / ${a.replacementCount} 处`;return}t.summary.textContent=""}async function U0(e,t){const n=Vy(t);if(!n){zr(e,t),Qn("warning","请先选择世界书。");return}Yi(t,!0);try{const r=await Bc(n);e.worldInfoSearchReplaceStats=r,zr(e,t),r.replacementCount===0&&Qn("warning","没有找到匹配的正文内容。")}catch(r){console.error(`${dt} Failed to count World Info search matches`,r),Qn("error",`统计失败：${r?.message||String(r)}`)}finally{Yi(t,!1)}}async function W0(e,t){const n=Vy(t);if(!n){zr(e,t),Qn("warning","请先选择世界书。");return}Yi(t,!0);try{const r=await Bc(n);if(e.worldInfoSearchReplaceStats=r,zr(e,t),r.replacementCount===0){Qn("warning","没有找到匹配的正文内容。");return}if(!await X0(r))return;const a=await K0(n);e.worldInfoSearchReplaceStats=await Bc(n),zr(e,t),j0(a.updatedEntries),Qn("success",`已替换 ${a.matchedEntries} 条 / ${a.replacementCount} 处。`)}catch(r){console.error(`${dt} Failed to replace World Info content`,r),Qn("error",`替换失败：${r?.message||String(r)}`)}finally{Yi(t,!1)}}function Vy(e){const t=Wy(),n=e.findInput.value;return!t||n.length===0?null:{worldName:t,findValue:n,replaceValue:e.replaceInput.value,caseSensitive:e.caseInput.checked,includeComment:e.commentInput.checked}}async function Bc(e){const t=await Tg(e.worldName);if(!t?.entries||typeof t.entries!="object")throw new Error("无法读取当前世界书数据");return Y0(t,e)}async function K0(e){const t=await Tg(e.worldName);if(!t?.entries||typeof t.entries!="object")throw new Error("无法读取当前世界书数据");const n=Uy(e.findValue,e.caseSensitive);let r=0,o=0;const a=[];for(const i of Object.values(t.entries)){if(!i)continue;let s=0;const l={uid:i.uid};if(typeof i.content=="string"){const{value:c,count:u}=yf(i.content,n,e.replaceValue);u>0&&(s+=u,i.content=c,Up(t,i.uid,"content",c),l.content=c)}if(e.includeComment&&typeof i.comment=="string"){const{value:c,count:u}=yf(i.comment,n,e.replaceValue);u>0&&(s+=u,i.comment=c,Up(t,i.uid,"comment",c),l.comment=c)}s>0&&(r+=1,o+=s,a.push(l))}return o>0&&await Ev(e.worldName,t,!0),{matchedEntries:r,replacementCount:o,updatedEntries:a}}function yf(e,t,n){let r=0;return t.lastIndex=0,{value:e.replace(t,()=>(r+=1,n)),count:r}}function j0(e){if(!(!Array.isArray(e)||e.length===0))for(const{uid:t,content:n,comment:r}of e){const o=document.querySelector(`#world_popup_entries_list .world_entry[uid="${q0(t)}"]`),a=o?.querySelector?.('textarea[name="content"]'),i=o?.querySelector?.('textarea[name="comment"]');typeof n=="string"&&a instanceof HTMLTextAreaElement&&(a.value=n,globalThis.CSS?.supports?.("field-sizing","content")||bi(a)),typeof r=="string"&&i instanceof HTMLTextAreaElement&&(i.value=r,globalThis.CSS?.supports?.("field-sizing","content")||bi(i))}}function q0(e){return globalThis.CSS?.escape?globalThis.CSS.escape(String(e)):String(e).replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Y0(e,t){const n=Uy(t.findValue,t.caseSensitive);let r=0,o=0;for(const a of Object.values(e.entries)){if(!a)continue;const i=typeof a.content=="string"?Ef(a.content,n):0,s=t.includeComment&&typeof a.comment=="string"?Ef(a.comment,n):0,l=i+s;l!==0&&(r+=1,o+=l)}return{worldName:t.worldName,findValue:t.findValue,caseSensitive:t.caseSensitive,includeComment:t.includeComment,matchedEntries:r,replacementCount:o}}function Ef(e,t){return t.lastIndex=0,e.match(t)?.length??0}function Uy(e,t){return new RegExp(Q0(e),t?"g":"gi")}function Q0(e){return String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}async function X0(e){const t=e.includeComment?"正文内容和条目名称":"正文内容",n=await fe(`
        <div class="bai-bai-wi-search-replace-confirm">
            <p>即将替换当前世界书 <strong>${J0(e.worldName)}</strong> 的${t}。</p>
            <p>命中条目：<strong>${e.matchedEntries}</strong> 条<br>替换次数：<strong>${e.replacementCount}</strong> 处</p>
            <p>此操作会立即保存，请确认后继续。</p>
        </div>
    `,ge.CONFIRM,"",{okButton:"全部替换",cancelButton:"取消"});return n===Kn.AFFIRMATIVE||n===!0}function J0(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Wy(){const e=document.getElementById("world_editor_select");if(!(e instanceof HTMLSelectElement)||e.value==="")return null;const t=e.value.trim(),n=Number.parseInt(t,10);if(/^\d+$/.test(t)&&Number.isInteger(n)&&Ir?.[n])return Ir[n];if(Ir?.includes?.(t))return t;const r=e.selectedOptions?.[0]?.textContent?.trim();return r&&Ir?.includes?.(r)?r:null}function Yi(e,t){e.countButton.disabled=t||e.findInput.value.length===0,e.replaceButton.disabled=e.countButton.disabled,e.findInput.disabled=t,e.replaceInput.disabled=t,e.caseInput.disabled=t,e.countButton.classList.toggle("disabled",t),e.replaceButton.classList.toggle("disabled",t)}function Qn(e,t){const n=globalThis.toastr,r="世界书查找替换";if(typeof n?.[e]=="function"){n[e](t,r);return}console[e==="error"?"error":"info"](`${r}: ${t}`)}function Dc(){const e=J();e.enabled=!!_e.worldInfoListOptimizationEnabled,e.enabled?(Z0(e),UM(e),KM(e),l0(e),z0(),_e.worldInfoSearchReplaceEnabled!==!1?zy(e):ia(e),C0(e),k0(e)):(jd(e),eO(e),WM(e),jM(e),c0(e),ia(e),A0(e),P0(e),Zs(),el(),tl(),V0())}function J(){(!ce[Io]||typeof ce[Io]!="object")&&(ce[Io]={enabled:!1,app:null,root:null,modulePromise:null,renderToken:0,activeAppendCapture:null,originalAppend:null,patchedAppend:null,originalPagination:null,patchedPagination:null,renderQueue:null,mobileHeaderLayoutHandler:null,mobileHeaderLayoutMediaQuery:null,mobileLayoutMutationObserver:null,worldInfoEditorSelectOpenHandler:null,worldInfoEditorSelectKeyHandler:null,worldInfoEditorSelectSelect2Handler:null,worldInfoEditorSelectSearchOpeningHandler:null,worldInfoEditorSelectSearchOpenHandler:null,worldInfoEditorSelectSearchInteractionGuard:null,worldInfoEditorSelectGroupingApplying:!1,worldInfoGlobalSelectorDropdown:null,worldInfoGlobalSelectorSyncHandler:null,worldInfoGlobalSelectorTriggerHandler:null,worldInfoGlobalSelectorTriggerEvents:null,worldInfoGlobalSelectorSelects:new Set,worldInfoSearchReplacePanel:null,worldInfoSearchReplaceHandlers:[],worldInfoSearchReplaceStats:null});const e=ce[Io];return e.worldInfoGlobalSelectorDropdown??=null,e.worldInfoGlobalSelectorSyncHandler??=null,e.worldInfoGlobalSelectorTriggerHandler??=null,e.worldInfoGlobalSelectorTriggerEvents??=null,e.worldInfoSearchReplacePanel??=null,e.worldInfoSearchReplaceHandlers??=[],e.worldInfoSearchReplaceStats??=null,e.worldInfoGlobalSelectorSelects instanceof Set||(e.worldInfoGlobalSelectorSelects=new Set),ce[Io]}function Z0(e=J()){if(e.patchedPagination&&globalThis.jQuery?.fn?.pagination===e.patchedPagination)return;const t=globalThis.jQuery?.fn?.pagination;if(typeof t!="function"){console.warn(`${dt} jQuery.pagination is unavailable; World Info list optimization was not installed`);return}function n(...r){if(_e.worldInfoListOptimizationEnabled&&tO(this,r)){const o={...r[0]},a=o.callback;a?.__baiBaiToolkitWorldInfoVueListWrapped||(o.callback=function(s,...l){return _e.worldInfoListOptimizationEnabled?rO(a,this,s,l):a.call(this,s,...l)},o.callback.__baiBaiToolkitWorldInfoVueListWrapped=!0,o.callback.__baiBaiToolkitWorldInfoVueListOriginal=a),r[0]=o}return t.apply(this,r)}n.__baiBaiToolkitWorldInfoVueListPatched=!0,n.__baiBaiToolkitOriginalPagination=t,Object.assign(n,t),e.originalPagination=t,e.patchedPagination=n,globalThis.jQuery.fn.pagination=n}function eO(e=J()){!e.patchedPagination||!globalThis.jQuery?.fn||(globalThis.jQuery.fn.pagination===e.patchedPagination&&typeof e.originalPagination=="function"&&(globalThis.jQuery.fn.pagination=e.originalPagination),e.originalPagination=null,e.patchedPagination=null)}function tO(e,t){const n=t[0];return n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.callback=="function"&&e?.length===1&&e[0]instanceof Element&&e[0].id==="world_info_pagination"}function nO(e=J()){if(e.patchedAppend&&globalThis.jQuery?.fn?.append===e.patchedAppend)return;const t=globalThis.jQuery?.fn?.append;if(typeof t!="function"){console.warn(`${dt} jQuery.append is unavailable; World Info list optimization was not installed`);return}function n(...r){const o=e.activeAppendCapture;return _e.worldInfoListOptimizationEnabled&&o?.list&&this?.length===1&&this[0]===o.list?(o.appendCalls.push(r),this):t.apply(this,r)}n.__baiBaiToolkitWorldInfoVueListAppendPatched=!0,n.__baiBaiToolkitOriginalAppend=t,Object.assign(n,t),e.originalAppend=t,e.patchedAppend=n,globalThis.jQuery.fn.append=n}function Ro(e=J()){!e.patchedAppend||!globalThis.jQuery?.fn||(globalThis.jQuery.fn.append===e.patchedAppend&&typeof e.originalAppend=="function"&&(globalThis.jQuery.fn.append=e.originalAppend),e.activeAppendCapture=null,e.originalAppend=null,e.patchedAppend=null)}async function rO(e,t,n,r){const o=J(),i=(o.renderQueue||Promise.resolve()).catch(()=>{}).then(()=>oO(o,e,t,n,r)),s=i.finally(()=>{o.renderQueue===s&&(o.renderQueue=null)});return o.renderQueue=s,i}async function oO(e,t,n,r,o){const a=document.getElementById("world_popup_entries_list");if(!_e.worldInfoListOptimizationEnabled||!(a instanceof HTMLElement)||typeof t!="function")return t.call(n,r,...o);jd(e);const i={list:a,appendCalls:[]};e.activeAppendCapture=i,nO(e);const s=e.originalAppend;try{const l=await t.call(n,r,...o);return _e.worldInfoListOptimizationEnabled?e.activeAppendCapture!==i?(Ro(e),l):(e.activeAppendCapture=null,Ro(e),i.appendCalls.length===0||await aO(e,a,i.appendCalls,s),l):(Ro(e),$c(e,a,i.appendCalls,s),l)}catch(l){throw console.debug(`${dt} Failed to render World Info Vue list`,l),e.activeAppendCapture=null,Ro(e),$c(e,a,i.appendCalls,s),l}finally{e.activeAppendCapture===i&&(e.activeAppendCapture=null),Ro(e)}}async function aO(e,t,n,r){const o=await cO(e),a=++e.renderToken;jd(e),e.root=t,e.app=o.createApp(iO(o,{state:e,list:t,appendCalls:n,append:r,renderToken:a})),e.app.mount(t)}function iO(e,t){return{name:"BaiBaiWorldInfoVueList",setup(){return e.onMounted(()=>{t.state.renderToken!==t.renderToken||!_e.worldInfoListOptimizationEnabled||($c(t.state,t.list,t.appendCalls,t.append),lO(t.list))}),()=>null}}}function $c(e,t,n,r=null){if(!(t instanceof HTMLElement)||!Array.isArray(n)||n.length===0)return;const o=r||e.originalAppend;if(typeof o!="function"){for(const i of n)t.append(...sO(i));return}const a=globalThis.jQuery?.(t);if(a)for(const i of n)o.apply(a,i)}function sO(e){const t=[];for(const n of e)if(n instanceof Node)t.push(n);else if(n?.jquery&&typeof n.toArray=="function")t.push(...n.toArray());else if(Array.isArray(n))for(const r of n)r instanceof Node?t.push(r):r?.jquery&&typeof r.toArray=="function"&&t.push(...r.toArray());else if(typeof n=="string"){const r=document.createElement("template");r.innerHTML=n,t.push(...r.content.childNodes)}return t}function lO(e){_e.worldInfoSearchReplaceEnabled!==!1?zy():ia(),Kd(),Ud(e),Wd(e),e.querySelectorAll('textarea[name="comment"]').forEach(t=>{t instanceof HTMLTextAreaElement&&!globalThis.CSS?.supports?.("field-sizing","content")&&bi(t)})}function jd(e=J()){if(e.app){try{e.app.unmount()}catch(t){console.debug(`${dt} Failed to unmount World Info Vue list`,t)}e.app=null,e.root=null}}async function cO(e=J()){return e.modulePromise||(e.modulePromise=tt(()=>import("./vue.runtime.esm-bundler.GI5_MaGP.chunk.js"),__vite__mapDeps([0,1]))),e.modulePromise}const Ky="0.30.0",T="[柏宝箱]",re="baiBaiToolkit",Ka="__baiBaiToolkitExtensionInstalled",uO="__baiBaiToolkitFastSettingsBootstrapFetchPatched",dO="__baiBaiToolkitFastCharacterListFetchPatched",pO="__baibaokuEarlyBridge",ja="__baiBaiToolkitLazyThemeChangeGuard",Sf="__baiBaiToolkitReloadGuard",jy="/api/plugins/baibaoku/v1/status",qy="/api/plugins/baibaoku/v1/fast-config",mO="/api/plugins/baibaoku/v1/chats/fast-get",fO="/api/plugins/baibaoku/v1/themes/get",vf="0.4.3",Tf="0.4.4",xf="bai_bai_toolkit_theme_loading_style",qd="bai-bai-toolkit-theme-loading-host",Nc="bai-bai-toolkit-theme-loading-overlay",Yy="bai-bai-toolkit-theme-loading-overlay-fixed",Hc="bai-bai-toolkit-theme-loading-spinner",Yd="#theme-manager-panel",gO="themeManager_backgroundBindings",bO=`${Yd} .theme-item[data-value]`,hO="#bg_menu_content .bg_example, #bg_custom_content .bg_example",ur="/api/plugins/baibaoku/v1/chats/save-generate",_O=`${ur}/discard`,yO=3e3,EO=5*6e4,Uo="__baiBaiToolkitSaveGenerateFetchPatched",SO="/api/backends/chat-completions/generate",vO="/api/chats/save",TO="x-baibaoku-save-generate-status",xO="x-baibaoku-save-generate-job-id",wO=1e3,ka=30*6e4,CO=250,kO=1500,Qy=12e4,wf=8,AO="bai_bai_toolkit_save_generate_seen",Cf="bai_bai_toolkit_save_generate_display_style",ae="bai-bai-save-generate-display",Xy="#send_but, #option_regenerate",PO=1500,LO=3e3,IO=100,Bl="saveGenerateDefaultEnabledMigrated",RO=6e4,MO=1e4,OO=1500,Jy=1e3,Dl="__baiBaiToolkitSaveRequestGzipFetchPatched",$l="__baiBaiToolkitFastChatGetFetchPatched",kf="__baiBaiToolkitFastChatGetJQueryTriggerGuardPatched",Nl="__baiBaiToolkitPerformanceTraceFetchPatched",ii="__baiBaiToolkitTranslateMessageUpdatedOptimized",Qi="__baiBaiToolkitCustomCssInputOptimized",Qe="__baiBaiToolkitCustomCssCodeMirrorEditor",Af="__baiBaiToolkitPageRestoreSelectionGuard",Gc="bai_bai_toolkit_description_codemirror_editor_style",Fc="bai_bai_toolkit_custom_css_codemirror_editor_style",er="__baiBaiToolkitDescriptionCodeMirrorEditor",Hl="__baiBaiToolkitDescriptionCodeMirrorModules",Zy=["main_text_color","italics_text_color","underline_text_color","quote_text_color","blur_tint_color","chat_tint_color","user_mes_blur_tint_color","bot_mes_blur_tint_color","shadow_color","border_color","blur_strength","custom_css","shadow_width","font_scale","fast_ui_mode","waifuMode","chat_display","toastr_position","avatar_style","noShadows","chat_width","timer_enabled","timestamps_enabled","timestamp_model_icon","message_token_count_enabled","mesIDDisplay_enabled","hideChatAvatars_enabled","expand_message_actions","enableZenSliders","enableLabMode","hotswap_enabled","bogus_folders","zoomed_avatar_magnification","reduced_motion","compact_input_area","show_swipe_num_all_messages","click_to_edit","media_display"],BO=[{key:"main_text_color",selector:"#main-text-color-picker",variable:"--SmartThemeBodyColor"},{key:"italics_text_color",selector:"#italics-color-picker",variable:"--SmartThemeEmColor"},{key:"underline_text_color",selector:"#underline-color-picker",variable:"--SmartThemeUnderlineColor"},{key:"quote_text_color",selector:"#quote-color-picker",variable:"--SmartThemeQuoteColor"},{key:"blur_tint_color",selector:"#blur-tint-color-picker",variable:"--SmartThemeBlurTintColor",metaTheme:!0},{key:"chat_tint_color",selector:"#chat-tint-color-picker",variable:"--SmartThemeChatTintColor"},{key:"user_mes_blur_tint_color",selector:"#user-mes-blur-tint-color-picker",variable:"--SmartThemeUserMesBlurTintColor"},{key:"bot_mes_blur_tint_color",selector:"#bot-mes-blur-tint-color-picker",variable:"--SmartThemeBotMesBlurTintColor"},{key:"shadow_color",selector:"#shadow-color-picker",variable:"--SmartThemeShadowColor"},{key:"border_color",selector:"#border-color-picker",variable:"--SmartThemeBorderColor"}],Xi="__baiBaiToolkitRegexQuickOperationHandler",Ji="__baiBaiToolkitRegexQuickOperationObserver",Zi="__baiBaiToolkitRegexQuickOperationImportHandler",es="__baiBaiToolkitRegexPendingChangesLifecycleHandler",ts="__baiBaiToolkitRegexVueManagerClickHandler",ns="__baiBaiToolkitRegexVueScopedContextHandler",rs="__baiBaiToolkitRegexVuePresetRenameHandler",os="__baiBaiToolkitRegexPresetGroupPortabilityHandler",Or="__baiBaiToolkitRegexVueNativeRenderGuard",Pf="bai_bai_toolkit_regex_vue_manager_root",zc="bai_bai_toolkit_regex_vue_manager_style",qa="__baiBaiToolkitCharacterListAvatarLazyLoad",Vc="bai_bai_toolkit_character_list_avatar_lazy_load_style",Ce="__ungrouped",$t="__pending_assignment",eE="baibaiToolkit.regexGroups",as=1,is="bai-bai-regex-drop-target",tE="bai-bai-regex-drag-indicator",si="bai-bai-regex-vue-dragging",Lf=180,DO=260,If=4,Rf=10,nE=40,rE=6,Uc=350,Qd="#description_textarea",Xd="bai-bai-toolkit-description-source-hidden",oE="bai_bai_description_codemirror_editor",$O="bai-bai-toolkit-description-codemirror-editor",NO=250,Jd=12e3,Nt="customCSS",ss='textarea.maximized_textarea[data-for="customCSS"]',ls="custom-style",cs="#CustomCSS-textAreaBlock",Zd="#UI-Customization",R="bai_bai_custom_css_codemirror_editor",HO="bai-bai-toolkit-custom-css-codemirror-editor",ep="bai-bai-toolkit-custom-css-source-hidden",us="bai-bai-toolkit-custom-css-host",tp="bai-bai-toolkit-custom-css-layout",oe="bai-bai-toolkit-custom-css-theme-light",ne="bai-bai-toolkit-custom-css-theme-dark",li="bai-bai-toolkit-custom-css-maximized",GO=["#vce-btn-refresh-new","#vce-btn-save-new","#native-btn-save-new","#native-btn-scroll-new","#native-css-search-new","#native-search-dropdown-new .vce-search-item-new"].join(", "),FO=.45,zO=[80,320,1e3],VO=1500,ds="__baiBaiToolkitThemeApplyReflowGuardPatched",aE=["scrollHeight","clientHeight"],UO=[0,80,200,500],Mf="baiBaiToolkitCharacterSearchOptimization",bo="#regex_container",Wc="#rm_extensions_block",WO=".regex-script-label",KO="#saved_regex_scripts, #saved_scoped_scripts, #saved_preset_scripts",jO=120,qO=1e3,qn="#rm_print_characters_block",YO=`${qn} .character_select .avatar img`,Br="#user_avatar_block",QO=`${Br} .avatar-container .avatar img`,Dr=".welcomePanel .recentChat",XO=`${Dr} .avatar img`,JO=`${qn}, ${Br}`,ZO="#chat",rl=[YO,QO,XO].join(", "),iE=[".character_select .avatar img",".avatar-container .avatar img",`${Dr} .avatar img`].join(", "),Vr="baiBaiToolkitLazyAvatarSrc",sE="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",tr="bai-bai-toolkit-lazy-avatar-pending",Wo="bai-bai-toolkit-lazy-avatar-loaded",nr="bai-bai-toolkit-lazy-avatar-shell",eB="800px 0px 1200px 0px",tB=new Set(["/api/chats/save","/api/chats/group/save"]),nB=new Set(["/api/chats/get","/api/chats/group/get"]),rB=new Set(["/api/chats/save","/api/chats/group/save"]),oB=2*1024*1024,aB=5,lE=["#send_but","#option_regenerate","#option_continue","#option_impersonate","#option_delete_mes","#mes_continue","#mes_impersonate","#dialogue_del_mes_ok","#chat .mes_edit","#chat .mes_edit_done","#chat .mes_delete","#chat .del_mes","#chat .swipe_left","#chat .swipe_right","#show_more_messages"].join(", "),iB=new Set(["/api/chats/get","/api/chats/group/get","/api/chats/save","/api/chats/group/save","/api/chats/search","/api/characters/chats"]),sB=2e3,Of=700,np=16,cE=8,uE=250,lB=new Set([w.CHAT_LOADED,w.CHAT_CHANGED,w.MORE_MESSAGES_LOADED,w.MESSAGE_SENT,w.USER_MESSAGE_RENDERED,w.MESSAGE_RECEIVED,w.CHARACTER_MESSAGE_RENDERED,w.MESSAGE_EDITED,w.MESSAGE_UPDATED,w.MESSAGE_DELETED,w.MESSAGE_SWIPED,w.MESSAGE_SWIPE_DELETED,w.MESSAGE_FILE_EMBEDDED,w.MESSAGE_REASONING_EDITED,w.MESSAGE_REASONING_DELETED,w.GENERATION_STARTED,w.GENERATION_AFTER_COMMANDS,w.GENERATE_BEFORE_COMBINE_PROMPTS,w.GENERATE_AFTER_COMBINE_PROMPTS,w.GENERATE_AFTER_DATA,w.CHAT_COMPLETION_PROMPT_READY,w.GENERATION_STOPPED,w.GENERATION_ENDED,w.IMPERSONATE_READY].filter(Boolean)),cB=["#send_but","#option_regenerate","#option_continue","#option_impersonate","#mes_continue","#mes_impersonate","#chat .mes_edit","#chat .mes_edit_done","#chat .mes_edit_cancel","#chat .swipe_left","#chat .swipe_right","#chat .mes_translate","#show_more_messages"].join(", "),Kc=pB(),dE=mB(),jc={updatePromptOnAvailableEnabled:!0,resizeGuardEnabled:!0,descriptionCodeMirrorEditorEnabled:!1,customCssInputOptimizationEnabled:!0,customCssShadowPropertyEnabled:!0,worldInfoDrawerOptimizationEnabled:!0,worldInfoPageOptimizationEnabled:!0,worldInfoListOptimizationEnabled:!0,worldInfoSearchReplaceEnabled:!0,characterSearchInputOptimizationEnabled:!0,baibaokuSettingsAccelerationEnabled:!0,baibaokuLazyThemeLoadingEnabled:!0,fastCharacterListEnabled:!0,recentChatListAccelerationEnabled:!0,progressiveChatLoadingEnabled:!1,saveGenerateEnabled:!0,tokenizerBulkCountEnabled:!0,chatKeyboardScanReductionEnabled:!0,extensionManifestBundleEnabled:!0,presetAutoBackupEnabled:!0,characterListAvatarLazyLoadEnabled:!0,fastChatListEnabled:!0,welcomeRecentChatDirectOpenEnabled:!0,saveRequestGzipEnabled:!0,translateMessageUpdatedOptimizationEnabled:!0,longChatDomRenderOptimizationEnabled:!0,reduceLoadedFloorsEnabled:!0,messageCompletionScrollToMiddleEnabled:!0,chatListScrollOptimizationEnabled:!0,chatListAutoClearEnabled:!0,chatLossMitigationEnabled:!0,mobileAutoKeyboardSuppressionEnabled:!0,mobileMessageEditScrollGuardEnabled:!0,presetScrollOptimizationEnabled:!0,presetDragOptimizationEnabled:!0,presetVueDragLocked:!1,presetMobileWholeRowDragEnabled:!0,presetSwitchOptimizationEnabled:!0,presetToggleOptimizationEnabled:!0,presetGroupingEnabled:!0,presetGroupingEditButtonInMenuEnabled:!1,presetInterfaceCollapseEnabled:!0,presetPromptCodeMirrorEditorEnabled:!1,presetAutoSaveAfterPromptEditEnabled:!1,regexQuickOperationOptimizationEnabled:!0,regexListGroups:{},chatDeleteEditFlowOptimizationEnabled:!0,messageEditBottomActionsEnabled:!0,messageDoubleClickEditEnabled:!1,messageTripleClickEditEnabled:!0,messageCompletionSoundEnabled:!1,messageCompletionSoundSource:"builtin",messageCompletionSoundBuiltinId:"guoke-bell",messageCompletionSoundUrl:"",messageCompletionSoundVolume:.8,messageCompletionSoundLocalFileName:"",messageCompletionSoundKeepAliveEnabled:!0},Bf=["presetScrollOptimizationEnabled","presetDragOptimizationEnabled","presetMobileWholeRowDragEnabled","presetToggleOptimizationEnabled"],uB=["textareaScrollOptimizationEnabled","descriptionShadowEditorEnabled","descriptionInputBubbleOptimizationEnabled","descriptionInputIdleSaveEnabled","imeCommitOptimizationEnabled","mobileChatEntryKeyboardSuppressionEnabled","fastSettingsBootstrapEnabled","fastCharacterListEnabled"],g={...jc},h=dB();function dB(){return(!globalThis[Ka]||typeof globalThis[Ka]!="object")&&(globalThis[Ka]={}),globalThis[Ka]}function pB(){const e="/scripts/extensions/",t=new URL(import.meta.url),n=decodeURIComponent(t.pathname.replace(/\\/g,"/")),r=n.indexOf(e);return r===-1?"third-party/SillyTavern-Mobile-Resize-Guard":n.slice(r+e.length).replace(/\/(?:dist\/)?index\.js$/i,"")}function mB(){return Kc.split("/").pop()||Kc}function fB(){(!j[re]||typeof j[re]!="object")&&(j[re]={});let e=!1,t=!1;typeof j[re].baibaokuSettingsAccelerationEnabled!="boolean"&&typeof j[re].fastSettingsBootstrapEnabled=="boolean"&&(j[re].baibaokuSettingsAccelerationEnabled=j[re].fastSettingsBootstrapEnabled),j[re].progressiveChatLoadingEnabled===!0&&(j[re].progressiveChatLoadingEnabled=!1,e=!0);for(const o of uB)Object.prototype.hasOwnProperty.call(j[re],o)&&(delete j[re][o],e=!0);j[re][Bl]!==!0&&(j[re].saveGenerateEnabled===!1&&(j[re].saveGenerateEnabled=!0),j[re][Bl]=!0,t=!0);for(const[o,a]of Object.entries(jc))typeof j[re][o]!=typeof a&&(j[re][o]=a);Object.assign(g,jc,j[re]),delete g[Bl];const n=bB(),r=gB();(e||t||n||r)&&Yt()}function gB(){return g.messageDoubleClickEditEnabled&&g.messageTripleClickEditEnabled?(g.messageDoubleClickEditEnabled=!1,j[re].messageDoubleClickEditEnabled=!1,!0):!1}function bB(){const e=Bf.some(n=>g[n]===!0);let t=!1;for(const n of Bf)g[n]!==e&&(g[n]=e,j[re][n]=e,t=!0);return t}function ye(){const e={...g};delete e.baibaokuSettingsAccelerationEnabled,delete e.baibaokuLazyThemeLoadingEnabled,delete e.fastCharacterListEnabled,delete e.recentChatListAccelerationEnabled,delete e.progressiveChatLoadingEnabled,delete e.extensionManifestBundleEnabled,Object.assign(j[re],e),delete j[re].baibaokuSettingsAccelerationEnabled,delete j[re].baibaokuLazyThemeLoadingEnabled,delete j[re].fastCharacterListEnabled,delete j[re].recentChatListAccelerationEnabled,delete j[re].progressiveChatLoadingEnabled,delete j[re].extensionManifestBundleEnabled,Yt()}function hB(){const e=globalThis[Dl];if(e?.wrappedFetch)return e.isEnabled=()=>g.saveRequestGzipEnabled!==!1,e;const t=globalThis.fetch;if(typeof t!="function")return null;const n={originalFetch:t.bind(globalThis),wrappedFetch:null,isEnabled:()=>g.saveRequestGzipEnabled!==!1};return n.wrappedFetch=async function(o,a){try{if(!n.isEnabled())return n.originalFetch(o,a);const i=_B(o);if(!i)return n.originalFetch(o,a);const s=_o(o,a);if(!["POST","PUT","PATCH"].includes(s))return n.originalFetch(o,a);const l=ol(o,a);if(l.has("Content-Encoding"))return n.originalFetch(o,a);const c=await EB(o,a);if(!c)return n.originalFetch(o,a);const u=await SB(c.body,{method:s,path:i.pathname,caller:lD()});if(!u)return n.originalFetch(o,a);const p=new Headers(l);c.contentType&&!p.has("Content-Type")&&p.set("Content-Type",c.contentType),p.set("Content-Encoding","gzip"),p.delete("Content-Length");const b={...a||{},method:s,headers:p,body:u};try{const v=await n.originalFetch(o,b);if(!v?.ok){console.warn(`${T} Gzip save request returned ${v?.status||"non-OK"}, retrying uncompressed.`);const y=Df(o,a,s,l,c);return n.originalFetch(y.input,y.init)}return v}catch(v){console.warn(`${T} Gzip save request failed, retrying uncompressed:`,v);const y=Df(o,a,s,l,c);return n.originalFetch(y.input,y.init)}}catch(i){return console.warn(`${T} Gzip save request skipped:`,i),n.originalFetch(o,a)}},n.wrappedFetch[Dl]=!0,globalThis[Dl]=n,globalThis.fetch=n.wrappedFetch,n}function _B(e){const t=ho(e);if(!t)return null;try{const n=new URL(t,location.href);return![...tB].some(o=>n.pathname===o||n.pathname.endsWith(o))||wB(n.hostname)?null:n}catch{return null}}function ho(e){return typeof e=="string"?e:typeof URL<"u"&&e instanceof URL?e.href:vr(e)?e.url:""}function _o(e,t){return String(t?.method||(vr(e)?e.method:"")||"GET").toUpperCase()}function ol(e,t){return t?.headers?new Headers(t.headers):vr(e)?new Headers(e.headers):new Headers}function rp(e,t){const n={};if(!vr(e))return n;const r=["cache","credentials","integrity","keepalive","mode","redirect","referrer","referrerPolicy","signal"];for(const o of r){if(t&&Object.prototype.hasOwnProperty.call(t,o))continue;const a=e[o];a!==void 0&&(n[o]=a)}return n}function yB(e){if(e==null)return null;if(typeof e=="string")return e.length>0?{body:e,contentType:"text/plain;charset=UTF-8"}:null;if(op(e))return e.size>0?{body:e,contentType:e.type||""}:null;if(typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer)return e.byteLength>0?{body:e,contentType:""}:null;if(typeof ArrayBuffer<"u"&&ArrayBuffer.isView(e))return e.byteLength>0?{body:e,contentType:""}:null;if(vB(e)){const t=e.toString();return t.length>0?{body:t,contentType:"application/x-www-form-urlencoded;charset=UTF-8"}:null}return TB(e)||xB(e),null}async function EB(e,t){if(Object.prototype.hasOwnProperty.call(t||{},"body"))return yB(t.body);if(!vr(e)||e.bodyUsed||!e.body)return null;const n=await e.clone().blob();return n.size>0?{body:n,contentType:n.type||""}:null}async function SB(e,t={}){if(typeof CompressionStream!="function")return null;const n=op(e)?e:new Blob([e]),r=performance.now();try{const o=n.stream().pipeThrough(new CompressionStream("gzip")),a=await new Response(o).blob();return Nf({...t,startedAt:r,duration:performance.now()-r,originalBytes:n.size,compressedBytes:a.size}),a.size>0?a:null}catch(o){throw Nf({...t,startedAt:r,duration:performance.now()-r,originalBytes:n.size,compressedBytes:0,caller:`${t?.caller||""} error=${o?.message||o}`}),o}}function Df(e,t,n,r,o){const a=new Headers(r);return a.delete("Content-Encoding"),a.delete("Content-Length"),o.contentType&&!a.has("Content-Type")&&a.set("Content-Type",o.contentType),{input:vr(e)?e.url:e,init:{...rp(e,t),...t||{},method:n,headers:a,body:o.body}}}function vr(e){return typeof Request<"u"&&e instanceof Request}function op(e){return typeof Blob<"u"&&e instanceof Blob}function vB(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}function TB(e){return typeof FormData<"u"&&e instanceof FormData}function xB(e){return typeof ReadableStream<"u"&&e instanceof ReadableStream}function wB(e){const t=CB(e);if(!t)return!1;if(t==="localhost"||t.endsWith(".localhost"))return!0;const n=pE(t);return n?mE(n):kB(t)}function CB(e){return String(e||"").trim().toLowerCase().replace(/^\[|\]$/g,"").replace(/\.+$/g,"")}function pE(e){const t=e.split(".");if(t.length!==4)return null;const n=[];for(const r of t){if(!/^\d{1,3}$/.test(r))return null;const o=Number(r);if(!Number.isInteger(o)||o<0||o>255)return null;n.push(o)}return n}function mE([e,t]){return e===0||e===10||e===127||e===169&&t===254||e===172&&t>=16&&t<=31||e===192&&t===168}function kB(e){if(!e.includes(":"))return!1;if(e==="::1"||e==="0:0:0:0:0:0:0:1")return!0;if(e.startsWith("::ffff:")){const r=pE(e.slice(7));return r?mE(r):!1}const t=e.split(":")[0];if(!/^[0-9a-f]{1,4}$/.test(t))return!1;const n=parseInt(t,16);return(n&65024)===64512||(n&65472)===65152}function Se(){return(!h.performanceTrace||typeof h.performanceTrace!="object")&&(h.performanceTrace={}),h.performanceTrace}function AB(){const e=Se();e.active||(Object.assign(e,{active:!0,startedAt:performance.now(),startedAtIso:new Date().toISOString(),endedAtIso:"",lines:[],lastKeys:new Map,responseInfo:new WeakMap,counters:{dropped:0,suppressed:0,events:0,fetches:0,gzipCompression:0,jsonStringify:0,responseJson:0,longTasks:0,longDomRefreshes:0,interactions:0,listeners:0},activities:[],eventStats:new Map,listenerStats:new Map,fetchStats:new Map,gzipStats:new Map,jsonStats:new Map,responseJsonStats:new Map,longDomRefreshStats:new Map}),LB(e),st("trace",`start ${al({includeTextStats:!0})}`),e.uiTimer=setInterval(ps,1e3),ps(),gE("Performance trace started."))}function PB(){const e=Se();if(!e.active)return;st("trace",`stop ${al({includeTextStats:!0})}`),e.active=!1,e.endedAtIso=new Date().toISOString(),IB(e),clearInterval(e.uiTimer),e.uiTimer=null;const t=aD(e),n=`st-performance-trace-${new Date().toISOString().replace(/[:.]/g,"-")}.txt`;iD(n,t),ps(),gE("Performance trace exported.")}function LB(e){RB(e),MB(e),OB(e),BB(e),DB(e)}function IB(e){e.originalEventEmit&&(M.emit=e.originalEventEmit,e.originalEventEmit=null),e.originalJsonStringify&&(JSON.stringify=e.originalJsonStringify,e.originalJsonStringify=null),e.originalResponseJson&&typeof Response<"u"&&(Response.prototype.json=e.originalResponseJson,e.originalResponseJson=null),e.longTaskObserver&&(e.longTaskObserver.disconnect(),e.longTaskObserver=null),e.interactionClickHandler&&(document.removeEventListener("click",e.interactionClickHandler,!0),e.interactionClickHandler=null),e.interactionKeydownHandler&&(document.removeEventListener("keydown",e.interactionKeydownHandler,!0),e.interactionKeydownHandler=null)}function RB(e){e.originalEventEmit||typeof M?.emit!="function"||(e.originalEventEmit=M.emit,M.emit=async function(n,...r){const o=Se();if(!o.active||!lB.has(n))return o.originalEventEmit.apply(this,[n,...r]);const a=performance.now(),i=Array.isArray(this.events?.[n])?this.events[n].slice():[];localStorage.getItem("eventTracing")==="true"?console.trace("Event emitted: "+n,r):console.debug("Event emitted: "+n);for(let l=0;l<i.length;l++){const c=i[l],u=performance.now();let p=null;try{await c.apply(this,r)}catch(b){p=b,console.error(b),console.trace("Error in event listener")}finally{const b=performance.now()-u;HB(n,c,l,b,p)}}this.autoFireAfterEmit?.has(n)&&this.autoFireLastArgs?.set(n,r);const s=performance.now()-a;NB(n,r,s,i.length)})}function MB(e){e.originalJsonStringify||typeof JSON.stringify!="function"||(e.originalJsonStringify=JSON.stringify,JSON.stringify=function(n,r,o){const a=Se(),i=a.active?XB(n):null,s=a.active?performance.now():0,l=a.originalJsonStringify.apply(this,[n,r,o]);if(a.active){const c=performance.now()-s;(i||c>=np)&&GB(i||{name:"slow-json",count:0},c,l)}return l})}function OB(e){e.originalResponseJson||typeof Response>"u"||typeof Response.prototype?.json!="function"||(e.originalResponseJson=Response.prototype.json,Response.prototype.json=async function(...n){const r=Se(),o=r.active?r.responseInfo?.get(this):null,a=r.active?performance.now():0,i=await r.originalResponseJson.apply(this,n);if(r.active){const s=performance.now()-a;(o||s>=np)&&FB(o,i,s)}return i})}function BB(e){if(e.longTaskObserver||typeof PerformanceObserver!="function")return;const t=PerformanceObserver.supportedEntryTypes||[];if(!(t.length&&!t.includes("longtask")))try{e.longTaskObserver=new PerformanceObserver(n=>{for(const r of n.getEntries())zB(r)}),e.longTaskObserver.observe({entryTypes:["longtask"]})}catch(n){st("trace",`longtask observer unavailable error=${pt(n?.message||n)}`)}}function DB(e){e.interactionClickHandler||e.interactionKeydownHandler||(e.interactionClickHandler=t=>{const n=t.target instanceof Element?t.target.closest(cB):null;n&&$f("click",sD(n))},e.interactionKeydownHandler=t=>{const n=t.target;!(n instanceof Element)||n.id!=="send_textarea"||t.key==="Enter"&&(t.ctrlKey||t.metaKey||!t.shiftKey)&&$f("keydown",`#send_textarea key=${t.key} ctrl=${t.ctrlKey} meta=${t.metaKey} shift=${t.shiftKey}`)},document.addEventListener("click",e.interactionClickHandler,!0),document.addEventListener("keydown",e.interactionKeydownHandler,!0))}function $B(){const e=globalThis[Nl];if(e?.wrappedFetch)return e;const t=globalThis.fetch;if(typeof t!="function")return null;const n={originalFetch:t.bind(globalThis),wrappedFetch:null};return n.wrappedFetch=async function(o,a){const i=Se(),s=i.active?YB(o,a):null;if(!s)return n.originalFetch(o,a);const l=performance.now();UB(s);try{const c=await n.originalFetch(o,a),u=performance.now()-l;return i.responseInfo?.set(c,{...s,status:c?.status}),WB(s,u,c?.status),c}catch(c){const u=performance.now()-l;throw KB(s,u,c),c}},n.wrappedFetch[Nl]=!0,globalThis[Nl]=n,globalThis.fetch=n.wrappedFetch,n}function NB(e,t,n,r=0){const o=Se();o.counters.events+=1,xr(o.eventStats,e,n),Tr("event",e,performance.now()-n);const a=n>=np,i=`event:${e}:${Hf(t,1)}`,s=Hf(t);st("event",`${e} duration=${ot(n)} listeners=${r} args=${s}`,{key:i,dedupeMs:a?0:uE})}function HB(e,t,n,r,o=null){const a=Se(),i=rD(e,t,n),s=`${e} ${i}`,l=r>=cE||o;a.counters.listeners+=1,xr(a.listenerStats,s,r),l&&st("listener",`${e} #${n+1}/${nD(e)} ${i} duration=${ot(r)}${o?` error=${pt(o?.message||o)}`:""}`,{key:`listener:${e}:${n}:${i}:${Math.round(r/10)}`,dedupeMs:100})}function GB(e,t,n){const r=Se();r.counters.jsonStringify+=1,xr(r.jsonStats,e.name,t),Tr("json",e.name,performance.now()-t);const o=typeof n=="string"?n.length:0;st("json",`JSON.stringify kind=${e.name} items=${e.count||0} chars=${o} duration=${ot(t)}`,{key:`json:${e.name}:${e.count}:${o}`,dedupeMs:500})}function FB(e,t,n){const r=Se(),o=e?.path||"unknown";r.counters.responseJson+=1,xr(r.responseJsonStats,o,n),st("response-json",`path=${o} result=${Gf(t)} duration=${ot(n)}`,{key:`response-json:${o}:${Gf(t)}`,dedupeMs:500})}function zB(e){const t=Se();if(!t.active)return;t.counters.longTasks+=1;const n=Math.max(0,e.startTime-t.startedAt),r=jB(e.startTime),o=qB(e);st("longtask",`duration=${ot(e.duration)} taskStart=+${ot(n)}${r?` near=${r}`:""}${o?` attr=${o}`:""}`,{key:`longtask:${Math.round(e.startTime)}`,dedupeMs:0})}function VB(e){const t=Se();if(!t.active||!e)return;t.counters.longDomRefreshes=Number(t.counters.longDomRefreshes||0)+1,t.longDomRefreshStats instanceof Map||(t.longDomRefreshStats=new Map);const n=pt(e.reason||"unknown");xr(t.longDomRefreshStats,n,e.duration),!(e.duration<cE)&&st("longdom",[`refresh reason=${n}`,`duration=${ot(e.duration)}`,`messages=${e.messages||0}`,`optimized=${e.optimized?"yes":"no"}`,`contained=${e.contained||0}`,`editing=${e.editing||0}`,`tail=${e.tail||0}`,`cached=${e.cached||0}`,`estimated=${e.estimated||0}`,`skipped=${e.skipped||0}`].join(" "),{key:`longdom:${n}`,dedupeMs:80})}function $f(e,t){const n=Se();n.active&&(n.counters.interactions+=1,Tr("interaction",`${e}:${t}`),st("interaction",`${e} ${pt(t)}`,{key:`interaction:${e}:${t}`,dedupeMs:500}))}function UB(e){const t=Se();t.counters.fetches+=1,Tr("fetch-start",`${e.method} ${e.path}`),st("fetch-start",`${e.method} ${e.path} body=${e.bodySize} encoding=${e.encoding||"none"}`,{key:`fetch-start:${e.method}:${e.path}:${e.bodySize}`,dedupeMs:250})}function WB(e,t,n){const r=Se();xr(r.fetchStats,`${e.method} ${e.path}`,t),Tr("fetch-end",`${e.method} ${e.path}`,performance.now()-t),st("fetch-end",`${e.method} ${e.path} status=${n||"unknown"} duration=${ot(t)} body=${e.bodySize}`,{key:`fetch-end:${e.method}:${e.path}:${n}:${e.bodySize}`,dedupeMs:250})}function KB(e,t,n){Tr("fetch-error",`${e.method} ${e.path}`,performance.now()-t),st("fetch-error",`${e.method} ${e.path} duration=${ot(t)} error=${pt(n?.message||n)}`,{key:`fetch-error:${e.method}:${e.path}`,dedupeMs:250})}function Nf(e){const t=Se();if(!t.active)return;const n=Number(e?.duration||0),r=`${e?.method||"POST"} ${e?.path||"/api/chats/save"}`,o=Number(e?.originalBytes||0),a=Number(e?.compressedBytes||0),i=o>0&&a>0?`${Math.round(a/o*100)}%`:"n/a";t.counters.gzipCompression+=1,xr(t.gzipStats,r,n),Tr("gzip",r,e?.startedAt||performance.now()-n),st("gzip",`${r} original=${ms(o)} compressed=${ms(a)} ratio=${i} duration=${ot(n)}${e?.caller?` caller=${pt(e.caller)}`:""}`,{key:`gzip:${r}:${o}:${a}:${Math.round(n/10)}`,dedupeMs:0})}function Tr(e,t,n=performance.now()){const r=Se();if(!(!r.active||!Array.isArray(r.activities)))for(r.activities.push({at:n,type:pt(e),label:pt(t)});r.activities.length>80;)r.activities.shift()}function jB(e){const t=Se(),n=Array.isArray(t.activities)?t.activities:[];let r=null,o=1/0;for(const s of n){const l=Math.abs(e-s.at);l<o&&(r=s,o=l)}if(!r||o>1200)return"";const a=e-r.at,i=a>=0?"+":"-";return`${r.type}:${r.label}${i}${ot(Math.abs(a))}`}function qB(e){const t=Array.isArray(e?.attribution)?e.attribution[0]:null;return t?[t.name,t.containerType,t.containerName,t.containerSrc].filter(Boolean).map(pt).join("/"):""}function st(e,t,{key:n="",dedupeMs:r=uE}={}){const o=Se();if(!o.active||!Array.isArray(o.lines))return;const a=performance.now(),i=a-o.startedAt;if(n&&r>0){const c=o.lastKeys.get(n)||0;if(a-c<r){o.counters.suppressed+=1;return}o.lastKeys.set(n,a)}const s=al();let l=`+${ot(i)} ${e} ${t} | ${s}`;for(l.length>Of&&(l=`${l.slice(0,Of-15)}...<truncated>`),o.lines.push(l);o.lines.length>sB;)o.lines.shift(),o.counters.dropped+=1}function YB(e,t){const n=ho(e);if(!n)return null;try{const r=new URL(n,location.href);if(!iB.has(r.pathname))return null;const o=ol(e,t);return{path:r.pathname,method:_o(e,t),bodySize:QB(t?.body),encoding:o.get("Content-Encoding")||""}}catch{return null}}function QB(e){return e==null?"none":typeof e=="string"?`${e.length}ch`:e instanceof Blob?`${e.size}B`:e instanceof URLSearchParams?`${String(e).length}ch`:e instanceof ArrayBuffer?`${e.byteLength}B`:ArrayBuffer.isView(e)?`${e.byteLength}B`:e instanceof FormData?"form-data":typeof e}function XB(e){return!e||typeof e!="object"?null:Array.isArray(e.chat)?{name:e.id?"group-chat-save-body":"chat-save-body",count:e.chat.length}:Array.isArray(e)&&e[0]?.chat_metadata?{name:"chat-array",count:e.length}:null}function al({includeTextStats:e=!1}={}){const t=Array.isArray(Q.chat)?Q.chat:[],n=document.querySelectorAll("#chat .mes").length,r=document.querySelector("#chat .mes")?.getAttribute("mesid")??"none",o=[...document.querySelectorAll("#chat .mes")].at(-1)?.getAttribute("mesid")??"none",a=eD(),i=[`chat=${t.length}`,`visible=${n}`,`range=${r}-${o}`,`trunc=${Y?.chat_truncation??"unknown"}`,`chatId=${pt(We()||"none")}`,a,Mx()].filter(Boolean);return e&&i.push(JB(t)),i.push(ZB(t)),i.join(" ")}function JB(e){let t=0,n=0;for(const r of e)t+=typeof r?.mes=="string"?r.mes.length:0,n+=Array.isArray(r?.extra?.media)?r.extra.media.length:0,n+=Array.isArray(r?.extra?.files)?r.extra.files.length:0;return`textChars=${t} mediaItems=${n}`}function ZB(e){const t=Rx(e);return`visibleTextChars=${t.visibleTextChars} maxVisibleMes=${t.maxVisibleMesId}:${t.maxVisibleChars}`}function eD(){const e=performance.memory;return e?`heap=${ms(e.usedJSHeapSize)}/${ms(e.jsHeapSizeLimit)}`:""}function Hf(e,t=3){return e.slice(0,t).map(n=>tD(n)).join(",")}function tD(e){return e==null?String(e):["string","number","boolean"].includes(typeof e)?pt(e):Array.isArray(e)?`Array(${e.length})`:typeof e=="object"?"messageId"in e||"mesId"in e||"newSwipeId"in e?`{messageId=${e.messageId??e.mesId??"n/a"},newSwipeId=${e.newSwipeId??"n/a"}}`:e.detail?.id!==void 0?`{detail.id=${pt(e.detail.id)}}`:`{keys=${Object.keys(e).slice(0,5).join(",")}}`:typeof e}function nD(e){return Array.isArray(M?.events?.[e])?M.events[e].length:0}function rD(e,t,n){const r=t?.name||"anonymous",o=fE(t);return`${oD(e,t,o)||"unknown"}:${r}#${n+1}`}function fE(e){try{return Function.prototype.toString.call(e).slice(0,1600)}catch{return""}}function oD(e,t,n){const r=t?.name||"";return n.includes("translateFunction")||n.includes("translateIncomingMessage")||n.includes("translateMessageEdit")?"translate":n.includes("extension_settings.memory")||n.includes("getLatestMemoryFromChat")||n.includes("setMemoryContext")?"memory":n.includes("PromptReasoning")||n.includes("updateReasoningUI")||n.includes("eventHandler(event, idx)")?"reasoning":n.includes("renderDebounced")||n.includes("PromptManager")?"prompt-manager":n.includes("moduleWorker.update")||n.includes("vectors")||r.includes("vectors")?"vectors":n.includes("debouncedRender")||n.includes("logprobs")?"logprobs":n.includes("getContext().saveChat")||n.includes("saveChatConditional")?"save-chat":n.includes("baiBaiToolkit")||n.includes("MobileMessageEdit")||n.includes("mobileMessageEdit")?"this-plugin":r&&r!=="anonymous"?"named":""}function Gf(e){if(Array.isArray(e)){const t=e[0]?.chat_metadata?"chat-header":typeof e[0];return`Array(${e.length},first=${t})`}return e&&typeof e=="object"?`{keys=${Object.keys(e).slice(0,5).join(",")}}`:pt(typeof e)}function xr(e,t,n){const r=e.get(t)||{count:0,total:0,max:0};r.count+=1,r.total+=n,r.max=Math.max(r.max,n),e.set(t,r)}function aD(e){const t=e.endedAtIso?new Date(e.endedAtIso).getTime()-new Date(e.startedAtIso).getTime():0;return["SillyTavern performance trace",`started=${e.startedAtIso||""}`,`ended=${e.endedAtIso||""}`,`duration=${t}ms`,`finalSnapshot=${al({includeTextStats:!0})}`,"","Counters",`events=${e.counters?.events||0}`,`fetches=${e.counters?.fetches||0}`,`gzipCompression=${e.counters?.gzipCompression||0}`,`jsonStringify=${e.counters?.jsonStringify||0}`,`responseJson=${e.counters?.responseJson||0}`,`longTasks=${e.counters?.longTasks||0}`,`longDomRefreshes=${e.counters?.longDomRefreshes||0}`,`interactions=${e.counters?.interactions||0}`,`listeners=${e.counters?.listeners||0}`,`suppressedDuplicates=${e.counters?.suppressed||0}`,`droppedOldLines=${e.counters?.dropped||0}`,"","Top Events",...Wn(e.eventStats),"","Top Listeners",...Wn(e.listenerStats),"","Top Fetches",...Wn(e.fetchStats),"","Top Gzip compression",...Wn(e.gzipStats),"","Top JSON.stringify",...Wn(e.jsonStats),"","Top Response.json",...Wn(e.responseJsonStats),"","Top Long DOM Refresh",...Wn(e.longDomRefreshStats),"","Log",...e.lines||[]].join(`
`)}function Wn(e){return!e||!e.size?["none"]:[...e.entries()].sort((t,n)=>n[1].total-t[1].total).slice(0,12).map(([t,n])=>`${t} count=${n.count} total=${ot(n.total)} max=${ot(n.max)}`)}function ps(){const e=Se(),t=!!e.active,n=Array.isArray(e.lines)?e.lines.length:0,r=e.counters?.dropped||0,o=e.counters?.suppressed||0;$("#bai_bai_toolkit_perf_trace_start").toggleClass("disabled",t),$("#bai_bai_toolkit_perf_trace_stop").toggleClass("disabled",!t),$("#bai_bai_toolkit_perf_trace_status").text(t?`recording, lines=${n}, suppressed=${o}, dropped=${r}`:`idle, last lines=${n}, suppressed=${o}, dropped=${r}`)}function iD(e,t){const n=new Blob([t],{type:"text/plain;charset=utf-8"}),r=URL.createObjectURL(n),o=document.createElement("a");o.href=r,o.download=e,document.body.appendChild(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}function gE(e){globalThis.toastr?.info&&globalThis.toastr.info(e,"Performance trace")}function sD(e){if(e.id)return`#${e.id}`;const t=[...e.classList].slice(0,4).join(".");return`${e.tagName.toLowerCase()}${t?`.${t}`:""}`}function lD(){if(!Se().active)return"";try{const t=new Error().stack;return t?t.split(`
`).map(n=>n.trim().replace(/^at\s+/,"")).filter(n=>n&&!n.includes("getPerformanceTraceStackSummary")&&!n.includes("baiBaiToolkitSaveRequestGzipFetch")&&!n.includes("baiBaiToolkitPerformanceTraceFetch")&&!n.includes("gzipFetchBody")&&!n.includes("recordPerformanceTrace")).slice(0,4).map(n=>n.replace(location.origin,"")).join(" <- "):""}catch{return""}}function pt(e){return String(e).replace(/\s+/g," ").slice(0,120)}function ot(e){return`${Number(e||0).toFixed(1)}ms`}function ms(e){const t=Number(e||0);return t>=1024*1024?`${(t/1024/1024).toFixed(1)}MB`:t>=1024?`${(t/1024).toFixed(1)}KB`:`${t}B`}function bE(){g.translateMessageUpdatedOptimizationEnabled?hE():cD()}function ap(){return(!h.translateMessageUpdatedOptimization||typeof h.translateMessageUpdatedOptimization!="object")&&(h.translateMessageUpdatedOptimization={}),h.translateMessageUpdatedOptimization}function hE(){const e=M?.events?.[w.MESSAGE_UPDATED],t=ap();if(!Array.isArray(e)){Ff();return}let n=0;for(let r=0;r<e.length;r++){const o=e[r];if(o?.[ii]||!uD(o))continue;const a=async function(s,...l){if(dD(s)){console.debug(`${T} Skipped translate MESSAGE_UPDATED listener for message ${s}`);return}return o.apply(this,[s,...l])};a[ii]=!0,a.__baiBaiToolkitOriginalTranslateMessageUpdatedListener=o,e[r]=a,n+=1}t.installed=e.some(r=>r?.[ii]),!t.installed&&!t.retryTimer&&Ff(),n>0&&(t.retryCount=0,console.debug(`${T} Translate MESSAGE_UPDATED optimization installed (${n})`))}function cD(){const e=M?.events?.[w.MESSAGE_UPDATED],t=ap();if(t.retryTimer&&(clearTimeout(t.retryTimer),t.retryTimer=null),!Array.isArray(e)){t.installed=!1;return}let n=0;for(let r=0;r<e.length;r++){const o=e[r];if(!o?.[ii])continue;const a=o.__baiBaiToolkitOriginalTranslateMessageUpdatedListener;typeof a=="function"&&(e[r]=a,n+=1)}t.installed=!1,t.retryCount=0,n>0&&console.debug(`${T} Translate MESSAGE_UPDATED optimization restored (${n})`)}function Ff(){const e=ap();if(!(e.retryTimer||!g.translateMessageUpdatedOptimizationEnabled)){if(e.retryCount=Number(e.retryCount||0)+1,e.retryCount>30){console.debug(`${T} Translate MESSAGE_UPDATED optimization listener was not found after retries`);return}e.retryTimer=setTimeout(()=>{e.retryTimer=null,g.translateMessageUpdatedOptimizationEnabled&&hE()},1e3)}}function uD(e){if(typeof e!="function")return!1;const t=fE(e);return t.includes("translateFunction")&&t.includes("shouldTranslateFunction")&&t.includes("await translateFunction")}function dD(e){if(String(j?.translate?.auto_mode??"").toLowerCase()!=="none")return!1;const n=Number(e);if(!Number.isInteger(n)||n<0)return!1;const r=Array.isArray(Q.chat)?Q.chat[n]:null;return r?!r.extra?.display_text:!1}function pD(){return document.querySelector("#form_create")?.getAttribute("actiontype")==="editcharacter"}function mD(){const e=xn.prototype.updatePosition;if(typeof e!="function"||e.__mobileResizeGuardPatched)return;function t(...n){if(this.isActive)return e.apply(this,n)}t.__mobileResizeGuardPatched=!0,t.__mobileResizeGuardOriginal=e,h.originalAutoCompleteUpdatePosition=e,xn.prototype.updatePosition=t}function fD(){const e=xn.prototype.updatePosition;e?.__mobileResizeGuardPatched&&(xn.prototype.updatePosition=e.__mobileResizeGuardOriginal)}function gD(){if(h.powerUserResizeReplacement)return;const e=$._data(window,"events")?.resize;if(!Array.isArray(e)){console.warn(`${T} Window resize handlers are unavailable`);return}const t=e.find(({handler:l})=>hD(l));if(!t){console.warn(`${T} Could not locate the stock power-user resize handler`);return}$(window).off("resize",t.handler),h.originalPowerUserResizeHandler=t.handler;const n=gl(()=>{$(".ui-autocomplete-input").each(function(){try{$(this).autocomplete("widget")?.[0]?.style.display!=="none"&&$(this).autocomplete("search")}catch{}})}),r=gl(pv),o=gl(()=>{const l=parseFloat(Number(window.devicePixelRatio).toFixed(2))||1,c=window.innerWidth,u=window.innerHeight,p=c*l,b=u*l;return console.debug(`${T} Window resize: ${a}x${i} -> ${window.innerWidth}x${window.innerHeight}`),console.debug(`${T} Zoom: ${l}, X:${c}, Y:${u}, original: ${p}x${b}`),l});let a=window.innerWidth,i=window.innerHeight;const s=async()=>{if(de())return;n(),r(),o();const l=parseFloat(Number(window.innerHeight/i).toFixed(4)),c=parseFloat(Number(window.innerWidth/a).toFixed(4));if(Object.keys(Y.movingUIState).length>0)for(const u of Object.keys(Y.movingUIState)){const p=Y.movingUIState[u],b=p.height,v=p.width,y=p.left,k=p.top,P=p.bottom,E=p.right,K=Number(b*l).toFixed(0),X=Number(v*c).toFixed(0),B=Number(y*c).toFixed(0),V=Number(k*l).toFixed(0),ee=Number(P*l).toFixed(0),I=Number(E*c).toFixed(0);try{const Z=$("#"+$.escapeSelector(u));Z.length&&(Z.css("height",K),Z.css("width",X),Z.css("inset",`${V}px ${I}px ${ee}px ${B}px`),Y.movingUIState[u].height=K,Y.movingUIState[u].width=X,Y.movingUIState[u].top=V,Y.movingUIState[u].bottom=ee,Y.movingUIState[u].left=B,Y.movingUIState[u].right=I)}catch(Z){console.debug(`${T} Failed to rescale moving UI element`,u,Z)}}Yt(),a=window.innerWidth,i=window.innerHeight};s.__mobileResizeGuardReplacement=!0,h.powerUserResizeReplacement=s,$(window).on("resize",s)}function bD(){const e=h.powerUserResizeReplacement,t=h.originalPowerUserResizeHandler;if(e&&($(window).off("resize",e),h.powerUserResizeReplacement=null),typeof t!="function")return;const n=$._data(window,"events")?.resize;Array.isArray(n)&&n.some(({handler:o})=>o===t)||$(window).on("resize",t)}function hD(e){if(typeof e!="function"||e.__mobileResizeGuardReplacement)return!1;const t=String(e);return t.includes("adjustAutocompleteDebounced")&&t.includes("setHotswapsDebounced")&&t.includes("power_user.movingUIState")}function _D(e){let t=null;try{t=typeof InputEvent=="function"?new InputEvent("input",{bubbles:!0,inputType:"insertReplacementText",data:""}):null}catch{t=null}t||=new Event("input",{bubbles:!0}),e.dispatchEvent(t)}function _E(){g.descriptionCodeMirrorEditorEnabled?yD():yE()}function yD(){const e=ED();e.enabled=!0,RD(),SD(e),EE(e),vD(e)}function yE(){const e=h[er];if(e){Ko("disable",{dispatchInput:!1,save:!1}),e.enabled=!1,sl(e),e.refreshFrame&&(cancelAnimationFrame(e.refreshFrame),e.refreshFrame=0),e.mutationObserver?.disconnect(),e.mutationObserver=null,qc(e);for(const t of e.globalListeners||[])t.target.removeEventListener(t.type,t.handler,t.options);e.globalListeners=[],MD(),delete h[er]}}function ED(){return h[er]||(h[er]={enabled:!1,source:null,wrapper:null,view:null,listeners:[],globalListeners:[],mutationObserver:null,mutationObserverTargets:[],refreshFrame:0,timer:0,dirty:!1,flushing:!1,loadingToken:null}),h[er]}function SD(e){if(e.globalListeners.length>0)return;const t=a=>{a.target instanceof Element&&a.target.closest("#create_button")&&Ko("manual save click",{dispatchInput:!1,save:!1})},n=a=>{a.target instanceof HTMLFormElement&&a.target.matches("#form_create")&&Ko("form submit",{dispatchInput:!1,save:!1})},r=()=>{Ko("page lifecycle",{dispatchInput:!1,save:!1})},o=(a,i,s,l)=>{!(a instanceof EventTarget)||a===document||(a.addEventListener(i,s,l),e.globalListeners.push({target:a,type:i,handler:s,options:l}))};for(const a of TD())o(a,"click",t,!0),o(a,"submit",n,!0);o(window,"pagehide",r)}function vD(e){typeof MutationObserver=="function"&&(e.mutationObserver||(e.mutationObserver=new MutationObserver(t=>{wD(e,t)||CD(e)})),ci(e))}function TD(){const e=new Set,t=r=>{r instanceof HTMLElement&&r.isConnected&&e.add(r)},n=document.querySelector(Qd);return t(document.querySelector("#form_create")),t(n?.closest("form")),t(n?.parentElement),[...e]}function ci(e){if(!e?.mutationObserver)return;const t=xD(e),n=e.mutationObserverTargets||[];if(!(n.length===t.length&&n.every((o,a)=>o.target===t[a].target&&o.optionsKey===t[a].optionsKey))){e.mutationObserver.disconnect();for(const{target:o,options:a}of t)e.mutationObserver.observe(o,a);e.mutationObserverTargets=t}}function xD(e){const t=new Map,n={attributes:!0,attributeFilter:["class","style","hidden","disabled"],childList:!0,subtree:!0},r={childList:!0,subtree:!1},o=(s,l,c)=>{if(!(s instanceof Node)||!s.isConnected||s===document)return;const u=t.get(s);(!u||u.optionsKey==="parent")&&t.set(s,{target:s,optionsKey:l,options:c})},a=s=>{s instanceof HTMLElement&&(o(s.parentElement,"host",n),o(s.parentElement?.parentElement,"parent",r),o(s.closest("form"),"host",n))},i=document.querySelector(Qd);return a(i),a(e.source),a(e.wrapper),o(document.querySelector("#form_create"),"host",n),[...t.values()]}function wD(e,t){const n=e.wrapper;return n instanceof HTMLElement?t.every(r=>{if(r.target instanceof Node&&n.contains(r.target))return!0;for(const o of r.addedNodes)if(!(o instanceof Node)||!n.contains(o))return!1;for(const o of r.removedNodes)if(!(o instanceof Node)||!n.contains(o))return!1;return r.addedNodes.length>0||r.removedNodes.length>0}):!1}function CD(e=h[er]){!e?.enabled||e.refreshFrame||(e.refreshFrame=requestAnimationFrame(()=>{e.refreshFrame=0,EE(e)}))}function EE(e){if(!e?.enabled)return;const t=document.querySelector(Qd);if(!(t instanceof HTMLTextAreaElement)||!t.isConnected){qc(e),ci(e);return}if(e.source===t&&e.wrapper?.isConnected){ci(e),LD(e);return}qc(e),kD(e,t),ci(e)}function kD(e,t){const n=document.createElement("div");n.id=oE,n.className=$O,n.textContent="Loading CodeMirror...",t.classList.add(Xd),t.insertAdjacentElement("afterend",n),e.source=t,e.wrapper=n,e.dirty=!1;const r=()=>{setTimeout(()=>{e.dirty&&e.wrapper&&!e.wrapper.contains(document.activeElement)&&ID(e,"blur",NO)},0)};n.addEventListener("focusout",r),e.listeners.push({target:n,type:"focusout",handler:r,options:void 0});const o={};e.loadingToken=o,il().then(a=>{!e.enabled||e.source!==t||e.wrapper!==n||e.loadingToken!==o||!n.isConnected||AD(e,t,n,a)}).catch(a=>{console.warn(`${T} CodeMirror description editor failed; falling back to stock textarea.`,a),e.enabled&&e.source===t&&e.wrapper===n&&e.loadingToken===o&&(g.descriptionCodeMirrorEditorEnabled=!1,ye(),$("#bai_bai_toolkit_description_codemirror_editor_enabled").prop("checked",!1),yE())})}async function il(){if(h[Hl])return h[Hl];const[e,t,n,r,o,a,i]=await Promise.all([tt(()=>import("./index.B5fiB6ig.chunk.js"),[]),tt(()=>import("./index.C_abXisK.chunk.js").then(l=>l.i),__vite__mapDeps([3,4])),tt(()=>import("./index.DR6-X5CW.chunk.js"),__vite__mapDeps([5,4,3,6,7])),tt(()=>import("./index.Cdu3_o3o.chunk.js"),__vite__mapDeps([8,7,6,4,3])).catch(()=>({})),tt(()=>import("./index.BDKGZZC0.chunk.js"),__vite__mapDeps([6,7,4,3])).catch(()=>({})),tt(()=>import("./index.CZC4xwU-.chunk.js").then(l=>l.i),[]).catch(()=>({})),tt(()=>import("./index.BZrLMojD.chunk.js"),__vite__mapDeps([9,3,4,6,7])).catch(()=>({}))]),s={EditorState:e.EditorState,EditorView:t.EditorView,keymap:t.keymap,defaultKeymap:n.defaultKeymap,history:n.history,historyKeymap:n.historyKeymap,css:r.css,defaultHighlightStyle:o.defaultHighlightStyle,HighlightStyle:o.HighlightStyle,syntaxHighlighting:o.syntaxHighlighting,classHighlighter:a.classHighlighter,tags:a.tags,oneDarkHighlightStyle:i.oneDarkHighlightStyle,oneDarkTheme:i.oneDarkTheme,oneDarkColor:i.color};if(!s.EditorState||!s.EditorView)throw new Error("CodeMirror modules did not expose EditorState/EditorView");return h[Hl]=s,s}function AD(e,t,n,r){const{EditorState:o,EditorView:a,keymap:i,defaultKeymap:s=[],history:l,historyKeymap:c=[]}=r,u=t.value.length<=Jd,p=[a.lineWrapping,a.updateListener.of(b=>{b.docChanged&&(e.dirty=!0)}),a.theme({"&":{backgroundColor:"var(--SmartThemeBlurTintColor)",border:"1px solid var(--SmartThemeBorderColor)",borderRadius:"4px",contain:"layout paint style",color:"var(--SmartThemeBodyColor)",font:"inherit",minHeight:"min(42vh, 420px)",textShadow:"none"},"&.cm-focused":{outline:"none"},".cm-scroller":{fontFamily:"inherit",lineHeight:"1.35",maxHeight:"55vh",minHeight:"min(42vh, 420px)",overflow:"auto",overflowAnchor:"none",overscrollBehavior:"auto",touchAction:"pan-y",WebkitOverflowScrolling:"touch"},".cm-content":{caretColor:"var(--SmartThemeBodyColor)",contain:"layout paint style",padding:"8px",textShadow:"none",minHeight:"min(42vh, 420px)"},".cm-line":{padding:"0"}})];u&&typeof l=="function"&&p.push(l()),typeof i?.of=="function"&&p.push(i.of(u?[...s,...c]:s)),a.contentAttributes?.of&&p.push(a.contentAttributes.of({autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false","aria-label":t.getAttribute("aria-label")||"角色描述"})),n.textContent="",e.view=new a({state:o.create({doc:t.value||"",extensions:p}),parent:n})}function qc(e){if(!(!e.source&&!e.wrapper&&!e.view)){sl(e);for(const t of e.listeners||[])t.target.removeEventListener(t.type,t.handler,t.options);e.listeners=[],e.view?.destroy?.(),e.source?.classList.remove(Xd),e.wrapper?.remove(),e.source=null,e.wrapper=null,e.view=null,e.dirty=!1,e.loadingToken=null}}function SE(e){return e.view?.state?.doc?.toString?.()??""}function PD(e){if(!(e.source instanceof HTMLTextAreaElement)||!e.view)return!1;const t=SE(e),n=e.source.value!==t;return n&&(e.source.value=t),n}function LD(e){if(e.dirty||!(e.source instanceof HTMLTextAreaElement)||!e.view)return;const t=e.source.value||"";SE(e)!==t&&(e.view.dispatch({changes:{from:0,to:e.view.state.doc.length,insert:t}}),e.dirty=!1)}function ID(e,t,n){!e?.enabled||e.flushing||(sl(e),e.timer=setTimeout(()=>{e.timer=0,Ko(`deferred ${t}`,{dispatchInput:!0,save:!0})},n))}function sl(e){e?.timer&&(clearTimeout(e.timer),e.timer=0)}function Ko(e,{dispatchInput:t=!0,save:n=!0}={}){const r=h[er];if(!r?.enabled||r.flushing||!(r.source instanceof HTMLTextAreaElement)||!r.view)return!1;sl(r),r.flushing=!0;try{const o=PD(r)||r.dirty;return r.dirty=!1,o&&t&&_D(r.source),o&&n&&pD()&&(document.querySelector("#create_button")?.click(),console.debug(`${T} CodeMirror description editor flushed after ${e}`)),o}finally{r.flushing=!1}}function RD(){let e=document.getElementById(Gc);e||(e=document.createElement("style"),e.id=Gc,document.head.append(e)),e.textContent=`
#${oE} {
    box-sizing: border-box;
    display: block;
    width: 100%;
}

.${Xd} {
    display: none !important;
}
`}function MD(){document.getElementById(Gc)?.remove()}function OD(e,t){return!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length?!1:e.every((n,r)=>n===t[r])}function BD(e){return String(e).replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}async function ip(e,t){if(Object.prototype.hasOwnProperty.call(t||{},"body")){const n=t.body;if(typeof n=="string")return zf(n);if(op(n))return zf(await n.text())}if(!vr(e)||e.bodyUsed||!e.body)return null;try{return await e.clone().json().catch(()=>null)}catch{return null}}function zf(e){try{return JSON.parse(e)}catch{return null}}function DD(){const e=globalThis[uO];e?.wrappedFetch&&(e.isEnabled=()=>!1,e.cachedBootstrapTextPromise=null,e.cachedBootstrapTextExpiresAt=0,globalThis.fetch===e.wrappedFetch&&typeof e.originalFetch=="function"&&(globalThis.fetch=e.originalFetch))}function $D(){const e=globalThis[dO];e?.wrappedFetch&&(e.isEnabled=()=>!1,globalThis.fetch===e.wrappedFetch&&typeof e.originalFetch=="function"&&(globalThis.fetch=e.originalFetch))}function ND(){if(h[Af])return;const e=t=>{t?.type==="visibilitychange"&&document.visibilityState!=="hidden"||HD()};document.addEventListener("visibilitychange",e,!0),window.addEventListener("pagehide",e,!0),h[Af]={handler:e}}function HD(){const e=typeof document.getSelection=="function"?document.getSelection():null;if(!e||e.rangeCount===0)return;const t=Vf(e.anchorNode),n=Vf(e.focusNode);if(!(Uf(t)||Uf(n)))try{e.removeAllRanges()}catch{}}function Vf(e){return e instanceof Element?e:e?.parentElement instanceof Element?e.parentElement:null}function Uf(e){return e instanceof HTMLElement?!!(e.isContentEditable||e.closest('input, textarea, select, [contenteditable=""], [contenteditable="true"]')):!1}function Yc(){const e=Q.reloadChatMutex;return!!e&&typeof e.callback=="function"}function GD(){try{if(!Yc()){console.debug(`${T} 当前 ST 版本低于 1.16.0,聊天丢失缓解不可用,已跳过`);return}const e=Q.reloadChatMutex;if(e.callback[Sf])return;const t=e.callback;async function n(...r){const o=FD();try{return await t.apply(e,r)}finally{try{await VD(o)}catch(a){console.error(`${T} 聊天丢失缓解执行失败:`,a)}}}n[Sf]=!0,n.__baiBaiToolkitOriginal=t,e.callback=n,console.debug(`${T} 已启用缓解酒馆丢失聊天问题`)}catch(e){console.error(`${T} 启用缓解酒馆丢失聊天问题失败:`,e)}}function FD(){try{if(g.chatLossMitigationEnabled===!1)return null;const e=!!St,t=Q.this_chid!==void 0;if(!e&&!t)return null;const n=Q.chat;return{valid:!0,inGroup:e,chatId:We(),length:Array.isArray(n)?n.length:0,integrity:Q.chat_metadata?.integrity,messages:Array.isArray(n)?n.slice():[],metadata:Q.chat_metadata}}catch(e){return console.error(`${T} 聊天快照失败:`,e),null}}function zD(e){if(!e||!e.valid||e.inGroup!==!!St||We()!==e.chatId||!e.inGroup&&Q.this_chid===void 0||e.length<=1)return!1;const t=Q.chat;return Array.isArray(t)?t.length<e.length:!1}async function VD(e){if(!zD(e))return;console.warn(`${T} 检测到切换正则触发酒馆 BUG 导致聊天被覆盖(原 ${e.length} 条),正在自动恢复…`);const t=Q.chat;t.splice(0,t.length,...e.messages);const n=Q.chat_metadata;if(n&&e.metadata)for(const o of Object.keys(e.metadata))n[o]=e.metadata[o];n&&e.integrity&&(n.integrity=e.integrity),await Q.printMessages();let r=!1;try{Q.cancelDebouncedChatSave(),e.inGroup?await Q.saveChatConditional():await Q.saveChat({force:!0}),r=!0}catch(o){console.error(`${T} 聊天记录已在内存恢复,但重新写盘失败:`,o)}try{r?toastr.success(`柏宝箱已拦截一次酒馆 BUG 导致的聊天记录丢失,已自动恢复 ${t.length} 条消息`):toastr.warning("柏宝箱已在界面恢复聊天记录,但写盘失败,请检查后端连接后手动保存一次")}catch{}console.warn(`${T} 聊天记录已恢复(${t.length} 条),写盘${r?"成功":"失败"}`)}const UD="bai-bai-save-generate-display",Wf="bai-bai-save-generate-display-visible",WD="bai-bai-save-generate-display-complete",KD="bai-bai-save-generate-display-stopped",jD="bai-bai-save-generate-display-minimized",qD="bai-bai-save-generate-display-label",YD="bai-bai-save-generate-display-label-text",QD="bai-bai-save-generate-display-led",XD="bai-bai-save-generate-display-controls",JD="bai-bai-save-generate-display-btn",ZD="bai-bai-save-generate-display-content",e$="bai-bai-save-generate-display-reasoning",t$="bai-bai-save-generate-display-reasoning-label",n$="bai-bai-save-generate-display-reasoning-content",r$="bai-bai-save-generate-display-text",o$="bai-bai-save-generate-display-text-content",a$=220;class i${constructor(){this.element=null,this.labelText=null,this.reasoningSection=null,this.reasoningContent=null,this.textSection=null,this.textContent=null,this.stopButton=null,this.minimizeButton=null,this.closeButton=null,this.onStop=null,this.hideTimeoutId=null,this.hasContent=!1,this.isMinimized=!1,this.isComplete=!1,this.isStopped=!1}show({label:t="",onStop:n=null}={}){this.element&&this.hide({instant:!0}),this.isMinimized=!1,this.isComplete=!1,this.isStopped=!1,this.hasContent=!1,this.onStop=n,this.clearHideTimeout(),this.element=document.createElement("div"),this.element.classList.add(UD);const r=document.createElement("div");r.classList.add(qD);const o=document.createElement("span");o.classList.add(QD),r.appendChild(o),this.labelText=document.createElement("span"),this.labelText.classList.add(YD),this.labelText.textContent=t,r.appendChild(this.labelText);const a=document.createElement("div");a.classList.add(XD),typeof n=="function"&&(this.stopButton=this.createButton("Stop generation","&#9632;"),this.stopButton.addEventListener("click",async()=>{this.stopButton&&(this.stopButton.disabled=!0);try{await this.onStop?.()}catch(c){console.error("[SaveGenerateDisplay] stop handler failed",c)}}),a.appendChild(this.stopButton)),this.minimizeButton=this.createButton("Minimize","&#8211;"),this.minimizeButton.addEventListener("click",()=>this.toggleMinimize()),a.appendChild(this.minimizeButton),this.closeButton=this.createButton("Close","&#215;"),this.closeButton.addEventListener("click",()=>this.hide()),a.appendChild(this.closeButton),r.appendChild(a),this.element.appendChild(r);const i=document.createElement("div");i.classList.add(ZD),this.reasoningSection=document.createElement("div"),this.reasoningSection.classList.add(e$),this.reasoningSection.style.display="none";const s=document.createElement("div");return s.classList.add(t$),s.textContent="Thinking...",this.reasoningSection.appendChild(s),this.reasoningContent=document.createElement("div"),this.reasoningContent.classList.add(n$),this.reasoningSection.appendChild(this.reasoningContent),i.appendChild(this.reasoningSection),this.textSection=document.createElement("div"),this.textSection.classList.add(r$),this.textSection.style.display="none",this.textContent=document.createElement("div"),this.textContent.classList.add(o$,"mes_text"),this.textSection.appendChild(this.textContent),i.appendChild(this.textSection),this.element.appendChild(i),(Array.from(document.querySelectorAll("dialog[open]:not([closing])")).pop()??document.body).appendChild(this.element),requestAnimationFrame(()=>{this.element?.classList.add(Wf)}),this}createButton(t,n){const r=document.createElement("button");return r.type="button",r.classList.add(JD),r.setAttribute("aria-label",t),r.setAttribute("title",t),r.innerHTML=n,r}toggleMinimize(){return this.element?(this.isMinimized=!this.isMinimized,this.element.classList.toggle(jD,this.isMinimized),this.minimizeButton&&(this.minimizeButton.innerHTML=this.isMinimized?"&#9633;":"&#8211;",this.minimizeButton.setAttribute("title",this.isMinimized?"Restore":"Minimize"),this.minimizeButton.setAttribute("aria-label",this.isMinimized?"Restore":"Minimize")),this):this}setLabel(t){return this.labelText&&(this.labelText.textContent=t),this}updateReasoning(t){return!this.reasoningSection||!this.reasoningContent||!t?this:(this.reasoningSection.style.display="",this.reasoningContent.innerHTML=this.formatText(t,!0),this.reasoningContent.scrollTop=this.reasoningContent.scrollHeight,this)}updateContent(t){return!this.textSection||!this.textContent||!t?this:(this.hasContent=!0,this.textSection.style.display="",this.textContent.innerHTML=this.formatText(t,!1),this.textContent.scrollTop=this.textContent.scrollHeight,this)}markStopped({label:t=null}={}){return!this.element||this.isStopped||this.isComplete?this:(this.isStopped=!0,this.clearHideTimeout(),this.element.classList.add(KD),this.removeStopButton(),t!==null&&this.setLabel(t),this)}complete({label:t=null,delay:n=3e3}={}){return!this.element||this.isComplete?this:(this.isComplete=!0,this.clearHideTimeout(),this.element.classList.add(WD),this.removeStopButton(),t!==null&&this.setLabel(t),typeof n=="number"&&n>=0&&(this.hideTimeoutId=setTimeout(()=>this.performHide(),n)),this)}hide({instant:t=!1}={}){return this.clearHideTimeout(),this.performHide({instant:t}),this}removeStopButton(){this.stopButton&&(this.stopButton.remove(),this.stopButton=null)}clearHideTimeout(){this.hideTimeoutId!==null&&(clearTimeout(this.hideTimeoutId),this.hideTimeoutId=null)}performHide({instant:t=!1}={}){const n=this.element;if(!n)return;const r=()=>{this.element===n&&(n.remove(),this.element=null,this.labelText=null,this.reasoningSection=null,this.reasoningContent=null,this.textSection=null,this.textContent=null,this.stopButton=null,this.minimizeButton=null,this.closeButton=null)};if(n.classList.remove(Wf),t){r();return}setTimeout(r,a$)}formatText(t,n){try{return sv(String(t),"",!1,!1,-1,{},n)}catch{return this.escapeHtml(t).replace(/\r?\n/g,"<br>")}}escapeHtml(t){return String(t??"").replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n])}}function s$(){X$();const e=globalThis[Uo];if(e?.wrappedFetch)return e.isEnabled=()=>g.saveGenerateEnabled===!0,e.monitoredJobIds instanceof Set||(e.monitoredJobIds=new Set),e.resumeDisplays instanceof Map||(e.resumeDisplays=new Map),e.activeGenerateChatIds instanceof Set||(e.activeGenerateChatIds=new Set),e.resumeCheckPromises instanceof Map||(e.resumeCheckPromises=new Map),e.recoveryLocks instanceof Map||(e.recoveryLocks=new Map),e.localTerminalWatchJobIds instanceof Set||(e.localTerminalWatchJobIds=new Set),e.localRequestGuards instanceof Map||(e.localRequestGuards=new Map),e.localRequestGuardSerial=Number(e.localRequestGuardSerial||0),Array.isArray(e.saveGenerateIntents)||(e.saveGenerateIntents=[]),e.saveGenerateIntentSerial=Number(e.saveGenerateIntentSerial||0),e.backendAvailable=e.backendAvailable===!0?!0:e.backendAvailable===!1?!1:null,e.backendCheckedAt=Number(e.backendCheckedAt||0),e.backendCheckPromise=null,e.activeSaveGenerateCancelTarget&&typeof e.activeSaveGenerateCancelTarget!="object"&&(e.activeSaveGenerateCancelTarget=null),e.resumeCheckScheduledChatId=String(e.resumeCheckScheduledChatId||""),e.resumeCheckScheduledLastMessageHash=String(e.resumeCheckScheduledLastMessageHash||""),e.resumeCheckInFlightChatId=String(e.resumeCheckInFlightChatId||""),e.lastResumeCheckChatId=String(e.lastResumeCheckChatId||""),e.lastResumeCheckAt=Number(e.lastResumeCheckAt||0),e.lastRecoveryBlockToastAt=Number(e.lastRecoveryBlockToastAt||0),Kf(e),qf(e),Zf(e),Xf(e),Jf(e),_n(e),Xc(e,"existing-hook",500),e;const t=globalThis.fetch;if(typeof t!="function")return null;const n={originalFetch:t.bind(globalThis),wrappedFetch:null,pendingJobs:[],monitoredJobIds:new Set,resumeDisplays:new Map,activeGenerateChatIds:new Set,activeSaveGenerateCancelTarget:null,resumeCheckPromises:new Map,recoveryLocks:new Map,localTerminalWatchJobIds:new Set,localRequestGuards:new Map,localRequestGuardSerial:0,saveGenerateIntents:[],saveGenerateIntentSerial:0,backendAvailable:null,backendCheckedAt:0,backendCheckPromise:null,resumeCheckTimer:null,resumeCheckScheduledChatId:"",resumeCheckScheduledLastMessageHash:"",resumeCheckInFlightChatId:"",lastResumeCheckChatId:"",lastResumeCheckAt:0,lastRecoveryBlockToastAt:0,nativeStopHandlerInstalled:!1,recoveryInputBlockerInstalled:!1,resumeHandlersInstalled:!1,messageDeleteHandlerInstalled:!1,isEnabled:()=>g.saveGenerateEnabled===!0};return n.wrappedFetch=async function(o,a){let i=null;try{const s=await P$(n,o,a);if(s)return s;if(!n.isEnabled())return n.originalFetch(o,a);const l=await c$(n,o,a);if(!l)return n.originalFetch(o,a);if(i=wE(n,l.save?.chatId),!await vE(n)){console.debug(`${T} save-generate skipped: BaiBaoKu backend is unavailable`);const p=await n.originalFetch(o,a);return Ya(n,i,p)}const c=await V$(n,l);if(c)return Ya(n,i,c);const u=await _$(n,l,o,a);return Ya(n,i,u)}catch(s){console.debug(`${T} save-generate path failed; falling back to native fetch`,s);try{const l=await n.originalFetch(o,a);return Ya(n,i,l)}catch(l){throw bs(n,i),l}}},n.wrappedFetch[Uo]=!0,globalThis[Uo]=n,globalThis.fetch=n.wrappedFetch,Kf(n),qf(n),Zf(n),Xf(n),Jf(n),Xc(n,"install",500),console.debug(`${T} save-generate fetch hook installed`),n}async function vE(e){if(!e?.originalFetch)return!1;const t=Date.now(),n=Number(e.backendCheckedAt||0),r=e.backendAvailable===!1?MO:RO;return typeof e.backendAvailable=="boolean"&&t-n<r?e.backendAvailable:(e.backendCheckPromise||(e.backendCheckPromise=l$(e.originalFetch).then(o=>(e.backendAvailable=o,e.backendCheckedAt=Date.now(),o)).catch(o=>(console.debug(`${T} save-generate backend check failed`,o),e.backendAvailable=!1,e.backendCheckedAt=Date.now(),!1)).finally(()=>{e.backendCheckPromise=null})),e.backendCheckPromise)}async function l$(e){const t=new AbortController,n=setTimeout(()=>t.abort(),OO);try{const r=await e(jy,{method:"GET",cache:"no-store",signal:t.signal}),o=await r.json().catch(()=>null);return!!(r.ok&&o?.ok===!0&&o?.data?.installed===!0)}finally{clearTimeout(n)}}function fs(e,t){e&&(e.backendAvailable=!!t,e.backendCheckedAt=Date.now())}async function c$(e,t,n){const r=ho(t);if(!r||_o(t,n)!=="POST")return null;let o;try{o=new URL(r,location.href)}catch{return null}if(o.origin!==location.origin||o.pathname!==SO)return null;const a=(c,u="")=>(console.debug(`${T} save-generate skipped: ${c}${u?` (${u})`:""}`),null);if(St)return a("group chat is not supported");if(Q.main_api!=="openai")return a("main_api is not chat-completions",String(Q.main_api||"unknown"));if(g.saveGenerateEnabled!==!0)return a("setting disabled");const i=await ip(t,n);if(!TE(i))return a("request body is not eligible",u$(i));const s=xE(i);if(!s)return a("current chat identity is unavailable");const l=f$(e,s,i);return l?{body:i,save:s,intent:l}:a("no matching main chat generation intent")}function u$(e){return!e||typeof e!="object"||Array.isArray(e)?typeof e:[`type=${String(e.type||"normal")}`,`n=${String(e.n||1)}`,`source=${String(e.chat_completion_source||"")}`,`tools=${Array.isArray(e.tools)?e.tools.length:0}`].join(" ")}function TE(e){return!e||typeof e!="object"||Array.isArray(e)||!["normal","regenerate"].includes(String(e.type||"normal"))||Number(e.n||1)>1||Array.isArray(e.tools)&&e.tools.length>0?!1:!!e.chat_completion_source}function Kf(e){!e||e.saveGenerateIntentHandlersInstalled||typeof M?.on!="function"||(e.saveGenerateIntentHandlersInstalled=!0,w.GENERATION_AFTER_COMMANDS&&M.on(w.GENERATION_AFTER_COMMANDS,(t,n,r)=>{d$(e,t,n,r)}),w.CHAT_COMPLETION_SETTINGS_READY&&M.on(w.CHAT_COMPLETION_SETTINGS_READY,t=>{m$(e,t)}))}function d$(e,t,n={},r=!1){if(gs(e),g.saveGenerateEnabled!==!0||St||r)return;const o=String(t||"normal");if(!["normal","regenerate"].includes(o)||!p$(n))return;const a=xE({type:o});a&&(e.saveGenerateIntentSerial=Number(e.saveGenerateIntentSerial||0)+1,e.saveGenerateIntents.push({id:e.saveGenerateIntentSerial,type:o,chatId:a.chatId,createdAt:Date.now(),preparedAt:0,expectedBody:null,expectedBodyHash:"",lastMessageHashAtStart:cp()}),gs(e))}function p$(e){return!e||typeof e!="object"?!0:e.force_chid!==void 0&&e.force_chid!==null&&e.force_chid!==""||Number(e.depth||0)>0?!1:!e.quiet_prompt&&!e.quietToLoud&&!e.quietImage&&!e.quietName}function m$(e,t){if(gs(e),g.saveGenerateEnabled!==!0||St||!TE(t))return;const n=String(t.type||"normal"),r=Ht();if(!r)return;const a=[...Array.isArray(e?.saveGenerateIntents)?e.saveGenerateIntents:[]].reverse().find(i=>i&&!i.expectedBody&&i.type===n&&i.chatId===r);a&&(a.expectedBody=t,a.preparedAt=Date.now())}function f$(e,t,n){gs(e);const r=String(t?.chatId||"").trim(),o=String(t?.type||n?.type||"normal");if(!r||!g$())return null;const a=jf(n),i=Date.now(),l=(Array.isArray(e?.saveGenerateIntents)?e.saveGenerateIntents:[]).find(c=>{if(!c||c.chatId!==r||c.type!==o||!c.expectedBody||i-Number(c.preparedAt||c.createdAt||0)>Qy)return!1;const u=c.expectedBodyHash||jf(c.expectedBody);return c.expectedBodyHash=u,u===a});return l||null}function gs(e){if(!e)return;if(!Array.isArray(e.saveGenerateIntents)){e.saveGenerateIntents=[];return}const t=Date.now();e.saveGenerateIntents=e.saveGenerateIntents.filter(n=>n&&t-Number(n.createdAt||0)<=Qy),e.saveGenerateIntents.length>wf&&(e.saveGenerateIntents=e.saveGenerateIntents.slice(-wf))}function g$(){const e=yo();return!!(e?.message&&e.message.is_user===!0)}function yo(){const e=Q.chat;if(!Array.isArray(e)||e.length===0)return null;let t=null,n=-1,r=-1;for(const o of e)!o||o.chat_metadata||(r+=1,t=o,n=r);return t?{message:t,floor:n}:null}function jf(e){const t=b$(e);let n=2166136261;for(let r=0;r<t.length;r+=1)n^=t.charCodeAt(r),n=Math.imul(n,16777619);return`r${t.length.toString(36)}:${(n>>>0).toString(16).padStart(8,"0")}`}function b$(e){return JSON.stringify(Qc(e))}function Qc(e){if(!e||typeof e!="object")return e;if(Array.isArray(e))return e.map(n=>Qc(n));const t={};for(const n of Object.keys(e).sort()){const r=Qc(e[n]);r!==void 0&&(t[n]=r)}return t}function xE(e=null){if($e===void 0||St)return null;const t=Xt?.[$e];if(!t?.avatar||!t?.chat)return null;const n=Ht();if(!n)return null;const r=String(e?.type||"normal");return{kind:"character",type:r,chatId:n,avatar_url:t.avatar,file_name:t.chat,ch_name:t.name||"",expectedFloor:h$(r)}}function h$(e){const t=yo(),n=t&&Number.isInteger(t.floor)?t.floor:-1,r=!!(t?.message&&t.message.is_user!==!0);return String(e||"normal")==="regenerate"&&r?n:n+1}function Ht(){return St?"":String(We?.()||Xt?.[$e]?.chat||"").trim()}async function _$(e,t,n,r){const o=ol(n,r),a=me();for(const[p,b]of Object.entries(a||{}))o.has(p)||o.set(p,b);o.set("Content-Type","application/json");const i={...rp(n,r),...r||{},method:"POST",headers:o,cache:"no-store",body:JSON.stringify({save:t.save,generate:t.body})},s=String(t.save?.chatId||"").trim(),l=t.body?.stream===!0,c=yo();console.log(`${T} [楼层日志] 发送生成请求 type=${t.save?.type} chatId=${s} 当前末尾楼层=${c?.floor??-1} 期望楼层=${t.save?.expectedFloor}`);const u=E$(e,{chatId:s});C$(e,s);try{const p=await e.originalFetch(ur,i);if(p?.status===404)return fs(e,!1),ro(e,u),console.debug(`${T} save-generate endpoint unavailable; falling back to native generate`),e.originalFetch(n,r);fs(e,p?.ok||p?.status!==404);const b=p?.headers?.get(xO)||"";return u&&(u.jobId=b),b&&p.ok?(console.debug(`${T} save-generate intercepted ${t.save.file_name}; job=${b}`),w$(e,{id:b,save:t.save,status:p.headers.get(TO)||"",createdAt:Date.now(),consumed:!1}),D$(e,b)):b&&!p.ok&&Ve({id:b}),p}finally{k$(e,s),(!l||!u?.jobId)&&ro(e,u)}}function qf(e){if(!e||e.nativeStopHandlerInstalled)return;e.nativeStopHandlerInstalled=!0;const t=n=>{y$(n)&&v$(e)};document.addEventListener("pointerdown",t,!0),document.addEventListener("click",t,!0)}function y$(e){const t=e?.target;return!!(t instanceof Element?t:t?.parentElement)?.closest?.("#mes_stop")}function E$(e,t){if(!e||!t?.chatId)return null;const n={jobId:"",chatId:String(t.chatId||""),startedAt:Date.now(),cancelRequested:!1};return e.activeSaveGenerateCancelTarget=n,n}function S$(e){const t=e?.activeSaveGenerateCancelTarget;return!t?.chatId&&!t?.jobId?null:Date.now()-Number(t.startedAt||0)>ka*2?(e.activeSaveGenerateCancelTarget=null,null):t}function ro(e,t=null){const n=e?.activeSaveGenerateCancelTarget;if(!e||!n)return;if(!t||t===n){e.activeSaveGenerateCancelTarget=null;return}const r=String(n.jobId||""),o=String(t.jobId||t.id||""),a=String(n.chatId||""),i=String(t.chatId||t.save?.chatId||"");o&&r&&o!==r||i&&a&&i!==a||!o&&!i||(e.activeSaveGenerateCancelTarget=null)}async function v$(e){if(!e?.originalFetch)return;const t=S$(e);if(!(!t||t.cancelRequested)){t.cancelRequested=!0;try{const n=await T$(e.originalFetch,t),r={id:t.jobId||n?.id||"",...n||{},status:n?.status||"canceled",chatId:t.chatId};ro(e,r),r.id?up(e,r):dp("柏宝库后台生成已停止")}catch(n){t.cancelRequested=!1,console.debug(`${T} save-generate native stop cancel failed`,n)}}}async function T$(e,t){const n=String(t?.chatId||"").trim(),r=t?.jobId||!n?1:6;for(let o=0;o<r;o+=1){const a=String(t?.jobId||"").trim();try{return await CE(e,a,{chatId:n})}catch(i){if(a||o>=r-1||!x$(i))throw i;await lp(250)}}return null}function x$(e){return Number(e?.status||0)===404||/not found|HTTP 404|cancelable save-generate job was not found/i.test(String(e?.message||""))}function w$(e,t){Mn(e),e.pendingJobs.push(t)}function C$(e,t){!e||!t||(e.activeGenerateChatIds instanceof Set||(e.activeGenerateChatIds=new Set),e.activeGenerateChatIds.add(t))}function k$(e,t){!e||!t||!(e.activeGenerateChatIds instanceof Set)||e.activeGenerateChatIds.delete(t)}function wE(e,t){const n=String(t||"").trim();if(!e||!n)return null;e.localRequestGuards instanceof Map||(e.localRequestGuards=new Map),e.localRequestGuardSerial=Number(e.localRequestGuardSerial||0)+1;const r={id:e.localRequestGuardSerial,chatId:n,createdAt:Date.now()};return e.localRequestGuards.set(n,r),r}function bs(e,t){if(!e||!t?.chatId||!(e.localRequestGuards instanceof Map))return;const n=e.localRequestGuards.get(t.chatId);!n||n.id!==t.id||e.localRequestGuards.delete(t.chatId)}function A$(e,t){const n=String(t||"").trim();if(!n||!(e?.localRequestGuards instanceof Map))return!1;const r=e.localRequestGuards.get(n);return r?Date.now()-Number(r.createdAt||0)>ka?(e.localRequestGuards.delete(n),!1):!0:!1}function Ya(e,t,n){if(!t)return n;if(!(n instanceof Response)||!n.ok||!n.body||typeof ReadableStream>"u")return bs(e,t),n;const r=n.body.getReader();let o=!1;const a=(s=0)=>{o||(o=!0,setTimeout(()=>bs(e,t),Math.max(0,Number(s||0))))},i=new ReadableStream({async pull(s){try{const{done:l,value:c}=await r.read();if(l){s.close(),a(Jy);return}s.enqueue(c)}catch(l){a(),s.error(l)}},async cancel(s){a();try{await r.cancel(s)}catch{}}});return new Response(i,{status:n.status,statusText:n.statusText,headers:n.headers})}function Mn(e){const t=Date.now();e.pendingJobs=e.pendingJobs.filter(n=>n&&!n.consumed&&t-Number(n.createdAt||0)<ka*2)}async function P$(e,t,n){const r=ho(t);if(!r||_o(t,n)!=="POST")return null;let o;try{o=new URL(r,location.href)}catch{return null}if(o.origin!==location.origin||o.pathname!==vO)return null;const a=await ip(t,n);if(!a||typeof a!="object"||Array.isArray(a))return null;Mn(e);const i=R$(e,a);if(!i)return null;const s=await sp(e,i);return s?.status&&(i.status=s.status),ro(e,{id:i.id,chatId:i.save?.chatId}),s&&sN(s)?(console.debug(`${T} save-generate saved ${i.save.file_name}; skipping native /api/chats/save`),i.consumed=!0,Ve(s),Mn(e),N$(s)):(console.debug(`${T} save-generate did not save ${i.save.file_name}; native /api/chats/save will run`,s),L$(e,t,n,i,s))}async function L$(e,t,n,r,o=null){const a=wE(e,r?.save?.chatId);try{const i=await e.originalFetch(t,n);return i?.ok?I$(e,r,o):Yf(e,r),Qf(e,a,Jy),i}catch(i){throw Yf(e,r),Qf(e,a),i}}function I$(e,t,n=null){!e||!t||(t.consumed=!0,Ve(n?.id?n:{id:t.id}),Mn(e))}function Yf(e,t){!e||!t||(t.consumed=!0,Mn(e))}function Qf(e,t,n=0){t&&setTimeout(()=>bs(e,t),Math.max(0,Number(n||0)))}function R$(e,t){const n=String(t.avatar_url||""),r=String(t.file_name||""),o=String(t.ch_name||"");for(let a=e.pendingJobs.length-1;a>=0;a-=1){const i=e.pendingJobs[a];if(!i||i.consumed)continue;const s=i.save||{};if(String(s.avatar_url||"")===n&&String(s.file_name||"")===r&&!(s.ch_name&&o&&String(s.ch_name)!==o))return i}return null}async function sp(e,t,{onUpdate:n=null}={}){if(pn(t.status))return n?.({id:t.id,status:t.status}),{id:t.id,status:t.status};const r=await O$(e,t,{onUpdate:n}).catch(o=>(console.debug(`${T} save-generate event stream failed; falling back to polling`,o),null));return r&&pn(r.status)?r:M$(e,t,{onUpdate:n})}async function M$(e,t,{onUpdate:n=null}={}){const r=Date.now()+ka;for(;Date.now()<r;){const o=await $$(e.originalFetch,t.id).catch(a=>(console.debug(`${T} save-generate status polling failed`,a),null));if(o?.status&&(t.status=o.status,n?.(o)),o&&pn(o.status))return o;await lp(wO)}return{id:t.id,status:"timeout"}}async function O$(e,t,{onUpdate:n=null}={}){if(!e?.originalFetch||!t?.id||typeof TextDecoder>"u")return null;const r=new Headers(me()),o=await e.originalFetch(`${ur}/${encodeURIComponent(t.id)}/events`,{method:"GET",headers:r,cache:"no-store"});if(o.status===404||o.status===405||o.status===501)return null;if(!o.ok||!o.body||typeof o.body.getReader!="function")throw new Error(`HTTP ${o.status}`);const a=o.body.getReader(),i=new TextDecoder;let s="",l=null;const c=u=>{const p=B$(u);if(!p.data)return null;let b=null;try{b=JSON.parse(p.data)}catch{return null}return b?.status?(l=b,t.status=b.status,n?.(b),b):null};try{for(;;){const{done:u,value:p}=await a.read();if(u)break;s+=i.decode(p,{stream:!0}),s=s.replace(/\r\n/g,`
`);let b=s.indexOf(`

`);for(;b>=0;){const v=s.slice(0,b);s=s.slice(b+2);const y=c(v);if(y&&pn(y.status))return y;b=s.indexOf(`

`)}}if(s+=i.decode(),s.trim()){const u=c(s);if(u&&pn(u.status))return u}}finally{a.releaseLock?.()}return l&&pn(l.status)?l:null}function B$(e){const t={type:"message",data:""},n=[];for(const r of String(e||"").split(`
`)){const o=r.replace(/\r$/,"");if(!o||o.startsWith(":"))continue;const a=o.indexOf(":"),i=a>=0?o.slice(0,a):o,s=a>=0?o.slice(a+1).replace(/^ /,""):"";i==="event"?t.type=s||"message":i==="data"&&n.push(s)}return t.data=n.join(`
`),t}function D$(e,t){!e?.originalFetch||!t||(e.localTerminalWatchJobIds instanceof Set||(e.localTerminalWatchJobIds=new Set),!e.localTerminalWatchJobIds.has(t)&&(e.localTerminalWatchJobIds.add(t),sp(e,{id:t,status:""}).then(n=>{const r=String(n?.status||"");if(r==="failed"||r==="canceled"){Ve(n);return}ll(r)&&n?.id&&pp({id:n.id,...n})&&(sa(e,n.id),Ve(n))}).catch(n=>{console.debug(`${T} save-generate local terminal watch failed`,n)}).finally(()=>{e.localTerminalWatchJobIds?.delete(t)})))}async function $$(e,t){const n=new Headers(me()),r=await e(`${ur}/${encodeURIComponent(t)}`,{method:"GET",headers:n,cache:"no-store"}),o=await r.json().catch(()=>null);if(!r.ok||o?.ok!==!0)throw new Error(o?.message||o?.error?.message||`HTTP ${r.status}`);return o.data||null}async function CE(e,t,{chatId:n=""}={}){const r=String(t||"").trim(),o=String(n||"").trim();if(!r&&!o)throw new Error("save-generate cancel requires jobId or chatId");const a=new Headers(me());a.set("Content-Type","application/json");const i=r?`${ur}/${encodeURIComponent(r)}/cancel`:`${ur}/cancel`,s={};r&&(s.jobId=r),o&&(s.chatId=o);const l=await e(i,{method:"POST",headers:a,cache:"no-store",body:JSON.stringify(s)}),c=await l.json().catch(()=>null);if(!l.ok||c?.ok!==!0){const u=new Error(c?.message||c?.error?.message||`HTTP ${l.status}`);throw u.status=l.status,u}return c.data||{id:r,status:"canceled"}}function N$(e){return new Response(JSON.stringify({ok:!0,skipped:!0,baibaokuSaveGenerate:!0,jobId:e.id,status:e.status}),{status:200,statusText:"OK",headers:{"Content-Type":"application/json; charset=utf-8","X-Baibaoku-Save-Generate-Skipped":"true"}})}function lp(e){return new Promise(t=>setTimeout(t,e))}function Xf(e){if(!e||e.resumeHandlersInstalled)return;e.resumeHandlersInstalled=!0;const t=n=>Xc(e,n);w.CHAT_LOADED&&M.on(w.CHAT_LOADED,()=>t("chat-loaded")),w.CHAT_CHANGED&&M.on(w.CHAT_CHANGED,()=>t("chat-changed")),document.addEventListener("visibilitychange",()=>{document.visibilityState!=="hidden"&&t("visibility")}),window.addEventListener("focus",()=>t("focus")),window.addEventListener("pageshow",()=>t("pageshow"))}function Jf(e){!e||e.messageDeleteHandlerInstalled||typeof M?.on!="function"||(e.messageDeleteHandlerInstalled=!0,M.on(w.MESSAGE_DELETED,()=>{H$(e)}))}async function H$(e){if(!e?.originalFetch||St)return;const t=Ht();if(t)try{const n=await G$(e.originalFetch,t);q$(e,t),ro(e,{chatId:t}),oo(e,t),e.lastResumeCheckChatId=t,e.lastResumeCheckAt=Date.now(),console.debug(`${T} save-generate discarded jobs after message delete`,n)}catch(n){console.debug(`${T} save-generate discard after message delete failed`,n)}}async function G$(e,t){const n=String(t||"").trim();if(!n)return null;const r=new Headers(me());r.set("Content-Type","application/json");const o=await e(_O,{method:"POST",headers:r,cache:"no-store",body:JSON.stringify({chatId:n})}),a=await o.json().catch(()=>null);if(!o.ok||a?.ok!==!0){const i=new Error(a?.message||a?.error?.message||`HTTP ${o.status}`);throw i.status=o.status,i}return a.data||null}function Xc(e,t="unknown",n=CO){e&&(e.resumeCheckTimer&&clearTimeout(e.resumeCheckTimer),e.resumeCheckScheduledChatId=Ht(),e.resumeCheckScheduledLastMessageHash=cp(),_n(e),e.resumeCheckTimer=setTimeout(()=>{e.resumeCheckTimer=null,e.resumeCheckScheduledChatId="",e.resumeCheckScheduledLastMessageHash="",_n(e),kE(e,t)},n))}async function kE(e,t="unknown",{force:n=!1,lastMessageHash:r=null}={}){if(!e?.isEnabled?.()||St)return null;const o=Ht();if(!o)return null;e.resumeCheckPromises instanceof Map||(e.resumeCheckPromises=new Map);const a=e.resumeCheckPromises.get(o);if(a)return a;const i=F$(e,o,t,{force:n,lastMessageHash:r});e.resumeCheckPromises.set(o,i),_n(e);try{return await i}finally{e.resumeCheckPromises?.get(o)===i&&e.resumeCheckPromises.delete(o),e.resumeCheckInFlightChatId===o&&(e.resumeCheckInFlightChatId=""),_n(e)}}async function F$(e,t,n="unknown",{force:r=!1,lastMessageHash:o=null}={}){if(!e?.isEnabled?.()||St||!t)return null;if(z$(e,t))return console.debug(`${T} save-generate resume check skipped: current page is generating this chat (${n})`),null;if(Q.is_send_press)return console.debug(`${T} save-generate resume check skipped: SillyTavern generation is still active (${n})`),null;if(n!=="generate-fetch"&&A$(e,t))return console.debug(`${T} save-generate resume check skipped: local generate request is pending (${n})`),null;const a=Date.now();if(!r&&e.lastResumeCheckChatId===t&&a-Number(e.lastResumeCheckAt||0)<kO)return console.debug(`${T} save-generate resume check skipped: same chat cooldown (${n})`),null;e.resumeCheckInFlightChatId=t;try{if(!await vE(e))return console.debug(`${T} save-generate resume check skipped: BaiBaoKu backend is unavailable (${n})`),null;const i=typeof o=="string"?o:cp(),s=IE(),l=await Y$(e.originalFetch,t,{lastMessageHash:i,lastMessageInfo:s}).catch(c=>(console.debug(`${T} save-generate resume check failed`,c),null));if(console.log(`${T} [楼层日志] resume检查(${n}) 上报末尾楼层=${s.floor} role=${s.role} → 后端${l?.id?`返回job=${l.id} status=${l.status} 期望楼层=${l.save?.expectedFloor}`:"未返回job(已被后端拦截或无job)"}`),e.lastResumeCheckChatId=t,e.lastResumeCheckAt=Date.now(),!l?.id)return null;if(Aa(l))return sa(e,l.id),l;if(j$(e,l.id)){const c=String(l.status||"");return pn(c)&&c!=="completed"?(sa(e,l.id),Ve(l),console.debug(`${T} save-generate resume check skipped: job is owned by current page job=${l.id} (${n})`),l):(console.debug(`${T} save-generate resume check skipped: job is owned by current page job=${l.id} status=${c} (${n})`),l)}return console.debug(`${T} save-generate resume check found job=${l.id} status=${l.status} reason=${n}`),RE(e,l,t,n),l}finally{e.resumeCheckInFlightChatId===t&&(e.resumeCheckInFlightChatId="")}}function z$(e,t){return!!(t&&e?.activeGenerateChatIds instanceof Set&&e.activeGenerateChatIds.has(t))}function Zf(e){if(!e||e.recoveryInputBlockerInstalled)return;e.recoveryInputBlockerInstalled=!0;const t=n=>{if(!e?.isEnabled?.())return;const r=n?.target;if(!(r instanceof Element?r:r?.parentElement)?.closest?.(Xy))return;const a=Ht();!a||!AE(e,a)||(n.preventDefault(),n.stopImmediatePropagation(),LE(e),PE(e,a,"blocked-input"))};document.addEventListener("pointerdown",t,!0),document.addEventListener("click",t,!0)}function AE(e,t){return!!ui(e,t)}async function V$(e,t){const n=String(t?.save?.chatId||"").trim();if(!n)return null;const r=await PE(e,n,"generate-fetch");return r?(console.debug(`${T} save-generate blocked native generate while recovering job=${r.jobId||""}`),LE(e),K$(r)):null}async function PE(e,t,n="unknown"){const r=String(t||"").trim();if(!e||!r)return null;const o=ui(e,r);if(o)return o;const a=U$(e,r);if(a)return await a.catch(i=>{console.debug(`${T} save-generate pending resume check failed`,i)}),ui(e,r);if(e.resumeCheckTimer&&e.resumeCheckScheduledChatId===r){const i=String(e.resumeCheckScheduledLastMessageHash||"");clearTimeout(e.resumeCheckTimer),e.resumeCheckTimer=null,e.resumeCheckScheduledChatId="",e.resumeCheckScheduledLastMessageHash="",_n(e),await kE(e,n,{force:!0,lastMessageHash:i}).catch(s=>{console.debug(`${T} save-generate forced resume check failed`,s)})}return ui(e,r)}function U$(e,t){return!t||!(e?.resumeCheckPromises instanceof Map)?null:e.resumeCheckPromises.get(t)||null}function W$(e,t,n){const r=String(n||t?.chatId||t?.save?.chatId||"").trim(),o=String(t?.id||"").trim();if(!e||!r||!o)return null;e.recoveryLocks instanceof Map||(e.recoveryLocks=new Map);const a={chatId:r,jobId:o,status:String(t?.status||""),createdAt:Date.now()};return e.recoveryLocks.set(r,a),_n(e),a}function ui(e,t){const n=String(t||"").trim();if(!n||!(e?.recoveryLocks instanceof Map))return null;const r=e.recoveryLocks.get(n)||null;return r?Date.now()-Number(r.createdAt||0)>ka*2?(e.recoveryLocks.delete(n),_n(e),null):r:null}function oo(e,t){if(!e||!(e.recoveryLocks instanceof Map))return;const n=typeof t=="string"?t:String(t?.chatId||t?.save?.chatId||"").trim(),r=typeof t=="string"?"":String(t?.jobId||t?.id||"").trim();if(!(!n&&!r)){for(const[o,a]of e.recoveryLocks.entries())n&&o!==n||r&&a.jobId&&a.jobId!==r||e.recoveryLocks.delete(o);_n(e)}}function _n(e){const t=Ht(),n=!!(t&&AE(e,t)),r=document.querySelectorAll(Xy);for(const o of r)if(o instanceof HTMLElement){if(n){o.dataset.baibaokuSaveGenerateRecoveryTitle||(o.dataset.baibaokuSaveGenerateRecoveryTitle=o.getAttribute("title")||""),o.setAttribute("title","柏宝库后台生成恢复中，请稍后再发送"),o.setAttribute("aria-disabled","true"),o.classList.add("bai-bai-save-generate-recovery-disabled");continue}if(o.classList.contains("bai-bai-save-generate-recovery-disabled")){const a=o.dataset.baibaokuSaveGenerateRecoveryTitle||"";a?o.setAttribute("title",a):o.removeAttribute("title"),delete o.dataset.baibaokuSaveGenerateRecoveryTitle,o.removeAttribute("aria-disabled"),o.classList.remove("bai-bai-save-generate-recovery-disabled")}}}function K$(e){return new Response(JSON.stringify({error:{message:"柏宝库后台生成恢复中，请稍后再发送。"},baibaokuSaveGenerateRecoveryBlocked:!0,jobId:e?.jobId||""}),{status:409,statusText:"Conflict",headers:{"Content-Type":"application/json; charset=utf-8","X-Baibaoku-Save-Generate-Recovery-Blocked":"true"}})}function LE(e){const t=Date.now();t-Number(e?.lastRecoveryBlockToastAt||0)<PO||(e&&(e.lastRecoveryBlockToastAt=t),dp("柏宝库后台生成恢复中，请稍后再发送"))}function j$(e,t){return!t||!Array.isArray(e?.pendingJobs)?!1:(Mn(e),e.pendingJobs.some(n=>String(n?.id||"")===String(t)))}function sa(e,t){if(!(!t||!Array.isArray(e?.pendingJobs))){for(const n of e.pendingJobs)String(n?.id||"")===String(t)&&(n.consumed=!0);Mn(e)}}function q$(e,t){const n=String(t||"").trim();if(!(!n||!Array.isArray(e?.pendingJobs))){for(const r of e.pendingJobs)String(r?.save?.chatId||r?.chatId||"").trim()===n&&(r.consumed=!0,r.id&&Ve(r));Mn(e)}}async function Y$(e,t,{lastMessageHash:n="",lastMessageInfo:r=null}={}){const o=new Headers(me()),a=new URLSearchParams({chatId:t});n&&a.set("lastMessageHash",n),r&&Number.isInteger(r.floor)&&r.floor>=0&&(a.set("lastMessageFloor",String(r.floor)),a.set("lastMessageRole",r.role||""));const i=await e(`${ur}/pending?${a.toString()}`,{method:"GET",headers:o,cache:"no-store"}),s=await i.json().catch(()=>null);if(!i.ok||s?.ok!==!0)throw new Error(s?.message||s?.error?.message||`HTTP ${i.status}`);return s.data||null}function cp(){return IE().hash}function IE(){const e=yo();return e?.message?{hash:Q$(e.message.mes??"",e.floor),floor:e.floor,role:e.message.is_user===!0?"user":"assistant"}:{hash:"",floor:-1,role:""}}function Q$(e,t){const n=String(e??""),r=t==null?-1:Number(t),o=Number.isInteger(r)&&r>=0?r:-1,a=`${o}
${n}`;let i=2166136261;for(let s=0;s<a.length;s+=1)i^=a.charCodeAt(s),i=Math.imul(i,16777619);return`m${o}:${n.length.toString(36)}:${(i>>>0).toString(16).padStart(8,"0")}`}function X$(){if(document.getElementById(Cf))return;const e=document.createElement("style");e.id=Cf,e.textContent=`
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
`,document.head.appendChild(e)}function J$(e){const t=Array.from(document.querySelectorAll(`.${ae}`)),n=t.find(r=>r instanceof HTMLElement&&r.dataset.baibaokuSaveGenerateJobId===String(e||""))||t[t.length-1];n instanceof HTMLElement&&(n.classList.add(ae),n.dataset.baibaokuSaveGenerateJobId=String(e||""))}function RE(e,t,n,r="unknown"){if(W$(e,t,n),ll(t.status)){hs(e,t),tN(t,n,r).catch(o=>{console.debug(`${T} save-generate recovery failed`,o)}).finally(()=>oo(e,t));return}if(pn(t.status)){hs(e,t),Ve(t),oo(e,t);return}eN(e,t,n,r)}function hs(e,t){if(!e||!t?.id||Aa(t))return;e.resumeDisplays instanceof Map||(e.resumeDisplays=new Map);let n=e.resumeDisplays.get(t.id);if(n?n.setLabel(Gl(t)):(n=new i$,n.show({label:Gl(t),onStop:()=>Z$(e,t.id)}),e.resumeDisplays.set(t.id,n)),J$(t.id),t.reasoning&&n.updateReasoning(t.reasoning),t.resultText&&n.updateContent(t.resultText),ll(t.status)){n.complete({label:"柏宝库生成已保存，正在恢复消息...",delay:1500}),eg(e,t.id);return}if(String(t.status||"")==="canceled"){up(e,t);return}pn(t.status)&&(n.markStopped({label:Gl(t)}),eg(e,t.id))}async function Z$(e,t){const n=e?.resumeDisplays?.get(t);if(!e?.originalFetch||!t){n?.setLabel("柏宝库无法停止后台生成");return}try{n?.setLabel("柏宝库正在停止后台生成...");const r=await CE(e.originalFetch,t),o={id:t,...r||{},status:r?.status||"canceled"};up(e,o)}catch(r){console.debug(`${T} save-generate cancel failed`,r),n?.setLabel("柏宝库停止失败，后台生成仍在继续...")}}function up(e,t){if(!t?.id)return;if(ro(e,t),oo(e,t),Aa(t)){sa(e,t.id),e?.resumeDisplays?.get(t.id)?.hide(),e?.resumeDisplays?.delete(t.id);return}Ve(t),sa(e,t.id),e?.resumeDisplays?.get(t.id)?.hide(),e?.resumeDisplays?.delete(t.id),dp("柏宝库后台生成已停止")}function dp(e){typeof globalThis.toastr?.info=="function"&&globalThis.toastr.info(e,"柏宝库")}function eg(e,t){setTimeout(()=>{const n=e?.resumeDisplays?.get(t);(!n||n.isComplete||n.isStopped)&&e?.resumeDisplays?.delete(t)},5e3)}function Gl(e){const t=String(e?.status||"");return ll(t)?"柏宝库生成已保存，正在恢复消息...":t==="failed"?"柏宝库后台生成失败":t==="canceled"?"柏宝库后台生成已停止":t==="conflict"?"柏宝库已生成内容，但未能自动保存":t==="saving"?"柏宝库正在保存生成内容...":"柏宝库后台生成中..."}function eN(e,t,n,r="unknown"){if(!t?.id||e.monitoredJobIds?.has(t.id))return;e.monitoredJobIds instanceof Set||(e.monitoredJobIds=new Set),e.monitoredJobIds.add(t.id);const o={id:t.id,save:t.save||{},status:t.status||""};hs(e,t),sp(e,o,{onUpdate:a=>hs(e,a)}).then(a=>{if(String(a?.status||"")==="timeout"){console.debug(`${T} save-generate monitor timed out job=${t.id} reason=${r}`),oo(e,t);return}RE(e,a,n,`monitor:${r}`)}).catch(a=>{console.debug(`${T} save-generate monitor failed`,a),oo(e,t)}).finally(()=>{e.monitoredJobIds.delete(t.id)})}async function tN(e,t,n="unknown"){if(!(!e?.id||Aa(e))&&Ht()===String(t||"")&&(await nN(t),Ht()===String(t||""))){if(pp(e)){Ve(e);return}if(iN(e.save?.type)){await rN(e,t,n);return}Ve(e),console.debug(`${T} save-generate saved non-normal job while page was away; reloading chat job=${e.id} reason=${n}`),await Do().catch(r=>{console.debug(`${T} save-generate chat reload failed`,r)})}}async function nN(e){const t=String(e||""),n=Date.now()+LO;for(;Date.now()<n;){if(Ht()!==t)return!1;if(tg())return!0;await lp(IO)}return Ht()===t&&tg()}function tg(){const e=Q.chat;return Array.isArray(e)&&e.some(t=>t&&!t.chat_metadata)}async function rN(e,t,n="unknown"){if(!e?.id||Aa(e))return;const r=String(e.savedMessage?.mes??e.resultText??"");if(!r){Ve(e),console.debug(`${T} save-generate saved empty job; reloading chat job=${e.id} reason=${n}`),await Do().catch(a=>{console.debug(`${T} save-generate chat reload failed`,a)});return}if(pp(e)){Ve(e);return}const o=String(e.savedMessage?.name||Xt?.[$e]?.name||e.save?.ch_name||Q.name2||"").trim();if(!o){Ve(e),console.debug(`${T} save-generate could not resolve character name; reloading chat job=${e.id} reason=${n}`),await Do().catch(a=>{console.debug(`${T} save-generate chat reload failed`,a)});return}try{console.debug(`${T} save-generate saved while page was away; inserting with sendas job=${e.id} reason=${n}`),await Sv({name:o,return:"none"},r),Ve(e)}catch(a){console.debug(`${T} save-generate sendas recovery failed; reloading chat job=${e.id}`,a),Ve(e),await Do().catch(i=>{console.debug(`${T} save-generate chat reload failed`,i)})}}function oN(e){const t=Number.isInteger(e?.save?.expectedFloor)?e.save.expectedFloor:-1;if(t<0)return console.log(`${T} [楼层日志] 恢复判定 job=${e?.id} 期望楼层=缺失(旧job) → 回退旧逻辑`),null;const n=yo(),r=n&&Number.isInteger(n.floor)?n.floor:-1,o=r+1===t;return console.log(`${T} [楼层日志] 恢复判定 job=${e?.id} 当前末尾楼层=${r} 期望楼层=${t} 末尾+1=${r+1} → ${o?"一致,允许插入(恢复)":"不一致,不插入(挡重复)"}`),o}function pp(e){const t=oN(e);if(t!==null)return!t;const n=Q.chat;if(!Array.isArray(n)||n.length===0)return!1;const r=String(e.savedMessage?.mes??e.resultText??"");if(!r)return!1;const o=Number.isInteger(e.savedMessageFloor)?e.savedMessageFloor:-1,a=yo();if(a?.message&&a.message.is_user!==!0&&Number.isInteger(o)&&o>=0&&a.floor>=o)return!0;for(let i=n.length-1;i>=0;i-=1){const s=n[i];if(!(!s||s.chat_metadata))return s.is_user!==!0&&aN(s.mes,r)}return!1}function ng(e){return String(e??"").replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).replace(/\n?data:\s*\[DONE\]\s*$/i,"").trim()}function aN(e,t){const n=ng(e),r=ng(t);return!!(r&&n.includes(r))}function iN(e){return["normal","regenerate"].includes(String(e||"normal"))}function pn(e){return["completed","saved","already_saved","conflict","failed","canceled"].includes(String(e||""))}function ll(e){return["completed","saved","already_saved"].includes(String(e||""))}function sN(e){const t=String(e?.status||"");return["saved","already_saved"].includes(t)?e.chatSaved===!0||e.chatSaved===void 0:!1}function ME(e){return`${AO}:${e?.id||""}`}function Aa(e){if(!e?.id)return!0;try{return localStorage.getItem(ME(e))==="1"}catch{return!1}}function Ve(e){if(e?.id)try{localStorage.setItem(ME(e),"1")}catch{}}const rg=`<div class="bai_bai_toolkit_settings">\r
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
`;function jo(){const e=fN();e&&(e.isEnabled=()=>g.progressiveChatLoadingEnabled===!0),lN()}function On(){return(!h.fastChatGet||typeof h.fastChatGet!="object")&&(h.fastChatGet={requestId:0,current:null,lastNoticeAt:0}),h.fastChatGet}function lN(){const e=On();if(cN(),!e.pointerInteractionGuardInstalled){e.pointerInteractionGuardInstalled=!0;const t=n=>{_s()&&dN(n)&&(n.preventDefault(),n.stopImmediatePropagation(),la())};for(const n of["pointerdown","pointerup","mousedown","mouseup","touchstart","touchend","click"])document.addEventListener(n,t,{capture:!0})}e.keydownInteractionGuardInstalled||(e.keydownInteractionGuardInstalled=!0,document.addEventListener("keydown",t=>{_s()&&pN(t)&&(t.preventDefault(),t.stopImmediatePropagation(),la())},!0)),e.interactionGuardInstalled=!0}function cN(){const e=globalThis[kf];if(e?.installed)return e;const t=globalThis.jQuery?.fn||globalThis.$?.fn;if(!t)return null;const n={installed:!0,originalTrigger:t.trigger,originalTriggerHandler:t.triggerHandler};return typeof n.originalTrigger=="function"&&(t.trigger=function(o,...a){return og(this,o)?(la(),this):n.originalTrigger.call(this,o,...a)}),typeof n.originalTriggerHandler=="function"&&(t.triggerHandler=function(o,...a){if(og(this,o)){la();return}return n.originalTriggerHandler.call(this,o,...a)}),globalThis[kf]=n,n}function og(e,t){if(!_s()||uN(t)!=="click")return!1;const n=Number(e?.length||0);for(let r=0;r<n;r++){const o=e[r];if(o instanceof Element&&o.closest(lE))return!0}return!1}function uN(e){return(typeof e=="string"?e:typeof e?.type=="string"?e.type:"").split(".")[0]}function dN(e){const t=OE(e);if(!t)return null;const n=t.closest(lE);return n||(Number(e?.detail||0)>=2?t.closest("#chat .mes[mesid]"):null)}function pN(e){const t=OE(e),n=String(e?.key||"");if(n==="Enter"){const r=t instanceof HTMLElement&&t.id==="send_textarea"&&(e.ctrlKey||e.metaKey||!e.shiftKey),o=!!(e.ctrlKey||e.metaKey||e.altKey);return r||o}return n==="ArrowLeft"||n==="ArrowRight"?!mN(t):!1}function mN(e){if(!(e instanceof HTMLElement))return!1;const t=e.tagName?.toUpperCase?.()||"";return e.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(t)}function OE(e){const t=e?.target;return t instanceof Element?t:typeof Node<"u"&&t instanceof Node&&t.parentElement?t.parentElement:null}function _s(){const e=On().current;return g.progressiveChatLoadingEnabled===!0&&!!e?.loadingFull}function la(){const e=On(),t=Date.now();t-Number(e.lastNoticeAt||0)<1500||(e.lastNoticeAt=t,globalThis.toastr?.info&&globalThis.toastr.info("剩余批次还未加载完成，先不要进行操作","长聊天分批加载:"))}function fN(){const e=globalThis[$l];if(e?.wrappedFetch)return e;const t=globalThis.fetch;if(typeof t!="function")return null;const n={originalFetch:t.bind(globalThis),wrappedFetch:null,isEnabled:()=>g.progressiveChatLoadingEnabled===!0};return n.wrappedFetch=async function(o,a){try{if(gN(o,a)&&_s())return la(),AN();if(!n.isEnabled())return n.originalFetch(o,a);const i=await bN(o,a);return i?await hN(n.originalFetch,i,o,a):n.originalFetch(o,a)}catch(i){return console.debug(`${T} Fast chat get path failed; falling back to native chat get`,i),n.originalFetch(o,a)}},n.wrappedFetch[$l]=!0,globalThis[$l]=n,globalThis.fetch=n.wrappedFetch,n}function gN(e,t){const n=ho(e);if(!n||_o(e,t)!=="POST")return!1;try{const r=new URL(n,location.href);return r.origin===location.origin&&rB.has(r.pathname)}catch{return!1}}async function bN(e,t){const n=ho(e);if(!n||_o(e,t)!=="POST")return null;let r;try{r=new URL(n,location.href)}catch{return null}if(r.origin!==location.origin||!nB.has(r.pathname))return null;const o=await ip(e,t);return!o||typeof o!="object"||Array.isArray(o)?null:{path:r.pathname,body:o}}async function hN(e,t,n,r){const o=await BE(e,n,r,{source:t.path,mode:"initial",originalRequest:t.body,thresholdBytes:oB,initialMessages:CN()}),a=DE(o);if(!Array.isArray(a.chat))throw new Error("BaiBaoKu fast chat get returned a non-array chat payload");return a.kind==="partial"||a.meta?.partial===!0?_N(e,t,n,r,a):mp(),kN(a.chat)}async function BE(e,t,n,r){const o=ol(t,n),a=me();for(const[u,p]of Object.entries(a||{}))o.has(u)||o.set(u,p);o.set("Content-Type","application/json");const i={...rp(t,n),method:"POST",headers:o,cache:"no-store",body:JSON.stringify(r)},s=await e(mO,i),l=await s.clone().json().catch(()=>null);if(!s?.ok||!l)throw new Error(`Unexpected status ${s?.status||"unknown"}`);const c=l?.data&&typeof l.data=="object"?l.data:l;if(l?.ok===!1||c?.ok===!1)throw new Error(l?.message||l?.error?.message||c?.message||c?.error?.message||"BaiBaoKu fast chat get failed");return c}function DE(e){if(!e||typeof e!="object")throw new Error("BaiBaoKu fast chat get returned an invalid payload");return{kind:String(e.kind||(e.meta?.partial?"partial":"complete")),chat:e.chat,meta:e.meta&&typeof e.meta=="object"?e.meta:{}}}function _N(e,t,n,r,o){const a=On(),i=o.meta||{},s={requestId:Number(a.requestId||0)+1,loadingFull:!0,source:t.path,originalRequest:t.body,chatKey:String(i.chatKey||""),version:String(i.version||""),messageStartIndex:Math.max(0,Number(i.messageStartIndex||0)),returnedMessages:Math.max(0,Number(i.returnedMessages||$E(o.chat).length||0)),currentChatId:We?.()??"",startedAt:Date.now()};a.requestId=s.requestId,a.current=s,document.body?.classList.add("bai-bai-toolkit-fast-chat-hydrating"),yN(e,n,r,s).catch(l=>{console.warn(`${T} Fast chat hydration failed`,l),On().current?.requestId===s.requestId&&globalThis.toastr?.error&&globalThis.toastr.error("聊天记录补全失败，请重新进入当前聊天。","柏宝库")})}async function yN(e,t,n,r){const o={source:r.source,mode:"full",originalRequest:r.originalRequest,chatKey:r.chatKey,version:r.version};let a;try{a=DE(await BE(e,t,n,o))}catch(i){console.debug(`${T} BaiBaoKu full chat get failed; trying native chat get`,i),a={kind:"full",chat:await EN(e,r),meta:{chatKey:r.chatKey,version:r.version}}}if(!SN(r,a.meta)){On().current?.requestId===r.requestId&&(mp(r.requestId),globalThis.toastr?.warning&&globalThis.toastr.warning("聊天记录补全状态已过期，请重新进入当前聊天。","柏宝库"));return}vN(r,a)}async function EN(e,t){const n=new Headers(me());n.has("Content-Type")||n.set("Content-Type","application/json");const r=await e(t.source,{method:"POST",headers:n,cache:"no-store",body:JSON.stringify(t.originalRequest||{})}),o=await r.clone().json().catch(()=>null);if(!r?.ok||!Array.isArray(o))throw new Error(`Native chat get returned ${r?.status||"invalid data"}`);return o}function SN(e,t={}){const n=On().current;if(!n||n.requestId!==e.requestId||!n.loadingFull||e.chatKey&&t?.chatKey&&String(t.chatKey)!==e.chatKey||e.version&&t?.version&&String(t.version)!==e.version)return!1;const r=We?.()??"";return String(r)===String(e.currentChatId)}function vN(e,t){const n=$E(t.chat);if(!n.length&&Array.isArray(t.chat)&&t.chat.length>0)throw new Error("Full chat payload did not contain messages");const r=Array.isArray(Q.chat)?Q.chat:null;if(!r)throw new Error("SillyTavern chat array is unavailable");const o=document.querySelector("#chat"),a=PN(o);r.splice(0,r.length,...n),TN(e),xN(n.length),wN(),LN(o,a),mp(e.requestId),console.debug(`${T} Fast chat hydration completed`,{messages:n.length,start:e.messageStartIndex,returned:e.returnedMessages})}function $E(e){return Array.isArray(e)?e[0]?.chat_metadata?e.slice(1):e:[]}function Qa(e){[...document.querySelectorAll("#chat .mes[mesid]")].filter(n=>n instanceof HTMLElement).forEach((n,r)=>{const o=e.messageStartIndex+r;n.setAttribute("mesid",String(o)),n.dataset.mesid=String(o),n.dataset.messageId=String(o);const a=n.querySelector(".mesIDDisplay");a instanceof HTMLElement&&(a.textContent=`#${o}`)})}function TN(e){Qa(e),requestAnimationFrame(()=>Qa(e)),setTimeout(()=>Qa(e),100),setTimeout(()=>Qa(e),500)}function xN(e){const t=document.querySelector("#show_more_messages");if(!(t instanceof HTMLElement))return;const n=document.querySelectorAll("#chat .mes[mesid]").length;n<=0||n>=e||(t.classList.remove("disabled","displayNone","hidden"),t.removeAttribute("disabled"),t.removeAttribute("aria-disabled"),t.style.display="")}function wN(){try{w.MORE_MESSAGES_LOADED&&M.emit(w.MORE_MESSAGES_LOADED),w.CHAT_LOADED&&M.emit(w.CHAT_LOADED)}catch(e){console.debug(`${T} Failed to emit fast chat hydration events`,e)}}function mp(e=null){const t=On();e!==null&&t.current?.requestId!==e||(t.current=null,document.body?.classList.remove("bai-bai-toolkit-fast-chat-hydrating"))}function CN(){const e=Number(Y?.chat_truncation);return Number.isInteger(e)&&e>0?e:aB}function kN(e){return new Response(JSON.stringify(e),{status:200,statusText:"OK",headers:{"Content-Type":"application/json"}})}function AN(){return new Response(JSON.stringify({ok:!0,skipped:!0,reason:"hydrating",message:"Chat is still hydrating. Please wait for the full chat to load."}),{status:200,statusText:"OK",headers:{"Content-Type":"application/json"}})}function PN(e){return e instanceof HTMLElement?{top:e.scrollTop,height:e.scrollHeight}:null}function LN(e,t){if(!(e instanceof HTMLElement)||!t)return;const n=()=>{const r=e.scrollHeight-t.height;e.scrollTop=Math.max(0,t.top+r)};n(),requestAnimationFrame(n)}function Jc(){g.customCssShadowPropertyEnabled?IN():RN(),g.customCssInputOptimizationEnabled?(MN(),BN()):(DN(),ON())}function IN(){const e=document.getElementById(Nt);e instanceof HTMLTextAreaElement&&NE(e,String(Y.custom_css??e.value??""))}function NE(e,t=""){if(!(e instanceof HTMLTextAreaElement))return!1;const n=Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value");if(!n||typeof n.get!="function"||typeof n.set!="function")return!1;if(h.customCssShadowPropertyInstalled&&h.customCssShadowPropertyInput===e)return e.value=t,!0;h.customCssShadowPropertyInstalled&&GE(h.customCssShadowPropertyInput);let r=String(t??"");return h.customCssOriginalValueDescriptor=n,h.customCssShadowVirtualValue=r,Object.defineProperty(e,"value",{get:function(){return r},set:function(o){r=String(o),h.customCssShadowVirtualValue=r},configurable:!0,enumerable:!0}),h.customCssShadowPropertyInstalled=!0,h.customCssShadowPropertyInput=e,!0}function HE(e=String(Y.custom_css??"")){if(!g.customCssShadowPropertyEnabled)return!1;const t=_p();return t instanceof HTMLTextAreaElement?NE(t,e):!1}function RN(){h.customCssShadowPropertyInstalled&&(GE(h.customCssShadowPropertyInput||document.getElementById(Nt)),h.customCssOriginalValueDescriptor=null,h.customCssShadowPropertyInstalled=!1,h.customCssShadowPropertyInput=null,h.customCssShadowVirtualValue="")}function GE(e){const t=h.customCssOriginalValueDescriptor;if(!(e instanceof HTMLTextAreaElement)||!t)return!1;const n=String(e.value??"");return Object.defineProperty(e,"value",t),e.value=n,!0}function MN(){if(h[Qi])return;const e=document.getElementById(Nt);if(!(e instanceof HTMLTextAreaElement))return;const t=i=>{const s=Xa(i);if(!s||(i.stopImmediatePropagation(),i.isComposing||h.customCssInputComposing||h.customCssInputCompositionCommitPending))return;const l=ag(s);di(s,"input event"),(l||!i.isTrusted)&&ca("input event")},n=i=>{Xa(i)&&(qo(),h.customCssInputComposing=!0,h.customCssInputCompositionCommitPending=!1)},r=i=>{const s=Xa(i);s&&(qo(),h.customCssInputCompositionCommitPending=!0,h.customCssCompositionEndTimer=setTimeout(()=>{h.customCssCompositionEndTimer=null,h.customCssInputComposing=!1,h.customCssInputCompositionCommitPending=!1,ag(s),di(s,"composition end")},0))},o=i=>{const s=Xa(i);s&&(h.customCssInputComposing=!1,h.customCssInputCompositionCommitPending=!1,qo(),di(s,`${i?.type||"flush"} event`),ca(`${i?.type||"flush"} event`))},a=i=>{if(UE(i)){zE(`input optimization ${i?.type||"restore"}`);return}FE(`input optimization ${i?.type||"page lifecycle"}`)};e.addEventListener("input",t,!0),e.addEventListener("compositionstart",n,!0),e.addEventListener("compositionend",r,!0),e.addEventListener("change",o,!0),e.addEventListener("blur",o,!0),window.addEventListener("pagehide",a),window.addEventListener("pageshow",a),window.addEventListener("focus",a),h[Qi]={input:e,inputHandler:t,compositionStartHandler:n,compositionEndHandler:r,flushHandler:o,pageLifecycleHandler:a}}function ON(){const e=h[Qi];e&&(FE("remove input optimization"),qo(),h.customCssInputComposing=!1,h.customCssInputCompositionCommitPending=!1,e.input?.removeEventListener("input",e.inputHandler,!0),e.input?.removeEventListener("compositionstart",e.compositionStartHandler,!0),e.input?.removeEventListener("compositionend",e.compositionEndHandler,!0),e.input?.removeEventListener("change",e.flushHandler,!0),e.input?.removeEventListener("blur",e.flushHandler,!0),window.removeEventListener("pagehide",e.pageLifecycleHandler),window.removeEventListener("pageshow",e.pageLifecycleHandler),window.removeEventListener("focus",e.pageLifecycleHandler),VE(),delete h[Qi])}function Xa(e){const t=e.target;return!(t instanceof HTMLTextAreaElement)||t.id!==Nt?null:t}function di(e,t="input commit"){!(e instanceof HTMLTextAreaElement)||e.id!==Nt||(Y.custom_css=String(e.value),Yt())}function qo(){h.customCssCompositionEndTimer&&(clearTimeout(h.customCssCompositionEndTimer),h.customCssCompositionEndTimer=null)}function ca(e="flush custom css apply"){WE(e)}function FE(e="current input flush"){if(h[Qe]?.themeSyncPending){ao(`${e} while theme sync is pending`,{forceEditor:!0,refreshTarget:!0,clearThemePending:!1});return}if(dr(e,{apply:!0,save:!0}))return;const n=document.getElementById(Nt);n instanceof HTMLTextAreaElement&&(h.customCssInputComposing=!1,h.customCssInputCompositionCommitPending=!1,qo(),di(n,e)),ca(e)}function ao(e="custom css settings sync",{forceEditor:t=!1,refreshTarget:n=!1,clearThemePending:r=!1}={}){const o=String(Y.custom_css??"");HE(o);const a=_p();let i=!0;a instanceof HTMLTextAreaElement&&(a.value!==o&&(a.value=o),i=a.value===o);let s=h[Qe];n&&s?.enabled&&(fp(s),s=h[Qe]);let l=!0,c=!0;s?.enabled&&(s.source instanceof HTMLTextAreaElement&&(s.source.value!==o&&(s.source.value=o),l=s.source.value===o),s.view&&(t||s.themeSyncPending||!s.dirty?s.wrapper instanceof HTMLElement&&s.wrapper.isConnected&&s.wrapper.offsetParent===null&&Ur(s)!==o?(s.dirty=!1,s.editorThemeSyncDeferred=!0,c=!0):(s.dirty=!1,cl(s,{force:!0}),s.editorThemeSyncDeferred=!1,c=Ur(s)===o):c=Ur(s)===o)),WE(e);const p=document.getElementById(ls)?.textContent===o,b=i&&l&&c&&p;return b&&r&&s&&!s.editorThemeSyncDeferred&&(s.themeSyncPending=!1),b}function zE(e="page restore"){VE();const t=(h.customCssRestoreSyncToken??0)+1;h.customCssRestoreSyncToken=t,h.customCssRestoreSyncTimers=[];const n=r=>{if(h.customCssRestoreSyncToken!==t)return;const o=h[Qe];ao(`${e} (${r})`,{forceEditor:!!o?.themeSyncPending,refreshTarget:!0,clearThemePending:!0})};n("immediate");for(const r of UO){const o=setTimeout(()=>n(`timeout ${r}ms`),r);h.customCssRestoreSyncTimers.push(o)}}function VE(){for(const e of h.customCssRestoreSyncTimers||[])clearTimeout(e);h.customCssRestoreSyncTimers=[]}function UE(e){return e?.type==="pageshow"||e?.type==="focus"?!0:e?.type==="visibilitychange"&&document.visibilityState!=="hidden"}function WE(e="apply custom css style text"){let t=document.getElementById(ls);const n=String(Y.custom_css??"");return t||(t=document.createElement("style"),t.type="text/css",t.id=ls,document.head.append(t)),t.textContent!==n?(t.textContent=n,!0):!1}function BN(){const e=$N();e.enabled=!0,oH(),NN(e),fp(e),GN(e)}function DN(){const e=h[Qe];if(e){dr("disable",{apply:!0,save:!0}),e.enabled=!1,e.refreshFrame&&(cancelAnimationFrame(e.refreshFrame),e.refreshFrame=0),e.mutationObserver?.disconnect(),e.mutationObserver=null,Zc(e),ys(e);for(const t of e.globalListeners||[])t.target.removeEventListener(t.type,t.handler,t.options);e.globalListeners=[],YE(),delete h[Qe]}}function $N(){return h[Qe]||(h[Qe]={enabled:!1,source:null,wrapper:null,view:null,listeners:[],globalListeners:[],mutationObserver:null,mutationObserverTargets:[],refreshFrame:0,dirty:!1,flushing:!1,syncingFromSource:!1,loadingToken:null,colorScheme:"light",colorSchemeDirty:!0,themeSyncPending:!1,editorThemeSyncDeferred:!1,themeSyncToken:0,themeSyncTimers:[],themeSyncFrames:[]}),h[Qe]}function NN(e){if(e.globalListeners.length>0)return;const t=i=>{const s=i.target;if(!(s instanceof Element))return;s.closest(GO)&&JN(e);const l=s.closest("#native-btn-scroll-new");l instanceof HTMLElement&&ZN(e,l);const c=s.closest("#native-search-dropdown-new .vce-search-item-new");c instanceof HTMLElement&&eH(e,c),s.closest("#vce-css-inject-toggle")&&setTimeout(()=>{yp(e)},0),s.closest(`.editor_maximize[data-for="${Nt}"]`)&&(dr("maximize click",{apply:!0,save:!0}),KE(e,{colorSchemeDirty:!0}))},n=i=>{if(UE(i)){zE(`CodeMirror ${i?.type||"restore"}`);return}dr("page lifecycle",{apply:!0,save:!0})},r=i=>{const s=i.target;s instanceof HTMLSelectElement&&s.id==="themes"&&(ZE(e.themePrintCharactersSnapshot),e.themePrintCharactersSnapshot=null,XE())},o=i=>{const s=i.target;s instanceof HTMLSelectElement&&s.id==="themes"&&(Sp(),e.themePrintCharactersSnapshot=JE())},a=(i,s,l,c)=>{!(i instanceof EventTarget)||i===document||(i.addEventListener(s,l,c),e.globalListeners.push({target:i,type:s,handler:l,options:c}))};for(const i of HN())a(i,"click",t,!0);a(document.querySelector("#themes"),"change",o,!0),a(document.querySelector("#themes"),"change",r,!1),a(window,"pagehide",n),a(window,"pageshow",n),a(window,"focus",n)}function HN(){const e=new Set,t=r=>{r instanceof HTMLElement&&r.isConnected&&e.add(r)},n=gp();return t(document.querySelector(cs)),t(document.querySelector(Zd)),t(document.querySelector("#native-search-dropdown-new")),t(n?.closest("dialog.popup, .popup")),t(n?.parentElement),[...e]}function GN(e){typeof MutationObserver=="function"&&(e.mutationObserver||(e.mutationObserver=new MutationObserver(t=>{VN(e,t)||!zN(e,t)||KE(e,{colorSchemeDirty:!0})})),pi(e))}function pi(e){if(!e?.mutationObserver)return;const t=FN(e),n=e.mutationObserverTargets||[];if(!(n.length===t.length&&n.every((o,a)=>o.target===t[a].target&&o.optionsKey===t[a].optionsKey))){e.mutationObserver.disconnect();for(const{target:o,options:a}of t)e.mutationObserver.observe(o,a);e.mutationObserverTargets=t}}function FN(e){const t=new Map,n={attributes:!0,attributeFilter:["class","style","hidden","data-for"],childList:!0,subtree:!0},r={childList:!0,subtree:!1},o=(c,u,p)=>{if(!(c instanceof Node)||!c.isConnected)return;const b=t.get(c);(!b||b.optionsKey==="parent")&&t.set(c,{target:c,optionsKey:u,options:p})},a=c=>{if(!(c instanceof HTMLElement))return;o(c.parentElement,"host",n),o(c.parentElement?.parentElement,"parent",r);const u=c.closest("dialog.popup");o(u,"host",n),o(u?.parentElement,"parent",r)},i=gp(),s=document.querySelector(cs),l=document.querySelector(Zd);return a(i),a(e.source),a(e.wrapper),s instanceof HTMLElement?(o(s,"host",n),o(s.parentElement,"parent",r)):l instanceof HTMLElement&&(o(l,"host",n),o(l.parentElement,"parent",r)),[...t.values()]}function zN(e,t){return t.some(n=>{if(Fl(e,n.target))return!0;for(const r of n.addedNodes)if(Fl(e,r))return!0;for(const r of n.removedNodes)if(Fl(e,r))return!0;return!1})}function Fl(e,t){return t instanceof Element?t.id===Nt||t.id===R||t.matches(cs)||t.matches(Zd)||t.matches(ss)||e.source instanceof HTMLElement&&(t===e.source||t.contains(e.source)||e.source.contains(t))||e.wrapper instanceof HTMLElement&&(t===e.wrapper||t.contains(e.wrapper)||e.wrapper.contains(t))?!0:!!t.querySelector?.([`#${Nt}`,`#${R}`,cs,ss].join(", ")):!1}function VN(e,t){const n=e.wrapper;return n instanceof HTMLElement?t.every(r=>{if(r.target instanceof Node&&n.contains(r.target))return!0;for(const o of r.addedNodes)if(!(o instanceof Node)||!n.contains(o))return!1;for(const o of r.removedNodes)if(!(o instanceof Node)||!n.contains(o))return!1;return r.addedNodes.length>0||r.removedNodes.length>0}):!1}function KE(e=h[Qe],{colorSchemeDirty:t=!1}={}){e?.enabled&&(t&&(e.colorSchemeDirty=!0),!e.refreshFrame&&(e.refreshFrame=requestAnimationFrame(()=>{e.refreshFrame=0,fp(e)})))}function fp(e){if(!e?.enabled)return;HE(String(Y.custom_css??""));const t=gp();if(!(t instanceof HTMLTextAreaElement)||!t.isConnected){dr("target removed",{apply:!0,save:!0}),ys(e),pi(e);return}if(e.source===t&&e.wrapper?.isConnected){jE(e,t,e.wrapper),e.colorSchemeDirty&&bp(e,t,e.wrapper),e.editorThemeSyncDeferred?(cl(e,{force:!0}),e.editorThemeSyncDeferred=!1,e.themeSyncPending=!1):nH(e),pi(e);return}dr("target switch",{apply:!0,save:!0}),ys(e),UN(e,t),pi(e)}function gp(){const e=document.querySelector(ss);return e instanceof HTMLTextAreaElement&&e.isConnected?e:document.getElementById(Nt)}function UN(e,t){const n=document.createElement("div");n.id=R,n.className=HO,n.textContent="Loading CodeMirror...",jE(e,t,n),bp(e,t,n),t.classList.add(ep),t.parentElement?.classList.add(us),hp(t)||t.closest("#UI-Customization")?.classList.add(tp),t.insertAdjacentElement("afterend",n),e.source=t,e.wrapper=n,e.dirty=!1,yp(e);const r=()=>{setTimeout(()=>{e.dirty&&e.wrapper&&!e.wrapper.contains(document.activeElement)&&dr("blur",{apply:!0,save:!0})},0)};n.addEventListener("focusout",r),e.listeners.push({target:n,type:"focusout",handler:r,options:void 0});const o={};e.loadingToken=o,il().then(a=>{!e.enabled||e.source!==t||e.wrapper!==n||e.loadingToken!==o||!n.isConnected||QN(e,t,n,a)}).catch(a=>{e.enabled&&e.source===t&&e.wrapper===n&&e.loadingToken===o&&(e.enabled=!1,ys(e),YE())})}function bp(e,t,n){const r=WN(t);return e.colorScheme=r,e.colorSchemeDirty=!1,n.classList.toggle(ne,r==="dark"),n.classList.toggle(oe,r!=="dark"),n.dataset.colorScheme=r,r}function jE(e,t,n){n.classList.toggle(li,hp(t))}function hp(e){return e instanceof HTMLTextAreaElement&&e.matches(ss)}function _p(){const e=document.getElementById(Nt);return e instanceof HTMLTextAreaElement?e:null}function WN(e){const t=KN(e);return YN(t)<FO?"dark":"light"}function KN(e){const t=[];for(let r=e;r instanceof Element;r=r.parentElement)t.push(r);let n={r:255,g:255,b:255,a:1};for(const r of t.reverse()){const o=jN(getComputedStyle(r).backgroundColor);o?.a>0&&(n=qN(o,n))}return n}function jN(e){if(!e||e==="transparent")return null;const t=e.match(/^rgba?\((.+)\)$/i);if(!t)return null;const n=t[1].split(",").map(a=>a.trim()).filter(Boolean);if(n.length<3)return null;const r=a=>a.endsWith("%")?Math.max(0,Math.min(255,Number.parseFloat(a)/100*255)):Math.max(0,Math.min(255,Number.parseFloat(a))),o=n.length>=4?Number.parseFloat(n[3]):1;return{r:r(n[0]),g:r(n[1]),b:r(n[2]),a:Number.isFinite(o)?Math.max(0,Math.min(1,o)):1}}function qN(e,t){const n=e.a+t.a*(1-e.a);return n<=0?{r:255,g:255,b:255,a:1}:{r:(e.r*e.a+t.r*t.a*(1-e.a))/n,g:(e.g*e.a+t.g*t.a*(1-e.a))/n,b:(e.b*e.a+t.b*t.a*(1-e.a))/n,a:n}}function YN(e){const t=n=>{const r=n/255;return r<=.03928?r/12.92:((r+.055)/1.055)**2.4};return .2126*t(e.r)+.7152*t(e.g)+.0722*t(e.b)}function QN(e,t,n,r){const{EditorState:o,EditorView:a,keymap:i,defaultKeymap:s=[],history:l,historyKeymap:c=[],css:u,defaultHighlightStyle:p,HighlightStyle:b,syntaxHighlighting:v,classHighlighter:y,tags:k,oneDarkHighlightStyle:P}=r,E=t.value.length<=Jd,K=bp(e,t,n),X=XN({colorScheme:K,defaultHighlightStyle:p,HighlightStyle:b,syntaxHighlighting:v,classHighlighter:y,tags:k,oneDarkHighlightStyle:P}),B=[a.lineWrapping,...typeof u=="function"?[u()]:[],...X?[X]:[],a.updateListener.of(V=>{if(V.docChanged){if(e.syncingFromSource)return;e.dirty=!0,Ep(e,"editor doc change")}}),a.theme({"&":{backgroundColor:"var(--SmartThemeBlurTintColor)",border:"1px solid var(--SmartThemeBorderColor)",borderRadius:"4px",boxSizing:"border-box",color:"var(--SmartThemeBodyColor)",font:"inherit",maxWidth:"100%",minHeight:"180px",minWidth:"0",overflow:"hidden",textShadow:"none",textAlign:"left",width:"100%"},"&.cm-focused":{outline:"none"},".cm-scroller":{fontFamily:"var(--monoFontFamily, monospace)",fontSize:"0.95em",lineHeight:"1.35",maxWidth:"100%",maxHeight:"55vh",minHeight:"180px",minWidth:"0",overflow:"auto",overflowAnchor:"none",overscrollBehavior:"auto",touchAction:"pan-y",WebkitOverflowScrolling:"touch"},".cm-content":{caretColor:"var(--SmartThemeBodyColor)",minWidth:"0",padding:"8px",textShadow:"none",textAlign:"left",minHeight:"180px"},".cm-line":{padding:"0",textAlign:"left"}},{dark:K==="dark"})];E&&typeof l=="function"&&B.push(l()),typeof i?.of=="function"&&B.push(i.of(E?[...s,...c]:s)),a.contentAttributes?.of&&B.push(a.contentAttributes.of({autocomplete:"off",autocapitalize:"off",autocorrect:"off",spellcheck:"false","aria-label":"自定义 CSS"})),n.textContent="",e.view=new a({state:o.create({doc:t.value||"",extensions:B}),parent:n}),yp(e)}function XN({colorScheme:e,defaultHighlightStyle:t,HighlightStyle:n,syntaxHighlighting:r,classHighlighter:o,tags:a,oneDarkHighlightStyle:i}){if(typeof r!="function")return null;if(o)return r(o,{fallback:!0});if(e==="dark"&&i)return r(i,{fallback:!0});if(t)return r(t,{fallback:!0});if(typeof n!="function"||!a)return null;const s=[],l=(u,p)=>{if(Array.isArray(u)){const b=u.filter(Boolean);b.length&&s.push({tag:b,...p})}else u&&s.push({tag:u,...p})},c=(u,p)=>typeof u=="function"&&p?u(p):null;return l(a.meta,{color:"#404740"}),l(a.link,{textDecoration:"underline"}),l(a.heading,{textDecoration:"underline",fontWeight:"bold"}),l(a.emphasis,{fontStyle:"italic"}),l(a.strong,{fontWeight:"bold"}),l(a.strikethrough,{textDecoration:"line-through"}),l(a.keyword,{color:"#708"}),l([a.atom,a.bool,a.url,a.contentSeparator,a.labelName],{color:"#219"}),l([a.literal,a.inserted],{color:"#164"}),l([a.string,a.deleted],{color:"#a11"}),l([a.regexp,a.escape,c(a.special,a.string)],{color:"#e40"}),l(c(a.definition,a.variableName),{color:"#00f"}),l(c(a.local,a.variableName),{color:"#30a"}),l([a.typeName,a.namespace],{color:"#085"}),l(a.className,{color:"#167"}),l([c(a.special,a.variableName),a.macroName],{color:"#256"}),l(c(a.definition,a.propertyName),{color:"#00c"}),l(a.comment,{color:"#940"}),l(a.invalid,{color:"#f00"}),r(n.define(s),{fallback:!0})}function ys(e){if(!(!e.source&&!e.wrapper&&!e.view)){for(const t of e.listeners||[])t.target.removeEventListener(t.type,t.handler,t.options);e.listeners=[],e.view?.destroy?.(),e.source?.classList.remove(ep),e.source?.parentElement?.classList.remove(us),e.source?.closest("#UI-Customization")?.classList.remove(tp),e.wrapper?.remove(),e.source=null,e.wrapper=null,e.view=null,e.dirty=!1,e.syncingFromSource=!1,e.loadingToken=null,e.themeSyncPending=!1,e.editorThemeSyncDeferred=!1,e.themeSyncTimers=[],e.themeSyncFrames=[]}}function Ur(e){return e.view?.state?.doc?.toString?.()??""}function qE(e){return e.view?.scrollDOM||e.wrapper?.querySelector?.(".cm-scroller")||null}function JN(e=h[Qe]){return!e?.enabled||!(e.source instanceof HTMLTextAreaElement)||!e.view?!1:Ep(e,"external read")}function ZN(e,t){if(!e?.enabled||!e.view)return;const n=qE(e);if(!(n instanceof HTMLElement))return;const o=t.querySelector("i")?.classList.contains("fa-arrow-up")?0:n.scrollHeight,a=o-n.scrollTop;Math.abs(a)>400&&(n.scrollTop=a>0?o-400:o+400),n.scrollTo({top:o,behavior:"smooth"})}function eH(e,t){if(!e?.enabled||!e.view)return;const n=Number.parseInt(t.dataset.line||"",10);if(!Number.isFinite(n)||n<0)return;const r=String(document.getElementById("native-css-search-new")?.value||"");setTimeout(()=>{tH(e,n,r)},0)}function tH(e,t,n){if(!e?.enabled||!e.view)return!1;const r=e.view.state.doc,o=Math.min(Math.max(t+1,1),r.lines),a=r.line(o),i=n?a.text.toLowerCase().indexOf(n.toLowerCase()):-1,s=a.from+Math.max(i,0),l=i>=0?Math.min(s+n.length,a.to):s;return e.view.focus(),e.view.dispatch({selection:{anchor:s,head:l},scrollIntoView:!0}),!0}function yp(e){if(!(e?.wrapper instanceof HTMLElement))return;const t=document.getElementById("vce-custom-css-height-inject")?"60dvh":"",n=e.wrapper.querySelector(".cm-editor"),r=qE(e);for(const o of[e.wrapper,n,r])o instanceof HTMLElement&&(o.style.minHeight=t);r instanceof HTMLElement&&(r.style.maxHeight=t)}function Ep(e,t="CodeMirror sync to source"){if(!(e.source instanceof HTMLTextAreaElement)||!e.view)return!1;const n=Ur(e),r=e.source.value!==n;let o=!1;const a=Y.custom_css!==n;if(r&&(e.source.value=n),hp(e.source)){const i=_p();o=!!(i&&i.value!==n),o&&(i.value=n)}return a&&(Y.custom_css=n),r||o||a}function ag(e){const t=h[Qe];return!t?.enabled||t.source!==e||!t.view?!1:cl(t,{force:!0})}function nH(e){return cl(e,{force:!1})}function cl(e,{force:t=!1}={}){if(!t&&e.dirty||!(e.source instanceof HTMLTextAreaElement)||!e.view)return;const n=e.source.value||"";if(Ur(e)!==n){e.syncingFromSource=!0;try{e.view.dispatch({changes:{from:0,to:e.view.state.doc.length,insert:n}}),e.dirty=!1}finally{e.syncingFromSource=!1}return!0}return e.dirty=!1,!1}function dr(e,{apply:t=!1,save:n=!0}={}){const r=h[Qe];if(!r?.enabled||r.flushing||!(r.source instanceof HTMLTextAreaElement)||!r.view)return!1;r.flushing=!0;try{if(r.themeSyncPending)return ao(`${e} while theme sync is pending`,{forceEditor:!0,refreshTarget:!1,clearThemePending:!1}),!1;if(rH(r))return ao(`${e} clean external state before flush`,{forceEditor:!0,refreshTarget:!1,clearThemePending:!1}),t&&ca(e),!1;const a=Ep(r,e)||r.dirty;return r.dirty=!1,a&&n&&Yt(),t&&ca(e),a}finally{r.flushing=!1}}function rH(e){if(e?.dirty||!(e?.source instanceof HTMLTextAreaElement)||!e.view)return null;const t=Ur(e),n=String(e.source.value??""),r=String(Y.custom_css??""),o=String(document.getElementById(ls)?.textContent??""),a=n===r,i=o===r,s=t===n,l=t===r;return s&&l?null:!l&&(a||i)?{doc:t,source:n,powerUser:r,style:o,sourceMatchesPowerUser:a,styleMatchesPowerUser:i}:null}function oH(){let e=document.getElementById(Fc);e||(e=document.createElement("style"),e.id=Fc,document.head.append(e)),e.textContent=`
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
#UI-Customization.${tp} {
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

.${ep} {
    display: none !important;
}
`}function YE(){document.getElementById(Fc)?.remove()}const Wr=new Map;function en(){const e=globalThis[pO];return e&&typeof e=="object"?e:null}function aH(){return(!globalThis[ja]||typeof globalThis[ja]!="object")&&(globalThis[ja]={installed:!1,handler:null,pending:null,replaying:!1,currentThemeName:"",loadingToken:null,loadingHost:null,loadingOverlay:null}),globalThis[ja]}async function iH(e){const t=await fetch(fO,{method:"POST",cache:"no-store",headers:me(),body:JSON.stringify({name:e})}),n=await t.json().catch(()=>null);if(!t.ok){const o=new Error(n?.message||`Theme request failed: ${t.status}`);throw o.status=t.status,o.payload=n,o}const r=n?.data;if(!r||typeof r!="object"||Array.isArray(r))throw new Error("Theme response payload is invalid");return r}async function sH(e){const t=String(e||"").trim();if(t&&Wr.has(t))return Wr.get(t);const n=await iH(e);return t&&Wr.set(t,n),n}function lH(e){const t=String(e||"").trim();if(!t||Wr.has(t))return!1;const n={name:t};for(const r of Zy)Y[r]!==void 0&&(n[r]=Y[r]);return Wr.set(t,n),!0}function ig(){for(const{key:e,selector:t,variable:n,metaTheme:r}of BO){const o=Y[e];if(o!==void 0){if(t&&$(t).attr("color",o),n&&document.documentElement.style.setProperty(n,String(o)),e==="main_text_color"){const a=String(o).match(/\(([^)]+)\)/),i=a?a[1].split(",").map(s=>s.trim()):[];i.length>=4&&(document.documentElement.style.setProperty("--SmartThemeCheckboxBgColorR",i[0]),document.documentElement.style.setProperty("--SmartThemeCheckboxBgColorG",i[1]),document.documentElement.style.setProperty("--SmartThemeCheckboxBgColorB",i[2]),document.documentElement.style.setProperty("--SmartThemeCheckboxBgColorA",i[3]))}r&&document.querySelector("meta[name=theme-color]")?.setAttribute("content",String(o))}}}function sg(){$("#chat_display").val(Y.chat_display),$(`#chat_display option[value=${Y.chat_display}]`).prop("selected",!0),$("#toastr_position").val(Y.toastr_position),$(`#toastr_position option[value="${Y.toastr_position}"]`).prop("selected",!0),$("#media_display").val(Y.media_display)}function cH(e,t,n=t){const r=document.getElementById(e);if(!(r instanceof HTMLSelectElement)||!t)return null;const o=Array.from(r.options).find(i=>i.value===t);if(o)return o;const a=document.createElement("option");return a.value=t,a.textContent=n,r.append(a),a}function uH(e){const t=document.getElementById(e);if(!(t instanceof HTMLSelectElement))return;const r=(t.options[t.selectedIndex]||null)?.textContent||t.value,o=$(`#${e}`);if(typeof o.select2=="function"&&(o.data("select2")||o.hasClass("select2-hidden-accessible"))){o.trigger("change.select2");const a=o.data("select2")?.$container?.find?.(".select2-selection__rendered");a?.length&&r&&a.text(r).attr("title",r)}}function mi(e,t,n=t){const r=document.getElementById(e),o=cH(e,t,n);!(r instanceof HTMLSelectElement)||!o||(o.selected=!0,r.value=t,$(`#${e}`).val(t),uH(e))}function dH(){let e=document.getElementById(xf);e||(e=document.createElement("style"),e.id=xf,document.head.append(e)),e.textContent=`
.${qd} {
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
`}function pH(e){if(e instanceof Element){const t=e.closest("#UI-presets-block, #UI-Theme-Block");if(t instanceof HTMLElement)return t}return document.body}function mH(e,t){const n={},r=pH(t);if(!(r instanceof HTMLElement))return e.loadingToken=n,n;dH(),QE(e);const o=r===document.body,a=document.createElement("div");return a.className=o?`${Nc} ${Yy}`:Nc,a.setAttribute("role","status"),a.setAttribute("aria-live","polite"),a.innerHTML=`<span class="${Hc}" aria-hidden="true"></span><span>正在加载美化主题...</span>`,o||r.classList.add(qd),r.append(a),e.loadingToken=n,e.loadingHost=r,e.loadingOverlay=a,n}function QE(e,t=null){t&&e.loadingToken!==t||(e.loadingOverlay?.remove(),e.loadingHost instanceof HTMLElement&&e.loadingHost!==document.body&&e.loadingHost.classList.remove(qd),e.loadingToken=null,e.loadingHost=null,e.loadingOverlay=null)}function lg(e,t){e instanceof HTMLSelectElement&&(e.disabled=t);const n=$("#themes");n.prop("disabled",t),typeof n.select2=="function"&&(n.data("select2")||n.hasClass("select2-hidden-accessible"))&&n.trigger("change.select2")}function fH(){return ao("theme change",{forceEditor:!0,refreshTarget:!0,clearThemePending:!0})}function XE(){Sp();const e=h[Qe];if(!e?.enabled){ao("theme change without CodeMirror",{forceEditor:!1,refreshTarget:!1,clearThemePending:!1});return}const t=(e?.themeSyncToken??0)+1;e.themeSyncPending=!0,e.themeSyncToken=t,e.themeSyncTimers||=[],e.themeSyncFrames||=[],Zc(e);const n=(r="settle")=>{if(!(e?.enabled&&e.themeSyncToken!==t))try{fH()&&Zc(e)}catch{}};if(typeof requestAnimationFrame=="function"){const r=requestAnimationFrame(()=>n("animation frame"));e.themeSyncFrames.push(r)}else gH(e,t,()=>n("microtask"));for(const r of zO){const o=setTimeout(()=>n(`timeout ${r}ms`),r);e.themeSyncTimers.push(o)}}function gH(e,t,n){const r=()=>{e?.enabled&&e.themeSyncToken!==t||n()};if(typeof queueMicrotask=="function")queueMicrotask(r);else{const o=setTimeout(r,0);e?.enabled&&(e.themeSyncTimers||=[],e.themeSyncTimers.push(o))}}function JE(){return g.customCssShadowPropertyEnabled?{bogusFolders:Y.bogus_folders,zoomedAvatarMagnification:Y.zoomed_avatar_magnification}:null}function ZE(e){if(!e||Y.bogus_folders!==e.bogusFolders||Y.zoomed_avatar_magnification!==e.zoomedAvatarMagnification)return;const t=Q.printCharactersDebounced;typeof t=="function"&&cv(t)}function bH(){return h.themeApplyReflowGuard||(h.themeApplyReflowGuard={installed:!1,windowUntil:0,cache:null,originalGetters:null,originalScrollTopSetter:null,pendingScrollTop:null,scrollTopFlushFrame:0,endTimer:null}),h.themeApplyReflowGuard}function Sp(){if(!g.customCssShadowPropertyEnabled)return;const e=bH(),t=Date.now()<e.windowUntil&&e.cache;e.windowUntil=Date.now()+VO,!t&&(e.cache=new Map,_H(e),hH(e))}function hH(e){const t=document.getElementById("chat");if(!(!(t instanceof HTMLElement)||!e.cache))for(const n of aE){const r=e.originalGetters?.[n];typeof r=="function"&&e.cache.set(n,{value:r.call(t),at:Date.now()})}}function _H(e){if(e.installed)return;const t=globalThis.Element?.prototype;if(t){for(const n of aE){let a=function(){if(this instanceof HTMLElement&&this.id==="chat"&&Date.now()<e.windowUntil&&e.cache){const i=e.cache.get(n);if(i)return i.value;const s=o.call(this);return e.cache.set(n,{value:s,at:Date.now()}),s}return o.call(this)};const r=Object.getOwnPropertyDescriptor(t,n);if(!r?.get||r.get[ds])continue;const o=r.get;e.originalGetters||={},e.originalGetters[n]=o,a[ds]=!0,a.__baiBaiToolkitOriginalMetricGetter=o,Object.defineProperty(t,n,{...r,get:a})}yH(e,t),e.installed=!0}}function yH(e,t){const n=Object.getOwnPropertyDescriptor(t,"scrollTop");if(!n?.set||n.set[ds])return;const r=n.set;function o(a){if(this instanceof HTMLElement&&this.id==="chat"&&Date.now()<e.windowUntil){e.pendingScrollTop={element:this,value:a},!e.scrollTopFlushFrame&&typeof requestAnimationFrame=="function"&&(e.scrollTopFlushFrame=requestAnimationFrame(()=>{e.scrollTopFlushFrame=0;const i=e.pendingScrollTop;e.pendingScrollTop=null,i?.element?.isConnected&&r.call(i.element,i.value)}));return}return r.call(this,a)}o[ds]=!0,o.__baiBaiToolkitOriginalScrollTopSetter=r,Object.defineProperty(t,"scrollTop",{...n,set:o})}function Zc(e=h[Qe]){if(e){for(const t of e.themeSyncTimers||[])clearTimeout(t);if(typeof cancelAnimationFrame=="function")for(const t of e.themeSyncFrames||[])cancelAnimationFrame(t);e.themeSyncTimers=[],e.themeSyncFrames=[]}}function EH(){try{const e=localStorage.getItem(gO);if(!e)return null;const t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)?t:null}catch(e){return console.debug(`${T} Failed to read Theme Manager background bindings`,e),null}}function SH(e){return!e||!document.querySelector(Yd)?!1:(document.querySelectorAll(bO).forEach(t=>{t instanceof HTMLElement&&t.classList.toggle("active",t.dataset.value===e)}),!0)}function vH(e){const t=EH(),n=typeof t?.[e]=="string"?t[e]:"";if(!n)return!1;const r=Array.from(document.querySelectorAll(hO)).find(o=>o instanceof HTMLElement&&o.getAttribute("bgfile")===n);return r instanceof HTMLElement?(r.click(),!0):(console.debug(`${T} Theme Manager bound background was not found: ${n}`),!1)}function TH(e){!e||!document.querySelector(Yd)||(SH(e),vH(e))}function xH(e,t){const n=typeof e?.name=="string"&&e.name?e.name:t;if(!n)throw new Error("Theme name is missing");Sp();const r=JE();Wr.set(n,{...e,name:n});const o=globalThis.baibaokuApplyNativeTheme,a=globalThis.baibaokuHydrateTheme;let i="unknown";h.customCssThemeApplyDepth=(h.customCssThemeApplyDepth||0)+1;try{if(typeof o=="function"&&typeof a=="function")i="native bridge",a({...e,name:n}),Y.theme=n,mi("themes",n),o(n),Yt();else{i="fallback";const s=Y.chat_display,l=Y.toastr_position;Y.theme=n;for(const c of Zy)e[c]!==void 0&&(Y[c]=e[c]);mi("themes",n),ig(),sg(),mv(),mi("themes",n),ig(),sg(),s!==Y.chat_display&&$("#chat_display").trigger("change"),l!==Y.toastr_position&&$("#toastr_position").trigger("change"),Yt()}}catch(s){throw s}finally{h.customCssThemeApplyDepth=Math.max(0,(h.customCssThemeApplyDepth||1)-1)}ZE(r),XE(),TH(n)}function wH(){const e=aH();e.installed||typeof document>"u"||(e.handler=function(n){const r=n?.target;if(!(r instanceof HTMLSelectElement)||r.id!=="themes"||e.replaying)return;const o=String(r.value||"");if(!o)return;if(g.baibaokuSettingsAccelerationEnabled===!1||g.baibaokuLazyThemeLoadingEnabled===!1){e.currentThemeName=o;return}const a=en();if(!a?.installed){e.currentThemeName=o;return}n.preventDefault(),n.stopImmediatePropagation();const i=e.currentThemeName||String(Y?.theme||"");i&&i!==o&&lH(i);const s=mH(e,r);lg(r,!0),e.pending=sH(o).then(l=>{xH(l,o),e.currentThemeName=o}).catch(l=>{l?.status===404&&typeof a.clearSettingsGetCache=="function"&&a.clearSettingsGetCache("theme-not-found"),i&&mi("themes",i),globalThis.toastr?.error&&globalThis.toastr.error(`美化主题加载失败：${l?.message||String(l)}`,"柏宝库")}).finally(()=>{e.loadingToken===s&&(lg(r,!1),e.pending=null),QE(e,s)})},document.addEventListener("change",e.handler,!0),e.installed=!0)}function CH(){eS().catch(e=>console.debug(`${T} Silent update failed`,e))}async function eS(){return h.silentUpdateResult?h.silentUpdateResult:(h.silentUpdatePromise||(h.silentUpdatePromise=kH().then(e=>(h.silentUpdateResult=e,e)).catch(e=>{throw h.silentUpdateResult={error:e},e}).finally(()=>{h.silentUpdatePromise=null})),h.silentUpdatePromise)}async function kH(){try{const e=Ky,t=`https://raw.githubusercontent.com/baibai-git/SillyTavern-Mobile-Resize-Guard/main/manifest.json?t=${Date.now()}`,n=await fetch(t,{cache:"no-store"});if(!n.ok)throw new Error(`Failed to fetch remote manifest: ${n.statusText}`);const o=(await n.json()).version,a=vp(o,e);return tS(a),a&&rS(),{isUpToDate:!a}}catch(e){throw console.error(`${T} Update check failed:`,e),e}}function vp(e,t){if(!e||!t)return!1;const n=e.split(".").map(Number),r=t.split(".").map(Number);for(let o=0;o<Math.max(n.length,r.length);o++){const a=n[o]||0,i=r[o]||0;if(a>i)return!0;if(a<i)return!1}return!1}async function AH(){return PH("/api/extensions/update")}async function PH(e){const t=BH();return!t||t==="system"?new Response("Extension is not installed as an updateable third-party extension.",{status:404}):t==="global"&&!vv()?new Response("Forbidden: No permission to update global extensions.",{status:403}):fetch(e,{method:"POST",headers:me(),body:JSON.stringify({extensionName:dE,global:t==="global"})})}function tS(e){const t=!!e;$(".bai_bai_toolkit_update_badge").toggle(t),$(".bai_bai_toolkit_update_button").toggle(t)}async function nS(e=null){return h.updatePromptPromise||(h.updatePromptPromise=LH(e).finally(()=>{h.updatePromptPromise=null})),h.updatePromptPromise}function rS(){g.updatePromptOnAvailableEnabled&&jQuery(()=>{g.updatePromptOnAvailableEnabled&&nS().catch(e=>console.debug(`${T} Update prompt failed`,e))})}async function LH(e){const t=e?.length?e:null;let n=!!t;t&&t.addClass("disabled");try{return await IH()?(MH(t),await RH(),n=!1,!0):!1}catch(r){return console.error(`${T} Update failed:`,r),toastr.error(`更新失败: ${r.message}`),!1}finally{n&&OH(t)}}async function IH(){return await fe(`
        <div class="bai_bai_toolkit_update_prompt">
            <h3>柏宝箱发现新版本</h3>
            <p>检测到插件有可用更新。要现在更新吗？</p>
            <p>更新完成后，SillyTavern 会自动刷新页面。</p>
        </div>
    `,ge.CONFIRM,"",{okButton:"更新",cancelButton:"取消"})===Kn.AFFIRMATIVE}async function RH(){const e=await AH();if(!e.ok)throw new Error(await DH(e));tS(!1),toastr.success(d`Extension updated successfully. Reloading...`),setTimeout(()=>location.reload(),1e3)}function MH(e){e?.length&&(e.addClass("disabled"),e.find("span").text("更新中..."),e.find("i").removeClass("fa-download").addClass("fa-spinner fa-spin"))}function OH(e){e?.length&&(e.removeClass("disabled"),e.find("span").text("更新"),e.find("i").removeClass("fa-spinner fa-spin").addClass("fa-download"))}function BH(e=dE){const t=Object.keys(Vp).find(n=>n===e||n.startsWith("third-party")&&n.endsWith(e));return t?Vp[t]:null}async function DH(e){return await e.text()||e.statusText||`HTTP ${e.status}`}async function $H(e){const t=e.find(".bai_bai_toolkit_current_version"),n=e.find(".bai_bai_toolkit_update_button"),r=e.find(".bai_bai_toolkit_update_status"),o=e.find(".bai_bai_toolkit_update_badge");t.text(Ky),r.text("检查更新中..."),h.silentUpdateResult?i(h.silentUpdateResult):a();async function a(){try{i(await eS())}catch{r.text("检查更新出错")}}function i(u){if(u?.error){s();return}u?.isUpToDate===!1?l():c()}function s(){n.hide(),o.hide(),r.text("检查更新出错")}function l(){r.text(""),n.show(),o.show()}function c(){n.hide(),o.hide(),r.text("已是最新版本"),setTimeout(()=>r.text(""),3e3)}n.on("click",async function(){$(this).hasClass("disabled")||await nS($(this))})}function NH(e){e.find("#bai_bai_toolkit_baibaoku_install_help").off("click.baiBaiToolkitBaibaokuInstallHelp").on("click.baiBaiToolkitBaibaokuInstallHelp",()=>{zH()}),e.find("#bai_bai_toolkit_baibaoku_refresh_status").off("click.baiBaiToolkitBaibaokuStatus").on("click.baiBaiToolkitBaibaokuStatus",()=>{cg(e,{force:!0})}),cg(e)}function eu(){return(!h.baibaokuPanel||typeof h.baibaokuPanel!="object")&&(h.baibaokuPanel={cache:null,pending:null}),h.baibaokuPanel}function It(e){const t=en(),n=e.find("#bai_bai_toolkit_baibaoku_bridge_status"),r=e.find("#bai_bai_toolkit_preset_auto_backup_enabled"),o=t?.installed?`已注入${t.version?` v${t.version}`:""}`:"未注入";_t(n,o,!!t?.installed),e.find("#bai_bai_toolkit_baibaoku_settings_acceleration_enabled").prop("checked",g.baibaokuSettingsAccelerationEnabled!==!1),e.find("#bai_bai_toolkit_baibaoku_lazy_theme_loading_enabled").prop("checked",g.baibaokuSettingsAccelerationEnabled!==!1&&g.baibaokuLazyThemeLoadingEnabled!==!1),e.find("#bai_bai_toolkit_extension_manifest_bundle_enabled").prop("checked",g.extensionManifestBundleEnabled!==!1),e.find("#bai_bai_toolkit_fast_character_list_enabled").prop("checked",g.fastCharacterListEnabled!==!1),e.find("#bai_bai_toolkit_recent_chat_list_acceleration_enabled").prop("checked",g.recentChatListAccelerationEnabled!==!1),e.find("#bai_bai_toolkit_progressive_chat_loading_enabled").prop("checked",!1).prop("disabled",!0),e.find("#bai_bai_toolkit_save_generate_enabled").prop("checked",g.saveGenerateEnabled===!0),r.prop("checked",g.presetAutoBackupEnabled!==!1),e.find("#bai_bai_toolkit_tokenizer_bulk_count_enabled").prop("checked",g.tokenizerBulkCountEnabled!==!1),e.find("#bai_bai_toolkit_chat_keyboard_scan_reduction_enabled").prop("checked",g.chatKeyboardScanReductionEnabled!==!1),tu(e,eu().cache),nu(e,eu().cache?.status)}function tu(e,t){if(!t)return!1;const n=e.find("#bai_bai_toolkit_baibaoku_server_status"),r=e.find("#bai_bai_toolkit_baibaoku_driver_status"),o=t.status,a=o?.driver;return o?(_t(n,`已连接${o?.version?` v${o.version}`:""}`,!0),_t(r,a?.available?`可用${a.package?` (${a.package})`:""}`:"不可用",!!a?.available),!0):t.offline?(_t(n,"未安装",!1),_t(r,"未知",!1),!0):!1}function nu(e,t){const n=e.find("#bai_bai_toolkit_preset_auto_backup_enabled"),r=n.closest("label"),o=HH(t?.version,Tf);vR(o),r.data("presetAutoBackupDefaultTitle")||r.data("presetAutoBackupDefaultTitle",r.attr("title")||""),n.prop("disabled",!o),r.toggleClass("disabled",!o).css("opacity",o?"":"0.55").attr("title",o?r.data("presetAutoBackupDefaultTitle"):`预设自动备份需要柏宝库 v${Tf} 或更高版本`)}function HH(e,t){return e=String(e||"").trim(),t=String(t||"").trim(),!e||!t?!1:!vp(t,e)}async function cg(e,{force:t=!1}={}){const n=eu(),r=n.cache,o=r&&Date.now()-Number(r.updatedAt||0)<EO;let a=!1;if(It(e),!t&&o&&tu(e,r))return;if(!t&&n.pending){await n.pending.catch(()=>null),tu(e,n.cache);return}const i=e.find("#bai_bai_toolkit_baibaoku_server_status"),s=e.find("#bai_bai_toolkit_baibaoku_driver_status"),l=e.find("#bai_bai_toolkit_baibaoku_bridge_status"),c=e.find("#bai_bai_toolkit_baibaoku_settings_acceleration_enabled"),u=e.find("#bai_bai_toolkit_baibaoku_lazy_theme_loading_enabled"),p=e.find("#bai_bai_toolkit_extension_manifest_bundle_enabled"),b=e.find("#bai_bai_toolkit_fast_character_list_enabled"),v=e.find("#bai_bai_toolkit_recent_chat_list_acceleration_enabled"),y=e.find("#bai_bai_toolkit_progressive_chat_loading_enabled"),k=e.find("#bai_bai_toolkit_tokenizer_bulk_count_enabled"),P=e.find("#bai_bai_toolkit_chat_keyboard_scan_reduction_enabled"),E=en();_t(l,E?.installed?`已注入${E.version?` v${E.version}`:""}`:"未注入",!!E?.installed);const K=typeof E?.isSettingsAccelerationEnabled=="function"?E.isSettingsAccelerationEnabled():null;typeof K=="boolean"&&(g.baibaokuSettingsAccelerationEnabled=K,c.prop("checked",K));const X=typeof E?.isLazyThemeLoadingEnabled=="function"?E.isLazyThemeLoadingEnabled():null;if(typeof X=="boolean"){const te=g.baibaokuSettingsAccelerationEnabled!==!1&&X;g.baibaokuLazyThemeLoadingEnabled=te,u.prop("checked",te)}const B=typeof E?.isExtensionManifestBundleEnabled=="function"?E.isExtensionManifestBundleEnabled():null;typeof B=="boolean"&&(g.extensionManifestBundleEnabled=B,p.prop("checked",B));const V=typeof E?.isCharacterListAccelerationEnabled=="function"?E.isCharacterListAccelerationEnabled():null;typeof V=="boolean"&&(g.fastCharacterListEnabled=V,b.prop("checked",V));const ee=typeof E?.isRecentChatListAccelerationEnabled=="function"?E.isRecentChatListAccelerationEnabled():null;typeof ee=="boolean"&&(g.recentChatListAccelerationEnabled=ee,v.prop("checked",ee));const I=typeof E?.isTokenizerBulkCountEnabled=="function"?E.isTokenizerBulkCountEnabled():null;typeof I=="boolean"&&(g.tokenizerBulkCountEnabled=I,k.prop("checked",I));const Z=typeof E?.isChatKeyboardScanReductionEnabled=="function"?E.isChatKeyboardScanReductionEnabled():null;typeof Z=="boolean"&&(g.chatKeyboardScanReductionEnabled=Z,P.prop("checked",Z)),_t(i,"检测中",null),_t(s,"检测中",null);try{const te=await GH();fs(globalThis[Uo],!0);const ve=te?.driver;n.cache={...n.cache||{},status:te,offline:!1,updatedAt:Date.now()},a=!0,_t(i,`已连接${te?.version?` v${te.version}`:""}`,!0),_t(s,ve?.available?`可用${ve.package?` (${ve.package})`:""}`:"不可用",!!ve?.available),nu(e,te),FH(te);try{const O=await VH(),le=O.settingsAccelerationEnabled!==!1,Je=le&&O.lazyThemeLoadingEnabled!==!1,ie=O.extensionManifestBundleEnabled!==!1,Ze=O.characterListAccelerationEnabled!==!1,Fe=O.recentChatListAccelerationEnabled!==!1,tn=!1,Gt=O.tokenizerBulkCountEnabled!==!1,xt=O.chatKeyboardScanReductionEnabled!==!1;n.cache={...n.cache||{},config:O,offline:!1,updatedAt:Date.now()},g.baibaokuSettingsAccelerationEnabled=le,g.baibaokuLazyThemeLoadingEnabled=Je,g.extensionManifestBundleEnabled=ie,g.fastCharacterListEnabled=Ze,g.recentChatListAccelerationEnabled=Fe,g.progressiveChatLoadingEnabled=tn,g.tokenizerBulkCountEnabled=Gt,g.chatKeyboardScanReductionEnabled=xt,c.prop("checked",le),u.prop("checked",Je),p.prop("checked",ie),b.prop("checked",Ze),v.prop("checked",Fe),y.prop("checked",!1).prop("disabled",!0),k.prop("checked",Gt),P.prop("checked",xt),jo(),typeof E?.setSettingsAccelerationEnabled=="function"?E.setSettingsAccelerationEnabled(le):E&&(E.settingsAccelerationEnabled=le),typeof E?.setLazyThemeLoadingEnabled=="function"?E.setLazyThemeLoadingEnabled(Je):E&&(E.lazyThemeLoadingEnabled=Je,!Je&&typeof E.clearSettingsGetCache=="function"&&E.clearSettingsGetCache("lazy-theme-loading-disabled")),typeof E?.setCharacterListAccelerationEnabled=="function"?E.setCharacterListAccelerationEnabled(Ze):E&&(E.characterListAccelerationEnabled=Ze),typeof E?.setExtensionManifestBundleEnabled=="function"?E.setExtensionManifestBundleEnabled(ie):E&&(E.extensionManifestBundleEnabled=ie),typeof E?.setRecentChatListAccelerationEnabled=="function"?E.setRecentChatListAccelerationEnabled(Fe):E&&(E.recentChatListAccelerationEnabled=Fe),typeof E?.setTokenizerBulkCountEnabled=="function"?E.setTokenizerBulkCountEnabled(Gt):E&&(E.tokenizerBulkCountEnabled=Gt),typeof E?.setChatKeyboardScanReductionEnabled=="function"?E.setChatKeyboardScanReductionEnabled(xt):E&&(E.chatKeyboardScanReductionEnabled=xt)}catch(O){console.debug(`${T} Failed to read BaiBaoKu fast config`,O)}}catch{fs(globalThis[Uo],!1),_t(i,"未安装",!1),_t(s,"未知",!1),nu(e,null)}a||(n.cache={...n.cache||{},status:null,offline:!0,updatedAt:Date.now()})}async function GH(){const e=new AbortController,t=setTimeout(()=>e.abort(),yO);try{const n=await fetch(jy,{method:"GET",cache:"no-store",signal:e.signal}),r=await n.json().catch(()=>null);if(!n.ok||r?.ok!==!0)throw new Error(r?.error?.message||`HTTP ${n.status}`);return r.data}finally{clearTimeout(t)}}async function FH(e){const t=String(e?.version||"").trim();if(!t||!vp(vf,t))return;const n=`${t}->${vf}`;h.baibaokuBackendUpdatePromptShown===n||h.baibaokuBackendUpdatePromptPromise||(h.baibaokuBackendUpdatePromptShown=n,h.baibaokuBackendUpdatePromptPromise=fe(`
        <div class="bai_bai_toolkit_baibaoku_update_prompt">
            <h3>柏宝库需要更新！</h3>
            <p>当前版本存在部分BUG，请重启酒馆让柏宝库自动更新到最新版本，注意不是刷新网页，是重启酒馆后台</p>
        </div>
    `,ge.TEXT,"",{okButton:"知道了"}).catch(r=>{console.debug(`${T} Failed to show BaiBaoKu backend update prompt`,r)}).finally(()=>{h.baibaokuBackendUpdatePromptPromise=null}),await h.baibaokuBackendUpdatePromptPromise)}function zH(){fe("请看帖子标注内容",ge.TEXT,"",{okButton:"知道了"}).catch(e=>{console.debug(`${T} Failed to show BaiBaoKu install help prompt`,e)})}async function VH(){const e=await fetch(qy,{method:"GET",cache:"no-store"}),t=await e.json().catch(()=>null);if(!e.ok||t?.ok!==!0)throw new Error(t?.message||t?.error?.message||`HTTP ${e.status}`);return t.data||{}}async function zn(e){const t=new Headers(me());t.has("content-type")||t.set("content-type","application/json");const n=await fetch(qy,{method:"POST",headers:t,cache:"no-store",body:JSON.stringify(e||{})}),r=await n.json().catch(()=>null);if(!n.ok||r?.ok!==!0)throw new Error(r?.message||r?.error?.message||`HTTP ${n.status}`);return r.data||{}}function _t(e,t,n){e.text(t);const r=n===null?"":n?"var(--SmartThemeQuoteColor)":"#ff4d4f";e.each((o,a)=>{a?.style&&(r?a.style.setProperty("color",r,"important"):a.style.removeProperty("color"))})}async function UH(e){const t=!!e,n=g.baibaokuSettingsAccelerationEnabled!==!1,r=g.baibaokuLazyThemeLoadingEnabled!==!1;g.baibaokuSettingsAccelerationEnabled=t,t||(g.baibaokuLazyThemeLoadingEnabled=!1);const o=en();typeof o?.setSettingsAccelerationEnabled=="function"?o.setSettingsAccelerationEnabled(t):o&&(o.settingsAccelerationEnabled=t),t||(typeof o?.setLazyThemeLoadingEnabled=="function"?o.setLazyThemeLoadingEnabled(!1):o&&(o.lazyThemeLoadingEnabled=!1,typeof o.clearSettingsGetCache=="function"&&o.clearSettingsGetCache("settings-acceleration-disabled")));try{const a=await zn({settingsAccelerationEnabled:t,...t?{}:{lazyThemeLoadingEnabled:!1}}),i=a.settingsAccelerationEnabled!==!1,s=i&&a.lazyThemeLoadingEnabled!==!1;return g.baibaokuSettingsAccelerationEnabled=i,g.baibaokuLazyThemeLoadingEnabled=s,typeof o?.setSettingsAccelerationEnabled=="function"?o.setSettingsAccelerationEnabled(i):o&&(o.settingsAccelerationEnabled=i),typeof o?.setLazyThemeLoadingEnabled=="function"?o.setLazyThemeLoadingEnabled(s):o&&(o.lazyThemeLoadingEnabled=s,!s&&typeof o.clearSettingsGetCache=="function"&&o.clearSettingsGetCache("lazy-theme-loading-disabled")),a}catch(a){throw g.baibaokuSettingsAccelerationEnabled=n,g.baibaokuLazyThemeLoadingEnabled=r,typeof o?.setSettingsAccelerationEnabled=="function"?o.setSettingsAccelerationEnabled(n):o&&(o.settingsAccelerationEnabled=n),typeof o?.setLazyThemeLoadingEnabled=="function"?o.setLazyThemeLoadingEnabled(r):o&&(o.lazyThemeLoadingEnabled=r),a}}async function WH(e){const t=!!e,n=g.baibaokuLazyThemeLoadingEnabled!==!1,r=g.baibaokuSettingsAccelerationEnabled!==!1;g.baibaokuLazyThemeLoadingEnabled=t,t&&(g.baibaokuSettingsAccelerationEnabled=!0);const o=en();typeof o?.setLazyThemeLoadingEnabled=="function"?o.setLazyThemeLoadingEnabled(t):o&&(o.lazyThemeLoadingEnabled=t,!t&&typeof o.clearSettingsGetCache=="function"&&o.clearSettingsGetCache("lazy-theme-loading-disabled")),t&&(typeof o?.setSettingsAccelerationEnabled=="function"?o.setSettingsAccelerationEnabled(!0):o&&(o.settingsAccelerationEnabled=!0));try{const a=await zn({lazyThemeLoadingEnabled:t,...t?{settingsAccelerationEnabled:!0}:{}}),i=a.settingsAccelerationEnabled!==!1,s=i&&a.lazyThemeLoadingEnabled!==!1;return g.baibaokuLazyThemeLoadingEnabled=s,g.baibaokuSettingsAccelerationEnabled=i,typeof o?.setLazyThemeLoadingEnabled=="function"?o.setLazyThemeLoadingEnabled(s):o&&(o.lazyThemeLoadingEnabled=s,!s&&typeof o.clearSettingsGetCache=="function"&&o.clearSettingsGetCache("lazy-theme-loading-disabled")),typeof o?.setSettingsAccelerationEnabled=="function"?o.setSettingsAccelerationEnabled(i):o&&(o.settingsAccelerationEnabled=i),a}catch(a){throw g.baibaokuLazyThemeLoadingEnabled=n,g.baibaokuSettingsAccelerationEnabled=r,typeof o?.setLazyThemeLoadingEnabled=="function"?o.setLazyThemeLoadingEnabled(n):o&&(o.lazyThemeLoadingEnabled=n),typeof o?.setSettingsAccelerationEnabled=="function"?o.setSettingsAccelerationEnabled(r):o&&(o.settingsAccelerationEnabled=r),a}}async function KH(e){const t=!!e,n=g.fastCharacterListEnabled!==!1;g.fastCharacterListEnabled=t;const r=en();typeof r?.setCharacterListAccelerationEnabled=="function"?r.setCharacterListAccelerationEnabled(t):r&&(r.characterListAccelerationEnabled=t);try{const o=await zn({characterListAccelerationEnabled:t}),a=o.characterListAccelerationEnabled!==!1;return g.fastCharacterListEnabled=a,typeof r?.setCharacterListAccelerationEnabled=="function"?r.setCharacterListAccelerationEnabled(a):r&&(r.characterListAccelerationEnabled=a),o}catch(o){throw g.fastCharacterListEnabled=n,typeof r?.setCharacterListAccelerationEnabled=="function"?r.setCharacterListAccelerationEnabled(n):r&&(r.characterListAccelerationEnabled=n),o}}async function jH(e){const t=!!e,n=g.recentChatListAccelerationEnabled!==!1;g.recentChatListAccelerationEnabled=t;const r=en();typeof r?.setRecentChatListAccelerationEnabled=="function"?r.setRecentChatListAccelerationEnabled(t):r&&(r.recentChatListAccelerationEnabled=t);try{const o=await zn({recentChatListAccelerationEnabled:t}),a=o.recentChatListAccelerationEnabled!==!1;return g.recentChatListAccelerationEnabled=a,typeof r?.setRecentChatListAccelerationEnabled=="function"?r.setRecentChatListAccelerationEnabled(a):r&&(r.recentChatListAccelerationEnabled=a),o}catch(o){throw g.recentChatListAccelerationEnabled=n,typeof r?.setRecentChatListAccelerationEnabled=="function"?r.setRecentChatListAccelerationEnabled(n):r&&(r.recentChatListAccelerationEnabled=n),o}}async function qH(e){g.progressiveChatLoadingEnabled,g.progressiveChatLoadingEnabled=!1,jo();try{const t=await zn({progressiveChatLoadingEnabled:!1});return g.progressiveChatLoadingEnabled=!1,jo(),t}catch(t){throw g.progressiveChatLoadingEnabled=!1,jo(),t}}async function YH(e){const t=!!e,n=g.tokenizerBulkCountEnabled!==!1;g.tokenizerBulkCountEnabled=t;const r=en();typeof r?.setTokenizerBulkCountEnabled=="function"?r.setTokenizerBulkCountEnabled(t):r&&(r.tokenizerBulkCountEnabled=t);try{const o=await zn({tokenizerBulkCountEnabled:t}),a=o.tokenizerBulkCountEnabled!==!1;return g.tokenizerBulkCountEnabled=a,typeof r?.setTokenizerBulkCountEnabled=="function"?r.setTokenizerBulkCountEnabled(a):r&&(r.tokenizerBulkCountEnabled=a),o}catch(o){throw g.tokenizerBulkCountEnabled=n,typeof r?.setTokenizerBulkCountEnabled=="function"?r.setTokenizerBulkCountEnabled(n):r&&(r.tokenizerBulkCountEnabled=n),o}}async function QH(e){const t=!!e,n=g.chatKeyboardScanReductionEnabled!==!1;g.chatKeyboardScanReductionEnabled=t;const r=en();typeof r?.setChatKeyboardScanReductionEnabled=="function"?r.setChatKeyboardScanReductionEnabled(t):r&&(r.chatKeyboardScanReductionEnabled=t);try{const o=await zn({chatKeyboardScanReductionEnabled:t}),a=o.chatKeyboardScanReductionEnabled!==!1;return g.chatKeyboardScanReductionEnabled=a,typeof r?.setChatKeyboardScanReductionEnabled=="function"?r.setChatKeyboardScanReductionEnabled(a):r&&(r.chatKeyboardScanReductionEnabled=a),o}catch(o){throw g.chatKeyboardScanReductionEnabled=n,typeof r?.setChatKeyboardScanReductionEnabled=="function"?r.setChatKeyboardScanReductionEnabled(n):r&&(r.chatKeyboardScanReductionEnabled=n),o}}async function XH(e){const t=!!e,n=g.extensionManifestBundleEnabled!==!1;g.extensionManifestBundleEnabled=t;const r=en();typeof r?.setExtensionManifestBundleEnabled=="function"?r.setExtensionManifestBundleEnabled(t):r&&(r.extensionManifestBundleEnabled=t);try{const o=await zn({extensionManifestBundleEnabled:t}),a=o.extensionManifestBundleEnabled!==!1;return g.extensionManifestBundleEnabled=a,typeof r?.setExtensionManifestBundleEnabled=="function"?r.setExtensionManifestBundleEnabled(a):r&&(r.extensionManifestBundleEnabled=a),o}catch(o){throw g.extensionManifestBundleEnabled=n,typeof r?.setExtensionManifestBundleEnabled=="function"?r.setExtensionManifestBundleEnabled(n):r&&(r.extensionManifestBundleEnabled=n),o}}function Tp(){const e=h[Mf]||{installed:!1,isComposing:!1,debounceTimer:null};h[Mf]=e;const t=document.getElementById("character_search_bar");if(!t){e.retryTimer||(e.retryTimer=setTimeout(()=>{e.retryTimer=null,Tp()},1e3));return}g.characterSearchInputOptimizationEnabled?e.installed||JH(e,t):e.installed&&ZH(e,t)}function JH(e,t){e.installed||(e.installed=!0,e.isComposing=!1,e.isBypassingSync=!1,e.compositionStartHandler=n=>{n.target===t&&(e.isComposing=!0)},e.compositionEndHandler=n=>{n.target===t&&(e.isComposing=!1,ug(e,t))},e.inputCaptureHandler=n=>{n.target===t&&(e.isBypassingSync||n.isTrusted&&(n.stopImmediatePropagation(),n.stopPropagation(),e.isComposing||ug(e,t)))},t.addEventListener("compositionstart",e.compositionStartHandler,!0),t.addEventListener("compositionend",e.compositionEndHandler,!0),t.addEventListener("input",e.inputCaptureHandler,!0))}function ug(e,t,n=300){clearTimeout(e.debounceTimer),e.debounceTimer=setTimeout(()=>{e.installed&&(e.isBypassingSync=!0,window.jQuery?window.jQuery(t).trigger("input"):t.dispatchEvent(new Event("input",{bubbles:!0})),e.isBypassingSync=!1)},n)}function ZH(e,t){e.retryTimer&&(clearTimeout(e.retryTimer),e.retryTimer=null),e.installed&&(t.removeEventListener("compositionstart",e.compositionStartHandler,!0),t.removeEventListener("compositionend",e.compositionEndHandler,!0),t.removeEventListener("input",e.inputCaptureHandler,!0),clearTimeout(e.debounceTimer),e.installed=!1)}function xp(){return(!h[qa]||typeof h[qa]!="object")&&(h[qa]={}),h[qa]}function oS(){g.characterListAvatarLazyLoadEnabled?eG():tG()}function eG(){const e=xp();if(e.enabled=!0,dG(),typeof IntersectionObserver!="function"){cS(),console.warn(`${T} IntersectionObserver is unavailable; character list avatar lazy loading fell back to native image hints`);return}sS(e),nG(e),oG(e),iG(e),sG(e),ul(e)}function tG(){const e=xp();e.enabled=!1,e.processTimer&&(clearTimeout(e.processTimer),e.processTimer=null),e.mutationObserver?.disconnect(),e.mutationObserver=null,e.intersectionObserver?.disconnect(),e.intersectionObserver=null,e.characterPageLoadedHandler&&(M.removeListener?.(w.CHARACTER_PAGE_LOADED,e.characterPageLoadedHandler),e.characterPageLoadedHandler=null),rG(e),aG(e),cG(),pG()}function nG(e){const t=globalThis.jQuery?.fn?.append;if(typeof t!="function"||e.patchedAppend===t||e.patchedAppend&&globalThis.jQuery.fn.append===e.patchedAppend)return;function n(...r){g.characterListAvatarLazyLoadEnabled&&dg(this)&&aS(r,e);const o=t.apply(this,r);return g.characterListAvatarLazyLoadEnabled&&dg(this)&&ul(e),o}n.__baiBaiToolkitCharacterListAvatarLazyLoadPatched=!0,n.__baiBaiToolkitOriginalAppend=t,Object.assign(n,t),e.originalAppend=t,e.patchedAppend=n,globalThis.jQuery.fn.append=n}function rG(e){!e.patchedAppend||!globalThis.jQuery?.fn||(globalThis.jQuery.fn.append===e.patchedAppend&&typeof e.originalAppend=="function"&&(globalThis.jQuery.fn.append=e.originalAppend),e.originalAppend=null,e.patchedAppend=null)}function oG(e){const t=typeof Element<"u"?Element.prototype.append:null;if(typeof t!="function"||e.patchedNativeAppend===t||e.patchedNativeAppend&&Element.prototype.append===e.patchedNativeAppend)return;function n(...r){g.characterListAvatarLazyLoadEnabled&&pg(this)&&aS(r,e);const o=t.apply(this,r);return g.characterListAvatarLazyLoadEnabled&&pg(this)&&ul(e),o}n.__baiBaiToolkitCharacterListAvatarLazyLoadPatched=!0,n.__baiBaiToolkitOriginalAppend=t,e.originalNativeAppend=t,e.patchedNativeAppend=n,Element.prototype.append=n}function aG(e){!e.patchedNativeAppend||typeof Element>"u"||(Element.prototype.append===e.patchedNativeAppend&&typeof e.originalNativeAppend=="function"&&(Element.prototype.append=e.originalNativeAppend),e.originalNativeAppend=null,e.patchedNativeAppend=null)}function dg(e){if(!e||typeof e.length!="number")return!1;for(const t of e)if(t instanceof Element&&t.matches(JO))return!0;return!1}function pg(e){return e instanceof Element&&e.matches(ZO)}function aS(e,t){for(const n of e)iS(n,t)}function iS(e,t){if(e){if(e instanceof Node){ru(e,t,{requireListContainer:!1,observe:!1});return}if(e.jquery&&typeof e.each=="function"){e.each((n,r)=>{r instanceof Node&&ru(r,t,{requireListContainer:!1,observe:!1})});return}if(Array.isArray(e))for(const n of e)iS(n,t)}}function iG(e){if(e.mutationObserver)return;const t=document.body||document.documentElement;t&&(e.mutationObserver=new MutationObserver(n=>{if(!(!g.characterListAvatarLazyLoadEnabled||!e.enabled))for(const r of n)for(const o of r.addedNodes)ru(o,e)}),e.mutationObserver.observe(t,{childList:!0,subtree:!0}))}function sG(e){e.characterPageLoadedHandler||(e.characterPageLoadedHandler=()=>ul(e),M.on(w.CHARACTER_PAGE_LOADED,e.characterPageLoadedHandler))}function sS(e){e.intersectionObserver||(e.intersectionObserver=new IntersectionObserver(t=>{for(const n of t)(n.isIntersecting||n.intersectionRatio>0)&&lS(n.target,e)},{root:null,rootMargin:eB,threshold:0}))}function ul(e){if(e.processTimer)return;const t=h.themeApplyReflowGuard,n=t?t.windowUntil-Date.now():0,r=n>0?n:0;e.processTimer=setTimeout(()=>{e.processTimer=null,lG(e)},r)}function lG(e){if(!(!g.characterListAvatarLazyLoadEnabled||!e.enabled)){if(typeof IntersectionObserver!="function"){cS();return}e.intersectionObserver||sS(e),document.querySelectorAll(rl).forEach(t=>{ou(t,e,{requireListContainer:!0,observe:!0})})}}function ru(e,t,{requireListContainer:n=!0,observe:r=!0}={}){if(!(e instanceof Element))return;e instanceof HTMLImageElement&&ou(e,t,{requireListContainer:n,observe:r});const o=n?rl:iE;e.querySelectorAll?.(o).forEach(a=>{ou(a,t,{requireListContainer:n,observe:r})})}function ou(e,t,{requireListContainer:n=!0,observe:r=!0}={}){if(!(e instanceof HTMLImageElement)||n&&!e.matches(rl)||!n&&!e.matches(iE))return;if(e.dataset[Vr]){mg(e,t,r);return}const a=e.getAttribute("src")||"";if(!uG(a)){Es(e);return}e.dataset[Vr]=a,e.setAttribute("src",sE),e.classList.add(tr),e.classList.remove(Wo),e.closest(".avatar")?.classList.add(nr),Es(e),mg(e,t,r)}function mg(e,t,n){!n||!t?.intersectionObserver||!document.documentElement.contains(e)||t.intersectionObserver.observe(e)}function lS(e,t=xp()){if(!(e instanceof HTMLImageElement))return;const n=e.dataset[Vr];if(!n){t?.intersectionObserver?.unobserve(e);return}t?.intersectionObserver?.unobserve(e),e.dataset[Vr]="",delete e.dataset[Vr],e.classList.remove(tr),e.classList.add(Wo),e.closest(".avatar")?.classList.remove(nr),e.setAttribute("src",n),Es(e)}function cG(){const e=`img[data-${BD(Vr)}]`;document.querySelectorAll(e).forEach(t=>lS(t)),document.querySelectorAll(`.${tr}`).forEach(t=>{t.classList.remove(tr)}),document.querySelectorAll(`.${nr}`).forEach(t=>{t.classList.remove(nr)})}function cS(){document.querySelectorAll(rl).forEach(e=>{e instanceof HTMLImageElement&&Es(e)})}function Es(e){e.loading="lazy",e.decoding="async",e.setAttribute("fetchpriority","low")}function uG(e){if(!e||e===sE)return!1;try{const t=new URL(e,location.origin),n=t.searchParams.get("type");return t.origin===location.origin&&t.pathname==="/thumbnail"&&(n==="avatar"||n==="persona")&&t.searchParams.has("file")}catch{return!1}}function dG(){let e=document.getElementById(Vc);e||(e=document.createElement("style"),e.id=Vc,document.head.append(e)),e.textContent=`
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
`}function pG(){document.getElementById(Vc)?.remove()}async function Le(e,t){mG(e,t)}function mG(e,t){const n=ke();(!n.pendingRegexScriptSaves||!(n.pendingRegexScriptSaves instanceof Map))&&(n.pendingRegexScriptSaves=new Map);const r=fG(e,t);r&&(n.pendingRegexScriptSaves.set(r.scopeKey,r),wp())}function fG(e,t){const n=Array.isArray(t)?t:[];switch(e){case H.GLOBAL:return{scriptType:e,scopeKey:fi(e),scripts:n};case H.SCOPED:return $e===void 0||!Xt?.[$e]?null:{scriptType:e,scopeKey:fi(e),scripts:n,characterId:$e};case H.PRESET:{const r=so(),o=lo();return!r||!o?null:{scriptType:e,scopeKey:fi(e),scripts:n,apiId:r,presetName:o}}default:return null}}function pr({captureCurrentPreset:e=!0}={}){const t=ke();if(j[re].regexListGroups=g.regexListGroups,t.pendingRegexGroupSettingsSave=!0,e){const n=kG();n&&(t.pendingRegexPresetGroupSaves instanceof Map||(t.pendingRegexPresetGroupSaves=new Map),t.pendingRegexPresetGroupSaves.set(n.scopeKey,n))}wp()}function wp(){dl(),Eo(0)}function Sn(e){if(e===H.SCOPED){const t=Xt?.[$e]?.avatar;if(!t)return;Array.isArray(j.character_allowed_regex)||(j.character_allowed_regex=[]),j.character_allowed_regex.includes(t)||(j.character_allowed_regex.push(t),pr());return}if(e===H.PRESET){const t=so(),n=lo();if(!t||!n)return;(!j.preset_allowed_regex||typeof j.preset_allowed_regex!="object")&&(j.preset_allowed_regex={}),Array.isArray(j.preset_allowed_regex[t])||(j.preset_allowed_regex[t]=[]),j.preset_allowed_regex[t].includes(n)||(j.preset_allowed_regex[t].push(n),pr())}}function lt(){if(!We())return;const e=ke();e.pendingChatReload=!0,dl(),Eo(0)}function dl(){const e=ke();if(e.chatReloadVisibilityObserver||typeof MutationObserver!="function")return;const t=new MutationObserver(()=>{Eo()});e.chatReloadVisibilityObserver=t;for(const n of gG())t.observe(n,{attributes:!0,attributeFilter:["class","style","hidden","aria-hidden"]})}function gG(){const e=[],t=new Set,n=a=>{a instanceof HTMLElement&&!t.has(a)&&(t.add(a),e.push(a))},r=document.querySelector(bo),o=document.querySelector(Wc);if(n(r),n(o),r instanceof HTMLElement)for(let a=r.parentElement;a&&a!==document.body&&(n(a),!a.matches(Wc));a=a.parentElement);return e}function Eo(e=jO){const t=ke();clearTimeout(t.chatReloadVisibilityTimer),t.chatReloadVisibilityTimer=setTimeout(()=>{t.chatReloadVisibilityTimer=null,bG()},e)}function bG(){if(!ke().pendingChatReload&&!mr()){Cp();return}if(!yG()){uS();return}Eo(qO)}async function uS(){const e=ke();if(!e.pendingChatReload&&!mr()||e.chatReloadInFlight)return;const t=!!e.pendingChatReload;e.pendingChatReload=!1,e.chatReloadInFlight=!0,Cp();try{await ua(),t&&await SG()}catch(n){t&&(e.pendingChatReload=!0),console.debug(`${T} Failed to flush regex changes`,n),toastr.error(d`Failed to save regex changes. See console for details.`)}finally{e.chatReloadInFlight=!1,(e.pendingChatReload||mr())&&(dl(),Eo())}}function mr(){const e=ke();return!!(e.pendingRegexGroupSettingsSave||e.pendingRegexScriptSaves?.size>0||e.pendingRegexPresetGroupSaves?.size>0)}async function ua(){const e=ke();if(e.regexChangesSavePromise)return e.regexChangesSavePromise;const t=e.pendingRegexScriptSaves instanceof Map?Array.from(e.pendingRegexScriptSaves.values()):[],n=e.pendingRegexPresetGroupSaves instanceof Map?Array.from(e.pendingRegexPresetGroupSaves.values()):[],r=!!e.pendingRegexGroupSettingsSave;if(t.length===0&&n.length===0&&!r)return;e.regexChangesSaveInFlight=!0;const o=r||t.some(i=>i.scriptType===H.GLOBAL),a=(async()=>{try{e.pendingRegexScriptSaves=new Map,e.pendingRegexPresetGroupSaves=new Map,e.pendingRegexGroupSettingsSave=!1;for(const i of t)await hG(i);for(const i of n)await _G(i);o&&(j[re].regexListGroups=g.regexListGroups,await fr())}catch(i){(!e.pendingRegexScriptSaves||!(e.pendingRegexScriptSaves instanceof Map))&&(e.pendingRegexScriptSaves=new Map);for(const s of t)e.pendingRegexScriptSaves.set(s.scopeKey,s);e.pendingRegexPresetGroupSaves instanceof Map||(e.pendingRegexPresetGroupSaves=new Map);for(const s of n)e.pendingRegexPresetGroupSaves.set(s.scopeKey,s);throw e.pendingRegexGroupSettingsSave=e.pendingRegexGroupSettingsSave||r,i}finally{e.regexChangesSaveInFlight=!1}})();e.regexChangesSavePromise=a;try{await a}finally{e.regexChangesSavePromise===a&&(e.regexChangesSavePromise=null),mr()&&(dl(),Eo())}}async function hG(e){switch(e.scriptType){case H.GLOBAL:j.regex=e.scripts;break;case H.SCOPED:await hv(e.characterId,"regex_scripts",e.scripts);break;case H.PRESET:{const t=gr(e.apiId);if(!t)throw new Error(`Preset manager not found for API: ${e.apiId}`);await t.writePresetExtensionField({name:e.presetName,path:"regex_scripts",value:e.scripts});break}}}async function _G(e){const t=gr(e.apiId);if(!t)throw new Error(`Preset manager not found for API: ${e.apiId}`);await t.writePresetExtensionField({name:e.presetName,path:eE,value:e.value})}function Cp(){const e=ke();clearTimeout(e.chatReloadVisibilityTimer),e.chatReloadVisibilityTimer=null,e.chatReloadVisibilityObserver&&(e.chatReloadVisibilityObserver.disconnect(),e.chatReloadVisibilityObserver=null)}function yG(){const e=document.querySelector(Wc);return!!EG(e)}function EG(e){if(!(e instanceof HTMLElement)||!e.isConnected||e.getClientRects().length===0)return!1;const t=getComputedStyle(e);return t.display!=="none"&&t.visibility!=="hidden"}async function SG(){We()&&await Do()}function wr(e){switch(e){case H.GLOBAL:return"global";case H.PRESET:return"preset";case H.SCOPED:return"scoped";default:return"unknown"}}function kp(e){switch(e){case"global":return H.GLOBAL;case"preset":return H.PRESET;case"scoped":return H.SCOPED;default:return null}}function So(){return(!g.regexListGroups||typeof g.regexListGroups!="object")&&(g.regexListGroups={}),(!g.regexListGroups.scopes||typeof g.regexListGroups.scopes!="object")&&(g.regexListGroups.scopes={}),j[re].regexListGroups=g.regexListGroups,g.regexListGroups}function fi(e){switch(e){case H.GLOBAL:return"global";case H.SCOPED:return`scoped:${Xt?.[$e]?.avatar||"none"}`;case H.PRESET:return yn(so(),lo());default:return`unknown:${e}`}}function yn(e,t){return`preset:${e||"unknown"}:${t||"unknown"}`}function vG(){return d`默认分组`}function pl(e){const t=typeof e=="string"?e.trim():"";return!t||t==="Ungrouped"?vG():t}function Ue(e){const t=So(),n=fi(e);(!t.scopes[n]||typeof t.scopes[n]!="object")&&(t.scopes[n]={});const r=t.scopes[n];return Array.isArray(r.groups)||(r.groups=[]),(!r.scripts||typeof r.scripts!="object")&&(r.scripts={}),(!r.ungrouped||typeof r.ungrouped!="object")&&(r.ungrouped={}),r}function Pa(e){e.groups=e.groups.filter(t=>t&&typeof t=="object"&&t.id&&t.id!==Ce&&t.id!==$t).map((t,n)=>({id:String(t.id),name:String(t.name||d`Unnamed group`),order:Number.isFinite(Number(t.order))?Number(t.order):n,collapsed:!!t.collapsed})).sort((t,n)=>t.order-n.order).map((t,n)=>({...t,order:n})),(!e.ungrouped||typeof e.ungrouped!="object")&&(e.ungrouped={}),e.ungrouped={name:pl(e.ungrouped.name),collapsed:!!e.ungrouped.collapsed}}function Ss(e,t){if(!e||typeof e!="object"||Array.isArray(e)||Number(e.version)!==as)return null;const n=new Set,r=(Array.isArray(e.groups)?e.groups:[]).filter(l=>l&&typeof l=="object"&&l.id).map((l,c)=>({id:String(l.id),name:String(l.name||d`Unnamed group`),order:Number.isFinite(Number(l.order))?Number(l.order):c,collapsed:!!l.collapsed})).filter(l=>l.id===Ce||l.id===$t||n.has(l.id)?!1:(n.add(l.id),!0)).sort((l,c)=>l.order-c.order).map((l,c)=>({...l,order:c})),o=new Set(r.map(l=>l.id)),a=e.scripts&&typeof e.scripts=="object"&&!Array.isArray(e.scripts)?e.scripts:{},i=new Map([...r.map(l=>[l.id,[]]),[Ce,[]]]);for(let l=0;l<(Array.isArray(t)?t.length:0);l++){const c=t[l]?.id;if(!c)continue;const u=a[c],p=o.has(u?.groupId)?u.groupId:Ce,b=Number.isFinite(Number(u?.order))?Number(u.order):l;i.get(p).push({scriptId:c,order:b,index:l})}const s={};for(const[l,c]of i)c.sort((u,p)=>u.order-p.order||u.index-p.index).forEach((u,p)=>{s[u.scriptId]={groupId:l,order:p}});return{groups:r,scripts:s,ungrouped:{name:pl(e.ungrouped?.name),collapsed:!!e.ungrouped?.collapsed}}}function dS(e,t){const n=Ss({version:as,groups:Array.isArray(e?.groups)?structuredClone(e.groups):[],scripts:e?.scripts&&typeof e.scripts=="object"?structuredClone(e.scripts):{},ungrouped:e?.ungrouped&&typeof e.ungrouped=="object"?structuredClone(e.ungrouped):{}},t);return n?{version:as,...n}:null}function TG(e){return e?.extensions?.baibaiToolkit?.regexGroups}function xG(e,t){return!e||typeof e!="object"||!t?!1:(e.extensions=e.extensions&&typeof e.extensions=="object"?e.extensions:{},e.extensions.baibaiToolkit=e.extensions.baibaiToolkit&&typeof e.extensions.baibaiToolkit=="object"?e.extensions.baibaiToolkit:{},e.extensions.baibaiToolkit.regexGroups=t,!0)}function pS({force:e=!1}={}){const t=so(),n=lo();if(!t||!n)return!1;const r=ke(),o=yn(t,n);if(!e&&r.regexPresetGroupHydratedScopeKey===o)return!1;r.regexPresetGroupHydratedScopeKey=o;const a=gr(t),i=he(H.PRESET),s=a?.readPresetExtensionField({name:n,path:eE}),l=So(),c=l.scopes[o];if(s!=null){const p=Ss(s,i);if(!p)return console.warn(`${T} Ignored invalid portable regex group data for preset "${n}"`),!1;const b=JSON.stringify(c??null)!==JSON.stringify(p);return l.scopes[o]=p,b&&pr({captureCurrentPreset:!1}),b}if(!c||typeof c!="object")return!1;const u=Ss({version:as,...c},i);return u?(l.scopes[o]=u,pr(),!0):!1}function wG(e,t){const r=gr(t)?.getSelectedPresetName();if(!r||!e||typeof e!="object")return!1;const o=yn(t,r),a=So().scopes[o];if(!a||typeof a!="object")return!1;const i=Array.isArray(e.extensions?.regex_scripts)?e.extensions.regex_scripts:[],s=dS(a,i);return xG(e,s)}function CG(e,t,n){if(!n||!e||typeof e!="object")return!1;const r=TG(e);if(r===void 0)return!1;const o=Array.isArray(e.extensions?.regex_scripts)?e.extensions.regex_scripts:[],a=Ss(r,o);if(!a)return console.warn(`${T} Ignored invalid imported regex group data for preset "${n}"`),!1;const i=yn(t,n),s=So();s.scopes[i]=a;const l=ke();return so()===t&&lo()===n&&(l.regexPresetGroupHydratedScopeKey=i),pr({captureCurrentPreset:!1}),!0}function kG(){const e=so(),t=lo();if(!e||!t)return null;const n=yn(e,t),r=So().scopes[n];if(!r||typeof r!="object")return null;const o=dS(r,he(H.PRESET));return o?{apiId:e,presetName:t,scopeKey:n,value:o}:null}function mS(e,t){return e===$t?$t:e===Ce||!t.has(e)?Ce:e}function AG(e,t){if(!e?.scripts||typeof e.scripts!="object"||!Array.isArray(t))return!1;const n=new Set((e.groups??[]).map(a=>a.id)),r=new Map;let o=!1;for(const a of t){const i=a?.id;if(!i)continue;const s=e.scripts[i],l=mS(s?.groupId,n),c=r.get(l)??0;r.set(l,c+1),!(!s||typeof s!="object")&&(s.groupId!==l||Number(s.order)!==c)&&(s.groupId=l,s.order=c,o=!0)}return o}function at(){j[re].regexListGroups=g.regexListGroups,pr()}async function fS(){if(!g.regexQuickOperationOptimizationEnabled)return;const e=U();if(e.installing)return e.installing;e.installing=(async()=>{if(!Ap()){Pp(250);return}if(bF(),PS(),e.app){if(!Lp()){MG(),jr(250);return}ue(),jr(250);return}const t=await LG(),n=await IG();e.vue=t,e.vueDraggableNext=n,e.root=RG(),e.state=t.reactive(OG()),e.app=t.createApp(DG(t,n,e.state)),gS(),e.app.mount(e.root),ue(),jr(250),Tt()})();try{await e.installing}catch(t){console.debug(`${T} Failed to install regex Vue manager`,t),toastr.error(d`Failed to install regex list manager. See console for details.`),e.app||LS()}finally{e.installing=null}}function PG(){const e=U();if(clearTimeout(e.syncTimer),e.syncTimer=null,Mp(e),e.groupHeaderGesture=null,Kr(!1),e.app)try{e.app.unmount()}catch(t){console.debug(`${T} Failed to unmount regex Vue manager`,t)}e.app=null,e.state=null,e.root?.remove(),e.root=null,e.installing=null,document.getElementById(zc)?.remove(),XF().finally(()=>{LS()})}function U(){const e=ke();return(!e.vueManager||typeof e.vueManager!="object")&&(e.vueManager={app:null,root:null,state:null,vue:null,modulePromise:null,installing:null,syncTimer:null,suppressObserver:!1,dragging:!1,draggedScript:null,dragPlacement:null,dragLayoutCache:null,dragPlacementFrame:null,dragAutoScrollFrame:null,dragIndicatorElement:null,dragIndicatorRectKey:null,dragScrollContainer:null,lastDragPoint:null,lastDragEndedAt:0,groupHeaderGesture:null,lastGroupHeaderToggleAt:0,lastGroupHeaderGestureCanceledAt:0}),e.vueManager}function Vn(){return!!(U().app&&U().state)}function Ap(){return mt().every(({selector:e})=>document.querySelector(e)instanceof HTMLElement)}function Pp(e=80){if(!g.regexQuickOperationOptimizationEnabled)return;const t=U();t.suppressObserver||(clearTimeout(t.syncTimer),t.syncTimer=setTimeout(()=>{if(t.syncTimer=null,!Ap()){Pp(250);return}Vn()&&Lp()||fS()},e))}async function LG(){const e=U();return e.modulePromise||(e.modulePromise=tt(()=>import("./vue.runtime.esm-bundler.GI5_MaGP.chunk.js"),__vite__mapDeps([0,1]))),e.modulePromise}async function IG(){const e=U();return e.draggableModulePromise||(e.draggableModulePromise=tt(()=>import("./vue-draggable-next.esm-bundler.DMkWxeed.chunk.js"),__vite__mapDeps([2,1]))),e.draggableModulePromise}function RG(){let e=document.getElementById(Pf);return e||(e=document.createElement("div"),e.id=Pf,e.className="displayNone",document.querySelector(bo)?.append(e)),e}function gS(){const e=U();e.suppressObserver=!0;try{for(const{selector:t}of mt()){const n=document.querySelector(t);n instanceof HTMLElement&&n.replaceChildren()}}finally{setTimeout(()=>{e.suppressObserver=!1},0)}}function Lp(){return mt().every(({selector:e})=>{const t=document.querySelector(e);return t instanceof HTMLElement&&t.querySelector(":scope > .bai-bai-regex-vue-list")})}function MG(){const e=U();e.state&&(gS(),e.state.reclaimKey+=1,Tt())}function OG(){return{renderKey:0,reclaimKey:0,lists:{global:zl("global"),preset:zl("preset"),scoped:zl("scoped")},selectedIds:{}}}function zl(e){return{typeKey:e,scriptType:kp(e),groups:[]}}function ue(){const e=U();e.state&&(e.state.lists.global=Yo(H.GLOBAL),e.state.lists.preset=Yo(H.PRESET),e.state.lists.scoped=Yo(H.SCOPED),$p(),e.state.renderKey+=1,Tt())}function BG(){const e=U();e.state&&(e.state.lists.scoped=Yo(H.SCOPED),$p(),Tt())}function bS({forcePortableHydration:e=!1}={}){const t=U();t.state&&(pS({force:e}),t.state.lists.preset=Yo(H.PRESET),$p(),Tt())}async function hS(){Vn()&&ue()}function Yo(e){const t=wr(e),n=he(e);e===H.PRESET&&pS();const r=Ue(e);Pa(r),AG(r,n)&&at();const o=new Map,a=r.groups.slice().sort((c,u)=>Number(c.order??0)-Number(u.order??0)).map(c=>({id:c.id,name:c.name||d`Unnamed group`,collapsed:!!c.collapsed,isUngrouped:!1,scripts:[]}));for(const c of a)o.set(c.id,c);const i={id:$t,name:"",collapsed:!1,isUngrouped:!1,isPendingAssignment:!0,scripts:[]},s={id:Ce,name:pl(r.ungrouped?.name),collapsed:!!r.ungrouped?.collapsed,isUngrouped:!0,isPendingAssignment:!1,scripts:[]};for(let c=0;c<n.length;c++){const u=n[c],p=r.scripts?.[u?.id]??{};(p.groupId===$t?i:o.get(p.groupId)??s).scripts.push({script:u,order:Number.isFinite(Number(p.order))?Number(p.order):c})}const l=[i,...a,s].map(c=>({...c,scripts:c.scripts.sort((u,p)=>u.order-p.order).map(u=>u.script)})).filter(c=>!c.isPendingAssignment||c.scripts.length>0).filter(c=>!c.isUngrouped||c.scripts.length>0||a.length===0);return{typeKey:t,scriptType:e,groups:l}}function DG(e,t,n){const{h:r,Teleport:o,Fragment:a}=e;return{name:"BaiBaiRegexManagerRoot",render(){return r(a,null,[Vl(r,t,o,n,"global","#saved_regex_scripts"),Vl(r,t,o,n,"preset","#saved_preset_scripts"),Vl(r,t,o,n,"scoped","#saved_scoped_scripts")])}}}function Vl(e,t,n,r,o,a){return e(n,{to:a},[$G(e,t,r,o)])}function $G(e,t,n,r){const o=n.lists[r],a=o.groups.reduce((l,c)=>l+c.scripts.length,0),i=[HG(e,n,o)];a===0&&i.push(e("div",{class:"bai-bai-regex-empty-list",key:"empty"},d`No scripts found`));const s=o.groups.map(l=>{const c=!l.isPendingAssignment,u=[];return c&&u.push(GG(e,o,l)),u.push(NG(e,t,n,o,l)),e("div",{class:["bai-bai-regex-group",c?"bai-bai-regex-group-framed":"",l.collapsed?"bai-bai-regex-group-collapsed":"",l.isUngrouped?"bai-bai-regex-group-ungrouped":"",l.isPendingAssignment?"bai-bai-regex-group-pending-assignment":""],"data-regex-group-id":l.id,key:l.id},u)});return i.push(e("div",{class:"bai-bai-regex-groups flex-container flexFlowColumn",key:"groups"},s)),e("div",{class:"bai-bai-regex-vue-list flex-container flexFlowColumn","data-regex-type":r,key:`${r}-reclaim-${n.reclaimKey}`},i)}function NG(e,t,n,r,o){const a=()=>o.scripts.map(s=>KG(e,n,r,s)),i={class:["bai-bai-regex-group-list flex-container flexFlowColumn",o.scripts.length===0?"bai-bai-regex-group-list-empty":""],"data-regex-type":r.typeKey,"data-regex-group-id":o.id,list:o.scripts,group:{name:`bai-bai-regex-scripts-${r.typeKey}`,pull:!0,put:!0},draggable:".regex-script-label",handle:".bai-bai-regex-script-drag-handle",itemKey:"id",sort:!1,animation:0,emptyInsertThreshold:nE,forceFallback:!0,fallbackOnBody:!0,fallbackClass:"bai-bai-regex-sortable-fallback",ghostClass:"bai-bai-regex-sortable-ghost",chosenClass:"bai-bai-regex-sortable-chosen",dragClass:"bai-bai-regex-sortable-drag",move:s=>qG(s,r.typeKey),key:`list-${o.id}`,onChoose:()=>Kr(!0),onStart:s=>QG(n,s,r.typeKey),onUnchoose:()=>{U().dragging||Kr(!1)},onEnd:s=>{const l=XG(n,s,r.typeKey);Kr(!1),l&&ZF(r.typeKey)}};return YG(i),e("div",{class:["bai-bai-regex-group-body flex-container flexFlowColumn",o.scripts.length===0?"bai-bai-regex-group-body-empty":""],"data-regex-type":r.typeKey,"data-regex-group-id":o.id,key:`body-${o.id}`,"aria-hidden":o.collapsed?"true":"false"},[e("div",{class:"bai-bai-regex-group-body-inner"},[e(t.VueDraggableNext,i,{default:a})])])}function HG(e,t,n){const o=BF(t,n)>0;return e("div",{class:"bai-bai-regex-list-toolbar flex-container",key:"toolbar"},[e("div",{class:"bai-bai-regex-list-toolbar-btn bai-bai-regex-create-group-btn",title:d`Create regex group`,onClick:()=>{LF(n.scriptType)}},[e("i",{class:"fa-solid fa-folder-plus margin-r5"}),e("span",null,d`Create Group`)]),e("div",{class:["bai-bai-regex-list-toolbar-btn","bai-bai-regex-bulk-move-group-btn",o?"":"disabled"],title:o?d`将已选正则移动到分组`:d`先选择要移动的正则`,onClick:()=>{if(!o){toastr.warning(d`No regex scripts selected for moving.`);return}NF(n.scriptType)}},[e("i",{class:"fa-solid fa-folder-tree margin-r5"}),e("span",null,d`移动到分组...`)])])}function GG(e,t,n){const r=n.scripts.length,o=n.scripts.filter(u=>!(u?.disabled??!1)).length,a=r>0&&o===0,i=t.groups.filter(u=>!u.isUngrouped&&!u.isPendingAssignment).map(u=>u.id),s=i.indexOf(n.id),l=s>0,c=s>=0&&s<i.length-1;return e("div",{class:["bai-bai-regex-group-header","flex-container","flexnowrap",n.collapsed?"collapsed":""],key:`header-${n.id}`,onPointerdown:u=>FG(u,t.scriptType,n.id),onPointermoveCapture:u=>zG(u,t.scriptType,n.id),onPointerup:u=>VG(u,t.scriptType,n.id),onPointercancel:()=>UG(t.scriptType,n.id),onClick:u=>WG(u,t.scriptType,n.id)},[e("span",{class:["bai-bai-regex-group-toggle fa-solid fa-chevron-down"],title:n.collapsed?d`Expand`:d`Collapse`,onClick:u=>{u.preventDefault(),u.stopPropagation(),Dp(t.scriptType,n.id)}}),e("div",{class:"bai-bai-regex-group-title flex-container flex1 overflow-hidden"},[e("strong",{class:"bai-bai-regex-group-name overflow-hidden",title:n.name},n.name),e("small",{class:"bai-bai-regex-group-count"},String(n.scripts.length))]),e("label",{class:"checkbox flex-container margin-r5",title:a?d`Enable all scripts in group`:d`Disable all scripts in group`,onClick:u=>u.stopPropagation()},[e("input",{type:"checkbox",class:"disable_regex",checked:a,disabled:r===0,onChange:u=>{Kl(t.scriptType,n.id,!!u.target?.checked)}}),e("span",{class:"regex-toggle-on fa-solid fa-toggle-on",title:d`Disable all scripts in group`,onClick:u=>{u.preventDefault(),u.stopPropagation(),Kl(t.scriptType,n.id,!0)}}),e("span",{class:"regex-toggle-off fa-solid fa-toggle-off",title:d`Enable all scripts in group`,onClick:u=>{u.preventDefault(),u.stopPropagation(),Kl(t.scriptType,n.id,!1)}})]),!n.isUngrouped&&e("div",{class:["menu_button","bai-bai-regex-group-move-btn","fa-solid","fa-arrow-up",l?"":"disabled"],title:l?d`Move group up`:d`Already first group`,onClick:u=>{u.preventDefault(),u.stopPropagation(),gg(t.scriptType,n.id,-1)}}),!n.isUngrouped&&e("div",{class:["menu_button","bai-bai-regex-group-move-btn","fa-solid","fa-arrow-down",c?"":"disabled"],title:c?d`Move group down`:d`Already last group`,onClick:u=>{u.preventDefault(),u.stopPropagation(),gg(t.scriptType,n.id,1)}}),e("div",{class:"menu_button fa-solid fa-pencil",title:d`Rename group`,onClick:()=>{IF(t.scriptType,n.id)}}),!n.isUngrouped&&e("div",{class:"menu_button fa-solid fa-trash",title:d`Delete group`,onClick:()=>{RF(t.scriptType,n.id)}})].filter(Boolean))}function FG(e,t,n){if(Ip(e)||e.pointerType==="mouse"&&e.button!==0||e.isPrimary===!1)return;const r=Rp(e);if(!r)return;const o=U();o.groupHeaderGesture={scriptType:t,groupId:n,pointerId:e.pointerId,x:r.clientX,y:r.clientY,canceled:!1}}function zG(e,t,n){const r=U(),o=r.groupHeaderGesture;if(!o||o.scriptType!==t||o.groupId!==n||o.pointerId!==e.pointerId)return;const a=Rp(e);a&&yS(o,a)>rE&&(o.canceled=!0,r.lastGroupHeaderGestureCanceledAt=Date.now())}function VG(e,t,n){const r=U(),o=r.groupHeaderGesture;if(!o||o.scriptType!==t||o.groupId!==n||o.pointerId!==e.pointerId||(r.groupHeaderGesture=null,Ip(e)||_S(r)))return;const a=Rp(e);if(!a||o.canceled||yS(o,a)>rE){r.lastGroupHeaderGestureCanceledAt=Date.now();return}e.cancelable&&e.preventDefault(),e.stopPropagation(),r.lastGroupHeaderToggleAt=Date.now(),Dp(t,n)}function UG(e,t){const n=U();n.groupHeaderGesture?.scriptType===e&&n.groupHeaderGesture?.groupId===t&&(n.groupHeaderGesture=null,n.lastGroupHeaderGestureCanceledAt=Date.now())}function WG(e,t,n){const r=U();if(Ip(e))return;const o=Date.now();if(o-(r.lastGroupHeaderToggleAt||0)<Uc||o-(r.lastGroupHeaderGestureCanceledAt||0)<Uc||_S(r)){e.cancelable&&e.preventDefault(),e.stopPropagation();return}r.lastGroupHeaderToggleAt=o,Dp(t,n)}function _S(e=U()){return!!(e.dragging||Date.now()-(e.lastDragEndedAt||0)<Uc)}function Ip(e){return!!(e.target instanceof Element?e.target:null)?.closest('.bai-bai-regex-group-toggle, .menu_button, .checkbox, input, label, button, select, textarea, a, [contenteditable="true"]')}function Rp(e){return typeof e?.clientX!="number"||typeof e?.clientY!="number"?null:{clientX:e.clientX,clientY:e.clientY}}function yS(e,t){return Math.hypot(t.clientX-e.x,t.clientY-e.y)}function KG(e,t,n,r){const o=!!t.selectedIds[r.id];return e("div",{id:r.id,key:r.id,class:"regex-script-label flex-container flexnowrap","data-regex-script-id":r.id,"data-regex-type":n.typeKey},[e("input",{type:"checkbox",class:"regex_bulk_checkbox",checked:o,onChange:a=>OF(r.id,!!a.target?.checked)}),e("span",{class:"menu-handle bai-bai-regex-script-drag-handle"},"☰"),e("div",{class:"regex_script_name flex1 overflow-hidden",title:r.scriptName||""},r.scriptName||""),e("div",{class:"flex-container flexnowrap"},[e("label",{class:"checkbox flex-container margin-r5",for:"regex_disable"},[e("input",{type:"checkbox",name:"regex_disable",class:"disable_regex",checked:!!(r.disabled??!1),onChange:a=>{Wl(n.scriptType,r.id,!!a.target?.checked)}}),e("span",{class:"regex-toggle-on fa-solid fa-toggle-on",title:d`Disable script`,onClick:a=>{a.preventDefault(),a.stopPropagation(),Wl(n.scriptType,r.id,!0)}}),e("span",{class:"regex-toggle-off fa-solid fa-toggle-off",title:d`Enable script`,onClick:a=>{a.preventDefault(),a.stopPropagation(),Wl(n.scriptType,r.id,!1)}})]),e("label",{class:"menu_button regex_script_expand",title:d`Show more options`},[e("input",{type:"checkbox",name:"regex_expand"}),e("span",{class:"fa-solid fa-ellipsis"})]),e("div",{class:"flex-container regex_script_buttons"},[e("div",{class:"move_to_global menu_button",title:d`Move to global scripts`,onClick:()=>{jl(n.scriptType,r.id,H.GLOBAL)}},[e("i",{class:"fa-solid fa-globe"})]),e("div",{class:"move_to_preset menu_button",title:d`Move to preset scripts`,onClick:()=>{jl(n.scriptType,r.id,H.PRESET)}},[e("i",{class:"fa-solid fa-sliders"})]),e("div",{class:"move_to_scoped menu_button",title:d`Move to scoped scripts`,onClick:()=>{jl(n.scriptType,r.id,H.SCOPED)}},[e("i",{class:"fa-solid fa-address-card"})]),e("div",{class:"export_regex menu_button",title:d`Export script`,onClick:()=>jF(n.scriptType,r.id)},[e("i",{class:"fa-solid fa-file-export"})])]),e("div",{class:"edit_existing_regex menu_button",title:d`Edit script`,onClick:()=>{zS(n.scriptType,r.id)}},[e("i",{class:"fa-solid fa-pencil"})]),e("div",{class:"delete_regex menu_button",title:d`Delete script`,onClick:()=>{UF(n.scriptType,r.id)}},[e("i",{class:"fa-solid fa-trash"})])])])}function jG(e,t){const n=kp(t),r=e?.draggedContext?.element,o=e?.to,a=e?.from;return n===null||!r?.id||!(o instanceof HTMLElement)||!(a instanceof HTMLElement)||!o.matches(".bai-bai-regex-group-list")||!a.matches(".bai-bai-regex-group-list")||o.dataset.regexType!==t||a.dataset.regexType!==t?!1:he(n).some(i=>i?.id===r.id)}function qG(e,t){return jG(e,t)&&Qo(e?.originalEvent??e),!1}function YG(e){Object.assign(e,{touchStartThreshold:de()?Rf:If,fallbackTolerance:de()?Rf:If})}function QG(e,t,n){const r=U(),o=e?.lists?.[n],a=JG(t,n);if(r.groupHeaderGesture=null,Mp(r),!o||!a){Kr(!0);return}Op(!0,r),r.draggedScript=a,r.dragLayoutCache=TS(o,a),r.dragScrollContainer=fF(kS(n)),r.lastDragStartedAt=Date.now(),Kr(!0),ZG(r),Qo(t?.originalEvent??t)}function XG(e,t=null,n=null){const r=U(),o=n||r.draggedScript?.typeKey,a=o?e?.lists?.[o]:null,i=AS(t?.originalEvent??t);i&&(r.lastDragPoint=i,vS(a,i));const s=dF(a,r.dragPlacement);return Op(!1,r),r.lastDragEndedAt=Date.now(),Mp(r),s}function JG(e,t){const n=e?.item,r=e?.draggedContext?.element,o=e?.from,a=n instanceof HTMLElement?n.dataset.regexScriptId:r?.id,i=o instanceof HTMLElement?o.dataset.regexGroupId:n instanceof HTMLElement?n.closest(".bai-bai-regex-group-list")?.dataset.regexGroupId:null;return!a||!i?null:{typeKey:t,scriptId:a,sourceGroupId:i}}function ZG(e=U()){ES(e);const t=o=>Qo(o),n=o=>{e.draggedScript&&Qo(o)},r=o=>Qo(o);document.addEventListener("pointermove",t,!0),document.addEventListener("mousemove",n,!0),document.addEventListener("touchmove",r,{capture:!0,passive:!0}),e.dragPlacementListeners={pointermove:t,mousemove:n,touchmove:r}}function ES(e=U()){const t=e.dragPlacementListeners;t&&(document.removeEventListener("pointermove",t.pointermove,!0),document.removeEventListener("mousemove",t.mousemove,!0),document.removeEventListener("touchmove",t.touchmove,!0),e.dragPlacementListeners=null)}function Qo(e){const t=AS(e),n=U();return t?(n.lastDragPoint=t,SS(n),!0):!1}function SS(e=U()){e.dragPlacementFrame||(e.dragPlacementFrame=requestAnimationFrame(()=>{e.dragPlacementFrame=null;const t=e.draggedScript?.typeKey,n=t?e.state?.lists?.[t]:null;vS(n,e.lastDragPoint),CS(e)}))}function vS(e,t){const n=U(),r=n.draggedScript;if(!e||!t||!r)return iu(n),!1;const o=eF(e,r,t);return o?(n.dragPlacement=o,gF(o.groupElement),cF(n,o),!0):(iu(n),!1)}function eF(e,t,n){const r=tF(e,t),o=rF(r,n);if(!o)return null;const a=oF(o,n);return{targetType:"group",typeKey:e.typeKey,groupId:o.groupId,groupElement:o.groupElement,containerElement:o.containerElement,containerRect:o.containerRect,children:o.children,index:a,indicatorRect:aF(o,a),draggedScript:t}}function tF(e,t){const n=U(),r=n.dragLayoutCache;return r&&r.draggedScript?.typeKey===t?.typeKey&&r.draggedScript?.scriptId===t?.scriptId&&xS(r)===r.scrollSignature?r:(n.dragLayoutCache=TS(e,t),n.dragLayoutCache)}function TS(e,t){const n=kS(e?.typeKey);if(!e||!t||!(n instanceof HTMLElement))return null;const r=[];for(const a of n.querySelectorAll(".bai-bai-regex-group:not(.bai-bai-regex-group-collapsed)")){if(!(a instanceof HTMLElement))continue;const i=a.dataset.regexGroupId,s=a.querySelector(".bai-bai-regex-group-list");!i||!(s instanceof HTMLElement)||r.push({groupId:i,groupElement:a,hitRect:au(a),...nF(s,t)})}const o={draggedScript:{...t},groups:r,scrollSignature:""};return o.scrollSignature=xS(o),o}function nF(e,t){return{containerElement:e,containerRect:au(e),children:iF(e,t).map(n=>({element:n,rect:au(n)}))}}function au(e){const t=e.getBoundingClientRect();return{left:t.left,right:t.right,top:t.top,bottom:t.bottom,width:t.width,height:t.height}}function xS(e){const t=[window.scrollX||0,window.scrollY||0],n=new Set;for(const r of e?.groups??[]){const o=r.containerElement;!(o instanceof HTMLElement)||n.has(o)||(n.add(o),t.push(o.scrollLeft||0,o.scrollTop||0))}return t.join(":")}function rF(e,t){if(!e||!t)return null;const n=nE;let r=null,o=1/0;for(const a of e.groups??[]){const i=a.hitRect;if(t.clientX<i.left-n||t.clientX>i.right+n||t.clientY<i.top-n/2||t.clientY>i.bottom+n)continue;const s=t.clientY<i.top?i.top-t.clientY:t.clientY>i.bottom?t.clientY-i.bottom:0;s<o&&(o=s,r=a)}return r}function oF(e,t){const n=e?.children??[];let r=0;for(const o of n){const a=o.rect;if(t.clientY<a.top+a.height/2)return Math.max(0,Math.min(r,n.length));r+=1}return n.length}function aF(e,t){const n=e?.containerRect;if(!n)return null;const r=e.children??[],o=r[t];let a=n.top;return o?a=o.rect.top:r.length&&(a=r[r.length-1].rect.bottom),{left:n.left,top:a,width:n.width}}function iF(e,t){return Array.from(e?.children??[]).filter(n=>n instanceof HTMLElement&&!sF(n)&&!lF(n,t))}function sF(e){return e.classList.contains("bai-bai-regex-sortable-fallback")||e.classList.contains("bai-bai-regex-sortable-ghost")||e.classList.contains("bai-bai-regex-sortable-chosen")||e.classList.contains("bai-bai-regex-sortable-drag")}function lF(e,t){return!!(e instanceof HTMLElement&&t?.scriptId&&e.dataset.regexScriptId===t.scriptId)}function cF(e,t){const n=uF(e),r=t?.indicatorRect;if(!n||!r){wS(e);return}const o=`${Math.round(r.left)}:${Math.round(r.top)}:${Math.round(r.width)}`;e.dragIndicatorRectKey!==o&&(e.dragIndicatorRectKey=o,n.style.left=`${r.left}px`,n.style.top=`${Math.round(r.top-1)}px`,n.style.width=`${r.width}px`)}function uF(e=U()){if(e.dragIndicatorElement instanceof HTMLElement&&e.dragIndicatorElement.isConnected)return e.dragIndicatorElement;const t=document.createElement("div");return t.className=tE,document.body.append(t),e.dragIndicatorElement=t,t}function wS(e=U()){e.dragIndicatorElement?.remove?.(),e.dragIndicatorElement=null,e.dragIndicatorRectKey=null}function iu(e=U()){e.dragPlacement=null,Bp(),wS(e)}function Mp(e=U()){ES(e),e.dragPlacementFrame&&(cancelAnimationFrame(e.dragPlacementFrame),e.dragPlacementFrame=null),e.dragAutoScrollFrame&&(cancelAnimationFrame(e.dragAutoScrollFrame),e.dragAutoScrollFrame=null),iu(e),Op(!1,e),e.draggedScript=null,e.dragLayoutCache=null,e.dragScrollContainer=null,e.lastDragPoint=null}function dF(e,t){const n=t?.draggedScript,r=t?.groupId;if(!e||!n?.scriptId||!r)return!1;const o=e.groups.find(s=>s.id===r);if(!o)return!1;const a=fg(e),i=pF(e,n.scriptId);return i?(o.scripts=Array.isArray(o.scripts)?o.scripts:[],o.scripts.splice(Math.max(0,Math.min(Number(t.index)||0,o.scripts.length)),0,i),!OD(a,fg(e))):!1}function pF(e,t){for(const n of e?.groups??[]){const r=Array.isArray(n.scripts)?n.scripts:[],o=r.findIndex(a=>a?.id===t);if(o>=0)return r.splice(o,1)[0]}return null}function fg(e){return(e?.groups??[]).flatMap(t=>(t.scripts??[]).map(n=>`${t.id}:${n?.id??""}`))}function CS(e=U()){e.dragAutoScrollFrame||!e.draggedScript||!e.lastDragPoint||(e.dragAutoScrollFrame=requestAnimationFrame(()=>{e.dragAutoScrollFrame=null,!(!e.draggedScript||!e.lastDragPoint||!mF(e))&&(e.dragLayoutCache=null,SS(e),CS(e))}))}function mF(e=U()){const t=e.dragScrollContainer,n=e.lastDragPoint;if(!t||!n)return!1;const r=t===document.scrollingElement||t===document.documentElement||t===document.body?{top:0,bottom:window.innerHeight||document.documentElement.clientHeight||0}:t.getBoundingClientRect(),o=56,a=18;let i=0;if(n.clientY<r.top+o?i=-Math.ceil(a*(1-Math.max(0,n.clientY-r.top)/o)):n.clientY>r.bottom-o&&(i=Math.ceil(a*(1-Math.max(0,r.bottom-n.clientY)/o))),!i)return!1;const s=t.scrollTop;return t.scrollTop+=i,t.scrollTop!==s}function fF(e){let t=e instanceof Element?e.parentElement:null;for(;t&&t!==document.body&&t!==document.documentElement;){const n=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n.overflowY)&&t.scrollHeight>t.clientHeight)return t;t=t.parentElement}return document.scrollingElement||document.documentElement}function kS(e){return e?document.querySelector(`.bai-bai-regex-vue-list[data-regex-type="${e}"]`):null}function AS(e){if(!e)return null;if(typeof e.clientX=="number"&&typeof e.clientY=="number")return{clientX:e.clientX,clientY:e.clientY};const t=e.touches?.[0]??e.changedTouches?.[0];return t&&typeof t.clientX=="number"&&typeof t.clientY=="number"?{clientX:t.clientX,clientY:t.clientY}:null}function Op(e,t=U()){t.dragging=!!e,document.body?.classList.toggle(si,!!e)}function Kr(e){document.body?.classList.toggle("bai-bai-regex-drag-cursor-active",!!e),e||Bp()}function gF(e){const t=e instanceof HTMLElement?e.closest(".bai-bai-regex-group"):null;document.querySelector(`.${is}`)!==t&&(Bp(),t instanceof HTMLElement&&t.classList.add(is))}function Bp(){document.querySelectorAll(`.${is}`).forEach(e=>{e.classList.remove(is)})}function bF(){if(document.getElementById(zc))return;const e=document.createElement("style");e.id=zc,e.textContent=`
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
    transition: grid-template-rows ${Lf}ms ease, opacity ${Lf}ms ease, background-color 0.15s ease;
}

.bai-bai-regex-group-collapsed .bai-bai-regex-group-body {
    grid-template-rows: 0fr;
    opacity: 0;
    pointer-events: none;
    transition-duration: ${DO}ms;
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
`,document.head.append(e)}function Tt(){if(Vn()){hF();return}const e=$(`${bo} .regex_bulk_checkbox`),t=e.length>0&&e.length===e.filter(":checked").length,n=$("#bulk_select_all_toggle").find("i");n.toggleClass("fa-check-double",!t),n.toggleClass("fa-minus",t);const r=$("#saved_regex_scripts .regex-script-label:has(.regex_bulk_checkbox:checked)").length>0,o=$("#saved_scoped_scripts .regex-script-label:has(.regex_bulk_checkbox:checked)").length>0,a=$("#saved_preset_scripts .regex-script-label:has(.regex_bulk_checkbox:checked)").length>0;$("#bulk_regex_move_to_global").toggle(o||a),$("#bulk_regex_move_to_scoped").toggle(r||a),$("#bulk_regex_move_to_preset").toggle(r||o)}function hF(){const e=U(),t=vo(),n=HS(),r=e.state?.selectedIds??{},o=n.length>0&&n.every(c=>r[c]),a=$("#bulk_select_all_toggle").find("i");a.toggleClass("fa-check-double",!o),a.toggleClass("fa-minus",o);const i=t.some(c=>c.scriptType===H.GLOBAL),s=t.some(c=>c.scriptType===H.SCOPED),l=t.some(c=>c.scriptType===H.PRESET);$("#bulk_regex_move_to_global").toggle(s||l),$("#bulk_regex_move_to_scoped").toggle(i||l),$("#bulk_regex_move_to_preset").toggle(i||s)}function jr(e=80){if(!g.regexQuickOperationOptimizationEnabled)return;const t=ke();clearTimeout(t.nativeSortableGuardTimer),t.nativeSortableGuardTimer=setTimeout(()=>{t.nativeSortableGuardTimer=null,_F()},e)}function _F(){if(!g.regexQuickOperationOptimizationEnabled)return;const e=U();if(!!!(e.installing||e.app||Lp()))return;const n=PS(),r=ke();n&&(r.nativeSortableGuardRetries??0)<40?(r.nativeSortableGuardRetries=(r.nativeSortableGuardRetries??0)+1,jr(250)):r.nativeSortableGuardRetries=0}function PS(){if(typeof $!="function"||typeof $.fn?.sortable!="function")return!0;let e=!1;for(const{selector:t}of mt()){const n=document.querySelector(t);if(!(n instanceof HTMLElement)){e=!0;continue}try{if(!IS(n)){e=!0;continue}$(n).sortable("option","disabled")!==!0&&$(n).sortable("disable")}catch(r){console.debug(`${T} Failed to disable native regex sortable`,r)}}return e}function LS(){if(!(typeof $!="function"||typeof $.fn?.sortable!="function"))for(const{selector:e}of mt()){const t=document.querySelector(e);try{t instanceof HTMLElement&&IS(t)&&$(t).sortable("enable")}catch(n){console.debug(`${T} Failed to enable native regex sortable`,n)}}}function IS(e){return typeof $!="function"?!1:!!($(e).data("ui-sortable")||$(e).data("sortable"))}function mt(){return[{selector:"#saved_regex_scripts",scriptType:H.GLOBAL},{selector:"#saved_scoped_scripts",scriptType:H.SCOPED},{selector:"#saved_preset_scripts",scriptType:H.PRESET}]}function RS(e){return mt().find(t=>t.scriptType===e)?.selector??null}function yF(e){if(!g.regexQuickOperationOptimizationEnabled||Vn())return;const t=e.target instanceof Element?e.target:null,n=t?.closest(`${bo} ${WO}`);if(!(n instanceof HTMLElement))return;const r=t.closest(".edit_existing_regex");if(r&&n.contains(r)){Xo(e),WS(n);return}const o=t.closest(".regex-toggle-on, .regex-toggle-off");if(o&&n.contains(o)){Xo(e),EF(n,o);return}const a=t.closest(".delete_regex");a&&n.contains(a)&&(Xo(e),OS(n))}function Xo(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()}async function EF(e,t){const n=t.classList.contains("regex-toggle-on");await MS(e,n)}async function MS(e,t){const n=xo(e);if(!n)return;const r=!!(n.script.disabled??!1);n.script.disabled=t,su(e,t);try{await Le(n.scriptType,n.scripts),Sn(n.scriptType),lt()}catch(o){n.script.disabled=r,su(e,r),console.debug(`${T} Failed to save regex script toggle`,o),toastr.error(d`Failed to save regex script state. See console for details.`)}}async function OS(e){if(!await fe(d`Are you sure you want to delete this regex script?`,ge.CONFIRM))return;const n=xo(e);if(!n)return;const[r]=n.scripts.splice(n.index,1);try{await Le(n.scriptType,n.scripts),e.remove(),Tt(),lt()}catch(o){r&&n.scripts.splice(n.index,0,r),console.debug(`${T} Failed to delete regex script`,o),toastr.error(d`Failed to delete regex script. See console for details.`)}}function SF(){if(h[Zi])return;const e=t=>{if(!g.regexQuickOperationOptimizationEnabled)return;const n=t.target instanceof HTMLInputElement?t.target:null;!n||n.id!=="import_regex_file"||(Xo(t),TF(n))};h[Zi]=e,document.addEventListener("change",e,!0)}function vF(){const e=h[Zi];e&&(document.removeEventListener("change",e,!0),delete h[Zi])}async function TF(e){const t=Array.from(e.files??[]);if(t.length===0){e.value="";return}let n=H.GLOBAL;try{const r=$(await da("regex","importTarget"));r.find("#regex_import_target_global").on("input",()=>n=H.GLOBAL),r.find("#regex_import_target_scoped").on("input",()=>n=H.SCOPED),r.find("#regex_import_target_preset").on("input",()=>n=H.PRESET),await fe(r,ge.TEXT);const o=[];for(const s of t)o.push(...await xF(s));if(o.length===0)return;const a=he(n),i=[];for(const s of o){const l=wF(s);l&&(a.push(l),i.push(l))}if(i.length===0)return;try{await Le(n,a)}catch(s){for(const l of i){const c=a.indexOf(l);c!==-1&&a.splice(c,1)}throw s}if(Vn()){for(const s of i)US(n,s.id),toastr.success(d`Regex script "${s.scriptName}" imported.`);at(),await hS()}else for(const s of i)await BS(s,n),toastr.success(d`Regex script "${s.scriptName}" imported.`);Tt(),console.debug(`${T} Imported ${i.length} regex scripts without list rebuild`)}catch(r){console.debug(`${T} Failed to import regex scripts`,r),toastr.error(d`Failed to import regex scripts. See console for details.`)}finally{e.value=""}}async function xF(e){if(!e)return toastr.error("No file provided."),[];try{const t=JSON.parse(await uv(e));return Array.isArray(t)?t:[t]}catch(t){return console.log(t),toastr.error("Invalid JSON file."),[]}}function wF(e){try{if(!e||typeof e!="object"||Array.isArray(e))throw new Error("Invalid regex object.");if(!e.scriptName)throw new Error("No script name provided.");return{...e,id:ct()}}catch(t){return console.log(t),toastr.error(d`Invalid regex object.`),null}}async function BS(e,t){const n=RS(t),r=n?document.querySelector(n):null;if(!(r instanceof HTMLElement))return;const a=(await CF()).clone();kF(a,e),$(r).append(a)}async function CF(){const e=ke();return e.scriptTemplate||(e.scriptTemplate=$(await da("regex","scriptTemplate"))),e.scriptTemplate}function kF(e,t){t.id||(t.id=ct()),e.attr("id",t.id),XS(e.get(0),t),e.find(".disable_regex").on("input",async function(){const n=e.get(0);n instanceof HTMLElement&&await MS(n,!!$(this).prop("checked"))}),e.find(".regex-toggle-on").on("click",function(){e.find(".disable_regex").prop("checked",!0).trigger("input")}),e.find(".regex-toggle-off").on("click",function(){e.find(".disable_regex").prop("checked",!1).trigger("input")}),e.find(".edit_existing_regex").on("click",async function(){const n=e.get(0);n instanceof HTMLElement&&await WS(n)}),e.find(".move_to_global").on("click",async function(){await Ul(e.get(0),H.GLOBAL)}),e.find(".move_to_scoped").on("click",async function(){await Ul(e.get(0),H.SCOPED)}),e.find(".move_to_preset").on("click",async function(){await Ul(e.get(0),H.PRESET)}),e.find(".export_regex").on("click",function(){PF(e.get(0))}),e.find(".delete_regex").on("click",async function(){const n=e.get(0);n instanceof HTMLElement&&await OS(n)}),e.find(".regex_bulk_checkbox").on("change",function(){Tt()}),e.find('input[name="regex_expand"]').on("change",function(){if(!(this instanceof HTMLInputElement)||!this.checked)return;const n=r=>{r.target instanceof HTMLElement&&r.target.closest(".regex-script-label")||(this.checked=!1,document.removeEventListener("click",n))};setTimeout(()=>{document.addEventListener("click",n,{passive:!0,once:!1})},0)})}async function Ul(e,t){if(!(e instanceof HTMLElement))return;const n=xo(e);if(!n||n.scriptType===t)return;if(t===H.SCOPED){if($e===void 0){toastr.error(d`No character selected.`);return}if(St){toastr.error(d`Cannot edit scoped scripts in group chats.`);return}}await fe(DS(t),ge.CONFIRM)&&await AF(e,t)}function DS(e){switch(e){case H.GLOBAL:return d`Are you sure you want to move this regex script to global?`;case H.SCOPED:return d`Are you sure you want to move this regex script to scoped?`;case H.PRESET:return d`Are you sure you want to move this regex script to preset?`;default:return d`Are you sure you want to move this regex script?`}}async function AF(e,t){const n=xo(e),r=RS(t),o=r?document.querySelector(r):null;if(!n||!(o instanceof HTMLElement))return;const a=he(t),[i]=n.scripts.splice(n.index,1);if(i){a.push(i);try{await Le(t,a),await Le(n.scriptType,n.scripts),Sn(t);const s=e.querySelector(".regex_bulk_checkbox");s instanceof HTMLInputElement&&(s.checked=!1),o.append(e),Tt(),lt()}catch(s){const l=a.indexOf(i);l!==-1&&a.splice(l,1),n.scripts.includes(i)||n.scripts.splice(n.index,0,i);try{await Le(n.scriptType,n.scripts),await Le(t,a)}catch(c){console.debug(`${T} Failed to roll back regex script move`,c)}console.debug(`${T} Failed to move regex script`,s),toastr.error(d`Failed to move regex script. See console for details.`)}}}function PF(e){if(!(e instanceof HTMLElement))return;const t=xo(e);if(!t)return;const n=`regex-${$S(t.script.scriptName||"script")}.json`,r=JSON.stringify(t.script,null,4);lu(r,n,"application/json")}function $S(e){return String(e).replace(/[\s.<>:"/\\|?*\x00-\x1F\x7F]/g,"_").toLowerCase()}async function LF(e){const t=await fe(d`Regex group name`,ge.INPUT,"",{okButton:d`Save`,cancelButton:d`Cancel`});if(typeof t!="string")return;const n=t.trim();if(!n){toastr.warning(d`Group name cannot be empty.`);return}const r=Ue(e);r.groups.push({id:ct(),name:n,order:r.groups.length,collapsed:!1}),at(),ue()}async function IF(e,t){const n=Ue(e),r=t===Ce?n.ungrouped:n.groups.find(i=>i.id===t);if(!r)return;const o=await fe(d`Regex group name`,ge.INPUT,r.name||"",{okButton:d`Save`,cancelButton:d`Cancel`});if(typeof o!="string")return;const a=o.trim();if(!a){toastr.warning(d`Group name cannot be empty.`);return}r.name=a,at(),ue()}function gg(e,t,n){if(t===Ce||t===$t)return;const r=Math.sign(Number(n));if(r===0)return;const o=Ue(e);Pa(o);const a=o.groups.findIndex(l=>l.id===t),i=a+r;if(a<0||i<0||i>=o.groups.length)return;const[s]=o.groups.splice(a,1);o.groups.splice(i,0,s),o.groups=o.groups.map((l,c)=>({...l,order:c})),at(),ue()}async function RF(e,t){if(t===Ce)return;const n=await fe(`要删除这个正则分组吗？

选择“否”会把组内正则移动到默认组。
选择“是”会连同组内正则一起删除。`,ge.CONFIRM,"",{okButton:"是",cancelButton:"取消",defaultResult:Kn.NEGATIVE,customButtons:[{text:"否",result:Kn.CUSTOM1}]});if(n!==Kn.AFFIRMATIVE&&n!==Kn.CUSTOM1)return;const r=Ue(e),o=n===Kn.AFFIRMATIVE;if(r.groups=r.groups.filter(a=>a.id!==t),o){const a=he(e),i=new Set;for(let s=a.length-1;s>=0;s--){const l=a[s]?.id;r.scripts?.[l]?.groupId===t&&(i.add(l),a.splice(s,1))}for(const s of i)delete r.scripts[s],delete U().state?.selectedIds?.[s];i.size>0&&(await Le(e,a),lt())}else for(const a of Object.values(r.scripts))a?.groupId===t&&(a.groupId=Ce);at(),ue()}function Dp(e,t){const n=Ue(e),r=t===Ce?n.ungrouped:n.groups.find(o=>o.id===t);r&&(r.collapsed=!r.collapsed,at(),MF(e,t,r.collapsed)||ue())}function MF(e,t,n){const r=U(),o=wr(e),a=r.state?.lists?.[o]?.groups?.find(i=>i.id===t);return a?(a.collapsed=!!n,!0):!1}function OF(e,t){const n=U();!n.state||!e||(t?n.state.selectedIds[e]=!0:delete n.state.selectedIds[e],Tt())}function $p(){const e=U();if(!e.state)return;const t=new Set;for(const{scriptType:n}of mt())for(const r of he(n))r?.id&&t.add(r.id);for(const n of Object.keys(e.state.selectedIds))t.has(n)||delete e.state.selectedIds[n]}function vo(){const t=U().state?.selectedIds??{},n=[];for(const{scriptType:r}of mt()){const o=he(r);for(let a=0;a<o.length;a++){const i=o[a];i?.id&&t[i.id]&&n.push({scriptType:r,scripts:o,index:a,script:i})}}return n}function BF(e,t){const n=e?.selectedIds??{};return(t?.groups??[]).reduce((r,o)=>r+(o?.scripts??[]).filter(a=>a?.id&&n[a.id]).length,0)}function NS(e){const t=U(),n=wr(e),r=t.state?.lists?.[n],o=t.state?.selectedIds??{};if(!r)return vo().filter(i=>i.scriptType===e).map(i=>i.script);const a=[];for(const i of r.groups??[])for(const s of i.scripts??[])s?.id&&o[s.id]&&a.push(s);return a}function HS(){return mt().flatMap(({scriptType:e})=>he(e)).map(e=>e?.id).filter(Boolean)}function DF(){const e=U();if(!e.state)return;const t=HS(),n=t.length>0&&t.every(r=>e.state.selectedIds[r]);for(const r of Object.keys(e.state.selectedIds))delete e.state.selectedIds[r];if(!n)for(const r of t)e.state.selectedIds[r]=!0;Tt()}async function Wl(e,t,n){const r=To(e,t);if(!r)return;const o=GS(e,t),a=!!(r.script.disabled??!1),i=o?!!(o.disabled??!1):a;if(i!==n){o?o.disabled=n:r.script.disabled=n;try{await Le(e,r.scripts),Sn(e),lt()}catch(s){o?o.disabled=i:r.script.disabled=a,console.debug(`${T} Failed to save regex script toggle`,s),toastr.error(d`Failed to save regex script state. See console for details.`)}}}async function Kl(e,t,n){const r=U(),o=wr(e),a=r.state?.lists?.[o]?.groups?.find(c=>c.id===t);if(!a||a.scripts.length===0)return;const i=he(e),s=a.scripts.filter(c=>c?.id&&!!(c.disabled??!1)!==n);if(s.length===0)return;const l=new Map(s.map(c=>[c.id,!!(c.disabled??!1)]));for(const c of s)c.disabled=n;try{await Le(e,i),Sn(e),lt()}catch(c){for(const u of s)u.disabled=l.get(u.id)??!!(u.disabled??!1);console.debug(`${T} Failed to save regex group script state`,c),toastr.error(d`Failed to save regex script state. See console for details.`)}}function GS(e,t){const n=U(),r=wr(e),o=n.state?.lists?.[r];if(!o||!t)return null;for(const a of o.groups??[]){const i=a.scripts?.find(s=>s?.id===t);if(i)return i}return null}async function bg(e){const t=vo().filter(r=>!!(r.script.disabled??!1)===e);if(t.length===0){toastr.warning(e?d`No regex scripts selected for enabling.`:d`No regex scripts selected for disabling.`);return}const n=new Set;for(const r of t)r.script.disabled=!e,n.add(r.scriptType);try{for(const r of n)await Le(r,he(r)),Sn(r);ue(),lt()}catch(r){console.debug(`${T} Failed to bulk toggle regex scripts`,r),toastr.error(d`Failed to save regex script state. See console for details.`),ue()}}async function jl(e,t,n){e===n||!Np(n)||!await fe(DS(n),ge.CONFIRM)||await $F(e,t,n)}async function $F(e,t,n){const r=To(e,t);if(!r||e===n)return;const o=he(n),[a]=r.scripts.splice(r.index,1);if(a){o.push(a),FS(e,n,a.id);try{await Le(e,r.scripts),await Le(n,o),Sn(n),delete U().state?.selectedIds?.[a.id],ue(),lt()}catch(i){const s=o.indexOf(a);s!==-1&&o.splice(s,1),r.scripts.splice(r.index,0,a),console.debug(`${T} Failed to move regex script`,i),toastr.error(d`Failed to move regex script. See console for details.`),ue()}}}async function ql(e){const t=vo();if(t.length===0){toastr.warning(d`No regex scripts selected for moving.`);return}if(!Np(e)||!await fe(VF(e),ge.CONFIRM))return;const r=new Set(t.map(i=>i.script.id)),o=[];for(const{scriptType:i}of mt()){if(i===e)continue;const s=he(i);for(let l=s.length-1;l>=0;l--){const c=s[l];c?.id&&r.has(c.id)&&(s.splice(l,1),o.unshift({fromType:i,script:c}))}}if(o.length===0)return;const a=he(e);for(const i of o)a.push(i.script),FS(i.fromType,e,i.script.id);try{for(const{scriptType:i}of mt())await Le(i,he(i));for(const i of r)delete U().state?.selectedIds?.[i];Sn(e),ue(),lt()}catch(i){console.debug(`${T} Failed to bulk move regex scripts`,i),toastr.error(d`Failed to move regex script. See console for details.`),ue()}}async function NF(e){const t=NS(e).filter(s=>s?.id);if(t.length===0){toastr.warning(d`No regex scripts selected for moving.`);return}const n=HF(e);if(n.length===0){toastr.warning(d`No regex groups available.`);return}const r=$('<div class="bai-bai-regex-move-group-popup"></div>'),o=$('<label class="bai-bai-regex-move-group-label"></label>').text(d`目标分组`),a=$('<select class="text_pole bai-bai-regex-move-group-select"></select>');for(const s of n)$("<option></option>").val(s.id).text(s.name).appendTo(a);r.append($('<div class="bai-bai-regex-move-group-count"></div>').text(d`已选正则：${t.length}`),o.append(a)),await fe(r,ge.CONFIRM,"",{okButton:d`移动`,cancelButton:d`取消`})&&await FF(e,String(a.val()||""))}function HF(e){const t=Ue(e);return Pa(t),[...t.groups.map(n=>({id:n.id,name:n.name||d`Unnamed group`})),{id:Ce,name:pl(t.ungrouped?.name)}]}function GF(e,t){if(t===Ce)return!0;const n=Ue(e);return Pa(n),n.groups.some(r=>r.id===t)}async function FF(e,t){const n=NS(e).filter(p=>p?.id);if(n.length===0){toastr.warning(d`No regex scripts selected for moving.`);return}if(!GF(e,t)){toastr.error(d`Target regex group was not found.`);return}const r=he(e),o=wr(e),a=Ue(e),i=r.slice(),s=Hp(a.scripts),l=new Set(n.map(p=>p.id)),c=Object.entries(a.scripts??{}).filter(([p,b])=>!l.has(p)&&b?.groupId===t).map(([,p])=>Number(p.order)).filter(p=>Number.isFinite(p));let u=c.length>0?Math.max(...c)+1:0;for(const p of n)a.scripts[p.id]={groupId:t,order:u},u+=1;zF(r,a);try{at(),ue(),await QS(o);for(const p of l)delete U().state?.selectedIds?.[p];ue()}catch(p){r.splice(0,r.length,...i),gi(a,s),at(),console.debug(`${T} Failed to bulk move regex scripts to group`,p),toastr.error(d`Failed to move regex script. See console for details.`),ue()}}function zF(e,t){if(!Array.isArray(e)||!t)return!1;Pa(t);const n=new Set((t.groups??[]).map(i=>i.id)),r=[$t,...(t.groups??[]).map(i=>i.id),Ce],o=new Map(r.map(i=>[i,[]]));for(let i=0;i<e.length;i++){const s=e[i],l=s?.id?t.scripts?.[s.id]:null,c=mS(l?.groupId,n),u=Number.isFinite(Number(l?.order))?Number(l.order):i;o.has(c)||o.set(c,[]),o.get(c).push({script:s,order:u,index:i})}const a=[];for(const i of r)(o.get(i)??[]).sort((l,c)=>l.order-c.order||l.index-c.index).forEach(l=>a.push(l.script));return a.length!==e.length?!1:(e.splice(0,e.length,...a),!0)}function Np(e){return e!==H.SCOPED?!0:$e===void 0?(toastr.error(d`No character selected.`),!1):St?(toastr.error(d`Cannot edit scoped scripts in group chats.`),!1):!0}function VF(e){switch(e){case H.GLOBAL:return d`Are you sure you want to move the selected regex scripts to global?`;case H.SCOPED:return d`Are you sure you want to move the selected regex scripts to scoped?`;case H.PRESET:return d`Are you sure you want to move the selected regex scripts to preset?`;default:return d`Are you sure you want to move the selected regex scripts?`}}function FS(e,t,n){const r=Ue(e),o=Ue(t);delete r.scripts[n],o.scripts[n]={groupId:Ce,order:Object.keys(o.scripts).length},at()}async function UF(e,t){await fe(d`Are you sure you want to delete this regex script?`,ge.CONFIRM)&&await WF(e,t)}async function WF(e,t){const n=To(e,t);if(!n)return;const[r]=n.scripts.splice(n.index,1);try{await Le(e,n.scripts),delete Ue(e).scripts[t],delete U().state?.selectedIds?.[t],at(),ue(),lt()}catch(o){r&&n.scripts.splice(n.index,0,r),console.debug(`${T} Failed to delete regex script`,o),toastr.error(d`Failed to delete regex script. See console for details.`),ue()}}async function KF(){const e=vo();if(e.length===0){toastr.warning(d`No regex scripts selected for deletion.`);return}if(!await fe(d`Are you sure you want to delete the selected regex scripts?`,ge.CONFIRM))return;const n=new Set(e.map(r=>r.script.id));try{for(const{scriptType:r}of mt()){const o=he(r);for(let i=o.length-1;i>=0;i--)n.has(o[i]?.id)&&o.splice(i,1);const a=Ue(r);for(const i of n)delete a.scripts[i];await Le(r,o)}for(const r of n)delete U().state?.selectedIds?.[r];at(),ue(),lt()}catch(r){console.debug(`${T} Failed to bulk delete regex scripts`,r),toastr.error(d`Failed to delete regex script. See console for details.`),ue()}}function jF(e,t){const n=To(e,t);if(!n)return;const r=`regex-${$S(n.script.scriptName||"script")}.json`;lu(JSON.stringify(n.script,null,4),r,"application/json")}function qF(){const e=vo().map(n=>n.script);if(e.length===0){toastr.warning(d`No regex scripts selected for export.`);return}const t=`regex-${new Date().toISOString()}.json`;lu(JSON.stringify(e,null,4),t,"application/json")}function To(e,t){const n=he(e),r=n.findIndex(o=>o?.id===t);return r===-1?null:{scriptType:e,scripts:n,index:r,script:n[r]}}async function Yl(e){e===H.SCOPED&&!Np(e)||await VS(e,YF())}async function zS(e,t){const n=To(e,t);n&&await VS(e,n.script)}function YF(){return{id:ct(),scriptName:"",findRegex:"",replaceString:"",trimStrings:[],placement:[1],disabled:!1,markdownOnly:!0,promptOnly:!1,runOnEdit:!0,substituteRegex:xg.NONE,minDepth:null,maxDepth:null}}async function VS(e,t){if(!!To(e,t.id)&&!t.scriptName){toastr.error("This script doesn't have a name! Please delete it.");return}const r=$(await da("regex","editor"));if(KS(r,t),jS(r),!await fe(r,ge.CONFIRM,"",{okButton:d`Save`,cancelButton:d`Cancel`,allowVerticalScrolling:!0}))return;const a=qS(r,t);if(!a.scriptName){toastr.error(d`Could not save regex script: The script name was undefined or empty!`);return}a.findRegex.length===0&&toastr.warning(d`This regex script will not work, but was saved anyway: A find regex isn't present.`),a.placement.length===0&&toastr.warning(d`This regex script will not work, but was saved anyway: One "Affects" checkbox must be selected!`);const i=he(e),s=i.findIndex(c=>c?.id===a.id),l=s===-1?null:{...i[s]};s===-1?i.push(a):Object.assign(i[s],a);try{await Le(e,i),Sn(e);const c=US(e,a.id,{pendingAssignment:s===-1}),u=QF(e);(c||u)&&at(),s===-1?await hS():hg(e,a.id,i[s]),lt()}catch(c){if(s===-1){const u=i.findIndex(p=>p?.id===a.id);u!==-1&&i.splice(u,1)}else Object.assign(i[s],l),hg(e,a.id,i[s]);console.debug(`${T} Failed to save regex script`,c),toastr.error(d`Failed to save regex script. See console for details.`),s===-1&&ue()}}function hg(e,t,n){const r=GS(e,t);return!r||!n?!1:(r!==n&&Object.assign(r,n),!0)}function QF(e){const t=U(),n=wr(e),r=t.state?.lists?.[n];if(!r)return!1;const o=Ue(e);let a=!1;for(const i of r.groups??[]){const s=i.isPendingAssignment?$t:i.isUngrouped?Ce:i.id;let l=0;for(const c of i.scripts??[]){if(!c?.id)continue;const u=o.scripts[c.id],p={groupId:s,order:l};(u?.groupId!==p.groupId||Number(u?.order)!==p.order)&&(o.scripts[c.id]=p,a=!0),l+=1}}return a}function US(e,t,{pendingAssignment:n=!1}={}){if(!t)return!1;const r=Ue(e),o=r.scripts[t];if(!o||typeof o!="object")return r.scripts[t]={groupId:n?$t:Ce,order:Object.keys(r.scripts).length},!0;let a=!1;return o.groupId||(o.groupId=Ce,a=!0),Number.isFinite(Number(o.order))||(o.order=Object.keys(r.scripts).length,a=!0),a}async function XF(){if(Ap()){for(const{selector:e,scriptType:t}of mt()){const n=document.querySelector(e);if(n instanceof HTMLElement){n.replaceChildren();for(const r of he(t))await BS(r,t)}}Tt()}}async function WS(e){const t=xo(e);if(!t)return;if(Vn()){await zS(t.scriptType,t.scriptId);return}if(!t.script.scriptName){toastr.error("This script doesn't have a name! Please delete it.");return}const n=$(await da("regex","editor"));if(KS(n,t.script),jS(n),!await fe(n,ge.CONFIRM,"",{okButton:d`Save`,cancelButton:d`Cancel`,allowVerticalScrolling:!0}))return;const o=qS(n,t.script);if(!o.scriptName){toastr.error(d`Could not save regex script: The script name was undefined or empty!`);return}o.findRegex.length===0&&toastr.warning(d`This regex script will not work, but was saved anyway: A find regex isn't present.`),o.placement.length===0&&toastr.warning(d`This regex script will not work, but was saved anyway: One "Affects" checkbox must be selected!`);const a=t.scripts[t.index];t.scripts[t.index]=o;try{await Le(t.scriptType,t.scripts),Sn(t.scriptType),XS(e,o),lt()}catch(i){t.scripts[t.index]=a,console.debug(`${T} Failed to save regex script edit`,i),toastr.error(d`Failed to save regex script. See console for details.`)}}function KS(e,t){e.find(".regex_script_name").val(t.scriptName||""),e.find(".find_regex").val(t.findRegex||""),e.find(".regex_replace_string").val(t.replaceString||""),e.find(".regex_trim_strings").val(Array.isArray(t.trimStrings)?t.trimStrings.join(`
`):""),e.find('input[name="disabled"]').prop("checked",!!(t.disabled??!1)),e.find('input[name="only_format_display"]').prop("checked",!!(t.markdownOnly??!1)),e.find('input[name="only_format_prompt"]').prop("checked",!!(t.promptOnly??!1)),e.find('input[name="run_on_edit"]').prop("checked",!!(t.runOnEdit??!1)),e.find('select[name="substitute_regex"]').val(t.substituteRegex??xg.NONE),e.find('input[name="min_depth"]').val(Number.isNaN(t.minDepth)?"":t.minDepth??""),e.find('input[name="max_depth"]').val(Number.isNaN(t.maxDepth)?"":t.maxDepth??"");for(const n of Array.isArray(t.placement)?t.placement:[])e.find(`input[name="replace_position"][value="${n}"]`).prop("checked",!0)}function jS(e){const t=()=>{if(_g(e),!e.find("#regex_test_mode").is(":visible"))return;const n={id:"bai-bai-toolkit-regex-test",scriptName:String(e.find(".regex_script_name").val()),findRegex:String(e.find(".find_regex").val()),replaceString:String(e.find(".regex_replace_string").val()),trimStrings:YS(e.find(".regex_trim_strings").val()),substituteRegex:Number(e.find('select[name="substitute_regex"]').val()),disabled:!1,promptOnly:!1,markdownOnly:!1,runOnEdit:!1,minDepth:null,maxDepth:null,placement:null},r=String(e.find("#regex_test_input").val()),o=Tv(n,r);e.find("#regex_test_output").text(o)};e.find("#regex_test_mode_toggle").on("click",function(){e.find("#regex_test_mode").toggleClass("displayNone"),t()}),e.find("input, textarea, select").on("input",t),_g(e)}function _g(e){const t=e.find(".info-block").get(0),n=e.find("#regex_info_block_flags_hint"),r=String(e.find(".find_regex").val());if(n.hide(),!r){bl(t,d`Find Regex is empty`,"info");return}try{const o=dv(r);if(!o)throw new Error(d`Invalid Find Regex`);const a=[];a.push(o.flags.includes("g")?d`Applies to all matches`:d`Applies to the first match`),a.push(o.flags.includes("i")?d`Case insensitive`:d`Case sensitive`),bl(t,a.join(". "),"hint"),n.show()}catch(o){bl(t,o.message,"error")}}function qS(e,t){return{...t,id:String(t.id),scriptName:String(e.find(".regex_script_name").val()),findRegex:String(e.find(".find_regex").val()),replaceString:String(e.find(".regex_replace_string").val()),trimStrings:YS(e.find(".regex_trim_strings").val()),placement:e.find('input[name="replace_position"]').filter(":checked").map(function(){return parseInt($(this).val().toString())}).get().filter(n=>!isNaN(n))||[],disabled:!!e.find('input[name="disabled"]').prop("checked"),markdownOnly:!!e.find('input[name="only_format_display"]').prop("checked"),promptOnly:!!e.find('input[name="only_format_prompt"]').prop("checked"),runOnEdit:!!e.find('input[name="run_on_edit"]').prop("checked"),substituteRegex:Number(e.find('select[name="substitute_regex"]').val()),minDepth:parseInt(String(e.find('input[name="min_depth"]').val())),maxDepth:parseInt(String(e.find('input[name="max_depth"]').val()))}}function YS(e){return String(e).split(`
`).filter(t=>t.length!==0)||[]}function xo(e){const t=e.id,n=e.closest(KO),r=JF(n);if(!t||r===null)return null;const o=he(r),a=o.findIndex(i=>i?.id===t);return a===-1?null:{row:e,list:n,scriptId:t,scriptType:r,scripts:o,index:a,script:o[a]}}function JF(e){if(!(e instanceof HTMLElement))return null;switch(e.id){case"saved_regex_scripts":return H.GLOBAL;case"saved_scoped_scripts":return H.SCOPED;case"saved_preset_scripts":return H.PRESET;default:return null}}async function QS(e){const t=kp(e);if(t===null)return;const n=U();if(!n.state)return;const r=n.state.lists[e];if(!r)return;const o=he(t),a=new Set(o.map(v=>v?.id).filter(Boolean)),i=new Map(o.filter(v=>v?.id).map(v=>[v.id,v])),s=new Set,l=[],c=Ue(t),u=o.slice(),p=Hp(c.scripts);let b=0;for(const v of r.groups){let y=0;const k=v.isPendingAssignment?$t:v.isUngrouped?Ce:v.id;for(const P of v.scripts){if(!P?.id||!a.has(P.id)||s.has(P.id))continue;const E=i.get(P.id);E&&(s.add(P.id),l.push(E),c.scripts[P.id]={groupId:k,order:y},y+=1,b+=1)}}if(o.length>0&&b===0){console.debug(`${T} Regex Vue order save skipped because the drag model contains no known scripts`),toastr.error(d`Regex order was not saved because the drag result was invalid.`),gi(c,p),ue();return}for(const v of o)v?.id&&!s.has(v.id)&&l.push(v);if(l.length!==o.length){console.debug(`${T} Regex Vue order save skipped because model and data lengths differ`),gi(c,p),ue();return}o.splice(0,o.length,...l);try{await Le(t,o),at(),lt()}catch(v){throw o.splice(0,o.length,...u),gi(c,p),v}}function Hp(e){const t={};for(const[n,r]of Object.entries(e??{}))t[n]=r&&typeof r=="object"?{...r}:r;return t}function gi(e,t){e.scripts=Hp(t)}function ZF(e){QS(e).catch(t=>{console.debug(`${T} Failed to save regex script order`,t),toastr.error(d`Failed to save regex script order. See console for details.`),ue()})}function su(e,t){const n=e.querySelector(".disable_regex");n instanceof HTMLInputElement&&(n.checked=t)}function XS(e,t){e.id=t.id;const n=t.scriptName||"",r=e.querySelector(".regex_script_name");r instanceof HTMLElement&&(r.textContent=n,r.title=n),su(e,!!(t.disabled??!1))}function JS(){g.regexQuickOperationOptimizationEnabled?e1():t1()}function e1(){if(!h[Xi]){const e=t=>{yF(t)};h[Xi]=e,document.addEventListener("click",e,!0)}h1(),o1(),SF(),n1(),a1(),s1(),c1(),g1(),jr(),fS()}function t1(){const e=h[Xi];e&&(document.removeEventListener("click",e,!0),delete h[Xi]);const t=h[Ji];t&&(t.disconnect(),delete h[Ji]);const n=ke();clearTimeout(n.nativeSortableGuardTimer),n.nativeSortableGuardTimer=null,n.nativeSortableGuardRetries=0,n.scriptTemplate=null,uS(),Cp(),r1(),_1(),l1(),u1(),b1(),vF(),i1(),PG()}function ke(){(!h.regexQuickOperationOptimization||typeof h.regexQuickOperationOptimization!="object")&&(h.regexQuickOperationOptimization={});const e=h.regexQuickOperationOptimization;return e.scriptTemplate instanceof DocumentFragment||(e.scriptTemplate=null),e}function n1(){if(h[es])return;const e=n=>{const r=ke();if(!(!mr()&&!r.regexChangesSaveInFlight&&!r.regexChangesSavePromise))return ua().catch(o=>{console.debug(`${T} Failed to flush regex changes before unload`,o)}),n.preventDefault(),n.returnValue="",""},t=n=>{n?.type==="visibilitychange"&&document.visibilityState!=="hidden"||mr()&&ua().catch(r=>{console.debug(`${T} Failed to flush regex changes during page lifecycle event`,r)})};h[es]={beforeUnloadHandler:e,pageLifecycleHandler:t},window.addEventListener("beforeunload",e),window.addEventListener("pagehide",t),document.addEventListener("visibilitychange",t)}function r1(){const e=h[es];e&&(window.removeEventListener("beforeunload",e.beforeUnloadHandler),window.removeEventListener("pagehide",e.pageLifecycleHandler),document.removeEventListener("visibilitychange",e.pageLifecycleHandler),delete h[es])}function o1(){if(h[Ji]||!document.body)return;const e=document.querySelector(bo)??document.body,t=new MutationObserver(()=>{jr(),Pp()});t.observe(e,{childList:!0,subtree:!0}),h[Ji]=t}function a1(){if(h[ts])return;const e=t=>{E1(t)};h[ts]=e,document.addEventListener("click",e,!0)}function i1(){const e=h[ts];e&&(document.removeEventListener("click",e,!0),delete h[ts])}function s1(){if(h[ns])return;const e=()=>{BG()},t=()=>{bS({forcePortableHydration:!0})};h[ns]={handler:e,presetHandler:t},M.on(w.CHAT_CHANGED,e),M.on(w.CHARACTER_PAGE_LOADED,e),M.on(w.PRESET_CHANGED,t),M.on(w.OAI_PRESET_CHANGED_AFTER,t)}function l1(){const e=h[ns];if(!e)return;const{handler:t,presetHandler:n}=e;M.removeListener(w.CHAT_CHANGED,t),M.removeListener(w.CHARACTER_PAGE_LOADED,t),M.removeListener(w.PRESET_CHANGED,n),M.removeListener(w.OAI_PRESET_CHANGED_AFTER,n),delete h[ns]}function c1(){if(h[rs]||!w.PRESET_RENAMED)return;const e=t=>{d1(t)};h[rs]=e,M.on(w.PRESET_RENAMED,e)}function u1(){const e=h[rs];e&&(M.removeListener(w.PRESET_RENAMED,e),delete h[rs])}function d1(e){const t=e?.apiId,n=e?.oldName,r=e?.newName;if(!t||!n||!r||n===r)return;const o=p1(t,n,r),a=m1(t,n,r),i=f1(t,n,r);(o||a)&&pr(),i&&wp(),bS()}function p1(e,t,n){const r=So(),o=yn(e,t),a=yn(e,n);return o===a||!r.scopes[o]||typeof r.scopes[o]!="object"?!1:(r.scopes[a]=r.scopes[o],delete r.scopes[o],j[re].regexListGroups=g.regexListGroups,!0)}function m1(e,t,n){const r=j.preset_allowed_regex;if(!r||typeof r!="object"||!Array.isArray(r[e])||!r[e].includes(t))return!1;const o=r[e].join("\0"),a=r[e].filter(i=>i!==t&&i!==n);return a.push(n),r[e]=a,o!==r[e].join("\0")}function f1(e,t,n){const r=ke(),o=yn(e,t),a=yn(e,n);let i=!1;if(r.pendingRegexScriptSaves instanceof Map){for(const[s,l]of Array.from(r.pendingRegexScriptSaves.entries()))l?.scriptType!==H.PRESET||l.apiId!==e||l.presetName!==t||(r.pendingRegexScriptSaves.delete(s),r.pendingRegexScriptSaves.set(a,{...l,presetName:n,scopeKey:a}),i=!0);if(!i&&r.pendingRegexScriptSaves.has(o)){const s=r.pendingRegexScriptSaves.get(o);r.pendingRegexScriptSaves.delete(o),r.pendingRegexScriptSaves.set(a,{...s,apiId:e,presetName:n,scopeKey:a}),i=!0}}if(r.pendingRegexPresetGroupSaves instanceof Map&&r.pendingRegexPresetGroupSaves.has(o)){const s=r.pendingRegexPresetGroupSaves.get(o);r.pendingRegexPresetGroupSaves.delete(o),r.pendingRegexPresetGroupSaves.set(a,{...s,apiId:e,presetName:n,scopeKey:a}),i=!0}return r.regexPresetGroupHydratedScopeKey===o&&(r.regexPresetGroupHydratedScopeKey=a),i}function g1(){if(h[os])return;const e=async r=>{try{await ua()}catch(o){console.debug(`${T} Failed to flush regex groups before preset export`,o)}wG(r,"openai")},t=r=>{CG(r?.data,"openai",r?.presetName)},n=r=>{const o=r.target instanceof Element?r.target.closest("[data-preset-manager-export]"):null;if(!(o instanceof HTMLElement))return;const a=ke();if(a.regexPresetExportBypassButton===o){a.regexPresetExportBypassButton=null;return}!mr()&&!a.regexChangesSavePromise||(r.preventDefault(),r.stopImmediatePropagation(),(async()=>{try{await ua(),a.regexPresetExportBypassButton=o,o.click()}catch(i){console.debug(`${T} Failed to save regex groups before preset export`,i),toastr.error(d`Failed to save regex groups before exporting the preset.`)}})())};h[os]={exportHandler:e,importHandler:t,genericExportClickHandler:n},M.on(w.OAI_PRESET_EXPORT_READY,e),M.on(w.OAI_PRESET_IMPORT_READY,t),document.addEventListener("click",n,!0)}function b1(){const e=h[os];e&&(M.removeListener(w.OAI_PRESET_EXPORT_READY,e.exportHandler),M.removeListener(w.OAI_PRESET_IMPORT_READY,e.importHandler),document.removeEventListener("click",e.genericExportClickHandler,!0),delete h[os])}function h1(){const e=globalThis.jQuery;if(h[Or]||typeof e?.fn!="object"){h[Or]&&(h[Or].enabled=!0);return}const t=e.fn.empty,n=e.fn.append;if(typeof t!="function"||typeof n!="function"){console.warn(`${T} jQuery empty/append is unavailable; regex Vue native render guard was not installed`);return}const r={enabled:!0,originalEmpty:t,originalAppend:n,patchedEmpty:null,patchedAppend:null};function o(...i){return r.enabled&&yg(this)?this:t.apply(this,i)}function a(...i){return r.enabled&&yg(this)?this:n.apply(this,i)}r.patchedEmpty=o,r.patchedAppend=a,o.__baiBaiToolkitRegexVueNativeRenderGuard=!0,a.__baiBaiToolkitRegexVueNativeRenderGuard=!0,o.__baiBaiToolkitOriginalEmpty=t,a.__baiBaiToolkitOriginalAppend=n,Object.assign(o,t),Object.assign(a,n),e.fn.empty=o,e.fn.append=a,h[Or]=r}function _1(){const e=h[Or];e&&(e.enabled=!1,globalThis.jQuery?.fn?.empty===e.patchedEmpty&&(globalThis.jQuery.fn.empty=e.originalEmpty),globalThis.jQuery?.fn?.append===e.patchedAppend&&(globalThis.jQuery.fn.append=e.originalAppend),globalThis.jQuery?.fn?.empty!==e.patchedEmpty&&globalThis.jQuery?.fn?.append!==e.patchedAppend&&delete h[Or])}function yg(e){return!g.regexQuickOperationOptimizationEnabled||!Vn()?!1:Array.from(e??[]).some(t=>y1(t))}function y1(e){return e instanceof HTMLElement&&["saved_regex_scripts","saved_scoped_scripts","saved_preset_scripts"].includes(e.id)&&e.querySelector(":scope > .bai-bai-regex-vue-list")}function E1(e){if(!g.regexQuickOperationOptimizationEnabled||!Vn())return;const t=e.target instanceof Element?e.target:null;if(!t?.closest(bo))return;const n=t.closest(["#open_regex_editor","#open_scoped_editor","#open_preset_editor","#bulk_select_all_toggle","#bulk_enable_regex","#bulk_disable_regex","#bulk_regex_move_to_global","#bulk_regex_move_to_scoped","#bulk_regex_move_to_preset","#bulk_delete_regex","#bulk_export_regex"].join(", "));if(n instanceof HTMLElement)switch(Xo(e),n.id){case"open_regex_editor":Yl(H.GLOBAL);break;case"open_scoped_editor":Yl(H.SCOPED);break;case"open_preset_editor":Yl(H.PRESET);break;case"bulk_select_all_toggle":DF();break;case"bulk_enable_regex":bg(!0);break;case"bulk_disable_regex":bg(!1);break;case"bulk_regex_move_to_global":ql(H.GLOBAL);break;case"bulk_regex_move_to_scoped":ql(H.SCOPED);break;case"bulk_regex_move_to_preset":ql(H.PRESET);break;case"bulk_delete_regex":KF();break;case"bulk_export_regex":qF();break}}async function S1(){return rg.length>0?rg:(console.debug(`${T} Bundled settings template unavailable; falling back to SillyTavern template loader.`),da(Kc,"settings"))}async function v1(){const e=$("#extensions_settings2");if(!e.length)return;let t=$("#bai_bai_toolkit_container");t.length||(t=$('<div id="bai_bai_toolkit_container" class="extension_container"></div>'),e.append(t));const n=await S1();t.empty().append(n);const r=t.find(".bai_bai_toolkit_tab"),o=t.find(".bai_bai_toolkit_tab_content");r.on("click",function(){const s=$(this),l=s.data("target");r.removeClass("active").css({color:"","border-bottom":"2px solid transparent",opacity:"0.6"}),s.addClass("active").css({color:"var(--SmartThemeQuoteColor)","border-bottom":"2px solid var(--SmartThemeQuoteColor)",opacity:"1"}),o.hide(),t.find(`#${l}`).show()}),$H(t),NH(t),$("#bai_bai_toolkit_update_prompt_on_available_enabled").prop("checked",g.updatePromptOnAvailableEnabled).on("input",function(){g.updatePromptOnAvailableEnabled=!!$(this).prop("checked"),ye(),g.updatePromptOnAvailableEnabled&&h.silentUpdateResult?.isUpToDate===!1&&rS()}),$("#bai_bai_toolkit_resize_guard_enabled").prop("checked",g.resizeGuardEnabled).on("input",function(){g.resizeGuardEnabled=!!$(this).prop("checked"),ye(),ZS()});const a=Yc(),i=$("#bai_bai_toolkit_chat_loss_mitigation_enabled");i.prop("checked",a&&g.chatLossMitigationEnabled).prop("disabled",!a).on("input",function(){Yc()&&(g.chatLossMitigationEnabled=!!$(this).prop("checked"),ye())}),i.closest("label").toggleClass("disabled",!a).css("opacity",a?"":"0.55").find("span").text(a?"缓解酒馆丢失聊天问题":"缓解酒馆丢失聊天问题（1.16 及以上版本可用）"),$("#bai_bai_toolkit_description_codemirror_editor_enabled").prop("checked",g.descriptionCodeMirrorEditorEnabled).on("input",function(){g.descriptionCodeMirrorEditorEnabled=!!$(this).prop("checked"),ye(),_E()}),$("#bai_bai_toolkit_custom_css_input_optimization_enabled").prop("checked",g.customCssInputOptimizationEnabled).on("input",function(){g.customCssInputOptimizationEnabled=!!$(this).prop("checked"),!g.customCssInputOptimizationEnabled&&g.customCssShadowPropertyEnabled&&(g.customCssShadowPropertyEnabled=!1,$("#bai_bai_toolkit_custom_css_shadow_property_enabled").prop("checked",!1)),ye(),Jc()}),$("#bai_bai_toolkit_custom_css_shadow_property_enabled").prop("checked",g.customCssShadowPropertyEnabled).on("input",function(){g.customCssShadowPropertyEnabled=!!$(this).prop("checked"),g.customCssShadowPropertyEnabled&&!g.customCssInputOptimizationEnabled&&(g.customCssInputOptimizationEnabled=!0,$("#bai_bai_toolkit_custom_css_input_optimization_enabled").prop("checked",!0)),ye(),Jc()}),$("#bai_bai_toolkit_world_info_drawer_optimization_enabled").prop("checked",g.worldInfoDrawerOptimizationEnabled||g.worldInfoPageOptimizationEnabled).on("input",function(){const s=!!$(this).prop("checked");g.worldInfoDrawerOptimizationEnabled=s,g.worldInfoPageOptimizationEnabled=s,s||xy(document),ye(),Ey(),vy(),Ty(),wy()}),bM({saveSettings:ye}),$("#bai_bai_toolkit_world_info_list_optimization_enabled").prop("checked",g.worldInfoListOptimizationEnabled).on("input",function(){g.worldInfoListOptimizationEnabled=!!$(this).prop("checked"),ye(),Dc(),VM()}),$("#bai_bai_toolkit_world_info_search_replace_enabled").prop("checked",g.worldInfoSearchReplaceEnabled!==!1).on("input",function(){g.worldInfoSearchReplaceEnabled=!!$(this).prop("checked"),ye(),Dc()}),$("#bai_bai_toolkit_character_search_input_optimization_enabled").prop("checked",g.characterSearchInputOptimizationEnabled).on("input",function(){g.characterSearchInputOptimizationEnabled=!!$(this).prop("checked"),ye(),Tp()}),$("#bai_bai_toolkit_baibaoku_settings_acceleration_enabled").prop("checked",g.baibaokuSettingsAccelerationEnabled).on("input",async function(){const s=$(this);s.prop("disabled",!0);try{await UH(!!s.prop("checked"))}catch(l){console.debug(`${T} Failed to save BaiBaoKu settings acceleration config`,l),s.prop("checked",g.baibaokuSettingsAccelerationEnabled!==!1)}finally{s.prop("disabled",!1),It(t)}}),$("#bai_bai_toolkit_baibaoku_lazy_theme_loading_enabled").prop("checked",g.baibaokuSettingsAccelerationEnabled!==!1&&g.baibaokuLazyThemeLoadingEnabled!==!1).on("input",async function(){const s=$(this);s.prop("disabled",!0);try{await WH(!!s.prop("checked"))}catch(l){console.debug(`${T} Failed to save BaiBaoKu lazy theme loading config`,l),s.prop("checked",g.baibaokuSettingsAccelerationEnabled!==!1&&g.baibaokuLazyThemeLoadingEnabled!==!1)}finally{s.prop("disabled",!1),It(t)}}),$("#bai_bai_toolkit_extension_manifest_bundle_enabled").prop("checked",g.extensionManifestBundleEnabled).on("input",async function(){const s=$(this);s.prop("disabled",!0);try{await XH(!!s.prop("checked"))}catch(l){console.debug(`${T} Failed to save BaiBaoKu extension manifest bundle config`,l),s.prop("checked",g.extensionManifestBundleEnabled!==!1)}finally{s.prop("disabled",!1),It(t)}}),$("#bai_bai_toolkit_fast_character_list_enabled").prop("checked",g.fastCharacterListEnabled).on("input",async function(){const s=$(this);s.prop("disabled",!0);try{await KH(!!s.prop("checked"))}catch(l){console.debug(`${T} Failed to save BaiBaoKu character list acceleration config`,l),s.prop("checked",g.fastCharacterListEnabled!==!1)}finally{s.prop("disabled",!1),It(t)}}),$("#bai_bai_toolkit_recent_chat_list_acceleration_enabled").prop("checked",g.recentChatListAccelerationEnabled).on("input",async function(){const s=$(this);s.prop("disabled",!0);try{await jH(!!s.prop("checked"))}catch(l){console.debug(`${T} Failed to save BaiBaoKu recent chat list acceleration config`,l),s.prop("checked",g.recentChatListAccelerationEnabled!==!1)}finally{s.prop("disabled",!1),It(t)}}),$("#bai_bai_toolkit_progressive_chat_loading_enabled").prop("checked",!1).prop("disabled",!0).on("input",async function(){const s=$(this);s.prop("disabled",!0);try{await qH(!1)}catch(l){console.debug(`${T} Failed to save BaiBaoKu progressive chat loading config`,l)}finally{s.prop("checked",!1),s.prop("disabled",!0),It(t)}}),$("#bai_bai_toolkit_save_generate_enabled").prop("checked",g.saveGenerateEnabled).on("input",function(){g.saveGenerateEnabled=!!$(this).prop("checked"),ye(),It(t)}),$("#bai_bai_toolkit_preset_auto_backup_enabled").prop("checked",g.presetAutoBackupEnabled!==!1).on("input",function(){g.presetAutoBackupEnabled=!!$(this).prop("checked"),ye(),py(),It(t)}),$("#bai_bai_toolkit_tokenizer_bulk_count_enabled").prop("checked",g.tokenizerBulkCountEnabled).on("input",async function(){const s=$(this);s.prop("disabled",!0);try{await YH(!!s.prop("checked"))}catch(l){console.debug(`${T} Failed to save BaiBaoKu tokenizer bulk count config`,l),s.prop("checked",g.tokenizerBulkCountEnabled!==!1)}finally{s.prop("disabled",!1),It(t)}}),$("#bai_bai_toolkit_chat_keyboard_scan_reduction_enabled").prop("checked",g.chatKeyboardScanReductionEnabled!==!1).on("input",async function(){const s=$(this);s.prop("disabled",!0);try{await QH(!!s.prop("checked"))}catch(l){console.debug(`${T} Failed to save BaiBaoKu chat keyboard scan reduction config`,l),s.prop("checked",g.chatKeyboardScanReductionEnabled!==!1)}finally{s.prop("disabled",!1),It(t)}}),$("#bai_bai_toolkit_character_list_avatar_lazy_load_enabled").prop("checked",g.characterListAvatarLazyLoadEnabled).on("input",function(){g.characterListAvatarLazyLoadEnabled=!!$(this).prop("checked"),ye(),oS()}),sC({saveSettings:ye}),$("#bai_bai_toolkit_save_request_gzip_enabled").prop("checked",g.saveRequestGzipEnabled).on("input",function(){g.saveRequestGzipEnabled=!!$(this).prop("checked"),ye()}),$("#bai_bai_toolkit_translate_message_updated_optimization_enabled").prop("checked",g.translateMessageUpdatedOptimizationEnabled).on("input",function(){g.translateMessageUpdatedOptimizationEnabled=!!$(this).prop("checked"),ye(),bE()}),$("#bai_bai_toolkit_perf_trace_start").on("click",function(){$(this).hasClass("disabled")||AB()}),$("#bai_bai_toolkit_perf_trace_stop").on("click",function(){$(this).hasClass("disabled")||PB()}),ps(),IL({saveSettings:ye}),$("#bai_bai_toolkit_regex_quick_operation_enabled").prop("checked",g.regexQuickOperationOptimizationEnabled).on("input",function(){g.regexQuickOperationOptimizationEnabled=!!$(this).prop("checked"),ye(),JS()}),lC(t)}function ZS(){g.resizeGuardEnabled?(mD(),gD()):(fD(),bD()),Hg(),Ey(),vy(),Ty(),wy(),Dc(),Tp(),oS(),jo(),_E(),Jc(),R_(),I_(),fd(),Bh(),FR(),py(),Iu(),F_(),O_(),z_(),JS(),Ug(),Pb(),bE(),Vb(),Wg(),hb(),Rb(),Mb(),Cu(),rc(),Sb(),wH()}sT({settings:g,extensionState:h,logPrefix:T,recordLongDomRefresh:VB});LL({settings:g,extensionState:h,logPrefix:T,loadCodeMirrorModules:il,codeMirrorHistoryMaxLength:Jd,saveSettings:ye});gM({settings:g,extensionState:h,logPrefix:T,saveSettings:ye});aI();mC({settings:g,extensionState:h,logPrefix:T});fB();CH();h.installed||(h.installed=!0,dT(),pT(),console.debug(`${T} Installed`));DD();$D();hB();$B();s$();GD();ND();Gg();ZS();jQuery(v1);jQuery(()=>TC());function Eg(){const e=[()=>tt(()=>import("./vue.runtime.esm-bundler.GI5_MaGP.chunk.js"),__vite__mapDeps([0,1])),()=>tt(()=>import("./vue-draggable-next.esm-bundler.DMkWxeed.chunk.js"),__vite__mapDeps([2,1])),()=>il()];for(const t of e)try{const n=t();n&&typeof n.catch=="function"&&n.catch(()=>{})}catch{}}typeof requestIdleCallback=="function"?requestIdleCallback(Eg,{timeout:1e4}):setTimeout(Eg,3e3);
//# sourceMappingURL=index.js.map
