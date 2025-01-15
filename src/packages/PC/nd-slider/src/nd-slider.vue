<template>
  <el-slider :modelValue="modelValue" @input="onInput" v-bind="$attrs" v-on="$attrs" class="nd-slider"/>
</template>

<script>
export default {
  name: "nd-slider",
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const onInput = (value) => {
      emit("update:modelValue", value)
    }

    return { onInput }
  }
}
</script>

<style lang="less">
.nd-slider {
  .el-slider__bar {
    background-color: #1780E3;;
  }
  .el-slider__button{
    border-color: #1780E3;
  }
  .el-slider__runway.is-disabled .el-slider__bar{
    border-color: #C7C9CC;
  }
}
</style>