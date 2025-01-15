<template>
  <div class="nd-empty">
    <slot></slot>
    <p class="nd-empty-text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "nd-empty",
  setup() {

  },
  props: {
    text: {
      type: String,
      default: '暂无数据',
      required: false
    }
  }
}
</script>

<style scoped lang="less">
.nd-empty {
  text-align: center;

  .nd-empty-text {
    margin-top: 10px;
  }
}
</style>