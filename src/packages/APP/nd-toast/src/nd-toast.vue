<template>
    <van-toast ref="ndToast" :class="`app-comp-toast ${zClass}`" :style="`${toastPosition} ${zColor}`" :show="flag"
        v-bind="attrs" v-on="attrs">
        <template #message>
            <slot name="default">
                <template v-if="!icon">{{ message }}</template>
                <template v-else>
                    <div>
                        <nd-icon v-if="icon.indexOf('icon') == 0" class="svg" :color="color" :iconName="icon"></nd-icon>
                        <img fit="fill" v-else width="36" height="36" :src="icon" />
                    </div>{{ message }}
                </template>
            </slot>
        </template>
    </van-toast>
</template>

<script>
import { reactive, watch, toRefs, computed } from 'vue'
import ndIcon from '../../../../components/SvgIcon.vue'
import { Toast as VanToast } from 'vant'
export default {
    components: { ndIcon, VanToast },
    props: {
        show: {
            // v-model
            type: Boolean,
            required: false,
            default: false
        },
        icon: {
            // 是否使用图标提示模式
            type: String,
            required: false,
            default: ''
        },
        message: {
            // 文字提示
            type: String,
            required: false,
            default: ''
        },
        position: {
            // toast定位 提供值: top|mid|bottom
            type: String,
            required: false,
            default: 'bottom'
        },
        color: {
            // 字体颜色
            type: String,
            required: false,
            default: '#ffffff'
        },
        fn: {
            // true:函数模式  false:组件模式   => 函数模式只控制样式
            type: Boolean,
            required: false,
            default: false
        }
    },
    emits: ['update:modelValue'],
    setup(props, { emit, attrs, slots }) {
        const data = reactive({
            flag: false,
        })
        const showToast = () => {
            // 显示toast
            data.flag = true
        }
        const closeToast = () => {
            // 隐藏toast
            data.flag = false
        }
        const toastPosition = computed(() => {
            // 控制toast的定位 -- transform=>处理原先样式中的偏移
            return { top: "bottom:unset;top:20vh;transform:translateY(0);", mid: '', bottom: "top:unset;bottom: 20vh;transform:translateY(0)" }[props.position]
        })
        const zClass = computed(() => {
            // 自定义icon
            return `${!!props.icon && 'classIcon'}`
        })
        const zColor = computed(() => {
            // 自定义字体颜色
            return `color: ${props.color || ''}`
        })
        watch(() => props.show, () => {
            data.flag = props.show
        })
        // 如果传了modelValue, 就初始化这个值
        props.show && (data.flag = props.show)

        setTimeout(() => {
            console.log(props, 'position')
        }, 2000)
        if (props.fn) showToast()
        const datas = toRefs(data)
        return {
            ...datas,
            toastPosition,
            zClass,
            attrs,
            slots,
            zColor,
            showToast,
            closeToast
        }
    }
}

</script>
<style lang="scss">
.app-comp-toast {
    &.toast-position-top {
        top: 20vh;
        bottom: unset;
        transform: translateY(0)
    }

    &.toast-position-bottom {
        bottom: 20vh;
        top: unset;
        transform: translateY(0)
    }

    &.van-toast {
        background: rgba(51, 51, 51, 0.8);
        border-radius: 8px;
        min-width: 120px;
        max-width: 248px !important;
        box-sizing: border-box;
        padding: 8px 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Source Han Sans CN;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0px;
        color: #FFF;
    }

    &.classIcon {
        // width: 120px;
        min-height: 120px;
        .van-toast__text {
            // display: flex;
            // justify-self: center;
            // align-items: center;
            // flex-direction: column;
        }

        .svg {
            width: 36px !important;
            height: 36px !important;
        }

        .msg {
            margin-top: 8px;
        }
    }
}
</style>

<style lang="scss">
.van-toast {
    background: rgba(51, 51, 51, 0.8);
    border-radius: 8px;
    min-width: 120px;
    max-width: 248px !important;
    box-sizing: border-box;
    padding: 8px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Source Han Sans CN;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0px;
    color: #FFF;

    &.van-toast--top {
        top: 20vh;
        transform: translateY(0);
    }

    &.van-toast--bottom {
        bottom: 20vh;
        transform: translateY(0);
    }

    &.ndIconToast {
        width: 120px;
        height: 120px;

        .van-toast__text {
            margin-top: 10px;
        }
    }
}
</style>