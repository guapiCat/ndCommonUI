<template>
  <nd-button @click="showPopup">选择年月</nd-button>
  
  <van-popup v-model:show="show" position="bottom" :style="{ height: '30%' }">
    <nd-date-picker
      v-model="currentDate"
      title="选择年月"
      :min-date="minDate"
      :max-date="maxDate"
      :columns-type="columnsType"
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
    const currentDate = ref(['2021', '01']);
    const show = ref(false)
    const columnsType = ['year', 'month'];

    const showPopup = () => {
      show.value = true;
    };

    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 5, 1),
      currentDate,
      show,
      columnsType,
      showPopup
    };
  },
}
</script>

<style scoped>
</style>