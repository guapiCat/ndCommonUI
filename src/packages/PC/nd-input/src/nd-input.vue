<template>
  <div class="nd-input">
    <!-- <el-input v-bind="$attrs" v-on="$attrs" v-model="modelValue" class="nd-input-el" :class="{'nd-input-error':isError}">
      <template v-slot:prepend v-if="slots.prepend">
        <slot name="prepend"></slot>
      </template>
      <template v-slot:append v-if="slots.append">
        <slot name="append"></slot>
      </template>
    </el-input> -->
    <el-input v-bind="$attrs" :SearchRight="SearchRight" :modelValue="modelValue" @input="onInput" :class="SearchRight && isError ? 'nd-input-el isSearchR nd-input-error': isError ? 'nd-input-el nd-input-error' : SearchRight ? 'nd-input-el isSearchR' : 'nd-input-el'">
      <template v-slot:prepend v-if="slots.prepend">
        <slot name="prepend"></slot>
      </template>
      <template v-slot:append v-if="slots.append">
        <slot name="append"></slot>
      </template>
      <template v-slot:prefix v-if="slots.prefix">
        <slot name="prefix"></slot>
      </template>
      <template v-slot:suffix v-if="slots.suffix">
        <slot name="suffix"></slot>
      </template>
    </el-input>
    <div v-show="isError && errorTips" class="nd-inp-errorTips">{{ errorTips }}</div>
  </div>
</template>

<script>
export default {
  name: "nd-input",
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    isError: {
      type: Boolean,
      default: false
    },
    errorTips: {
      type: String,
      default: ''
    },
    SearchRight: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'input'],
  setup(props, {emit, slots}) {
    const onInput = (value) => {
      emit("update:modelValue", value)
      emit('input', value);
    }

    return {
      slots,
      onInput
    }
  },
}
</script>

<style lang="less">
.nd-input {
  .nd-input-el {
    // height: 40px;
    border-radius: 4px;
  
    .el-input__wrapper {
      border-radius: 4px;
      width: 100%;
      box-sizing: border-box;
    }
  
    .el-input__suffix {
      .el-input__suffix-inner {
        .el-input__clear {
          font-size: 16px;
        }
      }
    }
  
    &.el-input:focus-within .el-input__wrapper {
      box-shadow: 0 0 0 1px #1780E3 inset;
      outline: none;
    }
  
    &.nd-input-error .el-input__wrapper {
      box-shadow: 0 0 0 1px #FF4D4F inset;
    }
  
    &.nd-input-error:focus-within .el-input__wrapper {
      box-shadow: 0 0 0 1px #FF4D4F inset;
    }
  
  }
  .isSearchR {
    .el-input__wrapper {
      padding: 1px 1px 1px 11px;
    }
    .nd-button {
      .el-button {
        border-radius: 0 4px 4px 0;
      }
    }
  }
  .nd-inp-errorTips {
    color: #FF4D4F;
    font-size: 14px;
    line-height: 22px;
  }
  .el-input--small {
    height: 24px !important;
  }
  .el-input--large {
    height: 44px !important;
  }
  .el-input {
    height: 32px;
  }
}

</style>
<style scoped>
.noNdRd >>> .el-input__wrapper {
  border-radius: 0!important;
}
</style>