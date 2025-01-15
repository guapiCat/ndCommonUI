// 判断手机类型方法


// app手机回调方法
// 获取数据记录
window.GetDataSuc = function (key, value) {
	localStorage.setItem("fromapp", "1");
	localStorage.setItem("app", "1");
	console.log(`.GetDataSuc = function (${key}, ${value})`);
	window.GetDataCallBack && window.GetDataCallBack(key, value);

}
// 选择文件完成回调
window.selectComplete = function (fileID, md5, fileName, fileSize) {
	let zfileName = new myBase64().decode(fileName)
	window.selectCompleteCallBack && window.selectCompleteCallBack(fileID, md5, fileName, fileSize, zfileName);
}
// 取消选择文件回调(点击返回)
window.uploadFileFail = function (msg, name) {
	window.uploadFileCallBack && window.uploadFileCallBack(msg, name);
}
// 上传文件完成回调
window.uploadComplete = function (fileID, url, status, message) {
	let zurl = new myBase64().decode(url)
	window.uploadCompleteCallBack && window.uploadCompleteCallBack(fileID, url, status, message, zurl);
}
// 上传文件完成回调
window.UploadProcessCallBack = function (jsonData) {
	window.UploadProCallBack && window.UploadProCallBack(jsonData);
}
// 权限回调
window.checkUserAppRightSuc = function (type, res) {
	window.checkRightCallBack && window.checkRightCallBack(type, res);
}

// 过去推送权限
window.checkPushRightSuc = function (result) { //result 0 无权限 1有权限
	window.checkPushRightCallBack && window.checkPushRightCallBack(type, result);
}

//获取设备ID
window.setUDID = function (uuid) {
	localStorage.setItem("fromapp", 1);
	window.setUDIDCallBack && window.setUDIDCallBack(uuid);
}

// model json对象，包含以下字段
// fileID 文件ID
// md5 文件md5
// fileName文件名称 base64编码
// fileSize文件大小 单位kb
// fileList 压缩包内部文件列表
// [{
//         "id": 1,
//         "name": "box",
//         "dir": 0,
//         "size": "",
//         "time": "2022-04-19 10:36:03",
//         "child": [{
//                 "name": "box",
//         "dir": 0,
//         "size": "",
//         "time": "2022-04-19 10:36:03"
//             }
//         ]
//     }
// ]
// id:唯一标识（int）
// name:文件/文件夹名称
// size：文件大小，文件夹为空
// time：更新时间
// Child：文件中子节点数据
// 选择压缩包文件完成回调
window.selectCompleteZipRar = function (model) {
	window.selectCompleteZipRarCallBack && window.selectCompleteZipRarCallBack(model);
}

// 19.压缩包文件选择完成回调 selectSingleFile
// selectSingleFile(fileID,md5,fileName,fileSize,status)
// fileID 文件ID
// md5 文件md5
// fileName文件名称 base64编码
// fileSize文件大小 单位kb
// status 1解压正常 0解压失败

window.selectSingleFile = function (fileID, md5, fileName, fileSize, status) {
	let zfileName = new myBase64().decode(fileName)
	window.selectSingleFileCallBack && window.selectSingleFileCallBack(fileID, md5, fileName, fileSize, status, zfileName);
}

//（v5.3App新增字段fileID） getOtherAppFileName接口回调
// fileName文件名称
// status    1正常 -1文件类型不支持 -2文件超过最大限制 -3文件异常，比如文件为空 -4 压缩包解压失败或文件加密 -5 压缩包只有一个装配体文件 -6 压缩包格式不支持 -7 压缩包没有白名单文件
// fileSize文件大小kb
// md5 文件md5
// sourceURL  0为Android本地   其他字符串为手机端第三方数据来源地址   用于区分第三方来源
window.setUploadFileName = function (fileName, status, fileSize, md5, sourceURL, fileID) { //sourceURL  0为Android本地   其他字符串为手机端第三方数据来源地址   用于区分第三方来源
	let zfileName = new myBase64().decode(fileName)
	window.getOtherAppFileNameCallBack && window.getOtherAppFileNameCallBack(fileName, status, fileSize, md5, sourceURL, fileID, zfileName);
};

