const mongoose = require('mongoose')
const dataSchema = mongoose.Schema({
    courseName: {type:String},
    courseCode: {type:String},
    coursePrice: {type:String},
    qty: {type:String},
    totalPrice: {type:String},
    createDate: {type:Date, default:Date.now()}
},{versionKey:false});

const courseModel=mongoose.model('courses', dataSchema);
module.exports=courseModel;