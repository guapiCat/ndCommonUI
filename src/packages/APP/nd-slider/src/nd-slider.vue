<template>
    <div class="nd-slider-top-left-content">{{ props.topLeftContent }}</div>
    <div class="nd-slider-top-right-content">{{ props.topRightContent }}</div>
    <br style="clear: both;">
    <div class="nd-slider">
        <div v-if="props.leftContent!=''" class="slider-content">{{ props.leftContent }}</div>
        <div v-else-if="props.leftIcon!=''" class="slider-content"><van-icon :name="props.leftIcon"
                :size="16"/></div>
                <div v-else>
                    <slot name="left-icon"></slot>
                </div>
                
        <div class="nd-slider-content" :class="{'nd-slider-content-padding':props.leftContent!=''||props.rightContent!=''||props.rightIcon!=''||props.leftIcon!=''}">
            <div style="position: relative;">
                <div class="nd-slider-step-dott-content" >
                    <div v-show="showStepDott" v-for="i in (max - min) / step + 1" :key="i" class="nd-slider-step-dott">
                        <div class="nd-slider-step-dott-info" :style="{'backgroundColor':(props.disabled?props.disabledColor:props.activeColor)}"></div>
                    </div>
                </div>
                <van-slider v-bind="$attrs" v-on="$attrs" :range="range" :step="step" 
                :active-color="props.disabled?props.disabledColor:props.activeColor" 
                :inactive-color="props.inactiveColor"
                v-model="data.value" :max="max" :min="min" :disabled="disabled">
                    <template #button v-if="slots.button">
                        <div @mouseover="showToolTip(0)" @mouseleave="hideToolTip(0)" @touchstart="showToolTip(0)" @touchend="hideToolTip(0)"><slot name="button"></slot></div>
                    </template>
                    <template #left-button v-if="slots['left-button']">
                        <div @mouseover="showToolTip(1)" @mouseleave="hideToolTip(1)" @touchstart="showToolTip(1)" @touchend="hideToolTip(1)"><slot name="left-button"></slot></div>
                    </template>
                    <template #right-button v-if="slots['right-button']">
                        <div @mouseover="showToolTip(2)" @mouseleave="hideToolTip(2)" @touchstart="showToolTip(2)" @touchend="hideToolTip(2)"><slot name="right-button"></slot></div>
                    </template>
                </van-slider>
                <div v-show="data.showToolTip && showToolTip" class="nd-slider-tooltip-content"  ref="tooltip"
                    :style="'left:' + (data.sliderLeft) + '%'">
                    <div class="nd-slider-tooltip">{{ data.showValue }}</div>
                    <div class="nd-slider-tooltip nd-slider-arrow-content">
                        <div class="nd-slider-arrow"></div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="props.rightContent!=''" class="slider-content">{{ props.rightContent }}</div>
        <div v-else-if="props.rightIcon!=''" class="slider-content"><van-icon :name="props.rightIcon"
                :size="16"/></div>
                <slot name="right-icon"></slot>
    </div>
</template>
<script setup>
import { defineEmits, nextTick, reactive, defineProps, watch, ref, useSlots } from "vue";
const tooltip = ref(null);
const slots = useSlots();
const props = defineProps({
    'left-content': {
        type: String,
        default: ""
    },
    'right-content': { //当前步骤对应的索引值
        type: String,
        default: ""
    },
    'left-icon': {
        type: String,
        default: ""
    },
    'right-icon': { //当前步骤对应的索引值
        type: String,
        default: ""
    },
    'top-left-content': {
        type: String,
        default: ""
    },
    'top-right-content': { //当前步骤对应的索引值
        type: String,
        default: ""
    },
    'active-color': { //当前步骤对应的索引值
        type: String,
        default: "#1780e3"
    },
    showStepDott: {
        type: Boolean,
        default: false
    },
    range: {
        type: Boolean,
        default: false
    },
    step: {
        type: [Number, String, Array],
        default: 1
    },
    max: {
        type: Number,
        default: 100
    },
    min: {
        type: Number,
        default: 0
    },
    modelValue: {
        // v-model
        type: [String, Number, Array],
        required: false,
        default: ''
    },
    showToolTip:{
        type: Boolean,
        default: true
    },
    disabled:{
        type: Boolean,
        default: false
    },
    disabledColor:{
        type: String,
        default: "#C1CBDB"
    },
    'inactive-color':{
        type: String,
        default: "#E4E7ED"
    }
    
});
const emit = defineEmits(['update:modelValue']);
// 页面数据
const data = reactive({
    value: 0,
    sliderLeft: 0,
    showToolTip: false,
    showValue:0
});
!!props.modelValue && (data.value = props.modelValue)
if(!props.range){
    data.showValue = data.value;
}
data.sliderLeft = data.value / (props.max - props.min) * 100
console.log('data.sliderLeft' + data.sliderLeft);

