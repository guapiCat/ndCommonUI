<template>
    <div class="app-comp-input">

        <!-- 输入框 -->
        <van-field ref="field" v-if="!password" v-on.stop="attrs" v-bind="attrs" :label="label"
            :class="{ 'height-label_value': attrs.labelAlign && attrs.label, errorClass: !!attrs['error-message'] }"
            :style="{'border-radius': borderRadius, 'background': background}"
            v-model="value" :placeholder="dealwidthPlaceholder" right-icon="arrow-left" @clear="clear">
            <!-- label插槽 -->
            <template #label v-if="!!label || !!slots.label">
                <div :class="{ 'input-label': true, labelAlign: labelAlignType }">
                    <slot name="label" v-if="!!slots.label"></slot>
                    <span v-if="!slots.label">{{ label }}</span>
                </div>
            </template>

            <!-- input插槽 -->
            <template #input v-if="!!slots.input">
                <slot name="input"></slot>
            </template>

            <!-- 左侧图标插槽 -->
            <template #left-icon v-if="!!slots['left-icon']">
                <slot name="left-icon"></slot>
            </template>

            <!-- 右侧图标插槽 -->
            <template #right-icon>
                <div>
                    <slot name="right-icon" v-if="!!slots['right-icon']"></slot>
                    <svg-icon v-if="!slots['right-icon'] && attrs['right-icon']" :iconName="attrs['right-icon']"
                        color="red"></svg-icon>
                </div>
            </template>

            <!-- 按钮插槽 -->
            <template #button v-if="!!slots['button']">
                <slot name="button"></slot>
            </template>

            <!-- 错误提示插槽 -->
            <template #error-message v-if="!!slots['error-message']">
                <div class="input-error-message">
                    <slot name="error-messag"></slot>
                </div>
            </template>

            <!-- 文本域插槽 -->
            <template #extra v-if="!!slots['extran']">
                <slot name="extra"></slot>
            </template>

        </van-field>

        <!-- 密码框 -->
        <van-password-input :class="passwordTypeClass" v-if="!!password" v-on.stop="attrs" v-bind="attrs" :value="value"
            :focused="showKeyboard" @focus="showKeyboard = true" :gutter="gutter"></van-password-input>
        <!-- 使用数字键盘 -->
        <van-number-keyboard v-if="!!password && keyboard" :gutter="15" v-model="value" :show="showKeyboard"
            @blur="showKeyboard = false" />
    </div>
</template>

<script>
import { ref, reactive, toRefs, watch, computed } from 'vue'
import svgIcon from '../../../../components/SvgIcon.vue'
export default {
    props: {
        modelValue: {
            // v-model
            type: [String, Number],
            required: false,
            default: ''
        },
        label: {
            // 自定义输入框左侧文本
            type: [String, Number],
            required: false,
            default: ''
        },
        placeholder: {
            type: String,
            requied: false,
            default: '请输入'
        },
        labelAlignType: {
            // 标题对齐 -- 使用labelAlign, 就按照label的最宽样式
            type: Boolean,
            required: false,
            default: false
        },
        password: {
            // 是否开启密码模式
            type: Boolean,
            default: false,
            required: false
        },
        passwordType: {
            // 密码模式
            type: String,
            default: 'cell',
            required: false
        },
        keyboard: {
            // 是否使用数字键盘
            type: Boolean,
            required: false,
            default: true
        },
        gutter: {
            // 密码框间隔
            type: String,
            default: '9px',
            required: false
        },
        background: {           // 背景色
            type: String,
            default: 'white',
        },
        borderRadius: {         // 圆角
            type: String,
            default: '4px',
        },
    },
    components: { svgIcon },
    emits: ['update:modelValue', 'clear'],
    setup(props, { slots, attrs, emit }) {
        const field = ref(null)
        const data = reactive({
            value: '',
            showKeyboard: false,
            passwordValue: ''
        })
        const dealwidthPlaceholder = computed(() => {
            if (!!attrs.disabled || attrs.disabled == '') return ''
            else return `${props.placeholder} ${!!attrs.required || attrs.required == '' ? '(必选)' : ''}`
        })
        const passwordTypeClass = computed(() => {
            // cell: 格子模式   line: 底部横线模式
            return props.passwordType == 'cell' ? 'cellPassword' : 'linePassword'
        })

        /**  ----   事件  ---- **/
        watch(() => data.value, () => {
            // 更新绑定数据
            emit('update:modelValue', data.value)
        }, { deep: true })
        watch(() => props.modelValue, () => {
            data.value = props.modelValue
        }, { deep: true })
        /**  ----   事件  ---- **/

        const clear = () => {           // 清除
            console.log('clear');
            data.value = '';
            emit('clear', data.value);
        }

        !!props.modelValue && (data.value = props.modelValue)
        const datas = toRefs(data)
        return {
            field,
            ...datas,
            dealwidthPlaceholder,
            passwordTypeClass,
            clear,
            slots,
            attrs
        }

    }
}
</script>

