import{_ as h,r,o as a,c as u,i as n,w as m,F as s,E as b,N as f,O as g,f as p}from"./app-df2347b2.js";const V={name:"nd-radio-group",props:{modelValue:{type:String,default:""},radioList:{type:Array,default:()=>[]},size:{type:String,default:"default"},border:{type:Boolean,default:!1},radioButton:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(o,{emit:i,slots:e}){return{slots:e,onChange:_=>{i("update:modelValue",_)}}}};function B(o,i,e,l,_,k){const y=r("el-radio"),c=r("el-radio-group"),C=r("el-radio-button");return a(),u(s,null,[e.radioButton?p("v-if",!0):(a(),n(c,f({key:0,modelValue:e.modelValue,onChange:l.onChange},o.$attrs,g(o.$attrs)),{default:m(()=>[(a(!0),u(s,null,b(e.radioList,(t,d)=>(a(),n(y,{key:d,label:t.name,disabled:t.disabled,size:e.size,border:e.border},null,8,["label","disabled","size","border"]))),128))]),_:1},16,["modelValue","onChange"])),e.radioButton?(a(),n(c,f({key:1,modelValue:e.modelValue,onChange:l.onChange},o.$attrs,g(o.$attrs)),{default:m(()=>[(a(!0),u(s,null,b(e.radioList,(t,d)=>(a(),n(C,{key:d,label:t.name,disabled:t.disabled,size:e.size,border:e.border},null,8,["label","disabled","size","border"]))),128))]),_:1},16,["modelValue","onChange"])):p("v-if",!0)],64)}const z=h(V,[["render",B],["__scopeId","data-v-a0cc9591"],["__file","nd-radio-group.vue"]]);export{z as n};
