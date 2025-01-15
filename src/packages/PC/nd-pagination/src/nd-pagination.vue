<template>
  <div class="nd-pagination">
    <el-pagination
      @current-change="handlesCurrentChange"
      @size-change="handleSizeChange"
      :total="total"
      :page-sizes="pageSizes"
      :layout="layout"
      :background="background"
      v-bind="$attrs"
      v-on="$attrs"
    ></el-pagination>

  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';

export default {
  name: 'nd-pagination',
  emits: ['handleSizeChange', 'handlesCurrentChange'],
  props: {
    pageSizes: {             // 分页选项
      type: Array,
      default: () => { return [10, 20, 50, 100] }
    },
    total: {             
      type: Number,
      default: () => { return 0 }
    },
    background: {             
      type: Boolean,
      default: () => { return false }
    },
    layout: {             
      type: String,
      default: () => { return 'total, sizes, prev, pager, next, jumper' }
    },
  },
  setup() {
    const data = reactive({});
    const { proxy } = getCurrentInstance();

    onBeforeMount(() => {});
    onMounted(() => { });

    const handlesCurrentChange = (e) => {
      // console.log('current change===========', e);
      proxy.$emit('handlesCurrentChange', e);
    }
    const handleSizeChange = (e) => {
      proxy.$emit('handleSizeChange', e);
    }

    const refData = toRefs(data);
    return {
      ...refData,
      handlesCurrentChange,
      handleSizeChange,
    };
  },
};
</script>

<style scoped>
</style>