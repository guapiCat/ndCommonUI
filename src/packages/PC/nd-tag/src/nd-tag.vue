<template>
  <el-tag  
    class="nd-tag"
    v-bind="$attrs" 
    v-on="$attrs" >
    <slot></slot>
  </el-tag>
</template>

<script>
export default {
  name:'nd-tag',
}
</script>

<style>

</style>