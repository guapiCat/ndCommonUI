import{_,g as m,u as p,r as v,o as f,c as u,b as l,R as g,y as s,w as a,m as o,N as w,M as k}from"./app-df2347b2.js";const x={class:"nd-image-preview-box"},y={__name:"nd-image-preview",setup(t,{expose:d}){const r=m(null);d({ndSwipeTo:e=>{k(()=>{r.value.swipeTo(e)})}});const n=p();return(e,P)=>{const c=v("van-image-preview");return f(),u("div",x,[l(c,w(e.$attrs,{ref_key:"vanImagePreviewRef",ref:r}),g({_:2},[s(n).index?{name:"index",fn:a(()=>[o(e.$slots,"index",{},void 0,!0)]),key:"0"}:void 0,s(n).cover?{name:"cover",fn:a(()=>[o(e.$slots,"cover",{},void 0,!0)]),key:"1"}:void 0,s(n).image?{name:"image",fn:a(()=>[o(e.$slots,"image",{},void 0,!0)]),key:"2"}:void 0]),1040)])}}},i=_(y,[["__scopeId","data-v-0fecb8c0"],["__file","nd-image-preview.vue"]]);i.install=function(t){t.component(i.name,i)};export{i as n};