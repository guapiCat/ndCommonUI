#### 加载说明
- 基础样式：文本+图标
- 宽度:846px高度:30px顶部:0px左侧:25px布局填充:0px, 55px, 0px, 0px布局分布:集中分布图层模式:穿透
- 主要交互：手势向下/向上拉刷新页面
- 开发配置：文本、图标、颜色、大小均可产品实际业务配置

#### 基础使用

<common-code-format>
  <template #source>
    <APP-ndLoading-ndLoading></APP-ndLoading-ndLoading>
  </template>

  @[code](../.vuepress/components/APP/ndLoading/ndLoading.vue)

</common-code-format>
<br />

#### ndLoading Props
| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| color | 颜色 | String | #c9c9c9 |
| type | 类型，可选值为 spinner | String | circular |
| size | 加载图标大小，默认单位为 px | Number / String | 30px |
| text-size | 文字大小，默认单位为 px | Number / String | 14px |
| text-color | 文字颜色 | String | #c9c9c9 |
| vertical | 是否垂直排列图标和文字内容 | Boolean | false |

#### ndLoading Slots
| 名称 | 说明 |
| - | - |
| default | 加载文案 |
| icon | 自定义加载图标 |



