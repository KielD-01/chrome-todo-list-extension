const Path = require('path');

module.exports = {
    mode: 'production',
    entry: Path.resolve(__dirname, '../src/js/background.js'),
    output: {
        path: Path.resolve(__dirname, '../dist/js/'),
        filename: 'background.js'
    }
};