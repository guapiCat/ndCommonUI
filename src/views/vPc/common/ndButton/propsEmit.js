export const props = {
  // 按钮类型
  type: {
    type: String,
    default: 'default',
    required: false,
    validator (value) {
      return ['default', 'primary', 'error', 'warning', 'success'].includes(value)
    }
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false,
    required: false
  }
}
export const emits = ['click']
