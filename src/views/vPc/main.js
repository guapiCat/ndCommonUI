import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '../../assets/fonts/iconfont.js';

// import SvgIcon from '../../components/SvgIcon.vue'

// import '../../style/global.css';
// import '../../style/element-plus.min.css';
// import '../../style/reset-element-plus.css';
// import '../../style/reset-element-plus.scss';

// import locale from '../../locale/element-plus.zh';
// elementPlus字体图标需要单独注册
import * as Icons from '@element-plus/icons-vue'
// 注册Icon组件

const app = createApp(App);
for (const iconName in Icons) {
    if (Reflect.has(Icons, iconName)) {
        const item = Icons[iconName]
        app.component(iconName, item)
    }
}

app.use(store)
    .use(router)
    .use(window.ndCommonUI)
    .mount('#vIndex');