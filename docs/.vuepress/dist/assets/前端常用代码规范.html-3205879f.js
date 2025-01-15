import{_ as n,o as s,c as a,a as e}from"./app-df2347b2.js";const t={},p=e(`<h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3><blockquote><p>我们希望做一些让团队更有意义的事情，减少工作量，让项目更好维护。ctrl c + v的组合比起自己造轮子要香。沉淀出更多的最佳实践，离不开各位的技术支持和经验总结。</p></blockquote><h3 id="_1-组件引入顺序" tabindex="-1"><a class="header-anchor" href="#_1-组件引入顺序" aria-hidden="true">#</a> 1，组件引入顺序</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vue核心功能引入（vue、vuex相关）</span>

<span class="token comment">// 第三方工具、插件</span>

<span class="token comment">// 组件components</span>

<span class="token comment">// 配置文件，公共方法</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">minxins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 生命周期</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 其它</span>
<span class="token punctuation">}</span>

<span class="token comment">// vue3</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 核心数据部分</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 生命周期部分</span>
    <span class="token function">onBeforeMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
    <span class="token comment">// 页面使用的方法优先放上面</span>
    <span class="token comment">// 页面其它需要使用的方法</span>

    <span class="token comment">// 只return页面需要使用的方法</span>
    <span class="token keyword">const</span> refData <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>refData<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-始终为组件样式设置作用域" tabindex="-1"><a class="header-anchor" href="#_2-始终为组件样式设置作用域" aria-hidden="true">#</a> 2，始终为组件样式设置作用域</h3><p>过多全局样式非常容易造成污染。因此，建议始终为组件样式设置作用域。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// assets/css：存放非业务组件的公共样式</span>
common<span class="token punctuation">.</span>css
design<span class="token punctuation">.</span>css

<span class="token comment">// 组件内：组件样式 + 模块共享样式</span>
<span class="token operator">&lt;</span>style scope<span class="token operator">&gt;</span>
@<span class="token keyword">import</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token string">&#39;模块.common.css&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-模块化组织组件" tabindex="-1"><a class="header-anchor" href="#_3-模块化组织组件" aria-hidden="true">#</a> 3，模块化组织组件</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 不好的做法</span>
├── viewer
│   ├──compAa<span class="token punctuation">.</span>vue
│   ├──compAb<span class="token punctuation">.</span>vue
│   ├──compBa<span class="token punctuation">.</span>vue
│   ├──compBb<span class="token punctuation">.</span>vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 好的做法
├── viewer
│   ├──moduleA
│      ├──compAa.vue
│      ├──compAb.vue
│   ├──moduleB
│      ├──compBa.vue
│      ├──compBb.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-模块化组织路由" tabindex="-1"><a class="header-anchor" href="#_4-模块化组织路由" aria-hidden="true">#</a> 4，模块化组织路由</h3><p>在中大型项目中，将路由拆分成模块。阅读和使用更清晰，全放在一个路由文件，文件体量太多庞大。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>├── router
│   ├── index<span class="token punctuation">.</span>js
│   ├── home<span class="token punctuation">.</span>js
│   ├── login<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> homeRoutes <span class="token keyword">from</span> <span class="token string">&#39;./home&#39;</span>
<span class="token keyword">import</span> loginRoutes <span class="token keyword">from</span> <span class="token string">&#39;./login&#39;</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> 
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Home<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>homeRoutes<span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Login&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Login<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>loginRoutes<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-模块化组织vuex" tabindex="-1"><a class="header-anchor" href="#_5-模块化组织vuex" aria-hidden="true">#</a> 5，模块化组织vuex</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>├── index<span class="token punctuation">.</span>js		<span class="token comment">// 管理</span>
├── module			<span class="token comment">// vuex模块化</span>
│   ├── home<span class="token punctuation">.</span>js
│   ├── login<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-组件命名" tabindex="-1"><a class="header-anchor" href="#_6-组件命名" aria-hidden="true">#</a> 6，组件命名</h3><p>文件命名小驼峰方式，使用时用短横线</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 文件</span>
├── messageManage<span class="token punctuation">.</span>vue
<span class="token comment">// 使用</span>
<span class="token operator">&lt;</span>message<span class="token operator">-</span>manage<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>message<span class="token operator">-</span>manage<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-尽量少挂载全局对象" tabindex="-1"><a class="header-anchor" href="#_7-尽量少挂载全局对象" aria-hidden="true">#</a> 7，尽量少挂载全局对象</h3><p>减少全局污染。至少也要在全局给个对象，再挂载到这个对象的属性上。</p><h3 id="_8-多创建init函数-reset函数集中管理逻辑" tabindex="-1"><a class="header-anchor" href="#_8-多创建init函数-reset函数集中管理逻辑" aria-hidden="true">#</a> 8，多创建init函数，reset函数集中管理逻辑</h3><p>生命周期是代码组织的重要入口，要将同一功能的逻辑包装在init函数内，方便阅读。</p><p>reset函数组织业务代码，将数据和页面重置到初始化的状态。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 好的code</span>
<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">initData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">initStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">initList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">resetData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-错误提前-减少嵌套" tabindex="-1"><a class="header-anchor" href="#_9-错误提前-减少嵌套" aria-hidden="true">#</a> 9，错误提前，减少嵌套</h3><p>错误提前判断的好处：将核心业务逻辑从嵌套中分离。预处理可能遇到的错误，更有组织性。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 常见的code</span>
http<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>code <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token operator">...</span>业务逻辑
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>code <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token operator">...</span>报错逻辑<span class="token number">1</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>code <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>报错逻辑<span class="token number">2</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 错误提前的code</span>
http<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>code <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>code <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token operator">...</span>业务逻辑
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-逻辑拆分成方法不要全部揉在一起" tabindex="-1"><a class="header-anchor" href="#_10-逻辑拆分成方法不要全部揉在一起" aria-hidden="true">#</a> 10，逻辑拆分成方法不要全部揉在一起</h3><p>减少一大段一大段业务逻辑出现的情况，这种代码不方便阅读。将你的大段逻辑成小逻辑独立成方法，业务代码放组件，数据处理等和业务无相关联的代码放公用的地方。</p><h3 id="_11-代码注释" tabindex="-1"><a class="header-anchor" href="#_11-代码注释" aria-hidden="true">#</a> 11，代码注释</h3><ul><li>放在data里的数据</li><li>声明的方法。对于封装性质的方法，注释入参出参</li><li>逻辑块代码注释</li></ul><h3 id="_12-减少回调函数的使用层数避免进入回调地狱" tabindex="-1"><a class="header-anchor" href="#_12-减少回调函数的使用层数避免进入回调地狱" aria-hidden="true">#</a> 12，减少回调函数的使用层数避免进入回调地狱</h3><p>深层级的回调会影响阅读</p><h3 id="_13-多使用或补全公共方法不要重复造轮子-减少业务逻辑" tabindex="-1"><a class="header-anchor" href="#_13-多使用或补全公共方法不要重复造轮子-减少业务逻辑" aria-hidden="true">#</a> 13，多使用或补全公共方法不要重复造轮子，减少业务逻辑</h3><p>比如数据递归，数据循环处理等，使用公共方法处理</p><h3 id="_14-data的数据主要是和页面渲染相关的-无关的变量尽量不要往data里放" tabindex="-1"><a class="header-anchor" href="#_14-data的数据主要是和页面渲染相关的-无关的变量尽量不要往data里放" aria-hidden="true">#</a> 14，data的数据主要是和页面渲染相关的，无关的变量尽量不要往data里放</h3><h3 id="_15-样式命名" tabindex="-1"><a class="header-anchor" href="#_15-样式命名" aria-hidden="true">#</a> 15，样式命名</h3><ul><li>让样式命名带有更强的关联性。比如 menu_card -&gt; menu_list -&gt; menu_list_title</li><li>class命名建议_优先，因为第三方库多是用短横线命名。</li><li>id命名建议小驼峰menuCard主要是何class区分，id尽量少用，id的使用一般是结合了业务功能</li><li>尽量少得使用字母+数字的组合命名，有时候用到可增加阅读性</li><li>标签样式尽量多样化，阅读性更高。</li></ul><h3 id="_16-项目的readme-md文档" tabindex="-1"><a class="header-anchor" href="#_16-项目的readme-md文档" aria-hidden="true">#</a> 16，项目的readme.md文档</h3><ul><li>涵盖项目命令指导</li><li>涵盖文件结构和解释</li><li>涵盖项目的一些逻辑、设计信息</li></ul><h3 id="_17-使用逻辑运算符简化代码" tabindex="-1"><a class="header-anchor" href="#_17-使用逻辑运算符简化代码" aria-hidden="true">#</a> 17，使用逻辑运算符简化代码</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 使用!或!!，常用于条件判断，可过滤掉null undefined &#39;&#39; 0 的区别</span>
<span class="token operator">!</span><span class="token constant">A</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token constant">A</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span> 
<span class="token operator">!</span><span class="token operator">!</span><span class="token constant">A</span> <span class="token operator">&amp;&amp;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 用|| 修改同理</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> b <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>	<span class="token comment">// 用|| 做默认赋值</span>

a <span class="token operator">=</span> b <span class="token operator">?</span> <span class="token function">fnA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">fnB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 3目运算</span>

<span class="token operator">...</span>Obj<span class="token punctuation">;</span>	<span class="token comment">// 结构对象</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_18-组件拆分" tabindex="-1"><a class="header-anchor" href="#_18-组件拆分" aria-hidden="true">#</a> 18，组件拆分</h3><p>组件内容过多是进行拆分，超过500行的js逻辑都要考虑这个问题</p><h3 id="_19-生命周期内的init函数尽量不要使用await-async-阻塞页面加载" tabindex="-1"><a class="header-anchor" href="#_19-生命周期内的init函数尽量不要使用await-async-阻塞页面加载" aria-hidden="true">#</a> 19，生命周期内的init函数尽量不要使用await/async 阻塞页面加载</h3><h3 id="_20-标签上不要写复杂的表达式-用计算属性computed代替" tabindex="-1"><a class="header-anchor" href="#_20-标签上不要写复杂的表达式-用计算属性computed代替" aria-hidden="true">#</a> 20，标签上不要写复杂的表达式，用计算属性computed代替</h3><h3 id="_21-build生产包需要关闭sourcemap和日志减小文件体积" tabindex="-1"><a class="header-anchor" href="#_21-build生产包需要关闭sourcemap和日志减小文件体积" aria-hidden="true">#</a> 21，build生产包需要关闭sourceMap和日志减小文件体积</h3><h3 id="_22-使用懒加载" tabindex="-1"><a class="header-anchor" href="#_22-使用懒加载" aria-hidden="true">#</a> 22，使用懒加载</h3><p>项目中的路由和页面中的图片尽量使用懒加载</p><h3 id="_23-关于页面title" tabindex="-1"><a class="header-anchor" href="#_23-关于页面title" aria-hidden="true">#</a> 23，关于页面title</h3><p>如果是html页面,需要在页面头部加上页面对应title(如果title统一是一个标题无法修改,需要建立项目的readme.md文档,标注每个html文件对应的标题)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;title&gt;图纸通 | 新迪旗下云软件&lt;/title&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果是vue文件需要在router.js声明路径</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 设置页面</span>
<span class="token punctuation">{</span>
	<span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/settings&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;settings&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;userInfor/settings&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;设置&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_24-省略外链资源-url-协议部分" tabindex="-1"><a class="header-anchor" href="#_24-省略外链资源-url-协议部分" aria-hidden="true">#</a> 24，省略外链资源 URL 协议部分</h3><p>省略外链资源（图片及其它媒体资源）URL 中的 http / https 协议，使 URL 成为相对地址，避免Mixed Content 问题。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script <span class="token keyword">async</span> src<span class="token operator">=</span><span class="token string">&quot;//www.googletagmanager.com/gtag/js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_25-seo-优化" tabindex="-1"><a class="header-anchor" href="#_25-seo-优化" aria-hidden="true">#</a> 25，SEO 优化</h3><p>*针对网站类的项目(官网)</p><p>每个网页都应有一个不超过 150 个字符且能准确反映网页内容的描述标签。文档</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;meta name=&quot;description&quot; content=&quot;不超过150个字符&quot;&gt;  &lt;!-- 页面描述 --&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>页面关键词</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;keywords&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token operator">&gt;</span>  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 页面关键词 <span class="token operator">--</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>定义页面标题</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>标题<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>定义网页搜索引擎索引方式，robotterms是一组使用英文逗号「,」分割的值，通常有如下几种取值：none，noindex，nofollow，all，index和follow</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;robots&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;index,follow&quot;</span><span class="token operator">&gt;</span>  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 搜索引擎抓取 <span class="token operator">--</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_26-prop-定义应该尽量详细" tabindex="-1"><a class="header-anchor" href="#_26-prop-定义应该尽量详细" aria-hidden="true">#</a> 26，Prop 定义应该尽量详细</h3><p>在你提交的代码中，prop 的定义应该尽量详细，至少需要指定其类型。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其它小知识" tabindex="-1"><a class="header-anchor" href="#其它小知识" aria-hidden="true">#</a> 其它小知识</h3><ol><li>使用相对，绝对定位时，子级继承了父级的宽度无法满足自适应的情况。针对文本使用 white-space: nowrap;</li><li>在不知晓div宽高但是需要居中的情况。使用transform: translate(-50%, -50%);</li><li>v-for和v-if不一起使用。v-if或v-show的判断条件较多时，可以放计算属性里面，或着方法里判断。</li></ol><h3 id="可探讨的问题" tabindex="-1"><a class="header-anchor" href="#可探讨的问题" aria-hidden="true">#</a> 可探讨的问题</h3><ol><li>如何理解和实践vue等框架的数据响应模式？</li><li>好的代码有什么特点？ <ul><li>好迁移</li><li>逻辑清楚</li><li>格式优美</li></ul></li></ol><h3 id="下一步整理的东西" tabindex="-1"><a class="header-anchor" href="#下一步整理的东西" aria-hidden="true">#</a> 下一步整理的东西</h3><ul><li>结合实际代码例子整理写法问题</li><li>结合实际场景整理代码模型</li></ul>`,77),o=[p];function i(l,c){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","前端常用代码规范.html.vue"]]);export{u as default};
