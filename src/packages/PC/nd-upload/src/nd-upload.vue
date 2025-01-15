<template>
  <div class="ndUploadCropper">
    <div class="zcropImg">
      <img id="cropImg" v-show="data.CROPPER" :onerror="handleError">
      <img id="croppreviewImg" v-show="!data.CROPPER" :onerror="handleError">
    </div>
    <div class="previewBoxDiv">
      <div style="height: 120px;">
        <div class="previewBox">
          <img id="previewImg" :onerror="handleError">
        </div>
        <div class="previewText">
          预览
        </div>
      </div>
      <div class="height: 58px">
        <template v-if="slots.uploadButton">
          <slot name="uploadButton"></slot>
        </template>
        <div v-else class="upButton" @click="openFile">
          选择文件
        </div>
        <template v-if="slots.uploadExplain">
          <slot name="uploadExplain"></slot>
        </template>
        <div class="uploadexplain" v-else>
          仅支持jpg、jpeg、png格式，文件小于2M
        </div>
      </div>
    </div>
  </div>
  <input ref="fileRef" :accept="porps.acceptType" type="file" @change="uploadChange" style="display: none" />
</template>
<script setup>
import 'cropperjs/dist/cropper.css';
import Cropper from 'cropperjs';
import { reactive, defineEmits, defineProps, nextTick, ref, useSlots, defineExpose } from "vue";
const slots = useSlots()
const emit = defineEmits(["nextUploadImg", "imgCropmove"]);
// 父组件传值
const porps = defineProps({
  headPortrait: {
    type: Object,
    default: {
      imgSrc: "",
      errImgSrc: "",
    }
  },
  acceptType: {
    type: String,
    default: 'image/*'
  }
});


// input的ref值
const fileRef = ref(null);
// 页面数据
const data = reactive({
  CROPPER: null
});

// 错误图片
const handleError = (e) => {
  let img = e.srcElement;
  img.src = porps.headPortrait.errImgSrc;
  if (data.CROPPER) {
    data.CROPPER.destroy()
    data.CROPPER = null
  }
};

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
// 选择图片后
const nextUpload = (tempFiles) => {
  if (data.CROPPER) {
    data.CROPPER.destroy()
    data.CROPPER = null
  }
  emit("nextUploadImg", tempFiles[0], loadingImg);
  // loadingImg(tempFiles[0], 1)
}

// 加载图片
const loadingImg = (file, type, Ratio, minContainerWidth, minContainerHeight) => {
  try {
    if (data.CROPPER) {
      data.CROPPER.destroy()
      data.CROPPER = null
    }
    let aspectRatio = Ratio || 1 / 1
    const image = document.getElementById('cropImg');
    if (type == 1) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let dataURL = reader.result;
        //将img的src改为刚上传的文件的转换格式
        document.querySelector('#cropImg').src = dataURL;
        //创建cropper实例-----------------------------------------
        data.CROPPER = new Cropper(image, {
          aspectRatio: aspectRatio,
          viewMode: 0,
          minContainerWidth: minContainerWidth || 100,
          minContainerHeight: minContainerHeight || 100,
          dragMode: 'move',
          preview: [document.querySelector('.previewBox')]
        })
        image.addEventListener('cropmove', function (e) {
          emit("imgCropmove", e.detail);
        });
      }
    } else if(type == 2) {
      document.querySelector('#cropImg').src = file;
      //创建cropper实例-----------------------------------------
      data.CROPPER = new Cropper(image, {
        aspectRatio: aspectRatio,
        viewMode: 0,
        minContainerWidth: 200,
        minContainerHeight: 200,
        dragMode: 'move',
        preview: [document.querySelector('.previewBox')]
      })
      image.addEventListener('cropmove', function (e) {
        emit("imgCropmove", e.detail);
      });
    }else{
      if (data.CROPPER) {
        data.CROPPER.destroy()
        data.CROPPER = null
      }
      document.querySelector('#croppreviewImg').src = file
      document.querySelector('#previewImg').src = file
    }
  } catch (error) {

  }
}

const GetData = async () => {
  return new Promise((resolve, reject) => {
    try {
      let imgData
      if (data.CROPPER) {
        data.CROPPER.getCroppedCanvas({
          maxWidth: 4096,
          maxHeight: 4096,
          fillColor: '#fff',
          imageSmoothingEnabled: true,
          imageSmoothingQuality: 'high',
        }).toBlob((blob) => {
          const fileReader = new FileReader();
          fileReader.onload = (e) => {
            imgData = e.target.result
            if (data.CROPPER) {
              data.CROPPER.destroy()
              data.CROPPER = null
            }
            document.querySelector('#croppreviewImg').src = imgData;
            setTimeout(() => {
              document.querySelector('#previewImg').src = imgData;
            }, 10);
            let resObj = {}
            resObj.code = 1
            resObj.msg = "裁切成功"
            resObj.img = imgData
            resolve(resObj)
          };
          fileReader.readAsDataURL(blob);
        })
      }else{
        let resObj = {}
        resObj.code = -1
        resObj.msg = "未开启裁切模式"
        resolve(resObj)
      }
    } catch (error) {
      reject(error)
    }
  })
}

// 页面加载完成
nextTick(() => {
  if (!data.CROPPER) {
    document.querySelector('#croppreviewImg').src = porps.headPortrait.imgSrc;
    document.querySelector('#previewImg').src = porps.headPortrait.imgSrc;
  }
})

defineExpose({ GetData, openFile, loadingImg })
</script>

<style scoped lang="scss">
.ndUploadCropper {
  height: 300px;
  width: 750px;

  img[src=''],
  img:not([src]) {
    opacity: 0;
  }

  .zcropImg {
    height: 300px;
    width: 300px;
    border-radius: 4px;
    opacity: 1;
    float: left;
    // background-color: red;
    /* 自动布局 */
    /* 文本/次要文字#999 */
    overflow: hidden;
    border: 1px dashed #999999;
    z-index: 0;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .previewBoxDiv {
    float: right;
    width: 428px;
    height: 300px;
    opacity: 1;
    /* 自动布局 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 48px;
    flex-grow: 1;
    align-self: stretch;
    z-index: 1;

    .previewBox {
      width: 90px;
      height: 90px;
      border-radius: 4px;
      opacity: 1;
      z-index: 1;
      overflow: hidden;
      box-shadow:0px 0px 1px #ddd;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .previewText {
      height: 22px;
      opacity: 1;
      /* T4/14px */
      font-size: 14px;
      font-weight: normal;
      line-height: 22px;
      letter-spacing: 0px;
      /* 文字颜色#333 */
      color: #333333;
      z-index: 0;
      text-align: center;
      margin: 8px 0;
    }

    .upButton {
      width: 104px;
      height: 32px;
      border-radius: 4px;
      opacity: 1;
      box-sizing: border-box;
      /* Gray/Gray-20% */
      border: 1px solid rgba(51, 51, 51, 0.2);
      line-height: 32px;
      text-align: center;
      z-index: 0;
      font-size: 14px;
      color: #333333;
      margin: 0 auto;
      cursor: pointer;
    }

    .uploadexplain {
      height: 18px;
      opacity: 1;
      /* T1/12px */
      font-size: 12px;
      font-weight: normal;
      line-height: 18px;
      letter-spacing: 0px;
      /* 文本/次要文字#999 */
      color: #999999;
      z-index: 1;
      margin-top: 8px;
      text-align: center;
    }
  }
}
</style>