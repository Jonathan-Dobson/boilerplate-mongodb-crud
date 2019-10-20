const User = require('../../database/models/user');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    User.findOne( {
        username: req.body.username.toLowerCase()
    }, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if (!user || user.password !== req.body.password) {
            res.status(403);
            return next(new Error("Email or password are incorrect"));
        }
        else {
            return res.send( {
                success: true,
                user: user.toObject(),
                token: jwt.sign( user.toObject(), require('../../init/environment').SECRET )
            } )
        }
    }
     )
}