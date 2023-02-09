const express = require('express');
const router = require('./src/route/api');
const app = new express();
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');



// security middleware
const helmet = require('helmet');
const cors = require('cors');
const hpp = require('hpp');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');


//Security middleware implementation
app.use(helmet());
app.use(cors());
app.use(mongoSanitize());
app.use(hpp());
app.use(xss());
app.use(express.json());
app.use(express.urlencoded({ extended:false }));


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minute
    max: 100 // max limit per windowMs
});


// DB connection
const URI = process.env.DATABASE;
const OPTION = {user:'crud55', pass:'551905', autoIndex:true};
mongoose.connect(URI, OPTION, (err)=>{
    console.log('DB connected');
    console.log(err);
});

//router version
app.use("/api/v1", router);


// Add React Front End Routing
app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})



module.exports=app;
