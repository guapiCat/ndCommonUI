<template>
  <div class="ndTreeSelect">
    <van-tree-select v-on="$attrs" v-bind="$attrs" v-model:main-active-index="porps.treeObj.activeIndex" :items="porps.treeObj.items" v-model:active-id="porps.treeObj.activeId">
      <template #content v-if="slots.content">
          <slot name="content"></slot>
      </template>
    </van-tree-select>
  </div>
</template>
<script setup>
import { reactive, nextTick, defineProps, useSlots  } from "vue";
const slots = useSlots()
const porps = defineProps({
  treeObj: {
    type: Object,
    default: {
      activeIndex: 0,
      items: [],
      activeId: undefined
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
.ndTreeSelect ::v-deep .van-sidebar-item--select:before {
  background-color: $nd-primary-color!important;
}
.ndTreeSelect ::v-deep .van-tree-select__item--active {
  color: $nd-primary-color!important;
}
.ndTreeSelect ::v-deep .van-sidebar-item {
  font-size: 14px;
  font-weight: normal;
  color: $nd-text-color!important;
}
.ndTreeSelect ::v-deep .van-tree-select__item {
  font-size: 14px;
  font-weight: normal;
  color: $nd-text-color!important;
}
.ndTreeSelect ::v-deep .van-tree-select__item .van-icon{
  color: $nd-primary-color!important;
}
.ndTreeSelect ::v-deep .van-sidebar-item--disabled {
  color: $nd-disabled-color!important;
}
.ndTreeSelect ::v-deep .van-tree-select__item--disabled {
  color: $nd-disabled-color!important;
}
</style>