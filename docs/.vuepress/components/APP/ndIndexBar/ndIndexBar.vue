<template>
    <div class="tabtitconter">
        <ndAppVanIndexBar :active="data.active1" :sticky-offset-top="58">
            <vanAppIndexAnchor index="A" />
            <nd-cell title="文本" />
            <nd-cell title="文本" />
            <nd-cell title="文本" />
            <vanAppIndexAnchor index="B" />
            <nd-cell title="文本" />
            <nd-cell title="文本" />
            <nd-cell title="文本" />
            <vanAppIndexAnchor index="C" />
            <nd-cell title="文本" />
            <nd-cell title="文本" />
            <nd-cell title="文本" />
            <vanAppIndexAnchor index="D" />
            <nd-cell title="文本" />
            <nd-cell title="文本" />
            <nd-cell title="文本" />
            <vanAppIndexAnchor index="E" />
            <nd-cell title="文本" />
            <nd-cell title="文本" />
            <nd-cell title="文本" />
            <vanAppIndexAnchor index="F" />
            <nd-cell title="文本" />
            <nd-cell title="文本" />
            <nd-cell title="文本" />
            <vanAppIndexAnchor index="G" />
            <nd-cell title="文本" />
            <nd-cell title="文本" />
            <nd-cell title="文本" />
        </ndAppVanIndexBar>
    </div>
</template>
  
<script setup>
import { reactive } from 'vue';
import ndAppVanIndexBar from '../../../../../src/packages/APP/nd-index-bar/index.js';
import vanAppIndexAnchor from '../../../../../src/packages/APP/nd-index-anchor/index.js';
import ndCell from '../../../../../src/packages/APP/nd-cell';

const data = reactive({
    active1: 'A',
})
</script>

<style scoped>
.tabtit {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 600;
    color: #ccc;
    border-top: 1px solid #369;
    line-height: 26px;
    height: 26px;
}

.tabtit:nth-child(1) {
    border-top: none
}
</style>