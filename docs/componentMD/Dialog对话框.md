#### 基础警告

<common-code-format>

  <template #source>
    <PC-ndDialog-ndDialog> </PC-ndDialog-ndDialog>
  </template>

  @[code](../.vuepress/components/PC/ndDialog/ndDialog.vue)

</common-code-format>

##### 属性配置

| 参数            | 说明                     | 类型        | 默认值                                        |
| --------------- | ------------------------ | ----------- | --------------------------------------------- |
| dialogWidth     | dialog的宽度          | String   | 400px                         |
| showClose       | 是否显示关闭按钮                   | Boolean  | true                |
| showAbove     | 显示上面的横线                 | Boolean   |        false                                     |
| showDoubleF    | 显示上下的横线           | Boolean  |  false                |
| dialogstate  | 状态对象(Object)             | Object | false                                         |
| center   | 是否居中   |     Boolean        |   false                        |
| showIcon   | 是否显示图标   |     Boolean        |   false                      |
| showFoot   | 是否显示下方操作栏   |     Boolean        |   false                        |
| title   | 标题   |     String        |                           |
| CancelStr   | 取消文字   |     String        |    取消                       |
| ConfirmStr   | 确定文字   |     String        |       确定                    |
| CancelColor   | 取消按钮颜色   |     String        |    无（非必传）                       |
| ConfirmColor   | 确定按钮颜色   |     String        |       无（非必传）                   |
| dialogTop   | 距离顶部高度   |     String        |     15vh                      |
| closeOnModal   | 点击遮罩层是否关闭   |     Boolean        |       true                    |
| closeOnEsc   | 点击esc是否关闭   |     Boolean        |       true                    |
| noCover   | 是否需要黑色蒙层  |     Boolean        |       true                    |
| titleAlign   | 标题对齐方式（left，center, right）  |    String        |       left（非必传）                    |
| footAlign   | 标题对齐方式（right，center, left）  |    String        |       right（非必传）                   |
| alignCenter   | 弹出框垂直居中对齐，设置后dialogTop失效  |    Boolean        |       false                   |
| ...$attrs   | element-plus扩展属性 |             |                                               |

##### 方法配置

| 方法名                      | 说明          | col3         |
| --------------------------- | ------------- | ------------ |
| dialogcancelClick     | 点击取消按钮   |      |
| dialogconfirmClick    | 点击确定按钮       |      |
| dialogCloseClick   |  关闭前的回调       |      |
| ndclosedialog     | 关闭的回调   |      |
| dialogOpend    | 开启的回调       |      |
| ...$attrs    | element-plus事件  |      |

##### 插槽配置
| 插槽名                      | 说明          | 备注         |
| --------------------------- | ------------- | ------------ |
| default(默认)   | 中间内容   |      |
| title    | 标题插入      |      |
| foot    | 页脚插入      |      |
| icon    | 图标插入      |      |