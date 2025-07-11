(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var jf={exports:{}},bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function vS(){if(h_)return bo;h_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return bo.Fragment=t,bo.jsx=i,bo.jsxs=i,bo}var d_;function xS(){return d_||(d_=1,jf.exports=vS()),jf.exports}var Rt=xS(),Zf={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function SS(){if(p_)return oe;p_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function S(U,J,gt){this.props=U,this.context=J,this.refs=T,this.updater=gt||M}S.prototype.isReactComponent={},S.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=S.prototype;function O(U,J,gt){this.props=U,this.context=J,this.refs=T,this.updater=gt||M}var L=O.prototype=new v;L.constructor=O,E(L,S.prototype),L.isPureReactComponent=!0;var C=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},B=Object.prototype.hasOwnProperty;function P(U,J,gt,yt,Q,ft){return gt=ft.ref,{$$typeof:r,type:U,key:J,ref:gt!==void 0?gt:null,props:ft}}function W(U,J){return P(U.type,J,void 0,void 0,void 0,U.props)}function D(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function w(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(gt){return J[gt]})}var F=/\/+/g;function et(U,J){return typeof U=="object"&&U!==null&&U.key!=null?w(""+U.key):J.toString(36)}function at(){}function ut(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(at,at):(U.status="pending",U.then(function(J){U.status==="pending"&&(U.status="fulfilled",U.value=J)},function(J){U.status==="pending"&&(U.status="rejected",U.reason=J)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ct(U,J,gt,yt,Q){var ft=typeof U;(ft==="undefined"||ft==="boolean")&&(U=null);var Mt=!1;if(U===null)Mt=!0;else switch(ft){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(U.$$typeof){case r:case t:Mt=!0;break;case g:return Mt=U._init,ct(Mt(U._payload),J,gt,yt,Q)}}if(Mt)return Q=Q(U),Mt=yt===""?"."+et(U,0):yt,C(Q)?(gt="",Mt!=null&&(gt=Mt.replace(F,"$&/")+"/"),ct(Q,J,gt,"",function(Kt){return Kt})):Q!=null&&(D(Q)&&(Q=W(Q,gt+(Q.key==null||U&&U.key===Q.key?"":(""+Q.key).replace(F,"$&/")+"/")+Mt)),J.push(Q)),1;Mt=0;var wt=yt===""?".":yt+":";if(C(U))for(var St=0;St<U.length;St++)yt=U[St],ft=wt+et(yt,St),Mt+=ct(yt,J,gt,ft,Q);else if(St=x(U),typeof St=="function")for(U=St.call(U),St=0;!(yt=U.next()).done;)yt=yt.value,ft=wt+et(yt,St++),Mt+=ct(yt,J,gt,ft,Q);else if(ft==="object"){if(typeof U.then=="function")return ct(ut(U),J,gt,yt,Q);throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function z(U,J,gt){if(U==null)return U;var yt=[],Q=0;return ct(U,yt,"","",function(ft){return J.call(gt,ft,Q++)}),yt}function K(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(gt){(U._status===0||U._status===-1)&&(U._status=1,U._result=gt)},function(gt){(U._status===0||U._status===-1)&&(U._status=2,U._result=gt)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var X=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function pt(){}return oe.Children={map:z,forEach:function(U,J,gt){z(U,function(){J.apply(this,arguments)},gt)},count:function(U){var J=0;return z(U,function(){J++}),J},toArray:function(U){return z(U,function(J){return J})||[]},only:function(U){if(!D(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},oe.Component=S,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=O,oe.StrictMode=s,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,oe.__COMPILER_RUNTIME={__proto__:null,c:function(U){return H.H.useMemoCache(U)}},oe.cache=function(U){return function(){return U.apply(null,arguments)}},oe.cloneElement=function(U,J,gt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var yt=E({},U.props),Q=U.key,ft=void 0;if(J!=null)for(Mt in J.ref!==void 0&&(ft=void 0),J.key!==void 0&&(Q=""+J.key),J)!B.call(J,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&J.ref===void 0||(yt[Mt]=J[Mt]);var Mt=arguments.length-2;if(Mt===1)yt.children=gt;else if(1<Mt){for(var wt=Array(Mt),St=0;St<Mt;St++)wt[St]=arguments[St+2];yt.children=wt}return P(U.type,Q,void 0,void 0,ft,yt)},oe.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},oe.createElement=function(U,J,gt){var yt,Q={},ft=null;if(J!=null)for(yt in J.key!==void 0&&(ft=""+J.key),J)B.call(J,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Q[yt]=J[yt]);var Mt=arguments.length-2;if(Mt===1)Q.children=gt;else if(1<Mt){for(var wt=Array(Mt),St=0;St<Mt;St++)wt[St]=arguments[St+2];Q.children=wt}if(U&&U.defaultProps)for(yt in Mt=U.defaultProps,Mt)Q[yt]===void 0&&(Q[yt]=Mt[yt]);return P(U,ft,void 0,void 0,null,Q)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(U){return{$$typeof:d,render:U}},oe.isValidElement=D,oe.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:K}},oe.memo=function(U,J){return{$$typeof:p,type:U,compare:J===void 0?null:J}},oe.startTransition=function(U){var J=H.T,gt={};H.T=gt;try{var yt=U(),Q=H.S;Q!==null&&Q(gt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(pt,X)}catch(ft){X(ft)}finally{H.T=J}},oe.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},oe.use=function(U){return H.H.use(U)},oe.useActionState=function(U,J,gt){return H.H.useActionState(U,J,gt)},oe.useCallback=function(U,J){return H.H.useCallback(U,J)},oe.useContext=function(U){return H.H.useContext(U)},oe.useDebugValue=function(){},oe.useDeferredValue=function(U,J){return H.H.useDeferredValue(U,J)},oe.useEffect=function(U,J,gt){var yt=H.H;if(typeof gt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(U,J)},oe.useId=function(){return H.H.useId()},oe.useImperativeHandle=function(U,J,gt){return H.H.useImperativeHandle(U,J,gt)},oe.useInsertionEffect=function(U,J){return H.H.useInsertionEffect(U,J)},oe.useLayoutEffect=function(U,J){return H.H.useLayoutEffect(U,J)},oe.useMemo=function(U,J){return H.H.useMemo(U,J)},oe.useOptimistic=function(U,J){return H.H.useOptimistic(U,J)},oe.useReducer=function(U,J,gt){return H.H.useReducer(U,J,gt)},oe.useRef=function(U){return H.H.useRef(U)},oe.useState=function(U){return H.H.useState(U)},oe.useSyncExternalStore=function(U,J,gt){return H.H.useSyncExternalStore(U,J,gt)},oe.useTransition=function(){return H.H.useTransition()},oe.version="19.1.0",oe}var m_;function Ed(){return m_||(m_=1,Zf.exports=SS()),Zf.exports}var Ve=Ed(),Kf={exports:{}},Ao={},Qf={exports:{}},Jf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function yS(){return g_||(g_=1,function(r){function t(z,K){var X=z.length;z.push(K);t:for(;0<X;){var pt=X-1>>>1,U=z[pt];if(0<l(U,K))z[pt]=K,z[X]=U,X=pt;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var K=z[0],X=z.pop();if(X!==K){z[0]=X;t:for(var pt=0,U=z.length,J=U>>>1;pt<J;){var gt=2*(pt+1)-1,yt=z[gt],Q=gt+1,ft=z[Q];if(0>l(yt,X))Q<U&&0>l(ft,yt)?(z[pt]=ft,z[Q]=X,pt=Q):(z[pt]=yt,z[gt]=X,pt=gt);else if(Q<U&&0>l(ft,X))z[pt]=ft,z[Q]=X,pt=Q;else break t}}return K}function l(z,K){var X=z.sortIndex-K.sortIndex;return X!==0?X:z.id-K.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,x=3,M=!1,E=!1,T=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function C(z){for(var K=i(p);K!==null;){if(K.callback===null)s(p);else if(K.startTime<=z)s(p),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(p)}}function H(z){if(T=!1,C(z),!E)if(i(m)!==null)E=!0,B||(B=!0,et());else{var K=i(p);K!==null&&ct(H,K.startTime-z)}}var B=!1,P=-1,W=5,D=-1;function w(){return S?!0:!(r.unstable_now()-D<W)}function F(){if(S=!1,B){var z=r.unstable_now();D=z;var K=!0;try{t:{E=!1,T&&(T=!1,O(P),P=-1),M=!0;var X=x;try{e:{for(C(z),_=i(m);_!==null&&!(_.expirationTime>z&&w());){var pt=_.callback;if(typeof pt=="function"){_.callback=null,x=_.priorityLevel;var U=pt(_.expirationTime<=z);if(z=r.unstable_now(),typeof U=="function"){_.callback=U,C(z),K=!0;break e}_===i(m)&&s(m),C(z)}else s(m);_=i(m)}if(_!==null)K=!0;else{var J=i(p);J!==null&&ct(H,J.startTime-z),K=!1}}break t}finally{_=null,x=X,M=!1}K=void 0}}finally{K?et():B=!1}}}var et;if(typeof L=="function")et=function(){L(F)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ut=at.port2;at.port1.onmessage=F,et=function(){ut.postMessage(null)}}else et=function(){v(F,0)};function ct(z,K){P=v(function(){z(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(z){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var X=x;x=K;try{return z()}finally{x=X}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=x;x=z;try{return K()}finally{x=X}},r.unstable_scheduleCallback=function(z,K,X){var pt=r.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?pt+X:pt):X=pt,z){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=X+U,z={id:g++,callback:K,priorityLevel:z,startTime:X,expirationTime:U,sortIndex:-1},X>pt?(z.sortIndex=X,t(p,z),i(m)===null&&z===i(p)&&(T?(O(P),P=-1):T=!0,ct(H,X-pt))):(z.sortIndex=U,t(m,z),E||M||(E=!0,B||(B=!0,et()))),z},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(z){var K=x;return function(){var X=x;x=K;try{return z.apply(this,arguments)}finally{x=X}}}}(Jf)),Jf}var __;function MS(){return __||(__=1,Qf.exports=yS()),Qf.exports}var $f={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function ES(){if(v_)return Un;v_=1;var r=Ed();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Un.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Un.requestFormReset=function(m){s.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Un.useFormStatus=function(){return h.H.useHostTransitionStatus()},Un.version="19.1.0",Un}var x_;function TS(){if(x_)return $f.exports;x_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),$f.exports=ES(),$f.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function bS(){if(S_)return Ao;S_=1;var r=MS(),t=Ed(),i=TS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),e;if(f===o)return d(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,A=u.child;A;){if(A===a){y=!0,a=u,o=f;break}if(A===o){y=!0,o=u,a=f;break}A=A.sibling}if(!y){for(A=f.child;A;){if(A===a){y=!0,a=f,o=u;break}if(A===o){y=!0,o=f,a=u;break}A=A.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),L=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case T:return"StrictMode";case H:return"Suspense";case B:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case L:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:ut(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return ut(e(n))}catch{}}return null}var ct=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},pt=[],U=-1;function J(e){return{current:e}}function gt(e){0>U||(e.current=pt[U],pt[U]=null,U--)}function yt(e,n){U++,pt[U]=e.current,e.current=n}var Q=J(null),ft=J(null),Mt=J(null),wt=J(null);function St(e,n){switch(yt(Mt,n),yt(ft,e),yt(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Hg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Hg(n),e=Gg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}gt(Q),yt(Q,e)}function Kt(){gt(Q),gt(ft),gt(Mt)}function Wt(e){e.memoizedState!==null&&yt(wt,e);var n=Q.current,a=Gg(n,e.type);n!==a&&(yt(ft,e),yt(Q,a))}function we(e){ft.current===e&&(gt(Q),gt(ft)),wt.current===e&&(gt(wt),So._currentValue=X)}var Oe=Object.prototype.hasOwnProperty,ve=r.unstable_scheduleCallback,G=r.unstable_cancelCallback,Mn=r.unstable_shouldYield,Ee=r.unstable_requestPaint,pe=r.unstable_now,Vt=r.unstable_getCurrentPriorityLevel,xe=r.unstable_ImmediatePriority,Zt=r.unstable_UserBlockingPriority,se=r.unstable_NormalPriority,$e=r.unstable_LowPriority,N=r.unstable_IdlePriority,b=r.log,nt=r.unstable_setDisableYieldValue,dt=null,_t=null;function lt(e){if(typeof b=="function"&&nt(e),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(dt,e)}catch{}}var Pt=Math.clz32?Math.clz32:kt,Ut=Math.log,Gt=Math.LN2;function kt(e){return e>>>=0,e===0?32:31-(Ut(e)/Gt|0)|0}var Et=256,zt=4194304;function Yt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Yt(o):(y&=A,y!==0?u=Yt(y):a||(a=A&~e,a!==0&&(u=Yt(a))))):(A=o&~f,A!==0?u=Yt(A):y!==0?u=Yt(y):a||(a=o&~e,a!==0&&(u=Yt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=Et;return Et<<=1,(Et&4194048)===0&&(Et=256),e}function Lt(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function Tt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function It(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function At(e,n,a,o,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,tt=e.hiddenUpdates;for(a=y&~a;0<a;){var ht=31-Pt(a),vt=1<<ht;A[ht]=0,I[ht]=-1;var it=tt[ht];if(it!==null)for(tt[ht]=null,ht=0;ht<it.length;ht++){var st=it[ht];st!==null&&(st.lane&=-536870913)}a&=~vt}o!==0&&xt(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function xt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Ft(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ie(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ue(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function be(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:r_(e.type))}function Wn(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var pn=Math.random().toString(36).slice(2),on="__reactFiber$"+pn,En="__reactProps$"+pn,zn="__reactContainer$"+pn,Za="__reactEvents$"+pn,Yo="__reactListeners$"+pn,jo="__reactHandles$"+pn,Ka="__reactResources$"+pn,fa="__reactMarker$"+pn;function ha(e){delete e[on],delete e[En],delete e[Za],delete e[Yo],delete e[jo]}function zi(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[zn]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Wg(e);e!==null;){if(a=e[on])return a;e=Wg(e)}return n}e=a,a=e.parentNode}return null}function Ii(e){if(e=e[on]||e[zn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Qa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function da(e){var n=e[Ka];return n||(n=e[Ka]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(e){e[fa]=!0}var Zo=new Set,Ko={};function Bi(e,n){R(e,n),R(e+"Capture",n)}function R(e,n){for(Ko[e]=n,e=0;e<n.length;e++)Zo.add(n[e])}var Y=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},ot={};function Z(e){return Oe.call(ot,e)?!0:Oe.call(rt,e)?!1:Y.test(e)?ot[e]=!0:(rt[e]=!0,!1)}function bt(e,n,a){if(Z(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Dt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ot(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Bt,te;function Qt(e){if(Bt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Bt=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bt+e+te}var Xt=!1;function ue(e,n){if(!e||Xt)return"";Xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(st){var it=st}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(st){it=st}e.call(vt.prototype)}}else{try{throw Error()}catch(st){it=st}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(st){if(st&&it&&typeof st.stack=="string")return[st.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],A=f[1];if(y&&A){var I=y.split(`
`),tt=A.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===tt.length)for(o=I.length-1,u=tt.length-1;1<=o&&0<=u&&I[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==tt[u]){var ht=`
`+I[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{Xt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Qt(a):""}function Ce(e){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return ue(e.type,!1);case 11:return ue(e.type.render,!1);case 1:return ue(e.type,!0);case 31:return Qt("Activity");default:return""}}function ke(e){try{var n="";do n+=Ce(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Se(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(e){var n=ye(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){o=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ze(e){e._valueTracker||(e._valueTracker=Jt(e))}function Te(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ye(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function wn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var pa=/[\n"\\]/g;function Xe(e){return e.replace(pa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fi(e,n,a,o,u,f,y,A){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Se(n)):e.value!==""+Se(n)&&(e.value=""+Se(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?Cn(e,y,Se(n)):a!=null?Cn(e,y,Se(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Se(A):e.removeAttribute("name")}function He(e,n,a,o,u,f,y,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+Se(a):"",n=n!=null?""+Se(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y)}function Cn(e,n,a){n==="number"&&wn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ln(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Se(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function mn(e,n,a){if(n!=null&&(n=""+Se(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Se(a):""}function Tn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ct(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Se(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Ti(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Hi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Hi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Gd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Hd(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Hd(e,f,n[f])}function qc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_v=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qo(e){return _v.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Yc=null;function jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cs=null,Ds=null;function Vd(e){var n=Ii(e);if(n&&(e=n.stateNode)){var a=e[En]||null;t:switch(e=n.stateNode,n.type){case"input":if(Fi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Xe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[En]||null;if(!u)throw Error(s(90));Fi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Te(o)}break t;case"textarea":mn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ln(e,!!a.multiple,n,!1)}}}var Zc=!1;function kd(e,n,a){if(Zc)return e(n,a);Zc=!0;try{var o=e(n);return o}finally{if(Zc=!1,(Cs!==null||Ds!==null)&&(zl(),Cs&&(n=Cs,e=Ds,Ds=Cs=null,Vd(n),e)))for(n=0;n<e.length;n++)Vd(e[n])}}function Lr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[En]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=!1;if(Gi)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{Kc=!1}var ma=null,Qc=null,Jo=null;function Xd(){if(Jo)return Jo;var e,n=Qc,a=n.length,o,u="value"in ma?ma.value:ma.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return Jo=u.slice(e,1<o?1-o:void 0)}function $o(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function Wd(){return!1}function In(e){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tl:Wd,this.isPropagationStopped=Wd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=In(Ja),Or=g({},Ja,{view:0,detail:0}),vv=In(Or),Jc,$c,Pr,nl=g({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?(Jc=e.screenX-Pr.screenX,$c=e.screenY-Pr.screenY):$c=Jc=0,Pr=e),Jc)},movementY:function(e){return"movementY"in e?e.movementY:$c}}),qd=In(nl),xv=g({},nl,{dataTransfer:0}),Sv=In(xv),yv=g({},Or,{relatedTarget:0}),tu=In(yv),Mv=g({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Ev=In(Mv),Tv=g({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bv=In(Tv),Av=g({},Ja,{data:0}),Yd=In(Av),Rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Cv[e])?!!n[e]:!1}function eu(){return Dv}var Uv=g({},Or,{key:function(e){if(e.key){var n=Rv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=$o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(e){return e.type==="keypress"?$o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lv=In(Uv),Nv=g({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=In(Nv),Ov=g({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),Pv=In(Ov),zv=g({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iv=In(zv),Bv=g({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fv=In(Bv),Hv=g({},Ja,{newState:0,oldState:0}),Gv=In(Hv),Vv=[9,13,27,32],nu=Gi&&"CompositionEvent"in window,zr=null;Gi&&"documentMode"in document&&(zr=document.documentMode);var kv=Gi&&"TextEvent"in window&&!zr,Zd=Gi&&(!nu||zr&&8<zr&&11>=zr),Kd=" ",Qd=!1;function Jd(e,n){switch(e){case"keyup":return Vv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $d(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Us=!1;function Xv(e,n){switch(e){case"compositionend":return $d(n);case"keypress":return n.which!==32?null:(Qd=!0,Kd);case"textInput":return e=n.data,e===Kd&&Qd?null:e;default:return null}}function Wv(e,n){if(Us)return e==="compositionend"||!nu&&Jd(e,n)?(e=Xd(),Jo=Qc=ma=null,Us=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zd&&n.locale!=="ko"?null:n.data;default:return null}}var qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!qv[e.type]:n==="textarea"}function ep(e,n,a,o){Cs?Ds?Ds.push(o):Ds=[o]:Cs=o,n=Vl(n,"onChange"),0<n.length&&(a=new el("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Ir=null,Br=null;function Yv(e){Pg(e,0)}function il(e){var n=Qa(e);if(Te(n))return e}function np(e,n){if(e==="change")return n}var ip=!1;if(Gi){var iu;if(Gi){var au="oninput"in document;if(!au){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),au=typeof ap.oninput=="function"}iu=au}else iu=!1;ip=iu&&(!document.documentMode||9<document.documentMode)}function sp(){Ir&&(Ir.detachEvent("onpropertychange",rp),Br=Ir=null)}function rp(e){if(e.propertyName==="value"&&il(Br)){var n=[];ep(n,Br,e,jc(e)),kd(Yv,n)}}function jv(e,n,a){e==="focusin"?(sp(),Ir=n,Br=a,Ir.attachEvent("onpropertychange",rp)):e==="focusout"&&sp()}function Zv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return il(Br)}function Kv(e,n){if(e==="click")return il(n)}function Qv(e,n){if(e==="input"||e==="change")return il(n)}function Jv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:Jv;function Fr(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Oe.call(n,u)||!qn(e[u],n[u]))return!1}return!0}function op(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lp(e,n){var a=op(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=op(a)}}function cp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?cp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function up(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=wn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=wn(e.document)}return n}function su(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var $v=Gi&&"documentMode"in document&&11>=document.documentMode,Ls=null,ru=null,Hr=null,ou=!1;function fp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ou||Ls==null||Ls!==wn(o)||(o=Ls,"selectionStart"in o&&su(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Hr&&Fr(Hr,o)||(Hr=o,o=Vl(ru,"onSelect"),0<o.length&&(n=new el("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ls)))}function $a(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ns={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},lu={},hp={};Gi&&(hp=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function ts(e){if(lu[e])return lu[e];if(!Ns[e])return e;var n=Ns[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in hp)return lu[e]=n[a];return e}var dp=ts("animationend"),pp=ts("animationiteration"),mp=ts("animationstart"),tx=ts("transitionrun"),ex=ts("transitionstart"),nx=ts("transitioncancel"),gp=ts("transitionend"),_p=new Map,cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cu.push("scrollEnd");function pi(e,n){_p.set(e,n),Bi(n,[e])}var vp=new WeakMap;function ai(e,n){if(typeof e=="object"&&e!==null){var a=vp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ke(n)},vp.set(e,n),n)}return{value:e,source:n,stack:ke(n)}}var si=[],Os=0,uu=0;function al(){for(var e=Os,n=uu=Os=0;n<e;){var a=si[n];si[n++]=null;var o=si[n];si[n++]=null;var u=si[n];si[n++]=null;var f=si[n];if(si[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&xp(a,u,f)}}function sl(e,n,a,o){si[Os++]=e,si[Os++]=n,si[Os++]=a,si[Os++]=o,uu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function fu(e,n,a,o){return sl(e,n,a,o),rl(e)}function Ps(e,n){return sl(e,null,null,n),rl(e)}function xp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Pt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function rl(e){if(50<fo)throw fo=0,vf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zs={};function ix(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,o){return new ix(e,n,a,o)}function hu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vi(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Sp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ol(e,n,a,o,u,f){var y=0;if(o=e,typeof e=="function")hu(e)&&(y=1);else if(typeof e=="string")y=sS(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Yn(31,a,n,u),e.elementType=D,e.lanes=f,e;case E:return es(a.children,u,f,n);case T:y=8,u|=24;break;case S:return e=Yn(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case H:return e=Yn(13,a,n,u),e.elementType=H,e.lanes=f,e;case B:return e=Yn(19,a,n,u),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case L:y=10;break t;case O:y=9;break t;case C:y=11;break t;case P:y=14;break t;case W:y=16,o=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Yn(y,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function es(e,n,a,o){return e=Yn(7,e,o,n),e.lanes=a,e}function du(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function pu(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Is=[],Bs=0,ll=null,cl=0,ri=[],oi=0,ns=null,ki=1,Xi="";function is(e,n){Is[Bs++]=cl,Is[Bs++]=ll,ll=e,cl=n}function yp(e,n,a){ri[oi++]=ki,ri[oi++]=Xi,ri[oi++]=ns,ns=e;var o=ki;e=Xi;var u=32-Pt(o)-1;o&=~(1<<u),a+=1;var f=32-Pt(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,ki=1<<32-Pt(n)+u|a<<u|o,Xi=f+e}else ki=1<<f|a<<u|o,Xi=e}function mu(e){e.return!==null&&(is(e,1),yp(e,1,0))}function gu(e){for(;e===ll;)ll=Is[--Bs],Is[Bs]=null,cl=Is[--Bs],Is[Bs]=null;for(;e===ns;)ns=ri[--oi],ri[oi]=null,Xi=ri[--oi],ri[oi]=null,ki=ri[--oi],ri[oi]=null}var On=null,Ke=null,De=!1,as=null,bi=!1,_u=Error(s(519));function ss(e){var n=Error(s(418,""));throw kr(ai(n,e)),_u}function Mp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[En]=o,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)ge(po[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),He(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ze(n);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Tn(n,o.value,o.defaultValue,o.children),Ze(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Fg(n.textContent,a)?(o.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),o.onScroll!=null&&ge("scroll",n),o.onScrollEnd!=null&&ge("scrollend",n),o.onClick!=null&&(n.onclick=kl),n=!0):n=!1,n||ss(e)}function Ep(e){for(On=e.return;On;)switch(On.tag){case 5:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:On=On.return}}function Gr(e){if(e!==On)return!1;if(!De)return Ep(e),De=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Of(e.type,e.memoizedProps)),a=!a),a&&Ke&&ss(e),Ep(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ke=gi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ke=null}}else n===27?(n=Ke,Ua(e.type)?(e=Bf,Bf=null,Ke=e):Ke=n):Ke=On?gi(e.stateNode.nextSibling):null;return!0}function Vr(){Ke=On=null,De=!1}function Tp(){var e=as;return e!==null&&(Hn===null?Hn=e:Hn.push.apply(Hn,e),as=null),e}function kr(e){as===null?as=[e]:as.push(e)}var vu=J(null),rs=null,Wi=null;function ga(e,n,a){yt(vu,n._currentValue),n._currentValue=a}function qi(e){e._currentValue=vu.current,gt(vu)}function xu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Su(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var I=0;I<n.length;I++)if(A.context===n[I]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),xu(f.return,a,e),o||(y=null);break t}f=A.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),xu(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Xr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var A=u.type;qn(u.pendingProps.value,y.value)||(e!==null?e.push(A):e=[A])}}else if(u===wt.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(So):e=[So])}u=u.return}e!==null&&Su(n,e,a,o),n.flags|=262144}function ul(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function os(e){rs=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return bp(rs,e)}function fl(e,n){return rs===null&&os(e),bp(e,n)}function bp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Wi===null){if(e===null)throw Error(s(308));Wi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Wi=Wi.next=n;return a}var ax=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},sx=r.unstable_scheduleCallback,rx=r.unstable_NormalPriority,cn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yu(){return{controller:new ax,data:new Map,refCount:0}}function Wr(e){e.refCount--,e.refCount===0&&sx(rx,function(){e.controller.abort()})}var qr=null,Mu=0,Fs=0,Hs=null;function ox(e,n){if(qr===null){var a=qr=[];Mu=0,Fs=bf(),Hs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Mu++,n.then(Ap,Ap),n}function Ap(){if(--Mu===0&&qr!==null){Hs!==null&&(Hs.status="fulfilled");var e=qr;qr=null,Fs=0,Hs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function lx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Rp=z.S;z.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&ox(e,n),Rp!==null&&Rp(e,n)};var ls=J(null);function Eu(){var e=ls.current;return e!==null?e:We.pooledCache}function hl(e,n){n===null?yt(ls,ls.current):yt(ls,n.pool)}function wp(){var e=Eu();return e===null?null:{parent:cn._currentValue,pool:e}}var Yr=Error(s(460)),Cp=Error(s(474)),dl=Error(s(542)),Tu={then:function(){}};function Dp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pl(){}function Up(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(pl,pl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Np(e),e;default:if(typeof n.status=="string")n.then(pl,pl);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Np(e),e}throw jr=n,Yr}}var jr=null;function Lp(){if(jr===null)throw Error(s(459));var e=jr;return jr=null,e}function Np(e){if(e===Yr||e===dl)throw Error(s(483))}var _a=!1;function bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Au(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Le&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=rl(e),xp(e,null,a),n}return sl(e,o,n,a),rl(e)}function Zr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ft(e,a)}}function Ru(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var wu=!1;function Kr(){if(wu){var e=Hs;if(e!==null)throw e}}function Qr(e,n,a,o){wu=!1;var u=e.updateQueue;_a=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var I=A,tt=I.next;I.next=null,y===null?f=tt:y.next=tt,y=I;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,A=ht.lastBaseUpdate,A!==y&&(A===null?ht.firstBaseUpdate=tt:A.next=tt,ht.lastBaseUpdate=I))}if(f!==null){var vt=u.baseState;y=0,ht=tt=I=null,A=f;do{var it=A.lane&-536870913,st=it!==A.lane;if(st?(Me&it)===it:(o&it)===it){it!==0&&it===Fs&&(wu=!0),ht!==null&&(ht=ht.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ne=e,$t=A;it=n;var Ie=a;switch($t.tag){case 1:if(ne=$t.payload,typeof ne=="function"){vt=ne.call(Ie,vt,it);break t}vt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=$t.payload,it=typeof ne=="function"?ne.call(Ie,vt,it):ne,it==null)break t;vt=g({},vt,it);break t;case 2:_a=!0}}it=A.callback,it!==null&&(e.flags|=64,st&&(e.flags|=8192),st=u.callbacks,st===null?u.callbacks=[it]:st.push(it))}else st={lane:it,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ht===null?(tt=ht=st,I=vt):ht=ht.next=st,y|=it;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;st=A,A=st.next,st.next=null,u.lastBaseUpdate=st,u.shared.pending=null}}while(!0);ht===null&&(I=vt),u.baseState=I,u.firstBaseUpdate=tt,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),Ra|=y,e.lanes=y,e.memoizedState=vt}}function Op(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Pp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Op(a[e],n)}var Gs=J(null),ml=J(0);function zp(e,n){e=$i,yt(ml,e),yt(Gs,n),$i=e|n.baseLanes}function Cu(){yt(ml,$i),yt(Gs,Gs.current)}function Du(){$i=ml.current,gt(Gs),gt(ml)}var Sa=0,fe=null,Pe=null,an=null,gl=!1,Vs=!1,cs=!1,_l=0,Jr=0,ks=null,cx=0;function tn(){throw Error(s(321))}function Uu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function Lu(e,n,a,o,u,f){return Sa=f,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?xm:Sm,cs=!1,f=a(o,u),cs=!1,Vs&&(f=Bp(n,a,o,u)),Ip(e),f}function Ip(e){z.H=El;var n=Pe!==null&&Pe.next!==null;if(Sa=0,an=Pe=fe=null,gl=!1,Jr=0,ks=null,n)throw Error(s(300));e===null||gn||(e=e.dependencies,e!==null&&ul(e)&&(gn=!0))}function Bp(e,n,a,o){fe=e;var u=0;do{if(Vs&&(ks=null),Jr=0,Vs=!1,25<=u)throw Error(s(301));if(u+=1,an=Pe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=gx,f=n(a,o)}while(Vs);return f}function ux(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?$r(n):n,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(fe.flags|=1024),n}function Nu(){var e=_l!==0;return _l=0,e}function Ou(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Pu(e){if(gl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}gl=!1}Sa=0,an=Pe=fe=null,Vs=!1,Jr=_l=0,ks=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?fe.memoizedState=an=e:an=an.next=e,an}function sn(){if(Pe===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var n=an===null?fe.memoizedState:an.next;if(n!==null)an=n,Pe=e;else{if(e===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},an===null?fe.memoizedState=an=e:an=an.next=e}return an}function zu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $r(e){var n=Jr;return Jr+=1,ks===null&&(ks=[]),e=Up(ks,e,n),n=fe,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?xm:Sm),e}function vl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $r(e);if(e.$$typeof===L)return Dn(e)}throw Error(s(438,String(e)))}function Iu(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=zu(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function Yi(e,n){return typeof n=="function"?n(e):n}function xl(e){var n=sn();return Bu(n,Pe,e)}function Bu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=y=null,I=null,tt=n,ht=!1;do{var vt=tt.lane&-536870913;if(vt!==tt.lane?(Me&vt)===vt:(Sa&vt)===vt){var it=tt.revertLane;if(it===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),vt===Fs&&(ht=!0);else if((Sa&it)===it){tt=tt.next,it===Fs&&(ht=!0);continue}else vt={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(A=I=vt,y=f):I=I.next=vt,fe.lanes|=it,Ra|=it;vt=tt.action,cs&&a(f,vt),f=tt.hasEagerState?tt.eagerState:a(f,vt)}else it={lane:vt,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(A=I=it,y=f):I=I.next=it,fe.lanes|=vt,Ra|=vt;tt=tt.next}while(tt!==null&&tt!==n);if(I===null?y=f:I.next=A,!qn(f,e.memoizedState)&&(gn=!0,ht&&(a=Hs,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=I,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Fu(e){var n=sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);qn(f,n.memoizedState)||(gn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Fp(e,n,a){var o=fe,u=sn(),f=De;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!qn((Pe||u).memoizedState,a);y&&(u.memoizedState=a,gn=!0),u=u.queue;var A=Vp.bind(null,o,u,e);if(to(2048,8,A,[e]),u.getSnapshot!==n||y||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,Xs(9,Sl(),Gp.bind(null,o,u,a,n),null),We===null)throw Error(s(349));f||(Sa&124)!==0||Hp(o,n,a)}return a}function Hp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=zu(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Gp(e,n,a,o){n.value=a,n.getSnapshot=o,kp(n)&&Xp(e)}function Vp(e,n,a){return a(function(){kp(n)&&Xp(e)})}function kp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function Xp(e){var n=Ps(e,2);n!==null&&Jn(n,e,2)}function Hu(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),cs){lt(!0);try{a()}finally{lt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:e},n}function Wp(e,n,a,o){return e.baseState=a,Bu(e,Pe,typeof o=="function"?o:Yi)}function fx(e,n,a,o,u){if(Ml(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};z.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,qp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function qp(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=z.T,y={};z.T=y;try{var A=a(u,o),I=z.S;I!==null&&I(y,A),Yp(e,n,A)}catch(tt){Gu(e,n,tt)}finally{z.T=f}}else try{f=a(u,o),Yp(e,n,f)}catch(tt){Gu(e,n,tt)}}function Yp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){jp(e,n,o)},function(o){return Gu(e,n,o)}):jp(e,n,a)}function jp(e,n,a){n.status="fulfilled",n.value=a,Zp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,qp(e,a)))}function Gu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Zp(n),n=n.next;while(n!==o)}e.action=null}function Zp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Kp(e,n){return n}function Qp(e,n){if(De){var a=We.formState;if(a!==null){t:{var o=fe;if(De){if(Ke){e:{for(var u=Ke,f=bi;u.nodeType!==8;){if(!f){u=null;break e}if(u=gi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ke=gi(u.nextSibling),o=u.data==="F!";break t}}ss(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kp,lastRenderedState:n},a.queue=o,a=gm.bind(null,fe,o),o.dispatch=a,o=Hu(!1),f=qu.bind(null,fe,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=fx.bind(null,fe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Jp(e){var n=sn();return $p(n,Pe,e)}function $p(e,n,a){if(n=Bu(e,n,Kp)[0],e=xl(Yi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=$r(n)}catch(y){throw y===Yr?dl:y}else o=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,Xs(9,Sl(),hx.bind(null,u,a),null)),[o,f,e]}function hx(e,n){e.action=n}function tm(e){var n=sn(),a=Pe;if(a!==null)return $p(n,a,e);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Xs(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=fe.updateQueue,n===null&&(n=zu(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Sl(){return{destroy:void 0,resource:void 0}}function em(){return sn().memoizedState}function yl(e,n,a,o){var u=Bn();o=o===void 0?null:o,fe.flags|=e,u.memoizedState=Xs(1|n,Sl(),a,o)}function to(e,n,a,o){var u=sn();o=o===void 0?null:o;var f=u.memoizedState.inst;Pe!==null&&o!==null&&Uu(o,Pe.memoizedState.deps)?u.memoizedState=Xs(n,f,a,o):(fe.flags|=e,u.memoizedState=Xs(1|n,f,a,o))}function nm(e,n){yl(8390656,8,e,n)}function im(e,n){to(2048,8,e,n)}function am(e,n){return to(4,2,e,n)}function sm(e,n){return to(4,4,e,n)}function rm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function om(e,n,a){a=a!=null?a.concat([e]):null,to(4,4,rm.bind(null,n,e),a)}function Vu(){}function lm(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Uu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function cm(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Uu(n,o[1]))return o[0];if(o=e(),cs){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[o,n],o}function ku(e,n,a){return a===void 0||(Sa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=hg(),fe.lanes|=e,Ra|=e,a)}function um(e,n,a,o){return qn(a,n)?a:Gs.current!==null?(e=ku(e,a,o),qn(e,n)||(gn=!0),e):(Sa&42)===0?(gn=!0,e.memoizedState=a):(e=hg(),fe.lanes|=e,Ra|=e,n)}function fm(e,n,a,o,u){var f=K.p;K.p=f!==0&&8>f?f:8;var y=z.T,A={};z.T=A,qu(e,!1,n,a);try{var I=u(),tt=z.S;if(tt!==null&&tt(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ht=lx(I,o);eo(e,n,ht,Qn(e))}else eo(e,n,o,Qn(e))}catch(vt){eo(e,n,{then:function(){},status:"rejected",reason:vt},Qn())}finally{K.p=f,z.T=y}}function dx(){}function Xu(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=hm(e).queue;fm(e,u,n,X,a===null?dx:function(){return dm(e),a(o)})}function hm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:X},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function dm(e){var n=hm(e).next.queue;eo(e,n,{},Qn())}function Wu(){return Dn(So)}function pm(){return sn().memoizedState}function mm(){return sn().memoizedState}function px(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=va(a);var o=xa(n,e,a);o!==null&&(Jn(o,n,a),Zr(o,n,a)),n={cache:yu()},e.payload=n;return}n=n.return}}function mx(e,n,a){var o=Qn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ml(e)?_m(n,a):(a=fu(e,n,a,o),a!==null&&(Jn(a,e,o),vm(a,n,o)))}function gm(e,n,a){var o=Qn();eo(e,n,a,o)}function eo(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ml(e))_m(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,A=f(y,a);if(u.hasEagerState=!0,u.eagerState=A,qn(A,y))return sl(e,n,u,0),We===null&&al(),!1}catch{}finally{}if(a=fu(e,n,u,o),a!==null)return Jn(a,e,o),vm(a,n,o),!0}return!1}function qu(e,n,a,o){if(o={lane:2,revertLane:bf(),action:o,hasEagerState:!1,eagerState:null,next:null},Ml(e)){if(n)throw Error(s(479))}else n=fu(e,a,o,2),n!==null&&Jn(n,e,2)}function Ml(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function _m(e,n){Vs=gl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function vm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ft(e,a)}}var El={readContext:Dn,use:vl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn},xm={readContext:Dn,use:vl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:Dn,useEffect:nm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,yl(4194308,4,rm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return yl(4194308,4,e,n)},useInsertionEffect:function(e,n){yl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(cs){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(cs){lt(!0);try{a(n)}finally{lt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=mx.bind(null,fe,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=Hu(e);var n=e.queue,a=gm.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Vu,useDeferredValue:function(e,n){var a=Bn();return ku(a,e,n)},useTransition:function(){var e=Hu(!1);return e=fm.bind(null,fe,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=fe,u=Bn();if(De){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),We===null)throw Error(s(349));(Me&124)!==0||Hp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,nm(Vp.bind(null,o,f,e),[e]),o.flags|=2048,Xs(9,Sl(),Gp.bind(null,o,f,a,n),null),a},useId:function(){var e=Bn(),n=We.identifierPrefix;if(De){var a=Xi,o=ki;a=(o&~(1<<32-Pt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=_l++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=cx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Wu,useFormState:Qp,useActionState:Qp,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=qu.bind(null,fe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Iu,useCacheRefresh:function(){return Bn().memoizedState=px.bind(null,fe)}},Sm={readContext:Dn,use:vl,useCallback:lm,useContext:Dn,useEffect:im,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:sm,useMemo:cm,useReducer:xl,useRef:em,useState:function(){return xl(Yi)},useDebugValue:Vu,useDeferredValue:function(e,n){var a=sn();return um(a,Pe.memoizedState,e,n)},useTransition:function(){var e=xl(Yi)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:$r(e),n]},useSyncExternalStore:Fp,useId:pm,useHostTransitionStatus:Wu,useFormState:Jp,useActionState:Jp,useOptimistic:function(e,n){var a=sn();return Wp(a,Pe,e,n)},useMemoCache:Iu,useCacheRefresh:mm},gx={readContext:Dn,use:vl,useCallback:lm,useContext:Dn,useEffect:im,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:sm,useMemo:cm,useReducer:Fu,useRef:em,useState:function(){return Fu(Yi)},useDebugValue:Vu,useDeferredValue:function(e,n){var a=sn();return Pe===null?ku(a,e,n):um(a,Pe.memoizedState,e,n)},useTransition:function(){var e=Fu(Yi)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:$r(e),n]},useSyncExternalStore:Fp,useId:pm,useHostTransitionStatus:Wu,useFormState:tm,useActionState:tm,useOptimistic:function(e,n){var a=sn();return Pe!==null?Wp(a,Pe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Iu,useCacheRefresh:mm},Ws=null,no=0;function Tl(e){var n=no;return no+=1,Ws===null&&(Ws=[]),Up(Ws,e,n)}function io(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function bl(e,n){throw n.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function ym(e){var n=e._init;return n(e._payload)}function Mm(e){function n(q,V){if(e){var $=q.deletions;$===null?(q.deletions=[V],q.flags|=16):$.push(V)}}function a(q,V){if(!e)return null;for(;V!==null;)n(q,V),V=V.sibling;return null}function o(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function u(q,V){return q=Vi(q,V),q.index=0,q.sibling=null,q}function f(q,V,$){return q.index=$,e?($=q.alternate,$!==null?($=$.index,$<V?(q.flags|=67108866,V):$):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function y(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function A(q,V,$,mt){return V===null||V.tag!==6?(V=du($,q.mode,mt),V.return=q,V):(V=u(V,$),V.return=q,V)}function I(q,V,$,mt){var Ht=$.type;return Ht===E?ht(q,V,$.props.children,mt,$.key):V!==null&&(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===W&&ym(Ht)===V.type)?(V=u(V,$.props),io(V,$),V.return=q,V):(V=ol($.type,$.key,$.props,null,q.mode,mt),io(V,$),V.return=q,V)}function tt(q,V,$,mt){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=pu($,q.mode,mt),V.return=q,V):(V=u(V,$.children||[]),V.return=q,V)}function ht(q,V,$,mt,Ht){return V===null||V.tag!==7?(V=es($,q.mode,mt,Ht),V.return=q,V):(V=u(V,$),V.return=q,V)}function vt(q,V,$){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=du(""+V,q.mode,$),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return $=ol(V.type,V.key,V.props,null,q.mode,$),io($,V),$.return=q,$;case M:return V=pu(V,q.mode,$),V.return=q,V;case W:var mt=V._init;return V=mt(V._payload),vt(q,V,$)}if(ct(V)||et(V))return V=es(V,q.mode,$,null),V.return=q,V;if(typeof V.then=="function")return vt(q,Tl(V),$);if(V.$$typeof===L)return vt(q,fl(q,V),$);bl(q,V)}return null}function it(q,V,$,mt){var Ht=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ht!==null?null:A(q,V,""+$,mt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case x:return $.key===Ht?I(q,V,$,mt):null;case M:return $.key===Ht?tt(q,V,$,mt):null;case W:return Ht=$._init,$=Ht($._payload),it(q,V,$,mt)}if(ct($)||et($))return Ht!==null?null:ht(q,V,$,mt,null);if(typeof $.then=="function")return it(q,V,Tl($),mt);if($.$$typeof===L)return it(q,V,fl(q,$),mt);bl(q,$)}return null}function st(q,V,$,mt,Ht){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return q=q.get($)||null,A(V,q,""+mt,Ht);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case x:return q=q.get(mt.key===null?$:mt.key)||null,I(V,q,mt,Ht);case M:return q=q.get(mt.key===null?$:mt.key)||null,tt(V,q,mt,Ht);case W:var he=mt._init;return mt=he(mt._payload),st(q,V,$,mt,Ht)}if(ct(mt)||et(mt))return q=q.get($)||null,ht(V,q,mt,Ht,null);if(typeof mt.then=="function")return st(q,V,$,Tl(mt),Ht);if(mt.$$typeof===L)return st(q,V,$,fl(V,mt),Ht);bl(V,mt)}return null}function ne(q,V,$,mt){for(var Ht=null,he=null,qt=V,ee=V=0,vn=null;qt!==null&&ee<$.length;ee++){qt.index>ee?(vn=qt,qt=null):vn=qt.sibling;var Ae=it(q,qt,$[ee],mt);if(Ae===null){qt===null&&(qt=vn);break}e&&qt&&Ae.alternate===null&&n(q,qt),V=f(Ae,V,ee),he===null?Ht=Ae:he.sibling=Ae,he=Ae,qt=vn}if(ee===$.length)return a(q,qt),De&&is(q,ee),Ht;if(qt===null){for(;ee<$.length;ee++)qt=vt(q,$[ee],mt),qt!==null&&(V=f(qt,V,ee),he===null?Ht=qt:he.sibling=qt,he=qt);return De&&is(q,ee),Ht}for(qt=o(qt);ee<$.length;ee++)vn=st(qt,q,ee,$[ee],mt),vn!==null&&(e&&vn.alternate!==null&&qt.delete(vn.key===null?ee:vn.key),V=f(vn,V,ee),he===null?Ht=vn:he.sibling=vn,he=vn);return e&&qt.forEach(function(za){return n(q,za)}),De&&is(q,ee),Ht}function $t(q,V,$,mt){if($==null)throw Error(s(151));for(var Ht=null,he=null,qt=V,ee=V=0,vn=null,Ae=$.next();qt!==null&&!Ae.done;ee++,Ae=$.next()){qt.index>ee?(vn=qt,qt=null):vn=qt.sibling;var za=it(q,qt,Ae.value,mt);if(za===null){qt===null&&(qt=vn);break}e&&qt&&za.alternate===null&&n(q,qt),V=f(za,V,ee),he===null?Ht=za:he.sibling=za,he=za,qt=vn}if(Ae.done)return a(q,qt),De&&is(q,ee),Ht;if(qt===null){for(;!Ae.done;ee++,Ae=$.next())Ae=vt(q,Ae.value,mt),Ae!==null&&(V=f(Ae,V,ee),he===null?Ht=Ae:he.sibling=Ae,he=Ae);return De&&is(q,ee),Ht}for(qt=o(qt);!Ae.done;ee++,Ae=$.next())Ae=st(qt,q,ee,Ae.value,mt),Ae!==null&&(e&&Ae.alternate!==null&&qt.delete(Ae.key===null?ee:Ae.key),V=f(Ae,V,ee),he===null?Ht=Ae:he.sibling=Ae,he=Ae);return e&&qt.forEach(function(_S){return n(q,_S)}),De&&is(q,ee),Ht}function Ie(q,V,$,mt){if(typeof $=="object"&&$!==null&&$.type===E&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case x:t:{for(var Ht=$.key;V!==null;){if(V.key===Ht){if(Ht=$.type,Ht===E){if(V.tag===7){a(q,V.sibling),mt=u(V,$.props.children),mt.return=q,q=mt;break t}}else if(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===W&&ym(Ht)===V.type){a(q,V.sibling),mt=u(V,$.props),io(mt,$),mt.return=q,q=mt;break t}a(q,V);break}else n(q,V);V=V.sibling}$.type===E?(mt=es($.props.children,q.mode,mt,$.key),mt.return=q,q=mt):(mt=ol($.type,$.key,$.props,null,q.mode,mt),io(mt,$),mt.return=q,q=mt)}return y(q);case M:t:{for(Ht=$.key;V!==null;){if(V.key===Ht)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){a(q,V.sibling),mt=u(V,$.children||[]),mt.return=q,q=mt;break t}else{a(q,V);break}else n(q,V);V=V.sibling}mt=pu($,q.mode,mt),mt.return=q,q=mt}return y(q);case W:return Ht=$._init,$=Ht($._payload),Ie(q,V,$,mt)}if(ct($))return ne(q,V,$,mt);if(et($)){if(Ht=et($),typeof Ht!="function")throw Error(s(150));return $=Ht.call($),$t(q,V,$,mt)}if(typeof $.then=="function")return Ie(q,V,Tl($),mt);if($.$$typeof===L)return Ie(q,V,fl(q,$),mt);bl(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,V!==null&&V.tag===6?(a(q,V.sibling),mt=u(V,$),mt.return=q,q=mt):(a(q,V),mt=du($,q.mode,mt),mt.return=q,q=mt),y(q)):a(q,V)}return function(q,V,$,mt){try{no=0;var Ht=Ie(q,V,$,mt);return Ws=null,Ht}catch(qt){if(qt===Yr||qt===dl)throw qt;var he=Yn(29,qt,null,q.mode);return he.lanes=mt,he.return=q,he}finally{}}}var qs=Mm(!0),Em=Mm(!1),li=J(null),Ai=null;function ya(e){var n=e.alternate;yt(un,un.current&1),yt(li,e),Ai===null&&(n===null||Gs.current!==null||n.memoizedState!==null)&&(Ai=e)}function Tm(e){if(e.tag===22){if(yt(un,un.current),yt(li,e),Ai===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ai=e)}}else Ma()}function Ma(){yt(un,un.current),yt(li,li.current)}function ji(e){gt(li),Ai===e&&(Ai=null),gt(un)}var un=J(0);function Al(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||If(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Yu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ju={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Qn(),u=va(o);u.payload=n,a!=null&&(u.callback=a),n=xa(e,u,o),n!==null&&(Jn(n,e,o),Zr(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Qn(),u=va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=xa(e,u,o),n!==null&&(Jn(n,e,o),Zr(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),o=va(a);o.tag=2,n!=null&&(o.callback=n),n=xa(e,o,a),n!==null&&(Jn(n,e,a),Zr(n,e,a))}};function bm(e,n,a,o,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!Fr(a,o)||!Fr(u,f):!0}function Am(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&ju.enqueueReplaceState(n,n.state,null)}function us(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Rl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Rm(e){Rl(e)}function wm(e){console.error(e)}function Cm(e){Rl(e)}function wl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Dm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Zu(e,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){wl(e,n)},a}function Um(e){return e=va(e),e.tag=3,e}function Lm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Dm(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Dm(n,a,o),typeof u!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function _x(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Xr(n,a,u,!0),a=li.current,a!==null){switch(a.tag){case 13:return Ai===null?Sf():a.alternate===null&&Qe===0&&(Qe=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Tu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Mf(e,o,u)),!1;case 22:return a.flags|=65536,o===Tu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Mf(e,o,u)),!1}throw Error(s(435,a.tag))}return Mf(e,o,u),Sf(),!1}if(De)return n=li.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==_u&&(e=Error(s(422),{cause:o}),kr(ai(e,a)))):(o!==_u&&(n=Error(s(423),{cause:o}),kr(ai(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ai(o,a),u=Zu(e.stateNode,o,u),Ru(e,u),Qe!==4&&(Qe=2)),!1;var f=Error(s(520),{cause:o});if(f=ai(f,a),uo===null?uo=[f]:uo.push(f),Qe!==4&&(Qe=2),n===null)return!0;o=ai(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Zu(a.stateNode,o,e),Ru(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(wa===null||!wa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Um(u),Lm(u,e,a,o),Ru(a,u),!1}a=a.return}while(a!==null);return!1}var Nm=Error(s(461)),gn=!1;function bn(e,n,a,o){n.child=e===null?Em(n,null,a,o):qs(n,e.child,a,o)}function Om(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var A in o)A!=="ref"&&(y[A]=o[A])}else y=o;return os(n),o=Lu(e,n,a,y,f,u),A=Nu(),e!==null&&!gn?(Ou(e,n,u),Zi(e,n,u)):(De&&A&&mu(n),n.flags|=1,bn(e,n,o,u),n.child)}function Pm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!hu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,zm(e,n,f,o,u)):(e=ol(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!af(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Fr,a(y,o)&&e.ref===n.ref)return Zi(e,n,u)}return n.flags|=1,e=Vi(f,o),e.ref=n.ref,e.return=n,n.child=e}function zm(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Fr(f,o)&&e.ref===n.ref)if(gn=!1,n.pendingProps=o=f,af(e,u))(e.flags&131072)!==0&&(gn=!0);else return n.lanes=e.lanes,Zi(e,n,u)}return Ku(e,n,a,o,u)}function Im(e,n,a){var o=n.pendingProps,u=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Bm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&hl(n,f!==null?f.cachePool:null),f!==null?zp(n,f):Cu(),Tm(n);else return n.lanes=n.childLanes=536870912,Bm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(hl(n,f.cachePool),zp(n,f),Ma(),n.memoizedState=null):(e!==null&&hl(n,null),Cu(),Ma());return bn(e,n,u,a),n.child}function Bm(e,n,a,o){var u=Eu();return u=u===null?null:{parent:cn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&hl(n,null),Cu(),Tm(n),e!==null&&Xr(e,n,o,!0),null}function Cl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Ku(e,n,a,o,u){return os(n),a=Lu(e,n,a,o,void 0,u),o=Nu(),e!==null&&!gn?(Ou(e,n,u),Zi(e,n,u)):(De&&o&&mu(n),n.flags|=1,bn(e,n,a,u),n.child)}function Fm(e,n,a,o,u,f){return os(n),n.updateQueue=null,a=Bp(n,o,a,u),Ip(e),o=Nu(),e!==null&&!gn?(Ou(e,n,f),Zi(e,n,f)):(De&&o&&mu(n),n.flags|=1,bn(e,n,a,f),n.child)}function Hm(e,n,a,o,u){if(os(n),n.stateNode===null){var f=zs,y=a.contextType;typeof y=="object"&&y!==null&&(f=Dn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ju,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},bu(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Dn(y):zs,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Yu(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&ju.enqueueReplaceState(f,f.state,null),Qr(n,o,f,u),Kr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,I=us(a,A);f.props=I;var tt=f.context,ht=a.contextType;y=zs,typeof ht=="object"&&ht!==null&&(y=Dn(ht));var vt=a.getDerivedStateFromProps;ht=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||tt!==y)&&Am(n,f,o,y),_a=!1;var it=n.memoizedState;f.state=it,Qr(n,o,f,u),Kr(),tt=n.memoizedState,A||it!==tt||_a?(typeof vt=="function"&&(Yu(n,a,vt,o),tt=n.memoizedState),(I=_a||bm(n,a,I,o,it,tt,y))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),f.props=o,f.state=tt,f.context=y,o=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Au(e,n),y=n.memoizedProps,ht=us(a,y),f.props=ht,vt=n.pendingProps,it=f.context,tt=a.contextType,I=zs,typeof tt=="object"&&tt!==null&&(I=Dn(tt)),A=a.getDerivedStateFromProps,(tt=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==vt||it!==I)&&Am(n,f,o,I),_a=!1,it=n.memoizedState,f.state=it,Qr(n,o,f,u),Kr();var st=n.memoizedState;y!==vt||it!==st||_a||e!==null&&e.dependencies!==null&&ul(e.dependencies)?(typeof A=="function"&&(Yu(n,a,A,o),st=n.memoizedState),(ht=_a||bm(n,a,ht,o,it,st,I)||e!==null&&e.dependencies!==null&&ul(e.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,st,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,st,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=st),f.props=o,f.state=st,f.context=I,o=ht):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Cl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=qs(n,e.child,null,u),n.child=qs(n,null,a,u)):bn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Zi(e,n,u),e}function Gm(e,n,a,o){return Vr(),n.flags|=256,bn(e,n,a,o),n.child}var Qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ju(e){return{baseLanes:e,cachePool:wp()}}function $u(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ci),e}function Vm(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(De){if(u?ya(n):Ma(),De){var A=Ke,I;if(I=A){t:{for(I=A,A=bi;I.nodeType!==8;){if(!A){A=null;break t}if(I=gi(I.nextSibling),I===null){A=null;break t}}A=I}A!==null?(n.memoizedState={dehydrated:A,treeContext:ns!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},I=Yn(18,null,null,0),I.stateNode=A,I.return=n,n.child=I,On=n,Ke=null,I=!0):I=!1}I||ss(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return If(A)?n.lanes=32:n.lanes=536870912,null;ji(n)}return A=o.children,o=o.fallback,u?(Ma(),u=n.mode,A=Dl({mode:"hidden",children:A},u),o=es(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,u=n.child,u.memoizedState=Ju(a),u.childLanes=$u(e,y,a),n.memoizedState=Qu,o):(ya(n),tf(n,A))}if(I=e.memoizedState,I!==null&&(A=I.dehydrated,A!==null)){if(f)n.flags&256?(ya(n),n.flags&=-257,n=ef(e,n,a)):n.memoizedState!==null?(Ma(),n.child=e.child,n.flags|=128,n=null):(Ma(),u=o.fallback,A=n.mode,o=Dl({mode:"visible",children:o.children},A),u=es(u,A,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,qs(n,e.child,null,a),o=n.child,o.memoizedState=Ju(a),o.childLanes=$u(e,y,a),n.memoizedState=Qu,n=u);else if(ya(n),If(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var tt=y.dgst;y=tt,o=Error(s(419)),o.stack="",o.digest=y,kr({value:o,source:null,stack:null}),n=ef(e,n,a)}else if(gn||Xr(e,n,a,!1),y=(a&e.childLanes)!==0,gn||y){if(y=We,y!==null&&(o=a&-a,o=(o&42)!==0?1:ie(o),o=(o&(y.suspendedLanes|a))!==0?0:o,o!==0&&o!==I.retryLane))throw I.retryLane=o,Ps(e,o),Jn(y,e,o),Nm;A.data==="$?"||Sf(),n=ef(e,n,a)}else A.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Ke=gi(A.nextSibling),On=n,De=!0,as=null,bi=!1,e!==null&&(ri[oi++]=ki,ri[oi++]=Xi,ri[oi++]=ns,ki=e.id,Xi=e.overflow,ns=n),n=tf(n,o.children),n.flags|=4096);return n}return u?(Ma(),u=o.fallback,A=n.mode,I=e.child,tt=I.sibling,o=Vi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,tt!==null?u=Vi(tt,u):(u=es(u,A,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,A=e.child.memoizedState,A===null?A=Ju(a):(I=A.cachePool,I!==null?(tt=cn._currentValue,I=I.parent!==tt?{parent:tt,pool:tt}:I):I=wp(),A={baseLanes:A.baseLanes|a,cachePool:I}),u.memoizedState=A,u.childLanes=$u(e,y,a),n.memoizedState=Qu,o):(ya(n),a=e.child,e=a.sibling,a=Vi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function tf(e,n){return n=Dl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Dl(e,n){return e=Yn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ef(e,n,a){return qs(n,e.child,null,a),e=tf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function km(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),xu(e.return,n,a)}function nf(e,n,a,o,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function Xm(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(bn(e,n,o.children,a),o=un.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&km(e,a,n);else if(e.tag===19)km(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(yt(un,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Al(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),nf(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Al(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}nf(n,!0,a,null,f);break;case"together":nf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Zi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Xr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Vi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Vi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function af(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ul(e)))}function vx(e,n,a){switch(n.tag){case 3:St(n,n.stateNode.containerInfo),ga(n,cn,e.memoizedState.cache),Vr();break;case 27:case 5:Wt(n);break;case 4:St(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Vm(e,n,a):(ya(n),e=Zi(e,n,a),e!==null?e.sibling:null);ya(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Xr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Xm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(un,un.current),o)break;return null;case 22:case 23:return n.lanes=0,Im(e,n,a);case 24:ga(n,cn,e.memoizedState.cache)}return Zi(e,n,a)}function Wm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)gn=!0;else{if(!af(e,a)&&(n.flags&128)===0)return gn=!1,vx(e,n,a);gn=(e.flags&131072)!==0}else gn=!1,De&&(n.flags&1048576)!==0&&yp(n,cl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")hu(o)?(e=us(o,e),n.tag=1,n=Hm(null,n,o,e,a)):(n.tag=0,n=Ku(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===C){n.tag=11,n=Om(null,n,o,e,a);break t}else if(u===P){n.tag=14,n=Pm(null,n,o,e,a);break t}}throw n=ut(o)||o,Error(s(306,n,""))}}return n;case 0:return Ku(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=us(o,n.pendingProps),Hm(e,n,o,u,a);case 3:t:{if(St(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Au(e,n),Qr(n,o,null,a);var y=n.memoizedState;if(o=y.cache,ga(n,cn,o),o!==f.cache&&Su(n,[cn],a,!0),Kr(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Gm(e,n,o,a);break t}else if(o!==u){u=ai(Error(s(424)),n),kr(u),n=Gm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ke=gi(e.firstChild),On=n,De=!0,as=null,bi=!0,a=Em(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Vr(),o===u){n=Zi(e,n,a);break t}bn(e,n,o,a)}n=n.child}return n;case 26:return Cl(e,n),e===null?(a=Zg(n.type,null,n.pendingProps,null))?n.memoizedState=a:De||(a=n.type,e=n.pendingProps,o=Xl(Mt.current).createElement(a),o[on]=n,o[En]=e,Rn(o,a,e),nn(o),n.stateNode=o):n.memoizedState=Zg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Wt(n),e===null&&De&&(o=n.stateNode=qg(n.type,n.pendingProps,Mt.current),On=n,bi=!0,u=Ke,Ua(n.type)?(Bf=u,Ke=gi(o.firstChild)):Ke=u),bn(e,n,n.pendingProps.children,a),Cl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&De&&((u=o=Ke)&&(o=qx(o,n.type,n.pendingProps,bi),o!==null?(n.stateNode=o,On=n,Ke=gi(o.firstChild),bi=!1,u=!0):u=!1),u||ss(n)),Wt(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,Of(u,f)?o=null:y!==null&&Of(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Lu(e,n,ux,null,null,a),So._currentValue=u),Cl(e,n),bn(e,n,o,a),n.child;case 6:return e===null&&De&&((e=a=Ke)&&(a=Yx(a,n.pendingProps,bi),a!==null?(n.stateNode=a,On=n,Ke=null,e=!0):e=!1),e||ss(n)),null;case 13:return Vm(e,n,a);case 4:return St(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=qs(n,null,o,a):bn(e,n,o,a),n.child;case 11:return Om(e,n,n.type,n.pendingProps,a);case 7:return bn(e,n,n.pendingProps,a),n.child;case 8:return bn(e,n,n.pendingProps.children,a),n.child;case 12:return bn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ga(n,n.type,o.value),bn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,os(n),u=Dn(u),o=o(u),n.flags|=1,bn(e,n,o,a),n.child;case 14:return Pm(e,n,n.type,n.pendingProps,a);case 15:return zm(e,n,n.type,n.pendingProps,a);case 19:return Xm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Dl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Vi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Im(e,n,a);case 24:return os(n),o=Dn(cn),e===null?(u=Eu(),u===null&&(u=We,f=yu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},bu(n),ga(n,cn,u)):((e.lanes&a)!==0&&(Au(e,n),Qr(n,null,null,a),Kr()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ga(n,cn,o)):(o=f.cache,ga(n,cn,o),o!==u.cache&&Su(n,[cn],a,!0))),bn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ki(e){e.flags|=4}function qm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!t_(n)){if(n=li.current,n!==null&&((Me&4194048)===Me?Ai!==null:(Me&62914560)!==Me&&(Me&536870912)===0||n!==Ai))throw jr=Tu,Cp;e.flags|=8192}}function Ul(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Lt():536870912,e.lanes|=n,Ks|=n)}function ao(e,n){if(!De)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function xx(e,n,a){var o=n.pendingProps;switch(gu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),qi(cn),Kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Gr(n)?Ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tp())),je(n),null;case 26:return a=n.memoizedState,e===null?(Ki(n),a!==null?(je(n),qm(n,a)):(je(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Ki(n),je(n),qm(n,a)):(je(n),n.flags&=-16777217):(e.memoizedProps!==o&&Ki(n),je(n),n.flags&=-16777217),null;case 27:we(n),a=Mt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return je(n),null}e=Q.current,Gr(n)?Mp(n):(e=qg(u,o,a),n.stateNode=e,Ki(n))}return je(n),null;case 5:if(we(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return je(n),null}if(e=Q.current,Gr(n))Mp(n);else{switch(u=Xl(Mt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[on]=n,e[En]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Rn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ki(n)}}return je(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=Mt.current,Gr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=On,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Fg(e.nodeValue,a)),e||ss(n)}else e=Xl(e).createTextNode(o),e[on]=n,n.stateNode=e}return je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Gr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else Vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),u=!1}else u=Tp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ji(n),n):(ji(n),null)}if(ji(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ul(n,n.updateQueue),je(n),null;case 4:return Kt(),e===null&&Cf(n.stateNode.containerInfo),je(n),null;case 10:return qi(n.type),je(n),null;case 19:if(gt(un),u=n.memoizedState,u===null)return je(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)ao(u,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Al(e),f!==null){for(n.flags|=128,ao(u,!1),e=f.updateQueue,n.updateQueue=e,Ul(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Sp(a,e),a=a.sibling;return yt(un,un.current&1|2),n.child}e=e.sibling}u.tail!==null&&pe()>Ol&&(n.flags|=128,o=!0,ao(u,!1),n.lanes=4194304)}else{if(!o)if(e=Al(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Ul(n,e),ao(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!De)return je(n),null}else 2*pe()-u.renderingStartTime>Ol&&a!==536870912&&(n.flags|=128,o=!0,ao(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=pe(),n.sibling=null,e=un.current,yt(un,o?e&1|2:e&1),n):(je(n),null);case 22:case 23:return ji(n),Du(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&Ul(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&gt(ls),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),qi(cn),je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Sx(e,n){switch(gu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return qi(cn),Kt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return we(n),null;case 13:if(ji(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Vr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return gt(un),null;case 4:return Kt(),null;case 10:return qi(n.type),null;case 22:case 23:return ji(n),Du(),e!==null&&gt(ls),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return qi(cn),null;case 25:return null;default:return null}}function Ym(e,n){switch(gu(n),n.tag){case 3:qi(cn),Kt();break;case 26:case 27:case 5:we(n);break;case 4:Kt();break;case 13:ji(n);break;case 19:gt(un);break;case 10:qi(n.type);break;case 22:case 23:ji(n),Du(),e!==null&&gt(ls);break;case 24:qi(cn)}}function so(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(A){Ge(n,n.return,A)}}function Ea(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var y=o.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,u=n;var I=a,tt=A;try{tt()}catch(ht){Ge(u,I,ht)}}}o=o.next}while(o!==f)}}catch(ht){Ge(n,n.return,ht)}}function jm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Pp(n,a)}catch(o){Ge(e,e.return,o)}}}function Zm(e,n,a){a.props=us(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function ro(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,n,u)}}function Ri(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function Km(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function sf(e,n,a){try{var o=e.stateNode;Gx(o,e.type,a,n),o[En]=n}catch(u){Ge(e,e.return,u)}}function Qm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ua(e.type)||e.tag===4}function rf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Qm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function of(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=kl));else if(o!==4&&(o===27&&Ua(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(of(e,n,a),e=e.sibling;e!==null;)of(e,n,a),e=e.sibling}function Ll(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ua(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ll(e,n,a),e=e.sibling;e!==null;)Ll(e,n,a),e=e.sibling}function Jm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,a),n[on]=e,n[En]=a}catch(f){Ge(e,e.return,f)}}var Qi=!1,en=!1,lf=!1,$m=typeof WeakSet=="function"?WeakSet:Set,_n=null;function yx(e,n){if(e=e.containerInfo,Lf=Kl,e=up(e),su(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,A=-1,I=-1,tt=0,ht=0,vt=e,it=null;e:for(;;){for(var st;vt!==a||u!==0&&vt.nodeType!==3||(A=y+u),vt!==f||o!==0&&vt.nodeType!==3||(I=y+o),vt.nodeType===3&&(y+=vt.nodeValue.length),(st=vt.firstChild)!==null;)it=vt,vt=st;for(;;){if(vt===e)break e;if(it===a&&++tt===u&&(A=y),it===f&&++ht===o&&(I=y),(st=vt.nextSibling)!==null)break;vt=it,it=vt.parentNode}vt=st}a=A===-1||I===-1?null:{start:A,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nf={focusedElem:e,selectionRange:a},Kl=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ne=us(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ne,f),o.__reactInternalSnapshotBeforeUpdate=e}catch($t){Ge(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)zf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function tg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ta(e,a),o&4&&so(5,a);break;case 1:if(Ta(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Ge(a,a.return,y)}else{var u=us(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ge(a,a.return,y)}}o&64&&jm(a),o&512&&ro(a,a.return);break;case 3:if(Ta(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Pp(e,n)}catch(y){Ge(a,a.return,y)}}break;case 27:n===null&&o&4&&Jm(a);case 26:case 5:Ta(e,a),n===null&&o&4&&Km(a),o&512&&ro(a,a.return);break;case 12:Ta(e,a);break;case 13:Ta(e,a),o&4&&ig(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Dx.bind(null,a),jx(e,a))));break;case 22:if(o=a.memoizedState!==null||Qi,!o){n=n!==null&&n.memoizedState!==null||en,u=Qi;var f=en;Qi=o,(en=n)&&!f?ba(e,a,(a.subtreeFlags&8772)!==0):Ta(e,a),Qi=u,en=f}break;case 30:break;default:Ta(e,a)}}function eg(e){var n=e.alternate;n!==null&&(e.alternate=null,eg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ha(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,Fn=!1;function Ji(e,n,a){for(a=a.child;a!==null;)ng(e,n,a),a=a.sibling}function ng(e,n,a){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(dt,a)}catch{}switch(a.tag){case 26:en||Ri(a,n),Ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:en||Ri(a,n);var o=qe,u=Fn;Ua(a.type)&&(qe=a.stateNode,Fn=!1),Ji(e,n,a),go(a.stateNode),qe=o,Fn=u;break;case 5:en||Ri(a,n);case 6:if(o=qe,u=Fn,qe=null,Ji(e,n,a),qe=o,Fn=u,qe!==null)if(Fn)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{qe.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:qe!==null&&(Fn?(e=qe,Xg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),To(e)):Xg(qe,a.stateNode));break;case 4:o=qe,u=Fn,qe=a.stateNode.containerInfo,Fn=!0,Ji(e,n,a),qe=o,Fn=u;break;case 0:case 11:case 14:case 15:en||Ea(2,a,n),en||Ea(4,a,n),Ji(e,n,a);break;case 1:en||(Ri(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Zm(a,n,o)),Ji(e,n,a);break;case 21:Ji(e,n,a);break;case 22:en=(o=en)||a.memoizedState!==null,Ji(e,n,a),en=o;break;default:Ji(e,n,a)}}function ig(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{To(e)}catch(a){Ge(n,n.return,a)}}function Mx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new $m),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new $m),n;default:throw Error(s(435,e.tag))}}function cf(e,n){var a=Mx(e);n.forEach(function(o){var u=Ux.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,y=n,A=y;t:for(;A!==null;){switch(A.tag){case 27:if(Ua(A.type)){qe=A.stateNode,Fn=!1;break t}break;case 5:qe=A.stateNode,Fn=!1;break t;case 3:case 4:qe=A.stateNode.containerInfo,Fn=!0;break t}A=A.return}if(qe===null)throw Error(s(160));ng(f,y,u),qe=null,Fn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)ag(n,e),n=n.sibling}var mi=null;function ag(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(n,e),Zn(e),o&4&&(Ea(3,e,e.return),so(3,e),Ea(5,e,e.return));break;case 1:jn(n,e),Zn(e),o&512&&(en||a===null||Ri(a,a.return)),o&64&&Qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=mi;if(jn(n,e),Zn(e),o&512&&(en||a===null||Ri(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[fa]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Rn(f,o,a),f[on]=e,nn(f),o=f;break t;case"link":var y=Jg("link","href",u).get(o+(a.href||""));if(y){for(var A=0;A<y.length;A++)if(f=y[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(A,1);break e}}f=u.createElement(o),Rn(f,o,a),u.head.appendChild(f);break;case"meta":if(y=Jg("meta","content",u).get(o+(a.content||""))){for(A=0;A<y.length;A++)if(f=y[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(A,1);break e}}f=u.createElement(o),Rn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[on]=e,nn(f),o=f}e.stateNode=o}else $g(u,e.type,e.stateNode);else e.stateNode=Qg(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?$g(u,e.type,e.stateNode):Qg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&sf(e,e.memoizedProps,a.memoizedProps)}break;case 27:jn(n,e),Zn(e),o&512&&(en||a===null||Ri(a,a.return)),a!==null&&o&4&&sf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,e),Zn(e),o&512&&(en||a===null||Ri(a,a.return)),e.flags&32){u=e.stateNode;try{Ti(u,"")}catch(st){Ge(e,e.return,st)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,sf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(lf=!0);break;case 6:if(jn(n,e),Zn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(st){Ge(e,e.return,st)}}break;case 3:if(Yl=null,u=mi,mi=Wl(n.containerInfo),jn(n,e),mi=u,Zn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{To(n.containerInfo)}catch(st){Ge(e,e.return,st)}lf&&(lf=!1,sg(e));break;case 4:o=mi,mi=Wl(e.stateNode.containerInfo),jn(n,e),Zn(e),mi=o;break;case 12:jn(n,e),Zn(e);break;case 13:jn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(mf=pe()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,cf(e,o)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,tt=Qi,ht=en;if(Qi=tt||u,en=ht||I,jn(n,e),en=ht,Qi=tt,Zn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||Qi||en||fs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=I.stateNode;var vt=I.memoizedProps.style,it=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;A.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(st){Ge(I,I.return,st)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(st){Ge(I,I.return,st)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,cf(e,a))));break;case 19:jn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,cf(e,o)));break;case 30:break;case 21:break;default:jn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Qm(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=rf(e);Ll(e,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(Ti(y,""),a.flags&=-33);var A=rf(e);Ll(e,A,y);break;case 3:case 4:var I=a.stateNode.containerInfo,tt=rf(e);of(e,tt,I);break;default:throw Error(s(161))}}catch(ht){Ge(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function sg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;sg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ta(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)tg(e,n.alternate,n),n=n.sibling}function fs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),fs(n);break;case 1:Ri(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Zm(n,n.return,a),fs(n);break;case 27:go(n.stateNode);case 26:case 5:Ri(n,n.return),fs(n);break;case 22:n.memoizedState===null&&fs(n);break;case 30:fs(n);break;default:fs(n)}e=e.sibling}}function ba(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:ba(u,f,a),so(4,f);break;case 1:if(ba(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Ge(o,o.return,tt)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)Op(I[u],A)}catch(tt){Ge(o,o.return,tt)}}a&&y&64&&jm(f),ro(f,f.return);break;case 27:Jm(f);case 26:case 5:ba(u,f,a),a&&o===null&&y&4&&Km(f),ro(f,f.return);break;case 12:ba(u,f,a);break;case 13:ba(u,f,a),a&&y&4&&ig(u,f);break;case 22:f.memoizedState===null&&ba(u,f,a),ro(f,f.return);break;case 30:break;default:ba(u,f,a)}n=n.sibling}}function uf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Wr(a))}function ff(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Wr(e))}function wi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)rg(e,n,a,o),n=n.sibling}function rg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:wi(e,n,a,o),u&2048&&so(9,n);break;case 1:wi(e,n,a,o);break;case 3:wi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Wr(e)));break;case 12:if(u&2048){wi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,A=f.onPostCommit;typeof A=="function"&&A(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Ge(n,n.return,I)}}else wi(e,n,a,o);break;case 13:wi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?wi(e,n,a,o):oo(e,n):f._visibility&2?wi(e,n,a,o):(f._visibility|=2,Ys(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&uf(y,n);break;case 24:wi(e,n,a,o),u&2048&&ff(n.alternate,n);break;default:wi(e,n,a,o)}}function Ys(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,y=n,A=a,I=o,tt=y.flags;switch(y.tag){case 0:case 11:case 15:Ys(f,y,A,I,u),so(8,y);break;case 23:break;case 22:var ht=y.stateNode;y.memoizedState!==null?ht._visibility&2?Ys(f,y,A,I,u):oo(f,y):(ht._visibility|=2,Ys(f,y,A,I,u)),u&&tt&2048&&uf(y.alternate,y);break;case 24:Ys(f,y,A,I,u),u&&tt&2048&&ff(y.alternate,y);break;default:Ys(f,y,A,I,u)}n=n.sibling}}function oo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:oo(a,o),u&2048&&uf(o.alternate,o);break;case 24:oo(a,o),u&2048&&ff(o.alternate,o);break;default:oo(a,o)}n=n.sibling}}var lo=8192;function js(e){if(e.subtreeFlags&lo)for(e=e.child;e!==null;)og(e),e=e.sibling}function og(e){switch(e.tag){case 26:js(e),e.flags&lo&&e.memoizedState!==null&&oS(mi,e.memoizedState,e.memoizedProps);break;case 5:js(e);break;case 3:case 4:var n=mi;mi=Wl(e.stateNode.containerInfo),js(e),mi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=lo,lo=16777216,js(e),lo=n):js(e));break;default:js(e)}}function lg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function co(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,ug(o,e)}lg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cg(e),e=e.sibling}function cg(e){switch(e.tag){case 0:case 11:case 15:co(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:co(e);break;case 12:co(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Nl(e)):co(e);break;default:co(e)}}function Nl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,ug(o,e)}lg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),Nl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Nl(n));break;default:Nl(n)}e=e.sibling}}function ug(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Wr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,_n=o;else t:for(a=e;_n!==null;){o=_n;var u=o.sibling,f=o.return;if(eg(o),o===a){_n=null;break t}if(u!==null){u.return=f,_n=u;break t}_n=f}}}var Ex={getCacheForType:function(e){var n=Dn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Tx=typeof WeakMap=="function"?WeakMap:Map,Le=0,We=null,me=null,Me=0,Ne=0,Kn=null,Aa=!1,Zs=!1,hf=!1,$i=0,Qe=0,Ra=0,hs=0,df=0,ci=0,Ks=0,uo=null,Hn=null,pf=!1,mf=0,Ol=1/0,Pl=null,wa=null,An=0,Ca=null,Qs=null,Js=0,gf=0,_f=null,fg=null,fo=0,vf=null;function Qn(){if((Le&2)!==0&&Me!==0)return Me&-Me;if(z.T!==null){var e=Fs;return e!==0?e:bf()}return be()}function hg(){ci===0&&(ci=(Me&536870912)===0||De?k():536870912);var e=li.current;return e!==null&&(e.flags|=32),ci}function Jn(e,n,a){(e===We&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&($s(e,0),Da(e,Me,ci,!1)),It(e,a),((Le&2)===0||e!==We)&&(e===We&&((Le&2)===0&&(hs|=a),Qe===4&&Da(e,Me,ci,!1)),Ci(e))}function dg(e,n,a){if((Le&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Ct(e,n),u=o?Rx(e,n):yf(e,n,!0),f=o;do{if(u===0){Zs&&!o&&Da(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!bx(a)){u=yf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var A=e;u=uo;var I=A.current.memoizedState.isDehydrated;if(I&&($s(A,y).flags|=256),y=yf(A,y,!1),y!==2){if(hf&&!I){A.errorRecoveryDisabledLanes|=f,hs|=f,u=4;break t}f=Hn,Hn=u,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){$s(e,0),Da(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Da(o,n,ci,!Aa);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=mf+300-pe(),10<u)){if(Da(o,n,ci,!Aa),jt(o,0,!0)!==0)break t;o.timeoutHandle=Vg(pg.bind(null,o,a,Hn,Pl,pf,n,ci,hs,Ks,Aa,f,2,-0,0),u);break t}pg(o,a,Hn,Pl,pf,n,ci,hs,Ks,Aa,f,0,-0,0)}}break}while(!0);Ci(e)}function pg(e,n,a,o,u,f,y,A,I,tt,ht,vt,it,st){if(e.timeoutHandle=-1,vt=n.subtreeFlags,(vt&8192||(vt&16785408)===16785408)&&(xo={stylesheets:null,count:0,unsuspend:rS},og(n),vt=lS(),vt!==null)){e.cancelPendingCommit=vt(yg.bind(null,e,n,f,a,o,u,y,A,I,ht,1,it,st)),Da(e,f,y,!tt);return}yg(e,n,f,a,o,u,y,A,I)}function bx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Da(e,n,a,o){n&=~df,n&=~hs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Pt(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&xt(e,a,n)}function zl(){return(Le&6)===0?(ho(0),!1):!0}function xf(){if(me!==null){if(Ne===0)var e=me.return;else e=me,Wi=rs=null,Pu(e),Ws=null,no=0,e=me;for(;e!==null;)Ym(e.alternate,e),e=e.return;me=null}}function $s(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,kx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),xf(),We=e,me=a=Vi(e.current,null),Me=n,Ne=0,Kn=null,Aa=!1,Zs=Ct(e,n),hf=!1,Ks=ci=df=hs=Ra=Qe=0,Hn=uo=null,pf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Pt(o),f=1<<u;n|=e[u],o&=~f}return $i=n,al(),a}function mg(e,n){fe=null,z.H=El,n===Yr||n===dl?(n=Lp(),Ne=3):n===Cp?(n=Lp(),Ne=4):Ne=n===Nm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,me===null&&(Qe=1,wl(e,ai(n,e.current)))}function gg(){var e=z.H;return z.H=El,e===null?El:e}function _g(){var e=z.A;return z.A=Ex,e}function Sf(){Qe=4,Aa||(Me&4194048)!==Me&&li.current!==null||(Zs=!0),(Ra&134217727)===0&&(hs&134217727)===0||We===null||Da(We,Me,ci,!1)}function yf(e,n,a){var o=Le;Le|=2;var u=gg(),f=_g();(We!==e||Me!==n)&&(Pl=null,$s(e,n)),n=!1;var y=Qe;t:do try{if(Ne!==0&&me!==null){var A=me,I=Kn;switch(Ne){case 8:xf(),y=6;break t;case 3:case 2:case 9:case 6:li.current===null&&(n=!0);var tt=Ne;if(Ne=0,Kn=null,tr(e,A,I,tt),a&&Zs){y=0;break t}break;default:tt=Ne,Ne=0,Kn=null,tr(e,A,I,tt)}}Ax(),y=Qe;break}catch(ht){mg(e,ht)}while(!0);return n&&e.shellSuspendCounter++,Wi=rs=null,Le=o,z.H=u,z.A=f,me===null&&(We=null,Me=0,al()),y}function Ax(){for(;me!==null;)vg(me)}function Rx(e,n){var a=Le;Le|=2;var o=gg(),u=_g();We!==e||Me!==n?(Pl=null,Ol=pe()+500,$s(e,n)):Zs=Ct(e,n);t:do try{if(Ne!==0&&me!==null){n=me;var f=Kn;e:switch(Ne){case 1:Ne=0,Kn=null,tr(e,n,f,1);break;case 2:case 9:if(Dp(f)){Ne=0,Kn=null,xg(n);break}n=function(){Ne!==2&&Ne!==9||We!==e||(Ne=7),Ci(e)},f.then(n,n);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:Dp(f)?(Ne=0,Kn=null,xg(n)):(Ne=0,Kn=null,tr(e,n,f,7));break;case 5:var y=null;switch(me.tag){case 26:y=me.memoizedState;case 5:case 27:var A=me;if(!y||t_(y)){Ne=0,Kn=null;var I=A.sibling;if(I!==null)me=I;else{var tt=A.return;tt!==null?(me=tt,Il(tt)):me=null}break e}}Ne=0,Kn=null,tr(e,n,f,5);break;case 6:Ne=0,Kn=null,tr(e,n,f,6);break;case 8:xf(),Qe=6;break t;default:throw Error(s(462))}}wx();break}catch(ht){mg(e,ht)}while(!0);return Wi=rs=null,z.H=o,z.A=u,Le=a,me!==null?0:(We=null,Me=0,al(),Qe)}function wx(){for(;me!==null&&!Mn();)vg(me)}function vg(e){var n=Wm(e.alternate,e,$i);e.memoizedProps=e.pendingProps,n===null?Il(e):me=n}function xg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Fm(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=Fm(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:Pu(n);default:Ym(a,n),n=me=Sp(n,$i),n=Wm(a,n,$i)}e.memoizedProps=e.pendingProps,n===null?Il(e):me=n}function tr(e,n,a,o){Wi=rs=null,Pu(n),Ws=null,no=0;var u=n.return;try{if(_x(e,u,n,a,Me)){Qe=1,wl(e,ai(a,e.current)),me=null;return}}catch(f){if(u!==null)throw me=u,f;Qe=1,wl(e,ai(a,e.current)),me=null;return}n.flags&32768?(De||o===1?e=!0:Zs||(Me&536870912)!==0?e=!1:(Aa=e=!0,(o===2||o===9||o===3||o===6)&&(o=li.current,o!==null&&o.tag===13&&(o.flags|=16384))),Sg(n,e)):Il(n)}function Il(e){var n=e;do{if((n.flags&32768)!==0){Sg(n,Aa);return}e=n.return;var a=xx(n.alternate,n,$i);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);Qe===0&&(Qe=5)}function Sg(e,n){do{var a=Sx(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);Qe=6,me=null}function yg(e,n,a,o,u,f,y,A,I){e.cancelPendingCommit=null;do Bl();while(An!==0);if((Le&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=uu,At(e,a,f,y,A,I),e===We&&(me=We=null,Me=0),Qs=n,Ca=e,Js=a,gf=f,_f=u,fg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Lx(se,function(){return Ag(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=K.p,K.p=2,y=Le,Le|=4;try{yx(e,n,a)}finally{Le=y,K.p=u,z.T=o}}An=1,Mg(),Eg(),Tg()}}function Mg(){if(An===1){An=0;var e=Ca,n=Qs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=K.p;K.p=2;var u=Le;Le|=4;try{ag(n,e);var f=Nf,y=up(e.containerInfo),A=f.focusedElem,I=f.selectionRange;if(y!==A&&A&&A.ownerDocument&&cp(A.ownerDocument.documentElement,A)){if(I!==null&&su(A)){var tt=I.start,ht=I.end;if(ht===void 0&&(ht=tt),"selectionStart"in A)A.selectionStart=tt,A.selectionEnd=Math.min(ht,A.value.length);else{var vt=A.ownerDocument||document,it=vt&&vt.defaultView||window;if(it.getSelection){var st=it.getSelection(),ne=A.textContent.length,$t=Math.min(I.start,ne),Ie=I.end===void 0?$t:Math.min(I.end,ne);!st.extend&&$t>Ie&&(y=Ie,Ie=$t,$t=y);var q=lp(A,$t),V=lp(A,Ie);if(q&&V&&(st.rangeCount!==1||st.anchorNode!==q.node||st.anchorOffset!==q.offset||st.focusNode!==V.node||st.focusOffset!==V.offset)){var $=vt.createRange();$.setStart(q.node,q.offset),st.removeAllRanges(),$t>Ie?(st.addRange($),st.extend(V.node,V.offset)):($.setEnd(V.node,V.offset),st.addRange($))}}}}for(vt=[],st=A;st=st.parentNode;)st.nodeType===1&&vt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<vt.length;A++){var mt=vt[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Kl=!!Lf,Nf=Lf=null}finally{Le=u,K.p=o,z.T=a}}e.current=n,An=2}}function Eg(){if(An===2){An=0;var e=Ca,n=Qs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=K.p;K.p=2;var u=Le;Le|=4;try{tg(e,n.alternate,n)}finally{Le=u,K.p=o,z.T=a}}An=3}}function Tg(){if(An===4||An===3){An=0,Ee();var e=Ca,n=Qs,a=Js,o=fg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?An=5:(An=0,Qs=Ca=null,bg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(wa=null),Ue(a),n=n.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(dt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=K.p,K.p=2,z.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var A=o[y];f(A.value,{componentStack:A.stack})}}finally{z.T=n,K.p=u}}(Js&3)!==0&&Bl(),Ci(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===vf?fo++:(fo=0,vf=e):fo=0,ho(0)}}function bg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Wr(n)))}function Bl(e){return Mg(),Eg(),Tg(),Ag()}function Ag(){if(An!==5)return!1;var e=Ca,n=gf;gf=0;var a=Ue(Js),o=z.T,u=K.p;try{K.p=32>a?32:a,z.T=null,a=_f,_f=null;var f=Ca,y=Js;if(An=0,Qs=Ca=null,Js=0,(Le&6)!==0)throw Error(s(331));var A=Le;if(Le|=4,cg(f.current),rg(f,f.current,y,a),Le=A,ho(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(dt,f)}catch{}return!0}finally{K.p=u,z.T=o,bg(e,n)}}function Rg(e,n,a){n=ai(a,n),n=Zu(e.stateNode,n,2),e=xa(e,n,2),e!==null&&(It(e,2),Ci(e))}function Ge(e,n,a){if(e.tag===3)Rg(e,e,a);else for(;n!==null;){if(n.tag===3){Rg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(wa===null||!wa.has(o))){e=ai(a,e),a=Um(2),o=xa(n,a,2),o!==null&&(Lm(a,o,n,e),It(o,2),Ci(o));break}}n=n.return}}function Mf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Tx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(hf=!0,u.add(a),e=Cx.bind(null,e,n,a),n.then(e,e))}function Cx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Me&a)===a&&(Qe===4||Qe===3&&(Me&62914560)===Me&&300>pe()-mf?(Le&2)===0&&$s(e,0):df|=a,Ks===Me&&(Ks=0)),Ci(e)}function wg(e,n){n===0&&(n=Lt()),e=Ps(e,n),e!==null&&(It(e,n),Ci(e))}function Dx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),wg(e,a)}function Ux(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),wg(e,a)}function Lx(e,n){return ve(e,n)}var Fl=null,er=null,Ef=!1,Hl=!1,Tf=!1,ds=0;function Ci(e){e!==er&&e.next===null&&(er===null?Fl=er=e:er=er.next=e),Hl=!0,Ef||(Ef=!0,Ox())}function ho(e,n){if(!Tf&&Hl){Tf=!0;do for(var a=!1,o=Fl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Pt(42|e)+1)-1,f&=u&~(y&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Lg(o,f))}else f=Me,f=jt(o,o===We?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ct(o,f)||(a=!0,Lg(o,f));o=o.next}while(a);Tf=!1}}function Nx(){Cg()}function Cg(){Hl=Ef=!1;var e=0;ds!==0&&(Vx()&&(e=ds),ds=0);for(var n=pe(),a=null,o=Fl;o!==null;){var u=o.next,f=Dg(o,n);f===0?(o.next=null,a===null?Fl=u:a.next=u,u===null&&(er=a)):(a=o,(e!==0||(f&3)!==0)&&(Hl=!0)),o=u}ho(e)}function Dg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Pt(f),A=1<<y,I=u[y];I===-1?((A&a)===0||(A&o)!==0)&&(u[y]=ae(A,n)):I<=n&&(e.expiredLanes|=A),f&=~A}if(n=We,a=Me,a=jt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&G(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&G(o),Ue(a)){case 2:case 8:a=Zt;break;case 32:a=se;break;case 268435456:a=N;break;default:a=se}return o=Ug.bind(null,e),a=ve(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&G(o),e.callbackPriority=2,e.callbackNode=null,2}function Ug(e,n){if(An!==0&&An!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Bl()&&e.callbackNode!==a)return null;var o=Me;return o=jt(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(dg(e,o,n),Dg(e,pe()),e.callbackNode!=null&&e.callbackNode===a?Ug.bind(null,e):null)}function Lg(e,n){if(Bl())return null;dg(e,n,!0)}function Ox(){Xx(function(){(Le&6)!==0?ve(xe,Nx):Cg()})}function bf(){return ds===0&&(ds=k()),ds}function Ng(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qo(""+e)}function Og(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Px(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Ng((u[En]||null).action),y=o.submitter;y&&(n=(n=y[En]||null)?Ng(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var A=new el("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ds!==0){var I=y?Og(u,y):new FormData(u);Xu(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(A.preventDefault(),I=y?Og(u,y):new FormData(u),Xu(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var Af=0;Af<cu.length;Af++){var Rf=cu[Af],zx=Rf.toLowerCase(),Ix=Rf[0].toUpperCase()+Rf.slice(1);pi(zx,"on"+Ix)}pi(dp,"onAnimationEnd"),pi(pp,"onAnimationIteration"),pi(mp,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(tx,"onTransitionRun"),pi(ex,"onTransitionStart"),pi(nx,"onTransitionCancel"),pi(gp,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),Bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function Pg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var A=o[y],I=A.instance,tt=A.currentTarget;if(A=A.listener,I!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=tt;try{f(u)}catch(ht){Rl(ht)}u.currentTarget=null,f=I}else for(y=0;y<o.length;y++){if(A=o[y],I=A.instance,tt=A.currentTarget,A=A.listener,I!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=tt;try{f(u)}catch(ht){Rl(ht)}u.currentTarget=null,f=I}}}}function ge(e,n){var a=n[Za];a===void 0&&(a=n[Za]=new Set);var o=e+"__bubble";a.has(o)||(zg(n,e,2,!1),a.add(o))}function wf(e,n,a){var o=0;n&&(o|=4),zg(a,e,o,n)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function Cf(e){if(!e[Gl]){e[Gl]=!0,Zo.forEach(function(a){a!=="selectionchange"&&(Bx.has(a)||wf(a,!1,e),wf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Gl]||(n[Gl]=!0,wf("selectionchange",!1,n))}}function zg(e,n,a,o){switch(r_(n)){case 2:var u=fS;break;case 8:u=hS;break;default:u=kf}a=u.bind(null,n,a,e),u=void 0,!Kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Df(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var A=o.stateNode.containerInfo;if(A===u)break;if(y===4)for(y=o.return;y!==null;){var I=y.tag;if((I===3||I===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;A!==null;){if(y=zi(A),y===null)return;if(I=y.tag,I===5||I===6||I===26||I===27){o=f=y;continue t}A=A.parentNode}}o=o.return}kd(function(){var tt=f,ht=jc(a),vt=[];t:{var it=_p.get(e);if(it!==void 0){var st=el,ne=e;switch(e){case"keypress":if($o(a)===0)break t;case"keydown":case"keyup":st=Lv;break;case"focusin":ne="focus",st=tu;break;case"focusout":ne="blur",st=tu;break;case"beforeblur":case"afterblur":st=tu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=Sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=Pv;break;case dp:case pp:case mp:st=Ev;break;case gp:st=Iv;break;case"scroll":case"scrollend":st=vv;break;case"wheel":st=Fv;break;case"copy":case"cut":case"paste":st=bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=jd;break;case"toggle":case"beforetoggle":st=Gv}var $t=(n&4)!==0,Ie=!$t&&(e==="scroll"||e==="scrollend"),q=$t?it!==null?it+"Capture":null:it;$t=[];for(var V=tt,$;V!==null;){var mt=V;if($=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||$===null||q===null||(mt=Lr(V,q),mt!=null&&$t.push(mo(V,mt,$))),Ie)break;V=V.return}0<$t.length&&(it=new st(it,ne,null,a,ht),vt.push({event:it,listeners:$t}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",it&&a!==Yc&&(ne=a.relatedTarget||a.fromElement)&&(zi(ne)||ne[zn]))break t;if((st||it)&&(it=ht.window===ht?ht:(it=ht.ownerDocument)?it.defaultView||it.parentWindow:window,st?(ne=a.relatedTarget||a.toElement,st=tt,ne=ne?zi(ne):null,ne!==null&&(Ie=c(ne),$t=ne.tag,ne!==Ie||$t!==5&&$t!==27&&$t!==6)&&(ne=null)):(st=null,ne=tt),st!==ne)){if($t=qd,mt="onMouseLeave",q="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&($t=jd,mt="onPointerLeave",q="onPointerEnter",V="pointer"),Ie=st==null?it:Qa(st),$=ne==null?it:Qa(ne),it=new $t(mt,V+"leave",st,a,ht),it.target=Ie,it.relatedTarget=$,mt=null,zi(ht)===tt&&($t=new $t(q,V+"enter",ne,a,ht),$t.target=$,$t.relatedTarget=Ie,mt=$t),Ie=mt,st&&ne)e:{for($t=st,q=ne,V=0,$=$t;$;$=nr($))V++;for($=0,mt=q;mt;mt=nr(mt))$++;for(;0<V-$;)$t=nr($t),V--;for(;0<$-V;)q=nr(q),$--;for(;V--;){if($t===q||q!==null&&$t===q.alternate)break e;$t=nr($t),q=nr(q)}$t=null}else $t=null;st!==null&&Ig(vt,it,st,$t,!1),ne!==null&&Ie!==null&&Ig(vt,Ie,ne,$t,!0)}}t:{if(it=tt?Qa(tt):window,st=it.nodeName&&it.nodeName.toLowerCase(),st==="select"||st==="input"&&it.type==="file")var Ht=np;else if(tp(it))if(ip)Ht=Qv;else{Ht=Zv;var he=jv}else st=it.nodeName,!st||st.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?tt&&qc(tt.elementType)&&(Ht=np):Ht=Kv;if(Ht&&(Ht=Ht(e,tt))){ep(vt,Ht,a,ht);break t}he&&he(e,it,tt),e==="focusout"&&tt&&it.type==="number"&&tt.memoizedProps.value!=null&&Cn(it,"number",it.value)}switch(he=tt?Qa(tt):window,e){case"focusin":(tp(he)||he.contentEditable==="true")&&(Ls=he,ru=tt,Hr=null);break;case"focusout":Hr=ru=Ls=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,fp(vt,a,ht);break;case"selectionchange":if($v)break;case"keydown":case"keyup":fp(vt,a,ht)}var qt;if(nu)t:{switch(e){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else Us?Jd(e,a)&&(ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ee="onCompositionStart");ee&&(Zd&&a.locale!=="ko"&&(Us||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Us&&(qt=Xd()):(ma=ht,Qc="value"in ma?ma.value:ma.textContent,Us=!0)),he=Vl(tt,ee),0<he.length&&(ee=new Yd(ee,e,null,a,ht),vt.push({event:ee,listeners:he}),qt?ee.data=qt:(qt=$d(a),qt!==null&&(ee.data=qt)))),(qt=kv?Xv(e,a):Wv(e,a))&&(ee=Vl(tt,"onBeforeInput"),0<ee.length&&(he=new Yd("onBeforeInput","beforeinput",null,a,ht),vt.push({event:he,listeners:ee}),he.data=qt)),Px(vt,e,tt,a,ht)}Pg(vt,n)})}function mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Vl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Lr(e,a),u!=null&&o.unshift(mo(e,u,f)),u=Lr(e,n),u!=null&&o.push(mo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ig(e,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var A=a,I=A.alternate,tt=A.stateNode;if(A=A.tag,I!==null&&I===o)break;A!==5&&A!==26&&A!==27||tt===null||(I=tt,u?(tt=Lr(a,f),tt!=null&&y.unshift(mo(a,tt,I))):u||(tt=Lr(a,f),tt!=null&&y.push(mo(a,tt,I)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var Fx=/\r\n?/g,Hx=/\u0000|\uFFFD/g;function Bg(e){return(typeof e=="string"?e:""+e).replace(Fx,`
`).replace(Hx,"")}function Fg(e,n){return n=Bg(n),Bg(e)===n}function kl(){}function ze(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ti(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ti(e,""+o);break;case"className":Dt(e,"class",o);break;case"tabIndex":Dt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Dt(e,a,o);break;case"style":Gd(e,o,f);break;case"data":if(n!=="object"){Dt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Qo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ze(e,n,"name",u.name,u,null),ze(e,n,"formEncType",u.formEncType,u,null),ze(e,n,"formMethod",u.formMethod,u,null),ze(e,n,"formTarget",u.formTarget,u,null)):(ze(e,n,"encType",u.encType,u,null),ze(e,n,"method",u.method,u,null),ze(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Qo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=kl);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Qo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),bt(e,"popover",o);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":bt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=gv.get(a)||a,bt(e,a,o))}}function Uf(e,n,a,o,u,f){switch(a){case"style":Gd(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ti(e,o):(typeof o=="number"||typeof o=="bigint")&&Ti(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=kl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ko.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[En]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):bt(e,a,o)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(e,n,f,y,a,null)}}u&&ze(e,n,"srcSet",a.srcSet,a,null),o&&ze(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var A=f=y=u=null,I=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":y=ht;break;case"checked":I=ht;break;case"defaultChecked":tt=ht;break;case"value":f=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:ze(e,n,o,ht,a,null)}}He(e,f,A,I,tt,y,u,!1),Ze(e);return;case"select":ge("invalid",e),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":y=A;break;case"multiple":o=A;default:ze(e,n,u,A,a,null)}n=f,a=y,e.multiple=!!o,n!=null?ln(e,!!o,n,!1):a!=null&&ln(e,!!o,a,!0);return;case"textarea":ge("invalid",e),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(A=a[y],A!=null))switch(y){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:ze(e,n,y,A,a,null)}Tn(e,o,u,f),Ze(e);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:ze(e,n,I,o,a,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<po.length;o++)ge(po[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(e,n,tt,o,a,null)}return;default:if(qc(n)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&Uf(e,n,ht,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&ze(e,n,A,o,a,null))}function Gx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,A=null,I=null,tt=null,ht=null;for(st in a){var vt=a[st];if(a.hasOwnProperty(st)&&vt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":I=vt;default:o.hasOwnProperty(st)||ze(e,n,st,null,o,vt)}}for(var it in o){var st=o[it];if(vt=a[it],o.hasOwnProperty(it)&&(st!=null||vt!=null))switch(it){case"type":f=st;break;case"name":u=st;break;case"checked":tt=st;break;case"defaultChecked":ht=st;break;case"value":y=st;break;case"defaultValue":A=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:st!==vt&&ze(e,n,it,st,o,vt)}}Fi(e,y,A,I,tt,ht,f,u);return;case"select":st=y=A=it=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":st=I;default:o.hasOwnProperty(f)||ze(e,n,f,null,o,I)}for(u in o)if(f=o[u],I=a[u],o.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":it=f;break;case"defaultValue":A=f;break;case"multiple":y=f;default:f!==I&&ze(e,n,u,f,o,I)}n=A,a=y,o=st,it!=null?ln(e,!!a,it,!1):!!o!=!!a&&(n!=null?ln(e,!!a,n,!0):ln(e,!!a,a?[]:"",!1));return;case"textarea":st=it=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ze(e,n,A,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":it=u;break;case"defaultValue":st=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&ze(e,n,y,u,o,f)}mn(e,it,st);return;case"option":for(var ne in a)if(it=a[ne],a.hasOwnProperty(ne)&&it!=null&&!o.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:ze(e,n,ne,null,o,it)}for(I in o)if(it=o[I],st=a[I],o.hasOwnProperty(I)&&it!==st&&(it!=null||st!=null))switch(I){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:ze(e,n,I,it,o,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)it=a[$t],a.hasOwnProperty($t)&&it!=null&&!o.hasOwnProperty($t)&&ze(e,n,$t,null,o,it);for(tt in o)if(it=o[tt],st=a[tt],o.hasOwnProperty(tt)&&it!==st&&(it!=null||st!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:ze(e,n,tt,it,o,st)}return;default:if(qc(n)){for(var Ie in a)it=a[Ie],a.hasOwnProperty(Ie)&&it!==void 0&&!o.hasOwnProperty(Ie)&&Uf(e,n,Ie,void 0,o,it);for(ht in o)it=o[ht],st=a[ht],!o.hasOwnProperty(ht)||it===st||it===void 0&&st===void 0||Uf(e,n,ht,it,o,st);return}}for(var q in a)it=a[q],a.hasOwnProperty(q)&&it!=null&&!o.hasOwnProperty(q)&&ze(e,n,q,null,o,it);for(vt in o)it=o[vt],st=a[vt],!o.hasOwnProperty(vt)||it===st||it==null&&st==null||ze(e,n,vt,it,o,st)}var Lf=null,Nf=null;function Xl(e){return e.nodeType===9?e:e.ownerDocument}function Hg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Of(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Pf=null;function Vx(){var e=window.event;return e&&e.type==="popstate"?e===Pf?!1:(Pf=e,!0):(Pf=null,!1)}var Vg=typeof setTimeout=="function"?setTimeout:void 0,kx=typeof clearTimeout=="function"?clearTimeout:void 0,kg=typeof Promise=="function"?Promise:void 0,Xx=typeof queueMicrotask=="function"?queueMicrotask:typeof kg<"u"?function(e){return kg.resolve(null).then(e).catch(Wx)}:Vg;function Wx(e){setTimeout(function(){throw e})}function Ua(e){return e==="head"}function Xg(e,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var y=e.ownerDocument;if(a&1&&go(y.documentElement),a&2&&go(y.body),a&4)for(a=y.head,go(a),y=a.firstChild;y;){var A=y.nextSibling,I=y.nodeName;y[fa]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&y.rel.toLowerCase()==="stylesheet"||a.removeChild(y),y=A}}if(u===0){e.removeChild(f),To(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);To(n)}function zf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zf(a),ha(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function qx(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[fa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function Yx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function If(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function jx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Bf=null;function Wg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function qg(e,n,a){switch(n=Xl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function go(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ha(e)}var ui=new Map,Yg=new Set;function Wl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=K.d;K.d={f:Zx,r:Kx,D:Qx,C:Jx,L:$x,m:tS,X:nS,S:eS,M:iS};function Zx(){var e=ta.f(),n=zl();return e||n}function Kx(e){var n=Ii(e);n!==null&&n.tag===5&&n.type==="form"?dm(n):ta.r(e)}var ir=typeof document>"u"?null:document;function jg(e,n,a){var o=ir;if(o&&typeof n=="string"&&n){var u=Xe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Yg.has(u)||(Yg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",e),nn(n),o.head.appendChild(n)))}}function Qx(e){ta.D(e),jg("dns-prefetch",e,null)}function Jx(e,n){ta.C(e,n),jg("preconnect",e,n)}function $x(e,n,a){ta.L(e,n,a);var o=ir;if(o&&e&&n){var u='link[rel="preload"][as="'+Xe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Xe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Xe(a.imageSizes)+'"]')):u+='[href="'+Xe(e)+'"]';var f=u;switch(n){case"style":f=ar(e);break;case"script":f=sr(e)}ui.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ui.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(_o(f))||n==="script"&&o.querySelector(vo(f))||(n=o.createElement("link"),Rn(n,"link",e),nn(n),o.head.appendChild(n)))}}function tS(e,n){ta.m(e,n);var a=ir;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Xe(o)+'"][href="'+Xe(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=sr(e)}if(!ui.has(f)&&(e=g({rel:"modulepreload",href:e},n),ui.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}o=a.createElement("link"),Rn(o,"link",e),nn(o),a.head.appendChild(o)}}}function eS(e,n,a){ta.S(e,n,a);var o=ir;if(o&&e){var u=da(o).hoistableStyles,f=ar(e);n=n||"default";var y=u.get(f);if(!y){var A={loading:0,preload:null};if(y=o.querySelector(_o(f)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ui.get(f))&&Ff(e,a);var I=y=o.createElement("link");nn(I),Rn(I,"link",e),I._p=new Promise(function(tt,ht){I.onload=tt,I.onerror=ht}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ql(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:A},u.set(f,y)}}}function nS(e,n){ta.X(e,n);var a=ir;if(a&&e){var o=da(a).hoistableScripts,u=sr(e),f=o.get(u);f||(f=a.querySelector(vo(u)),f||(e=g({src:e,async:!0},n),(n=ui.get(u))&&Hf(e,n),f=a.createElement("script"),nn(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function iS(e,n){ta.M(e,n);var a=ir;if(a&&e){var o=da(a).hoistableScripts,u=sr(e),f=o.get(u);f||(f=a.querySelector(vo(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ui.get(u))&&Hf(e,n),f=a.createElement("script"),nn(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Zg(e,n,a,o){var u=(u=Mt.current)?Wl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ar(a.href),a=da(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ar(a.href);var f=da(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(_o(e)))&&!f._p&&(y.instance=f,y.state.loading=5),ui.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(e,a),f||aS(u,e,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=sr(a),a=da(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ar(e){return'href="'+Xe(e)+'"'}function _o(e){return'link[rel="stylesheet"]['+e+"]"}function Kg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function aS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),nn(n),e.head.appendChild(n))}function sr(e){return'[src="'+Xe(e)+'"]'}function vo(e){return"script[async]"+e}function Qg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Xe(a.href)+'"]');if(o)return n.instance=o,nn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),nn(o),Rn(o,"style",u),ql(o,a.precedence,e),n.instance=o;case"stylesheet":u=ar(a.href);var f=e.querySelector(_o(u));if(f)return n.state.loading|=4,n.instance=f,nn(f),f;o=Kg(a),(u=ui.get(u))&&Ff(o,u),f=(e.ownerDocument||e).createElement("link"),nn(f);var y=f;return y._p=new Promise(function(A,I){y.onload=A,y.onerror=I}),Rn(f,"link",o),n.state.loading|=4,ql(f,a.precedence,e),n.instance=f;case"script":return f=sr(a.src),(u=e.querySelector(vo(f)))?(n.instance=u,nn(u),u):(o=a,(u=ui.get(f))&&(o=g({},a),Hf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),nn(u),Rn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ql(o,a.precedence,e));return n.instance}function ql(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var A=o[y];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Ff(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Hf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Yl=null;function Jg(e,n,a){if(Yl===null){var o=new Map,u=Yl=new Map;u.set(a,o)}else u=Yl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[fa]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var A=o.get(y);A?A.push(f):o.set(y,[f])}}return o}function $g(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function sS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function t_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var xo=null;function rS(){}function oS(e,n,a){if(xo===null)throw Error(s(475));var o=xo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ar(a.href),f=e.querySelector(_o(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=jl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,nn(f);return}f=e.ownerDocument||e,a=Kg(a),(u=ui.get(u))&&Ff(a,u),f=f.createElement("link"),nn(f);var y=f;y._p=new Promise(function(A,I){y.onload=A,y.onerror=I}),Rn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=jl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function lS(){if(xo===null)throw Error(s(475));var e=xo;return e.stylesheets&&e.count===0&&Gf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Gf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function jl(){if(this.count--,this.count===0){if(this.stylesheets)Gf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zl=null;function Gf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zl=new Map,n.forEach(cS,e),Zl=null,jl.call(e))}function cS(e,n){if(!(n.state.loading&4)){var a=Zl.get(e);if(a)var o=a.get(null);else{a=new Map,Zl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=jl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var So={$$typeof:L,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function uS(e,n,a,o,u,f,y,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function e_(e,n,a,o,u,f,y,A,I,tt,ht,vt){return e=new uS(e,n,a,y,A,I,tt,vt),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),e.current=f,f.stateNode=e,n=yu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},bu(f),e}function n_(e){return e?(e=zs,e):zs}function i_(e,n,a,o,u,f){u=n_(u),o.context===null?o.context=u:o.pendingContext=u,o=va(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=xa(e,o,n),a!==null&&(Jn(a,e,n),Zr(a,e,n))}function a_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Vf(e,n){a_(e,n),(e=e.alternate)&&a_(e,n)}function s_(e){if(e.tag===13){var n=Ps(e,67108864);n!==null&&Jn(n,e,67108864),Vf(e,67108864)}}var Kl=!0;function fS(e,n,a,o){var u=z.T;z.T=null;var f=K.p;try{K.p=2,kf(e,n,a,o)}finally{K.p=f,z.T=u}}function hS(e,n,a,o){var u=z.T;z.T=null;var f=K.p;try{K.p=8,kf(e,n,a,o)}finally{K.p=f,z.T=u}}function kf(e,n,a,o){if(Kl){var u=Xf(o);if(u===null)Df(e,n,o,Ql,a),o_(e,o);else if(pS(u,e,n,a,o))o.stopPropagation();else if(o_(e,o),n&4&&-1<dS.indexOf(e)){for(;u!==null;){var f=Ii(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Yt(f.pendingLanes);if(y!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var I=1<<31-Pt(y);A.entanglements[1]|=I,y&=~I}Ci(f),(Le&6)===0&&(Ol=pe()+500,ho(0))}}break;case 13:A=Ps(f,2),A!==null&&Jn(A,f,2),zl(),Vf(f,2)}if(f=Xf(o),f===null&&Df(e,n,o,Ql,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Df(e,n,o,null,a)}}function Xf(e){return e=jc(e),Wf(e)}var Ql=null;function Wf(e){if(Ql=null,e=zi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ql=e,null}function r_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vt()){case xe:return 2;case Zt:return 8;case se:case $e:return 32;case N:return 268435456;default:return 32}default:return 32}}var qf=!1,La=null,Na=null,Oa=null,yo=new Map,Mo=new Map,Pa=[],dS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function o_(e,n){switch(e){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":yo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function Eo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ii(n),n!==null&&s_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function pS(e,n,a,o,u){switch(n){case"focusin":return La=Eo(La,e,n,a,o,u),!0;case"dragenter":return Na=Eo(Na,e,n,a,o,u),!0;case"mouseover":return Oa=Eo(Oa,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return yo.set(f,Eo(yo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Mo.set(f,Eo(Mo.get(f)||null,e,n,a,o,u)),!0}return!1}function l_(e){var n=zi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Wn(e.priority,function(){if(a.tag===13){var o=Qn();o=ie(o);var u=Ps(a,o);u!==null&&Jn(u,a,o),Vf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Xf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Yc=o,a.target.dispatchEvent(o),Yc=null}else return n=Ii(a),n!==null&&s_(n),e.blockedOn=a,!1;n.shift()}return!0}function c_(e,n,a){Jl(e)&&a.delete(n)}function mS(){qf=!1,La!==null&&Jl(La)&&(La=null),Na!==null&&Jl(Na)&&(Na=null),Oa!==null&&Jl(Oa)&&(Oa=null),yo.forEach(c_),Mo.forEach(c_)}function $l(e,n){e.blockedOn===n&&(e.blockedOn=null,qf||(qf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,mS)))}var tc=null;function u_(e){tc!==e&&(tc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){tc===e&&(tc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Wf(o||a)===null)continue;break}var f=Ii(a);f!==null&&(e.splice(n,3),n-=3,Xu(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function To(e){function n(I){return $l(I,e)}La!==null&&$l(La,e),Na!==null&&$l(Na,e),Oa!==null&&$l(Oa,e),yo.forEach(n),Mo.forEach(n);for(var a=0;a<Pa.length;a++){var o=Pa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)l_(a),a.blockedOn===null&&Pa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[En]||null;if(typeof f=="function")y||u_(a);else if(y){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[En]||null)A=y.formAction;else if(Wf(u)!==null)continue}else A=y.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),u_(a)}}}function Yf(e){this._internalRoot=e}ec.prototype.render=Yf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Qn();i_(a,o,e,n,null,null)},ec.prototype.unmount=Yf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;i_(e.current,2,null,e,null,null),zl(),n[zn]=null}};function ec(e){this._internalRoot=e}ec.prototype.unstable_scheduleHydration=function(e){if(e){var n=be();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,e),a===0&&l_(e)}};var f_=t.version;if(f_!=="19.1.0")throw Error(s(527,f_,"19.1.0"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var gS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nc.isDisabled&&nc.supportsFiber)try{dt=nc.inject(gS),_t=nc}catch{}}return Ao.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Rm,f=wm,y=Cm,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=e_(e,1,!1,null,null,a,o,u,f,y,A,null),e[zn]=n.current,Cf(e),new Yf(n)},Ao.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=Rm,y=wm,A=Cm,I=null,tt=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(tt=a.formState)),n=e_(e,1,!0,n,a??null,o,u,f,y,A,I,tt),n.context=n_(null),a=n.current,o=Qn(),o=ie(o),u=va(o),u.callback=null,xa(a,u,o),a=o,n.current.lanes=a,It(n,a),Ci(n),e[zn]=n.current,Cf(e),new ec(n)},Ao.version="19.1.0",Ao}var y_;function AS(){if(y_)return Kf.exports;y_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Kf.exports=bS(),Kf.exports}var RS=AS();const I0="/configurator/assets/logo%20icon-tnJ8l0nw.png";function wS({handleTabClick:r}){const[t,i]=Ve.useState(!1);function s(l){i(c=>!c),r(l)}return Rt.jsxs(Rt.Fragment,{children:[Rt.jsxs("div",{className:" flex flex-row items-center justify-between h-10 md:hidden w-full p-4",children:[Rt.jsx("img",{src:I0,alt:"",className:"m-0"}),Rt.jsx("span",{onClick:()=>i(l=>!l),children:"☰"})]}),Rt.jsxs("div",{className:t?"fixed top-0 bg-[#1c1c1c] w-full h-screen z-50 flex flex-col justify-center items-center text-white gap-[40px] text-3xl":"hidden",children:[Rt.jsx("span",{className:"text-white absolute right-5 top-5",onClick:()=>i(l=>!l),children:"×"}),Rt.jsx("span",{onClick:s,"data-name":"type",children:"Type"}),Rt.jsx("span",{onClick:s,"data-name":"detail",children:"Finish & Material"}),Rt.jsx("span",{onClick:s,"data-name":"composition",children:"Constructor"})]})]})}function CS({children:r,className:t}){return Rt.jsx("div",{className:`content-center ${t}`,children:r})}/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),US=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),M_=r=>{const t=US(r);return t.charAt(0).toUpperCase()+t.slice(1)},B0=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),LS=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var NS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=Ve.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},m)=>Ve.createElement("svg",{ref:m,...NS,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:B0("lucide",l),...!c&&!LS(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,g])=>Ve.createElement(p,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=(r,t)=>{const i=Ve.forwardRef(({className:s,...l},c)=>Ve.createElement(OS,{ref:c,iconNode:t,className:B0(`lucide-${DS(M_(r))}`,`lucide-${r}`,s),...l}));return i.displayName=M_(r),i};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],zS=Td("box",PS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],BS=Td("lightbulb",IS);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],HS=Td("list-todo",FS);function GS({handleTabClick:r,btnClicked:t}){return Rt.jsxs("div",{className:"hidden md:flex sidebar-container",children:[Rt.jsx("img",{className:"margin-auto",src:I0,alt:"icon"}),Rt.jsxs("div",{className:"flex flex-col h-[50vh] justify-center gap-10",children:[Rt.jsx(BS,{className:`min-w-7 min-h-9 py-1 ${t==="type"?"active":void 0} transition-all duration-500 ease-in-out`,strokeWidth:1,onClick:r,"data-name":"type"}),Rt.jsx(HS,{className:`min-w-7 min-h-9 pb-1 ${t==="detail"?"active":void 0} transition-all duration-500 ease-in-out`,strokeWidth:1,onClick:r,"data-name":"detail"}),Rt.jsx(zS,{className:`min-w-7 min-h-9 pb-1 ${t==="composition"?"active":void 0} transition-all duration-500 ease-in-out`,strokeWidth:1,onClick:r,"data-name":"composition"})]})]})}const VS="_wrapper_10amv_5",kS="_panel_10amv_19",XS="_inputsDiv_10amv_83",WS="_inactive_10amv_151",ic={wrapper:VS,panel:kS,inputsDiv:XS,inactive:WS};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bd="177",Mr={ROTATE:0,DOLLY:1,PAN:2},Sr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qS=0,E_=1,YS=2,F0=1,jS=2,oa=3,Ya=0,kn=1,Ui=2,Wa=0,Er=1,T_=2,b_=3,A_=4,ZS=5,ys=100,KS=101,QS=102,JS=103,$S=104,ty=200,ey=201,ny=202,iy=203,Ph=204,zh=205,ay=206,sy=207,ry=208,oy=209,ly=210,cy=211,uy=212,fy=213,hy=214,Ih=0,Bh=1,Fh=2,Ar=3,Hh=4,Gh=5,Vh=6,kh=7,Ad=0,dy=1,py=2,qa=0,my=1,gy=2,_y=3,vy=4,xy=5,Sy=6,yy=7,H0=300,Rr=301,wr=302,Xh=303,Wh=304,kc=306,qh=1e3,Es=1001,Yh=1002,Mi=1003,My=1004,ac=1005,Li=1006,th=1007,Ts=1008,Oi=1009,G0=1010,V0=1011,Io=1012,Rd=1013,bs=1014,la=1015,Go=1016,wd=1017,Cd=1018,Bo=1020,k0=35902,X0=1021,W0=1022,yi=1023,Fo=1026,Ho=1027,q0=1028,Dd=1029,Y0=1030,Ud=1031,Ld=1033,Uc=33776,Lc=33777,Nc=33778,Oc=33779,jh=35840,Zh=35841,Kh=35842,Qh=35843,Jh=36196,$h=37492,td=37496,ed=37808,nd=37809,id=37810,ad=37811,sd=37812,rd=37813,od=37814,ld=37815,cd=37816,ud=37817,fd=37818,hd=37819,dd=37820,pd=37821,Pc=36492,md=36494,gd=36495,j0=36283,_d=36284,vd=36285,xd=36286,Ey=3200,Ty=3201,Nd=0,by=1,Xa="",ei="srgb",Cr="srgb-linear",Bc="linear",Be="srgb",rr=7680,R_=519,Ay=512,Ry=513,wy=514,Z0=515,Cy=516,Dy=517,Uy=518,Ly=519,w_=35044,C_="300 es",ca=2e3,Fc=2001;class ws{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zc=Math.PI/180,Sd=180/Math.PI;function Vo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function _e(r,t,i){return Math.max(t,Math.min(i,r))}function Ny(r,t){return(r%t+t)%t}function eh(r,t,i){return(1-i)*r+i*t}function Ro(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Gn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Oy={DEG2RAD:zc};class re{constructor(t=0,i=0){re.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class As{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3];const x=c[h+0],M=c[h+1],E=c[h+2],T=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=E,t[i+3]=T;return}if(_!==T||m!==x||p!==M||g!==E){let S=1-d;const v=m*x+p*M+g*E+_*T,O=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const H=Math.sqrt(L),B=Math.atan2(H,v*O);S=Math.sin(S*B)/H,d=Math.sin(d*B)/H}const C=d*O;if(m=m*S+x*C,p=p*S+M*C,g=g*S+E*C,_=_*S+T*C,S===1-d){const H=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=H,p*=H,g*=H,_*=H}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[h],x=c[h+1],M=c[h+2],E=c[h+3];return t[i]=d*E+g*_+m*M-p*x,t[i+1]=m*E+g*x+p*_-d*M,t[i+2]=p*E+g*M+d*x-m*_,t[i+3]=g*E-d*_-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(c/2),x=m(s/2),M=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=x*g*_+p*M*E,this._y=p*M*_-x*g*E,this._z=p*g*E+x*M*_,this._w=p*g*_-x*M*E;break;case"YXZ":this._x=x*g*_+p*M*E,this._y=p*M*_-x*g*E,this._z=p*g*E-x*M*_,this._w=p*g*_+x*M*E;break;case"ZXY":this._x=x*g*_-p*M*E,this._y=p*M*_+x*g*E,this._z=p*g*E+x*M*_,this._w=p*g*_-x*M*E;break;case"ZYX":this._x=x*g*_-p*M*E,this._y=p*M*_+x*g*E,this._z=p*g*E-x*M*_,this._w=p*g*_+x*M*E;break;case"YZX":this._x=x*g*_+p*M*E,this._y=p*M*_+x*g*E,this._z=p*g*E-x*M*_,this._w=p*g*_-x*M*E;break;case"XZY":this._x=x*g*_-p*M*E,this._y=p*M*_-x*g*E,this._z=p*g*E+x*M*_,this._w=p*g*_+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=s+d+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(s>d&&s>_){const M=2*Math.sqrt(1+s-d-_);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-s-_);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+_-s-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-s*p,this._z=c*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),_=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*_+this._w*x,this._x=s*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,i=0,s=0){j.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(D_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(D_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-c*l),_=2*(c*s-h*i);return this.x=i+m*p+h*_-d*g,this.y=s+m*g+d*p-c*_,this.z=l+m*_+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return nh.copy(this).projectOnVector(t),this.sub(nh)}reflect(t){return this.sub(nh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nh=new j,D_=new As;class le{constructor(t,i,s,l,c,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],x=s[2],M=s[5],E=s[8],T=l[0],S=l[3],v=l[6],O=l[1],L=l[4],C=l[7],H=l[2],B=l[5],P=l[8];return c[0]=h*T+d*O+m*H,c[3]=h*S+d*L+m*B,c[6]=h*v+d*C+m*P,c[1]=p*T+g*O+_*H,c[4]=p*S+g*L+_*B,c[7]=p*v+g*C+_*P,c[2]=x*T+M*O+E*H,c[5]=x*S+M*L+E*B,c[8]=x*v+M*C+E*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*c*g+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*h-d*p,x=d*m-g*c,M=p*c-h*m,E=i*_+s*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=_*T,t[1]=(l*p-g*s)*T,t[2]=(d*s-l*h)*T,t[3]=x*T,t[4]=(g*i-l*m)*T,t[5]=(l*c-d*i)*T,t[6]=M*T,t[7]=(s*m-p*i)*T,t[8]=(h*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(ih.makeScale(t,i)),this}rotate(t){return this.premultiply(ih.makeRotation(-t)),this}translate(t,i){return this.premultiply(ih.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ih=new le;function K0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Hc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Py(){const r=Hc("canvas");return r.style.display="block",r}const U_={};function Tr(r){r in U_||(U_[r]=!0,console.warn(r))}function zy(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function Iy(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function By(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const L_=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),N_=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fy(){const r={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Be&&(l.r=ua(l.r),l.g=ua(l.g),l.b=ua(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=br(l.r),l.g=br(l.g),l.b=br(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xa?Bc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Tr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Tr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Cr]:{primaries:t,whitePoint:s,transfer:Bc,toXYZ:L_,fromXYZ:N_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:t,whitePoint:s,transfer:Be,toXYZ:L_,fromXYZ:N_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),r}const Re=Fy();function ua(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function br(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let or;class Hy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{or===void 0&&(or=Hc("canvas")),or.width=t.width,or.height=t.height;const l=or.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=or}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Hc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ua(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ua(i[s]/255)*255):i[s]=ua(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gy=0;class Od{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Vo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(ah(l[h].image)):c.push(ah(l[h]))}else c=ah(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function ah(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Hy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vy=0;const sh=new j;class Xn extends ws{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=Es,l=Es,c=Li,h=Ts,d=yi,m=Oi,p=Xn.DEFAULT_ANISOTROPY,g=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Vo(),this.name="",this.source=new Od(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==H0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qh:t.x=t.x-Math.floor(t.x);break;case Es:t.x=t.x<0?0:1;break;case Yh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qh:t.y=t.y-Math.floor(t.y);break;case Es:t.y=t.y<0?0:1;break;case Yh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=H0;Xn.DEFAULT_ANISOTROPY=1;class Je{constructor(t=0,i=0,s=0,l=1){Je.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],x=m[1],M=m[5],E=m[9],T=m[2],S=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+T)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,C=(M+1)/2,H=(v+1)/2,B=(g+x)/4,P=(_+T)/4,W=(E+S)/4;return L>C&&L>H?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=B/s,c=P/s):C>H?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=B/l,c=W/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=P/c,l=W/c),this.set(s,l,c,i),this}let O=Math.sqrt((S-E)*(S-E)+(_-T)*(_-T)+(x-g)*(x-g));return Math.abs(O)<.001&&(O=1),this.x=(S-E)/O,this.y=(_-T)/O,this.z=(x-g)/O,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this.w=_e(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this.w=_e(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ky extends ws{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Je(0,0,t,i),this.scissorTest=!1,this.viewport=new Je(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Xn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Li,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Od(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends ky{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Q0 extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xy extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ko{constructor(t=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(_i.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(_i.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=_i.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,_i):_i.fromBufferAttribute(c,h),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),sc.copy(s.boundingBox)),sc.applyMatrix4(t.matrixWorld),this.union(sc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wo),rc.subVectors(this.max,wo),lr.subVectors(t.a,wo),cr.subVectors(t.b,wo),ur.subVectors(t.c,wo),Ia.subVectors(cr,lr),Ba.subVectors(ur,cr),ps.subVectors(lr,ur);let i=[0,-Ia.z,Ia.y,0,-Ba.z,Ba.y,0,-ps.z,ps.y,Ia.z,0,-Ia.x,Ba.z,0,-Ba.x,ps.z,0,-ps.x,-Ia.y,Ia.x,0,-Ba.y,Ba.x,0,-ps.y,ps.x,0];return!rh(i,lr,cr,ur,rc)||(i=[1,0,0,0,1,0,0,0,1],!rh(i,lr,cr,ur,rc))?!1:(oc.crossVectors(Ia,Ba),i=[oc.x,oc.y,oc.z],rh(i,lr,cr,ur,rc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ea),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ea=[new j,new j,new j,new j,new j,new j,new j,new j],_i=new j,sc=new ko,lr=new j,cr=new j,ur=new j,Ia=new j,Ba=new j,ps=new j,wo=new j,rc=new j,oc=new j,ms=new j;function rh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){ms.fromArray(r,c);const d=l.x*Math.abs(ms.x)+l.y*Math.abs(ms.y)+l.z*Math.abs(ms.z),m=t.dot(ms),p=i.dot(ms),g=s.dot(ms);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const Wy=new ko,Co=new j,oh=new j;class Xo{constructor(t=new j,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Wy.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Co.subVectors(t,this.center);const i=Co.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Co,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Co.copy(t.center).add(oh)),this.expandByPoint(Co.copy(t.center).sub(oh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const na=new j,lh=new j,lc=new j,Fa=new j,ch=new j,cc=new j,uh=new j;class Xc{constructor(t=new j,i=new j(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,na)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=na.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(na.copy(this.origin).addScaledVector(this.direction,i),na.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){lh.copy(t).add(i).multiplyScalar(.5),lc.copy(i).sub(t).normalize(),Fa.copy(this.origin).sub(lh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(lc),d=Fa.dot(this.direction),m=-Fa.dot(lc),p=Fa.lengthSq(),g=Math.abs(1-h*h);let _,x,M,E;if(g>0)if(_=h*m-d,x=h*d-m,E=c*g,_>=0)if(x>=-E)if(x<=E){const T=1/g;_*=T,x*=T,M=_*(_+h*x+2*d)+x*(h*_+x+2*m)+p}else x=c,_=Math.max(0,-(h*x+d)),M=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(h*x+d)),M=-_*_+x*(x+2*m)+p;else x<=-E?(_=Math.max(0,-(-h*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+p):x<=E?(_=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(_=Math.max(0,-(h*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+p);else x=h>0?-c:c,_=Math.max(0,-(h*x+d)),M=-_*_+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(lh).addScaledVector(lc,x),M}intersectSphere(t,i){na.subVectors(t.center,this.origin);const s=na.dot(this.direction),l=na.dot(na)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(c=(t.min.y-x.y)*g,h=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,h=(t.min.y-x.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(d=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,na)!==null}intersectTriangle(t,i,s,l,c){ch.subVectors(i,t),cc.subVectors(s,t),uh.crossVectors(ch,cc);let h=this.direction.dot(uh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Fa.subVectors(this.origin,t);const m=d*this.direction.dot(cc.crossVectors(Fa,cc));if(m<0)return null;const p=d*this.direction.dot(ch.cross(Fa));if(p<0||m+p>h)return null;const g=-d*Fa.dot(uh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(t,i,s,l,c,h,d,m,p,g,_,x,M,E,T,S){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,g,_,x,M,E,T,S)}set(t,i,s,l,c,h,d,m,p,g,_,x,M,E,T,S){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=M,v[7]=E,v[11]=T,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/fr.setFromMatrixColumn(t,0).length(),c=1/fr.setFromMatrixColumn(t,1).length(),h=1/fr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=h*g,M=h*_,E=d*g,T=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=M+E*p,i[5]=x-T*p,i[9]=-d*m,i[2]=T-x*p,i[6]=E+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*g,M=m*_,E=p*g,T=p*_;i[0]=x+T*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=M*d-E,i[6]=T+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*g,M=m*_,E=p*g,T=p*_;i[0]=x-T*d,i[4]=-h*_,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*g,i[9]=T-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*g,M=h*_,E=d*g,T=d*_;i[0]=m*g,i[4]=E*p-M,i[8]=x*p+T,i[1]=m*_,i[5]=T*p+x,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,E=d*m,T=d*p;i[0]=m*g,i[4]=T-x*_,i[8]=E*_+M,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*_+E,i[10]=x-T*_}else if(t.order==="XZY"){const x=h*m,M=h*p,E=d*m,T=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+T,i[5]=h*g,i[9]=M*_-E,i[2]=E*_-M,i[6]=d*g,i[10]=T*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qy,t,Yy)}lookAt(t,i,s){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ha.crossVectors(s,$n),Ha.lengthSq()===0&&(Math.abs(s.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ha.crossVectors(s,$n)),Ha.normalize(),uc.crossVectors($n,Ha),l[0]=Ha.x,l[4]=uc.x,l[8]=$n.x,l[1]=Ha.y,l[5]=uc.y,l[9]=$n.y,l[2]=Ha.z,l[6]=uc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],x=s[9],M=s[13],E=s[2],T=s[6],S=s[10],v=s[14],O=s[3],L=s[7],C=s[11],H=s[15],B=l[0],P=l[4],W=l[8],D=l[12],w=l[1],F=l[5],et=l[9],at=l[13],ut=l[2],ct=l[6],z=l[10],K=l[14],X=l[3],pt=l[7],U=l[11],J=l[15];return c[0]=h*B+d*w+m*ut+p*X,c[4]=h*P+d*F+m*ct+p*pt,c[8]=h*W+d*et+m*z+p*U,c[12]=h*D+d*at+m*K+p*J,c[1]=g*B+_*w+x*ut+M*X,c[5]=g*P+_*F+x*ct+M*pt,c[9]=g*W+_*et+x*z+M*U,c[13]=g*D+_*at+x*K+M*J,c[2]=E*B+T*w+S*ut+v*X,c[6]=E*P+T*F+S*ct+v*pt,c[10]=E*W+T*et+S*z+v*U,c[14]=E*D+T*at+S*K+v*J,c[3]=O*B+L*w+C*ut+H*X,c[7]=O*P+L*F+C*ct+H*pt,c[11]=O*W+L*et+C*z+H*U,c[15]=O*D+L*at+C*K+H*J,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],x=t[10],M=t[14],E=t[3],T=t[7],S=t[11],v=t[15];return E*(+c*m*_-l*p*_-c*d*x+s*p*x+l*d*M-s*m*M)+T*(+i*m*M-i*p*x+c*h*x-l*h*M+l*p*g-c*m*g)+S*(+i*p*_-i*d*M-c*h*_+s*h*M+c*d*g-s*p*g)+v*(-l*d*g-i*m*_+i*d*x+l*h*_-s*h*x+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],x=t[10],M=t[11],E=t[12],T=t[13],S=t[14],v=t[15],O=_*S*p-T*x*p+T*m*M-d*S*M-_*m*v+d*x*v,L=E*x*p-g*S*p-E*m*M+h*S*M+g*m*v-h*x*v,C=g*T*p-E*_*p+E*d*M-h*T*M-g*d*v+h*_*v,H=E*_*m-g*T*m-E*d*x+h*T*x+g*d*S-h*_*S,B=i*O+s*L+l*C+c*H;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/B;return t[0]=O*P,t[1]=(T*x*c-_*S*c-T*l*M+s*S*M+_*l*v-s*x*v)*P,t[2]=(d*S*c-T*m*c+T*l*p-s*S*p-d*l*v+s*m*v)*P,t[3]=(_*m*c-d*x*c-_*l*p+s*x*p+d*l*M-s*m*M)*P,t[4]=L*P,t[5]=(g*S*c-E*x*c+E*l*M-i*S*M-g*l*v+i*x*v)*P,t[6]=(E*m*c-h*S*c-E*l*p+i*S*p+h*l*v-i*m*v)*P,t[7]=(h*x*c-g*m*c+g*l*p-i*x*p-h*l*M+i*m*M)*P,t[8]=C*P,t[9]=(E*_*c-g*T*c-E*s*M+i*T*M+g*s*v-i*_*v)*P,t[10]=(h*T*c-E*d*c+E*s*p-i*T*p-h*s*v+i*d*v)*P,t[11]=(g*d*c-h*_*c-g*s*p+i*_*p+h*s*M-i*d*M)*P,t[12]=H*P,t[13]=(g*T*l-E*_*l+E*s*x-i*T*x-g*s*S+i*_*S)*P,t[14]=(E*d*l-h*T*l-E*s*m+i*T*m+h*s*S-i*d*S)*P,t[15]=(h*_*l-g*d*l+g*s*m-i*_*m-h*s*x+i*d*x)*P,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,_=d+d,x=c*p,M=c*g,E=c*_,T=h*g,S=h*_,v=d*_,O=m*p,L=m*g,C=m*_,H=s.x,B=s.y,P=s.z;return l[0]=(1-(T+v))*H,l[1]=(M+C)*H,l[2]=(E-L)*H,l[3]=0,l[4]=(M-C)*B,l[5]=(1-(x+v))*B,l[6]=(S+O)*B,l[7]=0,l[8]=(E+L)*P,l[9]=(S-O)*P,l[10]=(1-(x+T))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=fr.set(l[0],l[1],l[2]).length();const h=fr.set(l[4],l[5],l[6]).length(),d=fr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],vi.copy(this);const p=1/c,g=1/h,_=1/d;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=g,vi.elements[5]*=g,vi.elements[6]*=g,vi.elements[8]*=_,vi.elements[9]*=_,vi.elements[10]*=_,i.setFromRotationMatrix(vi),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=ca){const m=this.elements,p=2*c/(i-t),g=2*c/(s-l),_=(i+t)/(i-t),x=(s+l)/(s-l);let M,E;if(d===ca)M=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(d===Fc)M=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=ca){const m=this.elements,p=1/(i-t),g=1/(s-l),_=1/(h-c),x=(i+t)*p,M=(s+l)*g;let E,T;if(d===ca)E=(h+c)*_,T=-2*_;else if(d===Fc)E=c*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=T,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const fr=new j,vi=new Ye,qy=new j(0,0,0),Yy=new j(1,1,1),Ha=new j,uc=new j,$n=new j,O_=new Ye,P_=new As;class Ei{constructor(t=0,i=0,s=0,l=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(_e(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-_e(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return O_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(O_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return P_.setFromEuler(this),this.setFromQuaternion(P_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class J0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jy=0;const z_=new j,hr=new As,ia=new Ye,fc=new j,Do=new j,Zy=new j,Ky=new As,I_=new j(1,0,0),B_=new j(0,1,0),F_=new j(0,0,1),H_={type:"added"},Qy={type:"removed"},dr={type:"childadded",child:null},fh={type:"childremoved",child:null};class yn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const t=new j,i=new Ei,s=new As,l=new j(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new le}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new J0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return hr.setFromAxisAngle(t,i),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,i){return hr.setFromAxisAngle(t,i),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(I_,t)}rotateY(t){return this.rotateOnAxis(B_,t)}rotateZ(t){return this.rotateOnAxis(F_,t)}translateOnAxis(t,i){return z_.copy(t).applyQuaternion(this.quaternion),this.position.add(z_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(I_,t)}translateY(t){return this.translateOnAxis(B_,t)}translateZ(t){return this.translateOnAxis(F_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ia.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?fc.copy(t):fc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ia.lookAt(Do,fc,this.up):ia.lookAt(fc,Do,this.up),this.quaternion.setFromRotationMatrix(ia),l&&(ia.extractRotation(l.matrixWorld),hr.setFromRotationMatrix(ia),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(H_),dr.child=t,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Qy),fh.child=t,this.dispatchEvent(fh),fh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ia.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ia.multiply(t.parent.matrixWorld)),t.applyMatrix4(ia),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(H_),dr.child=t,this.dispatchEvent(dr),dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,t,Zy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,Ky,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),x=h(t.skeletons),M=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}yn.DEFAULT_UP=new j(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new j,aa=new j,hh=new j,sa=new j,pr=new j,mr=new j,G_=new j,dh=new j,ph=new j,mh=new j,gh=new Je,_h=new Je,vh=new Je;class Si{constructor(t=new j,i=new j,s=new j){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),xi.subVectors(t,i),l.cross(xi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){xi.subVectors(l,i),aa.subVectors(s,i),hh.subVectors(t,i);const h=xi.dot(xi),d=xi.dot(aa),m=xi.dot(hh),p=aa.dot(aa),g=aa.dot(hh),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(p*m-d*g)*x,E=(h*g-d*m)*x;return c.set(1-M-E,E,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,sa)===null?!1:sa.x>=0&&sa.y>=0&&sa.x+sa.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,sa.x),m.addScaledVector(h,sa.y),m.addScaledVector(d,sa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return gh.setScalar(0),_h.setScalar(0),vh.setScalar(0),gh.fromBufferAttribute(t,i),_h.fromBufferAttribute(t,s),vh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(gh,c.x),h.addScaledVector(_h,c.y),h.addScaledVector(vh,c.z),h}static isFrontFacing(t,i,s,l){return xi.subVectors(s,i),aa.subVectors(t,i),xi.cross(aa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),aa.subVectors(this.a,this.b),xi.cross(aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Si.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Si.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;pr.subVectors(l,s),mr.subVectors(c,s),dh.subVectors(t,s);const m=pr.dot(dh),p=mr.dot(dh);if(m<=0&&p<=0)return i.copy(s);ph.subVectors(t,l);const g=pr.dot(ph),_=mr.dot(ph);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(pr,h);mh.subVectors(t,c);const M=pr.dot(mh),E=mr.dot(mh);if(E>=0&&M<=E)return i.copy(c);const T=M*p-m*E;if(T<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(mr,d);const S=g*E-M*_;if(S<=0&&_-g>=0&&M-E>=0)return G_.subVectors(c,l),d=(_-g)/(_-g+(M-E)),i.copy(l).addScaledVector(G_,d);const v=1/(S+T+x);return h=T*v,d=x*v,i.copy(s).addScaledVector(pr,h).addScaledVector(mr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ga={h:0,s:0,l:0},hc={h:0,s:0,l:0};function xh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class de{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Re.workingColorSpace){return this.r=t,this.g=i,this.b=s,Re.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Re.workingColorSpace){if(t=Ny(t,1),i=_e(i,0,1),s=_e(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=xh(h,c,t+1/3),this.g=xh(h,c,t),this.b=xh(h,c,t-1/3)}return Re.colorSpaceToWorking(this,l),this}setStyle(t,i=ei){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ei){const s=$0[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ua(t.r),this.g=ua(t.g),this.b=ua(t.b),this}copyLinearToSRGB(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ei){return Re.workingToColorSpace(Nn.copy(this),t),Math.round(_e(Nn.r*255,0,255))*65536+Math.round(_e(Nn.g*255,0,255))*256+Math.round(_e(Nn.b*255,0,255))}getHexString(t=ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Re.workingColorSpace){Re.workingToColorSpace(Nn.copy(this),i);const s=Nn.r,l=Nn.g,c=Nn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Re.workingColorSpace){return Re.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=ei){Re.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,s=Nn.g,l=Nn.b;return t!==ei?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ga),this.setHSL(Ga.h+t,Ga.s+i,Ga.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ga),t.getHSL(hc);const s=eh(Ga.h,hc.h,i),l=eh(Ga.s,hc.s,i),c=eh(Ga.l,hc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new de;de.NAMES=$0;let Jy=0;class Pi extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=Vo(),this.name="",this.type="Material",this.blending=Er,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=zh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(s.blending=this.blending),this.side!==Ya&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ph&&(s.blendSrc=this.blendSrc),this.blendDst!==zh&&(s.blendDst=this.blendDst),this.blendEquation!==ys&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==R_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class tv extends Pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rn=new j,dc=new re;let $y=0;class Ni{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$y++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=w_,this.updateRanges=[],this.gpuType=la,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)dc.fromBufferAttribute(this,i),dc.applyMatrix3(t),this.setXY(i,dc.x,dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ro(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Gn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ro(i,this.array)),i}setX(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ro(i,this.array)),i}setY(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ro(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ro(i,this.array)),i}setW(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array),c=Gn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==w_&&(t.usage=this.usage),t}}class ev extends Ni{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class nv extends Ni{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Sn extends Ni{constructor(t,i,s){super(new Float32Array(t),i,s)}}let tM=0;const fi=new Ye,Sh=new yn,gr=new j,ti=new ko,Uo=new ko,xn=new j;class ii extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(K0(t)?nv:ev)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new le().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,i,s){return fi.makeTranslation(t,i,s),this.applyMatrix4(fi),this}scale(t,i,s){return fi.makeScale(t,i,s),this.applyMatrix4(fi),this}lookAt(t){return Sh.lookAt(t),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Sn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Uo.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(ti.min,Uo.min),ti.expandByPoint(xn),xn.addVectors(ti.max,Uo.max),ti.expandByPoint(xn)):(ti.expandByPoint(Uo.min),ti.expandByPoint(Uo.max))}ti.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)xn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(xn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)xn.fromBufferAttribute(d,p),m&&(gr.fromBufferAttribute(t,p),xn.add(gr)),l=Math.max(l,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let W=0;W<s.count;W++)d[W]=new j,m[W]=new j;const p=new j,g=new j,_=new j,x=new re,M=new re,E=new re,T=new j,S=new j;function v(W,D,w){p.fromBufferAttribute(s,W),g.fromBufferAttribute(s,D),_.fromBufferAttribute(s,w),x.fromBufferAttribute(c,W),M.fromBufferAttribute(c,D),E.fromBufferAttribute(c,w),g.sub(p),_.sub(p),M.sub(x),E.sub(x);const F=1/(M.x*E.y-E.x*M.y);isFinite(F)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(F),S.copy(_).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(F),d[W].add(T),d[D].add(T),d[w].add(T),m[W].add(S),m[D].add(S),m[w].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let W=0,D=O.length;W<D;++W){const w=O[W],F=w.start,et=w.count;for(let at=F,ut=F+et;at<ut;at+=3)v(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const L=new j,C=new j,H=new j,B=new j;function P(W){H.fromBufferAttribute(l,W),B.copy(H);const D=d[W];L.copy(D),L.sub(H.multiplyScalar(H.dot(D))).normalize(),C.crossVectors(B,D);const F=C.dot(m[W])<0?-1:1;h.setXYZW(W,L.x,L.y,L.z,F)}for(let W=0,D=O.length;W<D;++W){const w=O[W],F=w.start,et=w.count;for(let at=F,ut=F+et;at<ut;at+=3)P(t.getX(at+0)),P(t.getX(at+1)),P(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new j,c=new j,h=new j,d=new j,m=new j,p=new j,g=new j,_=new j;if(t)for(let x=0,M=t.count;x<M;x+=3){const E=t.getX(x+0),T=t.getX(x+1),S=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,S),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,S),d.add(g),m.add(g),p.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(m.length*g);let M=0,E=0;for(let T=0,S=m.length;T<S;T++){d.isInterleavedBufferAttribute?M=m[T]*d.data.stride+d.offset:M=m[T]*g;for(let v=0;v<g;v++)x[E++]=p[M++]}return new Ni(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ii,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],M=t(x,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const M=p[_];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,M=_.length;x<M;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const V_=new Ye,gs=new Xc,pc=new Xo,k_=new j,mc=new j,gc=new j,_c=new j,yh=new j,vc=new j,X_=new j,xc=new j;class ni extends yn{constructor(t=new ii,i=new tv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){vc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(yh.fromBufferAttribute(_,t),h?vc.addScaledVector(yh,g):vc.addScaledVector(yh.sub(i),g))}i.add(vc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),pc.copy(s.boundingSphere),pc.applyMatrix4(c),gs.copy(t.ray).recast(t.near),!(pc.containsPoint(gs.origin)===!1&&(gs.intersectSphere(pc,k_)===null||gs.origin.distanceToSquared(k_)>(t.far-t.near)**2))&&(V_.copy(c).invert(),gs.copy(t.ray).applyMatrix4(V_),!(s.boundingBox!==null&&gs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,gs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,T=x.length;E<T;E++){const S=x[E],v=h[S.materialIndex],O=Math.max(S.start,M.start),L=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let C=O,H=L;C<H;C+=3){const B=d.getX(C),P=d.getX(C+1),W=d.getX(C+2);l=Sc(this,v,t,s,p,g,_,B,P,W),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let S=E,v=T;S<v;S+=3){const O=d.getX(S),L=d.getX(S+1),C=d.getX(S+2);l=Sc(this,h,t,s,p,g,_,O,L,C),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,T=x.length;E<T;E++){const S=x[E],v=h[S.materialIndex],O=Math.max(S.start,M.start),L=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let C=O,H=L;C<H;C+=3){const B=C,P=C+1,W=C+2;l=Sc(this,v,t,s,p,g,_,B,P,W),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let S=E,v=T;S<v;S+=3){const O=S,L=S+1,C=S+2;l=Sc(this,h,t,s,p,g,_,O,L,C),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function eM(r,t,i,s,l,c,h,d){let m;if(t.side===kn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===Ya,d),m===null)return null;xc.copy(d),xc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(xc);return p<i.near||p>i.far?null:{distance:p,point:xc.clone(),object:r}}function Sc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,mc),r.getVertexPosition(m,gc),r.getVertexPosition(p,_c);const g=eM(r,t,i,s,mc,gc,_c,X_);if(g){const _=new j;Si.getBarycoord(X_,mc,gc,_c,_),l&&(g.uv=Si.getInterpolatedAttribute(l,d,m,p,_,new re)),c&&(g.uv1=Si.getInterpolatedAttribute(c,d,m,p,_,new re)),h&&(g.normal=Si.getInterpolatedAttribute(h,d,m,p,_,new j),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new j,materialIndex:0};Si.getNormal(mc,gc,_c,x.normal),g.face=x,g.barycoord=_}return g}class Wo extends ii{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],_=[];let x=0,M=0;E("z","y","x",-1,-1,s,i,t,h,c,0),E("z","y","x",1,-1,s,i,-t,h,c,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Sn(p,3)),this.setAttribute("normal",new Sn(g,3)),this.setAttribute("uv",new Sn(_,2));function E(T,S,v,O,L,C,H,B,P,W,D){const w=C/P,F=H/W,et=C/2,at=H/2,ut=B/2,ct=P+1,z=W+1;let K=0,X=0;const pt=new j;for(let U=0;U<z;U++){const J=U*F-at;for(let gt=0;gt<ct;gt++){const yt=gt*w-et;pt[T]=yt*O,pt[S]=J*L,pt[v]=ut,p.push(pt.x,pt.y,pt.z),pt[T]=0,pt[S]=0,pt[v]=B>0?1:-1,g.push(pt.x,pt.y,pt.z),_.push(gt/P),_.push(1-U/W),K+=1}}for(let U=0;U<W;U++)for(let J=0;J<P;J++){const gt=x+J+ct*U,yt=x+J+ct*(U+1),Q=x+(J+1)+ct*(U+1),ft=x+(J+1)+ct*U;m.push(gt,yt,ft),m.push(yt,Q,ft),X+=6}d.addGroup(M,X,D),M+=X,x+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Dr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Pn(r){const t={};for(let i=0;i<r.length;i++){const s=Dr(r[i]);for(const l in s)t[l]=s[l]}return t}function nM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function iv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const iM={clone:Dr,merge:Pn};var aM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ja extends Pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aM,this.fragmentShader=sM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dr(t.uniforms),this.uniformsGroups=nM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class av extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ca}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Va=new j,W_=new re,q_=new re;class di extends av{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Sd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sd*2*Math.atan(Math.tan(zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Va.x,Va.y).multiplyScalar(-t/Va.z),Va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Va.x,Va.y).multiplyScalar(-t/Va.z)}getViewSize(t,i){return this.getViewBounds(t,W_,q_),i.subVectors(q_,W_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(zc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _r=-90,vr=1;class rM extends yn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(_r,vr,t,i);l.layers=this.layers,this.add(l);const c=new di(_r,vr,t,i);c.layers=this.layers,this.add(c);const h=new di(_r,vr,t,i);h.layers=this.layers,this.add(h);const d=new di(_r,vr,t,i);d.layers=this.layers,this.add(d);const m=new di(_r,vr,t,i);m.layers=this.layers,this.add(m);const p=new di(_r,vr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===ca)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Fc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,x,M),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class sv extends Xn{constructor(t=[],i=Rr,s,l,c,h,d,m,p,g){super(t,i,s,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class oM extends Rs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new sv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Wo(5,5,5),c=new ja({name:"CubemapFromEquirect",uniforms:Dr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:Wa});c.uniforms.tEquirect.value=i;const h=new ni(l,c),d=i.minFilter;return i.minFilter===Ts&&(i.minFilter=Li),new rM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class No extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lM={type:"move"};class Mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new No,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new No,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new No,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const T of t.hand.values()){const S=i.getJointPose(T,s),v=this._getHandJoint(p,T);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),M=.02,E=.005;p.inputState.pinching&&x>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(lM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new No;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class cM extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Eh=new j,uM=new j,fM=new le;class ka{constructor(t=new j(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Eh.subVectors(s,i).cross(uM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Eh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||fM.getNormalMatrix(t),l=this.coplanarPoint(Eh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new Xo,yc=new j;class Pd{constructor(t=new ka,i=new ka,s=new ka,l=new ka,c=new ka,h=new ka){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ca){const s=this.planes,l=t.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],_=l[6],x=l[7],M=l[8],E=l[9],T=l[10],S=l[11],v=l[12],O=l[13],L=l[14],C=l[15];if(s[0].setComponents(m-c,x-p,S-M,C-v).normalize(),s[1].setComponents(m+c,x+p,S+M,C+v).normalize(),s[2].setComponents(m+h,x+g,S+E,C+O).normalize(),s[3].setComponents(m-h,x-g,S-E,C-O).normalize(),s[4].setComponents(m-d,x-_,S-T,C-L).normalize(),i===ca)s[5].setComponents(m+d,x+_,S+T,C+L).normalize();else if(i===Fc)s[5].setComponents(d,_,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_s.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(t){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(t.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(yc.x=l.normal.x>0?t.max.x:t.min.x,yc.y=l.normal.y>0?t.max.y:t.min.y,yc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(yc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zo extends Pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Gc=new j,Vc=new j,Y_=new Ye,Lo=new Xc,Mc=new Xo,Th=new j,j_=new j;class rv extends yn{constructor(t=new ii,i=new zo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Gc.fromBufferAttribute(i,l-1),Vc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Gc.distanceTo(Vc);t.setAttribute("lineDistance",new Sn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Mc.copy(s.boundingSphere),Mc.applyMatrix4(l),Mc.radius+=c,t.ray.intersectsSphere(Mc)===!1)return;Y_.copy(l).invert(),Lo.copy(t.ray).applyMatrix4(Y_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const M=Math.max(0,h.start),E=Math.min(g.count,h.start+h.count);for(let T=M,S=E-1;T<S;T+=p){const v=g.getX(T),O=g.getX(T+1),L=Ec(this,t,Lo,m,v,O,T);L&&i.push(L)}if(this.isLineLoop){const T=g.getX(E-1),S=g.getX(M),v=Ec(this,t,Lo,m,T,S,E-1);v&&i.push(v)}}else{const M=Math.max(0,h.start),E=Math.min(x.count,h.start+h.count);for(let T=M,S=E-1;T<S;T+=p){const v=Ec(this,t,Lo,m,T,T+1,T);v&&i.push(v)}if(this.isLineLoop){const T=Ec(this,t,Lo,m,E-1,M,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Ec(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(Gc.fromBufferAttribute(d,l),Vc.fromBufferAttribute(d,c),i.distanceSqToSegment(Gc,Vc,Th,j_)>s)return;Th.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Th);if(!(p<t.near||p>t.far))return{distance:p,point:j_.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const Z_=new j,K_=new j;class Q_ extends rv{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Z_.fromBufferAttribute(i,l),K_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Z_.distanceTo(K_);t.setAttribute("lineDistance",new Sn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Oo extends Pi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const J_=new Ye,yd=new Xc,Tc=new Xo,bc=new j;class bh extends yn{constructor(t=new ii,i=new Oo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Tc.copy(s.boundingSphere),Tc.applyMatrix4(l),Tc.radius+=c,t.ray.intersectsSphere(Tc)===!1)return;J_.copy(l).invert(),yd.copy(t.ray).applyMatrix4(J_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,_=s.attributes.position;if(p!==null){const x=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let E=x,T=M;E<T;E++){const S=p.getX(E);bc.fromBufferAttribute(_,S),$_(bc,S,m,l,t,i,this)}}else{const x=Math.max(0,h.start),M=Math.min(_.count,h.start+h.count);for(let E=x,T=M;E<T;E++)bc.fromBufferAttribute(_,E),$_(bc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function $_(r,t,i,s,l,c,h){const d=yd.distanceSqToPoint(r);if(d<i){const m=new j;yd.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class ov extends Xn{constructor(t,i,s=bs,l,c,h,d=Mi,m=Mi,p,g=Fo,_=1){if(g!==Fo&&g!==Ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Od(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class zd extends ii{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],x=[],M=[];let E=0;const T=[],S=s/2;let v=0;O(),h===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new Sn(_,3)),this.setAttribute("normal",new Sn(x,3)),this.setAttribute("uv",new Sn(M,2));function O(){const C=new j,H=new j;let B=0;const P=(i-t)/s;for(let W=0;W<=c;W++){const D=[],w=W/c,F=w*(i-t)+t;for(let et=0;et<=l;et++){const at=et/l,ut=at*m+d,ct=Math.sin(ut),z=Math.cos(ut);H.x=F*ct,H.y=-w*s+S,H.z=F*z,_.push(H.x,H.y,H.z),C.set(ct,P,z).normalize(),x.push(C.x,C.y,C.z),M.push(at,1-w),D.push(E++)}T.push(D)}for(let W=0;W<l;W++)for(let D=0;D<c;D++){const w=T[D][W],F=T[D+1][W],et=T[D+1][W+1],at=T[D][W+1];(t>0||D!==0)&&(g.push(w,F,at),B+=3),(i>0||D!==c-1)&&(g.push(F,et,at),B+=3)}p.addGroup(v,B,0),v+=B}function L(C){const H=E,B=new re,P=new j;let W=0;const D=C===!0?t:i,w=C===!0?1:-1;for(let et=1;et<=l;et++)_.push(0,S*w,0),x.push(0,w,0),M.push(.5,.5),E++;const F=E;for(let et=0;et<=l;et++){const ut=et/l*m+d,ct=Math.cos(ut),z=Math.sin(ut);P.x=D*z,P.y=S*w,P.z=D*ct,_.push(P.x,P.y,P.z),x.push(0,w,0),B.x=ct*.5+.5,B.y=z*.5*w+.5,M.push(B.x,B.y),E++}for(let et=0;et<l;et++){const at=H+et,ut=F+et;C===!0?g.push(ut,ut+1,at):g.push(ut+1,ut,at),W+=3}p.addGroup(v,W,C===!0?1:2),v+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zd(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qo extends ii{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=t/d,x=i/m,M=[],E=[],T=[],S=[];for(let v=0;v<g;v++){const O=v*x-h;for(let L=0;L<p;L++){const C=L*_-c;E.push(C,-O,0),T.push(0,0,1),S.push(L/d),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let O=0;O<d;O++){const L=O+p*v,C=O+p*(v+1),H=O+1+p*(v+1),B=O+1+p*v;M.push(L,C,B),M.push(C,H,B)}this.setIndex(M),this.setAttribute("position",new Sn(E,3)),this.setAttribute("normal",new Sn(T,3)),this.setAttribute("uv",new Sn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.width,t.height,t.widthSegments,t.heightSegments)}}class t0 extends Pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nd,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hM extends Pi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new de(16777215),this.specular=new de(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nd,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dM extends Pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ey,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pM extends Pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const e0={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class mM{constructor(t,i,s){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this.itemStart=function(g){d++,c===!1&&l.onStart!==void 0&&l.onStart(g,h,d),c=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,x=p.length;_<x;_+=2){const M=p[_],E=p[_+1];if(M.global&&(M.lastIndex=0),M.test(g))return E}return null}}}const gM=new mM;class Id{constructor(t){this.manager=t!==void 0?t:gM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Id.DEFAULT_MATERIAL_NAME="__DEFAULT";const ra={};class _M extends Error{constructor(t,i){super(t),this.response=i}}class vM extends Id{constructor(t){super(t),this.mimeType="",this.responseType=""}load(t,i,s,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=e0.get(t);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(ra[t]!==void 0){ra[t].push({onLoad:i,onProgress:s,onError:l});return}ra[t]=[],ra[t].push({onLoad:i,onProgress:s,onError:l});const h=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),d=this.mimeType,m=this.responseType;fetch(h).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=ra[t],_=p.body.getReader(),x=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),M=x?parseInt(x):0,E=M!==0;let T=0;const S=new ReadableStream({start(v){O();function O(){_.read().then(({done:L,value:C})=>{if(L)v.close();else{T+=C.byteLength;const H=new ProgressEvent("progress",{lengthComputable:E,loaded:T,total:M});for(let B=0,P=g.length;B<P;B++){const W=g[B];W.onProgress&&W.onProgress(H)}v.enqueue(C),O()}},L=>{v.error(L)})}}});return new Response(S)}else throw new _M(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,d));case"json":return p.json();default:if(d==="")return p.text();{const _=/charset="?([^;"\s]*)"?/i.exec(d),x=_&&_[1]?_[1].toLowerCase():void 0,M=new TextDecoder(x);return p.arrayBuffer().then(E=>M.decode(E))}}}).then(p=>{e0.add(t,p);const g=ra[t];delete ra[t];for(let _=0,x=g.length;_<x;_++){const M=g[_];M.onLoad&&M.onLoad(p)}}).catch(p=>{const g=ra[t];if(g===void 0)throw this.manager.itemError(t),p;delete ra[t];for(let _=0,x=g.length;_<x;_++){const M=g[_];M.onError&&M.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class lv extends yn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new de(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Ah=new Ye,n0=new j,i0=new j;class xM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Oi,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pd,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;n0.setFromMatrixPosition(t.matrixWorld),i.position.copy(n0),i0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(i0),i.updateMatrixWorld(),Ah.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ah),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ah)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class cv extends av{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class SM extends xM{constructor(){super(new cv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yM extends lv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new SM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class MM extends lv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class EM extends di{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class a0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(_e(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class TM extends ws{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function s0(r,t,i,s){const l=bM(s);switch(i){case X0:return r*t;case q0:return r*t/l.components*l.byteLength;case Dd:return r*t/l.components*l.byteLength;case Y0:return r*t*2/l.components*l.byteLength;case Ud:return r*t*2/l.components*l.byteLength;case W0:return r*t*3/l.components*l.byteLength;case yi:return r*t*4/l.components*l.byteLength;case Ld:return r*t*4/l.components*l.byteLength;case Uc:case Lc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Nc:case Oc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Zh:case Qh:return Math.max(r,16)*Math.max(t,8)/4;case jh:case Kh:return Math.max(r,8)*Math.max(t,8)/2;case Jh:case $h:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case td:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ed:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case nd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case id:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case ad:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case sd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case rd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case od:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ld:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case cd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ud:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case fd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case hd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case dd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case pd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Pc:case md:case gd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case j0:case _d:return Math.ceil(r/4)*Math.ceil(t/4)*8;case vd:case xd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function bM(r){switch(r){case Oi:case G0:return{byteLength:1,components:1};case Io:case V0:case Go:return{byteLength:2,components:1};case wd:case Cd:return{byteLength:2,components:4};case bs:case Rd:case la:return{byteLength:4,components:1};case k0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function uv(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function AM(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<_.length;M++){const E=_[x],T=_[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,_[x]=T)}_.length=x+1;for(let M=0,E=_.length;M<E;M++){const T=_[M];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var RM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,OM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,HM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,GM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,KM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,QM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,JM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iE="gl_FragColor = linearToOutputTexel( gl_FragColor );",aE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_E=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,SE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ME=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,AE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,WE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$E=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_T=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ST=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ET=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,NT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,OT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,WT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,YT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$T=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,eb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ib=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ab=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:RM,alphahash_pars_fragment:wM,alphamap_fragment:CM,alphamap_pars_fragment:DM,alphatest_fragment:UM,alphatest_pars_fragment:LM,aomap_fragment:NM,aomap_pars_fragment:OM,batching_pars_vertex:PM,batching_vertex:zM,begin_vertex:IM,beginnormal_vertex:BM,bsdfs:FM,iridescence_fragment:HM,bumpmap_pars_fragment:GM,clipping_planes_fragment:VM,clipping_planes_pars_fragment:kM,clipping_planes_pars_vertex:XM,clipping_planes_vertex:WM,color_fragment:qM,color_pars_fragment:YM,color_pars_vertex:jM,color_vertex:ZM,common:KM,cube_uv_reflection_fragment:QM,defaultnormal_vertex:JM,displacementmap_pars_vertex:$M,displacementmap_vertex:tE,emissivemap_fragment:eE,emissivemap_pars_fragment:nE,colorspace_fragment:iE,colorspace_pars_fragment:aE,envmap_fragment:sE,envmap_common_pars_fragment:rE,envmap_pars_fragment:oE,envmap_pars_vertex:lE,envmap_physical_pars_fragment:xE,envmap_vertex:cE,fog_vertex:uE,fog_pars_vertex:fE,fog_fragment:hE,fog_pars_fragment:dE,gradientmap_pars_fragment:pE,lightmap_pars_fragment:mE,lights_lambert_fragment:gE,lights_lambert_pars_fragment:_E,lights_pars_begin:vE,lights_toon_fragment:SE,lights_toon_pars_fragment:yE,lights_phong_fragment:ME,lights_phong_pars_fragment:EE,lights_physical_fragment:TE,lights_physical_pars_fragment:bE,lights_fragment_begin:AE,lights_fragment_maps:RE,lights_fragment_end:wE,logdepthbuf_fragment:CE,logdepthbuf_pars_fragment:DE,logdepthbuf_pars_vertex:UE,logdepthbuf_vertex:LE,map_fragment:NE,map_pars_fragment:OE,map_particle_fragment:PE,map_particle_pars_fragment:zE,metalnessmap_fragment:IE,metalnessmap_pars_fragment:BE,morphinstance_vertex:FE,morphcolor_vertex:HE,morphnormal_vertex:GE,morphtarget_pars_vertex:VE,morphtarget_vertex:kE,normal_fragment_begin:XE,normal_fragment_maps:WE,normal_pars_fragment:qE,normal_pars_vertex:YE,normal_vertex:jE,normalmap_pars_fragment:ZE,clearcoat_normal_fragment_begin:KE,clearcoat_normal_fragment_maps:QE,clearcoat_pars_fragment:JE,iridescence_pars_fragment:$E,opaque_fragment:tT,packing:eT,premultiplied_alpha_fragment:nT,project_vertex:iT,dithering_fragment:aT,dithering_pars_fragment:sT,roughnessmap_fragment:rT,roughnessmap_pars_fragment:oT,shadowmap_pars_fragment:lT,shadowmap_pars_vertex:cT,shadowmap_vertex:uT,shadowmask_pars_fragment:fT,skinbase_vertex:hT,skinning_pars_vertex:dT,skinning_vertex:pT,skinnormal_vertex:mT,specularmap_fragment:gT,specularmap_pars_fragment:_T,tonemapping_fragment:vT,tonemapping_pars_fragment:xT,transmission_fragment:ST,transmission_pars_fragment:yT,uv_pars_fragment:MT,uv_pars_vertex:ET,uv_vertex:TT,worldpos_vertex:bT,background_vert:AT,background_frag:RT,backgroundCube_vert:wT,backgroundCube_frag:CT,cube_vert:DT,cube_frag:UT,depth_vert:LT,depth_frag:NT,distanceRGBA_vert:OT,distanceRGBA_frag:PT,equirect_vert:zT,equirect_frag:IT,linedashed_vert:BT,linedashed_frag:FT,meshbasic_vert:HT,meshbasic_frag:GT,meshlambert_vert:VT,meshlambert_frag:kT,meshmatcap_vert:XT,meshmatcap_frag:WT,meshnormal_vert:qT,meshnormal_frag:YT,meshphong_vert:jT,meshphong_frag:ZT,meshphysical_vert:KT,meshphysical_frag:QT,meshtoon_vert:JT,meshtoon_frag:$T,points_vert:tb,points_frag:eb,shadow_vert:nb,shadow_frag:ib,sprite_vert:ab,sprite_frag:sb},Nt={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Di={basic:{uniforms:Pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new de(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Pn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Pn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new de(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Pn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Pn([Nt.points,Nt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Pn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Pn([Nt.common,Nt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Pn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Pn([Nt.sprite,Nt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Pn([Nt.common,Nt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Pn([Nt.lights,Nt.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Di.physical={uniforms:Pn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Ac={r:0,b:0,g:0},vs=new Ei,rb=new Ye;function ob(r,t,i,s,l,c,h){const d=new de(0);let m=c===!0?0:1,p,g,_=null,x=0,M=null;function E(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?i:t).get(C)),C}function T(L){let C=!1;const H=E(L);H===null?v(d,m):H&&H.isColor&&(v(H,1),C=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(L,C){const H=E(C);H&&(H.isCubeTexture||H.mapping===kc)?(g===void 0&&(g=new ni(new Wo(1,1,1),new ja({name:"BackgroundCubeMaterial",uniforms:Dr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,P,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),vs.copy(C.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(rb.makeRotationFromEuler(vs)),g.material.toneMapped=Re.getTransfer(H.colorSpace)!==Be,(_!==H||x!==H.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,_=H,x=H.version,M=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new ni(new qo(2,2),new ja({name:"BackgroundMaterial",uniforms:Dr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Re.getTransfer(H.colorSpace)!==Be,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(_!==H||x!==H.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,_=H,x=H.version,M=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,C){L.getRGB(Ac,iv(r)),s.buffers.color.setClear(Ac.r,Ac.g,Ac.b,C,h)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,C=1){d.set(L),m=C,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(d,m)},render:T,addToRenderList:S,dispose:O}}function lb(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function d(w,F,et,at,ut){let ct=!1;const z=_(at,et,F);c!==z&&(c=z,p(c.object)),ct=M(w,at,et,ut),ct&&E(w,at,et,ut),ut!==null&&t.update(ut,r.ELEMENT_ARRAY_BUFFER),(ct||h)&&(h=!1,C(w,F,et,at),ut!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function _(w,F,et){const at=et.wireframe===!0;let ut=s[w.id];ut===void 0&&(ut={},s[w.id]=ut);let ct=ut[F.id];ct===void 0&&(ct={},ut[F.id]=ct);let z=ct[at];return z===void 0&&(z=x(m()),ct[at]=z),z}function x(w){const F=[],et=[],at=[];for(let ut=0;ut<i;ut++)F[ut]=0,et[ut]=0,at[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:et,attributeDivisors:at,object:w,attributes:{},index:null}}function M(w,F,et,at){const ut=c.attributes,ct=F.attributes;let z=0;const K=et.getAttributes();for(const X in K)if(K[X].location>=0){const U=ut[X];let J=ct[X];if(J===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(J=w.instanceColor)),U===void 0||U.attribute!==J||J&&U.data!==J.data)return!0;z++}return c.attributesNum!==z||c.index!==at}function E(w,F,et,at){const ut={},ct=F.attributes;let z=0;const K=et.getAttributes();for(const X in K)if(K[X].location>=0){let U=ct[X];U===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(U=w.instanceColor));const J={};J.attribute=U,U&&U.data&&(J.data=U.data),ut[X]=J,z++}c.attributes=ut,c.attributesNum=z,c.index=at}function T(){const w=c.newAttributes;for(let F=0,et=w.length;F<et;F++)w[F]=0}function S(w){v(w,0)}function v(w,F){const et=c.newAttributes,at=c.enabledAttributes,ut=c.attributeDivisors;et[w]=1,at[w]===0&&(r.enableVertexAttribArray(w),at[w]=1),ut[w]!==F&&(r.vertexAttribDivisor(w,F),ut[w]=F)}function O(){const w=c.newAttributes,F=c.enabledAttributes;for(let et=0,at=F.length;et<at;et++)F[et]!==w[et]&&(r.disableVertexAttribArray(et),F[et]=0)}function L(w,F,et,at,ut,ct,z){z===!0?r.vertexAttribIPointer(w,F,et,ut,ct):r.vertexAttribPointer(w,F,et,at,ut,ct)}function C(w,F,et,at){T();const ut=at.attributes,ct=et.getAttributes(),z=F.defaultAttributeValues;for(const K in ct){const X=ct[K];if(X.location>=0){let pt=ut[K];if(pt===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(pt=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(pt=w.instanceColor)),pt!==void 0){const U=pt.normalized,J=pt.itemSize,gt=t.get(pt);if(gt===void 0)continue;const yt=gt.buffer,Q=gt.type,ft=gt.bytesPerElement,Mt=Q===r.INT||Q===r.UNSIGNED_INT||pt.gpuType===Rd;if(pt.isInterleavedBufferAttribute){const wt=pt.data,St=wt.stride,Kt=pt.offset;if(wt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<X.locationSize;Wt++)v(X.location+Wt,wt.meshPerAttribute);w.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Wt=0;Wt<X.locationSize;Wt++)S(X.location+Wt);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let Wt=0;Wt<X.locationSize;Wt++)L(X.location+Wt,J/X.locationSize,Q,U,St*ft,(Kt+J/X.locationSize*Wt)*ft,Mt)}else{if(pt.isInstancedBufferAttribute){for(let wt=0;wt<X.locationSize;wt++)v(X.location+wt,pt.meshPerAttribute);w.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let wt=0;wt<X.locationSize;wt++)S(X.location+wt);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let wt=0;wt<X.locationSize;wt++)L(X.location+wt,J/X.locationSize,Q,U,J*ft,J/X.locationSize*wt*ft,Mt)}}else if(z!==void 0){const U=z[K];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(X.location,U);break;case 3:r.vertexAttrib3fv(X.location,U);break;case 4:r.vertexAttrib4fv(X.location,U);break;default:r.vertexAttrib1fv(X.location,U)}}}}O()}function H(){W();for(const w in s){const F=s[w];for(const et in F){const at=F[et];for(const ut in at)g(at[ut].object),delete at[ut];delete F[et]}delete s[w]}}function B(w){if(s[w.id]===void 0)return;const F=s[w.id];for(const et in F){const at=F[et];for(const ut in at)g(at[ut].object),delete at[ut];delete F[et]}delete s[w.id]}function P(w){for(const F in s){const et=s[F];if(et[w.id]===void 0)continue;const at=et[w.id];for(const ut in at)g(at[ut].object),delete at[ut];delete et[w.id]}}function W(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:D,dispose:H,releaseStatesOfGeometry:B,releaseStatesOfProgram:P,initAttributes:T,enableAttribute:S,disableUnusedAttributes:O}}function cb(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E];i.update(M,s,1)}function m(p,g,_,x){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],g[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*x[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function ub(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==yi&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const W=P===Go&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Oi&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==la&&!W)}function m(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),O=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,B=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:O,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:H,maxSamples:B}}function fb(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new ka,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||s!==0||l;return l=x,s=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,M){const E=_.clippingPlanes,T=_.clipIntersection,S=_.clipShadows,v=r.get(_);if(!l||E===null||E.length===0||c&&!S)c?g(null):p();else{const O=c?0:s,L=O*4;let C=v.clippingState||null;m.value=C,C=g(E,x,L,M);for(let H=0;H!==L;++H)C[H]=i[H];v.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,x,M,E){const T=_!==null?_.length:0;let S=null;if(T!==0){if(S=m.value,E!==!0||S===null){const v=M+T*4,O=x.matrixWorldInverse;d.getNormalMatrix(O),(S===null||S.length<v)&&(S=new Float32Array(v));for(let L=0,C=M;L!==T;++L,C+=4)h.copy(_[L]).applyMatrix4(O,d),h.normal.toArray(S,C),S[C+3]=h.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,S}}function hb(r){let t=new WeakMap;function i(h,d){return d===Xh?h.mapping=Rr:d===Wh&&(h.mapping=wr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Xh||d===Wh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new oM(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const yr=4,r0=[.125,.215,.35,.446,.526,.582],Ms=20,Rh=new cv,o0=new de;let wh=null,Ch=0,Dh=0,Uh=!1;const Ss=(1+Math.sqrt(5))/2,xr=1/Ss,l0=[new j(-Ss,xr,0),new j(Ss,xr,0),new j(-xr,0,Ss),new j(xr,0,Ss),new j(0,Ss,-xr),new j(0,Ss,xr),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],db=new j;class c0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=db}=c;wh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=h0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=f0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wh,Ch,Dh),this._renderer.xr.enabled=Uh,t.scissorTest=!1,Rc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Rr||t.mapping===wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Go,format:yi,colorSpace:Cr,depthBuffer:!1},l=u0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=u0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pb(c)),this._blurMaterial=mb(c,t,i)}return l}_compileMaterial(t){const i=new ni(this._lodPlanes[0],t);this._renderer.compile(i,Rh)}_sceneToCubeUV(t,i,s,l,c){const m=new di(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(o0),_.toneMapping=qa,_.autoClear=!1;const E=new tv({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),T=new ni(new Wo,E);let S=!1;const v=t.background;v?v.isColor&&(E.color.copy(v),t.background=null,S=!0):(E.color.copy(o0),S=!0);for(let O=0;O<6;O++){const L=O%3;L===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[O],c.y,c.z)):L===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[O]));const C=this._cubeSize;Rc(l,L*C,O>2?C:0,C,C),_.setRenderTarget(l),S&&_.render(T,m),_.render(t,m)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=M,_.autoClear=x,t.background=v}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Rr||t.mapping===wr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=h0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=f0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new ni(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Rc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Rh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=l0[(l-c-1)%l0.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new ni(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ms-1),T=c/E,S=isFinite(c)?1+Math.floor(g*T):Ms;S>Ms&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ms}`);const v=[];let O=0;for(let P=0;P<Ms;++P){const W=P/T,D=Math.exp(-W*W/2);v.push(D),P===0?O+=D:P<S&&(O+=2*D)}for(let P=0;P<v.length;P++)v[P]=v[P]/O;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-s;const C=this._sizeLods[l],H=3*C*(l>L-yr?l-L+yr:0),B=4*(this._cubeSize-C);Rc(i,H,B,3*C,2*C),m.setRenderTarget(i),m.render(_,Rh)}}function pb(r){const t=[],i=[],s=[];let l=r;const c=r-yr+1+r0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-yr?m=r0[h-r+yr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,E=6,T=3,S=2,v=1,O=new Float32Array(T*E*M),L=new Float32Array(S*E*M),C=new Float32Array(v*E*M);for(let B=0;B<M;B++){const P=B%3*2/3-1,W=B>2?0:-1,D=[P,W,0,P+2/3,W,0,P+2/3,W+1,0,P,W,0,P+2/3,W+1,0,P,W+1,0];O.set(D,T*E*B),L.set(x,S*E*B);const w=[B,B,B,B,B,B];C.set(w,v*E*B)}const H=new ii;H.setAttribute("position",new Ni(O,T)),H.setAttribute("uv",new Ni(L,S)),H.setAttribute("faceIndex",new Ni(C,v)),t.push(H),l>yr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function u0(r,t,i){const s=new Rs(r,t,i);return s.texture.mapping=kc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Rc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function mb(r,t,i){const s=new Float32Array(Ms),l=new j(0,1,0);return new ja({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function f0(){return new ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function h0(){return new ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function Bd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gb(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Xh||m===Wh,g=m===Rr||m===wr;if(p||g){let _=t.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new c0(r)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new c0(r)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function _b(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Tr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function vb(r,t,i,s){const l={},c=new WeakMap;function h(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",h),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const M in x)t.update(x[M],r.ARRAY_BUFFER)}function p(_){const x=[],M=_.index,E=_.attributes.position;let T=0;if(M!==null){const O=M.array;T=M.version;for(let L=0,C=O.length;L<C;L+=3){const H=O[L+0],B=O[L+1],P=O[L+2];x.push(H,B,B,P,P,H)}}else if(E!==void 0){const O=E.array;T=E.version;for(let L=0,C=O.length/3-1;L<C;L+=3){const H=L+0,B=L+1,P=L+2;x.push(H,B,B,P,P,H)}}else return;const S=new(K0(x)?nv:ev)(x,1);S.version=T;const v=c.get(_);v&&t.remove(v),c.set(_,S)}function g(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function xb(r,t,i){let s;function l(x){s=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,M){r.drawElements(s,M,c,x*h),i.update(M,s,1)}function p(x,M,E){E!==0&&(r.drawElementsInstanced(s,M,c,x*h,E),i.update(M,s,E))}function g(x,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,x,0,E);let S=0;for(let v=0;v<E;v++)S+=M[v];i.update(S,s,1)}function _(x,M,E,T){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)p(x[v]/h,M[v],T[v]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,c,x,0,T,0,E);let v=0;for(let O=0;O<E;O++)v+=M[O]*T[O];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function Sb(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function yb(r,t,i){const s=new WeakMap,l=new Je;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==_){let w=function(){W.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var M=w;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let C=0;E===!0&&(C=1),T===!0&&(C=2),S===!0&&(C=3);let H=d.attributes.position.count*C,B=1;H>t.maxTextureSize&&(B=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const P=new Float32Array(H*B*4*_),W=new Q0(P,H,B,_);W.type=la,W.needsUpdate=!0;const D=C*4;for(let F=0;F<_;F++){const et=v[F],at=O[F],ut=L[F],ct=H*B*4*F;for(let z=0;z<et.count;z++){const K=z*D;E===!0&&(l.fromBufferAttribute(et,z),P[ct+K+0]=l.x,P[ct+K+1]=l.y,P[ct+K+2]=l.z,P[ct+K+3]=0),T===!0&&(l.fromBufferAttribute(at,z),P[ct+K+4]=l.x,P[ct+K+5]=l.y,P[ct+K+6]=l.z,P[ct+K+7]=0),S===!0&&(l.fromBufferAttribute(ut,z),P[ct+K+8]=l.x,P[ct+K+9]=l.y,P[ct+K+10]=l.z,P[ct+K+11]=ut.itemSize===4?l.w:1)}}x={count:_,texture:W,size:new re(H,B)},s.set(d,x),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const T=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function Mb(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const fv=new Xn,d0=new ov(1,1),hv=new Q0,dv=new Xy,pv=new sv,p0=[],m0=[],g0=new Float32Array(16),_0=new Float32Array(9),v0=new Float32Array(4);function Ur(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=p0[l];if(c===void 0&&(c=new Float32Array(l),p0[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function hn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function dn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Wc(r,t){let i=m0[t];i===void 0&&(i=new Int32Array(t),m0[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function Eb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function Tb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;r.uniform2fv(this.addr,t),dn(i,t)}}function bb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;r.uniform3fv(this.addr,t),dn(i,t)}}function Ab(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;r.uniform4fv(this.addr,t),dn(i,t)}}function Rb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,s))return;v0.set(s),r.uniformMatrix2fv(this.addr,!1,v0),dn(i,s)}}function wb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,s))return;_0.set(s),r.uniformMatrix3fv(this.addr,!1,_0),dn(i,s)}}function Cb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(hn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,s))return;g0.set(s),r.uniformMatrix4fv(this.addr,!1,g0),dn(i,s)}}function Db(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function Ub(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;r.uniform2iv(this.addr,t),dn(i,t)}}function Lb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;r.uniform3iv(this.addr,t),dn(i,t)}}function Nb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;r.uniform4iv(this.addr,t),dn(i,t)}}function Ob(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function Pb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;r.uniform2uiv(this.addr,t),dn(i,t)}}function zb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;r.uniform3uiv(this.addr,t),dn(i,t)}}function Ib(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;r.uniform4uiv(this.addr,t),dn(i,t)}}function Bb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(d0.compareFunction=Z0,c=d0):c=fv,i.setTexture2D(t||c,l)}function Fb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||dv,l)}function Hb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||pv,l)}function Gb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||hv,l)}function Vb(r){switch(r){case 5126:return Eb;case 35664:return Tb;case 35665:return bb;case 35666:return Ab;case 35674:return Rb;case 35675:return wb;case 35676:return Cb;case 5124:case 35670:return Db;case 35667:case 35671:return Ub;case 35668:case 35672:return Lb;case 35669:case 35673:return Nb;case 5125:return Ob;case 36294:return Pb;case 36295:return zb;case 36296:return Ib;case 35678:case 36198:case 36298:case 36306:case 35682:return Bb;case 35679:case 36299:case 36307:return Fb;case 35680:case 36300:case 36308:case 36293:return Hb;case 36289:case 36303:case 36311:case 36292:return Gb}}function kb(r,t){r.uniform1fv(this.addr,t)}function Xb(r,t){const i=Ur(t,this.size,2);r.uniform2fv(this.addr,i)}function Wb(r,t){const i=Ur(t,this.size,3);r.uniform3fv(this.addr,i)}function qb(r,t){const i=Ur(t,this.size,4);r.uniform4fv(this.addr,i)}function Yb(r,t){const i=Ur(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function jb(r,t){const i=Ur(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function Zb(r,t){const i=Ur(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function Kb(r,t){r.uniform1iv(this.addr,t)}function Qb(r,t){r.uniform2iv(this.addr,t)}function Jb(r,t){r.uniform3iv(this.addr,t)}function $b(r,t){r.uniform4iv(this.addr,t)}function tA(r,t){r.uniform1uiv(this.addr,t)}function eA(r,t){r.uniform2uiv(this.addr,t)}function nA(r,t){r.uniform3uiv(this.addr,t)}function iA(r,t){r.uniform4uiv(this.addr,t)}function aA(r,t,i){const s=this.cache,l=t.length,c=Wc(i,l);hn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||fv,c[h])}function sA(r,t,i){const s=this.cache,l=t.length,c=Wc(i,l);hn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||dv,c[h])}function rA(r,t,i){const s=this.cache,l=t.length,c=Wc(i,l);hn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||pv,c[h])}function oA(r,t,i){const s=this.cache,l=t.length,c=Wc(i,l);hn(s,c)||(r.uniform1iv(this.addr,c),dn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||hv,c[h])}function lA(r){switch(r){case 5126:return kb;case 35664:return Xb;case 35665:return Wb;case 35666:return qb;case 35674:return Yb;case 35675:return jb;case 35676:return Zb;case 5124:case 35670:return Kb;case 35667:case 35671:return Qb;case 35668:case 35672:return Jb;case 35669:case 35673:return $b;case 5125:return tA;case 36294:return eA;case 36295:return nA;case 36296:return iA;case 35678:case 36198:case 36298:case 36306:case 35682:return aA;case 35679:case 36299:case 36307:return sA;case 35680:case 36300:case 36308:case 36293:return rA;case 36289:case 36303:case 36311:case 36292:return oA}}class cA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Vb(i.type)}}class uA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=lA(i.type)}}class fA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Lh=/(\w+)(\])?(\[|\.)?/g;function x0(r,t){r.seq.push(t),r.map[t.id]=t}function hA(r,t,i){const s=r.name,l=s.length;for(Lh.lastIndex=0;;){const c=Lh.exec(s),h=Lh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){x0(i,p===void 0?new cA(d,r,t):new uA(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new fA(d),x0(i,_)),i=_}}}class Ic{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);hA(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function S0(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const dA=37297;let pA=0;function mA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const y0=new le;function gA(r){Re._getMatrix(y0,Re.workingColorSpace,r);const t=`mat3( ${y0.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(r)){case Bc:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function M0(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+mA(r.getShaderSource(t),h)}else return l}function _A(r,t){const i=gA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function vA(r,t){let i;switch(t){case my:i="Linear";break;case gy:i="Reinhard";break;case _y:i="Cineon";break;case vy:i="ACESFilmic";break;case Sy:i="AgX";break;case yy:i="Neutral";break;case xy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const wc=new j;function xA(){Re.getLuminanceCoefficients(wc);const r=wc.x.toFixed(4),t=wc.y.toFixed(4),i=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function yA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function MA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function Po(r){return r!==""}function E0(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function T0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const EA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Md(r){return r.replace(EA,bA)}const TA=new Map;function bA(r,t){let i=ce[t];if(i===void 0){const s=TA.get(t);if(s!==void 0)i=ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Md(i)}const AA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function b0(r){return r.replace(AA,RA)}function RA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function A0(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===F0?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===jS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===oa&&(t="SHADOWMAP_TYPE_VSM"),t}function CA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Rr:case wr:t="ENVMAP_TYPE_CUBE";break;case kc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function DA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case wr:t="ENVMAP_MODE_REFRACTION";break}return t}function UA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ad:t="ENVMAP_BLENDING_MULTIPLY";break;case dy:t="ENVMAP_BLENDING_MIX";break;case py:t="ENVMAP_BLENDING_ADD";break}return t}function LA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function NA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=wA(i),p=CA(i),g=DA(i),_=UA(i),x=LA(i),M=SA(i),E=yA(c),T=l.createProgram();let S,v,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Po).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Po).join(`
`),v.length>0&&(v+=`
`)):(S=[A0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),v=[A0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?ce.tonemapping_pars_fragment:"",i.toneMapping!==qa?vA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,_A("linearToOutputTexel",i.outputColorSpace),xA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Po).join(`
`)),h=Md(h),h=E0(h,i),h=T0(h,i),d=Md(d),d=E0(d,i),d=T0(d,i),h=b0(h),d=b0(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===C_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===C_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=O+S+h,C=O+v+d,H=S0(l,l.VERTEX_SHADER,L),B=S0(l,l.FRAGMENT_SHADER,C);l.attachShader(T,H),l.attachShader(T,B),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function P(F){if(r.debug.checkShaderErrors){const et=l.getProgramInfoLog(T).trim(),at=l.getShaderInfoLog(H).trim(),ut=l.getShaderInfoLog(B).trim();let ct=!0,z=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(ct=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,H,B);else{const K=M0(l,H,"vertex"),X=M0(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+et+`
`+K+`
`+X)}else et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",et):(at===""||ut==="")&&(z=!1);z&&(F.diagnostics={runnable:ct,programLog:et,vertexShader:{log:at,prefix:S},fragmentShader:{log:ut,prefix:v}})}l.deleteShader(H),l.deleteShader(B),W=new Ic(l,T),D=MA(l,T)}let W;this.getUniforms=function(){return W===void 0&&P(this),W};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(T,dA)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=pA++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=H,this.fragmentShader=B,this}let OA=0;class PA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new zA(t),i.set(t,s)),s}}class zA{constructor(t){this.id=OA++,this.code=t,this.usedTimes=0}}function IA(r,t,i,s,l,c,h){const d=new J0,m=new PA,p=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return p.add(D),D===0?"uv":`uv${D}`}function S(D,w,F,et,at){const ut=et.fog,ct=at.geometry,z=D.isMeshStandardMaterial?et.environment:null,K=(D.isMeshStandardMaterial?i:t).get(D.envMap||z),X=K&&K.mapping===kc?K.image.height:null,pt=E[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const U=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,J=U!==void 0?U.length:0;let gt=0;ct.morphAttributes.position!==void 0&&(gt=1),ct.morphAttributes.normal!==void 0&&(gt=2),ct.morphAttributes.color!==void 0&&(gt=3);let yt,Q,ft,Mt;if(pt){const be=Di[pt];yt=be.vertexShader,Q=be.fragmentShader}else yt=D.vertexShader,Q=D.fragmentShader,m.update(D),ft=m.getVertexShaderID(D),Mt=m.getFragmentShaderID(D);const wt=r.getRenderTarget(),St=r.state.buffers.depth.getReversed(),Kt=at.isInstancedMesh===!0,Wt=at.isBatchedMesh===!0,we=!!D.map,Oe=!!D.matcap,ve=!!K,G=!!D.aoMap,Mn=!!D.lightMap,Ee=!!D.bumpMap,pe=!!D.normalMap,Vt=!!D.displacementMap,xe=!!D.emissiveMap,Zt=!!D.metalnessMap,se=!!D.roughnessMap,$e=D.anisotropy>0,N=D.clearcoat>0,b=D.dispersion>0,nt=D.iridescence>0,dt=D.sheen>0,_t=D.transmission>0,lt=$e&&!!D.anisotropyMap,Pt=N&&!!D.clearcoatMap,Ut=N&&!!D.clearcoatNormalMap,Gt=N&&!!D.clearcoatRoughnessMap,kt=nt&&!!D.iridescenceMap,Et=nt&&!!D.iridescenceThicknessMap,zt=dt&&!!D.sheenColorMap,Yt=dt&&!!D.sheenRoughnessMap,jt=!!D.specularMap,Ct=!!D.specularColorMap,ae=!!D.specularIntensityMap,k=_t&&!!D.transmissionMap,Lt=_t&&!!D.thicknessMap,Tt=!!D.gradientMap,It=!!D.alphaMap,At=D.alphaTest>0,xt=!!D.alphaHash,Ft=!!D.extensions;let ie=qa;D.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(ie=r.toneMapping);const Ue={shaderID:pt,shaderType:D.type,shaderName:D.name,vertexShader:yt,fragmentShader:Q,defines:D.defines,customVertexShaderID:ft,customFragmentShaderID:Mt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Wt,batchingColor:Wt&&at._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&at.instanceColor!==null,instancingMorph:Kt&&at.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:wt===null?r.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:Cr,alphaToCoverage:!!D.alphaToCoverage,map:we,matcap:Oe,envMap:ve,envMapMode:ve&&K.mapping,envMapCubeUVHeight:X,aoMap:G,lightMap:Mn,bumpMap:Ee,normalMap:pe,displacementMap:x&&Vt,emissiveMap:xe,normalMapObjectSpace:pe&&D.normalMapType===by,normalMapTangentSpace:pe&&D.normalMapType===Nd,metalnessMap:Zt,roughnessMap:se,anisotropy:$e,anisotropyMap:lt,clearcoat:N,clearcoatMap:Pt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Gt,dispersion:b,iridescence:nt,iridescenceMap:kt,iridescenceThicknessMap:Et,sheen:dt,sheenColorMap:zt,sheenRoughnessMap:Yt,specularMap:jt,specularColorMap:Ct,specularIntensityMap:ae,transmission:_t,transmissionMap:k,thicknessMap:Lt,gradientMap:Tt,opaque:D.transparent===!1&&D.blending===Er&&D.alphaToCoverage===!1,alphaMap:It,alphaTest:At,alphaHash:xt,combine:D.combine,mapUv:we&&T(D.map.channel),aoMapUv:G&&T(D.aoMap.channel),lightMapUv:Mn&&T(D.lightMap.channel),bumpMapUv:Ee&&T(D.bumpMap.channel),normalMapUv:pe&&T(D.normalMap.channel),displacementMapUv:Vt&&T(D.displacementMap.channel),emissiveMapUv:xe&&T(D.emissiveMap.channel),metalnessMapUv:Zt&&T(D.metalnessMap.channel),roughnessMapUv:se&&T(D.roughnessMap.channel),anisotropyMapUv:lt&&T(D.anisotropyMap.channel),clearcoatMapUv:Pt&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&T(D.sheenRoughnessMap.channel),specularMapUv:jt&&T(D.specularMap.channel),specularColorMapUv:Ct&&T(D.specularColorMap.channel),specularIntensityMapUv:ae&&T(D.specularIntensityMap.channel),transmissionMapUv:k&&T(D.transmissionMap.channel),thicknessMapUv:Lt&&T(D.thicknessMap.channel),alphaMapUv:It&&T(D.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(pe||$e),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ct.attributes.uv&&(we||It),fog:!!ut,useFog:D.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:St,skinning:at.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:gt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:ie,decodeVideoTexture:we&&D.map.isVideoTexture===!0&&Re.getTransfer(D.map.colorSpace)===Be,decodeVideoTextureEmissive:xe&&D.emissiveMap.isVideoTexture===!0&&Re.getTransfer(D.emissiveMap.colorSpace)===Be,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ui,flipSided:D.side===kn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ft&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&D.extensions.multiDraw===!0||Wt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ue.vertexUv1s=p.has(1),Ue.vertexUv2s=p.has(2),Ue.vertexUv3s=p.has(3),p.clear(),Ue}function v(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const F in D.defines)w.push(F),w.push(D.defines[F]);return D.isRawShaderMaterial===!1&&(O(w,D),L(w,D),w.push(r.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function O(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function L(D,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reverseDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),D.push(d.mask)}function C(D){const w=E[D.type];let F;if(w){const et=Di[w];F=iM.clone(et.uniforms)}else F=D.uniforms;return F}function H(D,w){let F;for(let et=0,at=g.length;et<at;et++){const ut=g[et];if(ut.cacheKey===w){F=ut,++F.usedTimes;break}}return F===void 0&&(F=new NA(r,w,D,c),g.push(F)),F}function B(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function P(D){m.remove(D)}function W(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:C,acquireProgram:H,releaseProgram:B,releaseShaderCache:P,programs:g,dispose:W}}function BA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function FA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function R0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function w0(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(_,x,M,E,T,S){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:M,groupOrder:E,renderOrder:_.renderOrder,z:T,group:S},r[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=M,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=T,v.group=S),t++,v}function d(_,x,M,E,T,S){const v=h(_,x,M,E,T,S);M.transmission>0?s.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(_,x,M,E,T,S){const v=h(_,x,M,E,T,S);M.transmission>0?s.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,x){i.length>1&&i.sort(_||FA),s.length>1&&s.sort(x||R0),l.length>1&&l.sort(x||R0)}function g(){for(let _=t,x=r.length;_<x;_++){const M=r[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function HA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new w0,r.set(s,[h])):l>=c.length?(h=new w0,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function GA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new j,color:new de};break;case"SpotLight":i={position:new j,direction:new j,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new de,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new de,groundColor:new de};break;case"RectAreaLight":i={color:new de,position:new j,halfWidth:new j,halfHeight:new j};break}return r[t.id]=i,i}}}function VA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let kA=0;function XA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function WA(r){const t=new GA,i=VA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new j);const l=new j,c=new Ye,h=new Ye;function d(p){let g=0,_=0,x=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,E=0,T=0,S=0,v=0,O=0,L=0,C=0,H=0,B=0,P=0;p.sort(XA);for(let D=0,w=p.length;D<w;D++){const F=p[D],et=F.color,at=F.intensity,ut=F.distance,ct=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=et.r*at,_+=et.g*at,x+=et.b*at;else if(F.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(F.sh.coefficients[z],at);P++}else if(F.isDirectionalLight){const z=t.get(F);if(z.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const K=F.shadow,X=i.get(F);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,s.directionalShadow[M]=X,s.directionalShadowMap[M]=ct,s.directionalShadowMatrix[M]=F.shadow.matrix,O++}s.directional[M]=z,M++}else if(F.isSpotLight){const z=t.get(F);z.position.setFromMatrixPosition(F.matrixWorld),z.color.copy(et).multiplyScalar(at),z.distance=ut,z.coneCos=Math.cos(F.angle),z.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),z.decay=F.decay,s.spot[T]=z;const K=F.shadow;if(F.map&&(s.spotLightMap[H]=F.map,H++,K.updateMatrices(F),F.castShadow&&B++),s.spotLightMatrix[T]=K.matrix,F.castShadow){const X=i.get(F);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,s.spotShadow[T]=X,s.spotShadowMap[T]=ct,C++}T++}else if(F.isRectAreaLight){const z=t.get(F);z.color.copy(et).multiplyScalar(at),z.halfWidth.set(F.width*.5,0,0),z.halfHeight.set(0,F.height*.5,0),s.rectArea[S]=z,S++}else if(F.isPointLight){const z=t.get(F);if(z.color.copy(F.color).multiplyScalar(F.intensity),z.distance=F.distance,z.decay=F.decay,F.castShadow){const K=F.shadow,X=i.get(F);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,X.shadowCameraNear=K.camera.near,X.shadowCameraFar=K.camera.far,s.pointShadow[E]=X,s.pointShadowMap[E]=ct,s.pointShadowMatrix[E]=F.shadow.matrix,L++}s.point[E]=z,E++}else if(F.isHemisphereLight){const z=t.get(F);z.skyColor.copy(F.color).multiplyScalar(at),z.groundColor.copy(F.groundColor).multiplyScalar(at),s.hemi[v]=z,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const W=s.hash;(W.directionalLength!==M||W.pointLength!==E||W.spotLength!==T||W.rectAreaLength!==S||W.hemiLength!==v||W.numDirectionalShadows!==O||W.numPointShadows!==L||W.numSpotShadows!==C||W.numSpotMaps!==H||W.numLightProbes!==P)&&(s.directional.length=M,s.spot.length=T,s.rectArea.length=S,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=O,s.directionalShadowMap.length=O,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=O,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=C+H-B,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=P,W.directionalLength=M,W.pointLength=E,W.spotLength=T,W.rectAreaLength=S,W.hemiLength=v,W.numDirectionalShadows=O,W.numPointShadows=L,W.numSpotShadows=C,W.numSpotMaps=H,W.numLightProbes=P,s.version=kA++)}function m(p,g){let _=0,x=0,M=0,E=0,T=0;const S=g.matrixWorldInverse;for(let v=0,O=p.length;v<O;v++){const L=p[v];if(L.isDirectionalLight){const C=s.directional[_];C.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(S),_++}else if(L.isSpotLight){const C=s.spot[M];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const C=s.rectArea[E];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),h.identity(),c.copy(L.matrixWorld),c.premultiply(S),h.extractRotation(c),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(h),C.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const C=s.point[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const C=s.hemi[T];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(S),T++}}}return{setup:d,setupView:m,state:s}}function C0(r){const t=new WA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function qA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new C0(r),t.set(l,[d])):c>=h.length?(d=new C0(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const YA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ZA(r,t,i){let s=new Pd;const l=new re,c=new re,h=new Je,d=new dM({depthPacking:Ty}),m=new pM,p={},g=i.maxTextureSize,_={[Ya]:kn,[kn]:Ya,[Ui]:Ui},x=new ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:YA,fragmentShader:jA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new ii;E.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ni(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=F0;let v=this.type;this.render=function(B,P,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;const D=r.getRenderTarget(),w=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),et=r.state;et.setBlending(Wa),et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const at=v!==oa&&this.type===oa,ut=v===oa&&this.type!==oa;for(let ct=0,z=B.length;ct<z;ct++){const K=B[ct],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const pt=X.getFrameExtents();if(l.multiply(pt),c.copy(X.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/pt.x),l.x=c.x*pt.x,X.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/pt.y),l.y=c.y*pt.y,X.mapSize.y=c.y)),X.map===null||at===!0||ut===!0){const J=this.type!==oa?{minFilter:Mi,magFilter:Mi}:{};X.map!==null&&X.map.dispose(),X.map=new Rs(l.x,l.y,J),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const U=X.getViewportCount();for(let J=0;J<U;J++){const gt=X.getViewport(J);h.set(c.x*gt.x,c.y*gt.y,c.x*gt.z,c.y*gt.w),et.viewport(h),X.updateMatrices(K,J),s=X.getFrustum(),C(P,W,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===oa&&O(X,W),X.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(D,w,F)};function O(B,P){const W=t.update(T);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Rs(l.x,l.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(P,null,W,x,T,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(P,null,W,M,T,null)}function L(B,P,W,D){let w=null;const F=W.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(F!==void 0)w=F;else if(w=W.isPointLight===!0?m:d,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const et=w.uuid,at=P.uuid;let ut=p[et];ut===void 0&&(ut={},p[et]=ut);let ct=ut[at];ct===void 0&&(ct=w.clone(),ut[at]=ct,P.addEventListener("dispose",H)),w=ct}if(w.visible=P.visible,w.wireframe=P.wireframe,D===oa?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:_[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,W.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const et=r.properties.get(w);et.light=W}return w}function C(B,P,W,D,w){if(B.visible===!1)return;if(B.layers.test(P.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===oa)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,B.matrixWorld);const at=t.update(B),ut=B.material;if(Array.isArray(ut)){const ct=at.groups;for(let z=0,K=ct.length;z<K;z++){const X=ct[z],pt=ut[X.materialIndex];if(pt&&pt.visible){const U=L(B,pt,D,w);B.onBeforeShadow(r,B,P,W,at,U,X),r.renderBufferDirect(W,null,at,U,B,X),B.onAfterShadow(r,B,P,W,at,U,X)}}}else if(ut.visible){const ct=L(B,ut,D,w);B.onBeforeShadow(r,B,P,W,at,ct,null),r.renderBufferDirect(W,null,at,ct,B,null),B.onAfterShadow(r,B,P,W,at,ct,null)}}const et=B.children;for(let at=0,ut=et.length;at<ut;at++)C(et[at],P,W,D,w)}function H(B){B.target.removeEventListener("dispose",H);for(const W in p){const D=p[W],w=B.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const KA={[Ih]:Bh,[Fh]:Vh,[Hh]:kh,[Ar]:Gh,[Bh]:Ih,[Vh]:Fh,[kh]:Hh,[Gh]:Ar};function QA(r,t){function i(){let k=!1;const Lt=new Je;let Tt=null;const It=new Je(0,0,0,0);return{setMask:function(At){Tt!==At&&!k&&(r.colorMask(At,At,At,At),Tt=At)},setLocked:function(At){k=At},setClear:function(At,xt,Ft,ie,Ue){Ue===!0&&(At*=ie,xt*=ie,Ft*=ie),Lt.set(At,xt,Ft,ie),It.equals(Lt)===!1&&(r.clearColor(At,xt,Ft,ie),It.copy(Lt))},reset:function(){k=!1,Tt=null,It.set(-1,0,0,0)}}}function s(){let k=!1,Lt=!1,Tt=null,It=null,At=null;return{setReversed:function(xt){if(Lt!==xt){const Ft=t.get("EXT_clip_control");xt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Lt=xt;const ie=At;At=null,this.setClear(ie)}},getReversed:function(){return Lt},setTest:function(xt){xt?wt(r.DEPTH_TEST):St(r.DEPTH_TEST)},setMask:function(xt){Tt!==xt&&!k&&(r.depthMask(xt),Tt=xt)},setFunc:function(xt){if(Lt&&(xt=KA[xt]),It!==xt){switch(xt){case Ih:r.depthFunc(r.NEVER);break;case Bh:r.depthFunc(r.ALWAYS);break;case Fh:r.depthFunc(r.LESS);break;case Ar:r.depthFunc(r.LEQUAL);break;case Hh:r.depthFunc(r.EQUAL);break;case Gh:r.depthFunc(r.GEQUAL);break;case Vh:r.depthFunc(r.GREATER);break;case kh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}It=xt}},setLocked:function(xt){k=xt},setClear:function(xt){At!==xt&&(Lt&&(xt=1-xt),r.clearDepth(xt),At=xt)},reset:function(){k=!1,Tt=null,It=null,At=null,Lt=!1}}}function l(){let k=!1,Lt=null,Tt=null,It=null,At=null,xt=null,Ft=null,ie=null,Ue=null;return{setTest:function(be){k||(be?wt(r.STENCIL_TEST):St(r.STENCIL_TEST))},setMask:function(be){Lt!==be&&!k&&(r.stencilMask(be),Lt=be)},setFunc:function(be,Wn,pn){(Tt!==be||It!==Wn||At!==pn)&&(r.stencilFunc(be,Wn,pn),Tt=be,It=Wn,At=pn)},setOp:function(be,Wn,pn){(xt!==be||Ft!==Wn||ie!==pn)&&(r.stencilOp(be,Wn,pn),xt=be,Ft=Wn,ie=pn)},setLocked:function(be){k=be},setClear:function(be){Ue!==be&&(r.clearStencil(be),Ue=be)},reset:function(){k=!1,Lt=null,Tt=null,It=null,At=null,xt=null,Ft=null,ie=null,Ue=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,M=[],E=null,T=!1,S=null,v=null,O=null,L=null,C=null,H=null,B=null,P=new de(0,0,0),W=0,D=!1,w=null,F=null,et=null,at=null,ut=null;const ct=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=K>=2);let pt=null,U={};const J=r.getParameter(r.SCISSOR_BOX),gt=r.getParameter(r.VIEWPORT),yt=new Je().fromArray(J),Q=new Je().fromArray(gt);function ft(k,Lt,Tt,It){const At=new Uint8Array(4),xt=r.createTexture();r.bindTexture(k,xt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ft=0;Ft<Tt;Ft++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Lt,0,r.RGBA,1,1,It,0,r.RGBA,r.UNSIGNED_BYTE,At):r.texImage2D(Lt+Ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,At);return xt}const Mt={};Mt[r.TEXTURE_2D]=ft(r.TEXTURE_2D,r.TEXTURE_2D,1),Mt[r.TEXTURE_CUBE_MAP]=ft(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[r.TEXTURE_2D_ARRAY]=ft(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Mt[r.TEXTURE_3D]=ft(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),wt(r.DEPTH_TEST),h.setFunc(Ar),Ee(!1),pe(E_),wt(r.CULL_FACE),G(Wa);function wt(k){g[k]!==!0&&(r.enable(k),g[k]=!0)}function St(k){g[k]!==!1&&(r.disable(k),g[k]=!1)}function Kt(k,Lt){return _[k]!==Lt?(r.bindFramebuffer(k,Lt),_[k]=Lt,k===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Lt),k===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Wt(k,Lt){let Tt=M,It=!1;if(k){Tt=x.get(Lt),Tt===void 0&&(Tt=[],x.set(Lt,Tt));const At=k.textures;if(Tt.length!==At.length||Tt[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,Ft=At.length;xt<Ft;xt++)Tt[xt]=r.COLOR_ATTACHMENT0+xt;Tt.length=At.length,It=!0}}else Tt[0]!==r.BACK&&(Tt[0]=r.BACK,It=!0);It&&r.drawBuffers(Tt)}function we(k){return E!==k?(r.useProgram(k),E=k,!0):!1}const Oe={[ys]:r.FUNC_ADD,[KS]:r.FUNC_SUBTRACT,[QS]:r.FUNC_REVERSE_SUBTRACT};Oe[JS]=r.MIN,Oe[$S]=r.MAX;const ve={[ty]:r.ZERO,[ey]:r.ONE,[ny]:r.SRC_COLOR,[Ph]:r.SRC_ALPHA,[ly]:r.SRC_ALPHA_SATURATE,[ry]:r.DST_COLOR,[ay]:r.DST_ALPHA,[iy]:r.ONE_MINUS_SRC_COLOR,[zh]:r.ONE_MINUS_SRC_ALPHA,[oy]:r.ONE_MINUS_DST_COLOR,[sy]:r.ONE_MINUS_DST_ALPHA,[cy]:r.CONSTANT_COLOR,[uy]:r.ONE_MINUS_CONSTANT_COLOR,[fy]:r.CONSTANT_ALPHA,[hy]:r.ONE_MINUS_CONSTANT_ALPHA};function G(k,Lt,Tt,It,At,xt,Ft,ie,Ue,be){if(k===Wa){T===!0&&(St(r.BLEND),T=!1);return}if(T===!1&&(wt(r.BLEND),T=!0),k!==ZS){if(k!==S||be!==D){if((v!==ys||C!==ys)&&(r.blendEquation(r.FUNC_ADD),v=ys,C=ys),be)switch(k){case Er:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case T_:r.blendFunc(r.ONE,r.ONE);break;case b_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case A_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Er:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case T_:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case b_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case A_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}O=null,L=null,H=null,B=null,P.set(0,0,0),W=0,S=k,D=be}return}At=At||Lt,xt=xt||Tt,Ft=Ft||It,(Lt!==v||At!==C)&&(r.blendEquationSeparate(Oe[Lt],Oe[At]),v=Lt,C=At),(Tt!==O||It!==L||xt!==H||Ft!==B)&&(r.blendFuncSeparate(ve[Tt],ve[It],ve[xt],ve[Ft]),O=Tt,L=It,H=xt,B=Ft),(ie.equals(P)===!1||Ue!==W)&&(r.blendColor(ie.r,ie.g,ie.b,Ue),P.copy(ie),W=Ue),S=k,D=!1}function Mn(k,Lt){k.side===Ui?St(r.CULL_FACE):wt(r.CULL_FACE);let Tt=k.side===kn;Lt&&(Tt=!Tt),Ee(Tt),k.blending===Er&&k.transparent===!1?G(Wa):G(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const It=k.stencilWrite;d.setTest(It),It&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),xe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?wt(r.SAMPLE_ALPHA_TO_COVERAGE):St(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(k){w!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),w=k)}function pe(k){k!==qS?(wt(r.CULL_FACE),k!==F&&(k===E_?r.cullFace(r.BACK):k===YS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):St(r.CULL_FACE),F=k}function Vt(k){k!==et&&(z&&r.lineWidth(k),et=k)}function xe(k,Lt,Tt){k?(wt(r.POLYGON_OFFSET_FILL),(at!==Lt||ut!==Tt)&&(r.polygonOffset(Lt,Tt),at=Lt,ut=Tt)):St(r.POLYGON_OFFSET_FILL)}function Zt(k){k?wt(r.SCISSOR_TEST):St(r.SCISSOR_TEST)}function se(k){k===void 0&&(k=r.TEXTURE0+ct-1),pt!==k&&(r.activeTexture(k),pt=k)}function $e(k,Lt,Tt){Tt===void 0&&(pt===null?Tt=r.TEXTURE0+ct-1:Tt=pt);let It=U[Tt];It===void 0&&(It={type:void 0,texture:void 0},U[Tt]=It),(It.type!==k||It.texture!==Lt)&&(pt!==Tt&&(r.activeTexture(Tt),pt=Tt),r.bindTexture(k,Lt||Mt[k]),It.type=k,It.texture=Lt)}function N(){const k=U[pt];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{r.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{r.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{r.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{r.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{r.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(){try{r.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(){try{r.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(){try{r.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{r.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(k){yt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),yt.copy(k))}function Yt(k){Q.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Q.copy(k))}function jt(k,Lt){let Tt=p.get(Lt);Tt===void 0&&(Tt=new WeakMap,p.set(Lt,Tt));let It=Tt.get(k);It===void 0&&(It=r.getUniformBlockIndex(Lt,k.name),Tt.set(k,It))}function Ct(k,Lt){const It=p.get(Lt).get(k);m.get(Lt)!==It&&(r.uniformBlockBinding(Lt,It,k.__bindingPointIndex),m.set(Lt,It))}function ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},pt=null,U={},_={},x=new WeakMap,M=[],E=null,T=!1,S=null,v=null,O=null,L=null,C=null,H=null,B=null,P=new de(0,0,0),W=0,D=!1,w=null,F=null,et=null,at=null,ut=null,yt.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:wt,disable:St,bindFramebuffer:Kt,drawBuffers:Wt,useProgram:we,setBlending:G,setMaterial:Mn,setFlipSided:Ee,setCullFace:pe,setLineWidth:Vt,setPolygonOffset:xe,setScissorTest:Zt,activeTexture:se,bindTexture:$e,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:nt,texImage2D:kt,texImage3D:Et,updateUBOMapping:jt,uniformBlockBinding:Ct,texStorage2D:Ut,texStorage3D:Gt,texSubImage2D:dt,texSubImage3D:_t,compressedTexSubImage2D:lt,compressedTexSubImage3D:Pt,scissor:zt,viewport:Yt,reset:ae}}function JA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new re,g=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return M?new OffscreenCanvas(N,b):Hc("canvas")}function T(N,b,nt){let dt=1;const _t=$e(N);if((_t.width>nt||_t.height>nt)&&(dt=nt/Math.max(_t.width,_t.height)),dt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const lt=Math.floor(dt*_t.width),Pt=Math.floor(dt*_t.height);_===void 0&&(_=E(lt,Pt));const Ut=b?E(lt,Pt):_;return Ut.width=lt,Ut.height=Pt,Ut.getContext("2d").drawImage(N,0,0,lt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+lt+"x"+Pt+")."),Ut}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),N;return N}function S(N){return N.generateMipmaps}function v(N){r.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(N,b,nt,dt,_t=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let lt=b;if(b===r.RED&&(nt===r.FLOAT&&(lt=r.R32F),nt===r.HALF_FLOAT&&(lt=r.R16F),nt===r.UNSIGNED_BYTE&&(lt=r.R8)),b===r.RED_INTEGER&&(nt===r.UNSIGNED_BYTE&&(lt=r.R8UI),nt===r.UNSIGNED_SHORT&&(lt=r.R16UI),nt===r.UNSIGNED_INT&&(lt=r.R32UI),nt===r.BYTE&&(lt=r.R8I),nt===r.SHORT&&(lt=r.R16I),nt===r.INT&&(lt=r.R32I)),b===r.RG&&(nt===r.FLOAT&&(lt=r.RG32F),nt===r.HALF_FLOAT&&(lt=r.RG16F),nt===r.UNSIGNED_BYTE&&(lt=r.RG8)),b===r.RG_INTEGER&&(nt===r.UNSIGNED_BYTE&&(lt=r.RG8UI),nt===r.UNSIGNED_SHORT&&(lt=r.RG16UI),nt===r.UNSIGNED_INT&&(lt=r.RG32UI),nt===r.BYTE&&(lt=r.RG8I),nt===r.SHORT&&(lt=r.RG16I),nt===r.INT&&(lt=r.RG32I)),b===r.RGB_INTEGER&&(nt===r.UNSIGNED_BYTE&&(lt=r.RGB8UI),nt===r.UNSIGNED_SHORT&&(lt=r.RGB16UI),nt===r.UNSIGNED_INT&&(lt=r.RGB32UI),nt===r.BYTE&&(lt=r.RGB8I),nt===r.SHORT&&(lt=r.RGB16I),nt===r.INT&&(lt=r.RGB32I)),b===r.RGBA_INTEGER&&(nt===r.UNSIGNED_BYTE&&(lt=r.RGBA8UI),nt===r.UNSIGNED_SHORT&&(lt=r.RGBA16UI),nt===r.UNSIGNED_INT&&(lt=r.RGBA32UI),nt===r.BYTE&&(lt=r.RGBA8I),nt===r.SHORT&&(lt=r.RGBA16I),nt===r.INT&&(lt=r.RGBA32I)),b===r.RGB&&nt===r.UNSIGNED_INT_5_9_9_9_REV&&(lt=r.RGB9_E5),b===r.RGBA){const Pt=_t?Bc:Re.getTransfer(dt);nt===r.FLOAT&&(lt=r.RGBA32F),nt===r.HALF_FLOAT&&(lt=r.RGBA16F),nt===r.UNSIGNED_BYTE&&(lt=Pt===Be?r.SRGB8_ALPHA8:r.RGBA8),nt===r.UNSIGNED_SHORT_4_4_4_4&&(lt=r.RGBA4),nt===r.UNSIGNED_SHORT_5_5_5_1&&(lt=r.RGB5_A1)}return(lt===r.R16F||lt===r.R32F||lt===r.RG16F||lt===r.RG32F||lt===r.RGBA16F||lt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function C(N,b){let nt;return N?b===null||b===bs||b===Bo?nt=r.DEPTH24_STENCIL8:b===la?nt=r.DEPTH32F_STENCIL8:b===Io&&(nt=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===bs||b===Bo?nt=r.DEPTH_COMPONENT24:b===la?nt=r.DEPTH_COMPONENT32F:b===Io&&(nt=r.DEPTH_COMPONENT16),nt}function H(N,b){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Mi&&N.minFilter!==Li?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function B(N){const b=N.target;b.removeEventListener("dispose",B),W(b),b.isVideoTexture&&g.delete(b)}function P(N){const b=N.target;b.removeEventListener("dispose",P),w(b)}function W(N){const b=s.get(N);if(b.__webglInit===void 0)return;const nt=N.source,dt=x.get(nt);if(dt){const _t=dt[b.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&D(N),Object.keys(dt).length===0&&x.delete(nt)}s.remove(N)}function D(N){const b=s.get(N);r.deleteTexture(b.__webglTexture);const nt=N.source,dt=x.get(nt);delete dt[b.__cacheKey],h.memory.textures--}function w(N){const b=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(b.__webglFramebuffer[dt]))for(let _t=0;_t<b.__webglFramebuffer[dt].length;_t++)r.deleteFramebuffer(b.__webglFramebuffer[dt][_t]);else r.deleteFramebuffer(b.__webglFramebuffer[dt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[dt])}else{if(Array.isArray(b.__webglFramebuffer))for(let dt=0;dt<b.__webglFramebuffer.length;dt++)r.deleteFramebuffer(b.__webglFramebuffer[dt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let dt=0;dt<b.__webglColorRenderbuffer.length;dt++)b.__webglColorRenderbuffer[dt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[dt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const nt=N.textures;for(let dt=0,_t=nt.length;dt<_t;dt++){const lt=s.get(nt[dt]);lt.__webglTexture&&(r.deleteTexture(lt.__webglTexture),h.memory.textures--),s.remove(nt[dt])}s.remove(N)}let F=0;function et(){F=0}function at(){const N=F;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),F+=1,N}function ut(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function ct(N,b){const nt=s.get(N);if(N.isVideoTexture&&Zt(N),N.isRenderTargetTexture===!1&&N.version>0&&nt.__version!==N.version){const dt=N.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(nt,N,b);return}}i.bindTexture(r.TEXTURE_2D,nt.__webglTexture,r.TEXTURE0+b)}function z(N,b){const nt=s.get(N);if(N.version>0&&nt.__version!==N.version){Mt(nt,N,b);return}i.bindTexture(r.TEXTURE_2D_ARRAY,nt.__webglTexture,r.TEXTURE0+b)}function K(N,b){const nt=s.get(N);if(N.version>0&&nt.__version!==N.version){Mt(nt,N,b);return}i.bindTexture(r.TEXTURE_3D,nt.__webglTexture,r.TEXTURE0+b)}function X(N,b){const nt=s.get(N);if(N.version>0&&nt.__version!==N.version){wt(nt,N,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture,r.TEXTURE0+b)}const pt={[qh]:r.REPEAT,[Es]:r.CLAMP_TO_EDGE,[Yh]:r.MIRRORED_REPEAT},U={[Mi]:r.NEAREST,[My]:r.NEAREST_MIPMAP_NEAREST,[ac]:r.NEAREST_MIPMAP_LINEAR,[Li]:r.LINEAR,[th]:r.LINEAR_MIPMAP_NEAREST,[Ts]:r.LINEAR_MIPMAP_LINEAR},J={[Ay]:r.NEVER,[Ly]:r.ALWAYS,[Ry]:r.LESS,[Z0]:r.LEQUAL,[wy]:r.EQUAL,[Uy]:r.GEQUAL,[Cy]:r.GREATER,[Dy]:r.NOTEQUAL};function gt(N,b){if(b.type===la&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Li||b.magFilter===th||b.magFilter===ac||b.magFilter===Ts||b.minFilter===Li||b.minFilter===th||b.minFilter===ac||b.minFilter===Ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,pt[b.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,pt[b.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,pt[b.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,U[b.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,U[b.minFilter]),b.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,J[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Mi||b.minFilter!==ac&&b.minFilter!==Ts||b.type===la&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function yt(N,b){let nt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",B));const dt=b.source;let _t=x.get(dt);_t===void 0&&(_t={},x.set(dt,_t));const lt=ut(b);if(lt!==N.__cacheKey){_t[lt]===void 0&&(_t[lt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,nt=!0),_t[lt].usedTimes++;const Pt=_t[N.__cacheKey];Pt!==void 0&&(_t[N.__cacheKey].usedTimes--,Pt.usedTimes===0&&D(b)),N.__cacheKey=lt,N.__webglTexture=_t[lt].texture}return nt}function Q(N,b,nt){return Math.floor(Math.floor(N/nt)/b)}function ft(N,b,nt,dt){const lt=N.updateRanges;if(lt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,nt,dt,b.data);else{lt.sort((Et,zt)=>Et.start-zt.start);let Pt=0;for(let Et=1;Et<lt.length;Et++){const zt=lt[Pt],Yt=lt[Et],jt=zt.start+zt.count,Ct=Q(Yt.start,b.width,4),ae=Q(zt.start,b.width,4);Yt.start<=jt+1&&Ct===ae&&Q(Yt.start+Yt.count-1,b.width,4)===Ct?zt.count=Math.max(zt.count,Yt.start+Yt.count-zt.start):(++Pt,lt[Pt]=Yt)}lt.length=Pt+1;const Ut=r.getParameter(r.UNPACK_ROW_LENGTH),Gt=r.getParameter(r.UNPACK_SKIP_PIXELS),kt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Et=0,zt=lt.length;Et<zt;Et++){const Yt=lt[Et],jt=Math.floor(Yt.start/4),Ct=Math.ceil(Yt.count/4),ae=jt%b.width,k=Math.floor(jt/b.width),Lt=Ct,Tt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ae),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,ae,k,Lt,Tt,nt,dt,b.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ut),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Gt),r.pixelStorei(r.UNPACK_SKIP_ROWS,kt)}}function Mt(N,b,nt){let dt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(dt=r.TEXTURE_3D);const _t=yt(N,b),lt=b.source;i.bindTexture(dt,N.__webglTexture,r.TEXTURE0+nt);const Pt=s.get(lt);if(lt.version!==Pt.__version||_t===!0){i.activeTexture(r.TEXTURE0+nt);const Ut=Re.getPrimaries(Re.workingColorSpace),Gt=b.colorSpace===Xa?null:Re.getPrimaries(b.colorSpace),kt=b.colorSpace===Xa||Ut===Gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let Et=T(b.image,!1,l.maxTextureSize);Et=se(b,Et);const zt=c.convert(b.format,b.colorSpace),Yt=c.convert(b.type);let jt=L(b.internalFormat,zt,Yt,b.colorSpace,b.isVideoTexture);gt(dt,b);let Ct;const ae=b.mipmaps,k=b.isVideoTexture!==!0,Lt=Pt.__version===void 0||_t===!0,Tt=lt.dataReady,It=H(b,Et);if(b.isDepthTexture)jt=C(b.format===Ho,b.type),Lt&&(k?i.texStorage2D(r.TEXTURE_2D,1,jt,Et.width,Et.height):i.texImage2D(r.TEXTURE_2D,0,jt,Et.width,Et.height,0,zt,Yt,null));else if(b.isDataTexture)if(ae.length>0){k&&Lt&&i.texStorage2D(r.TEXTURE_2D,It,jt,ae[0].width,ae[0].height);for(let At=0,xt=ae.length;At<xt;At++)Ct=ae[At],k?Tt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,Ct.width,Ct.height,zt,Yt,Ct.data):i.texImage2D(r.TEXTURE_2D,At,jt,Ct.width,Ct.height,0,zt,Yt,Ct.data);b.generateMipmaps=!1}else k?(Lt&&i.texStorage2D(r.TEXTURE_2D,It,jt,Et.width,Et.height),Tt&&ft(b,Et,zt,Yt)):i.texImage2D(r.TEXTURE_2D,0,jt,Et.width,Et.height,0,zt,Yt,Et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){k&&Lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,It,jt,ae[0].width,ae[0].height,Et.depth);for(let At=0,xt=ae.length;At<xt;At++)if(Ct=ae[At],b.format!==yi)if(zt!==null)if(k){if(Tt)if(b.layerUpdates.size>0){const Ft=s0(Ct.width,Ct.height,b.format,b.type);for(const ie of b.layerUpdates){const Ue=Ct.data.subarray(ie*Ft/Ct.data.BYTES_PER_ELEMENT,(ie+1)*Ft/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,ie,Ct.width,Ct.height,1,zt,Ue)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Ct.width,Ct.height,Et.depth,zt,Ct.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,At,jt,Ct.width,Ct.height,Et.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Tt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Ct.width,Ct.height,Et.depth,zt,Yt,Ct.data):i.texImage3D(r.TEXTURE_2D_ARRAY,At,jt,Ct.width,Ct.height,Et.depth,0,zt,Yt,Ct.data)}else{k&&Lt&&i.texStorage2D(r.TEXTURE_2D,It,jt,ae[0].width,ae[0].height);for(let At=0,xt=ae.length;At<xt;At++)Ct=ae[At],b.format!==yi?zt!==null?k?Tt&&i.compressedTexSubImage2D(r.TEXTURE_2D,At,0,0,Ct.width,Ct.height,zt,Ct.data):i.compressedTexImage2D(r.TEXTURE_2D,At,jt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Tt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,Ct.width,Ct.height,zt,Yt,Ct.data):i.texImage2D(r.TEXTURE_2D,At,jt,Ct.width,Ct.height,0,zt,Yt,Ct.data)}else if(b.isDataArrayTexture)if(k){if(Lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,It,jt,Et.width,Et.height,Et.depth),Tt)if(b.layerUpdates.size>0){const At=s0(Et.width,Et.height,b.format,b.type);for(const xt of b.layerUpdates){const Ft=Et.data.subarray(xt*At/Et.data.BYTES_PER_ELEMENT,(xt+1)*At/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,Et.width,Et.height,1,zt,Yt,Ft)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,zt,Yt,Et.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,jt,Et.width,Et.height,Et.depth,0,zt,Yt,Et.data);else if(b.isData3DTexture)k?(Lt&&i.texStorage3D(r.TEXTURE_3D,It,jt,Et.width,Et.height,Et.depth),Tt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,zt,Yt,Et.data)):i.texImage3D(r.TEXTURE_3D,0,jt,Et.width,Et.height,Et.depth,0,zt,Yt,Et.data);else if(b.isFramebufferTexture){if(Lt)if(k)i.texStorage2D(r.TEXTURE_2D,It,jt,Et.width,Et.height);else{let At=Et.width,xt=Et.height;for(let Ft=0;Ft<It;Ft++)i.texImage2D(r.TEXTURE_2D,Ft,jt,At,xt,0,zt,Yt,null),At>>=1,xt>>=1}}else if(ae.length>0){if(k&&Lt){const At=$e(ae[0]);i.texStorage2D(r.TEXTURE_2D,It,jt,At.width,At.height)}for(let At=0,xt=ae.length;At<xt;At++)Ct=ae[At],k?Tt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,zt,Yt,Ct):i.texImage2D(r.TEXTURE_2D,At,jt,zt,Yt,Ct);b.generateMipmaps=!1}else if(k){if(Lt){const At=$e(Et);i.texStorage2D(r.TEXTURE_2D,It,jt,At.width,At.height)}Tt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,zt,Yt,Et)}else i.texImage2D(r.TEXTURE_2D,0,jt,zt,Yt,Et);S(b)&&v(dt),Pt.__version=lt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function wt(N,b,nt){if(b.image.length!==6)return;const dt=yt(N,b),_t=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+nt);const lt=s.get(_t);if(_t.version!==lt.__version||dt===!0){i.activeTexture(r.TEXTURE0+nt);const Pt=Re.getPrimaries(Re.workingColorSpace),Ut=b.colorSpace===Xa?null:Re.getPrimaries(b.colorSpace),Gt=b.colorSpace===Xa||Pt===Ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const kt=b.isCompressedTexture||b.image[0].isCompressedTexture,Et=b.image[0]&&b.image[0].isDataTexture,zt=[];for(let xt=0;xt<6;xt++)!kt&&!Et?zt[xt]=T(b.image[xt],!0,l.maxCubemapSize):zt[xt]=Et?b.image[xt].image:b.image[xt],zt[xt]=se(b,zt[xt]);const Yt=zt[0],jt=c.convert(b.format,b.colorSpace),Ct=c.convert(b.type),ae=L(b.internalFormat,jt,Ct,b.colorSpace),k=b.isVideoTexture!==!0,Lt=lt.__version===void 0||dt===!0,Tt=_t.dataReady;let It=H(b,Yt);gt(r.TEXTURE_CUBE_MAP,b);let At;if(kt){k&&Lt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,It,ae,Yt.width,Yt.height);for(let xt=0;xt<6;xt++){At=zt[xt].mipmaps;for(let Ft=0;Ft<At.length;Ft++){const ie=At[Ft];b.format!==yi?jt!==null?k?Tt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft,0,0,ie.width,ie.height,jt,ie.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft,ae,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft,0,0,ie.width,ie.height,jt,Ct,ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft,ae,ie.width,ie.height,0,jt,Ct,ie.data)}}}else{if(At=b.mipmaps,k&&Lt){At.length>0&&It++;const xt=$e(zt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,It,ae,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Et){k?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,zt[xt].width,zt[xt].height,jt,Ct,zt[xt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ae,zt[xt].width,zt[xt].height,0,jt,Ct,zt[xt].data);for(let Ft=0;Ft<At.length;Ft++){const Ue=At[Ft].image[xt].image;k?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft+1,0,0,Ue.width,Ue.height,jt,Ct,Ue.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft+1,ae,Ue.width,Ue.height,0,jt,Ct,Ue.data)}}else{k?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,jt,Ct,zt[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ae,jt,Ct,zt[xt]);for(let Ft=0;Ft<At.length;Ft++){const ie=At[Ft];k?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft+1,0,0,jt,Ct,ie.image[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ft+1,ae,jt,Ct,ie.image[xt])}}}S(b)&&v(r.TEXTURE_CUBE_MAP),lt.__version=_t.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function St(N,b,nt,dt,_t,lt){const Pt=c.convert(nt.format,nt.colorSpace),Ut=c.convert(nt.type),Gt=L(nt.internalFormat,Pt,Ut,nt.colorSpace),kt=s.get(b),Et=s.get(nt);if(Et.__renderTarget=b,!kt.__hasExternalTextures){const zt=Math.max(1,b.width>>lt),Yt=Math.max(1,b.height>>lt);_t===r.TEXTURE_3D||_t===r.TEXTURE_2D_ARRAY?i.texImage3D(_t,lt,Gt,zt,Yt,b.depth,0,Pt,Ut,null):i.texImage2D(_t,lt,Gt,zt,Yt,0,Pt,Ut,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),xe(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,_t,Et.__webglTexture,0,Vt(b)):(_t===r.TEXTURE_2D||_t>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,dt,_t,Et.__webglTexture,lt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Kt(N,b,nt){if(r.bindRenderbuffer(r.RENDERBUFFER,N),b.depthBuffer){const dt=b.depthTexture,_t=dt&&dt.isDepthTexture?dt.type:null,lt=C(b.stencilBuffer,_t),Pt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=Vt(b);xe(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ut,lt,b.width,b.height):nt?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,lt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,lt,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pt,r.RENDERBUFFER,N)}else{const dt=b.textures;for(let _t=0;_t<dt.length;_t++){const lt=dt[_t],Pt=c.convert(lt.format,lt.colorSpace),Ut=c.convert(lt.type),Gt=L(lt.internalFormat,Pt,Ut,lt.colorSpace),kt=Vt(b);nt&&xe(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,kt,Gt,b.width,b.height):xe(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,kt,Gt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Gt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Wt(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(b.depthTexture);dt.__renderTarget=b,(!dt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ct(b.depthTexture,0);const _t=dt.__webglTexture,lt=Vt(b);if(b.depthTexture.format===Fo)xe(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_t,0,lt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_t,0);else if(b.depthTexture.format===Ho)xe(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_t,0,lt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function we(N){const b=s.get(N),nt=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const dt=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),dt){const _t=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,dt.removeEventListener("dispose",_t)};dt.addEventListener("dispose",_t),b.__depthDisposeCallback=_t}b.__boundDepthTexture=dt}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const dt=N.texture.mipmaps;dt&&dt.length>0?Wt(b.__webglFramebuffer[0],N):Wt(b.__webglFramebuffer,N)}else if(nt){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]===void 0)b.__webglDepthbuffer[dt]=r.createRenderbuffer(),Kt(b.__webglDepthbuffer[dt],N,!1);else{const _t=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer[dt];r.bindRenderbuffer(r.RENDERBUFFER,lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,_t,r.RENDERBUFFER,lt)}}else{const dt=N.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Kt(b.__webglDepthbuffer,N,!1);else{const _t=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,_t,r.RENDERBUFFER,lt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Oe(N,b,nt){const dt=s.get(N);b!==void 0&&St(dt.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),nt!==void 0&&we(N)}function ve(N){const b=N.texture,nt=s.get(N),dt=s.get(b);N.addEventListener("dispose",P);const _t=N.textures,lt=N.isWebGLCubeRenderTarget===!0,Pt=_t.length>1;if(Pt||(dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture()),dt.__version=b.version,h.memory.textures++),lt){nt.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer[Ut]=[];for(let Gt=0;Gt<b.mipmaps.length;Gt++)nt.__webglFramebuffer[Ut][Gt]=r.createFramebuffer()}else nt.__webglFramebuffer[Ut]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Ut=0;Ut<b.mipmaps.length;Ut++)nt.__webglFramebuffer[Ut]=r.createFramebuffer()}else nt.__webglFramebuffer=r.createFramebuffer();if(Pt)for(let Ut=0,Gt=_t.length;Ut<Gt;Ut++){const kt=s.get(_t[Ut]);kt.__webglTexture===void 0&&(kt.__webglTexture=r.createTexture(),h.memory.textures++)}if(N.samples>0&&xe(N)===!1){nt.__webglMultisampledFramebuffer=r.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Ut=0;Ut<_t.length;Ut++){const Gt=_t[Ut];nt.__webglColorRenderbuffer[Ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,nt.__webglColorRenderbuffer[Ut]);const kt=c.convert(Gt.format,Gt.colorSpace),Et=c.convert(Gt.type),zt=L(Gt.internalFormat,kt,Et,Gt.colorSpace,N.isXRRenderTarget===!0),Yt=Vt(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,zt,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,nt.__webglColorRenderbuffer[Ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(nt.__webglDepthRenderbuffer=r.createRenderbuffer(),Kt(nt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(lt){i.bindTexture(r.TEXTURE_CUBE_MAP,dt.__webglTexture),gt(r.TEXTURE_CUBE_MAP,b);for(let Ut=0;Ut<6;Ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let Gt=0;Gt<b.mipmaps.length;Gt++)St(nt.__webglFramebuffer[Ut][Gt],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Gt);else St(nt.__webglFramebuffer[Ut],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);S(b)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let Ut=0,Gt=_t.length;Ut<Gt;Ut++){const kt=_t[Ut],Et=s.get(kt);i.bindTexture(r.TEXTURE_2D,Et.__webglTexture),gt(r.TEXTURE_2D,kt),St(nt.__webglFramebuffer,N,kt,r.COLOR_ATTACHMENT0+Ut,r.TEXTURE_2D,0),S(kt)&&v(r.TEXTURE_2D)}i.unbindTexture()}else{let Ut=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ut=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ut,dt.__webglTexture),gt(Ut,b),b.mipmaps&&b.mipmaps.length>0)for(let Gt=0;Gt<b.mipmaps.length;Gt++)St(nt.__webglFramebuffer[Gt],N,b,r.COLOR_ATTACHMENT0,Ut,Gt);else St(nt.__webglFramebuffer,N,b,r.COLOR_ATTACHMENT0,Ut,0);S(b)&&v(Ut),i.unbindTexture()}N.depthBuffer&&we(N)}function G(N){const b=N.textures;for(let nt=0,dt=b.length;nt<dt;nt++){const _t=b[nt];if(S(_t)){const lt=O(N),Pt=s.get(_t).__webglTexture;i.bindTexture(lt,Pt),v(lt),i.unbindTexture()}}}const Mn=[],Ee=[];function pe(N){if(N.samples>0){if(xe(N)===!1){const b=N.textures,nt=N.width,dt=N.height;let _t=r.COLOR_BUFFER_BIT;const lt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pt=s.get(N),Ut=b.length>1;if(Ut)for(let kt=0;kt<b.length;kt++)i.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Gt=N.texture.mipmaps;Gt&&Gt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let kt=0;kt<b.length;kt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(_t|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(_t|=r.STENCIL_BUFFER_BIT)),Ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pt.__webglColorRenderbuffer[kt]);const Et=s.get(b[kt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Et,0)}r.blitFramebuffer(0,0,nt,dt,0,0,nt,dt,_t,r.NEAREST),m===!0&&(Mn.length=0,Ee.length=0,Mn.push(r.COLOR_ATTACHMENT0+kt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Mn.push(lt),Ee.push(lt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ee)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Mn))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ut)for(let kt=0;kt<b.length;kt++){i.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.RENDERBUFFER,Pt.__webglColorRenderbuffer[kt]);const Et=s.get(b[kt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.TEXTURE_2D,Et,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Vt(N){return Math.min(l.maxSamples,N.samples)}function xe(N){const b=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Zt(N){const b=h.render.frame;g.get(N)!==b&&(g.set(N,b),N.update())}function se(N,b){const nt=N.colorSpace,dt=N.format,_t=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||nt!==Cr&&nt!==Xa&&(Re.getTransfer(nt)===Be?(dt!==yi||_t!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),b}function $e(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=et,this.setTexture2D=ct,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=X,this.rebindTextures=Oe,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=St,this.useMultisampledRTT=xe}function $A(r,t){function i(s,l=Xa){let c;const h=Re.getTransfer(l);if(s===Oi)return r.UNSIGNED_BYTE;if(s===wd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Cd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===k0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===G0)return r.BYTE;if(s===V0)return r.SHORT;if(s===Io)return r.UNSIGNED_SHORT;if(s===Rd)return r.INT;if(s===bs)return r.UNSIGNED_INT;if(s===la)return r.FLOAT;if(s===Go)return r.HALF_FLOAT;if(s===X0)return r.ALPHA;if(s===W0)return r.RGB;if(s===yi)return r.RGBA;if(s===Fo)return r.DEPTH_COMPONENT;if(s===Ho)return r.DEPTH_STENCIL;if(s===q0)return r.RED;if(s===Dd)return r.RED_INTEGER;if(s===Y0)return r.RG;if(s===Ud)return r.RG_INTEGER;if(s===Ld)return r.RGBA_INTEGER;if(s===Uc||s===Lc||s===Nc||s===Oc)if(h===Be)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Uc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Nc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Uc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Nc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Oc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jh||s===Zh||s===Kh||s===Qh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===jh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Jh||s===$h||s===td)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Jh||s===$h)return h===Be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===td)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ed||s===nd||s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===ed)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===nd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===id)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ad)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===od)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ld)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===cd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ud)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===hd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===dd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Pc||s===md||s===gd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Pc)return h===Be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===md)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===gd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===j0||s===_d||s===vd||s===xd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Pc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===_d)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Bo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const t1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class n1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Xn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ja({vertexShader:t1,fragmentShader:e1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ni(new qo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i1 extends ws{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,x=null,M=null,E=null;const T=new n1,S=i.getContextAttributes();let v=null,O=null;const L=[],C=[],H=new re;let B=null;const P=new di;P.viewport=new Je;const W=new di;W.viewport=new Je;const D=[P,W],w=new EM;let F=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ft=L[Q];return ft===void 0&&(ft=new Mh,L[Q]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Q){let ft=L[Q];return ft===void 0&&(ft=new Mh,L[Q]=ft),ft.getGripSpace()},this.getHand=function(Q){let ft=L[Q];return ft===void 0&&(ft=new Mh,L[Q]=ft),ft.getHandSpace()};function at(Q){const ft=C.indexOf(Q.inputSource);if(ft===-1)return;const Mt=L[ft];Mt!==void 0&&(Mt.update(Q.inputSource,Q.frame,p||h),Mt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ut(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",ut),l.removeEventListener("inputsourceschange",ct);for(let Q=0;Q<L.length;Q++){const ft=C[Q];ft!==null&&(C[Q]=null,L[Q].disconnect(ft))}F=null,et=null,T.reset(),t.setRenderTarget(v),M=null,x=null,_=null,l=null,O=null,yt.stop(),s.isPresenting=!1,t.setPixelRatio(B),t.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(v=t.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",ut),l.addEventListener("inputsourceschange",ct),S.xrCompatible!==!0&&await i.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,wt=null,St=null;S.depth&&(St=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=S.stencil?Ho:Fo,wt=S.stencil?Bo:bs);const Kt={colorFormat:i.RGBA8,depthFormat:St,scaleFactor:c};_=new XRWebGLBinding(l,i),x=_.createProjectionLayer(Kt),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),O=new Rs(x.textureWidth,x.textureHeight,{format:yi,type:Oi,depthTexture:new ov(x.textureWidth,x.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Rs(M.framebufferWidth,M.framebufferHeight,{format:yi,type:Oi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),yt.setContext(l),yt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ct(Q){for(let ft=0;ft<Q.removed.length;ft++){const Mt=Q.removed[ft],wt=C.indexOf(Mt);wt>=0&&(C[wt]=null,L[wt].disconnect(Mt))}for(let ft=0;ft<Q.added.length;ft++){const Mt=Q.added[ft];let wt=C.indexOf(Mt);if(wt===-1){for(let Kt=0;Kt<L.length;Kt++)if(Kt>=C.length){C.push(Mt),wt=Kt;break}else if(C[Kt]===null){C[Kt]=Mt,wt=Kt;break}if(wt===-1)break}const St=L[wt];St&&St.connect(Mt)}}const z=new j,K=new j;function X(Q,ft,Mt){z.setFromMatrixPosition(ft.matrixWorld),K.setFromMatrixPosition(Mt.matrixWorld);const wt=z.distanceTo(K),St=ft.projectionMatrix.elements,Kt=Mt.projectionMatrix.elements,Wt=St[14]/(St[10]-1),we=St[14]/(St[10]+1),Oe=(St[9]+1)/St[5],ve=(St[9]-1)/St[5],G=(St[8]-1)/St[0],Mn=(Kt[8]+1)/Kt[0],Ee=Wt*G,pe=Wt*Mn,Vt=wt/(-G+Mn),xe=Vt*-G;if(ft.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(xe),Q.translateZ(Vt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),St[10]===-1)Q.projectionMatrix.copy(ft.projectionMatrix),Q.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Zt=Wt+Vt,se=we+Vt,$e=Ee-xe,N=pe+(wt-xe),b=Oe*we/se*Zt,nt=ve*we/se*Zt;Q.projectionMatrix.makePerspective($e,N,b,nt,Zt,se),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function pt(Q,ft){ft===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ft.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let ft=Q.near,Mt=Q.far;T.texture!==null&&(T.depthNear>0&&(ft=T.depthNear),T.depthFar>0&&(Mt=T.depthFar)),w.near=W.near=P.near=ft,w.far=W.far=P.far=Mt,(F!==w.near||et!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),F=w.near,et=w.far),P.layers.mask=Q.layers.mask|2,W.layers.mask=Q.layers.mask|4,w.layers.mask=P.layers.mask|W.layers.mask;const wt=Q.parent,St=w.cameras;pt(w,wt);for(let Kt=0;Kt<St.length;Kt++)pt(St[Kt],wt);St.length===2?X(w,P,W):w.projectionMatrix.copy(P.projectionMatrix),U(Q,w,wt)};function U(Q,ft,Mt){Mt===null?Q.matrix.copy(ft.matrixWorld):(Q.matrix.copy(Mt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ft.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ft.projectionMatrix),Q.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Sd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(w)};let J=null;function gt(Q,ft){if(g=ft.getViewerPose(p||h),E=ft,g!==null){const Mt=g.views;M!==null&&(t.setRenderTargetFramebuffer(O,M.framebuffer),t.setRenderTarget(O));let wt=!1;Mt.length!==w.cameras.length&&(w.cameras.length=0,wt=!0);for(let Wt=0;Wt<Mt.length;Wt++){const we=Mt[Wt];let Oe=null;if(M!==null)Oe=M.getViewport(we);else{const G=_.getViewSubImage(x,we);Oe=G.viewport,Wt===0&&(t.setRenderTargetTextures(O,G.colorTexture,G.depthStencilTexture),t.setRenderTarget(O))}let ve=D[Wt];ve===void 0&&(ve=new di,ve.layers.enable(Wt),ve.viewport=new Je,D[Wt]=ve),ve.matrix.fromArray(we.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(we.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Wt===0&&(w.matrix.copy(ve.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),wt===!0&&w.cameras.push(ve)}const St=l.enabledFeatures;if(St&&St.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Wt=_.getDepthInformation(Mt[0]);Wt&&Wt.isValid&&Wt.texture&&T.init(t,Wt,l.renderState)}}for(let Mt=0;Mt<L.length;Mt++){const wt=C[Mt],St=L[Mt];wt!==null&&St!==void 0&&St.update(wt,ft,p||h)}J&&J(Q,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),E=null}const yt=new uv;yt.setAnimationLoop(gt),this.setAnimationLoop=function(Q){J=Q},this.dispose=function(){}}}const xs=new Ei,a1=new Ye;function s1(r,t){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,iv(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,O,L,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),_(S,v)):v.isMeshPhongMaterial?(c(S,v),g(S,v)):v.isMeshStandardMaterial?(c(S,v),x(S,v),v.isMeshPhysicalMaterial&&M(S,v,C)):v.isMeshMatcapMaterial?(c(S,v),E(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),T(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(h(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?m(S,v,O,L):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===kn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===kn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const O=t.get(v),L=O.envMap,C=O.envMapRotation;L&&(S.envMap.value=L,xs.copy(C),xs.x*=-1,xs.y*=-1,xs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),S.envMapRotation.value.setFromMatrix4(a1.makeRotationFromEuler(xs)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function h(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,O,L){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*O,S.scale.value=L*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function M(S,v,O){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===kn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function T(S,v){const O=t.get(v).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function r1(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,L){const C=L.program;s.uniformBlockBinding(O,C)}function p(O,L){let C=l[O.id];C===void 0&&(E(O),C=g(O),l[O.id]=C,O.addEventListener("dispose",S));const H=L.program;s.updateUBOMapping(O,H);const B=t.render.frame;c[O.id]!==B&&(x(O),c[O.id]=B)}function g(O){const L=_();O.__bindingPointIndex=L;const C=r.createBuffer(),H=O.__size,B=O.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,H,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,C),C}function _(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const L=l[O.id],C=O.uniforms,H=O.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let B=0,P=C.length;B<P;B++){const W=Array.isArray(C[B])?C[B]:[C[B]];for(let D=0,w=W.length;D<w;D++){const F=W[D];if(M(F,B,D,H)===!0){const et=F.__offset,at=Array.isArray(F.value)?F.value:[F.value];let ut=0;for(let ct=0;ct<at.length;ct++){const z=at[ct],K=T(z);typeof z=="number"||typeof z=="boolean"?(F.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,et+ut,F.__data)):z.isMatrix3?(F.__data[0]=z.elements[0],F.__data[1]=z.elements[1],F.__data[2]=z.elements[2],F.__data[3]=0,F.__data[4]=z.elements[3],F.__data[5]=z.elements[4],F.__data[6]=z.elements[5],F.__data[7]=0,F.__data[8]=z.elements[6],F.__data[9]=z.elements[7],F.__data[10]=z.elements[8],F.__data[11]=0):(z.toArray(F.__data,ut),ut+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,et,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(O,L,C,H){const B=O.value,P=L+"_"+C;if(H[P]===void 0)return typeof B=="number"||typeof B=="boolean"?H[P]=B:H[P]=B.clone(),!0;{const W=H[P];if(typeof B=="number"||typeof B=="boolean"){if(W!==B)return H[P]=B,!0}else if(W.equals(B)===!1)return W.copy(B),!0}return!1}function E(O){const L=O.uniforms;let C=0;const H=16;for(let P=0,W=L.length;P<W;P++){const D=Array.isArray(L[P])?L[P]:[L[P]];for(let w=0,F=D.length;w<F;w++){const et=D[w],at=Array.isArray(et.value)?et.value:[et.value];for(let ut=0,ct=at.length;ut<ct;ut++){const z=at[ut],K=T(z),X=C%H,pt=X%K.boundary,U=X+pt;C+=pt,U!==0&&H-U<K.storage&&(C+=H-U),et.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=C,C+=K.storage}}}const B=C%H;return B>0&&(C+=H-B),O.__size=C,O.__cache={},this}function T(O){const L={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(L.boundary=4,L.storage=4):O.isVector2?(L.boundary=8,L.storage=8):O.isVector3||O.isColor?(L.boundary=16,L.storage=12):O.isVector4?(L.boundary=16,L.storage=16):O.isMatrix3?(L.boundary=48,L.storage=48):O.isMatrix4?(L.boundary=64,L.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),L}function S(O){const L=O.target;L.removeEventListener("dispose",S);const C=h.indexOf(L.__bindingPointIndex);h.splice(C,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function v(){for(const O in l)r.deleteBuffer(l[O]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}class o1{constructor(t={}){const{canvas:i=Py(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),T=new Int32Array(4);let S=null,v=null;const O=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let H=!1;this._outputColorSpace=ei;let B=0,P=0,W=null,D=-1,w=null;const F=new Je,et=new Je;let at=null;const ut=new de(0);let ct=0,z=i.width,K=i.height,X=1,pt=null,U=null;const J=new Je(0,0,z,K),gt=new Je(0,0,z,K);let yt=!1;const Q=new Pd;let ft=!1,Mt=!1;const wt=new Ye,St=new Ye,Kt=new j,Wt=new Je,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function ve(){return W===null?X:1}let G=s;function Mn(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${bd}`),i.addEventListener("webglcontextlost",It,!1),i.addEventListener("webglcontextrestored",At,!1),i.addEventListener("webglcontextcreationerror",xt,!1),G===null){const Y="webgl2";if(G=Mn(Y,R),G===null)throw Mn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ee,pe,Vt,xe,Zt,se,$e,N,b,nt,dt,_t,lt,Pt,Ut,Gt,kt,Et,zt,Yt,jt,Ct,ae,k;function Lt(){Ee=new _b(G),Ee.init(),Ct=new $A(G,Ee),pe=new ub(G,Ee,t,Ct),Vt=new QA(G,Ee),pe.reverseDepthBuffer&&x&&Vt.buffers.depth.setReversed(!0),xe=new Sb(G),Zt=new BA,se=new JA(G,Ee,Vt,Zt,pe,Ct,xe),$e=new hb(C),N=new gb(C),b=new AM(G),ae=new lb(G,b),nt=new vb(G,b,xe,ae),dt=new Mb(G,nt,b,xe),zt=new yb(G,pe,se),Gt=new fb(Zt),_t=new IA(C,$e,N,Ee,pe,ae,Gt),lt=new s1(C,Zt),Pt=new HA,Ut=new qA(Ee),Et=new ob(C,$e,N,Vt,dt,M,m),kt=new ZA(C,dt,pe),k=new r1(G,xe,pe,Vt),Yt=new cb(G,Ee,xe),jt=new xb(G,Ee,xe),xe.programs=_t.programs,C.capabilities=pe,C.extensions=Ee,C.properties=Zt,C.renderLists=Pt,C.shadowMap=kt,C.state=Vt,C.info=xe}Lt();const Tt=new i1(C,G);this.xr=Tt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=Ee.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ee.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(R){R!==void 0&&(X=R,this.setSize(z,K,!1))},this.getSize=function(R){return R.set(z,K)},this.setSize=function(R,Y,rt=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,K=Y,i.width=Math.floor(R*X),i.height=Math.floor(Y*X),rt===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(z*X,K*X).floor()},this.setDrawingBufferSize=function(R,Y,rt){z=R,K=Y,X=rt,i.width=Math.floor(R*rt),i.height=Math.floor(Y*rt),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(J)},this.setViewport=function(R,Y,rt,ot){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,Y,rt,ot),Vt.viewport(F.copy(J).multiplyScalar(X).round())},this.getScissor=function(R){return R.copy(gt)},this.setScissor=function(R,Y,rt,ot){R.isVector4?gt.set(R.x,R.y,R.z,R.w):gt.set(R,Y,rt,ot),Vt.scissor(et.copy(gt).multiplyScalar(X).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(R){Vt.setScissorTest(yt=R)},this.setOpaqueSort=function(R){pt=R},this.setTransparentSort=function(R){U=R},this.getClearColor=function(R){return R.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,rt=!0){let ot=0;if(R){let Z=!1;if(W!==null){const bt=W.texture.format;Z=bt===Ld||bt===Ud||bt===Dd}if(Z){const bt=W.texture.type,Dt=bt===Oi||bt===bs||bt===Io||bt===Bo||bt===wd||bt===Cd,Ot=Et.getClearColor(),Bt=Et.getClearAlpha(),te=Ot.r,Qt=Ot.g,Xt=Ot.b;Dt?(E[0]=te,E[1]=Qt,E[2]=Xt,E[3]=Bt,G.clearBufferuiv(G.COLOR,0,E)):(T[0]=te,T[1]=Qt,T[2]=Xt,T[3]=Bt,G.clearBufferiv(G.COLOR,0,T))}else ot|=G.COLOR_BUFFER_BIT}Y&&(ot|=G.DEPTH_BUFFER_BIT),rt&&(ot|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",It,!1),i.removeEventListener("webglcontextrestored",At,!1),i.removeEventListener("webglcontextcreationerror",xt,!1),Et.dispose(),Pt.dispose(),Ut.dispose(),Zt.dispose(),$e.dispose(),N.dispose(),dt.dispose(),ae.dispose(),k.dispose(),_t.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",on),Tt.removeEventListener("sessionend",En),zn.stop()};function It(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=xe.autoReset,Y=kt.enabled,rt=kt.autoUpdate,ot=kt.needsUpdate,Z=kt.type;Lt(),xe.autoReset=R,kt.enabled=Y,kt.autoUpdate=rt,kt.needsUpdate=ot,kt.type=Z}function xt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ft(R){const Y=R.target;Y.removeEventListener("dispose",Ft),ie(Y)}function ie(R){Ue(R),Zt.remove(R)}function Ue(R){const Y=Zt.get(R).programs;Y!==void 0&&(Y.forEach(function(rt){_t.releaseProgram(rt)}),R.isShaderMaterial&&_t.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,rt,ot,Z,bt){Y===null&&(Y=we);const Dt=Z.isMesh&&Z.matrixWorld.determinant()<0,Ot=Qa(R,Y,rt,ot,Z);Vt.setMaterial(ot,Dt);let Bt=rt.index,te=1;if(ot.wireframe===!0){if(Bt=nt.getWireframeAttribute(rt),Bt===void 0)return;te=2}const Qt=rt.drawRange,Xt=rt.attributes.position;let ue=Qt.start*te,Ce=(Qt.start+Qt.count)*te;bt!==null&&(ue=Math.max(ue,bt.start*te),Ce=Math.min(Ce,(bt.start+bt.count)*te)),Bt!==null?(ue=Math.max(ue,0),Ce=Math.min(Ce,Bt.count)):Xt!=null&&(ue=Math.max(ue,0),Ce=Math.min(Ce,Xt.count));const ke=Ce-ue;if(ke<0||ke===1/0)return;ae.setup(Z,ot,Ot,rt,Bt);let Se,ye=Yt;if(Bt!==null&&(Se=b.get(Bt),ye=jt,ye.setIndex(Se)),Z.isMesh)ot.wireframe===!0?(Vt.setLineWidth(ot.wireframeLinewidth*ve()),ye.setMode(G.LINES)):ye.setMode(G.TRIANGLES);else if(Z.isLine){let Jt=ot.linewidth;Jt===void 0&&(Jt=1),Vt.setLineWidth(Jt*ve()),Z.isLineSegments?ye.setMode(G.LINES):Z.isLineLoop?ye.setMode(G.LINE_LOOP):ye.setMode(G.LINE_STRIP)}else Z.isPoints?ye.setMode(G.POINTS):Z.isSprite&&ye.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Tr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))ye.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Jt=Z._multiDrawStarts,Ze=Z._multiDrawCounts,Te=Z._multiDrawCount,wn=Bt?b.get(Bt).bytesPerElement:1,pa=Zt.get(ot).currentProgram.getUniforms();for(let Xe=0;Xe<Te;Xe++)pa.setValue(G,"_gl_DrawID",Xe),ye.render(Jt[Xe]/wn,Ze[Xe])}else if(Z.isInstancedMesh)ye.renderInstances(ue,ke,Z.count);else if(rt.isInstancedBufferGeometry){const Jt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ze=Math.min(rt.instanceCount,Jt);ye.renderInstances(ue,ke,Ze)}else ye.render(ue,ke)};function be(R,Y,rt){R.transparent===!0&&R.side===Ui&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,ha(R,Y,rt),R.side=Ya,R.needsUpdate=!0,ha(R,Y,rt),R.side=Ui):ha(R,Y,rt)}this.compile=function(R,Y,rt=null){rt===null&&(rt=R),v=Ut.get(rt),v.init(Y),L.push(v),rt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),R!==rt&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const ot=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const bt=Z.material;if(bt)if(Array.isArray(bt))for(let Dt=0;Dt<bt.length;Dt++){const Ot=bt[Dt];be(Ot,rt,Z),ot.add(Ot)}else be(bt,rt,Z),ot.add(bt)}),v=L.pop(),ot},this.compileAsync=function(R,Y,rt=null){const ot=this.compile(R,Y,rt);return new Promise(Z=>{function bt(){if(ot.forEach(function(Dt){Zt.get(Dt).currentProgram.isReady()&&ot.delete(Dt)}),ot.size===0){Z(R);return}setTimeout(bt,10)}Ee.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Wn=null;function pn(R){Wn&&Wn(R)}function on(){zn.stop()}function En(){zn.start()}const zn=new uv;zn.setAnimationLoop(pn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(R){Wn=R,Tt.setAnimationLoop(R),R===null?zn.stop():zn.start()},Tt.addEventListener("sessionstart",on),Tt.addEventListener("sessionend",En),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(Y),Y=Tt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Y,W),v=Ut.get(R,L.length),v.init(Y),L.push(v),St.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Q.setFromProjectionMatrix(St),Mt=this.localClippingEnabled,ft=Gt.init(this.clippingPlanes,Mt),S=Pt.get(R,O.length),S.init(),O.push(S),Tt.enabled===!0&&Tt.isPresenting===!0){const bt=C.xr.getDepthSensingMesh();bt!==null&&Za(bt,Y,-1/0,C.sortObjects)}Za(R,Y,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(pt,U),Oe=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,Oe&&Et.addToRenderList(S,R),this.info.render.frame++,ft===!0&&Gt.beginShadows();const rt=v.state.shadowsArray;kt.render(rt,R,Y),ft===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=S.opaque,Z=S.transmissive;if(v.setupLights(),Y.isArrayCamera){const bt=Y.cameras;if(Z.length>0)for(let Dt=0,Ot=bt.length;Dt<Ot;Dt++){const Bt=bt[Dt];jo(ot,Z,R,Bt)}Oe&&Et.render(R);for(let Dt=0,Ot=bt.length;Dt<Ot;Dt++){const Bt=bt[Dt];Yo(S,R,Bt,Bt.viewport)}}else Z.length>0&&jo(ot,Z,R,Y),Oe&&Et.render(R),Yo(S,R,Y);W!==null&&P===0&&(se.updateMultisampleRenderTarget(W),se.updateRenderTargetMipmap(W)),R.isScene===!0&&R.onAfterRender(C,R,Y),ae.resetDefaultState(),D=-1,w=null,L.pop(),L.length>0?(v=L[L.length-1],ft===!0&&Gt.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,O.pop(),O.length>0?S=O[O.length-1]:S=null};function Za(R,Y,rt,ot){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){ot&&Wt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(St);const Dt=dt.update(R),Ot=R.material;Ot.visible&&S.push(R,Dt,Ot,rt,Wt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const Dt=dt.update(R),Ot=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Wt.copy(R.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Wt.copy(Dt.boundingSphere.center)),Wt.applyMatrix4(R.matrixWorld).applyMatrix4(St)),Array.isArray(Ot)){const Bt=Dt.groups;for(let te=0,Qt=Bt.length;te<Qt;te++){const Xt=Bt[te],ue=Ot[Xt.materialIndex];ue&&ue.visible&&S.push(R,Dt,ue,rt,Wt.z,Xt)}}else Ot.visible&&S.push(R,Dt,Ot,rt,Wt.z,null)}}const bt=R.children;for(let Dt=0,Ot=bt.length;Dt<Ot;Dt++)Za(bt[Dt],Y,rt,ot)}function Yo(R,Y,rt,ot){const Z=R.opaque,bt=R.transmissive,Dt=R.transparent;v.setupLightsView(rt),ft===!0&&Gt.setGlobalState(C.clippingPlanes,rt),ot&&Vt.viewport(F.copy(ot)),Z.length>0&&Ka(Z,Y,rt),bt.length>0&&Ka(bt,Y,rt),Dt.length>0&&Ka(Dt,Y,rt),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function jo(R,Y,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ot.id]===void 0&&(v.state.transmissionRenderTarget[ot.id]=new Rs(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?Go:Oi,minFilter:Ts,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const bt=v.state.transmissionRenderTarget[ot.id],Dt=ot.viewport||F;bt.setSize(Dt.z*C.transmissionResolutionScale,Dt.w*C.transmissionResolutionScale);const Ot=C.getRenderTarget();C.setRenderTarget(bt),C.getClearColor(ut),ct=C.getClearAlpha(),ct<1&&C.setClearColor(16777215,.5),C.clear(),Oe&&Et.render(rt);const Bt=C.toneMapping;C.toneMapping=qa;const te=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),v.setupLightsView(ot),ft===!0&&Gt.setGlobalState(C.clippingPlanes,ot),Ka(R,rt,ot),se.updateMultisampleRenderTarget(bt),se.updateRenderTargetMipmap(bt),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Xt=0,ue=Y.length;Xt<ue;Xt++){const Ce=Y[Xt],ke=Ce.object,Se=Ce.geometry,ye=Ce.material,Jt=Ce.group;if(ye.side===Ui&&ke.layers.test(ot.layers)){const Ze=ye.side;ye.side=kn,ye.needsUpdate=!0,fa(ke,rt,ot,Se,ye,Jt),ye.side=Ze,ye.needsUpdate=!0,Qt=!0}}Qt===!0&&(se.updateMultisampleRenderTarget(bt),se.updateRenderTargetMipmap(bt))}C.setRenderTarget(Ot),C.setClearColor(ut,ct),te!==void 0&&(ot.viewport=te),C.toneMapping=Bt}function Ka(R,Y,rt){const ot=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,bt=R.length;Z<bt;Z++){const Dt=R[Z],Ot=Dt.object,Bt=Dt.geometry,te=Dt.group;let Qt=Dt.material;Qt.allowOverride===!0&&ot!==null&&(Qt=ot),Ot.layers.test(rt.layers)&&fa(Ot,Y,rt,Bt,Qt,te)}}function fa(R,Y,rt,ot,Z,bt){R.onBeforeRender(C,Y,rt,ot,Z,bt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(C,Y,rt,ot,R,bt),Z.transparent===!0&&Z.side===Ui&&Z.forceSinglePass===!1?(Z.side=kn,Z.needsUpdate=!0,C.renderBufferDirect(rt,Y,ot,Z,R,bt),Z.side=Ya,Z.needsUpdate=!0,C.renderBufferDirect(rt,Y,ot,Z,R,bt),Z.side=Ui):C.renderBufferDirect(rt,Y,ot,Z,R,bt),R.onAfterRender(C,Y,rt,ot,Z,bt)}function ha(R,Y,rt){Y.isScene!==!0&&(Y=we);const ot=Zt.get(R),Z=v.state.lights,bt=v.state.shadowsArray,Dt=Z.state.version,Ot=_t.getParameters(R,Z.state,bt,Y,rt),Bt=_t.getProgramCacheKey(Ot);let te=ot.programs;ot.environment=R.isMeshStandardMaterial?Y.environment:null,ot.fog=Y.fog,ot.envMap=(R.isMeshStandardMaterial?N:$e).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",Ft),te=new Map,ot.programs=te);let Qt=te.get(Bt);if(Qt!==void 0){if(ot.currentProgram===Qt&&ot.lightsStateVersion===Dt)return Ii(R,Ot),Qt}else Ot.uniforms=_t.getUniforms(R),R.onBeforeCompile(Ot,C),Qt=_t.acquireProgram(Ot,Bt),te.set(Bt,Qt),ot.uniforms=Ot.uniforms;const Xt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xt.clippingPlanes=Gt.uniform),Ii(R,Ot),ot.needsLights=nn(R),ot.lightsStateVersion=Dt,ot.needsLights&&(Xt.ambientLightColor.value=Z.state.ambient,Xt.lightProbe.value=Z.state.probe,Xt.directionalLights.value=Z.state.directional,Xt.directionalLightShadows.value=Z.state.directionalShadow,Xt.spotLights.value=Z.state.spot,Xt.spotLightShadows.value=Z.state.spotShadow,Xt.rectAreaLights.value=Z.state.rectArea,Xt.ltc_1.value=Z.state.rectAreaLTC1,Xt.ltc_2.value=Z.state.rectAreaLTC2,Xt.pointLights.value=Z.state.point,Xt.pointLightShadows.value=Z.state.pointShadow,Xt.hemisphereLights.value=Z.state.hemi,Xt.directionalShadowMap.value=Z.state.directionalShadowMap,Xt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Xt.spotShadowMap.value=Z.state.spotShadowMap,Xt.spotLightMatrix.value=Z.state.spotLightMatrix,Xt.spotLightMap.value=Z.state.spotLightMap,Xt.pointShadowMap.value=Z.state.pointShadowMap,Xt.pointShadowMatrix.value=Z.state.pointShadowMatrix),ot.currentProgram=Qt,ot.uniformsList=null,Qt}function zi(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Ic.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Ii(R,Y){const rt=Zt.get(R);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function Qa(R,Y,rt,ot,Z){Y.isScene!==!0&&(Y=we),se.resetTextureUnits();const bt=Y.fog,Dt=ot.isMeshStandardMaterial?Y.environment:null,Ot=W===null?C.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Cr,Bt=(ot.isMeshStandardMaterial?N:$e).get(ot.envMap||Dt),te=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Qt=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Xt=!!rt.morphAttributes.position,ue=!!rt.morphAttributes.normal,Ce=!!rt.morphAttributes.color;let ke=qa;ot.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(ke=C.toneMapping);const Se=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ye=Se!==void 0?Se.length:0,Jt=Zt.get(ot),Ze=v.state.lights;if(ft===!0&&(Mt===!0||R!==w)){const mn=R===w&&ot.id===D;Gt.setState(ot,R,mn)}let Te=!1;ot.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ze.state.version||Jt.outputColorSpace!==Ot||Z.isBatchedMesh&&Jt.batching===!1||!Z.isBatchedMesh&&Jt.batching===!0||Z.isBatchedMesh&&Jt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Jt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Jt.instancing===!1||!Z.isInstancedMesh&&Jt.instancing===!0||Z.isSkinnedMesh&&Jt.skinning===!1||!Z.isSkinnedMesh&&Jt.skinning===!0||Z.isInstancedMesh&&Jt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Jt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Jt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Jt.instancingMorph===!1&&Z.morphTexture!==null||Jt.envMap!==Bt||ot.fog===!0&&Jt.fog!==bt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Gt.numPlanes||Jt.numIntersection!==Gt.numIntersection)||Jt.vertexAlphas!==te||Jt.vertexTangents!==Qt||Jt.morphTargets!==Xt||Jt.morphNormals!==ue||Jt.morphColors!==Ce||Jt.toneMapping!==ke||Jt.morphTargetsCount!==ye)&&(Te=!0):(Te=!0,Jt.__version=ot.version);let wn=Jt.currentProgram;Te===!0&&(wn=ha(ot,Y,Z));let pa=!1,Xe=!1,Fi=!1;const He=wn.getUniforms(),Cn=Jt.uniforms;if(Vt.useProgram(wn.program)&&(pa=!0,Xe=!0,Fi=!0),ot.id!==D&&(D=ot.id,Xe=!0),pa||w!==R){Vt.buffers.depth.getReversed()?(wt.copy(R.projectionMatrix),Iy(wt),By(wt),He.setValue(G,"projectionMatrix",wt)):He.setValue(G,"projectionMatrix",R.projectionMatrix),He.setValue(G,"viewMatrix",R.matrixWorldInverse);const Tn=He.map.cameraPosition;Tn!==void 0&&Tn.setValue(G,Kt.setFromMatrixPosition(R.matrixWorld)),pe.logarithmicDepthBuffer&&He.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&He.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Xe=!0,Fi=!0)}if(Z.isSkinnedMesh){He.setOptional(G,Z,"bindMatrix"),He.setOptional(G,Z,"bindMatrixInverse");const mn=Z.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),He.setValue(G,"boneTexture",mn.boneTexture,se))}Z.isBatchedMesh&&(He.setOptional(G,Z,"batchingTexture"),He.setValue(G,"batchingTexture",Z._matricesTexture,se),He.setOptional(G,Z,"batchingIdTexture"),He.setValue(G,"batchingIdTexture",Z._indirectTexture,se),He.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&He.setValue(G,"batchingColorTexture",Z._colorsTexture,se));const ln=rt.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&zt.update(Z,rt,wn),(Xe||Jt.receiveShadow!==Z.receiveShadow)&&(Jt.receiveShadow=Z.receiveShadow,He.setValue(G,"receiveShadow",Z.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Cn.envMap.value=Bt,Cn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Y.environment!==null&&(Cn.envMapIntensity.value=Y.environmentIntensity),Xe&&(He.setValue(G,"toneMappingExposure",C.toneMappingExposure),Jt.needsLights&&da(Cn,Fi),bt&&ot.fog===!0&&lt.refreshFogUniforms(Cn,bt),lt.refreshMaterialUniforms(Cn,ot,X,K,v.state.transmissionRenderTarget[R.id]),Ic.upload(G,zi(Jt),Cn,se)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Ic.upload(G,zi(Jt),Cn,se),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&He.setValue(G,"center",Z.center),He.setValue(G,"modelViewMatrix",Z.modelViewMatrix),He.setValue(G,"normalMatrix",Z.normalMatrix),He.setValue(G,"modelMatrix",Z.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const mn=ot.uniformsGroups;for(let Tn=0,Ti=mn.length;Tn<Ti;Tn++){const Hi=mn[Tn];k.update(Hi,wn),k.bind(Hi,wn)}}return wn}function da(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function nn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,Y,rt){const ot=Zt.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Zt.get(R.texture).__webglTexture=Y,Zt.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const rt=Zt.get(R);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0};const Zo=G.createFramebuffer();this.setRenderTarget=function(R,Y=0,rt=0){W=R,B=Y,P=rt;let ot=!0,Z=null,bt=!1,Dt=!1;if(R){const Bt=Zt.get(R);if(Bt.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(G.FRAMEBUFFER,null),ot=!1;else if(Bt.__webglFramebuffer===void 0)se.setupRenderTarget(R);else if(Bt.__hasExternalTextures)se.rebindTextures(R,Zt.get(R.texture).__webglTexture,Zt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Xt=R.depthTexture;if(Bt.__boundDepthTexture!==Xt){if(Xt!==null&&Zt.has(Xt)&&(R.width!==Xt.image.width||R.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Dt=!0);const Qt=Zt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qt[Y])?Z=Qt[Y][rt]:Z=Qt[Y],bt=!0):R.samples>0&&se.useMultisampledRTT(R)===!1?Z=Zt.get(R).__webglMultisampledFramebuffer:Array.isArray(Qt)?Z=Qt[rt]:Z=Qt,F.copy(R.viewport),et.copy(R.scissor),at=R.scissorTest}else F.copy(J).multiplyScalar(X).floor(),et.copy(gt).multiplyScalar(X).floor(),at=yt;if(rt!==0&&(Z=Zo),Vt.bindFramebuffer(G.FRAMEBUFFER,Z)&&ot&&Vt.drawBuffers(R,Z),Vt.viewport(F),Vt.scissor(et),Vt.setScissorTest(at),bt){const Bt=Zt.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Bt.__webglTexture,rt)}else if(Dt){const Bt=Zt.get(R.texture),te=Y;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Bt.__webglTexture,rt,te)}else if(R!==null&&rt!==0){const Bt=Zt.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Bt.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(R,Y,rt,ot,Z,bt,Dt,Ot=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt){Vt.bindFramebuffer(G.FRAMEBUFFER,Bt);try{const te=R.textures[Ot],Qt=te.format,Xt=te.type;if(!pe.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ot&&rt>=0&&rt<=R.height-Z&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ot),G.readPixels(Y,rt,ot,Z,Ct.convert(Qt),Ct.convert(Xt),bt))}finally{const te=W!==null?Zt.get(W).__webglFramebuffer:null;Vt.bindFramebuffer(G.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(R,Y,rt,ot,Z,bt,Dt,Ot=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt)if(Y>=0&&Y<=R.width-ot&&rt>=0&&rt<=R.height-Z){Vt.bindFramebuffer(G.FRAMEBUFFER,Bt);const te=R.textures[Ot],Qt=te.format,Xt=te.type;if(!pe.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ue),G.bufferData(G.PIXEL_PACK_BUFFER,bt.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ot),G.readPixels(Y,rt,ot,Z,Ct.convert(Qt),Ct.convert(Xt),0);const Ce=W!==null?Zt.get(W).__webglFramebuffer:null;Vt.bindFramebuffer(G.FRAMEBUFFER,Ce);const ke=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await zy(G,ke,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ue),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,bt),G.deleteBuffer(ue),G.deleteSync(ke),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,rt=0){const ot=Math.pow(2,-rt),Z=Math.floor(R.image.width*ot),bt=Math.floor(R.image.height*ot),Dt=Y!==null?Y.x:0,Ot=Y!==null?Y.y:0;se.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,Dt,Ot,Z,bt),Vt.unbindTexture()};const Ko=G.createFramebuffer(),Bi=G.createFramebuffer();this.copyTextureToTexture=function(R,Y,rt=null,ot=null,Z=0,bt=null){bt===null&&(Z!==0?(Tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=Z,Z=0):bt=0);let Dt,Ot,Bt,te,Qt,Xt,ue,Ce,ke;const Se=R.isCompressedTexture?R.mipmaps[bt]:R.image;if(rt!==null)Dt=rt.max.x-rt.min.x,Ot=rt.max.y-rt.min.y,Bt=rt.isBox3?rt.max.z-rt.min.z:1,te=rt.min.x,Qt=rt.min.y,Xt=rt.isBox3?rt.min.z:0;else{const ln=Math.pow(2,-Z);Dt=Math.floor(Se.width*ln),Ot=Math.floor(Se.height*ln),R.isDataArrayTexture?Bt=Se.depth:R.isData3DTexture?Bt=Math.floor(Se.depth*ln):Bt=1,te=0,Qt=0,Xt=0}ot!==null?(ue=ot.x,Ce=ot.y,ke=ot.z):(ue=0,Ce=0,ke=0);const ye=Ct.convert(Y.format),Jt=Ct.convert(Y.type);let Ze;Y.isData3DTexture?(se.setTexture3D(Y,0),Ze=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(se.setTexture2DArray(Y,0),Ze=G.TEXTURE_2D_ARRAY):(se.setTexture2D(Y,0),Ze=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const Te=G.getParameter(G.UNPACK_ROW_LENGTH),wn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),pa=G.getParameter(G.UNPACK_SKIP_PIXELS),Xe=G.getParameter(G.UNPACK_SKIP_ROWS),Fi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Se.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Se.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,te),G.pixelStorei(G.UNPACK_SKIP_ROWS,Qt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Xt);const He=R.isDataArrayTexture||R.isData3DTexture,Cn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const ln=Zt.get(R),mn=Zt.get(Y),Tn=Zt.get(ln.__renderTarget),Ti=Zt.get(mn.__renderTarget);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Hi=0;Hi<Bt;Hi++)He&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Zt.get(R).__webglTexture,Z,Xt+Hi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Zt.get(Y).__webglTexture,bt,ke+Hi)),G.blitFramebuffer(te,Qt,Dt,Ot,ue,Ce,Dt,Ot,G.DEPTH_BUFFER_BIT,G.NEAREST);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Zt.has(R)){const ln=Zt.get(R),mn=Zt.get(Y);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,Ko),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Bi);for(let Tn=0;Tn<Bt;Tn++)He?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ln.__webglTexture,Z,Xt+Tn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ln.__webglTexture,Z),Cn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,mn.__webglTexture,bt,ke+Tn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,mn.__webglTexture,bt),Z!==0?G.blitFramebuffer(te,Qt,Dt,Ot,ue,Ce,Dt,Ot,G.COLOR_BUFFER_BIT,G.NEAREST):Cn?G.copyTexSubImage3D(Ze,bt,ue,Ce,ke+Tn,te,Qt,Dt,Ot):G.copyTexSubImage2D(Ze,bt,ue,Ce,te,Qt,Dt,Ot);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Cn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Ze,bt,ue,Ce,ke,Dt,Ot,Bt,ye,Jt,Se.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Ze,bt,ue,Ce,ke,Dt,Ot,Bt,ye,Se.data):G.texSubImage3D(Ze,bt,ue,Ce,ke,Dt,Ot,Bt,ye,Jt,Se):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,bt,ue,Ce,Dt,Ot,ye,Jt,Se.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,bt,ue,Ce,Se.width,Se.height,ye,Se.data):G.texSubImage2D(G.TEXTURE_2D,bt,ue,Ce,Dt,Ot,ye,Jt,Se);G.pixelStorei(G.UNPACK_ROW_LENGTH,Te),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,wn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,pa),G.pixelStorei(G.UNPACK_SKIP_ROWS,Xe),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Fi),bt===0&&Y.generateMipmaps&&G.generateMipmap(Ze),Vt.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,rt=null,ot=null,Z=0){return Tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,rt,ot,Z)},this.initRenderTarget=function(R){Zt.get(R).__webglFramebuffer===void 0&&se.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?se.setTextureCube(R,0):R.isData3DTexture?se.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?se.setTexture2DArray(R,0):se.setTexture2D(R,0),Vt.unbindTexture()},this.resetState=function(){B=0,P=0,W=null,Vt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),i.unpackColorSpace=Re._getUnpackColorSpace()}}const D0={type:"change"},Fd={type:"start"},mv={type:"end"},Cc=new Xc,U0=new ka,l1=Math.cos(70*Oy.DEG2RAD),fn=new j,Vn=2*Math.PI,Fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nh=1e-6;class c1 extends TM{constructor(t,i=null){super(t,i),this.state=Fe.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mr.ROTATE,MIDDLE:Mr.DOLLY,RIGHT:Mr.PAN},this.touches={ONE:Sr.ROTATE,TWO:Sr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new As,this._lastTargetPosition=new j,this._quat=new As().setFromUnitVectors(t.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new a0,this._sphericalDelta=new a0,this._scale=1,this._panOffset=new j,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new j,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=f1.bind(this),this._onPointerDown=u1.bind(this),this._onPointerUp=h1.bind(this),this._onContextMenu=x1.bind(this),this._onMouseWheel=m1.bind(this),this._onKeyDown=g1.bind(this),this._onTouchStart=_1.bind(this),this._onTouchMove=v1.bind(this),this._onMouseDown=d1.bind(this),this._onMouseMove=p1.bind(this),this._interceptControlDown=S1.bind(this),this._interceptControlUp=y1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(D0),this.update(),this.state=Fe.NONE}update(t=null){const i=this.object.position;fn.copy(i).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===Fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Vn:s>Math.PI&&(s-=Vn),l<-Math.PI?l+=Vn:l>Math.PI&&(l-=Vn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),i.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=fn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new j(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new j(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Cc.origin.copy(this.object.position),Cc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Cc.direction))<l1?this.object.lookAt(this.target):(U0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Cc.intersectPlane(U0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Nh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nh||this._lastTargetPosition.distanceToSquared(this.target)>Nh?(this.dispatchEvent(D0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Vn/60*this.autoRotateSpeed*t:Vn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){fn.setFromMatrixColumn(i,0),fn.multiplyScalar(-t),this._panOffset.add(fn)}_panUp(t,i){this.screenSpacePanning===!0?fn.setFromMatrixColumn(i,1):(fn.setFromMatrixColumn(i,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(t),this._panOffset.add(fn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;fn.copy(l).sub(this.target);let c=fn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new re,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function u1(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function f1(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function h1(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mv),this.state=Fe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function d1(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Mr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Fe.DOLLY;break;case Mr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Fe.ROTATE}break;case Mr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Fe.PAN}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(Fd)}function p1(r){switch(this.state){case Fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function m1(r){this.enabled===!1||this.enableZoom===!1||this.state!==Fe.NONE||(r.preventDefault(),this.dispatchEvent(Fd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(mv))}function g1(r){this.enabled!==!1&&this._handleKeyDown(r)}function _1(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Sr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Fe.TOUCH_ROTATE;break;case Sr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Fe.TOUCH_PAN;break;default:this.state=Fe.NONE}break;case 2:switch(this.touches.TWO){case Sr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Fe.TOUCH_DOLLY_PAN;break;case Sr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Fe.TOUCH_DOLLY_ROTATE;break;default:this.state=Fe.NONE}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(Fd)}function v1(r){switch(this._trackPointer(r),this.state){case Fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Fe.NONE}}function x1(r){this.enabled!==!1&&r.preventDefault()}function S1(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function y1(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const M1=/^[og]\s*(.+)?/,E1=/^mtllib /,T1=/^usemtl /,b1=/^usemap /,L0=/\s+/,N0=new j,Oh=new j,O0=new j,P0=new j,hi=new j,Dc=new de;function A1(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,i){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=i!==!1;return}const s=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:i!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(l,c){const h=this._finalize(!1);h&&(h.inherited||h.groupCount<=0)&&this.materials.splice(h.index,1);const d={index:this.materials.length,name:l||"",mtllib:Array.isArray(c)&&c.length>0?c[c.length-1]:"",smooth:h!==void 0?h.smooth:this.smooth,groupStart:h!==void 0?h.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(m){const p={index:typeof m=="number"?m:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return p.clone=this.clone.bind(p),p}};return this.materials.push(d),d},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(l){const c=this.currentMaterial();if(c&&c.groupEnd===-1&&(c.groupEnd=this.geometry.vertices.length/3,c.groupCount=c.groupEnd-c.groupStart,c.inherited=!1),l&&this.materials.length>1)for(let h=this.materials.length-1;h>=0;h--)this.materials[h].groupCount<=0&&this.materials.splice(h,1);return l&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),c}},s&&s.name&&typeof s.clone=="function"){const l=s.clone(0);l.inherited=!0,this.object.materials.push(l)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,i){const s=parseInt(t,10);return(s>=0?s-1:s+i/3)*3},parseNormalIndex:function(t,i){const s=parseInt(t,10);return(s>=0?s-1:s+i/3)*3},parseUVIndex:function(t,i){const s=parseInt(t,10);return(s>=0?s-1:s+i/2)*2},addVertex:function(t,i,s){const l=this.vertices,c=this.object.geometry.vertices;c.push(l[t+0],l[t+1],l[t+2]),c.push(l[i+0],l[i+1],l[i+2]),c.push(l[s+0],l[s+1],l[s+2])},addVertexPoint:function(t){const i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])},addVertexLine:function(t){const i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])},addNormal:function(t,i,s){const l=this.normals,c=this.object.geometry.normals;c.push(l[t+0],l[t+1],l[t+2]),c.push(l[i+0],l[i+1],l[i+2]),c.push(l[s+0],l[s+1],l[s+2])},addFaceNormal:function(t,i,s){const l=this.vertices,c=this.object.geometry.normals;N0.fromArray(l,t),Oh.fromArray(l,i),O0.fromArray(l,s),hi.subVectors(O0,Oh),P0.subVectors(N0,Oh),hi.cross(P0),hi.normalize(),c.push(hi.x,hi.y,hi.z),c.push(hi.x,hi.y,hi.z),c.push(hi.x,hi.y,hi.z)},addColor:function(t,i,s){const l=this.colors,c=this.object.geometry.colors;l[t]!==void 0&&c.push(l[t+0],l[t+1],l[t+2]),l[i]!==void 0&&c.push(l[i+0],l[i+1],l[i+2]),l[s]!==void 0&&c.push(l[s+0],l[s+1],l[s+2])},addUV:function(t,i,s){const l=this.uvs,c=this.object.geometry.uvs;c.push(l[t+0],l[t+1]),c.push(l[i+0],l[i+1]),c.push(l[s+0],l[s+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const i=this.uvs;this.object.geometry.uvs.push(i[t+0],i[t+1])},addFace:function(t,i,s,l,c,h,d,m,p){const g=this.vertices.length;let _=this.parseVertexIndex(t,g),x=this.parseVertexIndex(i,g),M=this.parseVertexIndex(s,g);if(this.addVertex(_,x,M),this.addColor(_,x,M),d!==void 0&&d!==""){const E=this.normals.length;_=this.parseNormalIndex(d,E),x=this.parseNormalIndex(m,E),M=this.parseNormalIndex(p,E),this.addNormal(_,x,M)}else this.addFaceNormal(_,x,M);if(l!==void 0&&l!==""){const E=this.uvs.length;_=this.parseUVIndex(l,E),x=this.parseUVIndex(c,E),M=this.parseUVIndex(h,E),this.addUV(_,x,M),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const i=this.vertices.length;for(let s=0,l=t.length;s<l;s++){const c=this.parseVertexIndex(t[s],i);this.addVertexPoint(c),this.addColor(c)}},addLineGeometry:function(t,i){this.object.geometry.type="Line";const s=this.vertices.length,l=this.uvs.length;for(let c=0,h=t.length;c<h;c++)this.addVertexLine(this.parseVertexIndex(t[c],s));for(let c=0,h=i.length;c<h;c++)this.addUVLine(this.parseUVIndex(i[c],l))}};return r.startObject("",!1),r}class R1 extends Id{constructor(t){super(t),this.materials=null}load(t,i,s,l){const c=this,h=new vM(this.manager);h.setPath(this.path),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(t,function(d){try{i(c.parse(d))}catch(m){l?l(m):console.error(m),c.manager.itemError(t)}},s,l)}setMaterials(t){return this.materials=t,this}parse(t){const i=new A1;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const s=t.split(`
`);let l=[];for(let d=0,m=s.length;d<m;d++){const p=s[d].trimStart();if(p.length===0)continue;const g=p.charAt(0);if(g!=="#")if(g==="v"){const _=p.split(L0);switch(_[0]){case"v":i.vertices.push(parseFloat(_[1]),parseFloat(_[2]),parseFloat(_[3])),_.length>=7?(Dc.setRGB(parseFloat(_[4]),parseFloat(_[5]),parseFloat(_[6]),ei),i.colors.push(Dc.r,Dc.g,Dc.b)):i.colors.push(void 0,void 0,void 0);break;case"vn":i.normals.push(parseFloat(_[1]),parseFloat(_[2]),parseFloat(_[3]));break;case"vt":i.uvs.push(parseFloat(_[1]),parseFloat(_[2]));break}}else if(g==="f"){const x=p.slice(1).trim().split(L0),M=[];for(let T=0,S=x.length;T<S;T++){const v=x[T];if(v.length>0){const O=v.split("/");M.push(O)}}const E=M[0];for(let T=1,S=M.length-1;T<S;T++){const v=M[T],O=M[T+1];i.addFace(E[0],v[0],O[0],E[1],v[1],O[1],E[2],v[2],O[2])}}else if(g==="l"){const _=p.substring(1).trim().split(" ");let x=[];const M=[];if(p.indexOf("/")===-1)x=_;else for(let E=0,T=_.length;E<T;E++){const S=_[E].split("/");S[0]!==""&&x.push(S[0]),S[1]!==""&&M.push(S[1])}i.addLineGeometry(x,M)}else if(g==="p"){const x=p.slice(1).trim().split(" ");i.addPointGeometry(x)}else if((l=M1.exec(p))!==null){const _=(" "+l[0].slice(1).trim()).slice(1);i.startObject(_)}else if(T1.test(p))i.object.startMaterial(p.substring(7).trim(),i.materialLibraries);else if(E1.test(p))i.materialLibraries.push(p.substring(7).trim());else if(b1.test(p))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(g==="s"){if(l=p.split(" "),l.length>1){const x=l[1].trim().toLowerCase();i.object.smooth=x!=="0"&&x!=="off"}else i.object.smooth=!0;const _=i.object.currentMaterial();_&&(_.smooth=i.object.smooth)}else{if(p==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+p+'"')}}i.finalize();const c=new No;if(c.materialLibraries=[].concat(i.materialLibraries),!(i.objects.length===1&&i.objects[0].geometry.vertices.length===0)===!0)for(let d=0,m=i.objects.length;d<m;d++){const p=i.objects[d],g=p.geometry,_=p.materials,x=g.type==="Line",M=g.type==="Points";let E=!1;if(g.vertices.length===0)continue;const T=new ii;T.setAttribute("position",new Sn(g.vertices,3)),g.normals.length>0&&T.setAttribute("normal",new Sn(g.normals,3)),g.colors.length>0&&(E=!0,T.setAttribute("color",new Sn(g.colors,3))),g.hasUVIndices===!0&&T.setAttribute("uv",new Sn(g.uvs,2));const S=[];for(let O=0,L=_.length;O<L;O++){const C=_[O],H=C.name+"_"+C.smooth+"_"+E;let B=i.materials[H];if(this.materials!==null){if(B=this.materials.create(C.name),x&&B&&!(B instanceof zo)){const P=new zo;Pi.prototype.copy.call(P,B),P.color.copy(B.color),B=P}else if(M&&B&&!(B instanceof Oo)){const P=new Oo({size:10,sizeAttenuation:!1});Pi.prototype.copy.call(P,B),P.color.copy(B.color),P.map=B.map,B=P}}B===void 0&&(x?B=new zo:M?B=new Oo({size:1,sizeAttenuation:!1}):B=new hM,B.name=C.name,B.flatShading=!C.smooth,B.vertexColors=E,i.materials[H]=B),S.push(B)}let v;if(S.length>1){for(let O=0,L=_.length;O<L;O++){const C=_[O];T.addGroup(C.groupStart,C.groupCount,O)}x?v=new Q_(T,S):M?v=new bh(T,S):v=new ni(T,S)}else x?v=new Q_(T,S[0]):M?v=new bh(T,S[0]):v=new ni(T,S[0]);v.name=p.name,c.add(v)}else if(i.vertices.length>0){const d=new Oo({size:1,sizeAttenuation:!1}),m=new ii;m.setAttribute("position",new Sn(i.vertices,3)),i.colors.length>0&&i.colors[0]!==void 0&&(m.setAttribute("color",new Sn(i.colors,3)),d.vertexColors=!0);const p=new bh(m,d);c.add(p)}return c}}const w1=({config:r,onStringHeightsUpdate:t})=>{const i=Ve.useRef(),s=Ve.useRef(new cM),l=Ve.useRef(null),c=Ve.useRef(),h=Ve.useRef(),d=Ve.useRef([]),m=Ve.useRef([]),p=Ve.useRef([]);Ve.useEffect(()=>{const E=i.current,T=s.current;T.background=new de(13092807);const S=new di(75,E.clientWidth/E.clientHeight,.1,1e3);S.position.set(0,100,300),h.current=S;const v=new o1({antialias:!0});v.setSize(E.clientWidth,E.clientHeight),c.current=v,E.appendChild(v.domElement);const O=new MM(16777215,.4),L=new yM(16777215,1);L.position.set(10,10,10),T.add(O,L);const C=new c1(S,v.domElement);C.enableDamping=!0,C.dampingFactor=.05,C.target.set(0,100,0);const H=()=>{requestAnimationFrame(H),C.update(),v.render(T,S)};return H(),new R1().load("/configurator/models/myModel.obj",P=>{l.current=P,g()}),window.addEventListener("resize",M),()=>{window.removeEventListener("resize",M),E.removeChild(v.domElement),x()}},[]),Ve.useEffect(()=>{l.current&&g()},[r]);const g=()=>{const E=[],T=s.current,S=l.current.clone();S.scale.set(1,1,1),T.children=T.children.filter(X=>{var pt,U,J;return!((pt=X.userData)!=null&&pt.isPendant)&&!((U=X.userData)!=null&&U.isString)&&!((J=X.userData)!=null&&J.isSurface)}),d.current.forEach(X=>T.remove(X)),d.current=[],x();const{rows:v,cols:O,spacing:L,pattern:C,surfaceHeight:H,lowest:B,highest:P,baseOffset:W,surfaceLength:D,surfaceWidth:w}=r;let F=D,et=w;et===0&&F===0&&(et=(O-1)*L+parseInt(W||0,10),F=(v-1)*L+parseInt(W||0,10));const at=-((O-1)/2)*L,ut=-((v-1)/2)*L;for(let X=0;X<v;X++)for(let pt=0;pt<O;pt++){let U=0;const J=parseInt(P,10),gt=parseInt(B,10),yt=parseInt(v,10),Q=parseInt(O,10);if(C==="flat")U=0;else if(C==="dome"){const St=X-yt/2,Kt=pt-Q/2,Wt=Math.sqrt(St*St+Kt*Kt);U=(gt+J)/2+Wt*10}else if(C==="ripple"){const St=X-yt/2,Kt=pt-Q/2,Wt=Math.sqrt(St*St+Kt*Kt);U=Math.sin(Wt*.8)*20+50}else if(C==="spiral"){const St=pt-Q/2,Kt=X-yt/2,Wt=Math.atan2(Kt,St),we=Math.sqrt(St*St+Kt*Kt);U=(gt+J)/2+Wt*10+we*5}else if(C==="mirror"){const St=pt-Q/2;U=(gt+J)/2+Math.abs(St)*10}else if(C==="wave"){const St=(J+gt)/2,Kt=(gt-J)/2;U=St+(Math.sin(pt*.5)+Math.cos(X*.5))*Kt*.5}else C==="diagonal"?U=gt+(J-gt)*((X+pt)/(yt+Q-2)):C==="checkerboard"?U=(X+pt)%2===0?J:gt:C==="random"&&(U=Math.floor(Math.random()*(J-gt)+gt));const ft=S.clone();X===0&&pt===0&&ft.traverse(St=>{St.isMesh&&(St.material=St.material.clone(),St.material.color.set(16711680))}),X===0&&pt===9&&ft.traverse(St=>{St.isMesh&&(St.material=St.material.clone(),St.material.color.set(13736192))}),X===9&&pt===9&&ft.traverse(St=>{St.isMesh&&(St.material=St.material.clone(),St.material.color.set(2293504))}),U=Math.floor(U),ft.position.set(at+pt*L,U,ut+X*L),ft.rotation.set(0,Math.random()*Math.PI*2,0),ft.userData.isPendant=!0,T.add(ft);const Mt=H-U,wt=new ni(new zd(.1,.1,Mt,8),new t0({color:2697513}));wt.position.set(ft.position.x,U+Mt/2,ft.position.z),wt.userData.isString=!0,T.add(wt),E.push({row:X,col:pt,pendantY:U,stringHeight:Mt})}p.current=E,t&&t(E);const ct=new ni(new qo(et,F),new t0({color:5592405,side:Ui}));ct.rotation.x=-Math.PI/2,ct.position.set(0,H,0),ct.userData.isSurface=!0,T.add(ct);const z=h.current;_(new j(-et/2,0,F/2),new j(et/2,0,F/2),`${et.toFixed(0)} mm`,T,z),_(new j(et/2,0,-F/2),new j(et/2,0,F/2),`${F.toFixed(0)} mm`,T,z);const K=parseInt(H,10);_(new j(et/2,0,F/2),new j(et/2,K,F/2),`${K.toFixed(0)} mm`,T,z)};function _(E,T,S,v,O){const L=new zo({color:13630171}),C=[E,T],H=new ii().setFromPoints(C),B=new rv(H,L);v.add(B),d.current.push(B);const P=document.createElement("div");P.style.position="absolute",P.style.color="rgba(0,0,0,0.7)",P.style.background="rgba(255,255,255,0.7)",P.style.padding="2px 6px",P.style.borderRadius="4px",P.style.fontSize="10px",P.style.zIndex="20",P.innerHTML=S,document.body.appendChild(P),m.current.push(P);const W=()=>{const w=new j().addVectors(E,T).multiplyScalar(.5);w.project(O);const F=(w.x*.5+.6)*window.innerWidth,et=(-w.y*.5+.5)*window.innerHeight;P.style.left=`${F-P.clientWidth/2}px`,P.style.top=`${et-P.clientHeight/2}px`};function D(){W(),requestAnimationFrame(D)}D()}function x(){m.current.forEach(E=>{E&&E.parentNode&&E.parentNode.removeChild(E)}),m.current=[]}const M=()=>{const E=i.current,T=c.current,S=h.current;S.aspect=E.clientWidth/E.clientHeight,S.updateProjectionMatrix(),T.setSize(E.clientWidth,E.clientHeight)};return Ve.useEffect(()=>(window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)),[]),Rt.jsx("div",{ref:i,style:{flex:1}})};function C1({children:r,onClick:t,modalState:i}){return i?Rt.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ",children:Rt.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-xl",children:[r,Rt.jsx("button",{onClick:t,children:"Close"})]})}):null}function D1(){const[r,t]=Ve.useState(""),[i,s]=Ve.useState(!1),[l,c]=Ve.useState(!0);function h(){s(T=>!T)}function d(){c(T=>!T)}const m=()=>{const T=_.surfaceLength===0?(_.cols-1)*_.spacing+parseInt(_.baseOffset||0,10):_.surfaceLength,S=_.surfaceWidth===0?(_.rows-1)*_.spacing+parseInt(_.baseOffset||0,10):_.surfaceWidth,v={stringHeights:p,surface:{length:T,width:S,height:_.surfaceHeight},pattern:_.pattern,pendantType:"Your pendant type here",finishes:"Your finishes here",objFile:"/configurator/models/myModel.obj"};console.log("Data collected:",v),h(),t(v),console.log(v)},[p,g]=Ve.useState([]),[_,x]=Ve.useState({rows:10,cols:10,pattern:"wave",spacing:20,surfaceHeight:170,surfaceLength:0,surfaceWidth:0,baseOffset:10,lowest:0,highest:150}),M=T=>{const{name:S,value:v}=T.target;x(S==="pattern"?O=>({...O,[S]:v}):O=>({...O,[S]:parseInt(v,10)})),S==="surfaceHeight"&&(v<_.highest||v<_.lowest)&&x(O=>({...O,highest:v,lowest:v}))},E=()=>{x(T=>({...T,version:T.version+1}))};return Rt.jsxs("div",{className:ic.wrapper,children:[Rt.jsxs("div",{className:"flex flex-col justify-start absolute h-screen bg-white",children:[Rt.jsx("div",{className:"text-right p-4",children:Rt.jsx("span",{onClick:d,children:"×"})}),Rt.jsxs("div",{className:`${ic.panel} ${l?"opacity-1 w-[290px] transition-[opacity] delay-200":"opacity-0 w-[2px]"} transition-[width] duration-500`,children:[Rt.jsxs("label",{children:["Pattern:",Rt.jsx("select",{name:"pattern",value:_.pattern,onChange:M,children:["checkerboard","diagonal","dome","flat","mirror","random","ripple","spiral","wave"].map(T=>Rt.jsx(Rt.Fragment,{children:Rt.jsx("option",{value:T,children:T},T)}))})]}),[{labelName:"Rows",name:"rows",max:20,min:1,val:0},{labelName:"Column",name:"cols",max:20,min:1,val:0},{labelName:"Spacing",name:"spacing",max:100,min:0,val:0},{labelName:"Base Plate Length",name:"surfaceLength",max:999,min:0,val:0},{labelName:"Base Plate Width",name:"surfaceWidth",max:999,min:0,val:0},{labelName:"Base Plate From Floor",name:"surfaceHeight",max:999,min:0,val:0},{labelName:"Base Plate Offset",name:"baseOffset",max:30,min:0,val:0},{labelName:"Lowest From the Ground",name:"lowest",max:999,min:0,val:0},{labelName:"Highest From the Ground",name:"highest",max:999,min:0,val:0}].map(({name:T,max:S,min:v,labelName:O})=>{const L=!(T==="baseOffset"&&_.surfaceLength==0)||!(T==="baseOffset"&&_.surfaceWidth==0),C=T==="surfaceLength"&&_.surfaceLength==0||T==="surfaceWidth"&&_.surfaceWidth==0;return(T==="lowest"||T==="highest")&&(S=_.surfaceHeight),Rt.jsxs("div",{style:T==="baseOffset"?L?{opacity:0,maxHeight:0,overflow:"hidden",transition:"opacity 1s ease, max-height 0.5s ease 0.3s"}:{opacity:1,maxHeight:"500px",overflow:"hidden",transition:"opacity 1s ease 0.5s, max-height 2s ease 0.5s"}:void 0,children:[Rt.jsxs("label",{style:{...C?{color:"#ddd"}:{},...T==="surfaceLength"||T==="lowest"?{marginTop:"70px"}:{}},children:[O,":"]},T),Rt.jsxs("div",{className:ic.inputsDiv,children:[Rt.jsx("input",{type:"range",name:T,value:_[T],onChange:M,min:v,max:S,className:C?ic.inactive:""}),Rt.jsx("input",{type:"number",name:T,value:_[T],onChange:M,min:v,max:S,style:C?{color:"#ddd"}:{}})]})]})}),Rt.jsx("div",{}),Rt.jsx("button",{style:_.pattern==="random"?{opacity:1,transition:"opacity 0.7s ease"}:{opacity:0,transition:"opacity 0.7s ease"},onClick:E,children:"Generate"})]}),Rt.jsx("button",{className:`mx-auto mt-auto mb-10
            ${l?"opacity-1 w-3/4 transition-all delay-500":"opacity-0 w-0"}`,onClick:m,children:"Generate Data"})]}),Rt.jsx(w1,{config:_,onStringHeightsUpdate:g}),Rt.jsx("div",{children:Rt.jsx(C1,{onClick:h,modalState:i,children:Rt.jsx("div",{className:"overflow-auto max-h-[80vh] w-[1000px]",children:r?Rt.jsxs("div",{children:[Rt.jsx("h1",{children:"pattern"}),Rt.jsx("p",{children:r.pattern}),Rt.jsx("h1",{children:"Strings"}),Rt.jsx("table",{children:r.stringHeights.map((T,S)=>Rt.jsxs("tr",{children:[Rt.jsx("td",{children:`${S+1})`}),Rt.jsx("td",{children:`coordinates: ${T.row}-${T.col}, `}),Rt.jsx("td",{children:`height: ${T.stringHeight} cm`})]}))})]}):""})})})]})}const U1="_lightDet_q2jkn_1",L1={lightDet:U1};function N1(){return Rt.jsxs("div",{className:L1.lightDet,children:[Rt.jsx("h1",{children:"Under Construction"}),Rt.jsx("p",{children:"Material/Finishes"})]})}const z0={"hide-scrollbar":"_hide-scrollbar_1aez7_41"};function O1({modelName:r,imgLink:t,imgId:i,onClick:s,rightContent:l}){return Rt.jsxs("div",{className:`w-[165px] h-[187px] relative rounded-[10px] box-border my-[10px] overflow-hidden
                    md:w-[185px] md:h-[210px] shadow-lg
                    hover:scale-105
                    transition-transform duration-500
                    ${l===i&&"ring-2 ring-slate-300 scale-[1.03]"}
          `,onClick:s,children:[Rt.jsx("img",{className:"w-full",src:t,alt:"","data-id":i}),Rt.jsx("p",{className:"absolute bottom-[10px] right-[10px]","data-id":i,children:r})]},i)}function P1({typeSelected:r=0}){const[t,i]=Ve.useState(0),s="/configurator/types/"+r.id,l=[s+"/image-01.png",s+"/image-02.png",s+"/image-03.png",s+"/image-04.png",s+"/image-05.png",s+"/image-06.png",s+"/image-07.png",s+"/image-08.png"];function c(h){let d=0;const{name:m}=h.currentTarget;m=="right"?t===l.length-1?d=0:d=t+1:t===0?d=l.length-1:d=t-1,i(d)}return Rt.jsx("div",{children:Rt.jsxs("div",{className:"image-container max-h-[90vh] overflow-hidden relative rounded-[20px]",children:[Rt.jsx("button",{className:"arrow left-0",name:"left",onClick:c,children:Rt.jsx("i",{className:"material-symbols-outlined text-[30px] md:text-[50px]","data-name":"type",style:{fontVariationSettings:"  'FILL' 0,  'wght' 300,  'GRAD' 0,  'opsz' 24"},children:"arrow_back_ios"})}),Rt.jsx("button",{className:"arrow right-0",name:"right",onClick:c,children:Rt.jsx("i",{className:"material-symbols-outlined text-[30px] md:text-[50px]","data-name":"type",style:{fontVariationSettings:"  'FILL' 0,  'wght' 300,  'GRAD' 0,  'opsz' 24"},children:"arrow_forward_ios"})}),Rt.jsx("div",{className:`hidden md:flex absolute w-[70%] h-[120px] left-1/2 -translate-x-1/2 bottom-[20px] gap-[10px]\r
                        items-center\r
        `}),Rt.jsx("img",{className:"main-image w-[100%] m-auto",src:l[t],alt:"",loading:"lazy"})]})})}function z1(){const[r,t]=Ve.useState(!1),[i,s]=Ve.useState("a1"),l=[{id:"a1",name:"Model 1",image:"/configurator/types/a1.png"},{id:"a2",name:"Model 2",image:"/configurator/types/a2.png"},{id:"a3",name:"Model 3",image:"/configurator/types/a3.png"},{id:"a4",name:"Model 4",image:"/configurator/types/a4.png"}];function c(d){const m=d.target.dataset.id;s(m),t(!0)}const h=l.find(d=>d.id===i);return Rt.jsxs("div",{className:`flex flex-col md:flex-row ${z0["hide-scrollbar"]}`,children:[Rt.jsxs("div",{className:"flex flex-col pt-0 pr-5 pb-0 pl-2.5 md:max-w-[25%] h-[90vh] md:h-[95vh]",children:[Rt.jsx("h1",{className:"text-4xl my-10",children:"Types"}),Rt.jsx("div",{className:`overflow-y-auto ${z0["hide-scrollbar"]}`,style:{flex:2},children:Rt.jsx("div",{className:"flex flex-wrap justify-evenly",children:l.map(({name:d,image:m,id:p})=>Rt.jsx(O1,{keyid:p,onClick:c,modelName:d,imgId:p,imgLink:m,rightContent:i}))})})]}),Rt.jsxs("div",{className:`absolute top-1/2 -translate-y-1/2 left-0 items-end justify-center p-3 h-screen
                        md:relative md:flex flex-col md:m-0 md:translate-y-0 md:bg-transparent
                        ${r?"flex bg-black bg-opacity-90":"hidden"}
                        `,children:[Rt.jsx("span",{className:"absolute top-5 right-5 z-50 text-[30px] md:hidden text-white",onClick:()=>t(!1),children:"×"}),Rt.jsx(P1,{typeSelected:h})]})]})}function I1(){const[r,t]=Ve.useState("type");function i(c){const h=c.target.dataset.name;t(h)}let s=null;const l=r;return l==="type"?s=Rt.jsx(z1,{}):l==="detail"?s=Rt.jsx(N1,{}):l==="composition"?s=Rt.jsx(D1,{}):s=Rt.jsx("p",{children:"Please select a light option."}),Rt.jsx(Rt.Fragment,{children:Rt.jsxs("div",{children:[Rt.jsx(wS,{handleTabClick:i}),Rt.jsxs("div",{className:"main-container",children:[Rt.jsx("div",{className:"side-bar",children:Rt.jsx(GS,{handleTabClick:i,btnClicked:r})}),Rt.jsx("div",{className:"app-container",children:Rt.jsx(CS,{className:"ContentEffect",children:s},r)})]})]})})}RS.createRoot(document.getElementById("root")).render(Rt.jsx(Ve.StrictMode,{children:Rt.jsx(I1,{})}));
