<template>
    <div>
        <div class="btn-box">
            <nd-button type="primary" @click="showImage">预览图片</nd-button>
        </div>
        <div class="btn-box">
            <p>通过 startPosition 选项指定图片的初始位置（索引值）</p>
            <nd-button type="primary" @click="showImage2">指定初始位置</nd-button>
        </div>
        <div class="btn-box">
            <p>设置 closeable 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 close-icon 属性自定义图标，使用close-icon-position 属性可以自定义图标位置。</p>
            <nd-button type="primary" @click="showImage3">展示关闭按钮</nd-button>
        </div>
        <div class="btn-box">
            <p>通过 onClose 选项监听图片预览的关闭事件。</p>
            <nd-button type="primary" @click="showImage4">监听关闭事件</nd-button>
        </div>
        <div class="btn-box">
            <p>通过 beforeClose 属性可以拦截关闭行为。</p>
            <nd-button type="primary" @click="showImage5">异步关闭</nd-button>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, nextTick } from 'vue';
import ndButton from '../../../../../src/packages/APP/nd-button/index';
import {showToast} from  '../../../../../src/packages/APP/nd-toast/index.js'
import  ndImagePreview from '../../../../../src/packages/APP/nd-image-preview/index.js';
import widthImg from './image/很宽的.png';
import heightImg from './image/很长的.jpg';

const images = [
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    widthImg,
    heightImg,
]


const showImage = () => {
    // ndShowImagePreview(images)
}

const showImage2 = () => {
    // ndShowImagePreview({
    //     images,
    //     startPosition: 1
    // })
}

const showImage3 = () => {
    // ndShowImagePreview({
    //     images,
    //     closeable: true,
    // })
}

const showImage4 = () => {
    // ndShowImagePreview({
    //     images,
    //     onClose() {
    //         showToast({message:'关闭'})
    //     },
    // })
}

const showImage5 = () => {
    // const instance = ndShowImagePreview({
    //     images,
    //     beforeClose: () => false,
    // })
    setTimeout(() => {
        instance.close();
    }, 2000)
}

</script>
<style scoped>
.btn-box {
    margin-top: 20px;
}
</style>