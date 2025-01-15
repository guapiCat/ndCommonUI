<template>
  <van-cell title="选择日期区间" :value="date" @click="show = true" />
  <nd-calendar v-model:show="show" type="range" @confirm="onConfirm" />
</template>

<script>
import { ref } from "vue"
import ndCalendar from "../../../../../src/packages/APP/nd-calendar/src/nd-calendar.vue"

export default {
  name: "ND_APP_Cascader",
  components: { ndCalendar },
  setup() {
    const date = ref('');
    const show = ref(false);

    const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
    const onConfirm = (values) => {
      const [start, end] = values;
      show.value = false;
      date.value = `${formatDate(start)} - ${formatDate(end)}`;
    };

    return {
      date,
      show,
      onConfirm,
    };
  },
}
</script>

<style scoped>
</style>