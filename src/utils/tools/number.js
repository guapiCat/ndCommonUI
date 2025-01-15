/**
 * 将金额转化成 0.00 格式
 * @param {*} obj 金额
 * @returns {number}
 */
const amountChange = (obj) => {
  obj += '';
  obj = obj.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
  obj = obj.replace(/^\./g, ""); //验证第一个字符是数字
  obj = obj.replace(/\.{2,}/g, "."); //只保留第一个, 清除多余的
  obj = obj.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
  obj = obj.replace(/^(\-)*(\d+)\.(\d\d\d\d\d\d\d\d).*$/, '$1$2.$3'); //控制可输入的小数
  obj = parseFloat(obj).toFixed(2);
  if (isNaN(obj)) {
    obj = 0.00
  }
  return obj;
}

/**
 * 数字运算：A乘B
 * @param {*} arg1 Number|String 
 * @param {*} arg2 Number|String 
 * @returns 
 */
const accMul = (arg1, arg2) => {
  var m = 0,
    s1 = arg1.toString(),
    s2 = arg2.toString();
  try { m += s1.split(".")[1].length } catch (e) {}
  try { m += s2.split(".")[1].length } catch (e) {}
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}

/**
 * 数字运算：A除B
 * @param {*} arg1 Number|String 
 * @param {*} arg2 Number|String 
 * @returns Number
 */
const accExc = (arg1, arg2) => {
  var t1 = 0, t2 = 0, r1, r2;
  try { t1 = arg1.toString().split(".")[1].length; } catch (e) {}
  try { t2 = arg2.toString().split(".")[1].length; } catch (e) {}
  r1 = Number(arg1.toString().replace(".", ""));
  r2 = Number(arg2.toString().replace(".", ""));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}

/**
 * 数字运算：A加B
 * @param {*} arg1 Number|String 
 * @param {*} arg2 Number|String 
 * @returns Number
 */
const accAdd = (arg1, arg2) => {
  var r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (accMul(arg1, m) + accMul(arg2, m)) / m;
}

/**
 * 数字运算：A减B
 * @param {*} arg1 Number|String 
 * @param {*} arg2 Number|String 
 * @returns Number
 */
const accCut = (arg1, arg2) => {
  var r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (accMul(arg1, m) - accMul(arg2, m)) / m;
}

export {
  amountChange,
  accMul,
  accExc,
  accAdd,
  accCut
}