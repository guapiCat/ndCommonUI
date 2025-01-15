<template>
  <div class="nd-steps" :class="{ 'nd-steps1': props.type == 1 || props.type == 2, 'nd-steps2': props.type == 2 }">
    <van-steps v-bind="$attrs" v-on="$attrs" :active="active" :direction="direction" :active-color="props.activeColor"
      :inactive-color="props.inactiveColor" :finish-icon="props.finishIcon != '' ? props.finishIcon : null"
      :inactive-icon="props.inactiveIcon != '' ? props.inactiveIcon : null"
      @click-step="stepsClickStep">
      <slot default>
      </slot>
    </van-steps>
  </div>
</template>
<script setup>
import { defineEmits, nextTick, reactive, defineProps, provide } from "vue";
const emit = defineEmits(["ndStepsClickStep"]);
provide('nd-steps', props);
const props = defineProps({
  type: { //样式
    type: [Number, String],
    default: 3
  },
  active: { //当前步骤对应的索引值
    type: [Number, String],
    default: 0
  },
  direction: {//步骤条方向  horizontal 横向 vertical竖向
    type: [Number, String],
    default: 'horizontal'
  },
  'active-icon': {//当前步骤图标
    type: String,
    default: "checked"
  },
  'active-color': {//当前步骤和已完成步骤的颜色
    type: String,
    default: "#1780e3"
  },
  'inactive-icon': {//未激活步骤的颜色
    type: String,
    default: ""
  },
  'inactive-color': {//未激活步骤的颜色
    type: String,
    default: "#c6c6c8"
  },
  'finish-icon': {//已完成图标
    type: String,
    default: ""
  },
  'error-icon': {
    type: String,
    default: 'warning'
  },
  'error-color': {
    type: String,
    default: '#FA8C16'
  },
});
// 页面数据
const data = reactive({
});
// 点击步骤的标题或图标时触发
const stepsClickStep = async (index) => {
  emit("ndStepsClickStep", index);
};

// 页面加载完成
nextTick(() => {

})

</script>
<style scoped>
.nd-steps1>>>.van-step--horizontal .van-step__icon {
  font-size: var(--van-step-circle-height);
}

.nd-steps1>>>i {
  width: var(--van-step-circle-width);
  height: var(--van-step-circle-height);
}

.nd-steps1>>>.van-step {
  text-align: center;
  position: relative;
  flex: 1;
}

.nd-steps1>>>.nd-steps--horizontal {
  padding: 10px 0;
}

.nd-steps>>>.van-step__icon--finish {
  background-color: #fff;
}

.nd-steps>>>.van-step__icon--active {
  background-color: #fff;
}

.nd-steps1>>>.van-step--horizontal .van-step__title {
  margin-left: 0px;
  transform: none;
  padding-top: 20px;
}

.nd-steps1>>>.van-step--horizontal .van-step__circle-container {
  position: absolute;
  left: calc(20px * -1 + 50%);
  z-index: 1;
  top: 0 !important;
}

.nd-steps1>>>.van-step__line {
  top: 0;
  left: 50%;
}

.nd-steps2>>>.van-step__circle-container {
  background-color: rgba(0, 0, 0, 0) !important;
}


.nd-steps1>>>.van-step--horizontal:last-child .van-step__circle-container {
  right: auto;
}

.nd-steps1>>>.van-step--horizontal .van-step__info {
  padding-top: 0px;
  text-align: center;
}

.nd-steps1>>>.van-step--horizontal:last-child .van-step__info {
  padding-left: 0px;
}

.nd-steps1>>>.van-steps--horizontal {
  padding: 15px 0 0 0;
}


.nd-steps1>>>.van-step-icon-content-finish {
  background-color: #fff;
}

.nd-steps1>>>.van-steps--horizontal .van-steps__items {
  padding-bottom: 0px;
}

</style>