<template>
  <div class="nd-collapse">
     <el-collapse :modelValue="modelValue" @change="handleChange"  :accordion="accordion">
      <el-collapse-item  :name="index" :title="item.title" v-for="(item,index) in list" :key="index" :disabled="item.disabled">
          <template #title v-if="item.slotName">
            <!-- 插槽 -->
             {{item.title}}
            <slot :name="item.slotName"></slot>
          </template>
        <div> 
         {{item.content}}
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';
export default {
  name: "nd-collapse",
  emits: ['handleChange', 'update:modelValue'],
  props: {
    modelValue: {
      type: [Number, String, Array],
      default: "1",
    },
      title: {
      type: String,
      default: "新迪数字",
    },
      name: {
      type: String,
      default: "",
    },
    accordion: {
      type: Boolean,
      default:false,
    },
     list: {
      type: Array,
      default:[],
    },
  },
  setup(props, { emit, slots }) {
    console.log('slots',slots);
    const data = reactive({});
    const { proxy } = getCurrentInstance();

    onBeforeMount(() => {});
    onMounted(() => { });

    const handleChange = (value) => {
      emit("update:modelValue", value)
      proxy.$emit('handleChange', value);
    }

    const refData = toRefs(data);
    return {
      slots,
      handleChange,
      ...refData
    };
  },
  
};
</script>

<style scoped>
>>>.el-collapse-item__header{
font-size: 14px;
font-weight:600;
line-height: 24px;
/* Font/text-primary */
color: #131414;

}
>>>.el-collapse-item__content{
  font-size: 14px;
  font-weight: normal;
  line-height: 24px;
  color: #606266;
}
.icon{
  width: 20px;
  position: absolute;
  /* left: 30px; */
  margin-top: -35px;
  margin-left: 75px;

}
</style>