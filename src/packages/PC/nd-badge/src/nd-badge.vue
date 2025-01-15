<template>
  <div class="nd-badge">
    <el-badge  v-bind="$attrs"  v-on="$attrs">
       <el-button>comments</el-button>
    </el-badge>
  </div>
</template>
<script>
import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';
export default {
  name: "nd-badge",
  props: {
   
  },
  setup(props, { emits, slots }) {
    const data = reactive({});
    onBeforeMount(() => {});
    onMounted(() => { });

   
    const refData = toRefs(data);
    return {
      slots,
      ...refData
    };
  },
  
};
</script>

<style scoped>

>>>.el-badge__content{
  background-color:#F56C6C!important;
  font-size: 12px;
  color: #FFFFFF;
}




</style>