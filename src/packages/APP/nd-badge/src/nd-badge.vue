<template>
    <van-badge
        :content="props.content"
        :color="props.color"
        :dot="props.dot"
        :max="props.max"
        :offset="props.offset"
        :showZero="props.showZero"
        :position="props.position"
        :size="props.size"
    >
        <template #default>
            <slot name="default"></slot>
        </template>
        <template #content v-if="slots.content">
            <slot name="content"></slot>
        </template>
        
    </van-badge>
</template>
<script setup>
import { defineProps, useSlots } from 'vue';
const slots = useSlots();

const props = defineProps({
    content: { //徽标内容
        type: [String, Number],
        default: ''
    },
    color: { //徽标背景颜色
        type: String,
        default: '#ee0a24'
    },
    dot: { //是否展示为小红点
        type: Boolean,
        default: false
    },
    max: { //最大值，超出会显示 {max}+，仅当 content 为数字时有效
        type: [Number, String],
        default: Infinity
    },
    offset: { //偏移量。数组的两项分别对应水平向右和垂直向下方向的偏移量
        type: Array,
        // default: false
    },
    showZero: { //当 content 为数字 0 或字符串 "0" 时，是否展示徽标
        type: Boolean,
        default: true
    },
    position: { //徽标位置
        type: String,
        default: 'top-right'
    },
    size: {     // 徽标字体大小
        type: [String, Number],
        default: '12px',
    }
})
</script>

