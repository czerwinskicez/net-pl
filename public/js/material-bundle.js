/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,e$5=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o$3=new WeakMap;let n$4 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$5&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$3.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$4("string"==typeof t?t:t+"",void 0,s),i$2=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$4(o,t,s)},S$1=(s,o)=>{if(e$5)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$1.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$5?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$1,defineProperty:e$4,getOwnPropertyDescriptor:r$3,getOwnPropertyNames:h$2,getOwnPropertySymbols:o$2,getPrototypeOf:n$3}=Object,a=globalThis,c$1=a.trustedTypes,l=c$1?c$1.emptyScript:"",p=a.reactiveElementPolyfillSupport,d=(t,s)=>t,u={toAttribute(t,s){switch(s){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$2=(t,s)=>!i$1(t,s),y={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:f$2};Symbol.metadata??=Symbol("metadata"),a.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$4(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$3(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(d("elementProperties")))return;const t=n$3(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d("properties"))){const t=this.properties,s=[...h$2(t),...o$2(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$2)(this[t],s))return;this.P(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU();}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d("elementProperties")]=new Map,b[d("finalized")]=new Map,p?.({ReactiveElement:b}),(a.reactiveElementVersions??=[]).push("2.0.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$1={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:f$2},r$2=(t=o$1,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n$2(t){return (e,o)=>"object"==typeof o?r$2(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r$1(r){return n$2({...r,state:!0,attribute:!1})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$3=(e,t,c)=>(c.configurable=!0,c.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,c),c);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$2(e,r){return (n,s,i)=>{const o=t=>t.renderRoot?.querySelector(e)??null;return e$3(n,s,{get(){return o(this)}})}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let e$1;function r(r){return (n,o)=>e$3(n,o,{get(){return (this.renderRoot??(e$1??=document.createDocumentFragment())).querySelectorAll(r)}})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o(o){return (e,n)=>{const{slot:r,selector:s}=o??{},c="slot"+(r?`[name=${r}]`:":not([name])");return e$3(e,n,{get(){const t=this.renderRoot?.querySelector(c),e=t?.assignedElements(o)??[];return void 0===s?e:e.filter((t=>t.matches(s)))}})}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function n$1(n){return (o,r)=>{const{slot:e}=n??{},s="slot"+(e?`[name=${e}]`:":not([name])");return e$3(o,r,{get(){const t=this.renderRoot?.querySelector(s);return t?.assignedNodes(n)??[]}})}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n=globalThis,c=n.trustedTypes,h$1=c?c.createPolicy("lit-html",{createHTML:t=>t}):void 0,f$1="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,m="?"+v,_=`<${m}>`,w=document,lt=()=>w.createComment(""),st=t=>null===t||"object"!=typeof t&&"function"!=typeof t,g=Array.isArray,$=t=>g(t)||"function"==typeof t?.[Symbol.iterator],x="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,k=/>/g,O=RegExp(`>|${x}(?:([^\\s"'>=/]+)(${x}*=${x}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),S=/'/g,j=/"/g,M=/^(?:script|style|textarea|title)$/i,P=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),ke$1=P(1),R=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),V=new WeakMap,I=w.createTreeWalker(w,129);function N(t,i){if(!g(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==h$1?h$1.createHTML(i):i}const U=(t,i)=>{const s=t.length-1,e=[];let h,o=2===i?"<svg>":3===i?"<math>":"",n=T;for(let i=0;i<s;i++){const s=t[i];let r,l,c=-1,a=0;for(;a<s.length&&(n.lastIndex=a,l=n.exec(s),null!==l);)a=n.lastIndex,n===T?"!--"===l[1]?n=E:void 0!==l[1]?n=k:void 0!==l[2]?(M.test(l[2])&&(h=RegExp("</"+l[2],"g")),n=O):void 0!==l[3]&&(n=O):n===O?">"===l[0]?(n=h??T,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,r=l[1],n=void 0===l[3]?O:'"'===l[3]?j:S):n===j||n===S?n=O:n===E||n===k?n=T:(n=O,h=void 0);const u=n===O&&t[i+1].startsWith("/>")?" ":"";o+=n===T?s+_:c>=0?(e.push(r),s.slice(0,c)+f$1+s.slice(c)+v+u):s+v+(-2===c?i:u);}return [N(t,o+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class B{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let h=0,o=0;const n=t.length-1,r=this.parts,[l,a]=U(t,i);if(this.el=B.createElement(l,s),I.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(e=I.nextNode())&&r.length<n;){if(1===e.nodeType){if(e.hasAttributes())for(const t of e.getAttributeNames())if(t.endsWith(f$1)){const i=a[o++],s=e.getAttribute(t).split(v),n=/([.?@])?(.*)/.exec(i);r.push({type:1,index:h,name:n[2],strings:s,ctor:"."===n[1]?Y:"?"===n[1]?Z:"@"===n[1]?q:G}),e.removeAttribute(t);}else t.startsWith(v)&&(r.push({type:6,index:h}),e.removeAttribute(t));if(M.test(e.tagName)){const t=e.textContent.split(v),i=t.length-1;if(i>0){e.textContent=c?c.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],lt()),I.nextNode(),r.push({type:2,index:++h});e.append(t[i],lt());}}}else if(8===e.nodeType)if(e.data===m)r.push({type:2,index:h});else {let t=-1;for(;-1!==(t=e.data.indexOf(v,t+1));)r.push({type:7,index:h}),t+=v.length-1;}h++;}}static createElement(t,i){const s=w.createElement("template");return s.innerHTML=t,s}}function z(t,i,s=t,e){if(i===R)return i;let h=void 0!==e?s.o?.[e]:s.l;const o=st(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s.o??=[])[e]=h:s.l=h),void 0!==h&&(i=z(t,h._$AS(t,i.values),h,e)),i}class F{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??w).importNode(i,!0);I.currentNode=e;let h=I.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new et(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new K(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=I.nextNode(),o++);}return I.currentNode=w,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class et{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,i,s,e){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this.v=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=z(this,t,i),st(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==R&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):$(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==D&&st(this._$AH)?this._$AA.nextSibling.data=t:this.T(w.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=B.createElement(N(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new F(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=V.get(t.strings);return void 0===i&&V.set(t.strings,i=new B(t)),i}k(t){g(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new et(this.O(lt()),this.O(lt()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t));}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=D;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=z(this,t,i,0),o=!st(t)||t!==this._$AH&&t!==R,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=z(this,e[s+n],i,n),r===R&&(r=this._$AH[n]),o||=!st(r)||r!==this._$AH[n],r===D?t=D:t!==D&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class Y extends G{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===D?void 0:t;}}class Z extends G{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==D);}}class q extends G{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=z(this,t,i,0)??D)===R)return;const s=this._$AH,e=t===D&&s!==D||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==D&&(s===D||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class K{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t);}}const Re=n.litHtmlPolyfillSupport;Re?.(B,et),(n.litHtmlVersions??=[]).push("3.2.0");const Q=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new et(i.insertBefore(lt(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class h extends b{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=Q(e,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1);}render(){return R}}h._$litElement$=!0,h["finalized"]=!0,globalThis.litElementHydrateSupport?.({LitElement:h});const f=globalThis.litElementPolyfillSupport;f?.({LitElement:h});(globalThis.litElementVersions??=[]).push("4.1.0");

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A key to retrieve an `Attachable` element's `AttachableController` from a
 * global `MutationObserver`.
 */
const ATTACHABLE_CONTROLLER = Symbol('attachableController');
let FOR_ATTRIBUTE_OBSERVER;
{
    /**
     * A global `MutationObserver` that reacts to `for` attribute changes on
     * `Attachable` elements. If the `for` attribute changes, the controller will
     * re-attach to the new referenced element.
     */
    FOR_ATTRIBUTE_OBSERVER = new MutationObserver((records) => {
        for (const record of records) {
            // When a control's `for` attribute changes, inform its
            // `AttachableController` to update to a new control.
            record.target[ATTACHABLE_CONTROLLER]?.hostConnected();
        }
    });
}
/**
 * A controller that provides an implementation for `Attachable` elements.
 *
 * @example
 * ```ts
 * class MyElement extends LitElement implements Attachable {
 *   get control() { return this.attachableController.control; }
 *
 *   private readonly attachableController = new AttachableController(
 *     this,
 *     (previousControl, newControl) => {
 *       previousControl?.removeEventListener('click', this.handleClick);
 *       newControl?.addEventListener('click', this.handleClick);
 *     }
 *   );
 *
 *   // Implement remaining `Attachable` properties/methods that call the
 *   // controller's properties/methods.
 * }
 * ```
 */
class AttachableController {
    get htmlFor() {
        return this.host.getAttribute('for');
    }
    set htmlFor(htmlFor) {
        if (htmlFor === null) {
            this.host.removeAttribute('for');
        }
        else {
            this.host.setAttribute('for', htmlFor);
        }
    }
    get control() {
        if (this.host.hasAttribute('for')) {
            if (!this.htmlFor || !this.host.isConnected) {
                return null;
            }
            return this.host.getRootNode().querySelector(`#${this.htmlFor}`);
        }
        return this.currentControl || this.host.parentElement;
    }
    set control(control) {
        if (control) {
            this.attach(control);
        }
        else {
            this.detach();
        }
    }
    /**
     * Creates a new controller for an `Attachable` element.
     *
     * @param host The `Attachable` element.
     * @param onControlChange A callback with two parameters for the previous and
     *     next control. An `Attachable` element may perform setup or teardown
     *     logic whenever the control changes.
     */
    constructor(host, onControlChange) {
        this.host = host;
        this.onControlChange = onControlChange;
        this.currentControl = null;
        host.addController(this);
        host[ATTACHABLE_CONTROLLER] = this;
        FOR_ATTRIBUTE_OBSERVER?.observe(host, { attributeFilter: ['for'] });
    }
    attach(control) {
        if (control === this.currentControl) {
            return;
        }
        this.setCurrentControl(control);
        // When imperatively attaching, remove the `for` attribute so
        // that the attached control is used instead of a referenced one.
        this.host.removeAttribute('for');
    }
    detach() {
        this.setCurrentControl(null);
        // When imperatively detaching, add an empty `for=""` attribute. This will
        // ensure the control is `null` rather than the `parentElement`.
        this.host.setAttribute('for', '');
    }
    /** @private */
    hostConnected() {
        this.setCurrentControl(this.control);
    }
    /** @private */
    hostDisconnected() {
        this.setCurrentControl(null);
    }
    setCurrentControl(control) {
        this.onControlChange(this.currentControl, control);
        this.currentControl = control;
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Events that the focus ring listens to.
 */
const EVENTS$1 = ['focusin', 'focusout', 'pointerdown'];
/**
 * A focus ring component.
 *
 * @fires visibility-changed {Event} Fired whenever `visible` changes.
 */
class FocusRing extends h {
    constructor() {
        super(...arguments);
        /**
         * Makes the focus ring visible.
         */
        this.visible = false;
        /**
         * Makes the focus ring animate inwards instead of outwards.
         */
        this.inward = false;
        this.attachableController = new AttachableController(this, this.onControlChange.bind(this));
    }
    get htmlFor() {
        return this.attachableController.htmlFor;
    }
    set htmlFor(htmlFor) {
        this.attachableController.htmlFor = htmlFor;
    }
    get control() {
        return this.attachableController.control;
    }
    set control(control) {
        this.attachableController.control = control;
    }
    attach(control) {
        this.attachableController.attach(control);
    }
    detach() {
        this.attachableController.detach();
    }
    connectedCallback() {
        super.connectedCallback();
        // Needed for VoiceOver, which will create a "group" if the element is a
        // sibling to other content.
        this.setAttribute('aria-hidden', 'true');
    }
    /** @private */
    handleEvent(event) {
        if (event[HANDLED_BY_FOCUS_RING]) {
            // This ensures the focus ring does not activate when multiple focus rings
            // are used within a single component.
            return;
        }
        switch (event.type) {
            default:
                return;
            case 'focusin':
                this.visible = this.control?.matches(':focus-visible') ?? false;
                break;
            case 'focusout':
            case 'pointerdown':
                this.visible = false;
                break;
        }
        event[HANDLED_BY_FOCUS_RING] = true;
    }
    onControlChange(prev, next) {
        for (const event of EVENTS$1) {
            prev?.removeEventListener(event, this);
            next?.addEventListener(event, this);
        }
    }
    update(changed) {
        if (changed.has('visible')) {
            // This logic can be removed once the `:has` selector has been introduced
            // to Firefox. This is necessary to allow correct submenu styles.
            this.dispatchEvent(new Event('visibility-changed'));
        }
        super.update(changed);
    }
}
__decorate([
    n$2({ type: Boolean, reflect: true })
], FocusRing.prototype, "visible", void 0);
__decorate([
    n$2({ type: Boolean, reflect: true })
], FocusRing.prototype, "inward", void 0);
const HANDLED_BY_FOCUS_RING = Symbol('handledByFocusRing');

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./focus/internal/focus-ring-styles.css.
const styles$b = i$2 `:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/267336424): add docs
 *
 * @final
 * @suppress {visibility}
 */
let MdFocusRing = class MdFocusRing extends FocusRing {
};
MdFocusRing.styles = [styles$b];
MdFocusRing = __decorate([
    t$2('md-focus-ring')
], MdFocusRing);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this.t=t,this._$AM=e,this.i=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt=e(class extends i{constructor(s){if(super(s),s.type!==t.ATTRIBUTE||"class"!==s.name||s.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(t,[s]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(s)}const i=t.element.classList;for(const t of this.st)t in s||(i.remove(t),this.st.delete(t));for(const t in s){const r=!!s[t];r===this.st.has(t)||this.nt?.has(t)||(r?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)));}return R}});

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Easing functions to use for web animations.
 *
 * **NOTE:** `EASING.EMPHASIZED` is approximated with unknown accuracy.
 *
 * TODO(b/241113345): replace with tokens
 */
const EASING = {
    STANDARD: 'cubic-bezier(0.2, 0, 0, 1)',
    STANDARD_ACCELERATE: 'cubic-bezier(.3,0,1,1)',
    STANDARD_DECELERATE: 'cubic-bezier(0,0,0,1)',
    EMPHASIZED: 'cubic-bezier(.3,0,0,1)',
    EMPHASIZED_ACCELERATE: 'cubic-bezier(.3,0,.8,.15)',
    EMPHASIZED_DECELERATE: 'cubic-bezier(.05,.7,.1,1)',
};
/**
 * Creates an `AnimationSignal` that can be used to cancel a previous task.
 *
 * @example
 * class MyClass {
 *   private labelAnimationSignal = createAnimationSignal();
 *
 *   private async animateLabel() {
 *     // Start of the task. Previous tasks will be canceled.
 *     const signal = this.labelAnimationSignal.start();
 *
 *     // Do async work...
 *     if (signal.aborted) {
 *       // Use AbortSignal to check if a request was made to abort after some
 *       // asynchronous work.
 *       return;
 *     }
 *
 *     const animation = this.animate(...);
 *     // Add event listeners to be notified when the task should be canceled.
 *     signal.addEventListener('abort', () => {
 *       animation.cancel();
 *     });
 *
 *     animation.addEventListener('finish', () => {
 *       // Tell the signal that the current task is finished.
 *       this.labelAnimationSignal.finish();
 *     });
 *   }
 * }
 *
 * @return An `AnimationSignal`.
 */
function createAnimationSignal() {
    // The current animation's AbortController
    let animationAbortController = null;
    return {
        start() {
            // Tell the previous animation to cancel.
            animationAbortController?.abort();
            // Set up a new AbortController for the current animation.
            animationAbortController = new AbortController();
            // Provide the AbortSignal so that the caller can check aborted status
            // and add listeners.
            return animationAbortController.signal;
        },
        finish() {
            animationAbortController = null;
        },
    };
}

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const PRESS_GROW_MS = 450;
const MINIMUM_PRESS_MS = 225;
const INITIAL_ORIGIN_SCALE = 0.2;
const PADDING = 10;
const SOFT_EDGE_MINIMUM_SIZE = 75;
const SOFT_EDGE_CONTAINER_RATIO = 0.35;
const PRESS_PSEUDO = '::after';
const ANIMATION_FILL = 'forwards';
/**
 * Interaction states for the ripple.
 *
 * On Touch:
 *  - `INACTIVE -> TOUCH_DELAY -> WAITING_FOR_CLICK -> INACTIVE`
 *  - `INACTIVE -> TOUCH_DELAY -> HOLDING -> WAITING_FOR_CLICK -> INACTIVE`
 *
 * On Mouse or Pen:
 *   - `INACTIVE -> WAITING_FOR_CLICK -> INACTIVE`
 */
var State;
(function (State) {
    /**
     * Initial state of the control, no touch in progress.
     *
     * Transitions:
     *   - on touch down: transition to `TOUCH_DELAY`.
     *   - on mouse down: transition to `WAITING_FOR_CLICK`.
     */
    State[State["INACTIVE"] = 0] = "INACTIVE";
    /**
     * Touch down has been received, waiting to determine if it's a swipe or
     * scroll.
     *
     * Transitions:
     *   - on touch up: begin press; transition to `WAITING_FOR_CLICK`.
     *   - on cancel: transition to `INACTIVE`.
     *   - after `TOUCH_DELAY_MS`: begin press; transition to `HOLDING`.
     */
    State[State["TOUCH_DELAY"] = 1] = "TOUCH_DELAY";
    /**
     * A touch has been deemed to be a press
     *
     * Transitions:
     *  - on up: transition to `WAITING_FOR_CLICK`.
     */
    State[State["HOLDING"] = 2] = "HOLDING";
    /**
     * The user touch has finished, transition into rest state.
     *
     * Transitions:
     *   - on click end press; transition to `INACTIVE`.
     */
    State[State["WAITING_FOR_CLICK"] = 3] = "WAITING_FOR_CLICK";
})(State || (State = {}));
/**
 * Events that the ripple listens to.
 */
const EVENTS = [
    'click',
    'contextmenu',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerup',
];
/**
 * Delay reacting to touch so that we do not show the ripple for a swipe or
 * scroll interaction.
 */
const TOUCH_DELAY_MS = 150;
/**
 * Used to detect if HCM is active. Events do not process during HCM when the
 * ripple is not displayed.
 */
const FORCED_COLORS = window.matchMedia('(forced-colors: active)');
/**
 * A ripple component.
 */
class Ripple extends h {
    constructor() {
        super(...arguments);
        /**
         * Disables the ripple.
         */
        this.disabled = false;
        this.hovered = false;
        this.pressed = false;
        this.rippleSize = '';
        this.rippleScale = '';
        this.initialSize = 0;
        this.state = State.INACTIVE;
        this.checkBoundsAfterContextMenu = false;
        this.attachableController = new AttachableController(this, this.onControlChange.bind(this));
    }
    get htmlFor() {
        return this.attachableController.htmlFor;
    }
    set htmlFor(htmlFor) {
        this.attachableController.htmlFor = htmlFor;
    }
    get control() {
        return this.attachableController.control;
    }
    set control(control) {
        this.attachableController.control = control;
    }
    attach(control) {
        this.attachableController.attach(control);
    }
    detach() {
        this.attachableController.detach();
    }
    connectedCallback() {
        super.connectedCallback();
        // Needed for VoiceOver, which will create a "group" if the element is a
        // sibling to other content.
        this.setAttribute('aria-hidden', 'true');
    }
    render() {
        const classes = {
            'hovered': this.hovered,
            'pressed': this.pressed,
        };
        return ke$1 `<div class="surface ${Rt(classes)}"></div>`;
    }
    update(changedProps) {
        if (changedProps.has('disabled') && this.disabled) {
            this.hovered = false;
            this.pressed = false;
        }
        super.update(changedProps);
    }
    /**
     * TODO(b/269799771): make private
     * @private only public for slider
     */
    handlePointerenter(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        this.hovered = true;
    }
    /**
     * TODO(b/269799771): make private
     * @private only public for slider
     */
    handlePointerleave(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        this.hovered = false;
        // release a held mouse or pen press that moves outside the element
        if (this.state !== State.INACTIVE) {
            this.endPressAnimation();
        }
    }
    handlePointerup(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        if (this.state === State.HOLDING) {
            this.state = State.WAITING_FOR_CLICK;
            return;
        }
        if (this.state === State.TOUCH_DELAY) {
            this.state = State.WAITING_FOR_CLICK;
            this.startPressAnimation(this.rippleStartEvent);
            return;
        }
    }
    async handlePointerdown(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        this.rippleStartEvent = event;
        if (!this.isTouch(event)) {
            this.state = State.WAITING_FOR_CLICK;
            this.startPressAnimation(event);
            return;
        }
        // after a longpress contextmenu event, an extra `pointerdown` can be
        // dispatched to the pressed element. Check that the down is within
        // bounds of the element in this case.
        if (this.checkBoundsAfterContextMenu && !this.inBounds(event)) {
            return;
        }
        this.checkBoundsAfterContextMenu = false;
        // Wait for a hold after touch delay
        this.state = State.TOUCH_DELAY;
        await new Promise((resolve) => {
            setTimeout(resolve, TOUCH_DELAY_MS);
        });
        if (this.state !== State.TOUCH_DELAY) {
            return;
        }
        this.state = State.HOLDING;
        this.startPressAnimation(event);
    }
    handleClick() {
        // Click is a MouseEvent in Firefox and Safari, so we cannot use
        // `shouldReactToEvent`
        if (this.disabled) {
            return;
        }
        if (this.state === State.WAITING_FOR_CLICK) {
            this.endPressAnimation();
            return;
        }
        if (this.state === State.INACTIVE) {
            // keyboard synthesized click event
            this.startPressAnimation();
            this.endPressAnimation();
        }
    }
    handlePointercancel(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        this.endPressAnimation();
    }
    handleContextmenu() {
        if (this.disabled) {
            return;
        }
        this.checkBoundsAfterContextMenu = true;
        this.endPressAnimation();
    }
    determineRippleSize() {
        const { height, width } = this.getBoundingClientRect();
        const maxDim = Math.max(height, width);
        const softEdgeSize = Math.max(SOFT_EDGE_CONTAINER_RATIO * maxDim, SOFT_EDGE_MINIMUM_SIZE);
        const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
        const hypotenuse = Math.sqrt(width ** 2 + height ** 2);
        const maxRadius = hypotenuse + PADDING;
        this.initialSize = initialSize;
        this.rippleScale = `${(maxRadius + softEdgeSize) / initialSize}`;
        this.rippleSize = `${initialSize}px`;
    }
    getNormalizedPointerEventCoords(pointerEvent) {
        const { scrollX, scrollY } = window;
        const { left, top } = this.getBoundingClientRect();
        const documentX = scrollX + left;
        const documentY = scrollY + top;
        const { pageX, pageY } = pointerEvent;
        return { x: pageX - documentX, y: pageY - documentY };
    }
    getTranslationCoordinates(positionEvent) {
        const { height, width } = this.getBoundingClientRect();
        // end in the center
        const endPoint = {
            x: (width - this.initialSize) / 2,
            y: (height - this.initialSize) / 2,
        };
        let startPoint;
        if (positionEvent instanceof PointerEvent) {
            startPoint = this.getNormalizedPointerEventCoords(positionEvent);
        }
        else {
            startPoint = {
                x: width / 2,
                y: height / 2,
            };
        }
        // center around start point
        startPoint = {
            x: startPoint.x - this.initialSize / 2,
            y: startPoint.y - this.initialSize / 2,
        };
        return { startPoint, endPoint };
    }
    startPressAnimation(positionEvent) {
        if (!this.mdRoot) {
            return;
        }
        this.pressed = true;
        this.growAnimation?.cancel();
        this.determineRippleSize();
        const { startPoint, endPoint } = this.getTranslationCoordinates(positionEvent);
        const translateStart = `${startPoint.x}px, ${startPoint.y}px`;
        const translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
        this.growAnimation = this.mdRoot.animate({
            top: [0, 0],
            left: [0, 0],
            height: [this.rippleSize, this.rippleSize],
            width: [this.rippleSize, this.rippleSize],
            transform: [
                `translate(${translateStart}) scale(1)`,
                `translate(${translateEnd}) scale(${this.rippleScale})`,
            ],
        }, {
            pseudoElement: PRESS_PSEUDO,
            duration: PRESS_GROW_MS,
            easing: EASING.STANDARD,
            fill: ANIMATION_FILL,
        });
    }
    async endPressAnimation() {
        this.rippleStartEvent = undefined;
        this.state = State.INACTIVE;
        const animation = this.growAnimation;
        let pressAnimationPlayState = Infinity;
        if (typeof animation?.currentTime === 'number') {
            pressAnimationPlayState = animation.currentTime;
        }
        else if (animation?.currentTime) {
            pressAnimationPlayState = animation.currentTime.to('ms').value;
        }
        if (pressAnimationPlayState >= MINIMUM_PRESS_MS) {
            this.pressed = false;
            return;
        }
        await new Promise((resolve) => {
            setTimeout(resolve, MINIMUM_PRESS_MS - pressAnimationPlayState);
        });
        if (this.growAnimation !== animation) {
            // A new press animation was started. The old animation was canceled and
            // should not finish the pressed state.
            return;
        }
        this.pressed = false;
    }
    /**
     * Returns `true` if
     *  - the ripple element is enabled
     *  - the pointer is primary for the input type
     *  - the pointer is the pointer that started the interaction, or will start
     * the interaction
     *  - the pointer is a touch, or the pointer state has the primary button
     * held, or the pointer is hovering
     */
    shouldReactToEvent(event) {
        if (this.disabled || !event.isPrimary) {
            return false;
        }
        if (this.rippleStartEvent &&
            this.rippleStartEvent.pointerId !== event.pointerId) {
            return false;
        }
        if (event.type === 'pointerenter' || event.type === 'pointerleave') {
            return !this.isTouch(event);
        }
        const isPrimaryButton = event.buttons === 1;
        return this.isTouch(event) || isPrimaryButton;
    }
    /**
     * Check if the event is within the bounds of the element.
     *
     * This is only needed for the "stuck" contextmenu longpress on Chrome.
     */
    inBounds({ x, y }) {
        const { top, left, bottom, right } = this.getBoundingClientRect();
        return x >= left && x <= right && y >= top && y <= bottom;
    }
    isTouch({ pointerType }) {
        return pointerType === 'touch';
    }
    /** @private */
    async handleEvent(event) {
        if (FORCED_COLORS?.matches) {
            // Skip event logic since the ripple is `display: none`.
            return;
        }
        switch (event.type) {
            case 'click':
                this.handleClick();
                break;
            case 'contextmenu':
                this.handleContextmenu();
                break;
            case 'pointercancel':
                this.handlePointercancel(event);
                break;
            case 'pointerdown':
                await this.handlePointerdown(event);
                break;
            case 'pointerenter':
                this.handlePointerenter(event);
                break;
            case 'pointerleave':
                this.handlePointerleave(event);
                break;
            case 'pointerup':
                this.handlePointerup(event);
                break;
        }
    }
    onControlChange(prev, next) {
        for (const event of EVENTS) {
            prev?.removeEventListener(event, this);
            next?.addEventListener(event, this);
        }
    }
}
__decorate([
    n$2({ type: Boolean, reflect: true })
], Ripple.prototype, "disabled", void 0);
__decorate([
    r$1()
], Ripple.prototype, "hovered", void 0);
__decorate([
    r$1()
], Ripple.prototype, "pressed", void 0);
__decorate([
    e$2('.surface')
], Ripple.prototype, "mdRoot", void 0);

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./ripple/internal/ripple-styles.css.
const styles$a = i$2 `:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Ripples, also known as state layers, are visual indicators used to
 * communicate the status of a component or interactive element.
 *
 * @description A state layer is a semi-transparent covering on an element that
 * indicates its state. State layers provide a systematic approach to
 * visualizing states by using opacity. A layer can be applied to an entire
 * element or in a circular shape and only one state layer can be applied at a
 * given time.
 *
 * @final
 * @suppress {visibility}
 */
let MdRipple = class MdRipple extends Ripple {
};
MdRipple.styles = [styles$a];
MdRipple = __decorate([
    t$2('md-ripple')
], MdRipple);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Accessibility Object Model reflective aria properties.
 */
const ARIA_PROPERTIES = [
    'role',
    'ariaAtomic',
    'ariaAutoComplete',
    'ariaBusy',
    'ariaChecked',
    'ariaColCount',
    'ariaColIndex',
    'ariaColSpan',
    'ariaCurrent',
    'ariaDisabled',
    'ariaExpanded',
    'ariaHasPopup',
    'ariaHidden',
    'ariaInvalid',
    'ariaKeyShortcuts',
    'ariaLabel',
    'ariaLevel',
    'ariaLive',
    'ariaModal',
    'ariaMultiLine',
    'ariaMultiSelectable',
    'ariaOrientation',
    'ariaPlaceholder',
    'ariaPosInSet',
    'ariaPressed',
    'ariaReadOnly',
    'ariaRequired',
    'ariaRoleDescription',
    'ariaRowCount',
    'ariaRowIndex',
    'ariaRowSpan',
    'ariaSelected',
    'ariaSetSize',
    'ariaSort',
    'ariaValueMax',
    'ariaValueMin',
    'ariaValueNow',
    'ariaValueText',
];
/**
 * Accessibility Object Model aria attributes.
 */
const ARIA_ATTRIBUTES = ARIA_PROPERTIES.map(ariaPropertyToAttribute);
/**
 * Checks if an attribute is one of the AOM aria attributes.
 *
 * @example
 * isAriaAttribute('aria-label'); // true
 *
 * @param attribute The attribute to check.
 * @return True if the attribute is an aria attribute, or false if not.
 */
function isAriaAttribute(attribute) {
    return ARIA_ATTRIBUTES.includes(attribute);
}
/**
 * Converts an AOM aria property into its corresponding attribute.
 *
 * @example
 * ariaPropertyToAttribute('ariaLabel'); // 'aria-label'
 *
 * @param property The aria property.
 * @return The aria attribute.
 */
function ariaPropertyToAttribute(property) {
    return property
        .replace('aria', 'aria-')
        // IDREF attributes also include an "Element" or "Elements" suffix
        .replace(/Elements?/g, '')
        .toLowerCase();
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Private symbols
const privateIgnoreAttributeChangesFor = Symbol('privateIgnoreAttributeChangesFor');
/**
 * Mixes in aria delegation for elements that delegate focus and aria to inner
 * shadow root elements.
 *
 * This mixin fixes invalid aria announcements with shadow roots, caused by
 * duplicate aria attributes on both the host and the inner shadow root element.
 *
 * Note: this mixin **does not yet support** ID reference attributes, such as
 * `aria-labelledby` or `aria-controls`.
 *
 * @example
 * ```ts
 * class MyButton extends mixinDelegatesAria(LitElement) {
 *   static shadowRootOptions = {mode: 'open', delegatesFocus: true};
 *
 *   render() {
 *     return html`
 *       <button aria-label=${this.ariaLabel || nothing}>
 *         <slot></slot>
 *       </button>
 *     `;
 *   }
 * }
 * ```
 * ```html
 * <my-button aria-label="Plus one">+1</my-button>
 * ```
 *
 * Use `ARIAMixinStrict` for lit analyzer strict types, such as the "role"
 * attribute.
 *
 * @example
 * ```ts
 * return html`
 *   <button role=${(this as ARIAMixinStrict).role || nothing}>
 *     <slot></slot>
 *   </button>
 * `;
 * ```
 *
 * In the future, updates to the Accessibility Object Model (AOM) will provide
 * built-in aria delegation features that will replace this mixin.
 *
 * @param base The class to mix functionality into.
 * @return The provided class with aria delegation mixed in.
 */
function mixinDelegatesAria(base) {
    var _a;
    class WithDelegatesAriaElement extends base {
        constructor() {
            super(...arguments);
            this[_a] = new Set();
        }
        attributeChangedCallback(name, oldValue, newValue) {
            if (!isAriaAttribute(name)) {
                super.attributeChangedCallback(name, oldValue, newValue);
                return;
            }
            if (this[privateIgnoreAttributeChangesFor].has(name)) {
                return;
            }
            // Don't trigger another `attributeChangedCallback` once we remove the
            // aria attribute from the host. We check the explicit name of the
            // attribute to ignore since `attributeChangedCallback` can be called
            // multiple times out of an expected order when hydrating an element with
            // multiple attributes.
            this[privateIgnoreAttributeChangesFor].add(name);
            this.removeAttribute(name);
            this[privateIgnoreAttributeChangesFor].delete(name);
            const dataProperty = ariaAttributeToDataProperty(name);
            if (newValue === null) {
                delete this.dataset[dataProperty];
            }
            else {
                this.dataset[dataProperty] = newValue;
            }
            this.requestUpdate(ariaAttributeToDataProperty(name), oldValue);
        }
        getAttribute(name) {
            if (isAriaAttribute(name)) {
                return super.getAttribute(ariaAttributeToDataAttribute(name));
            }
            return super.getAttribute(name);
        }
        removeAttribute(name) {
            super.removeAttribute(name);
            if (isAriaAttribute(name)) {
                super.removeAttribute(ariaAttributeToDataAttribute(name));
                // Since `aria-*` attributes are already removed`, we need to request
                // an update because `attributeChangedCallback` will not be called.
                this.requestUpdate();
            }
        }
    }
    _a = privateIgnoreAttributeChangesFor;
    setupDelegatesAriaProperties(WithDelegatesAriaElement);
    return WithDelegatesAriaElement;
}
/**
 * Overrides the constructor's native `ARIAMixin` properties to ensure that
 * aria properties reflect the values that were shifted to a data attribute.
 *
 * @param ctor The `ReactiveElement` constructor to patch.
 */
function setupDelegatesAriaProperties(ctor) {
    for (const ariaProperty of ARIA_PROPERTIES) {
        // The casing between ariaProperty and the dataProperty may be different.
        // ex: aria-haspopup -> ariaHasPopup
        const ariaAttribute = ariaPropertyToAttribute(ariaProperty);
        // ex: aria-haspopup -> data-aria-haspopup
        const dataAttribute = ariaAttributeToDataAttribute(ariaAttribute);
        // ex: aria-haspopup -> dataset.ariaHaspopup
        const dataProperty = ariaAttributeToDataProperty(ariaAttribute);
        // Call `ReactiveElement.createProperty()` so that the `aria-*` and `data-*`
        // attributes are added to the `static observedAttributes` array. This
        // triggers `attributeChangedCallback` for the delegates aria mixin to
        // handle.
        ctor.createProperty(ariaProperty, {
            attribute: ariaAttribute,
            noAccessor: true,
        });
        ctor.createProperty(Symbol(dataAttribute), {
            attribute: dataAttribute,
            noAccessor: true,
        });
        // Re-define the `ARIAMixin` properties to handle data attribute shifting.
        // It is safe to use `Object.defineProperty` here because the properties
        // are native and not renamed.
        // tslint:disable-next-line:ban-unsafe-reflection
        Object.defineProperty(ctor.prototype, ariaProperty, {
            configurable: true,
            enumerable: true,
            get() {
                return this.dataset[dataProperty] ?? null;
            },
            set(value) {
                const prevValue = this.dataset[dataProperty] ?? null;
                if (value === prevValue) {
                    return;
                }
                if (value === null) {
                    delete this.dataset[dataProperty];
                }
                else {
                    this.dataset[dataProperty] = value;
                }
                this.requestUpdate(ariaProperty, prevValue);
            },
        });
    }
}
function ariaAttributeToDataAttribute(ariaAttribute) {
    // aria-haspopup -> data-aria-haspopup
    return `data-${ariaAttribute}`;
}
function ariaAttributeToDataProperty(ariaAttribute) {
    // aria-haspopup -> dataset.ariaHaspopup
    return ariaAttribute.replace(/-\w/, (dashLetter) => dashLetter[1].toUpperCase());
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A unique symbol used for protected access to an instance's
 * `ElementInternals`.
 *
 * @example
 * ```ts
 * class MyElement extends mixinElementInternals(LitElement) {
 *   constructor() {
 *     super();
 *     this[internals].role = 'button';
 *   }
 * }
 * ```
 */
const internals = Symbol('internals');
// Private symbols
const privateInternals = Symbol('privateInternals');
/**
 * Mixes in an attached `ElementInternals` instance.
 *
 * This mixin is only needed when other shared code needs access to a
 * component's `ElementInternals`, such as form-associated mixins.
 *
 * @param base The class to mix functionality into.
 * @return The provided class with `WithElementInternals` mixed in.
 */
function mixinElementInternals(base) {
    class WithElementInternalsElement extends base {
        get [internals]() {
            // Create internals in getter so that it can be used in methods called on
            // construction in `ReactiveElement`, such as `requestUpdate()`.
            if (!this[privateInternals]) {
                // Cast needed for closure
                this[privateInternals] = this.attachInternals();
            }
            return this[privateInternals];
        }
    }
    return WithElementInternalsElement;
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Sets up an element's constructor to enable form submission. The element
 * instance should be form associated and have a `type` property.
 *
 * A click listener is added to each element instance. If the click is not
 * default prevented, it will submit the element's form, if any.
 *
 * @example
 * ```ts
 * class MyElement extends mixinElementInternals(LitElement) {
 *   static {
 *     setupFormSubmitter(MyElement);
 *   }
 *
 *   static formAssociated = true;
 *
 *   type: FormSubmitterType = 'submit';
 * }
 * ```
 *
 * @param ctor The form submitter element's constructor.
 */
function setupFormSubmitter(ctor) {
    ctor.addInitializer((instance) => {
        const submitter = instance;
        submitter.addEventListener('click', async (event) => {
            const { type, [internals]: elementInternals } = submitter;
            const { form } = elementInternals;
            if (!form || type === 'button') {
                return;
            }
            // Wait a full task for event bubbling to complete.
            await new Promise((resolve) => {
                setTimeout(resolve);
            });
            if (event.defaultPrevented) {
                return;
            }
            if (type === 'reset') {
                form.reset();
                return;
            }
            // form.requestSubmit(submitter) does not work with form associated custom
            // elements. This patches the dispatched submit event to add the correct
            // `submitter`.
            // See https://github.com/WICG/webcomponents/issues/814
            form.addEventListener('submit', (submitEvent) => {
                Object.defineProperty(submitEvent, 'submitter', {
                    configurable: true,
                    enumerable: true,
                    get: () => submitter,
                });
            }, { capture: true, once: true });
            elementInternals.setFormValue(submitter.value);
            form.requestSubmit();
        });
    });
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Dispatches a click event to the given element that triggers a native action,
 * but is not composed and therefore is not seen outside the element.
 *
 * This is useful for responding to an external click event on the host element
 * that should trigger an internal action like a button click.
 *
 * Note, a helper is provided because setting this up correctly is a bit tricky.
 * In particular, calling `click` on an element creates a composed event, which
 * is not desirable, and a manually dispatched event must specifically be a
 * `MouseEvent` to trigger a native action.
 *
 * @example
 * hostClickListener = (event: MouseEvent) {
 *   if (isActivationClick(event)) {
 *     this.dispatchActivationClick(this.buttonElement);
 *   }
 * }
 *
 */
function dispatchActivationClick(element) {
    const event = new MouseEvent('click', { bubbles: true });
    element.dispatchEvent(event);
    return event;
}
/**
 * Returns true if the click event should trigger an activation behavior. The
 * behavior is defined by the element and is whatever it should do when
 * clicked.
 *
 * Typically when an element needs to handle a click, the click is generated
 * from within the element and an event listener within the element implements
 * the needed behavior; however, it's possible to fire a click directly
 * at the element that the element should handle. This method helps
 * distinguish these "external" clicks.
 *
 * An "external" click can be triggered in a number of ways: via a click
 * on an associated label for a form  associated element, calling
 * `element.click()`, or calling
 * `element.dispatchEvent(new MouseEvent('click', ...))`.
 *
 * Also works around Firefox issue
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1804576 by squelching
 * events for a microtask after called.
 *
 * @example
 * hostClickListener = (event: MouseEvent) {
 *   if (isActivationClick(event)) {
 *     this.dispatchActivationClick(this.buttonElement);
 *   }
 * }
 *
 */
function isActivationClick(event) {
    // Event must start at the event target.
    if (event.currentTarget !== event.target) {
        return false;
    }
    // Event must not be retargeted from shadowRoot.
    if (event.composedPath()[0] !== event.target) {
        return false;
    }
    // Target must not be disabled; this should only occur for a synthetically
    // dispatched click.
    if (event.target.disabled) {
        return false;
    }
    // This is an activation if the event should not be squelched.
    return !squelchEvent(event);
}
// TODO(https://bugzilla.mozilla.org/show_bug.cgi?id=1804576)
//  Remove when Firefox bug is addressed.
function squelchEvent(event) {
    const squelched = isSquelchingEvents;
    if (squelched) {
        event.preventDefault();
        event.stopImmediatePropagation();
    }
    squelchEventsForMicrotask();
    return squelched;
}
// Ignore events for one microtask only.
let isSquelchingEvents = false;
async function squelchEventsForMicrotask() {
    isSquelchingEvents = true;
    // Need to pause for just one microtask.
    // tslint:disable-next-line
    await null;
    isSquelchingEvents = false;
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Separate variable needed for closure.
const buttonBaseClass = mixinDelegatesAria(mixinElementInternals(h));
/**
 * A button component.
 */
class Button extends buttonBaseClass {
    get name() {
        return this.getAttribute('name') ?? '';
    }
    set name(name) {
        this.setAttribute('name', name);
    }
    /**
     * The associated form element with which this element's value will submit.
     */
    get form() {
        return this[internals].form;
    }
    constructor() {
        super();
        /**
         * Whether or not the button is disabled.
         */
        this.disabled = false;
        /**
         * Whether or not the button is "soft-disabled" (disabled but still
         * focusable).
         *
         * Use this when a button needs increased visibility when disabled. See
         * https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls
         * for more guidance on when this is needed.
         */
        this.softDisabled = false;
        /**
         * The URL that the link button points to.
         */
        this.href = '';
        /**
         * Where to display the linked `href` URL for a link button. Common options
         * include `_blank` to open in a new tab.
         */
        this.target = '';
        /**
         * Whether to render the icon at the inline end of the label rather than the
         * inline start.
         *
         * _Note:_ Link buttons cannot have trailing icons.
         */
        this.trailingIcon = false;
        /**
         * Whether to display the icon or not.
         */
        this.hasIcon = false;
        /**
         * The default behavior of the button. May be "button", "reset", or "submit"
         * (default).
         */
        this.type = 'submit';
        /**
         * The value added to a form with the button's name when the button submits a
         * form.
         */
        this.value = '';
        {
            this.addEventListener('click', this.handleClick.bind(this));
        }
    }
    focus() {
        this.buttonElement?.focus();
    }
    blur() {
        this.buttonElement?.blur();
    }
    render() {
        // Link buttons may not be disabled
        const isRippleDisabled = !this.href && (this.disabled || this.softDisabled);
        const buttonOrLink = this.href ? this.renderLink() : this.renderButton();
        // TODO(b/310046938): due to a limitation in focus ring/ripple, we can't use
        // the same ID for different elements, so we change the ID instead.
        const buttonId = this.href ? 'link' : 'button';
        return ke$1 `
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${buttonId}></md-focus-ring>
      <md-ripple
        part="ripple"
        for=${buttonId}
        ?disabled="${isRippleDisabled}"></md-ripple>
      ${buttonOrLink}
    `;
    }
    renderButton() {
        // Needed for closure conformance
        const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
        return ke$1 `<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-disabled=${this.softDisabled || D}
      aria-label="${ariaLabel || D}"
      aria-haspopup="${ariaHasPopup || D}"
      aria-expanded="${ariaExpanded || D}">
      ${this.renderContent()}
    </button>`;
    }
    renderLink() {
        // Needed for closure conformance
        const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
        return ke$1 `<a
      id="link"
      class="button"
      aria-label="${ariaLabel || D}"
      aria-haspopup="${ariaHasPopup || D}"
      aria-expanded="${ariaExpanded || D}"
      href=${this.href}
      target=${this.target || D}
      >${this.renderContent()}
    </a>`;
    }
    renderContent() {
        const icon = ke$1 `<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;
        return ke$1 `
      <span class="touch"></span>
      ${this.trailingIcon ? D : icon}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon ? icon : D}
    `;
    }
    handleClick(event) {
        // If the button is soft-disabled, we need to explicitly prevent the click
        // from propagating to other event listeners as well as prevent the default
        // action.
        if (!this.href && this.softDisabled) {
            event.stopImmediatePropagation();
            event.preventDefault();
            return;
        }
        if (!isActivationClick(event) || !this.buttonElement) {
            return;
        }
        this.focus();
        dispatchActivationClick(this.buttonElement);
    }
    handleSlotChange() {
        this.hasIcon = this.assignedIcons.length > 0;
    }
}
(() => {
    setupFormSubmitter(Button);
})();
/** @nocollapse */
Button.formAssociated = true;
/** @nocollapse */
Button.shadowRootOptions = {
    mode: 'open',
    delegatesFocus: true,
};
__decorate([
    n$2({ type: Boolean, reflect: true })
], Button.prototype, "disabled", void 0);
__decorate([
    n$2({ type: Boolean, attribute: 'soft-disabled', reflect: true })
], Button.prototype, "softDisabled", void 0);
__decorate([
    n$2()
], Button.prototype, "href", void 0);
__decorate([
    n$2()
], Button.prototype, "target", void 0);
__decorate([
    n$2({ type: Boolean, attribute: 'trailing-icon', reflect: true })
], Button.prototype, "trailingIcon", void 0);
__decorate([
    n$2({ type: Boolean, attribute: 'has-icon', reflect: true })
], Button.prototype, "hasIcon", void 0);
__decorate([
    n$2()
], Button.prototype, "type", void 0);
__decorate([
    n$2({ reflect: true })
], Button.prototype, "value", void 0);
__decorate([
    e$2('.button')
], Button.prototype, "buttonElement", void 0);
__decorate([
    o({ slot: 'icon', flatten: true })
], Button.prototype, "assignedIcons", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An outlined button component.
 */
class OutlinedButton extends Button {
    renderElevationOrOutline() {
        return ke$1 `<div class="outline"></div>`;
    }
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./button/internal/outlined-styles.css.
const styles$9 = i$2 `:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-outlined-button-container-shape-start-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-outlined-button-container-shape-start-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-outlined-button-container-shape-end-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-outlined-button-container-shape-end-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}.outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}:host(:active) .outline{border-color:var(--_pressed-outline-color)}:host(:is([disabled],[soft-disabled])) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])) .background{border-color:GrayText}:host(:is([disabled],[soft-disabled])) .outline{opacity:1}}.outline,md-ripple{border-width:var(--_outline-width)}md-ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}
`;

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./button/internal/shared-styles.css.
const styles$8 = i$2 `:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host(:is([disabled],[soft-disabled])) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host(:is([disabled],[soft-disabled])) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host(:is([disabled],[soft-disabled])) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ Medium emphasis – For important actions that don’t distract
 * from other onscreen elements.
 *
 * __Rationale:__ Use an outlined button for actions that need attention but
 * aren’t the primary action, such as “See all” or “Add to cart.” This is also
 * the button to use for giving someone the opportunity to change their mind or
 * escape a flow.
 *
 * __Example usages:__
 * - Reply
 * - View all
 * - Add to cart
 * - Take out of trash
 *
 * @final
 * @suppress {visibility}
 */
let MdOutlinedButton = class MdOutlinedButton extends OutlinedButton {
};
MdOutlinedButton.styles = [styles$8, styles$9];
MdOutlinedButton = __decorate([
    t$2('md-outlined-button')
], MdOutlinedButton);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A component for elevation.
 */
class Elevation extends h {
    connectedCallback() {
        super.connectedCallback();
        // Needed for VoiceOver, which will create a "group" if the element is a
        // sibling to other content.
        this.setAttribute('aria-hidden', 'true');
    }
    render() {
        return ke$1 `<span class="shadow"></span>`;
    }
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./elevation/internal/elevation-styles.css.
const styles$7 = i$2 `:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * The `<md-elevation>` custom element with default styles.
 *
 * Elevation is the relative distance between two surfaces along the z-axis.
 *
 * @final
 * @suppress {visibility}
 */
let MdElevation = class MdElevation extends Elevation {
};
MdElevation.styles = [styles$7];
MdElevation = __decorate([
    t$2('md-elevation')
], MdElevation);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A filled button component.
 */
class FilledButton extends Button {
    renderElevationOrOutline() {
        return ke$1 `<md-elevation part="elevation"></md-elevation>`;
    }
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./button/internal/filled-styles.css.
const styles$6 = i$2 `:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_container-shape-start-start: var(--md-filled-button-container-shape-start-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-button-container-shape-start-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-button-container-shape-end-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-button-container-shape-end-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px)}
`;

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./button/internal/shared-elevation-styles.css.
const styles$5 = i$2 `md-elevation{transition-duration:280ms}:host(:is([disabled],[soft-disabled])) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host(:is([disabled],[soft-disabled])) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ High emphasis – For the primary, most important, or most common
 * action on a screen
 *
 * __Rationale:__ The filled button’s contrasting surface color makes it the
 * most prominent button after the FAB. It’s used for final or unblocking
 * actions in a flow.
 *
 * __Example usages:__
 * - Save
 * - Confirm
 * - Done
 *
 * @final
 * @suppress {visibility}
 */
let MdFilledButton = class MdFilledButton extends FilledButton {
};
MdFilledButton.styles = [
    styles$8,
    styles$5,
    styles$6,
];
MdFilledButton = __decorate([
    t$2('md-filled-button')
], MdFilledButton);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A text button component.
 */
class TextButton extends Button {
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./button/internal/text-styles.css.
const styles$4 = i$2 `:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence
 *
 * __Rationale:__ Text buttons have less visual prominence, so should be used
 * for low emphasis actions, such as an alternative option.
 *
 * __Example usages:__
 * - Learn more
 * - View all
 * - Change account
 * - Turn on
 *
 * @final
 * @suppress {visibility}
 */
let MdTextButton = class MdTextButton extends TextButton {
};
MdTextButton.styles = [styles$8, styles$4];
MdTextButton = __decorate([
    t$2('md-text-button')
], MdTextButton);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A filled tonal button component.
 */
class FilledTonalButton extends Button {
    renderElevationOrOutline() {
        return ke$1 `<md-elevation part="elevation"></md-elevation>`;
    }
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./button/internal/filled-tonal-styles.css.
const styles$3 = i$2 `:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_container-shape-start-start: var(--md-filled-tonal-button-container-shape-start-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-tonal-button-container-shape-start-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-tonal-button-container-shape-end-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-tonal-button-container-shape-end-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px)}
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ Medium emphasis – For important actions that don’t distract
 * from other onscreen elements.
 *
 * __Rationale:__ Filled tonal buttons have a lighter background color and
 * darker label color, making them less visually prominent than a regular,
 * filled button. They’re still used for final or unblocking actions in a flow,
 * but do so with less emphasis.
 *
 * __Example usages:__
 * - Save
 * - Confirm
 * - Done
 *
 * @final
 * @suppress {visibility}
 */
let MdFilledTonalButton = class MdFilledTonalButton extends FilledTonalButton {
};
MdFilledTonalButton.styles = [
    styles$8,
    styles$5,
    styles$3,
];
MdFilledTonalButton = __decorate([
    t$2('md-filled-tonal-button')
], MdFilledTonalButton);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee="important",ie=" !"+ee,se=e(class extends i{constructor(e){if(super(e),e.type!==t.ATTRIBUTE||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:r}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?r.removeProperty(t):r[t]=null);for(const t in e){const s=e[t];if(null!=s){this.ft.add(t);const e="string"==typeof s&&s.endsWith(ie);t.includes("-")||e?r.setProperty(t,e?s.slice(0,-11):s,e?ee:""):r[t]=s;}}return R}});

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Activates the first non-disabled item of a given array of items.
 *
 * @param items {Array<ListItem>} The items from which to activate the
 *     first item.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 */
function activateFirstItem(items, isActivatable = (isItemNotDisabled)) {
    // NOTE: These selector functions are static and not on the instance such
    // that multiple operations can be chained and we do not have to re-query
    // the DOM
    const firstItem = getFirstActivatableItem(items, isActivatable);
    if (firstItem) {
        firstItem.tabIndex = 0;
        firstItem.focus();
    }
    return firstItem;
}
/**
 * Activates the last non-disabled item of a given array of items.
 *
 * @param items {Array<ListItem>} The items from which to activate the
 *     last item.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @nocollapse
 */
function activateLastItem(items, isActivatable = (isItemNotDisabled)) {
    const lastItem = getLastActivatableItem(items, isActivatable);
    if (lastItem) {
        lastItem.tabIndex = 0;
        lastItem.focus();
    }
    return lastItem;
}
/**
 * Retrieves the first activated item of a given array of items.
 *
 * @param items {Array<ListItem>} The items to search.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @return A record of the first activated item including the item and the
 *     index of the item or `null` if none are activated.
 * @nocollapse
 */
function getActiveItem(items, isActivatable = (isItemNotDisabled)) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.tabIndex === 0 && isActivatable(item)) {
            return {
                item,
                index: i,
            };
        }
    }
    return null;
}
/**
 * Retrieves the first non-disabled item of a given array of items. This
 * the first item that is not disabled.
 *
 * @param items {Array<ListItem>} The items to search.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @return The first activatable item or `null` if none are activatable.
 * @nocollapse
 */
function getFirstActivatableItem(items, isActivatable = (isItemNotDisabled)) {
    for (const item of items) {
        if (isActivatable(item)) {
            return item;
        }
    }
    return null;
}
/**
 * Retrieves the last non-disabled item of a given array of items.
 *
 * @param items {Array<ListItem>} The items to search.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @return The last activatable item or `null` if none are activatable.
 * @nocollapse
 */
function getLastActivatableItem(items, isActivatable = (isItemNotDisabled)) {
    for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        if (isActivatable(item)) {
            return item;
        }
    }
    return null;
}
/**
 * Retrieves the next non-disabled item of a given array of items.
 *
 * @param items {Array<ListItem>} The items to search.
 * @param index {{index: number}} The index to search from.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @param wrap If true, then the next item at the end of the list is the first
 *     item. Defaults to true.
 * @return The next activatable item or `null` if none are activatable.
 */
