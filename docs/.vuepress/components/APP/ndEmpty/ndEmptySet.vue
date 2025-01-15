<template>
  <div class="my-page">
    <nd-empty :imgUrl="noDataImg" 
      contentText="这是一个文本，文本这是一个文本，文本" footBorder="none"
      footText="重试" footRadius="20px" footBackground="red" footTextColor="white">
    </nd-empty>

    <br />

    <nd-empty :imgUrl="noDataImg" imgWidth="100px">

      <template #content>
        <div class="center">
          图片100px 自定义底部按钮
        </div>
      </template>

      <template #foot>
        <div class="center">
          <button>这是自定义底部按钮</button>
        </div>
      </template>

    </nd-empty>
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
.center {
  width: 100%;
  text-align: center;
}
</style>