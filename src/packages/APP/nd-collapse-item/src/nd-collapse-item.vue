<template>
    <van-collapse-item
        :name="props.name"
        :icon="props.icon"
        :size="props.size"
        :title="props.title"
        :value="props.value"
        :label="props.label"
        :border="props.border"
        :isLink="props.isLink"
        :disabled="props.disabled"
        :readonly="props.readonly"
        :lazyRender="props.lazyRender"
        :titleClass="props.titleClass"
        :valueClass="props.valueClass"
        :labelClass="props.labelClass"
        ref="vanCollapseItemRef"
    >
        <template #default >
            <slot name="default" />
        </template>
        <template #title v-if="slots.title">
            <slot name="title" />
        </template>
        <template #value v-if="slots.value">
            <slot name="value" />
        </template>
        <template #label v-if="slots.label">
            <slot name="label" />
        </template>
        <template #icon v-if="slots.icon">
            <slot name="icon" />
        </template>
        <template #right-icon v-if="slots.rightIcon">
            <slot name="rightIcon" />
        </template>
        <!-- <template #right-icon>
            <div>aa<van-icon name="question-o" /></div>
        </template> -->
    </van-collapse-item>
</template>
<script setup>
import { defineProps, defineEmits, useSlots, ref, defineExpose } from 'vue';

const props = defineProps({
    name: { // 唯一标识符，默认为索引值
        type: [Number, String],
    },
    icon: { // 标题栏左侧图标名称或图片链接
        type: String,
    },
    size: { // 标题栏大小，可选值为 large
        type: String,
    },
    title: { // 标题栏左侧内容
        type: [String, Number],
        default: ''
    },
    value: { // 标题栏右侧内容
        type: [String, Number],
        default: ''
    },
    label: { // 标题栏描述信息
        type: [String, Number],
        default: ''
    },
    border: { // 是否显示内边框
        type: Boolean,
        default: true
    },
    isLink: { // 是否展示标题栏右侧箭头并开启点击反馈
        type: Boolean,
        default: true
    },
    disabled: { // 是否禁用面板
        type: Boolean,
        default: false
    },
    readonly: { // 是否为只读状态，只读状态下无法操作面板
        type: Boolean,
        default: false
    },
    lazyRender: { // 是否在首次展开时才渲染面板内容
        type: Boolean,
        default: false
    },
    titleClass: { // 左侧标题额外类名
        type: String,
    },
    valueClass: { // 右侧内容额外类名
        type: String,
    },
    labelClass: { // 描述信息额外类名
        type: String,
    }
})

const slots = useSlots();

const emits = defineEmits(['change']);

const vanCollapseItemRef = ref(null);
const ndToggle = (boo=null) => {
    if (boo === null) {
        vanCollapseItemRef.value?.toggle();
    } else {
        vanCollapseItemRef.value?.toggle(boo);
    }
}

defineExpose({ndToggle});

</script>
<style lang="scss" scoped>

</style>