<template>

  <b>时间选择器是一个div区域，它可以配合蒙层van-popup使用。自带确认和取消按钮，点击后可通过事件回调获取</b>
  <br />
  <br />

  <nd-button @click="showPopup">{{ text }}</nd-button>
  
  <van-popup v-model:show="show" position="bottom" :style="{ height: '30%' }">
    <nd-date-picker
      v-model="currentDate"
      title="选择年月日"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirm"
      @cancel="cancel"
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
    const text = ref('选择年月日')
    const showPopup = () => {
      show.value = true;
    };

    const confirm = () => {     // 确认
      console.log('确认：', currentDate.value);
      show.value = false;
      text.value = `${currentDate.value[0]}年${currentDate.value[1]}月${currentDate.value[2]}日`;
    }
    const cancel = () => {      // 取消
      console.log('取消：', currentDate.value);
      show.value = false;
      text.value = `${currentDate.value[0]}年${currentDate.value[1]}月${currentDate.value[2]}日`;
    }

    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 5, 1),
      currentDate,
      show,
      showPopup,
      cancel,
      confirm,
      text,
    };
  },
}
</script>

<style scoped>
</style>