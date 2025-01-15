<template>
  <nd-search v-model="value" input-align="center"></nd-search>
</template>

<script>
import ndSearch from '../../../../../src/packages/APP/nd-search/src/nd-search.vue';
import { ref } from "vue"

export default {
  components: { ndSearch },
  setup(props, { emit, slots }) {
    const value = ref()

    return {
      value
    }
  }
}
</script>

<style scoped>
</style>