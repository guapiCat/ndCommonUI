
<br />

 #### 文件说明


* 我们在`package/APP`文件夹下放置了一个`common.scss`文件。它用于定制主题样式。
* common.scc只包含两个部分：
  1. 定义的各种公共scss变量，如颜色`$nd-primary-color: #1780E3;`，边距等。
  2. vant主题配置修改，它定义在`:root:root{  }`里。头部放置变量，这些变量应该包含规范的颜色和边距，内容放置对vant主题的修改如`--van-sidebar-selected-background: var(--nd-primary-color);`，可修改的主题配置见vant文档。
     <br />

 #### 如何进行开发

* 在组件中引入公共的`common.scss`文件，如果有可用的变量就直接用，如果没有需要在`common.scss`文件加入新的变量。
* `common.scss`文件里存放的是公共变量，和主题配置。不要将组件内部的样式放进来
* 尽量在组件内部少用样式透传直接修改样式，首先查看是否有可配置的主题，没有的话再进行修改，边距和颜色以`common.scss`内的规范变量为准。
  <br />

 #### 一些问题

* 问：为什么`:root:root{  }`不能用`$nd-primary-color`变量，而是再重命名一遍
  答：`:root:root{  }`属于vant约定的解析方式，读取不了`$nd-primary-color`
* 问：为什么不将scss中的变量和`:root:root{  }`拆开
  答：目前暂不拆开。想尽量避免多文件引用，目前只引用一个文件相对方便。后续会做引用的优化






