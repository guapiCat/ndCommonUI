<template>
  <nd-button type="primary">主要按钮</nd-button>
  <nd-button type="success">成功按钮</nd-button>
  <nd-button type="default">默认按钮</nd-button>
  <nd-button type="warning">警告按钮</nd-button>
  <nd-button type="danger">危险按钮</nd-button>
  <nd-button type="primary" size="normal">
      <button class="button-self">自定义按钮</button>
      <span>按钮</span>
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
}
.button-self {
  color: black;
  margin: 0;
}
</style>
