<template>
    <div class="step-content">
        <h4>体验完整功能请将浏览器切换为移动端模式</h4>
        <h3 class="p-conter">基础样式</h3>
        <ndSlider v-model="data.sliderV1" @change="onChange">
            <template #button>
                <div class="custom-button">{{ data.sliderV1 }}</div>
            </template>
        </ndSlider>
        <br>

        <h3 class="p-conter">左右有数字</h3>
        <ndSlider left-content="0" right-content="100" v-model="data.sliderV2" @change="onChange">
            <template #button>
                <div class="custom-button">{{ data.sliderV2 }}</div>
            </template>
        </ndSlider>
        <br>

        <h3 class="p-conter">上方有数字</h3>
        <ndSlider top-left-content="0" top-right-content="100" v-model="data.sliderV3" @change="onChange">
            <template #button>
                <div class="custom-button">{{ data.sliderV3 }}</div>
            </template>
        </ndSlider>

        <h3 class="p-conter">左右有图标</h3>
        <ndSlider left-icon="volume" right-icon="volume" v-model="data.sliderV3" @change="onChange">
            <template #button>
                <div class="custom-button">{{ data.sliderV3 }}</div>
            </template>
        </ndSlider>

        <h3 class="p-conter">左右自定义图标</h3>
        <ndSlider v-model="data.sliderV3" @change="onChange">
            <template #button>
                <div class="custom-button" >{{ data.sliderV3 }}</div>
            </template>
  
    <template #left-icon>
        <div class="custom-button1" style="margin-top: -15px;margin-right: 10px;"><img src="./slider.png"></div>
    </template>
            <template #right-icon>
                <div class="custom-button1" style="margin-top: -15px;margin-left: 10px;"><img src="./slider.png"></div>
            </template>
        </ndSlider>

        



        <h3 class="p-conter">显示步长 小圆点</h3>
        <ndSlider left-content="0" right-content="100" v-model="data.sliderV4" @change="onChange" step="10" show-step-dott>
            <template #button>
                <div class="custom-button">{{ data.sliderV4 }}</div>
            </template>
        </ndSlider>

        <h3 class="p-conter">自定义图标按钮</h3>
        <ndSlider left-content="0" right-content="500" v-model="data.sliderV5" @change="onChange" :max="500">
            <template #button>
                <div class="custom-button1"><img src="./slider.png"></div>
            </template>
        </ndSlider>


        <h3 class="p-conter">禁用滑块</h3>
        <ndSlider left-content="0" right-content="100" v-model="data.sliderV6" @change="onChange" disabled step="10" show-step-dott>
            <template #button>
                <div class="custom-button1"><img src="./slider.png"></div>
            </template>
        </ndSlider>
        
        <h3 class="p-conter">左右滑块</h3>
        <ndSlider left-content="0" right-content="100" v-model="data.sliderV11" @change="onChange1"
            range>
            <template #left-button>
                <div class="custom-button1"><img src="./slider.png"></div>
            </template>
            <template #right-button>
                <div class="custom-button1"><img src="./slider.png"></div>
            </template>
        </ndSlider>

        <h3 class="p-conter">左右滑块 上方有数字</h3>
        <ndSlider top-left-content="0" top-right-content="1800+" v-model="data.sliderV12" @change="onChange1"
            range :max="1800">
            <template #left-button>
                <div class="custom-button1"><img src="./slider.png"></div>
            </template>
            <template #right-button>
                <div class="custom-button1"><img src="./slider.png"></div>
            </template>
        </ndSlider>

        <h3 class="p-conter">左右滑块 禁用</h3>
        <ndSlider top-left-content="0" top-right-content="1800+" v-model="data.sliderV13" @change="onChange1"
            range :max="1800" disabled step="180" show-step-dott>
            <template #left-button>
                <div class="custom-button1"><img src="./slider.png"></div>
            </template>
            <template #right-button>
                <div class="custom-button1"><img src="./slider.png"></div>
            </template>
        </ndSlider>
    </div>
</template>
  
<script setup>
import { reactive, ref } from 'vue';
import ndSlider from '../../../../../src/packages/APP/nd-slider/index.js';
// const value = ref(150);
const value1 = ref([10, 50]);
const onChange = (value1) => {
    console.log('当前值1：' + value1)
};
const onChange1 = (value) => console.log('当前值：' + value);
const data = reactive({
    sliderV1:50,
    sliderV2:40,
    sliderV3:30,
    sliderV4:60,
    sliderV5:20,
    sliderV6:40,
    sliderV7:30,
    sliderV8:40,
    sliderV9:50,
    sliderV10:50,
    sliderV11:[10,50],
    sliderV12:[80,250],
    sliderV13:[90,300],
    sliderV14:[10,50],
    sliderV15:[10,50],
    sliderV16:[10,50],
})


</script>

<style lang="scss" scoped>
.p-conter {
    font-size: 14px;
    color: #666666;
}

.error {
    color: var(--nd-warning-color);
}

.custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: var(--van-primary-color);
    border-radius: 100px;
}

.custom-button1 {
    width: 30px;
    height: 30px;
    cursor: pointer;
}

.custom-button1 img{
    cursor: pointer;
}
</style>