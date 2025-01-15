<template>
   <nd-calendar>
    <template v-slot:dateCell="{ data }">
      <div v-if="data.day==state.day">
        {{ data.day.split('-').slice(1).join('-') }}
        <p class="event1">事件Event1</p>
        <p class="event2">事件Event2</p>
      </div>
    </template>
  </nd-calendar>
</template>

<script>
import ndCalendar from '../../../../../src/packages/PC/nd-calendars/src/nd-calendar.vue';
import {ref, toRefs} from "vue";

export default {
  name: "",
  components: {ndCalendar},
  setup() {

   const state = ref({
        day:'2022-08-10'

    })
    
   
    return {
      state
      
    }
  }
}
</script>

<style scoped>
.event1{
width: 84px;
height: 20px;
padding: 0px 12px 0px 0px;
border-radius: 2px;
margin-top: 5px;
margin-bottom: 5px;
/* Primary/Primary-10% */
background: #ECF5FF;
z-index: 999;
font-size: 12px;
font-weight: normal;
line-height: 20px;
/* Primary/Primary-100% */
color: #409EFF;
text-indent: 10px;
border-left:2px #409EFF solid;
}
.event2{
width: 84px;
height: 20px;
padding: 0px 12px 0px 0px;
border-radius: 2px;
background: #F0F9EB;
z-index: 999;
font-size: 12px;
line-height: 20px;
font-weight: normal;
/* Success/Success-100% */
color: #67C23A;
text-indent: 10px;
border-left:2px #67C23A solid;
}

</style>