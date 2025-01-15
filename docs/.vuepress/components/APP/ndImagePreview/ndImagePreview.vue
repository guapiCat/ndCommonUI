<template>
    <div>
        <div class="btn-box">
            <nd-button type="primary" @click="showImage">查看图片</nd-button>
        </div>
        <div class="btn-box">
            <nd-button type="primary" @click="showImage(1)">查看第二张图片</nd-button>
            <nd-button type="primary" @click="showImage2">查看零件库图片</nd-button>
        </div>
        <nd-image-preview
            v-model:show="show"
            :images="images"
            @change="onChange"
            ref="ndImagePreviewRef"
        >
            <template v-slot:index>
                第{{index+1}}页
            </template>
            <!-- <template #image="{ src }">
                <img class="img" :src="src" alt="">
            </template> -->
            <!-- <template #cover>
                <p>aaaaaaaaaaaa</p>
            </template> -->
        </nd-image-preview>

        <nd-image-preview v-model:show="show2" :images="images2" @change="onChange" >
            <template v-slot:index> 第{{index+1}}页 </template>
        </nd-image-preview>
    </div>
</template>
<script setup>
import { ref, reactive, nextTick } from 'vue';
import ndButton from '../../../../../src/packages/APP/nd-button/index';
import ndImagePreview from '../../../../../src/packages/APP/nd-image-preview/index.js';
import widthImg from './image/很宽的.png';
import heightImg from './image/很长的.jpg';

const show = ref(false);
const show2 = ref(false);
const index = ref(0);
const images = [
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    widthImg,
    heightImg,
]
const ndImagePreviewRef = ref(null);
const images2 = [
    "https://supplierstatic.oss-cn-hangzhou.aliyuncs.com/supplier/9598890442154/16734/5901151236924/03/3399868173532.jpg",
    "https://supplierstatic.oss-cn-hangzhou.aliyuncs.com/supplier/9598890442154/16734/5901151236924/03/6900804888605.png",
    "https://supplierstatic.oss-cn-hangzhou.aliyuncs.com/supplier/9598890442154/16734/5901151236924/03/6000804891304.jpg"
]
const onChange = (newIndex) => {
    index.value = newIndex;
}

const showImage = (index=0) => {
    show.value = true;
    nextTick(() => { 
        ndImagePreviewRef.value.ndSwipeTo(index)
    })
}

const showImage2 = () => {
    show2.value = true;
}

</script>
<style scoped>
.btn-box {
    margin-top: 20px;
}
</style>