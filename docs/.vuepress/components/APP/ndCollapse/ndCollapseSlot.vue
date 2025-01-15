<template>
    <div>
        <nd-collapse v-model="active" accordion>
            <nd-collapse-item title="标题1" name="1">
                <template #title>
                    <div>自定义标题 <van-icon name="question-o" /></div>
                </template>
                代码是写出来给人看的，附带能在机器上运行。
            </nd-collapse-item>
            <nd-collapse-item title="标题2" name="2">
                <template #value>
                    <div>自定义右侧</div>
                </template>
                技术无非就是那些开发它的人的共同灵魂。
            </nd-collapse-item>
            <nd-collapse-item title="标题3" name="3">
                <template #label>
                    <div>自定义label</div>
                </template>
                在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
            </nd-collapse-item>
            <nd-collapse-item title="标题4" name="4">
                <template #icon>
                    <div>自定义icon<van-icon name="question-o" /></div>
                </template>
                技术无非就是那些开发它的人的共同灵魂。
            </nd-collapse-item>
            <nd-collapse-item title="标题5" name="5">
                <template #rightIcon>
                    <div>自定义右侧icon<van-icon name="question-o" /></div>
                </template>
                在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
            </nd-collapse-item>
        </nd-collapse>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
import ndCollapse from '../../../../../src/packages/APP/nd-collapse/index';
import ndCollapseItem from '../../../../../src/packages/APP/nd-collapse-item/index';

const active = ref('1')

</script>
<style scoped>

</style>