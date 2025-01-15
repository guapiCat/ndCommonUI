<template>
  <div class="z-home">
    <div class="h-selectFile" v-if="dataObj.loadHome">
      <Loading vertical style="position: absolute;top: 50%;left: 50%; transform: translate(-50%, -50%);">获取模型信息中,请稍候...
      </Loading>
    </div>
    <header class="header-wrap" v-if="dataObj.showDiv == '选择文件'">
      <div class="clearfix header">
        <a class="top-left" @click="toHome">
          <span class="ico top-icoBack"></span>
        </a>
        <h2 class="top-tit">
          {{ dataObj.contentsPage[dataObj.contentsPage.length - 1] ? dataObj.contentsPage[dataObj.contentsPage.length - 1].name : '根目录' }}
        </h2>
      </div>
    </header>
    <section class="section-wrap0 pr" v-if="dataObj.showDiv == '选择文件'">
      <div class="sharedHistory-bottom" style="height: 100%">
        <!-- 列表模式 start -->
        <div class="file-list list-xg" style="display: block; overflow: hidden; overflow-y: auto;">
          <ul>
            <li v-for="(item, i) in dataObj.fileList" :key="i" @click="selectFile(item)">
              <i class="file-pic">
                <img
                  :src="item.dir ? '/images/fileType/folder.png' : (ndreversed(item.name) ? '/images/fileType/' + (ndreversed(item.name).toLowerCase()) + '.png' : '/images/fileType/default.png')"
                  :onerror="(e) => { e.srcElement.src = '/images/fileType/default.png'; e.srcElement.onerror = null }" />
              </i>
              <p class="file-name">{{ item.name }}</p>
              <P class="file-format">{{ item.dir ? '文件夹' : (reversed(item.name) ? reversed(item.name) : ' ') }}</P>
              <!--20220420 新增-->
              <p class="file-date">
                {{ item.time }}
                <span>{{ item.size ? item.size : ' ' }}</span>
              </p>
              <!--20220413 新增span-->
            </li>
          </ul>
        </div>
      </div>
      <!-- 无数据 -->
      <div class="noData" v-if="dataObj.fileList.length == 0">
        <p>No Records</p>
      </div>
    </section>
    <header class="header-wrap" v-if="dataObj.showDiv == '打开图纸' && dataObj.loopCheck">
      <div class="clearfix header">
        <a class="top-left" @click="toHome(2)">
          <span class="ico top-icoBack"></span>
        </a>
        <h2 class="top-tit">打开图纸</h2>
      </div>
    </header>
    <section class="section-wrap0 pr" v-if="dataObj.showDiv == '打开图纸' && dataObj.loopCheck">
      <Loading vertical style="position: absolute;top: 40%;left: 50%; transform: translate(-50%, -50%);">
        <Progress style="width: 260px; margin-top: 10px" :percentage="dataObj.percentage" />
        <div style="width: 260px; margin-top: 10px; text-align: center; text-index: 2em" v-if="dataObj.loadText">
          {{ dataObj.loadText }}
        </div>
      </Loading>
    </section>
  </div>
</template>
<script setup>
import * as commonApi from "@/api/commonApi";
import {
  reactive,
  onBeforeUnmount,
  nextTick
} from "vue";
import {
  getWaitSencondNumber,
  reversed,
  ndreversed,
  isTheType,
  isAssemblyType,
  uploadMsglist,
  GetStrLength
} from "@/utils/common";
import { useRoute, useRouter } from "vue-router";
import { Loading, Progress, Dialog } from "vant";
import { set } from "@vueuse/core";

const router = useRouter();
const route = useRoute();

// 数据
const dataObj = reactive({
  msgs: [], // 提示语集合
  extension: "", // 支持格式
  assemblyExt: "", // 装配体格式
  loadHome: false, // 等待层
  WaitTime: 0, // 等待时间(每秒的进度)
  isZip: false, // 是否压缩包
  zipFileObj: {}, // 压缩包文件信息
  calculagraph: 0, // 锚点值
  contentsPage: [],
  fileList: [], // 当前展示的列表
  dataStart: true, // 递归查询时
  isAssembly: false, // 是否装配体
  currenId: "", // 选中文件id
  showDiv: "打开图纸", // 选择文件or打开图纸
  loopCheck: false,  // 打开文件状态
  percentage: 0, // 进度
  uploadingID: "", // 上传中的文件id
  setIntProgress: "", // 进度定时器
  itemCode: "", // 文件itemCode
  setOut30s: undefined, // 是否超过30s的定时器
  loadText: "",  // 超过30s后的显示文字
  Timer: undefined, // 转换状态查询的定时器
  scrollTop: 0
});

