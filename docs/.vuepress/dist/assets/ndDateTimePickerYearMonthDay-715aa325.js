import{n as f}from"./nd-datepicker-7e0b0a1e.js";import{n as v}from"./nd-button-75920eda.js";import{_ as D,g as l,r,o as h,c as w,b as s,w as d,e as k,k as x,F as C,d as c}from"./app-df2347b2.js";const P={name:"ND_APP_DateTimePicker",components:{ndDatePicker:f,ndButton:v},setup(){const n=l(["2021","01"]),o=l(!1),t=l("选择年月日"),e=()=>{o.value=!0},i=()=>{console.log("确认：",n.value),o.value=!1,t.value=`${n.value[0]}年${n.value[1]}月${n.value[2]}日`},u=()=>{console.log("取消：",n.value),o.value=!1,t.value=`${n.value[0]}年${n.value[1]}月${n.value[2]}日`};return{minDate:new Date(2020,0,1),maxDate:new Date(2025,5,1),currentDate:n,show:o,showPopup:e,cancel:u,confirm:i,text:t}}},b=c("b",null,"时间选择器是一个div区域，它可以配合蒙层van-popup使用。自带确认和取消按钮，点击后可通过事件回调获取",-1),g=c("br",null,null,-1),V=c("br",null,null,-1);function B(n,o,t,e,i,u){const m=r("nd-button"),p=r("nd-date-picker"),_=r("van-popup");return h(),w(C,null,[b,g,V,s(m,{onClick:e.showPopup},{default:d(()=>[k(x(e.text),1)]),_:1},8,["onClick"]),s(_,{show:e.show,"onUpdate:show":o[1]||(o[1]=a=>e.show=a),position:"bottom",style:{height:"30%"}},{default:d(()=>[s(p,{modelValue:e.currentDate,"onUpdate:modelValue":o[0]||(o[0]=a=>e.currentDate=a),title:"选择年月日","min-date":e.minDate,"max-date":e.maxDate,onConfirm:e.confirm,onCancel:e.cancel},null,8,["modelValue","min-date","max-date","onConfirm","onCancel"])]),_:1},8,["show"])],64)}const A=D(P,[["render",B],["__file","ndDateTimePickerYearMonthDay.vue"]]);export{A as default};