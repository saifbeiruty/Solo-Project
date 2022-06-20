const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    //devtool: 'none', // this removes the eval part in the file that webpack spits for us. This is not necessary 
    entry: './client/src/index.js',
    output: {
        filename: 'bundledMain.js', //name of file that it spits out (This file has our compiled code)
        path: path.resolve(__dirname, 'dist') // name of folder to put the file in. If folder name does not exist, it creates a new folder
    },
    module: {
        rules: [
            {
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env','@babel/preset-react']
                }
            }
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                "style-loader", // Inject styles into the DOM
                "css-loader", //turns css to commonjs
                "sass-loader", // turns sass to css
            ],
            },
        ],
    },
    devServer: {
        // historyApiFallback: true,
        static: {
        directory: path.join(__dirname, 'dist/bundledMain.js'),
        },
        compress: true,
        port: 8080,
        host: 'localhost',
        hot: true,
      },
    plugins: [new HtmlWebpackPlugin({
        template: '/client/src/index.html'
    })],
}