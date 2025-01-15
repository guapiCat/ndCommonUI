#### Cell 单元格说明

- 使用场景：常用在表单等组件里
- 开发配置：设置标题和内容



#### 基础单元格


<common-code-format>

  <template #source>
    <APP-ndCell-ndCellBase></APP-ndCell-ndCellBase>
  </template>

  @[code](../.vuepress/components/APP/ndCell/ndCellBase.vue)

</common-code-format>



#### 参数配置

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| title          | 左侧文本 | String |            |
| value          | 右侧文本 | String |            |



#### solt插槽配置

| 参数                    | 说明                       |  默认值                                        |
| -------------------     | ------------------------  |  ----------------------------------------- |
| #title          | 左侧区域 |             |
| #value          | 右侧区域 |             |


