import{_ as i,o as n,c as e,a as s}from"./app-df2347b2.js";const d={},l=s(`<h3 id="栈" tabindex="-1"><a class="header-anchor" href="#栈" aria-hidden="true">#</a> 栈</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 栈结构（先进后出）
 */
public class Stack{}
/**
  * 无参构造
  */
void constructor()
/**
  * 入栈
  * @param item
  */
void push(Object item)
/**
  * 弹出栈顶元素，并且栈元素-1
  * @returns {*}
  */
Object pop() 
/**
  * 取出栈顶元素，元素数量不变
  * @returns {*}
  */
Object peek()
/**
  * 栈是否为空
  * @returns {boolean}
  */
Boolean isEmpty()
/**
  * 栈容量
  * @returns {number}
  */
Integer size()
/**
  * 清空栈
  */
void clear()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 队列 先进先出
 */
public class Queue{}
/**
  * 无参构造
  */
void constructor()
/**
  * 入列
  * @param item
  */
void push(Object item)
/**
  * 弹出对列头 队列元素-1
  */
Object dequeue()
/**
  * 取队列头 队列元素不变
  * @returns {*}
  */
Object front()
/**
  * 清空队列
  */
void clear()
/**
  * 队列容量
  * @returns {number}
  */
Integer size()
/**
  * 队列是否为空
  * @returns {boolean}
  */
Boolean isEmpty()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优先队列" tabindex="-1"><a class="header-anchor" href="#优先队列" aria-hidden="true">#</a> 优先队列：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 优先队列 先进先出，存在插队现象
 */
public class PriorityQueue {}
/**
  * 无参构造
  */
void constructor()
/**
  * 入队
  * @param item 元素
  * @param priority 级别
  */
void push(Object item,Integer priority)
/**
  * 弹出对列头 队列元素-1
  */
Object dequeue()
/**
  * 取队列头 队列元素不变
  * @returns {*}
  */
Object front()
/**
  * 清空队列
  */
void clear()
/**
  * 队列容量
  * @returns {number}
  */
Integer size()
/**
  * 队列是否为空
  * @returns {boolean}
  */
Boolean isEmpty()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),v=[l];function r(a,c){return n(),e("div",null,v)}const m=i(d,[["render",r],["__file","dataStruct.html.vue"]]);export{m as default};
