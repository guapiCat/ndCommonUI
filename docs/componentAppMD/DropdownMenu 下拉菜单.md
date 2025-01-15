#### DropdownMenu 下拉菜单说明

- 使用场景：考虑到App的展示空间，建议选项数量在5-9条下使用下拉菜单
- 主要交互：当用户点击某个触发图标/箭头时，会弹出一个项目列表，用户需从中选择一项或多项来满足自己的选择需求。
- 开发配置：选项的个数、高度、颜色、文案、图标、向下向上弹出位置均可根据实际产品场景可调节

#### 基础使用
- 注意事项：该组件在使用时需要导入 `ndDropdownMenu` 和 `ndDropdownItem` 两个组件

<br />

<common-code-format>
  <template #source>
    <APP-ndDropdownMenu-ndDropdownMenu></APP-ndDropdownMenu-ndDropdownMenu>
  </template>

  @[code](../.vuepress/components/APP/ndDropdownMenu/ndDropdownMenu.vue)

</common-code-format>


#### 参数配置 ndDropdownMenu Props

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| ...$attrs          | vant扩展属性 |  |             |

#### 参数配置 ndDropdownItem Props

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| ...$attrs          | vant扩展属性 |  |             |

#### ndDropdownItem Slots

| 名称                   | 说明                  |     
| -------------------     | ------------------------ |
| default          | 菜单内容 |
| title          | 自定义菜单项标题 |


#### ndDropdownItem 方法
- 通过 ref 可以获取到 ndDropdownItem 实例并调用实例方法，详见组件实例方法。

| 方法名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| closeDrop          | 切换菜单展示状态 |       -       |



















