<template>
  <p>增减选项卡</p>

  <p>水平方向</p>
  <div style="margin-bottom: 20px">
    <el-button size="small" @click="addTab"> add tab </el-button>
  </div>
  <nd-tabs
    :activeName="activeName"
    closable
    @removeTab="removeTab"
    @addTabs="addTabs"
    :dynamicHorizontal="true"
  >
    <nd-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </nd-tab-pane>
  </nd-tabs>

  <p></p>

  <nd-tabs
    tab-position="bottom"
    :activeName="activeName"
    closable
    @removeTab="removeTab"
    @addTabs="addTabs"
    :dynamicHorizontal="true"
  >
    <nd-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </nd-tab-pane>
  </nd-tabs>

  <p>垂直方向</p>
  <nd-tabs
    tab-position="left"
    :activeName="activeName"
    closable
    @removeTab="removeTab"
    @addTabs="addTabs"
    :dynamicVertical="true"
  >
    <nd-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </nd-tab-pane>
  </nd-tabs>

  <p></p>

  <nd-tabs
    tab-position="right"
    :activeName="activeName"
    closable
    @removeTab="removeTab"
    @addTabs="addTabs"
    :dynamicVertical="true"
  >
    <nd-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </nd-tab-pane>
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
    Search,
  },
  setup() {
    const data = reactive({
      activeName: "1",
      editableTabs: [
        {
          title: "新迪数字工程",
          name: "1",
          content: "Tab 1 content",
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content",
        },
        {
          title: "Tab 3",
          name: "3",
          content: "Tab 3 content",
        },
        {
          title: "Tab 4",
          name: "4",
          content: "Tab 4 content",
        },
        {
          title: "Tab 5",
          name: "5",
          content: "Tab 5 content",
        },
      ],
    });
    let tabIndex = 2;

    const addTab = () => {
      const newTabName = `${++tabIndex}`;
      data.editableTabs.push({
        title: "New Tab",
        name: newTabName,
        content: "New Tab content" + newTabName,
      });
      data.activeName = newTabName;
    };

    const addTabs = () => {
      const newTabName = `${++tabIndex}`;
      data.editableTabs.push({
        title: "New Tab",
        name: newTabName,
        content: "New Tab content" + newTabName,
      });
      data.activeName = newTabName;
    };

    const removeTab = (targetName) => {
      const tabs = data.editableTabs;
      let activeName = data.activeName;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      data.activeName = activeName;
      data.editableTabs = tabs.filter((tab) => tab.name !== targetName);
    };
    onMounted(() => {});
    const refData = toRefs(data);
    return {
      addTab,
      addTabs,
      removeTab,
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
