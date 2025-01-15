<template>
  <nd-Breadcrumb :option="option">
    <template v-slot="{item}">
        {{ item.label}}
    </template>
  </nd-Breadcrumb>
</template>

<script setup>
import {reactive} from 'vue'
import ndBreadcrumb from '../../../../../src/packages/PC/nd-breadcrumb'
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