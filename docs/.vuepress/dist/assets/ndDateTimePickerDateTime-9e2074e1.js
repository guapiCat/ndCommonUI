import{n as l}from"./nd-datepicker-7e0b0a1e.js";import{n as u}from"./nd-button-75920eda.js";import{_,g as s,r as n,o as f,c as w,b as a,w as p,e as k,F as D}from"./app-df2347b2.js";const h={name:"ND_APP_DateTimePicker",components:{ndDatePicker:l,ndButton:u},setup(){const r=s(["2021","01","01"]),e=s(!1);return{currentDate:r,show:e,showPopup:()=>{e.value=!0}}}};function P(r,e,c,t,T,v){const i=n("nd-button"),d=n("nd-date-picker"),m=n("van-popup");return f(),w(D,null,[a(i,{onClick:t.showPopup},{default:p(()=>[k("选择日期时间")]),_:1},8,["onClick"]),a(m,{show:t.show,"onUpdate:show":e[1]||(e[1]=o=>t.show=o),position:"bottom",style:{height:"45%"}},{default:p(()=>[a(d,{modelValue:t.currentDate,"onUpdate:modelValue":e[0]||(e[0]=o=>t.currentDate=o),title:"选择日期时间",type:"datetime"},null,8,["modelValue"])]),_:1},8,["show"])],64)}const B=_(h,[["render",P],["__file","ndDateTimePickerDateTime.vue"]]);export{B as default};
