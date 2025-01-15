// 请求示例文件
import request from '@/utils/axios'

// 获取上传token信息
export function GetUploadToken(data) {
	return request.get('/api/AdminSettings/GetUploadToken', data);
}

// 文件有效性校验
export function CheckFileValid(data) {
	return request.post('/api/ModelInfo/CheckFileValid', data);
}

// 判断MD5是否存在
export function CheckMD5Exist(data) {
	return request.post('/api/ModelInfo/CheckMD5Exist', data);
}

// 获取可支持后缀列表
export function GetTypeList(data) {
	return request.get('/api/common/GetTypeList', data);
}

// 上传模型文件
export function AddFile(data) {
	return request.post('/api/ModelInfo/AddFile', data);
}

// 上传模型装配体
export function AddAssemblyFile(data) {
	return request.post('/api/ModelInfo/AddAssemblyFile', data);
}

// 获取模型文件信息
export function GetModelFileInfo(data) {
	return request.get('/api/ModelInfo/GetModelFileInfo', data);
}





