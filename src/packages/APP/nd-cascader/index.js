import ndAppCascader from './src/nd-cascader.vue';

// install component导出
ndAppCascader.install = function(app) {
  app.component(ndAppCascader.name, ndAppCascader);
}

export default ndAppCascader