<template>
    <nd-app-input v-model="str" placeholder="请输入验证码" label="短信验证码">
        <template #right-icon>
            <span class="colorword">获取验证码</span>
        </template>
    </nd-app-input>

    <nd-app-input v-model="str" placeholder="请输入验证码">
        <template #label>
            <div class="dealwidthFlex">
                短信验证码
            </div>
        </template>
        <template #button>
            <span class="colorbtn">获取验证码</span>
        </template>
    </nd-app-input>

    <nd-app-input v-model="str" placeholder="请输入验证码">
        <template #label>
            <div class="dealwidthFlex">
                短信验证码
            </div>
        </template>
        <template #right-icon>
            <svg-icon iconName="icon-icon-CustomerService"></svg-icon> {{time}}s后获取
        </template>
    </nd-app-input>
</template>

<script>
import { ref } from 'vue'
import ndAppInput from '../../../../../src/packages/APP/nd-input/src/nd-input.vue'
import svgIcon from '../../../../../src/components/SvgIcon.vue'
export default {
    props: {},
    components: { ndAppInput, svgIcon },
    setup(props, { slots, attrs }) {
        const str = ref('')
        const time = ref(40)
        return {
            str,
            time
        }
    }
}
</script>

<style>
.title-input {
    color: #1880E3;
    font-size: 16px;
    margin: 20px 0 0;
}
</style>

<style scoped>
.dealwidthFlex{
    height:100%;
    display: flex;
    align-items: center;
}
.colorword {
    font-family: Source Han Sans CN;
    font-size: 14px;
    font-weight: normal;
    line-height: 22px;
    text-align: right;
    letter-spacing: 0px;

    /* 品牌色/图纸通 */
    color: #1780E3;
    cursor: pointer
}

.colorbtn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    /* 规范主色 */
    background: #1880E3;
    font-family: Source Han Sans CN;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0px;

    /* 纯白 */
    color: #FFFFFF;
}
</style>