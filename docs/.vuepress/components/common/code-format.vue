<template>
  <div class="code-format" :class="{ hover: hovering }" @mouseenter="hovering = true" @mouseleave="hovering = false">
    <div class="source">
      <slot name="source"></slot>
    </div>
    
    <div class="meta" ref="meta">
      <div class="show-close" v-show="isExpanded" @click.stop="isExpanded = !isExpanded">收起（ESC）</div>
      <div class="description">
        <div class="copy-btn" v-show="isExpanded" @click.stop="copyCode">复制</div>
        <slot></slot>
      </div>
    </div>

    <div class="code-format-control" ref="control" :class="{ 'is-fixed2': fixedControl }"
      @click="isExpanded = !isExpanded">
      <transition name="arrow-slide">
        <i :class="[iconClass, { hovering: hovering }]"></i>
      </transition>
      <transition name="text-slide">
        <span v-show="hovering">{{ controlText }}</span>
      </transition>
      <div class="qr_code" size="small" type="primary" @click.stop="isExpanded = !isExpanded">展开</div>
      <!-- <div class="qr_code qr_code2" size="small" type="primary" @click.stop="copyCode">复制</div> -->
    </div>

  </div>
</template>

<script>
export default {
  name: "CodeFormat",
  data() {
    return {
      qrCodeDialog: false,
      hovering: false,
      isExpanded: false,
      fixedControl: false,
      scrollParent: null,
    };
  },
  computed: {
    lang() {
      return this.$route.path.split("/")[1];
    },
    iconClass() {
      return this.isExpanded ? "el-icon-caret-top" : "el-icon-caret-bottom";
    },
    controlText() {
      return this.isExpanded ? "隐藏代码" : "显示代码";
    },
    codeArea() {
      return this.$el.getElementsByClassName("meta")[0];
    },
  },
  watch: {
    isExpanded(val) {
      this.setCodeAreaHeight();
      if (!val) {
        this.fixedControl = false;
        this.removeScrollHandler();
        return;
      }
      setTimeout(() => {
        this.scrollParent = window;
        this.scrollParent &&
          this.scrollParent.addEventListener("scroll", this.scrollHandler);
        this.scrollHandler();
      }, 200);
    },
  },
  mounted() {
    let me = this;
    document.addEventListener('keydown', function(e) {
      if(e.key == 'Escape') {
        me.isExpanded = false;
      }
    })
  },
  beforeDestroy() {
    this.removeScrollHandler();
  },
  methods: {
    getCodeAreaHeight() {
      if (this.$el.getElementsByClassName("description").length > 0) {
        return (
          this.$el.getElementsByClassName("description")[0].clientHeight +
          // this.$el.getElementsByClassName("highlight")[0].clientHeight +
          20
        );
      }
      return this.$el.getElementsByClassName("highlight")[0].clientHeight;
    },
    setCodeAreaHeight() {
      this.codeArea.style.height = this.isExpanded
        ? `${this.getCodeAreaHeight() + 1}px`
        : "0";
    },
    copyCode() {
      const pre = this.$el.querySelectorAll("pre")[0];
      pre.setAttribute("contenteditable", "true");
      pre.focus();
      document.execCommand("selectAll", false, null);
      const copied = document.execCommand("copy");
      if (copied) {
        pre.removeAttribute("contenteditable");
        this.$message.success("复制成功！");
      } else {
        this.$message.error("复制失败！");
      }
    },
    scrollHandler() {
      const { top, bottom, left } = this.$refs.meta.getBoundingClientRect();
      this.fixedControl =
        bottom > document.documentElement.clientHeight &&
        top + 44 <= document.documentElement.clientHeight;
      // this.$refs.control.style.left = this.fixedControl ? `${left}px` : '0'
    },
    removeScrollHandler() {
      this.scrollParent &&
        this.scrollParent.removeEventListener("scroll", this.scrollHandler);
    },
  },
};
</script>
<style lang="scss">

.code-format {
  border: solid 1px #ebebeb;
  border-radius: 3px;
  transition: 0.2s;

  // background: #fafafa;

  &.hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }

  code {
    // font-family: Menlo, Monaco, Consolas, Courier, monospace;
  }

  .demo-button {
    float: right;
  }

  .source {
    padding: 15px 15px 15px 15px;
  }

  .meta {
    background-color: #fafafa;
    border-top: solid 1px #eaeefb;
    overflow: hidden;
    height: 0;
    transition: height 0.5s;
    position: relative;
  }

  .description {
    padding: 10px;
    border: solid 1px #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    // line-height: 22px;
    color: #666;
    word-break: break-word;
    // margin: 10px;
    background-color: #fff;
    max-height: 800px;
    overflow: auto;
  }

  .highlight {
    pre {
      margin: 0;
    }

    code.hljs {
      margin: 0;
      border: none;
      max-height: none;
      border-radius: 0;

      &::before {
        content: none;
      }
    }
  }

  .code-format-control {
    border-top: solid 1px #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;

    &.is-fixed {
      position: fixed;
      bottom: 0;
      width: 1068px;
      z-index: 1;
    }

    i {
      font-size: 16px;
      line-height: 44px;
      transition: 0.3s;

      &.hovering {
        transform: translateX(-40px);
      }
    }

    >span {
      position: absolute;
      transform: translateX(-30px);
      font-size: 14px;
      line-height: 44px;
      transition: 0.3s;
      display: inline-block;
    }

    &:hover {
      color: #409eff;
      background-color: #f9fafc;
    }

    & .text-slide-enter,
    & .text-slide-leave-active {
      opacity: 0;
      transform: translateX(10px);
    }

    .qr_code {
      line-height: 26px;
      position: absolute;
      top: 0;
      left: 0;
      font-size: 14px;
      padding-left: 15px;
      padding-right: 25px;
      margin-top: 10px;
      color: gray;
    }
    // .qr_code2 {
    //   left: 37px;
    // }

    .control-button {
      line-height: 26px;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 14px;
      padding-left: 5px;
      padding-right: 25px;
    }
  }

  @media (max-width: 1500px) {
    .code-format-control {
      &.is-fixed {
        width: 940px;
      }
    }
  }

  @media (max-width: 1300px) {
    .code-format-control {
      &.is-fixed {
        width: 840px;
      }
    }
  }

  @media (max-width: 1200px) {
    .code-format-control {
      &.is-fixed {
        width: 770px;
      }
    }
  }

  table {
    margin: 0;
    display: table;
  }

  th,
  td,
  tr {
    border: 0;
  }
}

.el-popper {
  table {
    margin: 0;
    display: table;
  }

  th,
  td,
  tr {
    border: 0;
  }

  tr:nth-child(2n) {
    background: none;
  }
}

.show-close {
  cursor: pointer;
  font-size: 15px;
  padding: 10px;
  margin-top: 10px;
  text-align: center;
}
.show-close:hover {
  color: #409eff;
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
}
.copy-btn {
  position: absolute;
  top: 82px;
  right: 27px;
  z-index: 100;
  color: white;
  background: #3EAF7C;
  cursor: pointer;
  padding: 2px 10px;
  border-radius: 4px;
}
/*滚动条样式*/
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
  // background: #3eaf7c;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>
