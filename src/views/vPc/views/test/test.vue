<template>
  <div>
    <!-- 默认表单 -->
    <div class="nd_normal_div">默认表单：</div>
    <nd-table :columnData="columnData" :tableData="tableData" :stripe="true" @nextClick="test" :checkbox="true" :border="true"
      @handlesCurrentChange="handlesCurrentChange" @handleSizeChange="handleSizeChange" @handleSelectionChange="handleSelectionChange"
      :table="table" @sortChange="sortChange" :max-height="300" :isShowPagination="true" >
      <template #test>
        <div>
          <input type="file">
        </div>
      </template>
      <template #city="scope">
        <div class="nd_solt_city" @click="clickCity(scope.row)"> {{scope.row.city}}-插入-{{scope.row.name}} </div>
      </template>
    </nd-table>
    <div class="nd_normal_div">默认无数据表单</div>
    <nd-table :columnData="columnData" :tableData="[]" >
    </nd-table>

    <!-- <nd-pagination></nd-pagination> -->
    <nd-pagination  
      @handlesCurrentChange="handlesCurrentChange" 
      @handleSizeChange="handleSizeChange"
    />

  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';
import ndTable from '../../../../packages/PC/nd-table';
import ndPagination from '../../../../packages/PC/nd-pagination';

export default {
  name: '',
  components: { 
    ndTable, 
    ndPagination,
  },
  setup() {
    const data = reactive({});
    const { proxy } = getCurrentInstance();

    const pagination = {
      total: 100,
      pageSize: 10,
      currentPage: 1,
    }

    const columnData = [
      { prop: 'date', label: '事件', minWidth: '150' },
      { prop: 'name', label: '姓名', minWidth: '150', sort: true },
      { prop: 'state', label: '管道+10', minWidth: '150', pipe: (val) => {return val*1 + 10} },
      { prop: 'city', label: '城市插槽', minWidth: '220', slotName: 'city', $attrs: {resizable: true} },
      { prop: 'address', label: '地址', minWidth: '150', slotName: 'test' },
      { prop: 'zip', label: '最右列', minWidth: '150', $attrs: {fixed: 'right', sortable: 'custom'} },
    ];
    const tableData = [
      {
        date: '2022-05-01',
        name: 'Tom1',
        state: '1',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90031',
      },
      {
        date: '2022-05-02',
        name: 'Tom2',
        state: '2',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90032',
      },
      {
        date: '2022-05-03',
        name: 'Tom3',
        state: '3',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90033',
      },
      {
        date: '2022-05-04',
        name: 'Tom4',
        state: '4',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90034',
      },
      {
        date: '2022-05-05',
        name: 'Tom5',
        state: '5',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90035',
      },
    ];
    const table = {
      pageSize: 10,
      total: 100,
      currentPage: 1,
    }

    onBeforeMount(() => {});
    onMounted(() => {});

    const sortChange = (e) => {
      console.log('排序 ==========', e);
    }

    const clickCity = (e) => {   // 测试点击事件
      console.log('city click===========', e);
    }

    const test = (e) => {
      console.log('test e==========', e);
    }

    const handlesCurrentChange = (e) => {     // page change
      console.log('当前页码==========', e);
      proxy.table.currentPage = Number(e);
    }
    const handleSizeChange = (e) => {         // size change
      console.log('每页条数==========', e);
      proxy.table.pageSize = Number(e);
    }

    const handleSelectionChange = (e) => {    // 多选
      console.log('多选控制==========', e);
    }

    const refData = toRefs(data);
    return {
      ...refData,
      columnData,
      tableData,
      sortChange,
      clickCity,
      table,
      test,
      handlesCurrentChange,
      handleSizeChange,
      handleSelectionChange,
    };
  },
};
</script>

<style scoped>
.nd_solt_city {
  cursor: pointer;
}
.nd_normal_div {
  margin: 20px 0;
}
</style>