<template>
  <el-button type="primary" @click="state.var0 = true;">不显示关闭按钮</el-button>
  <el-button type="primary" @click="state.var1 = true;">自定义头部</el-button>
  <nd-drawer v-model="state.var0" :direction="state.direction" :show-close="state.showClose"></nd-drawer>
  <nd-drawer v-model="state.var1" :direction="state.direction">
    <template v-slot:header>
      <div>
        <span style="color:red;">我是头部标题</span>
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