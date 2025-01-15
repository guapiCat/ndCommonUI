import{_ as p,r as t,o as l,c as u,b as a,w as e,d as n,e as s,a as i}from"./app-df2347b2.js";const d={},r=n("h4",{id:"swipe-轮播",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#swipe-轮播","aria-hidden":"true"},"#"),s(" Swipe 轮播")],-1),k=n("ul",null,[n("li",null,"介绍：用于显示轮播效果"),n("li",null,"开发配置：Swipe与SwipeItem配合使用")],-1),m=n("div",{class:"language-vue line-numbers-mode","data-ext":"vue"},[n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h5")]),n("span",{class:"token punctuation"},">")]),s("切换到手机端后可滑动"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h5")]),n("span",{class:"token punctuation"},">")]),s(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("nd-app-swipe")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("my-swipe"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":autoplay"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("1000"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("nd-app-swipe-item")]),s(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("item in swipeNum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("addSwipe"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("当前序号{{ item }}， 点击+1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("nd-app-swipe-item")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("nd-app-swipe")]),n("span",{class:"token punctuation"},">")]),s(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s(" toRefs"),n("span",{class:"token punctuation"},","),s(" onBeforeMount"),n("span",{class:"token punctuation"},","),s(" onMounted"),n("span",{class:"token punctuation"},","),s(" getCurrentInstance "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"import"),s(" ndAppSwipe "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../../../../../src/packages/APP/nd-swipe/src/nd-swipe.vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" ndAppSwipeItem "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'../../../../../src/packages/APP/nd-swipe-item/src/nd-swipe-item.vue'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(" ndAppSwipe"),n("span",{class:"token punctuation"},","),s(" ndAppSwipeItem "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"swipeNum"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" proxy "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getCurrentInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token function"},"onBeforeMount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"addSwipe"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      data`),n("span",{class:"token punctuation"},"."),s("swipeNum "),n("span",{class:"token operator"},"="),s(" data"),n("span",{class:"token punctuation"},"."),s("swipeNum "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" refData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"toRefs"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token operator"},"..."),s("refData"),n("span",{class:"token punctuation"},","),s(`
      addSwipe`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".my-swipe"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 300px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" gray"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=i('<h4 id="swipe参数配置" tabindex="-1"><a class="header-anchor" href="#swipe参数配置" aria-hidden="true">#</a> swipe参数配置</h4><table><thead><tr><th>参数</th><th>必填</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>autoplay</td><td>否</td><td>自动轮播间隔，ms</td><td>Number | String</td><td>--</td></tr><tr><td>duration</td><td>否</td><td>动画时长，ms</td><td>Number | String</td><td>500</td></tr><tr><td>initial-swipe</td><td>否</td><td>初始索引位置</td><td>Number | String</td><td>--</td></tr><tr><td>width</td><td>否</td><td>滑块宽度</td><td>Number | String</td><td>--</td></tr><tr><td>height</td><td>否</td><td>滑块高度</td><td>Number | String</td><td>--</td></tr><tr><td>loop</td><td>否</td><td>是否循环播放</td><td>Boolean</td><td>false</td></tr><tr><td>show-indicators</td><td>否</td><td>是否显示指示器</td><td>Boolean</td><td>true</td></tr><tr><td>indicator-color</td><td>否</td><td>指示器颜色</td><td>String</td><td>#1989fa</td></tr><tr><td>vertical</td><td>否</td><td>是否纵向滚动</td><td>Boolean</td><td>false</td></tr><tr><td>touchable</td><td>否</td><td>是否通过手势滑动</td><td>Boolean</td><td>true</td></tr><tr><td>lazy-render</td><td>否</td><td>是否延迟渲染展示的内容</td><td>Boolean</td><td>false</td></tr></tbody></table><h4 id="事件说明" tabindex="-1"><a class="header-anchor" href="#事件说明" aria-hidden="true">#</a> 事件说明</h4><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>页面切换后触发</td><td>index: boolean</td></tr></tbody></table>',4);function v(g,h){const o=t("APP-ndSwipe-ndSwipeBase"),c=t("common-code-format");return l(),u("div",null,[r,k,a(c,null,{source:e(()=>[a(o)]),default:e(()=>[m]),_:1}),b])}const f=p(d,[["render",v],["__file","Swipe 轮播.html.vue"]]);export{f as default};
