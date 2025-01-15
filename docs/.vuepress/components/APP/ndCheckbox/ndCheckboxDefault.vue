<template>
    <nd-app-checkbox v-model="checked">
        <nd-app-checkbox-item shape="square" :name="1">多选项</nd-app-checkbox-item>
        <nd-app-checkbox-item shape="square" :name="2">多选项</nd-app-checkbox-item>
        <nd-app-checkbox-item shape="square" :name="3" disabled>多选项</nd-app-checkbox-item>
        <nd-app-checkbox-item shape="square" :name="4" disabled>多选项</nd-app-checkbox-item>
    </nd-app-checkbox>
</template>

<script setup>
import {reactive, ref} from 'vue'
import ndAppCheckbox from '../../../../../src/packages/APP/nd-checkbox/src/nd-checkbox.vue'
import ndAppCheckboxItem from '../../../../../src/packages/APP/nd-checkbox-item/src/nd-checkbox-item.vue'

const checked = ref([1,4])
</script>