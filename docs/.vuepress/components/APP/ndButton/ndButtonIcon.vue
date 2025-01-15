<template>
  <div>
    <nd-button type="primary" size="normal" icon="plus" />
    <nd-button type="primary" size="normal" icon="plus" plain />
    <nd-button type="primary" size="small" icon="plus" />
    <nd-button type="primary" size="small" icon="plus" plain />
    <nd-button type="primary" size="mini" icon="plus" />
    <nd-button type="primary" size="mini" icon="plus" plain />
  </div>
  <div>
    <nd-button type="primary" size="normal" icon="plus">按钮</nd-button>
    <nd-button type="primary" size="normal" icon="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png" plain>按钮</nd-button>

  </div>
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