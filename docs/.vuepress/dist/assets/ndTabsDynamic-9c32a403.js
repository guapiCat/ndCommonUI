import{_ as R,at as A,ai as C,s as D,x as I,t as S,r as f,o as l,c as b,d as c,b as i,w as s,e as m,F as r,E as _,i as u,k as v,P as V,Q as B}from"./app-df2347b2.js";import{n as g,a as z}from"./nd-tab-pane-b797fd9b.js";const E={components:{ndTabs:g,ndTabPane:z,Calendar:A,Search:C},setup(){const e=D({activeName:"1",editableTabs:[{title:"新迪数字工程",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"},{title:"Tab 3",name:"3",content:"Tab 3 content"},{title:"Tab 4",name:"4",content:"Tab 4 content"},{title:"Tab 5",name:"5",content:"Tab 5 content"}]});let p=2;const N=()=>{const t=`${++p}`;e.editableTabs.push({title:"New Tab",name:t,content:"New Tab content"+t}),e.activeName=t},n=()=>{const t=`${++p}`;e.editableTabs.push({title:"New Tab",name:t,content:"New Tab content"+t}),e.activeName=t},h=t=>{const o=e.editableTabs;let d=e.activeName;d===t&&o.forEach((a,k)=>{if(a.name===t){const w=o[k+1]||o[k-1];w&&(d=w.name)}}),e.activeName=d,e.editableTabs=o.filter(a=>a.name!==t)};I(()=>{});const y=S(e);return{addTab:N,addTabs:n,removeTab:h,...y}}},T=e=>(V("data-v-649da2e8"),e=e(),B(),e),F=T(()=>c("p",null,"增减选项卡",-1)),H=T(()=>c("p",null,"水平方向",-1)),P={style:{"margin-bottom":"20px"}},x=T(()=>c("p",null,null,-1)),L=T(()=>c("p",null,"垂直方向",-1)),M=T(()=>c("p",null,null,-1));function Q(e,p,N,n,h,y){const t=f("el-button"),o=f("nd-tab-pane"),d=f("nd-tabs");return l(),b(r,null,[F,H,c("div",P,[i(t,{size:"small",onClick:n.addTab},{default:s(()=>[m(" add tab ")]),_:1},8,["onClick"])]),i(d,{activeName:e.activeName,closable:"",onRemoveTab:n.removeTab,onAddTabs:n.addTabs,dynamicHorizontal:!0},{default:s(()=>[(l(!0),b(r,null,_(e.editableTabs,a=>(l(),u(o,{key:a.name,label:a.title,name:a.name},{default:s(()=>[m(v(a.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["activeName","onRemoveTab","onAddTabs"]),x,i(d,{"tab-position":"bottom",activeName:e.activeName,closable:"",onRemoveTab:n.removeTab,onAddTabs:n.addTabs,dynamicHorizontal:!0},{default:s(()=>[(l(!0),b(r,null,_(e.editableTabs,a=>(l(),u(o,{key:a.name,label:a.title,name:a.name},{default:s(()=>[m(v(a.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["activeName","onRemoveTab","onAddTabs"]),L,i(d,{"tab-position":"left",activeName:e.activeName,closable:"",onRemoveTab:n.removeTab,onAddTabs:n.addTabs,dynamicVertical:!0},{default:s(()=>[(l(!0),b(r,null,_(e.editableTabs,a=>(l(),u(o,{key:a.name,label:a.title,name:a.name},{default:s(()=>[m(v(a.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["activeName","onRemoveTab","onAddTabs"]),M,i(d,{"tab-position":"right",activeName:e.activeName,closable:"",onRemoveTab:n.removeTab,onAddTabs:n.addTabs,dynamicVertical:!0},{default:s(()=>[(l(!0),b(r,null,_(e.editableTabs,a=>(l(),u(o,{key:a.name,label:a.title,name:a.name},{default:s(()=>[m(v(a.content),1)]),_:2},1032,["label","name"]))),128))]),_:1},8,["activeName","onRemoveTab","onAddTabs"])],64)}const G=R(E,[["render",Q],["__scopeId","data-v-649da2e8"],["__file","ndTabsDynamic.vue"]]);export{G as default};
