<template>
    <nd-app-button class="button" size="small" @click.stop="showToast1(str1)">显示内容1</nd-app-button>
    <nd-app-button class="button" size="small" @click.stop="showToast1(str2)">显示内容2</nd-app-button>
    <nd-app-button class="button" size="small" @click.stop="showToast1(str3)">显示内容3</nd-app-button>
    <nd-app-button size="small" @click.stop="showToast1(str4)">显示内容4</nd-app-button>
    <nd-app-toast :show="show" ref="toast" :message="str" color="red"></nd-app-toast>
</template>

<script setup>
import { ndAppToast } from '../../../../../src/packages/APP/nd-toast/index.js'
import ndAppButton from '../../../../../src/packages/APP/nd-button/src/nd-button.vue'
import { ref } from 'vue'
const show = ref(false)
const str1 = ref('提示文案')
const str2 = ref('提示文案距离两边最小宽度为12')
const str3 = ref('提示文案最好请控制在十六个字以内')
const str4 = ref('如果文案一行超过十六个字怎么显示 如果文案一行超过十六个字怎么显示 如果文案一行超过十六个字怎么显示')
const str = ref('')
const timer = ref(null)
const showToast1 = (strs) => {
    str.value = strs
    show.value = true
    if (timer.value) {
        clearTimeout(timer.value)
    }
    timer.value = setTimeout(() => {
        show.value = false
        clearTimeout(timer.value)
        timer.value = null
    }, 200000)
}
</script>

<style scoped>
.button {
    margin: 0 4px 4px 0;
}
</style>