<template>
    <div class="nd-record-box" @scroll="recordScroll">
        <!-- 无数据 -->
        <div class="record-default" v-if="recordList.length === 0">
            <img :src="emptyImg" alt="" class="default-img">
            <p class="default-text">{{emptyTips}}</p>
        </div>
        <!-- 有数据 -->
        <div v-else>
            <div class="record-list">
                <div class="record-cell" v-for="(item, index) in recordList" :style="(item.convertStatus != 0 && item.convertStatus != 1 && item.convertStatus != 2)?'opacity: 0.4; cursor:no-drop':''" :key="index" @click="recordClick(item)">
                    <el-image lazy :src="item.thumbnailImgURL?item.thumbnailImgURL:item.typeImgSrc" :onerror="(e)=>{e.srcElement.src='/images/fileType/default.png';e.srcElement.onerror=null}" alt="" :class="item.thumbnailImgURL?'record-preview':'record-typepreview'" />
                    <p class="record-name">{{ item.modelName }}</p>
                    <div class="record-data">
                        <span class="record-extension">{{ item.extension }}</span>
                        <span class="record-size">{{ item.fileSize }}</span>
                    </div>
                </div>
            </div>
            <div style="height: 32px; line-height: 32px; text-align: center; color: #666;">{{ (total > recordList.length)?'滚动加载更多...':'到底了...' }}</div>
        </div>
    </div>
</template>
<script setup>
import { defineEmits, defineProps, nextTick } from "vue";

const props = defineProps({
    emptyImg: {      // 无数据的图片
        type: String,
        default: ''
    },
    emptyTips: {     // 无数据的文字提示
    
        type: String,
        default: '暂无记录，快去打开3D/2D文件~'
    },
    recordList: {     // 数据列表
        type: Array,
        default: () => { return [] }
    },
    total: {     // 数据总数量
        type: Number,
        default: 0
    },
})
const emit = defineEmits(['recordTap', 'loadMore']);
// 点击某个模型
const recordClick = item => {
    emit('recordTap', item);
}
// 监听列表滚动
const recordScroll = () => {
    nextTick(() => {
        let dom = document.getElementsByClassName('nd-record-box')[0];
        let scrollDistance = dom.scrollHeight - dom.scrollTop - dom.clientHeight;
        if (scrollDistance <= 0 && props.recordList.length < props.total) {
            console.log('bottom')
            emit('loadMore');
        }
    })
}
</script>
<script>
export default {
    name: 'nd-model-record'
}
</script>
<style scoped lang="scss">
.nd-record-box {
    height: 100%;
    overflow-y: auto;
    // 缺省样式
    .record-default {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .default-img {
            width: 160px;
            height: 160px;
        }

        .default-text {
            height: 24px;
            font-size: 16px;
            line-height: 24px;
            color: #999;
            text-align: center;
        }
    }
    // 列表样式
    .record-list {
        padding-top: 16px;
        display: flex;
        flex-wrap: wrap;

        .record-cell {
            width: 232px;
            height: 230px;
            border-radius: 8px;
            box-sizing: border-box;
            border: 1px solid rgba(0, 0, 0, 0.1);
            margin-right: 16px;
            margin-bottom: 16px;
            padding: 8px;
            cursor: pointer;
            .record-preview {
            width: 216px;
            height: 160px;
            border-radius: 8px;
            margin: 0 auto;
            background: #F2F2F2;
            display: block;
            object-fit: cover !important;
            }
            .record-typepreview {
            width: 80px;
            height: 90px;
            border-radius: 8px;
            background: #F2F2F2;
            display: block;
            padding: 35px 63px;
            margin: 0 auto;
            object-fit: cover !important;
            }
            .record-name {
            height: 24px;
            font-size: 16px;
            line-height: 24px;
            color: #333;
            font-family: 'Source Han Sans CN';
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-top: 8px;
            }

            .record-data {
            height: 22px;
            font-size: 14px;
            font-family: 'Roboto';
            line-height: 22px;
            color: #666;
            display: flex;
            justify-content: space-between;
            align-items: center;
            }
        }

        .record-cell:hover {
            border: 1px solid #1780E3;
        }

        .record-cell:hover .record-name {
            color: #1780E3;
        }
    }
}
</style>
