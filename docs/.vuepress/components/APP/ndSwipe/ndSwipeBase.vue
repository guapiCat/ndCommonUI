<template>
  <div>

    <h5>切换到手机端后可滑动</h5>

    <nd-app-swipe class="my-swipe" :autoplay="1000">
      <nd-app-swipe-item v-for="item in swipeNum">
        <div @click="addSwipe">当前序号{{ item }}， 点击+1</div>
      </nd-app-swipe-item>
    </nd-app-swipe>

  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';

import ndAppSwipe from '../../../../../src/packages/APP/nd-swipe/src/nd-swipe.vue';
import ndAppSwipeItem from '../../../../../src/packages/APP/nd-swipe-item/src/nd-swipe-item.vue';

export default {
  name: '',
  components:{ ndAppSwipe, ndAppSwipeItem },
  setup() {
    const data = reactive({
      swipeNum: 3,
    });
    const { proxy } = getCurrentInstance();

    onBeforeMount(() => {});
    onMounted(() => {});

    const addSwipe = () => {
      data.swipeNum = data.swipeNum + 1;
    }

    const refData = toRefs(data);
    return {
      ...refData,
      addSwipe,
    };
  },
};
</script>

<style scoped>
.my-swipe {
  height: 300px;
  background: gray;
}
</style>