import{n as f}from"./nd-datepicker-7e0b0a1e.js";import{n as w}from"./nd-button-75920eda.js";import{_,g as s,r as l,o as y,c as h,b as t,w as r,e as c,F as k}from"./app-df2347b2.js";const V={name:"ND_APP_DateTimePicker",components:{ndDatePicker:f,ndButton:w},setup(){const m=s(["12","00"]),o=s(!1),i=["hour","minute"],e=s(["12","00","00"]),u=s(!1);return{currentTime1:m,show1:o,columnsType1:i,currentTime2:e,show2:u,columnsType2:["hour","minute","second"]}}};function P(m,o,i,e,u,T){const a=l("nd-button"),d=l("nd-date-picker"),p=l("van-popup");return y(),h(k,null,[t(a,{onClick:o[0]||(o[0]=()=>e.show1=!0)},{default:r(()=>[c("选择时分")]),_:1}),t(a,{onClick:o[1]||(o[1]=()=>e.show2=!0)},{default:r(()=>[c("选择时分秒")]),_:1}),t(p,{show:e.show1,"onUpdate:show":o[3]||(o[3]=n=>e.show1=n),position:"bottom",style:{height:"30%"}},{default:r(()=>[t(d,{modelValue:e.currentTime1,"onUpdate:modelValue":o[2]||(o[2]=n=>e.currentTime1=n),title:"选择时分","columns-type":e.columnsType1},null,8,["modelValue","columns-type"])]),_:1},8,["show"]),t(p,{show:e.show2,"onUpdate:show":o[5]||(o[5]=n=>e.show2=n),position:"bottom",style:{height:"30%"}},{default:r(()=>[t(d,{modelValue:e.currentTime2,"onUpdate:modelValue":o[4]||(o[4]=n=>e.currentTime2=n),title:"选择时分秒","columns-type":e.columnsType2},null,8,["modelValue","columns-type"])]),_:1},8,["show"])],64)}const g=_(V,[["render",P],["__file","ndDateTimePickerTime.vue"]]);export{g as default};