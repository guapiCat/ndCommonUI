<template>
  <bee-button type="primary" style="margin-right: 10px" @click="show('success')">成功提示</bee-button>
  <bee-button type="primary" style="margin-right: 10px" @click="show('warning')">警告提示</bee-button>
  <bee-button type="primary" style="margin-right: 10px" @click="show('info')">普通提示</bee-button>
  <bee-button type="primary" style="margin-right: 10px" @click="show('error')">错误提示</bee-button>
  <bee-button type="primary" style="margin-right: 10px" @click="single">非单例模式</bee-button>
</template>

<script>
import BeeButton from "../../../src/views/vPc/common/ndButton/ndButton.vue";
import {newDimMessage as commonMessage} from "../../../src/views/vPc/common/ndMessage/ndMessage";

export default {
  name: "testMessage",
  components: {BeeButton},
  setup() {
    const show = (type) => {
      commonMessage({
        message: '成功提示，默认持续3000ms',
        duration: 3000,
        type
      })
    }
    const single = () => {
      commonMessage({
        message: '我要接替上一个提示',
        duration: 3000,
        type: 'error',
        single: false
      })
    }
    return {
      show,
      single
    }
  }
}
</script>

<style scoped>

</style>