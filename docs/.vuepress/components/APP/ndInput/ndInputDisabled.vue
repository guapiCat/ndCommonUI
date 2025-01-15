<template>
    <nd-app-input label="只显示标题" v-model="str" disabled></nd-app-input>
    <nd-app-input label="只显示标题" v-model="str1" disabled></nd-app-input>
</template>

<script>
import { ref } from 'vue'
import ndAppInput from '../../../../../src/packages/APP/nd-input/src/nd-input.vue'
export default {
    props: {},
    components: {ndAppInput},
    setup(props, { slots, attrs }) {
        const str = ref('')
        const str1 = ref('内容')
        return {
            str,
            str1
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