<template>
    <div class="nd-password-input-box">
        <p>通过 info 设置文字提示</p>
        <p>通过 error-info 设置错误提示</p>

        <br />
        <br />

        <nd-password-input
            :value="value"
            :gutter="10"
            info="请输入密码"
            :error-info="errorInfo"
            :focused="showKeyboard"
            @focus="showKeyboard = true"
        />
        <nd-number-keyboard
            v-model="value"
            :show="showKeyboard"
            @blur="showKeyboard = false"
        />

        <br />
        <br />
    </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import ndPasswordInput from '../../../../../src/packages/APP/nd-password-input/index.js';
import ndNumberKeyboard from "../../../../../src/packages/APP/nd-number-keyboard/src/nd-number-keyboard.vue"

const value = ref('');
const showKeyboard = ref(false);
const errorInfo = ref('');

watch(value, (newVal) => {
    if (newVal.length === 6 && newVal !== '123456') {
        errorInfo.value = '密码错误';
    } else {
        errorInfo.value = '';
    }
})

</script>
<style scoped>
.nd-password-input-box {
    background: #f2f3f5;
    padding: 20px;
}
</style>