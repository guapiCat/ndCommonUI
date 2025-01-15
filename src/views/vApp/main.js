import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import '/src/style/common.css'
import '/src/style/css.css'

// 引用自定义组件
import comUI from './common/libraryIndex';

const app = createApp(App);
app.use(comUI);
app.use(store).use(router).use(vant).mount('#vApp');
