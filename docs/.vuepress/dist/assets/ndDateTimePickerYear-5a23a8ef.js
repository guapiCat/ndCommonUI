import{n as i}from"./nd-datepicker-7e0b0a1e.js";import{n as u}from"./nd-button-75920eda.js";import{_,g as m,r as n,o as D,c as f,b as a,w as c,e as w,F as k}from"./app-df2347b2.js";const x={name:"ND_APP_DateTimePicker",components:{ndDatePicker:i,ndButton:u},setup(){const r=m(["2021"]),t=m(!1),s=["year"],e=()=>{t.value=!0};return{minDate:new Date(2020,0,1),maxDate:new Date(2025,5,1),currentDate:r,show:t,columnsType:s,showPopup:e}}};function h(r,t,s,e,P,y){const p=n("nd-button"),d=n("nd-date-picker"),l=n("van-popup");return D(),f(k,null,[a(p,{onClick:e.showPopup},{default:c(()=>[w("选择年")]),_:1},8,["onClick"]),a(l,{show:e.show,"onUpdate:show":t[1]||(t[1]=o=>e.show=o),position:"bottom",style:{height:"30%"}},{default:c(()=>[a(d,{modelValue:e.currentDate,"onUpdate:modelValue":t[0]||(t[0]=o=>e.currentDate=o),title:"选择年","min-date":e.minDate,"max-date":e.maxDate,"columns-type":e.columnsType},null,8,["modelValue","min-date","max-date","columns-type"])]),_:1},8,["show"])],64)}const b=_(x,[["render",h],["__file","ndDateTimePickerYear.vue"]]);export{b as default};