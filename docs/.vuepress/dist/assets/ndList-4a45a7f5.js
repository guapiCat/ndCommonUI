import{n as r,a as u}from"./nd-list-cell-3c85c6b0.js";import{i as f}from"./car-5374ec79.js";import{_ as p,g as l,o as v,c as m,b as i,w as g}from"./app-df2347b2.js";const x={class:"box"},L={__name:"ndList",setup(b){const t=l([]),o=l(!1),n=l(!1);let a=[];for(let e=0;e<10;e++)a.push({title:"标题内容",text:"正文内容",src:f});const d=()=>{setTimeout(()=>{t.value=t.value.concat(a),o.value=!1,t.value.length>=40&&(n.value=!0)},1e3)},c=(e,s)=>{console.log(e.title),console.log(s)};return(e,s)=>(v(),m("div",x,[i(u,{loading:o.value,"onUpdate:loading":s[0]||(s[0]=_=>o.value=_),finished:n.value,"finished-text":"没有更多了",onLoad:d},{default:g(()=>[i(r,{type:"mixText",list:t.value,onClick:c},null,8,["list"])]),_:1},8,["loading","finished"])]))}},w=p(L,[["__scopeId","data-v-ddbb10b8"],["__file","ndList.vue"]]);export{w as default};
