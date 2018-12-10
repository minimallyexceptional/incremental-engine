const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: ['./src/index.tsx', './src/sass/style.scss'],
    },
    output: {
        path: path.resolve(__dirname, 'build/public/js'),
        publicPath: 'public/js/',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', 'jsx', '.scss']
    },
    module: {
        rules: [{
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
                { loader: "sass-loader" }
            ]
        },
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: [
                { loader: 'ts-loader'}
            ]
        }]
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true, 
            uglifyOptions: {
                ie8: false,
                ecma: 8
            } 
        }),
        new CopyWebpackPlugin([
            {
              from: 'src/index.html',
              to: '../../../build/',
            }
        ])
    ]
}