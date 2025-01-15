### app版本更新

------

**Version - 0.1.124**

- fix：PullRefresh下拉刷新组件，修复了滚动到中间区域也触发下拉刷新的问题，属于vant自身问题。解决方式为在滚动事件中判断scrollTop，不为0时禁用下拉刷新。

  ps：接入时滚动区域不要再设置溢出滚动，否则会触发此类问题



**Version - 0.1.125 ~ 0.1.132**
- feat：分享组件样式修改
- feat：分享组件图片支持裂图，支持lazy加载
- feat：列表组件图片支持配置fit设置图片object-fit样式类型
- feat：列表组件图片支持配置imageClass给图片设置一个class，使用:deep()可以覆写图片样式
- fix：处理分享组件内二级popup弹窗在ios下的样式问题



### PC 版本更新

------

**Version - 0.1.5** 