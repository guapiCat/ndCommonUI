<template>
<div class="tag-group my-2 flex flex-wrap gap-1 items-center">
    <span class="tag-group__title m-1" style="margin-right:40px">Plain</span>
    
    <nd-tag
      v-for="item in items"
      :key="item.label"
      class="mx-1"
      :type="item.type"
      effect="plain"
      closable
    >
      {{ item.label }}
    </nd-tag>
  </div>
   <div class="tag-group my-2 flex flex-wrap gap-1 items-center">
    <span class="tag-group__title m-1" style="margin-right:40px">Light</span>
    
    <nd-tag
      v-for="item in items"
      :key="item.label"
      class="mx-1"
      :type="item.type"
      effect="light"
      closable
    >
      {{ item.label }}
    </nd-tag>
  </div>
    <div class="tag-group my-2 flex flex-wrap gap-1 items-center">
    <span class="tag-group__title m-1 line-height-2" style="margin-right:40px">Dark</span>
   
    <nd-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      class="mx-1"
      effect="dark"
      closable
    >
      {{ item.label }}
    </nd-tag>
  </div>
 
  

</template>

<script lang="ts" setup>
import ndTag from '../../../../../src/packages/PC/nd-tag'

import { ref } from 'vue'

import type { TagProps } from 'element-plus'

type Item = { type: TagProps['type']; label: string }

const items = ref<Array<Item>>([
  { type: '', label: '默认' },
  { type: 'success', label: '默认' },
  { type: 'info', label: '默认' },
  { type: 'danger', label: '默认' },
  { type: 'warning', label: '默认' },
])
</script>

<style scoped>
.nd-tag {
    margin-right: 40px;
    margin-bottom: 28px;
}
</style>