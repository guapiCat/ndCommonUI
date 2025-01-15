<template>
    <section :class="`nd-select-business ${propClass}`">
        <div class="input-content data-formLst" ref="unitSelect">
            <div class="input"
                :style="(showLoading || showEle) ? 'border-bottom-left-radius: 0;border-bottom-right-radius: 0;' : ''">
                <input @input="inputChange" type="text" :placeholder="placeholder" v-model.trim="keyword" maxlength="25">
                <a @click="tagOptions" v-show="showOption" class="input-arrow"></a>
            </div>
            <div class="unit-select" v-show="showEle">
                <div class="unit-box" :style="!!maxHeight ? `max-height:${maxHeight}px!important` : ''">
                    <div class="select-ts" v-show="showEle">{{ tipInfo }}</div>
                    <ul v-for="(item, i) in companyArr">
                        <li :key="item[propKey.id]" @click="chooseData(item)">
                            {{ item[propKey.label] }}</li>
                    </ul>
                </div>
            </div>
            <div class="unit-select" style="display: block;" v-show="showLoading">
                <div class="unit-box">
                    <ul style="display: block;">
                        <img src="./status-loading.gif" class="pic-loading" width="40">
                    </ul>
                </div>
            </div>
        </div>
        <div class="form-dialog" v-show="dialogVisible">
            <div class="content">
                <p>{{ formTitle }}</p>
                <input v-model="form.label" type="text" :placeholder="formPlaceholder" :maxlength="inputMax">
                <!--<div class="ts-word">请输入单位</div>-->
            </div>
            <div class="btn"><span @click="dialogVisible = false; companyShodow = false">取消</span><span
                    @click="confirm">确认</span>
            </div>
        </div>
    </section>
</template>

