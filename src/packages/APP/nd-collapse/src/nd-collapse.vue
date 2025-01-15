<template>
    <van-collapse ref="vanCollapseRef" v-bind="$attrs" :accordion="props.accordion">
        <slot />
    </van-collapse>
</template>
<script setup>
import { ref, defineProps, defineEmits, defineExpose } from 'vue';

const props = defineProps({
    active: { // 当前展开的面板
        type: Object,
        default: {
            activeIndex: []
        }
    },
    accordion: { // 是否开启手风琴模式
        type: Boolean,
        default: false
    },
    border: { // 是否显示外边框
        type: Boolean,
        default: true
    }
})

const emits = defineEmits(['change']);

const onChange = (activeNames) => {
    emits('change', activeNames);
}

const vanCollapseRef = ref(null);

const ndToggleAll = (boo=null) => {
    console.log(boo)
    if (boo === null) {
        vanCollapseRef.value?.toggleAll();
    } else {
        vanCollapseRef.value?.toggleAll(boo);
    }
}

defineExpose({ndToggleAll})

</script>
<style lang="scss" scoped>

</style>