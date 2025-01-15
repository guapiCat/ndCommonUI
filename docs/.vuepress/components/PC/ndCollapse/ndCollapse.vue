<template>
   <nd-collapse v-model="state.activeNames" @handleChange="handleChange" :list="state.list"></nd-collapse>
</template>

<script>
import ndCollapse from '../../../../../src/packages/PC/nd-collapse/src/nd-collapse.vue';
import {ref, toRefs} from "vue";

export default {
  name: "",
  components: {ndCollapse},
  setup() {
    const state = ref({
      list: [{
          title:"新迪科技",
          content:"Operation feedback: enable the users to clearly perceive theiroperations by style updates and interactive effects;"
      },
      {
          title:"新迪科技",
          content:"Operation feedback: enable the users to clearly perceive theiroperations by style updates and interactive effects;",
          disabled: true
      },
      {
          title:"新迪科技",
          content:"Operation feedback: enable the users to clearly perceive theiroperations by style updates and interactive effects;"
      }
      ],
      activeNames:'1',

    })
    const handleChange = (e) => {     // page change
      
    }
   
    return {
      state,
      handleChange
      
    }
  }
}
</script>

<style scoped>


</style>