<template>
    <nd-button type="warning" @click="toOpenShar()" content="选择装配体"></nd-button>
    <div class="sharing" v-if="data.showShar">
        <ndSelectAssembly :assemblyFiles="data.assemblyFiles" @closeSelectAss="closeShar" @confirmSelectAss="confirmShar"
            v-loading="data.isSharing" />
    </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import ndButton from '../../../../../src/packages/PC/nd-button/src/nd-button.vue';
import ndSelectAssembly from '../../../../../src/packages/PC/nd-selectAssembly/index.js';
const data = reactive({
    showShar: false,
    isSharing: false,
    assemblyFiles: [
        {
            "isAllow": true,
            "isBlack": false,
            "isMainType": true,
            "file": {

            },
            "isZip": false,
            "fileReversed": ".sldasm",
            "name": "KA5007460 矮支KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 撑架 - 副本 (2).SLDASM",
            "isSelect": true,
            "path": "SolidWorks/KA5007460 矮支KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 撑架 - 副本 (2).SLDASM",
            "folderPath": "SolidWorks",
            "sizeAuto": "151 K",
            "haveUpload": 0,
            "size": 155061,
            "fs_id": "16799898468227637819",
            "uid": "16799898468223072889",
            "formData": {

            },
            "md5Value": "",
            "ossBasePath": "temp/upload/16799898468166",
            "shortPathName": "/SolidWorks/KA5007460 矮支KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 撑架 - 副本 (2).SLDASM",
            "ossFullPath": "temp/upload/16799898468166/SolidWorks/KA5007460 矮支KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 - 副本 (2KA5007460 矮支撑架 撑架 - 副本 (2).SLDASM",
            "typeImg": "/images/fileType/sldasm.png",
            "hover": false
        },
        {
            "isAllow": true,
            "isBlack": false,
            "isMainType": true,
            "file": {

            },
            "isZip": false,
            "fileReversed": ".sldasm",
            "name": "KA5007460 矮支撑架 - 副本 (3).SLDASM",
            "isSelect": false,
            "path": "SolidWorks/KA5007460 矮支撑架 - 副本 (3).SLDASM",
            "folderPath": "SolidWorks",
            "sizeAuto": "151 K",
            "haveUpload": 0,
            "size": 155061,
            "fs_id": "16799898468236002310",
            "uid": "167998984682369644310",
            "formData": {

            },
            "md5Value": "",
            "ossBasePath": "temp/upload/16799898468166",
            "shortPathName": "/SolidWorks/KA5007460 矮支撑架 - 副本 (3).SLDASM",
            "ossFullPath": "temp/upload/16799898468166/SolidWorks/KA5007460 矮支撑架 - 副本 (3).SLDASM",
            "typeImg": "/images/fileType/sldasm.png",
            "hover": false
        },
        {
            "isAllow": true,
            "isBlack": false,
            "isMainType": true,
            "file": {

            },
            "isZip": false,
            "fileReversed": ".asm",
            "name": "KA5007460 矮支撑架 - 副本 (4).asm",
            "isSelect": false,
            "path": "SolidWorks/KA5007460 矮支撑架 - 副本 (4).asm",
            "folderPath": "SolidWorks",
            "sizeAuto": "151 K",
            "haveUpload": 0,
            "size": 155061,
            "fs_id": "167998984682449669511",
            "uid": "167998984682472882411",
            "formData": {

            },
            "md5Value": "",
            "ossBasePath": "temp/upload/16799898468166",
            "shortPathName": "/SolidWorks/KA5007460 矮支撑架 - 副本 (4).asm",
            "ossFullPath": "temp/upload/16799898468166/SolidWorks/KA5007460 矮支撑架 - 副本 (4).asm",
            "typeImg": "/images/fileType/asm.png",
            "hover": false
        },
        {
            "isAllow": true,
            "isBlack": false,
            "isMainType": true,
            "file": {

            },
            "isZip": false,
            "fileReversed": ".sldasm",
            "name": "KA5007460 矮支撑架 - 副本 (5).SLDASM",
            "isSelect": false,
            "path": "SolidWorks/KA5007460 矮支撑架 - 副本 (5).SLDASM",
            "folderPath": "SolidWorks",
            "sizeAuto": "151 K",
            "haveUpload": 0,
            "size": 155061,
            "fs_id": "167998984682550371212",
            "uid": "167998984682553824312",
            "formData": {

            },
            "md5Value": "",
            "ossBasePath": "temp/upload/16799898468166",
            "shortPathName": "/SolidWorks/KA5007460 矮支撑架 - 副本 (5).SLDASM",
            "ossFullPath": "temp/upload/16799898468166/SolidWorks/KA5007460 矮支撑架 - 副本 (5).SLDASM",
            "typeImg": "/images/fileType/sldasm.png",
            "hover": false
        },
        {
            "isAllow": true,
            "isBlack": false,
            "isMainType": true,
            "file": {

            },
            "isZip": false,
            "fileReversed": ".iam",
            "name": "KA5007460 矮支撑架 - 副本 (6).iam",
            "isSelect": false,
            "path": "SolidWorks/KA5007460 矮支撑架 - 副本 (6).iam",
            "folderPath": "SolidWorks",
            "sizeAuto": "151 K",
            "haveUpload": 0,
            "size": 155061,
            "fs_id": "167998984682534008513",
            "uid": "167998984682573581813",
            "formData": {

            },
            "md5Value": "",
            "ossBasePath": "temp/upload/16799898468166",
            "shortPathName": "/SolidWorks/KA5007460 矮支撑架 - 副本 (6).iam",
            "ossFullPath": "temp/upload/16799898468166/SolidWorks/KA5007460 矮支撑架 - 副本 (6).iam",
            "typeImg": "/images/fileType/iam.png",
            "hover": false
        },
        {
            "isAllow": true,
            "isBlack": false,
            "isMainType": true,
            "file": {

            },
            "isZip": false,
            "fileReversed": ".prt",
            "name": "KA5007460 矮支撑架 - 副本 (7).prt",
            "isSelect": false,
            "path": "SolidWorks/KA5007460 矮支撑架 - 副本 (7).prt",
            "folderPath": "SolidWorks",
            "sizeAuto": "151 K",
            "haveUpload": 0,
            "size": 155061,
            "fs_id": "167998984682663063514",
            "uid": "167998984682623386514",
            "formData": {

            },
            "md5Value": "",
            "ossBasePath": "temp/upload/16799898468166",
            "shortPathName": "/SolidWorks/KA5007460 矮支撑架 - 副本 (7).prt",
            "ossFullPath": "temp/upload/16799898468166/SolidWorks/KA5007460 矮支撑架 - 副本 (7).prt",
            "typeImg": "/images/fileType/default.png",
            "hover": false
        },
        {
            "isAllow": true,
            "isBlack": false,
            "isMainType": true,
            "file": {

            },
            "isZip": false,
            "fileReversed": ".sldasm",
            "name": "KA5007460 矮支撑架 - 副本.SLDASM",
            "isSelect": false,
            "path": "SolidWorks/KA5007460 矮支撑架 - 副本.SLDASM",
            "folderPath": "SolidWorks",
            "sizeAuto": "151 K",
            "haveUpload": 0,
            "size": 155061,
            "fs_id": "167998984682740732315",
            "uid": "167998984682798311615",
            "formData": {

            },
            "md5Value": "",
            "ossBasePath": "temp/upload/16799898468166",
            "shortPathName": "/SolidWorks/KA5007460 矮支撑架 - 副本.SLDASM",
            "ossFullPath": "temp/upload/16799898468166/SolidWorks/KA5007460 矮支撑架 - 副本.SLDASM",
            "typeImg": "/images/fileType/sldasm.png",
            "hover": false
        },
        {
            "isAllow": true,
            "isBlack": false,
            "isMainType": true,
            "file": {

            },
            "isZip": false,
            "fileReversed": ".sldasm",
            "name": "KA5007460 矮支撑架.SLDASM",
            "isSelect": false,
            "path": "SolidWorks/KA5007460 矮支撑架.SLDASM",
            "folderPath": "SolidWorks",
            "sizeAuto": "151 K",
            "haveUpload": 0,
            "size": 155061,
            "fs_id": "167998984682888007616",
            "uid": "167998984682837813616",
            "formData": {

            },
            "md5Value": "",
            "ossBasePath": "temp/upload/16799898468166",
            "shortPathName": "/SolidWorks/KA5007460 矮支撑架.SLDASM",
            "ossFullPath": "temp/upload/16799898468166/SolidWorks/KA5007460 矮支撑架.SLDASM",
            "typeImg": "/images/fileType/sldasm.png",
            "hover": false
        },
        {
            "isAllow": true,
            "isBlack": false,
            "isMainType": true,
            "file": {

            },
            "isZip": false,
            "fileReversed": ".sldasm",
            "name": "KA5007460 矮支撑架.SLDASM",
            "isSelect": false,
            "path": "SolidWorks/KA5007460 矮支撑架.SLDASM",
            "folderPath": "SolidWorks",
            "sizeAuto": "151 K",
            "haveUpload": 0,
            "size": 155061,
            "fs_id": "167998984682837813622",
            "uid": "167998984682837813622",
            "formData": {

            },
            "md5Value": "",
            "ossBasePath": "temp/upload/16799898468166",
            "shortPathName": "/SolidWorks/KA5007460 矮支撑架.SLDASM",
            "ossFullPath": "temp/upload/16799898468166/SolidWorks/KA5007460 矮支撑架.SLDASM",
            "typeImg": "/images/fileType/sldasm.png",
            "hover": false
        },
        {
            "isAllow": true,
            "isBlack": false,
            "isMainType": true,
            "file": {

            },
            "isZip": false,
            "fileReversed": ".sldasm",
            "name": "KA5007460 矮支撑架.SLDASM",
            "isSelect": false,
            "path": "SolidWorks/KA5007460 矮支撑架.SLDASM",
            "folderPath": "SolidWorks",
            "sizeAuto": "151 K",
            "haveUpload": 0,
            "size": 155061,
            "fs_id": "167998984682837813623",
            "uid": "167998984682837813623",
            "formData": {

            },
            "md5Value": "",
            "ossBasePath": "temp/upload/16799898468166",
            "shortPathName": "/SolidWorks/KA5007460 矮支撑架.SLDASM",
            "ossFullPath": "temp/upload/16799898468166/SolidWorks/KA5007460 矮支撑架.SLDASM",
            "typeImg": "/images/fileType/sldasm.png",
            "hover": false
        },
        {
            "isAllow": true,
            "isBlack": false,
            "isMainType": true,
            "file": {

            },
            "isZip": false,
            "fileReversed": ".sldasm",
            "name": "KA5007460 矮支撑架.SLDASM",
            "isSelect": false,
            "path": "SolidWorks/KA5007460 矮支撑架.SLDASM",
            "folderPath": "SolidWorks",
            "sizeAuto": "151 K",
            "haveUpload": 0,
            "size": 155061,
            "fs_id": "167998984682837813624",
            "uid": "167998984682837813624",
            "formData": {

            },
            "md5Value": "",
            "ossBasePath": "temp/upload/16799898468166",
            "shortPathName": "/SolidWorks/KA5007460 矮支撑架.SLDASM",
            "ossFullPath": "temp/upload/16799898468166/SolidWorks/KA5007460 矮支撑架.SLDASM",
            "typeImg": "/images/fileType/sldasm.png",
            "hover": false
        },
        {
            "isAllow": true,
            "isBlack": false,
            "isMainType": true,
            "file": {

            },
            "isZip": false,
            "fileReversed": ".sldasm",
            "name": "KA5007460 矮支撑架.SLDASM",
            "isSelect": false,
            "path": "SolidWorks/KA5007460 矮支撑架.SLDASM",
            "folderPath": "SolidWorks",
            "sizeAuto": "151 K",
            "haveUpload": 0,
            "size": 155061,
            "fs_id": "167998984682837813625",
            "uid": "167998984682837813625",
            "formData": {

            },
            "md5Value": "",
            "ossBasePath": "temp/upload/16799898468166",
            "shortPathName": "/SolidWorks/KA5007460 矮支撑架.SLDASM",
            "ossFullPath": "temp/upload/16799898468166/SolidWorks/KA5007460 矮支撑架.SLDASM",
            "typeImg": "/images/fileType/sldasm.png",
            "hover": false
        },
        {
            "isAllow": true,
            "isBlack": false,
            "isMainType": true,
            "file": {

            },
            "isZip": false,
            "fileReversed": ".sldasm",
            "name": "KA5007460 矮支撑架.SLDASM",
            "isSelect": false,
            "path": "SolidWorks/KA5007460 矮支撑架.SLDASM",
            "folderPath": "SolidWorks",
            "sizeAuto": "151 K",
            "haveUpload": 0,
            "size": 155061,
            "fs_id": "167998984682837813626",
            "uid": "167998984682837813626",
            "formData": {

            },
            "md5Value": "",
            "ossBasePath": "temp/upload/16799898468166",
            "shortPathName": "/SolidWorks/KA5007460 矮支撑架.SLDASM",
            "ossFullPath": "temp/upload/16799898468166/SolidWorks/KA5007460 矮支撑架.SLDASM",
            "typeImg": "/images/fileType/sldasm.png",
            "hover": false
        }
    ]
})

const toOpenShar = () => {
    data.showShar = true
}
const closeShar = () => {
    data.showShar = false
}
const confirmShar = (obj) => {
    data.isSharing = true
    console.log('objobjobj', obj);
    setTimeout(() => {
        data.isSharing = false
        data.showShar = false
    }, 2000);
}

</script>
<style lang="scss" scoped>
.sharing {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 66;
}
</style>
