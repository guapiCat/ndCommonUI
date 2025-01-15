<template>
    <div class="operation-box">
        <ndSelctFile ref="childRef" @fn="selAccomplish" :extension="data.extension">
            <div style="margin: 12px 0;">可将文件/文件夹拖拽到此区域</div>
            <nd-button type="warning" @click="selectFile()" content="选择文件"></nd-button>
            <nd-button style="margin-left: 20px;" type="warning" @click="selectFolder()" content="选择文件夹"></nd-button>
        </ndSelctFile>
    </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import ndButton from '../../../../../src/packages/PC/nd-button/src/nd-button.vue';
import ndSelctFile from '../../../../../src/packages/PC/nd-selectfile/index.js';
const data = reactive({
    extension: {
        extension: ".session,.catproduct,.iam,.prt,.asm,.asm.*,.sldasm,.PRT,.4d,.xmp_txt,.CATPart,.CATDrawing,.CGR,.ipt,.x_t,.x_b,.prt.*,.par,.psm,.SLDPRT,.stp,.step,.vda,.stl,.jt,.igs,.iges,.3dxml,.model,.3dm,.obj,.sab,.obj,.3mf,.asat,.asab,.sab,.model,.xmt_txt,.xmt_bin,.p_b,.xmp_bin,.p_t,.xmp_txt,.catdrawing,.exp,.xcgm,.stpZ,.stpx,.houzhuitest6,.cgr,.sat,.dxf,.exb,.dwg",
        blackExt: "exe,bat,iso,dll,msi,asp,aspx,php,jsp",
        assemblyExt: ".session,.catproduct,.iam,.prt,.asm,.asm.*,.sldasm",
        openFileSizeTimeScope: ""
    },  // 文件格式
})
// 选择文件/文件夹组件的ref
const childRef = ref(null);

const selAccomplish = (type, obj) => {
    console.log('类型:(1:文件   2:文件夹)', type);
    console.log('文件信息:', obj);
}
// 点击选择文件
const selectFile = () => {
  childRef.value.openFile();
}
// 点击选择文件
const selectFolder = () => {
  childRef.value.openFolder();
}
</script>
<style lang="scss" scoped>
.operation-box {
    width: 100%;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
}
</style>
