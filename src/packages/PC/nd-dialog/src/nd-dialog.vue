<template>
  <div class="nd-dialog" :class="{'noCover': !!noCover, 'nd-no-header': !title && !slotTitle}">
    <el-dialog v-bind="$attrs" v-on="$attrs" :close-on-press-escape="closeOnEsc" :top="dialogTop" :close-on-click-modal="closeOnModal" :show-close="showClose" @open="opendialog" @close="closedialog" title="Tips" :width="dialogWidth" :center="center" :align-center="alignCenter">

      <template #header="{ titleId, titleClass }">
        <!-- 标题solt -->
        <slot name="title" v-if="slotTitle"></slot>
        <!-- 标题基本类型 -->
        <div v-if="!slotTitle" class="nd_my-header" :class="{'nd-title-center': titleAlign == 'center', 'nd-title-right': titleAlign == 'right'}">
          <el-icon v-if="showIcon && !slotIcon" class="nd-el-icon" :size="22" >
            <InfoFilled/>
          </el-icon>
          <!-- 图标solt -->
          <slot v-if="slotIcon" name="icon"></slot>
          <div :id="titleId" class="nd-diaHeader" :class="titleClass">
            <span>{{title}}</span>
          </div>
        </div>
      </template>

      <div :class="showDoubleF?'slotCenter doubleshad':showAbove?'slotCenter aboveshad':'slotCenter'">
        <div class="nd-sCenterP">
          <!-- 默认solt -->
          <slot></slot>
        </div>
      </div>

      <template #footer v-if="showFoot">
        <div  v-if="!slotFoot" class="nd_dialog-footer" :class="{'nd-foot-center': footAlign == 'center', 'nd-foot-left': footAlign == 'left'}">
          <nd-button @click="cancelDialog" :color="CancelColor">{{CancelStr}}</nd-button>
          <nd-button @click="confirmDialog" class="nd-sure-btn" type="primary" :color="ConfirmColor">{{ConfirmStr}}</nd-button>
        </div>
        <!-- 底部solt -->
        <slot v-if="slotFoot" name="foot"></slot>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, toRefs, onMounted, nextTick, useSlots } from "vue";
