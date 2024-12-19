import{_ as V}from"./Card-DK6w0G9d.js";import{a as E,V as A}from"./aos-BaWcMvgW.js";import{i as X,b as $,d as B,e as N,f as W,g as q,h as z,j,a as O,k as F,l as L}from"./image17-sC_Aq9Kh.js";import{_ as U,c as y,w as t,o as c,a,b as n,ap as Y,ak as x,aE as D,Y as M,al as T,an as G,ao as d}from"./index-rHT5Aum8.js";import{V as S,a as m}from"./_commonjsHelpers-DRp6tQhx.js";import{v as k}from"./index-qjPzOel8.js";const H={name:"Services",components:{Card:V},data(){return{isPaused:!1,selectedServiceIndex:null,hoveredCardIndex:1,services:[{serviceId:1,title:"Prevetting",shortDescription:"Ensure compliance with regulations before inspections.",description:"Prevetting services ensure that a vessel is fully prepared for inspections by Oil majors. This involves a thorough review of the vessel's documentation, operational readiness, and compliance with industry standards to reduce the risk of vetting failures.",image:X},{serviceId:2,title:"Real-Time Navigational Audit",shortDescription:"Audit navigation performance in real-time.",description:"This service involves live monitoring and assessment of a vessel's navigation practices during operations. It helps identify potential risks, ensure adherence to safety protocols, and enhance navigational performance in compliance with regulatory requirements.",image:$},{serviceId:3,title:"ISM / ISPS Audit",shortDescription:"Ensure ISM Code compliance internally.",description:"An Internal International Safety Management (ISM) audit evaluates a vessel's compliance with the ISM Code. This service ensures that the Safety Management System (SMS) is effectively implemented and helps prepare for external audits or inspections.",image:B},{serviceId:4,title:"Pre-Rightship Inspection",shortDescription:"Prepare for Rightship vetting.",description:"Rightship inspections assess a vessel's suitability for specific charters by evaluating its safety, environmental, and operational performance. The service aims to ensure a high rating in Rightship's vetting system, enhancing the vessel's marketability.",image:N},{serviceId:5,title:"Pre-Purchasing Inspections",shortDescription:"Detailed inspections for buyers.",description:"Pre-purchasing inspections provide an in-depth evaluation of a vessel's condition before purchase. This includes a detailed assessment of its structure, machinery, documentation, and compliance with international standards to guide informed purchasing decisions.",image:W},{serviceId:6,title:"Preparation of Shipboard Manuals",shortDescription:"Develop ship-specific manuals.",description:"This service involves developing customized manuals for shipboard operations, such as safety management, security protocols, and environmental compliance. These manuals are tailored to meet regulatory standards and vessel-specific requirements.",image:q},{serviceId:7,title:"VDR Audits",shortDescription:"Comprehensive technical management.",description:"Technical operation services oversee the maintenance, repair, and overall technical performance of a vessel. This includes ensuring compliance with international regulations, optimizing operational efficiency, and managing technical resources effectively.",image:z}]}},computed:{isLargeScreen(){return this.$vuetify.display.smAndUp},firstColumnServices(){return this.services.slice(0,Math.ceil(this.services.length/2))},secondColumnServices(){return this.services.slice(Math.ceil(this.services.length/2))},animationPlayState(){return this.isPaused?"paused":"running"}},methods:{pauseScroll(){this.isPaused=!0},resumeScroll(){this.isPaused=!1},selectService(u){console.log("Pausing scrolling..."),this.isPaused=!0,this.selectedServiceIndex=u;const e=210,h=30,I=document.querySelector(".cards-container"),s=document.querySelector(".cards-wrapper"),o=Math.floor(I.offsetWidth/(e+h)),g=Math.floor(o/2),i=(u-g)*-(e+h);console.log("Selected index:",u),console.log("Calculated translateX:",i),s.style.animation="none",s.style.transform=`translateX(${i}px)`,s.style.transition="transform 0.5s ease-in-out",setTimeout(()=>{const r=getComputedStyle(s).transform;console.log("Current transform before reset:",r);const l=parseFloat(r.split(",")[4])||0;console.log("Current translateX:",l);const _=s.scrollWidth,C=_-Math.abs(l),w=25,b=15,v=C/_*w;console.log("Remaining distance:",C),console.log("Remaining time for slower animation:",v);const p=document.createElement("style");p.type="text/css";const f="scrollCardsDynamic",R=`
          @keyframes ${f} {
            0% {
              transform: translateX(${l}px);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `;p.textContent=R;const P=document.getElementById("dynamic-keyframes");P&&P.remove(),p.id="dynamic-keyframes",document.head.appendChild(p),s.style.transition="",s.offsetWidth,s.style.animation=`${f} ${v}s linear infinite`,console.log("Restarting animation with slower timing..."),console.log("Animation set to:",`${f} ${v}s linear infinite`),setTimeout(()=>{s.style.animation=`${f} ${b}s linear infinite`,console.log("Switched to regular speed:",b)},w*1e3),this.isPaused=!1},2e3)}},mounted(){E.init({duration:1e3,once:!1})}},J={class:"gradient-row"},K={class:"service-title text-wrap"},Q={class:"service-short-description"},Z={class:"service-long-description"};function ee(u,e,h,I,s,o){const g=V;return c(),y(j,{fluid:"",class:"services mt-5"},{default:t(()=>[a(m,{class:"cards-row","data-aos":"fade-up"},{default:t(()=>[a(S,{cols:"12"},{default:t(()=>[n("div",J,[n("div",{class:"cards-container",onMouseover:e[1]||(e[1]=(...i)=>o.pauseScroll&&o.pauseScroll(...i)),onMouseleave:e[2]||(e[2]=(...i)=>o.resumeScroll&&o.resumeScroll(...i))},[n("div",{class:"cards-wrapper",style:Y({animationPlayState:o.animationPlayState})},[(c(!0),x(M,null,D([...s.services,...s.services],(i,r)=>(c(),y(g,{key:r,"data-image":i.image,class:G(["card-item",{"highlighted-card":s.selectedServiceIndex===r}]),onMouseover:l=>s.hoveredCardIndex=r,onMouseleave:e[0]||(e[0]=l=>s.hoveredCardIndex=null)},{header:t(()=>[n("h1",null,d(i.title),1)]),content:t(()=>[n("p",null,d(i.shortDescription),1)]),_:2},1032,["data-image","class","onMouseover"]))),128))],4)],32)])]),_:1})]),_:1}),a(m,{class:"spacer-row"}),a(m,null,{default:t(()=>[a(S,{cols:"12",class:"text-center"},{default:t(()=>[a(m,{class:"justify-center align-center"},{default:t(()=>[a(k,{class:"mr-3 mt-n2"},{default:t(()=>e[3]||(e[3]=[T("mdi-cog")])),_:1}),e[5]||(e[5]=n("h2",{class:"font-weight-bold mb-2"},"Our Services",-1)),a(k,{class:"ml-3 mt-n2"},{default:t(()=>e[4]||(e[4]=[T("mdi-cog")])),_:1})]),_:1}),a(A,{thickness:5,color:"#007bff",class:"mb-3 border-opacity-50 centered-divider rounded-lg"}),e[6]||(e[6]=n("p",null,"Explore our professional services designed for your needs.",-1))]),_:1})]),_:1}),a(m,{class:"service-description-row mt-5","data-aos":"fade-up"},{default:t(()=>[(c(!0),x(M,null,D(s.services,(i,r)=>(c(),y(S,{key:`description-${r}`,cols:"12",md:"3",lg:"3",class:"service-description-card","data-aos":"fade-up"},{default:t(()=>[a(O,{outlined:"",class:"service-card"},{default:t(()=>[a(F,null,{default:t(()=>[n("h3",K,d(i.title),1)]),_:2},1024),a(L,null,{default:t(()=>[n("p",Q,d(i.shortDescription),1),n("p",Z,d(i.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const oe=U(H,[["render",ee],["__scopeId","data-v-62c7d223"]]);export{oe as default};