// window.checkOneloginEnableCallBack = function (state) {
//   if (state == 1) {
//     appSDK.ndLocalNumberLogin();
//   }
// }


//检查手机是否支持一键登录
window.checkVerifyEnableCallback = function (state) { //1:支持  0：不支持 //callAppMethod('checkVerifyEnable');//检查手机是否支持一键登录
	window.checkOneloginEnableCallBack && window.checkOneloginEnableCallBack(state);
}

window.AndroidPageBack = function () {
	var el = document.querySelector(".top-ico.back.active");
	if (el) {
		el.click();
	} else {
		el = document.querySelector(".back.active");
		if (el) {
			console.log("AndroidPageBack click()");
			el.click();
		}
	}

};

// //1、声明回调
// window.checkOneloginCallBack=function (token, status) {
// 	//通过token做登陆处理
// }
// //2、调用
// appSDK.ndLocalNumberLogin();
//LocalNumberLogin跳转到一键登录页面

// 本机号码一键登录回调LocalNumberLoginCallback
window.LocalNumberLoginCallback = function (token, status) {
	console.log("LocalNumberLoginCallback(token:" + token + " status:" + status);
	window.checkOneloginCallBack && window.checkOneloginCallBack(token, status);
}

//获取联系人
window.GetAllAddressSuc = function (res) {

	console.log(`.GetAllAddressSuc = function (${new myBase64().decode(res)}) `);
	window.getAllAddressSucCallBack && window.getAllAddressSucCallBack(res);
	// var resArr = [];
	// //防止数据返回转换问题
	// try {
	// 	resArr = JSON.parse(Base64.decode(res));
	// 	console.log("GetAllAddressSuc:", resArr);
	// } catch (e) {
	// 	if (res)
	// 		resArr = res;
	// }

}

