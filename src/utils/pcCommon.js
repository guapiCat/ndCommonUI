/**
 * 通用js方法封装处理
 */

// 获取需要等待的时间
export function getWaitSencondNumber(curSize, openFileSizeTimeScope) {
    // debugger;
    var timeM = getWaittime(curSize, openFileSizeTimeScope);
    var timeS = parseFloat(timeM) * 60;
    var num = (1 / timeS) * 70; //
    return num;
}

window.getWaittime = getWaittime;
export function getWaittime(curSize, openFileSizeTimeScope) {
    //debugger;
    var waitTime = "";
    var scopeStr = openFileSizeTimeScope ? openFileSizeTimeScope : '[{\"fileSize\":\"10\",\"waitTime\":\"0.5\"},{\"fileSize\":\"20\",\"waitTime\":\"1\"},{\"fileSize\":\"30\",\"waitTime\":\"2\"},{\"fileSize\":\"40\",\"waitTime\":\"3\"},{\"fileSize\":\"50\",\"waitTime\":\"4\"},{\"fileSize\":\"60\",\"waitTime\":\"5\"},{\"fileSize\":\"70\",\"waitTime\":\"6\"},{\"fileSize\":\"80\",\"waitTime\":\"7\"},{\"fileSize\":\"90\",\"waitTime\":\"8\"},{\"fileSize\":\"100\",\"waitTime\":\"9\"},{\"fileSize\":\"110\",\"waitTime\":\"10\"},{\"fileSize\":\"120\",\"waitTime\":\"11\"},{\"fileSize\":\"200\",\"waitTime\":\"19\"}]';
    var scope = JSON.parse(scopeStr);
    var fileSize0 = parseInt(scope[0].fileSize) * 1024 * 1024; //B
    if (curSize <= fileSize0) {
        waitTime = scope[0].waitTime;
        return waitTime;
    }
    var fileSize_end = parseInt(scope[scope.length - 1].fileSize) * 1024 * 1024;
    if (curSize > fileSize_end) {
        waitTime = scope[scope.length - 1].waitTime;
        return waitTime;
    }
    for (let i = 0; i < scope.length - 1; i++) {

        var obj = scope[i];
        var obj1 = scope[i + 1];

        var fs = parseInt(obj.fileSize) * 1024 * 1024;
        var fs1 = parseInt(obj1.fileSize) * 1024 * 1024;

        if (curSize > fs && curSize <= fs1) {
            if (obj1.waitTime.indexOf('-') > 0) {
                waitTime = parseFloat(obj1.waitTime.split('-')[1]);
            } else {
                var wt = parseFloat(obj1.waitTime);
                waitTime = wt;
            }

            break;
        }
    }
    return waitTime;
}



// 截流
export function debounce(fn, wait) {
    var timeout = null;      //定义一个定时器
    return function () {
        if (timeout !== null) {
            clearTimeout(timeout);  //清除这个定时器
            timeout = null
        }
        timeout = setTimeout(fn, wait);
    }
}
// 防抖
export function throttle(func, delay) {
    var timer = null;
    return function () {
        var context = this;
        var args = arguments;
        if (!timer) {
            timer = setTimeout(function () {
                func.apply(context, args);
                timer = null;
            }, delay);
        }
    }
}

export function getLocalStorage(key) {
    return localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key))
        : {}
}

export function getTsTime(size) {
    let ts = 0
    let mSize = parseFloat((size).toFixed(2))
    if (mSize <= 1.5) {
        ts = 30
    } else if (mSize > 1.5 && mSize < 10) {
        ts = mSize * 13
    } else {
        ts = mSize * 6
    }
    return ts
}

// 获取字节长度
export function GetStrLength(str) {
    // 获得字符串实际长度，中文1，英文1
    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;
        else realLength += 1;
    }
    return realLength;
};

// base64转file
export function dataURLtoBlob(dataurl, name) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], name, {
        type: mime,
    })
};

