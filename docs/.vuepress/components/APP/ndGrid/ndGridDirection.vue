<template>
    <div>
        <nd-grid direction="horizontal" :column-num="2">
            <nd-grid-item v-for="(item, index) in data" :key="index" :icon="item.icon" :title="item.title" :text="item.text"></nd-grid-item>
        </nd-grid>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
import ndGrid from '../../../../../src/packages/APP/nd-grid/index';
import ndGridItem from '../../../../../src/packages/APP/nd-grid-item/index';

const data = reactive([
    {
        icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
        title: '标题1',
        text: '小正文1'
    },
    {
        icon: 'photo-o',
        title: '标题2',
        text: '小正文2'
    },
    {
        icon: 'photo-o',
        title: '标题3',
        text: '小正文3'
    },
    {
        icon: 'photo-o',
        title: '标题4',
        text: '小正文4'
    },
    {
        icon: 'photo-o',
        title: '标题5',
        text: '小正文5'
    },
    {
        icon: 'photo-o',
        title: '标题6',
        text: '小正文6'
    }
])

</script>
<style scoped>

</style>
