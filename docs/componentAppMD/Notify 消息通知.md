#### 消息通知说明
- 基础样式：文本+背景色
- 使用场景：消息通知可以及时地将状态、内容的更新触达到用户，用户则可以根据收到的消息做后续判断
- 主要交互：在达到某一触发条件下，由发送方发送消息给到接收方，接收方可针对此条消息提供反馈
- 开发配置：消息文本、背景色、弹出位置均可产品实际业务配置

#### 基础使用

<common-code-format>
  <template #source>
    <APP-ndNotify-ndNotifyCom></APP-ndNotify-ndNotifyCom>
  </template>

  @[code](../.vuepress/components/APP/ndNotify/ndNotifyCom.vue)

</common-code-format>
<br />

#### ndNotify 方法
提供以下辅助函数
| 方法名 | 说明 | 参数 | 返回值 |
| - | - | - | - |
| ndShowNotify | 展示提示 | NotifyOptions / String | notify实例 |
| ndCloseNotify | 关闭提示 | - | void |
| ndSetNotifyDefaultOptions | 修改默认配置，影响所有的 ndShowNotify调用 | NotifyOptions | void |
| ndResetNotifyDefaultOptions | 重置默认配置，影响所有的 ndShowNotify 调用 | - | void |

#### NotifyOptions 参数
调用 ndShowNotify 等方法时，支持传入以下选项
| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| type | 类型，可选值为 primary success warning | NotifyType | danger |
| message | 展示文案，支持通过 \n 换行 | String | - |
| duration | 展示时长(ms)，值为 0 时，notify 不会消失 | Number / String | 3000 |
| z-index | 将组件的z-index层级设置为一个固定值 | Number / String | 2000+ |
| position | 弹出位置，可选值为 bottom | String | top |
| color | 字体颜色 | String | white |
| background | 背景颜色 | String | - |
| className | 自定义类名 | String / Array / Object | - |
| lockScroll | 是否锁定背景滚动 | Boolean | false |
| onClick | 点击时的回调函数 | (event: MouseEvent): void | - |
| onOpened | 完全展示后的回调函数 | () => void | - |
| onClose | 关闭时的回调函数 | () => void | - |


#### ndNotify Props
| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| v-model:show | 是否展示消息通知 | Boolean | false |
| type | 类型，可选值 primary、success、warning | String | danger |
| position | 弹出位置，可选值 bottom | String | top |
| color | 字体颜色 | String | white |
| background | 背景颜色 | String | - |
| class-name | 自定义类名 | String / Array / Object | - |

#### ndNotify 方法
| 名称 | 说明 | 返回值 |
| - | - | - |
| click | 点击时的回调函数 | PointerEvent |
| opened | 完全展示后的回调函数 | - |
| close | 关闭时的回调函数 | - |
