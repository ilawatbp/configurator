(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Zf={exports:{}},bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function mS(){if(h_)return bo;h_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return bo.Fragment=t,bo.jsx=i,bo.jsxs=i,bo}var d_;function gS(){return d_||(d_=1,Zf.exports=mS()),Zf.exports}var Ht=gS(),Kf={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function _S(){if(p_)return oe;p_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function S(U,$,_t){this.props=U,this.context=$,this.refs=b,this.updater=_t||y}S.prototype.isReactComponent={},S.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=S.prototype;function P(U,$,_t){this.props=U,this.context=$,this.refs=b,this.updater=_t||y}var L=P.prototype=new x;L.constructor=P,E(L,S.prototype),L.isPureReactComponent=!0;var D=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},B=Object.prototype.hasOwnProperty;function I(U,$,_t,yt,Q,ut){return _t=ut.ref,{$$typeof:r,type:U,key:$,ref:_t!==void 0?_t:null,props:ut}}function V(U,$){return I(U.type,$,void 0,void 0,void 0,U.props)}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function w(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(_t){return $[_t]})}var G=/\/+/g;function it(U,$){return typeof U=="object"&&U!==null&&U.key!=null?w(""+U.key):$.toString(36)}function at(){}function ft(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(at,at):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function lt(U,$,_t,yt,Q){var ut=typeof U;(ut==="undefined"||ut==="boolean")&&(U=null);var gt=!1;if(U===null)gt=!0;else switch(ut){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(U.$$typeof){case r:case t:gt=!0;break;case g:return gt=U._init,lt(gt(U._payload),$,_t,yt,Q)}}if(gt)return Q=Q(U),gt=yt===""?"."+it(U,0):yt,D(Q)?(_t="",gt!=null&&(_t=gt.replace(G,"$&/")+"/"),lt(Q,$,_t,"",function(re){return re})):Q!=null&&(C(Q)&&(Q=V(Q,_t+(Q.key==null||U&&U.key===Q.key?"":(""+Q.key).replace(G,"$&/")+"/")+gt)),$.push(Q)),1;gt=0;var At=yt===""?".":yt+":";if(D(U))for(var Rt=0;Rt<U.length;Rt++)yt=U[Rt],ut=At+it(yt,Rt),gt+=lt(yt,$,_t,ut,Q);else if(Rt=v(U),typeof Rt=="function")for(U=Rt.call(U),Rt=0;!(yt=U.next()).done;)yt=yt.value,ut=At+it(yt,Rt++),gt+=lt(yt,$,_t,ut,Q);else if(ut==="object"){if(typeof U.then=="function")return lt(ft(U),$,_t,yt,Q);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return gt}function N(U,$,_t){if(U==null)return U;var yt=[],Q=0;return lt(U,yt,"","",function(ut){return $.call(_t,ut,Q++)}),yt}function q(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(_t){(U._status===0||U._status===-1)&&(U._status=1,U._result=_t)},function(_t){(U._status===0||U._status===-1)&&(U._status=2,U._result=_t)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var W=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function St(){}return oe.Children={map:N,forEach:function(U,$,_t){N(U,function(){$.apply(this,arguments)},_t)},count:function(U){var $=0;return N(U,function(){$++}),$},toArray:function(U){return N(U,function($){return $})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},oe.Component=S,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=P,oe.StrictMode=s,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,oe.__COMPILER_RUNTIME={__proto__:null,c:function(U){return F.H.useMemoCache(U)}},oe.cache=function(U){return function(){return U.apply(null,arguments)}},oe.cloneElement=function(U,$,_t){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var yt=E({},U.props),Q=U.key,ut=void 0;if($!=null)for(gt in $.ref!==void 0&&(ut=void 0),$.key!==void 0&&(Q=""+$.key),$)!B.call($,gt)||gt==="key"||gt==="__self"||gt==="__source"||gt==="ref"&&$.ref===void 0||(yt[gt]=$[gt]);var gt=arguments.length-2;if(gt===1)yt.children=_t;else if(1<gt){for(var At=Array(gt),Rt=0;Rt<gt;Rt++)At[Rt]=arguments[Rt+2];yt.children=At}return I(U.type,Q,void 0,void 0,ut,yt)},oe.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},oe.createElement=function(U,$,_t){var yt,Q={},ut=null;if($!=null)for(yt in $.key!==void 0&&(ut=""+$.key),$)B.call($,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Q[yt]=$[yt]);var gt=arguments.length-2;if(gt===1)Q.children=_t;else if(1<gt){for(var At=Array(gt),Rt=0;Rt<gt;Rt++)At[Rt]=arguments[Rt+2];Q.children=At}if(U&&U.defaultProps)for(yt in gt=U.defaultProps,gt)Q[yt]===void 0&&(Q[yt]=gt[yt]);return I(U,ut,void 0,void 0,null,Q)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(U){return{$$typeof:d,render:U}},oe.isValidElement=C,oe.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:q}},oe.memo=function(U,$){return{$$typeof:p,type:U,compare:$===void 0?null:$}},oe.startTransition=function(U){var $=F.T,_t={};F.T=_t;try{var yt=U(),Q=F.S;Q!==null&&Q(_t,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(St,W)}catch(ut){W(ut)}finally{F.T=$}},oe.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},oe.use=function(U){return F.H.use(U)},oe.useActionState=function(U,$,_t){return F.H.useActionState(U,$,_t)},oe.useCallback=function(U,$){return F.H.useCallback(U,$)},oe.useContext=function(U){return F.H.useContext(U)},oe.useDebugValue=function(){},oe.useDeferredValue=function(U,$){return F.H.useDeferredValue(U,$)},oe.useEffect=function(U,$,_t){var yt=F.H;if(typeof _t=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(U,$)},oe.useId=function(){return F.H.useId()},oe.useImperativeHandle=function(U,$,_t){return F.H.useImperativeHandle(U,$,_t)},oe.useInsertionEffect=function(U,$){return F.H.useInsertionEffect(U,$)},oe.useLayoutEffect=function(U,$){return F.H.useLayoutEffect(U,$)},oe.useMemo=function(U,$){return F.H.useMemo(U,$)},oe.useOptimistic=function(U,$){return F.H.useOptimistic(U,$)},oe.useReducer=function(U,$,_t){return F.H.useReducer(U,$,_t)},oe.useRef=function(U){return F.H.useRef(U)},oe.useState=function(U){return F.H.useState(U)},oe.useSyncExternalStore=function(U,$,_t){return F.H.useSyncExternalStore(U,$,_t)},oe.useTransition=function(){return F.H.useTransition()},oe.version="19.1.0",oe}var m_;function Td(){return m_||(m_=1,Kf.exports=_S()),Kf.exports}var Pn=Td(),Qf={exports:{}},Ao={},Jf={exports:{}},$f={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function vS(){return g_||(g_=1,function(r){function t(N,q){var W=N.length;N.push(q);t:for(;0<W;){var St=W-1>>>1,U=N[St];if(0<l(U,q))N[St]=q,N[W]=U,W=St;else break t}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var q=N[0],W=N.pop();if(W!==q){N[0]=W;t:for(var St=0,U=N.length,$=U>>>1;St<$;){var _t=2*(St+1)-1,yt=N[_t],Q=_t+1,ut=N[Q];if(0>l(yt,W))Q<U&&0>l(ut,yt)?(N[St]=ut,N[Q]=W,St=Q):(N[St]=yt,N[_t]=W,St=_t);else if(Q<U&&0>l(ut,W))N[St]=ut,N[Q]=W,St=Q;else break t}}return q}function l(N,q){var W=N.sortIndex-q.sortIndex;return W!==0?W:N.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,v=3,y=!1,E=!1,b=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(N){for(var q=i(p);q!==null;){if(q.callback===null)s(p);else if(q.startTime<=N)s(p),q.sortIndex=q.expirationTime,t(m,q);else break;q=i(p)}}function F(N){if(b=!1,D(N),!E)if(i(m)!==null)E=!0,B||(B=!0,it());else{var q=i(p);q!==null&&lt(F,q.startTime-N)}}var B=!1,I=-1,V=5,C=-1;function w(){return S?!0:!(r.unstable_now()-C<V)}function G(){if(S=!1,B){var N=r.unstable_now();C=N;var q=!0;try{t:{E=!1,b&&(b=!1,P(I),I=-1),y=!0;var W=v;try{e:{for(D(N),_=i(m);_!==null&&!(_.expirationTime>N&&w());){var St=_.callback;if(typeof St=="function"){_.callback=null,v=_.priorityLevel;var U=St(_.expirationTime<=N);if(N=r.unstable_now(),typeof U=="function"){_.callback=U,D(N),q=!0;break e}_===i(m)&&s(m),D(N)}else s(m);_=i(m)}if(_!==null)q=!0;else{var $=i(p);$!==null&&lt(F,$.startTime-N),q=!1}}break t}finally{_=null,v=W,y=!1}q=void 0}}finally{q?it():B=!1}}}var it;if(typeof L=="function")it=function(){L(G)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ft=at.port2;at.port1.onmessage=G,it=function(){ft.postMessage(null)}}else it=function(){x(G,0)};function lt(N,q){I=x(function(){N(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(N){switch(v){case 1:case 2:case 3:var q=3;break;default:q=v}var W=v;v=q;try{return N()}finally{v=W}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(N,q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var W=v;v=N;try{return q()}finally{v=W}},r.unstable_scheduleCallback=function(N,q,W){var St=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?St+W:St):W=St,N){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=W+U,N={id:g++,callback:q,priorityLevel:N,startTime:W,expirationTime:U,sortIndex:-1},W>St?(N.sortIndex=W,t(p,N),i(m)===null&&N===i(p)&&(b?(P(I),I=-1):b=!0,lt(F,W-St))):(N.sortIndex=U,t(m,N),E||y||(E=!0,B||(B=!0,it()))),N},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(N){var q=v;return function(){var W=v;v=q;try{return N.apply(this,arguments)}finally{v=W}}}}($f)),$f}var __;function xS(){return __||(__=1,Jf.exports=vS()),Jf.exports}var th={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function SS(){if(v_)return Dn;v_=1;var r=Td();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Dn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Dn.requestFormReset=function(m){s.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Dn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Dn.version="19.1.0",Dn}var x_;function yS(){if(x_)return th.exports;x_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),th.exports=SS(),th.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function MS(){if(S_)return Ao;S_=1;var r=xS(),t=Td(),i=yS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),e;if(f===o)return d(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var M=!1,A=u.child;A;){if(A===a){M=!0,a=u,o=f;break}if(A===o){M=!0,o=u,a=f;break}A=A.sibling}if(!M){for(A=f.child;A;){if(A===a){M=!0,a=f,o=u;break}if(A===o){M=!0,o=f,a=u;break}A=A.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),P=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function it(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case b:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case L:return(e.displayName||"Context")+".Provider";case P:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case V:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var lt=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},St=[],U=-1;function $(e){return{current:e}}function _t(e){0>U||(e.current=St[U],St[U]=null,U--)}function yt(e,n){U++,St[U]=e.current,e.current=n}var Q=$(null),ut=$(null),gt=$(null),At=$(null);function Rt(e,n){switch(yt(gt,n),yt(ut,e),yt(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Hg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Hg(n),e=Gg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_t(Q),yt(Q,e)}function re(){_t(Q),_t(ut),_t(gt)}function Qt(e){e.memoizedState!==null&&yt(At,e);var n=Q.current,a=Gg(n,e.type);n!==a&&(yt(ut,e),yt(Q,a))}function Ne(e){ut.current===e&&(_t(Q),_t(ut)),At.current===e&&(_t(At),So._currentValue=W)}var Fe=Object.prototype.hasOwnProperty,ve=r.unstable_scheduleCallback,H=r.unstable_cancelCallback,yn=r.unstable_shouldYield,Ee=r.unstable_requestPaint,pe=r.unstable_now,Vt=r.unstable_getCurrentPriorityLevel,xe=r.unstable_ImmediatePriority,jt=r.unstable_UserBlockingPriority,ae=r.unstable_NormalPriority,Je=r.unstable_LowPriority,O=r.unstable_IdlePriority,T=r.log,et=r.unstable_setDisableYieldValue,dt=null,mt=null;function ct(e){if(typeof T=="function"&&et(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(dt,e)}catch{}}var Ot=Math.clz32?Math.clz32:kt,Dt=Math.log,Gt=Math.LN2;function kt(e){return e>>>=0,e===0?32:31-(Dt(e)/Gt|0)|0}var Mt=256,Pt=4194304;function qt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Yt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=qt(o):(M&=A,M!==0?u=qt(M):a||(a=A&~e,a!==0&&(u=qt(a))))):(A=o&~f,A!==0?u=qt(A):M!==0?u=qt(M):a||(a=o&~e,a!==0&&(u=qt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function wt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),e}function Ut(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Et(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function zt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bt(e,n,a,o,u,f){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,z=e.expirationTimes,tt=e.hiddenUpdates;for(a=M&~a;0<a;){var ht=31-Ot(a),vt=1<<ht;A[ht]=0,z[ht]=-1;var nt=tt[ht];if(nt!==null)for(tt[ht]=null,ht=0;ht<nt.length;ht++){var st=nt[ht];st!==null&&(st.lane&=-536870913)}a&=~vt}o!==0&&xt(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(M&~n))}function xt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ot(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Bt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ot(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ne(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function De(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function be(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:r_(e.type))}function Wn(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var dn=Math.random().toString(36).slice(2),rn="__reactFiber$"+dn,Mn="__reactProps$"+dn,zn="__reactContainer$"+dn,Za="__reactEvents$"+dn,Yo="__reactListeners$"+dn,jo="__reactHandles$"+dn,Ka="__reactResources$"+dn,fa="__reactMarker$"+dn;function ha(e){delete e[rn],delete e[Mn],delete e[Za],delete e[Yo],delete e[jo]}function zi(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[zn]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Wg(e);e!==null;){if(a=e[rn])return a;e=Wg(e)}return n}e=a,a=e.parentNode}return null}function Ii(e){if(e=e[rn]||e[zn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Qa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function da(e){var n=e[Ka];return n||(n=e[Ka]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(e){e[fa]=!0}var Zo=new Set,Ko={};function Bi(e,n){R(e,n),R(e+"Capture",n)}function R(e,n){for(Ko[e]=n,e=0;e<n.length;e++)Zo.add(n[e])}var j=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},ot={};function K(e){return Fe.call(ot,e)?!0:Fe.call(rt,e)?!1:j.test(e)?ot[e]=!0:(rt[e]=!0,!1)}function Tt(e,n,a){if(K(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ct(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Nt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var It,$t;function Zt(e){if(It===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);It=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+e+$t}var Xt=!1;function ue(e,n){if(!e||Xt)return"";Xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(st){var nt=st}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(st){nt=st}e.call(vt.prototype)}}else{try{throw Error()}catch(st){nt=st}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(st){if(st&&nt&&typeof st.stack=="string")return[st.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),M=f[0],A=f[1];if(M&&A){var z=M.split(`
`),tt=A.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===tt.length)for(o=z.length-1,u=tt.length-1;1<=o&&0<=u&&z[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==tt[u]){var ht=`
`+z[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{Xt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Zt(a):""}function we(e){switch(e.tag){case 26:case 27:case 5:return Zt(e.type);case 16:return Zt("Lazy");case 13:return Zt("Suspense");case 19:return Zt("SuspenseList");case 0:case 15:return ue(e.type,!1);case 11:return ue(e.type.render,!1);case 1:return ue(e.type,!0);case 31:return Zt("Activity");default:return""}}function Ve(e){try{var n="";do n+=we(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Se(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(e){var n=ye(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,f.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function je(e){e._valueTracker||(e._valueTracker=Kt(e))}function Te(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ye(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Rn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var pa=/[\n"\\]/g;function ke(e){return e.replace(pa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fi(e,n,a,o,u,f,M,A){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Se(n)):e.value!==""+Se(n)&&(e.value=""+Se(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?wn(e,M,Se(n)):a!=null?wn(e,M,Se(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Se(A):e.removeAttribute("name")}function He(e,n,a,o,u,f,M,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+Se(a):"",n=n!=null?""+Se(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function wn(e,n,a){n==="number"&&Rn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function on(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Se(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function pn(e,n,a){if(n!=null&&(n=""+Se(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Se(a):""}function En(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(lt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Se(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Ti(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Hi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Hi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Gd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Hd(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Hd(e,f,n[f])}function Yc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qo(e){return pv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var jc=null;function Zc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cs=null,Ds=null;function Vd(e){var n=Ii(e);if(n&&(e=n.stateNode)){var a=e[Mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Fi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ke(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Mn]||null;if(!u)throw Error(s(90));Fi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Te(o)}break t;case"textarea":pn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&on(e,!!a.multiple,n,!1)}}}var Kc=!1;function kd(e,n,a){if(Kc)return e(n,a);Kc=!0;try{var o=e(n);return o}finally{if(Kc=!1,(Cs!==null||Ds!==null)&&(zl(),Cs&&(n=Cs,e=Ds,Ds=Cs=null,Vd(n),e)))for(n=0;n<e.length;n++)Vd(e[n])}}function Lr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Mn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=!1;if(Gi)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{Qc=!1}var ma=null,Jc=null,Jo=null;function Xd(){if(Jo)return Jo;var e,n=Jc,a=n.length,o,u="value"in ma?ma.value:ma.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[f-o];o++);return Jo=u.slice(e,1<o?1-o:void 0)}function $o(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function Wd(){return!1}function In(e){function n(a,o,u,f,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=M,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tl:Wd,this.isPropagationStopped=Wd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=In(Ja),Or=g({},Ja,{view:0,detail:0}),mv=In(Or),$c,tu,Pr,nl=g({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?($c=e.screenX-Pr.screenX,tu=e.screenY-Pr.screenY):tu=$c=0,Pr=e),$c)},movementY:function(e){return"movementY"in e?e.movementY:tu}}),qd=In(nl),gv=g({},nl,{dataTransfer:0}),_v=In(gv),vv=g({},Or,{relatedTarget:0}),eu=In(vv),xv=g({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Sv=In(xv),yv=g({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mv=In(yv),Ev=g({},Ja,{data:0}),Yd=In(Ev),Tv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Av={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Av[e])?!!n[e]:!1}function nu(){return Rv}var wv=g({},Or,{key:function(e){if(e.key){var n=Tv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=$o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(e){return e.type==="keypress"?$o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cv=In(wv),Dv=g({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=In(Dv),Uv=g({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),Lv=In(Uv),Nv=g({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ov=In(Nv),Pv=g({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zv=In(Pv),Iv=g({},Ja,{newState:0,oldState:0}),Bv=In(Iv),Fv=[9,13,27,32],iu=Gi&&"CompositionEvent"in window,zr=null;Gi&&"documentMode"in document&&(zr=document.documentMode);var Hv=Gi&&"TextEvent"in window&&!zr,Zd=Gi&&(!iu||zr&&8<zr&&11>=zr),Kd=" ",Qd=!1;function Jd(e,n){switch(e){case"keyup":return Fv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $d(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Us=!1;function Gv(e,n){switch(e){case"compositionend":return $d(n);case"keypress":return n.which!==32?null:(Qd=!0,Kd);case"textInput":return e=n.data,e===Kd&&Qd?null:e;default:return null}}function Vv(e,n){if(Us)return e==="compositionend"||!iu&&Jd(e,n)?(e=Xd(),Jo=Jc=ma=null,Us=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zd&&n.locale!=="ko"?null:n.data;default:return null}}var kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!kv[e.type]:n==="textarea"}function ep(e,n,a,o){Cs?Ds?Ds.push(o):Ds=[o]:Cs=o,n=Vl(n,"onChange"),0<n.length&&(a=new el("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Ir=null,Br=null;function Xv(e){Pg(e,0)}function il(e){var n=Qa(e);if(Te(n))return e}function np(e,n){if(e==="change")return n}var ip=!1;if(Gi){var au;if(Gi){var su="oninput"in document;if(!su){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),su=typeof ap.oninput=="function"}au=su}else au=!1;ip=au&&(!document.documentMode||9<document.documentMode)}function sp(){Ir&&(Ir.detachEvent("onpropertychange",rp),Br=Ir=null)}function rp(e){if(e.propertyName==="value"&&il(Br)){var n=[];ep(n,Br,e,Zc(e)),kd(Xv,n)}}function Wv(e,n,a){e==="focusin"?(sp(),Ir=n,Br=a,Ir.attachEvent("onpropertychange",rp)):e==="focusout"&&sp()}function qv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return il(Br)}function Yv(e,n){if(e==="click")return il(n)}function jv(e,n){if(e==="input"||e==="change")return il(n)}function Zv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:Zv;function Fr(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Fe.call(n,u)||!qn(e[u],n[u]))return!1}return!0}function op(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lp(e,n){var a=op(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=op(a)}}function cp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?cp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function up(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Rn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Rn(e.document)}return n}function ru(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Kv=Gi&&"documentMode"in document&&11>=document.documentMode,Ls=null,ou=null,Hr=null,lu=!1;function fp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lu||Ls==null||Ls!==Rn(o)||(o=Ls,"selectionStart"in o&&ru(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Hr&&Fr(Hr,o)||(Hr=o,o=Vl(ou,"onSelect"),0<o.length&&(n=new el("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ls)))}function $a(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ns={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},cu={},hp={};Gi&&(hp=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function ts(e){if(cu[e])return cu[e];if(!Ns[e])return e;var n=Ns[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in hp)return cu[e]=n[a];return e}var dp=ts("animationend"),pp=ts("animationiteration"),mp=ts("animationstart"),Qv=ts("transitionrun"),Jv=ts("transitionstart"),$v=ts("transitioncancel"),gp=ts("transitionend"),_p=new Map,uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uu.push("scrollEnd");function pi(e,n){_p.set(e,n),Bi(n,[e])}var vp=new WeakMap;function ai(e,n){if(typeof e=="object"&&e!==null){var a=vp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ve(n)},vp.set(e,n),n)}return{value:e,source:n,stack:Ve(n)}}var si=[],Os=0,fu=0;function al(){for(var e=Os,n=fu=Os=0;n<e;){var a=si[n];si[n++]=null;var o=si[n];si[n++]=null;var u=si[n];si[n++]=null;var f=si[n];if(si[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}f!==0&&xp(a,u,f)}}function sl(e,n,a,o){si[Os++]=e,si[Os++]=n,si[Os++]=a,si[Os++]=o,fu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function hu(e,n,a,o){return sl(e,n,a,o),rl(e)}function Ps(e,n){return sl(e,null,null,n),rl(e)}function xp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ot(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function rl(e){if(50<fo)throw fo=0,xf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zs={};function tx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,o){return new tx(e,n,a,o)}function du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vi(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Sp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ol(e,n,a,o,u,f){var M=0;if(o=e,typeof e=="function")du(e)&&(M=1);else if(typeof e=="string")M=nS(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=Yn(31,a,n,u),e.elementType=C,e.lanes=f,e;case E:return es(a.children,u,f,n);case b:M=8,u|=24;break;case S:return e=Yn(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case F:return e=Yn(13,a,n,u),e.elementType=F,e.lanes=f,e;case B:return e=Yn(19,a,n,u),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case L:M=10;break t;case P:M=9;break t;case D:M=11;break t;case I:M=14;break t;case V:M=16,o=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Yn(M,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function es(e,n,a,o){return e=Yn(7,e,o,n),e.lanes=a,e}function pu(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function mu(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Is=[],Bs=0,ll=null,cl=0,ri=[],oi=0,ns=null,ki=1,Xi="";function is(e,n){Is[Bs++]=cl,Is[Bs++]=ll,ll=e,cl=n}function yp(e,n,a){ri[oi++]=ki,ri[oi++]=Xi,ri[oi++]=ns,ns=e;var o=ki;e=Xi;var u=32-Ot(o)-1;o&=~(1<<u),a+=1;var f=32-Ot(n)+u;if(30<f){var M=u-u%5;f=(o&(1<<M)-1).toString(32),o>>=M,u-=M,ki=1<<32-Ot(n)+u|a<<u|o,Xi=f+e}else ki=1<<f|a<<u|o,Xi=e}function gu(e){e.return!==null&&(is(e,1),yp(e,1,0))}function _u(e){for(;e===ll;)ll=Is[--Bs],Is[Bs]=null,cl=Is[--Bs],Is[Bs]=null;for(;e===ns;)ns=ri[--oi],ri[oi]=null,Xi=ri[--oi],ri[oi]=null,ki=ri[--oi],ri[oi]=null}var Nn=null,Ze=null,Ce=!1,as=null,bi=!1,vu=Error(s(519));function ss(e){var n=Error(s(418,""));throw kr(ai(n,e)),vu}function Mp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[rn]=e,n[Mn]=o,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)ge(po[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),He(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),je(n);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),En(n,o.value,o.defaultValue,o.children),je(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Fg(n.textContent,a)?(o.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),o.onScroll!=null&&ge("scroll",n),o.onScrollEnd!=null&&ge("scrollend",n),o.onClick!=null&&(n.onclick=kl),n=!0):n=!1,n||ss(e)}function Ep(e){for(Nn=e.return;Nn;)switch(Nn.tag){case 5:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:Nn=Nn.return}}function Gr(e){if(e!==Nn)return!1;if(!Ce)return Ep(e),Ce=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Pf(e.type,e.memoizedProps)),a=!a),a&&Ze&&ss(e),Ep(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ze=gi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ze=null}}else n===27?(n=Ze,Ua(e.type)?(e=Ff,Ff=null,Ze=e):Ze=n):Ze=Nn?gi(e.stateNode.nextSibling):null;return!0}function Vr(){Ze=Nn=null,Ce=!1}function Tp(){var e=as;return e!==null&&(Hn===null?Hn=e:Hn.push.apply(Hn,e),as=null),e}function kr(e){as===null?as=[e]:as.push(e)}var xu=$(null),rs=null,Wi=null;function ga(e,n,a){yt(xu,n._currentValue),n._currentValue=a}function qi(e){e._currentValue=xu.current,_t(xu)}function Su(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function yu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var M=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var z=0;z<n.length;z++)if(A.context===n[z]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Su(f.return,a,e),o||(M=null);break t}f=A.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,f=M.alternate,f!==null&&(f.lanes|=a),Su(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Xr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var A=u.type;qn(u.pendingProps.value,M.value)||(e!==null?e.push(A):e=[A])}}else if(u===At.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(So):e=[So])}u=u.return}e!==null&&yu(n,e,a,o),n.flags|=262144}function ul(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function os(e){rs=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return bp(rs,e)}function fl(e,n){return rs===null&&os(e),bp(e,n)}function bp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Wi===null){if(e===null)throw Error(s(308));Wi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Wi=Wi.next=n;return a}var ex=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},nx=r.unstable_scheduleCallback,ix=r.unstable_NormalPriority,ln={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new ex,data:new Map,refCount:0}}function Wr(e){e.refCount--,e.refCount===0&&nx(ix,function(){e.controller.abort()})}var qr=null,Eu=0,Fs=0,Hs=null;function ax(e,n){if(qr===null){var a=qr=[];Eu=0,Fs=Af(),Hs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Eu++,n.then(Ap,Ap),n}function Ap(){if(--Eu===0&&qr!==null){Hs!==null&&(Hs.status="fulfilled");var e=qr;qr=null,Fs=0,Hs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function sx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Rp=N.S;N.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&ax(e,n),Rp!==null&&Rp(e,n)};var ls=$(null);function Tu(){var e=ls.current;return e!==null?e:Xe.pooledCache}function hl(e,n){n===null?yt(ls,ls.current):yt(ls,n.pool)}function wp(){var e=Tu();return e===null?null:{parent:ln._currentValue,pool:e}}var Yr=Error(s(460)),Cp=Error(s(474)),dl=Error(s(542)),bu={then:function(){}};function Dp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pl(){}function Up(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(pl,pl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Np(e),e;default:if(typeof n.status=="string")n.then(pl,pl);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Np(e),e}throw jr=n,Yr}}var jr=null;function Lp(){if(jr===null)throw Error(s(459));var e=jr;return jr=null,e}function Np(e){if(e===Yr||e===dl)throw Error(s(483))}var _a=!1;function Au(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ru(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ue&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=rl(e),xp(e,null,a),n}return sl(e,o,n,a),rl(e)}function Zr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Bt(e,a)}}function wu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=M:f=f.next=M,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Cu=!1;function Kr(){if(Cu){var e=Hs;if(e!==null)throw e}}function Qr(e,n,a,o){Cu=!1;var u=e.updateQueue;_a=!1;var f=u.firstBaseUpdate,M=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var z=A,tt=z.next;z.next=null,M===null?f=tt:M.next=tt,M=z;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,A=ht.lastBaseUpdate,A!==M&&(A===null?ht.firstBaseUpdate=tt:A.next=tt,ht.lastBaseUpdate=z))}if(f!==null){var vt=u.baseState;M=0,ht=tt=z=null,A=f;do{var nt=A.lane&-536870913,st=nt!==A.lane;if(st?(Me&nt)===nt:(o&nt)===nt){nt!==0&&nt===Fs&&(Cu=!0),ht!==null&&(ht=ht.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ee=e,Jt=A;nt=n;var ze=a;switch(Jt.tag){case 1:if(ee=Jt.payload,typeof ee=="function"){vt=ee.call(ze,vt,nt);break t}vt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=Jt.payload,nt=typeof ee=="function"?ee.call(ze,vt,nt):ee,nt==null)break t;vt=g({},vt,nt);break t;case 2:_a=!0}}nt=A.callback,nt!==null&&(e.flags|=64,st&&(e.flags|=8192),st=u.callbacks,st===null?u.callbacks=[nt]:st.push(nt))}else st={lane:nt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ht===null?(tt=ht=st,z=vt):ht=ht.next=st,M|=nt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;st=A,A=st.next,st.next=null,u.lastBaseUpdate=st,u.shared.pending=null}}while(!0);ht===null&&(z=vt),u.baseState=z,u.firstBaseUpdate=tt,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),Ra|=M,e.lanes=M,e.memoizedState=vt}}function Op(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Pp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Op(a[e],n)}var Gs=$(null),ml=$(0);function zp(e,n){e=$i,yt(ml,e),yt(Gs,n),$i=e|n.baseLanes}function Du(){yt(ml,$i),yt(Gs,Gs.current)}function Uu(){$i=ml.current,_t(Gs),_t(ml)}var Sa=0,fe=null,Oe=null,nn=null,gl=!1,Vs=!1,cs=!1,_l=0,Jr=0,ks=null,rx=0;function $e(){throw Error(s(321))}function Lu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function Nu(e,n,a,o,u,f){return Sa=f,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?xm:Sm,cs=!1,f=a(o,u),cs=!1,Vs&&(f=Bp(n,a,o,u)),Ip(e),f}function Ip(e){N.H=El;var n=Oe!==null&&Oe.next!==null;if(Sa=0,nn=Oe=fe=null,gl=!1,Jr=0,ks=null,n)throw Error(s(300));e===null||mn||(e=e.dependencies,e!==null&&ul(e)&&(mn=!0))}function Bp(e,n,a,o){fe=e;var u=0;do{if(Vs&&(ks=null),Jr=0,Vs=!1,25<=u)throw Error(s(301));if(u+=1,nn=Oe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=dx,f=n(a,o)}while(Vs);return f}function ox(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?$r(n):n,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(fe.flags|=1024),n}function Ou(){var e=_l!==0;return _l=0,e}function Pu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function zu(e){if(gl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}gl=!1}Sa=0,nn=Oe=fe=null,Vs=!1,Jr=_l=0,ks=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?fe.memoizedState=nn=e:nn=nn.next=e,nn}function an(){if(Oe===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var n=nn===null?fe.memoizedState:nn.next;if(n!==null)nn=n,Oe=e;else{if(e===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},nn===null?fe.memoizedState=nn=e:nn=nn.next=e}return nn}function Iu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $r(e){var n=Jr;return Jr+=1,ks===null&&(ks=[]),e=Up(ks,e,n),n=fe,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?xm:Sm),e}function vl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $r(e);if(e.$$typeof===L)return Cn(e)}throw Error(s(438,String(e)))}function Bu(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Iu(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function Yi(e,n){return typeof n=="function"?n(e):n}function xl(e){var n=an();return Fu(n,Oe,e)}function Fu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var M=u.next;u.next=f.next,f.next=M}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=M=null,z=null,tt=n,ht=!1;do{var vt=tt.lane&-536870913;if(vt!==tt.lane?(Me&vt)===vt:(Sa&vt)===vt){var nt=tt.revertLane;if(nt===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),vt===Fs&&(ht=!0);else if((Sa&nt)===nt){tt=tt.next,nt===Fs&&(ht=!0);continue}else vt={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},z===null?(A=z=vt,M=f):z=z.next=vt,fe.lanes|=nt,Ra|=nt;vt=tt.action,cs&&a(f,vt),f=tt.hasEagerState?tt.eagerState:a(f,vt)}else nt={lane:vt,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},z===null?(A=z=nt,M=f):z=z.next=nt,fe.lanes|=vt,Ra|=vt;tt=tt.next}while(tt!==null&&tt!==n);if(z===null?M=f:z.next=A,!qn(f,e.memoizedState)&&(mn=!0,ht&&(a=Hs,a!==null)))throw a;e.memoizedState=f,e.baseState=M,e.baseQueue=z,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Hu(e){var n=an(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do f=e(f,M.action),M=M.next;while(M!==u);qn(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Fp(e,n,a){var o=fe,u=an(),f=Ce;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!qn((Oe||u).memoizedState,a);M&&(u.memoizedState=a,mn=!0),u=u.queue;var A=Vp.bind(null,o,u,e);if(to(2048,8,A,[e]),u.getSnapshot!==n||M||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,Xs(9,Sl(),Gp.bind(null,o,u,a,n),null),Xe===null)throw Error(s(349));f||(Sa&124)!==0||Hp(o,n,a)}return a}function Hp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=Iu(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Gp(e,n,a,o){n.value=a,n.getSnapshot=o,kp(n)&&Xp(e)}function Vp(e,n,a){return a(function(){kp(n)&&Xp(e)})}function kp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function Xp(e){var n=Ps(e,2);n!==null&&Jn(n,e,2)}function Gu(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),cs){ct(!0);try{a()}finally{ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:e},n}function Wp(e,n,a,o){return e.baseState=a,Fu(e,Oe,typeof o=="function"?o:Yi)}function lx(e,n,a,o,u){if(Ml(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){f.listeners.push(M)}};N.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,qp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function qp(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=N.T,M={};N.T=M;try{var A=a(u,o),z=N.S;z!==null&&z(M,A),Yp(e,n,A)}catch(tt){Vu(e,n,tt)}finally{N.T=f}}else try{f=a(u,o),Yp(e,n,f)}catch(tt){Vu(e,n,tt)}}function Yp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){jp(e,n,o)},function(o){return Vu(e,n,o)}):jp(e,n,a)}function jp(e,n,a){n.status="fulfilled",n.value=a,Zp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,qp(e,a)))}function Vu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Zp(n),n=n.next;while(n!==o)}e.action=null}function Zp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Kp(e,n){return n}function Qp(e,n){if(Ce){var a=Xe.formState;if(a!==null){t:{var o=fe;if(Ce){if(Ze){e:{for(var u=Ze,f=bi;u.nodeType!==8;){if(!f){u=null;break e}if(u=gi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ze=gi(u.nextSibling),o=u.data==="F!";break t}}ss(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kp,lastRenderedState:n},a.queue=o,a=gm.bind(null,fe,o),o.dispatch=a,o=Gu(!1),f=Yu.bind(null,fe,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=lx.bind(null,fe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Jp(e){var n=an();return $p(n,Oe,e)}function $p(e,n,a){if(n=Fu(e,n,Kp)[0],e=xl(Yi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=$r(n)}catch(M){throw M===Yr?dl:M}else o=n;n=an();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,Xs(9,Sl(),cx.bind(null,u,a),null)),[o,f,e]}function cx(e,n){e.action=n}function tm(e){var n=an(),a=Oe;if(a!==null)return $p(n,a,e);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Xs(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=fe.updateQueue,n===null&&(n=Iu(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Sl(){return{destroy:void 0,resource:void 0}}function em(){return an().memoizedState}function yl(e,n,a,o){var u=Bn();o=o===void 0?null:o,fe.flags|=e,u.memoizedState=Xs(1|n,Sl(),a,o)}function to(e,n,a,o){var u=an();o=o===void 0?null:o;var f=u.memoizedState.inst;Oe!==null&&o!==null&&Lu(o,Oe.memoizedState.deps)?u.memoizedState=Xs(n,f,a,o):(fe.flags|=e,u.memoizedState=Xs(1|n,f,a,o))}function nm(e,n){yl(8390656,8,e,n)}function im(e,n){to(2048,8,e,n)}function am(e,n){return to(4,2,e,n)}function sm(e,n){return to(4,4,e,n)}function rm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function om(e,n,a){a=a!=null?a.concat([e]):null,to(4,4,rm.bind(null,n,e),a)}function ku(){}function lm(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Lu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function cm(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Lu(n,o[1]))return o[0];if(o=e(),cs){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[o,n],o}function Xu(e,n,a){return a===void 0||(Sa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=hg(),fe.lanes|=e,Ra|=e,a)}function um(e,n,a,o){return qn(a,n)?a:Gs.current!==null?(e=Xu(e,a,o),qn(e,n)||(mn=!0),e):(Sa&42)===0?(mn=!0,e.memoizedState=a):(e=hg(),fe.lanes|=e,Ra|=e,n)}function fm(e,n,a,o,u){var f=q.p;q.p=f!==0&&8>f?f:8;var M=N.T,A={};N.T=A,Yu(e,!1,n,a);try{var z=u(),tt=N.S;if(tt!==null&&tt(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ht=sx(z,o);eo(e,n,ht,Qn(e))}else eo(e,n,o,Qn(e))}catch(vt){eo(e,n,{then:function(){},status:"rejected",reason:vt},Qn())}finally{q.p=f,N.T=M}}function ux(){}function Wu(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=hm(e).queue;fm(e,u,n,W,a===null?ux:function(){return dm(e),a(o)})}function hm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function dm(e){var n=hm(e).next.queue;eo(e,n,{},Qn())}function qu(){return Cn(So)}function pm(){return an().memoizedState}function mm(){return an().memoizedState}function fx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=va(a);var o=xa(n,e,a);o!==null&&(Jn(o,n,a),Zr(o,n,a)),n={cache:Mu()},e.payload=n;return}n=n.return}}function hx(e,n,a){var o=Qn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ml(e)?_m(n,a):(a=hu(e,n,a,o),a!==null&&(Jn(a,e,o),vm(a,n,o)))}function gm(e,n,a){var o=Qn();eo(e,n,a,o)}function eo(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ml(e))_m(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var M=n.lastRenderedState,A=f(M,a);if(u.hasEagerState=!0,u.eagerState=A,qn(A,M))return sl(e,n,u,0),Xe===null&&al(),!1}catch{}finally{}if(a=hu(e,n,u,o),a!==null)return Jn(a,e,o),vm(a,n,o),!0}return!1}function Yu(e,n,a,o){if(o={lane:2,revertLane:Af(),action:o,hasEagerState:!1,eagerState:null,next:null},Ml(e)){if(n)throw Error(s(479))}else n=hu(e,a,o,2),n!==null&&Jn(n,e,2)}function Ml(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function _m(e,n){Vs=gl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function vm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Bt(e,a)}}var El={readContext:Cn,use:vl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e},xm={readContext:Cn,use:vl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:nm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,yl(4194308,4,rm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return yl(4194308,4,e,n)},useInsertionEffect:function(e,n){yl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(cs){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(cs){ct(!0);try{a(n)}finally{ct(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=hx.bind(null,fe,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=Gu(e);var n=e.queue,a=gm.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ku,useDeferredValue:function(e,n){var a=Bn();return Xu(a,e,n)},useTransition:function(){var e=Gu(!1);return e=fm.bind(null,fe,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=fe,u=Bn();if(Ce){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(Me&124)!==0||Hp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,nm(Vp.bind(null,o,f,e),[e]),o.flags|=2048,Xs(9,Sl(),Gp.bind(null,o,f,a,n),null),a},useId:function(){var e=Bn(),n=Xe.identifierPrefix;if(Ce){var a=Xi,o=ki;a=(o&~(1<<32-Ot(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=_l++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=rx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:qu,useFormState:Qp,useActionState:Qp,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yu.bind(null,fe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Bu,useCacheRefresh:function(){return Bn().memoizedState=fx.bind(null,fe)}},Sm={readContext:Cn,use:vl,useCallback:lm,useContext:Cn,useEffect:im,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:sm,useMemo:cm,useReducer:xl,useRef:em,useState:function(){return xl(Yi)},useDebugValue:ku,useDeferredValue:function(e,n){var a=an();return um(a,Oe.memoizedState,e,n)},useTransition:function(){var e=xl(Yi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:$r(e),n]},useSyncExternalStore:Fp,useId:pm,useHostTransitionStatus:qu,useFormState:Jp,useActionState:Jp,useOptimistic:function(e,n){var a=an();return Wp(a,Oe,e,n)},useMemoCache:Bu,useCacheRefresh:mm},dx={readContext:Cn,use:vl,useCallback:lm,useContext:Cn,useEffect:im,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:sm,useMemo:cm,useReducer:Hu,useRef:em,useState:function(){return Hu(Yi)},useDebugValue:ku,useDeferredValue:function(e,n){var a=an();return Oe===null?Xu(a,e,n):um(a,Oe.memoizedState,e,n)},useTransition:function(){var e=Hu(Yi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:$r(e),n]},useSyncExternalStore:Fp,useId:pm,useHostTransitionStatus:qu,useFormState:tm,useActionState:tm,useOptimistic:function(e,n){var a=an();return Oe!==null?Wp(a,Oe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Bu,useCacheRefresh:mm},Ws=null,no=0;function Tl(e){var n=no;return no+=1,Ws===null&&(Ws=[]),Up(Ws,e,n)}function io(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function bl(e,n){throw n.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function ym(e){var n=e._init;return n(e._payload)}function Mm(e){function n(Y,k){if(e){var J=Y.deletions;J===null?(Y.deletions=[k],Y.flags|=16):J.push(k)}}function a(Y,k){if(!e)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function o(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function u(Y,k){return Y=Vi(Y,k),Y.index=0,Y.sibling=null,Y}function f(Y,k,J){return Y.index=J,e?(J=Y.alternate,J!==null?(J=J.index,J<k?(Y.flags|=67108866,k):J):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function M(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,k,J,pt){return k===null||k.tag!==6?(k=pu(J,Y.mode,pt),k.return=Y,k):(k=u(k,J),k.return=Y,k)}function z(Y,k,J,pt){var Ft=J.type;return Ft===E?ht(Y,k,J.props.children,pt,J.key):k!==null&&(k.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===V&&ym(Ft)===k.type)?(k=u(k,J.props),io(k,J),k.return=Y,k):(k=ol(J.type,J.key,J.props,null,Y.mode,pt),io(k,J),k.return=Y,k)}function tt(Y,k,J,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=mu(J,Y.mode,pt),k.return=Y,k):(k=u(k,J.children||[]),k.return=Y,k)}function ht(Y,k,J,pt,Ft){return k===null||k.tag!==7?(k=es(J,Y.mode,pt,Ft),k.return=Y,k):(k=u(k,J),k.return=Y,k)}function vt(Y,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=pu(""+k,Y.mode,J),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case v:return J=ol(k.type,k.key,k.props,null,Y.mode,J),io(J,k),J.return=Y,J;case y:return k=mu(k,Y.mode,J),k.return=Y,k;case V:var pt=k._init;return k=pt(k._payload),vt(Y,k,J)}if(lt(k)||it(k))return k=es(k,Y.mode,J,null),k.return=Y,k;if(typeof k.then=="function")return vt(Y,Tl(k),J);if(k.$$typeof===L)return vt(Y,fl(Y,k),J);bl(Y,k)}return null}function nt(Y,k,J,pt){var Ft=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ft!==null?null:A(Y,k,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case v:return J.key===Ft?z(Y,k,J,pt):null;case y:return J.key===Ft?tt(Y,k,J,pt):null;case V:return Ft=J._init,J=Ft(J._payload),nt(Y,k,J,pt)}if(lt(J)||it(J))return Ft!==null?null:ht(Y,k,J,pt,null);if(typeof J.then=="function")return nt(Y,k,Tl(J),pt);if(J.$$typeof===L)return nt(Y,k,fl(Y,J),pt);bl(Y,J)}return null}function st(Y,k,J,pt,Ft){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(J)||null,A(k,Y,""+pt,Ft);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case v:return Y=Y.get(pt.key===null?J:pt.key)||null,z(k,Y,pt,Ft);case y:return Y=Y.get(pt.key===null?J:pt.key)||null,tt(k,Y,pt,Ft);case V:var he=pt._init;return pt=he(pt._payload),st(Y,k,J,pt,Ft)}if(lt(pt)||it(pt))return Y=Y.get(J)||null,ht(k,Y,pt,Ft,null);if(typeof pt.then=="function")return st(Y,k,J,Tl(pt),Ft);if(pt.$$typeof===L)return st(Y,k,J,fl(k,pt),Ft);bl(k,pt)}return null}function ee(Y,k,J,pt){for(var Ft=null,he=null,Wt=k,te=k=0,_n=null;Wt!==null&&te<J.length;te++){Wt.index>te?(_n=Wt,Wt=null):_n=Wt.sibling;var Ae=nt(Y,Wt,J[te],pt);if(Ae===null){Wt===null&&(Wt=_n);break}e&&Wt&&Ae.alternate===null&&n(Y,Wt),k=f(Ae,k,te),he===null?Ft=Ae:he.sibling=Ae,he=Ae,Wt=_n}if(te===J.length)return a(Y,Wt),Ce&&is(Y,te),Ft;if(Wt===null){for(;te<J.length;te++)Wt=vt(Y,J[te],pt),Wt!==null&&(k=f(Wt,k,te),he===null?Ft=Wt:he.sibling=Wt,he=Wt);return Ce&&is(Y,te),Ft}for(Wt=o(Wt);te<J.length;te++)_n=st(Wt,Y,te,J[te],pt),_n!==null&&(e&&_n.alternate!==null&&Wt.delete(_n.key===null?te:_n.key),k=f(_n,k,te),he===null?Ft=_n:he.sibling=_n,he=_n);return e&&Wt.forEach(function(za){return n(Y,za)}),Ce&&is(Y,te),Ft}function Jt(Y,k,J,pt){if(J==null)throw Error(s(151));for(var Ft=null,he=null,Wt=k,te=k=0,_n=null,Ae=J.next();Wt!==null&&!Ae.done;te++,Ae=J.next()){Wt.index>te?(_n=Wt,Wt=null):_n=Wt.sibling;var za=nt(Y,Wt,Ae.value,pt);if(za===null){Wt===null&&(Wt=_n);break}e&&Wt&&za.alternate===null&&n(Y,Wt),k=f(za,k,te),he===null?Ft=za:he.sibling=za,he=za,Wt=_n}if(Ae.done)return a(Y,Wt),Ce&&is(Y,te),Ft;if(Wt===null){for(;!Ae.done;te++,Ae=J.next())Ae=vt(Y,Ae.value,pt),Ae!==null&&(k=f(Ae,k,te),he===null?Ft=Ae:he.sibling=Ae,he=Ae);return Ce&&is(Y,te),Ft}for(Wt=o(Wt);!Ae.done;te++,Ae=J.next())Ae=st(Wt,Y,te,Ae.value,pt),Ae!==null&&(e&&Ae.alternate!==null&&Wt.delete(Ae.key===null?te:Ae.key),k=f(Ae,k,te),he===null?Ft=Ae:he.sibling=Ae,he=Ae);return e&&Wt.forEach(function(pS){return n(Y,pS)}),Ce&&is(Y,te),Ft}function ze(Y,k,J,pt){if(typeof J=="object"&&J!==null&&J.type===E&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case v:t:{for(var Ft=J.key;k!==null;){if(k.key===Ft){if(Ft=J.type,Ft===E){if(k.tag===7){a(Y,k.sibling),pt=u(k,J.props.children),pt.return=Y,Y=pt;break t}}else if(k.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===V&&ym(Ft)===k.type){a(Y,k.sibling),pt=u(k,J.props),io(pt,J),pt.return=Y,Y=pt;break t}a(Y,k);break}else n(Y,k);k=k.sibling}J.type===E?(pt=es(J.props.children,Y.mode,pt,J.key),pt.return=Y,Y=pt):(pt=ol(J.type,J.key,J.props,null,Y.mode,pt),io(pt,J),pt.return=Y,Y=pt)}return M(Y);case y:t:{for(Ft=J.key;k!==null;){if(k.key===Ft)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){a(Y,k.sibling),pt=u(k,J.children||[]),pt.return=Y,Y=pt;break t}else{a(Y,k);break}else n(Y,k);k=k.sibling}pt=mu(J,Y.mode,pt),pt.return=Y,Y=pt}return M(Y);case V:return Ft=J._init,J=Ft(J._payload),ze(Y,k,J,pt)}if(lt(J))return ee(Y,k,J,pt);if(it(J)){if(Ft=it(J),typeof Ft!="function")throw Error(s(150));return J=Ft.call(J),Jt(Y,k,J,pt)}if(typeof J.then=="function")return ze(Y,k,Tl(J),pt);if(J.$$typeof===L)return ze(Y,k,fl(Y,J),pt);bl(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(a(Y,k.sibling),pt=u(k,J),pt.return=Y,Y=pt):(a(Y,k),pt=pu(J,Y.mode,pt),pt.return=Y,Y=pt),M(Y)):a(Y,k)}return function(Y,k,J,pt){try{no=0;var Ft=ze(Y,k,J,pt);return Ws=null,Ft}catch(Wt){if(Wt===Yr||Wt===dl)throw Wt;var he=Yn(29,Wt,null,Y.mode);return he.lanes=pt,he.return=Y,he}finally{}}}var qs=Mm(!0),Em=Mm(!1),li=$(null),Ai=null;function ya(e){var n=e.alternate;yt(cn,cn.current&1),yt(li,e),Ai===null&&(n===null||Gs.current!==null||n.memoizedState!==null)&&(Ai=e)}function Tm(e){if(e.tag===22){if(yt(cn,cn.current),yt(li,e),Ai===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ai=e)}}else Ma()}function Ma(){yt(cn,cn.current),yt(li,li.current)}function ji(e){_t(li),Ai===e&&(Ai=null),_t(cn)}var cn=$(0);function Al(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Bf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function ju(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Zu={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Qn(),u=va(o);u.payload=n,a!=null&&(u.callback=a),n=xa(e,u,o),n!==null&&(Jn(n,e,o),Zr(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Qn(),u=va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=xa(e,u,o),n!==null&&(Jn(n,e,o),Zr(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),o=va(a);o.tag=2,n!=null&&(o.callback=n),n=xa(e,o,a),n!==null&&(Jn(n,e,a),Zr(n,e,a))}};function bm(e,n,a,o,u,f,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,M):n.prototype&&n.prototype.isPureReactComponent?!Fr(a,o)||!Fr(u,f):!0}function Am(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Zu.enqueueReplaceState(n,n.state,null)}function us(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Rl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Rm(e){Rl(e)}function wm(e){console.error(e)}function Cm(e){Rl(e)}function wl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Dm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ku(e,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){wl(e,n)},a}function Um(e){return e=va(e),e.tag=3,e}function Lm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Dm(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Dm(n,a,o),typeof u!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function px(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Xr(n,a,u,!0),a=li.current,a!==null){switch(a.tag){case 13:return Ai===null?yf():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===bu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ef(e,o,u)),!1;case 22:return a.flags|=65536,o===bu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ef(e,o,u)),!1}throw Error(s(435,a.tag))}return Ef(e,o,u),yf(),!1}if(Ce)return n=li.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==vu&&(e=Error(s(422),{cause:o}),kr(ai(e,a)))):(o!==vu&&(n=Error(s(423),{cause:o}),kr(ai(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ai(o,a),u=Ku(e.stateNode,o,u),wu(e,u),Ke!==4&&(Ke=2)),!1;var f=Error(s(520),{cause:o});if(f=ai(f,a),uo===null?uo=[f]:uo.push(f),Ke!==4&&(Ke=2),n===null)return!0;o=ai(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Ku(a.stateNode,o,e),wu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(wa===null||!wa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Um(u),Lm(u,e,a,o),wu(a,u),!1}a=a.return}while(a!==null);return!1}var Nm=Error(s(461)),mn=!1;function Tn(e,n,a,o){n.child=e===null?Em(n,null,a,o):qs(n,e.child,a,o)}function Om(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var M={};for(var A in o)A!=="ref"&&(M[A]=o[A])}else M=o;return os(n),o=Nu(e,n,a,M,f,u),A=Ou(),e!==null&&!mn?(Pu(e,n,u),Zi(e,n,u)):(Ce&&A&&gu(n),n.flags|=1,Tn(e,n,o,u),n.child)}function Pm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!du(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,zm(e,n,f,o,u)):(e=ol(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!sf(e,u)){var M=f.memoizedProps;if(a=a.compare,a=a!==null?a:Fr,a(M,o)&&e.ref===n.ref)return Zi(e,n,u)}return n.flags|=1,e=Vi(f,o),e.ref=n.ref,e.return=n,n.child=e}function zm(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Fr(f,o)&&e.ref===n.ref)if(mn=!1,n.pendingProps=o=f,sf(e,u))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,Zi(e,n,u)}return Qu(e,n,a,o,u)}function Im(e,n,a){var o=n.pendingProps,u=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Bm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&hl(n,f!==null?f.cachePool:null),f!==null?zp(n,f):Du(),Tm(n);else return n.lanes=n.childLanes=536870912,Bm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(hl(n,f.cachePool),zp(n,f),Ma(),n.memoizedState=null):(e!==null&&hl(n,null),Du(),Ma());return Tn(e,n,u,a),n.child}function Bm(e,n,a,o){var u=Tu();return u=u===null?null:{parent:ln._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&hl(n,null),Du(),Tm(n),e!==null&&Xr(e,n,o,!0),null}function Cl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Qu(e,n,a,o,u){return os(n),a=Nu(e,n,a,o,void 0,u),o=Ou(),e!==null&&!mn?(Pu(e,n,u),Zi(e,n,u)):(Ce&&o&&gu(n),n.flags|=1,Tn(e,n,a,u),n.child)}function Fm(e,n,a,o,u,f){return os(n),n.updateQueue=null,a=Bp(n,o,a,u),Ip(e),o=Ou(),e!==null&&!mn?(Pu(e,n,f),Zi(e,n,f)):(Ce&&o&&gu(n),n.flags|=1,Tn(e,n,a,f),n.child)}function Hm(e,n,a,o,u){if(os(n),n.stateNode===null){var f=zs,M=a.contextType;typeof M=="object"&&M!==null&&(f=Cn(M)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Au(n),M=a.contextType,f.context=typeof M=="object"&&M!==null?Cn(M):zs,f.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(ju(n,a,M,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(M=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),M!==f.state&&Zu.enqueueReplaceState(f,f.state,null),Qr(n,o,f,u),Kr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,z=us(a,A);f.props=z;var tt=f.context,ht=a.contextType;M=zs,typeof ht=="object"&&ht!==null&&(M=Cn(ht));var vt=a.getDerivedStateFromProps;ht=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||tt!==M)&&Am(n,f,o,M),_a=!1;var nt=n.memoizedState;f.state=nt,Qr(n,o,f,u),Kr(),tt=n.memoizedState,A||nt!==tt||_a?(typeof vt=="function"&&(ju(n,a,vt,o),tt=n.memoizedState),(z=_a||bm(n,a,z,o,nt,tt,M))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),f.props=o,f.state=tt,f.context=M,o=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Ru(e,n),M=n.memoizedProps,ht=us(a,M),f.props=ht,vt=n.pendingProps,nt=f.context,tt=a.contextType,z=zs,typeof tt=="object"&&tt!==null&&(z=Cn(tt)),A=a.getDerivedStateFromProps,(tt=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M!==vt||nt!==z)&&Am(n,f,o,z),_a=!1,nt=n.memoizedState,f.state=nt,Qr(n,o,f,u),Kr();var st=n.memoizedState;M!==vt||nt!==st||_a||e!==null&&e.dependencies!==null&&ul(e.dependencies)?(typeof A=="function"&&(ju(n,a,A,o),st=n.memoizedState),(ht=_a||bm(n,a,ht,o,nt,st,z)||e!==null&&e.dependencies!==null&&ul(e.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,st,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,st,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=st),f.props=o,f.state=st,f.context=z,o=ht):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Cl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=qs(n,e.child,null,u),n.child=qs(n,null,a,u)):Tn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Zi(e,n,u),e}function Gm(e,n,a,o){return Vr(),n.flags|=256,Tn(e,n,a,o),n.child}var Ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $u(e){return{baseLanes:e,cachePool:wp()}}function tf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ci),e}function Vm(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,M;if((M=f)||(M=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(u?ya(n):Ma(),Ce){var A=Ze,z;if(z=A){t:{for(z=A,A=bi;z.nodeType!==8;){if(!A){A=null;break t}if(z=gi(z.nextSibling),z===null){A=null;break t}}A=z}A!==null?(n.memoizedState={dehydrated:A,treeContext:ns!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},z=Yn(18,null,null,0),z.stateNode=A,z.return=n,n.child=z,Nn=n,Ze=null,z=!0):z=!1}z||ss(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Bf(A)?n.lanes=32:n.lanes=536870912,null;ji(n)}return A=o.children,o=o.fallback,u?(Ma(),u=n.mode,A=Dl({mode:"hidden",children:A},u),o=es(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,u=n.child,u.memoizedState=$u(a),u.childLanes=tf(e,M,a),n.memoizedState=Ju,o):(ya(n),ef(n,A))}if(z=e.memoizedState,z!==null&&(A=z.dehydrated,A!==null)){if(f)n.flags&256?(ya(n),n.flags&=-257,n=nf(e,n,a)):n.memoizedState!==null?(Ma(),n.child=e.child,n.flags|=128,n=null):(Ma(),u=o.fallback,A=n.mode,o=Dl({mode:"visible",children:o.children},A),u=es(u,A,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,qs(n,e.child,null,a),o=n.child,o.memoizedState=$u(a),o.childLanes=tf(e,M,a),n.memoizedState=Ju,n=u);else if(ya(n),Bf(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var tt=M.dgst;M=tt,o=Error(s(419)),o.stack="",o.digest=M,kr({value:o,source:null,stack:null}),n=nf(e,n,a)}else if(mn||Xr(e,n,a,!1),M=(a&e.childLanes)!==0,mn||M){if(M=Xe,M!==null&&(o=a&-a,o=(o&42)!==0?1:ne(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==z.retryLane))throw z.retryLane=o,Ps(e,o),Jn(M,e,o),Nm;A.data==="$?"||yf(),n=nf(e,n,a)}else A.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,Ze=gi(A.nextSibling),Nn=n,Ce=!0,as=null,bi=!1,e!==null&&(ri[oi++]=ki,ri[oi++]=Xi,ri[oi++]=ns,ki=e.id,Xi=e.overflow,ns=n),n=ef(n,o.children),n.flags|=4096);return n}return u?(Ma(),u=o.fallback,A=n.mode,z=e.child,tt=z.sibling,o=Vi(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,tt!==null?u=Vi(tt,u):(u=es(u,A,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,A=e.child.memoizedState,A===null?A=$u(a):(z=A.cachePool,z!==null?(tt=ln._currentValue,z=z.parent!==tt?{parent:tt,pool:tt}:z):z=wp(),A={baseLanes:A.baseLanes|a,cachePool:z}),u.memoizedState=A,u.childLanes=tf(e,M,a),n.memoizedState=Ju,o):(ya(n),a=e.child,e=a.sibling,a=Vi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function ef(e,n){return n=Dl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Dl(e,n){return e=Yn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function nf(e,n,a){return qs(n,e.child,null,a),e=ef(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function km(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Su(e.return,n,a)}function af(e,n,a,o,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function Xm(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(Tn(e,n,o.children,a),o=cn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&km(e,a,n);else if(e.tag===19)km(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(yt(cn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Al(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),af(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Al(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}af(n,!0,a,null,f);break;case"together":af(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Zi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Xr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Vi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Vi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function sf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ul(e)))}function mx(e,n,a){switch(n.tag){case 3:Rt(n,n.stateNode.containerInfo),ga(n,ln,e.memoizedState.cache),Vr();break;case 27:case 5:Qt(n);break;case 4:Rt(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Vm(e,n,a):(ya(n),e=Zi(e,n,a),e!==null?e.sibling:null);ya(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Xr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Xm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(cn,cn.current),o)break;return null;case 22:case 23:return n.lanes=0,Im(e,n,a);case 24:ga(n,ln,e.memoizedState.cache)}return Zi(e,n,a)}function Wm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!sf(e,a)&&(n.flags&128)===0)return mn=!1,mx(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,Ce&&(n.flags&1048576)!==0&&yp(n,cl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")du(o)?(e=us(o,e),n.tag=1,n=Hm(null,n,o,e,a)):(n.tag=0,n=Qu(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===D){n.tag=11,n=Om(null,n,o,e,a);break t}else if(u===I){n.tag=14,n=Pm(null,n,o,e,a);break t}}throw n=ft(o)||o,Error(s(306,n,""))}}return n;case 0:return Qu(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=us(o,n.pendingProps),Hm(e,n,o,u,a);case 3:t:{if(Rt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Ru(e,n),Qr(n,o,null,a);var M=n.memoizedState;if(o=M.cache,ga(n,ln,o),o!==f.cache&&yu(n,[ln],a,!0),Kr(),o=M.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Gm(e,n,o,a);break t}else if(o!==u){u=ai(Error(s(424)),n),kr(u),n=Gm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=gi(e.firstChild),Nn=n,Ce=!0,as=null,bi=!0,a=Em(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Vr(),o===u){n=Zi(e,n,a);break t}Tn(e,n,o,a)}n=n.child}return n;case 26:return Cl(e,n),e===null?(a=Zg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ce||(a=n.type,e=n.pendingProps,o=Xl(gt.current).createElement(a),o[rn]=n,o[Mn]=e,An(o,a,e),en(o),n.stateNode=o):n.memoizedState=Zg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qt(n),e===null&&Ce&&(o=n.stateNode=qg(n.type,n.pendingProps,gt.current),Nn=n,bi=!0,u=Ze,Ua(n.type)?(Ff=u,Ze=gi(o.firstChild)):Ze=u),Tn(e,n,n.pendingProps.children,a),Cl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((u=o=Ze)&&(o=kx(o,n.type,n.pendingProps,bi),o!==null?(n.stateNode=o,Nn=n,Ze=gi(o.firstChild),bi=!1,u=!0):u=!1),u||ss(n)),Qt(n),u=n.type,f=n.pendingProps,M=e!==null?e.memoizedProps:null,o=f.children,Pf(u,f)?o=null:M!==null&&Pf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Nu(e,n,ox,null,null,a),So._currentValue=u),Cl(e,n),Tn(e,n,o,a),n.child;case 6:return e===null&&Ce&&((e=a=Ze)&&(a=Xx(a,n.pendingProps,bi),a!==null?(n.stateNode=a,Nn=n,Ze=null,e=!0):e=!1),e||ss(n)),null;case 13:return Vm(e,n,a);case 4:return Rt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=qs(n,null,o,a):Tn(e,n,o,a),n.child;case 11:return Om(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ga(n,n.type,o.value),Tn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,os(n),u=Cn(u),o=o(u),n.flags|=1,Tn(e,n,o,a),n.child;case 14:return Pm(e,n,n.type,n.pendingProps,a);case 15:return zm(e,n,n.type,n.pendingProps,a);case 19:return Xm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Dl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Vi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Im(e,n,a);case 24:return os(n),o=Cn(ln),e===null?(u=Tu(),u===null&&(u=Xe,f=Mu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Au(n),ga(n,ln,u)):((e.lanes&a)!==0&&(Ru(e,n),Qr(n,null,null,a),Kr()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ga(n,ln,o)):(o=f.cache,ga(n,ln,o),o!==u.cache&&yu(n,[ln],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ki(e){e.flags|=4}function qm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!t_(n)){if(n=li.current,n!==null&&((Me&4194048)===Me?Ai!==null:(Me&62914560)!==Me&&(Me&536870912)===0||n!==Ai))throw jr=bu,Cp;e.flags|=8192}}function Ul(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ut():536870912,e.lanes|=n,Ks|=n)}function ao(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function gx(e,n,a){var o=n.pendingProps;switch(_u(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),qi(ln),re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Gr(n)?Ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tp())),Ye(n),null;case 26:return a=n.memoizedState,e===null?(Ki(n),a!==null?(Ye(n),qm(n,a)):(Ye(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Ki(n),Ye(n),qm(n,a)):(Ye(n),n.flags&=-16777217):(e.memoizedProps!==o&&Ki(n),Ye(n),n.flags&=-16777217),null;case 27:Ne(n),a=gt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}e=Q.current,Gr(n)?Mp(n):(e=qg(u,o,a),n.stateNode=e,Ki(n))}return Ye(n),null;case 5:if(Ne(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}if(e=Q.current,Gr(n))Mp(n);else{switch(u=Xl(gt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[rn]=n,e[Mn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(An(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ki(n)}}return Ye(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=gt.current,Gr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Nn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Fg(e.nodeValue,a)),e||ss(n)}else e=Xl(e).createTextNode(o),e[rn]=n,n.stateNode=e}return Ye(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Gr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[rn]=n}else Vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),u=!1}else u=Tp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ji(n),n):(ji(n),null)}if(ji(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ul(n,n.updateQueue),Ye(n),null;case 4:return re(),e===null&&Df(n.stateNode.containerInfo),Ye(n),null;case 10:return qi(n.type),Ye(n),null;case 19:if(_t(cn),u=n.memoizedState,u===null)return Ye(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)ao(u,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Al(e),f!==null){for(n.flags|=128,ao(u,!1),e=f.updateQueue,n.updateQueue=e,Ul(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Sp(a,e),a=a.sibling;return yt(cn,cn.current&1|2),n.child}e=e.sibling}u.tail!==null&&pe()>Ol&&(n.flags|=128,o=!0,ao(u,!1),n.lanes=4194304)}else{if(!o)if(e=Al(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Ul(n,e),ao(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Ce)return Ye(n),null}else 2*pe()-u.renderingStartTime>Ol&&a!==536870912&&(n.flags|=128,o=!0,ao(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=pe(),n.sibling=null,e=cn.current,yt(cn,o?e&1|2:e&1),n):(Ye(n),null);case 22:case 23:return ji(n),Uu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&Ul(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&_t(ls),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),qi(ln),Ye(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function _x(e,n){switch(_u(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return qi(ln),re(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ne(n),null;case 13:if(ji(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Vr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return _t(cn),null;case 4:return re(),null;case 10:return qi(n.type),null;case 22:case 23:return ji(n),Uu(),e!==null&&_t(ls),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return qi(ln),null;case 25:return null;default:return null}}function Ym(e,n){switch(_u(n),n.tag){case 3:qi(ln),re();break;case 26:case 27:case 5:Ne(n);break;case 4:re();break;case 13:ji(n);break;case 19:_t(cn);break;case 10:qi(n.type);break;case 22:case 23:ji(n),Uu(),e!==null&&_t(ls);break;case 24:qi(ln)}}function so(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,M=a.inst;o=f(),M.destroy=o}a=a.next}while(a!==u)}}catch(A){Ge(n,n.return,A)}}function Ea(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var M=o.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,u=n;var z=a,tt=A;try{tt()}catch(ht){Ge(u,z,ht)}}}o=o.next}while(o!==f)}}catch(ht){Ge(n,n.return,ht)}}function jm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Pp(n,a)}catch(o){Ge(e,e.return,o)}}}function Zm(e,n,a){a.props=us(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function ro(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,n,u)}}function Ri(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function Km(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function rf(e,n,a){try{var o=e.stateNode;Bx(o,e.type,a,n),o[Mn]=n}catch(u){Ge(e,e.return,u)}}function Qm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ua(e.type)||e.tag===4}function of(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Qm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=kl));else if(o!==4&&(o===27&&Ua(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(lf(e,n,a),e=e.sibling;e!==null;)lf(e,n,a),e=e.sibling}function Ll(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ua(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ll(e,n,a),e=e.sibling;e!==null;)Ll(e,n,a),e=e.sibling}function Jm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,o,a),n[rn]=e,n[Mn]=a}catch(f){Ge(e,e.return,f)}}var Qi=!1,tn=!1,cf=!1,$m=typeof WeakSet=="function"?WeakSet:Set,gn=null;function vx(e,n){if(e=e.containerInfo,Nf=Kl,e=up(e),ru(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var M=0,A=-1,z=-1,tt=0,ht=0,vt=e,nt=null;e:for(;;){for(var st;vt!==a||u!==0&&vt.nodeType!==3||(A=M+u),vt!==f||o!==0&&vt.nodeType!==3||(z=M+o),vt.nodeType===3&&(M+=vt.nodeValue.length),(st=vt.firstChild)!==null;)nt=vt,vt=st;for(;;){if(vt===e)break e;if(nt===a&&++tt===u&&(A=M),nt===f&&++ht===o&&(z=M),(st=vt.nextSibling)!==null)break;vt=nt,nt=vt.parentNode}vt=st}a=A===-1||z===-1?null:{start:A,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Of={focusedElem:e,selectionRange:a},Kl=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ee=us(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ee,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){Ge(a,a.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)If(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":If(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function tg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ta(e,a),o&4&&so(5,a);break;case 1:if(Ta(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){Ge(a,a.return,M)}else{var u=us(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Ge(a,a.return,M)}}o&64&&jm(a),o&512&&ro(a,a.return);break;case 3:if(Ta(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Pp(e,n)}catch(M){Ge(a,a.return,M)}}break;case 27:n===null&&o&4&&Jm(a);case 26:case 5:Ta(e,a),n===null&&o&4&&Km(a),o&512&&ro(a,a.return);break;case 12:Ta(e,a);break;case 13:Ta(e,a),o&4&&ig(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Rx.bind(null,a),Wx(e,a))));break;case 22:if(o=a.memoizedState!==null||Qi,!o){n=n!==null&&n.memoizedState!==null||tn,u=Qi;var f=tn;Qi=o,(tn=n)&&!f?ba(e,a,(a.subtreeFlags&8772)!==0):Ta(e,a),Qi=u,tn=f}break;case 30:break;default:Ta(e,a)}}function eg(e){var n=e.alternate;n!==null&&(e.alternate=null,eg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ha(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Fn=!1;function Ji(e,n,a){for(a=a.child;a!==null;)ng(e,n,a),a=a.sibling}function ng(e,n,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(dt,a)}catch{}switch(a.tag){case 26:tn||Ri(a,n),Ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||Ri(a,n);var o=We,u=Fn;Ua(a.type)&&(We=a.stateNode,Fn=!1),Ji(e,n,a),go(a.stateNode),We=o,Fn=u;break;case 5:tn||Ri(a,n);case 6:if(o=We,u=Fn,We=null,Ji(e,n,a),We=o,Fn=u,We!==null)if(Fn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:We!==null&&(Fn?(e=We,Xg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),To(e)):Xg(We,a.stateNode));break;case 4:o=We,u=Fn,We=a.stateNode.containerInfo,Fn=!0,Ji(e,n,a),We=o,Fn=u;break;case 0:case 11:case 14:case 15:tn||Ea(2,a,n),tn||Ea(4,a,n),Ji(e,n,a);break;case 1:tn||(Ri(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Zm(a,n,o)),Ji(e,n,a);break;case 21:Ji(e,n,a);break;case 22:tn=(o=tn)||a.memoizedState!==null,Ji(e,n,a),tn=o;break;default:Ji(e,n,a)}}function ig(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{To(e)}catch(a){Ge(n,n.return,a)}}function xx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new $m),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new $m),n;default:throw Error(s(435,e.tag))}}function uf(e,n){var a=xx(e);n.forEach(function(o){var u=wx.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,M=n,A=M;t:for(;A!==null;){switch(A.tag){case 27:if(Ua(A.type)){We=A.stateNode,Fn=!1;break t}break;case 5:We=A.stateNode,Fn=!1;break t;case 3:case 4:We=A.stateNode.containerInfo,Fn=!0;break t}A=A.return}if(We===null)throw Error(s(160));ng(f,M,u),We=null,Fn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)ag(n,e),n=n.sibling}var mi=null;function ag(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(n,e),Zn(e),o&4&&(Ea(3,e,e.return),so(3,e),Ea(5,e,e.return));break;case 1:jn(n,e),Zn(e),o&512&&(tn||a===null||Ri(a,a.return)),o&64&&Qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=mi;if(jn(n,e),Zn(e),o&512&&(tn||a===null||Ri(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[fa]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),An(f,o,a),f[rn]=e,en(f),o=f;break t;case"link":var M=Jg("link","href",u).get(o+(a.href||""));if(M){for(var A=0;A<M.length;A++)if(f=M[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(A,1);break e}}f=u.createElement(o),An(f,o,a),u.head.appendChild(f);break;case"meta":if(M=Jg("meta","content",u).get(o+(a.content||""))){for(A=0;A<M.length;A++)if(f=M[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(A,1);break e}}f=u.createElement(o),An(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[rn]=e,en(f),o=f}e.stateNode=o}else $g(u,e.type,e.stateNode);else e.stateNode=Qg(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?$g(u,e.type,e.stateNode):Qg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&rf(e,e.memoizedProps,a.memoizedProps)}break;case 27:jn(n,e),Zn(e),o&512&&(tn||a===null||Ri(a,a.return)),a!==null&&o&4&&rf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,e),Zn(e),o&512&&(tn||a===null||Ri(a,a.return)),e.flags&32){u=e.stateNode;try{Ti(u,"")}catch(st){Ge(e,e.return,st)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,rf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(cf=!0);break;case 6:if(jn(n,e),Zn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(st){Ge(e,e.return,st)}}break;case 3:if(Yl=null,u=mi,mi=Wl(n.containerInfo),jn(n,e),mi=u,Zn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{To(n.containerInfo)}catch(st){Ge(e,e.return,st)}cf&&(cf=!1,sg(e));break;case 4:o=mi,mi=Wl(e.stateNode.containerInfo),jn(n,e),Zn(e),mi=o;break;case 12:jn(n,e),Zn(e);break;case 13:jn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(gf=pe()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,uf(e,o)));break;case 22:u=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,tt=Qi,ht=tn;if(Qi=tt||u,tn=ht||z,jn(n,e),tn=ht,Qi=tt,Zn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||Qi||tn||fs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,u)M=f.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=z.stateNode;var vt=z.memoizedProps.style,nt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;A.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(st){Ge(z,z.return,st)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(st){Ge(z,z.return,st)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,uf(e,a))));break;case 19:jn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,uf(e,o)));break;case 30:break;case 21:break;default:jn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Qm(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=of(e);Ll(e,f,u);break;case 5:var M=a.stateNode;a.flags&32&&(Ti(M,""),a.flags&=-33);var A=of(e);Ll(e,A,M);break;case 3:case 4:var z=a.stateNode.containerInfo,tt=of(e);lf(e,tt,z);break;default:throw Error(s(161))}}catch(ht){Ge(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function sg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;sg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ta(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)tg(e,n.alternate,n),n=n.sibling}function fs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),fs(n);break;case 1:Ri(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Zm(n,n.return,a),fs(n);break;case 27:go(n.stateNode);case 26:case 5:Ri(n,n.return),fs(n);break;case 22:n.memoizedState===null&&fs(n);break;case 30:fs(n);break;default:fs(n)}e=e.sibling}}function ba(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:ba(u,f,a),so(4,f);break;case 1:if(ba(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Ge(o,o.return,tt)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)Op(z[u],A)}catch(tt){Ge(o,o.return,tt)}}a&&M&64&&jm(f),ro(f,f.return);break;case 27:Jm(f);case 26:case 5:ba(u,f,a),a&&o===null&&M&4&&Km(f),ro(f,f.return);break;case 12:ba(u,f,a);break;case 13:ba(u,f,a),a&&M&4&&ig(u,f);break;case 22:f.memoizedState===null&&ba(u,f,a),ro(f,f.return);break;case 30:break;default:ba(u,f,a)}n=n.sibling}}function ff(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Wr(a))}function hf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Wr(e))}function wi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)rg(e,n,a,o),n=n.sibling}function rg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:wi(e,n,a,o),u&2048&&so(9,n);break;case 1:wi(e,n,a,o);break;case 3:wi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Wr(e)));break;case 12:if(u&2048){wi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,M=f.id,A=f.onPostCommit;typeof A=="function"&&A(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Ge(n,n.return,z)}}else wi(e,n,a,o);break;case 13:wi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,M=n.alternate,n.memoizedState!==null?f._visibility&2?wi(e,n,a,o):oo(e,n):f._visibility&2?wi(e,n,a,o):(f._visibility|=2,Ys(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&ff(M,n);break;case 24:wi(e,n,a,o),u&2048&&hf(n.alternate,n);break;default:wi(e,n,a,o)}}function Ys(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,M=n,A=a,z=o,tt=M.flags;switch(M.tag){case 0:case 11:case 15:Ys(f,M,A,z,u),so(8,M);break;case 23:break;case 22:var ht=M.stateNode;M.memoizedState!==null?ht._visibility&2?Ys(f,M,A,z,u):oo(f,M):(ht._visibility|=2,Ys(f,M,A,z,u)),u&&tt&2048&&ff(M.alternate,M);break;case 24:Ys(f,M,A,z,u),u&&tt&2048&&hf(M.alternate,M);break;default:Ys(f,M,A,z,u)}n=n.sibling}}function oo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:oo(a,o),u&2048&&ff(o.alternate,o);break;case 24:oo(a,o),u&2048&&hf(o.alternate,o);break;default:oo(a,o)}n=n.sibling}}var lo=8192;function js(e){if(e.subtreeFlags&lo)for(e=e.child;e!==null;)og(e),e=e.sibling}function og(e){switch(e.tag){case 26:js(e),e.flags&lo&&e.memoizedState!==null&&aS(mi,e.memoizedState,e.memoizedProps);break;case 5:js(e);break;case 3:case 4:var n=mi;mi=Wl(e.stateNode.containerInfo),js(e),mi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=lo,lo=16777216,js(e),lo=n):js(e));break;default:js(e)}}function lg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function co(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,ug(o,e)}lg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cg(e),e=e.sibling}function cg(e){switch(e.tag){case 0:case 11:case 15:co(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:co(e);break;case 12:co(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Nl(e)):co(e);break;default:co(e)}}function Nl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,ug(o,e)}lg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),Nl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Nl(n));break;default:Nl(n)}e=e.sibling}}function ug(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Wr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else t:for(a=e;gn!==null;){o=gn;var u=o.sibling,f=o.return;if(eg(o),o===a){gn=null;break t}if(u!==null){u.return=f,gn=u;break t}gn=f}}}var Sx={getCacheForType:function(e){var n=Cn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},yx=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Xe=null,me=null,Me=0,Le=0,Kn=null,Aa=!1,Zs=!1,df=!1,$i=0,Ke=0,Ra=0,hs=0,pf=0,ci=0,Ks=0,uo=null,Hn=null,mf=!1,gf=0,Ol=1/0,Pl=null,wa=null,bn=0,Ca=null,Qs=null,Js=0,_f=0,vf=null,fg=null,fo=0,xf=null;function Qn(){if((Ue&2)!==0&&Me!==0)return Me&-Me;if(N.T!==null){var e=Fs;return e!==0?e:Af()}return be()}function hg(){ci===0&&(ci=(Me&536870912)===0||Ce?X():536870912);var e=li.current;return e!==null&&(e.flags|=32),ci}function Jn(e,n,a){(e===Xe&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&($s(e,0),Da(e,Me,ci,!1)),zt(e,a),((Ue&2)===0||e!==Xe)&&(e===Xe&&((Ue&2)===0&&(hs|=a),Ke===4&&Da(e,Me,ci,!1)),Ci(e))}function dg(e,n,a){if((Ue&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||wt(e,n),u=o?Tx(e,n):Mf(e,n,!0),f=o;do{if(u===0){Zs&&!o&&Da(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Mx(a)){u=Mf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var A=e;u=uo;var z=A.current.memoizedState.isDehydrated;if(z&&($s(A,M).flags|=256),M=Mf(A,M,!1),M!==2){if(df&&!z){A.errorRecoveryDisabledLanes|=f,hs|=f,u=4;break t}f=Hn,Hn=u,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}u=M}if(f=!1,u!==2)continue}}if(u===1){$s(e,0),Da(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Da(o,n,ci,!Aa);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=gf+300-pe(),10<u)){if(Da(o,n,ci,!Aa),Yt(o,0,!0)!==0)break t;o.timeoutHandle=Vg(pg.bind(null,o,a,Hn,Pl,mf,n,ci,hs,Ks,Aa,f,2,-0,0),u);break t}pg(o,a,Hn,Pl,mf,n,ci,hs,Ks,Aa,f,0,-0,0)}}break}while(!0);Ci(e)}function pg(e,n,a,o,u,f,M,A,z,tt,ht,vt,nt,st){if(e.timeoutHandle=-1,vt=n.subtreeFlags,(vt&8192||(vt&16785408)===16785408)&&(xo={stylesheets:null,count:0,unsuspend:iS},og(n),vt=sS(),vt!==null)){e.cancelPendingCommit=vt(yg.bind(null,e,n,f,a,o,u,M,A,z,ht,1,nt,st)),Da(e,f,M,!tt);return}yg(e,n,f,a,o,u,M,A,z)}function Mx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Da(e,n,a,o){n&=~pf,n&=~hs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Ot(u),M=1<<f;o[f]=-1,u&=~M}a!==0&&xt(e,a,n)}function zl(){return(Ue&6)===0?(ho(0),!1):!0}function Sf(){if(me!==null){if(Le===0)var e=me.return;else e=me,Wi=rs=null,zu(e),Ws=null,no=0,e=me;for(;e!==null;)Ym(e.alternate,e),e=e.return;me=null}}function $s(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Hx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Sf(),Xe=e,me=a=Vi(e.current,null),Me=n,Le=0,Kn=null,Aa=!1,Zs=wt(e,n),df=!1,Ks=ci=pf=hs=Ra=Ke=0,Hn=uo=null,mf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ot(o),f=1<<u;n|=e[u],o&=~f}return $i=n,al(),a}function mg(e,n){fe=null,N.H=El,n===Yr||n===dl?(n=Lp(),Le=3):n===Cp?(n=Lp(),Le=4):Le=n===Nm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,me===null&&(Ke=1,wl(e,ai(n,e.current)))}function gg(){var e=N.H;return N.H=El,e===null?El:e}function _g(){var e=N.A;return N.A=Sx,e}function yf(){Ke=4,Aa||(Me&4194048)!==Me&&li.current!==null||(Zs=!0),(Ra&134217727)===0&&(hs&134217727)===0||Xe===null||Da(Xe,Me,ci,!1)}function Mf(e,n,a){var o=Ue;Ue|=2;var u=gg(),f=_g();(Xe!==e||Me!==n)&&(Pl=null,$s(e,n)),n=!1;var M=Ke;t:do try{if(Le!==0&&me!==null){var A=me,z=Kn;switch(Le){case 8:Sf(),M=6;break t;case 3:case 2:case 9:case 6:li.current===null&&(n=!0);var tt=Le;if(Le=0,Kn=null,tr(e,A,z,tt),a&&Zs){M=0;break t}break;default:tt=Le,Le=0,Kn=null,tr(e,A,z,tt)}}Ex(),M=Ke;break}catch(ht){mg(e,ht)}while(!0);return n&&e.shellSuspendCounter++,Wi=rs=null,Ue=o,N.H=u,N.A=f,me===null&&(Xe=null,Me=0,al()),M}function Ex(){for(;me!==null;)vg(me)}function Tx(e,n){var a=Ue;Ue|=2;var o=gg(),u=_g();Xe!==e||Me!==n?(Pl=null,Ol=pe()+500,$s(e,n)):Zs=wt(e,n);t:do try{if(Le!==0&&me!==null){n=me;var f=Kn;e:switch(Le){case 1:Le=0,Kn=null,tr(e,n,f,1);break;case 2:case 9:if(Dp(f)){Le=0,Kn=null,xg(n);break}n=function(){Le!==2&&Le!==9||Xe!==e||(Le=7),Ci(e)},f.then(n,n);break t;case 3:Le=7;break t;case 4:Le=5;break t;case 7:Dp(f)?(Le=0,Kn=null,xg(n)):(Le=0,Kn=null,tr(e,n,f,7));break;case 5:var M=null;switch(me.tag){case 26:M=me.memoizedState;case 5:case 27:var A=me;if(!M||t_(M)){Le=0,Kn=null;var z=A.sibling;if(z!==null)me=z;else{var tt=A.return;tt!==null?(me=tt,Il(tt)):me=null}break e}}Le=0,Kn=null,tr(e,n,f,5);break;case 6:Le=0,Kn=null,tr(e,n,f,6);break;case 8:Sf(),Ke=6;break t;default:throw Error(s(462))}}bx();break}catch(ht){mg(e,ht)}while(!0);return Wi=rs=null,N.H=o,N.A=u,Ue=a,me!==null?0:(Xe=null,Me=0,al(),Ke)}function bx(){for(;me!==null&&!yn();)vg(me)}function vg(e){var n=Wm(e.alternate,e,$i);e.memoizedProps=e.pendingProps,n===null?Il(e):me=n}function xg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Fm(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=Fm(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:zu(n);default:Ym(a,n),n=me=Sp(n,$i),n=Wm(a,n,$i)}e.memoizedProps=e.pendingProps,n===null?Il(e):me=n}function tr(e,n,a,o){Wi=rs=null,zu(n),Ws=null,no=0;var u=n.return;try{if(px(e,u,n,a,Me)){Ke=1,wl(e,ai(a,e.current)),me=null;return}}catch(f){if(u!==null)throw me=u,f;Ke=1,wl(e,ai(a,e.current)),me=null;return}n.flags&32768?(Ce||o===1?e=!0:Zs||(Me&536870912)!==0?e=!1:(Aa=e=!0,(o===2||o===9||o===3||o===6)&&(o=li.current,o!==null&&o.tag===13&&(o.flags|=16384))),Sg(n,e)):Il(n)}function Il(e){var n=e;do{if((n.flags&32768)!==0){Sg(n,Aa);return}e=n.return;var a=gx(n.alternate,n,$i);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);Ke===0&&(Ke=5)}function Sg(e,n){do{var a=_x(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);Ke=6,me=null}function yg(e,n,a,o,u,f,M,A,z){e.cancelPendingCommit=null;do Bl();while(bn!==0);if((Ue&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=fu,bt(e,a,f,M,A,z),e===Xe&&(me=Xe=null,Me=0),Qs=n,Ca=e,Js=a,_f=f,vf=u,fg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Cx(ae,function(){return Ag(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,u=q.p,q.p=2,M=Ue,Ue|=4;try{vx(e,n,a)}finally{Ue=M,q.p=u,N.T=o}}bn=1,Mg(),Eg(),Tg()}}function Mg(){if(bn===1){bn=0;var e=Ca,n=Qs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var o=q.p;q.p=2;var u=Ue;Ue|=4;try{ag(n,e);var f=Of,M=up(e.containerInfo),A=f.focusedElem,z=f.selectionRange;if(M!==A&&A&&A.ownerDocument&&cp(A.ownerDocument.documentElement,A)){if(z!==null&&ru(A)){var tt=z.start,ht=z.end;if(ht===void 0&&(ht=tt),"selectionStart"in A)A.selectionStart=tt,A.selectionEnd=Math.min(ht,A.value.length);else{var vt=A.ownerDocument||document,nt=vt&&vt.defaultView||window;if(nt.getSelection){var st=nt.getSelection(),ee=A.textContent.length,Jt=Math.min(z.start,ee),ze=z.end===void 0?Jt:Math.min(z.end,ee);!st.extend&&Jt>ze&&(M=ze,ze=Jt,Jt=M);var Y=lp(A,Jt),k=lp(A,ze);if(Y&&k&&(st.rangeCount!==1||st.anchorNode!==Y.node||st.anchorOffset!==Y.offset||st.focusNode!==k.node||st.focusOffset!==k.offset)){var J=vt.createRange();J.setStart(Y.node,Y.offset),st.removeAllRanges(),Jt>ze?(st.addRange(J),st.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),st.addRange(J))}}}}for(vt=[],st=A;st=st.parentNode;)st.nodeType===1&&vt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<vt.length;A++){var pt=vt[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Kl=!!Nf,Of=Nf=null}finally{Ue=u,q.p=o,N.T=a}}e.current=n,bn=2}}function Eg(){if(bn===2){bn=0;var e=Ca,n=Qs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var o=q.p;q.p=2;var u=Ue;Ue|=4;try{tg(e,n.alternate,n)}finally{Ue=u,q.p=o,N.T=a}}bn=3}}function Tg(){if(bn===4||bn===3){bn=0,Ee();var e=Ca,n=Qs,a=Js,o=fg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,Qs=Ca=null,bg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(wa=null),De(a),n=n.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(dt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,u=q.p,q.p=2,N.T=null;try{for(var f=e.onRecoverableError,M=0;M<o.length;M++){var A=o[M];f(A.value,{componentStack:A.stack})}}finally{N.T=n,q.p=u}}(Js&3)!==0&&Bl(),Ci(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===xf?fo++:(fo=0,xf=e):fo=0,ho(0)}}function bg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Wr(n)))}function Bl(e){return Mg(),Eg(),Tg(),Ag()}function Ag(){if(bn!==5)return!1;var e=Ca,n=_f;_f=0;var a=De(Js),o=N.T,u=q.p;try{q.p=32>a?32:a,N.T=null,a=vf,vf=null;var f=Ca,M=Js;if(bn=0,Qs=Ca=null,Js=0,(Ue&6)!==0)throw Error(s(331));var A=Ue;if(Ue|=4,cg(f.current),rg(f,f.current,M,a),Ue=A,ho(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(dt,f)}catch{}return!0}finally{q.p=u,N.T=o,bg(e,n)}}function Rg(e,n,a){n=ai(a,n),n=Ku(e.stateNode,n,2),e=xa(e,n,2),e!==null&&(zt(e,2),Ci(e))}function Ge(e,n,a){if(e.tag===3)Rg(e,e,a);else for(;n!==null;){if(n.tag===3){Rg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(wa===null||!wa.has(o))){e=ai(a,e),a=Um(2),o=xa(n,a,2),o!==null&&(Lm(a,o,n,e),zt(o,2),Ci(o));break}}n=n.return}}function Ef(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new yx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(df=!0,u.add(a),e=Ax.bind(null,e,n,a),n.then(e,e))}function Ax(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(Me&a)===a&&(Ke===4||Ke===3&&(Me&62914560)===Me&&300>pe()-gf?(Ue&2)===0&&$s(e,0):pf|=a,Ks===Me&&(Ks=0)),Ci(e)}function wg(e,n){n===0&&(n=Ut()),e=Ps(e,n),e!==null&&(zt(e,n),Ci(e))}function Rx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),wg(e,a)}function wx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),wg(e,a)}function Cx(e,n){return ve(e,n)}var Fl=null,er=null,Tf=!1,Hl=!1,bf=!1,ds=0;function Ci(e){e!==er&&e.next===null&&(er===null?Fl=er=e:er=er.next=e),Hl=!0,Tf||(Tf=!0,Ux())}function ho(e,n){if(!bf&&Hl){bf=!0;do for(var a=!1,o=Fl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var M=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=u&~(M&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Lg(o,f))}else f=Me,f=Yt(o,o===Xe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||wt(o,f)||(a=!0,Lg(o,f));o=o.next}while(a);bf=!1}}function Dx(){Cg()}function Cg(){Hl=Tf=!1;var e=0;ds!==0&&(Fx()&&(e=ds),ds=0);for(var n=pe(),a=null,o=Fl;o!==null;){var u=o.next,f=Dg(o,n);f===0?(o.next=null,a===null?Fl=u:a.next=u,u===null&&(er=a)):(a=o,(e!==0||(f&3)!==0)&&(Hl=!0)),o=u}ho(e)}function Dg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var M=31-Ot(f),A=1<<M,z=u[M];z===-1?((A&a)===0||(A&o)!==0)&&(u[M]=ie(A,n)):z<=n&&(e.expiredLanes|=A),f&=~A}if(n=Xe,a=Me,a=Yt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&H(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||wt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&H(o),De(a)){case 2:case 8:a=jt;break;case 32:a=ae;break;case 268435456:a=O;break;default:a=ae}return o=Ug.bind(null,e),a=ve(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&H(o),e.callbackPriority=2,e.callbackNode=null,2}function Ug(e,n){if(bn!==0&&bn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Bl()&&e.callbackNode!==a)return null;var o=Me;return o=Yt(e,e===Xe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(dg(e,o,n),Dg(e,pe()),e.callbackNode!=null&&e.callbackNode===a?Ug.bind(null,e):null)}function Lg(e,n){if(Bl())return null;dg(e,n,!0)}function Ux(){Gx(function(){(Ue&6)!==0?ve(xe,Dx):Cg()})}function Af(){return ds===0&&(ds=X()),ds}function Ng(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qo(""+e)}function Og(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Lx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Ng((u[Mn]||null).action),M=o.submitter;M&&(n=(n=M[Mn]||null)?Ng(n.formAction):M.getAttribute("formAction"),n!==null&&(f=n,M=null));var A=new el("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ds!==0){var z=M?Og(u,M):new FormData(u);Wu(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(A.preventDefault(),z=M?Og(u,M):new FormData(u),Wu(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var Rf=0;Rf<uu.length;Rf++){var wf=uu[Rf],Nx=wf.toLowerCase(),Ox=wf[0].toUpperCase()+wf.slice(1);pi(Nx,"on"+Ox)}pi(dp,"onAnimationEnd"),pi(pp,"onAnimationIteration"),pi(mp,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(Qv,"onTransitionRun"),pi(Jv,"onTransitionStart"),pi($v,"onTransitionCancel"),pi(gp,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),Bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Px=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function Pg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var M=o.length-1;0<=M;M--){var A=o[M],z=A.instance,tt=A.currentTarget;if(A=A.listener,z!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=tt;try{f(u)}catch(ht){Rl(ht)}u.currentTarget=null,f=z}else for(M=0;M<o.length;M++){if(A=o[M],z=A.instance,tt=A.currentTarget,A=A.listener,z!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=tt;try{f(u)}catch(ht){Rl(ht)}u.currentTarget=null,f=z}}}}function ge(e,n){var a=n[Za];a===void 0&&(a=n[Za]=new Set);var o=e+"__bubble";a.has(o)||(zg(n,e,2,!1),a.add(o))}function Cf(e,n,a){var o=0;n&&(o|=4),zg(a,e,o,n)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function Df(e){if(!e[Gl]){e[Gl]=!0,Zo.forEach(function(a){a!=="selectionchange"&&(Px.has(a)||Cf(a,!1,e),Cf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Gl]||(n[Gl]=!0,Cf("selectionchange",!1,n))}}function zg(e,n,a,o){switch(r_(n)){case 2:var u=lS;break;case 8:u=cS;break;default:u=Xf}a=u.bind(null,n,a,e),u=void 0,!Qc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Uf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var A=o.stateNode.containerInfo;if(A===u)break;if(M===4)for(M=o.return;M!==null;){var z=M.tag;if((z===3||z===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;A!==null;){if(M=zi(A),M===null)return;if(z=M.tag,z===5||z===6||z===26||z===27){o=f=M;continue t}A=A.parentNode}}o=o.return}kd(function(){var tt=f,ht=Zc(a),vt=[];t:{var nt=_p.get(e);if(nt!==void 0){var st=el,ee=e;switch(e){case"keypress":if($o(a)===0)break t;case"keydown":case"keyup":st=Cv;break;case"focusin":ee="focus",st=eu;break;case"focusout":ee="blur",st=eu;break;case"beforeblur":case"afterblur":st=eu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=_v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=Lv;break;case dp:case pp:case mp:st=Sv;break;case gp:st=Ov;break;case"scroll":case"scrollend":st=mv;break;case"wheel":st=zv;break;case"copy":case"cut":case"paste":st=Mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=jd;break;case"toggle":case"beforetoggle":st=Bv}var Jt=(n&4)!==0,ze=!Jt&&(e==="scroll"||e==="scrollend"),Y=Jt?nt!==null?nt+"Capture":null:nt;Jt=[];for(var k=tt,J;k!==null;){var pt=k;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||Y===null||(pt=Lr(k,Y),pt!=null&&Jt.push(mo(k,pt,J))),ze)break;k=k.return}0<Jt.length&&(nt=new st(nt,ee,null,a,ht),vt.push({event:nt,listeners:Jt}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",nt&&a!==jc&&(ee=a.relatedTarget||a.fromElement)&&(zi(ee)||ee[zn]))break t;if((st||nt)&&(nt=ht.window===ht?ht:(nt=ht.ownerDocument)?nt.defaultView||nt.parentWindow:window,st?(ee=a.relatedTarget||a.toElement,st=tt,ee=ee?zi(ee):null,ee!==null&&(ze=c(ee),Jt=ee.tag,ee!==ze||Jt!==5&&Jt!==27&&Jt!==6)&&(ee=null)):(st=null,ee=tt),st!==ee)){if(Jt=qd,pt="onMouseLeave",Y="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=jd,pt="onPointerLeave",Y="onPointerEnter",k="pointer"),ze=st==null?nt:Qa(st),J=ee==null?nt:Qa(ee),nt=new Jt(pt,k+"leave",st,a,ht),nt.target=ze,nt.relatedTarget=J,pt=null,zi(ht)===tt&&(Jt=new Jt(Y,k+"enter",ee,a,ht),Jt.target=J,Jt.relatedTarget=ze,pt=Jt),ze=pt,st&&ee)e:{for(Jt=st,Y=ee,k=0,J=Jt;J;J=nr(J))k++;for(J=0,pt=Y;pt;pt=nr(pt))J++;for(;0<k-J;)Jt=nr(Jt),k--;for(;0<J-k;)Y=nr(Y),J--;for(;k--;){if(Jt===Y||Y!==null&&Jt===Y.alternate)break e;Jt=nr(Jt),Y=nr(Y)}Jt=null}else Jt=null;st!==null&&Ig(vt,nt,st,Jt,!1),ee!==null&&ze!==null&&Ig(vt,ze,ee,Jt,!0)}}t:{if(nt=tt?Qa(tt):window,st=nt.nodeName&&nt.nodeName.toLowerCase(),st==="select"||st==="input"&&nt.type==="file")var Ft=np;else if(tp(nt))if(ip)Ft=jv;else{Ft=qv;var he=Wv}else st=nt.nodeName,!st||st.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?tt&&Yc(tt.elementType)&&(Ft=np):Ft=Yv;if(Ft&&(Ft=Ft(e,tt))){ep(vt,Ft,a,ht);break t}he&&he(e,nt,tt),e==="focusout"&&tt&&nt.type==="number"&&tt.memoizedProps.value!=null&&wn(nt,"number",nt.value)}switch(he=tt?Qa(tt):window,e){case"focusin":(tp(he)||he.contentEditable==="true")&&(Ls=he,ou=tt,Hr=null);break;case"focusout":Hr=ou=Ls=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,fp(vt,a,ht);break;case"selectionchange":if(Kv)break;case"keydown":case"keyup":fp(vt,a,ht)}var Wt;if(iu)t:{switch(e){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else Us?Jd(e,a)&&(te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(Zd&&a.locale!=="ko"&&(Us||te!=="onCompositionStart"?te==="onCompositionEnd"&&Us&&(Wt=Xd()):(ma=ht,Jc="value"in ma?ma.value:ma.textContent,Us=!0)),he=Vl(tt,te),0<he.length&&(te=new Yd(te,e,null,a,ht),vt.push({event:te,listeners:he}),Wt?te.data=Wt:(Wt=$d(a),Wt!==null&&(te.data=Wt)))),(Wt=Hv?Gv(e,a):Vv(e,a))&&(te=Vl(tt,"onBeforeInput"),0<te.length&&(he=new Yd("onBeforeInput","beforeinput",null,a,ht),vt.push({event:he,listeners:te}),he.data=Wt)),Lx(vt,e,tt,a,ht)}Pg(vt,n)})}function mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Vl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Lr(e,a),u!=null&&o.unshift(mo(e,u,f)),u=Lr(e,n),u!=null&&o.push(mo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ig(e,n,a,o,u){for(var f=n._reactName,M=[];a!==null&&a!==o;){var A=a,z=A.alternate,tt=A.stateNode;if(A=A.tag,z!==null&&z===o)break;A!==5&&A!==26&&A!==27||tt===null||(z=tt,u?(tt=Lr(a,f),tt!=null&&M.unshift(mo(a,tt,z))):u||(tt=Lr(a,f),tt!=null&&M.push(mo(a,tt,z)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var zx=/\r\n?/g,Ix=/\u0000|\uFFFD/g;function Bg(e){return(typeof e=="string"?e:""+e).replace(zx,`
`).replace(Ix,"")}function Fg(e,n){return n=Bg(n),Bg(e)===n}function kl(){}function Pe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ti(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ti(e,""+o);break;case"className":Ct(e,"class",o);break;case"tabIndex":Ct(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(e,a,o);break;case"style":Gd(e,o,f);break;case"data":if(n!=="object"){Ct(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Qo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pe(e,n,"name",u.name,u,null),Pe(e,n,"formEncType",u.formEncType,u,null),Pe(e,n,"formMethod",u.formMethod,u,null),Pe(e,n,"formTarget",u.formTarget,u,null)):(Pe(e,n,"encType",u.encType,u,null),Pe(e,n,"method",u.method,u,null),Pe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Qo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=kl);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Qo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Tt(e,"popover",o);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Tt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=dv.get(a)||a,Tt(e,a,o))}}function Lf(e,n,a,o,u,f){switch(a){case"style":Gd(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ti(e,o):(typeof o=="number"||typeof o=="bigint")&&Ti(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=kl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ko.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Tt(e,a,o)}}}function An(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var M=a[f];if(M!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pe(e,n,f,M,a,null)}}u&&Pe(e,n,"srcSet",a.srcSet,a,null),o&&Pe(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var A=f=M=u=null,z=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":M=ht;break;case"checked":z=ht;break;case"defaultChecked":tt=ht;break;case"value":f=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:Pe(e,n,o,ht,a,null)}}He(e,f,A,z,tt,M,u,!1),je(e);return;case"select":ge("invalid",e),o=M=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":M=A;break;case"multiple":o=A;default:Pe(e,n,u,A,a,null)}n=f,a=M,e.multiple=!!o,n!=null?on(e,!!o,n,!1):a!=null&&on(e,!!o,a,!0);return;case"textarea":ge("invalid",e),f=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(A=a[M],A!=null))switch(M){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Pe(e,n,M,A,a,null)}En(e,o,u,f),je(e);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Pe(e,n,z,o,a,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<po.length;o++)ge(po[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pe(e,n,tt,o,a,null)}return;default:if(Yc(n)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&Lf(e,n,ht,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Pe(e,n,A,o,a,null))}function Bx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,M=null,A=null,z=null,tt=null,ht=null;for(st in a){var vt=a[st];if(a.hasOwnProperty(st)&&vt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":z=vt;default:o.hasOwnProperty(st)||Pe(e,n,st,null,o,vt)}}for(var nt in o){var st=o[nt];if(vt=a[nt],o.hasOwnProperty(nt)&&(st!=null||vt!=null))switch(nt){case"type":f=st;break;case"name":u=st;break;case"checked":tt=st;break;case"defaultChecked":ht=st;break;case"value":M=st;break;case"defaultValue":A=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:st!==vt&&Pe(e,n,nt,st,o,vt)}}Fi(e,M,A,z,tt,ht,f,u);return;case"select":st=M=A=nt=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":st=z;default:o.hasOwnProperty(f)||Pe(e,n,f,null,o,z)}for(u in o)if(f=o[u],z=a[u],o.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":nt=f;break;case"defaultValue":A=f;break;case"multiple":M=f;default:f!==z&&Pe(e,n,u,f,o,z)}n=A,a=M,o=st,nt!=null?on(e,!!a,nt,!1):!!o!=!!a&&(n!=null?on(e,!!a,n,!0):on(e,!!a,a?[]:"",!1));return;case"textarea":st=nt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Pe(e,n,A,null,o,u)}for(M in o)if(u=o[M],f=a[M],o.hasOwnProperty(M)&&(u!=null||f!=null))switch(M){case"value":nt=u;break;case"defaultValue":st=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Pe(e,n,M,u,o,f)}pn(e,nt,st);return;case"option":for(var ee in a)if(nt=a[ee],a.hasOwnProperty(ee)&&nt!=null&&!o.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:Pe(e,n,ee,null,o,nt)}for(z in o)if(nt=o[z],st=a[z],o.hasOwnProperty(z)&&nt!==st&&(nt!=null||st!=null))switch(z){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Pe(e,n,z,nt,o,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)nt=a[Jt],a.hasOwnProperty(Jt)&&nt!=null&&!o.hasOwnProperty(Jt)&&Pe(e,n,Jt,null,o,nt);for(tt in o)if(nt=o[tt],st=a[tt],o.hasOwnProperty(tt)&&nt!==st&&(nt!=null||st!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Pe(e,n,tt,nt,o,st)}return;default:if(Yc(n)){for(var ze in a)nt=a[ze],a.hasOwnProperty(ze)&&nt!==void 0&&!o.hasOwnProperty(ze)&&Lf(e,n,ze,void 0,o,nt);for(ht in o)nt=o[ht],st=a[ht],!o.hasOwnProperty(ht)||nt===st||nt===void 0&&st===void 0||Lf(e,n,ht,nt,o,st);return}}for(var Y in a)nt=a[Y],a.hasOwnProperty(Y)&&nt!=null&&!o.hasOwnProperty(Y)&&Pe(e,n,Y,null,o,nt);for(vt in o)nt=o[vt],st=a[vt],!o.hasOwnProperty(vt)||nt===st||nt==null&&st==null||Pe(e,n,vt,nt,o,st)}var Nf=null,Of=null;function Xl(e){return e.nodeType===9?e:e.ownerDocument}function Hg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Pf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function Fx(){var e=window.event;return e&&e.type==="popstate"?e===zf?!1:(zf=e,!0):(zf=null,!1)}var Vg=typeof setTimeout=="function"?setTimeout:void 0,Hx=typeof clearTimeout=="function"?clearTimeout:void 0,kg=typeof Promise=="function"?Promise:void 0,Gx=typeof queueMicrotask=="function"?queueMicrotask:typeof kg<"u"?function(e){return kg.resolve(null).then(e).catch(Vx)}:Vg;function Vx(e){setTimeout(function(){throw e})}function Ua(e){return e==="head"}function Xg(e,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&go(M.documentElement),a&2&&go(M.body),a&4)for(a=M.head,go(a),M=a.firstChild;M;){var A=M.nextSibling,z=M.nodeName;M[fa]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=A}}if(u===0){e.removeChild(f),To(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);To(n)}function If(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":If(a),ha(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function kx(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[fa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function Xx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function Bf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Wx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Ff=null;function Wg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function qg(e,n,a){switch(n=Xl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function go(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ha(e)}var ui=new Map,Yg=new Set;function Wl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=q.d;q.d={f:qx,r:Yx,D:jx,C:Zx,L:Kx,m:Qx,X:$x,S:Jx,M:tS};function qx(){var e=ta.f(),n=zl();return e||n}function Yx(e){var n=Ii(e);n!==null&&n.tag===5&&n.type==="form"?dm(n):ta.r(e)}var ir=typeof document>"u"?null:document;function jg(e,n,a){var o=ir;if(o&&typeof n=="string"&&n){var u=ke(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Yg.has(u)||(Yg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),An(n,"link",e),en(n),o.head.appendChild(n)))}}function jx(e){ta.D(e),jg("dns-prefetch",e,null)}function Zx(e,n){ta.C(e,n),jg("preconnect",e,n)}function Kx(e,n,a){ta.L(e,n,a);var o=ir;if(o&&e&&n){var u='link[rel="preload"][as="'+ke(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ke(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ke(a.imageSizes)+'"]')):u+='[href="'+ke(e)+'"]';var f=u;switch(n){case"style":f=ar(e);break;case"script":f=sr(e)}ui.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ui.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(_o(f))||n==="script"&&o.querySelector(vo(f))||(n=o.createElement("link"),An(n,"link",e),en(n),o.head.appendChild(n)))}}function Qx(e,n){ta.m(e,n);var a=ir;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ke(o)+'"][href="'+ke(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=sr(e)}if(!ui.has(f)&&(e=g({rel:"modulepreload",href:e},n),ui.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}o=a.createElement("link"),An(o,"link",e),en(o),a.head.appendChild(o)}}}function Jx(e,n,a){ta.S(e,n,a);var o=ir;if(o&&e){var u=da(o).hoistableStyles,f=ar(e);n=n||"default";var M=u.get(f);if(!M){var A={loading:0,preload:null};if(M=o.querySelector(_o(f)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ui.get(f))&&Hf(e,a);var z=M=o.createElement("link");en(z),An(z,"link",e),z._p=new Promise(function(tt,ht){z.onload=tt,z.onerror=ht}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ql(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:A},u.set(f,M)}}}function $x(e,n){ta.X(e,n);var a=ir;if(a&&e){var o=da(a).hoistableScripts,u=sr(e),f=o.get(u);f||(f=a.querySelector(vo(u)),f||(e=g({src:e,async:!0},n),(n=ui.get(u))&&Gf(e,n),f=a.createElement("script"),en(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function tS(e,n){ta.M(e,n);var a=ir;if(a&&e){var o=da(a).hoistableScripts,u=sr(e),f=o.get(u);f||(f=a.querySelector(vo(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ui.get(u))&&Gf(e,n),f=a.createElement("script"),en(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Zg(e,n,a,o){var u=(u=gt.current)?Wl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ar(a.href),a=da(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ar(a.href);var f=da(u).hoistableStyles,M=f.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,M),(f=u.querySelector(_o(e)))&&!f._p&&(M.instance=f,M.state.loading=5),ui.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(e,a),f||eS(u,e,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=sr(a),a=da(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ar(e){return'href="'+ke(e)+'"'}function _o(e){return'link[rel="stylesheet"]['+e+"]"}function Kg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function eS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),An(n,"link",a),en(n),e.head.appendChild(n))}function sr(e){return'[src="'+ke(e)+'"]'}function vo(e){return"script[async]"+e}function Qg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ke(a.href)+'"]');if(o)return n.instance=o,en(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),en(o),An(o,"style",u),ql(o,a.precedence,e),n.instance=o;case"stylesheet":u=ar(a.href);var f=e.querySelector(_o(u));if(f)return n.state.loading|=4,n.instance=f,en(f),f;o=Kg(a),(u=ui.get(u))&&Hf(o,u),f=(e.ownerDocument||e).createElement("link"),en(f);var M=f;return M._p=new Promise(function(A,z){M.onload=A,M.onerror=z}),An(f,"link",o),n.state.loading|=4,ql(f,a.precedence,e),n.instance=f;case"script":return f=sr(a.src),(u=e.querySelector(vo(f)))?(n.instance=u,en(u),u):(o=a,(u=ui.get(f))&&(o=g({},a),Gf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),en(u),An(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ql(o,a.precedence,e));return n.instance}function ql(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,M=0;M<o.length;M++){var A=o[M];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Hf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Gf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Yl=null;function Jg(e,n,a){if(Yl===null){var o=new Map,u=Yl=new Map;u.set(a,o)}else u=Yl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[fa]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var M=f.getAttribute(n)||"";M=e+M;var A=o.get(M);A?A.push(f):o.set(M,[f])}}return o}function $g(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function nS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function t_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var xo=null;function iS(){}function aS(e,n,a){if(xo===null)throw Error(s(475));var o=xo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ar(a.href),f=e.querySelector(_o(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=jl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,en(f);return}f=e.ownerDocument||e,a=Kg(a),(u=ui.get(u))&&Hf(a,u),f=f.createElement("link"),en(f);var M=f;M._p=new Promise(function(A,z){M.onload=A,M.onerror=z}),An(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=jl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function sS(){if(xo===null)throw Error(s(475));var e=xo;return e.stylesheets&&e.count===0&&Vf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Vf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function jl(){if(this.count--,this.count===0){if(this.stylesheets)Vf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zl=null;function Vf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zl=new Map,n.forEach(rS,e),Zl=null,jl.call(e))}function rS(e,n){if(!(n.state.loading&4)){var a=Zl.get(e);if(a)var o=a.get(null);else{a=new Map,Zl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var M=u[f];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),f=a.get(M)||o,f===o&&a.set(null,u),a.set(M,u),this.count++,o=jl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var So={$$typeof:L,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function oS(e,n,a,o,u,f,M,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function e_(e,n,a,o,u,f,M,A,z,tt,ht,vt){return e=new oS(e,n,a,M,A,z,tt,vt),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),e.current=f,f.stateNode=e,n=Mu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Au(f),e}function n_(e){return e?(e=zs,e):zs}function i_(e,n,a,o,u,f){u=n_(u),o.context===null?o.context=u:o.pendingContext=u,o=va(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=xa(e,o,n),a!==null&&(Jn(a,e,n),Zr(a,e,n))}function a_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function kf(e,n){a_(e,n),(e=e.alternate)&&a_(e,n)}function s_(e){if(e.tag===13){var n=Ps(e,67108864);n!==null&&Jn(n,e,67108864),kf(e,67108864)}}var Kl=!0;function lS(e,n,a,o){var u=N.T;N.T=null;var f=q.p;try{q.p=2,Xf(e,n,a,o)}finally{q.p=f,N.T=u}}function cS(e,n,a,o){var u=N.T;N.T=null;var f=q.p;try{q.p=8,Xf(e,n,a,o)}finally{q.p=f,N.T=u}}function Xf(e,n,a,o){if(Kl){var u=Wf(o);if(u===null)Uf(e,n,o,Ql,a),o_(e,o);else if(fS(u,e,n,a,o))o.stopPropagation();else if(o_(e,o),n&4&&-1<uS.indexOf(e)){for(;u!==null;){var f=Ii(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var M=qt(f.pendingLanes);if(M!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var z=1<<31-Ot(M);A.entanglements[1]|=z,M&=~z}Ci(f),(Ue&6)===0&&(Ol=pe()+500,ho(0))}}break;case 13:A=Ps(f,2),A!==null&&Jn(A,f,2),zl(),kf(f,2)}if(f=Wf(o),f===null&&Uf(e,n,o,Ql,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Uf(e,n,o,null,a)}}function Wf(e){return e=Zc(e),qf(e)}var Ql=null;function qf(e){if(Ql=null,e=zi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ql=e,null}function r_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vt()){case xe:return 2;case jt:return 8;case ae:case Je:return 32;case O:return 268435456;default:return 32}default:return 32}}var Yf=!1,La=null,Na=null,Oa=null,yo=new Map,Mo=new Map,Pa=[],uS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function o_(e,n){switch(e){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":yo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function Eo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ii(n),n!==null&&s_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function fS(e,n,a,o,u){switch(n){case"focusin":return La=Eo(La,e,n,a,o,u),!0;case"dragenter":return Na=Eo(Na,e,n,a,o,u),!0;case"mouseover":return Oa=Eo(Oa,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return yo.set(f,Eo(yo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Mo.set(f,Eo(Mo.get(f)||null,e,n,a,o,u)),!0}return!1}function l_(e){var n=zi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Wn(e.priority,function(){if(a.tag===13){var o=Qn();o=ne(o);var u=Ps(a,o);u!==null&&Jn(u,a,o),kf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Wf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);jc=o,a.target.dispatchEvent(o),jc=null}else return n=Ii(a),n!==null&&s_(n),e.blockedOn=a,!1;n.shift()}return!0}function c_(e,n,a){Jl(e)&&a.delete(n)}function hS(){Yf=!1,La!==null&&Jl(La)&&(La=null),Na!==null&&Jl(Na)&&(Na=null),Oa!==null&&Jl(Oa)&&(Oa=null),yo.forEach(c_),Mo.forEach(c_)}function $l(e,n){e.blockedOn===n&&(e.blockedOn=null,Yf||(Yf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,hS)))}var tc=null;function u_(e){tc!==e&&(tc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){tc===e&&(tc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(qf(o||a)===null)continue;break}var f=Ii(a);f!==null&&(e.splice(n,3),n-=3,Wu(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function To(e){function n(z){return $l(z,e)}La!==null&&$l(La,e),Na!==null&&$l(Na,e),Oa!==null&&$l(Oa,e),yo.forEach(n),Mo.forEach(n);for(var a=0;a<Pa.length;a++){var o=Pa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)l_(a),a.blockedOn===null&&Pa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],M=u[Mn]||null;if(typeof f=="function")M||u_(a);else if(M){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,M=f[Mn]||null)A=M.formAction;else if(qf(u)!==null)continue}else A=M.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),u_(a)}}}function jf(e){this._internalRoot=e}ec.prototype.render=jf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Qn();i_(a,o,e,n,null,null)},ec.prototype.unmount=jf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;i_(e.current,2,null,e,null,null),zl(),n[zn]=null}};function ec(e){this._internalRoot=e}ec.prototype.unstable_scheduleHydration=function(e){if(e){var n=be();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,e),a===0&&l_(e)}};var f_=t.version;if(f_!=="19.1.0")throw Error(s(527,f_,"19.1.0"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var dS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nc.isDisabled&&nc.supportsFiber)try{dt=nc.inject(dS),mt=nc}catch{}}return Ao.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Rm,f=wm,M=Cm,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=e_(e,1,!1,null,null,a,o,u,f,M,A,null),e[zn]=n.current,Df(e),new jf(n)},Ao.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=Rm,M=wm,A=Cm,z=null,tt=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(tt=a.formState)),n=e_(e,1,!0,n,a??null,o,u,f,M,A,z,tt),n.context=n_(null),a=n.current,o=Qn(),o=ne(o),u=va(o),u.callback=null,xa(a,u,o),a=o,n.current.lanes=a,zt(n,a),Ci(n),e[zn]=n.current,Df(e),new ec(n)},Ao.version="19.1.0",Ao}var y_;function ES(){if(y_)return Qf.exports;y_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Qf.exports=MS(),Qf.exports}var TS=ES();function bS({children:r,className:t}){return console.log(t),Ht.jsx("div",{className:`content-center ${t}`,children:r})}const AS="/configurator/assets/logo%20icon-tnJ8l0nw.png";function RS({handleTabClick:r,btnClicked:t}){return Ht.jsxs("div",{className:"sidebar-container",children:[Ht.jsx("img",{src:AS,alt:"icon"}),Ht.jsxs("div",{className:"side-icon",children:[Ht.jsx("i",{className:`material-symbols-outlined ${t==="type"?"active":void 0}`,onClick:r,"data-name":"type",style:{fontVariationSettings:"  'FILL' 0,  'wght' 100,  'GRAD' 0,  'opsz' 24",fontSize:"36px",color:"#333"},children:"emoji_objects"}),Ht.jsx("i",{className:`material-symbols-outlined ${t==="detail"?"active":void 0}`,onClick:r,"data-name":"detail",style:{fontVariationSettings:"  'FILL' 0,  'wght' 100,  'GRAD' 0,  'opsz' 24",fontSize:"36px",color:"#333"},children:"ballot"}),Ht.jsx("i",{className:`material-symbols-outlined ${t==="composition"?"active":void 0}`,onClick:r,"data-name":"composition",style:{fontVariationSettings:"  'FILL' 0,  'wght' 100,  'GRAD' 0,  'opsz' 24",fontSize:"36px",color:"#333"},children:"deployed_code"})]})]})}const wS="_wrapper_1mov2_1",CS="_panel_1mov2_15",DS="_inputsDiv_1mov2_81",US="_inactive_1mov2_149",ic={wrapper:wS,panel:CS,inputsDiv:DS,inactive:US};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bd="177",Mr={ROTATE:0,DOLLY:1,PAN:2},Sr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},LS=0,M_=1,NS=2,z0=1,OS=2,oa=3,Ya=0,kn=1,Ui=2,Wa=0,Er=1,E_=2,T_=3,b_=4,PS=5,ys=100,zS=101,IS=102,BS=103,FS=104,HS=200,GS=201,VS=202,kS=203,zh=204,Ih=205,XS=206,WS=207,qS=208,YS=209,jS=210,ZS=211,KS=212,QS=213,JS=214,Bh=0,Fh=1,Hh=2,Ar=3,Gh=4,Vh=5,kh=6,Xh=7,Ad=0,$S=1,ty=2,qa=0,ey=1,ny=2,iy=3,ay=4,sy=5,ry=6,oy=7,I0=300,Rr=301,wr=302,Wh=303,qh=304,Xc=306,Yh=1e3,Es=1001,jh=1002,Mi=1003,ly=1004,ac=1005,Li=1006,eh=1007,Ts=1008,Oi=1009,B0=1010,F0=1011,Io=1012,Rd=1013,bs=1014,la=1015,Go=1016,wd=1017,Cd=1018,Bo=1020,H0=35902,G0=1021,V0=1022,yi=1023,Fo=1026,Ho=1027,k0=1028,Dd=1029,X0=1030,Ud=1031,Ld=1033,Lc=33776,Nc=33777,Oc=33778,Pc=33779,Zh=35840,Kh=35841,Qh=35842,Jh=35843,$h=36196,td=37492,ed=37496,nd=37808,id=37809,ad=37810,sd=37811,rd=37812,od=37813,ld=37814,cd=37815,ud=37816,fd=37817,hd=37818,dd=37819,pd=37820,md=37821,zc=36492,gd=36494,_d=36495,W0=36283,vd=36284,xd=36285,Sd=36286,cy=3200,uy=3201,Nd=0,fy=1,Xa="",ei="srgb",Cr="srgb-linear",Fc="linear",Ie="srgb",rr=7680,A_=519,hy=512,dy=513,py=514,q0=515,my=516,gy=517,_y=518,vy=519,R_=35044,w_="300 es",ca=2e3,Hc=2001;class ws{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ic=Math.PI/180,yd=180/Math.PI;function Vo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function _e(r,t,i){return Math.max(t,Math.min(i,r))}function xy(r,t){return(r%t+t)%t}function nh(r,t,i){return(1-i)*r+i*t}function Ro(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Gn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Sy={DEG2RAD:Ic};class se{constructor(t=0,i=0){se.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class As{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3];const v=c[h+0],y=c[h+1],E=c[h+2],b=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=v,t[i+1]=y,t[i+2]=E,t[i+3]=b;return}if(_!==b||m!==v||p!==y||g!==E){let S=1-d;const x=m*v+p*y+g*E+_*b,P=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const F=Math.sqrt(L),B=Math.atan2(F,x*P);S=Math.sin(S*B)/F,d=Math.sin(d*B)/F}const D=d*P;if(m=m*S+v*D,p=p*S+y*D,g=g*S+E*D,_=_*S+b*D,S===1-d){const F=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=F,p*=F,g*=F,_*=F}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[h],v=c[h+1],y=c[h+2],E=c[h+3];return t[i]=d*E+g*_+m*y-p*v,t[i+1]=m*E+g*v+p*_-d*y,t[i+2]=p*E+g*y+d*v-m*_,t[i+3]=g*E-d*_-m*v-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(c/2),v=m(s/2),y=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=v*g*_+p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_-v*y*E;break;case"YXZ":this._x=v*g*_+p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_+v*y*E;break;case"ZXY":this._x=v*g*_-p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_-v*y*E;break;case"ZYX":this._x=v*g*_-p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_+v*y*E;break;case"YZX":this._x=v*g*_+p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_-v*y*E;break;case"XZY":this._x=v*g*_-p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],v=s+d+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(s>d&&s>_){const y=2*Math.sqrt(1+s-d-_);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>_){const y=2*Math.sqrt(1+d-s-_);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-s-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-s*p,this._z=c*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),_=Math.sin((1-i)*g)/p,v=Math.sin(i*g)/p;return this._w=h*_+this._w*v,this._x=s*_+this._x*v,this._y=l*_+this._y*v,this._z=c*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,i=0,s=0){Z.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(C_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(C_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-c*l),_=2*(c*s-h*i);return this.x=i+m*p+h*_-d*g,this.y=s+m*g+d*p-c*_,this.z=l+m*_+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return ih.copy(this).projectOnVector(t),this.sub(ih)}reflect(t){return this.sub(ih.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ih=new Z,C_=new As;class le{constructor(t,i,s,l,c,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],v=s[2],y=s[5],E=s[8],b=l[0],S=l[3],x=l[6],P=l[1],L=l[4],D=l[7],F=l[2],B=l[5],I=l[8];return c[0]=h*b+d*P+m*F,c[3]=h*S+d*L+m*B,c[6]=h*x+d*D+m*I,c[1]=p*b+g*P+_*F,c[4]=p*S+g*L+_*B,c[7]=p*x+g*D+_*I,c[2]=v*b+y*P+E*F,c[5]=v*S+y*L+E*B,c[8]=v*x+y*D+E*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*c*g+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*h-d*p,v=d*m-g*c,y=p*c-h*m,E=i*_+s*v+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=_*b,t[1]=(l*p-g*s)*b,t[2]=(d*s-l*h)*b,t[3]=v*b,t[4]=(g*i-l*m)*b,t[5]=(l*c-d*i)*b,t[6]=y*b,t[7]=(s*m-p*i)*b,t[8]=(h*i-s*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(ah.makeScale(t,i)),this}rotate(t){return this.premultiply(ah.makeRotation(-t)),this}translate(t,i){return this.premultiply(ah.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ah=new le;function Y0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Gc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function yy(){const r=Gc("canvas");return r.style.display="block",r}const D_={};function Tr(r){r in D_||(D_[r]=!0,console.warn(r))}function My(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function Ey(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ty(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const U_=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),L_=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function by(){const r={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ie&&(l.r=ua(l.r),l.g=ua(l.g),l.b=ua(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ie&&(l.r=br(l.r),l.g=br(l.g),l.b=br(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xa?Fc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Tr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Tr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Cr]:{primaries:t,whitePoint:s,transfer:Fc,toXYZ:U_,fromXYZ:L_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:t,whitePoint:s,transfer:Ie,toXYZ:U_,fromXYZ:L_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),r}const Re=by();function ua(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function br(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let or;class Ay{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{or===void 0&&(or=Gc("canvas")),or.width=t.width,or.height=t.height;const l=or.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=or}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Gc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ua(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ua(i[s]/255)*255):i[s]=ua(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ry=0;class Od{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Vo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(sh(l[h].image)):c.push(sh(l[h]))}else c=sh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function sh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ay.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wy=0;const rh=new Z;class Xn extends ws{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=Es,l=Es,c=Li,h=Ts,d=yi,m=Oi,p=Xn.DEFAULT_ANISOTROPY,g=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Vo(),this.name="",this.source=new Od(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rh).x}get height(){return this.source.getSize(rh).y}get depth(){return this.source.getSize(rh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==I0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yh:t.x=t.x-Math.floor(t.x);break;case Es:t.x=t.x<0?0:1;break;case jh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yh:t.y=t.y-Math.floor(t.y);break;case Es:t.y=t.y<0?0:1;break;case jh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=I0;Xn.DEFAULT_ANISOTROPY=1;class Qe{constructor(t=0,i=0,s=0,l=1){Qe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],v=m[1],y=m[5],E=m[9],b=m[2],S=m[6],x=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-b)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+b)<.1&&Math.abs(E+S)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(y+1)/2,F=(x+1)/2,B=(g+v)/4,I=(_+b)/4,V=(E+S)/4;return L>D&&L>F?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=B/s,c=I/s):D>F?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=B/l,c=V/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=I/c,l=V/c),this.set(s,l,c,i),this}let P=Math.sqrt((S-E)*(S-E)+(_-b)*(_-b)+(v-g)*(v-g));return Math.abs(P)<.001&&(P=1),this.x=(S-E)/P,this.y=(_-b)/P,this.z=(v-g)/P,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this.w=_e(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this.w=_e(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cy extends ws{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Qe(0,0,t,i),this.scissorTest=!1,this.viewport=new Qe(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Xn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Li,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Od(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends Cy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class j0 extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dy extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ko{constructor(t=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(_i.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(_i.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=_i.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,_i):_i.fromBufferAttribute(c,h),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),sc.copy(s.boundingBox)),sc.applyMatrix4(t.matrixWorld),this.union(sc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wo),rc.subVectors(this.max,wo),lr.subVectors(t.a,wo),cr.subVectors(t.b,wo),ur.subVectors(t.c,wo),Ia.subVectors(cr,lr),Ba.subVectors(ur,cr),ps.subVectors(lr,ur);let i=[0,-Ia.z,Ia.y,0,-Ba.z,Ba.y,0,-ps.z,ps.y,Ia.z,0,-Ia.x,Ba.z,0,-Ba.x,ps.z,0,-ps.x,-Ia.y,Ia.x,0,-Ba.y,Ba.x,0,-ps.y,ps.x,0];return!oh(i,lr,cr,ur,rc)||(i=[1,0,0,0,1,0,0,0,1],!oh(i,lr,cr,ur,rc))?!1:(oc.crossVectors(Ia,Ba),i=[oc.x,oc.y,oc.z],oh(i,lr,cr,ur,rc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ea),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ea=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],_i=new Z,sc=new ko,lr=new Z,cr=new Z,ur=new Z,Ia=new Z,Ba=new Z,ps=new Z,wo=new Z,rc=new Z,oc=new Z,ms=new Z;function oh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){ms.fromArray(r,c);const d=l.x*Math.abs(ms.x)+l.y*Math.abs(ms.y)+l.z*Math.abs(ms.z),m=t.dot(ms),p=i.dot(ms),g=s.dot(ms);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const Uy=new ko,Co=new Z,lh=new Z;class Xo{constructor(t=new Z,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Uy.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Co.subVectors(t,this.center);const i=Co.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Co,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Co.copy(t.center).add(lh)),this.expandByPoint(Co.copy(t.center).sub(lh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const na=new Z,ch=new Z,lc=new Z,Fa=new Z,uh=new Z,cc=new Z,fh=new Z;class Wc{constructor(t=new Z,i=new Z(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,na)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=na.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(na.copy(this.origin).addScaledVector(this.direction,i),na.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){ch.copy(t).add(i).multiplyScalar(.5),lc.copy(i).sub(t).normalize(),Fa.copy(this.origin).sub(ch);const c=t.distanceTo(i)*.5,h=-this.direction.dot(lc),d=Fa.dot(this.direction),m=-Fa.dot(lc),p=Fa.lengthSq(),g=Math.abs(1-h*h);let _,v,y,E;if(g>0)if(_=h*m-d,v=h*d-m,E=c*g,_>=0)if(v>=-E)if(v<=E){const b=1/g;_*=b,v*=b,y=_*(_+h*v+2*d)+v*(h*_+v+2*m)+p}else v=c,_=Math.max(0,-(h*v+d)),y=-_*_+v*(v+2*m)+p;else v=-c,_=Math.max(0,-(h*v+d)),y=-_*_+v*(v+2*m)+p;else v<=-E?(_=Math.max(0,-(-h*c+d)),v=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+p):v<=E?(_=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+p):(_=Math.max(0,-(h*c+d)),v=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+p);else v=h>0?-c:c,_=Math.max(0,-(h*v+d)),y=-_*_+v*(v+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ch).addScaledVector(lc,v),y}intersectSphere(t,i){na.subVectors(t.center,this.origin);const s=na.dot(this.direction),l=na.dot(na)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(s=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(s=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),g>=0?(c=(t.min.y-v.y)*g,h=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,h=(t.min.y-v.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(d=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,na)!==null}intersectTriangle(t,i,s,l,c){uh.subVectors(i,t),cc.subVectors(s,t),fh.crossVectors(uh,cc);let h=this.direction.dot(fh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Fa.subVectors(this.origin,t);const m=d*this.direction.dot(cc.crossVectors(Fa,cc));if(m<0)return null;const p=d*this.direction.dot(uh.cross(Fa));if(p<0||m+p>h)return null;const g=-d*Fa.dot(fh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(t,i,s,l,c,h,d,m,p,g,_,v,y,E,b,S){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,g,_,v,y,E,b,S)}set(t,i,s,l,c,h,d,m,p,g,_,v,y,E,b,S){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=E,x[11]=b,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/fr.setFromMatrixColumn(t,0).length(),c=1/fr.setFromMatrixColumn(t,1).length(),h=1/fr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=h*g,y=h*_,E=d*g,b=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=y+E*p,i[5]=v-b*p,i[9]=-d*m,i[2]=b-v*p,i[6]=E+y*p,i[10]=h*m}else if(t.order==="YXZ"){const v=m*g,y=m*_,E=p*g,b=p*_;i[0]=v+b*d,i[4]=E*d-y,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=y*d-E,i[6]=b+v*d,i[10]=h*m}else if(t.order==="ZXY"){const v=m*g,y=m*_,E=p*g,b=p*_;i[0]=v-b*d,i[4]=-h*_,i[8]=E+y*d,i[1]=y+E*d,i[5]=h*g,i[9]=b-v*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const v=h*g,y=h*_,E=d*g,b=d*_;i[0]=m*g,i[4]=E*p-y,i[8]=v*p+b,i[1]=m*_,i[5]=b*p+v,i[9]=y*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const v=h*m,y=h*p,E=d*m,b=d*p;i[0]=m*g,i[4]=b-v*_,i[8]=E*_+y,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*_+E,i[10]=v-b*_}else if(t.order==="XZY"){const v=h*m,y=h*p,E=d*m,b=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=v*_+b,i[5]=h*g,i[9]=y*_-E,i[2]=E*_-y,i[6]=d*g,i[10]=b*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ly,t,Ny)}lookAt(t,i,s){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ha.crossVectors(s,$n),Ha.lengthSq()===0&&(Math.abs(s.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ha.crossVectors(s,$n)),Ha.normalize(),uc.crossVectors($n,Ha),l[0]=Ha.x,l[4]=uc.x,l[8]=$n.x,l[1]=Ha.y,l[5]=uc.y,l[9]=$n.y,l[2]=Ha.z,l[6]=uc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],v=s[9],y=s[13],E=s[2],b=s[6],S=s[10],x=s[14],P=s[3],L=s[7],D=s[11],F=s[15],B=l[0],I=l[4],V=l[8],C=l[12],w=l[1],G=l[5],it=l[9],at=l[13],ft=l[2],lt=l[6],N=l[10],q=l[14],W=l[3],St=l[7],U=l[11],$=l[15];return c[0]=h*B+d*w+m*ft+p*W,c[4]=h*I+d*G+m*lt+p*St,c[8]=h*V+d*it+m*N+p*U,c[12]=h*C+d*at+m*q+p*$,c[1]=g*B+_*w+v*ft+y*W,c[5]=g*I+_*G+v*lt+y*St,c[9]=g*V+_*it+v*N+y*U,c[13]=g*C+_*at+v*q+y*$,c[2]=E*B+b*w+S*ft+x*W,c[6]=E*I+b*G+S*lt+x*St,c[10]=E*V+b*it+S*N+x*U,c[14]=E*C+b*at+S*q+x*$,c[3]=P*B+L*w+D*ft+F*W,c[7]=P*I+L*G+D*lt+F*St,c[11]=P*V+L*it+D*N+F*U,c[15]=P*C+L*at+D*q+F*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],v=t[10],y=t[14],E=t[3],b=t[7],S=t[11],x=t[15];return E*(+c*m*_-l*p*_-c*d*v+s*p*v+l*d*y-s*m*y)+b*(+i*m*y-i*p*v+c*h*v-l*h*y+l*p*g-c*m*g)+S*(+i*p*_-i*d*y-c*h*_+s*h*y+c*d*g-s*p*g)+x*(-l*d*g-i*m*_+i*d*v+l*h*_-s*h*v+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],v=t[10],y=t[11],E=t[12],b=t[13],S=t[14],x=t[15],P=_*S*p-b*v*p+b*m*y-d*S*y-_*m*x+d*v*x,L=E*v*p-g*S*p-E*m*y+h*S*y+g*m*x-h*v*x,D=g*b*p-E*_*p+E*d*y-h*b*y-g*d*x+h*_*x,F=E*_*m-g*b*m-E*d*v+h*b*v+g*d*S-h*_*S,B=i*P+s*L+l*D+c*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/B;return t[0]=P*I,t[1]=(b*v*c-_*S*c-b*l*y+s*S*y+_*l*x-s*v*x)*I,t[2]=(d*S*c-b*m*c+b*l*p-s*S*p-d*l*x+s*m*x)*I,t[3]=(_*m*c-d*v*c-_*l*p+s*v*p+d*l*y-s*m*y)*I,t[4]=L*I,t[5]=(g*S*c-E*v*c+E*l*y-i*S*y-g*l*x+i*v*x)*I,t[6]=(E*m*c-h*S*c-E*l*p+i*S*p+h*l*x-i*m*x)*I,t[7]=(h*v*c-g*m*c+g*l*p-i*v*p-h*l*y+i*m*y)*I,t[8]=D*I,t[9]=(E*_*c-g*b*c-E*s*y+i*b*y+g*s*x-i*_*x)*I,t[10]=(h*b*c-E*d*c+E*s*p-i*b*p-h*s*x+i*d*x)*I,t[11]=(g*d*c-h*_*c-g*s*p+i*_*p+h*s*y-i*d*y)*I,t[12]=F*I,t[13]=(g*b*l-E*_*l+E*s*v-i*b*v-g*s*S+i*_*S)*I,t[14]=(E*d*l-h*b*l-E*s*m+i*b*m+h*s*S-i*d*S)*I,t[15]=(h*_*l-g*d*l+g*s*m-i*_*m-h*s*v+i*d*v)*I,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,_=d+d,v=c*p,y=c*g,E=c*_,b=h*g,S=h*_,x=d*_,P=m*p,L=m*g,D=m*_,F=s.x,B=s.y,I=s.z;return l[0]=(1-(b+x))*F,l[1]=(y+D)*F,l[2]=(E-L)*F,l[3]=0,l[4]=(y-D)*B,l[5]=(1-(v+x))*B,l[6]=(S+P)*B,l[7]=0,l[8]=(E+L)*I,l[9]=(S-P)*I,l[10]=(1-(v+b))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=fr.set(l[0],l[1],l[2]).length();const h=fr.set(l[4],l[5],l[6]).length(),d=fr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],vi.copy(this);const p=1/c,g=1/h,_=1/d;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=g,vi.elements[5]*=g,vi.elements[6]*=g,vi.elements[8]*=_,vi.elements[9]*=_,vi.elements[10]*=_,i.setFromRotationMatrix(vi),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=ca){const m=this.elements,p=2*c/(i-t),g=2*c/(s-l),_=(i+t)/(i-t),v=(s+l)/(s-l);let y,E;if(d===ca)y=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(d===Hc)y=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=g,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=ca){const m=this.elements,p=1/(i-t),g=1/(s-l),_=1/(h-c),v=(i+t)*p,y=(s+l)*g;let E,b;if(d===ca)E=(h+c)*_,b=-2*_;else if(d===Hc)E=c*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=b,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const fr=new Z,vi=new qe,Ly=new Z(0,0,0),Ny=new Z(1,1,1),Ha=new Z,uc=new Z,$n=new Z,N_=new qe,O_=new As;class Ei{constructor(t=0,i=0,s=0,l=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(_e(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-_e(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return N_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(N_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return O_.setFromEuler(this),this.setFromQuaternion(O_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class Z0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Oy=0;const P_=new Z,hr=new As,ia=new qe,fc=new Z,Do=new Z,Py=new Z,zy=new As,z_=new Z(1,0,0),I_=new Z(0,1,0),B_=new Z(0,0,1),F_={type:"added"},Iy={type:"removed"},dr={type:"childadded",child:null},hh={type:"childremoved",child:null};class Sn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const t=new Z,i=new Ei,s=new As,l=new Z(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new qe},normalMatrix:{value:new le}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Z0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return hr.setFromAxisAngle(t,i),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,i){return hr.setFromAxisAngle(t,i),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(z_,t)}rotateY(t){return this.rotateOnAxis(I_,t)}rotateZ(t){return this.rotateOnAxis(B_,t)}translateOnAxis(t,i){return P_.copy(t).applyQuaternion(this.quaternion),this.position.add(P_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(z_,t)}translateY(t){return this.translateOnAxis(I_,t)}translateZ(t){return this.translateOnAxis(B_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ia.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?fc.copy(t):fc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ia.lookAt(Do,fc,this.up):ia.lookAt(fc,Do,this.up),this.quaternion.setFromRotationMatrix(ia),l&&(ia.extractRotation(l.matrixWorld),hr.setFromRotationMatrix(ia),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(F_),dr.child=t,this.dispatchEvent(dr),dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Iy),hh.child=t,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ia.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ia.multiply(t.parent.matrixWorld)),t.applyMatrix4(ia),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(F_),dr.child=t,this.dispatchEvent(dr),dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,t,Py),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,zy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),v=h(t.skeletons),y=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Sn.DEFAULT_UP=new Z(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new Z,aa=new Z,dh=new Z,sa=new Z,pr=new Z,mr=new Z,H_=new Z,ph=new Z,mh=new Z,gh=new Z,_h=new Qe,vh=new Qe,xh=new Qe;class Si{constructor(t=new Z,i=new Z,s=new Z){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),xi.subVectors(t,i),l.cross(xi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){xi.subVectors(l,i),aa.subVectors(s,i),dh.subVectors(t,i);const h=xi.dot(xi),d=xi.dot(aa),m=xi.dot(dh),p=aa.dot(aa),g=aa.dot(dh),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(p*m-d*g)*v,E=(h*g-d*m)*v;return c.set(1-y-E,E,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,sa)===null?!1:sa.x>=0&&sa.y>=0&&sa.x+sa.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,sa.x),m.addScaledVector(h,sa.y),m.addScaledVector(d,sa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return _h.setScalar(0),vh.setScalar(0),xh.setScalar(0),_h.fromBufferAttribute(t,i),vh.fromBufferAttribute(t,s),xh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(_h,c.x),h.addScaledVector(vh,c.y),h.addScaledVector(xh,c.z),h}static isFrontFacing(t,i,s,l){return xi.subVectors(s,i),aa.subVectors(t,i),xi.cross(aa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),aa.subVectors(this.a,this.b),xi.cross(aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Si.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Si.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;pr.subVectors(l,s),mr.subVectors(c,s),ph.subVectors(t,s);const m=pr.dot(ph),p=mr.dot(ph);if(m<=0&&p<=0)return i.copy(s);mh.subVectors(t,l);const g=pr.dot(mh),_=mr.dot(mh);if(g>=0&&_<=g)return i.copy(l);const v=m*_-g*p;if(v<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(pr,h);gh.subVectors(t,c);const y=pr.dot(gh),E=mr.dot(gh);if(E>=0&&y<=E)return i.copy(c);const b=y*p-m*E;if(b<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(mr,d);const S=g*E-y*_;if(S<=0&&_-g>=0&&y-E>=0)return H_.subVectors(c,l),d=(_-g)/(_-g+(y-E)),i.copy(l).addScaledVector(H_,d);const x=1/(S+b+v);return h=b*x,d=v*x,i.copy(s).addScaledVector(pr,h).addScaledVector(mr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const K0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ga={h:0,s:0,l:0},hc={h:0,s:0,l:0};function Sh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class de{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Re.workingColorSpace){return this.r=t,this.g=i,this.b=s,Re.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Re.workingColorSpace){if(t=xy(t,1),i=_e(i,0,1),s=_e(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Sh(h,c,t+1/3),this.g=Sh(h,c,t),this.b=Sh(h,c,t-1/3)}return Re.colorSpaceToWorking(this,l),this}setStyle(t,i=ei){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ei){const s=K0[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ua(t.r),this.g=ua(t.g),this.b=ua(t.b),this}copyLinearToSRGB(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ei){return Re.workingToColorSpace(Ln.copy(this),t),Math.round(_e(Ln.r*255,0,255))*65536+Math.round(_e(Ln.g*255,0,255))*256+Math.round(_e(Ln.b*255,0,255))}getHexString(t=ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Re.workingColorSpace){Re.workingToColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,c=Ln.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Re.workingColorSpace){return Re.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=ei){Re.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,s=Ln.g,l=Ln.b;return t!==ei?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ga),this.setHSL(Ga.h+t,Ga.s+i,Ga.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ga),t.getHSL(hc);const s=nh(Ga.h,hc.h,i),l=nh(Ga.s,hc.s,i),c=nh(Ga.l,hc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new de;de.NAMES=K0;let By=0;class Pi extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Vo(),this.name="",this.type="Material",this.blending=Er,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Ih,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=A_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(s.blending=this.blending),this.side!==Ya&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==zh&&(s.blendSrc=this.blendSrc),this.blendDst!==Ih&&(s.blendDst=this.blendDst),this.blendEquation!==ys&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==A_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Q0 extends Pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sn=new Z,dc=new se;let Fy=0;class Ni{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=R_,this.updateRanges=[],this.gpuType=la,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)dc.fromBufferAttribute(this,i),dc.applyMatrix3(t),this.setXY(i,dc.x,dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ro(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Gn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ro(i,this.array)),i}setX(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ro(i,this.array)),i}setY(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ro(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ro(i,this.array)),i}setW(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array),c=Gn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==R_&&(t.usage=this.usage),t}}class J0 extends Ni{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class $0 extends Ni{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class xn extends Ni{constructor(t,i,s){super(new Float32Array(t),i,s)}}let Hy=0;const fi=new qe,yh=new Sn,gr=new Z,ti=new ko,Uo=new ko,vn=new Z;class ii extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Y0(t)?$0:J0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new le().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,i,s){return fi.makeTranslation(t,i,s),this.applyMatrix4(fi),this}scale(t,i,s){return fi.makeScale(t,i,s),this.applyMatrix4(fi),this}lookAt(t){return yh.lookAt(t),yh.updateMatrix(),this.applyMatrix4(yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new xn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Uo.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(ti.min,Uo.min),ti.expandByPoint(vn),vn.addVectors(ti.max,Uo.max),ti.expandByPoint(vn)):(ti.expandByPoint(Uo.min),ti.expandByPoint(Uo.max))}ti.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)vn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)vn.fromBufferAttribute(d,p),m&&(gr.fromBufferAttribute(t,p),vn.add(gr)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let V=0;V<s.count;V++)d[V]=new Z,m[V]=new Z;const p=new Z,g=new Z,_=new Z,v=new se,y=new se,E=new se,b=new Z,S=new Z;function x(V,C,w){p.fromBufferAttribute(s,V),g.fromBufferAttribute(s,C),_.fromBufferAttribute(s,w),v.fromBufferAttribute(c,V),y.fromBufferAttribute(c,C),E.fromBufferAttribute(c,w),g.sub(p),_.sub(p),y.sub(v),E.sub(v);const G=1/(y.x*E.y-E.x*y.y);isFinite(G)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(G),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(G),d[V].add(b),d[C].add(b),d[w].add(b),m[V].add(S),m[C].add(S),m[w].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let V=0,C=P.length;V<C;++V){const w=P[V],G=w.start,it=w.count;for(let at=G,ft=G+it;at<ft;at+=3)x(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const L=new Z,D=new Z,F=new Z,B=new Z;function I(V){F.fromBufferAttribute(l,V),B.copy(F);const C=d[V];L.copy(C),L.sub(F.multiplyScalar(F.dot(C))).normalize(),D.crossVectors(B,C);const G=D.dot(m[V])<0?-1:1;h.setXYZW(V,L.x,L.y,L.z,G)}for(let V=0,C=P.length;V<C;++V){const w=P[V],G=w.start,it=w.count;for(let at=G,ft=G+it;at<ft;at+=3)I(t.getX(at+0)),I(t.getX(at+1)),I(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const l=new Z,c=new Z,h=new Z,d=new Z,m=new Z,p=new Z,g=new Z,_=new Z;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),b=t.getX(v+1),S=t.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,S),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,S),d.add(g),m.add(g),p.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,v=new p.constructor(m.length*g);let y=0,E=0;for(let b=0,S=m.length;b<S;b++){d.isInterleavedBufferAttribute?y=m[b]*d.data.stride+d.offset:y=m[b]*g;for(let x=0;x<g;x++)v[E++]=p[y++]}return new Ni(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ii,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const v=p[g],y=t(v,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,v=p.length;_<v;_++){const y=p[_];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const G_=new qe,gs=new Wc,pc=new Xo,V_=new Z,mc=new Z,gc=new Z,_c=new Z,Mh=new Z,vc=new Z,k_=new Z,xc=new Z;class ni extends Sn{constructor(t=new ii,i=new Q0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){vc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(Mh.fromBufferAttribute(_,t),h?vc.addScaledVector(Mh,g):vc.addScaledVector(Mh.sub(i),g))}i.add(vc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),pc.copy(s.boundingSphere),pc.applyMatrix4(c),gs.copy(t.ray).recast(t.near),!(pc.containsPoint(gs.origin)===!1&&(gs.intersectSphere(pc,V_)===null||gs.origin.distanceToSquared(V_)>(t.far-t.near)**2))&&(G_.copy(c).invert(),gs.copy(t.ray).applyMatrix4(G_),!(s.boundingBox!==null&&gs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,gs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,b=v.length;E<b;E++){const S=v[E],x=h[S.materialIndex],P=Math.max(S.start,y.start),L=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let D=P,F=L;D<F;D+=3){const B=d.getX(D),I=d.getX(D+1),V=d.getX(D+2);l=Sc(this,x,t,s,p,g,_,B,I,V),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),b=Math.min(d.count,y.start+y.count);for(let S=E,x=b;S<x;S+=3){const P=d.getX(S),L=d.getX(S+1),D=d.getX(S+2);l=Sc(this,h,t,s,p,g,_,P,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,b=v.length;E<b;E++){const S=v[E],x=h[S.materialIndex],P=Math.max(S.start,y.start),L=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let D=P,F=L;D<F;D+=3){const B=D,I=D+1,V=D+2;l=Sc(this,x,t,s,p,g,_,B,I,V),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),b=Math.min(m.count,y.start+y.count);for(let S=E,x=b;S<x;S+=3){const P=S,L=S+1,D=S+2;l=Sc(this,h,t,s,p,g,_,P,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function Gy(r,t,i,s,l,c,h,d){let m;if(t.side===kn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===Ya,d),m===null)return null;xc.copy(d),xc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(xc);return p<i.near||p>i.far?null:{distance:p,point:xc.clone(),object:r}}function Sc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,mc),r.getVertexPosition(m,gc),r.getVertexPosition(p,_c);const g=Gy(r,t,i,s,mc,gc,_c,k_);if(g){const _=new Z;Si.getBarycoord(k_,mc,gc,_c,_),l&&(g.uv=Si.getInterpolatedAttribute(l,d,m,p,_,new se)),c&&(g.uv1=Si.getInterpolatedAttribute(c,d,m,p,_,new se)),h&&(g.normal=Si.getInterpolatedAttribute(h,d,m,p,_,new Z),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new Z,materialIndex:0};Si.getNormal(mc,gc,_c,v.normal),g.face=v,g.barycoord=_}return g}class Wo extends ii{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,s,i,t,h,c,0),E("z","y","x",1,-1,s,i,-t,h,c,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new xn(p,3)),this.setAttribute("normal",new xn(g,3)),this.setAttribute("uv",new xn(_,2));function E(b,S,x,P,L,D,F,B,I,V,C){const w=D/I,G=F/V,it=D/2,at=F/2,ft=B/2,lt=I+1,N=V+1;let q=0,W=0;const St=new Z;for(let U=0;U<N;U++){const $=U*G-at;for(let _t=0;_t<lt;_t++){const yt=_t*w-it;St[b]=yt*P,St[S]=$*L,St[x]=ft,p.push(St.x,St.y,St.z),St[b]=0,St[S]=0,St[x]=B>0?1:-1,g.push(St.x,St.y,St.z),_.push(_t/I),_.push(1-U/V),q+=1}}for(let U=0;U<V;U++)for(let $=0;$<I;$++){const _t=v+$+lt*U,yt=v+$+lt*(U+1),Q=v+($+1)+lt*(U+1),ut=v+($+1)+lt*U;m.push(_t,yt,ut),m.push(yt,Q,ut),W+=6}d.addGroup(y,W,C),y+=W,v+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Dr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function On(r){const t={};for(let i=0;i<r.length;i++){const s=Dr(r[i]);for(const l in s)t[l]=s[l]}return t}function Vy(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function tv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const ky={clone:Dr,merge:On};var Xy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ja extends Pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xy,this.fragmentShader=Wy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dr(t.uniforms),this.uniformsGroups=Vy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class ev extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=ca}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Va=new Z,X_=new se,W_=new se;class di extends ev{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=yd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ic*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yd*2*Math.atan(Math.tan(Ic*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Va.x,Va.y).multiplyScalar(-t/Va.z),Va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Va.x,Va.y).multiplyScalar(-t/Va.z)}getViewSize(t,i){return this.getViewBounds(t,X_,W_),i.subVectors(W_,X_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Ic*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _r=-90,vr=1;class qy extends Sn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(_r,vr,t,i);l.layers=this.layers,this.add(l);const c=new di(_r,vr,t,i);c.layers=this.layers,this.add(c);const h=new di(_r,vr,t,i);h.layers=this.layers,this.add(h);const d=new di(_r,vr,t,i);d.layers=this.layers,this.add(d);const m=new di(_r,vr,t,i);m.layers=this.layers,this.add(m);const p=new di(_r,vr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===ca)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Hc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,v,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class nv extends Xn{constructor(t=[],i=Rr,s,l,c,h,d,m,p,g){super(t,i,s,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yy extends Rs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new nv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Wo(5,5,5),c=new ja({name:"CubemapFromEquirect",uniforms:Dr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:Wa});c.uniforms.tEquirect.value=i;const h=new ni(l,c),d=i.minFilter;return i.minFilter===Ts&&(i.minFilter=Li),new qy(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class No extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jy={type:"move"};class Eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new No,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new No,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new No,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const b of t.hand.values()){const S=i.getJointPose(b,s),x=this._getHandJoint(p,b);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,E=.005;p.inputState.pinching&&v>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(jy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new No;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Zy extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Th=new Z,Ky=new Z,Qy=new le;class ka{constructor(t=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Th.subVectors(s,i).cross(Ky.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Th),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Qy.getNormalMatrix(t),l=this.coplanarPoint(Th).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new Xo,yc=new Z;class Pd{constructor(t=new ka,i=new ka,s=new ka,l=new ka,c=new ka,h=new ka){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ca){const s=this.planes,l=t.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],_=l[6],v=l[7],y=l[8],E=l[9],b=l[10],S=l[11],x=l[12],P=l[13],L=l[14],D=l[15];if(s[0].setComponents(m-c,v-p,S-y,D-x).normalize(),s[1].setComponents(m+c,v+p,S+y,D+x).normalize(),s[2].setComponents(m+h,v+g,S+E,D+P).normalize(),s[3].setComponents(m-h,v-g,S-E,D-P).normalize(),s[4].setComponents(m-d,v-_,S-b,D-L).normalize(),i===ca)s[5].setComponents(m+d,v+_,S+b,D+L).normalize();else if(i===Hc)s[5].setComponents(d,_,b,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_s.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(t){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(t.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(yc.x=l.normal.x>0?t.max.x:t.min.x,yc.y=l.normal.y>0?t.max.y:t.min.y,yc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(yc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zo extends Pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Vc=new Z,kc=new Z,q_=new qe,Lo=new Wc,Mc=new Xo,bh=new Z,Y_=new Z;class iv extends Sn{constructor(t=new ii,i=new zo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Vc.fromBufferAttribute(i,l-1),kc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Vc.distanceTo(kc);t.setAttribute("lineDistance",new xn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Mc.copy(s.boundingSphere),Mc.applyMatrix4(l),Mc.radius+=c,t.ray.intersectsSphere(Mc)===!1)return;q_.copy(l).invert(),Lo.copy(t.ray).applyMatrix4(q_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,v=s.attributes.position;if(g!==null){const y=Math.max(0,h.start),E=Math.min(g.count,h.start+h.count);for(let b=y,S=E-1;b<S;b+=p){const x=g.getX(b),P=g.getX(b+1),L=Ec(this,t,Lo,m,x,P,b);L&&i.push(L)}if(this.isLineLoop){const b=g.getX(E-1),S=g.getX(y),x=Ec(this,t,Lo,m,b,S,E-1);x&&i.push(x)}}else{const y=Math.max(0,h.start),E=Math.min(v.count,h.start+h.count);for(let b=y,S=E-1;b<S;b+=p){const x=Ec(this,t,Lo,m,b,b+1,b);x&&i.push(x)}if(this.isLineLoop){const b=Ec(this,t,Lo,m,E-1,y,E-1);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Ec(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(Vc.fromBufferAttribute(d,l),kc.fromBufferAttribute(d,c),i.distanceSqToSegment(Vc,kc,bh,Y_)>s)return;bh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(bh);if(!(p<t.near||p>t.far))return{distance:p,point:Y_.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const j_=new Z,Z_=new Z;class K_ extends iv{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)j_.fromBufferAttribute(i,l),Z_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+j_.distanceTo(Z_);t.setAttribute("lineDistance",new xn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Oo extends Pi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Q_=new qe,Md=new Wc,Tc=new Xo,bc=new Z;class Ah extends Sn{constructor(t=new ii,i=new Oo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Tc.copy(s.boundingSphere),Tc.applyMatrix4(l),Tc.radius+=c,t.ray.intersectsSphere(Tc)===!1)return;Q_.copy(l).invert(),Md.copy(t.ray).applyMatrix4(Q_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,_=s.attributes.position;if(p!==null){const v=Math.max(0,h.start),y=Math.min(p.count,h.start+h.count);for(let E=v,b=y;E<b;E++){const S=p.getX(E);bc.fromBufferAttribute(_,S),J_(bc,S,m,l,t,i,this)}}else{const v=Math.max(0,h.start),y=Math.min(_.count,h.start+h.count);for(let E=v,b=y;E<b;E++)bc.fromBufferAttribute(_,E),J_(bc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function J_(r,t,i,s,l,c,h){const d=Md.distanceSqToPoint(r);if(d<i){const m=new Z;Md.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class av extends Xn{constructor(t,i,s=bs,l,c,h,d=Mi,m=Mi,p,g=Fo,_=1){if(g!==Fo&&g!==Ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:_};super(v,l,c,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Od(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class zd extends ii{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],v=[],y=[];let E=0;const b=[],S=s/2;let x=0;P(),h===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new xn(_,3)),this.setAttribute("normal",new xn(v,3)),this.setAttribute("uv",new xn(y,2));function P(){const D=new Z,F=new Z;let B=0;const I=(i-t)/s;for(let V=0;V<=c;V++){const C=[],w=V/c,G=w*(i-t)+t;for(let it=0;it<=l;it++){const at=it/l,ft=at*m+d,lt=Math.sin(ft),N=Math.cos(ft);F.x=G*lt,F.y=-w*s+S,F.z=G*N,_.push(F.x,F.y,F.z),D.set(lt,I,N).normalize(),v.push(D.x,D.y,D.z),y.push(at,1-w),C.push(E++)}b.push(C)}for(let V=0;V<l;V++)for(let C=0;C<c;C++){const w=b[C][V],G=b[C+1][V],it=b[C+1][V+1],at=b[C][V+1];(t>0||C!==0)&&(g.push(w,G,at),B+=3),(i>0||C!==c-1)&&(g.push(G,it,at),B+=3)}p.addGroup(x,B,0),x+=B}function L(D){const F=E,B=new se,I=new Z;let V=0;const C=D===!0?t:i,w=D===!0?1:-1;for(let it=1;it<=l;it++)_.push(0,S*w,0),v.push(0,w,0),y.push(.5,.5),E++;const G=E;for(let it=0;it<=l;it++){const ft=it/l*m+d,lt=Math.cos(ft),N=Math.sin(ft);I.x=C*N,I.y=S*w,I.z=C*lt,_.push(I.x,I.y,I.z),v.push(0,w,0),B.x=lt*.5+.5,B.y=N*.5*w+.5,y.push(B.x,B.y),E++}for(let it=0;it<l;it++){const at=F+it,ft=G+it;D===!0?g.push(ft,ft+1,at):g.push(ft+1,ft,at),V+=3}p.addGroup(x,V,D===!0?1:2),x+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zd(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qo extends ii{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=t/d,v=i/m,y=[],E=[],b=[],S=[];for(let x=0;x<g;x++){const P=x*v-h;for(let L=0;L<p;L++){const D=L*_-c;E.push(D,-P,0),b.push(0,0,1),S.push(L/d),S.push(1-x/m)}}for(let x=0;x<m;x++)for(let P=0;P<d;P++){const L=P+p*x,D=P+p*(x+1),F=P+1+p*(x+1),B=P+1+p*x;y.push(L,D,B),y.push(D,F,B)}this.setIndex(y),this.setAttribute("position",new xn(E,3)),this.setAttribute("normal",new xn(b,3)),this.setAttribute("uv",new xn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.width,t.height,t.widthSegments,t.heightSegments)}}class $_ extends Pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nd,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jy extends Pi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new de(16777215),this.specular=new de(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nd,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $y extends Pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tM extends Pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const t0={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class eM{constructor(t,i,s){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this.itemStart=function(g){d++,c===!1&&l.onStart!==void 0&&l.onStart(g,h,d),c=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=p.length;_<v;_+=2){const y=p[_],E=p[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return E}return null}}}const nM=new eM;class Id{constructor(t){this.manager=t!==void 0?t:nM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Id.DEFAULT_MATERIAL_NAME="__DEFAULT";const ra={};class iM extends Error{constructor(t,i){super(t),this.response=i}}class aM extends Id{constructor(t){super(t),this.mimeType="",this.responseType=""}load(t,i,s,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=t0.get(t);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(ra[t]!==void 0){ra[t].push({onLoad:i,onProgress:s,onError:l});return}ra[t]=[],ra[t].push({onLoad:i,onProgress:s,onError:l});const h=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),d=this.mimeType,m=this.responseType;fetch(h).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=ra[t],_=p.body.getReader(),v=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),y=v?parseInt(v):0,E=y!==0;let b=0;const S=new ReadableStream({start(x){P();function P(){_.read().then(({done:L,value:D})=>{if(L)x.close();else{b+=D.byteLength;const F=new ProgressEvent("progress",{lengthComputable:E,loaded:b,total:y});for(let B=0,I=g.length;B<I;B++){const V=g[B];V.onProgress&&V.onProgress(F)}x.enqueue(D),P()}},L=>{x.error(L)})}}});return new Response(S)}else throw new iM(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,d));case"json":return p.json();default:if(d==="")return p.text();{const _=/charset="?([^;"\s]*)"?/i.exec(d),v=_&&_[1]?_[1].toLowerCase():void 0,y=new TextDecoder(v);return p.arrayBuffer().then(E=>y.decode(E))}}}).then(p=>{t0.add(t,p);const g=ra[t];delete ra[t];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onLoad&&y.onLoad(p)}}).catch(p=>{const g=ra[t];if(g===void 0)throw this.manager.itemError(t),p;delete ra[t];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onError&&y.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class sv extends Sn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new de(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Rh=new qe,e0=new Z,n0=new Z;class sM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=Oi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pd,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;e0.setFromMatrixPosition(t.matrixWorld),i.position.copy(e0),n0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(n0),i.updateMatrixWorld(),Rh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Rh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class rv extends ev{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class rM extends sM{constructor(){super(new rv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oM extends sv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new rM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class lM extends sv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class cM extends di{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class i0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(_e(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class uM extends ws{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function a0(r,t,i,s){const l=fM(s);switch(i){case G0:return r*t;case k0:return r*t/l.components*l.byteLength;case Dd:return r*t/l.components*l.byteLength;case X0:return r*t*2/l.components*l.byteLength;case Ud:return r*t*2/l.components*l.byteLength;case V0:return r*t*3/l.components*l.byteLength;case yi:return r*t*4/l.components*l.byteLength;case Ld:return r*t*4/l.components*l.byteLength;case Lc:case Nc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Oc:case Pc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Kh:case Jh:return Math.max(r,16)*Math.max(t,8)/4;case Zh:case Qh:return Math.max(r,8)*Math.max(t,8)/2;case $h:case td:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ed:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case nd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case id:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ad:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case sd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case rd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case od:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ld:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case cd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ud:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case fd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case hd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case dd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case pd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case md:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case zc:case gd:case _d:return Math.ceil(r/4)*Math.ceil(t/4)*16;case W0:case vd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case xd:case Sd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function fM(r){switch(r){case Oi:case B0:return{byteLength:1,components:1};case Io:case F0:case Go:return{byteLength:2,components:1};case wd:case Cd:return{byteLength:2,components:4};case bs:case Rd:case la:return{byteLength:4,components:1};case H0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ov(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function hM(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],b=_[y];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++v,_[v]=b)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const b=_[y];r.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var dM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pM=`#ifdef USE_ALPHAHASH
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
#endif`,mM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xM=`#ifdef USE_AOMAP
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
#endif`,SM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yM=`#ifdef USE_BATCHING
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
#endif`,MM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AM=`#ifdef USE_IRIDESCENCE
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
#endif`,RM=`#ifdef USE_BUMPMAP
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
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zM=`#define PI 3.141592653589793
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
} // validated`,IM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,BM=`vec3 transformedNormal = objectNormal;
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
#endif`,FM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kM="gl_FragColor = linearToOutputTexel( gl_FragColor );",XM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WM=`#ifdef USE_ENVMAP
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
#endif`,qM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YM=`#ifdef USE_ENVMAP
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
#endif`,jM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZM=`#ifdef USE_ENVMAP
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
#endif`,KM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tE=`#ifdef USE_GRADIENTMAP
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
}`,eE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aE=`uniform bool receiveShadow;
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
#endif`,sE=`#ifdef USE_ENVMAP
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
#endif`,rE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uE=`PhysicalMaterial material;
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
#endif`,fE=`struct PhysicalMaterial {
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
}`,hE=`
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
#endif`,dE=`#if defined( RE_IndirectDiffuse )
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
#endif`,pE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_E=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ME=`#if defined( USE_POINTS_UV )
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
#endif`,EE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wE=`#ifdef USE_MORPHTARGETS
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
#endif`,CE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PE=`#ifdef USE_NORMALMAP
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
#endif`,zE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QE=`float getShadowMask() {
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
}`,JE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$E=`#ifdef USE_SKINNING
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
#endif`,tT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eT=`#ifdef USE_SKINNING
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
#endif`,nT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rT=`#ifdef USE_TRANSMISSION
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
#endif`,oT=`#ifdef USE_TRANSMISSION
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
#endif`,lT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dT=`uniform sampler2D t2D;
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
}`,pT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_T=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`#include <common>
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
}`,xT=`#if DEPTH_PACKING == 3200
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
}`,ST=`#define DISTANCE
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
}`,yT=`#define DISTANCE
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
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ET=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`uniform float scale;
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
}`,bT=`uniform vec3 diffuse;
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
}`,AT=`#include <common>
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
}`,RT=`uniform vec3 diffuse;
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
}`,wT=`#define LAMBERT
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
}`,CT=`#define LAMBERT
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
}`,DT=`#define MATCAP
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
}`,UT=`#define MATCAP
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
}`,LT=`#define NORMAL
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
}`,NT=`#define NORMAL
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
}`,OT=`#define PHONG
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
}`,PT=`#define PHONG
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
}`,zT=`#define STANDARD
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
}`,IT=`#define STANDARD
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
}`,BT=`#define TOON
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
}`,FT=`#define TOON
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
}`,HT=`uniform float size;
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
}`,GT=`uniform vec3 diffuse;
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
}`,VT=`#include <common>
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
}`,kT=`uniform vec3 color;
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
}`,XT=`uniform float rotation;
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
}`,WT=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:dM,alphahash_pars_fragment:pM,alphamap_fragment:mM,alphamap_pars_fragment:gM,alphatest_fragment:_M,alphatest_pars_fragment:vM,aomap_fragment:xM,aomap_pars_fragment:SM,batching_pars_vertex:yM,batching_vertex:MM,begin_vertex:EM,beginnormal_vertex:TM,bsdfs:bM,iridescence_fragment:AM,bumpmap_pars_fragment:RM,clipping_planes_fragment:wM,clipping_planes_pars_fragment:CM,clipping_planes_pars_vertex:DM,clipping_planes_vertex:UM,color_fragment:LM,color_pars_fragment:NM,color_pars_vertex:OM,color_vertex:PM,common:zM,cube_uv_reflection_fragment:IM,defaultnormal_vertex:BM,displacementmap_pars_vertex:FM,displacementmap_vertex:HM,emissivemap_fragment:GM,emissivemap_pars_fragment:VM,colorspace_fragment:kM,colorspace_pars_fragment:XM,envmap_fragment:WM,envmap_common_pars_fragment:qM,envmap_pars_fragment:YM,envmap_pars_vertex:jM,envmap_physical_pars_fragment:sE,envmap_vertex:ZM,fog_vertex:KM,fog_pars_vertex:QM,fog_fragment:JM,fog_pars_fragment:$M,gradientmap_pars_fragment:tE,lightmap_pars_fragment:eE,lights_lambert_fragment:nE,lights_lambert_pars_fragment:iE,lights_pars_begin:aE,lights_toon_fragment:rE,lights_toon_pars_fragment:oE,lights_phong_fragment:lE,lights_phong_pars_fragment:cE,lights_physical_fragment:uE,lights_physical_pars_fragment:fE,lights_fragment_begin:hE,lights_fragment_maps:dE,lights_fragment_end:pE,logdepthbuf_fragment:mE,logdepthbuf_pars_fragment:gE,logdepthbuf_pars_vertex:_E,logdepthbuf_vertex:vE,map_fragment:xE,map_pars_fragment:SE,map_particle_fragment:yE,map_particle_pars_fragment:ME,metalnessmap_fragment:EE,metalnessmap_pars_fragment:TE,morphinstance_vertex:bE,morphcolor_vertex:AE,morphnormal_vertex:RE,morphtarget_pars_vertex:wE,morphtarget_vertex:CE,normal_fragment_begin:DE,normal_fragment_maps:UE,normal_pars_fragment:LE,normal_pars_vertex:NE,normal_vertex:OE,normalmap_pars_fragment:PE,clearcoat_normal_fragment_begin:zE,clearcoat_normal_fragment_maps:IE,clearcoat_pars_fragment:BE,iridescence_pars_fragment:FE,opaque_fragment:HE,packing:GE,premultiplied_alpha_fragment:VE,project_vertex:kE,dithering_fragment:XE,dithering_pars_fragment:WE,roughnessmap_fragment:qE,roughnessmap_pars_fragment:YE,shadowmap_pars_fragment:jE,shadowmap_pars_vertex:ZE,shadowmap_vertex:KE,shadowmask_pars_fragment:QE,skinbase_vertex:JE,skinning_pars_vertex:$E,skinning_vertex:tT,skinnormal_vertex:eT,specularmap_fragment:nT,specularmap_pars_fragment:iT,tonemapping_fragment:aT,tonemapping_pars_fragment:sT,transmission_fragment:rT,transmission_pars_fragment:oT,uv_pars_fragment:lT,uv_pars_vertex:cT,uv_vertex:uT,worldpos_vertex:fT,background_vert:hT,background_frag:dT,backgroundCube_vert:pT,backgroundCube_frag:mT,cube_vert:gT,cube_frag:_T,depth_vert:vT,depth_frag:xT,distanceRGBA_vert:ST,distanceRGBA_frag:yT,equirect_vert:MT,equirect_frag:ET,linedashed_vert:TT,linedashed_frag:bT,meshbasic_vert:AT,meshbasic_frag:RT,meshlambert_vert:wT,meshlambert_frag:CT,meshmatcap_vert:DT,meshmatcap_frag:UT,meshnormal_vert:LT,meshnormal_frag:NT,meshphong_vert:OT,meshphong_frag:PT,meshphysical_vert:zT,meshphysical_frag:IT,meshtoon_vert:BT,meshtoon_frag:FT,points_vert:HT,points_frag:GT,shadow_vert:VT,shadow_frag:kT,sprite_vert:XT,sprite_frag:WT},Lt={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Di={basic:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new de(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:On([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:On([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new de(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:On([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:On([Lt.points,Lt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:On([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:On([Lt.common,Lt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:On([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:On([Lt.sprite,Lt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:On([Lt.common,Lt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:On([Lt.lights,Lt.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Di.physical={uniforms:On([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Ac={r:0,b:0,g:0},vs=new Ei,qT=new qe;function YT(r,t,i,s,l,c,h){const d=new de(0);let m=c===!0?0:1,p,g,_=null,v=0,y=null;function E(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:t).get(D)),D}function b(L){let D=!1;const F=E(L);F===null?x(d,m):F&&F.isColor&&(x(F,1),D=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(L,D){const F=E(D);F&&(F.isCubeTexture||F.mapping===Xc)?(g===void 0&&(g=new ni(new Wo(1,1,1),new ja({name:"BackgroundCubeMaterial",uniforms:Dr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,I,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),vs.copy(D.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(qT.makeRotationFromEuler(vs)),g.material.toneMapped=Re.getTransfer(F.colorSpace)!==Ie,(_!==F||v!==F.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=F,v=F.version,y=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new ni(new qo(2,2),new ja({name:"BackgroundMaterial",uniforms:Dr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Re.getTransfer(F.colorSpace)!==Ie,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||v!==F.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,_=F,v=F.version,y=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,D){L.getRGB(Ac,tv(r)),s.buffers.color.setClear(Ac.r,Ac.g,Ac.b,D,h)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,D=1){d.set(L),m=D,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,x(d,m)},render:b,addToRenderList:S,dispose:P}}function jT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,h=!1;function d(w,G,it,at,ft){let lt=!1;const N=_(at,it,G);c!==N&&(c=N,p(c.object)),lt=y(w,at,it,ft),lt&&E(w,at,it,ft),ft!==null&&t.update(ft,r.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,D(w,G,it,at),ft!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function _(w,G,it){const at=it.wireframe===!0;let ft=s[w.id];ft===void 0&&(ft={},s[w.id]=ft);let lt=ft[G.id];lt===void 0&&(lt={},ft[G.id]=lt);let N=lt[at];return N===void 0&&(N=v(m()),lt[at]=N),N}function v(w){const G=[],it=[],at=[];for(let ft=0;ft<i;ft++)G[ft]=0,it[ft]=0,at[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:it,attributeDivisors:at,object:w,attributes:{},index:null}}function y(w,G,it,at){const ft=c.attributes,lt=G.attributes;let N=0;const q=it.getAttributes();for(const W in q)if(q[W].location>=0){const U=ft[W];let $=lt[W];if($===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;N++}return c.attributesNum!==N||c.index!==at}function E(w,G,it,at){const ft={},lt=G.attributes;let N=0;const q=it.getAttributes();for(const W in q)if(q[W].location>=0){let U=lt[W];U===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(U=w.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),ft[W]=$,N++}c.attributes=ft,c.attributesNum=N,c.index=at}function b(){const w=c.newAttributes;for(let G=0,it=w.length;G<it;G++)w[G]=0}function S(w){x(w,0)}function x(w,G){const it=c.newAttributes,at=c.enabledAttributes,ft=c.attributeDivisors;it[w]=1,at[w]===0&&(r.enableVertexAttribArray(w),at[w]=1),ft[w]!==G&&(r.vertexAttribDivisor(w,G),ft[w]=G)}function P(){const w=c.newAttributes,G=c.enabledAttributes;for(let it=0,at=G.length;it<at;it++)G[it]!==w[it]&&(r.disableVertexAttribArray(it),G[it]=0)}function L(w,G,it,at,ft,lt,N){N===!0?r.vertexAttribIPointer(w,G,it,ft,lt):r.vertexAttribPointer(w,G,it,at,ft,lt)}function D(w,G,it,at){b();const ft=at.attributes,lt=it.getAttributes(),N=G.defaultAttributeValues;for(const q in lt){const W=lt[q];if(W.location>=0){let St=ft[q];if(St===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(St=w.instanceColor)),St!==void 0){const U=St.normalized,$=St.itemSize,_t=t.get(St);if(_t===void 0)continue;const yt=_t.buffer,Q=_t.type,ut=_t.bytesPerElement,gt=Q===r.INT||Q===r.UNSIGNED_INT||St.gpuType===Rd;if(St.isInterleavedBufferAttribute){const At=St.data,Rt=At.stride,re=St.offset;if(At.isInstancedInterleavedBuffer){for(let Qt=0;Qt<W.locationSize;Qt++)x(W.location+Qt,At.meshPerAttribute);w.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Qt=0;Qt<W.locationSize;Qt++)S(W.location+Qt);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let Qt=0;Qt<W.locationSize;Qt++)L(W.location+Qt,$/W.locationSize,Q,U,Rt*ut,(re+$/W.locationSize*Qt)*ut,gt)}else{if(St.isInstancedBufferAttribute){for(let At=0;At<W.locationSize;At++)x(W.location+At,St.meshPerAttribute);w.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let At=0;At<W.locationSize;At++)S(W.location+At);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let At=0;At<W.locationSize;At++)L(W.location+At,$/W.locationSize,Q,U,$*ut,$/W.locationSize*At*ut,gt)}}else if(N!==void 0){const U=N[q];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(W.location,U);break;case 3:r.vertexAttrib3fv(W.location,U);break;case 4:r.vertexAttrib4fv(W.location,U);break;default:r.vertexAttrib1fv(W.location,U)}}}}P()}function F(){V();for(const w in s){const G=s[w];for(const it in G){const at=G[it];for(const ft in at)g(at[ft].object),delete at[ft];delete G[it]}delete s[w]}}function B(w){if(s[w.id]===void 0)return;const G=s[w.id];for(const it in G){const at=G[it];for(const ft in at)g(at[ft].object),delete at[ft];delete G[it]}delete s[w.id]}function I(w){for(const G in s){const it=s[G];if(it[w.id]===void 0)continue;const at=it[w.id];for(const ft in at)g(at[ft].object),delete at[ft];delete it[w.id]}}function V(){C(),h=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:C,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:S,disableUnusedAttributes:P}}function ZT(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];i.update(y,s,1)}function m(p,g,_,v){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)h(p[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,v,0,_);let E=0;for(let b=0;b<_;b++)E+=g[b]*v[b];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function KT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==yi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const V=I===Go&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Oi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==la&&!V)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,B=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:P,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:F,maxSamples:B}}function QT(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new ka,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||s!==0||l;return l=v,s=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,b=_.clipIntersection,S=_.clipShadows,x=r.get(_);if(!l||E===null||E.length===0||c&&!S)c?g(null):p();else{const P=c?0:s,L=P*4;let D=x.clippingState||null;m.value=D,D=g(E,v,L,y);for(let F=0;F!==L;++F)D[F]=i[F];x.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,v,y,E){const b=_!==null?_.length:0;let S=null;if(b!==0){if(S=m.value,E!==!0||S===null){const x=y+b*4,P=v.matrixWorldInverse;d.getNormalMatrix(P),(S===null||S.length<x)&&(S=new Float32Array(x));for(let L=0,D=y;L!==b;++L,D+=4)h.copy(_[L]).applyMatrix4(P,d),h.normal.toArray(S,D),S[D+3]=h.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,S}}function JT(r){let t=new WeakMap;function i(h,d){return d===Wh?h.mapping=Rr:d===qh&&(h.mapping=wr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Wh||d===qh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Yy(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const yr=4,s0=[.125,.215,.35,.446,.526,.582],Ms=20,wh=new rv,r0=new de;let Ch=null,Dh=0,Uh=0,Lh=!1;const Ss=(1+Math.sqrt(5))/2,xr=1/Ss,o0=[new Z(-Ss,xr,0),new Z(Ss,xr,0),new Z(-xr,0,Ss),new Z(xr,0,Ss),new Z(0,Ss,-xr),new Z(0,Ss,xr),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],$T=new Z;class l0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=$T}=c;Ch=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=f0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=u0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ch,Dh,Uh),this._renderer.xr.enabled=Lh,t.scissorTest=!1,Rc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Rr||t.mapping===wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ch=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Go,format:yi,colorSpace:Cr,depthBuffer:!1},l=c0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=c0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tb(c)),this._blurMaterial=eb(c,t,i)}return l}_compileMaterial(t){const i=new ni(this._lodPlanes[0],t);this._renderer.compile(i,wh)}_sceneToCubeUV(t,i,s,l,c){const m=new di(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(r0),_.toneMapping=qa,_.autoClear=!1;const E=new Q0({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),b=new ni(new Wo,E);let S=!1;const x=t.background;x?x.isColor&&(E.color.copy(x),t.background=null,S=!0):(E.color.copy(r0),S=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[P],c.y,c.z)):L===1?(m.up.set(0,0,p[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[P],c.z)):(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[P]));const D=this._cubeSize;Rc(l,L*D,P>2?D:0,D,D),_.setRenderTarget(l),S&&_.render(b,m),_.render(t,m)}b.geometry.dispose(),b.material.dispose(),_.toneMapping=y,_.autoClear=v,t.background=x}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Rr||t.mapping===wr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=f0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=u0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new ni(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Rc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,wh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=o0[(l-c-1)%o0.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new ni(this._lodPlanes[l],p),v=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ms-1),b=c/E,S=isFinite(c)?1+Math.floor(g*b):Ms;S>Ms&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ms}`);const x=[];let P=0;for(let I=0;I<Ms;++I){const V=I/b,C=Math.exp(-V*V/2);x.push(C),I===0?P+=C:I<S&&(P+=2*C)}for(let I=0;I<x.length;I++)x[I]=x[I]/P;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=h==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-s;const D=this._sizeLods[l],F=3*D*(l>L-yr?l-L+yr:0),B=4*(this._cubeSize-D);Rc(i,F,B,3*D,2*D),m.setRenderTarget(i),m.render(_,wh)}}function tb(r){const t=[],i=[],s=[];let l=r;const c=r-yr+1+s0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-yr?m=s0[h-r+yr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,b=3,S=2,x=1,P=new Float32Array(b*E*y),L=new Float32Array(S*E*y),D=new Float32Array(x*E*y);for(let B=0;B<y;B++){const I=B%3*2/3-1,V=B>2?0:-1,C=[I,V,0,I+2/3,V,0,I+2/3,V+1,0,I,V,0,I+2/3,V+1,0,I,V+1,0];P.set(C,b*E*B),L.set(v,S*E*B);const w=[B,B,B,B,B,B];D.set(w,x*E*B)}const F=new ii;F.setAttribute("position",new Ni(P,b)),F.setAttribute("uv",new Ni(L,S)),F.setAttribute("faceIndex",new Ni(D,x)),t.push(F),l>yr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function c0(r,t,i){const s=new Rs(r,t,i);return s.texture.mapping=Xc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Rc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function eb(r,t,i){const s=new Float32Array(Ms),l=new Z(0,1,0);return new ja({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Bd(),fragmentShader:`

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
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function u0(){return new ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bd(),fragmentShader:`

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
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function f0(){return new ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bd(),fragmentShader:`

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
	`}function nb(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Wh||m===qh,g=m===Rr||m===wr;if(p||g){let _=t.get(d);const v=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new l0(r)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new l0(r)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function ib(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Tr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function ab(r,t,i,s){const l={},c=new WeakMap;function h(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",h),delete l[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(_,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const y in v)t.update(v[y],r.ARRAY_BUFFER)}function p(_){const v=[],y=_.index,E=_.attributes.position;let b=0;if(y!==null){const P=y.array;b=y.version;for(let L=0,D=P.length;L<D;L+=3){const F=P[L+0],B=P[L+1],I=P[L+2];v.push(F,B,B,I,I,F)}}else if(E!==void 0){const P=E.array;b=E.version;for(let L=0,D=P.length/3-1;L<D;L+=3){const F=L+0,B=L+1,I=L+2;v.push(F,B,B,I,I,F)}}else return;const S=new(Y0(v)?$0:J0)(v,1);S.version=b;const x=c.get(_);x&&t.remove(x),c.set(_,S)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function sb(r,t,i){let s;function l(v){s=v}let c,h;function d(v){c=v.type,h=v.bytesPerElement}function m(v,y){r.drawElements(s,y,c,v*h),i.update(y,s,1)}function p(v,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,v*h,E),i.update(y,s,E))}function g(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,v,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];i.update(S,s,1)}function _(v,y,E,b){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)p(v[x]/h,y[x],b[x]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,c,v,0,b,0,E);let x=0;for(let P=0;P<E;P++)x+=y[P]*b[P];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function rb(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function ob(r,t,i){const s=new WeakMap,l=new Qe;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=s.get(d);if(v===void 0||v.count!==_){let w=function(){V.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var y=w;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),b===!0&&(D=2),S===!0&&(D=3);let F=d.attributes.position.count*D,B=1;F>t.maxTextureSize&&(B=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const I=new Float32Array(F*B*4*_),V=new j0(I,F,B,_);V.type=la,V.needsUpdate=!0;const C=D*4;for(let G=0;G<_;G++){const it=x[G],at=P[G],ft=L[G],lt=F*B*4*G;for(let N=0;N<it.count;N++){const q=N*C;E===!0&&(l.fromBufferAttribute(it,N),I[lt+q+0]=l.x,I[lt+q+1]=l.y,I[lt+q+2]=l.z,I[lt+q+3]=0),b===!0&&(l.fromBufferAttribute(at,N),I[lt+q+4]=l.x,I[lt+q+5]=l.y,I[lt+q+6]=l.z,I[lt+q+7]=0),S===!0&&(l.fromBufferAttribute(ft,N),I[lt+q+8]=l.x,I[lt+q+9]=l.y,I[lt+q+10]=l.z,I[lt+q+11]=ft.itemSize===4?l.w:1)}}v={count:_,texture:V,size:new se(F,B)},s.set(d,v),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const b=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",b),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function lb(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const lv=new Xn,h0=new av(1,1),cv=new j0,uv=new Dy,fv=new nv,d0=[],p0=[],m0=new Float32Array(16),g0=new Float32Array(9),_0=new Float32Array(4);function Ur(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=d0[l];if(c===void 0&&(c=new Float32Array(l),d0[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function fn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function hn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function qc(r,t){let i=p0[t];i===void 0&&(i=new Int32Array(t),p0[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function cb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function ub(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;r.uniform2fv(this.addr,t),hn(i,t)}}function fb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;r.uniform3fv(this.addr,t),hn(i,t)}}function hb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;r.uniform4fv(this.addr,t),hn(i,t)}}function db(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(fn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,s))return;_0.set(s),r.uniformMatrix2fv(this.addr,!1,_0),hn(i,s)}}function pb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(fn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,s))return;g0.set(s),r.uniformMatrix3fv(this.addr,!1,g0),hn(i,s)}}function mb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(fn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,s))return;m0.set(s),r.uniformMatrix4fv(this.addr,!1,m0),hn(i,s)}}function gb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function _b(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;r.uniform2iv(this.addr,t),hn(i,t)}}function vb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;r.uniform3iv(this.addr,t),hn(i,t)}}function xb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;r.uniform4iv(this.addr,t),hn(i,t)}}function Sb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function yb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;r.uniform2uiv(this.addr,t),hn(i,t)}}function Mb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;r.uniform3uiv(this.addr,t),hn(i,t)}}function Eb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;r.uniform4uiv(this.addr,t),hn(i,t)}}function Tb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(h0.compareFunction=q0,c=h0):c=lv,i.setTexture2D(t||c,l)}function bb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||uv,l)}function Ab(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||fv,l)}function Rb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||cv,l)}function wb(r){switch(r){case 5126:return cb;case 35664:return ub;case 35665:return fb;case 35666:return hb;case 35674:return db;case 35675:return pb;case 35676:return mb;case 5124:case 35670:return gb;case 35667:case 35671:return _b;case 35668:case 35672:return vb;case 35669:case 35673:return xb;case 5125:return Sb;case 36294:return yb;case 36295:return Mb;case 36296:return Eb;case 35678:case 36198:case 36298:case 36306:case 35682:return Tb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return Ab;case 36289:case 36303:case 36311:case 36292:return Rb}}function Cb(r,t){r.uniform1fv(this.addr,t)}function Db(r,t){const i=Ur(t,this.size,2);r.uniform2fv(this.addr,i)}function Ub(r,t){const i=Ur(t,this.size,3);r.uniform3fv(this.addr,i)}function Lb(r,t){const i=Ur(t,this.size,4);r.uniform4fv(this.addr,i)}function Nb(r,t){const i=Ur(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function Ob(r,t){const i=Ur(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function Pb(r,t){const i=Ur(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function zb(r,t){r.uniform1iv(this.addr,t)}function Ib(r,t){r.uniform2iv(this.addr,t)}function Bb(r,t){r.uniform3iv(this.addr,t)}function Fb(r,t){r.uniform4iv(this.addr,t)}function Hb(r,t){r.uniform1uiv(this.addr,t)}function Gb(r,t){r.uniform2uiv(this.addr,t)}function Vb(r,t){r.uniform3uiv(this.addr,t)}function kb(r,t){r.uniform4uiv(this.addr,t)}function Xb(r,t,i){const s=this.cache,l=t.length,c=qc(i,l);fn(s,c)||(r.uniform1iv(this.addr,c),hn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||lv,c[h])}function Wb(r,t,i){const s=this.cache,l=t.length,c=qc(i,l);fn(s,c)||(r.uniform1iv(this.addr,c),hn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||uv,c[h])}function qb(r,t,i){const s=this.cache,l=t.length,c=qc(i,l);fn(s,c)||(r.uniform1iv(this.addr,c),hn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||fv,c[h])}function Yb(r,t,i){const s=this.cache,l=t.length,c=qc(i,l);fn(s,c)||(r.uniform1iv(this.addr,c),hn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||cv,c[h])}function jb(r){switch(r){case 5126:return Cb;case 35664:return Db;case 35665:return Ub;case 35666:return Lb;case 35674:return Nb;case 35675:return Ob;case 35676:return Pb;case 5124:case 35670:return zb;case 35667:case 35671:return Ib;case 35668:case 35672:return Bb;case 35669:case 35673:return Fb;case 5125:return Hb;case 36294:return Gb;case 36295:return Vb;case 36296:return kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Xb;case 35679:case 36299:case 36307:return Wb;case 35680:case 36300:case 36308:case 36293:return qb;case 36289:case 36303:case 36311:case 36292:return Yb}}class Zb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=wb(i.type)}}class Kb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jb(i.type)}}class Qb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Nh=/(\w+)(\])?(\[|\.)?/g;function v0(r,t){r.seq.push(t),r.map[t.id]=t}function Jb(r,t,i){const s=r.name,l=s.length;for(Nh.lastIndex=0;;){const c=Nh.exec(s),h=Nh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){v0(i,p===void 0?new Zb(d,r,t):new Kb(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new Qb(d),v0(i,_)),i=_}}}class Bc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);Jb(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function x0(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const $b=37297;let tA=0;function eA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const S0=new le;function nA(r){Re._getMatrix(S0,Re.workingColorSpace,r);const t=`mat3( ${S0.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(r)){case Fc:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function y0(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+eA(r.getShaderSource(t),h)}else return l}function iA(r,t){const i=nA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function aA(r,t){let i;switch(t){case ey:i="Linear";break;case ny:i="Reinhard";break;case iy:i="Cineon";break;case ay:i="ACESFilmic";break;case ry:i="AgX";break;case oy:i="Neutral";break;case sy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const wc=new Z;function sA(){Re.getLuminanceCoefficients(wc);const r=wc.x.toFixed(4),t=wc.y.toFixed(4),i=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function oA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function lA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function Po(r){return r!==""}function M0(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function E0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ed(r){return r.replace(cA,fA)}const uA=new Map;function fA(r,t){let i=ce[t];if(i===void 0){const s=uA.get(t);if(s!==void 0)i=ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Ed(i)}const hA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function T0(r){return r.replace(hA,dA)}function dA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function b0(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function pA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===z0?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===OS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===oa&&(t="SHADOWMAP_TYPE_VSM"),t}function mA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Rr:case wr:t="ENVMAP_TYPE_CUBE";break;case Xc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case wr:t="ENVMAP_MODE_REFRACTION";break}return t}function _A(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ad:t="ENVMAP_BLENDING_MULTIPLY";break;case $S:t="ENVMAP_BLENDING_MIX";break;case ty:t="ENVMAP_BLENDING_ADD";break}return t}function vA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function xA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=pA(i),p=mA(i),g=gA(i),_=_A(i),v=vA(i),y=rA(i),E=oA(c),b=l.createProgram();let S,x,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Po).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Po).join(`
`),x.length>0&&(x+=`
`)):(S=[b0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),x=[b0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?ce.tonemapping_pars_fragment:"",i.toneMapping!==qa?aA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,iA("linearToOutputTexel",i.outputColorSpace),sA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Po).join(`
`)),h=Ed(h),h=M0(h,i),h=E0(h,i),d=Ed(d),d=M0(d,i),d=E0(d,i),h=T0(h),d=T0(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",i.glslVersion===w_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===w_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=P+S+h,D=P+x+d,F=x0(l,l.VERTEX_SHADER,L),B=x0(l,l.FRAGMENT_SHADER,D);l.attachShader(b,F),l.attachShader(b,B),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function I(G){if(r.debug.checkShaderErrors){const it=l.getProgramInfoLog(b).trim(),at=l.getShaderInfoLog(F).trim(),ft=l.getShaderInfoLog(B).trim();let lt=!0,N=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(lt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,b,F,B);else{const q=y0(l,F,"vertex"),W=y0(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+it+`
`+q+`
`+W)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(at===""||ft==="")&&(N=!1);N&&(G.diagnostics={runnable:lt,programLog:it,vertexShader:{log:at,prefix:S},fragmentShader:{log:ft,prefix:x}})}l.deleteShader(F),l.deleteShader(B),V=new Bc(l,b),C=lA(l,b)}let V;this.getUniforms=function(){return V===void 0&&I(this),V};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(b,$b)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tA++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=F,this.fragmentShader=B,this}let SA=0;class yA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new MA(t),i.set(t,s)),s}}class MA{constructor(t){this.id=SA++,this.code=t,this.usedTimes=0}}function EA(r,t,i,s,l,c,h){const d=new Z0,m=new yA,p=new Set,g=[],_=l.logarithmicDepthBuffer,v=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,w,G,it,at){const ft=it.fog,lt=at.geometry,N=C.isMeshStandardMaterial?it.environment:null,q=(C.isMeshStandardMaterial?i:t).get(C.envMap||N),W=q&&q.mapping===Xc?q.image.height:null,St=E[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const U=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,$=U!==void 0?U.length:0;let _t=0;lt.morphAttributes.position!==void 0&&(_t=1),lt.morphAttributes.normal!==void 0&&(_t=2),lt.morphAttributes.color!==void 0&&(_t=3);let yt,Q,ut,gt;if(St){const be=Di[St];yt=be.vertexShader,Q=be.fragmentShader}else yt=C.vertexShader,Q=C.fragmentShader,m.update(C),ut=m.getVertexShaderID(C),gt=m.getFragmentShaderID(C);const At=r.getRenderTarget(),Rt=r.state.buffers.depth.getReversed(),re=at.isInstancedMesh===!0,Qt=at.isBatchedMesh===!0,Ne=!!C.map,Fe=!!C.matcap,ve=!!q,H=!!C.aoMap,yn=!!C.lightMap,Ee=!!C.bumpMap,pe=!!C.normalMap,Vt=!!C.displacementMap,xe=!!C.emissiveMap,jt=!!C.metalnessMap,ae=!!C.roughnessMap,Je=C.anisotropy>0,O=C.clearcoat>0,T=C.dispersion>0,et=C.iridescence>0,dt=C.sheen>0,mt=C.transmission>0,ct=Je&&!!C.anisotropyMap,Ot=O&&!!C.clearcoatMap,Dt=O&&!!C.clearcoatNormalMap,Gt=O&&!!C.clearcoatRoughnessMap,kt=et&&!!C.iridescenceMap,Mt=et&&!!C.iridescenceThicknessMap,Pt=dt&&!!C.sheenColorMap,qt=dt&&!!C.sheenRoughnessMap,Yt=!!C.specularMap,wt=!!C.specularColorMap,ie=!!C.specularIntensityMap,X=mt&&!!C.transmissionMap,Ut=mt&&!!C.thicknessMap,Et=!!C.gradientMap,zt=!!C.alphaMap,bt=C.alphaTest>0,xt=!!C.alphaHash,Bt=!!C.extensions;let ne=qa;C.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(ne=r.toneMapping);const De={shaderID:St,shaderType:C.type,shaderName:C.name,vertexShader:yt,fragmentShader:Q,defines:C.defines,customVertexShaderID:ut,customFragmentShaderID:gt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Qt,batchingColor:Qt&&at._colorsTexture!==null,instancing:re,instancingColor:re&&at.instanceColor!==null,instancingMorph:re&&at.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:At===null?r.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Cr,alphaToCoverage:!!C.alphaToCoverage,map:Ne,matcap:Fe,envMap:ve,envMapMode:ve&&q.mapping,envMapCubeUVHeight:W,aoMap:H,lightMap:yn,bumpMap:Ee,normalMap:pe,displacementMap:v&&Vt,emissiveMap:xe,normalMapObjectSpace:pe&&C.normalMapType===fy,normalMapTangentSpace:pe&&C.normalMapType===Nd,metalnessMap:jt,roughnessMap:ae,anisotropy:Je,anisotropyMap:ct,clearcoat:O,clearcoatMap:Ot,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Gt,dispersion:T,iridescence:et,iridescenceMap:kt,iridescenceThicknessMap:Mt,sheen:dt,sheenColorMap:Pt,sheenRoughnessMap:qt,specularMap:Yt,specularColorMap:wt,specularIntensityMap:ie,transmission:mt,transmissionMap:X,thicknessMap:Ut,gradientMap:Et,opaque:C.transparent===!1&&C.blending===Er&&C.alphaToCoverage===!1,alphaMap:zt,alphaTest:bt,alphaHash:xt,combine:C.combine,mapUv:Ne&&b(C.map.channel),aoMapUv:H&&b(C.aoMap.channel),lightMapUv:yn&&b(C.lightMap.channel),bumpMapUv:Ee&&b(C.bumpMap.channel),normalMapUv:pe&&b(C.normalMap.channel),displacementMapUv:Vt&&b(C.displacementMap.channel),emissiveMapUv:xe&&b(C.emissiveMap.channel),metalnessMapUv:jt&&b(C.metalnessMap.channel),roughnessMapUv:ae&&b(C.roughnessMap.channel),anisotropyMapUv:ct&&b(C.anisotropyMap.channel),clearcoatMapUv:Ot&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:qt&&b(C.sheenRoughnessMap.channel),specularMapUv:Yt&&b(C.specularMap.channel),specularColorMapUv:wt&&b(C.specularColorMap.channel),specularIntensityMapUv:ie&&b(C.specularIntensityMap.channel),transmissionMapUv:X&&b(C.transmissionMap.channel),thicknessMapUv:Ut&&b(C.thicknessMap.channel),alphaMapUv:zt&&b(C.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(pe||Je),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!lt.attributes.uv&&(Ne||zt),fog:!!ft,useFog:C.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Rt,skinning:at.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:_t,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:ne,decodeVideoTexture:Ne&&C.map.isVideoTexture===!0&&Re.getTransfer(C.map.colorSpace)===Ie,decodeVideoTextureEmissive:xe&&C.emissiveMap.isVideoTexture===!0&&Re.getTransfer(C.emissiveMap.colorSpace)===Ie,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ui,flipSided:C.side===kn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Bt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&C.extensions.multiDraw===!0||Qt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return De.vertexUv1s=p.has(1),De.vertexUv2s=p.has(2),De.vertexUv3s=p.has(3),p.clear(),De}function x(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const G in C.defines)w.push(G),w.push(C.defines[G]);return C.isRawShaderMaterial===!1&&(P(w,C),L(w,C),w.push(r.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function P(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function L(C,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reverseDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const w=E[C.type];let G;if(w){const it=Di[w];G=ky.clone(it.uniforms)}else G=C.uniforms;return G}function F(C,w){let G;for(let it=0,at=g.length;it<at;it++){const ft=g[it];if(ft.cacheKey===w){G=ft,++G.usedTimes;break}}return G===void 0&&(G=new xA(r,w,C,c),g.push(G)),G}function B(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),C.destroy()}}function I(C){m.remove(C)}function V(){m.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:D,acquireProgram:F,releaseProgram:B,releaseShaderCache:I,programs:g,dispose:V}}function TA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function bA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function A0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function R0(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(_,v,y,E,b,S){let x=r[t];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:E,renderOrder:_.renderOrder,z:b,group:S},r[t]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=b,x.group=S),t++,x}function d(_,v,y,E,b,S){const x=h(_,v,y,E,b,S);y.transmission>0?s.push(x):y.transparent===!0?l.push(x):i.push(x)}function m(_,v,y,E,b,S){const x=h(_,v,y,E,b,S);y.transmission>0?s.unshift(x):y.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,v){i.length>1&&i.sort(_||bA),s.length>1&&s.sort(v||A0),l.length>1&&l.sort(v||A0)}function g(){for(let _=t,v=r.length;_<v;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function AA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new R0,r.set(s,[h])):l>=c.length?(h=new R0,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function RA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Z,color:new de};break;case"SpotLight":i={position:new Z,direction:new Z,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new de,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new de,groundColor:new de};break;case"RectAreaLight":i={color:new de,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[t.id]=i,i}}}function wA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let CA=0;function DA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function UA(r){const t=new RA,i=wA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Z);const l=new Z,c=new qe,h=new qe;function d(p){let g=0,_=0,v=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let y=0,E=0,b=0,S=0,x=0,P=0,L=0,D=0,F=0,B=0,I=0;p.sort(DA);for(let C=0,w=p.length;C<w;C++){const G=p[C],it=G.color,at=G.intensity,ft=G.distance,lt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=it.r*at,_+=it.g*at,v+=it.b*at;else if(G.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(G.sh.coefficients[N],at);I++}else if(G.isDirectionalLight){const N=t.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const q=G.shadow,W=i.get(G);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,s.directionalShadow[y]=W,s.directionalShadowMap[y]=lt,s.directionalShadowMatrix[y]=G.shadow.matrix,P++}s.directional[y]=N,y++}else if(G.isSpotLight){const N=t.get(G);N.position.setFromMatrixPosition(G.matrixWorld),N.color.copy(it).multiplyScalar(at),N.distance=ft,N.coneCos=Math.cos(G.angle),N.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),N.decay=G.decay,s.spot[b]=N;const q=G.shadow;if(G.map&&(s.spotLightMap[F]=G.map,F++,q.updateMatrices(G),G.castShadow&&B++),s.spotLightMatrix[b]=q.matrix,G.castShadow){const W=i.get(G);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,s.spotShadow[b]=W,s.spotShadowMap[b]=lt,D++}b++}else if(G.isRectAreaLight){const N=t.get(G);N.color.copy(it).multiplyScalar(at),N.halfWidth.set(G.width*.5,0,0),N.halfHeight.set(0,G.height*.5,0),s.rectArea[S]=N,S++}else if(G.isPointLight){const N=t.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),N.distance=G.distance,N.decay=G.decay,G.castShadow){const q=G.shadow,W=i.get(G);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,W.shadowCameraNear=q.camera.near,W.shadowCameraFar=q.camera.far,s.pointShadow[E]=W,s.pointShadowMap[E]=lt,s.pointShadowMatrix[E]=G.shadow.matrix,L++}s.point[E]=N,E++}else if(G.isHemisphereLight){const N=t.get(G);N.skyColor.copy(G.color).multiplyScalar(at),N.groundColor.copy(G.groundColor).multiplyScalar(at),s.hemi[x]=N,x++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=v;const V=s.hash;(V.directionalLength!==y||V.pointLength!==E||V.spotLength!==b||V.rectAreaLength!==S||V.hemiLength!==x||V.numDirectionalShadows!==P||V.numPointShadows!==L||V.numSpotShadows!==D||V.numSpotMaps!==F||V.numLightProbes!==I)&&(s.directional.length=y,s.spot.length=b,s.rectArea.length=S,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+F-B,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=I,V.directionalLength=y,V.pointLength=E,V.spotLength=b,V.rectAreaLength=S,V.hemiLength=x,V.numDirectionalShadows=P,V.numPointShadows=L,V.numSpotShadows=D,V.numSpotMaps=F,V.numLightProbes=I,s.version=CA++)}function m(p,g){let _=0,v=0,y=0,E=0,b=0;const S=g.matrixWorldInverse;for(let x=0,P=p.length;x<P;x++){const L=p[x];if(L.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),_++}else if(L.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),y++}else if(L.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),h.identity(),c.copy(L.matrixWorld),c.premultiply(S),h.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const D=s.point[v];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),v++}else if(L.isHemisphereLight){const D=s.hemi[b];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(S),b++}}}return{setup:d,setupView:m,state:s}}function w0(r){const t=new UA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function LA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new w0(r),t.set(l,[d])):c>=h.length?(d=new w0(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const NA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OA=`uniform sampler2D shadow_pass;
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
}`;function PA(r,t,i){let s=new Pd;const l=new se,c=new se,h=new Qe,d=new $y({depthPacking:uy}),m=new tM,p={},g=i.maxTextureSize,_={[Ya]:kn,[kn]:Ya,[Ui]:Ui},v=new ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:NA,fragmentShader:OA}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new ii;E.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ni(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=z0;let x=this.type;this.render=function(B,I,V){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;const C=r.getRenderTarget(),w=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),it=r.state;it.setBlending(Wa),it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const at=x!==oa&&this.type===oa,ft=x===oa&&this.type!==oa;for(let lt=0,N=B.length;lt<N;lt++){const q=B[lt],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const St=W.getFrameExtents();if(l.multiply(St),c.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/St.x),l.x=c.x*St.x,W.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/St.y),l.y=c.y*St.y,W.mapSize.y=c.y)),W.map===null||at===!0||ft===!0){const $=this.type!==oa?{minFilter:Mi,magFilter:Mi}:{};W.map!==null&&W.map.dispose(),W.map=new Rs(l.x,l.y,$),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const U=W.getViewportCount();for(let $=0;$<U;$++){const _t=W.getViewport($);h.set(c.x*_t.x,c.y*_t.y,c.x*_t.z,c.y*_t.w),it.viewport(h),W.updateMatrices(q,$),s=W.getFrustum(),D(I,V,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===oa&&P(W,V),W.needsUpdate=!1}x=this.type,S.needsUpdate=!1,r.setRenderTarget(C,w,G)};function P(B,I){const V=t.update(b);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Rs(l.x,l.y)),v.uniforms.shadow_pass.value=B.map.texture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(I,null,V,v,b,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(I,null,V,y,b,null)}function L(B,I,V,C){let w=null;const G=V.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)w=G;else if(w=V.isPointLight===!0?m:d,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const it=w.uuid,at=I.uuid;let ft=p[it];ft===void 0&&(ft={},p[it]=ft);let lt=ft[at];lt===void 0&&(lt=w.clone(),ft[at]=lt,I.addEventListener("dispose",F)),w=lt}if(w.visible=I.visible,w.wireframe=I.wireframe,C===oa?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:_[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,V.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const it=r.properties.get(w);it.light=V}return w}function D(B,I,V,C,w){if(B.visible===!1)return;if(B.layers.test(I.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===oa)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,B.matrixWorld);const at=t.update(B),ft=B.material;if(Array.isArray(ft)){const lt=at.groups;for(let N=0,q=lt.length;N<q;N++){const W=lt[N],St=ft[W.materialIndex];if(St&&St.visible){const U=L(B,St,C,w);B.onBeforeShadow(r,B,I,V,at,U,W),r.renderBufferDirect(V,null,at,U,B,W),B.onAfterShadow(r,B,I,V,at,U,W)}}}else if(ft.visible){const lt=L(B,ft,C,w);B.onBeforeShadow(r,B,I,V,at,lt,null),r.renderBufferDirect(V,null,at,lt,B,null),B.onAfterShadow(r,B,I,V,at,lt,null)}}const it=B.children;for(let at=0,ft=it.length;at<ft;at++)D(it[at],I,V,C,w)}function F(B){B.target.removeEventListener("dispose",F);for(const V in p){const C=p[V],w=B.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const zA={[Bh]:Fh,[Hh]:kh,[Gh]:Xh,[Ar]:Vh,[Fh]:Bh,[kh]:Hh,[Xh]:Gh,[Vh]:Ar};function IA(r,t){function i(){let X=!1;const Ut=new Qe;let Et=null;const zt=new Qe(0,0,0,0);return{setMask:function(bt){Et!==bt&&!X&&(r.colorMask(bt,bt,bt,bt),Et=bt)},setLocked:function(bt){X=bt},setClear:function(bt,xt,Bt,ne,De){De===!0&&(bt*=ne,xt*=ne,Bt*=ne),Ut.set(bt,xt,Bt,ne),zt.equals(Ut)===!1&&(r.clearColor(bt,xt,Bt,ne),zt.copy(Ut))},reset:function(){X=!1,Et=null,zt.set(-1,0,0,0)}}}function s(){let X=!1,Ut=!1,Et=null,zt=null,bt=null;return{setReversed:function(xt){if(Ut!==xt){const Bt=t.get("EXT_clip_control");xt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Ut=xt;const ne=bt;bt=null,this.setClear(ne)}},getReversed:function(){return Ut},setTest:function(xt){xt?At(r.DEPTH_TEST):Rt(r.DEPTH_TEST)},setMask:function(xt){Et!==xt&&!X&&(r.depthMask(xt),Et=xt)},setFunc:function(xt){if(Ut&&(xt=zA[xt]),zt!==xt){switch(xt){case Bh:r.depthFunc(r.NEVER);break;case Fh:r.depthFunc(r.ALWAYS);break;case Hh:r.depthFunc(r.LESS);break;case Ar:r.depthFunc(r.LEQUAL);break;case Gh:r.depthFunc(r.EQUAL);break;case Vh:r.depthFunc(r.GEQUAL);break;case kh:r.depthFunc(r.GREATER);break;case Xh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}zt=xt}},setLocked:function(xt){X=xt},setClear:function(xt){bt!==xt&&(Ut&&(xt=1-xt),r.clearDepth(xt),bt=xt)},reset:function(){X=!1,Et=null,zt=null,bt=null,Ut=!1}}}function l(){let X=!1,Ut=null,Et=null,zt=null,bt=null,xt=null,Bt=null,ne=null,De=null;return{setTest:function(be){X||(be?At(r.STENCIL_TEST):Rt(r.STENCIL_TEST))},setMask:function(be){Ut!==be&&!X&&(r.stencilMask(be),Ut=be)},setFunc:function(be,Wn,dn){(Et!==be||zt!==Wn||bt!==dn)&&(r.stencilFunc(be,Wn,dn),Et=be,zt=Wn,bt=dn)},setOp:function(be,Wn,dn){(xt!==be||Bt!==Wn||ne!==dn)&&(r.stencilOp(be,Wn,dn),xt=be,Bt=Wn,ne=dn)},setLocked:function(be){X=be},setClear:function(be){De!==be&&(r.clearStencil(be),De=be)},reset:function(){X=!1,Ut=null,Et=null,zt=null,bt=null,xt=null,Bt=null,ne=null,De=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,y=[],E=null,b=!1,S=null,x=null,P=null,L=null,D=null,F=null,B=null,I=new de(0,0,0),V=0,C=!1,w=null,G=null,it=null,at=null,ft=null;const lt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,q=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(W)[1]),N=q>=1):W.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),N=q>=2);let St=null,U={};const $=r.getParameter(r.SCISSOR_BOX),_t=r.getParameter(r.VIEWPORT),yt=new Qe().fromArray($),Q=new Qe().fromArray(_t);function ut(X,Ut,Et,zt){const bt=new Uint8Array(4),xt=r.createTexture();r.bindTexture(X,xt),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Bt=0;Bt<Et;Bt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Ut,0,r.RGBA,1,1,zt,0,r.RGBA,r.UNSIGNED_BYTE,bt):r.texImage2D(Ut+Bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,bt);return xt}const gt={};gt[r.TEXTURE_2D]=ut(r.TEXTURE_2D,r.TEXTURE_2D,1),gt[r.TEXTURE_CUBE_MAP]=ut(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[r.TEXTURE_2D_ARRAY]=ut(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),gt[r.TEXTURE_3D]=ut(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),At(r.DEPTH_TEST),h.setFunc(Ar),Ee(!1),pe(M_),At(r.CULL_FACE),H(Wa);function At(X){g[X]!==!0&&(r.enable(X),g[X]=!0)}function Rt(X){g[X]!==!1&&(r.disable(X),g[X]=!1)}function re(X,Ut){return _[X]!==Ut?(r.bindFramebuffer(X,Ut),_[X]=Ut,X===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Ut),X===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Qt(X,Ut){let Et=y,zt=!1;if(X){Et=v.get(Ut),Et===void 0&&(Et=[],v.set(Ut,Et));const bt=X.textures;if(Et.length!==bt.length||Et[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,Bt=bt.length;xt<Bt;xt++)Et[xt]=r.COLOR_ATTACHMENT0+xt;Et.length=bt.length,zt=!0}}else Et[0]!==r.BACK&&(Et[0]=r.BACK,zt=!0);zt&&r.drawBuffers(Et)}function Ne(X){return E!==X?(r.useProgram(X),E=X,!0):!1}const Fe={[ys]:r.FUNC_ADD,[zS]:r.FUNC_SUBTRACT,[IS]:r.FUNC_REVERSE_SUBTRACT};Fe[BS]=r.MIN,Fe[FS]=r.MAX;const ve={[HS]:r.ZERO,[GS]:r.ONE,[VS]:r.SRC_COLOR,[zh]:r.SRC_ALPHA,[jS]:r.SRC_ALPHA_SATURATE,[qS]:r.DST_COLOR,[XS]:r.DST_ALPHA,[kS]:r.ONE_MINUS_SRC_COLOR,[Ih]:r.ONE_MINUS_SRC_ALPHA,[YS]:r.ONE_MINUS_DST_COLOR,[WS]:r.ONE_MINUS_DST_ALPHA,[ZS]:r.CONSTANT_COLOR,[KS]:r.ONE_MINUS_CONSTANT_COLOR,[QS]:r.CONSTANT_ALPHA,[JS]:r.ONE_MINUS_CONSTANT_ALPHA};function H(X,Ut,Et,zt,bt,xt,Bt,ne,De,be){if(X===Wa){b===!0&&(Rt(r.BLEND),b=!1);return}if(b===!1&&(At(r.BLEND),b=!0),X!==PS){if(X!==S||be!==C){if((x!==ys||D!==ys)&&(r.blendEquation(r.FUNC_ADD),x=ys,D=ys),be)switch(X){case Er:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case E_:r.blendFunc(r.ONE,r.ONE);break;case T_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case b_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Er:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case E_:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case T_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case b_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}P=null,L=null,F=null,B=null,I.set(0,0,0),V=0,S=X,C=be}return}bt=bt||Ut,xt=xt||Et,Bt=Bt||zt,(Ut!==x||bt!==D)&&(r.blendEquationSeparate(Fe[Ut],Fe[bt]),x=Ut,D=bt),(Et!==P||zt!==L||xt!==F||Bt!==B)&&(r.blendFuncSeparate(ve[Et],ve[zt],ve[xt],ve[Bt]),P=Et,L=zt,F=xt,B=Bt),(ne.equals(I)===!1||De!==V)&&(r.blendColor(ne.r,ne.g,ne.b,De),I.copy(ne),V=De),S=X,C=!1}function yn(X,Ut){X.side===Ui?Rt(r.CULL_FACE):At(r.CULL_FACE);let Et=X.side===kn;Ut&&(Et=!Et),Ee(Et),X.blending===Er&&X.transparent===!1?H(Wa):H(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const zt=X.stencilWrite;d.setTest(zt),zt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),xe(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?At(r.SAMPLE_ALPHA_TO_COVERAGE):Rt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(X){w!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),w=X)}function pe(X){X!==LS?(At(r.CULL_FACE),X!==G&&(X===M_?r.cullFace(r.BACK):X===NS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Rt(r.CULL_FACE),G=X}function Vt(X){X!==it&&(N&&r.lineWidth(X),it=X)}function xe(X,Ut,Et){X?(At(r.POLYGON_OFFSET_FILL),(at!==Ut||ft!==Et)&&(r.polygonOffset(Ut,Et),at=Ut,ft=Et)):Rt(r.POLYGON_OFFSET_FILL)}function jt(X){X?At(r.SCISSOR_TEST):Rt(r.SCISSOR_TEST)}function ae(X){X===void 0&&(X=r.TEXTURE0+lt-1),St!==X&&(r.activeTexture(X),St=X)}function Je(X,Ut,Et){Et===void 0&&(St===null?Et=r.TEXTURE0+lt-1:Et=St);let zt=U[Et];zt===void 0&&(zt={type:void 0,texture:void 0},U[Et]=zt),(zt.type!==X||zt.texture!==Ut)&&(St!==Et&&(r.activeTexture(Et),St=Et),r.bindTexture(X,Ut||gt[X]),zt.type=X,zt.texture=Ut)}function O(){const X=U[St];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function dt(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function mt(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ot(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Gt(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function kt(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pt(X){yt.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),yt.copy(X))}function qt(X){Q.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Q.copy(X))}function Yt(X,Ut){let Et=p.get(Ut);Et===void 0&&(Et=new WeakMap,p.set(Ut,Et));let zt=Et.get(X);zt===void 0&&(zt=r.getUniformBlockIndex(Ut,X.name),Et.set(X,zt))}function wt(X,Ut){const zt=p.get(Ut).get(X);m.get(Ut)!==zt&&(r.uniformBlockBinding(Ut,zt,X.__bindingPointIndex),m.set(Ut,zt))}function ie(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},St=null,U={},_={},v=new WeakMap,y=[],E=null,b=!1,S=null,x=null,P=null,L=null,D=null,F=null,B=null,I=new de(0,0,0),V=0,C=!1,w=null,G=null,it=null,at=null,ft=null,yt.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:At,disable:Rt,bindFramebuffer:re,drawBuffers:Qt,useProgram:Ne,setBlending:H,setMaterial:yn,setFlipSided:Ee,setCullFace:pe,setLineWidth:Vt,setPolygonOffset:xe,setScissorTest:jt,activeTexture:ae,bindTexture:Je,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:et,texImage2D:kt,texImage3D:Mt,updateUBOMapping:Yt,uniformBlockBinding:wt,texStorage2D:Dt,texStorage3D:Gt,texSubImage2D:dt,texSubImage3D:mt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Ot,scissor:Pt,viewport:qt,reset:ie}}function BA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new se,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,T){return y?new OffscreenCanvas(O,T):Gc("canvas")}function b(O,T,et){let dt=1;const mt=Je(O);if((mt.width>et||mt.height>et)&&(dt=et/Math.max(mt.width,mt.height)),dt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ct=Math.floor(dt*mt.width),Ot=Math.floor(dt*mt.height);_===void 0&&(_=E(ct,Ot));const Dt=T?E(ct,Ot):_;return Dt.width=ct,Dt.height=Ot,Dt.getContext("2d").drawImage(O,0,0,ct,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ct+"x"+Ot+")."),Dt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),O;return O}function S(O){return O.generateMipmaps}function x(O){r.generateMipmap(O)}function P(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(O,T,et,dt,mt=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ct=T;if(T===r.RED&&(et===r.FLOAT&&(ct=r.R32F),et===r.HALF_FLOAT&&(ct=r.R16F),et===r.UNSIGNED_BYTE&&(ct=r.R8)),T===r.RED_INTEGER&&(et===r.UNSIGNED_BYTE&&(ct=r.R8UI),et===r.UNSIGNED_SHORT&&(ct=r.R16UI),et===r.UNSIGNED_INT&&(ct=r.R32UI),et===r.BYTE&&(ct=r.R8I),et===r.SHORT&&(ct=r.R16I),et===r.INT&&(ct=r.R32I)),T===r.RG&&(et===r.FLOAT&&(ct=r.RG32F),et===r.HALF_FLOAT&&(ct=r.RG16F),et===r.UNSIGNED_BYTE&&(ct=r.RG8)),T===r.RG_INTEGER&&(et===r.UNSIGNED_BYTE&&(ct=r.RG8UI),et===r.UNSIGNED_SHORT&&(ct=r.RG16UI),et===r.UNSIGNED_INT&&(ct=r.RG32UI),et===r.BYTE&&(ct=r.RG8I),et===r.SHORT&&(ct=r.RG16I),et===r.INT&&(ct=r.RG32I)),T===r.RGB_INTEGER&&(et===r.UNSIGNED_BYTE&&(ct=r.RGB8UI),et===r.UNSIGNED_SHORT&&(ct=r.RGB16UI),et===r.UNSIGNED_INT&&(ct=r.RGB32UI),et===r.BYTE&&(ct=r.RGB8I),et===r.SHORT&&(ct=r.RGB16I),et===r.INT&&(ct=r.RGB32I)),T===r.RGBA_INTEGER&&(et===r.UNSIGNED_BYTE&&(ct=r.RGBA8UI),et===r.UNSIGNED_SHORT&&(ct=r.RGBA16UI),et===r.UNSIGNED_INT&&(ct=r.RGBA32UI),et===r.BYTE&&(ct=r.RGBA8I),et===r.SHORT&&(ct=r.RGBA16I),et===r.INT&&(ct=r.RGBA32I)),T===r.RGB&&et===r.UNSIGNED_INT_5_9_9_9_REV&&(ct=r.RGB9_E5),T===r.RGBA){const Ot=mt?Fc:Re.getTransfer(dt);et===r.FLOAT&&(ct=r.RGBA32F),et===r.HALF_FLOAT&&(ct=r.RGBA16F),et===r.UNSIGNED_BYTE&&(ct=Ot===Ie?r.SRGB8_ALPHA8:r.RGBA8),et===r.UNSIGNED_SHORT_4_4_4_4&&(ct=r.RGBA4),et===r.UNSIGNED_SHORT_5_5_5_1&&(ct=r.RGB5_A1)}return(ct===r.R16F||ct===r.R32F||ct===r.RG16F||ct===r.RG32F||ct===r.RGBA16F||ct===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function D(O,T){let et;return O?T===null||T===bs||T===Bo?et=r.DEPTH24_STENCIL8:T===la?et=r.DEPTH32F_STENCIL8:T===Io&&(et=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===bs||T===Bo?et=r.DEPTH_COMPONENT24:T===la?et=r.DEPTH_COMPONENT32F:T===Io&&(et=r.DEPTH_COMPONENT16),et}function F(O,T){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Mi&&O.minFilter!==Li?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function B(O){const T=O.target;T.removeEventListener("dispose",B),V(T),T.isVideoTexture&&g.delete(T)}function I(O){const T=O.target;T.removeEventListener("dispose",I),w(T)}function V(O){const T=s.get(O);if(T.__webglInit===void 0)return;const et=O.source,dt=v.get(et);if(dt){const mt=dt[T.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&C(O),Object.keys(dt).length===0&&v.delete(et)}s.remove(O)}function C(O){const T=s.get(O);r.deleteTexture(T.__webglTexture);const et=O.source,dt=v.get(et);delete dt[T.__cacheKey],h.memory.textures--}function w(O){const T=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(T.__webglFramebuffer[dt]))for(let mt=0;mt<T.__webglFramebuffer[dt].length;mt++)r.deleteFramebuffer(T.__webglFramebuffer[dt][mt]);else r.deleteFramebuffer(T.__webglFramebuffer[dt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[dt])}else{if(Array.isArray(T.__webglFramebuffer))for(let dt=0;dt<T.__webglFramebuffer.length;dt++)r.deleteFramebuffer(T.__webglFramebuffer[dt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let dt=0;dt<T.__webglColorRenderbuffer.length;dt++)T.__webglColorRenderbuffer[dt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[dt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=O.textures;for(let dt=0,mt=et.length;dt<mt;dt++){const ct=s.get(et[dt]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),h.memory.textures--),s.remove(et[dt])}s.remove(O)}let G=0;function it(){G=0}function at(){const O=G;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),G+=1,O}function ft(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function lt(O,T){const et=s.get(O);if(O.isVideoTexture&&jt(O),O.isRenderTargetTexture===!1&&O.version>0&&et.__version!==O.version){const dt=O.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(et,O,T);return}}i.bindTexture(r.TEXTURE_2D,et.__webglTexture,r.TEXTURE0+T)}function N(O,T){const et=s.get(O);if(O.version>0&&et.__version!==O.version){gt(et,O,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,et.__webglTexture,r.TEXTURE0+T)}function q(O,T){const et=s.get(O);if(O.version>0&&et.__version!==O.version){gt(et,O,T);return}i.bindTexture(r.TEXTURE_3D,et.__webglTexture,r.TEXTURE0+T)}function W(O,T){const et=s.get(O);if(O.version>0&&et.__version!==O.version){At(et,O,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture,r.TEXTURE0+T)}const St={[Yh]:r.REPEAT,[Es]:r.CLAMP_TO_EDGE,[jh]:r.MIRRORED_REPEAT},U={[Mi]:r.NEAREST,[ly]:r.NEAREST_MIPMAP_NEAREST,[ac]:r.NEAREST_MIPMAP_LINEAR,[Li]:r.LINEAR,[eh]:r.LINEAR_MIPMAP_NEAREST,[Ts]:r.LINEAR_MIPMAP_LINEAR},$={[hy]:r.NEVER,[vy]:r.ALWAYS,[dy]:r.LESS,[q0]:r.LEQUAL,[py]:r.EQUAL,[_y]:r.GEQUAL,[my]:r.GREATER,[gy]:r.NOTEQUAL};function _t(O,T){if(T.type===la&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Li||T.magFilter===eh||T.magFilter===ac||T.magFilter===Ts||T.minFilter===Li||T.minFilter===eh||T.minFilter===ac||T.minFilter===Ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,St[T.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,St[T.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,St[T.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,U[T.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,U[T.minFilter]),T.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,$[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Mi||T.minFilter!==ac&&T.minFilter!==Ts||T.type===la&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");r.texParameterf(O,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function yt(O,T){let et=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",B));const dt=T.source;let mt=v.get(dt);mt===void 0&&(mt={},v.set(dt,mt));const ct=ft(T);if(ct!==O.__cacheKey){mt[ct]===void 0&&(mt[ct]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,et=!0),mt[ct].usedTimes++;const Ot=mt[O.__cacheKey];Ot!==void 0&&(mt[O.__cacheKey].usedTimes--,Ot.usedTimes===0&&C(T)),O.__cacheKey=ct,O.__webglTexture=mt[ct].texture}return et}function Q(O,T,et){return Math.floor(Math.floor(O/et)/T)}function ut(O,T,et,dt){const ct=O.updateRanges;if(ct.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,et,dt,T.data);else{ct.sort((Mt,Pt)=>Mt.start-Pt.start);let Ot=0;for(let Mt=1;Mt<ct.length;Mt++){const Pt=ct[Ot],qt=ct[Mt],Yt=Pt.start+Pt.count,wt=Q(qt.start,T.width,4),ie=Q(Pt.start,T.width,4);qt.start<=Yt+1&&wt===ie&&Q(qt.start+qt.count-1,T.width,4)===wt?Pt.count=Math.max(Pt.count,qt.start+qt.count-Pt.start):(++Ot,ct[Ot]=qt)}ct.length=Ot+1;const Dt=r.getParameter(r.UNPACK_ROW_LENGTH),Gt=r.getParameter(r.UNPACK_SKIP_PIXELS),kt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Mt=0,Pt=ct.length;Mt<Pt;Mt++){const qt=ct[Mt],Yt=Math.floor(qt.start/4),wt=Math.ceil(qt.count/4),ie=Yt%T.width,X=Math.floor(Yt/T.width),Ut=wt,Et=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ie),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,ie,X,Ut,Et,et,dt,T.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Dt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Gt),r.pixelStorei(r.UNPACK_SKIP_ROWS,kt)}}function gt(O,T,et){let dt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(dt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(dt=r.TEXTURE_3D);const mt=yt(O,T),ct=T.source;i.bindTexture(dt,O.__webglTexture,r.TEXTURE0+et);const Ot=s.get(ct);if(ct.version!==Ot.__version||mt===!0){i.activeTexture(r.TEXTURE0+et);const Dt=Re.getPrimaries(Re.workingColorSpace),Gt=T.colorSpace===Xa?null:Re.getPrimaries(T.colorSpace),kt=T.colorSpace===Xa||Dt===Gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let Mt=b(T.image,!1,l.maxTextureSize);Mt=ae(T,Mt);const Pt=c.convert(T.format,T.colorSpace),qt=c.convert(T.type);let Yt=L(T.internalFormat,Pt,qt,T.colorSpace,T.isVideoTexture);_t(dt,T);let wt;const ie=T.mipmaps,X=T.isVideoTexture!==!0,Ut=Ot.__version===void 0||mt===!0,Et=ct.dataReady,zt=F(T,Mt);if(T.isDepthTexture)Yt=D(T.format===Ho,T.type),Ut&&(X?i.texStorage2D(r.TEXTURE_2D,1,Yt,Mt.width,Mt.height):i.texImage2D(r.TEXTURE_2D,0,Yt,Mt.width,Mt.height,0,Pt,qt,null));else if(T.isDataTexture)if(ie.length>0){X&&Ut&&i.texStorage2D(r.TEXTURE_2D,zt,Yt,ie[0].width,ie[0].height);for(let bt=0,xt=ie.length;bt<xt;bt++)wt=ie[bt],X?Et&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,wt.width,wt.height,Pt,qt,wt.data):i.texImage2D(r.TEXTURE_2D,bt,Yt,wt.width,wt.height,0,Pt,qt,wt.data);T.generateMipmaps=!1}else X?(Ut&&i.texStorage2D(r.TEXTURE_2D,zt,Yt,Mt.width,Mt.height),Et&&ut(T,Mt,Pt,qt)):i.texImage2D(r.TEXTURE_2D,0,Yt,Mt.width,Mt.height,0,Pt,qt,Mt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&Ut&&i.texStorage3D(r.TEXTURE_2D_ARRAY,zt,Yt,ie[0].width,ie[0].height,Mt.depth);for(let bt=0,xt=ie.length;bt<xt;bt++)if(wt=ie[bt],T.format!==yi)if(Pt!==null)if(X){if(Et)if(T.layerUpdates.size>0){const Bt=a0(wt.width,wt.height,T.format,T.type);for(const ne of T.layerUpdates){const De=wt.data.subarray(ne*Bt/wt.data.BYTES_PER_ELEMENT,(ne+1)*Bt/wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,ne,wt.width,wt.height,1,Pt,De)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,wt.width,wt.height,Mt.depth,Pt,wt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,bt,Yt,wt.width,wt.height,Mt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Et&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,wt.width,wt.height,Mt.depth,Pt,qt,wt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,bt,Yt,wt.width,wt.height,Mt.depth,0,Pt,qt,wt.data)}else{X&&Ut&&i.texStorage2D(r.TEXTURE_2D,zt,Yt,ie[0].width,ie[0].height);for(let bt=0,xt=ie.length;bt<xt;bt++)wt=ie[bt],T.format!==yi?Pt!==null?X?Et&&i.compressedTexSubImage2D(r.TEXTURE_2D,bt,0,0,wt.width,wt.height,Pt,wt.data):i.compressedTexImage2D(r.TEXTURE_2D,bt,Yt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Et&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,wt.width,wt.height,Pt,qt,wt.data):i.texImage2D(r.TEXTURE_2D,bt,Yt,wt.width,wt.height,0,Pt,qt,wt.data)}else if(T.isDataArrayTexture)if(X){if(Ut&&i.texStorage3D(r.TEXTURE_2D_ARRAY,zt,Yt,Mt.width,Mt.height,Mt.depth),Et)if(T.layerUpdates.size>0){const bt=a0(Mt.width,Mt.height,T.format,T.type);for(const xt of T.layerUpdates){const Bt=Mt.data.subarray(xt*bt/Mt.data.BYTES_PER_ELEMENT,(xt+1)*bt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,Mt.width,Mt.height,1,Pt,qt,Bt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Pt,qt,Mt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Yt,Mt.width,Mt.height,Mt.depth,0,Pt,qt,Mt.data);else if(T.isData3DTexture)X?(Ut&&i.texStorage3D(r.TEXTURE_3D,zt,Yt,Mt.width,Mt.height,Mt.depth),Et&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Pt,qt,Mt.data)):i.texImage3D(r.TEXTURE_3D,0,Yt,Mt.width,Mt.height,Mt.depth,0,Pt,qt,Mt.data);else if(T.isFramebufferTexture){if(Ut)if(X)i.texStorage2D(r.TEXTURE_2D,zt,Yt,Mt.width,Mt.height);else{let bt=Mt.width,xt=Mt.height;for(let Bt=0;Bt<zt;Bt++)i.texImage2D(r.TEXTURE_2D,Bt,Yt,bt,xt,0,Pt,qt,null),bt>>=1,xt>>=1}}else if(ie.length>0){if(X&&Ut){const bt=Je(ie[0]);i.texStorage2D(r.TEXTURE_2D,zt,Yt,bt.width,bt.height)}for(let bt=0,xt=ie.length;bt<xt;bt++)wt=ie[bt],X?Et&&i.texSubImage2D(r.TEXTURE_2D,bt,0,0,Pt,qt,wt):i.texImage2D(r.TEXTURE_2D,bt,Yt,Pt,qt,wt);T.generateMipmaps=!1}else if(X){if(Ut){const bt=Je(Mt);i.texStorage2D(r.TEXTURE_2D,zt,Yt,bt.width,bt.height)}Et&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Pt,qt,Mt)}else i.texImage2D(r.TEXTURE_2D,0,Yt,Pt,qt,Mt);S(T)&&x(dt),Ot.__version=ct.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function At(O,T,et){if(T.image.length!==6)return;const dt=yt(O,T),mt=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+et);const ct=s.get(mt);if(mt.version!==ct.__version||dt===!0){i.activeTexture(r.TEXTURE0+et);const Ot=Re.getPrimaries(Re.workingColorSpace),Dt=T.colorSpace===Xa?null:Re.getPrimaries(T.colorSpace),Gt=T.colorSpace===Xa||Ot===Dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const kt=T.isCompressedTexture||T.image[0].isCompressedTexture,Mt=T.image[0]&&T.image[0].isDataTexture,Pt=[];for(let xt=0;xt<6;xt++)!kt&&!Mt?Pt[xt]=b(T.image[xt],!0,l.maxCubemapSize):Pt[xt]=Mt?T.image[xt].image:T.image[xt],Pt[xt]=ae(T,Pt[xt]);const qt=Pt[0],Yt=c.convert(T.format,T.colorSpace),wt=c.convert(T.type),ie=L(T.internalFormat,Yt,wt,T.colorSpace),X=T.isVideoTexture!==!0,Ut=ct.__version===void 0||dt===!0,Et=mt.dataReady;let zt=F(T,qt);_t(r.TEXTURE_CUBE_MAP,T);let bt;if(kt){X&&Ut&&i.texStorage2D(r.TEXTURE_CUBE_MAP,zt,ie,qt.width,qt.height);for(let xt=0;xt<6;xt++){bt=Pt[xt].mipmaps;for(let Bt=0;Bt<bt.length;Bt++){const ne=bt[Bt];T.format!==yi?Yt!==null?X?Et&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt,0,0,ne.width,ne.height,Yt,ne.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt,ie,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt,0,0,ne.width,ne.height,Yt,wt,ne.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt,ie,ne.width,ne.height,0,Yt,wt,ne.data)}}}else{if(bt=T.mipmaps,X&&Ut){bt.length>0&&zt++;const xt=Je(Pt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,zt,ie,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Mt){X?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Pt[xt].width,Pt[xt].height,Yt,wt,Pt[xt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ie,Pt[xt].width,Pt[xt].height,0,Yt,wt,Pt[xt].data);for(let Bt=0;Bt<bt.length;Bt++){const De=bt[Bt].image[xt].image;X?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt+1,0,0,De.width,De.height,Yt,wt,De.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt+1,ie,De.width,De.height,0,Yt,wt,De.data)}}else{X?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Yt,wt,Pt[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ie,Yt,wt,Pt[xt]);for(let Bt=0;Bt<bt.length;Bt++){const ne=bt[Bt];X?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt+1,0,0,Yt,wt,ne.image[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt+1,ie,Yt,wt,ne.image[xt])}}}S(T)&&x(r.TEXTURE_CUBE_MAP),ct.__version=mt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Rt(O,T,et,dt,mt,ct){const Ot=c.convert(et.format,et.colorSpace),Dt=c.convert(et.type),Gt=L(et.internalFormat,Ot,Dt,et.colorSpace),kt=s.get(T),Mt=s.get(et);if(Mt.__renderTarget=T,!kt.__hasExternalTextures){const Pt=Math.max(1,T.width>>ct),qt=Math.max(1,T.height>>ct);mt===r.TEXTURE_3D||mt===r.TEXTURE_2D_ARRAY?i.texImage3D(mt,ct,Gt,Pt,qt,T.depth,0,Ot,Dt,null):i.texImage2D(mt,ct,Gt,Pt,qt,0,Ot,Dt,null)}i.bindFramebuffer(r.FRAMEBUFFER,O),xe(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,mt,Mt.__webglTexture,0,Vt(T)):(mt===r.TEXTURE_2D||mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,dt,mt,Mt.__webglTexture,ct),i.bindFramebuffer(r.FRAMEBUFFER,null)}function re(O,T,et){if(r.bindRenderbuffer(r.RENDERBUFFER,O),T.depthBuffer){const dt=T.depthTexture,mt=dt&&dt.isDepthTexture?dt.type:null,ct=D(T.stencilBuffer,mt),Ot=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Dt=Vt(T);xe(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Dt,ct,T.width,T.height):et?r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,ct,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ct,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ot,r.RENDERBUFFER,O)}else{const dt=T.textures;for(let mt=0;mt<dt.length;mt++){const ct=dt[mt],Ot=c.convert(ct.format,ct.colorSpace),Dt=c.convert(ct.type),Gt=L(ct.internalFormat,Ot,Dt,ct.colorSpace),kt=Vt(T);et&&xe(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,kt,Gt,T.width,T.height):xe(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,kt,Gt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Gt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Qt(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(T.depthTexture);dt.__renderTarget=T,(!dt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),lt(T.depthTexture,0);const mt=dt.__webglTexture,ct=Vt(T);if(T.depthTexture.format===Fo)xe(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,mt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,mt,0);else if(T.depthTexture.format===Ho)xe(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,mt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function Ne(O){const T=s.get(O),et=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const dt=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),dt){const mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,dt.removeEventListener("dispose",mt)};dt.addEventListener("dispose",mt),T.__depthDisposeCallback=mt}T.__boundDepthTexture=dt}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const dt=O.texture.mipmaps;dt&&dt.length>0?Qt(T.__webglFramebuffer[0],O):Qt(T.__webglFramebuffer,O)}else if(et){T.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[dt]),T.__webglDepthbuffer[dt]===void 0)T.__webglDepthbuffer[dt]=r.createRenderbuffer(),re(T.__webglDepthbuffer[dt],O,!1);else{const mt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer[dt];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,ct)}}else{const dt=O.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),re(T.__webglDepthbuffer,O,!1);else{const mt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,ct)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Fe(O,T,et){const dt=s.get(O);T!==void 0&&Rt(dt.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),et!==void 0&&Ne(O)}function ve(O){const T=O.texture,et=s.get(O),dt=s.get(T);O.addEventListener("dispose",I);const mt=O.textures,ct=O.isWebGLCubeRenderTarget===!0,Ot=mt.length>1;if(Ot||(dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture()),dt.__version=T.version,h.memory.textures++),ct){et.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[Dt]=[];for(let Gt=0;Gt<T.mipmaps.length;Gt++)et.__webglFramebuffer[Dt][Gt]=r.createFramebuffer()}else et.__webglFramebuffer[Dt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)et.__webglFramebuffer[Dt]=r.createFramebuffer()}else et.__webglFramebuffer=r.createFramebuffer();if(Ot)for(let Dt=0,Gt=mt.length;Dt<Gt;Dt++){const kt=s.get(mt[Dt]);kt.__webglTexture===void 0&&(kt.__webglTexture=r.createTexture(),h.memory.textures++)}if(O.samples>0&&xe(O)===!1){et.__webglMultisampledFramebuffer=r.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Dt=0;Dt<mt.length;Dt++){const Gt=mt[Dt];et.__webglColorRenderbuffer[Dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,et.__webglColorRenderbuffer[Dt]);const kt=c.convert(Gt.format,Gt.colorSpace),Mt=c.convert(Gt.type),Pt=L(Gt.internalFormat,kt,Mt,Gt.colorSpace,O.isXRRenderTarget===!0),qt=Vt(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,Pt,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,et.__webglColorRenderbuffer[Dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(et.__webglDepthRenderbuffer=r.createRenderbuffer(),re(et.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){i.bindTexture(r.TEXTURE_CUBE_MAP,dt.__webglTexture),_t(r.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Gt=0;Gt<T.mipmaps.length;Gt++)Rt(et.__webglFramebuffer[Dt][Gt],O,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Gt);else Rt(et.__webglFramebuffer[Dt],O,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);S(T)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let Dt=0,Gt=mt.length;Dt<Gt;Dt++){const kt=mt[Dt],Mt=s.get(kt);i.bindTexture(r.TEXTURE_2D,Mt.__webglTexture),_t(r.TEXTURE_2D,kt),Rt(et.__webglFramebuffer,O,kt,r.COLOR_ATTACHMENT0+Dt,r.TEXTURE_2D,0),S(kt)&&x(r.TEXTURE_2D)}i.unbindTexture()}else{let Dt=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Dt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Dt,dt.__webglTexture),_t(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Gt=0;Gt<T.mipmaps.length;Gt++)Rt(et.__webglFramebuffer[Gt],O,T,r.COLOR_ATTACHMENT0,Dt,Gt);else Rt(et.__webglFramebuffer,O,T,r.COLOR_ATTACHMENT0,Dt,0);S(T)&&x(Dt),i.unbindTexture()}O.depthBuffer&&Ne(O)}function H(O){const T=O.textures;for(let et=0,dt=T.length;et<dt;et++){const mt=T[et];if(S(mt)){const ct=P(O),Ot=s.get(mt).__webglTexture;i.bindTexture(ct,Ot),x(ct),i.unbindTexture()}}}const yn=[],Ee=[];function pe(O){if(O.samples>0){if(xe(O)===!1){const T=O.textures,et=O.width,dt=O.height;let mt=r.COLOR_BUFFER_BIT;const ct=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ot=s.get(O),Dt=T.length>1;if(Dt)for(let kt=0;kt<T.length;kt++)i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const Gt=O.texture.mipmaps;Gt&&Gt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let kt=0;kt<T.length;kt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(mt|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(mt|=r.STENCIL_BUFFER_BIT)),Dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ot.__webglColorRenderbuffer[kt]);const Mt=s.get(T[kt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Mt,0)}r.blitFramebuffer(0,0,et,dt,0,0,et,dt,mt,r.NEAREST),m===!0&&(yn.length=0,Ee.length=0,yn.push(r.COLOR_ATTACHMENT0+kt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(yn.push(ct),Ee.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ee)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,yn))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Dt)for(let kt=0;kt<T.length;kt++){i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.RENDERBUFFER,Ot.__webglColorRenderbuffer[kt]);const Mt=s.get(T[kt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.TEXTURE_2D,Mt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const T=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Vt(O){return Math.min(l.maxSamples,O.samples)}function xe(O){const T=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function jt(O){const T=h.render.frame;g.get(O)!==T&&(g.set(O,T),O.update())}function ae(O,T){const et=O.colorSpace,dt=O.format,mt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||et!==Cr&&et!==Xa&&(Re.getTransfer(et)===Ie?(dt!==yi||mt!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function Je(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=it,this.setTexture2D=lt,this.setTexture2DArray=N,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=Fe,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=xe}function FA(r,t){function i(s,l=Xa){let c;const h=Re.getTransfer(l);if(s===Oi)return r.UNSIGNED_BYTE;if(s===wd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Cd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===H0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===B0)return r.BYTE;if(s===F0)return r.SHORT;if(s===Io)return r.UNSIGNED_SHORT;if(s===Rd)return r.INT;if(s===bs)return r.UNSIGNED_INT;if(s===la)return r.FLOAT;if(s===Go)return r.HALF_FLOAT;if(s===G0)return r.ALPHA;if(s===V0)return r.RGB;if(s===yi)return r.RGBA;if(s===Fo)return r.DEPTH_COMPONENT;if(s===Ho)return r.DEPTH_STENCIL;if(s===k0)return r.RED;if(s===Dd)return r.RED_INTEGER;if(s===X0)return r.RG;if(s===Ud)return r.RG_INTEGER;if(s===Ld)return r.RGBA_INTEGER;if(s===Lc||s===Nc||s===Oc||s===Pc)if(h===Ie)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Lc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Nc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Lc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Nc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Pc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zh||s===Kh||s===Qh||s===Jh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Zh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$h||s===td||s===ed)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===$h||s===td)return h===Ie?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===ed)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===nd||s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===nd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===id)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ad)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===od)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ld)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ud)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===md)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zc||s===gd||s===_d)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===zc)return h===Ie?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===gd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===_d)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===W0||s===vd||s===xd||s===Sd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===zc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===vd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===xd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Sd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Bo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const HA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GA=`
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

}`;class VA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Xn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ja({vertexShader:HA,fragmentShader:GA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ni(new qo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kA extends ws{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,v=null,y=null,E=null;const b=new VA,S=i.getContextAttributes();let x=null,P=null;const L=[],D=[],F=new se;let B=null;const I=new di;I.viewport=new Qe;const V=new di;V.viewport=new Qe;const C=[I,V],w=new cM;let G=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ut=L[Q];return ut===void 0&&(ut=new Eh,L[Q]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(Q){let ut=L[Q];return ut===void 0&&(ut=new Eh,L[Q]=ut),ut.getGripSpace()},this.getHand=function(Q){let ut=L[Q];return ut===void 0&&(ut=new Eh,L[Q]=ut),ut.getHandSpace()};function at(Q){const ut=D.indexOf(Q.inputSource);if(ut===-1)return;const gt=L[ut];gt!==void 0&&(gt.update(Q.inputSource,Q.frame,p||h),gt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ft(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",ft),l.removeEventListener("inputsourceschange",lt);for(let Q=0;Q<L.length;Q++){const ut=D[Q];ut!==null&&(D[Q]=null,L[Q].disconnect(ut))}G=null,it=null,b.reset(),t.setRenderTarget(x),y=null,v=null,_=null,l=null,P=null,yt.stop(),s.isPresenting=!1,t.setPixelRatio(B),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(x=t.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",ft),l.addEventListener("inputsourceschange",lt),S.xrCompatible!==!0&&await i.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,At=null,Rt=null;S.depth&&(Rt=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,gt=S.stencil?Ho:Fo,At=S.stencil?Bo:bs);const re={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:c};_=new XRWebGLBinding(l,i),v=_.createProjectionLayer(re),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),P=new Rs(v.textureWidth,v.textureHeight,{format:yi,type:Oi,depthTexture:new av(v.textureWidth,v.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const gt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,gt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new Rs(y.framebufferWidth,y.framebufferHeight,{format:yi,type:Oi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),yt.setContext(l),yt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function lt(Q){for(let ut=0;ut<Q.removed.length;ut++){const gt=Q.removed[ut],At=D.indexOf(gt);At>=0&&(D[At]=null,L[At].disconnect(gt))}for(let ut=0;ut<Q.added.length;ut++){const gt=Q.added[ut];let At=D.indexOf(gt);if(At===-1){for(let re=0;re<L.length;re++)if(re>=D.length){D.push(gt),At=re;break}else if(D[re]===null){D[re]=gt,At=re;break}if(At===-1)break}const Rt=L[At];Rt&&Rt.connect(gt)}}const N=new Z,q=new Z;function W(Q,ut,gt){N.setFromMatrixPosition(ut.matrixWorld),q.setFromMatrixPosition(gt.matrixWorld);const At=N.distanceTo(q),Rt=ut.projectionMatrix.elements,re=gt.projectionMatrix.elements,Qt=Rt[14]/(Rt[10]-1),Ne=Rt[14]/(Rt[10]+1),Fe=(Rt[9]+1)/Rt[5],ve=(Rt[9]-1)/Rt[5],H=(Rt[8]-1)/Rt[0],yn=(re[8]+1)/re[0],Ee=Qt*H,pe=Qt*yn,Vt=At/(-H+yn),xe=Vt*-H;if(ut.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(xe),Q.translateZ(Vt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Rt[10]===-1)Q.projectionMatrix.copy(ut.projectionMatrix),Q.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const jt=Qt+Vt,ae=Ne+Vt,Je=Ee-xe,O=pe+(At-xe),T=Fe*Ne/ae*jt,et=ve*Ne/ae*jt;Q.projectionMatrix.makePerspective(Je,O,T,et,jt,ae),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function St(Q,ut){ut===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ut.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let ut=Q.near,gt=Q.far;b.texture!==null&&(b.depthNear>0&&(ut=b.depthNear),b.depthFar>0&&(gt=b.depthFar)),w.near=V.near=I.near=ut,w.far=V.far=I.far=gt,(G!==w.near||it!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),G=w.near,it=w.far),I.layers.mask=Q.layers.mask|2,V.layers.mask=Q.layers.mask|4,w.layers.mask=I.layers.mask|V.layers.mask;const At=Q.parent,Rt=w.cameras;St(w,At);for(let re=0;re<Rt.length;re++)St(Rt[re],At);Rt.length===2?W(w,I,V):w.projectionMatrix.copy(I.projectionMatrix),U(Q,w,At)};function U(Q,ut,gt){gt===null?Q.matrix.copy(ut.matrixWorld):(Q.matrix.copy(gt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ut.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ut.projectionMatrix),Q.projectionMatrixInverse.copy(ut.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=yd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(Q){m=Q,v!==null&&(v.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(w)};let $=null;function _t(Q,ut){if(g=ut.getViewerPose(p||h),E=ut,g!==null){const gt=g.views;y!==null&&(t.setRenderTargetFramebuffer(P,y.framebuffer),t.setRenderTarget(P));let At=!1;gt.length!==w.cameras.length&&(w.cameras.length=0,At=!0);for(let Qt=0;Qt<gt.length;Qt++){const Ne=gt[Qt];let Fe=null;if(y!==null)Fe=y.getViewport(Ne);else{const H=_.getViewSubImage(v,Ne);Fe=H.viewport,Qt===0&&(t.setRenderTargetTextures(P,H.colorTexture,H.depthStencilTexture),t.setRenderTarget(P))}let ve=C[Qt];ve===void 0&&(ve=new di,ve.layers.enable(Qt),ve.viewport=new Qe,C[Qt]=ve),ve.matrix.fromArray(Ne.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(Ne.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Qt===0&&(w.matrix.copy(ve.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),At===!0&&w.cameras.push(ve)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Qt=_.getDepthInformation(gt[0]);Qt&&Qt.isValid&&Qt.texture&&b.init(t,Qt,l.renderState)}}for(let gt=0;gt<L.length;gt++){const At=D[gt],Rt=L[gt];At!==null&&Rt!==void 0&&Rt.update(At,ut,p||h)}$&&$(Q,ut),ut.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ut}),E=null}const yt=new ov;yt.setAnimationLoop(_t),this.setAnimationLoop=function(Q){$=Q},this.dispose=function(){}}}const xs=new Ei,XA=new qe;function WA(r,t){function i(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,tv(r)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function l(S,x,P,L,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),_(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x)):x.isMeshStandardMaterial?(c(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,D)):x.isMeshMatcapMaterial?(c(S,x),E(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),b(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(h(S,x),x.isLineDashedMaterial&&d(S,x)):x.isPointsMaterial?m(S,x,P,L):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,i(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===kn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,i(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===kn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,i(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,i(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const P=t.get(x),L=P.envMap,D=P.envMapRotation;L&&(S.envMap.value=L,xs.copy(D),xs.x*=-1,xs.y*=-1,xs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),S.envMapRotation.value.setFromMatrix4(XA.makeRotationFromEuler(xs)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,S.aoMapTransform))}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform))}function d(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function m(S,x,P,L){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*P,S.scale.value=L*.5,x.map&&(S.map.value=x.map,i(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,P){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===kn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function b(S,x){const P=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function qA(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,L){const D=L.program;s.uniformBlockBinding(P,D)}function p(P,L){let D=l[P.id];D===void 0&&(E(P),D=g(P),l[P.id]=D,P.addEventListener("dispose",S));const F=L.program;s.updateUBOMapping(P,F);const B=t.render.frame;c[P.id]!==B&&(v(P),c[P.id]=B)}function g(P){const L=_();P.__bindingPointIndex=L;const D=r.createBuffer(),F=P.__size,B=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,F,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,D),D}function _(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(P){const L=l[P.id],D=P.uniforms,F=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let B=0,I=D.length;B<I;B++){const V=Array.isArray(D[B])?D[B]:[D[B]];for(let C=0,w=V.length;C<w;C++){const G=V[C];if(y(G,B,C,F)===!0){const it=G.__offset,at=Array.isArray(G.value)?G.value:[G.value];let ft=0;for(let lt=0;lt<at.length;lt++){const N=at[lt],q=b(N);typeof N=="number"||typeof N=="boolean"?(G.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,it+ft,G.__data)):N.isMatrix3?(G.__data[0]=N.elements[0],G.__data[1]=N.elements[1],G.__data[2]=N.elements[2],G.__data[3]=0,G.__data[4]=N.elements[3],G.__data[5]=N.elements[4],G.__data[6]=N.elements[5],G.__data[7]=0,G.__data[8]=N.elements[6],G.__data[9]=N.elements[7],G.__data[10]=N.elements[8],G.__data[11]=0):(N.toArray(G.__data,ft),ft+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,it,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(P,L,D,F){const B=P.value,I=L+"_"+D;if(F[I]===void 0)return typeof B=="number"||typeof B=="boolean"?F[I]=B:F[I]=B.clone(),!0;{const V=F[I];if(typeof B=="number"||typeof B=="boolean"){if(V!==B)return F[I]=B,!0}else if(V.equals(B)===!1)return V.copy(B),!0}return!1}function E(P){const L=P.uniforms;let D=0;const F=16;for(let I=0,V=L.length;I<V;I++){const C=Array.isArray(L[I])?L[I]:[L[I]];for(let w=0,G=C.length;w<G;w++){const it=C[w],at=Array.isArray(it.value)?it.value:[it.value];for(let ft=0,lt=at.length;ft<lt;ft++){const N=at[ft],q=b(N),W=D%F,St=W%q.boundary,U=W+St;D+=St,U!==0&&F-U<q.storage&&(D+=F-U),it.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=D,D+=q.storage}}}const B=D%F;return B>0&&(D+=F-B),P.__size=D,P.__cache={},this}function b(P){const L={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(L.boundary=4,L.storage=4):P.isVector2?(L.boundary=8,L.storage=8):P.isVector3||P.isColor?(L.boundary=16,L.storage=12):P.isVector4?(L.boundary=16,L.storage=16):P.isMatrix3?(L.boundary=48,L.storage=48):P.isMatrix4?(L.boundary=64,L.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),L}function S(P){const L=P.target;L.removeEventListener("dispose",S);const D=h.indexOf(L.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function x(){for(const P in l)r.deleteBuffer(l[P]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}class YA{constructor(t={}){const{canvas:i=yy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=h;const E=new Uint32Array(4),b=new Int32Array(4);let S=null,x=null;const P=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let F=!1;this._outputColorSpace=ei;let B=0,I=0,V=null,C=-1,w=null;const G=new Qe,it=new Qe;let at=null;const ft=new de(0);let lt=0,N=i.width,q=i.height,W=1,St=null,U=null;const $=new Qe(0,0,N,q),_t=new Qe(0,0,N,q);let yt=!1;const Q=new Pd;let ut=!1,gt=!1;const At=new qe,Rt=new qe,re=new Z,Qt=new Qe,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function ve(){return V===null?W:1}let H=s;function yn(R,j){return i.getContext(R,j)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${bd}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",bt,!1),i.addEventListener("webglcontextcreationerror",xt,!1),H===null){const j="webgl2";if(H=yn(j,R),H===null)throw yn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ee,pe,Vt,xe,jt,ae,Je,O,T,et,dt,mt,ct,Ot,Dt,Gt,kt,Mt,Pt,qt,Yt,wt,ie,X;function Ut(){Ee=new ib(H),Ee.init(),wt=new FA(H,Ee),pe=new KT(H,Ee,t,wt),Vt=new IA(H,Ee),pe.reverseDepthBuffer&&v&&Vt.buffers.depth.setReversed(!0),xe=new rb(H),jt=new TA,ae=new BA(H,Ee,Vt,jt,pe,wt,xe),Je=new JT(D),O=new nb(D),T=new hM(H),ie=new jT(H,T),et=new ab(H,T,xe,ie),dt=new lb(H,et,T,xe),Pt=new ob(H,pe,ae),Gt=new QT(jt),mt=new EA(D,Je,O,Ee,pe,ie,Gt),ct=new WA(D,jt),Ot=new AA,Dt=new LA(Ee),Mt=new YT(D,Je,O,Vt,dt,y,m),kt=new PA(D,dt,pe),X=new qA(H,xe,pe,Vt),qt=new ZT(H,Ee,xe),Yt=new sb(H,Ee,xe),xe.programs=mt.programs,D.capabilities=pe,D.extensions=Ee,D.properties=jt,D.renderLists=Ot,D.shadowMap=kt,D.state=Vt,D.info=xe}Ut();const Et=new kA(D,H);this.xr=Et,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=Ee.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ee.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(N,q,!1))},this.getSize=function(R){return R.set(N,q)},this.setSize=function(R,j,rt=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,q=j,i.width=Math.floor(R*W),i.height=Math.floor(j*W),rt===!0&&(i.style.width=R+"px",i.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(N*W,q*W).floor()},this.setDrawingBufferSize=function(R,j,rt){N=R,q=j,W=rt,i.width=Math.floor(R*rt),i.height=Math.floor(j*rt),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,j,rt,ot){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,j,rt,ot),Vt.viewport(G.copy($).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(_t)},this.setScissor=function(R,j,rt,ot){R.isVector4?_t.set(R.x,R.y,R.z,R.w):_t.set(R,j,rt,ot),Vt.scissor(it.copy(_t).multiplyScalar(W).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(R){Vt.setScissorTest(yt=R)},this.setOpaqueSort=function(R){St=R},this.setTransparentSort=function(R){U=R},this.getClearColor=function(R){return R.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,rt=!0){let ot=0;if(R){let K=!1;if(V!==null){const Tt=V.texture.format;K=Tt===Ld||Tt===Ud||Tt===Dd}if(K){const Tt=V.texture.type,Ct=Tt===Oi||Tt===bs||Tt===Io||Tt===Bo||Tt===wd||Tt===Cd,Nt=Mt.getClearColor(),It=Mt.getClearAlpha(),$t=Nt.r,Zt=Nt.g,Xt=Nt.b;Ct?(E[0]=$t,E[1]=Zt,E[2]=Xt,E[3]=It,H.clearBufferuiv(H.COLOR,0,E)):(b[0]=$t,b[1]=Zt,b[2]=Xt,b[3]=It,H.clearBufferiv(H.COLOR,0,b))}else ot|=H.COLOR_BUFFER_BIT}j&&(ot|=H.DEPTH_BUFFER_BIT),rt&&(ot|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",bt,!1),i.removeEventListener("webglcontextcreationerror",xt,!1),Mt.dispose(),Ot.dispose(),Dt.dispose(),jt.dispose(),Je.dispose(),O.dispose(),dt.dispose(),ie.dispose(),X.dispose(),mt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",rn),Et.removeEventListener("sessionend",Mn),zn.stop()};function zt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=xe.autoReset,j=kt.enabled,rt=kt.autoUpdate,ot=kt.needsUpdate,K=kt.type;Ut(),xe.autoReset=R,kt.enabled=j,kt.autoUpdate=rt,kt.needsUpdate=ot,kt.type=K}function xt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Bt(R){const j=R.target;j.removeEventListener("dispose",Bt),ne(j)}function ne(R){De(R),jt.remove(R)}function De(R){const j=jt.get(R).programs;j!==void 0&&(j.forEach(function(rt){mt.releaseProgram(rt)}),R.isShaderMaterial&&mt.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,rt,ot,K,Tt){j===null&&(j=Ne);const Ct=K.isMesh&&K.matrixWorld.determinant()<0,Nt=Qa(R,j,rt,ot,K);Vt.setMaterial(ot,Ct);let It=rt.index,$t=1;if(ot.wireframe===!0){if(It=et.getWireframeAttribute(rt),It===void 0)return;$t=2}const Zt=rt.drawRange,Xt=rt.attributes.position;let ue=Zt.start*$t,we=(Zt.start+Zt.count)*$t;Tt!==null&&(ue=Math.max(ue,Tt.start*$t),we=Math.min(we,(Tt.start+Tt.count)*$t)),It!==null?(ue=Math.max(ue,0),we=Math.min(we,It.count)):Xt!=null&&(ue=Math.max(ue,0),we=Math.min(we,Xt.count));const Ve=we-ue;if(Ve<0||Ve===1/0)return;ie.setup(K,ot,Nt,rt,It);let Se,ye=qt;if(It!==null&&(Se=T.get(It),ye=Yt,ye.setIndex(Se)),K.isMesh)ot.wireframe===!0?(Vt.setLineWidth(ot.wireframeLinewidth*ve()),ye.setMode(H.LINES)):ye.setMode(H.TRIANGLES);else if(K.isLine){let Kt=ot.linewidth;Kt===void 0&&(Kt=1),Vt.setLineWidth(Kt*ve()),K.isLineSegments?ye.setMode(H.LINES):K.isLineLoop?ye.setMode(H.LINE_LOOP):ye.setMode(H.LINE_STRIP)}else K.isPoints?ye.setMode(H.POINTS):K.isSprite&&ye.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Tr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))ye.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Kt=K._multiDrawStarts,je=K._multiDrawCounts,Te=K._multiDrawCount,Rn=It?T.get(It).bytesPerElement:1,pa=jt.get(ot).currentProgram.getUniforms();for(let ke=0;ke<Te;ke++)pa.setValue(H,"_gl_DrawID",ke),ye.render(Kt[ke]/Rn,je[ke])}else if(K.isInstancedMesh)ye.renderInstances(ue,Ve,K.count);else if(rt.isInstancedBufferGeometry){const Kt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,je=Math.min(rt.instanceCount,Kt);ye.renderInstances(ue,Ve,je)}else ye.render(ue,Ve)};function be(R,j,rt){R.transparent===!0&&R.side===Ui&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,ha(R,j,rt),R.side=Ya,R.needsUpdate=!0,ha(R,j,rt),R.side=Ui):ha(R,j,rt)}this.compile=function(R,j,rt=null){rt===null&&(rt=R),x=Dt.get(rt),x.init(j),L.push(x),rt.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),R!==rt&&R.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),x.setupLights();const ot=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Tt=K.material;if(Tt)if(Array.isArray(Tt))for(let Ct=0;Ct<Tt.length;Ct++){const Nt=Tt[Ct];be(Nt,rt,K),ot.add(Nt)}else be(Tt,rt,K),ot.add(Tt)}),x=L.pop(),ot},this.compileAsync=function(R,j,rt=null){const ot=this.compile(R,j,rt);return new Promise(K=>{function Tt(){if(ot.forEach(function(Ct){jt.get(Ct).currentProgram.isReady()&&ot.delete(Ct)}),ot.size===0){K(R);return}setTimeout(Tt,10)}Ee.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Wn=null;function dn(R){Wn&&Wn(R)}function rn(){zn.stop()}function Mn(){zn.start()}const zn=new ov;zn.setAnimationLoop(dn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(R){Wn=R,Et.setAnimationLoop(R),R===null?zn.stop():zn.start()},Et.addEventListener("sessionstart",rn),Et.addEventListener("sessionend",Mn),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(j),j=Et.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,j,V),x=Dt.get(R,L.length),x.init(j),L.push(x),Rt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Q.setFromProjectionMatrix(Rt),gt=this.localClippingEnabled,ut=Gt.init(this.clippingPlanes,gt),S=Ot.get(R,P.length),S.init(),P.push(S),Et.enabled===!0&&Et.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&Za(Tt,j,-1/0,D.sortObjects)}Za(R,j,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(St,U),Fe=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,Fe&&Mt.addToRenderList(S,R),this.info.render.frame++,ut===!0&&Gt.beginShadows();const rt=x.state.shadowsArray;kt.render(rt,R,j),ut===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=S.opaque,K=S.transmissive;if(x.setupLights(),j.isArrayCamera){const Tt=j.cameras;if(K.length>0)for(let Ct=0,Nt=Tt.length;Ct<Nt;Ct++){const It=Tt[Ct];jo(ot,K,R,It)}Fe&&Mt.render(R);for(let Ct=0,Nt=Tt.length;Ct<Nt;Ct++){const It=Tt[Ct];Yo(S,R,It,It.viewport)}}else K.length>0&&jo(ot,K,R,j),Fe&&Mt.render(R),Yo(S,R,j);V!==null&&I===0&&(ae.updateMultisampleRenderTarget(V),ae.updateRenderTargetMipmap(V)),R.isScene===!0&&R.onAfterRender(D,R,j),ie.resetDefaultState(),C=-1,w=null,L.pop(),L.length>0?(x=L[L.length-1],ut===!0&&Gt.setGlobalState(D.clippingPlanes,x.state.camera)):x=null,P.pop(),P.length>0?S=P[P.length-1]:S=null};function Za(R,j,rt,ot){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){ot&&Qt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Rt);const Ct=dt.update(R),Nt=R.material;Nt.visible&&S.push(R,Ct,Nt,rt,Qt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const Ct=dt.update(R),Nt=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Qt.copy(R.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Qt.copy(Ct.boundingSphere.center)),Qt.applyMatrix4(R.matrixWorld).applyMatrix4(Rt)),Array.isArray(Nt)){const It=Ct.groups;for(let $t=0,Zt=It.length;$t<Zt;$t++){const Xt=It[$t],ue=Nt[Xt.materialIndex];ue&&ue.visible&&S.push(R,Ct,ue,rt,Qt.z,Xt)}}else Nt.visible&&S.push(R,Ct,Nt,rt,Qt.z,null)}}const Tt=R.children;for(let Ct=0,Nt=Tt.length;Ct<Nt;Ct++)Za(Tt[Ct],j,rt,ot)}function Yo(R,j,rt,ot){const K=R.opaque,Tt=R.transmissive,Ct=R.transparent;x.setupLightsView(rt),ut===!0&&Gt.setGlobalState(D.clippingPlanes,rt),ot&&Vt.viewport(G.copy(ot)),K.length>0&&Ka(K,j,rt),Tt.length>0&&Ka(Tt,j,rt),Ct.length>0&&Ka(Ct,j,rt),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function jo(R,j,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ot.id]===void 0&&(x.state.transmissionRenderTarget[ot.id]=new Rs(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?Go:Oi,minFilter:Ts,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const Tt=x.state.transmissionRenderTarget[ot.id],Ct=ot.viewport||G;Tt.setSize(Ct.z*D.transmissionResolutionScale,Ct.w*D.transmissionResolutionScale);const Nt=D.getRenderTarget();D.setRenderTarget(Tt),D.getClearColor(ft),lt=D.getClearAlpha(),lt<1&&D.setClearColor(16777215,.5),D.clear(),Fe&&Mt.render(rt);const It=D.toneMapping;D.toneMapping=qa;const $t=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),x.setupLightsView(ot),ut===!0&&Gt.setGlobalState(D.clippingPlanes,ot),Ka(R,rt,ot),ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Xt=0,ue=j.length;Xt<ue;Xt++){const we=j[Xt],Ve=we.object,Se=we.geometry,ye=we.material,Kt=we.group;if(ye.side===Ui&&Ve.layers.test(ot.layers)){const je=ye.side;ye.side=kn,ye.needsUpdate=!0,fa(Ve,rt,ot,Se,ye,Kt),ye.side=je,ye.needsUpdate=!0,Zt=!0}}Zt===!0&&(ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt))}D.setRenderTarget(Nt),D.setClearColor(ft,lt),$t!==void 0&&(ot.viewport=$t),D.toneMapping=It}function Ka(R,j,rt){const ot=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Tt=R.length;K<Tt;K++){const Ct=R[K],Nt=Ct.object,It=Ct.geometry,$t=Ct.group;let Zt=Ct.material;Zt.allowOverride===!0&&ot!==null&&(Zt=ot),Nt.layers.test(rt.layers)&&fa(Nt,j,rt,It,Zt,$t)}}function fa(R,j,rt,ot,K,Tt){R.onBeforeRender(D,j,rt,ot,K,Tt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(D,j,rt,ot,R,Tt),K.transparent===!0&&K.side===Ui&&K.forceSinglePass===!1?(K.side=kn,K.needsUpdate=!0,D.renderBufferDirect(rt,j,ot,K,R,Tt),K.side=Ya,K.needsUpdate=!0,D.renderBufferDirect(rt,j,ot,K,R,Tt),K.side=Ui):D.renderBufferDirect(rt,j,ot,K,R,Tt),R.onAfterRender(D,j,rt,ot,K,Tt)}function ha(R,j,rt){j.isScene!==!0&&(j=Ne);const ot=jt.get(R),K=x.state.lights,Tt=x.state.shadowsArray,Ct=K.state.version,Nt=mt.getParameters(R,K.state,Tt,j,rt),It=mt.getProgramCacheKey(Nt);let $t=ot.programs;ot.environment=R.isMeshStandardMaterial?j.environment:null,ot.fog=j.fog,ot.envMap=(R.isMeshStandardMaterial?O:Je).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",Bt),$t=new Map,ot.programs=$t);let Zt=$t.get(It);if(Zt!==void 0){if(ot.currentProgram===Zt&&ot.lightsStateVersion===Ct)return Ii(R,Nt),Zt}else Nt.uniforms=mt.getUniforms(R),R.onBeforeCompile(Nt,D),Zt=mt.acquireProgram(Nt,It),$t.set(It,Zt),ot.uniforms=Nt.uniforms;const Xt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xt.clippingPlanes=Gt.uniform),Ii(R,Nt),ot.needsLights=en(R),ot.lightsStateVersion=Ct,ot.needsLights&&(Xt.ambientLightColor.value=K.state.ambient,Xt.lightProbe.value=K.state.probe,Xt.directionalLights.value=K.state.directional,Xt.directionalLightShadows.value=K.state.directionalShadow,Xt.spotLights.value=K.state.spot,Xt.spotLightShadows.value=K.state.spotShadow,Xt.rectAreaLights.value=K.state.rectArea,Xt.ltc_1.value=K.state.rectAreaLTC1,Xt.ltc_2.value=K.state.rectAreaLTC2,Xt.pointLights.value=K.state.point,Xt.pointLightShadows.value=K.state.pointShadow,Xt.hemisphereLights.value=K.state.hemi,Xt.directionalShadowMap.value=K.state.directionalShadowMap,Xt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Xt.spotShadowMap.value=K.state.spotShadowMap,Xt.spotLightMatrix.value=K.state.spotLightMatrix,Xt.spotLightMap.value=K.state.spotLightMap,Xt.pointShadowMap.value=K.state.pointShadowMap,Xt.pointShadowMatrix.value=K.state.pointShadowMatrix),ot.currentProgram=Zt,ot.uniformsList=null,Zt}function zi(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Bc.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Ii(R,j){const rt=jt.get(R);rt.outputColorSpace=j.outputColorSpace,rt.batching=j.batching,rt.batchingColor=j.batchingColor,rt.instancing=j.instancing,rt.instancingColor=j.instancingColor,rt.instancingMorph=j.instancingMorph,rt.skinning=j.skinning,rt.morphTargets=j.morphTargets,rt.morphNormals=j.morphNormals,rt.morphColors=j.morphColors,rt.morphTargetsCount=j.morphTargetsCount,rt.numClippingPlanes=j.numClippingPlanes,rt.numIntersection=j.numClipIntersection,rt.vertexAlphas=j.vertexAlphas,rt.vertexTangents=j.vertexTangents,rt.toneMapping=j.toneMapping}function Qa(R,j,rt,ot,K){j.isScene!==!0&&(j=Ne),ae.resetTextureUnits();const Tt=j.fog,Ct=ot.isMeshStandardMaterial?j.environment:null,Nt=V===null?D.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Cr,It=(ot.isMeshStandardMaterial?O:Je).get(ot.envMap||Ct),$t=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Zt=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Xt=!!rt.morphAttributes.position,ue=!!rt.morphAttributes.normal,we=!!rt.morphAttributes.color;let Ve=qa;ot.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Ve=D.toneMapping);const Se=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ye=Se!==void 0?Se.length:0,Kt=jt.get(ot),je=x.state.lights;if(ut===!0&&(gt===!0||R!==w)){const pn=R===w&&ot.id===C;Gt.setState(ot,R,pn)}let Te=!1;ot.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==je.state.version||Kt.outputColorSpace!==Nt||K.isBatchedMesh&&Kt.batching===!1||!K.isBatchedMesh&&Kt.batching===!0||K.isBatchedMesh&&Kt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Kt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Kt.instancing===!1||!K.isInstancedMesh&&Kt.instancing===!0||K.isSkinnedMesh&&Kt.skinning===!1||!K.isSkinnedMesh&&Kt.skinning===!0||K.isInstancedMesh&&Kt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Kt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Kt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Kt.instancingMorph===!1&&K.morphTexture!==null||Kt.envMap!==It||ot.fog===!0&&Kt.fog!==Tt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Gt.numPlanes||Kt.numIntersection!==Gt.numIntersection)||Kt.vertexAlphas!==$t||Kt.vertexTangents!==Zt||Kt.morphTargets!==Xt||Kt.morphNormals!==ue||Kt.morphColors!==we||Kt.toneMapping!==Ve||Kt.morphTargetsCount!==ye)&&(Te=!0):(Te=!0,Kt.__version=ot.version);let Rn=Kt.currentProgram;Te===!0&&(Rn=ha(ot,j,K));let pa=!1,ke=!1,Fi=!1;const He=Rn.getUniforms(),wn=Kt.uniforms;if(Vt.useProgram(Rn.program)&&(pa=!0,ke=!0,Fi=!0),ot.id!==C&&(C=ot.id,ke=!0),pa||w!==R){Vt.buffers.depth.getReversed()?(At.copy(R.projectionMatrix),Ey(At),Ty(At),He.setValue(H,"projectionMatrix",At)):He.setValue(H,"projectionMatrix",R.projectionMatrix),He.setValue(H,"viewMatrix",R.matrixWorldInverse);const En=He.map.cameraPosition;En!==void 0&&En.setValue(H,re.setFromMatrixPosition(R.matrixWorld)),pe.logarithmicDepthBuffer&&He.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&He.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,ke=!0,Fi=!0)}if(K.isSkinnedMesh){He.setOptional(H,K,"bindMatrix"),He.setOptional(H,K,"bindMatrixInverse");const pn=K.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),He.setValue(H,"boneTexture",pn.boneTexture,ae))}K.isBatchedMesh&&(He.setOptional(H,K,"batchingTexture"),He.setValue(H,"batchingTexture",K._matricesTexture,ae),He.setOptional(H,K,"batchingIdTexture"),He.setValue(H,"batchingIdTexture",K._indirectTexture,ae),He.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&He.setValue(H,"batchingColorTexture",K._colorsTexture,ae));const on=rt.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Pt.update(K,rt,Rn),(ke||Kt.receiveShadow!==K.receiveShadow)&&(Kt.receiveShadow=K.receiveShadow,He.setValue(H,"receiveShadow",K.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(wn.envMap.value=It,wn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&j.environment!==null&&(wn.envMapIntensity.value=j.environmentIntensity),ke&&(He.setValue(H,"toneMappingExposure",D.toneMappingExposure),Kt.needsLights&&da(wn,Fi),Tt&&ot.fog===!0&&ct.refreshFogUniforms(wn,Tt),ct.refreshMaterialUniforms(wn,ot,W,q,x.state.transmissionRenderTarget[R.id]),Bc.upload(H,zi(Kt),wn,ae)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Bc.upload(H,zi(Kt),wn,ae),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&He.setValue(H,"center",K.center),He.setValue(H,"modelViewMatrix",K.modelViewMatrix),He.setValue(H,"normalMatrix",K.normalMatrix),He.setValue(H,"modelMatrix",K.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const pn=ot.uniformsGroups;for(let En=0,Ti=pn.length;En<Ti;En++){const Hi=pn[En];X.update(Hi,Rn),X.bind(Hi,Rn)}}return Rn}function da(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function en(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(R,j,rt){const ot=jt.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),jt.get(R.texture).__webglTexture=j,jt.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const rt=jt.get(R);rt.__webglFramebuffer=j,rt.__useDefaultFramebuffer=j===void 0};const Zo=H.createFramebuffer();this.setRenderTarget=function(R,j=0,rt=0){V=R,B=j,I=rt;let ot=!0,K=null,Tt=!1,Ct=!1;if(R){const It=jt.get(R);if(It.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(H.FRAMEBUFFER,null),ot=!1;else if(It.__webglFramebuffer===void 0)ae.setupRenderTarget(R);else if(It.__hasExternalTextures)ae.rebindTextures(R,jt.get(R.texture).__webglTexture,jt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Xt=R.depthTexture;if(It.__boundDepthTexture!==Xt){if(Xt!==null&&jt.has(Xt)&&(R.width!==Xt.image.width||R.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(R)}}const $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ct=!0);const Zt=jt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Zt[j])?K=Zt[j][rt]:K=Zt[j],Tt=!0):R.samples>0&&ae.useMultisampledRTT(R)===!1?K=jt.get(R).__webglMultisampledFramebuffer:Array.isArray(Zt)?K=Zt[rt]:K=Zt,G.copy(R.viewport),it.copy(R.scissor),at=R.scissorTest}else G.copy($).multiplyScalar(W).floor(),it.copy(_t).multiplyScalar(W).floor(),at=yt;if(rt!==0&&(K=Zo),Vt.bindFramebuffer(H.FRAMEBUFFER,K)&&ot&&Vt.drawBuffers(R,K),Vt.viewport(G),Vt.scissor(it),Vt.setScissorTest(at),Tt){const It=jt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,It.__webglTexture,rt)}else if(Ct){const It=jt.get(R.texture),$t=j;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,It.__webglTexture,rt,$t)}else if(R!==null&&rt!==0){const It=jt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,It.__webglTexture,rt)}C=-1},this.readRenderTargetPixels=function(R,j,rt,ot,K,Tt,Ct,Nt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It){Vt.bindFramebuffer(H.FRAMEBUFFER,It);try{const $t=R.textures[Nt],Zt=$t.format,Xt=$t.type;if(!pe.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-ot&&rt>=0&&rt<=R.height-K&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Nt),H.readPixels(j,rt,ot,K,wt.convert(Zt),wt.convert(Xt),Tt))}finally{const $t=V!==null?jt.get(V).__webglFramebuffer:null;Vt.bindFramebuffer(H.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(R,j,rt,ot,K,Tt,Ct,Nt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It)if(j>=0&&j<=R.width-ot&&rt>=0&&rt<=R.height-K){Vt.bindFramebuffer(H.FRAMEBUFFER,It);const $t=R.textures[Nt],Zt=$t.format,Xt=$t.type;if(!pe.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ue),H.bufferData(H.PIXEL_PACK_BUFFER,Tt.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Nt),H.readPixels(j,rt,ot,K,wt.convert(Zt),wt.convert(Xt),0);const we=V!==null?jt.get(V).__webglFramebuffer:null;Vt.bindFramebuffer(H.FRAMEBUFFER,we);const Ve=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await My(H,Ve,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ue),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Tt),H.deleteBuffer(ue),H.deleteSync(Ve),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,rt=0){const ot=Math.pow(2,-rt),K=Math.floor(R.image.width*ot),Tt=Math.floor(R.image.height*ot),Ct=j!==null?j.x:0,Nt=j!==null?j.y:0;ae.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,Ct,Nt,K,Tt),Vt.unbindTexture()};const Ko=H.createFramebuffer(),Bi=H.createFramebuffer();this.copyTextureToTexture=function(R,j,rt=null,ot=null,K=0,Tt=null){Tt===null&&(K!==0?(Tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=K,K=0):Tt=0);let Ct,Nt,It,$t,Zt,Xt,ue,we,Ve;const Se=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(rt!==null)Ct=rt.max.x-rt.min.x,Nt=rt.max.y-rt.min.y,It=rt.isBox3?rt.max.z-rt.min.z:1,$t=rt.min.x,Zt=rt.min.y,Xt=rt.isBox3?rt.min.z:0;else{const on=Math.pow(2,-K);Ct=Math.floor(Se.width*on),Nt=Math.floor(Se.height*on),R.isDataArrayTexture?It=Se.depth:R.isData3DTexture?It=Math.floor(Se.depth*on):It=1,$t=0,Zt=0,Xt=0}ot!==null?(ue=ot.x,we=ot.y,Ve=ot.z):(ue=0,we=0,Ve=0);const ye=wt.convert(j.format),Kt=wt.convert(j.type);let je;j.isData3DTexture?(ae.setTexture3D(j,0),je=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ae.setTexture2DArray(j,0),je=H.TEXTURE_2D_ARRAY):(ae.setTexture2D(j,0),je=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const Te=H.getParameter(H.UNPACK_ROW_LENGTH),Rn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),pa=H.getParameter(H.UNPACK_SKIP_PIXELS),ke=H.getParameter(H.UNPACK_SKIP_ROWS),Fi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Se.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Se.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$t),H.pixelStorei(H.UNPACK_SKIP_ROWS,Zt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xt);const He=R.isDataArrayTexture||R.isData3DTexture,wn=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const on=jt.get(R),pn=jt.get(j),En=jt.get(on.__renderTarget),Ti=jt.get(pn.__renderTarget);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,En.__webglFramebuffer),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Hi=0;Hi<It;Hi++)He&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,jt.get(R).__webglTexture,K,Xt+Hi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,jt.get(j).__webglTexture,Tt,Ve+Hi)),H.blitFramebuffer($t,Zt,Ct,Nt,ue,we,Ct,Nt,H.DEPTH_BUFFER_BIT,H.NEAREST);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||jt.has(R)){const on=jt.get(R),pn=jt.get(j);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,Ko),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Bi);for(let En=0;En<It;En++)He?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,on.__webglTexture,K,Xt+En):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,on.__webglTexture,K),wn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pn.__webglTexture,Tt,Ve+En):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pn.__webglTexture,Tt),K!==0?H.blitFramebuffer($t,Zt,Ct,Nt,ue,we,Ct,Nt,H.COLOR_BUFFER_BIT,H.NEAREST):wn?H.copyTexSubImage3D(je,Tt,ue,we,Ve+En,$t,Zt,Ct,Nt):H.copyTexSubImage2D(je,Tt,ue,we,$t,Zt,Ct,Nt);Vt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else wn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(je,Tt,ue,we,Ve,Ct,Nt,It,ye,Kt,Se.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(je,Tt,ue,we,Ve,Ct,Nt,It,ye,Se.data):H.texSubImage3D(je,Tt,ue,we,Ve,Ct,Nt,It,ye,Kt,Se):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Tt,ue,we,Ct,Nt,ye,Kt,Se.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Tt,ue,we,Se.width,Se.height,ye,Se.data):H.texSubImage2D(H.TEXTURE_2D,Tt,ue,we,Ct,Nt,ye,Kt,Se);H.pixelStorei(H.UNPACK_ROW_LENGTH,Te),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Rn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,pa),H.pixelStorei(H.UNPACK_SKIP_ROWS,ke),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Fi),Tt===0&&j.generateMipmaps&&H.generateMipmap(je),Vt.unbindTexture()},this.copyTextureToTexture3D=function(R,j,rt=null,ot=null,K=0){return Tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,j,rt,ot,K)},this.initRenderTarget=function(R){jt.get(R).__webglFramebuffer===void 0&&ae.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ae.setTextureCube(R,0):R.isData3DTexture?ae.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ae.setTexture2DArray(R,0):ae.setTexture2D(R,0),Vt.unbindTexture()},this.resetState=function(){B=0,I=0,V=null,Vt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),i.unpackColorSpace=Re._getUnpackColorSpace()}}const C0={type:"change"},Fd={type:"start"},hv={type:"end"},Cc=new Wc,D0=new ka,jA=Math.cos(70*Sy.DEG2RAD),un=new Z,Vn=2*Math.PI,Be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Oh=1e-6;class ZA extends uM{constructor(t,i=null){super(t,i),this.state=Be.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mr.ROTATE,MIDDLE:Mr.DOLLY,RIGHT:Mr.PAN},this.touches={ONE:Sr.ROTATE,TWO:Sr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new As,this._lastTargetPosition=new Z,this._quat=new As().setFromUnitVectors(t.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new i0,this._sphericalDelta=new i0,this._scale=1,this._panOffset=new Z,this._rotateStart=new se,this._rotateEnd=new se,this._rotateDelta=new se,this._panStart=new se,this._panEnd=new se,this._panDelta=new se,this._dollyStart=new se,this._dollyEnd=new se,this._dollyDelta=new se,this._dollyDirection=new Z,this._mouse=new se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=QA.bind(this),this._onPointerDown=KA.bind(this),this._onPointerUp=JA.bind(this),this._onContextMenu=s1.bind(this),this._onMouseWheel=e1.bind(this),this._onKeyDown=n1.bind(this),this._onTouchStart=i1.bind(this),this._onTouchMove=a1.bind(this),this._onMouseDown=$A.bind(this),this._onMouseMove=t1.bind(this),this._interceptControlDown=r1.bind(this),this._interceptControlUp=o1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(C0),this.update(),this.state=Be.NONE}update(t=null){const i=this.object.position;un.copy(i).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===Be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Vn:s>Math.PI&&(s-=Vn),l<-Math.PI?l+=Vn:l>Math.PI&&(l-=Vn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),i.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=un.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new Z(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new Z(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Cc.origin.copy(this.object.position),Cc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Cc.direction))<jA?this.object.lookAt(this.target):(D0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Cc.intersectPlane(D0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Oh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Oh||this._lastTargetPosition.distanceToSquared(this.target)>Oh?(this.dispatchEvent(C0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Vn/60*this.autoRotateSpeed*t:Vn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){un.setFromMatrixColumn(i,0),un.multiplyScalar(-t),this._panOffset.add(un)}_panUp(t,i){this.screenSpacePanning===!0?un.setFromMatrixColumn(i,1):(un.setFromMatrixColumn(i,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(t),this._panOffset.add(un)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;un.copy(l).sub(this.target);let c=un.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new se,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function KA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function QA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function JA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(hv),this.state=Be.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function $A(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Mr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Be.DOLLY;break;case Mr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Be.ROTATE}break;case Mr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Be.PAN}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(Fd)}function t1(r){switch(this.state){case Be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function e1(r){this.enabled===!1||this.enableZoom===!1||this.state!==Be.NONE||(r.preventDefault(),this.dispatchEvent(Fd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(hv))}function n1(r){this.enabled!==!1&&this._handleKeyDown(r)}function i1(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Sr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Be.TOUCH_ROTATE;break;case Sr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Be.TOUCH_PAN;break;default:this.state=Be.NONE}break;case 2:switch(this.touches.TWO){case Sr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Be.TOUCH_DOLLY_PAN;break;case Sr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Be.TOUCH_DOLLY_ROTATE;break;default:this.state=Be.NONE}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(Fd)}function a1(r){switch(this._trackPointer(r),this.state){case Be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Be.NONE}}function s1(r){this.enabled!==!1&&r.preventDefault()}function r1(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function o1(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const l1=/^[og]\s*(.+)?/,c1=/^mtllib /,u1=/^usemtl /,f1=/^usemap /,U0=/\s+/,L0=new Z,Ph=new Z,N0=new Z,O0=new Z,hi=new Z,Dc=new de;function h1(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,i){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=i!==!1;return}const s=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:i!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(l,c){const h=this._finalize(!1);h&&(h.inherited||h.groupCount<=0)&&this.materials.splice(h.index,1);const d={index:this.materials.length,name:l||"",mtllib:Array.isArray(c)&&c.length>0?c[c.length-1]:"",smooth:h!==void 0?h.smooth:this.smooth,groupStart:h!==void 0?h.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(m){const p={index:typeof m=="number"?m:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return p.clone=this.clone.bind(p),p}};return this.materials.push(d),d},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(l){const c=this.currentMaterial();if(c&&c.groupEnd===-1&&(c.groupEnd=this.geometry.vertices.length/3,c.groupCount=c.groupEnd-c.groupStart,c.inherited=!1),l&&this.materials.length>1)for(let h=this.materials.length-1;h>=0;h--)this.materials[h].groupCount<=0&&this.materials.splice(h,1);return l&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),c}},s&&s.name&&typeof s.clone=="function"){const l=s.clone(0);l.inherited=!0,this.object.materials.push(l)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,i){const s=parseInt(t,10);return(s>=0?s-1:s+i/3)*3},parseNormalIndex:function(t,i){const s=parseInt(t,10);return(s>=0?s-1:s+i/3)*3},parseUVIndex:function(t,i){const s=parseInt(t,10);return(s>=0?s-1:s+i/2)*2},addVertex:function(t,i,s){const l=this.vertices,c=this.object.geometry.vertices;c.push(l[t+0],l[t+1],l[t+2]),c.push(l[i+0],l[i+1],l[i+2]),c.push(l[s+0],l[s+1],l[s+2])},addVertexPoint:function(t){const i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])},addVertexLine:function(t){const i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])},addNormal:function(t,i,s){const l=this.normals,c=this.object.geometry.normals;c.push(l[t+0],l[t+1],l[t+2]),c.push(l[i+0],l[i+1],l[i+2]),c.push(l[s+0],l[s+1],l[s+2])},addFaceNormal:function(t,i,s){const l=this.vertices,c=this.object.geometry.normals;L0.fromArray(l,t),Ph.fromArray(l,i),N0.fromArray(l,s),hi.subVectors(N0,Ph),O0.subVectors(L0,Ph),hi.cross(O0),hi.normalize(),c.push(hi.x,hi.y,hi.z),c.push(hi.x,hi.y,hi.z),c.push(hi.x,hi.y,hi.z)},addColor:function(t,i,s){const l=this.colors,c=this.object.geometry.colors;l[t]!==void 0&&c.push(l[t+0],l[t+1],l[t+2]),l[i]!==void 0&&c.push(l[i+0],l[i+1],l[i+2]),l[s]!==void 0&&c.push(l[s+0],l[s+1],l[s+2])},addUV:function(t,i,s){const l=this.uvs,c=this.object.geometry.uvs;c.push(l[t+0],l[t+1]),c.push(l[i+0],l[i+1]),c.push(l[s+0],l[s+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const i=this.uvs;this.object.geometry.uvs.push(i[t+0],i[t+1])},addFace:function(t,i,s,l,c,h,d,m,p){const g=this.vertices.length;let _=this.parseVertexIndex(t,g),v=this.parseVertexIndex(i,g),y=this.parseVertexIndex(s,g);if(this.addVertex(_,v,y),this.addColor(_,v,y),d!==void 0&&d!==""){const E=this.normals.length;_=this.parseNormalIndex(d,E),v=this.parseNormalIndex(m,E),y=this.parseNormalIndex(p,E),this.addNormal(_,v,y)}else this.addFaceNormal(_,v,y);if(l!==void 0&&l!==""){const E=this.uvs.length;_=this.parseUVIndex(l,E),v=this.parseUVIndex(c,E),y=this.parseUVIndex(h,E),this.addUV(_,v,y),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const i=this.vertices.length;for(let s=0,l=t.length;s<l;s++){const c=this.parseVertexIndex(t[s],i);this.addVertexPoint(c),this.addColor(c)}},addLineGeometry:function(t,i){this.object.geometry.type="Line";const s=this.vertices.length,l=this.uvs.length;for(let c=0,h=t.length;c<h;c++)this.addVertexLine(this.parseVertexIndex(t[c],s));for(let c=0,h=i.length;c<h;c++)this.addUVLine(this.parseUVIndex(i[c],l))}};return r.startObject("",!1),r}class d1 extends Id{constructor(t){super(t),this.materials=null}load(t,i,s,l){const c=this,h=new aM(this.manager);h.setPath(this.path),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(t,function(d){try{i(c.parse(d))}catch(m){l?l(m):console.error(m),c.manager.itemError(t)}},s,l)}setMaterials(t){return this.materials=t,this}parse(t){const i=new h1;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const s=t.split(`
`);let l=[];for(let d=0,m=s.length;d<m;d++){const p=s[d].trimStart();if(p.length===0)continue;const g=p.charAt(0);if(g!=="#")if(g==="v"){const _=p.split(U0);switch(_[0]){case"v":i.vertices.push(parseFloat(_[1]),parseFloat(_[2]),parseFloat(_[3])),_.length>=7?(Dc.setRGB(parseFloat(_[4]),parseFloat(_[5]),parseFloat(_[6]),ei),i.colors.push(Dc.r,Dc.g,Dc.b)):i.colors.push(void 0,void 0,void 0);break;case"vn":i.normals.push(parseFloat(_[1]),parseFloat(_[2]),parseFloat(_[3]));break;case"vt":i.uvs.push(parseFloat(_[1]),parseFloat(_[2]));break}}else if(g==="f"){const v=p.slice(1).trim().split(U0),y=[];for(let b=0,S=v.length;b<S;b++){const x=v[b];if(x.length>0){const P=x.split("/");y.push(P)}}const E=y[0];for(let b=1,S=y.length-1;b<S;b++){const x=y[b],P=y[b+1];i.addFace(E[0],x[0],P[0],E[1],x[1],P[1],E[2],x[2],P[2])}}else if(g==="l"){const _=p.substring(1).trim().split(" ");let v=[];const y=[];if(p.indexOf("/")===-1)v=_;else for(let E=0,b=_.length;E<b;E++){const S=_[E].split("/");S[0]!==""&&v.push(S[0]),S[1]!==""&&y.push(S[1])}i.addLineGeometry(v,y)}else if(g==="p"){const v=p.slice(1).trim().split(" ");i.addPointGeometry(v)}else if((l=l1.exec(p))!==null){const _=(" "+l[0].slice(1).trim()).slice(1);i.startObject(_)}else if(u1.test(p))i.object.startMaterial(p.substring(7).trim(),i.materialLibraries);else if(c1.test(p))i.materialLibraries.push(p.substring(7).trim());else if(f1.test(p))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(g==="s"){if(l=p.split(" "),l.length>1){const v=l[1].trim().toLowerCase();i.object.smooth=v!=="0"&&v!=="off"}else i.object.smooth=!0;const _=i.object.currentMaterial();_&&(_.smooth=i.object.smooth)}else{if(p==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+p+'"')}}i.finalize();const c=new No;if(c.materialLibraries=[].concat(i.materialLibraries),!(i.objects.length===1&&i.objects[0].geometry.vertices.length===0)===!0)for(let d=0,m=i.objects.length;d<m;d++){const p=i.objects[d],g=p.geometry,_=p.materials,v=g.type==="Line",y=g.type==="Points";let E=!1;if(g.vertices.length===0)continue;const b=new ii;b.setAttribute("position",new xn(g.vertices,3)),g.normals.length>0&&b.setAttribute("normal",new xn(g.normals,3)),g.colors.length>0&&(E=!0,b.setAttribute("color",new xn(g.colors,3))),g.hasUVIndices===!0&&b.setAttribute("uv",new xn(g.uvs,2));const S=[];for(let P=0,L=_.length;P<L;P++){const D=_[P],F=D.name+"_"+D.smooth+"_"+E;let B=i.materials[F];if(this.materials!==null){if(B=this.materials.create(D.name),v&&B&&!(B instanceof zo)){const I=new zo;Pi.prototype.copy.call(I,B),I.color.copy(B.color),B=I}else if(y&&B&&!(B instanceof Oo)){const I=new Oo({size:10,sizeAttenuation:!1});Pi.prototype.copy.call(I,B),I.color.copy(B.color),I.map=B.map,B=I}}B===void 0&&(v?B=new zo:y?B=new Oo({size:1,sizeAttenuation:!1}):B=new Jy,B.name=D.name,B.flatShading=!D.smooth,B.vertexColors=E,i.materials[F]=B),S.push(B)}let x;if(S.length>1){for(let P=0,L=_.length;P<L;P++){const D=_[P];b.addGroup(D.groupStart,D.groupCount,P)}v?x=new K_(b,S):y?x=new Ah(b,S):x=new ni(b,S)}else v?x=new K_(b,S[0]):y?x=new Ah(b,S[0]):x=new ni(b,S[0]);x.name=p.name,c.add(x)}else if(i.vertices.length>0){const d=new Oo({size:1,sizeAttenuation:!1}),m=new ii;m.setAttribute("position",new xn(i.vertices,3)),i.colors.length>0&&i.colors[0]!==void 0&&(m.setAttribute("color",new xn(i.colors,3)),d.vertexColors=!0);const p=new Ah(m,d);c.add(p)}return c}}const p1=({config:r})=>{const t=Pn.useRef(),i=Pn.useRef(new Zy),s=Pn.useRef(null),l=Pn.useRef(),c=Pn.useRef(),h=Pn.useRef([]),d=Pn.useRef([]);Pn.useEffect(()=>{const v=t.current,y=i.current;y.background=new de(13092807);const E=new di(75,v.clientWidth/v.clientHeight,.1,1e3);E.position.set(0,100,300),c.current=E;const b=new YA({antialias:!0});b.setSize(v.clientWidth,v.clientHeight),l.current=b,v.appendChild(b.domElement);const S=new lM(16777215,.4),x=new oM(16777215,1);x.position.set(10,10,10),y.add(S,x);const P=new ZA(E,b.domElement);P.enableDamping=!0,P.dampingFactor=.05,P.target.set(0,100,0);const L=()=>{requestAnimationFrame(L),P.update(),b.render(y,E)};return L(),new d1().load("/models/myModel.obj",F=>{s.current=F,m()},void 0,F=>console.error("OBJ load error:",F)),window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_),v.removeChild(b.domElement),g()}},[]),Pn.useEffect(()=>{s.current&&m()},[r]);const m=()=>{const v=i.current,y=s.current.clone();y.scale.set(1,1,1),v.children=v.children.filter(lt=>{var N,q,W;return!((N=lt.userData)!=null&&N.isPendant)&&!((q=lt.userData)!=null&&q.isString)&&!((W=lt.userData)!=null&&W.isSurface)}),h.current.forEach(lt=>v.remove(lt)),h.current=[],g();const{rows:E,cols:b,spacing:S,pattern:x,surfaceHeight:P,lowest:L,highest:D,baseOffset:F,surfaceLength:B,surfaceWidth:I}=r;let V=B,C=I;C===0&&V===0&&(C=(b-1)*S+parseInt(F||0,10),V=(E-1)*S+parseInt(F||0,10));const w=-((b-1)/2)*S,G=-((E-1)/2)*S;for(let lt=0;lt<E;lt++)for(let N=0;N<b;N++){let q=0;const W=parseInt(D,10),St=parseInt(L,10),U=parseInt(E,10),$=parseInt(b,10);if(x==="flat")q=0;else if(x==="dome"){const ut=lt-U/2,gt=N-$/2,At=Math.sqrt(ut*ut+gt*gt);q=(St+W)/2+At*10}else if(x==="ripple"){const ut=lt-U/2,gt=N-$/2,At=Math.sqrt(ut*ut+gt*gt);q=Math.sin(At*.8)*20+50}else if(x==="spiral"){const ut=N-$/2,gt=lt-U/2,At=Math.atan2(gt,ut),Rt=Math.sqrt(ut*ut+gt*gt);q=(St+W)/2+At*10+Rt*5}else if(x==="mirror"){const ut=N-$/2;q=(St+W)/2+Math.abs(ut)*10}else if(x==="wave"){const ut=(W+St)/2,gt=(St-W)/2;q=ut+(Math.sin(N*.5)+Math.cos(lt*.5))*gt*.5}else x==="diagonal"?q=St+(W-St)*((lt+N)/(U+$-2)):x==="checkerboard"?q=(lt+N)%2===0?W:St:x==="random"&&(q=Math.floor(Math.random()*(W-St)+St));const _t=y.clone();_t.position.set(w+N*S,q,G+lt*S),_t.rotation.set(0,Math.random()*Math.PI*2,0),_t.userData.isPendant=!0,v.add(_t);const yt=P-q,Q=new ni(new zd(.1,.1,yt,8),new $_({color:2697513}));Q.position.set(_t.position.x,q+yt/2,_t.position.z),Q.userData.isString=!0,v.add(Q)}const it=new ni(new qo(C,V),new $_({color:5592405,side:Ui}));it.rotation.x=-Math.PI/2,it.position.set(0,P,0),it.userData.isSurface=!0,v.add(it);const at=c.current;p(new Z(-C/2,0,V/2),new Z(C/2,0,V/2),`${C.toFixed(0)} mm`,v,at),p(new Z(C/2,0,-V/2),new Z(C/2,0,V/2),`${V.toFixed(0)} mm`,v,at);const ft=parseInt(P,10);p(new Z(C/2,0,V/2),new Z(C/2,ft,V/2),`${ft.toFixed(0)} mm`,v,at)};function p(v,y,E,b,S){const x=new zo({color:13630171}),P=[v,y],L=new ii().setFromPoints(P),D=new iv(L,x);b.add(D),h.current.push(D);const F=document.createElement("div");F.style.position="absolute",F.style.color="rgba(0,0,0,0.7)",F.style.background="rgba(255,255,255,0.7)",F.style.padding="2px 6px",F.style.borderRadius="4px",F.style.fontSize="10px",F.innerHTML=E,document.body.appendChild(F),d.current.push(F);const B=()=>{const V=new Z().addVectors(v,y).multiplyScalar(.5);V.project(S);const C=(V.x*.5+.6)*window.innerWidth,w=(-V.y*.5+.5)*window.innerHeight;F.style.left=`${C-F.clientWidth/2}px`,F.style.top=`${w-F.clientHeight/2}px`};function I(){B(),requestAnimationFrame(I)}I()}function g(){d.current.forEach(v=>{v&&v.parentNode&&v.parentNode.removeChild(v)}),d.current=[]}const _=()=>{const v=t.current,y=l.current,E=c.current;E.aspect=v.clientWidth/v.clientHeight,E.updateProjectionMatrix(),y.setSize(v.clientWidth,v.clientHeight)};return Pn.useEffect(()=>(window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)),[]),Ht.jsx("div",{ref:t,style:{flex:1}})};function m1(){const[r,t]=Pn.useState({rows:10,cols:10,pattern:"wave",spacing:20,surfaceHeight:170,surfaceLength:0,surfaceWidth:0,baseOffset:10,lowest:0,highest:150}),i=l=>{const{name:c,value:h}=l.target;t(c==="pattern"?d=>({...d,[c]:h}):d=>({...d,[c]:parseInt(h,10)})),c==="surfaceHeight"&&(h<r.highest||h<r.lowest)&&t(d=>({...d,highest:h,lowest:h}))},s=()=>{t(l=>({...l,version:l.version+1}))};return Ht.jsxs("div",{className:ic.wrapper,children:[Ht.jsxs("div",{className:ic.panel,children:[Ht.jsxs("label",{children:["Pattern:",Ht.jsx("select",{name:"pattern",value:r.pattern,onChange:i,children:["checkerboard","diagonal","dome","flat","mirror","random","ripple","spiral","wave"].map(l=>Ht.jsx(Ht.Fragment,{children:Ht.jsx("option",{value:l,children:l},l)}))})]}),[{labelName:"Rows",name:"rows",max:20,min:1,val:0},{labelName:"Column",name:"cols",max:20,min:1,val:0},{labelName:"Spacing",name:"spacing",max:100,min:0,val:0},{labelName:"Base Plate Length",name:"surfaceLength",max:999,min:0,val:0},{labelName:"Base Plate Width",name:"surfaceWidth",max:999,min:0,val:0},{labelName:"Base Plate From Floor",name:"surfaceHeight",max:999,min:0,val:0},{labelName:"Base Plate Offset",name:"baseOffset",max:30,min:0,val:0},{labelName:"Lowest",name:"lowest",max:999,min:0,val:0},{labelName:"Highest",name:"highest",max:999,min:0,val:0}].map(({name:l,max:c,min:h,labelName:d})=>{const m=!(l==="baseOffset"&&r.surfaceLength==0)||!(l==="baseOffset"&&r.surfaceWidth==0),p=l==="surfaceLength"&&r.surfaceLength==0||l==="surfaceWidth"&&r.surfaceWidth==0;return(l==="lowest"||l==="highest")&&(c=r.surfaceHeight),Ht.jsxs("div",{style:l==="baseOffset"?m?{opacity:0,maxHeight:0,overflow:"hidden",transition:"opacity 1s ease, max-height 0.5s ease 0.3s"}:{opacity:1,maxHeight:"500px",overflow:"hidden",transition:"opacity 1s ease 0.5s, max-height 2s ease 0.5s"}:void 0,children:[Ht.jsxs("label",{style:{...p?{color:"#ddd"}:{},...l==="surfaceLength"||l==="lowest"?{marginTop:"70px"}:{}},children:[d,":"]},l),Ht.jsxs("div",{className:ic.inputsDiv,children:[Ht.jsx("input",{type:"range",name:l,value:r[l],onChange:i,min:h,max:c,className:p?ic.inactive:""}),Ht.jsx("input",{type:"number",name:l,value:r[l],onChange:i,min:h,max:c,style:p?{color:"#ddd"}:{}})]})]})}),Ht.jsx("button",{style:r.pattern==="random"?{opacity:1,transition:"opacity 0.7s ease"}:{opacity:0,transition:"opacity 0.7s ease"},onClick:s,children:"Generate"})]}),Ht.jsx(p1,{config:r})]})}const g1="_lightDet_q2jkn_1",_1={lightDet:g1};function v1(){return Ht.jsxs("div",{className:_1.lightDet,children:[Ht.jsx("h1",{children:"Under Construction"}),Ht.jsx("p",{children:"Material/Finishes"})]})}const Uc={"content-div":"_content-div_106np_1","content-left":"_content-left_106np_11","content-left-scrollable":"_content-left-scrollable_106np_25","content-right":"_content-right_106np_59"},x1="_active_hbkz4_49",P0={"item-card":"_item-card_hbkz4_1",active:x1};function S1({modelName:r,imgLink:t,imgId:i,onClick:s}){return Ht.jsxs("div",{className:`${P0["item-card"]} ${P0.active}`,onClick:s,children:[Ht.jsx("img",{src:t,alt:"","data-id":i}),Ht.jsx("p",{children:r})]})}function y1({width:r=24,height:t=24}){return Ht.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:Ht.jsx("polyline",{points:"9 18 15 12 9 6"})})}function M1({width:r=24,height:t=24}){return Ht.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:Ht.jsx("polyline",{points:"15 18 9 12 15 6"})})}function E1({typeSelected:r=0}){const[t,i]=Pn.useState(0),s="./types/"+r.id,l=[s+"/image-01.png",s+"/image-02.png",s+"/image-03.png",s+"/image-04.png",s+"/image-05.png",s+"/image-06.png",s+"/image-07.png",s+"/image-08.png"];function c(d){i(d)}function h(d){let m=0;const{name:p}=d.currentTarget;p=="right"?t===l.length-1?m=0:m=t+1:t===0?m=l.length-1:m=t-1,i(m)}return Ht.jsx("div",{children:Ht.jsxs("div",{className:"image-container",children:[Ht.jsx("button",{className:"arrow left",name:"left",onClick:h,children:Ht.jsx(M1,{width:90,height:90})}),Ht.jsx("button",{className:"arrow right",name:"right",onClick:h,children:Ht.jsx(y1,{width:90,height:90})}),Ht.jsx("div",{className:"thumbnail-container",children:l.map((d,m)=>Ht.jsx("div",{className:m==t?"thumbnail-wrapper thumbnail-active":"thumbnail-wrapper",onClick:()=>c(m),children:Ht.jsx("img",{className:"thumbnails-img",src:d,alt:""})},m))}),Ht.jsx("img",{className:"main-image",src:l[t],alt:""})]})})}function T1(){const[r,t]=Pn.useState("a1"),i=[{id:"a1",name:"Model 1",image:"./types/a1.png"},{id:"a2",name:"Model 2",image:"./types/a2.png"},{id:"a3",name:"Model 3",image:"./types/a3.png"},{id:"a4",name:"Model 4",image:"./types/a4.png"}];function s(c){const h=c.target.dataset.id;t(h)}const l=i.find(c=>c.id===r);return Ht.jsxs("div",{className:Uc["content-div"],children:[Ht.jsxs("div",{className:Uc["content-left"],children:[Ht.jsx("h1",{children:"Types"}),Ht.jsx("div",{className:Uc["content-left-scrollable"],children:Ht.jsx("div",{children:i.map(({name:c,image:h,id:d})=>Ht.jsx(S1,{onClick:s,modelName:c,imgId:d,imgLink:h},d))})})]}),Ht.jsx("div",{className:Uc["content-right"],children:Ht.jsx("div",{children:Ht.jsx(E1,{typeSelected:l})})})]})}function b1(){const[r,t]=Pn.useState("type");function i(c){const h=c.target.dataset.name;t(h)}let s=null;const l=r;return l==="type"?s=Ht.jsx(T1,{}):l==="detail"?s=Ht.jsx(v1,{}):l==="composition"?s=Ht.jsx(m1,{}):s=Ht.jsx("p",{children:"Please select a light option."}),Ht.jsx(Ht.Fragment,{children:Ht.jsxs("div",{className:"main-container",children:[Ht.jsx("div",{className:"side-bar",children:Ht.jsx(RS,{handleTabClick:i,btnClicked:r})}),Ht.jsx("div",{className:"app-container",children:Ht.jsx(bS,{className:"ContentEffect",children:s},r)})]})})}TS.createRoot(document.getElementById("root")).render(Ht.jsx(Pn.StrictMode,{children:Ht.jsx(b1,{})}));
