import ndSwitch from './src/nd-switch.vue';

// install component导出
ndSwitch.install = function(app) {
  app.component(ndSwitch.name, ndSwitch);
}


export default ndSwitch;