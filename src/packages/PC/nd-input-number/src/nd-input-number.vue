<template>
  <el-input-number
    v-bind="$attrs"
    v-on="$attrs"
    :modelValue="modelValue"
    @input="onInput"
    class="nd-input-number"
    :class="{'is-error':isError}"
  ></el-input-number>
</template>

<script>

export default {
  props: {
    modelValue: {
      type: Number,
      default: ''
    },
    isError: {
      type: Boolean,
      default: false
    }
  },
  name: "nd-input-number",
  emits: ["update:modelValue"],
  setup(props, {emit}) {
    const onInput = (value) => {
      emit("update:modelValue", value)
    }

    return { onInput }
  }
}
</script>

<style scoped lang="less">
@error-border-color-hover: #F56C6C;
@error-border-color-focus: #FAB5B5;
.nd-input-number {

  &.el-input-number {
    width: 160px;
  }

  &.el-input-number--small {
    width: 130px;
  }

  &.el-input-number--large {
    width: 180px;
  }


  --el-input-hover-border-color: #409EFF;

  :deep(.el-input--large .el-input__inner) {
    --el-input-inner-height: 40px;
  }

  :deep(.el-input--small .el-input__inner) {
    --el-input-inner-height: 24px;
  }

  :deep(.el-input__wrapper) {
    box-shadow: none;
    border: 1px solid #E4E7ED;
    padding-top: 0;
    padding-bottom: 0;
  }

  :deep(.el-input--large .el-input__wrapper) {
    padding: 0px 15px;
  }

  :deep(.el-input__wrapper:hover) {
    border: 1px solid #409EFF;
  }

  :deep(.el-input__wrapper.is-focus) {
    border: 1px solid #409EFF;
    box-shadow: 0px 0px 0px 2px #9FCEFF;
  }


  //错误样式
  &.is-error {
    :deep(.el-input__wrapper.is-focus) {
      border: 1px solid @error-border-color-hover;
      box-shadow: 0px 0px 0px 2px @error-border-color-focus;
    }

    :deep(.el-input__wrapper:hover) {
      border: 1px solid @error-border-color-hover;
    }
  }
}


</style>
