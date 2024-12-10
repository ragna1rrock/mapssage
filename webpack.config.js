const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = {
    mode: process.env.MODE,
    entry: './src/index.tsx',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
    },
    module: {
        // loader 설정 - 등록한 로더의 뒤의 요소부터 번들링에 반영
        // node_modules 제외
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: ['esbuild-loader'],
                exclude: '/node_modules/',
            }, {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }, {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: 'assets/[contenthash].[ext]',
                },
            },{
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.[hash].js',
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(), // 번들한 css파일과 js파일을 html 파일에 link 태그, script태그로 추가
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }), // 환경 정보를 제공
        new webpack.EnvironmentPlugin(['MODE', 'PORT']),
    ],
    devServer: {
        host: 'localhost',
        port: process.env.PORT,
        open: true,
        historyApiFallback: true,
        hot: true, // hot : 모듈의 변화된 부분만 서버에 자동으로 반영
    },
    devtool: 'eval-cheap-source-map',
};
