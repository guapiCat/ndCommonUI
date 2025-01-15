<template>
  <van-picker-group v-bind="$attrs">
    <slot name="prev" />
    <slot name="next" />
    
  </van-picker-group>
</template>
<script>
import { } from 'vue';

export default {
  props: {
  },
  setup(props, { slots }) {

    return {  };
  },
  
};
</script>

<style scoped lang="scss">
@import '../../common.scss';
</style>