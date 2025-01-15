<template>
  <div class="nd_alert"
    :class="{
      'nd_primary': type == 'primary',
      'nd_success': type == 'success',
      'nd_warning': type == 'warning',
      'nd_danger': type == 'danger',
      'nd_info': !type,
    }">
    <el-alert
      :class="desType?'nd_correl':''"
      :closable="closable"
      :close-text="closeText"
      :center="center"
      @close="closeAlert"
    >
      <div class="nd_alert_div" v-if="title && description">
        <el-icon class="nd_el-icon" :size="32" v-if="showIcon">
          <component :is="typeComputed"> </component>
        </el-icon>
        <div class="nd_alert_content el-alert__content">
          <span class="nd_con_title">{{title}}</span>
          <span class="nd_con_corr" @click="corrClick" v-if="desType">{{correlation}}</span>
          <p class="nd_con_description" :class="{'nd_con_party': !isfold || !party}" >{{description}}</p>
          <span class="nd_con_foldBotton" v-if="isfold" @click="switchover"> {{party?'收起':'展开'}} </span>
        </div>
      </div>
      <div class="nd_alert_div" v-else>
        <el-icon class="nd_el-icon" :size="18" v-if="showIcon">
          <component :is="typeComputed" ></component>
        </el-icon>
        <div class="nd_alert_content el-alert__content">
          <span class="nd_con_title2">{{title||description}}</span>
          <span class="nd_con_corr2" @click="corrClick" v-if="desType">{{correlation}}</span>
        </div>
      </div>
    </el-alert>
  </div>
</template>

<script>
import { reactive, toRefs,ref, onMounted, nextTick, computed } from "vue";
import { SuccessFilled, InfoFilled, WarningFilled, CircleCloseFilled } from "@element-plus/icons-vue";
export default {
  props: {
    desType: {
      // 是否有相关操作
      type: Boolean,
      required: false,
      default: false
    },
    correlation: {
      // 相关操作按钮文字
      type: String,
      required: true,
      default: "相关操作"
    },
    title: {
      // 文字介绍 && 内容
      type: String,
      required: true,
      default: ""
    },
    type: {
      // 提示类型
      type: String,
      required: false,
      default: "info"
    },
    description: {
      // 提示文字
      type: String,
      required: false,
      default: ""
    },
    center: {
      // 是否居中
      type: Boolean,
      required: false,
      default: false
    },
    closable: {
      // 是否显示关闭按钮
      type: Boolean,
      required: false,
      default: false
    },
    closeText: {
      // 关闭按钮的内容(默认为×)
      type: String,
      required: false,
      default: ""
    },
    showIcon: {
      // 是否显示图片
      type: Boolean,
      required: false,
      default: false
    },
    effect: {
      // 模式
      type: String,
      required: false,
      default: "light"
    },
    isfold: {
      // 是否显示展开收起
      type: Boolean,
      required: false,
      default: false
    }
  },
  name: "nd-alert",
  components: { SuccessFilled, InfoFilled, WarningFilled, CircleCloseFilled },
  emits: ["corrButtonClick", "closeButtonClick"],
  setup(props, { emit, slots }) {
    const data = reactive({
      party: true,      // 控制展开收起
    });

    const typeComputed = computed(() => {
      if(props.type == 'primary') {
        return 'InfoFilled';
      } else if (props.type == 'success') {
        return 'SuccessFilled';
      } else if (props.type == 'warning') {
        return 'WarningFilled';
      } else if (props.type == 'danger') {
        return 'CircleCloseFilled';
      } else {
        return 'InfoFilled';
      }
    })

    onMounted(() => {
      nextTick(() => { checkHeight(); });
    });

    const corrClick = async () => {
      try {
        emit('corrButtonClick')
      } catch (error) { }
    };
    const closeAlert = async () => {
      try {
        emit('closeButtonClick')
      } catch (error) { }
    };
    const checkHeight = async () => {       // 初始化 判断展开收起
      try {
        let isfoldHight = 0
        let isfold = document.querySelector(".nd_con_description");
        if (isfold) {
          isfoldHight = isfold.clientHeight
        }
        if (isfoldHight > 24) {
          isfold.value = true
        }else{
          isfold.value = false
        }
      } catch (error) { console.log(error); }
    };
    const switchover = async () => {
      try {
        data.party = !data.party;
      } catch (error) { console.log(error); }
    };

    const refData = toRefs(data);
    return {
      ...refData,
      slots,
      checkHeight,
      switchover,
      corrClick,
      closeAlert,
      typeComputed,
    };
  },
};
</script>

<style scoped>
.nd_alert >>> .el-alert__description {
  margin: 0 !important;
}

.nd_alert >>> .el-alert__description > span {
  margin: 0;
}

.nd_alert >>> .el-alert__description > p {
  margin: 5px 0 0 0;
}
.nd_alert >>> .el-alert__title {
  font-size: 14px;
  font-weight: normal;
  line-height: 21px;
}
.nd_alert >>> .el-alert {
  padding: 0;
}
.nd_info >>> .el-alert {
  background-color: var(--el-alert-bg-color);
  color: var(--el-color-info);
}

.nd_primary >>> .el-alert {
  background: rgba(23, 128, 227, 0.1);
  color: #1780e3 !important;
}
.nd_primary >>> .el-alert__description {
  color: #1780e3 !important;
}

.nd_success >>> .el-alert {
  background: rgba(82, 196, 26, 0.1);
  color: #52c41a;
}
.nd_success >>> .el-alert__description {
  color: #52c41a;
}

.nd_warning >>> .el-alert {
  background: rgba(250, 140, 22, 0.1);
  color: #fa8c16;
}
.nd_warning >>> .el-alert__description {
  color: #fa8c16;
}

.nd_danger >>> .el-alert {
  background: rgba(255, 77, 79, 0.1);
  color: #ff4d4f;
}
.nd_danger >>> .el-alert__description {
  color: #ff4d4f;
}

.nd_alert_div {
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  opacity: 1;
  display: flex;
  /* align-items: center; */
  padding: 8px 10px; 
}

.nd_alert >>> .nd_el-icon {
  margin-top: 0px;
}

.nd_alert >>> .el-alert>.el-alert__content {
  width: 100%;
}
.nd_alert_content {
  flex: 1;
  overflow: hidden;
}
.el-alert__description {
  width: 100%;
}
.nd_correl .el-alert__content .nd_con_title {
  color: #333333 !important;
}
.nd_correl .el-alert__content .nd_con_description {
  color: #333333 !important;
}
.nd_correl .el-alert__content .nd_con_title2 {
  color: #333333 !important;
}

.nd_con_corr {
  font-size: 14px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 0px;
  margin-left: 3px;
  cursor: pointer;
}
.nd_con_corr2 {
  font-size: 14px;
  font-weight: normal;
  line-height: 22px;
  letter-spacing: -0.01px;
  margin-left: 6px;
  cursor: pointer;
}

.nd_con_title {
  font-size: 14px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 0px;
}
.nd_con_description {
  font-size: 14px;
  font-weight: normal;
  line-height: 22px;
  letter-spacing: -0.01px;
}
.nd_con_title2 {
  font-size: 14px;
  font-weight: normal;
  line-height: 22px;
  letter-spacing: -0.01px;
}
.nd_con_party {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.nd_con_foldBotton {
  height: 22px;
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  letter-spacing: -0.01px;
  cursor: pointer;
}
</style>