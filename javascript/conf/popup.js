const Path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: Path.resolve(__dirname, '../src/popup/popup.js'),
    output: {
        path: Path.resolve(__dirname, '../dist/popup/'),
        filename: 'popup.js'
    },
    plugins: [
        new CopyPlugin([
            {
                from: Path.resolve(__dirname, '../src/popup/index.html'),
                to: Path.resolve(__dirname, '../dist/popup/index.html')
            },
        ]),
    ]
};