#### Picker 选择器说明

- 基础样式：单选选择器、多选选择器
- 主要状态：Default(默认)、Selected(选中）、Disabled(禁用)
- 使用场景：主要是用户必须在其中选择一个（或多个）选项
- 主要交互：通过搭配弹出层使用，可点击、滑动、多联动来选择相应选项；可带有“取消”“确认”操作
- 开发配置：选项的个数、文本、交互操作、颜色、动态加载数据、配置按钮或图标均可根据实际产品场景可调节

#### 基础样式 - 无标题

<common-code-format>
  <template #source>
    <APP-ndPicker-ndPickerBase></APP-ndPicker-ndPickerBase>
  </template>

  @[code](../.vuepress/components/APP/ndPicker/ndPickerBase.vue)

</common-code-format>


<br />

#### 基础样式 - 带标题

<common-code-format>
  <template #source>
    <APP-ndPicker-ndPickerTitle></APP-ndPicker-ndPickerTitle>
  </template>

  @[code](../.vuepress/components/APP/ndPicker/ndPickerTitle.vue)

</common-code-format>


<br />

#### 基础样式 - 多列选择

<common-code-format>
  <template #source>
    <APP-ndPicker-ndPickerColumns></APP-ndPicker-ndPickerColumns>
  </template>

  @[code](../.vuepress/components/APP/ndPicker/ndPickerColumns.vue)

</common-code-format>


<br />

#### 基础样式 - 级联选择

<common-code-format>
  <template #source>
    <APP-ndPicker-ndPickerCascade></APP-ndPicker-ndPickerCascade>
  </template>

  @[code](../.vuepress/components/APP/ndPicker/ndPickerCascade.vue)

</common-code-format>


<br />

#### 基础样式 - 禁用

<common-code-format>
  <template #source>
    <APP-ndPicker-ndPickerDisable></APP-ndPicker-ndPickerDisable>
  </template>

  @[code](../.vuepress/components/APP/ndPicker/ndPickerDisable.vue)

</common-code-format>


<br />




#### 参数配置

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| columns             | 对象数组，配置每一列显示的数据                      | PickerOption[] \| PickerOption[][] | `[]`   |
| columns-field-names | 自定义 `columns` 结构中的字段 | object | `{ text: 'text', value: 'value', children: 'children' }` |
| title | 顶部栏标题 | string | `-` |
| confirm-button-text | 确认按钮文字 | string | `确认` |
| cancel-button-text | 取消按钮文字 | string | `取消` |
| toolbar-position | 顶部栏位置，可选值为 `bottom` | string | `top` |
| loading | 是否显示加载状态 | boolean | `false` |
| show-toolbar | 是否显示顶部栏 | boolean | `true` |
| allow-html | 是否允许选项内容中渲染 HTML | boolean | `false` |
| option-height | 选项高度，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | number \| string | `44` |
| visible-option-num | 可见的选项个数 | number \| string | `6` |
| swipe-duration | 快速滑动时惯性滚动的时长，单位 `ms` | number \| string | `1000` |



<br />

#### 事件

| 事件名       | 说明                                                     | 回调参数                                                     |
| ------------ | -------------------------------------------------------- | ------------------------------------------------------------ |
| confirm      | 点击完成按钮时触发                                       | `{ selectedValues, selectedOptions, selectedIndexes } `      |
| cancel       | 点击取消按钮时触发                                       | `{ selectedValues, selectedOptions, selectedIndexes } `      |
| change       | 选中的选项改变时触发                                     | `{ selectedValues, selectedOptions, selectedIndexes, columnIndex }` |
| click-option | 点击选项时触发                                           | `{ currentOption, selectedValues, selectedOptions, selectedIndexes, columnIndex }` |
| scroll-into  | 当用户通过点击或拖拽让一个选项滚动到中间的选择区域时触发 | `{ currentOption, columnIndex }`                             |



<br />









