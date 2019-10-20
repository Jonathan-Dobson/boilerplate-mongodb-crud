const Data = require('./modelPath');
module.exports = (req, res, next) => {
    Data.findOne({ 
        _id: req.params.itemId,
        user: req.user._id 
    } , (err, data) => {
        if(err){
            res.status(500);
            return next(err);
        }
        if(!data) {
            res.status(404);
            return next(new Error("No Items"))
        }
        else{
            return res.send(data)
        }
    })
}