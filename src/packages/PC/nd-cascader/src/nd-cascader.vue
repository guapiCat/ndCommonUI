<template>
  <div class="nd-cascader" :class="class" :style="style" :id="id">
    <el-cascader v-bind="$attrs" v-on="$attrs" :modelValue="modelValue" @change="onChange">
      
    </el-cascader>
  </div>
</template>

<script>

export default {
  name: 'nd-cascader',
  props: {
    modelValue: {
      type: null,
    },
    class: {
      type: String,
      default: '',
    },
    style: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const onChange = (value) => {
      emit("update:modelValue", value)
    }
    return {
      onChange
    };
  },
};
</script>

<style scoped lang="less">
.nd-cascader {
  /deep/ .el-cascader {
    width: 100%;
  }
} 
/deep/ .el-checkbox__input.is-checked .el-checkbox__inner {
  background: #3D5FF9;
  border-color: #3D5FF9;
}
</style>