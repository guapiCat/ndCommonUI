export const type = {
  text: {
    required: true,
    type: String
  },
  width: {
    required: false,
    type: Boolean,
    default: 200
  },
  height: {
    required: false,
    type: Boolean,
    default: 200
  },
  bottomFillStyle: {
    required: false,
    type: Object,
    default () {
      return {
        my: false,
        color: '#6ca2ff',
        font: '15px Arial',
        background: '#fff',
        text: ''
      }
    }
  }
}
