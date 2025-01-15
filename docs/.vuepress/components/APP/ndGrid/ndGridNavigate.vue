<template>
    <div>
        <nd-grid :column-num="2">
            <nd-grid-item icon="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" title="导航router" to="/"></nd-grid-item>
            <nd-grid-item icon="photo-o" title="跳转url" url="https://www.baidu.com"></nd-grid-item>
        </nd-grid>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
import ndGrid from '../../../../../src/packages/APP/nd-grid/index';
import ndGridItem from '../../../../../src/packages/APP/nd-grid-item/index';


</script>
<style scoped>

</style>
