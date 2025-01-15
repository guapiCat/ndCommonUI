<template>
  <nd-button type="primary" size="large">大号按钮</nd-button>
  <nd-button type="primary" size="normal">普通按钮</nd-button>
  <nd-button type="primary" size="small">小型按钮</nd-button>
  <nd-button type="primary" size="mini">迷你按钮</nd-button>
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