<template>
    <div class="nd-upload clearfix">
        <div class="nd-upload-item nd-upload-exist"
            :style="{ width: props.uploadWidth + 'px', height: props.uploadHeight + 'px' }" v-for="(item, i) in props.urlList"
            v-loading="item[props.props.status] == 1"
            element-loading-text="Loading..."
            element-loading-background="rgba(51, 51, 51, 0.2)"
            :key="i"
            @mouseenter="itemMouseenter(item)"
            @mouseleave="itemMouseleave(item)"
        >
            <img v-if="item[props.props.status] == 1 || item[props.props.status] == 2" :src="item[props.props.status] == 1?props.defaultPicture:props.errPicture" alt="" :onerror="(e)=>{e.srcElement.src=props.errPicture;e.srcElement.onerror=null}">
            <el-image
                style="width: 100%; height: 100%;"
                v-else
                :src="item[props.props.imgUrl]"
                :zoom-rate="1.2"
                :preview-src-list="objToArr(item)"
                :initial-index="1"
                fit="cover"
                @close="itemMouseleave(item)"
            />
            <div class="nd-u-i-shade" v-if="item.isShowShade" @click="delimg(item)">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFXSURBVFiF7Ze9SgNBFIW/K0FEIqRQsBEsLSwsbIQFtUtpmU5fwOfwAZI+PoadCpbaKTaCgoWCgqBiY+BYeFeHsLvJmI0i7Glm5t6Ze87c2Z0f+GNY7ABJq8ByjvvKzE5Gk1RMviLpXcVIYmJGZUDSIbABHAE3fe7F1GdmmzFxhyVv+gyfJDUy/A1Jd95na9i4NR9cA9aBBbdPAzNBPwO2vX4J7ErKincNzAN7kpaAsNML8Ob1W+DYzHqp+mTAuo4DyVcGgHOgA9S9vePlQTCDOjA5OKkA9IDnoN30ct/LV+fMRipxSLKBKIo3URbJT1EJiBbgf0xbwV6gzz2grchdsIgk96OR1HV3K7C13NaNjTfKEkzl1KPw/76BSkAloBIAXAD3QHj5PHXbWRmiquO4EvCrqBU5847XMpH5MpL0AMyWzPVoZnP9xrwMrAHl3G6+Mb5H6yj4AGsJRrkFatvXAAAAAElFTkSuQmCC" alt="">
            </div>
            <div class="nd-u-i-percentage" v-if="props.isShowProgress && item[props.props.status] == 1">
                <el-progress :text-inside="true" :stroke-width="3" :percentage="item[props.props.progress]" />
            </div>
        </div>
        <div class="nd-upload-item nd-upload-add" @click="openFile()"
            :style="{ width: props.uploadWidth + 'px', height: props.uploadHeight + 'px' }"
            v-if="props.urlList.length < props.limit">
            <div class="nd-u-i-add" :style="{ width: props.addImgSize + 'px', height: props.addImgSize + 'px' }">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALISURBVHic7d0xi1xVAIbhczfjzmQTJYEU6SKk3P+gtYWtdgqWppDo/xBTKDYpTS+KXX7GFhYWgoVFClGz2V1Djo3C1kPg5bLP053uK17mFAP3LHPOawMiB/UArjYBkhIgKQGSEiApAZISICkBkhIgKQGSEiApAZISICkBkhIgKQGSEiApAZISICkBkhIgKQGSEiApAZISICkBkhIgKQGSEiApAZLa1APW6v3PX9z984/NwzHnnc3BfPL08fZpvWmNFt8H3M+7n1x8N1+ND/87nt2+9c/b339141k6aoVcwXuac969dNydnW7vZ2NWTICvycv5cldvWCMBkhIgKQGSEiApAZISICkBkhLgvuZy5/Lx8I0D/4LsQYD7mvPm5eO1Mf+upqyZAEkJkJQASQmQlABJCZCUAEkJkJQASQmQlABJCZCUAEkJkJQASQmQlABJCZCUAEkJkJQASQmQlABJCZCUAEkJkJQASQmQlABJCZCUAEkJkJQASQmQVPpa5nufXhw/Px1PxhjH1YYr7uTmbnzw07eHP1cD0l/A07P5YIivdPz8Yn5WDnAFk0oDPNotX48xTsoNV9zJjcPlUTnAi+l7eufj81/Gstz7//zW0bz/4zfbX8tNa+QKJiVAUgIkJUBSAiQlQFICJCVAUgIkJUBSAiQlQFICJCVAUgIkJUBSAiQlQFICJCVAUgIkJUBSAiQlQFICJCVAUgIkJUBSAiQlQFICJCVAUgIkJUBSAiQlQFICJCVAUgIkJUBSAiQlQFICJCXA12TZvTqvN6yRAPe0LOO3S6dnP3x5/fduzXpt6gFr9ebR9qO/Xpx/MZaxub5dHtd71spzraRcwaQESEqApARISoCkBEhKgKQESEqApARISoCkBEhKgKQESEqApARISoCkBEhKgKQESEqApARISoCkBEhKgKQESEqApARISoCkBEjqX3EAVAt1ZLkUAAAAAElFTkSuQmCC" alt="">
            </div>
        </div>
    </div>
    <input ref="fileRef" :accept="props.acceptType" type="file" @change="uploadChange" style="display: none" />
