<template>
    <div v-if="props.textColor != ''" class="nd-circle" >
        <van-circle v-bind="$attrs" v-on="$attrs" >
        <template #default >
            <div class="nd-circle-text-color" :style="{'color':props.textColor}">{{text}}</div>
        </template>
        </van-circle>
    </div>
    <div v-else-if="inactive" class="nd-circle-inactive">
        <van-circle v-bind="$attrs" v-on="$attrs" :text="text" layer-color="#F2F3F5" color="#C8C9CC">
        </van-circle>
    </div>
    <div class="nd-circle" v-else>
        <van-circle v-bind="$attrs" v-on="$attrs" :text="text" >
        </van-circle>
    </div>
</template>
<script setup>
import { nextTick, reactive, defineProps } from "vue";
const props = defineProps({
    inactive:{
        type:Boolean,
        default:false
    },
    'text-color':{
        type:String,
        default:''
    },
    text:{
        type:String,
        default:''
    }

});
// 页面数据
const data = reactive({
});

// 页面加载完成
nextTick(() => {
    
})

</script>
<style scoped>

.nd-circle-inactive>>>.van-circle .van-circle__text{
    color: var(--van-circle-inactive-color);
}

.nd-circle-text-color{
    position: absolute;
    top: 50%;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 0 var(--van-padding-base);
    color: var(--van-circle-text-color);
    font-weight: var(--van-circle-text-font-weight);
    font-size: var(--van-circle-text-font-size);
    line-height: var(--van-circle-text-line-height);
    transform: translateY(-50%);
}
</style>