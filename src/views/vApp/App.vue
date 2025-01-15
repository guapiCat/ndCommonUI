<template>
  <div id="Home" class="flex">
    <!-- <van-nav-bar safe-area-inset-top /> -->
    <div class="Home" v-if="showApp">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
      <!-- 处理pc端页面不需要缓存的问题  不需要缓存的keepAlive设置为true  -->
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
    <!-- <van-number-keyboard safe-area-inset-bottom /> -->
  </div>
</template>
<script setup>

import {
  ref,
  onMounted,
  onBeforeMount,
} from "vue";

// 待判断完环境后再加载页面
const showApp = ref(false);
// 判断环境的方法
const initApp = async () => {
  try {
    let jwToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySUQiOiIxQjVBMjFCNUZCM0NGOEMyIiwidG9rZW4iOiJBSkdNQkdRWEI3VVJUMkgxSk1GNDZaNzI1SDJVSEFKQiIsImV4cGlyZVRpbWUiOiIyMDIzLTA1LTE5IDA4OjE1OjQ0In0.5NljfefwCWwvyBJHSrem1_efhcHLzMWzduXWN8nH1Wg"
    localStorage.setItem("jwtT", jwToken);
    let res = await window.appSDK.ndIsApp();
    let zisapp = res.code;
    localStorage.setItem("isApporPc", zisapp);
    if (zisapp == 1 || zisapp == 2) {
      window.isInApp = true;
    } else {
      window.isInApp = false;
    }
    showApp.value = true;
  } catch (error) {
    console.log(error, "error");
    showApp.value = true;
    window.isInApp = false;
  }
};

// 加载前
onBeforeMount(async () => {
  initApp();
});

// 加载后
onMounted(async () => {
  try {
    // 清除入口默认loading
    let zdom = document.getElementById("appzIndex");
    if (zdom) {
      setTimeout(() => {
        document.body.removeChild(zdom);
      }, 100);
    }
  } catch (error) {
    console.log(error, "error");
  }
});
</script>
<style scoped>
#Home {
  height: 100%;
  width: 100%;
}
.Home {
  height: 100%;
  width: 100%;
}
</style>