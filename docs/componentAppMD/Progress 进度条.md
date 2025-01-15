#### Progress 进度条说明

- 介绍：用于展示操作的当前进度。圆环形的进度条组件，支持进度渐变动画。

#### 基础使用


<br />

<common-code-format>
  <template #source>
    <APP-ndProgress-ndProgress></APP-ndProgress-ndProgress>
  </template>

  @[code](../.vuepress/components/APP/ndProgress/ndProgress.vue)

</common-code-format>


#### 参数配置 Props -- nd-progress

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
|percentage	|进度百分比	|number | string	|0
|stroke-width	|进度条粗细，默认单位为px	|number \| string	|4px
|color	|进度条颜色	|string	|#1989fa
|track-color	|轨道颜色	|string	|#e5e5e5
|pivot-text	|进度文字内容	|string	|百分比
|pivot-color	|进度文字背景色	|string	|同进度条颜色
|text-color	|进度文字颜色	|string	|white
|inactive	|是否置灰	|boolean	|false
|show-pivot	|是否显示进度文字	|boolean	|true

#### 参数配置 Props -- nd-circle

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
|v-model:current-rate	|当前进度	|number	|-
|rate	|目标进度	|number \| string	|100
|size	|圆环直径，默认单位为 px	|number \| string	|100px
|color	|进度条颜色，传入对象格式可以定义渐变色	|string \| object	|#1989fa
|layer-color	|轨道颜色	|string	|white
|fill	|填充颜色	|string	|none
|speed	|动画速度（单位为 rate/s）	|number \| string	|0
|text	|文字	|string	|-
|stroke-width	|进度条宽度	|number \| string	|40
|stroke-linecap	|进度条端点的形状，可选值为 square butt	|string	|round
|clockwise	|是否顺时针增加	|boolean	|true
|start-position	|进度起始位置，可选值为 left、right、bottom	|CircleStartPosition	|top
|inactive|是否置灰，优先级最高，高于颜色设置|boolean	|false
|text-color	|文字颜色，会覆盖插槽	|string	|-





