function getNextItem(items, index, isActivatable = (isItemNotDisabled), wrap = true) {
    for (let i = 1; i < items.length; i++) {
        const nextIndex = (i + index) % items.length;
        if (nextIndex < index && !wrap) {
            // Return if the index loops back to the beginning and not wrapping.
            return null;
        }
        const item = items[nextIndex];
        if (isActivatable(item)) {
            return item;
        }
    }
    return items[index] ? items[index] : null;
}
/**
 * Retrieves the previous non-disabled item of a given array of items.
 *
 * @param items {Array<ListItem>} The items to search.
 * @param index {{index: number}} The index to search from.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @param wrap If true, then the previous item at the beginning of the list is
 *     the last item. Defaults to true.
 * @return The previous activatable item or `null` if none are activatable.
 */
function getPrevItem(items, index, isActivatable = (isItemNotDisabled), wrap = true) {
    for (let i = 1; i < items.length; i++) {
        const prevIndex = (index - i + items.length) % items.length;
        if (prevIndex > index && !wrap) {
            // Return if the index loops back to the end and not wrapping.
            return null;
        }
        const item = items[prevIndex];
        if (isActivatable(item)) {
            return item;
        }
    }
    return items[index] ? items[index] : null;
}
/**
 * Activates the next item and focuses it. If nothing is currently activated,
 * activates the first item.
 */
