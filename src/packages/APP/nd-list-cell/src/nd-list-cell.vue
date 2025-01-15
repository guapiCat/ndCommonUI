<template>
    <div class="nd-list-cell-page">
        <!-- 单行单元格 -->
        <div class="nd-list-cell-box" v-if="type === 'cell'">
            <div class="nd-list-cell" v-for="(item, index) in list" :key="index" @click="onClick(item, index)">
                <p>{{item.title}}</p>
            </div>
        </div>
        <!-- 双行单元格 -->
        <div class="nd-list-dbcell-box" v-if="type === 'dbcell'">
            <div class="nd-list-dbcell" v-for="(item, index) in list" :key="index" @click="onClick(item, index)">
                <p>{{item.title}}</p>
            </div>
        </div>
        <!-- 图标+文本 -->
        <div class="nd-list-mix-box" v-if="type === 'mixText'">
            <div class="nd-list-mix" v-for="(item, index) in list" :key="index" @click="onClick(item, index)">
                <div class="nd-list-mix-left">
                    <van-image :class="[item.imageClass]" :src="item.src" width="16" height="16" :fit="item.fit ? item.fit : 'contain'" :lazy-load="listImageLazy" alt="" />
                    <span>{{item.title}}</span>
                </div>
                <div class="nd-list-mix-right">
                    <span>{{item.text}}</span>
                    <img src="./images/arrow.png" alt="">
                </div>
                <template v-if="slots.default">
                    <slot name="default" :scope="item" :index="index"></slot>
                </template>
            </div>
        </div>
        <!-- 图标+2行文本 -->
        <div class="nd-list-mix2-box" v-if="type === 'mixText2'">
            <div class="nd-list-mix2" v-for="(item, index) in list" :key="index" @click="onClick(item, index)">
                <div class="nd-list-mix2-left">
                    <van-image :class="[item.imageClass]" :src="item.src" :fit="item.fit ? item.fit : 'contain'" :lazy-load="listImageLazy" alt="" />
                    <div class="nd-list-mix2-text-box">
                        <p class="nd-list-mix2-title text-allipsis">{{item.title}}</p>
                        <p class="nd-list-mix2-text text-allipsis">{{item.text}}</p>
                    </div>
                </div>
                <div class="nd-list-mix2-right">
                    <img src="./images/arrow.png" alt="">
                </div>
                <template v-if="slots.default">
                    <slot name="default" :scope="item" :index="index"></slot>
                </template>
            </div>
        </div>
        <!-- 单行卡片1 -->
        <div class="nd-list-card-box" v-if="type === 'card'">
            <div class="nd-list-card" v-for="(item, index) in list" :key="index" @click="onClick(item, index)">
                <div class="nd-list-card-left">
                    <van-image :class="[item.imageClass]" :src="item.src" :fit="item.fit ? item.fit : 'contain'" width="44" height="44" :lazy-load="listImageLazy" alt="" />
                    <div class="nd-list-card-text-box">
                        <p class="nd-list-card-title text-allipsis">{{item.title}}</p>
                        <p class="nd-list-card-text text-allipsis">{{item.text}}</p>
                    </div>
                </div>
                <div class="nd-list-card-right">
                    <img src="./images/arrow.png" alt="">
                </div>
                <template v-if="slots.default">
                    <slot name="default" :scope="item" :index="index"></slot>
                </template>
            </div>
        </div>
        <!-- 单行卡片2 -->
        <div class="nd-list-card-box2" v-if="type === 'card2'">
            <div class="nd-list-card" v-for="(item, index) in list" :key="index" @click="onClick(item, index)" :class="{ 'select-them': item.selected }">
                <div class="nd-list-card-left">
                    <div class="nd-cad2-img">
                        <van-image :class="[item.imageClass]" :src="item.src" :fit="item.fit ? item.fit : 'contain'" :lazy-load="listImageLazy" />
                    </div>
                    <div class="nd-list-card-text-box">
                        <!-- 标题 占两行 -->
                        <div v-if="!slots.title" class="nd-list-card-title">{{item.title}}</div>
                        <template v-if="slots.title">
                            <slot name="title" :scope="item" :index="index"></slot>
                        </template>

                        <!-- 文本 占一行 -->
                        <div v-if="!slots.text" class="nd-list-card-text">{{item.text}}</div>
                        <template v-if="slots.text">
                            <slot name="text" :scope="item" :index="index"></slot>
                        </template>
                    </div>
                </div>
                <div class="nd-list-card-right" v-if="!slots.right">
                    <img src="./images/arrow.png" alt="">
                </div>
                <template v-if="slots.right">
                    <slot name="right" :scope="item" :index="index"></slot>
                </template>
            </div>
        </div>
        <!-- 双行卡片 -->
        <div class="nd-list-dbcard-box" v-if="type === 'dbcard'">
            <div class="nd-list-dbcard" v-for="(item, index) in list" :key="index" @click="onClick(item, index)" :class="{ 'select-them': item.selected }">
                <van-image :class="[item.imageClass, 'nd-db-img']" :src="item.src" :fit="item.fit ? item.fit : 'contain'" :lazy-load="listImageLazy" alt=""  />
                <div class="nd-list-dbcard-text-box" v-if="!slots.foot">
                    <p v-if="item.title" class="nd-list-dbcard-title text-allipsis">{{item.title}}</p>
                    <p v-if="item.text" class="nd-list-dbcard-text text-allipsis">{{item.text}}</p>
                </div>
                <template v-if="slots.foot">
                    <div class="nd-list-dbcard-text-box">
                        <slot name="foot" :scope="item" :index="index"></slot>
                    </div>
                </template>
                <template v-if="slots.default">
                    <slot name="default" :scope="item" :index="index"></slot>
                </template>
            </div>
        </div>
    </div>
