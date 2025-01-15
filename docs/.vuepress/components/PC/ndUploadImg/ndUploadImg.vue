<template>
    <p>单个: (limit为1)</p>
    <ndUploadImg :isShowProgress="false" :urlList="data.urlList1" @nextUploadImg="nextUploadImg1" :limit="1"  @nextDelete="nextDelete1" :props="data.props" ></ndUploadImg>

    <p style="margin-top: 16px;">多个: (limit为10)</p>
    <ndUploadImg :isShowProgress="true" :urlList="data.urlList" @nextUploadImg="nextUploadImg" :limit="10"  @nextDelete="nextDelete" :props="data.props" ></ndUploadImg>
</template>
<script setup>
import { reactive, ref } from "vue";
import ndUploadImg from '../../../../../src/packages/PC/nd-upload-img/index.js';
const data = reactive({
    urlList: [],
    urlList1: [],
    props: {
        imgUrl: 'iu',
        id:'id',
        status: 's',
        progress: "prog"
    }
})
// 选择完成后,返回file流,由业务层自己上传
const nextUploadImg = async (file) => {
    let obj = {}
    obj.id = Date.now()
    obj.s = 1
    obj.prog = 0
    setProg(obj)
    data.urlList.push(obj)
    setTimeout(() => {
        UploadImgSucceed(obj.id)
    }, 3000);
}
const nextUploadImg1 = async (file) => {
    let obj = {}
    obj.id = Date.now()
    obj.s = 1
    data.urlList1.push(obj)
    setTimeout(() => {
        UploadImgSucceed1(obj.id)
    }, 3000);
}
const setProg = async (obj) => {
    if(obj.prog >= 100) {
        return false
    }
    setTimeout(()=>{
        data.urlList.forEach(element => {
            if(element.id == obj.id){
                element.prog = element.prog + 10
                setProg(element)
            }
        });
    }, 250)
}
// 这里是业务层的上传逻辑
const UploadImgSucceed = async (id) => {
    data.urlList.forEach(element => {
        if(element.id == id){
            element.iu = 'https://zhizaoyun-static.oss-cn-hangzhou.aliyuncs.com/tuzhitong/PrintScreenImg/SRJ6786039222720.jpg'
            element.s = 0
        }
    });
}
const UploadImgSucceed1 = async (id) => {
    data.urlList1.forEach(element => {
        if(element.id == id){
            element.iu = 'https://zhizaoyun-static.oss-cn-hangzhou.aliyuncs.com/tuzhitong/PrintScreenImg/SRJ6786039222720.jpg'
            element.s = 0
        }
    });
}
// 点击删除,返回点击的对象
const nextDelete = async (item) => {
    data.urlList.forEach((element, i) => {
        if(element.id == item.id){
            data.urlList.splice(i,1)
        }
    });
}
const nextDelete1 = async (item) => {
    data.urlList1.forEach((element, i) => {
        if(element.id == item.id){
            data.urlList1.splice(i,1)
        }
    });
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
