<template>
  <el-carousel v-bind="$attrs" v-on="$attrs">
    <slot></slot>
  </el-carousel>
</template>

<script>
export default {
  name: "nd-carousel",
  setup(props, {emits, slots}) {
    return {
      slots
    }
  },
}
</script>

<style lang="less" scoped>

div /deep/ .el-carousel__indicator {
    user-select: none !important;
}

div /deep/ .el-carousel__button {
    height: 2px;
}

div /deep/ .el-carousel__indicator {
    .el-carousel__button {
        opacity: 0.6;
    }
}
div /deep/ .el-carousel__indicator.is-active {
    .el-carousel__button {
        opacity: 1;
    }
}
</style>