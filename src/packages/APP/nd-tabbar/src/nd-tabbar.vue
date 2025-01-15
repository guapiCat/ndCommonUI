<template>
    <van-tabbar ref="compTabbar" v-bind="$attrs" :class="{ 'comp-tabbar': true, 'over-count': countOver }" v-model="currentTab"
        :fixed="fixed" :placeholder="placeholder" :z-index="zIndex" :active-color="activeColor"
        :inactive-color="inactiveColor" @change="tabChange">
        <div :class="{ 'tabbar-content': true, 'fit-content': countOver }">
            <template v-for="item, i in tabs" :key="i">
                <nd-app-tabbar-item   v-if="!item.slot" v-bind="$attrs" :label="item.label" :icon="item.icon" :urlActive="item.urlActive"
                    :urlInactive="item.urlInactive"
                    :class="{ 'tabbar-item': true, 'over-count-item':countOver}"></nd-app-tabbar-item>
                
                <div v-if="item.slot" :class="{'over-count-item':countOver}" style="display:flex">
                    <!-- 传入slot, 将作为具名插槽使用 -->
                    <slot :name="item.slot" :item="item" :id="i"></slot>
                </div>
            </template>
        </div>
    </van-tabbar>
</template>


<script>
import { ref, reactive, toRefs, onMounted, watch, computed } from 'vue'
import ndAppTabbarItem from './nd-tabbar-item.vue'
export default {
    props: {
        modelValue: {
            // 绑定的当前tab索引, v-model后不接name, 默认使用modelValue
            type: [String, Number],
            default: 0
        },
        tabs: {
            // 配置的tab数据
            type: [Array, Object],
            required: true,
            default: () => [{
                label: '首页',
                icon: 'wap-home-o', // 支持使用vant图标icon
                urlActive: '', // 当传入url时, 使用img自定义图片
                urlInactive: '',
                // slot: '', // 传入slot:name, 作为插槽抛出
                options: {
                    badge: '', // 图标徽标内容
                    dot: '', // 显示右上角图标小红点
                    url: '', // 点击跳转的链接地址,
                    route: '',  // string|object 
                    replace: false // 是否在跳转时替换当前页面历史
                }, // van-tabbar-item的属性值
            }]
        },
        clickFn: {
            // 自定义的点击事件
            type: Function,
            default: null
        },
        fixed: {
            // 是否固定在底部
            type: Boolean,
            default: true
        },
        placeholder: {
            // 是否在底部生成一个占位元素
            type: Boolean,
            default: false
        },
        zIndex: {
            // 定位层级
            type: [String, Number],
            default: 1
        },
        'active-color': {
            // 被选中tab颜色
            type: String,
            default: '#1989fa',
        },
        'inactive-color': {
            // 未被选中的tab颜色
            type: String,
            default: '#7d7e80'
        },
    },
    components: { ndAppTabbarItem },
    emits: ['change', 'update:modelValue'],
    setup(props, { emit, slots }) {
        const data = reactive({
            currentTab: 0
        })
        onMounted(() => {
            data.currentTab = Number(Object.keys(props.tabs)[0])
            emit('update:modelValue', data.currentTab)
        })
        watch(() => props.modelValue, () => {
            // 更新
            data.currentTab = props.modelValue
        }, { deep: true, immediate: true })
        watch(() => data.currentTab, () => {
            // 更新
            emit('update:modelValue', data.currentTab)
        }, { deep: true, immediate: true })
        const clickItem = (item, i) => {
            data.currentTab = i
            emit('update:modelValue', i)
            props.clickFn && props.clickFn(item, i)
        }
        let dealWithColor = (names) => {
            // 兼容传入的没有#的十六进制数据
            let reg = /^([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/
            if (props[names] && props[names].includes('#') && !reg.test(props[names])) {
                return props[names]
            } else {
                return `#${props[names]}`
            }
        }
        const activeColor = computed(() => dealWithColor('active-color'));
        const inactiveColor = computed(() => dealWithColor('inactive-color'))
        const countOver = computed(() => {
            let count = Object.keys(props.tabs).length
            return count > 5
        })
        const tabChange = (item) => {
            emit('update:modelValue', 100)
            emit('change', item, data.currentTab)
        }
        data.currentTab = props.modelValue
        const datas = toRefs(data)
        return {
            ...datas,
            activeColor,
            tabChange,
            clickItem,
            countOver,
            inactiveColor
        }
    },
}
</script>

<style scoped lang="scss">
.over-count {
    width: 100vw;
    overflow-x: auto;
    .over-count-item {
        width: 20vw;
    }
}

.comp-tabbar {
    height: 50px;
    background: #fff;

    .tabbar-content {
        display: flex;
        width: 100%
    }

    .fit-content {
        width: fit-content
    }

    .icon-img {
        width: 24px;
        height: 24px;
    }
}

.comp-tabbar::-webkit-scrollbar {
    width: 0 !important
}

.comp-tabbar::-webkit-scrollbar {
    height: 0 !important
}
</style>
