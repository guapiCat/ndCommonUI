#### 标签说明
- 基础样式：背景色+文本+操作
- 使用场景：用于标记关键词和概括主要内容
- 开发配置：标签的文本、背景色、圆角、线框、操作图标、大小均可产品实际业务配置

#### 基础用法
通过 type 属性控制标签颜色

<common-code-format>
  <template #source>
    <APP-ndTag-ndTag></APP-ndTag-ndTag>
  </template>

  @[code](../.vuepress/components/APP/ndTag/ndTag.vue)

</common-code-format>
<br />

#### 样式风格

<common-code-format>
  <template #source>
    <APP-ndTag-ndTagStyle></APP-ndTag-ndTagStyle>
  </template>

  @[code](../.vuepress/components/APP/ndTag/ndTagStyle.vue)

</common-code-format>
<br />

#### 样式大小
通过 size 属性调整标签大小

<common-code-format>
  <template #source>
    <APP-ndTag-ndTagSize></APP-ndTag-ndTagSize>
  </template>

  @[code](../.vuepress/components/APP/ndTag/ndTagSize.vue)

</common-code-format>
<br />

#### 自定义颜色
通过 color 和 text-color 属性设置标签颜色。

<common-code-format>
  <template #source>
    <APP-ndTag-ndTagColor></APP-ndTag-ndTagColor>
  </template>

  @[code](../.vuepress/components/APP/ndTag/ndTagColor.vue)

</common-code-format>
<br />

#### ndTag Props
| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| type | 类型，可选值为 primary success danger warning | String | default |
| size | 大小，可选值为 large medium small | String | - |
| color | 标签颜色 | String | - |
| show | 是否展示标签 | Boolean | true |
| plain | 是否为空心样式 | Boolean | false |
| round | 是否为圆角样式 | Boolean | false |
| mark | 是否为标记样式 | Boolean | false |
| text-color | 文本颜色，优先级高于 color 属性 | String | white |
| closeable | 是否为可关闭标签 | Boolean | false |

#### ndTag Slots
| 名称 | 说明 |
| - | - |
| default | 标签显示内容 |

#### ndTag Event
| 事件名 | 说明 | 回调参数 |
| - | - | - |
| click | 点击时触发 | event: MouseEvent |
| close | 关闭标签时触发 | event: MouseEvent |
