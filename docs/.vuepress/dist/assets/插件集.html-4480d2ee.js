import{_ as n,o as a,c as s,a as e}from"./app-df2347b2.js";const t={},p=e(`<h2 id="插件集" tabindex="-1"><a class="header-anchor" href="#插件集" aria-hidden="true">#</a> 插件集</h2><h2 id="一-common" tabindex="-1"><a class="header-anchor" href="#一-common" aria-hidden="true">#</a> 一，common</h2><h4 id="判断是否是数组" tabindex="-1"><a class="header-anchor" href="#判断是否是数组" aria-hidden="true">#</a> 判断是否是数组</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Boolean <span class="token function">isArray</span><span class="token punctuation">(</span>List<span class="token operator">&lt;</span>Object<span class="token operator">&gt;</span> list<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="判断是否为null" tabindex="-1"><a class="header-anchor" href="#判断是否为null" aria-hidden="true">#</a> 判断是否为null</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 判断是否为null
 * <span class="token keyword">@param</span> <span class="token parameter">data</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
Boolean <span class="token function">isNull</span><span class="token punctuation">(</span>Object data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="返回变量类型" tabindex="-1"><a class="header-anchor" href="#返回变量类型" aria-hidden="true">#</a> 返回变量类型</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 返回变量类型
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">type</span> 
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> 常见类型包括：Number，Boolean，Array，Object，Null，Date，String，Undefined，		Function
 */</span>
<span class="token keyword">const</span> returnType <span class="token operator">=</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-arrary" tabindex="-1"><a class="header-anchor" href="#二-arrary" aria-hidden="true">#</a> 二，Arrary</h2><h4 id="数组提取数据-根据分隔符拼接-转化为字符串-joinarraytostring" tabindex="-1"><a class="header-anchor" href="#数组提取数据-根据分隔符拼接-转化为字符串-joinarraytostring" aria-hidden="true">#</a> 数组提取数据，根据分隔符拼接，转化为字符串（joinArrayToString）</h4><blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 数组提取数据，根据分隔符拼接，转化为字符串
 * <span class="token keyword">@param</span> <span class="token parameter">list</span> 待处理数据
 * <span class="token keyword">@param</span> <span class="token parameter">name</span> 剥离字段
 * <span class="token keyword">@param</span> <span class="token parameter">separator</span> 连接符
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token operator">|</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 */</span>
String <span class="token function">joinArrayToString</span><span class="token punctuation">(</span>List<span class="token operator">&lt;</span>Object<span class="token operator">&gt;</span> list<span class="token punctuation">,</span>String name<span class="token punctuation">,</span>String separator<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="list集合去重" tabindex="-1"><a class="header-anchor" href="#list集合去重" aria-hidden="true">#</a> list集合去重</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * list集合去重
 * <span class="token keyword">@param</span> <span class="token parameter">list</span> 待去重的list
 * <span class="token keyword">@param</span> <span class="token parameter">args</span> 多个字段，插件会采用join(&#39;&#39;)拼接，当做去重的判断条件。
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> reduceRepeatList <span class="token operator">=</span> <span class="token punctuation">(</span>List<span class="token operator">&lt;</span>Object<span class="token operator">&gt;</span> list<span class="token punctuation">,</span> <span class="token operator">...</span>String args<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-businese" tabindex="-1"><a class="header-anchor" href="#三-businese" aria-hidden="true">#</a> 三，Businese</h2><h4 id="数组转化为树形-convertarraytotree" tabindex="-1"><a class="header-anchor" href="#数组转化为树形-convertarraytotree" aria-hidden="true">#</a> 数组转化为树形（convertArrayToTree）</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 数组转化为树形结构
 * <span class="token keyword">@param</span> <span class="token parameter">list</span> 集合
 * <span class="token keyword">@param</span> <span class="token parameter">id</span> 唯一id
 * <span class="token keyword">@param</span> <span class="token parameter">pid</span> 关联id
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
List<span class="token operator">&lt;</span>Object<span class="token operator">&gt;</span> <span class="token function">convertArrayToTree</span><span class="token punctuation">(</span>list<span class="token operator">&lt;</span>Object<span class="token operator">&gt;</span><span class="token punctuation">,</span> String id <span class="token operator">=</span> <span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> String pid <span class="token operator">=</span> <span class="token string">&#39;pid&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="反向查找节点数据-findpathbyid" tabindex="-1"><a class="header-anchor" href="#反向查找节点数据-findpathbyid" aria-hidden="true">#</a> 反向查找节点数据（findPathById）</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 反向查找节点路径
 * <span class="token keyword">@param</span> <span class="token parameter">tree</span> 树形结构
 * <span class="token keyword">@param</span> <span class="token parameter">path</span> 开始路径（数组形式）
 * <span class="token keyword">@param</span> <span class="token parameter">callBack</span> 回调函数，插件会传递一个当前节点数据，并且调用函数。需要写一个函数返回true false
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">|</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 */</span>
List<span class="token operator">&lt;</span>Object<span class="token operator">&gt;</span> <span class="token function">findPathById</span> <span class="token punctuation">(</span>List<span class="token operator">&lt;</span>Object<span class="token operator">&gt;</span> tree<span class="token punctuation">,</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> path<span class="token punctuation">,</span>Function<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> callBack<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="搜索树形-filterlist" tabindex="-1"><a class="header-anchor" href="#搜索树形-filterlist" aria-hidden="true">#</a> 搜索树形（filterList）</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 根据条件搜索树形结构相关联属性,组成数组，主要用于搜索树形结构数据，或者删除某些不需要的数组元素等，用处很多。
 * <span class="token keyword">@param</span> <span class="token parameter">list</span> 待处理数据
 * <span class="token keyword">@param</span> <span class="token parameter">callback</span> 回调函数，工具包主动调用，并且传递每个list中的对象，业务端需要根据item判断返回true false。
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
List<span class="token operator">&lt;</span>Object<span class="token operator">&gt;</span> <span class="token keyword">const</span> filterList <span class="token operator">=</span> <span class="token punctuation">(</span>List<span class="token operator">&lt;</span>Object<span class="token operator">&gt;</span> list<span class="token punctuation">,</span> Function<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> callback<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="递归操作list集合每个节点数据" tabindex="-1"><a class="header-anchor" href="#递归操作list集合每个节点数据" aria-hidden="true">#</a> 递归操作list集合每个节点数据</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 自定义操作树形结构，用于处理树形结构每个参数
 * <span class="token keyword">@param</span> <span class="token parameter">list</span> 待处理数据
 * <span class="token keyword">@param</span> <span class="token parameter">callback</span> 回调函数，工具包主动调用，并且传递每个list中的对象，业务端自己处理逻辑。
 */</span>
List<span class="token operator">&lt;</span>Object<span class="token operator">&gt;</span> <span class="token keyword">const</span> operateTree <span class="token operator">=</span> <span class="token punctuation">(</span>List<span class="token operator">&lt;</span>Object<span class="token operator">&gt;</span> list<span class="token punctuation">,</span>Function<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> callback<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="文本高亮" tabindex="-1"><a class="header-anchor" href="#文本高亮" aria-hidden="true">#</a> 文本高亮</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 文本高亮
 * <span class="token keyword">@param</span> <span class="token parameter">text</span> 待选择的文本
 * <span class="token keyword">@param</span> <span class="token parameter">keyword</span> 关键词
 * <span class="token keyword">@param</span> <span class="token parameter">tagName</span> 替换需要的标签名
 * <span class="token keyword">@param</span> <span class="token parameter">className</span> css class类名
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
String <span class="token function">highText</span> <span class="token punctuation">(</span>String text <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> String keyword<span class="token punctuation">,</span>String tagName<span class="token punctuation">,</span> String className<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="防抖" tabindex="-1"><a class="header-anchor" href="#防抖" aria-hidden="true">#</a> 防抖</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 防抖
 * @param fn 需要运行的函数
 * @param delay 等待时长
 * @returns {(function(): void)|*}
 */
void debounce(Function&lt;T&gt; fn,Long delay)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="节流" tabindex="-1"><a class="header-anchor" href="#节流" aria-hidden="true">#</a> 节流</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 节流
 * @param fn 需要运行的函数
 * @param delay 等待时长
 * @returns {(function(*): void)|*}
 */
void throttle(Function&lt;T&gt; fn,Long delay)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="eventbus事件监听与推送" tabindex="-1"><a class="header-anchor" href="#eventbus事件监听与推送" aria-hidden="true">#</a> eventBus事件监听与推送</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 自定义简易可扩展eventbus，根据map特性，不允许有多个相同的key</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分片上传" tabindex="-1"><a class="header-anchor" href="#分片上传" aria-hidden="true">#</a> 分片上传</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 分片上传
 * <span class="token keyword">@param</span> <span class="token parameter">file</span> 文件
 * <span class="token keyword">@param</span> <span class="token parameter">getUploadIdUrl</span> 获取上传id地址 GET请求
 * <span class="token keyword">@param</span> <span class="token parameter">headers</span> 请求头（后续上传与合并都采用这一个请求头，注意做好控制）
 * <span class="token keyword">@param</span> <span class="token parameter">chunkSize</span> 切片大小默认3M
 * <span class="token keyword">@param</span> <span class="token parameter">getUploadIdParams</span> 获取上传id额外参数 query参数
 * <span class="token keyword">@param</span> <span class="token parameter">getUploadIdErrorCallback</span> 获取上传id错误处理
 * <span class="token keyword">@param</span> <span class="token parameter">uploadUrl</span> 上传地址（POST请求，formData入参）
 * <span class="token keyword">@param</span> <span class="token parameter">uploadParams</span> 上传请求额外参数，拼接在formData上面
 * <span class="token keyword">@param</span> <span class="token parameter">uploadErrorCallback</span> 上传失败回调
 * <span class="token keyword">@param</span> <span class="token parameter">onProgress</span> 上传进度回调
 * <span class="token keyword">@param</span> <span class="token parameter">mergeUploadUrl</span> 合并地址 POST请求
 * <span class="token keyword">@param</span> <span class="token parameter">mergeUploadParams</span> 合并请求参数  json形式拼接
 * <span class="token keyword">@param</span> <span class="token parameter">mergeUploadErrorCallback</span> 合并请求参数失败回调
 * <span class="token keyword">@param</span> <span class="token parameter">uploadSuccessCallback</span> 上传失败回调
 * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>Promise<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>void</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">}</span>
 */</span>
<span class="token keyword">void</span> <span class="token function">sliceUpload</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">MultipartFile</span> file<span class="token punctuation">,</span><span class="token class-name">String</span> getUploadIdUrl <span class="token punctuation">,</span><span class="token class-name">Object</span> headers <span class="token punctuation">,</span><span class="token class-name">Int</span> chunkSize <span class="token punctuation">,</span><span class="token class-name">Object</span> getUploadIdParams <span class="token punctuation">,</span><span class="token class-name">Function</span> getUploadIdErrorCallback <span class="token punctuation">,</span><span class="token class-name">String</span> uploadUrl <span class="token punctuation">,</span><span class="token class-name">Object</span> uploadParams <span class="token punctuation">,</span><span class="token class-name">Function</span> uploadErrorCallback <span class="token punctuation">,</span><span class="token class-name">Function</span> onProgress <span class="token punctuation">,</span><span class="token class-name">String</span> mergeUploadUrl <span class="token punctuation">,</span><span class="token class-name">Object</span> mergeUploadParams <span class="token punctuation">,</span><span class="token class-name">Function</span> mergeUploadErrorCallback <span class="token punctuation">,</span><span class="token class-name">Function</span> uploadSuccessCallback <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-datastruct" tabindex="-1"><a class="header-anchor" href="#四-datastruct" aria-hidden="true">#</a> 四，dataStruct</h2><h4 id="栈" tabindex="-1"><a class="header-anchor" href="#栈" aria-hidden="true">#</a> 栈</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 栈结构（先进后出）
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Stack</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
  * 无参构造
  */</span>
<span class="token keyword">void</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
  * 入栈
  * <span class="token keyword">@param</span> <span class="token parameter">item</span>
  */</span>
<span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span>Object item<span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
  * 弹出栈顶元素，并且栈元素-1
  * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
  */</span>
Object <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token doc-comment comment">/**
  * 取出栈顶元素，元素数量不变
  * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
  */</span>
Object <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
  * 栈是否为空
  * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
  */</span>
Boolean <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
  * 栈容量
  * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
  */</span>
Integer <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
  * 清空栈
  */</span>
<span class="token keyword">void</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 队列 先进先出
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Queue</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
  * 无参构造
  */</span>
<span class="token keyword">void</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
  * 入列
  * <span class="token keyword">@param</span> <span class="token parameter">item</span>
  */</span>
<span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span>Object item<span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
  * 弹出对列头 队列元素-1
  */</span>
Object <span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
  * 取队列头 队列元素不变
  * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
  */</span>
Object <span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
  * 清空队列
  */</span>
<span class="token keyword">void</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
  * 队列容量
  * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
  */</span>
Integer <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
  * 队列是否为空
  * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
  */</span>
Boolean <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="优先队列" tabindex="-1"><a class="header-anchor" href="#优先队列" aria-hidden="true">#</a> 优先队列</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 优先队列 先进先出，存在插队现象
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PriorityQueue</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
  * 无参构造
  */</span>
<span class="token keyword">void</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
  * 入队
  * <span class="token keyword">@param</span> <span class="token parameter">item</span> 元素
  * <span class="token keyword">@param</span> <span class="token parameter">priority</span> 级别
  */</span>
<span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span>Object item<span class="token punctuation">,</span>Integer priority<span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
  * 弹出对列头 队列元素-1
  */</span>
Object <span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
  * 取队列头 队列元素不变
  * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
  */</span>
Object <span class="token function">front</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
  * 清空队列
  */</span>
<span class="token keyword">void</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
  * 队列容量
  * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
  */</span>
Integer <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
  * 队列是否为空
  * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
  */</span>
Boolean <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五-pattern" tabindex="-1"><a class="header-anchor" href="#五-pattern" aria-hidden="true">#</a> 五，pattern</h2><h4 id="验证邮箱" tabindex="-1"><a class="header-anchor" href="#验证邮箱" aria-hidden="true">#</a> 验证邮箱</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 验证邮箱
 * <span class="token keyword">@param</span> <span class="token parameter">str</span> 待验证内容
 * <span class="token keyword">@param</span> <span class="token parameter">emailPattern</span> 正则表达式
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
Boolean <span class="token function">verifyEmail</span><span class="token punctuation">(</span>String str<span class="token punctuation">,</span> Pattern emailPattern <span class="token operator">=</span> email<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="验证qq" tabindex="-1"><a class="header-anchor" href="#验证qq" aria-hidden="true">#</a> 验证QQ</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 验证QQ
 * <span class="token keyword">@param</span> <span class="token parameter">str</span> 待验证内容
 * <span class="token keyword">@param</span> <span class="token parameter">QQPattern</span> 正则表达式
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
Boolean <span class="token function">verifyQQ</span><span class="token punctuation">(</span>String str<span class="token punctuation">,</span> Pattern QQPattern <span class="token operator">=</span> <span class="token constant">QQ</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="验证手机号" tabindex="-1"><a class="header-anchor" href="#验证手机号" aria-hidden="true">#</a> 验证手机号</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 验证手机号
 * <span class="token keyword">@param</span> <span class="token parameter">str</span> 待验证内容
 * <span class="token keyword">@param</span> <span class="token parameter">phonePattern</span> 正则表达式
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
Boolean <span class="token function">verifyPhone</span><span class="token punctuation">(</span>String str<span class="token punctuation">,</span> Pattern phonePattern <span class="token operator">=</span> phone<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="验证正整数" tabindex="-1"><a class="header-anchor" href="#验证正整数" aria-hidden="true">#</a> 验证正整数</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 验证正整数
 * <span class="token keyword">@param</span> <span class="token parameter">str</span> 待验证内容
 * <span class="token keyword">@param</span> <span class="token parameter">positiveIntegerPattern</span> 正则表达式
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
Boolean <span class="token function">verifyPositiveInteger</span><span class="token punctuation">(</span>String str<span class="token punctuation">,</span> Pattern positiveIntegerPattern <span class="token operator">=</span> positiveInteger<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="验证身份证号" tabindex="-1"><a class="header-anchor" href="#验证身份证号" aria-hidden="true">#</a> 验证身份证号</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 验证身份证号 x结尾的不区分大小写
 * <span class="token keyword">@param</span> <span class="token parameter">str</span> 待验证内容
 * <span class="token keyword">@param</span> <span class="token parameter">idNumberPattern</span> 正则表达式
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
Boolean <span class="token function">verifyIdNumber</span><span class="token punctuation">(</span>String str<span class="token punctuation">,</span> Pattern idNumberPattern <span class="token operator">=</span> idNumber<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="验证装配体" tabindex="-1"><a class="header-anchor" href="#验证装配体" aria-hidden="true">#</a> 验证装配体</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 校验是否是装配体
 * <span class="token keyword">@param</span> <span class="token parameter">str</span>
 * <span class="token keyword">@param</span> <span class="token parameter">assemblyPattern</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
Boolean <span class="token function">verifyAssembly</span><span class="token punctuation">(</span>String str<span class="token punctuation">,</span> Pattern assemblyPattern <span class="token operator">=</span> assembly<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="验证cad" tabindex="-1"><a class="header-anchor" href="#验证cad" aria-hidden="true">#</a> 验证CAD</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 校验是否是cad
 * <span class="token keyword">@param</span> <span class="token parameter">str</span>
 * <span class="token keyword">@param</span> <span class="token parameter">cadPattern</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
Boolean <span class="token function">verifyCAD</span><span class="token punctuation">(</span>String str<span class="token punctuation">,</span> Pattern cadPattern <span class="token operator">=</span> <span class="token constant">CAD</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="验证pdf" tabindex="-1"><a class="header-anchor" href="#验证pdf" aria-hidden="true">#</a> 验证PDF</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 校验是否是pdf
 * <span class="token keyword">@param</span> <span class="token parameter">str</span>
 * <span class="token keyword">@param</span> <span class="token parameter">pdfPattern</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
Boolean <span class="token function">verifyPDF</span><span class="token punctuation">(</span>String str<span class="token punctuation">,</span> Pattern pdfPattern <span class="token operator">=</span> <span class="token constant">PDF</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六-cookie" tabindex="-1"><a class="header-anchor" href="#六-cookie" aria-hidden="true">#</a> 六，cookie</h2><h4 id="获取cookie" tabindex="-1"><a class="header-anchor" href="#获取cookie" aria-hidden="true">#</a> 获取cookie</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 获取cookie
 * <span class="token keyword">@param</span> <span class="token parameter">name</span> String 属性名
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> getCookie <span class="token operator">=</span> <span class="token punctuation">(</span>String name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="设置cookie" tabindex="-1"><a class="header-anchor" href="#设置cookie" aria-hidden="true">#</a> 设置cookie</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 设置cookie
 * <span class="token keyword">@param</span> <span class="token parameter">name</span> String 属性名
 * <span class="token keyword">@param</span> <span class="token parameter">value</span> String 属性值
 * <span class="token keyword">@param</span> <span class="token parameter">obj</span> Object ：maxAge-过期时间(s)，domain，path，secure
 */</span>
<span class="token keyword">const</span> setCookie <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token punctuation">{</span> maxAge<span class="token punctuation">,</span> domain<span class="token punctuation">,</span> path<span class="token punctuation">,</span> secure <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除cookie" tabindex="-1"><a class="header-anchor" href="#删除cookie" aria-hidden="true">#</a> 删除cookie</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 删除cookie
 * <span class="token keyword">@param</span> <span class="token parameter">name</span> String
 * <span class="token keyword">@param</span> <span class="token parameter">obj</span> Object domain，path
 */</span>

<span class="token keyword">const</span> deleteCookie <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token punctuation">{</span> domain<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七-number" tabindex="-1"><a class="header-anchor" href="#七-number" aria-hidden="true">#</a> 七，number</h2><h4 id="金额转化" tabindex="-1"><a class="header-anchor" href="#金额转化" aria-hidden="true">#</a> 金额转化</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 将金额转化成 0.00 格式
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">obj</span> 金额
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> amountChange <span class="token operator">=</span> <span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数字运算-乘法" tabindex="-1"><a class="header-anchor" href="#数字运算-乘法" aria-hidden="true">#</a> 数字运算-乘法</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 数字运算：A乘B
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">arg1</span> Number|String 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">arg2</span> Number|String 
 * <span class="token keyword">@returns</span> 
 */</span>
<span class="token keyword">const</span> accMul <span class="token operator">=</span> <span class="token punctuation">(</span>arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数字运算-除法" tabindex="-1"><a class="header-anchor" href="#数字运算-除法" aria-hidden="true">#</a> 数字运算-除法</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 数字运算：A除B
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">arg1</span> Number|String 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">arg2</span> Number|String 
 * <span class="token keyword">@returns</span> Number
 */</span>
<span class="token keyword">const</span> accExc <span class="token operator">=</span> <span class="token punctuation">(</span>arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数字运算-加法" tabindex="-1"><a class="header-anchor" href="#数字运算-加法" aria-hidden="true">#</a> 数字运算-加法</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 数字运算：A加B
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">arg1</span> Number|String 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">arg2</span> Number|String 
 * <span class="token keyword">@returns</span> Number
 */</span>
<span class="token keyword">const</span> accAdd <span class="token operator">=</span> <span class="token punctuation">(</span>arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数字运算-减法" tabindex="-1"><a class="header-anchor" href="#数字运算-减法" aria-hidden="true">#</a> 数字运算-减法</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 数字运算：A减B
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">arg1</span> Number|String 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">arg2</span> Number|String 
 * <span class="token keyword">@returns</span> Number
 */</span>
<span class="token keyword">const</span> accCut <span class="token operator">=</span> <span class="token punctuation">(</span>arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,74),c=[p];function i(l,o){return a(),s("div",null,c)}const d=n(t,[["render",i],["__file","插件集.html.vue"]]);export{d as default};
