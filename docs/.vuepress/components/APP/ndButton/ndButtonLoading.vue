<template>
  <nd-button loading type="primary" />
  <nd-button loading type="primary" loading-type="spinner" />
  <nd-button loading type="success" loading-text="加载中..." />
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