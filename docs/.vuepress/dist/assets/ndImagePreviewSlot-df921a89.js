import"./index-c391327e.js";import{n as v}from"./index-674ad86a.js";import{_ as p,g as t,o as w,c as f,d as a,b as c,w as n,e as u,y as r,f as g}from"./app-df2347b2.js";import{n as h}from"./nd-button-75920eda.js";const d="/docs/assets/video-4b85e003.mp4",x="/docs/assets/video2-d04308b7.mp4";const I={class:"btn-box"},b=["src"],y={__name:"ndImagePreviewSlot",setup(P){const e=t(!1),i=[d,x,d],m=["https://www.w3school.com.cn/i/movie.ogg","https://www.w3school.com.cn/i/movie.ogg"],_=t("");_.value=i[0];const l=()=>{e.value=!0};return(B,s)=>(w(),f("div",null,[a("div",I,[c(r(h),{type:"primary",onClick:l},{default:n(()=>[u("查看视频")]),_:1})]),c(r(v),{show:e.value,"onUpdate:show":s[0]||(s[0]=o=>e.value=o),images:m},{image:n(({src:o})=>[a("video",{class:"video",src:o,controls:""},[g(' <source :src="src" /> ')],8,b)]),_:1},8,["show"])]))}},C=p(y,[["__scopeId","data-v-faf839df"],["__file","ndImagePreviewSlot.vue"]]);export{C as default};
