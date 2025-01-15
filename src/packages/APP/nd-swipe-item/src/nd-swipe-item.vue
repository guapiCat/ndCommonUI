<template>
  <van-swipe-item v-on="$attrs" v-bind="$attrs">
    <slot></slot>
  </van-swipe-item>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const data = reactive({});

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>

<style scoped>
</style>