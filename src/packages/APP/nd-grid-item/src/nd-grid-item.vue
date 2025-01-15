<template>
    <van-grid-item
        :url=url
        :to=to
        :replace=replace
        @click="onClick"
    >
        <slot name="icon">
            <van-icon
                :name="props.icon"
                :color="props.iconColor"
                :class-prefix="props.iconPrefix"
                :dot="props.dot"
                :badge="props.badge"
                :badge-props="props.badgeProps"
            />
        </slot>
        <slot name="text">
            <div class="content-box">
                <p class="van-grid-item-title" v-show="title">{{title}}</p>
                <p class="van-grid-item-text" v-show="text">{{text}}</p>
            </div>
        </slot>
        <slot default>

        </slot>
    </van-grid-item>
</template>
<script setup>
import { ref, nextTick, defineProps, defineEmits } from 'vue';

const props = defineProps({
    icon: { //图标名称或图片链接
        type: String,
        default: ''
    },
    title: { //标题文本
        type: String,
        default: ''
    },
    text: { //小正文文本
        type: String,
        default: ''
    },
    iconPrefix: { //图标类名前缀
        type: String,
        default: 'van-icon'
    },
    iconColor: { //图标颜色
        type: String,
        default: 'inherit'
    },
    dot: { //是否显示图标右上角小红点
        type: Boolean,
        default: false
    },
    badge: { //图标右上角徽标内容
        type: String,
        default: ''
    },
    badgeProps: { //自定义徽标的属性
        type: Object,
        default: () => {}
    },
    url: { //点击后跳转的链接地址
        type: String,
        default: ''
    },
    to: { //点击后跳转的目标路由对象
        type: [String, Object],
        default: ''
    },
    replace: { //是否在跳转时替换当前页面历史
        type: Boolean,
        default: false
    }
})

const badge = ref(null)

const emits = defineEmits(['ndGridItemClick'])


// 点击格子触发
const onClick = (event) => {
    emits('ndGridItemClick', event)
}

</script>
<style lang="scss" scoped>
@import '../../common.scss';
.van-grid-item-title {
    width: 100%;
    height: 22px;
    font-family: Source Han Sans CN;
    font-size: 14px;
    line-height: 22px;
    color: $nd-text-color;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.van-grid-item-text {
    width: 100%;
    height: 18px;
    font-family: Source Han Sans CN;
    font-size: 12px;
    line-height: 22px;
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
:deep(.van-icon) {
    width: 32px;
    height: 32px;
    font-size: 32px;
}
:deep(.van-grid-item__content--horizontal) .van-icon {
    width: 44px;
    height: 44px;
    font-size: 44px;
}
:deep(.van-grid-item__content--horizontal) .content-box {
    margin-left: 8px;
    flex: 1;
    text-align: left;
}
:deep(.van-grid-item__content--horizontal) .van-grid-item-title {
    height: 24px;
    font-size: 16px;
    line-height: 24px;
}
:deep(.van-grid-item__content--horizontal) .van-grid-item-text {
    height: 22px;
    font-size: 14px;
    line-height: 22px;
}
:deep(.van-grid-item__content--center) {
    text-align: center;
}
</style>
