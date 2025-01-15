import ndCalendar from './src/nd-calendar.vue';

// install component导出
ndCalendar.install = function(app) {
  app.component(ndCalendar.name, ndCalendar);
}

export default ndCalendar