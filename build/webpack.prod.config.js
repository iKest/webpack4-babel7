"use strict";

const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin"); // 清空打包目录的插件
const webpack = require("webpack");
const baseConfig = require("./webpack.base");
const merge = require("webpack-merge");
const WebpackParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //CSS文件单独提取出来
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
const cacheGroups = require("./config").build.cacheGroups;
const prodWebpackConfig = merge(baseConfig, {
  devtool: "cheap-module-source-map", // 指定加source-map的方式
  optimization: {
    //webpack4.x的最新优化配置项，用于提取公共代码
    splitChunks: {
      cacheGroups
    },
    runtimeChunk: { name: "runtime" },
    //runtimeChunk是webpack固定生成的一段代码，用来维护模块之间的以来关系的，比如给每个模块一个ID之类的，这部分代码跟你写的代码完全没有关系，所以单独切割出来能够防止他的变化影响你自己的代码的hash变化
    minimizer: [
      new WebpackParallelUglifyPlugin({
        sourceMap: true,
        uglifyJS: {
          output: {
            beautify: false, //不需要格式化
            comments: false //不保留注释
          },
          compress: {
            warnings: false, // 在UglifyJs删除没有用到的代码时不输出警告
            drop_console: false, // 删除所有的 `console` 语句，可以兼容ie浏览器
            collapse_vars: true, // 内嵌定义了但是只用到一次的变量
            reduce_vars: true, // 提取出出现多次但是没有定义成变量去引用的静态值 
          }
        }
      }),
      new OptimizeCSSPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessorOptions: {
          safe: true,
          autoprefixer: { disable: true }, // 这里是个大坑，稍后会提到
          mergeLonghand: false,
          discardComments: {
            removeAll: true // 移除注释
          }
        },
        canPrint: true
      })
      // new PurifyCSSPlugin({
      //     paths: glob.sync(path.join(__dirname, '../src/page/*.html'))
      // })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: path.join(__dirname, ".."),
      // exclude: ['vendor'],
      verbose: true,
      dry: false
    }),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[chunkhash:8].css",
      chunkFilename: "css/[name].[chunkhash:8].css"
    }),
    new BundleAnalyzerPlugin()
  ]
});
module.exports = prodWebpackConfig;
