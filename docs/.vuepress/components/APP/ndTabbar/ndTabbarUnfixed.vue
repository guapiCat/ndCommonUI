<template>
    <van-button size="mini" @click.stop="show = !show">{{ show ? '隐藏' : '显示' }}</van-button>
    <nd-app-tabbar v-if="show" v-model="currentIndex" :clickFn="clickItem" :tabs="tabs">
        <template #set>
            <nd-app-tabbar-item :label="'测试'" icon="like-o"></nd-app-tabbar-item>
        </template>
    </nd-app-tabbar>
</template>
  
<script>
import { reactive, toRefs } from 'vue';
import ndAppTabbar from '../../../../../src/packages/APP/nd-tabbar/index.js';
import ndAppTabbarItem from '../../../../../src/packages/APP/nd-tabbar/src/nd-tabbar-item.vue'
export default {
    name: "ND_APP_Tabbar",
    components: { ndAppTabbar, ndAppTabbarItem },
    setup(props, { emit, slots }) {
        const clickItem = (item, i) => {
            console.log(item)
            console.log('i: ' + i)
        }
        const data = reactive({
            show: false,
            tabs: [{
                // 第一条数据配置slot:set, 在nd-app-tabbar中使用对应的插槽#set自定义使用tabbar-item
                label: '第三个',
                icon: 'wap-home-o', // 支持使用vant图标icon
                urlActive: 'https://sponsors.vuejs.org/images/chrome_frameworks_fund.avif',
                urlInactive: 'https://sponsors.vuejs.org/images/mqtt_x.avif',
                slot: 'set'
            },{
                label: '我的',
                icon: '',
                urlActive: 'https://sponsors.vuejs.org/images/chrome_frameworks_fund.avif',
                urlInactive: 'https://sponsors.vuejs.org/images/mqtt_x.avif',
            },{
                label: '信息',
                icon: 'chat-o',
                urlActive: 'https://sponsors.vuejs.org/images/chrome_frameworks_fund.avif',
                urlInactive: 'https://sponsors.vuejs.org/images/mqtt_x.avif',
            },{
                label: '我的',
                icon: '',
                urlActive: 'https://sponsors.vuejs.org/images/chrome_frameworks_fund.avif',
                urlInactive: 'https://sponsors.vuejs.org/images/mqtt_x.avif',
            },{
                label: '信息',
                icon: 'chat-o',
                urlActive: 'https://sponsors.vuejs.org/images/chrome_frameworks_fund.avif',
                urlInactive: 'https://sponsors.vuejs.org/images/mqtt_x.avif',
            },{
                label: '我的',
                icon: '',
                urlActive: 'https://sponsors.vuejs.org/images/chrome_frameworks_fund.avif',
                urlInactive: 'https://sponsors.vuejs.org/images/mqtt_x.avif',
            },{
                label: '信息',
                icon: 'chat-o',
                urlActive: 'https://sponsors.vuejs.org/images/chrome_frameworks_fund.avif',
                urlInactive: 'https://sponsors.vuejs.org/images/mqtt_x.avif',
            }],
            currentIndex: 0,
        })
        const datas = toRefs(data)
        return {
            ...datas,
            clickItem,
        }
    }
}
</script>
  
<style scoped>
</style>