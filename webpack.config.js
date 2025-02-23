const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = {
    mode: process.env.MODE || 'production', // 기본값 'production' 설정
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
                exclude: /node_modules/, // 정규식 수정
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
        filename: 'bundle.[fullhash].js', // [hash] → [fullhash] 변경
        clean: true, // 빌드 시 기존 파일 정리
    },
    optimization: {
        splitChunks: {
            chunks: 'all', // 코드 스플리팅 활성화
        },
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css', // CSS 파일도 캐싱 가능하게 변경
        }),
        new webpack.EnvironmentPlugin(['MODE', 'PORT']),
    ],
    devServer: {
        host: 'localhost',
        port: process.env.PORT || 3000, // 기본값 추가
        open: true,
        historyApiFallback: true,
        hot: true,
    },
    devtool: 'eval-cheap-source-map',
};
