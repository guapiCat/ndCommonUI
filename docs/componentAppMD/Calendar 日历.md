#### Calendar 日历选择器说明

- 基础样式：将时间以日历的形式进行平铺排布
- 主要状态：Default(默认)、Selected(选中)
- 使用场景：主要帮助用户对时间有清晰的概念，帮助用户选择需要的日期
- 主要交互：用户点击某个操作通过搭配弹出层使用，平铺日历默认显示当前时间；点击选择相应的时间，可带有按钮
- 开发配置：颜色、按钮、文案、范围、弹窗位置均可根据实际产品场景可调节

#### 选择单个日期

<common-code-format>
  <template #source>
    <APP-ndCalendar-ndCalendar></APP-ndCalendar-ndCalendar>
  </template>

  @[code](../.vuepress/components/APP/ndCalendar/ndCalendar.vue)

</common-code-format>



<br />


#### 选择多个日期

设置 `type` 为 `multiple` 后可以选择多个日期，此时 `confirm` 事件返回的 `date` 为数组结构，数组包含若干个选中的日期。

<br />

<common-code-format>
  <template #source>
    <APP-ndCalendar-ndCalendarMultiple></APP-ndCalendar-ndCalendarMultiple>
  </template>

  @[code](../.vuepress/components/APP/ndCalendar/ndCalendarMultiple.vue)

</common-code-format>



<br />


#### 选择日期区间

设置 `type` 为 `range` 后可以选择日期区间，此时 `confirm` 事件返回的 `date` 为数组结构，数组第一项为开始时间，第二项为结束时间。

<br />

<common-code-format>
  <template #source>
    <APP-ndCalendar-ndCalendarRange></APP-ndCalendar-ndCalendarRange>
  </template>

  @[code](../.vuepress/components/APP/ndCalendar/ndCalendarRange.vue)

</common-code-format>



<br />


#### 参数配置

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| type | 选择类型:<br/>`single` 表示选择单个日期，<br/>`multiple` 表示选择多个日期，<br/>`range` 表示选择日期区间 | string | `single`     |
| title | 日历标题                                                     | string                 | `日期选择`        |
| color | 主题色，对底部按钮和选中日期生效 | string | `#1989fa` |
| min-date | 可选择的最小日期 | Date | `当前日期` |
| max-date | 可选择的最大日期 | Date | `当前日期的六个月后` |
| default-date | 默认选中的日期，`type` 为 `multiple` 或 `range` 时为数组，传入 `null` 表示默认不选择 | Date \| Date[] \| null | `今天` |
| row-height | 日期行高 | number \| string | `64` |
| formatter | 日期格式化函数 | (day: Day) => Day | `-` |
| poppable | 是否以弹层的形式展示日历 | boolean | `true` |
| lazy-render | 是否只渲染可视区域的内容 | boolean | `true` |
| show-mark | 是否显示月份背景水印 | boolean | `true` |
| show-title | 是否展示日历标题 | boolean | `true` |
| show-subtitle | 是否展示日历副标题（年月） | boolean | `true` |
| show-confirm | 是否展示确认按钮 | boolean | `true` |
| readonly | 是否为只读状态，只读状态下不能选择日期 | boolean | `false` |
| confirm-text | 确认按钮的文字 | string | `确定` |
| confirm-disabled-text | 确认按钮处于禁用状态时的文字 | string | `确定` |
| first-day-of-week | 设置周起始日 | 0-6 | 0 |



<br />

#### Calendar Popable 参数

当 Calendar 的 `poppable` 为 `true` 时，支持以下 props:

