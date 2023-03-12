//1.import mongoose package
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name : {
        type : String,
        required : true
    },

    classes : {
        type : String,
        required : true
    },

    age : {
        type : Number,
        required : true
    },

    gender : {
        type : String,
        required : true
    }
})

//added this line for solve error
mongoose.models = {};

//edited
const Student =  mongoose.model.Student || mongoose.model('Student', studentSchema); 

//run model
module.exports = Student;
