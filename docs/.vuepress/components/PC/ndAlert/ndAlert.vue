<template>
  <nd-alert style="margin-top: 16px" :title="state.title" :description="state.description" :type="state.type" :center="state.center" :closable="state.closable" :closeText="state.closeText" :showIcon="state.showIcon" :effect="state.effect" :isfold="state.isfold">
  </nd-alert>
  <nd-alert style="margin-top: 16px" :title="state1.title" :description="state1.description" :type="state1.type" :center="state1.center" :closable="state1.closable" :closeText="state1.closeText" :showIcon="state1.showIcon" :effect="state1.effect" :isfold="state1.isfold">
  </nd-alert>
  <nd-alert style="margin-top: 16px" :title="state2.title" :description="state2.description" :type="state2.type" :center="state2.center" :closable="state2.closable" :closeText="state2.closeText" :showIcon="state2.showIcon" :effect="state2.effect" :isfold="state2.isfold">
  </nd-alert>
  <nd-alert style="margin-top: 16px" :title="state3.title" :description="state3.description" :type="state3.type" :center="state3.center" :closable="state3.closable" :closeText="state3.closeText" :showIcon="state3.showIcon" :effect="state3.effect" :isfold="state3.isfold">
  </nd-alert>
  <nd-alert style="margin-top: 16px" :title="state4.title" :description="state4.description" :type="state4.type" :center="state4.center" :closable="state4.closable" :closeText="state4.closeText" :showIcon="state4.showIcon" :effect="state4.effect" :isfold="state4.isfold">
  </nd-alert>
</template>

<script>
import ndAlert from "../../../../../src/packages/PC/nd-alert/src/nd-alert.vue";
import { ref, toRefs } from "vue";

export default {
  name: "",
  components: { ndAlert },
  setup() {
    const state = ref({
      title: '这里显示文本内容',
      type: 'primary'
    //   description: "测试文本",
    });
    const state1 = ref({
      title: '这里显示文本内容',
      type: 'success'
    //   description: "测试文本",
    });
    const state2 = ref({
      title: '这里显示文本内容',
      type: 'warning'
    //   description: "测试文本",
    });
    const state3 = ref({
      title: '这里显示文本内容',
      type: 'danger'
    //   description: "测试文本",
    });
    const state4 = ref({
      title: '这里显示文本内容',
    //   description: "测试文本",
    });
    return {
      state,
      state1,
      state2,
      state3,
      state4
    };
  }
};
</script>

<style scoped>
</style>