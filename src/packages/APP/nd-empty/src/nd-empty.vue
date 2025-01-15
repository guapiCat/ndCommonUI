<template>
  <div class="nd-empty" :style="{'padding-top': top}">
    <div class="header" v-if="imgUrl">
      <img class="header-img" :style="{ 'width': imgWidth }" :src="imgUrl" alt="">
    </div>

    <div class="content" v-if="contentText">
      <p class="content-text">{{ contentText }}</p>
    </div>
    <slot v-if="!contentText && slotContent" name="content"></slot>

    <div class="foot" v-if="footText || slotFoot">
      <div class="foot-text" :style="{'color': footTextColor, 'border-radius': footRadius, 'background': footBackground, 'border': footBorder}"
        v-if="!slotFoot">
        {{ footText }}
      </div>
      <slot v-if="slotFoot" name="foot"></slot>
    </div>

  </div>
</template>

<script>
import { reactive, toRefs, useSlots } from 'vue';

export default {
  props: {
    top: {            // 距离顶部多少
      type: String,
      default: '30%'
    },
    imgUrl: {         // 暂无数据图片
      type: String,
      default: '160px'
    },
    imgWidth: {         // 暂无数据图片
      type: String,
      default: ''
    },
    footText: {       // 底部按钮文本
      type: [String, Number],
      default: ''
    },
    contentText: {    // 内容区域文本
      type: [String, Number],
      default: ''
    },
    footRadius: {     // 底部按钮圆角
      type: String,
      default: '4px',
      require: false,
    },
    footTextColor: {  // 底部文本颜色
      type: [String, Number],
      default: 'rgb(51, 51, 51)'
    },
    footBackground: { // 底部背景色
      type: String,
      default: '#ffffff'
    },
    footBorder: {     // 底部按钮边框
      type: String,
      default: '1px solid rgb(198, 198, 200)'
    },
  },
  setup() {
    const data = reactive({});

    const slotFoot = !!useSlots().foot;         // 页脚插槽
    const slotContent = !!useSlots().content;         // 页脚插槽

    const refData = toRefs(data);
    return {
      ...refData,
      slotFoot,
      slotContent,
    };
  },
};
</script>

<style scoped>
.foot-text {
  width: 88px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  margin: 0 auto;
  cursor: pointer;
}
.content-text {
  color: rgb(150, 151, 153);
  width: 80%;
  margin: 16px auto;
  text-align: center;
  font-size: 14px;
}
.header-img {
  margin: 0 auto;
  display: block;
}
</style>