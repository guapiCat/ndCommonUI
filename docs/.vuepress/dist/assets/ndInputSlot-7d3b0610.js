import{n as p}from"./nd-input-0785611b.js";import{s as _}from"./SvgIcon-8156b278.js";import{_ as m,g as u,r,o as f,c as v,b as n,w as a,e as V,F as g,d as s}from"./app-df2347b2.js";import"./SvgIcon.vue_vue_type_style_index_0_scoped_28cca203_lang-4ed993c7.js";const x={props:{},components:{ndAppInput:p,svgIcon:_},setup(d,{slots:t,attrs:c}){return{str:u("测试")}}},b=s("div",{class:"title-input"},"使用label插槽",-1),I=s("div",{class:"cut-line"},null,-1),N=s("div",{class:"title-input"},"使用插槽left-icon覆盖图标",-1),h=s("div",{class:"cut-line"},null,-1),B=s("div",{class:"title-input"},"使用插槽right-icon覆盖图标",-1);function S(d,t,c,o,T,U){const l=r("nd-app-input"),i=r("svg-icon");return f(),v(g,null,[b,n(l,{modelValue:o.str,"onUpdate:modelValue":t[0]||(t[0]=e=>o.str=e),label:"测试标题"},{label:a(()=>[V(" 新label ")]),_:1},8,["modelValue"]),I,N,n(l,{modelValue:o.str,"onUpdate:modelValue":t[1]||(t[1]=e=>o.str=e)},{"left-icon":a(()=>[n(i,{iconName:"icon-icon-Team"})]),_:1},8,["modelValue"]),h,B,n(l,{modelValue:o.str,"onUpdate:modelValue":t[2]||(t[2]=e=>o.str=e)},{"right-icon":a(()=>[n(i,{iconName:"icon-icon-Team"})]),_:1},8,["modelValue"])],64)}const F=m(x,[["render",S],["__file","ndInputSlot.vue"]]);export{F as default};