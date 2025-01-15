const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { ElementPlusResolver, VantResolver } = require('unplugin-vue-components/resolvers')

/**
 * 环境判断
 */
let moduleEvt = process.env.VUE_APP_SETTING    // 获取环境变量
let nodeEnv = (process.env.NODE_ENV === 'production') ? false : true
console.log(moduleEvt);
console.log(nodeEnv);
let setting = {}
// 判断环境, 获取配置
if (moduleEvt == 'app') {
  setting = {
    app: {
      // 应用入口配置，相当于单页面应用的main.js，必需项
      entry: 'src/views/vApp/main.js',
      // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
      template: 'public/app.html',
      // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
      filename: 'app.html',
      chunks: ["app", "chunk-common"] //分别是入口的名称，也就是前面的key值,和公共chunk的名称
    }
  }
} else if (moduleEvt == 'pc') {
  setting = {
    index: {
      entry: 'src/views/vPc/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ["index", "chunk-common"] //分别是入口的名称，也就是前面的key值,和公共chunk的名称
    }
  }
} else {
  setting = {
    app: {
      // 应用入口配置，相当于单页面应用的main.js，必需项
      entry: 'src/views/vApp/main.js',
      // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
      template: 'public/app.html',
      // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
      filename: 'app.html',
      chunks: ["app", "chunk-common"] //分别是入口的名称，也就是前面的key值,和公共chunk的名称
    },
    index: {
      entry: 'src/views/vPc/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ["index", "chunk-common"] //分别是入口的名称，也就是前面的key值,和公共chunk的名称
    }
  }
}

/**
 * 打包配置
 */
module.exports = {
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // 多页配置
  pages: setting,
  // 关闭压缩前的文件显示
  productionSourceMap: nodeEnv,
  // 打包配置
  chainWebpack: config => {
    config.optimization.delete("splitChunks");    // 去掉webpack自带的文件分割
    let optimization = {
      splitChunks: {
        chunks: "all"
      }
    };
    // 配置externals加载vue全家桶资源
    config.set('externals',
      {
        // 'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex'
      }
    )
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, optimization));
  },
  lintOnSave: true,
  // element-ui plus 按需引用
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver(), VantResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver(), VantResolver()],
      }),
    ],
    libraryExport: 'default',
  },
  // 自定义打包配置(分割app和pc的chunks.js, 公共部分做特殊处理)
  configureWebpack: config => {
    config.devtool = "source-map";
    config.output.filename = "js/[name].[hash].js";
    config.output.chunkFilename = "js/[name].[hash].js";
    config.optimization = {
      // 文件切割
      splitChunks: {
        cacheGroups: {
          common: {
            //抽取所有入口页面都需要的公共chunk
            name: "chunk-common",
            chunks: "initial",
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 1,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      }
    };
    const plugins = [];
    if(!nodeEnv){
      plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ["console.log"] //移除console
            }
          },
        })
      );
    }
    config.plugins = [...config.plugins, ...plugins]
  },
  // webpack-dev-server 相关配置
  devServer: {
    // 本地端口
    port: 8066,
    // 代理
    proxy: '',
    // eslint-loader警告配置
    overlay: {
      warnings: true,
      errors: true
    }
  },
}
