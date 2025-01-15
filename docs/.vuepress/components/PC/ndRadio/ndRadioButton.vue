<template>
  <div>
    <nd-radio-group v-model="radio" :radioList="radioList" :border="true" :radioButton="true"></nd-radio-group>
  </div>
</template>

<script>

import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';
import ndRadioGroup from '../../../../../src/packages/PC/nd-radio/src/nd-radio-group.vue';


export default {
  name: '',
  components: { ndRadioGroup },
  setup() {

    const data = reactive({
      radio: '',
      radioList: [
        {name:'上海'},
        {name:'北京'},
        {name:'杭州'},
        {name:'武汉'},
        {name:'成都'},
        {name:'广州'},
      ],
    });

    const { proxy } = getCurrentInstance();


    onBeforeMount(() => {});
    onMounted(() => {});

    const refData = toRefs(data);
    return {
      ...refData,
    };
    
  },
};
</script>

<style scoped>

</style>