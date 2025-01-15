import axios from 'axios'

const instance = axios.create(
  {
    timeout: 5000
  }
)
instance.interceptors.request.use(request => {
  return request
})
instance.interceptors.response.use(response => {
  return response.data
}, error => {
  return error
})
/**
 * post请求
 * @param url
 * @param data
 * @returns {Promise<unknown>}
 */
const post = (url, data, headers = {}) => {
  return new Promise((resolve, reject) => {
    instance.request({
      headers,
      url,
      data,
      method: 'post'
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}
/**
 * get请求
 *
 * @param url
 * @param params
 * @returns {Promise<unknown>}
 */
const get = (url, params, headers = {}) => {
  return new Promise((resolve, reject) => {
    instance.request({
      url,
      params,
      headers,
      method: 'get'
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

const downloadinstance = axios.create({})
// 请求拦截器
downloadinstance.interceptors.request.use(config => {
  // console.log('config Url--', config.url);
  return config
}, error => {
  return error
})
/**
 * get方式下载文件
 *
 * @param url
 * @param params
 * @returns {Promise<unknown>}
 */
const getDownLoadFile = (url, params) => {
  return new Promise((resolve, reject) => {
    downloadinstance // 没有timeout
      .request({
        url,
        params,
        method: 'get',
        responseType: 'arraybuffer'
      })
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}
export { post, get, getDownLoadFile }
