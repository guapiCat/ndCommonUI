import ndTable from './src/nd-table.vue';

// install component导出
ndTable.install = function(app) {
  app.component(ndTable.name, ndTable);
}

export default ndTable;