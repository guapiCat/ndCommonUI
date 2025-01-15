import beeMessage from './ndMessage'

export default {
  install: (app) => {
    app.component('bee-message', beeMessage)
  }
}
