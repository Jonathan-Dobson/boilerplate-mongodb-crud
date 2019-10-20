const {Schema, model} = require("mongoose");

const userSchema = new Schema({  
    title: String,
    description: String,
    value: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = model("Data", userSchema);