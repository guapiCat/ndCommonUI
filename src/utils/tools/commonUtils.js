/**
 * 判断是否是数组
 * @param list
 * @returns {boolean}
 */
const isArray = (list) => {
    return Array.isArray(list) ? true : false
}
/**
 * 判断是否为null
 * @param data
 * @returns {boolean}
 */
const isNull = (data) => {
    return data === null;
}
/**
 * 判断是否是缓冲字节数组
 * @param buffer
 * @returns {boolean}
 */
const isArrayBuffer = (buffer) => {
    return buffer && buffer.byteLength
}

/**
 * 返回变量类型
 * @param {*} type 
 * @returns {string} 常见类型包括：Number，Boolean，Array，Object，Null，Date，String，Undefined，Function
 */
const returnType = (type) => {
    let res = Object.prototype.toString.call(type).split(' ')[1];
    res = res.substring(0, res.length - 1);
    return res;
}

export {
    isArray,
    isNull,
    isArrayBuffer,
    returnType,
}
