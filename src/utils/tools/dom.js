/**
 * 防抖
 * @param fn 需要运行的函数
 * @param delay 等待时长
 * @returns {(function(): void)|*}
 */
const debounce = (fn, delay) => {
    let timer = null;
    return function () {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(fn, delay);
    };
};

/**
 * 节流
 * @param fn 需要运行的函数
 * @param delay 等待时长
 * @returns {(function(*): void)|*}
 */
const throttle = (fn, delay) => {
    let valid = true;
    return function () {
        if (!valid) {
            return false;
        }
        valid = false;
        setTimeout(() => {
            fn();
            valid = true;
        }, delay);
    };
};
/**
 * 胖段文件是否存在
 * @param url
 * @param successCallBack 成功回调
 * @param failCallBack 失败回调
 * @returns {Promise<unknown>}
 */
const imageIsExist = (url, successCallBack, failCallBack) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = url;
        image.onload = function () {
            resolve(successCallBack ? successCallBack() : image);
        };
        image.onerror = function () {
            reject(failCallBack ? failCallBack() : image);
        };
    });
}
export {
    debounce,
    throttle,
    imageIsExist
};
