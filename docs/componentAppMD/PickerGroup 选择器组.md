#### PickerGroup 选择器组说明

- 用于结合多个 Picker 选择器组件，在一次交互中完成多个值的选择。

#### 选择日期时间

<common-code-format>
  <template #source>
    <APP-ndPickerGroup-ndPickerGroupDateTime></APP-ndPickerGroup-ndPickerGroupDateTime>
  </template>

  @[code](../.vuepress/components/APP/ndPickerGroup/ndPickerGroupDateTime.vue)

</common-code-format>


<br />

#### 下一步

<common-code-format>
  <template #source>
    <APP-ndPickerGroup-ndPickerGroupNext></APP-ndPickerGroup-ndPickerGroupNext>
  </template>

  @[code](../.vuepress/components/APP/ndPickerGroup/ndPickerGroupNext.vue)

</common-code-format>


<br />

#### 日期范围
* 说明：日期组能设置最大最小日期，通过监听初始时间的v-model，动态设置为结束日期组件的最小日期，即可控制合理时间范围

<common-code-format>
  <template #source>
    <APP-ndPickerGroup-ndPickerGroupDateRange></APP-ndPickerGroup-ndPickerGroupDateRange>
  </template>

  @[code](../.vuepress/components/APP/ndPickerGroup/ndPickerGroupDateRange.vue)

</common-code-format>


<br />

#### 时间范围

<common-code-format>
  <template #source>
    <APP-ndPickerGroup-ndPickerGroupTimeRange></APP-ndPickerGroup-ndPickerGroupTimeRange>
  </template>

  @[code](../.vuepress/components/APP/ndPickerGroup/ndPickerGroupTimeRange.vue)

</common-code-format>


<br />




#### 参数配置

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| tabs                | 设置标签页的标题 | string[] | `[]`   |
| title | 顶部栏标题 | string | `''` |
| next-step-tex | 下一步按钮的文字 | string | `''` |
| confirm-button-text | 确认按钮的文字 | string | `确认` |
| cancel-button-text | 取消按钮的文字 | string | `取消` |



<br />









