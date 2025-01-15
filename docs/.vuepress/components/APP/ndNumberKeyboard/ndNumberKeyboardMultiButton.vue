<template>
  <nd-button @click="show = true">弹出配置多个按键的键盘</nd-button>
  <nd-number-keyboard
    :show="show"
    theme="custom"
    :extra-key="['00', '.']"
    close-button-text="完成"
    @blur="show = false"
    @input="onInput"
    @delete="onDelete"
  />
</template>

<script>
import { ref } from "vue"
import ndNumberKeyboard from "../../../../../src/packages/APP/nd-number-keyboard/src/nd-number-keyboard.vue"
import ndButton from "../../../../../src/packages/APP/nd-button/src/nd-button.vue"

export default {
  name: "ND_APP_NumberKeyboard",
  components: { ndNumberKeyboard, ndButton },
  setup() {
    const show = ref(false);
    const onInput = (value) => console.log(value)
    const onDelete = () => console.log('删除')

    return {
      show,
      onInput,
      onDelete,
    };
  },
}
</script>

<style scoped>
</style>