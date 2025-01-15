<template>
    <div class="step-content">
        <h3 class="p-conter">横向步骤条样式1</h3>
        <ndSteps :active="data.active1" @ndStepsClickStep="ndStepsClickStep1" type="1">
            <ndStep v-for="(item, i) in data.steplist1" :key="i" :is-error="item.isError" :index="i">
                <p style="text-align: center;" :class="{'error':item.isError}">{{ item.title }} </p>
            </ndStep>
        </ndSteps>

        <h3 class="p-conter">横向步骤条样式1 修改完成图标</h3>
        <ndSteps :active="data.active1" @ndStepsClickStep="ndStepsClickStep1" type="1" finish-icon="info">
            <ndStep v-for="(item, i) in data.steplist1" :key="i" :is-error="item.isError" :index="i">
                <p style="text-align: center;" :class="{'error':item.isError}">{{ item.title }} </p>
            </ndStep>
        </ndSteps>

        <h3 class="p-conter">横向步骤条样式2</h3>
        <ndSteps :active="data.active1" @ndStepsClickStep="ndStepsClickStep1" type="2">
            <ndStep v-for="(item, i) in data.steplist1" :key="i" :is-error="item.isError" :index="i">
                <p style="text-align: center;" :class="{'error':item.isError}">{{ item.title }} </p>
            </ndStep>
        </ndSteps>

        <h3 class="p-conter">横向步骤条样式2 修改完成图标</h3>
        <ndSteps :active="data.active1" @ndStepsClickStep="ndStepsClickStep1" type="2" finish-icon="info">
            <ndStep v-for="(item, i) in data.steplist1" :key="i" :is-error="item.isError" :index="i">
                <p style="text-align: center;" :class="{'error':item.isError}">{{ item.title }} </p>
            </ndStep>
        </ndSteps>


        <h3 class="p-conter">横向步骤条样式3</h3>
        <ndSteps :active="data.active1" @ndStepsClickStep="ndStepsClickStep1">
            <ndStep v-for="(item, i) in data.steplist1" :key="i" :is-error="item.isError" :index="i">
                <p style="text-align: center;" :class="{'error':item.isError}">{{ item.title }} </p>
            </ndStep>
        </ndSteps>

        <h3 class="p-conter">横向步骤条样式4</h3>
        <ndSteps :active="data.active1" @ndStepsClickStep="ndStepsClickStep1" active-icon="success" active-color="#52C41A" finish-icon="arrow" inactive-icon="arrow">
            <ndStep v-for="(item, i) in data.steplist1" :key="i" :is-error="item.isError" :index="i">
                <p style="text-align: center;" :class="{'error':item.isError}">{{ item.title }} </p>
            </ndStep>
        </ndSteps>

        <h3 class="p-conter">多行横向步骤条样式1</h3>
        <ndSteps :active="data.active1" @ndStepsClickStep="ndStepsClickStep1" type="1">
            <ndStep v-for="(item, i) in data.steplist2" :key="i" :is-error="item.isError" :index="i">
                <p style="text-align: center;" :class="{'error':item.isError}">{{ item.title }} </p>
                <p style="text-align: center;" :class="{'error':item.isError}">{{ item.info }} </p>
            </ndStep>
        </ndSteps>

        <h3 class="p-conter">多行横向步骤条样式2</h3>
        <ndSteps :active="data.active1" @ndStepsClickStep="ndStepsClickStep1" type="2">
            <ndStep v-for="(item, i) in data.steplist2" :key="i" :is-error="item.isError" :index="i">
                <p style="text-align: center;" :class="{'error':item.isError}">{{ item.title }} </p>
                <p style="text-align: center;" :class="{'error':item.isError}">{{ item.info }} </p>
            </ndStep>
        </ndSteps>
   
        <h3 class="p-conter">竖向步骤条</h3>
        <ndSteps :active="data.active2" :direction="data.direction2" @ndStepsClickStep="ndStepsClickStep2">
            <ndStep v-for="(item, i) in data.steplist2" :key="i" :is-error="item.isError">
                <div :class="{'error':item.isError}">{{ item.title }}</div>
                <div :class="{'error':item.isError}">{{ item.info }}</div>
            </ndStep>
        </ndSteps>

        <p class="p-conter">竖向步骤条</p>
        <ndSteps :active="data.active4" :direction="data.direction4" :active-color="data.activeColor4" :inactive-color="data.inactiveColor4"
            @ndStepsClickStep="ndStepsClickStep4">
            <ndStep v-for="(item, i) in data.steplist4" :key="i">
                <div :class="{'error':item.isError}">{{ item.title }}</div>
                <div :class="{'error':item.isError}">{{ item.info }}</div>
            </ndStep>
        </ndSteps> 
    </div>
</template>
  
<script setup>
import { reactive } from 'vue';
import ndSteps from '../../../../../src/packages/APP/nd-steps/index.js';
import ndStep from '../../../../../src/packages/APP/nd-step/index.js';
const data = reactive({
    active1: 1,
    steplist1: [
        {
            title: "买家下单"
        },
        {
            title: "买家支付"
        }, {
            title: "商家确认"
        }, {
            title: "商家发货"
        }, {
            title: "确认收货",
            isError:true
        }, {
            title: "订单完成"
        }
    ],
    active2: 1,
    direction2: "vertical",
    steplist2: [
        {
            title: "【城市】物流状态1",
            info: "2016-07-12 12:40:00"
        },
        {
            title: "【城市】物流状态2",
            info: "2016-07-12 15:40:00",
            isError: false
        }, {
            title: "【城市】物流状态3",
            info: "2016-07-12 18:40:00",
            isError: true
        }, {
            title: "【城市】物流状态4",
            info: "2016-07-12 20:40:00"
        }
    ],
    active3: 2,
    direction3: "vertical",
    activeColor3: "green",
    inactiveColor3: "#cccccc",
    steplist3: [
        {
            title: "买家下单"
        },
        {
            title: "买家支付"
        }, {
            title: "商家确认"
        }, {
            title: "商家发货"
        }, {
            title: "确认收货"
        }, {
            title: "订单完成"
        }
    ],
    active4: 2,
    direction4: "vertical",
    activeColor4: "red",
    inactiveColor4: "#c1c1c1",
    steplist4: [
        {
            title: "【城市】物流状态1",
            info: "【城市】物流状态1【城市】物流状态1【城市】物流状态1【城市】物流状态1【城市】物流状态1【城市】物流状态1【城市】物流状态12016-07-12 12:40"
        },
        {
            title: "【城市】物流状态2",
            info: "2016-07-12 13:40"
        }, {
            title: "【城市】物流状态3",
            info: "2016-07-12 15:40"
        }, {
            title: "【城市】物流状态4",
            info: "2016-07-12 18:40"
        }
    ]
})

const ndStepsClickStep1 = (index) => {
    console.log("ndStepsClickStep1 =" + index);
}
const ndStepsClickStep2 = (index) => {
    console.log("ndStepsClickStep2 =" + index);
}
const ndStepsClickStep3 = (index) => {
    console.log("ndStepsClickStep3 =" + index);
}
const ndStepsClickStep4 = (index) => {
    console.log("ndStepsClickStep4 =" + index);
}

</script>

<style lang="scss" scoped>
.p-conter {
    font-size: 14px;
    color: #666666;
}

.error{
    color: var(--nd-warning-color);
}
</style>