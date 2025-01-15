<template>
    <div>
        <div class="box">
            <span>小号标签</span>
            <nd-tag type="primary" size="small">小号标签小号标签小号标签小号标签</nd-tag>
        </div>
        <div class="box">
            <span>中号标签</span>
            <nd-tag type="primary" size="medium">中号标签中号标签中号标签中号标签</nd-tag>
        </div>
        <div class="box">
            <span>大号标签</span>
            <nd-tag type="primary" size="large">大号标签大号标签大号标签大号标签</nd-tag>
        </div>
        <span>自定义样式</span>
        <div class="box" style="display: flex; flex-direction: row; height: 34px; margin: 10px; border-bottom: none">
            <nd-tag :type="1">选中</nd-tag>
            <nd-tag :type="1" :tailoring="true">选中</nd-tag>
            <nd-tag :type="1">选中</nd-tag>
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