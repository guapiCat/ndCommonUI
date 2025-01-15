<template>
    <div>
      <nd-app-button @click="openPop" type="primary">打开设置弹层</nd-app-button>
      <nd-app-popup :style="{height: testHeight + 'px'}" v-model="show" @close="close" @clickCloseIcon="clickCloseIcon">
        <template #default>
            <ndViewerSharing @confirmShar="confirmShar" @popChange="popChange" :shareConfig="shareConfig"/>
        </template>
      </nd-app-popup>
      <div id="test"></div>
    </div>
  </template>
  
  <script>
  import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';
  import ndAppPopup from '../../../../../src/packages/APP/nd-popup/src/nd-popup.vue';
  import ndAppButton from '../../../../../src/packages/APP/nd-button/src/nd-button.vue';
  import ndViewerSharing from '../../../../../src/packages/APP/nd-viewer-sharing/src/nd-viewer-sharing.vue';
  
  export default {
    name: '',
    components: { ndAppPopup, ndAppButton, ndViewerSharing},
    setup(props, ctx) {
      const data = reactive({
        show: false,
        shareConfig: {
            validdate: 0,
            maxVisitNum: 0,
            isPrivate: 0,
            modelSettings: {
                isShowMeasure: false,
                isShowPMI: true,
                isShowStructureTree: true,
                isShowStructureTreeProperty: false,
                isAllowDownload: true
            }
        },
        testHeight: 580,
      });
      const { proxy } = getCurrentInstance();
  
      onBeforeMount(() => {});
      onMounted(() => {});
  
      const openPop = () => {
        data.show = true;
      }
      const closePop = () => {
        data.show = false;
      }
      
      const confirmShar = (shareConfig, index) => {
        console.log('shareConfig:', shareConfig);
        console.log('index:', index);
      }

      const close = () => {           // 关闭弹框后触发
        console.log('弹窗关闭');
      }
      const clickCloseIcon = () => {  // 点击关闭按钮后触发
        console.log('点击关闭按钮');
      }

      const popChange = (bool) => {       // pop状态变化
        console.log('bool====', bool);
        data.show = !bool;
      }
      
      const refData = toRefs(data);
      return {
        ...refData,
        openPop,
        closePop,
        close,
        clickCloseIcon,
        confirmShar,
        popChange
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