<template>
  <nd-calendar :range="[new Date(2019, 2, 4), new Date(2019, 2, 24)]"></nd-calendar>
</template>

<script>
import ndCalendar from '../../../../../src/packages/PC/nd-calendars/src/nd-calendar.vue';
import {ref, toRefs} from "vue";

export default {
  name: "",
  components: {ndCalendar},
  setup() {
   
   
    return {
      
    }
  }
}
</script>

<style scoped>

.is-selected {
  color: #1989fa;
}

</style>