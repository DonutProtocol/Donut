const webpack = require('webpack')

module.exports = {

  configureWebpack: {

    plugins: [

      new webpack.ProvidePlugin({

        $: "jquery",

        jQuery: "jquery",

        "windows.jQuery": "jquery"

      })

    ]

  },
  // devServer: {
  //   https: false, //协议
  //   open: false, //启动服务时自动打开浏览器访问
  //   proxy: { // 开发环境代理配置
  //     '/dev-api': { // 意思是当请求是以 dev-api 开头的请求，都走代理
  //       // 目标服务器地址，代理访问：http://localhost:8001
  //       target: 'http://103.100.210.143:8000',
  //       // target: 'http://192.168.31.12:8080',
  //       // target: 'http://127.0.0.1:9000',
  //       changeOrigin: true, // 开启代理服务器，就会给你代理转发
  //       pathRewrite: {
  //         '^/dev-api': '', // 就是将请求地址中的 /dev-api 前缀替换成空的
  //       }
  //     }
  //   }
  // },
}