<template>
  <div class="nd-tab">
    <van-tab v-bind="$attrs" v-on="$attrs">
      <slot default>
      </slot>
      <template #title v-if="!$attrs.title">
        <slot name="title">
        </slot>
      </template>
    </van-tab>
  </div>
</template>
<script setup>
import { reactive, nextTick } from "vue";
// 页面数据
const data = reactive({
});
// 页面加载完成
nextTick(() => {

})
</script>
<style scoped>

</style>