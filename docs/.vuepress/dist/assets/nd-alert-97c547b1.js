import{_ as B,a6 as p,a7 as q,a8 as w,a9 as S,s as x,S as F,x as I,M as T,t as b,r as m,o as l,c as o,b as A,w as C,i as y,aa as h,f as i,d,k as r,l as k}from"./app-df2347b2.js";const D={props:{desType:{type:Boolean,required:!1,default:!1},correlation:{type:String,required:!0,default:"相关操作"},title:{type:String,required:!0,default:""},type:{type:String,required:!1,default:"info"},description:{type:String,required:!1,default:""},center:{type:Boolean,required:!1,default:!1},closable:{type:Boolean,required:!1,default:!1},closeText:{type:String,required:!1,default:""},showIcon:{type:Boolean,required:!1,default:!1},effect:{type:String,required:!1,default:"light"},isfold:{type:Boolean,required:!1,default:!1}},name:"nd-alert",components:{SuccessFilled:p,InfoFilled:q,WarningFilled:w,CircleCloseFilled:S},emits:["corrButtonClick","closeButtonClick"],setup(a,{emit:n,slots:e}){const t=x({party:!0}),v=F(()=>a.type=="primary"?"InfoFilled":a.type=="success"?"SuccessFilled":a.type=="warning"?"WarningFilled":a.type=="danger"?"CircleCloseFilled":"InfoFilled");I(()=>{T(()=>{f()})});const g=async()=>{try{n("corrButtonClick")}catch{}},_=async()=>{try{n("closeButtonClick")}catch{}},f=async()=>{try{let c=0,u=document.querySelector(".nd_con_description");u&&(c=u.clientHeight),c>24?u.value=!0:u.value=!1}catch(c){console.log(c)}},s=async()=>{try{t.party=!t.party}catch(c){console.log(c)}};return{...b(t),slots:e,checkHeight:f,switchover:s,corrClick:g,closeAlert:_,typeComputed:v}}},z={key:0,class:"nd_alert_div"},H={class:"nd_alert_content el-alert__content"},N={class:"nd_con_title"},V={key:1,class:"nd_alert_div"},M={class:"nd_alert_content el-alert__content"},W={class:"nd_con_title2"};function E(a,n,e,t,v,g){const _=m("el-icon"),f=m("el-alert");return l(),o("div",{class:k(["nd_alert",{nd_primary:e.type=="primary",nd_success:e.type=="success",nd_warning:e.type=="warning",nd_danger:e.type=="danger",nd_info:!e.type}])},[A(f,{class:k(e.desType?"nd_correl":""),closable:e.closable,"close-text":e.closeText,center:e.center,onClose:t.closeAlert},{default:C(()=>[e.title&&e.description?(l(),o("div",z,[e.showIcon?(l(),y(_,{key:0,class:"nd_el-icon",size:32},{default:C(()=>[(l(),y(h(t.typeComputed)))]),_:1})):i("v-if",!0),d("div",H,[d("span",N,r(e.title),1),e.desType?(l(),o("span",{key:0,class:"nd_con_corr",onClick:n[0]||(n[0]=(...s)=>t.corrClick&&t.corrClick(...s))},r(e.correlation),1)):i("v-if",!0),d("p",{class:k(["nd_con_description",{nd_con_party:!e.isfold||!a.party}])},r(e.description),3),e.isfold?(l(),o("span",{key:1,class:"nd_con_foldBotton",onClick:n[1]||(n[1]=(...s)=>t.switchover&&t.switchover(...s))},r(a.party?"收起":"展开"),1)):i("v-if",!0)])])):(l(),o("div",V,[e.showIcon?(l(),y(_,{key:0,class:"nd_el-icon",size:18},{default:C(()=>[(l(),y(h(t.typeComputed)))]),_:1})):i("v-if",!0),d("div",M,[d("span",W,r(e.title||e.description),1),e.desType?(l(),o("span",{key:0,class:"nd_con_corr2",onClick:n[2]||(n[2]=(...s)=>t.corrClick&&t.corrClick(...s))},r(e.correlation),1)):i("v-if",!0)])]))]),_:1},8,["class","closable","close-text","center","onClose"])],2)}const G=B(D,[["render",E],["__scopeId","data-v-c1f470f6"],["__file","nd-alert.vue"]]);export{G as n};