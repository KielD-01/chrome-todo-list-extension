const Path = require('path');

module.exports = {
    mode: 'production',
    entry: Path.resolve(__dirname, '../src/popup/popup.js'),
    output: {
        path: Path.resolve(__dirname, '../dist/popup/'),
        filename: 'popup.js'
    }
};