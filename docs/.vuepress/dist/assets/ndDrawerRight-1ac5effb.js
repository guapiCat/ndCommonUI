import{n as c}from"./nd-drawer-15714bd9.js";import{_ as f,g as v,r as s,o as p,c as u,b as n,w as a,e as i,F as _}from"./app-df2347b2.js";const y={name:"",components:{ndDrawer:c},setup(){return{state:v({var0:!1,direction:"rtl"}),change:l=>{console.log(l)}}}};function g(d,t,l,e,w,k){const o=s("el-button"),m=s("nd-drawer");return p(),u(_,null,[n(o,{type:"primary",onClick:t[0]||(t[0]=r=>{e.state.direction="ttb",e.state.var0=!0})},{default:a(()=>[i("顶部打开")]),_:1}),n(o,{type:"primary",onClick:t[1]||(t[1]=r=>{e.state.direction="rtl",e.state.var0=!0})},{default:a(()=>[i("右侧打开")]),_:1}),n(o,{type:"primary",onClick:t[2]||(t[2]=r=>{e.state.direction="btt",e.state.var0=!0})},{default:a(()=>[i("底部打开")]),_:1}),n(o,{type:"primary",onClick:t[3]||(t[3]=r=>{e.state.direction="ltr",e.state.var0=!0})},{default:a(()=>[i("左部打开")]),_:1}),n(m,{modelValue:e.state.var0,"onUpdate:modelValue":t[4]||(t[4]=r=>e.state.var0=r),direction:e.state.direction},null,8,["modelValue","direction"])],64)}const x=f(y,[["render",g],["__file","ndDrawerRight.vue"]]);export{x as default};
