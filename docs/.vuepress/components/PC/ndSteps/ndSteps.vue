<template>
  <div>
    <span>设置步骤结束状态： </span>
    <el-button class="nd-btn2" @click="switchFinish('wait')">wait</el-button>
    <el-button class="nd-btn2" @click="switchFinish('process')">process</el-button>
    <el-button class="nd-btn2" @click="switchFinish('finish')">finish</el-button>
    <el-button class="nd-btn2" @click="switchFinish('error')">error</el-button>
    <el-button class="nd-btn2" @click="switchFinish('success')">success</el-button>

    <h5>基础步骤条</h5>
    <nd-steps class="nd-steps" :active="active" :stepList="list1" :finish-status="finishStatus" :process-status="nowStatus" :align-center="true"></nd-steps>
    <el-button class="nd-btn" @click="stepClick1">step+1</el-button>
    <br />
    <span>设置当前步骤状态： </span>
    <el-button class="nd-btn2" @click="switchNow('wait')">wait</el-button>
    <el-button class="nd-btn2" @click="switchNow('process')">process</el-button>
    <el-button class="nd-btn2" @click="switchNow('finish')">finish</el-button>
    <el-button class="nd-btn2" @click="switchNow('error')">error</el-button>
    <el-button class="nd-btn2" @click="switchNow('success')">success</el-button>

    <h5>竖形步骤条</h5>
    <nd-steps class="nd-steps2" :active="active" :stepList="list1" :finish-status="finishStatus" direction="vertical"></nd-steps>
    <el-button class="nd-btn" @click="stepClick1">step+1</el-button>

    <h5>简易步骤条</h5>
    <nd-steps class="nd-steps" :active="active2" :stepList="list2" :finish-status="finishStatus" :align-center="true" :simple="true" :space="200"></nd-steps>
    <el-button class="nd-btn" @click="stepClick2">step+1</el-button>

    <h5>插槽类步骤条，可插入图标，标题，描述</h5>
    <nd-steps class="nd-steps" :active="active3" :stepList="list3" :finish-status="finishStatus" :align-center="true" :slotIcon="true" :slotTitle="true" :slotDescript="true">
      <template #icon="scope">
        <div>{{scope.index + 'solt'}}</div>
      </template>
      <template #title="scope">
        <div>{{scope.title + 'solt'}}</div>
      </template>
      <template #description="scope">
        <div>{{scope.description + 'solt'}}</div>
      </template>
    </nd-steps>
    <el-button class="nd-btn" @click="stepClick3">step+1</el-button>


  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue';
import ndSteps from '../../../../../src/packages/PC/nd-steps';

export default {
  name: '',
  components: {
    ndSteps,
  },
  setup() {
    const data = reactive({
      finishStatus: 'finish',
      nowStatus: 'wait',

      active: 1,
      list1: [
        { title: '第一步' },
        { title: '第二步' },
        { title: '第三步', description: '这是自定义的描述' },
      ],

      active2: 1,
      list2: [
        { title: '第一步' },
        { title: '第二步' },
        { title: '第三步多一点文案', description: '这是自定义的描述' },
      ],

      active3: 1,
      list3: [
        { title: '第一步', description: '这是自定义的描述' },
        { title: '第二步', description: '这是自定义的描述' },
        { title: '第三步多一点文案', description: '这是自定义的描述' },
      ],
    });

    onBeforeMount(() => {});
    onMounted(() => {});

    const stepClick1 = () => {
      data.active += 1;
      data.active = data.active % (data.list1.length + 1);
    }
    const stepClick2 = () => {
      data.active2 += 1;
      data.active2 = data.active2 % (data.list2.length + 1);
    }
    const stepClick3 = () => {
      data.active3 += 1;
      data.active3 = data.active3 % (data.list3.length + 1);
    }

    const switchFinish = (val) => {     // 切换状态
      data.finishStatus = val;
    }
    const switchNow = (val) => {        // 切换状态
      data.nowStatus = val;
    }

    const refData = toRefs(data);
    return {
      ...refData,
      stepClick1,
      stepClick2,
      stepClick3,
      switchFinish,
      switchNow,
    };
  },
};
</script>

<style scoped>
h5 {
  margin-bottom: 20px;
}
.nd-btn {
  margin: 10px 0;
}
.nd-btn2 {
  margin: 10px;
}
.nd-steps {
  width: 80%;
}
.nd-steps2 {
  height: 300px;
}
</style>