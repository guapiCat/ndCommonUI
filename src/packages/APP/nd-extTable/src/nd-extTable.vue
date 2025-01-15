<template>
    <div :class="`nd-ext-table ${propClass}`">
        <table class="table" border="1">
            <tr>
                <th>类型</th>
                <th>格式</th>
            </tr>
            <tr v-for="item in extConfig">
                <td>{{ item[propsKeyVal.key] }}</td>
                <td>{{ item[propsKeyVal.value] }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import {ref, reactive, toRefs} from 'vue'
export default {
    props: {
        extConfig: {
            // 显示的配置数据数组
            type: Array,
            required: true,
            default: () => []
        },
        props: {
            // 自定义的key和value对象
            type: Object,
            default: () => {}
        },
        propClass: {
            // 挂载在顶部标签的类名
            type: String,
            default: ''
        }
    },
    setup(prop){
        const state = reactive({
            propsKeyVal: {
                key: 'extName', // 显示使用的key字段
                value: 'extension' // 显示使用的value字段
            }
        })
        // 自定义的变量名, 覆盖
        state.propsKeyVal = {...state.propsKeyVal, ...prop.props}
        const states = toRefs(state)
        return {
            ...states
        }
    }
}
</script>

<style scoped lang="scss">
.nd-ext-table {
    .table {
        box-sizing: border-box;
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        color: #333333;

        th {
            height: 48px;
            border: 1px solid #e0e0e0;
            background-color: #f2f6fc;
            font-family: SourceHanSansCN-Medium;
            text-align: left!important;
            padding-left: 10px;

        }

        th:first-child {
            min-width: 88px;
        }

        td {
            border: 1px solid #e0e0e0;
            padding-left: 10px;
        }

        tr td:nth-child(1) {
            // text-align: center;
            font-family: SourceHanSansCN-Medium;
        }

        tr td:nth-child(2) {
            font-weight: 400;
            padding: 12px 8px;
            word-break: break-word
        }
    }
}</style>