// 提示错误信息
const setError = async (msg, type) => {
  try {
    dataObj.showDiv = "打开图纸";
    dataObj.loopCheck = false
    vant.showDialog({
      title: '',
      message: msg,
    }).then(() => {
      toHome(3)
    });
  } catch (error) {
    console.log(error);
  }
};

// 进入页面后
const init = async () => {
  try {
    if (!route.query.fileID) {
      router.push({
        path: "/home"
      });
      return false;
    }
    if (route.query.contentsPage) {
      console.log('12333333333333333333333333333333333', route.query.contentsPage);
      dataObj.calculagraph = 0;
      dataObj.contentsPage = JSON.parse(route.query.contentsPage)
    }
    dataObj.msgs = uploadMsglist();
    dataObj.loadHome = true;
    dataObj.assemblyExt = route.query.assemblyExt;
    dataObj.extension = route.query.extension;
    //根据源文件大小获取 进度条每(秒)增加的大小
    dataObj.WaitTime = getWaitSencondNumber(parseFloat(route.query.fileSize));
    var _fileName = route.query.zfileName.toLocaleLowerCase();
    let ext = reversed(_fileName);
    if (ext == ".rar" || ext == ".zip") {
      dataObj.isZip = true;
    }
    dataObj.loadText = ""
    if (dataObj.isZip) {
      // 压缩包
      let fileRes = await appSDK.ndGetZipFileList(route.query.fileID);
      if (fileRes.code != 1) {
        setError(res.msg);
        return false;
      }
      dataObj.zipFileObj = fileRes.data;
      if (!dataObj.zipFileObj.fileList) {
        setError("当前压缩包内无支持打开的文件格式", true);
        return;
      }
      if (route.query.scrollTop) {
        dataObj.scrollTop = route.query.scrollTop
      }
      zrecursion(dataObj.zipFileObj.fileList, 3);
      dataObj.loadHome = false;
      dataObj.showDiv = "选择文件";
      // var hasBlack = checkBlack(dataObj.zipFileObj.fileList);
      // if(hasBlack){
      //     setError('您所选择的压缩包中存在不支持的文件格式，请删除压缩包中以下格式文件：' + route.query.blackExt );
      //     return;
      // }
    } else {
      dataObj.loadHome = false;
      // 单文件
      dataObj.showDiv = "打开图纸";
      dataObj.loopCheck = true
      dataObj.percentage = 0;
      check_Upload(
        route.query.fileID,
        route.query.md5,
        route.query.zfileName,
        route.query.fileSize
      );
    }
  } catch (error) {
    console.log('initerr', error);

  }
};

// 点击返回按钮
const toHome = e => {
  if (e == 2) {
    if (dataObj.setIntProgress) {
      clearInterval(dataObj.setIntProgress);
    }
    dataObj.loopCheck = false
    dataObj.showDiv = "选择文件"
    dataObj.currenId = ""
    return false;
  }
  if (e == 3) {
    if (dataObj.setIntProgress) {
      clearInterval(dataObj.setIntProgress);
    }
    if (dataObj.isZip) {
      dataObj.currenId = ""
      dataObj.loopCheck = false
      dataObj.showDiv = "选择文件"
    } else {
      router.push("/home");
    }
    return false
  }
  // 去首页
  if (dataObj.contentsPage.length == 0) {
    router.push("/home");
  } else {
    dataObj.contentsPage.pop();
    initlist(1);
  }
};

/////树形结构的点击返回
const initlist = e => {
  if (e) {
    dataObj.calculagraph = 0;
  }
  zrecursion(dataObj.zipFileObj.fileList, 1);
};

// 滚动距离
const tableBoxScroll = async (evt) => {
  try {
    let dom = document.querySelector(".file-list")
    console.log(dom);
    if(evt == 1) {
      dom.scrollTop = 0
    }
    if(evt == 2) {
      dataObj.scrollTop = dom.scrollTop
    }
    if(evt == 3) {
      dom.scrollTop = dataObj.scrollTop
    }
  } catch (error) {
    console.log(error);
  }
}

