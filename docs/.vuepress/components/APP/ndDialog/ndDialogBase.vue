<template>
  <div class="my-page">

    <span @click="show = true">打开弹窗:{{ show }}</span>
    <ndDialog title="这是一个标题" v-model="show" confirm-button-text="主要操作" @confirm="confirm" @cancel="cancel">
      <div class="content">这是一段内容</div>
    </ndDialog>

    <br />
    
    <span @click="show2 = true">打开无标题弹窗弹窗</span>
    <ndDialog v-model="show2" confirm-button-text="主要操作" message="填入一个文本，并支持换行，换行">
    </ndDialog>

    <br />

    <span @click="show3 = true">显示所有按钮</span>
    <ndDialog v-model="show3" title="所有按钮" showCancelButton confirm-button-text="主要操作" cancel-button-text="辅助操作" @confirm="confirm" @cancel="cancel">
      <div class="content content2">这是一段内容</div>
    </ndDialog>

    <br />
    <span @click="show5 = true">修改按钮样式</span>
    <ndDialog v-model="show5" title="所有按钮" showCancelButton confirm-button-text="确认按钮" confirm-button-color="#EB3941" cancel-button-color="#8169FF"
      cancel-button-text="取消按钮" @confirm="confirm" @cancel="cancel">
      <div class="content content2">这是一段内容</div>
    </ndDialog>

    <br />

    <span @click="show4 = true">带插槽的弹窗</span>
    <nd-dialog v-model="show4" title="所有按钮" showCancelButton confirm-button-text="主要操作" cancel-button-text="辅助操作" @confirm="confirm" @cancel="cancel">
      
      <template #default>
        <div class="content">这是一个内容solt</div>
      </template>

      <template #title>
        <div class="content content2 title">这是一个标题solt</div>
      </template>

      <template #footer>
        <div class="foot">
          <button @click="show4 = false">确认</button>
          <button @click="show4 = false">取消</button>
        </div>
      </template>
    </nd-dialog>

  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import ndDialog from '../../../../../src/packages/APP/nd-dialog/src/nd-dialog.vue';

export default {
  name: '',
  components: { ndDialog },
  setup() {
    const data = reactive({
      show: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
    });

    const confirm = () => {       // 点击确认
      console.log('点击了确认');
    }
    
    const cancel = () => {        // 点击取消
      console.log('点击了取消');
    }

    const refData = toRefs(data);
    return {
      ...refData,
      confirm,
      cancel,
    };
  },
};
</script>

<style scoped>
span {
  display: inline-block;
  padding: 4px 10px;
  margin-right: 20px;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  cursor: pointer;
}
.content {
  text-align: center;
  padding-top: 4px;
  padding-bottom: 24px;
  font-size: 14px;
  color: rgb(102, 102, 102);
}
.content2 {
  padding-top: 24px;
}
.foot {
  text-align: center;
}
.foot button {
  margin: 10px;
  padding: 4px 12px;
  border: none;
  color: white;
  background: rgb(24, 128, 227);
  border-radius: 20px;
  width: 100px;
  font-size: 14px;
}
.title {
  font-weight: bold;
}
</style>