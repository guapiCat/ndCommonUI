<template>
  <van-popover v-bind="$attrs" :actions="actions" >

    <!-- 自定义内容 -->
    <template v-if="hasActions && !type" #default>
      <slot name="default"></slot>
    </template>

    <!-- 触发开关 -->
    <template #reference>
      <slot name="reference"></slot>
    </template>

    <!-- 扩展类型 sort：文本+图片+文本 -->
    <template v-if="type == 'sort'" #default>
      <div class="pop-sort">
        <div class="pop-sort-item" v-for="item of actions" @click.stop="selectClick(item)">
          <div class="pop-item-lf">
            <img v-if="item.leftImg" :src="item.leftImg" alt="">
          </div>
          <div class="pop-item-txt">{{ item.text }}</div>
          <div class="pop-item-rt">
            <img v-if="item.rightImg" :src="item.rightImg" alt="">
          </div>
        </div>
      </div>
    </template>

  </van-popover>
</template>
<script>
import { reactive, toRefs, ref } from 'vue';

export default {
  props: {
    actions: {      // 信息。常规
      type: Array, 
      default: () => [] 
    },
    type: {         // 类型 图+文+图：sort
      type: String,
      default: ''
    },
    list: {         // 自定义信息list与type配合使用
      type: Array, 
      default: [],
    }
  },
  emits: ["update:modelValue", 'select'],
  setup(props, ctx ) {
    const data = reactive({
      hasActions: props.actions.length,
    })
    const hasActions = ref(false);
    hasActions.value = !props.actions.length

    const selectClick = (item) => {
      ctx.emit('select', item);
    }

    const refData = toRefs(data);
    return {
      ...refData,
      hasActions,
      selectClick,
    };
  },
  
};
</script>

<style scoped lang="scss">
@import '../../common.scss';

/** type=sort类型样式 */
.pop-sort-item {
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 14px;
  padding: 12px 8px;
  height: 48px;
  box-sizing: border-box;
  border-bottom: 1px solid #F7F7F7;
  .pop-item-txt {
    margin: 0 8px;
  }
  .pop-item-lf, .pop-item-rt, img {
    width: 24px;
    height: 24px;
  }
}
</style>