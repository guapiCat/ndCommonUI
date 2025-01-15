#### 
- 基础样式：单行列表、双行列表
- 图片处理：引入了vant的image组件，支持裂图处理。支持lazy加载，前提是使用了lazy组件
- 使用场景：主要用于平铺展示信息，当列表即将滚动到底部时，会触发事件并加载更多列表项
- 主要交互：点击列表触发操作
- 开发配置：列表的宽高、文本、图标/图片、操作、分割线、圆角、间距均可根据产品实际场景配置

#### 基础使用

<common-code-format>
  <template #source>
    <APP-ndList-ndList></APP-ndList-ndList>
  </template>

  @[code](../.vuepress/components/APP/ndList/ndList.vue)

</common-code-format>
<br />

#### "单行卡片"列表1

<common-code-format>
  <template #source>
    <APP-ndList-ndListCard></APP-ndList-ndListCard>
  </template>

  @[code](../.vuepress/components/APP/ndList/ndListCard.vue)

</common-code-format>
<br />

#### "单行卡片"列表2 type="card2"

其它说明：list中新增selected，设置为true时切换为灰色背景

<common-code-format>
  <template #source>
    <APP-ndList-ndListCard2></APP-ndList-ndListCard2>
  </template>

  @[code](../.vuepress/components/APP/ndList/ndListCard2.vue)

</common-code-format>

<br />


#### "单行卡片"，设置列表图片功能，listImageLazy配置支持懒加载，默认支持裂图处理
<common-code-format>
  <template #source>
    <APP-ndList-ndImageList></APP-ndList-ndImageList>
  </template>

  @[code](../.vuepress/components/APP/ndList/ndImageList.vue)

</common-code-format>
<br />

#### "双行卡片"列表

<common-code-format>
  <template #source>
    <APP-ndList-ndListDbCard></APP-ndList-ndListDbCard>
  </template>

  @[code](../.vuepress/components/APP/ndList/ndListDbCard.vue)

</common-code-format>
<br />

#### "双行卡片"带插槽列表

<common-code-format>
  <template #source>
    <APP-ndList-ndListSolt></APP-ndList-ndListSolt>
  </template>

  @[code](../.vuepress/components/APP/ndList/ndListSolt.vue)

</common-code-format>
<br />


#### 错误提示

<common-code-format>
  <template #source>
    <APP-ndList-ndListError></APP-ndList-ndListError>
  </template>

  @[code](../.vuepress/components/APP/ndList/ndListError.vue)

</common-code-format>
<br />

#### ndListCell Props
| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| type | 列表展示方式，可选值 cell-单行单元格 dbcell-双行单元格 mixText-图标+文本 mixText2-图标+2行文本 card-单行卡片 dbcard-双行卡片 | String | - |
| list | 列表展示数据 | Array {title: 标题文本, text: 内容文本, src: 图片url} | [] |
| imageClass | 给图片自定义传入class，使用:deep()进行样式覆写自定义宽高 | String | - |
| listImageLazy | 配置支持图片懒加载，需要引入vant的Lazyload组件才能使用 | Boolean | false |

#### ndList Props
| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| v-model:loading | 是否处于加载状态，加载过程中不触发 load 事件 | boolean | false |
| v-model:error | 是否加载失败，加载失败后点击错误提示可以重新触发 load 事件 | boolean | false |
| finished | 是否已加载完成，加载完成后不再触发 load 事件 | boolean | false |
| offset | 滚动条与底部距离小于 offset 时触发 load 事件 | number / string | 300 |
| loading-text | 加载过程中的提示文案 | string | 加载中... |
| finished-text | 加载完成后的提示文案 | string | - |
| error-text | 加载失败后的提示文案 | string | - |
| immediate-check | 是否在初始化时立即执行滚动位置检查 | boolean | true |
| disabled | 是否禁用滚动加载 | boolean | false |
| direction | 滚动触发加载的方向，可选值为 up | string | down |

#### ndList Events
| 事件名 | 说明 | 回调参数 |
| - | - | - |
| load | 滚动条与底部距离小于 offset 时触发 | - |

#### ndListItem Events
| 事件名 | 说明 | 回调参数 |
| - | - | - |
| click | 点击列表子项触发 | (item, index) |

#### ndList 方法
通过 ref 可以获取到 List 实例并调用实例方法
<br />
| 方法名 | 说明 | 参数 | 返回值 |
| - | - | - | - |
| check | 检查当前的滚动位置，若已滚动至底部，则会触发 load 事件 | - | - |

#### ndList Slots
| 名称 | 说明 |
| - | - |
| default | 列表内容 |
| foot | 图片底部内容插槽 |
| loading | 自定义底部加载中提示 |
| finished | 自定义加载完成后的提示文案 |
| error | 自定义加载失败后的提示文案 |

##### cad2提供的插槽
| 名称 | 说明 |
| - | - |
| title | 标题插槽 |
| text | 文本插槽 |
| right | 右侧图标插槽 |

#### ndList Slots 插槽参数
| 名称 | 说明 |
| - | - |
| scope | 单列数据 |
| index | 数据下标 |