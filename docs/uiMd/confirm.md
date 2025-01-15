<testConfirm></testConfirm>

```vue

<template>
  <h3>组件调用方式123</h3>
  <br>
  <bee-button type="primary" @click="showConfirm.show0=true" style="margin-right: 10px">打开默认组件弹框</bee-button>
  <bee-button type="primary" @click="showConfirm.show1=true" style="margin-right: 10px">打开成功组件弹框</bee-button>
  <bee-button type="primary" @click="showConfirm.show2=true">打开警告组件弹框</bee-button>
  <bee-confirm v-model="showConfirm.show0" @confirm="confirm" @cancel="cancel" confirm-btn-text="默认"
               cancel-btn-text="默认关闭">
    默认框
  </bee-confirm>
  <bee-confirm v-model="showConfirm.show1" @confirm="confirm" @cancel="cancel" type="success" :show-close="false"
               confirm-btn-text="成功" cancel-btn-text="成功关闭">
    成功框
  </bee-confirm>
  <bee-confirm v-model="showConfirm.show2" @confirm="confirm" @cancel="cancel" type="warning">
    警告框内容内容自定义内容内容自定义内容内容自定义内容内容自定义内容内容自定义内容内容自定义内容内容
  </bee-confirm>
  <h3>插槽</h3>
  <br>
  <bee-button type="primary" @click="showConfirm.show3=true" style="margin-right: 10px">打开默认组件弹框（默认插槽）</bee-button>
  <bee-confirm v-model="showConfirm.show3" @confirm="confirm" @cancel="cancel">
    自定义内容内容自定义内容内容自定义内容内容自定义内容内容自定义内容内容自定义内容内容自定义内容内容自定义内容内容
  </bee-confirm>
  <bee-button type="primary" @click="showConfirm.show4=true" style="margin-right: 10px">打开默认组件弹框（底部插槽）</bee-button>
  <bee-confirm v-model="showConfirm.show4" :width="800">
    默认插槽
    <template v-slot:footer>
      <div style="display: flex;justify-content: space-between;padding: 10px 20px;">
        <bee-button type="primary">新建文件夹</bee-button>
        <div>
          <bee-button type="primary" style="margin-right: 10px;">确定</bee-button>
          <bee-button type="error">关闭</bee-button>
        </div>
      </div>
    </template>
  </bee-confirm>
  <h3>当做遮罩层使用</h3>
  <br>
  <bee-button type="primary" @click="showConfirm.show5=true">编辑用户信息</bee-button>
  <bee-confirm v-model="showConfirm.show5" @confirm="confirm" @cancel="cancel" type="default" :width="600">
    <bee-input placeholder="用户名" style="margin-bottom: 10px;"></bee-input>
    <bee-input placeholder="账号" style="margin-bottom: 10px;"></bee-input>
    <bee-input placeholder="密码" style="margin-bottom: 10px;"></bee-input>
  </bee-confirm>
  <h3>手动调用提示弹框</h3>
  <br>
  <bee-button type="primary" @click="loadConfirm">js函数调用弹框提示</bee-button>
</template>

<script>
import BeeConfirm from "../../../plugins/ndConfirm/ndConfirm.vue";
import BeeButton from "../../../plugins/ndButton/ndButton.vue";
import BeeInput from "../../../plugins/ndInput/ndInput.vue";
import {ref} from "vue";
import {newDimConfirm as commonConfirm} from "../../../plugins/ndConfirm/confirm";

export default {
  name: "testConfirm",
  components: {BeeConfirm, BeeButton, BeeInput},
  setup() {
    const showConfirm = ref({
      show0: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    })
    const confirm = () => {
      showConfirm.value = {
        show0: false,
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false
      }
    }
    const loadConfirm = () => {
      console.log(81, 'success')
      debugger
      commonConfirm({
        type:'success',
        message: '亲没什么等方面省得麻烦没什么等方面什么都没法没什么地方没什么大米饭没收到免费吗什么都没法没收到免费吗什么都没法没收到免费没什么地方',
        title: '删除提示哈哈哈哈',
        confirmBtnText: '确定按钮',
        cancelBtnText: '取消按钮',
        confirmOperate() {
          alert('确定回调')
        },
        cancelOperate() {
          alert('取消回调')
        },
        showCancelBtn: true,
        showConfirmBtn: true,
        showClose: false
      })
    }
    const cancel = () => {
      console.log('取消回调，自动关闭')
    }
    return {
      loadConfirm,
      showConfirm,
      confirm,
      cancel,
    }
  }
}
</script>

<style scoped>

</style>

```

### props

| 属性           | 默认值 | **可选值**                                  | 描述                                                         |
| -------------- | ------ | ------------------------------------------- | ------------------------------------------------------------ |
| modelValue     | false  | false  true                                 | 是否显示                                                     |
| mountPoint     | body   | 任意dom选择器                               | dom元素挂载点                                                |
| type           | info   | [ 'default', 'warning', 'info', 'success' ] | 弹框类型：1、info：普通弹框，带有提示ico。2、warning：警告弹框，带有提示ico。3、success：成功弹框，带有提示ico。4、default：默认弹框，不带有ico（可以当做弹出层来使用） |
| width          | 400    | 整形数据                                    | 弹框宽度                                                     |
| showConfirmBtn | true   | true false                                  | 是否显示确定按钮                                             |
| showCancelBtn  | true   | true false                                  | 是否显示取消按钮                                             |
| confirmBtnText | 确定   |                                             | 确定按钮文本                                                 |
| cancelBtnText  | 取消   |                                             | 取消按钮文本                                                 |
| showClose      | true   | true false                                  | 是否显示关闭按钮                                             |

### emits

| 方法              | 回调参数 | 可选值 | 描述                                       |
| ----------------- | -------- | ------ | ------------------------------------------ |
| update:modelValue |          |        | 关闭推送事件                               |
| cancel            |          |        | 点击取消、关闭按钮推送事件（框会自动关闭） |
| confirm           |          |        | 点击确定回调                               |

