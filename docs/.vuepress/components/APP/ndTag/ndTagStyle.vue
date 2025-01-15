<template>
    <div>
        <p class="tips">设置 plain 属性设置为空心样式</p>
        <div class="box">
            <span>空心样式</span>
            <nd-tag plain type="primary">标签</nd-tag>
        </div>
        <p class="tips">设置 round 属性设置为圆角样式</p>
        <div class="box">
            <span>圆角样式</span>
            <nd-tag round type="primary">标签</nd-tag>
        </div>
        <p class="tips">设置 mark 属性设置为标记样式（半圆角）</p>
        <div class="box">
            <span>标记样式</span>
            <nd-tag mark type="primary">标签</nd-tag>
        </div>
        <p class="tips">添加 closeable 属性表示标签是可关闭的，关闭标签时会触发 close 事件，在 close 事件中可以执行隐藏标签的逻辑。</p>
        <div class="box">
            <span>可关闭样式</span>
            <nd-tag closeable :show="show" @close="onClose" type="primary">标签</nd-tag>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import ndTag from '../../../../../src/packages/APP/nd-tag/index';

const show = ref(true);
const onClose = () => {
    show.value = false;
}

</script>
<style scoped>
.box {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
}
.tips {
    font-size: 12px;
}
</style>