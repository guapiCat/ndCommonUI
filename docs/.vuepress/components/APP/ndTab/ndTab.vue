<template>
    <div class="tabtitconter">
        <div class="tabtit">固定数目: 2
            <svg-icon color="red" iconName="icon-icon-WaringCheck"></svg-icon>
        </div>
        <ndTabs :active="data.active1">
            <ndTab v-for="(item, i) in data.tablist1">
                <div style="text-align: center;">{{ item.conter }}</div>
                <template #title>
                    {{ item.title }}
                </template>
            </ndTab>
        </ndTabs>
        <div class="tabtit">固定数目: 3</div>
        <ndTabs :active="data.active2" :tailoring="true">
            <ndTab v-for="(item, i) in data.tablist2" :title="item.title">
                <div style="text-align: center;">{{ item.conter }}</div>
            </ndTab>
        </ndTabs>
        <div class="tabtit">固定数目: 4</div>
        <ndTabs :active="data.active3">
            <ndTab v-for="(item, i) in data.tablist3" :title="item.title">
                <div style="text-align: center;">{{ item.conter }}</div>
            </ndTab>
        </ndTabs>
        <div class="tabtit">固定数目: 5</div>
        <ndTabs :active="data.active4">
            <ndTab v-for="(item, i) in data.tablist4" :title="item.title">
                <div style="text-align: center;">{{ item.conter }}</div>
            </ndTab>
        </ndTabs>
        <div class="tabtit">标题栏滚动</div>
        <div style="height: 288px; overflow: hidden; overflow-y: auto;">
            <ndTabs :active="data.active5" scrollspy>
                <ndTab v-for="(item, i) in data.tablist5" :title="item.title">
                    <div style="text-align: center; height: 30px;">{{ item.conter }}</div>
                </ndTab>
            </ndTabs>
        </div>
        <div class="tabtit">锚点</div>
        <ndTabs :active="data.active5" scrollspy sticky>
            <ndTab v-for="(item, i) in data.tablist5" :title="item.title">
                <div style="text-align: center; height: 80px; margin: 10px; background-color: beige;">{{ item.conter }}</div>
            </ndTab>
        </ndTabs>
        <ndTabs :active="data.active2" type="card" >
            <ndTab v-for="(item, i) in data.tablist2" :title="item.title">
                <div style="text-align: center; height: 80px; margin: 10px; background-color: beige;">{{ item.conter }}</div>
            </ndTab>
        </ndTabs>
        <ndTabs :active="data.active2" type="card" :noBorder="true">
            <ndTab v-for="(item, i) in data.tablist2" :title="item.title">
                <div style="text-align: center; height: 80px; margin: 10px; background-color: beige;">{{ item.conter }}</div>
            </ndTab>
        </ndTabs>
        <ndTabs :active="data.active2" type="card" :isBow="true">
            <ndTab v-for="(item, i) in data.tablist2" :title="item.title">
                <div style="text-align: center; height: 80px; margin: 10px; background-color: beige;">{{ item.conter }}</div>
            </ndTab>
        </ndTabs>
    </div>
</template>
  
<script setup>
import { reactive } from 'vue';
import ndTabs from '../../../../../src/packages/APP/nd-tabs/index.js';
import ndTab from '../../../../../src/packages/APP/nd-tab/index.js';
import svgIcon from '../../../../../src/components/SvgIcon.vue';
const data = reactive({
    active1: 0,
    tablist1: [
        {
            title: "项目1",
            conter: "内容1"
        },
        {
            title: "项目2",
            conter: "内容2"
        }
    ],
    active2: 0,
    tablist2: [
        {
            title: "项目1",
            conter: "内容1"
        },
        {
            title: "项目2",
            conter: "内容2"
        },
        {
            title: "项目3",
            conter: "内容3"
        }
    ],
    active3: 0,
    tablist3: [
        {
            title: "项目1",
            conter: "内容1"
        },
        {
            title: "项目2",
            conter: "内容2"
        },
        {
            title: "项目3",
            conter: "内容3"
        },
        {
            title: "项目4",
            conter: "内容4"
        }
    ],
    active4: 0,
    tablist4: [
        {
            title: "项目1",
            conter: "内容1"
        },
        {
            title: "项目2",
            conter: "内容2"
        },
        {
            title: "项目3",
            conter: "内容3"
        },
        {
            title: "项目4",
            conter: "内容4"
        },
        {
            title: "项目5",
            conter: "内容5"
        }
    ],
    active5: 0,
    tablist5: [
        {
            title: "项目1",
            conter: "内容1"
        },
        {
            title: "项目2",
            conter: "内容2"
        },
        {
            title: "项目3",
            conter: "内容3"
        },
        {
            title: "项目4",
            conter: "内容4"
        },
        {
            title: "项目5",
            conter: "内容5"
        },
        {
            title: "项目6",
            conter: "内容6"
        },
        {
            title: "项目7",
            conter: "内容7"
        },
        {
            title: "项目8",
            conter: "内容8"
        }
    ]
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