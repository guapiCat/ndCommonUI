<template>
  <el-breadcrumb class="nd-breadcrumb" v-bind="$attrs" v-on="$attrs" :option="option">
    <el-breadcrumb-item @click.stop="clickBread(item,index)"  :class="{'active':currentIndex===index,'disabled':item.disabled}" v-for="(item,index) in option" :key="index" :to="item.to" :replace="item.replace">
        <template v-slot:default>
            <slot name="default" :item="item"></slot>
        </template>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup name="nd-breadcrumb">
import {defineProps,ref} from 'vue'
const props = defineProps({
    option:Array
})
const currentIndex = ref('');
const clickBread = (item,index)=>{
  if (!item.to&&!item.replace) return
  currentIndex.value = index
}
</script>

<style scoped lang="less">
/deep/ .el-breadcrumb__item {
  .el-breadcrumb__inner a,
  .el-breadcrumb__inner.is-link {
    font-weight: 400;
    text-decoration: none;
    transition: var(--el-transition-color);
    color: var(--el-text-color-regular);
    &:hover {
      color: #1780E3;
    }
  } 
}

/deep/ .disabled {
  .el-breadcrumb__inner {
    color: var(--el-text-color-disabled) !important;
    cursor: not-allowed;
  }
}
/deep/ .active {
  .el-breadcrumb__inner {
    color: #1780E3 !important;
  }
}

/deep/ .el-breadcrumb__item .el-breadcrumb__inner a, 
/deep/  .el-breadcrumb__item .el-breadcrumb__inner {
    max-width: 160px;  
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
 }

</style>