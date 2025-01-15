import { createApp, createVNode, render, nextTick } from "vue";
import ndAppDialog from './src/nd-dialog.vue';
import { Dialog } from 'vant/es';

/**
 * 导出函数式调用
 * vApp: 组件实例 show：显示 hide：卸载
 */
const ndAppDialogFn = {
  vApp: null,
  show: function(options) {

    this.hide && this.hide();
  
    const { props, confirm, cancel, close } = options;
    const rootNode = document.createElement("div");
    rootNode.setAttribute('id', 'ndAppDialogFn');
    
    this.vApp = createApp(ndAppDialog, {
      defaultShow: true,
      ...props,
      confirm,
      cancel,
      close,
    });
  
    document.body.appendChild(rootNode);
  
    this.vApp.use(Dialog).mount(rootNode);
  
  },
  hide: function() {
    const fnNode = document.getElementById('ndAppDialogFn');
    fnNode && fnNode.remove();
    this.vApp && this.vApp.unmount();
  }
}

// install component导出

export {
  ndAppDialog,
  ndAppDialogFn,
}