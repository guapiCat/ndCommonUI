import{n as m}from"./nd-picker-3250c4d2.js";import{_,g as i,r as t,o as f,c as p,b as a,w as v,F as k}from"./app-df2347b2.js";const P={name:"ND_APP_Picker",components:{ndPicker:m},setup(){const s=[{text:"杭州",value:"Hangzhou"},{text:"宁波",value:"Ningbo"},{text:"温州",value:"Wenzhou"},{text:"绍兴",value:"Shaoxing"},{text:"湖州",value:"Huzhou"}],e=i(""),l=i(!1);return{columns:s,onConfirm:({selectedOptions:r})=>{l.value=!1,e.value=r[0].text},fieldValue:e,showPicker:l}}};function x(s,e,l,o,r,w){const c=t("van-field"),d=t("nd-picker"),u=t("van-popup");return f(),p(k,null,[a(c,{modelValue:o.fieldValue,"onUpdate:modelValue":e[0]||(e[0]=n=>o.fieldValue=n),"is-link":"",readonly:"",label:"城市",placeholder:"选择城市",onClick:e[1]||(e[1]=n=>o.showPicker=!0)},null,8,["modelValue"]),a(u,{show:o.showPicker,"onUpdate:show":e[3]||(e[3]=n=>o.showPicker=n),round:"",position:"bottom"},{default:v(()=>[a(d,{columns:o.columns,onCancel:e[2]||(e[2]=n=>o.showPicker=!1),onConfirm:o.onConfirm},null,8,["columns","onConfirm"])]),_:1},8,["show"])],64)}const V=_(P,[["render",x],["__scopeId","data-v-fa3420d4"],["__file","ndPickerBase.vue"]]);export{V as default};
