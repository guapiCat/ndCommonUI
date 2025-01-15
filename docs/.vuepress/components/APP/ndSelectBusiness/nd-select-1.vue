<template>
    <section class="nd-select-1">
        <nd-select-business :httpFn="getData" @choose="chooseData" :maxHeight="300"></nd-select-business>
    </section>
</template>

<script>
import { reactive, toRefs } from 'vue'
import ndSelectBusiness from '../../../../../src/packages/APP/nd-select-business/src/nd-select-business.vue'
export default {
    components: {
        ndSelectBusiness
    },
    setup() {
        const state = reactive({
            arr: [{ label: '上海新迪数字科技有限公司', id: 1 }, { label: '上海新迪数字科技有限公司', id: 5 },{ label: '上海新迪数字科技有限公司', id: 6 },{ label: '上海新迪数字科技有限公司', id:7 },{ label: '杭州新迪数字科技有限公司杭州新迪数字科技有限公司', id: 8 }, { label: '北京字节跳动科技有限公司', id: 3 }, { label: '杭州阿里巴巴', id: 4 },]
        })
        const getData = async (keyword) => {
            return new Promise(resolve => {
                let arr = state.arr.filter(item => {
                    return item.label.includes('')
                })
                resolve(arr)
            })
        }
        const chooseData = (data) => {
            console.log(`🚀获取数据==${data}`)
        }

        const data = toRefs(state)
        return {
            ...data,
            getData,
            chooseData
        }
    }
}
</script>

<style lang="scss">
.nd-select-1 {
    ul {
        margin: 0 !important
    }
}
</style>