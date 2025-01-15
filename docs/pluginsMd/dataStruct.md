### 栈

```
/**
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
```

### 队列

```
/**
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
```

### 优先队列：

```
/**
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
```
