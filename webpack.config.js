const CompressionPlugin = require('compression-webpack-plugin');

module.exports = function (webpackEnv) {

    return {
        plugins: [
            new CompressionPlugin({
                algorithm: "gzip",
                test: /\.js$|\.css$|\.html$/,
                threshold: 10240,
                minRatio: 0.8
            }),
        ]
    }
}