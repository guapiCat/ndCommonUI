<template>
    <svg :class="svgClass" :style="{width: props.fontSize + 'px', height: props.fontSize + 'px'}" aria-hidden="true">
        <use :style="{width: props.fontSize + 'px', height: props.fontSize + 'px'}" :xlink:href="iconClassName" :fill="props.color" />
    </svg>
</template>
<script setup>
import { computed } from 'vue';
const props = defineProps({
    iconName: {
        type: String,
        required: true
    },
    className: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: '#666'
    },
    fontSize: {
        type: Number,
        default: 16
    }
});
// 图标在 iconfont 中的名字
const iconClassName = computed(() => {
    return `#${props.iconName}`;
})
// 给图标添加上类名
const svgClass = computed(() => {
    if (props.className) {
        return `svg-icon ${props.className}`;
    }
    return 'svg-icon';
});
</script>
<style scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    position: relative;
    fill: currentColor;
    vertical-align: -2px;
}
</style>