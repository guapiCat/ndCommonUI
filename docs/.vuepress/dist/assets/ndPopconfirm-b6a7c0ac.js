import{_ as b,s as C,x as g,t as k,r as A,o as d,i as y,w as l,m as Q,d as t,c as _,f,k as m,b as a,e as h,N as O,O as B,J as x,h as N,P as H,Q as S}from"./app-df2347b2.js";const E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAWRJREFUOI2lkr1NxEAQhb9Z28uROQERmg4oATo4KuCowJyEkIgQERJCAlfAdcB1gOngOsAhggBngH92CO7OGGNHvHDf87c74wf/lHQP9DYMK2djVd0H9laxTETTqvCSzfOXbBBQXG9NMNyChH23KWTAdOP0df4H8HWzPRZ4aMVzEWYATmUsEDWW02N79jZrAB9XO5EJ3OM6pJC50hyM+OSTEQBtHzQPvHJXpnluAHxbx+0bBA29oL4oA/vsBe4Zv4pUXdKaPKycjQEMgKrs/55WQpDJzzQSKSx+7WO55CUANKJXmovoHbWXemKOOuZeCzAkmfumvPRsHQOTvsQasOgzgUlZ23dUTnrgWQMQkXQAMBOY9xkimjYA3xQJaN4N1U6fanVP3XOFrCq8BFpFWrZQ7gde0gUcrtvYLNGevc0UDld1Hfo0x+lxb5XX+rjaiXxbx8tuNL93ISKpb4pEpvmfUf+lb7YXjUyJv7WKAAAAAElFTkSuQmCC";const I={name:"nd-popconfirm",props:{title:{type:String,default:""},content:{type:String,default:""},showIcon:{type:Boolean,default:!1},popWidth:{type:String,default:"250px"}},setup(e,{emits:i,slots:n}){const c=C({visible:!1}),{proxy:p}=x(),u=r=>{c.visible=!1,p.$emit("confirm",r)},s=r=>{c.visible=!1,p.$emit("cancel",r)};return g(()=>{}),{...k(c),slots:n,confirm:u,cancel:s}}},P={class:"nd-pop-title"},W={key:0,src:E,class:"nd-question-icon"},U={key:1,class:"nd-pop-titles"},w={key:2,class:"nd-bold-title"},X={key:0,class:"nd-pop-content"},K=t("div",{class:"nd-pop-block"},null,-1);function J(e,i,n,c,p,u){const s=A("el-button"),v=A("el-popover");return d(),y(v,O(e.$attrs,B(e.$attrs),{trigger:"click",width:n.popWidth,visible:e.visible,"onUpdate:visible":i[0]||(i[0]=r=>e.visible=r)}),{reference:l(()=>[Q(e.$slots,"default")]),default:l(()=>[t("div",null,[t("div",P,[n.showIcon?(d(),_("img",W)):f("v-if",!0),n.content?f("v-if",!0):(d(),_("span",U,m(n.title),1)),n.content?(d(),_("span",w,m(n.title),1)):f("v-if",!0)]),n.content?(d(),_("div",X,m(n.content),1)):f("v-if",!0),K,a(s,{size:"small",onClick:c.confirm,class:"nd-pop-btn",type:"primary"},{default:l(()=>[h("确定")]),_:1},8,["onClick"]),a(s,{size:"small",onClick:c.cancel,class:"nd-pop-btn"},{default:l(()=>[h("取消")]),_:1},8,["onClick"])])]),_:3},16,["width","visible"])}const T=b(I,[["render",J],["__file","nd-popconfirm.vue"]]);const z={name:"",components:{ndPopconfirm:T},setup(){const e=()=>{console.log("confirm")},i=()=>{console.log("cancel")};return N(()=>{}),g(()=>{}),{confirm:e,cancel:i}}},o=e=>(H("data-v-62d8a65f"),e=e(),S(),e),M=o(()=>t("span",{class:"del-btn"},"删除",-1)),$=o(()=>t("br",null,null,-1)),R=o(()=>t("div",{class:"title"},"带图标的气泡确认框:",-1)),V=o(()=>t("span",{class:"del-btn"},"删除",-1)),D=o(()=>t("div",{class:"title"},"带描述的气泡确认框:",-1)),Y=o(()=>t("span",{class:"del-btn"},"删除",-1)),Z=o(()=>t("div",{class:"title"},"自定义宽度的气泡确认框:",-1)),j=o(()=>t("span",{class:"del-btn"},"删除",-1)),F=o(()=>t("br",null,null,-1)),G=o(()=>t("div",{class:"title"},"气泡确认框的位置:",-1)),q=o(()=>t("span",{class:"del-btn"},"删除(上方靠右)",-1));function L(e,i,n,c,p,u){const s=A("nd-popconfirm",!0);return d(),_("div",null,[a(s,{title:"这是一段内容，确定要删除吗?",onConfirm:c.confirm,onCancel:c.cancel},{default:l(()=>[M]),_:1},8,["onConfirm","onCancel"]),$,R,a(s,{title:"这是一段内容，确定要删除吗?",showIcon:!0},{default:l(()=>[V]),_:1}),D,a(s,{title:"这是一段内容，确定要删除吗?",showIcon:!0,content:"带描述的气泡确认框在主要说明文字之外增加了操作相关的详细描述"},{default:l(()=>[Y]),_:1}),Z,a(s,{title:"这是一段内容，确定要删除吗?",popWidth:"400px",showIcon:!0,content:"带描述的气泡确认框在主要说明文字之外增加了操作相关的详细描述"},{default:l(()=>[j]),_:1}),F,G,a(s,{title:"这是一段内容，确定要删除吗?",placement:"top-start"},{default:l(()=>[q]),_:1})])}const et=b(z,[["render",L],["__scopeId","data-v-62d8a65f"],["__file","ndPopconfirm.vue"]]);export{et as default};
