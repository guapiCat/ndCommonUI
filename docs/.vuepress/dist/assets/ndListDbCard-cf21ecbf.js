import{n as u,a as p}from"./nd-list-cell-3c85c6b0.js";import{i as f}from"./car-5374ec79.js";import{_ as v,g as o,o as m,c as h,b as n,w as c,P as L,Q as g,d as x}from"./app-df2347b2.js";const b=e=>(L("data-v-8597eca9"),e=e(),g(),e),C={class:"box"},w=b(()=>x("div",{class:"solt-def"}," 插槽 ",-1)),D={__name:"ndListDbCard",setup(e){const t=o([]),s=o(!1),d=o(!1);let i=[];for(let a=0;a<10;a++)i.push({title:"标题内容标题内容标题内容标题内容标题内容标题内容标题内容",text:"正文内容正文内容正文内容正文内容正文内容正文内容正文内容",src:f});const _=()=>{setTimeout(()=>{t.value=t.value.concat(i),s.value=!1,t.value.length>=40&&(d.value=!0)},1e3)};return(a,l)=>(m(),h("div",C,[n(p,{loading:s.value,"onUpdate:loading":l[0]||(l[0]=r=>s.value=r),finished:d.value,"finished-text":"没有更多了",onLoad:_},{default:c(()=>[n(u,{type:"dbcard",list:t.value},{default:c(()=>[w]),_:1},8,["list"])]),_:1},8,["loading","finished"])]))}},B=v(D,[["__scopeId","data-v-8597eca9"],["__file","ndListDbCard.vue"]]);export{B as default};
