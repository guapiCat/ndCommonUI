import{n as f}from"./nd-picker-group-549cf933.js";import{_,s as k,g as u,W as v,t as w,r,o as V,c as C,b as t,w as i,F as P}from"./app-df2347b2.js";const g={name:"ND_APP_PickerGroup",components:{ndPickerGroup:f},setup(){const e=k({startDate:["2022","06","01"],endDate:["2023","06","01"],minDate:new Date(2020,0,1),minDate2:new Date(2020,0,1),maxDate:new Date(2025,5,1)}),a=u(""),l=u(!1);v(()=>e.startDate,d=>{console.log("val======",d);const s=d.join("/");e.minDate2=new Date(s)});const n=()=>{l.value=!1,a.value=`${e.startDate.join("/")} ${e.endDate.join("/")}`},m=()=>{console.log("cancel"),l.value=!1};return{...w(e),fieldValue:a,showPicker:l,onConfirm:n,onCancel:m}}};function x(e,a,l,n,m,d){const s=r("van-field"),p=r("van-date-picker"),c=r("nd-picker-group"),D=r("van-popup");return V(),C(P,null,[t(s,{modelValue:n.fieldValue,"onUpdate:modelValue":a[0]||(a[0]=o=>n.fieldValue=o),"is-link":"",readonly:"",label:"日期范围",placeholder:"选择日期范围",onClick:a[1]||(a[1]=o=>n.showPicker=!0)},null,8,["modelValue"]),t(D,{show:n.showPicker,"onUpdate:show":a[4]||(a[4]=o=>n.showPicker=o),round:"",position:"bottom"},{default:i(()=>[t(c,{title:"预约日期",tabs:["开始日期","结束日期"],onConfirm:n.onConfirm,onCancel:n.onCancel},{prev:i(()=>[t(p,{modelValue:e.startDate,"onUpdate:modelValue":a[2]||(a[2]=o=>e.startDate=o),"min-date":e.minDate,"max-date":e.maxDate},null,8,["modelValue","min-date","max-date"])]),next:i(()=>[t(p,{modelValue:e.endDate,"onUpdate:modelValue":a[3]||(a[3]=o=>e.endDate=o),"min-date":e.minDate2,"max-date":e.maxDate},null,8,["modelValue","min-date","max-date"])]),_:1},8,["onConfirm","onCancel"])]),_:1},8,["show"])],64)}const R=_(g,[["render",x],["__scopeId","data-v-89a63a02"],["__file","ndPickerGroupDateRange.vue"]]);export{R as default};