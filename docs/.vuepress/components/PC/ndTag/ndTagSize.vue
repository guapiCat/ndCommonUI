<template>
    <nd-tag class="mx-1" size="large" closable>Large</nd-tag>
    <nd-tag class="mx-1" closable>Default</nd-tag>
    <nd-tag class="mx-1" size="small" closable>Small</nd-tag>

</template>

<script>
import ndTag from '../../../../../src/packages/PC/nd-tag'
export default {
    components:{ndTag}
}
</script>

<style scoped>
.nd-tag {
    margin-right: 40px;
    margin-bottom: 28px;
}
</style>