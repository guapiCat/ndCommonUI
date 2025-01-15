<template>
    <ndUpload ref="Cropper" :headPortrait="data.Portrait" @nextUploadImg="nextUploadImg"></ndUpload>
    <nd-button style="margin-top: 20px;" type="warning" @click="toOpenShar()" content="导出"></nd-button>
</template>
<script setup>
import { reactive, ref } from "vue";
import ndButton from '../../../../../src/packages/PC/nd-button/src/nd-button.vue';
import ndUpload from '../../../../../src/packages/PC/nd-upload/index.js';
const Cropper = ref(null)
const data = reactive({
    showShar: false,
    isSharing: false,
    Portrait: {
      imgSrc: "https://zhizaoyun-static.oss-cn-hangzhou.aliyuncs.com/Login/images/face/4208632.jpg?1229848034?1192700737"
    }
})
const nextUploadImg = (file, cc) => {
    cc(file, 1)
    // cc(file, 1, 2 / 1, 200, 100)
}

const toOpenShar = async () => {
    let res = await Cropper.value.GetData()
    console.log(res);
}

</script>
<style lang="scss" scoped>
.sharing {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 66;
}
</style>
