#### Progress 进度条说明

- 介绍：对长文本进行省略，支持展开/收起。

#### 基础使用


<br />

<common-code-format>
  <template #source>
    <APP-ndTextEllipsis-ndTextEllipsis></APP-ndTextEllipsis-ndTextEllipsis>
  </template>

  @[code](../.vuepress/components/APP/ndTextEllipsis/ndTextEllipsis.vue)

</common-code-format>


#### 参数配置 Props

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
|rows	|展示的行数	|number \| string	|1
|content	|需要展示的文本	|string	|-
|expand-text	|展开操作的文案	|string	|-
|collapse-text	|收起操作的文案	|string	|-
|dots	|省略号的文本内容	|string	|'...'


#### 事件

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
|click-action|点击展开/收起时触发|event: MouseEvent|
		



















