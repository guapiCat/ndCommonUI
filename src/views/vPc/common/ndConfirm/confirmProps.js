const confirmProps = {
  // 挂载dom点
  mountPoint: {
    required: false,
    default: 'body',
    type: String
  },
  // 类型
  type: {
    required: false,
    default: 'info',
    validator (value) {
      return ['default', 'warning', 'info', 'success'].includes(value)
    }
  },
  // 宽度
  width: {
    required: false,
    default: 400,
    type: Number
  },
  // 显示隐藏
  modelValue: {
    type: Boolean,
    default: false
  },
  // 标题信息
  title: {
    type: String,
    default: '提示'
  },
  // 标题信息
  message: {
    type: String,
    default: '内容信息'
  },
  // 是否需要显示确定按钮
  showConfirmBtn: {
    type: Boolean,
    default: true
  },
  // 是否需要显示取消按钮
  showCancelBtn: {
    type: Boolean,
    default: true
  },
  // 确定按钮文本
  confirmBtnText: {
    type: String,
    default: '确定'
  },
  // 取消按钮文本
  cancelBtnText: {
    type: String,
    default: '取消'
  },
  // 是否显示关闭按钮
  showClose: {
    type: Boolean,
    default: true
  }
}
export { confirmProps }
