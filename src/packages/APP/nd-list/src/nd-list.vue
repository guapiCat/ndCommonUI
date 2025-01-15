<template>
    <van-list v-bind="$attrs">
        <slot />
        <template #loading v-if="slots.loading">
            <slot name="loading" />
        </template>
        <template #finished v-if="slots.finished">
            <slot name="finished" />
        </template>
        <template #error v-if="slots.error">
            <slot name="error" />
        </template>
    </van-list>
</template>
<script setup>
import { useSlots } from 'vue';

const slots = useSlots();

</script>
<style lang="scss" scoped>

</style>