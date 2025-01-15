<template>
  <nd-button color="#7232dd">单色按钮</nd-button>
  <nd-button color="#7232dd" plain>单色按钮</nd-button>
  <nd-button color="linear-gradient(to right, #ff6034, #ee0a24)">
    渐变色按钮
  </nd-button>
</template>

<script>
import ndButton from '../../../../../src/packages/APP/nd-button/src/nd-button.vue';

export default {
  name: "ND_APP_Button",
  components: { ndButton },
  setup(props, { emit, slots }) {
    return {
    }
  }
}
</script>

<style scoped>
button {
  margin-right: 15px;
  margin-bottom: 5px;
}
</style>