(function (pWin) {
    function importScript(url, loadedBack) {
        var scriptNode = document.createElement("script");
        scriptNode.setAttribute("type", "text/javascript");
        scriptNode.setAttribute("src", url);
        document.head.appendChild(scriptNode);
        scriptNode.onload = function () {
            loadedBack();
        }
    }

     // 应用名称:图纸通(百度网盘)        AppKey 'e8a8f4cc96895d4bb956166c'
     // 应用名称:CAD Viewer   AppKey '915297554df1c66f3fbf9e46'
     // 应用名称:零件库   AppKey '60da6ee02e0a77a6b6cbe632'

    window.jiguangSDK = {
        CountEvent: null,
        inited: undefined,
        init: function (appkey, callBack) {
            var _this = this;
            _this.inited = false;
            var _appkey = appkey || "e8a8f4cc96895d4bb956166c";// 默认图纸通
            importScript("https://web-stat.jiguang.cn/web-janalytics/scripts/janalytics-web.min.js", function () {
                //初始化
                window.JAnalyticsInterface.init({
                    appkey: _appkey, // 极光官网中创建应用后分配的 appkey，必填
                    debugMode: true, // 设置是否开启 debug 模式。true 则会打印更多的日志信息。设置 false 则只会输出 w、e 级别的日志
                    channel: "default-channel", // 渠道名称，默认值为:default-channel
                    loc: false, //设置是否尝试获取位置信息上报，默认为 true
                    singlePage: false //设置是否为单页面，默认为 false
                });
                _this.CountEvent = window.JAnalyticsInterface.Event.CountEvent;
                _this.inited = true;
                callBack && callBack();
            })
        },
        addRecord: function (eventID, keyvalueList, appkey) {
            var _this = this;
            if (!eventID) {
                console.log("请输入事件ID");
                return;
            }
            if (!this.inited) {
                try {
                    if (this.inited == undefined) {
                        jiguangSDK.init(appkey, function () {
                            _this.addRecord(eventID, keyvalueList, appkey);
                        });
                    } else {
                        setTimeout(() => {
                            _this.addRecord(eventID, keyvalueList, appkey);
                        }, 2000);
                    }
                    return;
                } catch (error) {}

            }
            if (!window.JAnalyticsInterface || !window.JAnalyticsInterface.Event || !window.JAnalyticsInterface.Event.CountEvent) {
                console.log("请先执行jiguangSDK.init");
                return;
            }
            try {
                if (!this.CountEvent) {
                    this.CountEvent = window.JAnalyticsInterface.Event.CountEvent;
                }
                var cEvent = new this.CountEvent(eventID);
                if (keyvalueList && keyvalueList.length > 0) {
                    for (var i = 0; i < keyvalueList.length; i++) {
                        var kv = keyvalueList[i];
                        if (kv.length < 2) {
                            cEvent.addKeyValue(kv[0], kv[1]);
                            break;
                        }
                    }
                }
                window.JAnalyticsInterface.onEvent(cEvent);
            } catch (error) {}

        }
    }

})();

//调用示例：
// jiguangSDK.addRecord('2d_printpdf',[['来源','网盘预览'],['平台','PC端']],"d9f3212b0bd3983f55cbe11d");
