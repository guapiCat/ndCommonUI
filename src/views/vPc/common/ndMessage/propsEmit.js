export const props = {
  // 显示隐藏
  modelValue: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'default',
    required: false,
    validator (value) {
      return ['info', 'error', 'warning', 'success'].includes(value)
    }
  },
  // 消息提示
  message: {
    type: String,
    default: '消息提示'
  },
  // 持续时长
  duration: {
    type: Number,
    default: 2000
  },
  // 自动关闭回调
  onClose: {
    type: Function,
    default: () => {
    }
  }
}
