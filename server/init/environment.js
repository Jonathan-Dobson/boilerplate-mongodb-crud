require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 5000,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASS: process.env.MONGO_PASS,
    MONGO_HOST: process.env.MONGO_HOST,
    MONGO_DB: process.env.MONGO_DB,
    SECRET: process.env.SECRET
}