<template>
  <p>图标选项卡</p>
  <nd-tabs :activeName="activeName" @handleClick="handleClick">
    <nd-tab-pane label="新迪1" name="newdi1">
      <template #label>
        <el-icon><calendar /></el-icon>
        <span>11111</span>
      </template>
      11111
    </nd-tab-pane>
    <nd-tab-pane label="新迪2" name="newdi2">
      <template #label>
        <el-icon><Search /></el-icon>
        <span>22222</span> </template
      >22222</nd-tab-pane
    >
    <nd-tab-pane label="新迪3" name="newdi3">33333</nd-tab-pane>
  </nd-tabs>
</template>
<script>
import { reactive, toRefs, onMounted } from "vue";
import { Calendar, Search } from "@element-plus/icons-vue";
import ndTabs from "../../../../../src/packages/PC/nd-tabs/src/nd-tabs.vue";
import ndTabPane from "../../../../../src/packages/PC/nd-tab-pane/src/nd-tab-pane.vue";
export default {
  components: {
    ndTabs,
    ndTabPane,
    Calendar,
    Search
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
<style  lang='less' >
p {
  font-size: 15px;
  margin: 20px 0;
}
</style>
