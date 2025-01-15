import { isArray } from './commonUtils';
/**
 * 数组提取数据，根据分隔符拼接，转化为字符串
 * @param list 待处理数据
 * @param name 剥离字段
 * @param separator 连接符
 * @returns {string|*}
 */
const joinArrayToString = (list, name, separator = ',') => {
    if (!isArray(list)) {
        return '';
    }
    let tempName = list.map(item => name ? item[name] : item)
    return tempName.join(separator)
}

/**
 * list集合去重
 * @param list 待去重的list
 * @param args 多个字段，插件会采用join('')拼接，当做去重的判断条件。
 * @returns {*[]}
 */
const reduceRepeatList = (list, ...args) => {
    let finalList;
    if (!isArray(list)) {
        finalList = [];
        return finalList.concat([])
    }
    let map = new Map();
    finalList = list.reduce((previousValue, currentValue) => {
        let keys = [];
        args.forEach(item => {
            keys.push(currentValue[item])
        })
        if (!map.get(keys.join(''))) {
            map.set(keys.join(''), currentValue)
            previousValue.push(currentValue);
        }
        return previousValue;
    }, [])
    return finalList;
}
export {
    joinArrayToString,
    reduceRepeatList,
}
