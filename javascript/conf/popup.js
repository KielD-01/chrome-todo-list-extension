const Path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: Path.resolve(__dirname, '../src/popup/popup.js'),
    output: {
        path: Path.resolve(__dirname, '../dist/popup/'),
        filename: 'popup.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyPlugin([
            {
                from: Path.resolve(__dirname, '../src/popup/index.html'),
                to: Path.resolve(__dirname, '../dist/popup/index.html')
            },
            {
                from: Path.resolve(__dirname, '../manifest.json'),
                to: Path.resolve(__dirname, '../dist/manifest.json')
            },
        ]),
    ]
};