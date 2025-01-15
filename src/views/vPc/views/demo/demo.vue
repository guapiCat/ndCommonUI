<template>
  <div class="my-demo">

    <div class="flex_start">
      <input type="text" v-model="verifyData">
      <xd-button class="add_margin" type="primary" size="mini" btnTxt='各种校验结果' @click="calcArr" />
      <div class="line_height">{{verifyResult}}</div>
    </div>

    <div class="flex_start">
      <xd-button class="add_margin" type="primary" size="mini" btnTxt='防抖函数' @click="debClick" />
      <xd-button class="add_margin" type="primary" size="mini" btnTxt='节流函数' @click="throttleClick(debClick, 500)" />
    </div>

    <div class="flex_start">
      <input type="text" v-model="cookieData">
      <xd-button class="add_margin" type="primary" size="mini" btnTxt='设置cookie(10s后过期)' @click="setCookie" />
      <xd-button class="add_margin" type="primary" size="mini" btnTxt='删除cookie' @click="delCookie" />
      <xd-button class="add_margin" type="primary" size="mini" btnTxt='获取cookie' @click="getCookie" />
      <div>获取cookie值：{{cookieDataResult}}</div>
    </div>

    <div class="flex_start">
      <input class="small_input" type="text" v-model="numData">
      <input class="small_input" type="text" v-model="numData2">
      <xd-button class="add_margin" type="primary" size="mini" btnTxt='转化成金额' @click="numToMoney" />
      <xd-button class="add_margin" type="primary" size="mini" btnTxt='乘法' @click="numToMul" />
      <xd-button class="add_margin" type="primary" size="mini" btnTxt='除法' @click="numToExc" />
      <xd-button class="add_margin" type="primary" size="mini" btnTxt='加法' @click="numToAdd" />
      <xd-button class="add_margin" type="primary" size="mini" btnTxt='减法' @click="numToCut" />
      <div>运算结果：{{numDataResult}}</div>
    </div>

    <div class="flex_start">
      <div>
        关键字：<input class="small_input" type="text" v-model="stringKeyData">
      </div>
      <div>
        要转化的文本：<input type="text" v-model="stringData">
      </div>
      <div v-html="hightSpanClick()"></div>
    </div>

    <div class="flex_start">
      <div>分片上传：</div>
      <input type="file" @change="inpUploadChange">
    </div>

    <div class="flex_start">
      <xd-button class="add_margin" type="primary" size="mini" btnTxt='Event On Create' @click="creatEvtOn" />
      <xd-button class="add_margin" type="primary" size="mini" btnTxt='Event Emit' @click="clickEvtEmit" />
    </div>

    <div class="flex_start">
      <input type="text" v-model="kbData">
      <div>转化文件大小：{{getBytes()}}</div>
    </div>

    <div class="flex_start">
      <input type="text" v-model="urlData">
      <!-- <div>地址转化成对象：{{urlToObj()}}</div> -->
      <!-- <input type="text" v-model="urlName">
      <div>参数获取值：{{urlNameToVal()}}</div> -->
    </div>

    <div class="flex_start">
      <input type="text" v-model="enUrlData">
      <div>加密结果：{{enUrl()}}</div>
    </div>

    <div class="flex_start">
      <input type="text" v-model="deUrlData">
      <div>解密结果：{{deUrl()}}</div>
    </div>

  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, getCurrentInstance } from 'vue';
import { useStore }  from 'vuex';
import * as Util from '../../../../utils/tools/index';
import { useRouter } from "vue-router";
import xdButton from '../../common/xdButton.vue';

