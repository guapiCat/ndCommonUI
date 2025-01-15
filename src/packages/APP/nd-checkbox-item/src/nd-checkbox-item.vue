<template>
    <van-checkbox ref="checkbox" class="comp-app-checkbox-item" v-bind="attrs" v-on="attrs" v-model="value" checked-color="#1880E3">
        <template #default v-if="!!slots.default">
            <slot></slot>
        </template>
        <template #icon="props" v-if="!!slots.icon" >
            <slot name="icon" :scope="props"></slot>
        </template>
    </van-checkbox>
</template>

<script>
import { ref, reactive, watch, toRefs } from 'vue'
export default {
    props: {
        modelValue: {
            // v-model
            type: [String, Number, Boolean],
            default: '',
        }
    },
    emits: ['update:modelValue'],
    setup(props, { emit, attrs, slots }) {
        const data = reactive({
            value: ''
        })
        const checkbox = ref()

        /**事件**/
        watch(() => data.value, () => {
            emit('update:modelValue', data.value)
        })
        const toggle = () => {checkbox.value.toggle()}  // van-checkbox 的toggle方法
        /**事件**/

        const datas = toRefs(data)
        return {
            ...datas,
            checkbox,
            slots,
            attrs,
            toggle
        }
    }
}

</script>

<style scoped lang="scss">
.comp-app-checkbox-item {
    :deep(.van-checkbox) {
        .van-icon {
            width: 18px;
            height: 18px;
            font-size: 0.6em;
            line-height: 1.45
        }
        .van-checkbox__icon--checked + .van-checkbox__label{
            color: #1880E3
        }
        .van-checkbox__icon--disabled + .van-checkbox__label{
            color: #DDD;
        }
        .van-checkbox__icon--disabled.van-checkbox__icon--checked{
            .van-badge__wrapper {
                color: #fff!important;
                background-color: #DDD
            }
        }
        
        .van-checkbox__icon{
            border-radius: 2px;
            overflow: hidden;
            .van-badge__wrapper{
                border-radius: 2px;
                overflow: hidden;
            }
        }
        .van-checkbox__label {
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