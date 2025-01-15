<template>
	<div class="box">
		<nd-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
			<nd-list-cell type="card2" :list="list">
				<!-- <template #right>
					<button>插槽</button>
				</template>
				<template #title>
					<div class="title">插槽</div>
				</template>
				<template #text>
					<div class="text">插槽</div>
				</template> -->
			</nd-list-cell>
		</nd-list>
	</div>
</template>
<script setup>
import { ref } from 'vue';
import ndList from '../../../../../src/packages/APP/nd-list/src/nd-list.vue'
import ndListCell from '../../../../../src/packages/APP/nd-list-cell/src/nd-list-cell.vue'

const list = ref([]);
const loading = ref(false);
const finished = ref(false);

let rawList = [];
for (let i = 0; i < 10; i++) {
	rawList.push({
		title: '标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容',
		text: '正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容',
		// src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
		src: "https://zhizaoyunstatic.oss-cn-hangzhou.aliyuncs.com/tuzhitong/PrintScreenImg/26Q591135239354.jpg",
		selected: false,
	})
}
rawList[0].imageClass = 'self-img';

const onLoad = () => {
	setTimeout(() => {
		list.value = list.value.concat(rawList);
		// 加载状态结束
		loading.value = false;
		// 数据全部加载完成
		if (list.value.length >= 40) {
			finished.value = true;
		}
	}, 1000)
}

</script>
<style scoped>
.box {
	height: 500px;
	overflow: scroll;
}
.title {
	font-size: 14px;
}
.text {
	font-size: 12px;
	color: gray;
	height: 45px;
}
:deep(.self-img) {
	width: 60px;
	height: 60px;
}
</style>