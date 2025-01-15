#### 基础用法
- 基础样式：标题+内容+操作动作；包含无标题、有标题、多文本、输入框、多操作动作
- 使用场景：Dialog对话框是一种模态弹窗。当用户进行了敏感操作，会以Dialog对话框的弹窗形式告知用户且让用户进行功能选择。例如：删除重要内容时，弹出模式进行二次确认；标题和描述应简洁完整
- 主要交互：点击了某个功能按钮后弹窗才会消失，App随即执行该功能操作，进入相应的功能流程
- 开发配置：标题文本、内容文本、图片、操作均可根据实际业务配置


<common-code-format>
  <template #source>
    <APP-ndDialog-ndDialogBase></APP-ndDialog-ndDialogBase>
  </template>

  @[code](../.vuepress/components/APP/ndDialog/ndDialogBase.vue)

</common-code-format>


#### 常用参数配置

| 参数                    | 说明                    | 必填 | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- |  ----------- |--------------------------------------------- |
| v-model               | 绑定弹窗是否可见 | 必填 |  Bool |    |
| title               | 标题文本内容 |  |  String |    |
| message               | 内容文本 |  |  String |    |
| show-confirm-button               | 是否显示确认按钮 |  |  Bool |    |
| confirm-button-text               | 确认按钮文本 |  |  String |    |
| confirm-button-color               | 确认按钮颜色 |  |  String |    |
| show-cancel-button               | 是否显示取消按钮 |  |  Bool |    |
| cancel-button-text               | 取消按钮文本 |  |  String |    |
| cancel-button-color               | 取消按钮颜色 |  |  String |    |
| ...$attrs               | vant属性  |  |   |    |




#### 常用事件名

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| confirm | 点击完成按钮时触发 |             |
| cancel  | 点击取消按钮时触发 |              |
| ...$attrs      | vant方法 |  |


#### 插槽solt名

| 插槽名     | 说明                                     |
| ---------- | ---------------------------------------- |
| default | 默认内容区域 |
| title | 标题插槽 |
| footer  | 页脚插槽 |


#### 函数式调用
无需引入任何依赖包，组件自动将函数式方法挂载到全局。
```js
proxy.$ndAppDialogFn.show({   // 显示
  props: { title: '这是一个标题', message: '这是一个content内容', showCancelButton: true },
  confirm: async (res) => {
    console.log('点击了确定', res);
  },
  cancel: (res) => {
    console.log('点击了取消', res);
  },
  close: (res) => {
    console.log('关闭触发', res);
  }
})

proxy.$ndAppDialogFn.hide();   // 隐藏
```

#### 函数式参数配置

| 参数                    | 说明                    | 必填 | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- |  ----------- |--------------------------------------------- |
| props   | 弹窗参数，设置弹窗内容 | 必填  |  Object |  {}  |
| confirm   | 点击确认按钮后触发 | --  |  Function |  --  |
| cancel   | 点击取消按钮后触发 | --  |  Function |  --  |
| close   | 弹窗关闭后触发 | --  |  Function |  --  |


#### 函数式props参数配置

| 参数                    | 说明                    | 必填 | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- |  ----------- |--------------------------------------------- |
| title   | 标题 | 非必填  |  String |  --  |
| message   | 内容 | 非必填  |  String |  --  |
| showConfirmButton   | 是否显示确认按钮 | 非必填  |  Bool |  --  |
| showCancelButton   | 是否显示取消按钮 | 非必填  |  Bool |  --  |
