<template>
  <div class="nd-tab">
    <el-Tabs
      :class="{
        dynamic: $attrs.dynamicHorizontal,
        dynamicVertical: $attrs.dynamicVertical,
      }"
      :modelValue="activeName"
      v-bind="$attrs"
      v-on="$attrs"
      @tab-change="onChange"
      @tab-click="handleClick"
      @edit="handleTabsEdit"
      @tab-remove="removeTab"
    >
      <slot></slot>
    </el-Tabs>

    <div
      :class="{
        top:
          $attrs['tab-position'] == 'top' ||
          $attrs['tab-position'] == undefined,
        bottom: $attrs['tab-position'] == 'bottom',
      }"
      class="dynamic-add"
      v-if="$attrs.dynamicHorizontal"
      @click="addTabs(activeName)"
    >
      <el-icon><Plus style="height: 0.8rem; width: 0.8rem"></Plus></el-icon>
    </div>

    <div
      :style="{ width: itemWidth }"
      :class="{
        left: $attrs['tab-position'] == 'left',
        right: $attrs['tab-position'] == 'right',
      }"
      class="dynamic-add-vertical"
      v-if="$attrs.dynamicVertical"
      @click="addTabs(activeName)"
    >
      <el-icon><Plus style="height: 0.8rem; width: 0.8rem"></Plus></el-icon>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, onMounted } from "vue";
import { Plus } from "@element-plus/icons-vue";
export default {
  name: "nd-tabs",
  emits: ["update:activeName", "handleClick", "handleTabsEdit"],
  props: {
    activeName: {
      type: String,
      default: "",
    },
  },
  components: {
    Plus,
  },
  setup(props, ctx) {
    const data = reactive({
      itemWidth: "",
    });
    const handleClick = (e) => {
      ctx.emit("handleClick", e);
    };
    const handleTabsEdit = (targetName, action) => {
      ctx.emit("handleTabsEdit", {
        targetName,
        action,
      });
    };
    const addTabs = (e) => {
      ctx.emit("addTabs", e);
    };
    const removeTab = (e) => {
      ctx.emit("removeTab", e);
    };
    const initItemWidth = () => {
      setTimeout(() => {
        let dom = document.getElementsByClassName( "el-tabs__item is-left is-closable" )[0];
        data.itemWidth = dom.offsetWidth - 2 + "px";
        if (ctx.attrs.dynamicVertical) {
          let doms = document.getElementsByClassName("dynamicVertical");
          console.log(doms);
          doms[0].style.height = ctx.attrs.dynamicVerticalHeight ? ctx.attrs.dynamicVerticalHeight + "px" : "400px";

          for (let i = 0; i < doms.length; i++) {
            doms[i].style.height = ctx.attrs.dynamicVerticalHeight ? ctx.attrs.dynamicVerticalHeight + "px" : "400px";
          }
        }
      }, 1000);
    };

    const onChange = value => {
      ctx.emit("update:activeName", value)
    }
    onMounted(() => {
      console.log(ctx.attrs["tab-position"]);
      initItemWidth();
    });
    const refData = toRefs(data);
    return {
      onChange,
      handleClick,
      handleTabsEdit,
      addTabs,
      removeTab,
      ...refData,
    };
  },
};
</script>

<style scoped>
.top {
  top: 0;
}
.bottom {
  bottom: 2px;
}
.left {
  left: 0;
}
.right {
  right: 0;
}
</style>

<style lang="less">
.el-tabs {
  --el-tabs-header-height: 48px;
}
.el-tabs__item.is-active,
.el-tabs__item:hover {
  color: #0052d9;
}
.el-tabs__active-bar {
  bottom: 1px;
  background-color: #0052d9;
}
.el-tabs__nav-wrap::after {
  background-color: #e7e7e7;
}

// 卡片风格
.el-tabs--card {
  .el-tabs__header .el-tabs__nav {
    border-left: none;
    border-top: none;
    border-color: #e7e7e7 !important;
  }
  .el-tabs__nav-scroll {
    background-color: #f3f3f3;
  }
  .is-active {
    background-color: #fff;
  }
}

// 增减风格
.nd-tab {
  position: relative;
}
.el-tabs--top .el-tabs__item.is-top:nth-child(2),
.el-tabs--bottom .el-tabs__item.is-bottom:nth-child(2) {
  padding-left: 20px;
}
.el-tabs--top .el-tabs__item.is-top:last-child,
.el-tabs--bottom .el-tabs__item.is-bottom:last-child {
  padding-right: 20px;
}
.el-icon {
  color: rgba(0, 0, 0, 0.6);
}
.dynamic-add {
  position: absolute;
  text-align: center;
  height: 46px;
  line-height: 48px;
  width: 39px;
  right: 0;
  border-left: 1px solid #e7e7e7;
  background: #fff;
  cursor: pointer;
  user-select: none;
  z-index: 10;
}

.dynamic-add-vertical {
  position: absolute;
  text-align: center;
  height: 48px;
  line-height: 48px;
  bottom: 0;
  border-top: 1px solid #e7e7e7;
  background: #fff;
  cursor: pointer;
  user-select: none;
  z-index: 10;
}

.dynamic {
  .el-tabs__nav-prev {
    height: 46px !important;
    width: 39px !important;
    line-height: 47px !important;
    text-align: center;
    border-right: 1px solid #e7e7e7;
    background: #fff;
    z-index: 10;
  }
  .el-tabs__nav-next {
    height: 46px !important;
    width: 39px !important;
    line-height: 47px !important;
    right: 39px !important;
    text-align: center;
    border-left: 1px solid #e7e7e7;
    background: #fff;
    z-index: 10;
  }
  .el-tabs__nav-scroll {
    width: calc(100% - 60px);
  }
  .el-tabs__nav-wrap.is-scrollable {
    padding: 0 20px 0 39px;
  }
}

.dynamicVertical {
  .el-tabs__nav-wrap.is-scrollable.is-left,
  .el-tabs__nav-wrap.is-scrollable.is-right {
    padding: 47px 0 !important;
  }
  .el-tabs__nav-prev {
    height: 47px !important;
    line-height: 47px !important;
    border-bottom: 1px solid #e7e7e7;
  }
  .el-tabs__nav-next {
    height: 47px !important;
    line-height: 47px !important;
    bottom: 48px !important;
    border-top: 1px solid #e7e7e7;
  }
  .el-tabs__nav-scroll {
    height: calc(100% - 49px);
    overflow: auto;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */
  }
  .el-tabs__nav-scroll::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
}

.el-tabs--left .el-tabs__nav-wrap.is-left.is-scrollable,
.el-tabs--left .el-tabs__nav-wrap.is-right.is-scrollable,
.el-tabs--right .el-tabs__nav-wrap.is-left.is-scrollable,
.el-tabs--right .el-tabs__nav-wrap.is-right.is-scrollable {
  padding-bottom: 0;
}

.el-tabs__item.is-top,
.el-tabs__item.is-bottom {
  .el-icon.is-icon-close {
    position: relative;
    top: 2px;
  }
}
// .el-tabs__item .is-icon-close {
//   color: #000000;
// }
.el-tabs__item .is-icon-close svg {
  margin-top: 0;
}
.el-tabs--left .el-tabs__item.is-left,
.el-tabs--right .el-tabs__item.is-right {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

