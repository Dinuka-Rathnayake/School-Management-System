import React,{useState} from "react";
import AllStudents from "../AllStudents";

export default function home() {

    return(
        <div>
            <h1 style={{color:"#34568B", padding: "20px", fontWeight: "400px", fontFamily: "Fantasy", backgroundColor : "#e3f2fd"}}>All Students</h1> <hr />

            <AllStudents />
        </div>

        
    )
}