<template>
  <p>标签位置设置</p>

  <p>左</p>
  <nd-tabs
    :activeName="activeName"
    tab-position="left"
    @handleClick="handleClick"
    closable
  >
    <nd-tab-pane label="新迪1" name="newdi1">11111</nd-tab-pane>
    <nd-tab-pane label="新迪2" name="newdi2">22222</nd-tab-pane>
    <nd-tab-pane label="新迪3" name="newdi3">33333</nd-tab-pane>
    <nd-tab-pane label="新迪4" name="newdi4">44444</nd-tab-pane>
    <nd-tab-pane label="新迪5" name="newdi5">55555</nd-tab-pane>
    <nd-tab-pane label="新迪6" name="newdi6">66666</nd-tab-pane>
  </nd-tabs>

  <p>上</p>
  
  <nd-tabs
    :activeName="activeName"
    tab-position="top"
    @handleClick="handleClick"
  >
    <nd-tab-pane label="新迪1" name="newdi1">11111</nd-tab-pane>
    <nd-tab-pane label="新迪2" name="newdi2">22222</nd-tab-pane>
    <nd-tab-pane label="新迪3" name="newdi3">33333</nd-tab-pane>
    <nd-tab-pane label="新迪4" name="newdi4">44444</nd-tab-pane>
    <nd-tab-pane label="新迪5" name="newdi5">55555</nd-tab-pane>
    <nd-tab-pane label="新迪6" name="newdi6">66666</nd-tab-pane>
  </nd-tabs>

  <p>右</p>
  <nd-tabs
    :activeName="activeName"
    tab-position="right"
    @handleClick="handleClick"
  >
    <nd-tab-pane label="新迪1" name="newdi1">11111</nd-tab-pane>
    <nd-tab-pane label="新迪2" name="newdi2">22222</nd-tab-pane>
    <nd-tab-pane label="新迪3" name="newdi3">33333</nd-tab-pane>
    <nd-tab-pane label="新迪4" name="newdi4">44444</nd-tab-pane>
  </nd-tabs>

  <p>下</p>
  <nd-tabs
    :activeName="activeName"
    tab-position="bottom"
    @handleClick="handleClick"
  >
    <nd-tab-pane label="新迪1" name="newdi1">11111</nd-tab-pane>
    <nd-tab-pane label="新迪2" name="newdi2">22222</nd-tab-pane>
    <nd-tab-pane label="新迪3" name="newdi3">33333</nd-tab-pane>
    <nd-tab-pane label="新迪4" name="newdi4">44444</nd-tab-pane>
    <nd-tab-pane label="新迪5" name="newdi5">55555</nd-tab-pane>
    <nd-tab-pane label="新迪6" name="newdi6">66666</nd-tab-pane>
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
