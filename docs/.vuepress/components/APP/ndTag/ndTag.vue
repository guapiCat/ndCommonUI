<template>
    <div>
        <div class="box">
            <span>primary类型</span>
            <nd-tag type="primary">标签</nd-tag>
        </div>
        <div class="box">
            <span>success类型</span>
            <nd-tag type="success">标签</nd-tag>
        </div>
        <div class="box">
            <span>danger类型</span>
            <nd-tag type="danger">标签</nd-tag>
        </div>
        <div class="box">
            <span>warning类型</span>
            <nd-tag type="warning">标签</nd-tag>
        </div>
    </div>
</template>
<script setup>
import ndTag from '../../../../../src/packages/APP/nd-tag/index';



</script>
<style scoped>
.box {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
}
</style>