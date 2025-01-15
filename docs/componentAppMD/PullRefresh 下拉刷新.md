#### PullRefresh 下拉刷新说明
- 使用场景：用于提供下拉刷新的交互操作
- 主要交互：手势向下拉可根据文案提示释放操作，及时反馈刷新加载中和刷新成功
- 开发配置：下拉刷新提供一个刷新区域，刷新区域的提示可以自己配置。区域内的文本、图标、图片内容由配置者自己决定。

<br />

<common-code-format>
  <template #source>
    <APP-ndPullRefresh-ndPullRefresh></APP-ndPullRefresh-ndPullRefresh>
  </template>

  @[code](../.vuepress/components/APP/ndPullRefresh/ndPullRefresh.vue)

</common-code-format>


#### 基础使用
<b>*请在移动端模式中测试效果*</b> <br />
下拉刷新时会触发 refresh 事件，在事件的回调函数中可以进行同步或异步操作，操作完成后将 loading.isLoading 设置为 false，表示加载完成。

#### 图片懒加载
#####  		(1）安装插件

```js
npm install vue-lazyload --save-dev
```

###### 		(2)  在入口文件 man.js 中引入并使用

```js
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'dist/error.png',
    loading: 'dist/loading.gif',
    attempt: 1
})
```

###### 		(3) 页面使用

```js
<img v-lazy="/static/img/1.png">
```



#### ndPullRefresh 参数配置 Props
| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| v-model | 是否处于加载中状态 | Boolean | - |
| pulling-text | 下拉过程提示文案 | String | 下拉即可刷新... |
| loosing-text | 释放过程提示文案 | String | 释放即可刷新... |
| loading-text | 加载过程提示文案 | String | 加载中... |
| success-text | 刷新成功提示文案 | String | - |
| success-duration | 刷新成功提示展示时长(ms) | Number / String | 500 |
| animation-duration | 动画时长(ms) | Number / String | 300 |
| head-height | 顶部内容高度 | Number / String | 50 |
| pull-distance | 触发下拉刷新的距离 | Number / String | 与head-height一致 |
| disabled | 是否禁用下拉刷新 | Boolean | false |
| content-height | 内容区域的高度（当需要“上拉加载更多”功能时传参） | Number / String | - |
| bottom-offset | 底部触发加载更多的边界距离 | Number | 0 |

#### ndPullRefresh 事件 Events
| 事件名 | 说明 | 回调参数 |
| - | - | - |
| refresh | 下拉刷新时触发 | - |
| change | 拖动时或状态改变时触发 | {status: String, distance: Number} |
| loadMore | 上拉加载更多时触发 | - |


#### ndPullRefresh 插槽 Slots
| 名称 | 说明 | 参数 |
| - | - | - |
| default | 自定义内容 | - |
| normal | 非下拉状态时顶部内容 | - |
| pulling | 下拉过程中顶部内容 | {distance: Number} |
| loosing | 释放过程中顶部内容 | {distance: Number} |
| loading | 加载过程中顶部内容 | {distance: Number} |
| success | 刷新成功提示内容 | - |