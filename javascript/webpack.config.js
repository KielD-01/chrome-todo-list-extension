const popupConf = require('./conf/popup');
const bgConf = require('./conf/bg');
const del = require('del');

del.sync(['./dist']);

module.exports = [
    bgConf,
    popupConf,
];