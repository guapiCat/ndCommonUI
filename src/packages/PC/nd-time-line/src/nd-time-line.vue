<template>
  <div class="nd-time-line">
    <el-timeline>

      <el-timeline-item 
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :hollow="activity.hollow"
        :timestamp="activity.timestamp"
        :hide-timestamp="activity.hideTimestamp"
        :placement="placement"
        v-bind="activity.$attrs"
      >

        <!-- 默认类型 -->
        <template v-if="!type"> {{ activity.content || activity.title }} </template>
        <!-- card类型 -->
        <template v-if="type == 1">
          <el-card>
            <p class="nd-time-title" v-if="activity.title">{{ activity.title }}</p>
            <p class="nd-time-content">{{ activity.content }}</p>
          </el-card>
        </template>
        <!-- 插槽类型 -->
        <template v-if="type == 2">
          <!-- 插槽 -->
          <slot name="activity" v-bind="activity"></slot>
        </template>

      </el-timeline-item>
    
    </el-timeline>
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';

export default {
  name: '',
  props: {
    type: {               // 基础类型
      type: Number,
      default: () => { return 0 },
    },
    activities: {         // 时间线配置
      type: [Array, String],
      default: () => { return [] },
    },
    placement: {
      type: String,
      default: () => { return 'top' },
    }
  },
  setup() {
    const data = reactive({

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
.nd-time-title {
  font-weight: 600;
  margin-bottom: 10px;
}
li{
  /* 去除li标签的默认样式 */
  list-style-type: none!important;
}
</style>