<!--  选择文件组件  -->
<template>
    <div v-loading="loading" class="z-selct" draggable="true" @drop="onDrop" @dragover.prevent="onDragover">
        <slot />
        <input ref="fileRef" :accept="extension.extension" type="file" @change="uploadChange" style="display: none" />
        <input ref="folderRef" type="file" @change="uploadChange" webkitdirectory="true" style="display: none" />
    </div>
</template>
<script setup>
import {
    ref,
    reactive,
    defineProps,
    defineEmits
} from "vue";


import { ElMessage } from "element-plus";
const autoFileSize = (size) => {
    return size < 1024 * 1024
        ? (size / 1024).toFixed(0) + " K"
        : (size < 1024 * 1024 * 1024 ? (size / (1024 * 1024)).toFixed(2) + " M" : (size / (1024 * 1024 * 1024)).toFixed(2) + " G")
}
const isTheZip = (fileName) => {
    let ext = reversed(fileName)
    if (ext == '.zip' || ext == '.7z' || ext == '.rar') {
        return true
    } else {
        return false
    }
}
const reversed = (value) => {
    // 文件后缀
    let arr = value.split(".");
    if (arr.length == 1) {
        return 'NoSuffixes';
    }
    let arrPop = arr.pop();
    if (isNaN(Number(arrPop, 10))) {
        let ext = "." + arrPop.toLowerCase()
        return ext;
    } else {
        let ext = "." + arr.pop().toLowerCase() + "." + "*";
        return ext;
    }
}
const isAssemblyType = (ex_assembly, fname, type) => {
    //".prt.xxx"不是主装配体类型
    var isass = isTheType(ex_assembly, fname.toLowerCase());
    if (isass) {
        var index = fname.toLowerCase().indexOf(".prt");
        if (index > 0) {
            var ex = fname.trim().substr(index + 4);
            if (ex.length > 0) {
                isass = false;
            }
            if (type == 1) {
                isass = false
            }
        }
    }
    return isass;
}

const isTheType = (exStr, fileName) => {
    var exList = exStr.split(',');
    let suffix = reversed(fileName);
    for (var i = 0; i < exList.length; i++) {
        var type0 = exList[i].toLowerCase();
        var type1 = '.' + exList[i].toLowerCase();
        if ((type0 != "" && type1 != "") && (suffix == type0 || suffix == type1)) {
            return true;
        }
    }
    return false;
}

const isblackExtType = (exStr, fileName) => {
    var exList = exStr.split(',');
    let isBlack = false
    let ext = reversed(fileName)
    exList.forEach(m => {
        if (m == ext)
            isBlack = true
    })
    return isBlack
}

const emit = defineEmits(["fn"]);

const porps = defineProps({
    extension: {
        type: Object,
        default: {}
    }
});

//////////////属性
const anchorNum = ref(0);
// input的ref值
const fileRef = ref(null);
const folderRef = ref(null);
// 类型
const cur_handle_type = ref(1);
const loading = ref(false);
// oss初始化的值
const ossConfig = ref("");

// 文件相关属性
const uploadInfo = reactive({
    zuuid: "",
    allFileNums: 0,
    allFileSize: 0,
    readyUpfileList: []
});

// 装配体列表
const mainTypeList = ref([]);

////////////////方法
// 拖拽
const onDrop = e => {
    e.stopPropagation();
    e.preventDefault();
    cur_handle_type.value = 1;
    resetUploadInfo();
    if (e.dataTransfer.items) {
        // 防止拖拽多个文件夹
        if (e.dataTransfer.items.length > 1) {
            ElMessage(
                {
                    message: "抱歉，当前仅支持打开单个文件、文件夹",
                    center: true,
                    duration: 2000,
                    type: 'warning'
                }
            );
            //提示
            return;
        }
        if (window.waitForHandle) window.waitForHandle = null;
        loading.value = true
        handleDragFiles(e.dataTransfer.items[0].webkitGetAsEntry(), "");
        watchDragFileHandleStatus();
    }
};

const onDragover = e => {
    e.stopPropagation();
    e.preventDefault();
};


// 点击选择文件
const openFile = () => {
    fileRef.value.value = "";
    cur_handle_type.value = 1;
    resetUploadInfo();
    fileRef.value.click();
};
// 点击选择文件夹
const openFolder = () => {
    folderRef.value.value = "";
    cur_handle_type.value = 2;
    resetUploadInfo();
    folderRef.value.click();
};

// 文件信息读取完成
const nextUpload = () => {
    uploadInfo.zuuid = new Date().getTime() + String(Math.ceil(Math.random() * 100))
    emit("fn", cur_handle_type.value, uploadInfo);
    showLoading(false);
};

// 展示等待
const showLoading = e => {
    loading.value = e;
};

const resetUploadInfo = () => {
    anchorNum.value = 0;
    uploadInfo.allFileNums = 0;
    uploadInfo.allFileSize = 0;
    uploadInfo.readyUpfileList = [];
};

const handleUploadInfo = tempFiles => {
    let ztimeStr = new Date().getTime() + String(Math.ceil(Math.random() * 10))
    resetUploadInfo();
    uploadInfo.readyUpfileList = Object.values(tempFiles).map(m => {
        uploadInfo.allFileNums++;
        uploadInfo.allFileSize += m.size;
        let filePath = m.webkitRelativePath ? m.webkitRelativePath : m.name;
        return handleTempFiles(m, filePath, ztimeStr);
    });
};

