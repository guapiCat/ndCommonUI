#### 图片预览说明
- 基础样式：图片
- 使用场景：图片放大预览查看，可配置多个图片或视频
- 开发配置：图片预览规则、图片左右滑张数、关闭图标、深浅背景色均可产品实际业务配置

#### 基础使用

<common-code-format>
  <template #source>
    <APP-ndImagePreview-ndImagePreview></APP-ndImagePreview-ndImagePreview>
  </template>

  @[code](../.vuepress/components/APP/ndImagePreview/ndImagePreview.vue)

</common-code-format>
<br />

#### 预览视频
使用 image 插槽<br />

<common-code-format>
  <template #source>
    <APP-ndImagePreview-ndImagePreviewSlot></APP-ndImagePreview-ndImagePreviewSlot>
  </template>

  @[code](../.vuepress/components/APP/ndImagePreview/ndImagePreviewSlot.vue)

</common-code-format>
<br />

#### 显示关闭按钮

<common-code-format>
  <template #source>
    <APP-ndImagePreview-ndImagePreviewClose></APP-ndImagePreview-ndImagePreviewClose>
  </template>

  @[code](../.vuepress/components/APP/ndImagePreview/ndImagePreviewClose.vue)

</common-code-format>
<br />

#### 使用 ndShowImagePreview 辅助函数

<common-code-format>
  <template #source>
    <APP-ndImagePreview-ndImagePreviewFn></APP-ndImagePreview-ndImagePreviewFn>
  </template>

  @[code](../.vuepress/components/APP/ndImagePreview/ndImagePreviewFn.vue)

</common-code-format>
<br />

#### ndImagePreview Props
| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| v-model:show | 是否展示图片预览 | Boolean | false |
| images | 需要预览的图片 URL 数组 | String[] | [] |
| start-position | 图片预览起始位置索引 | Number / String | 0 |
| swipe-duration | 动画时长，单位为 ms | Number / String | 300 |
| show-index | 是否显示页码 | Boolean | true |
| show-indicators | 是否显示轮播指示器 | Boolean | false |
| loop | 是否开启循环播放 | Boolean | true |
| before-close | 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise | (active: Number) => Boolean / PromiseBoolean | - |
| close-on-popstate | 是否在页面回退时自动关闭 | Boolean | true |
| class-name | 自定义类名 | String / Array / Object | - |
| max-zoom | 手势缩放时，最大缩放比例 | Number / String | 3 |
| min-zoom | 手势缩放时，最小缩放比例 | Number / String | 1/3 |
| closeable | 是否显示关闭图标 | Boolean | false |
| close-icon | 关闭图标名称或图片链接 | String | clear |
| close-icon-position | 关闭图标位置，可选值为 <code>top-left</code>，<code>bottom-left</code>，<code>bottom-right</code> | String | <code>top-right</code> |
| transition | 动画类名，等价于<em>transition</em>的<code>name</code>属性 | String | van-fade |
| overlay-class | 自定义遮罩层类名 | <em>String / Array / Object</em> | - |
| overlay-style | 自定义遮罩层样式 | Object | - |
| teleport | 指定挂载的节点，等同于 Tepeport 组件的 to 属性 | String / Element | - |