<template>
  <van-field
    v-model="fieldValue"
    is-link
    readonly
    label="日期时间"
    placeholder="选择日期时间"
    @click="showPicker = true"
  />
  <van-popup v-model:show="showPicker" round position="bottom">
    <nd-picker-group
      title="预约日期"
      :tabs="['选择日期', '选择时间']"
      next-step-text="下一步"
      @confirm="onConfirm"
      @cancel="onCancel"
    >
      <template #prev>
        <van-date-picker
          v-model="currentDate"
          :min-date="minDate"
          :max-date="maxDate"
        />
      </template>
      <template #next>
        <van-time-picker v-model="currentTime" />
      </template>
    </nd-picker-group>
  </van-popup>
</template>

<script>
import { ref } from "vue"
import ndPickerGroup from "../../../../../src/packages/APP/nd-picker-group/src/nd-picker-group.vue"

export default {
  name: "ND_APP_PickerGroup",
  components: { ndPickerGroup },
  setup() {
    const fieldValue = ref('');
    const showPicker = ref(false);
    const currentDate = ref(['2022', '06', '01']);
    const currentTime = ref(['12', '00']);
    const onConfirm = () => {
      showPicker.value = false
      fieldValue.value = `${currentDate.value.join('/')} ${currentTime.value.join(':')}`
    };
    const onCancel = () => {
      console.log('cancel')
      showPicker.value = false
    };

    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 5, 1),
      currentDate,
      currentTime,
      fieldValue,
      showPicker,
      onConfirm,
      onCancel
    };
  },
}
</script>

<style scoped>
button {
  margin-right: 15px;
  margin-bottom: 5px;
}
</style>