// url转file
export function dataURLtoFile(arr1, name) {
    //调用
    // var arr = dataurl.split(','),
    //   mime = arr[0].match(/:(.*?);/)[1],
    //   bstr = atob(arr[1]),
    var bstr = atob(arr1),
        n = bstr.length,
        u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], name)
}


// url转file
export function dataURLtoFile_array(arrList, name) {
    try {
        var bstr_list = [];
        var n = 0;
        for (let i = 0; i < arrList.length; i++) {
            var arr1 = arrList[i];
            var bstr = atob(arr1);
            bstr_list = bstr_list.concat(bstr);
            n += bstr.length;
        }
        var startIndex = 0;
        var endIndex = 0;
        var u8arr = new Uint8Array(n)
        for (let i = 0; i < bstr_list.length; i++) {
            var curLength = bstr_list[i].length;
            endIndex = startIndex + curLength;
            for (let j = startIndex; j < endIndex; j++) {
                var ccAt = j - startIndex;
                u8arr[j] = bstr_list[i].charCodeAt(ccAt)
            }
            startIndex += curLength;
        }
        return new File([u8arr], name);
    } catch (error) {
        console.log("dataURLtoFile_array:", dataURLtoFile_array);
    }

}


//判断图片是否存在
export function checkImgExists(imgurl) {
    var ImgObj = new Image(); //判断图片是否存在
    ImgObj.src = imgurl;
    //存在图片
    if (ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {
        return true;
    } else {
        return false;
    }
}

// 更新地址
export function updateUrl(url, key) {
    var key = (key || 't') + '=';  //默认是"t"
    var reg = new RegExp(key + '\\d+');  //正则：t=1472286066028
    var timestamp = +new Date();
    if (url.indexOf(key) > -1) { //有时间戳，直接更新
        return url.replace(reg, key + timestamp);
    } else {  //没有时间戳，加上时间戳
        if (url.indexOf('\?') > -1) {
            var urlArr = url.split('\?');
            if (urlArr[1]) {
                return urlArr[0] + '?' + key + timestamp + '&' + urlArr[1];
            } else {
                return urlArr[0] + '?' + key + timestamp;
            }
        } else {
            if (url.indexOf('#') > -1) {
                return url.split('#')[0] + '?' + key + timestamp + location.hash;
            } else {
                return url + '?' + key + timestamp;
            }
        }
    }
}


// 日期格式化
export function parseTime(time, pattern) {
    if (arguments.length === 0 || !time) {
        return null
    }
    const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
            time = parseInt(time)
        } else if (typeof time === 'string') {
            time = time.replace(new RegExp(/-/gm), '/').replace('T', ' ').replace(new RegExp(/\.[\d]{3}/gm), '');
        }
        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000
        }
        date = new Date(time)
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value || 0
    })
    return time_str
}

/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 */
export function handleTree(data, id, parentId, children) {
    let config = {
        id: id || 'id',
        parentId: parentId || 'parentId',
        childrenList: children || 'children'
    };

    var childrenListMap = {};
    var nodeIds = {};
    var tree = [];

    for (let d of data) {
        let parentId = d[config.parentId];
        if (childrenListMap[parentId] == null) {
            childrenListMap[parentId] = [];
        }
        nodeIds[d[config.id]] = d;
        childrenListMap[parentId].push(d);
    }

    for (let d of data) {
        let parentId = d[config.parentId];
        if (nodeIds[parentId] == null) {
            tree.push(d);
        }
    }

    for (let t of tree) {
        adaptToChildrenList(t);
    }

    function adaptToChildrenList(o) {
        if (childrenListMap[o[config.id]] !== null) {
            o[config.childrenList] = childrenListMap[o[config.id]];
        }
        if (o[config.childrenList]) {
            for (let c of o[config.childrenList]) {
                adaptToChildrenList(c);
            }
        }
    }
    return tree;
}

// 验证是否为blob格式
export async function blobValidate(data) {
    try {
        const text = await data.text();
        JSON.parse(text);
        return false;
    } catch (error) {
        return true;
    }
}

/**
 * 获取文件后缀名
 * @param {String} filename
 */
