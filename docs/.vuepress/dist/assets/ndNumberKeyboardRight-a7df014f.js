import{n as d}from"./nd-number-keyboard-c3df0743.js";import{n as m}from"./nd-button-75920eda.js";import{_ as c,g as p,r as n,o as _,c as b,b as t,w as f,e as i,F as w}from"./app-df2347b2.js";const h={name:"ND_APP_NumberKeyboard",components:{ndNumberKeyboard:d,ndButton:m},setup(){return{show:p(!1),onInput:o=>console.log(o),onDelete:()=>console.log("删除")}}};function x(r,e,s,o,y,N){const a=n("nd-button"),l=n("nd-number-keyboard");return _(),b(w,null,[t(a,{onClick:e[0]||(e[0]=u=>o.show=!0)},{default:f(()=>[i("弹出右侧栏的键盘")]),_:1}),t(l,{show:o.show,theme:"custom","extra-key":".","close-button-text":"完成",onBlur:e[1]||(e[1]=u=>o.show=!1),onInput:o.onInput,onDelete:o.onDelete},null,8,["show","onInput","onDelete"])],64)}const B=c(h,[["render",x],["__file","ndNumberKeyboardRight.vue"]]);export{B as default};