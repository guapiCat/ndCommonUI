<template>
    <van-password-input v-bind="$attrs" :class="{'nd-password-input-line': props.bottomLine}"></van-password-input>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    bottomLine: {
        type: Boolean,
        default: false
    }
})
</script>
<style lang="scss" scoped>
@import '../../common.scss';
:deep(.van-password-input__security) {
    margin-left: 0px !important;
}
:deep(.van-password-input__item) {
    border-radius: 8px;
}
.nd-password-input-line {
    :deep(.van-password-input__item) {
        background: transparent;
        position: relative;
    }
    :deep(.van-password-input__item::before) {
        content: '';
        width: 100%;
        height: 2px;
        background: #323233;
        position: absolute;
        left: 0;
        bottom: 0;
    }
}
</style>