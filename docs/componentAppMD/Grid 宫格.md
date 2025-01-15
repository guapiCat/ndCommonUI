#### Grid 宫格说明
- 基础样式：图文组合
- 使用场景：主要是把各个入口的图标放在界面上
- 主要交互：点击跳转
- 开发配置：宫格的列数、文本、图标、间距、内容排布、徽标均可根据实际产品场景可调节

#### 基础使用
通过 icon 属性设置格子内的图标，title 属性设置标题内容，text 属性设置小正文内容。


<br />

<common-code-format>
  <template #source>
    <APP-ndGrid-ndGridBasic></APP-ndGrid-ndGridBasic>
  </template>

  @[code](../.vuepress/components/APP/ndGrid/ndGridBasic.vue)

</common-code-format>

#### 自定义列数
默认一行展示四个格子，可以通过 column-num 自定义列数。

<br />

<common-code-format>
  <template #source>
    <APP-ndGrid-ndGridColumnNum></APP-ndGrid-ndGridColumnNum>
  </template>

  @[code](../.vuepress/components/APP/ndGrid/ndGridColumnNum.vue)

</common-code-format>

#### 排列方式
将 direction 属性设置为 horizontal，可以让宫格的内容呈横向排列。

<br />

<common-code-format>
  <template #source>
    <APP-ndGrid-ndGridDirection></APP-ndGrid-ndGridDirection>
  </template>

  @[code](../.vuepress/components/APP/ndGrid/ndGridDirection.vue)

</common-code-format>

#### 格子间距
通过 gutter 属性设置格子之间的距离。

<br />

<common-code-format>
  <template #source>
    <APP-ndGrid-ndGridGutter></APP-ndGrid-ndGridGutter>
  </template>

  @[code](../.vuepress/components/APP/ndGrid/ndGridGutter.vue)

</common-code-format>

#### 格子边框显示与隐藏
通过 border 属性设置格子边框显示与隐藏。

<br />

<common-code-format>
  <template #source>
    <APP-ndGrid-ndGridBorder></APP-ndGrid-ndGridBorder>
  </template>

  @[code](../.vuepress/components/APP/ndGrid/ndGridBorder.vue)

</common-code-format>

#### 页面导航
通过 to 属性设置 router 路由；
通过 url 属性设置完整跳转链接

<br />

<common-code-format>
  <template #source>
    <APP-ndGrid-ndGridNavigate></APP-ndGrid-ndGridNavigate>
  </template>

  @[code](../.vuepress/components/APP/ndGrid/ndGridNavigate.vue)

</common-code-format>

#### 徽标
设置 dot 属性后，会在图标右上角展示一个小红点。设置 badge 属性后，会在图标右上角展示相应的徽标。
设置 badgeProps 属性，可以修改颜色、位置等属性
<br />

<common-code-format>
  <template #source>
    <APP-ndGrid-ndGridDot></APP-ndGrid-ndGridDot>
  </template>

  @[code](../.vuepress/components/APP/ndGrid/ndGridDot.vue)

</common-code-format>

#### nd-grid 参数配置 Props

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| column-num              | 自定义列数                 |  Number     |      4       |
| gutter                  | 格子间距                   |  Number     |      0       |
| border                  | 是否显示边框               |  Boolean    |      true    |
| square                  | 是否将格子固定为正方形      |  Boolean    |      false   |
| center                  | 是否将格子内容居中显示      |  Boolean    |      true    |
| clickable               | 是否开启格子点击反馈        |  Boolean    |      false   |
| direction               | 格子内容排列的方向          |  String     |   vertical   |
| reverse                 | 是否调换图标和文本的位置    |  Boolean    |      fals    |

#### nd-grid-item 参数配置 Props

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| icon                    | 图标名称或图片链接          |  String     |      -       |
| title                   | 标题文本                   |  String     |      -       |
| text                    | 小正文文本                 |  String     |      -       |
| icon-prefix             | 图标类名前缀               |  String     |   van-icon   |
| icon-color              | 图标颜色                   |  String     |   inherit    |
| dot                     | 是否显示图标右上角小红点    |  Boolean    |      false   |
| badge                   | 图标右上角徽标内容          |  String     |      -       |
| badge-props             | 自定义徽标的属性            |  Object     |      {}      |
| url                     | 点击后跳转的链接地址        |  String     |      -       |
| to                      | 点击后跳转的目标路由对象     |  String或Object|      -       |
| replace                 | 是否在跳转时替换当前页面历史  |  Boolean   |      false      |


#### 事件 nd-grid-item Events

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| ndGridItemClick  | 点击格子触发                       |         event        |

#### nd-grid-item Slot 插槽 

| 名称        | 说明                              |
| ----------  | -------------------------------- |
| default     | 自定义宫格的所有内容               |