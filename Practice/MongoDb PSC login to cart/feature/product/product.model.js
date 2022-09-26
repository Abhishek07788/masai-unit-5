const mongoose = require("mongoose")

const productsSchema = new mongoose.Schema({
    name:{type:String, required: true},
    description:{type:String},
    price:{type:String, required: true},
    quantity:{type:Number, required: true,min:1, max:10},
}); 

const Products = mongoose.model("product", productsSchema);
module.exports = Products;