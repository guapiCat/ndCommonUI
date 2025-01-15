<template>
  <nd-Breadcrumb :separator-icon="ArrowRight" :option="option">
    <template v-slot="{item}">
        {{ item.label}}
    </template>
  </nd-Breadcrumb>
</template>

<script setup>
import {reactive} from 'vue'
import ndBreadcrumb from '../../../../../src/packages/PC/nd-breadcrumb'
import { ArrowRight } from '@element-plus/icons-vue'
const option = reactive([
    {
        label:'标签',
        to:{
            path:'#'
        }
    },
    {
        label:'标签',
        to:{
            path:'#'
        }
    },
    {
        label:'标签',
    },
    {
        label:'标签',
        disabled:true,
    },
])
</script>

<style>

</style>