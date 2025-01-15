<template>
    <div>
        <nd-app-button @click="openPop" type="primary">打开设置弹层</nd-app-button>
        <nd-app-popup style="max-height: 588px;" v-model="show" @close="close" @clickCloseIcon="clickCloseIcon">
            <template #default>
                <ndSharSetting @confirmShar="confirmShar" :viewConfig="viewConfig">
                    <template #button>
                        <div class="nd-button">
                            自定义内容
                        </div>
                    </template>
                </ndSharSetting>
            </template>
        </nd-app-popup>
    </div>
</template>
  
<script>
import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';
import ndAppPopup from '../../../../../src/packages/APP/nd-popup/src/nd-popup.vue';
import ndAppButton from '../../../../../src/packages/APP/nd-button/src/nd-button.vue';
import ndSharSetting from '../../../../../src/packages/APP/nd-shar-setting/src/nd-shar-setting.vue';

export default {
    name: '',
    components: { ndAppPopup, ndAppButton, ndSharSetting },
    setup(props, ctx) {
        const data = reactive({
            show: false,
            viewConfig: {
                beginTime: "2023-08-17",
                captureImgUrl: "https://zhizaoyunstatic.oss-cn-hangzhou.aliyuncs.com/tuzhitong/PrintScreenImg/IKO3292008988864.jpg",
                modelName: '施天宇总装图',
                typeImgSrc: '/images/fileType/dwg.png',
                size: '23M'
            }
        });
        const { proxy } = getCurrentInstance();

        onBeforeMount(() => { });
        onMounted(() => { });

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

        const refData = toRefs(data);
        return {
            ...refData,
            openPop,
            closePop,
            close,
            clickCloseIcon,
            confirmShar
        };
    },
};
</script>
  
<style scoped>
.content {
    padding: 30px 10px;
}
.nd-button {
    height: 50px;
    width: calc(100% - 32px);
    margin: 16px auto;
    border-radius: 8px;
    background: rgba(255, 77, 79, 0.1);
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    font-weight: normal;
    color: #FF4D4F;
}
.btn {
    margin-top: 20px;
}
</style>