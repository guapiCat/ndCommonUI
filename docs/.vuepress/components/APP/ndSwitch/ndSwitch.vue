<template>
    <div class="tabtitconter">

        <div class="title">自定义图标开关：{{ data.check }}</div>
        <ndSwitch v-model="data.check" :size="data.size">
            <template #node>
                <svg-icon color="red" iconName="icon-icon-Check" v-if="data.check.checked"></svg-icon>
                <svg-icon color="red" iconName="icon-icon-Close" v-else></svg-icon>
            </template>
        </ndSwitch>

        <div class="title">30px开关</div>

        <ndSwitch v-model="data.check" size="30px" @change="switchChange">
        </ndSwitch>
    </div>
</template>
  
<script setup>
import { reactive } from 'vue';
import ndSwitch from '../../../../../src/packages/APP/nd-switch/index.js';
import svgIcon from '../../../../../src/components/SvgIcon.vue';
const data = reactive({
    check: {
        checked: false
    },
    size: '21px'  
})
const switchChange = (val) => {
    console.log('开关2切换====', val);
}
</script>

<style scoped>
.tabtit {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 600;
    color: #ccc;
    border-top: 1px solid #369;
    line-height: 26px;
    height: 26px;
}

.tabtit:nth-child(1) {
    border-top: none
}
.title {
    font-size: 14px;
    margin: 20px 0 10px 0;
}
</style>