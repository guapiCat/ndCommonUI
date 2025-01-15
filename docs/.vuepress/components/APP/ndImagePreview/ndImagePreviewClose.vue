<template>
    <div>
        <div class="btn-box">
            <nd-button type="primary" @click="showImage">查看图片</nd-button>
        </div>
        <nd-image-preview
            v-model:show="show"
            :images="images"
            closeable
            @change="onChange"
        >
            <template v-slot:index>
                第{{index+1}}页
            </template>
        </nd-image-preview>
    </div>
</template>
<script setup>
import { ref, reactive, nextTick } from 'vue';
import ndButton from '../../../../../src/packages/APP/nd-button/index';
import  ndImagePreview  from '../../../../../src/packages/APP/nd-image-preview/index.js';

const show = ref(false);
const index = ref(0);
const images = [
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg'
]

const onChange = (newIndex) => {
    index.value = newIndex;
}

const showImage = () => {
    show.value = true;
}


</script>
<style scoped>
.btn-box {
    margin-top: 20px;
}
</style>