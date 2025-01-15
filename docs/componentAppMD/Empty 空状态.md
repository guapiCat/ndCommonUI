#### Empty 标签页说明

- 使用场景：场景图+文本+操作
- 主要交互：空状态时的占位提示
- 开发配置：场景图、文本、大小、操作动作均可产品实际业务配置

#### 基础使用
- 提供底部按钮配置，默认白色，样式可配置。当不配置底部按钮文本时，不显示按钮

<br />

<common-code-format>
  <template #source>
    <APP-ndEmpty-ndEmptyBase></APP-ndEmpty-ndEmptyBase>
  </template>

  @[code](../.vuepress/components/APP/ndEmpty/ndEmptyBase.vue)

</common-code-format>


#### 配置底部按钮

<br />

<common-code-format>
  <template #source>
    <APP-ndEmpty-ndEmptySet></APP-ndEmpty-ndEmptySet>
  </template>

  @[code](../.vuepress/components/APP/ndEmpty/ndEmptySet.vue)

</common-code-format>


#### 参数配置

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| ...$attrs          | vant扩展属性 |  |             |
| top          | 距离顶部高度 | String |      30%       |
| imgUrl          | 暂无数据的图片地址 | String |            |
| imgWidth          | 设置图片大小 | String |      160px      |
| footText          | 底部按钮文本，没有就不显示 | String |            |
| contentText          | 中间区域文本 | String |            |
| footRadius          | 底部按钮圆角 | String |            |
| footTextColor          | 底部文本颜色 | String |            |
| footBackground          | 底部按钮背景色 | String |            |
| footBorder          | 底部按钮边框 | String |            |


#### 插槽solt名

| 插槽名     | 说明                                     |
| ---------- | ---------------------------------------- |
| content | 插入到文本区域。设置插槽需要去掉contentText设置 |
| foot | 插入到页脚部分。设置插槽需要去掉footText设置 |















