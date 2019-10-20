const User = require('../../database/models/user');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    User.findOne({ username: req.body.username }, (err, existingUser) => {
        if(err) {
            res.status(500);
            return next(err);
        }
        if(existingUser) {
            res.status(400);
            return next(new Error("That username already exists!"));
        }
        else {
            const newUser = new User(req.body);
            newUser.save((err, user) => {
                if(err){
                    res.status(500);
                    return next(err);
                }
                return res.status(201).send( {
                    success: true, 
                    user: user.toObject(), 
                    token: jwt.sign( user.toObject(), require('../../init/environment').SECRET )
                } );
            })
        }
    })

}