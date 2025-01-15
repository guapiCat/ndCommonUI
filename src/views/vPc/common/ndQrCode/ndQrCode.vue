<template>
  <div class="qrContainer" :style="styles">
    <div id="beeQrCode" ref="beeQrCode">
      <div class="qrLogo">
        <slot name="logo"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs } from 'vue'
import QRCode from 'qrcodejs2'
import { type } from './type'
import html2canvas from 'html2canvas'

export default {
  name: 'ndQrCode',
  setup (props) {
    const { width, height, text, bottomFillStyle } = toRefs(props)
    const beeQrCode = ref(null)
    const styles = reactive({
      width: width.value + 'px',
      height: height.value + 'px'
    })
    const generateCode = () => {
      // eslint-disable-next-line no-new
      new QRCode('beeQrCode', {
        text: text.value,
        width: width.value,
        height: height.value
      })
      const canvas = document.querySelector('#ndQrCode canvas')
      const ctx = canvas.getContext('2d')
      const nc = document.createElement('canvas')
      nc.width = canvas.width
      nc.height = canvas.height
      nc.getContext('2d').drawImage(document.querySelector('#ndQrCode canvas'), 0, 0)
      console.log('nc', nc)
      canvas.width = width.value
      canvas.height = bottomFillStyle.value.my ? height.value + 30 : height.value
      ctx.drawImage(nc, 0, 0)
      if (bottomFillStyle.value.my) {
        ctx.fillStyle = bottomFillStyle.value.background // 分配颜色
        ctx.fillRect(0, height.value, width.value, 40) // 绘制矩形(x,y,width,height)
        ctx.font = bottomFillStyle.value.font // 文本大小, 字体
        ctx.fillStyle = bottomFillStyle.value.color // 分配颜色
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(bottomFillStyle.value.text, width.value / 2, canvas.height - 10, width.value) // 绘制文本(text, x, y)
      }
    }
    const download = (fileName = 'download') => {
      const element = ndQrCode.value
      console.log(document.getElementById(element))
      html2canvas(element).then(canvas => {
        const dataURL = canvas.toDataURL('image/png')
        const a = document.createElement('a')
        const handle = new MouseEvent('click')
        a.download = fileName + '.png'
        a.href = dataURL
        a.dispatchEvent(handle)
      })
    }
    onMounted(() => {
      generateCode()
    })
    return {
      styles,
      download,
      ndQrCode
    }
  },
  props: type
}
</script>

<style scoped lang="less">
.qrContainer {
  position: relative;

  .qrLogo {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 44px;
    margin-top: -22px;
    margin-left: -22px;
    background: #fff;
    border-radius: 5px;
    text-align: center;
    line-height: 44px;
  }
}
</style>
