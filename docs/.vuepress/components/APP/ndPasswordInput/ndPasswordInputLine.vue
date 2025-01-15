<template>
    <div class="nd-password-input-box">
        <p>通过 bottom-line 设置是否展示下划线</p>

        <br />
        <br />

        <nd-password-input
            :value="value"
            :gutter="10"
            bottom-line
            :mask=false
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
import { ref } from 'vue';
import ndPasswordInput from '../../../../../src/packages/APP/nd-password-input/index.js';
import ndNumberKeyboard from "../../../../../src/packages/APP/nd-number-keyboard/src/nd-number-keyboard.vue"

const value = ref('');
const showKeyboard = ref(false);

</script>
<style scoped>
.nd-password-input-box {
    background: #f2f3f5;
    padding: 20px;
}
</style>