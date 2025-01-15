<template>
  <div class="nd-app-popup">

    <nd-app-button @click="openPop" type="primary">开启</nd-app-button>
    <nd-app-popup v-model="show" @close="close" @clickCloseIcon="clickCloseIcon" :showSelfCloseIcon="true" :closeable="false" @clickSelfCloseIcon="clickSelfClose"
      title="这是标题" @confirm="confirm" @cancel="cancel" :content="content" imgSrc="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" confirmButtonStr="确定" cancelButtonStr="取消">
      <template #default>
        <div class="content">
          <div>这是一段插槽文本内容</div>
          <nd-app-button class="btn" @click="closePop" type="primary">控制v-model关闭</nd-app-button>
        </div>
      </template>
    </nd-app-popup>

    <div style="height: 20px;"></div>
    <nd-app-button @click="openPopFun" type="primary">开启函数调用</nd-app-button>

  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';
import {ndAppPopup,ndAppPopupFn} from '../../../../../src/packages/APP/nd-popup/index.js';
import ndAppButton from '../../../../../src/packages/APP/nd-button/src/nd-button.vue';

import iconLf from '../../assets/image/ico-right.png';
export default {
  name: '',
  components: {ndAppPopup, ndAppButton,ndAppPopupFn },
  setup(props, ctx) {
    const data = reactive({
      show: false,
      content:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
    });
    const { proxy } = getCurrentInstance();

    onBeforeMount(() => {});
    onMounted(() => {});

    const openPop = () => {
      data.show = true;
    }

    const openPopFun = () => {
      ndAppPopupFn.show(
        {
          props: {
            content: data.content,
            // imgSrc: new URL('../../assets/image/ico-right.png', import.meta.url).href,
            imgSrc:iconLf,
            confirmButtonStr: '确定按钮',
            cancelButtonStr: '取消按钮',
          },
          confirm: async (res) => {
            console.log('点击了确定1', res);
          },
          cancel: (res) => {
            console.log('点击了取消1', res);
          },
          close: (res) => {
            console.log('关闭触发1', res);
          }
        }
      )
      
    }
    const closePop = () => {
      // data.show = false;
    }

    const close = () => {           // 关闭弹框后触发
      console.log('弹窗关闭');
    }
    const clickCloseIcon = () => {  // 点击关闭按钮后触发
      console.log('点击关闭按钮');
    }

    const cancel = ()=>{
      console.log('点击取消按钮');
    }

    const confirm = ()=>{
      console.log('点击确认按钮');
    }

    const clickSelfClose = () => {
      console.log('点击了自定义关闭按钮');
    }

    const refData = toRefs(data);
    return {
      ...refData,
      openPop,
      closePop,
      close,
      clickCloseIcon,
      clickSelfClose,
      cancel,
      confirm,
      openPopFun
    };
  },
};
</script>

<style scoped>
.content {
  padding: 30px 10px;
}
.btn {
  margin-top: 20px;
}
</style>