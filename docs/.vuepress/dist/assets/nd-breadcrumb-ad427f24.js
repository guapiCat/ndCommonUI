import{_ as b,g as i,r as c,o as t,i as l,w as d,c as m,F as f,E as v,G as k,l as B,m as C,N as g,O as y}from"./app-df2347b2.js";const $={__name:"nd-breadcrumb",props:{option:Array},setup(o){const s=i(""),u=(e,n)=>{!e.to&&!e.replace||(s.value=n)};return(e,n)=>{const _=c("el-breadcrumb-item"),p=c("el-breadcrumb");return t(),l(p,g({class:"nd-breadcrumb"},e.$attrs,y(e.$attrs),{option:o.option}),{default:d(()=>[(t(!0),m(f,null,v(o.option,(a,r)=>(t(),l(_,{onClick:k(h=>u(a,r),["stop"]),class:B({active:s.value===r,disabled:a.disabled}),key:r,to:a.to,replace:a.replace},{default:d(()=>[C(e.$slots,"default",{item:a},void 0,!0)]),_:2},1032,["onClick","class","to","replace"]))),128))]),_:3},16,["option"])}}},E=b($,[["__scopeId","data-v-8eab56ac"],["__file","nd-breadcrumb.vue"]]);export{E as n};