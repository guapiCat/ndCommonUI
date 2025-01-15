#### DropdownMenu 下拉菜单说明

- 主要状态：Default(默认)、Selected(选中)、Disabled(禁用)
- 使用场景：考虑到App的展示空间，建议选项数量在5-9条下使用下拉菜单
- 主要交互：当用户点击某个触发图标/箭头时，会弹出一个项目列表，用户需从中选择一项或多项来满足自己的选择需求
- 开发配置：选项的个数、高度、颜色、文案、图标、向下向上弹出位置均可根据实际产品场景可调节。与item组件配合使用
- 其它说明：此组件默认使用了overlay蒙层，修改蒙层透明度等主题配置会在此组件生效。如果自定义配置可以进行样式透传


#### 基础使用


<br />

<common-code-format>
  <template #source>
    <APP-ndTab-ndTab></APP-ndTab-ndTab>
  </template>

  @[code](../.vuepress/components/APP/ndTab/ndTab.vue)

</common-code-format>


#### 参数配置 Tabs Props

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| ...$attrs          | vant扩展属性 |  |             |
| noBorder          | 胶囊性 | Boolean |       false      |
| isBow          | 有边框有背景色的导航 | Boolean |       false      |

#### 参数配置 Tab Props * 传入title时将不再使用title插槽

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| ...$attrs          | vant扩展属性 |  |             |




#### 事件 Tabs Events

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| ndTabsClickTab      | 点击标签时触发 | `{ name: string / number, title: string, event: MouseEvent, disabled: boolean }` |
| ndTabsChange      | 当前激活的标签改变时触发 | `{ name: string / number, title: string }` |
| ndTabsRendered      | 标签内容首次渲染时触发（仅在开启延迟渲染后触发） | `{ name: string / number, title: string }` |
| ndTabsScroll      | 滚动时触发，仅在 sticky 模式下生效 | `{ scrollTop: number, isFixed: boolean }` |



















