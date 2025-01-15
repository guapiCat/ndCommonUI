<template>
  <div class="nd-overlay">
    <van-overlay 
      :show="show" v-bind="$attrs" v-on="$attrs" 
      @click="ndClick" :custom-style="{'background': 'rgba(0, 0, 0, '+opacity+')'}"
    >

      <slot></slot>

    </van-overlay>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from 'vue';

export default {
  emits: ['ndClick', 'update:modelValue'],
  props: {
    modelValue: {         // v-model绑定，控制弹窗显示隐藏
      type: Boolean,
      default: false,
    },
    opacity: {
      type: [Number, String],
      default: 0.3
    }
  },
  setup(props, ctx) {
    const data = reactive({
      show: false,        // 控制遮罩层显示隐藏
    });

    // 同步弹窗显示隐藏
    watch(() => data.show, () => {
      ctx.emit('update:modelValue', data.show)
    })
    watch(() => props.modelValue, (val) => {
      data.show = val;
    })

    const ndClick = (e) => {
      data.show = false;
      ctx.emit('ndClick', e);
    }


    const refData = toRefs(data);
    return {
      ...refData,
      ndClick,
    };
  },
};
</script>

<style scoped>
</style>