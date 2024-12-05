import{b as ge,d as je,u as M}from"./_commonjsHelpers-C1cWrJRb.js";import{aN as W,p as b,I as E,ak as Fe,M as _,J as Ae,k as Y,v as he,x as pe,l as O,r as te,y as be,aO as Me,f as m,t as H,n as G,aP as qe,aQ as We,a as u,aR as U,N as ye,R as se,aS as He,ae as Ue,s as x,aT as ne,U as _e,g as q,K as Se,u as Xe,a4 as re,ai as Ce,A as ke,Q as ae,aG as Ye,aq as ie,aU as oe,ad as Ge,X as we,aj as Ke,aV as Qe,aW as le,B as Je,D as Te,T as Ze,q as et,z as tt,S as nt,E as ue,$ as at,F as st}from"./index-CV_1M0y5.js";const Ee=["top","bottom"],rt=["start","end","left","right"];function it(e,t){let[n,a]=e.split(" ");return a||(a=W(Ee,n)?"start":W(rt,n)?"top":"center"),{side:ce(n,t),align:ce(a,t)}}function ce(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function zt(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function Vt(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function Nt(e){return{side:e.align,align:e.side}}function It(e){return W(Ee,e.side)?"y":"x"}const ot=["x-small","small","default","large","x-large"],lt=b({size:{type:[String,Number],default:"default"}},"size");function ut(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return Fe(()=>{let n,a;return W(ot,e.size)?n=`${t}--size-${e.size}`:e.size&&(a={width:_(e.size),height:_(e.size)}),{sizeClasses:n,sizeStyles:a}})}const ct=b({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:Ae,...Y(),...lt(),...he({tag:"i"}),...pe()},"VIcon"),Ot=O()({name:"VIcon",props:ct(),setup(e,t){let{attrs:n,slots:a}=t;const r=te(),{themeClasses:s}=be(e),{iconData:i}=Me(m(()=>r.value||e.icon)),{sizeClasses:o}=ut(e),{textColorClasses:l,textColorStyles:c}=ge(H(e,"color"));return G(()=>{var h,v;const d=(h=a.default)==null?void 0:h.call(a);d&&(r.value=(v=qe(d).filter(y=>y.type===We&&y.children&&typeof y.children=="string")[0])==null?void 0:v.children);const g=!!(n.onClick||n.onClickOnce);return u(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",s.value,o.value,l.value,{"v-icon--clickable":g,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:_(e.size),height:_(e.size),width:_(e.size)},c.value,e.style],role:g?"button":void 0,"aria-hidden":!g,tabindex:g?e.disabled?-1:0:void 0},{default:()=>[d]})}),{}}}),Dt=b({border:[Boolean,Number,String]},"border");function jt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{borderClasses:m(()=>{const a=U(e)?e.value:e.border,r=[];if(a===!0||a==="")r.push(`${t}--border`);else if(typeof a=="string"||a===0)for(const s of String(a).split(" "))r.push(`border-${s}`);return r})}}const dt=[null,"default","comfortable","compact"],Ft=b({density:{type:String,default:"default",validator:e=>dt.includes(e)}},"density");function At(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{densityClasses:m(()=>`${t}--density-${e.density}`)}}const Mt=b({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function qt(e){return{elevationClasses:m(()=>{const n=U(e)?e.value:e.elevation,a=[];return n==null||a.push(`elevation-${n}`),a})}}const Le=b({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function Pe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{roundedClasses:m(()=>{const a=U(e)?e.value:e.rounded,r=U(e)?e.value:e.tile,s=[];if(a===!0||a==="")s.push(`${t}--rounded`);else if(typeof a=="string"||a===0)for(const i of String(a).split(" "))s.push(`rounded-${i}`);else(r||a===!1)&&s.push("rounded-0");return s})}}const vt=["elevated","flat","tonal","outlined","text","plain"];function Wt(e,t){return u(ye,null,[e&&u("span",{key:"overlay",class:`${t}__overlay`},null),u("span",{key:"underlay",class:`${t}__underlay`},null)])}const Ht=b({color:String,variant:{type:String,default:"elevated",validator:e=>vt.includes(e)}},"variant");function Ut(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();const n=m(()=>{const{variant:s}=se(e);return`${t}--variant-${s}`}),{colorClasses:a,colorStyles:r}=je(m(()=>{const{variant:s,color:i}=se(e);return{[["elevated","flat"].includes(s)?"background":"text"]:i}}));return{colorClasses:a,colorStyles:r,variantClasses:n}}const ft=b({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Xt=O(!1)({name:"VDefaultsProvider",props:ft(),setup(e,t){let{slots:n}=t;const{defaults:a,disabled:r,reset:s,root:i,scoped:o}=He(e);return Ue(a,{reset:s,root:i,scoped:o,disabled:r}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}});function mt(e,t){const n=te(),a=x(!1);if(ne){const r=new IntersectionObserver(s=>{a.value=!!s.find(i=>i.isIntersecting)},t);_e(()=>{r.disconnect()}),q(n,(s,i)=>{i&&(r.unobserve(i),a.value=!1),s&&r.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const de={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},gt=b({location:String},"location");function ht(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=Se();return{locationStyles:m(()=>{if(!e.location)return{};const{side:s,align:i}=it(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function o(c){return n?n(c):0}const l={};return s!=="center"&&(t?l[de[s]]=`calc(100% - ${o(s)}px)`:l[s]=0),i!=="center"?t?l[de[i]]=`calc(100% - ${o(i)}px)`:l[i]=0:(s==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),l})}}const pt=b({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...Y(),...gt({location:"top"}),...Le(),...he(),...pe()},"VProgressLinear"),bt=O()({name:"VProgressLinear",props:pt(),emits:{"update:modelValue":e=>!0},setup(e,t){var V;let{slots:n}=t;const a=Xe(e,"modelValue"),{isRtl:r,rtlClasses:s}=Se(),{themeClasses:i}=be(e),{locationStyles:o}=ht(e),{textColorClasses:l,textColorStyles:c}=ge(e,"color"),{backgroundColorClasses:d,backgroundColorStyles:g}=M(m(()=>e.bgColor||e.color)),{backgroundColorClasses:h,backgroundColorStyles:v}=M(m(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:y,backgroundColorStyles:w}=M(e,"color"),{roundedClasses:D}=Pe(e),{intersectionRef:L,isIntersecting:j}=mt(),T=m(()=>parseFloat(e.max)),C=m(()=>parseFloat(e.height)),P=m(()=>re(parseFloat(e.bufferValue)/T.value*100,0,100)),z=m(()=>re(parseFloat(a.value)/T.value*100,0,100)),R=m(()=>r.value!==e.reverse),K=m(()=>e.indeterminate?"fade-transition":"slide-x-transition"),$=Ce&&((V=window.matchMedia)==null?void 0:V.call(window,"(forced-colors: active)").matches);function Q(f){if(!L.value)return;const{left:p,right:k,width:B}=L.value.getBoundingClientRect(),F=R.value?B-f.clientX+(k-B):f.clientX-p;a.value=Math.round(F/B*T.value)}return G(()=>u(e.tag,{ref:L,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&j.value,"v-progress-linear--reverse":R.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},D.value,i.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?_(C.value):0,"--v-progress-linear-height":_(C.value),...e.absolute?o.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:z.value,onClick:e.clickable&&Q},{default:()=>[e.stream&&u("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...c.value,[R.value?"left":"right"]:_(-C.value),borderTop:`${_(C.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${_(C.value/4)})`,width:_(100-P.value,"%"),"--v-progress-linear-stream-to":_(C.value*(R.value?1:-1))}},null),u("div",{class:["v-progress-linear__background",$?void 0:d.value],style:[g.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),u("div",{class:["v-progress-linear__buffer",$?void 0:h.value],style:[v.value,{opacity:parseFloat(e.bufferOpacity),width:_(P.value,"%")}]},null),u(ke,{name:K.value},{default:()=>[e.indeterminate?u("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(f=>u("div",{key:f,class:["v-progress-linear__indeterminate",f,$?void 0:y.value],style:w.value},null))]):u("div",{class:["v-progress-linear__determinate",$?void 0:y.value],style:[w.value,{width:_(z.value,"%")}]},null)]}),n.default&&u("div",{class:"v-progress-linear__content"},[n.default({value:z.value,buffer:P.value})])]})),{}}}),Yt=b({loading:[Boolean,String]},"loader");function Gt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{loaderClasses:m(()=>({[`${t}--loading`]:e.loading}))}}function Kt(e,t){var a;let{slots:n}=t;return u("div",{class:`${e.name}__loader`},[((a=n.default)==null?void 0:a.call(n,{color:e.color,isActive:e.active}))||u(bt,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const yt=["static","relative","fixed","absolute","sticky"],Qt=b({position:{type:String,validator:e=>yt.includes(e)}},"position");function Jt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{positionClasses:m(()=>e.position?`${t}--${e.position}`:void 0)}}function _t(){const e=ae("useRoute");return m(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function Zt(){var e,t;return(t=(e=ae("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function en(e,t){var g,h;const n=Ye("RouterLink"),a=m(()=>!!(e.href||e.to)),r=m(()=>(a==null?void 0:a.value)||oe(t,"click")||oe(e,"click"));if(typeof n=="string"||!("useLink"in n)){const v=H(e,"href");return{isLink:a,isClickable:r,href:v,linkProps:ie({href:v})}}const s=m(()=>({...e,to:H(()=>e.to||"")})),i=n.useLink(s.value),o=m(()=>e.to?i:void 0),l=_t(),c=m(()=>{var v,y,w;return o.value?e.exact?l.value?((w=o.value.isExactActive)==null?void 0:w.value)&&Ge(o.value.route.value.query,l.value.query):((y=o.value.isExactActive)==null?void 0:y.value)??!1:((v=o.value.isActive)==null?void 0:v.value)??!1:!1}),d=m(()=>{var v;return e.to?(v=o.value)==null?void 0:v.route.value.href:e.href});return{isLink:a,isClickable:r,isActive:c,route:(g=o.value)==null?void 0:g.route,navigate:(h=o.value)==null?void 0:h.navigate,href:d,linkProps:ie({href:d,"aria-current":m(()=>c.value?"page":void 0)})}}const tn=b({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let J=!1;function nn(e,t){let n=!1,a,r;Ce&&(we(()=>{window.addEventListener("popstate",s),a=e==null?void 0:e.beforeEach((i,o,l)=>{J?n?t(l):l():setTimeout(()=>n?t(l):l()),J=!0}),r=e==null?void 0:e.afterEach(()=>{J=!1})}),Ke(()=>{window.removeEventListener("popstate",s),a==null||a(),r==null||r()}));function s(i){var o;(o=i.state)!=null&&o.replaced||(n=!0,setTimeout(()=>n=!1))}}const Z=Symbol("rippleStop"),St=80;function ve(e,t){e.style.transform=t,e.style.webkitTransform=t}function ee(e){return e.constructor.name==="TouchEvent"}function Re(e){return e.constructor.name==="KeyboardEvent"}const Ct=function(e,t){var g;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,r=0;if(!Re(e)){const h=t.getBoundingClientRect(),v=ee(e)?e.touches[e.touches.length-1]:e;a=v.clientX-h.left,r=v.clientY-h.top}let s=0,i=.3;(g=t._ripple)!=null&&g.circle?(i=.15,s=t.clientWidth/2,s=n.center?s:s+Math.sqrt((a-s)**2+(r-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const o=`${(t.clientWidth-s*2)/2}px`,l=`${(t.clientHeight-s*2)/2}px`,c=n.center?o:`${a-s}px`,d=n.center?l:`${r-s}px`;return{radius:s,scale:i,x:c,y:d,centerX:o,centerY:l}},X={show(e,t){var v;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((v=t==null?void 0:t._ripple)!=null&&v.enabled))return;const a=document.createElement("span"),r=document.createElement("span");a.appendChild(r),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:s,scale:i,x:o,y:l,centerX:c,centerY:d}=Ct(e,t,n),g=`${s*2}px`;r.className="v-ripple__animation",r.style.width=g,r.style.height=g,t.appendChild(a);const h=window.getComputedStyle(t);h&&h.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),ve(r,`translate(${o}, ${l}) scale3d(${i},${i},${i})`),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),ve(r,`translate(${c}, ${d}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),r=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=n.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(n.parentNode)},300)},r)}};function $e(e){return typeof e>"u"||!!e}function N(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[Z])){if(e[Z]=!0,ee(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||Re(e),n._ripple.class&&(t.class=n._ripple.class),ee(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{X.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var a;(a=n==null?void 0:n._ripple)!=null&&a.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},St)}else X.show(e,n,t)}}function fe(e){e[Z]=!0}function S(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{S(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),X.hide(t)}}function Be(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let I=!1;function xe(e){!I&&(e.keyCode===le.enter||e.keyCode===le.space)&&(I=!0,N(e))}function ze(e){I=!1,S(e)}function Ve(e){I&&(I=!1,S(e))}function Ne(e,t,n){const{value:a,modifiers:r}=t,s=$e(a);if(s||X.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=r.center,e._ripple.circle=r.circle,Qe(a)&&a.class&&(e._ripple.class=a.class),s&&!n){if(r.stop){e.addEventListener("touchstart",fe,{passive:!0}),e.addEventListener("mousedown",fe);return}e.addEventListener("touchstart",N,{passive:!0}),e.addEventListener("touchend",S,{passive:!0}),e.addEventListener("touchmove",Be,{passive:!0}),e.addEventListener("touchcancel",S),e.addEventListener("mousedown",N),e.addEventListener("mouseup",S),e.addEventListener("mouseleave",S),e.addEventListener("keydown",xe),e.addEventListener("keyup",ze),e.addEventListener("blur",Ve),e.addEventListener("dragstart",S,{passive:!0})}else!s&&n&&Ie(e)}function Ie(e){e.removeEventListener("mousedown",N),e.removeEventListener("touchstart",N),e.removeEventListener("touchend",S),e.removeEventListener("touchmove",Be),e.removeEventListener("touchcancel",S),e.removeEventListener("mouseup",S),e.removeEventListener("mouseleave",S),e.removeEventListener("keydown",xe),e.removeEventListener("keyup",ze),e.removeEventListener("dragstart",S),e.removeEventListener("blur",Ve)}function kt(e,t){Ne(e,t,!1)}function wt(e){delete e._ripple,Ie(e)}function Tt(e,t){if(t.value===t.oldValue)return;const n=$e(t.oldValue);Ne(e,t,n)}const an={mounted:kt,unmounted:wt,updated:Tt},Et=b({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),A=(e,t)=>{let{slots:n}=t;const{transition:a,disabled:r,group:s,...i}=e,{component:o=s?Ze:ke,...l}=typeof a=="object"?a:{};return Je(o,Te(typeof a=="string"?{name:r?"":a}:l,typeof a=="string"?{}:Object.fromEntries(Object.entries({disabled:r,group:s}).filter(c=>{let[d,g]=c;return g!==void 0})),i),n)};function Lt(e,t){if(!ne)return;const n=t.modifiers||{},a=t.value,{handler:r,options:s}=typeof a=="object"?a:{handler:a,options:{}},i=new IntersectionObserver(function(){var g;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const c=(g=e._observe)==null?void 0:g[t.instance.$.uid];if(!c)return;const d=o.some(h=>h.isIntersecting);r&&(!n.quiet||c.init)&&(!n.once||d||c.init)&&r(d,o,l),d&&n.once?Oe(e,t):c.init=!0},s);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)}function Oe(e,t){var a;const n=(a=e._observe)==null?void 0:a[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const Pt={mounted:Lt,unmounted:Oe};function Rt(e){return{aspectStyles:m(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const De=b({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...Y(),...et()},"VResponsive"),me=O()({name:"VResponsive",props:De(),setup(e,t){let{slots:n}=t;const{aspectStyles:a}=Rt(e),{dimensionStyles:r}=tt(e);return G(()=>{var s;return u("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[r.value,e.style]},[u("div",{class:"v-responsive__sizer",style:a.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&u("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),$t=b({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...De(),...Y(),...Le(),...Et()},"VImg"),sn=O()({name:"VImg",directives:{intersect:Pt},props:$t(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:a}=t;const{backgroundColorClasses:r,backgroundColorStyles:s}=M(H(e,"color")),{roundedClasses:i}=Pe(e),o=ae("VImg"),l=x(""),c=te(),d=x(e.eager?"loading":"idle"),g=x(),h=x(),v=m(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),y=m(()=>v.value.aspect||g.value/h.value||0);q(()=>e.src,()=>{w(d.value!=="idle")}),q(y,(f,p)=>{!f&&p&&c.value&&C(c.value)}),nt(()=>w());function w(f){if(!(e.eager&&f)&&!(ne&&!f&&!e.eager)){if(d.value="loading",v.value.lazySrc){const p=new Image;p.src=v.value.lazySrc,C(p,null)}v.value.src&&we(()=>{var p;n("loadstart",((p=c.value)==null?void 0:p.currentSrc)||v.value.src),setTimeout(()=>{var k;if(!o.isUnmounted)if((k=c.value)!=null&&k.complete){if(c.value.naturalWidth||L(),d.value==="error")return;y.value||C(c.value,null),d.value==="loading"&&D()}else y.value||C(c.value),j()})})}}function D(){var f;o.isUnmounted||(j(),C(c.value),d.value="loaded",n("load",((f=c.value)==null?void 0:f.currentSrc)||v.value.src))}function L(){var f;o.isUnmounted||(d.value="error",n("error",((f=c.value)==null?void 0:f.currentSrc)||v.value.src))}function j(){const f=c.value;f&&(l.value=f.currentSrc||f.src)}let T=-1;_e(()=>{clearTimeout(T)});function C(f){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const k=()=>{if(clearTimeout(T),o.isUnmounted)return;const{naturalHeight:B,naturalWidth:F}=f;B||F?(g.value=F,h.value=B):!f.complete&&d.value==="loading"&&p!=null?T=window.setTimeout(k,p):(f.currentSrc.endsWith(".svg")||f.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,h.value=1)};k()}const P=m(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),z=()=>{var k;if(!v.value.src||d.value==="idle")return null;const f=u("img",{class:["v-img__img",P.value],style:{objectPosition:e.position},src:v.value.src,srcset:v.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:c,onLoad:D,onError:L},null),p=(k=a.sources)==null?void 0:k.call(a);return u(A,{transition:e.transition,appear:!0},{default:()=>[ue(p?u("picture",{class:"v-img__picture"},[p,f]):f,[[st,d.value==="loaded"]])]})},R=()=>u(A,{transition:e.transition},{default:()=>[v.value.lazySrc&&d.value!=="loaded"&&u("img",{class:["v-img__img","v-img__img--preload",P.value],style:{objectPosition:e.position},src:v.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),K=()=>a.placeholder?u(A,{transition:e.transition,appear:!0},{default:()=>[(d.value==="loading"||d.value==="error"&&!a.error)&&u("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,$=()=>a.error?u(A,{transition:e.transition,appear:!0},{default:()=>[d.value==="error"&&u("div",{class:"v-img__error"},[a.error()])]}):null,Q=()=>e.gradient?u("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,V=x(!1);{const f=q(y,p=>{p&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{V.value=!0})}),f())})}return G(()=>{const f=me.filterProps(e);return ue(u(me,Te({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!V.value},r.value,i.value,e.class],style:[{width:_(e.width==="auto"?g.value:e.width)},s.value,e.style]},f,{aspectRatio:y.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>u(ye,null,[u(z,null,null),u(R,null,null),u(Q,null,null),u(K,null,null),u($,null,null)]),default:a.default}),[[at("intersect"),{handler:w,options:e.options},null,{once:!0}]])}),{currentSrc:l,image:c,state:d,naturalWidth:g,naturalHeight:h}}});export{Zt as A,nn as B,sn as C,ce as D,mt as E,lt as F,ut as G,Pt as I,Kt as L,A as M,an as R,Ot as V,Mt as a,gt as b,Qt as c,Le as d,qt as e,ht as f,Jt as g,Pe as h,Et as i,Yt as j,Gt as k,Xt as l,Dt as m,Ft as n,At as o,tn as p,Ht as q,en as r,Ut as s,Wt as t,jt as u,it as v,zt as w,Vt as x,Nt as y,It as z};
