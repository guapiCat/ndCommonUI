#### Swipe 轮播

- 介绍：用于显示轮播效果
- 开发配置：Swipe与SwipeItem配合使用


<common-code-format>
  <template #source>
    <APP-ndSwipe-ndSwipeBase></APP-ndSwipe-ndSwipeBase>
  </template>

  @[code](../.vuepress/components/APP/ndSwipe/ndSwipeBase.vue)

</common-code-format>


#### swipe参数配置

| 参数                    | 必填 | 说明                       | 类型        | 默认值     |
| -------------------  | ---   | ------------------------  | ----------- | ----------------- |
| autoplay         | 否 | 自动轮播间隔，ms |   Number \| String |      --       |
| duration         | 否 | 动画时长，ms |  Number \| String |      500       |
| initial-swipe         | 否 | 初始索引位置 |   Number \| String |      --      |
| width         | 否 | 滑块宽度 |   Number \| String |      --       |
| height         | 否 | 滑块高度 |  Number \| String |      --       |
| loop         | 否 | 是否循环播放 |  Boolean |      false       |
| show-indicators         | 否 | 是否显示指示器 |  Boolean |      true       |
| indicator-color         | 否 | 指示器颜色 |  String |      #1989fa       |
| vertical         | 否 | 是否纵向滚动 |  Boolean |      false      |
| touchable         | 否 | 是否通过手势滑动 | Boolean |      true       |
| lazy-render         | 否 | 是否延迟渲染展示的内容 | Boolean |      false       |

#### 事件说明

| 事件名       | 说明          | 回调参数          |
| ------------ | ------------- | ----------------- |
| change      | 页面切换后触发    |    index: boolean   |
