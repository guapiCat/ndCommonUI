<template>
    <p class="title">顶部出现</p>
    <nd-tooltip placement="top">
       <el-button>top</el-button>
    </nd-tooltip>
     <p class="title">底部出现</p>
    <nd-tooltip placement="bottom">
       <el-button>bottom</el-button>
    </nd-tooltip>
       <p class="title">右部出现</p>
    <nd-tooltip placement="right">
       <el-button>right</el-button>
    </nd-tooltip>
         <p class="title">左部出现</p>
    <nd-tooltip placement="left">
       <el-button>left</el-button>
    </nd-tooltip>
    <p class="title">内容自定义</p>
    <nd-tooltip placement="left" content="内容自定义">
       <el-button>left</el-button>
    </nd-tooltip>
    
</template>

<script>
import ndTooltip from '../../../../../src/packages/PC/nd-tooltip/src/nd-tooltip.vue';
import {ref, toRefs} from "vue";

export default {
  name: "",
  components: {ndTooltip},
  setup() {
    const state = ref({
      value: ''
    })
   
    return {
      state
      
    }
  }
}
</script>

<style scoped>
.title{
  margin-bottom:20px;
  margin-top:20px
}

</style>