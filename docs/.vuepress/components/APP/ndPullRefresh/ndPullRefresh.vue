<template>
    <div>
        <nd-tabs>
            <nd-tab title="基础用法">
                <nd-pull-refresh
                    :loading="data.loading"
                    @refresh="onRefresh"
                    @change="onChange"
                    content-height="200"
                    :bottom-offset=20
                    @loadMore="onLoadMore"
                >
                    <ul>
                        <li v-for="(item, index) in data.recordList" style="width: 80%; margin: 10px auto; border-radius: 12px; background-color: pink; height: 76px; display: flex; flex-direction: column; padding: 16px; box-sizing: border-box; border: 1px solid #E5E5E5; position: relative;">
                            <img v-lazy="item.thumbnailImgURL" class="leftlazy">
                        </li>
                        <p class="no-more" v-if="showBottom">没有更多了</p>
                        <p class="no-more" v-else>下拉加载更多</p>
                    </ul>
                </nd-pull-refresh>
            </nd-tab>
            <nd-tab title="成功提示">
                <nd-pull-refresh
                    :loading="data.loading"
                    successText="刷新成功"
                    @refresh="onRefresh"
                    @change="onChange"
                    style="height: 360px"
                >
                    <div class="box">
                        <p>刷新次数：{{ count }}</p>
                    </div>
                </nd-pull-refresh>
            </nd-tab>
            <nd-tab title="自定义提示">
                <nd-pull-refresh
                    :loading="data.loading"
                    @refresh="onRefresh"
                    @change="onChange"
                    style="height: 360px"
                >
                    <template #pulling>
                        <p>啦啦啦</p>
                    </template>
                    <template #loading>
                        <p>哈哈哈</p>
                    </template>
                    <template #loosing>
                        <p>嘿嘿嘿</p>
                    </template>
                    <div class="box">
                        <p>刷新次数：{{ count }}</p>
                    </div>
                </nd-pull-refresh>
            </nd-tab>
        </nd-tabs>

        <p><b>请将浏览器切换为移动端模式</b></p>
        <p><b>然后将屏幕滑动到最顶部</b></p>

    </div>
</template>
<script setup>
import { ref, reactive, createApp  } from 'vue';
import ndTabs from '../../../../../src/packages/APP/nd-tabs/index.js';
import ndTab from '../../../../../src/packages/APP/nd-tab/index.js';
import ndPullRefresh from '../../../../../src/packages/APP/nd-pull-refresh/src/nd-pull-refresh.vue';
const loading = ref(false)
const count = ref(0)

const data = reactive({
    loading: {
        isLoading: false
    },
    recordList: [],
    total: 55,
    page: 1,
    rows: 10,
})

const onRefresh = () => {
    data.page++;
    setTimeout(() => {
        mockData()
    }, 1000)
}
const onChange = (obj) => {
    // console.log('change-nd', obj)
}
const mockData = () => {
    data.loading.isLoading = false
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
        }else{
            showBottom.value = true;
            return false
        }
    }
}
mockData();
const showBottom = ref(false);
const onLoadMore = () => {
    data.loading.isLoading = true
    mockData()
}


</script>
<style scoped>
.box {
    height: 500px;
    position: relative;
}
.no-more {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
}
li { 
    list-style: none
}
.leftlazy {
    position: static;
    left: 0px;
    top: 0px;
    width: 44px;
    height: 44px;
    border-radius: 4px;
    opacity: 1;
    z-index: 0;
}
</style>