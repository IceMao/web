/**
 * Created by ice on 2017/7/20.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//判断当前运行环境是开发模式还是生产模式
const nodeEnv = process.env.NODE_ENV || 'development';
const isPro = nodeEnv === 'production';

const appPath = path.resolve(__dirname, './app/');
const tmplPath = path.resolve(__dirname, './app/tmpl');

if (isPro) {
    plugins.push(
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify(nodeEnv)
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    )
} else {
    plugins.push(
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify(nodeEnv)
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    )
}

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
    })
];

module.exports = {
    entry: {
        index: path.resolve(appPath, 'index.js')
    },
    output: {
        filename:'[name].js',
        path: path.resolve(appPath, 'dist'),
        publicPath: isPro ? './' : '/',
        chunkFilename: '[name].[hash].js'
    },
    module: {
        rules:[{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader'],
                fallback: 'style-loader'
            })
        },{
            test: /\.vue$/,
            use: ['vue-loader'],
            exclude: /node-modules/
            // include: resolve('src')
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            use: ['url-loader?limit=10000&name=files/[name].[hash:7].[ext]']
        }]
    },
    plugins: plugins,
    resolve: {
        extensions: ['.js','.css','.vue'],
        modules:[
            path.resolve(__dirname, 'node-modules'),
            path.join(appPath)
        ],
        alias:{
            'static': path.join(appPath, 'common'),
            'components': path.join(appPath, 'components')
        }
    },
    devServer: {
        port: 3423,
        hot: true,
        inline: true,
        historyApiFallback: true,
    }
};