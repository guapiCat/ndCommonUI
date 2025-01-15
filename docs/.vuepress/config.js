import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search';
// import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { nprogressPlugin } from '@vuepress/plugin-nprogress';
import { containerPlugin } from '@vuepress/plugin-container';

import { getDirname, path } from '@vuepress/utils';
const __dirname = getDirname(import.meta.url);

export default {
    port: 9527,
    base: '/docs',  // 站点配置
    lang: 'zh-CN',
    title: '前端公共内容说明与操作文档',
    description: '站点配置',
    theme: defaultTheme(
        {
            lastUpdated: false,
            contributors: false,
            navbar: [
                {
                    text: 'PC组件库',
                    link: '/componentMD/'
                },
                {
                    text: 'APP组件库',
                    link: '/componentAppMD/'
                },
                {
                    text: '插件集',
                    link: '/pluginsMD/',
                },
                {
                    text: '规范',
                    link: '/standardMD/',
                },
                {
                    text: '版本',
                    link: '/versionMD/',
                },

            ],
            sidebar: {
                '/componentMD/': getCompSideBar(),
                '/componentAppMD/': getAppCompSideBar(),
                '/uiMD/': getUiSideBar(),
                '/pluginsMD/': getPluginSideBar(),
                '/standardMD/': getStandard(),
                '/versionMD/': [],
                '/': getBaseSideBar(),
            },
        }
    ),
    plugins: [
        containerPlugin({}),
        nprogressPlugin(),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索',
                },
                '/zh/': {
                    placeholder: '搜索',
                },
            }
        }),
    ],
}

function getCompSideBar() {             // 组件库文档集合
    return [
        { text: '', children: ['表格'], collapsible: false, },
        { text: '', children: ['分页'], collapsible: false, },
        { text: '', children: ['开关'], collapsible: false, },
        { text: '', children: ['输入框'], collapsible: false, },
        { text: '', children: ['选择器'], collapsible: false, },
        { text: '', children: ['单选框'], collapsible: false, },
        { text: '', children: ['数字输入框'], collapsible: false, },
        { text: '', children: ['卡片'], collapsible: false, },
        { text: '', children: ['标签'], collapsible: false, },
        { text: '', children: ['描述列表'], collapsible: false, },
        { text: '', children: ['走马灯'], collapsible: false, },
        { text: '', children: ['日历'], collapsible: false, },
        { text: '', children: ['折叠面板'], collapsible: false, },
        { text: '', children: ['滑块'], collapsible: false, },
        { text: '', children: ['文字提示'], collapsible: false, },
        { text: '', children: ['Alert警告'], collapsible: false, },
        { text: '', children: ['Dialog对话框'], collapsible: false, },
        { text: '', children: ['抽屉'], collapsible: false, },
        { text: '', children: ['气泡确认框'], collapsible: false, },
        { text: '', children: ['时间线'], collapsible: false, },
        { text: '', children: ['时间线-2'], collapsible: false, },
        { text: '', children: ['步骤条'], collapsible: false, },
        { text: '', children: ['进度条'], collapsible: false, },
        { text: '', children: ['面包屑'], collapsible: false, },
        { text: '', children: ['下拉菜单'], collapsible: false, },
        { text: '', children: ['选项卡'], collapsible: false, },
        { text: '', children: ['按钮'], collapsible: false, },
        { text: '', children: ['徽标'], collapsible: false, },
        { text: '', children: ['头像'], collapsible: false, },
        { text: '', children: ['结果'], collapsible: false, },
        { text: '', children: ['空状态'], collapsible: false, },
        { text: '', children: ['Loading加载'], collapsible: false, },
        { text: '', children: ['二维码'], collapsible: false, },
        { text: '', children: ['级联选择器'], collapsible: false, },
        { text: '', children: ['看图记录'], collapsible: false, },
        { text: '', children: ['分享组件'], collapsible: false, },
        { text: '', children: ['选择装配体文件'], collapsible: false, },
        { text: '', children: ['头像裁切组件'], collapsible: false, },
        { text: '', children: ['选择或拖拽功能组件'], collapsible: false, },
        { text: '', children: ['表单'], collapsible: false, },
        { text: '', children: ['图片上传组件'], collapsible: false, },
        { text: '', children: ['PC下拉选择新建组件'], collapsible: false, }
    ]
}

