<template>
  <el-dropdown-item
    v-bind="$attrs"
    v-on="$attrs"
    :class="{ select: $attrs.selected ? true : false }"
  >
    <slot></slot>
  </el-dropdown-item>
</template>
<script>
import { reactive, toRefs, onMounted } from "vue";
export default {
  name: 'nd-dropdown-item',
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
.el-dropdown-menu__item:not(.is-disabled):focus, .select {
  color: #409eff !important;
  background: #ecf5ff !important;
}

</style>
