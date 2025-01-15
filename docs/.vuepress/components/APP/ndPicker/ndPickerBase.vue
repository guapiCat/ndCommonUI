<template>
  <van-field
    v-model="fieldValue"
    is-link
    readonly
    label="城市"
    placeholder="选择城市"
    @click="showPicker = true"
  />
  <van-popup v-model:show="showPicker" round position="bottom">
    <nd-picker
      :columns="columns"
      @cancel="showPicker = false"
      @confirm="onConfirm"
    />
  </van-popup>
</template>

<script>
import { ref } from "vue"
import ndPicker from "../../../../../src/packages/APP/nd-picker/src/nd-picker.vue"

export default {
  name: "ND_APP_Picker",
  components: { ndPicker },
  setup() {
    const columns = [
      { text: '杭州', value: 'Hangzhou' },
      { text: '宁波', value: 'Ningbo' },
      { text: '温州', value: 'Wenzhou' },
      { text: '绍兴', value: 'Shaoxing' },
      { text: '湖州', value: 'Huzhou' },
    ];
    const fieldValue = ref('');
    const showPicker = ref(false);

    const onConfirm = ({ selectedOptions }) => {
      showPicker.value = false;
      fieldValue.value = selectedOptions[0].text;
    };

    return {
      columns,
      onConfirm,
      fieldValue,
      showPicker,
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