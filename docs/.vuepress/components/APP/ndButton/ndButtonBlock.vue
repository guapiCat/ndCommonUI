<template>
  <nd-button type="primary" block>块级元素</nd-button>
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