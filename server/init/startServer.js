const PORT = require('./environment').PORT
module.exports = require('./app').listen(PORT, 
    () => console.log(`HTTPS Server running on port ${PORT}`));
