<template>
	<el-radio-group :modelValue="modelValue" @change="onChange" v-if="!radioButton" v-bind="$attrs" v-on="$attrs">
		<el-radio v-for="(item, index) in radioList" :key="index" :label="item.name" :disabled="item.disabled" :size="size"
			:border="border"></el-radio>
	</el-radio-group>
	<el-radio-group :modelValue="modelValue" @change="onChange" v-if="radioButton" v-bind="$attrs" v-on="$attrs">
		<el-radio-button v-for="(item, index) in radioList" :key="index" :label="item.name" :disabled="item.disabled"
			:size="size" :border="border"></el-radio-button>
	</el-radio-group>
</template>

<script>
// import { getCurrentInstance } from 'vue';

export default {
	name: "nd-radio-group",
	props: {
		modelValue: {
			type: String,
			default: ''
		},
		radioList: {
			type: Array,
			default: () => { return [] }
		},
		size: {
			type: String,
			default: 'default'
		},
		border: {
			type: Boolean,
			default: false
		},
		radioButton: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:modelValue"],
	setup(props, { emit, slots }) {
		const onChange = (value) => {
			emit("update:modelValue", value)
		}

		// 选择事件
		return {
			slots,
			onChange
		}
	},
}
</script>

<style lang="less" scoped>
div /deep/ .el-radio__input.is-checked+.el-radio__label {
	color: #1780E3;
}

div /deep/ .el-radio__input.is-checked .el-radio__inner {
	border-color: #1780E3;
	background: #1780E3;
}

div /deep/ .el-radio__inner::after {
	width: 5px;
	height: 5px;
}

div /deep/ .el-radio-button__original-radio:checked+.el-radio-button__inner {
	background-color: #1780E3;
	border-color: #1780E3;
}

div /deep/ .el-radio__input.is-disabled.is-checked .el-radio__inner {
	background-color: transparent !important;
	border-color: #c0c4cc;
	border-left-color: #c0c4cc !important;

}

div /deep/ .el-radio__input.is-disabled+span.el-radio__label {
	color: #c0c4cc;
}

div /deep/ .el-radio__input.is-disabled+span.el-radio__label {
	color: #c0c4cc !important
}

div /deep/ .el-radio-button__original-radio:disabled:checked+.el-radio-button__inner {
	background: none;
	border-color: #c0c4cc;
}

div /deep/ .el-radio {
	margin-right: 24px;
}

div /deep/ .el-radio.is-bordered {
	margin-right: 12px;
}

.el-radio-button__inner {
	padding: 8px 16px !important
}

div /deep/ .el-radio:hover {
	color: #1780E3 !important;
	border-color: #1780E3 !important;

	.el-radio__input {
		.el-radio__inner {
			border-color: #1780E3 !important;
		}
	}

	;
}

div /deep/ .el-radio.is-disabled {
	color: #c0c4cc !important;
	border-color: #DCDFE6 !important;

	.el-radio__input {
		.el-radio__inner {
			border-color: #DCDFE6 !important;
		}
	}

	;
}

div /deep/ .el-radio.is-disabled:hover {
	color: #c0c4cc !important;
	border-color: #DCDFE6 !important;

	.el-radio__input {
		.el-radio__inner {
			border-color: #DCDFE6 !important;
		}
	}

	;
}

div /deep/ .el-radio-button__inner {
	border-left-width: 1px !important;
	border-left-color: #DCDFE6;
	border-left-style: solid;


}

div /deep/ .el-radio-button:hover {
	.el-radio-button__inner {
		border-color: #1780E3;
	}
}

div /deep/ .el-radio-button.is-disabled:hover {
	.el-radio-button__inner {
		border-color: #DCDFE6;
	}
}
</style>