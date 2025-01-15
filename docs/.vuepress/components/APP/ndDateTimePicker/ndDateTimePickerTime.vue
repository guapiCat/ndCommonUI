<template>
  <nd-button @click="() => show1 = true">选择时分</nd-button>
  <nd-button @click="() => show2 = true">选择时分秒</nd-button>
  
  <van-popup v-model:show="show1" position="bottom" :style="{ height: '30%' }">
    <nd-date-picker
      v-model="currentTime1"
      title="选择时分"
      :columns-type="columnsType1"
    />
  </van-popup>
  <van-popup v-model:show="show2" position="bottom" :style="{ height: '30%' }">
    <nd-date-picker
      v-model="currentTime2"
      title="选择时分秒"
      :columns-type="columnsType2"
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
    const currentTime1 = ref(['12', '00']);
    const show1 = ref(false)
    const columnsType1 = ['hour', 'minute'];

    
    const currentTime2 = ref(['12', '00', '00']);
    const show2 = ref(false)
    const columnsType2 = ['hour', 'minute', 'second'];


    return {
      currentTime1,
      show1,
      columnsType1,
      currentTime2,
      show2,
      columnsType2,
    };
  },
}
</script>

<style scoped>
</style>