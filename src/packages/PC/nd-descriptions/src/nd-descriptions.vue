<template>
   <el-descriptions
    v-bind="$attrs" 
    v-on="$attrs" 
    class="nd-descriptions">
    <template #extra v-if="slots.extra">
      <slot name="extra">
      </slot>
    </template>

    <el-descriptions-item :min-width="item.minWidth" v-for="item in options" :key="item.label">
      <template #label>
        <slot name="name" :item="item"></slot>
      </template>
      <slot :item="item" name="default"></slot>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
export default {
    name:'nd-descriptions',
    props:{
        options:{
          type:Array,
          default:[],
        },
    },
    setup(props,{slots}) {
        return {
            slots
        }
    }
}
</script>

<style>
.el-descriptions tr:nth-child(2n) {
  background-color: #fff;

}
</style>