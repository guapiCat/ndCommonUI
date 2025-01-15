<template>
    <div class="title-input">使用label插槽</div>
    <nd-app-input v-model="str" label="测试标题">
        <template #label>
            新label
        </template>
    </nd-app-input>

    <div class="cut-line"></div>

    <div class="title-input">使用插槽left-icon覆盖图标</div>
    <nd-app-input v-model="str">
        <template #left-icon>
            <svg-icon iconName="icon-icon-Team"></svg-icon>
        </template>
    </nd-app-input>

    <div class="cut-line"></div>

    <div class="title-input">使用插槽right-icon覆盖图标</div>
    <nd-app-input v-model="str">
        <template #right-icon>
            <svg-icon iconName="icon-icon-Team"></svg-icon>
        </template>
    </nd-app-input>
</template>

<script>
import { ref } from 'vue'
import ndAppInput from '../../../../../src/packages/APP/nd-input/src/nd-input.vue'
import svgIcon from '../../../../../src/components/SvgIcon.vue'
export default {
    props: {},
    components: {ndAppInput, svgIcon},
    setup(props, { slots, attrs }) {
        const str = ref('测试')
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