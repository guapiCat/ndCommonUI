/**
 * 单个安装bee-button
 * @Author: li.leLe
 * @Date: 2021/8/18 11:11
 */

import beeButton from './ndButton.vue'

export default {
  install: (app) => {
    app.component('bee-button', beeButton)
  }
}
