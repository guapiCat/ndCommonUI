<template>
  <el-select 
    v-bind="$attrs" 
    v-on="$attrs" 
    :modelValue="modelValue"
    @change="onChange"
    class="nd-select" 
    ref="select"
  >
    <el-option
      v-for="item in options"
      :key="item[prop.value]"
      :label="item[prop.label]"
      :value="item[prop.value]"
    >
      <template v-slot:default v-if="slots.default">
        <slot name="default" :item="item"></slot>
      </template>
    </el-option>
  </el-select>
</template>

<script>
import {ref} from 'vue'
export default {
  name:'nd-select',
  props:{
    modelValue:{
      type:[String,Array, Number],
      default:''
    },
    options:{
      type:Array,
      default:[],
    },
    prop: {
      // 自定义key
      type: Object,
      default: {value: 'value', label: 'label'}
    }
  },
  emits: ["update:modelValue"],
  setup(props,{emit,slots}) {
    const onChange = (value) => {
      emit("update:modelValue", value)
    }
    const select = ref()
    return {
      slots,
      select,
      onChange
    }
  },
    
}
</script>

<style>

</style>