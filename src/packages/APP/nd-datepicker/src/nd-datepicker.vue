<template>
  <template v-if="!!type">
    <date-timer v-if="type === 'datetime'" v-bind="$attrs"></date-timer>
    <date-range v-if="type === 'daterange'" v-bind="$attrs"></date-range>
    <time-range v-if="type === 'timerange'" v-bind="$attrs"></time-range>
  </template>

  <template v-else>
    <van-time-picker v-if="isTimePicker" v-bind="$attrs" :columns-type="columnsType" :formatter="formatter" />
    <van-date-picker v-else v-bind="$attrs" :columns-type="columnsType" :formatter="formatter" />
  </template>
</template>
<script>
import DateTimer from "./datetimer.vue"
import DateRange from "./daterange.vue"
import TimeRange from "./timerange.vue"

export default {
  components: { DateTimer, DateRange, TimeRange },
  props: {
    formatter: { type: Function, default: null },
    columnsType: { type: Array, default: ['year', 'month', 'day'] },
    type: { type: String, default: undefined }
  },
  setup(props, { slots }) {
    const isTimePicker = props.columnsType && Array.isArray(props.columnsType) && (props.columnsType.includes("hour") || props.columnsType.includes("minute") || props.columnsType.includes("second"))

    const formatter = (type, option) => {
      if(props.formatter) return props.formatter(type, option)

      if (type === 'year') {
        option.text += '年';
      }
      if (type === 'month') {
        option.text += '月';
      }
      if (type === 'day') {
        option.text += '日';
      }
      if (type === 'hour') {
        option.text += '时';
      }
      if (type === 'minute') {
        option.text += '分';
      }
      if (type === 'second') {
        option.text += '秒';
      }
      return option;
    };

    return { isTimePicker, formatter };
  },
  
};
</script>

<style scoped lang="scss">
@import '../../common.scss';
</style>