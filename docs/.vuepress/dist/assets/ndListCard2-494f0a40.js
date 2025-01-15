import{n as _,a as u}from"./nd-list-cell-3c85c6b0.js";import{i as f}from"./car-5374ec79.js";import{_ as p,g as s,o as m,c as v,b as o,w as d,f as x}from"./app-df2347b2.js";const g={class:"box"},L={__name:"ndListCard2",setup(h){const t=s([]),e=s(!1),l=s(!1);let n=[];for(let a=0;a<10;a++)n.push({title:"标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容",text:"正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容",src:f,selected:!1});const r=()=>{setTimeout(()=>{t.value=t.value.concat(n),e.value=!1,t.value.length>=40&&(l.value=!0)},1e3)};return(a,i)=>(m(),v("div",g,[o(u,{loading:e.value,"onUpdate:loading":i[0]||(i[0]=c=>e.value=c),finished:l.value,"finished-text":"没有更多了",onLoad:r},{default:d(()=>[o(_,{type:"card2",list:t.value},{default:d(()=>[x(` <template #right>\r
					<button>插槽</button>\r
				</template>\r
				<template #title>\r
					<div class="title">插槽</div>\r
				</template>\r
				<template #text>\r
					<div class="text">插槽</div>\r
				</template> `)]),_:1},8,["list"])]),_:1},8,["loading","finished"])]))}},y=p(L,[["__scopeId","data-v-8148c297"],["__file","ndListCard2.vue"]]);export{y as default};
