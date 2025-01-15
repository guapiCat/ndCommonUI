#### 密码输入框说明
- 基础样式：密码/验证码文本输入
- 主要状态：Default(默认)、Active(获取光标)、Typing(输入中)、Typed(完成)
- 使用场景：带网格的输入框组件，可以用于输入密码、短信验证码等场景，通常与数字键盘组件配合使用。
- 主要交互：点击获取光标输入文本
- 开发配置：密码/验证码格子、下划线形式、容错信息提示位置均可根据产品实际场景配置

#### 基础使用

<common-code-format>
  <template #source>
    <APP-ndPasswordInput-ndPasswordInputBasic></APP-ndPasswordInput-ndPasswordInputBasic>
  </template>

  @[code](../.vuepress/components/APP/ndPasswordInput/ndPasswordInputBasic.vue)

</common-code-format>
<br />

#### 密码长度与明文展示

<common-code-format>
  <template #source>
    <APP-ndPasswordInput-ndPasswordInputLength></APP-ndPasswordInput-ndPasswordInputLength>
  </template>

  @[code](../.vuepress/components/APP/ndPasswordInput/ndPasswordInputLength.vue)

</common-code-format>
<br />

#### 以下划线展示

<common-code-format>
  <template #source>
    <APP-ndPasswordInput-ndPasswordInputLine></APP-ndPasswordInput-ndPasswordInputLine>
  </template>

  @[code](../.vuepress/components/APP/ndPasswordInput/ndPasswordInputLine.vue)

</common-code-format>
<br />

#### 文字提示与错误提示

<common-code-format>
  <template #source>
    <APP-ndPasswordInput-ndPasswordInputTips></APP-ndPasswordInput-ndPasswordInputTips>
  </template>

  @[code](../.vuepress/components/APP/ndPasswordInput/ndPasswordInputTips.vue)

</common-code-format>
<br />

#### ndPasswordInput Props
| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| value | 密码值 | String | - |
| info | 输入框下方文字提示 | String | - |
| error-info | 输入框下发错误提示 | String | - |
| length | 密码最大长度 | Number / String | 6 |
| gutter | 输入框格子之间的间距，如 20px 2em，默认单位为 px | Number / String | 0 |
| mask | 是否隐藏密码内容 | Boolean | true |
| focused | 是否已聚焦，聚焦时会显示光标 | Boolean | false |
| bottom-line | 是否展示下划线 | Boolean | false |


#### Events
| 事件名 | 说明 | 回调参数 |
| - | - | - |
| focus | 输入框聚焦时触发 | - |
