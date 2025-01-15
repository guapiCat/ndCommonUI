<template>
    <div class="text-ellipsis-content">

        <h3 class="p-conter">基础用法--默认展示 1 行，超过 1 行显示省略号。</h3>
        <ndTextEllipsis :content="text1" />
        <br>
        <h3 class="p-conter">展开/收起 --超过行数支持展开/收起。</h3>
        <ndTextEllipsis :content="text1" expand-text="展开" collapse-text="收起" @nd-text-ellipsis-click-action="clickAction"/>

        <h3 class="p-conter">自定义展示行数</h3>
        <ndTextEllipsis rows="3" :content="text2" expand-text="展开" collapse-text="收起" @nd-text-ellipsis-click-action="clickAction"/>

    </div>
</template>
  
<script setup>
import { reactive } from 'vue';
import ndTextEllipsis from '../../../../../src/packages/APP/nd-textEllipsis/index.js';

const data = reactive({
})

const text1 =
    '似水流年是一个人所有的一切，只有这个东西，才真正归你所有。其余的一切，都是片刻的欢娱和不幸，转眼间就已跑到那似水流年里去了。';

const text2 =
    '那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己会永远生猛下去，什么也锤不了我。';


const clickAction = (event)=>{
    console.log(event);
}
</script>

<style lang="scss" scoped>
.p-conter {
    font-size: 14px;
    color: #666666;
}

.error {
    color: var(--nd-warning-color);
}
</style>