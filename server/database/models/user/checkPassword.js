const bcrypt = require('bcrypt')
module.exports = function(passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, 
        (err, isMatch) => {
            if (err) {
                return callback(err);
            }
            callback(null, isMatch);
    });
};