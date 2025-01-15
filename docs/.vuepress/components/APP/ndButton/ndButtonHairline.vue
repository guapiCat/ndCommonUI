<template>
  <nd-button plain hairline type="primary">细边框按钮</nd-button>
  <nd-button plain hairline type="success">细边框按钮</nd-button>
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