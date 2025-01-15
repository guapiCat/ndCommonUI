import{_ as f,o as v,c as g,d as o,m as c,j as n,v as r,G as d,b as m,w as h,l as a,T as p,k as C,f as x}from"./app-df2347b2.js";const E={name:"CodeFormat",data(){return{qrCodeDialog:!1,hovering:!1,isExpanded:!1,fixedControl:!1,scrollParent:null}},computed:{lang(){return this.$route.path.split("/")[1]},iconClass(){return this.isExpanded?"el-icon-caret-top":"el-icon-caret-bottom"},controlText(){return this.isExpanded?"隐藏代码":"显示代码"},codeArea(){return this.$el.getElementsByClassName("meta")[0]}},watch:{isExpanded(s){if(this.setCodeAreaHeight(),!s){this.fixedControl=!1,this.removeScrollHandler();return}setTimeout(()=>{this.scrollParent=window,this.scrollParent&&this.scrollParent.addEventListener("scroll",this.scrollHandler),this.scrollHandler()},200)}},mounted(){let s=this;document.addEventListener("keydown",function(e){e.key=="Escape"&&(s.isExpanded=!1)})},beforeDestroy(){this.removeScrollHandler()},methods:{getCodeAreaHeight(){return this.$el.getElementsByClassName("description").length>0?this.$el.getElementsByClassName("description")[0].clientHeight+20:this.$el.getElementsByClassName("highlight")[0].clientHeight},setCodeAreaHeight(){this.codeArea.style.height=this.isExpanded?`${this.getCodeAreaHeight()+1}px`:"0"},copyCode(){const s=this.$el.querySelectorAll("pre")[0];s.setAttribute("contenteditable","true"),s.focus(),document.execCommand("selectAll",!1,null),document.execCommand("copy")?(s.removeAttribute("contenteditable"),this.$message.success("复制成功！")):this.$message.error("复制失败！")},scrollHandler(){const{top:s,bottom:e,left:u}=this.$refs.meta.getBoundingClientRect();this.fixedControl=e>document.documentElement.clientHeight&&s+44<=document.documentElement.clientHeight},removeScrollHandler(){this.scrollParent&&this.scrollParent.removeEventListener("scroll",this.scrollHandler)}}},y={class:"source"},H={class:"meta",ref:"meta"},_={class:"description"};function w(s,e,u,k,t,i){return v(),g("div",{class:a(["code-format",{hover:t.hovering}]),onMouseenter:e[4]||(e[4]=l=>t.hovering=!0),onMouseleave:e[5]||(e[5]=l=>t.hovering=!1)},[o("div",y,[c(s.$slots,"source")]),o("div",H,[n(o("div",{class:"show-close",onClick:e[0]||(e[0]=d(l=>t.isExpanded=!t.isExpanded,["stop"]))},"收起（ESC）",512),[[r,t.isExpanded]]),o("div",_,[n(o("div",{class:"copy-btn",onClick:e[1]||(e[1]=d((...l)=>i.copyCode&&i.copyCode(...l),["stop"]))},"复制",512),[[r,t.isExpanded]]),c(s.$slots,"default")])],512),o("div",{class:a(["code-format-control",{"is-fixed2":t.fixedControl}]),ref:"control",onClick:e[3]||(e[3]=l=>t.isExpanded=!t.isExpanded)},[m(p,{name:"arrow-slide"},{default:h(()=>[o("i",{class:a([i.iconClass,{hovering:t.hovering}])},null,2)]),_:1}),m(p,{name:"text-slide",persisted:""},{default:h(()=>[n(o("span",null,C(i.controlText),513),[[r,t.hovering]])]),_:1}),o("div",{class:"qr_code",size:"small",type:"primary",onClick:e[2]||(e[2]=d(l=>t.isExpanded=!t.isExpanded,["stop"]))},"展开"),x(' <div class="qr_code qr_code2" size="small" type="primary" @click.stop="copyCode">复制</div> ')],2)],34)}const b=f(E,[["render",w],["__file","code-format.vue"]]);export{b as default};