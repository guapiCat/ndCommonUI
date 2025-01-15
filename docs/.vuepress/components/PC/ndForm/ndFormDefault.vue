<template>
    <section>
        <nd-form ref="formRef" :model="form" :rules="rule" label-width="120px" :label-position="labelPosition"
            :size="size">
            <nd-form-item label="Activity" prop="activity">
                <nd-input v-model="form.activity" />
            </nd-form-item>
            <nd-form-item label="Type" prop="type">
                <nd-input v-model="form.type" />
            </nd-form-item>
            <nd-form-item label="Name" prop="name">
                <nd-input v-model="form.name" />
            </nd-form-item>
            <nd-form-item label="Male" prop="male">
                <nd-input v-model="form.male" />
            </nd-form-item>
            <nd-form-item label=" ">
                <nd-button type="primary" @click="onSubmit">保存</nd-button>&nbsp;
                <nd-button>取消</nd-button>
            </nd-form-item>
        </nd-form>
    </section>
</template>
  
<script>
import ndForm from '../../../../../src/packages/PC/nd-form/src/nd-form.vue';
import ndFormItem from '../../../../../src/packages/PC/nd-form-item/src/nd-form-item.vue';
import ndInput from '../../../../../src/packages/PC/nd-input/src/nd-input.vue'
import ndButton from '../../../../../src/packages/PC/nd-button/src/nd-button.vue'
import { ref, reactive, toRefs } from "vue";

export default {
    name: "",
    components: { ndForm, ndFormItem, ndButton, ndInput },
    setup() {
        const state = reactive({
            form: { activity: '', name: '', male: '', type: '' },
            labelPosition: 'right',
            size: 'small',
            rule: {
            }
        })
        const onSubmit = () => {
            console.log(state.form)
        }
        const states = toRefs(state)
        return {
            ...states,
            onSubmit,
        }
    }
}
</script>
  
<style scoped></style>