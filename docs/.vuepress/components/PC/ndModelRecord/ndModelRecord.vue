<template>
    <div class="record-box" v-loading="loading">
        <nd-model-record
            emptyImg="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            :recordList="data.recordList"
            :total="data.total"
            :canLoadMore="data.canLoadMore"
            @recordTap="recordTap"
            @loadMore="loadMore"
        />
    </div>
</template>
<script setup>
import ndModelRecord from "../../../../../src/packages/PC/nd-model-record/src/nd-model-record.vue";
import { ref, reactive, nextTick } from 'vue';

const data = reactive({
    recordList: [],
    total: 55,
    page: 1,
    rows: 10,
})
const loading = ref(false);
const mockData = () => {
    for (let i = (data.page-1) * data.rows; i < data.page * data.rows; i++) {
        if (data.recordList.length < data.total) {
            data.recordList.push({
                convertStatus: i % 9 == 0 ? 5 : 2,
                extension: '.stp',
                fileSize: '6.49M',
                modelCode: 4579650710273,
                modelName: '模型' + i,
                thumbnailImgURL: 'https://img1.baidu.com/it/u=3867310887,3679104461&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
                typeImgSrc: '/images/fileType/Step.png',
                updateTime: '2023-03-24T17:38:30'
            })
        }
    }
}
mockData();
// 点击某个模型
const recordTap = item => {
    console.log(111);
}
// 滚动加载更多
const loadMore = () => {
    console.log(111)
    loading.value = true;
    setTimeout(() => {
        data.page++;
        mockData();
        loading.value = false;
    }, 1000)
}
</script>
<style scoped>
.record-box{
    height: 400px;
}
</style>