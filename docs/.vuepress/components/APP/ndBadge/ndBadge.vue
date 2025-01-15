<template>
    <p>通过 dot 属性设置红点的徽标</p>
    <nd-badge dot>
        <div class="box"></div>
    </nd-badge>
    <p>通过 content 属性设置徽标内容</p>
    <nd-badge content="限时特惠">
        <div class="box"></div>
    </nd-badge>
    <p>通过 color 属性设置背景颜色</p>
    <nd-badge content="as" color="#1989fa">
        <div class="box"></div>
    </nd-badge>
    <p>通过 max 设置最大值，超出会显示 {max}+，仅当 content 为数字时有效</p>
    <nd-badge :content="121" max="99">
        <div class="box"></div>
    </nd-badge>
    <p>通过 offset 设置偏移量，数组的两项分别对应水平向右和垂直向下方向的偏移量</p>
    <nd-badge dot :offset="[10,10]">
        <div class="box"></div>
    </nd-badge>
    <p>通过 show-zero 设置，当 content 为数字 0 或字符串 "0" 时，是否展示徽标</p>
    <nd-badge content="0" :show-zero=false>
        <div class="box"></div>
    </nd-badge>
    <p>通过 position 设置徽标的位置，可选值 top-left、top-right、bottom-left、bottom-right</p>
    <nd-badge content="24" position="bottom-right">
        <div class="box"></div>
    </nd-badge>
    <p>插槽，自定义徽标内容</p>
    <nd-badge>
        <div class="box"></div>
        <template #content>
            <van-icon name="cross" class="badge-icon" />
        </template>
    </nd-badge>
</template>
<script setup>
import ndBadge from '../../../../../src/packages/APP/nd-badge/index';

</script>
<style scoped>
.box {
    width: 60px;
    height: 60px;
    background: #E4E7ED;
    margin-left: 30px;
}
p {
    margin: 10px 0;
}
</style>
