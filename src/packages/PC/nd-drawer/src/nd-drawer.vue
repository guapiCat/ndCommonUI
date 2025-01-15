<template>
  <el-drawer 
    v-bind="$attrs" 
    v-on="$attrs" 
    :modelValue="modelValue" 
    :direction="direction"
    :show-close="showClose" 
    :custom-class="'nd-drawer'"
    @close="closeDrawer" 
    @change="onChange"
  >
    <template v-slot:header v-if="slots.header">
      <slot name="header"></slot>
    </template>
    <!--footer slot-->
    <template v-slot:footer v-if="slots.footer">
      <slot name="footer"></slot>
    </template>
    <template v-slot:footer v-if="!slots.footer">
      <div>
        <el-button @click="cancelCallback">{{ leftText }}</el-button>
        <el-button type="primary" @click="sureCallback">{{ rightText }}</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script>
export default {
  name: "nd-drawer",
  props: {
    // v-mode  v-mode:modelValue
    modelValue: {
      type: Boolean,
      default: false
    },
    // 方向
    direction: {
      type: String,
      default: 'rtl'
    },
    // 是否显示关闭按钮
    showClose: {
      type: Boolean,
      default: true
    },
    leftText: {
      type: String,
      default: '取消'
    },
    rightText: {
      type: String,
      default: '确定'
    }
  },
  emits: ["update:modelValue"],
  setup(props, {emit, slots}) {
    const onChange = (value) => {
      emit("update:modelValue", value)
    }
    const cancelCallback = () => {
      emit('cancel')
    }
    const sureCallback = () => {
      emit('sure')
    }
    const closeDrawer = () => {
      emit('update:modelValue', false)
    }
    return {
      onChange,
      cancelCallback,
      sureCallback,
      slots,
      closeDrawer
    }
  },
}
</script>

<style lang="less">
.nd-drawer .el-drawer__footer {
  border-top: 1px solid #dcdfe6;
  padding: 20px;
}
</style>