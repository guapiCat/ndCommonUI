<template>
    <van-swipe-cell>
        <slot />
        <template #left v-if="slots.left">
            <slot name="left"></slot>
        </template>
        <template #right v-if="slots.right">
            <slot name="right"></slot>
        </template>
    </van-swipe-cell>
</template>
<script setup>
import { useSlots } from 'vue';

const slots = useSlots();

</script>
<style scoped>

</style>