import React,{useState, useEffect, createContext} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import EditStudents from "./EditStudents";

// to pass data for another component
const Name = createContext();

export default function AllStudents({setId}) {

    const [students, setStudents] = useState([]);
    let ID ;

    useEffect(() => {
        function getStudents() {
            axios.get("http://localhost:8070/student/").then((res) =>{
                setStudents(res.data);
                 console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getStudents();
        
    }, [])
    
    console.log(students)

    //delete user
    function deleteRow(id, e){
        e.preventDefault();

        axios.delete(`http://localhost:8070/student/delete/${id}`).then(res => 
            console.log('Deleted!!!', res)).catch(err => console.log(err))

            // reload page after delete
            window.location.reload(true);
        
    }

    //navigate to EditStudents component
    let navigate = useNavigate();
    const routeChange = (id, e) =>{
        ID = id;
        setId(id);
        // alert(id);
        let path = "edit/"
        navigate(path)

    }



    return(

        // students.map((students, index) =>{
        //     // console.log(students);
              
        //     return(

        //         <div key={students._id}>
   
        //             <h2 style={{color: "blue"}}>name : {students.name}</h2>
        //             <h3 >age : {students.age}</h3>
        //             <h3>gender : {students.gender}</h3> <hr />
  
        //         </div>
        //     )
                <div class="container">



                    <table className="table table-success table-striped" style={{fontSize : "32px"}} >
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Action</th>

                        <tr style={{fontSize : "32px"}}>
                            <td>
                                {students.map(post => ( 
                                    <p key={post._id}>{post.name}</p>
                                ))}
                            </td>

                            <td>
                                {students.map(post => ( 
                                    <p key={post._id}>{post.age}</p>
                                ))}
                            </td>
                                
                            <td>
                                {students.map(post => ( 
                                    <p key={post._id}>{post.gender}</p>
                                ))}
                                
                            </td>

                            <td>
                                 {students.map(post => ( 
                                    <p key={post._id}>
                                        
                                        {/* <Link to={"edit/"+post._id}> */}
                                        <button type="button" class="btn btn-primary" onClick={(e) => routeChange(post._id, e)}>Edit</button>
                                        {/* </Link> */}
                                        <span>   </span>
                                        <button type="button" class="btn btn-danger" onClick={(e) => deleteRow(post._id, e)}>Delete</button>

                                        
                                    </p>

                                ))}
                            
                            </td>

                        </tr>
                    </table>
                </div>
           
        // })


        
    )
    alert('hi')
    
}
