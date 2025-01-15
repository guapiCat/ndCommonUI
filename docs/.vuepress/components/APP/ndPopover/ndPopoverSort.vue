<template>
  <nd-popover v-model:show="show" :actions="actions" @select="onSelect" type="sort">
    <template #reference>
      <nd-button type="primary" class="mr10">浅色风格</nd-button>
    </template>
  </nd-popover>
</template>

<script>
import ndPopover from '../../../../../src/packages/APP/nd-popover/src/nd-popover.vue';
import ndButton from '../../../../../src/packages/APP/nd-button/src/nd-button.vue';
import iconLf from '../../assets/image/ico-right.png';
import iconRt from '../../assets/image/ico-sort.png';
import iconRt2 from '../../assets/image/ico-sort2.png';

import { reactive, toRefs, ref } from "vue"
export default {
  name: "ND_APP_Popover",
  components: { ndPopover, ndButton },
  setup(props, ctx) {
    const data = reactive({
      actions: [
        { text: '选项一', },
        { text: '选项二', leftImg: iconLf, rightImg: iconRt },
        { text: '选项三', leftImg: iconLf, rightImg: iconRt },
      ],
      show: false,
    });

    const onSelect = (item) => {
      console.log(item);
      if(item.text == '选项二') {
        console.log('选项改变=======', );
        data.actions[1].rightImg = iconRt2;
      }
    }

    const refData = toRefs(data);
    return {
      ...refData,
      onSelect 
    }
  }
}
</script>

<style scoped>
.mr10 {
  margin-right: 10px;
}
</style>