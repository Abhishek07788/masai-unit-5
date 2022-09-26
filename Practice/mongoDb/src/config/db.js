const mongoose = require("mongoose") 



const connect = () =>{
    return mongoose.connect("mongodb+srv://a:a@cluster0.qdfgfu5.mongodb.net/b19")
};

module.exports = connect;