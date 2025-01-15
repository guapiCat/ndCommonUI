import{_ as a,o as n,c as s,a as e}from"./app-df2347b2.js";const t={},i=e(`<h3 id="数组提取数据-根据分隔符拼接-转化为字符串-joinarraytostring" tabindex="-1"><a class="header-anchor" href="#数组提取数据-根据分隔符拼接-转化为字符串-joinarraytostring" aria-hidden="true">#</a> 数组提取数据，根据分隔符拼接，转化为字符串（joinArrayToString）</h3><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 数组提取数据，根据分隔符拼接，转化为字符串
 * @param list 待处理数据
 * @param name 剥离字段
 * @param separator 连接符
 * @returns {string|*}
 */
String joinArrayToString(List&lt;Object&gt; list,String name,String separator)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="list集合去重" tabindex="-1"><a class="header-anchor" href="#list集合去重" aria-hidden="true">#</a> list集合去重</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * list集合去重
 * <span class="token keyword">@param</span> <span class="token parameter">list</span> 待去重的list
 * <span class="token keyword">@param</span> <span class="token parameter">args</span> 多个字段，插件会采用join(&#39;&#39;)拼接，当做去重的判断条件。
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> reduceRepeatList <span class="token operator">=</span> <span class="token punctuation">(</span>List<span class="token operator">&lt;</span>Object<span class="token operator">&gt;</span> list<span class="token punctuation">,</span> <span class="token operator">...</span>String args<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=[i];function l(c,o){return n(),s("div",null,r)}const p=a(t,[["render",l],["__file","array.html.vue"]]);export{p as default};
