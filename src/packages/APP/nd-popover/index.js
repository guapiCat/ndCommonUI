import ndAppPopover from './src/nd-popover.vue';

// install component导出
ndAppPopover.install = function(app) {
  app.component(ndAppPopover.name, ndAppPopover);
}

export default ndAppPopover