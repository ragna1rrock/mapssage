const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = {
    mode: process.env.MODE,
    entry: './src/Index.tsx',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: ['esbuild-loader'],
                exclude: '/node_modules/',
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            fallback: 'file-loader',
                            name: 'image/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'js/[name].[chunkhash].js', // 각 청크별로 다른 파일명 적용
        clean: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: 'single', // 런타임 코드 분리
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
        new webpack.EnvironmentPlugin(['MODE', 'PORT']),
    ],
    devServer: {
        host: 'localhost',
        port: process.env.PORT,
        open: true,
        historyApiFallback: true,
        hot: true,
    },
    devtool: 'eval-cheap-source-map',
};
