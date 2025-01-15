<template>
  <van-cell title="选择多个日期" :value="text" @click="show = true" />
  <nd-calendar v-model:show="show" type="multiple" @confirm="onConfirm" />
</template>

<script>
import { ref } from "vue"
import ndCalendar from "../../../../../src/packages/APP/nd-calendar/src/nd-calendar.vue"

export default {
  name: "ND_APP_Cascader",
  components: { ndCalendar },
  setup() {
    const text = ref('');
    const show = ref(false);

    const formatDate = (date) => `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    const onConfirm = (dates) => {
      show.value = false;
      console.log(dates);
      dates.map(item => {
        text.value += formatDate(item) + ' ';
      })
      // text.value = `选择了 ${dates.length} 个日期`;
    };

    return {
      text,
      show,
      onConfirm,
    };
  },
}
</script>

<style scoped>
</style>