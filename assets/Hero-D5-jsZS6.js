import{c as be,g as Te,a as se,V as Se}from"./_commonjsHelpers-C1cWrJRb.js";import{p as Ce,k as Ae,l as _e,aI as Ne,ap as xe,r as Oe,a2 as Le,g as Z,U as Pe,f as Me,n as De,a as B,a4 as ke,_ as He,c as Re,a6 as Fe,o as je,w as V,b as j,ax as Ie,d as ie}from"./index-CV_1M0y5.js";import{V as le}from"./VBtn-C-jUaD9-.js";import{E as Qe,C as Ve}from"./VImg-DjaPqRSt.js";function Be(r){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;r;){if(f?Ye(r):ue(r))return r;r=r.parentElement}return document.scrollingElement}function st(r,f){const N=[];if(f&&r&&!f.contains(r))return N;for(;r&&(ue(r)&&N.push(r),r!==f);)r=r.parentElement;return N}function ue(r){if(!r||r.nodeType!==Node.ELEMENT_NODE)return!1;const f=window.getComputedStyle(r);return f.overflowY==="scroll"||f.overflowY==="auto"&&r.scrollHeight>r.clientHeight}function Ye(r){if(!r||r.nodeType!==Node.ELEMENT_NODE)return!1;const f=window.getComputedStyle(r);return["scroll","auto"].includes(f.overflowY)}var ce={exports:{}};(function(r,f){(function(N,P){r.exports=P()})(typeof self<"u"?self:be,()=>(()=>{var N={75:function(i){(function(){var h,m,d,g,T,v;typeof performance<"u"&&performance!==null&&performance.now?i.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(i.exports=function(){return(h()-T)/1e6},m=process.hrtime,g=(h=function(){var l;return 1e9*(l=m())[0]+l[1]})(),v=1e9*process.uptime(),T=g-v):Date.now?(i.exports=function(){return Date.now()-d},d=Date.now()):(i.exports=function(){return new Date().getTime()-d},d=new Date().getTime())}).call(this)},4087:(i,h,m)=>{for(var d=m(75),g=typeof window>"u"?m.g:window,T=["moz","webkit"],v="AnimationFrame",l=g["request"+v],x=g["cancel"+v]||g["cancelRequest"+v],O=0;!l&&O<T.length;O++)l=g[T[O]+"Request"+v],x=g[T[O]+"Cancel"+v]||g[T[O]+"CancelRequest"+v];if(!l||!x){var D=0,S=0,C=[];l=function(w){if(C.length===0){var A=d(),k=Math.max(0,16.666666666666668-(A-D));D=k+A,setTimeout(function(){var M=C.slice(0);C.length=0;for(var R=0;R<M.length;R++)if(!M[R].cancelled)try{M[R].callback(D)}catch(I){setTimeout(function(){throw I},0)}},Math.round(k))}return C.push({handle:++S,callback:w,cancelled:!1}),S},x=function(w){for(var A=0;A<C.length;A++)C[A].handle===w&&(C[A].cancelled=!0)}}i.exports=function(w){return l.call(g,w)},i.exports.cancel=function(){x.apply(g,arguments)},i.exports.polyfill=function(w){w||(w=g),w.requestAnimationFrame=l,w.cancelAnimationFrame=x}}},P={};function y(i){var h=P[i];if(h!==void 0)return h.exports;var m=P[i]={exports:{}};return N[i].call(m.exports,m,m.exports,y),m.exports}y.n=i=>{var h=i&&i.__esModule?()=>i.default:()=>i;return y.d(h,{a:h}),h},y.d=(i,h)=>{for(var m in h)y.o(h,m)&&!y.o(i,m)&&Object.defineProperty(i,m,{enumerable:!0,get:h[m]})},y.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),y.o=(i,h)=>Object.prototype.hasOwnProperty.call(i,h);var H={};return(()=>{y.d(H,{default:()=>de});var i=y(4087),h=y.n(i);const m=function(a){return new RegExp(/<[a-z][\s\S]*>/i).test(a)},d=function(a,t){return Math.floor(Math.random()*(t-a+1))+a};var g="TYPE_CHARACTER",T="REMOVE_CHARACTER",v="REMOVE_ALL",l="REMOVE_LAST_VISIBLE_NODE",x="PAUSE_FOR",O="CALL_FUNCTION",D="ADD_HTML_TAG_ELEMENT",S="CHANGE_DELETE_SPEED",C="CHANGE_DELAY",w="CHANGE_CURSOR",A="PASTE_STRING",k="HTML_TAG";function M(a){return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(a)}function R(a,t){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);t&&(o=o.filter(function(L){return Object.getOwnPropertyDescriptor(a,L).enumerable})),s.push.apply(s,o)}return s}function I(a){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?R(Object(s),!0).forEach(function(o){c(a,o,s[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):R(Object(s)).forEach(function(o){Object.defineProperty(a,o,Object.getOwnPropertyDescriptor(s,o))})}return a}function F(a){return function(t){if(Array.isArray(t))return G(t)}(a)||function(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(a)||function(t,s){if(t){if(typeof t=="string")return G(t,s);var o=Object.prototype.toString.call(t).slice(8,-1);return o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set"?Array.from(t):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?G(t,s):void 0}}(a)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function G(a,t){(t==null||t>a.length)&&(t=a.length);for(var s=0,o=new Array(t);s<t;s++)o[s]=a[s];return o}function pe(a,t){for(var s=0;s<t.length;s++){var o=t[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,ee(o.key),o)}}function c(a,t,s){return(t=ee(t))in a?Object.defineProperty(a,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[t]=s,a}function ee(a){var t=function(s,o){if(M(s)!=="object"||s===null)return s;var L=s[Symbol.toPrimitive];if(L!==void 0){var e=L.call(s,"string");if(M(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(a);return M(t)==="symbol"?t:String(t)}const de=function(){function a(o,L){var e=this;if(function(n,u){if(!(n instanceof u))throw new TypeError("Cannot call a class as a function")}(this,a),c(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),c(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),c(this,"setupWrapperElement",function(){e.state.elements.container&&(e.state.elements.wrapper.className=e.options.wrapperClassName,e.state.elements.cursor.className=e.options.cursorClassName,e.state.elements.cursor.innerHTML=e.options.cursor,e.state.elements.container.innerHTML="",e.state.elements.container.appendChild(e.state.elements.wrapper),e.state.elements.container.appendChild(e.state.elements.cursor))}),c(this,"start",function(){return e.state.eventLoopPaused=!1,e.runEventLoop(),e}),c(this,"pause",function(){return e.state.eventLoopPaused=!0,e}),c(this,"stop",function(){return e.state.eventLoop&&((0,i.cancel)(e.state.eventLoop),e.state.eventLoop=null),e}),c(this,"pauseFor",function(n){return e.addEventToQueue(x,{ms:n}),e}),c(this,"typeOutAllStrings",function(){return typeof e.options.strings=="string"?(e.typeString(e.options.strings).pauseFor(e.options.pauseFor),e):(e.options.strings.forEach(function(n){e.typeString(n).pauseFor(e.options.pauseFor).deleteAll(e.options.deleteSpeed)}),e)}),c(this,"typeString",function(n){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(m(n))return e.typeOutHTMLString(n,u);if(n){var E=(e.options||{}).stringSplitter,b=typeof E=="function"?E(n):n.split("");e.typeCharacters(b,u)}return e}),c(this,"pasteString",function(n){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return m(n)?e.typeOutHTMLString(n,u,!0):(n&&e.addEventToQueue(A,{character:n,node:u}),e)}),c(this,"typeOutHTMLString",function(n){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,E=arguments.length>2?arguments[2]:void 0,b=function(Y){var q=document.createElement("div");return q.innerHTML=Y,q.childNodes}(n);if(b.length>0)for(var p=0;p<b.length;p++){var _=b[p],Q=_.innerHTML;_&&_.nodeType!==3?(_.innerHTML="",e.addEventToQueue(D,{node:_,parentNode:u}),E?e.pasteString(Q,_):e.typeString(Q,_)):_.textContent&&(E?e.pasteString(_.textContent,u):e.typeString(_.textContent,u))}return e}),c(this,"deleteAll",function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return e.addEventToQueue(v,{speed:n}),e}),c(this,"changeDeleteSpeed",function(n){if(!n)throw new Error("Must provide new delete speed");return e.addEventToQueue(S,{speed:n}),e}),c(this,"changeDelay",function(n){if(!n)throw new Error("Must provide new delay");return e.addEventToQueue(C,{delay:n}),e}),c(this,"changeCursor",function(n){if(!n)throw new Error("Must provide new cursor");return e.addEventToQueue(w,{cursor:n}),e}),c(this,"deleteChars",function(n){if(!n)throw new Error("Must provide amount of characters to delete");for(var u=0;u<n;u++)e.addEventToQueue(T);return e}),c(this,"callFunction",function(n,u){if(!n||typeof n!="function")throw new Error("Callback must be a function");return e.addEventToQueue(O,{cb:n,thisArg:u}),e}),c(this,"typeCharacters",function(n){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!n||!Array.isArray(n))throw new Error("Characters must be an array");return n.forEach(function(E){e.addEventToQueue(g,{character:E,node:u})}),e}),c(this,"removeCharacters",function(n){if(!n||!Array.isArray(n))throw new Error("Characters must be an array");return n.forEach(function(){e.addEventToQueue(T)}),e}),c(this,"addEventToQueue",function(n,u){var E=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return e.addEventToStateProperty(n,u,E,"eventQueue")}),c(this,"addReverseCalledEvent",function(n,u){var E=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return e.options.loop?e.addEventToStateProperty(n,u,E,"reverseCalledEvents"):e}),c(this,"addEventToStateProperty",function(n,u){var E=arguments.length>2&&arguments[2]!==void 0&&arguments[2],b=arguments.length>3?arguments[3]:void 0,p={eventName:n,eventArgs:u||{}};return e.state[b]=E?[p].concat(F(e.state[b])):[].concat(F(e.state[b]),[p]),e}),c(this,"runEventLoop",function(){e.state.lastFrameTime||(e.state.lastFrameTime=Date.now());var n=Date.now(),u=n-e.state.lastFrameTime;if(!e.state.eventQueue.length){if(!e.options.loop)return;e.state.eventQueue=F(e.state.calledEvents),e.state.calledEvents=[],e.options=I({},e.state.initialOptions)}if(e.state.eventLoop=h()(e.runEventLoop),!e.state.eventLoopPaused){if(e.state.pauseUntil){if(n<e.state.pauseUntil)return;e.state.pauseUntil=null}var E,b=F(e.state.eventQueue),p=b.shift();if(!(u<=(E=p.eventName===l||p.eventName===T?e.options.deleteSpeed==="natural"?d(40,80):e.options.deleteSpeed:e.options.delay==="natural"?d(120,160):e.options.delay))){var _=p.eventName,Q=p.eventArgs;switch(e.logInDevMode({currentEvent:p,state:e.state,delay:E}),_){case A:case g:var Y=Q.character,q=Q.node,ne=document.createTextNode(Y),z=ne;e.options.onCreateTextNode&&typeof e.options.onCreateTextNode=="function"&&(z=e.options.onCreateTextNode(Y,ne)),z&&(q?q.appendChild(z):e.state.elements.wrapper.appendChild(z)),e.state.visibleNodes=[].concat(F(e.state.visibleNodes),[{type:"TEXT_NODE",character:Y,node:z}]);break;case T:b.unshift({eventName:l,eventArgs:{removingCharacterNode:!0}});break;case x:var fe=p.eventArgs.ms;e.state.pauseUntil=Date.now()+parseInt(fe);break;case O:var re=p.eventArgs,me=re.cb,ve=re.thisArg;me.call(ve,{elements:e.state.elements});break;case D:var oe=p.eventArgs,W=oe.node,J=oe.parentNode;J?J.appendChild(W):e.state.elements.wrapper.appendChild(W),e.state.visibleNodes=[].concat(F(e.state.visibleNodes),[{type:k,node:W,parentNode:J||e.state.elements.wrapper}]);break;case v:var he=e.state.visibleNodes,X=Q.speed,U=[];X&&U.push({eventName:S,eventArgs:{speed:X,temp:!0}});for(var ae=0,ge=he.length;ae<ge;ae++)U.push({eventName:l,eventArgs:{removingCharacterNode:!1}});X&&U.push({eventName:S,eventArgs:{speed:e.options.deleteSpeed,temp:!0}}),b.unshift.apply(b,U);break;case l:var ye=p.eventArgs.removingCharacterNode;if(e.state.visibleNodes.length){var K=e.state.visibleNodes.pop(),we=K.type,$=K.node,Ee=K.character;e.options.onRemoveNode&&typeof e.options.onRemoveNode=="function"&&e.options.onRemoveNode({node:$,character:Ee}),$&&$.parentNode.removeChild($),we===k&&ye&&b.unshift({eventName:l,eventArgs:{}})}break;case S:e.options.deleteSpeed=p.eventArgs.speed;break;case C:e.options.delay=p.eventArgs.delay;break;case w:e.options.cursor=p.eventArgs.cursor,e.state.elements.cursor.innerHTML=p.eventArgs.cursor}e.options.loop&&(p.eventName===l||p.eventArgs&&p.eventArgs.temp||(e.state.calledEvents=[].concat(F(e.state.calledEvents),[p]))),e.state.eventQueue=b,e.state.lastFrameTime=n}}}),o)if(typeof o=="string"){var te=document.querySelector(o);if(!te)throw new Error("Could not find container element");this.state.elements.container=te}else this.state.elements.container=o;L&&(this.options=I(I({},this.options),L)),this.state.initialOptions=I({},this.options),this.init()}var t,s;return t=a,(s=[{key:"init",value:function(){var o,L;this.setupWrapperElement(),this.addEventToQueue(w,{cursor:this.options.cursor},!0),this.addEventToQueue(v,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(o=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(L=document.createElement("style")).appendChild(document.createTextNode(o)),document.head.appendChild(L),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(o){this.options.devMode&&console.log(o)}}])&&pe(t.prototype,s),Object.defineProperty(t,"prototype",{writable:!1}),a}()})(),H.default})())})(ce);var qe=ce.exports;const ze=Te(qe),Ue="/assets/image4b-CGVYOAe1.webp";function $e(r){return Math.floor(Math.abs(r))*Math.sign(r)}const Ge=Ce({scale:{type:[Number,String],default:.5},...Ae()},"VParallax"),We=_e()({name:"VParallax",props:Ge(),setup(r,f){let{slots:N}=f;const{intersectionRef:P,isIntersecting:y}=Qe(),{resizeRef:H,contentRect:i}=Ne(),{height:h}=xe(),m=Oe();Le(()=>{var l;P.value=H.value=(l=m.value)==null?void 0:l.$el});let d;Z(y,l=>{l?(d=Be(P.value),d=d===document.scrollingElement?document:d,d.addEventListener("scroll",v,{passive:!0}),v()):d.removeEventListener("scroll",v)}),Pe(()=>{d==null||d.removeEventListener("scroll",v)}),Z(h,v),Z(()=>{var l;return(l=i.value)==null?void 0:l.height},v);const g=Me(()=>1-ke(+r.scale));let T=-1;function v(){y.value&&(cancelAnimationFrame(T),T=requestAnimationFrame(()=>{var k;const l=((k=m.value)==null?void 0:k.$el).querySelector(".v-img__img");if(!l)return;const x=d instanceof Document?document.documentElement.clientHeight:d.clientHeight,O=d instanceof Document?window.scrollY:d.scrollTop,D=P.value.getBoundingClientRect().top+O,S=i.value.height,C=D+(S-x)/2,w=$e((O-C)*g.value),A=Math.max(1,(g.value*(x-S)+S)/S);l.style.setProperty("transform",`translateY(${w}px) scale(${A})`)}))}return De(()=>B(Ve,{class:["v-parallax",{"v-parallax--active":y.value},r.class],style:r.style,ref:m,cover:!0,onLoadstart:v,onLoad:v},N)),{}}}),Je={name:"HeroSection",props:{scrollToSection:{type:Function,required:!0},scrollToContact:{type:Function,required:!0}},data(){return{appBarHeight:0,typewriter:null,ImageB:Ue}},computed:{heroHeight(){return`calc(100vh - ${this.appBarHeight}px)`},isLargeScreen(){return this.$vuetify.display.smAndUp}},mounted(){const r=document.querySelector(".v-app-bar");this.appBarHeight=r?r.offsetHeight:0,this.typewriter=new ze(this.$refs.typewriter,{loop:!0,delay:75,deleteSpeed:50,html:!0}),this.typewriter.typeString("on anything.").pauseFor(3e3).deleteAll().typeString("on delivering exceptional results.").pauseFor(3e3).deleteAll().typeString("on finding innovative solutions.").pauseFor(3e3).deleteAll().typeString("on navigating every storm.").pauseFor(3e3).deleteAll().start()}},Xe={class:"overlay"},Ke={ref:"typewriter",class:"dynamic-text underline-lightblue"},Ze={class:"mt-5"};function et(r,f,N,P,y,H){return je(),Re(se,{style:Fe({height:H.heroHeight}),class:"hero-section d-flex align-center text-center"},{default:V(()=>[B(We,{src:y.ImageB,class:"background-image"},{default:V(()=>[B(Se,null,{default:V(()=>[j("div",Xe,[j("div",{class:Ie(H.isLargeScreen?"overlay-content":"overlay-content--small small-screen")},[f[3]||(f[3]=j("div",{class:"mb-7"},[j("span",{class:"text-h2 font-weight-black"},"Welcome to Our Company")],-1)),B(se,{class:"mx-2 text-center typewriter-container"},{default:V(()=>[f[0]||(f[0]=j("span",{class:"static-text"},"Never give up",-1)),j("span",Ke,null,512)]),_:1}),j("div",Ze,[B(le,{size:"small",variant:"outlined",class:"mt-5 mr-3 color-btn",onClick:N.scrollToContact},{default:V(()=>f[1]||(f[1]=[ie("Get a Quote")])),_:1},8,["onClick"]),B(le,{size:"small",color:"primary",class:"mt-5",onClick:N.scrollToSection},{default:V(()=>f[2]||(f[2]=[ie("Our Services")])),_:1},8,["onClick"])])],2)])]),_:1})]),_:1},8,["src"])]),_:1},8,["style"])}const tt=He(Je,[["render",et],["__scopeId","data-v-7cfcc259"]]),it=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"}));export{tt as H,Be as a,it as b,st as g,ue as h};
