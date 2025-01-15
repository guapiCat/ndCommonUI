<template>
  <div class="nd-avatar">
     <el-avatar  v-bind="$attrs"  v-on="$attrs" v-if="isText">{{user}}</el-avatar>
     <el-avatar  v-bind="$attrs"  v-on="$attrs" v-else :src="imgSrc"/>
  </div>
</template>
<script>
import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';
export default {
  name: "nd-avatar",
  props: {
    user: {
      type: String,
      default: "",
    },
    imgSrc: {
      type: String,
      default: "",
    },
    isText: {
      type: Boolean,
      default: false,
    },  
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




</style>