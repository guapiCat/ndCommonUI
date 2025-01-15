<template>
  <div class="nd-dialog">
    <van-dialog v-model:show="show" v-bind="$attrs" v-on="$attrs" :title="title" :message="message" :showConfirmButton="showConfirmButton" :showCancelButton="showCancelButton" 
      @confirm="confirm" @cancel="cancel" @close="close">

      <!-- 标题插槽 -->
      <template #title v-if="slotTitle">
        <slot name="title"></slot>
      </template>

      <!-- 内容插槽 -->
      <template #title v-if="slotDefault">
        <slot name="default"></slot>
      </template>

      <!-- 页脚插槽 -->
      <template #footer v-if="slotFoot">
        <slot name="footer"></slot>
      </template>

    </van-dialog>
  </div>
</template>

<script>
import { reactive, toRefs, watch, useSlots, onMounted, nextTick } from 'vue';


export default {
  props: {
    modelValue: {         // v-model绑定，控制弹窗显示隐藏
      type: Boolean,
      default: false,
    },
    defaultShow: {        // 设置是否默认显示
      type: Boolean,
      default: false,
    },
    title: {              // 标题
      type: String,
      default: '',
    },
    message: {            // 内容
      type: String,
      default: '',
    },
    showConfirmButton: {  // 显示确认按钮
      type: Boolean,
      default: true,
    },
    showCancelButton: {  // 显示确认按钮
      type: Boolean,
      default: false,
    },
    confirm: {               // 确认
      type: Function,
      default: () => {}
    },
    cancel: {             // 取消
      type: Function,
      default: () => {}
    },
    close: {             // 关闭
      type: Function,
      default: () => {}
    },
  },
  emits: ['confirm', 'cancel', 'close'],
  setup(props, ctx) {
    const data = reactive({
      show: false,
    });

    // 同步弹窗显示隐藏
    watch(() => data.show, () => {
      ctx.emit('update:modelValue', data.show)
    })

    watch(() => props.modelValue, (val) => {
      console.log('modelValue========', val);
      data.show = val;
    })

    onMounted(() => {
      if(props.defaultShow) {
        data.show = true;
      }
    })

    const confirm = () => {   // 点击了确认
      ctx.emit('confirm');
      let result = props.confirm();
      nextTick(() => {
        data.show = !!result;
      })
    }
    const cancel = () => {    // 点击了取消
      ctx.emit('cancel');
      let result = props.cancel();
      nextTick(() => {
        data.show = !!result;
      })
    }
    const close = () => {   // 关闭时触发
      ctx.emit('close');
      props.close();
    }

    const slotDefault = !!useSlots().default;     // 默认插槽
    const slotTitle = !!useSlots().title;         // title插槽
    const slotFoot = !!useSlots().footer;         // 页脚插槽

    const refData = toRefs(data);
    return {
      ...refData,
      confirm,
      cancel,
      close,
      slotDefault,
      slotTitle,
      slotFoot,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../common.scss';
</style>