<template>
    <!-- 分享设置 -->
    <div class="nd-select-assembly h-Selshow">
        <div class="s-selDialog">
          <div class="selD-title">
            请选择装配体模型
            <div class="selD-close" @click="closeSelDiv(1)">
              <img :src="popclose" alt />
            </div>
          </div>
          <div class="selD-table">
            <el-table :data="porps.assemblyFiles" border style="width: 100%" :row-class-name="handleClassName"
              :header-cell-style="{ background: '#F2F6FC' }" :height="476"
              @row-click="(e) => { handleSelect(e, porps.assemblyFiles, 1) }">
              <el-table-column prop="isSelect" label=" " width="56" align="center" :resizable="false">
                <template #default="scope">
                  <div>
                    <img v-if="scope.row.hover && !scope.row.isSelect" style="display: block; width: 20px; height: 20px;"
                      class="cp" :src="radioHover" @mouseenter="cellMouseEnter(scope.$index, porps.assemblyFiles)"
                      @mouseleave="cellMouseLeave(scope.$index, porps.assemblyFiles)" />
                    <img v-else class="cp" style="display: block; width: 20px; height: 20px;"
                      :src="scope.row.isSelect ? radioOn : radio"
                      @mouseenter="cellMouseEnter(scope.$index, porps.assemblyFiles)"
                      @mouseleave="cellMouseLeave(scope.$index, porps.assemblyFiles)" />
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="文件名称" :resizable="false" show-overflow-tooltip>
                <template #default="scope">
                  <div class="flex-align-center tit" :class="{ 'row-active': scope.isSelect }">
                    <!-- :src="scope.row.typeImg" -->
                    <img style="margin-right: 8px; width: 24px" src="../../img/fileType/default.png" :onerror="(e)=>{e.srcElement.src='../../img/fileType/default.png';e.srcElement.onerror=null}" alt />
                    <div class="modelName">{{ scope.row.name }}</div>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="sizeAuto" width="200" label="大小" :resizable="false">
                <template #default="scope">
                  <span style="color: #606266">{{ scope.row.sizeAuto }}</span>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="selD-button">
            <div class="s-b-confirm" @click="confirmSel(1)">打开图纸</div>
            <div class="s-b-cancel" @click="closeSelDiv(1)">取消</div>
          </div>
        </div>
      </div>
</template>
<script setup>
import { reactive, defineEmits, defineProps, nextTick } from "vue";
/// 图片
import radioOn from "../../img/selectAssembly/radio.png";
import radio from "../../img/selectAssembly/radioNo.png";
import radioHover from "../../img/selectAssembly/radioHover.png";
import popclose from "../../img/selectAssembly/Close.png"
// 父组件传值
const porps = defineProps({
  assemblyFiles: {
    type: Array,
    default: []
  }
});

// 页面数据
const data = reactive({
  currentAssembly: {}
});

// 页面加载完成
nextTick(()=>{
  if(porps.assemblyFiles.length > 0){
    porps.assemblyFiles.forEach(element => {
        element.isSelect = false
    });
    porps.assemblyFiles[0].isSelect = true;
    data.currentAssembly = porps.assemblyFiles[0]
  }
})

// 移入表格
const cellMouseEnter = (e, list) => {
  list.forEach((m, index) => {
    m.hover = false;
    if (index == e) {
      m.hover = true;
    }
  });
};
// 移出表格
const cellMouseLeave = (i, list) => {
  list.forEach(m => {
    m.hover = false;
  });
};
// 点击选择
const handleSelect = (row, list, evt) => {
  data.currentAssembly = { ...row };
  list.forEach(m => {
    m.isSelect = false;
    if (row.uid == m.uid) {
      m.isSelect = true;
    }
  });
};

// 添加class类名
const handleClassName = ({ row }) => {
  if (row.isSelect) return "bg-active cp";
  else return "cp";
};

const emit = defineEmits(["closeSelectAss", "confirmSelectAss"]);
const confirmSel = () => {
    emit('confirmSelectAss', data.currentAssembly)
}
const closeSelDiv = () => {
    emit('closeSelectAss')
}
</script>
<script>
  export default {
    name: 'nd-select-assembly',
  }
</script>
<style lang="scss" scoped>
.flex-align-center {
    display: flex;
    align-items: center;
    .modelName {
        max-width: 86%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
.theme-default-content img {
    max-width: 100%;
}
.share-box {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    .share-content {
        width: 640px;
        background: #fff;
        box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.2);
        padding: 0 20px;
        border-radius: 4px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        .share-title {
            height: 76px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 4px;
            box-sizing: border-box;

            span {
                font-size: 18px;
                color: #333;
                font-weight: 600;
            }

            img {
                width: 16px;
                height: 16px;
                cursor: pointer;
            }
        }

        .base-setting {
            border-bottom: 1px solid #C0C4CC;
        }

        .setting-title {
            height: 40px;
            font-size: 14px;
            color: #333;
            line-height: 40px;
            text-indent: 4px;
        }

        .el-form-item {
            padding-left: 16px;
            font-size: 14px;
        }

        .checkbox-group {
            height: 31px;

            label {
                width: 240px;
            }
        }

        .checkbox-group1 {
            margin-top: 8px;
        }

        .btn-box {
            height: 80px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-right: 4px;
        }
    }
}
</style>
<style lang="scss" scoped>
.h-Selshow {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  overflow: auto;
  background: rgba(238, 238, 238, 0.9);
  z-index: 69;

  .s-selDialog {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    height: 638px;
    box-shadow: 0px 4.8px 12px 0px rgba(0, 0, 0, 0.3);
    background: #ffffff;
    border-radius: 4px;

    .selD-title {
      height: 76px;
      line-height: 76px;
      font-family: Source Han Sans CN;
      color: #333333;
      font-size: 18px;
      text-indent: 24px;
      font-weight: bold;
      position: relative;

      .selD-close {
        position: absolute;
        top: 25px;
        right: 25px;
        height: 16px;
        width: 16px;
        padding: 5px;
        cursor: pointer;

        img {
          display: block;
          height: 16px;
          width: 16px;
        }
      }
    }

    .selD-table {
      width: 952px;
      height: 480px;
      margin: 0 auto;
      // overflow: hidden;
      // overflow-y: auto;
    }

    .selD-button {
      height: 80px;
      width: 100%;

      div {
        float: right;
        height: 32px;
        margin: 28px 9.5px 0 0;
        border-radius: 2.4px;
        box-sizing: border-box;
        line-height: 32px;
        font-size: 14px;
        text-align: center;
        font-weight: normal;
        padding: 0 16px;
      }

      .s-b-confirm {
        cursor: pointer;
        background: #1780e3;
        color: #ffffff;
        margin-right: 16px;
      }
      .s-b-confirm:hover {
        background:  rgba(23, 128, 227, 0.8);
      }
      .s-b-confirm:active {
        background: #0062B2;
      }

      .s-b-cancel {
        cursor: pointer;
        border: 0.6px solid rgba(51, 51, 51, 0.4);
        color: #666666;
      }
      .s-b-cancel:hover{
        background: rgba(51, 51, 51, 0.05);
      }
      .s-b-cancel:active{
        background: rgba(51, 51, 51, 0.1);
      }
    }
  }
}
</style>
<style scoped>
.nd-select-assembly >>> .el-table__row {
  cursor: pointer;
}
</style>