// 文件或文件夹的点击
const selectFile = async evt => {
  try {
    if (evt.dir) {
      dataObj.dataStart = false;
      dataObj.contentsPage.push(evt);
      let dirlist = [];
      let asslist = [];
      let filelsit = [];
      evt.child.forEach(element => {
        if (element.dir) {
          dirlist.push(element);
        } else if (isAssemblyType(dataObj.assemblyExt, element.name)) {
          asslist.push(element);
        } else {
          if (isTheType(dataObj.extension, element.name)) {
            if (
              reversed(element.name).toLowerCase() == "zip" ||
              reversed(element.name).toLowerCase() == "rar"
            ) {
            } else {
              filelsit.push(element);
            }
          }
        }
      });
      dataObj.fileList = [...dirlist, ...asslist, ...filelsit];
      dataObj.dataStart = true;
      tableBoxScroll(1)      
    } else {
      dataObj.isAssembly = false;
      if (isAssemblyType(dataObj.assemblyExt, evt.name)) {
        dataObj.isAssembly = true;
      }
      selectSingle(evt);
      tableBoxScroll(2)
    }
  } catch (error) {
    console.log("error", error);
  }
};

// 选择文件(压缩包列表)
const selectSingle = async evt => {
  try {
    let addres = "";
    if (dataObj.contentsPage.length > 0) {
      dataObj.contentsPage.forEach(element => {
        addres = addres + element.name + "/";
      });
    }
    dataObj.currenId = evt.id;
    addres = addres + evt.name;
    let res = await appSDK.ndSelectZipRarFile(
      dataObj.zipFileObj.fileID,
      addres
    );
    if (res.code != 1 || res.data.status != "1") {
      setError(dataObj.msgs[11]);
      return;
    }
    let zObj = {};
    if (dataObj.isAssembly) {
      // 装配体
      zObj.zfileID = dataObj.zipFileObj.fileID;
      zObj.zmd5 = dataObj.zipFileObj.md5;
      zObj.zfileName = dataObj.zipFileObj.fileName;
      zObj.zfileSize = dataObj.zipFileObj.fileSize;
      zObj.addres = addres;
      zObj.currentName = evt.name;
      zObj.currentSize = evt.size;
      zObj.currenId = evt.id;
      toAssOpen(zObj, dataObj.isAssembly);
    } else {
      // 零件
      zObj.zfileID = res.data.fileID;
      zObj.zmd5 = res.data.md5;
      // zObj.zfileName = res.data.fileName;
      zObj.zfileName = res.data.zfileName;
      zObj.zfileSize = res.data.fileSize;
      zObj.currenId = evt.id;
      tofileOpen(zObj);
    }
  } catch (error) {
    console.log('selectSingleerr', error);

  }
};
// 选择的装配体
const toAssOpen = (zObj, isAssembly) => {
  try {
    dataObj.showDiv = "打开图纸";
    dataObj.loopCheck = true
    dataObj.percentage = 0;
    check_assUpload(zObj)
  } catch (error) {
    console.log(error);

  }
}
// 装配体的逻辑
const check_assUpload = async (zObj) => {
  try {
    let _fileSize = zObj.zfileSize
    let _fileName = zObj.currentName
    let _mainFile = zObj.addres
    let _fileID = zObj.zfileID
    dataObj.WaitTime = getWaitSencondNumber(parseFloat(_fileSize));
    let checkValidData = await checkFileValid(_fileName, _fileSize);
    if (!checkValidData) {
      return false;
    }
    let uploadToData = await uploadToApp(_fileID, 1);
    if (uploadToData.code != 1 || uploadToData.data.status != 2) {
      setError(dataObj.msgs[8]);
      return false;
    }
    let _url = uploadToData.data.zurl
    addassFile(_url, _fileName, _mainFile, _fileSize, 1, 1, getPageWindow());  // 上传方式   文件来源  当前设备类型 (1 1 1)
  } catch (error) {
    console.log("check_assUpload", error);
  }
};
// 装配体入库
const addassFile = async (_url, _fileName, _mainFile, _fileSize, _pathType, _sourceType, _mobileType) => {
  try {
    let query = {
      url: _url,
      fileName: _fileName,
      mainFile: _mainFile,
      sourceType: _sourceType, // 1-页面打开
      pathType: _pathType, //0 本地 1 阿里云 4 亚马逊云
      mobileType: _mobileType == 0 ? 4 : _mobileType // 上传的端
    };
    let { data } = await commonApi.AddAssemblyFile(query);
    if (data.status.code != 1) {
      setError(data.status.msg);
      return false;
    }
    dataObj.itemCode = data.data.itemCode;
    addDB_Next(dataObj.itemCode);
  } catch (error) {
    console.log('adderror', error);
    setError(dataObj.msgs[8]);
  }
};
// 选择的零件
const tofileOpen = (zObj) => {
  try {
    dataObj.showDiv = "打开图纸";
    dataObj.loopCheck = true
    dataObj.percentage = 0;
    check_Upload(
      zObj.zfileID,
      zObj.zmd5,
      zObj.zfileName,
      zObj.zfileSize,
      zObj.currenId
    );
  } catch (error) {
    console.log('tofileOpen', error);
  }
}

