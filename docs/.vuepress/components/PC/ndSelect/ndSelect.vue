<template>
  <nd-select size="large" placeholder="单选选择器-large" clearable v-model="state.var0" :options="state.options"> </nd-select>
  <nd-select placeholder="单选选择器" clearable v-model="state.var1" :options="state.options"> </nd-select>
  <nd-select size="small" placeholder="单选选择器-small" clearable v-model="state.var2" :options="state.options"> </nd-select>
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
            var1:'',
            var2:'',
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
.ndSelect:nth-child(2) {
    margin: 0 20px;
}
</style>