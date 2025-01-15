import ndButton from './src/nd-button.vue';

// install component导出
ndButton.install = function(app) {
  app.component(ndButton.name, ndButton);
}

export default ndButton