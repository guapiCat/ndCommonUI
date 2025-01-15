<template>
<p>图片头像</p>
<nd-avatar imgSrc="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></nd-avatar>
<p>字符头像</p>
<nd-avatar  :isText="true" user="users"></nd-avatar>
<p>图标头像</p>
<nd-avatar :icon="state.value"></nd-avatar>
</template>

<script>
import ndAvatar from '../../../../../src/packages/PC/nd-avatar/src/nd-avatar.vue';
import {ref, toRefs} from "vue";
import { UserFilled } from '@element-plus/icons-vue'

export default {
  name: "",
  components: {ndAvatar},
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