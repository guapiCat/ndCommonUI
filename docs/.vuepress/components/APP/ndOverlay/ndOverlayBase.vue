<template>
  <div class="my-page">

    <nd-button type="primary" @click="show1 = true">只有遮罩层: {{ show1 }}</nd-button>
    <nd-overlay v-model="show1"></nd-overlay>
    <br/>


    <nd-button type="primary" @click="show2 = true">带插槽遮罩层: {{ show2 }}</nd-button>
    <nd-overlay v-model="show2">
      <div class="wrap">
        <div class="solt-default" @click.stop="cout++">这是遮罩层的插槽 {{ cout }}</div>
      </div>
    </nd-overlay>
    <br/>

    <nd-button type="primary" @click="show3 = true">设置：动画0.5、透明度0.9</nd-button>
    <nd-overlay v-model="show3" :duration="0.5" :opacity="0.9" @ndClick="clickTest"></nd-overlay>
    <br/>

  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';
import ndButton from '../../../../../src/packages/APP/nd-button/src/nd-button.vue';
import ndOverlay from '../../../../../src/packages/APP/nd-overlay/src/nd-overlay.vue';

export default {
  name: '',
  components: { ndButton, ndOverlay },
  setup() {
    const data = reactive({
      show1: false,
      show2: false,
      show3: false,

      cout: 0,
    });

    onBeforeMount(() => {});
    onMounted(() => {});

    const clickTest = (e) => {
      console.log('点击遮罩层:', e);
    }

    const refData = toRefs(data);
    return {
      ...refData,
      clickTest,
    };
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.solt-default {
  width: 200px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  background: white;
  border-radius: 10px;
}
</style>