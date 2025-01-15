#### DateTimePicker 日期时间选择器说明

- 基础样式：年、月、日、时间滚动的单选项和组合选项
- 主要状态：Default(默认)、Selected(选中)
- 使用场景：主要是帮助用户快速高效的选择/录入时间信息
- 主要交互：在一次交互中完成多个值的选择，可上下滚动选择；带有“取消”“下一步”“确认”操作
- 开发配置：选项的个数、tab个数、文本、颜色、文字按钮均可根据实际产品场景可调节 

#### 选择年月日

<common-code-format>
  <template #source>
    <APP-ndDateTimePicker-ndDateTimePickerYearMonthDay></APP-ndDateTimePicker-ndDateTimePickerYearMonthDay>
  </template>

  @[code](../.vuepress/components/APP/ndDateTimePicker/ndDateTimePickerYearMonthDay.vue)

</common-code-format>



<br />

#### 选择年月

<common-code-format>
  <template #source>
    <APP-ndDateTimePicker-ndDateTimePickerYearMonth></APP-ndDateTimePicker-ndDateTimePickerYearMonth>
  </template>

  @[code](../.vuepress/components/APP/ndDateTimePicker/ndDateTimePickerYearMonth.vue)

</common-code-format>


<br />

#### 选择年

<common-code-format>
  <template #source>
    <APP-ndDateTimePicker-ndDateTimePickerYear></APP-ndDateTimePicker-ndDateTimePickerYear>
  </template>

  @[code](../.vuepress/components/APP/ndDateTimePicker/ndDateTimePickerYear.vue)

</common-code-format>



<br />

#### 选择时间

<common-code-format>
  <template #source>
    <APP-ndDateTimePicker-ndDateTimePickerTime></APP-ndDateTimePicker-ndDateTimePickerTime>
  </template>

  @[code](../.vuepress/components/APP/ndDateTimePicker/ndDateTimePickerTime.vue)

</common-code-format>



<br />

#### 选择日期时间

<common-code-format>
  <template #source>
    <APP-ndDateTimePicker-ndDateTimePickerDateTime></APP-ndDateTimePicker-ndDateTimePickerDateTime>
  </template>

  @[code](../.vuepress/components/APP/ndDateTimePicker/ndDateTimePickerDateTime.vue)

</common-code-format>



<br />

#### 日期区间选择

<common-code-format>
  <template #source>
    <APP-ndDateTimePicker-ndDateTimePickerDateRange></APP-ndDateTimePicker-ndDateTimePickerDateRange>
  </template>

  @[code](../.vuepress/components/APP/ndDateTimePicker/ndDateTimePickerDateRange.vue)

</common-code-format>



<br />

#### 时间区间选择

<common-code-format>
  <template #source>
    <APP-ndDateTimePicker-ndDateTimePickerTimeRange></APP-ndDateTimePicker-ndDateTimePickerTimeRange>
  </template>

  @[code](../.vuepress/components/APP/ndDateTimePicker/ndDateTimePickerTimeRange.vue)

</common-code-format>



<br />




#### 参数配置

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| v-model             | 当前选中的日期/时间 | string[] | `[]`   |
| columns-type | 选项类型，由 `year`、`month` 和 `day` 组成的数组 <br/>选项类型，由 `hour`、`minute` 和 `second` 组成的数组 | string[]               | `['year', 'month', 'day']` |
| title | 顶部栏标题                                                   | string | `-` |
| confirm-button-text | 确认按钮文字                                                 | string | `确认` |
| cancel-button-text | 取消按钮文字                                                 | string | `取消` |
| show-toolbar | 是否显示顶部栏                                               | boolean | `true` |
| loading | 是否显示加载状态                                             | boolean | `false` |
| readonly | 是否为只读状态，只读状态下无法切换选项                       | boolean | `false` |
| filter | 选项过滤函数                                                 | (type: string, options: PickerOption[]) => PickerOption[] | `-` |
| formatter | 选项格式化函数                                               | (type: string, option: PickerOption) => PickerOption | `-` |
| option-height | 选项高度，支持 `px` `vw` `vh` `rem` 单位，默认 `px`          | number \| string | `44` |
| visible-option-num | 可见的选项个数                                               | number \| string | `6` |
| swipe-duration | 快速滑动时惯性滚动的时长，单位 `ms`                          | number \| string | `1000` |



<br />

#### 事件

| 事件名  | 说明               | 回调参数                                           |
| ------- | ------------------ | -------------------------------------------------- |
| confirm | 点击完成按钮时触发 | `{ selectedValues, selectedOptions } `             |
| cancel  | 点击取消按钮时触发 | `{ selectedValues, selectedOptions } `             |
| change  | 选项改变时触发     | `{ selectedValues, selectedOptions, columnIndex }` |



<br />









