<template>
    <el-row>
        <nd-tag>默认</nd-tag>
        <nd-tag class="ml-2" type="success">成功</nd-tag>
        <nd-tag class="ml-2" type="warning">警告</nd-tag>
        <nd-tag class="ml-2" type="danger">错误</nd-tag>
        <nd-tag class="ml-2" type="info">信息</nd-tag>
    </el-row>

    <el-row>
        <nd-tag effect="dark">默认</nd-tag>
        <nd-tag effect="dark" class="ml-2" type="success">成功</nd-tag>
        <nd-tag effect="dark" class="ml-2" type="warning">警告</nd-tag>
        <nd-tag effect="dark" class="ml-2" type="danger">错误</nd-tag>
        <nd-tag effect="dark" class="ml-2" type="info">信息</nd-tag>
    </el-row>

</template>

<script>
import ndTag from '../../../../../src/packages/PC/nd-tag'
export default {
    components:{ndTag}
}
</script>

<style scoped>
.nd-tag {
    margin-right: 40px;
    margin-bottom: 28px;
}
</style>