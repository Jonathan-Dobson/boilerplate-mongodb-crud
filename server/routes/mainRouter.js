const app = require('../init/app');
app.use('/user', require('./user/userRouter'));
app.use('/', require('./jwt'));


app.use('/endpoint', require('./endpoint/Router'));


module.exports = app;

