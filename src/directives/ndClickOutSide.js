/**
 * ndClickOutSide指令，注意避免冒泡事件发生。
 * @type {{beforeUnmount(*): void, mounted(*, *): void}}
 */
export const ndClickOutSide = {
    mounted(el, binding) {
        function eventHandler(e) {
            // 判断绑定元素是否包含当前元素
            if (el.contains(e.target)) {
                return false
            }
            // 调用元素方法
            if (binding.value && typeof binding.value === 'function') {
                binding.value(e)
            }
        }

        el.__click_outside__ = eventHandler
        document.addEventListener('click', eventHandler)
    },
    beforeUnmount(el) {
        document.removeEventListener('click', el.__click_outside__)
        delete el.__click_outside__
    }
}