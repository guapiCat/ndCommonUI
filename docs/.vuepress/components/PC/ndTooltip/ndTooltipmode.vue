<template>
    <p class="title">深色模式</p>
    <nd-tooltip placement="top" effect="dark">
       <el-button>top</el-button>
    </nd-tooltip>
     <p class="title">白色</p>
    <nd-tooltip placement="bottom" effect="light">
       <el-button>bottom</el-button>
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