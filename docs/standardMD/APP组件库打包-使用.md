# APP组件库打包/使用



### 切换npm源

```bash
npm config set registry http://10.122.92.43:8088/repository/newdim-gp/
```



## 发包

### 一、进行lib打包

```bash
npm run lib:pro:app
```



### 二、调整大版本号（如果需要），小版本号不需要调整

script/vertsion.json

```json
{
    "pc_version":"x.x.x",
    "app_version":"x.x.x"
}
```



### 三、发布npm

```bash
npm login --registry=http://10.122.92.43:8088/repository/newdim-hs/ 
```

```bash
账号密码： admin / nd123456
```

```bash
npm run publish:app
```



## 使用

注意：目前只支持 vuecli 创建的项目，暂不支持 vite 项目

### 一、安装组件库

```bash
npm i -S ndAppCommonUI
```

### 二、使用组件库

main.js

```js
import { createApp } from 'vue'
import App from './App.vue'

import ndAppCommonUI from 'ndAppCommonUI'
import "ndAppCommonUI/nd-lib/lib-app/ndAppCommonUI.css"

createApp(App)
  .use(ndAppCommonUI)
  .mount('#app')
```


###
```bash
UI公共框架svn： http://10.122.52.168:8081/svn/PublicResouceCode/trunk/DotNet/VueComponent/Code/front-comp 
UI公共框架masterGo地址：https://mastergo.com/file/76028603214821?page_id=%3A062897 
UI公共框架APP计划文档: https://doc.weixin.qq.com/sheet/e3_AQQA4gYvAMYm1nO1o4RQRS9FX0BOi?scode=AOMAawe_AAsj9dYVEvAQQA4gYvAMY 
UI公共框架PC计划文档: https://doc.weixin.qq.com/sheet/e3_AKIAMgamAEgw1TS7nYLQF0gfbJR29?scode=AOMAawe_AAssiTkixqAKIAMgamAEg 
npm组:  http://10.122.92.43:8088/repository/newdim-gp/ 
npm私有库:  http://10.122.92.43:8088/repository/newdim-hs/ 
私有仓库账号密码：admin nd123456
```





