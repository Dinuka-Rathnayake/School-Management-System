//1.import packages to variables
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const Student = require('./models/student');

//2.assign packages functions
const app = express(); 
require("dotenv").config();

//3.assign port 
const PORT = process.env.PORT || 8070;

//4.run express funtions
app.use(cors());
app.use(bodyParser.json());

//5.assign database URL
const URL = process.env.MONGODB_URL;

//6.connecet Database
mongoose.connect(URL, {
    useNewUrlParser : true,
    useUnifiedTopology: false,
    
})

//7.make conection with database
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("mongodb connection is successful");
})

//8.import routes file
const studentRouter = require('./routes/students.js');

//9.run route file using express
app.use("/student", studentRouter);

//10.run server in port
app.listen(PORT, () => {
    console.log(`server is up and running on port no :  ${PORT}`)
})