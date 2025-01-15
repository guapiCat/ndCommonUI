<template>
  <div>

    <h4>通过配置表单内容，配置表单校验规则，进行快速提交</h4>

    <nd-van-form @submit="submit" @failed="failed" :class="switchAlign ? 'changeLf' : ''" id="myForm">

      <nd-app-input v-model="formData.name" label="用户名" name="用户名" placeholder="校验空值" labelAlignType :rules="[{ required: true, message: '请填写非空值' }]" />
      <nd-app-input v-model="formData.age" label="年龄" name="年龄" placeholder="校验1-10" labelAlignType :rules="[{ validator: validator1, message: '请填写1-10数字' }]" />

      <nd-app-input v-model="formData.icon" label="图标" name="图标" placeholder="校验空值" labelAlignType :rules="[{ required: true, message: '请填写非空值' }]">
        <template #right-icon>
            <svg-icon iconName="icon-icon-RightArrow"></svg-icon>
        </template>
      </nd-app-input>

      
      <nd-app-input name="switch" label="开关" labelAlignType :rules="[{ required: true, message: '请打开开关' }]">
        <template #input>
          <nd-switch :checked="formData.switch" size="21px" name="开关"></nd-switch>
        </template>
      </nd-app-input>

      <nd-app-button type="primary" size="small" native-type="submit" class="submit"> 表单提交 </nd-app-button>

    </nd-van-form>

    <div class="set-div">
      <b>切换label间距：</b>
      <nd-switch v-model="switchAlign" size="21px"></nd-switch>
    </div>

  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';
import ndVanForm from '../../../../../src/packages/APP/nd-van-form/src/nd-van-form.vue';
import ndAppInput from '../../../../../src/packages/APP/nd-input/src/nd-input.vue'
import ndAppButton from '../../../../../src/packages/APP/nd-button/src/nd-button.vue'
import ndSwitch from '../../../../../src/packages/APP/nd-switch/index.js';
import svgIcon from '../../../../../src/components/SvgIcon.vue'

export default {
  name: '',
  components: { ndVanForm, ndAppInput, ndAppButton, ndSwitch, svgIcon },
  setup() {
    const data = reactive({
      formData: {
        name: '',
        age: '',
        icon: '',
        switch: false,
      },
      switchAlign: true,
    });
    const { proxy } = getCurrentInstance();

    onBeforeMount(() => {});
    onMounted(() => {});

    const submit = (e) => {       // 提交表单(校验通过后触发)
      alert('表单校验成功');
      console.log('submit=======', e, data.formData);
    }
    
    const failed = (e) => {       // 提交表单（校验失败）
      alert('表单校验失败');
      console.log('faild=======', e, data.formData);
    }

    const validator1 = (val) => {    // 校验规则1
      if(val > 0 && val <= 10) {
        return true;
      } else {
        return false;
      }
    }

    const refData = toRefs(data);
    return {
      ...refData,
      submit,
      failed,
      validator1,
    };
  },
};
</script>

<style scoped>
.submit {
  margin-left: 15px;
}
.set-div {
  margin: 18px;
  display: flex;
}
.changeLf >>> .labelAlign {
  width: 50px !important;
}
</style>