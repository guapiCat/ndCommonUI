#### Collapse 折叠面板说明
- 基础样式：基础样式：图标+文本+展开/收起操作
- 使用场景：用于突出显示每个部分的重要细节，必要时利用点击来显示更多详细信息
- 主要交互：点击展开/收起查看想看的信息
- 开发配置：文本、图标、禁用状态均可产品实际业务配置


#### 基础使用
通过传入 active 对象控制展开的面板列表，非手风琴模式下，active 对象里的 activeIndex 是数组
<br />

<common-code-format>
  <template #source>
    <APP-ndCollapse-ndCollapseBasic></APP-ndCollapse-ndCollapseBasic>
  </template>

  @[code](../.vuepress/components/APP/ndCollapse/ndCollapseBasic.vue)

</common-code-format>

#### 手风琴模式
通过传入 accordion 控制是否开启手风琴模式，该模式下只能打开一个面板
<br />

<common-code-format>
  <template #source>
    <APP-ndCollapse-ndCollapseAccordion></APP-ndCollapse-ndCollapseAccordion>
  </template>

  @[code](../.vuepress/components/APP/ndCollapse/ndCollapseAccordion.vue)

</common-code-format>

#### 禁用状态
通过传入 disabled 控制是否禁用单个面板
<br />

<common-code-format>
  <template #source>
    <APP-ndCollapse-ndCollapseDisabled></APP-ndCollapse-ndCollapseDisabled>
  </template>

  @[code](../.vuepress/components/APP/ndCollapse/ndCollapseDisabled.vue)

</common-code-format>

#### ndCollapseItem Slot

<br />

<common-code-format>
  <template #source>
    <APP-ndCollapse-ndCollapseSlot></APP-ndCollapse-ndCollapseSlot>
  </template>

  @[code](../.vuepress/components/APP/ndCollapse/ndCollapseSlot.vue)

</common-code-format>


#### nd-collapse 参数配置 Props

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| v-model                 | 当前展开的面板             |  Array / String，手风琴模式下 activeIndex为String或者Number，非手风琴模式下 activeIndex为Array     |      -       |
| accordion               | 是否开启手风琴模式          |  Boolean    |      false    |
| border                  | 是否显示外边框              |  Boolean    |        true    |


#### nd-collapse-item 参数配置 props

| 参数        | 说明                              | 类型               |  默认值
| ----------  | -------------------------------- | ------------------ | ---------------------- |
| name        | 唯一标识符，默认为索引值           | Number / String    |  -                     |
| icon        | 标题栏左侧图标名称或图片链接       |     String         |  -                     |
| size        | 标题栏大小，可选值为 large         |    String         |  -                     |
| title       | 标题栏左侧内容                    | Number / String    |  -                     |
| value       | 标题栏右侧内容                    | Number / String    |  -                     |
| label       | 标题栏描述信息                    | Number / String    |  -                     |
| border      | 是否显示内边框                    | Boolean            | true                   |
| isLink      | 是否展示标题栏右侧箭头并开启点击反馈| Boolean            | true                   |
| disabled    | 是否禁用面板                      | Boolean            | false                  |
| readonly    | 是否为只读状态，只读状态下无法操作面板 | Boolean         |  false                 |
| lazyRender  | 是否在首次展开时才渲染面板内容      | Boolean           | false                   |
| titleClass  | 左侧标题额外类名                   | String            |     -                  |
| valueClass  | 右侧内容额外类名                   | String            |     -                  |
| labelClass  | 描述信息额外类名                   | String            |     -                  |

#### nd-collapse Events
|  事件名     |      说明         |         回调参数             |
|------------|-------------------|------------------------------|
|  change     | 切换面板时触发    | activeIndex：类型与props.active.activeIndex一致  | 


#### nd-collapse 方法
|  方法名        |      说明       |        参数              |  返回值  |
|----------------|----------------|--------------------------|---------|
| ndToggleAll    | 切换所有面板展开状态，传 true 为全部展开，false 为全部收起，不传参为全部切换 | options?:Boolean / Object  | -    |


#### nd-collapse-item 方法
|  方法名        |      说明       |        参数              |  返回值  |
|---------------|-----------------|--------------------------|---------|
| ndToggle       | 切换面板展开状态，传 true 为展开，false 为收起，不传参为切换 | expand?:Boolean  | -    |


#### nd-collapse-item Slots
|  名称         |  说明             |
|---------------|------------------|
|  default      |  面板内容         |
|  title        | 自定义标题栏左侧内容 |
|  value        | 自定义标题栏右侧内容 |
|  label        | 自定义标题栏描述信息 |
|  icon         | 自定义标题栏左侧图标 |
|  rightIcon    | 自定义标题栏右侧图标 |
