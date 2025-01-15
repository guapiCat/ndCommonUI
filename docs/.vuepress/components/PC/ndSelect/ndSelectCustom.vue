<template>
  <nd-select placeholder="选中后不可清除" v-model="state.var0" :options="state.options">
    <template v-slot="{item}">
        <span style="float: left">{{ item.label}}</span>
        <span
            style="
            float: right;
            color: var(--el-text-color-secondary);
            font-size: 13px;
            "
            >{{ item.value }}</span>
            <hr>
    </template>
  </nd-select>
</template>

<script>
import ndSelect from '../../../../../src/packages/PC/nd-select'
import {ref} from 'vue'
export default {
    name:'',
    components:{ndSelect},
    setup() {
        const state = ref({
            var0:'',
            options:[
                {
                    value: 'Option1',
                    label: '选项文案1',
                },
                {
                    value: 'Option2',
                    label: '选项文案2',
                },
                {
                    value: 'Option3',
                    label: '选项文案3',
                },
                {
                    value: 'Option4',
                    label: '选项文案4',
                },
                {
                    value: 'Option5',
                    label: '选项文案5',
                },
            ]
        })

        return {
            state,
        }
    }

}
</script>

<style scoped>

</style>