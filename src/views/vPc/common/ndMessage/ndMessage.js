// 消息提示，用于确定用户操作，提供方法调用
import { createApp } from 'vue'
import beeMessage from './ndMessage.vue'

/**
 * 警告提示
 * @param message 提示消息
 * @param duration 提示持续时长
 * @param single 是否等上次关闭了在提示，避免疯狂提示。
 * @param type 类型['info', 'error', 'warning', 'success']
 * @returns {Promise<unknown>}
 */
function newDimMessage ({ message, duration, single = true, type = 'info' }) {
  return new Promise((resolve, reject) => {
    if (single) {
      const tempDom = document.querySelectorAll('.newDimMessageParent')
      if (tempDom.length) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('已经有dom消息提示了')
        return
      }
    }
    const confirmInstance = createApp(beeMessage, {
      modelValue: true,
      type,
      message,
      duration,
      onClose: () => {
        unmount()
        // reject()
      }
    })
    const unmount = () => {
      confirmInstance.unmount()
      document.body.removeChild(parentNode)
    }
    const parentNode = document.createElement('div')
    parentNode.setAttribute('class', 'newDimMessageParent')
    document.body.appendChild(parentNode)
    confirmInstance.mount(parentNode)
  })
}

export { newDimMessage }
