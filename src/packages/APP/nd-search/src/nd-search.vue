<template>
  <van-search 
    :background="background" 
    :placeholder="placeholder" 
    :clearable="clearable"
    @search="search"
    @cancel="cancel"
    v-model="value" 
    v-on="$attrs"
    v-bind="$attrs"
    ref="ndSearch"
    :style="{'border-radius': borderRadius}"
    >

    <!-- 左侧内容 -->
    <template #left v-if="solts.left">
      <slot name="left"></slot>
    </template>

    <!-- 左侧文本 -->
    <template #label v-if="solts.label">
      <slot name="label"></slot>
    </template>

    <!-- 左侧图标 -->
    <template #left-icon v-if="solts.leftIcon">
      <slot name="leftIcon"></slot>
    </template>
    
    <!-- 右侧内容 -->
    <template #action v-if="solts.action">
      <slot name="action"></slot>
    </template>

    <!-- 右侧图标 -->
    <template #right-icon v-if="solts.rightIcon">
      <slot name="rightIcon"></slot>
    </template>

  </van-search>
</template>
<script>
import { ref, reactive, toRefs, watch, useSlots } from 'vue';

export default {
  props: {
    modelValue: { type: [String, Number], default: "" },
    placeholder: { type: String, default: "请输入搜索关键词" },
    background: { type: String, default: '#F5F7FA' },
    clearable: { type: Boolean, default: false },
    borderRadius: { type: String, default: '2px' },
  },
  emits: ["update:modelValue", 'search', 'cancel'],
  setup(props, ctx) {
    const ndSearch = ref(null)
    const data = reactive({
      value: props.modelValue,
    });
    const solts = useSlots();

    // 同步model信息
    watch(() => data.value, () => {
      ctx.emit('update:modelValue', data.value);
    })
    watch(() => props.modelValue, (val) => {
      data.value = val;
    })

    const search = () => {
      ctx.emit('search')
    }
    const cancel = () => {
      ctx.emit('cancel')
    }

    const refData = toRefs(data);
    return {
      ...refData,
      ndSearch,
      solts,
      search,
      cancel
    };
  },
  
};
</script>

<style scoped lang="scss">
@import '../../common.scss';

.van-search {
  :deep(.van-search__content) {
    background-color: #fff;
  }
}
</style>