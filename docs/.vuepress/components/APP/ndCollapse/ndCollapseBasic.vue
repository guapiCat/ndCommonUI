<template>
    <div>
        <nd-collapse v-model="active" @change="onChange" ref="ndCollapseRef">
            <nd-collapse-item title="标题1" name="1">
                代码是写出来给人看的，附带能在机器上运行。
            </nd-collapse-item>
            <nd-collapse-item title="标题2" name="2" ref="ndCollapseItemRef">
                技术无非就是那些开发它的人的共同灵魂。
            </nd-collapse-item>
            <nd-collapse-item title="标题3" name="3">
                在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
            </nd-collapse-item>
        </nd-collapse>
        <p>通过 ndCollapse 组件实例的 ndToggleAll 方法，来控制所有面板的打开和关闭</p>
        <nd-button type="primary" @click="ClickCollapse(true)">打开折叠面板</nd-button>
        <nd-button class="close-btn" type="primary" @click="ClickCollapse(false)">关闭折叠面板</nd-button>
        <nd-button class="close-btn" type="primary" @click="ClickCollapse()">切换折叠面板</nd-button>
        <p>通过 ndCollapseItem 组件实例的 ndToggle 方法，来控制当前面板的打开和关闭</p>
        <nd-button type="primary" @click="ClickCollapseItem(true)">打开折叠面板2</nd-button>
        <nd-button class="close-btn" type="primary" @click="ClickCollapseItem(false)">关闭折叠面板2</nd-button>
        <nd-button class="close-btn" type="primary" @click="ClickCollapseItem()">切换折叠面板2</nd-button>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
import ndCollapse from '../../../../../src/packages/APP/nd-collapse/index';
import ndCollapseItem from '../../../../../src/packages/APP/nd-collapse-item/index';
import ndButton from '../../../../../src/packages/APP/nd-button/index';

const active = ref(['1'])

// 监听所有面板的打开状态
const onChange = name => {
    // console.log(name)
};

const ndCollapseRef = ref(null);
// 所有面板的状态切换方法
const ClickCollapse = (boo = null) => {
    if (boo === null) {
        ndCollapseRef.value.ndToggleAll();
    } else {
        ndCollapseRef.value.ndToggleAll(boo);
    }
}

const ndCollapseItemRef = ref(null);
const ClickCollapseItem = (boo = null) => {
    if (boo === null) {
        ndCollapseItemRef.value.ndToggle();
    } else {
        ndCollapseItemRef.value.ndToggle(boo);
    }
}
</script>
<style scoped>
.close-btn {
    margin-left: 20px;
}
</style>