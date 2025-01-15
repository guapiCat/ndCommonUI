<template>
  <div class="nd-steps">
    <el-steps :active="active" v-bind="$attrs" v-on="$attrs">

      <!-- 步骤item -->
      <template v-for="(item, index) in stepList" :key="index">
        <el-step :title="item.title" :description="item.description" :icon="item.icon">

          <!-- 步骤插槽 icon图标 -->
          <template #icon v-if="slotIcon">
            <slot name="icon" v-bind="{...item, index}"></slot>
          </template>
          <!-- 步骤插槽 title标题 -->
          <template #title v-if="slotTitle">
            <slot name="title" v-bind="{...item, index}"></slot>
          </template>
          <!-- 步骤插槽 description描述 -->
          <template #description v-if="slotDescript">
            <slot name="description" v-bind="{...item, index}"></slot>
          </template>

        </el-step>
      </template>

    </el-steps>


  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';

export default {
  name: 'nd-steps',
  props: {
    active: {           // 当前是步骤几
      type: [String, Number],
      default: () => { return 0 }
    },
    stepList: {         // 步骤列表
      type: Array,
      default: () => { return [] }
    },
    slotIcon: {         // 是否有icon插槽
      type: Boolean,
      default: () => { return false }
    },
    slotTitle: {        // 是否有标题插槽
      type: Boolean,
      default: () => { return false }
    },
    slotDescript: {     // 是否有描述插槽
      type: Boolean,
      default: () => { return false }
    },
  },
  setup() {
    const data = reactive({});
    const { proxy } = getCurrentInstance();

    onBeforeMount(() => { });
    onMounted(() => {});

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>

<style scoped>
div /deep/ .is-finish .el-step__icon.is-text {
  background: #409eff;
}
div /deep/ .is-finish .el-step__icon-inner {
  color: white;
}
div /deep/ .is-success .el-step__icon.is-text {
  border-color: #409eff;
}
div /deep/ .is-success .el-step__icon-inner {
  border-color: #409eff;
}
div /deep/ .el-step__title.is-success {
  color: #409eff;
}
div /deep/ .is-success .el-step__icon-inner svg {
  color: #409eff;
}
div /deep/ .el-step__description.is-success {
  color: #409eff;
}
div /deep/ .el-step__title {
  font-size: 14px;
}
.nd-steps /deep/ .is-simple .el-step__title {
  font-size: 14px;
}
div /deep/ .el-step__description {
  font-size: 12px;
}
</style>