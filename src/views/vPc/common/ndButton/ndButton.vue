<template>
  <button type="button" class="beeButton"
          :class="classStatus" @click="click" :disabled="disabled">
    <slot>默认按钮</slot>
  </button>
</template>

<script setup>
import { props, emits } from './propsEmit'
import { toRefs, defineProps, defineEmits, useAttrs } from 'vue'
// props
const localProps = defineProps(props)
const { type, disabled } = toRefs(localProps)
// emits
const emitsLocal = defineEmits(emits)
// 自定义属性
const defineAttrs = useAttrs()
const classStatus = {
  beeButtonPrimary: type.value === 'primary',
  beeButtonDefault: type.value === 'default',
  beeButtonError: type.value === 'error',
  beeButtonWarning: type.value === 'warning',
  beeButtonSuccess: type.value === 'success',
  beeButtonDisabled: disabled.value
}
console.log('attrs', defineAttrs)
// methods
const click = (e) => {
  if (!disabled.value) {
    emitsLocal('click', e)
  }
}
</script>

<style scoped lang="less">
@import "ndButton";
</style>
