<template>
  <div>
    <header class="header-wrap">
      <div class="clearfix header">
        <a class="top-left" @click="toHome(2)">
          <span class="ico top-icoBack"></span>
        </a>
        <h2 class="top-tit">预览图纸</h2>
      </div>
    </header>
    <section class="section-wrap0 pr">已完成上传</section>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();
const toHome = () => {
  console.log('route', route.query);
  if(route.query.isBack == 1){
    let Obj = JSON.parse(JSON.stringify(route.query))
    delete Obj.isBack
    delete Obj.itemCode
    router.push({
        name: "openview",
        query: Obj
      });
  }else{
    router.push({
      path: "/home"
    });
  }
};
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
<style scoped></style>