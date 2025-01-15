<template>
    
    <span class="title-input">设置自适应高度(只适用于textarea) -- autosize</span>
    <nd-app-input autosize v-model="str" label="标题标题标题标题标题标题" type="textarea"></nd-app-input>

    <div class="cut-line"></div>

    <span class="title-input">设置必填项 -- required</span>
    <nd-app-input required v-model="str" label="标题标题标题标题标题标题" type="textarea"></nd-app-input>

    <div class="cut-line"></div>

    <span class="title-input">设置默认行高 -- rows</span>
    <nd-app-input :rows="5" v-model="str" label="标题标题标题标题标题标题" type="textarea"></nd-app-input>

    <div class="cut-line"></div>

    <span class="title-input">设置显示输入统计(需配合使用maxlength) -- show-word-limit</span>
    <nd-app-input v-model="str" label="标题标题标题标题标题标题" :border="true" type="textarea" :show-word-limit="true" :maxlength="200"></nd-app-input>
</template>

<script>
import { ref } from 'vue'
import ndAppInput from '../../../../../src/packages/APP/nd-input/src/nd-input.vue'
export default {
    props: {},
    components: {ndAppInput},
    setup(props, { slots, attrs }) {
        const str = ref('')
        const str2 = ref('')
        return {
            str,
            str2
        }
    }
}
</script>

<style>
.title-input{
    color: #1880E3;
    font-size: 16px;
    margin: 20px 0 0;
}
</style>
<style>
.cut-line {
    width: 100%;
    border-top: 1px solid #E4E7ED;
    margin-bottom: 20px;
}
</style>