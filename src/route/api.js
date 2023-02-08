const express = require('express');
const courseController = require('../controller/courseController');
const router = express.Router();

//CRUD API endpoint here
router.post("/create", courseController.createCourse);
router.get("/read", courseController.readCourse);
router.get("/readById/:id", courseController.readByID);
router.post("/update/:id", courseController.updateCourse);
router.get("/delete/:id", courseController.deleteCourse);



module.exports=router;