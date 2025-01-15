import ndAppNumberKeyboard from './src/nd-number-keyboard.vue';

// install component导出
ndAppNumberKeyboard.install = function(app) {
  app.component(ndAppNumberKeyboard.name, ndAppNumberKeyboard);
}

export default ndAppNumberKeyboard