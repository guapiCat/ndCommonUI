<template>
  <teleport to=".newDimMessageParent">
    <div class="newDimMessageContainer">
      <transition name="fade">
        <div class="newDimMessageContent" v-show="localValue" :class="className">
          <i :class="className" class="MessageContentIcon"></i>
          <div class="messageContent">
            {{ message }}
          </div>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script>
import { onBeforeMount, ref, toRefs } from 'vue'
import { props as propsObject } from './propsEmit'

export default {
  name: 'ndMessage',
  setup (props) {
    const { duration, onClose, modelValue, message, type } = toRefs(props)
    const localValue = ref(false)
    const className = ref('')
    const computedClassName = () => {
      className.value = {
        success: type.value === 'success',
        warning: type.value === 'warning',
        info: type.value === 'info',
        error: type.value === 'error'
      }
    }
    onBeforeMount(() => {
      localValue.value = modelValue.value
      computedClassName()
    })
    setTimeout(() => {
      localValue.value = false
      setTimeout(() => {
        onClose.value()
      }, 200)
    }, duration.value)
    return {
      localValue,
      message,
      className
    }
  },
  props: propsObject
}
</script>

<style scoped lang="less">
@import "ndMessage";
</style>