<style scoped lang="scss">
.app-comp-input {

    // padding: 12px 16px 10px;
    :deep(.van-field__value) {
        // display: flex;
        // align-items: center;
        // .van-field__error-message {
        //     font-family: Source Han Sans CN;
        //     font-size: 12px;
        //     font-weight: normal;
        //     line-height: 18px;
        //     letter-spacing: 0px;
        //     color: #FF4D4F;
        //     margin-top: 5px;
        // }
    }

    :deep(.van-field__label--required) {
        display: flex;

        &:before {
            margin-right: 6px;
        }
    }

    :deep(.van-field__label) {
        margin-right: 16px !important;
        width: fit-content;

        .input-label {
            font-family: Source Han Sans CN;
            font-size: 14px;
            line-height: 22px;
            letter-spacing: 0px;
            color: #666666;
            max-width: 90px;
            height: 100%;
        }

        .labelAlign {
            width: 90px;
        }
    }

    :deep(.van-field--disabled) {
        .input-label {
            color: #DDDDDD !important;
        }

    }



    :deep(.van-field__control::placeholder) {
        font-family: Source Han Sans CN;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0px;
        color: #CCCCCC;
    }

    :deep(.van-field__control) {
        font-family: Source Han Sans CN;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0px;
        color: #333333;
    }

    :deep(&.van-field--label-top) {
        display: block !important;
    }

    :deep(.cellPassword) {
        margin: 0;

        .van-password-input__security {
            margin: 0;
            box-sizing: border-box;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .van-password-input__item {
                width: 48px;
                height: 48px;
                border-radius: 8px;
                flex: unset;
            }
        }
        .van-password-input__error-info {
            font-family: Microsoft YaHei;
            font-size: 12px;
            line-height: 16px;
            text-align: center;
            letter-spacing: 0px;
            /* MR-报错色 */
            color: #EE0A24;
            margin-top: 28px;
        }

    }

    :deep(.linePassword) {
        margin: 0;
        background: #fff;

        .van-password-input__security {
            margin: 0;
            box-sizing: border-box;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .van-password-input__item {
                width: 48px;
                height: 48px;
                flex: unset;
                position: relative;

                &::after {
                    position: absolute;
                    content: '';
                    width: 32px;
                    height: 2px;
                    background-color: #323233;
                    left: 50%;
                    margin-left: -16px;
                    bottom: 0;
                }
            }
        }

        .van-password-input__error-info {
            font-family: Microsoft YaHei;
            font-size: 12px;
            line-height: 16px;
            text-align: center;
            letter-spacing: 0px;
            /* MR-报错色 */
            color: #EE0A24;
            margin-top: 28px;
        }
    }
}

.app-comp-input .errorClass {
    :deep(.van-field__value) {
        display: block !important;

        .van-field__word-num {
            color: #FF4D4F;
        }

        .van-field__error-message {
            font-family: Source Han Sans CN;
            font-size: 12px;
            font-weight: normal;
            line-height: 18px;
            letter-spacing: 0px;
            color: #FF4D4F;
            margin-top: 5px;
        }
    }
}</style>


