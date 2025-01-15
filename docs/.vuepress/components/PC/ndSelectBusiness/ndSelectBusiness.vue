<template>
    <nd-select-business :options="arr" :loading="loading" :remote-method="getData" @choose="chooseData"></nd-select-business>
</template>

<script setup>
import ndSelectBusiness from '../../../../../src/packages/PC/nd-select-business/src/nd-select-business.vue'
import { ref, reactive } from 'vue'
const data = ref([{ label: '上海新迪数字科技有限公司', id: 1 }, { label: '上海新迪数字科技有限公司', id: 5 }, { label: '上海新迪数字科技有限公司', id: 6 }, { label: '上海新迪数字科技有限公司', id: 7 }, { label: '杭州新迪数字科技有限公司杭州新迪数字科技有限公司', id: 8 }, { label: '北京字节跳动科技有限公司', id: 3 }, { label: '杭州阿里巴巴', id: 4 },])
const arr = ref([])
const loading = ref(false)
const getData = (query) => {
    loading.value = true
    setTimeout(() => {
        arr.value = !!query ? data.value.filter(item => {
            return item.label.includes(query)
        }) : []
        loading.value = false
    }, 400)
}
const chooseData = (data) => {
    console.log(data, 'data')
}
</script>