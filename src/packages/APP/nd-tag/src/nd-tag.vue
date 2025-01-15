<template>
    <van-tag v-bind="$attrs" :class="`${type==1 ? 'purposeMade' : ''} ${tailoring ? 'tailoring' : ''}`">
        <slot />
    </van-tag>
</template>
<script setup>
import { defineProps } from "vue";
const porps = defineProps({
    tailoring: {
        type: Boolean,
        default: false
    },
    type: {
        type: Number,
        default: 0
    }
});
</script>
<style lang="scss" scoped>
.purposeMade {
    background: rgba(51, 51, 51, 0.05);
    color: #333333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.van-tag--small {
    font-size: 12px;
    line-height: 20px;
    padding: 0 4px;
}

.van-tag--large {
    line-height: 22px;
    max-width: 100px !important;
}

.van-tag {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 85px;
    display: inline-block;
}
.tailoring {
    border: 1px solid #1780E3 !important;
    background: rgba(23, 128, 227, 0.05) !important;
}

.tailoring::after {
    content: '';
    display: block;
    width: 20px;
    height: 17px;
    // background-image无法引用本地资源，故需要用网络地址
    background-image: url('./img/rightTop.png');
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    right: 0;
}
</style>