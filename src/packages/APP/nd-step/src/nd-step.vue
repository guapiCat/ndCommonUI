<template>
    <van-step v-bind="$attrs" v-on="$attrs" v-if="props.isError">
        <slot default>
        </slot>
        <template v-slot:active-icon>
            <van-icon :name="parent.errorIcon" :color="parent.errorColor" :size="data.size" style="background-color: #fff;" />
        </template>
        <template v-slot:inactive-icon>
            <van-icon :name="parent.errorIcon" :color="parent.errorColor" :size="data.size" style="background-color: #fff;" />
        </template>
        <template v-slot:finish-icon>
            <van-icon :name="parent.errorIcon" :color="parent.errorColor" :size="data.size" style="background-color: #fff;" />
        </template>
    </van-step>

    <van-step v-bind="$attrs" v-on="$attrs" v-else-if="parent.type == 1 || parent.type == 2">
        <slot default>
        </slot>
        <template v-slot:active-icon>
            <div class="nd-step-icon-content-active" :style="{'background-color': parent.activeColor}">{{index + 1}}</div>
        </template>
        <template v-slot:inactive-icon>
            <div v-if="parent.type == 1" class="nd-step-icon-content-border" :style="{'border-color': parent.inactiveColor}">{{index + 1}}</div>
            <div v-else class="nd-step-icon-content" :style="{'background-color': parent.inactiveColor}">{{index + 1}}</div>
        </template>
        <template v-slot:finish-icon>
            <van-icon v-if="parent.type == 2" :name="parent.finishIcon == '' ? 'checked' : parent.finishIcon"
            :color="parent.activeColor" :size="data.size" style="background-color: #fff;" />
            <van-icon v-else :name="parent.finishIcon == '' ? 'passed' : parent.finishIcon" :color="parent.activeColor"
                :size="data.size" style="background-color: #fff;" />
        </template>
    </van-step>

    <van-step v-bind="$attrs" v-on="$attrs" v-else>
        <slot default>
        </slot>
    </van-step>
</template>
<script setup>
import { reactive, nextTick,inject} from "vue";
const parent = inject('nd-steps');

const props = defineProps({
    isError: {
        type: Boolean,
        default: false
    },
    index: {
        type: Number,
        default: 0
    }
})

// 页面数据
const data = reactive({
    size: 12
});
// 页面加载完成
nextTick(() => {
    if (parent.type == 1 || parent.type == 2) {
        data.size = 24;
    }
})
</script>
<style scoped>
.nd-step-icon-content-active {
    text-align: center;
    line-height: var(--van-step-circle-height);
    background-color: var(--van-step-circle-active-color);
    width: var(--van-step-circle-width);
    height: var(--van-step-circle-height);
    border-radius: 50%;
    color: #fff;
}

.nd-step-icon-content-border {
    text-align: center;
    line-height: var(--van-step-circle-height);
    background-color: #fff;
    width: var(--van-step-circle-width);
    height: var(--van-step-circle-height);
    border-radius: 50%;
    border: 1px solid var(--van-step-circle-default-color);
    color: var(--van-step-circle-default-color);
}

.nd-step-icon-content {
    text-align: center;
    line-height: var(--van-step-circle-height);
    background-color: var(--van-step-circle-default-color);
    width: var(--van-step-circle-width);
    height: var(--van-step-circle-height);
    border-radius: 50%;
    color: #fff;
}
</style>