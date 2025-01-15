<template>
  <!-- <van-button v-bind="$attrs" :class="btnClass" :type="type" :size="size">
    <slot name="default"></slot>
  </van-button> -->
  <van-cascader
    v-bind="$attrs"
  />
    <!-- v-model="cascaderValue" -->
</template>
<script>
import { reactive, toRefs, onBeforeMount, onMounted, computed } from 'vue';

export default {
  props: {
  },
  setup(props, { slots }) {


    return {  };
  },
  
};
</script>

<style scoped lang="scss">
@import '../../common.scss';

.van-button{
  border-radius: 4px;
  &.none-default-slot {
    :deep(.van-button__content) {
      .van-button__text {
        display: none;
      }
    }
  }
}

.van-button {
  :deep(.van-button__content) {
    i {
      font-size: 1.4em;
    }
  }
}

.van-button--default {
  background-color: $nd-white;
  border-color: $nd-default-border-color;
  color: $nd-text-color;
  &.van-button--disabled {
    &:active {
      background-color: $nd-white;
    }
  }
}
.van-button--primary {
  background-color: $nd-primary-color;
  border-color: $nd-primary-color;
  &:active {
    background-color: $nd-primary-click-color;
    &::before {
      opacity: 0;
    }
  }
  &.van-button--disabled {
    &:active {
      background-color: $nd-primary-color;
    }
  }
}
.van-button--success {
  background-color: $nd-success-color;
  border-color: $nd-success-color;
  &:active {
    background-color: $nd-success-click-color;
    &::before {
      opacity: 0;
    }
  }
  &.van-button--disabled {
    &:active {
      background-color: $nd-success-color;
    }
  }
}
.van-button--warning {
  background-color: $nd-warning-color;
  border-color: $nd-warning-color;
  &:active {
    background-color: $nd-warning-click-color;
    &::before {
      opacity: 0;
    }
  }
  &.van-button--disabled {
    &:active {
      background-color: $nd-warning-color;
    }
  }
}
.van-button--danger {
  background-color: $nd-danger-color;
  border-color: $nd-danger-color;
  &:active {
    background-color: $nd-danger-click-color;
    &::before {
      opacity: 0;
    }
  }
  &.van-button--disabled {
    &:active {
      background-color: $nd-danger-color;
    }
  }
}
.van-button--plain {
  background-color: $nd-white;
  &:active {
    background-color: $nd-white;
    &::before {
      opacity: 0.1;
    }
  }
}
</style>