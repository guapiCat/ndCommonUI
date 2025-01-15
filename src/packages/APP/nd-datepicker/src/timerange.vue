<template>
  <van-time-picker
    v-if="tabActive=== 'date'" 
    v-bind="$attrs"
    :columns-type="['hour', 'minute', 'second']"
    confirm-button-text="下一步"
    :formatter="formatter"
    @confirm="dateConfirmHandler"
    @change="dateChangeHandler"
  >
    <template v-slot:columns-top>
      <van-tabs v-model:active="tabActive" shrink>
        <van-tab title="开始时间" name="date"></van-tab>
        <van-tab title="结束时间" name="time"></van-tab>
      </van-tabs>
    </template>
  </van-time-picker>

  <van-time-picker 
    v-if="tabActive=== 'time'"  
    v-bind="$attrs"
    :columns-type="['hour', 'minute', 'second']"
    :confirm-button-text="confirmButtonText"
    :formatter="formatter"
    @confirm="timeConfirmHandler"
    @change="timeChangeHandler"
  >
    <template v-slot:columns-top>
      <van-tabs v-model:active="tabActive" shrink>
        <van-tab title="开始时间" name="date"></van-tab>
        <van-tab title="结束时间" name="time"></van-tab>
      </van-tabs>
    </template>
  </van-time-picker>
</template>
<script>
import { ref } from 'vue';

export default {
  props: {
    'confirmButtonText': { type: String, default: '确认' }
  },
  setup(props, { slots }) {
    const now = new Date()
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

    const tabActive = ref('date')
    const dateValue = ref([now.getFullYear(), now.getMonth() + 1, now.getDate()])
    const timeValue = ref([now.getHours(), now.getMinutes(), now.getSeconds()])

    const dateConfirmHandler = ({ selectedValues }) => {
      tabActive.value = 'time'
      dateValue.value = selectedValues
    }
    const dateChangeHandler = ({ selectedValues }) => {
      dateValue.value = selectedValues
    }

    const timeConfirmHandler = ({ selectedValues }) => {
      timeValue.value = selectedValues

      return [dateValue.value, timeValue.value]
    }
    const timeChangeHandler = ({ selectedValues }) => {
      timeValue.value = selectedValues
    }

    return { tabActive, formatter, dateConfirmHandler, dateChangeHandler, timeConfirmHandler, timeChangeHandler };
  },
  
};
</script>

<style scoped lang="scss">
@import '../../common.scss';

.van-tabs {
  :deep(.van-tabs__wrap) {
    .van-tab--disabled {
      color: #646566;
    }
  }
}
</style>