const uploadChange = async event => {
    showLoading(true);
    if (window.waitForHandle) window.waitForHandle = null;
    let tempFiles = event.target.files;
    if (tempFiles.length > 0) {
        resetUploadInfo();
        handleUploadInfo(tempFiles);
        nextUpload();
    }
};
//////////////////////////通用方法
// 获取所有文件信息
const handleDragFiles = (tempFiles, path, ztimeStr) => {
    if (ztimeStr) {
    } else {
        ztimeStr = new Date().getTime() + String(Math.ceil(Math.random() * 10))
    }
    if (tempFiles && tempFiles.isFile) {
        if (cur_handle_type.value != 2) cur_handle_type.value = 1;
        console.log('tempFiles', tempFiles);
        tempFiles.file((file) => {
            uploadInfo.allFileNums++;
            uploadInfo.allFileSize += file.size;
            uploadInfo.readyUpfileList.push(handleTempFiles(file, path + file.name, ztimeStr));
        });
    }
    if (tempFiles && tempFiles.isDirectory) {
        cur_handle_type.value = 2;
        let dirReader = tempFiles.createReader();
        var fnReadEntries = function (entries) {
            entries.forEach(function (m, index) {
                setTimeout(() => {
                    handleDragFiles(m, m.fullPath.replace(m.name, ""), ztimeStr);
                }, 0)
                // console.log('handleDragFiles', m);
            });
            if (entries.length > 0) {
                dirReader.readEntries(fnReadEntries);
            }
        };
        dirReader.readEntries(fnReadEntries);
    }
};

// 判断每个文件
const handleTempFiles = (file, filePath, ztimeStr) => {
    anchorNum.value++;
    let isAllow = isTheType(porps.extension.extension, file.name),
        isZip = isTheZip(file.name),
        fileReversed = reversed(file.name),
        isBlack = isblackExtType(porps.extension.blackExt, file.name),
        isMainType = isAssemblyType(porps.extension.assemblyExt, file.name, cur_handle_type.value),
        sizeAuto = autoFileSize(file.size),
        formData = new FormData(),
        ossBasePath = "temp/upload/" + ztimeStr,
        shortPathName =
            filePath.lastIndexOf("/") > 0
                ? "/" + filePath.substr(0, filePath.lastIndexOf("/")) + "/" + file.name
                : "/" + file.name,
        ossFullPath = ossBasePath + shortPathName;
    if (isBlack) isAllow = false;
    formData.append("file", file);
    formData.append("file", file);
    return {
        isAllow, // 是否被允许上传文件类型
        isBlack, // 是否黑名单文件
        isMainType, // 是否是主装类型
        file,
        isZip,
        fileReversed,   // 文件后缀
        name: file.name, // 文件名称
        isSelect: false, // 是否选中
        path: filePath, // 文件路径
        folderPath: filePath.substr(0, filePath.lastIndexOf("/")), // 文件夹路径
        sizeAuto, // 单位自动换算显示
        haveUpload: 0,  // 已经上传的大小
        size: file.size, // 文件初始大小
        fs_id:
            new Date().getTime() +
            String(Math.ceil(Math.random() * 1000000)) +
            anchorNum.value,
        uid: new Date().getTime() +
            String(Math.ceil(Math.random() * 1000000)) +
            anchorNum.value,
        formData,
        md5Value: "",
        // 亚马逊OSS
        ossBasePath,
        shortPathName,
        ossFullPath,
        typeImg: getTypeImgsrc(file.name) // 文件对应的avatar
    };
};

// 设置文件类型图片地址
const getTypeImgsrc = filename => {
    filename = filename.toLowerCase();
    let ext = reversed(filename);
    if (ext.indexOf(".prt") > -1) {
        return "/images/fileType/default.png";
    } else if (ext.indexOf(".asm.") > -1) {
        return "/images/fileType/proE.png"; // asm.png
    } else if (ext == ".session") {
        return "/images/fileType/catia.png";
    } else {
        return `/images/fileType/${ext.substring(1)}.png`;
    }
};

// 获取完成
const watchDragFileHandleStatus = (evt) => {
    let noChange = 0;
    if (evt) {
        noChange = evt
    }
    let oldSize = uploadInfo.allFileSize;
    let waitTime = 30
    if (noChange == 3 && oldSize == 0) {
        waitTime = 500
    }
    let time = setTimeout(() => {
        if (noChange > 5) {
            console.log('uploadInfo', uploadInfo);
            nextUpload();
            clearTimeout(time);
            time = null;
            return false
        }
        if (uploadInfo.allFileSize > oldSize) {
            if (uploadInfo.readyUpfileList.length > 1) showLoading(true);
            oldSize = uploadInfo.allFileSize;
        } else noChange++;
        watchDragFileHandleStatus(noChange)
    }, waitTime);
};

// 暴露子组件的方法
defineExpose({ openFile, openFolder });
</script>
  
<style scoped lang="scss">
.z-selct {
    height: 100%;
    width: 100%;
}
</style>
  