<template>
    <nd-app-input error-message="报错内容提示" error-message-align="left" v-model="str1" labelAlignType label="标题标题"></nd-app-input>

    <div class="cut-line"></div>

    <nd-app-input error-message="报错内容提示" error-message-align="left" v-model="str2" labelAlignType label="标题标题">
        <template #right-icon>
            <svg-icon iconName="icon-icon-RightArrow"></svg-icon>
        </template>
    </nd-app-input>

    <div class="cut-line"></div>

    <nd-app-input error-message="报错内容提示" error-message-align="left" v-model="str3" labelAlignType ></nd-app-input>

    <div class="cut-line"></div>

    <nd-app-input show-word-limit :maxlength="30" error-message="报错内容提示" error-message-align="center" v-model="str4" labelAlignType type="textarea"></nd-app-input>


    <div>设置输入框borderRadius和background</div>
    <nd-app-input show-word-limit borderRadius="10px" background="#eaeaea" :maxlength="30" v-model="str5" labelAlignType type="textarea"></nd-app-input>
</template>

<script>
import { reactive, toRefs } from 'vue'
import ndAppInput from '../../../../../src/packages/APP/nd-input/src/nd-input.vue'
import svgIcon from '../../../../../src/components/SvgIcon.vue'

export default {
    props: {},
    components: {ndAppInput, svgIcon},
    setup(props, { slots, attrs }) {
        const data = reactive({
            str1: '',
            str2: '',
            str3: '',
            str4: '',
            str5: '',
        })
        const datas = toRefs(data)
        return {
            ...datas
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