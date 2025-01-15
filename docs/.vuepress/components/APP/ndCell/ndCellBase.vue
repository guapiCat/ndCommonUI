<template>
  <div>

    <nd-cell title="这是一个标题1" value="内容1"></nd-cell>
    <nd-cell title="这是一个标题2" value="内容2"></nd-cell>
    <nd-cell title="这是一个标题3" value="内容3"></nd-cell>

    <nd-cell>

      <template #title>
        <div>title插槽 <button>按钮</button> </div>
      </template>
      
      <template #value>
        <div>内容插槽</div>
      </template>

    </nd-cell>

  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import ndCell from '../../../../../src/packages/APP/nd-cell';

export default {
  name: '',
  components: { ndCell },
  setup() {
    const data = reactive({

    });

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>

<style scoped>
</style>