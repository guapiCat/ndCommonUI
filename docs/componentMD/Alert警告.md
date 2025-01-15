#### 基础警告

<common-code-format>

  <template #source>
    <PC-ndAlert-ndAlert> </PC-ndAlert-ndAlert>
  </template>

  @[code](../.vuepress/components/PC/ndAlert/ndAlert.vue)

</common-code-format>

#### 带关闭操作的警告

<common-code-format>

  <template #source>
    <PC-ndAlert-ndAlertClo></PC-ndAlert-ndAlertClo>
  </template>

  @[code](../.vuepress/components/PC/ndAlert/ndAlertClo.vue)

</common-code-format>

#### 带相关操作的警告

<common-code-format>

  <template #source>
    <PC-ndAlert-ndAlertCorr> </PC-ndAlert-ndAlertCorr>
  </template>

  @[code](../.vuepress/components/PC/ndAlert/ndAlertCorr.vue)

</common-code-format>

#### 扩展性的相关警告

<common-code-format>

  <template #source>
    <PC-ndAlert-ndAlertExt> </PC-ndAlert-ndAlertExt>
  </template>

  @[code](../.vuepress/components/PC/ndAlert/ndAlertExt.vue)

</common-code-format>

##### 属性配置

| 参数            | 说明                     | 类型        | 默认值                                        |
| --------------- | ------------------------ | ----------- | --------------------------------------------- |
| desType     | 是否有相关操作按钮          | Boolean   | false                         |
| correlation       | 相关操作按钮文字                   | String  | 相关操作                |
| title     | 文字介绍                 | String   |                                             |
| type    | 提示类型           | String  |  info (primary, success, warning, danger)                |
|  description     | 提示文字                 | String  |                |
| center  | 是否居中             | Boolean | false                                         |
| closable   | 是否显示关闭按钮   |     Boolean        |   false                        |
| closeText   | 关闭按钮的内容(默认为×)   |     String        |                           |
| showIcon   | 是否显示图标   |     Boolean        |   false                        |
| isfold   | 是否显示展开收起   |     Boolean        |   false                        |

##### 方法配置

| 方法名                      | 说明          | col3         |
| --------------------------- | ------------- | ------------ |
| corrButtonClick     | 点击相关操作按钮   |      |
| closeButtonClick    | 点击关闭按钮       |      |
