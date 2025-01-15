/**
 * 获取cookie
 * @param name String 属性名
 * @returns {string}
 */
const getCookie = name => {
  name = `${encodeURIComponent(name)}`;
  const cookies = document.cookie.split('; ')
  for (const item of cookies) {
    const [cookieName, cookieValue] = item.split('=')
    if (name === cookieName) { return decodeURIComponent(cookieValue) }
  }
  return '';
}

/**
 * 设置cookie
 * @param name String 属性名
 * @param value String 属性值
 * @param obj Object ：maxAge-过期时间(s)，domain，path，secure
 */
const setCookie = (name, value, { maxAge, domain, path, secure } = {}) => {
  let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
  if (typeof maxAge === 'number') cookieText += `;max-age=${maxAge}`;
  if (domain) cookieText += `;domain=${domain}`;
  if (path) cookieText += `;path=${path}`;
  if (secure) cookieText += `;secure`;
  document.cookie = cookieText;
};

/**
 * 删除cookie
 * @param name String
 * @param obj Object domain，path
 */

const deleteCookie = (name, { domain, path } = {}) => {
  setCookie(name, '', { domain, path, maxAge: -1 })
}

export {
  getCookie,
  setCookie,
  deleteCookie
}