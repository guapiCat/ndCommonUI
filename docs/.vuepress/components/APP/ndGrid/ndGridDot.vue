<template>
    <div>
        <nd-grid :column-num="4">
            <nd-grid-item icon="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" title="标题1" dot></nd-grid-item>
            <nd-grid-item icon="photo-o" icon-color="#666" title="标题2" badge="88"></nd-grid-item>
            <nd-grid-item icon="photo-o" title="标题3" badge="121" :badge-props="badgeProps1"></nd-grid-item>
            <nd-grid-item icon="photo-o" title="标题3" badge="121" :badge-props="badgeProps2"></nd-grid-item>
            <nd-grid-item>
                <img src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" alt="">
            </nd-grid-item>
        </nd-grid>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
import ndGrid from '../../../../../src/packages/APP/nd-grid/index';
import ndGridItem from '../../../../../src/packages/APP/nd-grid-item/index';

const badgeProps1 = reactive({
    max: 99,
    color: '#1989fa'
})
const badgeProps2 = reactive({
    max: 99,
    position: 'bottom-left'
})

</script>
<style scoped>

</style>
