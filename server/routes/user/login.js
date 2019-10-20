const User = require('../../database/models/user/userSchema');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    User.findOne( {
        username: req.body.username.toLowerCase()
    }, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if (!user) {
            res.status(401);
            return next(new Error("Username or password are incorrect"));
        }
        else {
            user.checkPassword(req.body.password, 
                (err, match)=>{
                    if(err){
                        return res.status(500).send(err);
                    }
                    if(!match){
                        return res.status(401).send({
                            success: false,
                            message: "Username or password are incorrect."
                        });
                    }
                    return res.send( {
                        success: true,
                        user: user.withoutPassword(),
                        token: jwt.sign( user.withoutPassword(), require('../../init/environment').SECRET )
                    } );
                })

            
        }
    }
     )
}