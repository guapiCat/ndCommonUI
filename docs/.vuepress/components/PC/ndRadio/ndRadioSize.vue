<template>
  <div>
    <div class="text">small:</div>
    <nd-radio-group v-model="radio" :radioList="radioList" :border="true" size="small"></nd-radio-group>

    <div class="text">default:</div>
    <nd-radio-group v-model="radio" :radioList="radioList" :border="true"></nd-radio-group>

    <!-- 
    <div class="text">large:</div>
    <nd-radio-group :radio="radio" :radioList="radioList" :border="true" size="large"></nd-radio-group> -->

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

    const change = (e) => {
        console.log(e)
    }
    onBeforeMount(() => {});
    onMounted(() => {});

    const refData = toRefs(data);
    return {
      ...refData,
      change
    };
    
  },
};
</script>

<style scoped>
.text {
    height: 48px;
    line-height: 48px;
}
</style>