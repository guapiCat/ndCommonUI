<template>
    <el-form-item v-on="attrs" v-bind="attrs" class="comp-pc-form-item">
        <template #default v-if="!!slots.default">
            <slot></slot>
        </template>
            
        <template #label v-if="!!slots.label">
            <slot name="label"></slot>
        </template>

        <template #error v-if="!!slots.error">
            <slot name="error"></slot>
        </template>
    </el-form-item>
</template>

<script>
import { reactive } from 'vue'
export default {
    props: {
    },
    setup(props, { emit, slots, attrs }) {
        return {
            slots,
            attrs
        }
    }
}
</script>