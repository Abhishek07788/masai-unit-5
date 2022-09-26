const mongoose = require("mongoose") 

const userSchema = new mongoose.Schema({
    first_name: {type:String, required: true},
    last_name: {type: String},
    email:{type: String, required:true, unique:true},
    gender: String,
    age: {type:Number, min:18, max:60, required:true},
});

const users = mongoose.model("users", userSchema)
module.exports = users;


