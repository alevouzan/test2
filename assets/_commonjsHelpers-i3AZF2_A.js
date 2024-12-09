import{a_ as c,aP as f,p as v,k as S,v as m,l as j,f as i,a5 as h,C as G,a$ as C,b0 as R,b1 as U,b2 as B,aU as w}from"./index-XjLbnA9m.js";const N=c.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}),V=c.reduce((e,n)=>{const t="offset"+f(n);return e[t]={type:[String,Number],default:null},e},{}),$=c.reduce((e,n)=>{const t="order"+f(n);return e[t]={type:[String,Number],default:null},e},{}),b={col:Object.keys(N),offset:Object.keys(V),order:Object.keys($)};function F(e,n,t){let a=e;if(!(t==null||t===!1)){if(n){const l=n.replace(e,"");a+=`-${l}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const I=["auto","start","end","center","baseline","stretch"],M=v({cols:{type:[Boolean,String,Number],default:!1},...N,offset:{type:[String,Number],default:null},...V,order:{type:[String,Number],default:null},...$,alignSelf:{type:String,default:null,validator:e=>I.includes(e)},...S(),...m()},"VCol"),q=j()({name:"VCol",props:M(),setup(e,n){let{slots:t}=n;const a=i(()=>{const l=[];let o;for(o in b)b[o].forEach(s=>{const u=e[s],y=F(o,s,u);y&&l.push(y)});const r=l.some(s=>s.startsWith("v-col-"));return l.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),l});return()=>{var l;return h(e.tag,{class:[a.value,e.class],style:e.style},(l=t.default)==null?void 0:l.call(t))}}}),d=["start","end","center"],P=["space-between","space-around","space-evenly"];function g(e,n){return c.reduce((t,a)=>{const l=e+f(a);return t[l]=n(),t},{})}const K=[...d,"baseline","stretch"],L=e=>K.includes(e),x=g("align",()=>({type:String,default:null,validator:L})),p=[...d,...P],E=e=>p.includes(e),A=g("justify",()=>({type:String,default:null,validator:E})),z=[...d,...P,"stretch"],O=e=>z.includes(e),_=g("alignContent",()=>({type:String,default:null,validator:O})),k={align:Object.keys(x),justify:Object.keys(A),alignContent:Object.keys(_)},D={align:"align",justify:"justify",alignContent:"align-content"};function J(e,n,t){let a=D[e];if(t!=null){if(n){const l=n.replace(e,"");a+=`-${l}`}return a+=`-${t}`,a.toLowerCase()}}const W=v({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:L},...x,justify:{type:String,default:null,validator:E},...A,alignContent:{type:String,default:null,validator:O},..._,...S(),...m()},"VRow"),H=j()({name:"VRow",props:W(),setup(e,n){let{slots:t}=n;const a=i(()=>{const l=[];let o;for(o in k)k[o].forEach(r=>{const s=e[r],u=J(o,r,s);u&&l.push(u)});return l.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),l});return()=>{var l;return h(e.tag,{class:["v-row",a.value,e.class],style:e.style},(l=t.default)==null?void 0:l.call(t))}}});function T(e){return G(()=>{const n=[],t={};if(e.value.background)if(C(e.value.background)){if(t.backgroundColor=e.value.background,!e.value.text&&R(e.value.background)){const a=U(e.value.background);if(a.a==null||a.a===1){const l=B(a);t.color=l,t.caretColor=l}}}else n.push(`bg-${e.value.background}`);return e.value.text&&(C(e.value.text)?(t.color=e.value.text,t.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:t}})}function Q(e,n){const t=i(()=>({text:w(e)?e.value:n?e[n]:null})),{colorClasses:a,colorStyles:l}=T(t);return{textColorClasses:a,textColorStyles:l}}function X(e,n){const t=i(()=>({background:w(e)?e.value:n?e[n]:null})),{colorClasses:a,colorStyles:l}=T(t);return{backgroundColorClasses:a,backgroundColorStyles:l}}var Z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ee(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}export{q as V,H as a,Q as b,Z as c,T as d,ee as g,X as u};