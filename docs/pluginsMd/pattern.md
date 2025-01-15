### 验证邮箱：

```
/**
 * 验证邮箱
 * @param str 待验证内容
 * @param emailPattern 正则表达式
 * @returns {boolean}
 */
Boolean verifyEmail(String str, Pattern emailPattern = email) 
```

### 验证QQ：

```
/**
 * 验证QQ
 * @param str 待验证内容
 * @param QQPattern 正则表达式
 * @returns {boolean}
 */
Boolean verifyQQ(String str, Pattern QQPattern = QQ)
```

### 验证手机号：

```
/**
 * 验证手机号
 * @param str 待验证内容
 * @param phonePattern 正则表达式
 * @returns {boolean}
 */
Boolean verifyPhone(String str, Pattern phonePattern = phone)
```

### 验证正整数：

```
/**
 * 验证正整数
 * @param str 待验证内容
 * @param positiveIntegerPattern 正则表达式
 * @returns {boolean}
 */
Boolean verifyPositiveInteger(String str, Pattern positiveIntegerPattern = positiveInteger)
```

### 验证身份证号：
```
/**
 * 验证身份证号 x结尾的不区分大小写
 * @param str 待验证内容
 * @param idNumberPattern 正则表达式
 * @returns {boolean}
 */
Boolean verifyIdNumber(String str, Pattern idNumberPattern = idNumber)
```
### 验证装配体：
```js
/**
 * 校验是否是装配体
 * @param str
 * @param assemblyPattern
 * @returns {boolean}
 */
Boolean verifyAssembly(String str, Pattern assemblyPattern = assembly)
```
### 验证CAD：
```js
/**
 * 校验是否是cad
 * @param str
 * @param cadPattern
 * @returns {boolean}
 */
Boolean verifyCAD(String str, Pattern cadPattern = CAD)
```
### 验证PDF:
```js
/**
 * 校验是否是pdf
 * @param str
 * @param pdfPattern
 * @returns {boolean}
 */
Boolean verifyPDF(String str, Pattern pdfPattern = PDF)
```