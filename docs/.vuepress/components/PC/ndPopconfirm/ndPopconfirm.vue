<template>
  <div>
    <nd-popconfirm title="这是一段内容，确定要删除吗?" @confirm="confirm" @cancel="cancel">
        <span class="del-btn">删除</span>
    </nd-popconfirm>

    <br>
    <div class="title">带图标的气泡确认框:</div>

    <nd-popconfirm title="这是一段内容，确定要删除吗?" :showIcon="true">
        <span class="del-btn">删除</span>
    </nd-popconfirm>

    <div class="title">带描述的气泡确认框:</div>

    <nd-popconfirm title="这是一段内容，确定要删除吗?" :showIcon="true" content="带描述的气泡确认框在主要说明文字之外增加了操作相关的详细描述">
        <span class="del-btn">删除</span>
    </nd-popconfirm>

    <div class="title">自定义宽度的气泡确认框:</div>

    <nd-popconfirm title="这是一段内容，确定要删除吗?" popWidth="400px" :showIcon="true" content="带描述的气泡确认框在主要说明文字之外增加了操作相关的详细描述">
        <span class="del-btn">删除</span>
    </nd-popconfirm>

    <br>
    <div class="title">气泡确认框的位置:</div>

    <nd-popconfirm title="这是一段内容，确定要删除吗?" placement="top-start">
        <span class="del-btn">删除(上方靠右)</span>
    </nd-popconfirm>
  </div>
</template>

<script>

import { reactive, toRefs, onBeforeMount, onMounted } from 'vue';
import ndPopconfirm from '../../../../../src/packages/PC/nd-popconfirm/src/nd-popconfirm.vue';


export default {
  name: '',
  components: { ndPopconfirm },
  setup() {

    const confirm = () => {
        console.log('confirm')
    }
    const cancel = () => {
        console.log('cancel')
    }
    onBeforeMount(() => {});
    onMounted(() => {});

    return {
      confirm,
      cancel
    };
    
  },
};
</script>

<style scoped>
.del-btn {
    color: red;
    cursor: pointer;
    user-select: none;
}
.title {
    height: 64px;
    line-height: 64px;
    font-size: 18px;
    font-weight: bold;
}
</style>