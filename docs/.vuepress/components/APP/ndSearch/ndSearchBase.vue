<template>

  <h5>常规输入框</h5>
  <nd-search v-model="value" clearable @clear="clearEv" @blur="blurFn" @update:model-value="inputFn" @focus="focusFn" @search="searchFn"></nd-search>

  <br />
  <br />
  <h5>输入框5个插槽位置</h5>
  <nd-search v-model="value" @clear="clearEv" @blur="blurFn" @focus="focusFn" @search="searchFn" show-action borderRadius="80px">
  
    <template #left>
      <button>左侧内容</button>
    </template>
    <template #action>
      <button>右侧内容</button>
    </template>
    <template #label>
      <button>label内容</button>
    </template>
    <template #rightIcon>
      <button>右侧图标</button>
    </template>
    <template #leftIcon>
      <button>左侧图标</button>
    </template>
  
  </nd-search>


</template>

<script>
import ndSearch from '../../../../../src/packages/APP/nd-search/src/nd-search.vue';
import { ref, reactive, toRefs } from "vue"

export default {
  components: { ndSearch },
  setup(props, ctx) {
    const data = reactive({
      value: '',
    });

    const clearEv = () => {
      console.log('clear=====');
    }

    const inpHandler = () => {
      console.log('inp handle');
    }

    const searchFn = () => {
      console.log('inp search');
    }

    const blurFn = () => {        // 失焦
      console.log('blur fn', data.value);
    }
    const focusFn = () => {       // 聚焦
      console.log('focus fn', data.value);
    }

    const inputFn = () => {       // input
      console.log('update fn', data.value);
    }

    const refData = toRefs(data);
    return {
      ...refData,
      clearEv,
      searchFn,
      blurFn,
      focusFn,
      inputFn,
    }
  }
}
</script>

<style scoped>

</style>