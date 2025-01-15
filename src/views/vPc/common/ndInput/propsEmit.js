export const props = {
  modelValue: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: false,
    default: '请输入内容'
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
}
export const emits = ['update:modelValue', 'input']
