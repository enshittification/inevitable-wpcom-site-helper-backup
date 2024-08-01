/*! For license information please see jetpack-global-styles.js.LICENSE.txt */
(()=>{"use strict";var e={41548:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(70444),o=n(30275);const s=(0,o.jsx)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(a.Path,{d:"M6.9 7L3 17.8h1.7l1-2.8h4.1l1 2.8h1.7L8.6 7H6.9zm-.7 6.6l1.5-4.3 1.5 4.3h-3zM21.6 17c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1s-.3-.1-.4-.2c-.1-.1-.1-.3-.1-.6V12c0-.5 0-1-.1-1.4-.1-.4-.3-.7-.5-1-.2-.2-.5-.4-.9-.5-.4 0-.8-.1-1.3-.1s-1 .1-1.4.2c-.4.1-.7.3-1 .4-.2.2-.4.3-.6.5-.1.2-.2.4-.2.7 0 .3.1.5.2.8.2.2.4.3.8.3.3 0 .6-.1.8-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.6-.4.2-.2.4-.3.7-.4.3-.1.6-.1.8-.1.3 0 .6 0 .8.1.2.1.4.3.5.5.1.2.2.5.2.9v1.1c0 .3-.1.5-.3.6-.2.2-.5.3-.9.4-.3.1-.7.3-1.1.4-.4.1-.8.3-1.1.5-.3.2-.6.4-.8.7-.2.3-.3.7-.3 1.2 0 .6.2 1.1.5 1.4.3.4.9.5 1.6.5.5 0 1-.1 1.4-.3.4-.2.8-.6 1.1-1.1 0 .4.1.7.3 1 .2.3.6.4 1.2.4.4 0 .7-.1.9-.2.2-.1.5-.3.7-.4h-.3zm-3-.9c-.2.4-.5.7-.8.8-.3.2-.6.2-.8.2-.4 0-.6-.1-.9-.3-.2-.2-.3-.6-.3-1.1 0-.5.1-.9.3-1.2s.5-.5.8-.7c.3-.2.7-.3 1-.5.3-.1.6-.3.7-.6v3.4z"})})},24561:(e,t,n)=>{var a=n(99196),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var a,s={},i=null,p=null;for(a in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(p=t.ref),t)l.call(t,a)&&!c.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:o,type:e,key:i,ref:p,props:s,_owner:r.current}}t.jsx=i},30275:(e,t,n)=>{e.exports=n(24561)},33624:(e,t,n)=>{n.d(t,{GK:()=>s,R$:()=>r,V6:()=>o,c$:()=>l,iU:()=>a,px:()=>i,qD:()=>c});const a="font_base",o="font_base_default",s="font_headings",l="font_headings_default",r="font_pairings",c="font_options",i="blogname"},17758:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(9818),o=n(47701),s=n.n(o),l=n(92819);const r=(e,t)=>{s()((()=>{const n={};let o={};const s={};e.forEach((e=>{s[e]=`--${e.replace("_","-")}`}));let r=null;(0,a.subscribe)((()=>{const c=(0,a.select)("core/editor").__unstableIsEditorReady;if(c&&!1===c())return;if(r||(r=document.createElement("style"),document.body.appendChild(r)),e.forEach((e=>{n[e]=t(e)})),(0,l.isEmpty)(n)||(0,l.isEqual)(n,o))return;o={...n};let i="";Object.keys(n).forEach((e=>{i+=`${s[e]}:${n[e]};`})),r.textContent=`.edit-post-visual-editor .editor-styles-wrapper{${i}}`}))}))}},94054:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(55609),o=n(65736),s=n(39630),l=n(3228),r=n(94607);const __=o.__,c=({fontPairings:e,fontBase:t,fontHeadings:n,update:o})=>React.createElement(React.Fragment,null,React.createElement("h3",null,__("Font Pairings","jetpack-mu-wpcom")),e&&n&&t?React.createElement("div",{className:"style-preview__font-options"},React.createElement("div",{className:"style-preview__font-options-desktop"},e.map((({label:e,headings:r,base:c})=>{const i=r===n&&c===t;return React.createElement(a.Button,{className:(0,l.Z)("style-preview__font-option",{"is-selected":i}),onClick:()=>o({headings:r,base:c}),onKeyDown:e=>e.keyCode===s.ENTER?o({headings:r,base:c}):null,key:e},React.createElement("span",{className:"style-preview__font-option-contents"},React.createElement("span",{style:{fontFamily:r,fontWeight:700}},r)," / ",React.createElement("span",{style:{fontFamily:c}},c)))})))):React.createElement(r.Z,{unsupportedFeature:__("font pairings","jetpack-mu-wpcom")}))},78326:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(55609),o=n(65736),s=n(94607);const __=o.__,l=({fontBase:e,fontBaseDefault:t,fontHeadings:n,fontHeadingsDefault:o,fontBaseOptions:l,fontHeadingsOptions:r,updateBaseFont:c,updateHeadingsFont:i})=>l&&r?React.createElement(React.Fragment,null,React.createElement(a.SelectControl,{label:__("Heading Font","jetpack-mu-wpcom"),value:n,options:r,onChange:e=>i(e),style:{fontFamily:"unset"!==n?n:o}}),React.createElement(a.SelectControl,{label:__("Base Font","jetpack-mu-wpcom"),value:e,options:l,onChange:e=>c(e),style:{fontFamily:"unset"!==e?e:t}}),React.createElement("hr",null)):React.createElement(s.Z,{unsupportedFeature:__("custom font selection","jetpack-mu-wpcom")})},14248:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(55609),o=n(9818),s=n(72067),l=n(69307),r=n(65736),c=n(41548),i=n(96483),p=n(33624),u=n(94054),d=n(78326);const __=r.__,m="ANY_PROPERTY",f=e=>{if("object"==typeof e){const{label:t,value:n,prop:a=m}=e;return{label:t,value:n,prop:a}}return{label:e,value:e,prop:m}},h=e=>null!==e.value&&null!==e.label,g=(e,t)=>e?e.map(f).filter(h).filter((e=>t=>t.prop===m||t.prop===e)(t)):[],w=({hasLocalChanges:e,resetAction:t,publishAction:n,className:o=null})=>React.createElement("div",{className:o},React.createElement(a.Button,{disabled:!e,isDefault:!0,onClick:t},__("Reset","jetpack-mu-wpcom")),React.createElement(a.Button,{className:"global-styles-sidebar__publish-button",disabled:!e,isPrimary:!0,onClick:n},__("Publish","jetpack-mu-wpcom")));const _=({fontHeadings:e,fontHeadingsDefault:t,fontBase:n,fontBaseDefault:m,fontPairings:f,fontOptions:h,siteName:_,publishOptions:y,updateOptions:E,hasLocalChanges:O,resetLocalChanges:b})=>{(0,l.useEffect)((()=>{"global-styles"===(0,i.getQueryArg)(window.location.href,"openSidebar")&&(0,o.dispatch)("core/edit-post").openGeneralSidebar("jetpack-global-styles/global-styles")}),[]);const R=()=>y({[p.iU]:n,[p.GK]:e});return React.createElement(React.Fragment,null,React.createElement(s.PluginSidebarMoreMenuItem,{icon:c.Z,target:"global-styles"},__("Global Styles","jetpack-mu-wpcom")),React.createElement(s.PluginSidebar,{icon:c.Z,name:"global-styles",title:__("Global Styles","jetpack-mu-wpcom"),className:"global-styles-sidebar"},React.createElement(a.PanelBody,null,React.createElement("p",null,/* translators: %s: Name of site. */ /* translators: %s: Name of site. */
(0,r.sprintf)(__("You are customizing %s.","jetpack-mu-wpcom"),_)),React.createElement("p",null,__("Any change you make here will apply to the entire website.","jetpack-mu-wpcom")),O?React.createElement("div",null,React.createElement("p",null,React.createElement("em",null,__("You have unsaved changes.","jetpack-mu-wpcom"))),React.createElement(w,{hasLocalChanges:O,publishAction:R,resetAction:b})):null),React.createElement(a.PanelBody,{title:__("Font Selection","jetpack-mu-wpcom")},React.createElement(d.Z,{fontBase:n,fontBaseDefault:m,fontHeadings:e,fontHeadingsDefault:t,fontBaseOptions:g(h,p.iU),fontHeadingsOptions:g(h,p.GK),updateBaseFont:e=>E({[p.iU]:e}),updateHeadingsFont:e=>E({[p.GK]:e})}),React.createElement(u.Z,{fontHeadings:e,fontBase:n,fontPairings:f,update:({headings:e,base:t})=>E({[p.GK]:e,[p.iU]:t})})),React.createElement(a.PanelBody,null,O?React.createElement("p",null,React.createElement("em",null,__("You have unsaved changes.","jetpack-mu-wpcom"))):null,React.createElement(w,{hasLocalChanges:O,publishAction:R,resetAction:b,className:"global-styles-sidebar__panel-action-buttons"}))))}},94607:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(65736);const __=a.__,o=({unsupportedFeature:e})=>React.createElement("p",null,(0,a.sprintf)(/* translators: %s: feature name (i.e. font pairings, etc) */
__("Your active theme doesn't support %s.","jetpack-mu-wpcom"),e))},54254:(e,t,n)=>{n.d(t,{h:()=>u});var a=n(86989),o=n.n(a),s=n(9818);const{STORE_NAME:l,REST_PATH:r}=JETPACK_GLOBAL_STYLES_EDITOR_CONSTANTS;let c={},i=!1;const p={*publishOptions(e){return yield{type:"IO_PUBLISH_OPTIONS",options:e},{type:"PUBLISH_OPTIONS",options:e}},updateOptions:e=>({type:"UPDATE_OPTIONS",options:e}),fetchOptions:()=>({type:"IO_FETCH_OPTIONS"}),resetLocalChanges:()=>({type:"RESET_OPTIONS",options:c})},u=(0,s.createReduxStore)(l,{reducer(e,t){switch(t.type){case"UPDATE_OPTIONS":case"RESET_OPTIONS":case"PUBLISH_OPTIONS":return{...e,...t.options}}return e},actions:p,selectors:{getOption:(e,t)=>e?e[t]:void 0,hasLocalChanges:e=>!!e&&Object.keys(c).some((t=>c[t]!==e[t]))},resolvers:{*getOption(e){if(i)return;let t;try{i=!0,t=yield p.fetchOptions()}catch(e){t={}}return c=t,{type:"UPDATE_OPTIONS",options:t}}},controls:{IO_FETCH_OPTIONS:()=>o()({path:r}),IO_PUBLISH_OPTIONS:({options:e})=>(c=e,o()({path:r,method:"POST",data:{...e}}))}});(0,s.register)(u)},99196:e=>{e.exports=window.React},92819:e=>{e.exports=window.lodash},86989:e=>{e.exports=window.wp.apiFetch},55609:e=>{e.exports=window.wp.components},94333:e=>{e.exports=window.wp.compose},9818:e=>{e.exports=window.wp.data},47701:e=>{e.exports=window.wp.domReady},72067:e=>{e.exports=window.wp.editPost},69307:e=>{e.exports=window.wp.element},65736:e=>{e.exports=window.wp.i18n},39630:e=>{e.exports=window.wp.keycodes},98817:e=>{e.exports=window.wp.plugins},70444:e=>{e.exports=window.wp.primitives},96483:e=>{e.exports=window.wp.url},3228:(e,t,n)=>{function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}n.d(t,{Z:()=>o});const o=function(){for(var e,t,n=0,o="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(94333),t=n(9818),a=n(98817),o=n(33624),s=n(17758),l=n(14248),r=n(54254);const{PLUGIN_NAME:c}=JETPACK_GLOBAL_STYLES_EDITOR_CONSTANTS;(0,s.Z)([o.iU,o.GK],(0,t.select)(r.h).getOption),(0,a.registerPlugin)(c,{render:(0,e.compose)((0,t.withSelect)((e=>{const{getOption:t,hasLocalChanges:n}=e(r.h);return{siteName:t(o.px),fontHeadings:t(o.GK),fontHeadingsDefault:t(o.c$),fontBase:t(o.iU),fontBaseDefault:t(o.V6),fontPairings:t(o.R$),fontOptions:t(o.qD),hasLocalChanges:n()}})),(0,t.withDispatch)((e=>({updateOptions:e(r.h).updateOptions,publishOptions:e(r.h).publishOptions,resetLocalChanges:e(r.h).resetLocalChanges}))))(l.Z)})})()})();