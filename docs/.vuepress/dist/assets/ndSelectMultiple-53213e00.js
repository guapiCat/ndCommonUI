import{n as s}from"./nd-select-e78af673.js";import{_ as p,g as r,r as d,o as i,c,b as a,F as u}from"./app-df2347b2.js";const _={name:"",components:{ndSelect:s},setup(){return{state:r({var0:"",var1:"",options:[{value:"Option1",label:"选项文案1"},{value:"Option2",label:"选项文案2"},{value:"Option3",label:"选项文案3"},{value:"Option4",label:"选项文案4"},{value:"Option5",label:"选项文案5"}]})}}};function m(n,t,v,e,f,V){const o=d("nd-select");return i(),c(u,null,[a(o,{placeholder:"多选选择器",multiple:"",modelValue:e.state.var0,"onUpdate:modelValue":t[0]||(t[0]=l=>e.state.var0=l),options:e.state.options},null,8,["modelValue","options"]),a(o,{placeholder:"多选选择器-折叠",multiple:"","collapse-tags":"",modelValue:e.state.var1,"onUpdate:modelValue":t[1]||(t[1]=l=>e.state.var1=l),options:e.state.options},null,8,["modelValue","options"])],64)}const g=p(_,[["render",m],["__scopeId","data-v-56668017"],["__file","ndSelectMultiple.vue"]]);export{g as default};
