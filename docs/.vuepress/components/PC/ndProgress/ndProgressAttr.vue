<template>
  <p>宽度控制</p>
  <nd-progress :percentage="50" :stroke-width="15"></nd-progress>

  <div class="box">
    <div>
      <p>环形</p>
      <nd-progress
        type="circle"
        :percentage="15"
        :stroke-width="20"
        status="success"
      ></nd-progress>
    </div>
    <div>
      <p>仪表盘</p>
      <nd-progress
        type="dashboard"
        :percentage="70"
        :stroke-width="10"
        status="exception"
      ></nd-progress>
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
