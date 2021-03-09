/*
 * @Descripttion:
 * @version:
 * @Author: wanghongkui
 * @Date: 2021-03-02 15:17:24
 * @LastEditTime: 2021-03-08 15:57:06
 */

const packageName = require('./package.json').name;
const { WebpackManifestPlugin } = require('webpack-manifest-plugin'); // 资源清单 协助主应用加载资源

module.exports = {
  // 设定好publicPath, 端口最好是一个固定值
  publicPath: process.env.NODE_ENV === 'production' ? '/app-demo2' : 'http://localhost:8993',
  configureWebpack: (config) => {
    config.output.libraryTarget = 'umd'; // 打包格式为umd 配合模块加载工具加载项目
    config.output.library = packageName;
    config.output.jsonpFunction = `webpackJsonp_${packageName}`;
    // 删除chunk-vendors.js文件，公共三方模块打包进app.js文件
    config.optimization.splitChunks.cacheGroups = {};
    //config.optimization.delete('splitChunks');

    // 打包时移除这些通用库，配合systemjs从root加载
    config.externals = ['vue', 'vue-router', 'vuex', 'lodash', 'dayjs'];

    ///
    config.plugins.push(
      new WebpackManifestPlugin({
        fileName: 'manifest.json'
        // filter: function(option) {
        //   return option.isInitial;
        // }
      })
    );
  },
  devServer: {
    headers: {
      // 开发模式下解决微前端加载时跨域的问题
      'Access-Control-Allow-Origin': '*'
    }
  },
  css: {
    // css不单独打包成一个文件，和js打包进一个文件
    extract: false
  }
};
