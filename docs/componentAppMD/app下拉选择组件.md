#### 使用注意点

- 使用传入请求httpReq时, 需要注意传入的控制参数param的paramKey
- 使用自定义的请求方法httpFn时, 参数为输入的关键字



#### 基础使用

<common-code-format>
****
  <template #source>
    <APP-ndSelectBusiness-nd-select-1></APP-ndSelectBusiness-nd-select-1>
  </template>

  @[code](../.vuepress/components/APP/ndSelectBusiness/nd-select-1.vue)

</common-code-format>


#### 参数配置

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| placeholder          | 输入框的placeholder | `String` | 请输入名称(至少三个字)           |
| tipInfo          | 下拉框中的提示信息 | `String` | 如以下选项没有您需要的数据，请继续输入更多文字查找          |
| httpReq          | 请求(例如Dataaccess.getUerInfo), 将请求放入组件中操作 | `Function` | null            |
| httpFn          | 自定义请求方法, 参数为输入框内容(需要返回一个Promise对象, resolve返回数组数据) | `Function` |     `Promise.resolve([])`       |
| prop          | 自定义列表数据显示使用的key | `Object` | {id: 'id', label: 'label'}           |
| paramKey          | httpReq模式时, 控制请求的传参的key,  | `String` | -        |
| moreParam          | httpReq模式下, 需要携带的更多的请求参数 | `Object` | {}           |
| formPlaceholder          | 新建内容时, 表单中input的placeholder | `String` | -           |
| inputMax          | 新建内容时, 表单中input的最大可输入长度 | `Number` | 25           |
| propClass          | 挂载在组件根元素的类名 | `String` | -           |
| maxHeight          | 下拉选择框的最大高度, 控制滚动高度 | `Number` | 0           |





