function activateNextItem(items, activeItemRecord, isActivatable = (isItemNotDisabled), wrap = true) {
    if (activeItemRecord) {
        const next = getNextItem(items, activeItemRecord.index, isActivatable, wrap);
        if (next) {
            next.tabIndex = 0;
            next.focus();
        }
        return next;
    }
    else {
        return activateFirstItem(items, isActivatable);
    }
}
/**
 * Activates the previous item and focuses it. If nothing is currently
 * activated, activates the last item.
 */
function activatePreviousItem(items, activeItemRecord, isActivatable = (isItemNotDisabled), wrap = true) {
    if (activeItemRecord) {
        const prev = getPrevItem(items, activeItemRecord.index, isActivatable, wrap);
        if (prev) {
            prev.tabIndex = 0;
            prev.focus();
        }
        return prev;
    }
    else {
        return activateLastItem(items, isActivatable);
    }
}
/**
 * The default `isActivatable` function, which checks if an item is not
 * disabled.
 *
 * @param item The item to check.
 * @return true if `item.disabled` is `false.
 */
function isItemNotDisabled(item) {
    return !item.disabled;
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// TODO: move this file to List and make List use this
/**
 * Default keys that trigger navigation.
 */
// tslint:disable:enforce-name-casing Following Enum style
const NavigableKeys = {
    ArrowDown: 'ArrowDown',
    ArrowLeft: 'ArrowLeft',
    ArrowUp: 'ArrowUp',
    ArrowRight: 'ArrowRight',
    Home: 'Home',
    End: 'End',
};
/**
 * A controller that handles list keyboard navigation and item management.
 */
class ListController {
    constructor(config) {
        /**
         * Handles keyboard navigation. Should be bound to the node that will act as
         * the List.
         */
        this.handleKeydown = (event) => {
            const key = event.key;
            if (event.defaultPrevented || !this.isNavigableKey(key)) {
                return;
            }
            // do not use this.items directly in upcoming calculations so we don't
            // re-query the DOM unnecessarily
            const items = this.items;
            if (!items.length) {
                return;
            }
            const activeItemRecord = getActiveItem(items, this.isActivatable);
            event.preventDefault();
            const isRtl = this.isRtl();
            const inlinePrevious = isRtl
                ? NavigableKeys.ArrowRight
                : NavigableKeys.ArrowLeft;
            const inlineNext = isRtl
                ? NavigableKeys.ArrowLeft
                : NavigableKeys.ArrowRight;
            let nextActiveItem = null;
            switch (key) {
                // Activate the next item
                case NavigableKeys.ArrowDown:
                case inlineNext:
                    nextActiveItem = activateNextItem(items, activeItemRecord, this.isActivatable, this.wrapNavigation());
                    break;
                // Activate the previous item
                case NavigableKeys.ArrowUp:
                case inlinePrevious:
                    nextActiveItem = activatePreviousItem(items, activeItemRecord, this.isActivatable, this.wrapNavigation());
                    break;
                // Activate the first item
                case NavigableKeys.Home:
                    nextActiveItem = activateFirstItem(items, this.isActivatable);
                    break;
                // Activate the last item
                case NavigableKeys.End:
                    nextActiveItem = activateLastItem(items, this.isActivatable);
                    break;
            }
            if (nextActiveItem &&
                activeItemRecord &&
                activeItemRecord.item !== nextActiveItem) {
                // If a new item was activated, remove the tabindex of the previous
                // activated item.
                activeItemRecord.item.tabIndex = -1;
            }
        };
        /**
         * Listener to be bound to the `deactivate-items` item event.
         */
        this.onDeactivateItems = () => {
            const items = this.items;
            for (const item of items) {
                this.deactivateItem(item);
            }
        };
        /**
         * Listener to be bound to the `request-activation` item event..
         */
        this.onRequestActivation = (event) => {
            this.onDeactivateItems();
            const target = event.target;
            this.activateItem(target);
            target.focus();
        };
        /**
         * Listener to be bound to the `slotchange` event for the slot that renders
         * the items.
         */
        this.onSlotchange = () => {
            const items = this.items;
            // Whether we have encountered an item that has been activated
            let encounteredActivated = false;
            for (const item of items) {
                const isActivated = !item.disabled && item.tabIndex > -1;
                if (isActivated && !encounteredActivated) {
                    encounteredActivated = true;
                    item.tabIndex = 0;
                    continue;
                }
                // Deactivate the rest including disabled
                item.tabIndex = -1;
            }
            if (encounteredActivated) {
                return;
            }
            const firstActivatableItem = getFirstActivatableItem(items, this.isActivatable);
            if (!firstActivatableItem) {
                return;
            }
            firstActivatableItem.tabIndex = 0;
        };
        const { isItem, getPossibleItems, isRtl, deactivateItem, activateItem, isNavigableKey, isActivatable, wrapNavigation, } = config;
        this.isItem = isItem;
        this.getPossibleItems = getPossibleItems;
        this.isRtl = isRtl;
        this.deactivateItem = deactivateItem;
        this.activateItem = activateItem;
        this.isNavigableKey = isNavigableKey;
        this.isActivatable = isActivatable;
        this.wrapNavigation = wrapNavigation ?? (() => true);
    }
    /**
     * The items being managed by the list. Additionally, attempts to see if the
     * object has a sub-item in the `.item` property.
     */
    get items() {
        const maybeItems = this.getPossibleItems();
        const items = [];
        for (const itemOrParent of maybeItems) {
            const isItem = this.isItem(itemOrParent);
            // if the item is a list item, add it to the list of items
            if (isItem) {
                items.push(itemOrParent);
                continue;
            }
            // If the item exposes an `item` property check if it is a list item.
            const subItem = itemOrParent.item;
            if (subItem && this.isItem(subItem)) {
                items.push(subItem);
            }
        }
        return items;
    }
    /**
     * Activates the next item in the list. If at the end of the list, the first
     * item will be activated.
     *
     * @return The activated list item or `null` if there are no items.
     */
    activateNextItem() {
        const items = this.items;
        const activeItemRecord = getActiveItem(items, this.isActivatable);
        if (activeItemRecord) {
            activeItemRecord.item.tabIndex = -1;
        }
        return activateNextItem(items, activeItemRecord, this.isActivatable, this.wrapNavigation());
    }
    /**
     * Activates the previous item in the list. If at the start of the list, the
     * last item will be activated.
     *
     * @return The activated list item or `null` if there are no items.
     */
    activatePreviousItem() {
        const items = this.items;
        const activeItemRecord = getActiveItem(items, this.isActivatable);
        if (activeItemRecord) {
            activeItemRecord.item.tabIndex = -1;
        }
        return activatePreviousItem(items, activeItemRecord, this.isActivatable, this.wrapNavigation());
    }
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Creates an event that closes any parent menus.
 */
function createCloseMenuEvent(initiator, reason) {
    return new CustomEvent('close-menu', {
        bubbles: true,
        composed: true,
        detail: { initiator, reason, itemPath: [initiator] },
    });
}
/**
 * Creates a default close menu event used by md-menu.
 */
const createDefaultCloseMenuEvent = (createCloseMenuEvent);
/**
 * Keys that are used for selection in menus.
 */
// tslint:disable-next-line:enforce-name-casing We are mimicking enum style
const SelectionKey = {
    SPACE: 'Space',
    ENTER: 'Enter',
};
/**
 * Default close `Reason` kind values.
 */
// tslint:disable-next-line:enforce-name-casing We are mimicking enum style
const CloseReason = {
    CLICK_SELECTION: 'click-selection',
    KEYDOWN: 'keydown',
};
/**
 * Keys that can close menus.
 */
// tslint:disable-next-line:enforce-name-casing We are mimicking enum style
const KeydownCloseKey = {
    ESCAPE: 'Escape',
    SPACE: SelectionKey.SPACE,
    ENTER: SelectionKey.ENTER,
};
/**
 * Determines whether the given key code is a key code that should close the
 * menu.
 *
 * @param code The KeyboardEvent code to check.
 * @return Whether or not the key code is in the predetermined list to close the
 * menu.
 */
function isClosableKey(code) {
    return Object.values(KeydownCloseKey).some((value) => value === code);
}
/**
 * Determines whether a target element is contained inside another element's
 * composed tree.
 *
 * @param target The potential contained element.
 * @param container The potential containing element of the target.
 * @returns Whether the target element is contained inside the container's
 * composed subtree
 */
function isElementInSubtree(target, container) {
    // Dispatch a composed, bubbling event to check its path to see if the
    // newly-focused element is contained in container's subtree
    const focusEv = new Event('md-contains', { bubbles: true, composed: true });
    let composedPath = [];
    const listener = (ev) => {
        composedPath = ev.composedPath();
    };
    container.addEventListener('md-contains', listener);
    target.dispatchEvent(focusEv);
    container.removeEventListener('md-contains', listener);
    const isContained = composedPath.length > 0;
    return isContained;
}
/**
 * Element to focus on when menu is first opened.
 */
// tslint:disable-next-line:enforce-name-casing We are mimicking enum style
const FocusState = {
    NONE: 'none',
    LIST_ROOT: 'list-root',
    FIRST_ITEM: 'first-item',
    LAST_ITEM: 'last-item',
};

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An enum of supported Menu corners
 */
// tslint:disable-next-line:enforce-name-casing We are mimicking enum style
const Corner = {
    END_START: 'end-start',
    END_END: 'end-end',
    START_START: 'start-start',
    START_END: 'start-end',
};
/**
 * Given a surface, an anchor, corners, and some options, this surface will
 * calculate the position of a surface to align the two given corners and keep
 * the surface inside the window viewport. It also provides a StyleInfo map that
 * can be applied to the surface to handle visiblility and position.
 */
class SurfacePositionController {
    /**
     * @param host The host to connect the controller to.
     * @param getProperties A function that returns the properties for the
     * controller.
     */
    constructor(host, getProperties) {
        this.host = host;
        this.getProperties = getProperties;
        // The current styles to apply to the surface.
        this.surfaceStylesInternal = {
            'display': 'none',
        };
        // Previous values stored for change detection. Open change detection is
        // calculated separately so initialize it here.
        this.lastValues = {
            isOpen: false,
        };
        this.host.addController(this);
    }
    /**
     * The StyleInfo map to apply to the surface via Lit's stylemap
     */
    get surfaceStyles() {
        return this.surfaceStylesInternal;
    }
    /**
     * Calculates the surface's new position required so that the surface's
     * `surfaceCorner` aligns to the anchor's `anchorCorner` while keeping the
     * surface inside the window viewport. This positioning also respects RTL by
     * checking `getComputedStyle()` on the surface element.
     */
    async position() {
        const { surfaceEl, anchorEl, anchorCorner: anchorCornerRaw, surfaceCorner: surfaceCornerRaw, positioning, xOffset, yOffset, disableBlockFlip, disableInlineFlip, repositionStrategy, } = this.getProperties();
        const anchorCorner = anchorCornerRaw.toLowerCase().trim();
        const surfaceCorner = surfaceCornerRaw.toLowerCase().trim();
        if (!surfaceEl || !anchorEl) {
            return;
        }
        // Store these before we potentially resize the window with the next set of
        // lines
        const windowInnerWidth = window.innerWidth;
        const windowInnerHeight = window.innerHeight;
        const div = document.createElement('div');
        div.style.opacity = '0';
        div.style.position = 'fixed';
        div.style.display = 'block';
        div.style.inset = '0';
        document.body.appendChild(div);
        const scrollbarTestRect = div.getBoundingClientRect();
        div.remove();
        // Calculate the widths of the scrollbars in the inline and block directions
        // to account for window-relative calculations.
        const blockScrollbarHeight = window.innerHeight - scrollbarTestRect.bottom;
        const inlineScrollbarWidth = window.innerWidth - scrollbarTestRect.right;
        // Paint the surface transparently so that we can get the position and the
        // rect info of the surface.
        this.surfaceStylesInternal = {
            'display': 'block',
            'opacity': '0',
        };
        // Wait for it to be visible.
        this.host.requestUpdate();
        await this.host.updateComplete;
        // Safari has a bug that makes popovers render incorrectly if the node is
        // made visible + Animation Frame before calling showPopover().
        // https://bugs.webkit.org/show_bug.cgi?id=264069
        // also the cast is required due to differing TS types in Google and OSS.
        if (surfaceEl.popover &&
            surfaceEl.isConnected) {
            surfaceEl.showPopover();
        }
        const surfaceRect = surfaceEl.getSurfacePositionClientRect
            ? surfaceEl.getSurfacePositionClientRect()
            : surfaceEl.getBoundingClientRect();
        const anchorRect = anchorEl.getSurfacePositionClientRect
            ? anchorEl.getSurfacePositionClientRect()
            : anchorEl.getBoundingClientRect();
        const [surfaceBlock, surfaceInline] = surfaceCorner.split('-');
        const [anchorBlock, anchorInline] = anchorCorner.split('-');
        // LTR depends on the direction of the SURFACE not the anchor.
        const isLTR = getComputedStyle(surfaceEl).direction === 'ltr';
        /*
         * For more on inline and block dimensions, see MDN article:
         * https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values
         *
         * ┌───── inline/blockDocumentOffset  inlineScrollbarWidth
         * │       │                                    │
         * │     ┌─▼─────┐                              │Document
         * │    ┌┼───────┴──────────────────────────────┼────────┐
         * │    ││                                      │        │
         * └──► ││ ┌───── inline/blockWindowOffset      │        │
         *      ││ │       │                            ▼        │
         *      ││ │     ┌─▼───┐                 Window┌┐        │
         *      └┤ │    ┌┼─────┴───────────────────────┼│        │
         *       │ │    ││                             ││        │
         *       │ └──► ││  ┌──inline/blockAnchorOffset││        │
         *       │      ││  │     │                    ││        │
         *       │      └┤  │  ┌──▼───┐                ││        │
         *       │       │  │ ┌┼──────┤                ││        │
         *       │       │  └─►│Anchor│                ││        │
         *       │       │    └┴──────┘                ││        │
         *       │       │                             ││        │
         *       │       │     ┌───────────────────────┼┼────┐   │
         *       │       │     │ Surface               ││    │   │
         *       │       │     │                       ││    │   │
         *       │       │     │                       ││    │   │
         *       │       │     │                       ││    │   │
         *       │       │     │                       ││    │   │
         *       │      ┌┼─────┼───────────────────────┼│    │   │
         *       │   ┌─►┴──────┼────────────────────────┘    ├┐  │
         *       │   │         │ inline/blockOOBCorrection   ││  │
         *       │   │         │                         │   ││  │
         *       │   │         │                         ├──►├│  │
         *       │   │         │                         │   ││  │
         *       │   │         └────────────────────────┐▼───┼┘  │
         *       │  blockScrollbarHeight                └────┘   │
         *       │                                               │
         *       └───────────────────────────────────────────────┘
         */
        // Calculate the block positioning properties
        let { blockInset, blockOutOfBoundsCorrection, surfaceBlockProperty } = this.calculateBlock({
            surfaceRect,
            anchorRect,
            anchorBlock,
            surfaceBlock,
            yOffset,
            positioning,
            windowInnerHeight,
            blockScrollbarHeight,
        });
        // If the surface should be out of bounds in the block direction, flip the
        // surface and anchor corner block values and recalculate
        if (blockOutOfBoundsCorrection && !disableBlockFlip) {
            const flippedSurfaceBlock = surfaceBlock === 'start' ? 'end' : 'start';
            const flippedAnchorBlock = anchorBlock === 'start' ? 'end' : 'start';
            const flippedBlock = this.calculateBlock({
                surfaceRect,
                anchorRect,
                anchorBlock: flippedAnchorBlock,
                surfaceBlock: flippedSurfaceBlock,
                yOffset,
                positioning,
                windowInnerHeight,
                blockScrollbarHeight,
            });
            // In the case that the flipped verion would require less out of bounds
            // correcting, use the flipped corner block values
            if (blockOutOfBoundsCorrection > flippedBlock.blockOutOfBoundsCorrection) {
                blockInset = flippedBlock.blockInset;
                blockOutOfBoundsCorrection = flippedBlock.blockOutOfBoundsCorrection;
                surfaceBlockProperty = flippedBlock.surfaceBlockProperty;
            }
        }
        // Calculate the inline positioning properties
        let { inlineInset, inlineOutOfBoundsCorrection, surfaceInlineProperty } = this.calculateInline({
            surfaceRect,
            anchorRect,
            anchorInline,
            surfaceInline,
            xOffset,
            positioning,
            isLTR,
            windowInnerWidth,
            inlineScrollbarWidth,
        });
        // If the surface should be out of bounds in the inline direction, flip the
        // surface and anchor corner inline values and recalculate
        if (inlineOutOfBoundsCorrection && !disableInlineFlip) {
            const flippedSurfaceInline = surfaceInline === 'start' ? 'end' : 'start';
            const flippedAnchorInline = anchorInline === 'start' ? 'end' : 'start';
            const flippedInline = this.calculateInline({
                surfaceRect,
                anchorRect,
                anchorInline: flippedAnchorInline,
                surfaceInline: flippedSurfaceInline,
                xOffset,
                positioning,
                isLTR,
                windowInnerWidth,
                inlineScrollbarWidth,
            });
            // In the case that the flipped verion would require less out of bounds
            // correcting, use the flipped corner inline values
            if (Math.abs(inlineOutOfBoundsCorrection) >
                Math.abs(flippedInline.inlineOutOfBoundsCorrection)) {
                inlineInset = flippedInline.inlineInset;
                inlineOutOfBoundsCorrection = flippedInline.inlineOutOfBoundsCorrection;
                surfaceInlineProperty = flippedInline.surfaceInlineProperty;
            }
        }
        // If we are simply repositioning the surface back inside the viewport,
        // subtract the out of bounds correction values from the positioning.
        if (repositionStrategy === 'move') {
            blockInset = blockInset - blockOutOfBoundsCorrection;
            inlineInset = inlineInset - inlineOutOfBoundsCorrection;
        }
        this.surfaceStylesInternal = {
            'display': 'block',
            'opacity': '1',
            [surfaceBlockProperty]: `${blockInset}px`,
            [surfaceInlineProperty]: `${inlineInset}px`,
        };
        // In the case that we are resizing the surface to stay inside the viewport
        // we need to set height and width on the surface.
        if (repositionStrategy === 'resize') {
            // Add a height property to the styles if there is block height correction
            if (blockOutOfBoundsCorrection) {
                this.surfaceStylesInternal['height'] = `${surfaceRect.height - blockOutOfBoundsCorrection}px`;
            }
            // Add a width property to the styles if there is block height correction
            if (inlineOutOfBoundsCorrection) {
                this.surfaceStylesInternal['width'] = `${surfaceRect.width - inlineOutOfBoundsCorrection}px`;
            }
        }
        this.host.requestUpdate();
    }
    /**
     * Calculates the css property, the inset, and the out of bounds correction
     * for the surface in the block direction.
     */
    calculateBlock(config) {
        const { surfaceRect, anchorRect, anchorBlock, surfaceBlock, yOffset, positioning, windowInnerHeight, blockScrollbarHeight, } = config;
        // We use number booleans to multiply values rather than `if` / ternary
        // statements because it _heavily_ cuts down on nesting and readability
        const relativeToWindow = positioning === 'fixed' || positioning === 'document' ? 1 : 0;
        const relativeToDocument = positioning === 'document' ? 1 : 0;
        const isSurfaceBlockStart = surfaceBlock === 'start' ? 1 : 0;
        const isSurfaceBlockEnd = surfaceBlock === 'end' ? 1 : 0;
        const isOneBlockEnd = anchorBlock !== surfaceBlock ? 1 : 0;
        // Whether or not to apply the height of the anchor
        const blockAnchorOffset = isOneBlockEnd * anchorRect.height + yOffset;
        // The absolute block position of the anchor relative to window
        const blockTopLayerOffset = isSurfaceBlockStart * anchorRect.top +
            isSurfaceBlockEnd *
                (windowInnerHeight - anchorRect.bottom - blockScrollbarHeight);
        const blockDocumentOffset = isSurfaceBlockStart * window.scrollY - isSurfaceBlockEnd * window.scrollY;
        // If the surface's block would be out of bounds of the window, move it back
        // in
        const blockOutOfBoundsCorrection = Math.abs(Math.min(0, windowInnerHeight -
            blockTopLayerOffset -
            blockAnchorOffset -
            surfaceRect.height));
        // The block logical value of the surface
        const blockInset = relativeToWindow * blockTopLayerOffset +
            relativeToDocument * blockDocumentOffset +
            blockAnchorOffset;
        const surfaceBlockProperty = surfaceBlock === 'start' ? 'inset-block-start' : 'inset-block-end';
        return { blockInset, blockOutOfBoundsCorrection, surfaceBlockProperty };
    }
    /**
     * Calculates the css property, the inset, and the out of bounds correction
     * for the surface in the inline direction.
     */
    calculateInline(config) {
        const { isLTR: isLTRBool, surfaceInline, anchorInline, anchorRect, surfaceRect, xOffset, positioning, windowInnerWidth, inlineScrollbarWidth, } = config;
        // We use number booleans to multiply values rather than `if` / ternary
        // statements because it _heavily_ cuts down on nesting and readability
        const relativeToWindow = positioning === 'fixed' || positioning === 'document' ? 1 : 0;
        const relativeToDocument = positioning === 'document' ? 1 : 0;
        const isLTR = isLTRBool ? 1 : 0;
        const isRTL = isLTRBool ? 0 : 1;
        const isSurfaceInlineStart = surfaceInline === 'start' ? 1 : 0;
        const isSurfaceInlineEnd = surfaceInline === 'end' ? 1 : 0;
        const isOneInlineEnd = anchorInline !== surfaceInline ? 1 : 0;
        // Whether or not to apply the width of the anchor
        const inlineAnchorOffset = isOneInlineEnd * anchorRect.width + xOffset;
        // The inline position of the anchor relative to window in LTR
        const inlineTopLayerOffsetLTR = isSurfaceInlineStart * anchorRect.left +
            isSurfaceInlineEnd *
                (windowInnerWidth - anchorRect.right - inlineScrollbarWidth);
        // The inline position of the anchor relative to window in RTL
        const inlineTopLayerOffsetRTL = isSurfaceInlineStart *
            (windowInnerWidth - anchorRect.right - inlineScrollbarWidth) +
            isSurfaceInlineEnd * anchorRect.left;
        // The inline position of the anchor relative to window
        const inlineTopLayerOffset = isLTR * inlineTopLayerOffsetLTR + isRTL * inlineTopLayerOffsetRTL;
        // The inline position of the anchor relative to window in LTR
        const inlineDocumentOffsetLTR = isSurfaceInlineStart * window.scrollX -
            isSurfaceInlineEnd * window.scrollX;
        // The inline position of the anchor relative to window in RTL
        const inlineDocumentOffsetRTL = isSurfaceInlineEnd * window.scrollX -
            isSurfaceInlineStart * window.scrollX;
        // The inline position of the anchor relative to window
        const inlineDocumentOffset = isLTR * inlineDocumentOffsetLTR + isRTL * inlineDocumentOffsetRTL;
        // If the surface's inline would be out of bounds of the window, move it
        // back in
        const inlineOutOfBoundsCorrection = Math.abs(Math.min(0, windowInnerWidth -
            inlineTopLayerOffset -
            inlineAnchorOffset -
            surfaceRect.width));
        // The inline logical value of the surface
        const inlineInset = relativeToWindow * inlineTopLayerOffset +
            inlineAnchorOffset +
            relativeToDocument * inlineDocumentOffset;
        let surfaceInlineProperty = surfaceInline === 'start' ? 'inset-inline-start' : 'inset-inline-end';
        // There are cases where the element is RTL but the root of the page is not.
        // In these cases we want to not use logical properties.
        if (positioning === 'document' || positioning === 'fixed') {
            if ((surfaceInline === 'start' && isLTRBool) ||
                (surfaceInline === 'end' && !isLTRBool)) {
                surfaceInlineProperty = 'left';
            }
            else {
                surfaceInlineProperty = 'right';
            }
        }
        return {
            inlineInset,
            inlineOutOfBoundsCorrection,
            surfaceInlineProperty,
        };
    }
    hostUpdate() {
        this.onUpdate();
    }
    hostUpdated() {
        this.onUpdate();
    }
    /**
     * Checks whether the properties passed into the controller have changed since
     * the last positioning. If so, it will reposition if the surface is open or
     * close it if the surface should close.
     */
    async onUpdate() {
        const props = this.getProperties();
        let hasChanged = false;
        for (const [key, value] of Object.entries(props)) {
            // tslint:disable-next-line
            hasChanged = hasChanged || value !== this.lastValues[key];
            if (hasChanged)
                break;
        }
        const openChanged = this.lastValues.isOpen !== props.isOpen;
        const hasAnchor = !!props.anchorEl;
        const hasSurface = !!props.surfaceEl;
        if (hasChanged && hasAnchor && hasSurface) {
            // Only update isOpen, because if it's closed, we do not want to waste
            // time on a useless reposition calculation. So save the other "dirty"
            // values until next time it opens.
            this.lastValues.isOpen = props.isOpen;
            if (props.isOpen) {
                // We are going to do a reposition, so save the prop values for future
                // dirty checking.
                this.lastValues = props;
                await this.position();
                props.onOpen();
            }
            else if (openChanged) {
                await props.beforeClose();
                this.close();
                props.onClose();
            }
        }
    }
    /**
     * Hides the surface.
     */
    close() {
        this.surfaceStylesInternal = {
            'display': 'none',
        };
        this.host.requestUpdate();
        const surfaceEl = this.getProperties().surfaceEl;
        // The following type casts are required due to differing TS types in Google
        // and open source.
        if (surfaceEl?.popover &&
            surfaceEl?.isConnected) {
            surfaceEl.hidePopover();
        }
    }
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Indicies to access the TypeaheadRecord tuple type.
 */
const TYPEAHEAD_RECORD = {
    INDEX: 0,
    ITEM: 1,
    TEXT: 2,
};
/**
 * This controller listens to `keydown` events and searches the header text of
 * an array of `MenuItem`s with the corresponding entered keys within the buffer
 * time and activates the item.
 *
 * @example
 * ```ts
 * const typeaheadController = new TypeaheadController(() => ({
 *   typeaheadBufferTime: 50,
 *   getItems: () => Array.from(document.querySelectorAll('md-menu-item'))
 * }));
 * html`
 *   <div
 *       @keydown=${typeaheadController.onKeydown}
 *       tabindex="0"
 *       class="activeItemText">
 *     <!-- focusable element that will receive keydown events -->
 *     Apple
 *   </div>
 *   <div>
 *     <md-menu-item active header="Apple"></md-menu-item>
 *     <md-menu-item header="Apricot"></md-menu-item>
 *     <md-menu-item header="Banana"></md-menu-item>
 *     <md-menu-item header="Olive"></md-menu-item>
 *     <md-menu-item header="Orange"></md-menu-item>
 *   </div>
 * `;
 * ```
 */
class TypeaheadController {
    /**
     * @param getProperties A function that returns the options of the typeahead
     * controller:
     *
     * {
     *   getItems: A function that returns an array of menu items to be searched.
     *   typeaheadBufferTime: The maximum time between each keystroke to keep the
     *       current type buffer alive.
     * }
     */
    constructor(getProperties) {
        this.getProperties = getProperties;
        /**
         * Array of tuples that helps with indexing.
         */
        this.typeaheadRecords = [];
        /**
         * Currently-typed text since last buffer timeout
         */
        this.typaheadBuffer = '';
        /**
         * The timeout id from the current buffer's setTimeout
         */
        this.cancelTypeaheadTimeout = 0;
        /**
         * If we are currently "typing"
         */
        this.isTypingAhead = false;
        /**
         * The record of the last active item.
         */
        this.lastActiveRecord = null;
        /**
         * Apply this listener to the element that will receive `keydown` events that
         * should trigger this controller.
         *
         * @param event The native browser `KeyboardEvent` from the `keydown` event.
         */
        this.onKeydown = (event) => {
            if (this.isTypingAhead) {
                this.typeahead(event);
            }
            else {
                this.beginTypeahead(event);
            }
        };
        /**
         * Ends the current typeahead and clears the buffer.
         */
        this.endTypeahead = () => {
            this.isTypingAhead = false;
            this.typaheadBuffer = '';
            this.typeaheadRecords = [];
        };
    }
    get items() {
        return this.getProperties().getItems();
    }
    get active() {
        return this.getProperties().active;
    }
    /**
     * Sets up typingahead
     */
    beginTypeahead(event) {
        if (!this.active) {
            return;
        }
        // We don't want to typeahead if the _beginning_ of the typeahead is a menu
        // navigation, or a selection. We will handle "Space" only if it's in the
        // middle of a typeahead
        if (event.code === 'Space' ||
            event.code === 'Enter' ||
            event.code.startsWith('Arrow') ||
            event.code === 'Escape') {
            return;
        }
        this.isTypingAhead = true;
        // Generates the record array data structure which is the index, the element
        // and a normalized header.
        this.typeaheadRecords = this.items.map((el, index) => [
            index,
            el,
            el.typeaheadText.trim().toLowerCase(),
        ]);
        this.lastActiveRecord =
            this.typeaheadRecords.find((record) => record[TYPEAHEAD_RECORD.ITEM].tabIndex === 0) ?? null;
        if (this.lastActiveRecord) {
            this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = -1;
        }
        this.typeahead(event);
    }
    /**
     * Performs the typeahead. Based on the normalized items and the current text
     * buffer, finds the _next_ item with matching text and activates it.
     *
     * @example
     *
     * items: Apple, Banana, Olive, Orange, Cucumber
     * buffer: ''
     * user types: o
     *
     * activates Olive
     *
     * @example
     *
     * items: Apple, Banana, Olive (active), Orange, Cucumber
     * buffer: 'o'
     * user types: l
     *
     * activates Olive
     *
     * @example
     *
     * items: Apple, Banana, Olive (active), Orange, Cucumber
     * buffer: ''
     * user types: o
     *
     * activates Orange
     *
     * @example
     *
     * items: Apple, Banana, Olive, Orange (active), Cucumber
     * buffer: ''
     * user types: o
     *
     * activates Olive
     */
    typeahead(event) {
        if (event.defaultPrevented)
            return;
        clearTimeout(this.cancelTypeaheadTimeout);
        // Stop typingahead if one of the navigation or selection keys (except for
        // Space) are pressed
        if (event.code === 'Enter' ||
            event.code.startsWith('Arrow') ||
            event.code === 'Escape') {
            this.endTypeahead();
            if (this.lastActiveRecord) {
                this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = -1;
            }
            return;
        }
        // If Space is pressed, prevent it from selecting and closing the menu
        if (event.code === 'Space') {
            event.preventDefault();
        }
        // Start up a new keystroke buffer timeout
        this.cancelTypeaheadTimeout = setTimeout(this.endTypeahead, this.getProperties().typeaheadBufferTime);
        this.typaheadBuffer += event.key.toLowerCase();
        const lastActiveIndex = this.lastActiveRecord
            ? this.lastActiveRecord[TYPEAHEAD_RECORD.INDEX]
            : -1;
        const numRecords = this.typeaheadRecords.length;
        /**
         * Sorting function that will resort the items starting with the given index
         *
         * @example
         *
         * this.typeaheadRecords =
         * 0: [0, <reference>, 'apple']
         * 1: [1, <reference>, 'apricot']
         * 2: [2, <reference>, 'banana']
         * 3: [3, <reference>, 'olive'] <-- lastActiveIndex
         * 4: [4, <reference>, 'orange']
         * 5: [5, <reference>, 'strawberry']
         *
         * this.typeaheadRecords.sort((a,b) => rebaseIndexOnActive(a)
         *                                       - rebaseIndexOnActive(b)) ===
         * 0: [3, <reference>, 'olive'] <-- lastActiveIndex
         * 1: [4, <reference>, 'orange']
         * 2: [5, <reference>, 'strawberry']
         * 3: [0, <reference>, 'apple']
         * 4: [1, <reference>, 'apricot']
         * 5: [2, <reference>, 'banana']
         */
        const rebaseIndexOnActive = (record) => {
            return ((record[TYPEAHEAD_RECORD.INDEX] + numRecords - lastActiveIndex) %
                numRecords);
        };
        // records filtered and sorted / rebased around the last active index
        const matchingRecords = this.typeaheadRecords
            .filter((record) => !record[TYPEAHEAD_RECORD.ITEM].disabled &&
            record[TYPEAHEAD_RECORD.TEXT].startsWith(this.typaheadBuffer))
            .sort((a, b) => rebaseIndexOnActive(a) - rebaseIndexOnActive(b));
        // Just leave if there's nothing that matches. Native select will just
        // choose the first thing that starts with the next letter in the alphabet
        // but that's out of scope and hard to localize
        if (matchingRecords.length === 0) {
            clearTimeout(this.cancelTypeaheadTimeout);
            if (this.lastActiveRecord) {
                this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = -1;
            }
            this.endTypeahead();
            return;
        }
        const isNewQuery = this.typaheadBuffer.length === 1;
        let nextRecord;
        // This is likely the case that someone is trying to "tab" through different
        // entries that start with the same letter
        if (this.lastActiveRecord === matchingRecords[0] && isNewQuery) {
            nextRecord = matchingRecords[1] ?? matchingRecords[0];
        }
        else {
            nextRecord = matchingRecords[0];
        }
        if (this.lastActiveRecord) {
            this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = -1;
        }
        this.lastActiveRecord = nextRecord;
        nextRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = 0;
        nextRecord[TYPEAHEAD_RECORD.ITEM].focus();
        return;
    }
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * The default value for the typeahead buffer time in Milliseconds.
 */
const DEFAULT_TYPEAHEAD_BUFFER_TIME = 200;
const submenuNavKeys = new Set([
    NavigableKeys.ArrowDown,
    NavigableKeys.ArrowUp,
    NavigableKeys.Home,
    NavigableKeys.End,
]);
const menuNavKeys = new Set([
    NavigableKeys.ArrowLeft,
    NavigableKeys.ArrowRight,
    ...submenuNavKeys,
]);
/**
 * Gets the currently focused element on the page.
 *
 * @param activeDoc The document or shadowroot from which to start the search.
 *    Defaults to `window.document`
 * @return Returns the currently deeply focused element or `null` if none.
 */
function getFocusedElement(activeDoc = document) {
    let activeEl = activeDoc.activeElement;
    // Check for activeElement in the case that an element with a shadow root host
    // is currently focused.
    while (activeEl && activeEl?.shadowRoot?.activeElement) {
        activeEl = activeEl.shadowRoot.activeElement;
    }
    return activeEl;
}
/**
 * @fires opening {Event} Fired before the opening animation begins
 * @fires opened {Event} Fired once the menu is open, after any animations
 * @fires closing {Event} Fired before the closing animation begins
 * @fires closed {Event} Fired once the menu is closed, after any animations
 */
class Menu extends h {
    /**
     * Whether the menu is animating upwards or downwards when opening. This is
     * helpful for calculating some animation calculations.
     */
    get openDirection() {
        const menuCornerBlock = this.menuCorner.split('-')[0];
        return menuCornerBlock === 'start' ? 'DOWN' : 'UP';
    }
    /**
     * The element which the menu should align to. If `anchor` is set to a
     * non-empty idref string, then `anchorEl` will resolve to the element with
     * the given id in the same root node. Otherwise, `null`.
     */
    get anchorElement() {
        if (this.anchor) {
            return this.getRootNode().querySelector(`#${this.anchor}`);
        }
        return this.currentAnchorElement;
    }
    set anchorElement(element) {
        this.currentAnchorElement = element;
        this.requestUpdate('anchorElement');
    }
    constructor() {
        super();
        /**
         * The ID of the element in the same root node in which the menu should align
         * to. Overrides setting `anchorElement = elementReference`.
         *
         * __NOTE__: anchor or anchorElement must either be an HTMLElement or resolve
         * to an HTMLElement in order for menu to open.
         */
        this.anchor = '';
        /**
         * Whether the positioning algorithm should calculate relative to the parent
         * of the anchor element (`absolute`), relative to the window (`fixed`), or
         * relative to the document (`document`). `popover` will use the popover API
         * to render the menu in the top-layer. If your browser does not support the
         * popover API, it will fall back to `fixed`.
         *
         * __Examples for `position = 'fixed'`:__
         *
         * - If there is no `position:relative` in the given parent tree and the
         *   surface is `position:absolute`
         * - If the surface is `position:fixed`
         * - If the surface is in the "top layer"
         * - The anchor and the surface do not share a common `position:relative`
         *   ancestor
         *
         * When using `positioning=fixed`, in most cases, the menu should position
         * itself above most other `position:absolute` or `position:fixed` elements
         * when placed inside of them. e.g. using a menu inside of an `md-dialog`.
         *
         * __NOTE__: Fixed menus will not scroll with the page and will be fixed to
         * the window instead.
         *
         * __Examples for `position = 'document'`:__
         *
         * - There is no parent that creates a relative positioning context e.g.
         *   `position: relative`, `position: absolute`, `transform: translate(x, y)`,
         *   etc.
         * - You put the effort into hoisting the menu to the top of the DOM like the
         *   end of the `<body>` to render over everything or in a top-layer.
         * - You are reusing a single `md-menu` element that dynamically renders
         *   content.
         *
         * __Examples for `position = 'popover'`:__
         *
         * - Your browser supports `popover`.
         * - Most cases. Once popover is in browsers, this will become the default.
         */
        this.positioning = 'absolute';
        /**
         * Skips the opening and closing animations.
         */
        this.quick = false;
        /**
         * Displays overflow content like a submenu. Not required in most cases when
         * using `positioning="popover"`.
         *
         * __NOTE__: This may cause adverse effects if you set
         * `md-menu {max-height:...}`
         * and have items overflowing items in the "y" direction.
         */
        this.hasOverflow = false;
        /**
         * Opens the menu and makes it visible. Alternative to the `.show()` and
         * `.close()` methods
         */
        this.open = false;
        /**
         * Offsets the menu's inline alignment from the anchor by the given number in
         * pixels. This value is direction aware and will follow the LTR / RTL
         * direction.
         *
         * e.g. LTR: positive -> right, negative -> left
         *      RTL: positive -> left, negative -> right
         */
        this.xOffset = 0;
        /**
         * Offsets the menu's block alignment from the anchor by the given number in
         * pixels.
         *
         * e.g. positive -> down, negative -> up
         */
        this.yOffset = 0;
        /**
         * Disable the `flip` behavior that usually happens on the horizontal axis
         * when the surface would render outside the viewport.
         */
        this.noHorizontalFlip = false;
        /**
         * Disable the `flip` behavior that usually happens on the vertical axis when
         * the surface would render outside the viewport.
         */
        this.noVerticalFlip = false;
        /**
         * The max time between the keystrokes of the typeahead menu behavior before
         * it clears the typeahead buffer.
         */
        this.typeaheadDelay = DEFAULT_TYPEAHEAD_BUFFER_TIME;
        /**
         * The corner of the anchor which to align the menu in the standard logical
         * property style of <block>-<inline> e.g. `'end-start'`.
         *
         * NOTE: This value may not be respected by the menu positioning algorithm
         * if the menu would render outisde the viewport.
         * Use `no-horizontal-flip` or `no-vertical-flip` to force the usage of the value
         */
        this.anchorCorner = Corner.END_START;
        /**
         * The corner of the menu which to align the anchor in the standard logical
         * property style of <block>-<inline> e.g. `'start-start'`.
         *
         * NOTE: This value may not be respected by the menu positioning algorithm
         * if the menu would render outisde the viewport.
         * Use `no-horizontal-flip` or `no-vertical-flip` to force the usage of the value
         */
        this.menuCorner = Corner.START_START;
        /**
         * Keeps the user clicks outside the menu.
         *
         * NOTE: clicking outside may still cause focusout to close the menu so see
         * `stayOpenOnFocusout`.
         */
        this.stayOpenOnOutsideClick = false;
        /**
         * Keeps the menu open when focus leaves the menu's composed subtree.
         *
         * NOTE: Focusout behavior will stop propagation of the focusout event. Set
         * this property to true to opt-out of menu's focusout handling altogether.
         */
        this.stayOpenOnFocusout = false;
        /**
         * After closing, does not restore focus to the last focused element before
         * the menu was opened.
         */
        this.skipRestoreFocus = false;
        /**
         * The element that should be focused by default once opened.
         *
         * NOTE: When setting default focus to 'LIST_ROOT', remember to change
         * `tabindex` to `0` and change md-menu's display to something other than
         * `display: contents` when necessary.
         */
        this.defaultFocus = FocusState.FIRST_ITEM;
        /**
         * Turns off navigation wrapping. By default, navigating past the end of the
         * menu items will wrap focus back to the beginning and vice versa. Use this
         * for ARIA patterns that do not wrap focus, like combobox.
         */
        this.noNavigationWrap = false;
        this.typeaheadActive = true;
        /**
         * Whether or not the current menu is a submenu and should not handle specific
         * navigation keys.
         *
         * @export
         */
        this.isSubmenu = false;
        /**
         * The event path of the last window pointerdown event.
         */
        this.pointerPath = [];
        /**
         * Whether or not the menu is repositoining due to window / document resize
         */
        this.isRepositioning = false;
        this.openCloseAnimationSignal = createAnimationSignal();
        this.listController = new ListController({
            isItem: (maybeItem) => {
                return maybeItem.hasAttribute('md-menu-item');
            },
            getPossibleItems: () => this.slotItems,
            isRtl: () => getComputedStyle(this).direction === 'rtl',
            deactivateItem: (item) => {
                item.selected = false;
                item.tabIndex = -1;
            },
            activateItem: (item) => {
                item.selected = true;
                item.tabIndex = 0;
            },
            isNavigableKey: (key) => {
                if (!this.isSubmenu) {
                    return menuNavKeys.has(key);
                }
                const isRtl = getComputedStyle(this).direction === 'rtl';
                // we want md-submenu to handle the submenu's left/right arrow exit
                // key so it can close the menu instead of navigate the list.
                // Therefore we need to include all keys but left/right arrow close
                // key
                const arrowOpen = isRtl
                    ? NavigableKeys.ArrowLeft
                    : NavigableKeys.ArrowRight;
                if (key === arrowOpen) {
                    return true;
                }
                return submenuNavKeys.has(key);
            },
            wrapNavigation: () => !this.noNavigationWrap,
        });
        /**
         * The element that was focused before the menu opened.
         */
        this.lastFocusedElement = null;
        /**
         * Handles typeahead navigation through the menu.
         */
        this.typeaheadController = new TypeaheadController(() => {
            return {
                getItems: () => this.items,
                typeaheadBufferTime: this.typeaheadDelay,
                active: this.typeaheadActive,
            };
        });
        this.currentAnchorElement = null;
        this.internals = 
        // Cast needed for closure
        this.attachInternals();
        /**
         * Handles positioning the surface and aligning it to the anchor as well as
         * keeping it in the viewport.
         */
        this.menuPositionController = new SurfacePositionController(this, () => {
            return {
                anchorCorner: this.anchorCorner,
                surfaceCorner: this.menuCorner,
                surfaceEl: this.surfaceEl,
                anchorEl: this.anchorElement,
                positioning: this.positioning === 'popover' ? 'document' : this.positioning,
                isOpen: this.open,
                xOffset: this.xOffset,
                yOffset: this.yOffset,
                disableBlockFlip: this.noVerticalFlip,
                disableInlineFlip: this.noHorizontalFlip,
                onOpen: this.onOpened,
                beforeClose: this.beforeClose,
                onClose: this.onClosed,
                // We can't resize components that have overflow like menus with
                // submenus because the overflow-y will show menu items / content
                // outside the bounds of the menu. Popover API fixes this because each
                // submenu is hoisted to the top-layer and are not considered overflow
                // content.
                repositionStrategy: this.hasOverflow && this.positioning !== 'popover'
                    ? 'move'
                    : 'resize',
            };
        });
        this.onWindowResize = () => {
            if (this.isRepositioning ||
                (this.positioning !== 'document' &&
                    this.positioning !== 'fixed' &&
                    this.positioning !== 'popover')) {
                return;
            }
            this.isRepositioning = true;
            this.reposition();
            this.isRepositioning = false;
        };
        this.handleFocusout = async (event) => {
            const anchorEl = this.anchorElement;
            // Do not close if we focused out by clicking on the anchor element. We
            // can't assume anchor buttons can be the related target because of iOS does
            // not focus buttons.
            if (this.stayOpenOnFocusout ||
                !this.open ||
                this.pointerPath.includes(anchorEl)) {
                return;
            }
            if (event.relatedTarget) {
                // Don't close the menu if we are switching focus between menu,
                // md-menu-item, and md-list or if the anchor was click focused, but check
                // if length of pointerPath is 0 because that means something was at least
                // clicked (shift+tab case).
                if (isElementInSubtree(event.relatedTarget, this) ||
                    (this.pointerPath.length !== 0 &&
                        isElementInSubtree(event.relatedTarget, anchorEl))) {
                    return;
                }
            }
            else if (this.pointerPath.includes(this)) {
                // If menu tabindex == -1 and the user clicks on the menu or a divider, we
                // want to keep the menu open.
                return;
            }
            const oldRestoreFocus = this.skipRestoreFocus;
            // allow focus to continue to the next focused object rather than returning
            this.skipRestoreFocus = true;
            this.close();
            // await for close
            await this.updateComplete;
            // return to previous behavior
            this.skipRestoreFocus = oldRestoreFocus;
        };
        /**
         * Saves the last focused element focuses the new element based on
         * `defaultFocus`, and animates open.
         */
        this.onOpened = async () => {
            this.lastFocusedElement = getFocusedElement();
            const items = this.items;
            const activeItemRecord = getActiveItem(items);
            if (activeItemRecord && this.defaultFocus !== FocusState.NONE) {
                activeItemRecord.item.tabIndex = -1;
            }
            let animationAborted = !this.quick;
            if (this.quick) {
                this.dispatchEvent(new Event('opening'));
            }
            else {
                animationAborted = !!(await this.animateOpen());
            }
            // This must come after the opening animation or else it may focus one of
            // the items before the animation has begun and causes the list to slide
            // (block-padding-of-the-menu)px at the end of the animation
            switch (this.defaultFocus) {
                case FocusState.FIRST_ITEM:
                    const first = getFirstActivatableItem(items);
                    if (first) {
                        first.tabIndex = 0;
                        first.focus();
                        await first.updateComplete;
                    }
                    break;
                case FocusState.LAST_ITEM:
                    const last = getLastActivatableItem(items);
                    if (last) {
                        last.tabIndex = 0;
                        last.focus();
                        await last.updateComplete;
                    }
                    break;
                case FocusState.LIST_ROOT:
                    this.focus();
                    break;
                default:
                case FocusState.NONE:
                    // Do nothing.
                    break;
            }
            if (!animationAborted) {
                this.dispatchEvent(new Event('opened'));
            }
        };
        /**
         * Animates closed.
         */
        this.beforeClose = async () => {
            this.open = false;
            if (!this.skipRestoreFocus) {
                this.lastFocusedElement?.focus?.();
            }
            if (!this.quick) {
                await this.animateClose();
            }
        };
        /**
         * Focuses the last focused element.
         */
        this.onClosed = () => {
            if (this.quick) {
                this.dispatchEvent(new Event('closing'));
                this.dispatchEvent(new Event('closed'));
            }
        };
        this.onWindowPointerdown = (event) => {
            this.pointerPath = event.composedPath();
        };
        /**
         * We cannot listen to window click because Safari on iOS will not bubble a
         * click event on window if the item clicked is not a "clickable" item such as
         * <body>
         */
        this.onDocumentClick = (event) => {
            if (!this.open) {
                return;
            }
            const path = event.composedPath();
            if (!this.stayOpenOnOutsideClick &&
                !path.includes(this) &&
                !path.includes(this.anchorElement)) {
                this.open = false;
            }
        };
        {
            this.internals.role = 'menu';
            this.addEventListener('keydown', this.handleKeydown);
            // Capture so that we can grab the event before it reaches the menu item
            // istelf. Specifically useful for the case where typeahead encounters a
            // space and we don't want the menu item to close the menu.
            this.addEventListener('keydown', this.captureKeydown, { capture: true });
            this.addEventListener('focusout', this.handleFocusout);
        }
    }
    /**
     * The menu items associated with this menu. The items must be `MenuItem`s and
     * have both the `md-menu-item` and `md-list-item` attributes.
     */
    get items() {
        return this.listController.items;
    }
    willUpdate(changed) {
        if (!changed.has('open')) {
            return;
        }
        if (this.open) {
            this.removeAttribute('aria-hidden');
            return;
        }
        this.setAttribute('aria-hidden', 'true');
    }
    update(changed) {
        if (changed.has('open')) {
            if (this.open) {
                this.setUpGlobalEventListeners();
            }
            else {
                this.cleanUpGlobalEventListeners();
            }
        }
        // Firefox does not support popover. Fall-back to using fixed.
        if (changed.has('positioning') &&
            this.positioning === 'popover' &&
            // type required for Google JS conformance
            !this.showPopover) {
            this.positioning = 'fixed';
        }
        super.update(changed);
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.open) {
            this.setUpGlobalEventListeners();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.cleanUpGlobalEventListeners();
    }
    getBoundingClientRect() {
        if (!this.surfaceEl) {
            return super.getBoundingClientRect();
        }
        return this.surfaceEl.getBoundingClientRect();
    }
    getClientRects() {
        if (!this.surfaceEl) {
            return super.getClientRects();
        }
        return this.surfaceEl.getClientRects();
    }
    render() {
        return this.renderSurface();
    }
    /**
     * Renders the positionable surface element and its contents.
     */
    renderSurface() {
        return ke$1 `
      <div
        class="menu ${Rt(this.getSurfaceClasses())}"
        style=${se(this.menuPositionController.surfaceStyles)}
        popover=${this.positioning === 'popover' ? 'manual' : D}>
        ${this.renderElevation()}
        <div class="items">
          <div class="item-padding"> ${this.renderMenuItems()} </div>
        </div>
      </div>
    `;
    }
    /**
     * Renders the menu items' slot
     */
    renderMenuItems() {
        return ke$1 `<slot
      @close-menu=${this.onCloseMenu}
      @deactivate-items=${this.onDeactivateItems}
      @request-activation=${this.onRequestActivation}
      @deactivate-typeahead=${this.handleDeactivateTypeahead}
      @activate-typeahead=${this.handleActivateTypeahead}
      @stay-open-on-focusout=${this.handleStayOpenOnFocusout}
      @close-on-focusout=${this.handleCloseOnFocusout}
      @slotchange=${this.listController.onSlotchange}></slot>`;
    }
    /**
     * Renders the elevation component.
     */
    renderElevation() {
        return ke$1 `<md-elevation part="elevation"></md-elevation>`;
    }
    getSurfaceClasses() {
        return {
            open: this.open,
            fixed: this.positioning === 'fixed',
            'has-overflow': this.hasOverflow,
        };
    }
    captureKeydown(event) {
        if (event.target === this &&
            !event.defaultPrevented &&
            isClosableKey(event.code)) {
            event.preventDefault();
            this.close();
        }
        this.typeaheadController.onKeydown(event);
    }
    /**
     * Performs the opening animation:
     *
     * https://direct.googleplex.com/#/spec/295000003+271060003
     *
     * @return A promise that resolve to `true` if the animation was aborted,
     *     `false` if it was not aborted.
     */
    async animateOpen() {
        const surfaceEl = this.surfaceEl;
        const slotEl = this.slotEl;
        if (!surfaceEl || !slotEl)
            return true;
        const openDirection = this.openDirection;
        this.dispatchEvent(new Event('opening'));
        // needs to be imperative because we don't want to mix animation and Lit
        // render timing
        surfaceEl.classList.toggle('animating', true);
        const signal = this.openCloseAnimationSignal.start();
        const height = surfaceEl.offsetHeight;
        const openingUpwards = openDirection === 'UP';
        const children = this.items;
        const FULL_DURATION = 500;
        const SURFACE_OPACITY_DURATION = 50;
        const ITEM_OPACITY_DURATION = 250;
        // We want to fit every child fade-in animation within the full duration of
        // the animation.
        const DELAY_BETWEEN_ITEMS = (FULL_DURATION - ITEM_OPACITY_DURATION) / children.length;
        const surfaceHeightAnimation = surfaceEl.animate([{ height: '0px' }, { height: `${height}px` }], {
            duration: FULL_DURATION,
            easing: EASING.EMPHASIZED,
        });
        // When we are opening upwards, we want to make sure the last item is always
        // in view, so we need to translate it upwards the opposite direction of the
        // height animation
        const upPositionCorrectionAnimation = slotEl.animate([
            { transform: openingUpwards ? `translateY(-${height}px)` : '' },
            { transform: '' },
        ], { duration: FULL_DURATION, easing: EASING.EMPHASIZED });
        const surfaceOpacityAnimation = surfaceEl.animate([{ opacity: 0 }, { opacity: 1 }], SURFACE_OPACITY_DURATION);
        const childrenAnimations = [];
        for (let i = 0; i < children.length; i++) {
            // If we are animating upwards, then reverse the children list.
            const directionalIndex = openingUpwards ? children.length - 1 - i : i;
            const child = children[directionalIndex];
            const animation = child.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: ITEM_OPACITY_DURATION,
                delay: DELAY_BETWEEN_ITEMS * i,
            });
            // Make them all initially hidden and then clean up at the end of each
            // animation.
            child.classList.toggle('md-menu-hidden', true);
            animation.addEventListener('finish', () => {
                child.classList.toggle('md-menu-hidden', false);
            });
            childrenAnimations.push([child, animation]);
        }
        let resolveAnimation = (value) => { };
        const animationFinished = new Promise((resolve) => {
            resolveAnimation = resolve;
        });
        signal.addEventListener('abort', () => {
            surfaceHeightAnimation.cancel();
            upPositionCorrectionAnimation.cancel();
            surfaceOpacityAnimation.cancel();
            childrenAnimations.forEach(([child, animation]) => {
                child.classList.toggle('md-menu-hidden', false);
                animation.cancel();
            });
            resolveAnimation(true);
        });
        surfaceHeightAnimation.addEventListener('finish', () => {
            surfaceEl.classList.toggle('animating', false);
            this.openCloseAnimationSignal.finish();
            resolveAnimation(false);
        });
        return await animationFinished;
    }
    /**
     * Performs the closing animation:
     *
     * https://direct.googleplex.com/#/spec/295000003+271060003
     */
    animateClose() {
        let resolve;
        // This promise blocks the surface position controller from setting
        // display: none on the surface which will interfere with this animation.
        const animationEnded = new Promise((res) => {
            resolve = res;
        });
        const surfaceEl = this.surfaceEl;
        const slotEl = this.slotEl;
        if (!surfaceEl || !slotEl) {
            resolve(false);
            return animationEnded;
        }
        const openDirection = this.openDirection;
        const closingDownwards = openDirection === 'UP';
        this.dispatchEvent(new Event('closing'));
        // needs to be imperative because we don't want to mix animation and Lit
        // render timing
        surfaceEl.classList.toggle('animating', true);
        const signal = this.openCloseAnimationSignal.start();
        const height = surfaceEl.offsetHeight;
        const children = this.items;
        const FULL_DURATION = 150;
        const SURFACE_OPACITY_DURATION = 50;
        // The surface fades away at the very end
        const SURFACE_OPACITY_DELAY = FULL_DURATION - SURFACE_OPACITY_DURATION;
        const ITEM_OPACITY_DURATION = 50;
        const ITEM_OPACITY_INITIAL_DELAY = 50;
        const END_HEIGHT_PERCENTAGE = 0.35;
        // We want to fit every child fade-out animation within the full duration of
        // the animation.
        const DELAY_BETWEEN_ITEMS = (FULL_DURATION - ITEM_OPACITY_INITIAL_DELAY - ITEM_OPACITY_DURATION) /
            children.length;
        // The mock has the animation shrink to 35%
        const surfaceHeightAnimation = surfaceEl.animate([
            { height: `${height}px` },
            { height: `${height * END_HEIGHT_PERCENTAGE}px` },
        ], {
            duration: FULL_DURATION,
            easing: EASING.EMPHASIZED_ACCELERATE,
        });
        // When we are closing downwards, we want to make sure the last item is
        // always in view, so we need to translate it upwards the opposite direction
        // of the height animation
        const downPositionCorrectionAnimation = slotEl.animate([
            { transform: '' },
            {
                transform: closingDownwards
                    ? `translateY(-${height * (1 - END_HEIGHT_PERCENTAGE)}px)`
                    : '',
            },
        ], { duration: FULL_DURATION, easing: EASING.EMPHASIZED_ACCELERATE });
        const surfaceOpacityAnimation = surfaceEl.animate([{ opacity: 1 }, { opacity: 0 }], { duration: SURFACE_OPACITY_DURATION, delay: SURFACE_OPACITY_DELAY });
        const childrenAnimations = [];
        for (let i = 0; i < children.length; i++) {
            // If the animation is closing upwards, then reverse the list of
            // children so that we animate in the opposite direction.
            const directionalIndex = closingDownwards ? i : children.length - 1 - i;
            const child = children[directionalIndex];
            const animation = child.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: ITEM_OPACITY_DURATION,
                delay: ITEM_OPACITY_INITIAL_DELAY + DELAY_BETWEEN_ITEMS * i,
            });
            // Make sure the items stay hidden at the end of each child animation.
            // We clean this up at the end of the overall animation.
            animation.addEventListener('finish', () => {
                child.classList.toggle('md-menu-hidden', true);
            });
            childrenAnimations.push([child, animation]);
        }
        signal.addEventListener('abort', () => {
            surfaceHeightAnimation.cancel();
            downPositionCorrectionAnimation.cancel();
            surfaceOpacityAnimation.cancel();
            childrenAnimations.forEach(([child, animation]) => {
                animation.cancel();
                child.classList.toggle('md-menu-hidden', false);
            });
            resolve(false);
        });
        surfaceHeightAnimation.addEventListener('finish', () => {
            surfaceEl.classList.toggle('animating', false);
            childrenAnimations.forEach(([child]) => {
                child.classList.toggle('md-menu-hidden', false);
            });
            this.openCloseAnimationSignal.finish();
            this.dispatchEvent(new Event('closed'));
            resolve(true);
        });
        return animationEnded;
    }
    handleKeydown(event) {
        // At any key event, the pointer interaction is done so we need to clear our
        // cached pointerpath. This handles the case where the user clicks on the
        // anchor, and then hits shift+tab
        this.pointerPath = [];
        this.listController.handleKeydown(event);
    }
    setUpGlobalEventListeners() {
        document.addEventListener('click', this.onDocumentClick, { capture: true });
        window.addEventListener('pointerdown', this.onWindowPointerdown);
        document.addEventListener('resize', this.onWindowResize, { passive: true });
        window.addEventListener('resize', this.onWindowResize, { passive: true });
    }
    cleanUpGlobalEventListeners() {
        document.removeEventListener('click', this.onDocumentClick, {
            capture: true,
        });
        window.removeEventListener('pointerdown', this.onWindowPointerdown);
        document.removeEventListener('resize', this.onWindowResize);
        window.removeEventListener('resize', this.onWindowResize);
    }
    onCloseMenu() {
        this.close();
    }
    onDeactivateItems(event) {
        event.stopPropagation();
        this.listController.onDeactivateItems();
    }
    onRequestActivation(event) {
        event.stopPropagation();
        this.listController.onRequestActivation(event);
    }
    handleDeactivateTypeahead(event) {
        // stopPropagation so that this does not deactivate any typeaheads in menus
        // nested above it e.g. md-sub-menu
        event.stopPropagation();
        this.typeaheadActive = false;
    }
    handleActivateTypeahead(event) {
        // stopPropagation so that this does not activate any typeaheads in menus
        // nested above it e.g. md-sub-menu
        event.stopPropagation();
        this.typeaheadActive = true;
    }
    handleStayOpenOnFocusout(event) {
        event.stopPropagation();
        this.stayOpenOnFocusout = true;
    }
    handleCloseOnFocusout(event) {
        event.stopPropagation();
        this.stayOpenOnFocusout = false;
    }
    close() {
        this.open = false;
        const maybeSubmenu = this.slotItems;
        maybeSubmenu.forEach((item) => {
            item.close?.();
        });
    }
    show() {
        this.open = true;
    }
    /**
     * Activates the next item in the menu. If at the end of the menu, the first
     * item will be activated.
     *
     * @return The activated menu item or `null` if there are no items.
     */
    activateNextItem() {
        return this.listController.activateNextItem() ?? null;
    }
    /**
     * Activates the previous item in the menu. If at the start of the menu, the
     * last item will be activated.
     *
     * @return The activated menu item or `null` if there are no items.
     */
    activatePreviousItem() {
        return this.listController.activatePreviousItem() ?? null;
    }
    /**
     * Repositions the menu if it is open.
     *
     * Useful for the case where document or window-positioned menus have their
     * anchors moved while open.
     */
    reposition() {
        if (this.open) {
            this.menuPositionController.position();
        }
    }
}
__decorate([
    e$2('.menu')
], Menu.prototype, "surfaceEl", void 0);
__decorate([
    e$2('slot')
], Menu.prototype, "slotEl", void 0);
__decorate([
    n$2()
], Menu.prototype, "anchor", void 0);
__decorate([
    n$2()
], Menu.prototype, "positioning", void 0);
__decorate([
    n$2({ type: Boolean })
], Menu.prototype, "quick", void 0);
__decorate([
    n$2({ type: Boolean, attribute: 'has-overflow' })
], Menu.prototype, "hasOverflow", void 0);
__decorate([
    n$2({ type: Boolean, reflect: true })
], Menu.prototype, "open", void 0);
__decorate([
    n$2({ type: Number, attribute: 'x-offset' })
], Menu.prototype, "xOffset", void 0);
__decorate([
    n$2({ type: Number, attribute: 'y-offset' })
], Menu.prototype, "yOffset", void 0);
__decorate([
    n$2({ type: Boolean, attribute: 'no-horizontal-flip' })
], Menu.prototype, "noHorizontalFlip", void 0);
__decorate([
    n$2({ type: Boolean, attribute: 'no-vertical-flip' })
], Menu.prototype, "noVerticalFlip", void 0);
__decorate([
    n$2({ type: Number, attribute: 'typeahead-delay' })
], Menu.prototype, "typeaheadDelay", void 0);
__decorate([
    n$2({ attribute: 'anchor-corner' })
], Menu.prototype, "anchorCorner", void 0);
__decorate([
    n$2({ attribute: 'menu-corner' })
], Menu.prototype, "menuCorner", void 0);
__decorate([
    n$2({ type: Boolean, attribute: 'stay-open-on-outside-click' })
], Menu.prototype, "stayOpenOnOutsideClick", void 0);
__decorate([
    n$2({ type: Boolean, attribute: 'stay-open-on-focusout' })
], Menu.prototype, "stayOpenOnFocusout", void 0);
__decorate([
    n$2({ type: Boolean, attribute: 'skip-restore-focus' })
], Menu.prototype, "skipRestoreFocus", void 0);
__decorate([
    n$2({ attribute: 'default-focus' })
], Menu.prototype, "defaultFocus", void 0);
__decorate([
    n$2({ type: Boolean, attribute: 'no-navigation-wrap' })
], Menu.prototype, "noNavigationWrap", void 0);
__decorate([
    o({ flatten: true })
], Menu.prototype, "slotItems", void 0);
__decorate([
    r$1()
], Menu.prototype, "typeaheadActive", void 0);

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./menu/internal/menu-styles.css.
const styles$2 = i$2 `:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px))}.menu{border-radius:var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px));display:none;inset:auto;border:none;padding:0px;overflow:visible;background-color:rgba(0,0,0,0);color:inherit;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit;scrollbar-width:inherit}.menu::backdrop{display:none}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit;scrollbar-width:inherit}.item-padding{padding-block:8px}.has-overflow:not([popover]) .items{overflow:visible}.has-overflow.animating .items,.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Menus display a list of choices on a temporary surface.
 *
 * @description
 * Menus appear when users interact with a button, action, or other control.
 *
 * They can be opened from a variety of elements, most commonly icon buttons,
 * buttons, and text fields.
 *
 * md-menu listens for the `close-menu` and `deselect-items` events.
 *
 * - `close-menu` closes the menu when dispatched from a child element.
 * - `deselect-items` deselects all of its immediate menu-item children.
 *
 * @example
 * ```html
 * <div style="position:relative;">
 *   <button
 *       id="anchor"
 *       @click=${() => this.menuRef.value.show()}>
 *     Click to open menu
 *   </button>
 *   <!--
 *     `has-overflow` is required when using a submenu which overflows the
 *     menu's contents.
 *
 *     Additionally, `anchor` ingests an idref which do not pass through shadow
 *     roots. You can also set `.anchorElement` to an element reference if
 *     necessary.
 *   -->
 *   <md-menu anchor="anchor" has-overflow ${ref(menuRef)}>
 *     <md-menu-item headline="This is a headline"></md-menu-item>
 *     <md-sub-menu>
 *       <md-menu-item
 *           slot="item"
 *           headline="this is a submenu item">
 *       </md-menu-item>
 *       <md-menu slot="menu">
 *         <md-menu-item headline="This is an item inside a submenu">
 *         </md-menu-item>
 *       </md-menu>
 *     </md-sub-menu>
 *   </md-menu>
 * </div>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
