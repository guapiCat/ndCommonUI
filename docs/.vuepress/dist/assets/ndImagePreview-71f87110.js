import"./index-c391327e.js";import{n as v}from"./index-674ad86a.js";import{_ as x,g as i,o as I,c as k,d as _,b as s,w as t,e as a,y as n,k as h,M as b}from"./app-df2347b2.js";import{n as u}from"./nd-button-75920eda.js";const j="/docs/assets/很宽的-32bbca83.png",C="/docs/assets/很长的-59d259e1.jpg";const P={class:"btn-box"},B={class:"btn-box"},z={__name:"ndImagePreview",setup(N){const l=i(!1),r=i(!1),c=i(0),f=["https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg","https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",j,C],d=i(null),w=["https://supplierstatic.oss-cn-hangzhou.aliyuncs.com/supplier/9598890442154/16734/5901151236924/03/3399868173532.jpg","https://supplierstatic.oss-cn-hangzhou.aliyuncs.com/supplier/9598890442154/16734/5901151236924/03/6900804888605.png","https://supplierstatic.oss-cn-hangzhou.aliyuncs.com/supplier/9598890442154/16734/5901151236924/03/6000804891304.jpg"],m=o=>{c.value=o},g=(o=0)=>{l.value=!0,b(()=>{d.value.ndSwipeTo(o)})},y=()=>{r.value=!0};return(o,e)=>(I(),k("div",null,[_("div",P,[s(n(u),{type:"primary",onClick:g},{default:t(()=>[a("查看图片")]),_:1})]),_("div",B,[s(n(u),{type:"primary",onClick:e[0]||(e[0]=p=>g(1))},{default:t(()=>[a("查看第二张图片")]),_:1}),s(n(u),{type:"primary",onClick:y},{default:t(()=>[a("查看零件库图片")]),_:1})]),s(n(v),{show:l.value,"onUpdate:show":e[1]||(e[1]=p=>l.value=p),images:f,onChange:m,ref_key:"ndImagePreviewRef",ref:d},{index:t(()=>[a(" 第"+h(c.value+1)+"页 ",1)]),_:1},8,["show"]),s(n(v),{show:r.value,"onUpdate:show":e[2]||(e[2]=p=>r.value=p),images:w,onChange:m},{index:t(()=>[a(" 第"+h(c.value+1)+"页 ",1)]),_:1},8,["show"])]))}},U=x(z,[["__scopeId","data-v-18fa854a"],["__file","ndImagePreview.vue"]]);export{U as default};