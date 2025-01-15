<template>
    <div class="ndStepper">
        <van-stepper v-model="porps.stepper.value" v-on="$attrs" v-bind="$attrs" />
    </div>
</template>
<script setup>
import { reactive, nextTick, defineProps } from "vue";
const porps = defineProps({
    stepper: {
        type: Object,
        default: {
            value: 10
        }
    }
});
// 页面数据
const data = reactive({
});
// 页面加载完成
nextTick(() => {

})
</script>
<style lang="scss" scoped>
@import '../../common.scss';
.ndStepper ::v-deep .van-stepper__minus {
    background: rgba(0, 0, 0, 0) !important;
}

.ndStepper ::v-deep .van-stepper__plus {
    background: rgba(0, 0, 0, 0) !important;
}

.ndStepper ::v-deep .van-stepper__input {
    background: rgba(0, 0, 0, 0) !important;
}

.ndStepper ::v-deep .van-stepper--round .van-stepper__plus {
    background: $nd-primary-color !important;
}

</style>