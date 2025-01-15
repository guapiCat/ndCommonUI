<template>
    <nd-app-input v-model="str"></nd-app-input>
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
.title-input{
    color: #1880E3;
    font-size: 16px;
    margin: 20px 0 0;
}
</style>