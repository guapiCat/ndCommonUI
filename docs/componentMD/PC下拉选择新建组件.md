#### 基础使用

<common-code-format>

  <template #source>
    <PC-ndSelectBusiness-ndSelectBusiness> </PC-ndSelectBusiness-ndSelectBusiness>
  </template>

  @[code](../.vuepress/components/PC/ndSelectBusiness/ndSelectBusiness.vue)

</common-code-format>

#### 说明

1. 当选择其他, 创建新数据时, 返回的数据id为空, 只有数据名称

#### 属性配置

| 参数           | 说明                                                           | 类型   | 默认值 |
| -------------- | -------------------------------------------------------------- | ------ | ------ |
| options           | 数据源 | `Array` | []    |
| tipInfo | 下拉框首条的提示信息                                     | `String`  | 如以下选项没有您的选择，请继续输入更多文字查找    |
| prop  | 自定义的使用的数据的key-value                           | `Object` | `{id: 'id', label: 'label'}`  |
| remoteMethod  | 请求方法,参数为输入框内容     | `Function` | `() => {return []}`  |
| formTitle  | 新建弹窗的标题                                             | `[String, Number]` | 请输入名称  |
| formPlaceholder  | 新建弹窗输入框的placeholder                                             | `String` | 请输入  |
| inputMax  | 新建弹窗的输入框最大限制输入数量                                            | `Number` | 25  |
| loading  | 下拉框数据的loading状态                                             | `Boolean` | false  |
| ...$attrs  | element-plus的扩展属性                                            |  |   |