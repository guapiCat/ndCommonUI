<template>
  <div class="nd-index-bar">
    <van-index-bar v-bind="$attrs" v-on="$attrs">

      <slot default> </slot>
      
    </van-index-bar>
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
.nd-index-bar ::v-deep .van-index-bar__sidebar {
  width: 12px!important;
  right: 12px!important;
}
.nd-index-bar ::v-deep .van-index-bar__index {
  padding: 0!important;
}
.nd-index-bar ::v-deep .van-index-anchor {
  font-size: 14px!important;
  font-weight: bold!important;
  line-height: 32px!important;
  letter-spacing: 0px!important;
  /* 文字颜色/#333 */
  color: $nd-text-color!important;
  height: 32px!important;
  background: $nd-default-bgcolor!important;
}
.nd-index-bar ::v-deep .van-index-bar__index {
  font-size: 12px!important;
  font-weight: normal!important;
  line-height: 18px!important;
  /* 文字颜色/#333 */
  color: $nd-text-color!important;
}
.nd-index-bar ::v-deep .van-index-anchor--sticky {
  color: $nd-primary-color !important;
}
.nd-vanIndexBar ::v-deep .van-index-bar__index--active {
  color: $nd-primary-color !important;
}
</style>

