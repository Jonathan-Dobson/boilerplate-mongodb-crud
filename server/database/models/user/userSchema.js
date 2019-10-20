const {Schema, model} = require("mongoose");

const userSchema = new Schema({  
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre("save", require('./hashPassword'))
userSchema.methods.checkPassword = require('./checkPassword')
userSchema.methods.withoutPassword = require('./withoutPassword')

module.exports = model("User", userSchema);