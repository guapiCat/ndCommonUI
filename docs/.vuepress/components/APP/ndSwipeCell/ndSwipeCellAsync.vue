<template>
    <div>
        <nd-swipe-cell :before-close="beforeClose">
            <template #left>
                <nd-button type="primary" class="side-btn">选择</nd-button>
            </template>
            <div class="box">
                <p>单元格</p>
                <p>内容</p>
            </div>
            <template #right>
                <nd-button type="danger" class="side-btn">删除</nd-button>              
            </template>
        </nd-swipe-cell>
    </div>
</template>
<script setup>
import { showConfirmDialog } from 'vant';
import ndButton from '../../../../../src/packages/APP/nd-button/index';
import ndSwipeCell from '../../../../../src/packages/APP/nd-swipe-cell/index.js';

const beforeClose = ({ position }) => {
    console.log(position);
    switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
            return true;
        case 'right':
            return new Promise((resolve, reject) => {
                showConfirmDialog({
                    title: '确定删除吗？'
                }).then(resolve).catch(reject);
            })
    }
}
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