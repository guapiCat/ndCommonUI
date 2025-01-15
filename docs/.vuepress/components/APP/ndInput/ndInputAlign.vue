<template>
    <span class="title-input">label右对齐</span>
    <nd-app-input labelAlignType class="input" label-align="right" v-model="str" label="标题"></nd-app-input>

    <div class="cut-line"></div>

    <span class="title-input">label置顶</span>
    <nd-app-input labelAlignType class="input" label-align="top" v-model="str" label="标题"></nd-app-input>

    <div class="cut-line"></div>

    <span class="title-input">input右对齐</span>
    <nd-app-input labelAlignType class="input" input-align="right" v-model="str" label="标题"></nd-app-input>
</template>

<script>
import { ref } from 'vue'
import ndAppInput from '../../../../../src/packages/APP/nd-input/src/nd-input.vue'
export default {
    props: {},
    components: {ndAppInput},
    setup(props, { slots, attrs }) {
        const str = ref('')
        return {
            str
        }
    }
}
</script>

<style>
.cut-line {
    width: 100%;
    border-top: 1px solid #E4E7ED;
    margin-bottom: 20px;
}
</style>