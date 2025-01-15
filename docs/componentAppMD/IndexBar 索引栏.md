#### Tab 标签页说明

- 基础样式：文本平铺
- 使用场景：主要用于列表的索引分类显示和快速定位
- 主要交互：点击右侧的索引区的内容快速定位相关的信息区域
- 开发配置：索引的文本、颜色均可根据实际产品场景可调节

#### 基础使用
- 注意事项：该组件在使用时需要导入ndAppVanIndexBar和vanAppIndexAnchor两个组件

<br />

<common-code-format>
  <template #source>
    <APP-ndIndexBar-ndIndexBar></APP-ndIndexBar-ndIndexBar>
  </template>

  @[code](../.vuepress/components/APP/ndIndexBar/ndIndexBar.vue)

</common-code-format>


#### 参数配置 ndVanIndexBar Props

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| ...$attrs          | vant扩展属性 |  |             |

#### 参数配置 ndVanIndexAnchor Props * 传入title时将不再使用title插槽

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| ...$attrs          | vant扩展属性 |  |             |




#### 事件 Tabs Events

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| ...$attrs          | vant扩展方法 |              |



















