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
      title="标题" 
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
      // 第一列
      [
        { text: '周一', value: 'Monday' },
        { text: '周二', value: 'Tuesday' },
        { text: '周三', value: 'Wednesday' },
        { text: '周四', value: 'Thursday' },
        { text: '周五', value: 'Friday' },
      ],
      // 第二列
      [
        { text: '上午', value: 'Morning' },
        { text: '下午', value: 'Afternoon' },
        { text: '晚上', value: 'Evening' },
      ],
    ];
    const fieldValue = ref('');
    const showPicker = ref(false);

    const onConfirm = ({ selectedOptions }) => {
      showPicker.value = false;
      fieldValue.value = selectedOptions[0].text;
    };

    return { 
      columns,
      fieldValue,
      showPicker,
      onConfirm
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