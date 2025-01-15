<template>
  <p>文字内显</p>
  <nd-progress
    :percentage="50"
    :stroke-width="24"
    :text-inside="true"
  ></nd-progress>

  <p>自定义文字内容</p>
  <nd-progress :percentage="50" :stroke-width="15" status="warning">
    <el-button text>NewDi</el-button>
  </nd-progress>
  <p></p>
  <nd-progress :percentage="50" :stroke-width="40" :text-inside="true">
    NewDi
  </nd-progress>
  <p></p>
  <nd-progress type="circle" :percentage="15" :stroke-width="20">
    <el-button text>NewDi</el-button>
  </nd-progress>
</template>
<script>
import ndProgress from "../../../../../src/packages/PC/nd-progress/src/nd-progress.vue";
import { reactive, toRefs, onMounted } from "vue";
export default {
  components: {
    ndProgress,
  },
  setup() {
    const data = reactive({});
    onMounted(() => {});
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>
<style  lang='less' scoped>
h6 {
  margin-bottom: 20px;
}
p {
  font-size: 15px;
  margin: 20px 0;
}
.box {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  div {
    p {
      text-align: center;
    }
  }
}
</style>
