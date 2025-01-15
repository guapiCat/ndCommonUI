<template>
  <teleport :to="mountPoint">
    <div class="newDimConfirm">
      <transition name="fade">
        <div :style="{width: width+'px'}"
             class="newDimConfirmContainer" v-show="localValue"
             ref="newDimConfirmContainer">
          <div class="tc-cmnTit">
            {{ title }}
            <i class="tc-close" @click="cancel" v-if="showClose">×</i>
          </div>
          <div class="confirmContentContainer">
            <i :class="className" class="confirmContentIcon"></i>
            <div class="confirmContent">
              <slot>{{ message }}</slot>
            </div>
          </div>
          <slot name="footer">
            <div class="tc-btn-box" v-if="showConfirmBtn||showCancelBtn">
              <bee-button type="primary" @click="save" v-if="showConfirmBtn" style="margin-right: 20px;">
                {{ confirmBtnText }}
              </bee-button>
              <bee-button type="warning" @click="cancel" v-if="showCancelBtn">
                {{ cancelBtnText }}
              </bee-button>
            </div>
          </slot>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script>
import { confirmProps } from './confirmProps'
import BeeButton from '../ndButton/ndButton.vue'
import { onBeforeMount, ref, toRefs } from 'vue'

export default {
  components: { BeeButton },
  name: 'ndConfirm',
  emits: ['update:modelValue', 'confirm', 'cancel'],
  setup (props, { emit }) {
    console.log(props)
    const { type, modelValue } = toRefs(props)
    const newDimConfirmContainer = ref(null)
    const localValue = ref(false)
    localValue.value = modelValue.value
    const cancel = () => {
      localValue.value = false
      setTimeout(() => {
        emit('cancel')
        emit('update:modelValue', localValue.value)
      }, 200)
    }
    const computedClassName = () => {
      className.value = {
        success: type.value === 'success',
        warning: type.value === 'warning',
        info: type.value === 'info',
        default: type.value === 'default'
      }
    }
    const className = ref({})
    const save = () => {
      emit('confirm')
    }
    onBeforeMount(() => {
      computedClassName()
    })
    return {
      localValue,
      className,
      newDimConfirmContainer,
      cancel,
      save
    }
  },
  props: confirmProps
}
</script>

<style scoped lang="less">
@import "ndConfirm";
</style>
