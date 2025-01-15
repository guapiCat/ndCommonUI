import ndAppDatePicker from './src/nd-datepicker.vue';

// install component导出
ndAppDatePicker.install = function(app) {
  app.component(ndAppDatePicker.name, ndAppDatePicker);
}

export default ndAppDatePicker