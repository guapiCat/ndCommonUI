<template>
  <nd-input placeholder="文本域" v-model="state.var0" @input="change" type="textarea"></nd-input>
</template>

<script>
import ndInput from '../../../../../src/packages/PC/nd-input/src/nd-input.vue';
import {ref, toRefs} from "vue";

export default {
  name: "",
  components: {ndInput},
  setup() {
    const state = ref({
      var0: ''
    })
    const change = (e) => {
      console.log(e)
    }
    return {
      state,
      change,
    }
  }
}
</script>

<style scoped>

</style>