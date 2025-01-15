#### Button 按钮说明

- 按钮类型：主要按钮、次要按钮、文字按钮、图标按钮、图标文字按钮
- 主要状态：Default(默认)、Click(点击)、Disabled(禁用)
- 使用场景：大部分都可以使用，例如反馈页、列表页、对话框等
- 主要交互：点击按钮可开始/结束操作，例如跳转页面、显示弹窗、显示反馈等
- 开发配置：按钮的大小、颜色、圆角、边线框、文案、动态/静态图标均可根据实际产品场景可调节



#### 按钮类型

按钮支持 `default`、`primary`、`success`、`warning`、`danger` 五种类型，默认为 `default`。

<br />

<common-code-format>

  <template #source>
    <APP-ndButton-ndButtonType></APP-ndButton-ndButtonType>
  </template>

  @[code](../.vuepress/components/APP/ndButton/ndButtonType.vue)

</common-code-format>

#### 朴素按钮
通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

<br />

<common-code-format>
  <template #source>
    <APP-ndButton-ndButtonPlain></APP-ndButton-ndButtonPlain>
  </template>

  @[code](../.vuepress/components/APP/ndButton/ndButtonPlain.vue)

</common-code-format>

#### 细边框
设置 `hairline` 属性可以展示 0.5px 的细边框。

<br />

<common-code-format>
  <template #source>
    <APP-ndButton-ndButtonHairline></APP-ndButton-ndButtonHairline>
  </template>

  @[code](../.vuepress/components/APP/ndButton/ndButtonHairline.vue)

</common-code-format>

#### 禁用状态
通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

<br />

<common-code-format>
  <template #source>
    <APP-ndButton-ndButtonDisable></APP-ndButton-ndButtonDisable>
  </template>

  @[code](../.vuepress/components/APP/ndButton/ndButtonDisable.vue)

</common-code-format>

#### 加载状态
通过 `loading` 属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过 **loading-text** 设置加载状态下的文字。

<br />

<common-code-format>
  <template #source>
    <APP-ndButton-ndButtonLoading></APP-ndButton-ndButtonLoading>
  </template>

  @[code](../.vuepress/components/APP/ndButton/ndButtonLoading.vue)

</common-code-format>

#### 按钮图标

图标尺寸三种：normal(`24px`)、small(`20px`)、mini(`16px`)

<br />

<common-code-format>
  <template #source>
    <APP-ndButton-ndButtonIcon></APP-ndButton-ndButtonIcon>
  </template>


  @[code](../.vuepress/components/APP/ndButton/ndButtonIcon.vue)

</common-code-format>

#### 按钮尺寸
支持 `large`、`normal`、`small`、`mini` 四种尺寸，默认为 `normal`。

<br />

<common-code-format>
  <template #source>
    <APP-ndButton-ndButtonSize></APP-ndButton-ndButtonSize>
  </template>

  @[code](../.vuepress/components/APP/ndButton/ndButtonSize.vue)

</common-code-format>

#### 块级元素
按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素。

<br />

<common-code-format>
  <template #source>
    <APP-ndButton-ndButtonBlock></APP-ndButton-ndButtonBlock>
  </template>

  @[code](../.vuepress/components/APP/ndButton/ndButtonBlock.vue)

</common-code-format>

#### 页面导航
可以通过 `url` 属性进行 URL 跳转，或通过 `to` 属性进行路由跳转。

<br />

<common-code-format>
  <template #source>
    <APP-ndButton-ndButtonUrl></APP-ndButton-ndButtonUrl>
  </template>

  @[code](../.vuepress/components/APP/ndButton/ndButtonUrl.vue)

</common-code-format>

#### 自定义颜色
通过 `color` 属性可以自定义按钮的颜色。

<br />

<common-code-format>
  <template #source>
    <APP-ndButton-ndButtonColor></APP-ndButton-ndButtonColor>
  </template>

  @[code](../.vuepress/components/APP/ndButton/ndButtonColor.vue)

</common-code-format>

#### 参数配置

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| type          | 类型，可选值为 `primary` `success` `warning` `danger` | String | `default`            |
| size | 尺寸，可选值为 `large` `small` `mini` | String | `normal`            |
| text | 按钮文字                                              | String       |          --           |
| color | 按钮颜色，支持传入 `linear-gradient` 渐变色 | String |          --           |
| text   |   为true表示文字按钮           | String |          --         |
| icon   | 左侧图标名称或图片链接 | String       |          --           |
| icon-prefix |   图标类名前缀   | String |          --           |
| icon-position | 图标展示位置，可选值为 `right` | String |          `left`          |
| tag | 按钮根节点的 HTML 标签 | String | `button` |
| native-type | 原生 button 标签的 type 属性 | String | `button` |
| block | 是否为块级元素 | Boolean | `false` |
| plain | 是否为朴素按钮 | Boolean | `false` |
| square | 是否为方形按钮 | Boolean | `false` |
| round | 是否为圆形按钮 | Boolean | `false` |
| disabled | 是否禁用按钮 | Boolean | `false` |
| hairline | 是否使用 0.5px 边框 | Boolean | `false` |
| loading | 是否显示为加载状态 | Boolean | `false` |
| loading-text | 加载状态提示文字 | String | -- |
| loading-type | 加载图标类型，可选值为 `spinner` | String | `circular` |
| loading-size | 加载图标大小，默认单位为 `px` | Number \| String | `20px` |
| url | 点击后跳转的链接地址 | String | -- |
| to | 点击后跳转的目标路由对象 | String \| Object | -- |
| replace | 是否在跳转时替换当前页面历史 | Boolean | `false` |



#### 事件

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| click      | 点击按钮，且按钮状态不为加载或禁用时触发 | `event: MouseEvent` |
| touchstart | 开始触摸按钮时触发                       | `event: TouchEvent` |



















