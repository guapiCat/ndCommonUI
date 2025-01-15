<template>
    <div class="comp-app-radio-item">
        <van-radio v-bind="attrs" v-on="attrs"  checked-color="#1880E3">
        <template #default v-if="!!slots.default">
            <slot></slot>
        </template>
    </van-radio>
    </div>
</template>

<script>
export default {
    props: {
    },
    setup(props, { emit, attrs, slots }) {
        return {
            slots,
            attrs
        }
    }
}

</script>

<style scoped lang="scss">
.comp-app-radio-item {
    :deep(.van-radio) {
        .van-icon {
            width: 18px;
            height: 18px;
            font-size: 0.6em;
            line-height: 1.45
        }
        .van-radio__icon--checked + .van-radio__label{
            color: #1880E3
        }
        .van-radio__icon--disabled + .van-radio__label{
            color: #DDD;
        }
        .van-radio__icon--disabled.van-radio__icon--checked{
            .van-badge__wrapper {
                color: #fff!important;
                background-color: #DDD
            }
        }
        .van-radio__icon--square.van-radio__icon{
            border-radius: 2px;
            overflow: hidden;
            .van-badge__wrapper{
                border-radius: 2px;
                overflow: hidden;
            }
        }
        .van-radio__label {
            margin-left: 9px;
            font-family: Source Han Sans CN;
            font-size: 14px;
            line-height: 22px;
            letter-spacing: 0px;
            color: #333333;
        }

    }
}
</style>