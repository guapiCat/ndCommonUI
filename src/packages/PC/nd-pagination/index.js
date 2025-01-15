import ndPagination from './src/nd-pagination.vue'

// install component导出
ndPagination.install = function(app) {
  app.component(ndPagination.name, ndPagination);
}

export default ndPagination;