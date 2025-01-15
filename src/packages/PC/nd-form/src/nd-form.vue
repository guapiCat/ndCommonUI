<template>
    <el-form v-on="attrs" v-bind="attrs" v-model="form" :class="`comp-pc-form comp-pc-form-${date}`" ref="formRef">
        <slot></slot>
    </el-form>
</template>

<script>
import { ref, reactive, toRefs, watch, onMounted, nextTick, onUpdated } from 'vue'
export default {
    props: {
        modelValue: {
            // v-model
            type: Object,
            required: true,
            default: () => { }
        }
    },
    emits: ['update:modelValue'],

    setup(props, { emit, slots, attrs, expose }) {
        const data = reactive({
            form: {},
            date: new Date().getTime()
        })
        let fn = reactive({ // 预留el-form中注册的事件
            validate: null,
            validateField: null,
            resetFields: null,
            scrollToField: null,
            clearValidate: null,
        })
        const formRef = ref(null)
        watch(data.form, () => {
            console.log(form, 'form')
            // emit('update:modelValue', data.form)
        }, { deep: true })
        nextTick(() => {
            fn = Object.assign(fn,formRef.value )
        })
        const calItemCount = () => {
            // console.dir(formRef, 'v')
            let dom = document.querySelector(`.comp-pc-form-${data.date}`)
            // console.dir(dom, 'dom')
            // return false
            let width = dom.offsetWidth || 0
            let childWidth = dom.querySelector('.el-form-item').offsetWidth || 0
            let count = (width / childWidth).toFixed(0)
            for(let i=0; i<count; i++){
                let elem = document.createElement('div')
                elem.className = '1e;-form-item'
                elem.style.width = childWidth + 'px'
                dom.appendChild(elem)
            }
        }
        onMounted(()=>{
            nextTick(() => {
                if(attrs.class && attrs.class.includes('form-flex-between'))calItemCount()
            })
        })
        const datas = toRefs(data)
        const fns = toRefs(fn)
        return {
            ...datas,
            ...fns,
            formRef,
            slots,
            attrs,

        }
    }
}
</script>

<style scoped lang="scss">
.comp-pc-form {

    :deep(.el-form-item) {
        margin-bottom: 24px;

        .el-form-item__label {
            font-family: HarmonyOS_Sans_SC;
            font-size: 14px;
            line-height: 24px;
            letter-spacing: 0px;
            color: #131414;
            padding-right: 16px;
        }

        .el-form-item__error {
            padding-top: 4px;
            font-family: HarmonyOS_Sans_SC;
            font-size: 10px;
            line-height: 20px;
            letter-spacing: 0px;
            color: #F56C6C;
            padding-bottom: 8px;
        }
    }
}

.comp-pc-form.el-form--label-top {
    :deep(.el-form-item__label) {
        margin-bottom: 8px;
    }
}

</style>

<style lang="scss">
.el-form--inline.form-flex-between{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .el-form-item{
        margin-right: 0!important;
    }
}
// .el-form--inline.form-flex-between::after {
//   content: '';
// //   display: block;
//   flex: auto;
// }
</style>