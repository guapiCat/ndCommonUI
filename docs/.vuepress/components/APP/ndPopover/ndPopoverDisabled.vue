<template>
  <nd-popover v-model:show="show" :actions="actions" @select="onSelect">
    <template #reference>
      <nd-button type="primary">禁用选项</nd-button>
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
  setup() {
    const show = ref(false)

    const actions = [
      { text: '选项一', disabled: true },
      { text: '选项二', disabled: true },
      { text: '选项三' },
    ]
    const onSelect = action => console.log(action.text)

    return { show, actions, onSelect }
  }
}
</script>