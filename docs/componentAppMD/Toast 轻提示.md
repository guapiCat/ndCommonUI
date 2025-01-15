#### 基础用法
- 基础样式：纯文本、图标+文本组合
- 使用场景：主要是给用户即时的操作反馈，让用户明确自己所处的状态
- 主要交互：点击/完成操作的及时反馈；显示在页面中头部、中间、底部三种位置；Toast提示2s后自动消失，无法点击提示 外区域或者通过操作项使轻提示消失；一般不同时出现多个，多个同时被触发时，收起上一个再弹出下一个
- 开发配置：Toast的宽度、文案单行/多行、静态/动态图标、显示位置均可根据实际产品场景可调节

<br />
使用Toast的函数调用模式, 注意使用该模式需要引入外层js文件, 抛出showToast方法和ndAppToast组件
<br />
`import {showToast} from './ndToast/index.js`
<common-code-format>
  <template #source>
    <APP-ndToast-ndToastDefault></APP-ndToast-ndToastDefault>
  </template>

  @[code](../.vuepress/components/APP/ndToast/ndToastDefault.vue)

</common-code-format>

#### Toast组件
使用Toast的组件模式, 可以直接引入ndToast.vue, 也可以使用imoport引入组件
<br />
`import {ndAppToast} from './ndToast/index.js`
<br />

<common-code-format>
  <template #source>
    <APP-ndToast-ndToastComp></APP-ndToast-ndToastComp>
  </template>

  @[code](../.vuepress/components/APP/ndToast/ndToastComp.vue)

</common-code-format>

#### 控制定位
使用position字段控制 top|mid|bottom  默认底部显示
<br />

<common-code-format>
  <template #source>
    <APP-ndToast-ndToastPosition></APP-ndToast-ndToastPosition>
  </template>

  @[code](../.vuepress/components/APP/ndToast/ndToastPosition.vue)

</common-code-format>


#### 图标/图片显示
- 使用iconfont图标类名
- 使用图片链接 
<br />
<common-code-format>
  <template #source>
    <APP-ndToast-ndToastIcon></APP-ndToast-ndToastIcon>
  </template>

  @[code](../.vuepress/components/APP/ndToast/ndToastIcon.vue)

</common-code-format>





#### 参数配置

| 参数                    | 说明                    | 必填 | 类型        | 默认值                                        |
| -------------------     | ------------------------  | ----------- |  ----------- |--------------------------------------------- |
| show               | 组件显示/异常 | 否 | `Boolean`  |      `false`    |
| icon               | 控制显示图标/图片模式(可选值: iconfont图标名称, 图片链接) | 否 | `String`  |      -    |
| message               | 显示内容 | 否 | `String`  |      -    |
| position               | 弹窗位置(可选值 `bottom`, `top`) | 否 | `String`  |      `mid`    |

#### 插槽

| 名称                    | 说明                       |
| -------------------     | ------------------------  | 
| default    | 默认弹窗内容 |


#### 事件

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| showToast      | 显示提示弹窗 | - |
| closeToast      | 关闭提示弹窗 | - |

#### 事件

| 事件名     | 说明                                     | 回调参数            |
| ---------- | ---------------------------------------- | ------------------- |
| showToast      | 通过引入组件js文件抛出的showToast方法, 调用显示/隐藏弹窗, 参数同vant, 默认延迟时间duration: 2s | - |



















