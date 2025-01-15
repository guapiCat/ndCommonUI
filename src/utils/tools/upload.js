import {post, get, postProgress} from './httpRequest';
import {convertObjectToFormData} from './convert';
/**
 * 分片上传
 * @param file 文件
 * @param getUploadIdUrl 获取上传id地址 GET请求
 * @param headers 请求头（后续上传与合并都采用这一个请求头，注意做好控制）
 * @param chunkSize 切片大小
 * @param getUploadIdParams 获取上传id额外参数 query参数
 * @param getUploadIdErrorCallback 获取上传id错误处理
 * @param uploadUrl 上传地址（POST请求，formData入参）
 * @param uploadParams 上传请求额外参数，拼接在formData上面
 * @param uploadErrorCallback 上传失败回调
 * @param onProgress 上传进度回调
 * @param mergeUploadUrl 合并地址 POST请求
 * @param mergeUploadParams 合并请求参数  json形式拼接
 * @param mergeUploadErrorCallback 合并请求参数失败回调
 * @param uploadSuccessCallback 上传失败回调
 * @returns {Promise<void>}
 */
const sliceUpload = async ({
        file,
        getUploadIdUrl,
        headers = {},
        chunkSize = 1024 * 1024 * 3,
        getUploadIdParams = {},
        getUploadIdErrorCallback,
        uploadUrl,
        uploadParams = {},
        uploadErrorCallback,
        onProgress,
        mergeUploadUrl,
        mergeUploadParams = {},
        mergeUploadErrorCallback,
        uploadSuccessCallback
    }) => {
    console.log('开始获取上传id...')
    try {
        // 获取上传id
        const result = await get(getUploadIdUrl, headers, getUploadIdParams)
        console.log('result', result)
        if (result && result.code === 0) {
            // 文件大小
            const fileSize = file.size;
            // 切片总数
            const chunkTotal = Math.ceil(fileSize / chunkSize);
            // 上传id
            const uploadId = result.data;
            // 开始切片上传
            console.log('开始切片上传...')
            await beginSliceUpload({
                uploadId,
                headers,
                file,
                chunkTotal,
                currentChunk: 0,
                chunkSize,
                uploadUrl,
                uploadParams,
                uploadErrorCallback,
                onProgress,
                mergeUploadUrl,
                mergeUploadParams,
                mergeUploadErrorCallback,
                uploadSuccessCallback
            })
        } else {
            getUploadIdErrorCallback ? getUploadIdErrorCallback(result) : console.error('获取上传id失败', result);
        }
    } catch (e) {
        getUploadIdErrorCallback ? getUploadIdErrorCallback(e) : console.error('获取上传id失败', e);
    }
}
const beginSliceUpload = async ({
        uploadId,
        headers,
        file,
        chunkTotal,
        currentChunk,
        chunkSize,
        uploadUrl,
        uploadParams,
        uploadErrorCallback,
        onProgress,
        mergeUploadUrl,
        mergeUploadParams,
        mergeUploadErrorCallback,
        uploadSuccessCallback
    }) => {
    console.log(`上传id：${uploadId}---总片数：${chunkTotal}---当前片数：${currentChunk}, 切片大小：${chunkSize}`)
    // 上传切片
    if (currentChunk < chunkTotal) {
        // 构造固定上传请求参数
        let uploadRequestParams = {
            // 文件
            file: file.slice(currentChunk * chunkSize, (currentChunk + 1) * chunkSize),
            // 切片总数
            chunkTotal,
            // 当前切片
            currentChunk,
            // 批次id
            uploadId
        }
        Object.assign(uploadRequestParams, uploadParams);
        let formData = convertObjectToFormData(uploadRequestParams);
        try {
            const result = await postProgress(uploadUrl, headers, formData, {}, (e) => {
                onProgress ? onProgress(e) : console.log('上传进度---', e)
            })
            if (result && result.code === 0) {
                console.log(`第索引：${currentChunk} 片上传成功`)
                await beginSliceUpload({
                    uploadId,
                    headers,
                    file,
                    chunkTotal,
                    currentChunk: currentChunk + 1,
                    chunkSize,
                    uploadUrl,
                    uploadParams,
                    onProgress,
                    mergeUploadUrl,
                    mergeUploadParams,
                    mergeUploadErrorCallback,
                    uploadSuccessCallback
                })
            } else {
                uploadErrorCallback ? uploadErrorCallback(result) : console.error(`第索引：${currentChunk} 片上传失败！${result}`);
            }
        } catch (e) {
            uploadErrorCallback ? uploadErrorCallback(e) : console.error(`第索引：${currentChunk} 片上传失败！${e}`);
        }
    }
    // 上传完毕合并请求
    else {
        console.log('文件上传完成，开始进行合并请求...')
        // 文件基本信息
        let mergeRequest = {
            fileName: file.name,
            fileType: file.type,
            uploadId
        }
        // 合并自定义参数与固定参数
        Object.assign(mergeRequest, mergeUploadParams);
        try {
            // 合并请求
            const result = await post(mergeUploadUrl, headers, mergeRequest, {});
            if (result && result.code === 0) {
                uploadSuccessCallback ? uploadSuccessCallback(result) : console.log('文件上传完成', result)
            } else {
                mergeUploadErrorCallback ? mergeUploadErrorCallback(result) : console.error('文件合并失败', result)
            }
        } catch (e) {
            mergeUploadErrorCallback ? mergeUploadErrorCallback(e) : console.error('文件合并失败', e)
        }
    }
}
export {
    sliceUpload
}
