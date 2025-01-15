<template>
  <div class="nd-button">
    <el-button :class="{'dot':dot, 'add-color': !!color}" :type="!color ? type : 'default'" :color="color" :size="size" :disabled="disabled">
      <template v-if="content"> {{content}} </template>
      <template v-else>
        <slot></slot>
      </template>
    </el-button>
  </div>
</template>
<script>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue';
export default {
  name: "nd-button",
  props: {
    content: {
      type: String,
      default: "",
    },
    dot: {          // 虚线
      type: Boolean,
      default: false,
    },
    type: {         // 按钮类型
      type: String,
      default: 'info',
    },
    size: {
      type: String,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '',
    }

  },
  setup(props, { emits, slots }) {
    const data = reactive({});
    onBeforeMount(() => {});
    onMounted(() => { });

    const refData = toRefs(data);
    return {
      slots,
      ...refData
    };
  },
  
};
</script>

<style scoped>
.nd-button >>> .dot{
  border:1px dashed var(--el-button-bg-color)!important
}
.nd-button >>> .el-button{
  font-size: 14px;
  border-radius: 4px;
  padding: 0 16px;
}
.nd-button >>>.el-button.el-button--info{

  background:transparent;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
  border-radius: 4px;
  border: 1px solid rgba(51, 51, 51, 0.4);

}
.nd-button >>>.el-button.el-button--info:hover{
  background: rgba(51, 51, 51, 0.05);
  border: 1px solid rgba(51, 51, 51, 0.4);
  color: #666666;
}
.nd-button >>>.el-button.el-button--info:active{
  background: rgba(51, 51, 51, 0.1);
  border: 1px solid rgba(51, 51, 51, 0.4);
}
.nd-button >>>.el-button.el-button--primary{
  background: #1780E3;
  border: none;
}
.nd-button >>>.el-button.el-button--primary:hover{
  background: rgba(23, 128, 227, 0.8);
}
.nd-button >>>.el-button.el-button--primary:active{
  background: #0C70CE;
}
.nd-button >>>.el-button.el-button--primary:focus{
  background: #0C70CE;
}
/* .nd-button >>>.el-button.el-button--primary{
  background: #0C76CC;
}
.nd-button >>>.el-button.el-button--primary:hover{
  background: linear-gradient(0deg, rgba(12, 118, 204, 0.8), rgba(12, 118, 204, 0.8)), #FFFFFF;
}
.nd-button >>>.el-button.el-button--primary:active{
  background: #0062B2;
} */
.nd-button >>>.el-button.el-button--primary.is-disabled{
  background: rgba(23, 128, 227, 0.2);
  border:none
}

.nd-button >>>.el-button.el-button--success.is-disabled{
  background: rgba(82, 196, 26, 0.4);
  border:none
}
.nd-button >>>.el-button.el-button--warning.is-disabled{
 background: rgba(250, 140, 22, 0.2);
  border:none
}
.nd-button >>>.el-button.el-button--danger.is-disabled{
 /* Danger/Red/20% */
background: rgba(255, 77, 79, 0.2);
 border:none
}
.nd-button >>>.el-button.el-button--info.is-disabled{
  /* 背景色/100% */
  color: rgba(51, 51, 51, 0.2);
  font-size: 16px;
  font-weight: normal;
}
.nd-button >>>.el-button.is-disabled.is-text{
  /* Danger/Red/20% */
  border:none;
  color: rgba(12, 112, 206, 0.2);
  font-size: 16px;
  font-weight: normal;
}
.nd-button >>>.el-button.el-button--primary.is-plain{
  /* White */
  border-radius: 4px;
  background: #FFFFFF;
  font-size: 16px;
  /* 图纸通品牌色 */
  color: #1780E3;
  border: 1px solid #1780E3;
}
.nd-button >>>.el-button.el-button--primary.is-plain:hover {
  background: rgba(23, 128, 227, 0.05);
  border: 1px solid #0C76CC;
}
.nd-button >>>.el-button.el-button--primary.is-plain:active {
  background: rgba(23, 128, 227, 0.1);
  border: 1px solid #0C76CC;
  color: #0C76CC;
}
.el-button.is-text{
  /* 图纸通品牌色 */
  color: #1780E3;
  font-size: 16px;
  font-weight: normal;
}
.nd-button >>>.el-button.el-button--success{
  background: #52C41A;
  border: none;
}
.nd-button >>>.el-button.el-button--success:hover{
  background: rgba(82, 196, 26, 0.8);
}
.nd-button >>>.el-button.el-button--success:active{
  background: #4CAA1E;
}
.nd-button >>>.el-button.el-button--success:focus{
  background: #4CAA1E;
}
.nd-button >>>.el-button.el-button--warning{
  background: #FA8C16;
  border: none;
}
.nd-button >>>.el-button.el-button--warning:hover{
  background: rgba(250, 140, 22, 0.8);
}
.nd-button >>>.el-button.el-button--warning:active{
  background: #CB6C06;
}
.nd-button >>>.el-button.el-button--warning:focus{
  background: #CB6C06;
}
.nd-button >>>.el-button.el-button--danger{
  background: #FF4D4F;
  border: none;
}
.nd-button >>>.el-button.el-button--danger:hover{
  background: rgba(255, 77, 79, 0.8);
}
.nd-button >>>.el-button.el-button--danger:active{
  background: #DC0002;
}
.nd-button >>>.el-button.el-button--danger:focus{
  background: #DC0002;
}
.nd-button >>>.el-button--small{
  /* width: 80px; */
  height: 24px;
  font-size: 12px;
  font-weight: normal;
}
.nd-button >>>.el-button--default{
  /* width: 88px; */
  height: 32px;
  font-size: 14px;
  font-weight: normal;
}
.nd-button >>>.el-button--large{
  /* width: 96px; */
  height: 40px;
  /* T6/16px */
  font-size: 16px;
  font-weight: normal;
}
.nd-button {
  display: inline-block;
}
.nd-button .add-color {
  color: #FFFFFF;
}
</style>