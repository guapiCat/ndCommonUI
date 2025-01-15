<template>
    <div class="box">
        <nd-list
            v-model:loading="loading"
            v-model:error="error"
            error-text="请求失败，点击重新加载"
            @load="onLoad"
        >
            <nd-list-cell type="cell" :list="list"></nd-list-cell>
        </nd-list>
    </div>
</template>
<script setup>
import { ref } from 'vue';
// import { ndList, ndListCell } from '../../../../../src/packages/APP/nd-list/index'
import ndList from '../../../../../src/packages/APP/nd-list/src/nd-list.vue'
import ndListCell from '../../../../../src/packages/APP/nd-list-cell/src/nd-list-cell.vue'

const list = ref([]);
const loading = ref(false);
const error = ref(false);

let rawList = [];
for(let i = 0; i < 10; i++) {
    rawList.push({
        title: '标题内容',
        text: '正文内容',
        src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    })
}

const onLoad = () => {
    setTimeout(() => {
        error.value = true;
        loading.value = false;
    }, 1000)
}

</script>
<style scoped>
.box {
    height: 500px;
    overflow: scroll;
}
</style>