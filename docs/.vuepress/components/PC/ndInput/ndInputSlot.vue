<template>
  <nd-input class="noNdRd" placeholder="文本域" v-model="state.var0" @input="change" type="input">
    <template v-slot:prepend>https://</template>
    <template v-slot:append>.com</template>
  </nd-input>

  <nd-input style="margin-top: 20px" placeholder="文本域" v-model="state.var0" @input="change" type="input">
    <template v-slot:prefix>
      <svg-icon color="red" iconName="icon-icon-CheckSquare"></svg-icon>
    </template>
    <template v-slot:suffix>
      <div style="font-size: 16px;">
        点击获取验证码
      </div>
    </template>
  </nd-input>
  <nd-input :SearchRight="true" style="margin-top: 20px" placeholder="文本域" v-model="state.var0" @input="change" type="input">
    <template v-slot:suffix>
      <nd-button type="primary"  content="Search" plain></nd-button>
    </template>
  </nd-input>
</template>

<script>
import svgIcon from '../../../../../src/components/SvgIcon.vue';
import ndButton from '../../../../../src/packages/PC/nd-button/src/nd-button.vue';
import ndInput from '../../../../../src/packages/PC/nd-input/src/nd-input.vue';
import {ref, toRefs} from "vue";
export default {
  name: "",
  components: {ndInput, svgIcon, ndButton},
  setup() {
    const state = ref({
      var0: ''
    })
    const change = (e) => {
      console.log(e)
    }
    return {
      state,
      change,
    }
  }
}
</script>