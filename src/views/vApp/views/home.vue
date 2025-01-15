<template>
  <div class="z-home">
    <div class="h-selectFile" v-if="dataObj.loadHome">
      <Loading style="position: absolute;top: 50%;left: 50%; transform: translate(-50%, -50%);" vertical>
        获取文件信息中,请稍候...
      </Loading>
    </div>
    <div class="h-center">
      <!-- 上传区域 -->
      <div class="h-c-upload">
        <div class="upload-tag">3D零件/2D图纸</div>
        <div class="upload-button" @click="openFile">打开本地图纸</div>
        <div class="upload-explain" @click="showformat = true">查看支持图纸格式 ></div>
      </div>
    </div>
    <Popup v-model:show="showformat" position="bottom" class="h-format"
      style="border-radius: 4px 4px 0 0; background: linear-gradient(180deg, #E6F5FC 0%, #FFFFFF 100%);">
      <div class="format-center">当前支持文件格式</div>
      <div class="appvipFunction-tc-table">
        <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto" width="96%">
          <thead>
            <tr>
              <th width="88px" scope="col">
                <p>类型</p>
              </th>
              <th scope="col">
                <p>格式</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>3D图纸</p>
              </td>
              <td>
                <p style="padding: 10px 30px 10px 7px; text-align: left">.sldprt, .sldasm, .prt, .prt.*, .asm, .asm.*,
                  .par, .asm, .psm, .ipt (V6 - V2021),.iam (V11 - V2021), .prt, .CATPart, .CATProduct, .cgr, .model,.exp,
                  .session, .x_t, .xmt_txt, .x_b, .xmt_bin, .p_b, .xmp_bin, .p_t, .xmp_txt, .sat, .sab, .asat, .asab,
                  .igs, .iges, .stp, .step, .stpZ, .stpx, .jt, .xcgm, .3dm, .3dxml, .stl, .obj, .3mf, .vda</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>2D图纸</p>
              </td>
              <td>
                <p style="padding: 10px 30px 10px 7px; text-align: left">.dxf, .dwg, .exb</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>BIM图纸</p>
              </td>
              <td>
                <p style="padding: 10px 30px 10px 7px; text-align: left">.ifc, .rvt</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="f-c-bottom" @click="showformat = false">知道了</div>
    </Popup>
  </div>
</template>
<script setup>
import * as commonApi from "@/api/commonApi";
import {
  ref,
  reactive,
} from "vue";

import { Popup, Toast, Loading } from "vant";
import { useRouter } from "vue-router"
const router = useRouter()
const showformat = ref(false);
// 登录相关
const loginObj = reactive({
  type: 11,
  from: 12,
  mobile: "",
  validateCode: "",
  userClient: "7"
});
const PartTencent = reactive({
  unique: "",
  trueName: "",
  imgUrl: ""
});

const dataObj = reactive({
  fileObj: {},
  loadHome: false,
  extension: {}
});

const openFile = async () => {
  try {
    if (!window.isInApp) {
      Toast("微网页不支持改功能,请前往app中使用!");
      return false;
    }
    //检查是否有存储权限
    appSDK.ndCheckAppRight(1, async (type, res) => {
      if (res == 1) {
        //打开-进入选择文件界面
        dataObj.loadHome = true;
        let obj = {}
        obj.ext = dataObj.extension.extension + ",.rar,.zip"
        obj.type = "0"
        appSDK.ndSelectFile(obj).then(res => {
          if (res.code == 1) {
            dataObj.fileObj = res.data;
            dataObj.fileObj.blackExt = dataObj.extension.blackExt
            dataObj.fileObj.extension = dataObj.extension.extension
            dataObj.fileObj.assemblyExt = dataObj.extension.assemblyExt
            console.log('dataObj.fileObj', dataObj.fileObj);
            router.push({
              path: '/openview',
              query: dataObj.fileObj
            })
          } else {
            dataObj.loadHome = false
            if (res.data.msg == "未选择文件") {
              return false;
            } else {
              Toast(res.data.msg);
            }
          }
        });
      }
    });
  } catch (error) {
    dataObj.loadHome = true;
  }
};

