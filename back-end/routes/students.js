//1.import packages
const router = require("express").Router();
let Student = require("../models/Student.js");

//2.execute Router function to send data to database
router.route("/add").post((req, res) =>{
    const name = req.body.name; //assign the data which are comming from frontend to variables 
    const age = req.body.age;
    const gender = req.body.gender;

    // create object of Student model
    const newStudent = new Student({
        name,
        age,
        gender
    })

    //pass the object to mongodb trough Student model
    newStudent.save().then(() =>{
        res.json("Student Added");  
    }).catch(() => {
        console.log(err);
    })
})


router.route("/").get((req, res) => {
    Student.find().then((students) =>{
        res.json(students)
    }).catch(() => {
        console.log(err);
    })
})


router.route("/update/:id").put(async (req, res) =>{
    let userId = req.params.id;
    console.log("user id is : " + userId);
    
    // const {names, ages, genders} = req.body;
    // console.dir("user name is : " + req.body.names);
    const name = req.body.names;
    const age = req.body.ages;
    const gender = req.body.genders;
    // console.dir(names);

    const updateStudent = {
        name,
        age,
        gender
    }
    
    const update = await Student.findByIdAndUpdate(userId, updateStudent).then(() => {
        
        res.status(200).send({status: "user updated"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data ", error: err.message});
    })

})

router.route("/delete/:id").delete(async(req, res) => {
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId).then(() =>{
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with deleting user", error: err.message});
    })
})

router.route("/get/:id").get(async(req, res) =>{
    let userId = req.params.id;

    await Student.findById(userId).then((student) => {
        res.status(200).send({status: "user fetch", student})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status : "Error with get user", error:err.message}); 
    })
    
})

//run route
module.exports = router;