const courseModel = require('../model/courseModel');

// create course

exports.createCourse = (req, res)=>{
    let reqBody = req.body;
    courseModel.create(reqBody, (err, data)=>{
        if (err){
            res.status(400).json({status:"Fail", data:err})
        }
        else{
            res.status(200).json({status:"Success", data: data})
        }
    })
}


// read course

exports.readCourse = (req, res)=>{
    let query = {};
    let projection = "courseName courseCode coursePrice qty totalPrice";
    courseModel.find(query, projection, (err, data)=>{
        if (err){
            res.status(400).json({status:"Fail", data:err})
        }
        else{
            res.status(200).json({status:"Success", data: data})
        }
    })

}


// Read course by id
exports.readByID=(req,res)=>{
    let id= req.params.id;
    let Query={_id:id};
    courseModel.find(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

// update course
exports.updateCourse = (req, res)=>{
    let id = req.params.id;
    let query = {_id:id};
    let reqBody = req.body;

    courseModel.updateOne(query, reqBody, (err, data)=>{
        if (err){
            res.status(400).json({status:"Fail", data:err})
        }
        else{
            res.status(200).json({status:"Success", data: data})
        }
    })
}


// Delete course
exports.deleteCourse = (req, res)=>{
    let id = req.params.id;
    let query = {_id:id};

    courseModel.remove(query, (err, data)=>{
        if (err){
            res.status(400).json({status:"Fail", data:err})
        }
        else{
            res.status(200).json({status:"Success", data: data})
        }
    })
}