#### Badge 徽标说明
- 基础样式：小红点、数字徽标、文字徽标、图标徽标
- 使用场景：主要是App功能有更新、业务的提示
- 开发配置：徽标的大小、颜色、文本、图标、显示位置均可根据实际产品场景可调节


#### 基础使用

<br />

<common-code-format>
  <template #source>
    <APP-ndBadge-ndBadge></APP-ndBadge-ndBadge>
  </template>

  @[code](../.vuepress/components/APP/ndBadge/ndBadge.vue)

</common-code-format>




#### nd-badge 参数配置 Props

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| content                 | 徽标内容                   |  String / Number |      -       |
| color                   | 徽标背景颜色               |  String           |      #ee0a24    |
| dot                     | 是否展示为小红点           |  Boolean           |        false    |
| max                     | 最大值，超出会显示 {max}+，仅当 content 为数字时有效      |  Number / String    |      Infinity   |
| offset                  | 偏移量。数组的两项分别对应水平向右和垂直向下方向的偏移量      |  Array    |      -    |
| show-zero               | 当 content 为数字 0 或字符串 "0" 时，是否展示徽标        |  Boolean    |      true   |
| position                | 徽标位置，可选值 top-left、top-right、bottom-left、bottom-right         |  String     |   top-right   |


#### Slot 插槽 

| 名称        | 说明                              |
| ----------  | -------------------------------- |
| default     | 徽标包裹的子元素                   |
| content     | 自定义徽标内容                     |

#### 样式覆盖
| 名称        | 说明                              |默认值                              |
| ----------  | -------------------------------- | ------------------------------- |
| --van-badge-font-size     | 设置徽标字体大小                   | 12px |