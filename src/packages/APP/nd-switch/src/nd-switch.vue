<template>
  <div class="ndSwitch">
    <van-switch v-on="$attrs" v-bind="$attrs" v-model="checked">
      <template #node v-if="slots.node">
        <div class="icon-wrapper">
          <slot name="node"></slot>
        </div>
      </template>
    </van-switch>
  </div>
</template>

<script>
import { reactive, toRefs, useSlots, watch } from 'vue';

export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: {         // v-model绑定，控制开关是否开启
      type: [Boolean, Object],
      default: false,
    },
  },
  setup(props, ctx) {
    const data = reactive({
      checked: props.modelValue,
    });
    const slots = useSlots()

    // 同步开关开启状态
    watch(() => data.checked, () => {
      ctx.emit('update:modelValue', data.checked)
    })
    watch(() => props.modelValue, (val) => {
      data.checked = val;
    })

    const refData = toRefs(data);
    return {
      ...refData,
      slots,
    };
  },
};
</script>

<style scoped>
.icon-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 100%;
}
</style>