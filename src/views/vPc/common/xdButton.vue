<template>
  <div class="xd-btn" :class="`xd-btn-${size} xd-btn-${type} xd-disabled-${disabled || false}`">
    {{btnTxt}}
    <slot></slot>
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';

export default {
  name: '',
  props: [
    'round',
    'btnTxt',
    'circle',
    'size',        // 大小：medium中 small肖 mini超小
    'type',        // 类型：primary主要 success成功 info信息 warning警告 danger危险 text文字按钮
    'disabled',    // 禁止点击
  ],
  setup(props, ctx) {
    const data = reactive({});
    const { proxy } = getCurrentInstance();

    onBeforeMount(() => {});
    onMounted(() => {});

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>

<style scoped>
.xd-btn {
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  padding: 0 4px;
  cursor: pointer;
}
.xd-btn-medium {
  min-width: 96px;
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
  font-size: 16px;
}
.xd-btn-small {
  min-width: 88px;
  height: 32px;
  line-height: 32px;
  border-radius: 4px;
  font-size: 14px;
}
.xd-btn-mini {
  min-width: 80px;
  height: 24px;
  line-height: 24px;
  border-radius: 4px;
  font-size: 12px;
}
.xd-btn-primary {
  color: white;
  background: #1780E3;
}
.xd-btn-primary:hover {
  background: rgba(23, 128, 227, 0.8);
}
.xd-btn-primary:active {
  background: #0C70CE;
}
.xd-btn-success {
  color: white;
  background: #52C41A;
}
.xd-btn-success:hover {
  background: rgba(82, 196, 26, 0.8);
}
.xd-btn-success:active {
  background: #4CAA1E;
}
.xd-btn-info {
  color: black;
  background: #F5F7FA;
}
.xd-btn-warning {
  color: white;
  background: #FA8C16;
}
.xd-btn-warning:hover {
  background: rgba(250, 140, 22, 0.8);
}
.xd-btn-warning:active {
  background: #CB6C06;
}
.xd-btn-danger {
  color: white;
  background: #FF4D4F;
}
.xd-btn-danger:hover {
  background: rgba(255, 77, 79, 0.8);
}
.xd-btn-danger:active {
  background: #DC0002;
}
.xd-btn-text {
  background: #1780E3;
}
.xd-disabled-true {
  opacity: 0.2;
}
.xd-disabled-true:hover {
  
}
</style>