// 单文件上传
const check_Upload = async (_fileID, _md5, _fileName, _fileSize, _currenId) => {
  try {
    if (!dataObj.loopCheck || dataObj.currenId != _currenId) {
      return false
    }
    let isAssemblyOnly = isAssemblyType(dataObj.assemblyExt, _fileName, 1);
    if (isAssemblyOnly) {
      setError(dataObj.msgs[2]);
      return false;
    }
    dataObj.WaitTime = getWaitSencondNumber(parseFloat(_fileSize));
    let checkValidData = await checkFileValid(_fileName, _fileSize);
    if (!checkValidData) {
      return false;
    }
    let checkMD5Data = await checkMD5(_md5, _fileName);
    if (checkMD5Data) {
      //md5存在
      dataObj.showDiv = "打开图纸";
      dataObj.loopCheck = true
      dataObj.percentage = 30;
      addFile("", _md5, _fileName, _fileSize, 1, getPageWindow(), _fileID, _currenId);
    } else {
      //md5不存在
      let uploadToData = await uploadToApp(_fileID, 1, _currenId);
      if (uploadToData.code != 1 || uploadToData.data.status != 2) {
        setError(dataObj.msgs[8]);
        return false;
      }
      let _url = uploadToData.data.zurl
      addFile(_url, _md5, _fileName, _fileSize, 1, getPageWindow(), _fileID, _currenId);
    }
  } catch (error) {
    console.log("check_Uploaderr", error);
  }
};

// 调用接口添加零件
const addFile = async (_url, _md5, _fileName, _fileSize, _pathType, _mobileType, _fileID, _currenId) => {
  try {
    if (!dataObj.loopCheck || dataObj.currenId != _currenId) {
      return false
    }
    let query = {
      url: _url,
      md5Value: _md5,
      sourceType: 1, // 1-页面打开
      fileName: _fileName,
      pathType: _pathType, //0 本地 1 阿里云 4 亚马逊云
      mobileType: _mobileType == 0 ? 4 : _mobileType // 上传的端 // 上传的端
    };
    let { data } = await commonApi.AddFile(query);
    if (data.status.code != 1) {
      setError(data.status.msg);
      return false;
    }
    dataObj.itemCode = data.data.itemCode;
    addDB_Next(dataObj.itemCode, _fileID, _currenId);
  } catch (error) {
    console.log('adderror', error);
    setError(dataObj.msgs[8]);
  }
};
// 上传且入库完成后  设置转换状态
const addDB_Next = async (itemCode, _fileID, _currenId) => {
  try {
    if (!dataObj.loopCheck || dataObj.currenId != _currenId) {
      return false
    }
    if (dataObj.percentage < 30) {
      dataObj.percentage = 30;
    }
    dataObj.setOut30s = undefined;
    dataObj.loadText = ""
    setProgress(_fileID, _currenId);
  } catch (error) {
    console.log('addDB_Next', error);
  }
};

const setProgress = async (_fileID, _currenId) => {
  try {
    if (!dataObj.loopCheck || dataObj.currenId != _currenId) {
      if (dataObj.setOut30s) {
        clearTimeout(dataObj.setOut30s);
      }
      return;
    }
    // 文件转换中，继续轮询
    if (dataObj.percentage >= 30) {
      dataObj.setOut30s = setTimeout(function () {
        if (dataObj.loopCheck) {
          dataObj.loadText =
            "图纸文件解析过程比较复杂，可能需要较长时间，我们正在加速处理中，请稍等片刻！";
        }
      }, 30000);
      let rate = 2;
      let count = parseFloat((dataObj.WaitTime * rate).toFixed(2));
      getConvertStatus(rate, count, _fileID, _currenId)
    }
  } catch (error) {
    console.log('setProgress', error);
  }
};

