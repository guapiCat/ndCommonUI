import{n as m}from"./nd-number-keyboard-c3df0743.js";import{n as u}from"./nd-button-75920eda.js";import{_ as c,g as p,r as e,o as _,c as b,b as t,w as f,e as i,F as w}from"./app-df2347b2.js";const y={name:"ND_APP_NumberKeyboard",components:{ndNumberKeyboard:m,ndButton:u},setup(){return{show:p(!1),onInput:o=>console.log(o),onDelete:()=>console.log("删除")}}};function N(r,n,s,o,k,D){const a=e("nd-button"),d=e("nd-number-keyboard");return _(),b(w,null,[t(a,{onClick:n[0]||(n[0]=l=>o.show=!0)},{default:f(()=>[i("弹出配置随机数字的键盘")]),_:1}),t(d,{show:o.show,"random-key-order":"",onBlur:n[1]||(n[1]=l=>o.show=!1),onInput:o.onInput,onDelete:o.onDelete},null,8,["show","onInput","onDelete"])],64)}const I=c(y,[["render",N],["__file","ndNumberKeyboardRandom.vue"]]);export{I as default};