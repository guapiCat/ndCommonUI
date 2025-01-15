#### 气泡弹出框说明

- 基础样式：深色/浅色样式(纯文字、图标文字)；支持顶部左中右位置、左侧上中下位置、右侧上中下位置、底部左中右位置
- 主要状态：Default(默认)、Click(点击)、Disabled(禁用)
- 使用场景：引导指示功能、快捷功能、功能操作选项确认；例如图纸通view-更多
- 主要交互：点击某个控件触发，在气泡弹出框内的按钮或非气泡弹出框的屏幕其他区域可关闭
- 开发配置：气泡弹窗框文案、静态图标、自定义内容均可根据实际产品场景可调节


#### 基础用法

当 Popover 弹出时，会基于 `reference` 插槽的内容进行定位。

<br />

<common-code-format>

  <template #source>
    <APP-ndPopover-ndPopoverBase></APP-ndPopover-ndPopoverBase>
  </template>

  @[code](../.vuepress/components/APP/ndPopover/ndPopoverBase.vue)

</common-code-format>

#### 带icon样式

在 `actions` 数组中，可以通过 `icon` 字段来定义选项的图标，支持传入图标名称或图片链接

<br />

<common-code-format>

  <template #source>
    <APP-ndPopover-ndPopoverIcon></APP-ndPopover-ndPopoverIcon>
  </template>

  @[code](../.vuepress/components/APP/ndPopover/ndPopoverIcon.vue)

</common-code-format>

#### 禁用选项

在 `actions` 数组中，可以通过 `disabled` 字段来禁用某个选项。

<br />

<common-code-format>

  <template #source>
    <APP-ndPopover-ndPopoverDisabled></APP-ndPopover-ndPopoverDisabled>
  </template>

  @[code](../.vuepress/components/APP/ndPopover/ndPopoverDisabled.vue)

</common-code-format>

#### 图片+文本+图标组合类型 type="sort"

设置`type="sort"`属性

<br />

<common-code-format>

  <template #source>
    <APP-ndPopover-ndPopoverSort></APP-ndPopover-ndPopoverSort>
  </template>

  @[code](../.vuepress/components/APP/ndPopover/ndPopoverSort.vue)

</common-code-format>

#### 自定义内容

通过默认插槽，可以在 Popover 内部放置任意内容。

<br />

<common-code-format>

  <template #source>
    <APP-ndPopover-ndPopoverCustom></APP-ndPopover-ndPopoverCustom>
  </template>

  @[code](../.vuepress/components/APP/ndPopover/ndPopoverCustom.vue)

</common-code-format>

#### 参数配置

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| v-model:show           | 是否展示气泡弹出层 | Boolean | `false`       |
| actions | 选项列表 | PopoverAction[]           | `[]`          |
| placement | 弹出位置                                          | PopoverPlacement | `bottom`   |
| theme | 主题风格，可选值为 `dark` | PopoverTheme |        `light`      |
| trigger | 触发方式，可选值为 `manual` | PopoverTrigger | `click`    |
| duration               | 动画时长，单位秒，设置为 0 可以禁用动画 | String \| Number |        `0.3`        |
| offset                 | 出现位置的偏移量                        | [number, number] |        `[0, 8]`     |
| overlay                | 是否显示遮罩层 | Boolean |          `false`          |
| overlay-class          | 自定义遮罩层类名 | String \| Array \| Object | `-` |
| overlay-style          | 自定义遮罩层样式 | Object | `-` |
| show-arrow             | 是否展示小箭头 | Boolean | `true` |
| close-on-click-action  | 是否在点击选项后关闭 | Boolean | `true` |
| close-on-click-outside | 是否在点击外部元素后关闭菜单 | Boolean | `true` |
| close-on-click-overlay | 是否在点击遮罩层后关闭菜单 | Boolean | `true` |
| teleport               | 指定挂载的节点 | String \| Element | `body` |
| icon-prefix            | 图标类名前缀 | String | `van-icon` |
| type            | 气泡框类型，sort:文本+图片+文本 | String | --- |



#### PopoverAction 数据结构

`actions` 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：
<br/>
其它：当设置为`type="sort"`时，只能设置`text, leftImg, rightImg`

| 键名      | 说明                                       | 类型                      |
| --------- | ------------------------------------------ | ------------------------- |
| text      | 选项文字                                   | `string`                  |
| icon      | 文字左侧的图标，支持传入图标名称或图片链接 | `string`                  |
| color     | 选项文字颜色                               | `string`                  |
| disabled  | 是否为禁用状态                             | `boolean`                 |
| className | 为对应选项添加额外的类名                   | String \| array \| object |
| leftImg | sort类型左侧图片                   | `string` |
| rightImg | sort类型右侧图片                   | `string` |


#### 事件

| 事件名        | 说明                     | 回调参数                               |
| ------------- | ------------------------ | -------------------------------------- |
| select        | 点击选项时触发           | `action: PopoverAction, index: number` |
| open          | 打开菜单时触发           | `-`                                    |
| close         | 关闭菜单时触发           | `-`                                    |
| opened        | 打开菜单且动画结束后触发 | `-`                                    |
| closed        | 关闭菜单且动画结束后触发 | `-`                                    |
| click-overlay | 点击遮罩层时触发         | `event: MouseEvent`                    |



#### 插槽

| 名称      | 说明                        | 参数                                         |
| --------- | --------------------------- | -------------------------------------------- |
| default   | 自定义菜单内容              | `-`                                          |
| reference | 触发 Popover 显示的元素内容 | `-`                                          |
| action    | 自定义选项内容              | `*{ action: PopoverAction, index: number }*` |









