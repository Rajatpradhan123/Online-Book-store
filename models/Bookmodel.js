const mongoose = require("mongoose");

const Bookmodel = new mongoose.Schema({
    title:String,
    Author:String,
    Price:Number,
    quantity:Number,
    Category:String,
    description:String,
})

const Books = mongoose.model("book",Bookmodel);

module.exports = Books;