function zGetPageWindow() {
	var u = navigator.userAgent,
		app = navigator.appVersion;
	console.log(u);
	var type = 0;
	if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
		type = 1;
	} else if (u.indexOf('iPhone') > -1) {
		type = 1;
	} else if (u.indexOf('iPad') > -1 || u.indexOf('Macintosh') > -1) {
		type = 1;
	} else if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
		type = 2;
	}
	return type;
}
function myBase64() {

	// private property
	var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

	// public method for encoding
	this.encode = function (input) {
		var output = "";
		var chr1,
			chr2,
			chr3,
			enc1,
			enc2,
			enc3,
			enc4;
		var i = 0;
		input = _utf8_encode(input);
		while (i < input.length) {
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;
			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}
			output = output +
				_keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
				_keyStr.charAt(enc3) + _keyStr.charAt(enc4);
		}
		return output;
	};

	// public method for decoding
	this.decode = function (input) {
		var output = "";
		var chr1,
			chr2,
			chr3;
		var enc1,
			enc2,
			enc3,
			enc4;
		var i = 0;
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		while (i < input.length) {
			enc1 = _keyStr.indexOf(input.charAt(i++));
			enc2 = _keyStr.indexOf(input.charAt(i++));
			enc3 = _keyStr.indexOf(input.charAt(i++));
			enc4 = _keyStr.indexOf(input.charAt(i++));
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
			output = output + String.fromCharCode(chr1);
			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}
		}
		output = _utf8_decode(output);
		return output;
	};

	// private method for UTF-8 encoding
	function _utf8_encode(string) {
		string = string.replace(/\r\n/g, "\n");
		var utftext = "";
		for (var n = 0; n < string.length; n++) {
			var c = string.charCodeAt(n);
			if (c < 128) {
				utftext += String.fromCharCode(c);
			} else if ((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			} else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}
		return utftext;
	};

	// private method for UTF-8 decoding
	function _utf8_decode(utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;
		while (i < utftext.length) {
			c = utftext.charCodeAt(i);
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			} else if ((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i + 1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			} else {
				c2 = utftext.charCodeAt(i + 1);
				c3 = utftext.charCodeAt(i + 2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
		}
		return string;
	};
}

/////////////////自定义回调


// 跨域传输
// window.addEventListener('message', function (item) {
// })

// let sdkJS = new appSdk({});
// 定义全局类
class appSdk {
	constructor(evt) {
		let zobj = evt || {};
		//-------------------
		///////////////////////////////类的静态属性
		this.facilityType = true; // 是否手机端(现在默认在手机)
		this.getPageWindow = zGetPageWindow(); // 判断手机类型
		this.dictionaries = { // 状态字典
			denyCode: -106 // 非手机调用状态码
		};
		this.zdomain = ""; // 预留的请求域地址
		//-------------------
		/////////////////////////////类的静态方法
		// js封装原生请求
		this.httpRequest = function (obj, successfun, errFun) {
			let xmlHttp = null;
			//创建 XMLHttpRequest 对象，老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象：xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")
			if (window.XMLHttpRequest) {
				//code for all new browsers
				xmlHttp = new XMLHttpRequest;
			} else if (window.ActiveXObject) {
				//code for IE5 and IE6
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			//判断是否支持请求
			if (xmlHttp == null) {
				alert("浏览器不支持xmlHttp");
				return;
			}
			//请求方式， 转换为大写
			let httpMethod = (obj.method || "Get").toUpperCase();
			//数据类型
			let httpDataType = obj.dataType || 'json';
			//url
			let httpUrl = obj.url || '';
			//异步请求
			let async = true;
			//post请求时参数处理
			let requestData = '';
			if (httpMethod == "POST") {
				//请求体中的参数 post请求参数格式为：param1=test&param2=test2
				let data = obj.data || {};
				requestData = data
			} else {
				let data = obj.data || {};
				for (let key in data) {
					requestData = requestData + key + "=" + data[key] + "&";
				}
				if (requestData == '') {
					requestData = '';
				} else {
					requestData = requestData.substring(0, requestData.length - 1);
				}
				httpUrl = `${httpUrl}?${requestData}`
			}
			//onreadystatechange 是一个事件句柄。它的值 (state_Change) 是一个函数的名称，当 XMLHttpRequest 对象的状态发生改变时，会触发此函数。状态从 0 (uninitialized) 到 4 (complete) 进行变化。仅在状态为 4 时，我们才执行代码
			xmlHttp.onreadystatechange = function () {
				//complete
				if (xmlHttp.readyState == 4) {
					if (xmlHttp.status == 200) {
						//请求成功执行的回调函数
						successfun(xmlHttp.responseText);
					} else {
						//请求失败的回调函数
						errFun;
					}
				}
			}
			//请求接口
			if (httpMethod == 'GET') {
				xmlHttp.open("GET", httpUrl, async); // 新建发送请求
				xmlHttp.setRequestHeader("Cache-Control", "no-cache"); //
				xmlHttp.send(null);
			} else if (httpMethod == "POST") {
				xmlHttp.open("POST", httpUrl, async); // 新建请求
				xmlHttp.setRequestHeader("Content-Type", "application/json;charset=utf-8"); // post请求头
				xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // post请求头
				xmlHttp.send(JSON.stringify(requestData)); // 发送请求
			}
		}
		// 调用例子:------
		// utf-8的转化    ios
		this.zEncodeUtf8 = function (s1) {
			// escape函数用于对除英文字母外的字符进行编码。如“Visit W3School!”->"Visit%20W3School%21"
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

	}
	// 判断是否在app中
	ndIsApp() {
		let pageWindow = this.getPageWindow;
		return new Promise((resolve, reject) => {
			try {
				let obj = {}
				obj.code = 1
				if (pageWindow == "1") {
					var strUrl = "objc://" + 'SetData/&' + EncodeUtf8(String('isApporPc')) + '/&' + EncodeUtf8(String(1));
					window.webkit.messageHandlers.currentCookies.postMessage(strUrl);
					localStorage.setItem('isApporPc', '1')
					resolve(obj)
				} else if (pageWindow == "2") {
					obj.code = 2
					window.AndroidJS.SetData('isApporPc', '2');
					localStorage.setItem('isApporPc', '2')
					resolve(obj)
				} else {
					obj.code = 4
					localStorage.setItem('isApporPc', '4')
					resolve(obj)
				}
			} catch (err) {
				let obj = {}
				obj.code = 3
				localStorage.setItem('isApporPc', '3')
				reject(obj)
			}
		})
	}
	// 设置数据记录
	ndSetData(obj) {
		let zobj = obj || {}
		let key = zobj.key || ''
		let value = zobj.value || ''
		if (this.facilityType) {
			if (this.getPageWindow == "1") {
				var strUrl = "objc://" + 'SetData/&' + this.zEncodeUtf8(String(key)) + '/&' + this.zEncodeUtf8(
					String(value));
				console.log("postMessage(" + strUrl);
				window.webkit.messageHandlers.currentCookies.postMessage(strUrl);
			} else if (this.getPageWindow == "2") {
				console.log(`AndroidJS.SetData(${key},${value})`)
				window.AndroidJS.SetData(key, value);
			} else { }
		} else { }
	}
	// 获取数据记录接口
	ndGetData(obj) {
		let zobj = obj || {}
		let key = zobj.key || ''
		return new Promise((resolve, reject) => {
			try {
				if (this.facilityType) {
					let callData = {}
					callData.code = 1
					callData.data = ""
					window.GetDataCallBack = function (callkey, callvalue) {
						callData.data = callvalue;
						if (callkey == key) {
							resolve(callData)
						}
					}

					if (this.getPageWindow == "1") {
						var strUrl = "objc://" + 'GetData/&' + this.zEncodeUtf8(String(key));
						window.webkit.messageHandlers.currentCookies.postMessage(strUrl);
						console.log("postMessage(" + strUrl);
					} else if (this.getPageWindow == "2") {
						console.log('GetData')
						window.AndroidJS.GetData(key);
					} else { }

				} else {
					let backStr = {}
					backStr.code = this.dictionaries.denyCode
					resolve(backStr);
				}
			} catch (err) {
				reject(err)
			}
		})
	}
	// 用户分享
	ndUserShareByType(obj) {
		let zobj = obj || {}
		let type = zobj.type || ''
		let title = zobj.title || ''
		let description = zobj.description || ''
		let imgUrl = zobj.imgUrl || ''
		let link = zobj.link || ''
		let programLink = zobj.programLink || ''
		let base64Code = zobj.base64Code || ''
		if (this.facilityType) {
			if (this.getPageWindow == "1") {
				var strUrl = "objc://" + 'UserShareByType/&' + this.zEncodeUtf8(String(type)) + '/&' + this.zEncodeUtf8(String(title)) + '/&' + this.zEncodeUtf8(String(description)) + '/&' + this.zEncodeUtf8(String(imgUrl)) + '/&' + this.zEncodeUtf8(String(link)) + '/&' + this.zEncodeUtf8(String(programLink)) + '/&' + this.zEncodeUtf8(String(base64Code));
				window.webkit.messageHandlers.currentCookies.postMessage(strUrl);
				console.log("postMessage(" + strUrl);
			} else if (this.getPageWindow == "2") {
				console.log('UserShareFile')
				window.AndroidJS.UserShareByType(type, title, description, imgUrl, link, programLink, base64Code);
			} else { }
		} else { }
	}
	// 保存二维码
	ndSaveQRCodePic(obj) {
		let zobj = obj || {}
		let picURL = zobj.picURL || ''
		if (this.facilityType) {
			if (this.getPageWindow == "1") {
				var strUrl = "objc://" + 'SaveQRCodePic/&' + this.zEncodeUtf8(String(picURL));
				window.webkit.messageHandlers.currentCookies.postMessage(strUrl);
				console.log("postMessage(" + strUrl);
			} else if (this.getPageWindow == "2") {
				console.log('SaveQRCodePic')
				window.AndroidJS.SaveQRCodePic(picURL);
			} else { }
		} else { }
	}
	// 选择上传文件
	ndSelectFile(obj) {
		let zobj = obj || {}
		let ext = zobj.ext || ''
		let type = zobj.type || ''
		return new Promise((resolve, reject) => {
			try {
				if (this.facilityType) {
					if (this.getPageWindow == "1") {
						var strUrl = "objc://" + 'SelectFile/&' + this.zEncodeUtf8(String(ext)) + '/&' + this.zEncodeUtf8(String(type));
						window.webkit.messageHandlers.currentCookies.postMessage(strUrl);
						console.log("postMessage(" + strUrl);
					} else if (this.getPageWindow == "2") {
						console.log(`.AndroidJS.SelectFile(${ext}, ${type})`)
						window.AndroidJS.SelectFile(ext, type);
					} else { }
					let callData = {}
					callData.code = 1
					let backObj = {}
					window.selectCompleteCallBack = (fileID, md5, fileName, fileSize, zfileName) => {
						backObj.fileID = fileID;
						backObj.md5 = md5;
						backObj.fileName = fileName;
						backObj.fileSize = fileSize;
						backObj.zfileName = zfileName
						callData.data = backObj
						resolve(callData)
					}
					window.uploadFileCallBack = (msg, name) => {
						callData.code = -1;
						backObj.msg = msg;
						backObj.name = name;
						callData.data = backObj
						resolve(callData)
					}
				} else {
					let backStr = {}
					backStr.code = this.dictionaries.denyCode
					resolve(backStr);
				}
			} catch (err) {
				reject(err)
			}
		})
	}
	//判断App有指定功能的权限checkAppRight (type) type 1 麦克风 2 相机 3相册 4、通讯录 5、电话 6、存储空间
	ndCheckAppRight(type, callBack) {
		window.checkRightCallBack = callBack;
		resetRightCallBack(callBack);

		if (this.getPageWindow == "1") {
			var strUrl = "objc://" + 'checkAppRight/&' + this.zEncodeUtf8(String(type));
			window.webkit.messageHandlers.currentCookies.postMessage(strUrl);
			console.log("postMessage(" + strUrl);
		} else if (this.getPageWindow == "2") {
			window.AndroidJS.checkAppRight(type);
			console.log("window.AndroidJS.checkAppRight(" + type + ")");
		} else { }

		function resetRightCallBack(callBack) {
			try {
				window.checkRightCallBack = callBack;
				var el = document.getElementById("viewer");
				if (el) {
					var _contentWindow = el.contentWindow;
					if (_contentWindow && _contentWindow.checkAppRightCallBack) {
						_contentWindow.checkAppRightCallBack = callBack;
					}
				}
			} catch (error) { }
		}
	}
	// 上传文件(默认oss) 1:oss 2:obs
	ndUploadFile(obj) {
		let zobj = obj || {}
		let fileID = zobj.fileID || ''
		let UploadType = zobj.UploadType || 1
		return new Promise((resolve, reject) => {
			try {
				if (this.facilityType) {
					if (UploadType == 1) {
						if (this.getPageWindow == "1") {
							var strUrl = "objc://" + 'UploadToOSS/&' + this.zEncodeUtf8(String(fileID));
							console.log("postMessage(" + strUrl);
							window.webkit.messageHandlers.currentCookies.postMessage(strUrl);
						} else if (this.getPageWindow == "2") {
							console.log(`.AndroidJS.UploadToOSS(${fileID})`)
							window.AndroidJS.UploadToOSS(fileID);
						} else { }
					} else {
						if (this.getPageWindow == "1") {
							var strUrl = "objc://" + 'UploadToOBS/&' + this.zEncodeUtf8(String(fileID));
							console.log("postMessage(" + strUrl);
							window.webkit.messageHandlers.currentCookies.postMessage(strUrl);
						} else if (this.getPageWindow == "2") {
							console.log(`.AndroidJS.UploadToOBS(${fileID})`)
							window.AndroidJS.UploadToOBS(fileID);
						} else { }
					}
					let callData = {}
					callData.code = 1
					let backObj = {}
					callData.data = backObj
					window.uploadCompleteCallBack = (fileID, url, status, message, zurl) => {
						backObj.fileID = fileID;
						backObj.url = url; // base64编码
						backObj.zurl = zurl; // 解码
						backObj.status = status;
						backObj.message = message;
						resolve(callData)
					}
				} else {
					let backStr = {}
					backStr.code = this.dictionaries.denyCode
					resolve(backStr);
				}
			} catch (err) {
				reject(err)
			}
		})
	}

	// 上传进度
	ndGetUploadProcess(obj, callBack) {
		let zobj = obj || {}
		let fileIDList = zobj.fileIDList || ''
		// return new Promise((resolve, reject) => {
		try {
			if (this.facilityType) {
				if (this.getPageWindow == "1") {
					var strUrl = "objc://" + 'GetUploadProcess/&' + this.zEncodeUtf8(String(fileIDList));
					console.log("postMessage(" + strUrl);
					window.webkit.messageHandlers.currentCookies.postMessage(strUrl);
				} else if (this.getPageWindow == "2") {
					console.log(`.AndroidJS.GetUploadProcess(${fileIDList})`)
					window.AndroidJS.GetUploadProcess(fileIDList);
				} else { }
				let backObj = {}
				window.UploadProCallBack = (jsonData) => {
					backObj.code = 1;
					backObj.data = JSON.parse(jsonData)
					callBack && callBack(backObj);
				}
			} else {
				let backStr = {}
				backStr.code = this.dictionaries.denyCode
			}
		} catch (err) {
			// reject(err)
		}
		// })
	}
	// 取消上传
	ndCancelUpload(obj) {
		let zobj = obj || {}
		let fileIDList = zobj.fileIDList || ''
		return new Promise((resolve, reject) => {
			try {
				if (this.facilityType) {
					if (this.getPageWindow == "1") {
						var strUrl = "objc://" + 'CancelUpload/&' + this.zEncodeUtf8(String(fileIDList));
						console.log("postMessage(" + strUrl);
					} else if (this.getPageWindow == "2") {
						console.log(`.AndroidJS.CancelUpload(${fileIDList})`)
						window.AndroidJS.CancelUpload(fileIDList);
					} else { }
					let backObj = {}
					backObj.code = 1;
					resolve(backObj)
				} else {
					let backStr = {}
					backStr.code = this.dictionaries.denyCode
					resolve(backStr);
				}
			} catch (err) {
				reject(err)
			}
		})
	}
	ndGetVersion() {
		return new Promise((resolve, reject) => {

			try {
				let callData = {
					code: 1,
					data: ""
				};
				window.GetDataCallBack = function (callkey, callvalue) {
					callData.data = callvalue;
					if (callkey == 'TuzhitongAppVersion') {
						resolve(callData)
					}
				}
				if (this.getPageWindow == "1") {
					var strUrl = 'objc://GetData/&TuzhitongAppVersion';
					window.webkit.messageHandlers.currentCookies.postMessage(strUrl);
				} else if (this.getPageWindow == "2") {
					window.AndroidJS.GetData('TuzhitongAppVersion');
				} else { }

			} catch (error) {
				reject(error)
			}

		})
	}
	ndCallAppMethod(name, params) {

		if (this.getPageWindow == "1") {
			var paramsStr = "";
			if (params) {
				for (var i = 0; i < params.length; i++) {
					paramsStr += '/&' + this.zEncodeUtf8(params[i]);
				}
			}
			var script = "objc://" + name + paramsStr;
			console.log("IOS:" + script);
			window.webkit.messageHandlers.currentCookies.postMessage(script);
		} else if (this.getPageWindow == "2") {
			var paramsStr = "";
			if (params) {
				for (var i = 0; i < params.length; i++) {
					if (i != 0)
						paramsStr += ",";
					paramsStr += "'" + replace(params[i], "'", "\\'") + "'";
				}
			}
			var script = "window.AndroidJS." + name + "(" + paramsStr + ")";
			eval(script);
		} else { }

		function replace(str, s1, s2) {
			var strResult = "";
			try {
				strResult = str.replace(new RegExp(s1, "gm"), s2);
			} catch (e1) {
				try {
					strResult = str.replace(eval("/\\" + s1 + "/g"), s2);
				} catch (e2) {
					strResult = str;
				}
			}
			return strResult;
		}
	}

	ndCallUDID() {

		return new Promise((resolve, reject) => {
			try {
				let callData = {
					code: 1,
					data: {}
				};
				window.setUDIDCallBack = function (uuid) {
					callData.data = uuid;
					resolve(callData);
				}

				if (this.getPageWindow == "1") {
					var strUrl = "objc://" + "getUDID";
					window.webkit.messageHandlers.currentCookies.postMessage(strUrl);
				} else if (this.getPageWindow == "2") {
					window.AndroidJS.getUDID();
				} else { }
			} catch (error) {
				reject(error);
			}

		})

	}
	ndGetOtherAppFileName() { //获取第三方的文件信息
		return new Promise((resolve, reject) => {
			try {
				let callData = {
					code: 1,
					data: {}
				};
				window.getOtherAppFileNameCallBack = function (fileName, status, fileSize, md5, sourceURL, fileID, zfileName) {
					callData.data = {
						fileName,
						status,
						fileSize,
						md5,
						sourceURL,
						fileID,
						zfileName
					};
					resolve(callData);
				}
				//setUploadFileName
				if (this.getPageWindow == "1") {
					var strUrl = "objc://" + 'getOtherAppFileName';
					window.webkit.messageHandlers.currentCookies.postMessage(strUrl);
				} else if (this.getPageWindow == "2") {
					window.AndroidJS.getOtherAppFileName();
				} else { }
			} catch (error) {
				reject(error);
			}

		})
	}
	ndCheckVerifyEnable() {

		return new Promise((resolve, reject) => {
			try {
				let callData = {
					code: 1,
					data: {}
				};
				window.checkOneloginEnableCallBack = function (state) {
					callData.data = state;
					resolve(callData);
				}
				if (this.getPageWindow == "1") {
					var strUrl = "objc://" + 'checkVerifyEnable';
					window.webkit.messageHandlers.currentCookies.postMessage(strUrl);
					console.log("postMessage(" + strUrl);
				} else if (this.getPageWindow == "2") {
					console.log("window.AndroidJS.checkVerifyEnable()");
					window.AndroidJS.checkVerifyEnable();
				} else { }
			} catch (error) {
				reject(error);
			}

		})
	}

	ndChooseAddressList() { //获取通讯录
		return new Promise((resolve, reject) => {
			try {
				let callData = {
					code: 1,
					data: {}
				};
				window.getAllAddressSucCallBack = function (res) {
					var resArr = [];
					//防止数据返回转换问题
					try {
						resArr = JSON.parse(new myBase64().decode(res));

					} catch (e) {
						if (res)
							resArr = res;
					}
					callData.data = resArr
					resolve(callData);
				}
				if (this.getPageWindow == "1") {
					var strUrl = "objc://" + 'ChooseAddressList';
					window.webkit.messageHandlers.currentCookies.postMessage(strUrl);
					console.log("postMessage(" + strUrl);
				} else if (this.getPageWindow == "2") {
					console.log("window.AndroidJS.ChooseAddressList()");
					window.AndroidJS.ChooseAddressList();
				} else { }
			} catch (error) {
				reject(error);
			}

		})
	}
	ndClearCache() { //清理缓存
		if (this.getPageWindow == "1") {
			var strUrl = "objc://" + "ClearCache";
			console.log(strUrl);
			window.webkit.messageHandlers.currentCookies.postMessage(strUrl);
		} else if (this.getPageWindow == "2") {
			window.AndroidJS.ClearCache();
			console.log("window.AndroidJS.ClearCache()");
		} else { }
	}
	ndOpenCall(phoneNumber) { //拨号
		var splitChar = '/&';
		if (this.getPageWindow == "1") {
			var strUrl = "objc://" + "UserContract" + splitChar + this.zEncodeUtf8(phoneNumber);
			console.log(strUrl);
			window.location.href = strUrl;
		} else {
			console.log("tel:" + phoneNumber);
			location.href = "tel:" + phoneNumber;
		}
	}
	ndOpenview(href) {
		if (this.getPageWindow == "1") {
			var strUrl = "objc://" + "OpenView" + splitChar + this.zEncodeUtf8(href);
			console.log(strUrl);
			window.location.href = strUrl;
		} else {
			window.AndroidJS.OpenView(href);
			console.log(`window.AndroidJS.OpenView(${href})`);
		}
	}
	ndCloseView() {
		if (this.getPageWindow == "1") {
			var strUrl = "objc://CloseView";
			console.log(strUrl);
			window.location.href = strUrl;
		} else {
			window.AndroidJS.CloseView();
			console.log(`window.AndroidJS.CloseView()`);
		}
	}
	//
	ndLocalNumberLogin() {
		console.log('ndLocalNumberLogin');
		if (this.getPageWindow == "1") {
			var strUrl = "objc://LocalNumberLogin";
			console.log(strUrl);
			window.location.href = strUrl;
		} else {
			window.AndroidJS.LocalNumberLogin();
			console.log(`window.AndroidJS.LocalNumberLogin()`);
		}
	}

	// 	28、获取选择的zip中文件信息(→18)
	// 功能	获取选择的zip文件信息（有回调）
	// 接口名称	getZipFileList(fileID)
	ndGetZipFileList(fileID) { //上传第三方文件
		return new Promise((resolve, reject) => {
			try {
				let callData = {
					code: 1,
					data: {}
				};
				window.selectCompleteCallBack = (fileID, md5, fileName, fileSize) => {
					callData.code = -1;
					callData.msg = '您的文件可能因加密等因素，暂时无法打开查看 ';
					resolve(callData);
				}
				window.selectCompleteZipRarCallBack = function (model) {
					callData.data = model;
					resolve(callData);
				}
				var splitChar = '/&';
				if (this.getPageWindow == "1") {
					var strUrl = "objc://" + 'getZipFileList' + splitChar + this.zEncodeUtf8(String(fileID));
					window.webkit.messageHandlers.currentCookies.postMessage(strUrl);
					console.log("postMessage(" + strUrl);
				} else if (this.getPageWindow == "2") {
					console.log(`window.AndroidJS.getZipFileList(${fileID})`);
					window.AndroidJS.getZipFileList(fileID);
				} else { }
			} catch (error) {
				reject(error);
			}
		})
	}

	// SelectZipRarFile(fileID,fileName)

	ndSelectZipRarFile(fileID, fileName) { //上传第三方文件
		return new Promise((resolve, reject) => {
			try {
				let callData = {
					code: 1,
					data: {}
				};
				window.selectSingleFileCallBack = function (fileID, md5, fileName, fileSize, status, zfileName) {
					callData.data = {
						fileID,
						md5,
						fileName,
						fileSize,
						status,
						zfileName
					};
					resolve(callData);
				}
				var splitChar = '/&';
				if (this.getPageWindow == "1") {
					var strUrl = "objc://" + 'SelectZipRarFile' + splitChar + this.zEncodeUtf8(String(fileID)) + splitChar + this.zEncodeUtf8(String(fileName));
					window.webkit.messageHandlers.currentCookies.postMessage(strUrl);
					console.log("postMessage(" + strUrl);
				} else if (this.getPageWindow == "2") {
					console.log(`window.AndroidJS.SelectZipRarFile(${fileID},${fileName})`);
					window.AndroidJS.SelectZipRarFile(fileID, fileName);
				} else { }
			} catch (error) {
				reject(error);
			}

		})
	}

	ndCloseApp() {

		if (this.getPageWindow == "1") {
			var strUrl = "objc://closeApp";
			window.webkit.messageHandlers.currentCookies.postMessage(strUrl);
			console.log(strUrl);
		} else if (this.getPageWindow == "2") {
			window.AndroidJS.closeApp();
			console.log(`window.AndroidJS.closeApp()`);
		}
	}
	ndCheckAppRight6() {
		var pro = new Promise((resolve, reject) => {
			try {
				appSDK.ndCheckAppRight(6, async function (type, res0) {
					console.log(`ndCheckAppRight = function (${type},${res0})`);
					if (res0 == 1) {
						resolve(true);
					} else {
						resolve(false);
					}
				});
			} catch (error) {
				reject();
			}

		})
		return pro;
	}
	ndTest1() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(true);
			}, 1000);
		})
	}
	ndTest2() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(true);
			}, 100000);
		})
	}

}

(function () {
	let appSDK = new appSdk();
	window.appSDK = appSDK;
})()
