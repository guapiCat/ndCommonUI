<template>
	<!-- 分享设置 -->
	<div class="nd-sharing">
		<div class="nd-s-topblank"></div>
		<div class="nd-s-infrastructure">
			<div class="nd-s-i-one">
				<nd-cell v-if="props.shareConfig.validdate != null">
					<template #title>
						<div>有效期</div>
					</template>
					<template #value>
						<div @click="showList.validdateShow = true">{{ validdateValue(props.shareConfig.validdate) }}
							<van-icon name="arrow" />
						</div>
					</template>
				</nd-cell>
				<nd-cell v-if="props.shareConfig.maxVisitNum != null">
					<template #title>
						<div>浏览次数</div>
					</template>
					<template #value>
						<div @click="showList.VisitNumShow = true">{{ VisitNumValue(props.shareConfig.maxVisitNum) }}
							<van-icon name="arrow" />
						</div>
					</template>
				</nd-cell>
				<nd-cell v-if="props.shareConfig.isPrivate != null">
					<template #title>
						<div>是否加密</div>
					</template>
					<template #value>
						<div @click="showList.PrivateShow = true">{{ PrivateValue(props.shareConfig.isPrivate) }} <van-icon
								name="arrow" /></div>
					</template>
				</nd-cell>
			</div>

			<div class="nd-s-advancedSetup" v-if="props.shareConfig.modelSettings">
				高级设置
			</div>
			<div class="nd-s-i-one">
				<nd-cell v-if="props.shareConfig.modelSettings && props.shareConfig.modelSettings.isAllowDownload != null">
					<template #title>
						<div>允许他人下载源文件</div>
					</template>
					<template #value>
						<ndSwitch :modelValue="props.shareConfig.modelSettings.isAllowDownload" size="24px"
							@change="(value) => { props.shareConfig.modelSettings.isAllowDownload = value }"></ndSwitch>
					</template>
				</nd-cell>
				<nd-cell v-if="props.shareConfig.modelSettings && props.shareConfig.modelSettings.isShowMeasure != null">
					<template #title>
						<div>允许他人使用测量功能</div>
					</template>
					<template #value>
						<ndSwitch :modelValue="props.shareConfig.modelSettings.isShowMeasure" size="24px"
							@change="(value) => { props.shareConfig.modelSettings.isShowMeasure = value }"></ndSwitch>
					</template>
				</nd-cell>
				<nd-cell v-if="props.shareConfig.modelSettings && props.shareConfig.modelSettings.isShowPMI != null">
					<template #title>
						<div>允许他人查看PMI</div>
					</template>
					<template #value>
						<ndSwitch :modelValue="props.shareConfig.modelSettings.isShowPMI" size="24px"
							@change="(value) => { props.shareConfig.modelSettings.isShowPMI = value }"></ndSwitch>
					</template>
				</nd-cell>
				<nd-cell v-if="props.shareConfig.modelSettings && props.shareConfig.modelSettings.isShowStructureTree != null">
					<template #title>
						<div>允许他人查看结构树</div>
					</template>
					<template #value>
						<ndSwitch :modelValue="props.shareConfig.modelSettings.isShowStructureTree" size="24px"
							@change="(value) => { props.shareConfig.modelSettings.isShowStructureTree = value }"></ndSwitch>
					</template>
				</nd-cell>
				<nd-cell
					v-if="props.shareConfig.modelSettings && props.shareConfig.modelSettings.isShowStructureTreeProperty != null">
					<template #title>
						<div>允许他人查看自定义属性</div>
					</template>
					<template #value>
						<ndSwitch :modelValue="props.shareConfig.modelSettings.isShowStructureTreeProperty" size="24px"
							@change="(value) => { props.shareConfig.modelSettings.isShowStructureTreeProperty = value }">
						</ndSwitch>
					</template>
				</nd-cell>
			</div>

		</div>
		<div class="nd-s-options">
			<!-- 默认插槽 -->
			<template v-if="slots.default">
				<slot name="default"></slot>
			</template>
			<div v-else class="nd-s-options-conter">
				<nd-grid :column-num="props.subcontract.length == 2 ? 2 : 3" :gutter="12">
					<nd-grid-item @click="createShareLink(item)" v-for="(item, index) in props.subcontract" :key="index"
						:icon="item.icon" :title="item.title" :text="item.text"></nd-grid-item>
				</nd-grid>
			</div>
		</div>
	</div>
	<van-popup v-model:show="showList.validdateShow" round position="bottom" teleport="body">
		<nd-picker :columns="validcolumns" @cancel="showList.validdateShow = false" @confirm="validConfirm" />
	</van-popup>
	<van-popup v-model:show="showList.VisitNumShow" round position="bottom" teleport="body">
		<nd-picker :columns="VisitNumcolumns" @cancel="showList.VisitNumShow = false" @confirm="VisitNumConfirm" />
	</van-popup>
	<van-popup v-model:show="showList.PrivateShow" round position="bottom" teleport="body">
		<nd-picker :columns="Privatecolumns" @cancel="showList.PrivateShow = false" @confirm="PrivateConfirm" />
	</van-popup>
</template>
<script setup>
import { defineEmits, defineProps, watch, useSlots, reactive } from "vue";
import ndSwitch from '../../nd-switch/index.js';
import ndCell from '../../nd-cell/index';
import ndGrid from '../../nd-grid/index';
import ndGridItem from '../../nd-grid-item/index';
import ndPicker from "../../nd-picker/index"

