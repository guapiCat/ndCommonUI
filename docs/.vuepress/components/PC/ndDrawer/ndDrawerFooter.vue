<template>
  <el-button type="primary" @click="state.var0 = true;">自定义底部文本</el-button>
  <el-button type="primary" @click="state.var1 = true;">插槽底部</el-button>
  <nd-drawer v-model="state.var0" :direction="state.direction" left-text="左侧按钮" right-text="右侧按钮"></nd-drawer>
  <nd-drawer v-model="state.var1" :direction="state.direction">
    <template v-slot:footer>
      <div>
       <el-button type="warning">里面的按钮外部自己控制</el-button>
      </div>
    </template>
  </nd-drawer>
</template>

<script>
import ndDrawer from '../../../../../src/packages/PC/nd-drawer/src/nd-drawer.vue';
import {ref, toRefs} from "vue";

export default {
  name: "",
  components: {ndDrawer},
  setup() {
    const state = ref({
      var0: false,
      var1: false,
      direction: 'rtl',
      showClose: false,
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