<template>
  <div class="nd-index-anchor">
    <van-index-anchor v-bind="$attrs" v-on="$attrs">
    </van-index-anchor>
  </div>
</template>
<script setup>
import { nextTick, reactive, defineProps } from "vue";
const porps = defineProps({
  active: {
    type: [Number, String],
    default: 0
  }
});
// 页面数据
const data = reactive({
});
// 页面加载完成
nextTick(() => {
})
</script>
<style lang="scss" scoped>
@import '../../common.scss';

.nd-index-anchor ::v-deep .van-index-bar__index--active {
  color: $nd-primary-color !important;
}
</style>