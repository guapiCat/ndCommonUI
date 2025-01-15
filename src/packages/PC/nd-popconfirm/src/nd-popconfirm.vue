<template>
  <el-popover
    v-bind="$attrs"
    v-on="$attrs"
    trigger="click"
    :width="popWidth"
    v-model:visible="visible"
  >
    <template #reference>
      <slot></slot>
    </template>
    <div>
      <div class="nd-pop-title">
        <img v-if="showIcon" src="./question.png" class="nd-question-icon" />
        <span class="nd-pop-titles" v-if="!content"> {{ title }} </span>
        <span class="nd-bold-title" v-if="content"> {{ title }} </span>
      </div>
      <div class="nd-pop-content" v-if="content"> {{ content }} </div>
      <div class="nd-pop-block"></div>
      <el-button size="small" @click="confirm" class="nd-pop-btn" type="primary" >确定</el-button >
      <el-button size="small" @click="cancel" class="nd-pop-btn" >取消</el-button >
    </div>
  </el-popover>
</template>

<script>
import { reactive, toRefs, onMounted, getCurrentInstance } from "vue";

export default {
  name: "nd-popconfirm",
  props: {
    title: {						// 标题
      type: String,
      default: "",
    },
    content: {					// 内容
      type: String,
      default: "",
    },
    showIcon: {					// 是否展示图标
      type: Boolean,
      default: false,
    },
    popWidth: {					// 宽度
      type: String,
      default: "250px",
    },
  },

  setup(props, { emits, slots }) {
    const data = reactive({
      visible: false,
    });
    const { proxy } = getCurrentInstance();

    // 确定
    const confirm = (e) => {
      data.visible = false;
      proxy.$emit("confirm", e);
    };

    // 取消
    const cancel = (e) => {
      data.visible = false;
      proxy.$emit("cancel", e);
    };
    onMounted(() => {});
    const refData = toRefs(data);
    return {
      ...refData,
      slots,
      confirm,
      cancel,
    };
  },
};
</script>

<style lang="less">
.el-popper {
  width: 300px;
}
.el-popover__title {
  display: none;
  font-size: 12px;
  color: rgba(51, 51, 51, 0.8);
  line-height: 18px;
  height: 18px;
  margin-bottom: 0px;
}

.nd-pop-title {
  font-size: 12px;
  color: rgba(51, 51, 51, 0.8);
  line-height: 18px;
  margin-bottom: 0px;
  display: flex;
  .nd-question-icon {
    // flex:1;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 4px;
    transform: translateY(1px);
  }
  span {
    display: inline-block;
  }
  .nd-bold-title {
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    color: #333333;
  }
	.nd-pop-titles {
		display: inline-block;
	}
}
.nd-pop-content {
  font-size: 12px;
  line-height: 18px;
  margin-top: 10px;
  margin-left: 21px;
  color: #333333;
}
.nd-pop-block {
  height: 16px;
  width: 100%;
}
.nd-pop-btn {
  float: right;
  margin-left: 12px;
}

.el-popconfirm__action {
  margin-top: 20px !important;
}
.el-popper {
  padding: 12px 16px !important;
}
.el-popconfirm__icon {
  margin-right: 8px;
  font-size: 16px;
}
.el-button--small {
  height: 24px;
  padding: 5px 16px;
}
.el-button--primary {
  --el-button-bg-color: #1780e3;
}
</style>