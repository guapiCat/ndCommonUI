<template>
    <div class="comp-app-checkbox">
        <van-checkbox-group ref="checkGroup" v-bind="attrs" v-on.stop="attrs" v-model="checked" checked-color="#1880E3">
            <slot></slot>
            
        </van-checkbox-group>
    </div>
</template>

<script>
import { ref, reactive, watch, toRefs } from 'vue'
export default {
    props: {
        modelValue: {
            // v-model
            type: Array,
            required: false,
            default: () => []
        }
    },
    emits: ['update:modelValue', 'ndChange'],
    setup(props, { emit, attrs, slots }) {
        const data = reactive({
            checked: false,
        })
        const checkGroup = ref()

        /**事件**/
        watch(() => data.checked, () => {
            emit('update:modelValue', data.checkded || [])
        }, { deep: true })
        const toggleAll = () => { checkGroup.value.toggleAll()}
        /**事件**/

        
        !!props.modelValue && (data.checked = props.modelValue)
        const datas = toRefs(data)
        return {
            ...datas,
            checkGroup,
            attrs,
            slots,
            toggleAll
        }
    }
}

</script>

<style scoped lang="scss">
.comp-app-checkbox {
    :deep(.van-checkbox-group) {
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
        .van-icon {
            width: 18px;
            height: 18px;
            font-size: 0.6em;
            line-height: 1.45
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