<template>
    <div>
        <nd-swipe-cell>
            <template #left>
                <nd-button type="primary" class="side-btn">选择</nd-button>
            </template>
            <div class="box">
                <p>单元格</p>
                <p>内容</p>
            </div>
            <template #right>
                <nd-button type="danger" class="side-btn">删除</nd-button>
                <nd-button type="primary" class="side-btn">收藏</nd-button>                
            </template>
        </nd-swipe-cell>
    </div>
</template>
<script setup>
import ndButton from '../../../../../src/packages/APP/nd-button/index';
import ndSwipeCell from '../../../../../src/packages/APP/nd-swipe-cell/index.js';

</script>
<style lang="scss" scoped>
.box {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.side-btn {
    height: 100%;
}
</style>