<template>
  <div class="nd-qrcode">
    <canvas ref="qrCanvas"></canvas>
    <div v-show="psw" class="code-psw" :style="{ width: width + 'px' }">{{psw}}</div>
  </div>
</template>

<script>
// 二维码github地址：https://github.com/HerbLuo/qr-code-with-logo
import { reactive, toRefs, onMounted, ref } from 'vue';
import { QRCode } from '../../../../utils/pc/qrcode.js'

export default {
  name: '',
  props: {
    psw: {            // 密码
      type: String,
      default: () => { return '' }
    },
    code: {
      type: String,   // 二维码内容
      default: () => { return '' }
    },
    logo: {
      type: String,   // logo地址
      default: () => { return '' }
    },
    width: {
      type: String,   // 二维码宽度
      default: () => { return '140' }
    },
  },
  setup(props, ctx) {
    const data = reactive({});
    let qrCanvas = ref(null);

    onMounted(() => {
      const codeObj = {
        canvas: qrCanvas.value,
        content: props.code,
        width: props.width,
      }
      if(props.logo) {
        codeObj.logo = {
          src: props.logo,
        }
      }
      QRCode.toCanvas(codeObj);
    });

    const refData = toRefs(data);
    return {
      ...refData,
      qrCanvas,
    };
  },
};
</script>

<style scoped>
.nd-qrcode {
  position: relative;
}
.code-psw {
  text-align: center;
  background: white;
  position: relative;
  top: -13px;
  box-sizing: border-box;
  padding-bottom: 7px;
  font-size: 16px;
}

</style>