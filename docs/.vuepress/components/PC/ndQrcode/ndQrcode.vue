<template>
  <div>

    <h5>无密码无logo</h5>
    <nd-qrcode code="http://www.baidu.com" ></nd-qrcode>
    
    <h5>有密码无logo</h5>
    <nd-qrcode code="http://www.baidu.com" psw="ERTD2"></nd-qrcode>
    
    <h5>有密码有logo</h5>
    <nd-qrcode code="http://www.baidu.com" psw="OHOH2" logo="https://img0.baidu.com/it/u=4134690046,2399804024&fm=253&fmt=auto&app=138&f=PNG?w=500&h=498" ></nd-qrcode>

  </div>
</template>
<script>
import ndQrcode from "../../../../../src/packages/PC/nd-qrcode/src/nd-qrcode.vue";
import { reactive, toRefs, onMounted } from "vue";
export default {
  components: {
    ndQrcode,
  },
  setup() {
    const data = reactive({});
    onMounted(() => {});
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>
