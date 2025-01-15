<template>
   <nd-collapse v-model="state.activeNames" @handleChange="handleChange" :list="state.list">
       <template #title>
           <el-tooltip
            class="box-item"
            effect="dark"
            content="提示文字"
            placement="bottom"
          >
          <img src="../../../../../src/views/vPc/assets/logo.png" alt="" class="icon">
      </el-tooltip>
      </template>
   </nd-collapse>
</template>

<script>
import ndCollapse from '../../../../../src/packages/PC/nd-collapse/src/nd-collapse.vue';
import {ref, toRefs} from "vue";

export default {
  name: "",
  components: {ndCollapse},
  setup() {
    const state = ref({
      list: [{
          title:"自定义标题",
          content:"Operation feedback: enable the users to clearly perceive theiroperations by style updates and interactive effects;",
          showImg:true,
          imgTip:"提示文字",
          slotName:"title"
      },
      {
          title:"自定义标题",
          content:"Operation feedback: enable the users to clearly perceive theiroperations by style updates and interactive effects;",
          showImg:true,
          imgTip:"提示文字"
      },
      {
          title:"自定义标题",
          content:"Operation feedback: enable the users to clearly perceive theiroperations by style updates and interactive effects;",
          showImg:true,
          imgTip:"提示文字"
      }
      ],
      activeNames:"1"
    })
    const handleChange = (e) => {     // page change
     
    }
   
    return {
      state,
      handleChange
      
    }
  }
}
</script>

<style scoped>
.icon{
  width: 20px;
  margin-left:5px
}

</style>