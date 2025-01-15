// 预期需求：
// Confirm({ content: '请确认是否删除' }).then(() => {
//   store.dispatch('cart/batchDeleteCart')
// }).catch(e => {})
import { createVNode, render } from 'vue'
import comfirmBox from './index.vue'

// 准备div容器
const divNode = createVNode('div', { class: 'xd-confirm-container' })
render(divNode, document.body)
// 获取 DOM 节点, 用于挂载组件或卸载组件
const container = divNode.el

// 导出函数可通过调用 Confirm() 函数动态创建 xdConfirm 组件
const Confirm = ({ content }) => {
  // 返回 Promise 对象
  return new Promise((resolve, reject) => {
    // 2. 点击确认按钮，触发resolve同时销毁组件
    const confirmCallback = () => {
      render(null, container)
      resolve()
    }
    // 3. 点击取消按钮，触发reject同时销毁组件
    const cancelCallback = () => {
      render(null, container)
      reject()
    }
    // 1. 创建 xdConfirm 组件
    const VNode = createVNode(comfirmBox, { content, confirmCallback, cancelCallback })
    render(VNode, container)
  })
}
export default Confirm


//// 调用示例
// import Confirm from '../app/common/messageBox/ndConfirm.js'
//  Confirm({ content: '亲,您确认删除该商品吗？' }).then((res) => {
//   console.log('确认事件')
//   }).catch((err) => {
//   console.log('取消事件')
// })