import { InfoFilled } from "@element-plus/icons-vue";
import ndButton from "../../nd-button/src/nd-button.vue";
export default {
  name: "nd-dialog",
  props: {
    dialogWidth: {
      // 宽度
      type: String,
      required: false,
      default: "400px"
    },
    showClose: { // 是否显示关闭按钮
      type: Boolean,
      required: false,
      default: true
    },
    showAbove: {  // 显示上面的横线
      type: Boolean,
      required: false,
      default: false
    },
    showDoubleF: { // 显示上下的横线
      type: Boolean,
      required: false,
      default: false
    },
    center: {   // 是否居中
      type: Boolean,
      required: false,
      default: false
    },
    showIcon: {  // 是否显示图标
      type: Boolean,
      required: false,
      default: false
    },
    showFoot: {  // 是否显示下方按钮
      type: Boolean,
      required: false,
      default: false
    },  
    title: {    // 标题
      type: String,
      required: true,
      default: ""
    },
    CancelStr: {    // 取消文字
      type: String,
      required: false,
      default: "取消"
    },
    CancelColor: {  // 取消按钮颜色
      type: String,
      required: false,
      default: '',
    },
    ConfirmStr: {   // 确定文字
      type: String,
      required: false,
      default: "确定"
    },
    ConfirmColor: { // 确认按钮颜色
      type: String,
      required: false,
      default: '',
    },
    dialogTop: {
      // 距离顶部高度
      type: String,
      required: false,
      default: "30vh"
    },
    closeOnModal: { // 点击遮罩层是否关闭
      type: Boolean,
      required: false,
      default: true
    },
    closeOnEsc: { // 点击esc是否关闭
      type: Boolean,
      required: false,
      default: true
    },
    noCover: {    // 是否用遮罩层
      type: Boolean,
      required: false,
      default: true,
    },  
    titleAlign: {  // 设置标题居中，默认居左
      type: String,
      required: false,
      default: 'left',
    },
    footAlign: {  // 设置页脚按钮，默认居右
      type: String,
      required: false,
      default: 'right',
    },
    alignCenter: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: { InfoFilled, ndButton },
  emits: ["dialogcancelClick", "dialogCloseClick", "dialogconfirmClick", "ndclosedialog", "dialogOpend"],
  setup(props, { emit, slots }) {
    const opendialog = async () => {
      try {
        emit('dialogOpend')
      } catch (error) {
        
      }
    }
    const handleClose = async (done) => {
      try {
        emit('dialogCloseClick', done)
      } catch (error) {
        
      }
    }
    const cancelDialog = async () => {
      try {
        emit('dialogcancelClick')
      } catch (error) {
        
      }
    }
    const confirmDialog = async () => {
      console.log('enter confirm');
      try {
        emit('dialogconfirmClick')
      } catch (error) {
        
      }
    }
    const closedialog = async () => {
      try {
        emit('ndclosedialog')
      } catch (error) {
        
      }
    }

    const slotDefault = !!useSlots().default;     // 默认插槽
    const slotTitle = !!useSlots().title;         // title插槽
    const slotFoot = !!useSlots().foot;           // 页脚插槽
    const slotIcon = !!useSlots().icon;           // icon插槽

    return {
      slots,
      handleClose,
      cancelDialog,
      confirmDialog,
      closedialog,
      opendialog,
      slotDefault,
      slotTitle,
      slotFoot,
      slotIcon,
    };
  }
};
</script>

<style scoped>
.nd-dialog >>> .theme-default-content h4 {
  margin-top: 0 !important;
  padding-top: 0 !important;
}
.nd-diaHeader {
  display: inline-block;
  min-height: 28px;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0px;
  word-break: break-all;
}
.nd-dialog .nd-el-icon {
  height: 28px;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0px;
  justify-content: center;
  align-items: center;
  color: #1780E3;
  text-align: left;
  margin-right: 10px;
  vertical-align: top
}
.nd-dialog .nd_my-header {
  /* min-height: 28px; */
  display: flex;
}
.nd-dialog >>> .el-dialog {
  padding-bottom: 16px;
}
.nd-dialog >>> .el-dialog__header {
  padding: 24px;
  padding-bottom: 16px;
}
.nd-dialog >>> .el-dialog__headerbtn {
  top: 14px!important;
}
.nd-dialog >>>  .el-dialog__body {
  padding: 0!important;
}
.doubleshad {
  border-top: rgba(0, 0, 0, 0.1) solid 1px;
  border-bottom: rgba(0, 0, 0, 0.1) solid 1px;
}
.nd_aboveshad {
  border-top: rgba(0, 0, 0, 0.1) solid 1px;
}
.nd-sCenterP {
  padding: 0 24px;
  max-height: 80vh;
  overflow-y: auto;
}
.nd-dialog >>> .el-overlay {
  background: rgba(0, 0, 0, 0.6);
}
.noCover >>> .el-overlay {
  background: rgba(0, 0, 0, 0) !important;
}
.nd-dialog >>> .el-dialog__footer {
  padding-top: 24px;
  padding-bottom: 4px;
  padding-right: 24px;
  padding-left: 8px;
}
.nd-dialog .nd-title-center {
  text-align: center;
}
.nd-dialog .nd-title-right {
  text-align: right;
}
.nd-dialog .nd-foot-center {
  text-align: center;
}
.nd-dialog .nd-foot-left {
  text-align: left;
}
/* .nd-dialog-center >>> .el-dialog{
  margin-top: 50vh;
  margin-left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
} */
.nd-no-header >>> .el-dialog__header{
  display: none;
}
.nd-sure-btn {
  margin-left: 16px;
}
.nd-dialog .el-dialog--center .nd-sure-btn {
  margin-left: 32px;
}
</style>