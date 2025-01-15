<template>
  <div class="nd-table-demo">
    <nd-table :columnData="columnData" :tableData="tableData" :stripe="true" @nextClick="test" :checkbox="true" :border="true"
      @handlesCurrentChange="handlesCurrentChange" @handleSizeChange="handleSizeChange" @handleSelectionChange="handleSelectionChange"
      :table="table" @sortChange="sortChange" :max-height="300" :isShowPagination="true" :rowClassName="tableRowClassName"
      :default-sort="{ prop: 'zip', order: 'ascending' }"
    >

      <template #test>
        <div>
          <el-button type="primary">地址</el-button>
        </div>
      </template>
      <template #city="scope">
        <div class="nd_solt_city" @click="clickCity(scope.row)"> {{scope.row.city}}-插入-{{scope.row.name}} </div>
      </template>

    </nd-table>
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';
import ndTable from '../../../../../src/packages/PC/nd-table/src/nd-table.vue';

export default {
  name: '',
  components: { ndTable },
  setup() {
    const data = reactive({});
    const { proxy } = getCurrentInstance();

    const columnData = [
      { prop: 'date', label: '图文组合', minWidth: '150', combType: 1, combObject: ['fileSrc', 'city'],  },
      { prop: 'name', label: '姓名', minWidth: '150', sort: true },
      { prop: 'state', label: '管道+10', minWidth: '150', pipe: (val) => {return val*1 + 10} },
      { prop: 'city', label: '城市插槽', minWidth: '220', slotName: 'city', $attrs: {resizable: true} },
      { prop: 'address', label: '地址', minWidth: '150', slotName: 'test', colType: 1, },
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
        fileSrc: 'http://10.122.52.191:8003/images/fileType/catia.png',
      },
      {
        date: '2022-05-02',
        name: 'Tom2',
        state: '2',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90032',
        fileSrc: 'http://10.122.52.191:8003/images/fileType/catia.png',
      },
      {
        date: '2022-05-03',
        name: 'Tom3',
        state: '3',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90033',
        fileSrc: 'http://10.122.52.191:8003/images/fileType/catia.png',
      },
      {
        date: '2022-05-04',
        name: 'Tom4',
        state: '4',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90034',
        fileSrc: 'http://10.122.52.191:8003/images/fileType/catia.png',
      },
      {
        date: '2022-05-05',
        name: 'Tom5',
        state: '5',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90035',
        fileSrc: 'http://10.122.52.191:8003/images/fileType/catia.png',
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
      console.log('自定义排序规则 ==========', e.order);
      alert(`自定义排序规则${e.order}`);
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
      alert(`当前页码:${e}`);
    }
    const handleSizeChange = (e) => {         // size change
      console.log('每页条数==========', e);
      proxy.table.pageSize = Number(e);
      alert(`每页条数:${e}`);
    }

    const handleSelectionChange = (e) => {    // 多选
      console.log('多选控制==========', e);
    }

    const tableRowClassName = ({row, rowIndex}) => {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
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
      tableRowClassName,
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
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>