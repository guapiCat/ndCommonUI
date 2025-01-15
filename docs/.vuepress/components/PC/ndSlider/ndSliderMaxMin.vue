<template>
  <nd-slider v-model="state.var0" range show-stops :max="10"></nd-slider>
</template>

<script>
import ndSlider from '../../../../../src/packages/PC/nd-slider/src/nd-slider.vue';
import {ref, toRefs} from "vue";

export default {
  name: "",
  components: {ndSlider},
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