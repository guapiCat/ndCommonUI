<template>
    <nd-app-radio v-model="checked">
        <nd-app-radio-item name="1">选择项</nd-app-radio-item>
        <nd-app-radio-item name="2">选择项</nd-app-radio-item>
        <nd-app-radio-item disabled name="3">选择项</nd-app-radio-item>
    </nd-app-radio>
    <nd-app-radio-item disabled shape="square" name="4" v-model='checked1'>选择项</nd-app-radio-item>
</template>

<script setup>
import {reactive, ref} from 'vue'
import ndAppRadio from '../../../../../src/packages/APP/nd-radio/src/nd-radio.vue'
import ndAppRadioItem from '../../../../../src/packages/APP/nd-radio-item/src/nd-radio-item.vue'

const checked = ref('1')
const checked1 = ref('4')
</script>