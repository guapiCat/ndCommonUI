import{B as D}from"./ndButton-45544aac.js";import{_ as I,t as N,g as y,h as U,r as B,o as m,i as h,d as a,b as d,w as s,j as A,n as P,e as r,k as b,c as V,f as C,l as z,m as k,v as E,T as L,p as R,u as j,q as F,s as M,x as W,y as S,z as G,A as H,F as J}from"./app-df2347b2.js";const K={mountPoint:{required:!1,default:"body",type:String},type:{required:!1,default:"info",validator(n){return["default","warning","info","success"].includes(n)}},width:{required:!1,default:400,type:Number},modelValue:{type:Boolean,default:!1},title:{type:String,default:"提示"},message:{type:String,default:"内容信息"},showConfirmBtn:{type:Boolean,default:!0},showCancelBtn:{type:Boolean,default:!0},confirmBtnText:{type:String,default:"确定"},cancelBtnText:{type:String,default:"取消"},showClose:{type:Boolean,default:!0}};const O={components:{BeeButton:D},name:"ndConfirm",emits:["update:modelValue","confirm","cancel"],setup(n,{emit:o}){console.log(n);const{type:u,modelValue:e}=N(n),p=y(null),c=y(!1);c.value=e.value;const l=()=>{c.value=!1,setTimeout(()=>{o("cancel"),o("update:modelValue",c.value)},200)},f=()=>{i.value={success:u.value==="success",warning:u.value==="warning",info:u.value==="info",default:u.value==="default"}},i=y({}),t=()=>{o("confirm")};return U(()=>{f()}),{localValue:c,className:i,newDimConfirmContainer:p,cancel:l,save:t}},props:K},Q={class:"newDimConfirm"},X={class:"tc-cmnTit"},Y={class:"confirmContentContainer"},Z={class:"confirmContent"},$={key:0,class:"tc-btn-box"};function ee(n,o,u,e,p,c){const l=B("bee-button");return m(),h(R,{to:n.mountPoint},[a("div",Q,[d(L,{name:"fade",persisted:""},{default:s(()=>[A(a("div",{style:P({width:n.width+"px"}),class:"newDimConfirmContainer",ref:"newDimConfirmContainer"},[a("div",X,[r(b(n.title)+" ",1),n.showClose?(m(),V("i",{key:0,class:"tc-close",onClick:o[0]||(o[0]=(...f)=>e.cancel&&e.cancel(...f))},"×")):C("v-if",!0)]),a("div",Y,[a("i",{class:z([e.className,"confirmContentIcon"])},null,2),a("div",Z,[k(n.$slots,"default",{},()=>[r(b(n.message),1)],!0)])]),k(n.$slots,"footer",{},()=>[n.showConfirmBtn||n.showCancelBtn?(m(),V("div",$,[n.showConfirmBtn?(m(),h(l,{key:0,type:"primary",onClick:e.save,style:{"margin-right":"20px"}},{default:s(()=>[r(b(n.confirmBtnText),1)]),_:1},8,["onClick"])):C("v-if",!0),n.showCancelBtn?(m(),h(l,{key:1,type:"warning",onClick:e.cancel},{default:s(()=>[r(b(n.cancelBtnText),1)]),_:1},8,["onClick"])):C("v-if",!0)])):C("v-if",!0)],!0)],4),[[E,e.localValue]])]),_:3})])],8,["to"])}const q=I(O,[["render",ee],["__scopeId","data-v-96e17ca7"],["__file","ndConfirm.vue"]]),oe={modelValue:{type:String,required:!0},placeholder:{type:String,required:!1,default:"请输入内容"},disabled:{type:Boolean,required:!1,default:!1}},ne=["update:modelValue","input"];const te={class:"beeInputContainer"},le=["value","placeholder","disabled"],se={__name:"beeInput",props:oe,emits:ne,setup(n,{emit:o}){const u=n,{disabled:e,modelValue:p,placeholder:c}=N(u),l=j(),f=F(),i=y("");i.value=p.value;const t=f.maxLength,v=M({paddingLeft:null,paddingRight:null}),_=y(null),x=y(null),T=w=>{i.value=w.target.value,t&&(i.value=i.value.substring(0,parseInt(t))),e.value||(o("update:modelValue",i.value),o("input",w))};return W(()=>{l.before&&(v.paddingLeft=_.value.offsetWidth+"px"),l.after&&(v.paddingRight=x.value.offsetWidth+"px")}),(w,g)=>(m(),V("div",te,[a("div",null,[a("input",{value:i.value,onInput:T,class:"beeInput",placeholder:S(c),disabled:S(e),style:P(v),type:"text"},null,44,le),a("div",{class:"beeInputBefore",ref_key:"before",ref:_},[k(w.$slots,"before",{},void 0,!0)],512),a("div",{class:"beeInputAfter",ref_key:"after",ref:x},[k(w.$slots,"after",{},void 0,!0)],512)])]))}},ae=I(se,[["__scopeId","data-v-c3280d65"],["__file","beeInput.vue"]]),re=({type:n="info",title:o,message:u,confirmBtnText:e,cancelBtnText:p,confirmOperate:c,cancelOperate:l,showConfirmBtn:f,showCancelBtn:i,showClose:t})=>new Promise((v,_)=>{if(document.querySelectorAll(".newDimConfirmParent").length){_("已经有dom弹出层");return}const T=G(q,{mountPoint:".newDimConfirmParent",modelValue:!0,type:n,title:o,message:u,confirmBtnText:e,showConfirmBtn:f,cancelBtnText:p,showCancelBtn:i,showClose:t,onConfirm:()=>{w(),c&&c(),v()},onCancel:()=>{w(),l&&l(),_(new Error)}}),w=()=>{document.body.removeChild(g)},g=document.createElement("div");g.setAttribute("class","newDimConfirmParent"),document.body.appendChild(g),H(T,g)}),ie={name:"testConfirm",components:{BeeConfirm:q,BeeButton:D,BeeInput:ae},setup(){const n=y({show0:!1,show1:!1,show2:!1,show3:!1,show4:!1,show5:!1});return{loadConfirm:()=>{re({type:"warning",message:"亲没什么等方面省得麻烦没什么等方面什么都没法没什么地方没什么大米饭没收到免费吗什么都没法没收到免费吗什么都没法没收到免费没什么地方",title:"删除提示",confirmBtnText:"确定按钮",cancelBtnText:"取消按钮",confirmOperate(){alert("确定回调")},cancelOperate(){alert("取消回调")},showCancelBtn:!0,showConfirmBtn:!0,showClose:!1})},showConfirm:n,confirm:()=>{n.value={show0:!1,show1:!1,show2:!1,show3:!1,show4:!1,show5:!1}},cancel:()=>{console.log("取消回调，自动关闭")}}}},fe=a("h3",null,"组件调用方式",-1),de=a("br",null,null,-1),me=a("h3",null,"插槽",-1),ue=a("br",null,null,-1),ce={style:{display:"flex","justify-content":"space-between",padding:"10px 20px"}},Ce=a("h3",null,"当做遮罩层使用",-1),he=a("br",null,null,-1),we=a("h3",null,"手动调用提示弹框",-1),pe=a("br",null,null,-1);function ye(n,o,u,e,p,c){const l=B("bee-button"),f=B("bee-confirm"),i=B("bee-input");return m(),V(J,null,[fe,de,d(l,{type:"primary",onClick:o[0]||(o[0]=t=>e.showConfirm.show0=!0),style:{"margin-right":"10px"}},{default:s(()=>[r("打开默认组件弹框")]),_:1}),d(l,{type:"primary",onClick:o[1]||(o[1]=t=>e.showConfirm.show1=!0),style:{"margin-right":"10px"}},{default:s(()=>[r("打开成功组件弹框")]),_:1}),d(l,{type:"primary",onClick:o[2]||(o[2]=t=>e.showConfirm.show2=!0)},{default:s(()=>[r("打开警告组件弹框")]),_:1}),e.showConfirm.show0?(m(),h(f,{key:0,modelValue:e.showConfirm.show0,"onUpdate:modelValue":o[3]||(o[3]=t=>e.showConfirm.show0=t),onConfirm:e.confirm,onCancel:e.cancel,"confirm-btn-text":"默认","cancel-btn-text":"默认关闭"},{default:s(()=>[r(" 默认框 ")]),_:1},8,["modelValue","onConfirm","onCancel"])):C("v-if",!0),e.showConfirm.show1?(m(),h(f,{key:1,modelValue:e.showConfirm.show1,"onUpdate:modelValue":o[4]||(o[4]=t=>e.showConfirm.show1=t),onConfirm:e.confirm,onCancel:e.cancel,type:"success","show-close":!1,"confirm-btn-text":"成功","cancel-btn-text":"成功关闭"},{default:s(()=>[r(" 成功框 ")]),_:1},8,["modelValue","onConfirm","onCancel"])):C("v-if",!0),e.showConfirm.show2?(m(),h(f,{key:2,modelValue:e.showConfirm.show2,"onUpdate:modelValue":o[5]||(o[5]=t=>e.showConfirm.show2=t),onConfirm:e.confirm,onCancel:e.cancel,type:"warning"},{default:s(()=>[r(" 警告框内容内容自定义内容内容自定义内容内容自定义内容内容自定义内容内容自定义内容内容自定义内容内容 ")]),_:1},8,["modelValue","onConfirm","onCancel"])):C("v-if",!0),me,ue,d(l,{type:"primary",onClick:o[6]||(o[6]=t=>e.showConfirm.show3=!0),style:{"margin-right":"10px"}},{default:s(()=>[r("打开默认组件弹框（默认插槽）")]),_:1}),e.showConfirm.show3?(m(),h(f,{key:3,modelValue:e.showConfirm.show3,"onUpdate:modelValue":o[7]||(o[7]=t=>e.showConfirm.show3=t),onConfirm:e.confirm,onCancel:e.cancel},{default:s(()=>[r(" 自定义内容内容自定义内容内容自定义内容内容自定义内容内容自定义内容内容自定义内容内容自定义内容内容自定义内容内容 ")]),_:1},8,["modelValue","onConfirm","onCancel"])):C("v-if",!0),d(l,{type:"primary",onClick:o[8]||(o[8]=t=>e.showConfirm.show4=!0),style:{"margin-right":"10px"}},{default:s(()=>[r("打开默认组件弹框（底部插槽）")]),_:1}),e.showConfirm.show4?(m(),h(f,{key:4,modelValue:e.showConfirm.show4,"onUpdate:modelValue":o[10]||(o[10]=t=>e.showConfirm.show4=t),width:800},{footer:s(()=>[a("div",ce,[d(l,{type:"primary"},{default:s(()=>[r("新建文件夹")]),_:1}),a("div",null,[d(l,{type:"primary",style:{"margin-right":"10px"}},{default:s(()=>[r("确定")]),_:1}),d(l,{type:"error",onClick:o[9]||(o[9]=t=>e.showConfirm.show4=!1)},{default:s(()=>[r("关闭")]),_:1})])])]),default:s(()=>[r(" 默认插槽 ")]),_:1},8,["modelValue"])):C("v-if",!0),Ce,he,d(l,{type:"primary",onClick:o[11]||(o[11]=t=>e.showConfirm.show5=!0)},{default:s(()=>[r("编辑用户信息")]),_:1}),e.showConfirm.show5?(m(),h(f,{key:5,modelValue:e.showConfirm.show5,"onUpdate:modelValue":o[12]||(o[12]=t=>e.showConfirm.show5=t),onConfirm:e.confirm,onCancel:e.cancel,type:"default",width:600},{default:s(()=>[d(i,{placeholder:"用户名",style:{"margin-bottom":"10px"}}),d(i,{placeholder:"账号",style:{"margin-bottom":"10px"}}),d(i,{placeholder:"密码",style:{"margin-bottom":"10px"}})]),_:1},8,["modelValue","onConfirm","onCancel"])):C("v-if",!0),we,pe,d(l,{type:"primary",onClick:e.loadConfirm},{default:s(()=>[r("js函数调用弹框提示")]),_:1},8,["onClick"])],64)}const ge=I(ie,[["render",ye],["__file","testConfirm.vue"]]);export{ge as default};