</template>
<script setup>
import { toRefs, defineEmits, defineProps, nextTick, ref } from "vue";
/// 图片
// 父组件传值
const props = defineProps({
    isShowProgress: {
        type: Blob,
        default: false
    },
    defaultPicture: {
        type: String,
        default: "data:image/png;base64,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"
    },
    errPicture: {
        type: String,
        default: 'data:image/png;base64,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'
    },
    urlList: {
        type: Array,
        default: []
    },
    limit: {
        type: Number,
        default: 5
    },
    uploadWidth: {
        type: Number,
        default: 160
    },
    uploadHeight: {
        type: Number,
        default: 160
    },
    addImgSize: {
        type: Number,
        default: 80
    },
    acceptType: {
        type: String,
        default: ""
    },
    props: {
        type: Object,
        default: {
            imgUrl: 'imgUrl',   // 展示图片的字段
            id: "id",  // 唯一值 (删除或修改时需要用到,不可重复)
            status: "status",  // 没有该字段时默认为已上传完成展示imgUrl , 1为上传中, 0为上传完成, 2为上传失败
            progress: "progress", // 进度条的字段
        }
    }
});
// emit方法
const emit = defineEmits(["nextUploadImg", "nextDelete"]);
// input的ref值
const fileRef = ref(null);
// 点击选择文件
const openFile = () => {
    fileRef.value.value = "";
    fileRef.value.click();
};
// 上传文件或者文件夹的change事件
const uploadChange = async event => {
    if (window.waitForHandle) window.waitForHandle = null;
    let tempFiles = event.target.files;
    if (tempFiles.length > 0) {
        nextUpload(tempFiles);
    }
};
// 获取图片file后传给业务层处理
const nextUpload = (tempFiles) => {
    console.log(tempFiles);
    emit("nextUploadImg", tempFiles[0]);
}
// 
const delimg = (item) => {
    console.log(item);
    emit("nextDelete", item);
} 
// 鼠标移入
const itemMouseenter = (item) => {
    try {
        console.log(toRefs(props).props);
        if(item[toRefs(props).props.value.status] == 1) {
            return false
        }
        item.isShowShade = true
        console.log(toRefs(props).urlList.value[0].isShowShade);
    } catch (error) {
        console.log(error);
    }
}
// 鼠标移出
const itemMouseleave = (item) => {
    try {
        if(item.isShowShade){
            item.isShowShade = false
        }
    } catch (error) {
        
    }
}
// 图片转数组
const objToArr = (e) => {
    let arr = [];
    arr.push(e[toRefs(props).props.value.imgUrl]);
    return arr;
};
// 页面加载完成
nextTick(() => {

})
</script>
<style scoped lang="scss">
.clearfix {
    zoom: 1;
}

.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: "";
    clear: both;
    height: 0;
}

.nd-upload {
    padding: 20px;
}

.nd-upload-item {
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 3px;
    border: 1px solid #DCDCDC;
    position: relative;
    cursor: pointer;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover!important;
    }
}

.nd-upload-add:hover {
    background: #F4F4F5;
}

.nd-u-i-add {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.nd-u-i-add img {
    width: 100%;
    height: 100%;
    display: block;
}
.nd-upload-exist {
    position: relative;
    overflow: hidden;
    .nd-u-i-shade {
        background-color: rgba($color: #333333, $alpha: 0.2);
        position: absolute;
        top: 8px;
        right: 8px;
        width: 32px;
        height: 24px;
        border-radius: 2px;
        opacity: 1;
        background: rgba(51, 51, 51, 0.8);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
        line-height: 24px;
        img {
            width: 16px;
            height: 16px;
            display: inline-block;
            margin: 3px auto;
        }
    }
    .nd-u-i-percentage {
        position: absolute;
        bottom: 6px;
        width: 90%;
        left: 5%;
    }
}
</style>