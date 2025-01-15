<template>
  <div class="demo-container">

    <div
        class="demo-item"
        v-loading="loadingCtrl"
        element-loading-background="rgba(255, 255, 255, 0.8)">
    </div>

    <div
        class="demo-item"
        v-loading="loadingCtrl"
        element-loading-background="rgba(0, 0, 0, 0.8)">
    </div>

    <div
        class="demo-item"
        v-loading="loadingCtrl"
        element-loading-text="loading"
        element-loading-background=" rgba(255, 255, 255, 0.8)">
    </div>

    <div
        class="demo-item"
        v-loading="loadingCtrl"
        element-loading-text="loading"
        element-loading-background="rgba(0, 0, 0, 0.8)">
    </div>

  </div>
</template>

<script>
export default {
  name: "ndLoading.vue",
  setup() {
    return {
      loadingCtrl: true,
    }
  }
}
</script>

<style scoped lang="less">
.demo-container {
  background: #EFEFEF;
  padding: 20px;

  .demo-item {
    height: 150px;
    margin-top: 20px;
  }
}
</style>
