#### Cascader 级联选择器说明

- 基础样式：文本选择器
- 主要状态：Default(默认)、Selected(选中)
- 使用场景：主要是用户用于多层级数据的选择，典型场景为省市区选择。
- 主要交互：用户点击某个操作通过搭配弹出层使用，可点击在多层联动数据来选择相应选项；允许左右滑动
- 开发配置：选项的个数、文本、颜色、图标均可根据实际产品场景可调节

#### 基础使用


<br />

<common-code-format>
  <template #source>
    <APP-ndCascader-ndCascader></APP-ndCascader-ndCascader>
  </template>

  @[code](../.vuepress/components/APP/ndCascader/ndCascader.vue)

</common-code-format>



#### 参数配置

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| title     | 顶部标题 | String | `-`           |
| value | 选中项的值 | String \| Number | `-`            |
| options | 可选项数据源                  | CascaderOption[] |          `[]`          |
| placeholder | 未选中时的提示文案            | String |         `请选择`      |
| active-color | 选中状态的高亮颜色            | String | `#1989fa`         |
| swipeable | 是否开启手势左右滑动切换 | Boolean |          `false`          |
| closeable | 是否显示关闭图标              | Boolean | `true`                                                   |
| show-header | 是否展示标题栏                | Boolean |          `true`          |
| close-icon | 关闭图标名称或图片链接        | String | `cross` |
| field-names | 自定义 `options` 结构中的字段 | CascaderFieldNames | `{ text: 'text', value: 'value', children: 'children' }` |



#### CascaderOption 数据结构

`options` 属性是一个由对象构成的数组，数组中的每个对象配置一个可选项，对象可以包含以下值：

| 键名      | 说明                     | 类型                      |
| --------- | ------------------------ | ------------------------- |
| text      | 选项文字（必填）         | String                    |
| value     | 选项对应的值（必填）     | String \| Number          |
| color     | 选项文字颜色             | String                    |
| children  | 子选项列表               | CascaderOption[]          |
| disabled  | 是否禁用选项             | Boolean                   |
| className | 为对应列添加额外的 class | String \| Array \| Object |





#### 事件

| 事件名    | 说明                   | 回调参数                                                     |
| --------- | ---------------------- | ------------------------------------------------------------ |
| change    | 选中项变化时触发       | `{ value: string | number, selectedOptions: CascaderOption[], tabIndex: number } ` |
| finish    | 全部选项选择完成后触发 | `{ value: string | number, selectedOptions: CascaderOption[], tabIndex: number }` |
| close     | 点击关闭图标时触发     | `-`                                                          |
| click-tab | 点击标签时触发         | `tabIndex: number, title: string`                            |