| 参数                   | 说明                                    | 类型              | 默认值   |
| ---------------------- | --------------------------------------- | ----------------- | -------- |
| v-model:show           | 是否显示日历弹窗                        | boolean           | `false`  |
| position               | 弹出位置，可选值为 `top` `right` `left` | string            | `bottom` |
| round                  | 是否显示圆角弹窗                        | boolean           | `true`   |
| close-on-popstate      | 是否在页面回退时自动关闭                | boolean           | `true`   |
| close-on-click-overlay | 是否在点击遮罩层后关闭                  | boolean           | `true`   |
| safe-area-inset-top    | 是否开启顶部安全区适配                  | boolean           | `false`  |
| safe-area-inset-bottom | 是否开启底部安全区适配                  | boolean           | `true`   |
| teleport               | 指定挂载的节点                          | string \| Element | `-`      |



<br />

#### Calendar Range 参数

当 Calendar 的 `type` 为 `range` 时，支持以下 props:

| 参数              | 说明                                         | 类型             | 默认值           |
| ----------------- | -------------------------------------------- | ---------------- | ---------------- |
| max-range         | 日期区间最多可选天数                         | number \| string | `无限制`         |
| range-prompt      | 范围选择超过最多可选天数时的提示文案         | string           | `最多选择 xx 天` |
| show-range-prompt | 范围选择超过最多可选天数时，是否展示提示文案 | boolean          | `true`           |
| allow-same-day    | 是否允许日期范围的起止时间为同一天           | boolean          | `false`          |



<br />

#### Calendar  Multiple 参数

当 Calendar 的 `type` 为 `multiple` 时，支持以下 props:

| 参数         | 说明                             | 类型             | 默认值           |
| ------------ | -------------------------------- | ---------------- | ---------------- |
| max-range    | 日期最多可选天数                 | number \| string | `无限制`         |
| range-prompt | 选择超过最多可选天数时的提示文案 | string           | `最多选择 xx 天` |



<br />

#### Day 数据结构

日历中的每个日期都对应一个 Day 对象，通过`formatter`属性可以自定义 Day 对象的内容

| 键名       | 说明                                                         | 类型     |
| ---------- | ------------------------------------------------------------ | -------- |
| date       | 日期对应的 Date 对象                                         | `Date`   |
| type       | 日期类型，可选值为 `selected`、`start`、`middle`、`end`、`disabled` | `string` |
| text       | 中间显示的文字                                               | `string` |
| topInfo    | 上方的提示信息                                               | `string` |
| bottomInfo | 下方的提示信息                                               | `string` |
| className  | 额外类名                                                     | `string` |



<br />

#### 事件

| 事件名         | 说明                                                         | 回调参数                        |
| -------------- | ------------------------------------------------------------ | ------------------------------- |
| select         | 点击并选中任意日期时触发                                     | `value: Date | Date[] `         |
| confirm        | 日期选择完成后触发，若 `show-confirm` 为 `true`，则点击确认按钮后触发 | `value: Date | Date[] `         |
| open           | 打开弹出层时触发                                             | `-`                             |
| close          | 关闭弹出层时触发                                             | `-`                             |
| opened         | 打开弹出层且动画结束后触发                                   | `-`                             |
| closed         | 关闭弹出层且动画结束后触发                                   | `-`                             |
| unselect       | 当日历组件的 `type` 为 `multiple` 时，取消选中日期时触发     | `value: Date`                   |
| month-show     | 当某个月份进入可视区域时触发                                 | `{ date: Date, title: string }` |
| over-range     | 范围选择超过最多可选天数时触发                               | `-`                             |
| click-subtitle | 点击日历副标题时触发                                         | `event: MouseEvent`             |



<br />

#### 方法

通过 ref 可以获取到 Calendar 实例并调用实例方法

| 方法名          | 说明                                                 | 参数                   | 返回值                 |
| --------------- | ---------------------------------------------------- | ---------------------- | ---------------------- |
| reset           | 将选中的日期重置到指定日期，未传参时会重置到默认日期 | `date?: Date | Date[]` | `-`                    |
| scrollToDate    | 滚动到某个日期                                       | `date: Date`           | `-`                    |
| getSelectedDate | 获取选中的日期                                       | `-`                    | `Date | Date[] | null` |











