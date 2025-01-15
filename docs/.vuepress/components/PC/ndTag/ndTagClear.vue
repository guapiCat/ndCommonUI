<template>
    <el-row>
        <nd-tag
        v-for="tag in state.tags"
        :key="tag.name"
        class="mx-1"
        closable
        :type="tag.type"
    >
        {{ tag.name }}
        </nd-tag>
    </el-row>
        <nd-tag
    v-for="tag in dynamicTags"
    :key="tag"
    class="mx-1"
    closable
    :disable-transitions="false"
    @close="handleClose(tag)"
  >
    {{ tag }}
  </nd-tag>
  
  <el-input
    v-if="inputVisible"
    ref="InputRef"
    v-model="inputValue"
    class="ml-1 w-20"
    size="small"
    @keyup.enter="handleInputConfirm"
    @blur="handleInputConfirm"
  />
  <template v-else>
    <el-button  class="button-new-tag ml-1" size="small" @click="showInput">
        + New Tag
    </el-button>
    <el-button type="primary" plain class="button-new-tag ml-1" size="small" @click="showInput">
        + New Tag
    </el-button>

  </template>

</template>

<script lang="ts" setup>
import ndTag from '../../../../../src/packages/PC/nd-tag'
import { nextTick, ref } from 'vue'
import { ElInput } from 'element-plus'
const state = ref({
    tags:[
        { name: '默认', type: '' },
        { name: '成功', type: 'success'},
        { name: '警告', type: 'warning' },
        { name: '错误', type: 'danger' },
        { name: '信息', type: 'info' },
    ]
})
const inputValue = ref('')
const dynamicTags = ref([])
const inputVisible = ref(false)
const InputRef = ref<InstanceType<typeof ElInput>>()

const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}

const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    InputRef.value!.input!.focus()
  })
}

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value)
  }
  inputVisible.value = false
  inputValue.value = ''
}
</script>

<style scoped>
.nd-tag {
    margin-right: 18px;
    margin-bottom: 40px;
}
.ml-1 {
  width: 100px;
}
</style>