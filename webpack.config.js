const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//require("babel-polyfill");

module.exports = {
    entry: {
        app: ['./src/index.js', "babel-polyfill"]},
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: 'babel-loader'
                
            },
            {
                test: /\.css$/, 
                use: ['css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};