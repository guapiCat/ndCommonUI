// 正则表达式验证
// 邮箱
import { isNull } from './commonUtils';
const email = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/;
// QQ
const QQ = /^[1-9]\d{4,10}$/;
// 手机号
const phone = /^[1][0-9][0-9]\d{8}$/;
// 正整数
const positiveInteger = /^[1-9]\d*$/;
// 身份证号校验规则。x结尾的不区分大小写x。
const idNumber = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
// 装配体
const assembly = /(.asm$)|(.asm.[0-9]*$)|(.psm$)|(.sldasm$)|(.iam$)|(.catproduct$)|(.session$)|(.prt$)/;
// CAD（包含零件与装配体）
const CAD = /(.asm$)|(.asm.[0-9]*$)|(.psm$)|(.sldasm$)|(.iam$)|(.catproduct$)|(.session$)|(.prt$)|(\.3dxml$)|(\.sat$)|(\.sab$)|(\.asat$)|(\.asa$)|(\.model$)|(\.exp$)|(\.catpart$)|(\.cgr$)|(\.catdrawing$)|(\.igs$)|(\.iges$)|(\.ipt$)|(\.x_t$)|(\.xmt_txt$)|(\.x_b$)|(\.xmt_bin$)|(\.p_b$)|(\.xmp_bin$)|(\.p_t$)|(\.xmp_txt$)|(\.par$)|(\.sldprt$)|(\.stp$)|(\.step$)|(\.vda$)|(\.stl$)|(\.jt$)|(\.obj$)|(\.stpz$)|(\.stpx$)|(\.xcgm$)|(\.3dm$)|(\.3mf$)|(\.asab$)|(\.prt.[0-9]*$)|(\.dwg$)|(\.dxf$)/;
// PDF
const PDF = /(.pdf$)/;
// WORD
const WORD = /(.doc$)|(.docx$)|(.docm$)/;
// EXCEL
const EXCEL = /(.doc$)|(.docx$)|(.docm$)/;
// PPT
const PPT = /(.ppt$)|(.pptx$)|(.pptm$)/;
// IMAGE
const IMAGE = /(.png$)|(.bmp$)|(.jpg$)|(.jpeg$)|(.gif$)|(.tif$)|(.tiff$)|(.pcx$)|(.tga$)|(.exif$)|(.fpx$)|(.svg$)|(.psd$)|(.cdr$)|(.pcd$)|(.ufo$)|(.eps$)|(.ai$)|(.raw$)|(.wmf$)|(.webp$)|(.icb$)|(.vst$)|(.pdd$)|(.psdt$)|(.psb$)|(.rle$)|(.dib$)|(.dcm$)|(.dc3$)|(.dic$)|(.iff$)|(.tdi$)|(.jpf$)|(.jpx$)|(.jp2$)|(.j2c$)|(.j2k$)|(.jpc$)|(.jps$)|(.pdp$)|(.pxr$)|(.pbm$)|(.pgm$)|(.ppm$)|(.pnm$)|(.pfm$)|(.pam$)|(.sct$)|(.mpo$)/;

/**
 * 验证邮箱
 * @param str 待验证内容
 * @param emailPattern 正则表达式
 * @returns {boolean}
 */
function verifyEmail(str, emailPattern = email) {
    if (!isNull(str)) {
        return emailPattern.test(str);
    } else {
        return false;
    }
}

/**
 * 校验是否是装配体
 * @param str
 * @param assemblyPattern
 * @returns {boolean}
 */
function verifyAssembly(str, assemblyPattern = assembly) {
    if (!isNull(str)) {
        return assemblyPattern.test(str);
    } else {
        return false;
    }
}

/**
 * 校验是否是cad
 * @param str
 * @param cadPattern
 * @returns {boolean}
 */
function verifyCAD(str, cadPattern = CAD) {
    if (!isNull(str)) {
        return cadPattern.test(str);
    } else {
        return false;
    }
}

/**
 * 校验是否是pdf
 * @param str
 * @param pdfPattern
 * @returns {boolean}
 */
function verifyPDF(str, pdfPattern = PDF) {
    if (!isNull(str)) {
        return pdfPattern.test(str);
    } else {
        return false;
    }
}

/**
 * 校验是否是word
 * @param str
 * @param wordPattern
 * @returns {boolean}
 */
function verifyWORD(str, wordPattern = WORD) {
    if (!isNull(str)) {
        return wordPattern.test(str);
    } else {
        return false;
    }
}

/**
 * 校验是否是excel
 * @param str
 * @param excelPattern
 * @returns {boolean}
 */
function verifyEXCEL(str, excelPattern = EXCEL) {
    if (!isNull(str)) {
        return excelPattern.test(str);
    } else {
        return false;
    }
}

/**
 * 校验是否是ppt
 * @param str
 * @param pptPattern
 * @returns {boolean}
 */
function verifyPPT(str, pptPattern = PPT) {
    if (!isNull(str)) {
        return pptPattern.test(str);
    } else {
        return false;
    }
}

/**
 * 校验是否是office文件
 * @param str
 * @returns {boolean}
 */
function verifyOFFICE(str) {
    if (!isNull(str)) {
        return PPT.test(str) || WORD.test(str) || EXCEL.test(str);
    } else {
        return false;
    }
}

/**
 * 校验是否是image
 * @param str
 * @param imagePattern
 * @returns {boolean}
 */
function verifyIMAGE(str, imagePattern = IMAGE) {
    if (!isNull(str)) {
        return imagePattern.test(str);
    } else {
        return false;
    }
}

/**
 * 验证QQ
 * @param str 待验证内容
 * @param QQPattern 正则表达式
 * @returns {boolean}
 */
function verifyQQ(str, QQPattern = QQ) {
    if (!isNull(str)) {
        return QQPattern.test(str);
    } else {
        return false;
    }
}

/**
 * 验证手机号
 * @param str 待验证内容
 * @param phonePattern 正则表达式
 * @returns {boolean}
 */
function verifyPhone(str, phonePattern = phone) {
    if (!isNull(str)) {
        return phonePattern.test(str);
    } else {
        return false;
    }
}

/**
 * 验证正整数
 * @param str 待验证内容
 * @param positiveIntegerPattern 正则表达式
 * @returns {boolean}
 */
function verifyPositiveInteger(str, positiveIntegerPattern = positiveInteger) {
    if (!isNull(str)) {
        return positiveIntegerPattern.test(str);
    } else {
        return false;
    }
}

/**
 * 验证身份证号 x结尾的不区分大小写
 * @param str 待验证内容
 * @param idNumberPattern 正则表达式
 * @returns {boolean}
 */
function verifyIdNumber(str, idNumberPattern = idNumber) {
    if (!isNull(str)) {
        return idNumberPattern.test(str);
    } else {
        return false;
    }
}

export {
    verifyEmail,
    verifyQQ,
    verifyPhone,
    verifyPositiveInteger,
    verifyIdNumber,
    verifyAssembly,
    verifyCAD,
    verifyPDF,
    verifyWORD,
    verifyEXCEL,
    verifyPPT,
    verifyIMAGE,
    verifyOFFICE
};