</template>
<script>

import { reactive, toRefs, useSlots } from 'vue';

export default {
  emits: ['click'],
  props: {
    type: { // 列表展示方式 cell-单行单元格 dbcell-双行单元格 mixText-图标+文本 mixText2-图标+2行文本 card-单行卡片 dbcard-双行卡片
        type: String,
        default: ''
    },
    list: { // 列表展示数据 {title: 标题文本, text: 内容文本, src: 图片url}
        type: Array,
        default: []
    },
    listImageLazy: {    // 是否支持懒加载。必须集成了vant的lazy-load才能使用
        type: Boolean,
        default: false,
    },
  },
  setup(props, ctx) {
    const data = reactive({ });
    const slots = useSlots();

    const onClick = (item, index) => {
        ctx.emit('click', item, index);
    }


    const refData = toRefs(data);
    return {
      ...refData,
      onClick,
      slots,
    };
  },
};

</script>
<style lang="scss" scoped>
@import '../../common.scss';
// 单行单元格
.nd-list-cell-box {
    padding: 0 16px;
    background: $nd-white;
    .nd-list-cell {
        height: 44px;
        position: relative;
        p {
            font-size: 14px;
            line-height: 44px;
            color: $nd-cell-color;
        }
    }
    .nd-list-cell::before {
        content: '';
        width: 100%;
        height: 1px;
        background: $nd-cell-line;
        position: absolute;
        left: 0;
        bottom: 0;
        transform: scaleY(.5);
        transform-origin: left bottom;
    }
}
// 双行单元格
.nd-list-dbcell-box {
    background: $nd-white;
    display: flex;
    flex-wrap: wrap;
    .nd-list-dbcell {
        width: 50%;
        height: 44px;
        p {
            font-size: 14px;
            line-height: 44px;
            color: $nd-cell-color;
            text-align: center;
        }
    }
    .nd-list-dbcell:nth-child(odd)::before {
        content: '';
        width: 200%;
        height: 1px;
        background: $nd-cell-line;
        position: absolute;
        left: 0;
        bottom: 0;
        transform: scaleY(.5);
        transform-origin: left bottom;
    }
}
// 图标+文本
.nd-list-mix-box {
    background: $nd-white;
    .nd-list-mix {
        height: 44px;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 16px;
        .nd-list-mix-left {
            display: flex;
            align-items: center;
            img {
                width: 16px;
                height: 16px;
            }
            span {
                height: 20px;
                font-size: 14px;
                line-height: 20px;
                color: $nd-cell-color;
                margin-left: 8px;
            }
        }
        .nd-list-mix-right {
            display: flex;
            align-items: center;
            span {
                height: 20px;
                font-size: 14px;
                line-height: 20px;
                color: $nd-cell-content-color;
            }
            img {
                width: 18px;
                height: 18px;
                margin-left: 8px;
            }
        }
    }
    .nd-list-mix::before {
        content: '';
        width: 100%;
        height: 1px;
        background: $nd-cell-line;
        position: absolute;
        left: 0;
        bottom: 0;
        transform: scaleY(.5);
        transform-origin: left bottom;
    }
}
// 图标+2行文本
.nd-list-mix2-box {
    background: $nd-white;
    .nd-list-mix2 {
        height: 44px;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 11px 16px;
        .nd-list-mix2-left {
            display: flex;
            align-items: center;
            flex: 1;
            img {
                width: 44px;
                height: 44px;
            }
            .nd-list-mix2-text-box {
                margin-left: 8px;
                flex: 1;
                .nd-list-mix2-title {
                    height: 22px;
                    font-size: 14px;
                    line-height: 22px;
                    color: $nd-cell-color;
                }
                .nd-list-mix2-text {
                    height: 20px;
                    font-size: 12px;
                    line-height: 20px;
                    color: $nd-cell-content-color;
                    margin-top: 4px;
                }
            }
        }
        .nd-list-mix2-right {
            img {
                width: 18px;
                height: 18px;
            }
        }
    }
    .nd-list-mix2::before {
        content: '';
        width: 100%;
        height: 1px;
        background: $nd-cell-line;
        position: absolute;
        left: 0;
        bottom: 0;
        transform: scaleY(.5);
        transform-origin: left bottom;
    }
}
// 单行卡片
.nd-list-card-box {
    background: #F1F1F1;
    padding: 14px 16px;
    .nd-list-card {
        height: 72px;
        border-radius: 8px;
        background: $nd-white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 16px;
        margin-bottom: 8px;
        .nd-list-card-left {
            display: flex;
            align-items: center;
            img {
                width: 44px;
                height: 44px;
            }
            .nd-list-card-text-box {
                margin-left: 8px;
                flex: 1;
                .nd-list-card-title {
                    height: 22px;
                    font-size: 14px;
                    line-height: 22px;
                    color: $nd-cell-color;
                }
                .nd-list-card-text {
                    height: 20px;
                    font-size: 12px;
                    line-height: 20px;
                    color: $nd-cell-content-color;
                    margin-top: 4px;
                }
            }
        }
        .nd-list-card-right {
            img {
                width: 18px;
                height: 18px;
            }
        }
    }
}
// 单行卡片样式2
.nd-list-card-box2 {
    background: $nd-white;
    // padding: 0 16px;
    // height: 102px;
    box-sizing: border-box;
    width: 100%;
    cursor: pointer;

    .nd-list-card {
        background: $nd-white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        border-bottom: 1px solid #F5F5F5;
        .nd-list-card-left {
            display: flex;
            align-items: center;
            width: calc(100% - 36px);

            .nd-cad2-img {
                overflow: hidden;
                width: 100px;
                height: 77px;
                border-radius: 8px;
                background: #F5F5F5;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            img {
                max-width: 100%;
                max-height: 100%;
            }
            .nd-list-card-text-box {
                margin-left: 11px;
                flex: 1;
                max-width: calc(100% - 112px);
                .nd-list-card-title {
                    height: 44px;
                    font-size: 14px;
                    color: $nd-cell-color;
                    line-height: 22px;
                    overflow: hidden;
                    -webkit-line-clamp: 2;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                }
                .nd-list-card-text {
                    height: 18px;
                    font-size: 12px;
                    color: $nd-cell-content-color;
                    margin-top: 8px;
                    white-space: nowrap; //文本强制不换行；
                    text-overflow:ellipsis; //文本溢出显示省略号；
                    overflow:hidden; //溢出的部分隐藏；
                }
            }
        }
        .nd-list-card-right {
            img {
                width: 18px;
                height: 18px;
            }
        }
    }

    .select-them {
        background: #EAEAEA;
        .nd-cad2-img {
            background: #F5F5F5;
        }
    }
}
// 双行卡片
.nd-list-dbcard-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #F1F1F1;
    padding: 14px 16px;
    .nd-list-dbcard {
        width: calc(50% - 8px);
        box-sizing: border-box;
        margin-bottom: 16px;
        position: relative;
        .nd-list-dbcard-text-box {
            border-radius: 0 0 8px 8px;
            padding: 8px 10px;
            background: $nd-white;
            .nd-list-dbcard-title {
                height: 22px;
                font-size: 14px;
                color: $nd-cell-color;
                line-height: 22px;
                padding: 2px 0;
            }
            .nd-list-dbcard-text {
                height: 20px;
                font-size: 12px;
                line-height: 20px;
                color: $nd-cell-content-color;
                padding: 2px 0;
            }
        }
    }
    // .nd-list-dbcard:nth-child(odd) {
    //     padding-right: 8px;
    // }
    // .nd-list-dbcard:nth-child(even) {
    //     padding-left: 8px;
    // }
}

.text-allipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.nd-list-mix, .nd-list-mix2, .nd-list-card {
    position: relative;
}
.nd-db-img {
    overflow: hidden;
    border-radius: 8px 8px 0 0;
    height: 98px;
    width: 100%;
    background: rgba(51, 51, 51, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
}
.nd-db-img > img {
    max-width: calc(100% - 10px);
    max-height: calc(100% - 10px);
}
.nd-list-cell-page {
    width: 100%;
    // .van-image {
    //     max-width: 100%;
    //     max-height: 100%;
    // }
}
</style>