const webpack = require('webpack');
const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, "../backend/MasterDance.Web/wwwroot"),
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            })
        ],
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                changeOrigin: true
            },
            '/Documents/*': {
                target: 'http://localhost:5000',
                changeOrigin: true
            },
            '/ProfileImages/*': {
                target: 'http://localhost:5000',
                changeOrigin: true
            }
        }
    }

};