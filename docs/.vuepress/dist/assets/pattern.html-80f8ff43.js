import{_ as n,o as a,c as e,a as s}from"./app-df2347b2.js";const i={},r=s(`<h3 id="验证邮箱" tabindex="-1"><a class="header-anchor" href="#验证邮箱" aria-hidden="true">#</a> 验证邮箱：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 验证邮箱
 * @param str 待验证内容
 * @param emailPattern 正则表达式
 * @returns {boolean}
 */
Boolean verifyEmail(String str, Pattern emailPattern = email) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证qq" tabindex="-1"><a class="header-anchor" href="#验证qq" aria-hidden="true">#</a> 验证QQ：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 验证QQ
 * @param str 待验证内容
 * @param QQPattern 正则表达式
 * @returns {boolean}
 */
Boolean verifyQQ(String str, Pattern QQPattern = QQ)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证手机号" tabindex="-1"><a class="header-anchor" href="#验证手机号" aria-hidden="true">#</a> 验证手机号：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 验证手机号
 * @param str 待验证内容
 * @param phonePattern 正则表达式
 * @returns {boolean}
 */
Boolean verifyPhone(String str, Pattern phonePattern = phone)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证正整数" tabindex="-1"><a class="header-anchor" href="#验证正整数" aria-hidden="true">#</a> 验证正整数：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 验证正整数
 * @param str 待验证内容
 * @param positiveIntegerPattern 正则表达式
 * @returns {boolean}
 */
Boolean verifyPositiveInteger(String str, Pattern positiveIntegerPattern = positiveInteger)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证身份证号" tabindex="-1"><a class="header-anchor" href="#验证身份证号" aria-hidden="true">#</a> 验证身份证号：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 验证身份证号 x结尾的不区分大小写
 * @param str 待验证内容
 * @param idNumberPattern 正则表达式
 * @returns {boolean}
 */
Boolean verifyIdNumber(String str, Pattern idNumberPattern = idNumber)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证装配体" tabindex="-1"><a class="header-anchor" href="#验证装配体" aria-hidden="true">#</a> 验证装配体：</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 校验是否是装配体
 * <span class="token keyword">@param</span> <span class="token parameter">str</span>
 * <span class="token keyword">@param</span> <span class="token parameter">assemblyPattern</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
Boolean <span class="token function">verifyAssembly</span><span class="token punctuation">(</span>String str<span class="token punctuation">,</span> Pattern assemblyPattern <span class="token operator">=</span> assembly<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证cad" tabindex="-1"><a class="header-anchor" href="#验证cad" aria-hidden="true">#</a> 验证CAD：</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 校验是否是cad
 * <span class="token keyword">@param</span> <span class="token parameter">str</span>
 * <span class="token keyword">@param</span> <span class="token parameter">cadPattern</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
Boolean <span class="token function">verifyCAD</span><span class="token punctuation">(</span>String str<span class="token punctuation">,</span> Pattern cadPattern <span class="token operator">=</span> <span class="token constant">CAD</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证pdf" tabindex="-1"><a class="header-anchor" href="#验证pdf" aria-hidden="true">#</a> 验证PDF:</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 校验是否是pdf
 * <span class="token keyword">@param</span> <span class="token parameter">str</span>
 * <span class="token keyword">@param</span> <span class="token parameter">pdfPattern</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
Boolean <span class="token function">verifyPDF</span><span class="token punctuation">(</span>String str<span class="token punctuation">,</span> Pattern pdfPattern <span class="token operator">=</span> <span class="token constant">PDF</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),t=[r];function d(l,c){return a(),e("div",null,t)}const p=n(i,[["render",d],["__file","pattern.html.vue"]]);export{p as default};
