////////////////与app接口交互
import { EncodeUtf8 } from './common.js'
const AppInterface = {
    // 获取App版本信息
    getAppVersion() {
        let pageWindow = getPageWindow();
        if (pageWindow == "1") {
            var strUrl = "objc://" + 'getAppVersion';
            window.webkit.messageHandlers.currentCookies.postMessage(strUrl);
            console.log("postMessage(" + strUrl);
        } else if (pageWindow == "2") {
            console.log('getAppVersion')
            window.AndroidJS.getAppVersion();
        } else { }
    },
    UploadToOSS(fileID) { //文件上传至华为云
        let pageWindow = getPageWindow();
        if (pageWindow == "1") {
            var strUrl = "objc://" + 'UploadToOSS/&' + EncodeUtf8(String(fileID));
            window.webkit.messageHandlers.currentCookies.postMessage(strUrl);
            console.log("postMessage(" + strUrl);
        } else if (pageWindow == "2") {
            console.log('UploadToOSS:' + fileID)
            window.AndroidJS.UploadToOSS(fileID);
        } else { }
    },
}

function getPageWindow() { //0为网页 1为IOS 2为安卓 3为微信小程序
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

export default AppInterface
