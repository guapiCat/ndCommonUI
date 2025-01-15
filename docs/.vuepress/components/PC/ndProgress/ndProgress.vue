<template>
  <p>基础进度条</p>
  <nd-progress :percentage="50" ></nd-progress>

  <p>百分比进度条</p>
  <nd-progress
    :percentage="36"
    :text-inside="true"
    :stroke-width="24"
  ></nd-progress>

  <p>栅格进度条</p>
  <nd-progress
    :percentage="36"
    :stroke-width="20"
    :isGrid="true"
  ></nd-progress>

  <div class="box">
    <div>
      <p>环形进度条</p>
      <nd-progress type="circle" :percentage="15"></nd-progress>
    </div>
    <div>
      <p>仪表盘模式</p>
      <nd-progress type="dashboard" :percentage="70"></nd-progress>
    </div>
  </div>
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
