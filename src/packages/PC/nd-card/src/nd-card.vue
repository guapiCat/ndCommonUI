<template>
  <div :class="`nd-card ${shadow && 'has-shadow'} ${propClass}`">
    <div :class="`nd-card__header ${!(!$slots.title && !$slots.button) && 'nd_card__header_2'}`" v-if="($slots.header || title) || $slots.title || $slots.button">
      <slot name="header" v-if="!$slots.title && !$slots.button">
        <div class="nd-card__title"> {{ title }}</div>
        <div
            class="nd-card__operate-button"
            v-if="operateButtonText"
            @click.stop="operateButtonClickHandle"
        >
          {{ operateButtonText }}
        </div>
      </slot>
      <slot name="header" v-else>
        <div class="top_content">
          <div class="top_content_title" :style="`border-bottom:${leftTitle.includes('px') ? leftTitle : '2px solid '+leftTitle}`">
            <slot name="title">
          
            </slot>
          </div>
        </div>
        <div class="top_content_button">
          <slot name="button"></slot>
        </div>
      </slot>
    </div>
    <div class="nd-card__body" :style="{paddingBottom:footer?0:'initial'}">
      <slot>
        <img class="nd-card__image" v-if="image" :src="image">
        <div class="nd-card__subtitle" v-if="subtitle">{{ subtitle }}</div>
        <div class="nd-card__content" v-if="content"> {{ content }}</div>
      </slot>
    </div>
    <div class="nd-card__footer">
      <slot name="footer">
        <div class="nd-card__footer-content" :style="{paddingTop:footer?'16px':0}">
          <div class="nd-card__footer-avatar">
            <img :src="footer.avatar" alt="" v-if="footer&&footer.avatar">
            <div v-if="footer&&footer.name" class="nd-card__footer-avatar-name">{{ footer.name }}</div>
          </div>

          <ul v-if="footer&&footer.buttonIcons.length" class="nd-card__footer-icons">
            <li
                v-for="(item,index) in footer.buttonIcons"
                :key="index"
                class="nd-card__footer-icon"
                @click.stop="footerIconClickHandle(item.event)"
            >
              <img :src="item.src" alt="">
            </li>
          </ul>
        </div>
      </slot>
    </div>
  </div>
</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'nd-card',
  props: {
    propClass: {
      // 自定义类名
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    shadow: {
      type: Boolean,
      default: true
    },
    content: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    operateButtonText: {
      type: String,
      default: ''
    },
    footer: {
      type: [Object, Boolean],
      default: false,
    },
    leftTitle: {
      type:String,
      default: '#869BFC'
    }
  },
  emits: ['operateButtonClick'],
  setup(props, {emit, slots}) {

    // 操作按钮点击
    const operateButtonClickHandle = () => {
      emit('operateButtonClick')
    }

    // 底部的图标点击事件
    const footerIconClickHandle = (event) => {
      emit(event)
    }
    return {
      operateButtonClickHandle,
      footerIconClickHandle
    }
  }

})

</script>
<style lang="less" scoped>
@import "../style/nd-card";

</style>
<style>
li{
  /* 去除li标签的默认样式 */
  list-style-type: none!important;
}
</style>