const getConvertStatus = async (rate, count, _fileID, _currenId) => {
  try {
    if (!dataObj.loopCheck || dataObj.currenId != _currenId) {
      return false
    }
    let obj = {};
    obj.modelCode = dataObj.itemCode;
    let { data } = await commonApi.GetModelFileInfo(obj);
    if (data.status.code != 1) {
      setError(data.status.msg);
      return false;
    }
    if (data.data.convertStatus == 0 || data.data.convertStatus == 1) {
      setTimeout(() => {
        if (
          dataObj.percentage >= 30 &&
          dataObj.percentage < 99
        ) {
          dataObj.percentage = parseInt(
            dataObj.percentage + count > 100 ?
              99 :
              dataObj.percentage + count);
        } else if (dataObj.percentage >= 99) {
          dataObj.percentage = 99;
        }
        getConvertStatus(rate, count, _fileID, _currenId);
      }, rate * 1000);
    } else if (data.data.convertStatus == 2) {
      dataObj.percentage = 99;
      setTimeout(() => {
        fileToView(_currenId)
      }, 300);
    } else {
      setError(data.data.convertMessage);
    }
  } catch (error) {
    console.log('getConvertStatus', error);
  }
}
// 进入预览页面
const fileToView = (_currenId) => {
  try {
    if (!dataObj.loopCheck || dataObj.currenId != _currenId) {
      return false
    }
    if (dataObj.isZip) {
      let obj = JSON.parse(JSON.stringify(route.query))
      obj.isBack = "1"
      obj.itemCode = dataObj.itemCode
      obj.contentsPage = JSON.stringify(dataObj.contentsPage)
      obj.scrollTop = dataObj.scrollTop
      router.push({
        name: "preview",
        query: obj,
      });
    } else {
      router.push({
        name: "preview",
        query: {
          isBack: "0",
          itemCode: dataObj.itemCode
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
}
// 获取机型
const getPageWindow = () => {
  //0为网页 1为IOS 2为安卓 3为微信小程序
  var u = navigator.userAgent,
    app = navigator.appVersion;
  var type = 0;
  if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    type = 1;
  } else if (u.indexOf("iPhone") > -1) {
    type = 1;
  } else if (u.indexOf("iPad") > -1 || u.indexOf("Macintosh") > -1) {
    type = 1;
  } else if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
    type = 2;
  }
  return type;
};
// app上传至oss  _type(1:oss 2:obs)
const uploadToApp = (_fileID, _type, _currenId) => {
  return new Promise((resolve, reject) => {
    try {
      dataObj.uploadingID = _fileID;
      let obj = {
        fileID: _fileID,
        UploadType: _type //1:oss 2:obs
      };
      if (dataObj.setIntProgress) {
        clearInterval(dataObj.setIntProgress);
      }
      dataObj.setIntProgress = setInterval(() => {
        if (dataObj.percentage >= 30) {
          clearInterval(dataObj.setIntProgress);
          return false
        }
        dataObj.showDiv = "打开图纸";
        dataObj.loopCheck = true
        if (!dataObj.loopCheck) {
          clearInterval(dataObj.setIntProgress);
          return;
        }
        // app轮询获取进度
        appSDK.ndGetUploadProcess(
          {
            fileIDList: _fileID
          },
          res => {
            try {
              if (res && res.data && res.data.length > 0) {
                if (
                  parseFloat(res.data[0].process) >= 99 &&
                  dataObj.setIntProgress
                ) {
                  clearInterval(dataObj.setIntProgress);
                }
                let percentage = parseInt(
                  parseFloat(res.data[0].process) * 0.3
                );
                dataObj.percentage = percentage;
              }
            } catch (error) { }
            console.log("上传进度：", res);
          }
        );
      }, 1000);
      // app上传
      appSDK.ndUploadFile(obj).then(res => {
        if (dataObj.setIntProgress) {
          clearInterval(dataObj.setIntProgress);
        }
        dataObj.showDiv = "打开图纸";
        dataObj.loopCheck = true
        if (dataObj.percentage < 30) {
          dataObj.percentage = 30;
        }
        dataObj.uploadingID = 0;
        resolve(res);
      });
    } catch (error) {
      console.log('uploadToApp', uploadToApp);
      reject(error);
    }
  });
};
// 判断文件md5
const checkMD5 = (_md5, _fileName) => {
  try {
    return new Promise((resolve, reject) => {
      commonApi
        .CheckMD5Exist({
          md5Value: _md5,
          fileName: _fileName
        })
        .then(res => {
          if (res.data.status.code == 1) {
            if (res.data.data.existMd5) {
              resolve(true);
            } else {
              resolve(false);
            }
          } else {
            resolve(false);
          }
        })
        .catch(e => {
          resolve(false);
        });
    });
  } catch (error) {
    reject(error);
  }
};
// 判断文件有效性
const checkFileValid = (_fileName, _fileSize) => {
  return new Promise((resolve, reject) => {
    try {
      if (_fileSize <= 0) {
        setError("当前文件为空文件");
        resolve(false);
        return;
      }
      if (_fileSize * 1024 > 2 * 1024 * 1024 * 1024) {
        setError(dataObj.msgs[5]);
        resolve(false);
        return;
      }
      if (GetStrLength(_fileName) > 75) {
        setError(dataObj.msgs[4]);
        resolve(false);
        return;
      }
      commonApi
        .CheckFileValid({
          fileName: _fileName,
          fileSize: parseInt(_fileSize)
        })
        .then(res => {
          var data = res.data;
          if (data.status.code == 1) {
            resolve(true);
          } else {
            let msg = "";
            if (data.status.code == -10035) {
              msg = "文件内容为空";
            } else if (data.status.code == -14033) {
              //文件类型不存在
              msg = dataObj.msgs[1];
            } else {
              msg = data.status.msg;
            }
            setError(msg);
            resolve(false);
          }
        })
        .catch(e => {
          resolve(false);
        });
    } catch (error) {
      console.log("checkFileValiderror", error);
      reject(error);
    }
  });
};
// 递归查询列表
const zrecursion = (list, type) => {
  try {
    console.log('dataObj.contentsPage.length', dataObj.contentsPage.length);
    console.log('dataObj.calculagraph', dataObj.calculagraph);
    if (parseInt(dataObj.contentsPage.length) > (parseInt(dataObj.calculagraph) + 0.5)) {
      let backupsList = [];
      for (let index = 0; index < list.length; index++) {
        const element = list[index];
        console.log(element);
        console.log(dataObj.calculagraph);
        console.log(dataObj.contentsPage);
        if (element.id == (dataObj.contentsPage[dataObj.calculagraph] && dataObj.contentsPage[dataObj.calculagraph].id)) {
          backupsList = element.child;
          dataObj.calculagraph++;
          zrecursion(backupsList, type);
          break
        }
      }
    } else {
      dataObj.dataStart = false;
      let dirlist = [];
      let asslist = [];
      let filelsit = [];
      list.forEach(element => {
        if (element.dir) {
          dirlist.push(element);
        } else if (isAssemblyType(dataObj.assemblyExt, element.name)) {
          asslist.push(element);
        } else {
          if (isTheType(dataObj.extension, element.name)) {
            if (
              reversed(element.name).toLowerCase() == "zip" ||
              reversed(element.name).toLowerCase() == "rar"
            ) {
            } else {
              filelsit.push(element);
            }
          }
        }
      });
      dataObj.fileList = [...dirlist, ...asslist, ...filelsit];
      dataObj.dataStart = true;
      if(type) {
        nextTick(()=>{
          setTimeout(() => {
            tableBoxScroll(type)
          }, 100);
        })
      }
    }
  } catch (error) {
    console.log('zrecursionzrecursion', error);
  }
};

//检查压缩包内是否存在黑名单文件
const checkBlack = fileTree => {
  var hasBlack = false;
  var list = [];
  //递归获取压缩包内所有文件
  if (fileTree && fileTree.length > 0) {
    for (let i = 0; i < fileTree.length; i++) {
      var f = fileTree[i];
      getTreeFile(f, list);
    }
  }
  if (list && list.length > 0) {
    for (let i = 0; i < list.length; i++) {
      var f = list[i];
      var isBlack = isTheType(route.query.blackExt, f.name);
      if (isBlack) {
        return true;
      }
    }
  }
  return hasBlack;
};

//递归获取压缩包内所有文件
const getTreeFile = (item, list) => {
  if (item.dir == 1) {
    for (let i = 0; i < item.child.length; i++) {
      getTreeFile(item.child[i], list);
    }
  } else {
    list.push(item);
  }
};
const clearDataObj = () => {
  dataObj.loopCheck = false
}
onBeforeUnmount(() => {
  clearDataObj()
})

init();
</script>
<style lang="scss" scoped>
.z-home {
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
  background-color: #fff;

  .h-selectFile {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 199;
    background: rgba(51, 51, 51, 0.4);
  }
}
</style>
<style scoped></style>