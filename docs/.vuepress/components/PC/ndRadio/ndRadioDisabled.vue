<template>
  <div>
    <nd-radio-group v-model="radio" :radioList="radioList"></nd-radio-group>
    <br/>
    <nd-radio-group style="margin-top:24px" v-model="radio" :radioList="radioList" :border="true"></nd-radio-group>
    <br/>
    <nd-radio-group style="margin-top:24px" v-model="radio" :radioList="radioList" :radioButton="true"></nd-radio-group>
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
      radio: '武汉',
      radioList: [
        {name:'上海'},
        {name:'北京'},
        {name:'杭州'},
        {name:'武汉',disabled:true},
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