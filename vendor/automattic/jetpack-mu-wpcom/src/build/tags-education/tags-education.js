(()=>{var e={73625:(e,t,n)=>{"use strict";n.d(t,{bU:()=>u,v8:()=>a});var s=n(99501),r=n(94333),o=n(65736),i=n(99196);const c=(0,i.createContext)(null);function a(){return function(e=""){if(!e)return"";const t=e.toLowerCase();return(["pt_br","pt-br","zh_tw","zh-tw","zh_cn","zh-cn","zh_sg","zh-sg"].includes(t)?t.replace("_","-"):t.replace(/([-_].*)$/i,""))||"en"}(function(){const e=o.getLocaleData()||{};return e[""]?.lang||e[""]?.language||""}())}function u(){const e=(0,i.useContext)(c),t=!!e,[n,s]=(0,i.useState)(a());return(0,i.useEffect)((()=>{if(!t)return s(a()),o.subscribe((()=>{s(a())}))}),[t]),e||n||"undefined"!=typeof window&&window._currentUserLocale||"en"}(0,r.createHigherOrderComponent)((e=>t=>{const n={...t,locale:u()};return(0,s.jsx)(e,{...n})}),"withLocale")},70560:(e,t,n)=>{"use strict";n.d(t,{GG:()=>s,Xb:()=>u,_r:()=>h,dH:()=>r,hI:()=>d,iT:()=>o,kV:()=>c,mL:()=>p,vS:()=>l,xh:()=>a,xn:()=>i});const s=["en","ja","es","pt","fr","pt-br"],r=["en","pt-br","de","es","fr","it"],o=["en","fr","de","es"],i=["en","fr","de","es"],c=["en","es"],a=["ar","de","el","es","fr","he","id","it","ja","ko","nl","pt-br","ro","ru","sv","tr","zh-cn","zh-tw"],u={"pt-br":"br",br:"bre",zh:"zh-cn","zh-hk":"zh-tw","zh-sg":"zh-cn",kr:"ko"},d=["ar","de","en","es","fr","he","id","it","ja","ko","nl","pt-br","ru","sv","tr","zh-cn","zh-tw"],p=["ar","de","el","en","es","fa","fi","fr","id","it","ja","nl","pt","pt-br","ru","sv","th","tl","tr"],l=["es","pt-br","de","fr","he","ja","it","nl","ru","tr","id","zh-cn","zh-tw","ko","ar","sv"],h=["en","ar","de","es","fr","he","id","it","ja","ko","nl","pt-br","ro","ru","sv","tr","zh-cn","zh-tw"]},34369:(e,t,n)=>{"use strict";n.d(t,{aq:()=>m});var s=n(99501),r=n(94333),o=n(99196),i=n(73625),c=n(70560);const a="http://__domain__.invalid";const u=(e,t=[])=>(n,s)=>(t.includes(s)&&"en"!==s&&n.pathname.substr(0,s.length+2)!=="/"+s+"/"&&(n.host=`${c.Xb[s]||s}.${e}`),n),d=(e,t=[],n=null)=>(s,r)=>(s.host="wordpress.com","object"==typeof n&&n instanceof RegExp&&!n.test(s.pathname)&&(t=[]),s.pathname=e+s.pathname,t.includes(r)&&"en"!==r&&(s.pathname=r+s.pathname),s),p=(e=[],t=null,n)=>(s,r)=>"object"==typeof t&&t instanceof RegExp&&!t.test(s.pathname)?s:e.includes(r)&&"en"!==r?("prefix"===n?s.pathname=r+s.pathname:"suffix"===n&&(s.pathname.endsWith("/")?s.pathname+=r+"/":s.pathname+="/"+r),s):s,l=(e=[],t=null)=>(n,s)=>p(e,t,"prefix")(n,s),h=(e=[],t=null)=>(n,s)=>p(e,t,"suffix")(n,s),g={"wordpress.com/support/":l(c.hI),"wordpress.com/forums/":l(c.mL),"wordpress.com/blog/":l(c.GG,/^\/blog\/?$/),"wordpress.com/go/":(e,t)=>["/go/","/go"].includes(e.pathname)||"es"===t?l(c.dH)(e,t):e,"wordpress.com/pricing/":l(c.xh),"wordpress.com/tos/":l(c.vS),"wordpress.com/wp-admin/":u("wordpress.com",c.vS),"wordpress.com/wp-login.php":u("wordpress.com",c.vS),"jetpack.com":l(c._r),"cloud.jetpack.com":l(c._r),"en.support.wordpress.com":d("/support",c.hI),"en.blog.wordpress.com":d("/blog",c.GG,/^\/$/),"apps.wordpress.com":l(c.vS),"en.forums.wordpress.com":d("/forums",c.mL),"automattic.com/privacy/":l(c.iT),"automattic.com/cookies/":l(c.xn),"wordpress.com/help/contact/":(e,t,n)=>n?e:(e.pathname=e.pathname.replace(/\/help\//,"/support/"),l(c.hI)(e,t)),"wordpress.com":(e,t)=>/^\/(checkout|me)(\/|$)/.test(e.pathname)||/\/([a-z0-9-]+\.)+[a-z]{2,}\/?$/.test(e.pathname)?e:l(c.vS)(e,t),"wordpress.com/theme/":(e,t,n)=>n?e:l(c.vS)(e,t),"wordpress.com/themes/":(e,t,n)=>n?e:l(c.vS)(e,t),"wordpress.com/plugins/":(e,t,n)=>n?e:l(c.vS)(e,t),"wordpress.com/log-in/":(e,t,n)=>n?e:h(c.vS)(e,t),"wordpress.com/start/":(e,t,n)=>n?e:h(c.vS)(e,t),"wordpress.com/learn/":(e,t)=>e.pathname.includes("/learn/webinars/")&&"es"===t?(e.pathname=e.pathname.replace("/learn/webinars/","/learn/es/webinars/"),e):h(c.kV)(e,t),"wordpress.com/plans/":(e,t,n)=>n||"/plans/"!==e.pathname?e:l(c.xh)(e,t),"wordpress.com/setup/":(e,t,n)=>n?e:h(c.vS)(e,t)};function f(e){try{return new URL(String(e),a).pathname.endsWith("/")}catch(e){return!1}}function m(e,t=function(){return(0,i.v8)()??"en"}(),n=!0,s=!1){let r;try{r=new URL(String(e),a)}catch(t){return e}if(r.origin===a)return e;r.protocol="https:",r.pathname.endsWith(".php")||(r.pathname=(r.pathname+"/").replace(/\/+$/,"/"));const o=r.pathname.substr(0,1+r.pathname.indexOf("/",1));if("en.wordpress.com"===r.host&&(r.host="wordpress.com"),"/"+t+"/"===o)return e;const c=[r.host,r.host+o,r.host+r.pathname];for(let o=c.length-1;o>=0;o--)if(c[o]in g){const i=g[c[o]](r,t,n).href;if(!s)return i;try{const t=new URL(i);return f(e)||(t.pathname=t.pathname.replace(/\/+$/,"")),t.href}catch{return i}}return e}function w(){const e=(0,i.bU)();return(0,o.useCallback)(((t,n,s,r)=>m(t,n||e,s,r)),[e])}(0,r.createHigherOrderComponent)((e=>t=>{const n={...t,localizeUrl:w()};return(0,s.jsx)(e,{...n})}),"withLocalizeUrl")},951:(e,t,n)=>{t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let s=0,r=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(s++,"%c"===e&&(r=s))})),t.splice(r,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n(51741)(t);const{formatters:s}=e.exports;s.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},51741:(e,t,n)=>{e.exports=function(e){function t(e){let n,r,o,i=null;function c(...e){if(!c.enabled)return;const s=c,r=Number(new Date),o=r-(n||r);s.diff=o,s.prev=n,s.curr=r,n=r,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let i=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((n,r)=>{if("%%"===n)return"%";i++;const o=t.formatters[r];if("function"==typeof o){const t=e[i];n=o.call(s,t),e.splice(i,1),i--}return n})),t.formatArgs.call(s,e);(s.log||t.log).apply(s,e)}return c.namespace=e,c.useColors=t.useColors(),c.color=t.selectColor(e),c.extend=s,c.destroy=t.destroy,Object.defineProperty(c,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==i?i:(r!==t.namespaces&&(r=t.namespaces,o=t.enabled(e)),o),set:e=>{i=e}}),"function"==typeof t.init&&t.init(c),c}function s(e,n){const s=t(this.namespace+(void 0===n?":":n)+e);return s.log=this.log,s}function r(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},t.disable=function(){const e=[...t.names.map(r),...t.skips.map(r).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const s=("string"==typeof e?e:"").split(/[\s,]+/),r=s.length;for(n=0;n<r;n++)s[n]&&("-"===(e=s[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let n,s;for(n=0,s=t.skips.length;n<s;n++)if(t.skips[n].test(e))return!1;for(n=0,s=t.names.length;n<s;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(73171),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((n=>{t[n]=e[n]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t}},73171:e=>{var t=1e3,n=60*t,s=60*n,r=24*s,o=7*r,i=365.25*r;function c(e,t,n,s){var r=t>=1.5*n;return Math.round(e/n)+" "+s+(r?"s":"")}e.exports=function(e,a){a=a||{};var u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var c=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!c)return;var a=parseFloat(c[1]);switch((c[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return a*i;case"weeks":case"week":case"w":return a*o;case"days":case"day":case"d":return a*r;case"hours":case"hour":case"hrs":case"hr":case"h":return a*s;case"minutes":case"minute":case"mins":case"min":case"m":return a*n;case"seconds":case"second":case"secs":case"sec":case"s":return a*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}(e);if("number"===u&&isFinite(e))return a.long?function(e){var o=Math.abs(e);if(o>=r)return c(e,o,r,"day");if(o>=s)return c(e,o,s,"hour");if(o>=n)return c(e,o,n,"minute");if(o>=t)return c(e,o,t,"second");return e+" ms"}(e):function(e){var o=Math.abs(e);if(o>=r)return Math.round(e/r)+"d";if(o>=s)return Math.round(e/s)+"h";if(o>=n)return Math.round(e/n)+"m";if(o>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},6975:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var s=n(951);const r=n.n(s)()("dops:analytics");let o,i;window._tkq=window._tkq||[],window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date;const c={initialize:function(e,t,n){c.setUser(e,t),c.setSuperProps(n),c.identifyUser()},setGoogleAnalyticsEnabled:function(e,t=null){this.googleAnalyticsEnabled=e,this.googleAnalyticsKey=t},setMcAnalyticsEnabled:function(e){this.mcAnalyticsEnabled=e},setUser:function(e,t){i={ID:e,username:t}},setSuperProps:function(e){o=e},assignSuperProps:function(e){o=Object.assign(o||{},e)},mc:{bumpStat:function(e,t){const n=function(e,t){let n="";if("object"==typeof e){for(const t in e)n+="&x_"+encodeURIComponent(t)+"="+encodeURIComponent(e[t]);r("Bumping stats %o",e)}else n="&x_"+encodeURIComponent(e)+"="+encodeURIComponent(t),r('Bumping stat "%s" in group "%s"',t,e);return n}(e,t);c.mcAnalyticsEnabled&&((new Image).src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv"+n+"&t="+Math.random())},bumpStatWithPageView:function(e,t){const n=function(e,t){let n="";if("object"==typeof e){for(const t in e)n+="&"+encodeURIComponent(t)+"="+encodeURIComponent(e[t]);r("Built stats %o",e)}else n="&"+encodeURIComponent(e)+"="+encodeURIComponent(t),r('Built stat "%s" in group "%s"',t,e);return n}(e,t);c.mcAnalyticsEnabled&&((new Image).src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom"+n+"&t="+Math.random())}},pageView:{record:function(e,t){c.tracks.recordPageView(e),c.ga.recordPageView(e,t)}},purchase:{record:function(e,t,n,s,r,o,i){c.ga.recordPurchase(e,t,n,s,r,o,i)}},tracks:{recordEvent:function(e,t){t=t||{},0===e.indexOf("akismet_")||0===e.indexOf("jetpack_")?(o&&(r("- Super Props: %o",o),t=Object.assign(t,o)),r('Record event "%s" called with props %s',e,JSON.stringify(t)),window._tkq.push(["recordEvent",e,t])):r('- Event name must be prefixed by "akismet_" or "jetpack_"')},recordJetpackClick:function(e){const t="object"==typeof e?e:{target:e};c.tracks.recordEvent("jetpack_wpa_click",t)},recordPageView:function(e){c.tracks.recordEvent("akismet_page_view",{path:e})},setOptOut:function(e){r("Pushing setOptOut: %o",e),window._tkq.push(["setOptOut",e])}},ga:{initialized:!1,initialize:function(){let e={};c.ga.initialized||(i&&(e={userId:"u-"+i.ID}),window.ga("create",this.googleAnalyticsKey,"auto",e),c.ga.initialized=!0)},recordPageView:function(e,t){c.ga.initialize(),r("Recording Page View ~ [URL: "+e+"] [Title: "+t+"]"),this.googleAnalyticsEnabled&&(window.ga("set","page",e),window.ga("send",{hitType:"pageview",page:e,title:t}))},recordEvent:function(e,t,n,s){c.ga.initialize();let o="Recording Event ~ [Category: "+e+"] [Action: "+t+"]";void 0!==n&&(o+=" [Option Label: "+n+"]"),void 0!==s&&(o+=" [Option Value: "+s+"]"),r(o),this.googleAnalyticsEnabled&&window.ga("send","event",e,t,n,s)},recordPurchase:function(e,t,n,s,r,o,i){window.ga("require","ecommerce"),window.ga("ecommerce:addTransaction",{id:e,revenue:s,currency:i}),window.ga("ecommerce:addItem",{id:e,name:t,sku:n,price:r,quantity:o}),window.ga("ecommerce:send")}},identifyUser:function(){i&&window._tkq.push(["identifyUser",i.ID,i.username])},setProperties:function(e){window._tkq.push(["setProperties",e])},clearedIdentity:function(){window._tkq.push(["clearIdentity"])}},a=c},64743:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>p});var s=n(61132),r=n(96483);function o(e){class t extends Error{constructor(...t){super(...t),this.name=e}}return t}const i=o("JsonParseError"),c=o("JsonParseAfterRedirectError"),a=o("Api404Error"),u=o("Api404AfterRedirectError"),d=o("FetchNetworkError");const p=new function(e,t){let n=e,o=e,i={"X-WP-Nonce":t},c={credentials:"same-origin",headers:i},a={method:"post",credentials:"same-origin",headers:Object.assign({},i,{"Content-type":"application/json"})},u=function(e){const t=e.split("?"),n=t.length>1?t[1]:"",s=n.length?n.split("&"):[];return s.push("_cacheBuster="+(new Date).getTime()),t[0]+"?"+s.join("&")};const d={setApiRoot(e){n=e},setWpcomOriginApiUrl(e){o=e},setApiNonce(e){i={"X-WP-Nonce":e},c={credentials:"same-origin",headers:i},a={method:"post",credentials:"same-origin",headers:Object.assign({},i,{"Content-type":"application/json"})}},setCacheBusterCallback:e=>{u=e},registerSite:(e,t,r)=>{const o={registration_nonce:e,no_iframe:!0};return(0,s.jetpackConfigHas)("consumer_slug")&&(o.plugin_slug=(0,s.jetpackConfigGet)("consumer_slug")),null!==t&&(o.redirect_uri=t),r&&(o.from=r),g(`${n}jetpack/v4/connection/register`,a,{body:JSON.stringify(o)}).then(l).then(h)},fetchAuthorizationUrl:e=>p((0,r.addQueryArgs)(`${n}jetpack/v4/connection/authorize_url`,{no_iframe:"1",redirect_uri:e}),c).then(l).then(h),fetchSiteConnectionData:()=>p(`${n}jetpack/v4/connection/data`,c).then(h),fetchSiteConnectionStatus:()=>p(`${n}jetpack/v4/connection`,c).then(h),fetchSiteConnectionTest:()=>p(`${n}jetpack/v4/connection/test`,c).then(l).then(h),fetchUserConnectionData:()=>p(`${n}jetpack/v4/connection/data`,c).then(h),fetchUserTrackingSettings:()=>p(`${n}jetpack/v4/tracking/settings`,c).then(l).then(h),updateUserTrackingSettings:e=>g(`${n}jetpack/v4/tracking/settings`,a,{body:JSON.stringify(e)}).then(l).then(h),disconnectSite:()=>g(`${n}jetpack/v4/connection`,a,{body:JSON.stringify({isActive:!1})}).then(l).then(h),fetchConnectUrl:()=>p(`${n}jetpack/v4/connection/url`,c).then(l).then(h),unlinkUser:()=>g(`${n}jetpack/v4/connection/user`,a,{body:JSON.stringify({linked:!1})}).then(l).then(h),reconnect:()=>g(`${n}jetpack/v4/connection/reconnect`,a).then(l).then(h),fetchConnectedPlugins:()=>p(`${n}jetpack/v4/connection/plugins`,c).then(l).then(h),setHasSeenWCConnectionModal:()=>g(`${n}jetpack/v4/seen-wc-connection-modal`,a).then(l).then(h),fetchModules:()=>p(`${n}jetpack/v4/module/all`,c).then(l).then(h),fetchModule:e=>p(`${n}jetpack/v4/module/${e}`,c).then(l).then(h),activateModule:e=>g(`${n}jetpack/v4/module/${e}/active`,a,{body:JSON.stringify({active:!0})}).then(l).then(h),deactivateModule:e=>g(`${n}jetpack/v4/module/${e}/active`,a,{body:JSON.stringify({active:!1})}),updateModuleOptions:(e,t)=>g(`${n}jetpack/v4/module/${e}`,a,{body:JSON.stringify(t)}).then(l).then(h),updateSettings:e=>g(`${n}jetpack/v4/settings`,a,{body:JSON.stringify(e)}).then(l).then(h),getProtectCount:()=>p(`${n}jetpack/v4/module/protect/data`,c).then(l).then(h),resetOptions:e=>g(`${n}jetpack/v4/options/${e}`,a,{body:JSON.stringify({reset:!0})}).then(l).then(h),activateVaultPress:()=>g(`${n}jetpack/v4/plugins`,a,{body:JSON.stringify({slug:"vaultpress",status:"active"})}).then(l).then(h),getVaultPressData:()=>p(`${n}jetpack/v4/module/vaultpress/data`,c).then(l).then(h),installPlugin:(e,t)=>{const s={slug:e,status:"active"};return t&&(s.source=t),g(`${n}jetpack/v4/plugins`,a,{body:JSON.stringify(s)}).then(l).then(h)},activateAkismet:()=>g(`${n}jetpack/v4/plugins`,a,{body:JSON.stringify({slug:"akismet",status:"active"})}).then(l).then(h),getAkismetData:()=>p(`${n}jetpack/v4/module/akismet/data`,c).then(l).then(h),checkAkismetKey:()=>p(`${n}jetpack/v4/module/akismet/key/check`,c).then(l).then(h),checkAkismetKeyTyped:e=>g(`${n}jetpack/v4/module/akismet/key/check`,a,{body:JSON.stringify({api_key:e})}).then(l).then(h),fetchStatsData:e=>p(function(e){let t=`${n}jetpack/v4/module/stats/data`;-1!==t.indexOf("?")?t+=`&range=${encodeURIComponent(e)}`:t+=`?range=${encodeURIComponent(e)}`;return t}(e),c).then(l).then(h).then(m),getPluginUpdates:()=>p(`${n}jetpack/v4/updates/plugins`,c).then(l).then(h),getPlans:()=>p(`${n}jetpack/v4/plans`,c).then(l).then(h),fetchSettings:()=>p(`${n}jetpack/v4/settings`,c).then(l).then(h),updateSetting:e=>g(`${n}jetpack/v4/settings`,a,{body:JSON.stringify(e)}).then(l).then(h),fetchSiteData:()=>p(`${n}jetpack/v4/site`,c).then(l).then(h).then((e=>JSON.parse(e.data))),fetchSiteFeatures:()=>p(`${n}jetpack/v4/site/features`,c).then(l).then(h).then((e=>JSON.parse(e.data))),fetchSiteProducts:()=>p(`${n}jetpack/v4/site/products`,c).then(l).then(h),fetchSitePurchases:()=>p(`${n}jetpack/v4/site/purchases`,c).then(l).then(h).then((e=>JSON.parse(e.data))),fetchSiteBenefits:()=>p(`${n}jetpack/v4/site/benefits`,c).then(l).then(h).then((e=>JSON.parse(e.data))),fetchSiteDiscount:()=>p(`${n}jetpack/v4/site/discount`,c).then(l).then(h).then((e=>e.data)),fetchSetupQuestionnaire:()=>p(`${n}jetpack/v4/setup/questionnaire`,c).then(l).then(h),fetchRecommendationsData:()=>p(`${n}jetpack/v4/recommendations/data`,c).then(l).then(h),fetchRecommendationsProductSuggestions:()=>p(`${n}jetpack/v4/recommendations/product-suggestions`,c).then(l).then(h),fetchRecommendationsUpsell:()=>p(`${n}jetpack/v4/recommendations/upsell`,c).then(l).then(h),fetchRecommendationsConditional:()=>p(`${n}jetpack/v4/recommendations/conditional`,c).then(l).then(h),saveRecommendationsData:e=>g(`${n}jetpack/v4/recommendations/data`,a,{body:JSON.stringify({data:e})}).then(l),fetchProducts:()=>p(`${n}jetpack/v4/products`,c).then(l).then(h),fetchRewindStatus:()=>p(`${n}jetpack/v4/rewind`,c).then(l).then(h).then((e=>JSON.parse(e.data))),fetchScanStatus:()=>p(`${n}jetpack/v4/scan`,c).then(l).then(h).then((e=>JSON.parse(e.data))),dismissJetpackNotice:e=>g(`${n}jetpack/v4/notice/${e}`,a,{body:JSON.stringify({dismissed:!0})}).then(l).then(h),fetchPluginsData:()=>p(`${n}jetpack/v4/plugins`,c).then(l).then(h),fetchIntroOffers:()=>p(`${n}jetpack/v4/intro-offers`,c).then(l).then(h),fetchVerifySiteGoogleStatus:e=>p(null!==e?`${n}jetpack/v4/verify-site/google/${e}`:`${n}jetpack/v4/verify-site/google`,c).then(l).then(h),verifySiteGoogle:e=>g(`${n}jetpack/v4/verify-site/google`,a,{body:JSON.stringify({keyring_id:e})}).then(l).then(h),submitSurvey:e=>g(`${n}jetpack/v4/marketing/survey`,a,{body:JSON.stringify(e)}).then(l).then(h),saveSetupQuestionnaire:e=>g(`${n}jetpack/v4/setup/questionnaire`,a,{body:JSON.stringify(e)}).then(l).then(h),updateLicensingError:e=>g(`${n}jetpack/v4/licensing/error`,a,{body:JSON.stringify(e)}).then(l).then(h),updateLicenseKey:e=>g(`${n}jetpack/v4/licensing/set-license`,a,{body:JSON.stringify({license:e})}).then(l).then(h),getUserLicensesCounts:()=>p(`${n}jetpack/v4/licensing/user/counts`,c).then(l).then(h),getUserLicenses:()=>p(`${n}jetpack/v4/licensing/user/licenses`,c).then(l).then(h),updateLicensingActivationNoticeDismiss:e=>g(`${n}jetpack/v4/licensing/user/activation-notice-dismiss`,a,{body:JSON.stringify({last_detached_count:e})}).then(l).then(h),updateRecommendationsStep:e=>g(`${n}jetpack/v4/recommendations/step`,a,{body:JSON.stringify({step:e})}).then(l),confirmIDCSafeMode:()=>g(`${n}jetpack/v4/identity-crisis/confirm-safe-mode`,a).then(l),startIDCFresh:e=>g(`${n}jetpack/v4/identity-crisis/start-fresh`,a,{body:JSON.stringify({redirect_uri:e})}).then(l).then(h),migrateIDC:()=>g(`${n}jetpack/v4/identity-crisis/migrate`,a).then(l),attachLicenses:e=>g(`${n}jetpack/v4/licensing/attach-licenses`,a,{body:JSON.stringify({licenses:e})}).then(l).then(h),fetchSearchPlanInfo:()=>p(`${o}jetpack/v4/search/plan`,c).then(l).then(h),fetchSearchSettings:()=>p(`${o}jetpack/v4/search/settings`,c).then(l).then(h),updateSearchSettings:e=>g(`${o}jetpack/v4/search/settings`,a,{body:JSON.stringify(e)}).then(l).then(h),fetchSearchStats:()=>p(`${o}jetpack/v4/search/stats`,c).then(l).then(h),fetchWafSettings:()=>p(`${n}jetpack/v4/waf`,c).then(l).then(h),updateWafSettings:e=>g(`${n}jetpack/v4/waf`,a,{body:JSON.stringify(e)}).then(l).then(h),fetchWordAdsSettings:()=>p(`${n}jetpack/v4/wordads/settings`,c).then(l).then(h),updateWordAdsSettings:e=>g(`${n}jetpack/v4/wordads/settings`,a,{body:JSON.stringify(e)}),fetchSearchPricing:()=>p(`${o}jetpack/v4/search/pricing`,c).then(l).then(h),fetchMigrationStatus:()=>p(`${n}jetpack/v4/migration/status`,c).then(l).then(h),fetchBackupUndoEvent:()=>p(`${n}jetpack/v4/site/backup/undo-event`,c).then(l).then(h),fetchBackupPreflightStatus:()=>p(`${n}jetpack/v4/site/backup/preflight`,c).then(l).then(h)};function p(e,t){return fetch(u(e),t)}function g(e,t,n){return fetch(e,Object.assign({},t,n)).catch(f)}function m(e){return e.general&&void 0===e.general.response||e.week&&void 0===e.week.response||e.month&&void 0===e.month.response?e:{}}Object.assign(this,d)};function l(e){return e.status>=200&&e.status<300?e:404===e.status?new Promise((()=>{throw e.redirected?new u(e.redirected):new a})):e.json().catch((e=>g(e))).then((t=>{const n=new Error(`${t.message} (Status ${e.status})`);throw n.response=t,n.name="ApiError",n}))}function h(e){return e.json().catch((t=>g(t,e.redirected,e.url)))}function g(e,t,n){throw t?new c(n):new i}function f(){throw new d}},61132:(e,t,n)=>{let s={};try{s=n(76354)}catch{console.error("jetpackConfig is missing in your webpack config file. See @automattic/jetpack-config"),s={missingConfig:!0}}const r=e=>Object.hasOwn(s,e);e.exports={jetpackConfigHas:r,jetpackConfigGet:e=>{if(!r(e))throw'This app requires the "'+e+'" Jetpack Config to be defined in your webpack configuration file. See details in @automattic/jetpack-config package docs.';return s[e]}}},31294:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var s=n(64743),r=n(51732),o=n(9818),i=n(99196),c=n(80428);const a=window?.JP_CONNECTION_INITIAL_STATE||(0,r.getScriptData)()?.connection||{},u=({registrationNonce:e=a.registrationNonce,apiRoot:t=a.apiRoot,apiNonce:n=a.apiNonce,redirectUri:r,autoTrigger:u,from:d,skipUserConnection:p}={})=>{const{registerSite:l,connectUser:h,refreshConnectedPlugins:g}=(0,o.useDispatch)(c.t),f=(0,o.useSelect)((e=>e(c.t).getRegistrationError())),{siteIsRegistering:m,userIsConnecting:w,userConnectionData:C,connectedPlugins:y,connectionErrors:v,isRegistered:k,isUserConnected:S,hasConnectedOwner:E,isOfflineMode:j}=(0,o.useSelect)((e=>({siteIsRegistering:e(c.t).getSiteIsRegistering(),userIsConnecting:e(c.t).getUserIsConnecting(),userConnectionData:e(c.t).getUserConnectionData(),connectedPlugins:e(c.t).getConnectedPlugins(),connectionErrors:e(c.t).getConnectionErrors(),isOfflineMode:e(c.t).getIsOfflineMode(),...e(c.t).getConnectionStatus()}))),b=()=>p?r?(window.location=r,Promise.resolve(r)):Promise.resolve():h({from:d,redirectUri:r}),_=t=>(t&&t.preventDefault(),k?b():l({registrationNonce:e,redirectUri:r,from:d}).then((()=>b())));return(0,i.useEffect)((()=>{s.ZP.setApiRoot(t),s.ZP.setApiNonce(n)}),[t,n]),(0,i.useEffect)((()=>{!u||m||w||_()}),[]),{handleRegisterSite:_,handleConnectUser:b,refreshConnectedPlugins:g,isRegistered:k,isUserConnected:S,siteIsRegistering:m,userIsConnecting:w,registrationError:f,userConnectionData:C,hasConnectedOwner:E,connectedPlugins:y,connectionErrors:v,isOfflineMode:j}}},27523:(e,t,n)=>{"use strict";n.d(t,{LI:()=>o,N4:()=>c,Qo:()=>p,T1:()=>u,TS:()=>d,ZP:()=>S,b5:()=>h,i6:()=>r,qJ:()=>g,qV:()=>a,r7:()=>i,wQ:()=>l});var s=n(64743);const r="SET_CONNECTION_STATUS",o="SET_CONNECTION_STATUS_IS_FETCHING",i="SET_SITE_IS_REGISTERING",c="SET_USER_IS_CONNECTING",a="SET_REGISTRATION_ERROR",u="CLEAR_REGISTRATION_ERROR",d="SET_AUTHORIZATION_URL",p="DISCONNECT_USER_SUCCESS",l="SET_CONNECTED_PLUGINS",h="SET_CONNECTION_ERRORS",g="SET_IS_OFFLINE_MODE",f=e=>({type:r,connectionStatus:e}),m=e=>({type:i,isRegistering:e}),w=e=>({type:c,isConnecting:e}),C=e=>({type:a,registrationError:e}),y=()=>({type:u}),v=e=>({type:d,authorizationUrl:e}),k=e=>({type:l,connectedPlugins:e});const S={setConnectionStatus:f,setConnectionStatusIsFetching:e=>({type:o,isFetching:e}),fetchConnectionStatus:()=>({type:"FETCH_CONNECTION_STATUS"}),fetchAuthorizationUrl:e=>({type:"FETCH_AUTHORIZATION_URL",redirectUri:e}),setSiteIsRegistering:m,setUserIsConnecting:w,setRegistrationError:C,clearRegistrationError:y,setAuthorizationUrl:v,registerSite:function*({registrationNonce:e,redirectUri:t,from:n=""}){yield y(),yield m(!0);try{const s=yield{type:"REGISTER_SITE",registrationNonce:e,redirectUri:t,from:n};return yield f({isRegistered:!0}),yield v(s.authorizeUrl),yield m(!1),Promise.resolve(s)}catch(e){return yield C(e),yield m(!1),Promise.reject(e)}},connectUser:function*({from:e,redirectFunc:t,redirectUri:n}={}){yield w(!0),yield{type:"CONNECT_USER",from:e,redirectFunc:t,redirectUri:n}},disconnectUserSuccess:()=>({type:p}),setConnectedPlugins:k,refreshConnectedPlugins:()=>async({dispatch:e})=>await new Promise((t=>s.ZP.fetchConnectedPlugins().then((n=>{e(k(n)),t(n)})))),setConnectionErrors:e=>({type:h,connectionErrors:e}),setIsOfflineMode:e=>({type:g,isOfflineMode:e})}},31432:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var s=n(64743),r=n(9818),o=n(27057);const i={FETCH_AUTHORIZATION_URL:({redirectUri:e})=>s.ZP.fetchAuthorizationUrl(e),REGISTER_SITE:({registrationNonce:e,redirectUri:t,from:n})=>s.ZP.registerSite(e,t,n),CONNECT_USER:(0,r.createRegistryControl)((({resolveSelect:e})=>({from:t,redirectFunc:n,redirectUri:s}={})=>new Promise(((r,i)=>{e(o.Z).getAuthorizationUrl(s).then((e=>{const s=n||(e=>window.location.assign(e)),o=new URL(e);t&&o.searchParams.set("from",encodeURIComponent(t));const i=o.toString();s(i),r(i)})).catch((e=>{i(e)}))}))))}},41479:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var s=n(9818),r=n(27523);const o=(0,s.combineReducers)({connectionStatus:(e={},t)=>{switch(t.type){case r.i6:return{...e,...t.connectionStatus};case r.Qo:return{...e,isUserConnected:!1}}return e},connectionStatusIsFetching:(e=!1,t)=>t.type===r.LI?t.isFetching:e,siteIsRegistering:(e=!1,t)=>t.type===r.r7?t.isRegistering:e,userIsConnecting:(e=!1,t)=>t.type===r.N4?t.isConnecting:e,registrationError:(e,t)=>{switch(t.type){case r.T1:return!1;case r.qV:return t.registrationError;default:return e}},authorizationUrl:(e,t)=>t.type===r.TS?t.authorizationUrl:e,userConnectionData:(e,t)=>(t.type,e),connectedPlugins:(e={},t)=>t.type===r.wQ?t.connectedPlugins:e,connectionErrors:(e={},t)=>t.type===r.b5?t.connectionErrors:e,isOfflineMode:(e=!1,t)=>t.type===r.qJ?t.isConnecting:e})},77728:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var s=n(9818),r=n(27523),o=n(27057);const i={...{getAuthorizationUrl:{isFulfilled:(e,...t)=>{const n=Boolean(e.authorizationUrl),r=(0,s.select)(o.Z).hasFinishedResolution("getAuthorizationUrl",t);return n&&!r&&(0,s.dispatch)(o.Z).finishResolution("getAuthorizationUrl",t),n},*fulfill(e){const t=yield r.ZP.fetchAuthorizationUrl(e);yield r.ZP.setAuthorizationUrl(t.authorizeUrl)}}}}},82725:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});const s={...{getConnectionStatus:e=>e.connectionStatus||{},getConnectionStatusIsFetching:()=>!1,getSiteIsRegistering:e=>e.siteIsRegistering||!1,getUserIsConnecting:e=>e.userIsConnecting||!1,getRegistrationError:e=>e.registrationError||!1,getAuthorizationUrl:e=>e.authorizationUrl||!1,getUserConnectionData:e=>e.userConnectionData||!1,getConnectedPlugins:e=>e.connectedPlugins||[],getConnectionErrors:e=>e.connectionErrors||[],getIsOfflineMode:e=>e.isOfflineMode||!1,getWpcomUser:e=>e?.userConnectionData?.currentUser?.wpcomUser,getBlogId:e=>e?.userConnectionData?.currentUser?.blogId}}},13535:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var s=n(9818);class r{static store=null;static mayBeInit(e,t){null===r.store&&(r.store=(0,s.createReduxStore)(e,t),(0,s.register)(r.store))}}const o=r},27057:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});const s="jetpack-connection"},80428:(e,t,n)=>{"use strict";n.d(t,{t:()=>d.Z});var s=n(51732),r=n(27523),o=n(31432),i=n(41479),c=n(77728),a=n(82725),u=n(13535),d=n(27057);const p=window.JP_CONNECTION_INITIAL_STATE||(0,s.getScriptData)()?.connection;p||console.error("Jetpack Connection package: Initial state is missing. Check documentation to see how to use the Connection composer package to set up the initial state."),u.Z.mayBeInit(d.Z,{__experimentalUseThunks:!0,reducer:i.Z,actions:r.ZP,selectors:a.Z,resolvers:c.Z,controls:o.Z,initialState:p||{}})},13419:(e,t,n)=>{"use strict";n.d(t,{z$:()=>s.Z});n(76714),n(80354),n(75404);var s=n(61053);n(11380),n(6342),n(96959),n(39058)},6342:(e,t,n)=>{"use strict";n(99196)},96959:(e,t,n)=>{"use strict";n(69307)},61053:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var s=n(6975),r=n(31294),o=n(69307);const{tracks:i}=s.Z,{recordEvent:c}=i,a=({pageViewEventName:e=null,pageViewNamespace:t="jetpack",pageViewSuffix:n="page_view",pageViewEventProperties:a={}}={})=>{const[u,d]=(0,o.useState)(!1),{isUserConnected:p,isRegistered:l,userConnectionData:h={}}=(0,r.Z)(),{wpcomUser:{login:g,ID:f}={},blogId:m}=h.currentUser||{},w=(0,o.useCallback)((async(e,t={})=>{p&&f&&g&&c(e,t)}),[p,f,g]);return(0,o.useEffect)((()=>{p&&f&&g&&m&&s.Z.initialize(f,g,{blog_id:m})}),[m,f,g,p]),(0,o.useEffect)((()=>{const s=e?`${t}_${e}_${n}`:null;l&&s&&(u||(w(s,a),d(!0)))}),[u,t,e,n,l,a,w]),{recordEvent:w,tracks:i}}},11380:(e,t,n)=>{"use strict";n(9818),n(69307),n(39058)},44166:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>l,rW:()=>p});var s=n(9818),r=n(99505),o=n(82162),i=n(39058);const c="SET_JETPACK_MODULES",a="SET_MODULE_UPDATING";function u(e){return p({isLoading:e})}function d(e,t){return{type:a,name:e,isUpdating:t}}function p(e){return{type:c,options:e}}const l={updateJetpackModuleStatus:function*(e){try{yield d(e.name,!0),yield(0,o.zL)(e);const t=yield(0,o.Bs)();return yield p({data:t}),!0}catch(e){const t=(0,s.select)(i.p).getJetpackModules();return yield p(t),!1}finally{yield d(e.name,!1)}},setJetpackModules:p,fetchModules:function*(){if((0,r.Wp)())return!0;try{yield u(!0);const e=yield(0,o.Bs)();return yield p({data:e}),!0}catch(e){const t=(0,s.select)(i.p).getJetpackModules();return yield p(t),!1}finally{yield u(!1)}}}},82162:(e,t,n)=>{"use strict";n.d(t,{Bs:()=>c,ZP:()=>u,zL:()=>a});var s=n(86989),r=n.n(s);const o="FETCH_JETPACK_MODULES",i="UPDATE_JETPACK_MODULE_STATUS",c=()=>({type:o}),a=e=>({type:i,settings:e}),u={[o]:function(){return r()({path:"/jetpack/v4/module/all",method:"GET"})},[i]:function({settings:e}){return r()({path:`/jetpack/v4/module/${e.name}/active`,method:"POST",data:{active:e.active}})}}},39058:(e,t,n)=>{"use strict";n.d(t,{p:()=>u});var s=n(9818),r=n(44166),o=n(82162),i=n(42469),c=n(55133),a=n(43524);const u="jetpack-modules",d=(0,s.createReduxStore)(u,{reducer:i.Z,actions:r.ZP,controls:o.ZP,resolvers:c.Z,selectors:a.Z});(0,s.register)(d);const p=window?.Initial_State?.getModules||window?.Jetpack_Editor_Initial_State?.modules||null;null!==p&&(0,s.dispatch)(u).setJetpackModules({data:{...p}})},42469:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const s={isLoading:!1,isUpdating:{},data:{}},r=(e=s,t)=>{switch(t.type){case"SET_JETPACK_MODULES":return{...e,...t.options};case"SET_MODULE_UPDATING":return{...e,isUpdating:{...e.isUpdating,[t.name]:t.isUpdating}}}return e}},55133:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var s=n(44166),r=n(82162);const o={getJetpackModules:function*(){try{const e=yield(0,r.Bs)();if(e)return(0,s.rW)({data:e})}catch(e){console.error(e)}}}},43524:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var s=n(99505);const r={getJetpackModules:e=>e.data,isModuleActive:(e,t)=>(0,s.Wp)()||(e?.data?.[t]?.activated??!1),areModulesLoading:e=>e.isLoading??!1,isModuleUpdating:(e,t)=>e?.isUpdating?.[t]??!1}},75404:(e,t,n)=>{"use strict";var s=n(65736);n(96483),n(92819);const __=s.__;__("Upgrade your plan to use video covers","jetpack-mu-wpcom"),__("Upgrade your plan to upload audio","jetpack-mu-wpcom")},76714:(e,t,n)=>{"use strict";n(98817)},99505:(e,t,n)=>{"use strict";function s(){return"object"==typeof window&&"string"==typeof window._currentSiteType?window._currentSiteType:null}function r(){return"simple"===s()}n.d(t,{Wp:()=>r})},80354:(e,t,n)=>{"use strict";n(82674),n(94333)},76354:e=>{"use strict";if(void 0==={consumer_slug:"jetpack-mu-wpcom"}){var t=new Error('Cannot find module \'{"consumer_slug":"jetpack-mu-wpcom"}\'');throw t.code="MODULE_NOT_FOUND",t}e.exports={consumer_slug:"jetpack-mu-wpcom"}},51732:e=>{"use strict";e.exports=window.JetpackScriptDataModule},99196:e=>{"use strict";e.exports=window.React},99501:e=>{"use strict";e.exports=window.ReactJSXRuntime},92819:e=>{"use strict";e.exports=window.lodash},86989:e=>{"use strict";e.exports=window.wp.apiFetch},55609:e=>{"use strict";e.exports=window.wp.components},94333:e=>{"use strict";e.exports=window.wp.compose},9818:e=>{"use strict";e.exports=window.wp.data},69307:e=>{"use strict";e.exports=window.wp.element},92694:e=>{"use strict";e.exports=window.wp.hooks},65736:e=>{"use strict";e.exports=window.wp.i18n},98817:e=>{"use strict";e.exports=window.wp.plugins},96483:e=>{"use strict";e.exports=window.wp.url},82674:e=>{function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(34369),t=n(13419),s=n(55609),r=n(94333),o=n(92694);const i=(0,r.createHigherOrderComponent)((n=>r=>{const{tracks:o}=(0,t.z$)();return"post_tag"===r.slug&&window.wpcomTagsEducation?React.createElement(React.Fragment,null,React.createElement(n,r),React.createElement(s.ExternalLink,{href:(0,e.aq)("https://wordpress.com/support/posts/tags/"),onClick:()=>{o.recordEvent("jetpack_mu_wpcom_tags_education_link_click")}},window.wpcomTagsEducation.actionText)):React.createElement(n,r)}),"addTagsEducationLink");(0,o.addFilter)("editor.PostTaxonomyType","jetpack-mu-wpcom/add-tags-education-link",i)})()})();