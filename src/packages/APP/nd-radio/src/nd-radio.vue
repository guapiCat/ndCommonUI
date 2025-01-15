<template>
    <div class="comp-app-radio">
        <van-radio-group ref="radioGroup" v-bind="attrs" v-on.stop="attrs" v-model="checked">
            <slot></slot>
            <template #icon v-if="!!slots.icon">
                <slot name="icon"></slot>
            </template>
        </van-radio-group>
    </div>
</template>

<script>
import { ref, reactive, watch, toRefs } from 'vue'
export default {
    props: {
        modelValue: {
            // v-model
            type: [String, Number, Boolean],
            required: false,
            default: ''
        }
    },
    emits: ['update:modelValue'],
    setup(props, { emit, attrs, slots }) {
        const data = reactive({
            checked: false,
        })
        const radioGroup = ref()

        /**事件**/
        watch(() => data.checked, () => {
            console.log(data.checked, 'checked')
            emit('update:modelValue', data.checked)
        }, { deep: true })
        const toggleAll = () => {radioGroup.value.toggleAll()} // van-radio-group抛出的toggleAll方法
        /**事件**/
        !!props.modelValue && (data.checked = props.modelValue)
        const datas = toRefs(data)
        console.log(attrs, 'attrs')
        return {
            ...datas,
            radioGroup,
            attrs,
            slots,
            toggleAll
        }
    }
}

</script>

<style scoped lang="scss">
.comp-app-radio {
    :deep(.van-radio-group) {
        .van-icon {
            width: 18px;
            height: 18px;
            font-size: 0.6em;
            line-height: 1.45
        }
        .van-radio__icon--checked + .van-radio__label{
            color: #1880E3
        }
        .van-radio__icon--disabled + .van-radio__label{
            color: #DDD;
        }
        .van-radio__icon--disabled.van-radio__icon--checked{
            .van-badge__wrapper {
                color: #fff!important;
                background-color: #DDD
            }
        }
        .van-radio__icon--square.van-radio__icon{
            border-radius: 2px;
            overflow: hidden;
            .van-badge__wrapper{
                border-radius: 2px;
                overflow: hidden;
            }
        }
        .van-radio__label {
            margin-left: 9px;
            font-family: Source Han Sans CN;
            font-size: 14px;
            line-height: 22px;
            letter-spacing: 0px;
            color: #333333;
        }

    }
}
</style>