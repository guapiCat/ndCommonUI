### 数组提取数据，根据分隔符拼接，转化为字符串（joinArrayToString）

> ```
> /**
>  * 数组提取数据，根据分隔符拼接，转化为字符串
>  * @param list 待处理数据
>  * @param name 剥离字段
>  * @param separator 连接符
>  * @returns {string|*}
>  */
> String joinArrayToString(List<Object> list,String name,String separator)
> ```
> 
### list集合去重
```js
/**
 * list集合去重
 * @param list 待去重的list
 * @param args 多个字段，插件会采用join('')拼接，当做去重的判断条件。
 * @returns {*[]}
 */
const reduceRepeatList = (List<Object> list, ...String args)
```

