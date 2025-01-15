import axios from 'axios';

// 设置请求头和时间
const service = axios.create({
    timeout: 1800000,
    baseURL: "http://10.122.92.50:7003",
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        "X-Requested-With": "XMLHttpRequest",
    },
});


var HttpRequest = {};

// 处理get请求JWToken失效
HttpRequest.get = function (url, params, reTry) {
    // 处理get请求参数
    var pro = service.get(url, {
        params: params
    }).catch(function (error) {
        console.log(url + " error:", error);
    });
    // 重新请求后返回结果
    if (reTry) {
        return pro;
    }
    // JWToken失效,保存请求状态
    var pro0 = new Promise(function (resolve, reject) {
        pro.then(function (res) {
            if (res && res.data.status.code == -14018) {//JWToken失效
                var req = {
                    jwToken: localStorage.getItem('jwtT')
                }
                HttpRequest.post("/api/User/UpdateUserJWToken", req).then(function (res2) { // 获取新的JWToken
                    if (res2.data.status.code == 1) {
                        localStorage.setItem("jwtT", res2.data.data.jwtToken); // 赋值
                        HttpRequest.get(url, params, true).then(function (res3) {  // 再次请求JWToken失效的接口
                            resolve(res3);
                        });
                    }else{
                        location.reload()
                    }
                }).catch(function (err) {
                    resolve();
                });
            }else if (res && res.data.status.code == -101) {
                location.reload()
            } else {
                resolve(res);
            }
        })
    })
    return pro0;

};

// 处理post请求JWToken失效
HttpRequest.post = function (url, params, config, reTry) {
    try {
        var pro = service.post(url, params, config).catch(function (error) {
            console.log(url + " error:", error);
        });
        // 过滤更新JWToken接口和获取JWToken接口
        if (reTry || url == "/api/User/UpdateUserJWToken" || url == "/api/User/GetUserJWToken") {
            return pro;
        }
        // JWToken失效,保存请求状态
        var pro0 = new Promise(function (resolve, reject) {
            pro.then(function (res) {
                if (res && res.data.status.code == -14018) {//JWToken失效
                    var req = {
                        jwToken: localStorage.getItem('jwtT')
                    }
                    HttpRequest.post("/api/User/UpdateUserJWToken", req).then(function (res2) { // 获取新的JWToken
                        if (res2.data.status.code == 1) {
                            localStorage.setItem("jwtT", res2.data.data.jwtToken); // 赋值
                            HttpRequest.post(url, params, config, true).then(function (res3) { // 再次请求JWToken失效的接口
                                resolve(res3);
                            });
                        }else{
                            location.reload()
                        }
                    }).catch(function (err) {
                        resolve();
                    });
                }else if (res && res.data.status.code == -101) {
                    location.reload()
                } else {
                    resolve(res);
                }
            })
        })
        return pro0;

    } catch (error) {
        console.log("HttpRequest.post:", error);
    }

};


//http request 拦截器
let request = function (config) { 
    if (!config.headers.token) {
        if (localStorage.getItem('jwtT')) {
            config.headers.token = localStorage.getItem('jwtT');
        }else{
            delete config.headers.token
        }
    }
    return config;
};
// request 错误
let request_err = function (err) {
    return Promise.reject(err);
};

// http response 拦截器
let response = function (res) {
    if (res.status === 200) {
        return res;
    } else {
        return res;
    }
};
// response 错误
let response_err = function (err) {
    return Promise.reject(err);
};

service.interceptors.request.use(request, request_err);
service.interceptors.response.use(response, response_err);


export default HttpRequest