export function getExt(filename) {
    if (typeof filename == 'string') {
        // 如果文件没有后缀名，返回null
        if (!filename.includes('.')) { return null }
        return filename
            .split('.')
            .pop()
            .toLowerCase()
    } else {
        throw new Error('filename must be a string type')
    }
}

/**
 * 复制内容到剪贴板 (成功返回true,失败返回false)
 * @param {String} value
 */
export function copyToBoard(value) {
    const element = document.createElement('textarea')
    document.body.appendChild(element)
    element.value = value
    element.select()
    if (document.execCommand('copy')) {
        document.execCommand('copy')
        document.body.removeChild(element)
        return true
    }
    document.body.removeChild(element)
    return false
}

/**
 * 生成随机id
 * @param {*} length
 * @param {*} chars
 */
export function uuid(length = 8, chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
    let result = ''
    for (let i = length; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)]
    return result
}

/**
 *简单的深拷贝
 * @export
 * @param {*} obj
 * @returns
 */
export function deepCopy(obj) {
    if (typeof obj != 'object') {
        return obj
    }
    if (obj == null) {
        return obj
    }
    return JSON.parse(JSON.stringify(obj))
}

/**
 * 对象转化为formdata
 * @param {Object} object
 */

export function getFormData(object) {
    const formData = new FormData()
    Object.keys(object).forEach(key => {
        const value = object[key]
        if (Array.isArray(value)) {
            value.forEach((subValue, i) =>
                formData.append(key + `[${i}]`, subValue)
            )
        } else {
            formData.append(key, object[key])
        }
    })
    return formData
}

/**
 * 获取最后一个?的参数并转化为对象
 * @param {String} url
 */
export function lastUrlobj(url) {
    // url = url || window.location.href;
    let index = url.lastIndexOf("?");
    url = url.substring(index + 1, url.length);
    let obj = {};
    if (url) {
        let arr = url.split("&");
        //遍历数组
        for (let i = 0; i < arr.length; i++) {
            // obj对象的属性名 = 属性值， unescape为解码字符串
            obj[arr[i].split("=")[0]] = unescape(arr[i].split("=")[1]);
        }
        return obj
    } else {
        return obj
    }
}



/**
 * escape函数用于对除英文字母外的字符进行编码
 * @param {String} s1
 */
export function EncodeUtf8(s1) {
    function Str2Hex(s) {
        var c = "";
        var n;
        var ss = "0123456789ABCDEF";
        var digS = "";
        for (var i = 0; i < s.length; i++) {
            c = s.charAt(i);
            n = ss.indexOf(c);
            digS += Dec2Dig(eval(n));

        }
        return digS;
    }
    function Dec2Dig(n1) {
        var s = "";
        var n2 = 0;
        for (var i = 0; i < 4; i++) {
            n2 = Math.pow(2, 3 - i);
            if (n1 >= n2) {
                s += '1';
                n1 = n1 - n2;
            } else
                s += '0';
        }
        return s;

    }
    function Dig2Dec(s) {
        var retV = 0;
        if (s.length == 4) {
            for (var i = 0; i < 4; i++) {
                retV += eval(s.charAt(i)) * Math.pow(2, 3 - i);
            }
            return retV;
        }
        return -1;
    }
    function Hex2Utf8(s) {
        var retS = "";
        var tempS = "";
        var ss = "";
        if (s.length == 16) {
            tempS = "1110" + s.substring(0, 4);
            tempS += "10" + s.substring(4, 10);
            tempS += "10" + s.substring(10, 16);
            var sss = "0123456789ABCDEF";
            for (var i = 0; i < 3; i++) {
                retS += "%";
                ss = tempS.substring(i * 8, (eval(i) + 1) * 8);

                retS += sss.charAt(Dig2Dec(ss.substring(0, 4)));
                retS += sss.charAt(Dig2Dec(ss.substring(4, 8)));
            }
            return retS;
        }
        return "";
    }
    var s = escape(s1);
    var sa = s.split("%"); //sa[1]=u6211
    var retV = "";
    if (sa[0] != "") {
        retV = sa[0];
    }
    for (var i = 1; i < sa.length; i++) {
        if (sa[i].substring(0, 1) == "u") {
            retV += Hex2Utf8(Str2Hex(sa[i].substring(1, 5)));
            if (sa[i].length >= 6) {
                retV += sa[i].substring(5);
            }
        } else
            retV += "%" + sa[i];
    }
    return retV;
}


