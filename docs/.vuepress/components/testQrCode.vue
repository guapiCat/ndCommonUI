<template>
  <button @click="showQrCode = true">showQrCode</button>
<!--  <div v-if="showQrCode">-->
<!--    <bee-qr-code></bee-qr-code>-->
<!--  </div>-->
</template>

<script>
// import BeeQrCode from "../../../src/views/vPc/common/ndQrCode/ndQrCode.vue";
import {onMounted, ref} from "vue";

export default {
  name: "testQrCode",
  // components: {BeeQrCode},
  setup(){
    const showQrCode = ref(false)
    onMounted(()=>{

    })
    return{
      showQrCode
    }
  }
}
</script>

<style scoped>

</style>