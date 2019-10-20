module.exports = require('./app').use(require("morgan")("dev"));
console.log('using morgan dev');