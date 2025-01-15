<template>
  <van-cell v-bind="$attrs" v-on="$attrs">
  
    <!-- 左侧标题 -->
    <template v-if="solts.title" #title>
      <slot name="title"></slot>
    </template>

    <!-- 右侧内容 -->
    <template v-if="solts.value" #value>
      <slot name="value"></slot>
    </template>


  </van-cell>
</template>

<script>
import { reactive, toRefs, useSlots } from 'vue';

export default {
  setup() {
    const data = reactive({});
    const solts = useSlots();

    const refData = toRefs(data);
    return {
      ...refData,
      solts,
    };
  },
};
</script>

<style scoped>
</style>