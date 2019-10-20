const Data = require('./modelPath');
module.exports = (req, res, next) => {
    Data.findOneAndRemove({ 
        _id: req.params.itemId,
        user: req.user._id 
    },
    (err, data) => {
        if(err){
            res.status(500);
            return next(err);
        }
        else{
            return res.send(data)
        }
    })
}