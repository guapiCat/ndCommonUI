import{_ as m,s as R,g as i,W as $,t as y,r as V,o as f,c as v,b as l,R as k,w as s,m as p,N as g,O as h,e as c,F as b}from"./app-df2347b2.js";const x={props:{modelValue:{type:[String,Number,Boolean],required:!1,default:""}},emits:["update:modelValue"],setup(o,{emit:d,attrs:t,slots:e}){const a=R({checked:!1}),n=i();$(()=>a.checked,()=>{console.log(a.checked,"checked"),d("update:modelValue",a.checked)},{deep:!0});const r=()=>{n.value.toggleAll()};o.modelValue&&(a.checked=o.modelValue);const _=y(a);return console.log(t,"attrs"),{..._,radioGroup:n,attrs:t,slots:e,toggleAll:r}}},A={class:"comp-app-radio"};function I(o,d,t,e,a,n){const r=V("van-radio-group");return f(),v("div",A,[l(r,g({ref:"radioGroup"},e.attrs,h(e.attrs),{modelValue:o.checked,"onUpdate:modelValue":d[0]||(d[0]=_=>o.checked=_)}),k({default:s(()=>[p(o.$slots,"default",{},void 0,!0)]),_:2},[e.slots.icon?{name:"icon",fn:s(()=>[p(o.$slots,"icon",{},void 0,!0)]),key:"0"}:void 0]),1040,["modelValue"])])}const N=m(x,[["render",I],["__scopeId","data-v-2469bf23"],["__file","nd-radio.vue"]]);const w={props:{},setup(o,{emit:d,attrs:t,slots:e}){return{slots:e,attrs:t}}},B={class:"comp-app-radio-item"};function D(o,d,t,e,a,n){const r=V("van-radio");return f(),v("div",B,[l(r,g(e.attrs,h(e.attrs),{"checked-color":"#1880E3"}),k({_:2},[e.slots.default?{name:"default",fn:s(()=>[p(o.$slots,"default",{},void 0,!0)]),key:"0"}:void 0]),1040)])}const u=m(w,[["render",D],["__scopeId","data-v-653827c9"],["__file","nd-radio-item.vue"]]),S={__name:"ndRadioDefault",setup(o){const d=i("1"),t=i("4");return(e,a)=>(f(),v(b,null,[l(N,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=n=>d.value=n)},{default:s(()=>[l(u,{name:"1"},{default:s(()=>[c("选择项")]),_:1}),l(u,{name:"2"},{default:s(()=>[c("选择项")]),_:1}),l(u,{disabled:"",name:"3"},{default:s(()=>[c("选择项")]),_:1})]),_:1},8,["modelValue"]),l(u,{disabled:"",shape:"square",name:"4",modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=n=>t.value=n)},{default:s(()=>[c("选择项")]),_:1},8,["modelValue"])],64))}},q=m(S,[["__file","ndRadioDefault.vue"]]);export{q as default};