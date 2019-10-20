console.log('using express JWT');
module.exports = require('express-jwt')({ secret: require('../init/environment').SECRET })