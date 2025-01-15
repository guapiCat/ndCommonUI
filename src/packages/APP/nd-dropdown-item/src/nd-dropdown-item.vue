<template>
  <div class="nd-dropdownItem">
    <van-dropdown-item ref="dropdownItem" v-bind="$attrs" v-on="$attrs" v-model="porps.itemValueObj.value">
      <div v-if="slots.default">
        <slot></slot>
      </div>
      <template #title v-if="slots.title">
          <slot name="title"></slot>
      </template>
    </van-dropdown-item>
  </div>
</template>
<script setup>
import { nextTick, reactive, defineProps, useSlots, ref, defineExpose } from "vue";
const slots = useSlots()
const porps = defineProps({
  itemValueObj: {
    type: Object,
    default: {
      value: ""
    }
  }
});
const dropdownItem = ref(null)
const closeDrop = () => {
  dropdownItem.value.toggle();
}
// 页面数据
const data = reactive({
});
// 页面加载完成
nextTick(() => {
})
defineExpose({closeDrop})
</script>
<style lang="scss" scoped>
@import '../../common.scss';
</style>