<template>
    <nd-button type="warning" @click="toOpenShar()" content="分享按钮"></nd-button>
    <div class="sharing" v-if="data.showShar">
        <ndSharing @closeShar="closeShar" @confirmShar="confirmShar" v-loading="data.isSharing" />
    </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import ndButton from '../../../../../src/packages/PC/nd-button/src/nd-button.vue';
import ndSharing from '../../../../../src/packages/PC/nd-sharing/index.js';
const data = reactive({
    showShar: false,
    isSharing: false
})

const toOpenShar = () => {
    data.showShar = true
}
const closeShar = () => {
    data.showShar = false
}
const confirmShar = (obj) => {
    data.isSharing = true
    console.log('objobjobj', obj);
    setTimeout(() => {
        data.isSharing = false
        data.showShar = false
    }, 2000);
}

</script>
<style lang="scss" scoped>
.sharing {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 66;
}
</style>
