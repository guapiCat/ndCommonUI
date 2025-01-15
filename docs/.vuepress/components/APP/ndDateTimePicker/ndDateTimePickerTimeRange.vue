<template>
  <nd-button @click="showPopup">选择时间区间</nd-button>
  
  <van-popup v-model:show="show" position="bottom" :style="{ height: '45%' }">
    <nd-date-picker
      v-model="currentDate"
      title="选择时间区间"
      type="timerange"
    />
  </van-popup>
</template>

<script>
import { ref } from "vue"
import ndDatePicker from "../../../../../src/packages/APP/nd-datepicker/src/nd-datepicker.vue"
import ndButton from "../../../../../src/packages/APP/nd-button/src/nd-button.vue"

export default {
  name: "ND_APP_DateTimePicker",
  components: { ndDatePicker, ndButton },
  setup() {
    const currentDate = ref(['2021', '01', '01']);
    const show = ref(false)

    const showPopup = () => {
      show.value = true;
    };

    return {
      currentDate,
      show,
      showPopup
    };
  },
}
</script>

<style scoped>
</style>