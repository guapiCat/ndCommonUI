<template>
  <el-tab-pane v-bind="$attrs" v-on="$attrs">
    <template v-slot:label v-if="slots.label">
      <span class="custom-tabs-label">
        <slot name="label"></slot>
      </span>
    </template>
    <slot></slot>
  </el-tab-pane>
</template>

<script>
export default {
  name: "nd-tab-pane",
  setup(props, { emits, slots }) {
    return {
      slots,
    };
  },
  props: {},
};
</script>

<style lang="less">
// 图标风格
.custom-tabs-label .el-icon {
  vertical-align: middle;
}
.custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>