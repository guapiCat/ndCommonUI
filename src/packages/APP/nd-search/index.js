import ndAppSearch from './src/nd-search.vue';

// install component导出
ndAppSearch.install = function(app) {
  app.component(ndAppSearch.name, ndAppSearch);
}

export default ndAppSearch