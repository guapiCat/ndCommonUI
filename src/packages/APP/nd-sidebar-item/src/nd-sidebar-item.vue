<template>
  <van-sidebar-item v-bind="$attrs" v-on="$attrs">

    <slot></slot>

  </van-sidebar-item>
</template>

<script>
import { reactive, toRefs } from 'vue';


export default {
  props: {

  },
  setup() {
    const data = reactive({
      
    });

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>

<style scoped>
</style>