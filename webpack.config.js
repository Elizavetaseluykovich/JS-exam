const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    experiments: {
        topLevelAwait: true,
    },
    externals: {
        'node-fetch': 'fetch'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    stats: {
        errorDetails: true
    },
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify"),
            "util": false,
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
            "buffer": false,
            "vm": false,
            "os": false,
            "assert": false,
            "constants": false,
            "child_process": false,
            "inspector": false,
            "worker_threads": false
        }
    },
    entry: {
        main: path.resolve(__dirname, './src/script/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/template.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.ContextReplacementPlugin( /(.+)?angular(\\|\/)core(.+)?/, root('./src'), {} )
    ],
}