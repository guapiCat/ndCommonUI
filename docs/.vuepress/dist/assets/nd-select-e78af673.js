import{_ as f,g as _,r as u,o as n,i as c,w as d,c as i,F as g,E as v,R as b,m as y,N as h,O as C}from"./app-df2347b2.js";const V={name:"nd-select",props:{modelValue:{type:[String,Array,Number],default:""},options:{type:Array,default:[]},prop:{type:Object,default:{value:"value",label:"label"}}},emits:["update:modelValue"],setup(l,{emit:o,slots:e}){const a=r=>{o("update:modelValue",r)},s=_();return{slots:e,select:s,onChange:a}}};function k(l,o,e,a,s,r){const p=u("el-option"),m=u("el-select");return n(),c(m,h(l.$attrs,C(l.$attrs),{modelValue:e.modelValue,onChange:a.onChange,class:"nd-select",ref:"select"}),{default:d(()=>[(n(!0),i(g,null,v(e.options,t=>(n(),c(p,{key:t[e.prop.value],label:t[e.prop.label],value:t[e.prop.value]},b({_:2},[a.slots.default?{name:"default",fn:d(()=>[y(l.$slots,"default",{item:t})]),key:"0"}:void 0]),1032,["label","value"]))),128))]),_:3},16,["modelValue","onChange"])}const B=f(V,[["render",k],["__file","nd-select.vue"]]);export{B as n};
