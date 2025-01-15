// 请求示例文件
import request from '@/utils/axios'
// get不携带参数
export function GetTypeList() {
	return request.get('/api/common/GetTypeList');
}
// post不携带参数
export function AddFile() {
	return request.post('/api/ModelInfo/AddFile');
}
// post携带参数
export function CheckFileValid(data) {
	return request.post('/api/ModelInfo/CheckFileValid', data);
}
// get携带参数
export function GetModelFileInfo(data) {
	return request.get('/api/ModelInfo/GetModelFileInfo', data);
}