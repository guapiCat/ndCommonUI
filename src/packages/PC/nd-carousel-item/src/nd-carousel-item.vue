<template>
  <el-carousel-item v-bind="$attrs" v-on="$attrs" v-if="!imgUrl">
        <slot></slot>
  </el-carousel-item>
   <el-carousel-item v-bind="$attrs" v-on="$attrs" v-else>
        <img :src="imgUrl" class="img">
  </el-carousel-item>
</template>

<script>
export default {
  name: "nd-carousel-item",
  setup(props, {emits, slots}) {
    return {
      slots
    }
  },
  props : {
    imgUrl : {
      type:String,
      default:""
    }

  }
}
</script>

<style lang="less">
.img {
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  transform: translate(-50%,-50%);
  top:50%;
  left:50%
}
</style>