/**
 * @desc 深拷贝，支持常见类型
 * @param {Any} values
 */
export function deepClone(values) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == values || "object" != typeof values) return values;

    // Handle Date
    if (values instanceof Date) {
        copy = new Date();
        copy.setTime(values.getTime());
        return copy;
    }

    // Handle Array
    if (values instanceof Array) {
        copy = [];
        for (var i = 0, len = values.length; i < len; i++) {
            copy[i] = deepClone(values[i]);
        }
        return copy;
    }

    // Handle Object
    if (values instanceof Object) {
        copy = {};
        for (var attr in values) {
            if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy values! Its type isn't supported.");
}


/**
 * 
 * @desc   判断`obj`是否为空
 * @param  {Object} obj
 * @return {Boolean}
 */
export function isEmptyObject(obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj))
        return false
    return !Object.keys(obj).length
}


/**
 * 
 * @desc   判断是否为邮箱地址
 * @param  {String}  str
 * @return {Boolean} 
 */
export function isEmail(str) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}

/**
 * 
 * @desc  判断是否为身份证号
 * @param  {String|Number} str 
 * @return {Boolean}
 */
export function isIdCard(str) {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
}

/**
 * 
 * @desc   判断是否为手机号
 * @param  {String|Number} str 
 * @return {Boolean} 
 */
export function isPhoneNum(str) {
    return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str)
}

/**
 * 
 * @desc   判断是否为URL地址
 * @param  {String} str 
 * @return {Boolean}
 */
export function isUrl(str) {
    return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
}


export function autoFileSize(size) {
    return size < 1024 * 1024
        ? (size / 1024).toFixed(0) + " K"
        : (size < 1024 * 1024 * 1024 ? (size / (1024 * 1024)).toFixed(2) + " M" : (size / (1024 * 1024 * 1024)).toFixed(2) + " G")
}

export function uploadMsglist() {
    return [
        "当前上传文件夹内无装配体文件", // 0
        "当前格式暂不支持", // 1
        "当前所选文件数据为空。若您选择的是装配体文件，需确保该装配体与其所有关联零部件在同一根目录下", // 2
        "抱歉，当前仅支持打开单个文件、文件夹", // 3
        "文件名超长，建议1~70个字符，请修改后重试", // 4
        "上传文件大小超过2G", // 5
        "该文件夹中包含不支持上传的文件，请重新选择", // 6
        "抱歉,文件打开失败", // 7
        "抱歉，服务开小差了，请稍后再试。", //8
        "当前文件为空文件", //9
        "当前不支持打开压缩包，请解压后上传", //10
        "您的文件可能因加密等因素，暂时无法打开查看" //11
    ];

}

