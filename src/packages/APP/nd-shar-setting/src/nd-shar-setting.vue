<template>
    <!-- 分享设置 -->
    <div class="nd-sharing">
        <div class="nd-s-topblank"></div>
        <div class="nd-s-title" v-if="showTitle" @click.stop="clickTitle">
            <van-image width="56" height="56" radius="8" fit="fill" :src="props.viewConfig.captureImgUrl ? props.viewConfig.captureImgUrl : props.viewConfig.typeImgSrc" />
            <div class="nd-s-tCenter">
                <div class="nd-stc-title">
                    {{ props.viewConfig.modelName }}
                </div>
                <div class="nd-stc-describe">
                    {{ props.viewConfig.beginTime }}<span style="margin-left: 12px;">{{ props.viewConfig.size }}</span>
                </div>
            </div>
            <template v-if="slots.iconFont">
                <div class="nd-s-right">
                    <slot name="iconFont">

                    </slot>
                </div>
            </template>
        </div>
        <div class="nd-s-line" v-if="showTitle"></div>
        <div class="nd-s-options">
            <!-- 默认插槽 -->
            <template v-if="slots.default">
                <slot name="default"></slot>
            </template>
            <div v-else class="nd-s-options-conter" :style="!showTitle && 'padding-top:0'">
                <nd-grid :column-num="props.subcontract.length == 2 ? 2 : 3" :gutter="12">
                    <nd-grid-item @click="createShareLink(item)" v-for="(item, index) in props.subcontract" :key="index"
                        :icon="item.icon" :title="item.title" :text="item.text"></nd-grid-item>
                </nd-grid>
            </div>
        </div>
        <div class="nd-s-button">
            <template v-if="slots.button">
                <slot name="button"></slot>
            </template>
        </div>
    </div>
</template>
<script setup>
import { defineEmits, defineProps, watch, useSlots, reactive } from "vue";
import ndGrid from '../../nd-grid/index';
import ndGridItem from '../../nd-grid-item/index';
const slots = useSlots()
const props = defineProps({
    viewConfig: {
        type: Object,
        default: () => { },
    },
    subcontract: {
        type: Array,
        default: [
            {
                icon: '',
                title: '复制链接',
                key: 'link'
            },
            {
                icon: '',
                title: '二维码',
                key: 'qrcode'
            },
            // {
            //     icon: '',
            //     title: '联系人',
            //     key: 'contact'
            // },
            // {
            //     icon: '',
            //     title: '微信',
            //     key: 'wx'
            // },
            // {
            //     icon: '',
            //     title: 'QQ',
            //     key: 'qq'
            // },
            // {
            //     icon: '',
            //     title: '朋友圈',
            //     key: 'pyq'
            // }
        ]
    },
    showTitle: {
        // 是否显示顶部内容
        type: Boolean,
        default: true
    }
});

const emit = defineEmits(["confirmShar", "clickTitle"]);

const createShareLink = (data) => {
    emit('confirmShar', data)
}

const clickTitle = () => {
    emit('clickTitle', props.viewConfig)
}


</script>
<style lang="scss" scoped>
.nd-sharing {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    .nd-s-title {
        height: 56px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 16px;
        gap: 12px;
        align-self: stretch;
        position: relative;

        .van-image {
            background: #EFEFEF;
        }

        .nd-s-tCenter {
            margin-left: 12px;
            flex: 1;
            height: 48px;
            display: flex;
            flex-direction: column;
            padding: 0px;
            gap: 8px;
            flex-grow: 1;
            overflow: hidden;

            .nd-stc-title {
                height: 22px;
                font-size: 14px;
                font-weight: normal;
                line-height: 22px;
                letter-spacing: 0px;
                color: #333333;
                width: 100%;
                overflow: auto;
                white-space: nowrap;
            }

            .nd-stc-describe {
                height: 18px;
                font-size: 12px;
                font-weight: normal;
                line-height: 18px;
                letter-spacing: 0px;
                color: #999999;
            }
        }

        .nd-s-right {
            // position: absolute;
            // top: 16px;
            // right: 16px;
            width: 24px;
            height: 24px;
            margin-left: 12px;
        }
    }

    .nd-s-line {
        height: 24px;
        width: calc(100% - 32px);
        margin: 0 auto;
        border-bottom: 1px solid rgba(51, 51, 51, 0.05);
    }

    .nd-s-topblank {
        height: 48px;
    }

    .nd-s-options {
        .nd-s-options-conter {
            padding-top: 8px;
        }
    }

    .nd-s-button {
        // height: 82px;
    }
}
</style>
<style scoped>
.nd-sharing>>>.nd-grid {
    background: #FFFFFF !important;
}

.nd-sharing>>>.van-grid {
    background: #FFFFFF !important;
}

.nd-sharing>>>.van-grid-item {
    background: #FFFFFF !important;
}

.nd-sharing>>>.van-grid-item__content {
    background: rgba(51, 51, 51, 0.05) !important;
    border-radius: 8px !important;
    overflow: hidden;
}
</style>
