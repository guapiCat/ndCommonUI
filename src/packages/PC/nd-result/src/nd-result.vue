<template>
<div class="nd-result">
    <el-result v-bind="$attrs" v-on="$attrs">
          <template #icon v-if="showIcon">
            <!-- 插槽 -->
            <slot name="icon"></slot>
          </template>
          <template #extra v-if="showExtra">
            <!-- 插槽 -->      
            <slot name="extra"></slot>
          </template>
      
    </el-result>
</div>
</template>

<script>
import {
    reactive,
    toRefs,
    onBeforeMount,
    onMounted,
    getCurrentInstance
} from 'vue';
export default {
    name: "nd-result",
    props: {
        showIcon: {
            type: Boolean,
            default: false,
        },
         showExtra: {
            type: Boolean,
            default: false,
        },
        
    },
    setup(props, {
        emits,
        slots
    }) {
        const data = reactive({});
        onBeforeMount(() => {});
        onMounted(() => {});

        const refData = toRefs(data);
        return {
            slots,
            ...refData
        };
    },

};
</script>

<style scoped>
>>>.el-result .icon-success {
  --el-result-color: #52C41A;
    color: #52C41A;
}
>>>.el-result .icon-warning {
  --el-result-color: #FA8C16;
    color: #FA8C16;
}
>>>.el-result .icon-error {
  --el-result-color: #FF4D4F;
    color: #FF4D4F;
}
>>>.el-result .icon-info {
  --el-result-color: rgba(51, 51, 51, 0.4);
    color:  rgba(51, 51, 51, 0.4);
}
>>>.el-result__title{
font-size: 16px;
font-weight: normal;


/* Font/text-primary */
color: #131414;
}
>>>.el-result__subtitle{
font-size: 14px;
font-weight: normal;


/* Font/text-secondary */
color: #909399;
}
</style>
