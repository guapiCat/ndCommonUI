<template>
  <div class="box">
    <div>
      <p>Large</p>
      <nd-dropdown size="large">
        <span class="el-dropdown-link">
          Dropdown List
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #sub>
          <nd-dropdown-item>Action 1</nd-dropdown-item>
          <nd-dropdown-item>Action 2</nd-dropdown-item>
          <nd-dropdown-item>Action 3</nd-dropdown-item>
          <nd-dropdown-item>Action 4</nd-dropdown-item>
          <nd-dropdown-item>Action 5</nd-dropdown-item>
        </template>
      </nd-dropdown>
    </div>

    <div>
      <p>Default</p>
      <nd-dropdown>
        <span class="el-dropdown-link">
          Dropdown List
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #sub>
          <nd-dropdown-item :icon="Fold">Action 1</nd-dropdown-item>
          <nd-dropdown-item :icon="Fold">Action 2</nd-dropdown-item>
          <nd-dropdown-item :icon="Fold">Action 3</nd-dropdown-item>
          <nd-dropdown-item :icon="Fold">Action 4</nd-dropdown-item>
          <nd-dropdown-item :icon="Fold"> Action 5</nd-dropdown-item>
        </template>
      </nd-dropdown>
    </div>

    <div>
      <p>Small</p>
      <nd-dropdown size="small">
        <span class="el-dropdown-link">
          Dropdown List
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #sub>
          <nd-dropdown-item :icon="Fold">Action 1</nd-dropdown-item>
          <nd-dropdown-item :icon="Fold">Action 2</nd-dropdown-item>
          <nd-dropdown-item :icon="Fold">Action 3</nd-dropdown-item>
          <nd-dropdown-item :icon="Fold">Action 4</nd-dropdown-item>
          <nd-dropdown-item :icon="Fold"> Action 5</nd-dropdown-item>
        </template>
      </nd-dropdown>
    </div>
  </div>
</template>
<script setup>
import { Fold } from "@element-plus/icons-vue";
</script>
<script>
import ndDropdown from "../../../../../src/packages/PC/nd-dropdown/src/nd-dropdown.vue";
import ndDropdownItem from "../../../../../src/packages/PC/nd-dropdown-item/src/nd-dropdown-item.vue";

import { ArrowDown, Fold } from "@element-plus/icons-vue";
import { reactive, toRefs } from "vue";

export default {
  name: "",
  components: { ndDropdown, ndDropdownItem, ArrowDown },
  setup() {
    const data = reactive({});

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>

<style scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
p {
  font-size: 15px;
  margin: 20px 0;
}
</style>