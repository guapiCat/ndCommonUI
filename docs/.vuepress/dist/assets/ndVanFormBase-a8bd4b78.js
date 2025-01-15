import{_ as p,s as f,t as _,r as i,o as b,c as g,b as t,w as d,m as y,N as A,O as S,l as v,h as F,x as B,e as $,d as u,P as I,Q as q}from"./app-df2347b2.js";import{n as N}from"./nd-input-0785611b.js";import{n as T}from"./nd-button-75920eda.js";import{n as k}from"./nd-switch-1067aebd.js";import{s as z}from"./SvgIcon-8156b278.js";import"./SvgIcon.vue_vue_type_style_index_0_scoped_28cca203_lang-4ed993c7.js";const U={emits:["submit","failed"],props:{class:{type:[String,Object],required:!1,default:""},id:{type:String,required:!1,default:""}},setup(e,a){const l=f({}),o=n=>{a.emit("submit",n)},m=n=>{a.emit("failed",n)};return{..._(l),submit:o,failed:m}}},C=["id"];function M(e,a,l,o,m,s){const n=i("van-form");return b(),g("div",{class:v(l.class),id:l.id},[t(n,A({onSubmit:o.submit,onFailed:o.failed},S(e.$attrs),e.$attrs),{default:d(()=>[y(e.$slots,"default")]),_:3},16,["onSubmit","onFailed"])],10,C)}const O=p(U,[["render",M],["__file","nd-van-form.vue"]]);const P={name:"",components:{ndVanForm:O,ndAppInput:N,ndAppButton:T,ndSwitch:k,svgIcon:z},setup(){const e=f({formData:{name:"",age:"",icon:"",switch:!1},switchAlign:!0});F(()=>{}),B(()=>{});const a=s=>{alert("表单校验成功"),console.log("submit=======",s,e.formData)},l=s=>{alert("表单校验失败"),console.log("faild=======",s,e.formData)},o=s=>s>0&&s<=10;return{..._(e),submit:a,failed:l,validator1:o}}},h=e=>(I("data-v-5905c16e"),e=e(),q(),e),R=h(()=>u("h4",null,"通过配置表单内容，配置表单校验规则，进行快速提交",-1)),j={class:"set-div"},E=h(()=>u("b",null,"切换label间距：",-1));function H(e,a,l,o,m,s){const n=i("nd-app-input"),V=i("svg-icon"),c=i("nd-switch"),w=i("nd-app-button"),D=i("nd-van-form");return b(),g("div",null,[R,t(D,{onSubmit:o.submit,onFailed:o.failed,class:v(e.switchAlign?"changeLf":""),id:"myForm"},{default:d(()=>[t(n,{modelValue:e.formData.name,"onUpdate:modelValue":a[0]||(a[0]=r=>e.formData.name=r),label:"用户名",name:"用户名",placeholder:"校验空值",labelAlignType:"",rules:[{required:!0,message:"请填写非空值"}]},null,8,["modelValue"]),t(n,{modelValue:e.formData.age,"onUpdate:modelValue":a[1]||(a[1]=r=>e.formData.age=r),label:"年龄",name:"年龄",placeholder:"校验1-10",labelAlignType:"",rules:[{validator:o.validator1,message:"请填写1-10数字"}]},null,8,["modelValue","rules"]),t(n,{modelValue:e.formData.icon,"onUpdate:modelValue":a[2]||(a[2]=r=>e.formData.icon=r),label:"图标",name:"图标",placeholder:"校验空值",labelAlignType:"",rules:[{required:!0,message:"请填写非空值"}]},{"right-icon":d(()=>[t(V,{iconName:"icon-icon-RightArrow"})]),_:1},8,["modelValue"]),t(n,{name:"switch",label:"开关",labelAlignType:"",rules:[{required:!0,message:"请打开开关"}]},{input:d(()=>[t(c,{checked:e.formData.switch,size:"21px",name:"开关"},null,8,["checked"])]),_:1}),t(w,{type:"primary",size:"small","native-type":"submit",class:"submit"},{default:d(()=>[$(" 表单提交 ")]),_:1})]),_:1},8,["onSubmit","onFailed","class"]),u("div",j,[E,t(c,{modelValue:e.switchAlign,"onUpdate:modelValue":a[3]||(a[3]=r=>e.switchAlign=r),size:"21px"},null,8,["modelValue"])])])}const X=p(P,[["render",H],["__scopeId","data-v-5905c16e"],["__file","ndVanFormBase.vue"]]);export{X as default};
