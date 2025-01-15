<template>
    <div class="step-content">

        <h3 class="p-conter">样式定制</h3>

        <ndProgress pivot-text="橙色" color="#f2826a" :percentage="25" />
        <br>
        <ndProgress pivot-text="红色" color="#ee0a24" :percentage="50" />
        <br>
        <ndProgress :percentage="75" pivot-text="紫色" pivot-color="#7232dd"
            color="linear-gradient(to right, #be99ff, #7232dd)" />
        <br>
        <h3 class="p-conter">线条粗细</h3>
        <ndProgress :percentage="50" stroke-width="8" />

        <br>
        <h3 class="p-conter">置灰</h3>
        <ndProgress inactive :percentage="50" />

        <h3 class="p-conter">过渡效果</h3>
        <ndProgress :percentage="data.value" />

        <br>
        <ndButton type="primary" @click="add" style="margin-right: 20px;">增加</ndButton>
        <ndButton type="primary" @click="reduce">减少</ndButton>



        <h3 class="p-conter">环形进度条</h3>
        <ndCircle v-model:current-rate="data.currentRate" :rate="30" :speed="100" :text="text" layer-color="#ebedf0" fill="red" text-color="yellow" />

        <h3 class="p-conter">渐变色</h3>
        <ndCircle v-model:current-rate="data.currentRate" :rate="data.rate" :color="gradientColor" text="渐变色"
            layer-color="#ebedf0" />

            <h3 class="p-conter">置灰</h3>
        <ndCircle v-model:current-rate="data.currentRate" :rate="data.rate" inactive text="置灰"
             />
    </div>
</template>
  
<script setup>
import { reactive, ref, computed } from 'vue';
import ndProgress from '../../../../../src/packages/APP/nd-progress/index.js';
import ndButton from '../../../../../src/packages/APP/nd-button/src/nd-button.vue';
import ndCircle from '../../../../../src/packages/APP/nd-circle/index.js';

const data = reactive({
    value: 20,
    currentRate: 30,
    rate: 10,
})

const gradientColor = {
    '0%': '#3fecff',
    '100%': '#6149f6',
};

const text = computed(() => data.currentRate.toFixed(0) + '%');


const add = () => {
    if (data.value < 100) {
        data.value = data.value + 10;
    }
}

const reduce = () => {
    if (data.value > 0) {
        data.value = data.value - 10;
    }
}
</script>

<style lang="scss" scoped>
.p-conter {
    font-size: 14px;
    color: #666666;
}

.error {
    color: var(--nd-warning-color);
}
</style>