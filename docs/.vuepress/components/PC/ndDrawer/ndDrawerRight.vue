<template>
  <el-button type="primary" @click="state.direction='ttb';state.var0 = true;">顶部打开</el-button>
  <el-button type="primary" @click="state.direction='rtl';state.var0 = true;">右侧打开</el-button>
  <el-button type="primary" @click="state.direction='btt';state.var0 = true;">底部打开</el-button>
  <el-button type="primary" @click="state.direction='ltr';state.var0 = true;">左部打开</el-button>
  <nd-drawer v-model="state.var0" :direction="state.direction"></nd-drawer>
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
      direction: 'rtl'
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