import React, {useState} from "react";
import axios from "axios";

export default function AddStudents() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender,setGender] = useState("");
    const [classes,setClasses] = useState("");
 
    function sendData(e) {
         
        e.preventDefault();
        const newStudent = {
            name, age, gender, classes       
        }
        
    

        axios.post("http://localhost:8070/student/add", newStudent).then(() => {
            alert('student added');
            
        }).catch((err) =>{
            alert(err)
        })
    
    }

    return(
        <div className="container">

            <form onSubmit={sendData}>
            <div className="mb-3">
                <label for="name" className="form-label">Student Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter student name.." onChange={(e)=>{
                    setName(e.target.value);
                }} />
                
            </div>
            <div className="mb-3">
                <label for="age" className="form-label">Student Age</label>
                <input type="number" className="form-control" id="age" placeholder="enter student age.." onChange={(e) => {
                    setAge(e.target.value);
                }} />
            </div>

            <div className="mb-3">
                <label for="gender" className="form-label">Student Gender</label>
                <input type="text" className="form-control" id="gender" placeholder="enter student gender.." onChange={(e) => {
                    setGender(e.target.value);
                }} />
            </div>

            <div className="mb-3">
                <label for="classes" className="form-label">Student's Class</label>
                <input type="text" className="form-control" id="classes" placeholder="enter student class.." onChange={(e) => {
                    setClasses(e.target.value);
                }} />
            </div>


            <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}