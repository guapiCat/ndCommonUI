/**
 * 下载 在线的文件
 * @param url 文件的地址
 * @param fileName 文件名
 * @returns 
 */
const downloadFile = (url , fileName) => {
    const el = document.createElement('a');
    el.style.display = 'none';
    el.setAttribute('target', '_blank');
    fileName && el.setAttribute('download', fileName);
    el.href = url;
    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
}
export {
    downloadFile
}
