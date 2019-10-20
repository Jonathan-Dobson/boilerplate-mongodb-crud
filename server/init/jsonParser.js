module.exports = require('./app').use(require('express').json())
console.log('using express json parser');
