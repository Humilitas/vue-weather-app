const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    // 所有的资源都会被链接为相对路径
    publicPath: '/vue-weather-app/',
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config
                .mode('production')
                .devtool(false) // 关闭sourcemap
        }
    },
    configureWebpack: {
        plugins: [
            new BundleAnalyzerPlugin()
        ]
    }
};