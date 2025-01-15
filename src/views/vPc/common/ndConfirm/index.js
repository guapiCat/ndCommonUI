import beeConfirm from './ndConfirm'

export default {
  install: (app) => {
    app.component('bee-confirm', beeConfirm)
  }
}
