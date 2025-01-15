<template>
  <div class="my-page">
    <nd-empty :imgUrl="noDataImg" contentText="这是一个文本，文本这是一个文本，文本" footText="重新加载" ></nd-empty>
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue';
import ndEmpty from '../../../../../src/packages/APP/nd-empty/src/nd-empty.vue';

import noDataImg from './img/no-data.png';

export default {
  name: '',
  components: { ndEmpty },
  setup() {
    const data = reactive({ 
      noDataImg: noDataImg,
    });

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
.my-page {
  height: 800px;
}
</style>