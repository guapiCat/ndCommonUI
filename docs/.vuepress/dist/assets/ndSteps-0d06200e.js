import{_ as m,s as y,h as g,x as N,t as L,r as v,o as f,c as S,b as i,w as n,f as B,F as D,E as F,i as I,R as $,m as k,U as w,V as C,N as V,O as P,e as a,d,k as b,P as T,Q as R}from"./app-df2347b2.js";const E={name:"nd-steps",props:{active:{type:[String,Number],default:()=>0},stepList:{type:Array,default:()=>[]},slotIcon:{type:Boolean,default:()=>!1},slotTitle:{type:Boolean,default:()=>!1},slotDescript:{type:Boolean,default:()=>!1}},setup(){const t=y({});return g(()=>{}),N(()=>{}),{...L(t)}}},M={class:"nd-steps"};function z(t,s,r,l,_,h){const o=v("el-step"),c=v("el-steps");return f(),S("div",M,[i(c,V({active:r.active},t.$attrs,P(t.$attrs)),{default:n(()=>[B(" 步骤item "),(f(!0),S(D,null,F(r.stepList,(e,p)=>(f(),I(o,{key:p,title:e.title,description:e.description,icon:e.icon},$({_:2},[r.slotIcon?{name:"icon",fn:n(()=>[k(t.$slots,"icon",w(C({...e,index:p})),void 0,!0)]),key:"0"}:void 0,r.slotTitle?{name:"title",fn:n(()=>[k(t.$slots,"title",w(C({...e,index:p})),void 0,!0)]),key:"1"}:void 0,r.slotDescript?{name:"description",fn:n(()=>[k(t.$slots,"description",w(C({...e,index:p})),void 0,!0)]),key:"2"}:void 0]),1032,["title","description","icon"]))),128))]),_:3},16,["active"])])}const A=m(E,[["render",z],["__scopeId","data-v-a28605ed"],["__file","nd-steps.vue"]]);const H={name:"",components:{ndSteps:A},setup(){const t=y({finishStatus:"finish",nowStatus:"wait",active:1,list1:[{title:"第一步"},{title:"第二步"},{title:"第三步",description:"这是自定义的描述"}],active2:1,list2:[{title:"第一步"},{title:"第二步"},{title:"第三步多一点文案",description:"这是自定义的描述"}],active3:1,list3:[{title:"第一步",description:"这是自定义的描述"},{title:"第二步",description:"这是自定义的描述"},{title:"第三步多一点文案",description:"这是自定义的描述"}]});g(()=>{}),N(()=>{});const s=()=>{t.active+=1,t.active=t.active%(t.list1.length+1)},r=()=>{t.active2+=1,t.active2=t.active2%(t.list2.length+1)},l=()=>{t.active3+=1,t.active3=t.active3%(t.list3.length+1)},_=c=>{t.finishStatus=c},h=c=>{t.nowStatus=c};return{...L(t),stepClick1:s,stepClick2:r,stepClick3:l,switchFinish:_,switchNow:h}}},u=t=>(T("data-v-b3af5eb6"),t=t(),R(),t),O=u(()=>d("span",null,"设置步骤结束状态： ",-1)),Q=u(()=>d("h5",null,"基础步骤条",-1)),U=u(()=>d("br",null,null,-1)),j=u(()=>d("span",null,"设置当前步骤状态： ",-1)),q=u(()=>d("h5",null,"竖形步骤条",-1)),G=u(()=>d("h5",null,"简易步骤条",-1)),J=u(()=>d("h5",null,"插槽类步骤条，可插入图标，标题，描述",-1));function K(t,s,r,l,_,h){const o=v("el-button"),c=v("nd-steps",!0);return f(),S("div",null,[O,i(o,{class:"nd-btn2",onClick:s[0]||(s[0]=e=>l.switchFinish("wait"))},{default:n(()=>[a("wait")]),_:1}),i(o,{class:"nd-btn2",onClick:s[1]||(s[1]=e=>l.switchFinish("process"))},{default:n(()=>[a("process")]),_:1}),i(o,{class:"nd-btn2",onClick:s[2]||(s[2]=e=>l.switchFinish("finish"))},{default:n(()=>[a("finish")]),_:1}),i(o,{class:"nd-btn2",onClick:s[3]||(s[3]=e=>l.switchFinish("error"))},{default:n(()=>[a("error")]),_:1}),i(o,{class:"nd-btn2",onClick:s[4]||(s[4]=e=>l.switchFinish("success"))},{default:n(()=>[a("success")]),_:1}),Q,i(c,{class:"nd-steps",active:t.active,stepList:t.list1,"finish-status":t.finishStatus,"process-status":t.nowStatus,"align-center":!0},null,8,["active","stepList","finish-status","process-status"]),i(o,{class:"nd-btn",onClick:l.stepClick1},{default:n(()=>[a("step+1")]),_:1},8,["onClick"]),U,j,i(o,{class:"nd-btn2",onClick:s[5]||(s[5]=e=>l.switchNow("wait"))},{default:n(()=>[a("wait")]),_:1}),i(o,{class:"nd-btn2",onClick:s[6]||(s[6]=e=>l.switchNow("process"))},{default:n(()=>[a("process")]),_:1}),i(o,{class:"nd-btn2",onClick:s[7]||(s[7]=e=>l.switchNow("finish"))},{default:n(()=>[a("finish")]),_:1}),i(o,{class:"nd-btn2",onClick:s[8]||(s[8]=e=>l.switchNow("error"))},{default:n(()=>[a("error")]),_:1}),i(o,{class:"nd-btn2",onClick:s[9]||(s[9]=e=>l.switchNow("success"))},{default:n(()=>[a("success")]),_:1}),q,i(c,{class:"nd-steps2",active:t.active,stepList:t.list1,"finish-status":t.finishStatus,direction:"vertical"},null,8,["active","stepList","finish-status"]),i(o,{class:"nd-btn",onClick:l.stepClick1},{default:n(()=>[a("step+1")]),_:1},8,["onClick"]),G,i(c,{class:"nd-steps",active:t.active2,stepList:t.list2,"finish-status":t.finishStatus,"align-center":!0,simple:!0,space:200},null,8,["active","stepList","finish-status"]),i(o,{class:"nd-btn",onClick:l.stepClick2},{default:n(()=>[a("step+1")]),_:1},8,["onClick"]),J,i(c,{class:"nd-steps",active:t.active3,stepList:t.list3,"finish-status":t.finishStatus,"align-center":!0,slotIcon:!0,slotTitle:!0,slotDescript:!0},{icon:n(e=>[d("div",null,b(e.index+"solt"),1)]),title:n(e=>[d("div",null,b(e.title+"solt"),1)]),description:n(e=>[d("div",null,b(e.description+"solt"),1)]),_:1},8,["active","stepList","finish-status"]),i(o,{class:"nd-btn",onClick:l.stepClick3},{default:n(()=>[a("step+1")]),_:1},8,["onClick"])])}const X=m(H,[["render",K],["__scopeId","data-v-b3af5eb6"],["__file","ndSteps.vue"]]);export{X as default};
