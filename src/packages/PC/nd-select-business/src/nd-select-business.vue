<template>
    <section class="nd-pc-select-newitem">
        <nd-select remote-show-suffix :teleported="false" :loading="loading" popper-class="nd-pc-select-newitem-popper" remote reserve-keyword filterable
            ref="select" :options="arr" v-model.trim="keyword" :prop="{ value: prop.id, label: prop.label }"
            :remote-method="getData">
            <template #default="data">
                <div
                    @click="($event) => chooseData($event, data.item)">{{
                        data.item[prop.label] }}
                </div>
            </template>
        </nd-select>

        <div class="form-dialog" v-show="showDialog">
            <div class="content">
                <p>{{ formTitle }}</p>
                <input v-model="newitem" type="text" :placeholder="formPlaceholder || '请输入'" :maxlength="inputMax">
                <!--<div class="ts-word">请输入单位</div>-->
            </div>
            <div class="btn"><span @click="showDialog = false">取消</span><span @click="confirm">确认</span>
            </div>
        </div>
    </section>
</template>

<script>
import ndSelect from '../../nd-select/src/nd-select.vue'
import { reactive, ref, toRefs, onBeforeMount, watch } from 'vue'
export default {
    components: { ndSelect },
    emit: ['update:modelValue', 'choose'],
    props: {
        modelValue: {
            type: [Number, String],
            default: ''
        },
        options: {
            // 选择数据
            type: [Object, Array],
            default: () => []
        },
        tipInfo: {
            // 提示信息
            type: String,
            default: '如以下选项没有您的选择，请继续输入更多文字查找'
        },
        prop: {
            // 自定义key
            type: Object,
            default: () => {
                return { id: 'id', label: 'label' }
            }
        },
        remoteMethod: {
            // 远程请求方法
            type: Function,
            default: () => {
                return []
            }
        },
        formTitle: {
            // 新建弹窗的显示标题
            type: [Number, String],
            default: '请输入名称'
        },
        formPlaceholder: {
            // 新建弹窗的输入框placeholder
            type: String,
            defualt: '请输入'
        },
        inputMax: {
            // 新建弹窗的input的输入最大长度
            type: Number,
            default: 25
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const state = reactive({
            arr: [],
            newitem: '',
            showDialog: false,
            keyword: '',
            query: ''
        })
        const select = ref(null)
        const chooseData = (e, data) => {
            // 选取数据
            if (data[props.prop.id] == -1) {
                e.stopPropagation()
                return false
            }
            select.value.select.blur()
            if (data[props.prop.id] == 0) {
                state.showDialog = true
                state.newitem = ''
                return false
            }
            state.keyword = data[props.prop.id]
            state.query = data[props.prop.label]
            emit('choose', data)
        }
        const formatData = () => {
            return state.arr = [{ [props.prop.id]: -1, [props.prop.label]: props.tipInfo }, ...props.options, { [props.prop.id]: 0, [props.prop.label]: '其他' }]
        }
        const getData = (query) => {
            if(query.length > 3 || query.length == 0){
                props.remoteMethod(query || state.query)
            }
        }
        const confirm = () => {
            state.query = state.newitem
            state.keyword = state.newitem
            state.showDialog = false
            emit('choose', { [props.prop.id]: '', [props.prop.label]: state.newitem })
        }

        watch(() => props.options, () => {
            state.loading = false
            formatData()
        }, { deep: true, immediate: true })

        onBeforeMount(() => {
            formatData()
        })

        const data = toRefs(state)
        return {
            ...data,
            select,
            chooseData,
            formatData,
            confirm,
            getData

        }
    }
}
</script>
<style lang="scss">
.nd-pc-select-newitem-popper.el-select-dropdown{
    .el-select-dropdown__item{
        font-size:14px;color:#333;
    }
    .el-select-dropdown__item:first-child{
        font-size:12px;color:#ffa800;
    }
    .hover.el-select-dropdown__item:first-child {
        background-color: transparent;
    }
}
</style>
<style scoped lang="scss">
.nd-pc-select-newitem {

    :deep(.nd-select){
        width: 100%!important;
    }
    .form-dialog {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 320px;
        border: 5px;
        // background-color: #cfcfcf;
        background-color: #fff;
        border-radius: 5px;
        overflow: hidden;
        z-index: 99;
        box-shadow: 0px 2px 10px rgba(218, 218, 218, 0.4);

        .content {
            padding: 20px;

            p {
                max-height: 124px;
                white-space: normal;
                word-break: break-all;
                word-wrap: break-word;
                color: #333;
                font-size: 17px;
                line-height: 32px;
                text-align: center;

            }

            input {
                margin: 15px 0;
                padding: 6px 0;
                height: 40px;
                line-height: 38px;
                border: 1px solid #e7e7e7;
                border-radius: 5px;
                font-size: 16px;
                padding: 0 6px;
                box-sizing: border-box;
                width: 100%;
                display: block;
                margin: 15px 0;
            }
        }

        .btn {
            display: flex;
            border-top: 1px solid #d6d6da;

            &>span {
                flex: 1;
                display: inline-block;
                text-align: center;
                height: 55px;
                line-height: 55px;
                color: #007aff;
                font-size: 18px;
                box-sizing: border-box;
                cursor: pointer;
                // border-top: 1px solid #fff;

            }

            &>span:last-child {
                // border-left: 1px solid #fff;
                border-left: 1px solid #d6d6da;
            }
        }
    }
}
</style>