<template>
  <div class="vantScrollcom">
    <PullRefresh
      v-model="props.vloading"
      :pulling-text="props.pullingText"
      :loosing-text="props.loosingText"
      :loading-text="props.loadingText"
      :success-text="props.successText"
      :success-duration="props.successDuration"
      :animation-duration="props.animationDuration"
      :head-height="props.headHeight"
      :pull-distance="props.pullDistance"
      :disabled="props.disabled"
      @refresh="onRefresh"
      style="height: 100%"
    >
      <div class="scrollDiv">
        <!-- 列表区域 -->
        <slot></slot>
      </div>
    </PullRefresh>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { PullRefresh } from "vant";
import { defineEmits, defineProps } from "vue";
import { onMounted } from "vue";

// 组件传值
const props = defineProps({
  pullingText: {
    // 下拉过程提示文案
    type: String,
    default: "下拉即可刷新...",
    require: false
  },
  loosingText: {
    // 释放过程提示文案
    type: String,
    default: "释放即可刷新...",
    require: false
  },
  loadingText: {
    // 释放过程提示文案
    type: String,
    default: "加载中...",
    require: false
  },
  successText: {
    // 刷新成功提示文案
    type: String,
    default: "刷新成功!",
    require: false
  },
  successDuration: {
    // 刷新成功提示展示时长(ms)
    type: Number,
    default: 500,
    require: false
  },
  animationDuration: {
    // 动画时长(ms)
    type: Number,
    default: 300,
    require: false
  },
  headHeight: {
    // 顶部内容高度
    type: Number,
    default: 50,
    require: false
  },
  pullDistance: {
    // 顶部内容高度(v3.0.8以上)
    type: Number,
    default: 50,
    require: false
  },
  disabled: {
    // 是否禁用下拉刷新
    type: Boolean,
    default: false,
    require: false
  },
  vloading: {
    // 是否处于加载中状态
    type: Boolean,
    default: false,
    require: false
  }
});

const emit = defineEmits(["pageDown", "dropDown"]); // 声明触发事件

// 生命周期
onMounted(() => {
  // 挂载监听滚动事件
  document.querySelector(".scrollDiv").addEventListener("scroll", onScroll);
});

// 定时器的值
const scrollTime = ref("");  
// 上拉触发的方法
const onScroll = () => {   
  let inner = document.querySelector(".scrollDiv");
  if (inner.scrollHeight - inner.scrollTop <= inner.clientHeight) {
    if (inner.scrollTop > 10) {
      if (scrollTime.value) {
        clearTimeout(scrollTime.value);
      }
      scrollTime.value = setTimeout(() => {
        console.log(11111);
        emit("pageDown");
      }, 200);
    }
  }
};

// 下拉释放执行的方法(先滚动到顶部)
const onRefresh = () => {  
  let inner = document.querySelector(".scrollDiv");
  inner.scrollTop = 0
  emit("dropDown");
};
</script>

<style scoped>
.vantScrollcom {
  height: 100%;
  width: 100%;
}
.scrollDiv {
  height: 100%;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
}
</style>
