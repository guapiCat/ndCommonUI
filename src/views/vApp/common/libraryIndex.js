
import { Toast } from 'vant';
import Confirm from './messageBox/confirm.js'

// 导出一个配置,用于 app.use() 安装组件库使用
export default {
  install (app) {
    // 全局挂载 原型函数 过组件实例调用的属性   
    app.config.globalProperties.$Confirm = Confirm
    app.config.globalProperties.$Toast = Toast
  }
}

// // 导入自己封装的组件
// import sdUI from 'libraryIndex.js'
// // 创建 Vue 应用实例
// const app = createApp(App)
// // 注册,安装自己的组件库
// app.use(sdUI)

