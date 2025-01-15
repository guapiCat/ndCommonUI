<template>
    <div class="content">

        <nd-app-input password v-model="str"></nd-app-input>
        <nd-app-input password passwordType="line" v-model="str"></nd-app-input>
        <nd-app-input :mask="false" password v-model="str"></nd-app-input>
        <nd-app-input :mask="false" password passwordType="line" v-model="str"></nd-app-input>
        <nd-app-input error-info="错误提示" password v-model="str"></nd-app-input>
        <nd-app-input error-info="错误提示" password passwordType="line" v-model="str"></nd-app-input>
    </div>
    
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

<style scoped>
::v-deep.source{padding:0!important}
.content{background-color:#efefef}
.title-input{
    color: #1880E3;
    font-size: 16px;
    margin: 20px 0 0;
}
</style>