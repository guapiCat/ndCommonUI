<template>
  <div>
    <nd-cascader :options="casData" v-model="chooseCas" @change="casChange" clearable filterable placeholder="单选"></nd-cascader>
    <br />
    <nd-cascader :options="casData" v-model="chooseCas2" @change="casChange" clearable :props="casProps2" filterable placeholder="多选"></nd-cascader>
    <br />
    <nd-cascader :props="casProps3" filterable placeholder="懒加载"></nd-cascader>
    <br />
    <el-button @click="getModel">获取model</el-button>
  </div>
</template>

<script>
import { reactive, toRefs, getCurrentInstance, onMounted } from 'vue';
import ndCascader from '../../../../../src/packages/PC/nd-cascader/src/nd-cascader.vue';

export default {
  name: '',
  components: { ndCascader },
  setup() {
    const data = reactive({
      casData: [
        {
          value: 1,
          label: 'Asia',
          children: [
            {
              value: 2,
              label: 'China',
              children: [
                { value: 3, label: 'Beijing' },
                { value: 4, label: 'Shanghai' },
                { value: 5, label: 'Hangzhou' },
              ],
            },
            {
              value: 6,
              label: 'Japan',
              children: [
                { value: 7, label: 'Tokyo' },
                { value: 8, label: 'Osaka' },
                { value: 9, label: 'Kyoto' },
              ],
            },
            {
              value: 10,
              label: 'Korea',
              children: [
                { value: 11, label: 'Seoul' },
                { value: 12, label: 'Busan' },
                { value: 13, label: 'Taegu' },
              ],
            },
          ],
        },
        {
          value: 14,
          label: 'Europe',
          children: [
            {
              value: 15,
              label: 'France',
              children: [
                { value: 16, label: 'Paris' },
                { value: 17, label: 'Marseille' },
                { value: 18, label: 'Lyon' },
              ],
            },
            {
              value: 19,
              label: 'UK',
              children: [
                { value: 20, label: 'London' },
                { value: 21, label: 'Birmingham' },
                { value: 22, label: 'Manchester' },
              ],
            },
          ],
        },
      ],
      casProps: {  },
      casProps2: { multiple: true },
      casProps3: {},
      chooseCas: [1, 2, 3],
      chooseCas2: [[1, 2, 3], [1, 2, 4]],
      id: 0,
    });
    const { proxy } = getCurrentInstance();

    onMounted(() => {
      data.casProps3 = {
        lazy: true,
        lazyLoad(node, resolve) {
          const { level } = node;
          console.log("🚀 ~ file: ndCascader.vue:95 ~ lazyLoad ~ level:", level)

          if(!level) {
            setTimeout(() => {
              resolve([
                { value: 1, label: '这是1级-1', leaf: false },
                { value: 2, label: '这是1级-2', leaf: false },
                { value: 3, label: '这是1级-3', leaf: false },
              ])
            }, 500)
          }
          if(level == 1) {
            setTimeout(() => {
              resolve([
                { value: 4, label: '这是2级-1', leaf: false },
                { value: 5, label: '这是2级-2', leaf: false },
                { value: 6, label: '这是2级-3', leaf: false },
              ])
            }, 500)
          }
          if(level == 2) {
            setTimeout(() => {
              resolve([
                { value: 7, label: '这是3级-1', leaf: true },
                { value: 8, label: '这是3级-2', leaf: true },
                { value: 9, label: '这是3级-3', leaf: true },
              ])
            }, 500)
          }

        },
      }
    })

    const getModel = () => {
      console.log('chooseCas=======', data.chooseCas);
    }

    const casChange = (e) => {
      console.log('e=========', e);
    }

    const refData = toRefs(data);
    return {
      ...refData,
      getModel,
      casChange,
    };
  },
};
</script>

<style scoped>
</style>