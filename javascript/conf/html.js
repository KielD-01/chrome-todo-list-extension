const Path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

console.log(Path.resolve(__dirname, '../src/popup/index.html'));
console.log(Path.resolve(__dirname, '../dist/popup/index.html'));

module.exports = {
    mode: 'production',
    plugins: [
        new CopyPlugin([
            {
                from: Path.resolve(__dirname, '../src/popup/index.html'),
                to: Path.resolve(__dirname, '../dist/popup/index.html')
            },
        ]),
    ],
};