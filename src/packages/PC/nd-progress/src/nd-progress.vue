<template>
  <el-progress
    :class="{ 'is-grid': $attrs.isGrid }"
    ref="ndPregressRef"
    v-bind="$attrs"
    v-on="$attrs"
  >
    <slot></slot>
  </el-progress>
  <div
    v-if="showLines"
    class="lines"
    :style="{ width: width + 'px', height: height + 'px', top: top + 'px' }"
  >
    <span v-for="item of 9" :key="item"></span>
  </div>
</template>
<script>
import { reactive, toRefs, computed, onMounted } from "vue";

export default {
  name: "nd-progress",
  setup(props, ctx) {
    const data = reactive({
      ndPregressRef: null,
      top: 0,
      height: 0,
      width: 0,
    });

    const showLines = computed(
      () =>
        ctx.attrs.isGrid &&
        ctx.attrs.type != "circle" &&
        ctx.attrs.type != "dashboard"
    );

    const initLineWidth = () => {
      let p = getPc(ctx.attrs["stroke-width"]);
      console.log(p);
      data.top = -data.ndPregressRef.$el.firstChild.offsetHeight * p;
      data.height = data.ndPregressRef.$el.firstChild.offsetHeight * p;
      data.width = data.ndPregressRef.$el.firstChild.offsetWidth;
    };

    function getPc(strokeWidth) {
      strokeWidth = strokeWidth || 6;
      console.log(strokeWidth);
      let p = 0;
      if (strokeWidth <= 12) p = 1.6;
      else if (strokeWidth <= 17) p = 1.2;
      else p = 1;
      return p;
    }

    function debounce(fn, wait) {
      var timeout = null;
      return function () {
        if (timeout !== null) {
          clearTimeout(timeout); 
          timeout = null;
        }
        timeout = setTimeout(fn, wait);
      };
    }

    onMounted(() => {
      //console.log(ctx.attrs);
      initLineWidth();
      window.addEventListener("resize", debounce(initLineWidth, 100));
    });
    const refData = toRefs(data);
    return {
      showLines,
      ...refData,
    };
  },
};
</script>
<style lang="less">
.lines {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  left: 0;
  top: 0;
  background-color: transparent;
  span {
    display: inline-block;
    height: 100%;
    width: 2px;
    background-color: #fff;
  }
}

.el-progress-bar__outer,
.el-progress-bar__inner {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

// 栅格模式不显示圆角
.el-progress.is-grid .el-progress-bar__outer,
.el-progress.is-grid .el-progress-bar__inner {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.el-progress-bar__outer {
  background-color: #e4e7ed;
}
.el-progress-circle__track {
  stroke: #e4e7ed;
}
.el-progress-bar__inner {
  background-color: #1780e3;
}

.el-progress--circle .el-progress-circle__path,
.el-progress--dashboard .el-progress-circle__path {
  stroke: #1780e3;
}

// 条形
.el-progress.is-success .el-progress-bar__inner {
  background-color: #52c41a !important;
}
.el-progress.is-warning .el-progress-bar__inner {
  background-color: #fa8c16 !important;
}
.el-progress.is-exception .el-progress-bar__inner {
  background-color: #ff4d4f !important;
}

// 环形
.is-success .el-progress-circle .el-progress-circle__path {
  stroke: #52c41a !important;
}
.is-warning .el-progress-circle .el-progress-circle__path {
  stroke: #fa8c16 !important;
}
.is-exception .el-progress-circle .el-progress-circle__path {
  stroke: #ff4d4f !important;
}

// 文字
.el-progress.is-success .el-progress__text {
  color: #52c41a !important;
}
.el-progress.is-warning .el-progress__text {
  color: #fa8c16 !important;
}
.el-progress.is-exception .el-progress__text {
  color: #ff4d4f !important;
}
</style>

