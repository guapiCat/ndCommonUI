
/**
 * encodeURIComponent加密
 * @param {*} str 
 * @returns {String}
 */
const encodeURIC = (str) => {
  try {
    return encodeURIComponent(str || '')
  } catch (error) {
    return '';
  }
}

/**
 * decodeURIComponent解密
 * @param {*} text 
 * @returns {String}
 */
const decodeURIC = (text) => {
  try {
    let txt = decodeURIComponent(text || '');
    return txt;
  } catch (error) {
    let txt = text;
    const decodeArr = [{ code: '%25', encode: '%' }, { code: '%3F', encode: '?' }, { code: '%23', encode: '#' }, { code: '%26', encode: '&' }, { code: '%3D', encode: '=' }];
    txt = txt.replace(/%25|%3F|%23|%26|%3D/g, ($, index, str) => {
      for (const k of decodeArr) {
        if (k.code === $) {
          return k.encode;
        }
      }
    });
    const encodeArr = [{ code: '%', encode: '%25' }, { code: '?', encode: '%3F' }, { code: '#', encode: '%23' }, { code: '&', encode: '%26' }, { code: '=', encode: '%3D' }];
    txt = txt.replace(/[%?#&=]/g, ($, index, str) => {
      for (const k of encodeArr) {
        if (k.code === $) {
          return k.encode;
        }
      }
    });
    return decodeURIComponent(txt || '')
  }
}

export {
  encodeURIC,
  decodeURIC,
}