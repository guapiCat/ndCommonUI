import ndTreeSelect from './src/nd-treeSelect.vue';

// install component导出
ndTreeSelect.install = function(app) {
  app.component(ndTreeSelect.name, ndTreeSelect);
}

export default ndTreeSelect