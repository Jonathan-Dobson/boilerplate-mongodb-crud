const {
    MONGO_USER,
    MONGO_PASS,
    MONGO_HOST,
    MONGO_DB
} = require('../init/environment');

const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
};

const uri = `mongodb+srv://${
        MONGO_USER }:${
        MONGO_PASS }@${
        MONGO_HOST }/${
        MONGO_DB }?retryWrites=true&w=majority`;

module.exports = require('mongoose').connect(uri, options, 
    () => console.log(`Connected to ${MONGO_HOST}/${MONGO_DB}`));