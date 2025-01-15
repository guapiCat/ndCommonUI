<template>
  <van-field
    v-model="fieldValue"
    is-link
    readonly
    label="时间范围"
    placeholder="选择时间范围"
    @click="showPicker = true"
  />
  <van-popup v-model:show="showPicker" round position="bottom">
    <nd-picker-group
      title="预约时间"
      :tabs="['开始时间', '结束时间']"
      @confirm="onConfirm"
      @cancel="onCancel"
    >
      <template #prev>
        <van-time-picker v-model="startTime" />
      </template>
      <template #next>
        <van-time-picker v-model="endTime" />
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
    const startTime = ref(['12', '00']);
    const endTime = ref(['12', '00']);
    const onConfirm = () => {
      showPicker.value = false
      fieldValue.value = `${startTime.value.join(':')} ${endTime.value.join(':')}`
    };
    const onCancel = () => {
      console.log('cancel')
      showPicker.value = false
    };

    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 5, 1),
      endTime,
      startTime,
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