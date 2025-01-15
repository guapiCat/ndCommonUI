<template>
  <van-field
    v-model="fieldValue"
    is-link
    readonly
    label="日期范围"
    placeholder="选择日期范围"
    @click="showPicker = true"
  />
  
  <van-popup v-model:show="showPicker" round position="bottom">
    <nd-picker-group
      title="预约日期"
      :tabs="['开始日期', '结束日期']"
      @confirm="onConfirm"
      @cancel="onCancel"
    >
      <template #prev>
        <van-date-picker
          v-model="startDate"
          :min-date="minDate"
          :max-date="maxDate"
        />
      </template>
      <template #next>
        <van-date-picker v-model="endDate" :min-date="minDate2" :max-date="maxDate" />
      </template>
    </nd-picker-group>
  </van-popup>

</template>

<script>
import { ref, reactive, toRefs, watch } from "vue"
import ndPickerGroup from "../../../../../src/packages/APP/nd-picker-group/src/nd-picker-group.vue"

export default {
  name: "ND_APP_PickerGroup",
  components: { ndPickerGroup },
  setup() {
    const data = reactive({
      startDate: ['2022', '06', '01'],
      endDate: ['2023', '06', '01'],
      minDate: new Date(2020, 0, 1),
      minDate2: new Date(2020, 0, 1),
      maxDate: new Date(2025, 5, 1),
    });
    const fieldValue = ref('');
    const showPicker = ref(false);

    watch(() => data.startDate, (val) => {
      console.log('val======', val);
      const dataStr = val.join('/');
      data.minDate2 = new Date(dataStr);
    })

    const onConfirm = () => {
      showPicker.value = false
      fieldValue.value = `${data.startDate.join('/')} ${data.endDate.join('/')}`
    };
    const onCancel = () => {
      console.log('cancel')
      showPicker.value = false
    };

    return {
      ...toRefs(data),
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