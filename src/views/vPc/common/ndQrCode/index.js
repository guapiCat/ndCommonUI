import beeQrCode from './ndQrCode'

export default {
  install: (app) => {
    app.component('bee-qrcode', beeQrCode)
  }
}
