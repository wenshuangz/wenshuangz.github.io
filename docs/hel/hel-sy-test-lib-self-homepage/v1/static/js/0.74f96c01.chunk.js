/*! For license information please see 0.74f96c01.chunk.js.LICENSE.txt */
(this["helJsonp_hel-sy-test-lib-self-homepage_1665285664872"]=this["helJsonp_hel-sy-test-lib-self-homepage_1665285664872"]||[]).push([[0],[,,function(t,e,r){"use strict";r.r(e);var n={get num1to9(){return/^[1-9]+[0-9]*$/},get en(){return/^[A-Za-z]+$/},get enSnake(){return/^[a-z][_0-9a-z]*[a-z0-9]+$/},get enOrNumOrUnderline(){return/^[A-Za-z0-9_]+$/},get enOrNum(){return/^[A-Za-z0-9]+$/}};e.default=n},function(t,e,r){"use strict";r.r(e),r.d(e,"canBeNum",(function(){return o})),r.d(e,"random",(function(){return a})),r.d(e,"add",(function(){return i})),r.d(e,"del",(function(){return u}));var n=r(2);function o(t){var e=typeof t;if("string"===e){if(t.includes(".")){var r=t.replace(/\./g,"");if(!n.default.num1to9.test(r))return!1;var o=parseFloat(t);return!Number.isNaN(o)}return n.default.num1to9.test(t)}return"number"===e}function a(t){return Math.floor(t*Math.random())}function i(t,e){return t+e+2}function u(t,e){return t-e}},function(t,e,r){"use strict";r.r(e),function(t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(p){u=!0,o=p}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}(t,e)||u(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||u(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){if(t){if("string"===typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(t,e):void 0}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"DEFAULT_ONLINE_VER",(function(){return W})),r.d(e,"allowLog",(function(){return Q})),r.d(e,"default",(function(){return Pt})),r.d(e,"getAppMeta",(function(){return dt})),r.d(e,"getAppPlatform",(function(){return Lt})),r.d(e,"getAppStyleStr",(function(){return Ot})),r.d(e,"getGlobalThis",(function(){return tt})),r.d(e,"getHelDebug",(function(){return X})),r.d(e,"getHelEventBus",(function(){return rt})),r.d(e,"getPlatform",(function(){return J})),r.d(e,"getPlatformConfig",(function(){return lt})),r.d(e,"getPlatformHost",(function(){return ut})),r.d(e,"getSharedCache",(function(){return nt})),r.d(e,"getVerApp",(function(){return st})),r.d(e,"getVerExtraCssList",(function(){return yt})),r.d(e,"getVerLib",(function(){return gt})),r.d(e,"getVerLoadStatus",(function(){return At})),r.d(e,"getVerStyleStrStatus",(function(){return _t})),r.d(e,"getVersion",(function(){return Et})),r.d(e,"helEvents",(function(){return K})),r.d(e,"helLoadStatus",(function(){return Z})),r.d(e,"initPlatformConfig",(function(){return ct})),r.d(e,"isSubApp",(function(){return $})),r.d(e,"libReady",(function(){return it})),r.d(e,"log",(function(){return Y})),r.d(e,"setAppMeta",(function(){return mt})),r.d(e,"setAppPlatform",(function(){return Nt})),r.d(e,"setAppStyleStr",(function(){return Mt})),r.d(e,"setEmitApp",(function(){return ft})),r.d(e,"setEmitLib",(function(){return vt})),r.d(e,"setGlobalThis",(function(){return et})),r.d(e,"setVerExtraCssList",(function(){return ht})),r.d(e,"setVerLoadStatus",(function(){return bt})),r.d(e,"setVerStyleStrStatus",(function(){return St})),r.d(e,"setVersion",(function(){return Vt})),r.d(e,"tryGetAppName",(function(){return at})),r.d(e,"tryGetVersion",(function(){return ot})),r.d(e,"trySetMasterAppLoadedSignal",(function(){return q}));var c={NOT_LOAD:0,LOADING:1,LOADED:2},l=["ht","tps",":/","/foo","tpri","nt.q","q.c","om/"].join("");function f(t){return"unpkg"===t?"https://unpkg.com":function(t){return"".concat(l).concat(t)}()}var s=null;function d(){if(s)return s;try{if("undefined"!==typeof window)return window;if("undefined"!==typeof self)return self;if("undefined"!==typeof t)return t;throw new Error("opps")}catch(e){throw new Error("unable to locate global object")}}function m(){return d()}var v=m().__HEL_MICRO_DEBUG__;function g(){return v}function h(t,e){return e.includes(",")?e.split(",").some((function(e){return t.includes(e)})):t.includes(e)}function y(){return 0!==A()}function b(t){g().logMode=t}function A(){return g().logMode}function S(t){g().logFilter=t}function _(){return g().logFilter}if(v?void 0===v.logMode&&(v.logMode=0,v.logFilter=""):(v={logMode:0,logFilter:"",isInit:!1},m().__HEL_MICRO_DEBUG__=v),!g().isInit){g().isInit=!0;var N=function(){var t=function(){try{var t,e;return(null===(t=d().top)||void 0===t||null===(e=t.location)||void 0===e?void 0:e.search)||""}catch(o){var r,n;return(null===(r=d())||void 0===r||null===(n=r.location)||void 0===n?void 0:n.search)||""}}(),e={};return t&&t.startsWith("?")?(t.substring(1).split("&").forEach((function(t){var r=a(t.split("="),2),n=r[0],o=r[1];e[n]=o})),e):e}(),L=N.hellog,E=N.hellogf;"1"==L?b(1):"2"==L&&b(2),E&&S(E)}var V="  %c--\x3e HEL LOG:",O="color:#ad4e00;font-weight:600";function M(){if(y()){for(var t=1===A()?console.log:console.trace||console.log,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var o=r[0],a=r.slice(1);if("string"===typeof o){var u=_(),p=["".concat(V," ").concat(o),O].concat(i(a));return u?void(h(o,u)&&t.apply(void 0,i(p))):void t.apply(void 0,i(p))}t.apply(void 0,[V,O].concat(r))}}function P(){var t="";try{throw new Error("getJsRunLocation")}catch(r){var e=r.stack.split("\n");t=e[e.length-1]||""}return t}function w(t,e,r,n){I(t,e)[r]=n}function I(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t[e];return n||(n=r,t[e]=n),n}var C=m().__HEL_MICRO_SHARED__;function x(t){return{isConfigOverwrite:!1,isInnerConfigOverwrite:!1,platform:t,initPack:"out",apiMode:"jsonp",apiPrefix:"",apiSuffix:"",strictMatchVer:!0,apiPathOfApp:"/openapi/v1/app/info",apiPathOfAppVersion:"",getSubAppAndItsVersionFn:null,onFetchMetaFailed:null,userLsKey:"",getUserName:null,appName2Comp:{},appName2Lib:{},appName2isLibAssigned:{},appName2EmitApp:{},appName2verLoadStatus:{},appName2verEmitLib:{},appName2verEmitApp:{},appName2verStyleStr:{},appName2verStyleFetched:{},appName2verExtraCssList:{},appName2verAppVersion:{},appName2app:{},appName2appVersion:{},appName2styleStr:{},appGroupName2firstVer:{}}}function D(){return C}function F(){return D().cacheRoot.platform||"unpkg"}function G(t){var e=t||F(),r=R(),n=r.caches[e];if(!n){var o=x(t);r.caches[e]=o,n=o}return n}function R(){return D().cacheRoot}function j(t,e){return!e||((null===t||void 0===t?void 0:t.online_version)===e||(null===t||void 0===t?void 0:t.build_version)===e)}var k=!1,H=!1;function T(){if(!0!==H){H=!0;var t=d();void 0===t.__MASTER_APP_LOADED__&&(t.__MASTER_APP_LOADED__=!0,k=!0)}}M("hel-micro-core ver ".concat("3.9.5")),T(),function(){if(C){var t=C.cacheRoot;I(t,"appGroupName2platform");var e=t.caches;Object.keys(e).forEach((function(t){var r=e[t];I(r,"appGroupName2firstVer"),I(r,"appName2verExtraCssList")}))}else C=function(){var t,e={},r=x("hel"),n=x("unpkg"),a={platform:"",appName2platform:{},appGroupName2platform:{},caches:(t={},o(t,"hel",r),o(t,"unpkg",n),t)};return{createFeature:P(),eventBus:{on:function(t,r){var n=e[t];if(!n){var o=[];e[t]=o,n=o}n.push(r)},emit:function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];var a=e[t];a&&a.forEach((function(t){return t.apply(void 0,n)}))},off:function(t,r){var n=e[t];if(n)for(var o=0,a=n.length;o<a;o++){if(n[o]===r){n.splice(o,1);break}}}},cacheRoot:a,unpkgCache:n,helCache:r,dev:{setLogMode:b,setLogFilter:S}}}(),m().__HEL_MICRO_SHARED__=C}();var B=function(t,e,r,n){var o=n||{},a=o.versionId;w(nt(o.platform)[r],t,a||W,e)},U=function(t,e,r){var n,o=r||{},a=o.versionId,i=nt(o.platform)[e],u=a||W;return(null===(n=i[t])||void 0===n?void 0:n[u])||c.NOT_LOAD},z=function(t,e,r){if(!t[W]){var n=dt(e,r),o=t[null===n||void 0===n?void 0:n.online_version];o&&(t[W]=o)}},$=function(){return!k},q=T,J=F,K={SUB_APP_LOADED:"subAppLoaded",SUB_LIB_LOADED:"SubLibLoaded",STYLE_STR_FETCHED:"StyleStrFetched"},Z=c,W="__default_online_ver__",Y=M,Q=y,X=g,tt=d,et=function(t){s=t};function rt(){return D().eventBus}function nt(t){return G(t)}function ot(t,e){var r=P();M("[[tryGetVersion]] may include source > ".concat(r));var n=nt(e).appGroupName2firstVer[t]||"";if(r.includes("https://")||r.includes("http://")){var o=a(r.split("//"),2)[1].split("/");if(n){if("unpkg"===e&&o.some((function(t){return t.includes(n)})))return n;if(o.includes(n))return n}return"unpkg"===e?o[1].split("@")[1]||n:o[2]||n}return n}function at(t,e){return t.includes("_")?t.substring(0,t.length-15):e||""}function it(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.platform||Lt(t),o=ot(t,n),a=at(o,t),i=dt(a,n);i&&i.__fromCust&&(o=i.online_version,a=i.name);var u={platform:n,appName:a,appGroupName:t,versionId:o,appProperties:e,Comp:function(){},lifecycle:{}};vt(a,u,{appGroupName:t,platform:n});var p=rt();p.emit(K.SUB_LIB_LOADED,u)}function ut(t){var e=t||J(),r=nt(e).apiPrefix;return r||f(e)}function pt(t){return{apiMode:t.apiMode,apiPrefix:t.apiPrefix,apiSuffix:t.apiSuffix,apiPathOfApp:t.apiPathOfApp,apiPathOfAppVersion:t.apiPathOfAppVersion,getSubAppAndItsVersionFn:t.getSubAppAndItsVersionFn,onFetchMetaFailed:t.onFetchMetaFailed,strictMatchVer:t.strictMatchVer,getUserName:t.getUserName,userLsKey:t.userLsKey,platform:t.platform}}function ct(t,e){var r,n,o=G(e),a=pt(t);o.isConfigOverwrite||(o.isConfigOverwrite=!0,r=o,n=a,Object.keys(n).forEach((function(t){var e=n[t];[null,void 0,""].includes(e)||(r[t]=e)})))}function lt(t){return pt(G(t))}function ft(t,e){var r=e.versionId,n=nt(e.platform),o=n.appName2verEmitApp,a=n.appName2Comp,i=n.appName2EmitApp;j(n.appName2app[t],r)&&(a[t]=e.Comp,i[t]=e,w(o,t,W,e)),r&&w(o,t,r,e)}function st(t,e){var r,n=e||{},o=n.versionId,a=n.platform,i=nt(a),u=i.appName2verEmitApp,p=i.appName2Comp,c=i.strictMatchVer,l=i.appName2EmitApp,f=null!==(r=e.strictMatchVer)&&void 0!==r?r:c,s=I(u,t);z(s,t,a);var d=s[o||W],m=p[t],v=m?{Comp:m}:null,g=f?null:l[t]||v,h=d||g||null;return Y("[[ getVerApp ]] appName,options,result",t,e,h),h}function dt(t,e){return nt(e).appName2app[t]}function mt(t,e){nt(e).appName2app[t.name]=t}function vt(t,e,r){var o=(r||{}).appGroupName,a=e.versionId,i=e.appProperties,u=e.platform||r.platform,p=nt(u),c=p.appName2verEmitLib,l=p.appName2Lib,f=p.appName2isLibAssigned,s=dt(t,u),d=function(t){var e=l[t];e?"object"===n(e)&&0===Object.keys(e).length&&Object.assign(e,i):l[t]=i,f[t]=!0};d(t),o?d(o):s&&d(s.app_group_name),Y("[[ setEmitLib ]] appMeta",s);var m=I(c,t);(!s&&!m[W]||j(s,a))&&w(c,t,W,i),a&&w(c,t,a,i)}function gt(t,e){var r,n=e||{},o=n.versionId,a=nt(n.platform),i=a.appName2verEmitLib,u=a.appName2Lib,p=a.strictMatchVer,c=a.appName2isLibAssigned,l=null!==(r=n.strictMatchVer)&&void 0!==r?r:p,f=I(i,t);z(f,t);var s=f[o||W],d=c[t]?u[t]:null,m=s||(l?null:d)||null;return Y("[[ getVerLib ]] appName,options,result",t,n,m),m}function ht(t,e,r){var n=r||{},o=n.versionId,a=n.platform,i=nt(a).appName2verExtraCssList,u=dt(t,a);Y("[[ setVerExtraCssList ]] cssList",e);var p=I(i,t);(!u&&!p[W]||j(u,o))&&w(i,t,W,e),o&&w(i,t,o,e)}function yt(t,e){var r=e||{},n=r.versionId,o=I(nt(r.platform).appName2verExtraCssList,t),a=o[n]||o[W]||[];return Y("[[ getVerExtraCssList ]] options, cssList",r,a),a}function bt(t,e,r){B(t,e,"appName2verLoadStatus",r)}function At(t,e){return U(t,"appName2verLoadStatus",e)}function St(t,e,r){B(t,e,"appName2verStyleFetched",r)}function _t(t,e){return U(t,"appName2verStyleFetched",e)}function Nt(t,e){return R().appGroupName2platform[t]=e,Lt(t)}function Lt(t){return R().appGroupName2platform[t]||F()}function Et(t,e){var r,n=e||{},o=n.platform,a=n.versionId,i=nt(o),u=i.appName2verAppVersion,p=i.appName2appVersion[t]||null;return a&&(null===(r=u[t])||void 0===r?void 0:r[a])||p}function Vt(t,e,r){var n=(r||{}).platform,o=nt(n),a=o.appName2verAppVersion,i=o.appName2appVersion,u=o.appName2app,p=o.appGroupName2firstVer,c=e.sub_app_version,l=dt(t,n);j(u[t],c)&&(i[t]=e,w(a,t,W,e)),w(a,t,c,e),p[l.app_group_name]=c}function Ot(t,e){var r,n=e||{},o=n.platform,a=n.versionId,i=nt(o),u=i.appName2verStyleStr,p=i.appName2styleStr[t]||"";return a?(null===(r=u[t])||void 0===r?void 0:r[a])||p||"":p}function Mt(t,e,r){var n=r||{},o=n.platform,a=n.versionId,i=nt(o),u=i.appName2verStyleStr,p=i.appName2verStyleFetched,c=i.appName2styleStr;a?(w(u,t,a,e),w(p,t,a,Z.LOADED)):c[t]=e}var Pt={DEFAULT_ONLINE_VER:W,helLoadStatus:c,helEvents:K,isSubApp:$,trySetMasterAppLoadedSignal:T,getHelEventBus:rt,getHelDebug:g,getSharedCache:nt,getPlatform:F,getPlatformHost:ut,getPlatformConfig:lt,getAppPlatform:Lt,setAppPlatform:Nt,getVerApp:st,setEmitApp:ft,getVerLib:gt,setEmitLib:vt,getAppMeta:dt,setAppMeta:mt,getVersion:Et,setVersion:Vt,getAppStyleStr:Ot,setAppStyleStr:Mt,getVerLoadStatus:At,setVerLoadStatus:bt,getVerStyleStrStatus:_t,setVerStyleStrStatus:St,getVerExtraCssList:yt,setVerExtraCssList:ht,tryGetVersion:ot,tryGetAppName:at,initPlatformConfig:ct,libReady:it,log:M,allowLog:y,getGlobalThis:d,setGlobalThis:et}}.call(this,r(5))},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"===typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";r.r(e),r.d(e,"LIB_NAME",(function(){return n}));var n="hel-sy-test-lib-self-homepage"},function(t,e,r){!function(t,e){"use strict";var r=function(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}(e),n=function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function o(t){return t||"unpkg"}function a(t,e){var a=n({},e||{});return a.platform=o(),r.default.getVerLib(t,a)}function i(t,r){var n,o=!0,a="";r&&("string"==typeof r?a=r:(a=r.platform||"",o=null===(n=r.asProxy)||void 0===n||n));var i=function(t,r){var n=r||(null===e.getAppPlatform||void 0===e.getAppPlatform?void 0:e.getAppPlatform(t)),o=e.getSharedCache(n).appName2Lib;return o[t]||(o[t]={}),o[t]}(t,a);return"function"==typeof Proxy&&o?function(t,r){return new Proxy(r,{get:function(r,n){var o=String(n);return e.log("[[getLibProxy]] call lib [".concat(t,"] method [").concat(o,"]")),r[o]}})}(t,i):i}function u(t,e,a){var i=function(t){var e={allowDup:!1,platform:o()};return n(n({},e),t||{})}(a);r.default.libReady(t,e,i)}function p(){return!r.default.isSubApp()}r.default.log("hel-lib-proxy ver ".concat("3.9.3"));var c=r.default.isSubApp,l={libReady:u,exposeLib:i,getLib:a,isSubApp:c,isMasterApp:p};t.default=l,t.exposeLib=i,t.getLib=a,t.isMasterApp=p,t.isSubApp=c,t.libReady=u,Object.defineProperty(t,"__esModule",{value:!0})}(e,r(4))},function(t,e,r){"use strict";r.r(e);var n=r(6),o=r(3);function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=document.querySelector("#container");e||((e=document.createElement("div")).id="container",document.body.append(e)),e.innerHTML="\n  <div>\n    <h1>welcome to develop  your first hel remote module ".concat(n.LIB_NAME,"</h1>\n    <h2>initial num : ").concat(t,'</h2>\n    <button onclick="__changeNum__()">click</button>\n    <span style="color:red;">you can delete this file</span>\n  </div>\n  ')}window.__changeNum__=function(){a(Object(o.random)(100))},a()},function(t,e,r){"use strict";r.r(e);var n={};r.r(n),r.d(n,"sayHelloToHel",(function(){return i}));var o={};r.r(o),r.d(o,"regs",(function(){return a})),r.d(o,"num",(function(){return u})),r.d(o,"myMod",(function(){return n}));var a=r(2);function i(t){return"hello hel, I am ".concat("",", I come from ").concat(t)}var u=r(3);e.default=o}]]);