watch(() => data.value, (newVal,oldVal) => {
    emit('update:modelValue', data.value)
    console.log('newVal =' + typeof(newVal));
    console.log('oldVal =' + oldVal);
    if(!props.range){
        data.sliderLeft = data.value / (props.max - props.min) * 100
        data.showValue = data.value;
        console.log('data.sliderLeft1' + data.sliderLeft);
    }else{
        if(newVal[0] == oldVal[0]){
            data.sliderLeft = newVal[1] / (props.max - props.min) * 100
            data.showValue = newVal[1];
        }else{
            data.showValue = newVal[0];
            data.sliderLeft = newVal[0] / (props.max - props.min) * 100
        }
        console.log('data.sliderLeft1' + data.sliderLeft);
    }
})

// 页面加载完成
nextTick(() => {
})

const showToolTip = (type) => {
    data.showToolTip = true;
    if(type == 0){
        data.sliderLeft = data.value / (props.max - props.min) * 100
    }else if(type == 1){
        data.sliderLeft = data.value[0] / (props.max - props.min) * 100
        data.showValue = data.value[0];
    }else if(type == 2){
        data.sliderLeft = data.value[1] / (props.max - props.min) * 100
        data.showValue = data.value[1];
    }
}

const hideToolTip = (type) => {
    data.showToolTip = false;
}


</script>
<style scoped>
.nd-slider {
    position: relative;
    display: flex;
    font-size: var(--van-slider-font-size);
    color: var(--van-slider-content-color);;
}

.slider-content{
    padding-top: 3px ;
}
.nd-slider-step-dott-content {
    position: relative;
    display: flex;
}

.nd-slider-step-dott:last-child {
    position: absolute;
    right: 0px;
}

.nd-slider-step-dott {
    position: relative;
    top: -8px;
    float: left;
    flex: 1;
}



.nd-slider-step-dott-info {
    width: 2px;
    height: 2px;
    border-radius: 50%;
}

.nd-slider-content {
    flex: 1;
    position: relative;
}
.nd-slider-content-padding {
    padding: var(--van-slider-padding-base) 20px 0 20px;
}

.nd-slider-top-left-content {
    float: left;
    left: 0;
    font-size: var(--van-slider-font-size);
    color: var(--van-slider-content-color);
    padding-bottom: var(--van-slider-padding-base);
}

.nd-slider-top-right-content {
    float: right;
    left: 0;
    font-size: var(--van-slider-font-size);
    color: var(--van-slider-content-color);
    padding-bottom: var(--van-slider-padding-base);
}


.nd-slider-tooltip-content{
    position: relative;
    left: 50%;
}
.nd-slider-tooltip {
    position: absolute;
    background: black;
    width: auto;
    padding: 5px var(--van-slider-padding-base) 5px var(--van-slider-padding-base);
    border-radius: 5px;
    top: -45px;
    min-width: 35px;
    transform: translateX(-50%);
    text-align: center;
    color: #fff;
    z-index: 20;
}

.nd-slider-arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    background: black;
    bottom: -3px;
    transform: rotate(45deg);
    left: -5px;
    
}
.nd-slider-arrow-content{
    padding: 0;
    min-width: 10px;
    top: -20px;
    transform: none;
    z-index: 10;
}

</style>