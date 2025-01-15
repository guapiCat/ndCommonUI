import {ndClickOutSide} from "@/directives/ndClickOutSide";

/**
 * 全局导入所有指令
 */
export default {
    install: (app) => {
        app.directives('nd-clickOutSide', ndClickOutSide)
    }
}