/**
 * Created by ice on 2017/7/20.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const fs = require('fs');

const babelrc = JSON.parse(fs.readFileSync('./.babelrc'));
require('babel-register')(babelrc);

//判断当前运行环境是开发模式还是生产模式
const nodeEnv = process.env.NODE_ENV || 'development';
const isPro = nodeEnv === 'production';

const appPath = path.resolve(__dirname, './app/');
const tmplPath = path.resolve(__dirname, './app/tmpl');

console.log('当前运行环境：', isPro ? 'production' : 'development');

var resolve = function (dir) {
    return path.join(__dirname, dir);
};

var plugins = [
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
        title: 'iceice',
        filename: 'index.html',
        template: path.resolve(tmplPath, 'template.ejs'),
        inject: 'body',
        chunks: ['index'],
        hash: true,
        cache: false
    }),
    new webpack.DefinePlugin({
        'process.env':{
            'NODE_ENV': JSON.stringify(nodeEnv)
        }
    }),
];
if (isPro) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    )
} else {
    plugins.push(
        new webpack.HotModuleReplacementPlugin()
    )
}

module.exports = {
    devtool: !isPro && 'cheap-eval-source-map',
    entry: {
        index: path.resolve(appPath, 'index.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: isPro ? './' : '/',
        chunkFilename: '[name].[hash].js'
    },
    plugins: plugins,
    node: {
        fs: 'empty'
    },
    resolve: {
        extensions: ['.js', '.vue', '.css'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(appPath)
        ],
        alias: {
            'static': path.join(appPath, 'common'),
            'components': path.join(appPath, 'views/components'),
            'vue': path.join(__dirname, '/node_modules/vue/dist/vue')
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader'],
            exclude: /node_modules/,
            include: resolve('/')
        },{
            test: /\.vue$/,
            use: ['vue-loader'],
            exclude: /node_modules/,
            include: resolve('views')
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            use: ['url-loader?limit=10000&name=files/[name].[hash:7].[ext]']
        }, {
            test: /\.(css)$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader'],
                fallback: 'style-loader'
            })
        }]
    },
    devServer: {
        contentBase: resolve('/'),
        historyApiFallback: true,
        compress: true,
        port: 1234,
        hot: true,
        inline: true,
        stats: {
            assets: true,
            children: false,
            modules: false,
            chunks: false,
            publicPath: false,
            timings: true,
            warnings: true,
            colors: {
                green: '\u001b[32m',
            }
        },
    }
};