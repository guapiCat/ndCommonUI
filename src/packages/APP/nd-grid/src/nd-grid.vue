<template>
    <div class="nd-grid" ref="ndGrid" :style="{'padding-top': gutter + 'px', 'padding-bottom': gutter + 'px'}">
        <van-grid
            :column-num=columnNum
            :gutter=gutter
            :border=border
            :center=center
            :square=square
            :clickable=clickable
            :direction=direction
            :reverse=reverse
        >
            <slot default>

            </slot>
        </van-grid>
    </div>
</template>
<script setup>
import { defineProps, defineEmits, nextTick } from 'vue';

const props = defineProps({
    columnNum: { // 自定义列数
        type: Number,
        default: 4
    },
    gutter: { // 格子间距，默认单位为px
        type: [String, Number],
        default: 0
    },
    center: { // 是否将格子内容居中显示
        type: Boolean,
        default: true
    },
    border: { // 是否显示边框
        type: Boolean,
        default: true
    },
    square: { // 是否将格子固定为正方形
        type: Boolean,
        default: false
    },
    clickable: { // 是否开启格子点击反馈
        type: Boolean,
        default: false
    },
    direction: { // 格子内容排列的方向，可选值'vertical'、'horizontal'
        type: String,
        default: 'vertical'
    },
    reverse: { // 是否调换图标和文本的位置
        type: Boolean,
        default: false
    }
})


const emits = defineEmits(['']);

// 
const onClick = (event) => {}
</script>
<style lang="scss" scoped>
@import '../../common.scss';
.nd-grid {
    background: $nd-default-bgcolor;
    
}
:deep(.van-grid) {
    background: $nd-default-bgcolor;
}
:deep(.van-grid-item) {
    background: $nd-default-bgcolor;
    overflow: hidden;
}
:deep(.van-grid-item__content) {
    background: $nd-white;
}
</style>
