<template>
  <p>卡片选项卡</p>
  <nd-tabs :activeName="activeName" type="card" @handleClick="handleClick">
    <nd-tab-pane label="新迪1" name="newdi1">11111</nd-tab-pane>
    <nd-tab-pane label="新迪22" name="newdi2">22222</nd-tab-pane>
    <nd-tab-pane label="新迪3333" name="newdi3">33333</nd-tab-pane>
  </nd-tabs>
</template>
<script>
import { reactive, toRefs, onMounted } from "vue";
import ndTabs from "../../../../../src/packages/PC/nd-tabs/src/nd-tabs.vue";
import ndTabPane from "../../../../../src/packages/PC/nd-tab-pane/src/nd-tab-pane.vue";
export default {
  components: {
    ndTabs,
    ndTabPane,
  },
  setup() {
    const data = reactive({
       activeName: "newdi1",
    });
    const handleClick = (e) => {
      console.log(e);
    };
    onMounted(() => {});
    const refData = toRefs(data);
    return {
      handleClick,
      ...refData,
    };
  },
};
</script>
<style  lang='less' scoped>
p {
  font-size: 15px;
  margin: 20px 0;
}
</style>
