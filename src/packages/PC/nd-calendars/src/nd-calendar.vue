<template>
  <el-calendar :modelValue="modelValue" @change="onChange" :range="range">
    <template v-slot:dateCell="{ data }" v-if="slots.dateCell">
      <slot name="dateCell" v-bind="{data}"></slot>
    </template>
  </el-calendar>
</template>

<script>
export default {
  name: "nd-calendar",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    range: {
      type: Number,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit, slots }) {
    const onChange = (value) => {
      emit("update:modelValue", value)
    }
    return {
      slots,
      onChange
    };
  },
};
</script>

<style scoped>
>>> .el-calendar-table thead th:before {
  content: "周";
}
>>> .el-calendar-table thead th {
  text-indent: 0px;
}
>>> .el-calendar-table td.next,
.el-calendar-table td.prev {
  color: var(--el-text-color-placeholder);
  border: 1px solid #dcdfe6;
}
>>> .current {
  border: 1px solid #dcdfe6;
}
/deep/ .el-calendar-table thead th {
  font-size: 16px !important;
  font-weight: 550 !important;
  /* Font/text-primary */
  color: #131414 !important;
}
>>> .el-calendar__body {
  width: 800px;
  height: 450px;
}
>>> tr:nth-child(2n) {
  background-color: transparent !important;
  transition: background-color var(--t-color);
}
>>> .el-calendar__title {
  font-size: 16px;
  color: #131414;
  font-weight: 570 !important;
}
>>> .el-calendar-day {
  font-weight: 570 !important;
}
>>> .el-calendar-table th {
  text-indent: -80px;
}
>>> .el-calendar__header {
  width: 800px;
}
>>> .el-calendar-table:not(.is-range) td.next,
.el-calendar-table:not(.is-range) td.prev {
  /* Font/text-placeholder */
  color: #c0c4cc !important;
  font-size: 16px;
  font-weight: normal;
}
</style>