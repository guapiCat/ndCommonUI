<template>
    <van-pull-refresh v-bind="$attrs" v-on="$attrs" v-model="loading.isLoading" :disabled="loading.isLoading || refreshDisable" class="nd-pull-refresh">
        <!-- <slot name="default" /> -->
        <div class="nd-pull-refresh-box" ref="ndPullRefreshBox" @scroll="ndScroll">
            <slot name="default" />
        </div>
        <template #normal v-if="slots.normal">
            <slot name="normal" />
        </template>
        <template #pulling v-if="slots.pulling">
            <slot name="pulling" />
        </template>
        <template #loosing v-if="slots.loosing">
            <slot name="loosing" />
        </template>
        <template #loading v-if="slots.loading">
            <slot name="loading" />
        </template>
        <template #success v-if="slots.success">
            <slot name="success" />
        </template>
    </van-pull-refresh>
</template>
<script setup>
import { ref, defineProps, defineEmits, useSlots, onMounted, nextTick } from 'vue';

const props = defineProps({
    loading: { // 是否处于加载中状态
        type: Object,
        default: {
            isLoading: false
        }
    },
    pullingText: { // 下拉过程提示文案
        type: String,
        default: '下拉即可刷新...'
    },
    loosingText: { // 释放过程提示文案
        type: String,
        default: '释放即可刷新...'
    },
    loadingText: { // 加载过程提示文案
        type: String,
        default: '加载中...'
    },
    successText: { // 刷新成功提示文案
        type: String,
    },
    successDuration: { // 刷新成功提示展示时长(ms)
        type: [Number, String],
        default: 500
    },
    animationDuration: { // 动画时长
        type: [Number, String],
        default: 300
    },
    headHeight: { // 顶部内容高度
        type: [Number, String],
        default: 50
    },
    pullDistance: { // 触发下拉刷新的距离
        type: [Number, String],
    },
    disabled: { // 是否禁用下拉刷新
        type: Boolean,
        default: false
    },
    contentHeight: { // 内容区域高度
        type: [Number, String],
    },
    bottomOffset: { // 底部触发加载更多的边界距离
        type: Number,
        default: 0
    }
})
const slots = useSlots();
const emits = defineEmits(['loadMore'])
const ndPullRefreshBox = ref(null);
const refreshDisable = ref(false);

nextTick(() => {
    if (props.contentHeight) {
        ndPullRefreshBox.value.style.height = props.contentHeight + 'px';
    }
})
onMounted(() => {
    refreshDisable.value = props.disabled;
})
const ndScroll = () => {
    nextTick(() => {
        let scrollTop = ndPullRefreshBox.value.scrollTop;
        let scrollDistance = ndPullRefreshBox.value.scrollHeight - scrollTop - ndPullRefreshBox.value.clientHeight;

        // fix:下拉刷新问题处理
        if(scrollTop == 0 && !props.disabled) {
            refreshDisable.value = false;
        } else {
            refreshDisable.value = true;
        }
        
        if (scrollDistance <= props.bottomOffset) {
            if (props.loading.isLoading) {
                return false;
            }
            emits('loadMore');
        }
    })
}
</script>
<style lang="scss" scoped>
.nd-pull-refresh-box {
    height: 100%;
    overflow-y: scroll;
}
.nd-pull-refresh {
    height: 100%;
}
</style>