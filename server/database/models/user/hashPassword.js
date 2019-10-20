const bcrypt = require('bcrypt')
module.exports = function (next) {
    const user = this;
    if (!user.isModified("password")) {
        return next();
    }
    bcrypt.hash(user.password, 10, 
        (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
}