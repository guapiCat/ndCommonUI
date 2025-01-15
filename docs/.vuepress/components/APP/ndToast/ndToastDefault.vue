<template>
    <nd-app-button class="button" size="small" @click.stop="showToast1(str1)">显示内容1</nd-app-button> 
    <nd-app-button class="button" size="small" @click.stop="showToast1(str2)">显示内容2</nd-app-button> 
    <nd-app-button class="button" size="small" @click.stop="showToast1(str3)">显示内容3</nd-app-button> 
    <nd-app-button size="small" @click.stop="showToast1(str4)">显示内容4</nd-app-button>
    <!-- <nd-app-toast v-model="show" icon="http://10.122.82.10:81/zentao/file-read-41454.png" ref="toast" position="bottom" :message="str" color="#000"></nd-app-toast> -->
</template>

<script setup>
import {showToast} from  '../../../../../src/packages/APP/nd-toast/index.js'
import ndAppButton from '../../../../../src/packages/APP/nd-button/src/nd-button.vue'
import {ref} from 'vue'
const str1 = ref('提示文案')
const str2 = ref('提示文案距离两边最小宽度为12')
const str3 = ref('提示文案最好请控制在十六个字以内')
const str4 = ref('如果文案一行超过十六个字怎么显示 如果文案一行超过十六个字怎么显示 如果文案一行超过十六个字怎么显示')
const str = ref('')
const showToast1 = (strs) => {
    str.value = strs
    showToast({message: str.value})
}
</script>

<style scoped>
.button{margin:0 4px 4px 0;}
</style>