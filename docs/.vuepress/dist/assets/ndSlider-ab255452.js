import{_ as L,g as k,u as D,s as I,W as E,M as z,r as $,o as V,c as h,d as t,k as f,b as c,m as y,l as A,F as S,E as F,j as w,v as T,n as x,R as P,y as m,w as r,N as R,O as j,f as q,P as U,Q as B}from"./app-df2347b2.js";const g="/docs/assets/slider-597e0412.png";const N=i=>(U("data-v-0d899b08"),i=i(),B(),i),H={class:"nd-slider-top-left-content"},O={class:"nd-slider-top-right-content"},Q=N(()=>t("br",{style:{clear:"both"}},null,-1)),W={class:"nd-slider"},G={key:0,class:"slider-content"},J={key:1,class:"slider-content"},K={key:2},X={style:{position:"relative"}},Y={class:"nd-slider-step-dott-content"},Z={class:"nd-slider-tooltip"},ee=N(()=>t("div",{class:"nd-slider-tooltip nd-slider-arrow-content"},[t("div",{class:"nd-slider-arrow"})],-1)),te={key:3,class:"slider-content"},oe={key:4,class:"slider-content"},se={__name:"nd-slider",props:{"left-content":{type:String,default:""},"right-content":{type:String,default:""},"left-icon":{type:String,default:""},"right-icon":{type:String,default:""},"top-left-content":{type:String,default:""},"top-right-content":{type:String,default:""},"active-color":{type:String,default:"#1780e3"},showStepDott:{type:Boolean,default:!1},range:{type:Boolean,default:!1},step:{type:[Number,String,Array],default:1},max:{type:Number,default:100},min:{type:Number,default:0},modelValue:{type:[String,Number,Array],required:!1,default:""},showToolTip:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},disabledColor:{type:String,default:"#C1CBDB"},"inactive-color":{type:String,default:"#E4E7ED"}},emits:["update:modelValue"],setup(i,{emit:v}){const o=i,s=k(null),_=D(),e=I({value:0,sliderLeft:0,showToolTip:!1,showValue:0});o.modelValue&&(e.value=o.modelValue),o.range||(e.showValue=e.value),e.sliderLeft=e.value/(o.max-o.min)*100,console.log("data.sliderLeft"+e.sliderLeft),E(()=>e.value,(a,l)=>{v("update:modelValue",e.value),console.log("newVal ="+typeof a),console.log("oldVal ="+l),o.range?(a[0]==l[0]?(e.sliderLeft=a[1]/(o.max-o.min)*100,e.showValue=a[1]):(e.showValue=a[0],e.sliderLeft=a[0]/(o.max-o.min)*100),console.log("data.sliderLeft1"+e.sliderLeft)):(e.sliderLeft=e.value/(o.max-o.min)*100,e.showValue=e.value,console.log("data.sliderLeft1"+e.sliderLeft))}),z(()=>{});const n=a=>{e.showToolTip=!0,a==0?e.sliderLeft=e.value/(o.max-o.min)*100:a==1?(e.sliderLeft=e.value[0]/(o.max-o.min)*100,e.showValue=e.value[0]):a==2&&(e.sliderLeft=e.value[1]/(o.max-o.min)*100,e.showValue=e.value[1])},b=a=>{e.showToolTip=!1};return(a,l)=>{const C=$("van-icon"),M=$("van-slider");return V(),h(S,null,[t("div",H,f(o.topLeftContent),1),t("div",O,f(o.topRightContent),1),Q,t("div",W,[o.leftContent!=""?(V(),h("div",G,f(o.leftContent),1)):o.leftIcon!=""?(V(),h("div",J,[c(C,{name:o.leftIcon,size:16},null,8,["name"])])):(V(),h("div",K,[y(a.$slots,"left-icon",{},void 0,!0)])),t("div",{class:A(["nd-slider-content",{"nd-slider-content-padding":o.leftContent!=""||o.rightContent!=""||o.rightIcon!=""||o.leftIcon!=""}])},[t("div",X,[t("div",Y,[(V(!0),h(S,null,F((i.max-i.min)/i.step+1,u=>w((V(),h("div",{key:u,class:"nd-slider-step-dott"},[t("div",{class:"nd-slider-step-dott-info",style:x({backgroundColor:o.disabled?o.disabledColor:o.activeColor})},null,4)])),[[T,i.showStepDott]])),128))]),c(M,R(a.$attrs,j(a.$attrs),{range:i.range,step:i.step,"active-color":o.disabled?o.disabledColor:o.activeColor,"inactive-color":o.inactiveColor,modelValue:e.value,"onUpdate:modelValue":l[12]||(l[12]=u=>e.value=u),max:i.max,min:i.min,disabled:i.disabled}),P({_:2},[m(_).button?{name:"button",fn:r(()=>[t("div",{onMouseover:l[0]||(l[0]=u=>n(0)),onMouseleave:l[1]||(l[1]=u=>b(0)),onTouchstart:l[2]||(l[2]=u=>n(0)),onTouchend:l[3]||(l[3]=u=>b(0))},[y(a.$slots,"button",{},void 0,!0)],32)]),key:"0"}:void 0,m(_)["left-button"]?{name:"left-button",fn:r(()=>[t("div",{onMouseover:l[4]||(l[4]=u=>n(1)),onMouseleave:l[5]||(l[5]=u=>b(1)),onTouchstart:l[6]||(l[6]=u=>n(1)),onTouchend:l[7]||(l[7]=u=>b(1))},[y(a.$slots,"left-button",{},void 0,!0)],32)]),key:"1"}:void 0,m(_)["right-button"]?{name:"right-button",fn:r(()=>[t("div",{onMouseover:l[8]||(l[8]=u=>n(2)),onMouseleave:l[9]||(l[9]=u=>b(2)),onTouchstart:l[10]||(l[10]=u=>n(2)),onTouchend:l[11]||(l[11]=u=>b(2))},[y(a.$slots,"right-button",{},void 0,!0)],32)]),key:"2"}:void 0]),1040,["range","step","active-color","inactive-color","modelValue","max","min","disabled"]),w(t("div",{class:"nd-slider-tooltip-content",ref_key:"tooltip",ref:s,style:x("left:"+e.sliderLeft+"%")},[t("div",Z,f(e.showValue),1),ee],4),[[T,e.showToolTip&&n]])])],2),o.rightContent!=""?(V(),h("div",te,f(o.rightContent),1)):o.rightIcon!=""?(V(),h("div",oe,[c(C,{name:o.rightIcon,size:16},null,8,["name"])])):q("v-if",!0),y(a.$slots,"right-icon",{},void 0,!0)])],64)}}},p=L(se,[["__scopeId","data-v-0d899b08"],["__file","nd-slider.vue"]]);const d=i=>(U("data-v-d88f089a"),i=i(),B(),i),ne={class:"step-content"},le=d(()=>t("h4",null,"体验完整功能请将浏览器切换为移动端模式",-1)),de=d(()=>t("h3",{class:"p-conter"},"基础样式",-1)),ie={class:"custom-button"},ae=d(()=>t("br",null,null,-1)),re=d(()=>t("h3",{class:"p-conter"},"左右有数字",-1)),ue={class:"custom-button"},ce=d(()=>t("br",null,null,-1)),me=d(()=>t("h3",{class:"p-conter"},"上方有数字",-1)),pe={class:"custom-button"},fe=d(()=>t("h3",{class:"p-conter"},"左右有图标",-1)),ve={class:"custom-button"},ge=d(()=>t("h3",{class:"p-conter"},"左右自定义图标",-1)),Ve={class:"custom-button"},he=d(()=>t("div",{class:"custom-button1",style:{"margin-top":"-15px","margin-right":"10px"}},[t("img",{src:g})],-1)),_e=d(()=>t("div",{class:"custom-button1",style:{"margin-top":"-15px","margin-left":"10px"}},[t("img",{src:g})],-1)),be=d(()=>t("h3",{class:"p-conter"},"显示步长 小圆点",-1)),ye={class:"custom-button"},Ce=d(()=>t("h3",{class:"p-conter"},"自定义图标按钮",-1)),$e=d(()=>t("div",{class:"custom-button1"},[t("img",{src:g})],-1)),Se=d(()=>t("h3",{class:"p-conter"},"禁用滑块",-1)),we=d(()=>t("div",{class:"custom-button1"},[t("img",{src:g})],-1)),Te=d(()=>t("h3",{class:"p-conter"},"左右滑块",-1)),xe=d(()=>t("div",{class:"custom-button1"},[t("img",{src:g})],-1)),Le=d(()=>t("div",{class:"custom-button1"},[t("img",{src:g})],-1)),ke=d(()=>t("h3",{class:"p-conter"},"左右滑块 上方有数字",-1)),Ie=d(()=>t("div",{class:"custom-button1"},[t("img",{src:g})],-1)),Ue=d(()=>t("div",{class:"custom-button1"},[t("img",{src:g})],-1)),Be=d(()=>t("h3",{class:"p-conter"},"左右滑块 禁用",-1)),Ne=d(()=>t("div",{class:"custom-button1"},[t("img",{src:g})],-1)),Me=d(()=>t("div",{class:"custom-button1"},[t("img",{src:g})],-1)),De={__name:"ndSlider",setup(i){k([10,50]);const v=_=>{console.log("当前值1："+_)},o=_=>console.log("当前值："+_),s=I({sliderV1:50,sliderV2:40,sliderV3:30,sliderV4:60,sliderV5:20,sliderV6:40,sliderV7:30,sliderV8:40,sliderV9:50,sliderV10:50,sliderV11:[10,50],sliderV12:[80,250],sliderV13:[90,300],sliderV14:[10,50],sliderV15:[10,50],sliderV16:[10,50]});return(_,e)=>(V(),h("div",ne,[le,de,c(m(p),{modelValue:s.sliderV1,"onUpdate:modelValue":e[0]||(e[0]=n=>s.sliderV1=n),onChange:v},{button:r(()=>[t("div",ie,f(s.sliderV1),1)]),_:1},8,["modelValue"]),ae,re,c(m(p),{"left-content":"0","right-content":"100",modelValue:s.sliderV2,"onUpdate:modelValue":e[1]||(e[1]=n=>s.sliderV2=n),onChange:v},{button:r(()=>[t("div",ue,f(s.sliderV2),1)]),_:1},8,["modelValue"]),ce,me,c(m(p),{"top-left-content":"0","top-right-content":"100",modelValue:s.sliderV3,"onUpdate:modelValue":e[2]||(e[2]=n=>s.sliderV3=n),onChange:v},{button:r(()=>[t("div",pe,f(s.sliderV3),1)]),_:1},8,["modelValue"]),fe,c(m(p),{"left-icon":"volume","right-icon":"volume",modelValue:s.sliderV3,"onUpdate:modelValue":e[3]||(e[3]=n=>s.sliderV3=n),onChange:v},{button:r(()=>[t("div",ve,f(s.sliderV3),1)]),_:1},8,["modelValue"]),ge,c(m(p),{modelValue:s.sliderV3,"onUpdate:modelValue":e[4]||(e[4]=n=>s.sliderV3=n),onChange:v},{button:r(()=>[t("div",Ve,f(s.sliderV3),1)]),"left-icon":r(()=>[he]),"right-icon":r(()=>[_e]),_:1},8,["modelValue"]),be,c(m(p),{"left-content":"0","right-content":"100",modelValue:s.sliderV4,"onUpdate:modelValue":e[5]||(e[5]=n=>s.sliderV4=n),onChange:v,step:"10","show-step-dott":""},{button:r(()=>[t("div",ye,f(s.sliderV4),1)]),_:1},8,["modelValue"]),Ce,c(m(p),{"left-content":"0","right-content":"500",modelValue:s.sliderV5,"onUpdate:modelValue":e[6]||(e[6]=n=>s.sliderV5=n),onChange:v,max:500},{button:r(()=>[$e]),_:1},8,["modelValue"]),Se,c(m(p),{"left-content":"0","right-content":"100",modelValue:s.sliderV6,"onUpdate:modelValue":e[7]||(e[7]=n=>s.sliderV6=n),onChange:v,disabled:"",step:"10","show-step-dott":""},{button:r(()=>[we]),_:1},8,["modelValue"]),Te,c(m(p),{"left-content":"0","right-content":"100",modelValue:s.sliderV11,"onUpdate:modelValue":e[8]||(e[8]=n=>s.sliderV11=n),onChange:o,range:""},{"left-button":r(()=>[xe]),"right-button":r(()=>[Le]),_:1},8,["modelValue"]),ke,c(m(p),{"top-left-content":"0","top-right-content":"1800+",modelValue:s.sliderV12,"onUpdate:modelValue":e[9]||(e[9]=n=>s.sliderV12=n),onChange:o,range:"",max:1800},{"left-button":r(()=>[Ie]),"right-button":r(()=>[Ue]),_:1},8,["modelValue"]),Be,c(m(p),{"top-left-content":"0","top-right-content":"1800+",modelValue:s.sliderV13,"onUpdate:modelValue":e[10]||(e[10]=n=>s.sliderV13=n),onChange:o,range:"",max:1800,disabled:"",step:"180","show-step-dott":""},{"left-button":r(()=>[Ne]),"right-button":r(()=>[Me]),_:1},8,["modelValue"])]))}},ze=L(De,[["__scopeId","data-v-d88f089a"],["__file","ndSlider.vue"]]);export{ze as default};
