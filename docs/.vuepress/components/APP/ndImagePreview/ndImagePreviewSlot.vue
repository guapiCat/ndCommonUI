<template>
    <div>
        <div class="btn-box">
            <nd-button type="primary" @click="showImage">查看视频</nd-button>
        </div>
        <nd-image-preview
            v-model:show="show"
            :images="images2"
        >
            <template #image="{ src }">
                <video class="video" :src="src" controls>
                    <!-- <source :src="src" /> -->
                </video>
            </template>
            <!-- <template #cover>
                <video class="video" :src="src" controls></video>
            </template> -->
        </nd-image-preview>
    </div>
</template>
<script setup>
import { ref, reactive, nextTick } from 'vue';
import ndButton from '../../../../../src/packages/APP/nd-button/index';
import  ndImagePreview  from '../../../../../src/packages/APP/nd-image-preview/index.js';
import video1 from './image/video.mp4';
import video2 from './image/video2.mp4';

const show = ref(false);
const images = [
    video1,
    video2,
    video1
]
const images2 = [
    'https://www.w3school.com.cn/i/movie.ogg',
    'https://www.w3school.com.cn/i/movie.ogg'
]
const src = ref('');
src.value = images[0];

const showImage = () => {
    show.value = true;
}

// const onChange = (newIndex) => {
//     src.value = images[newIndex];
// }

</script>
<style scoped>
.btn-box {
    margin-top: 20px;
}
.video {
    width: 100%;
    height: 500px;
}
</style>