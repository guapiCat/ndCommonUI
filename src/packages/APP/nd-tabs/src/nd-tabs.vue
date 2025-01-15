<template>
  <div :class="tailoring?'tailoring':noBorder?'noBorder':isBow?'isBow':''" class="nd-tabs">
    <van-tabs v-bind="$attrs" v-on="$attrs" v-model:active="porps.active" @click-tab="TabsClickTab" @change="TabsChange"
      @rendered="TabsRendered" @scroll="TabsScroll" >
      <slot default>

      </slot>
    </van-tabs>
  </div>
</template>
<script setup>
import { defineEmits, nextTick, reactive, defineProps } from "vue";
const emit = defineEmits(["ndTabsClickTab", "ndTabsChange", "ndTabsRendered", "ndTabsScroll"]);
const porps = defineProps({
  active: {
    type: Number,
    default: 0
  },
  noBorder: {
    type: Boolean,
    default: false
  },
  isBow: {
    type: Boolean,
    default: false
  },
  tailoring: {
    type: Boolean,
    default: false
  }
});
// 页面数据
const data = reactive({
});
// 点击标签时触发
const TabsClickTab = async (name, title, event, disabled) => {
  emit("ndTabsClickTab", name, title, event, disabled);
};
// 当前激活的标签改变时触发
const TabsChange = async (name, title) => {
  emit("ndTabsChange", name, title);
};
// 标签内容首次渲染时触发（仅在开启延迟渲染后触发）
const TabsRendered = async (name, title) => {
  emit("ndTabsRendered", name, title);
};
//滚动时触发，仅在 sticky 模式下生效
const TabsScroll = async (scrollTop, isFixed) => {
  emit("ndTabsRendered", scrollTop, isFixed);
}
// 页面加载完成
nextTick(() => {
})

</script>
<style lang="scss" scoped>
@import '../../common.scss';
.nd-tabs ::v-deep .van-tabs__line {
  background: $nd-primary-color!important;
}
.tailoring ::v-deep .van-tab--active .van-tab__text{
  font-size: 15px!important;
}
.nd-tabs.tailoring ::v-deep .van-tabs__line {
  height: 5px!important;
  border-radius: 0px 8px 0px 8px!important;
  background: linear-gradient(270deg, rgba(23,193,227,0.80) 0%, rgba(23,128,227,0.80) 100%)!important;
}

.nd-tabs ::v-deep .van-tab {
  font-size: 14px!important;
  color: $nd-tab-color!important;
}
.nd-tabs ::v-deep .van-tab--active {
  color: $nd-text-color!important;
}

.nd-tabs ::v-deep .van-tab.van-tab--card{
  color: $nd-primary-color!important;
}
.nd-tabs ::v-deep .van-tab.van-tab--card.van-tab--active{
  color: #fff!important;
  font-weight: normal!important;
}
.noBorder ::v-deep .van-tabs__nav--card {
  border: none!important;
}
.noBorder ::v-deep .van-tab--card {
  border: none!important;
}
.noBorder ::v-deep .van-tab.van-tab--card{
  color: $nd-text-color!important;
}
.noBorder ::v-deep .van-tab.van-tab--card.van-tab--active{
  border-radius: 15px!important;
}
.isBow ::v-deep .van-tabs__nav--card {
  border-radius: 15px!important;;
  overflow: hidden;
}
</style>