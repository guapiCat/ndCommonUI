<template>
    <nd-app-button class="button" size="small" @click.stop="showToast(1)">显示图标</nd-app-button>
    <nd-app-button class="button" size="small" @click.stop="showToast(2)">显示图片</nd-app-button>
    <nd-app-toast :show="show" :duration="2000000" ref="toast" :icon="icon" :message="str"></nd-app-toast>
</template>

<script setup>
import { ndAppToast } from '../../../../../src/packages/APP/nd-toast/index.js'
import ndAppButton from '../../../../../src/packages/APP/nd-button/src/nd-button.vue'
import { ref } from 'vue'
const show = ref(false)
const str = ref('提示文案')
const timer = ref(null)
const icon = ref('')
const showToast = (strs) => {
    icon.value = strs == 1 ? 'icon-icon-WaringCheck' : 'http://10.122.82.10:81/zentao/file-read-41454.png'
    show.value = true
    if (timer.value) {
        clearTimeout(timer.value)
    }
    timer.value = setTimeout(() => {
        show.value = false
        clearTimeout(timer.value)
        timer.value = null
    }, 20000)
}
</script>

<style scoped>
.button {
    margin: 0 4px 4px 0;
}
</style>