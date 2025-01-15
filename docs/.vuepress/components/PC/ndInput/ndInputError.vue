<template>
  <nd-input placeholder="普通输入框" v-model="var0" @input="change" clearable type="input" isError></nd-input>
  <br />
  <br />
  <nd-input placeholder="输入123变err" v-model="var1" @input="change" clearable type="input" :isError="isErr" :errorTips="tip"></nd-input>
</template>

<script>
import ndInput from '../../../../../src/packages/PC/nd-input/src/nd-input.vue';
import {toRefs, reactive} from "vue";

export default {
  name: "",
  components: {ndInput},
  setup() {
    const data = reactive({
      var0: '',
      var1: '',
      tip: '',
      isErr: false,
    });
    const change = (e) => {
      if(data.var1 == 123) {
        data.isErr = true;
        data.tip = '这是一个错误提示';
      } else {
        data.isErr = false;
        data.tip = '';
      }
    }

    const refData = toRefs(data);
    return {
      change,

      ...refData,
    }
  }
}
</script>

<style scoped>

</style>