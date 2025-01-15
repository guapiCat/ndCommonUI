#### Steps 步骤条说明

- 介绍：用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。
- 开发配置：active 属性表示当前步骤的索引，从 0 起计。可以通过设置 direction 属性来改变步骤条的显示方向。详细说明见文档下方表格。
- 注意事项说明：横条多行显示，只支持样式一和样式二，样式一和样式二只支持调整完成和异常图标。

#### 基础使用


<br />

<common-code-format>
  <template #source>
    <APP-ndSteps-ndSteps></APP-ndSteps-ndSteps>
  </template>

  @[code](../.vuepress/components/APP/ndSteps/ndSteps.vue)

</common-code-format>


#### 参数配置 Props -- nd-steps

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| type         | 样式类型,具体样式参照demo |  number \| string |      3       |
| active         | 当前步骤对应的索引值 |  number \| string |      0       |
| direction         | 步骤条方向，可选值为 vertical |   string |      horizontal       |
| active-icon         | 当前步骤对应的底部图标，可选值见vant Icon 组件 |   string |     checked       |
| inactive-icon         | 非当前步骤对应的底部图标 |   string |      -      |
| finish-icon         | 已完成步骤对应的底部图标，优先级高于 inactive-icon |   string |      -       |
| active-color         | 当前步骤和已完成步骤的颜色 |   string |      #1780e3       |
| inactive-color         | 未激活步骤的颜色 |   string |      #c6c6c8       |
| error-icon         | 异常图标 |   string |      warning       |
| error-color         | 异常步骤的颜色 |   string |      #FA8C16       |

#### 参数配置 Props -- nd-step

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| index         | 当前节点（显示为当前节点+1） |  number \| string |      0       |
| isError         | 是否异常 |  Boolean |      false       |


#### 事件

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
|ndStepsClickStep|点击步骤的标题或图标时触发|index: number|



















