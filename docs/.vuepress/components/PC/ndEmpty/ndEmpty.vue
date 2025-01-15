<template>
  <nd-empty text="暂无查询数据">
    <template v-slot>
      <p>我是自定义内容描述，可以是图片等...</p>
    </template>
  </nd-empty>
</template>

<script>
import ndEmpty from '../../../../../src/packages/PC/nd-empty/src/nd-empty.vue';
import {ref, toRefs} from "vue";

export default {
  name: "",
  components: {ndEmpty},
  setup() {
    const state = ref({
      var0: ''
    })
    const change = (e) => {
      console.log(e)
    }
    return {
      state,
      change,
    }
  }
}
</script>

<style scoped>

</style>