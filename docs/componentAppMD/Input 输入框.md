#### Input 输入框说明

- 基础样式：单行文本输入、多行文本输入、段落文本输入、密码文本输入、文本输入报错提示
- 主要状态：Default(默认)、Active(获取光标)、Typing(正在输入中)、Typed(完成)
- 使用场景：输入框作为页面中主要的数据录入入口，可引导用户录入信息
- 主要交互：点击获取光标输入信息,可一键清空
- 开发配置：输入框的文本、图标及位置、预设文本的自适应、容错信息提示位置均可根据实际产品场景可调节

#### 基础用法
<common-code-format>
  <template #source>
    <APP-ndInput-ndInputDefault></APP-ndInput-ndInputDefault>
  </template>

  @[code](../.vuepress/components/APP/ndInput/ndInputDefault.vue)

</common-code-format>


#### 使用label
使用` labelAlignType `字段可以控制label进行对齐, 控制文字六个文字一行
<br />

<common-code-format>
  <template #source>
    <APP-ndInput-ndInputLabel></APP-ndInput-ndInputLabel>
  </template>

  @[code](../.vuepress/components/APP/ndInput/ndInputLabel.vue)

</common-code-format>

#### 内容对齐
使用 ` label-align `字段可以控制label进行右对齐和上下位置, 使用` input-align `控制input内容的右对齐
<br />

<common-code-format>
  <template #source>
    <APP-ndInput-ndInputAlign></APP-ndInput-ndInputAlign>
  </template>

  @[code](../.vuepress/components/APP/ndInput/ndInputAlign.vue)

</common-code-format>


#### 使用插槽
<br />

<common-code-format>
  <template #source>
    <APP-ndInput-ndInputSlot></APP-ndInput-ndInputSlot>
  </template>

  @[code](../.vuepress/components/APP/ndInput/ndInputSlot.vue)

</common-code-format>


#### 多行标题文本输入框
- 高度自使用
- 显示字数统计
- 显示必填项
<br />

<common-code-format>
  <template #source>
    <APP-ndInput-ndInputTextarea></APP-ndInput-ndInputTextarea>
  </template>

  @[code](../.vuepress/components/APP/ndInput/ndInputTextarea.vue)

</common-code-format>


#### 错误提示信息
<br />

<common-code-format>
  <template #source>
    <APP-ndInput-ndInputError></APP-ndInput-ndInputError>
  </template>

  @[code](../.vuepress/components/APP/ndInput/ndInputError.vue)

</common-code-format>


#### 禁止使用
<br />

<common-code-format>
  <template #source>
    <APP-ndInput-ndInputDisabled></APP-ndInput-ndInputDisabled>
  </template>

  @[code](../.vuepress/components/APP/ndInput/ndInputDisabled.vue)

</common-code-format>

#### 验证码
<br />

<common-code-format>
  <template #source>
    <APP-ndInput-ndInputCode></APP-ndInput-ndInputCode>
  </template>

  @[code](../.vuepress/components/APP/ndInput/ndInputCode.vue)

</common-code-format>


<!-- #### 密码输入
<br />

<common-code-format>
  <template #source>
    <APP-ndInput-ndInputPassword></APP-ndInput-ndInputPassword>
  </template>

  @[code](../.vuepress/components/APP/ndInput/ndInputPassword.vue)

</common-code-format> -->



#### 参数配置

| 参数                    | 说明                    | 必填 | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- |  ----------- |--------------------------------------------- |
| v-model               | 绑定数据, 当前输入框数据 | `否` | `String`,`Number`  |       0     |
| labelAlignType               | 控制label默认宽度, 做input的对齐  | `否` | `Boolean`  |       false    |
| label               | 自定义输入框左侧文本  | `否` | `Number` `String`  |      -    |
| placeholder               | 空输入框的提示语  | `否` | `String`  |       请输入    |
| password               | 开启密码模式  | `否` | `Boolean`  |       false    |
| passwordType               | 密码输入框模式（可选值`cell`, `line`）  | `否` | `String`  |       `cell`    |
| keyboard               | 是否使用数字键盘  | `否` | `Boolean`  |       true    |
| gutter               | 密码框格子之间的间距  | `否` | `String`  |       `9px`    |
| borderRadius               | 设置圆角  | `否` | `String`  |       `4px`    |
| background               | 设置背景色  | `否` | `String`  |       `white`    |
| ...$attrs               | vant属性  |  |   |    |


#### 事件

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| ...$attrs      | vant方法 |  |

#### 插槽

| 事件名     | 说明                                     | 参数            |
| ---------- | ---------------------------------------- | ------------------- |
| label     | 输入框左侧标题 | - |
| right-icon     | 右侧图标 | - |
| ...$attrs      | vant方法 |  |



















