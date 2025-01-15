#### 搜索说明

- 基础样式：图标+搜索预设文案+清空输入框文本+取消搜索操作
- 主要状态：Default(默认)、Active(获取光标)、Typing(正在输入)、Typed(完成)
- 使用场景：主要用于用户输入搜索信息，并进行页面内容搜索
- 主要交互：点击获取光标，输入短词、长文本，可清空输入文本，可取消/确定搜索
- 开发配置：搜索大小、背景色、预设文案、文案居左居中、静态图标、圆角均可根据实际产品场景可调节。输入框的背景色可通过主题配置或样式穿透调整。



#### 基础样式

`v-model` 用于控制搜索框中的文字

<br />

<common-code-format>

  <template #source>
    <APP-ndSearch-ndSearchBase></APP-ndSearch-ndSearchBase>
  </template>

  @[code](../.vuepress/components/APP/ndSearch/ndSearchBase.vue)

</common-code-format>

#### 搜索框内容对齐

通过 `input-align` 属性设置搜索框内容的对齐方式，可选值为 `center`、`right`。

<br />

<common-code-format>

  <template #source>
    <APP-ndSearch-ndSearchTextCenter></APP-ndSearch-ndSearchTextCenter>
  </template>

  @[code](../.vuepress/components/APP/ndSearch/ndSearchTextCenter.vue)

</common-code-format>

#### 输入框背景色

通过 `innerBackground` 属性设置。

<br />

<common-code-format>

  <template #source>
    <APP-ndSearch-ndSearchInnerBackgroundColor></APP-ndSearch-ndSearchInnerBackgroundColor>
  </template>

  @[code](../.vuepress/components/APP/ndSearch/ndSearchInnerBackgroundColor.vue)

</common-code-format>

#### 自定义背景色

通过 `background` 属性可以设置搜索框外部的背景色

<br />

<common-code-format>

  <template #source>
    <APP-ndSearch-ndSearchBackgroundColor></APP-ndSearch-ndSearchBackgroundColor>
  </template>

  @[code](../.vuepress/components/APP/ndSearch/ndSearchBackgroundColor.vue)

</common-code-format>

#### 自定义按钮

使用 `action` 插槽可以自定义右侧按钮的内容。使用插槽后，`cancel` 事件将不再触发。

<br />

<common-code-format>

  <template #source>
    <APP-ndSearch-ndSearchBaseCustomButton></APP-ndSearch-ndSearchBaseCustomButton>
  </template>

  @[code](../.vuepress/components/APP/ndSearch/ndSearchBaseCustomButton.vue)

</common-code-format>

#### 参数配置

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| v-model   | 当前输入的值 | Number \| String | `-`            |
| label | 搜索框左侧文本 | String | `-`                  |
| name | 名称，作为提交表单时的标识符 | String | `-` |
| shape | 搜索框形状，可选值为 `round` | String | `square` |
| id | 搜索框 id，同时会设置 label 的 for 属性 | String | `van-search-n-input` |
| background | 搜索框外部背景色 | String | `#F5F7FA` |
| borderRadius | 圆角 | String | `2px` |
| maxlength | 输入的最大字符数 | Number \| String | `-`                  |
| placeholder | 占位提示文字 | String | `请输入搜索关键词` |
| clearable | 是否启用清除图标，点击清除图标后会清空输入框 | Boolean | `true` |
| clear-icon | 清除图标名称或图片链接 | String | `clear` |
| clear-trigger | 显示清除图标的时机，`always` 表示输入框不为空时展示，<br/>`focus` 表示输入框聚焦且不为空时展示 | String | `focus` |
| autofocus | 是否自动聚焦，iOS 系统不支持该属性 | Boolean | `false` |
| show-action | 是否在搜索框右侧显示取消按钮 | Boolean | `false` |
| action-text | 取消按钮文字 | String | `取消` |
| disabled | 是否禁用输入框 | Boolean | `false` |
| readonly | 是否将输入框设为只读状态，只读状态下无法输入内容 | Boolean | `false` |
| error | 是否将输入内容标红 | Boolean | `false` |
| error-message | 底部错误提示文案，为空时不展示 | String | `-` |
| formatter | 输入内容格式化函数 | *(val: string) => string* | `-` |
| format-trigger | 格式化函数触发的时机，可选值为 `onBlur` | String | `onChange` |
| input-align | 输入框内容对齐方式，可选值为 `center` `right` | String | `left` |
| left-icon | 输入框左侧图标名称或图片链接 | String | `search` |
| right-icon | 输入框右侧图标名称或图片链接 | String | `-` |
| autocomplete | input 标签原生的[自动完成属性] | String | `-` |



#### 事件

| 事件名             | 说明                 | 回调参数                       |
| ------------------ | -------------------- | ------------------------------ |
| search             | 确定搜索时触发       | `value: string (当前输入的值)` |
| update:model-value | 输入框内容变化时触发 | `value: string (当前输入的值)` |
| focus              | 输入框获得焦点时触发 | `event: Event`                 |
| blur               | 输入框失去焦点时触发 | `event: Event`                 |
| click-input        | 点击输入区域时触发   | `event: MouseEvent`            |
| click-left-icon    | 点击左侧图标时触发   | `event: MouseEvent`            |
| click-right-icon   | 点击右侧图标时触发   | `event: MouseEvent`            |
| clear              | 点击清除按钮后触发   | `event: MouseEvent`            |
| cancel             | 点击取消按钮时触发   | `-`                            |



#### 方法

通过 `ref` 可以获取到 Search 实例并调用实例方法

| 方法名 | 说明           | 参数 | 返回值 |
| ------ | -------------- | ---- | ------ |
| focus  | 获取输入框焦点 | `-`  | `-`    |
| blur   | 取消输入框焦点 | `-`  | `-`    |


#### 插槽

| 插槽名 | 说明           |
| ------ | -------------- |
| left  | 左侧内容 |
| label  | 左侧文本 |
| leftIcon  | 左侧图标 |
| action  | 右侧内容，设置show-action属性后生效 |
| rightIcon  | 右侧图标 |










