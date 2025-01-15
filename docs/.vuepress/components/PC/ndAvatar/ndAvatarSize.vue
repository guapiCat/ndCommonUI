<template>
<p>小尺寸：24px</p>
 <nd-avatar :icon="state.value" :size='24'/>
<p>中尺寸:32px</p>
 <nd-avatar :icon="state.value" :size='32'/>
<p>大尺寸：40px</p>
 <nd-avatar :icon="state.value" :size='40'/>
 <p>超大尺寸：56px</p>
 <nd-avatar :icon="state.value" :size='56'/>

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