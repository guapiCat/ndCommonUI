<template>
  <nd-button disabled type="primary">禁用状态</nd-button>
  <nd-button disabled type="success">禁用状态</nd-button>
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
}
</style>