<template>
    <div>
        <div class="box">
            <span>背景颜色</span>
            <nd-tag color="#7232dd">标签</nd-tag>
        </div>
        <div class="box">
            <span>文字颜色</span>
            <nd-tag color="#ffe1e1" text-color="#ad0000">标签</nd-tag>
        </div>
        <div class="box">
            <span>空心颜色</span>
            <nd-tag color="#7232dd" plain>标签</nd-tag>
        </div>
    </div>
</template>
<script setup>
import ndTag from '../../../../../src/packages/APP/nd-tag/index';



</script>
<style scoped>
.box {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
}
</style>