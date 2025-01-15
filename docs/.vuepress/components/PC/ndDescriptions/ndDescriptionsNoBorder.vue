<template>
  <nd-descriptions title="用户信息" :column="3" :options="state.options">
    <template #extra>
        <el-button type="primary">按钮</el-button>
    </template>
    <template #name="{item}">
            {{item.label}}
    </template>
    <template v-slot="{item}">
        <nd-tag v-if="item.hasTag" effect="plain">{{item.value}}</nd-tag>
        <span v-else>{{item.value}}</span>
    </template>
  </nd-descriptions>
</template>

<script>
import ndDescriptions from '../../../../../src/packages/PC/nd-descriptions'
import {ref} from 'vue'
import ndTag from '../../../../../src/packages/PC/nd-tag'

export default {
    name:'',
    components:{ndDescriptions,ndTag},
    setup() {
        const state = ref({
            options:[
                {
                    value: '张三',
                    label: '用户名',
                },
                {
                    value: '137 9999 9999',
                    label: '电话',
                },
                {
                    value: '广州',
                    label: '位置',
                },
                {
                    value: '默认',
                    label: '标签',
                    hasTag:true,
                },
                {
                    value: '广东省广州市天河区xxx路xxx大厦xxx楼xxx室',
                    label: '地址',
                },
            ]
        })

        return {
            state,
        }
    }

}
</script>

<style scoped>

</style>