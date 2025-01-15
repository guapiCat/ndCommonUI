<template>
  <div class="beeInputContainer">
    <div>
      <input :value="inputValue" @input="input" class="beeInput" :placeholder="placeholder"
             :disabled="disabled" :style="styles" type="text"/>
      <div class="beeInputBefore" ref="before">
        <slot name="before"></slot>
      </div>
      <div class="beeInputAfter" ref="after">
        <slot name="after"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRefs, defineEmits, useAttrs, ref, useSlots, reactive, onMounted } from 'vue'
import { props, emits } from './propsEmit'

// props
const localProps = defineProps(props)
const { disabled, modelValue, placeholder } = toRefs(localProps)

// emits
const emitsLocal = defineEmits(emits)
// slots
const slots = useSlots()
// 非props属性
const attrs = useAttrs()
// 组件input值
const inputValue = ref('')
inputValue.value = modelValue.value
const maxLength = attrs.maxLength
const styles = reactive({
  paddingLeft: null,
  paddingRight: null
})
const before = ref(null)
const after = ref(null)
// input emitter
const input = (e) => {
  inputValue.value = e.target.value
  if (maxLength) {
    inputValue.value = inputValue.value.substring(0, parseInt(maxLength))
  }
  if (!disabled.value) {
    emitsLocal('update:modelValue', inputValue.value)
    emitsLocal('input', e)
  }
}
onMounted(() => {
  // 是否有前置slot
  if (slots.before) {
    styles.paddingLeft = (before.value.offsetWidth) + 'px'
  }
  // 是否有后置slot
  if (slots.after) {
    styles.paddingRight = (after.value.offsetWidth) + 'px'
  }
})
</script>

<style scoped lang="less">
@import './beeInput';
</style>
