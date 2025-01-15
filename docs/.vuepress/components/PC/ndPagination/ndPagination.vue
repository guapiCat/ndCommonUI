<template>
  <div class="nd-table-demo">
    <nd-pagination
      :pageSize="pageSize"
      :total="total"
      :current-page="currentPage"
      @handlesCurrentChange="currentChange"
      @handleSizeChange="sizeChange"
    ></nd-pagination>

    <br />
    <button @click="test">测试分页+1</button>
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';
import ndPagination from '../../../../../src/packages/PC/nd-pagination/src/nd-pagination.vue';

export default {
  name: '',
  components: { ndPagination },
  setup() {
    const data = reactive({
      pageSize: 20,
      total: 100,
      currentPage: 2,
      layout: '',
    });
    const { proxy } = getCurrentInstance();

    onBeforeMount(() => {});
    onMounted(() => {});

    const currentChange = (e) => {     // page change
      console.log('当前页码==========', e);
      data.currentPage = Number(e);
      alert(`当前页码:${e}`);
    }
    const sizeChange = (e) => {         // size change
      console.log('每页条数==========', e);
      data.pageSize = Number(e);
      alert(`每页条数:${e}`);
    }
    const test = () => {
      data.currentPage = data.currentPage + 1;
      console.log('data currentPage', data.currentPage);
    }


    const refData = toRefs(data);
    return {
      ...refData,
      currentChange,
      sizeChange,
      test,
    };
  },
};
</script>

<style scoped>
.nd-table-demo {
  width: 100%;
  /* width: 1500px; */
}
.nd_solt_city {
  cursor: pointer;
}
.nd_normal_div {
  margin: 20px 0;
}
</style>