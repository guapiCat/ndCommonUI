import{n}from"./nd-select-e78af673.js";import{_ as s,g as r,r as p,o as c,i}from"./app-df2347b2.js";const d={name:"",components:{ndSelect:n},setup(){return{state:r({var0:"",options:[{value:"Option1",label:"选项文案1"},{value:"Option2",label:"选项文案2"},{value:"Option3",label:"选项文案3"},{value:"Option4",label:"选项文案4"},{value:"Option5",label:"选项文案5"}]})}}};function u(o,t,m,e,_,f){const a=p("nd-select");return c(),i(a,{filterable:"",placeholder:"支持搜索",modelValue:e.state.var0,"onUpdate:modelValue":t[0]||(t[0]=l=>e.state.var0=l),options:e.state.options},null,8,["modelValue","options"])}const O=s(d,[["render",u],["__file","ndSelectSearch.vue"]]);export{O as default};