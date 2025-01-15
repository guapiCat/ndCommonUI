import ndAppToast from "./src/nd-toast.vue";
// import {showToast as show} from 'vant/es'
import { createVNode, render, nextTick } from "vue";

const divNode = createVNode("div");
render(divNode, document.body);
// 获取 DOM 节点, 用于挂载组件或卸载组件
const container = divNode.el;
let timer = null;
const showToast = (options) => {
  if (!!timer) {
    clearTimeout(timer);
    timer = null;
  }
  // options配置同vant
  let option = { duration: 2000, className: "ndIconToast", position: "bottom" };
  if (!options.className) delete option.className; // 如果没有传入icon字段, 去除className, 不然有className会变成图标模式
  option = Object.assign(option, options);

  nextTick(() => {
    // dom渲染完成后再调用showToast, 这样样式才能成功
    // show(option)
    const VNode = createVNode(ndAppToast, { fn: true, ...option }); // 传入fn:true, 使用函数模式
    render(VNode, container);
    if (option.duration != 0) {
      timer = setTimeout(() => {
        // toast关闭时清除挂载blockComp => 挂载blockComp是为添加覆写样式
        render(null, container);
      }, option.duration);
    }
  });
};
const closeToast = () => {
    if(!!container) {
      if(!!timer){
        clearTimeout(timer)
        timer = null
      }
      render(null, container);
    }
}

export { ndAppToast, showToast, closeToast };
