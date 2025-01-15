#### 搜索说明

- 基础样式：单行/多行文本
- 主要状态：Default(默认)、Tap(点击)、Disabled(禁用)
- 使用场景：一般用于放置用户使用频率较低或非核心的相关功能，比如零件库App的分类页面
- 主要交互：点击侧边导航展示更多信息
- 开发配置：侧边导航的文案、个数、徽标均可根据实际产品场景可调节



#### 基础样式

`v-model` 用于获取激活的tab的index

<br />

<common-code-format>

  <template #source>
    <APP-ndSidebar-ndSidebarBase></APP-ndSidebar-ndSidebarBase>
  </template>

  @[code](../.vuepress/components/APP/ndSidebar/ndSidebarBase.vue)

</common-code-format>



#### Sidebar参数配置
| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| v-model   | 激活的index | Number \| String |             |



#### Sidebar事件
| 事件名             | 说明                 | 回调参数                       |
| ------------------ | -------------------- | ------------------------------ |
| change             | 点击tab后处理       | index，激活的下标 |

#### Sidebar-item参数配置
| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| title  | 文本内容 | String |             |
| dot  | 右上角红点 | boolean |       false      |
| badge  | 徽标内容 | number | string |             |
| badge-props  | 透传给徽标的参数 | object |       颜色，位置等都可设置，见badge组件的配置      |
| $attr  | 属性透传 | any |             |