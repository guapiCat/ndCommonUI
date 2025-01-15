<template>
  <p>红点样式徽标</p>
  <nd-badge is-dot>
    <el-button>comments</el-button>
  </nd-badge>
  <p>徽标数</p>
  <nd-badge :value="200">
    <el-button>comments</el-button>
  </nd-badge>
  <p>自定义内容</p>
  <nd-badge value="自定义">
    <el-button>comments</el-button>
  </nd-badge>
</template>

<script>
import ndBadge from '../../../../../src/packages/PC/nd-badge/src/nd-badge.vue';
import {ref, toRefs} from "vue";
import { UserFilled } from '@element-plus/icons-vue'

export default {
  name: "",
  components: {ndBadge},
  setup() {
    const state = ref({
      value: UserFilled
    })
   
    return {
      state
      
    }
  }
}
</script>

<style scoped>

p{
   margin-bottom: 20px;
   margin-top: 20px;

}


</style>