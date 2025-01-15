<template>
    <div>

        <h5>不同类型提示</h5>

        <nd-button type="success" @click="showNofify('success')">成功通知</nd-button>
        <nd-button type="primary" @click="showNofify('primary')">基础通知</nd-button>
        <nd-button type="warning" @click="showNofify('warning')">警告通知</nd-button>
        <nd-button type="danger" @click="showNofify('danger')">错误通知</nd-button>
        <!-- <nd-button type="primary" @click="ndShow">函数打开通知</nd-button> -->
        <!-- <nd-button type="primary" @click="ndClose">函数关闭通知</nd-button> -->
        <nd-notify v-model:show="show" :type="showType" @click="onClick" @opened="onOpened" @close="onClose">
            <p>{{showText}}</p>
        </nd-notify>
    </div>
</template>
<script setup>
import { ref, reactive, nextTick } from 'vue';
import ndButton from '../../../../../src/packages/APP/nd-button/index';
// import {ndNotify, ndShowNotify, ndCloseNotify} from '../../../../../src/packages/APP/nd-notify/index';
import ndNotify from '../../../../../src/packages/APP/nd-notify/index';

const show = ref(false);
const showType = ref('');
const showText = ref('');

const showNofify = (type) => {
    show.value = true;
    showType.value = type;
    switch (type) {
        case 'success':
            showText.value = '成功通知';
            break;
        case 'primary':
            showText.value = '基础通知';
            break;
        case 'warning':
            showText.value = '警告通知';
            break;
        case 'danger':
            showText.value = '错误通知';
            break;
        default:
            break;
    }
    setTimeout(() => {
        show.value = false;
    }, 2000);
}

const ndShow = () => {
    // ndShowNotify(
    //     {
    //         message: '函数唤起提示',
    //         duration: 0,
    //     }
    // )
}

const ndClose = () => {
    // ndCloseNotify();
}

const onClick = (e) => {
    console.log('click', e)
}

const onOpened = (e) => {
    console.log('opened', e)
}

const onClose = (e) => {
    console.log('close', e)
}

</script>
<style scoped>
button {
    margin-right: 20px;
    margin-bottom: 20px;
}
</style>