<template>
<p>基础组件</p>
<nd-result icon="success" title="Success Tip">
</nd-result>
<nd-result icon="warning" title="Success Tip">
</nd-result>
<nd-result icon="error" title="Success Tip">
</nd-result>
<nd-result icon="info" title="Success Tip">
</nd-result>
<p>带文字提示</p>
<nd-result icon="success" title="Success Tip" sub-title="Please follow the instructions">
</nd-result>
<nd-result icon="warning" title="Success Tip" sub-title="Please follow the instructions">
</nd-result>
<nd-result icon="error" title="Success Tip" sub-title="Please follow the instructions">
</nd-result>
<nd-result icon="info" title="Success Tip" sub-title="Please follow the instructions">
</nd-result>

<p>带按钮的组件</p>
<nd-result icon="success" title="Success Tip" sub-title="Please follow the instructions" :showExtra="true">
    <template #extra>
        <el-button type="primary">Back</el-button>
    </template>
</nd-result>
<nd-result icon="warning" title="Success Tip" sub-title="Please follow the instructions" :showExtra="true">
    <template #extra>
          <el-button type="primary">Back</el-button>
    </template>
</nd-result>
<nd-result icon="error" title="Success Tip" sub-title="Please follow the instructions" :showExtra="true">
    <template #extra>
        <el-button type="primary">Back</el-button>
    </template>
</nd-result>
<nd-result icon="info" title="Success Tip" sub-title="Please follow the instructions" :showExtra="true">
    <template #extra>
        <el-button type="primary">Back</el-button>
    </template>
</nd-result>

<p>自定义结果</p>
<nd-result title="404" sub-title="Sorry, request error" :showIcon="true" :showExtra="true">
   <template #icon>
      <el-image
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      />
    </template>
    <template #extra>
      <el-button type="primary">Back</el-button>
    </template>
  </nd-result>
</template>

<script>
import ndResult from '../../../../../src/packages/PC/nd-result/src/nd-result.vue';
import {
    ref,
    toRefs,
    reactive
} from "vue";


export default {
    name: "",
    components: {
        ndResult
    },
    setup() {
        const state = reactive({
           
        })

        return {
            state

        }
    }
}
</script>

<style scoped>
.nd-result {
    margin-bottom: 20px;
    margin-top: 20px;
    width: 20%;
    display: inline-block;

}
</style>
