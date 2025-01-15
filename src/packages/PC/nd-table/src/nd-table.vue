<template>
  <div class="nd-table">
    <!-- 表格 -->
    <el-table 
      :data="tableData" 
      :max-height="maxHeight" 
      :border="border"
      :stripe="stripe"
      :emptyText="emptyText"
      @sort-change="sortChange"
      @selection-change="handleSelectionChange"
      v-bind="$attrs"
      v-on="$attrs"
    >

      <el-table-column v-if="checkbox" type="selection" width="45" />
      <!-- 表格-内容 -->
      <template v-for="(item, index) in columnData" :key="index">
        <el-table-column 
          :prop="item.prop" 
          :label="item.label" 
          :min-width="item.minWidth || item['min-width'] || item.width || 88"
          :sortable="item.sort"
          :align="item.align || 'center'"
          v-bind="item.$attrs"
        >
        
          <template #default="scope">

            <!-- 插槽模式 slotName -->
            <slot v-if="item.slotName" :name="item.slotName" :row="scope.row" :scope="scope"></slot>
            <!-- 管道模式 scope.row 单行数据 -->
            <span v-else-if="item.pipe">{{item.pipe(scope.row[item.prop])}}</span>
            <!-- 固定组合模式 combType 1:文本+图片组合 -->
            <div v-else-if="item.combType == 1">
              <img class="nd-table-comb1-img" :src="scope.row[item.combObject[0]]" v-if="scope.row[item.combObject[0]]" alt="">
              <span class="nd-table-comb1-text">{{scope.row[item.combObject[1]]}}</span>
            </div>
            <!-- 固定组合模式 combType 2:标签列表组合 -->
            <div v-else-if="item.combType == 2">
              
            </div>

          </template>
          
        </el-table-column>
      </template>

    </el-table>

    <!-- 默认分页器 -->
    <div class="nd-pagination-ctl" v-if="(tableData && tableData.length) && isShowPagination && table">
      <el-pagination
        @current-change="handlesCurrentChange"
        @size-change="handleSizeChange"
        :total="table && table.total"
        :default-current-page="table && table.currentPage"
        :default-page-size="table && table.pageSize"
        :page-sizes="[10, 20, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        v-bind="$attrs"
        v-on="$attrs"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance, ref } from 'vue';

export default {
  name: 'nd-table',
  components: {},
  emits: [
    'sortChange',                     // 回调 order-上下排序类型 prop-列
    'handleSizeChange',
    'handlesCurrentChange',
    'handleSelectionChange',
  ],
  props: {
    isShowPagination: {               // 默认是否显示分页
      type: Boolean,
      default: () => { return false }
    },
    table: {                          // 表格分页数据
      type: Object,
      default: () => { return { } },
    },
    tableData: {                      // 表格数据
      type: Array,
      default: () => { return [] },
    },
    columnData: {                     // 列配置 prop-列名对应的数据 label-列名 width-宽度 sort-自动排序 pipe-管道
      type: Array,
      default: () => { return [] },
    },
    maxHeight: {                      // 最大高度
      type: Number,
      default: () => { return 1000 },
    },
    stripe: {                         // 是否显示斑马纹
      type: Boolean,
      default: () => { return false },  
    },
    border: {                         // 列线
      type: Boolean,
      default: () => { return false },  
    },
    emptyText: {                      // 没有数据默认显示的文本
      type: String,
      default: () => { return '暂无数据' }, 
    },
    checkbox: {
      type: Boolean,
      default: () => { return false }, 
    }
  },
  setup() {
    const data = reactive({});
    const { proxy } = getCurrentInstance();

    onBeforeMount(() => { });
    onMounted(() => { });

    const deleteRow = () => {};

    const sortChange = (e) => {       // 排序
      proxy.$emit('sortChange', e);
    }

    /**
     * 页数 change
     */
    const handlesCurrentChange = (e) => {     // 分页change
      proxy.$emit('handlesCurrentChange', e);
    }

    /**
     * size change
     */
    const handleSizeChange = (e) => {          // size change
      proxy.$emit('handleSizeChange', e);
    }

    /**
     * 多选回调
     */
    const handleSelectionChange = (e) => {
      proxy.$emit('handleSelectionChange', e);
    }

    /**
     * 单选
     */
    const handleCurrentChange = (e) => {
      proxy.$emit('handleCurrentChange', e);
    }

    const refData = toRefs(data);
    return {
      ...refData,
      deleteRow,
      sortChange,
      handlesCurrentChange,
      handleSizeChange,
      handleSelectionChange,
      handleCurrentChange,
    };
  },
};
</script>

<style scoped>
.nd-table {
  /* box-shadow: inset 1px 1px 0px 0px #DCDFE6; */
  /* width: 500px; */
}
/**样式重写 */
div /deep/ .el-table th.el-table__cell {
  background: #F2F6FC;
}
div /deep/ .el-table__row {
  height: 48px;
}
div /deep/ .el-table thead {
  height: 48px;
}
.nd-pagination-ctl {
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: right;
}
.nd-table-comb1-img {
  width: 36px;
  height: 36px;
  margin-right: 8px;
  border-radius: 4px;
  vertical-align: middle;
}
.nd-table-comb1-text {
  vertical-align: middle;
}
</style>