<template>
    <nd-app-button class="button" size="small" @click.stop="showToast1('top')">顶部</nd-app-button> 
    <nd-app-button class="button" size="small" @click.stop="showToast1('mid')">中间</nd-app-button> 
    <nd-app-button class="button" size="small" @click.stop="showToast1('bottom')">底部(默认)</nd-app-button>
</template>

<script setup>
import {showToast} from '../../../../../src/packages/APP/nd-toast/index.js'
import ndAppButton from '../../../../../src/packages/APP/nd-button/src/nd-button.vue'
import {ref, nextTick} from 'vue'
const toast = ref()
const position = ref('bottom')
const showToast1 = (positions) => {
    position.value = positions
    showToast({
        message: '如果文案一行超过十六个字怎么显示如果文案一行超过十六个字怎么显示如果文案一行超过十六个字怎么显示',
        position: position.value
    })
}
</script>

<style scoped>
.button{margin:0 4px 4px 0;}
</style>