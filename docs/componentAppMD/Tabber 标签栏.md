#### Tabber 标签栏说明

- 基础样式：图标+文字组合
- 主要状态：Default(默认)、Tap(点击)
- 使用场景：页面底部展示3-5个标签，集中展示信息优先级较高，用户使用频繁的功能引导用户高效切换
- 主要交互：点击某个功能查看更多信息，功能之间相互点击切换；当大于5个标签，可考虑支持横向滑动(图纸通-View)
- 开发配置：标签栏的文案、静态图标、个数均可根据实际产品场景可调节


#### 基础用法


<br />

<common-code-format>
  <template #source>
    <APP-ndTabbar-ndTabbar></APP-ndTabbar-ndTabbar>
  </template>

  @[code](../.vuepress/components/APP/ndTabbar/ndTabbar.vue)

</common-code-format>

#### 自定义图片
<br />

<common-code-format>
  <template #source>
    <APP-ndTabbar-ndTabbarPic></APP-ndTabbar-ndTabbarPic>
  </template>

  @[code](../.vuepress/components/APP/ndTabbar/ndTabbarPic.vue)

</common-code-format>



#### 自定义内容

<br />

<common-code-format>
  <template #source>
    <APP-ndTabbar-ndTabbarUnfixed></APP-ndTabbar-ndTabbarUnfixed>
    <br/>
    <span style="font-size:12px;color:#333">在需要自定义的数据中配置slot:name,就可使用对应slot:name插槽</span>
  </template>

  @[code](../.vuepress/components/APP/ndTabbar/ndTabbarUnfixed.vue)

</common-code-format>





#### 参数配置

| 参数                    | 说明                    | 必填 | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- |  ----------- |--------------------------------------------- |
| v-model               | 绑定数据, 当前选中数据的索引 | `否` | `String`,`Number`  |       0     |
| tabs                  | 配置数据|`是` | `Object` `Array`  |      `[]`     |
| clickFn               | 传入的自定义选择点击事件 |`否` | `Function`  |       回传数据(item, i)     |
| fixed                 | 是否固定页面底部 |`否` | `Boolean`  |       true     |
| placeholder           | 是否在页面底部生成一个占位符, 配合固定底部时使用|`否` | `Boolean`  |       true  |
| zIndex                | 定位层级 |`否` | `String`,`Number`  |      1    |
| active-color        | 选中时颜色 |`否` |  `String`,  |     #1989fa     |
| inactive-color        | 未选中颜色 |`否` | `String`  |      #7d7e80    |

#### tabs数据 --- nd-tabbar-item配置

| 参数                    | 说明                       | 必填        |类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | ----------- | --------------------------------------------- |
| clickFn    | 传入的自定义选择点击事件 | `否` | `Function`  |       回传数据(item, i)     |
| label      | 显示的标题  | `是` | `String`, `Number`  |       -     |
| icon       | 显示的图标 | `否` | `String`  |       -     |
| urlActive  | 自定义已选中的图标/图片路径|`否` |  `String`  |      -  |
| urlInactive  | 自定义未选中的图标/图片路径 | `否` |  `String`  |      -  |

#### 事件

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| change      | 当前tab变化之后触发, 返回当前选中数据和索引 | 当前选中数据: `any`, 当前选中数据索引: `string|number` |



















