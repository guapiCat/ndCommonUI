<template>
  <div ref="timeLine" class="nd-time-line-2">
    <slot></slot>
  </div>
</template>
  
<script>
import { ref, reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance, nextTick, onUpdated } from 'vue';
export default {
  name: 'ndTimeLineGroup2',
  props: {
  },
  setup(props, {$ref}) {
    const data = reactive({

    });
    const { proxy, ctx } = getCurrentInstance();
    const updateDom = () => {
      nextTick(() => {
        // 计算宽度
        let items = ctx.$refs.timeLine.getElementsByClassName('time-line-time')
        let max = 0
        Array.prototype.forEach.call(items, function (item, index) {
          max = item.offsetWidth > max ? item.offsetWidth : max
        })
        Array.prototype.forEach.call(items, function (item) {
          item.style.width = `${max}px`
        })
        let items2 = ctx.$refs.timeLine.getElementsByClassName('nd-time-line-item-2')
        Array.prototype.forEach.call(items2, function (item, index) {
          // 获取第一个和最后一个, 去除多余线条
          if (index == 0) {
            item.className = 'nd-time-line-item-2 nd-time-line-first'
          }
          if (index == items2.length - 1) {
            item.className = 'nd-time-line-item-2 nd-time-line-last'
          }
        })
      })
    }
    onBeforeMount(() => {
    });
    onMounted(() => {
      updateDom()
    });
    onUpdated(() => {
      updateDom()
    })

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>
  
<style scoped lang="scss">
.nd-time-title-2 {
  font-weight: 600;
  margin-bottom: 10px;
}

li {
  /* 去除li标签的默认样式 */
  list-style-type: none !important;
}
</style>