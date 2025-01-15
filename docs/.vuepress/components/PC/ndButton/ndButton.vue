<template>
<p>基础按钮</p>

  <nd-button type="primary" content="主要按钮"></nd-button>
  <nd-button type="info" content="次要按钮" ></nd-button>
  <nd-button type="info" content="虚线按钮" :dot="true"></nd-button>
  <nd-button type="primary"  content="线框按钮" plain></nd-button>
  <nd-button   content="文字按钮" text></nd-button>

<p>带图标的按钮</p>

    <nd-button type="primary" :icon="state.Edit" content="Edit"></nd-button>
    <nd-button type="primary" :icon="state.Share" content="Share"></nd-button>
    <nd-button type="primary" :icon="state.Delete" content="Delete"></nd-button>
    <nd-button type="primary" :icon="state.Search" content="Search"></nd-button>

<p>组件状态</p>

  <nd-button type="primary"  content="主要按钮"></nd-button>
  <nd-button type="success"  content="成功按钮"></nd-button>
  <nd-button type="warning"  content="警告按钮"></nd-button>
  <nd-button type="danger"  content="错误按钮"></nd-button>
  <nd-button type="info" content="次要按钮" ></nd-button>
  <nd-button   content="文字按钮" text></nd-button>

  <p>禁止</p>

  <nd-button type="primary"  content="主要按钮" disabled></nd-button>
  <nd-button type="success"  content="成功按钮" disabled></nd-button>
  <nd-button type="warning"  content="警告按钮" disabled></nd-button>
  <nd-button type="danger"  content="错误按钮" disabled></nd-button>
  <nd-button type="info" content="次要按钮" disabled></nd-button>
  <nd-button   content="文字按钮" text disabled></nd-button>

  <p>按钮支持插槽</p>
  <nd-button type="primary">
    <nd-button type="warning" content="文字按钮" size="small"></nd-button>
  </nd-button>

  <p>组件大小</p>

  <nd-button type="primary"  content="小号按钮" size="small"></nd-button>
  <nd-button type="primary"  content="中号按钮" size="default"></nd-button>
  <nd-button type="primary"  content="大号按钮" size="large" @click="clickBig"></nd-button>
  
  <nd-button type="primary" color="#FF4D4F" size="default">品牌色#FF4D4F</nd-button>
  

</template>

<script>
import ndButton from '../../../../../src/packages/PC/nd-button/src/nd-button.vue';
// import ndMessage from '../../../../../src/packages/PC/nd-message';
import {ref, toRefs,reactive} from "vue";
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'

export default {
  name: "",
  components: {ndButton},
  emits: ['click'],
  setup(props, { emit, slots }) {
    const state = reactive({
      Edit: Edit,
      Share: Share,
      Delete: Delete,
      Search: Search,
    })

    const clickBig = () => {
      // ndMessage.success("hahahahah")
      emit('click');
    }
   
    return {
      state,
      clickBig,
    }
  }
}
</script>

<style scoped>

.nd-button{
  display: inline-block;
  margin: 10px;
}


</style>