<template>
  <div class="nd-tooltip">
      <el-tooltip
        :effect="effect"
        :content="content"
        :placement="placement"
        :show-arrow="showArrow"
        popper-class='tooltip'
        v-bind="$attrs"
        v-on="$attrs"
      >
       <slot></slot>
      </el-tooltip>
  </div>
</template>
<script>
import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';
export default {
  name: "nd-tooltip",
  props: {
    placement: {
      type: String,
      default: "top",
    },
    effect: {
      type: String,
      default: "dark",
    },
    content: {
      type: String,
      default: "提示信息",
    },
     showArrow: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emits, slots }) {
    const data = reactive({});
    
    onBeforeMount(() => {});
    onMounted(() => { });
   
    const refData = toRefs(data);
    return {
      slots,
      ...refData
    };
  },
  
};
</script>

<style>

/* .tooltip{
  background: rgba(51, 51, 51, 0.8)!important;
  border-radius: 4px!important;
  border: 1px solid rgba(51, 51, 51, 0.8)!important;
}

>>>.tooltip .el-popper__arrow::before {
    border: 1px solid rgba(51, 51, 51, 0.8)!important;
    background: rgba(51, 51, 51, 0.8)!important;
    right: 0;
}

>>> .el-popper__arrow::before{
         background: rgba(51, 51, 51, 0.8)!important;
} */

.el-popper__arrow::before {

}
</style>