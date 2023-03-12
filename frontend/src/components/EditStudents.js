import React,{useState, useEffect} from "react";
import axios from "axios";


export default function  editStudent({selectId}) {
    
    
    const iD = selectId;
    const [names, setName] = useState("");
    const [ages, setAge] = useState("");
    const [genders,setGender] = useState("");
    const [classes, setClasses] = useState("");
    const[id, setID] = useState(iD);
    const [newStudent, setNewStudent] = useState([])
    const [newUpdateStudent, setNewUpdateStudent] = useState({})

    useEffect(() => {
        
        axios.get(`http://localhost:8070/student/get/${id}`).then((res) =>{
            setNewStudent(res.data.student);
            setID(id)
            console.log(res.data.student.name)
            const newName = res.data.student.name
            console.log(newName)
            setName(newName)
            setAge(res.data.student.age)
            setGender(res.data.student.gender)

            console.log(res.data.student.classes)
            setClasses(res.data.student.classes)

        }).catch((err) => {
            alert(err.message);
        })
        
        
    
    },[])



    if (!newStudent) {
        return <div>Loading...</div>;
      }
      

    
    //update function
    function updateUser(e) {
        e.preventDefault();
        const updateStudent = {
            names, ages, genders, classes
        }
        setNewUpdateStudent(updateStudent);
        if (!newUpdateStudent) {
            // return <div>Loading...</div>;
             setNewUpdateStudent(updateStudent);
          }

        console.log(updateStudent)
        
        
        // console.log(newUpdateStudent)
        axios.put(`http://localhost:8070/student/update/${id}`,updateStudent).then((res) => {
            
            console.log(id) ;
        }).catch((err) =>{
            alert(err)
        })
    }
    
    
    return(

        <div className="container">
            <h1>Edit Student</h1>
            {/* <h1>{selectId}</h1> */}
            
            {console.log("this is " + names)}
            {console.log("this is " + ages)}
            {console.log("this is " + genders)}
            {console.log("this is " + classes)}

           {/* <h2>{newStudent.name}</h2> */}
            
          
           
            <form onSubmit={updateUser}>
                
            <div className="mb-3">
                <label for="name" className="form-label">Student Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter student name.." value={names} onChange={(e)=>{
                    setName(e.target.value);
                }} />
                

            </div>
            <div className="mb-3">
                <label for="age" className="form-label">Student Age</label>
                <input type="number" className="form-control" id="age" placeholder="enter student age.." value={ages} onChange={(e) => {
                    setAge(e.target.value);
                }} />
            </div>

            <div className="mb-3">
                <label for="gender" className="form-label">Student Gender</label>
                <input type="text" className="form-control" id="gender" placeholder="enter student gender.." value={genders} onChange={(e) => {
                    setGender(e.target.value);
                }} />
            </div>

            <div className="mb-3">
                <label for="classes" className="form-label">Student's Class</label>
                <input type="text" className="form-control" id="classes" placeholder="enter student class.." value={classes} onChange={(e) => {
                    setClasses(e.target.value);
                }} />
            </div>


            <button type="submit" className="btn btn-primary" >Submit</button>
            </form>

            {console.log("hii")}
            
        </div>
    )
}

