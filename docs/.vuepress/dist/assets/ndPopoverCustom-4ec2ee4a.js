import{n as l}from"./nd-popover-462d9fc6.js";import{n as u}from"./nd-button-75920eda.js";import{_ as m,g as v,r as c,o as s,i as f,w as r,b,e as x,d as k,c as a,F as w,E as h,k as _}from"./app-df2347b2.js";const C={name:"ND_APP_Popover",components:{ndPopover:l,ndButton:u},setup(){const t=v(!1);return{show:t,actions:[{text:"选项一",number:1},{text:"选项二",number:100},{text:"选项三",number:50}],clickAct:o=>{console.log("item:",o),t.value=!1}}}},P={class:"wrapper"},B=["onClick"];function g(t,n,p,o,y,A){const d=c("nd-button"),i=c("nd-popover");return s(),f(i,{show:o.show,"onUpdate:show":n[0]||(n[0]=e=>o.show=e)},{reference:r(()=>[b(d,{type:"primary"},{default:r(()=>[x("自定义内容")]),_:1})]),default:r(()=>[k("div",P,[(s(!0),a(w,null,h(o.actions,e=>(s(),a("div",{onClick:N=>o.clickAct(e)},_(e.text)+", "+_(e.number),9,B))),256))])]),_:1},8,["show"])}const F=m(C,[["render",g],["__scopeId","data-v-91bb7316"],["__file","ndPopoverCustom.vue"]]);export{F as default};
