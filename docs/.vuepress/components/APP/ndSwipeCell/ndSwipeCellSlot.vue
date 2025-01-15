<template>
    <div>
        <nd-swipe-cell>
            <template #left>
                <nd-button type="primary" class="side-btn">选择</nd-button>
            </template>
            <div class="box">
                <img src="./car.png" alt="">
                <div>
                    <p class="p-title">单元格标题</p>
                    <p class="p-content">内容</p>
                </div>
            </div>
            <template #right>
                <nd-button type="danger" class="side-btn">删除</nd-button>              
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
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        width: 60px;
        height: 60px;
    }
    div {
        margin-left: 10px;
        .p-title {
            height: 26px;
            font-size: 14px;
            line-height: 26px;
            color: #333;
        }
        .p-content {
            height: 20px;
            font-size: 12px;
            line-height: 20px;
            color: #666;
            margin-right: 4px;
        }
    }
}
.side-btn {
    height: 100%;
}
</style>