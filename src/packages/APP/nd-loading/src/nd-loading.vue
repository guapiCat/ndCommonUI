<template>
    <van-loading  v-bind="$attrs">
        <template #default>
            <slot />
        </template>
        
        <template #icon v-if="slots.icon">
            <slot name="icon" />
        </template>
    </van-loading>
</template>
<script setup>
import { useSlots } from 'vue';

const slots = useSlots();

</script>
<style lang="scss" scoped>

</style>