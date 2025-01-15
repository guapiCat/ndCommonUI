#### NumberKeyboard 数字键盘说明

- 基础样式：0-9个数字+操作
- 主要状态：Default(默认)、Tap(点击)
- 使用场景：合理地”键盘类型”和“按键命令类型”可以提高用户填写信息的效率
- 主要交互：用户可点击数字完成手机号码、短信验证码、支付密码、银行卡号等信息输入
- 开发配置：数字键盘多个功能按键设置、随机数字均可根据实际产品场景可调节

#### 默认键盘

<common-code-format>
  <template #source>
    <APP-ndNumberKeyboard-ndNumberKeyboardDefault></APP-ndNumberKeyboard-ndNumberKeyboardDefault>
  </template>

  @[code](../.vuepress/components/APP/ndNumberKeyboard/ndNumberKeyboardDefault.vue)

</common-code-format>



<br />

#### 带右侧栏的键盘

<common-code-format>
  <template #source>
    <APP-ndNumberKeyboard-ndNumberKeyboardRight></APP-ndNumberKeyboard-ndNumberKeyboardRight>
  </template>

  @[code](../.vuepress/components/APP/ndNumberKeyboard/ndNumberKeyboardRight.vue)

</common-code-format>



<br />

#### 身份证号键盘

<common-code-format>
  <template #source>
    <APP-ndNumberKeyboard-ndNumberKeyboardIdCard></APP-ndNumberKeyboard-ndNumberKeyboardIdCard>
  </template>

  @[code](../.vuepress/components/APP/ndNumberKeyboard/ndNumberKeyboardIdCard.vue)

</common-code-format>



<br />

#### 标题键盘

<common-code-format>
  <template #source>
    <APP-ndNumberKeyboard-ndNumberKeyboardTitle></APP-ndNumberKeyboard-ndNumberKeyboardTitle>
  </template>

  @[code](../.vuepress/components/APP/ndNumberKeyboard/ndNumberKeyboardTitle.vue)

</common-code-format>



<br />

#### 可配置多个按键的键盘

<common-code-format>
  <template #source>
    <APP-ndNumberKeyboard-ndNumberKeyboardMultiButton></APP-ndNumberKeyboard-ndNumberKeyboardMultiButton>
  </template>

  @[code](../.vuepress/components/APP/ndNumberKeyboard/ndNumberKeyboardMultiButton.vue)

</common-code-format>



<br />

#### 随机数字键盘

<common-code-format>
  <template #source>
    <APP-ndNumberKeyboard-ndNumberKeyboardRandom></APP-ndNumberKeyboard-ndNumberKeyboardRandom>
  </template>

  @[code](../.vuepress/components/APP/ndNumberKeyboard/ndNumberKeyboardRandom.vue)

</common-code-format>



<br />




#### 参数配置

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
| v-model             | 当前输入值                                                   | string | `-` |
| show | 是否显示键盘 | boolean | `-` |
| title | 键盘标题 | string | `-` |
| theme | 样式风格，可选值为 `custom` | string | `default` |
| maxlength | 输入值最大长度 | number \| string | `Infinity` |
| transition | 是否开启过场动画 | boolean | `true` |
| z-index | 键盘 z-index 层级 | number \| string | `100` |
| extra-key | 底部额外按键的内容 | string \| string[] | `''` |
| close-button-text | 关闭按钮文字，空则不展示 | string | `-` |
| delete-button-text | 删除按钮文字，空则展示删除图标 | string | `-` |
| close-button-loading | 是否将关闭按钮设置为加载中状态，仅在 `theme="custom"` 时有效 | boolean | `false` |
| show-delete-key | 是否展示删除图标 | boolean | `true` |
| blur-on-close | 是否在点击关闭按钮时触发 blur 事件 | boolean | `true` |
| hide-on-click-outside | 是否在点击外部时收起键盘 | boolean | `true` |
| teleport | 指定挂载的节点 | string \| Element | `-` |
| safe-area-inset-bottom | 是否开启底部安全区适配 | boolean | `true` |
| random-key-order | 是否将通过随机顺序展示按键 | boolean | `false` |



<br />

#### 事件

| 事件名 | 说明                           | 回调参数       |
| ------ | ------------------------------ | -------------- |
| input  | 点击按键时触发                 | `key: string ` |
| delete | 点击删除键时触发               | `- `           |
| close  | 点击关闭按钮时触发             | `- `           |
| blur   | 点击关闭按钮或非键盘区域时触发 | `- `           |
| show   | 键盘完全弹出时触发             | `- `           |
| hide   | 键盘完全收起时触发             | `- `           |

<br />









