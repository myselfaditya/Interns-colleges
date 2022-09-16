const express = require("express");
const router = express.Router();
const collegeController=require('../controller/collegeController')
const internController=require('../controller/internController')


//This project is about Internship

router.post('/functionup/colleges',collegeController.createCollege)

router.post('/functionup/interns',internController.createIntern)

router.get('/functionup/collegeDetails',internController.getIntership)


module.exports = router;
