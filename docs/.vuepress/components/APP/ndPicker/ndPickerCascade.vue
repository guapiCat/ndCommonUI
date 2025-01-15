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
      {
        text: '浙江',
        value: 'Zhejiang',
        children: [
          {
            text: '杭州',
            value: 'Hangzhou',
            children: [
              { text: '西湖区', value: 'Xihu' },
              { text: '余杭区', value: 'Yuhang' },
            ],
          },
          {
            text: '温州',
            value: 'Wenzhou',
            children: [
              { text: '鹿城区', value: 'Lucheng' },
              { text: '瓯海区', value: 'Ouhai' },
            ],
          },
        ],
      },
      {
        text: '福建',
        value: 'Fujian',
        children: [
          {
            text: '福州',
            value: 'Fuzhou',
            children: [
              { text: '鼓楼区', value: 'Gulou' },
              { text: '台江区', value: 'Taijiang' },
            ],
          },
          {
            text: '厦门',
            value: 'Xiamen',
            children: [
              { text: '思明区', value: 'Siming' },
              { text: '海沧区', value: 'Haicang' },
            ],
          },
        ],
      },
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