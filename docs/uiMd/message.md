<testMessage></testMessage>





### 轻提示只支持js方式调用

```vue
<template>
  <bee-button type="primary" style="margin-right: 10px" @click="show('success')">成功提示</bee-button>
  <bee-button type="primary" style="margin-right: 10px" @click="show('warning')">警告提示</bee-button>
  <bee-button type="primary" style="margin-right: 10px" @click="show('info')">普通提示</bee-button>
  <bee-button type="primary" style="margin-right: 10px" @click="show('error')">错误提示</bee-button>
  <bee-button type="primary" style="margin-right: 10px" @click="single">非单例模式</bee-button>
</template>

<script>
import BeeButton from "../../../src/views/vPc/common/ndButton/ndButton.vue";
import {newDimMessage as commonMessage} from "../../../src/views/vPc/common/ndMessage/message";

export default {
  name: "testMessage",
  components: {BeeButton},
  setup() {
    const show = (type) => {
      commonMessage({
        message: '成功提示，默认持续3000ms',
        duration: 3000,
        type
      })
    }
    const single = () => {
      commonMessage({
        message: '我要接替上一个提示',
        duration: 3000,
        type: 'error',
        single: false
      })
    }
    return {
      show,
      single
    }
  }
}
</script>
```

| 属性     | 默认值   | 可选值                                  | 描述                   |
| -------- | -------- | --------------------------------------- | ---------------------- |
| type     | default  | ['info', 'error', 'warning', 'success'] | 提示类型               |
| message  | 消息提示 |                                         | 消息                   |
| duration | 3000ms   |                                         | 持续时长               |
| single   | true     | true false                              | 是否等上次关闭了在提示 |