<template>
  <nd-popover v-model:show="show" :actions="actions" @select="onSelect">
    <template #reference>
      <nd-button type="primary">展示图标</nd-button>
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
      { text: '选项一', icon: 'add-o' },
      { text: '选项二', icon: 'music-o' },
      { text: '选项三', icon: 'more-o' },
    ]
    const onSelect = (e) => {
      console.log('onSelect:', e);
    }

    return { show, actions, onSelect }
  }
}
</script>