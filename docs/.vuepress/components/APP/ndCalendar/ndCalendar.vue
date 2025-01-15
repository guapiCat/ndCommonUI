<template>
  <van-cell title="选择单个日期" :value="date" @click="show = true" />
  <nd-calendar v-model:show="show" @confirm="onConfirm" />
</template>

<script>
import { ref } from "vue"
import ndCalendar from "../../../../../src/packages/APP/nd-calendar/src/nd-calendar.vue"

export default {
  name: "ND_APP_Cascader",
  components: { ndCalendar },
  setup(props, { emit, slots }) {
    const show = ref(false);
    const date = ref('');

    const formatDate = (date) => `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    const onConfirm = (value) => {
      show.value = false;
      date.value = formatDate(value);
    };

    return {
      show,
      date,
      onConfirm
    };
  }
}
</script>

<style scoped>
button {
  margin-right: 15px;
  margin-bottom: 5px;
}
</style>