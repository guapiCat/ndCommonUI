<template>
    <div class="nd-text-ellipsis">
        <van-text-ellipsis v-bind="$attrs" v-on="$attrs" @click-action="textEllipsisClickAction">
        </van-text-ellipsis>
    </div>
</template>
<script setup>
import { nextTick, reactive, defineProps,defineEmits } from "vue";
const emit = defineEmits(["ndTextEllipsisClickAction"]);
const props = defineProps({

});
// 页面数据
const data = reactive({
});

// 页面加载完成
nextTick(() => {

})

// 点击展开收起时触发
const textEllipsisClickAction = async (index) => {
  emit("ndTextEllipsisClickAction", index);
};

</script>
<style scoped>

.nd-text-ellipsis >>>.van-text-ellipsis__action{
    color:var(--van-text-ellipsis-action-color)
}
</style>