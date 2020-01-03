const path = require('path')
const config = require('./package.json')
const dataOrigin = process.env.DATA_ORIGIN || 'backend'

module.exports = {
  publicPath: './',
  indexPath: path.resolve(__dirname, './dist/' + config.version + '/index.html'),
  outputDir: path.resolve(__dirname, './dist/' + config.version),
  assetsDir: 'static',
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, {
        limit: 10240
      }))
  },
  devServer: {
    open: true,
    port: 3000,
    https: false,
    hotOnly: false,
    proxy: require('./proxy')[dataOrigin]
  },
  // devtool: 'eval-source-map',
  transpileDependencies: [ 'vue-echarts', 'resize-detector' ]
}
