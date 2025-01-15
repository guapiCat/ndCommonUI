<template>
    <div class="nd-image-preview-box" >
        <van-image-preview v-bind="$attrs" ref="vanImagePreviewRef">
            <!-- <slot default /> -->
            <template #index v-if="slots.index">
                <slot name="index" />
            </template>
            <template #cover v-if="slots.cover">
                <slot name="cover" />
            </template>
            <template #image v-if="slots.image">
                <slot name="image" />
            </template>
        </van-image-preview>
    </div>
</template>
<script setup>
import { ref, useSlots, defineExpose, nextTick } from 'vue';

const vanImagePreviewRef = ref(null);

const ndSwipeTo = (index) => {
    nextTick(() => {
        vanImagePreviewRef.value.swipeTo(index);
    })
}


defineExpose({ndSwipeTo})

const slots = useSlots();


</script>
<style lang="scss" scoped>
@import '../../common.scss';

:deep(.van-image-preview__close-icon--top-right) {
    top: 24px;
    right: 20px;
}
:deep(.van-image-preview__index) {
    height: 22px;
    line-height: 22px;
    font-size: 14px;
    top: 26px;
}
:deep(.van-image-preview__cover) {
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
}
// :deep(.van-image__error) {
//     display: none;
// }
</style>