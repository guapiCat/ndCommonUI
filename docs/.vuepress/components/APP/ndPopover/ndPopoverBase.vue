<template>
  <nd-popover v-model:show="show1" :actions="actions" @select="onSelect">
    <template #reference>
      <nd-button type="primary" class="mr10">浅色风格</nd-button>
    </template>
  </nd-popover>
  <nd-popover v-model:show="show2" :actions="actions" theme="dark" @select="onSelect">
    <template #reference>
      <nd-button type="primary">深色风格</nd-button>
    </template>
  </nd-popover>
</template>

<script>
import ndPopover from '../../../../../src/packages/APP/nd-popover/src/nd-popover.vue';
import ndButton from '../../../../../src/packages/APP/nd-button/src/nd-button.vue';
import { ref } from "vue"

export default {
  name: "ND_APP_Popover",
  components: { ndPopover, ndButton },
  setup(props, { emit, slots }) {
    const show1 = ref(false)
    const show2 = ref(false)

    // 通过 actions 属性来定义菜单选项
    const actions = [
      { text: '选项一' },
      { text: '选项二' },
      { text: '选项三' },
    ]
    const onSelect = action => console.log(action.text)

    return { show1, show2, actions, onSelect }
  }
}
</script>

<style scoped>
.mr10 {
  margin-right: 10px;
}
</style>