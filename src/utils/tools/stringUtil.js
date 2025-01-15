// 字符串工具包
/**
 * 文本高亮
 * @param text 待选择的文本
 * @param keyword 关键词
 * @param tagName 替换需要的标签名
 * @param className css class类名
 * @returns {string}
 */
const highText = (text = '', keyword, tagName, className) => {
    if (!text) {
        return '';
    }
    const tempStr = text.replaceAll(keyword, `<${tagName} class=${className}>${keyword}</${tagName}>`);
    return tempStr;
};

export {
    highText
};
