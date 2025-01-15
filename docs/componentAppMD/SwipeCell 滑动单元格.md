#### 滑动单元格说明
- 基础样式：图标+文本+操作
- 使用场景：主要用于强调信息展示，弱化操作的场景
- 主要交互：可以左右滑动来展示操作按钮
- 开发配置：文本、图标、大小、操作按钮的个数、颜色均可根据产品实际场景配置

#### 基础用法
ndSwipeCell 组件提供了 left 和 right 两个插槽，用于定义两侧滑动区域的内容。

<common-code-format>
  <template #source>
    <APP-ndSwipeCell-ndSwipeCell></APP-ndSwipeCell-ndSwipeCell>
  </template>

  @[code](../.vuepress/components/APP/ndSwipeCell/ndSwipeCell.vue)

</common-code-format>
<br />

#### 自定义内容
ndSwipeCell 可以嵌套任意内容。

<common-code-format>
  <template #source>
    <APP-ndSwipeCell-ndSwipeCellSlot></APP-ndSwipeCell-ndSwipeCellSlot>
  </template>

  @[code](../.vuepress/components/APP/ndSwipeCell/ndSwipeCellSlot.vue)

</common-code-format>
<br />

#### 异步关闭
通过传入 before-close 回调函数，可以自定义两侧滑动内容关闭时的行为。

<common-code-format>
  <template #source>
    <APP-ndSwipeCell-ndSwipeCellAsync></APP-ndSwipeCell-ndSwipeCellAsync>
  </template>

  @[code](../.vuepress/components/APP/ndSwipeCell/ndSwipeCellAsync.vue)

</common-code-format>
<br />

#### ndSwipeCell Props
| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| name | 标识符，通常为一个唯一的字符串或数字，可以在事件参数中获取到 | Number / String | ,, |
| left-width | 指定左侧滑动区域宽度，单位为px | Number / String | auto |
| right-width | 指定右侧滑动区域宽度，单位为px | Number / String | auto |
| before-close | 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise | (args) => boolean | Promise | - |
| disabled | 是否禁用滑动 | Boolean | false |
| stop-propagation | 是否阻止滑动事件冒泡 | Boolean | false |

#### ndSwipeCell Slots
| 名称 | 说明 |
| - | - |
| default | 默认显示的内容 |
| left | 左侧滑动区域的内容 |
| right | 右侧滑动区域的内容 |

#### ndSwipeCell Events
| 事件名 | 说明 | 回调参数 |
| - | - | - |
| click | 点击时触发 | position: 'left' / 'right' / 'cell' / 'outside' |
| open | 打开时触发 | { name: String / Number, position: 'left' / 'right' } |
| close | 关闭时触发 | { name: String / Number, position: 'left' / 'right' / 'cell' / 'outside' } |

#### beforeClose 参数
beforeClose 的第一个参数为对象，对象中包含以下属性：
| 参数名 | 说明 | 类型 |
| - | - | - |
| name | 标识符 | String / Number |
| position | 关闭时的点击位置 | 'left' / 'right' / 'cell' / 'outside' |

####  ndSwipeCell 方法
通过 ref 可以获取到 SwipeCell 实例并调用实例方法
| 方法名 | 说明 | 参数 | 返回值 |
| - | - | - | - |
| open | 打开单元格侧边栏 | position left / right | - |
| close | 收起单元格侧边栏 | - | - |

