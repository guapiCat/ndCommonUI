#### Sticky 粘性布局

- 介绍：用于将元素吸顶货吸底
- 开发配置：可配置吸顶或吸底，并能控制距离。也可以控制吸附元素。


<common-code-format>
  <template #source>
    <APP-ndSticky-ndSticky></APP-ndSticky-ndSticky>
  </template>

  @[code](../.vuepress/components/APP/ndSticky/ndSticky.vue)

</common-code-format>


#### 参数配置

| 参数                    | 必填 | 说明                       | 类型        | 默认值     |
| -------------------  | ---   | ------------------------  | ----------- | ----------------- |
| position         | 否 | 吸附位置，顶部或底部 |  String |      top       |
| offset-top         | 否 | 顶部距离 |  Number \| String |      0       |
| offset-bottom         | 否 | 底部距离 |   Number \| String |      0       |
| z-index         | 否 | 层级 |   Number \| String |      99       |
| container         | 否 | 可以控制吸附在指定容器，可传入元素的ref值 |  Element |      --       |

#### 事件说明

| 事件名       | 说明                                                     | 回调参数                                                     |
| ------------ | -------------------------------------------------------- | ------------------------------------------------------------ |
| change      | 吸顶触发    |    isFixed: boolean   |
| scroll      | 滚动触发    |  { scrollTop: number, isFixed: boolean }    |
