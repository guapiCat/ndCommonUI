import { createApp } from "vue";
import ndAppPopup from "./src/nd-popup.vue";
import { Popup } from "vant/es";
/**
 * 导出函数式调用
 * vApp: 组件实例 show：显示 hide：卸载
 */
const ndAppPopupFn = {
  vApp: null,
  show: function (options) {
    return new Promise((resolve) => {
      this.hide && this.hide();

      const { props, confirm, cancel, close, clickCloseIcon } = options;
      const rootNode = document.createElement("div");
      rootNode.setAttribute("id", "ndAppPopupFn");

      this.vApp = createApp(ndAppPopup, {
        defaultShow: true,
        ...props,
        confirm,
        cancel,
        close,
        clickCloseIcon,
      });

      document.body.appendChild(rootNode);
      this.vApp.use(Popup).mount(rootNode);
      resolve()
    });
  },
  hide: function () {
    const fnNode = document.getElementById("ndAppPopupFn");
    fnNode && fnNode.remove();
    this.vApp && this.vApp.unmount();
  },
};

// install component导出
export { ndAppPopup, ndAppPopupFn };
