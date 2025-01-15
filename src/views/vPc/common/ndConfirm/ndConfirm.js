// import { createApp } from 'vue'
import beeConfirm from './ndConfirm.vue'
import { h, render } from 'vue'

/**
 * 函数调用组件提示
 * @param type 类型
 * @param title 标题
 * @param message 内容
 * @param confirmBtnText 确定文本
 * @param cancelBtnText 取消文本
 * @param confirmOperate 确定回调
 * @param cancelOperate 取消回调
 * @param showConfirmBtn 是否显示确定按钮
 * @param showCancelBtn 是否显示取消按钮
 * @param showClose 是否显示关闭
 * @returns {Promise<unknown>}
 */
export const newDimConfirm = ({
  type = 'info',
  title,
  message,
  confirmBtnText,
  cancelBtnText,
  confirmOperate,
  cancelOperate,
  showConfirmBtn,
  showCancelBtn,
  showClose
}) => {
  return new Promise((resolve, reject) => {
    const tempDom = document.querySelectorAll('.newDimConfirmParent')
    if (tempDom.length) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('已经有dom弹出层')
      return
    }
    // 创建component虚拟节点
    const vNode = h(beeConfirm, {
      mountPoint: '.newDimConfirmParent',
      modelValue: true,
      type,
      title,
      message,
      confirmBtnText: confirmBtnText,
      showConfirmBtn: showConfirmBtn,
      cancelBtnText: cancelBtnText,
      showCancelBtn: showCancelBtn,
      showClose,
      onConfirm: () => {
        unmount()
        if (confirmOperate) {
          confirmOperate()
        }
        resolve()
      },
      onCancel: () => {
        unmount()
        if (cancelOperate) {
          cancelOperate()
        }
        reject(new Error())
      }
    })
    const unmount = () => {
      document.body.removeChild(parentNode)
    }
    const parentNode = document.createElement('div')
    parentNode.setAttribute('class', 'newDimConfirmParent')
    document.body.appendChild(parentNode)
    // 挂载虚拟节点
    render(vNode, parentNode)
  })
}