const initHome = async () => {
  try {
    let jwToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySUQiOiIxQjVBMjFCNUZCM0NGOEMyIiwidG9rZW4iOiJBSkdNQkdRWEI3VVJUMkgxSk1GNDZaNzI1SDJVSEFKQiIsImV4cGlyZVRpbWUiOiIyMDIzLTA1LTE5IDA4OjE1OjQ0In0.5NljfefwCWwvyBJHSrem1_efhcHLzMWzduXWN8nH1Wg"
    localStorage.setItem("jwtT", jwToken);
  } catch (error) {
    console.log(error);
  }
};
initHome();
// 获取可支持文件后缀
const GetTypeList = async () => {
  try {
    let res = await commonApi.GetTypeList();
    console.log(res);
    if (res.data.status.code != 1) {
      Toast(res.data.status.msg)
      return false;
    }
    dataObj.extension = res.data.data;
  } catch (error) { }
};
GetTypeList()
</script>
<style lang="scss" scoped>
.z-home {
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
  background-color: #fff;

  .h-selectFiless {
    position: absolute;
    top: -200px;
    left: 0;
    height: 50px;
    z-index: -100;
  }

  .h-preview {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 39;
    background-color: #fff;
  }

  .h-selectFile {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 199;
    background: rgba(51, 51, 51, 0.4);
  }

  .h-center {
    position: absolute;
    top: 0;
    left: 16px;
    right: 16px;
    bottom: 0;
    display: flex;
    flex-direction: column;

    /// 头部
    .h-c-head {
      height: 32px;
      line-height: 32px;

      .head-portrait {
        float: left;
        margin: 4px 8px 0 0;
        height: 24px;
        width: 24px;
        border-radius: 50%;
        overflow: hidden;

        img {
          display: block;
          height: 100%;
          width: 100%;
        }
      }

      .head-name {
        float: left;
        text-align: left;
        font-size: 14px;
        font-weight: normal;
        letter-spacing: 0px;
        color: #333333;
        width: 220px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    /// 广告区域
    .h-c-advertising {
      margin-top: 8px;
      height: 90px;
      width: 100%;
      border-radius: 4px;
      background-color: #625;
    }

    /// 上传区域
    .h-c-upload {
      margin: 12px 0 0px;
      height: 122px;
      border-radius: 8px;
      position: relative;
      overflow: hidden;
      background: linear-gradient(180deg,
          rgba(208, 236, 249, 0.33) 0%,
          #def3fe 100%);

      .upload-tag {
        position: absolute;
        top: 0;
        left: 0;
        width: 110px;
        height: 24px;
        // background: url(../assets/img/home/uploadTag.png) no-repeat;
        background-size: cover;
        line-height: 24px;
        text-align: center;
        font-size: 13px;
        font-weight: normal;
        letter-spacing: 0em;
        color: #333;
      }

      .upload-button {
        width: 210px;
        height: 40px;
        margin: 40px auto 0px;
        border-radius: 4px;
        background: linear-gradient(281deg,
            #67a0ff 1%,
            #1780e3 49%,
            #1780e3 101%,
            #3fa5ff 101%);
        font-size: 16px;
        font-weight: normal;
        line-height: 40px;
        letter-spacing: 0em;
        text-align: center;
        color: #ffffff;
      }

      .upload-explain {
        margin: 9px;
        text-align: center;
        font-size: 12px;
        font-weight: normal;
        letter-spacing: 0em;
        color: #1780e3;
        line-height: 16px;
      }
    }

    /// 记录区域
    .h-c-recordTitle {
      margin: 8px;
      height: 32px;
      font-size: 16px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: 0em;
      color: #666666;
      text-align: left;
    }

    .h-c-recordCenter {
      flex: 1;
      width: 100%;
      padding-bottom: 10px;
      overflow: hidden;
      overflow-y: auto;

      .recordCenter-tabLi {
        float: left;
        width: 46%;
        height: 160px;
        border-radius: 6px;
        overflow: hidden;
        position: relative;
        margin-top: 16px;
        background-color: #eee;

        img {
          height: 100% !important;
          width: 100% !important;
          object-fit: cover !important;
        }

        .r-t-typeImg {
          height: 30% !important;
          width: 30% !important;
          margin-top: 20%;
          object-fit: cover !important;
        }

        .tabLi-explain {
          position: absolute;
          bottom: 0;
          height: 60px;
          left: 0;
          width: 100%;
          background: rgba(51, 51, 51, 0.7);

          .explain-top {
            text-align: left;
            margin-top: 8px;
            height: 20px;
            text-indent: 8px;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            letter-spacing: 0em;
            color: #ffffff;
            white-space: nowrap; // 强制一行
            overflow: hidden; // 溢出隐藏
            text-overflow: ellipsis; // 文字溢出显示省略号
          }

          .explain-top-ccc {
            color: #ccc;
          }

          .explain-bottom {
            margin-top: 6px;
            height: 20px;
            line-height: 20px;
            font-size: 12px;
            font-weight: normal;
            line-height: 18px;
            letter-spacing: 0em;
            color: #cccccc;
            z-index: 0;
            text-align: left;

            span {
              display: inline-block;
              margin-left: 8px;
              height: 100%;
            }
          }
        }
      }

      .recordCenter-ul li:nth-child(2n + 1) {
        margin-right: 8%;
      }

      .recordCenter-noData {
        margin: 8px auto;
        width: 160px;
        height: 208px;

        .noData-img {
          height: 160px;
          width: 100%;
          margin: 0 auto;
          // background: url(../assets/img/home/material.png) no-repeat;
          background-size: cover;
        }

        .noData-status {
          line-height: 24px;
          text-align: center;
          font-size: 12px;
          font-weight: normal;
          color: #666666;

          em {
            color: #1780e3;
          }
        }
      }
    }
  }
}

.h-format {
  .format-center {
    margin: 16px 0;
    height: 28px;
    font-size: 16px;
    text-indent: 16px;
    font-family: SourceHanSansCN-Medium;
    font-weight: 500;
    text-align: left;
    line-height: 28px;
  }

  .f-c-bottom {
    width: 240px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 8px auto;
    border-radius: 4px;
    opacity: 1;
    font-size: 16px;
    color: #ffffff;
    font-family: SourceHanSansCN-Regular;
    background: linear-gradient(279deg,
        #67a0ff 1%,
        #1780e3 49%,
        #1780e3 101%,
        #3fa5ff 101%);
  }
}

.h-popup {
  .popup-center {
    height: 100%;
    width: 100%;
    overflow: hidden;
    overflow-y: auto;
    position: relative;
    // background: url(../assets/img/home/loginBj.png) no-repeat;
    background-size: cover;

    .p-c-close {
      position: absolute;
      top: 8px;
      right: 16px;
      width: 24px;
      height: 24px;

      img {
        display: block;
        height: 100%;
        width: 100%;
      }
    }

    .p-c-center {
      margin: 32px 56px 50px;

      .c-c-title {
        height: 60px;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.01em;
        color: #333333;
        text-align: left;

        .c-title-top {
          height: 24px;
        }

        .c-title-bottom {
          margin-top: 12px;
          height: 24px;
        }
      }

      .c-c-tel {
        margin-top: 36px;
        width: 100%;
        height: 48px;
        border-radius: 4px;
        box-shadow: 0px 4px 20px 0px rgba(193, 193, 193, 0.2);
        position: relative;

        .c-tel-err {
          position: absolute;
          bottom: -28px;
          height: 20px;
          left: 0;
          font-size: 14px;
          text-indent: 16px;
          color: #ff0000;
        }

        .t-smshidden {
          color: rgba(23, 128, 227, 0.4);
        }

        .t-smsshow {
          color: rgba(23, 128, 227, 1);
        }

        .t-sendCode {
          font-size: 14px;
          color: #999999;
        }

        .t-smsCode {
          width: 60px;
          height: 32px;
          border-radius: 4px;
          overflow: hidden;
          background-color: pink;
          display: block;

          img {
            height: 100%;
            width: 100%;
            display: block;
          }
        }

        .c-s-button {
          height: 100%;
          width: 100%;
          background: linear-gradient(280deg,
              #67a0ff 1%,
              #1780e3 49%,
              #1780e3 101%,
              #3fa5ff 101%);
          line-height: 48px;
          text-align: center;
          font-size: 16px;
          font-weight: normal;
          letter-spacing: 0em;
          color: #ffffff;
        }

        .c-h-button {
          height: 100%;
          width: 100%;
          background: linear-gradient(280deg,
              #67a0ff 1%,
              #1780e3 49%,
              #1780e3 101%,
              #3fa5ff 101%);
          opacity: 0.4;
          line-height: 48px;
          text-align: center;
          font-size: 16px;
          font-weight: normal;
          letter-spacing: 0em;
          color: #ffffff;
        }
      }

      .c-c-copyright {
        width: 116px;
        height: 24px;
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);

        img {
          height: 100%;
          width: 100%;
          display: block;
        }
      }
    }
  }
}</style>
<style scoped>.c-c-tel>>>.van-field__value {
  line-height: 30px;
  font-size: 16px;
}

.t-sendCode>>>.van-count-down {
  display: inline-block;
  font-size: 14px;
  color: #999999;
}

.c-c-tel>>>.van-cell {
  border-radius: 4px;
  overflow: hidden;
}

.el-table th.el-table__cell {
  background-color: #cccccc !important;
}</style>