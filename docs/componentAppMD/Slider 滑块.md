#### Slider 滑块说明

- 介绍：滑动输入条，用于在给定的范围内选择一个值。

#### 基础使用


<br />

<common-code-format>
  <template #source>
    <APP-ndSlider-ndSlider></APP-ndSlider-ndSlider>
  </template>

  @[code](../.vuepress/components/APP/ndSlider/ndSlider.vue)

</common-code-format>


#### 参数配置 Props -- nd-steps

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| left-content         | 左边文字 |   string |      -       |
| right-content         | 右边文字 |   string |     -       |
| left-icon         | 左边图标 |   string |      -       |
| right-icon         | 右边图标 |   string |     -       |
| top-left-content         | 左上文字 |   string |      -      |
| top-right-content         | 右上文字 |   string |      -       |
| showStepDott         | 显示步长小圆点 |   boolean |      false       |
| showToolTip         | 显示提示信息（自定义滑块才生效） |   string |      true       |
| disabledColor         | 禁用颜色 |   string |      #c1cbdb      |
|v-model	|当前进度百分比，在双滑块模式下为数组格式	number | [number, number]	|0
|max	|最大值	number | string	|100
|min	|最小值	number | string	|0
|step	|步长	number | string	|1
|bar-height	|进度条高度，默认单位为 px	|number \| string	|2px
|button-size	|滑块按钮大小，默认单位为 px	|number \| string	|24px
|active-color	|进度条激活态颜色	|string	|#1989fa
|inactive-color	|进度条非激活态颜色	|string	|#e5e5e5
|range	|是否开启双滑块模式	|boolean	|false
|reverse	|是否将进度条反转	|boolean	|false
|disabled	|是否禁用滑块	|boolean	|false
|readonly	|是否为只读状态，只读状态下无法修改滑块的值	|boolean	|false
|vertical	|是否垂直展示	|boolean	|false




#### 事件

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
|update:model-value	|进度变化时实时触发	|value: number
|change	|进度变化且结束拖动后触发	|value: number
|drag-start	|开始拖动时触发	|event: TouchEvent
|drag-end	|结束拖动时触发	|event: TouchEvent

#### Slots

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
|left-icon|自定义左侧图标|
|right-icon|自定义右侧图标|
|button	|自定义滑块按钮	|{ value: number }
|left-button	|自定义左侧滑块按钮（双滑块模式下）	|{ value: number }
|right-button	|自定义右侧滑块按钮（双滑块模式下）	|{ value: number }



















