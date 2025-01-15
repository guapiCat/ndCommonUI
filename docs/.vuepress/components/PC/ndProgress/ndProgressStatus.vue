<template>
  <p>线性进度条</p>

  <p>Processing</p>
  <nd-progress :percentage="15"></nd-progress>

  <p>Success</p>
  <nd-progress :percentage="100" status="success"></nd-progress>

  <p>栅格进度条</p>

  <p>Warning</p>
  <nd-progress :percentage="50" :stroke-width="10" status="warning" :isGrid="true"></nd-progress>

  <p>Error</p>
  <nd-progress :percentage="75" :stroke-width="24" status="exception" :isGrid="true"></nd-progress>

  <p>环形进度条</p>

  <div class="box">
    <div>
      <p>Processing</p>
      <nd-progress :percentage="15" type="circle"></nd-progress>
    </div>

    <div>
      <p>Success</p>
      <nd-progress
        :percentage="100"
        type="circle"
        status="success"
      ></nd-progress>
    </div>

    <div>
      <p>Warning</p>
      <nd-progress
        :percentage="50"
        type="circle"
        status="warning"
      ></nd-progress>
    </div>

    <div>
      <p>Error</p>
      <nd-progress
        :percentage="75"
        type="circle"
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
  div {
    p {
      text-align: center;
    }
  }
}
</style>
