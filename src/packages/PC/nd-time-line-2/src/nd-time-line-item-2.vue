<template>
  <div class="nd-time-line-item-2">
    <div class="time-line-time" v-if="!hideTimestamp">
      <slot name="timestampSlot">
        <template v-if="!!timestamp">{{ timestamp }}</template>
        <template v-else>{{ timeFormatFn ? timeFormatFn(data[props.timestamp]) : data[props.timestamp] }}</template>
      </slot>
    </div>
    <div class="time-line-line" :style="size.includes('px') ? `width:${size}` : ''">
      <div class="line-top"></div>
      <div :class="{'line-dot':true, large: size == 'large' }" :style="size.includes('px') ? `width:${size};height:${size}` : ''">
        <slot name="dot">
          <!-- v-html="`
            <el-icon size='20'><${icon} /></el-icon>
          `" -->
          <!-- <div class="icon" style="background-color: transparent
          ;" v-if="!!icon" >
          <component :is="icon"></component>
          </div> -->
          <div :class="{ icon: true, hollow}"
            :style="`background-color:${color || (type && `var(--el-color-${type})`)}!important`">

          </div>
        </slot>
      </div>
      <div class="line-bottom"></div>
    </div>

    <div class="time-line-content">
      <slot>
        {{ data.content || '' }}
      </slot>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';
export default {
  name: 'ndTimeLineItem2',
  props: {
    data: {
      type: Object,
      default: () => { }
    },
    timestamp: {
      // 显示时间戳
      type: String,
      default: ''
    },
    hideTimestamp: {
      // 是否隐藏时间戳
      type: Boolean,
      default: false
    },
    type: {
      // primary  success  danger warning info
      type: String,
      defualt: ''
    },
    color: {
      // 自定义dot颜色
      type: String,
      default: ''
    },
    size: {
      // normal large
      type: String,
      default: 'normal'
    },
    hollow: {
      // 是否空心
      type: Boolean,
      defualt: false
    },
    timeFormatFn: {
      // 时间格式化显示
      type: Function,
      default: null
    }
  },
  setup(prop) {
    const data = reactive({
    });
    const { proxy } = getCurrentInstance();

    onBeforeMount(() => {
    });
    onMounted(() => {
      console.log(prop)
     });

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>

<style scoped lang="less">
.nd-time-line-item-2 {
  display: flex;
  justify-content: flex-start;
  height: fit-content;

  .time-line-time {
    display: flex;
    align-items: center;
    color: #cfcfcf;
    margin-right: 5px;
  }

  .time-line-line {
    // height: 100%;
    min-width: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    .line-top,
    .line-bottom {
      width: 2px;
      height: 50%;
      background-color: #cfcfcf;
    }

    .line-dot {
      position: absolute;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      // background-color: #cfcfcf;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      .icon {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #cfcfcf;
      }
      .icon.hollow{
        position: relative
      }
      .icon.hollow::before{
        content: '';
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        border-radius: 50%;
        background-color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .line-dot.large{
        width: 18px;
        height: 18px;
      }
  }

  .time-line-content {
    padding: 10px 10px;
    flex: 1
  }
}

.nd-time-line-item-2.nd-time-line-first {
  .line-top {
    background-color: transparent;
  }
}

.nd-time-line-item-2.nd-time-line-last {
  .line-bottom {
    background-color: transparent;
  }
}

li {
  /* 去除li标签的默认样式 */
  list-style-type: none !important;
}</style>