<script>
import { toRefs, ref, reactive, onMounted, onBeforeMount, watch } from 'vue';
import { onClickOutside } from "@vueuse/core";
import { showToast } from '../../nd-toast/index'
export default {
    props: {
        placeholder: {
            type: String,
            default: '请输入名称(至少三个字)'
        },
        tipInfo: {
            // 提示信息
            type: String,
            default: '如以下选项没有您需要的数据，请继续输入更多文字查找'
        },
        httpReq: {
            // 获取数据模式1 -- 传入请求, 组件内部请求处理数据
            type: Function,
            default: null
        },
        httpFn: {
            // 获取数据模式2 -- 传入请求方法, 方法返回promise对象, resolve为渲染数据
            type: Function,
            default: () => {
                return Promise.resolve([])
            }
        },
        prop: {
            // 自定义数据显示的name, 和唯一索引id 字段
            type: Object,
            default: { id: 'id', label: 'label' }
        },
        paramKey: {
            // 如果使用httpReq模式, 接口参数使用的字段, 默认使用name为key
            type: String,
            default: ''
        },
        moreParam: {
            // 如果使用httpReq模式, 需要传入更多其他参数, 可以使用moreParam控制
            type: Object,
            default: {}
        },
        formPlaceholder: {
            // 表单输入框的placeholder
            type: String,
            default: '请输入',
        },
        inputMax: {
            // 表单输入input的最大输入值
            type: Number,
            default: 25
        },
        propClass: {
            // 自定义组件类名
            type: String,
            default: ''
        },
        maxHeight: {
            type: String,
            default: 0
        },
        formTitle: {
            // 新建弹窗的显示标题
            type: [String, Number],
            default: '请输入名称'
        }
    },
    emits: ['choose', 'search'],
    setup(props, { emit }) {
        const state = reactive({
            showOption: false,
            showLoading: false,
            showEle: false,
            keyword: '',
            companyArr: [],
            propKey: {
                id: 'id',
                label: 'label'
            },
            dialogVisible: false,
            customName: '',
            companyShodow: false,
            form: {
                id: 0,
                label: ''
            },
            isEditName: false,
            focusName: false,
            userInputStatus: false,



            inputStatus: false,
            timer: null
        })
        const unitSelect = ref()
        const tagOptions = function () {
            if (!state.showEle && state.keyword.length >= 3) {
                getData();
                state.showEle = true;
            } else {
                state.showEle = false;
                state.companyArr = [];
            }
        }
        const inputChange = () => {
            if (!!state.timer) {
                clearTimeout(state.timer)
                state.timer = null
            }
            if (state.keyword.length > 3) {
                // 只有输入的值大于3个才做请求

                state.timer = setTimeout(() => {
                    console.log('search')
                    state.showEle = true;
                    state.showOption = true;
                    getData()
                }, 400)
            } else {
                state.showEle = false;
                state.showOption = false;
            }
        }
        const confirm = function () {
            if (state.form.label == "") {
                showToast({
                    message: '请输入内容',
                    position: 'mid'
                })
                return;
            }
            state.isEditName = true;
            state.focusName = true;
            state.showEle = false;
            state.showOption = false;
            state.keyword = state.form.label;
            state.dialogVisible = false;
            state.companyShodow = false;
            emit('choose', { [state.prop.id]: '', [state.prop.label]: state.form.label })
        }
        const chooseData = function (item) {
            if (item[state.propKey.id] == 0) {
                state.form.label = ''
                state.form.id = 0
                state.dialogVisible = true;
                state.companyShodow = true;
                state.showEle = false;

            } else {
                state.keyword = item[state.propKey.label];
                state.focusName = true;
                state.showEle = false;
                emit('choose', item)
            }
        }
        const formatData = (arr) => {
            if (state.keyword.length >= 3) {
                state.showEle = true
            }
            let data = []
            arr.forEach((item, index) => {
                data.push({
                    ...item,
                    [state.propKey.id]: item[state.propKey.id],
                    [state.propKey.label]: item[state.propKey.label],
                })
            })
            data.push({
                [state.propKey.id]: 0,
                [state.propKey.label]: '其他',
            })
            return data
        }
        const getData = async () => {
            try {
                // 获取数据
                state.showLoading = true
                let res = []
                if (!!props.httpReq) {
                    let params = {
                        // 参数的key可传入, 默认name,
                        [props.paramKey || 'name']: state.keyword
                    }
                    if (!!props.moreParam) {
                        // 如果有更多其他需要传入的参数, 可通过moreParam控制
                        params = { ...params, ...props.moreParam }
                    }
                    let reqRes = await props.httpReq(params)
                    state.showLoading = false;
                    let code = reqRes.data.data ? reqRes.data.status.code : reqRes.status.code
                    if (code == 1) {
                        res = reqRes.data.data || reqRes.data
                        state.companyArr = []
                        state.companyArr = formatData(res)
                    }
                } else {
                    res = await props.httpFn(state.keyword)
                    state.showLoading = false;
                    state.companyArr = []
                    state.companyArr = formatData(res)
                }
            } catch (err) {
                console.log(err, 'err')
                state.showLoading = false;
            }
        }
        onBeforeMount(() => {
            state.propKey = { ...state.propKey, ...props.prop }
            getData()
            onClickOutside(unitSelect, () => {
                state.showEle = false
            });
        })


        const data = toRefs(state)
        return {
            ...data,
            tagOptions,
            chooseData,
            getData,
            inputChange,
            confirm,
            unitSelect
        }
    }
}
</script>

<style scoped lang="scss">
.nd-select-business {
    .data-formLst {
        position: relative;

        li {
            list-style: none;
        }

        .unit-select {
            width: 100%;
            position: absolute;
            top: 43px;
            left: 0px;
            box-sizing: border-box;
            z-index: 1;

            .unit-box {
                background: #fff;
                border: 1px solid #ecebeb;
                max-height: 340px;
                overflow: auto;

                .pic-loading {
                    display: block;
                    margin: 12px auto;
                }

                .select-ts {
                    padding: 7px 10px;
                    font-size: 12px;
                    color: #ffa800;
                }

                li {
                    font-size: 14px;
                    color: #333;
                    padding: 12px 10px;
                    line-height: 1.4;
                    height: auto;
                    border-top: 1px solid #ecebeb;
                    border-bottom: none;
                }

                li.select {
                    background: #f6f6f6;
                }
            }
        }

        .input {
            border-top: 1px solid #e6e6e6;
            border-bottom: 1px solid #e6e6e6;
            background: #fff;
            padding: 0 7px;
            height: 42px;
            position: relative;
            margin-top: 5px;

            .input-arrow {
                display: inline-block;
                width: 24px;
                height: 26px;
                background: url(./input-arrow.png) no-repeat center center;
                -webkit-background-size: 16px 9px;
                background-size: 16px 9px;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 5px;
            }

            input {
                width: 100%;
                height: 42px;
                line-height: 42px\9;
                color: #333;
                font-size: 14px;
                font-family: 'Microsof Yahei';
            }
        }

        .input {
            border: 1px solid #e6e6e6;
            border-radius: 4px;

            input {
                border: none;
                width: calc(100% - 25px) !important;
            }
        }


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