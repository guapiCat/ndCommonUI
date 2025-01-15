<template>
    <div class="tabtitconter">
        <p class="p-conter">- 一般存在2-6个操作项推荐使用；</p>
        <p class="p-conter">- 若需明确当前操作，可使用提示文本辅助描述，不超过两行</p>
        <van-cell is-link title="基础用法" @click="data.sheetObj.show = true" />
        <ndActionSheet :sheetObj="data.sheetObj" :actions="data.sheetObj.actions" @select="onSelect">
        </ndActionSheet>
        <van-cell is-link title="显示取消按钮" @click="data.sheetObj1.show = true" />
        <ndActionSheet :sheetObj="data.sheetObj1" :actions="data.sheetObj1.actions" cancel-text="取消" @select="onSelect">
        </ndActionSheet>
        <p class="p-conter" style="margin-top: 36px;">- 下拉菜单可自定义字体颜色、字体大小、cell高度等内容</p>
        <van-cell is-link title="选项辅助" @click="data.sheetObj2.show = true" />
        <ndActionSheet :sheetObj="data.sheetObj2" cancel-text="取消" :actions="data.sheetObj2.actions" @select="onSelect">
        </ndActionSheet>
        <van-cell is-link title="标题辅助" @click="data.sheetObj3.show = true" />
        <ndActionSheet :sheetObj="data.sheetObj3" description="这是一段描述信息" :actions="data.sheetObj3.actions" cancel-text="取消"
            @select="onSelect">
        </ndActionSheet>
        <p class="p-conter" style="margin-top: 36px;">- 可自定义颜色</p>
        <p class="p-conter">- 禁用状态</p>
        <p class="p-conter">- 加载状态</p>
        <van-cell is-link title="选项状态" @click="data.sheetObj4.show = true" />
        <ndActionSheet :sheetObj="data.sheetObj4" cancel-text="取消" title="可自定义颜色" :actions="data.sheetObj4.actions"
            @select="onSelect">
        </ndActionSheet>
        <p class="p-conter" style="margin-top: 36px;">- 内容自定义</p>
        <p class="p-conter">- 自定义内容由业务层定义具体内容，demo只做展示使用</p>
        <van-cell is-link title="内容自定义" @click="data.sheetObj5.show = true" />
        <ndActionSheet :sheetObj="data.sheetObj5" cancel-text="取消" @select="onSelect">
            <template #default>
                <div class="content" style="height: 148px;">
                    <div class="cont-top">
                        立即分享给好友
                    </div>
                    <div class="cont-bootom">
                        <div style="width: 448px;">
                            <div class="cont-b-li" v-for="(item, i) in 6" :key="i">
                                <div class="cbl-top"></div>
                                <div class="cbl-bottom">描述文字</div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </ndActionSheet>
    </div>
</template>
  
<script setup>
import { reactive } from 'vue';
import ndActionSheet from '../../../../../src/packages/APP/nd-action-sheet/index.js';
const data = reactive({
    sheetObj: {
        show: false,
        actions: [
            { name: '选项一' },
            { name: '选项二' },
            { name: '选项三' },
        ],
    },
    sheetObj1: {
        show: false,
        actions: [
            { name: '选项一' },
            { name: '选项二' },
            { name: '选项三' },
        ],
    },
    sheetObj2: {
        show: false,
        actions: [
            { name: '选项一' },
            { name: '选项二', subname: '描述信息' },
            { name: '选项三' },
        ],
    },
    sheetObj3: {
        show: false,
        actions: [
            { name: '选项一' },
            { name: '选项二' },
            { name: '选项三' },
        ],
    },
    sheetObj4: {
        show: false,
        actions: [
            { name: '着色选项', color: '#1880E3' },
            { name: '禁用选项', disabled: true },
            { name: '加载选项', loading: true },
        ],
    },
    sheetObj5: {
        show: false,
    }
})
const onSelect = (item) => {
    console.log('item', item);
    data.sheetObj.show = false
}
</script>

<style lang="scss" scoped>
.p-conter {
    font-size: 12px;
    color: #666666;
}

.content {
    overflow: hidden;
    overflow-x: auto;
}

.cont-top {
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    font-weight: normal;
    text-align: center;
    letter-spacing: 0em;
    /* 文字颜色/#333 */
    color: #333333;
}

.cont-bootom {
    padding: 0 24px;
    overflow: hidden;
    overflow-x: auto;
    width: calc(100% - 48px);
}

.cont-b-li {
    float: left;
    margin-right: 32px;
    height: 74px;
    width: 48px;
}
.cont-b-li:last-child {
    margin-right: 0px;
}

.cbl-top {
    background-color: #ccc;
    height: 48px;
    width: 48px;
    border-radius: 50%;
}

.cbl-bottom {
    margin-top: 8px;
    text-align: center;
    color: #666;
    font-size: 12px;
    line-height: 18px;
}

.clearfix:before,
.clearfix:after {
    content: "";
    display: table;
}

.clearfix:after {
    clear: both;
}

.clearfix {
    *zoom: 1;
}
</style>
<style>
::-webkit-scrollbar {
    width: 2px;
    height: 1px;
    background-color: #F5F5F5;
}
/*定义滚动条轨道
内阴影+圆角*/
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
}
/*定义滑块
内阴影+圆角*/

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #555;
}
</style>