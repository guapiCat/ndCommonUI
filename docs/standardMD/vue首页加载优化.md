### vue首页加载优化

##### 1.使用CDN资源(优先考虑将资源下载到本地放到静态资源中,因为使用cdn有不稳定性因素)

​		我们要将 vue、 vue-router、 vuex、element-ui 从 vendor.js 中分离出来，使用CDN资源引入。国内的CDN服务推荐使用 BootCDN。(减少首次加载的vendor.js体积)

​		index.html文件中使用cdn加载资源(可以隐藏https:):

```js
...
<body>
    <script src="//cdn.bootcss.com/vue/2.5.9/vue.min.js"></script>
    <script src="//cdn.bootcss.com/vuex/3.0.1/vuex.min.js"></script>
    <script src="//cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js"></script>
	<!-- 如果引用了element-ui -->
    <script src="//cdn.bootcss.com/element-ui/2.0.7/index.js"></script>
</body>
...
```

​		修改vue.config.js文件:

```js
module.exports = {
    // filenameHashing: false,
    ...
     externals: {
      'vue': 'Vue',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter',
      'element-ui': 'ElementUI'
     }
     ...
}
```

​		修改 src/router/index.js(注释掉引用vue和use)

```
...
// 注释掉
// import Vue from 'vue'
import VueRouter from 'vue-router'
// 注释掉
// Vue.use(VueRouter)
...
```

​		修改 src/store/index.js(注释)

```
...
// 注释掉
// Vue.use(Vuex)
...
```

​		如果引用了element-ui,修改 src/main.js

```
import ELEMENT from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ELEMENT)
```



##### 2.路由按需加载

​		路由懒加载的3中方式:

###### 		(1) 路由懒加载(使用import)

```js
const Home =  () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/home')
const Index = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/index')
{
  path: '/about',
  component: About
}, {
  path: '/index',
  component: Index
}
```

###### 		(2) vue异步组件技术 ==== 异步加载

```js
{
  path: '/home',
  name: 'home',
  component: resolve => require(['@/components/home'],resolve)
},{
  path: '/index',
  name: 'Index',
  component: resolve => require(['@/components/index'],resolve)
} 
```

###### 		(3) webpack提供的require.ensure()

```js
{
  path: '/home',
  name: 'home',
  component: r => require.ensure([], () => r(require('@/components/home')), 'demo')
}, {
  path: '/index',
  name: 'Index',
  component: r => require.ensure([], () => r(require('@/components/index')), 'demo')
}, {
  path: '/about',
  name: 'about',
  component: r => require.ensure([], () => r(require('@/components/about')), 'demo-01')
}
```



##### 3.图片资源懒加载

​		使用 Vue 的 vue-lazyload 插件：

##### 		(1）安装插件

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



##### 4.Webpack 对图片进行压缩

​		在 vue 项目中webpack将小的图片转化为 base64 格式，其余的不做操作。所以对有些较大的图片资源，在请求资源的时候，加载会很慢，我们可以用 `image-webpack-loader`来压缩图片(但会将所有图片转化为base64)。或者自己检查一遍图片资源，有比较大的图片时自己找需求沟通。



##### 5.优化 SourceMap

​		在vue.config.js文件中,productionSourceMap在开发时为true,但是在不是打包时需要置为false

```js
module.exports = {
	productionSourceMap: false, // false:f12在Sources中不能看到源码  (打包需要改为false,减少map文件大小)
}
```



##### 6.加载资源过程使用等待界面

​		在index.html页面中默认放一个等待的界面(body放在最前面,资源加载放在body后面),app.vue中判断资源加载完成后删除等待界面的元素

