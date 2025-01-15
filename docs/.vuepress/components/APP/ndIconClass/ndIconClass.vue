<template>
  默认QQ图标： <nd-app-icon-class type="icon-QQ"></nd-app-icon-class>

  <br />

  自定义样式QQ图标： <nd-app-icon-class type="icon-QQ" class='test-icon'></nd-app-icon-class>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';
import ndAppIconClass from '../../../../../src/packages/APP/nd-icon-class/index';

export default {
  name: '',
  components: { ndAppIconClass },
  setup() {
    const data = reactive({});
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
.test-icon {
  font-size: 30px;
  color: #0496FD;
}
</style>