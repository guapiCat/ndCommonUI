<template>
  <van-popup class="nd-popup" v-model:show="showPop" v-on="$attrs" v-bind="$attrs"
    :position="position" :closeable="closeable" :round="round" :style="style" 
    @close="close" @clickCloseIcon="clickCloseIcon" :close-on-click-overlay="closeOnClickOverlay">

    <!-- 默认插槽 -->
    <template #default>

      <!-- 指令展示 -->
      <div class="nd-popup-default" v-if="defaultShow">
        <div class="nd-popup-title"></div>
        <img v-if="imgSrc != ''" class="nd-popup-img" :src= imgSrc>
        <div v-if="content != ''" class="nd-popup-content">{{ content }}</div>
        <div class="nd-popup-bottom-button">
          <div v-if="cancelButtonStr != ''" class="nd-popup-cancel-button nd-popup-button" @click="cancelButtonClick" :style="{ 'color': cancelTextColor, 'background-color': cancelBackColor }">{{ cancelButtonStr }}</div>
          <div v-if="confirmButtonStr != ''" class="nd-popup-confirm-button nd-popup-button" @click="confirmButtonClick" :style="{ 'color': confirmTextColor, 'background-color': confirmBackColor }">{{ confirmButtonStr }}</div>
        </div>
      </div>

      <!-- 非指令默认插槽 -->
      <slot name="default" v-else></slot>
      <div class="self_icon" v-show="showSelfCloseIcon" @click.stop="clickSelfClose"></div>
    </template>
    

    <!-- overlay插槽 -->
    <template #overlayContent v-if="slots.overlayContent">
      <slot name="overlayContent"></slot>
    </template>


  </van-popup>
</template>

<script>
import { reactive, toRefs, watch, useSlots,onMounted } from 'vue';

export default {
  emits: ['update:modelValue', 'close', 'clickCloseIcon','confirm','cancel', 'clickSelfCloseIcon'],
  props: {
    modelValue: {         // v-model绑定，控制开关是否开启
      type: [Boolean, Object],
      default: false,
    },
    defaultShow: {        // 设置是否默认显示
      type: Boolean,
      default: false,
    },
    title:{               // 标题
      type: String,
      default: ''
    },
    imgSrc:{              // 图片地址
      type: String,
      default: ''
    },
    content:{              // 描述文本内容
      type: String,
      default: ''
    },
    confirmButtonStr: {  // 确认按钮文本
      type: String,
      default: ''
    },
    confirmBackColor: {  // 确认按钮颜色
      type: String,
      default: '#1780E3'
    },
    confirmTextColor: {  // 确认按钮文本颜色
      type: String,
      default: '#ffffff'
    },
    cancelButtonStr: {  // 取消按钮文本
      type: String,
      default: ''
    },
    cancelBackColor: {  // 取消按钮颜色
      type: String,
      default: '#C8C9CC'
    },
    cancelTextColor: {  // 取消按钮文本颜色
      type: String,
      default: '#ffffff'
    },
    position: {           // 弹出的方向
      type: String,
      default: 'bottom'
    },
    closeable: {          // 是否有关闭按钮
      type: Boolean,
      default: true,
    },
    round: {              // 是否是圆角
      type: Boolean,
      default: true,
    },
    style: {              // style样式
      type: Object,
      default: { }
    },
    confirm: {               // 确认
      type: Function,
      default: () => {}
    },
    cancel: {             // 取消
      type: Function,
      default: () => {}
    },
    close: {             // 关闭
      type: Function,
      default: () => {}
    },
    showSelfCloseIcon: {    // 自定义关闭按钮
      type: Boolean,
      default: false,
    },
    clickCloseIcon: {             // 关闭
      type: Function,
      default: () => {}
    },
    closeOnClickOverlay: {
      // 是否可以点击遮罩层关闭弹窗 -- 默认为false
      type: Boolean,
      default: false
    },
  },
  setup(props, ctx) {
    const data = reactive({
      showPop: props.modelValue,
      imgSrc1:""
    });
    const slots = useSlots()

    onMounted(() => {
      if(props.defaultShow) {
        data.showPop = true;
      }
    })

    // 同步v-model
    watch(() => data.showPop, () => {
      ctx.emit('update:modelValue', data.showPop)
    })
    watch(() => props.modelValue, (val) => {
      data.showPop = val;
    })
    // 关闭弹框
    const close = () => {       
      ctx.emit('close');
      props.close();
    }
    // 点击关闭按钮后触发
    const clickCloseIcon = () => {
      ctx.emit('clickCloseIcon');
      props.clickCloseIcon();
    }
    // 点击自定义关闭按钮触发
    const clickSelfClose = () => {
      ctx.emit('clickSelfCloseIcon');
    }

    const confirmButtonClick = () =>{
      console.log("confirmButtonClick")
      ctx.emit('confirm');
      props.confirm();
      data.showPop = false;
    }

    const cancelButtonClick = () => {
      data.showPop = false;
      ctx.emit('cancel');
      props.cancel();
    }


    const refData = toRefs(data);
    return {
      ...refData,
      slots,
      close,
      clickCloseIcon,
      clickSelfClose,
      confirmButtonClick,
      cancelButtonClick
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../common.scss';
.nd-popup-default{
  text-align: center;
}
.nd-popup-default .nd-popup-title{
  height: 24px;
}

.nd-popup-default .nd-popup-img{
  width: 64px;
  height: 64px;
  margin-top: 24px;
}
.nd-popup-default .nd-popup-content{
  font-size: 14px;
  padding: 24px 20px 8px 20px;
}

.nd-popup-default .nd-popup-bottom-button{
  padding-left: 16px;
  display: flex;
  padding-right: 16px;
  padding-top: 16px;
}

.nd-popup-default .nd-popup-button{
  float: right;
  flex: 1;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 16px;
}

.nd-popup-default .nd-popup-cancel-button{
  margin-right: 16px;
}
// .nd-popup-default .nd-popup-confirm-button{
//   margin-left: 16px;
// }

.nd-popup .van-popup__close-icon {
  position: absolute !important;
}


.self_icon {
  position: absolute;
  color: #c8c9cc;
  top: 12px;
  right: 12px;
  width: 20px;
  height: 20px;  
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAUpJREFUWEftlssNwjAMhp2ySBgBIYR6g01gFCaBTYBTeKoj0EEgQSlUVGmS2k6lXui1rf8vfvyxgIEfMbA+/AG8GVCqkLY0eT4p+yjRJ95T5vns4MZrAdiPRfZ6AEApQOzm8+kmBUKp60JkYm9jGG2WLkQMwP6TBNEU/wCMxm5W/SW43FfCmO335CyItnj79DZ+cApUAgRWPApgX3IgKOKdAFQIqjgKAAvBEUcDdEFwxUkAIQit9bGe89Csx3yEfBe4jQkAlWtyxMkZqIUcCLY4H6BhrylmxQJwG65RX5ZjknrA1+0wymSKbaMBYqPGccw6cygAzJxzIToBMOKB6UD1RBSAIs6FCF/Hzqj5tpmQw1HKEdgJf2sU1+GwEF6A0/lmUuw1VA6jzZq0E1LSjikHfidUhexrJa9u0cia3zmGsau0j3d/gMEz8Aa0TFAwe7XxbAAAAABJRU5ErkJggg==');
}

</style>