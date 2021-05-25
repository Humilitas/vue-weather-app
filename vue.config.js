// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    // 所有的资源都会被链接为相对路径
    publicPath: '/vue-weather-app/',
    productionSourceMap: false, // 关闭sourcemap

    // configureWebpack: {
    //     plugins: [
    //         new BundleAnalyzerPlugin()
    //     ]
    // }
};