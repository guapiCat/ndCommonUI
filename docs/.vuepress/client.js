import ElementPlus from 'element-plus'
import Vant from "vant"
import { defineClientConfig } from '@vuepress/client'

import "./styles/index.scss"

import '../../src/style/reset-element-plus.css';
import '../../src/style/reset-element-plus.scss';
import '../../src/style/init.css';
import '../../src/style/ndCommon.css';            // pc公共组件覆盖

import './styles/iconClass/ndfont.css';           // 图库资源

import '../../src/assets/fonts/iconfont'


// app样式
import '../../src/packages/APP/common.scss';
import VueLazyload from 'vue-lazyload'
import 'vant/lib/index.css';

import zhCn from 'element-plus/es/locale/lang/zh-cn'
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(ElementPlus, {
      locale: zhCn,
    })
    .use(Vant)
    .use(VueLazyload, {
      preLoad: 1.3,
      error: 'dist/error.png',    // 加载失败时显示的图片
      loading: 'dist/loading.gif',    // 加载中的图片
      attempt: 1
    })
  },
  setup() {},
  rootComponents: [],
})