<template>
  <div>
    <header class="header-wrap">
      <div class="clearfix header">
        <a class="top-left" @click="toHome(2)">
          <span class="ico top-icoBack"></span>
        </a>
        <h2 class="top-tit">打开图纸</h2>
      </div>
    </header>
    <section class="section-wrap0 pr">
      <Loading
        vertical
        style="position: absolute;top: 50%;left: 50%; transform: translate(-50%, -50%);"
      >
        获取文件信息中,请稍候...
      </Loading>
    </section>
  </div>
</template>
<script setup>
import * as commonApi from "@/api/commonApi";
import {
  reactive,
} from "vue";
import { getAppErrorMsg } from "@/utils/common";
import {
  Toast,
  Loading,
  Dialog
} from "vant";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();

const dataObj = reactive({
  fileObj: {},
  loadHome: false,
  extension: {},
  state: {

  }
});

const toHome = () => {
  router.push({
    path: "/home"
  });
};
const init = async () => {
  try {
    let Typeres = await commonApi.GetTypeList();
    if (Typeres.data.status.code != 1) {
      Toast(Typeres.data.status.msg);
      return false;
    }
    dataObj.extension = Typeres.data.data;
    let jwtT = localStorage.getItem("jwtT");
    if(!jwtT) {
      router.push({
        path: "/home"
      });
      return false
    }
    appSDK.ndCheckAppRight(1, async (type, res) => {
      console.log(`ndCheckAppRight = function (${type},${res})`);
      if (res == 1) {
        var res = await appSDK.ndGetOtherAppFileName();
        if (res.code != 1) {
          Dialog({
            title: "",
            message: "您的文件可能因加密等因素，暂时无法打开查看"
          }).then(() => {
            router.push({
              path: "/home"
            });
          });
        } else {
          if (res.data.status == 1) {
            dataObj.fileObj.fileName = res.data.fileName;
            dataObj.fileObj.fileID = res.data.fileID;
            dataObj.fileObj.fileSize = res.data.fileSize;
            dataObj.fileObj.md5 = res.data.md5;
            dataObj.fileObj.zfileName = res.data.zfileName;
            dataObj.fileObj.blackExt = dataObj.extension.blackExt;
            dataObj.fileObj.extension = dataObj.extension.extension;
            dataObj.fileObj.assemblyExt = dataObj.extension.assemblyExt;
            console.log("dataObj.fileObj", dataObj.fileObj);
            router.push({
              path: "/openview",
              query: dataObj.fileObj
            });
          } else {
            Dialog({
              title: "",
              message: getAppErrorMsg(res.data.status)
            }).then(() => {
              router.push({
                path: "/home"
              });
            });
          }
        }
      } else {
        Dialog({
            title: "",
            message: "没有权限，请开启权限之后重试"
          }).then(() => {
            router.push({
              path: "/home"
            });
          });
        // setError("没有权限，请开启权限之后重试");
        // state.pageDesc = "default";
        // state.title = "打开图纸";
        // initScroll();
      }
    });
  } catch (error) {}
};
init();
</script>
<style lang="scss" scoped>
.z-home {
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
  background-color: #fff;
}
</style>
<style scoped>
</style>