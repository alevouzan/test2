import{_,o as r,al as l,b as n,Z as S,aP as I,ao as u,a as e,c as h,w as s,d as v,an as m}from"./index-D-8F6qoP.js";import{a as x,i as C,b as P,d as T,e as D,f as R,g as $,h as M,j as A,k as q}from"./image16-BGc7btXY.js";import{a as W,V as f}from"./aos-B_PY1d5m.js";import{_ as j}from"./Card-Z7k_yuy5.js";import{i as L}from"./image15-CqdJNZGI.js";import{a as c,V as g}from"./_commonjsHelpers-CwXPIukJ.js";import{V as y}from"./VImg-DKS76CFq.js";const N={props:{services:{type:Array,required:!0}},computed:{loopedServices(){return[...this.services,...this.services,...this.services]},slideWidth(){return 220},gapWidth(){return 10},totalAnimationDistance(){return(this.slideWidth+this.gapWidth)*this.services.length}},mounted(){this.injectDynamicKeyframes()},methods:{injectDynamicKeyframes(){const i=document.createElement("style");i.innerHTML=`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${this.totalAnimationDistance}px);
          }
        }
      `,document.head.appendChild(i)},getCardStyle(i){return{backgroundImage:`url(${i})`,backgroundSize:"cover",backgroundPosition:"center"}}}},z={class:"slider"};function B(i,t,w,V,p,a){return r(),l("div",z,[n("div",{class:"slide-track",style:u({width:`${(a.slideWidth+a.gapWidth)*a.loopedServices.length}px`})},[(r(!0),l(S,null,I(a.loopedServices,(o,d)=>(r(),l("div",{class:"slide",key:o.serviceId},[e(x,{class:"mx-auto w-100 h-100 rounded-xl",elevation:"3",color:"transparent",style:u(a.getCardStyle(o.image))},null,8,["style"])]))),128))],4)])}const b=_(N,[["render",B]]),E={name:"Services",components:{Card:j,testSlider:b},data(){return{isPaused:!1,selectedServiceIndex:null,hoveredCardIndex:1,services:[{serviceId:1,title:"Real-Time Navigational Audit",description:"The real time Navigational audit provides real-time monitoring and evaluation of a vessel's navigation practices during operations. It identifies potential risks, ensures compliance with safety protocols, and enhances navigational performance in line with regulatory requirements.",image:C},{serviceId:2,title:"Pre-vetting",description:"Pre-vetting inspection ensure that a tanker vessel is fully prepared for SIRE inspections conducted by oil majors. These services include a comprehensive review of the vessel's documentation, an evaluation of the seafarers' knowledge, an assessment of technical operational readiness, and a verification of compliance with industry standards. Our Company can provide full support preparing the Vessel for the inspection and support the Crew member during the inspection.",image:P},{serviceId:3,title:"ISM / ISPS Audit",description:" An Internal  (ISM-ISPS -MLC ) audit evaluates a vessel's compliance with the ISM -ISPS Code and MLC requirements. This service ensures that the Safety Management System (SMS) is effectively implemented and helps prepare for external audits or inspections.",image:T},{serviceId:4,title:"Pre Rightship",description:"Pre-RightShip inspections evaluate a vessel's readiness and compliance with the latest RISQ requirements by assessing its safety, environmental, and operational performance. This service aims to achieve a high rating in RightShip's vetting system, enhancing the vessel's marketability and maximizing its acceptance period.",image:D},{serviceId:5,title:"Pre-Purchasing Inspections",description:"Pre-purchasing inspections provide an in-depth evaluation of a vessel's condition before purchase. This includes a detailed assessment of its structure, machinery, documentation, and compliance with international standards to guide informed purchasing decisions.",image:R},{serviceId:6,title:"Preparation of Shipboard Manuals",description:"This service involves developing customized manuals for shipboard operations, such as safety management, security protocols, and environmental compliance. These manuals are tailored to meet regulatory standards and vessel-specific requirements.",image:L},{serviceId:7,title:"VDR audits",description:"VDR (Voyage Data Recorder) audits involve the detailed examination and analysis of a vessel's recorded data to evaluate compliance with regulatory requirements and identify areas for improvement in navigational practices. These audits ensure the proper functioning of the VDR system and provide valuable insights for enhancing safety, operational efficiency, and incident prevention.",image:$}]}},computed:{isLargeScreen(){return this.$vuetify.display.smAndUp}},methods:{},mounted(){W.init({duration:1e3,once:!1})}},K={class:"service-title text-wrap text-center"},O={class:"service-short-description text-center"},X={class:"service-long-description"};function F(i,t,w,V,p,a){const o=b;return r(),h(M,{fluid:"",class:"services"},{default:s(()=>[e(c,{class:"cards-row","data-aos":"fade-up"},{default:s(()=>[e(o,{services:p.services},null,8,["services"])]),_:1}),e(c,{class:"mt-n10"},{default:s(()=>[e(g,{cols:"12",class:"text-center"},{default:s(()=>[e(c,{class:"justify-center align-center"},{default:s(()=>[e(y,{class:"mr-3 mt-n2"},{default:s(()=>t[0]||(t[0]=[v("mdi-cog")])),_:1}),t[2]||(t[2]=n("h2",{class:"font-weight-bold mb-2"},"Our Services",-1)),e(y,{class:"ml-3 mt-n2"},{default:s(()=>t[1]||(t[1]=[v("mdi-cog")])),_:1})]),_:1}),e(f,{thickness:5,color:"#007bff",class:"mb-3 border-opacity-50 centered-divider rounded-lg"}),t[3]||(t[3]=n("p",{class:"mx-2"},"Explore our professional services designed for your needs.",-1))]),_:1})]),_:1}),e(c,{class:"service-description-row mt-5","data-aos":"fade-up"},{default:s(()=>[(r(!0),l(S,null,I(p.services,(d,k)=>(r(),h(g,{key:`description-${k}`,cols:"12",md:"3",lg:"3",class:"service-description-card","data-aos":"fade-up"},{default:s(()=>[e(x,{outlined:"",class:"service-card"},{default:s(()=>[e(A,null,{default:s(()=>[n("h3",K,m(d.title),1)]),_:2},1024),e(f,{color:"primary",thickness:1,class:"border-opacity-50"}),e(q,null,{default:s(()=>[n("p",O,m(d.shortDescription),1),n("p",X,m(d.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const ee=_(E,[["render",F],["__scopeId","data-v-d48db4b2"]]);export{ee as default};