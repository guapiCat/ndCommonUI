#### Overlay 遮罩层说明

- 基础样式：背景色
- 使用场景：创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作
- 主要交互：在某一触发条件下，显示遮罩层聚焦页面元素；可结合遮罩层上具体内容手动/自动使遮罩层消失
- 开发配置：遮罩层上具体内容、遮罩层的透明度均可产品实际业务配置

#### 遮罩层

###### 只提供遮罩功能，可自定义在遮罩层中插入内容。通过插槽拥有更高的自定义内容，可模拟出其它组件，如Dialog。

<common-code-format>
  <template #source>
    <APP-ndOverlay-ndOverlayBase></APP-ndOverlay-ndOverlayBase>
  </template>

  @[code](../.vuepress/components/APP/ndOverlay/ndOverlayBase.vue)

</common-code-format>

<br />




#### 参数配置

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| v-model             | 绑定遮罩层是否限制  | Bool | `-` |
| duration | 动画时常 | Number | String | `0.3` |
| opacity | 设置遮罩层透明度 | Number | String | `0.3` |
| ...$attrs          | vant属性 |  |             |
| ...slot         | 提供默认插槽 |  |             |



<br />

#### 事件

| 事件名 | 说明                           | 回调参数       |
| ------ | ------------------------------ | -------------- |
| ndClick  | 点击遮罩层时触发。如果是click事件要加.stop                 | e |

<br />









