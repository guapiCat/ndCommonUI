import{n as y,a as _}from"./nd-form-item-0c408c3d.js";import{n as b}from"./nd-input-85cec96c.js";import{n as v}from"./nd-button-b0caaf9a.js";import{_ as g,s as V,t as c,r as s,o as A,c as k,b as l,w as n,e as a}from"./app-df2347b2.js";const C={name:"",components:{ndForm:y,ndFormItem:_,ndButton:v,ndInput:b},setup(){const e=V({form:{activity:"",name:"",male:"",type:""},form2:{activity:"",name:"",male:"",type:""},form3:{activity:"",name:"",male:"",type:""},labelPosition:"right",size:"small",rule:{}}),o=()=>{console.log(e.form)},p=f=>{e.labelPosition=f};return{...c(e),onSubmit:o,changeAlgin:p}}};function F(e,o,p,m,f,z){const r=s("nd-button"),d=s("nd-input"),i=s("nd-form-item"),u=s("nd-form");return A(),k("section",null,[l(r,{type:"primary",onClick:o[0]||(o[0]=t=>m.changeAlgin("left"))},{default:n(()=>[a("左对齐")]),_:1}),a("  "),l(r,{type:"primary",onClick:o[1]||(o[1]=t=>m.changeAlgin("top"))},{default:n(()=>[a("顶部")]),_:1}),a("  "),l(r,{type:"primary",onClick:o[2]||(o[2]=t=>m.changeAlgin("right"))},{default:n(()=>[a("右对齐")]),_:1}),l(u,{class:"forms",ref:"formRef",model:e.form,rules:e.rule,"label-width":"120px","label-position":e.labelPosition,size:e.size},{default:n(()=>[l(i,{label:"Activity",prop:"activity"},{default:n(()=>[l(d,{modelValue:e.form.activity,"onUpdate:modelValue":o[3]||(o[3]=t=>e.form.activity=t)},null,8,["modelValue"])]),_:1}),l(i,{label:"Type",prop:"type"},{default:n(()=>[l(d,{modelValue:e.form.type,"onUpdate:modelValue":o[4]||(o[4]=t=>e.form.type=t)},null,8,["modelValue"])]),_:1}),l(i,{label:"Name",prop:"name"},{default:n(()=>[l(d,{modelValue:e.form.name,"onUpdate:modelValue":o[5]||(o[5]=t=>e.form.name=t)},null,8,["modelValue"])]),_:1}),l(i,{label:"Male",prop:"male"},{default:n(()=>[l(d,{modelValue:e.form.male,"onUpdate:modelValue":o[6]||(o[6]=t=>e.form.male=t)},null,8,["modelValue"])]),_:1}),l(i,{label:" "},{default:n(()=>[l(r,{type:"primary",onClick:m.onSubmit},{default:n(()=>[a("保存")]),_:1},8,["onClick"]),a("  "),l(r,null,{default:n(()=>[a("取消")]),_:1})]),_:1})]),_:1},8,["model","rules","label-position","size"])])}const N=g(C,[["render",F],["__scopeId","data-v-3d59cef9"],["__file","ndFormAlign.vue"]]);export{N as default};