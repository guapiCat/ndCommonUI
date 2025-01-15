<template>
  <div>
    <nd-app-sticky>
      <nd-app-button type="primary">吸顶</nd-app-button>
    </nd-app-sticky>

    <br />

    <nd-app-sticky position="bottom">
      <nd-app-button type="primary">吸底</nd-app-button>
    </nd-app-sticky>

    <br />

    
    <div  ref="container" class="container">
      <p>当容器开始滚动到屏幕外，元素会进行吸顶。容器完全滚动出屏幕，元素也会跟随滚动出屏幕。</p>
      <nd-app-sticky :container="container">
        <nd-app-button type="primary">吸附容器</nd-app-button>
      </nd-app-sticky>
    </div>

  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance, ref } from 'vue';
import ndAppButton from '../../../../../src/packages/APP/nd-button/src/nd-button.vue';
import ndAppSticky from '../../../../../src/packages/APP/nd-sticky';

export default {
  name: '',
  components: { ndAppSticky, ndAppButton },
  setup() {
    const data = reactive({});
    const container = ref(null);

    onBeforeMount(() => {});
    onMounted(() => {});

    const refData = toRefs(data);
    return {
      ...refData,
      container,
    };
  },
};
</script>

<style scoped>
.container {
  height: 300px;
  width: 100%;
  background: #dfe2e5;
}
</style>