<template>
<div class="my-ndDialog">

  <el-button style="margin-top: 6px" type="primary" @click="showDialog(1)" plain>基础对话框</el-button>
  <el-button style="margin-top: 6px" type="primary" @click="showDialog(2)" plain>带图标的对话框</el-button>
  <el-button style="margin-top: 6px" type="primary" @click="showDialog(3)" plain>不带关闭按钮的对话框</el-button>
  <el-button style="margin-top: 6px" type="primary" @click="showDialog(4)" plain>居中的对话框</el-button>
  <el-button style="margin-top: 6px" type="primary" @click="showDialog(5)" plain>不带线的对话框</el-button>
  <el-button style="margin-top: 6px" type="primary" @click="showDialog(6)" plain>不带下方操作的对话框</el-button>
  <el-button style="margin-top: 6px" type="primary" @click="showDialog(7)" plain>极简对话框(白色背景)</el-button>
  <el-button style="margin-top: 6px" type="primary" @click="showDialog(8)" plain>极简对话框(黑色背景)</el-button>
  <ndDialog
    :modelValue="state.dialogVisible"
    :showFoot="state.showFoot"
    :ConfirmStr="state.ConfirmStr"
    :CancelStr="state.CancelStr"
    :center="state.center"
    :title="state.title"
    :showIcon="state.showIcon"
    :showClose="state.showClose"
    :dialogWidth="state.dialogWidth"
    @ndclosedialog="ndclosedialog"
    @dialogCloseClick="CloseClick"
    @dialogcancelClick="cancelClick"
    @dialogconfirmClick="confirmClick"
    @dialogOpend="opendialog"
  >
    <template #default>
      <p>默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。但是如果需要大规模替换样式， 例如： 将主题颜色从蓝色改为橙色或绿色，也许一个个将其覆盖起来不是一个好主意。</p>
    </template>
  </ndDialog>

  <!-- <ndDialog
    :modelValue="state.dialogVisible"
    :title="state.title"
    dialogTop="80vh"
    :noCover="true"
    ConfirmColor="#52C41A"
    showFoot
  >
    <template #default>
      <p>默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。但是如果需要大规模替换样式， 例如： 将主题颜色从蓝色改为橙色或绿色，也许一个个将其覆盖起来不是一个好主意。</p>
    </template>
    <template #icon>
      <div>这是一个icon</div>
    </template>
    <template #foot>
      <div>
        <button>123</button>
        <button>456</button>
      </div>
    </template>
  </ndDialog> -->

  
  
  <ndDialog
    :modelValue="state2.dialogVisible"
    title="这是一个提示信息"
    :showFoot="true"
    :noCover="!!state2.noCover"
    @dialogCloseClick="state2.dialogVisible = false"
    @dialogcancelClick="state2.dialogVisible = false"
    @dialogconfirmClick="state2.dialogVisible = false"
    :showClose="false"
    :alignCenter="true"
  >
    <template #default>
      <p>默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。但是如果需要大规模替换样式， 例如： 将主题颜色从蓝色改为橙色或绿色，也许一个个将其覆盖起来不是一个好主意。</p>
    </template>
  </ndDialog>

</div>
</template>

<script>
import ndDialog from "../../../../../src/packages/PC/nd-dialog/src/nd-dialog.vue";
import { ref, reactive, toRefs } from "vue";
import ndDialogs from "./ndDialogs.vue";

export default {
  name: "",
  components: { ndDialog, ndDialogs },
  setup() {
    const data = reactive({
      state: {
        dialogVisible: false,
        center: false,
        title: "停用此成员登陆状态？",
        showIcon: false,
        showFoot: false,
        CancelStr: "取消",
        ConfirmStr: "确定",
        showDoubleF: false,
        showAbove: false,
        showClose: true,
        dialogWidth: "60%"
      },
      state2: {
        dialogVisible: false,
        title: "极简标题",
        CancelStr: "取消",
        ConfirmStr: "确定",
        dialogWidth: "300px",
        noCover: false,
      },
    });
    // const state = ref({
      
    // });
    const showDialog = async evt => {
        data.state.dialogVisible = false;
        data.state.center = false;
        data.state.showIcon = false;
        data.state.showFoot = false;
        data.state.showDoubleF = false;
        data.state.showAbove = false;
        data.state.showClose = true;
      if (evt == 1) {
        data.state.dialogVisible = true;
        data.state.showFoot = true;
        data.state.showDoubleF = true;
        data.state.showClose = true;
        data.state.center = false;
      } else if (evt == 2) {
        data.state.dialogVisible = true;
        data.state.showFoot = true;
        data.state.showIcon = true;
        data.state.showDoubleF = true;
        data.state.showClose = true;
        data.state.center = false;
      } else if (evt == 3) {
        data.state.dialogVisible = true;
        data.state.showFoot = true;
        data.state.showIcon = true;
        data.state.showDoubleF = true
        data.state.showClose = false
        data.state.center = false;
      } else if (evt == 4) {
        data.state.dialogVisible = true;
        data.state.showFoot = true;
        data.state.showIcon = true;
        data.state.center = true;
        data.state.showDoubleF = true
        data.state.showClose = true
      } else if (evt == 5) {
        data.state.dialogVisible = true;
        data.state.showFoot = true;
        data.state.showIcon = false;
        data.state.center = true;
        data.state.showDoubleF = false
        data.state.showAbove = false
        data.state.showClose = false
      } else if (evt == 6) {
        data.state.dialogVisible = true;
        data.state.showFoot = false;
        data.state.showIcon = true;
        data.state.center = false;
        data.state.showDoubleF = false
        data.state.showAbove = false
        data.state.showClose = false
      } else if(evt == 7) {
        data.state2.noCover = true;
        data.state2.dialogVisible = true;
      } else if (evt == 8) {
        data.state2.noCover = false;
        data.state2.dialogVisible = true;
      }
    };
    const CloseClick = async done => {
      done();
    };
    const opendialog = async () => {
      console.log("弹框打开了");
    };
    const ndclosedialog = async () => {
      console.log("弹窗关闭了");
      data.state.dialogVisible = false;
    };
    const cancelClick = async () => {
      // alert("点击了取消按钮");
      console.log("点击了取消按钮");
      data.state.dialogVisible = false;
    };
    const confirmClick = async () => {
      // alert("点击了确定按钮");
      console.log("点击了确定按钮");
      data.state.dialogVisible = false;
    };

    const refData = toRefs(data);
    return {
      ...refData,
      CloseClick,
      cancelClick,
      confirmClick,
      showDialog,
      ndclosedialog,
      opendialog
    };
  }
};
</script>

<style scoped>
</style>