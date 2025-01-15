### cookie操作（cookie）

<testCookie></testCookie>

```
/**
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
```



### 数组转化为树形（convertArrayToTree）

```
/**
 * 数组转化为树形结构
 * @param list 集合
 * @param id 唯一id
 * @param pid 关联id
 * @returns {*[]}
 */
List<Object> convertArrayToTree(list<Object>, String id = 'id', String pid = 'pid')
```

### 反向查找节点数据（findPathById）

```
/**
 * 反向查找节点路径
 * @param tree 树形结构
 * @param path 开始路径（数组形式）
 * @param callBack 回调函数，插件会传递一个当前节点数据，并且调用函数。需要写一个函数返回true false
 * @returns {*[]|*}
 */
List<Object> findPathById (List<Object> tree,String[] path,Function<T> callBack)
```

### 搜索树形（filterList）

```
/**
 * 根据条件搜索树形结构相关联属性,组成数组，主要用于搜索树形结构数据，或者删除某些不需要的数组元素等，用处很多。
 * @param list 待处理数据
 * @param callback 回调函数，工具包主动调用，并且传递每个list中的对象，业务端需要根据item判断返回true false。
 * @returns {*[]}
 */
List<Object> const filterList = (List<Object> list, Function<T> callback)
```

### 递归操作list集合每个节点数据

```
/**
 * 自定义操作树形结构，用于处理树形结构每个参数
 * @param list 待处理数据
 * @param callback 回调函数，工具包主动调用，并且传递每个list中的对象，业务端自己处理逻辑。
 */
List<Object> const operateTree = (List<Object> list,Function<T> callback)
```

### 文本高亮

```
/**
 * 文本高亮
 * @param text 待选择的文本
 * @param keyword 关键词
 * @param tagName 替换需要的标签名
 * @param className css class类名
 * @returns {string}
 */
String highText (String text = '', String keyword,String tagName, String className)
```

### 防抖

```
/**
 * 防抖
 * @param fn 需要运行的函数
 * @param delay 等待时长
 * @returns {(function(): void)|*}
 */
void debounce(Function<T> fn,Long delay)
```

### 节流

```
/**
 * 节流
 * @param fn 需要运行的函数
 * @param delay 等待时长
 * @returns {(function(*): void)|*}
 */
void throttle(Function<T> fn,Long delay)
```

### eventBus事件监听与推送

```js
// 自定义简易可扩展eventbus，根据map特性，不允许有多个相同的key
class EventBus {
    void constructor()

    /**
     * 创建一个监听
     * @param eventBusName 名称
     * @param callback 回调
     */
    void on(String eventBusName, Function<T> callback)

    /**
     * 所有eventBus
     * @returns {*}
     */
   HashMap all()

    /**
     * 发送eventBus
     * @param eventBusName 名称
     * @param args 省略参数
     */
    void emit(String eventBusName, ...String args)

    /**
     * 移除一个eventBus
     * @param eventBusName 名称
     */
    void off(String eventBusName)
}
```

### 分片上传

``````
/**
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
 * @returns {Promise<void>}
 */
void sliceUpload({MultipartFile file,String getUploadIdUrl ,Object headers ,Int chunkSize ,Object getUploadIdParams ,Function getUploadIdErrorCallback ,String uploadUrl ,Object uploadParams ,Function uploadErrorCallback ,Function onProgress ,String mergeUploadUrl ,Object mergeUploadParams ,Function mergeUploadErrorCallback ,Function uploadSuccessCallback })
``````

