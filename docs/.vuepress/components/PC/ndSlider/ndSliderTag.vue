<template>
  <nd-slider v-model="state.var0" range :marks="marks" ></nd-slider>
</template>

<script>
import ndSlider from '../../../../../src/packages/PC/nd-slider/src/nd-slider.vue';
import {reactive, ref, toRefs} from "vue";

export default {
  name: "",
  components: {ndSlider},
  setup() {
    const marks = reactive({
      0: '0°C',
      8: '8°C',
      37: '37°C',
      50: {
        style: {
          color: '#1989FA',
        },
        label: '50%',
      },
    })
    const state = ref({
      var0: ''
    })
    const change = (e) => {
      console.log(e)
    }
    return {
      state,
      change,
      marks
    }
  }
}
</script>

<style scoped>

</style>