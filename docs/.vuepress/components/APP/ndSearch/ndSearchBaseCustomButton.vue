<template>
  <nd-search v-model="value" show-action label="地址" @search="onSearch">
    <template #action>
      <div @click="onClickButton">搜索</div>
    </template>
  </nd-search>
</template>

<script>
import ndSearch from '../../../../../src/packages/APP/nd-search/src/nd-search.vue';
import { ref } from "vue"

export default {
  components: { ndSearch },
  setup(props, { emit, slots }) {
    const value = ref('')

    const onSearch = (val) => console.log(val);
    const onClickButton = () => console.log(value.value);
    return {
      value,
      onSearch,
      onClickButton
    }
  }
}
</script>

<style scoped>
</style>