// APP组件库文档
function getAppCompSideBar() {
    return [
        { text: '', children: ['Button 按钮'], collapsible: false, },
        { text: '', children: ['Search 搜索'], collapsible: false, },
        { text: '', children: ['Input 输入框'], collapsible: false, },
        { text: '', children: ['IconClass 图标'], collapsible: false, },
        { text: '', children: ['Popover 气泡弹出框'], collapsible: false, },
        { text: '', children: ['Tabber 标签栏'], collapsible: false, },
        { text: '', children: ['Toast 轻提示'], collapsible: false, },
        { text: '', children: ['Tab 标签页'], collapsible: false, },
        { text: '', children: ['Radio 单选'], collapsible: false, },
        { text: '', children: ['Checkbox 复选'], collapsible: false, },
        { text: '', children: ['Cascader 级联选择'], collapsible: false, },
        { text: '', children: ['switch开关'], collapsible: false, },
        { text: '', children: ['Stepper 步进器'], collapsible: false, },
        { text: '', children: ['Steps 步骤条'], collapsible: false, },
        { text: '', children: ['Progress 进度条'], collapsible: false, },
        { text: '', children: ['TextEllipsis 文本省略'], collapsible: false, },
        { text: '', children: ['Slider 滑块'], collapsible: false, },
        { text: '', children: ['Grid 宫格'], collapsible: false, },
        { text: '', children: ['ActionSheet 动作面板'], collapsible: false, },
        {text: '', children: ['Sidebar 侧边导航'], collapsible: false, },
        { text: '', children: ['TreeSelect 分类选择'], collapsible: false, },
        { text: '', children: ['Badge 徽标'], collapsible: false, },
        { text: '', children: ['IndexBar 索引栏'], collapsible: false, },
        { text: '', children: ['DropdownMenu 下拉菜单'], collapsible: false, },
        {text: '', children: ['Calendar 日历'], collapsible: false, },
        {text: '', children: ['DateTimePicker 日期时间选择器'], collapsible: false, },
        {text: '', children: ['PickerGroup 选择器组'], collapsible: false, },
        {text: '', children: ['NumberKeyboard 数字键盘'], collapsible: false, },
        {text: '', children: ['Dialog 弹出框'], collapsible: false, },
        {text: '', children: ['Popup 弹出层'], collapsible: false, },
		{text: '', children: ['Picker 选择器'], collapsible: false, },
        { text: '', children: ['Collapse 折叠面板'], collapsible: false, },
        { text: '', children: ['PullRefresh 下拉刷新'], collapsible: false, },
        { text: '', children: ['ImagePreview 图片预览'], collapsible: false, },
		{ text: '', children: ['PasswordInput 密码输入框'], collapsible: false, },
        { text: '', children: ['Notify 消息通知'], collapsible: false, },
        { text: '', children: ['Loading 加载'], collapsible: false, },
		{ text: '', children: ['Overlay 遮罩层'], collapsible: false, },
        { text: '', children: ['Empty 空状态'], collapsible: false, },
        { text: '', children: ['Tag 标签'], collapsible: false, },
        { text: '', children: ['List 列表'], collapsible: false, },
        { text: '', children: ['SwipeCell 滑动单元格'], collapsible: false, },
        { text: '', children: ['Form 表单'], collapsible: false, },
		{ text: '', children: ['Cell 单元格'], collapsible: false, },
		{ text: '', children: ['Sticky 粘性布局'], collapsible: false, },
		{ text: '', children: ['Swipe 轮播'], collapsible: false, },
		{ text: '', children: ['app看图组件'], collapsible: false, },    
		{ text: '', children: ['app文件格式表格'], collapsible: false, },    
		{ text: '', children: ['app下拉选择组件'], collapsible: false, }, 
        { text: '', children: ['viewerSharing分享设置'], collapsible: false, },     
        { text: '', children: ['shar分享设置组件'], collapsible: false, },
]
}

function getStandard() {                // 规范文档集合
    return [
        { text: '', children: ['组件库编写规范'], collapsible: false, },
        { text: '', children: ['主配置文件依赖说明文档'], collapsible: false, },
        { text: '', children: ['APP端CSS主题定制规范'], collapsible: false, },
        { text: '', children: ['前端常用代码规范'], collapsible: false, },
        { text: '', children: ['PC组件库打包-使用'], collapsible: false, },
        { text: '', children: ['APP组件库打包-使用'], collapsible: false, },
        { text: '', children: ['前端首页优化'], collapsible: false, },
    ]
}

function getPluginSideBar() {           // 插件集合
    return [
        {
            text: '基础工具包',
            children: ['common'],
            collapsible: false,
        },
        {
            text: '数组操作',
            link: '/pluginsMD/array.md',
            children: ['array'],
            collapsible: false,
        },
        {
            text: '正则操作',
            link: '/pluginsMD/pattern.md',
            children: ['pattern'],
        },
        {
            text: '业务操作',
            link: '/pluginsMD/business.md',
            children: ['business'],
        },
        {
            text: '数据结构',
            link: '/pluginsMD/dataStruct.md',
            children: ['dataStruct'],
        }
    ]
}

function getUiSideBar() {               // ui组件库
    return [
        {
            text: '基础控件',
        },
        {
            text: '提示控件',
            children: [
                {
                    text: '弹框',
                    link: '/uiMD/confirm.md',
                },
                {
                    text: '轻提示',
                    link: '/uiMD/message.md',
                },
            ],
        },
        {
            text: '业务组件',
            children: [
                {
                    text: '共用选人选部门',
                    link: '/uiMD/selectMember.md',
                },
                {
                    text: '二维码生成、下载、动态渲染底部文本',
                    link: '/uiMD/qrcode.md',
                },
            ],
        },
    ]
}

function getBaseSideBar() {             // 基础页面
    return [
        { text: 'PC组件库', link: '/componentMD/' },
        { text: 'APP组件库', link: '/componentAppMD/' },
        { text: '插件集', link: '/pluginsMD/' },
        { text: '规范', link: '/standardMD/' },
    ]
}
