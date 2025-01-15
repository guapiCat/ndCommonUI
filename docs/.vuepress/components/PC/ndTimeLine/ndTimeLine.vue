<template>
  <div>
    <h6>基础时间线</h6>
    <nd-time-line :activities="activities"></nd-time-line>

    <h6>卡片时间线</h6>
    <nd-time-line :activities="activities" :type="1"></nd-time-line>
    
    <h6>插槽时间线</h6>
    <nd-time-line :activities="activities" :type="2">
      <template #activity="activity">
        <el-button>{{activity.content}}</el-button>
      </template>
    </nd-time-line>
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue';
import ndTimeLine from '../../../../../src/packages/PC/nd-time-line';

export default {
  name: '',
  components: {
    ndTimeLine,
  },
  setup() {
    const data = reactive({
      activities: [
        {
          content: 'Event start',
          timestamp: '2018-04-15',
          icon: 'MoreFilled',
          color: '#0bbd87',
          size: 'large',
          type: 'primary',
          title: '这是一个标题',
        },
        {
          content: 'Approved',
          timestamp: '2018-04-13',
          hollow: true,
        },
        {
          content: 'Success',
          timestamp: '2018-04-11',
        },
      ],
    });

    onBeforeMount(() => {});
    onMounted(() => {});

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>

<style scoped>
h6 {
  margin-bottom: 20px;
}
</style>