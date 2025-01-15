const fs = require("fs")
const { exec } = require("child_process")
const path = require("path")
const { getNextVersion } = require("./tool")

const args = process.argv.slice(2)
const typeIndex = args.indexOf("--type")
const typeValue = args[typeIndex + 1]; // pc/app

// 1.获取json配置
const packageJsonStr = fs.readFileSync(path.join(__dirname, "../package.json"), { encoding: 'utf8' })
const packageJson = JSON.parse(packageJsonStr)

// 2.获取pc版本号
const versionStr = fs.readFileSync(path.join(__dirname, "./version.json"), { encoding: 'utf8' })
const version = JSON.parse(versionStr)
const nextVersion = typeValue === "pc" ? getNextVersion(version.pc_version) : getNextVersion(version.app_version)

// 3.更新version.json
if(typeValue === "pc") {
  version.pc_version = nextVersion
} else {
  version.app_version = nextVersion
}
const newVersionStr = JSON.stringify(version, null, 2)
fs.writeFileSync(path.join(__dirname, "./version.json"), newVersionStr, (err) => {
  if(err) return console.log(err)
})

// 4.更新package.json
packageJson.name = typeValue === "pc" ? "ndCommonUI" : "ndAppCommonUI"
packageJson.version = nextVersion
if(typeValue === "pc") {
  packageJson.main = "nd-lib/lib/ndCommonUI.umd.js"
  packageJson.files = ["nd-lib/lib"]
} else {
  packageJson.main = "nd-lib/lib-app/ndAppCommonUI.umd.js"
  packageJson.files = ["nd-lib/lib-app"]
}

fs.writeFileSync(path.join(__dirname, "../package.json"), JSON.stringify(packageJson, null, 2), (err) => {
  if(err) return console.log(err)
})


const cmdStr = "npm publish"
exec(cmdStr, (err, stdout, stderr) => {
  if(err) {
    console.log(err)
    console.log("========== 发布失败 ==========")
  } else {
    console.log(stdout)
    console.log("========== 发布成功 ==========")
  }
})
