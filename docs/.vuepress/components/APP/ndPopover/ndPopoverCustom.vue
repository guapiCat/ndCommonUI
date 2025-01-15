<template>
  <nd-popover v-model:show="show">
    <div class="wrapper">
      <div v-for="item of actions" @click="clickAct(item)">
        {{ item.text }}, {{ item.number }}
      </div>
    </div>
    <template #reference>
      <nd-button type="primary">自定义内容</nd-button>
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
      { text: '选项一', number: 1 },
      { text: '选项二', number: 100 },
      { text: '选项三', number: 50 },
    ]

    const clickAct = (item) => {
      console.log('item:', item);
      show.value = false;
    }

    return { 
      show, 
      actions,
      clickAct,
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  padding: 10px 12px;
}
.wrapper div {
  margin: 10px 0;
  cursor: pointer;
}
</style>