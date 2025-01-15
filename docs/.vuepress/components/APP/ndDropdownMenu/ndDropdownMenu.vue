<template>
    <div class="tabtitconter">
        <ndDropdownMenu>
            <ndDropdownItem title="默认值" :itemValueObj="data.itemValueObj1" :options="data.option1">
            </ndDropdownItem>
            <ndDropdownItem :itemValueObj="data.itemValueObj2" :options="data.option2">
            </ndDropdownItem>
            <ndDropdownItem :itemValueObj="data.itemValueObj3" :options="data.option3">
            </ndDropdownItem>
        </ndDropdownMenu>
        <ndDropdownMenu direction="up" style="margin-top: 60px;">
            <ndDropdownItem title="默认值" :itemValueObj="data.itemValueObj1" :options="data.option1">
            </ndDropdownItem>
            <ndDropdownItem :itemValueObj="data.itemValueObj2" :options="data.option2">
            </ndDropdownItem>
            <ndDropdownItem :itemValueObj="data.itemValueObj3" :options="data.option3">
            </ndDropdownItem>
        </ndDropdownMenu>
        <ndDropdownMenu style="margin-top: 60px">
            <ndDropdownItem title="默认值" :itemValueObj="data.itemValueObj1" :options="data.option1">
            </ndDropdownItem>
            <ndDropdownItem ref="screenDrop">
                <template #default>
                    <div style="height: 334px; padding: 0px 16px;">
                        <div class="screenOnetitle">
                            筛选类目一
                        </div>
                        <div style="height: 32px; margin-top: 10px;">
                            <nd-button type="primary" size="small">小型按钮</nd-button>
                            <nd-button type="primary" style="margin-left: 10px;" size="small">小型按钮</nd-button>
                            <nd-button type="primary" style="margin-left: 10px;" size="small">小型按钮</nd-button>
                        </div>
                        <div class="screenOnetitle">
                            筛选类目二
                        </div>
                        <div style="height: 32px; margin-top: 10px;">
                            <nd-button type="primary" size="small">小型按钮</nd-button>
                            <nd-button type="primary" style="margin-left: 10px;" size="small">小型按钮</nd-button>
                            <nd-button type="primary" style="margin-left: 10px;" size="small">小型按钮</nd-button>
                        </div>
                        <div class="screenOnetitle">
                            筛选类目三
                        </div>
                        <div style="height: 32px; margin-top: 10px;">
                            <nd-button type="primary" size="small">小型按钮</nd-button>
                            <nd-button type="primary" style="margin-left: 10px;" size="small">小型按钮</nd-button>
                            <nd-button type="primary" style="margin-left: 10px;" size="small">小型按钮</nd-button>
                        </div>
                        <div style="height: 32px; margin-top: 30px;">
                            <nd-button @click="closeDrop" style="float: left; width: 40%;" type="default" size="small">次按钮</nd-button>
                            <nd-button @click="closeDrop" style="float: right; width: 40%;" type="primary" size="small">主按钮</nd-button>
                        </div>
                    </div>
                </template>
                <template #title>
                    <span>自定义值</span>
                </template>
            </ndDropdownItem>
            <ndDropdownItem :itemValueObj="data.itemValueObj3" :options="data.option3">
            </ndDropdownItem>
        </ndDropdownMenu>
    </div>
</template>
  
<script setup>
import { reactive, ref } from 'vue';
import ndButton from '../../../../../src/packages/APP/nd-button/src/nd-button.vue';
import ndDropdownMenu from '../../../../../src/packages/APP/nd-dropdown-menu/index.js';
import ndDropdownItem from '../../../../../src/packages/APP/nd-dropdown-item/index.js';
const screenDrop = ref(null)

const data = reactive({
    itemValueObj1: {
        value: 0
    },
    option1: [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ],
    itemValueObj2: {
        value: "a"
    },
    option2: [
      { text: '全部商品', value: "a" },
      { text: '新款商品', value: "b" },
      { text: '活动商品', value: "c" },
    ],
    itemValueObj3: {
        value: "y"
    },
    option3: [
      { text: '全部商品', value: "y" },
      { text: '新款商品', value: "u" },
      { text: '活动商品', value: "i" },
    ],
})
const closeDrop = () => {
    screenDrop.value.closeDrop()
}
</script>

<style scoped>
.screenOnetitle {
    opacity: 1;
    /* 字号/T2/14px - Regular */
    font-family: Source Han Sans CN;
    font-size: 14px;
    font-weight: normal;
    line-height: 22px;
    letter-spacing: 0px;
    /* 文字颜色/#999 */
    color: #999999;
    height: 22px;
    margin-top: 20px;
}
</style>