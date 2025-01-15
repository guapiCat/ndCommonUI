<template>
    <van-button size="mini" @click.stop="addImgTab">添加图片</van-button>
    <van-button size="mini" @click.stop="tabs.pop()">删除</van-button>
    <van-button size="mini" @click.stop="show = !show">{{ show ? '隐藏' : '显示' }}</van-button>
    <nd-app-tabbar v-if="show" v-model="currentIndex" :clickFn="clickItem" :tabs="tabs"></nd-app-tabbar>
</template>
  
<script>
import { reactive, toRefs } from 'vue';
import ndAppTabbar from '../../../../../src/packages/APP/nd-tabbar/index.js';
export default {
    name: "ND_APP_Tabbar",
    components: { ndAppTabbar },
    setup(props, { emit, slots }) {
        const clickItem = (item, i) => {
            console.log(item)
            console.log('i: ' + i)
        }
        const data = reactive({
            tabs: [{
                label: '第二个',
                icon: 'wap-home-o', // 支持使用vant图标icon
                urlActive: 'https://sponsors.vuejs.org/images/chrome_frameworks_fund.avif',
                urlInactive: 'https://sponsors.vuejs.org/images/mqtt_x.avif'
            }],
            currentIndex: 0,
            show: false
        })
        const addImgTab = () => {
            data.tabs.push({
                label: '我的',
                icon: '',
                urlActive: 'https://sponsors.vuejs.org/images/chrome_frameworks_fund.avif',
                urlInactive: 'https://sponsors.vuejs.org/images/mqtt_x.avif',
            })
        }
        const datas = toRefs(data)
        return {
            ...datas,
            clickItem,
            addImgTab
        }
    }
}
</script>
  
<style scoped>
</style>