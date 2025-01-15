<template>
    <nd-card :shadow="true" :content="content" :footer="false">
        <template #title>
            审批状态
        </template>
        <template #button>
            <nd-button type="primary">重新认证</nd-button>
        </template>
        <div class="flex">
            <nd-button class="btn" type="danger">审核不通过</nd-button>
            <div class="content">{{ content }}</div>
        </div>
    </nd-card>
</template>
  
<script>
import { reactive, toRefs } from "vue";
import ndCard from '../../../../../src/packages/PC/nd-card/src/nd-card.vue';
import ndButton from '../../../../../src/packages/PC/nd-button/src/nd-button.vue'

export default {
    name: "",
    components: { ndCard, ndButton },
    setup() {

        const state = reactive({
            content: '失败原因: 1. 失败原因失败原因失败原因失败原因失败原因失败原因失败原因失败原因; 1. 失败原因失败原因失败原因失败原因失败原因失败原因失败原因失败原因; 1. 失败原因失败原因失败原因失败原因失败原因失败原因失败原因失败原因; 1. 失败原因失败原因失败原因失败原因失败原因失败原因失败原因失败原因; 1. 失败原因失败原因失败原因失败原因失败原因失败原因失败原因失败原因; 1. 失败原因失败原因失败原因失败原因失败原因失败原因失败原因失败原因; 1. 失败原因失败原因失败原因失败原因失败原因失败原因失败原因失败原因; 1. 失败原因失败原因失败原因失败原因失败原因失败原因失败原因失败原因; '
        })

        return {
            ...toRefs(state)
        }
    }
}
</script>
  
<style scoped lang="less">
.flex{
    display: flex;
    .btn{padding: 2px 8px;}
}
</style>
  