#### Popup 弹出层说明

- 介绍：用于创建一个弹出层

#### 基础使用

<br />

<common-code-format>
  <template #source>
    <APP-ndPopup-ndPopup></APP-ndPopup-ndPopup>
  </template>

  @[code](../.vuepress/components/APP/ndPopup/ndPopup.vue)

</common-code-format>

#### 参数配置

| 参数                    | 说明                       | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- | --------------------------------------------- |
|modelValue	|显示或隐藏弹窗	|Boolean | true	|
|position	|弹窗框弹出的方向	|String | bottom	|
|closeable	|是否有关闭按钮	|Boolean | true	|
|showSelfCloseIcon	|显示自定义关闭按钮，需要将closeable设置为false	|Boolean | false	|
|round	|是否是圆角	|Boolean | true	|
|style	|弹窗框样式	|Object | {}	|

#### 事件说明

| 事件名       | 说明                                                     | 回调参数                                                     |
| ------------ | -------------------------------------------------------- | ------------------------------------------------------------ |
| close      | 弹出框关闭时触发    |    ---   |
| clickCloseIcon      | 点击了关闭按钮触发    |   ---    |
| clickSelfCloseIcon      | 点击自定义关闭按钮时触发    |   ---    |


#### 函数式调用
无需引入任何依赖包，组件自动将函数式方法挂载到全局。
```js
proxy.$ndAppPopupFn.show({   // 显示
  props: {content: '这是一个content内容',imgSrc:iconLf, confirmButtonStr: '确定按钮',
            cancelButtonStr: '取消按钮'},
  confirm: async (res) => {
    console.log('点击了确定', res);
  },
  cancel: (res) => {
    console.log('点击了取消', res);
  },
  close: (res) => {
    console.log('关闭触发', res);
  },
  clickCloseIcon: (res) => {
    console.log('点击了关闭按钮触发', res);
  }
})

proxy.$ndAppPopupFn.hide();   // 隐藏
```

#### 函数式参数配置

| 参数                    | 说明                    | 必填 | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- |  ----------- |--------------------------------------------- |
| props   | 弹窗参数，设置弹窗内容 | 必填  |  Object |  {}  |
| confirm   | 点击确认按钮后触发 | --  |  Function |  --  |
| cancel   | 点击取消按钮后触发 | --  |  Function |  --  |
| close   | 弹窗关闭后触发 | --  |  Function |  --  |
| clickCloseIcon      | 点击了关闭按钮触发    |   ---    |


#### 函数式props参数配置

| 参数                    | 说明                    | 必填 | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- |  ----------- |--------------------------------------------- |
| imgSrc   | 图片地址 | 非必填  |  String |  --  |
| content   | 内容 | 非必填  |  String |  --  |
| confirmButtonStr   | 确认按钮文本 | 非必填  |  String |  --  |
| cancelButtonStr   | 取消按钮文本 | 非必填  |  String |  --  |
| confirmTextColor   | 确认按钮文本颜色 | 非必填  |  String |  #ffffff  |
| cancelTextColor   | 取消按钮文本颜色 | 非必填  |  String |  #ffffff  |
| confirmBackColor   | 确认按钮背景颜色 | 非必填  |  String |  #1780E3  |
| cancelBackColor   | 取消按钮背景颜色 | 非必填  |  String |  #C8C9CC  |