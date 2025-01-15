import ndAppPicker from './src/nd-picker.vue';

// install component导出
ndAppPicker.install = function(app) {
  app.component(ndAppPicker.name, ndAppPicker);
}

export default ndAppPicker