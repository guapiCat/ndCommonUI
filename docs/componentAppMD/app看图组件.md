#### app看图组件说明
- app端我要看图和第三方打开图纸功能业务组件


#### 基础使用
- app端main.js需要引入vant.js以及/src/style/common.css和/src/style/css.css(两个css需要先复制到本地)
- public/app.html引入/resource/appApi.sdk.js (app相关接口封装sdk文件)
- 导入src/api/commonApi.js (接口名称请勿修改,可修改对应的接口地址)
- 复制src/views/vApp/component/lookPicture文件夹至项目相同位置
- app的router.js中创建/openfile(本地选择文件页面路由)、/openview (第三方打开文件路由,需要在配置文件中设置成对应路径)、preview(预览页路由)  *若路由名称不一致,请在对应的代码块修改
- 以上步骤完成即可运行项目,安装对应环境app包测试
