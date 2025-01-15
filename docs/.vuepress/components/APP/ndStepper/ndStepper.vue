<template>
    <div class="tabtitconter">
        
        
        <div>方块步进器+1</div>
        <ndStepper style="margin-top: 10px;" :step="data.check1"></ndStepper>
        
        <br />
        <br />
        <div>圆角步进器+0.1</div>
        <ndStepper style="margin-top: 10px;" :step="data.check2" :theme="'round'"></ndStepper>
    </div>
</template>
  
<script setup>
import { reactive } from 'vue';
import ndStepper from '../../../../../src/packages/APP/nd-stepper/index.js';
const data = reactive({
    stepper: {
        value: 10
    },
    check1: 1,
    check2: 0.1,

})
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
.tabtitconter {
    font-size: 14px;
}
</style>