//  app错误信息集合
export function getAppErrorMsg(status) {
    var errorMsg = "";
    status = Number(status);
    switch (status) {
        case 1:
            errorMsg = ''; //正常
            break;
        case -1:
            errorMsg = '当前格式暂不支持 ';
            break;
        case -2:
            errorMsg = '上传文件大小超过2G'; //https://www.tuzhitong.com。';
            break;
        case -3:
            errorMsg = '当前文件为空文件';
            break;
        case -4:
            errorMsg = '您的文件可能因加密等因素，暂时无法打开查看 ';
            break;
        case -5:
            errorMsg = '预览失败，装配体需要把总装及引用的子装、零件压缩成zip或rar方式查看 ';
            break;
        case -6:
            errorMsg = '当前格式暂不支持 ';
            break;
        case -7:
            errorMsg = '打开失败，压缩包内没有支持预览格式的文件';
            break;
        // case -8:
        //     errorMsg = '您所选择的压缩包中存在不支持的文件格式，请删除压缩包中以下格式文件：' + vm.blackExt;
        //     break;
        // case -9:
        //     errorMsg = "您打开的压缩包内存在部分格式文件暂不支持查看，我们将会不显示这些文件，请确认是否继续？";
        //     break;
        // case -10:
        //     errorMsg = "请前往系统设置授予图纸通应用存储权限，然后重试。";
        //     break;
        default:
            errorMsg = '打开失败' // status 不为1且没有对应值则返回打开失败
            break;
    }
    return errorMsg;

}
// 判断是否为主装类型文件
export function isAssemblyType(ex_assembly, fname, type) {
    //".prt.xxx"不是主装配体类型
    var isass = isTheType(ex_assembly, fname.toLowerCase());
    if (isass) {
        var index = fname.toLowerCase().indexOf(".prt");
        if (index > 0) {
            var ex = fname.trim().substr(index + 4);
            if (ex.length > 0) {
                isass = false;
            }
            if (type == 1) {
                isass = false
            }
        }
    }
    return isass;
}

// 判断是否为黑名单文件类型
export function isblackExtType(exStr, fileName) {
    var exList = exStr.split(',');
    let isBlack = false
    let ext = reversed(fileName)
    exList.forEach(m => {
        if (m == ext)
            isBlack = true
    })
    return isBlack
}

export function isTheType(exStr, fileName) {
    var exList = exStr.split(',');
    let suffix = reversed(fileName);
    for (var i = 0; i < exList.length; i++) {
        var type0 = exList[i].toLowerCase();
        var type1 = '.' + exList[i].toLowerCase();
        if ((type0 != "" && type1 != "") && (suffix == type0 || suffix == type1)) {
            return true;
        }
    }
    return false;
}
// 取文件后缀
export function reversed(value) {
    // 文件后缀
    let arr = value.split(".");
    if (arr.length == 1) {
        return 'NoSuffixes';
    }
    let arrPop = arr.pop();
    if (isNaN(Number(arrPop, 10))) {
        let ext = "." + arrPop.toLowerCase()
        return ext;
    } else {
        let ext = "." + arr.pop().toLowerCase() + "." + "*";
        return ext;
    }
}

// 设置文件类型图片地址
export function getTypeImgsrc(filename) {
    filename = filename.toLowerCase();
    let ext = reversed(filename);
    if (ext.indexOf(".prt") > -1) {
        return "/images/fileType/default.png";
    } else if (ext.indexOf(".asm.") > -1) {
        return "/images/fileType/proE.png"; // asm.png
    } else if (ext == ".session") {
        return "/images/fileType/catia.png";
    } else {
        return `/images/fileType/${ext.substring(1)}.png`;
    }
};

// 取文件后缀
export function ndreversed(value) {
    // 文件后缀
    let arr = value.split(".");
    if (arr.length == 1) {
        return 'NoSuffixes';
    }
    let arrPop = arr.pop();
    if (isNaN(Number(arrPop, 10))) {
        let ext = arrPop.toLowerCase()
        return ext;
    } else {
        let ext = arr.pop().toLowerCase() + "." + "*";
        return ext;
    }
}

export function isTheZip(fileName) {
    let ext = reversed(fileName)
    if (ext == '.zip' || ext == '.7z' || ext == '.rar') {
        return true
    } else {
        return false
    }
}

export function funC1(arr, obj, name) {
    let ext = obj[name]
    let index = arr.findIndex(item => item[name] === ext)
    if (index==-1) {
        return true
    } else {
        return false
    }
}

export function getTransSize (fileSize) {
    let arr = fileSize.split("");
    let type = arr[arr.length - 1];
    arr.length = arr.length - 1;
    let realSize = parseFloat(arr.join(""))
    if (type == "K") realSize = parseFloat(arr.join("")) * 1024;
  
    if (type == "M") realSize = parseFloat(arr.join("")) * 1024 * 1024;
  
    if (type == "G") realSize = parseFloat(arr.join("")) * 1024 * 1024 * 1024;
    return realSize;
  };
