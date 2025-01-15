<template>
  <div class="nd-switch">
    <!-- <el-switch v-model="modelValue" v-bind="$attrs" v-on="$attrs" /> -->
    <el-switch :modelValue="modelValue" @change="changeHandler" v-bind="$attrs" v-on="$attrs" />
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';

export default {
  name: 'nd-switch',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  setup(props, {emit}) {
    const data = reactive({});
    const { proxy } = getCurrentInstance();

    const changeHandler = (flag) => {
      emit("update:modelValue", flag)
    }

    onBeforeMount(() => {});
    onMounted(() => { });

    const refData = toRefs(data);
    return {
      ...refData,
      changeHandler
    };
  },
};
</script>

<style scoped>
/* div /deep/ .el-switch.is-checked .el-switch__core {
  background-color: #1780E3;
} */
div :deep(.el-switch.is-checked) .el-switch__core {
  background-color: #1780E3;
}
</style>