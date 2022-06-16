const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {

    },
    output: {
        filename: '',
        path: path.resolve(__dirname, '')
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
                test: /\.s[ac]ss$/i,
                use: ["style-loader","css-loader","sass-loader"],
            },
        ],
    },
    devServer: {
        static: {
        directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 8080,
      },
    plugins: [new HtmlWebpackPlugin({
        template: ''
    })],
}