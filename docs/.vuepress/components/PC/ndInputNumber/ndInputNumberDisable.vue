<template>
  <div>
    <nd-input-number is-error size="large" :disabled="true"></nd-input-number>&nbsp;&nbsp;
    <nd-input-number is-error :disabled="true"></nd-input-number>&nbsp;&nbsp;
    <nd-input-number is-error size="small" :disabled="true"></nd-input-number>&nbsp;&nbsp;
  </div>

  <div style="margin-top:15px;">
    <nd-input-number size="large" :disabled="true"></nd-input-number>&nbsp;&nbsp;
    <nd-input-number :disabled="true"></nd-input-number>&nbsp;&nbsp;
    <nd-input-number size="small" :disabled="true"></nd-input-number>&nbsp;&nbsp;
  </div>
</template>

<script>
import ndInputNumber from '../../../../../src/packages/PC/nd-input-number/src/nd-input-number.vue';

export default {
  name: "",
  components: {ndInputNumber},
}
</script>

<style scoped lang="less">

</style>
