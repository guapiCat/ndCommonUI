<template>
    <van-tabbar-item class="comp-tabbar-item" v-bind="$attrs" v-on="$attrs" :icon="icon" @click.stop="clickItem">
        <slot v-if="!!slots" name="default"></slot>
        <template v-if="!!slots">{{ label }}</template>
        <template v-if="!!urlActive && !!slots" #icon="props">
            <img class="icon-img" :src="props.active ? urlActive : urlInactive" />
        </template>
    </van-tabbar-item>
</template>

<script>
export default {
    props: {
        clickFn: {
            // 自定义点击事件
            type: Function,
            default: null,
            required: false
        },
        label: {
            // tabbar显示title
            type: [String, Number],
            default: '',
            required: true
        },
        icon: {
            // 使用的icon图表名
            type: String,
            default: '',
            required: false
        },
        urlActive: {
            // 使用自定义图片 -- 选中状态
            type: String,
            default: '',
            required: false,
        },
        urlInactive: {
            // 使用自定义图片 -- 未选中状态
            type: String,
            default: '',
            required: false,
        }
    },
    setup(props, { slots, attrs }) {
        const clickItem = () => {
            props.clickFn && props.clickFn()
        }
        return {
            slots,
            clickItem
        }

    }
}
</script>

<style scoped lang="scss">
.comp-tabbar-item {
    .icon-img {
        width: 24px;
        height: 24px;
    }
}
</style>
