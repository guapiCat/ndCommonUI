/**
 * 转换url参数成对象
 * @param url
 * @returns {{}}
 */
const parseUrlParamsToObject = (url) => {
    let {searchParams, hash} = new URL(url);
    // 最终对象
    let finalObject = {};
    // 校验是否是hash模式
    if (!hash) {
        let urlSearchParams = new URLSearchParams(searchParams);
        for (let item of urlSearchParams.keys()) {
            finalObject[item] = urlSearchParams.get(item);
        }
    } else {
        let urlSearchParams = new URLSearchParams(hash);
        for (let item of urlSearchParams.keys()) {
            if (item.includes('?')) {
                finalObject[item.split('?')[1]] = urlSearchParams.get(item);
            } else if (!item.includes('#')) {
                finalObject[item] = urlSearchParams.get(item);
            }
        }
    }
    return finalObject;
}
/**
 * 把对象拼接到url中，解析出完整的url字符串。PS：如果url中的参属性在待拼接对象中，拼接对象的属性会替换掉url属性
 * @param url 待拼接url字符串
 * @param obj 待拼接参数对象
 * @returns {`${string}${string}${string}?${string}`}
 */
const joinObjectToUrl = (url, obj) => {
    let {hash, origin, pathname} = new URL(url);
    // 获取url参数对象
    let tempObject = parseUrlParamsToObject(url);
    let finalObject = {}
    Object.assign(finalObject, tempObject, obj)
    let finalParamsList = []
    Object.keys(finalObject).forEach((item, index) => {
        finalParamsList.push(`${item}=${finalObject[item]}`);
    })
    let finalUrl = ''
    if (!hash) {
        finalUrl = `${origin}${pathname}${finalParamsList.length ? '?' : ''}${finalParamsList.join('&')}`;
    } else {
        finalUrl = `${origin}${pathname}${hash.split('?')[0]}${finalParamsList.length ? '?' : ''}${finalParamsList.join('&')}`;
    }
    return finalUrl;
}
export {
    parseUrlParamsToObject,
    joinObjectToUrl
}
