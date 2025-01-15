<template>
    <nd-calendar></nd-calendar>
</template>

<script>
import ndCalendar from '../../../../../src/packages/PC/nd-calendars/src/nd-calendar.vue';
import {ref, toRefs} from "vue";

export default {
  name: "",
  components: {ndCalendar},
  setup() {
    const state = ref({
      value: ''
    })
   
    return {
      state
      
    }
  }
}
</script>

<style scoped>


</style>