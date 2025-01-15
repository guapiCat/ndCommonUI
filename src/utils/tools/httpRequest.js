import { joinObjectToUrl } from './parse';

/**
 * get请求
 * @param url 路径
 * @param headers 请求头
 * @param params query参数
 * @returns {Promise<unknown>}
 */
const get = (url, headers = {}, params = {}) => {
    return new Promise((resolve, reject) => {
        let XHR = new XMLHttpRequest();
        console.log(headers)
        XHR.responseType = 'json'
        XHR.open('GET', joinObjectToUrl(url, params), true);
        // 设置headers
        Object.keys(headers).forEach(item => {
            XHR.setRequestHeader(item, headers[item])
        })
        XHR.send();
        XHR.onreadystatechange = () => {
            console.log('http返回值--', XHR)
            if (XHR.readyState == 4) {
                if (XHR.status == 200) {
                    try {
                        let response = XHR.response;
                        resolve(response);
                    } catch (e) {
                        reject(e);
                    }
                } else {
                    reject(new Error(XHR.statusText));
                }
            }
        }
    })
}

/**
 * post请求
 * @param url url
 * @param headers 请求头
 * @param data json数据
 * @param params query参数
 * @returns {Promise<unknown>}
 */
const post = (url, headers = {}, data = {}, params = {}) => {
    console.log(data)
    return new Promise((resolve, reject) => {
        let XHR = new XMLHttpRequest();
        console.log(headers)
        XHR.open('POST', joinObjectToUrl(url, params), true);
        XHR.responseType = 'json'
        // 设置headers
        Object.keys(headers).forEach(item => {
            XHR.setRequestHeader(item, headers[item])
        })
        XHR.setRequestHeader('Content-Type', 'application/json')
        XHR.send(JSON.stringify(data))
        XHR.onreadystatechange = () => {
            if (XHR.readyState == 4) {
                if (XHR.status == 200) {
                    try {
                        let response = XHR.response;
                        resolve(response);
                    } catch (e) {
                        reject(e);
                    }
                } else {
                    reject(new Error(XHR.statusText));
                }
            }
        }
    })
}

/**
 * post上传
 * @param url url
 * @param headers 请求头
 * @param data 数据
 * @param params query参数
 * @param onProgress 进度条
 * @returns {Promise<unknown>}
 */
const postProgress = (url, headers = {}, data = {}, params = {}, onProgress) => {
    return new Promise((resolve, reject) => {
        let XHR = new XMLHttpRequest();
        console.log(headers)
        XHR.open('POST', joinObjectToUrl(url, params), true);
        XHR.responseType = 'json'
        // 设置headers
        Object.keys(headers).forEach(item => {
            XHR.setRequestHeader(item, headers[item])
        })
        XHR.onreadystatechange = () => {
            console.log('result-----', XHR)
            if (XHR.readyState == 4) {
                if (XHR.status == 200) {
                    try {
                        let response = XHR.response;
                        resolve(response);
                    } catch (e) {
                        reject(e);
                    }
                } else {
                    reject(new Error(XHR.statusText));
                }
            }
        }
        XHR.upload.onprogress = (e) => {
            if (onProgress instanceof Function) {
                onProgress(e)
            }
        }
        XHR.send(data)
    })
}

export {
    get,
    postProgress,
    post
}
