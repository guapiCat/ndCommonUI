<template>
  <div class="nd-table-demo">
    <nd-table :columnData="columnData" :tableData="tableData"
      :table="table" >

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
      { prop: 'date', label: '时间' },
      { prop: 'name', label: '姓名' },
      { prop: 'state', label: '管道' },
      { prop: 'city', label: '城市' },
      { prop: 'address', label: '地址' },
      { prop: 'zip', label: '最右列' },
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