export default {
  name: '',
  components: {
    xdButton
  },
  setup() {
    const router = useRouter();
    const data = reactive({
      verifyData: '',         // 校验
      verifyResult: '',       // 校验结果
      cookieData: '',         // cookie data
      cookieDataResult: '',   // fn调用获取的cookie
      numData: '',            // 数字转化1
      numData2: '',           // 数字转化2
      numDataResult: '',      // 数字转化结果
      stringData: '',         // 文本高亮
      stringKeyData: '',      // 高亮文本关键字
      kbData: '',             // 文件大小
      urlData: '',            // 路由参数
      urlName: '',            // 根据name获取路由地址的值
      enUrlData: '',          // 加密
      deUrlData: '',          // 解密
    });
    const store = useStore();
    const { proxy } = getCurrentInstance();
    const myBus = new Util.EventBus();

    onBeforeMount(() => {});
    onMounted(() => {});

    const calcArr = () => {
      console.log('verifyQQ========', Util.verifyQQ);
      data.verifyResult = `
        校验结果：
        QQ:${Util.verifyQQ(data.verifyData)}； 
        phone:${Util.verifyPhone(data.verifyData)}； 
        email:${Util.verifyEmail(data.verifyData)}； 
        ID number:${Util.verifyIdNumber(data.verifyData)}； 
        图片：${Util.verifyIMAGE(data.verifyData)}； 
        office:${Util.verifyOFFICE(data.verifyData)}；
        cad: ${Util.verifyCAD(data.verifyData)}；
        pdf:${Util.verifyPDF(data.verifyData)}； 
        ppt:${Util.verifyPPT(data.verifyData)}； 
        word:${Util.verifyWORD(data.verifyData)}； 
        excel:${Util.verifyEXCEL(data.verifyData)}； 
        装配体：${Util.verifyAssembly(data.verifyData)}； 
      `
    }

    const debClick = Util.debounce(() => {      // 防抖函数调用
      console.log('🚀防抖函数生效🚀');
    }, 500);
    const throttleClick = Util.throttle(() => { // 节流函数
      console.log('🚀节流函数生效🚀');
    }, 500)

    const setCookie = () => {                   // 设置cookie
      Util.setCookie('name', data.cookieData, {maxAge: 10});
    }
    const delCookie = () => {                   // 删除cookie
      Util.deleteCookie('name');
    }
    const getCookie = () => {                   // 获取cookie
      data.cookieDataResult = Util.getCookie('name');
    }

    const numToMoney = () => {                  // 数字转金额
      data.numDataResult = Util.amountChange(data.numData);
    }
    const numToMul = () => {                    // ↓加减乘除
      data.numDataResult = Util.accMul(data.numData, data.numData2);
    }
    const numToExc = () => {
      data.numDataResult = Util.accExc(data.numData, data.numData2);
    }
    const numToAdd = () => {
      data.numDataResult = Util.accAdd(data.numData, data.numData2);
    }
    const numToCut = () => {
      data.numDataResult = Util.accCut(data.numData, data.numData2);
    }

    const hightSpanClick = () => {
      const result = Util.highText(data.stringData, data.stringKeyData, 'span', 'key_light_red');
      return result;
    }

    const inpUploadChange = (e) => {   // inp upload
      const files = e.target.files;
      Util.sliceUpload({
          getUploadIdUrl: 'http://127.0.0.1:8877/generateUploadId',
          file: e.target.files[0],
          uploadUrl: 'http://127.0.0.1:8877/upload'
      })
      console.log(e, files);
    }

    const creatEvtOn = () => {      // 订阅 目前仅能创建一个？
      let random = Math.random();
      myBus.on('msg', () => {
        console.log('订阅', random);
      })
    }
    const clickEvtEmit = () => {    // 发布
      myBus.emit('msg')
    }

    const getBytes = () => {        // 文件单位转化
      return Util.convertBytes(data.kbData);
    }

    // const urlToObj = () => {        // 地址转化
    //   return Util.parseUrlParamsToObject(data.urlData);
    // }
    const urlNameToVal = () => {    // 地址转化
      return Util.parseUrlParamsToObject(data.urlData, data.urlName);
    }

    const enUrl = () => {           // 加密
      return Util.encodeURIC(data.enUrlData);
    }
    const deUrl = () => {           // 解密
      return Util.decodeURIC(data.deUrlData);
    }


    const refData = toRefs(data);
    return {
      calcArr,
      debClick,
      throttleClick,
      setCookie,
      delCookie,
      getCookie,
      numToMoney,
      numToMul,
      numToExc,
      numToAdd,
      numToCut,
      hightSpanClick,
      inpUploadChange,
      creatEvtOn,
      clickEvtEmit,
      getBytes,
      // urlToObj,
      urlNameToVal,
      enUrl,
      deUrl,
      ...refData,
    };
  },
};
</script>

<style scoped>
.add_margin {
  margin: 20px;
}
.flex_start {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* margin-bottom: 20px; */
}
input {
  width: 200px;
  /* height: 20px; */
  margin: 20px;
}
.small_input {
  width: 40px;
}
.line_height {
  line-height: 27px;
}
</style>
<style>
.key_light_red {
  color: red;
}
</style>