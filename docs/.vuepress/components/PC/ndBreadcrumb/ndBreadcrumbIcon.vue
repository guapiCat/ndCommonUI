<template>
  <nd-Breadcrumb :separator-icon="ArrowRight" :option="option">
    <template v-slot="{item}">
            <div>
                <el-icon v-if="item.icon" style="margin-right:6px">
                    <component :is="item.icon"></component>
                </el-icon>
            {{item.label}}
        </div>
    </template>
  </nd-Breadcrumb>
</template>

<script setup>
import {reactive,ref} from 'vue'
import ndBreadcrumb from '../../../../../src/packages/PC/nd-breadcrumb'
import { ArrowRight,House} from '@element-plus/icons-vue'
import { shallowRef } from 'vue'

const option = ref([
    {
        label:'标签',
        to:{
            path:'#'
        },
        icon: shallowRef(House),
    },
    {
        label:'标签',
        to:{
            path:'#'
        },
        icon: shallowRef(House),
    },
    {
        label:'标签',
        icon: shallowRef(House),
    },
    {
        label:'标签',
        disabled:true,
        icon: shallowRef(House),
    },
])
</script>

<style>

</style>