<template>
    <nd-app-input v-model="str" labelAlignType label="标题"></nd-app-input>

    <div class="cut-line"></div>

    <nd-app-input v-model="str" labelAlignType label="标题标题标题"></nd-app-input>

    <div class="cut-line"></div>

    <nd-app-input v-model="str" labelAlignType label="标题标题标题标题标题标题"></nd-app-input>
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