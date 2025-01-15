<template>
    <div class="tabtitconter">
        <ndTreeSelect :treeObj="data.treeObj">
        </ndTreeSelect>
        <ndTreeSelect style="margin-top: 60px;" :treeObj="data.treeObj2">
            <template #content>
                <div class="content-div clearfix" v-if="data.treeObj2.activeIndex == 0">
                    <div class="cd-con" v-for="(item, i) in 10" :index="i">
                        <div class="cdctop"></div>
                        <div class="cdcbottom">
                            标题文字
                        </div>
                    </div>
                </div>
                <div class="content-div clearfix" v-if="data.treeObj2.activeIndex == 1">
                    <div class="cd-con" v-for="(item, i) in 8" :index="i">
                        <div class="cdctop"></div>
                        <div class="cdcbottom">
                            标题文字
                        </div>
                    </div>
                </div>
                <div class="content-div clearfix" v-if="data.treeObj2.activeIndex == 2">
                    <div class="cd-con" v-for="(item, i) in 20" :index="i">
                        <div class="cdctop"></div>
                        <div class="cdcbottom">
                            标题文字
                        </div>
                    </div>
                </div>
            </template>
        </ndTreeSelect>
        <ndTreeSelect style="margin-top: 60px;" :treeObj="data.treeObj3">
        </ndTreeSelect>
    </div>
</template>
  
<script setup>
import { reactive } from 'vue';
import ndTreeSelect from '../../../../../src/packages/APP/nd-treeSelect/index.js';
import svgIcon from '../../../../../src/components/SvgIcon.vue';
const data = reactive({
    treeObj: {
        activeIndex: 0,
        items: [
            {
                text: '一级内容',
                children: [
                    { text: '二级内容', id: 1 },
                    { text: '二级内容', id: 2 },
                    { text: '二级内容', id: 3, disabled: true },
                ],
                dot: true,
            },
            {
                text: '一级内容',
                children: [
                    { text: '二级内容', id: 4 },
                    { text: '二级内容', id: 5 },
                    { text: '二级内容', id: 6 },
                ],
                badge: 5,
            },
            {
                text: '一级内容',
                children: [
                    { text: '二级内容', id: 7 },
                    { text: '二级内容', id: 8 },
                    { text: '二级内容', id: 9 },
                ],
            }
        ],
        activeId: ""
    },
    treeObj2: {
        activeIndex: 0,
        items: [
            {
                text: '一级内容',
            },
            {
                text: '一级内容',
            },
            {
                text: '一级内容',
            }
        ],
        activeId: undefined
    },
    treeObj3: {
        activeIndex: 0,
        items: [
            {
                text: '一级内容',
                children: [
                    { text: '二级内容', id: 1 },
                    { text: '二级内容', id: 2 },
                    { text: '二级内容', id: 3, disabled: true },
                ],
                dot: true,
            },
            {
                text: '一级内容',
                children: [
                    { text: '二级内容', id: 4 },
                    { text: '二级内容', id: 5 },
                    { text: '二级内容', id: 6 },
                ],
                badge: 5,
            },
            {
                text: '一级内容',
                children: [
                    { text: '二级内容', id: 7 },
                    { text: '二级内容', id: 8 },
                    { text: '二级内容', id: 9 },
                ],
                disabled: true
            }
        ],
        activeId: [1, 2]
    },
})
</script>

<style scoped>
.content-div {
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
}

.cd-con {
    height: 66px;
    width: 72px;
    float: left;
    margin-top: 16px;
}

.cdctop {
    height: 48px;
    width: 48px;
    margin: 0 auto;
    border-radius: 4px;
    opacity: 1;
    /* 辅助颜色/边框线 - #E4E7ED */
    background: #E4E7ED;
}

.cdcbottom {
    height: 18px;
    opacity: 1;
    /* 字号/T1/12px */
    font-family: Source Han Sans CN;
    font-size: 12px;
    font-weight: normal;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0px;
    /* 文字颜色/#333 */
    color: #333333;
    z-index: 0;
}

.clearfix:before,
.clearfix:after {
    content: "";
    display: table;
}

.clearfix:after {
    clear: both;
}

/* .clearfix {
    *zoom: 1;
} */
</style>