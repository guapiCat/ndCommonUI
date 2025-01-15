<template>
    <div>
        <h6>基础时间</h6>
        <nd-time-line-group-2>
            <nd-time-line-item-2 v-for="item in activities" :data="item" :timestamp="item.timestamp"></nd-time-line-item-2>
        </nd-time-line-group-2>


        <h6>卡片时间线</h6>
        <nd-time-line-group-2>
            <nd-time-line-item-2 :type="index==0 ? 'success' : ''" size="large" v-for="(item, index) in activities" :data="item" :timestamp="item.timestamp">
                <template v-if="index % 2 == 0">
                    <nd-card :shadow="true" :content="item.content" :footer="false">
                    </nd-card>
                </template>
            </nd-time-line-item-2>
        </nd-time-line-group-2>

    </div>
</template>
  
<script>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue';
import ndTimeLineGroup2 from './../../../../../src/packages/PC/nd-time-line-2/src/nd-time-line-group-2.vue'
import ndTimeLineItem2 from './../../../../../src/packages/PC/nd-time-line-2/src/nd-time-line-item-2.vue'
import ndCard from './../../../../../src/packages/PC/nd-card/src/nd-card.vue'
export default {
    name: '',
    components: {
        ndTimeLineGroup2,
        ndTimeLineItem2,
        ndCard
    },
    setup() {
        const data = reactive({
            activities: [
                {
                    content: 'Event start',
                    timestamp: '2018-04-15',
                    icon: 'MoreFilled',
                    color: '#0bbd87',
                    size: 'large',
                    type: 'primary',
                    title: '这是一个标题',

                },
                {
                    content: 'Approved',
                    timestamp: '2018-04-13 08:13:32',
                    hollow: true,
                    icon: ''
                },
                {
                    content: 'Success',
                    timestamp: '2018-04-11',
                    icon: ''
                },{
                    content: 'Approved',
                    timestamp: '2018-04-13 08:13:32',
                    hollow: true,
                    icon: ''
                }
            ],
        });

        onBeforeMount(() => { });
        onMounted(() => { });

        const refData = toRefs(data);
        return {
            ...refData,
        };
    },
};
</script>
  
<style scoped>
h6 {
    margin-bottom: 20px;
}
</style>