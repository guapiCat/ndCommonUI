### 本地开发构建运行

###### 	初始化

```json
	npm install
```



###### 运行

```json
	npm run serve
```



###### 打包

```json
// 全部打包
npm run build:all

// 只打包pc
npm run build:pc

// 只打包app(app入口文件是app.html)
npm run build:app
```


###### 发布组件包
```json
// 登录npm 账号 admin 密码 nd123456
npm login

// 查看当前是否为admin账户
npm whoami

// 设置获取地址
npm config set registry http://10.122.92.43:8088/repository/newdim-hs/


// 只打app包
npm run lib:pro:app

// 只打pc包
npm run lib:pro:pc

// 发布app包
npm run publish:app

// 发布pc包
npm run publish:pc
```


### 访问地址

​		项目运行起来后默认的访问地址为pc首页地址,如若要访问app首页需要在ip+端口后面加上/app.html#/

### 目录结构

├─.browserslistrc
├─.gitignore
├─babel.config.js
├─directoryList.md
├─package-lock.json
├─package.json
├─README.md
├─README2.md
├─vue.config.js       
├─src
|  ├─views
|  |   ├─vPc										 # pc资源目录
|  |   |  ├─App.vue							# pc入口文件
|  |   |  ├─main.js 						     # pc配置文件
|  |   |  ├─views								 # pc页面目录
|  |   |  |   └home.vue
|  |   |  ├─store								 # pc vuex配置目录
|  |   |  |   ├─index.js
|  |   |  |   ├─module
|  |   |  |   |   └demo.js
|  |   |  ├─router								# pc router配置目录
|  |   |  |   ├─index.js
|  |   |  |   └routes.js
|  |   |  ├─common							# pc公共组件目录
|  |   |  |   └HelloWorld.vue
|  |   |  ├─assets								 #pc静态资源
|  |   |  |   └logo.png
|  |   ├─vApp										# app资源目录
|  |   |  ├─App.vue							  # app入口文件
|  |   |  ├─main.js								# app配置文件
|  |   |  ├─views								   # app页面目录
|  |   |  |   └home.vue
|  |   |  ├─store									# app vuex配置目录
|  |   |  |   ├─index.js
|  |   |  |   ├─module
|  |   |  |   |   └demo.js
|  |   |  ├─router								# app router配置目录
|  |   |  |   ├─index.js
|  |   |  |   └routes.js
|  |   |  ├─common							# app公共组件目录
|  |   |  |   ├─libraryIndex.js
|  |   |  |   ├─messageBox
|  |   |  |   |     ├─ndConfirm.js
|  |   |  |   |     └index.vue
|  |   |  ├─assets
|  |   |  |   └logo.png
|  ├─utils										  # 方法存放目录
|  |   ├─appInterface.js				  # 与app接口交互示例文件
|  |   ├─axios.js								# axios配置文件
|  |   └common.js							# 公共发放存放目录
|  ├─locale										# 国际化配置目录
|  |   ├─index.js								# 国际化配置
|  |   ├─langs									# 国际化语言包
|  |   |   ├─en.js
|  |   |   └zh.js
|  ├─components							# 公共页面
|  |     └HelloWorld.vue
|  ├─assets										# 公共静态资源
|  |   └logo.png
|  ├─api											  # 请求配置目录
|  |  └demo.js									# api接口示例文件
├─public                                             # 资源目录
|   ├─app.html								  # app首页入口文件，可以添加一些 meta 信息或统计代码... 
|   ├─favicon.ico							   # 网站图标
|   ├─index.html							   # app首页入口文件，可以添加一些 meta 信息或统计代码... 
|   ├─resource                   			   # 静态资源目录
|   |    ├─vue
|   |    |  ├─vue@3.0.0.js
|   |    |  ├─vue@3.2.33_vue.global.js
|   |    |  └vuex@4.0.2.js