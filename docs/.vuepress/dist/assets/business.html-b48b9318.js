import{_ as a,r as s,o as i,c as l,b as d,d as n,e as r,a as t}from"./app-df2347b2.js";const c={},v=n("h3",{id:"cookie操作-cookie",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cookie操作-cookie","aria-hidden":"true"},"#"),r(" cookie操作（cookie）")],-1),u=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 获取cookie
 * @param name String 属性名
 * @returns {string}
 */
String getCookie(String name)

/**
 * 设置cookie
 * @param name String 属性名
 * @param value String 属性值
 * @param obj Object ：maxAge-过期时间(s)，domain，path，secure
 */
void setCookie = (String name, String value, Object { maxAge, domain, path, secure } = {})

/**
 * 删除cookie
 * @param name String
 * @param obj Object domain，path
 */
void deleteCookie = (String name, Object { domain, path } = {})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组转化为树形-convertarraytotree" tabindex="-1"><a class="header-anchor" href="#数组转化为树形-convertarraytotree" aria-hidden="true">#</a> 数组转化为树形（convertArrayToTree）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 数组转化为树形结构
 * @param list 集合
 * @param id 唯一id
 * @param pid 关联id
 * @returns {*[]}
 */
List&lt;Object&gt; convertArrayToTree(list&lt;Object&gt;, String id = &#39;id&#39;, String pid = &#39;pid&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="反向查找节点数据-findpathbyid" tabindex="-1"><a class="header-anchor" href="#反向查找节点数据-findpathbyid" aria-hidden="true">#</a> 反向查找节点数据（findPathById）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 反向查找节点路径
 * @param tree 树形结构
 * @param path 开始路径（数组形式）
 * @param callBack 回调函数，插件会传递一个当前节点数据，并且调用函数。需要写一个函数返回true false
 * @returns {*[]|*}
 */
List&lt;Object&gt; findPathById (List&lt;Object&gt; tree,String[] path,Function&lt;T&gt; callBack)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="搜索树形-filterlist" tabindex="-1"><a class="header-anchor" href="#搜索树形-filterlist" aria-hidden="true">#</a> 搜索树形（filterList）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 根据条件搜索树形结构相关联属性,组成数组，主要用于搜索树形结构数据，或者删除某些不需要的数组元素等，用处很多。
 * @param list 待处理数据
 * @param callback 回调函数，工具包主动调用，并且传递每个list中的对象，业务端需要根据item判断返回true false。
 * @returns {*[]}
 */
List&lt;Object&gt; const filterList = (List&lt;Object&gt; list, Function&lt;T&gt; callback)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="递归操作list集合每个节点数据" tabindex="-1"><a class="header-anchor" href="#递归操作list集合每个节点数据" aria-hidden="true">#</a> 递归操作list集合每个节点数据</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 自定义操作树形结构，用于处理树形结构每个参数
 * @param list 待处理数据
 * @param callback 回调函数，工具包主动调用，并且传递每个list中的对象，业务端自己处理逻辑。
 */
List&lt;Object&gt; const operateTree = (List&lt;Object&gt; list,Function&lt;T&gt; callback)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文本高亮" tabindex="-1"><a class="header-anchor" href="#文本高亮" aria-hidden="true">#</a> 文本高亮</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 文本高亮
 * @param text 待选择的文本
 * @param keyword 关键词
 * @param tagName 替换需要的标签名
 * @param className css class类名
 * @returns {string}
 */
String highText (String text = &#39;&#39;, String keyword,String tagName, String className)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="防抖" tabindex="-1"><a class="header-anchor" href="#防抖" aria-hidden="true">#</a> 防抖</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 防抖
 * @param fn 需要运行的函数
 * @param delay 等待时长
 * @returns {(function(): void)|*}
 */
void debounce(Function&lt;T&gt; fn,Long delay)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="节流" tabindex="-1"><a class="header-anchor" href="#节流" aria-hidden="true">#</a> 节流</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 节流
 * @param fn 需要运行的函数
 * @param delay 等待时长
 * @returns {(function(*): void)|*}
 */
void throttle(Function&lt;T&gt; fn,Long delay)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="eventbus事件监听与推送" tabindex="-1"><a class="header-anchor" href="#eventbus事件监听与推送" aria-hidden="true">#</a> eventBus事件监听与推送</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 自定义简易可扩展eventbus，根据map特性，不允许有多个相同的key</span>
<span class="token keyword">class</span> <span class="token class-name">EventBus</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token doc-comment comment">/**
     * 创建一个监听
     * <span class="token keyword">@param</span> <span class="token parameter">eventBusName</span> 名称
     * <span class="token keyword">@param</span> <span class="token parameter">callback</span> 回调
     */</span>
    <span class="token keyword">void</span> <span class="token function">on</span><span class="token punctuation">(</span>String eventBusName<span class="token punctuation">,</span> Function<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> callback<span class="token punctuation">)</span>

    <span class="token doc-comment comment">/**
     * 所有eventBus
     * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
     */</span>
   HashMap <span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token doc-comment comment">/**
     * 发送eventBus
     * <span class="token keyword">@param</span> <span class="token parameter">eventBusName</span> 名称
     * <span class="token keyword">@param</span> <span class="token parameter">args</span> 省略参数
     */</span>
    <span class="token keyword">void</span> <span class="token function">emit</span><span class="token punctuation">(</span>String eventBusName<span class="token punctuation">,</span> <span class="token operator">...</span>String args<span class="token punctuation">)</span>

    <span class="token doc-comment comment">/**
     * 移除一个eventBus
     * <span class="token keyword">@param</span> <span class="token parameter">eventBusName</span> 名称
     */</span>
    <span class="token keyword">void</span> <span class="token function">off</span><span class="token punctuation">(</span>String eventBusName<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分片上传" tabindex="-1"><a class="header-anchor" href="#分片上传" aria-hidden="true">#</a> 分片上传</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 分片上传
 * @param file 文件
 * @param getUploadIdUrl 获取上传id地址 GET请求
 * @param headers 请求头（后续上传与合并都采用这一个请求头，注意做好控制）
 * @param chunkSize 切片大小默认3M
 * @param getUploadIdParams 获取上传id额外参数 query参数
 * @param getUploadIdErrorCallback 获取上传id错误处理
 * @param uploadUrl 上传地址（POST请求，formData入参）
 * @param uploadParams 上传请求额外参数，拼接在formData上面
 * @param uploadErrorCallback 上传失败回调
 * @param onProgress 上传进度回调
 * @param mergeUploadUrl 合并地址 POST请求
 * @param mergeUploadParams 合并请求参数  json形式拼接
 * @param mergeUploadErrorCallback 合并请求参数失败回调
 * @param uploadSuccessCallback 上传失败回调
 * @returns {Promise&lt;void&gt;}
 */
void sliceUpload({MultipartFile file,String getUploadIdUrl ,Object headers ,Int chunkSize ,Object getUploadIdParams ,Function getUploadIdErrorCallback ,String uploadUrl ,Object uploadParams ,Function uploadErrorCallback ,Function onProgress ,String mergeUploadUrl ,Object mergeUploadParams ,Function mergeUploadErrorCallback ,Function uploadSuccessCallback })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function o(m,p){const e=s("testCookie");return i(),l("div",null,[v,d(e),u])}const g=a(c,[["render",o],["__file","business.html.vue"]]);export{g as default};
