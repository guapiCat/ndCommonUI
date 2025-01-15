<template>
  <van-sidebar
    :modelValue="modelValue"
    v-bind="$attrs"
    v-on="$attrs"
    @change="onChange"
  >

    <slot></slot>
    
  </van-sidebar>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  props: {
    modelValue: [String, Number],
  },
  emits: ['update:modelValue'],
  setup(props, ctx) {
    const data = reactive({
      
    });

    const onChange = (index) => {
      ctx.emit('update:modelValue', index);
    }

    const refData = toRefs(data);
    return {
      ...refData,
      onChange,
    };
  },
};
</script>

<style scoped>
@import '../../common.scss';
</style>