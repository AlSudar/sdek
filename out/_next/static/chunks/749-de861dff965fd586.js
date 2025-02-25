(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[749],{4184:function(t,e){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)){if(r.length){var s=n.apply(null,r);s&&t.push(s)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){t.push(r.toString());continue}for(var i in r)a.call(r,i)&&r[i]&&t.push(i)}}}return t.join(" ")}t.exports?(n.default=n,t.exports=n):void 0!==(r=(function(){return n}).apply(e,[]))&&(t.exports=r)}()},8679:function(t,e,r){"use strict";var a=r(9864),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function c(t){return a.isMemo(t)?s:i[t.$$typeof]||n}i[a.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[a.Memo]=s;var l=Object.defineProperty,f=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,p=Object.prototype;t.exports=function t(e,r,a){if("string"!=typeof r){if(p){var n=m(r);n&&n!==p&&t(e,n,a)}var s=f(r);d&&(s=s.concat(d(r)));for(var i=c(e),y=c(r),g=0;g<s.length;++g){var h=s[g];if(!o[h]&&!(a&&a[h])&&!(y&&y[h])&&!(i&&i[h])){var v=u(r,h);try{l(e,h,v)}catch(t){}}}}return e}},8872:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Image",{enumerable:!0,get:function(){return y}});let a=r(8754),n=r(1757),o=n._(r(7294)),s=a._(r(2636)),i=r(5471),c=r(3735),l=r(3341);r(4210);let f=a._(r(7746)),d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function u(t,e,r,a,n,o){let s=null==t?void 0:t.src;if(!t||t["data-loaded-src"]===s)return;t["data-loaded-src"]=s;let i="decode"in t?t.decode():Promise.resolve();i.catch(()=>{}).then(()=>{if(t.parentElement&&t.isConnected){if("blur"===e&&n(!0),null==r?void 0:r.current){let e=new Event("load");Object.defineProperty(e,"target",{writable:!1,value:t});let a=!1,n=!1;r.current({...e,nativeEvent:e,currentTarget:t,target:t,isDefaultPrevented:()=>a,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{a=!0,e.preventDefault()},stopPropagation:()=>{n=!0,e.stopPropagation()}})}(null==a?void 0:a.current)&&a.current(t)}})}function m(t){let[e,r]=o.version.split("."),a=parseInt(e,10),n=parseInt(r,10);return a>18||18===a&&n>=3?{fetchPriority:t}:{fetchpriority:t}}let p=(0,o.forwardRef)((t,e)=>{let{src:r,srcSet:a,sizes:n,height:s,width:i,decoding:c,className:l,style:f,fetchPriority:d,placeholder:p,loading:y,unoptimized:g,fill:h,onLoadRef:v,onLoadingCompleteRef:b,setBlurComplete:x,setShowAltText:w,onLoad:S,onError:k,...C}=t;return o.default.createElement("img",{...C,...m(d),loading:y,width:i,height:s,decoding:c,"data-nimg":h?"fill":"1",className:l,style:f,sizes:n,srcSet:a,src:r,ref:(0,o.useCallback)(t=>{e&&("function"==typeof e?e(t):"object"==typeof e&&(e.current=t)),t&&(k&&(t.src=t.src),t.complete&&u(t,p,v,b,x,g))},[r,p,v,b,x,k,g,e]),onLoad:t=>{let e=t.currentTarget;u(e,p,v,b,x,g)},onError:t=>{w(!0),"blur"===p&&x(!0),k&&k(t)}})}),y=(0,o.forwardRef)((t,e)=>{let r=(0,o.useContext)(l.ImageConfigContext),a=(0,o.useMemo)(()=>{let t=d||r||c.imageConfigDefault,e=[...t.deviceSizes,...t.imageSizes].sort((t,e)=>t-e),a=t.deviceSizes.sort((t,e)=>t-e);return{...t,allSizes:e,deviceSizes:a}},[r]),{onLoad:n,onLoadingComplete:u}=t,y=(0,o.useRef)(n);(0,o.useEffect)(()=>{y.current=n},[n]);let g=(0,o.useRef)(u);(0,o.useEffect)(()=>{g.current=u},[u]);let[h,v]=(0,o.useState)(!1),[b,x]=(0,o.useState)(!1),{props:w,meta:S}=(0,i.getImgProps)(t,{defaultLoader:f.default,imgConf:a,blurComplete:h,showAltText:b});return o.default.createElement(o.default.Fragment,null,o.default.createElement(p,{...w,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:y,onLoadingCompleteRef:g,setBlurComplete:v,setShowAltText:x,ref:e}),S.priority?o.default.createElement(s.default,null,o.default.createElement("link",{key:"__nimg-"+w.src+w.srcSet+w.sizes,rel:"preload",as:"image",href:w.srcSet?void 0:w.src,imageSrcSet:w.srcSet,imageSizes:w.sizes,crossOrigin:w.crossOrigin,referrerPolicy:w.referrerPolicy,...m(w.fetchPriority)})):null)});("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},5471:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImgProps",{enumerable:!0,get:function(){return i}}),r(4210);let a=r(7757),n=r(3735);function o(t){return void 0!==t.default}function s(t){return void 0===t?t:"number"==typeof t?Number.isFinite(t)?t:NaN:"string"==typeof t&&/^[0-9]+$/.test(t)?parseInt(t,10):NaN}function i(t,e){var r;let i,c,l,{src:f,sizes:d,unoptimized:u=!1,priority:m=!1,loading:p,className:y,quality:g,width:h,height:v,fill:b=!1,style:x,onLoad:w,onLoadingComplete:S,placeholder:k="empty",blurDataURL:C,fetchPriority:_,layout:$,objectFit:O,objectPosition:E,lazyBoundary:z,lazyRoot:j,...P}=t,{imgConf:A,showAltText:N,blurComplete:M,defaultLoader:I}=e,R=A||n.imageConfigDefault;if("allSizes"in R)i=R;else{let t=[...R.deviceSizes,...R.imageSizes].sort((t,e)=>t-e),e=R.deviceSizes.sort((t,e)=>t-e);i={...R,allSizes:t,deviceSizes:e}}let Y=P.loader||I;delete P.loader,delete P.srcSet;let X="__next_img_default"in Y;if(X){if("custom"===i.loader)throw Error('Image with src "'+f+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let t=Y;Y=e=>{let{config:r,...a}=e;return t(a)}}if($){"fill"===$&&(b=!0);let t={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[$];t&&(x={...x,...t});let e={responsive:"100vw",fill:"100vw"}[$];e&&!d&&(d=e)}let F="",T=s(h),D=s(v);if("object"==typeof(r=f)&&(o(r)||void 0!==r.src)){let t=o(f)?f.default:f;if(!t.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(t));if(!t.height||!t.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(t));if(c=t.blurWidth,l=t.blurHeight,C=C||t.blurDataURL,F=t.src,!b){if(T||D){if(T&&!D){let e=T/t.width;D=Math.round(t.height*e)}else if(!T&&D){let e=D/t.height;T=Math.round(t.width*e)}}else T=t.width,D=t.height}}let V=!m&&("lazy"===p||void 0===p);(!(f="string"==typeof f?f:F)||f.startsWith("data:")||f.startsWith("blob:"))&&(u=!0,V=!1),i.unoptimized&&(u=!0),X&&f.endsWith(".svg")&&!i.dangerouslyAllowSVG&&(u=!0),m&&(_="high");let W=s(g),L=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:E}:{},N?{}:{color:"transparent"},x),G="blur"===k&&C&&!M?{backgroundSize:L.objectFit||"cover",backgroundPosition:L.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,a.getImageBlurSvg)({widthInt:T,heightInt:D,blurWidth:c,blurHeight:l,blurDataURL:C,objectFit:L.objectFit})+'")'}:{},B=function(t){let{config:e,src:r,unoptimized:a,width:n,quality:o,sizes:s,loader:i}=t;if(a)return{src:r,srcSet:void 0,sizes:void 0};let{widths:c,kind:l}=function(t,e,r){let{deviceSizes:a,allSizes:n}=t;if(r){let t=/(^|\s)(1?\d?\d)vw/g,e=[];for(let a;a=t.exec(r);a)e.push(parseInt(a[2]));if(e.length){let t=.01*Math.min(...e);return{widths:n.filter(e=>e>=a[0]*t),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof e)return{widths:a,kind:"w"};let o=[...new Set([e,2*e].map(t=>n.find(e=>e>=t)||n[n.length-1]))];return{widths:o,kind:"x"}}(e,n,s),f=c.length-1;return{sizes:s||"w"!==l?s:"100vw",srcSet:c.map((t,a)=>i({config:e,src:r,quality:o,width:t})+" "+("w"===l?t:a+1)+l).join(", "),src:i({config:e,src:r,quality:o,width:c[f]})}}({config:i,src:f,unoptimized:u,width:T,quality:W,sizes:d,loader:Y}),U={...P,loading:V?"lazy":p,fetchPriority:_,width:T,height:D,decoding:"async",className:y,style:{...L,...G},sizes:B.sizes,srcSet:B.srcSet,src:B.src},q={unoptimized:u,priority:m,placeholder:k,fill:b};return{props:U,meta:q}}},7757:function(t,e){"use strict";function r(t){let{widthInt:e,heightInt:r,blurWidth:a,blurHeight:n,blurDataURL:o,objectFit:s}=t,i=a||e,c=n||r,l=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return i&&c?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+i+" "+c+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(a&&n?"1":"20")+"'/%3E"+l+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2555:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var r in e)Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}(e,{default:function(){return l},unstable_getImgProps:function(){return c}});let a=r(8754),n=r(5471),o=r(4210),s=r(8872),i=a._(r(7746)),c=t=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:e}=(0,n.getImgProps)(t,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[t,r]of Object.entries(e))void 0===r&&delete e[t];return{props:e}},l=s.Image},7746:function(t,e){"use strict";function r(t){let{config:e,src:r,width:a,quality:n}=t;return e.path+"?url="+encodeURIComponent(r)+"&w="+a+"&q="+(n||75)}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a}}),r.__next_img_default=!0;let a=r},255:function(t){t.exports={style:{fontFamily:"'__myFont_81056f', '__myFont_Fallback_81056f'"},className:"__className_81056f"}},9008:function(t,e,r){t.exports=r(2636)},5675:function(t,e,r){t.exports=r(2555)},4415:function(t,e){"use strict";/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),a=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),p=Symbol.for("react.lazy");Symbol.for("react.offscreen"),Symbol.for("react.module.reference"),e.isFragment=function(t){return function(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case n:case s:case o:case d:case u:return t;default:switch(t=t&&t.$$typeof){case l:case c:case f:case p:case m:case i:return t;default:return e}}case a:return e}}}(t)===n}},4954:function(t,e,r){"use strict";t.exports=r(4415)},9921:function(t,e){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,a=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,u=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,h=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function w(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case a:switch(t=t.type){case f:case d:case o:case i:case s:case m:return t;default:switch(t=t&&t.$$typeof){case l:case u:case g:case y:case c:return t;default:return e}}case n:return e}}}function S(t){return w(t)===d}e.AsyncMode=f,e.ConcurrentMode=d,e.ContextConsumer=l,e.ContextProvider=c,e.Element=a,e.ForwardRef=u,e.Fragment=o,e.Lazy=g,e.Memo=y,e.Portal=n,e.Profiler=i,e.StrictMode=s,e.Suspense=m,e.isAsyncMode=function(t){return S(t)||w(t)===f},e.isConcurrentMode=S,e.isContextConsumer=function(t){return w(t)===l},e.isContextProvider=function(t){return w(t)===c},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===a},e.isForwardRef=function(t){return w(t)===u},e.isFragment=function(t){return w(t)===o},e.isLazy=function(t){return w(t)===g},e.isMemo=function(t){return w(t)===y},e.isPortal=function(t){return w(t)===n},e.isProfiler=function(t){return w(t)===i},e.isStrictMode=function(t){return w(t)===s},e.isSuspense=function(t){return w(t)===m},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===o||t===d||t===i||t===s||t===m||t===p||"object"==typeof t&&null!==t&&(t.$$typeof===g||t.$$typeof===y||t.$$typeof===c||t.$$typeof===l||t.$$typeof===u||t.$$typeof===v||t.$$typeof===b||t.$$typeof===x||t.$$typeof===h)},e.typeOf=w},9864:function(t,e,r){"use strict";t.exports=r(9921)},8710:function(t,e,r){"use strict";r.d(e,{pT:function(){return ei}});var a,n,o,s,i=r(5893),c=r(7294),l=r.t(c,2),f=function(){function t(t){var e=this;this._insertTag=function(t){var r;r=0===e.tags.length?e.insertionPoint?e.insertionPoint.nextSibling:e.prepend?e.container.firstChild:e.before:e.tags[e.tags.length-1].nextSibling,e.container.insertBefore(t,r),e.tags.push(t)},this.isSpeedy=void 0===t.speedy||t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(t){t.forEach(this._insertTag)},e.insert=function(t){if(this.ctr%(this.isSpeedy?65e3:1)==0){var e;this._insertTag(((e=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&e.setAttribute("nonce",this.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e))}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var a=function(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}(r);try{a.insertRule(t,a.cssRules.length)}catch(t){}}else r.appendChild(document.createTextNode(t));this.ctr++},e.flush=function(){this.tags.forEach(function(t){var e;return null==(e=t.parentNode)?void 0:e.removeChild(t)}),this.tags=[],this.ctr=0},t}(),d=Math.abs,u=String.fromCharCode,m=Object.assign;function p(t,e,r){return t.replace(e,r)}function y(t,e){return t.indexOf(e)}function g(t,e){return 0|t.charCodeAt(e)}function h(t,e,r){return t.slice(e,r)}function v(t){return t.length}function b(t,e){return e.push(t),t}var x=1,w=1,S=0,k=0,C=0,_="";function $(t,e,r,a,n,o,s){return{value:t,root:e,parent:r,type:a,props:n,children:o,line:x,column:w,length:s,return:""}}function O(t,e){return m($("",null,null,"",null,null,0),t,{length:-t.length},e)}function E(){return C=k<S?g(_,k++):0,w++,10===C&&(w=1,x++),C}function z(){return g(_,k)}function j(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function P(t){return x=w=1,S=v(_=t),k=0,[]}function A(t){var e,r;return(e=k-1,r=function t(e){for(;E();)switch(C){case e:return k;case 34:case 39:34!==e&&39!==e&&t(C);break;case 40:41===e&&t(e);break;case 92:E()}return k}(91===t?t+2:40===t?t+1:t),h(_,e,r)).trim()}var N="-ms-",M="-moz-",I="-webkit-",R="comm",Y="rule",X="decl",F="@keyframes";function T(t,e){for(var r="",a=t.length,n=0;n<a;n++)r+=e(t[n],n,t,e)||"";return r}function D(t,e,r,a){switch(t.type){case"@layer":if(t.children.length)break;case"@import":case X:return t.return=t.return||t.value;case R:return"";case F:return t.return=t.value+"{"+T(t.children,a)+"}";case Y:t.value=t.props.join(",")}return v(r=T(t.children,a))?t.return=t.value+"{"+r+"}":""}function V(t,e,r,a,n,o,s,i,c,l,f){for(var u=n-1,m=0===n?o:[""],y=m.length,g=0,v=0,b=0;g<a;++g)for(var x=0,w=h(t,u+1,u=d(v=s[g])),S=t;x<y;++x)(S=(v>0?m[x]+" "+w:p(w,/&\f/g,m[x])).trim())&&(c[b++]=S);return $(t,e,r,0===n?Y:i,c,l,f)}function W(t,e,r,a){return $(t,e,r,X,h(t,0,a),h(t,a+1,-1),a)}var L=function(t,e,r){for(var a=0,n=0;a=n,n=z(),38===a&&12===n&&(e[r]=1),!j(n);)E();return h(_,t,k)},G=function(t,e){var r=-1,a=44;do switch(j(a)){case 0:38===a&&12===z()&&(e[r]=1),t[r]+=L(k-1,e,r);break;case 2:t[r]+=A(a);break;case 4:if(44===a){t[++r]=58===z()?"&\f":"",e[r]=t[r].length;break}default:t[r]+=u(a)}while(a=E());return t},B=function(t,e){var r;return r=G(P(t),e),_="",r},U=new WeakMap,q=function(t){if("rule"===t.type&&t.parent&&!(t.length<1)){for(var e=t.value,r=t.parent,a=t.column===r.column&&t.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==t.props.length||58===e.charCodeAt(0)||U.get(r))&&!a){U.set(t,!0);for(var n=[],o=B(e,n),s=r.props,i=0,c=0;i<o.length;i++)for(var l=0;l<s.length;l++,c++)t.props[c]=n[i]?o[i].replace(/&\f/g,s[l]):s[l]+" "+o[i]}}},J=function(t){if("decl"===t.type){var e=t.value;108===e.charCodeAt(0)&&98===e.charCodeAt(2)&&(t.return="",t.value="")}},H=[function(t,e,r,a){if(t.length>-1&&!t.return)switch(t.type){case X:t.return=function t(e,r){switch(45^g(e,0)?(((r<<2^g(e,0))<<2^g(e,1))<<2^g(e,2))<<2^g(e,3):0){case 5103:return I+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return I+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return I+e+M+e+N+e+e;case 6828:case 4268:return I+e+N+e+e;case 6165:return I+e+N+"flex-"+e+e;case 5187:return I+e+p(e,/(\w+).+(:[^]+)/,I+"box-$1$2"+N+"flex-$1$2")+e;case 5443:return I+e+N+"flex-item-"+p(e,/flex-|-self/,"")+e;case 4675:return I+e+N+"flex-line-pack"+p(e,/align-content|flex-|-self/,"")+e;case 5548:return I+e+N+p(e,"shrink","negative")+e;case 5292:return I+e+N+p(e,"basis","preferred-size")+e;case 6060:return I+"box-"+p(e,"-grow","")+I+e+N+p(e,"grow","positive")+e;case 4554:return I+p(e,/([^-])(transform)/g,"$1"+I+"$2")+e;case 6187:return p(p(p(e,/(zoom-|grab)/,I+"$1"),/(image-set)/,I+"$1"),e,"")+e;case 5495:case 3959:return p(e,/(image-set\([^]*)/,I+"$1$`$1");case 4968:return p(p(e,/(.+:)(flex-)?(.*)/,I+"box-pack:$3"+N+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+I+e+e;case 4095:case 3583:case 4068:case 2532:return p(e,/(.+)-inline(.+)/,I+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(v(e)-1-r>6)switch(g(e,r+1)){case 109:if(45!==g(e,r+4))break;case 102:return p(e,/(.+:)(.+)-([^]+)/,"$1"+I+"$2-$3$1"+M+(108==g(e,r+3)?"$3":"$2-$3"))+e;case 115:return~y(e,"stretch")?t(p(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(115!==g(e,r+1))break;case 6444:switch(g(e,v(e)-3-(~y(e,"!important")&&10))){case 107:return p(e,":",":"+I)+e;case 101:return p(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+I+(45===g(e,14)?"inline-":"")+"box$3$1"+I+"$2$3$1"+N+"$2box$3")+e}break;case 5936:switch(g(e,r+11)){case 114:return I+e+N+p(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return I+e+N+p(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return I+e+N+p(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return I+e+N+e+e}return e}(t.value,t.length);break;case F:return T([O(t,{value:p(t.value,"@","@"+I)})],a);case Y:if(t.length)return t.props.map(function(e){var r;switch(r=e,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return T([O(t,{props:[p(e,/:(read-\w+)/,":"+M+"$1")]})],a);case"::placeholder":return T([O(t,{props:[p(e,/:(plac\w+)/,":"+I+"input-$1")]}),O(t,{props:[p(e,/:(plac\w+)/,":"+M+"$1")]}),O(t,{props:[p(e,/:(plac\w+)/,N+"input-$1")]})],a)}return""}).join("")}}];function Z(t,e,r){var a="";return r.split(" ").forEach(function(r){void 0!==t[r]?e.push(t[r]+";"):r&&(a+=r+" ")}),a}var K=function(t,e,r){var a=t.key+"-"+e.name;!1===r&&void 0===t.registered[a]&&(t.registered[a]=e.styles)},Q=function(t,e,r){K(t,e,r);var a=t.key+"-"+e.name;if(void 0===t.inserted[e.name]){var n=e;do t.insert(e===n?"."+a:"",n,t.sheet,!0),n=n.next;while(void 0!==n)}},tt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},te=/[A-Z]|^ms/g,tr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ta=function(t){return 45===t.charCodeAt(1)},tn=function(t){return null!=t&&"boolean"!=typeof t},to=(a=Object.create(null),function(t){return void 0===a[t]&&(a[t]=ta(t)?t:t.replace(te,"-$&").toLowerCase()),a[t]}),ts=function(t,e){switch(t){case"animation":case"animationName":if("string"==typeof e)return e.replace(tr,function(t,e,r){return s={name:e,styles:r,next:s},e})}return 1===tt[t]||ta(t)||"number"!=typeof e||0===e?e:e+"px"};function ti(t,e,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return s={name:r.name,styles:r.styles,next:s},r.name;if(void 0!==r.styles){var a=r.next;if(void 0!==a)for(;void 0!==a;)s={name:a.name,styles:a.styles,next:s},a=a.next;return r.styles+";"}return function(t,e,r){var a="";if(Array.isArray(r))for(var n=0;n<r.length;n++)a+=ti(t,e,r[n])+";";else for(var o in r){var s=r[o];if("object"!=typeof s)null!=e&&void 0!==e[s]?a+=o+"{"+e[s]+"}":tn(s)&&(a+=to(o)+":"+ts(o,s)+";");else if(Array.isArray(s)&&"string"==typeof s[0]&&(null==e||void 0===e[s[0]]))for(var i=0;i<s.length;i++)tn(s[i])&&(a+=to(o)+":"+ts(o,s[i])+";");else{var c=ti(t,e,s);switch(o){case"animation":case"animationName":a+=to(o)+":"+c+";";break;default:a+=o+"{"+c+"}"}}}return a}(t,e,r);case"function":if(void 0!==t){var n=s,o=r(t);return s=n,ti(t,e,o)}}if(null==e)return r;var i=e[r];return void 0!==i?i:r}var tc=/label:\s*([^\s;{]+)\s*(;|$)/g;function tl(t,e,r){if(1===t.length&&"object"==typeof t[0]&&null!==t[0]&&void 0!==t[0].styles)return t[0];var a,n=!0,o="";s=void 0;var i=t[0];null==i||void 0===i.raw?(n=!1,o+=ti(r,e,i)):o+=i[0];for(var c=1;c<t.length;c++)o+=ti(r,e,t[c]),n&&(o+=i[c]);tc.lastIndex=0;for(var l="";null!==(a=tc.exec(o));)l+="-"+a[1];return{name:function(t){for(var e,r=0,a=0,n=t.length;n>=4;++a,n-=4)e=(65535&(e=255&t.charCodeAt(a)|(255&t.charCodeAt(++a))<<8|(255&t.charCodeAt(++a))<<16|(255&t.charCodeAt(++a))<<24))*1540483477+((e>>>16)*59797<<16),e^=e>>>24,r=(65535&e)*1540483477+((e>>>16)*59797<<16)^(65535&r)*1540483477+((r>>>16)*59797<<16);switch(n){case 3:r^=(255&t.charCodeAt(a+2))<<16;case 2:r^=(255&t.charCodeAt(a+1))<<8;case 1:r^=255&t.charCodeAt(a),r=(65535&r)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*1540483477+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)}(o)+l,styles:o,next:s}}var tf=!!l.useInsertionEffect&&l.useInsertionEffect,td=tf||function(t){return t()};tf||c.useLayoutEffect;var tu=c.createContext("undefined"!=typeof HTMLElement?function(t){var e,r,a,n,o,s=t.key;if("css"===s){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(t){-1!==t.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(t),t.setAttribute("data-s",""))})}var c=t.stylisPlugins||H,l={},d=[];n=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+s+' "]'),function(t){for(var e=t.getAttribute("data-emotion").split(" "),r=1;r<e.length;r++)l[e[r]]=!0;d.push(t)});var m=(r=(e=[q,J].concat(c,[D,(a=function(t){o.insert(t)},function(t){!t.root&&(t=t.return)&&a(t)})])).length,function(t,a,n,o){for(var s="",i=0;i<r;i++)s+=e[i](t,a,n,o)||"";return s}),S=function(t){var e,r;return T((r=function t(e,r,a,n,o,s,i,c,l){for(var f,d=0,m=0,S=i,O=0,P=0,N=0,M=1,I=1,Y=1,X=0,F="",T=o,D=s,L=n,G=F;I;)switch(N=X,X=E()){case 40:if(108!=N&&58==g(G,S-1)){-1!=y(G+=p(A(X),"&","&\f"),"&\f")&&(Y=-1);break}case 34:case 39:case 91:G+=A(X);break;case 9:case 10:case 13:case 32:G+=function(t){for(;C=z();)if(C<33)E();else break;return j(t)>2||j(C)>3?"":" "}(N);break;case 92:G+=function(t,e){for(var r;--e&&E()&&!(C<48)&&!(C>102)&&(!(C>57)||!(C<65))&&(!(C>70)||!(C<97)););return r=k+(e<6&&32==z()&&32==E()),h(_,t,r)}(k-1,7);continue;case 47:switch(z()){case 42:case 47:b($(f=function(t,e){for(;E();)if(t+C===57)break;else if(t+C===84&&47===z())break;return"/*"+h(_,e,k-1)+"*"+u(47===t?t:E())}(E(),k),r,a,R,u(C),h(f,2,-2),0),l);break;default:G+="/"}break;case 123*M:c[d++]=v(G)*Y;case 125*M:case 59:case 0:switch(X){case 0:case 125:I=0;case 59+m:-1==Y&&(G=p(G,/\f/g,"")),P>0&&v(G)-S&&b(P>32?W(G+";",n,a,S-1):W(p(G," ","")+";",n,a,S-2),l);break;case 59:G+=";";default:if(b(L=V(G,r,a,d,m,o,c,F,T=[],D=[],S),s),123===X){if(0===m)t(G,r,L,L,T,s,S,c,D);else switch(99===O&&110===g(G,3)?100:O){case 100:case 108:case 109:case 115:t(e,L,L,n&&b(V(e,L,L,0,0,o,c,F,o,T=[],S),D),o,D,S,c,n?T:D);break;default:t(G,L,L,L,[""],D,0,c,D)}}}d=m=P=0,M=Y=1,F=G="",S=i;break;case 58:S=1+v(G),P=N;default:if(M<1){if(123==X)--M;else if(125==X&&0==M++&&125==(C=k>0?g(_,--k):0,w--,10===C&&(w=1,x--),C))continue}switch(G+=u(X),X*M){case 38:Y=m>0?1:(G+="\f",-1);break;case 44:c[d++]=(v(G)-1)*Y,Y=1;break;case 64:45===z()&&(G+=A(E())),O=z(),m=S=v(F=G+=function(t){for(;!j(z());)E();return h(_,t,k)}(k)),X++;break;case 45:45===N&&2==v(G)&&(M=0)}}return s}("",null,null,null,[""],e=P(e=t),0,[0],e),_="",r),m)},O={key:s,sheet:new f({key:s,container:n,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:function(t,e,r,a){o=r,S(t?t+"{"+e.styles+"}":e.styles),a&&(O.inserted[e.name]=!0)}};return O.sheet.hydrate(d),O}({key:"css"}):null);tu.Provider;var tm=function(t){return(0,c.forwardRef)(function(e,r){return t(e,(0,c.useContext)(tu),r)})},tp=c.createContext({}),ty={}.hasOwnProperty,tg="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",th=function(t,e){var r={};for(var a in e)ty.call(e,a)&&(r[a]=e[a]);return r[tg]=t,r},tv=function(t){var e=t.cache,r=t.serialized,a=t.isStringTag;return K(e,r,a),td(function(){return Q(e,r,a)}),null},tb=tm(function(t,e,r){var a=t.css;"string"==typeof a&&void 0!==e.registered[a]&&(a=e.registered[a]);var n=t[tg],o=[a],s="";"string"==typeof t.className?s=Z(e.registered,o,t.className):null!=t.className&&(s=t.className+" ");var i=tl(o,void 0,c.useContext(tp));s+=e.key+"-"+i.name;var l={};for(var f in t)ty.call(t,f)&&"css"!==f&&f!==tg&&(l[f]=t[f]);return l.className=s,r&&(l.ref=r),c.createElement(c.Fragment,null,c.createElement(tv,{cache:e,serialized:i,isStringTag:"string"==typeof n}),c.createElement(n,l))});r(8679);var tx=i.Fragment,tw=function(t,e,r){return ty.call(e,"css")?i.jsx(tb,th(t,e),r):i.jsx(t,e,r)},tS=function(t,e){var r=arguments;if(null==e||!ty.call(e,"css"))return c.createElement.apply(void 0,r);var a=r.length,n=Array(a);n[0]=tb,n[1]=th(t,e);for(var o=2;o<a;o++)n[o]=r[o];return c.createElement.apply(null,n)};function tk(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return tl(e)}function tC(){var t=tk.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}n=tS||(tS={}),o||(o=n.JSX||(n.JSX={}));var t_=function t(e){for(var r=e.length,a=0,n="";a<r;a++){var o=e[a];if(null!=o){var s=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))s=t(o);else for(var i in s="",o)o[i]&&i&&(s&&(s+=" "),s+=i);break;default:s=o}s&&(n&&(n+=" "),n+=s)}}return n},t$=function(t){var e=t.cache,r=t.serializedArr;return td(function(){for(var t=0;t<r.length;t++)Q(e,r[t],!1)}),null},tO=tm(function(t,e){var r=[],a=function(){for(var t=arguments.length,a=Array(t),n=0;n<t;n++)a[n]=arguments[n];var o=tl(a,e.registered);return r.push(o),K(e,o,!1),e.key+"-"+o.name},n={css:a,cx:function(){for(var t,r,n,o,s=arguments.length,i=Array(s),c=0;c<s;c++)i[c]=arguments[c];return t=e.registered,o=Z(t,n=[],r=t_(i)),n.length<2?r:o+a(n)},theme:c.useContext(tp)},o=t.children(n);return c.createElement(c.Fragment,null,c.createElement(t$,{cache:e,serializedArr:r}),o)}),tE=Object.defineProperty,tz=(t,e,r)=>e in t?tE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,tj=(t,e,r)=>tz(t,"symbol"!=typeof e?e+"":e,r),tP=new Map,tA=new WeakMap,tN=0,tM=void 0;function tI(t,e,r={},a=tM){if(void 0===window.IntersectionObserver&&void 0!==a){let n=t.getBoundingClientRect();return e(a,{isIntersecting:a,target:t,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}let{id:n,observer:o,elements:s}=function(t){let e=Object.keys(t).sort().filter(e=>void 0!==t[e]).map(e=>{var r;return`${e}_${"root"===e?(r=t.root)?(tA.has(r)||(tN+=1,tA.set(r,tN.toString())),tA.get(r)):"0":t[e]}`}).toString(),r=tP.get(e);if(!r){let a;let n=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{var r;let o=e.isIntersecting&&a.some(t=>e.intersectionRatio>=t);t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=o),null==(r=n.get(e.target))||r.forEach(t=>{t(o,e)})})},t);a=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:e,observer:o,elements:n},tP.set(e,r)}return r}(r),i=s.get(t)||[];return s.has(t)||s.set(t,i),i.push(e),o.observe(t),function(){i.splice(i.indexOf(e),1),0===i.length&&(s.delete(t),o.unobserve(t)),0===s.size&&(o.disconnect(),tP.delete(n))}}var tR=class extends c.Component{constructor(t){super(t),tj(this,"node",null),tj(this,"_unobserveCb",null),tj(this,"handleNode",t=>{!this.node||(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),tj(this,"handleChange",(t,e)=>{t&&this.props.triggerOnce&&this.unobserve(),"function"!=typeof this.props.children||this.setState({inView:t,entry:e}),this.props.onChange&&this.props.onChange(t,e)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;let{threshold:t,root:e,rootMargin:r,trackVisibility:a,delay:n,fallbackInView:o}=this.props;this._unobserveCb=tI(this.node,this.handleChange,{threshold:t,root:e,rootMargin:r,trackVisibility:a,delay:n},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){let{children:t}=this.props;if("function"==typeof t){let{inView:e,entry:r}=this.state;return t({inView:e,entry:r,ref:this.handleNode})}let{as:e,triggerOnce:r,threshold:a,root:n,rootMargin:o,onChange:s,skip:i,trackVisibility:l,delay:f,initialInView:d,fallbackInView:u,...m}=this.props;return c.createElement(e||"div",{ref:this.handleNode,...m},t)}};function tY({threshold:t,delay:e,trackVisibility:r,rootMargin:a,root:n,triggerOnce:o,skip:s,initialInView:i,fallbackInView:l,onChange:f}={}){var d;let[u,m]=c.useState(null),p=c.useRef(f),[y,g]=c.useState({inView:!!i,entry:void 0});p.current=f,c.useEffect(()=>{let i;if(!s&&u)return i=tI(u,(t,e)=>{g({inView:t,entry:e}),p.current&&p.current(t,e),e.isIntersecting&&o&&i&&(i(),i=void 0)},{root:n,rootMargin:a,threshold:t,trackVisibility:r,delay:e},l),()=>{i&&i()}},[Array.isArray(t)?t.toString():t,u,n,a,o,s,r,l,e]);let h=null==(d=y.entry)?void 0:d.target,v=c.useRef(void 0);u||!h||o||s||v.current===h||(v.current=h,g({inView:!!i,entry:void 0}));let b=[m,y.inView,y.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}var tX=r(4954);tC`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,tC`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,tC`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,tC`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,tC`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,tC`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,tC`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,tC`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,tC`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,tC`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,tC`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,tC`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,tC`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;let tF=tC`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,tT=tC`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tD=tC`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tV=tC`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tW=tC`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tL=tC`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tG=tC`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tB=tC`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tU=tC`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tq=tC`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tJ=tC`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tH=tC`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tZ=tC`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function tK(t){var e;return e=()=>null,r=>r?t():e()}function tQ(t){return tK(()=>({opacity:0}))(t)}let t0=t=>{let{cascade:e=!1,damping:r=.5,delay:a=0,duration:n=1e3,fraction:o=0,keyframes:s=tL,triggerOnce:i=!1,className:l,style:f,childClassName:d,childStyle:u,children:m,onVisibilityChange:p}=t,y=(0,c.useMemo)(()=>(function({duration:t=1e3,delay:e=0,timingFunction:r="ease",keyframes:a=tL,iterationCount:n=1}){return tk`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${e}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${n};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `})({keyframes:s,duration:n}),[n,s]);return void 0==m?null:"string"==typeof m||"number"==typeof m||"boolean"==typeof m?tw(t3,{...t,animationStyles:y,children:String(m)}):(0,tX.isFragment)(m)?tw(t5,{...t,animationStyles:y}):tw(tx,{children:c.Children.map(m,(s,m)=>{if(!(0,c.isValidElement)(s))return null;let g=a+(e?m*n*r:0);switch(s.type){case"ol":case"ul":return tw(tO,{children:({cx:e})=>tw(s.type,{...s.props,className:e(l,s.props.className),style:Object.assign({},f,s.props.style),children:tw(t0,{...t,children:s.props.children})})});case"li":return tw(tR,{threshold:o,triggerOnce:i,onChange:p,children:({inView:t,ref:e})=>tw(tO,{children:({cx:r})=>tw(s.type,{...s.props,ref:e,className:r(d,s.props.className),css:tK(()=>y)(t),style:Object.assign({},u,s.props.style,tQ(!t),{animationDelay:g+"ms"})})})});default:return tw(tR,{threshold:o,triggerOnce:i,onChange:p,children:({inView:t,ref:e})=>tw("div",{ref:e,className:l,css:tK(()=>y)(t),style:Object.assign({},f,tQ(!t),{animationDelay:g+"ms"}),children:tw(tO,{children:({cx:t})=>tw(s.type,{...s.props,className:t(d,s.props.className),style:Object.assign({},u,s.props.style)})})})})}})})},t1={display:"inline-block",whiteSpace:"pre"},t3=t=>{var e,r;let{animationStyles:a,cascade:n=!1,damping:o=.5,delay:s=0,duration:i=1e3,fraction:c=0,triggerOnce:l=!1,className:f,style:d,children:u,onVisibilityChange:m}=t,{ref:p,inView:y}=tY({triggerOnce:l,threshold:c,onChange:m});return(e=()=>tw("div",{ref:p,className:f,style:Object.assign({},d,t1),children:u.split("").map((t,e)=>tw("span",{css:tK(()=>a)(y),style:{animationDelay:s+e*i*o+"ms"},children:t},e))}),r=()=>tw(t5,{...t,children:u}),r=>r?e():r())(n)},t5=t=>{let{animationStyles:e,fraction:r=0,triggerOnce:a=!1,className:n,style:o,children:s,onVisibilityChange:i}=t,{ref:c,inView:l}=tY({triggerOnce:a,threshold:r,onChange:i});return tw("div",{ref:c,className:n,css:tK(()=>e)(l),style:Object.assign({},o,tQ(!l)),children:s})};tC`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,tC`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tC`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tC`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tC`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tC`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,tC`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,tC`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,tC`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,tC`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;let t4=tC`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,t2=tC`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,t6=tC`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,t7=tC`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,t9=tC`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,t8=tC`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,et=tC`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,ee=tC`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,er=tC`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,ea=tC`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,en=tC`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,eo=tC`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,es=tC`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`,ei=t=>{let{big:e=!1,direction:r,reverse:a=!1,...n}=t,o=(0,c.useMemo)(()=>(function(t,e,r){switch(r){case"bottom-left":return e?t2:tT;case"bottom-right":return e?t6:tD;case"down":return t?e?t9:tW:e?t7:tV;case"left":return t?e?et:tG:e?t8:tL;case"right":return t?e?er:tU:e?ee:tB;case"top-left":return e?ea:tq;case"top-right":return e?en:tJ;case"up":return t?e?es:tZ:e?eo:tH;default:return e?t4:tF}})(e,a,r),[e,r,a]);return tw(t0,{keyframes:o,...n})};tC`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,tC`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,tC`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,tC`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,tC`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`,tC`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,tC`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,tC`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tC`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,tC`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tC`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tC`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tC`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tC`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tC`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,tC`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,tC`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,tC`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,tC`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`,tC`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tC`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tC`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tC`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tC`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,tC`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,tC`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,tC`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`,tC`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,tC`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,tC`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,tC`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,tC`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,tC`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,tC`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,tC`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,tC`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,tC`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`}}]);