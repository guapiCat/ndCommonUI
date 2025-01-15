<!-- messageBox -->
<template>
<div class="dialog_views">
    <div class="UImask"></div>
    <transition name="confirm-fade">
        <div style="z-index: 9998" class="common-ts-tc">
            <div class="ts-tcCnt">
                <p class="txt">{{content}}</p>
            </div>
            <div class="clearfix ts-tcBtn ts-tcBtn02">
                <a @click="cancelCallback">取消</a>
                <a @click="confirmCallback">确定</a>
            </div>
        </div>
    </transition>
</div>
</template>

<script>
import {
    ref
} from 'vue'
import {
    onClickOutside
} from '@vueuse/core'
export default {
    components: {},
    data() {
        return {};
    },
    props: {
        content: {
            // 提示内容
            type: String,
            default: "Delete this record?"
        },
        // 确认按钮
        confirmCallback: {
            type: Function,
            default: () => {}
        },
        // 取消按钮
        cancelCallback: {
            type: Function,
            default: () => {}
        }
    },
    setup(props) {
        // 点击 target 目标元素外部相当于点击了取消
        const target = ref(null)
        onClickOutside(target, () => {
            props.cancelCallback()
        })
        return {
            target
        }
    }
};
</script>

<style  scoped>
.UImask {
    position: fixed;
    z-index: 9996;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
}

.common-ts-tc {
    z-index: 9997;
    background: rgba(242, 242, 242, 0.9);
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;

    .ts-tcBtn a:first-child {
        border-left: 0;
    }
}

/* 进入和出去的动画 */
.confirm-fade-enter-active {
    animation: bounce-in 0.5s;
}

.confirm-fade-leave-active {
    animation: bounce-in 0.5s reverse;
}

.confirm-fade-enter,
.confirm-fade-leave-to {
    opacity: 0;
}

@keyframes bounce-in {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0.8;
    }

    100% {
        opacity: 1;
    }
}
</style><style scoped>
.common-ts-tc .ts-tcCnt {
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid #9d9ea1;
}

.clearfix {
    zoom: 1;
}

.common-ts-tc .ts-tcBtn a:first-child {
    border-left: 0;
}

.common-ts-tc .ts-tcBtn span,
.common-ts-tc .ts-tcBtn a {
    display: inline-block;
    float: left;
    text-align: center;
    height: 55px;
    line-height: 55px;
    color: #007aff;
    font-size: 16px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-left: 1px solid #9d9ea1;
    font-weight: bold;
}

.ts-tcBtn02 a {
    width: 50%;
}
</style>
