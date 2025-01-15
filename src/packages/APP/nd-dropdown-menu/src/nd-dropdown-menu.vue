<template>
  <div class="nd-dropdownMenu test1">
    <van-dropdown-menu v-bind="$attrs" v-on="$attrs">
      <slot default>
      </slot>
    </van-dropdown-menu>
  </div>
</template>
<script setup>
import { nextTick, reactive, defineProps } from "vue";
const porps = defineProps({
  opacity: {
    type: Number,
    default: 0.1
  }
});
</script>
<style lang="scss" scoped>
@import '../../common.scss';
.nd-dropdownMenu ::v-deep .van-dropdown-menu__title {
  color: $nd-text-color!important;
}
.nd-dropdownMenu ::v-deep .van-cell {
  font-size: 14px!important;
  color: $nd-text-color!important;
}
.nd-dropdownMenu ::v-deep .van-dropdown-menu__title--active {
  color: $nd-primary-color!important;
}
.nd-dropdownMenu ::v-deep .van-dropdown-item__option--active {
  color: $nd-primary-color!important;
}
.nd-dropdownMenu ::v-deep .van-dropdown-item__option--active .van-dropdown-item__icon {
  color: $nd-primary-color!important;
}
.nd-dropdownMenu ::v-deep .van-dropdown-item__content {
  max-height: 100%;
}
</style>