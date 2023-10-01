import{j as K,s as te,a as be,f as Ke}from"./index-2b5df1a0.js";const Xe=e=>K.jsxs("div",{className:"flex flex-col "+e.className,children:[e.label!=null&&K.jsx("span",{className:"flex",children:e.label}),K.jsx("input",{...e,"data-testid":"add-word-input",style:{backgroundColor:e.backgroundColor},className:`w-auto rounded-md border-2
            border-solid border-opacity-50 bg-black
          px-2 pt-5 pb-4 text-sm
           leading-4  
           tracking-wide text-white outline-none placeholder:opacity-30
           focus:border-orange-400
            focus:opacity-100
          ${e.inputClassName}`,type:e.type,placeholder:e.placeholder,value:e.value,autoFocus:e.autoFocus,onChange:e.onChange})]});Xe.defaultProps={autoFocus:!1};const L=e=>{localStorage.setItem("tokens",JSON.stringify(e)),te.dispatch(be({...e,userInformation:null}))},Je=()=>{const e=localStorage.getItem("tokens");return e==null?{accessToken:"",refreshToken:""}:e?JSON.parse(e):""},Ie=()=>{localStorage.removeItem("tokens"),te.dispatch(be({accessToken:"",refreshToken:"",userInformation:null}))};function Ne(e,n){return function(){return e.apply(n,arguments)}}const{toString:Ye}=Object.prototype,{getPrototypeOf:re}=Object,F=(e=>n=>{const t=Ye.call(n);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),N=e=>(e=e.toLowerCase(),n=>F(n)===e),j=e=>n=>typeof n===e,{isArray:H}=Array,w=j("undefined");function qe(e){return e!==null&&!w(e)&&e.constructor!==null&&!w(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ae=N("ArrayBuffer");function ze(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&Ae(e.buffer),n}const $e=j("string"),O=j("function"),Se=j("number"),v=e=>e!==null&&typeof e=="object",Ze=e=>e===!0||e===!1,C=e=>{if(F(e)!=="object")return!1;const n=re(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Qe=N("Date"),en=N("File"),nn=N("Blob"),tn=N("FileList"),rn=e=>v(e)&&O(e.pipe),on=e=>{let n;return e&&(typeof FormData=="function"&&e instanceof FormData||O(e.append)&&((n=F(e))==="formdata"||n==="object"&&O(e.toString)&&e.toString()==="[object FormData]"))},sn=N("URLSearchParams"),an=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function B(e,n,{allOwnKeys:t=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),H(e))for(r=0,o=e.length;r<o;r++)n.call(null,e[r],r,e);else{const s=t?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let u;for(r=0;r<i;r++)u=s[r],n.call(null,e[u],u,e)}}function Ue(e,n){n=n.toLowerCase();const t=Object.keys(e);let r=t.length,o;for(;r-- >0;)if(o=t[r],n===o.toLowerCase())return o;return null}const ge=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),He=e=>!w(e)&&e!==ge;function z(){const{caseless:e}=He(this)&&this||{},n={},t=(r,o)=>{const s=e&&Ue(n,o)||o;C(n[s])&&C(r)?n[s]=z(n[s],r):C(r)?n[s]=z({},r):H(r)?n[s]=r.slice():n[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&B(arguments[r],t);return n}const cn=(e,n,t,{allOwnKeys:r}={})=>(B(n,(o,s)=>{t&&O(o)?e[s]=Ne(o,t):e[s]=o},{allOwnKeys:r}),e),un=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ln=(e,n,t,r)=>{e.prototype=Object.create(n.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:n.prototype}),t&&Object.assign(e.prototype,t)},dn=(e,n,t,r)=>{let o,s,i;const u={};if(n=n||{},e==null)return n;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,n))&&!u[i]&&(n[i]=e[i],u[i]=!0);e=t!==!1&&re(e)}while(e&&(!t||t(e,n))&&e!==Object.prototype);return n},_n=(e,n,t)=>{e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=n.length;const r=e.indexOf(n,t);return r!==-1&&r===t},pn=e=>{if(!e)return null;if(H(e))return e;let n=e.length;if(!Se(n))return null;const t=new Array(n);for(;n-- >0;)t[n]=e[n];return t},hn=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&re(Uint8Array)),fn=(e,n)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;n.call(e,s[0],s[1])}},mn=(e,n)=>{let t;const r=[];for(;(t=e.exec(n))!==null;)r.push(t);return r},En=N("HTMLFormElement"),Tn=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,o){return r.toUpperCase()+o}),ue=(({hasOwnProperty:e})=>(n,t)=>e.call(n,t))(Object.prototype),Rn=N("RegExp"),De=(e,n)=>{const t=Object.getOwnPropertyDescriptors(e),r={};B(t,(o,s)=>{let i;(i=n(o,s,e))!==!1&&(r[s]=i||o)}),Object.defineProperties(e,r)},On=e=>{De(e,(n,t)=>{if(O(e)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const r=e[t];if(O(r)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},bn=(e,n)=>{const t={},r=o=>{o.forEach(s=>{t[s]=!0})};return H(e)?r(e):r(String(e).split(n)),t},In=()=>{},Nn=(e,n)=>(e=+e,Number.isFinite(e)?e:n),X="abcdefghijklmnopqrstuvwxyz",le="0123456789",Pe={DIGIT:le,ALPHA:X,ALPHA_DIGIT:X+X.toUpperCase()+le},An=(e=16,n=Pe.ALPHA_DIGIT)=>{let t="";const{length:r}=n;for(;e--;)t+=n[Math.random()*r|0];return t};function Sn(e){return!!(e&&O(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Un=e=>{const n=new Array(10),t=(r,o)=>{if(v(r)){if(n.indexOf(r)>=0)return;if(!("toJSON"in r)){n[o]=r;const s=H(r)?[]:{};return B(r,(i,u)=>{const _=t(i,o+1);!w(_)&&(s[u]=_)}),n[o]=void 0,s}}return r};return t(e,0)},gn=N("AsyncFunction"),Hn=e=>e&&(v(e)||O(e))&&O(e.then)&&O(e.catch),a={isArray:H,isArrayBuffer:Ae,isBuffer:qe,isFormData:on,isArrayBufferView:ze,isString:$e,isNumber:Se,isBoolean:Ze,isObject:v,isPlainObject:C,isUndefined:w,isDate:Qe,isFile:en,isBlob:nn,isRegExp:Rn,isFunction:O,isStream:rn,isURLSearchParams:sn,isTypedArray:hn,isFileList:tn,forEach:B,merge:z,extend:cn,trim:an,stripBOM:un,inherits:ln,toFlatObject:dn,kindOf:F,kindOfTest:N,endsWith:_n,toArray:pn,forEachEntry:fn,matchAll:mn,isHTMLForm:En,hasOwnProperty:ue,hasOwnProp:ue,reduceDescriptors:De,freezeMethods:On,toObjectSet:bn,toCamelCase:Tn,noop:In,toFiniteNumber:Nn,findKey:Ue,global:ge,isContextDefined:He,ALPHABET:Pe,generateString:An,isSpecCompliantForm:Sn,toJSONObject:Un,isAsyncFn:gn,isThenable:Hn};function f(e,n,t,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",n&&(this.code=n),t&&(this.config=t),r&&(this.request=r),o&&(this.response=o)}a.inherits(f,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const we=f.prototype,Be={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Be[e]={value:e}});Object.defineProperties(f,Be);Object.defineProperty(we,"isAxiosError",{value:!0});f.from=(e,n,t,r,o,s)=>{const i=Object.create(we);return a.toFlatObject(e,i,function(_){return _!==Error.prototype},u=>u!=="isAxiosError"),f.call(i,e.message,n,t,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const Dn=null;function $(e){return a.isPlainObject(e)||a.isArray(e)}function Ge(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function de(e,n,t){return e?e.concat(n).map(function(o,s){return o=Ge(o),!t&&s?"["+o+"]":o}).join(t?".":""):n}function Pn(e){return a.isArray(e)&&!e.some($)}const wn=a.toFlatObject(a,{},null,function(n){return/^is[A-Z]/.test(n)});function V(e,n,t){if(!a.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,t=a.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,R){return!a.isUndefined(R[h])});const r=t.metaTokens,o=t.visitor||c,s=t.dots,i=t.indexes,_=(t.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(n);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function p(l){if(l===null)return"";if(a.isDate(l))return l.toISOString();if(!_&&a.isBlob(l))throw new f("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(l)||a.isTypedArray(l)?_&&typeof Blob=="function"?new Blob([l]):Buffer.from(l):l}function c(l,h,R){let A=l;if(l&&!R&&typeof l=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),l=JSON.stringify(l);else if(a.isArray(l)&&Pn(l)||(a.isFileList(l)||a.endsWith(h,"[]"))&&(A=a.toArray(l)))return h=Ge(h),A.forEach(function(y,We){!(a.isUndefined(y)||y===null)&&n.append(i===!0?de([h],We,s):i===null?h:h+"[]",p(y))}),!1}return $(l)?!0:(n.append(de(R,h,s),p(l)),!1)}const d=[],E=Object.assign(wn,{defaultVisitor:c,convertValue:p,isVisitable:$});function T(l,h){if(!a.isUndefined(l)){if(d.indexOf(l)!==-1)throw Error("Circular reference detected in "+h.join("."));d.push(l),a.forEach(l,function(A,b){(!(a.isUndefined(A)||A===null)&&o.call(n,A,a.isString(b)?b.trim():b,h,E))===!0&&T(A,h?h.concat(b):[b])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return T(e),n}function _e(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return n[r]})}function oe(e,n){this._pairs=[],e&&V(e,this,n)}const ye=oe.prototype;ye.append=function(n,t){this._pairs.push([n,t])};ye.toString=function(n){const t=n?function(r){return n.call(this,r,_e)}:_e;return this._pairs.map(function(o){return t(o[0])+"="+t(o[1])},"").join("&")};function Bn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Le(e,n,t){if(!n)return e;const r=t&&t.encode||Bn,o=t&&t.serialize;let s;if(o?s=o(n,t):s=a.isURLSearchParams(n)?n.toString():new oe(n,t).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Gn{constructor(){this.handlers=[]}use(n,t,r){return this.handlers.push({fulfilled:n,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){a.forEach(this.handlers,function(r){r!==null&&n(r)})}}const pe=Gn,Ce={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},yn=typeof URLSearchParams<"u"?URLSearchParams:oe,Ln=typeof FormData<"u"?FormData:null,Cn=typeof Blob<"u"?Blob:null,kn=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),xn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),I={isBrowser:!0,classes:{URLSearchParams:yn,FormData:Ln,Blob:Cn},isStandardBrowserEnv:kn,isStandardBrowserWebWorkerEnv:xn,protocols:["http","https","file","blob","url","data"]};function Mn(e,n){return V(e,new I.classes.URLSearchParams,Object.assign({visitor:function(t,r,o,s){return I.isNode&&a.isBuffer(t)?(this.append(r,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},n))}function Fn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function jn(e){const n={},t=Object.keys(e);let r;const o=t.length;let s;for(r=0;r<o;r++)s=t[r],n[s]=e[s];return n}function ke(e){function n(t,r,o,s){let i=t[s++];const u=Number.isFinite(+i),_=s>=t.length;return i=!i&&a.isArray(o)?o.length:i,_?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!u):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),n(t,r,o[i],s)&&a.isArray(o[i])&&(o[i]=jn(o[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const t={};return a.forEachEntry(e,(r,o)=>{n(Fn(r),o,t,0)}),t}return null}function vn(e,n,t){if(a.isString(e))try{return(n||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(e)}const se={transitional:Ce,adapter:["xhr","http"],transformRequest:[function(n,t){const r=t.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(n);if(s&&a.isHTMLForm(n)&&(n=new FormData(n)),a.isFormData(n))return o&&o?JSON.stringify(ke(n)):n;if(a.isArrayBuffer(n)||a.isBuffer(n)||a.isStream(n)||a.isFile(n)||a.isBlob(n))return n;if(a.isArrayBufferView(n))return n.buffer;if(a.isURLSearchParams(n))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let u;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Mn(n,this.formSerializer).toString();if((u=a.isFileList(n))||r.indexOf("multipart/form-data")>-1){const _=this.env&&this.env.FormData;return V(u?{"files[]":n}:n,_&&new _,this.formSerializer)}}return s||o?(t.setContentType("application/json",!1),vn(n)):n}],transformResponse:[function(n){const t=this.transitional||se.transitional,r=t&&t.forcedJSONParsing,o=this.responseType==="json";if(n&&a.isString(n)&&(r&&!this.responseType||o)){const i=!(t&&t.silentJSONParsing)&&o;try{return JSON.parse(n)}catch(u){if(i)throw u.name==="SyntaxError"?f.from(u,f.ERR_BAD_RESPONSE,this,null,this.response):u}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:I.classes.FormData,Blob:I.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{se.headers[e]={}});const ie=se,Vn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Wn=e=>{const n={};let t,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),t=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!t||n[t]&&Vn[t])&&(t==="set-cookie"?n[t]?n[t].push(r):n[t]=[r]:n[t]=n[t]?n[t]+", "+r:r)}),n},he=Symbol("internals");function D(e){return e&&String(e).trim().toLowerCase()}function k(e){return e===!1||e==null?e:a.isArray(e)?e.map(k):String(e)}function Kn(e){const n=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(e);)n[r[1]]=r[2];return n}const Xn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function J(e,n,t,r,o){if(a.isFunction(r))return r.call(this,n,t);if(o&&(n=t),!!a.isString(n)){if(a.isString(r))return n.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(n)}}function Jn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,t,r)=>t.toUpperCase()+r)}function Yn(e,n){const t=a.toCamelCase(" "+n);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+t,{value:function(o,s,i){return this[r].call(this,n,o,s,i)},configurable:!0})})}class W{constructor(n){n&&this.set(n)}set(n,t,r){const o=this;function s(u,_,p){const c=D(_);if(!c)throw new Error("header name must be a non-empty string");const d=a.findKey(o,c);(!d||o[d]===void 0||p===!0||p===void 0&&o[d]!==!1)&&(o[d||_]=k(u))}const i=(u,_)=>a.forEach(u,(p,c)=>s(p,c,_));return a.isPlainObject(n)||n instanceof this.constructor?i(n,t):a.isString(n)&&(n=n.trim())&&!Xn(n)?i(Wn(n),t):n!=null&&s(t,n,r),this}get(n,t){if(n=D(n),n){const r=a.findKey(this,n);if(r){const o=this[r];if(!t)return o;if(t===!0)return Kn(o);if(a.isFunction(t))return t.call(this,o,r);if(a.isRegExp(t))return t.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,t){if(n=D(n),n){const r=a.findKey(this,n);return!!(r&&this[r]!==void 0&&(!t||J(this,this[r],r,t)))}return!1}delete(n,t){const r=this;let o=!1;function s(i){if(i=D(i),i){const u=a.findKey(r,i);u&&(!t||J(r,r[u],u,t))&&(delete r[u],o=!0)}}return a.isArray(n)?n.forEach(s):s(n),o}clear(n){const t=Object.keys(this);let r=t.length,o=!1;for(;r--;){const s=t[r];(!n||J(this,this[s],s,n,!0))&&(delete this[s],o=!0)}return o}normalize(n){const t=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){t[i]=k(o),delete t[s];return}const u=n?Jn(s):String(s).trim();u!==s&&delete t[s],t[u]=k(o),r[u]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const t=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(t[o]=n&&a.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,t])=>n+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...t){const r=new this(n);return t.forEach(o=>r.set(o)),r}static accessor(n){const r=(this[he]=this[he]={accessors:{}}).accessors,o=this.prototype;function s(i){const u=D(i);r[u]||(Yn(o,i),r[u]=!0)}return a.isArray(n)?n.forEach(s):s(n),this}}W.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(W.prototype,({value:e},n)=>{let t=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(r){this[t]=r}}});a.freezeMethods(W);const S=W;function Y(e,n){const t=this||ie,r=n||t,o=S.from(r.headers);let s=r.data;return a.forEach(e,function(u){s=u.call(t,s,o.normalize(),n?n.status:void 0)}),o.normalize(),s}function xe(e){return!!(e&&e.__CANCEL__)}function G(e,n,t){f.call(this,e??"canceled",f.ERR_CANCELED,n,t),this.name="CanceledError"}a.inherits(G,f,{__CANCEL__:!0});function qn(e,n,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?e(t):n(new f("Request failed with status code "+t.status,[f.ERR_BAD_REQUEST,f.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}const zn=I.isStandardBrowserEnv?function(){return{write:function(t,r,o,s,i,u){const _=[];_.push(t+"="+encodeURIComponent(r)),a.isNumber(o)&&_.push("expires="+new Date(o).toGMTString()),a.isString(s)&&_.push("path="+s),a.isString(i)&&_.push("domain="+i),u===!0&&_.push("secure"),document.cookie=_.join("; ")},read:function(t){const r=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function $n(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Zn(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e}function Me(e,n){return e&&!$n(n)?Zn(e,n):n}const Qn=I.isStandardBrowserEnv?function(){const n=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let r;function o(s){let i=s;return n&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return r=o(window.location.href),function(i){const u=a.isString(i)?o(i):i;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function et(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function nt(e,n){e=e||10;const t=new Array(e),r=new Array(e);let o=0,s=0,i;return n=n!==void 0?n:1e3,function(_){const p=Date.now(),c=r[s];i||(i=p),t[o]=_,r[o]=p;let d=s,E=0;for(;d!==o;)E+=t[d++],d=d%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),p-i<n)return;const T=c&&p-c;return T?Math.round(E*1e3/T):void 0}}function fe(e,n){let t=0;const r=nt(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,u=s-t,_=r(u),p=s<=i;t=s;const c={loaded:s,total:i,progress:i?s/i:void 0,bytes:u,rate:_||void 0,estimated:_&&i&&p?(i-s)/_:void 0,event:o};c[n?"download":"upload"]=!0,e(c)}}const tt=typeof XMLHttpRequest<"u",rt=tt&&function(e){return new Promise(function(t,r){let o=e.data;const s=S.from(e.headers).normalize(),i=e.responseType;let u;function _(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}let p;a.isFormData(o)&&(I.isStandardBrowserEnv||I.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.getContentType(/^\s*multipart\/form-data/)?a.isString(p=s.getContentType())&&s.setContentType(p.replace(/^\s*(multipart\/form-data);+/,"$1")):s.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(e.auth){const l=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(l+":"+h))}const d=Me(e.baseURL,e.url);c.open(e.method.toUpperCase(),Le(d,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function E(){if(!c)return;const l=S.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),R={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:l,config:e,request:c};qn(function(b){t(b),_()},function(b){r(b),_()},R),c=null}if("onloadend"in c?c.onloadend=E:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(E)},c.onabort=function(){c&&(r(new f("Request aborted",f.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new f("Network Error",f.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let h=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const R=e.transitional||Ce;e.timeoutErrorMessage&&(h=e.timeoutErrorMessage),r(new f(h,R.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,e,c)),c=null},I.isStandardBrowserEnv){const l=(e.withCredentials||Qn(d))&&e.xsrfCookieName&&zn.read(e.xsrfCookieName);l&&s.set(e.xsrfHeaderName,l)}o===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(h,R){c.setRequestHeader(R,h)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",fe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",fe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=l=>{c&&(r(!l||l.type?new G(null,e,c):l),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const T=et(d);if(T&&I.protocols.indexOf(T)===-1){r(new f("Unsupported protocol "+T+":",f.ERR_BAD_REQUEST,e));return}c.send(o||null)})},Z={http:Dn,xhr:rt};a.forEach(Z,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const me=e=>`- ${e}`,ot=e=>a.isFunction(e)||e===null||e===!1,Fe={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:n}=e;let t,r;const o={};for(let s=0;s<n;s++){t=e[s];let i;if(r=t,!ot(t)&&(r=Z[(i=String(t)).toLowerCase()],r===void 0))throw new f(`Unknown adapter '${i}'`);if(r)break;o[i||"#"+s]=r}if(!r){const s=Object.entries(o).map(([u,_])=>`adapter ${u} `+(_===!1?"is not supported by the environment":"is not available in the build"));let i=n?s.length>1?`since :
`+s.map(me).join(`
`):" "+me(s[0]):"as no adapter specified";throw new f("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:Z};function q(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new G(null,e)}function Ee(e){return q(e),e.headers=S.from(e.headers),e.data=Y.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Fe.getAdapter(e.adapter||ie.adapter)(e).then(function(r){return q(e),r.data=Y.call(e,e.transformResponse,r),r.headers=S.from(r.headers),r},function(r){return xe(r)||(q(e),r&&r.response&&(r.response.data=Y.call(e,e.transformResponse,r.response),r.response.headers=S.from(r.response.headers))),Promise.reject(r)})}const Te=e=>e instanceof S?e.toJSON():e;function g(e,n){n=n||{};const t={};function r(p,c,d){return a.isPlainObject(p)&&a.isPlainObject(c)?a.merge.call({caseless:d},p,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function o(p,c,d){if(a.isUndefined(c)){if(!a.isUndefined(p))return r(void 0,p,d)}else return r(p,c,d)}function s(p,c){if(!a.isUndefined(c))return r(void 0,c)}function i(p,c){if(a.isUndefined(c)){if(!a.isUndefined(p))return r(void 0,p)}else return r(void 0,c)}function u(p,c,d){if(d in n)return r(p,c);if(d in e)return r(void 0,p)}const _={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(p,c)=>o(Te(p),Te(c),!0)};return a.forEach(Object.keys(Object.assign({},e,n)),function(c){const d=_[c]||o,E=d(e[c],n[c],c);a.isUndefined(E)&&d!==u||(t[c]=E)}),t}const je="1.5.1",ae={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{ae[e]=function(r){return typeof r===e||"a"+(n<1?"n ":" ")+e}});const Re={};ae.transitional=function(n,t,r){function o(s,i){return"[Axios v"+je+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,u)=>{if(n===!1)throw new f(o(i," has been removed"+(t?" in "+t:"")),f.ERR_DEPRECATED);return t&&!Re[i]&&(Re[i]=!0,console.warn(o(i," has been deprecated since v"+t+" and will be removed in the near future"))),n?n(s,i,u):!0}};function st(e,n,t){if(typeof e!="object")throw new f("options must be an object",f.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=n[s];if(i){const u=e[s],_=u===void 0||i(u,s,e);if(_!==!0)throw new f("option "+s+" must be "+_,f.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new f("Unknown option "+s,f.ERR_BAD_OPTION)}}const Q={assertOptions:st,validators:ae},U=Q.validators;class M{constructor(n){this.defaults=n,this.interceptors={request:new pe,response:new pe}}request(n,t){typeof n=="string"?(t=t||{},t.url=n):t=n||{},t=g(this.defaults,t);const{transitional:r,paramsSerializer:o,headers:s}=t;r!==void 0&&Q.assertOptions(r,{silentJSONParsing:U.transitional(U.boolean),forcedJSONParsing:U.transitional(U.boolean),clarifyTimeoutError:U.transitional(U.boolean)},!1),o!=null&&(a.isFunction(o)?t.paramsSerializer={serialize:o}:Q.assertOptions(o,{encode:U.function,serialize:U.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=s&&a.merge(s.common,s[t.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],l=>{delete s[l]}),t.headers=S.concat(i,s);const u=[];let _=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(t)===!1||(_=_&&h.synchronous,u.unshift(h.fulfilled,h.rejected))});const p=[];this.interceptors.response.forEach(function(h){p.push(h.fulfilled,h.rejected)});let c,d=0,E;if(!_){const l=[Ee.bind(this),void 0];for(l.unshift.apply(l,u),l.push.apply(l,p),E=l.length,c=Promise.resolve(t);d<E;)c=c.then(l[d++],l[d++]);return c}E=u.length;let T=t;for(d=0;d<E;){const l=u[d++],h=u[d++];try{T=l(T)}catch(R){h.call(this,R);break}}try{c=Ee.call(this,T)}catch(l){return Promise.reject(l)}for(d=0,E=p.length;d<E;)c=c.then(p[d++],p[d++]);return c}getUri(n){n=g(this.defaults,n);const t=Me(n.baseURL,n.url);return Le(t,n.params,n.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(n){M.prototype[n]=function(t,r){return this.request(g(r||{},{method:n,url:t,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(n){function t(r){return function(s,i,u){return this.request(g(u||{},{method:n,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}M.prototype[n]=t(),M.prototype[n+"Form"]=t(!0)});const x=M;class ce{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(u=>{r.subscribe(u),s=u}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},n(function(s,i,u){r.reason||(r.reason=new G(s,i,u),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const t=this._listeners.indexOf(n);t!==-1&&this._listeners.splice(t,1)}static source(){let n;return{token:new ce(function(o){n=o}),cancel:n}}}const it=ce;function at(e){return function(t){return e.apply(null,t)}}function ct(e){return a.isObject(e)&&e.isAxiosError===!0}const ee={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ee).forEach(([e,n])=>{ee[n]=e});const ut=ee;function ve(e){const n=new x(e),t=Ne(x.prototype.request,n);return a.extend(t,x.prototype,n,{allOwnKeys:!0}),a.extend(t,n,null,{allOwnKeys:!0}),t.create=function(o){return ve(g(e,o))},t}const m=ve(ie);m.Axios=x;m.CanceledError=G;m.CancelToken=it;m.isCancel=xe;m.VERSION=je;m.toFormData=V;m.AxiosError=f;m.Cancel=m.CanceledError;m.all=function(n){return Promise.all(n)};m.spread=at;m.isAxiosError=ct;m.mergeConfig=g;m.AxiosHeaders=S;m.formToJSON=e=>ke(a.isHTMLForm(e)?new FormData(e):e);m.getAdapter=Fe.getAdapter;m.HttpStatusCode=ut;m.default=m;const ne=m;function Ve(e){const t=`; ${document.cookie}`.split(`; ${e}=`);if(t.length===2)return t.pop().split(";").shift()}const lt=(e="")=>{const n=`https://aha-backend.fly.dev/${e}`,t=ne.create({baseURL:n,headers:{"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"https://aha-backend.fly.dev"}});return t.interceptors.request.use(r=>r,r=>Promise.reject(r)),t.interceptors.response.use(r=>(P(r),r),r=>(P(r.response),r.response)),t},dt=(e="")=>{const n=ne.create({baseURL:`https://aha-backend.fly.dev/${e}`,headers:{"Content-Type":"application/json"},withCredentials:!0});return n.interceptors.request.use(async t=>{const r=Ve("accessToken");return t.headers&&(t.headers.authorization=`Bearer ${r}`),t},t=>Promise.reject(t)),n.interceptors.response.use(async t=>(P(t),t),async t=>{if(t.response&&t.response.status===401){const{refreshToken:r}=Je();try{const o=await ne.post("https://aha-backend.fly.dev/auth/refresh",{refreshToken:r},{headers:{authorization:`Bearer ${r}`}});return P(o),L(o.data.data),n(t.config)}catch(o){return console.log(o),o.response.status===401&&Ie(),P(o.response,o.response.status),Promise.reject(o)}}return Promise.reject(t)}),n};async function P(e,n="good"){switch(e.data.success){case!1:te.dispatch(Ke({show:!0,msg:JSON.stringify(e.data),title:"Error"}));break}}const Oe="auth",pt=()=>{const e=lt(Oe),n=dt(Oe);return{POST_REGISTER:async c=>{const d=await e.post("register",{...c});return d.data.data&&L(d.data.data),d},GET_REFRESH:async()=>await n.get("refresh",{withCredentials:!0}),POST_LOGIN:async c=>{console.log(Ve("test"));const d=await e.post("login",{...c},{withCredentials:!0});return console.log(d.headers["set-cookie"]),console.log(document.cookie),d.data.data&&L(d.data.data),d},GET_TokenTest:async()=>await n.get("test"),GET_USER:async()=>{const c=await e.get("login/success",{withCredentials:!0});return c.data.data&&L(c.data.data),c},GET_LOGOUT:async()=>{const c=await e.get("logout",{withCredentials:!0});return c.data.status&&Ie(),c},POST_PASSWORD_EMAIL:async c=>await e.post("reset-password",{email:c}),POST_RESET_PASSWORD:async({password:c,confirmPassword:d},E)=>await e.post(`reset-password/${E}`,{password:c,confirmPassword:d})}};export{Xe as I,Je as g,dt as p,pt as u};
