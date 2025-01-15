<template>
  <nd-input placeholder="小输入框" v-model="state.var0" :clearable="true" @clear="clearEv" type="input" size="small" @input="inputEv"></nd-input>
  <br />
  <br />
  <nd-input placeholder="普通输入框" v-model="state.var0" @input="change" clearable type="input"></nd-input>
  <br />
  <br />
  <nd-input placeholder="大输入框" v-model="state.var0" @input="change" clearable type="input" size="large" style="width: 400px;"></nd-input>
  <nd-input placeholder="大输入框" v-model="state.var0" @input="change" clearable type="input" size="large" style="width: 200px; display: inline-block;"></nd-input>
  <nd-input placeholder="大输入框" v-model="state.var0" @input="change" clearable type="input" size="large" style="width: 200px; display: inline-block;"></nd-input>
</template>

<script>
import ndInput from '../../../../../src/packages/PC/nd-input/src/nd-input.vue';
import {ref, toRefs} from "vue";

export default {
  name: "",
  components: {ndInput},
  setup() {
    const state = ref({
      var0: ''
    })
    const change = (e) => {
      console.log(e)
    }
    const clearEv = () => {
      console.log('输入框clear=========', state.var0);

    }
    const inputEv = () => {
      console.log('输入框 input event', state.var0);
    }
    return {
      state,
      change,
      clearEv,
      inputEv,
    }
  }
}
</script>

<style scoped>
</style>