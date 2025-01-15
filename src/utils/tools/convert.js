import { isNull } from './commonUtils';
/**
 * 对象转化为formData
 * @param object 待转换对象
 * @returns {FormData}
 */
const convertObjectToFormData = (object) => {
    let formData = new FormData();
    if (isNull(object)) {
        return formData;
    }
    Object.keys(object).forEach(item => {
        formData.append(item, object[item]);
    })
    console.log(formData);
    return formData;
}
/**
 * KB转换单位
 * @param kb KB
 * @returns {string|number}
 */
const convertBytes = (kb) => {
    if (isNull(kb)) {
        return 0;
    }
    if (kb >= 1073741824) {
        kb = (kb / 1073741824).toFixed(2) + ' TB';
    } else if (kb >= 1048576) {
        kb = (kb / 1048576).toFixed(2) + ' GB';
    } else if (kb >= 1024) {
        kb = (kb / 1024).toFixed(2) + ' MB';
    } else if (kb > 1) {
        kb = kb + ' KB';
    } else if (kb == 1) {
        kb = kb + ' KB';
    } else {
        kb = '0';
    }
    return kb;
};

export {
    convertObjectToFormData,
    convertBytes
}
