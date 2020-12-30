// const path = require('path');
// const webpack = require('webpack');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
// // const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const ZipPlugin = require('zip-webpack-plugin');

// //process.argv[3].split("=")[1]
// const modeEnv = process.argv[3].split("=")[1];

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

module.exports = {
//   lintOnSave: false, //是否使用 eslint 语法检查
  publicPath: './',
//   // baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',
//   filenameHashing: true,
//   // 是否使用包含运行时编译器的Vue核心的构建
//   runtimeCompiler: false,
//   // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
//   transpileDependencies: [],
//   // 生产环境 sourceMap
//   productionSourceMap: false,
//   outputDir: `dist/${modeEnv}`, //输出目录
//   indexPath: `${modeEnv}.html`,
//   assetsDir: "static", // 资源目录
//   pages: {
//     index: {
//       entry: `src/${modeEnv}/main.js`,
//       template: 'public/index.html',
//       filename: 'index.html',
//     }
//   },
//   devServer: {
//     open: true,//是否自动打开浏览器
//     port: 1234,//设置端口号
//     // https: true,//是否使用HTTPS协议
//     // host:ipAddress//ID地址，
//     proxy: {//代理设置
//       '/api': {  //代理地址
//         target: 'http://www.sosoapi.com',  //需要代理的地址
//         changeOrigin: true,  //是否跨域
//         // secure: false,
//         ws: true,// 如果要代理 websockets
//         pathRewrite: {
//           '^/api': '/'   //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
//         }
//       }
//     }
//   },
//   chainWebpack: (config) => {//配置别名
//     config.resolve.alias
//       .set('~', resolve(`src/${modeEnv}`))
//       .set('@$', resolve('src'))
//       .set('assets', resolve('src/assets'))
//       .set('components', resolve('src/components'))
//       .set('router', resolve('src/router'))
//       .set('store', resolve('src/store'))
//       .set('views', resolve('src/views'))
//       .set('api', resolve('src/api'))
//   },
//   configureWebpack: {
//     optimization: {
//       minimizer: [
//         new UglifyJsPlugin({//js 压缩插件
//           uglifyOptions: {
//             compress: {
//               warnings: false,
//               drop_console: true,//console
//               drop_debugger: false,
//               pure_funcs: ['console.log']//移除console
//             }
//           }
//         })
//       ]
//     },
//     plugins: [
//       new webpack.DefinePlugin({//编译时期创建全局变量
//         'process.env.entry': JSON.stringify(modeEnv),
//         'buildTime': +new Date()
//       }),
//       // new BundleAnalyzerPlugin({//生成所有组件与组件间的依赖关系图表
//       //   analyzerMode: 'static', // 打开方式  static OR server
//       //   analyzerPort: 8887, // server时显示端口
//       //   analyzerOpen: 'no-open' //是否打开
//       // }),
//       // new ZipPlugin({//打包时生成压缩包
//       //   filename: `${modeEnv}.zip`, //包名
//       //   path: path.join(__dirname, `dist`), //生成位置
//       // }),
//       // new HtmlWebpackIncludeAssetsPlugin({//向html文件中导入在线文件
//       //   assets: [
//       //     {
//       //       path: '//cdn.bootcss.com/vue/2.5.16/vue.min.js',
//       //       type: 'js'
//       //     },
//       //     {
//       //       path: '//cdn.bootcss.com/axios/0.18.0/axios.min.js',
//       //       type: 'js'
//       //     },
//       //     {
//       //       path: '//cdn.bootcss.com/vuex/3.0.1/vuex.min.js',
//       //       type: 'js'
//       //     },
//       //     {
//       //       path: '//cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js',
//       //       type: 'js'
//       //     },
//       //   ],
//       //   append: false,
//       //   publicPath: ''
//       // })
//     ],
//     module: {
//       rules: []
//     }
//     // externals: {//不打包文件，改用在线引入，做首次加载的性能优化
//     //   'vue': 'Vue',
//     //   'vue-router': 'VueRouter',
//     //   'axios': 'axios',
//     //   'vuex': 'Vuex',
//     // }
//   },
//   // 配置高于chainWebpack中关于 css loader 的配置
//   css: {
//     // 是否开启支持 foo.module.css 样式
//     modules: false,

//     // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
//     extract: true,

//     // 是否构建样式地图，false 将提高构建速度
//     sourceMap: false,

//     // css预设器配置项
//     loaderOptions: {
//       css: {
//         // options here will be passed to css-loader
//       },

//       postcss: {
//         // options here will be passed to postcss-loader
//       }
//     }
//   },


//   // 构建时开启多进程处理 babel 编译
//   parallel: require('os').cpus().length > 1,

//   // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
//   pwa: {},

//   // 第三方插件配置
//   pluginOptions: {}
}
