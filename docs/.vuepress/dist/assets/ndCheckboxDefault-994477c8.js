import{_ as m,s as h,g as f,W as k,t as v,r as b,o as i,c as C,b as u,w as d,m as _,N as x,O as V,i as g,R as y,e as r}from"./app-df2347b2.js";const $={props:{modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue","ndChange"],setup(a,{emit:o,attrs:n,slots:e}){const t=h({checked:!1}),s=f();k(()=>t.checked,()=>{o("update:modelValue",t.checkded||[])},{deep:!0});const c=()=>{s.value.toggleAll()};return a.modelValue&&(t.checked=a.modelValue),{...v(t),checkGroup:s,attrs:n,slots:e,toggleAll:c}}},q={class:"comp-app-checkbox"};function A(a,o,n,e,t,s){const c=b("van-checkbox-group");return i(),C("div",q,[u(c,x({ref:"checkGroup"},e.attrs,V(e.attrs),{modelValue:a.checked,"onUpdate:modelValue":o[0]||(o[0]=l=>a.checked=l),"checked-color":"#1880E3"}),{default:d(()=>[_(a.$slots,"default",{},void 0,!0)]),_:3},16,["modelValue"])])}const B=m($,[["render",A],["__scopeId","data-v-141abc32"],["__file","nd-checkbox.vue"]]);const I={props:{modelValue:{type:[String,Number,Boolean],default:""}},emits:["update:modelValue"],setup(a,{emit:o,attrs:n,slots:e}){const t=h({value:""}),s=f();k(()=>t.value,()=>{o("update:modelValue",t.value)});const c=()=>{s.value.toggle()};return{...v(t),checkbox:s,slots:e,attrs:n,toggle:c}}};function N(a,o,n,e,t,s){const c=b("van-checkbox");return i(),g(c,x({ref:"checkbox",class:"comp-app-checkbox-item"},e.attrs,V(e.attrs),{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=l=>a.value=l),"checked-color":"#1880E3"}),y({_:2},[e.slots.default?{name:"default",fn:d(()=>[_(a.$slots,"default",{},void 0,!0)]),key:"0"}:void 0,e.slots.icon?{name:"icon",fn:d(l=>[_(a.$slots,"icon",{scope:l},void 0,!0)]),key:"1"}:void 0]),1040,["modelValue"])}const p=m(I,[["render",N],["__scopeId","data-v-895a782c"],["__file","nd-checkbox-item.vue"]]),w={__name:"ndCheckboxDefault",setup(a){const o=f([1,4]);return(n,e)=>(i(),g(B,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=t=>o.value=t)},{default:d(()=>[u(p,{shape:"square",name:1},{default:d(()=>[r("多选项")]),_:1}),u(p,{shape:"square",name:2},{default:d(()=>[r("多选项")]),_:1}),u(p,{shape:"square",name:3,disabled:""},{default:d(()=>[r("多选项")]),_:1}),u(p,{shape:"square",name:4,disabled:""},{default:d(()=>[r("多选项")]),_:1})]),_:1},8,["modelValue"]))}},E=m(w,[["__file","ndCheckboxDefault.vue"]]);export{E as default};