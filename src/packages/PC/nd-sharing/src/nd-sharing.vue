<template>
    <!-- 分享设置 -->
    <div class="nd-sharing share-box">
        <div class="share-content">
            <p class="share-title">
                <span>分享设置</span>
                <img src="../../img/sharing/shareClose.png" @click="closeSharShow" alt="">
            </p>
            <el-form :model=data.shareConfig :label-width="76" label-position="left">
                <div class="base-setting">
                    <p class="setting-title">基本设置</p>
                    <el-form-item label="有效期">
                        <el-radio-group v-model="data.shareConfig.validdate">
                            <el-radio :label="0">永久有效</el-radio>
                            <el-radio :label="15">15天</el-radio>
                            <el-radio :label="7">7天</el-radio>
                            <el-radio :label="1">1天</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="浏览次数">
                        <el-radio-group v-model="data.shareConfig.maxVisitNum">
                            <el-radio :label="0">不限次数</el-radio>
                            <el-radio :label="100">100次</el-radio>
                            <el-radio :label="10">10次</el-radio>
                            <el-radio :label="1">1次</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="是否加密">
                        <el-radio-group v-model="data.shareConfig.isPrivate">
                            <el-radio :label="0">不加密</el-radio>
                            <el-radio :label="1">加密</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </div>
                <div class="advanced-setting">
                    <p class="setting-title">高级设置</p>
                    <el-form-item>
                        <div class="checkbox-group">
                            <el-checkbox v-model="data.shareConfig.modelSettings.isShowMeasure" label="允许其他用户使用测量功能" />
                            <el-checkbox v-model="data.shareConfig.modelSettings.isShowPMI" label="允许查看PMI信息" />
                        </div>
                        <div class="checkbox-group checkbox-group1">
                            <el-checkbox v-model="data.shareConfig.modelSettings.isShowStructureTree" label="允许查看结构树" />
                            <el-checkbox v-model="data.shareConfig.modelSettings.isShowStructureTreeProperty"
                                label="允许查看自定义属性" />
                        </div>
                    </el-form-item>
                </div>
                <div class="btn-box">
                    <el-button @click="closeSharShow">取消</el-button>
                    <el-button type="primary" @click="createShareLink">创建并复制链接</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>
<script setup>
import { reactive, defineEmits } from "vue";
const data = reactive({
    shareConfig: {
        validdate: 0,
        maxVisitNum: 0,
        isPrivate: 0,
        modelSettings: {
            isShowMeasure: false,
            isShowPMI: false,
            isShowStructureTree: false,
            isShowStructureTreeProperty: false,
        }
    },
    isShowSetting: true
});
const emit = defineEmits(["closeShar", "confirmShar"]);
const createShareLink = () => {
    emit('confirmShar', data.shareConfig)
}
const closeSharShow = () => {
    emit('closeShar')
}
</script>
<script>
  export default {
    name: 'nd-sharing',
  }
</script>
<style lang="scss" scoped>
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
<style scoped>
.share-box >>> .el-radio {
    color: #666666!important;
}
.share-box >>> .el-radio__input.is-checked+.el-radio__label {
    color: #606266!important;
}
.share-box >>> .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #606266!important;
}
.share-box >>> .el-radio__inner {
    border: 1px solid #DCDFE6!important;
    height: 16px!important;
    width: 16px!important;
}
.share-box >>> .el-radio__inner:hover {
    border: 1.5px solid #0C76CC!important;
}
.share-box >>> .el-radio__inner::after {
    height: 8px!important;
    width: 8px!important;
}

.share-box >>> .el-radio__input.is-checked .el-radio__inner {
    border-color: #0C76CC!important;
    background: #0C76CC!important;
}
.share-box >>> .el-checkbox__inner {
    border: 1px solid #DCDFE6!important;
    height: 16px!important;
    width: 16px!important;
}
.share-box >>> .el-checkbox__inner:hover {
    border: 1.5px solid #0C76CC!important;
}
.share-box >>> .el-checkbox__inner::after {
    height: 8px!important;
    left: 5px!important;
    top: 1px!important;
    width: 4px!important;
}
.share-box >>> .el-checkbox__input.is-checked .el-checkbox__inner {
    border-color: #0C76CC!important;
    background: #0C76CC!important;
}
.share-box >>> .el-button {
    border: 1px solid rgba(51, 51, 51, 0.4)!important;
    color: #666666!important;
}
.share-box >>> .el-button:hover {
    background: rgba(51, 51, 51, 0.05)!important;
}
.share-box >>> .el-button:active {
    background: rgba(51, 51, 51, 0.1)!important;
}
.share-box >>> .el-button--primary {
    border: none!important;
    background: #1780E3!important;
    color: #FFFFFF!important;
}
.share-box >>> .el-button--primary:hover {
    background: rgba(23, 128, 227, 0.8)!important;
}
.share-box >>> .el-button--primary:active {
    background: #0062B2!important;
}

</style>
