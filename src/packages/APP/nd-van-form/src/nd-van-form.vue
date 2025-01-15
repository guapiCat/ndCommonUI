<template>
  <div :class="class" :id="id">
    <van-form @submit="submit" @failed="failed" v-on="$attrs" v-bind="$attrs">

      <slot></slot>

    </van-form>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  emits: ['submit', 'failed'],
  props: {
    class: {                  // 提供类名
      type: [String, Object],
      required: false,
      default: ''
    },
    id: {                     // 提供类名
      type: String,
      required: false,
      default: ''
    },
  },
  setup(props, ctx) {
    const data = reactive({ });

    // 提交。校验成功触发
    const submit = (e) => {
      ctx.emit('submit', e);
    }

    // 提交。校验失败触发
    const failed = (e) => {
      ctx.emit('failed', e);
    }

    const refData = toRefs(data);
    return {
      ...refData,
      submit,
      failed,
    };
  },
};
</script>

<style scoped>
</style>