<template>
  <el-dropdown v-bind="$attrs" v-on="$attrs">
    <slot></slot>
    <template #dropdown>
      <el-dropdown-menu>
        <slot name="sub"></slot>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script>
import { reactive, toRefs, onMounted } from "vue";
export default {
  name: 'nd-dropdown',
  setup() {
    const data = reactive({});
    onMounted(() => {});
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>
<style  lang='less'>
</style>
