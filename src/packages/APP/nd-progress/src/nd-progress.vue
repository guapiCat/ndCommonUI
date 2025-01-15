<template>
    <div class="nd-progress">
        <van-progress v-bind="$attrs" v-on="$attrs">
        </van-progress>
    </div>
</template>
<script setup>
import { nextTick, reactive, defineProps } from "vue";
const props = defineProps({

});
// 页面数据
const data = reactive({
});

// 页面加载完成
nextTick(() => {

})

</script>
<style scoped></style>