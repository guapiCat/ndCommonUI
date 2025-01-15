<template>
    <div class="home">
        <div class="add_marign">这是pc端home模块</div>
        <!-- <xd-button class="add_marign" type="warning" size="small" btnTxt='返回demo页' disabled="true" @click="goHome" />
        <xd-button class="add_marign" type="primary" size="small" btnTxt='跳转demo页' @click="goDemo" />
        <xd-button class="add_marign" type="primary" size="small">
            solt按钮样式
        </xd-button> -->

        <!-- 子视图 -->
        <router-view></router-view>
    </div>
</template>
<script>
import { computed } from "vue";
import { useRouter } from "vue-router";

import xdButton from '../common/xdButton.vue';

export default {
    components: {
        xdButton
    },
    setup() {
        const router = useRouter();
        const goDemo = () => {      // 跳转demo页面
            router.push({ path: '/demo' });
        }

        const goHome = () => {
            router.push({ path: '/home' })
        }

        return {
            goDemo,
            goHome,
        };
    },
};
</script>
<style scoped>
.home {
    height: 100%;
    width: 100%
}
.add_marign {
    /* margin: 20px; */
}
</style>
