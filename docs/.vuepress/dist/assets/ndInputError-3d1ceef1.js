import{n as p}from"./nd-input-85cec96c.js";import{_ as u,s as i,t as d,r as c,o as m,c as f,b as l,F as v,d as s}from"./app-df2347b2.js";const E={name:"",components:{ndInput:p},setup(){const e=i({var0:"",var1:"",tip:"",isErr:!1}),r=n=>{e.var1==123?(e.isErr=!0,e.tip="这是一个错误提示"):(e.isErr=!1,e.tip="")},a=d(e);return{change:r,...a}}},V=s("br",null,null,-1),_=s("br",null,null,-1);function I(e,r,a,n,b,g){const t=c("nd-input");return m(),f(v,null,[l(t,{placeholder:"普通输入框",modelValue:e.var0,"onUpdate:modelValue":r[0]||(r[0]=o=>e.var0=o),onInput:n.change,clearable:"",type:"input",isError:""},null,8,["modelValue","onInput"]),V,_,l(t,{placeholder:"输入123变err",modelValue:e.var1,"onUpdate:modelValue":r[1]||(r[1]=o=>e.var1=o),onInput:n.change,clearable:"",type:"input",isError:e.isErr,errorTips:e.tip},null,8,["modelValue","onInput","isError","errorTips"])],64)}const k=u(E,[["render",I],["__file","ndInputError.vue"]]);export{k as default};