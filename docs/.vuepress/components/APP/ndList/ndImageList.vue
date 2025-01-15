<template>
  <div class="box">
    <nd-app-list
      v-model:loading="loading" :offset="0"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <nd-app-list-cell type="card2" :list="list" :listImageLazy="true" @click="onClick"></nd-app-list-cell>
    </nd-app-list>
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount } from 'vue';

import ndAppList from '../../../../../src/packages/APP/nd-list/src/nd-list.vue'
import ndAppListCell from '../../../../../src/packages/APP/nd-list-cell/src/nd-list-cell.vue'

export default {
  name: '',
  components: { ndAppList, ndAppListCell },
  setup() {
    const data = reactive({
      loading: false,
      finished: false,
      list: [],
      rawList: [],
    });

    onBeforeMount(() => {
      // 制造数据
      for (let i = 0; i < 10; i++) {
        data.rawList.push({
          title: "标题内容",
          text: "正文内容",
          src: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg?id=' + Math.random(),
        });
      }
      data.list = JSON.parse(JSON.stringify(data.rawList));
      data.list[0].src = null;
      data.list[0].title = '图片加载失败';
    })

    const onLoad = () => {
      console.log('onload event');
      data.loading = true;
      setTimeout(() => {

        // 图片模拟。支持懒加载
        let mock = [];
        for (let i = 0; i < 10; i++) {
          mock.push({
            title: "标题内容",
            text: "正文内容",
            src: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg?id=' + Math.random(),
          });
        }

        // 图片添加
        data.list.push(...mock);
        data.loading = false;
        if (data.list.length >= 50) {
          data.finished = true;
        }
      }, 1000);
    };

    const onClick = (item, index) => {
      console.log(item.title);
      console.log(index);
    };

    const refData = toRefs(data);
    return {
      ...refData,
      onLoad,
      onClick,
    };
  },
};
</script>

<style scoped>
.box {
  height: 500px;
  overflow: scroll;
}
</style>