let MdMenu = class MdMenu extends Menu {
};
MdMenu.styles = [styles$2];
MdMenu = __decorate([
    t$2('md-menu')
], MdMenu);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An item layout component.
 */
class Item extends h {
    constructor() {
        super(...arguments);
        /**
         * Only needed for SSR.
         *
         * Add this attribute when an item has two lines to avoid a Flash Of Unstyled
         * Content. This attribute is not needed for single line items or items with
         * three or more lines.
         */
        this.multiline = false;
    }
    render() {
        return ke$1 `
      <slot name="container"></slot>
      <slot class="non-text" name="start"></slot>
      <div class="text">
        <slot name="overline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          class="default-slot"
          @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="headline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          name="supporting-text"
          @slotchange=${this.handleTextSlotChange}></slot>
      </div>
      <slot class="non-text" name="trailing-supporting-text"></slot>
      <slot class="non-text" name="end"></slot>
    `;
    }
    handleTextSlotChange() {
        // Check if there's more than one text slot with content. If so, the item is
        // multiline, which has a different min-height than single line items.
        let isMultiline = false;
        let slotsWithContent = 0;
        for (const slot of this.textSlots) {
            if (slotHasContent(slot)) {
                slotsWithContent += 1;
            }
            if (slotsWithContent > 1) {
                isMultiline = true;
                break;
            }
        }
        this.multiline = isMultiline;
    }
}
__decorate([
    n$2({ type: Boolean, reflect: true })
], Item.prototype, "multiline", void 0);
__decorate([
    r('.text slot')
], Item.prototype, "textSlots", void 0);
function slotHasContent(slot) {
    for (const node of slot.assignedNodes({ flatten: true })) {
        // Assume there's content if there's an element slotted in
        const isElement = node.nodeType === Node.ELEMENT_NODE;
        // If there's only text nodes for the default slot, check if there's
        // non-whitespace.
        const isTextWithContent = node.nodeType === Node.TEXT_NODE && node.textContent?.match(/\S/);
        if (isElement || isTextWithContent) {
            return true;
        }
    }
    return false;
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./labs/item/internal/item-styles.css.
const styles$1 = i$2 `:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An item layout component that can be used inside list items to give them
 * their customizable structure.
 *
 * `<md-item>` does not have any functionality, which must be added by the
 * component using it.
 *
 * All text will wrap unless `white-space: nowrap` is set on the item or any of
 * its children.
 *
 * Slots available:
 * - `<default>`: The headline, or custom content.
 * - `headline`: The first line.
 * - `supporting-text`: Supporting text lines underneath the headline.
 * - `trailing-supporting-text`: A small text snippet at the end of the item.
 * - `start`: Any leading content, such as icons, avatars, or checkboxes.
 * - `end`: Any trailing content, such as icons and buttons.
 * - `container`: Background container content, intended for adding additional
 *     styles, such as ripples or focus rings.
 *
 * @example
 * ```html
 * <md-item>Single line</md-item>
 *
 * <md-item>
 *   <div class="custom-content">...</div>
 * </md-item>
 *
 * <!-- Classic 1 to 3+ line list items -->
 * <md-item>
 *   <md-icon slot="start">image</md-icon>
 *   <div slot="overline">Overline</div>
 *   <div slot="headline">Headline</div>
 *   <div="supporting-text">Supporting text</div>
 *   <div="trailing-supporting-text">Trailing</div>
 *   <md-icon slot="end">image</md-icon>
 * </md-item>
 * ```
 *
 * When wrapping `<md-item>`, forward the available slots to use the same slot
 * structure for the wrapping component (this is what `<md-list-item>` does).
 *
 * @example
 * ```html
 * <md-item>
 *   <slot></slot>
 *   <slot name="overline" slot="overline"></slot>
 *   <slot name="headline" slot="headline"></slot>
 *   <slot name="supporting-text" slot="supporting-text"></slot>
 *   <slot name="trailing-supporting-text"
 *       slot="trailing-supporting-text"></slot>
 *   <slot name="start" slot="start"></slot>
 *   <slot name="end" slot="end"></slot>
 * </md-item>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
let MdItem = class MdItem extends Item {
};
MdItem.styles = [styles$1];
MdItem = __decorate([
    t$2('md-item')
], MdItem);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $e=Symbol.for(""),xe=t=>{if(t?.r===$e)return t?._$litStatic$},er=(t,...r)=>({_$litStatic$:r.reduce(((r,e,a)=>r+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[a+1]),t[0]),r:$e}),Te=new Map,Ee=t=>(r,...e)=>{const a=e.length;let o,s;const i=[],l=[];let n,u=0,c=!1;for(;u<a;){for(n=r[u];u<a&&void 0!==(s=e[u],o=xe(s));)n+=o+r[++u],c=!0;u!==a&&l.push(s),i.push(n),u++;}if(u===a&&i.push(r[a]),c){const t=i.join("$$lit$$");void 0===(r=Te.get(t))&&(i.raw=i,Te.set(t,r=i)),e=l;}return t(r,...e)},ke=Ee(ke$1);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A controller that provides most functionality of an element that implements
 * the MenuItem interface.
 */
class MenuItemController {
    /**
     * @param host The MenuItem in which to attach this controller to.
     * @param config The object that configures this controller's behavior.
     */
    constructor(host, config) {
        this.host = host;
        this.internalTypeaheadText = null;
        /**
         * Bind this click listener to the interactive element. Handles closing the
         * menu.
         */
        this.onClick = () => {
            if (this.host.keepOpen)
                return;
            this.host.dispatchEvent(createDefaultCloseMenuEvent(this.host, {
                kind: CloseReason.CLICK_SELECTION,
            }));
        };
        /**
         * Bind this click listener to the interactive element. Handles closing the
         * menu.
         */
        this.onKeydown = (event) => {
            // Check if the interactive element is an anchor tag. If so, click it.
            if (this.host.href && event.code === 'Enter') {
                const interactiveElement = this.getInteractiveElement();
                if (interactiveElement instanceof HTMLAnchorElement) {
                    interactiveElement.click();
                }
            }
            if (event.defaultPrevented)
                return;
            // If the host has keepOpen = true we should ignore clicks & Space/Enter,
            // however we always maintain the ability to close a menu with a explicit
            // `escape` keypress.
            const keyCode = event.code;
            if (this.host.keepOpen && keyCode !== 'Escape')
                return;
            if (isClosableKey(keyCode)) {
                event.preventDefault();
                this.host.dispatchEvent(createDefaultCloseMenuEvent(this.host, {
                    kind: CloseReason.KEYDOWN,
                    key: keyCode,
                }));
            }
        };
        this.getHeadlineElements = config.getHeadlineElements;
        this.getSupportingTextElements = config.getSupportingTextElements;
        this.getDefaultElements = config.getDefaultElements;
        this.getInteractiveElement = config.getInteractiveElement;
        this.host.addController(this);
    }
    /**
     * The text that is selectable via typeahead. If not set, defaults to the
     * innerText of the item slotted into the `"headline"` slot, and if there are
     * no slotted elements into headline, then it checks the _default_ slot, and
     * then the `"supporting-text"` slot if nothing is in _default_.
     */
    get typeaheadText() {
        if (this.internalTypeaheadText !== null) {
            return this.internalTypeaheadText;
        }
        const headlineElements = this.getHeadlineElements();
        const textParts = [];
        headlineElements.forEach((headlineElement) => {
            if (headlineElement.textContent && headlineElement.textContent.trim()) {
                textParts.push(headlineElement.textContent.trim());
            }
        });
        // If there are no headline elements, check the default slot's text content
        if (textParts.length === 0) {
            this.getDefaultElements().forEach((defaultElement) => {
                if (defaultElement.textContent && defaultElement.textContent.trim()) {
                    textParts.push(defaultElement.textContent.trim());
                }
            });
        }
        // If there are no headline nor default slot elements, check the
        //supporting-text slot's text content
        if (textParts.length === 0) {
            this.getSupportingTextElements().forEach((supportingTextElement) => {
                if (supportingTextElement.textContent &&
                    supportingTextElement.textContent.trim()) {
                    textParts.push(supportingTextElement.textContent.trim());
                }
            });
        }
        return textParts.join(' ');
    }
    /**
     * The recommended tag name to render as the list item.
     */
    get tagName() {
        const type = this.host.type;
        switch (type) {
            case 'link':
                return 'a';
            case 'button':
                return 'button';
            default:
            case 'menuitem':
            case 'option':
                return 'li';
        }
    }
    /**
     * The recommended role of the menu item.
     */
    get role() {
        return this.host.type === 'option' ? 'option' : 'menuitem';
    }
    hostConnected() {
        this.host.toggleAttribute('md-menu-item', true);
    }
    hostUpdate() {
        if (this.host.href) {
            this.host.type = 'link';
        }
    }
    /**
     * Use to set the typeaheadText when it changes.
     */
    setTypeaheadText(text) {
        this.internalTypeaheadText = text;
    }
}

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Separate variable needed for closure.
const menuItemBaseClass = mixinDelegatesAria(h);
/**
 * @fires close-menu {CustomEvent<{initiator: SelectOption, reason: Reason, itemPath: SelectOption[]}>}
 * Closes the encapsulating menu on closable interaction. --bubbles --composed
 */
class MenuItemEl extends menuItemBaseClass {
    constructor() {
        super(...arguments);
        /**
         * Disables the item and makes it non-selectable and non-interactive.
         */
        this.disabled = false;
        /**
         * Sets the behavior and role of the menu item, defaults to "menuitem".
         */
        this.type = 'menuitem';
        /**
         * Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
         */
        this.href = '';
        /**
         * Sets the underlying `HTMLAnchorElement`'s `target` attribute when `href` is
         * set.
         */
        this.target = '';
        /**
         * Keeps the menu open if clicked or keyboard selected.
         */
        this.keepOpen = false;
        /**
         * Sets the item in the selected visual state when a submenu is opened.
         */
        this.selected = false;
        this.menuItemController = new MenuItemController(this, {
            getHeadlineElements: () => {
                return this.headlineElements;
            },
            getSupportingTextElements: () => {
                return this.supportingTextElements;
            },
            getDefaultElements: () => {
                return this.defaultElements;
            },
            getInteractiveElement: () => this.listItemRoot,
        });
    }
    /**
     * The text that is selectable via typeahead. If not set, defaults to the
     * innerText of the item slotted into the `"headline"` slot.
     */
    get typeaheadText() {
        return this.menuItemController.typeaheadText;
    }
    set typeaheadText(text) {
        this.menuItemController.setTypeaheadText(text);
    }
    render() {
        return this.renderListItem(ke$1 `
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `);
    }
    /**
     * Renders the root list item.
     *
     * @param content the child content of the list item.
     */
    renderListItem(content) {
        const isAnchor = this.type === 'link';
        let tag;
        switch (this.menuItemController.tagName) {
            case 'a':
                tag = er `a`;
                break;
            case 'button':
                tag = er `button`;
                break;
            default:
            case 'li':
                tag = er `li`;
                break;
        }
        // TODO(b/265339866): announce "button"/"link" inside of a list item. Until
        // then all are "menuitem" roles for correct announcement.
        const target = isAnchor && !!this.target ? this.target : D;
        return ke `
      <${tag}
        id="item"
        tabindex=${this.disabled && !isAnchor ? -1 : 0}
        role=${this.menuItemController.role}
        aria-label=${this.ariaLabel || D}
        aria-selected=${this.ariaSelected || D}
        aria-checked=${this.ariaChecked || D}
        aria-expanded=${this.ariaExpanded || D}
        aria-haspopup=${this.ariaHasPopup || D}
        class="list-item ${Rt(this.getRenderClasses())}"
        href=${this.href || D}
        target=${target}
        @click=${this.menuItemController.onClick}
        @keydown=${this.menuItemController.onKeydown}
      >${content}</${tag}>
    `;
    }
    /**
     * Handles rendering of the ripple element.
     */
    renderRipple() {
        return ke$1 ` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`;
    }
    /**
     * Handles rendering of the focus ring.
     */
    renderFocusRing() {
        return ke$1 ` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`;
    }
    /**
     * Classes applied to the list item root.
     */
    getRenderClasses() {
        return {
            'disabled': this.disabled,
            'selected': this.selected,
        };
    }
    /**
     * Handles rendering the headline and supporting text.
     */
    renderBody() {
        return ke$1 `
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `;
    }
    focus() {
        // TODO(b/300334509): needed for some cases where delegatesFocus doesn't
        // work programmatically like in FF and select-option
        this.listItemRoot?.focus();
    }
}
/** @nocollapse */
MenuItemEl.shadowRootOptions = {
    ...h.shadowRootOptions,
    delegatesFocus: true,
};
__decorate([
    n$2({ type: Boolean, reflect: true })
], MenuItemEl.prototype, "disabled", void 0);
__decorate([
    n$2()
], MenuItemEl.prototype, "type", void 0);
__decorate([
    n$2()
], MenuItemEl.prototype, "href", void 0);
__decorate([
    n$2()
], MenuItemEl.prototype, "target", void 0);
__decorate([
    n$2({ type: Boolean, attribute: 'keep-open' })
], MenuItemEl.prototype, "keepOpen", void 0);
__decorate([
    n$2({ type: Boolean })
], MenuItemEl.prototype, "selected", void 0);
__decorate([
    e$2('.list-item')
], MenuItemEl.prototype, "listItemRoot", void 0);
__decorate([
    o({ slot: 'headline' })
], MenuItemEl.prototype, "headlineElements", void 0);
__decorate([
    o({ slot: 'supporting-text' })
], MenuItemEl.prototype, "supportingTextElements", void 0);
__decorate([
    n$1({ slot: '' })
], MenuItemEl.prototype, "defaultElements", void 0);
__decorate([
    n$2({ attribute: 'typeahead-text' })
], MenuItemEl.prototype, "typeaheadText", null);

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./menu/internal/menuitem/menu-item-styles.css.
const styles = i$2 `:host{display:flex;--md-ripple-hover-color: var(--md-menu-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-menu-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-menu-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-menu-item-pressed-state-layer-opacity, 0.12)}:host([disabled]){opacity:var(--md-menu-item-disabled-opacity, 0.3);pointer-events:none}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item:not(.disabled){cursor:pointer}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;color:var(--md-menu-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-menu-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-menu-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-menu-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-menu-item-one-line-container-height, 56px);padding-top:var(--md-menu-item-top-space, 12px);padding-bottom:var(--md-menu-item-bottom-space, 12px);padding-inline-start:var(--md-menu-item-leading-space, 16px);padding-inline-end:var(--md-menu-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-menu-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-menu-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-menu-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-menu-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-menu-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-menu-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-menu-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-menu-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-menu-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}.list-item{background-color:var(--md-menu-item-container-color, transparent)}.list-item.selected{background-color:var(--md-menu-item-selected-container-color, var(--md-sys-color-secondary-container, #e8def8))}.selected:not(.disabled) ::slotted(*){color:var(--md-menu-item-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b))}@media(forced-colors: active){:host([disabled]),:host([disabled]) slot{color:GrayText;opacity:1}.list-item{position:relative}.list-item.selected::before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;border:3px double CanvasText}}
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Menus display a list of choices on a temporary surface.
 *
 * @description
 * Menu items are the selectable choices within the menu. Menu items must
 * implement the `MenuItem` interface and also have the `md-menu-item`
 * attribute. Additionally menu items are list items so they must also have the
 * `md-list-item` attribute.
 *
 * Menu items can control a menu by selectively firing the `close-menu` and
 * `deselect-items` events.
 *
 * @final
 * @suppress {visibility}
 */
let MdMenuItem = class MdMenuItem extends MenuItemEl {
};
MdMenuItem.styles = [styles];
MdMenuItem = __decorate([
    t$2('md-menu-item')
], MdMenuItem);
