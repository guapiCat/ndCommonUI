<template>
    <div>
        <p>加载类型</p>
        <div class="flex-box">
            <nd-loading />
            <nd-loading type="spinner" />
        </div>
        <p>自定义颜色</p>
        <div class="flex-box">
            <nd-loading color="#1989fa" />
            <nd-loading type="spinner" color="#1989fa" />
        </div>
        <p>自定义大小</p>
        <div class="flex-box">
            <nd-loading size="24" />
            <nd-loading type="spinner" size="24px" />
        </div>
        <p>加载文案</p>
        <div class="flex-box">
            <nd-loading size="24px">加载中...</nd-loading>
        </div>
        <p>垂直排列</p>
        <nd-loading size="24px" vertical>加载中...</nd-loading>
        <p>自定义文案颜色</p>
        <nd-loading text-color="#0094ff" vertical>加载中...</nd-loading>
        <p>自定义图标</p>
        <div class="flex-box">
            <nd-loading>
                <template #icon>
                    <van-icon name="star-o" size="30" />
                </template>
                加载中...
            </nd-loading>
        </div>
    </div>
</template>
<script setup>
import ndLoading from '../../../../../src/packages/APP/nd-loading/index';


</script>
<style scoped>
.flex-box {
    display: flex;
    justify-content: space-evenly;
}
</style>
