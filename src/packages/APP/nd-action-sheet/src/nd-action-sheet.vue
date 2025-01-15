<template>
  <div class="ndActionSheet">
    <van-action-sheet v-on="$attrs" v-bind="$attrs" v-model:show="porps.sheetObj.show">
      <div v-if="slots.default">
        <slot></slot>
      </div>
    </van-action-sheet>
  </div>
</template>
<script setup>
import { reactive, nextTick, defineProps, useSlots  } from "vue";
const slots = useSlots()
const porps = defineProps({
  sheetObj: {
    type: Object,
    default: {
      show: false
    }
  },
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
.ndActionSheet ::v-deep .van-action-sheet__item--disabled {
  color: $nd-disabled-color!important;
}
.ndActionSheet ::v-deep .van-action-sheet__item--loading .van-loading {
  color: #C9C9C9!important;
}
</style>