const slots = useSlots()
const props = defineProps({
	shareConfig: {
		type: Object,
		default: {
			validdate: 0,
			maxVisitNum: 0,
			isPrivate: 0,
			modelSettings: {
				isShowMeasure: false,
				isShowPMI: false,
				isShowStructureTree: false,
				isShowStructureTreeProperty: false,
				isAllowDownload: false
			}
		},
	},
	subcontract: {
		type: Array,
		default: [
			{
				icon: '',
				title: '复制链接',
				key: 'link'
			},
			{
				icon: '',
				title: '二维码',
				key: 'qrcode'
			},
			{
				icon: '',
				title: '联系人',
				key: 'contact'
			},
			{
				icon: '',
				title: '微信',
				key: 'wx'
			},
			{
				icon: '',
				title: 'QQ',
				key: 'qq'
			},
			{
				icon: '',
				title: '朋友圈',
				key: 'pyq'
			}
		]
	}
});

// 显示隐藏
const showList = reactive({
	validdateShow: false,
	VisitNumShow: false,
	PrivateShow: false
})

// 配置
const shareConfigCurrent = reactive({
	validdate: 0,
	maxVisitNum: 0,
	isPrivate: 0,
	modelSettings: {
		isShowMeasure: false,
		isShowPMI: false,
		isShowStructureTree: false,
		isShowStructureTreeProperty: false,
		isAllowDownload: false
	}
})

// 时效
const validcolumns = [
	{ text: '永久有效', value: 0 },
	{ text: '15天', value: 15 },
	{ text: '7天', value: 7 },
	{ text: '1天', value: 1 }
]
const validdateValue = (value) => {
	if (value == 0) {
		return '永久有效'
	} else if (value == 15) {
		return '15天'
	} else if (value == 7) {
		return '7天'
	} else if (value == 1) {
		return '1天'
	}
}
const validConfirm = ({ selectedOptions }) => {
	console.log('selectedOptions', selectedOptions)
	showList.validdateShow = false;
	props.shareConfig.validdate = selectedOptions[0].value;
}

// 次数
const VisitNumcolumns = [
	{ text: '不限次数', value: 0 },
	{ text: '100次', value: 100 },
	{ text: '10次', value: 10 },
	{ text: '1次', value: 1 }
]
const VisitNumValue = (value) => {
	if (value == 0) {
		return '不限次数'
	} else if (value == 100) {
		return '100次'
	} else if (value == 10) {
		return '10次'
	} else if (value == 1) {
		return '1次'
	}
}
const VisitNumConfirm = ({ selectedOptions }) => {
	showList.VisitNumShow = false;
	props.shareConfig.maxVisitNum = selectedOptions[0].value;
}

// 加密
const Privatecolumns = [
	{ text: '不加密', value: 0 },
	{ text: '加密', value: 1 },
]
const PrivateValue = (value) => {
	if (value == 0) {
		return '不加密'
	} else {
		return '加密'
	}
}
const PrivateConfirm = ({ selectedOptions }) => {
	showList.PrivateShow = false;
	props.shareConfig.isPrivate = selectedOptions[0].value;
}

const emit = defineEmits(["confirmShar", "popChange"]);

const createShareLink = (item) => {
	emit('confirmShar', item, props.shareConfig)
}

watch(() => showList, () => {
	console.log('watch========', showList);
	const popBool = showList.validdateShow || showList.VisitNumShow || showList.PrivateShow;
	emit('popChange', popBool);
}, { deep: true })



</script>
<style lang="scss" scoped>
.nd-sharing {
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;

	.nd-s-topblank {
		height: 48px;
	}

	.nd-s-infrastructure {
		flex: 1;
		overflow: hidden;
		overflow-y: auto;

		.nd-s-i-one {
			width: calc(100% - 32px);
			margin: 0 auto;
			border-radius: 8px;
			overflow: hidden;
		}

		.nd-s-advancedSetup {
			margin-top: 16px;
			height: 22px;
			/* 自动布局 */
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: 0px 16px;
			background: #FFFFFF;
			z-index: 0;
			font-size: 14px;
			font-weight: normal;
			line-height: 22px;
			letter-spacing: 0px;
			/* 文字颜色/#999 */
			color: #999999;
		}
	}

	.nd-s-options {
		.nd-s-options-conter {
			padding-top: 8px;
		}
	}
}
</style>
<style scoped>
.nd-sharing>>>.nd-grid {
	background: #FFFFFF !important;
}

.nd-sharing>>>.van-grid {
	background: #FFFFFF !important;
}

.nd-sharing>>>.van-grid-item {
	background: #FFFFFF !important;
}

.nd-sharing>>>.van-grid-item__content {
	background: rgba(51, 51, 51, 0.05) !important;
	border-radius: 8px !important;
	overflow: hidden;
}

.nd-s-i-one>>>.van-cell {
	background: rgba(51, 51, 51, 0.05) !important;
}

.nd-s-i-one>>>.van-cell:after {
	border-bottom: 1px solid #d7d7d7 !important;
}

.nd-sharing>>>.van-popup {
	overflow: visible;
}
.nd-sharing>>>.van-popup__close-icon {
	position: absolute;
}
</style>
