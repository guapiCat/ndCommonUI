// 小版本号+1
function getNextVersion(versionStr) {
  const list = versionStr.split(".")
  let lastVersion = list[list.length - 1]
  list[list.length - 1] = parseInt(lastVersion) + 1

  const newVersion = list.join(".")
  return newVersion
}

module.exports = {
  getNextVersion
}