const Data = require('./modelPath');
module.exports = (req, res, next) => {
    const newData = new Data(req.body);
    newData.user = req.user._id;
    newData.save( (err, savedData) => {
        if(err){
            res.status(500);
            return next(err);
        }
        else{
            return res.status(201).send(savedData)
        }
    })
}