<template>
  <div class="nd-switch-demo">
    <span class="lable">默认开关：</span>
    <nd-switch v-model="switch1" />
    <span class="lable">禁用开关：</span>
    <nd-switch disabled v-model="switch2" />
    <nd-switch disabled v-model="switch2" />
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';
import ndSwitch from '../../../../../src/packages/PC/nd-switch/src/nd-switch.vue';

export default {
  name: '',
  components: { ndSwitch },
  setup() {
    const data = reactive({
      switch1: true,
      switch2: true,
    });
    const { proxy } = getCurrentInstance();

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
.nd-switch-demo {
  display: flex;
  align-items: center;
}
.lable {
  margin: 0 15px;
} 
</style>